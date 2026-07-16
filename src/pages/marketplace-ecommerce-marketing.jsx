import '../css/pages-common.css';
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import BlogSection from "../components/BlogSection";
import CTASection from "../components/HomePage/CTA";
const banner = "/img/marketplace-ecommerce-marketing.webp";
import ServiceSection from "../components/MarketplaceEcommerenceService/ServiceSection";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';


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
  { num: "01", icon: <img src="/img/icons/svc-email-strategy.svg" alt="Email Strategy and Planning" width="28" height="28" />, subtitle: "Brand Presence", title: "Email Strategy & Planning", desc: "We begin with a complete audit and strategy blueprint defining your brand voice, identifying audience segments, and setting clear campaign goals. From welcome sequences to retention loops, we build smart strategies that power long-term growth.", },
  { num: "02", icon: <img src="/img/icons/svc-automated-email-flows.svg" alt="Automated Email Flows" width="28" height="28" />, subtitle: "Visual Identity", title: "Automated Email Flows", desc: "Turn your funnel into a conversion machine. We set up advanced automated flows such as welcome series, cart recovery, post-purchase nurture, reactivation campaigns, and more, ensuring you never miss a chance to convert.", },
  { num: "03", icon: <img src="/img/icons/svc-email-design-personalization.svg" alt="Email Design Personalization and Optimization" width="28" height="28" />, subtitle: "Paid Campaigns", title: "Email Design, Personalization & Optimization", desc: "Our team creates visually engaging, mobile-friendly email templates paired with persuasive copy. Through segmentation, personalization, and performance optimization, we ensure every email delivers maximum impact.", },
  { num: "04", icon: <img src="/img/icons/svc-whatsapp-campaign.svg" alt="WhatsApp Campaign Strategy and Setup" width="28" height="28" />, subtitle: "Community Building", title: "WhatsApp Campaign Strategy & Setup", desc: "We help businesses implement structured WhatsApp marketing campaigns based on their communication goals. This includes audience planning, message framework development, and campaign execution strategy.", },
  { num: "05", icon: <img src="/img/icons/svc-meta-whatsapp.svg" alt="Meta Verified WhatsApp Marketing" width="28" height="28" />, subtitle: "Partnerships", title: "Meta Verified WhatsApp Marketing", desc: "We provide official WhatsApp Business API setup and campaign management with verified business identity, enabling secure, scalable, and compliant customer communication.", },
  { num: "06", icon: <img src="/img/icons/svc-bulk-whatsapp.svg" alt="Bulk WhatsApp Marketing Campaigns" width="28" height="28" />, subtitle: "Insights & ROI", title: "Bulk WhatsApp Marketing Campaigns", desc: "For businesses seeking quick outreach, we execute bulk WhatsApp campaigns for promotions, announcements, and customer updates, ensuring fast and wide message delivery.", },
];

const PROCESS_STEPS = [
  { step: "01", title: "Discover", phase: "Discover", desc: "We begin by understanding your business model, products, target audience, customer journey, and current ecommerce and marketplace presence in detail. This helps us define clear goals and align your ecommerce marketing strategy with measurable growth objectives, platform opportunities, and long-term business scalability.", bullets: [] },
  { step: "02", title: "Research & Analyze", phase: "Research & Analyze", desc: "We conduct in-depth research including keyword analysis, competitor benchmarking, pricing insights, customer behavior patterns, and marketplace trends. This ensures your ecommerce marketing strategy is data-driven, competitive, audience-focused, and strategically positioned to capture demand effectively across multiple ecommerce and marketplace platforms.", bullets: [] },
  { step: "03", title: "Plan & Strategize", phase: "Plan & Strategize", desc: "Based on gathered insights, we create a structured roadmap covering ecommerce marketing campaigns, marketplace growth strategies, content direction, promotional planning, and advertising execution. Every activity is aligned with clear business goals focused on improving visibility, audience engagement, customer acquisition, and long-term conversion growth across all digital channels.", bullets: [] },
  { step: "04", title: "Execute & Optimize", phase: "Execute & Optimize", desc: "We implement campaigns across ecommerce platforms and marketplaces, including product listing optimization, paid advertising campaigns, SEO improvements, and conversion-focused enhancements. Continuous monitoring, testing, and strategic refinements ensure stronger performance, improved customer engagement, higher conversions, and consistent growth across all active sales and marketing channels.", bullets: [] },
  { step: "05", title: "Monitor & Scale", phase: "Monitor & Scale", desc: "We continuously track performance metrics including website traffic, product rankings, customer engagement, conversions, return on ad spend, and overall ROI. Using real-time analytics and marketplace insights, we optimize strategies, scale high-performing campaigns, improve operational efficiency, and strengthen your ecommerce marketing performance for sustainable long-term business growth.", bullets: [] },
];

const HOW_WE_WORK = [
  { icon: <img src="/img/icon/hww-platform-strategy.webp" alt="Platform-Specific Strategy" width="28" height="28" />, title: "Platform-Specific Strategy", desc: "Every marketplace operates differently, with unique algorithms and ranking factors. We tailor ecommerce marketing strategies for each platform to maximize visibility, performance, and consistent sales growth." },
  { icon: <img src="/img/icon/hww-expert-execution.webp" alt="Expert Execution" width="28" height="28" />, title: "Expert Execution", desc: "With deep expertise as an amazon marketing agency and marketplace product listing service provider, we execute every strategy with precision, ensuring optimized listings, strong positioning, and improved conversions." },
  { icon: <img src="/img/icon/hww-performance-drivens.webp" alt="Performance-Driven Approach" width="28" height="28" />, title: "Performance-Driven Approach", desc: "We track key metrics including rankings, traffic, conversions, and ROI. Our ecommerce marketing strategies are continuously refined using data insights to improve performance and maximize overall business results." },
];

const faqData = [
  { q: "What does an ecommerce marketing service include?", a: "Ecommerce marketing services include SEO, product listing optimization, performance marketing, marketplace management, social media promotion, email marketing, conversion optimization, and analytics tracking. The goal is to improve product visibility, increase traffic, generate sales, and strengthen overall online store performance effectively." },
  { q: "How can ecommerce SEO improve my sales?", a: " Ecommerce SEO improves product visibility on search engines by optimizing product pages, keywords, technical structure, and user experience. Better search rankings attract high-intent customers, increase organic traffic, improve product discoverability, and contribute to higher conversions and long-term online sales growth." },
  { q: "What is marketplace listing optimization?", a: " Marketplace listing optimization involves improving product titles, descriptions, keywords, images, attributes, and overall listing structure on platforms like Amazon and Flipkart. This helps products rank better in marketplace searches, attract more customers, improve click-through rates, and increase overall sales performance." },
  { q: "Can you help increase sales on multiple marketplaces?", a: "Yes, we help businesses improve visibility and sales across multiple marketplaces including Amazon, Flipkart, Meesho, and other ecommerce platforms. Our strategies focus on listing optimization, advertising, pricing analysis, content improvement, and performance tracking to maximize marketplace growth and conversions." },
  { q: "Do you provide Amazon PPC services?", a: " Yes, we manage Amazon PPC campaigns focused on improving product visibility, increasing conversions, and maximizing advertising efficiency. Our services include keyword targeting, campaign optimization, bid management, competitor analysis, and performance tracking to improve return on advertising spend and marketplace sales performance." },
  { q: "How does PCS help ecommerce brands grow?", a: "PCS helps ecommerce brands grow through SEO, marketplace optimization, paid advertising, conversion-focused strategies, content marketing, and performance analytics. Our approach focuses on improving visibility, customer engagement, operational efficiency, and sales scalability to support sustainable long-term ecommerce business growth." },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" id="hero">

      {/* LEFT CONTENT */}
      <div className="hero-left">
        <div className="h-badge"><div className="badge-dot" />Revenue Expansion </div>
        <h1 className="hero-heading" style={{fontWeight: '600'}}>
          Scaling Brands Across
          <span className="hl lined">Marketplace </span> & E-commerce  Marketing
        </h1>
        <p className="hero-sub">
          At PCS, we help brands scale through result-driven ecommerce marketing and marketplace growth strategies. As a performance-focused ecommerce marketing agency and digital marketing agency for ecommerce, we combine data, creativity, and platform expertise to drive visibility, traffic, and conversions. </p>        <div className="hero-actions">
          <a className="btn-fill" href="/contact-us">Explore More <span className="btn-arrow">›</span></a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-right">
        <img
          src={banner}
          alt="Email & WhatsApp Marketing Illustration"
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
      <div className="ap2-inner">
        <div className="ap-left">
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Approach in</div>
          </div>
          <h2 className="ap2-heading">Strategic <span>Marketplace & E-commerce </span> Marketing Growth That Drives Sales</h2>
          <p className="ap-intro">
            In today’s competitive digital landscape, success depends on strong execution across both your website and every marketplace platform you sell on. We build structured ecommerce marketing strategies focused on scalable business growth.
          </p>
          <p className="ap-intro">
            As a trusted ecommerce marketing agency, we focus on performance-driven campaigns, product listing optimization, and data-backed decision-making. Our strategies are designed to improve visibility, engagement, and conversion performance consistently across channels.
          </p>
          <p className="ap-intro">
            We analyze customer behavior, competitor positioning, and platform algorithms to create high-impact marketplace strategies. Whether your goal is better rankings, higher conversions, or increased sales, we deliver measurable ecommerce marketing outcomes.
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


// function Services() {
//   return (
//     <section className="smm-svc">
//       <div className="smm-svc-dots" />
//       <div className="smm-svc-glow smm-ssvg1" />
//       <div className="smm-svc-glow smm-ssvg2" />
//       <div className="smm-svc-hdr">
//         <div className="partners-header1">
//           <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Specialized Email Marketing Services</div>
//         </div>
//         <h2 className="smm-svc-h2">Two Powerful Channels. <span><i>One Goal</i></span> - Customer Growth.</h2>
//         <p className="smm-svc-sub">
//          We provide Email and WhatsApp marketing services to engage audiences and drive measurable business growth.
//         </p>

//       </div>
//       <div className="smm-svc-panels">
//         {SERVICES.map((svc, i) => <ServicePanel key={svc.num} svc={svc} index={i} />)}
//       </div>
//     </section>
//   );
// }

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
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Proven Marketplace & E-commerce Marketing Process</h2>
        </div>
        <h3 className="smm-tp-h2">List Better. <em> <i>Rank Higher. </i></em>Sell More.</h3>

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
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Focus on Your Results </h2>
        </div>
        <h3 className="smm-hww-h2">Optimize Listings. <span><i>Drive Traffic.</i></span> Increase Sales.</h3>
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
export default function PcsSmmPage() {

  const schemaData = [

    //  Breadcrumb List Schema
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
            "@id": "https://www.priyamconsultancy.com/marketplace-ecommerce-marketing/",
            "name": "marketplace-ecommerce-marketing"
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

    // SERVICE PAGE SCHEMA
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.priyamconsultancy.com/marketplace-ecommerce-marketing/#service",
      "name": "Marketplace Ecommerce Marketing",
      "serviceType": "Marketplace Ecommerce Marketing Services",
      "url": "https://www.priyamconsultancy.com/marketplace-ecommerce-marketing/",
      "description": "Priyam Consultancy provides professional marketplace ecommerce marketing services including Amazon marketing, Flipkart marketing, product listing optimization, ecommerce advertising, marketplace management and online sales growth services across India.",
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

    //  Product Schema

    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "marketplace-ecommerce-marketing",
      "image": ["https://www.priyamconsultancy.com/img/marketplace-ecommerce-marketing.png"],
      "description": "Best marketplace ecommerce marketing services in Coimbatore offering Amazon marketing, Flipkart marketing, marketplace listing optimization, ecommerce SEO, Amazon PPC management, conversion optimization and online sales growth solutions.",
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
        "reviewCount": "4428"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.priyamconsultancy.com/marketplace-ecommerce-marketing/",
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
        "name": "What does an ecommerce marketing service include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ecommerce marketing services include SEO, product listing optimization, performance marketing, marketplace management, social media promotion, email marketing, conversion optimization, and analytics tracking. The goal is to improve product visibility, increase traffic, generate sales, and strengthen overall online store performance effectively."
        }
      }, {
        "@type": "Question",
        "name": "How can ecommerce SEO improve my sales?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ecommerce SEO improves product visibility on search engines by optimizing product pages, keywords, technical structure, and user experience. Better search rankings attract high-intent customers, increase organic traffic, improve product discoverability, and contribute to higher conversions and long-term online sales growth."
        }
      }, {
        "@type": "Question",
        "name": "What is marketplace listing optimization?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Marketplace listing optimization involves improving product titles, descriptions, keywords, images, attributes, and overall listing structure on platforms like Amazon and Flipkart. This helps products rank better in marketplace searches, attract more customers, improve click-through rates, and increase overall sales performance."
        }
      }, {
        "@type": "Question",
        "name": "Can you help increase sales on multiple marketplaces?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we help businesses improve visibility and sales across multiple marketplaces including Amazon, Flipkart, Meesho, and other ecommerce platforms. Our strategies focus on listing optimization, advertising, pricing analysis, content improvement, and performance tracking to maximize marketplace growth and conversions."
        }
      }, {
        "@type": "Question",
        "name": "Do you provide Amazon PPC services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we manage Amazon PPC campaigns focused on improving product visibility, increasing conversions, and maximizing advertising efficiency. Our services include keyword targeting, campaign optimization, bid management, competitor analysis, and performance tracking to improve return on advertising spend and marketplace sales performance."
        }
      }, {
        "@type": "Question",
        "name": "How does PCS help ecommerce brands grow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PCS helps ecommerce brands grow through SEO, marketplace optimization, paid advertising, conversion-focused strategies, content marketing, and performance analytics. Our approach focuses on improving visibility, customer engagement, operational efficiency, and sales scalability to support sustainable long-term ecommerce business growth."
        }
      }]
    }

  ]


  return (
    <Layout>
      <div className="pg-marketplace-ecom">
      <Head>
        <title>Ecommerce & Marketplace Marketing Agency in India | PCS</title>
        <meta name="description" content="Increase ecommerce sales with our marketplace and ecommerce marketing services. From ecommerce SEO to listing optimization, PCS drives scalable growth. " />
        <meta name="keywords" content="Social Media Marketing, SMM Services, Social Media Marketing Agency, Social Media Advertising, Social Media Marketing Services, Social Media Marketing Company, Social Media Management Agency, Social Media Management Services, Social Media Marketing Companies" />
        <link rel="canonical" href="https://www.priyamconsultancy.com/marketplace-ecommerce-marketing" />
        {/* Open Graph */}
        <meta property="og:title" content="Ecommerce & Marketplace Marketing Agency in India | PCS" />
        <meta property="og:description" content="Increase ecommerce sales with our marketplace and ecommerce marketing services. From ecommerce SEO to listing optimization, PCS drives scalable growth. " />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.priyamconsultancy.com/marketplace-ecommerce-marketing" />
        <meta property="og:image" content="https://www.priyamconsultancy.com/img/marketplace-ecommerce-marketing.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ecommerce & Marketplace Marketing Agency in India | PCS" />
        <meta name="twitter:description" content="Increase ecommerce sales with our marketplace and ecommerce marketing services. From ecommerce SEO to listing optimization, PCS drives scalable growth. " />
        <meta name="twitter:image" content="https://www.priyamconsultancy.com/img/marketplace-ecommerce-marketing.png" />
        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Head>
      <Hero />
      <ApproachSection />
      <ServiceSection />
      <Process />
      <HowWeWork />
      <FAQSection />
      <BlogSection />
      <CTASection />
      </div>
    </Layout>
  );
}