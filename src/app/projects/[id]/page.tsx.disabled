import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaClock, FaTag } from 'react-icons/fa'
import { getProjectById, projects } from '@/lib/data/projects'

interface ProjectDetailPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const project = getProjectById(parseInt(params.id))
  
  if (!project) {
    return {
      title: 'Project Not Found - Eric Yung',
    }
  }

  return {
    title: `${project.title} - Eric Yung`,
    description: project.description,
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectById(parseInt(params.id))

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-blue via-teal-primary to-teal-secondary">
      {/* Header with back navigation */}
      <div className="bg-dark-blue/90 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-6 py-6">
          <Link 
            href="/#projects"
            className="inline-flex items-center gap-2 text-white hover:text-teal-secondary transition-colors duration-300 mb-4"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {project.title}
              </h1>
              <p className="text-teal-secondary text-lg">
                {project.category}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-dark-blue font-medium rounded-full hover:bg-teal-secondary transition-all duration-300 hover:scale-105"
              >
                <FaGithub className="w-5 h-5" />
                View Code
              </Link>
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-dark-blue transition-all duration-300 hover:scale-105"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
                Live Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Hero image */}
        <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-2xl mb-12">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/60 via-transparent to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Project overview */}
            <section className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Project Overview
              </h2>
              <div className="space-y-4">
                {project.detailedDescription.map((paragraph, index) => (
                  <p key={index} className="text-white/90 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Key features */}
            <section className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                    <div className="w-2 h-2 bg-teal-secondary rounded-full flex-shrink-0" />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges & solutions */}
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                    Challenges
                  </h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-white/90">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                    Solutions
                  </h3>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-white/90">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Additional images */}
            {project.images.length > 1 && (
              <section className="mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                  Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.slice(1).map((image, index) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${index + 2}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Project info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Project Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaClock className="w-4 h-4 text-teal-secondary" />
                    <span className="text-white/90">Duration: {project.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaTag className="w-4 h-4 text-teal-secondary" />
                    <span className="text-white/90">Category: {project.category}</span>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-teal-secondary text-dark-blue text-sm font-medium rounded-full hover:bg-white transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Links</h3>
                <div className="space-y-3">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-teal-secondary transition-colors duration-300"
                  >
                    <FaGithub className="w-5 h-5" />
                    View Source Code
                  </Link>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-teal-secondary transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to projects */}
        <div className="text-center mt-16">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-dark-blue font-medium rounded-full hover:bg-teal-secondary transition-all duration-300 hover:scale-105"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
