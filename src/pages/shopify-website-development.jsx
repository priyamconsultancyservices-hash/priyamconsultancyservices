import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import CTASection from "../components/HomePage/CTA";
import BlogSection from "../components/BlogSection";
import Layout from '@theme/Layout';
const banner = "/img/shopify-website.webp";
import Head from '@docusaurus/Head';

function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/shopify-website-development/";
  const imageUrl = "https://www.priyamconsultancy.com/img/static-website.png";

  return (
    <Head>
      {/* ── Primary Meta ── */}
      <title>Shopify Website Design Company | Build Powerful Online Stores   </title>
      <meta name="description" content="shopify website design services to create stunning, and high-converting online stores that enhance user experience and drive more sales. " />
      <meta name="keywords" content=" shopify website design, shopify website development services, shopify website design services, shopify ecommerce website development, shopify website development company india, shopify website development company coimbatore, shopify website development cost, Shopify SEO services, Shopify store setup " />
      <link rel="canonical" href="https://www.priyamconsultancy.com/shopify-website-development/" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Shopify Website Design Company | Build Powerful Online Stores   " />
      <meta property="og:description" content="shopify website design services to create stunning, and high-converting online stores that enhance user experience and drive more sales. " />
      <meta property="og:url" content="https://www.priyamconsultancy.com/shopify-website-development/" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="PCS Business Solution" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Shopify Website Design Company | Build Powerful Online Stores   " />
      <meta name="twitter:description" content="shopify website design services to create stunning, and high-converting online stores that enhance user experience and drive more sales. " />
      <meta name="twitter:image" content={imageUrl} />

      {/* ── Breadcrumb List Schema ── */}
      <script type="application/ld+json">{`
    {
 "@context":"https://schema.org",
 "@type":"BreadcrumbList",
 "itemListElement":[
   {
     "@type":"ListItem",
     "position":1,
     "item":{
       "@id":"https://www.priyamconsultancy.com/",
       "name":"Home"
     }
   },
   {
     "@type":"ListItem",
     "position":2,
     "item":{
       "@id":"https://www.priyamconsultancy.com/shopify-website-development/",
       "name":"shopify-website-development"
     }
   }
 ]
}


      `}</script>

      {/* ── Organization Schema ── */}
      <script type="application/ld+json">{`
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
}


      `}</script>

      {/* ── Service Schema ── */}
      <script type="application/ld+json">{`
  {
  "@context":"https://schema.org",
  "@type":"Service",
  "@id":"https://www.priyamconsultancy.com/shopify-website-development/#service",
  "name":"Shopify Website Development",
  "serviceType":"Shopify Website Development Services",
  "url":"https://www.priyamconsultancy.com/shopify-website-development/",
  "description":"Priyam Consultancy provides professional Shopify website development services including custom Shopify store setup, ecommerce website design, Shopify theme customization, payment gateway integration, product management and scalable online store solutions across India.",
  "provider":{
    "@type":"Organization",
    "name":"Priyam Consultancy Services",
    "url":"https://www.priyamconsultancy.com/",
    "logo":{
      "@type":"ImageObject",
      "url":"https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png"
    }
  },
  "areaServed":{
    "@type":"Country",
    "name":"India"
  }
      }


      `}</script>

      {/* ── Product Schema (Business Registration) ── */}
      <script type="application/ld+json">{`
   {
"@context": "https://schema.org/",
"@type": "Product",
"name": "shopify-website-development",
"image": ["https://www.priyamconsultancy.com/img/shopify.png"],
"description": "Best Shopify website development services in Coimbatore offering Shopify store setup, custom ecommerce website development, Shopify theme customization, payment gateway integration, product management and scalable online store solutions.",
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
"reviewCount": "4718"
},
"offers": {
"@type": "Offer",
"url": "https://www.priyamconsultancy.com/shopify-website-development/",
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
}


      `}</script>

      {/* ── FAQ Schema (Business Registration) ── */}
      <script type="application/ld+json">{`
 { 
  "@context": "https://schema.org", 
  "@type": "FAQPage", 
  "mainEntity": [{ 
    "@type": "Question", 
    "name": "What is Shopify website design?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Shopify website design is the process of creating a visually appealing, user-friendly, and conversion-focused online store on the Shopify platform.
" 
    } 
  },{ 
    "@type": "Question", 
    "name": "Do you provide custom Shopify store design?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, we provide fully customized Shopify store design services tailored to your branding, products, and customer journey." 
    }
  },{ 
    "@type": "Question", 
    "name": "Is Shopify good for small businesses?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, Shopify is a strong choice for small and growing businesses because it is easy to manage, secure, and scalable." 
    } 
  },{ 
    "@type": "Question", 
    "name": "Do you provide Shopify SEO services?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, our Shopify SEO services include on-page optimization, speed improvement, structured data implementation, and analytics tracking." 
    } 
 },{ 
    "@type": "Question", 
    "name": "Do you provide support after website launch?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, we offer ongoing maintenance, updates, monitoring, and performance optimization after launch." 
    } 
 },{ 
    "@type": "Question", 
    "name": "How long does it take to build a Shopify website?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "The timeline depends on the project scope, design complexity, and product volume. Standard Shopify website development usually takes 2–6 weeks." 
    } 
    }] 
}

      `}</script>
    </Head>
  );
}



const offerData = [
  { img: "/img/icon/shopify-seo.webp", label: "SEO Services", title: "SEO Services & Optimization", desc: "We implement technical SEO, structured metadata, speed optimization, schema configuration, and analytics integration to improve search visibility and organic growth.", tags: ["Visible", "Optimized", "Structured", "SearchFriendly"] },
  { img: "/img/icon/shopify-store.webp", label: " Store Setup", title: "Complete Store Setup", desc: "From domain configuration to product uploads, collections, payment gateway integration, and shipping setup, we provide end-to-end Shopify store setup services for a seamless launch.", tags: ["Configured ", "Integrated", "Organized", "LaunchReady"] },
  { img: "/img/icon/shopify-maintenance.webp", label: " Maintenance", title: "Ongoing Support & Maintenance", desc: "As a reliable Shopify website development company in India, we offer continuous updates, troubleshooting, performance monitoring, and strategic improvements for long-term business scalability.", tags: ["Reliable", "Consistent", "Supportive", "Maintained"] },
  { img: "/img/icon/shopify-design.webp", label: "Responsive Design", title: "Professional Shopify Website Design", desc: "We create high-performing Shopify website design solutions customized to your products, brand positioning, and customer journey — ensuring strong visual appeal and higher conversion rates.", tags: ["Customized", "Engaging", "Branded", "ConversionFocused"] },
  { img: "/img/icon/shopify-ecommerce.webp", label: " Ecommerce", title: "Shopify Ecommerce Website Development", desc: "Our Shopify ecommerce website development approach supports all models with custom pricing structures, app integrations, automation workflows, and scalable architecture.", tags: ["Optimized", "Flexible", "Automated", "Scalable"] },
];

const nodePositions = [
  { top: "5%", left: "50%" },
  { top: "22%", left: "87%" },
  { top: "73%", left: "82%" },
  { top: "73%", left: "18%" },
  { top: "22%", left: "13%" },
];

const connectorAngles = [-90, -18, 54, 126, 198];

const includedData = [
  { num: "01", icon: "/img/icon/shopify-strategy.webp", title: "Business Strategy & Planning", desc: "We analyze your products, target audience, revenue model, and competition to define a conversion-focused Shopify architecture aligned with measurable growth goals.", tags: [{ t: "UI Design", c: "t-orange" }, { t: "UX Strategy", c: "t-blue" }, { t: "Brand Alignment", c: "t-orange" }, { t: "Typography", c: "t-blue" }] },
  { num: "02", icon: "/img/icon/shopify-store-design.webp", title: "Custom Shopify Store Design", desc: "Structured collections, intelligent navigation systems, optimized product pages, mobile-responsive layouts, and conversion-driven checkout flow enhance user experience and purchasing efficiency.", tags: [{ t: "Content Hierarchy", c: "t-orange" }, { t: "Info Architecture", c: "t-blue" }, { t: "CTA Placement", c: "t-orange" }, { t: "Navigation Flow", c: "t-blue" }] },
  { num: "03", icon: "/img/icon/shopify-payment.webp", title: "Secure Payment & App Integration", desc: "We integrate trusted payment gateways, shipping solutions, CRM tools, marketing apps, and third-party integrations to streamline operations.", tags: [{ t: "Mobile-First", c: "t-orange" }, { t: "Cross-Device", c: "t-blue" }, { t: "Fluid Layouts", c: "t-orange" }, { t: "Touch UX", c: "t-blue" }] },
  { num: "04", icon: "/img/icon/shopify-seo-services.webp", title: "SEO Services", desc: "On-page SEO configuration, structured data implementation, speed enhancement, keyword mapping, and analytics setup improve search rankings and performance tracking.", tags: [{ t: "Brand Guidelines", c: "t-orange" }, { t: "Colour System", c: "t-blue" }, { t: "Visual Identity", c: "t-orange" }, { t: "Brand Voice", c: "t-blue" }] },
  { num: "05", icon: "/img/icon/shopify-performance.webp", title: "Performance & Scalability Optimization", desc: "Database structuring, app performance audits, cloud scalability readiness, and checkout optimization ensure long-term operational efficiency and reliability.", tags: [{ t: "Page Speed", c: "t-orange" }, { t: "Core Web Vitals", c: "t-blue" }, { t: "SEO Architecture", c: "t-orange" }, { t: "Conversion Rate", c: "t-blue" }] },
];

const processSteps = [
  { num: "01", icon: "/img/icon/shopify-planning.webp", title: "Requirement Analysis & Planning", desc: "We understand your brand positioning, operational requirements, competitors, and business objectives to define a scalable Shopify development roadmap", tags: ["Business Goals", "Audience Research", "Competitor Analysis"], last: false },
  { num: "02", icon: "/img/icon/shopify-architecture.webp", title: "Store Architecture & Wireframing", desc: "Structured layouts and customer-focused navigation flows are designed to enhance engagement and maximize conversions.", tags: ["Wireframes", "Site Architecture", "Content Planning"], last: false },
  { num: "03", icon: "/img/icon/shopify-web-store-design.webp", title: "Shopify Website Design & Development", desc: "Structured layouts and customer-focused navigation flows are designed to enhance engagement and maximize conversions.", tags: ["Visual Design", "Brand System", "UX Prototyping"], last: false },
  { num: "04", icon: "/img/icon/shopify-payment-gateway.webp", title: "App & Integration Setup", desc: "Payment gateways, shipping systems, CRM tools, marketing automation platforms, and analytics integrations are configured seamlessly.", tags: ["Responsive Code", "SEO Structure", "Performance"], last: false },
  { num: "05", icon: "/img/icon/shopify-testing.webp", title: "Testing & Optimization", desc: "Comprehensive testing ensures checkout performance, mobile responsiveness, speed optimization, and secure transaction validation.", tags: ["Cross-Browser", "Speed Testing", "QA Review"], last: false },
  { num: "06", icon: "/img/icon/shopify-launch.webp", title: "Launch & Post-Launch Support", desc: "Ongoing SEO services, updates, monitoring, and maintenance ensure consistent growth and operational stability.", tags: ["Go Live", "Monitoring", "Ongoing Support"], last: true },
];

const whyData = [
  { cls: "pcs-fb-box-tl", icon: "/img/icon/shopify-feat1.webp", title: "Custom Shopify Website Design", desc: "Strategic, conversion-focused Shopify website design services tailored to your brand identity, product structure, and target audience behavior." },
  { cls: "pcs-fb-box-tr", icon: "/img/icon/shopify-feat2.webp", title: "Complete Store Setup", desc: "End-to-end Shopify store setup including theme customization, product configuration, collections structuring, tax setup, and payment integration." },
  { cls: "pcs-fb-box-bl", icon: "/img/icon/shopify-feat3.webp", title: "Scalable Architecture", desc: "Flexible Shopify ecommerce website development supporting B2B, B2C, and D2C business models with automation capabilities and growth-ready infrastructure." },
  { cls: "pcs-fb-box-br", icon: "/img/icon/shopify-feat4.webp", title: "Advanced SEO Services", desc: "Technical SEO implementation, speed optimization, structured metadata, analytics tracking, and performance monitoring for improved visibility and sustainable traffic growth." },
];

const faqData = [
  { q: "What is Shopify website design?", a: "Shopify website design is the process of creating a visually appealing, user-friendly, and conversion-focused online store on the Shopify platform." },
  { q: "Do you provide custom Shopify store design?", a: "Yes, we provide fully customized Shopify store design services tailored to your branding, products, and customer journey." },
  { q: "Is Shopify good for small businesses?", a: "Yes, Shopify is a strong choice for small and growing businesses because it is easy to manage, secure, and scalable." },
  { q: "Do you provide Shopify SEO services?", a: "Yes, our Shopify SEO services include on-page optimization, speed improvement, structured data implementation, and analytics tracking." },
  { q: "Do you provide support after website launch?", a: "Yes, we offer ongoing maintenance, updates, monitoring, and performance optimization after launch." },
  { q: "How long does it take to build a Shopify website?", a: "The timeline depends on the project scope, design complexity, and product volume. Standard Shopify website development usually takes 2–6 weeks." },
];

export default function PCSWebsite() {
  const [activeOffer, setActiveOffer] = useState(0);
  const [openTab, setOpenTab] = useState(0);

  // Auto-loop Our Services orbit nodes
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveOffer(prev => (prev + 1) % offerData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Auto-open Our Included accordion tabs
  useEffect(() => {
    const timer = setInterval(() => {
      setOpenTab(prev => (prev + 1) % includedData.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleOfferSelect = (i) => setActiveOffer(i);
  const handleTabToggle = (i) => setOpenTab(openTab === i ? -1 : i);

  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", msg: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
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

  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <Layout>
      <>
      <SEOHead />
        {/* SECTION 1: HERO */}
        <section className="wd-hero">
          <div className="wd-hero-bg-radial" />
          <div className="wd-hero-bg-grid" />

          {/* LEFT */}
          <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column" }}>
            <div className="badge"><div className="badge-dot" />Shopify Website</div>
            <h1 className="wd-hero-heading">
              Build a High-Performance
              <span className="orange lined" style={{ marginLeft: "12px" }}>Shopify</span> Ecommerce Website

            </h1>
            <p className="wd-hero-sub">
              Your Shopify store should attract, engage, and convert customers effortlessly. As an experienced Shopify website development company in Coimbatore, we design and develop scalable Shopify ecommerce solutions focused on performance, security, and measurable business growth..
            </p>
            <div className="wd-hero-actions">
              <a className="wd-btn-fill" href="/contact-us">Get a Free Quote <span className="wd-btn-arrow">›</span></a>
            </div>
          </div>

          {/* RIGHT — hero image */}
          <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center", animation: "fadeUp .9s .15s ease both" }}>
            <img
              src={banner}
              alt="Shopify Website Development"
              className="wd-hero-img"
            />
          </div>
        </section>

        {/* SECTION 2: OUR APPROACH */}
        <section className="wd-approach" id="approach">
          <div className="wd-ap-inner">

            {/* LEFT CONTENT */}
            <div>
              <div className="partners-header1">
                <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Strategy for Shopify Website Development
                </div>
              </div>
              <h2 className="wd-ap-heading">Strategic,  <span>Conversion-Driven  </span> Shopify Solutions</h2>
              <p className="wd-ap-intro">
                Successful Shopify ecommerce website development requires structured store architecture, smooth navigation, secure checkout systems, and performance-focused design that enhances user experience and business scalability.
              </p>
              <p className="wd-ap-intro">
                Our Shopify website development services focus on creating optimized online stores that improve usability, strengthen brand presence, and support long-term revenue growth.
              </p>
              <p className="wd-ap-intro">
                From Shopify store setup to advanced customization, we build flexible and scalable ecommerce websites aligned with your workflow, operational goals, and digital growth strategy.

              </p>
            </div>

            {/* RIGHT FORM */}
            <div className="wd-ap-form-wrap">
              <div className="wd-ap-form-card">
                <div className="wd-form-eyebrow">
                  <span className="wd-form-eyebrow-line" />Your Growth, Our Mission<span className="wd-form-eyebrow-line" />
                </div>
                <div className="wd-form-title">Get Your <span>Free</span> Quote</div>

                <form onSubmit={handleSubmit}>
                  <div className="wd-fl-row">
                    <div className="wd-fl-group">
                      <label className="wd-fl-label">Your Name</label>
                      <div style={{ position: "relative" }}>
                        <span className="wd-fl-icon">👤</span>
                        <input className="wd-fl-input" type="text" name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="wd-fl-group">
                      <label className="wd-fl-label">Company</label>
                      <div style={{ position: "relative" }}>
                        <span className="wd-fl-icon">🏢</span>
                        <input className="wd-fl-input" type="text" name="company" placeholder="Company name" value={form.company} onChange={handleChange} />
                      </div>
                    </div>
                  </div>

                  <div className="wd-fl-group">
                    <label className="wd-fl-label">Email Address</label>
                    <div style={{ position: "relative" }}>
                      <span className="wd-fl-icon">✉️</span>
                      <input className="wd-fl-input" type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="wd-fl-group">
                    <label className="wd-fl-label">Mobile Number</label>
                    <div className="wd-phone-row">
                      <div className="wd-phone-flag"><span>📞</span></div>
                      <input className="wd-fl-input" type="tel" name="phone" placeholder="Mobile number" value={form.phone} onChange={handleChange} maxLength="10" pattern="[0-9]{10}" required />
                    </div>
                  </div>

                  <div className="wd-fl-group wd-textarea-group">
                    <label className="wd-fl-label">Message</label>
                    <div style={{ position: "relative" }}>
                      <span className="wd-fl-icon" style={{ top: "0.9rem", transform: "none" }}>💬</span>
                      <textarea className="wd-fl-textarea" name="msg" placeholder="Tell us about your project..." value={form.msg} onChange={handleChange} />
                    </div>
                  </div>

                  <button type="submit" className="wd-ap-submit">
                    Get Free Consultation
                    <span className="wd-ap-submit-arrow">›</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHAT WE OFFER — ORBIT */}
        <section className="pcs-offer-section">
          <div className="pcs-offer-inner">
            <div className="partners-header1" style={{ marginBottom: '20px', textAlign: 'center' }}>
              <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>
                Key Uniqueness</h2>
            </div>
            <h3 className="pcs-offer-heading">Why Should You Choose us for <span><i>Shopify Website Design?</i></span></h3>
            <div className="pcs-offer-body">
              <div className="pcs-offer-left">
                <div className="pcs-orbit-wrap">
                  <div className="pcs-orbit-ring"></div>
                  {connectorAngles.map((angle, i) => (
                    <div key={i} className={`pcs-orbit-connector${activeOffer === i ? " active" : ""}`}
                      style={{ width: "calc(50% - 62px)", transform: `rotate(${angle}deg) translateY(-50%)` }}
                    ></div>
                  ))}
                  <div className="pcs-orbit-center">
                    <div className="pcs-orbit-center-name">PCS</div>
                    <div className="pcs-orbit-center-sub">Web Design</div>
                  </div>
                  {offerData.map((item, i) => (
                    <div key={i} className="pcs-orbit-node" style={{ top: nodePositions[i].top, left: nodePositions[i].left }} onClick={() => handleOfferSelect(i)}>
                      <div className={`pcs-orbit-node-box${activeOffer === i ? " active" : ""}`}>
                        <img src={item.img} alt={item.label} className="pcs-orbit-node-emoji" style={{ width: "32px", height: "32px", objectFit: "contain" }} />
                        <div className="pcs-orbit-node-lbl">{item.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pcs-offer-right">
                {activeOffer === -1 && (
                  <div className="pcs-offer-placeholder">
                    <div className="pcs-offer-placeholder-icon"><img src="/img/click-pointer.png" alt="click" style={{ width: "44px", height: "44px", objectFit: "contain", opacity: 0.35 }} /></div>
                    <div className="pcs-offer-placeholder-text">Click any box to view details</div>
                  </div>
                )}
                {offerData.map((item, i) => (
                  <div key={i} className={`pcs-offer-panel${activeOffer === i ? " active" : ""}`}>
                    <div className="pcs-offer-panel-bar"></div>
                    <div className="pcs-offer-panel-title-row">
                      <div className="pcs-offer-panel-icon"><img src={item.img} alt={item.title} style={{ width: "32px", height: "32px", objectFit: "contain" }} /></div>
                      <h4 className="pcs-offer-panel-title">{item.title}</h4>
                    </div>
                    <div className="pcs-offer-panel-divider"></div>
                    <div className="pcs-offer-panel-desc">{item.desc}</div>
                    <div className="pcs-offer-panel-tags">
                      {item.tags.map((tag, j) => <span key={j} className="pcs-offer-panel-tag">{tag}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHAT'S INCLUDED */}
        <section className="pcs-wi5-section">
          <div className="pcs-wi5-inner">
            <div className="pcs-offer-inner">
              <h2 className="partners-header1" style={{ marginBottom: '10px', textAlign: 'center' }}>
                <div className="partners-eyebrow" style={{ textAlign: 'center' }}>Our Expertise
                </div>
              </h2>
            </div>
            <h3 className="pcs-wi5-heading">What’s Included in Our  <span><i>Shopify Website</i></span> Development Services?</h3>
            <div className="pcs-wi5-tabs">
              {includedData.map((tab, i) => (
                <div key={i} className={`pcs-wi5-tab${openTab === i ? " open" : ""}`}>
                  <div className="pcs-wi5-tab-head" onClick={() => handleTabToggle(i)}>
                    <div className="pcs-wi5-tab-num">
                      <div className="pcs-wi5-tab-num-diamond"></div>
                      <span className="pcs-wi5-tab-num-text">{tab.num}</span>
                    </div>
                    <div className="pcs-wi5-tab-icon"><img src={tab.icon} alt={tab.title} style={{ width: "24px", height: "24px", objectFit: "contain" }} /></div>
                    <h4 className="pcs-wi5-tab-title">{tab.title}</h4>
                    <div className="pcs-wi5-tab-chev">
                      <img src="/img/chevron-down.png" alt="toggle" style={{ width: "14px", height: "14px", objectFit: "contain" }} />
                    </div>
                  </div>
                  <div className="pcs-wi5-tab-body">
                    <div className="pcs-wi5-tab-content">
                      <div className="pcs-wi5-tab-desc">{tab.desc}</div>
                      {/* <div className="pcs-wi5-tab-tags">
                      {tab.tags.map((t, j) => <span key={j} className={`pcs-wi5-tab-tag ${t.c}`}>{t.t}</span>)}
                    </div> */}
                    </div>
                    <div className="pcs-wi5-tab-progress"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: OUR PROCESS */}
        <section className="pcs-proc-section">
          <div className="pcs-proc-inner">
            <div className="pcs-proc-header">
              <div className="pcs-offer-inner">
                <div className="partners-header1" style={{ marginBottom: '10px', textAlign: 'center' }}>
                  <h2 className="partners-eyebrow" style={{ textAlign: 'center' }}>Workflow Process
                  </h2>
                </div>
              </div>
              <h3 className="pcs-proc-title">Our <span><i>Shopify Website</i></span> Development Process</h3>
            </div>
            <div className="pcs-proc-grid">
              {processSteps.map((step, i) => (
                <div className="pcs-proc-gc" key={i}>
                  <div className="pcs-proc-gc-top">
                    <div className="pcs-proc-gc-num">{step.num}</div>
                    <div className="pcs-proc-gc-icon"><img src={step.icon} alt={step.title} style={{ width: "32px", height: "32px", objectFit: "contain" }} /></div>
                  </div>
                  <h4 className="pcs-proc-gc-title">{step.title}</h4>
                  <div className="pcs-proc-gc-desc">{step.desc}</div>
                  {/* <div className="pcs-proc-gc-tags">
                  {step.tags.map((t, j) => <span key={j}>{t}</span>)}
                </div> */}
                </div>
              ))}
            </div>
          </div>
        </section>
 
        {/* SECTION 6: WHY */}
        <section className="pcs-fb-section">
          <div className="pcs-fb-inner">
            <div className="pcs-fb-header">
              <div className="pcs-offer-inner">
                <div className="partners-header1" style={{ marginBottom: '10px', textAlign: 'center' }}>
                  <h2 className="partners-eyebrow" style={{ textAlign: 'center' }}>Key Service Features
                  </h2>
                </div>
              </div>            <h3 className="pcs-fb-title">Features of our <span><i>Shopify Website</i></span> Development Services</h3>
            </div>
            <div className="pcs-fb-grid">
              <div className="pcs-fb-vline"></div>
              <div className="pcs-fb-hline"></div>
              <div className={`pcs-fb-box pcs-fb-box-tl`}>
                <div className="pcs-fb-icon"><img src={whyData[0].icon} alt={whyData[0].title} style={{ width: "28px", height: "28px", objectFit: "contain" }} /></div>
                <h4 className="pcs-fb-box-title">{whyData[0].title}</h4>
                <div className="pcs-fb-box-desc">{whyData[0].desc}</div>
              </div>
              <div className="pcs-fb-center-col">
                <div className="pcs-fb-center-circle">
                  <div className="pcs-fb-center-inner">
                    <div className="pcs-fb-center-icon"><img src="/img/priyam-consultancy-logo.png" alt="PCS" style={{ width: "80px", height: "80px", objectFit: "contain" }} /></div>
                  </div>
                </div>
              </div>
              <div className={`pcs-fb-box pcs-fb-box-tr`}>
                <div className="pcs-fb-icon"><img src={whyData[1].icon} alt={whyData[1].title} style={{ width: "28px", height: "28px", objectFit: "contain" }} /></div>
                <h4 className="pcs-fb-box-title">{whyData[1].title}</h4>
                <div className="pcs-fb-box-desc">{whyData[1].desc}</div>
              </div>
              <div className={`pcs-fb-box pcs-fb-box-bl`}>
                <div className="pcs-fb-icon"><img src={whyData[2].icon} alt={whyData[2].title} style={{ width: "28px", height: "28px", objectFit: "contain" }} /></div>
                <h4 className="pcs-fb-box-title">{whyData[2].title}</h4>
                <div className="pcs-fb-box-desc">{whyData[2].desc}</div>
              </div>
              <div className={`pcs-fb-box pcs-fb-box-br`}>
                <div className="pcs-fb-icon"><img src={whyData[3].icon} alt={whyData[3].title} style={{ width: "28px", height: "28px", objectFit: "contain" }} /></div>
                <h4 className="pcs-fb-box-title">{whyData[3].title}</h4>
                <div className="pcs-fb-box-desc">{whyData[3].desc}</div>
              </div>
            </div>
          </div>
        </section>

        {/* faq section */}
        <section className="faq-section" style={{ padding: '80px 0 0' }}>
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

       {/* blog section */}
        <BlogSection />


        {/* cta section */}
        <CTASection />

      </>
    </Layout>
  );
}