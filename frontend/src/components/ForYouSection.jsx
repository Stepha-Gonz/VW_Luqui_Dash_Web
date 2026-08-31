const ITEMS = [
  "Quieres empezar a organizar mejor tu dinero.",
  "Ya intentaste registrar gastos, pero terminaste abandonando el sistema.",
  "Tienes cuentas, tarjetas, ahorros o inversiones y quieres ver todo con más claridad.",
  "Quieres ahorrar para algo sin dejar de disfrutar tu dinero.",
  "Quieres entender mejor tu situación financiera actual.",
  "Te gusta ver tu información de forma visual.",
  "Tienes productos en varias entidades y quieres ver el total en un solo lugar.",
  "Te gustaría descubrir cómo tu estado de ánimo influye en lo que gastas.",
];

export default function ForYouSection() {
  return (
    <section className="section section-bordered">
      <div className="section-inner">
        <h2 data-reveal className="section-title" style={{ marginBottom: 40 }}>Luqui es para ti si…</h2>
        <div data-reveal className="for-you-grid">
          {ITEMS.map((item) => (
            <div key={item} className="for-you-item">
              <span className="mark">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <p data-reveal className="for-you-note">
          No necesitas ser experto en finanzas para empezar a entender las tuyas.
        </p>
      </div>
    </section>
  );
}
