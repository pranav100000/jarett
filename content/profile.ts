/**
 * Every word on the site lives in this file. Edit it and the page updates.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ PLACEHOLDER CONTENT                                                  │
 * │ The roles, dates, descriptions, email, and links below were written  │
 * │ to demonstrate the layout. Replace each one with Jarett's actual     │
 * │ details before the site goes live.                                   │
 * └──────────────────────────────────────────────────────────────────────┘
 */

export type Link = {
  label: string;
  href: string;
};

export type Experience = {
  role: string;
  organization: string;
  location: string;
  start: string;
  end: string;
  summary: string[];
};

export type Education = {
  degree: string;
  field: string;
  institution: string;
  school?: string;
  location: string;
  start: string;
  end: string;
  description?: string;
  highlights?: string[];
  /** The featured entry is rendered with more detail. */
  featured?: boolean;
};

export type Expertise = {
  area: string;
  items: string[];
};

export const profile = {
  name: "Jarett Maycott",
  title: "Public Health Consultant · Epidemiologist",
  location: "Berkeley, California",

  /** Used for the browser tab, search results, and link previews. */
  tagline:
    "Epidemiologist bringing academic research methods to applied public health consulting.",

  /** Short status line shown above the name. Set to an empty string to hide it. */
  availability: "Available for consulting engagements",

  bio: [
    "I spent the last several years in academic research designing studies, running field data collection, and analyzing population health data. I'm now bringing that training to consulting, helping health departments, nonprofits, and health systems turn evidence into decisions.",
    "My work sits where epidemiologic methods meet practical delivery: surveillance design, program and outbreak evaluation, and clear communication of findings to the people who act on them.",
  ],

  email: "jarett.maycott@example.com",

  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jarett-maycott" },
  ] satisfies Link[],

  /**
   * Drop a PDF into /public (for example /public/jarett-maycott-cv.pdf) and set
   * this to "/jarett-maycott-cv.pdf" to show a "Download CV" link.
   */
  cvUrl: undefined as string | undefined,

  experience: [
    {
      role: "Graduate Student Researcher, Epidemiology",
      organization: "School of Public Health, University of California, Berkeley",
      location: "Berkeley, CA",
      start: "2024",
      end: "2026",
      summary: [
        "Led the analysis of a longitudinal cohort dataset examining social determinants of cardiometabolic risk, building reproducible R pipelines for cleaning, modeling, and reporting.",
        "Co-authored a manuscript on survey weighting for under-represented populations and presented the findings at a regional epidemiology conference.",
        "Mentored first-year MPH students in study design and statistical software.",
      ],
    },
    {
      role: "Research Coordinator",
      organization: "Center for Community Health Research",
      location: "Portland, OR",
      start: "2021",
      end: "2024",
      summary: [
        "Coordinated a multi-site observational study across four community clinics, managing IRB submissions, data collection protocols, and a team of six research assistants.",
        "Designed REDCap instruments and quality-assurance procedures that reduced data-entry errors by roughly 40 percent.",
        "Produced quarterly reports and stakeholder briefings that translated study progress into plain language for funders and clinical partners.",
      ],
    },
    {
      role: "Research Assistant, Department of Epidemiology",
      organization: "Pacific Coast University",
      location: "Portland, OR",
      start: "2019",
      end: "2021",
      summary: [
        "Supported case-control and cross-sectional studies through literature reviews, data abstraction, and descriptive and regression analyses in Stata.",
        "Contributed to two peer-reviewed publications and a technical report prepared for a state health department.",
      ],
    },
    {
      role: "Epidemiology Intern",
      organization: "County Department of Public Health",
      location: "Portland, OR",
      start: "Summer",
      end: "2020",
      summary: [
        "Supported outbreak investigations and routine communicable disease surveillance, cleaning and summarizing case data for weekly situation reports.",
      ],
    },
  ] satisfies Experience[],

  education: [
    {
      degree: "Master of Public Health",
      field: "Epidemiology",
      institution: "University of California, Berkeley",
      school: "School of Public Health",
      location: "Berkeley, CA",
      start: "2024",
      end: "2026",
      featured: true,
      description:
        "Concentration in epidemiology and biostatistics, with coursework in causal inference, infectious disease modeling, survival analysis, and public health policy.",
      highlights: [
        "Capstone: evaluation of a county chronic disease prevention program using interrupted time series methods.",
        "Graduate Student Instructor for the introductory epidemiologic methods course.",
      ],
    },
    {
      degree: "Bachelor of Science",
      field: "Biology, minor in Statistics",
      institution: "Pacific Coast University",
      location: "Portland, OR",
      start: "2015",
      end: "2019",
    },
  ] satisfies Education[],

  expertise: [
    {
      area: "Methods",
      items: [
        "Study design",
        "Causal inference",
        "Survival analysis",
        "Interrupted time series",
        "Survey methodology",
      ],
    },
    {
      area: "Analysis",
      items: ["R and tidyverse", "Stata", "SAS", "SQL", "REDCap", "Quarto"],
    },
    {
      area: "Domains",
      items: [
        "Chronic disease epidemiology",
        "Communicable disease surveillance",
        "Social determinants of health",
        "Program evaluation",
      ],
    },
    {
      area: "Delivery",
      items: [
        "Stakeholder briefings",
        "Technical reports",
        "Data visualization",
        "IRB and protocol management",
      ],
    },
  ] satisfies Expertise[],

  contact: {
    heading: "Let's work together.",
    body: "I take on consulting engagements in epidemiology, data analysis, and program evaluation. If you're a health department, nonprofit, or health system looking for rigorous, practical support, I'd like to hear from you.",
  },
};

export type Profile = typeof profile;
