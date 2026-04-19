export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-v2">
      <div className="footer-top">
        <div className="foot-brand">
          <a href="#home" className="logo">Tri<span>ova</span></a>
          <p className="foot-slogan">Crafting digital excellence with intention and precision since 2025.</p>
          <div className="foot-socials">
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-1 2-1 5a8.38 8.38 0 0 1-7 7 8.38 8.38 0 0 1-7-7 8.38 8.38 0 0 1 1-5"></path><path d="M22 4c-.7.5-1.1 1.1-1.4 1.8A5 5 0 0 1 13 4c1 2 2.5 3 4.5 3 0 1-1 3-3 4"></path></svg>
            </a>
            <div className="foot-linkedin-wrapper">
              <span className="foot-social-trigger" aria-label="Team LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </span>
              <div className="linkedin-dropdown">
                <a href="https://www.linkedin.com/in/praveen-joshwa-b-5b5b5b5b5" target="_blank" rel="noopener noreferrer">Praveen Joshwa</a>
                <a href="https://www.linkedin.com/in/tamilarasu-v-5b5b5b5b5" target="_blank" rel="noopener noreferrer">Tamilarasu V</a>
                <a href="https://www.linkedin.com/in/vinoth-m-5b5b5b5b5" target="_blank" rel="noopener noreferrer">Vinoth M</a>
              </div>
            </div>
          </div>
        </div>

        <div className="foot-nav">
          <div className="foot-group">
            <h5>Studio</h5>
            <ul className="foot-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#portfolio">Our Work</a></li>
              <li><a href="#process">How we work</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          <div className="foot-group">
            <h5>Connect</h5>
            <ul className="foot-links">
              <li><a href="#contact">Get a Quote</a></li>
              <li><a href="mailto:triovapvt26@gmail.com">triovapvt26@gmail.com</a></li>
              <li><a href="tel:+918344051846">+91 83440 51846</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="foot-btm-left">
          <small>&copy; {new Date().getFullYear()} Triova Studio. Designed for the future.</small>
          <div className="foot-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        <button onClick={scrollToTop} className="back-to-top">
          Back to Top <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
        </button>
      </div>
    </footer>
  )
}


