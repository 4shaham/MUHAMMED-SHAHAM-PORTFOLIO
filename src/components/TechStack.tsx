"use client";

import type { CSSProperties } from "react";
import { motion, type Variants } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiPostgresql,
  SiSequelize,
  SiRedis,
  SiNginx,
  SiVercel,
  SiCloudinary,
  SiGithubactions,
  SiPostman,
  SiJsonwebtokens,
  SiSocketdotio,
  SiStripe,
  SiRazorpay,
  SiFirebase,
  SiFigma,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  TbApi,
  TbPlugConnected,
  TbLayersIntersect,
  TbBinaryTree2,
  TbMail,
  TbUpload,
  TbSparkles,
} from "react-icons/tb";

type Tech = { name: string; icon: IconType; color: string };
type Group = { title: string; items: Tech[] };

const stack: Group[] = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript, color: "#E5C100" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: FaReact, color: "#0EA5C9" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Nest.js", icon: SiNestjs, color: "#E0234E" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Mongoose", icon: SiMongoose, color: "#880000" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Sequelize", icon: SiSequelize, color: "#52B0E7" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
  },
  {
    title: "Architecture",
    items: [
      { name: "MVC Architecture", icon: TbLayersIntersect, color: "#0F766E" },
      { name: "Clean Architecture", icon: TbBinaryTree2, color: "#B45309" },
      { name: "RESTful APIs", icon: TbApi, color: "#0284C7" },
      { name: "WebSockets", icon: TbPlugConnected, color: "#7C3AED" },
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "AWS EC2", icon: FaAws, color: "#FF9900" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5" },
      { name: "CI/CD", icon: SiGithubactions, color: "#2088FF" },
    ],
  },
  {
    title: "Tools & Integrations",
    items: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#D63AFF" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
      { name: "Stripe", icon: SiStripe, color: "#635BFF" },
      { name: "Razorpay", icon: SiRazorpay, color: "#3395FF" },
      { name: "Firebase", icon: SiFirebase, color: "#F59E0B" },
      { name: "Multer", icon: TbUpload, color: "#475569" },
      { name: "Nodemailer", icon: TbMail, color: "#22B573" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Antigravity", icon: TbSparkles, color: "#4285F4" },
    ],
  },
];

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const chipVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function TechStack() {
  return (
    <section id="tech" className="px-6 py-24 md:px-16 md:py-32">
      <div className="border-t border-[#333]/12 pt-16">
        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16">
          {/* Heading: stays in view while the list scrolls on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:sticky md:top-28 md:self-start"
          >
            <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-none tracking-tight text-[#333]">
              Tech Stack
            </h2>
            <p className="mt-6 max-w-xs text-base font-light text-[#666]">
              The languages, frameworks and tools I use to build and ship
              full-stack products.
            </p>
          </motion.div>

          {/* Groups */}
          <div>
            {stack.map((group) => (
              <div
                key={group.title}
                className="grid gap-4 border-t border-black/10 py-8 first:border-t-0 first:pt-0 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-8"
              >
                <h3 className="text-sm font-light text-[#666] sm:pt-2.5">
                  {group.title}
                </h3>

                <motion.ul
                  variants={listVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  className="flex flex-wrap gap-2.5"
                >
                  {group.items.map(({ name, icon: Icon, color }) => (
                    <motion.li
                      key={name}
                      variants={chipVariants}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                      style={{ "--brand": color } as CSSProperties}
                      className="group inline-flex cursor-default items-center gap-2.5 rounded-full border border-black/10 bg-white/40 py-1.5 pl-1.5 pr-4 text-sm font-light text-[#333] transition-[border-color,background-color,box-shadow] duration-300 hover:border-[var(--brand)] hover:bg-white/80 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                    >
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-black/[0.05] text-[#555] transition-all duration-300 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-white text-[var(--brand)]">
                        <Icon size={17} aria-hidden />
                      </span>
                      {name}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
