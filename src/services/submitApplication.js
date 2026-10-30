// PREVIEW ONLY: nothing is sent or stored.
// To go live, replace the body with a real request, e.g.
//   const r = await fetch('https://your-server/api/applications', { method:'POST',
//     headers:{'Content-Type':'application/json'}, body: JSON.stringify(data) });
//   if (!r.ok) throw new Error('Submission failed');
//   return r.json();
// The server must validate input, store it in a secure database, restrict admin access
// and protect applicants' personal data (Nigeria Data Protection Act).
export async function submitApplication(data) {
  await new Promise((r) => setTimeout(r, 600));
  return { ok: true, preview: true };
}
