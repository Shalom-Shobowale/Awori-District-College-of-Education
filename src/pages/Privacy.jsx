import Page from "../components/Page.jsx";
export default function Privacy() {
  return (
    <Page title="Privacy policy">
      <p className="note">
        Draft structure only. Have the college’s legal adviser supply the final
        policy, aligned with Nigeria’s data protection law.
      </p>
      {[
        "Information we collect",
        "How we use it",
        "Your rights and contact",
      ].map((h) => (
        <section key={h}>
          <h3>{h}</h3>
          <p>[To be supplied]</p>
        </section>
      ))}
    </Page>
  );
}
