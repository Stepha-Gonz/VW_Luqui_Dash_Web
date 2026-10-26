import dashboardLarge from "../assets/dashboard-screenshot-large.webp";

const DEMO_URL = "https://demo.luquifinance.com";

export default function ShowcaseSection() {
  return (
    <section id="ver-luqui" className="section section-bordered">
      <div className="section-inner showcase">
        <h2 data-reveal className="section-title" style={{ marginBottom: 14 }}>Así se ve Luqui.</h2>
        <p data-reveal className="section-lead" style={{ margin: "0 auto 48px", maxWidth: "34em" }}>
          Tu información contigo, cuando quieras revisarla.
        </p>

        <div data-reveal style={{ display: "flex", justifyContent: "center" }}>
          <div className="showcase-frame">
            <div className="showcase-frame-inner">
              <img src={dashboardLarge} alt="Dashboard de Luqui en computador" />
            </div>
            <div className="showcase-frame-foot" />
          </div>
        </div>
        <a
          data-reveal
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ marginTop: 44 }}
        >
          Ver demo →
        </a>
      </div>
    </section>
  );
}
