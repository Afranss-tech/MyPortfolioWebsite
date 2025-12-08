import React from "react";
import { Download } from "lucide-react";
import jsPDF from "jspdf";

const resumeData = {
  experience: [
    {
      title: "Current Student",
      company: "Arba Minch University",
      location: "Arba Minch, Ethiopia",
      year: "2023 - Present",
      responsibilities: [
        "4th-year Software Engineering student, gaining practical knowledge in full-stack development.",
        "Working on projects using React, Node.js, and databases.",
        "Preparing for graduation in 2028 with hands-on experience in software projects."
      ]
    }
  ],
  education: [
    {
      title: "Bachelor of Software Engineering (Upcoming)",
      institution: "Arba Minch University",
      year: "2023 - 2028 (Expected)",
      description: "Currently pursuing a Bachelor’s degree in Software Engineering. Expected to graduate in 2028 with strong foundations in software development, databases, and system design."
    }
  ]
};

const ResumeSection = () => {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("Afran Nesru", 20, 20);

    doc.setFontSize(12);
    doc.text("Email: nunumare8@gmail.com", 20, 30);
    doc.text("Phone: 09 22 39 51 44", 20, 36);
    doc.text("LinkedIn: afran-nesru", 20, 42);
    doc.text("GitHub: Afranss-tech", 20, 48);
    doc.text("Telegram: @RIM_N_k", 20, 54);

    doc.setFontSize(16);
    doc.text("Education", 20, 70);
    doc.setFontSize(12);
    resumeData.education.forEach((edu, idx) => {
      const yOffset = 78 + idx * 30;
      doc.text(edu.title, 20, yOffset);
      doc.text(`${edu.institution}, ${edu.year}`, 20, yOffset + 6);
      doc.text(edu.description, 20, yOffset + 12, { maxWidth: 170 });
    });

    doc.setFontSize(16);
    doc.text("Experience / Student Projects", 20, 120);
    doc.setFontSize(12);
    resumeData.experience.forEach((exp, idx) => {
      const yOffset = 128 + idx * 50;
      doc.text(`${exp.title}, ${exp.company} (${exp.year})`, 20, yOffset);
      exp.responsibilities.forEach((resp, rIdx) => {
        doc.text(`- ${resp}`, 25, yOffset + 6 + rIdx * 6, { maxWidth: 170 });
      });
    });

    doc.setFontSize(16);
    doc.text("Skills", 20, 200);
    doc.setFontSize(12);
    doc.text("- Programming Languages: JavaScript, Python, Java", 20, 208);
    doc.text("- Frameworks / Libraries: React, Node.js, Express.js", 20, 216);
    doc.text("- Tools: Git, GitHub, VS Code, MySQL", 20, 224);

    doc.save("Afran_Nesru_Resume.pdf");
  };

  return (
    <section
      id="resume"
      className="relative py-20 px-8 bg-gradient-to-tr from-gray-100 via-white to-gray-200 min-h-screen"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-800">Resume</h2>
        <p className="text-gray-600 mt-2 text-lg">My Academic Journey</p>
      </div>

      {/* Download Resume Button */}
<div className="flex justify-center mb-12">
  <button
    onClick={generatePDF}
    className="flex items-center gap-3 bg-black text-white px-8 py-3 rounded-full shadow-lg hover:bg-gray-800 transition transform hover:scale-105"
  >
    <Download className="w-5 h-5" /> Download Resume
  </button>
</div>

      {/* Timeline */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Experience */}
        <div>
          <h3 className="text-2xl font-bold text-emerald-600 mb-6 border-b-2 border-emerald-300 pb-2">Experience</h3>
          <div className="space-y-8">
            {resumeData.experience.map((item, idx) => (
              <div key={idx} className="relative pl-8 border-l-4 border-emerald-500 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition">
                <span className="absolute -left-5 top-4 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white"></span>
                <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
                <p className="text-sm font-medium text-emerald-600">{item.year}</p>
                <p className="text-gray-700 mt-1">{item.company} | {item.location}</p>
                <ul className="list-disc list-inside text-gray-600 mt-3 space-y-1">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-emerald-600 mb-6 border-b-2 border-emerald-300 pb-2">Education</h3>
          <div className="space-y-8">
            {resumeData.education.map((item, idx) => (
              <div key={idx} className="relative pl-8 border-l-4 border-emerald-500 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition">
                <span className="absolute -left-5 top-4 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white"></span>
                <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
                <p className="text-sm font-medium text-emerald-600">{item.year}</p>
                <p className="text-gray-700 mt-1">{item.institution}</p>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
