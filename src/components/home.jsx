import React from 'react';
import khushiImage from '/images/khushi.png';
import { TextGenerateEffect } from "../components/ui/text-generate-effect.jsx";
import FlowerAnimation from './ui/FlowerAnimation.jsx';
const Home = () => {
  const words = "Hello, I'm Khushi Rathore! 👋";

  return (
    <main className="bg-gradient-to-r from-blue-900 to-black text-white overflow-hidden ">
      
      {/* 🚀 Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 ">
        {/* Background Overlay */}

        {/* Content */}
        <div className="relative z-10  ">
          <img
            src={khushiImage}
            alt="Khushi Rathore"
            className="w-48 h-48 md:w-60 md:h-60 object-cover p-2 m-4 rounded-full mx-auto border-4 border-white shadow-lg transition-transform transform hover:scale-110"
          />
          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600">
            <TextGenerateEffect words={words} />
          </h1>
          <p className="mt-4 text-lg md:text-xl sm:max-w-xl mx-auto opacity-90 p-2 m-4">
          I want to work with innovative teams to develop essential software while contributing to projects that bring real-world improvements. We ought to perform as innovative forces to create a new future.                 
          </p>
        </div>
        <FlowerAnimation/>

      </header>

      {/* ✨ About Me Section */}
      <section className="py-20 px-8 md:px-16 bg-gradient-to-l from-blue-900 to-black text-white flex flex-col md:flex-row items-center">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            About Me
          </h2>
          <p className="mt-6 text-lg leading-relaxed opacity-90">
            I’m Khushi Rathore, a software developer specializing in MERN stack development.
          </p>
          <p className="mt-4 text-lg leading-relaxed opacity-80">
          I have hands-on experience working on full-stack development while applying JavaScript and React.js as frontend technologies, along with Tailwind CSS and a backend technology stack that includes Express.js, Mongoose, and Multer.          </p>
          <p className="mt-4 text-lg leading-relaxed opacity-80">
          My projects integrate technical expertise with strategic problem-solving in a collaborative manner.          </p>
         
          <h3 className="text-2xl font-semibold text-white"> Key Skills:</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg opacity-90">
              <li>Programming Languages: Java, JavaScript</li>
              <li>Frontend Development: With expertise in React.js, HTML, and CSS, I also leverage Tailwind CSS and Bootstrap for my frontend development.
        </li>
              <li>Backend Development: I program servers using Express.js, Mongoose, and Multer.
              </li>
              <li>API Design & Testing: My expertise with POSTMAN enables effective RESTful API testing.
              </li>
              <li>Version Control: Git, GitHub
              </li>
            </ul>



        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center  mt-10 md:mt-0 ">
          <img
            src={khushiImage}
            alt="Khushi Rathore"
            className="w-80 md:w-[400px] h-auto object-cover rounded-lg shadow-xl transform transition-transform hover:scale-105"
          />

        </div>
      </section>

      {/* 🔥 Projects Section */}
      <section className="py-20 px-8 md:px-16 bg-gradient-to-r from-blue-900 to-black">
        <h2 className="text-center text-4xl font-bold text-white mb-12">
          Featured Project: <span className="text-blue-400">VidStream Hub</span>
        </h2>

        {/* Project Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative ">
            <img
              src="./images/videoProject1.png"
              alt="VidStream Hub"
              className="w-full h-auto rounded-lg p-2 m-4 shadow-lg transform transition-all hover:scale-105"
            />
          </div>

          {/* Right Side - Project Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Project Overview</h3>
            <p className="text-lg opacity-90">
              VidStream Hub is a MERN Stack based video-sharing platform that enables seamless content interaction.
            </p>

            <h3 className="text-2xl font-semibold text-white">Key Features</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg opacity-90">
              <li>🔐 Secure User Authentication (Google/Gmail)</li>
              <li>📤 Easy Video Uploading via Multer</li>
              <li>❤️ Like, Comment, and Subscribe Features</li>
              <li>📱 Mobile-Optimized UI (Tailwind CSS)</li>
              <li>⚡ Real-time Notifications (React-hot-toast)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-white">Technologies Used</h3>
            <p className="text-lg opacity-90">
              MongoDB, Express, Node.js, Multer, React, Redux, Axios, Tailwind CSS
            </p>
          </div>
        </div>
      </section>

      
    </main>
  );
};

export default Home;
