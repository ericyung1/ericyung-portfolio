'use client'

import { useState, useEffect } from 'react'
import { scrollToTop as customScrollToTop } from '@/lib/scrollUtils'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const handleScrollToTop = () => {
    if (isScrolling) return // Prevent multiple clicks during scroll
    
    setIsScrolling(true)
    
    customScrollToTop(600, () => { // Reduced from 800ms for faster scrolling
      setIsScrolling(false)
    })
  }

  return (
    <button
      onClick={handleScrollToTop}
      disabled={isScrolling}
      className={`fixed bottom-8 right-8 z-[9999] p-3 bg-teal-primary hover:bg-teal-secondary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      } ${isScrolling ? 'opacity-75 cursor-not-allowed' : ''}`}
      aria-label="Scroll to top"
    >
      {/* Up arrow icon */}
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  )
}
