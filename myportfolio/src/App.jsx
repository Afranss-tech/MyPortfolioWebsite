import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import HomeSection from "./components/sections/HomeSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from './components/sections/SkillsSection';
import Certeficate from './components/sections/Certeficate';
import ResumeSection from "./components/sections/ResumeSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import ServiceSection from "./components/sections/ServiceSection";
import ContactSection from "./components/sections/ContactSection";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // 🚀 NEW: State to store backend data
  const [profile, setProfile] = useState(null);

  // 🚀 NEW: Fetch data from Render on page load
  useEffect(() => {
    fetch("https://your-backend-name.onrender.com/profile")
      .then(res => res.json())
      .then(data => {
        console.log("API DATA:", data);
        setProfile(data);
      })
      .catch(err => console.error("API ERROR:", err));
  }, []);

  // ⏳ Show loading until backend data arrives
  if (!profile) return <h1 className="text-center mt-10">Loading...</h1>;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="flex">

      {/* FIXED SIDEBAR */}
      <Sidebar
        profile={profile}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* MAIN CONTENT */}
      <main className="ml-64 w-full">

        <HomeSection profile={profile} />
        <AboutSection profile={profile} />
        <SkillsSection skills={profile.skills} />
        <ResumeSection />
        <Certeficate/>
        <PortfolioSection projects={profile.projects} />
        <ServiceSection services={profile.services} />
        <ContactSection contact={profile.contact} />

      </main>
    </div>
  );
}

export default App;
