// ALL EDITABLE CONTENT LIVES HERE. Text in [square brackets] is a placeholder.
export const asset = (p) => import.meta.env.BASE_URL + p.replace(/^\//, "");

export const college = {
  name: "Awori District College of Education",
  short: "ADCOED",
  location: "Ogun State, Nigeria",
  address: "[Address placeholder]",
  phone: "[Phone placeholder]",
  email: "[Email placeholder]",
};

// Official statement from the college: affiliation began in 2017.
// Scope (programmes, awards, accreditation) is NOT confirmed. Verify before publishing.
export const affiliation = {
  partner: "Ekiti State University (EKSU)",
  since: 2017,
  logo: "/images/eksu-logo.png", // place the OFFICIAL EKSU logo here, unaltered
  verify:
    "[Verify with the college: exact scope of the affiliation, programmes covered and awards.]",
};

// Photos: put files in public/images/ and edit the file names below.
export const images = {
  logo: "/images/adcoed-logo.png",
  hero: "/images/hero.jpg",
  campus: "/images/campus.jpg",
  classroom: "/images/classroom.jpg",
  students: "/images/students.jpg",
  facilities: "/images/facilities.jpg",
  events: "/images/events.jpg",
  academics: "/images/academics.jpg",
};

export const mvv = {
  mission: "[Official mission statement to be supplied by the college.]",
  vision: "[Official vision statement to be supplied by the college.]",
  values: [
    "[Core value 1]",
    "[Core value 2]",
    "[Core value 3]",
    "[Core value 4]",
  ],
};

export const nav = [
  ["/", "Home"],
  ["/about", "About"],
  ["/programmes", "Programmes"],
  ["/admissions", "Admissions"],
  ["/news", "News"],
  ["/staff", "Staff"],
  ["/downloads", "Downloads"],
  ["/contact", "Contact"],
];

export const admissionNotice =
  "[Admission session, deadlines and fees to be confirmed by the college]";

export const programmes = [
  {
    name: "Department of [Name]",
    summary: "[Programmes and awards to be supplied by the college]",
  },
  {
    name: "Department of [Name]",
    summary: "[Programmes and awards to be supplied by the college]",
  },
  {
    name: "Department of [Name]",
    summary: "[Programmes and awards to be supplied by the college]",
  },
  {
    name: "Department of [Name]",
    summary: "[Programmes and awards to be supplied by the college]",
  },
];

export const requirements = [
  ["Academic qualifications", "[To be supplied]"],
  ["Entrance examination or screening", "[To be supplied]"],
  ["Documents to upload", "[To be supplied]"],
  ["Fees and payment", "[To be supplied]"],
];

export const newsArticles = [
  {
    slug: "admission-portal-open",
    title: "Admission Portal Now Open for New Intake",
    date: "2025-01-15",
    excerpt:
      "Awori District College of Education invites applications from qualified candidates for admission into its NCE and degree programmes.",
    body: `<p>Awori District College of Education (ADCOED) is pleased to announce that the admission portal is now open for prospective students seeking admission into the college's Nigeria Certificate in Education (NCE) programmes and EKSU-affiliated degree programmes.</p>
<p>[Insert full details of the admission exercise, deadlines, and instructions — PLACEHOLDER]</p>
<p>Interested candidates are advised to visit the Admissions page for requirements and to begin their application.</p>`,
    image: "/images/campus-exterior.jpg",
    category: "announcement",
  },
  {
    slug: "eksu-affiliation-update",
    title: "EKSU Affiliation Continues to Strengthen Academic Offerings",
    date: "2024-11-20",
    excerpt:
      "The college's partnership with Ekiti State University continues to expand opportunities for students seeking degree-level qualifications.",
    body: `<p>Since the establishment of the affiliation with Ekiti State University (EKSU) in 2017, Awori District College of Education has continued to benefit from this strategic academic partnership.</p>
<p>[Insert specific updates about the affiliation, new programmes, or collaborative activities — PLACEHOLDER]</p>`,
    image: "/images/classroom.jpg",
    category: "academic",
  },
  {
    slug: "orientation-programme",
    title: "Orientation Programme for New Students",
    date: "2024-10-05",
    excerpt:
      "New students are invited to the orientation programme designed to help them settle into college life and academic routines.",
    body: `<p>ADCOED welcomes all newly admitted students and invites them to participate in the mandatory orientation programme.</p>
<p>[Insert orientation details, schedule, and requirements — PLACEHOLDER]</p>`,
    image: "/images/students-learning.jpg",
    category: "event",
  },
  {
    slug: "academic-calendar-update",
    title: "Academic Calendar Released",
    date: "2024-09-01",
    excerpt:
      "The academic calendar for the current session has been published. Students and staff are advised to take note of key dates.",
    body: `<p>The college management has released the academic calendar for the current session.</p>
<p>[Insert calendar highlights or link to downloadable calendar — PLACEHOLDER]</p>`,
    image: "/images/campus-life.jpg",
    category: "general",
  },
];

export const staff = [
  { name: "[Name]", role: "[Title / Department]" },
  { name: "[Name]", role: "[Title / Department]" },
  { name: "[Name]", role: "[Title / Department]" },
  { name: "[Name]", role: "[Title / Department]" },
];

// Put PDFs in public/documents/, set file and available: true.

export const downloads = [
  {
    title: "Admission Application Form",
    description: "Application form for prospective students.",
    category: "admissions",
    file: "documents/admission-form.pdf",
    available: false,
  },
  {
    title: "NCE Admission Requirements",
    description: "Entry requirements for NCE programmes.",
    category: "admissions",
    file: "documents/nce-requirements.pdf",
    available: false,
  },
  {
    title: "Academic Calendar",
    description: "Official academic calendar.",
    category: "academic",
    file: "documents/academic-calendar.pdf",
    available: false,
  },
  {
    title: "Student Registration Form",
    description: "Form for student registration.",
    category: "forms",
    file: "documents/student-registration.pdf",
    available: false,
  },
  {
    title: "College Brochure",
    description: "Information about the college and its programmes.",
    category: "administrative",
    file: "documents/college-brochure.pdf",
    available: false,
  },
];
