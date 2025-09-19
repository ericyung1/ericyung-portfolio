export default function SkillsSection() {
  // Placeholder skills data - clearly marked for easy replacement
  const skillCategories = [
    {
      id: 1,
      category: 'Languages',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: [
        { name: 'JavaScript', level: 'Expert', years: '4+' },
        { name: 'TypeScript', level: 'Advanced', years: '3+' },
        { name: 'Python', level: 'Advanced', years: '3+' },
        { name: 'Java', level: 'Advanced', years: '3+' },
        { name: 'HTML/CSS', level: 'Expert', years: '5+' },
        { name: 'SQL', level: 'Intermediate', years: '2+' }
      ]
    },
    {
      id: 2,
      category: 'Frameworks & Libraries',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      skills: [
        { name: 'React', level: 'Expert', years: '3+' },
        { name: 'Next.js', level: 'Advanced', years: '2+' },
        { name: 'Node.js', level: 'Advanced', years: '3+' },
        { name: 'Express.js', level: 'Intermediate', years: '2+' },
        { name: 'Django', level: 'Intermediate', years: '1+' },
        { name: 'Tailwind CSS', level: 'Advanced', years: '2+' }
      ]
    },
    {
      id: 3,
      category: 'Tools & Technologies',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: [
        { name: 'Git/GitHub', level: 'Advanced', years: '4+' },
        { name: 'AWS', level: 'Intermediate', years: '2+' },
        { name: 'Docker', level: 'Intermediate', years: '1+' },
        { name: 'MongoDB', level: 'Intermediate', years: '2+' },
        { name: 'PostgreSQL', level: 'Intermediate', years: '2+' },
        { name: 'Figma', level: 'Intermediate', years: '2+' }
      ]
    }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-500 text-green-100'
      case 'Advanced':
        return 'bg-blue-500 text-blue-100'
      case 'Intermediate':
        return 'bg-yellow-500 text-yellow-100'
      default:
        return 'bg-gray-500 text-gray-100'
    }
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      {/* Skills Grid - Mobile-first responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        {skillCategories.map((category) => (
          <div key={category.id} className="bg-dark-blue bg-opacity-30 backdrop-blur-sm rounded-xl p-6 lg:p-8 hover:bg-opacity-40 transition-all duration-300 shadow-lg hover:shadow-xl border border-white border-opacity-10 h-full flex flex-col">
            
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-teal-secondary bg-opacity-20 rounded-lg text-teal-secondary">
                {category.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-dark-blue">
                {category.category}
              </h3>
            </div>

            {/* Skills List */}
            <div className="space-y-4 flex-grow">
              {category.skills.map((skill, index) => (
                <div key={index} className="group">
                  {/* Skill Name and Level */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm lg:text-base font-medium text-dark-blue group-hover:text-opacity-80 transition-colors">
                      {skill.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                      <span className="text-xs text-dark-blue opacity-60">
                        {skill.years}
                      </span>
                    </div>
                  </div>

                  {/* Skill Progress Bar */}
                  <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        skill.level === 'Expert' ? 'bg-green-400 w-full' :
                        skill.level === 'Advanced' ? 'bg-blue-400 w-4/5' :
                        skill.level === 'Intermediate' ? 'bg-yellow-400 w-3/5' :
                        'bg-gray-400 w-2/5'
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Category Footer */}
            <div className="mt-6 pt-4 border-t border-white border-opacity-10">
              <div className="text-center">
                <span className="text-sm text-dark-blue opacity-75">
                  {category.skills.length} skills in this category
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Skills Summary - COMMENTED OUT FOR NOW */}
      {/* 
      <div className="mt-12 lg:mt-16">
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 lg:p-8 text-center">
          <h3 className="text-xl lg:text-2xl font-bold text-dark-blue mb-4">
            Continuous Learning
          </h3>
          <p className="text-sm lg:text-base text-dark-blue opacity-90 mb-6 max-w-3xl mx-auto">
            [PLACEHOLDER] I&apos;m always exploring new technologies and expanding my skill set. 
            Currently learning and experimenting with emerging tools and frameworks to stay at the forefront of development.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['[PLACEHOLDER] GraphQL', '[PLACEHOLDER] Rust', '[PLACEHOLDER] Kubernetes', '[PLACEHOLDER] Machine Learning'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-dark-blue bg-opacity-30 text-dark-blue text-sm font-medium rounded-full border border-dark-blue border-opacity-20 hover:bg-opacity-40 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      */}
    </div>
  )
}
