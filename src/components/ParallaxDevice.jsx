import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  UtensilsCrossed, Dumbbell, ShoppingCart, Building2,
  ChefHat, ShoppingBag, BarChart3, Monitor,
  Search, PenTool, Layers, Zap, Sparkles, Eye
} from 'lucide-react'

/*
  ParallaxDevice v3 — Slot-based parallax
  All screens now have unique live animations.
*/

// ═══════════════════════════════════════════════
// HERO SCREEN — Typing animation + loading bars
// ═══════════════════════════════════════════════
function ScreenHero() {
  const fullText = 'Triova'
  const [chars, setChars] = useState(0)
  const [barWidths, setBarWidths] = useState([0, 0, 0])
  const [showCursor, setShowCursor] = useState(true)

  // Typing effect
  useEffect(() => {
    if (chars < fullText.length) {
      const t = setTimeout(() => setChars(c => c + 1), 280)
      return () => clearTimeout(t)
    }
    // After typing, animate bars
    const timers = [
      setTimeout(() => setBarWidths([70, 0, 0]), 400),
      setTimeout(() => setBarWidths([70, 45, 0]), 700),
      setTimeout(() => setBarWidths([70, 45, 90]), 1000),
      // Reset and loop
      setTimeout(() => { setChars(0); setBarWidths([0, 0, 0]) }, 3500),
    ]
    return () => timers.forEach(clearTimeout)
  }, [chars])

  // Blinking cursor
  useEffect(() => {
    const t = setInterval(() => setShowCursor(c => !c), 530)
    return () => clearInterval(t)
  }, [])

  const typed = fullText.slice(0, chars)

  return (
    <div className="dv-screen-content dv-screen-hero">
      <Monitor size={18} strokeWidth={1.5} className="dv-hero-monitor" />
      <div className="dv-brand">
        {typed.split('').map((ch, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            style={i >= 3 ? { color: 'var(--accent)' } : {}}
          >
            {ch}
          </motion.span>
        ))}
        <span className={`dv-cursor ${showCursor ? 'on' : ''}`}>|</span>
      </div>
      <div className="dv-tagline" style={{ opacity: chars >= fullText.length ? 1 : 0.3 }}>
        Web Design Studio
      </div>
      <div className="dv-hero-bars">
        {barWidths.map((w, i) => (
          <motion.div
            key={i}
            className={`dv-hero-bar ${i === 0 ? 'accent' : ''}`}
            animate={{ width: `${w}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        ))}
      </div>
    </div>
  )
}


// ═══════════════════════════════════════════════
// SERVICES SCREEN — Sequential pop-in + cycling highlight
// ═══════════════════════════════════════════════
const serviceItems = [
  { Icon: UtensilsCrossed, label: 'Restaurant', color: '#D97706', bg: '#FFF5E6' },
  { Icon: Dumbbell, label: 'Fitness', color: '#1B4FD8', bg: '#EEF2FF' },
  { Icon: ShoppingCart, label: 'E-Commerce', color: '#16A34A', bg: '#F0FDF4' },
  { Icon: Building2, label: 'Corporate', color: '#9333EA', bg: '#FDF4FF' },
]

function ScreenServices() {
  const [highlight, setHighlight] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setHighlight(h => (h + 1) % 4), 2000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="dv-screen-content dv-screen-services">
      <div className="dv-svc-header">
        <Sparkles size={8} style={{ color: 'var(--accent)' }} />
        <span>Our Services</span>
      </div>
      <div className="dv-icon-grid">
        {serviceItems.map(({ Icon, label, color, bg }, i) => (
          <motion.div
            key={label}
            className="dv-icon-cell"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 1,
              scale: i === highlight ? 1.1 : 1,
              background: i === highlight ? bg : 'rgba(27,79,216,0.04)',
              boxShadow: i === highlight ? `0 2px 12px ${color}25` : '0 0 0 transparent',
            }}
            transition={{
              opacity: { duration: 0.3, delay: i * 0.15 },
              scale: { type: 'spring', stiffness: 200, damping: 15 },
              background: { duration: 0.3 },
            }}
          >
            <motion.div
              animate={{ rotate: i === highlight ? [0, -10, 10, 0] : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Icon size={16} style={{ color }} />
            </motion.div>
            <span style={{ color: i === highlight ? color : undefined }}>{label}</span>
          </motion.div>
        ))}
      </div>
      {/* Live counter */}
      <div className="dv-svc-counter">
        <Eye size={7} style={{ color: 'var(--muted)' }} />
        <span>{serviceItems[highlight].label}</span>
      </div>
    </div>
  )
}


// ═══════════════════════════════════════════════
// PROCESS SCREEN — Step cycler (already animated)
// ═══════════════════════════════════════════════
const processSteps = [
  { Icon: Search, label: 'Discovery', color: '#1B4FD8', progress: 25 },
  { Icon: PenTool, label: 'Design', color: '#D97706', progress: 50 },
  { Icon: Layers, label: 'Build', color: '#16A34A', progress: 75 },
  { Icon: Zap, label: 'Launch', color: '#9333EA', progress: 100 },
]

function ScreenProcess() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setStep(prev => (prev + 1) % 4), 2500)
    return () => clearInterval(timer)
  }, [])

  const current = processSteps[step]

  return (
    <div className="dv-screen-content dv-screen-process">
      <div className="dv-step-dots">
        {processSteps.map((s, i) => (
          <div
            key={i}
            className={`dv-step-dot ${i === step ? 'active' : ''} ${i < step ? 'done' : ''}`}
            style={{ '--dot-color': s.color }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="dv-proc-icon-wrap"
          style={{ background: `${current.color}15` }}
        >
          <current.Icon size={20} style={{ color: current.color }} />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="dv-proc-label"
        >
          {current.label}
        </motion.div>
      </AnimatePresence>

      <div className="dv-progress-track">
        <motion.div
          className="dv-progress-fill"
          animate={{ width: `${current.progress}%` }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{ background: current.color }}
        />
      </div>
      <div className="dv-proc-step-num">Step {step + 1} of 4</div>
    </div>
  )
}


// ═══════════════════════════════════════════════
// PORTFOLIO SCREEN — Slideshow carousel
// ═══════════════════════════════════════════════
const portfolioSlides = [
  { Icon: ChefHat, name: 'Spice Garden', tag: 'Restaurant', color: '#D97706', bg: 'linear-gradient(135deg,#FFF5E6,#FFE8CC)' },
  { Icon: Dumbbell, name: 'Shaper Fitness', tag: 'Gym', color: '#1B4FD8', bg: 'linear-gradient(135deg,#F0F4FF,#DBEAFE)' },
  { Icon: ShoppingBag, name: 'StyleVault', tag: 'E-Commerce', color: '#16A34A', bg: 'linear-gradient(135deg,#F0FDF4,#DCFCE7)' },
  { Icon: BarChart3, name: 'Nexus Corp', tag: 'Business', color: '#9333EA', bg: 'linear-gradient(135deg,#FDF4FF,#F3E8FF)' },
]

function ScreenPortfolio() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % 4), 3000)
    return () => clearInterval(t)
  }, [])

  const current = portfolioSlides[slide]

  return (
    <div className="dv-screen-content dv-screen-portfolio">
      {/* Mini carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide}
          className="dv-port-slide"
          style={{ background: current.bg }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4 }}
        >
          <current.Icon size={22} style={{ color: current.color }} />
        </motion.div>
      </AnimatePresence>

      {/* Project info */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide}
          className="dv-port-info"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25, delay: 0.1 }}
        >
          <span className="dv-port-tag" style={{ color: current.color }}>{current.tag}</span>
          <span className="dv-port-name">{current.name}</span>
        </motion.div>
      </AnimatePresence>

      {/* Slide indicator */}
      <div className="dv-port-dots">
        {portfolioSlides.map((_, i) => (
          <div
            key={i}
            className={`dv-port-dot ${i === slide ? 'active' : ''}`}
            style={i === slide ? { background: current.color } : {}}
          />
        ))}
      </div>
    </div>
  )
}


const screens = {
  home: ScreenHero,
  services: ScreenServices,
  process: ScreenProcess,
  portfolio: ScreenPortfolio,
}

export default function ParallaxDevice() {
  const [activeSection, setActiveSection] = useState('home')
  const [slotRect, setSlotRect] = useState(null)
  const [visible, setVisible] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const rafRef = useRef(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const updatePosition = useCallback(() => {
    const slots = document.querySelectorAll('.device-slot')
    if (!slots.length) return

    const viewportCenter = window.innerHeight / 2
    let closest = null
    let closestDist = Infinity

    slots.forEach(slot => {
      const rect = slot.getBoundingClientRect()
      const slotCenter = rect.top + rect.height / 2
      const dist = Math.abs(slotCenter - viewportCenter)

      if (dist < closestDist) {
        closestDist = dist
        closest = { rect, section: slot.dataset.section }
      }
    })

    if (closest) {
      setActiveSection(closest.section)
      setSlotRect({
        top: closest.rect.top,
        left: closest.rect.left,
        width: closest.rect.width,
        height: closest.rect.height,
      })

      const isOnScreen = closest.rect.top < window.innerHeight && closest.rect.bottom > 0
      setVisible(isOnScreen)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(updatePosition)
    }

    updatePosition()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updatePosition)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updatePosition)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [updatePosition])

  if (isMobile || !slotRect) return null

  const ActiveScreen = screens[activeSection] || screens.home

  const deviceWidth = Math.min(slotRect.width * 0.85, 340)
  const deviceLeft = slotRect.left + (slotRect.width - deviceWidth) / 2
  const deviceTop = slotRect.top + (slotRect.height - deviceWidth * 0.72) / 2

  return (
    <motion.div
      className="parallax-device-fixed"
      animate={{
        x: deviceLeft,
        y: deviceTop,
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
      }}
      transition={{
        type: 'spring',
        stiffness: 70,
        damping: 22,
        mass: 1,
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: deviceWidth,
        zIndex: 40,
        pointerEvents: 'none',
        willChange: 'transform',
      }}
    >
      <motion.div
        className="dv-laptop"
        animate={{
          rotateY: activeSection === 'process' ? 6 : activeSection === 'portfolio' ? -4 : -8,
          rotateX: 3,
          rotateZ: activeSection === 'home' ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 18 }}
        style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      >
        <div className="dv-lid">
          <div className="dv-camera" />
          <div className="dv-screen">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.35 }}
                style={{ width: '100%', height: '100%' }}
              >
                <ActiveScreen />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="dv-base">
          <div className="dv-touchpad" />
        </div>
        <div className="dv-edge" />
      </motion.div>

      <div className="dv-shadow" />
    </motion.div>
  )
}
