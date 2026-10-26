import { PRICES, LAUNCH_SPOTS, formatPrice, discountPercent } from "../services/pricing";

export default function OfferSection({ currency, hotmartUrl }) {
  const p = PRICES[currency];
  const off = discountPercent(currency);

  return (
    <section id="oferta" className="section">
      <div className="section-inner">
        <div data-reveal className="offer-card">
          <div>
            <p className="eyebrow" style={{ color: "var(--gold)" }}>Oferta de lanzamiento</p>
            <h2 className="offer-title">Un solo pago para empezar a ver tu dinero con claridad.</h2>
            <p className="offer-desc">
              Oferta especial de lanzamiento. Acceso a Luqui Finanzas con todas las secciones que ya
              están disponibles.
            </p>
          </div>

          <div className="price-box">
            <div className="price-row">
              <span className="price-original">{formatPrice(currency, p.original)}</span>
              <span className="price-badge">-{off}% lanzamiento</span>
            </div>
            <div className="price-launch">{formatPrice(currency, p.launch)}</div>
            <div>
              <p className="price-currency-note">Pago único · {p.name}</p>
              <p className="price-currency-note">Precio de lanzamiento para los primeros {LAUNCH_SPOTS} cupos.</p>
            </div>
            <a href={hotmartUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ display: "block", textAlign: "center", marginTop: 6 }}>
              Conocer mi oferta →
            </a>
            <p className="price-disclaimer">
              El precio final y la moneda disponible se confirmarán al continuar con la compra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
