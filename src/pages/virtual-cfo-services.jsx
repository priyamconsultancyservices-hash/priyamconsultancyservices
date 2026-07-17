import '../css/pages-common.css';
import { useState } from "react";
import CTASection from "../components/HomePage/CTA";
import emailjs from "@emailjs/browser";
import Layout from '@theme/Layout';
const banner = "/img/virtual-cfo.webp";
import Head from '@docusaurus/Head';
import BlogSection from "../components/BlogSection";


function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/virtual-cfo-services/";
  const imageUrl = "https://www.priyamconsultancy.com/img/virtual-cfo.png";

  return (
    <Head>
      {/* ── Primary Meta ── */}
      <title>Empower Your Business with Expert Virtual CFO Services in Coimbatore </title>
      <meta name="description" content="Empower your business with expert Virtual CFO services in Coimbatore. Get financial planning, compliance, cash flow management, and strategic growth support." />
      <meta name="keywords" content="Virtual CFO Services, Outsourced VCFO Services, Chief Financial Officer Services, VCFO Services, virtual CFO Service Providers, virtual CFOS Provide, Outsourcing CFO Services, Virtual CFO Solution, Virtual CFO Services in India, Fractional CFO Services " />
      <link rel="canonical" href="https://www.priyamconsultancy.com/virtual-cfo-services/" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Empower Your Business with Expert Virtual CFO Services in Coimbatore " />
      <meta property="og:description" content="Empower your business with expert Virtual CFO services in Coimbatore. Get financial planning, compliance, cash flow management, and strategic growth support." />
      <meta property="og:url" content="https://www.priyamconsultancy.com/virtual-cfo-services/" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="PCS Business Solution" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Empower Your Business with Expert Virtual CFO Services in Coimbatore " />
      <meta name="twitter:description" content="Empower your business with expert Virtual CFO services in Coimbatore. Get financial planning, compliance, cash flow management, and strategic growth support." />
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
                "@id":"https://www.priyamconsultancy.com/virtual-cfo-services/",
                "name":"virtual-cfo-services"
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
          "@id":"https://www.priyamconsultancy.com/virtual-cfo-services/#service",
          "name":"Virtual CFO Services",
          "serviceType":"Virtual CFO Services",
          "url":"https://www.priyamconsultancy.com/virtual-cfo-services/",
          "description":"Priyam Consultancy provides professional Virtual CFO services including financial planning, budgeting, cash flow management, financial reporting, business forecasting, compliance monitoring, profitability analysis and strategic financial advisory for businesses across India.",
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
        "name": "virtual-cfo-services",
        "image": ["https://www.priyamconsultancy.com/img/virtual-cfo.png"],
        "description": "Best Virtual CFO services in Coimbatore offering financial planning, budgeting, cash flow management, business forecasting, profitability analysis and strategic financial advisory for businesses.",
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
        "reviewCount": "6359"
        },
        "offers": {
        "@type": "Offer",
        "url": "https://www.priyamconsultancy.com/virtual-cfo-services/",
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
            "name": "What is included in virtual CFO services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Virtual CFO services typically include financial planning, budgeting, cash flow management, financial reporting, compliance monitoring, business forecasting, profitability analysis, strategic advisory, and investor reporting. These services help businesses improve financial control, decision-making, and long-term growth planning without hiring a full-time CFO."
            }
          },{
            "@type": "Question",
            "name": "What does a Virtual CFO do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Virtual CFO manages and oversees a company’s financial strategy, reporting, budgeting, cash flow, and business planning. They provide financial insights, risk management support, and strategic guidance that help businesses improve profitability, operational efficiency, and overall financial performance."
            }
          },{
            "@type": "Question",
            "name": "Who needs a Virtual CFO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Startups, small businesses, growing companies, and organizations lacking in-house financial leadership can benefit from Virtual CFO services. Businesses seeking better financial planning, strategic guidance, investor readiness, cost optimization, or scalable financial management often require Virtual CFO support."
            }
          },{
            "@type": "Question",
            "name": "How can Virtual CFOs help startups manage finances?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Virtual CFOs help startups manage finances through budgeting, cash flow forecasting, fundraising support, financial planning, expense control, and strategic decision-making. They provide structured financial guidance that helps startups improve financial discipline, reduce risks, and plan sustainable business growth effectively."
            }
          },{
            "@type": "Question",
            "name": "What is the difference between an accountant and a Virtual CFO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An accountant primarily handles bookkeeping, tax filing, and financial record maintenance, while a Virtual CFO focuses on financial strategy, forecasting, business planning, profitability improvement, and decision-making support. Virtual CFOs provide higher-level financial guidance aligned with long-term business growth objectives."
            }
          },{
            "@type": "Question",
            "name": "Are virtual CFO services affordable for small businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Virtual CFO services are cost-effective for small businesses because they provide expert financial leadership without the expense of hiring a full-time CFO. Businesses gain strategic financial support, planning expertise, and operational guidance through flexible and scalable service models."
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
        <div className="h-badge"><div className="badge-dot" />Scalable CFO Solutions </div>
        <h1 className="hero-heading">
          Virtual CFO Services
          for <span className="hl lined">Growth &amp; Profitability</span>
          with Financial Clarity
        </h1>
        <p className="hero-sub">
          Gain strategic financial guidance and actionable insights for your business. From budgeting and forecasting to financial reporting and risk management, our Virtual CFO services help you make informed decisions, optimize cash flow, and drive sustainable growth with confidence.
        </p>
        <div className="hero-actions">
          <a className="btn-fill" href="/contact-us">Explore More <span className="btn-arrow">›</span></a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-right">
        <img
          src={banner}
          alt="Virtual CFO Illustration"
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
          <h2 className="ap2-heading">Virtual  <span>CFO Services</span></h2>
          <p className="ap-intro">
            Every business has unique financial goals, challenges, and growth plans. We begin by understanding your operations, revenue streams, and priorities. This helps us align financial strategies with your long-term vision.
          </p>
          <p className="ap-intro">
            We craft a tailored financial management approach covering budgeting, reporting, and advisory. Each element is designed to support stability, efficiency, and informed decision-making. Our process ensures your finances are structured and goal-oriented.          </p>
          <p className="ap-intro">
            Financial management is not just about numbers, but clarity and control. We analyze data, optimize processes, and deliver actionable insights. This empowers confident decisions while you focus on growth and profitability.

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
  { num: "01", tag: "FPB", label: "Financial Planning & Budgeting", title: "Strategic plans for <i>sustainable financial growth</i>", desc: ["We develop realistic budgets, forecasts, and long-term financial plans tailored to your business. Our approach analyzes revenue streams, expenses, and future projections in detail. This ensures your financial strategy is practical and growth-oriented.", "By aligning financial planning with business goals, we help optimize resource allocation and control costs. Our structured approach improves stability and preparedness. It enables your business to grow confidently with clear financial direction."], chips: ["📈 Investor Access", "🏛️ Strong Governance", "📋 Stock Exchange Listed", "✅ Regulatory Compliance"], time: "Avg. 15–25 working days" },
  { num: "02", tag: "MRA", label: "Management Reporting & Analytics", title: "Clear insights for informed <i>business decisions</i>", desc: ["We deliver timely and accurate reports, dashboards, and financial summaries. These track performance, cash flow, and key business metrics consistently. This gives you a clear view of your financial health.", "By simplifying complex data into actionable insights, we support better decision-making. Our reports highlight opportunities, risks, and trends effectively. This enhances transparency and strengthens stakeholder confidence."], chips: ["💼 Limited Liability", "🚀 Investor-Ready", "👥 2–200 Shareholders", "📑 Separate Legal Entity"], time: "Avg. 7–12 working days" },
  { num: "03", tag: "CPA", label: "Cost & Profitability Analysis", title: "Maximize efficiency and optimize <i>profits effectively</i>", desc: ["We analyze your cost structure, revenue streams, and operational processes in depth. Our goal is to identify inefficiencies and areas for cost reduction. This helps improve overall financial performance.", "By optimizing resources and enhancing margins, we support smarter business decisions. Our insights reduce waste and improve profitability. This drives efficiency and ensures long-term sustainable growth."], chips: ["🤝 Flexible Structure", "🛡️ Limited Liability", "📉 Low Compliance", "💰 Easy Profit Sharing"], time: "Avg. 10–15 working days" },
  { num: "04", tag: "CFM", label: "Cash Flow Management", title: "Ensure liquidity and smooth <i>operations consistently</i>", desc: ["We manage your cash flow to ensure consistent liquidity and operational stability. Our team monitors inflows, outflows, and working capital requirements closely. This prevents disruptions in daily operations.", "By forecasting cash needs and planning for contingencies, we reduce financial risks. Our approach improves cash efficiency and control. It ensures your business runs smoothly without financial bottlenecks."], chips: ["👤 Solo Founder", "🏢 Corporate Benefits", "🔒 Asset Protection", "📊 Easy Compliance"], time: "Avg. 7–10 working days" },
  { num: "05", tag: "FIA", label: "Fundraising & Investment Advisory", title: "Guided capital and investment <i>decisions confidently</i>", desc: ["We assist with capital raising, investor communication, and funding strategies. Our team evaluates your financial needs and identifies suitable investment options. This supports your growth and expansion plans.", "By preparing strong financial insights and strategies, we enhance investor confidence. We help secure funding while maintaining financial discipline. This ensures sustainable and well-planned business growth."], chips: ["🤝 Shared Ownership", "💡 Easy Formation", "📝 Minimal Compliance", "⚖️ Flexible Agreement"], time: "Avg. 3–7 working days" },
  { num: "06", tag: "RCA", label: "Risk & Compliance Advisory", title: "Mitigate risks and maintain <i>regulatory compliance</i>", desc: ["We monitor financial compliance, statutory requirements, and potential business risks. Our team ensures your operations align with current regulations and standards. This reduces exposure to legal and financial issues.", "By implementing proactive risk management strategies, we safeguard your business stability. Our approach minimizes penalties and enhances credibility. It enables confident operations in a changing regulatory environment."], chips: ["👤 Full Control", "💸 Minimal Cost", "⚡ Quick Setup", "🏪 SMEs & Freelancers"], time: "Avg. 1–3 working days" },
];
const REG_ICONS = [
  <img src="/img/icon/financial-planning-budgeting.webp" alt="Financial Planning and Budgeting" width="20" height="20" />,
  <img src="/img/icon/management-reporting-analytics.webp" alt="Management Reporting and Analytics" width="20" height="20" />,
  <img src="/img/icon/cost-profitability-analysis.webp" alt="Cost and Profitability Analysis" width="20" height="20" />,
  <img src="/img/icon/cashflow-management.webp" alt="Cash Flow Management" width="20" height="20" />,
  <img src="/img/icon/fundraising-investment-advisory.webp" alt="Fundraising and Investment Advisory" width="20" height="20" />,
  <img src="/img/icon/risk-compliance-advisory.webp" alt="Risk and Compliance Advisory" width="20" height="20" />,
];

function RegistrationSection() {
  const [active, setActive] = useState(0);
  const d = REG_DATA[active];
  return (
    <section style={{ padding: "90px 5%", background: "#004168", position: "relative", overflow: "hidden" }}>      <div className="rg-bg-c" style={{ top: "-120px", right: "-120px", width: "400px", height: "400px", border: "1.5px solid rgba(237,131,55,.1)" }} />
      <div className="rg-bg-c" style={{ bottom: "-100px", left: "-80px", width: "300px", height: "300px", border: "1.5px solid rgba(237,131,55,.08)" }} />
      <div style={{ textAlign: "center", marginBottom: "60px", position: "relative", zIndex: 2 }}>
        <div className="partners-header1" style={{ textAlign: 'center' }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Specialized Virtual CFO Services</h2>

        </div>
        <h3 className="rg-sec-h">Strategic Insights. <i> Data-Driven Decisions.</i> </h3>
        <p className="rg-sec-sub">
          Priyam Consultancy Services delivers customized Virtual CFO solutions designed to align with your financial goals and drive sustainable business growth.
        </p>
      </div>
      <div className="rg-layout">
        <div className="rg-left">
          {REG_DATA.map((item, i) => (
            <div key={i}>
              <div className={`rg-item${active === i ? " active" : ""}`} onClick={() => setActive(i)} style={i === REG_DATA.length - 1 && active !== i ? { borderBottom: "none" } : {}}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flex: 1 }}>
                  <h4 className="rg-icon-box">{REG_ICONS[i]}</h4>
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
  { num: "01", color: "orange", icon: <img src="/img/icon/sc-financial-planning-strategy.webp" alt="Financial Planning and Strategy" width="35" height="35" />, lbl: "Step 01 · Initiation", title: "Financial Planning & Strategy", desc: "We develop budgets, forecasts, and long-term financial strategies aligned with your goals, providing a clear roadmap for profitability, sustainable growth, and informed business decision-making.", time: "~1 Working Day", tColor: "blue", even: false, last: false },
  { num: "02", color: "blue", icon: <img src="/img/icon/sc-reporting-analysis.webp" alt="Reporting and Analysis" width="35" height="35" />, lbl: "Step 02 · Documentation", title: "Reporting & Analysis", desc: "We deliver detailed reports and analytics presenting financial data clearly, monitoring performance, expenses, cash flow, and profitability to provide actionable insights for strategic decisions and financial control.", time: "~2-3 Working Days", tColor: "orange", even: true, last: false },
  { num: "03", color: "orange", icon: <img src="/img/icon/sc-cashflow-liquidity.webp" alt="Cash Flow and Liquidity Management" width="35" height="35" />, lbl: "Step 03 · Filing", title: "Cash Flow & Liquidity Management", desc: "We monitor inflows and outflows, manage working capital, and forecast cash requirements to optimize liquidity, ensuring smooth operations and preventing financial bottlenecks across your business.", time: "~2-4 Working Days", tColor: "blue", even: false, last: false },
  { num: "04", color: "blue", icon: <img src="/img/icon/sc-risk-compliance.webp" alt="Risk Management and Compliance" width="35" height="35" />, lbl: "Step 04 · Approval", title: "Risk Management & Compliance", desc: "We identify and mitigate financial and regulatory risks while ensuring compliance with statutory requirements and controls, protecting stakeholder interests and strengthening your foundation for sustainable growth.", time: "~5-7 Working Days", tColor: "orange", even: true, last: false },
  { num: "05", color: "orange", icon: <img src="/img/icon/sc-continuous-advisory.webp" alt="Continuous Advisory and Optimization" width="35" height="35" />, lbl: "Step 05 · Complete", title: "Continuous Advisory & Optimization", desc: "We provide ongoing strategic guidance, adapting financial processes to regulatory and market changes, optimizing operations, improving efficiency, and supporting sustainable growth and long-term profitability for your business.", time: "~1-2 Working Days", tColor: "blue", even: false, last: false },
  { num: "06", color: "blue", icon: <img src="/img/icon/sc-cost-optimization.webp" alt="Cost Optimization and Performance Improvement" width="35" height="35" />, lbl: "Step 06 · Complete", title: "Cost Optimization & Performance Improvement", desc: "We analyze cost structures, identify inefficiencies, and implement optimization strategies to reduce expenses while maintaining quality, improving overall efficiency, strengthening margins, and supporting long-term organizational financial sustainability.", time: "~2-3 Working Days", tColor: "orange", even: true, last: false },


];

function SessionChangeSection() {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "90px 0 100px",background:'#fff' }}>      <div className="sc-bg" /><div className="sc-orb sc-orb-a" /><div className="sc-orb sc-orb-b" />
      <div className="sc-inner">
        <div style={{ textAlign: "center", marginBottom: "90px" }}>
          <div className="partners-header1" style={{ textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Virtual CFO Process</h2>
          </div>
          <h3 className="sc-title">Strategic, Transparent, and <em className="sc-title-em">Insight-Driven Financial </em>Management</h3>
          <p className="sc-sub">
            Our Virtual CFO process at Priyam Consultancy Services is designed to meet the unique financial needs of your business, step by step. We don’t just manage numbers — we build a strategic financial framework that drives growth, profitability, and long-term success. From budgeting to reporting and advisory, every step is accurate, insightful, and tailored to your vision.
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
  { title: "Strategic Planning & Financial Oversight", desc: "We analyze your business model, financial priorities, and growth goals. Every recommendation — from budgeting to investments — is designed to provide clarity, control, and measurable financial impact.", center: false, icon: <img src="/img/icon/hww-strategic-planning-oversigh.webp" alt="Strategic Planning and Financial Oversight" width="34" height="34" /> },
  { title: "Expert Team & Accountability", desc: "Our Virtual CFO team of analysts, accountants, and advisors ensures clear role ownership. This guarantees accuracy, accountability, and seamless execution of every financial strategy for your business.", center: false, icon: <img src="/img/icon/hww-expert-team-accountability.webp" alt="Expert Team and Accountability" width="34" height="34" /> },
  { title: "Review, Advise & Deliver", desc: "We thoroughly review all reports, budgets, and plans, ensuring compliance and accuracy. Our actionable insights help you make informed decisions aligned with your long-term business objectives.", center: true, icon: <img src="/img/icon/hww-review-advise-deliver.webp" alt="Review Advise and Deliver" width="34" height="34" /> },
  { title: "Continuous Monitoring & Support", desc: "We continuously track financial performance, cash flow, and compliance obligations. Ongoing guidance ensures your business stays financially healthy, compliant, and positioned for sustainable growth.", center: false, icon: <img src="/img/icon/hww-continuous-monitoring-support.webp" alt="Continuous Monitoring and Support" width="34" height="34" /> },
];

function HowWeWorkSection() {
  return (
    <section style={{ position: "relative", background: "#004168", overflow: "hidden", padding: "60px 5% 81px" }}>      <div className="hww-bg" /><div className="hww-orb hww-orb-1" /><div className="hww-orb hww-orb-2" />
      <div style={{ position: "relative", zIndex: 2, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="partners-header1" style={{ textAlign: 'center' }}>
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>How We Work</div>

          </div>
          <h2 className="hww-title">Plan Strategically.  <span className="hww-accent">Manage Confidently.</span></h2>
          <p className="hww-sub">
            We create tailored compliance strategies and ensure every regulatory requirement is managed accurately and on time.
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
  { q: "What is included in virtual CFO services?", a: "Virtual CFO services typically include financial planning, budgeting, cash flow management, financial reporting, compliance monitoring, business forecasting, profitability analysis, strategic advisory, and investor reporting. These services help businesses improve financial control, decision-making, and long-term growth planning without hiring a full-time CFO." },
  { q: "What does a Virtual CFO do?", a: "A Virtual CFO manages and oversees a company’s financial strategy, reporting, budgeting, cash flow, and business planning. They provide financial insights, risk management support, and strategic guidance that help businesses improve profitability, operational efficiency, and overall financial performance." },
  { q: "Who needs a Virtual CFO?", a: " Startups, small businesses, growing companies, and organizations lacking in-house financial leadership can benefit from Virtual CFO services. Businesses seeking better financial planning, strategic guidance, investor readiness, cost optimization, or scalable financial management often require Virtual CFO support." },
  { q: "How can Virtual CFOs help startups manage finances?", a: "Virtual CFOs help startups manage finances through budgeting, cash flow forecasting, fundraising support, financial planning, expense control, and strategic decision-making. They provide structured financial guidance that helps startups improve financial discipline, reduce risks, and plan sustainable business growth effectively." },
  { q: "What is the difference between an accountant and a Virtual CFO?", a: "An accountant primarily handles bookkeeping, tax filing, and financial record maintenance, while a Virtual CFO focuses on financial strategy, forecasting, business planning, profitability improvement, and decision-making support. Virtual CFOs provide higher-level financial guidance aligned with long-term business growth objectives." },
  { q: "Are virtual CFO services affordable for small businesses?", a: "Yes, Virtual CFO services are cost-effective for small businesses because they provide expert financial leadership without the expense of hiring a full-time CFO. Businesses gain strategic financial support, planning expertise, and operational guidance through flexible and scalable service models." },
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
      <div className="pg-vcfo">
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