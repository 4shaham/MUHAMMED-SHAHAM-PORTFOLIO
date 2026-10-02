'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);

    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    const attachListeners = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', handleEnter);
        el.addEventListener('mouseleave', handleLeave);
      });
    };

    attachListeners();
    const obs = new MutationObserver(attachListeners);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', move);
      obs.disconnect();
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Small dot */}
      <motion.div
        className="fixed z-[9999] pointer-events-none rounded-full bg-[#333]"
        style={{
          width: 8,
          height: 8,
          top: pos.y - 4,
          left: pos.x - 4,
        }}
        animate={{ scale: isHovering ? 0.5 : 1 }}
        transition={{ type: 'spring', stiffness: 600, damping: 30 }}
      />
      {/* Ring */}
      <motion.div
        className="fixed z-[9998] pointer-events-none rounded-full border border-[#333]/40"
        style={{
          width: 36,
          height: 36,
          top: pos.y - 18,
          left: pos.x - 18,
        }}
        animate={{ scale: isHovering ? 1.6 : 1 }}
        transition={{ type: 'spring', stiffness: 150, damping: 18 }}
      />
    </>
  );
}
