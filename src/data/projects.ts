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
    color: "#e8a87c",
    status: "live",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Redux",
      "Socket.IO",
      "TypeScript",
      "Tailwind CSS",
      "Minio Cloud",
    ],
    description:
      "A cryptocurrency trading platform for secure and efficient digital asset transactions. At Subhx Infotech, I contributed to multiple areas of the platform, starting with the development of an initial menu-based chat application with menu and submenu-driven conversations.I later worked on key platform features including the KYC module, Quick Buy, transaction history, and compliance. I developed responsive UI components, implemented and integrated REST APIs, and worked on different KYC flows including Basic KYC, Advanced KYC, and Corporate KYC. I also developed Quick Buy APIs and integrated them into the frontend, implemented transaction history UI and APIs, and contributed to compliance-related features and other platform pages.",
    img: "/project_img/coinspe.png",
    link: "https://beta.coinspe.com/",
    year: "2026",
  },
  {
    id: "02",
    title: "Subhux HireUp",
    color: "rgba(194, 98, 155, 1)",
    description:
      "A career platform for managing recruitment at Subhx Infotech. Applicants can apply online, and HR/management review applications and generate interview links. Powered by Subhx.ai, it conducts AI-driven, time-limited interviews with auto-submission, generates PDF assessment reports, and provides HR with access to answers, screen recordings, and secure activity monitoring.",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Redux",
      "TypeScript",
      "Tailwind CSS",
    ],
    link: "#",
    status: "in-progress",
    year: "2025",
    img: "/project_img/subhxHireup.png",
  },
  {
    id: "03",
    title: "SUBHX Connect",
    color: "#110753ff",
    description:
      "SUBHX Connect is a broadband and network connectivity platform by SUBHX Infotech, providing internet solutions for residential and enterprise users. I contributed to the frontend development by building responsive UI components and integrating APIs across key features. I implemented the broadband availability check feature, including its UI and API integration, and developed the broadband purchase flow with the required UI and API integrations. I also worked on the chat support system, FAQ sections, and other platform features, focusing on a responsive and user-friendly experience.",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Redux",
      "TypeScript",
      "Tailwind CSS",
      "Socket.IO",
    ],
    link: "#",
    status: "personal",
    year: "2026",
    img: "/project_img/subhxConnect.png",
  },

  {
    id: "06",
    title: "History Admin Page",
    color: "#ba8facff",
    tech: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Redux",
      "TypeScript",
      "Tailwind CSS",
    ],
    description:
      "An admin dashboard for managing and viewing user activity history with role-based access control. The page displays history data according to the authenticated user’s token and role, with a responsive frontend, dedicated APIs for retrieving and managing data, and pagination for efficiently handling large datasets.",
    link: "#",
    status: "live",
    year: "2025",
    img: "/project_img/transactionHistoryAdmin.png",
  },
  {
    id: "07",
    title: "ADS & BLOG Admin Page",
    color: "#5ba08a",
    tech: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Redux",
      "TypeScript",
      "Tailwind CSS",
    ],
    description:
      "An admin management platform for handling **promotions and announcements** with role-based access control. I implemented complete **CRUD operations** across both the frontend and backend, allowing authorized administrators to create, update, view, and delete promotional content and announcements based on their assigned roles. The project includes responsive UI development, API implementation, and role-based access management.",
    link: "#",
    status: "live",
    year: "2026",
    img: "/project_img/adsAdmin.png",
  },
  // {
  //   id: "04",
  //   title: "Medical Hospital",
  //   color: "#5ba08a",
  //   tech: ["Next.js", "Node.js", "MongoDB", "TypeScript"],
  //   description:
  //     "Full-stack hospital management system with patient records, doctor scheduling, appointment booking, and real-time notifications.",
  //   link: "#",
  //   status: "live",
  //   year: "2025",
  // },
];
