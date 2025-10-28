import services from "../data/services.json";

export default function Pricing() {
  const BASE_URL = import.meta.env.BASE_URL || "/";
  const pdfHref = services.pdf
    ? `${BASE_URL}${services.pdf.replace(/^\//, "")}`
    : null;

  const getMinOptionPrice = (options = []) => {
    const values = options
      .map((o) => {
        const m = String(o.price).match(/\d+/g);
        if (!m) return null;
        return Math.min(...m.map((n) => parseInt(n, 10)));
      })
      .filter((v) => typeof v === "number" && !isNaN(v));
    if (values.length === 0) return null;
    return Math.min(...values);
  };

  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="section-title">Formules</h2>
        <p className="section-subtitle">Choisissez la formule qui correspond à votre journée.</p>

        {services.categories?.map((cat, ci) => (
          <div key={ci} className="category-block">
            <h3 className="category-title">{cat.title}</h3>
            {cat.notes && <p className="small muted">{cat.notes}</p>}

            <div className="pricing-cards">
              {cat.packages.map((pkg, i) => (
                <div key={i} className="card">
                  <h4 className="card-title">
                    {pkg.name}
                    {pkg.variant && <span className="muted-label"> — {pkg.variant}</span>}
                  </h4>
                  {pkg.description && <p className="description">{pkg.description}</p>}

                  {pkg.features?.length > 0 && (
                    <div>
                      <h5>Inclus</h5>
                      <ul>
                        {pkg.features.map((f, idx) => (
                          <li key={idx}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {pkg.deliverables?.length > 0 && (
                    <div>
                      <h5>Livrables</h5>
                      <ul>
                        {pkg.deliverables.map((d, idx) => (
                          <li key={idx}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {pkg.video?.length > 0 && (
                    <div>
                      <h5>Vidéo</h5>
                      <ul>
                        {pkg.video.map((v, idx) => (
                          <li key={idx}>{v}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {pkg.notes && <p className="small muted">{pkg.notes}</p>}
                  {pkg.price && <p className="price">{pkg.price}</p>}
                </div>
              ))}

              {cat.options?.length > 0 && (
                <div className="card options-card">
                  <h4 className="card-title">Options personnalisables <span className="muted-label">(en supplément)</span></h4>
                  <div>
                    <ul className="options-list">
                      {cat.options.map((opt, oi) => (
                        <li key={oi}><span>{opt.name}</span><span className="price-inline">{opt.price}</span></li>
                      ))}
                    </ul>
                  </div>
                  {cat.notes && <p className="small muted">{cat.notes}</p>}
                  {getMinOptionPrice(cat.options) && (
                    <p className="price">À partir de {getMinOptionPrice(cat.options)}€</p>
                  )}
                </div>
              )}
            </div>
            
          </div>
        ))}

        {pdfHref && (
          <div className="center" style={{ margin: "2rem 1rem" }}>
            <a className="button" href={pdfHref} target="_blank" rel="noopener noreferrer">
              Télécharger le PDF détaillé
            </a>
          </div>
        )}
      </div>
    </section>
  );
}