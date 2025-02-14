import React from 'react';
import projectsData from "../data/project.data.js";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useInView } from "react-intersection-observer";
import SparklesCore from '../components/ui/sparkles.jsx';

function Project() {
  
  return (
    <>


  <main className="bg-black w-full h-full py-10 bg-gradient-to-r from-black to-blue-900">
  <h2 className="text-white text-center font-extrabold text-xl m-2 p-2 pt-2">Projects</h2>
    
  <div className="relative w-full max-w-7xl mx-auto">
    {/* Vertical Timeline Line */}
    
<SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={1.6}
        maxSize={2.4}
        particleDensity={100}
        className="absolute inset-0 w-full h-full"
        particleColor="#FFFFFF"
      />
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-500 h-full"></div>
 
    {/* Animated Meteors */}
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="absolute w-4 h-4 bg-cyan-400 rounded-full animate-meteor-effect"
        style={{
          top: `${(i + 1) * 20}%`,
          left: "calc(50% - 8px)",
          animationDelay: `${i * 1.5}s`,
        }}
      ></div>
    ))}

    {/* Project Timeline */}
    {projectsData.map((data, index) => {
      const { ref, inView } = useInView({
        threshold: 0.2,
      });

      return (
        <motion.div
          key={index}
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className={`relative flex ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          } mb-12`}
        >
          {/* Timeline Dot */}
          <div
            className={`absolute w-6 h-6 bg-cyan-400 rounded-full border-4 border-black transform ${
              index % 2 === 0 ? "-left-3" : "-right-3"
            }`}
          ></div>

          {/* Project Content */}
          <div
            className={`flex flex-col justify-center items-start max-w-2xl p-4 ${
              index % 2 === 0 ? "ml-10" : "mr-10"
            } bg-gradient-to-r from-black to-gray-900 text-white rounded-lg shadow-md ${
              inView ? "opacity-100" : "opacity-60"
            }`}
          >
            {/* Project Images */}
            <div className="flex gap-2 mb-4">
              {[data.img1, data.img2, data.img3].map(
                (img, imgIndex) =>
                  img && (
                    <img
                      key={imgIndex}
                      src={img}
                      alt={`Project ${index + 1} - Image ${imgIndex + 1}`}
                      className="w-1/3 sm:h-24 lg:h-auto p-4 object-cover rounded-lg"
                    />
                  )
              )}
            </div>

            {/* Project Title */}
            <h3 className="text-xl font-bold text-center mb-2">{data.title}</h3>

            {/* Project Description */}
            <p className="text-sm text-gray-300 mb-4">{data.description}</p>

            {/* Project Technologies */}
            <p className="text-sm font-semibold text-gray-200 mb-4">
              <strong>Technologies: </strong>{data.technologies}
            </p>

            {/* GitHub and Website Links */}
            <div className="flex flex-col gap-4">
              {data.repo && (
                <Link
                  to={data.repo}
                  className="text-blue-500 hover:underline text-sm"
                  target='_blank'
                >
                  GitHub: {data.repo}
                </Link>
              )}
              {data.webSite && (
                <Link
                target='_blank'
                  to={data.webSite}
                  className="text-blue-500 hover:underline text-sm"
                >
                  Website: {data.webSite}
                </Link>
              )}
            </div>

            {/* Timeline */}
            {data.timeline && (
              <h3 className="text-sm text-white mt-4">
                <strong>Timeline: </strong>{data.timeline}
              </h3>
            )}
          </div>
        </motion.div>
      );
    })}
  </div>
</main>




    </>
  );
}

export default Project
    