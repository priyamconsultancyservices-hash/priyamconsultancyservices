import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import CTASection from "../components/HomePage/CTA";
import BlogSection from "../components/BlogSection";
import Layout from '@theme/Layout';
const banner = "/img/sterlo.webp";
import Head from '@docusaurus/Head';
import '../css/pages-common.css';

function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/sterlo-partners/";
  const imageUrl = "https://www.priyamconsultancy.com/img/microsoft-app.png";

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
            "@id": "https://www.priyamconsultancy.com/sterlo-partners/",
            "name": "sterlo-partners"
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
  ];

  return (
    <Head>
      <title>Official Sterlo Partner | Sterlo Implementation Partner for PCS </title>
      <meta name="description" content="Our business efficiency and digital transformation is enhanced through Sterlo implementation, integration, and support from PCS, a trusted official Sterlo partner. " />
      <meta name="keywords" content="Official Odoo Partner, Odoo Implementation Partner, Odoo ERP Solutions Partner, Odoo Official Partner for India, Odoo Gold Partner, Odoo ERP Consultant Partners, Odoo Implementation & ERP Solutions, Odoo Official Certified Partner " />
      <link rel="canonical" href="https://www.priyamconsultancy.com/sterlo-partners/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Official Sterlo Partner | Sterlo Implementation Partner for PCS " />
      <meta property="og:description" content="Our business efficiency and digital transformation is enhanced through Sterlo implementation, integration, and support from PCS, a trusted official Sterlo partner. " />
      <meta property="og:url" content="https://www.priyamconsultancy.com/sterlo-partners/" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content=" Microsoft App" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Official Sterlo Partner | Sterlo Implementation Partner for PCS " />
      <meta name="twitter:description" content="Our business efficiency and digital transformation is enhanced through Sterlo implementation, integration, and support from PCS, a trusted official Sterlo partner. " />
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
    <section className="hero-main-section" style={{
      minHeight: "100vh",
      display: "grid",
      // gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      gap: "2rem",
      padding: "4rem 6% 3rem",
      position: "relative",
      overflow: "hidden",
      background: "#004168",
    }}>

      {/* Orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="hero-section-grid">
        {/* CONTENT — always first in DOM → first on mobile */}
        <div className="hero-content-col">
          <div className="seo-badge"><div className="badge-dot-red" />Sterlo </div>
          <h1 className="seo-hero-heading">
            Accelerate Innovation
            <span className="seo-underline seo-red">Low Code &amp; No Code</span>
            Solutions Built for Scale
          </h1>
          <p className="seo-sub">
            Sterlo accelerates digital transformation by simplifying app development, workflow automation,implifying app development, workflow automation, implifying app development, workflow automation,  and system integration—helping businesses innovate faster, scale smarter, and achieve operational excellence through intuitive design and seamless connectivity.


          </p>
          <div className="seo-actions">
            <a className="seo-btn-fill" href="/contact-us"><span>Lets Connect</span><div className="seo-btn-arr">›</div></a>
          </div>
        </div>

        {/* IMAGE — second in DOM → second on mobile */}
        <div className="hero-img-col">
          <div className="seo-illus-wrap">
            <img
              src={banner}
              alt="SEO Growth Illustration"
              style={{ width: "100%", height: "100%", objectFit: "contain", position: "relative", zIndex: 5 }}
            />
          </div>
        </div>
      </div>
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
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Approach in</div>
          </div>
          <h2 className="ap2-heading">What is  <span><i>Sterlo</i> </span></h2>
          <p className="ap2-intro">
            Sterlo is a powerful low-code and no-code platform that enables rapid application development with minimal coding effort. It empowers businesses to automate workflows, integrate multiple systems, and accelerate innovation efficiently, reducing dependence on extensive IT resources while simplifying development processes and improving overall operational agility across diverse environments.
          </p>
          <p className="ap2-intro">
            PCS leverages Sterlo to design and deploy applications fully tailored to unique business processes and operational needs. These solutions ensure scalability, high performance, and seamless integration with databases, APIs, and third-party tools, enabling organizations to optimize efficiency, enhance productivity, and support sustainable digital transformation initiatives.
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

/* ═══════════════════════════════════════════
   SECTION 2.5 — WHY CHOOSE MICROSOFT APPS
═══════════════════════════════════════════ */
const WHY_CHOOSE_FEATURES = [
  {
    icon: (
      <img src="/img/icon/sterlo-efficiency.webp" alt="Custom Integrations" width="26" height="26" />
    ),
    title: "Low-Code Efficiency",
    desc: "Sterlo’s drag-and-drop interface allows businesses to build applications rapidly without extensive coding knowledge.",
  },
  {
    icon: (
      <img src="/img/icon/sterlo-scalable.webp" alt="User-Friendly Design" width="26" height="26" />
    ),
    title: "Scalable Applications",
    desc: "Applications built on Sterlo are designed to grow with your business.",
  },

];

function WhyChooseSection() {
  return (
    <section style={{
      background: "#ffffff",
      padding: "2.5rem 6% 7rem",
      position: "relative",
      overflow: "hidden",
    }}>

      <div className="wc2-inner">
        {/* LEFT — text + inline features */}
        <div>
          <div className="partners-header1">
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Why choose Sterlo </h2>
          </div>          <h3 className="wc2-heading">
            Rapid Development for Agile Organizations         </h3>
          <p className="wc2-desc">
            Sterlo empowers teams to accelerate application development while reducing costs and dependency on developers.
          </p>

          <div className="wc2-features">
            {WHY_CHOOSE_FEATURES.map((feat, i) => (
              <div key={i} className="wc2-feat" style={{ animation: `fadeUp 0.5s ${i * 0.1}s ease both` }}>
                <div className="wc2-feat-icon">{feat.icon}</div>
                {i < WHY_CHOOSE_FEATURES.length - 1 && <div className="wc2-divider" style={{ display: "none" }} />}
                <div className="wc2-feat-body">
                  <h4 className="wc2-feat-title">{feat.title}</h4>
                  <div className="wc2-feat-desc">{feat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — illustration */}
        <div className="wc2-right">
          <div className="wc2-img-bg" />
          <img
            src="/img/why-choose-sterlo.webp"
            alt="Why Choose Microsoft Apps"
            className="wc2-img"
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 3 — SEO SERVICES (6 HOVER CARDS)
   Default: Icon + Heading only
   Hover: Icon floats to top card, content appears
═══════════════════════════════════════════ */
const SEO_SERVICES = [
  {
    icon: (
      <img src="/img/icon/sterlo-app-dev.webp" alt="App Development" width="32" height="32" />
    ),
    heading: "Application Deployment",
    content: "End-to-end Sterlo app setup tailored to business goals.",
    tag: "Foundation",
  },
  {
    icon: (
      <img src="/img/icon/sterlo-process-congif.webp" alt="Workflow Automation" width="32" height="32" />
    ),
    heading: "Process Configuration",
    content: "Customize workflows and modules for seamless operations.",
    tag: "On-Site",
  },
  {
    icon: (
      <img src="/img/icon/sterlo-connectivity.webp" alt="System Integration" width="32" height="32" />
    ),
    heading: "System Connectivity",
    content: "Integrate Sterlo apps with third-party tools easily.",
    tag: "Infrastructure",
  },
  {
    icon: (
      <img src="/img/icon/sterlo-data-transition.webp" alt="Data Analytics" width="32" height="32" />
    ),
    heading: "Data Transition",
    content: "Smooth and secure migration from legacy systems.",
    tag: "Authority",
  },
  {
    icon: (
      <img src="/img/icon/sterlo-performance.webp" alt="Performance Management" width="32" height="32" />
    ),
    heading: "Performance Optimization",
    content: "Ensure reliability through updates and continuous improvements.",
    tag: "Local",
  },
  {
    icon: (
      <img src="/img/icon/sterlo-team-empowerment.webp" alt="User Enablement" width="32" height="32" />
    ),
    heading: "Team Empowerment",
    content: "Train users to maximize Sterlo’s full potential.",
    tag: "Reporting",
  },
];

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered ? "#ffffff" : "#0d3f60",
        border: hovered ? "2px solid #ed8337" : "2px solid rgba(237,131,55,0.18)",
        borderRadius: "18px",
        padding: "0",
        overflow: "visible",
        cursor: "pointer",
        transition: "background 0.35s, border-color 0.35s, transform 0.3s, box-shadow 0.35s",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 60px rgba(237,131,55,0.18), 0 4px 24px rgba(2,43,68,0.12)" : "0 4px 24px rgba(0,0,0,0.3)",
        minHeight: "220px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: hovered ? "64px" : "0",
        paddingBottom: "2rem",
        paddingLeft: "1.8rem",
        paddingRight: "1.8rem",
        animation: `fadeUp 0.6s ${index * 0.1}s ease both`,
      }}
    >

      {/* Icon — floats to top on hover */}
      <div style={{
        position: hovered ? "absolute" : "relative",
        top: hovered ? "-28px" : "auto",
        left: hovered ? "50%" : "auto",
        transform: hovered ? "translateX(-50%)" : "none",
        width: "56px",
        height: "56px",
        borderRadius: "14px",
        background: hovered ? "linear-gradient(135deg,#ed8337,#f5a66b)" : "linear-gradient(135deg,#ed8337,#f5a66b)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: hovered ? "0 8px 28px rgba(237,131,55,0.45)" : "0 4px 18px rgba(237,131,55,0.3)",
        color: "#fff",
        flexShrink: 0,
        marginBottom: hovered ? "0" : "1.2rem",
        transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
        zIndex: 10,
      }}>
        <div style={{ width: "32px", height: "32px" }}>{service.icon}</div>
      </div>

      {/* Tag pill */}
      {hovered && (
        <div style={{
          background: "rgba(237,131,55,0.1)",
          color: "#ed8337",
          fontSize: "0.6rem",
          fontWeight: "700",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          padding: "0.25rem 0.8rem",
          borderRadius: "50px",
          marginBottom: "0.8rem",
          fontFamily: "'Poppins',sans-serif",
          border: "1px solid rgba(237,131,55,0.25)",
          animation: "fadeIn 0.25s ease",
        }}>
          {service.tag}
        </div>
      )}

      {/* Heading */}
      <h4 style={{
        fontFamily: "'Poppins',sans-serif",
        fontSize: "1.1rem",
        fontWeight: "700",
        color: hovered ? "#ed8337" : "#fff",
        textAlign: "center",
        marginBottom: hovered ? "0.8rem" : "0",
        transition: "color 0.3s, margin 0.3s",
      }}>
        {service.heading}
      </h4>

      {/* Content — visible on hover, dark text on white bg */}
      <p style={{
        fontFamily: "'DM Sans',sans-serif",
        fontSize: "0.88rem",
        lineHeight: "1.7",
        color: "rgba(2,43,68,0.7)",
        textAlign: "center",
        maxHeight: hovered ? "200px" : "0",
        overflow: "hidden",
        opacity: hovered ? 1 : 0,
        transition: "max-height 0.4s ease, opacity 0.35s ease 0.05s",
      }}>
        {service.content}
      </p>
    </div>
  );
}

function SEOServicesSection() {
  return (
    <section style={{
      background: "linear-gradient(180deg,#004168 0%,#0a3652 100%)",
      padding: "5rem 6% 6rem",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Background decorative elements */}
      <div style={{ position: "absolute", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle,rgba(237,131,55,0.04) 0%,transparent 70%)", top: "-100px", right: "-100px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle,rgba(17,34,64,0.6) 0%,transparent 70%)", bottom: "-80px", left: "-80px", pointerEvents: "none" }} />

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "4rem", position: "relative", zIndex: 2 }}>
        <div className="partners-header1" style={{textAlign: 'center' }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Services</h2>
        </div>
        <h3 style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.9rem,2.8vw,2.6rem)", fontWeight: "700", color: "#fff", lineHeight: "1.15" }}>
          Comprehensive  <span style={{ color: "#ed8337" }}><i>Sterlo Platform</i></span> Solutions
        </h3>

      </div>

      {/* Cards Grid */}
      <div className="seo-services-grid" style={{ position: "relative", zIndex: 2 }}>
        {SEO_SERVICES.map((service, i) => (
          <ServiceCard key={i} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 4 — PROCESS (White Background)
═══════════════════════════════════════════ */
const PROCESS_STEPS = [
  {
    num: "01",
    icon: (
      <img src="/img/icon/sterlo-discovery.webp" alt="Discovery" width="28" height="28" />
    ),
    title: "Discovery & Analysis",
    desc: "We begin by thoroughly analyzing your business workflows, operational challenges, and digital requirements. This step helps us identify automation opportunities, integration needs, and key performance metrics to design applications that align with your strategic goals.",
  },
  {
    num: "02",
    icon: (
      <img src="/img/icon/sterlo-planning.webp" alt="Planning" width="28" height="28" />
    ),
    title: "Planning & Design",
    desc: "In this phase, we map out your business processes and design user-centric applications. Our team focuses on intuitive interfaces, efficient workflows, and scalable architecture to ensure that the apps will meet current needs and adapt to future growth.",
  },
  {
    num: "03",
    icon: (
      <img src="/img/icon/sterlo-customization.webp" alt="Development" width="28" height="28" />
    ),
    title: "Customization & Development",
    desc: "Using Sterlo’s low-code/no-code platform, we build and customize applications tailored to your specific business goals. Custom modules, automated workflows, and integrations with existing systems ensure functionality, efficiency, and alignment with your operational processes.",
  },
  {
    num: "04",
    icon: (
      <img src="/img/icon/sterlo-testing.webp" alt="Testing" width="28" height="28" />
    ),
    title: "Testing & Deployment",
    desc: "Before launch, every application undergoes rigorous testing to validate features, workflows, and integrations. We ensure seamless deployment with minimal disruption, guaranteeing that the apps function reliably in real-world business environments.",
  },
  {
    num: "05",
    icon: (
      <img src="/img/icon/sterlo-support-optimize.webp" alt="Training" width="28" height="28" />
    ),
    title: "Support & Optimization",
    desc: "After deployment, we provide continuous monitoring, updates, and optimization. Our team offers training and guidance to ensure smooth adoption, while improvements and enhancements keep the applications efficient, scalable, and aligned with evolving business needs.",
  },

];

function ProcessSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(0);
  const active = PROCESS_STEPS[activeTab];

  return (
    <section style={{ background: "#ffffff", padding: "5rem 6%", position: "relative", overflow: "hidden" }}>

      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <div className="partners-header1" style={{textAlign: 'center' }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Process</h2>
        </div>
        <h3 style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(1.9rem,2.8vw,2.6rem)", fontWeight: "700", color: "#000000", lineHeight: "1.15" }}>
          Streamlined Approach for  <span style={{ color: "#ed8337" }}><i>Sterlo App </i> </span>  Development
        </h3>
        <p style={{ marginTop: "0.8rem", color: "rgba(0, 0, 0, 0.86)", fontSize: "0.97rem", margin: "0.8rem auto 0", lineHeight: "1.8" }}>
          Our Sterlo App Development Process handles every phase — from assessment to deployment — with precision, transparency, and efficiency, delivering scalable, integrated applications tailored to your unique business workflows and operational goals.

        </p>
      </div>

      {/* ── DESKTOP: Left vertical tabs + Right content ── */}
      <div className="proc-outer">
        <div className="proc-vtab-col">

          {PROCESS_STEPS.map((step, i) => (
            <button
              key={i}
              className={`proc-vtab-item${activeTab === i ? " active" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              <div className="proc-vtab-icon-wrap">{step.icon}</div>
              <div>
                <div className="proc-vtab-num">{step.num}</div>
                <div className="proc-vtab-name">{step.title}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="proc-content-panel">
          <div>
            <div className="proc-big-num">{active.num}</div>
            <h4 className="proc-content-title">
              {active.title.split(" ").slice(0, 1).join(" ")}{" "}
              <em>{active.title.split(" ").slice(1).join(" ")}</em>
            </h4>
            <p className="proc-content-desc">{active.desc}</p>
            <div className="proc-content-tag">
              <div className="proc-content-dot" />
              Step {active.num}
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE: Accordion cards one by one ── */}
      <div className="proc-mobile-accordion">
        {PROCESS_STEPS.map((step, i) => (
          <div key={i} className={`proc-acc-card${mobileOpen === i ? " open" : ""}`}>
            <button
              className="proc-acc-header"
              onClick={() => setMobileOpen(mobileOpen === i ? -1 : i)}
            >
              <div className="proc-acc-icon-wrap">{step.icon}</div>
              <div className="proc-acc-meta">
                <div className="proc-acc-num">{step.num}</div>
                <div className="proc-acc-title">{step.title}</div>
              </div>
              <div className="proc-acc-chevron">▼</div>
            </button>
            <div className="proc-acc-body">
              <div className="proc-acc-body-num">{step.num}</div>
              <p className="proc-acc-body-desc">{step.desc}</p>
              <div className="proc-acc-body-tag">
                <div className="proc-acc-dot" />
                Step {step.num}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 5 — GET STARTED TODAY (Navy Blue)
   Matches the Microsoft reference design
═══════════════════════════════════════════ */
const GET_STARTED_CARDS = [
  {
    num: "01",
    icon: (
      <img src="/img/icon/sterlo-cerified.webp" alt="Certified Developers" width="24" height="24" />
    ),
    title: "Certified Developers",
    desc: "Skilled in Sterlo low-code/no-code solutions.",
  },
  {
    num: "02",
    icon: (
      <img src="/img/icon/sterlo-tailored.webp" alt="Tailored Solutions" width="24" height="24" />
    ),
    title: "Tailored Solutions",
    desc: "Apps designed for specific business workflows.",
  },
  {
    num: "03",
    icon: (
      <img src="/img/icon/sterlo-continous-support.webp" alt="Continuous Support" width="24" height="24" />
    ),
    title: "Continuous Support",
    desc: "Maintenance, troubleshooting, and updates for operations.",
  },
  {
    num: "04",
    icon: (
      <img src="/img/icon/sterlo-future-ready.webp" alt="Future-Ready Systems" width="24" height="24" />
    ),
    title: "Future-Ready Systems",
    desc: "Flexible solutions to support future growth.",
  },
];

function GetStartedSection() {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section style={{ background: "linear-gradient(135deg,#022b44 0%,#004168 55%,#0a3652 100%)", padding: "6rem 6%", position: "relative", overflow: "hidden" }}>
      {/* subtle bg orb */}
      <div style={{ position: "absolute", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle,rgba(237,131,55,0.06) 0%,transparent 65%)", top: "-150px", right: "-100px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle,rgba(237,131,55,0.04) 0%,transparent 65%)", bottom: "-100px", left: "-80px", pointerEvents: "none" }} />

      {/* Header */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div className="partners-header1" style={{ textAlign: 'center' }}>
          <div className="partners-eyebrow" style={{ marginBottom: '20px' }}>Sterlo Partner</div>
        </div>      <h2 className="gs2-main-title">

          Why PCS for <span className="gs2-title-accent"><i>Sterlo  </i></span> Partner
        </h2>
        <p className="gs2-sub">
          As a trusted Sterlo Partner, PCS delivers industry-focused, results-driven low-code/no-code applications that streamline operations, accelerate digital transformation, and empower faster, smarter business workflows.
        </p>
      </div>

      {/* Unified 4-card container */}
      <div className="gs2-cards-wrap">
        {GET_STARTED_CARDS.map((card, i) => (
          <div
            key={i}
            className={`gs2-card${activeCard === i ? " gs2-active" : ""}`}
            onMouseEnter={() => setActiveCard(i)}
          >
            <div className="gs2-card-bar" />
            <div className="gs2-card-num">{card.num}</div>
            <div className="gs2-icon-box">{card.icon}</div>
            <h3 className="gs2-card-title">{card.title}</h3>
            <div className="gs2-card-desc">{card.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   BLOG CTA WRAPPER (Navy Blue theme wrap)
═══════════════════════════════════════════ */
function BlogCTAWrapper() {
  return (
    <div >
      <BlogSection />
    </div>
  );
}

/* ═══════════════════════════════════════════
   ROOT EXPORT
═══════════════════════════════════════════ */
export default function SEOServicePage() {
  return (
    <Layout
      title="Microsoft Web and Mobile Application Partner | Microsoft App"
      description="Certified Microsoft Apps Partner offering Power BI, Power Automate, Power Apps, Microsoft 365, and Dynamics 365 implementation services across India."
    >
      <SEOHead />
      <HeroSection />
      <ApproachSection />
      <WhyChooseSection />
      <SEOServicesSection />
      <ProcessSection />
      <GetStartedSection />
      <BlogSection />
      <CTASection />
    </Layout>
  );
}