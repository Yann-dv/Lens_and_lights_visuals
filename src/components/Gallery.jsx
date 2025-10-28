import portfolio from '../data/portfolio.json'

function Gallery() {
  return (
    <section id="portfolio" className="gallery container">
      <h2 className="section-title">Portfolio</h2>
      <div className="grid">
        {portfolio.items.map((item) => (
          <figure key={item.src} className="grid-item">
            <img src={`${import.meta.env.BASE_URL}${item.src}`} alt={item.alt} />
            {item.caption && <figcaption>{item.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Gallery