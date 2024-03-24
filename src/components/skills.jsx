import React from 'react'

import skills from "../jsonfiles/skills.json";
function Skills() {
  return (
	<>

	<main className='flex justify-center md:h-[100vh]  h-full items-center bg-gradient-to-tr from-black  to-orange-500 shadow-orange-400  '>
	<div className="  space-x-1 sm:space-x-4 p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
      {skills.map((data) => (
        <div  className="flex flex-col  w-32 h-32 justify-center items-center  hover:bg-gradient-to-tr from-orange-500 to-gray-300 rounded-lg shadow-lg shadow-orange-700 p-4 slkilCards-animate">
          <h2 className="text-lg font-semibold mb-2 text-white">{data.skill}</h2>
          <svg xmlns={data.xmlns} viewBox={data.viewBox} className='h-[100%] w-[100%]'>
            <path fill={data.fill} d={data.d}/></svg>
          
        </div>
      ))}
    </div>
  
	</main>
		</>
  )
}

export default Skills