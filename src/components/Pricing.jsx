import { motion } from 'framer-motion'
import { Check, Zap, Rocket, Building, ShieldCheck } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    tagline: 'Ideal for Small Cafés & Personal Sites',
    price: '₹7,000',
    icon: <Zap size={24} />,
    features: [
      'Single Page Design',
      'Fully Responsive Layout',
      'Basic SEO Optimization',
      'Contact Form Integration',
      'Domain & Hosting Setup',
      '2 Weeks Support'
    ],
    highlight: false
  },
  {
    name: 'Professional',
    tagline: 'Best for Local Businesses & Gyms',
    price: '₹21,000',
    icon: <Rocket size={24} />,
    features: [
      'Up to 5 Custom Pages',
      'Premium UI/UX Design',
      'Speed & Performance Focus',
      'Google Maps & Analytics',
      'Social Media Integration',
      '1 Month Premium Support'
    ],
    highlight: true
  },
  {
    name: 'Enterprise',
    tagline: 'Advanced E-Commerce & Systems',
    price: '₹35,000',
    icon: <Building size={24} />,
    features: [
      'Full Online Store (E-Commerce)',
      'Secure Payment Gateway',
      'Inventory Management',
      'WhatsApp API Integration',
      'Advanced On-Page SEO',
      '3 Months Priority Support'
    ],
    highlight: false
  }
]



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

export default function Pricing() {
  return (
    <section id="pricing">
      <motion.div
        className="pricing-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="label">Pricing Models</div>
        <h2 className="sec-title">Tailored investments for your digital future.</h2>
        <p className="sec-sub">Simple, transparent pricing with no hidden fees. Choose the plan that fits your vision.</p>
      </motion.div>

      <motion.div
        className="pricing-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={`pricing-card ${plan.highlight ? 'recommended' : ''}`}
            variants={cardVariants}
          >
            {plan.highlight && <div className="p-badge">Most Popular</div>}
            
            <div className="p-icon">{plan.icon}</div>
            <h3>{plan.name}</h3>
            <p className="p-tagline">{plan.tagline}</p>
            
            <div className="p-price">
              <span className="p-amount">{plan.price}</span>
              <span className="p-per">/ project</span>
            </div>

            <ul className="p-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <Check size={14} className="check-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a 
              href={`https://wa.me/919944379876?text=Hi%20Triova%2C%20I%20want%20to%20get%20started%20with%20the%20${plan.name}%20Pack%20(${plan.price}).`}
              className={`p-btn ${plan.highlight ? 'p-btn-primary' : 'p-btn-outline'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started <ShieldCheck size={14} />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
