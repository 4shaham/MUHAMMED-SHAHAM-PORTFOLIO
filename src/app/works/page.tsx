// "use client";

// import { useState, useRef } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import { projects, type Project } from "@/data/projects";
// import Navbar from "@/components/Navbar";
// import CustomCursor from "@/components/CustomCursor";
// import Footer from "@/components/Footer";

// /* ── Filter tabs ─────────────────────────────────────────────── */
// type Filter = "all" | "live" | "in-progress" | "personal";

// const FILTERS: { label: string; value: Filter }[] = [
//   { label: "All Projects", value: "all" },
//   { label: "Live", value: "live" },
//   { label: "In Progress", value: "in-progress" },
//   { label: "Personal", value: "personal" },
// ];

// /* ── Status badge ─────────────────────────────────────────────── */
// function StatusBadge({ status }: { status: Project["status"] }) {
//   const map = {
//     live: { label: "Live", color: "#22c55e" },
//     "in-progress": { label: "In Progress", color: "#f59e0b" },
//     personal: { label: "Personal", color: "#8b7fdc" },
//   };
//   const { label, color } = map[status];
//   return (
//     <span
//       className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
//       style={{ backgroundColor: `${color}22`, color }}
//     >
//       <span
//         className="w-1.5 h-1.5 rounded-full animate-pulse"
//         style={{ backgroundColor: color }}
//       />
//       {label}
//     </span>
//   );
// }

// /* ── Mock browser screenshot ──────────────────────────────────── */
// function MockBrowser({ img, color }: { img?: string; color: string }) {
//   return (
//     <div className="w-full max-w-[340px] mx-auto">
//       <div className="bg-[#1e1e1e] rounded-t-xl px-3 pt-3 pb-0">
//         <div
//           className="rounded-t-md overflow-hidden aspect-[16/10]"
//           style={{ backgroundColor: `${color}55` }}
//         >
//           {img ? (
//             <Image
//               src={img}
//               alt="Project screenshot"
//               width={680}
//               height={425}
//               className="w-full h-full object-contain"
//             />
//           ) : (
//             <div className="w-full h-full p-4 flex flex-col gap-2">
//               <div className="h-3 bg-white/20 rounded w-2/3" />
//               <div className="h-3 bg-white/15 rounded w-full" />
//               <div className="h-3 bg-white/15 rounded w-5/6" />
//               <div className="flex gap-2 mt-2">
//                 <div className="h-8 bg-white/20 rounded flex-1" />
//                 <div className="h-8 bg-white/20 rounded flex-1" />
//               </div>
//               <div className="h-16 bg-white/20 rounded mt-2" />
//               <div className="h-3 bg-white/10 rounded w-3/4 mt-1" />
//               <div className="h-3 bg-white/10 rounded w-2/3" />
//             </div>
//           )}
//         </div>
//       </div>
//       {/* <div className="h-2.5 bg-[#272727] rounded-b-xl mx-6 shadow-lg" /> */}
//     </div>
//   );
// }

// /* ── Project card ─────────────────────────────────────────────── */
// function ProjectCard({ project, index }: { project: Project; index: number }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 60 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{
//         duration: 0.75,
//         delay: index * 0.08,
//         ease: [0.16, 1, 0.3, 1],
//       }}
//       style={{ backgroundColor: project.color }}
//       className="rounded-3xl overflow-hidden w-full"
//     >
//       <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] md:min-h-[460px]">
//         {/* Left: browser mockup */}
//         <div className="flex items-center justify-center p-8 md:p-12">
//           <MockBrowser img={project.img} color={project.color} />
//         </div>

//         {/* Right: info */}
//         <div className="flex flex-col justify-between p-7 md:p-12">
//           <div>
//             <div className="flex items-center justify-between mb-5">
//               <StatusBadge status={project.status} />
//               <span className="text-xs text-white/60 font-mono">
//                 {project.year}
//               </span>
//             </div>

//             <p className="text-6xl md:text-7xl font-light text-white/20 leading-none mb-3 select-none">
//               {project.id}
//             </p>

//             <h3 className="text-2xl md:text-4xl font-semibold text-white mb-4 leading-tight">
//               {project.title}
//             </h3>

//             <p className="text-white/70 font-light text-sm md:text-base leading-relaxed mb-6">
//               {project.description}
//             </p>

//             <div className="flex flex-wrap gap-2">
//               {project.tech.map((t) => (
//                 <span
//                   key={t}
//                   className="bg-white/15 backdrop-blur-sm text-white/90 rounded-full px-4 py-1.5 text-xs font-medium"
//                 >
//                   {t}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="mt-8">
//             {project.link && project.link !== "#" ? (
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 group/btn"
//               >
//                 View Live
//                 <span className="translate-x-0 group-hover/btn:translate-x-1 transition-transform duration-200">
//                   →
//                 </span>
//               </a>
//             ) : (
//               <span className="inline-flex items-center gap-2 bg-white/10 text-white/50 rounded-full px-6 py-3 text-sm font-medium cursor-not-allowed">
//                 Coming Soon
//               </span>
//             )}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// /* ── Page ─────────────────────────────────────────────────────── */
// export default function WorksPage() {
//   const [filter, setFilter] = useState<Filter>("all");

//   const filtered =
//     filter === "all" ? projects : projects.filter((p) => p.status === filter);

//   return (
//     <>
//       <CustomCursor />
//       <Navbar />

//       <main className="pt-14 max-w-[1510px] mx-auto">
//         {/* Hero */}
//         <section className="w-full px-6 md:px-16 pt-20 md:pt-28 pb-14 md:pb-20 text-center">
//           <motion.p
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-xs tracking-[0.2em] uppercase text-[#999] mb-4 font-medium"
//           >
//             Selected Work
//           </motion.p>

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
//             className="text-[clamp(2.8rem,7vw,6.5rem)] font-light text-[#333] leading-none mb-6"
//           >
//             Featured Works<span className="text-[#aaa]">.</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.18 }}
//             className="text-[#666] font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10"
//           >
//             Take a look at the highlights of my professional journey. Explore
//             live production sites, ongoing developments, and personal projects.
//           </motion.p>

//           {/* Filter pills */}
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.28 }}
//             className="inline-flex items-center gap-1 bg-[#ccc]/40 backdrop-blur-sm rounded-full p-1.5"
//           >
//             {FILTERS.map((f) => (
//               <button
//                 key={f.value}
//                 id={`filter-${f.value}`}
//                 onClick={() => setFilter(f.value)}
//                 className="relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200"
//                 style={{ color: filter === f.value ? "#333" : "#888" }}
//               >
//                 {filter === f.value && (
//                   <motion.span
//                     layoutId="filter-pill"
//                     className="absolute inset-0 bg-white rounded-full shadow-sm"
//                     transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                   />
//                 )}
//                 <span className="relative z-10">{f.label}</span>
//               </button>
//             ))}
//           </motion.div>
//         </section>

//         {/* Project cards */}
//         <section className="w-full px-6 md:px-16 pb-24 md:pb-36">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={filter}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="flex flex-col gap-6"
//             >
//               {filtered.length === 0 ? (
//                 <div className="text-center py-24 text-[#aaa] text-base font-light">
//                   No projects in this category yet.
//                 </div>
//               ) : (
//                 filtered.map((project, i) => (
//                   <ProjectCard key={project.id} project={project} index={i} />
//                 ))
//               )}
//             </motion.div>
//           </AnimatePresence>

//           {/* Back to home */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="flex justify-center mt-16"
//           >
//             <Link
//               href="/"
//               className="border border-[#333]/25 rounded-full px-8 py-3 text-sm tracking-[0.12em] uppercase text-[#333] font-medium hover:bg-[#333] hover:text-[#e2e2e2] transition-all duration-300"
//             >
//               ← Back to Home
//             </Link>
//           </motion.div>
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// }

"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects, type Project } from "@/data/projects";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";

/* ── Filter tabs ─────────────────────────────────────────────── */
type Filter = "all" | "live" | "in-progress" | "personal";

const FILTERS: { label: string; value: Filter }[] = [
  { label: "All Projects", value: "all" },
  { label: "Live", value: "live" },
  { label: "In Progress", value: "in-progress" },
  { label: "Personal", value: "personal" },
];

/* ── Status badge ─────────────────────────────────────────────── */
function StatusBadge({ status }: { status: Project["status"] }) {
  const map = {
    live: { label: "Live", color: "#22c55e" },
    "in-progress": { label: "In Progress", color: "#f59e0b" },
    personal: { label: "Personal", color: "#8b7fdc" },
  };
  const { label, color } = map[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
      style={{ backgroundColor: `${color}22`, color }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full animate-pulse"
        style={{ backgroundColor: color }}
      />
      {label}
    </span>
  );
}

/* ── Mock browser screenshot ────────────────────────────────────
 * - No max-w-[340px] anymore: the frame fills the column (up to 680px)
 * - With an image, the box has NO fixed aspect ratio. The image sets its own
 *   height (w-full h-auto), so there are no empty bars above/below it.
 * - The 16/10 ratio is only used for the placeholder (no image).
 * ────────────────────────────────────────────────────────────── */
function MockBrowser({
  img,
  color,
  title,
}: {
  img?: string;
  color: string;
  title: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="mx-auto w-full max-w-[680px]"
    >
      <div className="rounded-xl bg-[#1e1e1e] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.25)] ring-1 ring-white/10">
        <div
          className={`overflow-hidden rounded-md ${img ? "" : "aspect-[16/10]"}`}
          style={{ backgroundColor: `${color}55` }}
        >
          {img ? (
            <Image
              src={img}
              alt={`${title} screenshot`}
              width={1280}
              height={744}
              sizes="(min-width: 768px) 45vw, 100vw"
              className="block h-auto w-full"
            />
          ) : (
            <div className="w-full h-full p-4 flex flex-col gap-2">
              <div className="h-3 bg-white/20 rounded w-2/3" />
              <div className="h-3 bg-white/15 rounded w-full" />
              <div className="h-3 bg-white/15 rounded w-5/6" />
              <div className="flex gap-2 mt-2">
                <div className="h-8 bg-white/20 rounded flex-1" />
                <div className="h-8 bg-white/20 rounded flex-1" />
              </div>
              <div className="h-16 bg-white/20 rounded mt-2" />
              <div className="h-3 bg-white/10 rounded w-3/4 mt-1" />
              <div className="h-3 bg-white/10 rounded w-2/3" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Project card ─────────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.75,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ backgroundColor: project.color }}
      className="rounded-3xl overflow-hidden w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] min-h-[400px] md:min-h-[460px]">
        {/* Left: browser mockup (less padding = bigger image) */}
        <div className="flex items-center justify-center p-6 md:p-10">
          <MockBrowser
            img={project.img}
            color={project.color}
            title={project.title}
          />
        </div>

        {/* Right: info */}
        <div className="flex flex-col justify-between p-7 md:p-12">
          <div>
            <div className="flex items-center justify-between mb-5">
              <StatusBadge status={project.status} />
              <span className="text-xs text-white/60 font-mono">
                {project.year}
              </span>
            </div>

            <p className="text-6xl md:text-7xl font-light text-white/20 leading-none mb-3 select-none">
              {project.id}
            </p>

            <h3 className="text-2xl md:text-4xl font-semibold text-white mb-4 leading-tight">
              {project.title}
            </h3>

            <p className="text-white/70 font-light text-sm md:text-base leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-white/15 backdrop-blur-sm text-white/90 rounded-full px-4 py-1.5 text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            {project.link && project.link !== "#" ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 group/btn"
              >
                View Live
                <span className="translate-x-0 group-hover/btn:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 bg-white/10 text-white/50 rounded-full px-6 py-3 text-sm font-medium cursor-not-allowed">
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Page ─────────────────────────────────────────────────────── */
export default function WorksPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.status === filter);

  return (
    <>
      <CustomCursor />
      <Navbar />

      <main className="pt-14 max-w-[1510px] mx-auto">
        {/* Hero */}
        <section className="w-full px-6 md:px-16 pt-20 md:pt-28 pb-14 md:pb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.2em] uppercase text-[#999] mb-4 font-medium"
          >
            Selected Work
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.8rem,7vw,6.5rem)] font-light text-[#333] leading-none mb-6"
          >
            Featured Works<span className="text-[#aaa]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="text-[#666] font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10"
          >
            Take a look at the highlights of my professional journey. Explore
            live production sites, ongoing developments, and personal projects.
          </motion.p>

          {/* Filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="inline-flex items-center gap-1 bg-[#ccc]/40 backdrop-blur-sm rounded-full p-1.5"
          >
            {FILTERS.map((f) => (
              <button
                key={f.value}
                id={`filter-${f.value}`}
                onClick={() => setFilter(f.value)}
                className="relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200"
                style={{ color: filter === f.value ? "#333" : "#888" }}
              >
                {filter === f.value && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 bg-white rounded-full shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            ))}
          </motion.div>
        </section>

        {/* Project cards */}
        <section className="w-full px-6 md:px-16 pb-24 md:pb-36">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6"
            >
              {filtered.length === 0 ? (
                <div className="text-center py-24 text-[#aaa] text-base font-light">
                  No projects in this category yet.
                </div>
              ) : (
                filtered.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))
              )}
            </motion.div>
          </AnimatePresence>

          {/* Back to home */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mt-16"
          >
            <Link
              href="/"
              className="border border-[#333]/25 rounded-full px-8 py-3 text-sm tracking-[0.12em] uppercase text-[#333] font-medium hover:bg-[#333] hover:text-[#e2e2e2] transition-all duration-300"
            >
              ← Back to Home
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
