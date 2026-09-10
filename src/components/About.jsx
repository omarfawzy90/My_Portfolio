import React, { useEffect, useRef } from "react";
import { User, Briefcase, Award, MapPin } from "lucide-react";

const highlights = [
  { icon: Briefcase, label: "Current Role", value: "ServiceNow Developer @ Deloitte" },
  { icon: Award, label: "Certification", value: "ServiceNow CSA Certified" },
  { icon: MapPin, label: "Location", value: "Cairo, Egypt" },
];

const About = () => {
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

    const children = sectionRef.current?.querySelectorAll("[data-animate]");
    children?.forEach((el) => {
      el.style.opacity = "0";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding px-4 sm:px-6 lg:px-8 bg-black"
      aria-label="About"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div data-animate className="mb-10 sm:mb-14 flex flex-col items-center text-center">
          <div className="section-label">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Engineer by <span className="text-emerald-400">Choice</span>,
            <br className="hidden sm:block" /> Problem Solver by Nature
          </h2>
        </div>

        {/* Content Grid */}
        <div data-animate className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Narrative */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I'm a <span className="text-white font-semibold">ServiceNow Developer at Deloitte's Innovation Hub</span> with
              a solid foundation in backend engineering. I work with enterprise IT Service Management (ITSM),
              workflow automation, and backend systems delivery.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              My journey into software started from an unconventional path — after completing a degree in
              Dentistry from The British University in Egypt, I made a deliberate career pivot to follow my
              passion for building software. That decision-making discipline and precision-focused mindset
              continues to shape how I approach engineering problems today.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              I build backend systems, APIs, and full-stack applications using{" "}
              <span className="text-emerald-400 font-medium">Next.js, TypeScript, PostgreSQL, and the ServiceNow platform</span>.
              I'm also experienced in leveraging Generative AI tools to accelerate development
              — from architecture and implementation to debugging, testing, and optimization — while
              maintaining engineering judgment at every step.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              Whether it's building a new backend service, automating enterprise workflows on ServiceNow,
              or collaborating across teams to ship reliable features, I focus on delivering
              {" "}<span className="text-white font-medium">efficient, well-structured, and scalable solutions</span>.
            </p>
          </div>

          {/* Highlights Sidebar */}
          <div className="lg:col-span-2 space-y-4">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="glass-card p-4 sm:p-5 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-0.5">
                    {label}
                  </p>
                  <p className="text-white text-sm font-medium">{value}</p>
                </div>
              </div>
            ))}

            {/* Languages */}
            <div className="glass-card p-4 sm:p-5">
              <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-3">
                Languages
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Arabic</span>
                  <span className="text-emerald-400 text-xs font-medium">Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">English</span>
                  <span className="text-emerald-400 text-xs font-medium">Professional</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Spanish</span>
                  <span className="text-gray-500 text-xs font-medium">Elementary</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
