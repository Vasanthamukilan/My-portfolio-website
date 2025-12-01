'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="section-container bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        About Me
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
            <span className="text-white text-6xl font-bold">Your Photo</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm a passionate full-stack developer with a love for creating
            beautiful and functional web applications. With expertise in modern
            JavaScript frameworks and a keen eye for design, I bring ideas to
            life through code.
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the
            developer community.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-primary-50 rounded-lg">
              <h3 className="font-semibold text-primary-900 mb-2">Experience</h3>
              <p className="text-gray-600">3+ Years</p>
            </div>
            <div className="p-4 bg-primary-50 rounded-lg">
              <h3 className="font-semibold text-primary-900 mb-2">Projects</h3>
              <p className="text-gray-600">50+ Completed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

