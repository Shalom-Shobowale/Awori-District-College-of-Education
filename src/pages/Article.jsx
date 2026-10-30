import { useParams, Link, Navigate } from "react-router-dom";
import Photo from "../components/Photo.jsx";
import { newsArticles } from "../data/site.js";

export default function Article() {
  const { slug } = useParams();

  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  return (
    <>
      {/* Header */}
      <section className="bg-adcoed-charcoal py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/news"
            className="text-white/50 text-xs font-semibold tracking-wider uppercase hover:text-white transition-colors inline-flex items-center gap-1 mb-6"
          >
            ← Back to News
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-adcoed-coral text-xs font-bold tracking-wider uppercase">
              {article.category}
            </span>
            <span className="text-white/30">·</span>
            <time className="text-white/50 text-xs">{article.date}</time>
          </div>

          <h1
            className="text-white anim-fade-up"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              lineHeight: 1.15,
            }}
          >
            {article.title}
          </h1>

          <div className="w-12 h-[2px] bg-adcoed-green mt-6 anim-fade-up anim-delay-1" />
        </div>
      </section>

      {/* Article */}
      <article className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <Photo
            src={article.image}
            label="Article image"
            ratio="16/9"
            className="mb-10"
          />

          <div
            className="article-body prose prose-lg max-w-full text-adcoed-slate leading-relaxed
    [&_p]:mb-4 [&_p]:text-base [&_p]:leading-relaxed
    [&_strong]:text-adcoed-charcoal
    [&_a]:text-adcoed-green [&_a]:underline mt-6"
            dangerouslySetInnerHTML={{
              __html: article.body || "",
            }}
          />

          <div className="mt-12 pt-8 border-t border-adcoed-border flex flex-wrap gap-3">
            <Link to="/news" className="btn btn-outline text-xs">
              ← All News
            </Link>

            <Link to="/apply" className="btn btn-primary text-xs">
              Apply to ADCOED
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
