import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import CTASection from "../components/HomePage/CTA";
const banner = "/img/static-website.webp";
import BlogSection from "../components/BlogSection";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';



function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/static-website-development/";
  const imageUrl = "https://www.priyamconsultancy.com/img/static-website.png";

  return (
    <Head>
      {/* ── Primary Meta ── */}
      <title>Professional Static Website Development Company </title>
      <meta name="description" content="Static website development services to create simple, fast-loading, and SEO-friendly websites for better performance and user experience. " />
      <meta name="keywords" content="Static Website Development Company in Coimbatore, Static Website Development Services, Static website design, Static website " />
      <link rel="canonical" href="https://www.priyamconsultancy.com/static-website-development/" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Professional Static Website Development Company " />
      <meta property="og:description" content="Static website development services to create simple, fast-loading, and SEO-friendly websites for better performance and user experience. " />
      <meta property="og:url" content="https://www.priyamconsultancy.com/static-website-development/" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="PCS Business Solution" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Professional Static Website Development Company " />
      <meta name="twitter:description" content="Static website development services to create simple, fast-loading, and SEO-friendly websites for better performance and user experience. " />
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
       "@id":"https://www.priyamconsultancy.com/static-website-development/",
       "name":"static-website-development"
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
  "@id":"https://www.priyamconsultancy.com/static-website-development/#service",
  "name":"Static Website Development",
  "serviceType":"Static Website Development Services",
  "url":"https://www.priyamconsultancy.com/static-website-development/",
  "description":"Priyam Consultancy provides professional static website development services including fast-loading static websites, business landing pages, brochure websites, SEO-friendly HTML websites and lightweight web solutions for businesses across India.",
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
"name": "static-website-development",
"image": ["https://www.priyamconsultancy.com/img/static-website.png"],
"description": "Best static website development services in Coimbatore offering responsive static websites, business websites, corporate web pages, fast-loading website solutions, SEO-friendly website development and professional web design services.",
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
"reviewCount": "4689"
},
"offers": {
"@type": "Offer",
"url": "https://www.priyamconsultancy.com/static-website-development/",
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
    "name": "What is a static website?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, we can help with hosting and deployment for your static website. We make sure the website is properly uploaded, configured, and launched smoothly so it works correctly from day one." 
    } 
  },{ 
    "@type": "Question", 
    "name": "Do you handle hosting and deployment?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes. We build responsive websites that work smoothly on all devices and follow SEO best practices such as clean structure, optimized content, and fast performance." 
    }
  },{ 
    "@type": "Question", 
    "name": "Are static websites good for SEO?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, static websites are generally good for SEO because they load quickly, have clean code, and are easy for search engines to crawl. With proper optimization, they can support strong search visibility." 
    } 
  },{ 
    "@type": "Question", 
    "name": "What are the benefits of a static website for my business?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "A static website offers fast performance, strong security, low maintenance, and a professional online presence. It is a practical choice for businesses that want a simple website with dependable performance." 
    } 
 },{ 
    "@type": "Question", 
    "name": "Can you customize a static website to match my brand?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, we can customize the design, colors, layout, and content to match your brand identity. The website will be tailored to reflect your business style and goals." 
    } 
 },{ 
    "@type": "Question", 
    "name": "Do you provide support after launch?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, we provide support after launch to help with updates, fixes, and any technical assistance you may need. This helps keep your website running smoothly over time.
" 
    } 
    }] 
}

      `}</script>
    </Head>
  );
}

const offerData = [
  { emoji: "/img/icon/static-website-cost.webp", label: "Cost-Effective", title: "Cost-Effective Development", desc: "Static websites are one of the most budget-friendly web development solutions available for businesses of all sizes. At PCS, we deliver high-quality static websites that require minimal infrastructure, reduce ongoing maintenance costs, and provide exceptional value.", tags: ["Affordable", "Efficient", "Scalable", "Valuable"] },
  { emoji: "/img/icon/static-website-experience.webp", label: "Experience", title: "Seamless User Experience", desc: "User experience plays a critical role in engagement and conversions. Our team focuses on clean layouts, structured content, and intuitive navigation to ensure visitors can easily find what they're looking for. A smooth browsing experience encourages users to stay longer and take action.", tags: ["Intuitive", "Smooth", "Structured", "Engaging"] },
  { emoji: "/img/icon/static-website-security.webp", label: " Security", title: "Enhanced Security & Stability", desc: "Static websites have no database or server-side scripts, significantly reducing security vulnerabilities. PCS builds static websites using secure frameworks and coding standards that protect your business online, ensuring stability, reliability, and peace of mind for the long term.", tags: ["Secure", "Stable", "Reliable", "Protected"] },
  { emoji: "/img/icon/static-website-customization.webp", label: "Customized", title: "Customized Static Website Solutions", desc: "Every business has its own identity, goals, and audience. That's why PCS delivers tailor-made static website development solutions designed specifically around your brand requirements. We understand your business objectives and create a website that not only reflects your brand personality but also differentiates you from competitors.", tags: ["Tailored", "Strategic", "Branded", "Unique"] },
  { emoji: "/img/icon/static-website-delivery.webp", label: " Delivery", title: "On-Time Delivery", desc: "We value your time and business commitments. PCS follows a structured development process with clearly defined timelines to ensure timely project completion. Our efficient workflow ensures your static website is delivered on schedule without compromising on quality or performance.", tags: ["Timely", "Consistent", "Reliable", "Professional"] },
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
  { num: "01", icon: "/img/icon/static-website-custom-design.webp", title: "Custom UI/UX Design", desc: "We craft visually engaging and brand-aligned static websites tailored to your business goals. From layout structure to typography and color systems, every element is thoughtfully developed to enhance visual appeal and user experience.", tags: [{ t: "UI Design", c: "t-orange" }, { t: "UX Strategy", c: "t-blue" }, { t: "Brand Alignment", c: "t-orange" }, { t: "Typography", c: "t-blue" }] },
  { num: "02", icon: "/img/icon/static-website-planning.webp", title: "Structured Content Layout", desc: "Great development supports great content. We organize and structure your website content for clarity, readability, and flow — ensuring visitors can easily navigate and understand your message", tags: [{ t: "Content Hierarchy", c: "t-orange" }, { t: "Info Architecture", c: "t-blue" }, { t: "CTA Placement", c: "t-orange" }, { t: "Navigation Flow", c: "t-blue" }] },
  { num: "03", icon: "/img/icon/static-website-mobile-responsive.webp", title: "Responsive Design Experience", desc: "Our static websites are fully responsive, adapting seamlessly across mobiles, tablets, and desktops. This ensures consistent branding, smooth browsing, and a visually polished experience on every device.", tags: [{ t: "Mobile-First", c: "t-orange" }, { t: "Cross-Device", c: "t-blue" }, { t: "Fluid Layouts", c: "t-orange" }, { t: "Touch UX", c: "t-blue" }] },
  { num: "04", icon: "/img/icon/static-website-branding.webp", title: "Visual Branding Consistency", desc: "Consistency is the foundation of a strong brand. We apply your colors, fonts, imagery, and iconography uniformly across every page of your static website — enhancing brand recognition, communicating reliability, and delivering a cohesive digital presence that sets your business apart.", tags: [{ t: "Brand Guidelines", c: "t-orange" }, { t: "Colour System", c: "t-blue" }, { t: "Visual Identity", c: "t-orange" }, { t: "Brand Voice", c: "t-blue" }] },
  {
    num: "05", icon: "/img/icon/static-website-performance.webp", title: "Performance & Engagement Optimization", desc: "Our development approach focuses on engagement. With clear calls-to-action, intuitive layouts, and strategic section placement, we create static websites that not only look impressive but encourage meaningful interaction.", tags: [{ t: "Page Speed", c: "t-orange" }, { t: "Core Web Vitals", c: "t-blue" }, { t: "SEO Architecture", c: "t-orange" }, {
      t:
        "Conversion Rate", c:
        "t-blue"
    }]
  },
];

const processSteps = [
  { num: "01", icon: "/img/icon/static-website-target.webp", title: "Business Discovery & Goal Setting", desc: "We start by having a detailed conversation about your business, target audience, industry, and objectives. Understanding your vision from the very beginning allows us to set a focused development direction that aligns perfectly with your brand and business goals.", tags: ["Business Goals", "Audience Research", "Competitor Analysis"], last: false },
  { num: "02", icon: "/img/icon/static-website-market-research.webp", title: "Market Research & Strategic Planning", desc: "Our team conducts in-depth research on your competitors, industry landscape, and user expectations. This insight helps us craft a well-informed development strategy that ensures your static website stands out, communicates clearly, and delivers real value.", tags: ["Wireframes", "Site Architecture", "Content Planning"], last: false },
  { num: "03", icon: "/img/icon/static-website-wireframing.webp", title: "Wireframing & Layout Planning", desc: "Before development begins, we create detailed wireframes that define the structure, content placement, and user flow of your website. This step ensures a logical, intuitive layout and strong visual hierarchy that guides visitors seamlessly through your content.", tags: ["Visual Design", "Brand System", "UX Prototyping"], last: false },
  { num: "04", icon: "/img/icon/static-website-design-layout.webp", title: "Design & Static Development", desc: "Our developers and designers work together to build a visually compelling, brand-consistent static website. From typography and color systems to imagery and interface elements, every detail is crafted to reflect your brand's professionalism and identity.", tags: ["Responsive Code", "SEO Structure", "Performance"], last: false },
  { num: "05", icon: "/img/icon/static-website-responsive.webp", title: "Responsive Refinement & Optimization", desc: "We thoroughly test and optimize your static website across desktops, tablets, and mobile devices. This ensures consistent performance, smooth interaction, and a flawless visual experience regardless of the screen size or device used.", tags: ["Cross-Browser", "Speed Testing", "QA Review"], last: false },
  { num: "06", icon: "/img/icon/static-website-launch.webp", title: "Review, Approval & Launch", desc: "Once development is complete, we present your static website for review and welcome your feedback openly. All necessary refinements are implemented with care. Once everything meets your expectations, we finalize and deploy your website for a smooth, confident, and disruption-free launch.", tags: ["Go Live", "Monitoring", "Ongoing Support"], last: true },
];

const whyData = [
  { cls: "pcs-fb-box-tl", icon: "/img/icon/static-website-strategy.webp", title: "Intuitive & User-Focused Experience", desc: "Every static website is designed with the end user in mind. Clear structure, smooth navigation, and organized layouts create an engaging browsing experience that encourages visitors to explore and interact confidently." },
  { cls: "pcs-fb-box-tr", icon: "/img/icon/static-website-seo.webp", title: "SEO-Optimized Structure", desc: "Search-friendly development practices are implemented from the foundation stage. Clean coding standards, optimized content placement, and responsive frameworks improve online visibility and strengthen overall search engine performance." },
  { cls: "pcs-fb-box-bl", icon: "/img/icon/static-website-email.webp", title: "Professional Email Integration", desc: "Seamless email integration connects contact forms, inquiry submissions, and automated responses directly to your business email system. This ensures every lead is captured, managed efficiently, and responded to without delays." },
  { cls: "pcs-fb-box-br", icon: "/img/icon/static-website-whatsapp.webp", title: "WhatsApp Business Integration", desc: "Direct WhatsApp integration enables instant communication between visitors and your business. With a single click, users can initiate conversations, improving engagement, accelerating responses, and enhancing customer trust." },
];

const faqData = [
  { q: "What is a static website?", a: "A static website is built with fixed HTML, CSS, and JavaScript files that show the same content to every visitor. It is fast, secure, and ideal for businesses that want a simple and reliable online presence." },
  { q: "Do you handle hosting and deployment?", a: "Yes, we can help with hosting and deployment for your static website. We make sure the website is properly uploaded, configured, and launched smoothly so it works correctly from day one." },
  { q: " Do you provide support after launch?", a: "Yes, we provide support after launch to help with updates, fixes, and any technical assistance you may need. This helps keep your website running smoothly over time." },
  { q: "Can you customize a static website to match my brand?", a: "Yes, we can customize the design, colors, layout, and content to match your brand identity. The website will be tailored to reflect your business style and goals." },
  { q: "What are the benefits of a static website for my business?", a: "A static website offers fast performance, strong security, low maintenance, and a professional online presence. It is a practical choice for businesses that want a simple website with dependable performance." },
  { q: "Are static websites good for SEO?", a: "Yes, static websites are generally good for SEO because they load quickly, have clean code, and are easy for search engines to crawl. With proper optimization, they can support strong search visibility." },
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
            <div className="badge"><div className="badge-dot" />static Websites</div>
            <h1 className="wd-hero-heading">
              Fast and secure Static
              <span className="orange lined"> Websites built </span>  to Scale up Performance

            </h1>
            <p className="wd-hero-sub">

              As a leading static website development company in Coimbatore, we deliver lightning-fast, secure, and scalable static websites built to strengthen your brand presence, attract the right audience, and support sustainable business growth through superior performance, SEO visibility, and seamless user experience.

            </p>
            <div className="wd-hero-actions">
              <a className="wd-btn-fill" href="/contact-us">Connect Now<span className="wd-btn-arrow">›</span></a>
            </div>
          </div>

          {/* RIGHT — banner image */}
          <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center", animation: "fadeUp .9s .15s ease both" }}>
            <img
              src={banner}
              alt="Static Website Development Banner"
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
                <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Strategy for Static Website Development </div>
              </div>
              <h2 className="wd-ap-heading">Fast, Clean &  <span>Conversion-Focused </span> Static Website Development</h2>
              <p className="wd-ap-intro">
                Your website creates the first impression of your business online. As an experienced static website development company, we build fast, secure, and strategically structured websites aligned with your business goals.
              </p>
              <p className="wd-ap-intro">
                Every element, from layout design to code structure, is developed with a focus on SEO performance, user engagement, and seamless browsing experience across all devices and screen sizes.
              </p>
              <p className="wd-ap-intro">
                As a trusted static website development company , we create modern and responsive static websites that combine visual appeal, performance, and functionality to strengthen your digital presence and business credibility.

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
            <h3 className="pcs-offer-heading">Why Should You Choose for<span><i> Static Website Development?</i></span></h3>
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
                <h2 className="partners-eyebrow" style={{ textAlign: 'center' }}>Our Expertise
                </h2>
              </div>
            </div>
            <h3 className="pcs-wi5-heading">What’s Included in Our  <span><i>Static Website</i></span> Development Services?</h3>
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
                  <h2 className="partners-eyebrow" style={{ textAlign: 'center' }}>Workflow Process
                  </h2>
                </div>
              </div>
              <h3 className="pcs-proc-title">Our  <span><i> Static Website</i></span> Development Process </h3>
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
                  <h2 className="partners-eyebrow" style={{ textAlign: 'center' }}>Key Service Features  </h2>
                </div>
              </div>            <h3 className="pcs-fb-title">Features of our Static  <span><i>Website Development </i></span> Services</h3>
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