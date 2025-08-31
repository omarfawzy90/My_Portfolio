import CardSwap, { Card } from "./CardSwap";
import reactsvg from "../assets/react-javascript-js-framework-facebook-svgrepo-com.svg";
import nextsvg from "../assets/nextjs-svgrepo-com.svg";
import tailwindsvg from "../assets/tailwind-svgrepo-com-2.svg";
import nodejssvg from "../assets/nodejs02-svgrepo-com.svg";
import expresssvg from "../assets/express-svgrepo-com.svg";
import sqlsvg from "../assets/sql-svgrepo-com.svg"

export default function CardSwapComp() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16">
  {/* LEFT TEXT */}
  <div className="w-full md:w-1/2 text-white space-y-6 px-6 md:px-20">
    <h1 className="text-4xl md:text-5xl font-bold underline decoration-green-500">
      Technologies & Tools
    </h1>
     <h2 className="text-lg md:text-xl text-gray-300 leading-relaxed">
      I am a <span className="text-white font-semibold">self-taught full-stack developer</span> specializing in 
      <span className="text-green-400 font-bold"> HTML, CSS, JavaScript, Node.js, React, PostgreSQL, and MongoDB</span>.  
      After a successful career in dentistry, I pivoted to tech to follow my passion for creating digital solutions that solve real problems.  

      I deliver <span className="text-white font-semibold">efficient, elegant, and scalable code</span> and thrive in collaborative teams where innovation drives impact.  

      Whether it’s building a new website, optimizing a system, or crafting interactive web apps, I aim to <span className="text-green-400 font-bold">turn ideas into high-quality digital experiences</span>.  

    </h2>  
  </div>


      {/* RIGHT CARDS */}
      <div
        className="w-full md:w-1/2"
        style={{ height: "400px", position: "relative" }}
      >
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={3000}
          pauseOnHover={false}
        >
          <Card>
            <h3 className="text-2xl font-bold text-white p-4">
              Frontend Development
            </h3>
            <p className="text-gray-300 p-4">
              React, Next.js, TailwindCSS, JavaScript
            </p>
            <div className="flex justify-center p-4">
              <img src={reactsvg} alt="React Logo" className="h-16 w-16 p-2" />
              <img src={nextsvg} alt="next Logo" className="h-14 w-14 p-2" />
              <img
                src={tailwindsvg}
                alt="tailwind Logo"
                className="h-14 w-14 p-2"
              />
            </div>
          </Card>
          <Card>
            <h3 className="text-2xl font-bold text-white p-4">
              Backend Development
            </h3>
            <p className="text-gray-300 p-4">
              Node.js, Express, PostgreSQL, MongoDB
            </p>
            <div className="flex justify-center p-4">
              <img
                src={nodejssvg}
                alt="nodejs Logo"
                className="h-14 w-14 p-2"
              />
              <img
                src={expresssvg}
                alt="express Logo"
                className="h-18 w-18 p-2"
              />
              <img
                src={sqlsvg}
                alt="sql Logo"
                className="h-18 w-18 p-2"
              />
            </div>
          </Card>
          <Card>
            <h3 className="text-2xl font-bold text-white p-4">Other Skills</h3>
            <p className="text-gray-300 p-4">Git, REST APIs</p>
          </Card>
        </CardSwap>
      </div>
    </div>
  );
}
