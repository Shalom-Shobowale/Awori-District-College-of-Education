# ADCOED website (React + Vite)

Awori District College of Education. React 18, React Router (hash routes), plain CSS.

## Run it
Requires Node.js 18+.
```
npm install
npm run dev        # local preview, address shown in terminal
npm run build      # creates the dist/ folder
npm run preview    # test the built site locally
```

## Where to edit things
- **All text and lists:** `src/data/site.js` (college details, contact, programmes, requirements, news, staff, downloads, admission notice). Text in [square brackets] is a placeholder.
- **Mission, Vision, Core Values:** the `mvv` object in `src/data/site.js`. Shown on Home and About by `src/components/MissionVision.jsx`.
- **Contact details:** the `college` object in `src/data/site.js`.
- **Colours and styling:** `src/styles.css` (variables at the top: `--g` green, `--c` coral).
- **Pages:** `src/pages/`. Shared parts: `src/components/`.

## Logos
- ADCOED logo: replace `public/images/adcoed-logo.png` (keep the same name, or change `images.logo` in `site.js`).
- EKSU logo: add the OFFICIAL file as `public/images/eksu-logo.png`. Do not edit or recolour it. Until it exists, a labelled placeholder shows. It appears on Home, About, Programmes and Admissions, not in the footer.
- EKSU affiliation: the college states it began in 2017. Scope, programmes, awards and accreditation are unverified. Update the `affiliation` object once confirmed.

## Photographs
Copy images into `public/images/` using these names (or change the paths in `images` inside `src/data/site.js`):
`hero.jpg`, `campus.jpg`, `classroom.jpg`, `students.jpg`, `facilities.jpg`, `events.jpg`, `academics.jpg`.
Any missing file shows a labelled placeholder. Use `.jpg`, `.webp` or `.png`, ideally under 400 KB each. Keep the portrait/landscape shapes in mind: hero and campus are portrait (4:5), students is landscape. Update alt text via the `label` props if needed.

## Documents
Put PDFs in `public/documents/`, then in `downloads` (in `site.js`) set the right `file` name and `available: true`.

## Application form
`src/pages/Apply.jsx` validates input. `src/services/submitApplication.js` is a stub: **nothing is sent or stored.** A real admissions system needs a deployed backend, a secure database, access controls and careful handling of applicants' personal information (Nigeria Data Protection Act). Replace the stub with a real `fetch` call to your server.

## Hosting
Run `npm run build` and upload the contents of `dist/` to any static host. Hash routes (`/#/about`) and `base: './'` mean no server rewrite rules are needed. A backend is needed only for applications.

## Status
Install and build were run successfully. Pages have not been viewed on real devices or tested with screen readers.
