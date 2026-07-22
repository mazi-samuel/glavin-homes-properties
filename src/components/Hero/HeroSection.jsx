import { Suspense, useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import CityScene from './CityScene'

const isMobile = () =>
  typeof window !== 'undefined' &&
  (window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent))

function HeroContent() {
  const titleWords = ['Redefining', 'Property', 'Advisory', 'Excellence']

  return (
    <div
      className="relative z-10 flex flex-col items-start justify-center"
      style={{ minHeight: '100vh', padding: '120px 0 80px' }}
    >
      <div className="container">
        {/* Eyebrow */}
        <motion.div
          className="eyebrow"
          style={{ marginBottom: 28 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Lagos · Nigeria · Est. 2023
        </motion.div>

        {/* Headline */}
        <div style={{ overflow: 'hidden', marginBottom: 12 }}>
          {titleWords.map((word, i) => (
            <motion.span
              key={word}
              style={{
                display: i < 3 ? 'block' : 'inline-block',
                fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
                fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
                color: i === 2 ? '#ff3131' : 'var(--color-text)',
              }}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 2.8 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          style={{
            fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
            fontWeight: 300,
            color: 'var(--color-text-muted)',
            maxWidth: 480,
            lineHeight: 1.8,
            marginTop: 28,
            marginBottom: 48,
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Sophisticated counsel for discerning investors. We transform complex real
          estate decisions into confident, lucrative outcomes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 3.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
            style={{ gap: 12 }}
          >
            Book a Consultation
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            Our Story
          </button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="flex items-center gap-8 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.8 }}
        >
          <div style={{ width: 1, height: 40, background: 'rgba(255,49,49,0.3)' }} />
          <div className="flex gap-12">
            {[
              { num: '3+',     label: 'years' },
              { num: '₦500M+', label: 'advised' },
              { num: '5+',     label: 'projects' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: '1.3rem', fontWeight: 500, color: '#ff3131', lineHeight: 1 }}>
                  {s.num}
                </div>
                <div className="eyebrow" style={{ fontSize: '0.6rem', marginTop: 4, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  const scrollRef = useRef(0)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    setMobile(isMobile())
    const onScroll = () => { scrollRef.current = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="hero" className="relative overflow-hidden" style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundImage: 'url(/images/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.3)' }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] hero-overlay-1" />
      <div className="absolute bottom-0 left-0 right-0 z-[2] hero-overlay-2" style={{ height: 200 }} />

      {/* 3D Scene */}
      {!mobile && (
        <div className="absolute right-0 top-0 z-[3] hidden md:block" style={{ width: '55%', height: '100%', opacity: 0.65 }}>
          <Suspense fallback={null}>
            <CityScene scrollRef={scrollRef} />
          </Suspense>
        </div>
      )}

      {/* Content */}
      <div className="relative z-[4]">
        <HeroContent />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-[5] flex flex-col items-center gap-2"
        style={{ transform: 'translateX(-50%)' }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span className="eyebrow" style={{ fontSize: '0.55rem', color: 'var(--color-text-muted)' }}>Scroll</span>
        <ChevronDown size={16} color="rgba(255,49,49,0.6)" />
      </motion.div>
    </section>
  )
}
