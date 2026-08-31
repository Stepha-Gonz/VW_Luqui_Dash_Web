const HEATMAP_COLORS = [
  "rgba(67,160,71,.55)", "rgba(255,179,0,.5)", "rgba(149,117,205,.45)", "rgba(10,22,40,.06)",
  "rgba(224,102,42,.42)", "rgba(67,160,71,.35)", "rgba(255,179,0,.7)",
  "rgba(10,22,40,.06)", "rgba(67,160,71,.4)", "rgba(214,74,119,.35)", "rgba(255,179,0,.55)",
  "rgba(149,117,205,.5)", "rgba(10,22,40,.06)", "rgba(67,160,71,.6)",
  "rgba(255,179,0,.35)", "rgba(10,22,40,.06)", "rgba(67,160,71,.5)", "rgba(224,102,42,.3)",
  "rgba(67,160,71,.3)", "rgba(255,179,0,.45)", "rgba(149,117,205,.35)",
];

export default function FeaturesSection() {
  return (
    <section className="section section-bordered">
      <div className="section-inner">
        <div data-reveal className="section-head">
          <p className="eyebrow">Funcionalidades</p>
          <h2 className="section-title">Conoce tu dinero desde diferentes perspectivas.</h2>
        </div>

        <div data-reveal className="features-grid">
          <article className="feature-card">
            <span className="feature-tag" style={{ color: "#C98A00" }}>Resumen</span>
            <h3 className="feature-title">La historia completa de tu mes.</h3>
            <div className="tag-pills">
              {["Ingresos", "Gastos", "Flujo neto", "Tasa de ahorro", "Tendencias", "Uso de tarjetas", "Insights"].map((t) => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>
            <div className="feature-foot stat-pair">
              <div className="stat-pair-item" style={{ borderColor: "#43A047" }}>
                <div className="stat-pair-label">Ingresos</div>
                <div className="stat-pair-value">$5.700.000</div>
              </div>
              <div className="stat-pair-item" style={{ borderColor: "#E0662A" }}>
                <div className="stat-pair-label">Gastos</div>
                <div className="stat-pair-value">$4.684.000</div>
              </div>
            </div>
          </article>

          <article className="feature-card">
            <span className="feature-tag" style={{ color: "#E0662A" }}>Gastos</span>
            <h3 className="feature-title">Descubre en qué se está yendo tu dinero.</h3>
            <p className="feature-desc">Registro de movimientos, categorías, seguimiento mensual y comparación entre periodos.</p>
            <div className="feature-foot bar-row">
              <div>
                <div className="bar-item-head"><span>Gasto fijo</span><span>$3.210.000</span></div>
                <div className="bar-track"><div className="bar-fill" style={{ width: "78%", background: "#E0662A" }} /></div>
              </div>
              <div>
                <div className="bar-item-head"><span>Gasto variable</span><span>$1.324.000</span></div>
                <div className="bar-track"><div className="bar-fill" style={{ width: "44%", background: "#FFB300" }} /></div>
              </div>
              <div>
                <div className="bar-item-head"><span>Entre cuentas</span><span>$2.500.000</span></div>
                <div className="bar-track"><div className="bar-fill" style={{ width: "60%", background: "#9575CD" }} /></div>
              </div>
            </div>
          </article>

          <article className="feature-card">
            <span className="feature-tag" style={{ color: "#1565C0" }}>Patrimonio</span>
            <h3 className="feature-title">Mira lo que tienes, no solo lo que debes.</h3>
            <p className="feature-quote">Lo que tienes, menos lo que debes.</p>
            <p className="feature-desc">Patrimonio neto, activos, ahorros, dinero disponible, inversiones, pasivos, deudas y créditos.</p>
            <div className="feature-foot" style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
              <div style={{ flex: 1 }}>
                <div className="stat-pair-label">Activos</div>
                <div className="stat-pair-value" style={{ color: "#43A047" }}>$48.200.000</div>
              </div>
              <div style={{ flex: 1 }}>
                <div className="stat-pair-label">Pasivos</div>
                <div className="stat-pair-value" style={{ color: "#D64A77" }}>$12.900.000</div>
              </div>
            </div>
          </article>

          <article className="feature-card">
            <span className="feature-tag" style={{ color: "#43A047" }}>Metas</span>
            <h3 className="feature-title">Dale una dirección a tu dinero.</h3>
            <p className="feature-desc">Metas de ahorro con monto actual, objetivo y visualización del avance.</p>
            <div className="feature-foot goal-row">
              <div>
                <div className="goal-head"><span>Viaje</span><span style={{ color: "#43A047", fontFamily: "var(--font-mono)" }}>68%</span></div>
                <div className="goal-track"><div className="bar-fill" style={{ width: "68%", height: "100%", background: "#43A047" }} /></div>
              </div>
              <div>
                <div className="goal-head"><span>Fondo de emergencia</span><span style={{ color: "#FFB300", fontFamily: "var(--font-mono)" }}>41%</span></div>
                <div className="goal-track"><div className="bar-fill" style={{ width: "41%", height: "100%", background: "#FFB300" }} /></div>
              </div>
            </div>
          </article>

          <article className="feature-card">
            <span className="feature-tag" style={{ color: "#9575CD" }}>Emociones</span>
            <h3 className="feature-title">Cómo se siente tu plata.</h3>
            <p className="feature-desc">Cada movimiento lleva una emoción: gasto por emoción, distribución, heatmap e insights.</p>
            <div className="feature-foot bar-row">
              <div>
                <div className="bar-item-head"><span>Tranquila</span><span>$1.840.000</span></div>
                <div className="bar-track"><div className="bar-fill" style={{ width: "64%", background: "#43A047" }} /></div>
              </div>
              <div>
                <div className="bar-item-head"><span>Ansiosa</span><span>$960.000</span></div>
                <div className="bar-track"><div className="bar-fill" style={{ width: "34%", background: "#9575CD" }} /></div>
              </div>
              <div>
                <div className="bar-item-head"><span>Culpa</span><span>$412.000</span></div>
                <div className="bar-track"><div className="bar-fill" style={{ width: "18%", background: "#D64A77" }} /></div>
              </div>
            </div>
          </article>

          <article className="feature-card">
            <span className="feature-tag" style={{ color: "#0096B4" }}>Pagos fijos</span>
            <h3 className="feature-title">Nunca te tome por sorpresa el mes.</h3>
            <p className="feature-desc">Tus pagos recurrentes con día, monto esperado y lo que ya está pagado.</p>
            <div className="feature-foot" style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              <div className="pay-row">
                <span>Arriendo <span className="day">· día 5</span></span>
                <span className="pay-status" style={{ color: "#43A047" }}>Pagado</span>
              </div>
              <div className="pay-row">
                <span>Internet <span className="day">· día 12</span></span>
                <span className="pay-status" style={{ color: "#43A047" }}>Pagado</span>
              </div>
              <div className="pay-row">
                <span>Crédito <span className="day">· día 22</span></span>
                <span className="pay-status" style={{ color: "#E0662A" }}>Pendiente</span>
              </div>
            </div>
          </article>
        </div>

        <div data-reveal className="emotions-banner">
          <div>
            <span className="feature-tag" style={{ color: "#9575CD" }}>Emociones</span>
            <h3 className="shortcut-title" style={{ margin: "12px 0 14px" }}>Porque tus finanzas también se sienten.</h3>
            <p className="section-lead" style={{ marginTop: 0, maxWidth: "36em" }}>
              Registra cómo te sentías en determinados momentos y empieza a observar la relación entre
              tus emociones y tus decisiones financieras. Es una herramienta de observación y
              autoconocimiento financiero.
            </p>
          </div>
          <div className="emotions-heatmap">
            {HEATMAP_COLORS.map((c, i) => (
              <div key={i} style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
