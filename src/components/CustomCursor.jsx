import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let raf

    const onMouseMove = (e) => { mouseX = e.clientX; mouseY = e.clientY }
    const onMouseEnterInteractive = () => setIsHovering(true)
    const onMouseLeaveInteractive = () => setIsHovering(false)

    const interactives = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .interactive'
    )
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive)
      el.addEventListener('mouseleave', onMouseLeaveInteractive)
    })

    const animate = () => {
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
      if (ringRef.current) {
        ringX += (mouseX - ringX) * 0.12
        ringY += (mouseY - ringY) * 0.12
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive)
        el.removeEventListener('mouseleave', onMouseLeaveInteractive)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden md:block"
        style={{
          width: isHovering ? 7 : 5,
          height: isHovering ? 7 : 5,
          borderRadius: '50%',
          background: '#ff3131',
          transition: 'width 0.2s, height 0.2s',
          willChange: 'transform',
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9997] hidden md:block"
        style={{
          width: isHovering ? 50 : 32,
          height: isHovering ? 50 : 32,
          borderRadius: '50%',
          border: `1px solid rgba(255, 49, 49, ${isHovering ? 0.8 : 0.4})`,
          transition: 'width 0.3s cubic-bezier(0.16,1,0.3,1), height 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s',
          willChange: 'transform',
        }}
      />
    </>
  )
}
