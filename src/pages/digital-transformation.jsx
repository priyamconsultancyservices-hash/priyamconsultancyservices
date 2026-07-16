import { useState } from "react";
const logovideo = "/img/partner-dt.mp4";
import emailjs from "@emailjs/browser";
import CTASection from "../components/HomePage/CTA";
import BlogSection from "../components/BlogSection";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import '../css/pages-common.css';
const banner = "/img/digital-transformation.webp";

const pageUrl = "https://www.priyamconsultancy.com/digital-transformation/";
const imageUrl = "https://www.priyamconsultancy.com/img/digital-transformation.png";

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
          "@id": "https://www.priyamconsultancy.com/digital-transformation/",
          "name": "Digital Transformation"
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
    "@id": "https://www.priyamconsultancy.com/digital-transformation/#service",
    "name": "Digital Transformation",
    "serviceType": "Digital Transformation Services",
    "url": "https://www.priyamconsultancy.com/digital-transformation/",
    "description": "Priyam Consultancy provides professional digital transformation services including business process digitization, workflow automation, technology consulting, digital strategy implementation, operational optimization and business growth solutions across India.",
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
    "name": "Digital Transformation Services in Coimbatore",
    "image": ["https://www.priyamconsultancy.com/img/digital-transformation.png"],
    "description": "Best digital transformation services in Coimbatore offering business process digitization, workflow automation, digital strategy implementation, technology consulting and operational optimization solutions for businesses.",
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
      "reviewCount": "5124"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.priyamconsultancy.com/digital-transformation/",
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
        "name": "What does a digital transformation agency do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A digital transformation agency helps businesses adopt digital tools, automate workflows, and modernize operations to improve efficiency, scalability, and customer experience."
        }
      },
      {
        "@type": "Question",
        "name": "What is a digital transformation agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is a consulting and implementation partner that guides organizations through strategy, technology adoption, and process optimization for long-term digital growth."
        }
      },
      {
        "@type": "Question",
        "name": "What does digital transformation mean for businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital transformation means rethinking how a business operates, delivers value, and interacts with customers through modern technologies and data-driven strategies."
        }
      },
      {
        "@type": "Question",
        "name": "How can I tell if my company is ready for digital transformation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can assess your current technology, workflows, team adaptability, and leadership support to understand how prepared your company is for transformation."
        }
      },
      {
        "@type": "Question",
        "name": "What services are included in a digital transformation package?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard package may include strategy consulting, process automation, data analytics, cloud adoption, digital marketing, and integration of advanced technologies like AI and RPA."
        }
      },
      {
        "@type": "Question",
        "name": "Which companies are examples of digital transformation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Companies like Amazon, Netflix, and Tesla are often cited as examples because they continuously use digital technologies to improve operations and customer engagement."
        }
      }
    ]
  }
];

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const SERVICES = [
  {
    img: "/img/icon/dt-business-process-automation.webp", tag: "Automate", color: "#ed8337",
    title: "Business Process Automation",
    desc: "Streamline workflows, reduce manual tasks, and improve efficiency using intelligent automation solutions tailored to your business operations and long-term growth.",
    points: ["Streamlining", "Automation", "Efficiency", "Optimization"],
  },
  {
    img: "/img/icon/dt-custom-web-mobile-apps.webp", tag: "Build", color: "#ed8337",
    title: "Custom Web & Mobile Applications",
    desc: "Design and deploy user-focused applications built for your unique business requirements. From development to integration, we ensure functionality, scalability, and a superior user experience.",
    points: ["Scalability", "Security", "Integration", "Experience"],
  },
  {
    img: "/img/icon/dt-data-analytics.webp", tag: "Analyse", color: "#ed8337",
    title: "Data Analytics",
    desc: "Transform raw data into actionable insights that enable smarter decisions, uncover opportunities, and optimize performance across all areas of your business.",
    points: ["Insights", "Forecasting", "Tracking", "Intelligence"],
  },
];

const PROCESS_STEPS = [
  {
    num: "01", img: "/img/icon/dt-assessment-strategy.webp", color: "#ed8337",
    title: "Assessment & Strategy Design",
    shortDesc: "We assess existing workflows, systems, and business operations to identify gaps and create customized digital transformation strategies aligned with organizational goals and growth plans.",
    fullDesc: "Based on our analysis, we design a digital transformation strategy that aligns with your business objectives, operational needs, and growth vision. Every recommendation is customized to maximize ROI and operational efficiency. ",
  },
  {
    num: "02", img: "/img/icon/dt-solution-design.webp", color: "#0171a4",
    title: "Solution Design",
    shortDesc: "We design scalable applications, automation tools, and integrated digital solutions focused on improving efficiency, user experience, and operational productivity across business functions.",
    fullDesc: "Our focus is on creating solutions that are intuitive, responsive, and engaging. From UI/UX design to backend architecture, we ensure that your team and customers enjoy a seamless digital experience.",
  },
  {
    num: "03", img: "/img/icon/dt-implementation.webp", color: "#27ae60",
    title: "Implementation",
    shortDesc: "Our team manages seamless deployment, system integration, data migration, testing, and training to ensure smooth digital transformation with minimal operational disruption.",
    fullDesc: "The PCS team works closely with stakeholders to minimize disruption and ensure a smooth transition. Training, documentation, and testing are built into every step, ensuring teams quickly adapt and start realizing the benefits of digital transformation.",
  },
  {
    num: "04", img: "/img/icon/dt-monitoring-analytics.webp", color: "#9b59b6",
    title: "Monitoring, Analytics & Continuous Improvement",
    shortDesc: "We track performance through analytics, optimize digital systems continuously, and provide ongoing support to maintain scalability, efficiency, and long-term business adaptability.",
    fullDesc: "Insights from analytics are used to refine processes, applications, and workflows. We continuously optimize digital systems to ensure they evolve with business growth and changing market demands.",
  },
];

const faqData = [
  { q: " What does a digital transformation agency do?", a: "A digital transformation agency helps businesses adopt digital tools, automate workflows, and modernize operations to improve efficiency, scalability, and customer experience." },
  { q: "What is a digital transformation agency?", a: "It is a consulting and implementation partner that guides organizations through strategy, technology adoption, and process optimization for long-term digital growth." },
  { q: "What does digital transformation mean for businesses?", a: "Digital transformation means rethinking how a business operates, delivers value, and interacts with customers through modern technologies and data-driven strategies." },
  { q: " How can I tell if my company is ready for digital transformation?", a: "You can assess your current technology, workflows, team adaptability, and leadership support to understand how prepared your company is for transformation." },
  { q: "What services are included in a digital transformation package?", a: "A standard package may include strategy consulting, process automation, data analytics, cloud adoption, digital marketing, and integration of advanced technologies like AI and RPA." },
  { q: "Which companies are examples of digital transformation?", a: "Companies like Amazon, Netflix, and Tesla are often cited as examples because they continuously use digital technologies to improve operations and customer engagement" },
];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
export default function DigitalTransformationPage() {
  // ✅ All useState hooks inside the component
  const [active, setActive] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", msg: "" });

  const toggle = (i) => setActive(active === i ? null : i);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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
      .send("service_8xw6k3r", "template_jarui36", templateParams, "XWRnXi4hK2SvmRG3q")
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
    <Layout>
      <Head>
        <title>Digital Transformation Services Company in India | PCS  </title>
        <meta name="description" content="Top digital transformation services company in India helping businesses adopt automation, AI, cloud, and data-driven solutions for growth and innovation." />

        <meta name="keywords" content="Digital Transformation Agency, Digital Transformation Consulting, Digital Transformation Company, Digital Transformation Services, Digital Transformation Technologies, Digital Transformation Strategies, Digital Transformation Solutions, Digital Transformation Company in India, Digital Transformation Services In India" />
        <link rel="canonical" href="https://www.priyamconsultancy.com/digital-transformation/" />
        <meta property="og:title" content="Digital Transformation Services Company in India | PCS " />
        <meta property="og:description" content="Top digital transformation services company in India helping businesses adopt automation, AI, cloud, and data-driven solutions for growth and innovation." />
        <meta property="og:url" content="https://www.priyamconsultancy.com/digital-transformation/" />
        <meta property="og:image" content="https://www.priyamconsultancy.com/img/digital-transformation.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Transformation Services Company in India | PCS " />
        <meta name="twitter:description" content="Top digital transformation services company in India helping businesses adopt automation, AI, cloud, and data-driven solutions for growth and innovation." />
        <meta name="twitter:image" content="https://www.priyamconsultancy.com/img/digital-transformation.png" />
        {schemaData.map((schema, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}
      </Head>
      <>

        {/* ══ SECTION 1 — HERO ══ */}
        <section className="dt-hero">
          <div className="dt-orb dt-orb-1" />
          <div className="dt-orb dt-orb-2" />
          <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", paddingBottom: "4rem" }}>
            <div className="dt-badge"><div className="dt-badge-dot" />Digital Transformation </div>
            <h1 className="dt-hero-h">

              <span className="orange" style={{ marginLeft: '10px' }}>Digital Transformation</span>  for Maximum Business Impact

            </h1>
            <p className="dt-hero-sub">
              Starting with a deep understanding of your business, goals, and growth ambitions, we design tailored digital solutions that remove bottlenecks, streamline workflows, enhance efficiency, and drive seamless, measurable, and lasting transformation across every level of your organization for sustainable growth and long-term success.

            </p>
            <div className="dt-hero-actions">
              <a className="dt-btn" href="/contact-us">Explore More ›</a>
            </div>
          </div>
          <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src={banner}
              alt="Digital Transformation"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>
        </section>

        {/* ══ SECTION 2 — APPROACH + FORM ══ */}
        <section className="approach" id="approach">
          <div className="ap-inner">
            <div className="ap-left">
              <div className="partners-header1" >
                <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Approach in</div>
              </div>
              <h2 className="ap-heading">Digital <span>Transformation</span> Services</h2>
              <p className="ap-intro">
                Modern businesses rely on speed, operational efficiency, and data-driven decision-making to remain competitive and achieve sustainable growth in rapidly evolving digital environments.
              </p>
              <p className="ap-intro">
                We implement digital solutions that optimize workflows, improve customer interactions, automate processes, and deliver measurable business outcomes through structured and scalable technology strategies.
              </p>
              <p className="ap-intro">From automation to analytics and custom applications, we manage technical execution while helping businesses stay agile, innovative, and future-ready in changing market conditions.
              </p>
            </div>
            <div className="ap-form-wrap">
              <div className="ap-form-card">
                <div className="form-card-eyebrow">
                  <span className="form-card-eyebrow-line" />Your Growth, Our Mission<span className="form-card-eyebrow-line" />
                </div>
                <div className="form-card-title">Get Your <span>Free</span> Quote</div>
                <form onSubmit={sendEmail}>
                  <div className="fl-row">
                    <div className="fl-group">
                      <label className="fl-label">Your Name</label>
                      <div style={{ position: "relative" }}>
                        <span className="fl-icon">👤</span>
                        <input className="fl-input" type="text" name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="fl-group">
                      <label className="fl-label">Company</label>
                      <div style={{ position: "relative" }}>
                        <span className="fl-icon">🏢</span>
                        <input className="fl-input" type="text" name="company" placeholder="Company name" value={form.company} onChange={handleChange} />
                      </div>
                    </div>
                  </div>
                  <div className="fl-group">
                    <label className="fl-label">Email Address</label>
                    <div style={{ position: "relative" }}>
                      <span className="fl-icon">✉️</span>
                      <input className="fl-input" type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="fl-group">
                    <label className="fl-label">Mobile Number</label>
                    <div className="phone-row">
                      <div className="phone-flag"><span className="phone-flag-icon">📞</span></div>
                      <input className="fl-input" type="tel" name="phone" placeholder="Mobile number" value={form.phone} onChange={handleChange} maxLength="10" pattern="[0-9]{10}" required />
                    </div>
                  </div>
                  <div className="fl-group textarea-group">
                    <label className="fl-label">Message</label>
                    <div style={{ position: "relative" }}>
                      <span className="fl-icon" style={{ top: "0.9rem", transform: "none" }}>💬</span>
                      <textarea className="fl-textarea" name="msg" placeholder="Tell us about your business needs..." value={form.msg} onChange={handleChange} />
                    </div>
                  </div>
                  <button type="submit" className="ap-submit">
                    Get Free Consultation <span className="ap-submit-arrow">›</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>


        {/* ══ SECTION 3 — SERVICES ══ */}
        <section className="dt-services">
          <div className="dt-svc-hdr">
            <div className="partners-header1" style={{ textAlign: 'center' }}>
              <h2 className="partners-eyebrow" style={{ marginBottom: '20px',  color: '#ed8337' }}>Our Specialized Digital Transformation Services</h2>
            </div>

            <h3 className="pr-heading">Efficient. <span style={{ color: '#ed8337' }}>Seamless.</span> Impactful.</h3>
            <p>From workflow automation to custom applications and data analytics, we design solutions that optimize operations, reduce manual effort, and deliver measurable business outcomes tailored to your unique objectives.</p>
          </div>
          <div className="dt-svc-grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="dt-svc-card">
                <div className="dt-svc-deco" style={{ background: `${s.color}08` }} />
                <div className="dt-svc-bar" style={{ background: s.color }} />
                <div className="dt-svc-icon" style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}>
                  <img src={s.img} alt={s.title} style={{ width: "32px", height: "32px", objectFit: "contain" }} />
                </div>
                <div className="dt-svc-tag" style={{ color: s.color }}>{s.tag}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                <div className="dt-svc-pts">
                  {s.points.map((pt, j) => (
                    <span key={j} className="dt-svc-chip" style={{ background: `${s.color}10`, color: s.color, border: `1px solid ${s.color}30` }}>{pt}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ SECTION 4 — PROCESS ══ */}
        <section className="dt-process">
          <div className="dt-proc-bg" />
          <div className="dt-proc-hdr">
            <div className="partners-header1"  style={{ textAlign: 'center' }}>
              <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start', color: '#ed8337' }}>Our Proven Process For Digital Transformation</h2>
            </div>

            <h3 className="pr-heading-process">How We <span className="accent" style={{ color: '#ed8337' }}>Transform</span> Your Business</h3>
            <p>A structured, four-phase approach that takes you from discovery to continuous improvement.</p>
          </div>
          <div className="dt-proc-grid">
            {PROCESS_STEPS.map((s, i) => (
              <div key={i} className="dt-proc-card" style={{ borderTop: `3px solid ${s.color}80` }}>
                <div className="dt-flip-num">{s.num}</div>
                <div className="dt-flip-ico" style={{ background: `${s.color}20`, border: `1px solid ${s.color}40` }}>
                  <img src={s.img} alt={s.title} style={{ width: "32px", height: "32px", objectFit: "contain" }} />
                </div>
                <h4 className="dt-flip-ttl">{s.title}</h4>
                <div className="dt-flip-dsc">{s.shortDesc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ SECTION 4.5 — VIDEO ══ */}
        <section className="dt-video-section">
          <div className="partners-header1"  style={{ textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Implementation Partners</h2>
          </div>

          <h3 className="dt-video-title">Empowering Your  <span> Growth Through Seamless </span> Technology Integration</h3>

          <div className="dt-video-wrap" style={{ marginTop: '50px' }}>
            <video src={logovideo} alt="logo" className="logo-gif" autoPlay muted loop playsInline />
            {/* <img src={logovideo} alt="logo" className="logo-gif"autoPlay muted loop playsInline /> */}
          </div>
        </section>

        {/* ══ SECTION 5 — FAQ ══ */}
        <section className="faq-section" style={{padding: '80px 0 0'}}>
          <div style={{ textAlign: "center", marginBottom: "12px" }}>
            <h2 className="partners-eyebrow">Frequently Asked Questions</h2>
          </div>
          <div className="container" style={{width: '100%'}}>
            <div className="faq-head">
              <h3 className="faq-h3">Queries That Could <span>Hold You Back</span></h3>
            </div>
            <div className="faq-wrapper">
              <div className="faq-col">
                {faqData.slice(0, 3).map((item, i) => (
                  <div className="faq-item" key={i}>
                    <div className="faq-question" onClick={() => toggle(i)}>
                      <span>{item.q}</span>
                      <span className="icon">{active === i ? "−" : "+"}</span>
                    </div>
                    {active === i && <div className="faq-answer">{item.a}</div>}
                  </div>
                ))}
              </div>
              <div className="faq-col">
                {faqData.slice(3, 6).map((item, i) => (
                  <div className="faq-item" key={i + 3}>
                    <div className="faq-question" onClick={() => toggle(i + 3)}>
                      <span>{item.q}</span>
                      <span className="icon">{active === i + 3 ? "−" : "+"}</span>
                    </div>
                    {active === i + 3 && <div className="faq-answer">{item.a}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 6 — CTA ══ */}
        <BlogSection />
        <CTASection />
      </>
    </Layout>
  );
}