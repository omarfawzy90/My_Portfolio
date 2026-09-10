import React, { useEffect, useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "ServiceNow Certified System Administrator (CSA)",
    issuer: "ServiceNow",
    category: "Enterprise Platform",
    highlight: true,
  },
  {
    title: "Certified Partner Specialist — Gemini Enterprise Agent Development",
    issuer: "Google Cloud",
    category: "Generative AI",
    highlight: true,
  },
];

const Certifications = () => {
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
      { threshold: 0.15 }
    );

    const els = sectionRef.current?.querySelectorAll("[data-animate]");
    els?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.animationDelay = `${i * 0.12}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="section-padding px-4 sm:px-6 lg:px-8 bg-black"
      aria-label="Certifications"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div data-animate className="mb-10 sm:mb-14 flex flex-col items-center text-center">
          <div className="section-label">
            <Award size={14} />
            <span>Certifications</span>
          </div>
          <h2 className="section-title">Professional Certifications</h2>
          <p className="section-subtitle">
            Industry-recognized credentials validating my expertise.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              data-animate
              className="glass-card p-5 sm:p-6 group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0 group-hover:bg-emerald-500/15 transition-colors">
                  <Award size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-[10px] uppercase tracking-wider text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full mb-2">
                    {cert.category}
                  </span>
                  <h3 className="text-white text-sm sm:text-base font-semibold leading-snug mb-1.5">
                    {cert.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    Issued by {cert.issuer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
