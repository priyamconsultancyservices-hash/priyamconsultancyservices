import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CTASection from "../components/HomePage/CTA";
import BlogSection from "../components/BlogSection";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import '../css/pages-common.css';
const banner = "/img/business-process-automation.webp";


// ─── Data ───────────────────────────────────────────────────────────────────
const SERVICES = [
  { n: "01", img: "/img/icon/bpa-data-migration.webp", title: "Data Migration", pills: ["On-Page SEO", "Link Building", "Blog Strategy"], desc: "We migrate your business data with precision and care, ensuring a smooth transition, complete security, and uninterrupted operations throughout every stage of the process" },
  { n: "02", img: "/img/icon/bpa-workflow-automation.webp", title: "Workflow Automation", pills: ["Reels & Shorts", "Community Mgmt", "Influencer Tie-ups"], desc: "We transform manual, repetitive workflows into automated systems that simplify operations, improve collaboration, visibility across all your business functions." },
  { n: "03", img: "/img/icon/bpa-system-integration.webp", title: "System Integration", pills: ["Search Ads", "Retargeting", "A/B Testing"], desc: "We integrate our solutions with your existing systems to ensure uninterrupted operations and improved efficiency avoiding costly replacements or downtime" },
  { n: "04", img: "/img/icon/bpa-process-assessment.webp", title: "Process Assessment & Automation", pills: ["Drip Campaigns", "WhatsApp Broadcasts", "Automation"], desc: "We evaluate and streamline your business processes, address inefficiencies, and automate repetitive tasks to improve accuracy, efficiency, and overall performance." },
  { n: "05", img: "/img/icon/bpa-document-management.webp", title: "Document Management Automation", pills: ["YouTube Ads", "Influencer Match", "UGC Content"], desc: "We help you digitize and automate document workflows for faster storage, effortless retrieval, and streamlined approvals — ensuring compliance and accessibility." },
  { n: "06", img: "/img/icon/bpa-dashboards-reporting.webp", title: "Dashboards and Reporting Solutions", pills: ["GA4 Tracking", "Weekly Reports", "ROI Dashboards"], desc: "We design and deliver interactive dashboards and reports tailored to your business needs, providing real-time insights for smarter decisions and better performance" },
];


const PROCESS_STEPS = [
  { n: "01", img: "/img/icon/bpa-process-discovery.webp", label: "Research", title: "Discovery & Assessment", desc: "We analyze workflows, repetitive tasks, and operational bottlenecks to design customized Business Automation Services. By understanding your business processes and objectives, we identify opportunities for automation that maximize efficiency, reduce errors, and deliver measurable improvements across all functions.", items: ["Analyze Workflows", "Identify Bottlenecks", "Reduce Errors", "Improve Efficiency"] },
  { n: "02", img: "/img/icon/bpa-process-planning.webp", label: "Strategy", title: "Planning & Strategy", desc: "We create a detailed Business Process Automation Plan & Strategy, aligning workflows with your business goals. Our strategic planning ensures optimal resource allocation, streamlined processes, and scalable solutions that improve efficiency, reduce costs, and support long-term growth.", items: ["Align BusinessGoals", "Streamline Processes", "Optimize Resources", "Support Scalability"] },
  { n: "03", img: "/img/icon/bpa-process-implement.webp", label: "Create", title: "Implementation & Testing", desc: "Our team deploys and rigorously tests the applications to ensure accuracy, reliability, and seamless operation. Each workflow and integration is validated for error-free execution, followed by comprehensive user training to ensure smooth adoption and effective utilization across departments.", items: ["Deploy Applications", "Validate Integrations", "Ensure Reliability", "Conduct UserTraining"] },
  { n: "04", img: "/img/icon/bpa-process-monitoring.webp", label: "Launch", title: "Monitoring & Optimization", desc: "We continuously monitor system performance to identify opportunities for improvement and optimization. Our real-time process enhancements ensure greater efficiency, adaptability, and sustained productivity — maintaining seamless operations across your entire business operations.", items: ["Track Performance", "Enhance Processes", "Improve Productivity", "Maintain Operations"] },
  { n: "05", img: "/img/icon/bpa-process-support.webp", label: "Optimise", title: "Continuous Support & Updates", desc: "We provide continuous maintenance, updates, and expert SLA-driven support to help your business scale faster and operate seamlessly. Our dedicated team ensures quick turnaround for issue fixes, enhancements, and new requirements — keeping your operations consistently smooth and highly efficient.", items: ["Provide Maintenance", "Deliver Updates", "Resolve Issues", "Ensure Scalability"] },
];

const CARDS = [
  {
    num: "01",
    img: "/img/bpa/process-discovery.png",
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
    img: "/img/bpa/process-planning.png",
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
    img: "/img/bpa/process-implement.png",
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
    img: "/img/bpa/process-monitoring.png",
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
  { q: "What is Business Process Automation?", a: "Business Process Automation uses technology to automate repetitive workflows, reduce manual effort, and improve efficiency. It helps businesses focus more on strategic and high-value activities." },
  { q: "What are the 4 types of business processes?", a: "The four types are operational, management, supporting, and development processes. Together, they cover core business activities, strategy, support functions, and innovation." },
  { q: " What are the benefits of customized Business Process Automation?", a: "Customized BPA improves efficiency, reduces errors, lowers costs, enhances compliance, and provides scalable solutions tailored to your business needs." },
  { q: "What makes up Business Process Automation?", a: "BPA includes workflow automation, RPA, data management, system integration, and analytics. These elements work together to streamline operations and provide useful insights" },
  { q: "What are the 5 levels of automation?", a: "The five levels are manual, assisted, partial, high, and full automation. They range from fully human-driven tasks to completely autonomous workflows." },
  { q: "How can Sterlo be a valuable Business Process Automation tool?", a: "Sterlo is a no-code platform that helps businesses automate workflows, optimize processes, and make data-driven decisions without needing coding expertise." },
];
// ─── Sub-components ──────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="dm-hero">
      <div className="dm-hero-left">
        <div className="dm-badge">
          <div className="dm-badge-dot"></div>
          Improve Efficiency
        </div>
        <h1 className="dm-hero-heading">
          Streamline Business
          <span className="orange lined" style={{ marginLeft: '10PX' }}>Operations </span>   with Automation
        </h1>
        <p className="dm-hero-sub">
          We provide comprehensive Business Process Automation Solutions that streamline workflows, eliminate manual tasks, and boost efficiency across your organization. From document management and approvals to reporting, we integrate every process for seamless operations, improved accuracy, and real-time visibility.


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
            alt="Business Process Automation"
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
          <h2 className="ap2-heading">Business  <span>Process Automation</span></h2>
          <p className="ap-intro">
            PCS follows a consultative and technology-driven approach to Business Process Automation focused on improving operational efficiency, scalability, and long-term business performance.
          </p>
          <p className="ap-intro">
            We work closely with teams to assess workflows, identify bottlenecks, and design structured automation strategies aligned with business objectives and operational requirements.
          </p>
          <p className="ap-intro">
            From implementation to continuous optimization, PCS builds integrated and data-driven workflows that reduce manual effort, improve accuracy, and strengthen process consistency across departments.
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
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Specialized Business Process Automation Services</h2>
        </div>
        <h3 className="partners-h3-title">Every Task Automated.  <em style={{ color: '#ed8337' }}><i>Every Process Optimized.</i></em></h3>
        <p>
          Priyam Consultancy Services delivers Business Process Automation solutions that simplify operations, eliminate inefficiencies, and enhance productivity — helping businesses achieve accuracy, agility, and sustainable growth.</p>
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
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center', color: '#ed8337' }}>Our Automation Execution Process</h2>
        </div>
        <h3 className="partners-h3-process">Structured,  <em style={{ color: '#ed8337' }}><i>Intelligent, </i></em> and Reliable Automation</h3>
        <p>
          Our Process Automation Services are tailored to your unique business needs, focusing on efficiency, accuracy, and scalability to deliver measurable results. We streamline complex workflows, integrate intelligent tools, and enhance productivity, ensuring your operations run seamlessly and adapt effortlessly to growth and innovation.
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
  { title: "Tailored Solutions", desc: "We develop customized automation solutions aligned with your business workflows, operational requirements, and long-term efficiency and scalability goals.", center: false, img: "/img/icon/bpa-why-tailored.webp" },
  { title: "Seamless Integration", desc: "Our systems integrate smoothly with existing tools and platforms to improve workflow efficiency, connectivity, and operational performance across departments.", center: false, img: "/img/icon/bpa-why-integration.webp" },
  { title: "Insight-Driven Decisions", desc: "We leverage real-time analytics and data insights to support accurate decision-making, operational visibility, and sustainable business growth strategies.", center: true, img: "/img/icon/bpa-why-insights.webp" },
  { title: "Ongoing Optimization", desc: "Provides continuous monitoring, support, and process improvements to ensure automation systems remain efficient, scalable, and performance-focused over time.", center: false, img: "/img/icon/bpa-why-optimize.webp" },
];

function HowWeWorkSection() {
  return (
    <section style={{ position: "relative", background: "#004168", overflow: "hidden", padding: "60px 5% 81px" }}>
      <div className="hww-bg" /><div className="hww-orb hww-orb-1" /><div className="hww-orb hww-orb-2" />
      <div style={{ position: "relative", zIndex: 2, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="partners-header1" style={{ textAlign: 'center' }}>
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Why PCS?
            </div>

          </div>
          <h2 className="hww-title">Plan Smart. <span className="hww-accent">Automate Confidently.</span></h2>
          <p className="hww-sub">
            Transform your workflows, reduce errors, and boost efficiency with tailored Business Process Automation Solutions designed to drive growth and operational excellence.
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
              <h3 className="hww-step-title">{s.title}</h3>
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
        <title>Business Process Automation | Improve Efficiency Fast </title>
        <meta name="description" content="Streamline operations with Business Process Automation to boost efficiency, reduce costs, and improve accuracy with smart workflow solutions. " />
        <link rel="canonical" href="https://www.priyamconsultancy.com/business-process-automation/" />
        <meta name="keywords" content="Business Process Automation, Business Process Automation Services, Business Process Automation Software, Business Automation Software, Business Process Optimisation, Business Automation Solutions, Business Process Automation Solutions, Process Automation Service, BPA Solutions, Business Automation Services Provider" />
        <meta property="og:title" content="Business Process Automation | Improve Efficiency Fast " />
        <meta property="og:description" content="Streamline operations with Business Process Automation to boost efficiency, reduce costs, and improve accuracy with smart workflow solutions. " />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Process Automation | Improve Efficiency Fast " />
        <meta name="twitter:description" content="Streamline operations with Business Process Automation to boost efficiency, reduce costs, and improve accuracy with smart workflow solutions. " />

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
                  "@id": "https://www.priyamconsultancy.com/business-process-automation/",
                  "name": "business-process-automation"
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
            "name": "Business Process Automation",
            "description": "Streamline operations with Business Process Automation to boost efficiency, reduce costs, and improve accuracy with smart workflow solutions.",
            "provider": {
              "@type": "Organization",
              "name": "Priyam Consultancy Services",
              "url": "https://www.priyamconsultancy.com/"
            },
            "serviceType": "Business Process Automation",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Business Process Automation Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Workflow Automation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Robotic Process Automation (RPA)" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Process Consulting & Strategy" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Integration & Implementation" } }
              ]
            },
            "mainEntityOfPage": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Business Process Automation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Business Process Automation uses technology to automate repetitive workflows, reduce manual effort, and improve efficiency. It helps businesses focus more on strategic and high-value activities."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the 4 types of business processes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The four types are operational, management, supporting, and development processes. Together, they cover core business activities, strategy, support functions, and innovation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the 5 levels of automation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The five levels are manual, assisted, partial, high, and full automation. They range from fully human-driven tasks to completely autonomous workflows."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the benefits of customized Business Process Automation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Customized BPA improves efficiency, reduces errors, lowers costs, enhances compliance, and provides scalable solutions tailored to your business needs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes up Business Process Automation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BPA includes workflow automation, RPA, data management, system integration, and analytics. These elements work together to streamline operations and provide useful insights."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can Sterlo be a valuable Business Process Automation tool?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sterlo is a no-code platform that helps businesses automate workflows, optimize processes, and make data-driven decisions without needing coding expertise."
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
            "name": "business-process-automation",
            "image": ["https://www.priyamconsultancy.com/img/digital-transformation.png"],
            "description": "Best business process automation services in Coimbatore offering workflow automation, task automation, operational efficiency improvement, business system integration and digital process management solutions for businesses.",
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
              "reviewCount": "5283"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://www.priyamconsultancy.com/business-process-automation/",
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