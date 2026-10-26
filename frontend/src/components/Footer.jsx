import logo from "../assets/logo.webp";

// Las páginas legales viven en la app (mismas URLs que usa app.luquifinance.com).
const APP_URL = "https://app.luquifinance.com";
const CONTACT_EMAIL = "luqui.solutions@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/luqui.solutions/";

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
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#que-incluye">Qué incluye</a>
          <a href="#oferta">Oferta</a>
        </div>
        <div className="footer-nav">
          <span className="footer-nav-label">Legal</span>
          <a href={`${APP_URL}/terminos`} target="_blank" rel="noopener noreferrer">Términos</a>
          <a href={`${APP_URL}/privacidad`} target="_blank" rel="noopener noreferrer">Política de privacidad</a>
        </div>
        <div className="footer-nav">
          <span className="footer-nav-label">Contacto</span>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">@luqui.solutions</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">© {year} LuquiSolutions · Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
