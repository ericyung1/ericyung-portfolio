'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function ParallaxHero() {
  const starsRef = useRef<HTMLDivElement>(null)
  const castleRef = useRef<HTMLDivElement>(null)
  const mountainRef = useRef<HTMLDivElement>(null)
  const dragonRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const isScrollingRef = useRef(false)

  // Optimized smooth scroll function that doesn't conflict with parallax
  const smoothScrollTo = (elementId: string) => {
    const element = document.querySelector(elementId) as HTMLElement
    if (!element) return

    // Temporarily disable parallax during smooth scroll
    isScrollingRef.current = true
    
    // Use native smooth scroll with enhanced CSS timing
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })

    // Re-enable parallax after scroll completes
    setTimeout(() => {
      isScrollingRef.current = false
    }, 1000)
  }

  useEffect(() => {
    const handleScroll = () => {
      // Skip parallax updates during smooth scrolling to prevent stuttering
      if (isScrollingRef.current) return
      
      const scrollY = window.scrollY
      
      // Check for reduced motion preference and mobile devices
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const isMobile = window.innerWidth < 768 // Reduce parallax on mobile for performance
      
      if (prefersReducedMotion) return
      
      // Reduce parallax intensity on mobile
      const intensity = isMobile ? 0.3 : 1

      // Apply parallax effects with GPU acceleration (translate3d) - reduced on mobile
      if (starsRef.current) {
        starsRef.current.style.transform = `translate3d(${scrollY * 0.25 * intensity}px, 0, 0)`
      }
      
      if (dragonRef.current) {
        dragonRef.current.style.transform = `translate3d(0, ${scrollY * -1.25 * intensity}px, 0)`
      }
      
      if (castleRef.current) {
        castleRef.current.style.transform = `translate3d(0, ${scrollY * 0.75 * intensity}px, 0)`
      }
      
      if (mountainRef.current) {
        mountainRef.current.style.transform = `translate3d(0, ${scrollY * 0 * intensity}px, 0)`
      }
      
      if (textRef.current) {
        textRef.current.style.transform = `translate3d(${scrollY * 4 * intensity}px, ${scrollY * 1.5 * intensity}px, 0)`
      }
      
      if (ctaRef.current) {
        ctaRef.current.style.transform = `translate3d(0, ${scrollY * 1.5 * intensity}px, 0)`
      }
    }

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-gradient-to-b from-teal-primary to-teal-secondary">
      {/* Stars Layer */}
      <div ref={starsRef} className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <Image
          src="/stars.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Castle Background Layer */}
      <div ref={castleRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        <Image
          src="/castle_background.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Mountain Foreground Layer */}
      <div ref={mountainRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
        <Image
          src="/mountain_foreground.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dragon Layer */}
      <div ref={dragonRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-30">
        <Image
          src="/dragon.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Text - Now centered */}
              <div 
                ref={textRef}
                className="absolute text-white font-bold text-5xl md:text-7xl lg:text-8xl whitespace-nowrap z-40 text-center"
              >
                Welcome
              </div>

      {/* CTA Buttons - Now underneath the text with more spacing */}
      <div ref={ctaRef} className="absolute z-50 flex flex-col sm:flex-row gap-4 mt-32 md:mt-40 lg:mt-48">
        <a 
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            smoothScrollTo('#about')
          }}
          className="inline-block px-6 py-2 bg-white text-teal-primary text-lg font-medium rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-105 text-center cursor-pointer"
        >
          Explore
        </a>
        <a 
          href="#projects"
          onClick={(e) => {
            e.preventDefault()
            smoothScrollTo('#projects')
          }}
          className="inline-block px-6 py-2 bg-transparent border-2 border-white text-white text-lg font-medium rounded-full hover:bg-white hover:text-teal-primary transition-all duration-300 hover:scale-105 text-center cursor-pointer"
        >
          View Projects
        </a>
      </div>

      {/* Bottom Gradient Overlay - Enhanced for seamless transition */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-dark-blue via-dark-blue/80 to-transparent z-40 pointer-events-none" />
    </section>
  )
}
