'use client'

import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6';

export default function Hero() {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Vasanthamukilan', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/vasanthamukilan-m-11644b279/', label: 'LinkedIn' },
    { icon: FaXTwitter, href: 'https://x.com/VasanthaMukila1', label: 'X (Twitter)' },
    { icon: FaEnvelope, href: 'vasanthamukilan75@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Hi, I'm{' '}
            <span className="text-primary-600">Vasanthamukilan M</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Full Stack Developer & Creative Problem Solver
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-gray-500 mb-12 max-w-xl mx-auto"
          >
            I build beautiful, functional web applications with modern technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </motion.div>

          <motion.a
            href="#about"
            className="inline-block text-primary-600 hover:text-primary-700 transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <HiArrowDown size={32} className="mx-auto" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

