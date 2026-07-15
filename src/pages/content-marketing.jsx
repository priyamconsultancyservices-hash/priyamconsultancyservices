import '../css/pages-common.css';
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import CTASection from "../components/HomePage/CTA";
import BlogSection from "../components/BlogSection";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
const banner = "/img/content-marketing.webp";


// ─── useInView hook ───────────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  { num: "01", icon: <img src="/img/icon/svc-content-strategy.webp" alt="Content Strategy and Planning" width="28" height="28" />, subtitle: "Brand Presence", title: "Content Strategy & Planning", desc: "A strong content marketing strategy forms the backbone of success. We create structured calendars, keyword clusters, and topic funnels aligned with your business goals.", },
  { num: "02", icon: <img src="/img/icon/svc-content-audits.webp" alt="Content Audits and Optimization" width="28" height="28" />, subtitle: "Visual Identity", title: "Content Audits & Optimization", desc: "We enhance your existing content assets by auditing, updating, and optimizing them for better rankings and engagement.", },
  { num: "03", icon: <img src="/img/icon/svc-seo-content.webp" alt="SEO Content Writing" width="28" height="28" />, subtitle: "Paid Campaigns", title: "SEO Content Writing", desc: "Our content marketing services ensure your content ranks and resonates. We balance SEO with readability to improve performance.", },
  { num: "04", icon: <img src="/img/icon/svc-website-copy.webp" alt="Website and Landing Page Copy" width="28" height="28" />, subtitle: "Community Building", title: "Website & Landing Page Copy", desc: "High-converting content is essential for success. Our content marketing approach ensures every page drives action and improves conversions.", },
  { num: "05", icon: <img src="/img/icon/svc-thought-leadership.webp" alt="Thought Leadership and Blogs" width="28" height="28" />, subtitle: "Partnerships", title: "Thought Leadership & Blogs", desc: "Build authority with impactful content marketing. We create research-driven blogs that position your brand as an industry leader.", },
  { num: "06", icon: <img src="/img/icon/svc-social-email-content.webp" alt="Content for Social and Email" width="28" height="28" />, subtitle: "Insights & ROI", title: "Content for Social & Email", desc: "Extend your content marketing reach across channels. From social media to email campaigns, we keep your audience engaged.", },
];

const PROCESS_STEPS = [
  { step: "01", title: "Discover", phase: "Brand Audit", desc: "We begin by understanding your brand, business goals, audience segments, market positioning, and competitive landscape in detail. This phase helps us define your unique value proposition and align your content marketing direction with measurable business objectives and long-term brand communication goals. Every successful content marketing strategy starts with complete clarity and strategic understanding.", bullets: [] },
  { step: "02", title: "Research & Analyze", phase: "Custom Roadmap", desc: "Our team conducts in-depth research including keyword analysis, search intent mapping, competitor benchmarking, audience behavior study, and content gap identification. We also evaluate industry trends, and content performance opportunities to create a stronger strategic direction. This ensures your content marketing efforts are not only relevant and engaging but also strategically positioned to outperform competitors and long-term digital authority. ", bullets: [] },
  { step: "03", title: "Plan & Strategize", phase: "Content Production", desc: "Based on gathered insights, we develop a structured roadmap for your content marketing services aligned with business priorities and audience intent. This includes content calendars, topic clusters, SEO frameworks, funnel-based content planning, campaign structures, and strategic distribution methods designed to maximize reach, engagement, and conversion opportunities consistently across platforms.", bullets: [] },
  { step: "04", title: "Create & Refine", phase: "Full Execution", desc: "Our writers, editors, designers, and strategists collaborate closely to produce high-quality content marketing assets tailored to your brand voice. Each content piece is carefully crafted to maintain consistency while being optimized for SEO, readability, engagement, and user experience. Multiple review stages ensure accuracy, clarity, messaging quality, and stronger conversion effectiveness throughout every campaign.", bullets: [] },
  { step: "05", title: "Publish & Optimize", phase: "Continuous Growth", desc: "Publishing content is only the beginning of our continuous optimization process. We consistently monitor performance metrics such as keyword rankings, website traffic, engagement rates, user behavior, and conversions to measure effectiveness accurately. As a proactive content marketing agency, we regularly refine and optimize your content marketing assets to improve visibility, sustain growth, and deliver long-term business impact.", bullets: [] },
];

const HOW_WE_WORK = [
  { icon: <img src="/img/icon/hww-strategic-planning.webp" alt="Strategic Planning" width="28" height="28" />, title: "Strategic Planning", desc: "Every piece of content is backed by a well-thought-out strategy. We ensure everything we create is tied to a clear goal—ranking, converting, or educating." },
  { icon: <img src="/img/icon/hww-defined-roles.webp" alt="Defined Roles and Collaboration" width="28" height="28" />, title: "Defined Roles & Collaboration", desc: "From content strategists and writers to editors and SEO analysts—each expert owns their role. With clear responsibilities, we ensure seamless execution and timely delivery." },
  { icon: <img src="/img/icon/review-quality-control.webp" alt="Thorough Review and Quality Control" width="28" height="28" />, title: "Thorough Review & Quality Control", desc: "Before anything goes live, it passes through multiple layers of quality checks. From fact-checking to formatting, we deliver nothing but polished, high-impact content." },
];

const faqData = [
  { q: "What does content marketing do for my business?", a: "Content marketing helps businesses build brand awareness, improve audience engagement, increase website traffic, and generate qualified leads through valuable and strategic content. It strengthens credibility, supports SEO performance, and helps businesses communicate their expertise effectively across digital platforms." },
  { q: "Do you write content for specific industries?", a: "We create industry-specific content for sectors including healthcare, technology, ecommerce, consulting, construction, finance, retail, and professional services. Our content strategies are tailored to match industry trends, audience behavior, business goals, and brand communication requirements for maximum relevance and impact." },
  { q: "Can you optimize existing content?", a: "Yes, we optimize existing content by improving structure, readability, SEO performance, keyword relevance, and audience engagement. Our optimization process helps strengthen search visibility, enhance user experience, update outdated information, and improve overall content effectiveness across digital platforms and search engines." },
  { q: "Do you provide blog writing services?", a: "We provide professional blog writing services focused on SEO, audience engagement, and brand positioning. Our blogs are strategically created to improve website traffic, establish industry authority, support digital marketing goals, and provide valuable information that connects with your target audience." },
  { q: "Can content marketing improve SEO?", a: " Yes, content marketing plays a major role in improving SEO by targeting relevant keywords, increasing website engagement, strengthening internal linking, and generating valuable search-focused content. High-quality content helps improve search rankings, organic traffic, visibility, and long-term digital authority across search engines." },
  { q: "How do you decide what content to create?", a: " We decide content strategies based on your business goals, target audience, industry trends, competitor analysis, keyword research, and platform performance. Our approach focuses on creating relevant, audience-focused content that improves engagement, search visibility, lead generation, and overall digital marketing performance." },
];


// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" id="hero">

      {/* LEFT CONTENT */}
      <div className="hero-left">
        <div className="h-badge"><div className="badge-dot" />Authority Building </div>
        <h1 className="hero-heading" style={{fontWeight: '600'}}>
          Turn Content into
          <span className="hl lined">Conversions</span> with the
          Content Marketing
        </h1>
        <p className="hero-sub">
          At PCS, content marketing isn’t just about writing — it’s about creating value that drives results. As a performance-focused content marketing agency, we deliver content marketing services that attract, engage, and convert your ideal audience.        </p>
        <div className="hero-actions">
          <a className="btn-fill" href="/contact-us">Explore More <span className="btn-arrow">›</span></a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-right">
        <img
          src={banner}
          alt="Content Marketing Illustration"
          className="hero-img"
        />
      </div>
    </section>
  );
}

// ─── Approach + Form ──────────────────────────────────────────────────────────
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
      .catch((error) => { console.log(error); alert("Failed to send ❌"); });
  };

  return (
    <section className="approach" id="approach">
      <div className="ap-inner">
        <div className="ap-left">
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Approach in</div>
          </div>
          <h2 className="ap-heading"><span>Strategic Content </span> That Drives Search, Shares & Sales</h2>
          <p className="ap-intro">
            Great content marketing starts with understanding your brand identity, business positioning, and long-term communication goals. We ensure every message reflects your voice, values, audience expectations, and overall brand direction consistently.

          </p>
          <p className="ap-intro">
            Our content marketing services are driven by detailed research, audience insights, competitor analysis, and market trends. This helps us create performance-focused campaigns that deliver relevance, engagement, visibility, and measurable business impact.

          </p>
          <p className="ap-intro">
            Whether your goal is SEO growth, lead generation, or audience engagement, our content marketing approach combines storytelling with strategic optimization. Every content asset is crafted to maximize reach, conversions, and brand authority.
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
                  <div className="phone-flag"><span>📞</span></div>
                  <input className="fl-input" type="tel" name="phone" placeholder="Mobile number" value={form.phone} onChange={handleChange} maxLength="10" pattern="[0-9]{10}" required />
                </div>
              </div>
              <div className="fl-group textarea-group">
                <label className="fl-label">Message</label>
                <div style={{ position: "relative" }}>
                  <span className="fl-icon" style={{ top: "0.9rem", transform: "none" }}>💬</span>
                  <textarea className="fl-textarea" name="msg" placeholder="Tell us about your social media goals..." value={form.msg} onChange={handleChange} />
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
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function ServicePanel({ svc, index }) {
  const [ref, visible] = useInView(0.1);
  return (
    <div ref={ref} className={`smm-svc-panel${visible ? " vis" : ""}`} style={{ transitionDelay: `${0.05 + index * 0.07}s` }}>
      <div className="smm-sp-slash" />
      <div className="smm-sp-ghost">{svc.num}</div>
      <div className="smm-sp-bottom-line" />
      <div className="smm-sp-icon-row">
        <span className="smm-sp-icon-dash" />
        <span className="smm-sp-icon">{svc.icon}</span>
      </div>
      <div className="smm-sp-content">
        <div className="smm-sp-subtitle">{svc.subtitle}</div>
        <h4 className="smm-sp-title">{svc.title}</h4>
        <div className="smm-sp-desc">{svc.desc}</div>
        {/* <a className="smm-sp-link" href="#">LEARN MORE <span className="smm-sp-link-arr">↗</span></a> */}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="smm-svc">
      <div className="smm-svc-dots" />
      <div className="smm-svc-glow smm-ssvg1" />
      <div className="smm-svc-glow smm-ssvg2" />
      <div className="smm-svc-hdr">
        <div className="partners-header1" style={{ textAlign: 'center' }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Specialized Content Marketing Services</h2>
        </div>
        <h3 className="smm-svc-h2">Not Just Content. <span> <i>Content That Works.</i></span></h3>
        <p className="smm-svc-sub">
          As a results-driven content marketing agency, we go beyond generic writing. Our content marketing services are tailored to your brand, industry, and audience journey.


        </p>
      </div>
      <div className="smm-svc-panels">
        {SERVICES.map((svc, i) => <ServicePanel key={svc.num} svc={svc} index={i} />)}
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────
function ProcessStep({ step, index }) {
  const [ref, visible] = useInView(0.1);
  const isEven = index % 2 === 1;
  return (
    <div ref={ref} className={`smm-tp-step${visible ? " tp-vis" : ""}`}>
      {isEven ? (
        <>
          <div className="smm-tp-text-side">
            <p className="smm-tp-desc">{step.desc}</p>
            <div className="smm-tp-bullets">{step.bullets.map(b => <span key={b} className="smm-tp-bullet">{b}</span>)}</div>
          </div>
          <div className="smm-tp-num-side">
            <div className="smm-tp-bg-num">{step.step}</div>
            <div className="smm-tp-step-index">Step — {step.step}</div>
            <h4 className="smm-tp-step-title">{step.title}</h4>
            <div className="smm-tp-phase">{step.phase}</div>
          </div>
        </>
      ) : (
        <>
          <div className="smm-tp-num-side">
            <div className="smm-tp-bg-num">{step.step}</div>
            <div className="smm-tp-step-index">Step — {step.step}</div>
            <h4 className="smm-tp-step-title">{step.title}</h4>
            <div className="smm-tp-phase">{step.phase}</div>
          </div>
          <div className="smm-tp-text-side">
            <p className="smm-tp-desc">{step.desc}</p>
            <div className="smm-tp-bullets">{step.bullets.map(b => <span key={b} className="smm-tp-bullet">{b}</span>)}</div>
          </div>
        </>
      )}
    </div>
  );
}

function Process() {
  return (
    <section className="smm-tp-section">
      <div className="smm-tp-cross" />
      <div className="smm-tp-header">
        <div className="partners-header1" style={{ textAlign: 'center' }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Proven Content Marketing Process</h2>
        </div>
        <h3 className="smm-tp-h2">Built on Strategy. <em> <i>Refined by Insight. </i></em> Measured by Impact.</h3>
        <p className="smm-tp-sub">
          Our content marketing process that will make your brand unique, and value proposition end for each stage for your customer. Let's see how PCS  thought process can be a game changer for your business
        </p>
      </div>
      <div className="smm-tp-body">
        {PROCESS_STEPS.map((step, i) => <ProcessStep key={step.step} step={step} index={i} />)}
      </div>
    </section>
  );
}

// ─── How We Work ──────────────────────────────────────────────────────────────
function HowWeWorkItem({ item }) {
  const [ref, visible] = useInView(0.12);
  return (
    <div ref={ref} className={`smm-hww-arrow-item${visible ? " hww-vis" : ""}`}>
      <div className="smm-hww-card">
        <div className="smm-hww-icon-wrap">{item.icon}</div>
        <h4 className="smm-hww-card-title">{item.title}</h4>
        <div className="smm-hww-card-desc">{item.desc}</div>
      </div>
    </div>
  );
}

function HowWeWork() {
  return (
    <section className="smm-hww">
      <div className="smm-hww-dot-grid" />
      <div className="smm-hww-glow smm-hww-glow-1" />
      <div className="smm-hww-glow smm-hww-glow-2" />
      <div className="smm-hww-header">
        <div className="partners-header1" style={{ textAlign: 'center' }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Focus on Your Results in Content Marketing</h2>
        </div>
        <h3 className="smm-hww-h2">Plan Smart.  <span><i>Write Better.</i></span> Deliver Results.</h3>
      </div>
      <div className="smm-hww-arrows-wrap">
        <div className="smm-hww-arrow-track">
          {HOW_WE_WORK.map(item => <HowWeWorkItem key={item.title} item={item} />)}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <section className="faq-section" style={{padding: '80px 0 0'}}>
      <div className="partners-header2" style={{ textAlign: 'center', marginTop: '20px' }}>
        <h4 className="partners-eyebrow" >Frequently Asked Questions</h4>
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


// ─── Root Component ───────────────────────────────────────────────────────────
export default function PcsSmmPage() {


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
            "@id": "https://www.priyamconsultancy.com/content-marketing/",
            "name": "content-marketing"
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

    // -- SERVICE PAGE SCHEMA --

    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.priyamconsultancy.com/content-marketing/#service",
      "name": "Content Marketing",
      "serviceType": "Content Marketing Services",
      "url": "https://www.priyamconsultancy.com/content-marketing/",
      "description": "Priyam Consultancy provides professional content marketing services including website content writing, SEO content, blog writing, social media content, brand storytelling and content strategy services across India.",
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
      "name": "content-marketing",
      "image": ["https://www.priyamconsultancy.com/img/content-marketing.png"],
      "description": "Best content marketing services in Coimbatore offering blog writing, SEO content creation, website content development, content optimization, brand storytelling and audience engagement strategies for business growth.",
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
        "reviewCount": "4861"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.priyamconsultancy.com/content-marketing/",
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

    //  FAQ Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "What does content marketing do for my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Content marketing helps businesses build brand awareness, improve audience engagement, increase website traffic, and generate qualified leads through valuable and strategic content. It strengthens credibility, supports SEO performance, and helps businesses communicate their expertise effectively across digital platforms."
        }
      }, {
        "@type": "Question",
        "name": "Do you write content for specific industries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We create industry-specific content for sectors including healthcare, technology, ecommerce, consulting, construction, finance, retail, and professional services. Our content strategies are tailored to match industry trends, audience behavior, business goals, and brand communication requirements for maximum relevance and impact."
        }
      }, {
        "@type": "Question",
        "name": "Can you optimize existing content?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we optimize existing content by improving structure, readability, SEO performance, keyword relevance, and audience engagement. Our optimization process helps strengthen search visibility, enhance user experience, update outdated information, and improve overall content effectiveness across digital platforms and search engines."
        }
      }, {
        "@type": "Question",
        "name": "Do you provide blog writing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide professional blog writing services focused on SEO, audience engagement, and brand positioning. Our blogs are strategically created to improve website traffic, establish industry authority, support digital marketing goals, and provide valuable information that connects with your target audience."
        }
      }, {
        "@type": "Question",
        "name": "Can content marketing improve SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, content marketing plays a major role in improving SEO by targeting relevant keywords, increasing website engagement, strengthening internal linking, and generating valuable search-focused content. High-quality content helps improve search rankings, organic traffic, visibility, and long-term digital authority across search engines."
        }
      }, {
        "@type": "Question",
        "name": "How do you decide what content to create?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We decide content strategies based on your business goals, target audience, industry trends, competitor analysis, keyword research, and platform performance. Our approach focuses on creating relevant, audience-focused content that improves engagement, search visibility, lead generation, and overall digital marketing performance."
        }
      }]
    }
  ]

  return (
    <Layout>
      <div className="pg-content-marketing">
      <Head>
        <title>Content Marketing Agency in India | Content Marketing Services
        </title>
        <meta name="description" content="PCS is a leading content marketing agency in India. Our content strategy and creation help drive traffic, generate leads, & boost brand visibility on search engines." />
        <meta name="keywords" content="Content Marketing, Content Marketing Agency, Content Marketing Service, Content Marketing Strategy, Content Marketing Company, Social Media Content Agency, Content Creation Companies" />
        <link rel="canonical" href="https://www.priyamconsultancy.com/content-marketing/" />
        {/* Open Graph */}
        <meta property="og:title" content="Content Marketing Agency in India | Content Marketing Services" />
        <meta property="og:description" content="PCS is a leading content marketing agency in India. Our content strategy and creation help drive traffic, generate leads, & boost brand visibility on search engines." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.priyamconsultancy.com/content-marketing/" />
        <meta property="og:image" content="https://www.priyamconsultancy.com/img/content-marketing.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Content Marketing Agency in India | Content Marketing Services" />
        <meta name="twitter:description" content="PCS is a leading content marketing agency in India. Our content strategy and creation help drive traffic, generate leads, & boost brand visibility on search engines." />
        <meta name="twitter:image" content="https://www.priyamconsultancy.com/img/content-marketing.png" />
        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Head>
      <Hero />
      <ApproachSection />
      <Services />
      <Process />
      <HowWeWork />
      <FAQSection />
      <BlogSection />
      <CTASection />
      </div>
    </Layout>
  );
}