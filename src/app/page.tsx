"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import WorksSection from "@/components/WorksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";

/* ─────────────────────────────────────────────────────────────────────
   ROOT
───────────────────────────────────────────────────────────────────── */
export default function Portfolio() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="  max-w-[1510px] mx-auto">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
        <TechStack />
        <WorksSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
