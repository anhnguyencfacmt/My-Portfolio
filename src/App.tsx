import { useState } from 'react'
import { research, experience } from './data/content'
import { ArrowIcon, ChartCard, Mark, SectionHeading, Sparkline, Stat } from './components/ui'

const markets = [
  { symbol: 'XAU', name: 'Gold spot', value: '2,380.00', change: '+0.42%', unit: 'USD / oz', values: [22, 24, 23, 31, 29, 37, 36, 44, 42, 53, 57, 61] },
  { symbol: 'SPX', name: 'S&P 500', value: '5,460.00', change: '+0.31%', unit: 'index pts', values: [27, 24, 34, 31, 42, 38, 47, 43, 58, 55, 64, 69] },
  { symbol: 'US10Y', name: 'U.S. Treasury · 10Y', value: '4.25', change: '−3 bp', unit: '% yield', tone: 'neutral' as const, values: [68, 63, 70, 55, 59, 50, 58, 42, 46, 39, 43, 31] },
  { symbol: 'DXY', name: 'U.S. Dollar Index', value: '104.30', change: '−0.18%', unit: 'index pts', tone: 'neutral' as const, values: [69, 65, 71, 60, 55, 59, 48, 52, 40, 45, 37, 34] },
  { symbol: 'WTI', name: 'Crude oil · WTI', value: '78.20', change: '−0.64%', unit: 'USD / bbl', tone: 'negative' as const, values: [65, 70, 63, 59, 66, 54, 60, 45, 50, 40, 44, 31] },
]

const navItems = [
  ['About', '#about'], ['Research', '#research'], ['Markets', '#markets'], ['Experience', '#experience'], ['Education', '#education'], ['Contact', '#contact'],
]

function Navigation() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header sticky top-0 z-50">
      <nav className="nav-shell mx-auto flex items-center justify-between" aria-label="Main navigation">
        <Mark />
        <button className="mobile-menu-button" aria-expanded={open} aria-controls="primary-links" onClick={() => setOpen((current) => !current)}>
          <span>{open ? 'Close' : 'Menu'}</span><span className="menu-glyph" aria-hidden="true">{open ? '×' : '☰'}</span>
        </button>
        <div className={`nav-links ${open ? 'nav-links-open' : ''}`} id="primary-links">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-cv" href="/Anh-Nguyen-CV.pdf" download>Download CV <ArrowIcon diagonal /></a>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-inner mx-auto">
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow"><i />Hanoi, Vietnam <span className="eyebrow-separator">/</span> Finance &amp; markets</span>
          <h1 id="hero-title">Anh<br /><em>Nguyen.</em></h1>
          <p className="hero-position">Investment research, with a <span>long-term lens.</span></p>
          <p className="hero-intro">I’m a Master of Finance student at Foreign Trade University, building a research practice across equities, global macro and multi-asset markets.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#research">View research <ArrowIcon /></a>
            <a className="button button-quiet" href="/Anh-Nguyen-CV.pdf" download>Download CV <ArrowIcon diagonal /></a>
          </div>
          <div className="hero-interests"><span>FOCUS</span><p>Equity research <b>·</b> Global macro <b>·</b> Multi-asset</p></div>
        </div>
        <div className="hero-visual" aria-label="Illustrative asset allocation chart">
          <div className="visual-topline"><span>FIELD NOTE 001</span><span>RESEARCH PRACTICE</span></div>
          <div className="visual-graphic">
            <svg viewBox="0 0 460 390" fill="none" role="img" aria-labelledby="hero-chart-title hero-chart-desc">
              <title id="hero-chart-title">Illustrative cross-asset cycle chart</title>
              <desc id="hero-chart-desc">A conceptual line chart with no market data.</desc>
              <path d="M35 64H430M35 144H430M35 224H430M35 304H430" stroke="#293230" strokeWidth="1" strokeDasharray="2 7" />
              <path d="M35 35V342H430" stroke="#47504B" strokeWidth="1" />
              <path d="M35 277C79 260 94 287 129 244C164 201 188 224 220 178C255 128 268 166 301 119C335 70 368 102 398 64C410 50 420 46 430 41" stroke="#bfa77c" strokeWidth="2" />
              <path d="M35 277C79 260 94 287 129 244C164 201 188 224 220 178C255 128 268 166 301 119C335 70 368 102 398 64C410 50 420 46 430 41V342H35V277Z" fill="url(#heroFill)" />
              <path d="M35 246C82 225 103 249 140 208C177 167 197 193 232 148C265 106 287 119 318 87C353 52 388 73 430 52" stroke="#6b9382" strokeWidth="1.5" strokeDasharray="4 6" />
              <path d="M35 309C75 289 108 311 144 273C184 230 203 267 242 217C275 175 303 199 337 150C373 100 402 141 430 119" stroke="#919e98" strokeOpacity=".65" strokeWidth="1.5" />
              <circle cx="430" cy="41" r="4" fill="#bfa77c" /><circle cx="430" cy="41" r="9" stroke="#bfa77c" strokeOpacity=".22" />
              <defs><linearGradient id="heroFill" x1="232" y1="41" x2="232" y2="342" gradientUnits="userSpaceOnUse"><stop stopColor="#bfa77c" stopOpacity=".2"/><stop offset="1" stopColor="#bfa77c" stopOpacity="0"/></linearGradient></defs>
            </svg>
            <span className="chart-mark mark-top">RISK <span>↗</span></span>
            <span className="chart-mark mark-bottom">CYCLE <span>01</span></span>
            <span className="chart-y-label y-top">GROWTH</span><span className="chart-y-label y-bottom">VALUE</span>
          </div>
          <div className="visual-legend"><span><i className="legend-gold" />Equity</span><span><i className="legend-green" />Rates</span><span><i className="legend-grey" />Commodities</span></div>
          <div className="visual-caption"><span>FRAMEWORK, NOT FORECAST</span><span>FIG. 01</span></div>
        </div>
      </div>
      <div className="hero-bottom"><span>INDEPENDENT THINKING <i>·</i> EVIDENCE FIRST</span><a href="#about">Discover the work <span>↓</span></a></div>
    </section>
  )
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <SectionHeading eyebrow="A considered approach" title="Research starts with better questions."><span className="section-index">01 <i>—</i> ABOUT</span></SectionHeading>
        <div className="about-grid">
          <div className="about-lead"><p className="serif-lead">I turn market questions into a <em>clear, testable view.</em></p><p className="body-copy">My background brings together market research, product management and applied academic work. I’m now deepening that foundation through graduate finance study and independent investment research.</p><p className="body-copy">My process starts with the decision at hand, checks what the evidence can support, and makes uncertainty visible. Current interests span equity fundamentals, macro regimes, gold and portfolio construction.</p><a className="text-link" href="#contact">Get in touch <ArrowIcon /></a></div>
          <div className="about-details">
            <div className="detail-block"><span className="detail-label">RESEARCH LENS</span><ul className="lens-list"><li>Fundamentals &amp; quality of growth</li><li>Rates, inflation &amp; the dollar</li><li>Commodities &amp; multi-asset context</li><li>Primary research &amp; market structure</li></ul></div>
            <div className="detail-rule" />
            <div className="detail-block"><span className="detail-label">IN PRACTICE</span><p>Question → evidence → analysis → thesis<br /><span>Clear assumptions at each step.</span></p></div>
            <div className="detail-foot"><span>HANOI, VIETNAM</span><span>21°01′ N · 105°51′ E</span></div>
          </div>
        </div>
        <div className="stats-strip"><Stat label="Academic foundation" value="3.71 / 4.0" note="High distinction · NEU" /><Stat label="Research orientation" value="Multi-asset" note="Equity · macro · commodities" /><Stat label="Professional lens" value="3 disciplines" note="Research · product · strategy" /></div>
      </div>
    </section>
  )
}

function ResearchSection() {
  return (
    <section className="section research-section" id="research">
      <div className="container">
        <SectionHeading eyebrow="Selected work" title="Ideas in development."><span className="heading-note"><i className="status-dot" />4 RESEARCH TEMPLATES <b>·</b> ORIGINAL WORK IN PROGRESS</span></SectionHeading>
        <p className="section-intro">A research notebook spanning company fundamentals, macro conditions and market structure. Each brief is a clearly marked template until original analysis is published.</p>
        <div className="research-grid">
          {research.map((item) => <article className="research-card" key={item.id}>
            <div className="research-card-top"><span className="research-number">{item.number} <i>—</i> {item.category}</span><span className="research-date">{item.date}</span></div>
            <div className="research-chart" style={{ '--chart': '#bca477' } as React.CSSProperties}><Sparkline values={item.chart} id={`research-${item.id}`} large /><span className="chart-placeholder-label">ILLUSTRATIVE CHART <i>·</i> NO MARKET DATA</span></div>
            <div className="research-content"><span className="research-subtitle">{item.subtitle}</span><h3>{item.title}</h3><p className="research-thesis">{item.thesis}</p>
              <details className="brief-details"><summary>Method &amp; findings <span>+</span></summary><div className="brief-body"><span>METHOD</span><p>{item.methodology}</p><span>FINDINGS</span><p>{item.finding}</p></div></details>
              <div className="research-card-footer"><span className="draft-tag"><i /> Template · demo</span><a className="text-link" href={item.report} target="_blank" rel="noreferrer">Open report <ArrowIcon diagonal /></a></div>
            </div>
          </article>)}
        </div>
        <div className="research-footnote"><span>RESEARCH DISCLAIMER</span><p>These materials are sample structures, not investment recommendations. Illustrative charts contain no market data. Conclusions will be added only after the underlying analysis is complete.</p></div>
      </div>
    </section>
  )
}

function MarketDashboard() {
  return (
    <section className="section markets-section" id="markets">
      <div className="container">
        <SectionHeading eyebrow="Cross-asset monitor" title="A market snapshot, for illustration."><span className="section-index">02 <i>—</i> DASHBOARD</span></SectionHeading>
        <div className="demo-banner"><span className="demo-pulse" /> <strong>DEMO DATA</strong><span>All prices, changes and chart lines below are fictional placeholders. No live market feed.</span><span className="demo-asof">SAMPLE VIEW · NOT CURRENT</span></div>
        <div className="market-grid">{markets.map((market) => <ChartCard key={market.symbol} {...market} />)}</div>
        <div className="market-footer"><span>ASSET CLASS COVERAGE</span><span>Precious metals <i>·</i> Equities <i>·</i> Rates <i>·</i> FX <i>·</i> Energy</span><span className="market-clock"><i /> RESEARCH WATCHLIST</span></div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <SectionHeading eyebrow="Experience" title="Where research meets execution."><span className="section-index">03 <i>—</i> EXPERIENCE</span></SectionHeading>
        <div className="timeline">
          {experience.map((item, index) => <article className="timeline-item" key={`${item.company}-${item.role}`}>
            <div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span><i /></div>
            <div className="timeline-role"><span className="timeline-date">{item.date}</span><h3>{item.role}</h3><span className="timeline-company">{item.company}</span></div>
            <div className="timeline-description"><p>{item.description}</p>{item.proof && <span className="timeline-proof">{item.proof}</span>}</div>
          </article>)}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <SectionHeading eyebrow="Education & credentials" title="A foundation for independent thinking."><span className="section-index">04 <i>—</i> LEARNING</span></SectionHeading>
        <div className="education-grid">
          <div className="education-primary"><span className="detail-label">CURRENT STUDY</span><div className="education-line"><span>01</span><div><h3>Master of Finance</h3><p>Foreign Trade University</p><small>Hanoi, Vietnam · In progress</small></div><span className="education-mark">↗</span></div><div className="education-rule" /><div className="education-line"><span>02</span><div><h3>International Business Administration</h3><p>National Economics University</p><small>Advanced Educational Program · 100% English<br />Academic program with California State University, Long Beach</small></div></div><div className="education-gpa"><strong>3.71</strong><span>/ 4.0</span><i /> <span>High distinction</span></div></div>
          <div className="credentials"><span className="detail-label">PROFESSIONAL LEARNING</span><div className="credential-row"><span className="credential-mark">CFA</span><div><strong>CFA Program</strong><span>Level I candidate</span></div><span className="credential-arrow">↗</span></div><div className="credential-row"><span className="credential-mark">CMT</span><div><strong>Chartered Market Technician</strong><span>Level I</span></div><span className="credential-arrow">↗</span></div><div className="credential-row"><span className="credential-mark">IEL</span><div><strong>IELTS</strong><span>7.0 · 2023</span></div><span className="credential-arrow">↗</span></div><p className="credential-note">Candidate and learning status shown as provided. No charter or designation is implied.</p></div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-inner"><div><span className="eyebrow"><i />Start a conversation</span><h2>Good research begins<br />with <em>a good question.</em></h2><p>For research opportunities, collaboration, or a conversation about markets, I’d be glad to connect.</p></div><div className="contact-actions"><a className="button button-primary" href="mailto:anhng.aib.neu@gmail.com">Email Anh <ArrowIcon diagonal /></a><a className="button button-outline" href="/Anh-Nguyen-CV.pdf" download>Download CV <ArrowIcon diagonal /></a><span>HANOI, VIETNAM <i>·</i> GMT+7</span><p className="link-placeholder">LinkedIn profile link to be added</p></div></div>
    </section>
  )
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-inner"><Mark /><span>Independent investment research by Anh Nguyen.</span><span>© {new Date().getFullYear()} <i>·</i> HANOI, VIETNAM</span><a href="#top">BACK TO TOP ↑</a></div></footer>
}

export default function App() {
  return <><Navigation /><main><Hero /><About /><ResearchSection /><MarketDashboard /><Experience /><Education /><Contact /></main><Footer /></>
}

