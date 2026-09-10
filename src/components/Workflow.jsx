import React, { useEffect, useRef } from "react";
import {
  Lightbulb,
  PenTool,
  Sparkles,
  TestTube,
  Search,
  Rocket,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Idea",
    description: "Problem analysis & requirements",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: PenTool,
    title: "Architecture",
    description: "System design & planning",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Build",
    description: "Accelerated implementation",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: TestTube,
    title: "Testing",
    description: "Validation & quality assurance",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Search,
    title: "Review",
    description: "Code review & optimization",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Ship & monitor",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
  },
];

const Workflow = () => {
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

    const els = sectionRef.current?.querySelectorAll("[data-animate]");
    els?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.animationDelay = `${i * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="workflow"
      ref={sectionRef}
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black"
      aria-label="Development Workflow"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div data-animate className="mb-10 sm:mb-16 flex flex-col items-center text-center">
          <div className="section-label justify-center">
            <Sparkles size={14} />
            <span>How I Work</span>
          </div>
          <h2 className="section-title text-center mx-auto">
            Engineering Workflow
          </h2>
          <p className="section-subtitle text-center mx-auto">
            Combining software engineering fundamentals with AI-assisted development
            to ship quality code faster.
          </p>
        </div>

        {/* Steps - Horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} data-animate className="relative">
                <div className="glass-card p-4 sm:p-5 text-center h-full flex flex-col items-center group hover:scale-[1.03] transition-transform duration-300">
                  <div
                    className={`p-3 rounded-xl ${step.bg} ${step.color} mb-3 transition-transform group-hover:scale-110`}
                  >
                    <Icon size={20} />
                  </div>
                  <h4 className="text-white text-sm font-semibold mb-1">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (hidden on last and on small screens) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-gray-700">
                    <ArrowRight size={14} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
