import type { CSSProperties, ReactNode } from 'react'

export function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="icon"><path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="icon"><path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  )
}

export function Mark() {
  return <a className="brand-mark" href="#top" aria-label="Anh Nguyen, back to top">AN<span>.</span></a>
}

export function SectionHeading({ eyebrow, title, children, id }: { eyebrow: string; title: string; children?: ReactNode; id?: string }) {
  return (
    <div className="section-heading" id={id}>
      <div><span className="eyebrow"><i />{eyebrow}</span><h2>{title}</h2></div>
      {children && <div className="section-heading-aside">{children}</div>}
    </div>
  )
}

export function Sparkline({ values, id, large = false }: { values: number[]; id: string; large?: boolean }) {
  const min = Math.min(...values)
  const max = Math.max(...values)
  const points = values.map((value, index) => `${(index / (values.length - 1)) * 100},${94 - ((value - min) / (max - min || 1)) * 82}`).join(' ')
  const fillPoints = `0,100 ${points} 100,100`
  return (
    <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" className={`sparkline ${large ? 'sparkline-large' : ''}`}>
      <defs><linearGradient id={`fill-${id}`} x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="var(--chart)" stopOpacity=".21"/><stop offset="100%" stopColor="var(--chart)" stopOpacity="0"/></linearGradient></defs>
      <polygon points={fillPoints} fill={`url(#fill-${id})`} />
      <polyline points={points} fill="none" stroke="var(--chart)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Stat({ label, value, note }: { label: string; value: string; note: string }) {
  return <div className="stat-item"><span>{label}</span><strong>{value}</strong><small>{note}</small></div>
}

export function ChartCard({ symbol, name, value, change, unit, values, tone = 'positive' }: { symbol: string; name: string; value: string; change: string; unit: string; values: number[]; tone?: 'positive' | 'neutral' | 'negative' }) {
  const style = { '--chart': tone === 'negative' ? '#d88778' : tone === 'neutral' ? '#9ba6a1' : '#bda477' } as CSSProperties
  return (
    <article className="market-card" style={style}>
      <div className="market-card-top"><span className="ticker">{symbol}</span><span className="market-change">{change}</span></div>
      <p className="market-name">{name}</p>
      <div className="market-value-row"><strong>{value}</strong><span>{unit}</span></div>
      <div className="market-chart"><Sparkline values={values} id={symbol} /></div>
    </article>
  )
}
