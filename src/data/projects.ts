export type Project = {
  id: string;
  title: string;
  color: string;
  tech: string[];
  description: string;
  link: string;
  status: "live" | "in-progress" | "personal";
  year: string;
  img?: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Coinspe",
    color: "#2cb5d1",
    tech: ["HTML5", "Tailwind", "React"],
    description:
      "Developed a web platform showcasing an extensive product range with seamless customer interaction, reflecting a commitment to quality.",
    link: "https://beta.coinspe.com/",
    status: "live",
    year: "2025",
    img: "/project_img/coinspe.png",
  },
  {
    id: "02",
    title: "Urban Cafe",
    color: "#e8a87c",
    tech: ["Next.js", "TypeScript", "MongoDB"],
    description:
      "A modern cafe management platform with online ordering, table reservations, and real-time order tracking for customers.",
    link: "#",
    status: "in-progress",
    year: "2025",
  },
  {
    id: "03",
    title: "AI Task Manager",
    color: "#8b7fdc",
    tech: ["React", "Node.js", "OpenAI"],
    description:
      "Smart productivity app powered by AI that automatically categorizes tasks, suggests priorities, and generates subtasks.",
    link: "#",
    status: "personal",
    year: "2024",
  },
  {
    id: "04",
    title: "Medical Hospital",
    color: "#5ba08a",
    tech: ["Next.js", "Node.js", "MongoDB", "TypeScript"],
    description:
      "Full-stack hospital management system with patient records, doctor scheduling, appointment booking, and real-time notifications.",
    link: "#",
    status: "live",
    year: "2025",
  },
];
