export interface Skill {
  category: string;
  skills: string[];
  icon?: string;
}

export const skills: Skill[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
      "HTML/CSS",
      "JavaScript ES6+",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "JWT Authentication",
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Firebase",
      "Redis",
      "Docker",
      "Git",
      "CI/CD",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS (EC2, S3, Lambda)",
      "Vercel",
      "Netlify",
      "Docker",
      "GitHub Actions",
      "Linux",
      "nginx",
    ],
  },
];

export const technicalSkills = {
  languages: ["JavaScript", "TypeScript", "Java", "SQL", "HTML", "CSS"],
  frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"],
  backend: ["Node.js", "Express.js", "Spring Boot", "Java"],
  databases: ["MongoDB", "MySQL", "PostgreSQL"],
  tools: ["Git", "Docker", "AWS", "Postman", "Visual Studio Code"],
};
