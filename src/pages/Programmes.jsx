import { Link } from "react-router-dom";
import Page from "../components/Page.jsx";
import Affiliation from "../components/Affiliation.jsx";
import { List, Row } from "../components/Rows.jsx";
import { programmes } from "../data/site.js";
export default function Programmes() {
  return (
    <Page
      title="Programmes & Departments"
      subtitle="ADCOED offers NCE programmes and EKSU-affiliated degree programmes across multiple departments, preparing students for careers in education and beyond."
      text="Acedemics"
    >
      <p className="lead">Browse departments, then apply online.</p>
      <Affiliation />
      <p className="note" style={{ marginTop: 24 }}>
        Which programmes are run under the EKSU affiliation is not confirmed.
        Mark each programme once verified.
      </p>
      <List>
        {programmes.map((p, i) => (
          <Row
            key={i}
            title={p.name}
            text={p.summary}
            action={
              <Link className="btn o" to="/apply">
                Apply
              </Link>
            }
          />
        ))}
      </List>
      
    </Page>
  );
}
