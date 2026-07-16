import '../css/pages-common.css';
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import BlogSection from "../components/BlogSection";
import CTASection from "../components/HomePage/CTA";
const banner = "/img/performance-marketing.webp";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';


// ─── Intersection observer hook ──────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const PPC_SERVICES = [
  { num: "01", icon: <img src="/img/icon/svc-google-search-ads.webp" alt="Google Search Ads" width="28" height="28" />, subtitle: "Google Search Ads ", title: "Google Search Ads", desc: "Be present when your customers are searching. Our Search Engine Marketing specialists run high-converting Google Search Ads that target the right keywords, ensuring your business shows up exactly where and when it matters. Whether it's PPC for local leads or national reach, we make every search count." },
  { num: "02", icon: <img src="/img/icon/svc-display-advertising.webp" alt="Display Advertising" width="28" height="28" />, subtitle: "Display Advertising ", title: "Display Advertising ", desc: "Get noticed beyond search. Our visually engaging display ads reach users across millions of websites, boosting brand awareness and driving traffic — a core part of any strong performance marketing strategy." },
  { num: "03", icon: <img src="/img/icon/svc-youtube-video-ads.webp" alt="YouTube Video Ads" width="28" height="28" />, subtitle: "YouTube Video Ads ", title: "YouTube Video Ads ", desc: "Tell your brand story through video. We create and manage YouTube ads that capture attention, build trust, and drive action — perfect for both branding and conversions within your broader pay per click in digital marketing strategy." },
  { num: "04", icon: <img src="/img/icon/svc-meta-ads.webp" alt="Meta Ads Facebook and Instagram" width="28" height="28" />, subtitle: "Social Advertising", title: "Meta Ads (Facebook & Instagram) ", desc: "Connect with your audience on the platforms they love. Our Meta ads management, Facebook ads management, and Instagram ads management services drive traffic, leads, and sales through targeted creatives and optimized campaign strategies. As a specialist social media advertising service, we make every rupee of your social budget work harder." },
  { num: "05", icon: <img src="/img/icon/svc-linkedin-ads.webp" alt="LinkedIn Ads Management" width="28" height="28" />, subtitle: "LinkedIn Ads ", title: "LinkedIn Ads Management ", desc: "Reach decision-makers in any industry. Our LinkedIn Ads management campaigns are tailored for B2B growth, generating high-quality leads through precise targeting and impactful messaging — ideal for companies selling to professionals and enterprises." },
  { num: "06", icon: <img src="/img/icon/svc-whatsapp-marketing.webp" alt="WhatsApp Marketing" width="28" height="28" />, subtitle: "WhatsApp Marketing ", title: "WhatsApp Marketing ", desc: "As a dedicated WhatsApp Marketing agency, we run structured, scalable WhatsApp marketing campaigns — from strategy and API setup to bulk outreach and re-engagement. Verified, compliant, and built to deliver real business results. " },
];

const PROCESS_STEPS = [
  { step: "01", title: "Discover", phase: "Phase 1 — Discover", desc: "Before we launch any ads, we take time to deeply understand your business model, target audience, market positioning, and revenue goals. Our performance marketing team connects with key stakeholders to identify your customer journey, core services, unique selling points, and campaign objectives — ensuring every campaign is aligned with real business needs, customer expectations, and measurable growth outcomes.", bullets: [] },
  { step: "02", title: "Research & Analyze", phase: "Phase 2 — Research & Analyze ", desc: "We conduct thorough competitor research, analyze your industry landscape, review historical ad performance where available, and identify high-intent keywords and audience segments. From ideal customer profiles and buying behavior to seasonality trends and platform opportunities, we gather every critical insight needed to maximize ROI from day one — a fundamental part of any serious and scalable PPC strategy.", bullets: [] },
  { step: "03", title: "Strategize", phase: "Phase 3 — Strategize ", desc: "With insights in hand, we craft a custom performance marketing strategy tailored to your business goals and audience behavior. We carefully choose the right platforms across Search Engine Marketing, Meta ads management, LinkedIn Ads management, and more. From campaign structuring and compelling ad creatives to conversion-optimized landing pages, every element is designed to ensure your pay per click ads generate meaningful engagement, qualified leads, and real business results.", bullets: [] },
  { step: "04", title: "Launch & Optimize", phase: "Phase 4 — Launch & Optimize ", desc: "Once campaigns are live, we continuously monitor performance metrics and optimize campaigns in real time for maximum efficiency. We A/B test ad variations, adjust bidding strategies, refine audience targeting, and pause underperforming segments to improve results consistently. Our goal across every pay per click campaign is simple: reduce unnecessary ad spend, increase conversion efficiency, improve lead quality, and scale strategies that deliver measurable performance.", bullets: [] },
  { step: "05", title: "Report & Evolve", phase: "Phase 5 — Report & Evolve ", desc: "We provide clear, transparent, and easy-to-understand reports highlighting what’s performing well, what requires improvement, and how campaigns are progressing over time. Alongside detailed monthly reviews, our team proactively updates strategies based on new market trends, platform algorithm changes, audience behavior, and evolving business priorities — ensuring your performance marketing services remain competitive, scalable, and consistently effective as your business continues to grow.", bullets: [] },
];

const HOW_WE_WORK = [
  { icon: <img src="/img/icon/hww-strategic-plannings.webp" alt="Strategic Planning" width="30" height="30" />, title: "Strategic Planning ", desc: "Every successful pay per click in digital marketing campaign starts with a clear strategy. We take time to understand your goals, audience, and market — crafting a data-driven roadmap tailored to your business needs." },
  { icon: <img src="/img/icon/hww-defined-roles.webp" alt="Defined Roles and Collaboration" width="30" height="30" />, title: "Defined Roles & Collaboration ", desc: "We believe great outcomes come from clear responsibilities and strong collaboration. Each team member is aligned with specific roles, ensuring smooth execution and full accountability across every performance marketing engagement." },
  { icon: <img src="/img/icon/hww-testing-delivery.webp" alt="Thorough Testing and On-Time Delivery" width="30" height="30" />, title: "Thorough Testing & On-Time Delivery ", desc: "Before any campaign goes live, it goes through rigorous quality checks — reviewing every detail for functionality, accuracy, and performance. As a results-driven performance marketing company, we deliver only when everything is right." },
];

const faqData = [
  { q: "What is performance marketing and how does it help my business?", a: " Performance marketing is a results-driven digital marketing approach where campaigns are optimized based on measurable actions like leads, clicks, sales, or conversions. It helps businesses improve visibility, attract targeted audiences, generate qualified leads, and maximize return on advertising investment effectively." },
  { q: "How much budget do I need to start a PPC campaign?", a: " PPC campaign budgets depend on your industry, competition, business goals, and target audience. We create customized strategies suitable for both small and large businesses, ensuring your budget is allocated efficiently to maximize reach, lead generation, and overall campaign performance." },
  { q: "Which platforms do you run PPC ads on?", a: " We run PPC campaigns across multiple platforms including Google Ads, Meta Ads (Facebook and Instagram), LinkedIn Ads, YouTube Ads, and other relevant advertising networks. Platform selection depends on your business objectives, audience behavior, and the type of conversions you want to achieve." },
  { q: "Is performance marketing suitable for small businesses?", a: "Yes, performance marketing is highly suitable for small businesses because it focuses on measurable outcomes and controlled spending. It allows businesses to target specific audiences, track campaign performance in real time, optimize budgets efficiently, and generate qualified leads without unnecessary advertising expenses." },
  { q: "How is performance marketing different from regular digital marketing?", a: " Regular digital marketing focuses broadly on brand visibility and online presence, while performance marketing is centered around measurable actions like leads, conversions, and sales. Every campaign is continuously optimized using data and analytics to improve ROI and deliver trackable business outcomes." },
  { q: "Do you create the ad content and landing pages too?", a: "Yes, we provide complete campaign support including ad creatives, copywriting, landing page development, audience targeting, and conversion optimization. Our approach ensures that both the advertisements and landing pages work together effectively to improve engagement, lead quality, and campaign performance." },

];

// ─── PPC Hero Image ──────────────────────────────────────────────────────────
function PpcScene() {
  return (
    <div className="ppc-scene">
      <img
        src={banner}
        alt="PPC Marketing Illustration"
        className="ppc-hero-img"
      />
    </div>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" id="hero">

      {/* LEFT CONTENT */}
      <div className="hero-left">
        <div className="h-badge"><div className="badge-dot" />Performance Driven </div>
        <h1 className="hero-heading" style={{fontWeight: '600'}}>
          Turn Your Clicks into with
          <span className="hl lined" style={{ marginLeft: '12px' }}> Our Performance  </span> Marketing

        </h1>
        <p className="hero-sub">
          At PCS, our performance marketing services are built around one thing: results. Whether it's Google Ads, Meta, LinkedIn, or display networks, we drive high-intent traffic that converts into leads, sales, and real business outcomes. As a trusted performance marketing agency, we combine data, strategy, and creativity to deliver campaigns that don't just spend your budget — they grow your business.
        </p>
        <div className="hero-actions">
          <a className="btn-fill" href="/contact-us">Get Free Audit <span className="btn-arrow">›</span></a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-right">
        <img
          src={banner}
          alt="PPC Marketing Illustration"
          className="hero-img"
        />
      </div>
    </section>
  );
}

// ─── Approach + Form ─────────────────────────────────────────────────────────
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
        <div className="ap-left">
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Approach in</div>
          </div>
          <h2 className="ap2-heading">Strategic <span>Performance Marketing Campaigns </span> Built to Perform</h2>
          <p className="ap-intro">
            Whether your goal is lead generation, eCommerce sales, or improving local visibility, our performance marketing experts create data-driven campaigns tailored to your specific business objectives and target audience behavior.
          </p>
          <p className="ap-intro">
            Using strategic audience targeting, keyword planning, and compelling ad creatives, we build campaigns designed to maximize brand visibility, customer engagement, and measurable marketing outcomes across multiple digital platforms.
          </p>
          <p className="ap-intro">
            From smart bidding strategies to continuous monitoring and optimization, every campaign is managed with precision. We focus on improving conversions, reducing costs, and driving scalable long-term business growth consistently.
          </p>
        </div>
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

// ─── Services ─────────────────────────────────────────────────────────────────
function ServicePanel({ svc, index }) {
  const [ref, visible] = useInView(0.1);
  return (
    <div ref={ref} className={`ppc-svc-panel${visible ? " vis" : ""}`} style={{ transitionDelay: `${0.05 + index * 0.07}s` }}>
      <div className="ppc-sp-slash" />
      <div className="ppc-sp-ghost">{svc.num}</div>
      <div className="ppc-sp-bottom-line" />
      <div className="ppc-sp-icon-row">
        <span className="ppc-sp-icon-dash" />
        <span className="ppc-sp-icon">{svc.icon}</span>
      </div>
      <div className="ppc-sp-content">
        <div className="ppc-sp-subtitle">{svc.subtitle}</div>
        <h4 className="ppc-sp-title">{svc.title}</h4>
        <div className="ppc-sp-desc">{svc.desc}</div>
        {/* <a className="ppc-sp-link" href="#">LEARN MORE <span className="ppc-sp-link-arr">↗</span></a> */}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="ppc-svc">
      <div className="ppc-svc-dots" />
      <div className="ppc-svc-glow ppc-ssvg1" />
      <div className="ppc-svc-glow ppc-ssvg2" />
      <div className="ppc-svc-hdr">
        <div className="partners-header1" style={{ textAlign: 'center' }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Specialized PPC Marketing Services</h2>
        </div>
        <h3 className="ppc-svc-h2">Smart Ads. <span><i>Real Reach.</i> </span>Measurable Results.</h3>
        <p className="ppc-svc-sub">
          At PCS we believe in delivering results that grow your business. With years of experience managing high-performing PPC campaigns across Google, Meta, and LinkedIn.
        </p>
      </div>
      <div className="ppc-svc-panels">
        {PPC_SERVICES.map((svc, i) => <ServicePanel key={svc.num} svc={svc} index={i} />)}
      </div>
    </section>
  );
}

// ─── Process ─────────────────────────────────────────────────────────────────
function ProcessStep({ step, index }) {
  const [ref, visible] = useInView(0.1);
  const isEven = index % 2 === 1;
  return (
    <div ref={ref} className={`ppc-tp-step${visible ? " tp-vis" : ""}`}>
      {isEven ? (
        <>
          <div className="ppc-tp-text-side">
            <p className="ppc-tp-desc">{step.desc}</p>
            <div className="ppc-tp-bullets">{step.bullets.map(b => <span key={b} className="ppc-tp-bullet">{b}</span>)}</div>
          </div>
          <div className="ppc-tp-num-side">
            <div className="ppc-tp-bg-num">{step.step}</div>
            <div className="ppc-tp-step-index">Step — {step.step}</div>
            <div className="ppc-tp-step-title">{step.title}</div>
            <div className="ppc-tp-phase">{step.phase}</div>
          </div>
        </>
      ) : (
        <>
          <div className="ppc-tp-num-side">
            <div className="ppc-tp-bg-num">{step.step}</div>
            <div className="ppc-tp-step-index">Step — {step.step}</div>
            <h4 className="ppc-tp-step-title">{step.title}</h4>
            <div className="ppc-tp-phase">{step.phase}</div>
          </div>
          <div className="ppc-tp-text-side">
            <p className="ppc-tp-desc">{step.desc}</p>
            <div className="ppc-tp-bullets">{step.bullets.map(b => <span key={b} className="ppc-tp-bullet">{b}</span>)}</div>
          </div>
        </>
      )}
    </div>
  );
}

function Process() {
  return (
    <section className="ppc-tp-section">
      <div className="ppc-tp-cross" />
      <div className="ppc-tp-header">
        <div className="partners-header1" style={{ textAlign: 'center' }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Proven PPC Execution Process</h2>
        </div>
        <h3 className="ppc-tp-h2">Built for Clarity,<em> Tuned for Results</em></h3>
        <p className="ppc-tp-sub">
          Every pay per click ads campaign starts with strategy and ends with measurable impact. Our process ensures your ad spend works harder, smarter, and faster.
        </p>
      </div>
      <div className="ppc-tp-body">
        {PROCESS_STEPS.map((step, i) => <ProcessStep key={step.step} step={step} index={i} />)}
      </div>
    </section>
  );
}

// ─── How We Work ─────────────────────────────────────────────────────────────
function HowWeWorkItem({ item }) {
  const [ref, visible] = useInView(0.12);
  return (
    <div ref={ref} className={`ppc-hww-arrow-item${visible ? " hww-vis" : ""}`}>
      <div className="ppc-hww-card">
        <div className="ppc-hww-icon-wrap">{item.icon}</div>
        <h4 className="ppc-hww-card-title">{item.title}</h4>
        <div className="ppc-hww-card-desc">{item.desc}</div>
      </div>
    </div>
  );
}

function HowWeWork() {
  return (
    <section className="ppc-hww">
      <div className="ppc-hww-dot-grid" />
      <div className="ppc-hww-glow ppc-hww-glow-1" />
      <div className="ppc-hww-glow ppc-hww-glow-2" />
      <div className="ppc-hww-header">
        <div className="partners-header1" style={{ textAlign: 'center' }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Focus on Your Results in PPC Management</h2>
        </div>
        <h3 className="ppc-hww-h2">Plan Smart. <span><i>Execute Sharper. </i></span> Deliver Right.</h3>
      </div>
      <div className="ppc-hww-arrows-wrap">
        <div className="ppc-hww-arrow-track">
          {HOW_WE_WORK.map(item => <HowWeWorkItem key={item.title} item={item} />)}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
function FAQSection() {
  const [active, setActive] = useState(null);
  const toggle = (index) => setActive(active === index ? null : index);
  return (
    <section className="faq-section" style={{padding: '80px 0 0'}}>
      <div className="partners-header2" style={{ textAlign: 'center', marginTop: '20px' }}>
        <h4 className="partners-eyebrow">Frequently Asked Questions</h4>
      </div>
      <div className="container">
        <div className="faq-head">
          <h3 className="faq-h3">Questions That Could <span>Hold You Back</span></h3>
        </div>
        <div className="faq-wrapper">
          <div className="faq-col">
            {faqData.slice(0, 3).map((item, i) => (
              <div className="faq-item" key={i}>
                <div className="faq-question" onClick={() => toggle(i)}>
                  <span>{item.q}</span>
                  <span className="icon">{active === i ? "−" : "+"}</span>
                </div>
                {active === i && <div className="faq-answer ppc-faq-answer">{item.a}</div>}
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
                {active === i + 3 && <div className="faq-answer ppc-faq-answer">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Root Component ───────────────────────────────────────────────────────────
export default function PcsPpcPage() {

const breadcrumbSchema =  
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
            "@id": "https://www.priyamconsultancy.com/performance-marketing/",
            "name": "performance-marketing"
          }
        }
      ]
    };

    // Organization Schema
   const organizationSchema =  {
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
    };

    // Service Page Schema
   const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.priyamconsultancy.com/performance-marketing/#service",
      "name": "Performance Marketing",
      "serviceType": "Performance Marketing Services",
      "url": "https://www.priyamconsultancy.com/performance-marketing/",
      "description": "Looking for top performance marketing companies? We offer result-driven performance marketing services including PPC, social media ads, and lead generation.",
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
    };

    // Product Schema
  const productSchema =  {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "performance-marketing",
      "image": ["https://www.priyamconsultancy.com/img/performance-marketing.png"],
      "description": "Best performance marketing services in Coimbatore offering Google Ads, Meta Ads, PPC campaign management, lead generation, conversion optimization, audience targeting and ROI-focused advertising solutions.",
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
        "reviewCount": "4732"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.priyamconsultancy.com/performance-marketing/",
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
    };

    // FAQ Schema
   const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is performance marketing and how does it help my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Performance marketing is a results-driven digital marketing approach where campaigns are optimized based on measurable actions like leads, clicks, sales, or conversions. It helps businesses improve visibility, attract targeted audiences, generate qualified leads, and maximize return on advertising investment effectively."
          }
        },
        {
          "@type": "Question",
          "name": "How much budget do I need to start a PPC campaign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PPC campaign budgets depend on your industry, competition, business goals, and target audience. We create customized strategies suitable for both small and large businesses, ensuring your budget is allocated efficiently to maximize reach, lead generation, and overall campaign performance."
          }
        },
        {
          "@type": "Question",
          "name": "Which platforms do you run PPC ads on?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We run PPC campaigns across multiple platforms including Google Ads, Meta Ads (Facebook and Instagram), LinkedIn Ads, YouTube Ads, and other relevant advertising networks. Platform selection depends on your business objectives, audience behavior, and the type of conversions you want to achieve."
          }
        },
        {
          "@type": "Question",
          "name": "Is performance marketing suitable for small businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, performance marketing is highly suitable for small businesses because it focuses on measurable outcomes and controlled spending. It allows businesses to target specific audiences, track campaign performance in real time, optimize budgets efficiently, and generate qualified leads without unnecessary advertising expenses."
          }
        },
        {
          "@type": "Question",
          "name": "How is performance marketing different from regular digital marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Regular digital marketing focuses broadly on brand visibility and online presence, while performance marketing is centered around measurable actions like leads, conversions, and sales. Every campaign is continuously optimized using data and analytics to improve ROI and deliver trackable business outcomes."
          }
        },
        {
          "@type": "Question",
          "name": "Do you create the ad content and landing pages too?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide complete campaign support including ad creatives, copywriting, landing page development, audience targeting, and conversion optimization. Our approach ensures that both the advertisements and landing pages work together effectively to improve engagement, lead quality, and campaign performance."
          }
        }
      ]
    };
  
  return (
    <Layout>
      <div className="pg-performance-marketing">
      <Head>
        <title>Performance Marketing Companies | Performance Marketing Services</title>
        <meta name="description" content="Looking for top performance marketing companies? We offer result-driven performance marketing services including PPC, social media ads, and lead generation." />
        <meta name="keywords" content="PPC Marketing, PPC Advertising Company, Pay-Per-Click, pay per click advertising, PPC Management, PPC Advertising Agency, PPC services, PPC campaign" />
        <link rel="canonical" href="https://www.priyamconsultancy.com/performance-marketing/" />

        {/* Open Graph */}
        <meta property="og:title" content="Performance Marketing Companies | Performance Marketing Services" />
        <meta property="og:description" content="Looking for top performance marketing companies? We offer result-driven performance marketing services including PPC, social media ads, and lead generation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.priyamconsultancy.com/performance-marketing/" />
        <meta property="og:image" content="https://www.priyamconsultancy.com/img/performance-marketing.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Performance Marketing Companies | Performance Marketing Services" />
        <meta name="twitter:description" content="Looking for top performance marketing companies? We offer result-driven performance marketing services including PPC, social media ads, and lead generation." />
        <meta name="twitter:image" content="https://www.priyamconsultancy.com/img/performance-marketing.png" />

        {/* ✅ All Schemas - Array-ஐ loop போட்டு render பண்றோம் */}
      {/* Schema */}
         <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

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