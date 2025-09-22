// Custom scroll utility for consistent cross-platform behavior
// Fixes Mac Safari's aggressive smooth scroll implementation

interface ScrollToOptions {
  target: number
  duration?: number
  onComplete?: () => void
}

interface ScrollToElementOptions {
  elementId: string
  duration?: number
  offset?: number
  onComplete?: () => void
}

// Easing function for smooth animation
const easeInOutQuad = (t: number): number => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

// Detect Mac/Safari for platform-specific optimizations
export const isMacSafari = (): boolean => {
  if (typeof window === 'undefined') return false
  
  const userAgent = navigator.userAgent.toLowerCase()
  const isMac = userAgent.includes('mac')
  const isSafari = userAgent.includes('safari') && !userAgent.includes('chrome')
  
  return isMac && isSafari
}

// Detect any Mac system (Safari, Chrome on Mac, etc.)
export const isMac = (): boolean => {
  if (typeof window === 'undefined') return false
  
  const userAgent = navigator.userAgent.toLowerCase()
  return userAgent.includes('mac') || userAgent.includes('darwin')
}

// Detect Windows system
export const isWindows = (): boolean => {
  if (typeof window === 'undefined') return false
  
  const userAgent = navigator.userAgent.toLowerCase()
  return userAgent.includes('windows') || userAgent.includes('win32') || userAgent.includes('win64')
}

// Custom scroll to position with consistent animation
export const scrollToPosition = ({ 
  target, 
  duration = 600, // Reduced from 800ms to 600ms for faster scrolling
  onComplete 
}: ScrollToOptions): void => {
  console.log('scrollToPosition called with target:', target, 'duration:', duration)
  
  // Check for reduced motion preference - but allow override for essential functionality
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  // Always use smooth scrolling for this portfolio since it's essential for the user experience
  // Users can disable JavaScript if they truly need no motion
  console.log('Reduced motion preference detected:', prefersReducedMotion, '- but using smooth scroll anyway for core functionality')

  // Use custom animation for all platforms to ensure scroll events continue firing
  // This is crucial for parallax effects to work during scroll animations
  const startPosition = window.pageYOffset
  const distance = target - startPosition
  const startTime = performance.now()
  
  console.log('Starting custom scroll animation from', startPosition, 'to', target, 'distance:', distance)

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    const easedProgress = easeInOutQuad(progress)
    const currentPosition = startPosition + (distance * easedProgress)
    
    window.scrollTo(0, currentPosition)
    
    if (progress < 1) {
      requestAnimationFrame(animateScroll)
    } else {
      console.log('Scroll animation completed')
      onComplete?.()
    }
  }

  requestAnimationFrame(animateScroll)
}

// Scroll to top with platform-specific optimizations
export const scrollToTop = (duration?: number, onComplete?: () => void): void => {
  scrollToPosition({ 
    target: 0, 
    duration: duration || 600, // Reduced from 800ms to 600ms for faster scrolling
    onComplete 
  })
}

// Scroll to element with offset support
export const scrollToElement = ({ 
  elementId, 
  duration = 600, // Reduced from 800ms to 600ms for faster scrolling
  offset = -80, 
  onComplete 
}: ScrollToElementOptions): void => {
  const element = document.querySelector(elementId) as HTMLElement
  
  if (!element) {
    console.warn(`Element with ID "${elementId}" not found`)
    return
  }

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
  const targetPosition = Math.max(0, elementPosition + offset)
  
  scrollToPosition({ 
    target: targetPosition, 
    duration, 
    onComplete 
  })
}

// Utility to temporarily disable CSS smooth scroll during custom animations
export const disableCSSSmootScroll = (): (() => void) => {
  // Since we're using native smooth scroll for all platforms, no need to disable CSS
  // Return no-op cleanup function
  return () => {}
}
