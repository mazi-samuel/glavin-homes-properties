import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Clock, X } from 'lucide-react'

const articles = [
  {
    id: 1,
    category: 'Market Intelligence',
    title: 'The Rise of Eko Atlantic: What It Means for Lagos Real Estate in 2025/2026',
    excerpt: 'As infrastructure delivery accelerates, we examine how Eko Atlantic is reshaping premium land values across Victoria Island and what investors should expect over the next 36 months.',
    date: 'July 2025',
    readTime: '8 min read',
    tag: 'Research',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: 1.8, fontSize: '0.95rem', fontWeight: 300, color: 'var(--color-text-muted)' }}>
        <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--color-text)', fontStyle: 'italic', borderLeft: '2px solid #ff3131', paddingLeft: '16px', marginBottom: '8px' }}>
          The transformation of the Atlantic coastline into a modern financial and residential hub is no longer a distant vision—it is an active economic engine driving coastal real estate. As infrastructure delivery accelerates across Eko Atlantic City, the ripple effects are reshaping premium land values, rental yields, and investor sentiment across Victoria Island, Ikoyi, and Lekki Phase 1.
        </p>

        <h4 style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '16px' }}>
          The Infrastructure Catalyst
        </h4>
        <p>
          What differentiates Eko Atlantic from traditional West African real estate developments is its self-sustaining infrastructure model. Equipped with independent power generation, state-of-the-art stormwater drainage systems, and a dedicated sewage collection facility, the city provides institutional-grade operational stability.
        </p>
        <p>
          As Phase 1 and Phase 2 commercial/residential towers reach high occupancy, high-net-worth individuals (HNWIs) and multinational corporations are shifting their primary footprints toward these resilient coastal developments.
        </p>

        <h4 style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '16px' }}>
          Market Spillover: Victoria Island & Ikoyi
        </h4>
        <p>
          The rise of Eko Atlantic has created a distinct dual-tier market across neighboring districts:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <li>
            <strong>Victoria Island Commercial Real Estate:</strong> Legacy VI commercial properties are undergoing adaptive reuse to stay competitive against Eko Atlantic’s Grade-A office spaces. Rents in primary VI nodes have experienced steady upward pressure, serving as secondary hubs for support services.
          </li>
          <li>
            <strong>Capital Appreciation Trends:</strong> Land values along the Ahmadu Bello Way corridor and primary VI thoroughfares have seen a projected <strong>18% to 25% value surge</strong>, driven by proximity to the new financial district.
          </li>
          <li>
            <strong>Rental Yield Shift:</strong> Luxury residential apartments in adjacent zones are reporting compressed vacancy rates, as foreign executives and tech founders favor luxury units within a 10-minute commute to Eko Atlantic.
          </li>
        </ul>

        <h4 style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '16px' }}>
          36-Month Outlook for Investors
        </h4>
        <p>
          Over the next 36 months, institutional capital allocation in Lagos real estate is expected to concentrate around three primary strategies:
        </p>
        <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <li><strong>Mixed-Use Coastal Assets:</strong> Capitalizing on high demand for integrated live-work-play developments.</li>
          <li><strong>Short-Let and Hospitality Real Estate:</strong> High turnover rates in premium short-term rentals catering to international business travelers.</li>
          <li><strong>Infrastructure-Backed Developments:</strong> Prioritizing developments that feature off-grid power, advanced flood protection, and smart utility management.</li>
        </ol>

        <blockquote style={{ background: 'var(--color-surface)', borderLeft: '4px solid #ff3131', padding: '16px 24px', margin: '16px 0', borderRadius: '2px', color: 'var(--color-text)' }}>
          <strong>Key Takeaway:</strong> Eko Atlantic is not replacing Victoria Island; it is elevating the entire southern peninsula into a unified mega-financial hub. Early investors who position capital in adjoining corridors stand to capture significant beta returns over the coming cycle.
        </blockquote>
      </div>
    )
  },
  {
    id: 2,
    category: 'Investment Strategy',
    title: 'Off-Plan vs. Built: A Framework for Risk-Adjusted Returns in the Lagos Market',
    excerpt: 'Our research team breaks down the return profiles, risk considerations, and execution requirements for both approaches — with data from 40+ transactions over the past three years.',
    date: 'June 2025',
    readTime: '11 min read',
    tag: 'Analysis',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: 1.8, fontSize: '0.95rem', fontWeight: 300, color: 'var(--color-text-muted)' }}>
        <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--color-text)', fontStyle: 'italic', borderLeft: '2px solid #ff3131', paddingLeft: '16px', marginBottom: '8px' }}>
          Navigating the Lagos real estate market requires balancing two core investment approaches: Off-Plan acquisitions and Completed (Built) property purchases. While off-plan entry prices offer steep capital gains potential, completed assets deliver immediate yield and zero development risk.
        </p>
        <p>
          Drawing from dataset observations across 40+ high-tier residential and commercial transactions over the past three years, our research team breaks down the true risk-adjusted return profiles for both vehicles.
        </p>

        <h4 style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '16px' }}>
          Comparative Framework
        </h4>
        <div style={{ overflowX: 'auto', margin: '16px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', color: 'var(--color-text)' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-border)', textAlign: 'left' }}>
                <th style={{ padding: '12px', fontWeight: 600 }}>Metric</th>
                <th style={{ padding: '12px', fontWeight: 600 }}>Off-Plan Strategy</th>
                <th style={{ padding: '12px', fontWeight: 600 }}>Built Property Strategy</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                <td style={{ padding: '12px', fontWeight: 500 }}>Entry Capital Barrier</td>
                <td style={{ padding: '12px' }}>Lower (Staggered payment plans)</td>
                <td style={{ padding: '12px' }}>Higher (Full capital required)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                <td style={{ padding: '12px', fontWeight: 500 }}>Yield Timeline</td>
                <td style={{ padding: '12px' }}>Delayed (18–36 months)</td>
                <td style={{ padding: '12px' }}>Immediate cash flow</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                <td style={{ padding: '12px', fontWeight: 500 }}>Primary Alpha Source</td>
                <td style={{ padding: '12px' }}>Pre-construction discount & equity creation</td>
                <td style={{ padding: '12px' }}>Rental appreciation & asset security</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                <td style={{ padding: '12px', fontWeight: 500 }}>Execution Risk</td>
                <td style={{ padding: '12px' }}>Medium to High (Developer delivery risk)</td>
                <td style={{ padding: '12px' }}>Low (Asset is verified and tangible)</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', fontWeight: 500 }}>Inflation Protection</td>
                <td style={{ padding: '12px' }}>Sensitive to raw material price escalation</td>
                <td style={{ padding: '12px' }}>Fixed immediate physical asset</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '16px' }}>
          The Off-Plan Equation: Capturing Pre-Construction Equity
        </h4>
        <p>
          Off-plan purchasing remains a favorite for growth-oriented investors looking to create instant equity upon project completion.
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <li><strong>The Upside:</strong> Historically, well-managed off-plan projects in core Lagos hubs (Ikoyi, Lekki Phase 1, Victoria Island) deliver between <strong>22% and 35% capital growth</strong> from groundbreaking to key handover.</li>
          <li><strong>The Risks:</strong> Developer insolvency, supply chain delays, and design deviations.</li>
          <li><strong>Mitigation Protocol:</strong> Investors must mandate escrow-backed milestone releases, review structural engineering approvals, and partner with developers boasting proven multi-project completion track records.</li>
        </ul>

        <h4 style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '16px' }}>
          The Built Property Advantage: Immediate Cash Flow & Security
        </h4>
        <p>
          For institutional funds, family offices, and income-focused investors, completed physical structures remove construction variables entirely.
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <li><strong>The Upside:</strong> Immediate deployment onto tenant markets allows for instant rental yield capture. In high-demand Lagos corridors, net yields currently range between <strong>7% and 11% p.a.</strong> on long-term residential leases, with short-let strategies yielding higher top-line revenue.</li>
          <li><strong>The Risks:</strong> Age-related capital expenditure (CapEx), hidden structural defects, and tenant default risks.</li>
          <li><strong>Mitigation Protocol:</strong> Rigorous physical integrity inspections, title perfection audits, and structured property management agreements.</li>
        </ul>

        <h4 style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '16px' }}>
          Strategic Recommendation
        </h4>
        <ul style={{ listStyleType: 'circle', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <li><strong>Growth Stage Investors (3–5 Year Horizon):</strong> Allocate <strong>60% to Off-Plan</strong> (tier-1 developers only) and <strong>40% to Built</strong> assets to balance capital creation with downside protection.</li>
          <li><strong>Income-Focused Investors:</strong> Maintain <strong>80%+ in Completed/Built assets</strong> in established prime locations to lock in immediate dividend-style cash flows.</li>
        </ul>
      </div>
    )
  },
  {
    id: 3,
    category: 'Regulatory Update',
    title: 'Understanding the Lagos Land Use Charge Reforms and Their Impact on Property Costs',
    excerpt: 'The 2025 LUC amendments have significant implications for property holding costs across Lagos. We explain what changed, what it means for landlords, and how to optimise your position.',
    date: 'May 2025',
    readTime: '6 min read',
    tag: 'Regulatory',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: 1.8, fontSize: '0.95rem', fontWeight: 300, color: 'var(--color-text-muted)' }}>
        <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--color-text)', fontStyle: 'italic', borderLeft: '2px solid #ff3131', paddingLeft: '16px', marginBottom: '8px' }}>
          Property taxation across Lagos State operates under the unified Land Use Charge (LUC) framework, which consolidates traditional ground rents, tenement rates, and neighborhood improvement levies into a single annual payment. Recent administrative reforms and enforcement measures surrounding LUC assessments directly influence holding costs, net rental yields, and property valuation frameworks across commercial and residential sectors.
        </p>

        <h4 style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '16px' }}>
          Key Highlights of the Regulatory Framework
        </h4>
        <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <li>
            <strong>Consolidated Taxation Structure:</strong>
            <p style={{ marginTop: '4px' }}>The Land Use Charge replaces fragmented municipal levies with a centralized assessment system managed under state tax authority guidelines.</p>
          </li>
          <li>
            <strong>Assessment Methodology:</strong>
            <p style={{ marginTop: '4px' }}>LUC is calculated based on the assessed market value of the property rather than arbitrary flat rates. The calculation formula incorporates:</p>
            <div style={{ background: 'var(--color-surface)', padding: '16px', margin: '12px 0', border: '1px solid var(--color-border-subtle)', borderRadius: '2px', fontFamily: 'monospace', fontSize: '0.9rem', color: '#ff3131', textAlign: 'center' }}>
              Land Use Charge = Market Value × Charge Rate × Relief Rate
            </div>
          </li>
          <li>
            <strong>Usage Classification & Differential Rates:</strong>
            <p style={{ marginTop: '4px' }}>Charge rates vary significantly according to asset usage:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '6px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Owner-Occupied Residential: Enjoys the lowest rate tier and highest statutory relief discounts.</li>
              <li>Commercial Properties: Assessed at higher standard rates reflecting income generation.</li>
              <li>Industrial & Mixed-Use Properties: Rated on specialized operational scales.</li>
            </ul>
          </li>
        </ol>

        <h4 style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '16px' }}>
          Practical Implications for Landlords & Real Estate Investors
        </h4>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <li><strong>Impact on Net Rental Yields:</strong> Higher annual holding costs must be factored into gross-to-net yield projections. Failure to account for LUC during underwriting can reduce expected net returns by <strong>50 to 150 basis points</strong>.</li>
          <li><strong>Lease Agreement Restructuring:</strong> Modern commercial and multi-tenant residential leases are increasingly adopting <strong>triple-net (NNN) lease clauses</strong>, explicitly defining whether the landlord or tenant holds liability for statutory LUC payments.</li>
          <li><strong>Title Verification and Clearances:</strong> Properties with outstanding LUC arrears face encumbrances during secondary market sales or mortgage creation. Obtaining an official <strong>LUC Clearance Certificate</strong> is now a mandatory due diligence item in property acquisition.</li>
        </ul>

        <h4 style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif', fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-text)', marginTop: '16px' }}>
          How to Optimise Your Property Tax Position
        </h4>
        <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <li><strong>File for Statutory Reliefs:</strong> Ensure your property is registered correctly (e.g., applying for owner-occupier discounts, senior citizen exemptions, or early payment rebates).</li>
          <li><strong>Review Assessment Notices Promptly:</strong> If the government\'s assessed market value exceeds actual market realities, property owners have a statutory window to file an appeal through the Assessment Appeal Tribunal.</li>
          <li><strong>Automate Annual Payments:</strong> Leveraging early payment discount windows (often up to 15%) directly reduces total tax exposure annually.</li>
        </ol>
      </div>
    )
  },
]

function ArticleCard({ article, index, onOpen }) {
  return (
    <motion.article
      className="group relative"
      onClick={onOpen}
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
  const [selectedArticle, setSelectedArticle] = useState(null)

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
            <ArticleCard
              key={article.id}
              article={article}
              index={i}
              onOpen={() => setSelectedArticle(article)}
            />
          ))}
        </div>
      </div>

      {/* Luxury Article Modal Dialog */}
      <AnimatePresence>
        {selectedArticle && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedArticle(null)}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(9, 21, 46, 0.75)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '820px',
                maxHeight: '85vh',
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                overflowY: 'auto',
                boxShadow: '0 30px 90px rgba(0, 0, 0, 0.4)',
                zIndex: 1000,
              }}
            >
              {/* Header Banner */}
              <div
                style={{
                  padding: '36px 40px 24px',
                  borderBottom: '1px solid var(--color-border-subtle)',
                  background: 'var(--color-surface)',
                  position: 'sticky',
                  top: 0,
                  zIndex: 10,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '24px',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
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
                      {selectedArticle.tag}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                      {selectedArticle.date}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>·</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={12} /> {selectedArticle.readTime}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Montserrat, Poppins, Inter, sans-serif',
                      fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                      fontWeight: 500,
                      color: 'var(--color-text)',
                      lineHeight: 1.35,
                      letterSpacing: '0.01em',
                    }}
                  >
                    {selectedArticle.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedArticle(null)}
                  style={{
                    background: 'var(--color-surface-2)',
                    border: '1px solid var(--color-border-glass)',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--color-text)',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,49,49,0.3)'
                    e.currentTarget.style.color = '#ff3131'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-glass)'
                    e.currentTarget.style.color = 'var(--color-text)'
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body Content */}
              <div style={{ padding: '40px' }}>
                {selectedArticle.content}
              </div>

              {/* Footer CTA */}
              <div
                style={{
                  padding: '30px 40px',
                  borderTop: '1px solid var(--color-border-subtle)',
                  background: 'var(--color-surface)',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <button
                  className="btn-primary"
                  onClick={() => {
                    setSelectedArticle(null)
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Discuss This Opportunity
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
