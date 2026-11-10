// ALL EDITABLE CONTENT LIVES HERE. Text in [square brackets] is a placeholder.
export const asset = (p) => import.meta.env.BASE_URL + p.replace(/^\//, "");

export const college = {
  name: "Awori District College of Education",
  short: "ADCOED",
  location: "Bankole Estate, Along Ajibode Road, Ogun State, Nigeria",
  address: "Bankole Estate, Along Ajibode Road, Ogun State, Nigeria",
  phone: "08023937892, 08033443791, 08065130564",
  email: "[Email placeholder]",
};

export const aboutCollege = {
  intro:
    "Awori District College of Education (ADCOED) is a leading institution of teacher education located in Otto/Awori, Lagos State, Nigeria. The college is dedicated to producing qualified, competent, and morally upright educators who are equipped to meet the evolving demands of Nigeria's education sector.",
  /** Replace with confirmed institutional history */
  history:
    "Awori District College of Education received approval from the National Commission for Colleges of Education (NCCE) in 2010, marking an important milestone in its establishment and development as an institution dedicated to teacher education. In 2017, the college became affiliated with Ekiti State University (EKSU), establishing an academic relationship that represents another significant stage in its institutional journey. The college continues to pursue its commitment to teacher education and the preparation of future educators.",
    
  leadership:
    "[Information about the college's leadership structure, the Provost, Registrar, and other principal officers should be confirmed and inserted here — PLACEHOLDER]",
};

// Official statement from the college: affiliation began in 2017.
// Scope (programmes, awards, accreditation) is NOT confirmed. Verify before publishing.
export const affiliation = {
  partner: "Ekiti State University (EKSU)",
  since: 2017,
  logo: "/images/eksu.jpeg", // place the OFFICIAL EKSU logo here, unaltered
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
  mission:
    "To enhance the quality of teaching and learning in the process of human capital development for the educational sector and the nation. This will be in reference to the students' capacity for scholarship development that recognizes dignity for labor, integrity and selflessness.",
  vision:
    "To be the preferred college of education which will excel in preparing of its students who are future leaders ahead of a better tomorrow.",
  values: [
    {
      name: "Academic Excellence",
      description: "[Description of this core value — PLACEHOLDER]",
    },
    {
      name: "Responsibility",
      description: "[Description of this core value — PLACEHOLDER]",
    },
    {
      name: "Integrity",
      description: "[Description of this core value — PLACEHOLDER]",
    },
    {
      name: "Spirituality",
      description: "[Description of this core value — PLACEHOLDER]",
    },
    {
      name: "Discipline",
      description: "[Description of this core value — PLACEHOLDER]",
    },
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
    name: "Department of Science",
    summary:
      "Chemistry, Biology, Computer Science, Integrated Science, Mathematics.",
  },
  {
    name: "Department of Arts and Social Science Education",
    summary:
      "Christian Religious Knowledge, Economic, Islamic Studies, Political Science, Social Studies etc.",
  },
  {
    name: "Department of Vocational Education",
    summary: "Adult Education.",
  },
  {
    name: "Department of Language",
    summary: "English Language, Yoruba.",
  },
  {
    name: "Department of Education",
    summary:
      "Primary Education Studies (PES)(DM), Early Childhood Care and Education (ECCE).",
  },
  {
    name: "Department of Remedial Studies",
    summary:
      "Preparatory Classes and Registration for WASSCE(JUNE/JULY & NOV/DEC) and NECO/SSCE (JUNE/JULY & NOV/DEC (JAMB UTME)), Degree Foundation Programme.",
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
