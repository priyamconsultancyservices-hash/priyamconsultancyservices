import JobPageTemplate from "@site/src/components/JobPageTemplate";

const role = {
  title: "Video Editor",
  location: "Coimbatore",
  openings: 2,
  experience: "1–3 Years in Video Editing / Post-Production. Any Graduate in Media, Film, or related field.",
  desc: "Edit raw footage into engaging, high-quality videos aligned with brand goals by incorporating music, sound design, colour grading, and motion graphics.",
  bullets: [
    "Edit raw footage into polished, engaging videos aligned with brand guidelines and project briefs.",
    "Add music, sound design, colour grading, and motion graphics to enhance video quality.",
    "Collaborate with the marketing and design teams on video concepts, scripts, and storyboards.",
    "Create short-form video content for social media platforms including LinkedIn, Instagram, and YouTube.",
    "Produce explainer videos, product demos, testimonials, and promotional reels.",
    "Ensure all deliverables are completed on time and meet defined quality standards.",
    "Manage and organise video assets, raw footage, and project files efficiently.",
    "Stay updated on video editing trends, platform-specific formats, and algorithm changes.",

    "--- Skills Required ---",
    "Adobe Premiere Pro",
    "After Effects",
    "DaVinci Resolve",
    "Colour Grading",
    "Motion Graphics",
    "Sound Design",
    "Short-form Content",
    "Storyboarding",
  ],
};

export default function VideoEditorPage() {
  return <JobPageTemplate role={role} />;
}
