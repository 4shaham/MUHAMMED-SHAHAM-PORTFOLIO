// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";

// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/#about" },
//   { label: "Works", href: "/works" },
//   { label: "Contact", href: "/#contact" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -60, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled ? "transparent" : ""
//         }`}
//       >
//         <div className="w-full px-6 md:px-10 flex items-center justify-between h-16">
//           <motion.a
//             href="#home"
//             className="inline-block text-base font-bold tracking-[0.15em] text-[#333] uppercase"
//             whileHover={{ scale: 1.08, y: -2, color: "#000" }}
//             whileTap={{ scale: 0.95 }}
//             transition={{ type: "spring", stiffness: 400, damping: 17 }}
//           >
//             {process.env.NEXT_PUBLIC_USER_NAME || "USER"}
//           </motion.a>

//           {/* Desktop nav */}
//           <ul className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <Link
//                   href={link.href}
//                   className="text-sm text-[#555] hover:text-[#333] transition-colors font-light"
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile hamburger */}
//           <button
//             id="mobile-menu-btn"
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="md:hidden flex flex-col gap-1.5 p-2"
//             aria-label="Toggle menu"
//           >
//             <motion.span
//               animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
//               className="block w-6 h-px bg-[#333] origin-center"
//             />
//             <motion.span
//               animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
//               className="block w-6 h-px bg-[#333]"
//             />
//             <motion.span
//               animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
//               className="block w-6 h-px bg-[#333] origin-center"
//             />
//           </button>
//         </div>
//       </motion.nav>

//       {/* Mobile menu overlay */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.25 }}
//             className="fixed inset-0 z-40 bg-[#e2e2e2] flex flex-col items-center justify-center gap-10 md:hidden"
//           >
//             {navLinks.map((link, i) => (
//               <motion.div
//                 key={link.href}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.07 }}
//               >
//                 <Link
//                   href={link.href}
//                   onClick={() => setMenuOpen(false)}
//                   className="text-4xl font-light text-[#333] hover:text-[#666] transition-colors"
//                 >
//                   {link.label}
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

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
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu with Escape, or when the screen grows to desktop size
  useEffect(() => {
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setMenuOpen(false);
    const onResize = () => window.innerWidth >= 768 && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Shared spring for the hamburger lines
  const lineSpring = { type: "spring", stiffness: 320, damping: 26 } as const;
  const line =
    "absolute left-1/2 top-1/2 -ml-3 -mt-px block h-[1.5px] w-6 rounded-full bg-[#333]";

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6"
      >
        {/* Bar: turns into a floating glass pill after scrolling */}
        <div
          className={`mx-auto flex h-14 max-w-7xl items-center justify-between rounded-full border px-4 transition-all duration-500 md:h-16 md:px-6 ${
            scrolled && !menuOpen
              ? "border-white/70 bg-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link href="/" aria-label="Home" onClick={() => setMenuOpen(false)}>
            <motion.span
              className="inline-block text-base font-bold uppercase tracking-[0.15em] text-[#333]"
              whileHover={{ scale: 1.08, y: -2, color: "#000" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {process.env.NEXT_PUBLIC_USER_NAME || "USER"}
            </motion.span>
          </Link>

          {/* Desktop nav */}
          <ul
            className="hidden items-center gap-1 md:flex"
            onMouseLeave={() => setHovered(null)}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onMouseEnter={() => setHovered(link.href)}
                  onFocus={() => setHovered(link.href)}
                  onBlur={() => setHovered(null)}
                  className={`relative block rounded-full px-4 py-2 text-sm font-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#333]/40 ${
                    hovered === link.href ? "text-[#111]" : "text-[#555]"
                  }`}
                >
                  {hovered === link.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-black/[0.07]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <motion.span
                    className="inline-block"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.94 }}
                  >
                    {link.label}
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger: fixed-size button, lines centered, clean X */}
          <motion.button
            id="mobile-menu-btn"
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            whileTap={{ scale: 0.88 }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={`relative h-10 w-10 shrink-0 rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#333]/40 md:hidden ${
              menuOpen ? "bg-black/[0.07]" : "hover:bg-black/[0.05]"
            }`}
          >
            <motion.span
              initial={false}
              animate={menuOpen ? { y: 0, rotate: 45 } : { y: -6, rotate: 0 }}
              transition={lineSpring}
              className={line}
            />
            <motion.span
              initial={false}
              animate={
                menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.2 }}
              className={line}
            />
            <motion.span
              initial={false}
              animate={menuOpen ? { y: 0, rotate: -45 } : { y: 6, rotate: 0 }}
              transition={lineSpring}
              className={line}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay: circular reveal from the hamburger */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "circle(0px at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0px at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-[#e2e2e2] px-8 md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    delay: 0.2 + i * 0.07,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border-b border-black/10"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between py-5"
                  >
                    <motion.span
                      whileTap={{ x: 8 }}
                      className="text-4xl font-light text-[#555] transition-colors duration-200 group-hover:text-[#111] group-active:text-[#111]"
                    >
                      {link.label}
                    </motion.span>
                    <span
                      aria-hidden
                      className="text-2xl text-[#333] opacity-30 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    >
                      →
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
