# CLAUDE.md

## Qué es este proyecto

Página de ventas (landing page) de **Luqui Finanzas**. Es una página estática de
un solo scroll: presenta el producto y termina llevando al usuario a Hotmart
para completar la compra. No procesa pagos ni requiere cuentas de usuario.

## Golden rule

El demo (`Demo/Luqui Landing.html`) es la **fuente de verdad de la UI**. La
implementación debe respetar el mismo copy, secciones, colores y tipografías.
Si algo no está claro en el demo, preguntar antes de inventar contenido nuevo.

## Desviación documentada del stack base

La plantilla estándar (`Claude guide code/SETUP_GUIDE_v3.md`) es full-stack
(React + Vite + FastAPI + PostgreSQL + Redis). Esta página **no** usa backend,
base de datos ni cache: es contenido estático, sin login, sin datos que
persistir del lado del servidor, y el checkout ocurre fuera del sitio (Hotmart).
Por la regla 5 de la guía ("no agregar módulos que el proyecto no necesita"),
solo se creó `frontend/`. Si en el futuro el proyecto necesita backend (por
ejemplo, un webhook de Hotmart), agregarlo siguiendo la arquitectura MVC de la
guía en ese momento, no antes.

## Arquitectura (frontend)

- `views/` → páginas completas (`Landing.jsx` es la única vista).
- `components/` → una sección de la landing por archivo (Header, Hero,
  OfferSection, FAQSection, etc.), todas presentacionales.
- `services/pricing.js` → toda la lógica de precios y moneda (sin componentes
  de UI aquí).
- `hooks/` → lógica reutilizable no visual (animación de aparición al hacer
  scroll).
- `assets/` → imágenes ya optimizadas (WebP) extraídas del demo.

## Precios y moneda — cómo editarlos

Todo vive en [`frontend/src/services/pricing.js`](frontend/src/services/pricing.js):

- `PRICES`: objeto con precio original y de lanzamiento **fijos por moneda**
  (COP, USD, MXN, ARS, CLP, PEN, EUR, GBP). No hay conversión en tiempo real:
  para cambiar un precio, editar el número directamente en este objeto.
- `detectCurrency()`: detecta el país por zona horaria/idioma del navegador
  del cliente y con eso elige qué moneda mostrar. **No hay selector manual**:
  el cliente no puede cambiar la moneda ni ver el precio en otra distinta a
  la que le corresponde por su ubicación (decisión explícita del usuario —
  no reintroducir un selector sin que lo pida de nuevo).
- El precio va acompañado siempre del texto: *"El precio final y la moneda
  disponible se confirmarán al continuar con la compra."* — no quitar este
  disclaimer.

## Video, vista previa y publicación

- Archivos en `frontend/public/assets/`: `como-funciona.mp4` (16:9, copia web
  comprimida), `como-funciona-poster.jpg` y `og-luqui.jpg` (1200×1200, vista
  previa al compartir). `vite.config.js` detecta al compilar si existen el mp4
  y el poster; si faltan, `VideoSection` muestra «Video próximamente».
- Cuántos cupos de lanzamiento se muestran: `LAUNCH_SPOTS` en `pricing.js`.
- Publicación: `luquifinance.com` es el sitio Netlify `luqui-webdashboard`
  (conectado a `main`). Con CLI: `npm run build` y, desde `frontend/`,
  `npx netlify-cli deploy --prod --site f364894a-a7a4-4599-afc0-3090646ebdbb --dir dist`.

## Checkout / Hotmart

`HOTMART_URL` en `frontend/src/services/pricing.js` es la única variable que
define a dónde llevan los botones de compra. **Todos** los CTA de compra
(`OfferSection`, `FinalCTASection`) deben usar esa constante — no pegar el
link de Hotmart directamente en un componente. La página nunca procesa pagos:
solo enlaza a Hotmart en una pestaña nueva.

## What NOT to add without approval

- Backend, base de datos, autenticación o cualquier módulo de la plantilla
  full-stack que esta página no usa.
- Conversión de moneda en tiempo real (los precios son fijos por diseño).
- Nuevas secciones, campos o componentes que no estén en el demo.
- Un segundo lugar donde se defina el link de Hotmart o los precios.

## Workflow

1. Leer el demo (`Demo/Luqui Landing.html`) antes de tocar la UI.
2. Precios y link de Hotmart se editan solo en `pricing.js`.
3. Preguntar antes de instalar dependencias o cambiar configuración.
4. Antes de dar por terminado un cambio visual, correr `npm run dev` dentro de
   `frontend/` y revisarlo en el navegador (desktop y mobile).
