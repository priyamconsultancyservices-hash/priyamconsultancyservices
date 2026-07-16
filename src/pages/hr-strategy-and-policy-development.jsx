import '../css/pages-common.css';
import { useState } from "react";
import emailjs from "@emailjs/browser";
import BlogSection from "../components/BlogSection";
import CTASection from "../components/HomePage/CTA";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
const banner = "/img/hr-strategy.webp";

const pageUrl = "https://www.priyamconsultancy.com/hr-strategy-and-policy-development/";
const imageUrl = "https://www.priyamconsultancy.com/img/hr-strategy.png";

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
          "@id": "https://www.priyamconsultancy.com/hr-strategy-and-policy-development/",
          "name": "HR Strategy and Policy Development"
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

  // Service Page Schema
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.priyamconsultancy.com/hr-strategy-and-policy-development/#service",
    "name": "HR Strategy and Policy Development",
    "serviceType": "HR Strategy and Policy Development Services",
    "url": "https://www.priyamconsultancy.com/hr-strategy-and-policy-development/",
    "description": "Priyam Consultancy provides professional HR strategy and policy development services including HR framework creation, employee policy development, workforce planning, organizational strategy, compliance policies and human resource management solutions for businesses across India.",
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
    "name": "HR Strategy & Policy Development Services in Coimbatore",
    "image": ["https://www.priyamconsultancy.com/img/hr-strategy.png"],
    "description": "Best HR strategy and policy development services in Coimbatore offering HR framework creation, employee policy development, workforce planning, compliance policies and organizational HR solutions for businesses.",
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
      "reviewCount": "4916"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.priyamconsultancy.com/hr-strategy-and-policy-development/",
      "priceCurrency": "INR",
      "price": "0",
      "priceValidUntil": "2026-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Priyam Consultancy Services"
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
        "name": "What Does HR Strategy and Policy Development Include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It includes full scope planning, drafting, implementation, and consultation around your HR strategy, HR policy development, and overall human resource management framework."
        }
      },
      {
        "@type": "Question",
        "name": "Can PCS Help Us Develop HR Policies From Scratch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We specialize in development of HR policies that are tailored to your size, industry and growth stage."
        }
      },
      {
        "@type": "Question",
        "name": "How Frequently Should HR Policies Be Reviewed And Updated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend reviewing HR policies annually and/or when there are significant regulatory or organizational changes."
        }
      },
      {
        "@type": "Question",
        "name": "Can You Support Policy Development For Remote Or Geographically Dispersed Teams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We develop HR strategies and policies for hybrid, remote, and in-office workforces operating in multiple locations."
        }
      },
      {
        "@type": "Question",
        "name": "What Makes PCS A Trusted Partner For HR Strategy And Development Policy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We integrate compliance, business goals and employee needs into our approach. With extensive knowledge around human resource management, we are able to make HR policy development and HR strategy development practically and future-ready."
        }
      },
      {
        "@type": "Question",
        "name": "Can PCS Support Leadership Hiring And Organizational Design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Extended HR advisory includes org structures, succession planning, and leadership hiring strategies as part of a bundle of human resource policies and strategies."
        }
      }
    ]
  }
];


// ── DATA ──────────────────────────────────────────────────────────

const services = [
  {
    id: "01", icon: <img src="/img/icons/payroll.png" alt="Payroll" style={{ width: "28px", height: "28px" }} />, color: "#FF6B2B",
    title: "Payroll Management",
    tagline: "Accurate. Timely. Compliant.",
    desc: "Timely, accurate, and fully compliant — we simplify your payroll so you're never exposed to the complexities of salary processing, tax filings, and benefits admin.",
    bullets: ["Payroll Processing & Accurate Calculations", "Tax Deductions and Form Filing", "Statutory Compliance and Filings"],
  },
  {
    id: "02", icon: <img src="/img/icons/recruitment.png" alt="Recruitment" style={{ width: "28px", height: "28px" }} />, color: "#1A56DB",
    title: "Recruitment Services",
    tagline: "Right People. Right Roles. Right Now.",
    desc: "We attract top talent that fits both the role and your culture — whether rapidly growing, filling a single position, or looking for future leaders.",
    bullets: ["Job Analysis & Profiling", "Candidate Sourcing & Screening", "Shortlisting", "Interviewing & Selection Support"],
  },
  {
    id: "03", icon: <img src="/img/icons/tab-plan.png" alt="Plan" style={{ width: "20px", height: "20px" }} />, color: "#059669",
    title: "HR Strategy & Policy",
    tagline: "Build Culture. Drive Performance.",
    desc: "We align your HR strategy with your business vision by crafting clear policies and procedures that attract and retain top talent while ensuring workplace compliance.",
    bullets: ["HR Policy Documentation", "Organizational Design & Structuring", "Org Charts & Designation Mapping", "HR Audit & Compliance Checks"],
  },
];

const benefits = [
  {
    num: "01", title: "Customized HR Solutions",
    desc: "Personalized HR strategies and policies that align with your company's specific needs, values, and long-term goals.",
    icon: (
      <img src="/img/icons/benefit-01.png" alt="Customized HR Solutions" style={{ width: "28px", height: "28px" }} />
    ),
  },
  {
    num: "02", title: "Talent Acquisition Excellence",
    desc: "Attract and hire top talent that fits your culture and long-term objectives seamlessly.",
    icon: (
      <img src="/img/icons/benefit-02.png" alt="Talent Acquisition" style={{ width: "28px", height: "28px" }} />
    ),
  },
  {
    num: "03", title: "Compliance & Risk Management",
    desc: "Full legal compliance across all HR functions, minimizing costly risks.",
    icon: (
      <img src="/img/icons/benefit-03.png" alt="Compliance" style={{ width: "28px", height: "28px" }} />
    ),
  },
  {
    num: "04", title: "Streamlined Payroll Services",
    desc: "End-to-end payroll with tax compliance, timely payments, and zero errors.",
    icon: (
      <img src="/img/icons/benefit-04.png" alt="Payroll Services" style={{ width: "28px", height: "28px" }} />
    ),
  },
  {
    num: "05", title: "Scalable HR Solutions",
    desc: "From a small team to a large enterprise — our HR systems grow with your business at every stage.",
    icon: (
      <img src="/img/icons/benefit-05.png" alt="Scalable HR" style={{ width: "28px", height: "28px" }} />
    ),
  },
  {
    num: "06", title: "Cost-Effective HR Support",
    desc: "Maximize ROI by reducing overhead while receiving exceptional, fully tailored HR support across all functions.",
    icon: (
      <img src="/img/icons/benefit-06.png" alt="Cost-Effective" style={{ width: "28px", height: "28px" }} />
    ),
  },
];

const processSteps = {
  leftTop: {
    title: "Deeper Understanding",
    desc: "We begin with a thorough analysis of your business goals, workforce structure, and HR challenges.",
    icon: (
      <img src="/img/icons/process-understand.png" alt="Deeper Understanding" style={{ width: "28px", height: "28px" }} />
    ),
  },
  rightTop: {
    title: "Strategy & Planning",
    desc: "We craft tailored HR strategies aligned with your business vision and long-term objectives.",
    icon: (
      <img src="/img/icons/process-strategy.png" alt="Strategy & Planning" style={{ width: "28px", height: "28px" }} />
    ),
  },
  rightBottom: {
    title: "Execution & Monitoring",
    desc: "Seamless implementation with continuous monitoring to ensure every initiative stays on track.",
    icon: (
      <img src="/img/icons/process-execution.png" alt="Execution & Monitoring" style={{ width: "28px", height: "28px" }} />
    ),
  },
  leftBottom: {
    title: "Feedback & Analytics Reports",
    desc: "Detailed reporting and analytics to help you optimize results and make data-driven decisions.",
    icon: (
      <img src="/img/icons/process-feedback.png" alt="Feedback & Analytics" style={{ width: "28px", height: "28px" }} />
    ),
  },
};
const servicesTabs = [
  {
    label: "Understand & Audit",
    icon: <img src="/img/icon/hr-policy-aduit.webp" alt="Search" style={{ width: "30px", height: "30px" }} />,
    title: "Understand & Audit",
    desc: "We start by identifying your current HR policies and organizational structure, analyzing what works and where the gaps are, and evaluating how your current human resource management fits your business needs.",
    features: [],
    tags: ["Review HRPolicies", "Analyze OrganizationStructure", "Identify ProcessGaps", "Evaluate WorkforceAlignment"],
  },
  {
    label: "Strategize & Customize",
    icon: <img src="/img/icon/hr-policy-strategize.webp" alt="Plan" style={{ width: "30px", height: "30px" }} />,
    title: "Strategize & Customize",
    desc: "There are no cookie-cutter templates. Our process creates a custom HR strategy development framework, with policy blueprints tailored to your industry, size and organizational context. Everything, from workforce planning to onboarding policy, is laid out.",
    features: [],
    tags: ["Develop HRStrategies", "Customize PolicyFrameworks", "Plan WorkforceStructures", "Align BusinessObjectives"],
  },
  {
    label: "Draft & Align",
    icon: <img src="/img/icon/hr-policy-draft.webp" alt="Align" style={{ width: "30px", height: "30px" }} />,
    title: "Draft & Align",
    desc: "We develop or revise your HR policies, taking care to comply with the law, be culturally relevant, and to be operationally clear. All policies are subject to internal alignment reviews to ensure that they can be adopted across departments.",
    features: [],
    tags: ["Draft HRPolicies", "Ensure LegalCompliance", "Maintain CulturalRelevance", "Conduct AlignmentReviews"],
  },
  {
    label: "Monitor & Optimize",
    icon: <img src="/img/icon/hr-policy-monitor.webp" alt="Check" style={{ width: "30px", height: "30px" }} />,
    title: "Monitor & Optimize",
    desc: "Policies have power only when communicated and executed. We support your leaders and HR staff by training them to implement the new human resource policies and strategies consistently and easily.",
    features: [],
    tags: ["Train LeadershipTeams", "Support PolicyExecution", "Monitor ImplementationConsistency", "Improve HRProcesses"],
  },
  {
    label: "Implement & Enable",
    icon: <img src="/img/icon/hr-policy-implement.webp" alt="Implement" style={{ width: "30px", height: "30px" }} />,
    title: "Implement & Enable",
    desc: "Execution is beyond circulation. We work with you and your HR and leadership teams to do internal rollouts, have conversations, and provide toolkits and communication plans that allow a smooth and consistent adoption.",
    features: [],
    tags: ["Execute InternalRollouts", "Provide CommunicationPlans", "Deliver HRToolkits", "Enable SmoothAdoption"],
  },
  {
    label: "Review & Refine",
    icon: <img src="/img/icon/hr-policy-refine.webp" alt="Refine" style={{ width: "30px", height: "30px" }} />,
    title: "Review & Refine",
    desc: "Keep policies current and compliant with regular audits. Whether caused by regulations or organizational evolution, we believe in the proactive approach of updating strategies and their supporting documentation to remain ahead of risk exposure and match the workforce.",
    features: [],
    tags: ["Conduct PolicyAudits", "Update HRStrategies", "Reduce ComplianceRisks", "Adapt WorkforcePolicies"],
  },

];

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
        <div className="h-badge"><div className="badge-dot" />HR & Policy Development</div>
        <h1 className="hero-heading">
          Strategic HR & Policy
          <span className="hl lined">Development</span> for Businesses

        </h1>
        <ul className="hero-sub">
          <li>Accuracy That Builds a Strong Workforce.</li>
          <li>Compliance You Never Have to Worry About.</li>
          <li>Cut Down HR Guesswork.</li>
          <li>Scalable HR Strategy and Policy Development.</li>
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
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>About PCS</div>
          </div>
          <h2 className="ap2-heading">HR Clarity for  <span>Every Stage</span> of Growth</h2>
          <p className="ap-intro">
            PCS supports startups and enterprises with tailored HR strategies and policy development designed to create structured, scalable, and compliant workforce management systems.


          </p>
          <p className="ap-intro">
            Our team combines industry expertise with a compliance-first approach to develop HR frameworks that improve operational clarity, employee management, and organizational stability.

          </p>
          <p className="ap-intro">
            Whether creating new HR policies or refining existing structures, PCS helps businesses make faster, smarter, and more confident workforce management decisions.

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



// ── STEP FLOW DATA — exact image match colors & icons ──────────
const stepFlowData = [
  {
    id: "01",
    // color: "#1A56DB",
    bg: "rgba(26,86,219,0.08)",
    title: "Strategic Clarity",
    desc: "We create clear HR strategies and policy frameworks that align workforce management with your long-term business objectives and operations.",
    icon: (
      <img src="/img/icon/hr-policy-clarity.webp" alt="icon" style={{ width: "30px", height: "30px" }} />
    ),
  },
  {
    id: "02",
    // color: "#e03e52",
    bg: "rgba(224,62,82,0.08)",
    title: "Compliance Guaranteed",
    desc: "Our HR policies are developed with a compliance-first approach to ensure legal accuracy, risk reduction, and regulatory alignment consistently.",
    icon: (
      <img src="/img/icon/hr-policy-compliance-guaranted.webp" alt="icon" style={{ width: "30px", height: "30px" }} />
    ),
  },
  {
    id: "03",
    // color: "#d97706",
    bg: "rgba(217,119,6,0.08)",
    title: "Structured Implementation",
    desc: "PCS ensures smooth HR policy execution through structured processes, leadership coordination, employee communication, and implementation-focused operational supp",
    icon: (
      <img src="/img/icon/hr-policy-structured.webp" alt="icon" style={{ width: "30px", height: "30px" }} />
    ),
  },
  {
    id: "04",
    // color: "#0d9488",
    bg: "rgba(13,148,136,0.08)",
    title: "Scalable for Any Size",
    desc: "Our HR strategy solutions are flexible and scalable, supporting startups, growing businesses, and large enterprises across diverse workforce structures.",
    icon: (
      <img src="/img/icon/hr-policy-scalable.webp" alt="icon" style={{ width: "30px", height: "30px" }} />
    ),
  },
];

// ── TAB SERVICE DATA (Image 2 style) ────────────────────────────
const tabServicesData = [
  {
    tab: "Understand & Audit",
    title: "Recruitment Consultancy Services",
    desc: "We design effective onboarding programs to integrate new hires smoothly to keep your top talent engaged and committed long-term.",
    points: ["Talent pipeline strategy & Effective JD creation", "Interview frameworks & Robust SOP design", "Hiring audits & ongoing advisory", "Onboarding & retention strategies"],
  },
  {
    tab: "Recruitment Services",
    title: "Recruitment Services",
    desc: "Finding the right talent is one of the most critical challenges for any growing business. PCS provides end-to-end recruitment support — from defining job profiles and sourcing candidates to structured interviews and final onboarding. We connect you with people who fit both the role and your culture.",
    points: ["Job Analysis & Profiling", "Candidate Sourcing & Screening", "Shortlisting & Assessment", "Interview Coordination", "Offer & Onboarding Support"],
  },
  {
    tab: "HR Strategy & Policy",
    title: "HR Strategy & Policy",
    desc: "A strong HR framework is the foundation of a high-performing organisation. We work with leadership to design policies, organisational structures, and HR governance that drive performance, ensure compliance, and create a workplace people want to be part of.",
    points: ["HR Policy Documentation", "Organisational Design", "Designation & Org Chart Mapping", "HR Audit & Compliance", "Performance Management Frameworks"],
  },
  {
    tab: "Training & Development",
    title: "Training & Development",
    desc: "Upskilling your workforce is key to staying competitive. PCS designs and delivers targeted training programmes — from leadership development to role-specific technical skills — that elevate individual performance and strengthen your entire organisation.",
    points: ["Leadership Development", "Skill Gap Analysis", "Custom Training Modules", "Employee Onboarding Programs", "Performance Coaching"],
  },
  {
    tab: "Compliance & Legal",
    title: "Compliance & Legal HR",
    desc: "Navigating HR-related legal requirements is complex and ever-changing. Our compliance specialists ensure your policies, practices, and documentation meet all statutory obligations — protecting your business from risk while building a legally sound workplace.",
    points: ["Labour Law Compliance", "Contract & Offer Letter Drafting", "Grievance Handling Procedures", "Termination & Exit Compliance", "Statutory Registration Support"],
  },
  {
    tab: "HR Outsourcing",
    title: "HR Outsourcing",
    desc: "Let PCS be your dedicated HR department. We offer full or partial HR outsourcing services — giving you access to seasoned HR professionals without the overhead of a full in-house team. Scalable, cost-effective, and built around your business needs.",
    points: ["Dedicated HR Manager", "Employee Lifecycle Management", "MIS Reporting & Analytics", "HR Helpdesk Support", "Vendor & Contract Management"],
  },
];

// ── SERVICES SECTION (HTML tilt card layout) ────────────────────
function ServicesSection() {
  return (
    <section className="svc-section">
      <div className="svc-inner">
        <div className="svc-header">
          <div className="partners-header1"  style={{ textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>HR & Policy Development Services </h2>
          </div>
          <h3 className="hr-h2" style={{ textAlign: 'center', color: '#fff' }}>Our Result-Driven  <span style={{ color: '#ed8337' }}><i>HR Advisory </i></span>  Framework</h3>
          <p className="svc-subtext">
            We bring structure, compliance, and strategy to every HR function.
          </p>
        </div>
        <div className="svc-trio-grid">
          <div className="svc-tcard svc-tcard-1">
            <div className="svc-tcard-band">
              <div className="svc-tcard-num">01</div>
              <div className="svc-tcard-icon">
                <img src="/img/icon/hr-policy-development.webp" alt="service icon" style={{ width: "32px", height: "32px" }} />
              </div>
              <span className="svc-tcard-eyebrow">Consultancy</span>
              <h4 className="svc-tcard-title">HR Policy Development Services</h4>
            </div>
            <div className="svc-tcard-body">
              <div className="svc-tcard-desc">
                We handle HR Policy Development end-to-end from setting the cultural tone to ensuring full compliance.


              </div>
              <ul className="svc-tcard-points">
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Strategic HR Policy Development aligned to your organization’s goals</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Employee handbooks, codes of conduct, leave and benefits policies</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Department-specific and role-based HR policies</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Policy reviews for clarity, tone, accessibility, and legal compliance</li>

              </ul>
            </div>
            <div className="svc-tcard-footer"></div>
          </div>
          <div className="svc-tcard svc-tcard-2">
            <div className="svc-tcard-band">
              <div className="svc-tcard-num">02</div>
              <div className="svc-tcard-icon">
                <img src="/img/icon/hr-policy-hr-strategy.webp" alt="service icon" style={{ width: "32px", height: "32px" }} />
              </div>
              <span className="svc-tcard-eyebrow">End-to-End</span>
              <h4 className="svc-tcard-title">HR Strategy Development Services</h4>
            </div>
            <div className="svc-tcard-body">
              <div className="svc-tcard-desc">
                For businesses that don’t just want to grow but grow with purpose, structure, and clarity.

              </div>
              <ul className="svc-tcard-points">
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Long-term HR strategy development roadmap creation</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Role clarity, workforce planning, and growth alignment</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Succession planning, leadership framework, and org design</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Integration with business goals and operational strategy</li>

              </ul>
            </div>
            <div className="svc-tcard-footer"></div>
          </div>
          <div className="svc-tcard svc-tcard-3">
            <div className="svc-tcard-band">
              <div className="svc-tcard-num">03</div>
              <div className="svc-tcard-icon">
                <img src="/img/icon/hr-policy-hr-audit.webp" alt="service icon" style={{ width: "32px", height: "32px" }} />
              </div>
              <span className="svc-tcard-eyebrow">Outsourcing</span>
              <h4 className="svc-tcard-title">HR Audits & Advisory Services</h4>
            </div>
            <div className="svc-tcard-body">
              <div className="svc-tcard-desc">
                When HR feels overwhelming, we bring structure. When there’s confusion, we bring clarity.


              </div>
              <ul className="svc-tcard-points">
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Audit of current HR policies and compliance risks</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Evaluation of workforce structures and reporting lines</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Alignment with labor laws, DEI goals, and market practices</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Risk mitigation, documentation standardization, and advisory</li>
              </ul>
            </div>
            <div className="svc-tcard-footer"></div>
          </div>
        </div>
      </div>
    </section>
  );
}


// ── SERVICES BUILT FOR RESULTS COMPONENT ────────────────────────
function TabServiceSection() {
  const [activeTab, setActiveTab] = useState(0);
  const total = servicesTabs.length;
  const svc = servicesTabs[activeTab];
  const goPrev = () => setActiveTab(i => Math.max(0, i - 1));
  const goNext = () => setActiveTab(i => Math.min(total - 1, i + 1));

  return (
    <section className="bfr-section">
      <div className="bfr-inner">

        {/* Header */}
        <div className="bfr-header">
          <div className="partners-header1"  style={{ textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Proven HR Strategy & Policy Development
            </h2>
          </div>
          <h3 className="bfr-title">
            Our Proven  <span><i>HR Strategy and Policy </i> </span> Development Process
          </h3>
          <p className="bfr-sub">
            We turn HR challenges into strategic advantages with a clear, proven framework built for real-world impact.


          </p>
        </div>

        {/* Desktop Tabs */}
        <div className="bfr-tabs">
          {servicesTabs.map((t, i) => (
            <button
              key={i}
              className={`bfr-tab${activeTab === i ? " active" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              <span className="bfr-tab-icon">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>

        {/* Mobile Nav — prev/next + label */}
        <div className="bfr-mobile-nav">
          <button className="bfr-mobile-nav-btn" onClick={goPrev} disabled={activeTab === 0}>&#8592;</button>
          <span className="bfr-mobile-tab-label">{svc.label || svc.tab || svc.title}</span>
          <button className="bfr-mobile-nav-btn" onClick={goNext} disabled={activeTab === total - 1}>&#8594;</button>
        </div>

        {/* Mobile Dots */}
        <div className="bfr-mobile-dots">
          {servicesTabs.map((_, i) => (
            <button key={i} className={`bfr-mobile-dot${activeTab === i ? " active" : ""}`} onClick={() => setActiveTab(i)} />
          ))}
        </div>

        {/* Panel */}
        <div className="bfr-panel" key={activeTab}>
          <div className="bfr-panel-grid">

            {/* Left */}
            <div className="bfr-panel-left">
              <h4 className="bfr-panel-title">{svc.title}</h4>
              <p className="bfr-panel-desc">{svc.desc}</p>
              <ul className="bfr-features">
                {svc.features.map((f, i) => (
                  <li key={i}>
                    <span className="bfr-check">
                      <svg viewBox="0 0 12 12">
                        <polyline points="2,6 5,9 10,3" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              {/* <button className="bfr-cta-btn">Learn More →</button> */}
            </div>

            {/* Right stat card */}
            <div className="bfr-panel-right">
              <div className="bfr-right-icon">{svc.rightIcon}</div>
              <div className="bfr-right-stat">
                <div className="bfr-right-stat-num">{svc.stat}</div>
                <div className="bfr-right-stat-label">{svc.statLabel}</div>
              </div>
              <div className="bfr-right-tags">
                {svc.tags.map((tag, i) => (
                  <span key={i} className="bfr-right-tag">{tag}</span>
                ))}
              </div>
              {/* <button className="bfr-right-cta">Get Started →</button> */}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
// ── STEP FLOW COMPONENT ──────────────────────────────────────────
function StepFlowSection() {
  return (
    <section className="sf-section">
      <div className="sf-inner">
        <div className="sf-header">
          <div className="partners-header1" style={{ textAlign: "center" }}>
            <div className="partners-eyebrow" style={{ marginBottom: "16px", color: "var(--orange)" }}>
              Why PCS?
            </div>
          </div>
          <h2 className="sf-heading">Why Priyam Consultancy Services, <span><i>HR Strategy and Policy Development </i></span> Works for Growing Businesses</h2>
          <p className="sf-subtext">
            At Priyam Consultancy Services, we recognize that many organizations experience fragmented processes, outdated policies, and unclear responsibilities. Therefore, our services in HR Strategy and Policy Development simplify the complexity of HR by crafting systems to be practical, compliant, and suitable for your organization. Whether it is policy writing or planning for a future strategic workforce, we focus on providing your organization with a resilient HR foundation that is scalable and future-proof.



          </p>
        </div>

        <div className="sf-flow">
          {stepFlowData.map((step, i) => {
            const isOdd = i % 2 === 0; // 0,2 → odd visual (1st,3rd)
            return (
              <div key={i} className="sf-card-wrap">
                <div
                  className={`sf-card ${isOdd ? "sf-odd" : "sf-even"}`}
                  style={{ "--sf-color": step.color }}
                >
                  <div className="sf-card-icon">{step.icon}</div>
                  <h3 className="sf-card-title">{step.title}</h3>
                  <div className="sf-card-desc">{step.desc}</div>
                </div>
                {i < stepFlowData.length - 1 && (
                  <div className="sf-arrow">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Tail line — animated draw */}
                      <path
                        className="sf-arrow-tail"
                        d="M8 24H36"
                        stroke="#ed8337"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      {/* Arrowhead chevron — slides in */}
                      <path
                        className="sf-arrow-head"
                        d="M28 16L38 24L28 32"
                        stroke="#ed8337"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



// faq section
const faqData = [
  { q: "Can You Support Policy Development For Remote Or Geographically Dispersed Teams?", a: "Yes! We develop HR strategies and policies for hybrid, remote, and in-office workforces operating in multiple locations." },
  { q: "What Does HR Strategy and Policy Development Include?", a: "It includes full scope planning, drafting, implementation, and consultation around your HR strategy, HR policy development, and overall human resource management framework." },
  { q: "How Frequently Should HR Policies Be Reviewed And Updated?", a: "We recommend reviewing HR policies annually and/or when there are significant regulatory or organizational changes." },
  { q: "What Makes PCS A Trusted Partner For HR Strategy And Development Policy?", a: "We integrate compliance, business goals and employee needs into our approach. With extensive knowledge around human resource management, we are able to make HR policy development and HR strategy development practically and future-ready." },
  { q: "Can PCS Help Us Develop HR Policies From Scratch?", a: "Yes. We specialize in development of HR policies that are tailored to your size, industry and growth stage." },
  { q: "Can PCS Support Leadership Hiring And Organizational Design?", a: "Yes. Extended HR advisory includes org structures, succession planning, and leadership hiring strategies as part of a bundle of human resource policies and strategies." },
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
      <Head>
        <title>HR Strategy Development | HR Policy Development Services </title>
        <meta name="description" content=" Enhance your workforce with our expert HR Strategy and Policy Development services. Implement customized HR policies, support compliance, and plan for the future. " />

        <meta name="keywords" content="HR Strategy, HR Policy Development, HR Strategy Development, Developing HR Policies, HR Policies, Human Resource Management, HR Policy Development, Human Resource Policies and Strategies, HR Strategy and Policy Development" />
        <link rel="canonical" href="https://www.priyamconsultancy.com/hr-strategy-and-policy-development/" />
        <meta property="og:title" content="HR Strategy Development | HR Policy Development Services" />
        <meta property="og:description" content=" Enhance your workforce with our expert HR Strategy and Policy Development services. Implement customized HR policies, support compliance, and plan for the future. " />
        <meta property="og:url" content="https://www.priyamconsultancy.com/hr-strategy-and-policy-development/" />
        <meta property="og:image" content="https://www.priyamconsultancy.com/img/hr-strategy.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HR Strategy Development | HR Policy Development Services" />
        <meta name="twitter:description" content=" Enhance your workforce with our expert HR Strategy and Policy Development services. Implement customized HR policies, support compliance, and plan for the future. " />
        <meta name="twitter:image" content="https://www.priyamconsultancy.com/img/hr-strategy.png" />
        {schemaData.map((schema, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}
      </Head>
      <div className="hr-page pg-strategy">
        <HeroSection />
        <ApproachSection />
        <ServicesSection />
        <TabServiceSection />
        <StepFlowSection />
        <FAQSection />
        <BlogSection />
        <CTASection />
      </div>
    </Layout>
  );
}