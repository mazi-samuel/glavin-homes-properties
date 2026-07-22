import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react'

const interests = [
  'Property Acquisition',
  'Investment Consulting',
  'Portfolio Management',
  'Project Marketing',
  'Valuation & Appraisal',
  'Corporate Real Estate',
  'Market Research',
  'Due Diligence',
]

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_YOUR_ID'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again or call us directly.')
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputBase = {
    background: 'var(--color-surface-2)',
    border: '1px solid var(--color-border-subtle)',
    borderRadius: 2,
    padding: '14px 16px',
    fontFamily: 'Josefin Sans, sans-serif',
    fontSize: '0.9rem',
    fontWeight: 300,
    color: 'var(--color-text)',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.3s',
  }

  const labelBase = {
    fontFamily: 'Josefin Sans, sans-serif',
    fontSize: '0.7rem',
    fontWeight: 600,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--color-text-muted)',
    display: 'block',
    marginBottom: 8,
  }

  return (
    <section
      id="contact"
      className="section-pad animate-fade-in"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="eyebrow" style={{ marginBottom: 20 }}>Get In Touch</div>
          <div className="gold-rule-center" style={{ marginBottom: 24 }} />
          <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto 20px', color: 'var(--color-text)' }}>
            Begin Your Property Journey
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', color: 'var(--color-text-muted)' }}>
            Every great outcome starts with a single conversation. Tell us about your goals — 
            our team will be in touch within one business day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left: Contact Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: 2,
                padding: '36px',
                marginBottom: 24,
              }}
            >
              <h3
                style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'var(--color-text)',
                  marginBottom: 28,
                  letterSpacing: '0.05em',
                }}
              >
                Our Office
              </h3>

              {[
                {
                  icon: MapPin,
                  label: 'Address',
                  value: '21A Pa Shekoni Street\nSangotedo, Lagos, Nigeria',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+234 803 307 8542\n+234 803 476 1081',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'hello@glavinhomes.com',
                },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex gap-4 mb-6 last:mb-0"
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'rgba(255,49,49,0.08)',
                      border: '1px solid rgba(255,49,49,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <Icon size={14} color="#ff3131" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div style={{ ...labelBase, marginBottom: 4 }}>{label}</div>
                    <div
                      style={{
                        fontFamily: 'Josefin Sans, sans-serif',
                        fontSize: '0.88rem',
                        fontWeight: 300,
                        color: 'var(--color-text-muted)',
                        lineHeight: 1.6,
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 2,
                padding: '24px',
              }}
            >
              <div style={{ ...labelBase, color: '#ff3131', marginBottom: 12 }}>
                Office Hours
              </div>
              {[
                ['Monday – Friday', '8:00am – 6:00pm'],
                ['Saturday', '9:00am – 2:00pm'],
                ['Sunday', 'By Appointment Only'],
              ].map(([day, hours]) => (
                <div
                  key={day}
                  className="flex justify-between"
                  style={{
                    fontFamily: 'Josefin Sans, sans-serif',
                    fontSize: '0.82rem',
                    fontWeight: 300,
                    color: 'var(--color-text-muted)',
                    paddingBottom: 8,
                    marginBottom: 8,
                    borderBottom: '1px solid var(--color-border-subtle)',
                  }}
                >
                  <span>{day}</span>
                  <span style={{ color: 'var(--color-text)' }}>{hours}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center text-center h-full"
                style={{ minHeight: 400, padding: '60px 40px' }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    background: 'rgba(255,49,49,0.1)',
                    border: '1px solid rgba(255,49,49,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 28,
                  }}
                >
                  <CheckCircle size={30} color="#ff3131" strokeWidth={1.5} />
                </div>
                <h3
                  style={{
                    fontFamily: 'Cinzel, serif',
                    fontSize: '1.4rem',
                    fontWeight: 500,
                    color: 'var(--color-text)',
                    marginBottom: 14,
                  }}
                >
                  Message Received
                </h3>
                <p
                  style={{
                    fontFamily: 'Josefin Sans, sans-serif',
                    fontSize: '0.95rem',
                    fontWeight: 300,
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.8,
                    maxWidth: 380,
                  }}
                >
                  Thank you for reaching out. A member of our advisory team will be in contact
                  within one business day.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" style={labelBase}>Full Name <span style={{ color: '#ff3131' }}>*</span></label>
                    <input
                      id="name" name="name" type="text" required
                      placeholder="Your full name"
                      style={{ ...inputBase }}
                      onFocus={(e) => { e.target.style.borderColor = '#ff3131' }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--color-border-subtle)' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={labelBase}>Email Address <span style={{ color: '#ff3131' }}>*</span></label>
                    <input
                      id="email" name="email" type="email" required
                      placeholder="your@email.com"
                      style={{ ...inputBase }}
                      onFocus={(e) => { e.target.style.borderColor = '#ff3131' }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--color-border-subtle)' }}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" style={labelBase}>Phone Number</label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="+234 ..."
                      style={{ ...inputBase }}
                      onFocus={(e) => { e.target.style.borderColor = '#ff3131' }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--color-border-subtle)' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" style={labelBase}>Area of Interest</label>
                    <select
                      id="interest" name="interest"
                      style={{
                        ...inputBase,
                        cursor: 'pointer',
                        appearance: 'none',
                        WebkitAppearance: 'none',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ff3131' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 16px center',
                        paddingRight: '40px',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = '#ff3131' }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--color-border-subtle)' }}
                    >
                      <option value="" style={{ background: 'var(--color-surface)' }}>Select a service...</option>
                      {interests.map((i) => (
                        <option key={i} value={i} style={{ background: 'var(--color-surface)' }}>{i}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: 32 }}>
                  <label htmlFor="message" style={labelBase}>Your Message <span style={{ color: '#ff3131' }}>*</span></label>
                  <textarea
                    id="message" name="message" required
                    rows={5}
                    placeholder="Tell us about your goals, timeline, and any specific questions..."
                    style={{
                      ...inputBase,
                      resize: 'vertical',
                      minHeight: 130,
                    }}
                    onFocus={(e) => { e.target.style.borderColor = '#ff3131' }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--color-border-subtle)' }}
                  />
                </div>

                {error && (
                  <p
                    style={{
                      color: '#ff3131',
                      fontFamily: 'Josefin Sans, sans-serif',
                      fontSize: '0.82rem',
                      marginBottom: 16,
                    }}
                  >
                    {error}
                  </p>
                )}

                <div className="flex items-center gap-6">
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={loading}
                    style={{ opacity: loading ? 0.7 : 1, gap: 12 }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                    {!loading && <ArrowRight size={16} />}
                  </button>
                  <p
                    style={{
                      fontFamily: 'Josefin Sans, sans-serif',
                      fontSize: '0.75rem',
                      fontWeight: 300,
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    We respond within 1 business day.
                  </p>
                </div>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
