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
  const platform = navigator.platform?.toLowerCase() || ''
  return userAgent.includes('mac') || userAgent.includes('darwin') || platform.includes('mac')
}

// Detect Windows system
export const isWindows = (): boolean => {
  if (typeof window === 'undefined') return false
  
  const userAgent = navigator.userAgent.toLowerCase()
  const platform = navigator.platform?.toLowerCase() || ''
  return userAgent.includes('windows') || 
         userAgent.includes('win32') || 
         userAgent.includes('win64') ||
         platform.includes('win') ||
         platform.includes('windows')
}

// Custom scroll to position with consistent animation
export const scrollToPosition = ({ 
  target, 
  duration = 800, 
  onComplete 
}: ScrollToOptions): void => {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  if (prefersReducedMotion) {
    window.scrollTo({ top: target, behavior: 'auto' })
    onComplete?.()
    return
  }

  const startPosition = window.pageYOffset
  const distance = target - startPosition
  const startTime = performance.now()

  // Platform-specific duration adjustments
  let adjustedDuration = duration
  
  if (isMac()) {
    // Shorter duration on Mac to counteract Safari's momentum
    adjustedDuration = duration * 0.7
  } else if (isWindows()) {
    // Slightly longer duration on Windows for smoother animation
    adjustedDuration = duration * 1.1
  }
  
  // Debug logging for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Scroll animation:', { 
      platform: isMac() ? 'Mac' : isWindows() ? 'Windows' : 'Other',
      originalDuration: duration,
      adjustedDuration,
      distance 
    })
  }

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / adjustedDuration, 1)
    
    const easedProgress = easeInOutQuad(progress)
    const currentPosition = startPosition + (distance * easedProgress)
    
    window.scrollTo(0, currentPosition)
    
    if (progress < 1) {
      requestAnimationFrame(animateScroll)
    } else {
      onComplete?.()
    }
  }

  // Start animation with fallback for browsers that don't support requestAnimationFrame properly
  try {
    requestAnimationFrame(animateScroll)
  } catch (error) {
    console.warn('RequestAnimationFrame failed, using fallback scroll:', error)
    // Fallback to CSS smooth scroll
    window.scrollTo({ top: target, behavior: 'smooth' })
    // Approximate completion time
    setTimeout(() => onComplete?.(), adjustedDuration)
  }
}

// Scroll to top with platform-specific optimizations
export const scrollToTop = (duration?: number, onComplete?: () => void): void => {
  scrollToPosition({ 
    target: 0, 
    duration: duration || 800, 
    onComplete 
  })
}

// Scroll to element with offset support
export const scrollToElement = ({ 
  elementId, 
  duration = 800, 
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
  const htmlElement = document.documentElement
  const originalScrollBehavior = htmlElement.style.scrollBehavior
  
  // Add class to indicate custom scroll is active
  htmlElement.classList.add('custom-scroll-active')
  htmlElement.style.scrollBehavior = 'auto'
  
  // Also set on body for better Windows browser compatibility
  const bodyElement = document.body
  const originalBodyScrollBehavior = bodyElement?.style.scrollBehavior
  if (bodyElement) {
    bodyElement.style.scrollBehavior = 'auto'
  }
  
  // Return cleanup function
  return () => {
    htmlElement.classList.remove('custom-scroll-active')
    htmlElement.style.scrollBehavior = originalScrollBehavior
    if (bodyElement && originalBodyScrollBehavior !== undefined) {
      bodyElement.style.scrollBehavior = originalBodyScrollBehavior
    }
  }
}
