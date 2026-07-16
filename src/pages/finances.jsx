import '../css/pages-common.css';
import { useState } from "react";
import CTASection from "../components/HomePage/CTA";
import emailjs from "@emailjs/browser";
import Layout from '@theme/Layout';
const banner = "/img/finances.webp";
import Head from '@docusaurus/Head';
import BlogSection from "../components/BlogSection";


function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/finances/";
  const imageUrl = "https://www.priyamconsultancy.com/img/finances.png";

  return (
    <Head>
      {/* ── Primary Meta ── */}
      <title>Financial Services Companies in Coimbatore | Financial Services </title>
      <meta name="description" content="Leading financial services companies in Coimbatore providing accounting, investment, tax planning, and business advisory solutions to drive growth and stability. " />
      <meta name="keywords" content="Financial Service, Financial Service Company, Business and Financial Services, Financial Service Solutions, Business Valuations, Business Investment Analysis, Financial Service Partner, Finance Consultant, Financial Service in India, Financial Service for Business " />
      <link rel="canonical" href="https://www.priyamconsultancy.com/finances/" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Financial Services Companies in Coimbatore | Financial Services " />
      <meta property="og:description" content="Leading financial services companies in Coimbatore providing accounting, investment, tax planning, and business advisory solutions to drive growth and stability. " />
      <meta property="og:url" content="https://www.priyamconsultancy.com/finances/" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="PCS Business Solution" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Financial Services Companies in Coimbatore | Financial Services " />
      <meta name="twitter:description" content="Leading financial services companies in Coimbatore providing accounting, investment, tax planning, and business advisory solutions to drive growth and stability. " />
      <meta name="twitter:image" content={imageUrl} />

      {/* ── Breadcrumb List Schema ── */}
      <script type="application/ld+json">{`
        {
        "@context":"https://schema.org",
        "@type":"BreadcrumbList",
        "itemListElement":[
          {
            "@type":"ListItem",
            "position":1,
            "item":{
              "@id":"https://www.priyamconsultancy.com/",
              "name":"Home"
            }
          },
          {
            "@type":"ListItem",
            "position":2,
            "item":{
              "@id":"https://www.priyamconsultancy.com/finances/",
              "name":"finances"
            }
          }
        ]
        }

      `}</script>

      {/* ── Organization Schema ── */}
      <script type="application/ld+json">{`
        {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Priyam Consultancy Services",
        "url": "https://www.priyamconsultancy.com/",
        "logo": "https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91 96774 44048",
            "contactType": "customer support"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61577125709962",
          "https://www.linkedin.com/company/priyam-consultancy-services/",
          "https://www.instagram.com/priyam_consultancy_services/",
          "https://x.com/services91032",
          "https://g.co/kgs/rdTYdi6"
        ]
        }

      `}</script>

      {/* ── Service Schema ── */}
      <script type="application/ld+json">{`
        {
          "@context":"https://schema.org",
          "@type":"Service",
          "@id":"https://www.priyamconsultancy.com/finances/#service",
          "name":"Financial Services",
          "serviceType":"Financial Services",
          "url":"https://www.priyamconsultancy.com/finances/",
          "description":"Priyam Consultancy provides professional financial services including financial planning, financial advisory, wealth management, asset management, corporate finance, taxation support and business financial consulting solutions across India.",
          "provider":{
            "@type":"Organization",
            "name":"Priyam Consultancy Services",
            "url":"https://www.priyamconsultancy.com/",
            "logo":{
              "@type":"ImageObject",
              "url":"https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png"
            }
          },
          "areaServed":{
            "@type":"Country",
            "name":"India"
          }
        }

      `}</script>

      {/* ── Product Schema (Business Registration) ── */}
      <script type="application/ld+json">{`
      {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Finances",
        "image": ["https://www.priyamconsultancy.com/img/finances.png"],
        "description": "Best financial services in Coimbatore offering financial planning, financial advisory, wealth management, asset management, corporate finance, taxation support and business financial consulting solutions.",
        "brand": {
        "@type": "Brand",
        "name": "Priyam Consultancy Services"
        },
        "review": {
        "@type": "Review",
        "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1"
        },
        "author": {
        "@type": "Person",
        "name": "Admin"
        }
        },
        "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "6648"
        },
        "offers": {
        "@type": "Offer",
        "url": "https://www.priyamconsultancy.com/finances/",
        "priceCurrency": "USD",
        "price": "00.00",
        "priceValidUntil": "2026-12-31",
        "itemCondition": "https://schema.org/UsedCondition",
        "availability": "https://schema.org/InStock",
        "seller": {
        "@type": "Organization",
        "name": "priyamconsultancy.com"
        }
        }
        }

      `}</script>

      {/* ── FAQ Schema (Business Registration) ── */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "What is a financial service business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A financial service business provides services related to money management, investments, accounting, taxation, financial planning, loans, insurance, and business advisory. These services help individuals and organizations manage finances effectively, improve financial stability, and support long-term financial growth objectives."
            }
          },{
            "@type": "Question",
            "name": "What are the types of financial services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Financial services include accounting, taxation, auditing, investment advisory, wealth management, asset management, insurance, banking, financial planning, corporate finance, payroll services, and compliance management. Each service supports different financial, operational, and strategic business or individual financial requirements."
            }
          },{
            "@type": "Question",
            "name": "What is financial advisory and why is it important?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Financial advisory involves providing expert guidance on budgeting, investments, cash flow, taxation, risk management, and financial planning. It is important because it helps businesses and individuals make informed financial decisions, reduce risks, improve profitability, and achieve long-term financial stability."
            }
          },{
            "@type": "Question",
            "name": "What is wealth management service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Wealth management services focus on managing and growing an individual’s or organization’s financial assets through investment planning, financial advisory, tax optimization, risk management, and long-term financial strategies. The goal is to preserve wealth while supporting sustainable financial growth and future security."
            }
          },{
            "@type": "Question",
            "name": "What is asset management service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Asset management services involve managing investments, financial assets, and portfolios to maximize returns while minimizing financial risks. These services include portfolio analysis, investment planning, risk assessment, and continuous monitoring to support long-term financial performance and asset growth."
            }
          },{
            "@type": "Question",
            "name": "What is corporate finance service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Corporate finance services help businesses manage financial planning, fundraising, budgeting, investments, mergers, acquisitions, and capital structure decisions. These services support business growth, improve financial efficiency, optimize cash flow, and help organizations make strategic financial decisions confidently."
            }
          }]
        }

      `}</script>
    </Head>
  );
}


/* ═══════════════════════════════
   SECTION 1 — HERO BANNER
═══════════════════════════════ */
function HeroSection() {
  return (
      <section className="hero-section" style={{ minHeight:"100vh", display:"grid", gridTemplateColumns:"1fr 1fr", alignItems:"center", gap:"2rem", padding:"0rem 6% 3rem", position:"relative", overflow:"hidden", background:"#004168" }}>
      <div className="orb orb-1"/><div className="orb orb-2"/><div className="orb orb-3"/>

      {/* LEFT CONTENT */}
      <div className="hero-content-col" style={{ position:"relative", zIndex:2, display:"flex", flexDirection:"column" }}>
        <div className="badge"><div className="badge-dot"/>Expert Accounting Partner</div>
        <h1 className="hero-heading">
         Complete Financial Service &  
           <span className="underline-word orange" style={{ marginLeft: '0.5rem' }}> Support</span> for Your Business
        </h1>
        <p className="hero-sub">
We provide end-to-end financial solutions, including banking, loans, CMA reports, audits, and approvals. Our expert guidance ensures accurate financial management, smooth operations, and strategic support to help your business grow confidently.
        </p>
        <div className="hero-actions">
          <a className="btn-fill" href="/contact-us"><span>Explore More</span><div className="btn-arr">›</div></a>
        </div>
      </div>

      {/* RIGHT ILLUSTRATION */}
      <div className="hero-img-col" style={{ position:"relative", zIndex:2, display:"flex", alignItems:"center", justifyContent:"center" }}>
        <div className="hero-img-wrap">
          <img
            src={banner}
            alt="Financial Services Illustration"
            className="hero-img"
          />
        </div>
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
      <div className="ap2-inner">

        {/* LEFT CONTENT */}
        <div className="ap-left">
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Approach in</div>
          </div>
          <h2 className="ap2-heading">Financial   <span>Services</span></h2>
          <p className="ap-intro">
We provide complete visibility into your financial operations, from cash flow monitoring to detailed reporting. Every insight is accurate, timely, and easy to understand. This helps you stay in control of your business finances.
          </p>
          <p className="ap-intro">
Our reports deliver actionable insights that support confident and informed decision-making. You gain clarity on performance, expenses, and growth trends. This enables better planning and financial control.
          </p>
          <p className="ap-intro">
            Our proactive approach identifies risks, uncovers opportunities, and optimizes resources. We help improve profitability and support strategic planning. With expert guidance, your finances drive long-term, sustainable success

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
                  <div style={{ position: "relative" }}>
                    <span className="ap2-fl-icon">👤</span>
                    <input className="ap2-fl-input" type="text" name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
                  </div>
                </div>
                <div className="ap2-fl-group">
                  <label className="ap2-fl-label">Company</label>
                  <div style={{ position: "relative" }}>
                    <span className="ap2-fl-icon">🏢</span>
                    <input className="ap2-fl-input" type="text" name="company" placeholder="Company name" value={form.company} onChange={handleChange} />
                  </div>
                </div>
              </div>
              <div className="ap2-fl-group">
                <label className="ap2-fl-label">Email Address</label>
                <div style={{ position: "relative" }}>
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
                <div style={{ position: "relative" }}>
                  <span className="ap2-fl-icon" style={{ top: "0.9rem", transform: "none" }}>💬</span>
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

/* ═══════════════════════════════
   SECTION 3 — REGISTRATION TYPES
═══════════════════════════════ */
const REG_DATA = [
  { num: "01", tag: "BLM", label: "Banking & Loan Management", title: "Secure Funds and <i>Grow Confidently</i>", desc: ["We manage your bank accounts, loans, and credit facilities with a structured and efficient approach. Our team ensures smooth banking operations and timely access to funds when needed. This helps maintain financial stability and operational continuity.","By coordinating with banks and financial institutions, we simplify funding processes. Our support reduces delays and financial bottlenecks. This enables your business to expand confidently and sustain long-term growth."], chips: ["📈 Investor Access", "🏛️ Strong Governance", "📋 Stock Exchange Listed", "✅ Regulatory Compliance"], time: "Avg. 15–25 working days" },
  { num: "02", tag: "CRFA", label: "CMA Reports & Financial Analysis", title: "Structured Insights for  <i>Informed Decisions</i>", desc: ["We prepare accurate and detailed CMA reports required by lenders and investors. Our analysis covers financial statements, cash flow, and future projections. This ensures your reports meet industry and regulatory standards.","By presenting clear and structured financial insights, we improve your chances of securing funding. Our approach enhances credibility and transparency. It supports confident decision-making and financial planning."], chips: ["💼 Limited Liability", "🚀 Investor-Ready", "👥 2–200 Shareholders", "📑 Separate Legal Entity"], time: "Avg. 7–12 working days" },
  { num: "03", tag: "AA", label: "Audits & Approvals", title: "Transparent Audits for <i>Reliable Governance</i>", desc: ["Our team conducts internal and statutory audits with precision and attention to detail. We review records, transactions, and processes to ensure accuracy and compliance. This helps identify potential risks early.","By maintaining transparency and proper documentation, we strengthen financial governance. Our audit support builds trust with stakeholders and authorities. It ensures your business operates with integrity and compliance."], chips: ["🤝 Flexible Structure", "🛡️ Limited Liability", "📉 Low Compliance", "💰 Easy Profit Sharing"], time: "Avg. 10–15 working days" },
  { num: "04", tag: "BCFM", label: "Budgeting & Cash Flow Management", title: "Optimized Cash Flow for <i>Operational Efficiency</i>", desc: ["We monitor cash inflows and outflows to maintain strong financial control. Our team optimizes working capital and ensures consistent liquidity for daily operations. This prevents disruptions and improves efficiency.","Through structured budgeting and forecasting, we support better financial planning. Our approach provides clarity and control over expenses and revenues. It enables sustainable growth and informed decision-making."], chips: ["👤 Solo Founder", "🏢 Corporate Benefits", "🔒 Asset Protection", "📊 Easy Compliance"], time: "Avg. 7–10 working days" },
  { num: "05", tag: "FPA", label: "Financial Planning & Advisory", title: "Strategic Guidance for <i>Sustainable Growth</i>", desc: ["We offer expert guidance on investments, funding strategies, and financial planning. Our team aligns financial decisions with your business goals and growth objectives. This ensures a balanced and forward-looking approach.","By identifying opportunities and managing risks, we enhance profitability and stability. Our advisory services support long-term success and compliance. This helps your business grow with confidence and clarity."], chips: ["🤝 Shared Ownership", "💡 Easy Formation", "📝 Minimal Compliance", "⚖️ Flexible Agreement"], time: "Avg. 3–7 working days" },
  { num: "06", tag: "CFS", label: "Complete Financial Support", title: "Comprehensive Support for <i>Seamless Finance</i>", desc: ["We provide end-to-end financial services covering bookkeeping, reporting, and compliance. Our team ensures every financial activity is managed accurately and efficiently. This keeps your operations well-organized.","By handling all financial processes, we reduce your internal workload significantly. Our support delivers clarity, consistency, and actionable insights. This allows you to focus on scaling your business with confidence."], chips: ["👤 Full Control", "💸 Minimal Cost", "⚡ Quick Setup", "🏪 SMEs & Freelancers"], time: "Avg. 1–3 working days" },
];
const REG_ICONS = [
  <img src="/img/icon/banking-loan-management.webp" alt="Banking and Loan Management" width="20" height="20" />,
  <img src="/img/icon/cma-reports-analysis.webp" alt="CMA Reports and Financial Analysis" width="20" height="20" />,
  <img src="/img/icon/audits-approvals.webp" alt="Audits and Approvals" width="20" height="20" />,
  <img src="/img/icon/budgeting-cashflow.webp" alt="Budgeting and Cash Flow Management" width="20" height="20" />,
  <img src="/img/icon/financial-planning-advisory.webp" alt="Financial Planning and Advisory" width="20" height="20" />,
  <img src="/img/icon/complete-financial-support.webp" alt="Complete Financial Support" width="20" height="20" />,
];

function RegistrationSection() {
  const [active, setActive] = useState(0);
  const d = REG_DATA[active];
  return (
    <section style={{ padding: "90px 5%", background: "#004168", position: "relative", overflow: "hidden" }}>      <div className="rg-bg-c" style={{ top: "-120px", right: "-120px", width: "400px", height: "400px", border: "1.5px solid rgba(237,131,55,.1)" }} />
      <div className="rg-bg-c" style={{ bottom: "-100px", left: "-80px", width: "300px", height: "300px", border: "1.5px solid rgba(237,131,55,.08)" }} />
      <div style={{ textAlign: "center", marginBottom: "60px", position: "relative", zIndex: 2 }}>
        <div className="partners-header1" style={{ textAlign: 'center' }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Specialized Financial Services</h2>

        </div>
        <h3 className="rg-sec-h">Every Transaction Managed. <i> Every Report Accurate.</i> </h3>
        <p className="rg-sec-sub">
            Priyam Consultancy Services offers comprehensive financial solutions tailored to your business goals
        </p>
      </div>
       <div className="rg-layout">
        <div className="rg-left">
          {REG_DATA.map((item, i) => (
            <div key={i}>
              <div className={`rg-item${active === i ? " active" : ""}`} onClick={() => setActive(i)} style={i === REG_DATA.length - 1 && active !== i ? { borderBottom: "none" } : {}}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flex: 1 }}>
                  <div className="rg-icon-box">{REG_ICONS[i]}</div>
                  <h4 className="rg-name">{item.label}</h4>
                </div>
                <span className="rg-tag-pill">{item.tag}</span>
                <div className="rg-item-arr">{active === i ? "▾" : "›"}</div>
              </div>
              {active === i && (
                <div className="rg-mobile-detail">
                  <h5 className="rg-d-title" dangerouslySetInnerHTML={{ __html: item.title }} />
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
            <h5 className="rg-d-title" dangerouslySetInnerHTML={{ __html: d.title }} />
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
  { num: "01", color: "orange", icon: <img src="/img/icon/sc-discovery-assessment.webp" alt="Discovery and Assessment" width="35" height="35" />, lbl: "Step 01 · Initiation", title: "Discovery & Assessment", desc: "We analyze your financial structure, cash flow, reporting needs, and operations to design a tailored financial management plan aligned with your business objectives and growth strategy.", time: "~1 Working Day", tColor: "blue", even: false, last: false },
  { num: "02", color: "blue", icon: <img src="/img/icon/sc-planning-strategy.webp" alt="Planning and Strategy" width="35" height="35" />, lbl: "Step 02 · Documentation", title: "Planning & Strategy",desc:"We develop budgets, funding plans, and financial roadmaps aligned with business priorities, ensuring optimal resource allocation, effective cash flow management, and sustainable long-term financial growth.", time: "~2-3 Working Days", tColor: "orange", even: true, last: false },
  { num: "03", color: "orange", icon: <img src="/img/icon/sc-documentation-approvals.webp" alt="Documentation and Approvals" width="35" height="35" />, lbl: "Step 03 · Filing", title: "Documentation & Approvals",desc:"We prepare, verify, and submit financial records, loan applications, and CMA reports accurately and on time, ensuring compliance and reliable documentation for smooth financial operations.", time: "~2-4 Working Days", tColor: "blue", even: false, last: false },
  { num: "04", color: "blue", icon: <img src="/img/icon/sc-monitoring-review.webp" alt="Monitoring and Review" width="35" height="35" />, lbl: "Step 04 · Approval", title: "Monitoring & Review", desc: "We track financial performance, update records, and review compliance regularly, identifying discrepancies and optimizing processes to maintain transparency, accuracy, and alignment with regulatory and business requirements.", time: "~5-7 Working Days", tColor: "orange", even: true, last: false },
  { num: "05", color: "orange", icon: <img src="/img/icon/sc-continuous-support.webp" alt="Continuous Support and Updates" width="35" height="35" />, lbl: "Step 05 · Filing", title: "Continuous Support & Updates",desc:"We provide ongoing support for audits, approvals, and regulatory changes, offering actionable insights that keep your business financially healthy, compliant, and prepared for growth opportunities.", time: "~2-4 Working Days", tColor: "blue", even: false, last: false },
  { num: "06", color: "blue", icon: <img src="/img/icon/sc-performance-reporting.webp" alt="Performance Reporting and Insights" width="35" height="35" />, lbl: "Step 06 · Approval", title: "Performance Reporting & Insights", desc: "We generate clear financial dashboards and performance insights, enabling timely decisions, improved accountability, trend analysis, and proactive adjustments to support strategic business objectives effectively.", time: "~5-7 Working Days", tColor: "orange", even: true, last: false },


];

function SessionChangeSection() {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "90px 0 100px" }}>      <div className="sc-bg" /><div className="sc-orb sc-orb-a" /><div className="sc-orb sc-orb-b" />
      <div className="sc-inner">
        <div style={{ textAlign: "center", marginBottom: "90px" }}>
          <div className="partners-header1" style={{ textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Financial Execution Process</h2>
          </div>
          <h3 className="sc-title">Structured, Transparent, and <em className="sc-title-em">Reliable Financial Management </em></h3>
          <p className="sc-sub">
                Our Financial Management process at Priyam Consultancy Services is designed to meet the unique needs of your business, step by step. We don’t just handle numbers — we build a robust financial foundation that enables growth, stability, and long-term success. From cash flow management to audits and strategic planning, every step is precise, compliant, and tailored to your business objectives.
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
                <h4 className="sc-card-title">{s.title}</h4>
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
  { title: "Strategic Financial Planning", desc: "We carefully analyze your business’s financial needs, cash flow, and growth objectives. Every budgeting, funding, and investment plan is designed to optimize resources and support long-term success.", center: false, icon: <img src="/img/icon/hww-strategic-financial-planning.webp" alt="Strategic Financial Planning" width="34" height="34" /> },
  { title: "Expert Team & Clear Accountability", desc: "Our skilled financial analysts, auditors, and advisors manage every task with precision. Clearly defined roles ensure accuracy, accountability, and seamless execution across all financial operations and reporting.", center: false, icon: <img src="/img/icon/hww-expert-team-accountability.webp" alt="Expert Team and Clear Accountability" width="34" height="34" /> },
  { title: "Review, Validate & Deliver", desc: "Before finalizing any report, approval, or submission, we perform thorough verification for accuracy, compliance, and completeness. Only after review do we deliver actionable, reliable, and audit-ready financial outputs.", center: true, icon: <img src="/img/icon/hww-review-validate-deliver.webp" alt="Review Validate and Deliver" width="34" height="34" /> },
  { title: "Ongoing Monitoring & Guidance", desc: "We provide continuous oversight of cash flow, funding, audits, and regulatory compliance. Our proactive guidance ensures your business stays financially secure, fully compliant, and growth opportunities.", center: false, icon: <img src="/img/icon/hww-ongoing-monitoring-guidance.webp" alt="Ongoing Monitoring and Guidance" width="34" height="34" /> },
];

function HowWeWorkSection() {
  return (
    <section style={{ position: "relative", background: "#004168", overflow: "hidden", padding: "60px 5% 81px" }}>      <div className="hww-bg" /><div className="hww-orb hww-orb-1" /><div className="hww-orb hww-orb-2" />
      <div style={{ position: "relative", zIndex: 2, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="partners-header1" style={{ textAlign: 'center' }}>
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>How We Work</div>

          </div>
          <h2 className="hww-title">Plan With Clarity.  <span className="hww-accent">Execute With Confidence.</span></h2>
          <p className="hww-sub">
            Guiding your finances with precision, insight, and strategic focus to drive growth, ensure compliance, and strengthen long-term business success.
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
              <h3 className="hww-step-title">{s.title}</h3>
              <div className="hww-step-desc">{s.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
const faqData = [
  { q: "What is a financial service business?", a: "A financial service business provides services related to money management, investments, accounting, taxation, financial planning, loans, insurance, and business advisory. These services help individuals and organizations manage finances effectively, improve financial stability, and support long-term financial growth objectives." },
  { q: "What are the types of financial services?", a: " Financial services include accounting, taxation, auditing, investment advisory, wealth management, asset management, insurance, banking, financial planning, corporate finance, payroll services, and compliance management. Each service supports different financial, operational, and strategic business or individual financial requirements." },
  { q: "What is financial advisory and why is it important?", a: " Financial advisory involves providing expert guidance on budgeting, investments, cash flow, taxation, risk management, and financial planning. It is important because it helps businesses and individuals make informed financial decisions, reduce risks, improve profitability, and achieve long-term financial stability." },
  { q: "What is wealth management service?", a: "Wealth management services focus on managing and growing an individual’s or organization’s financial assets through investment planning, financial advisory, tax optimization, risk management, and long-term financial strategies. The goal is to preserve wealth while supporting sustainable financial growth and future security." },
  { q: "What is asset management service?", a: " Asset management services involve managing investments, financial assets, and portfolios to maximize returns while minimizing financial risks. These services include portfolio analysis, investment planning, risk assessment, and continuous monitoring to support long-term financial performance and asset growth." },
  { q: "What is corporate finance service?", a: "Corporate finance services help businesses manage financial planning, fundraising, budgeting, investments, mergers, acquisitions, and capital structure decisions. These services support business growth, improve financial efficiency, optimize cash flow, and help organizations make strategic financial decisions confidently." },
];
function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <section className="faq-section" style={{padding: '80px 0 0'}}>
      <div className="partners-header2" style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2 className="partners-eyebrow" >Frequently Asked Questions</h2>
      </div>
      <div className="container" style={{width: '100%'}}>
        {/* TITLE */}
        <div className="faq-head">
          <h3 className="faq-h3">Queries That Could <span>Hold You Back</span></h3>
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
      <div className="pg-finances">
        <SEOHead />
      <HeroSection />
      <ApproachSection />
      <RegistrationSection />
      <SessionChangeSection />
      <HowWeWorkSection />
      <FAQSection />
      <BlogSection />
      <CTASection />
      </div>
    </Layout>
  );
}