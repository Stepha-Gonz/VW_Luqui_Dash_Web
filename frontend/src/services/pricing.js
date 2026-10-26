// Enlace de checkout en Hotmart. Todos los CTA de compra de la página usan esta constante.
export const HOTMART_URL = "https://pay.hotmart.com/S108191637H";

// Cupos del precio de lanzamiento (texto bajo el precio). Cambiar aquí cuando se actualice la oferta.
export const LAUNCH_SPOTS = 30;

// Precios fijos por moneda, definidos manualmente (SIN conversión en tiempo real).
// Editar aquí los valores cuando cambien las tarifas o la oferta de lanzamiento.
export const PRICES = {
  COP: { original: 39900, launch: 29900, name: "Peso colombiano", symbol: "$", sep: ".", suffix: false },
  USD: { original: 12, launch: 9, name: "Dólar estadounidense", symbol: "US$", sep: ",", suffix: false },
  MXN: { original: 249, launch: 179, name: "Peso mexicano", symbol: "$", sep: ",", suffix: false },
  ARS: { original: 14900, launch: 10900, name: "Peso argentino", symbol: "$", sep: ".", suffix: false },
  CLP: { original: 11900, launch: 8900, name: "Peso chileno", symbol: "$", sep: ".", suffix: false },
  PEN: { original: 45, launch: 33, name: "Sol peruano", symbol: "S/", sep: ",", suffix: false },
  EUR: { original: 15, launch: 10, name: "Euro", symbol: "€", sep: ".", suffix: true },
  GBP: { original: 13, launch: 9, name: "Libra esterlina", symbol: "£", sep: ",", suffix: false },
};

export const DEFAULT_CURRENCY = "COP";

// País detectado -> moneda a mostrar.
const COUNTRY_TO_CURRENCY = {
  CO: "COP", MX: "MXN", AR: "ARS", CL: "CLP", PE: "PEN", ES: "EUR", GB: "GBP",
  US: "USD", EC: "USD", PA: "USD", SV: "USD", VE: "USD", UY: "USD", PY: "USD",
  BO: "USD", CR: "USD", GT: "USD", HN: "USD", NI: "USD", DO: "USD", PR: "USD",
};

// Prefijos de zona horaria -> país. Cubre LatAm + España/UK como aproximación
// de geolocalización sin pedir permisos ni depender de un servicio externo.
const TZ_PREFIX_TO_COUNTRY = [
  ["America/Bogota", "CO"],
  ["America/Mexico", "MX"], ["America/Monterrey", "MX"], ["America/Cancun", "MX"],
  ["America/Tijuana", "MX"], ["America/Merida", "MX"], ["America/Chihuahua", "MX"],
  ["America/Hermosillo", "MX"], ["America/Mazatlan", "MX"], ["America/Matamoros", "MX"],
  ["America/Argentina", "AR"], ["America/Buenos_Aires", "AR"], ["America/Cordoba", "AR"],
  ["America/Santiago", "CL"], ["Pacific/Easter", "CL"],
  ["America/Lima", "PE"],
  ["Europe/Madrid", "ES"], ["Atlantic/Canary", "ES"], ["Africa/Ceuta", "ES"],
  ["Europe/London", "GB"], ["Europe/Belfast", "GB"],
  ["America/Guayaquil", "EC"], ["Pacific/Galapagos", "EC"],
  ["America/Panama", "PA"], ["America/Caracas", "VE"], ["America/Montevideo", "UY"],
  ["America/Asuncion", "PY"], ["America/La_Paz", "BO"], ["America/Costa_Rica", "CR"],
  ["America/Guatemala", "GT"], ["America/Tegucigalpa", "HN"], ["America/Managua", "NI"],
  ["America/El_Salvador", "SV"], ["America/Santo_Domingo", "DO"], ["America/Puerto_Rico", "PR"],
];

function countryFromTimeZone(tz) {
  if (!tz) return null;
  const hit = TZ_PREFIX_TO_COUNTRY.find(([prefix]) => tz.indexOf(prefix) === 0);
  return hit ? hit[1] : null;
}

function countryFromLanguages() {
  const langs = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || ""];
  for (const lang of langs) {
    const region = (lang.split("-")[1] || "").toUpperCase();
    if (region && COUNTRY_TO_CURRENCY[region]) return region;
  }
  return null;
}

// Detecta la moneda a mostrar a partir de la zona horaria/idioma del
// navegador del cliente. No hay preferencia manual ni memoria entre
// visitas: la moneda depende únicamente de dónde está el cliente ahora.
export function detectCurrency() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const country = countryFromTimeZone(tz) || countryFromLanguages();
    const currency = country && COUNTRY_TO_CURRENCY[country];
    if (currency && PRICES[currency]) return currency;
  } catch {
    // Intl no disponible: usar el valor por defecto.
  }
  return DEFAULT_CURRENCY;
}

export function formatPrice(code, value) {
  const p = PRICES[code] || PRICES[DEFAULT_CURRENCY];
  const digits = String(Math.round(value)).replace(/\B(?=(\d{3})+(?!\d))/g, p.sep);
  return p.suffix ? `${digits} ${p.symbol}` : `${p.symbol}${digits}`;
}

export function discountPercent(code) {
  const p = PRICES[code] || PRICES[DEFAULT_CURRENCY];
  return Math.round((1 - p.launch / p.original) * 100);
}
