import { useState } from "react";
import logo from "../assets/logo.webp";

const NAV_LINKS = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#que-incluye", label: "Qué incluye" },
  { href: "#ver-luqui", label: "Ver Luqui" },
  { href: "#oferta", label: "Oferta" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="site-nav">
        <a href="#top" className="brand" onClick={close}>
          <img src={logo} alt="Luqui" className="brand-logo" />
        </a>

        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
          <a href="#oferta" className="nav-cta">Conocer la oferta</a>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="mobile-menu">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>{link.label}</a>
          ))}
          <a href="#oferta" className="nav-cta" onClick={close}>Conocer la oferta</a>
        </div>
      )}
    </header>
  );
}
