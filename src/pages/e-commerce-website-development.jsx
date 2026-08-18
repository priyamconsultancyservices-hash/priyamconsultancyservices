import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import CTASection from "../components/HomePage/CTA";
import BlogSection from "../components/BlogSection";
import Layout from '@theme/Layout';
const banner = "/img/ecommerce.webp";
import Head from '@docusaurus/Head';


function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/e-commerce-website-development/";
  const imageUrl = "https://www.priyamconsultancy.com/img/static-website.png";

  return (
    <Head>
      {/* ── Primary Meta ── */}
      <title>Ecommerce Website Development Company in Coimbatore   </title>
      <meta name="description" content="Ecommerce website development services to build secure, and user-friendly online stores that boost sales, improve customer experience. " />
      <meta name="keywords" content="ecommerce website development, ecommerce website, e commerce website company in coimbatore, B2B ecommerce website, ecommerce website development agency, custom ecommerce website development, custom ecommerce website development india, ecommerce SEO services, ecommerce website maintenance services" />
      <link rel="canonical" href="https://www.priyamconsultancy.com/e-commerce-website-development/" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ecommerce Website Development Company in Coimbatore   " />
      <meta property="og:description" content="Ecommerce website development services to build secure, and user-friendly online stores that boost sales, improve customer experience. " />
      <meta property="og:url" content="https://www.priyamconsultancy.com/e-commerce-website-development/" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="PCS Business Solution" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Ecommerce Website Development Company in Coimbatore   " />
      <meta name="twitter:description" content="Ecommerce website development services to build secure, and user-friendly online stores that boost sales, improve customer experience. " />
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
       "@id":"https://www.priyamconsultancy.com/e-commerce-website-development/",
       "name":"e-commerce-website-development"
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
  "@id":"https://www.priyamconsultancy.com/e-commerce-website-development/#service",
  "name":"E-Commerce Website Development",
  "serviceType":"E-Commerce Website Development Services",
  "url":"https://www.priyamconsultancy.com/e-commerce-website-development/",
  "description":"Priyam Consultancy provides professional e-commerce website development services including custom online store development, shopping cart integration, payment gateway setup, product management, mobile-responsive ecommerce websites and scalable online business solutions across India.",
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
"name": "Digital Transformation and Digital Marketing Agency",  
"image": ["https://www.priyamconsultancy.com/wp-content/uploads/2025/10/who-we-are.webp"],  
"description": "Leading digital transformation and marketing agency in India offering SEO, PPC, SMM, web & app development, and automation solutions to accelerate business growth.",  
"mpn": "priyamconsultancy.com",  
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
"reviewCount": "4521"  
},  
"offers": {  
"@type": "Offer",  
"url": "https://www.priyamconsultancy.com/",  
"priceCurrency": "USD",  
"price": "00.00",  
"priceValidUntil": "2025-12-31",  
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
    "name": "How do you develop an e-commerce website?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "We develop e-commerce websites through a structured process that includes planning, design, platform selection, product setup, payment integration, testing, and launch support." 
    } 
  },{ 
    "@type": "Question", 
    "name": "What features does a good e-commerce website need?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "A strong e-commerce website should include mobile responsiveness, secure checkout, fast loading speed, product filters, SEO optimization, and analytics integration." 
    }
  },{ 
    "@type": "Question", 
    "name": "Which platform is best for e-commerce website development?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "The best platform depends on your business needs. Shopify, WooCommerce, and Magento are popular options, and the right choice depends on your products, budget, and growth plans." 
    } 
  },{ 
    "@type": "Question", 
    "name": "Will my e-commerce website be mobile-friendly?
", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, every e-commerce website we develop is fully responsive and optimized for mobile users." 
    } 
 },{ 
    "@type": "Question", 
    "name": "How do you ensure the security of my e-commerce website?
", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "We use SSL, secure payment processing, firewall protection, and regular security checks to help protect your online store." 
    } 
 },{ 
    "@type": "Question", 
    "name": "Can you migrate my existing store to a new e-commerce platform?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, we provide secure migration services to move your existing store to a new platform with minimal disruption." 
    } 
    }] 
}


      `}</script>
    </Head>
  );
}



const offerData = [
  { img: "/img/icon/ecommerence-customize.webp", label: "Customized", title: "Fully Customized Development", desc: "We build tailor-made ecommerce websites designed specifically for your products, audience behavior, and internal operations — offering complete flexibility, scalability, full ownership, seamless future expansion, and optimized performance.", tags: ["Tailored", "Flexible", "Scalable", "Optimized"] },
  { img: "/img/icon/ecommerence-marketplace.webp", label: "Marketplace", title: "Marketplace Integration Capability", desc: "Your ecommerce platform can be integrated with major marketplaces such as Amazon, Flipkart, and Meesho, enabling synchronized inventory, centralized order management, and streamlined multi-channel selling.", tags: ["Integrated", "Centralized", "Connected", "Streamlined"] },
  { img: "/img/icon/ecommerence-scalable.webp", label: "Scalable", title: "B2B, B2C & D2C Scalable Architecture", desc: "Our custom ecommerce solutions support B2B, B2C, and D2C models with flexible pricing, bulk ordering, distributor panels, role-based access, and scalable infrastructure to handle growing demand seamlessly.", tags: ["Versatile", "Structured", "Adaptive", "Expandable"] },
  { img: "/img/icon/ecommerence-security.webp", label: "Security", title: "Performance & Security Optimization", desc: "We implement SSL security, encrypted payment processing, optimized database structures, and performance enhancements to ensure stability, speed, and advanced data protection.", tags: ["Protected", "Fast", "Stable", "Secure"] },
  { img: "/img/icon/ecommerence-support.webp", label: "Support", title: "Ongoing Support & Maintenance", desc: "Dedicated maintenance services include updates, monitoring, technical troubleshooting, and system enhancements to ensure uninterrupted performance and long-term business growth.", tags: ["Maintained", "Consistent", "Supportive", "Reliable"] },
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
  { num: "01", icon: "/img/icon/ecommerence-business.webp", title: "Business Strategy & Technical Planning", desc: "We analyze your revenue model, product structure, target audience, and operational workflow to define the most efficient, scalable, and performance-driven ecommerce architecture aligned with long-term business growth.", tags: [{ t: "UI Design", c: "t-orange" }, { t: "UX Strategy", c: "t-blue" }, { t: "Brand Alignment", c: "t-orange" }, { t: "Typography", c: "t-blue" }] },
  { num: "02", icon: "/img/icon/ecommerence-store.webp", title: " Product & Store Architecture Setup", desc: "Structured categorization, advanced filtering systems, intelligent navigation flow, optimized database structure, and conversion-focused checkout design enhance the overall shopping experience and improve purchasing efficiency.", tags: [{ t: "Content Hierarchy", c: "t-orange" }, { t: "Info Architecture", c: "t-blue" }, { t: "CTA Placement", c: "t-orange" }, { t: "Navigation Flow", c: "t-blue" }] },
  { num: "03", icon: "/img/icon/ecommerence-payment.webp", title: "Secure Payment Integration", desc: "We integrate reliable payment gateways with encrypted, compliant, and multi-layered transaction processing systems to ensure safe, seamless, and trustworthy purchases across all devices.", tags: [{ t: "Mobile-First", c: "t-orange" }, { t: "Cross-Device", c: "t-blue" }, { t: "Fluid Layouts", c: "t-orange" }, { t: "Touch UX", c: "t-blue" }] },
  { num: "04", icon: "/img/icon/ecommerence-integration.webp", title: "Marketplace & Integration", desc: "Your ecommerce system can be connected with Amazon, Flipkart, and Meesho for automated inventory synchronization, centralized order management, real-time updates, and simplified multi-channel selling operations.", tags: [{ t: "Brand Guidelines", c: "t-orange" }, { t: "Colour System", c: "t-blue" }, { t: "Visual Identity", c: "t-orange" }, { t: "Brand Voice", c: "t-blue" }] },
  { num: "05", icon: "/img/icon/ecommerence-seo-optimize.webp", title: " SEO & Performance Optimization", desc: "Technical SEO configuration, structured metadata, schema implementation, analytics integration, and speed optimization techniques improve search visibility, enhance user engagement, and enable data-driven growth strategies.", tags: [{ t: "Page Speed", c: "t-orange" }, { t: "Core Web Vitals", c: "t-blue" }, { t: "SEO Architecture", c: "t-orange" }, { t: "Conversion Rate", c: "t-blue" }] },
];

const processSteps = [
  { num: "01", icon: "/img/icon/ecommerence-discover.webp", title: " Business Discovery & Requirement Analysis", desc: "We evaluate your products, competitors, revenue objectives, and operational challenges to define scalable development requirements.", tags: ["Business Goals", "Audience Research", "Competitor Analysis"], last: false },
  { num: "02", icon: "/img/icon/ecommerence-store-planning.webp", title: "Store Planning & Wireframing", desc: "Structured architecture and conversion-focused layouts are designed to deliver intuitive and engaging shopping experiences.", tags: ["Wireframes", "Site Architecture", "Content Planning"], last: false },
  { num: "03", icon: "/img/icon/ecommerence-developmet.webp", title: " UI/UX Design & Development", desc: "We design and develop responsive, high-performance ecommerce platforms using scalable frameworks and clean coding standards.", tags: ["Visual Design", "Brand System", "UX Prototyping"], last: false },
  { num: "04", icon: "/img/icon/ecommerence-integration-setup.webp", title: "Integration & Setup", desc: "Payment gateways, CRM systems, shipping solutions, marketplace APIs, and analytics tools are integrated seamlessly.", tags: ["Responsive Code", "SEO Structure", "Performance"], last: false },
  { num: "05", icon: "/img/icon/ecommerence-testing-optimize.webp", title: " Testing & Performance Optimization", desc: "Comprehensive testing ensures checkout efficiency, speed optimization, security validation, and cross-device compatibility.", tags: ["Cross-Browser", "Speed Testing", "QA Review"], last: false },
  { num: "06", icon: "/img/icon/ecommerence-launch.webp", title: "Launch & Post-Launch Support", desc: "Continuous monitoring, updates, and maintenance ensure long-term operational stability and scalable growth.", tags: ["Go Live", "Monitoring", "Ongoing Support"], last: true },
];

const whyData = [
  { cls: "pcs-fb-box-tl", icon: "/img/icon/ecommerence-feat1.webp", title: "Custom-Built Ecommerce Platform", desc: "Fully customized architecture designed around your business model, operational workflows, customer journey, and long-term scalability requirements to ensure maximum flexibility and complete system control." },
  { cls: "pcs-fb-box-tr", icon: "/img/icon/ecommerence-feat2.webp", title: "Marketplace Integration Support", desc: "Seamless integration with Amazon, Flipkart, and Meesho enables synchronized inventory updates, centralized sales management, automated order processing, and efficient multi-channel expansion." },
  { cls: "pcs-fb-box-bl", icon: "/img/icon/ecommerence-feat3.webp", title: "Secure & Scalable Architecture", desc: "Advanced security protocols, encrypted transactions, firewall protection, and scalable cloud-ready infrastructure ensure high performance, data protection, operational stability, and long-term reliability." },
  { cls: "pcs-fb-box-br", icon: "/img/icon/ecommerence-feat4.webp", title: "Advanced Analytics ", desc: "CRM connectivity, secure payment integrations, shipping , WhatsApp communication systems, real-time tracking, and advanced reporting dashboards streamline operations and improve strategic decision-making." },
];

const faqData = [
  { q: "How do you develop an e-commerce website?", a: "We develop e-commerce websites through a structured process that includes planning, design, platform selection, product setup, payment integration, testing, and launch support." },
  { q: "What features does a good e-commerce website need?", a: "A strong e-commerce website should include mobile responsiveness, secure checkout, fast loading speed, product filters, SEO optimization, and analytics integration." },
  { q: "Which platform is best for e-commerce website development?", a: "The best platform depends on your business needs. Shopify, WooCommerce, and Magento are popular options, and the right choice depends on your products, budget, and growth plans." },
  { q: "Will my e-commerce website be mobile-friendly?", a: "Yes, every e-commerce website we develop is fully responsive and optimized for mobile users." },
  { q: "How do you ensure the security of my e-commerce website?", a: "We use SSL, secure payment processing, firewall protection, and regular security checks to help protect your online store." },
  { q: "Can you migrate my existing store to a new e-commerce platform?", a: "Yes, we provide secure migration services to move your existing store to a new platform with minimal disruption." },
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
            <div className="badge"><div className="badge-dot" />Ecommerce Website</div>
            <h1 className="wd-hero-heading">
              Build a Powerful
              <span className="orange lined" style={{ marginRight: '12px' }}>Ecommerce </span>
              Website That Drives Sales

            </h1>
            <p className="wd-hero-sub">
              Your online store should do more than display products — it should convert visitors into paying customers. As a trusted custom e-commerce website development company in Coimbatore, we build secure, scalable, and high-performing stores tailored to your business model and growth objectives.
            </p>
            <div className="wd-hero-actions">
              <a className="wd-btn-fill" href="/contact-us">Connect Now <span className="wd-btn-arrow">›</span></a>
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
        <section className="wd-approach" id="approach" style={{background: '#fff'}}>
          <div className="wd-ap-inner">

            {/* LEFT CONTENT */}
            <div>
              <div className="partners-header1">
                <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Strategy for Ecommerce Website Development

                </h2>
              </div>
              <h3 className="wd-ap-heading">Strategic <span>Conversion-Focused </span> Ecommerce Solutions</h3>
              <p className="wd-ap-intro">
                A successful custom eCommerce website requires more than design — it needs structured architecture, secure payment systems, seamless navigation, and optimized checkout experiences that support performance, engagement, and long-term revenue growth.

              </p>
              <p className="wd-ap-intro">
                Our development approach focuses on scalability, flexibility, and smooth functionality to ensure your eCommerce platform delivers reliable performance across all devices, user journeys, and growing business requirements.
              </p>
              <p className="wd-ap-intro">
                We build fully customized eCommerce platforms tailored to your specific business goals, providing complete control, advanced functionality, and future-ready solutions without the limitations of prebuilt platforms.
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
            <h3 className="pcs-offer-heading">Why Should You Choose us for <span><i>Ecommerce  Website Development?</i></span></h3>
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
            <h3 className="pcs-wi5-heading">What’s Included in Our  <span><i>Ecommerce   </i></span> Development Services?</h3>
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
              <h3 className="pcs-proc-title">Our  <span><i> ECommerce Website</i></span> Development Process </h3>
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
              </div>            <h3 className="pcs-fb-title">Features of our  <span><i> ECommerce </i></span> Development Services</h3>
            </div>
            <div className="pcs-fb-grid">
              <div className="pcs-fb-vline"></div>
              <div className="pcs-fb-hline"></div>
              <div className={`pcs-fb-box pcs-fb-box-tl`}>
                <div className="pcs-fb-icon"><img src={whyData[0].icon} alt={whyData[0].title} style={{ width: "28px", height: "28px", objectFit: "contain" }} /></div>
                <div className="pcs-fb-box-title">{whyData[0].title}</div>
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
                <div className="pcs-fb-box-title">{whyData[1].title}</div>
                <div className="pcs-fb-box-desc">{whyData[1].desc}</div>
              </div>
              <div className={`pcs-fb-box pcs-fb-box-bl`}>
                <div className="pcs-fb-icon"><img src={whyData[2].icon} alt={whyData[2].title} style={{ width: "28px", height: "28px", objectFit: "contain" }} /></div>
                <div className="pcs-fb-box-title">{whyData[2].title}</div>
                <div className="pcs-fb-box-desc">{whyData[2].desc}</div>
              </div>
              <div className={`pcs-fb-box pcs-fb-box-br`}>
                <div className="pcs-fb-icon"><img src={whyData[3].icon} alt={whyData[3].title} style={{ width: "28px", height: "28px", objectFit: "contain" }} /></div>
                <div className="pcs-fb-box-title">{whyData[3].title}</div>
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