import Page from "../components/Page.jsx";
import { staff } from "../data/site.js";
export default function Staff() {
  return (
    <Page
      title="Staff Directory"
      subtitle="Meet the dedicated professionals who lead and support learning at ADCOED."
      text="Our People"
    >
      <p className="note">
        No staff are listed until the college provides official records.
      </p>
      <div className="grid3">
        {staff.map((s, i) => (
          <div key={i}>
            <div className="av" aria-hidden="true">
              ?
            </div>
            <h3>{s.name}</h3>
            <p>{s.role}</p>
          </div>
        ))}
      </div>
    </Page>
  );
}
