import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const banner = "/img/data-analytics.webp";
import CTASection from "../components/HomePage/CTA";
import BlogSection from "../components/BlogSection";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import '../css/pages-common.css';


// ─── Data ───────────────────────────────────────────────────────────────────
const SERVICES = [
  { n: "01", img: "/img/icon/data-analytics-custom-dashboard.webp", title: "Custom Dashboard & Report Development", pills: ["On-Page SEO", "Link Building", "Blog Strategy"], desc: "Design and build interactive, real-time dashboards and reports that deliver actionable insights and improve business visibility across departments." },
  { n: "02", img: "/img/icon/data-analytics-bi-implementation.webp", title: "Business Intelligence (BI) Implementation", pills: ["Reels & Shorts", "Community Mgmt", "Influencer Tie-ups"], desc: "Implement advanced BI tools and automation to centralize data, streamline analysis, and enable faster, data-driven decision-making organization-wide." },
  { n: "03", img: "/img/icon/data-analytics-predictive-analytics.webp", title: "Predictive & Prescriptive Analytics", pills: ["Search Ads", "Retargeting", "A/B Testing"], desc: "Leverage predictive models and prescriptive insights to anticipate trends, identify opportunities, and optimize strategies for future business growth." },
  { n: "04", img: "/img/icon/data-analytics-data-integration.webp", title: "Data Integration & Management", pills: ["Drip Campaigns", "WhatsApp Broadcasts", "Automation"], desc: "Unify data from multiple sources through seamless integration, ensuring consistency, accuracy, and reliability for smarter analytical outcomes." },
  { n: "05", img: "/img/icon/data-analytics-kpi-tracking.webp", title: "KPI Tracking & Performance Monitoring", pills: ["YouTube Ads", "Influencer Match", "UGC Content"], desc: "Automate KPI tracking and performance metrics to measure progress, identify bottlenecks, and enhance strategic business performance effectively." },
  { n: "06", img: "/img/icon/data-analytics-realtime-analytics.webp", title: "Real-Time Analytics & Visualization", pills: ["GA4 Tracking", "Weekly Reports", "ROI Dashboards"], desc: "Access real-time data visualization tools that simplify complex information, improve clarity, and empower instant, insight-driven business actions." },
];


const PROCESS_STEPS = [
  { n: "01", img: "/img/icon/data-analytics-process-study.webp", label: "Study", title: "Requirement Study", desc: "Our requirement process focuses on understanding your business in depth — from objectives to operations. By defining precise needs early, we ensure every project starts with clarity, purpose, and a shared vision for success.", items: ["Understand Business Objectives", "Analyze Operational Workflows", "Define Project Requirements", "Establish Shared Vision"] },
  { n: "02", img: "/img/icon/data-analytics-process-sample.webp", label: "Sample Format", title: "Sample Format", desc: "During the study phase, we collect sample reports and dashboards from the client to understand their data structure and reporting preferences. This helps us design and deliver solutions that align with customer needs while improving accuracy and usability", items: ["Collect Sample Reports", "Analyze Data Structures", "Understand Reporting Preferences", "Improve Solution Accuracy"] },
  { n: "03", img: "/img/icon/data-analytics-process-development.webp", label: "Development", title: "Development", desc: "We design and develop dashboards and reports based on the received requirements, ensuring each solution aligns with business goals and expectations. Our team ensures accuracy, quality, and timely delivery to provide insights that support smarter decisions.", items: ["Design Custom Dashboards", "Develop Insightful Reports", "Ensure Data Accuracy", "Deliver Timely Solutions"] },
  { n: "04", img: "/img/icon/data-analytics-process-demo.webp", label: "Demo ", title: "Demo & Confirmation", desc: "Before deployment, we conduct a detailed demonstration of the dashboards and reports for the client. We collect feedback, incorporate necessary changes, and proceed after final client review and approval to ensure satisfaction and alignment with expectations.", items: ["Conduct Dashboard Demonstrations", "Gather Client Feedback", "Implement Required Changes", "Obtain Final Approval"] },
  { n: "05", img: "/img/icon/data-analytics-process-training.webp", label: "Implementation", title: "Implementation & Training", desc: "We ensure smooth implementation of dashboards and reports across your organization. Our team provides hands-on training to users, enabling them to navigate, analyze, and utilize insights effectively for better decision-making and productivity.", items: ["Ensure Smooth Implementation", "Provide HandsOn Training", "Enable Effective Analysis", "Improve Decision Making"] },
];

const CARDS = [
  {
    num: "01",
    img: "/img/da/process-study.png",
    title: "Discover & Audit",
    brief: "We dig deep into your brand, audience, competitors, and existing digital footprint.",
    backLabel: "Phase 01 · Foundation",
    backDesc: "Before a single ad goes live, we map your entire digital ecosystem. No guesswork — only data.",
    items: [
      "Brand & competitor audit",
      "Audience persona research",
      "SEO & website health check",
      "Channel opportunity mapping",
    ],
    duration: "⏱ Week 1",
  },
  {
    num: "02",
    img: "/img/da/process-sample.png",
    title: "Strategise & Plan",
    brief: "Your custom 90-day growth roadmap is built — channel by channel, goal by goal.",
    backLabel: "Phase 02 · Blueprint",
    backDesc: "We translate research into a clear, measurable action plan tailored to your business goals.",
    items: [
      "90-day campaign roadmap",
      "KPI & budget allocation",
      "Content calendar creation",
      "Platform & channel selection",
    ],
    duration: "⏱ Week 2",
  },
  {
    num: "03",
    img: "/img/da/process-development.png",
    title: "Execute & Launch",
    brief: "Campaigns go live with precision — creative assets, targeting, and technical setup all handled.",
    backLabel: "Phase 03 · Launch",
    backDesc: "From ad creatives to landing pages — every element is built, tested, and launched for maximum impact.",
    items: [
      "Ad creative & copywriting",
      "Pixel & tracking setup",
      "Campaign launch & A/B tests",
      "SEO & content publishing",
    ],
    duration: "⏱ Week 3",
  },
  {
    num: "04",
    img: "/img/da/process-demo.png",
    title: "Optimise & Scale",
    brief: "Continuous data analysis, weekly reporting, and relentless performance improvement.",
    backLabel: "Phase 04 · Growth",
    backDesc: "Campaigns are never \"set and forget\" — we iterate every week to squeeze more ROI from every rupee.",
    items: [
      "Weekly performance reviews",
      "Bid & budget optimisation",
      "Audience expansion & scaling",
      "Monthly ROI report delivery",
    ],
    duration: "⏱ Ongoing",
  },
];

const faqData = [
  { q: " What do you mean by Data Analytics Services?", a: "Data Analytics Services involve collecting, processing, and interpreting data to uncover useful insights. These insights help businesses make better decisions and improve performance." },
  { q: "What are the 4 types of Data Analytics?", a: "The four types are Descriptive, Diagnostic, Predictive, and Prescriptive Analytics. They help businesses understand what happened, why it happened, what may happen next, and what actions to take." },
  { q: "Are your Data and Analytics Services scalable for future needs?", a: "Yes, our Data Analytics Solutions are designed to scale with your business. They can adapt to growing data volumes, changing business needs, and new technology requirements." },
  { q: "What is Data Analytics with an example?", a: "Data analytics is the process of examining raw data to identify patterns and trends. For example, a retail business may analyze customer purchase data to predict future demand." },
  { q: "What is the main purpose of Data Analytics?", a: "The main purpose of Data Analytics is to turn raw data into actionable insights. This helps organizations improve decision-making, optimize operations, and support business growth." },
  { q: "Why are Data Analytics Services important for businesses?", a: "They help businesses identify opportunities, reduce risks, improve efficiency, and make informed decisions. This leads to better performance and a stronger competitive position." },
];
// ─── Sub-components ──────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="dm-hero">
      <div className="dm-hero-left">
        <div className="dm-badge">
          <div className="dm-badge-dot"></div>
          Analytics & Reporting

        </div>
        <h1 className="dm-hero-heading">
          Custom Data
          <span className="orange lined">Analytics & Reporting</span> Solutions
        </h1>
        <p className="dm-hero-sub">
          Transform your business data into actionable insights with our advanced analytics solutions. We create custom dashboards and reports that provide real-time visibility, track key metrics, and uncover growth opportunities. Our data-driven approach empowers smarter decisions and drives efficiency across your organization.
        </p>
        <div className="dm-hero-actions">
          <a className="dm-btn-fill" href="/contact-us">
            Explore More <span className="dm-btn-arrow">›</span>
          </a>
        </div>
      </div>

      <div className="dm-hero-right">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            src={banner}
            alt="Data Analytics"
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
          <h2 className="ap2-heading">  <span>Data Analytics</span> Services</h2>
          <p className="ap-intro">
            Our data analytics approach focuses on understanding business objectives, operational challenges, and data sources to create meaningful and result-driven analytics solutions.
          </p>
          <p className="ap-intro">
            We design customized dashboards and reporting systems that convert raw business data into actionable insights for faster, smarter, and more informed decision-making.
          </p>
          <p className="ap-intro">
            Beyond visualization, PCS ensures data accuracy, seamless integration, and continuous monitoring to help businesses identify trends, improve performance, and support sustainable growth.
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
  return (
    <section className="dm-svc-section" id="services">
      <div className="dm-svc-bg-conic"></div>
      <div className="dm-svc-blob dm-svc-blob-1"></div>
      <div className="dm-svc-blob dm-svc-blob-2"></div>
      <div className="dm-svc-hdr">
        <div className="partners-header1" style={{ textAlign: 'center' }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Data Analytics Execution Process</h2>
        </div>
        <h3 className="partners-h3-title">Every Dataset Analyzed. <em style={{ color: '#ed8337' }}><i>Every Decision Empowered.</i></em></h3>
        <p>
          Priyam Consultancy Services delivers Data Analytics Services and Solutions that turn complex data into clarity. We help businesses of all sizes unlock insights, identify growth opportunities, and improve decision-making through customized, data-driven strategies.
        </p>
      </div>
      <div className="dm-svc-grid">
        {SERVICES.map(s => (
          <div className="dm-svc-card" key={s.n}>
            <div className="dm-svc-body">
              <h4 className="dm-svc-title">{s.title}</h4>
              <p className="dm-svc-desc">{s.desc}</p>
            </div>
            <div style={{ marginTop: "auto", display: "flex", alignItems: "flex-end", justifyContent: "space-between", paddingTop: "1.5rem" }}>
              <div className="dm-svc-n" style={{ position: "static", fontSize: "2.8rem", lineHeight: 1 }}>{s.n}</div>
              <div className="dm-svc-icon-wrap" style={{ position: "static", flexShrink: 0 }}><img src={s.img} alt={s.title} style={{ width: "32px", height: "32px", objectFit: "contain" }} /></div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="dm-proc-section" id="process">
      <div className="dm-proc-hdr">
        <div className="partners-header1" style={{ textAlign: 'center' }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center', color: '#ed8337' }}>Our Data Analytics Execution Process</h2>
        </div>
        <h3 className="partners-h3-process">Structured, Insightful, and  <em style={{ color: '#ed8337' }}><i>Action-Oriented Analytics </i></em> </h3>
        <p>
          Our Data Analytics Services are designed to provide structured insight through a transparent and collaborative process. We ensure data integrity, analytical precision, and business alignment at every stage — from discovery to delivery.

        </p>
      </div>

      <div className="dm-proc-track">
        {PROCESS_STEPS.map((step, i) => (
          <div
            className={`dm-proc-step${activeStep === i ? " expanded" : ""}`}
            key={step.n}
            onClick={() => setActiveStep(i)}
          >
            {/* Collapsed */}
            <div className="dm-proc-collapsed">
              <span className="dm-proc-step-n">{step.n}</span>
              <span className="dm-proc-step-icon-sm"><img src={step.img} alt={step.title} style={{ width: "22px", height: "22px", objectFit: "contain" }} /></span>
              <span className="dm-proc-step-vtext">{step.label}</span>
            </div>
            {/* Expanded */}
            <div className="dm-proc-expanded">
              <div className="dm-proc-exp-num">{step.n}</div>
              <div className="dm-proc-exp-top">
                <div className="dm-proc-exp-icon"><img src={step.img} alt={step.title} style={{ width: "30px", height: "30px", objectFit: "contain" }} /></div>
                <h4 className="dm-proc-exp-title">{step.title}</h4>
                <div className="dm-proc-exp-desc">{step.desc}</div>
                <ul className="dm-proc-exp-list">
                  {step.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
              {/* <div className="dm-proc-exp-tag">{step.time}</div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const HWW_STEPS = [
  { title: "Tailored Insights", desc: "We create customized analytics solutions aligned with your business objectives, operational priorities, and long-term performance improvement goals.", center: false, img: "/img/icon/data-analytics-why-insights.webp" },
  { title: "Seamless Data Integration", desc: "Our analytics systems unify data from multiple platforms and sources to provide accurate, centralized, and reliable operational visibility.", center: false, img: "/img/icon/data-analytics-why-integration.webp" },
  { title: "Actionable Intelligence", desc: "We transform complex business data into meaningful insights that support strategic planning, informed decision-making, and measurable business outcomes.", center: true, img: "/img/icon/data-analytics-why-intelligence.webp" },
  { title: "Scalable Analytics", desc: "Our analytics solutions are designed to scale with growing business demands, evolving data volumes, and future operational requirements.", center: false, img: "/img/icon/data-analytics-why-scalable.webp" },
];

function HowWeWorkSection() {
  return (
    <section style={{ position: "relative", background: "#004168", overflow: "hidden", padding: "60px 5% 81px" }}>
      <div className="hww-bg" /><div className="hww-orb hww-orb-1" /><div className="hww-orb hww-orb-2" />
      <div style={{ position: "relative", zIndex: 2, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="partners-header1" style={{ textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Why PCS?
            </h2>

          </div>
          <h3 className="hww-title">Analyze Intelligently. <span className="hww-accent">Decide Confidently.</span></h3>
          <p className="hww-sub">
            Empower your business with advanced Data Analytics solutions that transform raw data into actionable insights, enabling smarter decisions, improved efficiency, and sustainable growth.
          </p>
        </div>
        <div className="hww-flow">
          {HWW_STEPS.map((s, i) => (
            <div key={i} className={`hww-step${s.center ? " hww-step-center" : ""}`}>
              <div className="hww-icon-wrap">
                <div className="hww-ring" style={i % 2 === 1 ? { animationDirection: "reverse", animationDuration: "18s" } : {}} />
                <div className="hww-disc" />
                <div className="hww-svg"><img src={s.img} alt={s.title} style={{ width: "28px", height: "28px", objectFit: "contain" }} /></div>
                {i < 3 && (
                  <div className="hww-arrow" style={{ animationDelay: `${i * 0.4}s` }}>
                    <svg viewBox="0 0 28 14" fill="none"><path d="M0 7h24M18 2l6 5-6 5" stroke="#ed8337" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                )}
              </div>
              <h4 className="hww-step-title">{s.title}</h4>
              <div className="hww-step-desc">{s.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <section className="faq-section" style={{ background: '#fff', padding: '80px 0 0' }}>
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

// ─── Root Component ──────────────────────────────────────────────────────────
export default function DigitalMarketing() {
  return (
    <Layout>
      <Head>
        <title>Data Analytics Services | Data Analytics Company in Coimbatore </title>
        <meta name="description" content="PCS offers Data Analytics services including BI dashboards, predictive analytics, and real-time insights to help businesses make smarter decisions. " />
        <meta name="keywords" content="Data Analytics Services, Data Analytics Company, Data Analytics Solutions, Data Analytics Services and Solutions, Data Analytics Consulting, Data Analytics Consulting Services, Data Analytics Consulting Solutions, Data Analytics Services and Solutions, Data Analytics Service providers, Data Consulting Services " />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                  "@id": "https://www.priyamconsultancy.com/data-analytics/",
                  "name": "data-analytics"
                }
              }
            ]
          })
        }} />

        {/* Organization Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          })
        }} />

        {/* Service Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Data Analytics",
            "description": "PCS provides expert Data Analytics services including custom dashboards, BI implementation, predictive analytics, and real-time visualization to transform your data into actionable insights.",
            "provider": {
              "@type": "Organization",
              "name": "Priyam Consultancy Services",
              "url": "https://www.priyamconsultancy.com/"
            },
            "serviceType": "Data Analytics",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Data Analytics Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Dashboard & Report Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Intelligence (BI) Implementation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Predictive & Prescriptive Analytics" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Real-Time Analytics & Visualization" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "KPI Tracking & Performance Monitoring" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data Integration & Management" } }
              ]
            },
            "mainEntityOfPage": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What do you mean by Data Analytics Services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Data Analytics Services involve collecting, processing, and interpreting data to uncover useful insights. These insights help businesses make better decisions and improve performance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the 4 types of Data Analytics?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The four types are Descriptive, Diagnostic, Predictive, and Prescriptive Analytics. They help businesses understand what happened, why it happened, what may happen next, and what actions to take."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Data Analytics with an example?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Data analytics is the process of examining raw data to identify patterns and trends. For example, a retail business may analyze customer purchase data to predict future demand."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the main purpose of Data Analytics?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The main purpose of Data Analytics is to turn raw data into actionable insights. This helps organizations improve decision-making, optimize operations, and support business growth."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why are Data Analytics Services important for businesses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "They help businesses identify opportunities, reduce risks, improve efficiency, and make informed decisions. This leads to better performance and a stronger competitive position."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are your Data and Analytics Services scalable for future needs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our Data Analytics Solutions are designed to scale with your business. They can adapt to growing data volumes, changing business needs, and new technology requirements."
                  }
                }
              ]
            }
          })
        }} />

        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Data-analytics",
            "image": ["https://www.priyamconsultancy.com/img/data-analytics.png"],
            "description": "Best Data Analytics Services in Coimbatore offering data visualization, business intelligence, predictive analytics, reporting, performance tracking and data-driven insights to support business growth.",
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
              "reviewCount": "5638"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://www.priyamconsultancy.com/data-analytics/",
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
          })
        }} />

      </Head>
      <div style={{ background: "var(--navy)", minHeight: "100vh" }}>
        <HeroSection />
        <ApproachSection />
        <ServicesSection />
        <ProcessSection />
        <HowWeWorkSection />
        <FAQSection />
        <BlogSection />
        <CTASection />
      </div>
    </Layout>
  );
}