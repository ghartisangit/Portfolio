import React from 'react';
import { ChevronDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-teal-100 bg-clip-text text-transparent">
              Sangit Gharti Magar
            </span>
          </h1>
          
          <div className="text-xl sm:text-2xl text-gray-300 mb-8 font-light">
            <span className="text-blue-400">.NET </span>
            {' '}&{' '}
            <span className="text-teal-400">Django Developer</span>
          </div>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            “Crafting meaningful digital experiences with modern technologies — driven by a passion for clean code, innovative solutions, and turning ideas into possibilities.”
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <button className="group bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              <span className="flex items-center gap-2">
                View My Work
                <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </span>
            </button> */}

            <button
  onClick={() => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }}
  className="group bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
>
  <span className="flex items-center gap-2">
    View My Work
    <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
  </span>
</button>
            
            {/* <button className="group border-2 border-gray-600 hover:border-blue-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-400/10">
              <span className="flex items-center gap-2">
                <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                Download CV
              </span>
            </button> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-gray-400 hover:text-white transition-colors" />
      </button>
    </section>
  );
};

export default Hero;