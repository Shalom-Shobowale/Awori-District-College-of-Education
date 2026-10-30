import { Link } from "react-router-dom";
import Page from "../components/Page.jsx";
import { newsArticles } from "../data/site.js";
import Photo from "../components/Photo.jsx";

const categoryLabels = {
  announcement: "Announcement",
  event: "Event",
  academic: "Academic",
  general: "General",
};

export default function News() {
  return (
    <>
      {/* Dark Header */}
      {/* <section
        className="py-16 md:py-24"
        style={{
          backgroundColor: "var(--color-adcoed-charcoal, #1a1a1a)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-adcoed-coral text-xs font-bold tracking-[0.2em] uppercase block mb-3 anim-fade-up">
            Updates
          </span>

          <h1
            className="text-white anim-fade-up anim-delay-1"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
            }}
          >
            News &amp; Announcements
          </h1>

          <p className="text-white/60 mt-4 max-w-lg text-sm leading-relaxed anim-fade-up anim-delay-2">
            Stay informed with the latest news, events, and announcements from
            ADCOED.
          </p>

          <div className="w-12 h-[2px] bg-adcoed-green mt-6 anim-fade-up anim-delay-3" />
        </div>
      </section> */}

      <Page
        title="News & Announcements"
        text="Updates"
        subtitle="Stay informed with the latest news, events, and announcements from ADCOED."
      >
        {/* News Articles */}
        
          <div className="max-w-7xl mx-auto px-6">
            {newsArticles.length === 0 ? (
              <div className="text-center py-16">
                <p>No news articles available at this time.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
                {newsArticles.map((n) => (
                  <Link
                    key={n.id}
                    to={`/news/${n.slug}`}
                    className="group block"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Photo
                      src={n.image}
                      alt={n.title}
                      label="News Image"
                      aspectRatio="16/10"
                      className="mb-5"
                    />

                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-adcoed-coral text-xs font-bold tracking-wider uppercase">
                        {categoryLabels[n.category] || n.category || "News"}
                      </span>

                      <span className="text-adcoed-border">·</span>

                      <time className="text-adcoed-muted text-xs">
                        {n.date}
                      </time>
                    </div>

                    <h2
                      className="mb-2 group-hover:text-adcoed-green transition-colors"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "1.2rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {n.title}
                    </h2>

                    <p className="text-adcoed-muted text-sm leading-relaxed">
                      {n.summary || n.excerpt}
                    </p>

                    <span className="inline-block mt-3 text-adcoed-green text-xs font-semibold tracking-wider uppercase group-hover:underline">
                      Read More →
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
      </Page>
    </>
  );
}
