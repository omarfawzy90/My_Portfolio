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

      <div className="absolute inset-0 z-10 flex items-center justify-center text-center">
        <Title
          text={["Welcome!", "I'm Omar Fawzy", "Full-Stack Web Developer"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
            className="text-6xl font-bold text-white"

        />
      </div>
    </div>
  );
};

export default Hero;


//   {/* <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white">
//         {/* <img className= "rounded-full w-60 h-60" src="/src/assets/161047652.jpeg" /> */}
//         <h1 className="text-5xl font-bold text-stroke">Hello, I am Omar Fawzy</h1>
//         <p className="mt-4 text-lg">Web Developer</p>
//         <button className="mt-6 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 hover:cursor-pointer">
//           Contact
//         </button>
//       </div>
