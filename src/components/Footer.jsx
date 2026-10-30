import { Link } from "react-router-dom";
import { college, asset, images } from "../data/site.js";
const col1 = [
  ["/about", "About"],
  ["/staff", "Staff"],
  ["/contact", "Contact"],
  ["/privacy", "Privacy policy"],
];
const col2 = [
  ["/admissions", "Admissions"],
  ["/requirements", "Requirements"],
  ["/apply", "Apply online"],
  ["/downloads", "Downloads"],
];
export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="g">
          <div>
            <img
              src={asset(images.logo)}
              alt=""
              style={{
                height: 60,
                background: "#fff",
                padding: 6,
                marginBottom: 14,
              }}
            />
            <p>
              {college.name} (ADCOED), {college.location}.
            </p>
          </div>
          <div>
            <h3>College</h3>
            <ul>
              {col1.map(([t, l]) => (
                <li key={t}>
                  <Link to={t}>{l}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Admissions</h3>
            <ul>
              {col2.map(([t, l]) => (
                <li key={t}>
                  <Link to={t}>{l}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <p>
              {college.address}
              <br />
              {college.phone}
              <br />
              {college.email}
            </p>
          </div>
        </div>
        <div className="fb">
          &copy; {new Date().getFullYear()} {college.name}.{" "}
          <Link to="/privacy">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
