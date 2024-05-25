import React from "react";
import experties from "../data/experties.data.js";
import skills from "../data/skills.data.js";

function Skills() {
  return (
    <>
      
      <section className=" experience-section relative  p-4  bg-black grid-cols-3">
          <div className="container text-white   ">
            <h2 className="justify-center items-center flex p-2 m-4 text-xl font-bold">SKILLS</h2>
            <div className="experience-items  ">
              {experties.map((data) => (
                 <div className="experience-item  shadow-lg shadow-cyan-400 p-2 rounded-md  ">
                  <div className="experience-info">
                    <p>{data.name}</p>
                    <p>{data.skillful}</p>
                  </div>
                  <div className="progress-line" data-percent="90%">
                    <span style={{ width:`${data.skillful}` }}></span>
                  </div>
                 </div>
              ))}
            </div>
            </div>
        </section>
        <section className="grid justify-center md:h-[100vh]  h-full items-center bg-black   ">
        <div className="justify-center items-center flex">
          <h2 className="text-2xl font-bold text-white ">
            My Experience Area
          </h2>
        </div>
        <div className="  space-x-1 sm:space-x-4 p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
          {skills.map((data) => (
            <div className="flex flex-col  w-32 h-32 justify-center items-center rounded-lg shadow-lg shadow-cyan-400 p-4 slkilCards-animate">
              <h2 className="text-lg font-semibold mb-2 text-white">
                {data.skill}
              </h2>
              <svg
                xmlns={data.xmlns}
                viewBox={data.viewBox}
                className="h-[100%] w-[100%]"
              >
                <path fill={data.fill} d={data.d} />
              </svg>
            </div>
          ))}
        </div>
     
      </section>
      
    </>
  );
}

export default Skills;
