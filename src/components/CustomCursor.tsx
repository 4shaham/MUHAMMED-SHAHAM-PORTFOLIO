// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// export default function CustomCursor() {
//   const [pos, setPos] = useState({ x: -200, y: -200 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);

//     const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
//     window.addEventListener('mousemove', move);

//     const handleEnter = () => setIsHovering(true);
//     const handleLeave = () => setIsHovering(false);

//     const attachListeners = () => {
//       document.querySelectorAll('a, button').forEach(el => {
//         el.addEventListener('mouseenter', handleEnter);
//         el.addEventListener('mouseleave', handleLeave);
//       });
//     };

//     attachListeners();
//     const obs = new MutationObserver(attachListeners);
//     obs.observe(document.body, { childList: true, subtree: true });

//     return () => {
//       window.removeEventListener('mousemove', move);
//       obs.disconnect();
//     };
//   }, []);

//   if (!mounted) return null;

//   return (
//     <>
//       {/* Small dot */}
//       <motion.div
//         className="fixed z-[9999] pointer-events-none rounded-full bg-[#333]"
//         style={{
//           width: 8,
//           height: 8,
//           top: pos.y - 4,
//           left: pos.x - 4,
//         }}
//         animate={{ scale: isHovering ? 0.5 : 1 }}
//         transition={{ type: 'spring', stiffness: 600, damping: 30 }}
//       />
//       {/* Ring */}
//       <motion.div
//         className="fixed z-[9998] pointer-events-none rounded-full border border-[#333]/40"
//         style={{
//           width: 36,
//           height: 36,
//           top: pos.y - 18,
//           left: pos.x - 18,
//         }}
//         animate={{ scale: isHovering ? 1.6 : 1 }}
//         transition={{ type: 'spring', stiffness: 150, damping: 18 }}
//       />
//     </>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Modern cursor
 * - dot follows the mouse instantly, ring follows with a soft spring lag
 * - links / buttons: ring grows and softly fills, the dot disappears
 * - add data-cursor-label="View" to any element: ring becomes a filled bubble with that text
 * - press: ring squeezes
 * - hidden on touch devices, and when the mouse leaves the window
 * - no React re-render on mouse move (motion values), so it stays smooth
 */

const HIDE_NATIVE_CURSOR = true;

const INTERACTIVE =
  'a, button, [role="button"], summary, label[for], input[type="submit"], [data-cursor="hover"]';

type Variant = "default" | "hover" | "label";

const SIZE: Record<Variant, number> = { default: 36, hover: 64, label: 92 };

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [variant, setVariant] = useState<Variant>("default");
  const [label, setLabel] = useState("");
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ringX = useSpring(x, { stiffness: 170, damping: 20, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 170, damping: 20, mass: 0.6 });

  useEffect(() => {
    // Only on devices with a real mouse
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;
    setEnabled(true);
    if (HIDE_NATIVE_CURSOR)
      document.documentElement.classList.add("has-custom-cursor");

    let first = true;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (first) {
        // start the ring exactly under the pointer (no fly-in from the corner)
        ringX.jump(e.clientX);
        ringY.jump(e.clientY);
        first = false;
        setVisible(true);
      }
    };

    // Event delegation: works for elements added later, no MutationObserver needed
    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target?.closest) return;

      const labelEl = target.closest<HTMLElement>("[data-cursor-label]");
      if (labelEl) {
        setLabel(labelEl.dataset.cursorLabel ?? "");
        setVariant("label");
      } else if (target.closest(INTERACTIVE)) {
        setVariant("hover");
      } else {
        setVariant("default");
      }
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => !first && setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y, ringX, ringY]);

  if (!enabled) return null;

  const size = SIZE[variant] * (pressed ? 0.85 : 1);

  return (
    <>
      {/* Dot: follows instantly */}
      <motion.div
        aria-hidden
        style={{ x, y }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: variant === "default" ? (pressed ? 0.7 : 1) : 0,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-1 -mt-1 h-2 w-2 rounded-full bg-[#333]"
      />

      {/* Ring: follows with a spring, changes shape by state */}
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY }}
        animate={{
          opacity: visible ? 1 : 0,
          width: size,
          height: size,
          marginLeft: -size / 2,
          marginTop: -size / 2,
          backgroundColor:
            variant === "label"
              ? "rgba(51,51,51,1)"
              : variant === "hover"
                ? "rgba(51,51,51,0.1)"
                : "rgba(51,51,51,0)",
          borderColor:
            variant === "default" ? "rgba(51,51,51,0.4)" : "rgba(51,51,51,0.9)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.6 }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] flex items-center justify-center rounded-full border"
      >
        <motion.span
          animate={{
            opacity: variant === "label" ? 1 : 0,
            scale: variant === "label" ? 1 : 0.6,
          }}
          transition={{ duration: 0.2 }}
          className="select-none text-xs font-medium tracking-wide text-[#e2e2e2]"
        >
          {label}
        </motion.span>
      </motion.div>

      <style jsx global>{`
        .has-custom-cursor,
        .has-custom-cursor * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
