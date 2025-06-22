'use client'

import { useState } from 'react'
import Image from 'next/image'

const projects = [
  { src: '/images/pokemon1.jpg', hoverSrc: '/images/pokemon2.jpg', title: 'Project 1', description: 'This is the description for project 1.' },
  { src: '/images/pokemon3.jpg', hoverSrc: '/images/pokemon4.jpg', title: 'Project 2', description: 'This is the description for project 2.' },
  { src: '/images/pokemon5.jpg', hoverSrc: '/images/pokemon6.jpg', title: 'Project 3', description: 'This is the description for project 3.' },
  { src: '/images/pokemon7.jpg', hoverSrc: '/images/pokemon8.jpg', title: 'Project 4', description: 'This is the description for project 4.' },
  { src: '/images/pokemon9.jpg', hoverSrc: '/images/pokemon1.jpg', title: 'Project 5', description: 'This is the description for project 5.' },
  { src: '/images/pokemon2.jpg', hoverSrc: '/images/pokemon3.jpg', title: 'Project 6', description: 'This is the description for project 6.' },
  { src: '/images/pokemon4.jpg', hoverSrc: '/images/pokemon5.jpg', title: 'Project 7', description: 'This is the description for project 7.' },
  { src: '/images/pokemon6.jpg', hoverSrc: '/images/pokemon7.jpg', title: 'Project 8', description: 'This is the description for project 8.' },
  { src: '/images/pokemon8.jpg', hoverSrc: '/images/pokemon9.jpg', title: 'Project 9', description: 'This is the description for project 9.' },
]

export default function ProjectGrid() {
  const [showAll, setShowAll] = useState(false)
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null)

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
<section className="max-w-7xl mx-auto px-6 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 bg-gray-950 text-center  rounded-xl transition-all duration-300">
      {/* Heading with gradient text like contact page */}
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        MY PROJECTS
      </h2>
      <p className="text-gray-400 mb-10">Explore my awesome projects</p>

      {/* Filter buttons with new style */}
      <div className="flex justify-center gap-4 mb-10 text-sm font-medium">
        {["ALL", "GRAPHIC", "VIDEOS", "WEBDESIGN", "BRANDING"].map((cat) => (
          <button
            key={cat}
            className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedProjects.map((project, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
            onClick={() => setSelectedProject(project)}
          >
            {/* Default Image */}
            <Image
              src={project.src}
              alt={project.title}
              width={800}
              height={800}
              className="w-full h-80 object-cover transition duration-300 group-hover:opacity-70"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-lg">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-1">Click to view details</p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More button with gradient like contact page */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-12 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
      >
        {showAll ? 'SHOW LESS' : 'LOAD MORE'}
      </button>

      {/* Modal with dark theme */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-xl p-6 max-w-2xl w-full relative border border-gray-800 shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl transition"
            >
              &times;
            </button>
            <Image
              src={selectedProject.src}
              alt={selectedProject.title}
              width={800}
              height={600}
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold text-white mb-3">{selectedProject.title}</h3>
            <p className="text-gray-300">{selectedProject.description}</p>
            <div className="mt-6 flex justify-end">
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white hover:opacity-90 transition">
                View Project
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}