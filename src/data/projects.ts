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
    title: "Subhux HireUp",
    color: "#e8a87c",
    tech: ["Next.js", "TypeScript", "MongoDB"],
    description:
      "A career platform for managing recruitment at Subhx Infotech. Applicants can apply online, and HR/management review applications and generate interview links. Powered by Subhx.ai, it conducts AI-driven, time-limited interviews with auto-submission, generates PDF assessment reports, and provides HR with access to answers, screen recordings, and secure activity monitoring.",
    link: "#",
    status: "in-progress",
    year: "2025",
    img: "/project_img/subhxHireup.png",
  },
  {
    id: "03",
    title: "SUBHX Connect",
    color: "#8b7fdc",
    tech: ["React", "Node.js", "OpenAI"],
    description:
      "SUBHX Connect is a high-speed broadband and network connectivity service by SUBHX Infotech, offering reliable internet solutions for residential and enterprise users. I worked on the frontend implementation, including UI/UX design, API integrations, and developing key features such as the chat support system and FAQ sections, ensuring a responsive and high-performance user experience.",
    link: "#",
    status: "personal",
    year: "2024",
    img: "/project_img/subhxConnect.png",
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
  {
    id: "06",
    title: "History Admin Page",
    color: "#5ba08a",
    tech: ["Next.js", "Node.js", "MongoDB", "TypeScript"],
    description:
      "Full-stack hospital management system with patient records, doctor scheduling, appointment booking, and real-time notifications.",
    link: "#",
    status: "live",
    year: "2025",
    img: "/project_img/transactionHistoryAdmin.png",
  },
  {
    id: "07",
    title: "ADS & BLOG Admin Page",
    color: "#5ba08a",
    tech: ["Next.js", "Node.js", "MongoDB", "TypeScript"],
    description:
      "Full-stack hospital management system with patient records, doctor scheduling, appointment booking, and real-time notifications.",
    link: "#",
    status: "live",
    year: "2025",
    img: "/project_img/adsAdmin.png",
  },
];
