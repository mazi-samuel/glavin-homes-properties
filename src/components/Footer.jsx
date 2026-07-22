import { motion } from 'framer-motion'
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react'

const navColumns = [
  {
    title: 'Services',
    links: [
      'Property Advisory',
      'Investment Consulting',
      'Market Research',
      'Project Marketing',
      'Valuations',
      'Portfolio Management',
    ],
  },
  {
    title: 'Company',
    links: ['About Us', 'Our Team', 'Case Studies', 'Insights', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  },
]

const socials = [
  {
    icon: Instagram,
    href: 'https://instagram.com/glavinhomes',
    label: 'Instagram',
  },
  {
    icon: Facebook,
    href: 'https://facebook.com/glavinhomes',
    label: 'Facebook',
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/glavinhomes',
    label: 'X / Twitter',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/company/glavinhomes',
    label: 'LinkedIn',
  },
]

function TikTokIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.02a8.19 8.19 0 0 0 4.79 1.53V7.12a4.85 4.85 0 0 1-1.03-.43z" />
    </svg>
  )
}

const linkStyle = {
  fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
  fontSize: '0.82rem',
  fontWeight: 300,
  color: 'var(--color-text-muted)',
  textDecoration: 'none',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  textAlign: 'left',
  transition: 'color 0.3s',
  display: 'block',
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid rgba(255,49,49,0.08)',
        paddingTop: 72,
        paddingBottom: 36,
      }}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          <div style={{ maxWidth: 360 }}>
            {/* Logo image in Footer */}
            <button onClick={scrollToTop} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <img
                src="/images/logo.png"
                alt="Glavin Homes & Properties"
                style={{ height: 96, width: 'auto', objectFit: 'contain' }}
              />
            </button>

            <div style={{ width: 32, height: 1, background: '#ff3131', margin: '20px 0' }} />

            <p
              style={{
                fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 300,
                color: 'var(--color-text-muted)',
                lineHeight: 1.8,
              }}
            >
              Lagos's premier real estate advisory firm — delivering sophisticated
              counsel, rigorous research, and exceptional outcomes. RC 7090056.
            </p>

            <div className="flex items-center gap-4 mt-8">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#686f9a',
                    transition: 'border-color 0.3s, color 0.3s, background 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,49,49,0.4)'
                    e.currentTarget.style.color = '#ff3131'
                    e.currentTarget.style.background = 'rgba(255,49,49,0.06)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.color = '#686f9a'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  }}
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}

              <a
                href="https://tiktok.com/@glavinhomes"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#686f9a',
                  transition: 'border-color 0.3s, color 0.3s, background 0.3s',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,49,49,0.4)'
                  e.currentTarget.style.color = '#ff3131'
                  e.currentTarget.style.background = 'rgba(255,49,49,0.06)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.color = '#686f9a'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                }}
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
            {navColumns.map((col) => (
              <div key={col.title}>
                <div
                  style={{
                    fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: '#F5F0E8',
                    marginBottom: 20,
                  }}
                >
                  {col.title}
                </div>
                <nav className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <button
                      key={link}
                      style={linkStyle}
                      onMouseEnter={(e) => { e.target.style.color = '#ff3131' }}
                      onMouseLeave={(e) => { e.target.style.color = 'var(--color-text-muted)' }}
                    >
                      {link}
                    </button>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,49,49,0.08)' }}
        >
          <p style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: '0.75rem', fontWeight: 300, color: 'var(--color-text-muted)', opacity: 0.8 }}>
            © {new Date().getFullYear()} Glavin Homes &amp; Properties Ltd (RC 7090056). All rights reserved.
          </p>
          <p style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: '0.75rem', fontWeight: 300, color: 'var(--color-text-muted)', opacity: 0.6, textAlign: 'right' }}>
            21A Pa Shekoni Street, Sangotedo, Lagos · +234 803 307 8542 · +234 803 476 1081
          </p>
        </div>
      </div>
    </footer>
  )
}
