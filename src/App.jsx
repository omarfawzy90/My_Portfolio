import React from "react";
import Hero from "./components/Hero";
import PillNav from "./components/Nav";
import logo from "./assets/IMG_5173.PNG";
import CardSwapComp from "./components/CardSwapcom";
import { useNavigate } from "react-router-dom";
import Footer from "./components/Footer";





const App = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden z-0">
       <div className="fixed top-0 left-0 right-0 flex justify-center z-20">
        <PillNav
          logo={logo}
          logoAlt="Omar's Logo"
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

      <div id="about">
        <CardSwapComp />
      </div>
        
        <div id="contact" className="my-25">
          <Footer />
        </div>
    </div>
  );
};

export default App;

