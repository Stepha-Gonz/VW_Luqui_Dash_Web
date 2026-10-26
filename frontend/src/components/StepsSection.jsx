const STEPS = [
  {
    n: "01",
    title: "Compras y entras con tu correo",
    desc: "Entras con el correo de tu compra. Sin contraseña ni cuenta que crear.",
  },
  {
    n: "02",
    title: "Copias tu plantilla",
    desc: "Haces tu propia copia en Google Sheets y la configuras con tus cuentas, tarjetas y metas.",
  },
  {
    n: "03",
    title: "Registras tus movimientos",
    desc: "Anotas tus ingresos y gastos. Con el atajo para iPhone lo haces en segundos.",
  },
  {
    n: "04",
    title: "Ves tu dashboard",
    desc: "Tus datos se convierten en gráficas claras: ingresos, gastos, tarjetas, patrimonio, metas y emociones.",
  },
];

export default function StepsSection() {
  return (
    <section id="como-funciona" className="section steps-section">
      <div className="section-inner">
        <div data-reveal className="section-head">
          <h2 className="section-title">Cómo funciona</h2>
        </div>

        <ol data-reveal className="steps-grid">
          {STEPS.map(({ n, title, desc }) => (
            <li key={n} className="step-card">
              <span className="step-num">{n}</span>
              <h3 className="step-title">{title}</h3>
              <p className="step-desc">{desc}</p>
            </li>
          ))}
        </ol>

        <p data-reveal className="steps-note">
          Tus movimientos viven en tu propio Google Sheet. Luqui solo guarda tu correo y el tipo de dispositivo.
        </p>
      </div>
    </section>
  );
}
