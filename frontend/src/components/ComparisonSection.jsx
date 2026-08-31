const WITHOUT = [
  "Información dispersa.",
  "Muchas hojas.",
  "Datos difíciles de interpretar.",
  "Tienes que hacer tus propias cuentas.",
  "Es fácil dejar de usarlo.",
];

const WITH = [
  "Tu información reunida.",
  "Visualización clara.",
  "Datos conectados entre sí.",
  "Tu dinero visto desde diferentes perspectivas.",
  "Una experiencia diseñada para entender, no solo registrar.",
];

export default function ComparisonSection() {
  return (
    <section className="section">
      <div className="section-inner">
        <div data-reveal style={{ maxWidth: 680, marginBottom: 42 }}>
          <h2 className="section-title">Más que una hoja para anotar gastos.</h2>
        </div>
        <div data-reveal className="compare-grid">
          <div className="compare-card without">
            <p className="compare-label" style={{ color: "var(--muted-2)" }}>Otras formas de llevar tus finanzas</p>
            <ul className="compare-list" style={{ color: "var(--muted)" }}>
              {WITHOUT.map((item) => (
                <li key={item}><span style={{ color: "var(--muted-3)" }}>—</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="compare-card with">
            <p className="compare-label" style={{ color: "var(--gold)" }}>Con Luqui</p>
            <ul className="compare-list" style={{ color: "#E7EDF6" }}>
              {WITH.map((item) => (
                <li key={item}><span style={{ color: "var(--gold)" }}>✓</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
