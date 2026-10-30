import Page from "../components/Page.jsx";
import Photo from "../components/Photo.jsx";
import Reveal from "../components/Reveal.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { college, images } from "../data/site.js";

export default function Contact() {
  return (
    <Page title="Contact ADCOED" text="Get in Touch">
      <section className="py-10 md:py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-5">
            <Reveal>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.5rem, 4vw, 2rem)",
                  lineHeight: 1.1,
                  fontWeight: 400,
                }}
              >
                We'd Love to Hear from You
              </h2>

              <p className="text-adcoed-slate text-sm leading-relaxed mb-8">
                Whether you have questions about admissions, programmes, or
                campus life, our team is here to help. Reach out using any of
                the methods below.
              </p>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="mb-1 font-medium" style={{ fontSize: "17px"}}>
                      Address
                    </h3>
                    <p className="text-adcoed-muted text-sm leading-relaxed">
                      {college.name}
                      <br />
                      {college.address}, {college.location}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a2 2 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-medium mb-1" style={{ fontSize: "17px"}}>Phone</h3>
                    <p className="text-adcoed-muted text-sm">
                      {college.phone || "Official phone number to be updated"}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-medium mb-1" style={{ fontSize: "17px"}}>Email</h3>
                    <p className="text-adcoed-muted text-sm">
                      {college.email || "Official email to be updated"}
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-medium mb-1" style={{ fontSize: "17px"}}>Office Hours</h3>
                    <p className="text-adcoed-muted text-sm">
                      Monday – Friday: 8:00 AM – 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Campus Image / Map */}
      <section className="bg-adcoed-cream py-12">
        <Reveal>
          <div className="img-placeholder h-64 md:h-80">
            <div className="flex flex-col items-center gap-2">
              <svg
                className="w-8 h-8 text-adcoed-green/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              <span className="text-adcoed-green/50 text-xs font-medium tracking-wider uppercase">
                Map — Embed Google Maps here
              </span>
            </div>
          </div>
        </Reveal>
      </section>
    </Page>
  );
}
