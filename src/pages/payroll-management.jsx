import '../css/pages-common.css';
import { useState } from "react";
import emailjs from "@emailjs/browser";
import BlogSection from "../components/BlogSection";
import CTASection from "../components/HomePage/CTA";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
const banner = "/img/payroll-services.webp";

const pageUrl = "https://www.priyamconsultancy.com/payroll-management/";
const imageUrl = "https://www.priyamconsultancy.com/img/payroll-services.png";

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
          "@id": "https://www.priyamconsultancy.com/payroll-management/",
          "name": "Payroll Management"
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
    "@id": "https://www.priyamconsultancy.com/payroll-management/#service",
    "name": "Payroll Management",
    "serviceType": "Payroll Management Services",
    "url": "https://www.priyamconsultancy.com/payroll-management/",
    "description": "Priyam Consultancy provides professional payroll management services including salary processing, employee payroll administration, statutory compliance, payslip generation, tax calculations and end-to-end payroll support for businesses across India.",
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
    "name": "Payroll Management Services in Coimbatore",
    "image": ["https://www.priyamconsultancy.com/img/payroll-services.png"],
    "description": "Best payroll management services in Coimbatore offering salary processing, payroll administration, statutory compliance, tax calculations and end-to-end payroll support for businesses.",
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
      "reviewCount": "4678"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.priyamconsultancy.com/payroll-management/",
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
        "name": "What Are The Payroll Management Services/Work A Part Of Your Services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We encompass all details such as employee salaries, tax deductions, leave trackers, payslips, and PF/ESI/TDS filings."
        }
      },
      {
        "@type": "Question",
        "name": "Is Your Payroll System Cloud Based?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Everything in our payroll management system is cloud based, and accessible 24 hours a day, 7 days a week and with secure logins for the admin role and all employee roles."
        }
      },
      {
        "@type": "Question",
        "name": "Do You Support Compliance Filings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We ensure monthly, quarterly, and annual compliance filings across PF, ESI, TDS, and labor laws."
        }
      },
      {
        "@type": "Question",
        "name": "Can You Integrate With Our Current HR Systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our system can integrate with most HR systems, and will run seamlessly with data flowing between your systems and automating workflows."
        }
      },
      {
        "@type": "Question",
        "name": "What Makes PCS A Trustworthy Option For Payroll Management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide accuracy, security, expertise in our domain, and compliance-first service. With PCS, you're getting a partner as opposed to just a vendor."
        }
      },
      {
        "@type": "Question",
        "name": "Can You Handle Payroll For Remote Teams Across India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We manage payroll for remote teams, hybrid teams, and multi-state teams all across India and especially ensure compliance with local laws in each state."
        }
      }
    ]
  }
];


// ── DATA ──────────────────────────────────────────────────────────

const services = [
  {
    id: "01", icon: "💰", color: "#FF6B2B",
    title: "Payroll Management",
    tagline: "Accurate. Timely. Compliant.",
    desc: "Timely, accurate, and fully compliant — we simplify your payroll so you're never exposed to the complexities of salary processing, tax filings, and benefits admin.",
    bullets: ["Payroll Processing & Accurate Calculations", "Tax Deductions and Form Filing", "Statutory Compliance and Filings"],
  },
  {
    id: "02", icon: "🎯", color: "#1A56DB",
    title: "Recruitment Services",
    tagline: "Right People. Right Roles. Right Now.",
    desc: "We attract top talent that fits both the role and your culture — whether rapidly growing, filling a single position, or looking for future leaders.",
    bullets: ["Job Analysis & Profiling", "Candidate Sourcing & Screening", "Shortlisting", "Interviewing & Selection Support"],
  },
  {
    id: "03", icon: "📋", color: "#059669",
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
      <svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4" /><path d="M2 20c0-4 3-7 7-7" /><circle cx="17" cy="9" r="3" /><path d="M14 20c0-3 2-5 5-5" /><path d="M19 4l1.5 1.5L23 3" /></svg>
    ),
  },
  {
    num: "02", title: "Talent Acquisition Excellence",
    desc: "Attract and hire top talent that fits your culture and long-term objectives seamlessly.",
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="22" y2="22" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
    ),
  },
  {
    num: "03", title: "Compliance & Risk Management",
    desc: "Full legal compliance across all HR functions, minimizing costly risks.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2l7 4v6c0 5-3.5 9-7 10C8.5 21 5 17 5 12V6z" /><path d="M9 12l2 2 4-4" /></svg>
    ),
  },
  {
    num: "04", title: "Streamlined Payroll Services",
    desc: "End-to-end payroll with tax compliance, timely payments, and zero errors.",
    icon: (
      <svg viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="14" rx="2" /><line x1="2" y1="11" x2="22" y2="11" /><line x1="6" y1="16" x2="10" y2="16" /></svg>
    ),
  },
  {
    num: "05", title: "Scalable HR Solutions",
    desc: "From a small team to a large enterprise — our HR systems grow with your business at every stage.",
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="8" /><line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" /><line x1="2" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="22" y2="12" /></svg>
    ),
  },
  {
    num: "06", title: "Cost-Effective HR Support",
    desc: "Maximize ROI by reducing overhead while receiving exceptional, fully tailored HR support across all functions.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M5 9l7-5 7 5v10l-7 4-7-4z" /><path d="M9 13l2 2 4-4" /></svg>
    ),
  },
];

const processSteps = {
  leftTop: {
    title: "Deeper Understanding",
    desc: "We begin with a thorough analysis of your business goals, workforce structure, and HR challenges.",
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><circle cx="12" cy="8" r="1.5" fill="#ed8337" stroke="none" /><path d="M7 18c0-3.5 2.2-6 5-6s5 2.5 5 6" strokeLinecap="round" /></svg>
    ),
  },
  rightTop: {
    title: "Strategy & Planning",
    desc: "We craft tailored HR strategies aligned with your business vision and long-term objectives.",
    icon: (
      <svg viewBox="0 0 24 24"><rect x="8" y="6" width="7" height="7" rx="1.5" /><rect x="14" y="12" width="6" height="6" rx="1.5" /><line x1="11.5" y1="13" x2="11.5" y2="15" /><line x1="11.5" y1="15" x2="17" y2="15" /></svg>
    ),
  },
  rightBottom: {
    title: "Execution & Monitoring",
    desc: "Seamless implementation with continuous monitoring to ensure every initiative stays on track.",
    icon: (
      <svg viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="12" rx="2" /><polyline points="6,14 9,11 12,13 15,9 18,12" /></svg>
    ),
  },
  leftBottom: {
    title: "Feedback & Analytics Reports",
    desc: "Detailed reporting and analytics to help you optimize results and make data-driven decisions.",
    icon: (
      <svg viewBox="0 0 24 24"><rect x="4" y="9" width="16" height="11" rx="2" /><line x1="4" y1="14" x2="20" y2="14" /><line x1="8" y1="18" x2="13" y2="18" /></svg>
    ),
  },
};

const servicesTabs = [
  {
    label: "Understand & Audit",
    icon: <img src="/img/icon/payroll-understand-audit.webp" alt="Understand & Audit" style={{ width: "28px", height: "28px", objectFit: "contain", verticalAlign: "middle" }} />,
    rightIcon: "",
    title: "Understand & Audit",
    desc: "To begin, we will meticulously examine your current payroll system, employee data, and compliance situation. This audit gives us insight into any flags or gaps in your business. We will look at your overall payroll structure initiating with accuracy of data, statutory compliance and whether there are unnecessary inefficiencies in your workflow.",
    features: [],
    tags: ["Review Payroll", "Analyze Compliance", "Verify EmployeeData", "Identify Inefficiencies"],
    stat: "", statLabel: "",
  },
  {
    label: "Configure & Customize",
    icon: <img src="/img/icon/payroll-configure-customize.webp" alt="Configure & Customize" style={{ width: "28px", height: "28px", objectFit: "contain", verticalAlign: "middle" }} />,
    rightIcon: "",
    title: "Configure & Customize",
    desc: "We don't believe in one-size-fits-all solutions. That's why we spend the time tailoring our payroll management system to fit your business perfectly. We customize salary structure, tax calculations and other compensation based on your organization's internal policies.",
    features: [],
    tags: ["Customize SalaryStructures", "Configure TaxCalculations", "Align CompanyPolicies", "Personalize PayrollSystems"],
    stat: "", statLabel: "",
  },
  {
    label: "Process & Disburse",
    icon: <img src="/img/icon/payroll-process-disburse.webp" alt="Process & Disburse" style={{ width: "28px", height: "28px", objectFit: "contain", verticalAlign: "middle" }} />,
    rightIcon: "",
    title: "Process & Disburse",
    desc: "With accuracy and efficiency we will process all stages of the payroll cycle - from data entry to payout. Begins with checking data entry where we ensure that attendance and leave balances and any other elements being entered onto payroll are accurate to the day. We will calculate salaries, benefits, bonuses, and deductions according to your company policies.",
    features: [],
    tags: ["Verify AttendanceRecords", "Calculate EmployeeSalaries", "Process PayrollCycles", "Manage SalaryDisbursement"],
    stat: "", statLabel: "",
  },
  {
    label: "Comply & Report",
    icon: <img src="/img/icon/payroll-comply-report.webp" alt="Comply & Report" style={{ width: "28px", height: "28px", objectFit: "contain", verticalAlign: "middle" }} />,
    rightIcon: "",
    title: "Comply & Report",
    desc: "Keeping up with regulations that are constantly changing can be tough, but we have got you covered! We take responsibility for all statutory filings (PF, ESI, TDS, PT, etc) and file all required documents on time. We also produce Form 16s and quarterly/year-end reports with complete documentations of all transactions.",
    features: [],
    tags: ["Handle StatutoryFilings", "Generate ComplianceReports", "Prepare Form16s", "Maintain Documentation"],
    stat: "", statLabel: "",
  },
  {
    label: "Monitor & Optimize",
    icon: <img src="/img/icon/payroll-monitor-optimize.webp" alt="Monitor & Optimize" style={{ width: "28px", height: "28px", objectFit: "contain", verticalAlign: "middle" }} />,
    rightIcon: "",
    title: "Monitor & Optimize",
    desc: "We view payroll management as an ongoing journey, not a one-time task. That's why we don't stop at execution we continuously optimize. Each cycle is reviewed closely to track outcomes, spot inefficiencies, and make timely improvements that keep your payroll process sharp and dependable.",
    features: [],
    tags: ["Track PayrollPerformance", "Identify ProcessGaps", "Improve PayrollEfficiency", "Optimize Workflows"],
    stat: "", statLabel: "",
  },
  {
    label: "Continuous Support & Proactive Insights",
    icon: <img src="/img/icon/payroll-continuous-support.webp" alt="Continuous Support" style={{ width: "28px", height: "28px", objectFit: "contain", verticalAlign: "middle" }} />,
    rightIcon: "",
    title: "Continuous Support & Proactive Insights",
    desc: "At PCS, payroll management is an ongoing partnership, not just processing. Our dedicated team is always available to help with questions, fix issues, or discuss anything you need. We'll also provide proactive assistance with your payroll data, helping you see trends, risks, and possible savings.",
    features: [],
    tags: ["Provide DedicatedSupport", "Resolve PayrollQueries", "Analyze PayrollTrends", "Identify CostSavings"],
    stat: "", statLabel: "",
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
        <div className="h-badge"><div className="badge-dot" />Payroll Services</div>
        <h1 className="hero-heading">
          Simplify Payroll. Grow
          <span className="hl lined">Confidently</span> With
          Services
        </h1>
        <ul className="hero-sub">
          <li>Accuracy That Builds Trust.</li>
          <li>Compliance You Never Have to Worry About.</li>
          <li>Cut down manual work & speed up execution.</li>
          <li>Scalable Payroll Solutions for Business Types.</li>
        </ul>
        <div className="hero-actions">
          <a className="btn-fill" href="/contact-us">Explore More <span className="btn-arrow">›</span></a>
        </div>
      </div>

      <div className="hero-right">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            src={banner}
            alt="Payroll Management"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>
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
          <h2 className="ap2-heading">Seamless <span>Payroll for</span> Every Stage of Growth</h2>
          <p className="ap-intro">
            PCS delivers seamless payroll solutions for startups, growing businesses, and large enterprises through a combination of automation, compliance expertise, and reliable operational support.

          </p>
          <p className="ap-intro">
            Our scalable payroll systems manage salary processing, tax filing, statutory compliance, reporting, and employee coordination while ensuring accuracy, security, and smooth workforce management.
          </p>
          <p className="ap-intro">
            Beyond payroll processing, PCS acts as a strategic HR operations partner focused on precision, compliance, efficiency, and stress-free payroll management for businesses of every size.

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
    title: "Precision That Minimizes Errors",
    desc: "Our accuracy-focused payroll process ensures correct salary calculations, deductions, reimbursements, and payouts while minimizing payroll errors and operational disruptions",
    icon: (
      <img src="/img/icon/payroll-precision.webp" alt="Precision That Minimizes Errors" style={{ width: "36px", height: "36px", objectFit: "contain" }} />
    ),
  },
  {
    id: "02",
    // color: "#e03e52",
    bg: "rgba(224,62,82,0.08)",
    title: "Total Compliance, Guaranteed",
    desc: "PCS manages statutory filings, tax compliance, reporting requirements, and regulatory updates to help businesses maintain complete payroll compliance without risk.",
    icon: (
      <img src="/img/icon/payroll-compliance.webp" alt="Total Compliance" style={{ width: "36px", height: "36px", objectFit: "contain" }} />
    ),
  },
  {
    id: "03",
    // color: "#d97706",
    bg: "rgba(217,119,6,0.08)",
    title: "Streamlined Payroll Operations",
    desc: "We simplify payroll workflows through structured processes, automation, and expert management that improve efficiency, reduce delays, and support smooth business operations.",
    icon: (
      <img src="/img/icon/payroll-streamlined.webp" alt="Streamlined Payroll Operations" style={{ width: "36px", height: "36px", objectFit: "contain" }} />
    ),
  },
  {
    id: "04",
    // color: "#0d9488",
    bg: "rgba(13,148,136,0.08)",
    title: "Flexible Solutions for Every Business Size",
    desc: "Our scalable payroll solutions are designed to support startups, growing businesses, and large enterprises with customized payroll management based on operational needs.",
    icon: (
      <img src="/img/icon/payroll-flexible.webp" alt="Flexible Solutions" style={{ width: "36px", height: "36px", objectFit: "contain" }} />
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
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Payroll Management Services </h2>
          </div>
          <h3 className="hr-h2" style={{ textAlign: 'center', color: '#fff' }}>Our Result-Driven  <span style={{ color: '#ed8337' }}><i>Payroll Management </i></span>  Sources</h3>
          <p className="svc-subtext">
            We bring clarity, compliance, and confidence to every payroll cycle.

          </p>
        </div>
        <div className="svc-trio-grid">
          <div className="svc-tcard svc-tcard-1">
            <div className="svc-tcard-band">
              <div className="svc-tcard-num">01</div>
              <div className="svc-tcard-icon">
                <img src="/img/icon/payroll-processing.webp" alt="Payroll Processing" style={{ width: "28px", height: "28px", objectFit: "contain" }} />
              </div>
              <span className="svc-tcard-eyebrow">Consultancy</span>
              <h4 className="svc-tcard-title">Payroll Processing Services</h4>
            </div>
            <div className="svc-tcard-body">
              <div className="svc-tcard-desc">
                End-to-end salary management—from inputs to disbursals.


              </div>
              <ul className="svc-tcard-points">
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Salary structure design, tax computation, bonus/incentive processing</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Automated payslip generation & salary credit tracking</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Monthly compliance deductions: PF, ESI, PT, and TDS</li>
              </ul>
            </div>
            <div className="svc-tcard-footer"></div>
          </div>
          <div className="svc-tcard svc-tcard-2">
            <div className="svc-tcard-band">
              <div className="svc-tcard-num">02</div>
              <div className="svc-tcard-icon">
                <img src="/img/icon/payroll-outsourcing.webp" alt="Payroll Outsourcing" style={{ width: "28px", height: "28px", objectFit: "contain" }} />
              </div>
              <span className="svc-tcard-eyebrow">End-to-End</span>
              <h4 className="svc-tcard-title">Payroll Outsourcing Services</h4>
            </div>
            <div className="svc-tcard-body">
              <div className="svc-tcard-desc">
                A dedicated team that runs payroll, so your HR can focus on people.

              </div>
              <ul className="svc-tcard-points">
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Fully managed payroll cycles with SLA-driven timelines</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Employee data collation and pre-validation</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Filing & distribution of Form 16, returns, and audit-ready reports</li>
              </ul>
            </div>
            <div className="svc-tcard-footer"></div>
          </div>
          <div className="svc-tcard svc-tcard-3">
            <div className="svc-tcard-band">
              <div className="svc-tcard-num">03</div>
              <div className="svc-tcard-icon">
                <img src="/img/icon/payroll-consultants.webp" alt="Payroll Consultants" style={{ width: "28px", height: "28px", objectFit: "contain" }} />
              </div>
              <span className="svc-tcard-eyebrow">Outsourcing</span>
              <h4 className="svc-tcard-title">Payroll Consultants</h4>
            </div>
            <div className="svc-tcard-body">
              <div className="svc-tcard-desc">
                When you need more than execution, you need optimization.

              </div>
              <ul className="svc-tcard-points">
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Audit of existing payroll practices and gap identification</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Compliance alignment and risk mitigation</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Regular updates on changing labor laws and statutory norms</li>
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
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Proven Payroll Process</h2>
          </div>
          <h3 className="bfr-title">
            Compliance-Focused. <span><i>Tech-Powered. </i> </span> People-First.
          </h3>
          <p className="bfr-sub">
            A 360° payroll solution built for precision, compliance, and continuous optimization.

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
            <div className="partners-eyebrow" style={{ marginBottom: "16px", color: "var(--orange)" }}>Why PCS?</div>
          </div>
          <h2 className="sf-heading">Why Priyam Consultancy Services, <span><i>Payroll Management</i></span> Works for Growing Businesses</h2>
          <p className="sf-subtext">
            Priyam Consultancy Services streamlines payroll so you can do what really matters – look after your people and grow. With our accuracy-first approach, we verify every calculation from salaries to deductions, reduce errors, and pay on time. Your employees are paid accurately every time.


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
  { q: "What Are The Payroll Management Services/Work A Part Of Your Services?", a: "We encompass all details such as employee salaries, tax deductions, leave trackers, payslips, and PF/ESI/TDS filings." },
  { q: "Is Your Payroll System Cloud Based?", a: "Yes! Everything in our payroll management system is cloud based, and accessible 24 hours a day, 7 days a week and with secure logins for the admin role and all employee roles." },
  { q: "Do You Support Compliance Filings?", a: "Absolutely. We ensure monthly, quarterly, and annual compliance filings across PF, ESI, TDS, and labor laws." },
  { q: "Can You Integrate With Our Current HR Systems?", a: "Absolutely. Our system can integrate with most HR systems, and will run seamlessly with data flowing between your systems and automating workflows." },
  { q: "What Makes PCS A Trustworthy Option For Payroll Management?", a: "We provide accuracy, security, expertise in our domain, and compliance-first service. With PCS, you’re getting a partner as opposed to just a vendor." },
  { q: "Can You Handle Payroll For Remote Teams Across India?", a: "Yes! We manage payroll for remote teams, hybrid teams, and multi-state teams all across India and especially ensure compliance with local laws in each state." },
];
function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <section className="faq-section">
      <div className="partners-header2" style={{ textAlign: 'center', marginTop: '20px' }}>
        <div className="partners-eyebrow" >Frequently Asked Questions</div>
      </div>
      <div className="container">
        {/* TITLE */}
        <div className="faq-head">
          <h2>Queries That Could <span>Hold You Back</span></h2>
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
    <Layout>
      <Head>
        <title>Best Payroll Outsourcing Services Company In Coimbatore </title>
        <meta name="description" content="Get accurate and hassle-free payroll outsourcing services in Coimbatore. We handle payroll processing, compliance, and employee management with expert support. " />

        <meta name="keywords" content="Payroll Management, Payroll Management Services, Payroll Outsourcing Services, Payroll Processing Service, Payroll Management Consultants, Payroll Management Company, Payroll Management System" />
        <link rel="canonical" href="https://www.priyamconsultancy.com/payroll-management/" />
        <meta property="og:title" content="Best Payroll Outsourcing Services Company In Coimbatore " />
        <meta property="og:description" content="Get accurate and hassle-free payroll outsourcing services in Coimbatore. We handle payroll processing, compliance, and employee management with expert support. " />
        <meta property="og:url" content="https://www.priyamconsultancy.com/payroll-management/" />
        <meta property="og:image" content="https://www.priyamconsultancy.com/img/payroll-services.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Payroll Outsourcing Services Company In Coimbatore " />
        <meta name="twitter:description" content="Get accurate and hassle-free payroll outsourcing services in Coimbatore. We handle payroll processing, compliance, and employee management with expert support. " />
        <meta name="twitter:image" content="https://www.priyamconsultancy.com/img/payroll-services.png" />
        {schemaData.map((schema, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}
      </Head>
      <div className="hr-page pg-payroll">
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