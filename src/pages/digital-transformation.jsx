import { useState } from "react";
const logovideo = "/img/partner-dt.mp4";
import emailjs from "@emailjs/browser";
import CTASection from "../components/HomePage/CTA";
import BlogSection from "../components/BlogSection";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
const banner = "/img/digital-transformation.png";

const pageUrl = "https://www.priyamconsultancy.com/digital-transformation/";
const imageUrl = "https://www.priyamconsultancy.com/img/digital-transformation.png";

const schemaData = [
  // Breadcrumb List Schema
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
          "@id": "https://www.priyamconsultancy.com/digital-transformation/",
          "name": "Digital Transformation"
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

  // Service Page Schema
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.priyamconsultancy.com/digital-transformation/#service",
    "name": "Digital Transformation",
    "serviceType": "Digital Transformation Services",
    "url": "https://www.priyamconsultancy.com/digital-transformation/",
    "description": "Priyam Consultancy provides professional digital transformation services including business process digitization, workflow automation, technology consulting, digital strategy implementation, operational optimization and business growth solutions across India.",
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

  // Product Schema
  {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Digital Transformation Services in Coimbatore",
    "image": ["https://www.priyamconsultancy.com/img/digital-transformation.png"],
    "description": "Best digital transformation services in Coimbatore offering business process digitization, workflow automation, digital strategy implementation, technology consulting and operational optimization solutions for businesses.",
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
      "reviewCount": "5124"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.priyamconsultancy.com/digital-transformation/",
      "priceCurrency": "INR",
      "price": "0",
      "priceValidUntil": "2026-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Priyam Consultancy Services"
      }
    }
  },

  // FAQ Schema
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does a digital transformation agency do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A digital transformation agency helps businesses adopt digital tools, automate workflows, and modernize operations to improve efficiency, scalability, and customer experience."
        }
      },
      {
        "@type": "Question",
        "name": "What is a digital transformation agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is a consulting and implementation partner that guides organizations through strategy, technology adoption, and process optimization for long-term digital growth."
        }
      },
      {
        "@type": "Question",
        "name": "What does digital transformation mean for businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital transformation means rethinking how a business operates, delivers value, and interacts with customers through modern technologies and data-driven strategies."
        }
      },
      {
        "@type": "Question",
        "name": "How can I tell if my company is ready for digital transformation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can assess your current technology, workflows, team adaptability, and leadership support to understand how prepared your company is for transformation."
        }
      },
      {
        "@type": "Question",
        "name": "What services are included in a digital transformation package?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard package may include strategy consulting, process automation, data analytics, cloud adoption, digital marketing, and integration of advanced technologies like AI and RPA."
        }
      },
      {
        "@type": "Question",
        "name": "Which companies are examples of digital transformation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Companies like Amazon, Netflix, and Tesla are often cited as examples because they continuously use digital technologies to improve operations and customer engagement."
        }
      }
    ]
  }
];

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const SERVICES = [
  {
    img: "/img/icon/dt-business-process-automation.webp", tag: "Automate", color: "#ed8337",
    title: "Business Process Automation",
    desc: "Streamline workflows, reduce manual tasks, and improve efficiency using intelligent automation solutions tailored to your business operations and long-term growth.",
    points: ["Streamlining", "Automation", "Efficiency", "Optimization"],
  },
  {
    img: "/img/icon/dt-custom-web-mobile-apps.webp", tag: "Build", color: "#ed8337",
    title: "Custom Web & Mobile Applications",
    desc: "Design and deploy user-focused applications built for your unique business requirements. From development to integration, we ensure functionality, scalability, and a superior user experience.",
    points: ["Scalability", "Security", "Integration", "Experience"],
  },
  {
    img: "/img/icon/dt-data-analytics.webp", tag: "Analyse", color: "#ed8337",
    title: "Data Analytics",
    desc: "Transform raw data into actionable insights that enable smarter decisions, uncover opportunities, and optimize performance across all areas of your business.",
    points: ["Insights", "Forecasting", "Tracking", "Intelligence"],
  },
];

const PROCESS_STEPS = [
  {
    num: "01", img: "/img/icon/dt-assessment-strategy.webp", color: "#ed8337",
    title: "Assessment & Strategy Design",
    shortDesc: "We assess existing workflows, systems, and business operations to identify gaps and create customized digital transformation strategies aligned with organizational goals and growth plans.",
    fullDesc: "Based on our analysis, we design a digital transformation strategy that aligns with your business objectives, operational needs, and growth vision. Every recommendation is customized to maximize ROI and operational efficiency. ",
  },
  {
    num: "02", img: "/img/icon/dt-solution-design.webp", color: "#0171a4",
    title: "Solution Design",
    shortDesc: "We design scalable applications, automation tools, and integrated digital solutions focused on improving efficiency, user experience, and operational productivity across business functions.",
    fullDesc: "Our focus is on creating solutions that are intuitive, responsive, and engaging. From UI/UX design to backend architecture, we ensure that your team and customers enjoy a seamless digital experience.",
  },
  {
    num: "03", img: "/img/icon/dt-implementation.webp", color: "#27ae60",
    title: "Implementation",
    shortDesc: "Our team manages seamless deployment, system integration, data migration, testing, and training to ensure smooth digital transformation with minimal operational disruption.",
    fullDesc: "The PCS team works closely with stakeholders to minimize disruption and ensure a smooth transition. Training, documentation, and testing are built into every step, ensuring teams quickly adapt and start realizing the benefits of digital transformation.",
  },
  {
    num: "04", img: "/img/icon/dt-monitoring-analytics.webp", color: "#9b59b6",
    title: "Monitoring, Analytics & Continuous Improvement",
    shortDesc: "We track performance through analytics, optimize digital systems continuously, and provide ongoing support to maintain scalability, efficiency, and long-term business adaptability.",
    fullDesc: "Insights from analytics are used to refine processes, applications, and workflows. We continuously optimize digital systems to ensure they evolve with business growth and changing market demands.",
  },
];

const faqData = [
  { q: " What does a digital transformation agency do?", a: "A digital transformation agency helps businesses adopt digital tools, automate workflows, and modernize operations to improve efficiency, scalability, and customer experience." },
  { q: "What is a digital transformation agency?", a: "It is a consulting and implementation partner that guides organizations through strategy, technology adoption, and process optimization for long-term digital growth." },
  { q: "What does digital transformation mean for businesses?", a: "Digital transformation means rethinking how a business operates, delivers value, and interacts with customers through modern technologies and data-driven strategies." },
  { q: " How can I tell if my company is ready for digital transformation?", a: "You can assess your current technology, workflows, team adaptability, and leadership support to understand how prepared your company is for transformation." },
  { q: "What services are included in a digital transformation package?", a: "A standard package may include strategy consulting, process automation, data analytics, cloud adoption, digital marketing, and integration of advanced technologies like AI and RPA." },
  { q: "Which companies are examples of digital transformation?", a: "Companies like Amazon, Netflix, and Tesla are often cited as examples because they continuously use digital technologies to improve operations and customer engagement" },
];

/* ─────────────────────────────────────────
   ALL STYLES
───────────────────────────────────────── */
const PAGE_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');
  :root { --navy:#004168; --navy-deep:#011a2a; --navy-mid:#0a3652; --orange:#ed8337; --orange-light:#f5a66b; }
  *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
  body { font-family:'Poppins',sans-serif; overflow-x:hidden; }

  @keyframes fadeUp      { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
  @keyframes pulse-dot   { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.7);opacity:.45} }
  @keyframes orb-drift   { 0%{transform:translate(0,0)} 100%{transform:translate(20px,-20px)} }
  @keyframes ring-spin   { to{transform:translate(-50%,-50%) rotate(360deg)} }
  @keyframes glow-breathe{ 0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.7} 50%{transform:translate(-50%,-50%) scale(1.2);opacity:1} }
  @keyframes float-ud    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
  @keyframes float-ud2   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes scr         { from{opacity:.5} to{opacity:1} }
  @keyframes dp          { 0%,100%{opacity:.3} 50%{opacity:1} }

  .dt-badge { display:inline-flex; align-items:center; gap:.5rem; background:rgba(237,131,55,.1); border:1px solid rgba(237,131,55,.28); color:#ed8337; font-size:.7rem; font-weight:700; padding:.38rem 1rem; border-radius:50px; letter-spacing:.09em; text-transform:uppercase; width:fit-content; animation:fadeUp .6s ease both; }
  .dt-badge-dot { width:6px; height:6px; border-radius:50%; background:#ed8337; animation:pulse-dot 1.7s ease-in-out infinite; }
  // .dt-eyebrow { display:inline-flex; align-items:center; gap:.65rem; font-size:11px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; color:#ed8337; margin-bottom:14px; }
  .dt-eline { display:inline-block; width:28px; height:2px; border-radius:2px; background:linear-gradient(90deg,transparent,#ed8337); }
  .dt-eline.rev { background:linear-gradient(90deg,#ed8337,transparent); }
  .dt-btn { background:#ed8337; color:#fff; padding:.88rem 2.1rem; border-radius:50px; font-family:'DM Sans',sans-serif; font-size:.93rem; font-weight:500; text-decoration:none; display:inline-flex; align-items:center; gap:.55rem; box-shadow:0 6px 26px rgba(237,131,55,.34); transition:background .22s,transform .18s,box-shadow .22s; border:none; cursor:pointer; }
  .dt-btn:hover { background:#f5a66b; transform:translateY(-3px); box-shadow:0 10px 34px rgba(237,131,55,.46); }

  /* HERO */
  .dt-hero { min-height:100vh; display:grid; grid-template-columns:1fr 1fr; align-items:center; gap:2rem; padding:5rem 6% 3rem; position:relative; overflow:hidden; background:#004168; }
  .dt-orb { position:absolute; border-radius:50%; pointer-events:none; filter:blur(70px); animation:orb-drift 8s ease-in-out infinite alternate; }
  .dt-orb-1 { width:380px; height:380px; background:rgba(237,131,55,.07); top:-80px; right:10%; }
  .dt-orb-2 { width:300px; height:300px; background:rgba(10,54,82,.8); bottom:-60px; left:5%; animation-delay:2s; }
  .dt-hero-h { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.6vw,3.3rem); font-weight:600; line-height:1.15; margin-top:1.3rem; animation:fadeUp .7s .08s ease both; color:#fff; text-align:start; }
  .dt-hero-h .orange { color: #ed8337;
    text-decoration: underline;
    text-underline-offset: 6px;
    text-decoration-thickness: 3px; }
  .dt-hero-sub { margin-top:1.4rem; font-size:.97rem; line-height:1.82; color:rgba(255,255,255,.9); max-width:fit-content; animation:fadeUp .7s .16s ease both; }
  .dt-hero-actions { margin-top:2rem; display:flex; gap:1rem; align-items:center; animation:fadeUp .7s .26s ease both; }
            .dt-fi  { animation:float-ud  3.5s ease-in-out infinite; }
          
  /* APPROACH */
  .approach { position:relative; padding:4rem 6%; overflow:hidden; }
  .ap-inner { position:relative; z-index:2; margin:0 auto; display:grid; grid-template-columns:1fr 0.7fr; gap:4rem; align-items:center; }
  .ap-heading { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3vw,2.6rem); line-height:1.12; color:#000; margin-bottom:1.2rem; font-weight:600; }
  .ap-heading span { color:#ed8337; }
  .ap-intro { font-size:1rem; line-height:1.8; color:#5a6a7a; margin-bottom:1.2rem; }
  .ap-form-wrap { position:relative; max-width:450px; }
  .ap-form-wrap::before { content:''; position:absolute; inset:-2px; background:linear-gradient(135deg,rgba(237,131,55,0.55),rgba(237,131,55,0.1),rgba(237,131,55,0.55)); border-radius:26px; z-index:0; }
  .ap-form-card { position:relative; z-index:1; background:#004168; border-radius:24px; padding:2.8rem 2.6rem; box-shadow:0 24px 60px rgba(0,0,0,0.5),0 0 40px rgba(237,131,55,0.06); border:1px solid rgba(237,131,55,0.18); text-align:center; }
  .form-card-eyebrow { display:inline-flex; align-items:center; gap:8px; font-family:'Poppins',sans-serif; font-size:0.6rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#ed8337; margin-bottom:0.8rem; }
  .form-card-eyebrow-line { width:22px; height:1px; background:#ed8337; }
  .form-card-title { font-family:'Poppins',sans-serif; font-size:1.7rem; font-weight:800; color:#fff; line-height:1.15; margin-bottom:2.4rem; }
  .form-card-title span { color:#ed8337; }
  .fl-row { display:grid; grid-template-columns:1fr 1fr; gap:0.85rem; }
  .fl-group { position:relative; margin-bottom:1rem; }
  .fl-label { display:block; font-family:'Poppins',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:#ed8337; margin-bottom:0.4rem; text-align:start; }
  .fl-input, .fl-textarea { width:100%; padding:0.82rem 1rem 0.82rem 2.6rem; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; font-family:'Poppins',sans-serif; font-size:0.88rem; color:#fff; background:rgba(255,255,255,0.04); outline:none; appearance:none; transition:border-color 0.22s,background 0.22s,box-shadow 0.22s; }
  .fl-input::placeholder, .fl-textarea::placeholder { color:rgba(255,255,255,0.3); }
  .fl-input:focus, .fl-textarea:focus { border-color:#ed8337; background:rgba(237,131,55,0.06); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
  .fl-icon { position:absolute; left:0.85rem; top:50%; transform:translateY(-50%); font-size:0.95rem; opacity:0.5; pointer-events:none; }
  .fl-group.textarea-group .fl-icon { top:0.9rem; transform:none; }
  .fl-textarea { min-height:88px; resize:none; padding-top:0.82rem; padding-left:2.6rem; }
  .phone-row { display:flex; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; overflow:hidden; background:rgba(255,255,255,0.04); transition:border-color 0.22s,box-shadow 0.22s; }
  .phone-row:focus-within { border-color:#ed8337; box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
  .phone-flag { display:flex; align-items:center; gap:0.3rem; padding:0 0.85rem; font-size:0.82rem; font-weight:700; color:#fff; border-right:1.5px solid rgba(237,131,55,0.2); white-space:nowrap; background:rgba(237,131,55,0.08); cursor:default; flex-shrink:0; }
  .phone-flag-icon { font-size:0.9rem; opacity:0.7; }
  .phone-row .fl-input { border:none; border-radius:0; background:transparent; box-shadow:none; padding:0.82rem 1rem; }
  .phone-row .fl-input:focus { box-shadow:none; }
  .ap-submit { width:100%; background:linear-gradient(135deg,#ed8337,#f5a66b); color:#fff; border:none; padding:1rem 1.5rem; border-radius:12px; font-family:'Poppins',sans-serif; font-size:0.97rem; font-weight:500; cursor:pointer; letter-spacing:0.02em; display:flex; align-items:center; justify-content:center; gap:0.6rem; transition:transform 0.2s,box-shadow 0.2s; }
  .ap-submit:hover { transform:translateY(-2px); box-shadow:0 12px 36px rgba(237,131,55,0.5); }
  .ap-submit-arrow { display:inline-flex; align-items:center; justify-content:center; width:24px; height:24px; border-radius:50%; background:rgba(2,43,68,0.25); font-size:0.9rem; }
  // .partners-eyebrow { font-family:'Poppins',sans-serif; font-size:11px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; color:#ed8337; }
   h2.partners-eyebrow { font-family:'Poppins',sans-serif; font-size:11px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; color:#ed8337; }

  /* SERVICES */
  .dt-services { background:#004168; padding:90px 5%; }
  .dt-svc-hdr { text-align:center; margin-bottom:60px; }
  .dt-svc-hdr h2 { font-family:'Poppins',sans-serif; font-size:clamp(1.9rem,3.5vw,2.7rem); font-weight:700; color:#fff; line-height:1.15; margin-bottom:1rem; }
  .dt-svc-hdr h2 span { color:#ed8337; font-style:italic; }
  .dt-svc-hdr p { font-size:.95rem; color:rgba(255, 255, 255, 0.99);  margin:0 auto; line-height:1.8; }
  .dt-svc-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2rem; max-width:1200px; margin:0 auto; }
  .dt-svc-card { background:#fff; border-radius:20px; padding:2.5rem 2rem; position:relative; overflow:hidden; transition:transform .3s,box-shadow .3s; cursor:default; }
  .dt-svc-card:hover { transform:translateY(-8px); box-shadow:0 24px 60px rgba(0,0,0,.18); }
  .dt-svc-bar { position:absolute; top:0; left:0; right:0; height:4px; border-radius:20px 20px 0 0; }
  .dt-svc-icon { width:68px; height:68px; border-radius:16px; display:flex; align-items:center; justify-content:center; margin-bottom:1.5rem; overflow:hidden; }
  .dt-svc-tag { font-size:.65rem; font-weight:700; letter-spacing:.15em; text-transform:uppercase; margin-bottom:.6rem; }
  .dt-svc-card h3 { font-family:'Poppins',sans-serif; font-size:1.2rem; font-weight:700; color:#011a2a; margin-bottom:1rem; line-height:1.3; }
  .dt-svc-card p { font-size:.88rem; color:#6b7280; line-height:1.8; margin-bottom:1.5rem; }
  .dt-svc-pts { display:flex; flex-wrap:wrap; gap:.5rem; }
  .dt-svc-chip { font-size:.72rem; font-weight:600; padding:.3rem .8rem; border-radius:50px; }
  .dt-svc-deco { position:absolute; bottom:-40px; right:-40px; width:130px; height:130px; border-radius:50%; pointer-events:none; }

  /* PROCESS */
  .dt-process { background:#fff; padding:80px 5%; position:relative; overflow:hidden; }
  .dt-proc-bg { position:absolute; inset:0; pointer-events:none; background-image:linear-gradient(rgba(0,65,104,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,65,104,.04) 1px,transparent 1px); background-size:52px 52px; }
  .dt-proc-hdr { text-align:center; margin-bottom:60px; position:relative; z-index:2; }
  .dt-proc-hdr h2 { font-family:'Poppins',sans-serif; font-size:clamp(1.9rem,3.5vw,2.7rem); font-weight:700; color:#011a2a; margin-bottom:1rem; }
  .dt-proc-hdr h2 .accent { color:#ed8337; font-style:italic; }
  .dt-proc-hdr p { color:#6b7280; max-width:560px; margin:0 auto; font-size:.95rem; line-height:1.8; }
  .dt-proc-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1.5rem; margin:0 auto; position:relative; z-index:2; }
  .dt-proc-card { background:#004168; border-radius:20px; padding:1.8rem 1.5rem; border:1px solid rgba(255,255,255,.08); box-shadow:0 8px 32px rgba(0,65,104,.15); display:flex; flex-direction:column; transition:transform .3s,box-shadow .3s; cursor:default; }
  .dt-proc-card:hover { transform:translateY(-6px); box-shadow:0 16px 48px rgba(0,65,104,.25); }
  .dt-flip-num { font-family:'Poppins',sans-serif; font-size:3.5rem; font-weight:800; line-height:1; opacity:.12; color:#fff; margin-bottom:.5rem; }
  .dt-flip-ico { width:56px; height:56px; border-radius:14px; display:flex; align-items:center; justify-content:center; margin-bottom:1rem; overflow:hidden; }
  .dt-flip-ttl { font-family:'Poppins',sans-serif; font-size:1rem; font-weight:700; color:#ed8337; line-height:1.35; margin-bottom:.8rem; }
  .dt-flip-dsc { font-size:.82rem; color:rgba(255,255,255,0.98); line-height:1.7; font-family:'Poppins',sans-serif; }

  /* VIDEO */
  .dt-video-eyebrow { justify-content:center; margin-bottom:1rem; }
  .dt-video-title { font-family:'Poppins',sans-serif; font-size:clamp(1.9rem,3.5vw,2.7rem); font-weight:700; color:#fff; margin-bottom:1rem; line-height:1.2; }
  .dt-video-title span { color:#ed8337; font-style:italic; }
  .dt-video-desc { font-size:.97rem; color:#fff;  margin:0 auto 2.5rem; line-height:1.85; }
  .dt-video-wrap { position:relative; max-width:1100px; margin:0 auto; background:#004673; border-radius:16px; overflow:hidden; }
  .dt-video-wrap video { display:block; width:100%; height:auto; border:none; outline:none; mix-blend-mode:lighten; }
.dt-video-section {
    background-color: #004673 !important;
    padding: 90px 5%;
    text-align: center;
    margin-top: 60px;
}
  
  /* FAQ */
  .faq-section { background:#fff; padding:80px 5%; }
  .container { max-width:1350px; margin:0 auto; }
  .faq-head { text-align:center; margin-bottom:2.5rem; }
  .faq-head h2 { font-family:'Poppins',sans-serif; font-size:clamp(1.8rem,3vw,2.5rem); font-weight:700; color:#011a2a; }
  .faq-head h2 span { color:#ed8337; font-style:italic; }
  .faq-wrapper { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; }
  .faq-col { display:flex; flex-direction:column; gap:1rem; }
  .faq-item { border-radius:10px; overflow:hidden; transition:border-color .22s; }
  .faq-item:hover { border-color:rgba(237,131,55,0.4); }
  .faq-question { display:flex; justify-content:space-between; align-items:center; padding:1.1rem 1.4rem; cursor:pointer; font-family:'Poppins',sans-serif; font-size:.92rem; font-weight:600; color:#011a2a; gap:1rem; }
  .faq-question .icon { font-size:1.3rem; color:#ed8337; flex-shrink:0; }
  .faq-answer { padding:.2rem 1.4rem 1.1rem; font-size:.88rem; color:#5a6070; line-height:1.78; }

  /* RESPONSIVE */

  /* ── Tablet 1024px ── */
  @media(max-width:1024px) {
    .dt-proc-grid { grid-template-columns:repeat(2,1fr) !important; }
  }

  /* ── Tablet 900px ── */
  @media(max-width:900px) {
    /* Hero */
    .dt-hero { grid-template-columns:1fr !important; padding:6rem 5% 3rem !important; gap:2rem; text-align:center !important; }
    .dt-hero > div:first-child { align-items:center; padding-bottom:0 !important; }
    .dt-badge { margin:0 auto; }
    .dt-hero-h { font-size:clamp(1.8rem,6vw,2.4rem) !important; }
    .dt-hero-sub { text-align:start; }
    .dt-hero-actions { justify-content:start; }

    /* Approach */
    .approach { padding:3rem 5% !important; }
    .ap-inner { grid-template-columns:1fr !important; gap:2.5rem; }
    .ap-form-wrap { max-width:100%; }
    .ap-heading { font-size:clamp(1.6rem,4vw,2.2rem); }
    .ap-heading span { color:#ed8337; }
    .ap-intro { text-align:start; }
    .partners-eyebrow { text-align:center !important; display:block; }
    h2.partners-eyebrow { text-align:center !important; display:block; }

    .partners-header1 { text-align:center; }

    /* Services */
    .dt-services { padding:60px 5%; }
    .dt-svc-hdr { text-align:center; }
    .dt-svc-hdr h2 { text-align:center; }
    .dt-svc-hdr h2 span { color:#ed8337; }
    .dt-svc-grid { grid-template-columns:1fr !important; }
    .fl-row { grid-template-columns:1fr !important; }

    /* Process */
    .dt-process { padding:60px 5%; }
    .dt-proc-hdr h2 { text-align:center; }
    .dt-proc-hdr h2 .accent { color:#ed8337; }

    /* Video */
    .dt-video-section { padding:60px 5%; margin-top:0 !important; }
    .dt-video-title { font-size:clamp(1.6rem,4vw,2.2rem); text-align:center; }
    .dt-video-title span { color:#ed8337; }

    /* FAQ */
    .faq-section { padding:60px 5%; }
    .faq-head h2 { text-align:center; }
    .faq-head h2 span { color:#ed8337; }
    .faq-wrapper { grid-template-columns:1fr !important; flex-direction:column; }
  }

  /* ── Mobile 600px ── */
  @media(max-width:600px) {
    /* Hero */
    .dt-hero { padding:5.5rem 4% 2.5rem !important; }
    .dt-hero-h { font-size:clamp(1.5rem,7vw,2rem) !important; }
    .dt-hero-sub { font-size:.9rem; }

    /* Approach */
    .approach { padding:2.5rem 4% !important; }
    .ap-form-card { padding:1.8rem 1.4rem; }
    .form-card-title { font-size:1.4rem; }
    .fl-row { grid-template-columns:1fr !important; }

    /* Services */
    .dt-services { padding:50px 4%; }
    .dt-svc-hdr { margin-bottom:40px; }
    .dt-svc-card { padding:2rem 1.5rem; }

    /* Process */
    .dt-process { padding:50px 4%; }
    .dt-proc-grid { grid-template-columns:1fr !important; }
    .dt-proc-card { padding:1.5rem 1.2rem; }

    /* Video */
    .dt-video-section { padding:50px 4%; }

    /* FAQ */
    .faq-section { padding:50px 4% !important; }
    .container { padding:0 !important; }
    .faq-wrapper { display:flex !important; flex-direction:column; gap:0; }
    .faq-col { width:100% !important; }

    /* Orange titles — all center on mobile */
    .dt-svc-hdr h2,.dt-proc-hdr h2,.dt-video-title,.faq-head h2 { text-align:center !important; }
  }

  /* ── Small mobile 400px ── */
  @media(max-width:400px) {
    .dt-hero { padding:7.5rem 4% 2rem !important; }
    .dt-hero-h { font-size:1.45rem !important; }
    .approach { padding:2rem 4% !important; }
    .ap-form-card { padding:1.4rem 1.1rem; }
    .dt-services,.dt-process,.dt-video-section,.faq-section { padding:40px 4% !important; }
  }
  img.logo-gif {
    width: 100%;
  height: auto;
  }
h3.pr-heading {
    color: #fff;
    font-size: 2.7rem;
    margin-bottom: 1.4rem;
}
   h3.pr-heading-process {
    color: #000;
    font-size: 2.7rem;
    margin-bottom: 1.4rem;
} 
  `;

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
export default function DigitalTransformationPage() {
  // ✅ All useState hooks inside the component
  const [active, setActive] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", msg: "" });

  const toggle = (i) => setActive(active === i ? null : i);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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
      .send("service_8xw6k3r", "template_jarui36", templateParams, "XWRnXi4hK2SvmRG3q")
      .then(() => {
        alert("Message Sent Successfully ✅");
        setForm({ name: "", email: "", phone: "", company: "", msg: "" });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send ❌");
      });
  };

  return (
    <Layout>
      <Head>
        <title>Digital Transformation Services Company in India | Digital Transformation  </title>
        <meta name="description" content="Top digital transformation services company in India helping businesses adopt automation, AI, cloud, and data-driven solutions for growth and innovation. Explorer now! " />

        <meta name="keywords" content="Digital Transformation Agency, Digital Transformation Consulting, Digital Transformation Company, Digital Transformation Services, Digital Transformation Technologies, Digital Transformation Strategies, Digital Transformation Solutions, Digital Transformation Company in India, Digital Transformation Services In India" />
        <link rel="canonical" href="https://www.priyamconsultancy.com/digital-transformation/" />
        <meta property="og:title" content="Digital Transformation Services Company in India | Digital Transformation " />
        <meta property="og:description" content="Top digital transformation services company in India helping businesses adopt automation, AI, cloud, and data-driven solutions for growth and innovation. Explorer now! " />
        <meta property="og:url" content="https://www.priyamconsultancy.com/digital-transformation/" />
        <meta property="og:image" content="https://www.priyamconsultancy.com/img/digital-transformation.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Transformation Services Company in India | Digital Transformation " />
        <meta name="twitter:description" content="Top digital transformation services company in India helping businesses adopt automation, AI, cloud, and data-driven solutions for growth and innovation. Explorer now! " />
        <meta name="twitter:image" content="https://www.priyamconsultancy.com/img/digital-transformation.png" />
        {schemaData.map((schema, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}
      </Head>
      <>
        <style>{PAGE_CSS}</style>

        {/* ══ SECTION 1 — HERO ══ */}
        <section className="dt-hero">
          <div className="dt-orb dt-orb-1" />
          <div className="dt-orb dt-orb-2" />
          <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", paddingBottom: "4rem" }}>
            <div className="dt-badge"><div className="dt-badge-dot" />Digital Transformation </div>
            <h1 className="dt-hero-h">

              <span className="orange" style={{ marginLeft: '10px' }}>Digital Transformation</span>  for Maximum Business Impact

            </h1>
            <p className="dt-hero-sub">
              Starting with a deep understanding of your business, goals, and growth ambitions, we design tailored digital solutions that remove bottlenecks, streamline workflows, enhance efficiency, and drive seamless, measurable, and lasting transformation across every level of your organization for sustainable growth and long-term success.

            </p>
            <div className="dt-hero-actions">
              <a className="dt-btn" href="#">Explore More ›</a>
            </div>
          </div>
          <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src={banner}
              alt="Digital Transformation"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>
        </section>

        {/* ══ SECTION 2 — APPROACH + FORM ══ */}
        <section className="approach" id="approach">
          <div className="ap-inner">
            <div className="ap-left">
              <div className="partners-header1">
                <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Approach in</div>
              </div>
              <h2 className="ap-heading">Digital <span>Transformation</span> Services</h2>
              <p className="ap-intro">
                Modern businesses rely on speed, operational efficiency, and data-driven decision-making to remain competitive and achieve sustainable growth in rapidly evolving digital environments.
              </p>
              <p className="ap-intro">
                We implement digital solutions that optimize workflows, improve customer interactions, automate processes, and deliver measurable business outcomes through structured and scalable technology strategies.
              </p>
              <p className="ap-intro">From automation to analytics and custom applications, we manage technical execution while helping businesses stay agile, innovative, and future-ready in changing market conditions.
              </p>
            </div>
            <div className="ap-form-wrap">
              <div className="ap-form-card">
                <div className="form-card-eyebrow">
                  <span className="form-card-eyebrow-line" />Your Growth, Our Mission<span className="form-card-eyebrow-line" />
                </div>
                <div className="form-card-title">Get Your <span>Free</span> Quote</div>
                <form onSubmit={sendEmail}>
                  <div className="fl-row">
                    <div className="fl-group">
                      <label className="fl-label">Your Name</label>
                      <div style={{ position: "relative" }}>
                        <span className="fl-icon">👤</span>
                        <input className="fl-input" type="text" name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="fl-group">
                      <label className="fl-label">Company</label>
                      <div style={{ position: "relative" }}>
                        <span className="fl-icon">🏢</span>
                        <input className="fl-input" type="text" name="company" placeholder="Company name" value={form.company} onChange={handleChange} />
                      </div>
                    </div>
                  </div>
                  <div className="fl-group">
                    <label className="fl-label">Email Address</label>
                    <div style={{ position: "relative" }}>
                      <span className="fl-icon">✉️</span>
                      <input className="fl-input" type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="fl-group">
                    <label className="fl-label">Mobile Number</label>
                    <div className="phone-row">
                      <div className="phone-flag"><span className="phone-flag-icon">📞</span></div>
                      <input className="fl-input" type="tel" name="phone" placeholder="Mobile number" value={form.phone} onChange={handleChange} maxLength="10" pattern="[0-9]{10}" required />
                    </div>
                  </div>
                  <div className="fl-group textarea-group">
                    <label className="fl-label">Message</label>
                    <div style={{ position: "relative" }}>
                      <span className="fl-icon" style={{ top: "0.9rem", transform: "none" }}>💬</span>
                      <textarea className="fl-textarea" name="msg" placeholder="Tell us about your business needs..." value={form.msg} onChange={handleChange} />
                    </div>
                  </div>
                  <button type="submit" className="ap-submit">
                    Get Free Consultation <span className="ap-submit-arrow">›</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>


        {/* ══ SECTION 3 — SERVICES ══ */}
        <section className="dt-services">
          <div className="dt-svc-hdr">
            <div className="partners-header1">
              <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Specialized Digital Transformation Services</div>
            </div>

            <h3 className="pr-heading">Efficient. <span style={{ color: '#ed8337' }}>Seamless.</span> Impactful.</h3>
            <p>From workflow automation to custom applications and data analytics, we design solutions that optimize operations, reduce manual effort, and deliver measurable business outcomes tailored to your unique objectives.</p>
          </div>
          <div className="dt-svc-grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="dt-svc-card">
                <div className="dt-svc-deco" style={{ background: `${s.color}08` }} />
                <div className="dt-svc-bar" style={{ background: s.color }} />
                <div className="dt-svc-icon" style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}>
                  <img src={s.img} alt={s.title} style={{ width: "32px", height: "32px", objectFit: "contain" }} />
                </div>
                <div className="dt-svc-tag" style={{ color: s.color }}>{s.tag}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                <div className="dt-svc-pts">
                  {s.points.map((pt, j) => (
                    <span key={j} className="dt-svc-chip" style={{ background: `${s.color}10`, color: s.color, border: `1px solid ${s.color}30` }}>{pt}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ SECTION 4 — PROCESS ══ */}
        <section className="dt-process">
          <div className="dt-proc-bg" />
          <div className="dt-proc-hdr">
            <div className="partners-header1">
              <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Proven Process For Digital Transformation</div>
            </div>

            <h3 className="pr-heading-process">How We <span className="accent" style={{ color: '#ed8337' }}>Transform</span> Your Business</h3>
            <p>A structured, four-phase approach that takes you from discovery to continuous improvement.</p>
          </div>
          <div className="dt-proc-grid">
            {PROCESS_STEPS.map((s, i) => (
              <div key={i} className="dt-proc-card" style={{ borderTop: `3px solid ${s.color}80` }}>
                <div className="dt-flip-num">{s.num}</div>
                <div className="dt-flip-ico" style={{ background: `${s.color}20`, border: `1px solid ${s.color}40` }}>
                  <img src={s.img} alt={s.title} style={{ width: "32px", height: "32px", objectFit: "contain" }} />
                </div>
                <h4 className="dt-flip-ttl">{s.title}</h4>
                <div className="dt-flip-dsc">{s.shortDesc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ SECTION 4.5 — VIDEO ══ */}
        <section className="dt-video-section">
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Implementation Partners</div>
          </div>

          <h3 className="dt-video-title">Empowering Your  <span> Growth Through Seamless </span> Technology Integration</h3>

          <div className="dt-video-wrap" style={{ marginTop: '50px' }}>
            <video src={logovideo} alt="logo" className="logo-gif" autoPlay muted loop playsInline />
            {/* <img src={logovideo} alt="logo" className="logo-gif"autoPlay muted loop playsInline /> */}
          </div>
        </section>

        {/* ══ SECTION 5 — FAQ ══ */}
        <section className="faq-section">
          <div style={{ textAlign: "center", marginBottom: "12px" }}>
            <span className="partners-eyebrow">Frequently Asked Questions</span>
          </div>
          <div className="container">
            <div className="faq-head">
              <h2>Queries That Could <span>Hold You Back</span></h2>
            </div>
            <div className="faq-wrapper">
              <div className="faq-col">
                {faqData.slice(0, 3).map((item, i) => (
                  <div className="faq-item" key={i}>
                    <div className="faq-question" onClick={() => toggle(i)}>
                      <span>{item.q}</span>
                      <span className="icon">{active === i ? "−" : "+"}</span>
                    </div>
                    {active === i && <div className="faq-answer">{item.a}</div>}
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
                    {active === i + 3 && <div className="faq-answer">{item.a}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 6 — CTA ══ */}
        <BlogSection />
        <CTASection />
      </>
    </Layout>
  );
}