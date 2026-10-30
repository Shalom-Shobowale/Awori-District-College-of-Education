import Page from "../components/Page.jsx";
import Affiliation from "../components/Affiliation.jsx";
import { List, Row } from "../components/Rows.jsx";
import { admissionNotice } from "../data/site.js";
const go = <span aria-hidden="true">Open</span>;
export default function Admissions() {
  return (
    <Page
      title="Join ADCOED"
      subtitle="Begin your journey toward a career in education at Awori District College of Education."
      text="Admissions"
    >
      <p className="lead">Everything you need to apply to ADCOED.</p>
      <p className="note">{admissionNotice}</p>
      <Affiliation />
      <div style={{ marginTop: 32 }}>
        <List>
          <Row
            to="/requirements"
            title="Admission requirements"
            text="See what you need before applying"
            action={go}
          />
          <Row
            to="/apply"
            title="Online application"
            text="Fill in the application form"
            action={go}
          />
          <Row
            to="/downloads"
            title="Downloads and forms"
            text="Get official documents"
            action={go}
          />
        </List>
      </div>
    </Page>
  );
}
