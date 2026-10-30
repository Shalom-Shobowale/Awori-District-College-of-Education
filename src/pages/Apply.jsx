import { useState } from "react";
import { Link } from "react-router-dom";
import Page from "../components/Page.jsx";
import { programmes } from "../data/site.js";
import { submitApplication } from "../services/submitApplication.js";

const GROUPS = [
  [
    "Personal details",
    [
      { id: "name", label: "Full name", type: "text", req: true },
      { id: "email", label: "Email address", type: "email", req: true },
      { id: "phone", label: "Phone number", type: "tel", req: true },
      { id: "dob", label: "Date of birth", type: "date", req: true },
    ],
  ],
  [
    "Programme",
    [
      {
        id: "programme",
        label: "First-choice programme",
        type: "select",
        req: true,
      },
      {
        id: "qualification",
        label: "Highest qualification",
        type: "text",
        req: true,
      },
      {
        id: "statement",
        label: "Statement of interest (optional)",
        type: "textarea",
      },
    ],
  ],
];
const FIELDS = GROUPS.flatMap((g) => g[1]);

function check(f, v) {
  const s = (v || "").trim();
  if (!f.req) return "";
  if (!s)
    return f.type === "select"
      ? "Choose a programme."
      : `Enter your ${f.label.toLowerCase()}.`;
  if (f.type === "email" && !/^\S+@\S+\.\S+$/.test(s))
    return "Enter a valid email address, like name@example.com.";
  if (f.type === "tel" && s.replace(/\D/g, "").length < 7)
    return "Enter a phone number with at least 7 digits.";
  return "";
}

export default function Apply() {
  const [v, setV] = useState({});
  const [err, setErr] = useState({});
  const [state, setState] = useState("idle"); // idle | sending | done | fail
  const set = (id) => (e) => setV({ ...v, [id]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = {};
    FIELDS.forEach((f) => {
      const m = check(f, v[f.id]);
      if (m) errs[f.id] = m;
    });
    setErr(errs);
    const first = FIELDS.find((f) => errs[f.id]);
    if (first) {
      document.getElementById(first.id)?.focus();
      return;
    }
    setState("sending");
    try {
      await submitApplication(v);
      setState("done");
    } catch {
      setState("fail");
    }
  };

  if (state === "done")
    return (
      <Page title="Online application">
        <div className="ok" role="status">
          <h2>Application received (preview)</h2>
          <p>
            Your entries passed validation. In this preview nothing was sent or
            stored. A live site would save the application and confirm by email.
          </p>
          <Link className="btn" to="/">
            Back to home
          </Link>
        </div>
      </Page>
    );

  return (
    <Page title="Online application" text="Apply to ADCOED" subtitle="Complete the application form below to begin your admission process.">
      <p className="note">
        <b>Preview only.</b> This form validates entries and shows a
        confirmation, but nothing is sent or saved. A real admissions system
        needs a deployed backend, a secure database, access controls and careful
        handling of applicants’ personal information.
      </p>
      {state === "fail" && (
        <p className="note" role="alert">
          The application could not be sent. Check your connection and try
          again.
        </p>
      )}
      <form noValidate onSubmit={onSubmit} className="bg-red-500 w-full">
        {GROUPS.map(([legend, fs]) => (
          <fieldset key={legend}>
            <legend>{legend}</legend>
            {fs.map((f) => (
              <div
                key={f.id}
                className={`fd ${f.type === "textarea" ? "full" : ""}`}
              >
                <label htmlFor={f.id}>{f.label}</label>
                {f.type === "select" ? (
                  <select
                    id={f.id}
                    value={v[f.id] || ""}
                    aria-invalid={!!err[f.id]}
                    aria-describedby={`e-${f.id}`}
                    onChange={set(f.id)}
                  >
                    <option value="">Choose a programme</option>
                    {programmes.map((p, i) => (
                      <option key={i}>
                        {p.name} ({i + 1})
                      </option>
                    ))}
                  </select>
                ) : f.type === "textarea" ? (
                  <textarea
                    id={f.id}
                    rows="4"
                    value={v[f.id] || ""}
                    onChange={set(f.id)}
                  />
                ) : (
                  <input
                    id={f.id}
                    type={f.type}
                    required={f.req}
                    value={v[f.id] || ""}
                    aria-invalid={!!err[f.id]}
                    aria-describedby={`e-${f.id}`}
                    onChange={set(f.id)}
                  />
                )}
                <div className="er" id={`e-${f.id}`} role="alert">
                  {err[f.id]}
                </div>
              </div>
            ))}
          </fieldset>
        ))}
        <div>
          <button className="btn" type="submit" disabled={state === "sending"}>
            {state === "sending" ? "Submitting…" : "Submit application"}
          </button>
        </div>
      </form>
    </Page>
  );
}
