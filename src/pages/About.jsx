function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section principale avec image et texte */}
        <div className="about-main">
          <div className="about-image">
            <img
              src={`${import.meta.env.BASE_URL}images/FTZ_7558.jpg`}
              alt="Photographe au travail"
            />
          </div>
          <div className="about-content">
            <h3>À propos</h3>
            <p>
              Nous sommes Perrine et Firas, un couple uni par l'amour… et par
              l'image. Depuis notre plus jeune âge, la photographie et la vidéo
              occupent une place importante dans nos vies. Ce qui était au
              départ une passion s'est transformée en une vocation.
            </p>

            <p>
              Perrine, réalisatrice de documentaires depuis 4 ans, raconte des
              histoires à travers l'objectif avec sensibilité et authenticité.
              Firas est photographe de presse depuis plus de 10 ans, avec un
              regard affûté pour capter l'instant décisif, l'émotion brute et la
              lumière parfaite.
            </p>

            <p>
              De cette complémentarité est née Lens & Lights Visuals : notre
              entreprise, notre projet de cœur. Ensemble, nous avons choisi
              d'unir nos talents pour vous offrir des images qui vous
              ressemblent, qui racontent votre histoire, qui traversent le
              temps.
            </p>

            <p>
              Mariages, baptêmes, anniversaires, événements d'entreprise ou
              familiaux… chaque moment mérite d'être immortalisé avec soin,
              créativité et émotion. C'est notre mission, et surtout, notre
              plaisir.
            </p>

            <p>Bienvenue dans notre univers.</p>
          </div>
        </div>

        <div className="about-gallery">
          <div className="gallery-left">
            <div className="gallery-item">
              <img src={`${import.meta.env.BASE_URL}images/FTZ_7331.jpg`} alt="Galerie gauche 1" />
            </div>
            <div className="gallery-item">
              <img src={`${import.meta.env.BASE_URL}images/FTZ_7053.jpg`} alt="Galerie gauche 2" />
            </div>
            <div className="gallery-item span2">
              <img src={`${import.meta.env.BASE_URL}images/FTZ_7796.jpg`} alt="Galerie gauche large" />
            </div>
          </div>
          <div className="gallery-right">
            <div className="gallery-item">
              <img src={`${import.meta.env.BASE_URL}images/FTZ_8114.jpg`} alt="Galerie droite haut" />
            </div>
            <div className="gallery-item">
              <img src={`${import.meta.env.BASE_URL}images/FTZ_7526.jpg`} alt="Galerie droite bas" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
