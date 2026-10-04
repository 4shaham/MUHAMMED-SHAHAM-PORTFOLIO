// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef, useState } from "react";

// const experiences = [
//   {
//     id: "01",
//     period: "Mar 2025 –Aug 2026 ",
//     duration: "1 year 6 months",
//     company: "Subhx Infotech",
//     role: "Full Stack Developer",
//     tech: "Next.js · TypeScript · Node.js · PostgreSQL · Sequelize · Socket.IO · Redux · Tailwind",
//   },
//   {
//     id: "02",
//     period: "Sep 2023 – Jan 2025",
//     duration: "1 year 5 months",
//     company: "Brototype",
//     role: "Full Stack Developer · Training",
//     tech: "React · Next.js · Node.js · MongoDB · Redux · Socket.IO · AWS · Docker",
//   },
// ];

// function ExperienceRow({
//   exp,
//   index,
//   inView,
// }: {
//   exp: (typeof experiences)[0];
//   index: number;
//   inView: boolean;
// }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 24 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{
//         duration: 0.55,
//         delay: index * 0.09,
//         ease: [0.16, 1, 0.3, 1],
//       }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="border-b border-[#333]/10 cursor-default transition-colors duration-200 rounded-lg"
//       style={{
//         backgroundColor: hovered ? "rgba(51,51,51,0.04)" : "transparent",
//       }}
//     >
//       {/* ── Mobile card layout (hidden on md+) ── */}
//       <div className="flex flex-col gap-1.5 py-5 px-4 md:hidden">
//         <p className="text-[10px] tracking-[0.16em] uppercase text-[#bbb] font-medium">
//           {exp.period}
//           <span className="ml-2 text-[#ddd]">·</span>
//           <span className="ml-2 text-[#ccc]">{exp.duration}</span>
//         </p>
//         <p className="text-base font-semibold text-[#333]">{exp.company}</p>
//         <p className="text-sm text-[#666] font-light">{exp.role}</p>
//         <p className="text-xs text-[#999] font-mono">{exp.tech}</p>
//       </div>

//       {/* ── Desktop table row layout (hidden below md) ── */}
//       <div className="hidden md:grid md:grid-cols-[180px_1fr_1fr] items-center py-5 px-6">
//         {/* Left: Period + duration */}
//         <div>
//           <p className="text-sm text-[#333] font-medium leading-tight">
//             {exp.period}
//           </p>
//           <p className="text-xs text-[#999] mt-0.5 font-light">
//             {exp.duration}
//           </p>
//         </div>

//         {/* Center: Company */}
//         <div>
//           <p
//             className="text-base font-medium transition-colors duration-200"
//             style={{ color: hovered ? "#111" : "#444" }}
//           >
//             {exp.company}
//           </p>
//         </div>

//         {/* Right: Role | Tech */}
//         <div className="flex items-center gap-2 justify-end text-right">
//           <span className="text-sm text-[#666] font-light font-mono">
//             {exp.role}
//             <span className="mx-2 text-[#ccc]">|</span>
//             {exp.tech}
//           </span>
//           <motion.span
//             animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -6 }}
//             transition={{ duration: 0.2 }}
//             className="text-[#999] text-lg select-none"
//           >
//             →
//           </motion.span>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default function ExperienceSection() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-80px" });

//   const totalYears = "2 years 11 months";

//   return (
//     <section id="experience" className="w-full px-6 md:px-16 py-24 md:py-36">
//       <div className="border-t border-[#333]/12 pt-16" ref={ref}>
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7 }}
//           className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
//         >
//           <div>
//             <p className="text-xs tracking-[0.18em] uppercase text-[#999] mb-4 font-medium">
//               Work History
//             </p>
//             <h2 className="text-[clamp(2rem,6vw,5rem)] font-light text-[#333] leading-none">
//               Experience.
//             </h2>
//           </div>
//           <p className="text-[#999] text-sm font-light md:text-right max-w-xs leading-relaxed">
//             A journey of building products, shipping features, and collaborating
//             with teams across industries.
//           </p>
//         </motion.div>

//         {/* Table header */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={inView ? { opacity: 1 } : {}}
//           transition={{ duration: 0.5, delay: 0.15 }}
//           className="hidden md:grid md:grid-cols-[180px_1fr_1fr] px-6 pb-3 border-b border-[#333]/12"
//         >
//           <span className="text-[10px] tracking-[0.18em] uppercase text-[#bbb] font-medium">
//             Period
//           </span>
//           <span className="text-[10px] tracking-[0.18em] uppercase text-[#bbb] font-medium">
//             Company
//           </span>
//           <span className="text-[10px] tracking-[0.18em] uppercase text-[#bbb] font-medium text-right">
//             Role
//           </span>
//         </motion.div>

//         {/* Rows */}
//         <div className="flex flex-col mt-1">
//           {experiences.map((exp, i) => (
//             <ExperienceRow key={exp.id} exp={exp} index={i} inView={inView} />
//           ))}
//         </div>

//         {/* Footer: total experience */}
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5, delay: 0.55 }}
//           className="flex justify-end mt-6 pr-4 md:pr-6"
//         >
//           <div className="text-right">
//             <p className="text-xs text-[#bbb] font-light tracking-wide">
//               Work experience
//             </p>
//             <p className="text-sm text-[#555] font-medium italic mt-0.5">
//               {totalYears}
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, type CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiSequelize,
  SiSocketdotio,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiRedis,
  SiFigma,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaAws, FaDocker } from "react-icons/fa";

type Tech = { name: string; icon: IconType; color: string };

const TECH = {
  next: { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  react: { name: "React", icon: FaReact, color: "#0EA5C9" },
  ts: { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  node: { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  postgres: { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  sequelize: { name: "Sequelize", icon: SiSequelize, color: "#52B0E7" },
  mongo: { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  socket: { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
  redux: { name: "Redux", icon: SiRedux, color: "#764ABC" },
  tailwind: { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  aws: { name: "AWS", icon: FaAws, color: "#FF9900" },
  docker: { name: "Docker", icon: FaDocker, color: "#2496ED" },
  express: { name: "Express.js", icon: SiExpress, color: "#000000" },
  redis: { name: "Redis", icon: SiRedis, color: "#DC382D" },
  figma: { name: "Figma", icon: SiFigma, color: "#F24E1E" },
} satisfies Record<string, Tech>;

const experiences: {
  id: string;
  period: string;
  duration: string;
  company: string;
  role: string;
  tech: Tech[];
}[] = [
  {
    id: "01",
    period: "Mar 2025 – Aug 2026",
    duration: "1 year 6 months",
    company: "Subhx Infotech",
    role: "Full Stack Developer",
    tech: [
      TECH.next,
      TECH.ts,
      TECH.node,
      TECH.postgres,
      TECH.sequelize,
      TECH.socket,
      TECH.redux,
      TECH.tailwind,
      TECH.express,
      TECH.figma,
      TECH.redis,
    ],
  },
  {
    id: "02",
    period: "Sep 2023 – Jan 2025",
    duration: "1 year 5 months",
    company: "Brototype",
    role: "Full Stack Developer · Training",
    tech: [
      TECH.react,
      TECH.next,
      TECH.node,
      TECH.mongo,
      TECH.redux,
      TECH.socket,
      TECH.aws,
      TECH.docker,
    ],
  },
];

/* Plus icon that rotates into a cross when the row is open */
function Toggle({ open }: { open: boolean }) {
  return (
    <motion.span
      animate={{ rotate: open ? 45 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-[#555] transition-colors duration-300 group-hover:border-[#333]/50 ${
        open ? "border-[#333]/50 bg-[#333]/[0.06]" : "border-[#333]/20"
      }`}
      aria-hidden
    >
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 2v12M2 8h12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </motion.span>
  );
}

function ExperienceRow({
  exp,
  index,
  inView,
  open,
  onToggle,
}: {
  exp: (typeof experiences)[0];
  index: number;
  inView: boolean;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = `exp-panel-${exp.id}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: index * 0.09,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`rounded-lg border-b border-[#333]/10 transition-colors duration-200 ${
        open ? "bg-[#333]/[0.04]" : "hover:bg-[#333]/[0.04]"
      }`}
    >
      {/* Clickable header */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="group block w-full cursor-pointer rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#333]/30"
      >
        {/* Mobile layout */}
        <span className="flex items-start justify-between gap-4 px-4 py-5 md:hidden">
          <span className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-[#999]">
              {exp.period}
              <span className="mx-2 text-[#ccc]">·</span>
              <span className="font-light">{exp.duration}</span>
            </span>
            <span className="text-base font-semibold text-[#333]">
              {exp.company}
            </span>
            <span className="text-sm font-light text-[#666]">{exp.role}</span>
          </span>
          <Toggle open={open} />
        </span>

        {/* Desktop layout */}
        <span className="hidden items-center px-6 py-5 md:grid md:grid-cols-[180px_1fr_1fr]">
          <span>
            <span className="block text-sm font-medium leading-tight text-[#333]">
              {exp.period}
            </span>
            <span className="mt-0.5 block text-xs font-light text-[#999]">
              {exp.duration}
            </span>
          </span>

          <span className="text-base font-medium text-[#444] transition-colors duration-200 group-hover:text-[#111]">
            {exp.company}
          </span>

          <span className="flex items-center justify-end gap-4 text-right">
            <span className="text-sm font-light text-[#666]">{exp.role}</span>
            <Toggle open={open} />
          </span>
        </span>
      </button>

      {/* Expandable tech panel */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-6 md:pl-[204px] md:pr-6">
              <p className="mb-3 text-xs font-light text-[#999]">
                Tech used here
              </p>
              <ul className="flex flex-wrap gap-2">
                {exp.tech.map(({ name, icon: Icon, color }, i) => (
                  <motion.li
                    key={name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.04, duration: 0.35 }}
                    whileHover={{ y: -3 }}
                    style={{ "--brand": color } as CSSProperties}
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 py-1.5 pl-3 pr-4 text-sm font-light text-[#333] transition-[border-color,box-shadow] duration-300 hover:border-[var(--brand)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)]"
                  >
                    <Icon size={16} style={{ color }} aria-hidden />
                    {name}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openId, setOpenId] = useState<string | null>(null);

  const totalYears = "2 years 11 months";

  return (
    <section id="experience" className="w-full px-6 py-24 md:px-16 md:py-36">
      <div className="border-t border-[#333]/12 pt-16" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[#999]">
              Work History
            </p>
            <h2 className="text-[clamp(2rem,6vw,5rem)] font-light leading-none text-[#333]">
              Experience.
            </h2>
          </div>
          <p className="max-w-xs text-sm font-light leading-relaxed text-[#999] md:text-right">
            A journey of building products, shipping features, and collaborating
            with teams across industries.
          </p>
        </motion.div>

        {/* Table header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="hidden border-b border-[#333]/12 px-6 pb-3 md:grid md:grid-cols-[180px_1fr_1fr]"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#bbb]">
            Period
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#bbb]">
            Company
          </span>
          <span className="text-right text-[10px] font-medium uppercase tracking-[0.18em] text-[#bbb]">
            Role
          </span>
        </motion.div>

        {/* Rows */}
        <div className="mt-1 flex flex-col">
          {experiences.map((exp, i) => (
            <ExperienceRow
              key={exp.id}
              exp={exp}
              index={i}
              inView={inView}
              open={openId === exp.id}
              onToggle={() =>
                setOpenId((cur) => (cur === exp.id ? null : exp.id))
              }
            />
          ))}
        </div>

        {/* Footer: total experience */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-6 flex justify-end pr-4 md:pr-6"
        >
          <div className="text-right">
            <p className="text-xs font-light tracking-wide text-[#bbb]">
              Work experience
            </p>
            <p className="mt-0.5 text-sm font-medium italic text-[#555]">
              {totalYears}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
