import Page from "../components/Page.jsx";
import Photo from "../components/Photo.jsx";
import Affiliation from "../components/Affiliation.jsx";
import MissionVision from "../components/MissionVision.jsx";
import Stripe from "../components/Stripe.jsx";
import { images, aboutCollege } from "../data/site.js";

const schoolEnvironment = [
  {
    name: "Classrooms",
    description:
      "Modern lecture halls and classrooms equipped for effective teaching and learning.",
  },
  {
    name: "Laboratories",
    description:
      "Well-equipped science and computer labs for hands-on learning and research.",
  },
  {
    name: "Library",
    description:
      "A comprehensive library with a wide range of academic resources and study spaces.",
  },
  {
    name: "Sports Facilities",
    description:
      "Facilities for various sports and physical activities to promote student wellness.",
  },
];
export default function About() {
  return (
    <>
      <Page
        title="Awori District
College of Education"
        subtitle="Discover our history, mission, leadership, and commitment to quality education."
        text="About"
      >
        <div className="split">
          <div>
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                lineHeight: 1.2,
              }}
            >
              Educating Tomorrow&apos;s Leaders Today
            </h2>
            <p className="text-adcoed-slate leading-relaxed mb-4">
              {aboutCollege.intro}
            </p>
            <p className="text-adcoed-slate leading-relaxed mb-4">
              {aboutCollege.history}
            </p>
            <p className="text-adcoed-slate leading-relaxed">
              {aboutCollege.leadership}
            </p>
          </div>
          <Photo src={images.campus} label="Campus exterior" ratio="4 / 3" />
        </div>
        <div style={{ marginTop: 56 }}>
          <Affiliation detail />
        </div>
      </Page>

      <Stripe />
      <MissionVision />
      <div className="mt-10 bg-adcoed-cream py-20">
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            textAlign: "center",
          }}
        >
          Our Campus &amp; Facilities
        </h2>
        <section className="flex justify-center w-[92%] mx-auto gap-5">
          {schoolEnvironment.map((env, index) => (
            <div className="bg-white w-[22%] rounded-b-xs" key={index}>
              <Photo
                src={images.campus}
                label="Campus exterior"
                className="w-full"
              />
              <div className="p-3">
                <p
                  className="font-medium text-[14px]"
                  style={{ margin: "5px 10px" }}
                >
                  {env.name}
                </p>
                <p
                  className="text-xs text-gray-700"
                  style={{ margin: "0px 10px" }}
                >
                  {env.description}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
