import { Mail, Briefcase, FileText, User, Home, Code, Award } from "lucide-react";

export const MOCK_PROFILE = {
 
  title: "Full-Stack Developer",
  image: "https://placehold.co/400x400/10b981/ffffff?text=Profile+Image",
  about: `This is Afran Nesru, a passionate Full-Stack Developer specializing in building dynamic web applications with the MERN stack.
  
Experienced in interactive websites and complex web applications, always prioritizing scalability and efficiency. Continuously learning new technologies to stay ahead in the rapidly evolving world of web development.
  
The goal is to combine creativity and technical skills to develop applications that meet client needs while delighting users. Outside of coding, enjoys exploring emerging tech trends, contributing to open-source projects, and collaborating with teams to turn ideas into reality.`,

  skills: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "React & Next.js", level: 95 },
    { name: "Node.js & Express", level: 90 },
    { name: "MySQL & MongoDB", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Git & Docker", level: 80 },
  ],

  
  projectsCount: 4, // total projects
  awardsCount: 2, // awards or recognitions

  services: [
    {
      icon: <Code className="w-6 h-6 text-emerald-500" />,
      title: "Web Development",
      description: "Building modern, responsive apps for web and mobile.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-emerald-500" />,
      title: "API Design",
      description: "Designing scalable and secure RESTful APIs.",
    },
   
    {
      icon: <Award className="w-6 h-6 text-emerald-500" />,
      title: "Consulting",
      description: "Providing expert guidance on project architecture and tech stack.",
    },
  ],

  projects: [
    {
      title: "Digital Clock",
      description: "frontend website fully functional clock that compateble with screen time.",
      tags: ["Html", "css", "js", ],
      liveDemo: "https://example-ecommerce.com",
      github: "https://github.com/Afranss-tech/Digi",
    },
    {
      title: "Calculator ",
      description: "frontend website",
      tags: ["Html", "css", "js",],
      liveDemo: "https://example-ecommerce.com",
      github: "https://github.com/Afranss-tech/ecommerce-platform",
    },
    {
      title: "BMI Calculator",
      description: "BMI calculator that accept the user height and weight then calculate BMI.",
      tags: ["Html", "css", "js",],
      liveDemo: "https://example-ecommerce.com",
      github: "https://github.com/Afranss-tech/ecommerce-platform",
    },
    {
      title: "Beauty Salon Website",
      description: "Beauty Salon website with full functionality .",
      tags: ["Html", "css", "js",],
      liveDemo: "https://example-chatapp.com",
      github: "https://github.com/Afranss-tech/real-time-chat",
    },
  ],

  education: [
    {
      degree: "",
      institution: "Addis Ababa University",
      year: 2022,
    },
    {
      degree: "Full-Stack Development Bootcamp",
      institution: "Online Academy",
      year: 2021,
    },
  ],

  contact: {
    email: "halawiyass@gmail.com",
    phone: "+1 123 456 7890",
    linkedin: "afran-nesru",
    github: "Afranss-tech",
    telegram: "RIM_N_K", // added telegram
    
  },

  socialLinks: [
    { platform: "LinkedIn", url: "https://linkedin.com/in/afran-nesru" },
    { platform: "GitHub", url: "https://github.com/Afranss-tech" },
    { platform: "Telegram", url: "https://t.me/AfranTelegram" },
    { platform: "Twitter", url: "https://twitter.com/AfranDev" },
  ],
};
