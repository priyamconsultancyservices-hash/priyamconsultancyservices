import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import CTASection from "../components/HomePage/CTA";
import BlogSection from "../components/BlogSection";
import Layout from '@theme/Layout';
const banner = "/img/woocommerce.webp";
import Head from '@docusaurus/Head';


function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/woocommerce-website-development/";
  const imageUrl = "https://www.priyamconsultancy.com/img/static-website.png";

  return (
    <Head>
      {/* ── Primary Meta ── */}
      <title>Professional WooCommerce Development for Business Growth  </title>
      <meta name="description" content="WooCommerce development to create secure, scalable, and easy-to-manage online stores that help grow your business and increase sales." />
      <meta name="keywords" content="Woocommerce development, WooCommerce website, woocommerce development cost, woocommerce development agency, woocommerce development service, woocommerce development service coimbatore, woocommerce custom development, woocommerce payment gateway setup, WooCommerce setup services, woocommerce development company " />
      <link rel="canonical" href="https://www.priyamconsultancy.com/woocommerce-website-development/" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Professional WooCommerce Development for Business Growth  " />
      <meta property="og:description" content="WooCommerce development to create secure, scalable, and easy-to-manage online stores that help grow your business and increase sales." />
      <meta property="og:url" content="https://www.priyamconsultancy.com/woocommerce-website-development/" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="PCS Business Solution" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Professional WooCommerce Development for Business Growth  " />
      <meta name="twitter:description" content="WooCommerce development to create secure, scalable, and easy-to-manage online stores that help grow your business and increase sales." />
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
       "@id":"https://www.priyamconsultancy.com/woocommerce-website-development/",
       "name":"woocommerce-website-development"
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
  "@id":"https://www.priyamconsultancy.com/woocommerce-website-development/#service",
  "name":"WooCommerce Website Development",
  "serviceType":"WooCommerce Website Development Services",
  "url":"https://www.priyamconsultancy.com/woocommerce-website-development/",
  "description":"Priyam Consultancy provides professional WooCommerce website development services including custom WooCommerce stores, ecommerce website design, payment gateway integration, product management, SEO-friendly online stores and scalable ecommerce solutions across India.",
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
"name": "woocommerce-website-development",
"image": ["https://www.priyamconsultancy.com/img/woocommerce.png"],
"description": "Best WooCommerce website development services in Coimbatore offering ecommerce website development, WooCommerce store setup, custom online stores, payment gateway integration, product management and SEO-friendly ecommerce solutions.",
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
"reviewCount": "4894"
},
"offers": {
"@type": "Offer",
"url": "https://www.priyamconsultancy.com/woocommerce-website-development/",
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
    "name": "What is WooCommerce and why should I use it for my online store?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "WooCommerce is a free WordPress plugin that turns your website into a fully functional online store. It is flexible, customizable, SEO-friendly, and scalable, making it a strong choice for businesses that want control over their store." 
    } 
  },{ 
    "@type": "Question", 
    "name": "What hosting is best for WooCommerce?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "The best hosting for WooCommerce is fast, secure, and reliable. Managed WooCommerce hosting or optimized cloud hosting works well because it supports better speed, uptime, backups, and growth. " 
    }
  },{ 
    "@type": "Question", 
    "name": "Can WooCommerce handle a large number of products and orders?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, WooCommerce can handle large catalogs and high order volumes when it is supported by proper hosting, caching, database optimization, and performance tuning." 
    } 
  },{ 
    "@type": "Question", 
    "name": "What payment gateways does WooCommerce support?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "WooCommerce supports popular payment gateways such as PayPal, Stripe, Razorpay, Square, Authorize.net, and other regional payment options. It also supports UPI, wallets, bank transfers, and custom integrations." 
    } 
 },{ 
    "@type": "Question", 
    "name": "Can I migrate my existing store to WooCommerce?
", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, your existing store can be migrated to WooCommerce. Products, customers, orders, and categories can be transferred safely using migration tools or professional support." 
    } 
 },{ 
    "@type": "Question", 
    "name": "Is WooCommerce SEO-friendly?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, WooCommerce is SEO-friendly because it supports clean URLs, metadata, schema markup, responsive design, and SEO plugins. With proper optimization, it can perform very well in search results." 
    } 
    }] 
}

      `}</script>
    </Head>
  );
}


const offerData = [
  { img: "/img/icon/woocommerence-customize.webp", label: "Customized", title: "Customized WooCommerce Solutions", desc: "Every business operates differently, so we provide tailored WooCommerce custom development aligned with your products, audience, and growth strategy. From unique features to personalized store functionality, we build scalable eCommerce solutions designed to match your long term goals", tags: ["Tailored", "Personalized", "Scalable", "Strategic"] },
  { img: "/img/icon/woocommerence-scalable.webp", label: "Scalable", title: "Scalable & Future-Ready", desc: "Our WooCommerce websites are built to grow with your business, allowing easy product expansion, marketing tool integration, and feature upgrades without technical limitations. We ensure flexible architecture, smooth performance, and a seamless checkout experience that supports consistent long term scalability.", tags: ["Flexible", "Expandable", "Adaptive", "Futureproof"] },
  { img: "/img/icon/woocommerence-experience.webp", label: "Experience", title: "Conversion-Focused User Experience", desc: "We design WooCommerce websites with strategic layouts, optimized product pages, simplified navigation, and streamlined checkout flows. Every element is carefully structured to reduce cart abandonment, enhance engagement, and maximize conversions for consistent revenue growth.", tags: ["Secure", "Optimized", "Stable", "Reliable"] },
  { img: "/img/icon/woocommerence-security.webp", label: "Security", title: "Performance & Security Optimization", desc: "Our WooCommerce development services include advanced speed optimization, SSL configuration, secure hosting guidance, and strict coding standards. We implement technical best practices that enhance website stability, protect customer data, and ensure a safe, reliable, and high performing eCommerce environment.", tags: ["Engaging", "Intuitive", "Streamlined", "ConversionDriven"] },
  { img: "/img/icon/woocommerence-delivery.webp", label: "Delivery", title: "On-Time Delivery & Ongoing Support", desc: "A structured milestone driven development workflow ensures your WooCommerce website launches on schedule without delays. Post deployment, continuous technical assistance, performance monitoring, and update support are provided to maintain stability, security, and long term business growth", tags: ["Timely", "Supportive", "Consistent", "Dependable"] },
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
  { num: "01", icon: "/img/icon/woocommerence-custom-design.webp", title: "Custom WooCommerce Website Design & Development", desc: "We build customized WooCommerce websites aligned with your brand identity and business goals, ensuring optimized design, responsive layouts, seamless checkout, and scalable performance for measurable eCommerce growth.", tags: [{ t: "UI Design", c: "t-orange" }, { t: "UX Strategy", c: "t-blue" }, { t: "Brand Alignment", c: "t-orange" }, { t: "Typography", c: "t-blue" }] },
  { num: "02", icon: "/img/icon/woocommerence-payment.webp", title: "Payment Gateway Integration", desc: "Secure WooCommerce payment gateway setup supports UPI, cards, wallets, and net banking, ensuring safe transactions, smooth checkout functionality, and reliable processing across devices and browsers.", tags: [{ t: "Content Hierarchy", c: "t-orange" }, { t: "Info Architecture", c: "t-blue" }, { t: "CTA Placement", c: "t-orange" }, { t: "Navigation Flow", c: "t-blue" }] },
  { num: "03", icon: "/img/icon/woocommerence-shipping.webp", title: "Shipping & Courier Integration", desc: "Shiprocket courier tracking integration automates shipping workflows, label generation, and real time tracking updates, improving fulfillment accuracy, delivery transparency, and overall customer satisfaction.", tags: [{ t: "Mobile-First", c: "t-orange" }, { t: "Cross-Device", c: "t-blue" }, { t: "Fluid Layouts", c: "t-orange" }, { t: "Touch UX", c: "t-blue" }] },
  { num: "04", icon: "/img/icon/woocommerence-email.webp", title: "CRM, Email & WhatsApp Integration", desc: "We integrate CRM systems, email automation, and WhatsApp Business connectivity to streamline communication, automate responses, improve engagement, and strengthen long term customer relationships.", tags: [{ t: "Brand Guidelines", c: "t-orange" }, { t: "Colour System", c: "t-blue" }, { t: "Visual Identity", c: "t-orange" }, { t: "Brand Voice", c: "t-blue" }] },
  { num: "05", icon: "/img/icon/woocommerence-analytiv-seo.webp", title: "Analytics & SEO Setup Integration", desc: "Foundational SEO and analytics setup including Google Analytics, Tag Manager, Clarity, Search Console, and Bing Webmaster ensures accurate tracking, insights, and sustainable growth.", tags: [{ t: "Page Speed", c: "t-orange" }, { t: "Core Web Vitals", c: "t-blue" }, { t: "SEO Architecture", c: "t-orange" }, { t: "Conversion Rate", c: "t-blue" }] },
];

const processSteps = [
  { num: "01", icon: "/img/icon/woocommerence-discover.webp", title: "Business Discovery & Requirement Analysis", desc: "We analyze your products, audience, competitors, and revenue goals to define technical requirements, integrations, and scalability for sustainable WooCommerce growth.", tags: ["Business Goals", "Audience Research", "Competitor Analysis"], last: false },
  { num: "02", icon: "/img/icon/woocommerence-store.webp", title: "Store Architecture & Planning", desc: "We design organized categories, product mapping, and navigation flow to create structured browsing experiences that enhance engagement and consistent sales performance.", tags: ["Wireframes", "Site Architecture", "Content Planning"], last: false },
  { num: "03", icon: "/img/icon/woocommerence-developmet.webp", title: "UI/UX Design & Custom Development", desc: "Our team builds brand consistent WooCommerce websites with responsive layouts and custom functionality, ensuring seamless interaction and optimized performance across devices.", tags: ["Visual Design", "Brand System", "UX Prototyping"], last: false },
  { num: "04", icon: "/img/icon/woocommerence-integration.webp", title: "Integration & Automation Setup", desc: "We configure payment gateways, shipping systems, CRM, email automation, WhatsApp integration, and analytics tools to streamline operations and enhance eCommerce efficiency.", tags: ["Responsive Code", "SEO Structure", "Performance"], last: false },
  { num: "05", icon: "/img/icon/woocommerence-testing.webp", title: "Testing & Performance Optimization", desc: "We conduct testing for checkout flow, payments, responsiveness, speed, and compatibility, optimizing security and stability before launching your WooCommerce store.", tags: ["Cross-Browser", "Speed Testing", "QA Review"], last: false },
  { num: "06", icon: "/img/icon/woocommerence-launch.webp", title: "Launch & Post-Launch Support", desc: "After approval, we deploy your WooCommerce website with monitoring, updates, troubleshooting support, security maintenance, and performance tracking for growth.", tags: ["Go Live", "Monitoring", "Ongoing Support"], last: true },
];

const whyData = [
  { cls: "pcs-fb-box-tl", icon: "/img/icon/woocommerence-feat1.webp", title: "Scalable & Flexible Architecture", desc: "Our WooCommerce websites are built with flexible architecture that supports product expansion, feature upgrades, marketing integrations, and future enhancements, ensuring your online store adapts smoothly as your business grows." },
  { cls: "pcs-fb-box-tr", icon: "/img/icon/woocommerence-feat2.webp", title: "SEO-Optimized Store Structure", desc: "We implement clean URLs, optimized meta structures, schema markup, and mobile responsive frameworks to improve search visibility, enhance crawlability, and strengthen overall search engine performance from the foundation." },
  { cls: "pcs-fb-box-bl", icon: "/img/icon/woocommerence-feat3.webp", title: "Secure & Reliable Transactions", desc: "Advanced security configurations, SSL implementation, and trusted payment gateway integrations ensure safe transactions, protect sensitive customer data, and deliver a secure, reliable checkout experience across all devices." },
  { cls: "pcs-fb-box-br", icon: "/img/icon/woocommerence-feat4.webp", title: "Advanced Reporting & Insights", desc: "Integrated reports and performance dashboards provide detailed insights into sales, customer behavior, and traffic trends, enabling data driven decisions that improve marketing strategies and overall store profitability" },
];

const faqData = [
  { q: "What is WooCommerce and why should I use it for my online store?", a: "WooCommerce is a free WordPress plugin that turns your website into a fully functional online store. It is flexible, customizable, SEO-friendly, and scalable, making it a strong choice for businesses that want control over their store." },
  { q: "What hosting is best for WooCommerce?", a: "The best hosting for WooCommerce is fast, secure, and reliable. Managed WooCommerce hosting or optimized cloud hosting works well because it supports better speed, uptime, backups, and growth" },
  { q: "Can WooCommerce handle a large number of products and orders?", a: "Yes, WooCommerce can handle large catalogs and high order volumes when it is supported by proper hosting, caching, database optimization, and performance tuning." },
  { q: "What payment gateways does WooCommerce support?", a: "WooCommerce supports popular payment gateways such as PayPal, Stripe, Razorpay, Square, Authorize.net, and other regional payment options. It also supports UPI, wallets, bank transfers, and custom integrations." },
  { q: "Can I migrate my existing store to WooCommerce?", a: "Yes, your existing store can be migrated to WooCommerce. Products, customers, orders, and categories can be transferred safely using migration tools or professional support." },
  { q: "Is WooCommerce SEO-friendly?", a: "Yes, WooCommerce is SEO-friendly because it supports clean URLs, metadata, schema markup, responsive design, and SEO plugins. With proper optimization, it can perform very well in search results." },
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
            <div className="badge"><div className="badge-dot" />WooCommerce Website</div>
            <h1 className="wd-hero-heading">
              Build a Powerful
              <span className="orange lined" style={{ marginRight: '12px' }}>WooCommerce</span>
              Website That Sells 24/7

            </h1>
            <p className="wd-hero-sub">
              Your online store should do more than just exist — it should generate revenue consistently. As a professional WooCommerce development company, we create scalable and SEO-ready WooCommerce websites that convert visitors into customers while keeping your WooCommerce development cost efficient and transparent.
            </p>
            <div className="wd-hero-actions">
              <a className="wd-btn-fill" href="/contact-us">Get a Free Quote <span className="wd-btn-arrow">›</span></a>
            </div>
          </div>

          {/* RIGHT — banner image */}
          <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center", animation: "fadeUp .9s .15s ease both" }}>
            <img
              src={banner}
              alt="WooCommerce Website Development Banner"
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
                <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Strategy for WooCommerce Website Development
                </div>
              </div>
              <h2 className="wd-ap-heading">High-Performance <span>SEO-Optimized </span> WooCommerce Solutions</h2>
              <p className="wd-ap-intro">
                Successful eCommerce websites require more than attractive design — they need speed, structure, and visibility. Our WooCommerce website development approach focuses on performance, responsiveness, SEO readiness, and seamless shopping experiences.

              </p>
              <p className="wd-ap-intro">
                We follow optimized architecture, clean coding standards, and mobile-first development practices to ensure faster loading speeds, smooth navigation, and reliable functionality across all devices and platforms.
              </p>
              <p className="wd-ap-intro">
                As a reliable WooCommerce development company, we build search-friendly online stores integrated with analytics and webmaster tools to help businesses improve visibility, attract organic traffic, and support long-term growth.

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
              <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Key Uniqueness
              </h2>
            </div>
            <h3 className="pcs-offer-heading">Why Should You Choose us for <span><i>WooCommerce Website Development?</i></span></h3>
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
              <div className="partners-header1" style={{ marginBottom: '10px', textAlign: 'center' }}>
                <h2 className="partners-eyebrow" style={{ textAlign: 'center' }}>Our Expertise </h2>
              </div>
            </div>
            <h3 className="pcs-wi5-heading">What’s Included in Our  <span><i>WooCommerce  </i></span> Development Services?</h3>
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
                  <h2 className="partners-eyebrow" style={{ textAlign: 'center' }}>Workflow Process</h2>
                </div>
              </div>
              <h3 className="pcs-proc-title">Our  <span><i> WooCommerce Website</i></span> Development Process </h3>
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
                  <h2 className="partners-eyebrow" style={{ textAlign: 'center' }}>Key Service Features </h2>
                </div>
              </div>            <h3 className="pcs-fb-title">Features of our  <span><i> WooCommerce </i></span> Development Services</h3>
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