export type Research = {
  id: string
  number: string
  category: string
  title: string
  subtitle: string
  thesis: string
  date: string
  chart: number[]
  methodology: string
  finding: string
  report: string
}

export const research: Research[] = [
  {
    id: 'equity', number: '01', category: 'Equity research', title: 'The quality of growth', subtitle: 'Company analysis · Research template',
    thesis: 'A framework for testing whether durable revenue growth translates into resilient cash generation and long-term value.',
    date: 'Working paper · Demo', chart: [24, 28, 26, 36, 34, 43, 39, 51, 54, 63, 58, 72],
    methodology: 'Placeholder: define the investment universe, analyze audited financial statements, compare peers, and run a scenario-based valuation.',
    finding: 'Pending original research. No company view, valuation, price target, or investment recommendation is presented.', report: '/research/equity-quality-of-growth.md',
  },
  {
    id: 'macro', number: '02', category: 'Global macro', title: 'Rates, dollar & risk appetite', subtitle: 'Cross-asset monitor · Research template',
    thesis: 'A repeatable way to frame how changes in real yields and the dollar can travel through global risk assets.',
    date: 'Working paper · Demo', chart: [73, 68, 75, 59, 63, 47, 54, 39, 45, 31, 34, 26],
    methodology: 'Placeholder: set a sample window, align daily total-return and yield series, test lead-lag relationships, then challenge results across regimes.',
    finding: 'Pending original research. The chart is illustrative only; it does not show a backtest or measured market relationship.', report: '/research/rates-dollar-risk.md',
  },
  {
    id: 'gold', number: '03', category: 'Gold & commodities', title: 'Gold as a portfolio diversifier', subtitle: 'Commodities · Research template',
    thesis: 'Explore how inflation, real rates and uncertainty may each shape gold’s role across different portfolio regimes.',
    date: 'Working paper · Demo', chart: [30, 28, 34, 31, 44, 39, 51, 49, 64, 57, 70, 75],
    methodology: 'Placeholder: compare gold returns with real rates, inflation surprises and equity drawdowns. Segment the sample by macro regime.',
    finding: 'Pending original research. No diversification benefit or hedge performance is claimed from this illustrative chart.', report: '/research/gold-portfolio-role.md',
  },
  {
    id: 'market', number: '04', category: 'Market research', title: 'Reading consumer & sector signals', subtitle: 'Field research · Research template',
    thesis: 'Combine primary interviews and channel checks with secondary data to build a clearer picture of demand and competition.',
    date: 'Working paper · Demo', chart: [27, 35, 31, 40, 45, 40, 51, 47, 61, 57, 67, 74],
    methodology: 'Placeholder: specify the decision question, sample and interview guide; document triangulation, bias and data limitations.',
    finding: 'Pending original research. This template contains no new market sizing or field findings.', report: '/research/consumer-sector-signals.md',
  },
]

export const experience = [
  {
    company: 'Bảo Tín Mạnh Hải', role: 'Product Management', date: 'Oct 2025 — Mar 2026',
    description: 'Managed product catalog and data quality, coordinated collection launches, tracked sales and inventory, and supported pricing and business reporting.',
    proof: '',
  },
  {
    company: 'Bảo Tín Mạnh Hải', role: 'Market Research', date: 'Dec 2023 — Sep 2025',
    description: 'Researched customer needs and competitors, prepared management and business planning reports, and monitored market trends for the jewelry sector.',
    proof: 'CV-documented outcomes: initiatives associated with a 72% period increase in orders, 116% growth in orders for a hero product line during a key retail period, and participation in 5 new product collections.',
  },
  {
    company: 'TopGia', role: 'Market Research', date: '1 month · dates not provided',
    description: 'Market research experience. More information about the scope and contributions will be added when available.',
    proof: '',
  },
  {
    company: 'Savills Vietnam', role: 'Market Research Intern', date: 'May — Sep 2023',
    description: 'Contributed to quarterly Hanoi and northern Vietnam real estate market reports; gathered online information and supported qualitative analysis.',
    proof: '',
  },
]

