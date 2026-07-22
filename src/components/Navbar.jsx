import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'Our Work',   href: '#case-studies' },
  { label: 'Process',    href: '#process' },
  { label: 'Insights',   href: '#insights' },
]

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[100]"
        style={{
          background: scrolled ? 'var(--color-glass)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(255,49,49,0.08)'
            : '1px solid transparent',
          transition: 'background 0.5s ease, backdrop-filter 0.5s ease, border-color 0.5s ease',
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container flex items-center justify-between" style={{ height: 110 }}>

          {/* Logo image (Increased height for visibility) */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          >
            <img
              src="/images/logo.png"
              alt="Glavin Homes & Properties"
              style={{ height: 55, width: 'auto', objectFit: 'contain' }}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="relative group"
                style={{
                  fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-muted)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px 0',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--color-text)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--color-text-muted)')}
              >
                {link.label}
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '1px',
                    width: 0,
                    background: '#ff3131',
                    transition: 'width 0.3s cubic-bezier(0.16,1,0.3,1)',
                  }}
                  className="group-hover:w-full"
                />
              </button>
            ))}
          </nav>

          {/* CTA & Theme toggle */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-text)',
                padding: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              {isDark ? <Sun size={20} color="#ff3131" /> : <Moon size={20} color="#4d568d" />}
            </button>

            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary"
              style={{ padding: '12px 28px', fontSize: '0.7rem' }}
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile elements */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-text)',
                padding: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {isDark ? <Sun size={20} color="#ff3131" /> : <Moon size={20} color="#4d568d" />}
            </button>

            <button
              className="flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ff3131', padding: 8 }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center"
            style={{ background: 'var(--color-bg)', backdropFilter: 'blur(20px)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Logo in mobile menu (Increased size) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{ marginBottom: 48 }}
            >
              <img src="/images/logo.png" alt="Glavin Homes & Properties" style={{ height: 50, width: 'auto' }} />
            </motion.div>

            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 + 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    letterSpacing: '0.1em',
                    color: 'var(--color-text)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#ff3131')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--color-text)')}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => handleNavClick('#contact')}
                className="btn-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                style={{ marginTop: 16 }}
              >
                Book Consultation
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
