import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import CTASection from "../components/HomePage/CTA";
import Layout from '@theme/Layout';
const banner = "/img/healthcare.webp";
import Head from '@docusaurus/Head';
import '../css/industries.css';


function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/healthcare/";
  const imageUrl = "https://www.pcsbusinesssolution.com/img/2.webp";

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://www.priyamconsultancy.com/",
            "name": "Home"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": "https://www.priyamconsultancy.com/healthcare/",
            "name": "healthcare"
          }
        }
      ]
    },
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

    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.priyamconsultancy.com/healthcare/#service",
      "name": "Healthcare Industry Services",
      "serviceType": "Business Solutions for Healthcare Industry",
      "url": "https://www.priyamconsultancy.com/healthcare/",
      "description": "Priyam Consultancy provides digital marketing, website development, HR services, payroll management, business registration, statutory compliance, Virtual CFO services, accounting and business consulting solutions tailored for healthcare providers, clinics, hospitals and medical organizations across India.",
      "provider": {
        "@type": "Organization",
        "name": "Priyam Consultancy Services",
        "url": "https://www.priyamconsultancy.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png"
        }
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      }

    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "Why does a healthcare clinic/hospital need digital marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital marketing helps healthcare providers improve online visibility, build patient trust, promote healthcare services, and attract new patients. It supports appointment generation, strengthens local search presence, and helps clinics and hospitals communicate effectively with patients across digital platforms."
        }
      }, {
        "@type": "Question",
        "name": "How can social media marketing help healthcare businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Social media marketing helps healthcare businesses improve patient engagement, increase awareness about treatments and services, share health-related information, and build credibility. It also supports brand visibility, patient communication, and targeted campaigns that help attract relevant healthcare audiences online."
        }
      }, {
        "@type": "Question",
        "name": "What features should a healthcare website have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A healthcare website should include service information, doctor profiles, online appointment booking, contact details, patient testimonials, mobile responsiveness, SEO optimization, secure patient communication, and easy navigation. These features improve patient experience, accessibility, trust, and overall engagement with healthcare services."
        }
      }, {
        "@type": "Question",
        "name": "Can you build a website with online appointment booking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we develop healthcare websites with integrated online appointment booking systems, patient enquiry forms, doctor schedules, automated confirmations, and user-friendly interfaces. These features help healthcare providers streamline patient management, improve accessibility, and enhance overall patient convenience and operational efficiency."
        }
      }, {
        "@type": "Question",
        "name": "What HR services do healthcare providers need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Healthcare providers typically require recruitment, payroll management, compliance management, attendance tracking, workforce planning, onboarding, shift scheduling, and HR policy support. These services help manage medical and non-medical staff efficiently while ensuring compliance with healthcare and labor regulations."
        }
      }, {
        "@type": "Question",
        "name": "How does payroll management work for medical staff?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Payroll management for medical staff includes salary processing, shift calculations, overtime management, statutory deductions, attendance tracking, incentive handling, and compliance reporting. Structured payroll systems ensure accurate payments, reduce administrative workload, and maintain smooth workforce operations within healthcare organizations."
        }
      }]
    },
  ];

  return (
    <Head>
      <title>Healthcare Digital Marketing Company for Hospitals & Clinics</title>
      <meta name="description" content="Grow your healthcare business with expert digital marketing, website development, and HR solutions. Attract more patients and scale with confidence." />
      <meta name="keywords" content="Healthcare Digital Marketing Company, Healthcare Website Development, HR Solutions for Healthcare, Healthcare workforce management , Payroll In Hospitals & Healthcare, healthcare digital marketing agency, healthcare website development services, Best Hospital Website Development Company" />
      <link rel="canonical" href="https://www.priyamconsultancy.com/healthcare/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Healthcare Digital Marketing Company for Hospitals & Clinics" />
      <meta property="og:description" content="Grow your healthcare business with expert digital marketing, website development, and HR solutions. Attract more patients and scale with confidence." />
      <meta property="og:url" content="https://www.priyamconsultancy.com/healthcare/" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="PCS Business Solution" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Healthcare Digital Marketing Company for Hospitals & Clinics" />
      <meta name="twitter:description" content="Grow your healthcare business with expert digital marketing, website development, and HR solutions. Attract more patients and scale with confidence." />
      <meta name="twitter:image" content={imageUrl} />
      {schemaData.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Head>
  );
}

// EmailJS will be loaded via CDN in the component

/* ═══════════════════════════════════════════
   SECTION 1 — HERO BANNER (Finance Orange Theme)
═══════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="seo-hero-section" style={{
      minHeight: "95vh",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      gap: "2rem",
      padding: "5rem 6% 4rem",
      position: "relative",
      overflow: "hidden",
      backgroundImage: `url(${banner})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>

      {/* Dark overlay for text readability over background image */}
      <div className="hero-overlay" style={{ position: "absolute", inset: 0, zIndex: 1 }} />

      {/* Orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      {/* LEFT CONTENT — order:1 on mobile (comes first) */}
      <div className="hero-content-left" style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", paddingBottom: "3rem", order: 1 }}>
        <div className="seo-badge"><div className="badge-dot-red" />Healthcare </div>
        <h1 className="seo-hero-heading">
          Powering Progress
          in the <span className="seo-underline seo-red" style={{ marginRight: '10px' }}>Healthcare</span>
          Industry  Powering Progress
        </h1>
        <p className="seo-sub">
          Enabling healthcare providers to grow with confidence, We bring together registration, compliance, HR solutions for healthcare, digital transformation, and digital marketing , Website Development into a unified, end-to-end solution.       </p>
        <div className="seo-actions">
          <a className="seo-btn-fill" href="/contact-us"><span>Get in Touch</span><div className="seo-btn-arr">›</div></a>
        </div>
      </div>

      {/* RIGHT — empty, banner image shows through */}
      <div style={{ order: 2 }} />

      {/* Mobile: collapse to 1 col, full cover */}
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — OUR APPROACH + FORM
═══════════════════════════════════════════ */
function ApproachSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", msg: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      name: form.name, email: form.email, phone: form.phone,
      company: form.company, message: form.msg, url: window.location.href,
    };
    emailjs.send("service_8xw6k3r", "template_jarui36", templateParams, "XWRnXi4hK2SvmRG3q")
      .then(() => { alert("Message Sent Successfully ✅"); setForm({ name: "", email: "", phone: "", company: "", msg: "" }); })
      .catch(() => alert("Failed to send ❌"));
  };

  return (
    <section id="approach" style={{ background: "#ffffff", padding: "5rem 6%", position: "relative", overflow: "hidden" }}>

      <div className="ap2-inner">
        {/* LEFT */}
        <div>
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>About Industry</div>
          </div>
          <h2 className="ap2-heading"><span>Healthcare Industry in India </span> — Care Meets Innovation</h2>
          <p className="ap2-intro">
            India's healthcare industry plays a critical role in improving quality of life, spanning hospitals, clinics, diagnostic centers, and specialized care providers — offering immense opportunities. </p>
          <p className="ap2-intro">
            But in today’s evolving landscape, delivering quality care alone is not enough. Compliance, strong digital presence, efficient workforce management, and technology adoption have become essential for healthcare providers to operate effectively and scale. That’s where PCS, a trusted Healthcare Digital Marketing Company and healthcare digital marketing agency, steps in with end-to-end support.
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

/* ─────────────────────────────────────────
   SECTION 3: WHY PCS
───────────────────────────────────────── */
function WhyPCSSection() {
  return (
    <section className="pcs-section" id="why-pcs">
      <div className="pcs-inner">
        <div className="pcs-header">
          <div className="partners-header1">
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Challenges</h2>
          </div>          <h3 className="pcs-h2">The Biggest Challenges in the  <span><i>Healthcare  Industry </i></span> Today</h3>
          <p className="pcs-lead">

            Running a healthcare organization comes with its own set of complexities. Here are the most common challenges faced by providers:
          </p>
        </div>
        <div className="pcs-radial-layout">
          {/* LEFT */}
          <div className="pcs-radial-col left" style={{width: '100%'}}>
            {[
              { num: "01 · Expertise", title: "Compliance Complexity", desc: "Managing licenses, accreditations, and regulatory filings can overwhelm healthcare providers.", icon: "/img/icon/healthcare-compliance.webp", iconStyle: { background: "rgba(0,65,104,0.3)", borderColor: "rgba(0,130,210,0.5)" } },
              { num: "02 · Approach", title: "Digital Absence ", desc: "Managing licenses, accreditations, and regulatory filings can overwhelm healthcare providers.", icon: "/img/icon/healthcare-digital-absence.webp", iconStyle: { background: "rgba(237,131,55,0.2)", borderColor: "rgba(237,131,55,0.5)" } },
              { num: "03 · Reliability", title: "Patient Reach", desc: "Without effective digital marketing strategies, hospitals struggle to reach and engage the right audience.", icon: "/img/icon/healthcare-buyer-reach.webp", iconStyle: { background: "rgba(10,82,130,0.3)", borderColor: "rgba(20,120,190,0.5)" } },
            ].map((p, i) => (
              <div className="pcs-point" key={i}>
                <div className="pcs-point-line"></div>
                <div className="pcs-point-icon-wrap" style={p.iconStyle}><img src={p.icon} alt={p.title} style={{ width: "30px", height: "30px", objectFit: "contain" }} /></div>
                <div className="pcs-point-body">
                  <span className="pcs-point-num">{p.num}</span>
                  <h4 className="pcs-point-title">{p.title}</h4>
                  <div className="pcs-point-desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
          {/* CENTER */}
          <div className="pcs-radial-center">
            <div className="pcs-center-ring-outer">
              <div className="pcs-center-ring-inner">
                <div className="pcs-center-hub">
                  <div className="pcs-center-emoji"><img src="/img/icon/healthcare.webp" alt="PCS" style={{ width: "36px", height: "36px", objectFit: "contain" }} /></div>
                  <div className="pcs-center-label">PCS Healthcare Industry </div>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="pcs-radial-col right">
            {[
              { num: "04 · Delivery", title: "Workforce Challenges", desc: "Managing staff efficiently requires strong healthcare workforce management and reliable HR solutions for healthcare.", icon: "/img/icon/healthcare-growth.webp", iconStyle: { background: "rgba(0,42,68,0.4)", borderColor: "rgba(0,100,170,0.5)" } },
              { num: "05 · Value", title: "Technology Gap", desc: "Limited adoption of digital tools affects operational efficiency and patient experience.", icon: "/img/icon/healthcare-technology.webp", iconStyle: { background: "rgba(20,102,160,0.3)", borderColor: "rgba(30,140,210,0.5)" } },
              { num: "06 · Growth", title: "Brand Visibility", desc: "Low online visibility reduces patient trust and acquisition, emphasizing the need for a strong digital presence.", icon: "/img/icon/healthcare-brand-visibility.webp", iconStyle: { background: "rgba(201,109,26,0.2)", borderColor: "rgba(237,131,55,0.5)" } },

            ].map((p, i) => (
              <div className="pcs-point" key={i}>
                <div className="pcs-point-icon-wrap" style={p.iconStyle}><img src={p.icon} alt={p.title} style={{ width: "24px", height: "24px", objectFit: "contain" }} /></div>
                <div className="pcs-point-body">
                  <span className="pcs-point-num">{p.num}</span>
                  <div className="pcs-point-title">{p.title}</div>
                  <div className="pcs-point-desc">{p.desc}</div>
                </div>
                <div className="pcs-point-line"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 4: OUR SOLUTIONS (TABS)
───────────────────────────────────────── */
const solutionTabs = [
  {
    num: "01",
    label: "Registration",
    tag: "01 — Compliance",
    title: "Business Registration & Compliance",
    desc: "Comprehensive support covering registration, statutory compliance, accounting, GST, payroll, and audits — all in one place. From setup to financial guidance like banking, loans, CMA reports, company valuations, and Virtual CFO services, we ensure your healthcare operations run smoothly and stay compliant.",
    progress: "20%",
  },
  {
    num: "02",
    label: "Digital Marketing",
    tag: "02 — Web",
    title: "Digital Marketing for Healthcare",
    desc: "As a leading Healthcare Digital Marketing Company, we drive patient engagement and visibility through SEO, paid campaigns, content, and social media strategies designed for measurable growth.",
    progress: "40%",
  },
  {
    num: "03",
    label: "Website Development ",
    tag: "03 — Trust",
    title: "Healthcare Website Development",
    desc: "Professional Healthcare Website Development tailored for hospitals and clinics. Recognized as a Best Hospital Website Development Company, we build secure, user-friendly, and high-performing websites that enhance patient experience and trust.",
    progress: "60%",
  },
  {
    num: "04",
    label: "HR Solutions",
    tag: "04 — HR Management",
    title: "Healthcare Workforce & HR Solutions",
    desc: "End-to-end HR solutions for healthcare, including recruitment, healthcare workforce management, and payroll in hospitals & healthcare. We ensure efficient staffing, compliant payroll processes, and structured HR systems for seamless operations.",
    progress: "80%",
  },
  {
    num: "05",
    label: "Digital Transformation  ",
    tag: "05 — Visibility",
    title: "Digital Transformation Solutions ",
    desc: "Smart solutions to streamline operations and improve efficiency. From process automation and custom web & mobile applications to data-driven insights, we help healthcare providers deliver better outcomes.",
    progress: "100%",
  },
];

function ChallengesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setIsMobile(w <= 600);
      setIsTablet(w > 600 && w <= 900);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const isSmall = isTablet;
  const current = solutionTabs[activeTab];

  return (
    <section id="why-choose" style={{
      background: "#ffffff",
      padding: isMobile ? "4rem 5%" : isTablet ? "5rem 5%" : "7rem 6%",
      fontFamily: "'Poppins', sans-serif",
    }}>

      {/* ── Section Header ── */}
      <div style={{ textAlign: "center", marginBottom: isMobile ? "2rem" : "3rem" }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "12px", marginBottom: "14px",
        }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Solutions</h2>

        </div>
        <h3 style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: isMobile ? "22px" : isTablet ? "28px" : "clamp(28px, 3.5vw, 40px)",
          fontWeight: "700", color: "#0d1f2d",
          lineHeight: "1.25", marginBottom: "12px",
        }}>
          How We Help {" "}
          <span style={{ color: "#ed8337", fontStyle: "italic" }}>
            Hospitals & Healthcare
          </span>{" "} Providers Grow
          Grow
        </h3>
        <p style={{
          fontSize: isMobile ? "13px" : "15px", color: "#000000", fontWeight: "300",
          margin: "30px auto", lineHeight: "1.75",
        }}>
          From business registration to digital growth and website development, we provide the right solutions at every stage of your healthcare journey.  </p>     </div>

      {/* ══════════════════════════════════
          MOBILE — Accordion (tab → content below each)
         ══════════════════════════════════ */}
      {isMobile ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "500px", margin: "0 auto" }}>
          {solutionTabs.map((tab, i) => {
            const isOpen = activeTab === i;
            return (
              <div key={i} style={{
                border: isOpen ? "1.5px solid #ed8337" : "1.5px solid #EDE6DF",
                borderRadius: "12px",
                overflow: "hidden",
                transition: "border-color 0.25s",
              }}>
                {/* Accordion Header */}
                <button
                  onClick={() => setActiveTab(isOpen ? -1 : i)}
                  style={{
                    width: "100%",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "14px 18px",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "13px",
                    fontWeight: isOpen ? "600" : "400",
                    color: isOpen ? "#ed8337" : "#3a3a3a",
                    background: isOpen ? "#FFF4EC" : "#ffffff",
                    border: "none", cursor: "pointer",
                    transition: "all 0.22s",
                    textAlign: "left",
                  }}
                >
                  <span>{tab.label}</span>
                  <span style={{
                    fontSize: "18px", fontWeight: "300",
                    color: isOpen ? "#ed8337" : "#aaa",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.25s",
                    lineHeight: "1",
                  }}>+</span>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div style={{
                    background: "#ffffff",
                    borderTop: "1px solid #EDE6DF",
                    padding: "18px 18px 20px",
                    animation: "accordionFadeIn 0.25s ease",
                  }}>
                    <p style={{
                      fontSize: "13px", color: "#5a6a7a",
                      lineHeight: "1.85", fontWeight: "300",
                      marginBottom: "14px",
                    }}>{tab.desc}</p>
                    {/* Progress bar */}
                    <div style={{ height: "2px", background: "#EDE6DF", borderRadius: "2px", overflow: "hidden" }}>
                      <div style={{
                        height: "100%", background: "#ed8337",
                        borderRadius: "2px", width: tab.progress,
                        transition: "width 0.4s ease",
                      }} />
                    </div>
                    <p style={{ fontSize: "10px", color: "#bbb", marginTop: "6px", letterSpacing: "1px" }}>
                      {i + 1} / {solutionTabs.length}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      ) : (
        /* ══════════════════════════════════
           TABLET + DESKTOP — Horizontal tab bar
           ══════════════════════════════════ */
        <>
          <div style={{
            display: "flex", justifyContent: "center",
            borderBottom: "1.5px solid #EDE6DF",
            overflowX: "auto", gap: "0",
            scrollbarWidth: "none",
            maxWidth: "1100px", margin: "0 auto",
            WebkitOverflowScrolling: "touch",
          }}>
            {solutionTabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                style={{
                  display: "flex", alignItems: "center",
                  padding: isTablet ? "14px 16px" : "16px 24px",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: isTablet ? "12px" : "13px",
                  fontWeight: activeTab === i ? "600" : "400",
                  color: activeTab === i ? "#ed8337" : "#7A6E66",
                  background: "none", border: "none",
                  borderBottom: activeTab === i ? "2.5px solid #ed8337" : "2.5px solid transparent",
                  marginBottom: "-1.5px",
                  cursor: "pointer", whiteSpace: "nowrap",
                  transition: "color 0.25s",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Panel */}
          <div style={{
            maxWidth: "1100px", margin: "0 auto",
            background: "#ffffff",
            border: "1.5px solid #EDE6DF",
            borderTop: "none",
            borderRadius: "0 0 16px 16px",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: isSmall ? "1fr" : "1fr 1.4fr",
            minHeight: "320px",
          }}>
            {/* Left Pane */}
            <div style={{
              background: "#FFF9F5",
              padding: isTablet ? "32px 28px" : "44px 40px",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              textAlign: "center",
              borderRight: isSmall ? "none" : "1.5px solid #EDE6DF",
              borderBottom: isSmall ? "1.5px solid #EDE6DF" : "none",
              position: "relative", overflow: "hidden",
            }}>
              <span style={{
                position: "absolute", bottom: "-30px", left: "-30px",
                width: "120px", height: "120px", borderRadius: "50%",
                background: "#F5C49A", opacity: "0.18", pointerEvents: "none",
              }} />
              <h4 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: isTablet ? "19px" : "clamp(18px, 2.2vw, 24px)",
                fontWeight: "700", color: "#0d1f2d",
                lineHeight: "1.35", margin: "0",
              }}>{current.title}</h4>
            </div>

            {/* Right Pane */}
            <div style={{
              padding: isTablet ? "28px 24px" : "44px 44px 44px 40px",
              display: "flex", flexDirection: "column", justifyContent: "center",
            }}>
              <p style={{
                fontSize: "15px", color: "#7A6E66",
                lineHeight: "1.85", fontWeight: "300", marginBottom: "24px",
              }}>{current.desc}</p>
              <div style={{ height: "2px", background: "#EDE6DF", borderRadius: "2px", overflow: "hidden" }}>
                <div style={{
                  height: "100%", background: "#ed8337",
                  borderRadius: "2px", width: current.progress,
                  transition: "width 0.4s ease",
                }} />
              </div>
              <p style={{ fontSize: "11px", color: "#bbb", marginTop: "8px", letterSpacing: "1px" }}>
                {activeTab + 1} / {solutionTabs.length}
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 5: CASE STUDY
───────────────────────────────────────── */
function CaseStudySection() {
  return (
    <section className="cs-section" id="case-study">
      <div className="cs-inner">
        <div className="cs-header">
          <div className="partners-header1" style={{ textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Approach in</h2>
          </div>          <h3 className="cs-h2">Real Results for <span>Real  Businesses</span></h3>
        </div>
        <div className="cs-quote-wrap">
          <div className="cs-q-mark">"</div>
          <div className="cs-q-mark-r">"</div>
          <p className="cs-quote-text">
            We have helped businesses across <em>industries streamline compliance</em>, build their <em>digital presence</em>, and achieve  <em>consistent growth.</em>
          </p>
          <div className="cs-quote-attr">
            <span className="cs-quote-line"></span>
            Explore Our Work
            <span className="cs-quote-line"></span>
          </div>
        </div>
      </div>
    </section>
  );
}


const faqData = [
  { q: "Why does a healthcare clinic/hospital need digital marketing?", a: "Digital marketing helps healthcare providers improve online visibility, build patient trust, promote healthcare services, and attract new patients. It supports appointment generation, strengthens local search presence, and helps clinics and hospitals communicate effectively with patients across digital platforms." },
  { q: "How can social media marketing help healthcare businesses?", a: "Social media marketing helps healthcare businesses improve patient engagement, increase awareness about treatments and services, share health-related information, and build credibility. It also supports brand visibility, patient communication, and targeted campaigns that help attract relevant healthcare audiences online." },
  { q: "What features should a healthcare website have?", a: "A healthcare website should include service information, doctor profiles, online appointment booking, contact details, patient testimonials, mobile responsiveness, SEO optimization, secure patient communication, and easy navigation. These features improve patient experience, accessibility, trust, and overall engagement with healthcare services" },
  { q: "Can you build a website with online appointment booking?", a: "Yes, we develop healthcare websites with integrated online appointment booking systems, patient enquiry forms, doctor schedules, automated confirmations, and user-friendly interfaces. These features help healthcare providers streamline patient management, improve accessibility, and enhance overall patient convenience and operational efficiency." },
  { q: "What HR services do healthcare providers need?", a: "Healthcare providers typically require recruitment, payroll management, compliance management, attendance tracking, workforce planning, onboarding, shift scheduling, and HR policy support. These services help manage medical and non-medical staff efficiently while ensuring compliance with healthcare and labor regulations." },
  { q: "How does payroll management work for medical staff?", a: "Payroll management for medical staff includes salary processing, shift calculations, overtime management, statutory deductions, attendance tracking, incentive handling, and compliance reporting. Structured payroll systems ensure accurate payments, reduce administrative workload, and maintain smooth workforce operations within healthcare organizations." },
];
function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <section className="faq-section" style={{ background: "#ffffff" }}>
      <div className="partners-header2" style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2 className="partners-eyebrow" >Frequently Asked Questions</h2>
      </div>
      <div className="container">
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
/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
export default function HealthcarePCS() {

  return (
    <Layout
      title="Healthcare Digital Marketing Company for Hospitals & Clinics"
      description="Grow your healthcare business with expert digital marketing, website development, and HR solutions. Attract more patients and scale with confidence."
    >
      <SEOHead />
      <style>{`
      main {
background: #004168;
}
/* Page-specific overrides — healthcare differs from the other 7 industry pages here */
.pcs-inner { max-width:1200px; }
.pcs-lead { margin:0 auto; }
.seo-hero-section { grid-template-columns: 1fr; }

/* NOTE: source jsx did not include ".hero-img-right { order:2 !important; }" inside
   the max-width:900px block that the other 7 pages have — likely fine since this
   page already uses a single-column hero grid, flagging for awareness. */
      `}</style>
      <HeroSection />
      <ApproachSection />
      <WhyPCSSection />
      <ChallengesSection />
      <CaseStudySection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
}