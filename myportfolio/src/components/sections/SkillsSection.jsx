import React, { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker } from "react-icons/fa";

const SkillsSection = ({ skills }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timeout = setTimeout(() => setAnimated(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  // Assign icons to known skills
  const skillIcons = {
    HTML: <FaHtml5 className="text-orange-500 w-5 h-5 mr-2" />,
    CSS: <FaCss3Alt className="text-blue-500 w-5 h-5 mr-2" />,
    "JavaScript": <span className="text-yellow-400 font-bold mr-2">JS</span>,
    "React & Next.js": <FaReact className="text-blue-400 w-5 h-5 mr-2" />,
    "Node.js & Express": <FaNodeJs className="text-green-500 w-5 h-5 mr-2" />,
    "MySQL & MongoDB": <FaDatabase className="text-gray-700 w-5 h-5 mr-2" />,
    "Tailwind CSS": <FaCss3Alt className="text-teal-400 w-5 h-5 mr-2" />,
    "Git & Docker": <><FaGitAlt className="text-red-500 w-5 h-5 mr-1"/><FaDocker className="text-blue-500 w-5 h-5 mr-2"/></>,
  };

  return (
    <section id="skills" className="py-20 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">My Skills</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-2">
              {skillIcons[skill.name] || null}
              <span className="font-semibold text-gray-700">{skill.name}</span>
            </div>
            <div className="w-full bg-gray-200 h-3 rounded-full">
              <div
                className={`h-3 rounded-full transition-all duration-1500 ease-in-out`}
                style={{
                  width: animated ? `${skill.level}%` : "0%",
                  backgroundColor: "#10b981", // emerald color
                }}
              ></div>
            </div>
            <span className="text-gray-500 text-sm mt-1 block">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
