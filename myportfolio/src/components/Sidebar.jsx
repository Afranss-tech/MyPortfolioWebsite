import React from "react";
import NavItem from "./NavItem";
import { 
  FaLinkedin, 
  FaGithub, 
  FaTelegramPlane, 
  FaYoutube 
} from "react-icons/fa";
import { 
  Home, 
  User, 
  Code, 
  FileText, 
  Briefcase, 
  Mail, 
  Phone 
} from "lucide-react";

import ProfileImg from "../assets/home.jpg";

// Profile data
const profile = {
  contact: {
    linkedin: "afran-nesru",
    github: "Afranss-tech",
    telegram: "RIM_N_K",
    youtube: "Afranz"
  }
};

const Sidebar = ({ activeSection, scrollToSection }) => (
  <div className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-6 flex flex-col shadow-2xl z-50">

    {/* Profile */}
    <div className="flex flex-col items-center mb-8 pt-5">
      <img
        src={ProfileImg}
        alt="Afran Nesru"
        className="w-24 h-24 rounded-full object-cover border-4 border-emerald-500 shadow-lg"
      />

      {/* Name under profile image */}
      <h1 style={{ fontSize: "20px", marginTop: "2px", fontWeight: "600" }}>
        Afran Nesru
      </h1>

      {/* Social icons with real colors */}
      <div className="flex gap-4 mt-3">
        <a
          href={`https://linkedin.com/in/${profile.contact.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <FaLinkedin size={18} color="#0077B5" /> {/* LinkedIn Blue */}
        </a>
        <a
          href={`https://github.com/${profile.contact.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <FaGithub size={18} color="#F5F5F5" /> {/* Light gray for visibility */}
        </a>
        <a
          href={`https://t.me/${profile.contact.telegram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <FaTelegramPlane size={18} color="#0088CC" /> {/* Telegram Blue */}
        </a>
        <a
          href={`https://youtube.com/${profile.contact.youtube}`}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <FaYoutube size={18} color="#FF0000" /> {/* YouTube Red */}
        </a>
      </div>
    </div>

    {/* Navigation */}
    <nav className="space-y-3">
      <NavItem Icon={Home} text="Home" targetId="home" activeSection={activeSection} scrollToSection={scrollToSection} />
      <NavItem Icon={User} text="About" targetId="about" activeSection={activeSection} scrollToSection={scrollToSection} />
      <NavItem Icon={Code} text="Skills" targetId="skills" activeSection={activeSection} scrollToSection={scrollToSection} />
      <NavItem Icon={FileText} text="Resume" targetId="resume" activeSection={activeSection} scrollToSection={scrollToSection} />
      <NavItem Icon={Briefcase} text="Portfolio" targetId="portfolio" activeSection={activeSection} scrollToSection={scrollToSection} />
      <NavItem Icon={Mail} text="Services" targetId="services" activeSection={activeSection} scrollToSection={scrollToSection} />
      <NavItem Icon={Phone} text="Contact" targetId="contact" activeSection={activeSection} scrollToSection={scrollToSection} />
    </nav>

  </div>
);

export default Sidebar;
