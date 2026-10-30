
export default function PageHeader({ title, subtitle, text }) {
  return (
    <section
      className="py-16 md:py-24"
      style={{
        backgroundColor: "var(--color-adcoed-charcoal, #1a1a1a)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <span className="block text-adcoed-coral text-xs font-bold tracking-[0.2em] uppercase mb-3 anim-fade-up">
          {text}
        </span>

        <h1
          className="text-white anim-fade-up anim-delay-1"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.1,
            fontWeight: 400,
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p className="text-white/60 mt-4 max-w-2xl text-sm leading-relaxed anim-fade-up anim-delay-2">
            {subtitle}
          </p>
        )}

        <div className="w-12 h-0.5 bg-adcoed-green mt-6 anim-fade-up anim-delay-3" />
      </div>
    </section>
  );
}
