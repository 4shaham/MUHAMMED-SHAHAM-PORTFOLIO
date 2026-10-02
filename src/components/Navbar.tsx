"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "transparent" : ""
        }`}
      >
        <div className="w-full px-6 md:px-10 flex items-center justify-between h-16">
          <motion.a
            href="#home"
            className="inline-block text-base font-bold tracking-[0.15em] text-[#333] uppercase"
            whileHover={{ scale: 1.08, y: -2, color: "#000" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {process.env.NEXT_PUBLIC_USER_NAME || "USER"}
          </motion.a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[#555] hover:text-[#333] transition-colors font-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-[#333] origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-px bg-[#333]"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-[#333] origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#e2e2e2] flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl font-light text-[#333] hover:text-[#666] transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
