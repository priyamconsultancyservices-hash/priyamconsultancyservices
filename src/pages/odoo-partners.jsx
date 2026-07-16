import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import CTASection from "../components/HomePage/CTA";
import BlogSection from "../components/BlogSection";
import Layout from '@theme/Layout';
const banner = "/img/odoo-partners.webp";
import Head from '@docusaurus/Head';
import '../css/pages-common.css';

function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/odoo-partners/";
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
            "@id": "https://www.priyamconsultancy.com/odoo-partners//",
            "name": "odoo-partners"
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
      <title>Official Odoo Partner | Odoo Implementation & ERP Solutions </title>
      <meta name="description" content="PCS is an official Odoo Partner that provides end-to-end Odoo implementation, customization, and consulting services. Let's connect now! " />
      <meta name="keywords" content="Official Odoo Partner, Odoo Implementation Partner, Odoo ERP Solutions Partner, Odoo Official Partner for India, Odoo Gold Partner, Odoo ERP Consultant Partners, Odoo Implementation & ERP Solutions, Odoo Official Certified Partner" />
      <link rel="canonical" href="https://www.priyamconsultancy.com/odoo-partners/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Official Odoo Partner | Odoo Implementation & ERP Solutions " />
      <meta property="og:description" content="PCS is an official Odoo Partner that provides end-to-end Odoo implementation, customization, and consulting services. Let's connect now! " />
      <meta property="og:url" content="https://www.priyamconsultancy.com/odoo-partners/" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content=" Microsoft App" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Official Odoo Partner | Odoo Implementation & ERP Solutions " />
      <meta name="twitter:description" content="PCS is an official Odoo Partner that provides end-to-end Odoo implementation, customization, and consulting services. Let's connect now! " />
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
          <div className="seo-badge"><div className="badge-dot-red" />Odoo</div>
          <h1 className="seo-hero-heading">
            Transform Your with Business
            to <span className="seo-underline seo-red">Odoo</span>
            — All-in-One ERP Solution
          </h1>
          <p className="seo-sub">
            PCS leverages Odoo to streamline and unify business operations across industries, from startups to enterprises  business operations across industries,. From accounting and inventory to HR and CRM, all processes are integrated into one system. With modular customization and automation, we tailor Odoo to match your workflows and boost efficiency.

          </p>
          <div className="seo-actions">
            <a className="seo-btn-fill" href="/contact-us"><span>Lets Conenct</span><div className="seo-btn-arr">›</div></a>
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
          <h2 className="ap2-heading">What is  <span><i>Odoo</i> </span></h2>
          <p className="ap2-intro">
            Odoo is an all-in-one, open-source business application designed to integrate and manage every aspect of organizational operations efficiently. Its modular structure allows businesses to select and customize applications according to their unique needs, creating a flexible system that supports growth, improves coordination, and simplifies complex business processes.
          </p>
          <p className="ap2-intro">
            With Odoo, organizations gain complete visibility and control over operations through automation, centralized management, and real-time data insights. This unified platform empowers teams to make smarter decisions, enhance productivity, streamline workflows, and support sustainable, long-term growth in an increasingly competitive and fast-changing business environment.
          </p>
          <p className="ap2-intro" style={{ color: "rgba(2,43,68,0.45)", fontStyle: "italic" }}>
            Precise. Proven. Profitable. Built for long-term dominance.
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
      <img src="/img/icon/odoo-why-modular.webp" alt="Modular & Scalable Platform" width="26" height="26" />
    ),
    title: "Modular & Scalable Platform",
    desc: "Odoo grows with your business – start small and expand effortlessly with new modules as your needs evolve.",
  },
  {
    icon: (
      <img src="/img/icon/odoo-why-user.webp" alt="User-Friendly Interface" width="26" height="26" />
    ),
    title: "User-Friendly Interface",
    desc: "Intuitive dashboards and clean design ensure seamless adoption and quick onboarding for all team members.",
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
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Why choose Odoo</h2>
          </div>          <h3 className="wc2-heading">
            All-in-One Platform for Smarter Business Management          </h3>
          <p className="wc2-desc">
            A powerful, flexible, and cost-efficient solution designed to meet the needs of businesses of every size.
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
            src="/img/odoo.webp"
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
      <img src="/img/icon/odoo-migration.webp" alt="Data Migration" width="32" height="32" />
    ),
    heading: "Data Migration",
    content: "Smooth transition from legacy systems or older Odoo versions with zero downtime.",
    tag: "Foundation",
  },
  {
    icon: (
      <img src="/img/icon/odoo-customize.webp" alt="Customization" width="32" height="32" />
    ),
    heading: "Customization",
    content: "Tailor workflows, modules, and reports to match unique business needs.",
    tag: "On-Site",
  },
  {
    icon: (
      <img src="/img/icon/odoo-integrate.webp" alt="Integration" width="32" height="32" />
    ),
    heading: "Integration",
    content: "Connect Odoo with third-party software for a seamless data ecosystem.",
    tag: "Infrastructure",
  },
  {
    icon: (
      <img src="/img/icon/odoo-implementation.webp" alt="Implementation" width="32" height="32" />
    ),
    heading: "Implementation",
    content: "End-to-end deployment customized to your business operations.",
    tag: "Authority",
  },
  {
    icon: (
      <img src="/img/icon/odoo-training.webp" alt="Training & Consultation" width="32" height="32" />
    ),
    heading: "Training & Consultation",
    content: "Equip your team with the knowledge to maximize Odoo’s full potential.",
    tag: "Local",
  },
  {
    icon: (
      <img src="/img/icon/odoo-support.webp" alt="Support & Maintenance" width="32" height="32" />
    ),
    heading: "Support & Maintenance",
    content: "Continuous monitoring, updates, and optimization for uninterrupted operations.",
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
          Complete Odoo ERP <span style={{ color: "#ed8337" }}><i>Implementation & Support</i></span>
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
      <img src="/img/icon/odoo-proc-discovery.webp" alt="Discovery & Analysis" width="28" height="28" />
    ),
    title: "Discovery & Analysis",
    desc: "We begin by conducting an in-depth assessment of your business workflows, challenges, and software requirements. This stage helps us understand your operational structure, identify automation opportunities, and define the right Odoo modules to meet your strategic objectives.",
  },
  {
    num: "02",
    icon: (
      <img src="/img/icon/odoo-proc-planning.webp" alt="Planning & Design" width="28" height="28" />
    ),
    title: "Planning & Design",
    desc: "Our team creates a detailed implementation roadmap, mapping every workflow and designing module structures that align with your business goals. This stage ensures a smooth transition, efficient resource allocation, and a framework for scalable system.",
  },
  {
    num: "03",
    icon: (
      <img src="/img/icon/odoo-proc-development.webp" alt="Customization & Development" width="28" height="28" />
    ),
    title: "Customization & Development",
    desc: "We configure Odoo modules, automate processes, and develop custom features to match your organization’s unique operations. Every customization is carefully tested and optimized to deliver flexibility, performance, and complete business alignment.",
  },
  {
    num: "04",
    icon: (
      <img src="/img/icon/odoo-proc-testing.webp" alt="Testing & Deployment" width="28" height="28" />
    ),
    title: "Testing & Deployment",
    desc: "Before launch, our experts conduct comprehensive testing to validate every integration, feature, and user flow. We ensure the apllication performs seamlessly in real-world environments, followed by a structured deployment that minimizes downtime and disruption.",
  },
  {
    num: "05",
    icon: (
      <img src="/img/icon/odoo-proc-training.webp" alt="Training & Support" width="28" height="28" />
    ),
    title: "Training & Support",
    desc: "Once deployed, we provide hands-on training and continuous post-launch support to empower your team. Our experts ensure your system remains optimized, updated, and aligned with your evolving business needs.",
  },
  {
    num: "06",
    icon: (
      <img src="/img/icon/odoo-proc-launch.webp" alt="Launch & Post-Launch Support" width="28" height="28" />
    ),
    title: "Launch & Post-Launch Support",
    desc: "After approval, we deploy your WooCommerce website with monitoring, updates, troubleshooting support, security maintenance, and performance tracking for growth.",
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
          Streamlined Approach for  <span style={{ color: "#ed8337" }}><i>Odoo </i> </span>  Implementation
        </h3>
        <p style={{ marginTop: "0.8rem", color: "rgba(0, 0, 0, 0.86)", fontSize: "0.97rem", margin: "0.8rem auto 0", lineHeight: "1.8" }}>
          Our Odoo Implementation Process ensures every phase — from assessment to deployment — is handled with precision, transparency, and efficiency.
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
      <img src="/img/icon/odoo-gs-certified.webp" alt="Certified Odoo Experts" width="24" height="24" />
    ),
    title: "Certified Odoo Experts",
    desc: "Skilled professionals with proven experience in Odoo software implementation and support.",
  },
  {
    num: "02",
    icon: (
      <img src="/img/icon/odoo-gs-tailored.webp" alt="Tailored Business Solutions" width="24" height="24" />
    ),
    title: "Tailored Business Solutions",
    desc: "Custom workflows and modules designed to fit your specific industry and goals.",
  },
  {
    num: "03",
    icon: (
      <img src="/img/icon/odoo-gs-future.webp" alt="Future-Ready Systems" width="24" height="24" />
    ),
    title: "Future-Ready Systems",
    desc: "Scalable, upgradable, and flexible Odoo solutions that grow with your business.",
  },
  {
    num: "04",
    icon: (
      <img src="/img/icon/odoo-gs-support.webp" alt="Comprehensive Support" width="24" height="24" />
    ),
    title: "Comprehensive Support",
    desc: "From setup to optimization, we ensure your system runs smoothly and efficiently.",
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
          <div className="partners-eyebrow" style={{ marginBottom: '20px' }}>Odoo Partner</div>
        </div>      <h2 className="gs2-main-title">

          Why PCS for <span className="gs2-title-accent"><i>Odoo </i></span> Partner
        </h2>
        <p className="gs2-sub">
          As a trusted Odoo Partner, PCS delivers industry-specific, results-driven ERP solutions that streamline operations and accelerate digital transformation.
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
      title="Official Odoo Partner | Odoo Implementation & ERP Solutions"
      description="PCS is an official Odoo Partner that provides end-to-end Odoo implementation, customization, and consulting services. Let's connect now! "
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