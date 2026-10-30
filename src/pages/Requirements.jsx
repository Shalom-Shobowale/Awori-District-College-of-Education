// import { Link } from "react-router-dom";
// import Page from "../components/Page.jsx";
// import { List, Row } from "../components/Rows.jsx";
// import { requirements } from "../data/site.js";
// export default function Requirements() {
//   return (
//     <Page title="Admission requirements" text="Admissions">
//       <p className="note">
//         Replace with the college’s approved requirements. Any EKSU-related entry
//         requirements must be verified. None are assumed here.
//       </p>
//       <List>
//         {requirements.map(([t, d]) => (
//           <Row key={t} title={t} text={d} />
//         ))}
//       </List>
//       <p style={{ marginTop: 28 }}>
//         <Link className="btn" to="/apply">
//           Start your application
//         </Link>
//       </p>
//     </Page>
//   );
// }

import { Link } from "react-router-dom";
import Page from "../components/Page.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Requirements() {
  const nceRequirements = [
    "Senior Secondary Certificate (SSCE) / WAEC / NECO with relevant credits, including English Language and Mathematics.",
    "Two relevant A-Level passes or equivalent.",
    "National Diploma (ND) or equivalent from a recognised institution.",
    "Candidates must meet any additional requirements specific to their chosen programme.",
  ];

  const degreeRequirements = [
    "Senior Secondary Certificate (SSCE) with credits in relevant subjects.",
    "UTME (JAMB) score as required by EKSU for the chosen programme.",
    "Holders of NCE or equivalent qualifications may be eligible for direct entry.",
    "Additional requirements as specified by Ekiti State University (EKSU).",
  ];

  const documents = [
    "Completed application form",
    "Original and photocopies of academic certificates",
    "JAMB result slip (where applicable)",
    "Birth certificate or age declaration",
    "Local government identification letter",
    "Recent passport photographs",
    "Evidence of payment of application fee",
    "Any other documents as specified by the college",
  ];

  return (
    <Page title="Admission Requirements" text="Admissions">
      {/* NCE Requirements */}
      <Reveal>
        <div className="mb-16">
          <span className="block text-adcoed-green text-xs font-bold tracking-[0.2em] uppercase mb-3 anim-fade-up">
            NCE Programmes
          </span>

          <h2
            className="mt-3 mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              lineHeight: 1.1,
              fontWeight: 400,
            }}
          >
            Nigeria Certificate in Education (NCE)
          </h2>

          <div className="section-heading-line mb-8" />

          <div className="bg-adcoed-cream p-6 md:p-8 mb-6">
            <h3
              className="font-medium mb-4 text-adcoed-green uppercase tracking-wider"
              style={{ fontSize: "1.15rem" }}
            >
              General Entry Requirements
            </h3>

            <p className="text-adcoed-slate text-sm mb-4 italic">
              The specific entry requirements should be confirmed from official
              college documentation. The following are common requirements and
              should be verified.
            </p>

            <ul className="space-y-3">
              {nceRequirements.map((req, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-adcoed-slate text-sm leading-relaxed"
                >
                  <span className="w-5 h-5 bg-adcoed-green text-white flex items-center justify-center text-xs shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      {/* EKSU Degree Requirements */}
      <Reveal>
        <div className="mb-16">
          <span className="block text-adcoed-green text-xs font-bold tracking-[0.2em] uppercase mb-3 anim-fade-up">
            EKSU-Affiliated Degree Programmes
          </span>

          <h2
            className="mt-3 mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              lineHeight: 1.1,
              fontWeight: 400,
            }}
          >
            Bachelor of Education (B.Ed.)
          </h2>

          <div className="section-heading-line mb-8" />

          <div className="bg-adcoed-cream p-6 md:p-8 mb-6">
            <h3
              className="font-medium mb-4 text-adcoed-green uppercase tracking-wider"
              style={{ fontSize: "1.15rem" }}
            >
              Entry Requirements
            </h3>

            <p className="text-adcoed-slate text-sm mb-4 italic">
              The specific entry requirements for EKSU-affiliated degree
              programmes should be confirmed with the college and EKSU.
              Requirements may differ from NCE requirements.
            </p>

            <ul className="space-y-3">
              {degreeRequirements.map((req, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-adcoed-slate text-sm leading-relaxed"
                >
                  <span className="w-5 h-5 bg-adcoed-coral text-white flex items-center justify-center text-xs shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      {/* Required Documents */}
      <Reveal>
        <div className="mb-16">
          <h2
            className="mb-4 "
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              lineHeight: 1.1,
              fontWeight: 400,
            }}
          >
            Required Documents
          </h2>

          <div className="section-heading-line mb-8" />

          <p className="text-adcoed-slate text-sm mb-4 italic">
            Confirm the exact list of required documents from official college
            documentation.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {documents.map((doc) => (
              <div
                key={doc}
                className="flex items-start gap-2 text-adcoed-slate text-sm"
              >
                <svg
                  className="w-4 h-4 text-adcoed-green mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {doc}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Application CTA */}
      <Reveal>
        <div className="bg-adcoed-green p-8 md:p-10 text-center">
          <h3 className="text-white mb-3">Ready to Apply?</h3>

          <p className="text-white/70 text-sm mb-6 " style={{ maxWidth: 600, margin: "10px auto" }}>
            If you meet the requirements, proceed to submit your application.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/apply"
              className="btn bg-white text-adcoed-green hover:bg-white/90"
            >
              Apply Online
            </Link>

            <Link to="/downloads" className="btn" style={{ color: "white" }}>
              Download Forms
            </Link>
          </div>
        </div>
      </Reveal>
    </Page>
  );
}
