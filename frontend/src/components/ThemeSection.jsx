import DashboardMock from "./DashboardMock";

export default function ThemeSection() {
  return (
    <section className="section section-bordered">
      <div className="section-inner">
        <div data-reveal className="theme-head">
          <p className="eyebrow">Personalización</p>
          <h2 className="section-title">Míralo como prefieras.</h2>
          <p className="section-lead">
            Cambia entre modo claro y oscuro cuando quieras, sin perder claridad en tus datos.
          </p>
        </div>

        <div data-reveal className="theme-compare">
          <div className="theme-compare-item">
            <DashboardMock />
            <span className="theme-badge">☀️ Modo claro</span>
          </div>
          <div className="theme-compare-item">
            <DashboardMock dark />
            <span className="theme-badge theme-badge-dark">🌙 Modo oscuro</span>
          </div>
        </div>
      </div>
    </section>
  );
}
