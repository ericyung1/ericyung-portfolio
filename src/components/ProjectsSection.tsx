'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa'

interface ProjectProps {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  featured: boolean
}

const ProjectCard: React.FC<{ project: ProjectProps }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`relative group bg-white bg-opacity-10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
        project.featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue via-transparent to-transparent z-10 opacity-60"></div>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 bg-teal-secondary text-dark-blue text-xs font-bold rounded-full">
              Featured
            </span>
          </div>
        )}

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-dark-blue bg-opacity-80 flex items-center justify-center z-20 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex space-x-4">
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-dark-blue rounded-full hover:bg-teal-secondary transition-colors duration-300"
              aria-label={`View ${project.title} on GitHub`}
            >
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-dark-blue rounded-full hover:bg-teal-secondary transition-colors duration-300"
              aria-label={`View ${project.title} live demo`}
            >
              <FaExternalLinkAlt className="w-5 h-5" />
            </Link>
            <button
              className="p-3 bg-white text-dark-blue rounded-full hover:bg-teal-secondary transition-colors duration-300"
              aria-label={`View ${project.title} details`}
            >
              <FaEye className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-teal-secondary transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-sm lg:text-base text-white opacity-90 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-teal-secondary text-dark-blue text-xs font-medium rounded-full hover:bg-white transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex items-center justify-between pt-4 border-t border-white border-opacity-20">
          <div className="flex space-x-3">
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-secondary transition-colors duration-300"
              aria-label={`View ${project.title} on GitHub`}
            >
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-secondary transition-colors duration-300"
              aria-label={`View ${project.title} live demo`}
            >
              <FaExternalLinkAlt className="w-5 h-5" />
            </Link>
          </div>
          
          <button className="text-sm text-teal-secondary hover:text-white transition-colors duration-300 font-medium">
            View Details →
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  // Placeholder projects data - clearly marked for easy replacement
  const projects: ProjectProps[] = [
    {
      id: 1,
      title: '[PLACEHOLDER] E-Commerce Platform',
      description: '[PLACEHOLDER] A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern technologies for optimal performance.',
      longDescription: '[PLACEHOLDER] Comprehensive e-commerce platform featuring user registration, product catalog, shopping cart, secure payments via Stripe, order management, and admin panel.',
      image: '/dragon.png', // Using existing asset as placeholder
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT', 'Tailwind'],
      githubUrl: 'https://github.com/ericyung1',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: '[PLACEHOLDER] Task Management App',
      description: '[PLACEHOLDER] Collaborative task management application with real-time updates, team workspaces, and project tracking capabilities.',
      longDescription: '[PLACEHOLDER] Full-featured task management system with drag-and-drop boards, real-time collaboration, file attachments, and team analytics.',
      image: '/castle_background.png', // Using existing asset as placeholder
      technologies: ['Next.js', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Prisma'],
      githubUrl: 'https://github.com/ericyung1',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      id: 3,
      title: '[PLACEHOLDER] Weather Dashboard',
      description: '[PLACEHOLDER] Interactive weather dashboard with location-based forecasts, historical data visualization, and customizable widgets.',
      longDescription: '[PLACEHOLDER] Comprehensive weather application with 7-day forecasts, interactive maps, weather alerts, and data visualization charts.',
      image: '/mountain_foreground.png', // Using existing asset as placeholder
      technologies: ['React', 'Chart.js', 'Weather API', 'CSS3', 'LocalStorage'],
      githubUrl: 'https://github.com/ericyung1',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      id: 4,
      title: '[PLACEHOLDER] Portfolio Website',
      description: '[PLACEHOLDER] Modern, responsive portfolio website with parallax effects, smooth animations, and optimized performance.',
      longDescription: '[PLACEHOLDER] Personal portfolio featuring parallax scrolling, mobile-first design, and modern web technologies.',
      image: '/stars.png', // Using existing asset as placeholder
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vercel'],
      githubUrl: 'https://github.com/ericyung1',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      id: 5,
      title: '[PLACEHOLDER] Social Media Dashboard',
      description: '[PLACEHOLDER] Analytics dashboard for social media management with post scheduling, engagement tracking, and performance insights.',
      longDescription: '[PLACEHOLDER] Comprehensive social media management tool with content calendar, analytics, and multi-platform posting.',
      image: '/self_portrait.jpg', // Using existing asset as placeholder
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Social APIs', 'Chart.js'],
      githubUrl: 'https://github.com/ericyung1',
      liveUrl: 'https://example.com',
      featured: true
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const regularProjects = projects.filter(project => !project.featured)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Featured Projects
            </h3>
            <div className="w-16 h-1 bg-teal-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* Regular Projects */}
      {regularProjects.length > 0 && (
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Other Projects
            </h3>
            <div className="w-16 h-1 bg-teal-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to see more?
          </h3>
          <p className="text-white opacity-90 mb-6 max-w-2xl mx-auto">
            [PLACEHOLDER] Check out my GitHub for more projects and contributions to open source.
          </p>
          <Link
            href="https://github.com/ericyung1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-teal-secondary text-dark-blue font-medium rounded-full hover:bg-white transition-all duration-300 hover:scale-105"
          >
            <FaGithub className="w-5 h-5" />
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
