import JobPageTemplate from "@site/src/components/JobPageTemplate";

const role = {
  title: "HR Executive",
  location: "Coimbatore",
  openings: 2,
  experience: "1–3 Years in Human Resources or Talent Acquisition. Any Graduate or MBA in HR.",
  desc: "Support end-to-end recruitment, employee engagement, and HR operations to build a strong, motivated workforce aligned with organisational goals.",
  bullets: [
    "Manage end-to-end recruitment processes including job posting, sourcing, screening, and interview coordination.",
    "Collaborate with hiring managers to understand role requirements and define accurate job descriptions.",
    "Source candidates through job portals (Naukri, LinkedIn, Indeed), social media, and employee referrals.",
    "Conduct initial HR screening calls and coordinate technical and managerial interview rounds.",
    "Maintain and update candidate databases, recruitment trackers, and MIS reports.",
    "Coordinate onboarding activities including document collection, induction scheduling, and system access setup.",
    "Support employee engagement initiatives, HR communications, and internal events.",
    "Assist with HR policy implementation, attendance management, and payroll inputs.",
    "Handle employee queries related to HR policies, leave management, and employee benefits.",

    "--- Skills Required ---",
    "Talent Acquisition",
    "End-to-End Recruitment",
    "Job Portals (Naukri / LinkedIn)",
    "Onboarding & Induction",
    "Employee Engagement",
    "HR MIS & Reporting",
    "Payroll Basics",
    "HR Policies & Compliance",
  ],
};

export default function HRExecutivePage() {
  return <JobPageTemplate role={role} />;
}
