import React from 'react';
import SectionHeader from '../SectionHeader';
import { Mail } from 'lucide-react';

const ServiceSection = ({ services }) => (
  <section id="services" className="py-20 px-8 bg-white min-h-screen-minus-nav">
    <SectionHeader Icon={Mail} title="Services" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg border-t-4 border-emerald-500 transition duration-300 hover:scale-[1.02]">
          <div className="mb-4">{service.icon}</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServiceSection;
