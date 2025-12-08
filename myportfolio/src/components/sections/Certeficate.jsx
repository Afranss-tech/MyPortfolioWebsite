import React, { useState } from "react";
import SectionHeader from "../SectionHeader";
import { Award } from "lucide-react";

// import your 3 certificates
import cert1 from "../../assets/android.jpg";
import cert2 from "../../assets/artificial.jpg";
import cert3 from "../../assets/programming.jpg";

const certificates = [
  {
    title: "Programming Certificate",
    description: "Completed a programming course from Udacity.",
    image: cert1,
    live: "https://example.com/certificate1"
  },
  {
    title: "Mobile App Development Certificate",
    description: "Completed Android course from Udacity.",
    image: cert2,
    live: "https://example.com/certificate2"
  },
  {
    title: "Artificial Intelligence Certificate",
    description: "Learned artificial intelligence course.",
    image: cert3,
    live: "https://example.com/certificate3"
  },
];

const CertificateSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certificate"
      className="py-20 px-8 min-h-screen flex flex-col items-center"
      style={{
        background: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
      }}
    >
      <SectionHeader Icon={Award} title="Certificates" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col justify-between w-80"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-700 mb-4">{cert.description}</p>
              </div>
              <button
                onClick={() => setSelectedCert(cert)}
                className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 transition font-semibold"
              >
                See Certificate
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-xl w-full relative shadow-xl">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold text-2xl"
            >
              &times;
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full rounded-t-xl"
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold mb-2">{selectedCert.title}</h3>
              <p className="text-gray-700 mb-4">{selectedCert.description}</p>
              <a
                href={selectedCert.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition font-semibold inline-block"
              >
                View Certificate Online
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificateSection;
