import { useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";

const SITE_URL = "https://www.sterlo.com";

/* ═══════════════════════════════════════════════════════
   SHARED STYLES (same as careers.jsx)
═══════════════════════════════════════════════════════ */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

  :root {
    --navy: #004168;
    --navy-deep: #002a44;
    --navy-mid: #0a5282;
    --orange: #ed8337;
    --orange-light: #f5a66b;
    --green: #34d399;
    --blue: #1a73e8;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .careers-wrap {
    font-family: 'Poppins', sans-serif;
    background: #f0f4f8;
    color: #0d1f2d;
  }

  /* ── BANNER ── */
  .banner {
    position: relative;
    min-height: 340px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 55%, var(--navy-mid) 100%);
    padding: 3rem 5% 4rem;
  }
  .banner::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: linear-gradient(rgba(237,131,55,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(237,131,55,0.06) 1px, transparent 1px);
    background-size: 60px 60px;
    animation: grid-drift 22s linear infinite;
  }
  .banner::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(ellipse 55% 80% at 80% 60%, rgba(237,131,55,0.12) 0%, transparent 65%),
      radial-gradient(ellipse 45% 70% at 5% 20%, rgba(0,42,68,0.6) 0%, transparent 55%);
  }
  @keyframes grid-drift { from{background-position:0 0} to{background-position:60px 60px} }

  .banner-inner {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.1rem;
    max-width: 700px;
  }
  .banner-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    background: rgba(237,131,55,0.12);
    border: 1px solid rgba(237,131,55,0.32);
    color: var(--orange);
    font-size: .7rem;
    font-weight: 700;
    padding: .38rem 1.1rem;
    border-radius: 50px;
    letter-spacing: .12em;
    text-transform: uppercase;
    animation: fadeUp .5s ease both;
  }
  .eyebrow-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--orange);
    animation: pulse-dot 1.6s infinite;
  }
  @keyframes pulse-dot {
    0%,100%{opacity:1;transform:scale(1)}
    50%{opacity:.4;transform:scale(1.5)}
  }
  .banner-title {
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 700;
    line-height: 1.1;
    color: #fff;
    animation: fadeUp .6s .08s ease both;
  }
  .banner-subtitle {
    font-size: .97rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.92);
    max-width: 560px;
    animation: fadeUp .65s .16s ease both;
  }
  @keyframes fadeUp {
    from{opacity:0;transform:translateY(24px)}
    to{opacity:1;transform:translateY(0)}
  }

  /* ── JOB DETAIL BODY ── */
  .jd-body {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 2.5rem;
    max-width: 1300px;
    margin: 0 auto;
    padding: 3rem 2rem;
    align-items: start;
  }

  .jd-back {
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    background: none;
    border: none;
    color: var(--blue);
    font-size: .82rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    padding: 0;
    margin-bottom: 2rem;
    transition: gap .2s;
    text-decoration: none;
  }
  .jd-back:hover { gap: .7rem; color: var(--blue); }

  .jd-meta-row {
    flex-wrap: wrap;
    padding: 24px;
    gap: 0;
    background: #fff;
    border: 1.5px solid rgba(0,65,104,0.1);
    border-radius: 14px;
    overflow: hidden;
    margin-bottom: 2.2rem;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  }
  .jd-meta-item {
    flex: 1;
    min-width: 160px;
    padding: 1.2rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: .3rem;
  }
  .jd-meta-label {
    font-size: .67rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .1em;
    color: #8a9aaa;
  }
  .jd-meta-value {
    font-size: .88rem;
    font-weight: 600;
    color: #0d1f2d;
    line-height: 1.4;
  }
  .jd-meta-divider {
    width: 1px;
    background: rgba(0,65,104,0.08);
    align-self: stretch;
  }

  .jd-section { margin-bottom: 2rem; }
  .jd-section-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: #0d1f2d;
    margin-bottom: 1rem;
    padding-bottom: .6rem;
    border-bottom: 2px solid rgba(26,115,232,0.15);
  }
  .jd-bullets {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: .7rem;
  }
  .jd-bullets li {
    font-size: .875rem;
    color: #3a4a5a;
    line-height: 1.75;
    padding-left: 1.4rem;
    position: relative;
  }
  .jd-bullets li::before {
    content: '';
    position: absolute;
    left: 0; top: 10px;
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--blue);
  }

  .jd-content { min-width: 0; }

  /* ── STICKY SIDEBAR ── */
  .jd-sidebar {
    position: sticky;
    top: 24px;
    align-self: start;
    height: fit-content;
  }
  .jd-sticky-card {
    background: #fff;
    border: 1.5px solid rgba(26,115,232,0.15);
    border-radius: 18px;
    padding: 1.8rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 0 8px 32px rgba(26,115,232,0.1);
    margin-top: 60px;
  }
  .jd-sticky-role {
    font-size: 1.05rem;
    font-weight: 800;
    color: #0d1f2d;
    line-height: 1.3;
  }
  .jd-sticky-loc {
    display: flex;
    align-items: center;
    gap: .4rem;
    font-size: .8rem;
    color: #6a7a8a;
    font-weight: 500;
  }
  .jd-sticky-divider {
    height: 1px;
    background: rgba(0,65,104,0.08);
  }
  .jd-sticky-info {
    display: flex;
    flex-direction: column;
    gap: .55rem;
  }
  .jd-info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .82rem;
    color: #6a7a8a;
  }
  .jd-info-row strong {
    color: #0d1f2d;
    font-weight: 700;
  }
  .jd-apply-btn {
    width: 100%;
    padding: .9rem;
    background: var(--blue);
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: .92rem;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: background .22s, transform .18s, box-shadow .22s;
    box-shadow: 0 4px 18px rgba(26,115,232,0.35);
    letter-spacing: .02em;
  }
  .jd-apply-btn:hover {
    background: #1558c0;
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(26,115,232,0.45);
  }
  .jd-apply-note {
    font-size: .72rem;
    color: #9aaabb;
    text-align: center;
    line-height: 1.5;
  }

  /* ── MODAL ── */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,20,40,0.55);
    backdrop-filter: blur(4px);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    animation: fadeIn .2s ease;
  }
  @keyframes fadeIn { from{opacity:0} to{opacity:1} }
  .modal-box {
    background: #fff;
    border-radius: 22px;
    width: 100%;
    max-width: 580px;
    max-height: 92vh;
    overflow-y: auto;
    box-shadow: 0 24px 80px rgba(0,0,0,0.22);
    animation: slideUp .28s ease;
    position: relative;
  }
  @keyframes slideUp {
    from{opacity:0;transform:translateY(30px)}
    to{opacity:1;transform:translateY(0)}
  }
  .modal-header {
    background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 60%, var(--navy-mid) 100%);
    padding: 1.8rem 2rem 1.5rem;
    border-radius: 22px 22px 0 0;
    position: relative;
  }
  .modal-header::before {
    content:'';position:absolute;inset:0;border-radius:22px 22px 0 0;
    background-image:linear-gradient(rgba(237,131,55,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(237,131,55,0.07) 1px,transparent 1px);
    background-size:40px 40px;pointer-events:none;
  }
  .modal-eyebrow { font-size:.65rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--orange);margin-bottom:.45rem;position:relative;z-index:1; }
  .modal-title { font-size:1.2rem;font-weight:800;color:#fff;line-height:1.3;position:relative;z-index:1; }
  .modal-subtitle { font-size:.78rem;color:rgba(255,255,255,0.55);margin-top:.35rem;position:relative;z-index:1; }
  .modal-close {
    position:absolute;top:1.1rem;right:1.1rem;width:32px;height:32px;border-radius:50%;
    background:rgba(255,255,255,0.12);border:none;color:#fff;font-size:1.1rem;cursor:pointer;
    display:flex;align-items:center;justify-content:center;transition:background .2s;z-index:2;font-family:'Poppins',sans-serif;
  }
  .modal-close:hover{background:rgba(255,255,255,0.22);}
  .modal-body { padding:1.8rem 2rem 2rem;display:flex;flex-direction:column;gap:1.1rem; }
  .form-row { display:grid;grid-template-columns:1fr 1fr;gap:1rem; }
  .form-group { display:flex;flex-direction:column;gap:.4rem; }
  .form-group.full { grid-column:1/-1; }
  .form-label { font-size:.72rem;font-weight:700;color:#3a4a5a;letter-spacing:.04em;text-transform:uppercase; }
  .form-label span { color:#e53e3e;margin-left:2px; }
  .form-input,.form-select,.form-textarea {
    width:100%;padding:.72rem 1rem;border:1.5px solid #dde3ea;border-radius:10px;
    font-size:.875rem;color:#0d1f2d;font-family:'Poppins',sans-serif;background:#f8fafc;
    transition:border-color .2s,box-shadow .2s;outline:none;
  }
  .form-input:focus,.form-select:focus,.form-textarea:focus {
    border-color:var(--blue);box-shadow:0 0 0 3px rgba(26,115,232,0.1);background:#fff;
  }
  .form-textarea { resize:vertical;min-height:90px; }
  .form-select { appearance:none;cursor:pointer; }
  .file-upload-area {
    border:2px dashed #c8d5e4;border-radius:12px;padding:1.4rem;text-align:center;
    cursor:pointer;transition:border-color .2s,background .2s;background:#f8fafc;position:relative;
  }
  .file-upload-area:hover { border-color:var(--blue);background:rgba(26,115,232,0.04); }
  .file-upload-area input[type="file"] { position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%; }
  .file-upload-icon { font-size:1.8rem;margin-bottom:.4rem; }
  .file-upload-text { font-size:.8rem;color:#6a7a8a;line-height:1.6; }
  .file-upload-text strong { color:var(--blue); }
  .file-name { margin-top:.5rem;font-size:.75rem;color:var(--blue);font-weight:600;background:rgba(26,115,232,0.08);border-radius:6px;padding:.3rem .7rem;display:inline-block; }
  .modal-submit {
    width:100%;padding:.95rem;background:var(--blue);color:#fff;border:none;border-radius:12px;
    font-size:.95rem;font-weight:700;font-family:'Poppins',sans-serif;cursor:pointer;
    transition:background .22s,transform .18s,box-shadow .22s;box-shadow:0 4px 18px rgba(26,115,232,0.35);margin-top:.4rem;
  }
  .modal-submit:hover { background:#1558c0;transform:translateY(-2px);box-shadow:0 8px 28px rgba(26,115,232,0.45); }
  .modal-submit:disabled { background:#a0b4cc;cursor:not-allowed;transform:none;box-shadow:none; }
  .modal-success { padding:3rem 2rem;text-align:center;display:flex;flex-direction:column;align-items:center;gap:1rem; }
  .success-icon {
    width:70px;height:70px;border-radius:50%;background:linear-gradient(135deg,#34d399,#059669);
    display:flex;align-items:center;justify-content:center;font-size:2rem;
    box-shadow:0 8px 24px rgba(52,211,153,0.35);animation:pop .4s cubic-bezier(.34,1.56,.64,1);
  }
  @keyframes pop { from{transform:scale(0)} to{transform:scale(1)} }
  .success-title { font-size:1.3rem;font-weight:800;color:#0d1f2d; }
  .success-sub { font-size:.85rem;color:#6a7a8a;line-height:1.7;max-width:360px; }
  .success-close {
    margin-top:.5rem;padding:.7rem 2rem;background:var(--blue);color:#fff;border:none;
    border-radius:10px;font-size:.875rem;font-weight:700;font-family:'Poppins',sans-serif;cursor:pointer;transition:background .2s;
  }
  .success-close:hover { background:#1558c0; }

  @media (max-width: 860px) {
    .jd-body {
      display: flex;
      flex-direction: column;
      padding: 2.5rem 1.2rem;
      gap: 1.8rem;
    }
    .jd-content { order: 1; }
    .jd-sidebar { position: static; order: 2; width: 100%; }
  }
  @media (max-width: 520px) {
    .form-row { grid-template-columns: 1fr; }
    .modal-body { padding: 1.4rem 1.2rem 1.6rem; }
    .modal-header { padding: 1.4rem 1.2rem 1.2rem; }
  }
`;

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

/* ═══════════════════════════════════════════════════════
   MAIN EXPORTED TEMPLATE — import this in each role page
═══════════════════════════════════════════════════════ */
export default function JobPageTemplate({ role }) {
  const [showModal, setShowModal] = useState(false);

  const slug = role.title.toLowerCase().replace(/\s+/g, "-");
  const canonicalUrl = `${SITE_URL}/career/${slug}`;
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
        <title>{role.title} Jobs in Coimbatore | Sterlo Careers</title>
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
        <meta property="og:title" content={`${role.title} | Sterlo Careers`} />
        <meta property="og:description" content={role.desc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${SITE_URL}/img/career.png`} />
        <meta property="og:site_name" content="Sterlo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${role.title} | Sterlo Careers`} />
        <meta name="twitter:description" content={role.desc} />
        <meta name="twitter:image" content={`${SITE_URL}/img/career.png`} />
        <script type="application/ld+json">{JSON.stringify(jobSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Head>

      <div className="careers-wrap">
        <style>{styles}</style>

        {showModal && <ApplyModal role={role} onClose={() => setShowModal(false)} />}

        {/* BANNER */}
        <section className="banner">
          <div className="banner-inner">
            <div className="banner-eyebrow">
              <div className="eyebrow-dot" />
              Open Position
            </div>
            <h1 className="banner-title">{role.title}</h1>
            <p className="banner-subtitle">{role.desc}</p>
          </div>
        </section>

        {/* JOB DETAIL BODY */}
        <div className="jd-body">

          {/* LEFT — Content */}
          <div className="jd-content">
            <a className="jd-back" href="/careers">← Back to Open Roles</a>

            <div className="jd-meta-row">
              <div className="jd-meta-item">
                <span className="jd-meta-label">Location</span>
                <span className="jd-meta-value">{role.location}</span>
              </div>
              <div className="jd-meta-divider" />
              <div className="jd-meta-item">
                <span className="jd-meta-label">Number of Openings</span>
                <span className="jd-meta-value">{role.openings}</span>
              </div>
              <div className="jd-meta-divider" />
              <div className="jd-meta-item">
                <span className="jd-meta-label">Experience & Qualification</span>
                <span className="jd-meta-value">{role.experience}</span>
              </div>
            </div>

            <div className="jd-section">
              <h2 className="jd-section-title">Job Description</h2>
              <ul className="jd-bullets">
                {jobBullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>

            {skillItems.length > 0 && (
              <div className="jd-section">
                <h2 className="jd-section-title">Skills Required</h2>
                <ul className="jd-bullets">
                  {skillItems.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT — Sticky Apply Card */}
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
              </div>
              <button className="jd-apply-btn" onClick={() => setShowModal(true)}>Apply Now</button>
              <p className="jd-apply-note">We'll get back to you within 3–5 business days.</p>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}