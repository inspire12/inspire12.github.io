import { useEffect, useState } from 'react'

export function useScrollAnimation(threshold = 0.1) {
  const [elements, setElements] = useState(new Map())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target
          if (entry.isIntersecting) {
            element.classList.add('animate-fade-in')
            setElements(prev => new Map(prev).set(element, true))
          }
        })
      },
      { threshold }
    )

    const elementsToObserve = document.querySelectorAll('[data-animate]')
    elementsToObserve.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [threshold])

  return elements
}