import Link from 'next/link'
import { FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa'

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-blue via-teal-primary to-teal-secondary flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <FaExclamationTriangle className="w-16 h-16 text-teal-secondary mx-auto mb-4" />
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Sorry, the project you&apos;re looking for doesn&apos;t exist or may have been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-dark-blue font-medium rounded-full hover:bg-teal-secondary transition-all duration-300 hover:scale-105"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-dark-blue transition-all duration-300 hover:scale-105"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
