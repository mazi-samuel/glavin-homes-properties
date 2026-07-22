import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: "Glavin Homes fundamentally changed how I think about property as an asset class. Their market intelligence is forensic, and their advice is always in my interest — never theirs.",
    name: "Chukwuemeka Obi",
    title: "Managing Director, Obi Capital Partners",
    initials: "CO",
  },
  {
    id: 2,
    quote: "We engaged Glavin for a complex portfolio acquisition involving six parcels across three LGAs. The rigour of their due diligence process alone was worth the advisory fee.",
    name: "Adaeze Nwosu",
    title: "Chief Investment Officer, Nwosu Family Office",
    initials: "AN",
  },
  {
    id: 3,
    quote: "The Meridian Towers launch was a masterclass in property marketing. Glavin's strategy generated pre-sales that exceeded our projections by 35%. Exceptional team.",
    name: "Olumide Fashola",
    title: "CEO, Fashola Development Group",
    initials: "OF",
  },
  {
    id: 4,
    quote: "I've worked with property advisors across London, Dubai, and Lagos. Glavin is the only firm that combines global standards with genuine local knowledge. They are genuinely world-class.",
    name: "Temi Adeyemi",
    title: "Private Wealth Manager",
    initials: "TA",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next, paused])

  return (
    <section
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid rgba(255,49,49,0.08)',
        borderBottom: '1px solid rgba(255,49,49,0.08)',
        padding: '120px 0',
      }}
    >
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="eyebrow" style={{ marginBottom: 16 }}>Client Voices</div>
          <div className="gold-rule-center" style={{ marginBottom: 20 }} />
          <h2 className="section-title" style={{ color: 'var(--color-text)' }}>What Our Clients Say</h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Quote icon */}
          <div className="flex justify-center mb-10">
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                background: 'rgba(255,49,49,0.08)',
                border: '1px solid rgba(255,49,49,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Quote size={22} color="#ff3131" strokeWidth={1.5} />
            </div>
          </div>

          {/* Testimonial */}
          <div style={{ minHeight: 200, position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <blockquote
                  style={{
                    fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
                    fontStyle: 'italic',
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                    fontWeight: 400,
                    color: 'var(--color-text)',
                    lineHeight: 1.75,
                    marginBottom: 36,
                    letterSpacing: '0.01em',
                  }}
                >
                  "{testimonials[current].quote}"
                </blockquote>

                <div className="flex flex-col items-center gap-3">
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: 'rgba(255,49,49,0.12)',
                      border: '1px solid rgba(255,49,49,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: '#ff3131',
                    }}
                  >
                    {testimonials[current].initials}
                  </div>

                  <div>
                    <div
                      style={{
                        fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {testimonials[current].name}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
                        fontSize: '0.75rem',
                        fontWeight: 300,
                        color: 'var(--color-text-muted)',
                        letterSpacing: '0.1em',
                        marginTop: 4,
                      }}
                    >
                      {testimonials[current].title}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'transparent',
                border: '1px solid rgba(255,49,49,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'border-color 0.3s, background 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#ff3131'
                e.currentTarget.style.background = 'rgba(255,49,49,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,49,49,0.25)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <ChevronLeft size={16} color="#ff3131" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  style={{
                    width: i === current ? 24 : 6,
                    height: 6,
                    borderRadius: 3,
                    background: i === current ? '#ff3131' : 'rgba(255,49,49,0.25)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'width 0.4s cubic-bezier(0.16,1,0.3,1), background 0.3s',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'transparent',
                border: '1px solid rgba(255,49,49,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'border-color 0.3s, background 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#ff3131'
                e.currentTarget.style.background = 'rgba(255,49,49,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,49,49,0.25)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <ChevronRight size={16} color="#ff3131" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
