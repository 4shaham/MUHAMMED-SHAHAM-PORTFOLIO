// 'use client';

// import { motion } from 'framer-motion';

// export default function HeroSection() {
//   return (
//     <section id="home" className="min-h-screen flex flex-col justify-between pt-16">
//       <div className="flex-1 flex flex-col justify-center px-6 md:px-16 max-w-[1400px] w-full">
//         <div className="py-16">
//           {/* Line 1: Learn.Imagine.Build. */}
//           <div className="overflow-hidden">
//             <motion.h1
//               initial={{ y: '100%', opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
//               className="text-[clamp(3rem,7.5vw,8.5rem)] font-light leading-none tracking-tight text-[#333]"
//             >
//               Learn.Imagine.Build.
//             </motion.h1>
//           </div>

//           {/* Line 2: Innovate.Grow. */}
//           <div className="overflow-hidden">
//             <motion.h1
//               initial={{ y: '100%', opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
//               className="text-[clamp(3rem,7.5vw,8.5rem)] font-light leading-none tracking-tight text-[#333]"
//             >
//               Innovate.Grow.
//             </motion.h1>
//           </div>

//           <motion.p
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.55 }}
//             className="mt-8 text-base text-[#666] font-light"
//           >
//             Crafting digital experiences with precision and flair.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.7 }}
//             className="mt-6"
//           >
//             <a
//               href="#contact"
//               id="open-to-work-btn"
//               className="inline-flex items-center gap-2 border border-[#333] rounded-full px-5 py-2 text-sm text-[#22c55e] hover:bg-[#333] hover:text-[#e2e2e2] transition-all duration-300"
//             >
//               Open to Work
//             </a>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll chevron — centered bottom */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.1 }}
//         className="flex justify-center pb-8"
//       >
//         <motion.svg
//           animate={{ y: [0, 6, 0] }}
//           transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
//           width="22"
//           height="14"
//           viewBox="0 0 22 14"
//           fill="none"
//           className="text-[#555]"
//         >
//           <path d="M1 1L11 11L21 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//         </motion.svg>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const WAVE_RADIUS = 3; // letters affected on each side of the cursor
const LIFT = 16; // max lift, in % of the line height

const spring = {
  type: "spring",
  stiffness: 380,
  damping: 20,
  mass: 0.6,
} as const;

function HoverLine({ text, delay }: { text: string; delay: number }) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const chars = Array.from(text);

  return (
    // overflow-hidden only masks the entrance. It is removed afterwards,
    // otherwise it would clip the letters when they lift on hover.
    <span
      aria-hidden
      className={`block pb-[0.1em] ${revealed ? "overflow-visible" : "overflow-hidden"}`}
    >
      <motion.span
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
        onAnimationComplete={() => setRevealed(true)}
        onMouseLeave={() => setActive(null)}
        className="block cursor-default select-none"
      >
        {chars.map((char, i) => {
          const distance = active === null ? null : Math.abs(i - active);
          const strength =
            distance === null ? 0 : Math.max(0, 1 - distance / WAVE_RADIUS);

          return (
            <motion.span
              key={i}
              onMouseEnter={() => !reduceMotion && setActive(i)}
              animate={{
                y: `${-LIFT * strength}%`,
                scale: 1 + 0.08 * strength * strength,
                opacity: distance === null ? 1 : 0.35 + 0.65 * strength,
                color: distance === 0 ? "#000000" : "#333333",
              }}
              transition={spring}
              className="inline-block origin-bottom"
            >
              {char}
            </motion.span>
          );
        })}
      </motion.span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Hero section                                                        */
/* ------------------------------------------------------------------ */

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-between pt-16 overflow-x-hidden"
    >
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-16 w-full">
        <div className="py-16">
          {/* One h1 for SEO / screen readers, the two lines are visual only */}
          <h1
            aria-label="Learn. Imagine. Build. Innovate. Grow."
            className="text-[clamp(2.25rem,7.5vw,8.5rem)] font-light leading-none tracking-tight text-[#333]"
          >
            <HoverLine text="Learn.Imagine.Build." delay={0.1} />
            <HoverLine text="Innovate.Grow." delay={0.22} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 text-base text-[#666] font-light"
          >
            Crafting digital experiences with precision and flair.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-6"
          >
            <a
              href="#contact"
              id="open-to-work-btn"
              className="inline-flex items-center gap-2 border border-[#333] rounded-full px-5 py-2 text-sm text-[#22c55e] hover:bg-[#333] hover:text-[#e2e2e2] transition-all duration-300"
            >
              Open to Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll chevron — centered bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="flex justify-center pb-8"
      >
        <motion.svg
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          width="22"
          height="14"
          viewBox="0 0 22 14"
          fill="none"
          className="text-[#555]"
        >
          <path
            d="M1 1L11 11L21 1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
}
