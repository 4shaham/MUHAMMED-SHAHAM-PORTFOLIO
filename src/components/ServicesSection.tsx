"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "A website developed to captivate and convert can elevate your brand to new heights. My custom-coded sites are meticulously crafted to reflect your unique identity, delivering seamless experiences with a focus on animation—keeping your audience engaged and returning.",
    items: [
      "Custom Website Development",
      "Responsive Design",
      "E-commerce Integration",
      "SEO Optimization",
    ],
  },
  {
    id: "02",
    title: "Backend Development",
    description:
      "Power your applications with scalable, secure, and efficient backend systems. Whether it's RESTful APIs, database management, or microservices architecture, my backend solutions are built to handle high-performance requirements with ease and reliability.",
    items: [
      "RESTful APIs",
      "Database Management",
      "Authentication & Security",
      "Performance Optimization",
    ],
  },
  {
    id: "03",
    title: "UI/UX Design",
    description:
      "Your digital presence should be visually stunning and user-friendly. I design interfaces that are intuitive, aesthetically pleasing, and tailored to the needs of your audience to enhance user satisfaction and business performance.",
    items: [
      "User Research",
      "Wireframing & Prototyping",
      "Interactive Design",
      "Accessibility & Usability",
    ],
  },
];

// ---- Speed controls (increase to go slower) ----
const CARD_DURATION = 1.6; // card sliding in
const TEXT_DURATION = 1.4; // heading / paragraph
const ITEM_DURATION = 0.8; // each list row
const ITEM_START = 1.0; // when list rows start (after card arrives)
const ITEM_STAGGER = 0.25; // gap between list rows
// -------------------------------------------------

// Smoother, steadier curve (not fast-then-stop)
const smoothEase = [0.65, 0, 0.35, 1] as const;

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const wrapperRef = useRef(null);
  const inView = useInView(wrapperRef, { once: false, amount: 0.25 });

  const dir = index % 2 === 0 ? -1 : 1;

  return (
    <div ref={wrapperRef}>
      <motion.div
        initial={{ opacity: 0, x: `${dir * 100}%` }}
        animate={
          inView ? { opacity: 1, x: "0%" } : { opacity: 0, x: `${dir * 100}%` }
        }
        transition={{ duration: CARD_DURATION, ease: smoothEase }}
        className="border border-[#333]/12 rounded-3xl overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] min-h-[280px]">
          {/* Left: large number */}
          <div className="flex items-center justify-center py-6 px-6 md:p-10 border-b md:border-b-0 md:border-r border-[#333]/10">
            <span className="text-5xl md:text-7xl font-light text-[#aaa]">
              ({service.id})
            </span>
          </div>

          {/* Right: content */}
          <div className="p-6 md:p-10">
            <h3 className="text-xl md:text-3xl font-semibold text-[#333] mb-4">
              {service.title}
            </h3>
            <p className="text-[#777] text-sm leading-relaxed mb-8 font-light">
              {service.description}
            </p>

            <div className="space-y-0">
              {service.items.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 40 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }
                  }
                  transition={{
                    duration: ITEM_DURATION,
                    ease: smoothEase,
                    delay: inView ? ITEM_START + i * ITEM_STAGGER : 0,
                  }}
                  className="flex items-center justify-between py-3 border-b border-[#333]/10 last:border-b-0"
                >
                  <span className="text-xs text-[#bbb] font-mono">{i + 1}</span>
                  <span className="text-sm text-[#444] font-medium tracking-wide">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      id="services"
      className="w-full px-4 sm:px-6 md:px-16 py-20 md:py-36 overflow-x-clip"
    >
      <div className="border-t border-[#333]/12 pt-16">
        <div ref={ref} className="mb-10">
          <motion.h2
            initial={{ opacity: 0, x: -120 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -120 }}
            transition={{ duration: TEXT_DURATION, ease: smoothEase }}
            className="text-[clamp(2rem,6vw,5rem)] font-light text-[#333] mb-6"
          >
            What I Offer.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 120 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 120 }}
            transition={{
              duration: TEXT_DURATION,
              delay: inView ? 0.3 : 0,
              ease: smoothEase,
            }}
            className="text-[#666] text-[clamp(1rem,2.5vw,1.5rem)] font-light max-w-3xl leading-relaxed"
          >
            My services go beyond just solutions — they&apos;re the key to
            transforming your digital presence and achieving your business
            goals. I&apos;m here to bring your digital vision to life and help
            you succeed online.
          </motion.p>
        </div>

        <div className="flex flex-col gap-5 mt-14">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
