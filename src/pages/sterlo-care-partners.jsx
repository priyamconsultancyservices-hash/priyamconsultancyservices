import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import CTASection from "../components/HomePage/CTA";
import BlogSection from "../components/BlogSection";
import Layout from '@theme/Layout';
const banner = "/img/sterlocare.png";

/* ═══════════════════════════════════════════
   GLOBAL STYLES
═══════════════════════════════════════════ */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=DM+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');

  :root {
    --navy: #004168;
    --navy-deep: #022b44;
    --navy-mid: #0a3652;
    --navy-card: #0d3f60;
    --navy-light: #0d4466;
    --orange: #ed8337;
    --orange-light: #f5a66b;
    --orange-glow: rgba(237,131,55,0.18);
    --white: #ffffff;
    --text-muted: rgba(255,255,255,0.55);
    --text-dim: rgba(255,255,255,0.35);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'DM Sans', sans-serif; overflow-x: hidden; }

  @keyframes fadeUp   { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:translateY(0) } }
  @keyframes fadeIn   { from { opacity:0 } to { opacity:1 } }
  @keyframes pulse-dot{ 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.8);opacity:0.4} }
  @keyframes orb-drift{ 0%{transform:translate(0,0)} 100%{transform:translate(22px,-22px)} }
  @keyframes line-in  { to{transform:scaleX(1)} }

  /* Global responsive fixes */
  img { max-width:100%; height:auto; }
  @media(max-width:768px){
    section { padding-left:5% !important; padding-right:5% !important; }
  }
  @media(max-width:480px){
    section { padding-left:4% !important; padding-right:4% !important; }
  }
`;

/* ═══════════════════════════════════════════
   SECTION 1 — HERO BANNER (Finance Orange Theme)
═══════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="hero-main-section" style={{
      minHeight: "100vh",
      display: "grid",
      // gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      gap: "2rem",
      padding: "4rem 6% 3rem",
      position: "relative",
      overflow: "hidden",
      background: "#004168",
    }}>
      <style>{GLOBAL_CSS}{`
        .seo-badge { display:inline-flex; align-items:center; gap:0.5rem; background:rgba(237,131,55,0.1); border:1px solid rgba(237,131,55,0.32); color:#ed8337; font-size:0.7rem; font-weight:700; padding:0.38rem 1rem; border-radius:50px; letter-spacing:0.09em; text-transform:uppercase; width:fit-content; animation:fadeUp .6s ease both; }
        .badge-dot-red { width:6px; height:6px; border-radius:50%; background:#ed8337; animation:pulse-dot 1.7s ease-in-out infinite; }
        .seo-hero-heading { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.6vw,3.3rem); font-weight:600; line-height:1.22; margin-top:1.3rem; color:#fff; animation:fadeUp .7s .08s ease both; text-align:start; }
        .seo-red { color:#ed8337; }
        .seo-underline { position:relative; display:inline-block; }
        .seo-underline::after { content:''; position:absolute; left:0; bottom:-3px; width:100%; height:3px; background:linear-gradient(90deg,#ed8337,#f5a66b); border-radius:2px; transform:scaleX(0); transform-origin:left; animation:line-in .55s 1s ease forwards; }
        .seo-sub { margin-top:1.4rem; font-size:0.97rem; line-height:1.82; color:rgba(255,255,255,0.85); max-width:fit-content; animation:fadeUp .7s .16s ease both; }
        .seo-actions { margin-top:2rem; display:flex; gap:1rem; align-items:center; flex-wrap:wrap; animation:fadeUp .7s .26s ease both; }
        .seo-btn-fill { background:linear-gradient(135deg,#ed8337,#f5a66b); color:#fff; padding:0.88rem 2.1rem; border-radius:50px; font-family:'DM Sans',sans-serif; font-size:0.93rem; font-weight:600; text-decoration:none; display:inline-flex; align-items:center; gap:0.55rem; box-shadow:0 6px 26px rgba(237,131,55,0.38); transition:all .22s; }
        .seo-btn-fill:hover { transform:translateY(-3px); box-shadow:0 10px 34px rgba(237,131,55,0.5); }
        .seo-btn-arr { width:24px; height:24px; border-radius:50%; background:rgba(2,43,68,0.25); display:flex; align-items:center; justify-content:center; font-size:0.9rem; }
        .hero-orb { position:absolute; border-radius:50%; pointer-events:none; filter:blur(80px); animation:orb-drift 8s ease-in-out infinite alternate; }
        .hero-orb-1 { width:400px; height:400px; background:rgba(237,131,55,0.06); top:-80px; right:8%; }
        .hero-orb-2 { width:280px; height:280px; background:rgba(10,54,82,0.8); bottom:-60px; left:5%; animation-delay:2s; }

        .hero-section-grid {
          display:grid;
          grid-template-columns:1fr 1fr;
          align-items:center;
          gap:2rem;
          width:100%;
          position:relative;
          z-index:2;
        }
        .hero-content-col { display:flex; flex-direction:column; padding-bottom:3rem; }
        .hero-img-col { display:flex; align-items:flex-end; justify-content:center; animation:fadeUp .9s .12s ease both; }
        .seo-illus-wrap { position:relative; width:100%; max-width:600px; height:470px; display:flex; align-items:center; justify-content:center; }

        @media(max-width:900px){
          section.hero-main-section { padding:4rem 5% 2rem !important; min-height:auto !important; display:block !important; }
          .hero-section-grid { grid-template-columns:1fr !important; gap:1.5rem; padding: 4rem 0; }
          .hero-content-col { order:1; padding-bottom:0; text-align:start !important; align-items:flex-start !important; }
          .hero-img-col { order:2; }
          .seo-illus-wrap { width:100% !important; height:260px !important; max-width:100%; }
          .seo-sub { max-width:100%; text-align:start !important; }
          .seo-hero-heading { text-align:start !important; }
          .seo-badge { align-self:flex-start !important; }
        }
        @media(max-width:480px){
          .seo-illus-wrap { height:200px !important; }
          .seo-hero-heading { font-size:clamp(2rem,7vw,3.3rem) !important; text-align:start !important; }
          .seo-sub { font-size:0.92rem; text-align:start !important; }
          .seo-btn-fill { padding:0.75rem 1.6rem; font-size:0.88rem; }
        }
      `}</style>

      {/* Orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="hero-section-grid">
        {/* CONTENT — always first in DOM → first on mobile */}
        <div className="hero-content-col">
          <div className="seo-badge"><div className="badge-dot-red" />Sterlo Care</div>
          <h1 className="seo-hero-heading">
            Digitizing Healthcare with
            Smart <span className="seo-underline seo-red">End-to-End</span>
            Digital Solutions
          </h1>
          <p className="seo-sub">
Empowering healthcare organizations with end-to-end digital transformation.
SterloCare modernizes patient experience, care quality, odernizes patient experience, care quality, and operational performance helping hospitals achieve efficiency, compliance, and excellence through automation and real-time intelligence.
          </p>
          <div className="seo-actions">
            <a className="seo-btn-fill" href="#approach"><span>Get Free SEO Audit</span><div className="seo-btn-arr">›</div></a>
          </div>
        </div>

        {/* IMAGE — second in DOM → second on mobile */}
        <div className="hero-img-col">
          <div className="seo-illus-wrap">
            <img
              src={banner}
              alt="SEO Growth Illustration"
              style={{ width:"100%", height:"100%", objectFit:"contain", position:"relative", zIndex:5 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — OUR APPROACH + FORM
═══════════════════════════════════════════ */
function ApproachSection() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", company:"", msg:"" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      name: form.name, email: form.email, phone: form.phone,
      company: form.company, message: form.msg, url: window.location.href,
    };
    emailjs.send("service_8xw6k3r","template_jarui36", templateParams,"XWRnXi4hK2SvmRG3q")
      .then(() => { alert("Message Sent Successfully ✅"); setForm({ name:"",email:"",phone:"",company:"",msg:"" }); })
      .catch(() => alert("Failed to send ❌"));
  };

  return (
    <section id="approach" style={{ background:"#ffffff", padding:"5rem 6%", position:"relative", overflow:"hidden" }}>
      <style>{`
        /* eyebrow shared */
        .seo-eyebrow-wrap { display:flex; align-items:center; gap:12px; margin-bottom:12px; }
        .seo-eyebrow-line { flex:0 0 32px; height:2px; background:linear-gradient(90deg,#ed8337,transparent); border-radius:2px; }
        .seo-eyebrow-line-right { background:linear-gradient(270deg,#ed8337,transparent); }
        .seo-eyebrow-text { font-family:'Poppins',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#ed8337; }

        /* approach layout */
        .ap2-inner { position:relative; z-index:2;  margin:0 auto; display:grid; grid-template-columns:1fr 0.75fr; gap:4rem; align-items:center; }
        .ap2-heading { font-family:'Poppins',sans-serif; font-weight:600; font-size:clamp(1.9rem,2.8vw,2.6rem); line-height:1.12; color:#000; margin-bottom:1.2rem; }
        .ap2-heading span { color:#ed8337; }
        .ap2-intro { font-size:0.97rem; line-height:1.8; color:rgba(2,43,68,0.72); margin-bottom:1.2rem; }

        /* form card */
        .ap2-form-wrap { position:relative; max-width:460px; }
        .ap2-form-wrap::before { content:''; position:absolute; inset:-2px; background:linear-gradient(135deg,rgba(237,131,55,0.5),rgba(2,43,68,0.08),rgba(237,131,55,0.5)); border-radius:26px; z-index:0; }
        .ap2-form-card { position:relative; z-index:1; background:#004168; border-radius:24px; padding:2.8rem 2.6rem; box-shadow:0 24px 60px rgba(2,43,68,0.18),0 0 40px rgba(237,131,55,0.06); border:1px solid rgba(237,131,55,0.18); text-align:center; }
        .ap2-form-eyebrow { display:inline-flex; align-items:center; gap:8px; font-family:'Poppins',sans-serif; font-size:0.6rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#ed8337; margin-bottom:0.8rem; }
        .ap2-form-eyebrow-line { width:22px; height:1px; background:#ed8337; }
        .ap2-form-title { font-family:'Poppins',sans-serif; font-size:1.7rem; font-weight:800; color:#fff; line-height:1.15; margin-bottom:2.4rem; }
        .ap2-form-title span { color:#ed8337; }
        .ap2-fl-row { display:grid; grid-template-columns:1fr 1fr; gap:0.85rem; }
        .ap2-fl-group { position:relative; margin-bottom:1rem; }
        .ap2-fl-label { display:block; font-family:'Poppins',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:#ed8337; margin-bottom:0.4rem; text-align:start; }
        .ap2-fl-input, .ap2-fl-textarea { width:100%; padding:0.82rem 1rem 0.82rem 2.6rem; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; font-family:'DM Sans',sans-serif; font-size:0.88rem; color:#fff; background:rgba(255,255,255,0.04); outline:none; transition:all 0.22s; }
        .ap2-fl-input::placeholder, .ap2-fl-textarea::placeholder { color:rgba(255,255,255,0.3); }
        .ap2-fl-input:focus, .ap2-fl-textarea:focus { border-color:#ed8337; background:rgba(237,131,55,0.06); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .ap2-fl-icon { position:absolute; left:0.85rem; top:50%; transform:translateY(-50%); font-size:0.95rem; opacity:0.5; pointer-events:none; }
        .ap2-fl-textarea { min-height:88px; resize:none; padding-top:0.82rem; padding-left:2.6rem; }
        .ap2-phone-row { display:flex; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; overflow:hidden; background:rgba(255,255,255,0.04); transition:all 0.22s; }
        .ap2-phone-row:focus-within { border-color:#ed8337; box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .ap2-phone-flag { display:flex; align-items:center; gap:0.3rem; padding:0 0.85rem; font-size:0.82rem; font-weight:700; color:#fff; border-right:1.5px solid rgba(237,131,55,0.2); white-space:nowrap; background:rgba(237,131,55,0.08); flex-shrink:0; }
        .ap2-phone-row .ap2-fl-input { border:none; border-radius:0; background:transparent; box-shadow:none; padding:0.82rem 1rem; }
        .ap2-submit { width:100%; background:linear-gradient(135deg,#ed8337,#f5a66b); color:#fff; border:none; padding:1rem 1.5rem; border-radius:12px; font-family:'Poppins',sans-serif; font-size:0.97rem; font-weight:600; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:0.6rem; transition:all 0.2s; }
        .ap2-submit:hover { transform:translateY(-2px); box-shadow:0 12px 36px rgba(237,131,55,0.5); }
        .ap2-submit-arrow { display:inline-flex; align-items:center; justify-content:center; width:24px; height:24px; border-radius:50%; background:rgba(2,43,68,0.25); font-size:0.9rem; }
        @media(max-width:900px){ .ap2-inner{grid-template-columns:1fr !important; gap:2rem;} .ap2-form-wrap{max-width:100% !important;} }
        @media(max-width:480px){ .ap2-fl-row{grid-template-columns:1fr !important;} .ap2-form-card{padding:2rem 1.4rem !important;} }
      `}</style>

      <div className="ap2-inner">
        {/* LEFT */}
        <div>
             <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Approach in</div>
          </div>
          <h2 className="ap2-heading">What is  <span><i>SterloCare</i> </span></h2>
          <p className="ap2-intro">
SterloCare is a comprehensive healthcare software platform designed to digitize patient experience, enhance quality compliance, and optimize operational efficiency. Built on a low-code framework, it integrates seamlessly with existing Hospital Information Systems (HIS) and provides modular solutions for patient engagement, audit management, compliance tracking, and performance monitoring.
          </p>
          <p className="ap2-intro">
The platform enables hospitals and healthcare networks to deliver standardized, data-driven, and patient-centric services, aligning care delivery with accreditation standards such as NABH and JCI. PCS implements SterloCare to help healthcare providers automate workflows, manage compliance, and improve outcomes—bridging the gap between technology, quality, and patient satisfaction
          </p>
          <p className="ap2-intro" style={{ color:"rgba(2,43,68,0.45)", fontStyle:"italic" }}>
            Precise. Proven. Profitable. Built for long-term dominance.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="ap2-form-wrap">
          <div className="ap2-form-card">
            <div className="ap2-form-eyebrow">
              <span className="ap2-form-eyebrow-line" />Your Growth, Our Mission<span className="ap2-form-eyebrow-line" />
            </div>
            <div className="ap2-form-title">Get Your <span>Free</span> SEO Audit</div>
            <form onSubmit={sendEmail}>
              <div className="ap2-fl-row">
                <div className="ap2-fl-group">
                  <label className="ap2-fl-label">Your Name</label>
                  <div style={{ position:"relative" }}>
                    <span className="ap2-fl-icon">👤</span>
                    <input className="ap2-fl-input" type="text" name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
                  </div>
                </div>
                <div className="ap2-fl-group">
                  <label className="ap2-fl-label">Company</label>
                  <div style={{ position:"relative" }}>
                    <span className="ap2-fl-icon">🏢</span>
                    <input className="ap2-fl-input" type="text" name="company" placeholder="Company name" value={form.company} onChange={handleChange} />
                  </div>
                </div>
              </div>
              <div className="ap2-fl-group">
                <label className="ap2-fl-label">Email Address</label>
                <div style={{ position:"relative" }}>
                  <span className="ap2-fl-icon">✉️</span>
                  <input className="ap2-fl-input" type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="ap2-fl-group">
                <label className="ap2-fl-label">Mobile Number</label>
                <div className="ap2-phone-row">
                  <div className="ap2-phone-flag"><span>📞</span></div>
                  <input className="ap2-fl-input" type="tel" name="phone" placeholder="Mobile number" value={form.phone} onChange={handleChange} maxLength="10" pattern="[0-9]{10}" required />
                </div>
              </div>
              <div className="ap2-fl-group">
                <label className="ap2-fl-label">Message</label>
                <div style={{ position:"relative" }}>
                  <span className="ap2-fl-icon" style={{ top:"0.9rem", transform:"none" }}>💬</span>
                  <textarea className="ap2-fl-textarea" name="msg" placeholder="Tell us about your SEO goals..." value={form.msg} onChange={handleChange} />
                </div>
              </div>
              <button type="submit" className="ap2-submit">
                Get Free SEO Audit <span className="ap2-submit-arrow">›</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2.5 — WHY CHOOSE MICROSOFT APPS
═══════════════════════════════════════════ */
const WHY_CHOOSE_FEATURES = [
  {
    icon: (
      <img src="/img/icon/sterlo-care-workflow.webp" alt="Healthcare Domain Expertise" width="26" height="26" />
    ),
    title: "Workflow Automation",
    desc: "SterloCare automates key healthcare processes such as patient records management, appointment scheduling, billing, and reporting.",
  },
  {
    icon: (
      <img src="/img/icon/sterlo-care-data-driven.webp" alt="Customized Digital Solutions" width="26" height="26" />
    ),
    title: "Data-Driven Insights",
    desc: "SterloCare leverages analytics to turn hospital and clinic data into actionable insights.",
  },

];

function WhyChooseSection() {
  return (
    <section style={{
      background: "#ffffff",
      padding: "2.5rem 6% 7rem",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        .wc2-inner { max-width:1310px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:5rem; align-items:center; }
        .wc2-eyebrow { font-family:'Poppins',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#ed8337; margin-bottom:0.9rem; }
        .wc2-heading { font-family:'Poppins',sans-serif; font-size:clamp(1.8rem,2.7vw,2.39rem); font-weight:600; line-height:1.12; color:#1a1a1a; margin-bottom:1rem; }
        .wc2-desc { font-size:0.96rem; line-height:1.82; color:rgba(30,30,30,0.62); margin-bottom:2rem; }
        .wc2-features { display:flex; flex-direction:column; gap:1.6rem; }
        .wc2-feat { display:flex; gap:1rem; align-items:flex-start; }
        .wc2-feat-icon { flex-shrink:0; width:44px; height:44px; border-radius:10px; border:1.5px solid rgba(237,131,55,0.35); display:flex; align-items:center; justify-content:center; color:#ed8337; background:#fff9f5; }
        .wc2-feat-body { display:flex; flex-direction:column; }
        .wc2-feat-title { font-family:'Poppins',sans-serif; font-size:0.97rem; font-weight:700; color:#1a1a1a; margin-bottom:0.28rem; }
        .wc2-feat-desc { font-size:0.875rem; line-height:1.72; color:rgba(30,30,30,0.58); font-family:'poppins',sans-serif; }
        .wc2-divider { width:1px; background:rgba(237,131,55,0.18); align-self:stretch; margin:0.1rem 0; }

        .wc2-right { position:relative; display:flex; align-items:center; justify-content:center; }
        .wc2-img-bg { position:absolute; width:380px; height:380px; border-radius:50%; background:radial-gradient(circle,#fff5ed 0%,#fff9f4 50%,transparent 75%); }
        .wc2-img { width:86%; object-fit:contain; position:relative; z-index:2; }

        @media(max-width:900px){
          .wc2-inner { grid-template-columns:1fr !important; gap:2.5rem !important; }
          .wc2-right { order:-1; }
          .wc2-img-bg { width:260px; height:260px; }
        }
      `}</style>

      <div className="wc2-inner">
        {/* LEFT — text + inline features */}
        <div>
    <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Why choose SterloCare </div>
          </div>          <h2 className="wc2-heading">
Smart Digital Healthcare Solutions
      </h2>
          <p className="wc2-desc">
SterloCare improves patient experience, operational efficiency, and regulatory compliance.
          </p>

          <div className="wc2-features">
            {WHY_CHOOSE_FEATURES.map((feat, i) => (
              <div key={i} className="wc2-feat" style={{ animation:`fadeUp 0.5s ${i*0.1}s ease both` }}>
                <div className="wc2-feat-icon">{feat.icon}</div>
                {i < WHY_CHOOSE_FEATURES.length - 1 && <div className="wc2-divider" style={{ display:"none" }} />}
                <div className="wc2-feat-body">
                  <div className="wc2-feat-title">{feat.title}</div>
                  <div className="wc2-feat-desc">{feat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — illustration */}
        <div className="wc2-right">
          <div className="wc2-img-bg" />
          <img
            src="/img/why-choose-sterlocare.webp"
            alt="Why Choose Microsoft Apps"
            className="wc2-img"
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 3 — SEO SERVICES (6 HOVER CARDS)
   Default: Icon + Heading only
   Hover: Icon floats to top card, content appears
═══════════════════════════════════════════ */
const SEO_SERVICES = [
  {
    icon: (
      <img src="/img/icon/sterlo-care-system-deployment.webp" alt="Patient Management" width="32" height="32" />
    ),
    heading: "System Deployment",
    content: "End-to-end SterloCare setup for seamless healthcare operations.",
    tag: "Foundation",
  },
  {
    icon: (
      <img src="/img/icon/sterlo-care-workflow-customize.webp" alt="Clinical Workflows" width="32" height="32" />
    ),
    heading: "Workflow Customization",
    content: "Automates workflows to enhance accuracy and efficiency",
    tag: "On-Site",
  },
  {
    icon: (
      <img src="/img/icon/sterlo-care-data-integration.webp" alt="Billing & Finance" width="32" height="32" />
    ),
    heading: "Data Integration",
    content: "Connect SterloCare with HIS and third-party systems.",
    tag: "Infrastructure",
  },
  {
    icon: (
      <img src="/img/icon/sterlo-care-legacy-migration.webp" alt="Compliance Tools" width="32" height="32" />
    ),
    heading: "Legacy Migration",
    content: "Shift existing hospital data securely with zero downtime.",
    tag: "Authority",
  },
  {
    icon: (
      <img src="/img/icon/sterlo-care-support.webp" alt="Analytics & Reports" width="32" height="32" />
    ),
    heading: "Continuous Support",
    content: "Provide maintenance, updates, and system performance optimization.",
    tag: "Local",
  },
  {
    icon: (
      <img src="/img/icon/sterlo-care-staff-traning.webp" alt="Integration Support" width="32" height="32" />
    ),
    heading: "Staff Training",
    content: "Empower healthcare teams to utilize SterloCare effectively.",
    tag: "Reporting",
  },
];

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered ? "#ffffff" : "#0d3f60",
        border: hovered ? "2px solid #ed8337" : "2px solid rgba(237,131,55,0.18)",
        borderRadius: "18px",
        padding: "0",
        overflow: "visible",
        cursor: "pointer",
        transition: "background 0.35s, border-color 0.35s, transform 0.3s, box-shadow 0.35s",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 60px rgba(237,131,55,0.18), 0 4px 24px rgba(2,43,68,0.12)" : "0 4px 24px rgba(0,0,0,0.3)",
        minHeight: "220px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: hovered ? "64px" : "0",
        paddingBottom: "2rem",
        paddingLeft: "1.8rem",
        paddingRight: "1.8rem",
        animation: `fadeUp 0.6s ${index * 0.1}s ease both`,
      }}
    >

      {/* Icon — floats to top on hover */}
      <div style={{
        position: hovered ? "absolute" : "relative",
        top: hovered ? "-28px" : "auto",
        left: hovered ? "50%" : "auto",
        transform: hovered ? "translateX(-50%)" : "none",
        width: "56px",
        height: "56px",
        borderRadius: "14px",
        background: hovered ? "linear-gradient(135deg,#ed8337,#f5a66b)" : "linear-gradient(135deg,#ed8337,#f5a66b)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: hovered ? "0 8px 28px rgba(237,131,55,0.45)" : "0 4px 18px rgba(237,131,55,0.3)",
        color: "#fff",
        flexShrink: 0,
        marginBottom: hovered ? "0" : "1.2rem",
        transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
        zIndex: 10,
      }}>
        <div style={{ width:"32px", height:"32px" }}>{service.icon}</div>
      </div>

      {/* Tag pill */}
      {hovered && (
        <div style={{
          background: "rgba(237,131,55,0.1)",
          color: "#ed8337",
          fontSize: "0.6rem",
          fontWeight: "700",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          padding: "0.25rem 0.8rem",
          borderRadius: "50px",
          marginBottom: "0.8rem",
          fontFamily: "'Poppins',sans-serif",
          border: "1px solid rgba(237,131,55,0.25)",
          animation: "fadeIn 0.25s ease",
        }}>
          {service.tag}
        </div>
      )}

      {/* Heading */}
      <h3 style={{
        fontFamily: "'Poppins',sans-serif",
        fontSize: "1.1rem",
        fontWeight: "700",
        color: hovered ? "#ed8337" : "#fff",
        textAlign: "center",
        marginBottom: hovered ? "0.8rem" : "0",
        transition: "color 0.3s, margin 0.3s",
      }}>
        {service.heading}
      </h3>

      {/* Content — visible on hover, dark text on white bg */}
      <p style={{
        fontFamily: "'DM Sans',sans-serif",
        fontSize: "0.88rem",
        lineHeight: "1.7",
        color: "rgba(2,43,68,0.7)",
        textAlign: "center",
        maxHeight: hovered ? "200px" : "0",
        overflow: "hidden",
        opacity: hovered ? 1 : 0,
        transition: "max-height 0.4s ease, opacity 0.35s ease 0.05s",
      }}>
        {service.content}
      </p>
    </div>
  );
}

function SEOServicesSection() {
  return (
    <section style={{
      background: "linear-gradient(180deg,#004168 0%,#0a3652 100%)",
      padding: "5rem 6% 6rem",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        .seo-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        @media(max-width:900px){ .seo-services-grid{ grid-template-columns:1fr 1fr !important; } }
        @media(max-width:600px){ .seo-services-grid{ grid-template-columns:1fr !important; } }
      `}</style>

      {/* Background decorative elements */}
      <div style={{ position:"absolute", width:"500px", height:"500px", borderRadius:"50%", background:"radial-gradient(circle,rgba(237,131,55,0.04) 0%,transparent 70%)", top:"-100px", right:"-100px", pointerEvents:"none" }} />
      <div style={{ position:"absolute", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle,rgba(17,34,64,0.6) 0%,transparent 70%)", bottom:"-80px", left:"-80px", pointerEvents:"none" }} />

      {/* Header */}
      <div style={{ textAlign:"center", marginBottom:"4rem", position:"relative", zIndex:2 }}>
            <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Services</div>
          </div>
        <h2 style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.9rem,2.8vw,2.6rem)", fontWeight:"700", color:"#fff", lineHeight:"1.15" }}>
          Comprehensive  <span style={{ color:"#ed8337" }}><i>Healthcare Digitization</i></span> Solutions
        </h2>

      </div>

      {/* Cards Grid */}
      <div className="seo-services-grid" style={{ position:"relative", zIndex:2 }}>
        {SEO_SERVICES.map((service, i) => (
          <ServiceCard key={i} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 4 — PROCESS (White Background)
═══════════════════════════════════════════ */
const PROCESS_STEPS = [
  {
    num: "01",
    icon: (
      <img src="/img/icon/sterlo-care-discovery.webp" alt="Discovery" width="28" height="28" />
    ),
    title: "Discovery & Analysis",
    desc: "We start by analyzing hospital and clinic workflows, patient management systems, and compliance requirements. This step helps us identify inefficiencies, automation opportunities, and integration needs to design healthcare solutions that improve operational efficiency and patient care quality.",
  },
  {
    num: "02",
    icon: (
      <img src="/img/icon/sterlo-care-plannning.webp" alt="Planning" width="28" height="28" />
    ),
    title: "Planning & Design",
    desc: "In this phase, we create a strategic plan tailored to healthcare operations. We map workflows, define application modules, and design solutions that align with patient care processes, regulatory requirements, and operational objectives, ensuring that the system supports both current and future needs.",
  },
  {
    num: "03",
    icon: (
      <img src="/img/icon/sterlo-care-implementation.webp" alt="Development" width="28" height="28" />
    ),
    title: "Implementation & Customization",
    desc: "Our team deploys SterloCare modules and customizes workflows to fit your hospital specific operations. This includes automating appointment scheduling, billing, reporting, and other critical processes to enhance efficiency and streamline day-to-day activities.",
  },
  {
    num: "04",
    icon: (
      <img src="/img/icon/sterlo-care-testing.webp" alt="Testing" width="28" height="28" />
    ),
    title: "Testing & Go-Live",
    desc: "Before full deployment, we rigorously test all modules and integrations to ensure secure, accurate, and efficient operation. This step guarantees a smooth go-live process with minimal disruption to hospital operations and uninterrupted patient services.",
  },
  {
    num: "05",
    icon: (
      <img src="/img/icon/sterlo-care-optimize.webp" alt="Training" width="28" height="28" />
    ),
    title: "Ongoing Support & Optimization",
    desc: "After deployment, we provide continuous support, updates, and staff training. Our team monitors system performance, optimizes workflows, and implements improvements to ensure long-term efficiency, compliance, and enhanced patient care outcomes.",
  },
  
];

function ProcessSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(0);
  const active = PROCESS_STEPS[activeTab];

  return (
    <section style={{ background:"#ffffff", padding:"5rem 6%", position:"relative", overflow:"hidden" }}>
      <style>{`
        /* ── Vertical Tab Layout (Desktop) ── */
        .proc-outer { max-width:1180px; margin:0 auto; display:grid; grid-template-columns:260px 1fr; gap:0; align-items:stretch; border-radius:20px; overflow:hidden; box-shadow:0 12px 50px rgba(2,43,68,0.10); border:1.5px solid rgba(2,43,68,0.07); }

        .proc-vtab-col { background:#f4f6fa; display:flex; flex-direction:column; border-right:1.5px solid rgba(2,43,68,0.07); }
        .proc-vtab-header { padding:1.8rem 1.6rem 1.2rem; border-bottom:1.5px solid rgba(2,43,68,0.07); }
        .proc-vtab-label { font-family:'Poppins',sans-serif; font-size:0.6rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#ed8337; margin-bottom:0.3rem; }
        .proc-vtab-title { font-family:'Poppins',sans-serif; font-size:1rem; font-weight:700; color:#004168; line-height:1.25; }

        .proc-vtab-item { position:relative; display:flex; align-items:center; gap:0.85rem; padding:1.1rem 1.6rem; cursor:pointer; border:none; background:transparent; text-align:left; width:100%; transition:all 0.22s; border-bottom:1px solid rgba(2,43,68,0.06); }
        .proc-vtab-item:last-child { border-bottom:none; }
        .proc-vtab-item.active { background:#004168; }
        .proc-vtab-item:hover:not(.active) { background:rgba(2,43,68,0.05); }
        .proc-vtab-item.active::after { content:''; position:absolute; right:-12px; top:50%; transform:translateY(-50%); width:0; height:0; border-top:12px solid transparent; border-bottom:12px solid transparent; border-left:12px solid #004168; z-index:10; }

        .proc-vtab-icon-wrap { width:42px; height:42px; border-radius:10px; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:all 0.22s; }
        .proc-vtab-item.active .proc-vtab-icon-wrap { background:rgba(237,131,55,0.18); }
        .proc-vtab-item:not(.active) .proc-vtab-icon-wrap { background:rgba(2,43,68,0.07); }
        .proc-vtab-num { font-family:'Poppins',sans-serif; font-size:0.6rem; font-weight:700; letter-spacing:0.1em; transition:color 0.22s; }
        .proc-vtab-item.active .proc-vtab-num { color:rgba(255,255,255,0.4); }
        .proc-vtab-item:not(.active) .proc-vtab-num { color:rgba(2,43,68,0.3); }
        .proc-vtab-name { font-family:'Poppins',sans-serif; font-size:0.82rem; font-weight:600; line-height:1.3; transition:color 0.22s; }
        .proc-vtab-item.active .proc-vtab-name { color:#ffffff; }
        .proc-vtab-item:not(.active) .proc-vtab-name { color:#004168; }

        .proc-content-panel { background:#ffffff; display:grid; grid-template-columns:1fr; align-items:center; gap:3.5rem; padding:3.5rem 3.5rem; }
        .proc-big-num { font-family:'Poppins',sans-serif; font-size:6rem; font-weight:900; color:rgba(2,43,68,0.04); line-height:1; margin-bottom:-1.5rem; }
        .proc-content-title { font-family:'Poppins',sans-serif; font-size:clamp(1.5rem,2.2vw,2rem); font-weight:700; color:#004168; line-height:1.2; margin-bottom:0.9rem; }
        .proc-content-title em { color:#ed8337; font-style:normal; }
        .proc-content-desc { font-size:0.97rem; line-height:1.85; color:rgba(2,43,68,0.62); margin-bottom:1.8rem; }
        .proc-content-tag { display:inline-flex; align-items:center; gap:0.5rem; background:#fff5f5; border:1.5px solid rgba(237,131,55,0.2); color:#ed8337; font-family:'Poppins',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; padding:0.38rem 0.9rem; border-radius:50px; }
        .proc-content-dot { width:6px; height:6px; border-radius:50%; background:#ed8337; }

        /* ── Mobile Accordion ── */
        .proc-mobile-accordion { display:none; max-width:1180px; margin:0 auto; display:none; flex-direction:column; gap:0.75rem; }

        .proc-acc-card { border-radius:14px; overflow:hidden; border:1.5px solid rgba(2,43,68,0.09); box-shadow:0 4px 20px rgba(2,43,68,0.06); transition:box-shadow 0.22s; }
        .proc-acc-card.open { box-shadow:0 8px 32px rgba(2,43,68,0.13); border-color:rgba(237,131,55,0.35); }

        .proc-acc-header { display:flex; align-items:center; gap:1rem; padding:1.1rem 1.4rem; cursor:pointer; background:#f4f6fa; transition:background 0.22s; border:none; width:100%; text-align:left; }
        .proc-acc-card.open .proc-acc-header { background:#004168; }

        .proc-acc-icon-wrap { width:40px; height:40px; border-radius:10px; display:flex; align-items:center; justify-content:center; flex-shrink:0; background:rgba(2,43,68,0.07); transition:all 0.22s; }
        .proc-acc-card.open .proc-acc-icon-wrap { background:rgba(237,131,55,0.18); }

        .proc-acc-meta { flex:1; }
        .proc-acc-num { font-family:'Poppins',sans-serif; font-size:0.58rem; font-weight:700; letter-spacing:0.1em; color:rgba(2,43,68,0.3); }
        .proc-acc-card.open .proc-acc-num { color:rgba(255,255,255,0.4); }
        .proc-acc-title { font-family:'Poppins',sans-serif; font-size:0.88rem; font-weight:600; color:#004168; line-height:1.3; }
        .proc-acc-card.open .proc-acc-title { color:#ffffff; }

        .proc-acc-chevron { width:28px; height:28px; border-radius:50%; background:rgba(2,43,68,0.07); display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:transform 0.3s, background 0.22s; font-size:0.85rem; color:#004168; }
        .proc-acc-card.open .proc-acc-chevron { transform:rotate(180deg); background:rgba(237,131,55,0.2); color:#ed8337; }

        .proc-acc-body { background:#ffffff; overflow:hidden; max-height:0; transition:max-height 0.4s ease, padding 0.3s ease; padding:0 1.4rem; }
        .proc-acc-card.open .proc-acc-body { max-height:300px; padding:1.4rem; }

        .proc-acc-body-num { font-family:'Poppins',sans-serif; font-size:3.5rem; font-weight:900; color:rgba(2,43,68,0.04); line-height:1; margin-bottom:-0.6rem; }
        .proc-acc-body-desc { font-size:0.92rem; line-height:1.82; color:rgba(2,43,68,0.65); margin-bottom:1rem; }
        .proc-acc-body-tag { display:inline-flex; align-items:center; gap:0.45rem; background:#fff5f5; border:1.5px solid rgba(237,131,55,0.2); color:#ed8337; font-family:'Poppins',sans-serif; font-size:0.6rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; padding:0.32rem 0.8rem; border-radius:50px; }
        .proc-acc-dot { width:5px; height:5px; border-radius:50%; background:#ed8337; }

        /* Show/hide based on viewport */
        @media(min-width:961px){
          .proc-outer { display:grid !important; }
          .proc-mobile-accordion { display:none !important; }
        }
        @media(max-width:960px){
          .proc-outer { display:none !important; }
          .proc-mobile-accordion { display:flex !important; }
        }
      `}</style>

      {/* Section Header */}
      <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
        <div className="partners-header1">
          <div className="partners-eyebrow" style={{ marginBottom:'20px', textAlign:'start' }}>Our Process</div>
        </div>
        <h2 style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.9rem,2.8vw,2.6rem)", fontWeight:"700", color:"#000000", lineHeight:"1.15" }}>
          Seamless   <span style={{ color:"#ed8337" }}><i>Healthcare Digital </i> </span>  Transformation
        </h2>
        <p style={{ marginTop:"0.8rem", color:"rgba(0, 0, 0, 0.86)", fontSize:"0.97rem",margin:"0.8rem auto 0", lineHeight:"1.8" }}>
Our SterloCare Implementation Process handles every phase — from assessment to deployment — with precision, transparency, and efficiency, delivering scalable, integrated healthcare applications tailored to hospitals, clinics, and patient care workflows.


        </p>
      </div>

      {/* ── DESKTOP: Left vertical tabs + Right content ── */}
      <div className="proc-outer">
        <div className="proc-vtab-col">
     
          {PROCESS_STEPS.map((step, i) => (
            <button
              key={i}
              className={`proc-vtab-item${activeTab === i ? " active" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              <div className="proc-vtab-icon-wrap">{step.icon}</div>
              <div>
                <div className="proc-vtab-num">{step.num}</div>
                <div className="proc-vtab-name">{step.title}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="proc-content-panel">
          <div>
            <div className="proc-big-num">{active.num}</div>
            <h3 className="proc-content-title">
              {active.title.split(" ").slice(0,1).join(" ")}{" "}
              <em>{active.title.split(" ").slice(1).join(" ")}</em>
            </h3>
            <p className="proc-content-desc">{active.desc}</p>
            <div className="proc-content-tag">
              <div className="proc-content-dot" />
              Step {active.num}
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE: Accordion cards one by one ── */}
      <div className="proc-mobile-accordion">
        {PROCESS_STEPS.map((step, i) => (
          <div key={i} className={`proc-acc-card${mobileOpen === i ? " open" : ""}`}>
            <button
              className="proc-acc-header"
              onClick={() => setMobileOpen(mobileOpen === i ? -1 : i)}
            >
              <div className="proc-acc-icon-wrap">{step.icon}</div>
              <div className="proc-acc-meta">
                <div className="proc-acc-num">{step.num}</div>
                <div className="proc-acc-title">{step.title}</div>
              </div>
              <div className="proc-acc-chevron">▼</div>
            </button>
            <div className="proc-acc-body">
              <div className="proc-acc-body-num">{step.num}</div>
              <p className="proc-acc-body-desc">{step.desc}</p>
              <div className="proc-acc-body-tag">
                <div className="proc-acc-dot" />
                Step {step.num}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 5 — GET STARTED TODAY (Navy Blue)
   Matches the Microsoft reference design
═══════════════════════════════════════════ */
const GET_STARTED_CARDS = [
  {
    num: "01",
    icon: (
      <img src="/img/icon/sterlo-care-healthcare.webp" alt="Healthcare Domain Expertise" width="24" height="24" />
    ),
    title: "Healthcare Domain Expertise",
    desc: "In-depth understanding of hospital workflows, quality frameworks, and accreditation standards.",
  },
  {
    num: "02",
    icon: (
      <img src="/img/icon/sterlo-care-digital-solution.webp" alt="Customized Digital Solutions" width="24" height="24" />
    ),
    title: "Customized Digital Solutions",
    desc: "Tailored modules designed for inpatient, outpatient, and administrative operations.",
  },
  {
    num: "03",
    icon: (
      <img src="/img/icon/sterlo-care-end-support.webp" alt="End-to-End Support" width="24" height="24" />
    ),
    title: "End-to-End Support",
    desc: "From strategy and setup to optimization and post-deployment training.",
  },
  {
    num: "04",
    icon: (
      <img src="/img/icon/sterlo-care-secure.webp" alt="Secure Scalable Platform" width="24" height="24" />
    ),
    title: "Secure, Scalable Platform",
    desc: "Future-ready, compliant, and integrates with existing hospital systems.",
  },
];

function GetStartedSection() {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section style={{ background:"linear-gradient(135deg,#022b44 0%,#004168 55%,#0a3652 100%)", padding:"6rem 6%", position:"relative", overflow:"hidden" }}>
      {/* subtle bg orb */}
      <div style={{ position:"absolute", width:"600px", height:"600px", borderRadius:"50%", background:"radial-gradient(circle,rgba(237,131,55,0.06) 0%,transparent 65%)", top:"-150px", right:"-100px", pointerEvents:"none" }} />
      <div style={{ position:"absolute", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle,rgba(237,131,55,0.04) 0%,transparent 65%)", bottom:"-100px", left:"-80px", pointerEvents:"none" }} />

      <style>{`
        /* ── Get Started Section ── */
        .gs2-eyebrow { font-family:'Poppins',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#ed8337; text-align:center; margin-bottom:1.1rem; }

        .gs2-main-title { font-family:'Poppins',sans-serif; font-size:clamp(2.4rem,4.5vw,3rem); font-weight:600; color:#ffffff; text-align:center; line-height:1.08; margin-bottom:1.2rem; }
        .gs2-title-accent { color:#ed8337;  text-decoration-color:#ed8337; }

        .gs2-sub { font-size:0.97rem; line-height:1.8; color:rgb(255, 255, 255); text-align:center;  margin:0 auto 3.5rem; }

        /* Unified card container */
        .gs2-cards-wrap { max-width:1180px; margin:0 auto; display:grid; grid-template-columns:repeat(4,1fr); border:1.5px solid rgba(237,131,55,0.3); border-radius:20px; overflow:hidden; box-shadow:0 8px 50px rgba(0,0,0,0.25); position:relative; z-index:2; }

        /* Each card — white bg */
        .gs2-card { position:relative; padding:2.4rem 2rem 2.2rem; background:#ffffff; border-right:1.5px solid rgba(237,131,55,0.2); transition:background 0.25s, box-shadow 0.25s; cursor:pointer; }
        .gs2-card:last-child { border-right:none; }
        .gs2-card.gs2-active { background:#fff9f4; }

        /* Top active indicator bar — orange */
        .gs2-card-bar { position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg,#ed8337,#f5a66b); transform:scaleX(0); transform-origin:left; transition:transform 0.3s ease; }
        .gs2-card.gs2-active .gs2-card-bar { transform:scaleX(1); }

        /* Ghost number — faint navy */
        .gs2-card-num { font-family:'Poppins',sans-serif; font-size:3.5rem; font-weight:900; color:rgba(2,43,68,0.06); line-height:1; position:absolute; top:1.2rem; right:1.4rem; user-select:none; }

        /* Icon box */
        .gs2-icon-box { width:48px; height:48px; border-radius:12px; background:#f5f7fa; border:1.5px solid rgba(237,131,55,0.2); display:flex; align-items:center; justify-content:center; margin-bottom:1.4rem; color:rgba(2,43,68,0.45); transition:all 0.25s; }
        .gs2-card.gs2-active .gs2-icon-box { background:linear-gradient(135deg, #ed833700, #f5a66b00); border-color:#ed8337; color:#ffffff; box-shadow:0 4px 16px rgba(237,131,55,0.35); }

        /* Title */
        .gs2-card-title { font-family:'Poppins',sans-serif; font-size:0.97rem; font-weight:700; color:#004168; margin-bottom:0.75rem; line-height:1.3; }
        .gs2-card.gs2-active .gs2-card-title { color:#ed8337; }

        /* Desc */
        .gs2-card-desc { font-size:0.85rem; line-height:1.72; color:rgb(0, 0, 0); font-family: 'poppins',sans-serif; }

        @media(max-width:960px){ .gs2-cards-wrap{ grid-template-columns:1fr 1fr !important; } .gs2-card{ border-bottom:1.5px solid rgba(237,131,55,0.15); } .gs2-card:nth-child(even){ border-right:none; } }
        @media(max-width:540px){ .gs2-cards-wrap{ grid-template-columns:1fr !important; } .gs2-card{ border-right:none; } }
      `}</style>

      {/* Header */}
      <div style={{ position:"relative", zIndex:2 }}>
      <div className="partners-header1" style={{textAlign: 'center'}}>
            <div className="partners-eyebrow" style={{ marginBottom: '20px' }}>SterloCare Partner</div>
          </div>      <h2 className="gs2-main-title">
        
        Why PCS for <span className="gs2-title-accent"><i>SterloCare  </i></span> Partner
      </h2>
      <p className="gs2-sub">
As a SterloCare Implementation Partner, PCS ensures that healthcare organizations gain measurable improvements in patient engagement, compliance, and performance
      </p>
      </div>

      {/* Unified 4-card container */}
      <div className="gs2-cards-wrap">
        {GET_STARTED_CARDS.map((card, i) => (
          <div
            key={i}
            className={`gs2-card${activeCard === i ? " gs2-active" : ""}`}
            onMouseEnter={() => setActiveCard(i)}
          >
            <div className="gs2-card-bar" />
            <div className="gs2-card-num">{card.num}</div>
            <div className="gs2-icon-box">{card.icon}</div>
            <div className="gs2-card-title">{card.title}</div>
            <div className="gs2-card-desc">{card.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   BLOG CTA WRAPPER (Navy Blue theme wrap)
═══════════════════════════════════════════ */
function BlogCTAWrapper() {
  return (
    <div >
      <BlogSection />
    </div>
  );
}

/* ═══════════════════════════════════════════
   ROOT EXPORT
═══════════════════════════════════════════ */
export default function SEOServicePage() {
  return (
    <Layout>
      <HeroSection />
      <ApproachSection />
      <WhyChooseSection />
      <SEOServicesSection />
      <ProcessSection />
      <GetStartedSection />
      <BlogCTAWrapper />
      <CTASection />
    </Layout>
  );
}