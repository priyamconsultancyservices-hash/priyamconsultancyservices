import JobPageTemplate from "@site/src/components/JobPageTemplate";

const role = {
  title: "Web Developer Intern",
  location: "Coimbatore",
  openings: 2,
  experience: "Student / Fresher pursuing or completed a relevant degree.",
  desc: "Assist the development team in building and maintaining web applications while gaining hands-on experience in modern web technologies and real-world projects.",
  bullets: [
    "Assist in website development tasks",
    "Support senior developers on live projects",
    "Learn performance and SEO best practices",
    "Debug and test website features",
    "Maintain basic documentation",
    "Apply learnings through hands-on execution",
    "Continuously improve technical skills",

    "--- Skills Required ---",
    "Basic knowledge of web development fundamentals",
    "Willingness to learn modern development practices",
    "Interest in website performance and optimization",
    "Basic understanding of HTML, CSS, or JavaScript",
    "Problem-solving mindset",
    "Effective utilization of AI tools for learning and development",
    "Good communication skills",
    "Ability to follow guidance and instructions",
  ],
};

export default function WebDeveloperInternPage() {
  return <JobPageTemplate role={role} />;
}
