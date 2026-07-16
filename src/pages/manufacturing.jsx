import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import CTASection from "../components/HomePage/CTA";
import Layout from '@theme/Layout';
const banner = "/img/manufacturing.webp";
import Head from '@docusaurus/Head';
import '../css/industries.css';

function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/manufacturing/";
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
            "@id": "https://www.priyamconsultancy.com/manufacturing/",
            "name": "Manufacturing"
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
      "@id": "https://www.priyamconsultancy.com/manufacturing/#service",
      "name": "Manufacturing Industry Services",
      "serviceType": "Business Solutions for Manufacturing Industry",
      "url": "https://www.priyamconsultancy.com/manufacturing/",
      "description": "Priyam Consultancy provides digital marketing, website development, HR services, recruitment solutions, payroll management, business registration, statutory compliance, Virtual CFO services, accounting and business consulting solutions tailored for manufacturing companies, factories, industrial businesses and production units across India.",
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
        "name": "What is the best digital marketing strategy for manufacturing companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best digital marketing strategy for manufacturing companies includes SEO, content marketing, LinkedIn marketing, performance advertising, and professional website development. These strategies help improve brand visibility, generate B2B enquiries, showcase capabilities, and strengthen long-term market positioning within competitive industrial sectors."
        }
      }, {
        "@type": "Question",
        "name": "Does digital marketing work for B2B manufacturing companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, digital marketing is highly effective for B2B manufacturing companies. It helps businesses reach decision-makers, generate qualified leads, improve search visibility, showcase technical expertise, and build credibility through SEO, industry-focused content, LinkedIn marketing, and targeted advertising campaigns."
        }
      }, {
        "@type": "Question",
        "name": "How much does a manufacturing website cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Manufacturing website costs depend on project scope, features, number of pages, integrations, and customization requirements. Factors like product catalogs, enquiry systems, multilingual support, and SEO optimization influence pricing. We provide scalable website solutions tailored to your business and operational requirements."
        }
      }, {
        "@type": "Question",
        "name": "How can recruitment services help manufacturing companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Recruitment services help manufacturing companies identify skilled workers, technical staff, supervisors, and operational professionals efficiently. Structured hiring support reduces recruitment time, improves workforce quality, supports production continuity, and helps businesses manage large-scale or urgent hiring requirements effectively."
        }
      }, {
        "@type": "Question",
        "name": "What HR policies are essential for manufacturing companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Manufacturing companies commonly require policies related to attendance, workplace safety, employee conduct, overtime, leave management, payroll, grievance handling, compliance, and labor regulations. Structured HR policies help maintain operational discipline, workforce management, legal compliance, and smooth organizational functioning."
        }
      }, {
        "@type": "Question",
        "name": "What licenses are required for manufacturing businesses in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Manufacturing businesses in India may require GST registration, factory license, trade license, pollution control approvals, MSME registration, labor law registrations, and industry-specific permits. Required licenses vary depending on the business type, production activities, operational scale, and applicable regulations."
        }
      }]

    },
  ];

  return (
    <Head>
      <title>Digital Marketing for Manufacturers | Website & HR Services</title>
      <meta name="description" content="Boost your business visibility with expert digital marketing, website development, and HR solutions. Generate leads, increase visibility, and scale faster. " />
      <meta name="keywords" content="digital marketing for manufacturers, Hr solutions for manufacturers, website development for manufacturers, website development, Industrial Website Development" />
      <link rel="canonical" href="https://www.priyamconsultancy.com/manufacturing/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Digital Marketing for Manufacturers | Website & HR Services" />
      <meta property="og:description" content="Boost your business visibility with expert digital marketing, website development, and HR solutions. Generate leads, increase visibility, and scale faster. " />
      <meta property="og:url" content="https://www.priyamconsultancy.com/manufacturing/" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="PCS Business Solution" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Digital Marketing for Manufacturers | Website & HR Services" />
      <meta name="twitter:description" content="Boost your business visibility with expert digital marketing, website development, and HR solutions. Generate leads, increase visibility, and scale faster. " />
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

      {/* Dark overlay for text readability */}
      <div className="hero-overlay" style={{ position: "absolute", inset: 0, zIndex: 1 }} />

      {/* Orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      {/* LEFT CONTENT — order:1 on mobile (comes first) */}
      <div className="hero-content-left" style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", paddingBottom: "3rem", order: 1 }}>
        <div className="seo-badge"><div className="badge-dot-red" />Manufacturing </div>
        <h1 className="seo-hero-heading">
          Driving Scalable with
          <span className="seo-underline seo-red">Manufacturing Growth</span>
          with Confidence
        </h1>
        <p className="seo-sub">
          Supporting manufacturers from inception to expansion, PCS brings together registration, compliance, HR solutions for manufacturers, digital transformation, and digital marketing for manufacturers under one roof — creating a seamless path to scalable growth.     </p>
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
          <h2 className="ap2-heading"><span>Manufacturing Industry   </span> — Driving Growth Through Innovation</h2>
          <p className="ap2-intro">
            The manufacturing industry plays a crucial role in economic development, spanning small-scale units to large industrial enterprises — creating vast opportunities for growth and expansion.            </p>
          <p className="ap2-intro">
            However, in today’s competitive landscape, operational efficiency alone is not enough. Compliance, digital presence, workforce management, and technology adoption are essential for manufacturers to stay competitive. Businesses investing in digital marketing for manufacturers and digital capabilities are better positioned to reach new markets and scale effectively. That’s where PCS steps in with end-to-end support.</p>

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
          </div>          <h3 className="pcs-h2">The Biggest Challenges in the  <span><i>Manufacturing Industry  </i></span> Today</h3>
          <p className="pcs-lead">
            Running a manufacturing business comes with its own set of complexities. Here are the most common challenges:            </p>
        </div>
        <div className="pcs-radial-layout">
          {/* LEFT */}
          <div className="pcs-radial-col left" style={{width: '100%'}}>
            {[
              { num: "01 · Expertise", title: "Compliance Complexity", desc: " Managing registrations, licenses, and regulatory filings can be time-consuming and complex.", icon: "/img/icon/manufacturing-compliance.webp", iconStyle: { background: "rgba(0,65,104,0.3)", borderColor: "rgba(0,130,210,0.5)" } },
              { num: "02 · Approach", title: "Digital Absence ", desc: " Lack of a strong online presence highlights the need for website development for manufacturers and industrial website development.", icon: "/img/icon/manufacturing-digital-absence.webp", iconStyle: { background: "rgba(237,131,55,0.2)", borderColor: "rgba(237,131,55,0.5)" } },
              { num: "03 · Reliability", title: "Market Reach", desc: "Without effective digital marketing for manufacturers, businesses struggle to reach new clients and expand their market.", icon: "/img/icon/manufacturing-buyer-reach.webp", iconStyle: { background: "rgba(10,82,130,0.3)", borderColor: "rgba(20,120,190,0.5)" } },
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
                  <div className="pcs-center-emoji"><img src="/img/icon/manufacturing.webp" alt="PCS" style={{ width: "36px", height: "36px", objectFit: "contain" }} /></div>
                  <div className="pcs-center-label">PCS Manufacturing Industry </div>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="pcs-radial-col right">
            {[
              { num: "04 · Growth", title: "Workforce Challenges", desc: "Managing labor and operations efficiently requires strong HR solutions for manufacturers.", icon: "/img/icon/manufacturing-workforce.webp", iconStyle: { background: "rgba(201,109,26,0.2)", borderColor: "rgba(237,131,55,0.5)" } },
              { num: "05 · Delivery", title: "Technology Gap", desc: "Limited adoption of digital tools leads to inefficiencies and missed growth opportunities.", icon: "/img/icon/manufacturing-technology.webp", iconStyle: { background: "rgba(0,42,68,0.4)", borderColor: "rgba(0,100,170,0.5)" } },
              { num: "06 · Value", title: "Brand Visibility", desc: "Poor online visibility reduces credibility and impacts business growth.", icon: "/img/icon/manufacturing-brand-visibility.webp", iconStyle: { background: "rgba(20,102,160,0.3)", borderColor: "rgba(30,140,210,0.5)" } },
            ].map((p, i) => (
              <div className="pcs-point" key={i}>
                <div className="pcs-point-icon-wrap" style={p.iconStyle}><img src={p.icon} alt={p.title} style={{ width: "30px", height: "30px", objectFit: "contain" }} /></div>
                <div className="pcs-point-body">
                  <span className="pcs-point-num">{p.num}</span>
                  <h4 className="pcs-point-title">{p.title}</h4>
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
    desc: "Comprehensive support covering company registration, statutory compliance, accounting, GST, payroll, and audits — all in one place. From setup to financial guidance like banking, loans, CMA reports, company valuations, and Virtual CFO services, we ensure your manufacturing business runs smoothly and stays compliant.",
    progress: "20%",
  },
  {
    num: "02",
    label: "Digital Marketing",
    tag: "02 — Web",
    title: "Digital Marketing for Manufacturers",
    desc: "Our digital marketing for manufacturers strategies are designed to improve visibility, generate leads, and expand market reach. Through SEO, paid campaigns, content, and social media, we deliver measurable results and help your business grow consistently.",
    progress: "40%",
  },
  {
    num: "03",
    label: "Website Development ",
    tag: "03 — Trust",
    title: "Website Development for Manufacturers",
    desc: "Professional website development for manufacturers, including industrial website development, designed to showcase your capabilities and build credibility. We create responsive, high-performing websites that strengthen your online presence and drive engagement.",
    progress: "60%",
  },
  {
    num: "04",
    label: "HR Solutions",
    tag: "04 — HR Management",
    title: "Manufacturing Workforce & HR Solutions",
    desc: "End-to-end HR solutions for manufacturers, including recruitment, workforce management, and payroll support — ensuring smooth operations, efficient staffing, and structured HR processes.",
    progress: "80%",
  },
  {
    num: "05",
    label: "Digital Transformation  ",
    tag: "05 — Visibility",
    title: "Digital Transformation Solutions ",
    desc: "Smart solutions to streamline manufacturing operations. From process automation and custom applications to data-driven insights, we help improve efficiency and support scalable growth.",
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
            Manufacturers
          </span>{" "}   Grow
          Grow
        </h3>
        <p style={{
          fontSize: isMobile ? "13px" : "15px", color: "#000000", fontWeight: "300",
          margin: "30px auto", lineHeight: "1.75",
        }}>
          From business registration to digital growth and website development, we provide the right solutions at every stage of your manufacturing business journey.
        </p>      </div>

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
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Approach in</div>
          </div>          <h2 className="cs-h2">Real Results for <span>Real  Businesses</span></h2>
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
  { q: "What is the best digital marketing strategy for manufacturing companies?", a: "The best digital marketing strategy for manufacturing companies includes SEO, content marketing, LinkedIn marketing, performance advertising, and professional website development. These strategies help improve brand visibility, generate B2B enquiries, showcase capabilities, and strengthen long-term market positioning within competitive industrial sectors." },
  { q: "Does digital marketing work for B2B manufacturing companies?", a: "Yes, digital marketing is highly effective for B2B manufacturing companies. It helps businesses reach decision-makers, generate qualified leads, improve search visibility, showcase technical expertise, and build credibility through SEO, industry-focused content, LinkedIn marketing, and targeted advertising campaigns." },
  { q: "How much does a manufacturing website cost?", a: "Manufacturing website costs depend on project scope, features, number of pages, integrations, and customization requirements. Factors like product catalogs, enquiry systems, multilingual support, and SEO optimization influence pricing. We provide scalable website solutions tailored to your business and operational requirements." },
  { q: "How can recruitment services help manufacturing companies?", a: "Recruitment services help manufacturing companies identify skilled workers, technical staff, supervisors, and operational professionals efficiently. Structured hiring support reduces recruitment time, improves workforce quality, supports production continuity, and helps businesses manage large-scale or urgent hiring requirements effectively." },
  { q: "What HR policies are essential for manufacturing companies?", a: "Manufacturing companies commonly require policies related to attendance, workplace safety, employee conduct, overtime, leave management, payroll, grievance handling, compliance, and labor regulations. Structured HR policies help maintain operational discipline, workforce management, legal compliance, and smooth organizational functioning." },
  { q: "What licenses are required for manufacturing businesses in India?", a: "Manufacturing businesses in India may require GST registration, factory license, trade license, pollution control approvals, MSME registration, labor law registrations, and industry-specific permits. Required licenses vary depending on the business type, production activities, operational scale, and applicable regulations." },
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
      title="Digital Marketing for Manufacturers | Website & HR Services"
      description="Boost your business visibility with expert digital marketing, website development, and HR solutions. Generate leads, increase visibility, and scale faster. "
    >
      <SEOHead />
      <style>{`
/* Page-specific overrides — manufacturing differs from the other 7 industry pages here */
.hero-content-left { padding: 0; }
@media(max-width:480px){
  .seo-hero-section { padding:4rem 4% 2.5rem !important; }
}
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