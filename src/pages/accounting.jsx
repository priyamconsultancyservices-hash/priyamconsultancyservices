import '../css/pages-common.css';
import { useState } from "react";
import CTASection from "../components/HomePage/CTA";
import emailjs from "@emailjs/browser";
import Layout from '@theme/Layout';
const banner = "/img/accounting.webp";
import Head from '@docusaurus/Head';
import BlogSection from "../components/BlogSection";


function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/accounting/";
  const imageUrl = "https://www.priyamconsultancy.com/img/accounting.png";

  return (
    <Head>
      {/* ── Primary Meta ── */}
      <title>Accounting Services in Coimbatore | Bookkeeping Services</title>
      <meta name="description" content="Professional accounting services in Coimbatore offering bookkeeping, tax filing, financial reporting, and compliance support to streamline your business growth. " />
      <meta name="keywords" content="Accounting Services, Virtual Accounting Services, Accounting Company, Outsource Accounting Services, Business Accounting and Book keeping, Professional Accounting Services, Management Accounting and Reporting, Outsourcing of accounting services, Accounting Services for Small Business, Bookkeeping Services" />
      <link rel="canonical" href="https://www.priyamconsultancy.com/accounting/" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Accounting Services in Coimbatore | Bookkeeping Services" />
      <meta property="og:description" content="Professional accounting services in Coimbatore offering bookkeeping, tax filing, financial reporting, and compliance support to streamline your business growth. " />
      <meta property="og:url" content="https://www.priyamconsultancy.com/accounting/" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="PCS Business Solution" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Accounting Services in Coimbatore | Bookkeeping Services" />
      <meta name="twitter:description" content="Professional accounting services in Coimbatore offering bookkeeping, tax filing, financial reporting, and compliance support to streamline your business growth. " />
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
              "@id":"https://www.priyamconsultancy.com/accounting/",
              "name":"accounting"
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
        "@id":"https://www.priyamconsultancy.com/accounting/#service",
        "name":"Accounting Services",
        "serviceType":"Accounting Services",
        "url":"https://www.priyamconsultancy.com/accounting/",
        "description":"Priyam Consultancy provides professional accounting services including bookkeeping, financial accounting, MIS reporting, tax accounting, financial reporting, compliance management and business accounting solutions for businesses across India.",
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
        "name": "accounting",
        "image": ["https://www.priyamconsultancy.com/img/accounting.png"],
        "description": "Best accounting services in Coimbatore offering bookkeeping, financial accounting, MIS reporting, tax accounting, financial reporting, compliance management and business accounting solutions.",
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
        "reviewCount": "6494"
        },
        "offers": {
        "@type": "Offer",
        "url": "https://www.priyamconsultancy.com/accounting/",
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
            "name": "What is an accounting service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Accounting services involve managing financial records, bookkeeping, transaction tracking, financial reporting, tax preparation, payroll accounting, and compliance activities. These services help businesses maintain financial accuracy, improve decision-making, ensure regulatory compliance, and monitor overall financial performance effectively."
            }
          },{
            "@type": "Question",
            "name": "What is MIS reporting in accounting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "MIS (Management Information System) reporting provides structured financial and operational reports that help businesses analyze performance, monitor cash flow, track expenses, and support strategic decision-making. It converts financial data into actionable insights for better business planning and management control."
            }
          },{
            "@type": "Question",
            "name": "What is tax accounting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tax accounting focuses on preparing, managing, and filing taxes according to applicable tax laws and regulations. It includes GST filing, TDS calculations, income tax compliance, tax planning, and maintaining accurate records to reduce risks and ensure lawful financial operations."
            }
          },{
            "@type": "Question",
            "name": "What is financial accounting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Financial accounting involves recording, classifying, and summarizing financial transactions to prepare reports such as balance sheets, profit and loss statements, and cash flow statements. It helps businesses evaluate financial health, maintain transparency, and meet statutory reporting requirements."
            }
          },{
            "@type": "Question",
            "name": "Why choose Priyam Consultancy Services for accounting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Priyam Consultancy Services provides structured, accurate, and compliance-focused accounting solutions tailored to business needs. Our team focuses on financial transparency, timely reporting, tax compliance, and operational efficiency, helping businesses maintain organized financial management and make informed strategic decisions confidently."
            }
          },{
            "@type": "Question",
            "name": "What are the 7 types of accounting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The major types of accounting include Financial Accounting, Management Accounting, Cost Accounting, Tax Accounting, Auditing, Forensic Accounting, and Government Accounting. Each type serves different business, compliance, reporting, and financial management purposes based on organizational requirements and operational objectives."
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
    <section className="hero" id="hero">
      {/* LEFT CONTENT */}
      <div className="hero-left">
        <div className="h-badge"><div className="badge-dot" />Trusted Accounting Solutions</div>
        <h1 className="hero-heading">
          Accounting Partner For <span className="hl lined">Accuracy & Financial </span> Control
        </h1>
        <p className="hero-sub">
          At Priyam Consultancy Services, we offer complete accounting solutions designed to simplify financial management and ensure transparency. From bookkeeping and payroll to GST, TDS, and MIS reporting, we help you maintain organized records, achieve compliance, and make smarter financial decisions with real-time data and expert support.
        </p>
        <div className="hero-actions">
          <a className="btn-fill" href="/contact-us">Explore More <span className="btn-arrow">›</span></a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-right">
        <img
          src={banner}
          alt="Accounting Services Illustration"
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
      <div className="ap-inner">

        {/* LEFT CONTENT */}
        <div className="ap-left">
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Approach in</div>
          </div>
          <h2 className="ap-heading">Accounting  <span>Services</span></h2>
          <p className="ap-intro">
            Every business operates differently, and its accounting system should reflect that. We begin by understanding your operations, revenue model, and reporting needs. This helps us design a system tailored to your business.
          </p>
          <p className="ap-intro">
            We create a structured accounting process where every transaction and entry is accurate. Our approach ensures compliance, consistency, and well-organized financial records. This builds a strong foundation for reliable reporting.
          </p>
          <p className="ap-intro">
            Beyond bookkeeping, we focus on clarity and control through technology and expert review. We deliver timely reports and maintain data accuracy. This enables confident decisions backed by meaningful financial insights.

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
                    <span className="fl-icon">👤</span>
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
                    <span className="fl-icon">🏢</span>
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
                  <span className="fl-icon">✉️</span>
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
                    <span className="phone-flag-icon">📞</span>

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
                  <span className="fl-icon" style={{ top: "0.9rem", transform: "none" }}>💬</span>
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
  { num: "01", tag: "BA", label: "Bookkeeping & Accounting", title: "Accurate Records,  <i>Strong Financial Foundation</i>", desc: ["We provide end-to-end bookkeeping services to record, classify, and reconcile every financial transaction accurately. Our team maintains detailed ledgers, balance sheets, and profit & loss statements. This ensures your financial data is always organized and reliable.", "By maintaining structured records, we keep your business transparent and audit-ready. Our process minimizes errors and improves financial clarity. It creates a strong foundation for compliance and informed decision-making."], chips: ["📈 Investor Access", "🏛️ Strong Governance", "📋 Stock Exchange Listed", "✅ Regulatory Compliance"], time: "Avg. 15–25 working days" },
  { num: "02", tag: "GTA", label: "GST & Tax Accounting", title: "Seamless Compliance,  <i>Zero Penalty Risk</i>", desc: ["We manage GST registration, return filings, e-invoicing, and TDS compliance efficiently. Our team ensures all tax-related processes are handled accurately and on time. This reduces the risk of errors and non-compliance.", "By aligning records with statutory requirements, we help you avoid penalties and audit issues. Our structured approach keeps your tax data consistent and updated. This ensures smooth and hassle-free compliance management."], chips: ["💼 Limited Liability", "🚀 Investor-Ready", "👥 2–200 Shareholders", "📑 Separate Legal Entity"], time: "Avg. 7–12 working days" },
  { num: "03", tag: "PM", label: "Payroll Management", title: "Timely Salaries,  <i>Total Peace of Mind</i>", desc: ["Our payroll services cover salary processing, tax deductions, and statutory benefits like PF, ESI, and bonuses. We ensure every employee is paid accurately and on time. This supports smooth workforce management.", "By maintaining compliance with labour laws and tax regulations, we reduce administrative burden. Our system ensures accuracy and transparency in payroll processes. This builds employee trust and operational efficiency."], chips: ["🤝 Flexible Structure", "🛡️ Limited Liability", "📉 Low Compliance", "💰 Easy Profit Sharing"], time: "Avg. 10–15 working days" },
  { num: "04", tag: "MRFI", label: "MIS Reporting & Financial Insights", title: "Data That Drives  <i>Smarter Decisions</i>", desc: ["We prepare detailed MIS reports that provide insights into profitability, expenses, and business performance. These reports help track key financial metrics consistently. This gives management a clear view of operations.", "By converting financial data into actionable insights, we support better decision-making. Our reports highlight trends, opportunities, and areas of improvement. This enhances efficiency and drives strategic growth."], chips: ["👤 Solo Founder", "🏢 Corporate Benefits", "🔒 Asset Protection", "📊 Easy Compliance"], time: "Avg. 7–10 working days" },
  { num: "05", tag: "ARPM", label: "Accounts Receivable & Payable Management", title: "Efficient Cash Flow, <i>Hassle-Free Operations</i>", desc: ["We manage invoices, collections, and vendor payments with a structured approach. Our team ensures timely follow-ups and accurate tracking of receivables and payables. This improves overall cash flow management.", "By maintaining clear visibility of cash movements, we help avoid delays and disruptions. Our process strengthens liquidity and financial control. This ensures smooth and efficient daily operations."], chips: ["🤝 Shared Ownership", "💡 Easy Formation", "📝 Minimal Compliance", "⚖️ Flexible Agreement"], time: "Avg. 3–7 working days" },
  { num: "06", tag: "BOAS", label: "Back-Office Accounting Support", title: "Reliable Support,  <i>Effortless Financial Management</i>", desc: ["We handle all back-office accounting tasks, including documentation, reconciliation, and audit coordination. Our team ensures every financial record is maintained accurately. This reduces internal workload significantly.", "By managing routine processes efficiently, we allow your team to focus on core business activities. Our support ensures compliance and consistency in financial management. This keeps your operations smooth and well-organized."], chips: ["👤 Full Control", "💸 Minimal Cost", "⚡ Quick Setup", "🏪 SMEs & Freelancers"], time: "Avg. 1–3 working days" },
];
const REG_ICONS = [
  <img src="/img/icon/bookkeeping-accounting.webp" alt="Bookkeeping and Accounting" width="20" height="20" />,
  <img src="/img/icon/gst-tax-accounting.webp" alt="GST and Tax Accounting" width="20" height="20" />,
  <img src="/img/icon/acc-payroll-management.webp" alt="Payroll Management" width="20" height="20" />,
  <img src="/img/icon/mis-reporting.webp" alt="MIS Reporting and Financial Insights" width="20" height="20" />,
  <img src="/img/icon/accounts-receivable-payable.webp" alt="Accounts Receivable and Payable" width="20" height="20" />,
  <img src="/img/icon/back-office-accounting.webp" alt="Back Office Accounting Support" width="20" height="20" />,
];

function RegistrationSection() {
  const [active, setActive] = useState(0);
  const d = REG_DATA[active];
  return (
    <section style={{ padding: "90px 5%", background: "#004168", position: "relative", overflow: "hidden" }}>      <div className="rg-bg-c" style={{ top: "-120px", right: "-120px", width: "400px", height: "400px", border: "1.5px solid rgba(237,131,55,.1)" }} />
      <div className="rg-bg-c" style={{ bottom: "-100px", left: "-80px", width: "300px", height: "300px", border: "1.5px solid rgba(237,131,55,.08)" }} />
      <div style={{ textAlign: "center", marginBottom: "60px", position: "relative", zIndex: 2 }}>
        <div className="partners-header1" style={{ textAlign: 'center' }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Accounting Services Execution Process </h2>

        </div>
        <h3 className="rg-sec-h">Simplified, Accurate, and <i> Insight-Driven Accounting</i> Management Partner</h3>
        <p className="rg-sec-sub">
          Our accounting process at Priyam Consultancy Services is designed for efficiency, precision, and transparency. We combine human expertise with technology to streamline your financial operations, from transaction recording to reporting and compliance.
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
  { num: "01", color: "orange", icon: <img src="/img/icon/sc-discovery-analysis.webp" alt="Discovery and Analysis" width="35" height="35" />, lbl: "Step 01 · Initiation", title: "Discovery & Analysis", desc: "We record, verify, and reconcile transactions regularly to maintain transparency, prevent discrepancies, and ensure ledgers, bank accounts, and financial records remain accurate and up to date.", time: "~1 Working Day", tColor: "blue", even: false, last: false },
  { num: "02", color: "blue", icon: <img src="/img/icon/sc-compliance-tax.webp" alt="Compliance and Tax Alignment" width="35" height="35" />, lbl: "Step 02 · Documentation", title: "Compliance & Tax Alignment", desc: "We manage GST, TDS, and statutory filings, aligning accounting data with compliance calendars to ensure legal adherence, timely submissions, and reduced risk of penalties.", time: "~2-3 Working Days", tColor: "orange", even: true, last: false },
  { num: "03", color: "orange", icon: <img src="/img/icon/sc-reporting-insights.webp" alt="Reporting and Insights" width="35" height="35" />, lbl: "Step 03 · Filing", title: "Reporting & Insights", desc: "We prepare MIS reports, financial statements, and analytical dashboards, providing clear visibility into performance and financial health to support budgeting, planning, and strategic decision-making.", time: "~2-4 Working Days", tColor: "blue", even: false, last: false },
  { num: "04", color: "blue", icon: <img src="/img/icon/sc-continuous-monitoring.webp" alt="Continuous Monitoring and Improvement" width="35" height="35" />, lbl: "Step 04 · Approval", title: "Continuous Monitoring & Improvement", desc: "We conduct regular reviews to identify efficiencies, process improvements, and automation opportunities, ensuring your accounting remains accurate, compliant, and aligned with evolving business and regulatory requirements.", time: "~5-7 Working Days", tColor: "orange", even: true, last: false },


];

function SessionChangeSection() {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "90px 0 100px" }}>      <div className="sc-bg" /><div className="sc-orb sc-orb-a" /><div className="sc-orb sc-orb-b" />
      <div className="sc-inner">
        <div style={{ textAlign: "center", marginBottom: "90px" }}>
          <div className="partners-header1" style={{ textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Business Registration Execution Process</h2>

          </div>
          <h3 className="sc-title">Simplified, Transparent and <em className="sc-title-em">Efficient Business </em>Registration</h3>
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
  { title: "Strategic Accounting Setup", desc: "We assess your financial workflow in detail and design customized accounting structures that streamline operations, improve efficiency, and maintain compliance across all processes consistently.", center: false, icon: <img src="/img/icon/hww-strategic-accounting-setup.webp" alt="Strategic Accounting Setup" width="34" height="34" /> },
  { title: "Dedicated Experts & Transparent Communication", desc: "Our accounting specialists, tax consultants, and compliance professionals collaborate closely, ensuring accuracy, consistency, and clear communication throughout every financial task.", center: false, icon: <img src="/img/icon/hww-dedicated-experts.webp" alt="Dedicated Experts and Transparent Communication" width="34" height="34" /> },
  { title: "Review, Approve & Deliver", desc: "All reports, filings, and financial data are thoroughly reviewed for accuracy and compliance before final approval and submission, ensuring timely and reliable delivery.", center: true, icon: <img src="/img/icon/hww-review-approve-deliver.webp" alt="Review Approve and Deliver" width="34" height="34" /> },
  { title: "Ongoing Support & Financial Insights", desc: "We provide continuous accounting support, monitor compliance changes, and deliver actionable insights to help your business maintain accurate records and make informed decisions.", center: false, icon: <img src="/img/icon/hww-ongoing-support.webp" alt="Ongoing Support and Financial Insights" width="34" height="34" /> },
];

function HowWeWorkSection() {
  return (
    <section style={{ position: "relative", background: "#004168", overflow: "hidden", padding: "60px 5% 81px" }}>      <div className="hww-bg" /><div className="hww-orb hww-orb-1" /><div className="hww-orb hww-orb-2" />
      <div style={{ position: "relative", zIndex: 2, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="partners-header1" style={{ textAlign: 'center' }}>
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>How We Work</div>

          </div>
          <h2 className="hww-title">Strategize Clearly. <span className="hww-accent">Launch Securely.</span></h2>
          <p className="hww-sub">
            We plan and execute your accounting processes with precision, ensuring accuracy, compliance, and seamless financial operations for your business.
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
  { q: "What is an accounting service?", a: "Accounting services involve managing financial records, bookkeeping, transaction tracking, financial reporting, tax preparation, payroll accounting, and compliance activities. These services help businesses maintain financial accuracy, improve decision-making, ensure regulatory compliance, and monitor overall financial performance effectively." },
  { q: "What is MIS reporting in accounting?", a: "MIS (Management Information System) reporting provides structured financial and operational reports that help businesses analyze performance, monitor cash flow, track expenses, and support strategic decision-making. It converts financial data into actionable insights for better business planning and management control." },
  { q: "What is tax accounting?", a: "Tax accounting focuses on preparing, managing, and filing taxes according to applicable tax laws and regulations. It includes GST filing, TDS calculations, income tax compliance, tax planning, and maintaining accurate records to reduce risks and ensure lawful financial operations." },
  { q: "What is financial accounting?", a: "Financial accounting involves recording, classifying, and summarizing financial transactions to prepare reports such as balance sheets, profit and loss statements, and cash flow statements. It helps businesses evaluate financial health, maintain transparency, and meet statutory reporting requirements." },
  { q: "Why choose Priyam Consultancy Services for accounting?", a: "Priyam Consultancy Services provides structured, accurate, and compliance-focused accounting solutions tailored to business needs. Our team focuses on financial transparency, timely reporting, tax compliance, and operational efficiency, helping businesses maintain organized financial management and make informed strategic decisions confidently." },
  { q: "What are the 7 types of accounting?", a: "The major types of accounting include Financial Accounting, Management Accounting, Cost Accounting, Tax Accounting, Auditing, Forensic Accounting, and Government Accounting. Each type serves different business, compliance, reporting, and financial management purposes based on organizational requirements and operational objectives." },
];
function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <section className="faq-section">
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
      <div className="pg-accounting">
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