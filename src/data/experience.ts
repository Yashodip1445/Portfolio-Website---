export interface Experience {
  id: number;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string[];
  technologies: string[];
  type: "work" | "internship" | "training";
}

export const experiences: Experience[] = [
  {
    id: 1,
    position: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    startDate: "Jan 2024",
    endDate: "Present",
    isCurrent: true,
    description: [
      "Developed and maintained multiple React/Next.js applications for enterprise clients",
      "Designed and implemented REST APIs using Node.js and Express.js",
      "Collaborated with UI/UX designers to create responsive and accessible interfaces",
      "Optimized application performance, reducing load times by 40%",
      "Mentored junior developers and conducted code reviews",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    type: "work",
  },
  {
    id: 2,
    position: "Backend Developer Intern",
    company: "WebDev Startup",
    location: "Mumbai, India",
    startDate: "Jul 2023",
    endDate: "Dec 2023",
    isCurrent: false,
    description: [
      "Built and tested REST APIs using Java Spring Boot framework",
      "Implemented user authentication and authorization using JWT tokens",
      "Worked with MySQL database for data modeling and optimization",
      "Participated in agile development practices and daily standups",
      "Fixed bugs and implemented features based on client requirements",
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "Docker", "Git"],
    type: "internship",
  },
  {
    id: 3,
    position: "MERN Stack Developer",
    company: "Free Code Camp / Self-Learning",
    location: "Online",
    startDate: "Jan 2023",
    endDate: "Jun 2023",
    isCurrent: false,
    description: [
      "Completed comprehensive MERN stack developer course",
      "Built 10+ full-stack projects from concept to deployment",
      "Learned advanced React patterns, state management, and optimization",
      "Implemented responsive designs using Tailwind CSS",
      "Deployed projects on Vercel, Netlify, and AWS",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    type: "training",
  },
];
