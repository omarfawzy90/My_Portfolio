import React, { useEffect, useRef } from "react";
import { Layers, Code2, Server, Database, Cloud, Cpu, Wrench, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "ServiceNow",
    icon: Wrench,
    items: ["ServiceNow Platform", "ServiceNow CSA", "ITSM", "Workflow Automation"],
  },
  {
    title: "Languages",
    icon: Code2,
    items: ["JavaScript", "TypeScript", "C#", "PHP", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    icon: Layers,
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    items: ["Node.js", "Express", "Laravel", ".NET", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Neon", "Drizzle ORM", "Supabase"],
  },
  {
    title: "Tools & DevOps",
    icon: Cloud,
    items: ["Git", "GitHub", "Vercel", "VS Code"],
  },
  {
    title: "AI & Development Tools",
    icon: Sparkles,
    items: ["Gemini", "ChatGPT", "Claude", "GitHub Copilot", "Cursor", "Prompt Engineering"],
  },
  {
    title: "Core Competencies",
    icon: Cpu,
    items: ["Backend Development", "API Development", "Database Design", "Cross-Functional Collaboration"],
  },
];

const Skills = () => {
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
      el.style.animationDelay = `${i * 0.08}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding px-4 sm:px-6 lg:px-8 bg-black"
      aria-label="Technical Skills"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div data-animate className="mb-10 sm:mb-14 flex flex-col items-center text-center">
          <div className="section-label">
            <Layers size={14} />
            <span>Skills</span>
          </div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I use to build software, from frontend to backend
            to enterprise platforms.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mb-12">
          {skillCategories.map(({ title, icon: Icon, items }) => (
            <div
              key={title}
              data-animate
              className="glass-card p-5 group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/15 transition-colors">
                  <Icon size={16} />
                </div>
                <h3 className="text-sm font-semibold text-white tracking-wide">
                  {title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1.5 rounded-md bg-white/5 text-gray-400 border border-white/5 hover:text-emerald-400 hover:border-emerald-500/20 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI-Assisted Development Highlight */}
        <div data-animate className="glass-card p-6 sm:p-8 border-emerald-500/20">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
              <Sparkles size={22} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                AI-Assisted Software Development
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                Experienced in leveraging multiple Generative AI models and AI coding tools to
                accelerate software development — from architecture and implementation to
                debugging, testing, documentation, and optimization. I use AI as part of an
                engineering workflow rather than relying blindly on generated code.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Building features with AI coding assistants",
                  "Code generation and refactoring",
                  "Debugging and troubleshooting with AI",
                  "Reviewing and validating AI-generated code",
                  "Using multiple models depending on the task",
                  "Rapid prototyping with AI acceleration",
                  "Prompt engineering for precise outputs",
                  "Understanding model strengths and limitations",
                ].map((capability) => (
                  <div
                    key={capability}
                    className="flex items-start gap-2 text-xs sm:text-sm text-gray-400"
                  >
                    <span className="text-emerald-500 mt-0.5 shrink-0">▸</span>
                    <span>{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
