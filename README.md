# Luqui Finanzas — Página de ventas

Landing page de un solo scroll para Luqui Finanzas. Sitio estático (React +
Vite), sin backend: el checkout se hace en Hotmart.

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
