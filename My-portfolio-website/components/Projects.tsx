'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://example.com',
    image: 'bg-gradient-to-br from-purple-400 to-pink-400',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates and team collaboration features.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
    github: 'https://github.com',
    demo: 'https://example.com',
    image: 'bg-gradient-to-br from-blue-400 to-cyan-400',
  },
  {
    title: 'Weather Dashboard',
    description:
      'A beautiful weather dashboard with location-based forecasts and interactive maps.',
    technologies: ['React', 'Tailwind CSS', 'Weather API'],
    github: 'https://github.com',
    demo: 'https://example.com',
    image: 'bg-gradient-to-br from-yellow-400 to-orange-400',
  },
  {
    title: 'Social Media Analytics',
    description:
      'Analytics platform for tracking social media metrics with data visualization and insights.',
    technologies: ['Vue.js', 'Python', 'D3.js', 'FastAPI'],
    github: 'https://github.com',
    demo: 'https://example.com',
    image: 'bg-gradient-to-br from-green-400 to-emerald-400',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-container bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <div className={`h-48 ${project.image} flex items-center justify-center`}>
              <span className="text-white text-2xl font-bold">{project.title}</span>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <FaGithub />
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

