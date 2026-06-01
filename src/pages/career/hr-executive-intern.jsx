import JobPageTemplate from "@site/src/components/JobPageTemplate";

const role = {
  title: "HR Executive Intern",
  location: "Coimbatore",
  openings: 2,
  experience: "Fresher or up to 1 Year of experience. Any Graduate or pursuing MBA in HR.",
  desc: "Assist the HR team with recruitment coordination, employee engagement activities, and HR operations to gain practical exposure in core human resources functions.",
  bullets: [
    "Assist in sourcing, screening, and shortlisting candidates from job portals and LinkedIn.",
    "Schedule and coordinate interviews between candidates and hiring managers.",
    "Maintain and update recruitment trackers, candidate databases, and MIS reports.",
    "Support onboarding activities including documentation, induction coordination, and asset setup.",
    "Assist in drafting job descriptions, offer letters, and HR communication templates.",
    "Help coordinate employee engagement activities, internal events, and recognition programs.",
    "Handle basic HR administrative tasks such as attendance tracking and leave records.",
    "Assist in HR policy documentation and compliance-related activities.",

    "--- Skills Required ---",
    "Recruitment Basics",
    "LinkedIn Sourcing",
    "Job Portal Usage",
    "MS Excel / Google Sheets",
    "Communication Skills",
    "Attention to Detail",
    "Documentation",
    "Time Management",
  ],
};

export default function HRExecutiveInternPage() {
  return <JobPageTemplate role={role} />;
}
