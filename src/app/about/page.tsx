"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function AboutPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <CustomCursor />
      <Navbar />

      <main className="max-w-[1510px] mx-auto">
        <section
          id="about-page"
          ref={ref}
          className="w-full min-h-screen px-6 md:px-16 pt-36 pb-24"
        >
          {/* Page title */}
          <div className=" pt-14 mb-16">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-xs tracking-[0.18em] uppercase text-[#999] mb-5 font-medium"
            >
              What I&apos;m About
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              className="text-[clamp(2.4rem,5vw,5rem)] font-light leading-tight text-[#333] max-w-4xl mb-12"
            >
              Building the web, one <strong className="font-bold">idea</strong>{" "}
              at a time.
            </motion.h1>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 lg:gap-24">
            {/* Left — Bio + Education + Skills */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-6 text-[#555] font-light text-base leading-[1.85]"
              >
                <p>
                  I&apos;m a passionate{" "}
                  <span className="text-[#333] font-medium">
                    Full Stack Developer
                  </span>{" "}
                  specializing in Next.js, React, Node.js, and the MERN stack,
                  with hands-on experience building scalable and
                  production-oriented web applications. My experience spans both
                  frontend and backend development, including responsive user
                  interfaces, RESTful APIs, real-time communication,
                  authentication, payment integrations, database design, and
                  third-party service integrations. I focus on writing clean,
                  maintainable, and efficient code while keeping performance,
                  scalability, and user experience in mind. I enjoy solving
                  complex technical problems and turning ideas into practical,
                  reliable, and user-focused products.
                </p>
                <p>
                  I’m also continuously expanding my knowledge of backend
                  architecture, system design, and modern development practices
                  to build more scalable and modular applications. I approach
                  every project with a focus on problem-solving, continuous
                  improvement, and delivering high-quality solutions that meet
                  both technical and business requirements.
                </p>
              </motion.div>

              {/* Education & Experience */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.32 }}
                className="mt-14"
              >
                <h2 className="text-xs tracking-[0.18em] uppercase text-[#999] mb-4 font-medium">
                  Education &amp; Experience
                </h2>

                <div className="divide-y divide-[#333]/10">
                  {[
                    {
                      title:
                        "Bachelor of Commerce (B.Com.) – Computer Applications",
                      detail:
                        "Wadihuda Institute of Research & Advanced Studies -(Kannur University), Kerala.",
                      year: "2020 – 2023",
                    },
                    {
                      title: "MERN Stack Development",
                      detail:
                        "Completed an intensive Full Stack Development bootcamp at Brototype, where I worked on building real-world projects.",
                      year: "2023-2024",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
                      className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 py-6"
                    >
                      <div className="flex-1">
                        <p className="text-[#333] font-semibold text-sm">
                          {item.title}
                        </p>
                        <p className="text-[#777] font-light text-sm mt-1 max-w-lg">
                          {item.detail}
                        </p>
                      </div>
                      <span className="text-xs text-[#aaa] font-light tracking-wide shrink-0 sm:mt-0.5 sm:ml-8">
                        {item.year}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right — Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col gap-4 lg:pt-2"
            >
              {/* Info card */}
              <div className="border border-[#333]/12 rounded-2xl p-6 mb-2">
                <p className="text-xs tracking-[0.15em] uppercase text-[#999] mb-1.5 font-medium">
                  Based in
                </p>
                <p className="text-[#333] font-light text-sm mb-5">
                  Kannur, Kerala, India
                </p>

                <p className="text-xs tracking-[0.15em] uppercase text-[#999] mb-1.5 font-medium">
                  Available for
                </p>
                <p className="text-[#333] font-light text-sm mb-5">
                  Full-time &amp; Freelance
                </p>

                <p className="text-xs tracking-[0.15em] uppercase text-[#999] mb-1.5 font-medium">
                  Email
                </p>
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                  className="text-[#333] font-light text-sm hover:underline underline-offset-4"
                >
                  {process.env.NEXT_PUBLIC_EMAIL}
                </a>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col gap-3">
                <a
                  id="about-github-btn"
                  href={process.env.NEXT_PUBLIC_GITHUB_URL || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 border border-[#333]/25 rounded-full px-7 py-3 text-xs tracking-[0.15em] uppercase text-[#333] font-medium hover:bg-[#333] hover:text-[#e2e2e2] transition-all duration-300"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </a>

                <a
                  id="about-linkedin-btn"
                  href={process.env.NEXT_PUBLIC_LINKEDIN_URL || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 border border-[#333]/25 rounded-full px-7 py-3 text-xs tracking-[0.15em] uppercase text-[#333] font-medium hover:bg-[#333] hover:text-[#e2e2e2] transition-all duration-300"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>

                <a
                  id="about-resume-btn"
                  href="/Muhammed_Shaham_V_Resume.pdf"
                  target="_self"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 border border-[#333]/25 rounded-full px-7 py-3 text-xs tracking-[0.15em] uppercase text-[#333] font-medium hover:bg-[#333] hover:text-[#e2e2e2] transition-all duration-300"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14,2 14,8 20,8" />
                  </svg>
                  Resume
                </a>

                <a
                  id="about-resume-btn"
                  href="/Degree certificate.pdf"
                  target="_self"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 border border-[#333]/25 rounded-full px-7 py-3 text-xs tracking-[0.15em] uppercase text-[#333] font-medium hover:bg-[#333] hover:text-[#e2e2e2] transition-all duration-300"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14,2 14,8 20,8" />
                  </svg>
                  Bachelor’s Degree Certificate
                </a>

                <Link
                  id="about-get-in-touch-btn"
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-[#333] text-[#e2e2e2] rounded-full px-7 py-3 text-xs tracking-[0.15em] uppercase font-medium hover:bg-[#111] transition-all duration-300 mt-2"
                >
                  Get In Touch →
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
