import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, TrendingUp, BarChart3, Megaphone, Scale, Briefcase, MapPin, ShieldCheck, Home } from 'lucide-react'

const services = [
  { icon: Building2,   title: 'Property Development',        short: 'Preparing, subdivision, and building site construction.', detail: 'Formally licensed under CAC Objects (B) to design, subdivide, and construct residential/commercial sites, including layout paving, draining, site demolition, and complete equipping of prime real estate structures.' },
  { icon: Home,        title: 'Acquisition & Disposal',      short: 'Purchase, sale, and dealing in estates, houses, and land.', detail: 'Under CAC Objects (C), we facilitate the legal purchase, sale, leasing, and transaction advisory of land, residential estates, and commercial holdings under premium Nigerian land tenures.' },
  { icon: TrendingUp,  title: 'Investment Consulting',        short: 'Strategic guidance for building high-yield real estate portfolios.',  detail: 'Whether you\'re a first-time investor or managing a ₦500M portfolio, our investment consultants provide rigorous return modelling, risk assessment, and market timing insights.' },
  { icon: BarChart3,   title: 'Market Research & Intelligence',short: 'Deep-dive data on Lagos and Nigerian property trends.',               detail: 'Our proprietary market intelligence covers pricing trends, demand drivers, zoning developments, and emerging micro-markets — giving clients an unfair informational advantage.' },
  { icon: Megaphone,   title: 'Project Marketing & Advisory', short: 'Go-to-market strategy for new developments.',                        detail: 'We help developers position, price, and sell their projects — from concept branding and sales strategy through to launch execution and investor roadshows.' },
  { icon: Scale,       title: 'Valuations & Appraisals',      short: 'RICS-aligned valuations for transactions, finance, and tax.',        detail: 'Our certified valuers deliver comprehensive, court-ready property valuations for mortgage security, insurance, probate, litigation, and portfolio benchmarking.' },
  { icon: Briefcase,   title: 'Portfolio Management',         short: 'Active management of residential and commercial portfolios.',        detail: 'For institutional and HNW clients, we manage multi-asset property portfolios — optimising income, maintaining assets, managing tenants, and reporting performance quarterly.' },
  { icon: ShieldCheck, title: 'Legal Title Due Diligence',    short: 'Title verification, encumbrance checks, and compliance.',            detail: 'Under CAC Objects (D & E), our legal due diligence teams systematically verify title authenticity, identify encumbrances, and assess compliance risk to safeguard client investments.' },
]

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false)
  const Icon = service.icon

  return (
    <motion.div
      className="relative group"
      style={{
        background: hovered ? 'rgba(255,49,49,0.05)' : 'var(--color-surface)',
        border: `1px solid ${hovered ? 'rgba(255,49,49,0.25)' : 'var(--color-border-subtle)'}`,
        padding: '36px 32px',
        borderRadius: 2,
        cursor: 'pointer',
        transition: 'background 0.4s ease, border-color 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 60px rgba(0,0,0,0.15), 0 0 40px rgba(255,49,49,0.06)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Icon */}
      <div style={{ width: 48, height: 48, borderRadius: 2, background: hovered ? 'rgba(255,49,49,0.1)' : 'var(--color-surface-2)', border: `1px solid ${hovered ? 'rgba(255,49,49,0.3)' : 'var(--color-border-glass)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, transition: 'all 0.4s ease' }}>
        <Icon size={20} color={hovered ? '#ff3131' : 'var(--color-text-muted)'} strokeWidth={1.5} />
      </div>

      <h3 style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: '1rem', fontWeight: 500, color: hovered ? '#ff3131' : 'var(--color-text)', marginBottom: 12, letterSpacing: '0.02em', lineHeight: 1.3, transition: 'color 0.3s' }}>
        {service.title}
      </h3>

      <p style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: '0.85rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: hovered ? 20 : 0, transition: 'margin 0.3s' }}>
        {service.short}
      </p>

      <motion.div
        initial={false}
        animate={{ height: hovered ? 'auto' : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ overflow: 'hidden' }}
      >
        <div style={{ paddingTop: 4, borderTop: '1px solid rgba(255,49,49,0.12)' }}>
          <p style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: '0.82rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.8, paddingTop: 16 }}>
            {service.detail}
          </p>
        </div>
      </motion.div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, height: '2px', width: hovered ? '100%' : '0%', background: 'linear-gradient(90deg, #ff3131, transparent)', transition: 'width 0.5s cubic-bezier(0.16,1,0.3,1)', borderRadius: '0 0 0 2px' }} />
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="section-pad" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <motion.div className="mb-16" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>What We Do</div>
          <div className="gold-rule" style={{ marginBottom: 24 }} />
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="section-title" style={{ maxWidth: 500, color: 'var(--color-text)' }}>Corporate Mandates</h2>
            <p className="section-subtitle" style={{ maxWidth: 400, color: 'var(--color-text-muted)' }}>Authorized under legal objects to advise, acquire, subdivide, develop, and trade premium real estate holdings.</p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
