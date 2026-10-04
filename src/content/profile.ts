/**
 * All site content lives in this file.
 *
 * Everything below is PLACEHOLDER copy written to show the layout.
 * Replace each value with real details before publishing. Nothing else
 * in the project needs to change: the components read from this object.
 */

export type Role = {
  title: string;
  organization: string;
  location?: string;
  start: string;
  end: string;
  summary?: string;
  highlights: string[];
};

export type Degree = {
  degree: string;
  field: string;
  institution: string;
  school?: string;
  start: string;
  end: string;
  /** The featured degree is shown first and set in larger type. */
  featured?: boolean;
  details?: string[];
};

export type Publication = {
  title: string;
  venue: string;
  year: string;
  href?: string;
};

export type ExternalLink = {
  label: string;
  href: string;
};

export const profile = {
  // TODO: replace the surname and all other placeholder details.
  name: "Jarett Lane",
  title: "Public Health Consultant",
  location: "Boston, MA",
  email: "hello@jarettlane.com",

  tagline:
    "Epidemiologist turned consultant. I help health systems, public agencies, and non-profits turn evidence into programs that work.",

  about: [
    "After a decade in academic research, I now work directly with the organizations that have to act on the evidence. I bring rigorous methods, a practical understanding of how public institutions make decisions, and a habit of explaining results in plain language.",
  ],

  focus: [
    "Program evaluation",
    "Epidemiological analysis",
    "Health policy & strategy",
    "Data systems & measurement",
  ],

  experience: [
    {
      title: "Postdoctoral Research Fellow",
      organization: "Center for Population Health Policy, Northgate School of Medicine",
      location: "Boston, MA",
      start: "2022",
      end: "Present",
      highlights: [
        "Led a mixed-methods evaluation of a statewide community health worker program across 14 counties, informing a $12M reauthorization decision.",
        "Built the center's first reproducible analytics pipeline in R and SQL, now shared by three research teams.",
        "Briefed state legislators and health department leadership on findings and co-authored two policy reports.",
      ],
    },
    {
      title: "Research Consultant",
      organization: "Suffolk County Department of Public Health",
      location: "Part-time",
      start: "2020",
      end: "2021",
      highlights: [
        "Advised the epidemiology division on surveillance dashboard design during the COVID-19 response.",
        "Designed sampling and weighting for a county-wide vaccine confidence survey of 4,200 residents.",
      ],
    },
    {
      title: "Doctoral Researcher & Graduate Research Assistant",
      organization: "Brickley University, School of Public Health",
      location: "Brickley, MA",
      start: "2017",
      end: "2022",
      highlights: [
        "Designed and ran a longitudinal cohort study of 8,000 participants on housing instability and chronic disease outcomes.",
        "Secured a competitive NIH F31 predoctoral fellowship to fund dissertation research.",
        "Taught Epidemiologic Methods I and II and mentored twelve master's students through their thesis projects.",
      ],
    },
    {
      title: "Research Analyst",
      organization: "Health Equity Institute",
      location: "Providence, RI",
      start: "2015",
      end: "2017",
      highlights: [
        "Managed data collection and analysis for a multi-site study of Medicaid expansion and access to primary care.",
        "Produced quarterly reports and data briefs for foundation funders and partner clinics.",
      ],
    },
  ] satisfies Role[],

  education: [
    {
      degree: "Ph.D.",
      field: "Epidemiology",
      institution: "Brickley University",
      school: "School of Public Health",
      start: "2017",
      end: "2022",
      featured: true,
      details: [
        "Dissertation: Housing Instability and Cardiometabolic Risk: Evidence from a Longitudinal Urban Cohort.",
        "Dean's Dissertation Prize. NIH F31 Predoctoral Fellow.",
        "Minor field in health policy and management.",
      ],
    },
    {
      degree: "B.S.",
      field: "Biology",
      institution: "State University",
      start: "2011",
      end: "2015",
      details: ["Graduated with honors."],
    },
  ] satisfies Degree[],

  publications: [
    {
      title:
        "Housing instability and incident hypertension in a longitudinal urban cohort",
      venue: "American Journal of Epidemiology",
      year: "2023",
      href: "https://example.com",
    },
    {
      title:
        "Evaluating a statewide community health worker program: a mixed-methods approach",
      venue: "Journal of Public Health Policy",
      year: "2024",
    },
    {
      title: "What state legislators actually need from evaluation research",
      venue: "Health Affairs Forefront",
      year: "2024",
    },
  ] satisfies Publication[],

  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
    { label: "Google Scholar", href: "https://scholar.google.com/" },
    { label: "Download CV", href: "/cv.pdf" },
  ] satisfies ExternalLink[],
};

export type Profile = typeof profile;
