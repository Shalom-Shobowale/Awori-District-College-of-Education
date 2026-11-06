
import Reveal from "./Reveal.jsx";
import { mvv } from "../data/site.js";

export default function MissionVision() {
  return (
    <section className="pt-20 md:pt-28 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <Reveal>
          <div className="text-center mb-16">
            <span className="section-label">Our Foundation</span>

            <h2
              className="mt-3"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              }}
            >
              Mission, Vision &amp; Core Values
            </h2>

            <div className="section-heading-line mx-auto mt-4" />
          </div>
        </Reveal>

        {/* Mission and Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {/* Mission */}
          <Reveal className="h-full">
            <div className="bg-adcoed-cream p-8 border-t-4 border-adcoed-green h-full">
              <h3
                className="text-adcoed-green font-semibold mb-4"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.25rem",
                }}
              >
                Our Mission
              </h3>

              <p className="text-adcoed-slate leading-relaxed">
                {mvv.mission}
              </p>
            </div>
          </Reveal>

          {/* Vision */}
          <Reveal className="h-full">
            <div className="bg-adcoed-cream p-8 border-t-4 border-adcoed-coral h-full">
              <h3
                className="text-adcoed-coral font-semibold mb-4"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.25rem",
                }}
              >
                Our Vision
              </h3>

              <p className="text-adcoed-slate leading-relaxed">
                {mvv.vision}
              </p>
            </div>
          </Reveal>

        </div>

        {/* Core Values */}
        <Reveal>
          <h3
            className="text-center mb-10"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1.5rem",
            }}
          >
            Our Core Values
          </h3>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">

          {mvv.values.map((value, i) => (
            <Reveal key={i}>
              <div className="text-center">

                {/* Value Icon */}
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-adcoed-green text-white flex items-center justify-center text-xl font-bold"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                  }}
                >
                  {typeof value === "string"
                    ? value.charAt(0).toUpperCase()
                    : value.name.charAt(0).toUpperCase()}
                </div>

                <h4 className="font-semibold text-sm mb-2">
                  {typeof value === "string" ? value : value.name}
                </h4>

                {typeof value !== "string" && (
                  <p className="text-adcoed-muted text-xs leading-relaxed">
                    {value.description}
                  </p>
                )}

              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}
