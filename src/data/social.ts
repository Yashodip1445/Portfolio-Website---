export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/yashodip",
    icon: "github",
    label: "Visit my GitHub",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yashodip",
    icon: "linkedin",
    label: "Connect on LinkedIn",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yashodip",
    icon: "twitter",
    label: "Follow me on Twitter",
  },
  {
    name: "Email",
    url: "mailto:yashodip@example.com",
    icon: "mail",
    label: "Send me an email",
  },
];

export const profileInfo = {
  name: "Yashodip",
  title: "Full Stack Developer",
  bio: "I build scalable web applications using React, Next.js, and Java backend technologies. Passionate about clean code, problem-solving, and continuous learning.",
  location: "Mumbai, India",
  email: "yashodip@example.com",
  phone: "+91-XXXXXXXXXX",
  resumeUrl: "/resume.pdf",
};
