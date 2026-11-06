
import { Link } from "react-router-dom";
import { college, asset, images } from "../data/site.js";

const quickLinks = [
  { label: "About the College", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Admissions", href: "/admissions" },
  { label: "News & Announcements", href: "/news" },
  { label: "Staff Directory", href: "/staff" },
  { label: "Downloads", href: "/downloads" },
];

const admissionLinks = [
  { label: "Apply Online", href: "/apply" },
  { label: "Admission Requirements", href: "/requirements" },
  { label: "Programmes Offered", href: "/programmes" },
  { label: "Download Forms", href: "/downloads" },
  { label: "Contact Admissions", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={asset(images.logo)}
                alt="ADCOED"
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />

              <div>
                <div
                  className="font-bold text-base"
                  style={{
                    fontFamily: "var(--font-family-heading)",
                  }}
                >
                  ADCOED
                </div>

                <div className="text-[0.6rem] tracking-wider text-white/60 uppercase">
                  College of Education
                </div>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Awori District College of Education, Otto/Awori,
              Lagos State, Nigeria.
            </p>

            <p className="text-white/60 text-sm leading-relaxed">
              Affiliated with Ekiti State University (EKSU) since 2017.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase mb-5 text-white/80">
              Quick Links
            </h3>

            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/50 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase mb-5 text-white/80">
              Admissions
            </h3>

            <ul className="space-y-2.5">
              {admissionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/50 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase mb-5 text-white/80">
              Contact Information
            </h3>

            <div className="space-y-4 text-sm text-white/50">

              <div>
                <div className="text-white/70 font-medium mb-0.5">
                  Address
                </div>
                <p>
                  {college.address || college.location}
                </p>
              </div>

              <div>
                <div className="text-white/70 font-medium mb-0.5">
                  Phone
                </div>
                <p>{college.phone}</p>
              </div>

              <div>
                <div className="text-white/70 font-medium mb-0.5">
                  Email
                </div>
                <p>{college.email}</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-white/40 text-xs">
            &copy; {currentYear} {college.name} (ADCOED).
            All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="/contact"
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              Contact
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}
