import DashboardMock from "./DashboardMock";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div data-reveal>
        <span className="hero-wordmark">
          <span className="initial">L</span>uqui<span className="brand-dot" />
        </span>
        <p className="eyebrow">Finanzas personales, a tu manera</p>
        <h1 className="hero-title">
          Tu plata, <em>clara</em> y en orden.
        </h1>
        <p className="hero-subtitle">
          Luqui te ayuda a entender cuánto tienes, en qué se va tu dinero y cómo avanzar
          hacia tus metas, todo desde un solo lugar.
        </p>
        <div className="hero-actions">
          <a href="#oferta" className="btn btn-primary">Conocer la oferta →</a>
          <a href="#como-funciona" className="btn btn-secondary">Ver cómo funciona ↓</a>
        </div>
        <div className="hero-note">
          <span className="dot" />
          Datos de muestra · Así se ve Luqui con tu información ✨
        </div>
      </div>

      <div data-reveal style={{ position: "relative" }}>
        <DashboardMock />
      </div>
    </section>
  );
}
