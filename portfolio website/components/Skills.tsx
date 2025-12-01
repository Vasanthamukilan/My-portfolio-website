'use client'

import { motion } from 'framer-motion'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si'

const skills = [
  { name: 'React', icon: FaReact, color: 'text-blue-500' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
  { name: 'Python', icon: FaPython, color: 'text-blue-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
  { name: 'AWS', icon: FaAws, color: 'text-orange-500' },
]

export default function Skills() {
  return (
    <section id="skills" className="section-container bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Skills & Technologies
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <skill.icon className={`${skill.color} text-4xl mb-3`} />
            <span className="text-sm font-medium text-gray-700 text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

