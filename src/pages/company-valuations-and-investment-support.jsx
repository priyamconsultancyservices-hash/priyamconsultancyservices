import '../css/pages-common.css';
import { useState } from "react";
import CTASection from "../components/HomePage/CTA";
import Link from '@docusaurus/Link';
const banner = "/img/inversment.webp";
import emailjs from "@emailjs/browser";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import BlogSection from "../components/BlogSection";


function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/company-valuations-and-investment-support";
  const imageUrl = "https://www.priyamconsultancy.com/img/company-valuations-and-investment-support.png";

  return (
    <Head>
      {/* ── Primary Meta ── */}
      <title>Business Valuation & Investment Advisory Services in India | PCS </title>
      <meta name="description" content=" Expert company valuation and investment support services in India. Get accurate financial insights, strategic guidance, and trusted advisory for business growth. " />
      <meta name="keywords" content="Investment Support, Investment and Company Valuation, Investment Support Services, Company Valuation Services, Business Valuation Services, Investment Consultancy Services, Financial and Investment Services, Investment Support Services in India, Investment Valuation Services, Investment Service Consultant" />
      <link rel="canonical" href="https://www.priyamconsultancy.com/company-valuations-and-investment-support/" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Business Valuation & Investment Advisory Services in India | PCS " />
      <meta property="og:description" content=" Expert company valuation and investment support services in India. Get accurate financial insights, strategic guidance, and trusted advisory for business growth. " />
      <meta property="og:url" content="https://www.priyamconsultancy.com/company-valuations-and-investment-support/" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Priyam Consultancy Services" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Business Valuation & Investment Advisory Services in India | PCS " />
      <meta name="twitter:description" content=" Expert company valuation and investment support services in India. Get accurate financial insights, strategic guidance, and trusted advisory for business growth. " />
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
              "@id":"https://www.priyamconsultancy.com/company-valuations-and-investment-support/",
              "name":"company-valuations-and-investment-support"
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
        "@id":"https://www.priyamconsultancy.com/company-valuations-and-investment-support/#service",
        "name":"Company Valuations and Investment Support",
        "serviceType":"Company Valuation and Investment Support Services",
        "url":"https://www.priyamconsultancy.com/company-valuations-and-investment-support/",
        "description":"Priyam Consultancy provides professional company valuation and investment support services including business valuation, financial analysis, investor readiness, fundraising support, due diligence assistance and strategic investment consulting for businesses across India.",
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
        "name": "company-valuations-and-investment-support",
        "image": ["https://www.priyamconsultancy.com/img/inversment.png"],
        "description": "Best company valuation and investment support services in Coimbatore offering business valuation, financial analysis, investor readiness, fundraising support, due diligence assistance and strategic investment consulting.",
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
        "reviewCount": "6073"
        },
        "offers": {
        "@type": "Offer",
        "url": "https://www.priyamconsultancy.com/company-valuations-and-investment-support/",
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
            "name": "What is company valuation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Company valuation is the process of determining the financial worth of a business based on factors such as revenue, assets, profitability, market position, growth potential, and financial performance. It helps businesses understand their market value for investment, mergers, fundraising, or strategic planning purposes."
            }
          },{
            "@type": "Question",
            "name": "How do you value a company for investment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A company is valued for investment by analyzing financial statements, revenue models, cash flow, assets, liabilities, market conditions, industry trends, and growth potential. Various valuation methods are applied to determine a fair and realistic business value for investors and stakeholders."
            }
          },{
            "@type": "Question",
            "name": "What are the main valuation methods?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Common company valuation methods include Discounted Cash Flow (DCF), Comparable Company Analysis, Asset-Based Valuation, Market Capitalization Method, Earnings Multiplier Method, and Precedent Transaction Analysis. The suitable method depends on the business model, industry, and investment objectives."
            }
          },{
            "@type": "Question",
            "name": "What is the difference between investment and valuation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Valuation determines the financial worth of a business, while investment refers to providing funds into the business for ownership, returns, or growth opportunities. Valuation helps investors assess risk, pricing, and potential returns before making investment decisions."
            }
          },{
            "@type": "Question",
            "name": "What are investment support services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Investment support services include business valuation, financial analysis, investor presentations, due diligence support, fundraising strategy, financial forecasting, and investment readiness consulting. These services help businesses attract investors, improve financial transparency, and support successful funding opportunities."
            }
          },{
            "@type": "Question",
            "name": "Why is valuation important before investment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Valuation helps determine a company’s fair market worth before investment discussions. It supports informed decision-making, improves negotiation clarity, reduces financial risk, and helps investors and business owners establish realistic expectations regarding ownership, funding, and future growth potential."
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
        <div className="h-badge"><div className="badge-dot" />Business Value Optimization </div>
        <h1 className="hero-heading">
          Unlock True Business
          <span className="hl lined">Value with</span> Expert
          Valuation &amp; Investment
        </h1>
        <p className="hero-sub">
          We help you see beyond the balance sheet. At Priyam Consultancy Services, our valuation and investment experts provide accurate, data-backed insights that guide funding, mergers, acquisitions, and growth decisions – empowering you to build sustainable strategies rooted in financial strength, long-term value, and business excellence.
        </p>
        <div className="hero-actions">
          <a className="btn-fill" href="/contact-us">Explore More <span className="btn-arrow">›</span></a>
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
      <div className="ap2-inner">

        {/* LEFT CONTENT */}
        <div className="ap-left">
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Approach in</div>
          </div>
          <h2 className="ap2-heading">Company   <span>Valuation and Investment</span> Support</h2>
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
  { num: "01", tag: "BVFM", label: "Business Valuation & Financial Modeling", title: "Know Your <i>True Worth</i>", desc: ["We begin by understanding your business model, assets, financial statements, and market positioning in detail. This helps identify key value drivers and industry benchmarks. Our approach ensures your valuation is accurate and aligned with real market condition", "By combining financial modeling with data-driven insights, we create a clear picture of your business worth. This supports strategic planning and investor communication. It enables confident financial decisions backed by reliable analysis."], chips: ["📈 Investor Access", "🏛️ Strong Governance", "📋 Stock Exchange Listed", "✅ Regulatory Compliance"], time: "Avg. 15–25 working days" },
  { num: "02", tag: "IRFS", label: "Investment Readiness & Funding Support", title: "Prepare, <i> Pitch and Prosper.</i>", desc: ["Our experts prepare your business for funding by structuring financials and refining valuation strategies. We ensure your business meets investor expectations and industry standards. This strengthens your position during funding discussions.", "From pitch preparation to investor alignment, we support every stage of the process. Our approach improves credibility and presentation. It increases your chances of securing the right funding for growth."], chips: ["💼 Limited Liability", "🚀 Investor-Ready", "👥 2–200 Shareholders", "📑 Separate Legal Entity"], time: "Avg. 7–12 working days" },
  { num: "03", tag: "MAA", label: "Mergers & Acquisitions Advisory", title: "Seamless Deals,  <i>Stronger Growth</i>", desc: ["We provide end-to-end support for mergers and acquisitions with detailed financial analysis. Our team evaluates financial data, projections, and deal structures carefully. This ensures informed decision-making throughout the transaction.", "By identifying risks and opportunities, we help you negotiate better terms. Our structured approach ensures smooth execution and compliance. This leads to successful and value-driven business deals."], chips: ["🤝 Flexible Structure", "🛡️ Limited Liability", "📉 Low Compliance", "💰 Easy Profit Sharing"], time: "Avg. 10–15 working days" },
  { num: "04", tag: "ESV", label: "Equity & Stakeholder Valuation", title: "Fair Value for <i>Every Share</i>", desc: ["We assess equity distribution and stakeholder value using accurate financial data and valuation methods. This ensures fairness and transparency in ownership structures. It helps maintain balance among stakeholders.", "Our insights support strategic decisions related to investments, exits, and restructuring. We present clear and reliable valuation reports. This builds trust and supports long-term business relationships."], chips: ["👤 Solo Founder", "🏢 Corporate Benefits", "🔒 Asset Protection", "📊 Easy Compliance"], time: "Avg. 7–10 working days" },
  { num: "05", tag: "FDD", label: "Financial Due Diligence", title: "Transparency Before <i>Every Transaction</i>", desc: ["We conduct thorough financial due diligence to verify data accuracy and compliance. Our team reviews financial records, reports, and operational metrics in detail. This helps identify risks before any transaction.", "By ensuring transparency and reliability, we strengthen investor confidence. Our process minimizes uncertainties and supports informed decisions. It ensures secure and well-evaluated financial transactions."], chips: ["🤝 Shared Ownership", "💡 Easy Formation", "📝 Minimal Compliance", "⚖️ Flexible Agreement"], time: "Avg. 3–7 working days" },
  { num: "06", tag: "GES", label: "Growth & Expansion Strategy", title: "Plan Smart,  <i>Scale Confidently</i>", desc: ["We develop growth strategies based on financial insights, market trends, and business performance. Our approach focuses on scalability and long-term sustainability. This helps your business expand with clarity and direction.", "As your business evolves, we continuously refine strategies and financial plans. This keeps your growth aligned with market dynamics. It ensures you are always prepared for new opportunities."], chips: ["👤 Full Control", "💸 Minimal Cost", "⚡ Quick Setup", "🏪 SMEs & Freelancers"], time: "Avg. 1–3 working days" },
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
    <section style={{ padding: "90px 5%", background: "#004168", position: "relative", overflow: "hidden" }}>      <div className="rg-bg-c" style={{ top: "-120px", right: "-120px", width: "400px", height: "400px", border: "1.5px solid rgba(237,131,55,.1)" }} />
      <div className="rg-bg-c" style={{ bottom: "-100px", left: "-80px", width: "300px", height: "300px", border: "1.5px solid rgba(237,131,55,.08)" }} />
      <div style={{ textAlign: "center", marginBottom: "60px", position: "relative", zIndex: 2 }}>
        <div className="partners-header1" style={{ textAlign: 'center' }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Specialized Valuation and Investment Services</h2>

        </div>
        <h3 className="rg-sec-h">Accurate Insights. <i> Strategic Decisions.</i> Confident Growth.</h3>
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
  { num: "01", color: "orange", icon: <img src="/img/icon/sc-business-valuation.webp" alt="Business Valuation" width="35" height="35" />, lbl: "Step 01 · Initiation", title: "Business Valuation", desc: "We provide comprehensive valuation services to determine your business’s true economic worth based on performance, assets, and potential, supporting informed decisions, funding, or strategic transactions.", time: "~1 Working Day", tColor: "blue", even: false, last: false },
  { num: "02", color: "blue", icon: <img src="/img/icon/sc-financial-modeling.webp" alt="Financial Modeling and Forecasting" width="35" height="35" />, lbl: "Step 02 · Documentation", title: "Financial Modeling & Forecasting", desc: "We develop dynamic financial models and forecasts that simulate scenarios, assess profitability and liquidity, and provide stakeholders a clear view of future financial performance and scalability.", time: "~2-3 Working Days", tColor: "orange", even: true, last: false },
  { num: "03", color: "orange", icon: <img src="/img/icon/sc-investment-readiness.webp" alt="Investment Readiness Assessment" width="35" height="35" />, lbl: "Step 03 · Filing", title: "Investment Readiness Assessment", desc: "We evaluate financial stability, governance, and documentation to ensure your business meets investor expectations, presenting a credible and well-prepared case for funding or strategic partnerships.", time: "~2-4 Working Days", tColor: "blue", even: false, last: false },
  { num: "04", color: "blue", icon: <img src="/img/icon/sc-mergers-acquisitions.webp" alt="Mergers and Acquisitions Support" width="35" height="35" />, lbl: "Step 04 · Approval", title: "Mergers & Acquisitions Support", desc: "We guide you through due diligence, valuation, and deal structuring, helping negotiate favorable terms and ensure seamless financial integration throughout the merger or acquisition process.", time: "~5-7 Working Days", tColor: "orange", even: true, last: false },
  { num: "05", color: "orange", icon: <img src="/img/icon/sc-investor-relations.webp" alt="Investor Relations and Strategy" width="35" height="35" />, lbl: "Step 05 · Complete", title: "Investor Relations & Strategy", desc: "We strengthen investor communications through accurate reporting and valuation insights, building confidence, supporting transparency, and fostering long-term relationships that drive sustainable financial growth.", time: "~1-2 Working Days", tColor: "blue", even: false, last: false },
  { num: "06", color: "blue", icon: <img src="/img/icon/sc-regulatory-compliance.webp" alt="Regulatory and Compliance Advisory" width="35" height="35" />, lbl: "Step 06 · Complete", title: "Regulatory & Compliance Advisory", desc: "We ensure all valuations and reports comply with legal, accounting, and tax standards, reducing risks and enhancing credibility during audits, reviews, and investor evaluations.", time: "~2-3 Working Days", tColor: "orange", even: true, last: false },


];

function SessionChangeSection() {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "90px 0 100px", background:'#fff' }}>      <div className="sc-bg" /><div className="sc-orb sc-orb-a" /><div className="sc-orb sc-orb-b" />
      <div className="sc-inner">
        <div style={{ textAlign: "center", marginBottom: "90px" }}>
          <div className="partners-header1" style={{ textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Company Valuation and Investment Support Execution Process</h2>

          </div>
          <h3 className="sc-title">Structured, Transparent, and <em className="sc-title-em">Value-Driven Advisory </em></h3>
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
  { title: "Strategic Evaluation & Planning", desc: "We begin by analyzing your business objectives, market presence, and financial performance. Our strategies are built to highlight your business strengths and maximize value through accurate, transparent valuations.", center: false, icon: <img src="/img/icon/hww-strategic-evaluation.webp" alt="Strategic Evaluation and Planning" width="34" height="34" /> },
  { title: "Expert Team & Proven Methodology", desc: "Our team of financial analysts, valuation experts, and investment advisors brings deep industry experience and analytical rigor to every project. Each step is data-backed, methodical, and aligned with global valuation standards.", center: false, icon: <img src="/img/icon/hww-expert-team-methodology.webp" alt="Expert Team and Proven Methodology" width="34" height="34" /> },
  { title: "Review, Validate & Present", desc: "Before finalizing, we review all data models, assumptions, and projections for accuracy. We then present findings in a clear, investor-ready format — ensuring your business is positioned confidently in every negotiation or funding discussion.", center: true, icon: <img src="/img/icon/hww-review-validate-present.webp" alt="Review Validate and Present" width="34" height="34" /> },
  { title: "Ongoing Support & Strategic Guidance", desc: "We provide continuous support post-valuation, offering actionable insights for investment decisions, funding rounds, and growth planning, ensuring your business leverages its true value effectively and sustainably.", center: false, icon: <img src="/img/icon/hww-ongoing-support-guidance.webp" alt="Ongoing Support and Strategic Guidance" width="34" height="34" /> },
];

function HowWeWorkSection() {
  return (
    <section style={{ position: "relative", background: "#004168", overflow: "hidden", padding: "60px 5% 81px" }}>      <div className="hww-bg" /><div className="hww-orb hww-orb-1" /><div className="hww-orb hww-orb-2" />
      <div style={{ position: "relative", zIndex: 2, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="partners-header1" style={{ textAlign: 'center' }}>
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
  { q: "What is company valuation?", a: "Company valuation is the process of determining the financial worth of a business based on factors such as revenue, assets, profitability, market position, growth potential, and financial performance. It helps businesses understand their market value for investment, mergers, fundraising, or strategic planning purposes." },
  { q: "How do you value a company for investment?", a: "A company is valued for investment by analyzing financial statements, revenue models, cash flow, assets, liabilities, market conditions, industry trends, and growth potential. Various valuation methods are applied to determine a fair and realistic business value for investors and stakeholders" },
  { q: "What are the main valuation methods?", a: "Common company valuation methods include Discounted Cash Flow (DCF), Comparable Company Analysis, Asset-Based Valuation, Market Capitalization Method, Earnings Multiplier Method, and Precedent Transaction Analysis. The suitable method depends on the business model, industry, and investment objectives." },
  { q: "What is the difference between investment and valuation?", a: "Valuation determines the financial worth of a business, while investment refers to providing funds into the business for ownership, returns, or growth opportunities. Valuation helps investors assess risk, pricing, and potential returns before making investment decisions." },
  { q: "What are investment support services?", a: "Investment support services include business valuation, financial analysis, investor presentations, due diligence support, fundraising strategy, financial forecasting, and investment readiness consulting. These services help businesses attract investors, improve financial transparency, and support successful funding opportunities" },
  { q: "Why is valuation important before investment?", a: "Valuation helps determine a company’s fair market worth before investment discussions. It supports informed decision-making, improves negotiation clarity, reduces financial risk, and helps investors and business owners establish realistic expectations regarding ownership, funding, and future growth potential" },
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
      <div className="pg-cvis">
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