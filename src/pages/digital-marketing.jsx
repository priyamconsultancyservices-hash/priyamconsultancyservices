import '../css/pages-common.css';
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import BlogSection from "../components/BlogSection";
import CTASection from "../components/HomePage/CTA";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
const banner = "/img/digital-marketing.webp";


/* ═══════════════════════════════════════════════════
   SEO META & SCHEMA
═══════════════════════════════════════════════════ */
function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/digital-marketing/";
  const imageUrl = "https://www.pcsbusinesssolution.com/img/digital-marketing.png";



  return (
    <Head>
      <title>Digital Marketing Agency in Coimbatore | Priyam Consultancy</title>
      <meta name="description" content="PCS is the best digital marketing agency in India with results-driven strategies. We offer the best digital marketing services in India for your brand's growth!" />
      <meta name="keywords" content="Digital Marketing Agency, Digital Marketing, Digital Marketing Services, Digital Marketing Company, Digital Marketing Solutions, igital Marketing Consultant" />
      <link rel="canonical" href="https://www.priyamconsultancy.com/digital-marketing/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Digital Marketing Agency in Coimbatore | Priyam Consultancy" />
      <meta property="og:description" content="PCS is the best digital marketing agency in India with results-driven strategies. We offer the best digital marketing services in India for your brand's growth!" />
      <meta property="og:url" content="https://www.priyamconsultancy.com/digital-marketing/" />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Digital Marketing Agency in Coimbatore | Priyam Consultancy" />
      <meta name="twitter:description" content="PCS is the best digital marketing agency in India with results-driven strategies. We offer the best digital marketing services in India for your brand's growth!" />
      <meta name="twitter:image" content={imageUrl} />


      {/* ── Schema 1: Organization (with real phone + social links) ── */}
      <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Priyam Consultancy Services",
            "alternateName": "PCS",
            "url": "https://www.priyamconsultancy.com/",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png"
            },
            "description": "Priyam Consultancy Services is an all-in-one business solutions provider offering Business Registration, Statutory Compliance, Virtual CFO, Digital Transformation, Digital Marketing, Website Development, and HR Services across India.",
            "foundingDate": "2020",
            "areaServed": "IN",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91 96774 44048",
                "contactType": "customer support",
                "availableLanguage": ["English", "Tamil"]
              }
            ],
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61577125709962",
              "https://www.linkedin.com/company/priyam-consultancy-services/",
              "https://www.instagram.com/priyam_consultancy_services/",
              "https://x.com/services91032",
              "https://g.co/kgs/rdTYdi6"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Business & Digital Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Registration" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Statutory Compliance" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Virtual CFO Services" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Transformation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HR & Payroll Services" } }
              ]
            }
          }
        `}</script>

      {/* ── Schema 2: WebSite ── */}
      <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Priyam Consultancy Services",
            "url": "https://www.priyamconsultancy.com/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.priyamconsultancy.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>

      {/* ── Schema 3: LocalBusiness ── */}
      <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Priyam Consultancy Services",
            "image": "https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png",
            "url": "https://www.priyamconsultancy.com/",
            "description": "All-in-one business consultancy offering registration, compliance, digital transformation, marketing and HR services across India.",
            "telephone": "+91 96774 44048",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Coimbatore",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "areaServed": { "@type": "Country", "name": "India" },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61577125709962",
              "https://www.linkedin.com/company/priyam-consultancy-services/",
              "https://www.instagram.com/priyam_consultancy_services/"
            ]
          }
        `}</script>

      {/* ── Schema 4: Service ── */}
      <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.priyamconsultancy.com/#service",
            "serviceType": "Business Consultancy & Digital Services",
            "name": "Business Registration, Digital Marketing & IT Solutions",
            "url": "https://www.priyamconsultancy.com/",
            "description": "Priyam Consultancy Services provides end-to-end business solutions including Business Registration, Statutory Compliance, Virtual CFO, Digital Transformation, SEO, Social Media Marketing, Google Ads, Meta Ads, Website Development, and HR & Payroll Services across India.",
            "provider": {
              "@type": "Organization",
              "name": "Priyam Consultancy Services",
              "url": "https://www.priyamconsultancy.com/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png"
              }
            },
            "areaServed": { "@type": "Country", "name": "India" },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "INR",
              "url": "https://www.priyamconsultancy.com/"
            }
          }
        `}</script>

      {/* ── Schema 5: Product (with AggregateRating) ── */}
      <script type="application/ld+json">{`
          {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Business Registration & Digital Solutions",
            "image": ["https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png"],
            "description": "All-in-one business consultancy services in Coimbatore — Business Registration, Compliance, Digital Transformation, Digital Marketing, Website Development, HR & Payroll Management.",
            "brand": {
              "@type": "Brand",
              "name": "Priyam Consultancy Services"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.9",
                "bestRating": "5"
              },
              "author": { "@type": "Organization", "name": "Priyam Consultancy Services" }
            },
            "offers": {
              "@type": "Offer",
              "url": "https://www.priyamconsultancy.com/",
              "priceCurrency": "INR",
              "price": "0.00",
              "priceValidUntil": "2026-12-31",
              "availability": "https://schema.org/InStock",
              "seller": { "@type": "Organization", "name": "Priyam Consultancy Services" }
            }
          }
        `}</script>

      {/* ── Schema 6: BreadcrumbList ── */}
      <script type="application/ld+json">{`
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
              }
            ]
          }
        `}</script>

      {/* ── Schema 7: ItemList (All Services) ── */}
      <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Priyam Consultancy Services — All Services",
            "url": "https://www.priyamconsultancy.com/",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Business Registration" },
              { "@type": "ListItem", "position": 2, "name": "Statutory Compliance" },
              { "@type": "ListItem", "position": 3, "name": "Virtual CFO Services" },
              { "@type": "ListItem", "position": 4, "name": "Digital Transformation" },
              { "@type": "ListItem", "position": 5, "name": "Search Engine Optimization (SEO)" },
              { "@type": "ListItem", "position": 6, "name": "Social Media Marketing" },
              { "@type": "ListItem", "position": 7, "name": "Performance Marketing (PPC)" },
              { "@type": "ListItem", "position": 8, "name": "Content Marketing" },
              { "@type": "ListItem", "position": 9, "name": "Website Development" },
              { "@type": "ListItem", "position": 10, "name": "HR & Payroll Management" }
            ]
          }
        `}</script>

      {/* ── Schema 8: FAQPage ── */}
      <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What makes PCS different from other consultancy agencies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "At PCS, we focus on strategy, creativity, and measurable business growth. Every solution is customised to your brand goals, helping you build stronger visibility, better engagement, and long-term digital success."
                }
              },
              {
                "@type": "Question",
                "name": "What types of digital marketing services do you provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer SEO, performance marketing (PPC), social media marketing, content marketing, email & WhatsApp campaigns, graphic design, and analytics-driven strategies to boost online visibility and engagement."
                }
              },
              {
                "@type": "Question",
                "name": "What are the benefits of digital transformation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Digital transformation improves operational efficiency, enhances customer experience, and enables data-driven decision-making. It drives innovation, scalability, and long-term business growth."
                }
              },
              {
                "@type": "Question",
                "name": "What is a company registration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Company registration is the legal process of forming a business entity, obtaining licenses, and ensuring compliance with government regulations to operate officially."
                }
              },
              {
                "@type": "Question",
                "name": "How long to see results through digital marketing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Results vary by strategy; paid campaigns may show immediate impact, while SEO and organic efforts typically take 3 to 6 months for measurable outcomes."
                }
              },
              {
                "@type": "Question",
                "name": "How are your HR services different from other agencies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide tailored HR solutions combining strategy, compliance, payroll, recruitment, and employee engagement with seamless integration into your business operations."
                }
              },
              {
                "@type": "Question",
                "name": "Can PCS manage the entire digital marketing process?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, PCS provides complete end-to-end digital marketing support including branding, website development, SEO, content marketing, social media management, paid advertising, lead generation, and performance tracking."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work with startups as well as established businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We work with startups, SMEs, and large enterprises. Our team creates scalable solutions suitable for businesses at every stage of growth and expansion."
                }
              }
            ]
          }
        `}</script>

    </Head>
  );
}

/* ─── Google Fonts (now loaded via pages-common.css) ─── */
const FontLoader = () => null;


/* ═══════════════════════════════
   SECTION 1 — HERO BANNER
═══════════════════════════════ */
function HeroSection() {
  return (
    <section className="hero" id="hero">

      {/* LEFT CONTENT */}
      <div className="hero-left">
        <div className="h-badge"><div className="badge-dot" />Digital Marketing </div>
        <h1 className="hero-heading" style={{fontWeight: '600'}}>
          Best
          <span className="hl lined" style={{ marginLeft: '12px' }}>Digital Marketing </span>
          Who Puts the Clients First
        </h1>
        <p className="hero-sub">
          As the best digital marketing agency, we believe great digital marketing starts with listening. We ask the right questions to understand what truly holds your business back—whether it's low leads, weak visibility, or underperforming campaigns. As a trusted digital marketing company, we go beyond surface-level strategies and uncover insights that drive real results.
        </p>
        <div className="hero-actions">
          <a className="btn-fill" href="/contact-us">Explore More <span className="btn-arrow">›</span></a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-right">
        <img
          src={banner}
          alt="Digital Marketing Illustration"
          className="hero-img"
        />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — OUR APPROACH + FORM
═══════════════════════════════════════════ */

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
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Approach in</div>
          </div>
          <h2 className="ap2-heading">Result-Driven  <span>Digital Marketing</span> Services</h2>
          <p className="ap-intro">
            At our full-service digital marketing company, every digital marketing service we offer is aligned with measurable business outcomes. Whether it’s lead generation, conversions, or brand awareness, our digital marketing strategies are designed to deliver impact.
          </p>
          <p className="ap-intro">
            We don’t believe in guesswork. Our best digital marketing services are backed by data, tracking, and continuous optimization. As a best digital marketing company, we measure what matters and refine what doesn’t work.
          </p>
          <p className="ap-intro">
            In the fast-changing world of digital marketing, we stay ahead by constantly testing, learning, and improving. That’s what makes us the best digital marketing agency businesses trust.          </p>
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


/* ═══════════════════════════════════════════
   SECTION 3 — SERVICES CARDS
═══════════════════════════════════════════ */
const SERVICES = [
  {
    icon: <img src="/img/icon/dm-seo.webp" alt="Search Engine Optimization" width="28" height="28" />,
    title: "Search Engine Optimization",
    desc: "Our digital marketing experts help your business rank higher, increase visibility, and drive organic traffic consistently.",
    link: "/search-engine-optimization"  // ← உங்கள் page path போடுங்கள்
  },
  {
    icon: <img src="/img/icon/paid-marketing.webp" alt="Paid Marketing" width="28" height="28" />,
    title: "Performance Marketing",
    desc: "We create high-performing ad campaigns as part of our digital marketing services, targeting the right audience at the right time.",
    link: "/performance-marketing"
  },
  {
    icon: <img src="/img/icon/dm-content-marketing.webp" alt="Content Marketing" width="28" height="28" />,
    title: "Content Marketing",
    desc: "Content is at the core of digital marketing. We craft content that engages, informs, and converts.",
    link: "/content-marketing"
  },
  {
    icon: <img src="/img/icon/social-media-marketing.webp" alt="Social Media Marketing" width="28" height="28" />,
    title: "Social Media Marketing",
    desc: "Our digital marketing service turns engagement into loyalty through strategic storytelling and audience connection.",
    link: "/social-media-marketing"
  },
  {
    icon: <img src="/img/icon/dm-website-development.webp" alt="Website Development" width="28" height="28" />,
    title: "Website Development",
    desc: "As the best digital marketing company, we build responsive, high-performing websites that support your digital marketing goals.",
    link: "/website-development"
  },
  {
    icon: <img src="/img/icon/email-whatsapp-marketing.webp" alt="Email and WhatsApp Marketing" width="28" height="28" />,
    title: "Email & WhatsApp Marketing",
    desc: "We strengthen your digital marketing efforts with direct communication strategies that boost conversions and retention.",
    link: "/performance-marketing"
  },
];
function ServicesSection() {
  return (
    <section className="svc-section" style={{ position: "relative", background: "#004168", padding: "8rem 6% 7rem", overflow: "hidden" }}>
      <div className="svc-bg-r" /><div className="svc-grid" />
      <div className="svc-orb svc-orb-1" /><div className="svc-orb svc-orb-2" />
      <div className="svc-header">
        <div className="partners-header1" style={{ textAlign: 'center' }}> 
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Specialized Digital Marketing Services</h2>
        </div>
        <h2 className="svc-h2">Smart Marketing. <span>Sharp Execution.</span> Stronger Results.</h2>
        <p className="svc-sub">
          As a full-service digital marketing company, we cover every stage of your customer journey through powerful digital marketing services:</p>
      </div>
      <div className="svc-cards">
        {SERVICES.map((s, i) => (
          <div key={i} className="svc-card" style={{ animationDelay: `${.05 + i * .07}s` }}>
            <div className="svc-icon-wrap"><div className="svc-icon-ring">{s.icon}</div></div>
            <h3 className="svc-card-title">{s.title}</h3>
            <div className="svc-card-desc">{s.desc}</div>
            <a className="svc-learn" href={s.link}>LEARN MORE <span className="svc-learn-arr">↗</span></a>  {/* ← இங்கே மட்டும் மாறும் */}
            <div className="svc-card-line" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 4 — PROCESS
═══════════════════════════════════════════ */
const PROCESS_STEPS = [
  { num: "01", emoji: <img src="/img/icon/proc-discover.webp" alt="Discover and Understand" width="32" height="32" />, title: "Discover & Understand", desc: "Every brand is different, so we don’t start with assumptions—we start with you. Through in-depth discovery calls, competitor research, and audience analysis, we dig into your business goals, current challenges, and the ecosystem you operate in. This helps us understand the “why” behind the work and sets a strong foundation for everything that follows." },
  { num: "02", emoji: <img src="/img/icon/proc-audit-strategize.webp" alt="Audit and Strategize" width="32" height="32" />, title: "Audit & Strategize", desc: "Next, we run a full diagnostic of your digital presence—website, content, SEO, paid ads, social media, and more. We identify gaps, missed opportunities, and underperforming channels. Based on this, we create a custom strategy aligned with your objectives—whether it’s brand awareness, lead generation, or revenue growth." },
  { num: "03", emoji: <img src="/img/icon/proc-execute.webp" alt="Execute with Precision" width="32" height="32" />, title: "Execute with Precision", desc: "Our team then gets to work—designing creatives, writing copy, setting up campaigns, building funnels, and optimizing user journeys. Each piece of work is handled with care, clarity, and a focus on performance. We believe in clean execution with zero guesswork and complete visibility for you at every milestone." },
  { num: "04", emoji: <img src="/img/icon/proc-track-optimize.webp" alt="Track Report and Optimize" width="32" height="32" />, title: "Track, Report & Optimize", desc: "We don’t just measure for the sake of it—we measure what matters. Every campaign is monitored in real time, KPIs are reviewed weekly, and reports are built to be easy to understand. What’s performing stays, what’s not gets fixed. This ongoing optimization is what helps us keep improving, without wasting time or budget." },
  { num: "05", emoji: <img src="/img/icon/proc-scale-expand.webp" alt="Scale and Expand" width="32" height="32" />, title: "We Scale & Expand", desc: "Once we have a winning formula, we replicate and scale it across platforms or geographies. Whether it’s scaling ad budgets, expanding into new markets, or growing your content engine, we help you amplify what’s working without losing control of quality or ROI." },
];

function ProcessSection() {
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const iv = setInterval(() => setActiveStep(d => (d + 1) % 5), 2200);
    return () => clearInterval(iv);
  }, []);

  // Radial positions for 5 steps (clock-like, starting top)
  const angles = [270, 342, 54, 126, 198]; // degrees
  const R = 210; // orbit radius

  return (
    <section ref={ref} className="prc3-section" style={{ position: "relative", background: "#ffffff", padding: "6rem 4% 7rem", overflow: "hidden" }}>

      <div className="prc3-dotgrid" />

      {/* Header */}
      <div className="prc3-header">
        <div className="partners-header1" style={{ textAlign: 'center' }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Digital Marketing Process</h2>
        </div>
        <h3 className="prc3-h2">Simple. Strategic. <em>Built Around Your Goals.</em></h3>
        <p className="prc3-sub">
          We follow a clear, collaborative process that ensures every step is aligned with your business outcomes and not just marketing metrics.
        </p>
      </div>

      {/* Main Layout */}
      <div className="prc3-radial-wrap">

        {/* LEFT — Radial orbit */}
        <div className="prc3-orbit-area">
          <div className="prc3-ring-outer" />
          <div className="prc3-ring-mid" />

          {/* SVG spokes */}
          <svg className="prc3-spokes" viewBox="0 0 500 500" fill="none">
            {PROCESS_STEPS.map((s, i) => {
              const angle = (angles[i] * Math.PI) / 180;
              const cx = 250 + R * Math.cos(angle);
              const cy = 250 + R * Math.sin(angle);
              const isActive = activeStep === i;
              return (
                <line key={i}
                  x1="250" y1="250" x2={cx} y2={cy}
                  stroke={isActive ? "rgba(237,131,55,0.55)" : "rgba(2,43,68,0.07)"}
                  strokeWidth={isActive ? "2" : "1"}
                  strokeDasharray={isActive ? "none" : "4 4"}
                  style={{ transition: "stroke .4s,stroke-width .4s" }}
                />
              );
            })}
            {/* subtle outer arc ticks */}
            {PROCESS_STEPS.map((_, i) => {
              const a = (angles[i] * Math.PI) / 180;
              const r1 = 230; const r2 = 240;
              return <line key={`t${i}`}
                x1={250 + r1 * Math.cos(a)} y1={250 + r1 * Math.sin(a)}
                x2={250 + r2 * Math.cos(a)} y2={250 + r2 * Math.sin(a)}
                stroke="rgba(237,131,55,0.35)" strokeWidth="2" strokeLinecap="round" />;
            })}
          </svg>

          {/* Center hub */}
          <div className="prc3-hub">
            <img src="/img/priyam-consultancy-logo.png" alt="PCS Business Solution" className="prc3-hub-logo" />
          </div>

          {/* Orbit nodes */}
          {PROCESS_STEPS.map((s, i) => {
            const angle = (angles[i] * Math.PI) / 180;
            const x = 250 + R * Math.cos(angle);
            const y = 250 + R * Math.sin(angle);
            const pct = (v) => `${(v / 500) * 100}%`;
            return (
              <div key={i}
                className={`prc3-orb-node${activeStep === i ? " active" : ""}`}
                style={{ left: pct(x), top: pct(y) }}
                onClick={() => setActiveStep(i)}>
                <div className="prc3-orb-ring">
                  <span className="prc3-orb-emoji">{s.emoji}</span>
                  <span className="prc3-step-num">{s.num}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT — Magazine cards */}
        <div className="prc3-cards-col">
          {PROCESS_STEPS.map((s, i) => (
            <div key={i}
              className={`prc3-mag-card${visible ? " vis" : ""}${activeStep === i ? " active-card" : ""}`}
              style={{ transitionDelay: visible ? `${i * 0.1}s` : "0s" }}
              onClick={() => setActiveStep(i)}>
              <div className="prc3-accent-bar" />
              <div className="prc3-card-body">
                <div className="prc3-card-top">
                  <div className="prc3-card-num">{s.num}</div>
                  <div className="prc3-card-title-wrap">
                    <h4 className="prc3-card-title">{s.title}</h4>
                  </div>
                  <span className="prc3-card-icon">{s.emoji}</span>
                </div>
                <div className="prc3-card-desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════
   SECTION 5 — WHY CHOOSE US
═══════════════════════════════════════════ */
const WCU_POINTS = [
  { num: "01", color: "#34d399", label: "We Collaborate, Not Dictate", title: "We Collaborate, Not Dictate", desc: "We work closely with your team to build practical, scalable digital marketing strategies aligned with your goals, ensuring clarity, flexibility, and effective execution." },
  { num: "02", color: "#a78bfa", label: "We Build with Context", title: "We Build with Context", desc: "Our digital marketing services are tailored to your industry, audience, and growth stage, ensuring strategies are relevant, personalized, and designed to deliver meaningful results." },
  { num: "03", color: "#ed8337", label: "We Own Outcomes", title: "We Own Outcomes", desc: "We take full responsibility for your digital marketing performance, ensuring transparency, accountability, and consistent results from execution to optimization and measurable business growth." },
];

function WhyChooseUsSection() {
  const [visible, setVisible] = useState([false, false, false]);
  const refs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    refs.forEach((r, i) => {
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) setVisible(v => { const n = [...v]; n[i] = true; return n; });
      }, { threshold: 0.15 });
      if (r.current) obs.observe(r.current);
      return () => obs.disconnect();
    });
  }, []);

  return (
    <section className="wcu-section" style={{ position: "relative", background: "#004168", padding: "4rem 6%", overflow: "hidden" }}>
      <div className="wcu-grid-bg" />
      <div className="wcu-orb-el wcu-orb-1" /><div className="wcu-orb-el wcu-orb-2" />
      <div className="prc3-header">
        <div className="partners-header1" style={{ textAlign: 'center' }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>How We Work</h2>
        </div>
        <h2 className="prc3-h2" style={{ color: '#fff' }}>Plan With Purpose. <em>Execute With Precision.</em></h2>

      </div>
      <div className="wcu-inner">
        {/* LEFT — Illustration */}
        <div className="wcu-left">
          <div className="wcu-stat wcu-sc-1"><div className="sc-label">Organic Reach</div><div className="sc-val">+218% <span className="sc-up">↑</span></div></div>
          <div className="wcu-stat wcu-sc-2"><div className="sc-label">Campaign ROI</div><div className="sc-val">4.8x <span className="sc-up">↑</span></div></div>
          <div className="wcu-stat wcu-sc-3"><div className="sc-label">Lead Quality</div><div className="sc-val">94% <span className="sc-up">↑</span></div></div>
          <div className="wcu-stat wcu-sc-4"><div className="sc-label">Conversions</div><div className="sc-val">+312% <span className="sc-up">↑</span></div></div>
          <div className="wcu-illus">
            <svg viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="190" cy="190" r="155" stroke="rgba(237,131,55,0.08)" strokeWidth="1" strokeDasharray="6 4" />
              <circle cx="190" cy="190" r="120" stroke="rgba(237,131,55,0.12)" strokeWidth="1" strokeDasharray="4 6" />
              <rect x="110" y="140" width="160" height="105" rx="10" fill="rgba(10,54,82,0.9)" stroke="rgba(237,131,55,0.4)" strokeWidth="1.5" />
              <rect x="118" y="148" width="144" height="88" rx="6" fill="#0a2535" />
              <rect x="176" y="245" width="28" height="12" rx="2" fill="rgba(10,54,82,0.9)" stroke="rgba(237,131,55,0.3)" strokeWidth="1" />
              <rect x="158" y="255" width="64" height="6" rx="3" fill="rgba(10,54,82,0.9)" stroke="rgba(237,131,55,0.25)" strokeWidth="1" />
              <rect x="126" y="210" width="12" height="22" rx="2" fill="rgba(237,131,55,0.7)"><animate attributeName="height" values="10;22;14;22" dur="2.5s" repeatCount="indefinite" /><animate attributeName="y" values="222;210;216;210" dur="2.5s" repeatCount="indefinite" /></rect>
              <rect x="143" y="200" width="12" height="32" rx="2" fill="#38bdf8"><animate attributeName="height" values="18;32;24;32" dur="2.8s" repeatCount="indefinite" /><animate attributeName="y" values="214;200;208;200" dur="2.8s" repeatCount="indefinite" /></rect>
              <rect x="160" y="206" width="12" height="26" rx="2" fill="rgba(237,131,55,0.5)"><animate attributeName="height" values="14;26;20;26" dur="2.2s" repeatCount="indefinite" /><animate attributeName="y" values="218;206;212;206" dur="2.2s" repeatCount="indefinite" /></rect>
              <rect x="177" y="195" width="12" height="37" rx="2" fill="#34d399"><animate attributeName="height" values="22;37;28;37" dur="3s" repeatCount="indefinite" /><animate attributeName="y" values="210;195;204;195" dur="3s" repeatCount="indefinite" /></rect>
              <rect x="194" y="203" width="12" height="29" rx="2" fill="rgba(237,131,55,0.8)"><animate attributeName="height" values="16;29;20;29" dur="2.6s" repeatCount="indefinite" /><animate attributeName="y" values="216;203;212;203" dur="2.6s" repeatCount="indefinite" /></rect>
              <rect x="211" y="198" width="12" height="34" rx="2" fill="#38bdf8"><animate attributeName="height" values="20;34;26;34" dur="2.4s" repeatCount="indefinite" /><animate attributeName="y" values="212;198;206;198" dur="2.4s" repeatCount="indefinite" /></rect>
              <rect x="228" y="193" width="12" height="39" rx="2" fill="#34d399"><animate attributeName="height" values="24;39;30;39" dur="2.7s" repeatCount="indefinite" /><animate attributeName="y" values="208;193;201;193" dur="2.7s" repeatCount="indefinite" /></rect>
              <polyline points="126,208 143,198 160,204 177,190 194,196 211,184 228,178 250,170" stroke="#ed8337" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><animate attributeName="stroke-dasharray" values="0,300;300,0" dur="2s" fill="freeze" /></polyline>
              <circle cx="250" cy="170" r="3" fill="#ed8337"><animate attributeName="r" values="2;4;2" dur="1.5s" repeatCount="indefinite" /></circle>
              <rect x="126" y="153" width="60" height="6" rx="3" fill="rgba(237,131,55,0.3)" />
              <rect x="192" y="153" width="30" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
              <rect x="228" y="153" width="26" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
              <g transform="translate(68,110)"><circle cx="22" cy="22" r="22" fill="rgba(13,74,112,0.85)" stroke="rgba(237,131,55,0.35)" strokeWidth="1.5" /><text x="22" y="28" textAnchor="middle" fontSize="18">🔍</text><animate attributeName="transform" attributeType="XML" values="translate(68,110);translate(68,100);translate(68,110)" dur="2.5s" repeatCount="indefinite" keyTimes="0;0.5;1" /></g>
              <g transform="translate(268,108)"><circle cx="22" cy="22" r="22" fill="rgba(13,74,112,0.85)" stroke="rgba(237,131,55,0.35)" strokeWidth="1.5" /><text x="22" y="28" textAnchor="middle" fontSize="18">📣</text><animate attributeName="transform" attributeType="XML" values="translate(268,108);translate(268,98);translate(268,108)" dur="3s" repeatCount="indefinite" keyTimes="0;0.5;1" /></g>
              <g transform="translate(62,232)"><circle cx="22" cy="22" r="22" fill="rgba(13,74,112,0.85)" stroke="rgba(56,189,248,0.35)" strokeWidth="1.5" /><text x="22" y="28" textAnchor="middle" fontSize="18">📧</text><animate attributeName="transform" attributeType="XML" values="translate(62,232);translate(62,222);translate(62,232)" dur="2.8s" repeatCount="indefinite" keyTimes="0;0.5;1" /></g>
              <g transform="translate(270,238)"><circle cx="22" cy="22" r="22" fill="rgba(13,74,112,0.85)" stroke="rgba(52,211,153,0.35)" strokeWidth="1.5" /><text x="22" y="28" textAnchor="middle" fontSize="18">📊</text><animate attributeName="transform" attributeType="XML" values="translate(270,238);translate(270,228);translate(270,238)" dur="3.2s" repeatCount="indefinite" keyTimes="0;0.5;1" /></g>
              <line x1="112" y1="132" x2="130" y2="148" stroke="rgba(237,131,55,0.2)" strokeWidth="1" strokeDasharray="4 3"><animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.5s" repeatCount="indefinite" /></line>
              <line x1="268" y1="132" x2="254" y2="148" stroke="rgba(237,131,55,0.2)" strokeWidth="1" strokeDasharray="4 3"><animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.8s" repeatCount="indefinite" /></line>
              <line x1="106" y1="252" x2="120" y2="248" stroke="rgba(56,189,248,0.2)" strokeWidth="1" strokeDasharray="4 3"><animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.6s" repeatCount="indefinite" /></line>
              <line x1="270" y1="252" x2="262" y2="248" stroke="rgba(52,211,153,0.2)" strokeWidth="1" strokeDasharray="4 3"><animate attributeName="stroke-dashoffset" from="0" to="-14" dur="2s" repeatCount="indefinite" /></line>
              <g transform="translate(168,60)"><circle cx="22" cy="22" r="20" fill="rgba(237,131,55,0.12)" stroke="rgba(237,131,55,0.45)" strokeWidth="1.5" /><text x="22" y="28" textAnchor="middle" fontSize="16">🎯</text></g>
              <line x1="190" y1="102" x2="190" y2="140" stroke="rgba(237,131,55,0.2)" strokeWidth="1" strokeDasharray="4 3"><animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.2s" repeatCount="indefinite" /></line>
            </svg>
          </div>
        </div>

        {/* RIGHT — 3 points */}
        <div className="wcu-right">
          {WCU_POINTS.map((p, i) => (
            <div key={i} ref={refs[i]} className={`wcu-point${visible[i] ? " vis" : ""}`}
              style={{ opacity: 0, transform: "translateX(30px)", transitionDelay: `${.1 + i * .15}s` }}>
              <div className="wcu-num-col">
                <div className="wcu-num" style={{ color: p.color }}>{p.num}</div>
                {i < 2 && <div className="wcu-vert-line" />}
              </div>
              <div className="wcu-content" style={i === 2 ? { paddingBottom: 0 } : {}}>
                <div className="wcu-label" style={{ color: p.color, borderColor: `${p.color}55`, background: `${p.color}14` }}>
                  {p.label}
                  <span className="wcu-arrow-span" style={{
                    "--arrow-color": p.color,
                    "--arrowb-color": p.color,
                  }}>
                    <span style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", borderRadius: "2px", background: p.color }} />
                    <span style={{ position: "absolute", right: "-1px", top: "-4px", width: 0, height: 0, borderTop: "5px solid transparent", borderBottom: "5px solid transparent", borderLeft: `8px solid ${p.color}` }} />
                  </span>
                </div>
                <h3 className="wcu-title">{p.title}</h3>
                <div className="wcu-desc">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// faq section
const faqData = [
  { q: "What makes PCS different from all the other digital marketing agencies out there?", a: "At PCS, we focus on strategy, creativity, and measurable business growth. Every solution is customised to your brand goals, helping you build stronger visibility, better engagement, and long-term digital success." },
  { q: "Do you offer custom packages or fixed pricing?", a: "Yes, we offer both fixed plans and customised packages based on your business requirements, industry, goals, and marketing scope to ensure you receive the right solution within your budget." },
  { q: "Do you only work with established businesses/brands, or with startups as well?", a: "We work with startups, small businesses, growing brands, and established companies. Our team creates scalable digital marketing strategies suitable for businesses at every stage of growth and expansion." },
  { q: "Can you manage the entire digital marketing process?", a: "Yes, PCS provides complete end-to-end digital marketing support including branding, website development, SEO, content marketing, social media management, paid advertising, lead generation, and performance tracking." },
  { q: "Do you provide monthly reporting?", a: "Yes, we provide detailed monthly performance reports that include campaign insights, SEO progress, website traffic, engagement metrics, lead performance, and other important data to help you track growth clearly." },
  { q: "Can PCS help with both organic and paid marketing?", a: "Absolutely. We specialise in both organic and paid marketing strategies including SEO, content marketing, social media growth, Google Ads, Meta Ads, and performance campaigns to support sustainable business growth." },
];
function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <section className="faq-section">
      <div className="partners-header2" style={{ textAlign: 'center', marginTop: '20px' }}>
        <h4 className="partners-eyebrow" >Frequently Asked Questions</h4>
      </div>
      <div className="container" style={{width: '100%'}}>
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
/* ═══════════════════════════════════════════
   ROOT EXPORT
═══════════════════════════════════════════ */
export default function PCSDigitalMarketing() {
  return (
    <Layout
      title="Digital Marketing Services in India | PCS Business Solution"
      description="Result-driven digital marketing services including SEO, social media marketing, PPC, content marketing, and email marketing to grow your business online."
    >
      <div className="pg-digital-marketing">
      <SEOHead />
      <FontLoader />
      <HeroSection />
      <ApproachSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <FAQSection />
      <BlogSection />
      <CTASection />

      </div>
    </Layout>
  );
}