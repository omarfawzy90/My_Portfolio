import React from "react";
import Hero from "./components/Hero";
import PillNav from "./components/Nav";
import logo from "./assets/IMG_5173.PNG";
import CardSwapComp from "./components/CardSwapcom";
import Footer from "./components/Footer";
import LogoLoop from "./components/Loop";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript
} from "react-icons/si";


const techLogos = [
  { node: <SiReact size={40} color="#61DBFB" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs size={40} color="white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiJavascript size={40} color="#c4e63cff" />, title: "Javascript", href: "https://www.javascript.com" },
  { node: <SiTailwindcss size={40} color="#38BDF8" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];


const App = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="fixed top-0 left-0 right-0 flex justify-center z-20">
        <PillNav
          logo={logo}
          logoAlt="Company Logo"
          items={[
            { label: "Home", targetId: "home" },
            { label: "About", targetId: "about" },
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

      <div id="home">
        <Hero />
      </div>

      {/* Tech Logos Loop */}
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

      {/* About Section */}
      <div id="about">
        <CardSwapComp />
      </div>

      {/* Contact / Footer */}
      <div id="contact" className="my-25">
        <Footer />
      </div>
    </div>
  );
};

export default App;
