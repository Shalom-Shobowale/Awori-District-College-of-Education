import Page from "../components/Page.jsx";
import Reveal from "../components/Reveal.jsx";
import { downloads, asset } from "../data/site.js";

const categoryLabels = {
  admissions: "Admissions",
  academic: "Academic",
  administrative: "Administrative",
  forms: "Forms",
};

export default function Downloads() {
  const categories = [...new Set(downloads.map((d) => d.category || "forms"))];

  return (
    <Page
      title="Downloads & Forms"
      subtitle="Access official college documents, application forms, and academic resources."
      text="Resources"
    >
      {/* Downloads by Category */}
      <div className="space-y-14">
        {categories.map((cat) => {
          const items = downloads.filter(
            (d) => (d.category || "forms") === cat,
          );

          return (
            <div key={cat}>
              {/* Category Heading */}
              <Reveal>
                <h2
                  className="mb-6"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1rem, 4vw, 1.5rem)",
                    lineHeight: 1.1,
                    fontWeight: 400,
                  }}
                >
                  {categoryLabels[cat] || cat}
                </h2>

                <div className="section-heading-line mb-6 bg-adcoed-coral" />
              </Reveal>

              {/* Documents */}
              <div className="space-y-3">
                {items.map((doc, i) => (
                  <Reveal key={doc.title} delay={i * 60}>
                    <div className="flex lg:flex-row flex-col items-center gap-4 bg-adcoed-cream p-5 hover:bg-white border border-transparent hover:border-adcoed-border transition-all group">
                      {/* Download Icon */}
                      <div className="w-10 h-10 bg-adcoed-green text-white flex items-center justify-center shrink-0">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>

                      {/* Document Information */}
                      <div className="flex-1 min-w-0">
                        <h3 className="group-hover:text-adcoed-green transition-colors">
                          {doc.title}
                        </h3>

                        <p className="text-adcoed-slate text-xs mt-1">
                          {doc.description || "Official college document"}
                        </p>
                      </div>

                      {/* Download Action */}
                      <div className="text-right shrink-0">
                        {doc.available ? (
                          <a href={asset(doc.file)} download className="btn o">
                            Download
                          </a>
                        ) : (
                          <button className="btn o" disabled>
                            Unavailable
                          </button>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Page>
  );
}
