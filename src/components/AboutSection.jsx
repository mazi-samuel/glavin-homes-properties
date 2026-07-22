import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="section-pad animate-fade-in" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="eyebrow" style={{ marginBottom: 20 }}>Who We Are</div>
            <div className="gold-rule" style={{ marginBottom: 28 }} />
            <h2 className="section-title" style={{ marginBottom: 24, color: 'var(--color-text)' }}>
              Lagos's Premier Real Estate &amp; Advisory Firm
            </h2>

            <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontStyle: 'italic', fontSize: '1.1rem', fontWeight: 300, color: '#ff3131', lineHeight: 1.8, marginBottom: 28, paddingLeft: 20, borderLeft: '2px solid rgba(255,49,49,0.4)' }}>
              "We don't just advise on property — we shape the future of how Lagos lives, works, and grows."
            </div>

            <p className="section-subtitle" style={{ maxWidth: '100%', marginBottom: 20, color: 'var(--color-text-muted)' }}>
              Glavin Homes &amp; Properties Ltd operates at the intersection of rigorous market intelligence
              and deep client trust. We are formally registered in Nigeria as a private company limited by shares,
              operating under the Companies and Allied Matters Act 2020 with **Company Registration No. 7090056 (RC 7090056)**.
            </p>
            <p className="section-subtitle" style={{ maxWidth: '100%', marginBottom: 30, color: 'var(--color-text-muted)' }}>
              Our team of certified advisors handles residential acquisitions, high-yield investment structures,
              commercial leasing, project marketing, and comprehensive title due diligence across Nigeria's
              most prestigious growth corridors.
            </p>

            {/* Corporate Registration Stamp */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '16px 20px',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 2,
                marginBottom: 32,
                maxWidth: 480,
              }}
            >
              <ShieldCheck size={20} color="#ff3131" />
              <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: '0.8rem', fontWeight: 500, color: 'var(--color-text)' }}>
                CAC Registered Private Limited Company · RC 7090056
              </div>
            </div>

            <motion.div
              className="flex flex-wrap gap-8 mb-12"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
            >
              {[
                { label: 'Our Mission', desc: 'To make elite property insight accessible to ambitious investors.' },
                { label: 'Our Promise', desc: 'Transparent, rigorous, and unwavering commitment to your outcomes.' },
              ].map((item) => (
                <div key={item.label} style={{ flex: '1 1 200px' }}>
                  <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.85rem', fontWeight: 500, color: '#ff3131', marginBottom: 8, letterSpacing: '0.05em' }}>
                    {item.label}
                  </div>
                  <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: '0.9rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </motion.div>

            <button
              className="btn-secondary interactive"
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}
            >
              Explore Our Services <ArrowRight size={15} />
            </button>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ position: 'relative', borderRadius: 2, overflow: 'hidden', aspectRatio: '4/5' }}>
              <img src="/images/about.png" alt="Luxury interior — Glavin Homes" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(9,21,46,0.6) 0%, transparent 60%)' }} />
            </div>

            {/* Floating glass card */}
            <motion.div
              className="glass-card absolute"
              style={{ bottom: -24, left: -24, padding: '24px 28px', maxWidth: 260, background: 'var(--color-glass)', border: '1px solid rgba(255,49,49,0.15)' }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: '2rem', fontWeight: 500, color: '#ff3131', lineHeight: 1 }}>18+</div>
              <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: '0.75rem', fontWeight: 400, color: 'var(--color-text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 8 }}>
                Years shaping Lagos real estate
              </div>
            </motion.div>

            {/* Border accent */}
            <div style={{ position: 'absolute', top: -12, right: -12, width: '40%', height: '40%', border: '1px solid rgba(255,49,49,0.18)', borderRadius: 2, pointerEvents: 'none' }} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
