import JobPageTemplate from "@site/src/components/JobPageTemplate";

const role = {
  title: "Digital Marketing Analyst",
  location: "Coimbatore",
  openings: 2,
  experience: "Bachelor's degree or equivalent qualification with 2+ years of experience in digital marketing analytics.",
  desc: "Plan, execute, and optimise digital marketing campaigns across SEO, SEM, social media, and email channels to drive brand awareness, lead generation, and business growth.",
  bullets: [
    "Track and analyze digital marketing performance across organic and paid channels",
    "Manage technical SEO, on-page SEO, off-page SEO, and local SEO initiatives",
    "Implement and optimize AEO, GEO, Google PMAX, and Meta Andromeda strategies",
    "Prepare detailed performance reports, dashboards, and insights",
    "Identify trends, gaps, and optimization opportunities across campaigns",
    "Support campaign optimization using data-backed decisions",
    "Monitor lead quality, conversion performance, and overall ROI",
    "Maintain structured documentation and tracking frameworks",
    "Stay updated with evolving analytics tools, AI-driven platforms, and marketing trends",

    "--- Skills Required ---",
    "Strong understanding of SEO, AEO, GEO, paid ads, and social media performance metrics",
    "Hands-on experience with Google Analytics, Search Console, and advertising platforms",
    "Expertise in branding, organic lead generation, and paid campaign execution",
    "Ability to analyze data and convert insights into actionable growth decisions",
    "Knowledge of performance funnels, lead quality metrics, and conversion tracking",
    "Strong experience in reporting, dashboards, and performance monitoring",
    "Effective utilization of AI tools for analytics, forecasting, and optimization",
    "High attention to data accuracy, detail, and insight communication",
  ],
};

export default function DigitalMarketingAnalystPage() {
  return <JobPageTemplate role={role} />;
}
