'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function ParallaxHero() {
  const starsRef = useRef<HTMLDivElement>(null)
  const castleRef = useRef<HTMLDivElement>(null)
  const mountainRef = useRef<HTMLDivElement>(null)
  const dragonRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | null>(null)

  // Custom smooth scroll function that works harmoniously with parallax
  const smoothScrollTo = (elementId: string) => {
    // Import the scroll utilities dynamically to avoid SSR issues
    import('@/lib/scrollUtils').then(({ scrollToElement, disableCSSSmootScroll }) => {
      // No longer disable parallax - let it work during scroll for better visual experience
      
      // Temporarily disable CSS smooth scroll to prevent conflicts with custom animation
      const restoreCSS = disableCSSSmootScroll()
      
      scrollToElement({
        elementId,
        duration: 800,
        offset: -80,
        onComplete: () => {
          // Restore CSS smooth scroll behavior
          setTimeout(() => {
            restoreCSS()
          }, 100)
        }
      })
    })
  }

  useEffect(() => {
    let ticking = false

    const updateParallax = (scrollY: number) => {
      // Check for reduced motion preference and mobile devices
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const isMobile = window.innerWidth < 768
      
      if (prefersReducedMotion) return
      
      // Adjust intensity based on device for optimal performance
      let intensity = isMobile ? 0.3 : 1
      
      // Use consistent intensity across all platforms for uniform experience

      // Apply parallax effects with enhanced GPU acceleration
      if (starsRef.current) {
        const transform = `translate3d(${scrollY * 0.25 * intensity}px, 0, 0)`
        starsRef.current.style.transform = transform
        starsRef.current.style.willChange = 'transform'
        console.log('Stars transform applied:', transform, 'Intensity:', intensity)
      }
      
      if (dragonRef.current) {
        dragonRef.current.style.transform = `translate3d(0, ${scrollY * -1.25 * intensity}px, 0)`
        dragonRef.current.style.willChange = 'transform'
      }
      
      if (castleRef.current) {
        castleRef.current.style.transform = `translate3d(0, ${scrollY * 0.75 * intensity}px, 0)`
        castleRef.current.style.willChange = 'transform'
      }
      
      if (mountainRef.current) {
        mountainRef.current.style.transform = `translate3d(0, ${scrollY * 0 * intensity}px, 0)`
        mountainRef.current.style.willChange = 'transform'
      }
      
      if (textRef.current) {
        textRef.current.style.transform = `translate3d(${scrollY * 4 * intensity}px, ${scrollY * 1.5 * intensity}px, 0)`
        textRef.current.style.willChange = 'transform'
      }
      
      if (ctaRef.current) {
        ctaRef.current.style.transform = `translate3d(0, ${scrollY * 1.5 * intensity}px, 0)`
        ctaRef.current.style.willChange = 'transform'
      }

      ticking = false
    }

  const handleScroll = () => {
    // Allow parallax effects to continue during smooth scrolling for better visual experience
    // The parallax and smooth scroll animations will work together harmoniously
    const scrollY = window.scrollY

    // Debug logging to understand Windows behavior
    if (typeof window !== 'undefined') {
      console.log('Scroll event fired, scrollY:', scrollY, 'User Agent:', navigator.userAgent.includes('Windows') ? 'Windows' : 'Other')
    }

    if (!ticking) {
      // Use requestAnimationFrame for smoother animations across all platforms
      animationFrameRef.current = requestAnimationFrame(() => updateParallax(scrollY))
      ticking = true
    }
  }

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <section className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-gradient-to-b from-teal-primary to-teal-secondary">
      {/* Stars Layer */}
      <div ref={starsRef} className="absolute top-0 left-0 w-full h-full pointer-events-none parallax-element">
        <Image
          src="/stars.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Castle Background Layer */}
      <div ref={castleRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 parallax-element">
        <Image
          src="/castle_background.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Mountain Foreground Layer */}
      <div ref={mountainRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-20 parallax-element">
        <Image
          src="/mountain_foreground.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dragon Layer */}
      <div ref={dragonRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-30 parallax-element">
        <Image
          src="/dragon.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Text - Now centered with responsive sizing */}
              <div 
                ref={textRef}
                className="absolute text-white font-bold text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl whitespace-nowrap z-40 text-center parallax-element"
              >
                Welcome
              </div>

      {/* CTA Buttons - Fixed positioning for iPhone compatibility */}
      <div ref={ctaRef} className="absolute z-50 flex flex-col sm:flex-row gap-3 sm:gap-4 hero-cta-buttons parallax-element">
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
