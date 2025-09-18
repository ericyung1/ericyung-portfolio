import Header from '@/components/Header'
import ParallaxHero from '@/components/ParallaxHero'
import ScrollToTop from '@/components/ScrollToTop'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'

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
        
        {/* About Section - Phase 4 Complete */}
        <section id="about" className="min-h-screen bg-gradient-to-b from-dark-blue via-dark-blue to-gradient-1 text-white flex items-center justify-center py-16 lg:py-20 relative">
          {/* Top Gradient Overlay for seamless hero transition */}
          <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-transparent via-dark-blue/60 to-dark-blue z-10 pointer-events-none" />
          <div className="relative z-20 w-full">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">About Me</h2>
              <div className="w-24 h-1 bg-teal-secondary mx-auto rounded-full"></div>
            </div>
            <AboutSection />
          </div>
        </section>

        {/* Projects Section - Phase 7 Complete */}
        <section id="projects" className="min-h-screen text-white flex items-center justify-center py-16 lg:py-20 relative"
                 style={{background: 'linear-gradient(to bottom, #1a5c6b 0%, #208599 30%, #6db8c5 70%, #8ae4da 100%)'}}>
          <div className="w-full">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Projects</h2>
              <div className="w-24 h-1 bg-white mx-auto rounded-full mb-4"></div>
              <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto px-4">
                Showcasing my passion for creating meaningful digital experiences
              </p>
            </div>
            <ProjectsSection />
          </div>
        </section>

        {/* Skills Section - Phase 6 Complete */}
        <section id="skills" className="min-h-screen bg-gradient-to-b from-teal-secondary via-gradient-3 to-gradient-2 text-white flex items-center justify-center py-16 lg:py-20 relative">
          <div className="w-full">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-dark-blue">Skills</h2>
              <div className="w-24 h-1 bg-dark-blue mx-auto rounded-full mb-4"></div>
              <p className="text-lg lg:text-xl text-dark-blue opacity-90 max-w-2xl mx-auto px-4">
                The technologies and tools I use to bring ideas to life
              </p>
            </div>
            <SkillsSection />
          </div>
        </section>

        {/* Experience Section - Phase 5 Complete */}
        <section id="experience" className="min-h-screen bg-gradient-to-b from-gradient-2 via-teal-primary to-gradient-1 text-white flex items-center justify-center py-16 lg:py-20 relative">
          <div className="w-full">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Experience</h2>
              <div className="w-24 h-1 bg-white mx-auto rounded-full mb-4"></div>
              <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto px-4">
                My professional journey and the impact I&apos;ve made along the way
              </p>
            </div>
            <ExperienceSection />
          </div>
        </section>

        {/* Contact Section - Phase 9 Complete */}
        <section id="contact" className="min-h-screen text-white flex items-center justify-center py-16 lg:py-20 relative"
                 style={{background: 'linear-gradient(to bottom, #1a5c6b 0%, #124757 50%, #208599 100%)'}}>
          <div className="w-full">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Get In Touch</h2>
              <div className="w-24 h-1 bg-white mx-auto rounded-full mb-4"></div>
            </div>
            <ContactSection />
          </div>
        </section>
      </main>
    </>
  )
}
