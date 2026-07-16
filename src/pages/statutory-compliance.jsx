import '../css/pages-common.css';
import { useState } from "react";
import CTASection from "../components/HomePage/CTA";
import Link from '@docusaurus/Link';
import emailjs from "@emailjs/browser";
const banner = "/img/statutory-compliance.webp";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import BlogSection from "../components/BlogSection";


function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/statutory-compliance/";
  const imageUrl = "https://www.priyamconsultancy.com/img/statutory-compliance.png";

  return (
    <Head>
      {/* ── Primary Meta ── */}
      <title>Statutory Compliance Services in Coimbatore | Statutory Compliance</title>
      <meta name="description" content="Reliable statutory compliance services in Coimbatore. Ensure legal adherence, payroll & labor law compliance with expert guidance for smooth business operations." />
      <meta name="keywords" content="Statutory Compliance, Statutory Compliance Services, Statutory Compliance Consultants, HR & Statutory Compliance Services, Statutory Compliance Services Providers, HR and Payroll Statutory Compliance, Statutory Compliance Solutions, Statutory Compliance Outsourcing, Statutory Compliance Company, Labour Statutory Compliances" />
      <link rel="canonical" href="https://www.priyamconsultancy.com/statutory-compliance/" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Statutory Compliance Services in Coimbatore | Statutory Compliance" />
      <meta property="og:description" content="Reliable statutory compliance services in Coimbatore. Ensure legal adherence, payroll & labor law compliance with expert guidance for smooth business operations." />
      <meta property="og:url" content="https://www.priyamconsultancy.com/statutory-compliance/" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="PCS Business Solution" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Statutory Compliance Services in Coimbatore | Statutory Compliance" />
      <meta name="twitter:description" content="Reliable statutory compliance services in Coimbatore. Ensure legal adherence, payroll & labor law compliance with expert guidance for smooth business operations." />
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
              "@id":"https://www.priyamconsultancy.com/statutory-compliance/",
              "name":"statutory-compliance"
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
          "@id":"https://www.priyamconsultancy.com/statutory-compliance/#service",
          "name":"Statutory Compliance",
          "serviceType":"Statutory Compliance Services",
          "url":"https://www.priyamconsultancy.com/statutory-compliance/",
          "description":"Priyam Consultancy provides professional statutory compliance services including GST compliance, TDS filings, PF and ESI compliance, ROC filings, payroll compliance and regulatory compliance management for businesses across India.",
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
        "name": "statutory-compliance",
        "image": ["https://www.priyamconsultancy.com/img/statutory-compliance.png"],
        "description": "Best statutory compliance services in Coimbatore offering GST compliance, TDS filings, PF and ESI compliance, ROC filings, payroll compliance and regulatory compliance management for businesses.",
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
        "reviewCount": "6218"
        },
        "offers": {
        "@type": "Offer",
        "url": "https://www.priyamconsultancy.com/statutory-compliance/",
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
            "name": "What is statutory compliance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Statutory compliance refers to adhering to government-mandated laws, regulations, and legal requirements applicable to a business. This includes labor laws, tax filings, payroll regulations, PF, ESI, TDS, ROC filings, and other statutory obligations necessary for lawful business operations."
            }
          },{
            "@type": "Question",
            "name": "Why is compliance important for a business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Compliance helps businesses operate legally, avoid penalties, maintain financial transparency, and build credibility with clients, investors, and regulatory authorities. Proper compliance management also reduces operational risks and supports sustainable long-term business growth and smooth organizational functioning."
            }
          },{
            "@type": "Question",
            "name": "What are the Big 6 compliance requirements?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The commonly referred Big 6 compliance requirements include GST, TDS, PF, ESI, Professional Tax, and ROC filings. These are essential statutory obligations businesses must manage regularly to maintain legal compliance and avoid penalties or regulatory issues."
            }
          },{
            "@type": "Question",
            "name": "Do small businesses need compliance services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, small businesses also require compliance services to meet legal, tax, labor, and regulatory obligations. Proper compliance management helps avoid penalties, improves operational structure, builds credibility, and ensures smooth business growth from the early stages of operations."
            }
          },{
            "@type": "Question",
            "name": "What is the difference between legal and statutory compliance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Legal compliance refers to following all applicable laws and regulations governing business operations, while statutory compliance specifically relates to mandatory requirements defined under statutory acts such as tax laws, labor laws, payroll regulations, and corporate filing obligations."
            }
          },{
            "@type": "Question",
            "name": "What happens if compliance is missed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Missing compliance requirements can lead to penalties, legal notices, financial liabilities, operational disruptions, and reputational damage. Continued non-compliance may also affect business credibility, regulatory approvals, taxation processes, and future business expansion or investment opportunities."
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
        <div className="h-badge"><div className="badge-dot" />Statutory Compliance</div>
        <h1 className="hero-heading">
          Statutory Compliance<br />
          <span className="hl lined">Partner</span> for Accuracy,<br />
          Reliability &amp; Growth
        </h1>
        <p className="hero-sub">
          Timely filings, audits, and regulatory adherence are critical for your business’s credibility and operational stability. At Priyam Consultancy Services, we simplify compliance management, ensuring your business stays legally secure, avoids penalties, and maintains a strong foundation for growth.
        </p>
        <div className="hero-actions">
          <a className="btn-fill" href="/contact-us">Explore More <span className="btn-arrow">›</span></a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-right">
        <img
          src={banner}
          alt="Statutory Compliance Illustration"
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
      <div className="ap2-inner">

        {/* LEFT CONTENT */}
        <div className="ap-left">
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Approach in</div>
          </div>
          <h2 className="ap2-heading">Statutory   <span>Compliance</span></h2>
          <p className="ap-intro">
            Your business operations and regulatory obligations are unique. That is why your compliance approach must be personalized and well-structured. We begin by understanding your requirements in detail.
          </p>
          <p className="ap-intro">
            We assess your reporting needs and design a clear, step-by-step compliance plan. This covers audits, filings, and statutory responsibilities with accuracy. Everything is managed efficiently and always on schedule.
          </p>
          <p className="ap-intro">
            Statutory compliance brings clarity and peace of mind to your business. We track deadlines, maintain proper documentation, and adapt to regulatory changes. This keeps your business compliant while you focus on growth and performance.

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
  { num: "01", tag: "AFR", label: "Annual Filings & Returns", title: "Timely and accurate <i>statutory filings.</i>", desc: ["We ensure timely and accurate submission of all mandatory filings, including annual returns, GST filings, and tax returns. Our team carefully tracks deadlines and prepares documents with precision. This reduces risks and ensures smooth regulatory compliance.", "By maintaining proper records and timely submissions, we help your business avoid penalties and disruptions. Our structured approach strengthens credibility with authorities and stakeholders. It keeps your operations consistent, compliant, and well-organized."], chips: ["📈 Investor Access", "🏛️ Strong Governance", "📋 Stock Exchange Listed", "✅ Regulatory Compliance"], time: "Avg. 15–25 working days" },
  { num: "02", tag: "ISA", label: "Internal & Statutory Audits", title: "Thorough audits to <i>ensure accuracy</i>", desc: ["Our team conducts detailed internal and statutory audits to verify financial accuracy and compliance. We review transactions, records, and processes to identify gaps or risks. This ensures your business maintains clarity and control.", "With a strong audit framework, we improve transparency and strengthen governance practices. Our insights help you make informed decisions and stay compliant. This builds trust and supports long-term financial stability."], chips: ["💼 Limited Liability", "🚀 Investor-Ready", "👥 2–200 Shareholders", "📑 Separate Legal Entity"], time: "Avg. 7–12 working days" },
  { num: "03", tag: "CG", label: "Corporate Governance", title: "Maintain proper  <i>records and resolutions</i>", desc: ["We support strong corporate governance by maintaining essential records, registers, and resolutions. Our team ensures all documentation is accurate, updated, and compliant with legal standards. This keeps your business structured and accountable.", "By aligning with statutory requirements, we help build trust among stakeholders and authorities. Proper governance reduces risks and improves operational clarity. It ensures your business functions with integrity and discipline."], chips: ["🤝 Flexible Structure", "🛡️ Limited Liability", "📉 Low Compliance", "💰 Easy Profit Sharing"], time: "Avg. 10–15 working days" },
  { num: "04", tag: "TC", label: "Tax Compliance", title: "Accurate tax filings <i>zero penalties.</i>", desc: ["We manage all aspects of tax compliance, including income tax, GST, and other statutory obligations. Our team ensures accurate preparation and timely submission of all returns. This minimizes errors and compliance risks.", "By tracking deadlines and regulatory updates, we help you avoid penalties and maintain financial discipline. Our approach improves transparency and accountability. It ensures smooth and compliant business operations."], chips: ["👤 Solo Founder", "🏢 Corporate Benefits", "🔒 Asset Protection", "📊 Easy Compliance"], time: "Avg. 7–10 working days" },
  { num: "05", tag: "RR", label: "Regulatory Reporting", title: "Complete and compliant  <i>government reporting.</i>", desc: ["We handle end-to-end regulatory reporting, ensuring all required submissions are completed accurately. Our team prepares and files reports as per government norms and timelines. This keeps your business aligned with compliance standards.", "By maintaining consistency and accuracy, we reduce the risk of non-compliance and penalties. Our structured reporting approach enhances transparency. It supports smooth communication with regulatory authorities."], chips: ["🤝 Shared Ownership", "💡 Easy Formation", "📝 Minimal Compliance", "⚖️ Flexible Agreement"], time: "Avg. 3–7 working days" },
  { num: "06", tag: "ELLC", label: "Employee & Labour Law Compliance", title: "Ensure PF, ESI, and other labour law <i>obligations are met efficiently.</i>", desc: ["We ensure timely registration and compliance with PF, ESI, and other labour law requirements. Our team manages filings, documentation, and updates with accuracy. This helps your business meet statutory obligations seamlessly.", "By maintaining proper records and monitoring compliance regularly, we reduce legal risks. Our services support smooth workforce management and operational efficiency. This allows you to focus on growth and employee engagement"], chips: ["👤 Full Control", "💸 Minimal Cost", "⚡ Quick Setup", "🏪 SMEs & Freelancers"], time: "Avg. 1–3 working days" },
];
const REG_ICONS = [
  <img src="/img/icon/annual-filings-returns.webp" alt="Annual Filings and Returns" width="20" height="20" />,
  <img src="/img/icon/internal-statutory-audits.webp" alt="Internal and Statutory Audits" width="20" height="20" />,
  <img src="/img/icon/corporate-governance.webp" alt="Corporate Governance" width="20" height="20" />,
  <img src="/img/icon/tax-compliance.webp" alt="Tax Compliance" width="20" height="20" />,
  <img src="/img/icon/regulatory-reporting.webp" alt="Regulatory Reporting" width="20" height="20" />,
  <img src="/img/icon/employee-labour-law.webp" alt="Employee and Labour Law Compliance" width="20" height="20" />,
];

function RegistrationSection() {
  const [active, setActive] = useState(0);
  const d = REG_DATA[active];
  return (
    <section style={{ padding: "90px 5%", background: "#004168", position: "relative", overflow: "hidden" }}>      <div className="rg-bg-c" style={{ top: "-120px", right: "-120px", width: "400px", height: "400px", border: "1.5px solid rgba(237,131,55,.1)" }} />
      <div className="rg-bg-c" style={{ bottom: "-100px", left: "-80px", width: "300px", height: "300px", border: "1.5px solid rgba(237,131,55,.08)" }} />
      <div style={{ textAlign: "center", marginBottom: "60px", position: "relative", zIndex: 2 }}>
        <div className="partners-header1" style={{ textAlign: 'center' }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Specialized Statutory Compliance Services</h2>
        </div>
        <h3 className="rg-sec-h">Every Requirement Met.  <i> Every Deadline Managed.</i></h3>
        <p className="rg-sec-sub">
          Priyam Consultancy Services provides comprehensive compliance solutions designed to keep your business legally protected and audit-ready.
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
  { num: "01", color: "orange", icon: <img src="/img/icon/sc-discovery-assessment.webp" alt="Discovery and Assessment" width="35" height="35" />, lbl: "Step 01 · Initiation", title: "Discovery & Assessment", desc: "We analyze your business structure, operations, and regulatory obligations to identify compliance requirements, deadlines, and reporting frameworks, ensuring every statutory responsibility is clearly defined.", time: "~1 Working Day", tColor: "blue", even: false, last: false },
  { num: "02", color: "blue", icon: <img src="/img/icon/sc-compliance-planning.webp" alt="Compliance Planning and Scheduling" width="35" height="35" />, lbl: "Step 02 · Documentation", title: "Compliance Planning & Scheduling", desc: "We create a comprehensive compliance calendar covering filings, audits, and statutory obligations, prioritizing tasks by deadlines and regulatory importance to prevent delays and maintain full compliance.", time: "~2-3 Working Days", tColor: "orange", even: true, last: false },
  { num: "03", color: "orange", icon: <img src="/img/icon/sc-documentation-filing.webp" alt="Documentation and Filing" width="35" height="35" />, lbl: "Step 03 · Filing", title: "Documentation & Filing", desc: "We prepare, verify, and submit statutory forms, returns, and registers accurately and on time, reducing errors, avoiding penalties, and ensuring complete compliance without administrative delays.", time: "~2-4 Working Days", tColor: "blue", even: false, last: false },
  { num: "04", color: "blue", icon: <img src="/img/icon/sc-monitoring-review.webp" alt="Monitoring and Review" width="35" height="35" />, lbl: "Step 04 · Approval", title: "Monitoring & Review", desc: "We continuously track regulatory changes, filing schedules, and audit requirements, conducting regular reviews to maintain accurate records and ensure readiness for inspections and regulatory verifications.", time: "~5-7 Working Days", tColor: "orange", even: true, last: false },
  { num: "05", color: "orange", icon: <img src="/img/icon/sc-continuous-support.webp" alt="Continuous Support and Updates" width="35" height="35" />, lbl: "Step 05 · Complete", title: "Continuous Support & Updates", desc: "We provide ongoing guidance as regulations evolve, updating processes and assisting with filings to keep your business compliant, avoid penalties, and support long-term operational growth.", time: "~1-2 Working Days", tColor: "blue", even: false, last: false },

];

function SessionChangeSection() {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "90px 0 100px" }}>      <div className="sc-bg" /><div className="sc-orb sc-orb-a" /><div className="sc-orb sc-orb-b" />
      <div className="sc-inner">
        <div style={{ textAlign: "center", marginBottom: "90px" }}>
          <div className="partners-header1" style={{ textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px' }}>Our Statutory Compliance Execution Process</h2>

          </div>
          <h3 className="sc-title">Streamlined, Transparent, and <em className="sc-title-em">Accurate Compliance Management </em></h3>
          <p className="sc-sub">
            Our statutory compliance process is designed to reduce risk, save time, and ensure complete regulatory adherence. Every step is managed strategically, accurately, and customized to your business requirements.
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
  { title: "Strategic Planning & Execution", desc: "We begin by understanding your business operations, compliance obligations, and reporting requirements. Every filing, audit, and statutory task is carefully planned to ensure complete legal adherence and operational efficiency.", center: false, icon: <img src="/img/icon/hww-strategic-planning-execution.webp" alt="Strategic Planning and Execution" width="34" height="34" /> },
  { title: "Specialized Team & Accountability", desc: "Our team of compliance experts, auditors, and legal advisors manages every statutory obligation with precision. Clear roles and accountability ensure smooth execution, accuracy, and peace of mind for your business.", center: false, icon: <img src="/img/icon/hww-specialized-team-accountability.webp" alt="Specialized Team and Accountability" width="34" height="34" /> },
  { title: "Review, Verify & Submit", desc: "Before any filing or submission, we conduct thorough reviews to ensure accuracy, completeness, and compliance. Submissions are finalized only after meeting all statutory standards, protecting your business from risks.", center: true, icon: <img src="/img/icon/hww-review-verify-submit.webp" alt="Review Verify and Submit" width="34" height="34" /> },
  { title: "Ongoing Support & Updates", desc: "We continuously monitor regulatory changes, deadlines, and compliance requirements. Our proactive guidance ensures your business stays fully compliant, avoids penalties, and adapts efficiently to evolving legal obligations.", center: false, icon: <img src="/img/icon/hww-ongoing-support-updates.webp" alt="Ongoing Support and Updates" width="34" height="34" /> },
];

function HowWeWorkSection() {
  return (
    <section style={{ position: "relative", background: "#004168", overflow: "hidden", padding: "60px 5% 81px" }}>      <div className="hww-bg" /><div className="hww-orb hww-orb-1" /><div className="hww-orb hww-orb-2" />
      <div style={{ position: "relative", zIndex: 2, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="partners-header1" style={{ textAlign: 'center' }}>
            <div className="partners-eyebrow" style={{ marginBottom: '20px' }}>How We Work</div>

          </div>
          <h2 className="hww-title">Compliance Managed Clearly.  <span className="hww-accent">Delivered Reliably.</span></h2>
          <p className="hww-sub">
            We handle all regulatory and statutory requirements accurately, on time, and with complete transparency
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
  { q: "What is statutory compliance?", a: "Statutory compliance refers to adhering to government-mandated laws, regulations, and legal requirements applicable to a business. This includes labor laws, tax filings, payroll regulations, PF, ESI, TDS, ROC filings, and other statutory obligations necessary for lawful business operations." },
  { q: "Why is compliance important for a business?", a: "Compliance helps businesses operate legally, avoid penalties, maintain financial transparency, and build credibility with clients, investors, and regulatory authorities. Proper compliance management also reduces operational risks and supports sustainable long-term business growth and smooth organizational functioning." },
  { q: "What are the Big 6 compliance requirements?", a: "The commonly referred Big 6 compliance requirements include GST, TDS, PF, ESI, Professional Tax, and ROC filings. These are essential statutory obligations businesses must manage regularly to maintain legal compliance and avoid penalties or regulatory issues." },
  { q: "Do small businesses need compliance services?", a: "Yes, small businesses also require compliance services to meet legal, tax, labor, and regulatory obligations. Proper compliance management helps avoid penalties, improves operational structure, builds credibility, and ensures smooth business growth from the early stages of operations." },
  { q: "What is the difference between legal and statutory compliance?", a: " Legal compliance refers to following all applicable laws and regulations governing business operations, while statutory compliance specifically relates to mandatory requirements defined under statutory acts such as tax laws, labor laws, payroll regulations, and corporate filing obligations." },
  { q: "What happens if compliance is missed?", a: "Missing compliance requirements can lead to penalties, legal notices, financial liabilities, operational disruptions, and reputational damage. Continued non-compliance may also affect business credibility, regulatory approvals, taxation processes, and future business expansion or investment opportunities" },
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
      <div className="pg-statutory">
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