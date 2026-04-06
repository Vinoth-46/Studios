import { Sparkles } from 'lucide-react'

const items = [
  'Restaurants', 'Gyms & Fitness', 'E-Commerce', 'Corporate Sites',
  'Startups', 'Local Business', 'Portfolios', 'Landing Pages'
]

export default function Ticker() {
  const renderItems = () =>
    items.map((item, i) => (
      <span key={i}>
        {i > 0 && <span className="dot"><Sparkles size={12} /></span>}
        <span>{item}</span>
      </span>
    ))

  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {renderItems()}
        <span className="dot"><Sparkles size={12} /></span>
        {renderItems()}
        <span className="dot"><Sparkles size={12} /></span>
      </div>
    </div>
  )
}
