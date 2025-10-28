import { useEffect, useState } from 'react'

function Navbar() {
  const [active, setActive] = useState('top')

  // Initialise l'onglet actif selon l'URL (hash) au chargement
  useEffect(() => {
    const initial = window.location.hash?.replace('#', '') || 'top'
    setActive(initial)
  }, [])

  const handleClick = (id) => setActive(id)
  return (
    <header className="navbar">
      <div className="container nav-content">
        <div className="brand">
          <a href="#top" className="brand-name">
            <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="Lens & Lights Visuals logo" className="brand-logo" />
          </a>
        </div>
        <nav className="nav-links">
          <a href="#top" className={active === 'top' ? 'active' : ''} onClick={() => handleClick('top')}>Accueil</a>
          <a href="#about" className={active === 'about' ? 'active' : ''} onClick={() => handleClick('about')}>À propos</a>
          <a href="#portfolio" className={active === 'portfolio' ? 'active' : ''} onClick={() => handleClick('portfolio')}>Portfolio</a>
          <a href="#services" className={active === 'services' ? 'active' : ''} onClick={() => handleClick('services')}>Formules</a>
          <a href="#contact" className={active === 'contact' ? 'active' : ''} onClick={() => handleClick('contact')}>Contact</a>
          <a href="#albumsclients">Albums clients</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar