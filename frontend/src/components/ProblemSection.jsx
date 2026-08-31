import illustration from "../assets/illustration-thinking.webp";

const QUOTES = [
  "Sé que recibí dinero… pero no sé exactamente en qué se fue.",
  "Quiero ahorrar, pero nunca sé cuánto realmente puedo guardar.",
  "Tengo tarjetas, cuentas y gastos por todos lados.",
  "Quiero cumplir metas sin sentir que tengo que dejar de vivir.",
];

export default function ProblemSection() {
  return (
    <section className="section section-bordered">
      <div className="problem-grid">
        <div data-reveal>
          <p className="eyebrow">¿Te suena?</p>
          <h2 className="problem-title">
            Tal vez no necesitas ganar más. Tal vez necesitas <em>ver mejor</em> tu dinero.
          </h2>
          <div className="problem-quotes">
            {QUOTES.map((q) => (
              <p key={q} className="problem-quote">“{q}”</p>
            ))}
          </div>
          <p className="problem-summary">Luqui reúne tu información para que puedas verla con claridad.</p>
        </div>
        <div data-reveal className="problem-illustration">
          <img src={illustration} alt="Ilustración de Luqui pensando frente a su dashboard" />
        </div>
      </div>
    </section>
  );
}
