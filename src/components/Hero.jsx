function Hero() {
  const heroStyle = {
    backgroundImage: `url(${import.meta.env.BASE_URL}images/FTZ_7796.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <section className="hero" id="top" style={heroStyle}>
      <div className="hero-overlay">
        <div className="container hero-content">
          <h1 className="hero-title">Lens & Lights Visuals</h1>
          <p className="hero-subtitle">— Photographe &  Vidéaste —</p>
        </div>
      </div>
    </section>
  )
}

export default Hero