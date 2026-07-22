import { motion } from 'framer-motion'

const steps = [
  { number: '01', title: 'Discover', desc: 'We begin with a deep discovery session — understanding your goals, timeline, financial parameters, and risk appetite. No assumptions. Every mandate starts fresh.', detail: 'Discovery sessions are typically 90 minutes. We document everything and share a clear brief for your approval.' },
  { number: '02', title: 'Analyse',  desc: 'Our research team conducts comprehensive market analysis, comparables assessment, regulatory review, and risk profiling — delivering data you can act on with confidence.', detail: 'Analysis includes primary and secondary research, site visits where applicable, and independent verification.' },
  { number: '03', title: 'Advise',   desc: 'We present our findings in a structured advisory session — clear options, trade-offs, and a recommended course of action with full rationale. No jargon. No ambiguity.', detail: 'Advisory reports are written, structured, and delivered before the session so you can review in advance.' },
  { number: '04', title: 'Execute',  desc: 'Once a decision is made, we handle transaction management, negotiation, documentation oversight, and closing — ensuring nothing falls through the cracks.', detail: 'Our execution team coordinates lawyers, agents, surveyors, and all third parties on your behalf.' },
  { number: '05', title: 'Deliver',  desc: 'We don\'t disappear at closing. Post-transaction, we provide a full handover report, and remain available for post-acquisition guidance and portfolio review.', detail: 'Every client receives a 90-day post-acquisition check-in and an annual portfolio review invitation.' },
]

export default function ProcessSection() {
  return (
    <section id="process" className="section-pad" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>How We Work</div>
          <div className="gold-rule-center" style={{ marginBottom: 24 }} />
          <h2 className="section-title" style={{ color: 'var(--color-text)' }}>Our Proven Process</h2>
          <p className="section-subtitle" style={{ margin: '16px auto 0', color: 'var(--color-text-muted)' }}>A rigorous, repeatable framework that turns complexity into clarity — and clarity into results.</p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0"
            style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,49,49,0.2), rgba(255,49,49,0.4), rgba(255,49,49,0.2), transparent)', zIndex: 0 }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div key={step.number}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{ width: 64, height: 64, borderRadius: '50%', border: '1px solid rgba(255,49,49,0.3)', background: 'var(--color-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                  <span style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: '1rem', fontWeight: 500, color: '#ff3131', letterSpacing: '0.05em' }}>{step.number}</span>
                </div>
                <h3 style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: '1.1rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: 14, letterSpacing: '0.03em' }}>{step.title}</h3>
                <p style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: '0.84rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 16 }}>{step.desc}</p>
                <p style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: '0.75rem', fontWeight: 300, color: 'var(--color-text-muted)', opacity: 0.8, lineHeight: 1.7, paddingTop: 12, borderTop: '1px solid rgba(255,49,49,0.08)' }}>{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div className="text-center mt-20" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}>
          <button className="btn-primary" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Begin Your Discovery Session
          </button>
        </motion.div>
      </div>
    </section>
  )
}
