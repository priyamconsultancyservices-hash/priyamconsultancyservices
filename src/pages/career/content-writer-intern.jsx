import JobPageTemplate from "@site/src/components/JobPageTemplate";

const role = {
  title: "Content Writer Intern",
  location: "Coimbatore",
  openings: 2,
  experience: "Student / Fresher with interest in writing and content creation.",
  desc: "Assist the content team in creating well-researched, engaging written content for digital platforms while developing core writing, editing, and SEO skills.",
  bullets: [
    "Assist in writing blogs and social media content",
    "Conduct research for content topics",
    "Edit and refine content drafts",
    "Learn SEO and content frameworks",
    "Support senior writers",
    "Maintain content schedules",
    "Improve writing through practice and feedback",

    "--- Skills Required ---",
    "Basic writing and grammar skills",
    "Interest in digital content and marketing",
    "Research and learning ability",
    "Creativity and storytelling mindset",
    "Attention to detail",
    "Effective utilization of AI tools for content drafting",
    "Time management skills",
    "Openness to feedback",
  ],
};

export default function ContentWriterInternPage() {
  return <JobPageTemplate role={role} />;
}
