import React, { useEffect, useRef } from "react";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "ServiceNow Developer",
    company: "Deloitte Innovation Hub",
    location: "Cairo, Egypt",
    period: "Aug 2026 – Present",
    current: true,
    description: [
      "Apply ServiceNow platform expertise and a backend engineering background to support enterprise IT Service Management (ITSM) initiatives and workflow automation for organizational operations.",
    ],
    technologies: ["ServiceNow Platform", "JavaScript", "ITSM", "Workflow Automation"],
  },
  {
    role: "Back End Developer",
    company: "ScanDrum",
    location: "Cairo, Egypt",
    period: "Dec 2025 – Feb 2026",
    current: false,
    description: [
      "Developed and maintained backend systems, APIs, and databases for web and mobile applications using Next.js, TypeScript, and PostgreSQL.",
      "Implemented Drizzle ORM against a Neon-hosted PostgreSQL database to streamline data access and improve application performance.",
      "Collaborated with cross-functional teams to integrate backend services with front-end features, ensuring reliable end-to-end functionality.",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Neon", "Drizzle ORM"],
  },
  {
    role: "Full Stack Developer",
    company: "DigiCrafterz",
    location: "Cairo, Egypt",
    period: "Nov 2025 – Dec 2025",
    current: false,
    description: [
      "Developed a veterinary clinic management system as a full-stack application, building both front-end and back-end components.",
      "Worked with .NET, React, and Next.js to deliver a functional and responsive application.",
    ],
    technologies: [".NET", "C#", "React", "Next.js"],
  },
];

const Experience = () => {
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
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-animate]");
    cards?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.animationDelay = `${i * 0.15}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding px-4 sm:px-6 lg:px-8 bg-black"
      aria-label="Professional Experience"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div data-animate className="mb-10 sm:mb-14 flex flex-col items-center text-center">
          <div className="section-label">
            <Briefcase size={14} />
            <span>Experience</span>
          </div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            My career journey from full-stack development to enterprise ServiceNow solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} data-animate className="relative pl-12 sm:pl-16">
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-6 top-6 -translate-x-1/2">
                  <div
                    className={`w-3 h-3 rounded-full border-2 ${
                      exp.current
                        ? "bg-emerald-400 border-emerald-400 shadow-lg shadow-emerald-400/30"
                        : "bg-black border-emerald-500/40"
                    }`}
                  />
                </div>

                {/* Card */}
                <div className="glass-card p-5 sm:p-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-emerald-400 font-medium text-sm sm:text-base">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Current badge */}
                  {exp.current && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Current Position
                    </div>
                  )}

                  {/* Responsibilities */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                        <ChevronRight size={14} className="text-emerald-500/60 shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div data-animate className="mt-14">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-emerald-500/50" />
            Education
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-card p-5">
              <p className="text-emerald-400 text-sm font-semibold mb-1">
                Information Technology Institute (ITI)
              </p>
              <p className="text-white text-sm font-medium mb-1">
                ServiceNow Professional Training Program
              </p>
              <p className="text-gray-500 text-xs">Feb 2026 – May 2026</p>
            </div>
            <div className="glass-card p-5">
              <p className="text-emerald-400 text-sm font-semibold mb-1">
                The British University in Egypt
              </p>
              <p className="text-white text-sm font-medium mb-1">
                Bachelor's Degree, Dentistry
              </p>
              <p className="text-gray-500 text-xs">2017 – 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
