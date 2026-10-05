// "use client";

// import {
//   motion,
//   useInView,
//   useScroll,
//   useSpring,
//   useTransform,
// } from "framer-motion";
// import { useRef } from "react";
// import Link from "next/link";

// type Project = {
//   id: string;
//   title: string;
//   watermark: string;
//   description: string;
//   tech: string[];
//   img: string;
//   link?: string;
// };

// const projects: Project[] = [
//   {
//     id: "coinspe",
//     title: "CoinsPe",
//     watermark: "OP",
//     description:
//       "A cutting-edge cryptocurrency platform for secure and efficient digital asset transactions. At Subhx Infotech, I contributed by developing scalable backend architecture, implementing auto KYC verification, and ensuring a responsive, high-performance frontend. The platform offers advanced features for crypto trading and portfolio management.",
//     tech: [
//       "Next.js",
//       "Node.js",
//       "Express.js",
//       "PostgreSQL",
//       "Redis",
//       "TradingView Charts",
//       "Redux",
//       "Socket.IO",
//       "TypeScript",
//       "Tailwind CSS",
//       "Minio Cloud",
//     ],
//     img: "/project_img/coinspe.png",
//     link: "https://beta.coinspe.com/",
//   },
//   {
//     id: "subhux-hireup",
//     title: "Subhux HireUp",
//     watermark: "SH",
//     description:
//       "A career platform for managing recruitment at Subhx Infotech. Applicants can apply online, and HR/management review applications and generate interview links. Powered by Subhx.ai, it conducts AI-driven, time-limited interviews with auto-submission, generates PDF assessment reports, and provides HR with access to answers, screen recordings, and secure activity monitoring.",
//     tech: ["Next.js", "TypeScript", "MongoDB"],
//     img: "/project_img/subhxHireup.png",
//   },
//   {
//     id: "subhx-connect",
//     title: "SUBHX Connect",
//     watermark: "SC",
//     description:
//       "SUBHX Connect is a high-speed broadband and network connectivity service by SUBHX Infotech, offering reliable internet solutions for residential and enterprise users. I worked on the frontend implementation, including UI/UX design, API integrations, and developing key features such as the chat support system and FAQ sections, ensuring a responsive and high-performance user experience.",
//     tech: ["React", "Node.js", "OpenAI"],
//     img: "/project_img/subhxConnect.png",
//   },
// ];

// function Slide({ project }: { project: Project }) {
//   return (
//     <div className="relative h-full w-screen shrink-0 overflow-hidden px-6 md:px-16">
//       {/* Giant faded watermark letters */}
//       <span
//         aria-hidden
//         className="works-watermark pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-extrabold leading-none"
//         style={{ fontSize: "min(46vw, 78vh)" }}
//       >
//         {project.watermark}
//       </span>

//       <div className="relative mx-auto grid h-full max-w-[1700px] grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
//         {/* LEFT: content column with its own vertical scroll */}
//         <div
//           className="works-scroll max-h-[55vh] overflow-y-auto pr-4 md:max-h-[72vh] md:pr-10"
//           style={{ overscrollBehaviorY: "auto" }}
//         >
//           <h3 className="works-title mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-[104px] md:mb-8 md:leading-[1.05]">
//             {project.title}
//           </h3>

//           <p className="works-text mb-8 max-w-[640px] text-sm font-light leading-[1.85] md:mb-10 md:text-[21px]">
//             {project.description}
//           </p>

//           <div className="flex flex-wrap gap-3 pb-6">
//             {project.tech.map((t) => (
//               <span
//                 key={t}
//                 className="works-pill rounded-full px-4 py-2 font-mono text-xs font-medium md:px-5 md:py-2.5 md:text-[15px]"
//               >
//                 {t}
//               </span>
//             ))}
//           </div>

//           {project.link && (
//             <a
//               href={project.link}
//               target="_blank"
//               rel="noreferrer"
//               className="works-btn mt-2 inline-block rounded-full px-8 py-3 text-sm font-light transition-colors"
//             >
//               Visit project
//             </a>
//           )}
//         </div>

//         {/* RIGHT: device frame */}
//         <div className="flex items-center justify-center">
//           <div className="w-full rounded-[28px]">
//             {/* eslint-disable-next-line @next/next/no-img-element */}
//             <img
//               src={project.img}
//               alt={`${project.title} screenshot`}
//               className="aspect-[1.72/1] w-full object-contain rounded-[28px]"
//               draggable={false}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function WorksSection() {
//   const count = projects.length;

//   // Header animation (from the old design)
//   const headerRef = useRef<HTMLDivElement>(null);
//   const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

//   // Horizontal scroll is driven by the tall track only (not the header)
//   const trackRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: trackRef,
//     offset: ["start start", "end end"],
//   });
//   const smooth = useSpring(scrollYProgress, {
//     stiffness: 120,
//     damping: 24,
//     mass: 0.4,
//   });
//   // +1 for the CTA slide at the end
//   const totalSlides = count + 1;
//   const x = useTransform(
//     smooth,
//     [0, 1],
//     ["0%", `-${((totalSlides - 1) / totalSlides) * 100}%`],
//   );

//   return (
//     <section id="works" className="works-root relative w-full">
//       {/* ===== Old header design ===== */}
//       <div className="w-full px-6 pt-24 md:px-16 md:pt-36">
//         <div className="works-divider border-t pt-16" ref={headerRef}>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={headerInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.7 }}
//             className="mb-14"
//           >
//             <p className="works-eyebrow mb-3 text-xs font-medium uppercase tracking-[0.2em]">
//               Selected Work
//             </p>
//             <h2 className="works-heading text-[clamp(2rem,6vw,5rem)] font-light">
//               Featured Works .
//             </h2>
//             <p className="works-sub mt-4 max-w-xl text-base font-light">
//               Take a look at the highlights of my professional journey. Each
//               project represents a unique challenge and creative solution,
//               showcasing my skills and passion.
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* ===== New horizontal-scroll cards ===== */}
//       <div
//         ref={trackRef}
//         className="relative"
//         style={{ height: `${totalSlides * 100}vh` }}
//       >
//         <div className="sticky top-0 h-screen overflow-hidden bg-[#dcdcdc]">
//           <motion.div
//             style={{ x, width: `${totalSlides * 100}%` }}
//             className="flex h-full items-center will-change-transform"
//           >
//             {projects.map((p) => (
//               <Slide key={p.id} project={p} />
//             ))}
//             {/* ── CTA slide: scrolls in as slide 4 ── */}
//             <div className="relative h-full w-screen shrink-0 overflow-hidden px-6 md:px-16 flex items-center justify-center">
//               {/* Watermark */}
//               <span
//                 aria-hidden
//                 className="works-watermark pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-extrabold leading-none"
//                 style={{ fontSize: "min(46vw, 78vh)" }}
//               >
//                 →
//               </span>

//               <div className="relative text-center flex flex-col items-center gap-8">
//                 <p className="works-eyebrow text-xs font-medium uppercase tracking-[0.3em]">
//                   More Projects
//                 </p>
//                 <h3 className="works-title text-4xl font-bold tracking-tighter leading-none sm:text-5xl md:text-[80px]">
//                   View All
//                   <br />
//                   Works.
//                 </h3>
//                 <p className="works-text max-w-sm text-base font-light leading-relaxed">
//                   Explore the full collection of projects — live sites, ongoing
//                   builds, and personal experiments.
//                 </p>
//                 <Link
//                   href="/works"
//                   className="works-btn inline-flex items-center gap-3 rounded-full px-10 py-4 text-sm font-medium tracking-wide transition-colors"
//                 >
//                   See All Projects
//                   <span className="text-lg">→</span>
//                 </Link>
//               </div>
//             </div>
//           </motion.div>

//           {/* Progress line */}
//           <div className="works-track absolute bottom-8 left-6 right-6 h-px md:left-16 md:right-16">
//             <motion.div
//               style={{ scaleX: smooth }}
//               className="works-bar h-px origin-left"
//             />
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         /* Matches site palette — body bg is #dcdcdc, no override needed */
//         .works-root {
//           --w-bg: #dcdcdc;
//           --w-title: #333;
//           --w-text: #666;
//           --w-muted: #999;
//           --w-label: #333;
//           --w-divider: rgba(51, 51, 51, 0.12);
//           --w-pill-bg: rgba(51, 51, 51, 0.08);
//           --w-pill-text: #555;
//           --w-pill-border: rgba(51, 51, 51, 0.12);
//           --w-frame-bg: rgba(51, 51, 51, 0.06);
//           --w-frame-border: rgba(51, 51, 51, 0.08);
//           --w-watermark: rgba(51, 51, 51, 0.06);
//           --w-thumb: rgba(51, 51, 51, 0.15);
//           --w-btn-border: rgba(51, 51, 51, 0.3);
//           --w-btn-hover-bg: #333;
//           --w-btn-hover-text: #e2e2e2;
//           /* no background set — inherits body #dcdcdc */
//         }
//         /* Dark theme: <html class="dark"> or data-theme="dark" */
//         .dark .works-root,
//         [data-theme="dark"] .works-root {
//           --w-bg: #0b0b10;
//           --w-title: #fff;
//           --w-text: #a3a3ad;
//           --w-muted: #7d7d88;
//           --w-label: #3b7cf5;
//           --w-divider: rgba(255, 255, 255, 0.12);
//           --w-pill-bg: #15151b;
//           --w-pill-text: #b4b4be;
//           --w-pill-border: rgba(255, 255, 255, 0.06);
//           --w-frame-bg: #111116;
//           --w-frame-border: rgba(255, 255, 255, 0.09);
//           --w-watermark: rgba(255, 255, 255, 0.035);
//           --w-thumb: rgba(255, 255, 255, 0.14);
//           --w-btn-border: rgba(255, 255, 255, 0.3);
//           --w-btn-hover-bg: #fff;
//           --w-btn-hover-text: #0b0b10;
//         }

//         /* Header */
//         .works-divider {
//           border-color: var(--w-divider);
//         }
//         .works-eyebrow {
//           color: var(--w-muted);
//         }
//         .works-heading {
//           color: var(--w-title);
//         }
//         .works-sub {
//           color: var(--w-text);
//         }

//         /* Cards */
//         .works-title {
//           color: var(--w-title);
//         }
//         .works-text {
//           color: var(--w-text);
//         }
//         .works-label {
//           color: var(--w-label);
//         }
//         .works-watermark {
//           color: var(--w-watermark);
//         }
//         .works-pill {
//           background: var(--w-pill-bg);
//           color: var(--w-pill-text);
//           border: 1px solid var(--w-pill-border);
//         }
//         .works-frame {
//           background: var(--w-frame-bg);
//           border: 1px solid var(--w-frame-border);
//         }
//         .works-btn {
//           color: var(--w-title);
//           border: 1px solid var(--w-btn-border);
//         }
//         .works-btn:hover {
//           background: var(--w-btn-hover-bg);
//           color: var(--w-btn-hover-text);
//         }
//         .works-track {
//           background: var(--w-pill-border);
//         }
//         .works-bar {
//           background: var(--w-label);
//         }

//         /* Slim visible vertical scrollbar on the content column */
//         .works-scroll {
//           scrollbar-width: thin;
//           scrollbar-color: var(--w-thumb) transparent;
//         }
//         .works-scroll::-webkit-scrollbar {
//           width: 6px;
//         }
//         .works-scroll::-webkit-scrollbar-track {
//           background: transparent;
//         }
//         .works-scroll::-webkit-scrollbar-thumb {
//           background: var(--w-thumb);
//           border-radius: 999px;
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  watermark: string;
  description: string;
  tech: string[];
  img: string;
  link?: string;
};

const projects: Project[] = [
  {
    id: "coinspe",
    title: "CoinsPe",
    watermark: "OP",
    description:
      "A cryptocurrency trading platform for secure and efficient digital asset transactions. At Subhx Infotech, I contributed to multiple areas of the platform, starting with the development of an initial menu-based chat application with menu and submenu-driven conversations.I later worked on key platform features including the KYC module, Quick Buy, transaction history, and compliance. I developed responsive UI components, implemented and integrated REST APIs, and worked on different KYC flows including Basic KYC, Advanced KYC, and Corporate KYC. I also developed Quick Buy APIs and integrated them into the frontend, implemented transaction history UI and APIs, and contributed to compliance-related features and other platform pages.",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Redux",
      "Socket.IO",
      "TypeScript",
      "Tailwind CSS",
      "Minio Cloud",
    ],
    img: "/project_img/coinspe.png",
    link: "https://beta.coinspe.com/",
  },
  {
    id: "subhux-hireup",
    title: "Subhux HireUp",
    watermark: "SH",
    description:
      "A career platform for managing recruitment at Subhx Infotech. Applicants can apply online, and HR/management review applications and generate interview links. Powered by Subhx.ai, it conducts AI-driven, time-limited interviews with auto-submission, generates PDF assessment reports, and provides HR with access to answers, screen recordings, and secure activity monitoring.",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Redux",
      "TypeScript",
      "Tailwind CSS",
    ],
    img: "/project_img/subhxHireup.png",
  },
  {
    id: "subhx-connect",
    title: "SUBHX Connect",
    watermark: "SC",
    description:
      "SUBHX Connect is a broadband and network connectivity platform by SUBHX Infotech, providing internet solutions for residential and enterprise users. I contributed to the frontend development by building responsive UI components and integrating APIs across key features. I implemented the broadband availability check feature, including its UI and API integration, and developed the broadband purchase flow with the required UI and API integrations. I also worked on the chat support system, FAQ sections, and other platform features, focusing on a responsive and user-friendly experience.",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Redux",
      "TypeScript",
      "Tailwind CSS",
      "Socket.IO",
    ],
    img: "/project_img/subhxConnect.png",
  },
];

/*
 * Responsive notes
 * - Slides use a % width (not w-screen) so they always match the track width
 *   (w-screen = 100vw includes the scrollbar and caused drift / sideways scroll).
 * - Heights use svh so mobile browser bars don't cut the content.
 * - Top padding clears the fixed navbar, bottom padding clears the progress line.
 * - Below lg: text row is flexible (scrolls inside if too long), image row is auto
 *   and height-capped, so everything always fits in one screen.
 * - lg and up: the original two-column layout.
 */
function Slide({ project, width }: { project: Project; width: string }) {
  return (
    <div
      style={{ width }}
      className="relative h-full shrink-0 overflow-hidden px-6 pb-16 pt-20 md:px-16 md:pt-24 lg:pb-12 lg:pt-20"
    >
      {/* Giant faded watermark letters */}
      <span
        aria-hidden
        className="works-watermark pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-extrabold leading-none"
        style={{ fontSize: "min(46vw, 78svh)" }}
      >
        {project.watermark}
      </span>

      <div className="relative mx-auto grid h-full max-w-[1700px] grid-cols-1 grid-rows-[minmax(0,1fr)_auto] items-center gap-5 md:gap-8 lg:grid-cols-2 lg:grid-rows-1 lg:gap-16">
        {/* LEFT: content column with its own vertical scroll */}
        <div
          className="works-scroll flex h-full min-h-0 flex-col overflow-y-auto pr-3 lg:h-auto lg:max-h-[72svh] lg:pr-10"
          style={{ overscrollBehaviorY: "auto" }}
        >
          {/* my-auto centers short content but still lets long content scroll from the top */}
          <div className="my-auto">
            <h3 className="works-title mb-4 text-[clamp(2rem,9vw,3.5rem)] font-bold leading-[1.05] tracking-tighter md:mb-6 lg:mb-8 lg:text-[clamp(3.5rem,7.2vw,6.5rem)]">
              {project.title}
            </h3>

            <p className="works-text mb-6 max-w-[640px] text-sm font-light leading-relaxed md:text-base md:leading-[1.8] lg:mb-10 lg:text-[clamp(1rem,1.45vw,1.3rem)] lg:leading-[1.85]">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 pb-5 lg:gap-3 lg:pb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="works-pill rounded-full px-3 py-1.5 font-mono text-[11px] font-medium md:px-4 md:py-2 md:text-xs lg:px-5 lg:py-2.5 lg:text-[15px]"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="works-btn mt-1 inline-block rounded-full px-6 py-2.5 text-sm font-light transition-colors lg:mt-2 lg:px-8 lg:py-3"
              >
                Visit project
              </a>
            )}
          </div>
        </div>

        {/* RIGHT: device frame */}
        <div className="flex items-center justify-center">
          <div className="w-full rounded-[20px] lg:rounded-[28px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.img}
              alt={`${project.title} screenshot`}
              className="mx-auto aspect-[1.72/1] max-h-[26svh] w-full rounded-[20px] object-contain md:max-h-[32svh] lg:max-h-none lg:rounded-[28px]"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorksSection() {
  const count = projects.length;

  // Header animation (from the old design)
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  // Horizontal scroll is driven by the tall track only (not the header)
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });
  // +1 for the CTA slide at the end
  const totalSlides = count + 1;
  const slideWidth = `${100 / totalSlides}%`;
  const x = useTransform(
    smooth,
    [0, 1],
    ["0%", `-${((totalSlides - 1) / totalSlides) * 100}%`],
  );

  return (
    <section id="works" className="works-root relative w-full">
      {/* ===== Old header design ===== */}
      <div className="w-full px-6 pt-24 md:px-16 md:pt-36">
        <div className="works-divider border-t pt-16" ref={headerRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <p className="works-eyebrow mb-3 text-xs font-medium uppercase tracking-[0.2em]">
              Selected Work
            </p>
            <h2 className="works-heading text-[clamp(2rem,6vw,5rem)] font-light">
              Featured Works .
            </h2>
            <p className="works-sub mt-4 max-w-xl text-base font-light">
              Take a look at the highlights of my professional journey. Each
              project represents a unique challenge and creative solution,
              showcasing my skills and passion.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ===== New horizontal-scroll cards ===== */}
      <div
        ref={trackRef}
        className="relative"
        style={{ height: `${totalSlides * 100}svh` }}
      >
        <div className="sticky top-0 h-[100svh] overflow-hidden bg-[#dcdcdc]">
          <motion.div
            style={{ x, width: `${totalSlides * 100}%` }}
            className="flex h-full items-center will-change-transform"
          >
            {projects.map((p) => (
              <Slide key={p.id} project={p} width={slideWidth} />
            ))}

            {/* ── CTA slide: scrolls in as the last slide ── */}
            <div
              style={{ width: slideWidth }}
              className="relative flex h-full shrink-0 items-center justify-center overflow-hidden px-6 pb-16 pt-20 md:px-16"
            >
              {/* Watermark */}
              <span
                aria-hidden
                className="works-watermark pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-extrabold leading-none"
                style={{ fontSize: "min(46vw, 78svh)" }}
              >
                →
              </span>

              <div className="relative flex flex-col items-center gap-6 text-center md:gap-8">
                <p className="works-eyebrow text-xs font-medium uppercase tracking-[0.3em]">
                  More Projects
                </p>
                <h3 className="works-title text-[clamp(2.25rem,10vw,5rem)] font-bold leading-none tracking-tighter">
                  View All
                  <br />
                  Works.
                </h3>
                <p className="works-text max-w-sm text-sm font-light leading-relaxed md:text-base">
                  Explore the full collection of projects — live sites, ongoing
                  builds, and personal experiments.
                </p>
                <Link
                  href="/works"
                  className="works-btn inline-flex items-center gap-3 rounded-full px-8 py-3 text-sm font-medium tracking-wide transition-colors md:px-10 md:py-4"
                >
                  See All Projects
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Progress line */}
          <div className="works-track absolute bottom-8 left-6 right-6 h-px md:left-16 md:right-16">
            <motion.div
              style={{ scaleX: smooth }}
              className="works-bar h-px origin-left"
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Matches site palette — body bg is #dcdcdc, no override needed */
        .works-root {
          --w-bg: #dcdcdc;
          --w-title: #333;
          --w-text: #666;
          --w-muted: #999;
          --w-label: #333;
          --w-divider: rgba(51, 51, 51, 0.12);
          --w-pill-bg: rgba(51, 51, 51, 0.08);
          --w-pill-text: #555;
          --w-pill-border: rgba(51, 51, 51, 0.12);
          --w-frame-bg: rgba(51, 51, 51, 0.06);
          --w-frame-border: rgba(51, 51, 51, 0.08);
          --w-watermark: rgba(51, 51, 51, 0.06);
          --w-thumb: rgba(51, 51, 51, 0.15);
          --w-btn-border: rgba(51, 51, 51, 0.3);
          --w-btn-hover-bg: #333;
          --w-btn-hover-text: #e2e2e2;
          /* no background set — inherits body #dcdcdc */
        }
        /* Dark theme: <html class="dark"> or data-theme="dark" */
        .dark .works-root,
        [data-theme="dark"] .works-root {
          --w-bg: #0b0b10;
          --w-title: #fff;
          --w-text: #a3a3ad;
          --w-muted: #7d7d88;
          --w-label: #3b7cf5;
          --w-divider: rgba(255, 255, 255, 0.12);
          --w-pill-bg: #15151b;
          --w-pill-text: #b4b4be;
          --w-pill-border: rgba(255, 255, 255, 0.06);
          --w-frame-bg: #111116;
          --w-frame-border: rgba(255, 255, 255, 0.09);
          --w-watermark: rgba(255, 255, 255, 0.035);
          --w-thumb: rgba(255, 255, 255, 0.14);
          --w-btn-border: rgba(255, 255, 255, 0.3);
          --w-btn-hover-bg: #fff;
          --w-btn-hover-text: #0b0b10;
        }

        /* Header */
        .works-divider {
          border-color: var(--w-divider);
        }
        .works-eyebrow {
          color: var(--w-muted);
        }
        .works-heading {
          color: var(--w-title);
        }
        .works-sub {
          color: var(--w-text);
        }

        /* Cards */
        .works-title {
          color: var(--w-title);
        }
        .works-text {
          color: var(--w-text);
        }
        .works-label {
          color: var(--w-label);
        }
        .works-watermark {
          color: var(--w-watermark);
        }
        .works-pill {
          background: var(--w-pill-bg);
          color: var(--w-pill-text);
          border: 1px solid var(--w-pill-border);
        }
        .works-frame {
          background: var(--w-frame-bg);
          border: 1px solid var(--w-frame-border);
        }
        .works-btn {
          color: var(--w-title);
          border: 1px solid var(--w-btn-border);
        }
        .works-btn:hover {
          background: var(--w-btn-hover-bg);
          color: var(--w-btn-hover-text);
        }
        .works-track {
          background: var(--w-pill-border);
        }
        .works-bar {
          background: var(--w-label);
        }

        /* Slim visible vertical scrollbar on the content column */
        .works-scroll {
          scrollbar-width: thin;
          scrollbar-color: var(--w-thumb) transparent;
        }
        .works-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .works-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .works-scroll::-webkit-scrollbar-thumb {
          background: var(--w-thumb);
          border-radius: 999px;
        }
      `}</style>
    </section>
  );
}
