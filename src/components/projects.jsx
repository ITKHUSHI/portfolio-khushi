import React, { useState } from 'react';
import projectsData from "../data/project.data.js";
import { Carousel } from "@material-tailwind/react";

function Project() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    // Add your logic for handling the click event for this specific image
  };
  

  return (
    <>
   <main className='bg-black w-full h-full  flex justify-center items-center flex-col'>
    <h2 className='justify-center flex font-bold text-white text-2xl p-4  shadow-lg shadow-cyan-400 rounded-xl mt-4 ' >Projects</h2>
   <div className='w-full h-full p-5 lg:flex lg:justify-center lg:items-center lg:flex-col '>
    {
      projectsData.map((data)=>(       
    <div className="text-white m-8  w-[90%] lg:w-[80%] flex items-center justify-center  rounded-lg shadow-lg shadow-cyan-400 " onClick={handleClick}>
      <div className=' m-4 p-8  '>  
      <h2 className="text-2xl border-2xl border-b-indigo-400 font-semibold p-4 m-2 flex justify-center items-center">{data.title}</h2>
         <div className='w-full bg-blue-gray-50 h-96 lg:w-[75%] lg:h-[65%] lg:ml-32'>
          
      <Carousel className="rounded-xl   lg:object-fill bg-slate-950   ">
      <img
        src={data.img1}
        alt="image 1"
        className=" w-[100%] h-[90%]  object-cover "
      />
      <img
        src={data.img2}
        alt="image 2"
        className=" w-[100%] h-[90%]  object-cover"
      />
      <img
        src={data.img3}
        alt="image 3"
        className="  w-[100%] h-[90%]  object-cover"
      />
    </Carousel>

         </div>
    
      <p className="text-sm text-white mb-4  md:text-xl p-4">{data.description}</p>
      <h2 className="text-xl font-semibold mb-2">Technologies : {data.technologies}</h2>
    </div>
   
  </div>
      ))
    }
    </div>
   </main>
    </>
  );
}

export default Project
    