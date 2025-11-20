import React, { lazy, Suspense } from "react";
import Hero from "./components/Hero";
import PillNav from "./components/Nav";
import logo from "./assets/IMG_5173.PNG";
import Loading from "./components/Loading";
import ScrollProgress from "./components/ScrollProgress";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiPhp,
  SiLaravel,
    SiDotnet,
} from "react-icons/si";
import {TbBrandCSharp} from "react-icons/tb";

const CardSwapComp = lazy(() => import("./components/CardSwapcom"));
const Projects = lazy(() => import("./components/Projects"));
const Footer = lazy(() => import("./components/Footer"));
const LogoLoop = lazy(() => import("./components/Loop"));


const techLogos = [
  { node: <SiReact size={40} color="#61DBFB" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs size={40} color="white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiJavascript size={40} color="#c4e63cff" />, title: "Javascript", href: "https://www.javascript.com" },
  { node: <SiTailwindcss size={40} color="#38BDF8" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPhp size={40} color="#787CB5" />, title: "PHP", href: "https://www.php.net" },
  { node: <SiLaravel size={40} color="#FF2D20" />, title: "Laravel", href: "https://laravel.com" },
    { node: <SiDotnet size={40} color="#FF2D20" />, title: "Dotnet" , href: "https://dotnet.com" },
    { node: <TbBrandCSharp size={40} color="#239120" />, title: "C#" , href: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
];


const App = () => {
  return (
    <Loading>
      <div className="relative w-full min-h-screen bg-black overflow-hidden">
        {/* Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Navigation */}
        <div className="fixed top-0 left-0 right-0 flex justify-center z-20">
          <PillNav
            logo={logo}
            logoAlt="Company Logo"
            items={[
              { label: "Home", targetId: "home" },
              { label: "About", targetId: "about" },
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

        {/* Hero Section */}
        <div id="home">
          <Hero />
        </div>

        {/* Tech Logos Loop */}
        <Suspense fallback={<div className="h-[200px] bg-black" />}>
          <div className="relative overflow-hidden h-[200px]">
            <LogoLoop
              logos={techLogos}
              speed={90}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners"
            />
          </div>
        </Suspense>

        {/* About Section */}
        <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><span className="text-green-400 text-2xl font-mono animate-pulse">Loading...</span></div>}>
          <div id="about">
            <CardSwapComp />
          </div>
        </Suspense>

        {/* Projects Section */}
        <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><span className="text-green-400 text-2xl font-mono animate-pulse">Loading...</span></div>}>
          <Projects />
        </Suspense>

        {/* Contact / Footer */}
        <Suspense fallback={<div className="bg-black py-10" />}>
          <div id="contact" className="my-25">
            <Footer />
          </div>
        </Suspense>
      </div>
    </Loading>
  );
};

export default App;
