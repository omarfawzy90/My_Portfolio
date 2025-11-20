import CardSwap, { Card } from "./CardSwap.jsx";
import reactsvg from "../assets/react-javascript-js-framework-facebook-svgrepo-com.svg";
import nextsvg from "../assets/nextjs-svgrepo-com.svg";
import tailwindsvg from "../assets/tailwind-svgrepo-com-2.svg";
import nodejssvg from "../assets/nodejs02-svgrepo-com.svg";
import expresssvg from "../assets/express-svgrepo-com.svg";
import sqlsvg from "../assets/sql-svgrepo-com.svg";
import gtisvg from "../assets/git-svgrepo-com-2.svg";
import phpsvg from "../assets/php02-svgrepo-com.svg";
import dotnetsvg from "../assets/dotnet-svgrepo-com-2.svg";

export default function CardSwapComp() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            {/* Card Swap (shown first on mobile) */}
            <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
                <div
                    className="w-full max-w-md lg:max-w-lg"
                    style={{ minHeight: "450px", position: "relative" }}
                >
                    <CardSwap
                        cardDistance={40}
                        verticalDistance={60}
                        delay={3000}
                        pauseOnHover={true}
                    >
                        <Card>
                            <h3 className="text-xl sm:text-2xl font-bold text-white p-3 sm:p-4 text-center">
                                Frontend Development
                            </h3>
                            <p className="text-gray-300 px-2 pb-2 text-sm sm:text-base text-center">
                                React, Next.js, TailwindCSS, JavaScript
                            </p>
                            <div className="flex flex-wrap justify-center p-2 gap-2 sm:gap-3">
                                <img src={reactsvg} alt="React Logo" className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16" />
                                <img src={nextsvg} alt="Next.js Logo" className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16" />
                                <img src={tailwindsvg} alt="Tailwind CSS Logo" className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16" />
                            </div>
                        </Card>

                        <Card>
                            <h3 className="text-xl sm:text-2xl font-bold text-white p-3 sm:p-4 text-center">
                                Backend Development
                            </h3>
                            <p className="text-gray-300 px-2 pb-2 text-sm sm:text-base text-center">
                                Node.js, Express, PHP, Laravel, .NET, PostgreSQL, MongoDB
                            </p>
                            <div className="flex flex-wrap justify-center p-2 gap-2 sm:gap-3">
                                <img src={nodejssvg} alt="Node.js Logo" className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16" />
                                <img src={expresssvg} alt="Express Logo" className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16" />
                                <img src={sqlsvg} alt="SQL Logo" className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16" />
                                <img src={phpsvg} alt="PHP Logo" className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16" />
                                <img src={dotnetsvg} alt=".NET Logo" className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16" />
                            </div>
                        </Card>

                        <Card>
                            <h3 className="text-xl sm:text-2xl font-bold text-white p-3 sm:p-4 text-center">
                                Other Skills
                            </h3>
                            <p className="text-gray-300 px-2 pb-2 text-sm sm:text-base text-center">
                                Git, REST APIs, Version Control, WordPress
                            </p>
                            <div className="flex justify-center p-3 sm:p-4">
                                <img src={gtisvg} alt="Git Logo" className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20" />
                            </div>
                        </Card>
                    </CardSwap>
                </div>
            </div>

            {/* Text Content (shown second on mobile) */}
            <div className="w-full lg:w-1/2 text-white space-y-4 sm:space-y-6 max-w-2xl order-2 lg:order-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold underline decoration-green-500 text-center lg:text-left">
                    Technologies & Tools
                </h1>
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed text-center lg:text-left">
                    I am a <span className="text-white font-semibold">self-taught backend developer</span> specializing in
                    <span className="text-green-400 font-bold"> HTML, CSS, JavaScript, PHP, C#, Node.js, React, NextJS, Laravel, .NET, PostgreSQL, and MongoDB</span>.
                    After a successful career in dentistry, I pivoted to tech to follow my passion for creating digital solutions that solve real problems.
                    <br /><br />
                    I deliver <span className="text-white font-semibold">efficient, elegant, and scalable code</span> and thrive in collaborative teams where innovation drives impact.
                    <br /><br />
                    Whether it&apos;s building a new website, optimizing a system, or crafting interactive web apps, I aim to
                    <span className="text-green-400 font-bold"> turn ideas into high-quality digital experiences</span>.
                </h2>
            </div>
        </div>
    );
}
