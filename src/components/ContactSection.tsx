'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="w-full px-4 sm:px-6 md:px-16" ref={ref}>
      {/* Full-height centered CTA — matches reference */}
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center py-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.5rem,9vw,9rem)] font-light text-[#333] leading-none mb-6"
        >
          Let&apos;s chat.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-[#777] font-light text-base max-w-sm text-center mb-10"
        >
          Unleashing brand potential through creative design and innovation.
        </motion.p>

        <motion.div
          id="get-in-touch-btn"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.28 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            href="/contact"
            className="border border-[#333]/30 rounded-full px-8 sm:px-12 py-4 text-sm tracking-[0.12em] uppercase text-[#333] font-light hover:bg-[#333] hover:text-[#e2e2e2] transition-all duration-300 inline-block"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
