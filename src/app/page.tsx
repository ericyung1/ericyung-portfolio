import ParallaxHero from '@/components/ParallaxHero'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Parallax Hero Section */}
      <ParallaxHero />
      
      {/* About Section - Placeholder for Phase 4 */}
      <section id="about" className="min-h-screen bg-dark-blue text-white flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <h2 className="text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl leading-relaxed mb-8">
            Welcome to my portfolio! This is a placeholder section that will be filled with content in Phase 4.
            The parallax hero above showcases the preserved fantasy imagery from your original site with smooth scroll effects.
          </p>
          <div className="text-sm opacity-75 space-y-1">
            <p>✅ Phase 1: Project Setup Complete</p>
            <p>✅ Phase 2: Parallax Hero Complete</p>
            <p>🚧 Phase 3: Navigation & Sections (Coming Next)</p>
          </div>
        </div>
      </section>

      {/* Projects Section - Placeholder for Phase 7 */}
      <section id="projects" className="min-h-screen bg-gradient-to-b from-dark-blue to-teal-primary text-white flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
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
    </main>
  )
}
