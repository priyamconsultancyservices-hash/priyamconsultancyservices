import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import CTASection from "../components/HomePage/CTA";
import BlogSection from "../components/BlogSection";
import Layout from '@theme/Layout';
const banner = "/img/custom-website-development.webp";
import Head from '@docusaurus/Head';

function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/custom-website-development/";
  const imageUrl = "https://www.priyamconsultancy.com/img/static-website.png";

  return (
    <Head>
      {/* ── Primary Meta ── */}
      <title>Custom Website Development | High-Performance Web Solutions </title>
      <meta name="description" content="Custom website development services designed to build powerful, responsive, and brand-focused websites that drive better results." />
      <meta name="keywords" content="custom website development services, custom website development india, custom website design and hosting, Custom Website Development in Coimbatore, custom web design Coimbatore, website redesign services Coimbatore " />
      <link rel="canonical" href="https://www.priyamconsultancy.com/custom-website-development/" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Custom Website Development | High-Performance Web Solutions " />
      <meta property="og:description" content="Custom website development services designed to build powerful, responsive, and brand-focused websites that drive better results." />
      <meta property="og:url" content="https://www.priyamconsultancy.com/custom-website-development/" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="PCS Business Solution" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Custom Website Development | High-Performance Web Solutions " />
      <meta name="twitter:description" content="Custom website development services designed to build powerful, responsive, and brand-focused websites that drive better results." />
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
       "@id":"https://www.priyamconsultancy.com/custom-website-development/",
       "name":"custom-website-development"
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
  "@id":"https://www.priyamconsultancy.com/custom-website-development/#service",
  "name":"Custom Website Development",
  "serviceType":"Custom Website Development Services",
  "url":"https://www.priyamconsultancy.com/custom-website-development/",
  "description":"Priyam Consultancy provides professional custom website development services including fully tailored website solutions, scalable web applications, dynamic websites, API integrations, CMS customization and end-to-end web development for businesses across India.",
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
"name": "custom-website-development",
"image": ["https://www.priyamconsultancy.com/img/custom-website-development.png"],
"description": "Best custom website development services in Coimbatore offering tailored web solutions, custom business websites, web application development, scalable website architecture, responsive design and SEO-friendly website development services.",
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
"reviewCount": "4762"
},
"offers": {
"@type": "Offer",
"url": "https://www.priyamconsultancy.com/custom-website-development/",
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
    "name": "Why should I choose a local web development company in Coimbatore?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Choosing a local web development company in Coimbatore gives you better communication, faster support, and a clearer understanding of your business needs and local market." 
    } 
  },{ 
    "@type": "Question", 
    "name": "What types of websites do you develop?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "We develop corporate websites, portfolio websites, service-based websites, landing pages, informational websites, and business websites based on your industry requirements." 
    }
  },{ 
    "@type": "Question", 
    "name": "What is custom website development?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Custom website development means building a website specifically for your business, with unique layouts, features, and functionality that match your goals." 
    } 
  },{ 
    "@type": "Question", 
    "name": "Do you provide ongoing maintenance and support?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, we provide ongoing maintenance, security updates, technical support, and performance monitoring to keep your website running smoothly." 
    } 
 },{ 
    "@type": "Question", 
    "name": "Will my website be mobile-friendly and SEO-ready?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, every website we build is fully responsive and developed with SEO best practices to improve user experience and search visibility." 
    } 
 },{ 
    "@type": "Question", 
    "name": "What features can be included in a custom website?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "A custom website can include contact forms, inquiry systems, analytics, blog sections, service pages, CRM integration, and other business-specific features." 
    } 
    }] 
}

      `}</script>
    </Head>
  );
}

const offerData = [
  { emoji: "/img/icon/custom-website-tailored.webp", label: "Tailored", title: "Tailored Website Solutions", desc: "Every business is unique. Our custom website design and hosting solutions are developed around your goals, target audience, and industry requirements. We create personalized, high-performing, scalable digital platforms aligned with your brand identity and long-term vision.", tags: ["Personalized", "Strategic", "Scalable", "Branded"] },
  { emoji: "/img/icon/custom-website-architecture.webp", label: "Architecture", title: "Scalable & Future-Ready Architecture", desc: "Our websites are built with scalable structures that allow seamless expansion, feature upgrades, and performance enhancements. Whether you require additional pages or functionality upgrades, your website adapts effortlessly as your business evolves.", tags: ["Expandable", "Flexible", "Futureproof", "Adaptive"] },
  { emoji: "/img/icon/custom-website-security.webp", label: "Security", title: "Performance & Security Optimization", desc: "Our custom website development services include speed optimization, secure hosting guidance, SSL configuration, and strict coding practices. We ensure your website remains stable, secure, and reliable while delivering an exceptional browsing experience.", tags: ["Optimized", "Secure", "Stable", "Reliable"] },
  { emoji: "/img/icon/custom-website-experience.webp", label: "Experience", title: "Conversion-Focused User Experience", desc: "Through strategic layouts, structured content hierarchy, and intuitive navigation, we design websites that encourage engagement. Every element is carefully crafted to guide visitors smoothly and convert interest into meaningful business inquiries.", tags: ["Engaging", "Intuitive", "Structured", "ConversionDriven"] },
  { emoji: "/img/icon/custom-website-delivery.webp", label: "Delivery", title: "On-Time Delivery & Continuous Support", desc: "A milestone-driven development approach ensures your custom website launches without delays. Post-deployment, we provide ongoing maintenance, updates, and technical assistance to ensure consistent performance and long-term digital reliability.", tags: ["Timely", "Supportive", "Consistent", "Dependable"] },
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
  { num: "01", icon: "/img/icon/custom-website-strategy.webp", title: "Custom Website Strategy & Development", desc: "We design and develop fully customized websites tailored to your brand positioning, audience expectations, and business objectives. Every element is strategically structured to ensure performance, scalability, seamless navigation, and long-term digital impact.", tags: [{ t: "UI Design", c: "t-orange" }, { t: "UX Strategy", c: "t-blue" }, { t: "Brand Alignment", c: "t-orange" }, { t: "Typography", c: "t-blue" }] },
  { num: "02", icon: "/img/icon/custom-website-modernization.webp", title: "Website Revamp & Modernization", desc: "Our website redesign services Coimbatore focus on transforming outdated websites into modern, high-performing platforms with refined user interfaces, improved speed, optimized content flow, and enhanced usability while preserving brand consistency.", tags: [{ t: "Content Hierarchy", c: "t-orange" }, { t: "Info Architecture", c: "t-blue" }, { t: "CTA Placement", c: "t-orange" }, { t: "Navigation Flow", c: "t-blue" }] },
  { num: "03", icon: "/img/icon/custom-website-audience.webp", title: "Audience-Centric Custom Web Design", desc: "With our custom web design Coimbatore expertise, we create engaging visual experiences tailored to your target audience, ensuring your website leaves a strong and lasting impression.", tags: [{ t: "Mobile-First", c: "t-orange" }, { t: "Cross-Device", c: "t-blue" }, { t: "Fluid Layouts", c: "t-orange" }, { t: "Touch UX", c: "t-blue" }] },
  {
    num: "04", icon: "/img/icon/custom-website-hosting.webp", title: "Secure Hosting & Technical Deployment", desc: "We offer complete custom website design and hosting solutions including server setup, domain configuration, SSL security implementation, and optimized deployment to ensure reliable performance and uninterrupted online presence.", tags: [{ t: "Brand Guidelines", c: "t-orange" }, {
      t:
        "Colour System", c:
        "t-blue"
    }, {
      t:
        "Visual Identity", c:
        "t-orange"
    }, {
      t:
        "Brand Voice", c:
        "t-blue"
    }]
  },
  {
    num:
      "05", icon:
      "/img/icon/custom-website-seo.webp", title:
      "SEO & Performance Optimization Setup", desc:
      "Our team implements foundational SEO configuration, analytics integration, and performance tracking systems to enhance visibility, monitor user behavior, and support data-driven decision-making for sustainable business growth.", tags:
      [{
        t:
          "Page Speed", c:
          "t-orange"
      }, {
        t:
          "Core Web Vitals", c:
          "t-blue"
      }, {
        t:
          "SEO Architecture", c:
          "t-orange"
      }, {
        t:
          "Conversion Rate", c:
          "t-blue"
      }]
  },
];

const processSteps = [
  { num: "01", icon: "/img/icon/custom-website-analytics.webp", title: "Business Discovery & Requirement Analysis", desc: "We analyze your brand, audience, and objectives to define technical scope, design direction, and functional requirements for your website.", tags: ["Business Goals", "Audience Research", "Competitor Analysis"], last: false },
  { num: "02", icon: "/img/icon/custom-website-wireframing.webp", title: "Structure Planning & Wireframing", desc: "We create detailed sitemaps and wireframes to structure page hierarchy, navigation flow, and content placement for intuitive user experience.", tags: ["Wireframes", "Site Architecture", "Content Planning"], last: false },
  { num: "03", icon: "/img/icon/custom-website-design-development.webp", title: "UI/UX Design & Development", desc: "Our team designs and develops responsive websites using modern frameworks, ensuring consistent visuals, clean coding, and seamless performance across devices.", tags: ["Visual Design", "Brand System", "UX Prototyping"], last: false },
  { num: "04", icon: "/img/icon/custom-website-content.webp", title: "Content Integration & On-Page Setup", desc: "We integrate structured content, optimize layout alignment, configure essential on-page elements, and ensure clarity, consistency, and SEO readiness across pages.", tags: ["Responsive Code", "SEO Structure", "Performance"], last: false },
  { num: "05", icon: "/img/icon/custom-website-testing.webp", title: "Testing & Optimization", desc: "We conduct comprehensive testing for speed, responsiveness, security, and compatibility, optimizing performance to ensure smooth functionality before launch.", tags: ["Cross-Browser", "Speed Testing", "QA Review"], last: false },
  { num: "06", icon: "/img/icon/custom-website-launch.webp", title: "Launch & Ongoing Maintenance", desc: "After approval, we deploy your website with monitoring and configuration, providing continuous support, updates, and maintenance for long-term stability", tags: ["Go Live", "Monitoring", "Ongoing Support"], last: true },
];

const whyData = [
  { cls: "pcs-fb-box-tl", icon: "/img/icon/custom-website-responsive.webp", title: "Responsive & Mobile-Optimized Design", desc: "Our custom websites are fully responsive, ensuring smooth browsing, fast loading speeds, and consistent visual presentation across smartphones, tablets, and desktops for enhanced user engagement and accessibility." },
  { cls: "pcs-fb-box-tr", icon: "/img/icon/custom-website-seo-structure.webp", title: "SEO-Optimized Structure", desc: "We implement search-friendly URLs, optimized content hierarchy, structured metadata, and mobile-first frameworks to improve visibility, strengthen search engine performance, and increase organic traffic reach." },
  { cls: "pcs-fb-box-bl", icon: "/img/icon/custom-website-secure-security.webp", title: "Secure & Reliable Hosting", desc: "Advanced security configurations, SSL integration, and stable hosting environments protect your website, safeguard sensitive data, and ensure uninterrupted performance with maximum uptime reliability." },
  { cls: "pcs-fb-box-br", icon: "/img/icon/custom-website-framework.webp", title: "Scalable & Flexible Framework", desc: "Our custom website development India solutions are built with flexible architecture, allowing easy feature enhancements, additional pages, seamless integrations, and future upgrades without performance compromise." },
];

const faqData = [
  { q: "Why should I choose a local web development company in Coimbatore?", a: "Choosing a local web development company in Coimbatore gives you better communication, faster support, and a clearer understanding of your business needs and local market." },
  { q: "What types of websites do you develop?", a: "We develop corporate websites, portfolio websites, service-based websites, landing pages, informational websites, and business websites based on your industry requirements." },
  { q: "What is custom website development?", a: "Custom website development means building a website specifically for your business, with unique layouts, features, and functionality that match your goals." },
  { q: "Do you provide ongoing maintenance and support?", a: "Yes, we provide ongoing maintenance, security updates, technical support, and performance monitoring to keep your website running smoothly." },
  { q: "Will my website be mobile-friendly and SEO-ready?", a: "Yes, every website we build is fully responsive and developed with SEO best practices to improve user experience and search visibility." },
  { q: "What features can be included in a custom website?", a: "A custom website can include contact forms, inquiry systems, analytics, blog sections, service pages, CRM integration, and other business-specific features." },
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
            <div className="badge"><div className="badge-dot" />Custom Website</div>
            <h1 className="wd-hero-heading">
              Build a Custom Website
              That <span className="orange lined">Reflects</span> Your Brand Identity

            </h1>
            <p className="wd-hero-sub">
              Your digital presence should communicate credibility, clarity, and confidence. Through our Custom Website Development services in Coimbatore, we deliver tailored websites engineered for performance, scalability, and long-term business success.
            </p>
            <div className="wd-hero-actions">
              <a className="wd-btn-fill" href="/contact-us">Get a Free Quote <span className="wd-btn-arrow">›</span></a>
            </div>
          </div>

          {/* RIGHT — hero image */}
          <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center", animation: "fadeUp .9s .15s ease both" }}>
            <img
              src={banner}
              alt="Custom Website Development"
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
                <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Strategy for Custom Website Development</div>
              </div>
              <h2 className="wd-ap-heading">Strategic,   <span>High-Performance </span> Custom Website Solutions</h2>
              <p className="wd-ap-intro">
                A successful website requires more than attractive design — it needs the right strategy, structure, and technical foundation. Our custom website development services focus on scalability, responsiveness, SEO readiness, and long-term digital performance.
              </p>
              <p className="wd-ap-intro">
                We follow clean coding standards, structured architecture, and optimized development practices to ensure seamless functionality, faster loading speeds, and an enhanced user experience across all devices and platforms.
              </p>
              <p className="wd-ap-intro">
                As a trusted custom website development company, we build search-friendly websites integrated with analytics tools and scalable frameworks that strengthen your online presence and support sustainable business growth.

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
              <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Key Uniqueness</h2>
            </div>
            <h3 className="pcs-offer-heading">Why Should You Choose us for <span><i>Custom Website Development??</i></span></h3>
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
                        <img src={item.emoji} alt={item.label} style={{ width: "28px", height: "28px", objectFit: "contain", filter: activeOffer === i ? "brightness(0) invert(1)" : "none", transition: "filter 0.3s" }} />
                        <div className="pcs-orbit-node-lbl">{item.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pcs-offer-right">
                {activeOffer === -1 && (
                  <div className="pcs-offer-placeholder">
                    <div className="pcs-offer-placeholder-icon"><img src="/img/icons/click.png" alt="Select an option" style={{ width: "40px", height: "40px", objectFit: "contain", opacity: "0.4" }} /></div>
                    <div className="pcs-offer-placeholder-text">Click any box to view details</div>
                  </div>
                )}
                {offerData.map((item, i) => (
                  <div key={i} className={`pcs-offer-panel${activeOffer === i ? " active" : ""}`}>
                    <div className="pcs-offer-panel-bar"></div>
                    <div className="pcs-offer-panel-title-row">
                      <div className="pcs-offer-panel-icon"><img src={item.emoji} alt={item.title} style={{ width: "32px", height: "32px", objectFit: "contain", filter: "brightness(0) invert(1)" }} /></div>
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
              <div className="partners-header1" style={{ marginBottom: '10px', textAlign: 'center' }}>
                <h2 className="partners-eyebrow" style={{ textAlign: 'center' }}>
                  Our Expertise  </h2>
              </div>
            </div>
            <h3 className="pcs-wi5-heading">What’s Included in Our  <span><i>Custom Website </i></span>Development  Services?</h3>
            <div className="pcs-wi5-tabs">
              {includedData.map((tab, i) => (
                <div key={i} className={`pcs-wi5-tab${openTab === i ? " open" : ""}`}>
                  <div className="pcs-wi5-tab-head" onClick={() => handleTabToggle(i)}>
                    <div className="pcs-wi5-tab-num">
                      <div className="pcs-wi5-tab-num-diamond"></div>
                      <span className="pcs-wi5-tab-num-text">{tab.num}</span>
                    </div>
                    <div className="pcs-wi5-tab-icon"><img src={tab.icon} alt={tab.title} style={{ width: "22px", height: "22px", objectFit: "contain" }} /></div>
                    <h4 className="pcs-wi5-tab-title">{tab.title}</h4>
                    <div className="pcs-wi5-tab-chev">
                      <span style={{ fontSize: "1rem", lineHeight: "1", display: "block" }}>▾</span>
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
                  <h2 className="partners-eyebrow" style={{ textAlign: 'center' }}>Workflow Process</h2>
                </div>
              </div>
              <h3 className="pcs-proc-title">Our  <span><i> Custom Website</i></span> Development Process </h3>
            </div>
            <div className="pcs-proc-grid">
              {processSteps.map((step, i) => (
                <div className="pcs-proc-gc" key={i}>
                  <div className="pcs-proc-gc-top">
                    <div className="pcs-proc-gc-num">{step.num}</div>
                    <div className="pcs-proc-gc-icon"><img src={step.icon} alt={step.title} style={{ width: "28px", height: "28px", objectFit: "contain" }} /></div>
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
              </div>            <h3 className="pcs-fb-title">Features of our  <span><i> Custom Website</i></span> Development Services</h3>
            </div>
            <div className="pcs-fb-grid">
              <div className="pcs-fb-vline"></div>
              <div className="pcs-fb-hline"></div>
              <div className={`pcs-fb-box pcs-fb-box-tl`}>
                <div className="pcs-fb-icon"><img src={whyData[0].icon} alt={whyData[0].title} style={{ width: "32px", height: "32px", objectFit: "contain" }} /></div>
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
                <div className="pcs-fb-icon"><img src={whyData[1].icon} alt={whyData[1].title} style={{ width: "32px", height: "32px", objectFit: "contain" }} /></div>
                <h4 className="pcs-fb-box-title">{whyData[1].title}</h4>
                <div className="pcs-fb-box-desc">{whyData[1].desc}</div>
              </div>
              <div className={`pcs-fb-box pcs-fb-box-bl`}>
                <div className="pcs-fb-icon"><img src={whyData[2].icon} alt={whyData[2].title} style={{ width: "32px", height: "32px", objectFit: "contain" }} /></div>
                <h4 className="pcs-fb-box-title">{whyData[2].title}</h4>
                <div className="pcs-fb-box-desc">{whyData[2].desc}</div>
              </div>
              <div className={`pcs-fb-box pcs-fb-box-br`}>
                <div className="pcs-fb-icon"><img src={whyData[3].icon} alt={whyData[3].title} style={{ width: "32px", height: "32px", objectFit: "contain" }} /></div>
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