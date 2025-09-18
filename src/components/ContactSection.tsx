'use client'

import Link from 'next/link'
import { FaEnvelope, FaGithub, FaLinkedin, FaDownload, FaMapMarkerAlt } from 'react-icons/fa'

export default function ContactSection() {
  const contactMethods = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'eyung@wustl.edu',
      href: 'mailto:eyung@wustl.edu',
      primary: true
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'St. Louis, MO',
      href: '#',
      primary: false
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      href: 'https://github.com/ericyung1',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      href: 'https://www.linkedin.com/in/eyung/',
      color: 'hover:text-blue-400'
    }
  ]

  return (
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Left Column - Contact Info & Message */}
        <div className="space-y-8">
          
          {/* Contact Message */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Let&apos;s Work Together
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              I&apos;m currently looking for full-time software engineering roles. If you&apos;re hiring or just want to connect, I&apos;d be glad to hear from you.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Get In Touch</h4>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className={`text-2xl ${method.primary ? 'text-teal-secondary' : 'text-white/70'} group-hover:text-teal-secondary transition-colors duration-300`}>
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-sm text-white/60 uppercase tracking-wide">
                      {method.label}
                    </p>
                    {method.href !== '#' ? (
                      <Link 
                        href={method.href}
                        className="text-white hover:text-teal-secondary transition-colors duration-300 font-medium"
                      >
                        {method.value}
                      </Link>
                    ) : (
                      <span className="text-white/90">{method.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Connect With Me</h4>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center lg:items-start lg:justify-start justify-center">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white hover:text-teal-secondary transition-colors duration-300 text-lg sm:text-xl group"
                  aria-label={social.name}
                >
                  <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
                  <span>{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Contact Actions */}
        <div className="space-y-8">
          
          {/* Email Contact */}
          <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="text-5xl text-teal-secondary mb-6">
              <FaEnvelope className="mx-auto" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-8">
              Let&apos;s Connect
            </h4>
            <a
              href="mailto:eyung@wustl.edu"
              className="inline-flex items-center gap-3 px-8 py-4 bg-teal-secondary text-dark-blue font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg text-lg"
            >
              <FaEnvelope />
              Send Email
            </a>
          </div>

          {/* Resume Download */}
          <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-4xl text-white/70 mb-4">
              <FaDownload className="mx-auto" />
            </div>
            <h4 className="text-xl font-bold text-white mb-6">
              Download My Resume
            </h4>
            <a
              href="/eric-yung-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-dark-blue hover:scale-105 transition-all duration-300"
            >
              <FaDownload />
              Download PDF
            </a>
          </div>

          {/* Contact Form Structure - COMMENTED OUT FOR FUTURE */}
          {/* 
          <div className="p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h4 className="text-xl font-bold text-white mb-6">Send a Message</h4>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-secondary"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-secondary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-secondary resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-teal-secondary text-dark-blue font-bold rounded-lg hover:bg-white transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          */}
        </div>
      </div>
    </div>
  )
}
