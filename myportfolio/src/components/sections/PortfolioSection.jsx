import React from 'react';
import SectionHeader from '../SectionHeader';
import { Briefcase } from 'lucide-react';

// import local PNG images
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';

const localProjects = [
  {
    title: "Beauty Salon Website",
    description: "Beauty Salon website with full functionality .",
    tags: ["Html", "css", "js"],
    image: project1,
    live: "https://grand-churros-b1449a.netlify.app/"
  },
  {
    title: "Digital Clock",
    description: "frontend website fully functional clock that compateble with screen time.",
    tags: ["HTML", "CSS","js"],
    image: project2,
    live: "https://grand-churros-b1449a.netlify.app/"
  },
  {
    title: "Calculator",
    description: "frontend website",
    tags: ["Html", "css", "js"],
    image: project3,
    live: "https://grand-churros-b1449a.netlify.app/"
  },
  {
    title: "BMI Calculator",
    description: "BMI calculator that accept the user height and weight then calculate BMI.",
    tags: ["Html", "css", "js"],
    image: project4,
    live: "https://grand-churros-b1449a.netlify.app/"
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-20 px-8 bg-gray-50 min-h-screen-minus-nav">
    <SectionHeader Icon={Briefcase} title=" Projects" />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {localProjects.map((project, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
        >
          {/* Image with hover overlay */}
          <div className="relative group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <a
                href={project.live}
                target="_blank"
                className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-black hover:text-white transition"
              >
                See Live
              </a>
            </div>
          </div>

          {/* Project details */}
          <div className="p-5">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs font-medium bg--100 text-emerald-800 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PortfolioSection;
