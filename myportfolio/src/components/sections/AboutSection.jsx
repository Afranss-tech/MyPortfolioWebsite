import React, { useState, useEffect } from "react";
import SectionHeader from "../SectionHeader";
import { User, FileText } from "lucide-react";
import AboutImg from "../../assets/about.jpg";
import Certificate1 from "../../assets/android.jpg";
import Certificate2 from "../../assets/artificial.jpg";
import Certificate3 from "../../assets/programming.jpg";

const AboutSection = ({ profile }) => {
  const [showFullText, setShowFullText] = useState(false);

  const certificates = [
    { image: Certificate1, link: "https://www.udacity.com/certificate/e/813e22d4-a926-11f0-88bb-139877eb694d", title: "Certificate 1" },
    { image: Certificate2, link: "https://www.udacity.com/certificate/e/9798cd24-a933-11f0-acf9-e3c95565ac11", title: "Certificate 2" },
    { image: Certificate3, link: "https://www.udacity.com/certificate/e/272bb7ce-b8b4-11ef-b5d9-fb41cce1aebe", title: "Certificate 3" },
  ];

  // Animated counters for highlights
  const [counters, setCounters] = useState({
    projects: 0,
    certificates: 0,
  });

  useEffect(() => {
    let proj = 0, cert = 0;
    const interval = setInterval(() => {
      if (proj < profile.projectsCount) proj += 1;
      if (cert < certificates.length) cert += 1;
      setCounters({ projects: proj, certificates: cert });
      if (proj >= profile.projectsCount && cert >= certificates.length)
        clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [profile, certificates.length]);

  return (
    <section
      id="about"
      className="py-20 px-8 bg-gray-50 min-h-screen flex justify-center items-center"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10 items-start">
        {/* Profile Image */}
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <div className="relative group">
            <img
              src={AboutImg}
              alt={profile.name}
              className="w-64 h-64 md:w-full md:h-auto rounded-xl shadow-2xl object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-xl border-4 border-emerald-400 opacity-0 group-hover:opacity-50 transition-opacity"></div>
          </div>
        </div>

        {/* About Content */}
        <div className="md:w-2/3 space-y-6 text-gray-800">
          <SectionHeader Icon={User} title="About Me" />
          <h3 className="text-3xl font-bold text-gray-900">{profile.title}</h3>

          {/* About Text with "Read More" */}
          <p className="text-gray-700 leading-relaxed">
            {showFullText ? profile.about : `${profile.about.substring(0, 300)}...`}
            <button
              onClick={() => setShowFullText(!showFullText)}
              className="text-emerald-500 font-semibold ml-2"
            >
              {showFullText ? "Show Less" : "Read More"}
            </button>
          </p>

          {/* Highlights / Stats */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            {/* Projects */}
            <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow">
              <FileText className="w-6 h-6 text-emerald-400 mb-2" />
              <span className="text-lg font-semibold">{counters.projects}</span>
              <p className="text-gray-500 text-sm">Projects</p>
            </div>

            {/* Certificates */}
            <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow">
              <div className="flex space-x-4">
                {certificates.map((cert, idx) => (
                  <div key={idx} className="relative group">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-36 h-12 rounded-md object-cover cursor-pointer shadow hover:scale-105 transition-transform"
                      onClick={() => window.open(cert.link, "_blank")}
                      title={cert.title}
                    />
                    {/* Tooltip overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-sm font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                      See Certificate Live
                    </div>
                  </div>
                ))}
              </div>
              <span className="text-lg font-semibold mt-2">{counters.certificates}</span>
              <p className="text-gray-500 text-sm">Certificates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
