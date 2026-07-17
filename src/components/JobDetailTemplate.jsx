import { useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { SITE_URL } from "@site/src/components/careersData";
import "../css/common.css";

/* ══════════════════════════════════════════
   STYLES
══════════════════════════════════════════ */

/* ══════════════════════════════════════════
   APPLY MODAL
══════════════════════════════════════════ */
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

  // const handleSubmit = async () => {
  //   if (!form.name || !form.email || !form.phone) return;
  //   setLoading(true);
  //   try {
  //     const formData = new FormData();
  //     formData.append("_subject", `New Job Application — ${role.title}`);
  //     formData.append("name", form.name);
  //     formData.append("email", form.email);
  //     formData.append("phone", form.phone);
  //     formData.append("role_title", role.title);
  //     formData.append("location", role.location);
  //     formData.append("years_of_experience", form.experience || "Not specified");
  //     formData.append("linkedin_profile", form.linkedin || "Not provided");
  //     formData.append("cover_note", form.cover || "Not provided");
  //     if (resume) formData.append("resume", resume);

  //     const res = await fetch("https://formspree.io/f/xbdqnqre", {
  //       method: "POST",
  //       body: formData,
  //       headers: { Accept: "application/json" },
  //     });
  //     const data = await res.json();
  //     if (res.ok) {
  //       setSubmitted(true);
  //     } else {
  //       const errMsg = data?.errors?.map((e) => e.message).join(", ") || "Something went wrong.";
  //       alert(`Error: ${errMsg}`);
  //     }
  //   } catch (err) {
  //     alert(err.message || "Network error. Please check your connection.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      let resumeUrl = "";

      // Upload Resume to Cloudinary
      if (resume) {
        const cloudData = new FormData();

        cloudData.append("file", resume);
        cloudData.append("upload_preset", "PCS Career");

        const cloudRes = await fetch(
          "https://api.cloudinary.com/v1_1/dsmzvp3ew/raw/upload",
          {
            method: "POST",
            body: cloudData,
          }
        );

        const cloudResult = await cloudRes.json();

        if (!cloudRes.ok) {
          throw new Error(
            cloudResult?.error?.message ||
            "Resume upload failed."
          );
        }

        resumeUrl = cloudResult.secure_url;
      }

      // Send Details to Formspree
      const formData = new FormData();

      formData.append(
        "_subject",
        `New Job Application — ${role.title}`
      );

      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("role_title", role.title);
      formData.append("location", role.location);

      formData.append(
        "years_of_experience",
        form.experience || "Not specified"
      );

      formData.append(
        "linkedin_profile",
        form.linkedin || "Not provided"
      );

      formData.append(
        "cover_note",
        form.cover || "Not provided"
      );

      formData.append(
        "resume_url",
        resumeUrl || "Resume not uploaded"
      );

      const res = await fetch(
        "https://formspree.io/f/xbdqnqre",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);

        setForm({
          name: "",
          email: "",
          phone: "",
          experience: "",
          linkedin: "",
          cover: "",
        });

        setResume(null);
      } else {
        const errMsg =
          data?.errors?.map((e) => e.message).join(", ") ||
          "Something went wrong.";

        alert(`Error: ${errMsg}`);
      }
    } catch (err) {
      alert(err.message || "Submission failed.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        {submitted ? (
          <div className="modal-success">
            <div className="success-icon">✓</div>
            <div className="success-title">Application Submitted!</div>
            <p className="success-sub">
              Thank you for applying for <strong>{role.title}</strong>. Our team will review your profile and get back to you within 3–5 business days.
            </p>
            <button className="success-close" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <button className="modal-close" onClick={onClose}>✕</button>
              <div className="modal-eyebrow">Apply Now</div>
              <div className="modal-title">{role.title}</div>
              <div className="modal-subtitle">
                📍 {role.location} &nbsp;·&nbsp; {role.title.toLowerCase().includes("intern") ? "Internship" : "Full-time"} &nbsp;·&nbsp; {role.openings} Opening{role.openings > 1 ? "s" : ""}
              </div>
            </div>
            <div className="modal-body">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name <span>*</span></label>
                  <input className="form-input" placeholder="John Doe" value={form.name} onChange={set("name")} />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number <span>*</span></label>
                  <input className="form-input" placeholder="+91 98765 43210" value={form.phone} onChange={set("phone")} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Email Address <span>*</span></label>
                <input className="form-input" type="email" placeholder="you@email.com" value={form.email} onChange={set("email")} />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Years of Experience</label>
                  <select className="form-select" value={form.experience} onChange={set("experience")}>
                    <option value="">Select...</option>
                    <option>Fresher (0–1 yr)</option>
                    <option>1–3 Years</option>
                    <option>3–5 Years</option>
                    <option>5–8 Years</option>
                    <option>8+ Years</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">LinkedIn Profile</label>
                  <input className="form-input" placeholder="linkedin.com/in/yourname" value={form.linkedin} onChange={set("linkedin")} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Upload Resume <span>*</span></label>
                <div className="file-upload-area">
                  <input type="file" accept=".pdf,.doc,.docx" onChange={handleFile} />
                  <div className="file-upload-icon">📄</div>
                  <div className="file-upload-text">
                    <strong>Click to upload</strong> or drag & drop<br />PDF, DOC, DOCX (max 5MB)
                  </div>
                  {resume && <div className="file-name">✓ {resume.name}</div>}
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Cover Note</label>
                <textarea className="form-textarea" placeholder="Tell us why you're a great fit for this role..." value={form.cover} onChange={set("cover")} />
              </div>
              <button
                className="modal-submit"
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

/* ══════════════════════════════════════════
   SEO HEAD
══════════════════════════════════════════ */
function JobSEO({ role }) {
const slug = role.slug || role.title.toLowerCase().replace(/\s+/g, "-");
  const canonicalUrl = `${SITE_URL}/careers/${slug}/`;
  const isIntern = role.title.toLowerCase().includes("intern");

  const jobSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: role.desc,
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
      { "@type": "ListItem", position: 2, name: "Careers", item: `${SITE_URL}/careers/` },
      { "@type": "ListItem", position: 3, name: role.title, item: canonicalUrl },
    ],
  };

  return (
    <Head>
      <title>{role.seo?.title || `${role.title} `} </title>
      <meta name="description"  content={role.seo?.description || role.desc} />
      <meta name="keywords" content={role.seo?.keywords || role.title}/>
      <link rel="canonical"  href={role.seo?.canonical || canonicalUrl} />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`${role.title}`} />
      <meta property="og:description" content={role.desc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${SITE_URL}/img/career.png`} />
      <meta property="og:site_name" content="Sterlo" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${role.title} `} />
      <meta name="twitter:description" content={role.desc} />
      <script type="application/ld+json">{JSON.stringify(jobSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Head>
  );
}

/* ══════════════════════════════════════════
   MAIN TEMPLATE — used by all 12 pages
══════════════════════════════════════════ */
export default function JobDetailTemplate({ role }) {
  const [showModal, setShowModal] = useState(false);
  const isIntern = role.title.toLowerCase().includes("intern");

  return (
    <Layout>
      <JobSEO role={role} />
      {showModal && <ApplyModal role={role} onClose={() => setShowModal(false)} />}

      {/* BANNER */}
      <section className="banner">
        <div className="banner-inner">
          <div className="banner-eyebrow">
            <div className="eyebrow-dot" />
            {isIntern ? "Internship Opening" : "Open Position"}
          </div>
          <h1 className="banner-title">{role.title}</h1>
          <p className="banner-subtitle">{role.desc}</p>
        </div>
      </section>

      {/* BODY */}
      <div className="jd-body">

        {/* LEFT — Content */}
        <div className="jd-content">
          <a className="jd-back" href="/careers/">← Back to Open Roles</a>

          {/* Meta Row */}
          <div className="jd-meta-row">
            <div className="jd-meta-item">
              <span className="jd-meta-label">Location</span>
              <span className="jd-meta-value">📍 {role.location}</span>
            </div>
            <div className="jd-meta-divider" />
            <div className="jd-meta-item">
              <span className="jd-meta-label">Openings</span>
              <span className="jd-meta-value">{role.openings} Positions</span>
            </div>
            <div className="jd-meta-divider" />
            <div className="jd-meta-item">
              <span className="jd-meta-label">Type</span>
              <span className="jd-meta-value">{isIntern ? "Internship" : "Full-time"}</span>
            </div>
            <div className="jd-meta-divider" />
            <div className="jd-meta-item">
              <span className="jd-meta-label">Experience & Qualification</span>
              <span className="jd-meta-value">{role.experience}</span>
            </div>
          </div>

          {/* Job Description */}
          <div className="jd-section">
            <h2 className="jd-section-title">Job Description</h2>
            <ul className="jd-bullets">
              {role.jobDescription.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Skills Required */}
          <div className="jd-section">
            <h2 className="jd-section-title">Skills Required</h2>
            <ul className="jd-bullets">
              {role.skills.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT — Sticky Sidebar */}
        <div className="jd-sidebar">
          <div className="jd-sticky-card">
            <div className="jd-sticky-role">{role.title}</div>
            <div className="jd-sticky-loc">
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              {role.location}
            </div>
            <div className="jd-sticky-divider" />
            <div className="jd-sticky-info">
              <div className="jd-info-row"><span>Openings</span><strong>{role.openings}</strong></div>
              <div className="jd-info-row"><span>Type</span><strong>{isIntern ? "Internship" : "Full-time"}</strong></div>
              <div className="jd-info-row"><span>Location</span><strong>{role.location}</strong></div>
            </div>
            <button className="jd-apply-btn" onClick={() => setShowModal(true)}>
              Apply Now →
            </button>
            <p className="jd-apply-note">We'll get back to you within 3–5 business days.</p>
          </div>
        </div>

      </div>
    </Layout>
  );
}