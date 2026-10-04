"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

interface User {
  name: string;
  linkedin_url: string;
  github_url: string;
  email: string;
  number: string;
}

const user: User = {
  name: process.env.NEXT_PUBLIC_USER_NAME || "",
  linkedin_url: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  github_url: process.env.NEXT_PUBLIC_GITHUB_URL || "",
  email: process.env.NEXT_PUBLIC_EMAIL || "",
  number: process.env.NEXT_PUBLIC_PHONE_NUMBER || "",
};

const contactRows = [
  {
    label: "Location",
    value: "Kannur, Kerala, India",
    href: null,
    id: "contact-location",
  },
  {
    label: "Email",
    value: user.email,
    href: `mailto:${user.email}`,
    id: "contact-email",
  },
  {
    label: "LinkedIn",
    value: "Muhammed Shaham V",
    href: user.linkedin_url,
    id: "contact-linkedin",
  },
  {
    label: "GitHub",
    value: "4shaham",
    href: user.github_url,
    id: "contact-github",
  },
  {
    label: "WhatsApp",
    value: "Contact on WhatsApp",
    href: `https://wa.me/${user.number}`,
    id: "contact-whatsapp",
  },
];

export default function ContactPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <CustomCursor />
      <Navbar />

      <main className="max-w-[1510px] mx-auto">
        <section
          id="contact-page"
          ref={ref}
          className="w-full min-h-screen px-6 md:px-16 pt-36 pb-24"
        >
          {/* Centered header */}
          <div className="text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.05,
              }}
              className="text-[clamp(3rem,9vw,9rem)] font-light text-[#333] leading-none mb-6"
            >
              Get in Touch.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="text-[#777] font-light text-base max-w-md mx-auto leading-relaxed"
            >
              I&apos;d love to hear from you! Whether you have a project in mind
              or just want to connect, feel free to reach out. Let&apos;s
              explore how we can create something great together.
            </motion.p>
          </div>

          {/* Contact rows */}
          <div className="max-w-3xl mx-auto">
            <div className="divide-y divide-[#333]/10 border-t border-[#333]/10">
              {contactRows.map((row, i) => (
                <motion.div
                  key={row.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.28 + i * 0.09 }}
                  className="flex items-center justify-between py-6 group"
                >
                  <span className="text-sm font-light text-[#555]">
                    {row.label}
                  </span>

                  {row.href ? (
                    <a
                      id={row.id}
                      href={row.href}
                      target={
                        row.href.startsWith("mailto") ? "_self" : "_blank"
                      }
                      rel="noopener noreferrer"
                      className="text-sm font-light text-[#333] underline underline-offset-4 decoration-[#333]/30 hover:decoration-[#333] transition-all duration-200"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span
                      id={row.id}
                      className="text-sm font-light text-[#333]"
                    >
                      {row.value}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
