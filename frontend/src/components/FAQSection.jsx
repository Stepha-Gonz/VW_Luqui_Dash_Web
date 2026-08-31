const FAQS = [
  {
    q: "¿Luqui es una aplicación bancaria?",
    a: "No. Luqui es una herramienta para organizar y visualizar tu información financiera personal.",
  },
  {
    q: "¿Luqui mueve mi dinero?",
    a: "No. Luqui no realiza movimientos de dinero.",
  },
  {
    q: "¿Necesito saber de finanzas para usarlo?",
    a: "No. Luqui está diseñado para ayudarte a entender tu información de una manera visual y sencilla.",
  },
  {
    q: "¿Puedo usar diferentes monedas?",
    a: "Sí. Luqui cuenta con diferentes opciones de moneda para adaptarse a distintos usuarios.",
  },
  {
    q: "¿Puedo usar Luqui desde mi celular?",
    a: "Luqui está diseñado para poder consultarse desde diferentes dispositivos. Además, puedes configurar un atajo en tu celular para registrar movimientos más rápido.",
  },
  {
    q: "¿Cómo recibo el acceso?",
    a: "Después de completar la compra, el proceso de acceso se gestionará mediante Hotmart.",
  },
  {
    q: "¿El precio puede variar según mi país?",
    a: "Sí. La página puede mostrar precios localizados según la moneda o país, y el precio final disponible se confirma antes de completar la compra.",
  },
];

export default function FAQSection() {
  return (
    <section className="section" style={{ maxWidth: 900, margin: "0 auto" }}>
      <h2 data-reveal className="section-title" style={{ marginBottom: 36 }}>Preguntas frecuentes</h2>
      <div data-reveal className="faq-list">
        {FAQS.map(({ q, a }) => (
          <details key={q} className="faq-item">
            <summary className="faq-summary">
              {q}
              <span className="faq-plus">+</span>
            </summary>
            <p className="faq-answer">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
