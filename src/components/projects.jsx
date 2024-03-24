import React, { useState } from 'react';
import projectsData from "../jsonfiles/project.data.json";

function ProjectCard({ data }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    // Add your logic for handling the click event for this specific image
  };

  return (
    <div className="text-white top-14 w-[310px]  h-[350px] flex sm:justify-center sm:w-96 sm:h-86  md:mr-64  hover:bg-gradient-to-tr from-orange-500 rounded-lg shadow-md shadow-orange-500 p-4" onClick={handleClick}>
       
      <img 
        src={data.img} 
        alt="Project" 
        className={`absolute mb-4 rounded-lg z-10 w-[280px] h-[300px]  sm:w-[355px] sm:h-80 object-cover object-center transition-transform duration-300 transform hover:ease-in-out ease-in-out ${isClicked ? 'translate-x-full' : ''}`} />
      
      <div className='relative w-full object-cover'>
        <h2 className="text-lg font-semibold">{data.title}</h2>
        <p className="text-sm text-white mb-4">{data.description}</p>
        <h2 className="text-lg font-semibold mb-2">Technologies : {data.technologies}</h2>
      </div>
     
    </div>
  );
}

function Projects() {
  return (
    <main className='flex justify-center items-center bg-gradient-to-tr from-black to-orange-500 shadow-orange-400 w-[100vw]'>
      <div className="space-x-4 p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((data, index) => (
          <ProjectCard key={index} data={data} />
        ))}
      </div>
    </main>
  );
}

export default Projects;
