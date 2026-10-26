const INCLUDES = [
  "Dashboard financiero personal.",
  "Gestión de ingresos y gastos.",
  "Seguimiento de ahorro.",
  "Patrimonio, activos y pasivos.",
  "Seguimiento de tarjetas.",
  "Gestión de metas.",
  "Seguimiento de inversiones.",
  "Insights financieros.",
  "Diferentes monedas disponibles.",
  "Modo claro y oscuro.",
  "Actualizaciones del dashboard",
  "Asistente con IA que te acompaña en la configuración y el registro, con base en las guías.",
  "Kit de Inicio con tu ruta paso a paso.",
  "Guías para configurar, registrar y conectar tus datos.",
  "Tu propia copia de trabajo en Google Sheets.",
  "Acceso en hasta 3 dispositivos con tu correo de compra.",
];

export default function IncludesSection() {
  return (
    <section id="que-incluye" className="section section-bordered">
      <div className="section-inner">
        <h2 data-reveal className="section-title" style={{ marginBottom: 40 }}>Tu acceso a Luqui incluye</h2>
        <div data-reveal className="includes-list">
          {INCLUDES.map((item) => (
            <div key={item} className="includes-item">
              <span className="mark">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div data-reveal className="shortcut-banner">
          <div>
            <p className="eyebrow" style={{ color: "var(--gold-dark)" }}>Extra incluido · Atajo en tu celular</p>
            <h3 className="shortcut-title">Registra un movimiento en segundos, sin abrir nada.</h3>
            <p className="shortcut-desc">
              Puedes crear un atajo desde tu celular para anotar tus movimientos al instante. Es un
              paso opcional y un poco más técnico, así que te dejamos la guía paso a paso.
            </p>
            <div className="shortcut-points">
              <div>
                <span className="mark">✓</span>
                <span style={{ color: "var(--ink-2)" }}>
                  Atajo para <strong>iPhone</strong> disponible, con una guía paso a paso para usarlo.
                </span>
              </div>
              <div>
                <span style={{ color: "var(--gold)", fontWeight: 700 }}>◷</span>
                <span style={{ color: "var(--muted)" }}>
                  Para <strong>Android</strong> estamos revisando si se puede hacer algo similar: no todos
                  los equipos traen una app de atajos nativa.
                </span>
              </div>
            </div>
            <p className="shortcut-fine">Es un complemento opcional. Luqui funciona completo sin el atajo.</p>
          </div>
          <div className="shortcut-phone-wrap">
            <div className="shortcut-phone">
              <div className="shortcut-screen">
                <div className="shortcut-screen-label">ATAJO LUQUI</div>
                <div className="shortcut-action">
                  <span style={{ fontSize: 22 }}>⚡</span>
                  <span className="shortcut-action-title">Anotar movimiento</span>
                  <span className="shortcut-action-sub">Más rápido, directo desde tu atajo</span>
                </div>
                <div className="shortcut-fields">
                  <div className="shortcut-field">Monto · <strong style={{ color: "var(--ink)" }}>$32.000</strong></div>
                  <div className="shortcut-field">Categoría · <strong style={{ color: "var(--ink)" }}>Mercado</strong></div>
                </div>
                <div className="shortcut-done">Listo ✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
