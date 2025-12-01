'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="section-container bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Get In Touch
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Let's work together!
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out
              to me.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary-100 rounded-lg">
                <FaEnvelope className="text-primary-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <a
                  href="mailto:your.email@example.com"
                  className="text-primary-600 hover:underline"
                >
                  vasanthamukilan75@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary-100 rounded-lg">
                <FaPhone className="text-primary-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <a
                  href="tel:+1234567890"
                  className="text-primary-600 hover:underline"
                >
                  +91 6383869053
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary-100 rounded-lg">
                <FaMapMarkerAlt className="text-primary-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Thirumazhisai</p>
                <p className="text-gray-600">Chennai,India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}

