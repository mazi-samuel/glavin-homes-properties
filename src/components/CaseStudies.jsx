import { useState } from 'react'
import { motion } from 'framer-motion'

const cases = [
  {
    id: 1,
    image: '/images/case-1.png',
    category: 'Residential Development',
    title: 'The Meridian Towers, Ikoyi',
    outcome: '₦2.4B in pre-sales secured within 60 days of launch',
    description: 'Glavin was engaged as exclusive marketing advisors for this 45-unit luxury development in Ikoyi. We developed the go-to-market strategy, investor communication framework, and sales execution plan — achieving full pre-sales in under six months.',
    tags: ['Project Marketing', 'Investor Relations', 'Strategy'],
    year: '2023',
  },
  {
    id: 2,
    image: '/images/case-2.png',
    category: 'Portfolio Acquisition',
    title: 'Waterfront Estate, Victoria Island',
    outcome: '4 lagoon-front parcels acquired across 18 months',
    description: 'A UHNW family office engaged us to identify, negotiate, and acquire prime waterfront land parcels in Victoria Island as part of a long-term legacy portfolio. Delivered at 12% below open market rate through off-market sourcing.',
    tags: ['Acquisition Advisory', 'Due Diligence', 'Negotiation'],
    year: '2022',
  },
  {
    id: 3,
    image: '/images/case-3.png',
    category: 'Corporate Real Estate',
    title: 'Pan-African HQ, Eko Atlantic',
    outcome: 'Optimised office footprint saving ₦180M annually',
    description: 'We advised a pan-African financial institution on consolidating and renegotiating its Lagos office portfolio — resulting in a premium headquarters at Eko Atlantic, significantly reduced lease costs, and a 5-year strategic location plan.',
    tags: ['Corporate Advisory', 'Portfolio Management', 'Lease Negotiation'],
    year: '2023',
  },
]

function CaseCard({ item, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="relative group overflow-hidden"
      style={{
        borderRadius: 2,
        cursor: 'pointer',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border-subtle)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <div style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)',
            filter: 'brightness(0.65)',
          }}
        />

        {/* Keeping gradients dark to preserve white text legibility over images */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: hovered
              ? 'linear-gradient(to top, rgba(9,21,46,0.95) 45%, rgba(9,21,46,0.4) 100%)'
              : 'linear-gradient(to top, rgba(9,21,46,0.85) 30%, rgba(9,21,46,0.2) 100%)',
            transition: 'background 0.5s ease',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            background: 'rgba(255,49,49,0.15)',
            border: '1px solid rgba(255,49,49,0.25)',
            backdropFilter: 'blur(10px)',
            padding: '6px 14px',
            fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#ff3131',
            borderRadius: 1,
          }}
        >
          {item.category}
        </div>

        <div
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
            fontSize: '0.7rem',
            color: 'rgba(245,240,232,0.6)',
            letterSpacing: '0.1em',
          }}
        >
          {item.year}
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 28px' }}>
          <h3
            style={{
              fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
              fontSize: '1.1rem',
              fontWeight: 500,
              color: '#F5F0E8',
              marginBottom: 8,
              letterSpacing: '0.02em',
              lineHeight: 1.3,
            }}
          >
            {item.title}
          </h3>

          <div
            style={{
              fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
              fontSize: '0.78rem',
              fontWeight: 400,
              color: '#ff3131',
              marginBottom: hovered ? 14 : 0,
              transition: 'margin 0.3s',
            }}
          >
            {item.outcome}
          </div>

          <motion.div
            animate={{ height: hovered ? 'auto' : 0, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
                fontSize: '0.82rem',
                fontWeight: 300,
                color: 'rgba(245,240,232,0.8)',
                lineHeight: 1.75,
                paddingTop: 4,
                paddingBottom: 16,
              }}
            >
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: '4px 10px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    color: 'rgba(245,240,232,0.6)',
                    textTransform: 'uppercase',
                    borderRadius: 1,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="section-pad"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="container">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Featured Work</div>
            <div className="gold-rule" style={{ marginBottom: 24 }} />
            <h2 className="section-title" style={{ color: 'var(--color-text)' }}>Signature Engagements</h2>
          </div>
          <p className="section-subtitle" style={{ maxWidth: 380, color: 'var(--color-text-muted)' }}>
            A selection of mandates that demonstrate the depth and breadth of our advisory practice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <CaseCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
