import { Link } from "react-router-dom";
import Photo from "../components/Photo.jsx";
import Reveal from "../components/Reveal.jsx";
import Stripe from "../components/Stripe.jsx";
import Affiliation from "../components/Affiliation.jsx";
import MissionVision from "../components/MissionVision.jsx";
import { List, Row } from "../components/Rows.jsx";
import {
  images,
  programmes,
  newsArticles,
  admissionNotice,
  college,
} from "../data/site.js";
import { affiliation } from "../data/site.js";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[url(/images/peace.png)] bg-center bg-no-repeat bg-cover">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 min-h-[85vh]">
            {/* Text Column */}
            <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 lg:py-24 relative z-10">
              <div className="anim-fade-up">
                <span className="inline-block text-adcoed-coral text-xs font-bold tracking-[0.2em] uppercase mb-6">
                  Affiliated with EKSU since 2017
                </span>
              </div>
              <h1
                className="text-white anim-fade-up anim-delay-1"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                  lineHeight: 1.1,
                  fontWeight: 400,
                }}
              >
                Shaping the Future <br />
                <span className="italic text-adcoed-coral">of Education</span>
                <br />
                in Nigeria
              </h1>
              <p className="text-white/60 mt-6 max-w-md text-base leading-relaxed anim-fade-up anim-delay-2">
                {college.name} prepares dedicated educators with the
                knowledge, skills, and character to transform communities
                through quality teaching.
              </p>
              <div className="flex flex-wrap gap-3 mt-8 anim-fade-up anim-delay-3">
                <Link href="/admissions/apply" className="btn" style={{ border: "1px solid white", color: "white" }}>
                  Begin Your Application
                </Link>
                <Link href="/programmes" className="btn" style={{ border: "1px solid white", color: "white" }}>
                  Explore Programmes
                </Link>
              </div>
              {/* Decorative accent line */}
              <div className="mt-12 anim-fade-up anim-delay-4">
                <div className="w-12 h-[2px] bg-adcoed-green" />
              </div>
            </div>

            {/* Image Column */}
            <div className="relative lg:block">
              {/* <Photo
                src="/images/college.jpg"
                alt="ADCOED campus"
                label="Hero — Campus Photograph"
                aspectRatio="auto"
                className="absolute inset-0 w-full h-full"
                dark
              /> */}
              {/* Gradient overlay for text readability on mobile */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-adcoed-charcoal via-adcoed-charcoal/60 to-transparent lg:bg-gradient-to-r lg:from-adcoed-charcoal lg:via-transparent lg:to-transparent" /> */}
            </div>
          </div>
        </div>
      </section>
      <div className="wrap">
        <Reveal className="ann">
          <div>
            <b>Admissions announcement</b>
            <p>{admissionNotice}</p>
          </div>
          <Link className="btn" to="/admissions">
            Read admission details
          </Link>
        </Reveal>
      </div>

      <section className="sec">
        <div className="wrap">
          <Reveal>
            <Affiliation detail />
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <div>
            <span
              style={{
                color: "#009241",
                fontWeight: "bold",
                fontSize: "12px",
                letterSpacing: "1.5px",
              }}
            >
              ABOUT ADCOED
            </span>
            <h2
              className="mt-3 mb-6"
              style={{
                lineHeight: "1.2",
                fontWeight: "200",
              }}
            >
              A Legacy of Excellence <br />
              in Teacher Education
            </h2>
            <div className="section-heading-line mb-6" />
            <p className="text-adcoed-slate leading-relaxed mb-4">
              Awori District College of Education (ADCOED) is a distinguished
              institution of learning situated in Otto/Awori, Lagos State. The
              college is committed to producing well-trained, competent, and
              morally upright educators ready to shape the future of
              Nigeria&apos;s education system.
            </p>
            <p className="text-adcoed-slate leading-relaxed mb-6">
              In {affiliation.since}, ADCOED established an affiliation with
              Ekiti State University (EKSU), Ado-Ekiti, expanding its academic
              offerings to include university-validated degree programmes
              alongside its established NCE curriculum.
            </p>
            <Link to="/about" className="btn btn-outline">
              Discover Our Story
            </Link>
          </div>
          <Reveal className="ex">
            <Photo src={images.campus} label="Campus exterior" ratio="4 / 5" />
            <Photo src={images.classroom} label="Classroom" ratio="4 / 5" />
          </Reveal>
        </div>
      </section>

      <Stripe />
      <MissionVision />

      <section className="sec">
        <div className="wrap">
          <span
            style={{
              color: "#009241",
              fontWeight: "bold",
              fontSize: "12px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            Academic Programmes
          </span>
          <Reveal>
            <h2>Programmes and departments</h2>
            {/* <p>
              Replace these with the college’s approved departments and awards.
            </p> */}
            <List>
              {programmes.map((p, i) => (
                <Row
                  key={i}
                  to="/programmes"
                  title={p.name}
                  text={p.summary}
                  action={<span aria-hidden="true">View</span>}
                />
              ))}
            </List>
          </Reveal>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <Reveal>
            <h2>Institutional highlights</h2>
            <p>Only verified facts belong here.</p>
            <div className="facts">
              <div>
                <b>Location</b>Awori, Ogun State, Nigeria
              </div>
              <div>
                <b>Affiliation</b>Ekiti State University (EKSU), since 2017
              </div>
              <div>
                <b>Accreditation</b>
                <span className="ph-note">[Details to be supplied]</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal className="ex">
            <Photo
              src={images.students}
              label="Students and teaching activities"
              ratio="3 / 2"
            />
            <Photo src={images.facilities} label="Facilities" ratio="3 / 4" />
          </Reveal>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <span
            style={{
              color: "#009241",
              fontWeight: "bold",
              fontSize: "12px",
              letterSpacing: "1.5px",
            }}
          >
            Latest Updates
          </span>
          <Reveal>
            <h2>News and announcements</h2>
            <List>
              {newsArticles.map((n) => (
                <Row
                  key={n.id}
                  to={`/news/${n.id}`}
                  tag={n.date}
                  title={n.title}
                  text={n.summary}
                  action={<span aria-hidden="true">Read</span>}
                />
              ))}
            </List>
          </Reveal>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <div>
            <h2 style={{ margin: "0 0 8px" }}>Ready to apply?</h2>
            <p style={{ margin: 0 }}>
              Check the requirements, then complete the online form.
            </p>
          </div>
          <Link className="btn w" to="/apply">
            Apply online
          </Link>
        </div>
      </section>
    </>
  );
}
