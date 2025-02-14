import React from "react";
import skills from "../data/skills.data.js";
import "../index.css"

function Skills() {
  return (
    <>
      <section className="skills-section py-10 bg-gradient-to-r from-black to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center  mb-8">
            Skills
          </h2>
          <div  className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
            {skills.map((data, index) => (
              <div key={index} className="skill-item group relative flex flex-col items-center justify-center p-4 rounded-xl  bg-gradient-to-r from-cyane-900 to-blue-gray-900 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out ">
                <div className="icon w-16 h-16 flex justify-center items-center bg-gradient-to-r from-teal-400 to-blue-400 rounded-full mb-4 ">
                  <svg
                    xmlns={data.xmlns}
                    viewBox={data.viewBox}
                    className="h-12 w-12 text-white"
                  >
                    <path fill={data.fill} d={data.d} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">{data.skill}</h3>
                <div className="w-full mt-4">
                  <div className="skill-progress w-full bg-gray-600 rounded-full h-2">
                    <div
                      className="progress-bar bg-teal-500 rounded-full h-full"
                      style={{ width: data.proficiency }}
                    ></div>
                  </div>
                </div>
                <p className="absolute top-2 right-2 text-xs text-gray-300">{data.proficiency}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}



export default Skills;
