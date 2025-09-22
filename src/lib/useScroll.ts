// Custom React hook for consistent scrolling behavior across the app
import { useState, useCallback } from 'react'
import { scrollToTop, scrollToElement } from './scrollUtils'

interface UseScrollReturn {
  isScrolling: boolean
  scrollToTop: (duration?: number) => void
  scrollToElement: (elementId: string, duration?: number, offset?: number) => void
}

export const useScroll = (): UseScrollReturn => {
  const [isScrolling, setIsScrolling] = useState(false)

  const handleScrollToTop = useCallback((duration = 800) => {
    if (isScrolling) return
    
    setIsScrolling(true)
    
    scrollToTop(duration, () => {
      setIsScrolling(false)
    })
  }, [isScrolling])

  const handleScrollToElement = useCallback((elementId: string, duration = 800, offset = -80) => {
    if (isScrolling) return
    
    setIsScrolling(true)
    
    scrollToElement({
      elementId,
      duration,
      offset,
      onComplete: () => {
        setIsScrolling(false)
      }
    })
  }, [isScrolling])

  return {
    isScrolling,
    scrollToTop: handleScrollToTop,
    scrollToElement: handleScrollToElement
  }
}
