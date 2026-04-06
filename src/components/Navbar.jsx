import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Work' },
  ]

  const handleClick = () => setMobileOpen(false)

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="#home" className="logo">Tri<span>ova</span></a>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta">Start a Project</a>
        <button className="mobile-menu-btn" onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <Menu size={24} />
        </button>
      </nav>

      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
          <X size={28} />
        </button>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={handleClick}>{l.label}</a>
        ))}
        <a href="#contact" onClick={handleClick} className="btn-primary">Start a Project</a>
      </div>
    </>
  )
}
