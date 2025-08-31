import React from "react";
import LetterGlitch from "./LetterGlitch";
import Title from "./Title";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={true}
        smooth={true}
      />

      <div className="absolute inset-0 z-10 flex items-center justify-center text-center p-4">
        <Title
          text={["Welcome!", "I'm Omar Fawzy", "Full-Stack Web Developer"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        />
      </div>
    </div>
  );
};

export default Hero;
