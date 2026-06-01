import JobPageTemplate from "@site/src/components/JobPageTemplate";

const role = {
  title: "Graphic Designer Intern",
  location: "Coimbatore",
  openings: 2,
  experience: "Student / Fresher with basic design knowledge.",
  desc: "Support the design team in creating visually compelling graphics for digital and print channels while building proficiency in industry-standard design tools.",
  bullets: [
    "Assist in creating marketing creatives",
    "Support senior designers on projects",
    "Learn brand guidelines and workflows",
    "Design social media and basic visuals",
    "Revise designs based on feedback",
    "Maintain organized design assets",
    "Improve skills through hands-on practice",

    "--- Skills Required ---",
    "Basic understanding of design principles",
    "Familiarity with design tools",
    "Creativity and visual sense",
    "Willingness to learn branding systems",
    "Attention to detail",
    "Effective utilization of AI design tools for ideation",
    "Time management skills",
    "Ability to accept feedback",
  ],
};

export default function GraphicDesignerInternPage() {
  return <JobPageTemplate role={role} />;
}
