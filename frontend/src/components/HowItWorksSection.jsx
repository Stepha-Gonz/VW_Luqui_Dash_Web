import dashboard from "../assets/dashboard-screenshot.webp";

const ITEMS = [
  "Ve tus ingresos y gastos.",
  "Entiende cuánto realmente te queda.",
  "Sigue tu ahorro y tus metas.",
  "Ten claridad sobre tus tarjetas y deudas.",
  "Mira tu patrimonio completo.",
  "Lleva tus inversiones.",
  "Descubre insights sobre tus finanzas.",
];

export default function HowItWorksSection() {
  return (
    <section id="todo-en-un-lugar" className="section">
      <div className="section-inner">
        <div data-reveal style={{ maxWidth: 760 }}>
          <h2 className="section-title">Todo lo que pasa con tu plata, en un solo lugar.</h2>
          <p className="section-lead">
            Desde lo que ganas y gastas hasta lo que tienes, debes, inviertes o quieres lograr.
          </p>
        </div>
        <div data-reveal className="how-grid">
          <img src={dashboard} alt="Dashboard de Luqui" />
          <ul className="check-list">
            {ITEMS.map((item) => (
              <li key={item}>
                <span className="mark">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
