import JobPageTemplate from "@site/src/components/JobPageTemplate";

const role = {
  title: "Video Editor Intern",
  location: "Coimbatore",
  openings: 2,
  experience: "Fresher or up to 1 Year of experience. Any Graduate in Media, Film Production, or related field.",
  desc: "Assist the creative team in editing video content for digital platforms while developing hands-on skills in post-production, colour grading, and motion graphics.",
  bullets: [
    "Assist in editing raw footage into polished videos for social media, websites, and marketing campaigns.",
    "Add background music, voiceovers, sound effects, and subtitles to video projects.",
    "Apply basic colour correction and grading to enhance visual consistency.",
    "Support the creation of short-form content including reels, stories, and video ads.",
    "Assist in creating simple motion graphics, lower thirds, and animated text using After Effects or similar tools.",
    "Organise and manage raw footage, project files, and exported assets systematically.",
    "Collaborate with the design and marketing teams on video concepts and storyboards.",
    "Incorporate feedback from senior editors to improve output quality and meet deadlines.",

    "--- Skills Required ---",
    "Adobe Premiere Pro (Basics)",
    "After Effects (Basics)",
    "Colour Correction Basics",
    "Subtitle & Captions",
    "Short-form Video Editing",
    "File Management",
    "Creativity",
    "Team Collaboration",
  ],
};

export default function VideoEditorInternPage() {
  return <JobPageTemplate role={role} />;
}
