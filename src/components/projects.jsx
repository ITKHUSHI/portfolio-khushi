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
          
      <Carousel className="rounded-xl   lg:object-fill   ">
      <img
        src={data.img}
        alt="image 1"
        className=" w-full h-full   object-cover "
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="w-full h-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className=" w-full h-full object-cover"
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
    