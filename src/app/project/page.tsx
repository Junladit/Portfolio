'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: "E-commerce Website",
    description: "เว็บขายของออนไลน์แบบเต็มรูปแบบด้วย Next.js และ Stripe",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Prisma"],
    image: "/images/pokemon1.jpg",
    github: "#",
    live: "#"
  },
  {
    title: "Task Management App",
    description: "แอปจัดการงานแบบเรียลไทม์ด้วย React และ Firebase",
    tags: ["React", "Firebase", "Material UI"],
    image: "/images/pokemon2.jpg",
    github: "#",
    live: "#"
  },
  {
    title: "Portfolio Website",
    description: "เว็บพอร์ตโฟลิโอแบบโมเดิร์นด้วย Next.js และ Framer Motion",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "/images/pokemon3.jpg",
    github: "#",
    live: "#"
  },
  {
    title: "Portfolio Website",
    description: "เว็บพอร์ตโฟลิโอแบบโมเดิร์นด้วย Next.js และ Framer Motion",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "/images/pokemon4.jpg",
    github: "#",
    live: "#"
  },
  {
    title: "Weather Dashboard",
    description: "แดชบอร์ดแสดงข้อมูลอากาศแบบเรียลไทม์",
    tags: ["React", "OpenWeather API", "Chart.js"],
    image: "/images/pokemon5.jpg",
    github: "#",
    live: "#"
  }
]

export default function ProjectGrid() {
  const router = useRouter()

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            โปรเจ็กต์ของฉัน
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            ผลงานที่ผมได้พัฒนาขึ้นด้วยเทคโนโลยีสมัยใหม่และความคิดสร้างสรรค์
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition"
                        aria-label="GitHub"
                      >
                        <FiGithub size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-400 transition"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-blue-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => router.push('/')}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-blue-500/20"
          >
            ← กลับหน้าหลัก
          </button>
        </motion.div>
      </div>
    </section>
  )
}
