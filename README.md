# 🧡 Luqui — Sales Website WD

A modern sales website for **Luqui Finanzas**, a financial intelligence ecosystem
designed to help people understand, organize, and make better decisions with
their money. Landing page de un solo scroll: presenta el producto y lleva al
usuario a Hotmart para completar la compra. Sitio estático (React + Vite), sin
backend — el checkout ocurre fuera del sitio.

## 🚀 Project

This website is part of the Luqui ecosystem and serves as the public-facing
sales experience for its digital products and financial tools.

## 🌱 Vision

Luqui goes beyond personal finance. The long-term vision is to build an
ecosystem around financial intelligence, including personal finance,
investments, business finance, AI-powered tools, and eventually a dedicated
application.

## 🛠️ Built With

- React + Vite
- CSS (sin frameworks)
- Responsive Web Design

## Antes de publicar

Editar en [`frontend/src/services/pricing.js`](frontend/src/services/pricing.js):

- `HOTMART_URL` — reemplazar `REEMPLAZAR_CON_ENLACE_DE_HOTMART` por el enlace real del producto.
- `PRICES` — ajustar los precios fijos por moneda si cambian.

## Desarrollo

Desde la raíz del proyecto (instala dependencias una sola vez):

```bash
cd frontend && npm install && cd ..
npm run dev
```

Abre `http://localhost:5173`.

## Build de producción

```bash
npm run build
```

Genera `frontend/dist/`, listo para desplegar en cualquier hosting estático
(Netlify, Vercel, GitHub Pages, etc.).

## Estructura

Ver [`CLAUDE.md`](CLAUDE.md) para la arquitectura completa y las reglas del
proyecto.

---

🧡 **Luqui — Financial Intelligence**
