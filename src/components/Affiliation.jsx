import Photo from "./Photo.jsx";
import { affiliation } from "../data/site.js";
export default function Affiliation({ detail = false }) {
  return (
    <div className="aff">
      <Photo src={affiliation.logo} label="EKSU logo" ratio="1 / 1" />
      <div>
        <h3>
          Affiliated with {affiliation.partner} since {affiliation.since}
        </h3>
        <p>
          {detail ? "ADCOED became affiliated with EKSU in 2017. " : ""}
          <span className="ph-note">{affiliation.verify}</span>
        </p>
      </div>
    </div>
  );
}
