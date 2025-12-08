import React from "react";
import HomeBg from "../../assets/home.jpg";

const HomeSection = ({ profile }) => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat p-10"
    style={{ backgroundImage: `url(${HomeBg})` }}
  >
    <div className="text-center max-w-4xl text-white drop-shadow-md">
      <p className="text-xl text-emerald-400 font-semibold mb-3 animate-pulse">
        Hello, I'm Afran Nesru
      </p>

      <h1 className="text-6xl md:text-8xl font-extrabold">
        {profile.name}
      </h1>

      <h2 className="text-3xl md:text-5xl font-semibold mt-2 text-gray-200">
        {profile.title}
      </h2>

      <p className="mt-6 text-lg text-gray-300">
        {profile.tagline}
      </p>

      <a
        href="#contact"
        className="mt-10 inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-10 rounded-full shadow-lg transform transition hover:scale-105"
      >
        Hire Me
      </a>
    </div>
  </section>
);

export default HomeSection;
