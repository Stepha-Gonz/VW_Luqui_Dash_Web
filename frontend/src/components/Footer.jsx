import logo from "../assets/logo.webp";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <div className="footer-brand">
            <img src={logo} alt="Luqui" className="brand-logo" style={{ width: 40, height: 40 }} />
            <span className="footer-brand-name">
              <span style={{ fontSize: "1.4em", color: "#FFB300" }}>L</span>uqui
              <span className="brand-dot" />
            </span>
          </div>
          <p className="footer-tagline">Tu plata, clara y en orden.</p>
        </div>
        <div className="footer-nav">
          <span className="footer-nav-label">Navegación</span>
          <a href="#video">Cómo funciona</a>
          <a href="#que-incluye">Qué incluye</a>
          <a href="#oferta">Oferta</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">© {year} Luqui Finanzas · Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
