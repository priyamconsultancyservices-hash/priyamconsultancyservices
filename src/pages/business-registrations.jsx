import '../css/pages-common.css';
import { useState, useEffect, useRef } from "react";
import CTASection from "../components/HomePage/CTA";
const banner = "/img/busniess-registration.webp";
import emailjs from "@emailjs/browser";
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import BlogSection from "../components/BlogSection";



function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/business-registrations/";
  const imageUrl = "https://www.priyamconsultancy.com/img/business-registration.png";

  return (
    <Head>
      {/* ── Primary Meta ── */}
      <title>Business Registration Services | Company Registration in Coimbatore </title>
      <meta name="description" content="Professional Business Registration Services in Coimbatore. Get seamless company registration, legal support, and compliance guidance for your business growth. " />
      <meta name="keywords" content="Business Registration, Business Registration Services, Business Registration Consultants, Limited Company Registration Services, Private Limited Company Registration Services, Public Limited Company Registration Services, Limited Liability Partnership Services, Company Registration Consultants" />
      <link rel="canonical" href="https://www.priyamconsultancy.com/business-registrations/" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Business Registration Services | Company Registration in Coimbatore " />
      <meta property="og:description" content="Professional Business Registration Services in Coimbatore. Get seamless company registration, legal support, and compliance guidance for your business growth. " />
      <meta property="og:url" content="https://www.priyamconsultancy.com/business-registrations/" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Priyam Consultancy Services" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Business Registration Services | Company Registration in Coimbatore " />
      <meta name="twitter:description" content="Professional Business Registration Services in Coimbatore. Get seamless company registration, legal support, and compliance guidance for your business growth. " />
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
              "@id":"https://www.priyamconsultancy.com/business-registrations/",
              "name":"business-registrations"
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
        "@id":"https://www.priyamconsultancy.com/business-registrations/#service",
        "name":"Business Registrations",
        "serviceType":"Business Registration Services",
        "url":"https://www.priyamconsultancy.com/business-registrations/",
        "description":"Priyam Consultancy provides professional business registration services including proprietorship registration, partnership registration, LLP registration, OPC registration, private limited company incorporation and statutory registration support for businesses across India.",
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
        "name": "business-registrations",
        "image": ["https://www.priyamconsultancy.com/img/busniess-registration.png"],
        "description": "Best business registration services in Coimbatore offering proprietorship registration, partnership registration, LLP registration, OPC registration, private limited company incorporation and statutory registration support.",
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
        "reviewCount": "5927"
        },
        "offers": {
        "@type": "Offer",
        "url": "https://www.priyamconsultancy.com/business-registrations/",
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
            "name": "What do you mean by business registration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Business registration is the legal process of officially establishing a business entity under applicable government regulations. It provides legal recognition, enables tax registration, supports banking and compliance requirements, and allows businesses to operate professionally within a structured legal framework."
            }
          },{
            "@type": "Question",
            "name": "How many types of business registration are there?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Common types of business registration in India include Sole Proprietorship, Partnership Firm, Limited Liability Partnership (LLP), One Person Company (OPC), Private Limited Company, and Public Limited Company. The ideal structure depends on ownership, liability, compliance needs, and long-term business objectives."
            }
          },{
            "@type": "Question",
            "name": "Can a single person establish a business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, a single person can legally establish a business in India through structures like Sole Proprietorship or One Person Company (OPC). These options allow individuals to start and manage businesses independently while meeting applicable legal, taxation, and compliance requirements."
            }
          },{
            "@type": "Question",
            "name": "How much time does it take in India to register a business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The business registration timeline in India depends on the business structure and documentation readiness. Typically, registration can take anywhere between 5 to 15 working days, including approvals, verification processes, and statutory registrations required for legal business operations."
            }
          },{
            "@type": "Question",
            "name": "What documents are required for business registration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Business registration generally requires PAN card, Aadhaar card, address proof, passport-size photographs, business address proof, and bank details. Additional documents may vary depending on the selected business structure, partners, directors, or specific registration and licensing requirements."
            }
          },{
            "@type": "Question",
            "name": "Is GST registration mandatory after business registration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GST registration depends on your business turnover, industry type, and operational requirements. Businesses exceeding the prescribed turnover limit or involved in interstate trade, ecommerce, or specific taxable services are generally required to obtain GST registration under applicable regulations."
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
    <section className="hero-section" style={{ minHeight: "100svh", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "2rem", padding: "1rem 6% 3rem", position: "relative", overflow: "hidden", background: "#004168" }}>
      {/* LEFT CONTENT */}
      <div className="hero-content-col" style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column" }}>
        <div className="badge"><div className="badge-dot" />Business Registration </div>
        <h1 className="hero-heading">
          Business Registration Partner for
          <span className="underline-word orange">Sustainable  </span>Success
        </h1>
        <p className="hero-sub">
          Your business deserves a solid foundation. From registration to ongoing compliance, we simplify the legal and regulatory maze so you can focus on building your brand, expanding your operations, and achieving sustainable growth. With expert guidance at every step, your business stays protected, credible, and ready for the future.

        </p>
        <div className="hero-actions">
          <a className="btn-fill" href="/contact-us"><span>Explore More</span><div className="btn-arr">›</div></a>
        </div>
      </div>

      {/* RIGHT ILLUSTRATION */}
      <div className="hero-img-col" style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="hero-img-wrap">
          <img
            src={banner}
            alt="Business Registration Illustration"
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
      <div className="ap-inner">

        {/* LEFT CONTENT */}
        <div className="ap-left">
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Approach in</div>
          </div>
          <h2 className="ap-heading">Business  <span>Process Automation</span></h2>
          <p className="ap-intro">
            Every business is unique, and its registration journey should reflect that. We begin by understanding your vision, operations, and long-term goals. This helps us align every step with your business direction.
          </p>
          <p className="ap-intro">
            We assess the most suitable structure for your needs and guide you through the process. From documentation to approvals, everything is handled with precision. This ensures a smooth, efficient, and legally sound setup.
          </p>
          <p className="ap-intro">
            Business registration is more than paperwork—it’s the foundation of your growth. We manage every formality so you can focus on building and expanding. Your business starts strong, confident, and ready for long-term success.
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
  { num: "01", tag: "PLC", label: "Public Limited Company", title: "Raise Capital and Scale <i>Confidently</i>", desc: ["Ideal for large businesses aiming to raise capital from the public and expand at scale. A Public Limited Company enhances credibility and builds strong trust among investors and stakeholders. It supports structured growth with wider market access.", "With defined governance and strict regulatory compliance, it ensures transparency and accountability. This structure enables long-term expansion, strong financial backing, and sustainable success. It is best suited for businesses with ambitious growth plans"], chips: ["📈 Investor Access", "🏛️ Strong Governance", "📋 Stock Exchange Listed", "✅ Regulatory Compliance"], time: "Avg. 15–25 working days" },
  { num: "02", tag: "Pvt Ltd", label: "Private Limited Company", title: "Structured Growth with <i>Limited Liability</i>", desc: ["A preferred choice for startups and growing businesses seeking structured expansion. A Private Limited Company offers limited liability protection and a clear legal identity. It builds credibility while supporting steady business growth.", "With a formal governance framework and better funding opportunities, it attracts investors easily. This structure ensures compliance while protecting the interests of owners and shareholders. It supports long-term, scalable growth."], chips: ["💼 Limited Liability", "🚀 Investor-Ready", "👥 2–200 Shareholders", "📑 Separate Legal Entity"], time: "Avg. 7–12 working days" },
  { num: "03", tag: "LLP", label: "Limited Liability Partnership", title: "Flexibility Partnership with <i>Legal Protection</i>", desc: ["An LLP combines the flexibility of a partnership with the benefits of limited liability. It is ideal for professionals and small businesses looking for operational freedom. Partners can manage roles efficiently while maintaining flexibility.", "At the same time, it offers legal protection and a recognized business structure. It ensures credibility, shared responsibilities, and reduced compliance burden. This makes it a balanced choice for stable growth."], chips: ["🤝 Flexible Structure", "🛡️ Limited Liability", "📉 Low Compliance", "💰 Easy Profit Sharing"], time: "Avg. 10–15 working days" },
  { num: "04", tag: "OPC", label: "One Person Company (OPC)", title: "Corporate Benefits for <i>Solo Entrepreneurs</i>", desc: ["Designed for individual entrepreneurs who want a corporate identity. An OPC provides limited liability and a structured framework for solo business operations. It allows you to operate with professionalism and credibility.", "With simplified compliance and full control, it supports efficient decision-making. It also offers long-term growth potential with legal protection. This makes it ideal for entrepreneurs scaling independently."], chips: ["👤 Solo Founder", "🏢 Corporate Benefits", "🔒 Asset Protection", "📊 Easy Compliance"], time: "Avg. 7–10 working days" },
  { num: "05", tag: "Partnership", label: "Partnership Firm", title: "Shared Responsibility,  <i>Collective Growth/i>", desc: ["A Partnership Firm is suitable for businesses managed by two or more individuals. It allows partners to share responsibilities, profits, and decision-making. This creates a collaborative environment for business operations.", "It offers a simple structure with legal recognition and operational ease. Partners can combine expertise to drive growth and efficiency. This makes it a practical option for small and medium businesses."], chips: ["🤝 Shared Ownership", "💡 Easy Formation", "📝 Minimal Compliance", "⚖️ Flexible Agreement"], time: "Avg. 3–7 working days" },
  { num: "06", tag: "Proprietor", label: "Sole Proprietorship", title: "Quick and Simple <i>Business Setup</i>", desc: ["Ideal for individuals looking for a quick and easy way to start a business. A Sole Proprietorship requires minimal registration and offers complete control. It is perfect for small-scale and independent operations.", "With fewer compliance requirements, it allows faster decision-making and flexibility. The owner manages all aspects of the business directly. This enables efficient operations and focused growth."], chips: ["👤 Full Control", "💸 Minimal Cost", "⚡ Quick Setup", "🏪 SMEs & Freelancers"], time: "Avg. 1–3 working days" },
];
const REG_ICONS = [
  <img src="/img/icon/public-limited-company.webp" alt="Public Limited Company" width="20" height="20" />,
  <img src="/img/icon/private-limited-company.webp" alt="Private Limited Company" width="20" height="20" />,
  <img src="/img/icon/llp-registration.webp" alt="Limited Liability Partnership" width="20" height="20" />,
  <img src="/img/icon/opc-registration.webp" alt="One Person Company" width="20" height="20" />,
  <img src="/img/icon/partnership-firm.webp" alt="Partnership Firm" width="20" height="20" />,
  <img src="/img/icon/sole-proprietorship.webp" alt="Sole Proprietorship" width="20" height="20" />,
];

function RegistrationSection() {
  const [active, setActive] = useState(0);
  const d = REG_DATA[active];
  return (
    <section style={{ padding: "90px 5%", background: "#004168", position: "relative", overflow: "hidden" }}>      <div className="rg-bg-c" style={{ top: "-120px", right: "-120px", width: "400px", height: "400px", border: "1.5px solid rgba(237,131,55,.1)" }} />
      <div className="rg-bg-c" style={{ bottom: "-100px", left: "-80px", width: "300px", height: "300px", border: "1.5px solid rgba(237,131,55,.08)" }} />
      <div style={{ textAlign: "center", marginBottom: "60px", position: "relative", zIndex: 2 }}>
        <div className="partners-header1"  style={{ textAlign: 'center' }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Specialized Business Registration Services</h2>

        </div>
        <h3 className="rg-sec-h">Every Step <i> Legally Sound.</i> Every Registration Tailored.</h3>
        <p className="rg-sec-sub">Priyam Consultancy Services crafts tailored business registration solutions aligned with your goals and growth vision.</p>
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
  { num: "01", color: "orange", icon: <img src="/img/icon/business-registration-discovery-assessment.webp" alt="Discovery and Assessment" width="35" height="35" />, lbl: "Step 01 · Initiation", title: "Discovery & Assessment", desc: ["We understand your business model, vision, and goals. By analyzing industry and growth plans, we tailor registration steps to build a strong foundation.", "Business registration is more than paperwork—it’s the foundation of your growth. We manage every formality so you can focus on building and expanding. Your business starts strong, confident, and ready for long-term success."], time: "~1 Working Day", tColor: "blue", even: false, last: false },
  { num: "02", color: "blue", icon: <img src="/img/icon/business-registration-structure-planning.webp" alt="Business Structure Planning" width="35" height="35" />, lbl: "Step 02 · Documentation", title: "Business Structure Planning", desc: "Our experts evaluate entity options based on liability, taxation, investment, and scalability, recommending the most suitable structure for efficiency and sustainable long-term growth.", time: "~2-3 Working Days", tColor: "orange", even: true, last: false },
  { num: "03", color: "orange", icon: <img src="/img/icon/business-registration-documentation-filing.webp" alt="Documentation and Filing" width="35" height="35" />, lbl: "Step 03 · Filing", title: "Documentation & Filing", desc: "We manage the full registration process, preparing and submitting required forms, licenses, and approvals accurately and on time for smooth legal establishment.", time: "~2-4 Working Days", tColor: "blue", even: false, last: false },
  { num: "04", color: "blue", icon: <img src="/img/icon/business-registration-compliance-monitoring.webp" alt="Compliance Setup and Monitoring" width="35" height="35" />, lbl: "Step 04 · Approval", title: "Compliance Setup & Monitoring", desc: "Post-registration, we establish compliance systems, manage licenses and filings, and track deadlines to keep your business secure, compliant, and operating smoothly year-round.", time: "~5-7 Working Days", tColor: "orange", even: true, last: false },
  { num: "05", color: "orange", icon: <img src="/img/icon/business-registration-continuous-support.webp" alt="Continuous Support and Updates" width="35" height="35" />, lbl: "Step 05 · Complete", title: "Continuous Support & Updates", desc: "As regulations evolve, we keep your business updated and compliant, providing ongoing guidance to avoid penalties and stay prepared for future growth opportunities", time: "~1-2 Working Days", tColor: "blue", even: false, last: false },
  { num: "06", color: "blue", icon: <img src="/img/icon/business-registration-launch-maintenance.webp" alt="Launch and Ongoing Maintenance" width="35" height="35" />, lbl: "Step 06 · Complete", title: "Launch & Ongoing Maintenance", desc: "After approval, we deploy your website with monitoring and configuration, providing continuous support, updates, and maintenance for long-term stability", time: "~2-3 Working Days", tColor: "orange", even: true, last: false },


];

function SessionChangeSection() {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "90px 0 100px" }}>      <div className="sc-bg" /><div className="sc-orb sc-orb-a" /><div className="sc-orb sc-orb-b" />
      <div className="sc-inner">
        <div style={{ textAlign: "center", marginBottom: "90px" }}>
          <div className="partners-header1" style={{ textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Business Registration Execution Process</h2>

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
  { title: "Strategic Registration & Planning", desc: "We start by understanding your business vision, operations, and long-term goals. Every step from entity selection to approvals is planned carefully and strategically. This ensures a strong, compliant foundation that supports sustainable growth. ", center: false, icon: <img src="/img/icon/hww-strategic-planning.webp" alt="Strategic Registration and Planning" width="34" height="34" /> },
  { title: "Specialized Team & Clear Accountability", desc: "Our business registration specialists, legal advisors, and documentation experts handle every step accurately. Roles are defined clearly to ensure accountability, smooth execution, and confidence throughout the setup process.", center: false, icon: <img src="/img/icon/hww-team-accountability.webp" alt="Specialized Team and Clear Accountability" width="34" height="34" /> },
  { title: "Review, Approve & Complete", desc: "Before finalizing any registration, our team reviews all documents, forms, and submissions to ensure accuracy and compliance. We deliver only when your business is fully registered and ready to operate.", center: true, icon: <img src="/img/icon/hww-review-approve.webp" alt="Review Approve and Complete" width="34" height="34" /> },
  { title: "Continuous Support & Guidance", desc: "Even after registration, we provide continued support for compliance updates, regulatory changes, and operational queries, keeping your business fully compliant, adaptable, and growth-ready at every stage of your business journey ahead.", center: false, icon: <img src="/img/icon/hww-continuous-support.webp" alt="Continuous Support and Guidance" width="34" height="34" /> },
];

function HowWeWorkSection() {
  return (
    <section style={{ position: "relative", background: "#004168", overflow: "hidden", padding: "60px 5% 81px" }}>      <div className="hww-bg" /><div className="hww-orb hww-orb-1" /><div className="hww-orb hww-orb-2" />
      <div style={{ position: "relative", zIndex: 2, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="partners-header1" style={{ textAlign: 'center' }}>
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>How We Work</div>

          </div>
          <h2 className="hww-title">Strategize Clearly. <span className="hww-accent">Launch Securely.</span></h2>
          <p className="hww-sub">Build a strong foundation that supports seamless operations, sustained growth, and long-term business success.</p>
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
  { q: "What do you mean by business registration?", a: " Business registration is the legal process of officially establishing a business entity under applicable government regulations. It provides legal recognition, enables tax registration, supports banking and compliance requirements, and allows businesses to operate professionally within a structured legal framework." },
  { q: "How many types of business registration are there?", a: "Common types of business registration in India include Sole Proprietorship, Partnership Firm, Limited Liability Partnership (LLP), One Person Company (OPC), Private Limited Company, and Public Limited Company. The ideal structure depends on ownership, liability, compliance needs, and long-term business objectives." },
  { q: "Is GST registration mandatory after business registration?", a: "GST registration depends on your business turnover, industry type, and operational requirements. Businesses exceeding the prescribed turnover limit or involved in interstate trade, ecommerce, or specific taxable services are generally required to obtain GST registration under applicable regulations." },
  { q: "Can a single person establish a business?", a: " Yes, a single person can legally establish a business in India through structures like Sole Proprietorship or One Person Company (OPC). These options allow individuals to start and manage businesses independently while meeting applicable legal, taxation, and compliance requirements." },
  { q: "What documents are required for business registration?", a: "Business registration generally requires PAN card, Aadhaar card, address proof, passport-size photographs, business address proof, and bank details. Additional documents may vary depending on the selected business structure, partners, directors, or specific registration and licensing requirements." },
  { q: "How much time does it take in India to register a business?", a: "The business registration timeline in India depends on the business structure and documentation readiness. Typically, registration can take anywhere between 5 to 15 working days, including approvals, verification processes, and statutory registrations required for legal business operations." },
];
function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (

    <section className="faq-section">
      <div className="partners-header2" style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2 className="partners-eyebrow" >Frequently Asked Questions
        </h2>
      </div>
      <div className="container" style={{width: '100%'}}>
        {/* TITLE */}
        <div className="faq-head">
          <h3 className="faq-h3">Queries That Could <span>Hold You Back</span></h3 >
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
      <div className="pg-bizreg">
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