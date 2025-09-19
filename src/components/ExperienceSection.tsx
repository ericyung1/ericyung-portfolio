import Image from 'next/image'

export default function ExperienceSection() {
  // Real work experience data - most recent first
  const experiences = [
    {
      id: 1,
      company: 'True Manufacturing',
      position: 'Software Developer Co-op',
      location: "O'Fallon, MO",
      duration: 'January 2024 - June 2024',
      type: 'Co-op',
      logo: '/images/companies/true-manufacturing-logo.png',
      description: 'Supported internal IT operations on the Blues Team, collaborated with business analysts to build SSRS dashboards, assisted warehouse teams with technology solutions, etc.',
      achievements: [
        '[PLACEHOLDER ACHIEVEMENT 1] - Quantified impact or key accomplishment',
        '[PLACEHOLDER ACHIEVEMENT 2] - Another significant contribution',
        '[PLACEHOLDER ACHIEVEMENT 3] - Third major achievement or responsibility'
      ],
      technologies: ['C#', 'JavaScript', 'ASP.NET', 'EF Core']
    },
    {
      id: 2,
      company: 'Equifax',
      position: 'Backend Engineer Intern',
      location: 'St. Louis, MO',
      duration: 'May 2023 - August 2023',
      type: 'Internship',
      logo: '/images/companies/equifax-logo.png',
      description: 'Worked in the Equifax Workforce Solutions team, developing backend microservices to integrate payroll provider data and streamline employment verification workflows.',
      achievements: [
        '[PLACEHOLDER ACHIEVEMENT 1] - Quantified impact or key accomplishment',
        '[PLACEHOLDER ACHIEVEMENT 2] - Another significant contribution',
        '[PLACEHOLDER ACHIEVEMENT 3] - Third major achievement or responsibility'
      ],
      technologies: ['Java', 'Spring Boot', 'GCP', 'Jenkins']
    },
    {
      id: 3,
      company: 'BJC Healthcare',
      position: 'Software Engineer Intern',
      location: 'St. Louis, MO',
      duration: 'April 2022 - November 2022',
      type: 'Internship',
      logo: '/images/companies/bjc-logo.png',
      description: 'At the peak of the COVID pandemic, I worked in BJC Healthcare\'s IT department improving the booster shot scheduler, supporting employee pharmacy tools, handling SQL data requests, etc.',
      achievements: [
        '[PLACEHOLDER ACHIEVEMENT 1] - Quantified impact or key accomplishment',
        '[PLACEHOLDER ACHIEVEMENT 2] - Another significant contribution'
      ],
      technologies: ['Java', 'Apache Maven', 'SQL', 'Epic EHR']
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
                  <div className="mb-6">
                    {/* Top Row: Position and Company Logo */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl lg:text-2xl font-bold text-teal-secondary mb-2">{exp.position}</h3>
                        <h4 className="text-lg lg:text-xl font-semibold mb-2">{exp.company}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm lg:text-base opacity-75">
                          <span className="font-medium">{exp.duration}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      {/* Company Logo - Top Right */}
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0 bg-white bg-opacity-10 rounded-xl p-3 backdrop-blur-sm">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} Logo`}
                          fill
                          className="object-contain p-1"
                          sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
                        />
                      </div>
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
