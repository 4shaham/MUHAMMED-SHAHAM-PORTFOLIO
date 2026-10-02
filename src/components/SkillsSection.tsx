'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'MongoDB', 'Docker', 'AWS', 'GraphQL', 'Tailwind CSS', 'Framer Motion',
  'Redis', 'Git', 'Figma', 'REST APIs',
];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="max-w-7xl mx-auto w-full px-6 md:px-16 lg:px-24 py-24 md:py-36">
      <div className="border-t border-[#1a1a1a]/15 pt-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-[#888] mb-4 font-medium">Tech Stack</p>
          <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-light text-[#1a1a1a]">Skills & Tools.</h2>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.08, backgroundColor: '#1a1a1a', color: '#e8e8e8' }}
              className="border border-[#1a1a1a]/20 rounded-full px-5 py-2 text-sm text-[#333] bg-[#dfdfdf] transition-colors duration-200"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
