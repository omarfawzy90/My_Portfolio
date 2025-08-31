import CardSwap, { Card } from "./CardSwap.jsx";
import reactsvg from "../assets/react-javascript-js-framework-facebook-svgrepo-com.svg";
import nextsvg from "../assets/nextjs-svgrepo-com.svg";
import tailwindsvg from "../assets/tailwind-svgrepo-com-2.svg";
import nodejssvg from "../assets/nodejs02-svgrepo-com.svg";
import expresssvg from "../assets/express-svgrepo-com.svg";
import sqlsvg from "../assets/sql-svgrepo-com.svg";
import gtisvg from "../assets/git-svgrepo-com-2.svg";

export default function CardSwapComp() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16">
      <div className="w-full md:w-1/2 text-white space-y-6 px-4 md:px-12">
        <h1 className="text-3xl md:text-5xl font-bold underline decoration-green-500 text-center md:text-left">
          Technologies & Tools
        </h1>
        <h2 className="text-base md:text-xl text-gray-300 leading-relaxed text-center md:text-left">
          I am a{" "}
          <span className="text-white font-semibold">
            self-taught full-stack developer
          </span>{" "}
          specializing in
          <span className="text-green-400 font-bold">
            {" "}
            HTML, CSS, JavaScript, Node.js, React, PostgreSQL, and MongoDB
          </span>
          . After a successful career in dentistry, I pivoted to tech to follow
          my passion for creating digital solutions that solve real problems.
          <br />
          <br />
          I deliver{" "}
          <span className="text-white font-semibold">
            efficient, elegant, and scalable code
          </span>{" "}
          and thrive in collaborative teams where innovation drives impact.
          <br />
          <br />
          Whether it’s building a new website, optimizing a system, or crafting
          interactive web apps, I aim to{" "}
          <span className="text-green-400 font-bold">
            turn ideas into high-quality digital experiences
          </span>
          .
        </h2>
      </div>

      <div
        className="w-full md:w-1/2"
        style={{ height: "auto", minHeight: "350px", position: "relative" }}
      >
        <CardSwap
          cardDistance={40}
          verticalDistance={60}
          delay={3000}
          pauseOnHover={true}
        >
          <Card>
            <h3 className="text-xl md:text-2xl font-bold text-white p-4 text-center">
              Frontend Development
            </h3>
            <p className="text-gray-300 p-2 text-center">
              React, Next.js, TailwindCSS, JavaScript
            </p>
            <div className="flex flex-wrap justify-center p-2 gap-2">
              <img src={reactsvg} alt="React Logo" className="h-12 w-12 md:h-16 md:w-16" />
              <img src={nextsvg} alt="next Logo" className="h-12 w-12 md:h-14 md:w-14" />
              <img src={tailwindsvg} alt="tailwind Logo" className="h-12 w-12 md:h-14 md:w-14" />
            </div>
          </Card>

          <Card>
            <h3 className="text-xl md:text-2xl font-bold text-white p-4 text-center">
              Backend Development
            </h3>
            <p className="text-gray-300 p-2 text-center">
              Node.js, Express, PostgreSQL, MongoDB
            </p>
            <div className="flex flex-wrap justify-center p-2 gap-2">
              <img src={nodejssvg} alt="nodejs Logo" className="h-12 w-12 md:h-14 md:w-14" />
              <img src={expresssvg} alt="express Logo" className="h-12 w-12 md:h-14 md:w-14" />
              <img src={sqlsvg} alt="sql Logo" className="h-12 w-12 md:h-14 md:w-14" />
            </div>
          </Card>

          <Card>
            <h3 className="text-xl md:text-2xl font-bold text-white p-4 text-center">
              Other Skills
            </h3>
            <p className="text-gray-300 p-2 text-center">Git, REST APIs</p>
            <div className="flex justify-center p-4">
              <img src={gtisvg} alt="git Logo" className="h-12 w-12 md:h-16 md:w-16" />
            </div>
          </Card>
        </CardSwap>
      </div>
    </div>
  );
}
