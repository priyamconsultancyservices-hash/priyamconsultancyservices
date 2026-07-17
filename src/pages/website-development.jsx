import { useState, useEffect, useRef, useCallback } from "react";
import CTASection from "../components/HomePage/CTA";
import emailjs from "@emailjs/browser";
const TechImg = "/img/Technology-logos.gif";
import BlogSection from "../components/BlogSection";
import Layout from '@theme/Layout';
const banner = "/img/website-development.webp";
import Head from '@docusaurus/Head';


function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/website-development/";
  const imageUrl = "https://www.priyamconsultancy.com/img/website-development.png";

  return (
    <Head>
      {/* ── Primary Meta ── */}
      <title>Best Website Development Services in Coimbatore | Experts   </title>
      <meta name="description" content="Professional website development services in Coimbatore. We build fast, SEO-friendly, responsive websites that boost brand presence and business growth. Visit us! " />
      <meta name="keywords" content="Website Development, Website Development Company in Coimbatore, Web Development Services in Coimbatore, Web Development Company in Coimbatore, Website Development Services in Coimbatore, Website Design & Development in Coimbatore, Website Design Services in Coimbatore " />
      <link rel="canonical" href="https://www.priyamconsultancy.com/website-development/" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Best Website Development Services in Coimbatore | Experts   " />
      <meta property="og:description" content="Professional website development services in Coimbatore. We build fast, SEO-friendly, responsive websites that boost brand presence and business growth. Visit us! " />
      <meta property="og:url" content="https://www.priyamconsultancy.com/website-development/" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="PCS Business Solution" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Best Website Development Services in Coimbatore | Experts   " />
      <meta name="twitter:description" content="Professional website development services in Coimbatore. We build fast, SEO-friendly, responsive websites that boost brand presence and business growth. Visit us! " />
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
              "@id":"https://www.priyamconsultancy.com/website-development/",
              "name":"website-development"
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
          "@id":"https://www.priyamconsultancy.com/website-development/#service",
          "name":"Website Development",
          "serviceType":"Website Development Services",
          "url":"https://www.priyamconsultancy.com/website-development/",
          "description":"Priyam Consultancy provides professional website development services including custom website development, responsive web design, business websites, CMS development, e-commerce development and scalable web solutions for businesses across India.",
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
        "name": "website-development",
        "image": ["https://www.priyamconsultancy.com/img/website-development.png"],
        "description": "Best website development services in Coimbatore offering business website development, corporate websites, ecommerce websites, custom web applications, responsive website design and SEO-friendly web development solutions.",
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
        "reviewCount": "4836"
        },
        "offers": {
        "@type": "Offer",
        "url": "https://www.priyamconsultancy.com/website-development/",
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
            "name": "What website development services do you offer?", 
            "acceptedAnswer": { 
              "@type": "Answer", 
              "text": "We offer website design, static website development, custom website development, WooCommerce website development, Shopify website development, and custom e-commerce solutions based on your business needs. 
        " 
            } 
          },{ 
            "@type": "Question", 
            "name": "Will my website be mobile-friendly and SEO-ready?", 
            "acceptedAnswer": { 
              "@type": "Answer", 
              "text": "Yes. We build responsive websites that work smoothly on all devices and follow SEO best practices such as clean structure, optimized content, and fast performance." 
            }
          },{ 
            "@type": "Question", 
            "name": "Can you integrate payment gateways, WhatsApp, CRM, or other tools?", 
            "acceptedAnswer": { 
              "@type": "Answer", 
              "text": "Yes. We can connect your website with the tools your business needs, including payment gateways, WhatsApp chat, CRM systems, and other third-party integrations." 
            } 
          },{ 
            "@type": "Question", 
            "name": "Do you also help with content and SEO??", 
            "acceptedAnswer": { 
              "@type": "Answer", 
              "text": "Yes. We provide content support and on-page SEO services to help your website communicate clearly and perform better in search results." 
            } 
        },{ 
            "@type": "Question", 
            "name": "What kind of businesses do you build websites for?", 
            "acceptedAnswer": { 
              "@type": "Answer", 
              "text": "We build websites for startups, small businesses, service companies, ecommerce brands, and growing enterprises that want a strong online presence." 
            } 
        },{ 
            "@type": "Question", 
            "name": "What is included in your website development service?", 
            "acceptedAnswer": { 
              "@type": "Answer", 
              "text": "Our website development service typically includes planning, design, development, responsive setup, basic SEO implementation, integrations, testing, and launch support." 
            } 
            }] 
        }

      `}</script>
    </Head>
  );
}


/* ══════ DATA ══════ */
const SERVICES = [
  { num: "01", icon: <img src="/img/icon/svc-website-design.webp" alt="Website Design" width="30" height="30" />, title: "Website Design", tag: "Design", tagColor: "#ed8337", fill: 92, desc: "Create visually compelling, user-focused website designs that enhance brand identity and engagement. We combine modern aesthetics, intuitive navigation, and strategic layouts to deliver impactful digital experiences that build credibility and customer trust." },
  { num: "02", icon: <img src="/img/icon/svc-static-website.webp" alt="Static Website Development" width="30" height="30" />, title: "Static Website Development", tag: "Fast", tagColor: "#ed8337", fill: 88, desc: "Develop fast, secure static websites designed for performance and simplicity. Ideal for startups and growing businesses, our solutions ensure reliability, easy maintenance, and professional online presence across all devices." },
  { num: "03", icon: <img src="/img/icon/svc-custom-website.webp" alt="Custom Website Development" width="30" height="30" />, title: "Custom Website Development", tag: "Custom", tagColor: "#ed8337", fill: 95, desc: "Build fully customized websites tailored to your business requirements and workflows. Our development approach ensures scalability, seamless integrations, flexibility, and complete control, delivering solutions aligned with long-term growth objectives." },
  { num: "04", icon: <img src="/img/icon/svc-woocommerce.webp" alt="WooCommerce Development" width="30" height="30" />, title: "WooCommerce Development", tag: "eCommerce", tagColor: "#ed8337", fill: 90, desc: "Develop scalable WooCommerce stores with secure payments and flexible customization. We focus on optimized performance, structured product management, and conversion-driven design to support consistent ecommerce growth." },
  { num: "05", icon: <img src="/img/icon/svc-ecommerce.webp" alt="Custom E-Commerce Development" width="30" height="30" />, title: "Custom E-Commerce Development", tag: "Scale", tagColor: "#ed8337", fill: 87, desc: "Create conversion-focused ecommerce websites optimized for speed, security, and usability. Our scalable platforms feature structured architecture, seamless checkout systems, and performance enhancements to maximize engagement and sales." },
  { num: "06", icon: <img src="/img/icon/svc-shopify.webp" alt="Shopify Website Development" width="30" height="30" />, title: "Shopify Website Development", tag: "Shopify", tagColor: "#ed8337", fill: 93, desc: "Design high-performing Shopify stores built for growth and automation. From store setup to customization and SEO optimization, we deliver secure, mobile-responsive solutions that enhance user experience and scalability." },
];

const FEATURES = [
  { icon: <img src="/img/icon/feat-structure.webp" alt="Strategic Website Structure" width="28" height="28" />, title: "Strategic Website Structure", desc: "Well-planned layouts and intuitive navigation systems crafted to enhance usability, improve engagement, and guide visitors smoothly toward meaningful actions." },
  { icon: <img src="/img/icon/feat-responsive.webp" alt="Responsive and Adaptive Design" width="28" height="28" />, title: "Responsive & Adaptive Design", desc: "Device-optimized, mobile-first designs ensuring seamless performance and consistent user experience across desktops, tablets, and smartphones." },
  { icon: <img src="/img/icon/feat-seo.webp" alt="Search Ready Development" width="28" height="28" />, title: "Search-Ready Development", desc: "SEO-focused coding practices, structured metadata, schema setup, and optimized architecture to strengthen search engine visibility." },
  { icon: <img src="/img/icon/feat-performance.webp" alt="Speed and Performance Enhancement" width="28" height="28" />, title: "Speed & Performance Enhancement", desc: "Optimized frameworks, efficient database structuring, and performance tuning techniques to deliver fast-loading and stable websites." },
  { icon: <img src="/img/icon/feat-integrations.webp" alt="Seamless System Integrations" width="28" height="28" />, title: "Seamless System Integrations", desc: "Integration with payment gateways, WhatsApp, shipping systems, analytics tools, and marketing solutions for streamlined operations." },
  { icon: <img src="/img/icon/feat-scalability.webp" alt="Future Ready Scalability" width="28" height="28" />, title: "Future-Ready Scalability", desc: "Flexible development frameworks designed to accommodate business expansion, advanced features, increasing traffic, and evolving digital needs." },
];

const PROCESS_LEFT = [
  { num: "Step 01", icon: <img src="/img/icon/website-discover.webp" alt="Discover" width="24" height="24" />, title: "Discover", desc: "We understand your brand, goals, audience, competitors, and preferences to build a strategic foundation aligned with business objectives." },
  { num: "Step 02", icon: <img src="/img/icon/proc-plan-structure.webp" alt="Plan and Structure" width="24" height="24" />, title: "Plan & Structure", desc: "We create sitemaps, define functionalities, finalize technology stack, and establish timelines ensuring clarity before development begins." },
  { num: "Step 03", icon: <img src="/img/icon/proc-design-prototype.webp" alt="Design and Prototype" width="24" height="24" />, title: "Design & Prototype", desc: "Our designers craft intuitive interfaces and interactive prototypes, allowing you to review visual direction before development." },
];

const PROCESS_RIGHT = [
  { num: "Step 04", icon: <img src="/img/icon/proc-develop-integrate.webp" alt="Develop and Integrate" width="24" height="24" />, title: "Develop & Integrate", desc: "We convert designs into responsive code, integrating CMS, analytics, databases, and essential third-party tools." },
  { num: "Step 05", icon: <img src="/img/icon/proc-test-optimize.webp" alt="Test and Optimize" width="24" height="24" />, title: "Test & Optimize", desc: "We conduct thorough testing across devices, browsers, speed performance, and functionality to ensure reliability." },
  { num: "Step 06", icon: <img src="/img/icon/proc-launch-support.webp" alt="Launch and Support" width="24" height="24" />, title: "Launch & Support", desc: "After final approval, we launch confidently and provide ongoing support, updates, and performance monitoring." },
];

/* ══════ SECTION 1A: HERO BANNER ══════ */
function HeroBanner() {
  return (
    <section className="wd-hero">
      <div className="wd-hero-bg-radial" />
      <div className="wd-hero-bg-grid" />

      {/* LEFT */}
      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column" }}>
        <div className="badge"><div className="badge-dot" />Website Development</div>
        <h1 className="wd-hero-heading">
          Performance Driven
          <span className="orange lined"> Website Development</span> from Concept to Code
        </h1>
        <p className="wd-hero-sub">
          At PCS, we deliver strategic website development services that combine design, performance, and scalability to help businesses grow online. As a trusted website development agency in Coimbatore , we ensure high-value solutions optimized for cost efficiency.
        </p>
        <div className="wd-hero-actions">
          <a className="wd-btn-fill" href="/contact-us">Connect Now<span className="wd-btn-arrow">›</span></a>
        </div>
      </div>

      {/* RIGHT — banner image */}
      <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center", animation: "fadeUp .9s .15s ease both" }}>
        <img
          src={banner}
          alt=" Website Development Banner"
          className="wd-hero-img"
        />
      </div>
    </section>
  );
}

/* ══════ SECTION 1B: OUR APPROACH ══════ */
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
          <h2 className="ap2-heading">Smart, Scalable, and <span> Stunning Websites</span> Built for Results</h2>
          <p className="ap-intro">
            Your website is more than a digital storefront — it represents your brand, credibility, and customer experience around the clock. We follow a strategy-first approach focused on usability, structure, scalability, and long-term business growth.
          </p>
          <p className="ap-intro">
            Every website element is thoughtfully planned to align with your business objectives, audience expectations, and brand positioning. Our development process prioritizes seamless functionality, responsive performance, and creating strong digital foundations that support growth.
          </p>
          <p className="ap-intro">
            Whether launching a startup website, revamping an outdated platform, or building a complex system, we focus on speed, reliability, and user experience. Every website is designed to perform smoothly across devices and platforms.
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


/* ══════ SECTION 2: SERVICES ACCORDION ══════ */
function ServicesSection() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="svc-section">
      <div className="svc-layout">
        <div className="svc-right-col">
          <div className="partners-header1">
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Specialized Website Development Services
            </h2>
          </div>          <h3 className="svc-heading">Not Just Websites. <span className="accent"><i>Growth-Driven</i></span> Digital Experiences.</h3>
          <p className="svc-sub">
            We create websites that go beyond pretty pages. They’re fast, intuitive, optimized, and built for long-term impact.
          </p>

          <a href="/contact-us" className="svc-cta-btn">Get a Free Consultation &nbsp;→</a>
        </div>
        <div className="svc-accordion">
          {SERVICES.map((s, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className={`acc-item${isOpen ? " open" : ""}`}>
                <div className="acc-header" onClick={() => setOpenIdx(isOpen ? -1 : i)}>
                  <span className="acc-num">{s.num}</span>
                  <div className="acc-icon">{s.icon}</div>
                  <h4 className="acc-title">{s.title}</h4>
                  {/* <span className="acc-tag" style={{background:`${s.tagColor}1e`,color:s.tagColor,border:`1px solid ${s.tagColor}40`}}>{s.tag}</span> */}
                  <div className="acc-arrow">▼</div>
                </div>
                <div className="acc-body">
                  <div className="acc-divider" style={{ background: `linear-gradient(90deg,${s.tagColor}4d,transparent)` }}></div>
                  <div className="acc-desc">{s.desc}</div>
                  {/* <div className="acc-bar-wrap">
                    <div className="acc-bar-track">
                      <div className="acc-bar-fill" style={{background:s.tagColor, width: isOpen ? `${s.fill}%` : "0%"}}></div>
                    </div>
                    <span className="acc-bar-label">Client Satisfaction · {s.fill}%</span>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════ SECTION 2B: WHY CHOOSE US ══════ */
function WhyChooseUsSection() {

  return (
    <section className="wcu-section">
      <div className="wcu-inner">
        {/* LEFT — IMAGE */}
        <div className="wcu-img-col">
          <div className="wcu-img-frame">
            <img
              src={TechImg}
              alt="Web development team working"
            />
          </div>
        </div>

        {/* RIGHT — TEXT */}
        <div className="wcu-text-col">
          <div className="h2artners-header1">
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Why Choose Us</h2>
          </div>
          <h3 className="wcu-heading">
            Trusted
            <span><i> Website Development Company</i> </span> Delivering Growth-Driven Digital Solutions
          </h3>
          <p className="wcu-desc">
            We develop strategic, high-performance websites designed to enhance brand visibility and support measurable business growth. Our solutions combine modern design, structured architecture, and scalable technology tailored to diverse industries and operational requirements.
          </p>
          <p className="wcu-desc">
            Our approach begins with understanding your brand identity, target audience, competitors, and long-term objectives. This research-driven foundation allows us to create websites that reflect your vision while supporting usability, engagement, and performance.
          </p>
          <p className="wcu-desc">
            Every website is built with SEO best practices, mobile responsiveness, speed optimization, and secure coding standards. The result is a reliable, user-focused digital platform that strengthens credibility and drives sustainable online growth.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════ SECTION 3: PROCESS — FIXED ══════ */
function ProcessSection() {
  return (
    <section className="proc-section" style={{padding: "7rem 6% 8rem ", background:'#fff'}}>
      <div className="proc-inner">
        <div className="proc-header">
          <div className="partners-header1" style={{ textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center', color: '#ed8337' }}>Our Proven Website Development Process</h2>
          </div>
          <h3 className="proc-heading">Planned for Performance. <span><i>Built for Scale.</i></span> Launched with Confidence.</h3>
          <p className="proc-sub">
            We follow a transparent, step-by-step process to ensure your site is built efficiently, beautifully, and exactly as you envisioned.
          </p>
        </div>

        <div className="proc-cols">
          {/* LEFT */}
          <div className="proc-points left">
            {PROCESS_LEFT.map((p, i) => (
              <div key={i} className="proc-point">
                <div className="proc-icon">{p.icon}</div>
                <div className="proc-point-text">
                  <div className="proc-pt-num">{p.num}</div>
                  <h4 className="proc-pt-title">{p.title}</h4>
                  <div className="proc-pt-desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER MOCKUP */}
          <div className="proc-mockup-wrap">
            <div className="proc-badge pb-tl">✓ Strategy</div>
            <div className="proc-badge pb-tr">🚀 Launch</div>
            <div className="proc-badge pb-bl">🎨 Design</div>
            <div className="proc-badge pb-br">⚙️ Dev</div>
            <div className="proc-screen">
              <div className="proc-browser-bar">
                <div className="pb-dot pb-d1"></div>
                <div className="pb-dot pb-d2"></div>
                <div className="pb-dot pb-d3"></div>
                <div className="proc-url-bar">pcs-website.com</div>
              </div>
              <div className="proc-site-body">
                <div className="ps-nav">
                  <div className="ps-nav-logo">P</div>
                  <div className="ps-nav-links">
                    <div className="ps-nav-link active"></div>
                    <div className="ps-nav-link"></div>
                    <div className="ps-nav-link"></div>
                    <div className="ps-nav-link"></div>
                  </div>
                  <div className="ps-nav-btn-sm">Contact</div>
                </div>
                <div className="ps-hero">
                  <div className="ps-hero-tag">PCS · Web Dev</div>
                  <div className="ps-hero-h">Websites Built<br />for Results</div>
                  <div className="ps-hero-btn">Explore More →</div>
                </div>
                <div className="ps-cards">
                  {["🏗️", "📱", "🔍"].map((ic, i) => (
                    <div key={i} className="ps-card">
                      <div className="ps-card-icon">{ic}</div>
                      <div className="ps-card-line w100"></div>
                      <div className="ps-card-line w70"></div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
            <div style={{ position: "absolute", bottom: "60px", left: "50%", width: "10px", height: "10px", borderRadius: "50%", background: "var(--orange)", border: "2px solid #fff", boxShadow: "0 2px 8px rgba(237,131,55,0.5)", animation: "float1 2s ease-in-out infinite", zIndex: 15 }}></div>
          </div>

          {/* RIGHT */}
          <div className="proc-points right">
            {PROCESS_RIGHT.map((p, i) => (
              <div key={i} className="proc-point">
                <div className="proc-icon">{p.icon}</div>
                <div className="proc-point-text">
                  <div className="proc-pt-num">{p.num}</div>
                  <h4 className="proc-pt-title">{p.title}</h4>
                  <div className="proc-pt-desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════ SECTION 4: KEY FEATURES CAROUSEL — CENTER FIXED ══════ */
function KeyFeaturesSection() {
  const N = FEATURES.length;
  const [current, setCurrent] = useState(0);
  const wrapRef = useRef(null);
  const cardRefs = useRef([]);
  const dragStart = useRef(0);
  const dragging = useRef(false);
  const dragDelta = useRef(0);
  const timerRef = useRef(null);

  const goTo = useCallback((idx) => {
    setCurrent(((idx % N) + N) % N);
    dragDelta.current = 0;
  }, [N]);

  const layout = useCallback((animate) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const W = wrap.offsetWidth;
    const cardW = Math.min(340, W * 0.78);
    const cur = current;

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      let rel = i - cur;
      if (rel > N / 2) rel -= N;
      if (rel < -N / 2) rel += N;
      const absRel = Math.abs(rel);

      if (absRel > 3) { card.style.opacity = "0"; card.style.pointerEvents = "none"; return; }

      const xStep = cardW * 0.56;
      const xOffset = rel * xStep;
      const scale = 1 - absRel * 0.1;
      const zIndex = 10 - absRel;
      const opacity = rel === 0 ? 1 : Math.max(0.12, 1 - absRel * 0.45);
      const yOffset = absRel * 6;
      const nudge = rel === 0 ? dragDelta.current * 0.5 : (rel === 1 || rel === -1) ? dragDelta.current * 0.15 : 0;

      card.style.width = cardW + "px";
      /* CENTER FIX: use left:50% on the card, then offset from center */
      card.style.left = "50%";
      card.style.top = "50%";
      card.style.marginLeft = -(cardW / 2) + "px";
      card.style.marginTop = "-120px"; /* half of approx card height */
      card.style.transform = `translateX(${xOffset + nudge}px) translateY(${yOffset}px) scale(${scale})`;
      card.style.zIndex = zIndex;
      card.style.opacity = opacity;
      card.style.pointerEvents = rel === 0 ? "auto" : "none";
      card.style.borderColor = rel === 0 ? "rgba(237,131,55,0.45)" : "rgba(255,255,255,0.10)";
      card.style.boxShadow = rel === 0
        ? "0 20px 60px rgba(0,0,0,0.55),0 0 0 1px rgba(237,131,55,0.2),inset 0 1px 0 rgba(255,255,255,0.18)"
        : "0 8px 30px rgba(0,0,0,0.35),inset 0 1px 0 rgba(255,255,255,0.1)";

      const accent = card.querySelector(".kf-card-accent");
      if (accent) accent.style.width = rel === 0 ? "65%" : "0%";

      card.classList.toggle("is-active", rel === 0);
      if (!animate) {
        card.style.transition = "none";
        requestAnimationFrame(() => { card.style.transition = ""; });
      }
    });
  }, [current, N]);

  useEffect(() => { layout(true); }, [current, layout]);
  useEffect(() => {
    const handler = () => layout(false);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [layout]);

  useEffect(() => {
    timerRef.current = setInterval(() => goTo(current + 1), 4000);
    return () => clearInterval(timerRef.current);
  }, [current, goTo]);

  const onDragStart = (x) => { dragStart.current = x; dragging.current = true; clearInterval(timerRef.current); };
  const onDragMove = (x) => {
    if (!dragging.current) return;
    dragDelta.current = x - dragStart.current;
    layout(false);
  };
  const onDragEnd = () => {
    if (!dragging.current) return;
    dragging.current = false;
    if (dragDelta.current < -50) goTo(current + 1);
    else if (dragDelta.current > 50) goTo(current - 1);
    else { dragDelta.current = 0; layout(true); }
  };

  return (
    <section className="kf-section">
      <div className="kf-orbs">
        <div className="kf-orb kf-orb-1"></div>
        <div className="kf-orb kf-orb-2"></div>
        <div className="kf-orb kf-orb-3"></div>
      </div>
      <div className="kf-inner">
        <div className="kf-header">
          <div className="partners-header1" style={{ textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Uniqueness
            </h2>
          </div>          <h3 className="kf-title">Key <span>Features</span></h3>
          <p className="kf-sub">Everything we build is engineered for performance, growth, and lasting digital impact.</p>
        </div>

        <div
          className="kf-carousel-wrap"
          ref={wrapRef}
          onMouseDown={e => onDragStart(e.clientX)}
          onMouseMove={e => { if (dragging.current) onDragMove(e.clientX); }}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onTouchStart={e => onDragStart(e.touches[0].clientX)}
          onTouchMove={e => onDragMove(e.touches[0].clientX)}
          onTouchEnd={onDragEnd}
        >
          {FEATURES.map((f, i) => (
            <div key={i} className="kf-card" ref={el => cardRefs.current[i] = el}>
              <div className="kf-icon-wrap">{f.icon}</div>
              <div className="kf-card-body">
                <h4 className="kf-card-title">{f.title}</h4>
                <div className="kf-card-desc">{f.desc}</div>
                <div className="kf-card-accent"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="kf-nav">
          <button className="kf-nav-btn" onClick={() => goTo(current - 1)}>←</button>
          <div className="kf-dots">
            {FEATURES.map((_, i) => (
              <button key={i} className={`kf-dot${i === current ? " active" : ""}`} onClick={() => goTo(i)}></button>
            ))}
          </div>
          <button className="kf-nav-btn" onClick={() => goTo(current + 1)}>→</button>
        </div>
        <div className="kf-drag-hint">← drag or swipe to explore →</div>
      </div>
    </section>
  );
}

/* ══════ SECTION 5: FAQ ══════ */

const faqData = [
  { q: "What website development services do you offer?", a: "We offer website design, static website development, custom website development, WooCommerce website development, Shopify website development, and custom e-commerce solutions based on your business needs. " },
  { q: "Will my website be mobile-friendly and SEO-ready?", a: "Yes. We build responsive websites that work smoothly on all devices and follow SEO best practices such as clean structure, optimized content, and fast performance." },
  { q: "Can you integrate payment gateways, WhatsApp, CRM, or other tools?", a: "Yes. We can connect your website with the tools your business needs, including payment gateways, WhatsApp chat, CRM systems, and other third-party integrations." },
  { q: "Do you also help with content and SEO?", a: "Yes. We provide content support and on-page SEO services to help your website communicate clearly and perform better in search results." },
  { q: "What kind of businesses do you build websites for?", a: "We build websites for startups, small businesses, service companies, ecommerce brands, and growing enterprises that want a strong online presence." },
  { q: "What is included in your website development service?", a: "Our website development service typically includes planning, design, development, responsive setup, basic SEO implementation, integrations, testing, and launch support." },
];
function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <section className="faq-section" style={{ padding: '80px 0 0' }}>
      <div className="partners-header1" style={{ textAlign: 'center' }}>
        <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Frequently Asked Questions</h2>
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

/* ══════ SECTION 2C: PORTFOLIO ══════ */
const PORTFOLIO_COL1 = [
  { img: "/img/portfolio/urcts.webp", label: "URCTS", tag: "" },
  { img: "/img/portfolio/am.webp", label: "AM Builders", tag: "" },
  { img: "/img/portfolio/zky.webp", label: "ZKY", tag: "" },
  { img: "/img/portfolio/abb.webp", label: "ABB", tag: "" },
  { img: "/img/portfolio/riya.webp", label: "Riya consultancy", tag: "" },
];
const PORTFOLIO_COL2 = [
  { img: "/img/portfolio/feralroots.webp", label: "Feral Roots", tag: "" },
  { img: "/img/portfolio/sterlocare.webp", label: "SterloCare", tag: "" },
  { img: "/img/portfolio/sterlo.webp", label: "Sterlo", tag: "" },
  { img: "/img/portfolio/talenttribe.webp", label: "Talent Tribe", tag: "" },
  { img: "/img/portfolio/sterlobuild.webp", label: "SterloBuild", tag: "" },
];
const PORTFOLIO_COL3 = [
  { img: "/img/portfolio/product1.webp", label: "", tag: "" },
  { img: "/img/portfolio/product2.webp", label: "", tag: "" },
  { img: "/img/portfolio/product3.webp", label: "", tag: "" },
  { img: "/img/portfolio/product4.webp", label: "", tag: "" },
  { img: "/img/portfolio/product5.webp", label: "", tag: "" },
];

function PortfolioColumn({ items, speed, direction }) {
  const innerRef = useRef(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const rafRef = useRef(null);
  // duplicate for infinite loop
  const doubled = [...items, ...items];

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const singleH = el.scrollHeight / 2;

    const animate = () => {
      if (!pausedRef.current) {
        offsetRef.current += speed;
        if (direction === "up") {
          if (offsetRef.current >= singleH) offsetRef.current -= singleH;
          el.style.transform = `translateY(-${offsetRef.current}px)`;
        } else {
          if (offsetRef.current >= singleH) offsetRef.current -= singleH;
          el.style.transform = `translateY(${offsetRef.current - singleH}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, direction]);

  return (
    <div
      className="pf-col"
      style={{ height: "min(600px, 60vw)", overflow: "hidden", position: "relative" }}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div ref={innerRef} className="pf-col-inner">
        {doubled.map((item, i) => (
          <div className="pf-card" key={i}>
            <img src={item.img} alt={item.label} loading="lazy" />
            <div className="pf-card-overlay">
              <div className="pf-card-label">{item.label}</div>
              <div className="pf-card-tag">{item.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PortfolioSection() {
  return (
    <section className="pf-section" style={{ padding: '0' }}>
      <div className="pf-inner">
        {/* LEFT */}
        <div className="pf-left">
          <div className="partners-header1">
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our  Portfolio</h2>
          </div>
          <h3 className="pf-heading">
            Proven Website <span><i>Solutions Across</i></span> Industries
          </h3>
          <p className="pf-desc">
            Review performance-driven websites developed with strategic architecture, intuitive design, and measurable results.
          </p>
          <div className="pf-btns">
            <a href="/portfolio" className="pf-btn">View All Projects →</a>
          </div>
        </div>

        {/* RIGHT — 3 auto-scroll columns */}
        <div className="pf-cols">
          <PortfolioColumn items={PORTFOLIO_COL1} speed={0.6} direction="up" />
          <PortfolioColumn items={PORTFOLIO_COL2} speed={0.5} direction="down" />
          <PortfolioColumn items={PORTFOLIO_COL3} speed={0.7} direction="up" />
        </div>
      </div>
    </section>
  );
}

/* ══════ ROOT APP ══════ */
export default function PCSWebsite() {
  return (
    <Layout>
      <>
        <SEOHead />
        <HeroBanner />
        <ApproachSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <PortfolioSection />
        <ProcessSection />
        <KeyFeaturesSection />
        <FAQSection />
        <BlogSection />
        <CTASection />
      </>
    </Layout>
  );
}