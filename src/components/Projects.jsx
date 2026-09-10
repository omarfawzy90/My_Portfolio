import React, { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Code2, Folder } from "lucide-react";
import leadkey from "../assets/leadkey.png";
import cliniclens from "../assets/cliniclens.png";
import scandrum from "../assets/scandrum.png";
import portfolioImg from "../assets/project-portfolio.png";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    const els = sectionRef.current?.querySelectorAll("[data-animate]");
    els?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.animationDelay = `${i * 0.12}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "LeadKey",
      problem: "Businesses miss potential leads in social media conversations that could convert to customers.",
      solution: "AI-powered lead generation tool that monitors Twitter and Hacker News 24/7 with real-time alerts, AI intent scoring, and smart reply suggestions.",
      image: leadkey,
      technologies: ["Next.js", "React", "Gemini 2.5 Flash", "Tailwind CSS", "Supabase"],
      github: "https://www.leadkey.pro",
      live: "https://www.leadkey.pro",
      highlight: "AI Integration",
    },
    {
      title: "ClinicLens",
      problem: "Dentists lack a centralized platform to discover, compare, and review verified dental clinics.",
      solution: "High-performance clinic discovery and rating platform with multilingual support (EN/AR with RTL), real-time search, role-based auth, and a mobile-first UI.",
      image: cliniclens,
      technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "next-intl", "Tailwind CSS"],
      live: "https://www.cliniclens.pro",
      highlight: "Full-Stack",
    },
    {
      title: "ScanDrum",
      problem: "Merchants need an easy way to create and manage online stores with custom domains and order processing.",
      solution: "Backend infrastructure for a multi-tenant e-commerce platform enabling merchants to manage stores, product catalogs, and order processing for a mobile-first Flutter app.",
      image: scandrum,
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Neon", "Drizzle ORM", "Vercel"],
      live: "https://app.scandrum.com",
      mainWebsite: "https://www.scandrum.com",
      highlight: "Backend Architecture",
    },
    {
      title: "Portfolio Website",
      problem: "Need a professional portfolio that effectively communicates skills and experience to recruiters.",
      solution: "Modern, responsive portfolio with smooth animations, interactive components, and optimized performance built from scratch.",
      image: portfolioImg,
      technologies: ["React", "Tailwind CSS", "Vite", "GSAP"],
      github: "https://github.com/omarfawzy90/My_Portfolio",
      live: "https://www.omarfawzy.dev",
      highlight: "Frontend",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding px-4 sm:px-6 lg:px-8 bg-black"
      aria-label="Featured Projects"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div data-animate className="mb-10 sm:mb-14 flex flex-col items-center text-center">
          <div className="section-label">
            <Folder size={14} />
            <span>Projects</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world applications showcasing backend architecture, full-stack
            development, and AI integration.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              data-animate
              className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Project Image */}
              <div className="relative h-44 sm:h-52 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Code2 className="w-16 h-16 text-emerald-500/20" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Highlight badge */}
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider text-emerald-400 font-semibold bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-full border border-emerald-500/20">
                  {project.highlight}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-500 text-xs mb-1.5 font-medium uppercase tracking-wide">
                  Problem
                </p>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed line-clamp-2">
                  {project.problem}
                </p>

                <p className="text-gray-500 text-xs mb-1.5 font-medium uppercase tracking-wide">
                  Solution
                </p>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.solution}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-emerald-500/8 text-emerald-400/80 border border-emerald-500/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={15} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink size={15} />
                      <span>Live</span>
                    </a>
                  )}
                  {project.mainWebsite && (
                    <a
                      href={project.mainWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                      aria-label={`${project.title} website`}
                    >
                      <ExternalLink size={15} />
                      <span>Website</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div data-animate className="text-center mt-10 sm:mt-14">
          <a
            href="https://github.com/omarfawzy90"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-emerald-500 text-black px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
            aria-label="View all projects on GitHub"
            id="projects-github-cta"
          >
            <Github size={20} />
            <span>View All on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
