import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 to target when element enters viewport.
 * @param {number} target - The final number to count to
 * @param {number} duration - Animation duration in ms
 * @param {string} suffix - Optional suffix like "+" or "%"
 */
export function useCountUp(target, duration = 2000, suffix = '') {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
          const startTime = performance.now()
          const animate = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease out expo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration, hasStarted])

  return { ref, display: `${count}${suffix}` }
}
