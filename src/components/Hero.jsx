import React, { useEffect, useRef } from "react";
import LetterGlitch from "./LetterGlitch";
import { Download, ArrowRight, Linkedin, Github, Mail } from "lucide-react";

const Hero = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      requestAnimationFrame(() => {
        el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    }
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Omar_Fawzy_Master_CV.pdf";
    link.download = "Omar_Fawzy_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full min-h-[100dvh] bg-black overflow-hidden flex flex-col items-center justify-center" aria-label="Hero">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto"
      >
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-xs sm:text-sm font-medium tracking-wide">
            ServiceNow Developer @ Deloitte Innovation Hub
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Omar Fawzy
        </h1>

        {/* Headline */}
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-emerald-400 mb-4 tracking-tight">
          ServiceNow Developer & Backend Engineer
        </p>

        {/* Sub-headline */}
        <p
          className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mb-8 sm:mb-10 leading-relaxed px-4"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Building enterprise ITSM solutions and scalable backend systems.{" "}
          <br className="hidden sm:block" />
          ServiceNow CSA certified. AI-assisted development practitioner.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-center w-full max-w-md px-4 mb-8">
          <button
            onClick={handleResumeDownload}
            className="group inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 cursor-pointer"
            aria-label="Download resume"
            id="hero-download-resume"
          >
            <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            <span>Download Resume</span>
          </button>

          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center justify-center gap-2.5 bg-transparent border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 cursor-pointer"
            aria-label="View projects"
            id="hero-view-projects"
          >
            <span>View Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/omar-fawzy-6029b6177"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/10 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300"
            aria-label="LinkedIn profile"
            id="hero-linkedin"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/omarfawzy90"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/10 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300"
            aria-label="GitHub profile"
            id="hero-github"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:omarfawzyy90@gmail.com"
            className="p-2.5 rounded-full border border-white/10 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300"
            aria-label="Send email"
            id="hero-email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
