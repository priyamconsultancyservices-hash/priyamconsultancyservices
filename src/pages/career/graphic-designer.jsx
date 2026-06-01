import JobPageTemplate from "@site/src/components/JobPageTemplate";

const role = {
  title: "Graphic Designer",
  location: "Coimbatore",
  openings: 2,
  experience: "Bachelor's degree or equivalent qualification with 2+ years of graphic design experience.",
  desc: "Create compelling, SEO-optimised content across blogs, website pages, social media, and marketing collaterals that communicates our brand voice and drives audience engagement.",
  bullets: [
    "Design creatives for digital marketing and branding",
    "Maintain visual consistency across platforms",
    "Collaborate with marketing and content teams",
    "Create ad creatives, banners, and social visuals",
    "Revise designs based on feedback",
    "Maintain organized design assets",
    "Stay updated with design trends and tools",

    "--- Skills Required ---",
    "Strong understanding of design principles and branding",
    "Experience with Adobe, Coreldraw, Canva.",
    "Ability to design creatives for social media, ads, and websites",
    "Visual storytelling and layout skills",
    "Attention to brand consistency and detail",
    "Effective utilization of AI design tools for ideation and speed",
    "Time management and creative problem-solving",
    "Ability to work collaboratively with teams",
  ],
};

export default function GraphicDesignerPage() {
  return <JobPageTemplate role={role} />;
}
