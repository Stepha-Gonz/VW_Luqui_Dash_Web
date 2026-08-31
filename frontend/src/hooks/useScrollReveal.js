import { useEffect } from "react";

// Aplica la animación de aparición a todos los elementos [data-reveal]
// una vez montada la vista. Respeta prefers-reduced-motion.
export function useScrollReveal(deps = []) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!nodes.length || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    const show = (n) => n.classList.add("is-visible");
    const showIfVisible = () => {
      nodes.forEach((n) => {
        const r = n.getBoundingClientRect();
        if (r.top < (window.innerHeight || 800) * 0.95 && r.bottom > 0) show(n);
      });
    };

    const raf = requestAnimationFrame(showIfVisible);
    window.addEventListener("scroll", showIfVisible, { passive: true });
    const fallback = setTimeout(() => nodes.forEach(show), 2500);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          show(entry.target);
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );
    nodes.forEach((n) => io.observe(n));

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", showIfVisible);
      clearTimeout(fallback);
      io.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
