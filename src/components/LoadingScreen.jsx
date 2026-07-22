import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2400)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      key="loading"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
        style={{ background: '#09152e' }}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 2.0, ease: [0.87, 0, 0.13, 1] }}
      >
        {/* Logo image */}
        <motion.div
          className="relative flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/images/logo.png"
            alt="Glavin Homes & Properties"
            style={{ height: 72, width: 'auto', objectFit: 'contain' }}
          />

          {/* Red line wipe */}
          <motion.div
            style={{ height: '1px', background: '#ff3131', marginTop: 20 }}
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Tagline */}
          <motion.div
            style={{
              fontFamily: 'Josefin Sans, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 500,
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              color: '#686f9a',
              marginTop: 14,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            Homes &amp; Properties
          </motion.div>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="absolute bottom-12 left-1/2"
          style={{ transform: 'translateX(-50%)', width: 120 }}
        >
          <div style={{ height: '1px', background: 'rgba(255,49,49,0.15)', borderRadius: 1 }}>
            <motion.div
              style={{ height: '100%', background: '#ff3131', borderRadius: 1, originX: 0 }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </motion.div>
      </motion.div>
  )
}
