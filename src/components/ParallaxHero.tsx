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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReducedMotion) return

      // Apply parallax effects matching your original JavaScript
      if (starsRef.current) {
        starsRef.current.style.transform = `translateX(${scrollY * 0.25}px)`
      }
      
      if (dragonRef.current) {
        dragonRef.current.style.transform = `translateY(${scrollY * -1.25}px)`
      }
      
      if (castleRef.current) {
        castleRef.current.style.transform = `translateY(${scrollY * 0.75}px)`
      }
      
      if (mountainRef.current) {
        mountainRef.current.style.transform = `translateY(${scrollY * 0}px)`
      }
      
      if (textRef.current) {
        textRef.current.style.transform = `translate(${scrollY * 4}px, ${scrollY * 1.5}px)`
      }
      
      if (ctaRef.current) {
        ctaRef.current.style.transform = `translateY(${scrollY * 1.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
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

      {/* Hero Text */}
      <div 
        ref={textRef}
        className="absolute right-0 text-white font-bold text-6xl md:text-8xl lg:text-9xl whitespace-nowrap z-40 transform -translate-y-24 -translate-x-80 md:-translate-x-96"
      >
        Welcome
      </div>

      {/* CTA Buttons */}
      <div ref={ctaRef} className="absolute z-50 flex flex-col sm:flex-row gap-4">
        <a 
          href="#about"
          className="inline-block px-8 py-3 bg-white text-teal-primary text-xl font-medium rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-105 text-center"
        >
          Explore
        </a>
        <a 
          href="#projects"
          className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white text-xl font-medium rounded-full hover:bg-white hover:text-teal-primary transition-all duration-300 hover:scale-105 text-center"
        >
          View Projects
        </a>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-dark-blue to-transparent z-40 pointer-events-none" />
    </section>
  )
}
