import React from "react";
import LetterGlitch from "./LetterGlitch";
import Title from "./Title";
import { Download, FileText } from "lucide-react";

const Hero = () => {
  const handleResumeDownload = () => {
    // You'll need to add your resume PDF to the public folder
    const link = document.createElement('a');
    link.href = '/Dev Backend Omar Fawzy.pdf'; 
    link.download = 'Dev Backend Omar Fawzy.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={true}
        smooth={true}
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <Title
          text={["Welcome!", "I'm Omar Fawzy", "Back-end Web Developer"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-8 sm:mb-10 lg:mb-12"
        />
        
        {/* Subtitle */}
        <p className="text-white bg-transparent text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mb-8 sm:mb-10 lg:mb-12 px-4 leading-relaxed">
          Transforming ideas into elegant digital solutions with modern web technologies
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full max-w-md px-4">
          {/* Resume Download Button */}
          <button
            onClick={handleResumeDownload}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-green-500 hover:cursor-pointer text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Download resume"
          >
            <Download size={20} className="group-hover:animate-bounce hover:cursor-pointer" />
            <span>Download Resume</span>
            <FileText size={20} />
          </button>

          {/* View Projects Button */}
          <button
            onClick={scrollToProjects}
            className="group relative w-full sm:w-auto hover:cursor-pointer inline-flex items-center justify-center gap-3 bg-black border-2 border-green-500 text-green-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-green-500 hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="View projects"
          >
            <span>View My Work</span>
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-green-400 text-xs sm:text-sm font-mono">Scroll Down</span>
            <svg 
              className="w-6 h-6 text-green-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
