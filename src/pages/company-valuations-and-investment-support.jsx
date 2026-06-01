import { useState } from "react";
import CTASection from "../components/HomePage/CTA";
import Link from '@docusaurus/Link';
const banner = "/img/inversment.png";
import emailjs from "@emailjs/browser";
import Layout from '@theme/Layout';
/* ═══════════════════════════════
   SECTION 1 — HERO BANNER
═══════════════════════════════ */
/* ═══════════════════════════════
   SECTION 1 — HERO BANNER
═══════════════════════════════ */
function HeroSection() {
  return (
      <section className="hero" id="hero">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

/* ══════════════════════════════════════════
   HERO — BRC Standard Layout
══════════════════════════════════════════ */
:root {
  --navy:      #004168;
  --navy-deep: #011a2a;
  --navy-mid:  #0a3652;
  --orange:    #ed8337;
  --orange-l:  #f5a66b;
  --dim:       rgba(255,255,255,0.45);
  --dim2:      rgba(255,255,255,0.5);
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { font-family: 'Poppins', sans-serif; color: #fff; overflow-x: hidden; }

.hero {
  min-height: 100svh;
  display: grid; grid-template-columns: 1fr 1fr;
  align-items: center; gap: 2rem;
  padding: 3rem 6% 4rem;
  position: relative; overflow: hidden;
  background: var(--navy);
}
.hero::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(ellipse 65% 70% at 100% 50%, rgba(237,131,55,0.10) 0%, transparent 60%),
    radial-gradient(ellipse 50% 60% at 0% 100%, rgba(10,66,102,0.5) 0%, transparent 55%);
}
.hero::after {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image: linear-gradient(rgba(237,131,55,0.028) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(237,131,55,0.028) 1px, transparent 1px);
  background-size: 52px 52px;
}

.hero-left { position: relative; z-index: 2; display: flex; flex-direction: column; }

.h-badge {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: rgba(237,131,55,0.1); border: 1px solid rgba(237,131,55,0.28);
  color: var(--orange); font-size: 0.72rem; font-weight: 600;
  padding: 0.38rem 1rem; border-radius: 50px;
  letter-spacing: 0.09em; text-transform: uppercase;
  width: fit-content; animation: fadeUp 0.6s ease both;
}
.badge-dot {
  width: 6px; height: 6px; border-radius: 50%; background: var(--orange);
  animation: pulse-dot 1.6s infinite;
}
@keyframes pulse-dot { 0%,100%{ opacity:1; transform:scale(1); } 50%{ opacity:.4; transform:scale(1.5); } }

.hero-heading {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2.2rem, 3.8vw, 3.3rem);
  font-weight: 600; line-height: 1.15;
  margin-top: 1.4rem; animation: fadeUp 0.7s 0.08s ease both; color: #fff;
}
.hero-heading .hl { color: var(--orange); }
.hero-heading .lined { position: relative; display: inline-block; }
.hero-heading .lined::after {
  content: ''; position: absolute; left: 0; bottom: -3px;
  width: 100%; height: 3px; background: var(--orange); border-radius: 2px;
  transform: scaleX(0); transform-origin: left;
  animation: line-in 0.5s 0.9s ease forwards;
}
/* orange span support */
.hero-heading .orange { color: var(--orange); }
.hero-heading .underline-word { position: relative; display: inline-block; }
.hero-heading .underline-word::after {
  content: ''; position: absolute; left: 0; bottom: -3px;
  width: 100%; height: 3px; background: linear-gradient(90deg,#ed8337,#f5a66b); border-radius: 2px;
  transform: scaleX(0); transform-origin: left;
  animation: line-in 0.55s 1s ease forwards;
}
@keyframes line-in { to { transform: scaleX(1); } }

.hero-sub {
  margin-top: 1.4rem; font-size: 1rem; line-height: 1.78;
  color: rgb(255, 255, 255); max-width: fit-content;
  animation: fadeUp 0.7s 0.16s ease both;
}
.hero-actions { margin-top: 2rem; display: flex; gap: 0.9rem; flex-wrap: wrap; animation: fadeUp 0.7s 0.26s ease both; }
.btn-fill {
  background: var(--orange);
  padding: 0.85rem 2rem; border-radius: 50px;
  font-family: 'Poppins', sans-serif; font-size: 0.92rem; font-weight: 500;
  text-decoration: none; border: none; cursor: pointer; color: #fff;
  box-shadow: 0 4px 22px rgba(237,131,55,0.32);
  display: inline-flex; align-items: center; gap: 0.5rem;
  transition: background 0.22s, transform 0.18s, box-shadow 0.22s;
}
.btn-fill:hover { background: var(--orange-l); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(237,131,55,0.42); }
.btn-arrow {
  display: inline-flex; align-items: center; justify-content: center;
  width: 22px; height: 22px; border-radius: 50%;
  background: rgba(2,43,68,0.3); font-size: 0.85rem;
}
@keyframes fadeUp { from{ opacity:0; transform:translateY(26px); } to{ opacity:1; transform:translateY(0); } }

.hero-right {
  overflow: hidden; width: 100%; height: auto;
  position: relative; z-index: 2;
  display: flex; align-items: center; justify-content: center;
}
img.hero-img { animation: none !important; }
.hero-img {
  width: 100%;
  object-fit: contain;
  display: block;
}

/* ══ TABLET (≤ 960px) ══ */
@media(max-width: 960px) {
  .hero {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    padding: 6rem 5% 4rem;
    min-height: auto;
    text-align: start;
    gap: 2.5rem;
  }
  .hero-left { order: 1; align-items: flex-start;        padding: 3rem 0; }
  .hero-right { width: 100% !important; height: auto !important; order: 2; display: flex; justify-content: center; }
  .hero-img { width: 100%; max-width: 480px; height: auto; }
  .hero-sub { max-width: 90%; }
  .hero-actions { justify-content: flex-start; }
}

/* ══ MOBILE (≤ 600px) ══ */
@media(max-width: 600px) {
  .hero { padding: 5rem 4% 3rem; gap: 2rem; }
  .hero-heading { font-size: clamp(1.7rem, 6vw, 2.2rem) !important; }
  .hero-sub { font-size: 0.9rem; max-width: 100%; }
  .hero-img { max-width: 100%; width: 100%; }
  .h-badge { font-size: 0.65rem; }
}
.menu li { position: relative; cursor: pointer; font-size: 16px; color: black; }

      `}</style>

      {/* LEFT CONTENT */}
      <div className="hero-left">
        <div className="h-badge"><div className="badge-dot" />Certified Valuation Experts</div>
        <h1 className="hero-heading">
          Unlock True Business
          <span className="hl lined">Value with</span> Expert
          Valuation &amp; Investment  
        </h1>
        <p className="hero-sub">
We help you see beyond the balance sheet. At Priyam Consultancy Services, our valuation and investment experts provide accurate, data-backed insights that guide funding, mergers, acquisitions, and growth decisions – empowering you to build sustainable strategies rooted in financial strength, long-term value, and business excellence.
        </p>
        <div className="hero-actions">
          <a className="btn-fill" href="#">Explore More <span className="btn-arrow">›</span></a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-right">
        <img
          src={banner}
          alt="Company Valuation Illustration"
          className="hero-img"
        />
      </div>
    </section>
  );
}


/* ═══════════════════════════════
   SECTION 2 — OUR APPROACH
═══════════════════════════════ */

function ApproachSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    msg: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ EMAIL SEND FUNCTION
  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      company: form.company,
      message: form.msg,

      url: window.location.href,
    };

    emailjs
      .send(
        "service_8xw6k3r",   // 🔴 replace
        "template_jarui36",  // 🔴 replace
        templateParams,
        "XWRnXi4hK2SvmRG3q"    // 🔴 replace
      )
      .then(() => {
        alert("Message Sent Successfully ✅");

        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          msg: ""
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send ❌");
      });
  };

  return (
    <section className="approach" id="approach">
      <style>{`
        .approach { position:relative; padding:4rem 6%; overflow:hidden; }
        .ap-inner { position:relative; z-index:2; margin:0 auto; display:grid; grid-template-columns:1fr 0.7fr; gap:4rem; align-items:center; }
        .ap-heading { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3vw,2.6rem); line-height:1.12; color:#000; margin-bottom:1.2rem; }
        .ap-heading span { color:var(--orange); }
        .ap-intro { font-size:1rem; line-height:1.8; color:#5a6a7a; margin-bottom:2rem; }
        .ap-form-wrap { position:relative; max-width:450px; }
        .ap-form-wrap::before { content:''; position:absolute; inset:-2px; background:linear-gradient(135deg,rgba(237,131,55,0.55),rgba(237,131,55,0.1),rgba(237,131,55,0.55)); border-radius:26px; z-index:0; }
        .ap-form-card { position:relative; z-index:1; background:#004168; border-radius:24px; padding:2.8rem 2.6rem; box-shadow:0 24px 60px rgba(0,0,0,0.5),0 0 40px rgba(237,131,55,0.06); border:1px solid rgba(237,131,55,0.18); text-align:center; }
        .form-card-eyebrow { display:inline-flex; align-items:center; gap:8px; font-family:'Poppins',sans-serif; font-size:0.6rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:var(--orange); margin-bottom:0.8rem; }
        .form-card-eyebrow-line { width:22px; height:1px; background:var(--orange); }
        .form-card-title { font-family:'Poppins',sans-serif; font-size:1.7rem; font-weight:800; color:#fff; line-height:1.15; margin-bottom:2.4rem; }
        .form-card-title span { color:var(--orange); }
        .fl-row { display:grid; grid-template-columns:1fr 1fr; gap:0.85rem; }
        .fl-group { position:relative; margin-bottom:1rem; }
        .fl-label { display:block; font-family:'Poppins',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--orange); margin-bottom:0.4rem; text-align:start; }
        .fl-input,.fl-textarea { width:100%; padding:0.82rem 1rem 0.82rem 2.6rem; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; font-family:'Poppins',sans-serif; font-size:0.88rem; color:#fff; background:rgba(255,255,255,0.04); outline:none; appearance:none; transition:border-color 0.22s,background 0.22s,box-shadow 0.22s; }
        .fl-input::placeholder,.fl-textarea::placeholder { color:rgba(255,255,255,0.3); }
        .fl-input:focus,.fl-textarea:focus { border-color:var(--orange); background:rgba(237,131,55,0.06); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .fl-icon { position:absolute; left:0.85rem; top:50%; transform:translateY(-50%); font-size:0.95rem; opacity:0.5; pointer-events:none; }
        .fl-group.textarea-group .fl-icon { top:0.9rem; transform:none; }
        .fl-textarea { min-height:88px; resize:none; padding-top:0.82rem; padding-left:2.6rem; }
        .phone-row { display:flex; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; overflow:hidden; background:rgba(255,255,255,0.04); transition:border-color 0.22s,box-shadow 0.22s; }
        .phone-row:focus-within { border-color:var(--orange); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .phone-flag { display:flex; align-items:center; gap:0.3rem; padding:0 0.85rem; font-size:0.82rem; font-weight:700; color:#fff; border-right:1.5px solid rgba(237,131,55,0.2); white-space:nowrap; background:rgba(237,131,55,0.08); cursor:default; flex-shrink:0; }
        .phone-flag-icon { font-size:0.9rem; opacity:0.7; }
        .phone-row .fl-input { border:none; border-radius:0; background:transparent; box-shadow:none; padding:0.82rem 1rem; }
        .phone-row .fl-input:focus { box-shadow:none; }
        .ap-submit { width:100%; background:linear-gradient(135deg,#ed8337,#f5a66b); color:#fff; border:none; padding:1rem 1.5rem; border-radius:12px; font-family:'Poppins',sans-serif; font-size:0.97rem; font-weight:500; cursor:pointer; letter-spacing:0.02em; display:flex; align-items:center; justify-content:center; gap:0.6rem; transition:transform 0.2s,box-shadow 0.2s; }
        .ap-submit:hover { transform:translateY(-2px); box-shadow:0 12px 36px rgba(237,131,55,0.5); }
        .ap-submit-arrow { display:inline-flex; align-items:center; justify-content:center; width:24px; height:24px; border-radius:50%; background:rgba(2,43,68,0.25); font-size:0.9rem; }
        @media(max-width:900px){
          .ap-inner { grid-template-columns:1fr !important; gap:2.5rem !important; }
          .ap-form-wrap { max-width:100% !important; width:100% !important; }
          .ap-form-card { padding:2rem 1.4rem !important; }
        }
        @media(max-width:600px){
          .approach { padding:3rem 4% !important; }
          .ap-inner { gap:2rem !important; }
          .fl-row { grid-template-columns:1fr !important; gap:0 !important; }
          .form-card-title { font-size:1.3rem !important; margin-bottom:1.6rem !important; }
          .ap-form-card { padding:1.6rem 1.1rem !important; }
        }
      `}</style>

      <div className="ap-inner">

        {/* LEFT CONTENT */}
        <div className="ap-left">
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Approach in</div>
          </div>
          <h2 className="ap-heading">Company   <span>Valuation and Investment</span> Support</h2>
          <p className="ap-intro">
Your business is more than numbers — it reflects potential, innovation, and performance. We assess every aspect of your organization in detail. This includes revenue models, assets, market position, and risk factors.
          </p>
          <p className="ap-intro">
Our approach provides a complete 360° view of your enterprise value. We ensure every factor influencing growth and valuation is carefully evaluated. This creates a strong foundation for strategic financial decisions.
          </p>
          <p className="ap-intro">
            Beyond valuation, we translate insights into actionable investment strategies. We help identify funding opportunities, evaluate partnerships, and guide growth decisions. This ensures alignment with your long-term business goals.

          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="ap-form-wrap">
          <div className="ap-form-card">
            <div className="form-card-eyebrow">
              <span className="form-card-eyebrow-line" />Your Growth, Our Mission<span className="form-card-eyebrow-line" />
            </div>
            <div className="form-card-title">
              Get Your <span>Free</span> Quote
            </div>

            {/* ✅ FORM START */}
            <form onSubmit={sendEmail}>

              <div className="fl-row">

                <div className="fl-group">
                  <label className="fl-label">Your Name</label>
                  <div style={{ position: "relative" }}>
                    <span className="fl-icon"><img src="/img/icons/form-user.svg" alt="User" width="16" height="16" /></span>
                    <input
                      className="fl-input"
                      type="text"
                      name="name"
                      placeholder="Full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="fl-group">
                  <label className="fl-label">Company</label>
                  <div style={{ position: "relative" }}>
                    <span className="fl-icon"><img src="/img/icons/form-company.svg" alt="Company" width="16" height="16" /></span>
                    <input
                      className="fl-input"
                      type="text"
                      name="company"
                      placeholder="Company name"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

              </div>

              <div className="fl-group">
                <label className="fl-label">Email Address</label>
                <div style={{ position: "relative" }}>
                  <span className="fl-icon"><img src="/img/icons/form-email.svg" alt="Email" width="16" height="16" /></span>
                  <input
                    className="fl-input"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="fl-group">
                <label className="fl-label">Mobile Number</label>
                <div className="phone-row">
                  <div className="phone-flag">
                    <span className="phone-flag-icon"><img src="/img/icons/form-phone.svg" alt="Phone" width="16" height="16" /></span>

                  </div>
                  <input
                    className="fl-input"
                    type="tel"
                    name="phone"
                    placeholder="Mobile number"
                    value={form.phone}
                    onChange={handleChange}
                    maxLength="10"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
              </div>

              <div className="fl-group textarea-group">
                <label className="fl-label">Message</label>
                <div style={{ position: "relative" }}>
                  <span className="fl-icon" style={{ top: "0.9rem", transform: "none" }}><img src="/img/icons/form-message.svg" alt="Message" width="16" height="16" /></span>
                  <textarea
                    className="fl-textarea"
                    name="msg"
                    placeholder="Tell us about your business needs..."
                    value={form.msg}
                    onChange={handleChange}

                  />
                </div>
              </div>

              {/* ✅ SUBMIT BUTTON */}
              <button type="submit" className="ap-submit">
                Get Free Consultation
                <span className="ap-submit-arrow">›</span>
              </button>

            </form>
            {/* ✅ FORM END */}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════
   SECTION 3 — REGISTRATION TYPES
═══════════════════════════════ */
const REG_DATA = [
  { num: "01", tag: "BVFM", label: "Business Valuation & Financial Modeling", title: "Know Your <i>True Worth</i>",desc: ["We begin by understanding your business model, assets, financial statements, and market positioning in detail. This helps identify key value drivers and industry benchmarks. Our approach ensures your valuation is accurate and aligned with real market condition", "By combining financial modeling with data-driven insights, we create a clear picture of your business worth. This supports strategic planning and investor communication. It enables confident financial decisions backed by reliable analysis."] , chips: ["📈 Investor Access", "🏛️ Strong Governance", "📋 Stock Exchange Listed", "✅ Regulatory Compliance"], time: "Avg. 15–25 working days" },
  { num: "02", tag: "IRFS", label: "Investment Readiness & Funding Support", title: "Prepare, <i> Pitch and Prosper.</i>",desc: ["Our experts prepare your business for funding by structuring financials and refining valuation strategies. We ensure your business meets investor expectations and industry standards. This strengthens your position during funding discussions.","From pitch preparation to investor alignment, we support every stage of the process. Our approach improves credibility and presentation. It increases your chances of securing the right funding for growth."] , chips: ["💼 Limited Liability", "🚀 Investor-Ready", "👥 2–200 Shareholders", "📑 Separate Legal Entity"], time: "Avg. 7–12 working days" },
  { num: "03", tag: "MAA", label: "Mergers & Acquisitions Advisory", title: "Seamless Deals,  <i>Stronger Growth</i>",desc: ["We provide end-to-end support for mergers and acquisitions with detailed financial analysis. Our team evaluates financial data, projections, and deal structures carefully. This ensures informed decision-making throughout the transaction.","By identifying risks and opportunities, we help you negotiate better terms. Our structured approach ensures smooth execution and compliance. This leads to successful and value-driven business deals."] , chips: ["🤝 Flexible Structure", "🛡️ Limited Liability", "📉 Low Compliance", "💰 Easy Profit Sharing"], time: "Avg. 10–15 working days" },
  { num: "04", tag: "ESV", label: "Equity & Stakeholder Valuation", title: "Fair Value for <i>Every Share</i>",desc: ["We assess equity distribution and stakeholder value using accurate financial data and valuation methods. This ensures fairness and transparency in ownership structures. It helps maintain balance among stakeholders.", "Our insights support strategic decisions related to investments, exits, and restructuring. We present clear and reliable valuation reports. This builds trust and supports long-term business relationships."] , chips: ["👤 Solo Founder", "🏢 Corporate Benefits", "🔒 Asset Protection", "📊 Easy Compliance"], time: "Avg. 7–10 working days" },
  { num: "05", tag: "FDD", label: "Financial Due Diligence", title: "Transparency Before <i>Every Transaction</i>",desc: ["We conduct thorough financial due diligence to verify data accuracy and compliance. Our team reviews financial records, reports, and operational metrics in detail. This helps identify risks before any transaction.", "By ensuring transparency and reliability, we strengthen investor confidence. Our process minimizes uncertainties and supports informed decisions. It ensures secure and well-evaluated financial transactions."] , chips: ["🤝 Shared Ownership", "💡 Easy Formation", "📝 Minimal Compliance", "⚖️ Flexible Agreement"], time: "Avg. 3–7 working days" },
  { num: "06", tag: "GES", label: "Growth & Expansion Strategy", title: "Plan Smart,  <i>Scale Confidently</i>",desc: ["We develop growth strategies based on financial insights, market trends, and business performance. Our approach focuses on scalability and long-term sustainability. This helps your business expand with clarity and direction.", "As your business evolves, we continuously refine strategies and financial plans. This keeps your growth aligned with market dynamics. It ensures you are always prepared for new opportunities."] , chips: ["👤 Full Control", "💸 Minimal Cost", "⚡ Quick Setup", "🏪 SMEs & Freelancers"], time: "Avg. 1–3 working days" },
];
const REG_ICONS = [
  <img src="/img/icon/business-valuation-modeling.webp" alt="Business Valuation and Financial Modeling" width="20" height="20" />,
  <img src="/img/icon/investment-readiness-funding.webp" alt="Investment Readiness and Funding Support" width="20" height="20" />,
  <img src="/img/icon/mergers-acquisitions-advisory.webp" alt="Mergers and Acquisitions Advisory" width="20" height="20" />,
  <img src="/img/icon/equity-stakeholder-valuation.webp" alt="Equity and Stakeholder Valuation" width="20" height="20" />,
  <img src="/img/icon/financial-due-diligence.webp" alt="Financial Due Diligence" width="20" height="20" />,
  <img src="/img/icon/growth-expansion-strategy.webp" alt="Growth and Expansion Strategy" width="20" height="20" />,
];

function RegistrationSection() {
  const [active, setActive] = useState(0);
  const d = REG_DATA[active];
  return (
    <section style={{ padding: "90px 5%", background: "#004168", position: "relative", overflow: "hidden" }}>
      <style>{`
        .rg-sec-tag{display:inline-block;font-size:.75rem;font-weight:700;color:#ed8337;letter-spacing:2px;text-transform:uppercase;margin-bottom:.85rem;}
        .rg-sec-h{font-family:'Poppins',serif;font-size:clamp(1.9rem,3.5vw,2.6rem);font-weight:600;color:#fff;line-height:1.15;margin-bottom:.9rem;}
        .rg-sec-h i{font-style:italic;color:#ed8337;font-weight:700;}
        .rg-sec-sub{font-size:.95rem;color:#fff;margin:0 auto;line-height:1.85;}
        .rg-layout{display:grid;grid-template-columns:1fr 1.15fr;gap:0;max-width:1240px;margin:0 auto;border-radius:20px;overflow:hidden;box-shadow:0 20px 60px rgba(1,113,164,.1);}
        .rg-left{background:#fff;padding:0;}
        .rg-item{display:flex;align-items:center;gap:1rem;padding:1.4rem 2rem;border-bottom:1px solid #dce8f0;cursor:pointer;position:relative;transition:all .28s;overflow:hidden;}
        .rg-item::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:#ed8337;transform:scaleY(0);transform-origin:center;transition:transform .28s;}
        .rg-item.active::before,.rg-item:hover::before{transform:scaleY(1);}
        .rg-item.active{background:#fff4eb;}
        .rg-item:hover:not(.active){background:#fafcfe;}
        .rg-icon-box{width:42px;height:42px;border-radius:10px;background:#e0f2fb;display:flex;align-items:center;justify-content:center;transition:background .28s;flex-shrink:0;}
        .rg-item.active .rg-icon-box{background:#ed8337;}
        .rg-icon-box img{width:35px;height:33px;object-fit:contain;transition:filter .28s;}
        .rg-item.active .rg-icon-box img{filter:brightness(0) invert(1);}
        .rg-name{font-weight:500;font-size:.95rem;color:#111e27;font-family:'poppins';}
        .rg-item.active .rg-name{color:#c96820;font-family:'poppins';}
        .rg-item-arr{width:28px;height:28px;border-radius:50%;background:#dce8f0;display:flex;align-items:center;justify-content:center;font-size:.8rem;color:#7a909d;transition:all .28s;flex-shrink:0;}
        .rg-item.active .rg-item-arr{background:#ed8337;color:#fff;}
        .rg-tag-pill{font-size:.65rem;font-weight:700;letter-spacing:.8px;text-transform:uppercase;padding:.2rem .65rem;border-radius:50px;background:#e0f2fb;color:#0171a4;transition:all .2s;}
        .rg-item.active .rg-tag-pill{background:rgba(237,131,55,.2);color:#c96820;}
        .rg-right{background:linear-gradient(145deg, rgba(10, 54, 82, 0.55), rgb(76 186 235 / 23%));padding:3rem 2.8rem;position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;min-height:520px;}
        .rg-d-eye{display:flex;align-items:center;gap:.6rem;margin-bottom:1.5rem;}
        .rg-d-num{width:42px;height:42px;border-radius:10px;background:#ed8337;display:flex;align-items:center;justify-content:center;font-family:'Fraunces',serif;font-weight:900;font-size:1.1rem;color:#fff;}
        .rg-d-lbl{font-size:.7rem;font-weight:700;color:rgba(255,255,255,.4);letter-spacing:2px;text-transform:uppercase;}
        .rg-d-title{font-family:'poppins',serif;font-weight:600;font-size:1.7rem;color:#fff;line-height:1.25;margin-bottom:1rem;}
        .rg-d-title i{font-style:italic;font-weight:300;color:#ed8337;}
        .rg-d-desc{font-size:.9rem;color:rgb(255, 255, 255);line-height:1.9;margin-bottom:2rem;font-family:'poppins'}
        .rg-d-footer{display:flex;align-items:center;justify-content:space-between;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,.08);}
        .rg-d-cta{background:#ed8337;color:#fff;padding:.7rem 1.6rem;border-radius:8px;border:none;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:.85rem;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:.5rem;transition:all .2s;}
        .rg-d-cta:hover{background:#c96820;transform:translateY(-1px);}
        .rg-time-dot{width:6px;height:6px;border-radius:50%;background:#ed8337;}
        .rg-dots{display:flex;gap:.4rem;position:absolute;bottom:2.8rem;right:2.8rem;z-index:3;}
        .rg-ddot{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.2);transition:all .3s;}
        .rg-ddot.active{background:#ed8337;width:20px;border-radius:3px;}
        
        .rg-bg-c{position:absolute;border-radius:50%;pointer-events:none;}
                @media(max-width:768px){
          .rg-layout{grid-template-columns:1fr !important;}
          .rg-right{ display:none !important; }
          .rg-mobile-detail{
            display:block;
            background:linear-gradient(145deg, rgba(10,54,82,0.95), rgba(0,40,70,0.98));
            padding:1.4rem 1.2rem;
            border-left:3px solid #ed8337;
            border-radius:0 0 12px 12px;
            margin-top:-1px;
          }
          .rg-mobile-detail .rg-d-title{font-family:'Poppins',sans-serif;font-size:1rem;font-weight:700;color:#fff;margin:0.4rem 0 0.7rem;line-height:1.3;}
          .rg-mobile-detail .rg-d-desc{font-size:0.84rem;line-height:1.7;color:rgba(255,255,255,0.82);}
          .rg-item{border-radius:0;}
          .rg-item.active{border-radius:12px 12px 0 0;}
          .rg-tag-pill{display:none;}
        }
        @media(min-width:769px){
          .rg-mobile-detail{ display:none !important; }
        }

      `}</style>
      <div className="rg-bg-c" style={{ top: "-120px", right: "-120px", width: "400px", height: "400px", border: "1.5px solid rgba(237,131,55,.1)" }} />
      <div className="rg-bg-c" style={{ bottom: "-100px", left: "-80px", width: "300px", height: "300px", border: "1.5px solid rgba(237,131,55,.08)" }} />
      <div style={{ textAlign: "center", marginBottom: "60px", position: "relative", zIndex: 2 }}>
        <div className="partners-header1">
          <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Specialized Valuation and Investment Services</div>

        </div>
        <h2 className="rg-sec-h">Accurate Insights. <i> Strategic Decisions.</i> Confident Growth.</h2>
        <p className="rg-sec-sub">
          Priyam Consultancy Services delivers customized valuation and investment solutions that combine financial precision with strategic foresight, helping you maximize value and make informed business moves.
        </p>
      </div>
     <div className="rg-layout">
        <div className="rg-left">
          {REG_DATA.map((item, i) => (
            <div key={i}>
              <div className={`rg-item${active === i ? " active" : ""}`} onClick={() => setActive(i)} style={i === REG_DATA.length - 1 && active !== i ? { borderBottom: "none" } : {}}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flex: 1 }}>
                  <div className="rg-icon-box">{REG_ICONS[i]}</div>
                  <div className="rg-name">{item.label}</div>
                </div>
                <span className="rg-tag-pill">{item.tag}</span>
                <div className="rg-item-arr">{active === i ? "▾" : "›"}</div>
              </div>
              {active === i && (
                <div className="rg-mobile-detail">
                  <div className="rg-d-title" dangerouslySetInnerHTML={{ __html: item.title }} />
                  {Array.isArray(item.desc) ? (
                    item.desc.map((para, pi) => (
                      <div className="rg-d-desc" key={pi} style={{ marginBottom: pi < item.desc.length - 1 ? "0.8rem" : "0" }}>{para}</div>
                    ))
                  ) : (
                    <div className="rg-d-desc">{item.desc}</div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="rg-right">
          <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column" }}>
            <div className="rg-d-eye"><div className="rg-d-num">{d.num}</div><div className="rg-d-lbl">{d.label}</div></div>
            <div className="rg-d-title" dangerouslySetInnerHTML={{ __html: d.title }} />
            {Array.isArray(d.desc) ? (
              d.desc.map((para, pi) => (
                <div className="rg-d-desc" key={pi} style={{ marginBottom: pi < d.desc.length - 1 ? "1rem" : "0" }}>{para}</div>
              ))
            ) : (
              <div className="rg-d-desc">{d.desc}</div>
            )}
            <div className="rg-d-footer">
              {/* <div className="rg-d-time"><div className="rg-time-dot" /><span>{d.time}</span></div> */}
            </div>
          </div>
          <div className="rg-dots">{REG_DATA.map((_, i) => <div key={i} className={`rg-ddot${active === i ? " active" : ""}`} />)}</div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════
   SECTION 4 — SESSION CHANGE
═══════════════════════════════ */
const SC_STEPS = [
  { num: "01", color: "orange", icon: <img src="/img/icon/sc-business-valuation.webp" alt="Business Valuation" width="35" height="35" />, lbl: "Step 01 · Initiation", title: "Business Valuation", desc: "We provide comprehensive valuation services to determine your business’s true economic worth based on performance, assets, and potential, supporting informed decisions, funding, or strategic transactions.", time: "~1 Working Day", tColor: "blue", even: false, last: false },
  { num: "02", color: "blue", icon: <img src="/img/icon/sc-financial-modeling.webp" alt="Financial Modeling and Forecasting" width="35" height="35" />, lbl: "Step 02 · Documentation", title: "Financial Modeling & Forecasting",desc:"We develop dynamic financial models and forecasts that simulate scenarios, assess profitability and liquidity, and provide stakeholders a clear view of future financial performance and scalability.", time: "~2-3 Working Days", tColor: "orange", even: true, last: false },
  { num: "03", color: "orange", icon: <img src="/img/icon/sc-investment-readiness.webp" alt="Investment Readiness Assessment" width="35" height="35" />, lbl: "Step 03 · Filing", title: "Investment Readiness Assessment",desc:"We evaluate financial stability, governance, and documentation to ensure your business meets investor expectations, presenting a credible and well-prepared case for funding or strategic partnerships.", time: "~2-4 Working Days", tColor: "blue", even: false, last: false },
  { num: "04", color: "blue", icon: <img src="/img/icon/sc-mergers-acquisitions.webp" alt="Mergers and Acquisitions Support" width="35" height="35" />, lbl: "Step 04 · Approval", title: "Mergers & Acquisitions Support", desc: "We guide you through due diligence, valuation, and deal structuring, helping negotiate favorable terms and ensure seamless financial integration throughout the merger or acquisition process.", time: "~5-7 Working Days", tColor: "orange", even: true, last: false },
  { num: "05", color: "orange", icon: <img src="/img/icon/sc-investor-relations.webp" alt="Investor Relations and Strategy" width="35" height="35" />, lbl: "Step 05 · Complete", title: "Investor Relations & Strategy", desc: "We strengthen investor communications through accurate reporting and valuation insights, building confidence, supporting transparency, and fostering long-term relationships that drive sustainable financial growth.", time: "~1-2 Working Days", tColor: "blue", even: false, last: false },
  { num: "06", color: "blue", icon: <img src="/img/icon/sc-regulatory-compliance.webp" alt="Regulatory and Compliance Advisory" width="35" height="35" />, lbl: "Step 06 · Complete", title: "Regulatory & Compliance Advisory", desc:"We ensure all valuations and reports comply with legal, accounting, and tax standards, reducing risks and enhancing credibility during audits, reviews, and investor evaluations.", time: "~2-3 Working Days", tColor: "orange", even: true, last: false },


];

function SessionChangeSection() {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "90px 0 100px" }}>
      <style>{`
        .sc-bg{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(237,131,55,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(237,131,55,0.035) 1px,transparent 1px);background-size:56px 56px;animation:sc-gd 22s linear infinite;}
        @keyframes sc-gd{0%{background-position:0 0}100%{background-position:56px 56px}}
        .sc-orb{position:absolute;border-radius:50%;pointer-events:none;filter:blur(90px);animation:sc-op 9s ease-in-out infinite alternate;}
        .sc-orb-a{width:520px;height:520px;background:rgba(237,131,55,0.07);top:-140px;left:-100px;}
        .sc-orb-b{width:380px;height:380px;background:rgba(1,113,164,0.12);bottom:-100px;right:-80px;animation-delay:3s;}
        @keyframes sc-op{0%{transform:scale(1)}100%{transform:scale(1.25) translate(18px,-18px)}}
        .sc-inner{position:relative;z-index:5;max-width:1100px;margin:0 auto;padding:0 5%;}
        .sc-tag{display:inline-flex;align-items:center;gap:0.7rem;font-family:'DM Sans',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#ed8337;margin-bottom:14px;}
        .sc-tag-line{display:inline-block;width:32px;height:2px;background:linear-gradient(90deg,transparent,#ed8337);border-radius:2px;}
        .sc-tag-line:last-child{background:linear-gradient(90deg,#ed8337,transparent);}
        .sc-title{font-family:'Poppins',sans-serif;font-size:clamp(26px,3.8vw,2.3rem);font-weight:600;color:#000;margin:0;line-height:1.4;}
        .sc-title-em{font-style:italic;color:#ed8337;}
        .sc-sub{font-family:'poppins',sans-serif;font-size:16px;color:rgb(0, 0, 0);margin-top:20px;}
        .sc-step{display:flex;align-items:stretch;margin-bottom:22px;}
        .sc-step-even{flex-direction:row-reverse;}
        .sc-num-col{flex-shrink:0;width:84px;display:flex;align-items:center;justify-content:center;position:relative;}
        .sc-line-v{position:absolute;left:50%;top:0;bottom:-22px;width:2px;background:linear-gradient(to bottom,rgba(237,131,55,0.35),rgba(1,113,164,0.2));transform:translateX(-50%);z-index:1;}
        .sc-circle{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Space Mono',monospace;font-size:13px;font-weight:700;position:relative;z-index:2;transition:transform 0.3s;}
        .sc-orange{background:rgb(237, 131, 55);border:2px solid #ed8337;}
        .sc-blue{background:rgb(1, 112, 164);border:2px solid #0171a4;}
        .sc-final{background:linear-gradient(135deg,#ed8337,#f5a66b);border:2px solid #ed8337;font-weight:900;}
        .sc-step:hover .sc-circle{transform:scale(1.1);}
        .sc-conn{flex-shrink:0;width:36px;}
        .sc-card{flex:1;background:#004168;backdrop-filter:blur(18px);border:1px solid rgba(237,131,55,0.14);border-radius:20px;padding:24px 30px;position:relative;overflow:hidden;transition:transform 0.3s,box-shadow 0.3s,border-color 0.3s;}
        .sc-card:hover{transform:translateY(-5px);box-shadow:0 20px 60px rgba(0,0,0,0.4);border-color:rgba(237,131,55,0.3);}
        .sc-card-top{position:absolute;top:0;left:0;right:0;height:3px;border-radius:20px 20px 0 0;}
        .sc-top-orange{background:linear-gradient(90deg,#ed8337,#f5a66b);}
        .sc-top-blue{background:linear-gradient(90deg,#0171a4,#3b8bd4);}
        .sc-card-icon{font-size:24px;display:block;margin-bottom:8px;}
        .sc-lbl{font-family:'DM Sans',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;margin-bottom:5px;}
        .sc-lbl-orange{color:#5ab8e8;}.sc-lbl-blue{color:#5ab8e8;}
        .sc-card-title{font-family:'Poppins',sans-serif;font-size:15.5px;font-weight:600;color:#f5a66b;margin:11px 0px;}
        .sc-card-desc{font-family:'DM Sans',sans-serif;font-size:15.3px;color:rgba(255, 255, 255, 0.83);line-height:1.78;}
        .sc-time{display:inline-flex;align-items:center;gap:5px;margin-top:12px;border-radius:50px;padding:5px 14px;font-family:'DM Sans',sans-serif;font-size:10.5px;font-weight:700;}
        .sc-t-blue{background:rgba(1,113,164,0.15);border:1px solid rgba(1,113,164,0.28);color:#5ab8e8;}
        .sc-t-orange{background:rgba(237,131,55,0.1);border:1px solid rgba(237,131,55,0.25);color:#ed8337;}
        .sc-card-final{background:#022b44,rgba(1,113,164,0.06));border-color:rgba(237,131,55,0.28);}
        .sc-card-final .sc-card-title{color:#f5a66b;}
        @media(max-width:700px){.sc-step,.sc-step-even{flex-direction:column !important;}.sc-conn{display:none !important;}.sc-num-col{width:100% !important;flex-direction:row !important;justify-content:flex-start !important;padding-left:4px !important;margin-bottom:8px;}.sc-line-v{display:none !important;}.sc-inner{padding:0 4% !important;}}
      `}</style>
      <div className="sc-bg" /><div className="sc-orb sc-orb-a" /><div className="sc-orb sc-orb-b" />
      <div className="sc-inner">
        <div style={{ textAlign: "center", marginBottom: "90px" }}>
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Company Valuation and Investment Support Execution Process</div>

          </div>
          <h2 className="sc-title">Structured, Transparent, and <em className="sc-title-em">Value-Driven Advisory </em></h2>
          <p className="sc-sub">
            Our Business Registration process at Priyam Consultancy Services is tailored to your business needs. We don’t just file paperwork , we build a solid legal foundation for growth, credibility, and long-term success.
          </p>
        </div>
        <div style={{ position: "relative" }}>
          {SC_STEPS.map((s, i) => (
            <div key={i} className={`sc-step${s.even ? " sc-step-even" : ""}`}>
              <div className="sc-num-col">
                {!s.last && <div className="sc-line-v" />}
                <div className={`sc-circle sc-${s.color}`}>{s.num}</div>
              </div>
              <div className="sc-conn" />
              <div className={`sc-card${s.last ? " sc-card-final" : ""}`}>
                <div className={`sc-card-top ${s.color === "blue" ? "sc-top-blue" : "sc-top-orange"}`} />
                <span className="sc-card-icon">{s.icon}</span>
                <div className={`sc-lbl sc-lbl-${s.color === "blue" ? "blue" : "orange"}`}>{s.lbl}</div>
                <div className="sc-card-title">{s.title}</div>
                <div className="sc-card-desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════
   SECTION 5 — HOW WE WORK
═══════════════════════════════ */
const HWW_STEPS = [
  { title: "Strategic Evaluation & Planning", desc: "We begin by analyzing your business objectives, market presence, and financial performance. Our strategies are built to highlight your business strengths and maximize value through accurate, transparent valuations.", center: false, icon: <img src="/img/icon/hww-strategic-evaluation.webp" alt="Strategic Evaluation and Planning" width="34" height="34" /> },
  { title: "Expert Team & Proven Methodology", desc: "Our team of financial analysts, valuation experts, and investment advisors brings deep industry experience and analytical rigor to every project. Each step is data-backed, methodical, and aligned with global valuation standards.", center: false, icon: <img src="/img/icon/hww-expert-team-methodology.webp" alt="Expert Team and Proven Methodology" width="34" height="34" /> },
  { title: "Review, Validate & Present", desc: "Before finalizing, we review all data models, assumptions, and projections for accuracy. We then present findings in a clear, investor-ready format — ensuring your business is positioned confidently in every negotiation or funding discussion.", center: true, icon: <img src="/img/icon/hww-review-validate-present.webp" alt="Review Validate and Present" width="34" height="34" /> },
  { title: "Ongoing Support & Strategic Guidance", desc: "We provide continuous support post-valuation, offering actionable insights for investment decisions, funding rounds, and growth planning, ensuring your business leverages its true value effectively and sustainably.", center: false, icon: <img src="/img/icon/hww-ongoing-support-guidance.webp" alt="Ongoing Support and Strategic Guidance" width="34" height="34" /> },
];

function HowWeWorkSection() {
  return (
    <section style={{ position: "relative", background: "#004168", overflow: "hidden", padding: "60px 5% 81px" }}>
      <style>{`
        .hww-bg{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(237,131,55,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(237,131,55,0.03) 1px,transparent 1px);background-size:52px 52px;animation:hww-gd 22s linear infinite;}
        @keyframes hww-gd{0%{background-position:0 0}100%{background-position:52px 52px}}
        .hww-orb{position:absolute;border-radius:50%;pointer-events:none;filter:blur(90px);animation:hww-od 10s ease-in-out infinite alternate;}
        .hww-orb-1{width:500px;height:500px;background:rgba(237,131,55,0.06);top:-140px;right:-100px;}
        .hww-orb-2{width:380px;height:380px;background:rgba(1,113,164,0.07);bottom:-100px;left:-60px;animation-delay:5s;}
        @keyframes hww-od{0%{transform:scale(1)}100%{transform:scale(1.2) translate(20px,-20px)}}
        .hww-tag{display:inline-flex;align-items:center;gap:0.65rem;font-family:'DM Sans',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#ed8337;margin-bottom:14px;}
        .hww-tag-line{display:inline-block;width:28px;height:2px;border-radius:2px;background:linear-gradient(90deg,transparent,#ed8337);}
        .hww-tag-line:last-child{background:linear-gradient(90deg,#ed8337,transparent);}
        .hww-title{font-family:'Poppins',sans-serif;font-size:clamp(26px,3.6vw,42px);font-weight:600;color:#fff;margin:0;line-height:1.13;}
        .hww-accent{color:#ed8337;font-style:italic;}
        .hww-sub{font-family:'DM Sans',sans-serif;font-size:16px;color:rgb(255, 255, 255);margin-top:20px;margin-left:auto;margin-right:auto;line-height:1.75;}
        .hww-flow{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
        .hww-flow::before{content:'';position:absolute;top:54px;left:calc(10% + 28px);right:calc(10% + 28px);height:2px;background:linear-gradient(90deg,#ed8337,rgba(237,131,55,0.4),rgba(1,113,164,0.5),#0171a4);z-index:0;animation:hww-lg 3s ease-in-out infinite alternate;}
        @keyframes hww-lg{from{opacity:0.5}to{opacity:1}}
        .hww-step{display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 12px;position:relative;z-index:2;cursor:default;}
        .hww-icon-wrap{width:108px;height:108px;position:relative;margin-bottom:22px;flex-shrink:0;}
        .hww-ring{position:absolute;inset:0;border-radius:50%;border:1.5px dashed rgba(237,131,55,0.25);animation:hww-rs 14s linear infinite;}
        .hww-ring::before{content:'';position:absolute;top:-4px;left:50%;transform:translateX(-50%);width:7px;height:7px;border-radius:50%;background:#ed8337;box-shadow:0 0 10px rgba(237,131,55,0.7);}
        .hww-step:hover .hww-ring{border-color:rgba(237,131,55,0.55);}
        .hww-disc{position:absolute;inset:12px;border-radius:50%;background:rgba(237,131,55,0.06);border:1px solid rgba(237,131,55,0.15);animation:hww-db 3.5s ease-in-out infinite;}
        .hww-step:hover .hww-disc{background:rgba(237,131,55,0.12);box-shadow:0 0 28px rgba(237,131,55,0.2);}
        .hww-svg{position:absolute;inset:24px;border-radius:50%;background:#004168;border:1.5px solid rgba(237,131,55,0.3);display:flex;align-items:center;justify-content:center;transition:transform 0.4s,border-color 0.3s;}
        .hww-step:hover .hww-svg{transform:scale(1.12);border-color:rgba(237,131,55,0.6);}
        .hww-svg img{width:28px;height:28px;object-fit:contain;}
        .hww-step-center .hww-ring{border-color:rgba(245,166,107,0.35);}
        .hww-step-center .hww-ring::before{background:#f5a66b;}
        .hww-step-center .hww-svg{border-color:rgba(245,166,107,0.45);}
        .hww-step-center .hww-svg img{opacity:0.85;}
        .hww-step-center .hww-step-title{color:#f5a66b;}
        @keyframes hww-rs{to{transform:rotate(360deg)}}
        @keyframes hww-db{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}
        .hww-arrow{display:none;position:absolute;top:46px;right:-14px;width:28px;height:14px;z-index:3;opacity:0.5;animation:hww-ab 2s ease-in-out infinite;}
        @keyframes hww-ab{0%,100%{opacity:0.3;transform:translateX(0)}50%{opacity:0.7;transform:translateX(3px)}}
        .hww-step-title{font-family:'Poppins',sans-serif;font-size:16px;font-weight:600;color:#f5a66b;line-height:1.35;margin-bottom:14px;}
        .hww-step:hover .hww-step-title{color:#f5a66b;}
        .hww-step-desc{font-family:'DM Sans',sans-serif;font-size:15px;color:rgb(255, 255, 255);line-height:1.8;}
        .hww-step:hover .hww-step-desc{color:rgba(255,255,255,0.6);}
        .hww-cta-row{display:flex;align-items:center;justify-content:center;margin-top:64px;gap:1.6rem;}
        .hww-cta-line{flex:1;max-width:200px;height:1px;background:linear-gradient(90deg,transparent,rgba(237,131,55,0.3),transparent);}
        .hww-cta-btn{display:inline-flex;align-items:center;gap:0.55rem;background:linear-gradient(135deg,#ed8337,#f5a66b);color:#011a2a;padding:0.85rem 2.2rem;border-radius:50px;font-family:'DM Sans',sans-serif;font-size:0.9rem;font-weight:700;text-decoration:none;box-shadow:0 6px 24px rgba(237,131,55,0.38);transition:transform 0.2s,box-shadow 0.2s;}
        .hww-cta-btn:hover{transform:translateY(-3px);box-shadow:0 10px 34px rgba(237,131,55,0.52);}
        .hww-cta-btn svg{width:18px;height:18px;stroke:#011a2a;stroke-width:2;fill:none;}
        @media(max-width:900px){
        .faq-wrapper {display: block}
        .hww-flow{grid-template-columns:1fr 1fr !important;gap:36px 20px !important;}.hww-flow::before{display:none !important;}}
        @media(max-width:540px){.hww-flow{grid-template-columns:1fr !important;}.hww-arrow{display:none !important;}}
        .faq-head h2 {
          color: #000;
        }
      `}</style>
      <div className="hww-bg" /><div className="hww-orb hww-orb-1" /><div className="hww-orb hww-orb-2" />
      <div style={{ position: "relative", zIndex: 2, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>How We Work</div>

          </div>
          <h2 className="hww-title">Evaluate Precisely. <span className="hww-accent">Advise Strategically.</span> Deliver Confidently.</h2>
          <p className="hww-sub">
            We provide expert financial analysis and guidance to help your business make informed, growth-focused decisions with confidence.

          </p>
        </div>
        <div className="hww-flow">
          {HWW_STEPS.map((s, i) => (
            <div key={i} className={`hww-step${s.center ? " hww-step-center" : ""}`}>
              <div className="hww-icon-wrap">
                <div className="hww-ring" style={i % 2 === 1 ? { animationDirection: "reverse", animationDuration: "18s" } : {}} />
                <div className="hww-disc" />
                <div className="hww-svg">{s.icon}</div>
                {i < 3 && (
                  <div className="hww-arrow" style={{ animationDelay: `${i * 0.4}s` }}>
                    <svg viewBox="0 0 28 14" fill="none"><path d="M0 7h24M18 2l6 5-6 5" stroke="#ed8337" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                )}
              </div>
              <div className="hww-step-title">{s.title}</div>
              <div className="hww-step-desc">{s.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
const faqData = [
  { q: "What is Investment Valuation?", a: "Investment valuation is the process of determining the current worth of a business or asset to make informed financial, funding, or acquisition decisions." },
  { q: "What is the difference between investment and valuation?", a: "Investment refers to allocating capital to a business or asset, while valuation is the assessment of its financial and strategic worth." },
  { q: "What is the valuation of a company for investment?", a: "It is the process of assessing a company’s financial, operational, and strategic value to guide investment, funding, or partnership decisions." },
  { q: "What do you mean by investment services?", a: "Investment services guide businesses and individuals in funding strategies, capital raising, portfolio management, mergers, acquisitions, and financial decision-making for optimal returns." },
  { q: "What are the 3 levels of valuation?", a: "The three levels are asset-based valuation, income-based valuation, and market-based valuation, each analyzing different aspects to determine a company’s worth." },
  { q: "What valuation methods do you use?", a: "Common methods include Discounted Cash Flow (DCF), Comparable Company Analysis, Precedent Transactions, and Asset-Based Valuation, tailored to your business and industry context." },
];
function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <section className="faq-section">
      <div className="partners-header2" style={{ textAlign: 'center', marginTop: '20px' }}>
        <div className="partners-eyebrow" >Frequently Asked Questions</div>
      </div>
      <div className="container">
        {/* TITLE */}
        <div className="faq-head">
          <h2>Queries That Could <span>Hold You Back</span></h2>
        </div>
        {/* FAQ GRID */}
        <div className="faq-wrapper">

          {/* LEFT COLUMN */}
          <div className="faq-col">
            {faqData.slice(0, 3).map((item, i) => (
              <div className="faq-item" key={i}>
                <div className="faq-question" onClick={() => toggle(i)}>
                  <span>{item.q}</span>
                  <span className="icon">{active === i ? "−" : "+"}</span>
                </div>
                {active === i && (
                  <div className="faq-answer">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="faq-col">
            {faqData.slice(3, 6).map((item, i) => (
              <div className="faq-item" key={i + 3}>
                <div className="faq-question" onClick={() => toggle(i + 3)}>
                  <span>{item.q}</span>
                  <span className="icon">{active === i + 3 ? "−" : "+"}</span>
                </div>
                {active === i + 3 && (
                  <div className="faq-answer">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════
   ROOT EXPORT
═══════════════════════════════ */
export default function BusinessRegistrationPage() {
  return (
    <Layout>
      <HeroSection />
      <ApproachSection />
      <RegistrationSection />
      <SessionChangeSection />
      <HowWeWorkSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
}