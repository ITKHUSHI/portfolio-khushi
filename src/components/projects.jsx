import React, { useState } from 'react'
import { motion } from 'framer-motion'
import projects from '../data/project.data'
import { Link } from 'react-router-dom'
import { FaProjectDiagram ,FaEye } from 'react-icons/fa'

const Projects = () => {
  const [open, setOpen] = useState(null)

  const handleOpen = (id) => setOpen(id)
  const handleClose = () => setOpen(null)

  const selectedProject = projects.find(x => String(x.id) === String(open))

  return (
    <section id="projects" className="px-6 py-12 bg-gray-950 text-white min-h-screen">
      <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>

      <ul className="space-y-4 max-w-md mx-auto">
        {projects.map((p) => (
          <motion.li
            key={p.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className=" rounded-lg p-4 shadow-md flex items-center justify-between"
          >
            <span className="font-semibold m-2 flex gap-2 items-center justify-center">
              <FaProjectDiagram/>{p.title}</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleOpen(p.id)}
                className="px-3 py-1 rounded-md  text-sm text-blue-500 font-semibold flex  items-center justify-center gap-2"
              >
               <FaEye/> View
              </button>
              <Link
                to={p.repo}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-bold text-blue-500 underline"
              >
               {"</>"} Code
              </Link>
            </div>
          </motion.li>
        ))}
      </ul>

      {selectedProject && <ProjectPopup project={selectedProject} handleClose={handleClose} />}
    </section>
  )
}

function ProjectPopup({ project, handleClose }) {
  console.log(project)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      {/* Dark overlay */}
      <div className="absolute inset-0  backdrop-blur-sm" onClick={handleClose} />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="relative w-[90%] md:w-[75%] lg:w-[60%]  rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-sm font-bold">
              {project.title[0]}
            </div>
            <div>
              <h3 className="font-semibold text-lg ">{project.title}</h3>
              <p className="text-xs text-gray-400">{project.technologies}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={project?.webSite}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-violet-500 text-black rounded-md text-sm font-semibold"
            >
              Live
            </Link>
            <button
              onClick={handleClose}
              className="px-3 py-1  rounded-md text-sm hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>

        {/* Preview Section */}
        <div className="h-[70vh]  flex items-center justify-center bg-black/50">
          {project.webSite ? (
            <iframe
              src={project?.webSite }
              title={project.title}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          ) : (
            <p className="text-gray-400 text-sm p-6">
              Live preview unavailable. Click “Live” above to open in a new tab.
            </p>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default Projects

