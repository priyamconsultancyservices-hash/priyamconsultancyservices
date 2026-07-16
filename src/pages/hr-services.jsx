import '../css/pages-common.css';
import { useState } from "react";
import emailjs from "@emailjs/browser";
import CTASection from "../components/HomePage/CTA";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import BlogSection from "../components/BlogSection";

const banner = "/img/hr-services.webp";

/* ═══════════════════════════════════════════════════
   SEO META & SCHEMA
═══════════════════════════════════════════════════ */
function SEOHead() {
  const pageUrl = "https://www.pcsbusinesssolution.com/hr-services/";
  const imageUrl = "https://www.pcsbusinesssolution.com/img/hr-services.png";
  const schemaData = [
    // Breadcrumb List Schema
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
            "@id": "https://www.priyamconsultancy.com/hr-services/",
            "name": "hr-services"
          }
        }
      ]
    },

    // Organization Schema
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

    // Service Schema
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.priyamconsultancy.com/hr-services/#service",
      "name": "HR Services",
      "serviceType": "Human Resource Management Services",
      "url": "https://www.priyamconsultancy.com/hr-services/",
      "description": "Priyam Consultancy provides professional HR services including payroll management, recruitment services, HR strategy, policy development, talent acquisition, compliance management and workforce solutions for businesses across India.",
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

    // Product Schema
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "HR Services in Coimbatore | HR consultancy in coimbatore",
      "image": ["https://www.priyamconsultancy.com/img/hr-services.png"],
      "description": "Best HR services in Coimbatore offering end-to-end HR solutions including recruitment, payroll, compliance, and training. Grow your team with expert HR support.",
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
        "reviewCount": "4521"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.priyamconsultancy.com/hr-services/",
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
    },

    // FAQ Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What Makes Your Payroll Management Different From Others?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We don't just process numbers—we ensure accuracy, compliance, and confidentiality at every step. From salary disbursals and tax filings to statutory compliance (PF, ESI, TDS), we handle it all with tech-enabled precision and end-to-end transparency."
          }
        },
        {
          "@type": "Question",
          "name": "Can You Help Us Hire For Niche Or Leadership Roles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Our recruitment services cover everything from entry-level to CXO positions. We focus on culture-fit and long-term alignment, using a consultative approach to find the right talent—not just fill the vacancy."
          }
        },
        {
          "@type": "Question",
          "name": "Do You Offer HR Strategy Support For Startups Or Small Teams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Whether you're hiring your first employee or scaling rapidly, we help set up HR foundations like org structure, role mapping, goal-setting frameworks, and people policies that grow with your business."
          }
        },
        {
          "@type": "Question",
          "name": "How Do You Ensure Our HR Policies Are Compliant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our policy management services are crafted by HR and legal experts to ensure they meet local labor laws, industry standards, and your internal values. We customize every policy to be legally sound yet people-friendly."
          }
        },
        {
          "@type": "Question",
          "name": "Can We Outsource Only A Few HR Functions Instead Of The Full Setup?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Definitely. Our services are modular—you can pick and choose what you need. Whether it's just payroll, recruitment, or policy support, we'll step in where you need us most."
          }
        },
        {
          "@type": "Question",
          "name": "How Long Does It Take To Get Started With Your Services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depending on the scope, onboarding typically takes 1–3 weeks. For payroll, we can go live within a month. For recruitment or strategy services, timelines vary based on the complexity and goals."
          }
        }
      ]
    }
  ];

  return (
    <Head>
      <title>Best HR Services in Coimbatore | HR consultancy in coimbatore </title>
      <meta name="description" content="Best HR services in Coimbatore offering end-to-end HR solutions including recruitment, payroll, compliance, and training. Grow your team with expert HR support. " />
      <meta name="keywords" content="HR Services, HR Services in Coimbatore, HR Solutions, HR Solutions in Coimbatore, HR consultancy in coimbatore, HR Consultant in Coimbatore, HR Support Services in Coimbatore, HR Consultancy Services in Coimbatore, Human Resource Consultants in Coimbatore, HR Service Provider in Coimbatore, Human Resource Services in Coimbatore, Human Resource Management Services in Coimbatore, Payroll Management, Recruitment Services, HR Strategy, HR Policy Development" />
      <link rel="canonical" href="https://www.priyamconsultancy.com/hr-services/" />
      {/* Open Graph */}
      <meta property="og:title" content="Best HR Services in Coimbatore | HR consultancy in coimbatore " />
      <meta property="og:description" content="Best HR services in Coimbatore offering end-to-end HR solutions including recruitment, payroll, compliance, and training. Grow your team with expert HR support. " />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.priyamconsultancy.com/hr-services/" />
      <meta property="og:image" content="https://www.priyamconsultancy.com/img/hr-services.png" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Best HR Services in Coimbatore | HR consultancy in coimbatore " />
      <meta name="twitter:description" content="Best HR services in Coimbatore offering end-to-end HR solutions including recruitment, payroll, compliance, and training. Grow your team with expert HR support. " />
      <meta name="twitter:image" content="https://www.priyamconsultancy.com/img/hr-services.png" />
      {/* Schema */}
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Head>
  );
}


// ── DATA ──────────────────────────────────────────────────────────

const services = [
  {
    id: "01", icon: <img src="/img/icon/hr-services-payroll.webp" alt="Payroll" style={{ width: "28px", height: "28px" }} />, color: "#FF6B2B",
    title: "Payroll Management",
    tagline: "Accurate. Timely. Compliant.",
    desc: "Timely, accurate, and fully compliant, we simplify your payroll process to ensure you never miss a payout or fall short on regulations. From salary structuring to tax filings and benefits administration, we handle all the backend complexities, so you can focus on what matters most: your team and growing your business.",
    bullets: ["Payroll Processing and Accurate Calculations", "Tax Deductions and Withholdings", "Statutory Compliance and Filings"],
  link: "/payroll-management",
  },
  {
    id: "02", icon: <img src="/img/icon/hr-services-recruitment.webp" alt="Recruitment" style={{ width: "30px", height: "30px" }} />, color: "#1A56DB",
    title: "Recruitment Services",
    tagline: "Right People. Right Roles. Right Now.",
    desc: "We go beyond resumes to find people who belong. Our recruitment services attract top talent that not only fits role but also fits your role, culture, and growth goals. Whether you’re hiring a single position or scaling your team, we ensure a seamless process that meets your vision.",
    bullets: ["Job Analysis & Positioning", "Candidate Sourcing, Screening & Shortlisting", "Interviewing & Selection Support"],
    link: "/recruitment-services",
  },
  {
    id: "03", icon: <img src="/img/icon/hr-services-policy.webp" alt="HR Policy" style={{ width: "30px", height: "30px" }} />, color: "#FF6B2B",
    title: "HR Strategy & Policy Development",
    tagline: "Build Culture. Drive Performance.",
    desc: "We align your HR strategy with your business vision by crafting clear, custom policies and tailored frameworks that drive performance, engagement, and scalability from startup to enterprise while ensuring compliance without adding unnecessary friction to your daily operations.",
    bullets: ["HR Handbook or Policies and Procedures Development", "Organizational Design & Restructuring", "HR Audits & Compliance Checks"],
    link: "/hr-strategy-and-policy-development",
  },
];

const benefits = [
  {
    num: "01", title: "Customized HR Solutions",
    desc: "We understand that each business is unique, so we provide personalized HR strategies and policies that align with your company’s specific needs, values, and goals.",
    icon: (
      <img src="/img/icon/hr-services-solution.webp" alt="Customized HR Solutions" style={{ width: "31px", height: "31px" }} />
    ),
  },
  {
    num: "02", title: "Talent Acquisition Excellence",
    desc: "Our recruitment services are designed to attract and hire top talent that not only meets the job requirements but also fits seamlessly with your company culture and long-term objectives.",
    icon: (
      <img src="/img/icon/hr-services-talent.webp" alt="Talent Acquisition" style={{ width: "31px", height: "31px" }} />
    ),
  },
  {
    num: "03", title: "Compliance & Risk Management",
    desc: "Our expert team ensures that your business is fully compliant with local, state, and federal laws, minimizing risks associated with costly legal non-compliance.",
    icon: (
      <img src="/img/icon/hr-services-compliance.webp" alt="Compliance" style={{ width: "31px", height: "31px" }} />
    ),
  },
  {
    num: "04", title: "Streamlined Payroll Services",
    desc: "At Priyam Consultancy Services HR services we offer end-to-end payroll services that ensure tax compliance, deductions, and timely payments, freeing you from the administrative burden and reducing errors.",
    icon: (
      <img src="/img/icon/hr-services-streamlined-payroll.webp" alt="Payroll Services" style={{ width: "31px", height: "31px" }} />
    ),
  },
  {
    num: "05", title: "Scalable HR Solutions",
    desc: "As your business grows, so do your HR needs. We provide scalable HR solutions that evolve with your company, from managing a small team to supporting a large, complex organization.",
    icon: (
      <img src="/img/icon/hr-services-scalable-solution.webp" alt="Scalable HR" style={{ width: "31px", height: "31px" }} />
    ),
  },
  {
    num: "06", title: "Cost-Effective HR Support",
    desc: "We provide comprehensive HR services that maximize your return on investment by reducing overhead costs while delivering exceptional support tailored to your business needs.",
    icon: (
      <img src="/img/icon/hr-services-cost-effective.webp" alt="Cost-Effective" style={{ width: "31px", height: "31px" }} />
    ),
  },
];

const processSteps = {
  leftTop: {
    title: "Deeper Understanding",
    desc: "We analyze your business goals, workforce structure, and operational challenges to build HR solutions that align with your organizational needs and long-term growth plans.",
    icon: (
      <img src="/img/icon/hr-services-process-understand.webp" alt="Deeper Understanding" style={{ width: "30px", height: "30px" }} />
    ),
  },
  rightTop: {
    title: "Strategy & Planning",
    desc: "Our team develops customized HR strategies focused on workforce efficiency, compliance, employee management, and sustainable business growth through structured planning and execution.",
    icon: (
      <img src="/img/icon/hr-services-process-strategy.webp" alt="Strategy & Planning" style={{ width: "30px", height: "30px" }} />
    ),
  },
  rightBottom: {
    title: "Execution & Monitoring",
    desc: "We ensure smooth implementation of HR processes with continuous monitoring, performance tracking, and proactive support to maintain efficiency, compliance, and consistent progress.",
    icon: (
      <img src="/img/icon/hr-services-process-execution.webp" alt="Execution & Monitoring" style={{ width: "30px", height: "30px" }} />
    ),
  },
  leftBottom: {
    title: "Feedback & Analytics Reports",
    desc: "We provide detailed HR reports and workforce insights that help businesses track performance, improve decision-making, and optimize overall operational effectiveness.",
    icon: (
      <img src="/img/icon/hr-services-process-feedback.webp" alt="Feedback & Analytics" style={{ width: "30px", height: "30px" }} />
    ),
  },
};

// ── COMPONENTS ────────────────────────────────────────────────────

function HeroSection() {
  const particles = [
    { cx: 150, cy: 100, r: 4, fill: "rgba(237,131,55,0.5)", dur: "3s", delay: "0s" },
    { cx: 250, cy: 160, r: 3, fill: "rgba(56,189,248,0.5)", dur: "4s", delay: "0.8s" },
    { cx: 310, cy: 220, r: 3.5, fill: "rgba(52,211,153,0.5)", dur: "3.5s", delay: "0.3s" },
    { cx: 90, cy: 200, r: 3, fill: "rgba(246,173,85,0.5)", dur: "4.2s", delay: "1.1s" },
    { cx: 370, cy: 160, r: 2.5, fill: "rgba(237,131,55,0.4)", dur: "3.8s", delay: "0.6s" },
    { cx: 340, cy: 350, r: 3, fill: "rgba(168,85,247,0.5)", dur: "3.2s", delay: "1.5s" },
    { cx: 50, cy: 120, r: 2.5, fill: "rgba(56,189,248,0.4)", dur: "4.5s", delay: "0.2s" },
  ];
  return (

    <section className="hero" id="hero">

      <div className="hero-left">
        <div className="h-badge"><div className="badge-dot" />Human Resource</div>
        <h1 className="hero-heading">
          HR Consultancy Services
          that <span className="hl lined">Builds Strong </span>
          Teams
        </h1>
        <ul className="hero-sub">
          <li>We find candidates who match your company’s values and drive success.</li>
          <li>We create custom HR solutions that ensure clarity, compliance, and growth.</li>
          <li>We handle accurate payroll to ensure compliance and reduce administrative.</li>
          <li>We manage HR so you can focus on growing your business-hassle-free.</li>
        </ul>
        <div className="hero-actions">
          <a className="btn-fill" href="/contact-us">Explore More <span className="btn-arrow">›</span></a>
        </div>
      </div>

      <div className="hero-right">
        <img
          src={banner}
          alt="Banner"
          style={{ width: "100%", height: "auto", objectFit: "contain", position: "relative", zIndex: 5, animation: "fadeUp .9s .15s ease both" }}
        />
      </div>
    </section>
  );
}


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
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Approach in</div>
          </div>
          <h2 className="ap2-heading"> <span>Human Resource </span>Management</h2>
          <p className="ap-intro">
            At PCS, we simplify complex HR challenges through structured and scalable solutions aligned with your business goals. Our approach improves operational clarity, workforce efficiency, and long-term organizational growth.

          </p>
          <p className="ap-intro">
            We support businesses across every HR stage, including compliance management, recruitment, policy development, and employee engagement. Our team works as an extended HR partner focused on stability and performance.

          </p>
          <p className="ap-intro">
            Our HR solutions are designed to reduce operational risk, strengthen workplace culture, and improve productivity. PCS helps businesses build strong people systems that support sustainable and scalable growth.
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


function ServicesSection() {
  const [open, setOpen] = useState(0);
  const active = services[open];

  const handleTabClick = (i) => {
    setOpen(open === i ? -1 : i);
  };

  return (
    <section className="hr-services">
      <div className="partners-header1" style={{ textAlign: 'center' }}>
        <h2 className="partners-eyebrow" style={{ marginBottom: '20px' }}>Our Services</h2>
      </div>
      <h3 className="hr-h2" style={{ textAlign: 'center', color: '#fff' }}>Your Growth, <span style={{ color: '#ed8337' }}><i>Backed by Smarter </i></span>HR Services</h3>
      <p className="hr-sub" style={{ textAlign: 'center', color: '#fff' }}>
        We bridge the gap between people and performance through custom-built HR strategies that scale as you do.
      </p>

      <div className="hr-services__inner">
        {/* LEFT — Tab list (desktop) / Accordion (mobile) */}
        <div className="hr-services__tabs">
          {services.map((s, i) => (
            <div key={i} className="hr-accordion-item">
              <div
                className={`hr-tab-item${open === i ? " active" : ""}`}
                onClick={() => handleTabClick(i)}
              >
                <span className="hr-tab-icon">{s.icon}</span>
                <h2 className="hr-tab-label">{s.title}</h2>
                <span className="hr-tab-arrow">{open === i ? "▲" : "▼"}</span>
              </div>
              {/* Mobile accordion content — shows inline below each tab */}
              <div className={`hr-accordion-content${open === i ? " hr-accordion-open" : ""}`}>
                <div className="hr-services__content" style={{ "--preview-color": s.color }}>
                  <div className="hr-content-header">
                    <span className="hr-content-icon">{s.icon}</span>
                    <span className="hr-content-title">{s.title}</span>
                  </div>
                  <p className="hr-services__preview-desc">{s.desc}</p>
                  <ul className="hr-services__bullets" style={{ "--bullet-color": s.color }}>
                    {s.bullets.map((b, j) => (
                      <li key={j} className="hr-services__bullet">{b}</li>
                    ))}
                  </ul>
                  <button className="hr-content-btn" style={{ background: '#ed8337', marginTop: '20px' }}>
                    Explore More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — Content box (desktop only) */}
        <div
          className="hr-services__content hr-services__content--desktop"
          style={{ "--preview-color": active.color }}
        >
          <div className="hr-content-header">
            <span className="hr-content-icon">{active ? active.icon : ""}</span>
            <span className="hr-content-title">{active ? active.title : ""}</span>
          </div>
          <p className="hr-services__preview-desc">{active ? active.desc : ""}</p>
          <ul className="hr-services__bullets" style={{ "--bullet-color": active ? active.color : "" }}>
            {active && active.bullets.map((b, i) => (
              <li key={i} className="hr-services__bullet">{b}</li>
            ))}
          </ul>
          <a href={active ? active.link : "#"}
  className="hr-content-btn"
  style={{ background: '#ed8337', marginTop: '25px', display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}
>
  Explore More →
</a>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="tl-section">
      <div className="tl-inner">
        <div className="tl-header">
          <div className="partners-header1" style={{ textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Benefits </h2>
          </div>
          <h3 className="tl-heading">Benefits of Choosing <span>Our HR Consultancy </span> Services</h3>
          <p className="tl-subtext">
            From recruitment to payroll, we deliver cost-effective HR solutions designed to evolve with your business.

          </p>
        </div>

        <div className="bento-grid">
          {benefits.map((b, i) => (
            <div key={i} className={`bn-cell bn-cell-${i + 1}`}>
              <div className="bn-icon">{b.icon}</div>
              <div className="bn-num">{b.num}</div>
              <h4 className="bn-title">{b.title}</h4>
              <div className="bn-desc">{b.desc}</div>
              <a className="bn-link" href="#">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="pr-section">
      <div className="pr-inner">
        <div className="pr-header">
          <div className="partners-header1" style={{ textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Human Resource Management Process</h2>
          </div>
          <h3 className="pr-heading">Our Human <span style={{ color: '#ed8337' }}>Resource Management</span> Process</h3>
          <p className="pr-subtext">
            We begin with a deep understanding of your business, then craft tailored strategies and action plans. Our team ensures seamless execution and constant monitoring of every initiative. Through detailed feedback and analytics reports, we help you stay informed, optimize results, and make data-driven decisions that drive long-term success.


          </p>
        </div>

        <div className="circ-layout">
          {/* LEFT TOP: Step A */}
          <div className="circ-left-top">
            <div className="circ-step">
              <div className="cs-icon-wrap">{processSteps.leftTop.icon}</div>
              <h3 className="cs-title">{processSteps.leftTop.title}</h3>
              <div className="cs-desc">{processSteps.leftTop.desc}</div>
            </div>
          </div>

          {/* CENTER: Circular SVG Ring */}
          <div className="circ-center">
            <div className="circ-svg-wrap">
              <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="150" r="135" fill="none" stroke="rgba(237,131,55,0.12)" strokeWidth="1" strokeDasharray="6 5" />
                <circle cx="150" cy="150" r="118" fill="none" stroke="rgba(237,131,55,0.08)" strokeWidth="22" />
                <path d="M150,32 A118,118 0 0,1 268,150" fill="none" stroke="#ed8337" strokeWidth="20" strokeLinecap="butt" opacity="0.95" />
                <path d="M268,150 A118,118 0 0,1 150,268" fill="none" stroke="#f5a66b" strokeWidth="20" strokeLinecap="butt" opacity="0.75" />
                <path d="M150,268 A118,118 0 0,1 32,150" fill="none" stroke="#ed8337" strokeWidth="20" strokeLinecap="butt" opacity="0.45" />
                <path d="M32,150 A118,118 0 0,1 150,32" fill="none" stroke="#f5a66b" strokeWidth="20" strokeLinecap="butt" opacity="0.22" />
                <circle cx="150" cy="150" r="96" fill="none" stroke="rgba(237,131,55,0.08)" strokeWidth="1" strokeDasharray="4 6" />
                <circle cx="150" cy="150" r="85" fill="rgba(0,20,40,0.85)" />
                <circle cx="150" cy="32" r="8" fill="#ed8337" />
                <circle cx="268" cy="150" r="8" fill="#ed8337" />
                <circle cx="150" cy="268" r="8" fill="#ed8337" />
                <circle cx="32" cy="150" r="8" fill="#ed8337" />
                <circle cx="150" cy="32" r="13" fill="none" stroke="rgba(237,131,55,0.3)" strokeWidth="2" />
                <circle cx="268" cy="150" r="13" fill="none" stroke="rgba(237,131,55,0.3)" strokeWidth="2" />
                <circle cx="150" cy="268" r="13" fill="none" stroke="rgba(237,131,55,0.3)" strokeWidth="2" />
                <circle cx="32" cy="150" r="13" fill="none" stroke="rgba(237,131,55,0.3)" strokeWidth="2" />
              </svg>
              {/* Center core text — not rotating */}
              <div className="circ-core">
                <div className="circ-core-title">HR Management<br />Process</div>
                {/* <div className="circ-core-sub">PCS Method</div> */}
              </div>
            </div>
          </div>

          {/* RIGHT TOP: Step B */}
          <div className="circ-right-top">
            <div className="circ-step">
              <div className="cs-icon-wrap">{processSteps.rightTop.icon}</div>
              <h3 className="cs-title">{processSteps.rightTop.title}</h3>
              <div className="cs-desc">{processSteps.rightTop.desc}</div>
            </div>
          </div>

          {/* LEFT BOTTOM: Step D */}
          <div className="circ-left-bottom">
            <div className="circ-step">
              <div className="cs-icon-wrap">{processSteps.leftBottom.icon}</div>
              <div className="cs-title">{processSteps.leftBottom.title}</div>
              <div className="cs-desc">{processSteps.leftBottom.desc}</div>
            </div>
          </div>

          {/* RIGHT BOTTOM: Step C */}
          <div className="circ-right-bottom">
            <div className="circ-step">
              <div className="cs-icon-wrap">{processSteps.rightBottom.icon}</div>
              <div className="cs-title">{processSteps.rightBottom.title}</div>
              <div className="cs-desc">{processSteps.rightBottom.desc}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// faq section
const faqData = [
  { q: "What Makes Your Payroll Management Different From Others?", a: "We don’t just process numbers—we ensure accuracy, compliance, and confidentiality at every step. From salary disbursals and tax filings to statutory compliance (PF, ESI, TDS), we handle it all with tech-enabled precision and end-to-end transparency." },
  { q: "Can You Help Us Hire For Niche Or Leadership Roles?", a: "Absolutely. Our recruitment services cover everything from entry-level to CXO positions. We focus on culture-fit and long-term alignment, using a consultative approach to find the right talent—not just fill the vacancy." },
  { q: "Do You Offer HR Strategy Support For Startups Or Small Teams?", a: "Yes. Whether you’re hiring your first employee or scaling rapidly, we help set up HR foundations like org structure, role mapping, goal-setting frameworks, and people policies that grow with your business." },
  { q: "How Do You Ensure Our HR Policies Are Compliant?", a: "Our policy management services are crafted by HR and legal experts to ensure they meet local labor laws, industry standards, and your internal values. We customize every policy to be legally sound yet people-friendly." },
  { q: "Can We Outsource Only A Few HR Functions Instead Of The Full Setup?", a: "Definitely. Our services are modular—you can pick and choose what you need. Whether it’s just payroll, recruitment, or policy support, we’ll step in where you need us most." },
  { q: "How Long Does It Take To Get Started With Your Services?", a: "Depending on the scope, onboarding typically takes 1–3 weeks. For payroll, we can go live within a month. For recruitment or strategy services, timelines vary based on the complexity and goals." },
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

export default function HRConsultancy() {
  return (
    <Layout >


      <SEOHead />
      <div className="hr-page pg-hrservices">
        <HeroSection />
        <ApproachSection />
        <ServicesSection />
        <BenefitsSection />
        <ProcessSection />
        <FAQSection />
        <BlogSection />
        <CTASection />
      </div>
    </Layout>
  );
}