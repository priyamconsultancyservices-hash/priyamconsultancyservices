import '../css/pages-common.css';
import { useState } from "react";
import emailjs from "@emailjs/browser";
import CTASection from "../components/HomePage/CTA";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import BlogSection from "../components/BlogSection";

const banner = "/img/recriutment-services.webp";

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
          "@id": "https://www.priyamconsultancy.com/recruitment-services/",
          "name": "Recruitment Services"
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
    "@id": "https://www.priyamconsultancy.com/recruitment-services/#service",
    "name": "Recruitment Services",
    "serviceType": "Recruitment and Hiring Services",
    "url": "https://www.priyamconsultancy.com/recruitment-services/",
    "description": "Priyam Consultancy provides professional recruitment services including talent acquisition, executive hiring, staffing solutions, candidate screening, workforce planning and end-to-end recruitment support for businesses across India.",
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

  // FAQ Schema
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What Industries Do You Provide Recruitment Services For?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We cater to many industries including tech, finance, logistics, FMCG, healthcare, and a number of other industries, with vertical-specific recruiters in each."
        }
      },
      {
        "@type": "Question",
        "name": "Do You Just Provide Candidate Profiles Or Do You Provide End To End Hiring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both. We are a full-service Recruitment Services Company, that does profile share, end-to-end recruitment and full RPO setups."
        }
      },
      {
        "@type": "Question",
        "name": "Can You Assist With Hiring For Our HR And Compliance Teams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer HR Recruitment Services which focus on sourcing the best possible talent for internal HR, payroll and people ops roles."
        }
      },
      {
        "@type": "Question",
        "name": "Do You Support Hiring For Remote Or Hybrid Teams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We can help you to find and onboard remote, hybrid and freelance resources in-line with your organization's model."
        }
      },
      {
        "@type": "Question",
        "name": "How Do Your Recruitment Consultancy Services Work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We help you improve the way you hire—writing JDs, setting interview SOPs, building talent pools, and being your in-house recruitment strategy partner."
        }
      },
      {
        "@type": "Question",
        "name": "How Is PCS Different From Other Recruitment Agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide the depth of a consultancy, the scale of an agency and the ownership of an internal HR partner, and we do it all, smarter and faster."
        }
      }
    ]
  }
];


// ── DATA ──────────────────────────────────────────────────────────

const servicesTabs = [
  {
    label: "Discover & Define",
    icon: <img src="/img/icon/recruitment-service-discover.webp" alt="Search" style={{ width: "30px", height: "30px" }} />,
    title: "Discover & Define",
    desc: "Before sourcing a single profile we immerse ourselves in your business. We get to understand your hiring objectives, dynamics of the team, the structure of the organization and what success looks like in the role, both technically and culturally. We go beyond job descriptions to understand the must-haves, nice-to-haves and red flags.",
    features: [],
    tags: ["Understand Hiring Goals", "Analyze Team Culture", "Identify Role Requirements", "Define Success Metrics"],
  },
  {
    label: "Source & Screen",
    icon: <img src="/img/icon/recruitment-service-source.webp" alt="Plan" style={{ width: "30px", height: "30px" }} />,
    title: "Source & Screen",
    desc: "With clear direction, we kick off our sourcing engine: a combination of corporate talent databases; AI-based tools; niche job boards; and passive candidate networks. But we do more than source resumes. For every candidate sourced, we do a structured screening on skills, attitude, and culture - so we only put the best forward.",
    features: [],
    tags: ["Source Qualified Candidates", "Access Talent Networks", "Conduct Candidate Screening", "Shortlist Suitable Professionals"],
  },
  {
    label: "Present & Coordinate",
    icon: <img src="/img/icon/recruitment-service-present.webp" alt="Align" style={{ width: "30px", height: "30px" }} />,
    title: "Present & Coordinate",
    desc: "We do not merely share resumes – we provide complete profiles of candidates, including summary reports, assessment results and indicators for cultural alignment. We handle the entire interview coordination process from scheduling through feedback collation so that your team can focus on making the right choice rather than the admin burden.",
    features: [],
    tags: ["Share Candidate Profiles", "Provide Cultural Insights", "Manage Interview Scheduling", "Organize Recruitment Feedback"],
  },
  {
    label: "Close & Onboard",
    icon: <img src="/img/icon/recruitment-service-close.webp" alt="Check" style={{ width: "30px", height: "30px" }} />,
    title: "Close & Onboard",
    desc: "Hiring isn’t just the offer. We support negotiations, offer letters, and onboarding that keeps candidates warm and engaged. We pre-join actively manage engagement to minimize drop-offs and support the transitional phase with you and the candidate with confidence.",
    features: [],
    tags: ["Support Offer Negotiations", "Ensure Smooth Onboarding", "Reduce Dropout Risks", "Manage Joining Process"],
  },
  {
    label: "Optimize & Support",
    icon: <img src="/img/icon/recruitment-service-support.webp" alt="Implement" style={{ width: "30px", height: "30px" }} />,
    title: "Optimize & Support",
    desc: "At PCS, successful hiring is an ongoing partnership, not just making an offer. We support you long after acceptance, optimizing strategies to evolve with your business. We also monitor hire effectiveness, gather feedback, and offer actionable insights to continuously improve your recruitment processes.",
    features: [],
    tags: ["Monitor Hiring Performance", "Improve Recruitment Strategies", "Support Workforce Planning", "Build Hiring Partnerships"],
  },
  {
    label: "Monitor & Refine",
    icon: <img src="/img/icon/recruitment-service-refine.webp" alt="Refine" style={{ width: "30px", height: "30px" }} />,
    title: "Monitor & Refine",
    desc: "Recruiting is a fluid process, and we continually strive to keep your hiring practices at the cutting edge of what is happening in the marketplace. Through data-enhanced insights and real-time feedback loops, we consistently evaluate your recruiting efforts and identify applicable ways to refine our process to improve recruiting outcomes.",
    features: [],
    tags: ["Evaluate Recruitment Effectiveness", "Track Hiring Trends", "Refine Hiring Processes", "Improve Recruitment Outcomes"],
  },
];

// ── STEP FLOW DATA ──────────────────────────────────────────────
const stepFlowData = [
  {
    id: "01",
    title: "360° Hiring Solutions",
    desc: "Complete recruitment support covering sourcing, screening, interview coordination, onboarding, and post-hiring assistance for businesses across every growth stage.",
    icon: (
      <img src="/img/icon/recruitment-service-hiring.webp" alt="360 Hiring Solutions" style={{ width: "33px", height: "33px" }} />
    ),
  },
  {
    id: "02",
    title: "Industry-Focused Expertise",
    desc: "Our recruitment strategies are tailored to industry-specific hiring needs, workforce trends, and business expectations for better candidate alignment.",
    icon: (
      <img src="/img/icon/recruitment-service-industry.webp" alt="Industry-Focused Expertise" style={{ width: "33px", height: "33px" }} />
    ),
  },
  {
    id: "03",
    title: "Tech-Enabled, Human-Focused",
    desc: "We combine advanced recruitment technology with human expertise to deliver efficient hiring experiences without compromising relationship-driven decision-making.",
    icon: (
      <img src="/img/icon/recruitment-service-human-focused.webp" alt="Tech-Enabled, Human-Focused" style={{ width: "33px", height: "33px" }} />
    ),
  },
  {
    id: "04",
    title: "Transparent & Scalable",
    desc: "Our recruitment process ensures clear communication, measurable progress, and scalable hiring solutions that adapt to changing business requirements.",
    icon: (
      <img src="/img/icon/recruitment-service-transparent-scalable.webp" alt="Transparent & Scalable" style={{ width: "33px", height: "33px" }} />
    ),
  },
];

// ── COMPONENTS ────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <div className="h-badge"><div className="badge-dot" />Expert Recruitment Services</div>
        <h1 className="hero-heading">
          Hire Smarter. Grow <span className="hl lined"> Faster</span> With Recruitment Services.
        </h1>
        <ul className="hero-sub">
          <li>A recruitment partner who understands your business and scales with you.</li>
          <li>Seamless, end-to-end Recruitment solution that saves time and cost.</li>
          <li>Qualified candidates who deliver results from Day 1.</li>
          <li>Precision hiring that reduces attrition and improves team performance.</li>
        </ul>
        <div className="hero-actions">
          <a className="btn-fill" href="/contact-us">Explore More <span className="btn-arrow">›</span></a>
        </div>
      </div>

      <div className="hero-right">
        <img
          src={banner}
          alt="Recruitment services banner"
          style={{ width: "95%", height: "auto", objectFit: "contain", position: "relative", zIndex: 5, animation: "fadeUp .9s .15s ease both" }}
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
        "service_8xw6k3r",
        "template_jarui36",
        templateParams,
        "XWRnXi4hK2SvmRG3q"
      )
      .then(() => {
        alert("Message Sent Successfully ✅");
        setForm({ name: "", email: "", phone: "", company: "", msg: "" });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send ❌");
      });
  };

  return (
    <section className="approach" id="approach">
      <div
        className="ap2-inner"
        style={{ boxSizing: "border-box", maxWidth: "1280px", margin: "0 auto", padding: "0px 24px 40px 24px" }}
      >
        {/* LEFT CONTENT */}
        <div className="ap-left" style={{ boxSizing: "border-box", minWidth: 0 }}>
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Approach in</div>
          </div>
          <h2 className="ap2-heading">Human-Centered <span>Hiring</span> That Aligns With Business Goals</h2>
          <p className="ap-intro">
            From a recruitment service provider to a true partner in growth, PCS supports organizations in building strong, high-performing teams. Our experienced recruitment professionals understand evolving workforce demands and industry expectations. We focus on identifying talent that aligns with both functional needs and long-term vision. Every hiring strategy is structured to deliver quality, speed, and cultural fit. Our goal is to transform recruitment into a competitive advantage.
          </p>
          <p className="ap-intro">
            We achieve this through customized and proven recruitment solutions backed by deep market expertise. Our extensive talent networks allow us to access the right candidates across industries and functions. Each Recruitment Consultancy engagement is tailored to your unique business requirements.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="ap2-form-wrap">
          <div className="ap2-form-card">
            <div className="ap2-form-eyebrow">
              <span className="ap2-form-eyebrow-line" />Your Growth, Our Mission<span className="ap2-form-eyebrow-line" />
            </div>
            <div className="ap2-form-title">Get Your <span>Free</span> Hiring Consultation</div>
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
                  <textarea className="ap2-fl-textarea" name="msg" placeholder="Tell us about your hiring requirements..." value={form.msg} onChange={handleChange} />
                </div>
              </div>
              <button type="submit" className="ap2-submit">
                Get Free Consultation <span className="ap2-submit-arrow">›</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SERVICES SECTION ────────────────────────────────────────────
const CheckIcon = () => (
  <span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>
);

function ServicesSection() {
  return (
    <section className="svc-section">
      <div className="svc-inner">
        <div className="svc-header">
          <div className="partners-header1" style={{ textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Recruitment Services</h2>
          </div>
          <h3 className="hr-h2" style={{ textAlign: 'center', color: '#fff' }}>Your Hiring Partner, <span style={{ color: '#ed8337' }}><i>From Role Design </i></span> to Rollout</h3>
          <p className="svc-subtext">
            We bridge the gap between people and performance with recruitment strategies built for growth.
          </p>
        </div>
        <div className="svc-trio-grid">
          <div className="svc-tcard svc-tcard-1">
            <div className="svc-tcard-band">
              <div className="svc-tcard-num">01</div>
              <div className="svc-tcard-icon">
                <img src="/img/icon/recruitment-service-talent-acquisition.webp" alt="Recruitment consultancy icon" style={{ width: "32px", height: "32px" }} />
              </div>
              <span className="svc-tcard-eyebrow">Consultancy</span>
              <h4 className="svc-tcard-title">Recruitment Consultancy Services</h4>
            </div>
            <div className="svc-tcard-body">
              <div className="svc-tcard-desc">
                We help you build a smarter hiring process with talent pipeline strategy, clear JDs, and structured interview frameworks.
              </div>
              <ul className="svc-tcard-points">
                <li><CheckIcon />Talent pipeline strategy &amp; effective JD creation</li>
                <li><CheckIcon />Interview frameworks &amp; robust SOP design</li>
                <li><CheckIcon />Hiring audits &amp; ongoing advisory</li>
                <li><CheckIcon />Onboarding &amp; retention strategies</li>
              </ul>
            </div>
            <div className="svc-tcard-footer"></div>
          </div>

          <div className="svc-tcard svc-tcard-2">
            <div className="svc-tcard-band">
              <div className="svc-tcard-num">02</div>
              <div className="svc-tcard-icon">
                <img src="/img/icon/recruitment-service-executive-search.webp" alt="End-to-end recruitment icon" style={{ width: "32px", height: "32px" }} />
              </div>
              <span className="svc-tcard-eyebrow">End-to-End</span>
              <h4 className="svc-tcard-title">End-to-End Recruitment Services</h4>
            </div>
            <div className="svc-tcard-body">
              <div className="svc-tcard-desc">
                From job profiling and sourcing to interviews and onboarding, we own the entire hiring lifecycle.
              </div>
              <ul className="svc-tcard-points">
                <li><CheckIcon />Structured job profiling &amp; role clarity</li>
                <li><CheckIcon />Sourcing through smart tools &amp; curated networks</li>
                <li><CheckIcon />Assessment frameworks that look beyond resumes</li>
                <li><CheckIcon />Interview management &amp; offer rollouts made seamless</li>
              </ul>
            </div>
            <div className="svc-tcard-footer"></div>
          </div>

          <div className="svc-tcard svc-tcard-3">
            <div className="svc-tcard-band">
              <div className="svc-tcard-num">03</div>
              <div className="svc-tcard-icon">
                <img src="/img/icon/recruitment-service-hr-staffing.webp" alt="RPO icon" style={{ width: "32px", height: "32px" }} />
              </div>
              <span className="svc-tcard-eyebrow">Outsourcing</span>
              <h4 className="svc-tcard-title">Recruitment Process Outsourcing (RPO)</h4>
            </div>
            <div className="svc-tcard-body">
              <div className="svc-tcard-desc">Need help at scale? We plug in as your recruitment engine. We provide expert support for all your hiring needs.</div>
              <ul className="svc-tcard-points">
                <li><CheckIcon />Partial or full-scale RPO support</li>
                <li><CheckIcon />Bulk hiring, assessment, and onboarding</li>
                <li><CheckIcon />Cost-effective, SLA-driven, and fully integrated</li>
                <li><CheckIcon />Extensive network and deep industry expertise</li>
              </ul>
            </div>
            <div className="svc-tcard-footer"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── PROCESS TABS COMPONENT ──────────────────────────────────────
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
          <div className="partners-header1" style={{ textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Proven Recruitment Process</h2>
          </div>
          <h3 className="bfr-title">
            Need-Based. <span><i>Candidate-Centric. </i></span> Speed-Oriented.
          </h3>
          <p className="bfr-sub">
            We combine deep industry insight, smart technology, and consultative expertise to deliver a hiring experience that’s seamless, structured, and strategically aligned with your business growth.
          </p>
        </div>

        {/* Desktop Tabs */}
        <div className="bfr-tabs">
          {servicesTabs.map((t, i) => (
            <button
              key={t.label}
              className={`bfr-tab${activeTab === i ? " active" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              <span className="bfr-tab-icon">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>

        {/* Mobile Nav */}
        <div className="bfr-mobile-nav">
          <button className="bfr-mobile-nav-btn" onClick={goPrev} disabled={activeTab === 0}>&#8592;</button>
          <span className="bfr-mobile-tab-label">{svc.label}</span>
          <button className="bfr-mobile-nav-btn" onClick={goNext} disabled={activeTab === total - 1}>&#8594;</button>
        </div>

        {/* Mobile Dots */}
        <div className="bfr-mobile-dots">
          {servicesTabs.map((t, i) => (
            <button key={t.label} className={`bfr-mobile-dot${activeTab === i ? " active" : ""}`} onClick={() => setActiveTab(i)} aria-label={t.label} />
          ))}
        </div>

        {/* Panel */}
        <div className="bfr-panel" key={activeTab}>
          <div className="bfr-panel-grid">

            {/* Left */}
            <div className="bfr-panel-left">
              <h4 className="bfr-panel-title">{svc.title}</h4>
              <p className="bfr-panel-desc">{svc.desc}</p>
              {svc.features.length > 0 && (
                <ul className="bfr-features">
                  {svc.features.map((f, i) => (
                    <li key={i}>
                      <span className="bfr-check">
                        <svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Right tags card */}
            <div className="bfr-panel-right">
              <div className="bfr-right-tags">
                {svc.tags.map((tag) => (
                  <span key={tag} className="bfr-right-tag">{tag}</span>
                ))}
              </div>
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
          <h2 className="sf-heading">End-to-End Recruitment, <span><i>Built for Every</i></span> Business Stage</h2>
          <p className="sf-subtext">
            At every stage of a company’s development and at any size, we provide flexible solutions to businesses, whether it is an ad hoc or on-demand hire or bulk recruitment, leadership search or full scale RPO. Our thorough structured process goes through recruitment and covers not just role discovery and smart sourcing but the seamless onboarding process and post-hire support giving you confidence every candidate is the right fit and not just a good CV.
          </p>
        </div>

        <div className="sf-flow">
          {stepFlowData.map((step, i) => {
            const isOdd = i % 2 === 0;
            return (
              <div key={step.id} className="sf-card-wrap">
                <div className={`sf-card ${isOdd ? "sf-odd" : "sf-even"}`}>
                  <div className="sf-card-icon">{step.icon}</div>
                  <h3 className="sf-card-title">{step.title}</h3>
                  <div className="sf-card-desc">{step.desc}</div>
                </div>
                {i < stepFlowData.length - 1 && (
                  <div className="sf-arrow">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className="sf-arrow-tail" d="M8 24H36" stroke="#ed8337" strokeWidth="3" strokeLinecap="round" />
                      <path className="sf-arrow-head" d="M28 16L38 24L28 32" stroke="#ed8337" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
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

// ── FAQ SECTION ──────────────────────────────────────────────────
const faqData = [
  { q: "What Industries Do You Provide Recruitment Services For?", a: "We cater to many industries including tech, finance, logistics, FMCG, healthcare, and a number of other industries, with vertical-specific recruiters in each." },
  { q: "Do You Just Provide Candidate Profiles Or Do You Provide End To End Hiring?", a: "Both. We are a full-service Recruitment Services Company, that does profile share, end-to-end recruitment and full RPO setups." },
  { q: "Can You Assist With Hiring For Our HR And Compliance Teams?", a: "Yes, we offer HR Recruitment Services which focus on sourcing the best possible talent for internal HR, payroll and people ops roles." },
  { q: "Do You Support Hiring For Remote Or Hybrid Teams?", a: "Absolutely. We can help you to find and onboard remote, hybrid and freelance resources in-line with your organization’s model." },
  { q: "How Do Your Recruitment Consultancy Services Work?", a: "We help you improve the way you hire—writing JDs, setting interview SOPs, building talent pools, and being your in-house recruitment strategy partner." },
  { q: "How Is PCS Different From Other Recruitment Agencies?", a: "We provide the depth of a consultancy, the scale of an agency and the ownership of an internal HR partner, and we do it all, smarter and faster." },
];

function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  const renderItem = (item, index) => (
    <div className="faq-item" key={index}>
      <div className="faq-question" onClick={() => toggle(index)}>
        <span>{item.q}</span>
        <span className="icon">{active === index ? "−" : "+"}</span>
      </div>
      {active === index && <div className="faq-answer">{item.a}</div>}
    </div>
  );

  return (
    <section className="faq-section">
      <div className="partners-header2" style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2 className="partners-eyebrow">Frequently Asked Questions</h2>
      </div>
      <div className="container">
        <div className="faq-head">
          <h3 className="faq-h3">Queries That Could <span>Hold You Back</span></h3>
        </div>
        <div className="faq-wrapper">
          <div className="faq-col">
            {faqData.slice(0, 3).map((item, i) => renderItem(item, i))}
          </div>
          <div className="faq-col">
            {faqData.slice(3, 6).map((item, i) => renderItem(item, i + 3))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HRConsultancy() {
  const metaTitle = "Recruitment Services Company | Recruitment Agency in Coimbatore";
  const metaDesc = "Leading recruitment agency in Coimbatore offering expert hiring solutions, talent acquisition, and staffing services to help businesses build strong teams. Contact us!";

  return (
    <Layout>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content="Recruitment Services, Recruitment Agency, Recruitment Consultancy Services, Recruitment Services Company, Recruitment Solutions, HR Recruitment Services, HR Consultancy Services" />
        <link rel="canonical" href="https://www.priyamconsultancy.com/recruitment-services/" />

        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content="https://www.priyamconsultancy.com/recruitment-services/" />
        <meta property="og:image" content="https://www.priyamconsultancy.com/img/recriutment-services.png" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:image" content="https://www.priyamconsultancy.com/img/recriutment-services.png" />

        {schemaData.map((schema, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}
      </Head>
      <div className="hr-page pg-recruitment">
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