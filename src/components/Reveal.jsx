import { useEffect, useRef } from "react";
export default function Reveal({ as: T = "div", className = "", children }) {
  const r = useRef(null);
  useEffect(() => {
    const el = r.current;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <T ref={r} className={`rv ${className}`}>
      {children}
    </T>
  );
}
