import Header from '@/components/Header'
import ParallaxHero from '@/components/ParallaxHero'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <>
      {/* Navigation Header */}
      <Header />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
      
      <main className="min-h-screen">
        {/* Parallax Hero Section */}
        <ParallaxHero />
        
        {/* About Section - Placeholder for Phase 4 */}
        <section id="about" className="min-h-screen bg-gradient-to-b from-dark-blue via-dark-blue to-gradient-1 text-white flex items-center justify-center px-6 relative">
          {/* Top Gradient Overlay for seamless hero transition */}
          <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-transparent via-dark-blue/60 to-dark-blue z-10 pointer-events-none" />
          <div className="text-center max-w-4xl relative z-20">
            <h2 className="text-5xl font-bold mb-6">About Me</h2>
            <p className="text-xl leading-relaxed mb-8">
              Welcome to my portfolio! This is a placeholder section that will be filled with content in Phase 4.
              The parallax hero above showcases the preserved fantasy imagery from your original site with smooth scroll effects.
            </p>
            <div className="text-sm opacity-75 space-y-1">
              <p>✅ Phase 1: Project Setup Complete</p>
              <p>✅ Phase 2: Parallax Hero Complete</p>
              <p>✅ Phase 3: Navigation & Sections Complete</p>
              <p>🚧 Phase 4: About Section (Coming Next)</p>
            </div>
          </div>
        </section>

        {/* Experience Section - Placeholder for Phase 5 */}
        <section id="experience" className="min-h-screen bg-gradient-to-b from-gradient-1 via-teal-primary to-gradient-2 text-white flex items-center justify-center px-6 relative">
          <div className="text-center max-w-4xl">
            <h2 className="text-5xl font-bold mb-6">Experience</h2>
            <p className="text-xl leading-relaxed mb-8">
              This section will showcase your work experience with timeline or card layouts in Phase 5.
            </p>
            <div className="space-y-6 mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2">Position {i}</h3>
                  <p className="text-teal-secondary mb-2">Company Name • 2023 - Present</p>
                  <p className="text-sm opacity-75">Placeholder experience description with impact bullets</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section - Placeholder for Phase 6 */}
        <section id="skills" className="min-h-screen bg-gradient-to-b from-gradient-2 via-teal-secondary to-gradient-3 text-white flex items-center justify-center px-6 relative">
          <div className="text-center max-w-6xl">
            <h2 className="text-5xl font-bold mb-6 text-dark-blue">Skills</h2>
            <p className="text-xl leading-relaxed mb-8 text-dark-blue">
              This section will display your technical skills organized by categories in Phase 6.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {['Languages', 'Frameworks', 'Tools'].map((category) => (
                <div key={category} className="bg-dark-blue bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-dark-blue">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <span key={i} className="px-3 py-1 bg-dark-blue text-white text-sm rounded-full">
                        Skill {i}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section - Placeholder for Phase 7 */}
        <section id="projects" className="min-h-screen bg-gradient-to-b from-gradient-3 to-dark-blue text-white flex items-center justify-center px-6 relative"
                 style={{background: 'linear-gradient(to bottom, #a5e8df 0%, #6db8c5 30%, #124757 70%, #124757 100%)'}}>
          <div className="text-center max-w-6xl">
            <h2 className="text-5xl font-bold mb-6">Projects</h2>
            <p className="text-xl leading-relaxed mb-8">
              This section will showcase your portfolio projects with interactive cards, 
              tech tags, and preview functionality in Phase 7.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
                  <p className="text-sm opacity-75 mb-4">Placeholder project description</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-teal-secondary text-dark-blue text-xs rounded-full">React</span>
                    <span className="px-2 py-1 bg-teal-secondary text-dark-blue text-xs rounded-full">TypeScript</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Placeholder for Phase 9 */}
        <section id="contact" className="min-h-screen text-white flex items-center justify-center px-6 relative"
                 style={{background: 'linear-gradient(to bottom, #124757 0%, #1a5c6b 50%, #208599 100%)'}}>
          <div className="text-center max-w-4xl">
            <h2 className="text-5xl font-bold mb-6">Contact</h2>
            <p className="text-xl leading-relaxed mb-8">
              This section will include your contact information, social links, and resume download in Phase 9.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <a 
                href="mailto:eyung@wustl.edu"
                className="px-8 py-3 bg-white text-teal-primary rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
              >
                Email Me
              </a>
              <a 
                href="/eric-yung-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-teal-primary transition-all duration-300 hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
