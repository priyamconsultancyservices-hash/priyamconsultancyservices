import { useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import "../css/common.css";

const SITE_URL = "https://www.priyamconsultancy.com/";

/* ═══════════════════════════════════════════════════════
   SHARED STYLES (same as careers.jsx)
═══════════════════════════════════════════════════════ */


/* ── APPLY MODAL ── */
function ApplyModal({ role, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", experience: "", linkedin: "", cover: "" });
  const [resume, setResume] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) setResume(file);
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone) return;
    setLoading(true);
    try {
      let resumeUrl = "Not provided";
      if (resume) {
        const cloudData = new FormData();
        cloudData.append("file", resume);
        cloudData.append("upload_preset", "PCS Career");
        cloudData.append("folder", "sterlo_resumes");
        const cloudRes = await fetch("https://api.cloudinary.com/v1_1/dsmzvp3ew/raw/upload", {
          method: "POST",
          body: cloudData,
        });
        const cloudJson = await cloudRes.json();
        if (cloudJson.secure_url) {
          resumeUrl = cloudJson.secure_url;
        } else {
          throw new Error("Resume upload failed. Please try again.");
        }
      }
      const formData = new FormData();
      formData.append("_subject", `New Job Application — ${role.title}`);
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("role_title", role.title);
      formData.append("location", role.location);
      formData.append("years_of_experience", form.experience || "Not specified");
      formData.append("linkedin_profile", form.linkedin || "Not provided");
      formData.append("cover_note", form.cover || "Not provided");
      formData.append("resume_link", resumeUrl);
      const res = await fetch("https://formspree.io/f/xbdqnqre", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        const errMsg = data?.errors?.map((e) => e.message).join(", ") || "Something went wrong.";
        alert(`Error: ${errMsg}`);
      }
    } catch (err) {
      alert(err.message || "Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="jpt-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="jpt-modal-box">
        {submitted ? (
          <div className="jpt-modal-success">
            <div className="jpt-success-icon">✓</div>
            <div className="jpt-success-title">Application Submitted!</div>
            <p className="jpt-success-sub">
              Thank you for applying for <strong>{role.title}</strong>. Our team will review your profile and get back to you within 3–5 business days.
            </p>
            <button className="jpt-success-close" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div className="jpt-modal-header">
              <button className="jpt-modal-close" onClick={onClose}>✕</button>
              <div className="jpt-modal-eyebrow">Apply Now</div>
              <div className="jpt-modal-title">{role.title}</div>
              <div className="jpt-modal-subtitle">
                📍 {role.location} &nbsp;·&nbsp; {role.title.toLowerCase().includes("intern") ? "Internship" : "Full-time"} &nbsp;·&nbsp; {role.openings} Opening{role.openings > 1 ? "s" : ""}
              </div>
            </div>
            <div className="jpt-modal-body">
              <div className="jpt-form-row">
                <div className="jpt-form-group">
                  <label className="jpt-form-label">Full Name <span>*</span></label>
                  <input className="jpt-form-input" placeholder="John Doe" value={form.name} onChange={set("name")} />
                </div>
                <div className="jpt-form-group">
                  <label className="jpt-form-label">Phone Number <span>*</span></label>
                  <input className="jpt-form-input" placeholder="+91 98765 43210" value={form.phone} onChange={set("phone")} />
                </div>
              </div>
              <div className="jpt-form-group">
                <label className="jpt-form-label">Email Address <span>*</span></label>
                <input className="jpt-form-input" type="email" placeholder="you@email.com" value={form.email} onChange={set("email")} />
              </div>
              <div className="jpt-form-row">
                <div className="jpt-form-group">
                  <label className="jpt-form-label">Years of Experience</label>
                  <select className="jpt-form-select" value={form.experience} onChange={set("experience")}>
                    <option value="">Select...</option>
                    <option>Fresher (0–1 yr)</option>
                    <option>1–3 Years</option>
                    <option>3–5 Years</option>
                    <option>5–8 Years</option>
                    <option>8+ Years</option>
                  </select>
                </div>
                <div className="jpt-form-group">
                  <label className="jpt-form-label">LinkedIn Profile</label>
                  <input className="jpt-form-input" placeholder="linkedin.com/in/yourname" value={form.linkedin} onChange={set("linkedin")} />
                </div>
              </div>
              <div className="jpt-form-group">
                <label className="jpt-form-label">Upload Resume <span>*</span></label>
                <div className="jpt-file-upload-area">
                  <input type="file" accept=".pdf,.doc,.docx" onChange={handleFile} />
                  <div className="jpt-file-upload-icon">📄</div>
                  <div className="jpt-file-upload-text">
                    <strong>Click to upload</strong> or drag & drop<br />PDF, DOC, DOCX (max 5MB)
                  </div>
                  {resume && <div className="jpt-file-name">✓ {resume.name}</div>}
                </div>
              </div>
              <div className="jpt-form-group">
                <label className="jpt-form-label">Cover Note</label>
                <textarea className="jpt-form-textarea" placeholder="Tell us why you're a great fit for this role..." value={form.cover} onChange={set("cover")} />
              </div>
              <button
                className="jpt-modal-submit"
                onClick={handleSubmit}
                disabled={loading || !form.name || !form.email || !form.phone}
              >
                {loading ? (resume ? "📤 Uploading Resume..." : "Submitting...") : "Submit Application →"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN EXPORTED TEMPLATE — import this in each role page
═══════════════════════════════════════════════════════ */
export default function JobPageTemplate({ role }) {
  const [showModal, setShowModal] = useState(false);

  const slug = role.title.toLowerCase().replace(/\s+/g, "-");
  const canonicalUrl = `${SITE_URL}/careers/${slug}`;
  const isIntern = role.title.toLowerCase().includes("intern");

  // Split bullets into job description and skills
  const splitIdx = role.bullets.indexOf("--- Skills Required ---");
  const jobBullets = splitIdx === -1 ? role.bullets : role.bullets.slice(0, splitIdx);
  const skillItems = splitIdx === -1 ? [] : role.bullets.slice(splitIdx + 1);

  const jobSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: role.desc,
    identifier: { "@type": "PropertyValue", name: "Sterlo", value: slug },
    datePosted: "2025-01-01",
    validThrough: "2025-12-31",
    employmentType: isIntern ? "INTERN" : "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "Sterlo",
      sameAs: SITE_URL,
      logo: `${SITE_URL}/img/logo.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Coimbatore",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
    },
    experienceRequirements: role.experience,
    numberOfPositions: role.openings,
    url: canonicalUrl,
    directApply: true,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Careers", item: `${SITE_URL}/careers` },
      { "@type": "ListItem", position: 3, name: role.title, item: canonicalUrl },
    ],
  };

  return (
    <Layout>
      <Head>
        <title>{role.title} </title>
        <meta
          name="description"
          content={`Apply for ${role.title} at Sterlo, Coimbatore. ${role.desc.slice(0, 120)}. ${role.openings} openings available.`}
        />
        <meta
          name="keywords"
          content={`${role.title} jobs Coimbatore, ${role.title} careers, Sterlo ${role.title}, ${role.title} hiring Coimbatore`}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${role.title} `} />
        <meta property="og:description" content={role.desc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${SITE_URL}/img/career.png`} />
        <meta property="og:site_name" content="Sterlo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${role.title} `} />
        <meta name="twitter:description" content={role.desc} />
        <meta name="twitter:image" content={`${SITE_URL}/img/career.png`} />
        <script type="application/ld+json">{JSON.stringify(jobSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Head>

      <div className="jpt-careers-wrap">

        {showModal && <ApplyModal role={role} onClose={() => setShowModal(false)} />}

        {/* BANNER */}
        <section className="jpt-banner">
          <div className="jpt-banner-inner">
            <div className="jpt-banner-eyebrow">
              <div className="jpt-eyebrow-dot" />
              Open Position
            </div>
            <h1 className="jpt-banner-title">{role.title}</h1>
            <p className="jpt-banner-subtitle">{role.desc}</p>
          </div>
        </section>

        {/* JOB DETAIL BODY */}
        <div className="jpt-jd-body">
          {/* LEFT — Content */}
          <div className="jpt-jd-content">
            <a className="jpt-jd-back" href="/careers">← Back to Open Roles</a>

            <div className="jpt-jd-meta-row">
              <div className="jpt-jd-meta-item">
                <span className="jpt-jd-meta-label">Location</span>
                <span className="jpt-jd-meta-value">{role.location}</span>
              </div>
              <div className="jpt-jd-meta-divider" />
              <div className="jpt-jd-meta-item">
                <span className="jpt-jd-meta-label">Number of Openings</span>
                <span className="jpt-jd-meta-value">{role.openings}</span>
              </div>
              <div className="jpt-jd-meta-divider" />
              <div className="jpt-jd-meta-item">
                <span className="jpt-jd-meta-label">Experience & Qualification</span>
                <span className="jpt-jd-meta-value">{role.experience}</span>
              </div>
            </div>

            <div className="jpt-jd-section">
              <h2 className="jpt-jd-section-title">Job Description</h2>
              <ul className="jpt-jd-bullets">
                {jobBullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>

            {skillItems.length > 0 && (
              <div className="jpt-jd-section">
                <h2 className="jpt-jd-section-title">Skills Required</h2>
                <ul className="jpt-jd-bullets">
                  {skillItems.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT — Sticky Apply Card */}
          <div className="jpt-jd-sidebar">
            <div className="jpt-jd-sticky-card">
              <div className="jpt-jd-sticky-role">{role.title}</div>
              <div className="jpt-jd-sticky-loc">
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                {role.location}
              </div>
              <div className="jpt-jd-sticky-divider" />
              <div className="jpt-jd-sticky-info">
                <div className="jpt-jd-info-row"><span>Openings</span><strong>{role.openings}</strong></div>
                <div className="jpt-jd-info-row"><span>Type</span><strong>{isIntern ? "Internship" : "Full-time"}</strong></div>
              </div>
              <button className="jpt-jd-apply-btn" onClick={() => setShowModal(true)}>Apply Now</button>
              <p className="jpt-jd-apply-note">We'll get back to you within 3–5 business days.</p>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}