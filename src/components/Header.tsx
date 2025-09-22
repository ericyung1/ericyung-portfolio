'use client'

import { useState, useEffect } from 'react'
import { scrollToTop, scrollToElement } from '@/lib/scrollUtils'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollToElement = (elementId: string) => {
    console.log('Header navigation clicked, elementId:', elementId, 'isScrolling:', isScrolling)
    
    if (isScrolling) return // Prevent multiple clicks during scroll
    
    setIsScrolling(true)
    
    scrollToElement({ 
      elementId, 
      duration: 600, // Reduced from 800ms for faster scrolling
      offset: -80, // Account for fixed header
      onComplete: () => {
        console.log('Header scroll completed')
        setIsScrolling(false)
        setIsMobileMenuOpen(false) // Close mobile menu after clicking
      }
    })
  }

  const handleScrollToTop = () => {
    if (isScrolling) return
    
    setIsScrolling(true)
    
    scrollToTop(600, () => { // Reduced from 800ms for faster scrolling
      setIsScrolling(false)
      setIsMobileMenuOpen(false)
    })
  }

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[10000] transition-all duration-500 ${
        isScrolled 
          ? 'bg-dark-blue/70 backdrop-blur-2xl shadow-2xl border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault()
              handleScrollToTop()
            }}
            className={`text-white font-bold text-2xl uppercase tracking-wider hover:text-teal-secondary transition-colors duration-300 cursor-pointer ${
              isScrolling ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            Eric Yung
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  if (item.href === '#') {
                    handleScrollToTop()
                  } else {
                    handleScrollToElement(item.href)
                  }
                }}
                className={`text-white hover:text-teal-secondary transition-colors duration-300 px-3 py-2 rounded-full hover:bg-white/10 cursor-pointer ${
                  isScrolling ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-teal-secondary transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span 
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                }`}
              />
              <span 
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span 
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  if (item.href === '#') {
                    handleScrollToTop()
                  } else {
                    handleScrollToElement(item.href)
                  }
                }}
                className={`text-white hover:text-teal-secondary transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/10 cursor-pointer ${
                  isScrolling ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
