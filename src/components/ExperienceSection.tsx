export default function ExperienceSection() {
  // Placeholder experience data - clearly marked for easy replacement
  const experiences = [
    {
      id: 1,
      company: '[PLACEHOLDER COMPANY 1]',
      position: '[PLACEHOLDER POSITION 1]',
      location: '[CITY, STATE]',
      duration: '[START DATE] - [END DATE]',
      type: 'Full-time', // Full-time, Part-time, Internship, Contract
      description: '[PLACEHOLDER DESCRIPTION] Brief description of your role and key responsibilities at this position.',
      achievements: [
        '[PLACEHOLDER ACHIEVEMENT 1] - Quantified impact or key accomplishment',
        '[PLACEHOLDER ACHIEVEMENT 2] - Another significant contribution',
        '[PLACEHOLDER ACHIEVEMENT 3] - Third major achievement or responsibility'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS'] // Example tech stack
    },
    {
      id: 2,
      company: '[PLACEHOLDER COMPANY 2]',
      position: '[PLACEHOLDER POSITION 2]',
      location: '[CITY, STATE]',
      duration: '[START DATE] - [END DATE]',
      type: 'Internship',
      description: '[PLACEHOLDER DESCRIPTION] Brief description of your role and key responsibilities at this position.',
      achievements: [
        '[PLACEHOLDER ACHIEVEMENT 1] - Quantified impact or key accomplishment',
        '[PLACEHOLDER ACHIEVEMENT 2] - Another significant contribution',
        '[PLACEHOLDER ACHIEVEMENT 3] - Third major achievement or responsibility'
      ],
      technologies: ['Python', 'Django', 'PostgreSQL', 'Docker']
    },
    {
      id: 3,
      company: '[PLACEHOLDER COMPANY 3]',
      position: '[PLACEHOLDER POSITION 3]',
      location: '[CITY, STATE]',
      duration: '[START DATE] - [END DATE]',
      type: 'Part-time',
      description: '[PLACEHOLDER DESCRIPTION] Brief description of your role and key responsibilities at this position.',
      achievements: [
        '[PLACEHOLDER ACHIEVEMENT 1] - Quantified impact or key accomplishment',
        '[PLACEHOLDER ACHIEVEMENT 2] - Another significant contribution'
      ],
      technologies: ['JavaScript', 'Vue.js', 'Firebase', 'Git']
    }
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      {/* Timeline Layout - Mobile-first responsive */}
      <div className="relative">
        {/* Timeline line - hidden on mobile, visible on desktop */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-teal-secondary to-transparent"></div>
        
        <div className="space-y-8 lg:space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center lg:items-start gap-6 lg:gap-8`}>
              
              {/* Timeline dot - centered on desktop, left-aligned on mobile */}
              <div className={`hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-secondary rounded-full border-4 border-dark-blue shadow-lg z-10`}></div>
              
              {/* Experience Card */}
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 lg:p-8 hover:bg-opacity-15 transition-all duration-300 shadow-lg hover:shadow-xl">
                  
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-xl lg:text-2xl font-bold text-teal-secondary">{exp.position}</h3>
                      <span className="text-sm px-3 py-1 bg-teal-primary bg-opacity-30 rounded-full text-teal-secondary font-medium">
                        {exp.type}
                      </span>
                    </div>
                    <h4 className="text-lg lg:text-xl font-semibold mb-1">{exp.company}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm lg:text-base opacity-75">
                      <span>{exp.duration}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm lg:text-base leading-relaxed mb-4 opacity-90">
                    {exp.description}
                  </p>

                  {/* Achievements - Commented out for cleaner layout */}
                  {/* 
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold mb-3 text-teal-secondary">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2 text-sm lg:text-base">
                          <span className="text-teal-secondary mt-1.5 flex-shrink-0">•</span>
                          <span className="leading-relaxed opacity-90">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  */}

                  {/* Technologies */}
                  <div>
                    <h5 className="text-sm font-semibold mb-3 text-teal-secondary">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-dark-blue bg-opacity-50 text-white text-xs lg:text-sm rounded-full border border-teal-secondary border-opacity-30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer for timeline balance on desktop */}
              <div className="hidden lg:block w-5/12"></div>
            </div>
          ))}
        </div>

        {/* Call-to-action for more experience - Commented out */}
        {/*
        <div className="mt-12 lg:mt-16 text-center">
          <a 
            href="/eric-yung-resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full hover:bg-opacity-15 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <svg className="w-5 h-5 text-teal-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-sm lg:text-base font-medium">View Full Resume</span>
          </a>
        </div>
        */}
      </div>
    </div>
  )
}
