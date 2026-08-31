import dashboard from "../assets/dashboard-screenshot.webp";

// Pasa una URL de embed (YouTube/Vimeo) por prop cuando el video esté listo.
// Mientras tanto se muestra un placeholder con la captura del dashboard.
export default function VideoSection({ videoUrl = "" }) {
  const hasVideo = Boolean(videoUrl && videoUrl.trim());

  return (
    <section id="video" className="section">
      <div className="section-inner">
        <div data-reveal style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 40px" }}>
          <h2 className="section-title" style={{ marginBottom: 14 }}>Mira Luqui en acción.</h2>
          <p className="section-lead" style={{ marginTop: 0 }}>
            En unos minutos podrás ver cómo Luqui conecta las diferentes partes de tus finanzas.
          </p>
        </div>
        <div data-reveal className="video-wrap">
          {hasVideo ? (
            <div className="video-embed">
              <iframe
                src={videoUrl}
                title="Luqui en acción"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="video-placeholder">
              <img src={dashboard} alt="Preview del dashboard de Luqui" />
              <div className="video-overlay">
                <div className="play-button">
                  <span style={{ fontSize: 22, color: "#0A1628", marginLeft: 5 }}>▶</span>
                </div>
                <span className="eyebrow" style={{ color: "#FFFDF9", margin: 0 }}>Video próximamente</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
