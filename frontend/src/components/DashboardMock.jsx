// Mini réplica vectorial del dashboard de Luqui (no es una captura de pantalla),
// reutilizada en el Hero y en la comparación de modo claro/oscuro. Los colores
// de acento (verde, naranja, morado, dorado) se mantienen iguales en ambos
// temas — solo cambian fondo, bordes y texto.
export default function DashboardMock({ dark = false }) {
  return (
    <div className={dark ? "mock-card mock-card-dark" : "mock-card"}>
      <div className="mock-titlebar">
        <span className="mock-dot" style={{ background: "#E0662A", opacity: 0.5 }} />
        <span className="mock-dot" style={{ background: "#FFB300", opacity: 0.6 }} />
        <span className="mock-dot" style={{ background: "#43A047", opacity: 0.5 }} />
        <span className="mock-titlebar-label">luqui · resumen</span>
      </div>
      <div className="mock-body">
        <aside className="mock-sidebar">
          <div className="mock-sidebar-brand">
            <span style={{ fontSize: "1.4em", color: "#FFB300" }}>L</span>uqui
            <span className="brand-dot" />
          </div>
          <div className="mock-sidebar-item active">Resumen</div>
          <div className="mock-sidebar-item">Gastos</div>
          <div className="mock-sidebar-item">Patrimonio</div>
          <div className="mock-sidebar-item">Emociones</div>
          <div className="mock-sidebar-item">Metas</div>
        </aside>
        <div className="mock-content">
          <div className="mock-period">Julio 2026 · 33 movimientos</div>
          <div className="mock-stats">
            <div className="mock-stat" style={{ borderColor: "#43A047" }}>
              <div className="mock-stat-label">Ingresos</div>
              <div className="mock-stat-value">$2.700.000</div>
              <div className="mock-stat-change" style={{ color: "#43A047" }}>↑ 13% vs mes anterior</div>
            </div>
            <div className="mock-stat" style={{ borderColor: "#E0662A" }}>
              <div className="mock-stat-label">Gastos</div>
              <div className="mock-stat-value">$2.400.000</div>
              <div className="mock-stat-change" style={{ color: "#43A047" }}>↓ 7,8% vs mes anterior</div>
            </div>
            <div className="mock-stat" style={{ borderColor: "#9575CD" }}>
              <div className="mock-stat-label">Flujo neto</div>
              <div className="mock-stat-value" style={{ color: "#9575CD" }}>$300.000</div>
              <div className="mock-stat-change" style={{ color: "#8A97AB" }}>Ingresos cubren gastos 1,2x</div>
            </div>
          </div>
          <div className="mock-lower">
            <div>
              <div className="mock-chart-title">Tendencia del año</div>
              <div className="mock-bars">
                <div className="mock-bar-pair">
                  <div className="mock-bar" style={{ height: 44, background: "#43A047" }} />
                  <div className="mock-bar" style={{ height: 38, background: "#E0662A" }} />
                </div>
                <div className="mock-bar-pair">
                  <div className="mock-bar" style={{ height: 58, background: "#43A047" }} />
                  <div className="mock-bar" style={{ height: 50, background: "#E0662A" }} />
                </div>
                <div className="mock-bar-pair">
                  <div className="mock-bar" style={{ height: 70, background: "#43A047" }} />
                  <div className="mock-bar" style={{ height: 57, background: "#E0662A" }} />
                </div>
                <div className="mock-bar-pair">
                  <div className="mock-bar" style={{ height: 52, background: "#43A047" }} />
                  <div className="mock-bar" style={{ height: 60, background: "#E0662A" }} />
                </div>
              </div>
            </div>
            <div className="mock-insights">
              <div className="mock-chart-title">Insights del mes</div>
              <div className="mock-insight" style={{ borderColor: "#43A047" }}>Superaste tu meta de ingresos: 106%.</div>
              <div className="mock-insight" style={{ borderColor: "#FFB300" }}>Ahorro en 17,8% — meta del 30%.</div>
              <div className="mock-insight" style={{ borderColor: "#9575CD" }}>TC al 30,5% del límite disponible.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
