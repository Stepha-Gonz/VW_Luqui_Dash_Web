export default function FinalCTASection({ hotmartUrl }) {
  return (
    <section className="final-cta">
      <div className="final-cta-inner">
        <h2 data-reveal className="final-cta-title">Empieza a ver tu dinero con más claridad.</h2>
        <p data-reveal className="final-cta-sub">
          No necesitas tener todo resuelto para empezar. Solo necesitas saber dónde estás hoy.
        </p>
        <a
          data-reveal
          href={hotmartUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ padding: "19px 34px", fontSize: "17.5px" }}
        >
          Conocer la oferta de lanzamiento →
        </a>
      </div>
    </section>
  );
}
