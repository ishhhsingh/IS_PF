export const profile = {
  name: "Ishika Singh",
  roles: ["Data Analyst", "Full Stack Developer", "Software Engineer"],
  headline: "Building Data-Driven Software That Solves Real Business Problems.",
  intro:
    "I'm an entry-level engineer who ships end-to-end: I model data in SQL, transform it in Python, visualize it in Power BI, and build full-stack applications in React and Spring Boot. I care about clean code, measurable outcomes, and shipping software recruiters and users can trust.",
  email: "ishikasingh09401@gmail.com",
  phone: "+91 6299705497",
  location: "Ranchi, Jharkhand, India",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  availability: "Available Immediately",
  graduation: "2026",
};

export const dashboardStats = [
  { label: "Projects Shipped", value: 6, suffix: "+" },
  { label: "Internship", value: 3, suffix: " mo" },
  { label: "Technologies", value: 18, suffix: "+" },
  { label: "Certifications", value: 2, suffix: "" },
  { label: "Availability", value: "Now", isText: true },
  { label: "Graduation Year", value: 2026 },
];

export const skillGroups = [
  {
    category: "Programming",
    description: "Languages I write production code in.",
    items: [
      { name: "Python", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "Java", level: "Proficient" },
      { name: "JavaScript / TypeScript", level: "Proficient" },
      { name: "C / C++", level: "Foundational" },
    ],
  },
  {
    category: "Data Analytics",
    description: "Turning raw datasets into decisions.",
    items: [
      { name: "Pandas", level: "Advanced" },
      { name: "NumPy", level: "Advanced" },
      { name: "Matplotlib / Seaborn", level: "Proficient" },
      { name: "EDA & Data Wrangling", level: "Advanced" },
      { name: "Statistics", level: "Proficient" },
    ],
  },
  {
    category: "Business Intelligence",
    description: "Executive-ready dashboards, not just charts.",
    items: [
      { name: "Power BI (DAX)", level: "Advanced" },
      { name: "Star Schema Modeling", level: "Proficient" },
      { name: "KPI Dashboards", level: "Advanced" },
      { name: "Tableau", level: "Proficient" },
      { name: "Excel Pivot Tables", level: "Advanced" },
    ],
  },
  {
    category: "Frontend",
    description: "Interfaces that feel fast, accessible, on-brand.",
    items: [
      { name: "React 18 / 19", level: "Advanced" },
      { name: "HTML5 & CSS3", level: "Advanced" },
      { name: "Bootstrap", level: "Proficient" },
      { name: "Responsive Design", level: "Advanced" },
    ],
  },
  {
    category: "Backend",
    description: "APIs, auth, and integrations that scale.",
    items: [
      { name: "Spring Boot", level: "Proficient" },
      { name: "Node.js", level: "Proficient" },
      { name: "PHP", level: "Foundational" },
      { name: "REST APIs", level: "Proficient" },
    ],
  },
  {
    category: "Databases & Tools",
    description: "Where the data lives and how I ship it.",
    items: [
      { name: "MySQL", level: "Advanced" },
      { name: "MongoDB", level: "Proficient" },
      { name: "Git / GitHub", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
    ],
  },
];

export const projects = [
  {
    id: "timetable",
    title: "Departmental Timetable Portal",
    tagline: "Full-stack scheduling platform with role-based access & PDF export.",
    problem:
      "Academic departments juggle schedules across spreadsheets and email threads. Changes get lost, faculty are double-booked, students lose trust in the timetable.",
    solution:
      "A single source of truth. Admins create and publish schedules; faculty and students see real-time updates; anyone can export a clean PDF.",
    stack: ["React 18", "Spring Boot", "Java", "MySQL", "REST APIs"],
    features: [
      "Role-based access (Admin, Faculty, Student)",
      "Real-time schedule updates",
      "PDF export with department branding",
      "Secure REST APIs & database transactions",
    ],
    outcome:
      "Reduced schedule conflicts by centralizing edits and giving every role the view they need — nothing more.",
    category: "Full Stack",
    github: "https://github.com/ishhhsingh/DEPARTMENTAL_PORTAL_1",
  },
  {
    id: "powerbi",
    title: "Power BI Sales Analytics Dashboard",
    tagline: "Executive dashboard turning raw sales data into weekly decisions.",
    problem:
      "Sales leaders were reading exports in Excel. Trends, top SKUs, and margin leaks were invisible until end-of-quarter.",
    solution:
      "Star-schema data model, DAX measures for KPIs, and an interactive dashboard with slicers by region, product, and time.",
    stack: ["Power BI", "SQL", "DAX", "Star Schema"],
    features: [
      "Cleaned & modeled raw transactional data",
      "DAX measures for revenue, profit, YoY, MoM",
      "Interactive slicers by region, category, period",
      "Executive KPI cards + trend visuals",
    ],
    outcome:
      "Weekly reporting shifted from static Excel to a self-serve dashboard leaders could explore live.",
    category: "Analytics",
    github: "https://github.com/ishhhsingh/PowerBI-Sales-Analytics-Dashboard",
  },
  {
    id: "customer",
    title: "Customer Behavior Analysis",
    tagline: "End-to-end EDA translating shopping data into marketing plays.",
    problem:
      "A retail dataset held clear customer segments — but nobody had time to find them.",
    solution:
      "Exploratory analysis in Python, segmentation queries in SQL, and a Power BI dashboard the marketing team could actually use.",
    stack: ["Python", "Pandas", "Matplotlib", "SQL", "Power BI"],
    features: [
      "EDA on shopping behavior with Pandas",
      "SQL segmentation & purchase-pattern queries",
      "Category, KPI, and trend visualizations",
      "Actionable insights for targeted campaigns",
    ],
    outcome:
      "Delivered a repeatable pipeline from raw CSV to marketing-ready insights.",
    category: "Analytics",
    github: "https://github.com/ishhhsingh/Customer-Behavior-Analysis",
  },
];

export const experience = [
  {
    role: "Frontend Development Intern",
    company: "CADWORKS INDIA Pvt Ltd",
    duration: "Dec 2024 — Mar 2025",
    link: "https://drive.google.com/file/d/1conZ5jaJfQPxlGFGY9UPJ-VgaC7FJuOI/view?usp=sharing",
    bullets: [
      "Completed a 3-month frontend internship with the IT department, shipping features on live projects.",
      "Collaborated with senior engineers on assigned modules, code reviews, and QA.",
      "Recognized in the completion certificate for sincerity, learning velocity, and communication.",
    ],
    tags: ["React", "HTML/CSS", "JavaScript", "Git"],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Sikkim Manipal Institute of Technology",
    duration: "Expected 2026",
    detail: "Coursework: DSA, DBMS, Web Technologies, Software Engineering, Python, Data Science, Statistics.",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Jawahar Vidya Mandir, Ranchi",
    duration: "2023",
    detail: "Science stream — strong foundation in mathematics and computer science.",
  },
  {
    degree: "Secondary (10th)",
    institution: "Jawahar Vidya Mandir, Ranchi",
    duration: "2021",
    detail: "",
  },
];

export const certifications = [
  {
    title: "Data Analytics Job Simulation",
    org: "Deloitte Australia · Forage",
    date: "June 2026",
    link: "https://drive.google.com/file/d/11PVLrm5Ks8VLvzvfhgxEFfKgWOfsR8HF/view?usp=sharing",
    description:
      "Practical tasks in data analysis and forensic technology, delivered against real Deloitte briefs.",
  },
  {
    title: "Frontend Development Internship",
    org: "CADWORKS INDIA Pvt Ltd",
    date: "March 2025",
    link: "https://drive.google.com/file/d/1conZ5jaJfQPxlGFGY9UPJ-VgaC7FJuOI/view?usp=sharing",
    description:
      "Three-month industry certificate recognizing delivered frontend work and professional conduct.",
  },
];
