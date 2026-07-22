import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'

const articles = [
  {
    id: 1,
    category: 'Market Intelligence',
    title: 'The Rise of Eko Atlantic: What It Means for Lagos Real Estate in 2025',
    excerpt: 'As infrastructure delivery accelerates, we examine how Eko Atlantic is reshaping premium land values across Victoria Island and what investors should expect over the next 36 months.',
    date: 'July 2025',
    readTime: '8 min read',
    tag: 'Research',
  },
  {
    id: 2,
    category: 'Investment Strategy',
    title: 'Off-Plan vs. Built: A Framework for Risk-Adjusted Returns in the Lagos Market',
    excerpt: 'Our research team breaks down the return profiles, risk considerations, and execution requirements for both approaches — with data from 40+ transactions over the past three years.',
    date: 'June 2025',
    readTime: '11 min read',
    tag: 'Analysis',
  },
  {
    id: 3,
    category: 'Regulatory Update',
    title: 'Understanding the Lagos Land Use Charge Reforms and Their Impact on Property Costs',
    excerpt: 'The 2025 LUC amendments have significant implications for property holding costs across Lagos. We explain what changed, what it means for landlords, and how to optimise your position.',
    date: 'May 2025',
    readTime: '6 min read',
    tag: 'Regulatory',
  },
]

function ArticleCard({ article, index }) {
  return (
    <motion.article
      className="group relative"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border-subtle)',
        borderRadius: 2,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'border-color 0.4s',
      }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,49,49,0.2)' }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border-subtle)' }}
    >
      <div
        style={{
          padding: '0 28px',
          paddingTop: 28,
          paddingBottom: 16,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid var(--color-border-subtle)',
        }}
      >
        <span
          style={{
            fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
            fontSize: '0.62rem',
            fontWeight: 600,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#ff3131',
            padding: '4px 12px',
            background: 'rgba(255,49,49,0.08)',
            border: '1px solid rgba(255,49,49,0.15)',
            borderRadius: 1,
          }}
        >
          {article.tag}
        </span>
        <div
          style={{
            fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
            fontSize: '0.7rem',
            color: 'var(--color-text-muted)',
          }}
        >
          {article.date}
        </div>
      </div>

      <div style={{ padding: '24px 28px 28px' }}>
        <div
          style={{
            fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
            fontSize: '0.68rem',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            marginBottom: 12,
          }}
        >
          {article.category}
        </div>

        <h3
          style={{
            fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
            fontSize: '1rem',
            fontWeight: 500,
            color: 'var(--color-text)',
            lineHeight: 1.45,
            marginBottom: 14,
            letterSpacing: '0.02em',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => { e.target.style.color = '#ff3131' }}
          onMouseLeave={(e) => { e.target.style.color = 'var(--color-text)' }}
        >
          {article.title}
        </h3>

        <p
          style={{
            fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
            fontSize: '0.83rem',
            fontWeight: 300,
            color: 'var(--color-text-muted)',
            lineHeight: 1.8,
            marginBottom: 24,
          }}
        >
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock size={12} color="var(--color-text-muted)" />
            <span
              style={{
                fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
                fontSize: '0.7rem',
                color: 'var(--color-text-muted)',
              }}
            >
              {article.readTime}
            </span>
          </div>
          <div
            style={{
              fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 500,
              color: '#ff3131',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              transition: 'gap 0.3s',
            }}
          >
            Read More <ArrowRight size={12} />
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function InsightsSection() {
  return (
    <section id="insights" className="section-pad" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Market Intelligence</div>
            <div className="gold-rule" style={{ marginBottom: 24 }} />
            <h2 className="section-title" style={{ color: 'var(--color-text)' }}>Insights &amp; Research</h2>
          </div>
          <button
            className="btn-secondary"
            style={{ alignSelf: 'flex-end', whiteSpace: 'nowrap' }}
          >
            View All Insights
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
