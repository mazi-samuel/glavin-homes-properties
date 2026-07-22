import { useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

const team = [
  {
    initials: 'GO',
    name: 'Gabriel Okonkwo',
    title: 'Founder & Principal Advisor',
    bio: '25 years in Lagos real estate. Former CBRE Nigeria. Advised on over ₦80B in transactions.',
    linkedin: '#',
    specialty: 'Investment Advisory, Portfolio Strategy',
    image: '/images/founder.png',
  },
  {
    initials: 'AE',
    name: 'Amara Eze',
    title: 'Corporate Secretary & Partner',
    bio: 'Licensed legal counsel. Over 10 years managing corporate governance, regulatory board compliance, and title transactions.',
    linkedin: '#',
    specialty: 'Corporate Governance, Transaction Law',
    image: '/images/secretary.png',
  },
  {
    initials: 'TF',
    name: 'Taiwo Fashola',
    title: 'Head of Research & Intelligence',
    bio: 'Former LSDPC analyst. Leads our proprietary market intelligence division and quarterly reports.',
    linkedin: '#',
    specialty: 'Market Research, Economic Analysis',
  },
  {
    initials: 'NB',
    name: 'Ngozi Balogun',
    title: 'Director, Corporate Mandates',
    bio: 'Specialises in corporate real estate strategy and institutional portfolio management.',
    linkedin: '#',
    specialty: 'Corporate Advisory, Lease Strategy',
  },
]

function TeamCard({ member, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="relative overflow-hidden"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border-subtle)',
        borderRadius: 2,
        cursor: 'default',
        transition: 'border-color 0.4s',
        borderColor: hovered ? 'rgba(255,49,49,0.2)' : 'var(--color-border-subtle)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        style={{
          aspectRatio: '1 / 1',
          background: `linear-gradient(135deg, var(--color-surface-2) 0%, var(--color-surface) 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.9)',
              transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
        ) : (
          <div
            style={{
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 400,
              letterSpacing: '0.1em',
              transition: 'color 0.4s',
              color: hovered ? 'rgba(255,49,49,0.15)' : 'rgba(255,49,49,0.25)',
            }}
          >
            {member.initials}
          </div>
        )}

        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--color-glass)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 28,
            textAlign: 'center',
          }}
          initial={false}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        >
          <p
            style={{
              fontFamily: 'Josefin Sans, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 300,
              color: 'var(--color-text)',
              lineHeight: 1.75,
              marginBottom: 16,
            }}
          >
            {member.bio}
          </p>
          <div
            style={{
              fontFamily: 'Josefin Sans, sans-serif',
              fontSize: '0.7rem',
              fontWeight: 500,
              color: '#ff3131',
              letterSpacing: '0.1em',
            }}
          >
            {member.specialty}
          </div>

          <a
            href={member.linkedin}
            aria-label={`${member.name} on LinkedIn`}
            style={{
              marginTop: 20,
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'rgba(255,49,49,0.1)',
              border: '1px solid rgba(255,49,49,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Linkedin size={14} color="#ff3131" />
          </a>
        </motion.div>
      </div>

      <div style={{ padding: '20px 24px 24px' }}>
        <div
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '0.95rem',
            fontWeight: 500,
            color: 'var(--color-text)',
            letterSpacing: '0.03em',
            marginBottom: 6,
          }}
        >
          {member.name}
        </div>
        <div
          style={{
            fontFamily: 'Josefin Sans, sans-serif',
            fontSize: '0.72rem',
            fontWeight: 400,
            color: '#ff3131',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          {member.title}
        </div>
      </div>

      <div
        style={{
          height: 2,
          background: 'linear-gradient(90deg, #ff3131, transparent)',
          transform: `scaleX(${hovered ? 1 : 0})`,
          transformOrigin: 'left',
          transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
        }}
      />
    </motion.div>
  )
}

export default function TeamSection() {
  return (
    <section id="team" className="section-pad" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="eyebrow" style={{ marginBottom: 20 }}>The Team</div>
          <div className="gold-rule-center" style={{ marginBottom: 24 }} />
          <h2 className="section-title" style={{ color: 'var(--color-text)' }}>Leadership &amp; Expertise</h2>
          <p className="section-subtitle" style={{ margin: '16px auto 0', color: 'var(--color-text-muted)' }}>
            Our advisors bring decades of combined experience across Lagos's most demanding mandates.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
