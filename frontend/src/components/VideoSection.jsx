import dashboard from "../assets/dashboard-screenshot.webp";

// Archivos del video (carpeta frontend/public/assets/). Se muestran solo si existen al
// armar la página (vite.config.js lo detecta); mientras no existan, se ve el bloque
// «Video próximamente» y el navegador no pide archivos que no están.
const VIDEO_SRC = "/assets/como-funciona.mp4";
const POSTER_SRC = "/assets/como-funciona-poster.jpg";

const HAS_VIDEO = typeof __VIDEO_DISPONIBLE__ !== "undefined" && __VIDEO_DISPONIBLE__;
const HAS_POSTER = typeof __POSTER_DISPONIBLE__ !== "undefined" && __POSTER_DISPONIBLE__;

export default function VideoSection() {
  return (
    <section id="video" className="section">
      <div className="section-inner">
        <div data-reveal style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 40px" }}>
          <h2 className="section-title" style={{ marginBottom: 14 }}>Mira Luqui en acción.</h2>
          <p className="section-lead" style={{ marginTop: 0 }}>
            En menos de un minuto podrás ver cómo Luqui conecta las diferentes partes de tus finanzas.
          </p>
        </div>
        <div data-reveal className="video-wrap">
          {HAS_VIDEO ? (
            <div className="video-embed">
              <video
                controls
                playsInline
                preload="metadata"
                poster={HAS_POSTER ? POSTER_SRC : undefined}
                aria-label="Video: Luqui en acción"
              >
                <source src={VIDEO_SRC} type="video/mp4" />
                Tu navegador no puede reproducir este video.
              </video>
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
