import React, { useState } from 'react';
import projectsData from "../data/project.data.js";
import { Carousel } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

function Project() {
  
  return (
    <>
   <main className='bg-black w-full h-full  flex justify-center items-center flex-col'>
    <h2 className='justify-center flex font-bold text-white text-2xl p-4  shadow-lg shadow-cyan-400 rounded-xl mt-4 ' >Projects</h2>
   <div className='w-full h-full p-5 lg:flex lg:justify-center lg:items-center lg:flex-col '>
    {
      projectsData.map((data)=>(  
          <div className='w-full h-full shadow-lg shadow-cyan-600 rounded-lg flex   '>
         <div className='m-4 p-2  flex gap-4'>
             <div className='bg-blue-400 w-[150%] lg:w-[60%]  object-cover '>
            <Carousel>
         <img
        src={data.img1}
        alt="image 1"
        className=" w-[100%] h-[100%]  object-cover "
      />
      <img
        src={data.img2}
        alt="image 2"
        className=" w-[100%] h-[100%]  object-cover"
      />
      <img
        src={data.img3}
        alt="image 3"
        className="  w-[100%] h-[100%]  object-cover"
      />
    </Carousel>

          </div>
          <div className='text-white'>
           <h2 className="text-center font-extrabold font-serif text-xl p-2">{data.title}</h2>
           <p className="font-serif">{data.description}</p>
           <h2 className="text-xl font-semibold font-serif mb-2">Technologies : {data.technologies}</h2>
           <div className='flex gap-8 '>
           <Link to={data.repo} className='hover:underline text-blue-500'>GitHub Link</Link>
           <Link to={data?.webSite} className='hover:underline text-blue-500'>{data.webSite?"Website Link":""}</Link>

           </div>
          </div>
          
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
    