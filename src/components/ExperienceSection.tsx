"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const experiences = [
  {
    id: "01",
    period: "Mar 2025 –Aug 2026 ",
    duration: "1 year+",
    company: "Subhx Infotech",
    role: "Full Stack Developer",
    tech: "Next.js & TypeScript & Node.js",
  },
  {
    id: "02",
    period: "Sep 2023 – Jan 2025",
    duration: "1 year+",
    company: "Brototype",
    role: "Full Stack Developer(Internship)",
    tech: "React & Tailwind",
  },
];

function ExperienceRow({
  exp,
  index,
  inView,
}: {
  exp: (typeof experiences)[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: index * 0.09,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border-b border-[#333]/10 cursor-default transition-colors duration-200 rounded-lg"
      style={{
        backgroundColor: hovered ? "rgba(51,51,51,0.04)" : "transparent",
      }}
    >
      {/* ── Mobile card layout (hidden on md+) ── */}
      <div className="flex flex-col gap-1.5 py-5 px-4 md:hidden">
        <p className="text-[10px] tracking-[0.16em] uppercase text-[#bbb] font-medium">
          {exp.period}
          <span className="ml-2 text-[#ddd]">·</span>
          <span className="ml-2 text-[#ccc]">{exp.duration}</span>
        </p>
        <p className="text-base font-semibold text-[#333]">{exp.company}</p>
        <p className="text-sm text-[#666] font-light">{exp.role}</p>
        <p className="text-xs text-[#999] font-mono">{exp.tech}</p>
      </div>

      {/* ── Desktop table row layout (hidden below md) ── */}
      <div className="hidden md:grid md:grid-cols-[180px_1fr_1fr] items-center py-5 px-6">
        {/* Left: Period + duration */}
        <div>
          <p className="text-sm text-[#333] font-medium leading-tight">
            {exp.period}
          </p>
          <p className="text-xs text-[#999] mt-0.5 font-light">{exp.duration}</p>
        </div>

        {/* Center: Company */}
        <div>
          <p
            className="text-base font-medium transition-colors duration-200"
            style={{ color: hovered ? "#111" : "#444" }}
          >
            {exp.company}
          </p>
        </div>

        {/* Right: Role | Tech */}
        <div className="flex items-center gap-2 justify-end text-right">
          <span className="text-sm text-[#666] font-light font-mono">
            {exp.role}
            <span className="mx-2 text-[#ccc]">|</span>
            {exp.tech}
          </span>
          <motion.span
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -6 }}
            transition={{ duration: 0.2 }}
            className="text-[#999] text-lg select-none"
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const totalYears = "3 years 9 months";

  return (
    <section id="experience" className="w-full px-6 md:px-16 py-24 md:py-36">
      <div className="border-t border-[#333]/12 pt-16" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-[#999] mb-4 font-medium">
              Work History
            </p>
            <h2 className="text-[clamp(2rem,6vw,5rem)] font-light text-[#333] leading-none">
              Experience.
            </h2>
          </div>
          <p className="text-[#999] text-sm font-light md:text-right max-w-xs leading-relaxed">
            A journey of building products, shipping features, and collaborating
            with teams across industries.
          </p>
        </motion.div>

        {/* Table header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="hidden md:grid md:grid-cols-[180px_1fr_1fr] px-6 pb-3 border-b border-[#333]/12"
        >
          <span className="text-[10px] tracking-[0.18em] uppercase text-[#bbb] font-medium">
            Period
          </span>
          <span className="text-[10px] tracking-[0.18em] uppercase text-[#bbb] font-medium">
            Company
          </span>
          <span className="text-[10px] tracking-[0.18em] uppercase text-[#bbb] font-medium text-right">
            Role
          </span>
        </motion.div>

        {/* Rows */}
        <div className="flex flex-col mt-1">
          {experiences.map((exp, i) => (
            <ExperienceRow key={exp.id} exp={exp} index={i} inView={inView} />
          ))}
        </div>

        {/* Footer: total experience */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex justify-end mt-6 pr-4 md:pr-6"
        >
          <div className="text-right">
            <p className="text-xs text-[#bbb] font-light tracking-wide">
              Work experience
            </p>
            <p className="text-sm text-[#555] font-medium italic mt-0.5">
              {totalYears}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
