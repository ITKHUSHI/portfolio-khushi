import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Projects from '../components/projects'
import Skills from '../components/skills'
import Contact from '../components/contact'
import Certificates from '../components/certificates'
import { FaProjectDiagram, FaCode, FaUser, FaCertificate, FaEnvelope  , FaGithub , FaLinkedin} from 'react-icons/fa';
import { Link } from 'react-router-dom'
function Home() {
  const [activePopup, setActivePopup] = useState(null)

  const openPopup = (name) => setActivePopup(name)
  const closePopup = () => setActivePopup(null)

  return (
    <div className="min-h-screen bg-gray-950 justify-center items-center text-white flex flex-row">
      {/* Left Sidebar Buttons */}
     
      <aside className="w-[30vw] flex flex-col gap-6 justify-center items-center md:min-h-screen">
  <div className="flex flex-col gap-6 items-center">
    <div
      className="flex flex-col items-center cursor-pointer group"
      onClick={() => openPopup('projects')}
    >
      <FaProjectDiagram className="text-cyan-500 w-10 h-10 group-hover:scale-110 transition-transform" />
      <span className="mt-1 text-sm text-gray-300 opacity-90 group-hover:opacity-100 transition-opacity">Projects</span>
    </div>

    <div
      className="flex flex-col items-center cursor-pointer group"
      onClick={() => openPopup('skills')}
    >
      <FaCode className="text-violet-500 w-10 h-10 group-hover:scale-110 transition-transform" />
      <span className="mt-1 text-sm text-gray-300 opacity-90 group-hover:opacity-100 transition-opacity">Skills</span>
    </div>

    <div
      className="flex flex-col items-center cursor-pointer group"
      onClick={() => openPopup('about')}
    >
      <FaUser className="text-pink-500 w-10 h-10 group-hover:scale-110 transition-transform" />
      <span className="mt-1 text-sm text-gray-300 opacity-90 group-hover:opacity-100 transition-opacity">About Me</span>
    </div>

    <div
      className="flex flex-col items-center cursor-pointer group"
      onClick={() => openPopup('certificates')}
    >
      <FaCertificate className="text-yellow-400 w-10 h-10 group-hover:scale-110 transition-transform" />
      <span className="mt-1 text-sm text-gray-300 opacity-90 group-hover:opacity-100 transition-opacity">Certificates</span>
    </div>

    <div
      className="flex flex-col items-center cursor-pointer group"
      onClick={() => openPopup('contact')}
    >
      <FaEnvelope className="text-green-400 w-10 h-10 group-hover:scale-110 transition-transform" />
      <span className="mt-1 text-sm text-gray-300 opacity-90 group-hover:opacity-100 transition-opacity">Contact</span>
    </div>
  </div>
</aside>
      {/* Main Content / Hero */}
      <main className=" flex flex-col  justify-center items-center text-center px-6 py-12 flex-grow">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Hi, I’m{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300">
            Khushi Rathore
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-gray-300 text-lg md:text-xl"
        >
           Build Impactful Applications Like <strong> Teamlify & SmartCemAi </strong>, Combining Performance, AI Integration, And Intuitive User Experiences For Real-World Solutions.
         </motion.p>

         
      </main>
      {/* Popups */}
      <AnimatePresence>
        {activePopup === 'projects' && (
          <PopupContainer handleClose={closePopup}>
            <Projects />
          </PopupContainer>
        )}
        {activePopup === 'skills' && (
          <PopupContainer handleClose={closePopup}>
            <Skills />
          </PopupContainer>
        )}
        {activePopup === 'about' && (
          <PopupContainer handleClose={closePopup}>
            <About />
          </PopupContainer>
        )}
        {activePopup === 'certificates' && (
          <PopupContainer handleClose={closePopup}>
            <Certificates />
          </PopupContainer>
        )}
        {activePopup === 'contact' && (
          <PopupContainer handleClose={closePopup}>
            <Contact />
          </PopupContainer>
        )}
      </AnimatePresence>

     
    </div>
  )
}

export default Home

// ---------------- Popup Container ----------------
const PopupContainer = ({ children, handleClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative  rounded-2xl shadow-2xl border border-gray-800  max-w-4xl max-h-[60vh] overflow-hidden"
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 px-3 py-1  rounded-md text-sm hover:bg-gray-700 z-10"
        >
          Close
        </button>

        <div className="p-6">{children}</div>
      </motion.div>
    </motion.div>
  )
}

function About() {
  return (
     <div className="flex flex-col md:flex-row justify-center items-center ">
      <motion.div
        className=""
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300 text-lg mb-4">
          Hi, I’m <strong>Khushi </strong>, a software developer specializing in  I build scalable and efficient web applications  
          
            with modern, responsive designs and clear, user-friendly interfaces. I have worked on projects like <strong> Teamlify,  SaaS platform, and SmartCemAi, </strong> a Generative AI-powered cement plant optimization tool. I enjoy creating solutions that solve real-world problems and make workflows smoother.
        </p>
        <div className="flex gap-4 mt-2">
          <Link
            to="https://github.com/ITKHUSHI" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
          >
            <FaGithub /> GitHub
          </Link>
          <Link
            to="https://www.linkedin.com/in/khushee0225/" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 px-3 py-2 bg-blue-700 rounded-lg hover:bg-blue-600 transition text-white"
          >
            <FaLinkedin /> LinkedIn
          </Link>
        </div>
      </motion.div>

     
    </div>

  )
}
