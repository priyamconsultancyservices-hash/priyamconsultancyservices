import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const banner = "/img/custom-web-and-mobile-app.webp";
import CTASection from "../components/HomePage/CTA";
import BlogSection from "../components/BlogSection";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import '../css/pages-common.css';


// ─── Data ───────────────────────────────────────────────────────────────────
const SERVICES = [
  { n: "01", img: "/img/icon/web-mobile-app-custom-web-dev.webp", title: "Custom Web Application Development", pills: ["On-Page SEO", "Link Building", "Blog Strategy"], desc: "Design and develop secure, scalable, and high-performing web applications with intuitive UI/UX, optimized navigation, and seamless business process integration." },
  { n: "02", img: "/img/icon/web-mobile-app-custom-mobile-dev.webp", title: "Custom Mobile Application Development", pills: ["Reels & Shorts", "Community Mgmt", "Influencer Tie-ups"], desc: "Create native and cross-platform mobile apps for Android and iOS that boost engagement, streamline workflows, and support business scalability." },
  { n: "03", img: "/img/icon/web-mobile-app-maintenance-support.webp", title: "Maintenance & End-to-End Support", pills: ["Search Ads", "Retargeting", "A/B Testing"], desc: "Provide continuous maintenance, updates, and optimization to ensure peak performance, security, and reliability throughout your application lifecycle." },
  { n: "04", img: "/img/icon/web-mobile-app-cross-platform.webp", title: "Cross-Platform/Hybrid Web & Mobile Application Development", pills: ["Drip Campaigns", "WhatsApp Broadcasts", "Automation"], desc: "Build hybrid applications using modern frameworks to deliver consistent performance, faster deployment, and cost-effective scalability across multiple platforms." },
  { n: "05", img: "/img/icon/web-mobile-app-industry-specific.webp", title: "Industry-Specific Web & Mobile Application Development", pills: ["YouTube Ads", "Influencer Match", "UGC Content"], desc: "Deliver tailored web and mobile applications designed to meet the unique operational, compliance, and performance needs of specific industries." },
  { n: "06", img: "/img/icon/web-mobile-app-progressive.webp", title: "Progressive Web and Mobile Application Development", pills: ["GA4 Tracking", "Weekly Reports", "ROI Dashboards"], desc: "Develop responsive Progressive Web Apps (PWAs) that combine web accessibility with mobile app speed, reliability, and offline functionality." },
];


const PROCESS_STEPS = [
  { n: "01", img: "/img/icon/web-mobile-app-process-discovery.webp", label: "Discovery", title: "Discovery & Assessment", desc: "We analyze business requirements, user needs, and technical constraints to design a Custom Web Application Development plan that aligns with your goals and ensures maximum impact.", items: ["Analyze Requirements", "Evaluate Constraints", "Identify UserNeeds", "Define Objectives"] },
  { n: "02", img: "/img/icon/web-mobile-app-process-strategy.webp", label: "Strategy", title: "Planning & Strategy", desc: "Our team creates a detailed development roadmap, including design, technology stack selection, and integration planning. We ensure scalable Web and Mobile Application Development Services for both current and future needs.", items: ["Create Roadmaps", "Select Technologies", "Plan Integrations", "Ensure Scalability"] },
  { n: "03", img: "/img/icon/web-mobile-app-process-design.webp", label: "Design", title: "Design & Development", desc: "We develop intuitive, high-performing applications using agile methodology. Every feature is tested for usability, security, and performance to deliver seamless Web and mobile App based on your requirements.", items: ["Develop Applications", "Enhance Usability", "Ensure Security", "Optimize Performance"] },
  { n: "04", img: "/img/icon/web-mobile-app-process-testing.webp", label: "Testing", title: "Testing & Quality Assurance", desc: "We rigorously test every application for functionality, compatibility, performances and security. Continuous QA ensures the Application is reliable, efficient, smooth running without stoppage and ready for deployment.", items: ["Test Functionality", "Verify Compatibility", "Maintain Reliability", "Ensure Stability"] },
  { n: "05", img: "/img/icon/web-mobile-app-process-deploy.webp", label: "Deployment", title: "Deployment & Support", desc: "We deploy applications on cloud or on-premises servers while providing continuous support, updates, and maintenance for the applications deployed if required. This ensures long-term performance, scalability, and adaptability.", items: ["Deploy Applications", "Provide Maintenance", "Deliver Updates", "Support Scalability"] },
];

const CARDS = [
  {
    num: "01",
    img: "/img/wm/process-discovery.png",
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
    img: "/img/wm/process-strategy.png",
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
    img: "/img/wm/process-design.png",
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
    img: "/img/wm/process-testing.png",
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
  { q: "What is web application development?", a: "Web application development involves creating interactive, responsive, and scalable applications that run in a web browser. These applications help businesses go beyond a traditional website by supporting operations and user engagement." },
  { q: "What is Custom Mobile App Development?", a: "Custom mobile app development involves building Android or iOS apps designed around your business needs. It helps improve user experience, engagement, and operational efficiency." },
  { q: "How Is Custom Web Application Development Different from Websites?", a: "Unlike static websites, custom web applications are dynamic and interactive. They are built to perform specific business functions, automate workflows, and connect with databases or third-party systems." },
  { q: "What Can a Custom Web Application Do for Your Business?", a: "A custom web application can streamline workflows, improve efficiency, automate tasks, and provide real-time data insights. It helps businesses improve customer experience and scale more effectively." },
  { q: "How does a custom mobile application work?", a: "A custom mobile app runs on smartphones or tablets and connects with servers, databases, and APIs. This allows it to deliver personalized features, updates, and smooth user experiences." },
  { q: "What industries benefit most from custom web and mobile applications?", a: "Industries such as finance, healthcare, education, retail, logistics, and manufacturing can benefit from custom applications that improve operations and user engagement." },
];
// ─── Sub-components ──────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="dm-hero">
      <div className="dm-hero-left">
        <div className="dm-badge">
          <div className="dm-badge-dot"></div>
          Web & Mobile Application


        </div>
        <h1 className="dm-hero-heading">
          Custom Web & Mobile   <span className="orange lined" style={{ marginRight: '12px' }}>Application Solutions</span>
          for Your Business

        </h1>
        <p className="dm-hero-sub">
          We provide end-to-end Custom Web and Mobile Application development solutions, designed to deliver seamless functionality, scalability, and an exceptional user experience. From initial design to development, testing, and integration, our expert team ensures every application aligns with your business goals, and drives operational efficiency.


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
            alt="Custom Web & Mobile App Development"
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
          <h2 className="ap2-heading">Custom   <span>Web & Mobile </span> Applications</h2>
          <p className="ap-intro">
            PCS delivers application development solutions focused on performance, scalability, and seamless collaboration throughout every stage of the development lifecycle.


          </p>
          <p className="ap-intro">
            We analyze business requirements, user behavior, and market trends to design customized web and mobile applications aligned with operational goals and user expectations.
          </p>
          <p className="ap-intro">
            Our agile development approach ensures rapid delivery, seamless integration, optimized user experiences, and high-quality applications that support long-term business growth and efficiency
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
        <div className="partners-header1"  style={{ textAlign: 'center' }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Specialized Custom Web & Mobile Application Services</h2>
        </div>
        <h3 className="partners-h3-title">Every Application Tailored.  <em style={{ color: '#ed8337' }}><i>Every Feature Optimized.</i></em></h3>
        <p>
          Priyam Consultancy Services provides Custom Web and Mobile Application Development Company expertise to build web and mobile applications that enhance productivity, usability, and performance across platforms.

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
        <div className="partners-header1"  style={{ textAlign: 'center' }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center', color: '#ed8337' }}>Our Application Development Process</h2>
        </div>
        <h3 className="partners-h3-process">Structured, Scalable, and  <em style={{ color: '#ed8337' }}><i>Reliable Application  </i></em> Development</h3>
        <p>
          Our Custom Application Development approach ensures every application is tailored to your business objectives, emphasizing usability, performance, and scalability.

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
  { title: "Tailored Development", desc: "We build customized applications aligned with your business objectives, workflows, and customer expectations to ensure maximum operational efficiency and performance.", center: false, img: "/img/icon/web-mobile-app-why-tailored.webp" },
  { title: "Seamless Integration", desc: "Our applications integrate smoothly with existing systems and platforms to create connected, efficient, and unified digital business experiences.", center: false, img: "/img/icon/web-mobile-app-why-integration.webp" },
  { title: "User-Centric Design", desc: "We design intuitive and engaging interfaces that improve usability, enhance customer interaction, and deliver seamless digital experiences across devices.", center: true, img: "/img/icon/web-mobile-app-why-design.webp" },
  { title: "Scalable Performance", desc: "Our applications are developed with scalable architecture to support future growth, evolving business needs, and long-term operational flexibility.", center: false, img: "/img/icon/web-mobile-app-why-scalable.webp" },
];

function HowWeWorkSection() {
  return (
    <section style={{ position: "relative", background: "#004168", overflow: "hidden", padding: "60px 5% 81px" }}>
      <div className="hww-bg" /><div className="hww-orb hww-orb-1" /><div className="hww-orb hww-orb-2" />
      <div style={{ position: "relative", zIndex: 2, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="partners-header1"  style={{ textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Why PCS?
            </h2>

          </div>
          <h3 className="hww-title">Plan Strategically. <span className="hww-accent">Build Confidently.</span></h3>
          <p className="hww-sub">
            Ease your business with custom and mobile applications designed to simplify operations, enhance user experience, and accelerate digital transformation.
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
      <div className="container" style={{width: '100%'}}>
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
        <title>Custom Web Application Development Company | Custom App Development </title>
        <meta name="description" content="Expert custom web application development company delivering scalable, secure, and user-friendly apps tailored to your business needs for digital growth. Contact us! " />
        <link rel="canonical" href="https://www.priyamconsultancy.com/web-and-mobile-application/" />
        <meta name="keywords" content="Business Process Automation, Business Process Automation Services, Business Process Automation Software, Business Automation Software, Business Process Optimisation, Business Automation Solutions, Business Process Automation Solutions, Process Automation Service, BPA Solutions, Business Automation Services Provider" />
        <meta property="og:title" content="Custom Web Application Development Company | Custom App Development " />
        <meta property="og:description" content="Expert custom web application development company delivering scalable, secure, and user-friendly apps tailored to your business needs for digital growth. Contact us! " />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Web Application Development Company | Custom App Development " />
        <meta name="twitter:description" content="Expert custom web application development company delivering scalable, secure, and user-friendly apps tailored to your business needs for digital growth. Contact us! " />

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
                  "@id": "https://www.priyamconsultancy.com/web-and-mobile-application/",
                  "name": "web-and-mobile-application"
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
            "name": "Custom Web & Mobile Application Development",
            "description": "Expert custom web application development company delivering scalable, secure, and user-friendly apps tailored to your business needs for digital growth. Contact us!",
            "provider": {
              "@type": "Organization",
              "name": "Priyam Consultancy Services",
              "url": "https://www.priyamconsultancy.com/"
            },
            "serviceType": "Web & Mobile Application Development",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web & Mobile App Development Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Web Application Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development (iOS & Android)" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cross-Platform App Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Design" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full-Stack Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "App Deployment & Support" } }
              ]
            },
            "mainEntityOfPage": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is web application development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Web application development involves creating interactive, responsive, and scalable applications that run in a web browser. These applications help businesses go beyond a traditional website by supporting operations and user engagement."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is custom mobile app development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Custom mobile app development involves building Android or iOS apps designed around your business needs. It helps improve user experience, engagement, and operational efficiency."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How is custom web application development different from websites?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Unlike static websites, custom web applications are dynamic and interactive. They are built to perform specific business functions, automate workflows, and connect with databases or third-party systems."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What can a custom web application do for your business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A custom web application can streamline workflows, improve efficiency, automate tasks, and provide real-time data insights. It helps businesses improve customer experience and scale more effectively."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does a custom mobile application work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A custom mobile app runs on smartphones or tablets and connects with servers, databases, and APIs. This allows it to deliver personalized features, updates, and smooth user experiences."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What industries benefit most from custom web and mobile applications?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Industries such as finance, healthcare, education, retail, logistics, and manufacturing can benefit from custom applications that improve operations and user engagement."
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
            "name": "web-and-mobile-application",
            "image": ["https://www.priyamconsultancy.com/img/custom-web-and-mobile-app.png"],
            "description": "Best web and mobile application development services in Coimbatore offering custom web applications, mobile app development, cross-platform solutions, UI/UX design and scalable digital solutions for businesses.",
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
              "reviewCount": "5462"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://www.priyamconsultancy.com/web-and-mobile-application/",
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