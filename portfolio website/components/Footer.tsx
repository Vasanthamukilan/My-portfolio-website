'use client'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6';


export default function Footer() {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Vasanthamukilan', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/vasanthamukilan-m-11644b279/', label: 'LinkedIn' },
    { icon: FaXTwitter, href: 'https://x.com/VasanthaMukila1', label: 'X (Twitter)' },  
    { icon: FaEnvelope, href: 'vasanthamukilan75@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {currentYear} Vasanthamukilan. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

