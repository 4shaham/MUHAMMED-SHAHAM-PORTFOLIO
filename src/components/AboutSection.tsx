"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="w-full px-6 md:px-16 py-24 md:py-36"
    >
      <div className="border-t border-[#333]/12 pt-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.18em] uppercase text-[#999] mb-8 font-medium"
        >
          Developer based in Kerala, IN
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="text-[clamp(1.5rem,3.5vw,3rem)] font-light leading-snug text-[#333] mb-10 max-w-7xl"
        >
          Hi, I’m <strong className="font-bold">Muhammed Shaham</strong>, a Full
          Stack Developer specializing in Next.js, React, Node.js, and MERN. I
          build scalable web applications, REST APIs, real-time features, and
          database-driven solutions. I enjoy solving problems, learning new
          technologies, and turning ideas into practical products.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            id="more-about-btn"
            href="/about"
            className="border border-[#333]/25 rounded-full px-7 py-2.5 text-xs tracking-[0.15em] uppercase text-[#333] font-medium hover:bg-[#333] hover:text-[#e2e2e2] transition-all duration-300"
          >
            More About Me
          </Link>
          <a
            id="resume-btn"
            href="/Muhammed_Shaham_V_Resume.pdf"
            target="_self"
            rel="noopener noreferrer"
            className="border border-[#333]/25 rounded-full px-7 py-2.5 text-xs tracking-[0.15em] uppercase text-[#333] font-medium hover:bg-[#333] hover:text-[#e2e2e2] transition-all duration-300"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
