import { motion } from 'framer-motion'
import { useCountUp } from '../hooks/useCountUp'

const stats = [
  { value: 18,  suffix: '+',  label: 'Years of Excellence',    sub: 'Est. 2006' },
  { value: 50,  suffix: 'B+', prefix: '₦', label: 'Total Value Advised', sub: 'Across all portfolios' },
  { value: 200, suffix: '+',  label: 'Projects Delivered',     sub: 'Across Lagos & beyond' },
  { value: 98,  suffix: '%',  label: 'Client Satisfaction',    sub: 'Based on client reviews' },
]

function StatItem({ stat, index }) {
  const { ref, display } = useCountUp(stat.value, 2200, stat.suffix)

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center relative"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <div style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 500, color: '#ff3131', lineHeight: 1, letterSpacing: '-0.01em' }}>
        {stat.prefix || ''}{display}
      </div>
      <div style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-text)', marginTop: 10 }}>
        {stat.label}
      </div>
      <div style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: '0.7rem', fontWeight: 300, color: 'var(--color-text-muted)', marginTop: 4, letterSpacing: '0.05em' }}>
        {stat.sub}
      </div>
      {index < stats.length - 1 && (
        <div className="absolute right-0 top-1/2 hidden lg:block"
          style={{ width: 1, height: 56, background: 'linear-gradient(to bottom, transparent, rgba(255,49,49,0.3), transparent)', transform: 'translateY(-50%)' }}
        />
      )}
    </motion.div>
  )
}

export default function TrustBar() {
  return (
    <section style={{ background: 'var(--color-surface)', borderTop: '1px solid rgba(255,49,49,0.08)', borderBottom: '1px solid rgba(255,49,49,0.08)', padding: '64px 0' }}>
      <div className="container">
        <motion.div className="text-center mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="eyebrow" style={{ color: '#ff3131' }}>Our Track Record</div>
          <div style={{ width: 32, height: 1, background: '#ff3131', margin: '12px auto 0' }} />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 relative">
          {stats.map((stat, i) => <StatItem key={stat.label} stat={stat} index={i} />)}
        </div>

        <motion.div
          className="mt-16 pt-10 flex flex-wrap items-center justify-center gap-8"
          style={{ borderTop: '1px solid rgba(255,49,49,0.08)' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="eyebrow" style={{ color: 'var(--color-text-muted)' }}>Trusted By</span>
          {['NIESV', 'RICS', 'LSDPC', 'REDAN', 'NBS'].map((name) => (
            <span key={name} style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.25em', color: 'var(--color-text-muted)', opacity: 0.5, textTransform: 'uppercase' }}>
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
