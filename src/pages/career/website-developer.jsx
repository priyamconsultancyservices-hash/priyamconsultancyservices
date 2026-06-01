import JobPageTemplate from "@site/src/components/JobPageTemplate";

const role = {
  title: "Website Developer",
  location: "Coimbatore",
  openings: 2,
  experience: "Bachelor's degree in Computer Science or related field with 2+ years of website development experience.",
  desc: "Design, develop, and maintain high-performance websites and web applications that deliver exceptional user experiences across desktop and mobile platforms.",
  bullets: [
    "Design, develop, and maintain high-performance websites",
    "Optimize websites for speed, usability, and conversions",
    "Collaborate with marketing and design teams for execution",
    "Implement updates, enhancements, and new features",
    "Troubleshoot technical issues and ensure smooth performance",
    "Maintain documentation and version control",
    "Stay updated with latest web technologies and best practices",

    "--- Skills Required ---",
    "Strong knowledge of HTML, CSS, JavaScript, Shopify, WordPress Platform.",
    "Experience in responsive and performance-focused web development",
    "Understanding of SEO, page speed, and UX best practices",
    "Ability to debug and optimize websites efficiently",
    "Experience working with APIs and third-party integrations",
    "Effective utilization of AI tools for development, testing, and optimization",
    "Strong problem-solving and analytical thinking",
    "Ability to work independently and in collaborative teams",
  ],
};

export default function WebsiteDeveloperPage() {
  return <JobPageTemplate role={role} />;
}
