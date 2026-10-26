import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// ¿Existe el archivo en public/assets/? (video y poster de «Mira Luqui en acción»).
// Se decide al armar la página, así no se piden archivos que no están (sin errores en consola).
const existeEnAssets = (nombre) =>
  fs.existsSync(fileURLToPath(new URL(`./public/assets/${nombre}`, import.meta.url)))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __VIDEO_DISPONIBLE__: JSON.stringify(existeEnAssets('como-funciona.mp4')),
    __POSTER_DISPONIBLE__: JSON.stringify(existeEnAssets('como-funciona-poster.jpg')),
  },
})
