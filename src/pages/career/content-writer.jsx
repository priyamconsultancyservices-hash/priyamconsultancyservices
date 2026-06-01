import JobPageTemplate from "@site/src/components/JobPageTemplate";

const role = {
  title: "Content Writer",
  location: "Coimbatore",
  openings: 2,
  experience: "Bachelor's degree or equivalent qualification with 2+ years of content writing experience. 1–3 Years in Content Writing or Copywriting. Any Graduate in English, Journalism, or related field.",
  desc: "Create compelling, SEO-optimised content across blogs, website pages, social media, and marketing collaterals that communicates our brand voice and drives audience engagement.",
  bullets: [
    "Create high-quality content for blogs, websites, ads, and social media platforms",
    "Plan, research, and execute content aligned with brand positioning and business goals",
    "Align content strategy with SEO, AEO, and lead generation objectives",
    "Collaborate closely with marketing teams on campaign-based content execution",
    "Edit, refine, and optimize content for clarity, engagement, and performance",
    "Conduct in-depth research to support authority-driven and insight-led content",
    "Maintain structured content calendars, documentation, and publishing schedules",
    "Stay updated with evolving content trends, search behavior, and AI-led discovery",

    "--- Skills Required ---",
    "Strong writing, editing, and storytelling abilities",
    "Understanding of SEO, AEO, and content structure",
    "Ability to research and simplify complex topics",
    "Knowledge of brand tone and messaging consistency",
    "Experience writing blogs, website content, and social media copies",
    "Effective utilization of AI tools for research and optimization",
    "Attention to detail and content quality",
    "Ability to meet deadlines consistently",
  ],
};

export default function ContentWriterPage() {
  return <JobPageTemplate role={role} />;
}
