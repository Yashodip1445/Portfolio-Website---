export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  technologies: string[];
  github?: string;
  live?: string;
  category: "frontend" | "backend" | "fullstack";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Skin Analysis App",
    description:
      "An AI-powered web application for analyzing skin conditions using computer vision",
    longDescription:
      "Developed a full-stack MERN application that uses TensorFlow.js for real-time skin analysis. Features include image upload, AI analysis, recommendations, and user history tracking. Integrated with a Node.js backend API and MongoDB for data persistence.",
    technologies: [
      "React",
      "Next.js",
      "TensorFlow.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    github: "https://github.com/yashodip/ai-skin-analysis",
    live: "https://ai-skin-analysis.vercel.app",
    category: "fullstack",
  },
  {
    id: 2,
    title: "REST API with Spring Boot",
    description:
      "A robust REST API for e-commerce operations with JWT authentication and role-based access",
    longDescription:
      "Built a production-ready REST API using Spring Boot featuring JWT authentication, role-based access control (RBAC), pagination, filtering, and error handling. Integrated with MySQL for data persistence and deployed on AWS EC2.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "Docker",
      "AWS",
    ],
    github: "https://github.com/yashodip/ecommerce-api",
    live: "https://api.example.com",
    category: "backend",
  },
  {
    id: 3,
    title: "Full Stack E-Commerce Platform",
    description:
      "A complete e-commerce solution with product catalog, shopping cart, and payment integration",
    longDescription:
      "Developed a full-stack e-commerce platform using MERN stack with Stripe payment integration. Features include product filtering, shopping cart, order management, user accounts, and admin dashboard for inventory management.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Redux",
      "Tailwind CSS",
    ],
    github: "https://github.com/yashodip/ecommerce-platform",
    live: "https://ecommerce-platform.vercel.app",
    category: "fullstack",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio showcasing projects and professional experience",
    longDescription:
      "Created this responsive portfolio website using Next.js and Tailwind CSS with smooth animations via Framer Motion. Features include dark mode, SEO optimization, and displays all projects and experience.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/yashodip/portfolio",
    live: "https://yashodip.vercel.app",
    category: "frontend",
  },
];
