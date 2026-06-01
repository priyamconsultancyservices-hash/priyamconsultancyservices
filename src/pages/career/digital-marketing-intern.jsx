import JobPageTemplate from "@site/src/components/JobPageTemplate";

const role = {
  title: "Digital Marketing Intern",
  location: "Coimbatore",
  openings: 2,
  experience: "Student / Fresher with interest in digital marketing.",
  desc: "Support the digital marketing team in executing campaigns, creating content, and analysing performance to build practical skills in a fast-paced marketing environment.",
  bullets: [
    "Assist in SEO, AEO, GEO, ads, and social media tasks",
    "Support campaign execution and reporting",
    "Conduct market and keyword research",
    "Learn analytics and performance tracking",
    "Support content and lead generation activities",
    "Maintain task documentation",
    "Gain hands-on exposure to real campaigns",

    "--- Skills Required ---",
    "Basic understanding of digital marketing concepts",
    "Interest in SEO, AEO, GEO, ads, and social media",
    "Willingness to learn analytics and tools",
    "Research and data interpretation skills",
    "Good communication skills",
    "Effective utilization of AI tools for research and reporting",
    "Curiosity and learning mindset",
    "Ability to work in a team",
  ],
};

export default function DigitalMarketingInternPage() {
  return <JobPageTemplate role={role} />;
}
