import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import CTASection from "../components/HomePage/CTA";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import '../css/industries.css';
const banner = "/img/textile.webp";



// EmailJS will be loaded via CDN in the component

/* ═══════════════════════════════════════════════════
   SEO META & SCHEMA
═══════════════════════════════════════════════════ */
function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/textile/";
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
            "@id": "https://www.priyamconsultancy.com/textile/",
            "name": "textile"
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
      "@id": "https://www.priyamconsultancy.com/textile/#service",
      "name": "Textile Industry Services",
      "serviceType": "Business Solutions for Textile Industry",
      "url": "https://www.priyamconsultancy.com/textile/",
      "description": "Priyam Consultancy provides digital marketing, website development, HR services, payroll management, business registration, statutory compliance, Virtual CFO services, accounting and business consulting solutions tailored for textile businesses across India.",
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
        "name": "Why does a textile business need digital marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital marketing helps textile businesses improve brand visibility, attract buyers, showcase products, and generate enquiries across domestic and international markets. It supports lead generation, strengthens online presence, and helps textile brands compete effectively through SEO, social media, and performance marketing strategies."
        }
      }, {
        "@type": "Question",
        "name": "What licenses are required for textile businesses in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Textile businesses in India may require GST registration, trade license, MSME registration, factory license, pollution control approvals, import-export code (IEC), and labor law registrations. Required licenses depend on manufacturing activities, export operations, and the scale of business operations."
        }
      }, {
        "@type": "Question",
        "name": "How can you help with textile compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support textile businesses with statutory compliance, labor law management, payroll compliance, GST filings, factory-related compliance, documentation, and regulatory reporting. Our services help businesses maintain legal compliance, reduce operational risks, and ensure smooth day-to-day workforce and business operations."
        }
      }, {
        "@type": "Question",
        "name": "What HR services do textile companies need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Textile companies commonly require recruitment, payroll management, attendance tracking, labor compliance, shift management, workforce planning, onboarding, and HR policy support. These services help manage large operational teams efficiently while maintaining productivity and compliance across manufacturing units and facilities."
        }
      }, {
        "@type": "Question",
        "name": "Does digital marketing work for textile exporters?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, digital marketing is highly effective for textile exporters. SEO, LinkedIn marketing, content marketing, and performance campaigns help exporters improve international visibility, generate global enquiries, showcase products professionally, and connect with distributors, wholesalers, and buyers across international markets."
        }
      }, {
        "@type": "Question",
        "name": "What certifications do textile exporters need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Textile exporters may require certifications such as Import Export Code (IEC), GST registration, ISO certification, OEKO-TEX certification, GOTS certification, and other buyer or country-specific compliance certifications. Certification requirements vary based on export markets, products, and industry regulations."
        }
      }]

    },
  ];

  return (
    <Head>
      <title>Digital Marketing for Textile Industry | Web & HR Services</title>
      <meta name="description" content="Grow your textile or garment business with digital marketing, website development, and HR solutions. Attract buyers, generate leads, and scale faster." />
      <meta name="keywords" content="digital marketing for textile industry, Best textile website development Company, digital marketing for clothing brands, Digital Marketing for Textile & Garment Brands, Digital Transformation Solutions for Textile Manufacturers, Textile Business Registration & Compliance Services, Digital Marketing Agency for Fabrics & Textiles, garment industry manpower services" />
      <link rel="canonical" href="https://www.priyamconsultancy.com/textile/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Digital Marketing for Textile Industry | Web & HR Services" />
      <meta property="og:description" content="Grow your textile or garment business with digital marketing, website development, and HR solutions. Attract buyers, generate leads, and scale faster." />
      <meta property="og:url" content="https://www.priyamconsultancy.com/textile/" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="PCS Business Solution" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Textile Industry Business Solutions | PCS Business Solution" />
      <meta name="twitter:description" content="Grow your textile or garment business with digital marketing, website development, and HR solutions. Attract buyers, generate leads, and scale faster." />
      <meta name="twitter:image" content={imageUrl} />
      {schemaData.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Head>
  );
}

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
        <div className="seo-badge"><div className="badge-dot-red" />Textile </div>
        <h1 className="seo-hero-heading">
          Empowering with Grow
          <span className="seo-underline seo-red" style={{ marginRight: '10px' }}>Textile Industry</span>
          to Grow with Confidence
        </h1>
        <p className="seo-sub">
          Supporting textile and garment businesses from inception to expansion, PCS brings together registration, compliance, HR solutions, digital transformation, and digital marketing for the textile industry under one roof — creating a seamless path to scalable growth.         </p>
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
          <h2 className="ap2-heading"><span>Textile Industry in India </span> — Tradition Meets Transformation</h2>
          <p className="ap2-intro">
            India's textile industry is a major contributor to the nation's economy and employment, spanning fabric manufacturers and garment exporters to clothing brands and retail outlets — offering immense opportunities.          </p>
          <p className="ap2-intro">
            But staying competitive in today's fast-evolving market demands more than just quality products. Compliance, digital presence, skilled manpower, and technology adoption have become essential for textile businesses to survive and scale. That’s where PCS, a trusted Digital Marketing Agency for Fabrics & Textile steps in end-to-end support.           </p>

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
          </div>          <h3 className="pcs-h2">The Biggest Challenges in the  <span><i>Textile Industry </i></span> Today</h3>
          <p className="pcs-lead">
            Running a healthcare organization comes with its own set of complexities. Here are the most common challenges faced by providers:
          </p>
        </div>
        <div className="pcs-radial-layout">
          {/* LEFT */}
          <div className="pcs-radial-col left" style={{width: '100%'}}>
            {[
              { num: "01 · Expertise", title: "Compliance Complexity ", desc: "Managing licenses, GST, and regulatory filings overwhelms most textile businesses daily. ", icon: "/img/icon/textile-compliance.webp", iconStyle: { background: "rgba(0,65,104,0.3)", borderColor: "rgba(0,130,210,0.5)" } },
              { num: "02 · Approach", title: "Digital Absence ", desc: "The absence of a website and structured digital presence prevents textile businesses from tapping into wider markets. ", icon: "/img/icon/textile-digital-absence.webp", iconStyle: { background: "rgba(237,131,55,0.2)", borderColor: "rgba(237,131,55,0.5)" } },
              { num: "03 · Reliability", title: "Buyer Reach ", desc: "Without digital marketing, garment brands struggle to connect with right buyers.", icon: "/img/icon/textile-buyer-reach.webp", iconStyle: { background: "rgba(10,82,130,0.3)", borderColor: "rgba(20,120,190,0.5)" } },
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
                  <div className="pcs-center-emoji"><img src="/img/icon/textile.webp" alt="PCS Textile" style={{ width: "36px", height: "36px", objectFit: "contain" }} /></div>
                  <div className="pcs-center-label">PCS Textile Industry </div>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="pcs-radial-col right">
            {[
              { num: "04 · Growth", title: "Manpower Shortage ", desc: "Finding and retaining skilled garment workers remains a constant operational challenge.", icon: "/img/icon/textile-manpower.webp", iconStyle: { background: "rgba(201,109,26,0.2)", borderColor: "rgba(237,131,55,0.5)" } },
              { num: "05 · Delivery", title: "Technology Gap ", desc: "Many textile businesses still run manually, causing inefficiencies and missed growth.", icon: "/img/icon/textile-technology.webp", iconStyle: { background: "rgba(0,42,68,0.4)", borderColor: "rgba(0,100,170,0.5)" } },
              { num: "06 · Value", title: "Brand Visibility ", desc: "Poor online visibility makes it harder for clothing brands to attract customers.", icon: "/img/icon/textile-brand-visibility.webp", iconStyle: { background: "rgba(20,102,160,0.3)", borderColor: "rgba(30,140,210,0.5)" } },
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
    desc: "Comprehensive Textile Business Registration & Compliance Services covering company incorporation, statutory compliance, accounting, GST, payroll, and audits — all in one place. From registrations to financial support like banking, loans, CMA reports, company valuations, and Virtual CFO guidance, we ensure your textile business runs smoothly and stays fully compliant.",
    progress: "20%",
  },
  {
    num: "02",
    label: "Digital Marketing",
    tag: "02 — Web",
    title: "Digital Marketing for Textile & Garment Brands",
    desc: "As a Digital Marketing Agency for Fabrics & Textiles, we drive visibility and growth through SEO, paid campaigns, content, and social media. We also build high-performing websites and run targeted email & WhatsApp campaigns to connect your brand with the right buyers and boost conversions. ",
    progress: "40%",
  },
  {
    num: "03",
    label: "Website Development ",
    tag: "03 — Trust",
    title: "Textile Website Development ",
    desc: "Professional textile website development company has solutions tailored for textile and garment businesses — from custom websites and ecommerce platforms (Shopify, WooCommerce) to fast, reliable static sites. Built to showcase your brand effectively, enhance user experience, and drive real, measurable business growth.",
    progress: "60%",
  },
  {
    num: "04",
    label: "HR Solutions",
    tag: "04 — HR Management",
    title: "Textile Workforce & HR Solutions  ",
    desc: "End-to-end garment industry manpower services designed to keep your operations running smoothly. From recruitment and candidate screening to payroll management, statutory compliance, and HR policy development — we ensure you have the right people, systems, and support to scale with confidence. ",
    progress: "80%",
  },
  {
    num: "05",
    label: "Digital Transformation  ",
    tag: "05 — Visibility",
    title: "Digital Transformation Solutions ",
    desc: "Smart Digital Transformation Solutions for Textile Manufacturers to streamline operations and improve efficiency. From business process automation and custom web & mobile applications to data analytics, we help modernize your workflows and enable smarter decision-making for scalable growth. ",
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
          How We Help Clothing{" "}
          <span style={{ color: "#ed8337", fontStyle: "italic" }}>
            Brands &amp; Textile Businesses
          </span>{" "}
          Grow
        </h3>
        <p style={{
          fontSize: isMobile ? "13px" : "15px", color: "#000000", fontWeight: "300",
          margin: "30px auto", lineHeight: "1.75",
        }}>
          From business registration to digital growth and website development, we provide the right solutions at every stage of your textile business journey        </p>
      </div>

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
  { q: "Why does a textile business need digital marketing?", a: " Digital marketing helps textile businesses improve brand visibility, attract buyers, showcase products, and generate enquiries across domestic and international markets. It supports lead generation, strengthens online presence, and helps textile brands compete effectively through SEO, social media, and performance marketing strategies." },
  { q: "What licenses are required for textile businesses in India?", a: " Textile businesses in India may require GST registration, trade license, MSME registration, factory license, pollution control approvals, import-export code (IEC), and labor law registrations. Required licenses depend on manufacturing activities, export operations, and the scale of business operations." },
  { q: "How can you help with textile compliance?", a: "We support textile businesses with statutory compliance, labor law management, payroll compliance, GST filings, factory-related compliance, documentation, and regulatory reporting. Our services help businesses maintain legal compliance, reduce operational risks, and ensure smooth day-to-day workforce and business operations." },
  { q: "What HR services do textile companies need?", a: "Textile companies commonly require recruitment, payroll management, attendance tracking, labor compliance, shift management, workforce planning, onboarding, and HR policy support. These services help manage large operational teams efficiently while maintaining productivity and compliance across manufacturing units and facilities." },
  { q: "Does digital marketing work for textile exporters?", a: "Yes, digital marketing is highly effective for textile exporters. SEO, LinkedIn marketing, content marketing, and performance campaigns help exporters improve international visibility, generate global enquiries, showcase products professionally, and connect with distributors, wholesalers, and buyers across international markets." },
  { q: "What certifications do textile exporters need?", a: " Textile exporters may require certifications such as Import Export Code (IEC), GST registration, ISO certification, OEKO-TEX certification, GOTS certification, and other buyer or country-specific compliance certifications. Certification requirements vary based on export markets, products, and industry regulations." },
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
      title="Digital Marketing for Textile Industry | Web & HR Services"
      description="Grow your textile or garment business with digital marketing, website development, and HR solutions. Attract buyers, generate leads, and scale faster."
    >
      <SEOHead />
      <style>{`
/* Page-specific overrides — textile differs from the other 7 industry pages here */
.pcs-inner { max-width:1200px; }
.pcs-lead { margin:0 auto; }
.pcs-point-icon-wrap { width:50px; height:50px; }
@media(max-width:900px){
  .seo-hero-section { padding:2rem 5% 3rem !important; }
}
@media(max-width:480px){
  .seo-hero-section { padding:2rem 4% 2rem !important; }
}
@media(max-width:900px){
  .seo-hero-section { min-height:45svh !important; }
}
  main {
background: #004168;
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