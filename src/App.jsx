import React, { lazy, Suspense } from "react";
import Hero from "./components/Hero";
import PillNav from "./components/Nav";
import logo from "./assets/IMG_5173.PNG";
import Loading from "./components/Loading";
import ScrollProgress from "./components/ScrollProgress";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiNodedotjs,
  SiDotnet,
  SiPhp,
  SiLaravel,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Skills = lazy(() => import("./components/Skills"));
const Workflow = lazy(() => import("./components/Workflow"));
const Projects = lazy(() => import("./components/Projects"));
const Certifications = lazy(() => import("./components/Certifications"));
const Footer = lazy(() => import("./components/Footer"));
const LogoLoop = lazy(() => import("./components/Loop"));

const techLogos = [
  { node: <SiReact size={36} color="#61DBFB" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs size={36} color="#ffffff" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiJavascript size={36} color="#F7DF1E" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTypescript size={36} color="#3178C6" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiPostgresql size={36} color="#4169E1" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMongodb size={36} color="#47A248" />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiNodedotjs size={36} color="#5FA04E" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiDotnet size={36} color="#512BD4" />, title: ".NET", href: "https://dotnet.microsoft.com" },
  { node: <TbBrandCSharp size={36} color="#239120" />, title: "C#", href: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { node: <SiPhp size={36} color="#777BB4" />, title: "PHP", href: "https://www.php.net" },
  { node: <SiLaravel size={36} color="#FF2D20" />, title: "Laravel", href: "https://laravel.com" },
  { node: <SiTailwindcss size={36} color="#06B6D4" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const SectionFallback = () => (
  <div className="min-h-[200px] bg-black" />
);

const App = () => {
  return (
    <Loading>
      <div className="relative w-full min-h-screen bg-black overflow-hidden">
        <ScrollProgress />

        {/* Navigation */}
        <div className="fixed top-0 left-0 right-0 flex justify-center z-20">
          <PillNav
            logo={logo}
            logoAlt="Omar Fawzy"
            items={[
              { label: "Home", targetId: "home" },
              { label: "About", targetId: "about" },
              { label: "Experience", targetId: "experience" },
              { label: "Skills", targetId: "skills" },
              { label: "Projects", targetId: "projects" },
              { label: "Contact", targetId: "contact" },
            ]}
            activeHref="/"
            ease="power2.easeOut"
            baseColor="#000000"
            pillColor="#ffffff"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#000000"
          />
        </div>

        {/* Hero */}
        <div id="home">
          <Hero />
        </div>

        {/* Tech Logo Loop */}
        <Suspense fallback={<SectionFallback />}>
          <div className="relative overflow-hidden h-[120px] sm:h-[140px] border-y border-white/5">
            <LogoLoop
              logos={techLogos}
              speed={70}
              direction="left"
              logoHeight={40}
              gap={48}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#000000"
              ariaLabel="Technologies"
            />
          </div>
        </Suspense>

        {/* About */}
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>

        {/* Experience */}
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>

        {/* Skills */}
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>

        {/* Workflow */}
        <Suspense fallback={<SectionFallback />}>
          <Workflow />
        </Suspense>

        {/* Projects */}
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>

        {/* Certifications */}
        <Suspense fallback={<SectionFallback />}>
          <Certifications />
        </Suspense>

        {/* Footer */}
        <Suspense fallback={<div className="bg-black py-10" />}>
          <Footer />
        </Suspense>
      </div>
    </Loading>
  );
};

export default App;
