import '../css/pages-common.css';
import { useState, useEffect } from "react";
import CTASection from "../components/HomePage/CTA";
import emailjs from "@emailjs/browser";
import BlogSection from "../components/BlogSection";
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
const Bannerimg = "/img/business-registration-compliance.png";

/* ═══════════════════════════════════════════════════
   SEO META & SCHEMA
═══════════════════════════════════════════════════ */
function SEOHead() {
  const pageUrl = "https://www.pcsbusinesssolution.com/business-registration-compliance";
  const imageUrl = "https://www.pcsbusinesssolution.com/img/business-registration-compliance.png";

  return (
    <Head>
      {/* ── Primary Meta ── */}
      <title>Business Registration and Compliance Services | Company Registration</title>
      <meta name="description" content="Efficient Business Registration and Compliance Services. Get expert support for company registration, legal documentation, and regulatory compliance. Contact us!" />
      <meta name="keywords" content="Business Registration and Compliance, Business Registration and Compliance Services, Company Registration & Compliance in India, Business Registration Services, Company Registration and Compliances, Business License Registration, Business Registration Consultants, Statutory Compliance Services, Investment and Company Valuation, Virtual CFO Services, Accounting Services, Financial Services" />
      <link rel="canonical" href="https://www.priyamconsultancy.com/business-registration-compliance/" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Business Registration and Compliance Services | Company Registration" />
      <meta property="og:description" content="Efficient Business Registration and Compliance Services. Get expert support for company registration, legal documentation, and regulatory compliance. Contact us!" />
      <meta property="og:url" content="https://www.priyamconsultancy.com/business-registration-compliance/" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="PCS Business Solution" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Business Registration & Compliance Services | PCS Business Solution" />
      <meta name="twitter:description" content="Complete business registration & compliance management in India. PCS Business Solution." />
      <meta name="twitter:image" content={imageUrl} />

      {/* ── Breadcrumb List Schema ── */}
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
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@id": "https://www.priyamconsultancy.com/business-registration-compliance/",
        "name": "business-registration-compliance"
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
  "url": "www.priyamconsultancy.com/",
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
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.priyamconsultancy.com/business-registration-compliance/#service",
  "name": "Business Registration & Compliance",
  "serviceType": "Business Registration & Compliance Services",
  "url": "https://www.priyamconsultancy.com/business-registration-compliance/",
  "description": "Priyam Consultancy provides professional business registration and compliance services including company registration, statutory compliance, virtual CFO services, company valuation and investment support across India.",
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
}
      `}</script>

      {/* ── Product Schema (Business Registration) ── */}
      <script type="application/ld+json">{`

  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Business Registration and Compliance",
  "image": ["https://www.priyamconsultancy.com/wp-content/uploads/2025/10/business-registration-compliances.png"],
  "description": "Streamline your business registration and compliance with expert guidance. Ensure your business stays compliant and grows with fast, accurate, and hassle-free services.",
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
    "reviewCount": "4345"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.priyamconsultancy.com/business-registration-compliance/",
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
    "name": "What are the benefits of digital transformation?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Digital transformation improves operational efficiency, enhances customer experience, and enables data-driven decision-making. It drives innovation, scalability, and long-term business growth." 
    } 
  },{ 
    "@type": "Question", 
    "name": "What are the challenges of digital transformation?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Challenges include resistance to change, technology integration issues, skill gaps, data security concerns, and the need for clear strategic planning." 
    }
  },{ 
    "@type": "Question", 
    "name": "What Types Of Digital Marketing Services Do You Provide?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "We offer SEO, PPC, social media marketing, content marketing, email campaigns, and analytics-driven strategies to boost online visibility and engagement." 
    } 
  },{ 
    "@type": "Question", 
    "name": "How Are Your HR Services Different From Other Agencies?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "We provide tailored HR solutions, combining strategy, compliance, payroll, recruitment, and employee engagement, with a focus on seamless integration into your business operations." 
    } 
 },{ 
    "@type": "Question", 
    "name": "What is a company registration?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Company registration is the legal process of forming a business entity, obtaining licenses, and ensuring compliance with government regulations to operate officially." 
    } 
 },{ 
    "@type": "Question", 
    "name": "How Long To See Results Through Digital Marketing?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Results vary by strategy; paid campaigns may show immediate impact, while SEO and organic efforts typically take 3–6 months for measurable outcomes." 
    } 
    }] 

      `}</script>

      {/* ── Product Schema (Website Development) ── */}
      <script type="application/ld+json">{`
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Website Development Services",
  "image": ["https://www.priyamconsultancy.com/wp-content/uploads/2025/08/website-development-services.webp"],
  "description": "We provide expert web development services in India to help you transform your business. Website design and development, mobile app development, and SEO are some of our services.",
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
    "reviewCount": "4327"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.priyamconsultancy.com/website-development/",
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

      {/* ── FAQ Schema (Website Development) ── */}
      <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What Types Of Digital Marketing Services Do You Provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We approach each business as a whole, offering a range of services from SEO, social media marketing, Google & Meta ads, content marketing, email marketing, and performance tracking related to your business objectives."
      }
    },
    {
      "@type": "Question",
      "name": "How Long Does It Take To See Results Through Digital Marketing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This varies depending on the service. Generally, SEO will take 3-6 months to see any measurable impact, while paid campaigns and email marketing can help drive leads in days. We focus on providing short-term gains, while also contending with long-term objectives."
      }
    },
    {
      "@type": "Question",
      "name": "Will Your Team Understand My Industry?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "100%. We spend an immense amount of time becoming well acquainted with your niche market before we initiate any campaign, dissecting everything from brand voice and market dynamics to audience behavior."
      }
    },
    {
      "@type": "Question",
      "name": "How Are Your HR Services Different From Other Agencies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our specialty is matching candidates to your culture, vision, and long-term objectives, rather than simply matching candidates to roles. Our approach is people-first and performance-backed."
      }
    },
    {
      "@type": "Question",
      "name": "You Help Us With Hiring As Well As Retention?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We do everything from the sourcing of top-tier talent to designing the onboarding, engagement, and retention strategy. We handle the full employee life-cycle so you can stay focused on your growth."
      }
    },
    {
      "@type": "Question",
      "name": "Do You Provide Custom HR Solutions For Small Businesses Or Start-Ups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We will tailor our HR services to fit your stage and size – whether it is your first team or you're scaling quickly."
      }
    }
  ]
}
      `}</script>

      {/* ── Product Schema (Healthcare) ── */}
      <script type="application/ld+json">{`
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Smarter Healthcare Solutions",
  "image": ["https://www.priyamconsultancy.com/wp-content/uploads/2025/10/healthcare-2048x1678.webp"],
  "description": "Accelerate innovation in the healthcare industry with our Digital Transformation solutions. Enhance patient care, streamline operations, and boost efficiency with smart technologies.",
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
    "reviewCount": "4193"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.priyamconsultancy.com/healthcare/",
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

      {/* ── FAQ Schema (Data Analytics) ── */}
      <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What do you mean by Data Analytics Services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Data Analytics Services involve collecting, processing, and interpreting data to extract meaningful insights that support better business decisions and improve performance."
      }
    },
    {
      "@type": "Question",
      "name": "What are the 4 types of Data Analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The four types are Descriptive, Diagnostic, Predictive, and Prescriptive Analytics, each helping businesses understand the past, analyze causes, forecast outcomes, and recommend future actions."
      }
    },
    {
      "@type": "Question",
      "name": "Are your Data and Analytics Services scalable for future needs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our Data Analytics Solutions are designed for scalability, ensuring they adapt seamlessly to evolving data volumes, business models, and technology advancements."
      }
    },
    {
      "@type": "Question",
      "name": "What is Data Analytics with an example?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Data analytics is the process of analyzing raw data to find patterns or trends — for example, a retail company analyzing customer purchase data to predict future demand."
      }
    },
    {
      "@type": "Question",
      "name": "What is the main purpose of Data Analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The main purpose of Data Analytics is to transform data into actionable insights, helping organizations optimize operations, improve decision-making, and drive business growth."
      }
    },
    {
      "@type": "Question",
      "name": "Why are Data Analytics Services important for businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They help businesses identify opportunities, minimize risks, enhance efficiency, and make data-backed decisions that lead to measurable growth and competitive advantage."
      }
    }
  ]
}
      `}</script>

    </Head>
  );
}


/* ─── Scroll reveal ─── */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── DATA ─── */
const AP_STEPS = [
  { icon: "📊", title: "360° Enterprise Assessment", desc: "We evaluate revenue models, assets, market positioning, and risk factors to build a complete picture of your enterprise value." },
  { icon: "🎯", title: "Investment Strategy Translation", desc: "Our experts convert valuations into actionable strategies — identifying funding opportunities and growth-aligned partnerships." },
  { icon: "🚀", title: "Long-Term Growth Decisions", desc: "We help you make informed decisions that align with your goals, ensuring sustainable performance and investor confidence." },
];
const SERVICES = [
  { n: "01", icon: <img src="/img/icon/business-registration-service.webp" alt="Business Registration" width="28" height="28" />, title: "Business Registration", desc: "Public Limited, Private Limited, LLP, OPC, Partnership, Sole Proprietorship services.", link: "/business-registrations" },
  { n: "02", icon: <img src="/img/icon/company-valuations-service.webp" alt="Company Valuations" width="28" height="28" />, title: "Company Valuations", desc: "Accurate valuations and strategic guidance to fuel funding, growth, and smart investments.", link: "/company-valuations-and-investment-support" },
  { n: "03", icon: <img src="/img/icon/statutory-compliance-service.webp" alt="Statutory Compliance" width="28" height="28" />, title: "Statutory Compliance", desc: "Ensuring timely filings, audits, and adherence to all regulatory requirements.", link: "/statutory-compliance" },
  { n: "04", icon: <img src="/img/icon/virtual-services.webp" alt="Virtual CFO Services" width="28" height="28" />, title: "Virtual CFO Services", desc: "Strategic financial guidance, budgeting, and reporting to drive informed business decisions.", link: "/virtual-cfo-services" },
  { n: "05", icon: <img src="/img/icon/accounting-service.webp" alt="Accounting" width="28" height="28" />, title: "Accounting", desc: "Complete accounting, GST, TDS, MIS reports, payroll, and comprehensive full-scale back-office support.", link: "/accounting" },
  { n: "06", icon: <img src="/img/icon/finances-service.webp" alt="Finances" width="28" height="28" />, title: "Finances", desc: "Banking, loans, CMA reports, audits, approvals, and complete financial support services.", link: "/finances" },
];
const PROCESS_STEPS = [
  { n: "01", icon: <img src="/img/icon/business-registration-discover.webp" alt="Discover" width="28" height="28" />, title: "Discover", desc: "Every successful business begins with understanding. We learn your goals, model, and growth vision, analyze industry and ownership, and recommend the best entity for long-term alignment.", color: "#ed8337" },
  { n: "02", icon: <img src="/img/icon/business-registration-assess.webp" alt="Assess and Plan" width="28" height="28" />, title: "Assess & Plan", desc: "After understanding goals, we review legal, financial, and compliance requirements for your location and structure, mapping registrations, licenses, and taxes to create a clear, risk-aware launch roadmap.", color: "#38bdf8" },
  { n: "03", icon: <img src="/img/icon/business-registration-register.webp" alt="Register and Establish" width="28" height="28" />, title: "Register & Establish", desc: "Our experts prepare and file all documents—name approval, incorporation, PAN, TAN, GST, and professional tax—ensuring accuracy, transparency, and efficient, confusion-free legal establishment for your business.", color: "#34d399" },
  { n: "04", icon: <img src="/img/icon/business-registration-comply.webp" alt="Comply and Maintain" width="28" height="28" />, title: "Comply & Maintain", desc: "We manage statutory filings, annual returns, renewals, ROC and tax submissions, meeting deadlines, maintaining records, and keeping your business compliant, audit-ready, and legally strong year-round.", color: "#a855f7" },
  { n: "05", icon: <img src="/img/icon/business-registration-monitor.webp" alt="Monitor and Update" width="28" height="28" />, title: "Monitor & Update", desc: "Regulations evolve, and so do you. We monitor changes, update registrations, amend records, and advise proactively, ensuring ongoing compliance, accuracy, and alignment with your business growth.", color: "#f6ad55" },
];
const WHY_CARDS = [
  { icon: <img src="/img/icon/professional-credibility.webp" alt="Professional Credibility" width="28" height="28" />, title: "Professional Credibility", desc: "Build strong trust with clients and partners through a verified and professionally registered business presence." },
  { icon: <img src="/img/icon/financial-advantages.webp" alt="Financial Advantages" width="28" height="28" />, title: "Financial Advantages", desc: "Access loans, funding, and tax benefits that support smoother financial growth and scalability." },
  { icon: <img src="/img/icon/compliance-assurance.webp" alt="Compliance Assurance" width="28" height="28" />, title: "Compliance Assurance", desc: "Stay fully compliant with timely filings, updates, and expert monitoring of regulatory requirements." },
];

/* ═══════════════════════════════════════════════════
   SECTION 1 — HERO (exact SVG + animations)
═══════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="hero" id="hero">

      <div className="hero-left">
        <div className="h-badge"><div className="badge-dot" />Business Registration Compliance</div>
        <h1 className="hero-heading">
          Simple Registration
          Made <span className="hl lined">Strong  business</span>, Compliance
        </h1>
        <p className="hero-sub">
          We start with clarity. We get to know your business, your plans, and the direction you want to grow in. Then we tailor the right structure and registration approach to fit your exact needs. We look for what slows you down incomplete documents, missed filings, or confusing procedures  and make the entire process simple, transparent, and stress-free.

        </p>
        <div className="hero-actions">
          <a className="btn-fill" href="/contact-us">Explore More <span className="btn-arrow">›</span></a>
        </div>
      </div>

      <div className="hero-right">
        <img
          src={Bannerimg}
          alt="Business Registration"
          className="hero-img"
        />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SECTION 2 — OUR APPROACH (light + floating labels)
═══════════════════════════════════════════════════ */


function ApproachSection() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
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
          <h2 className="ap2-heading">Business  <span>Registration & Compliance</span></h2>
          <p className="ap-intro">
            Every great business starts with a strong foundation. We help you register, comply, and launch with confidence. You won’t face confusion, complexity, or red tape that can hold startups back.

          </p>
          <p className="ap-intro">
            We take care of everything from choosing the right business structure to handling legal filings, licenses, and documentation. Our approach ensures a smooth, hassle-free setup process. This allows you to stay focused on your ideas, innovation, and growth</p>
          <p className="ap-intro">
            As regulations evolve, we stay ahead for you by monitoring changes and ensuring ongoing compliance. Your business remains protected, updated, and future-ready. Simple, seamless, and reliable—built for lasting success.

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

/* ═══════════════════════════════════════════════════
   SECTION 3 — SERVICES
═══════════════════════════════════════════════════ */
function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="sep-line" />
      <div className="svc-header reveal">
        <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Specialized Business Registration & Compliance Services</h2>

        <h3 className="partners-h3-title">Simplified Setup. <em style={{ color: '#ed8337', marginBottom: '20px' }}> Seamless Compliance. </em>Growth Assured.</h3>
        <p>From Registration to Reporting, We Deliver End-to-End Solutions That Keep Your Business On Track.</p>
      </div>
      <div className="svc-grid reveal" style={{ transitionDelay: "0.1s" }}>
        {SERVICES.map((item, i) => (
          <div className="svc-card" key={i}>

            <div className="svc-num">{item.n}</div>

            <div className="svc-icon">{item.icon}</div>

            <h3 className="svc-title">{item.title}</h3>

            <p className="svc-desc">{item.desc}</p>

            {/* 🔥 NEW BUTTON */}
            <Link to={item.link} className="svc-btn">
              Discover More →
            </Link>

          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SECTION 4 — PROCESS (vertical timeline card design)
═══════════════════════════════════════════════════ */
function ProcessSection() {
  const TAGS = ["Discover", "Assess & Plan", "Register & Establish", "Comply & Maintain", "Monitor & Update"];

  return (
    <section className="process" id="process">
      <div className="sep-line" />
      <div className="proc-header reveal">
        <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start', color: '#ed8337' }}>Our Proven Business Registration and Compliance Process</h2>

        <h3 className="pr-heading-process">Start Smart. <em style={{ color: '#ed8337' }}>Stay Compliant.</em> Grow Fast.</h3>
        <p>From registration to compliance management, we deliver structured, reliable, and efficient solutions for your business success.</p>
      </div>

      <div className="proc-timeline reveal" style={{ transitionDelay: "0.1s" }}>
        {PROCESS_STEPS.map((step, idx) => (
          <div className="proc-tl-row" key={step.n}>
            {/* Big ghost number */}
            <div className="proc-tl-num">{step.n}</div>

            {/* Spine: dot + vertical line */}
            <div className="proc-tl-spine">
              <div className="proc-tl-dot" />
              <div className="proc-tl-line" />
            </div>

            {/* Card */}
            <div className="proc-tl-card">
              <div className="proc-tl-card-inner">
                <div className="proc-tl-icon-box">{step.icon}</div>
                <div className="proc-tl-text">
                  <div className="proc-tl-badge">Step {step.n}</div>
                  <h4 className="proc-tl-title">{step.title}</h4>
                  <p className="proc-tl-desc">{step.desc}</p>
                </div>
                <div className="proc-tl-tag">{TAGS[idx]}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SECTION 5 — WHY PCS
═══════════════════════════════════════════════════ */
function WhySection() {
  return (
    <section className="why" id="why" style={{background: '#004168'}}>
      <div className="sep-line" />
      <div className="why-diagonal" />
      <div className="why-inner">
        <div className="why-left1 reveal">
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Why Choose Us</h2>
          <h3 className="partners-h3-title">Why You Should Choose us for <em style={{ color: '#ed8337' }}> Business Registration</em> & Compliance Services</h3>
          <p style={{ marginTop: '20px' }}>
            Starting your business the right way means setting a strong foundation from day one. Registering your business not only gives it a legal identity but also adds credibility, unlocks financial opportunities, and safeguards you from future compliance issues. With expert registration support, you save time, avoid errors, and ensure your business is ready to grow without roadblocks.
          </p>

          <a href="#approach" className="why-cta">
            Get Started Free
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>

        <div className="why-right reveal" style={{ transitionDelay: "0.12s" }}>
          <div className="why-card tall">
            <div className="why-card-icon"><img src="/img/icon/business-registration-legal.webp" alt="Legal Identity and Protection" width="28" height="28" /></div>
            <h4 className="why-card-title">Legal Identity & Protection</h4>
            <p className="why-card-desc">Secure your business with proper registration, ensuring legal recognition and complete protection from risks.</p>
          </div>
          {WHY_CARDS.map(c => (
            <div className="why-card" key={c.title}>
              <div className="why-card-icon">{c.icon}</div>
              <h4 className="why-card-title">{c.title}</h4>
              <p className="why-card-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


const faqData = [
  { q: "What is business compliance?", a: "Business compliance refers to following all legal, regulatory, financial, and operational requirements applicable to a company. This includes registrations, tax filings, labor laws, statutory reporting, and industry-specific regulations necessary to ensure smooth, lawful, and risk-free business operations." },
  { q: "What documents are needed for business registration?", a: " Business registration documents typically include PAN card, Aadhaar card, address proof, passport-size photographs, bank details, and registered office proof. Additional documents may vary depending on the business structure, such as proprietorship, partnership, LLP, or private limited company registration requirements." },
  { q: "Why is compliance important for a business?", a: "Compliance helps businesses operate legally, avoid penalties, maintain financial transparency, and build credibility with clients, investors, and government authorities. Proper compliance management also supports smooth business operations, reduces legal risks, and creates a strong foundation for sustainable long-term growth and expansion." },
  { q: "What are the annual compliance requirements for a company?", a: " Annual compliance requirements may include income tax filing, GST returns, ROC filings, financial statement submissions, board resolutions, statutory audits, TDS filings, payroll compliance, and maintenance of legal records. Requirements vary based on company structure, industry, and applicable government regulations." },
  { q: "Can you help with both registration and compliance?", a: " Yes, we provide complete support for business registration and ongoing compliance management. Our services include company incorporation, GST registration, licensing, ROC filings, tax compliance, payroll compliance, documentation management, and statutory reporting to ensure smooth and legally compliant business operations." },
  { q: "What are the types of compliance?", a: "Business compliance includes statutory compliance, tax compliance, labor law compliance, corporate compliance, environmental compliance, industry-specific regulatory compliance, and financial reporting compliance. Each type ensures businesses operate according to applicable laws, regulations, and operational standards within their respective industries." },
];


function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (

    <section className="faq-section">
      <div className="partners-header2" style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2 className="partners-eyebrow">Frequently Asked Questions</h2>
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


/* ═══════════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════════ */
export default function PCSPage() {
  useReveal();
  return (
    <Layout
      title="Business Registration and Compliance Services | Company Registration "
      description="Efficient Business Registration and Compliance Services. Get expert support for company registration, legal documentation, and regulatory compliance. Contact us! "
    >
      <SEOHead />
      <div className="pcs">
        <HeroSection />
        <ApproachSection />
        <ServicesSection />
        <ProcessSection />
        <WhySection />
        <FAQSection />
        <BlogSection />
        <CTASection />
      </div>
    </Layout>
  );
}