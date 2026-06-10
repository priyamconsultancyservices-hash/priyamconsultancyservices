import { useState, useEffect, useRef } from "react";
import CTASection from "../components/HomePage/CTA";
const banner = "/img/busniess-registration.png";
import emailjs from "@emailjs/browser";
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';


function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/business-registrations/";
  const imageUrl = "https://www.priyamconsultancy.com/img/business-registration.png";

  return (
    <Head>
      {/* ── Primary Meta ── */}
      <title>Business Registration Services | Company Registration in Coimbatore </title>
      <meta name="description" content="Professional Business Registration Services in Coimbatore. Get seamless company registration, legal support, and compliance guidance for your business growth. " />
      <meta name="keywords" content="Business Registration, Business Registration Services, Business Registration Consultants, Limited Company Registration Services, Private Limited Company Registration Services, Public Limited Company Registration Services, Limited Liability Partnership Services, Company Registration Consultants" />
      <link rel="canonical" href="https://www.priyamconsultancy.com/business-registrations/" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Business Registration Services | Company Registration in Coimbatore " />
      <meta property="og:description" content="Professional Business Registration Services in Coimbatore. Get seamless company registration, legal support, and compliance guidance for your business growth. " />
      <meta property="og:url" content="https://www.priyamconsultancy.com/business-registrations/" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Priyam Consultancy Services" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Business Registration Services | Company Registration in Coimbatore " />
      <meta name="twitter:description" content="Professional Business Registration Services in Coimbatore. Get seamless company registration, legal support, and compliance guidance for your business growth. " />
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
              "@id":"https://www.priyamconsultancy.com/business-registrations/",
              "name":"business-registrations"
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
        "@id":"https://www.priyamconsultancy.com/business-registrations/#service",
        "name":"Business Registrations",
        "serviceType":"Business Registration Services",
        "url":"https://www.priyamconsultancy.com/business-registrations/",
        "description":"Priyam Consultancy provides professional business registration services including proprietorship registration, partnership registration, LLP registration, OPC registration, private limited company incorporation and statutory registration support for businesses across India.",
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
        "name": "business-registrations",
        "image": ["https://www.priyamconsultancy.com/img/busniess-registration.png"],
        "description": "Best business registration services in Coimbatore offering proprietorship registration, partnership registration, LLP registration, OPC registration, private limited company incorporation and statutory registration support.",
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
        "reviewCount": "5927"
        },
        "offers": {
        "@type": "Offer",
        "url": "https://www.priyamconsultancy.com/business-registrations/",
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
            "name": "What do you mean by business registration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Business registration is the legal process of officially establishing a business entity under applicable government regulations. It provides legal recognition, enables tax registration, supports banking and compliance requirements, and allows businesses to operate professionally within a structured legal framework."
            }
          },{
            "@type": "Question",
            "name": "How many types of business registration are there?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Common types of business registration in India include Sole Proprietorship, Partnership Firm, Limited Liability Partnership (LLP), One Person Company (OPC), Private Limited Company, and Public Limited Company. The ideal structure depends on ownership, liability, compliance needs, and long-term business objectives."
            }
          },{
            "@type": "Question",
            "name": "Can a single person establish a business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, a single person can legally establish a business in India through structures like Sole Proprietorship or One Person Company (OPC). These options allow individuals to start and manage businesses independently while meeting applicable legal, taxation, and compliance requirements."
            }
          },{
            "@type": "Question",
            "name": "How much time does it take in India to register a business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The business registration timeline in India depends on the business structure and documentation readiness. Typically, registration can take anywhere between 5 to 15 working days, including approvals, verification processes, and statutory registrations required for legal business operations."
            }
          },{
            "@type": "Question",
            "name": "What documents are required for business registration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Business registration generally requires PAN card, Aadhaar card, address proof, passport-size photographs, business address proof, and bank details. Additional documents may vary depending on the selected business structure, partners, directors, or specific registration and licensing requirements."
            }
          },{
            "@type": "Question",
            "name": "Is GST registration mandatory after business registration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GST registration depends on your business turnover, industry type, and operational requirements. Businesses exceeding the prescribed turnover limit or involved in interstate trade, ecommerce, or specific taxable services are generally required to obtain GST registration under applicable regulations."
            }
          }]
        }

      `}</script>

    </Head>
  );
}

/* ═══════════════════════════════
   SECTION 1 — HERO BANNER
═══════════════════════════════ */
function HeroSection() {
  return (
    <section className="hero-section" style={{ minHeight: "100svh", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "2rem", padding: "1rem 6% 3rem", position: "relative", overflow: "hidden", background: "#004168" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:ital,wght@0,700;0,900;1,300;1,700&display=swap');
        :root{--navy:#022b44;--navy-deep:#011a2a;--navy-mid:#0a3652;--orange:#ed8337;--orange-light:#f5a66b;--text-dim:rgba(255,255,255,0.45);}
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        body{font-family:'DM Sans',sans-serif;color:#fff;overflow-x:hidden;}
        .orb{position:absolute;border-radius:50%;pointer-events:none;filter:blur(70px);animation:orb-drift 8s ease-in-out infinite alternate;}
        .orb-1{width:380px;height:380px;background:rgba(237,131,55,0.07);top:-80px;right:10%;}
        .orb-2{width:300px;height:300px;background:rgba(10,54,82,0.8);bottom:-60px;left:5%;animation-delay:2s;}
        .orb-3{width:200px;height:200px;background:rgba(237,131,55,0.05);top:40%;left:40%;animation-delay:4s;}
        @keyframes orb-drift{0%{transform:translate(0,0)}100%{transform:translate(20px,-20px)}}
        @keyframes dots-pulse{from{opacity:0.4}to{opacity:0.9}}
        @keyframes float-ud{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        .badge{display:inline-flex;align-items:center;gap:0.5rem;background:rgba(237,131,55,0.1);border:1px solid rgba(237,131,55,0.28);color:#ed8337;font-size:0.7rem;font-weight:700;padding:0.38rem 1rem;border-radius:50px;letter-spacing:0.09em;text-transform:uppercase;width:fit-content;animation:fadeUp .6s ease both;}
        .badge-dot{width:6px;height:6px;border-radius:50%;background:#ed8337;animation:pulse-dot 1.7s ease-in-out infinite;}
        @keyframes pulse-dot{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.7);opacity:0.45}}
        .hero-heading{font-family:'Poppins',sans-serif;font-size:clamp(2rem,3.6vw,3.3rem);font-weight:600;line-height:1.1;margin-top:1.3rem;animation:fadeUp .7s .08s ease both;color:#fff;}
        .orange{color:#ed8337;}
        .underline-word{position:relative;display:inline-block; margin-left:12px;}
        .underline-word::after{content:'';position:absolute;left:0;bottom:-3px;width:100%;height:3px;background:linear-gradient(90deg,#ed8337,#f5a66b);border-radius:2px;transform:scaleX(0);transform-origin:left;animation:line-in .55s 1s ease forwards;}
        @keyframes line-in{to{transform:scaleX(1)}}
        .hero-sub{margin-top:1.4rem;font-size:0.97rem;line-height:1.82;color:rgba(255, 255, 255, 0.99);max-width:fit-content;animation:fadeUp .7s .16s ease both;}
        .hero-actions{margin-top:2rem;display:flex;gap:1rem;align-items:center;animation:fadeUp .7s .26s ease both;}
        .btn-fill{background:#ed8337;color:#fff;padding:0.88rem 2.1rem;border-radius:50px;font-family:'DM Sans',sans-serif;font-size:0.93rem;font-weight:500;text-decoration:none;display:inline-flex;align-items:center;gap:0.55rem;box-shadow:0 6px 26px rgba(237,131,55,0.34);transition:background .22s,transform .18s,box-shadow .22s;}
        .btn-fill:hover{background:#f5a66b;transform:translateY(-3px);box-shadow:0 10px 34px rgba(237,131,55,0.46);}
        .btn-arr{width:24px;height:24px;border-radius:50%;background:rgba(2,43,68,0.25);display:flex;align-items:center;justify-content:center;font-size:0.9rem;}
        @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        .hero-img-wrap{position:relative;width:100%;max-width:600px;height:auto;min-height:auto;display:flex;align-items:center;justify-content:center;}
        .hero-img{width:100%;height:auto;object-fit:contain;}
        /* ══ HERO RESPONSIVE ══ */
        .hero-section { overflow-x: hidden; }

        /* Tablet */
        @media(max-width:900px){
          .hero-section {
            grid-template-columns: 1fr !important;
            padding: 4rem 5% 3rem !important;
            min-height: auto !important;
            text-align: start;
          }
          .hero-content-col {
            order: 1 !important;
            align-items: flex-start !important;
                    padding: 2rem 0;
            display: flex; flex-direction: column;
          }
          .hero-img-col {
            order: 2 !important;
            width: 100%; display: flex;
            justify-content: center;
          }
          .illus-wrap, .hero-img-wrap {
            height: auto !important;
            width: 100% !important;
            max-width: 460px !important;
          }
          .hero-img { width: 100% !important; height: 100% !important; }
          .hero-sub { max-width: 90% !important; }
          .hero-actions { justify-content: flex-start !important; }
          .badge { margin: 0; }
          /* approach */
          .ap-inner { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .ap-form-wrap { max-width: 100% !important; width: 100% !important; }
          .fl-row { grid-template-columns: 1fr 1fr !important; }
          /* faq */
          .faq-wrapper { grid-template-columns: 1fr 1fr !important; }
          /* rg */
          .rg-layout { grid-template-columns: 1fr !important; }
        }

        /* Mobile */
        @media(max-width:600px){
          .hero-section {
            padding: 5rem 4% 2.5rem !important;
          }
          .hero-heading { font-size: clamp(1.7rem,6vw,2.2rem) !important; }
          .hero-sub { font-size: 0.9rem !important; max-width: 100% !important; }
          .illus-wrap, .hero-img-wrap {
            height: auto !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .hero-img { object-fit: contain !important; }
          .badge { font-size: 0.62rem !important; }
          /* approach */
          .fl-row { grid-template-columns: 1fr !important; }
          .ap-form-card { padding: 2rem 1.4rem !important; }
          /* faq */
          .faq-wrapper { grid-template-columns: 1fr !important; }
          /* faq mobile */
          .faq-col { display:flex; flex-direction:column; gap:0.6rem; }
          .faq-item { border-radius:10px; padding:13px 16px; }
          .faq-question { font-size:0.88rem; gap:0.6rem; align-items:flex-start; }
          .faq-question .icon { flex-shrink:0; font-size:1.1rem; color:#ed8337; }
          .faq-answer { font-size:0.82rem; line-height:1.65; margin-top:0.5rem; }
          .faq-wrapper { display:block; }
          /* hww */
          .hww-flow { grid-template-columns: 1fr !important; }
          .hww-arrow { display: none !important; }
            h3.faq-h3 {font-size:1.9rem!important;}
        }
        .menu li{position:relative;cursor:pointer;font-size:16px;color:black;}
        /* ══ BANNER FIX ══ */
        .hero-img-col { overflow: hidden; }
        @media(max-width:1100px){
          .hero-section { gap: 1.5rem !important; padding: 1rem 5% 3rem !important; }
          .hero-heading { font-size: clamp(1.9rem, 3vw, 2.8rem) !important;         line-height: 1.46; }
        }
        @media(max-width:400px){
          .hero-img-wrap { min-height: 180px !important; }
          .hero-heading { font-size: 1.6rem !important; line-height: 1.2 !important; }
          .hero-sub { font-size: 0.85rem !important; }
            h3.faq-h3 {font-size:1.9rem!important;}
        }
      
      `}</style>

      {/* LEFT CONTENT */}
      <div className="hero-content-col" style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column" }}>
        <div className="badge"><div className="badge-dot" />Business Registration </div>
        <h1 className="hero-heading">
          Business Registration Partner for
          <span className="underline-word orange">Sustainable  </span>Success
        </h1>
        <p className="hero-sub">
          Your business deserves a solid foundation. From registration to ongoing compliance, we simplify the legal and regulatory maze so you can focus on building your brand, expanding your operations, and achieving sustainable growth. With expert guidance at every step, your business stays protected, credible, and ready for the future.

        </p>
        <div className="hero-actions">
          <a className="btn-fill" href="/contact-us"><span>Explore More</span><div className="btn-arr">›</div></a>
        </div>
      </div>

      {/* RIGHT ILLUSTRATION */}
      <div className="hero-img-col" style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="hero-img-wrap">
          <img
            src={banner}
            alt="Business Registration Illustration"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════
   SECTION 2 — OUR APPROACH
═══════════════════════════════ */

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
      <style>{`
        .approach { position:relative; padding:4rem 6%; overflow:hidden; }
        .ap-inner { position:relative; z-index:2; margin:0 auto; display:grid; grid-template-columns:1fr 0.7fr; gap:4rem; align-items:center; }
        .ap-heading { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3vw,2.6rem); line-height:1.12; color:#000; margin-bottom:1.2rem; }
        .ap-heading span { color:var(--orange); }
        .ap-intro { font-size:1rem; line-height:1.8; color:#5a6a7a; margin-bottom:2rem; }
        .ap-form-wrap { position:relative; max-width:450px; }
        .ap-form-wrap::before { content:''; position:absolute; inset:-2px; background:linear-gradient(135deg,rgba(237,131,55,0.55),rgba(237,131,55,0.1),rgba(237,131,55,0.55)); border-radius:26px; z-index:0; }
        .ap-form-card { position:relative; z-index:1; background:#004168; border-radius:24px; padding:2.8rem 2.6rem; box-shadow:0 24px 60px rgba(0,0,0,0.5),0 0 40px rgba(237,131,55,0.06); border:1px solid rgba(237,131,55,0.18); text-align:center; }
        .form-card-eyebrow { display:inline-flex; align-items:center; gap:8px; font-family:'Poppins',sans-serif; font-size:0.6rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:var(--orange); margin-bottom:0.8rem; }
        .form-card-eyebrow-line { width:22px; height:1px; background:var(--orange); }
        .form-card-title { font-family:'Poppins',sans-serif; font-size:1.7rem; font-weight:800; color:#fff; line-height:1.15; margin-bottom:2.4rem; }
        .form-card-title span { color:var(--orange); }
        .fl-row { display:grid; grid-template-columns:1fr 1fr; gap:0.85rem; }
        .fl-group { position:relative; margin-bottom:1rem; }
        .fl-label { display:block; font-family:'Poppins',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--orange); margin-bottom:0.4rem; text-align:start; }
        .fl-input,.fl-textarea { width:100%; padding:0.82rem 1rem 0.82rem 2.6rem; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; font-family:'Poppins',sans-serif; font-size:0.88rem; color:#fff; background:rgba(255,255,255,0.04); outline:none; appearance:none; transition:border-color 0.22s,background 0.22s,box-shadow 0.22s; }
        .fl-input::placeholder,.fl-textarea::placeholder { color:rgba(255,255,255,0.3); }
        .fl-input:focus,.fl-textarea:focus { border-color:var(--orange); background:rgba(237,131,55,0.06); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .fl-icon { position:absolute; left:0.85rem; top:50%; transform:translateY(-50%); font-size:0.95rem; opacity:0.5; pointer-events:none; }
        .fl-group.textarea-group .fl-icon { top:0.9rem; transform:none; }
        .fl-textarea { min-height:88px; resize:none; padding-top:0.82rem; padding-left:2.6rem; }
        .phone-row { display:flex; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; overflow:hidden; background:rgba(255,255,255,0.04); transition:border-color 0.22s,box-shadow 0.22s; }
        .phone-row:focus-within { border-color:var(--orange); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .phone-flag { display:flex; align-items:center; gap:0.3rem; padding:0 0.85rem; font-size:0.82rem; font-weight:700; color:#fff; border-right:1.5px solid rgba(237,131,55,0.2); white-space:nowrap; background:rgba(237,131,55,0.08); cursor:default; flex-shrink:0; }
        .phone-flag-icon { font-size:0.9rem; opacity:0.7; }
        .phone-row .fl-input { border:none; border-radius:0; background:transparent; box-shadow:none; padding:0.82rem 1rem; }
        .phone-row .fl-input:focus { box-shadow:none; }
        .ap-submit { width:100%; background:linear-gradient(135deg,#ed8337,#f5a66b); color:#fff; border:none; padding:1rem 1.5rem; border-radius:12px; font-family:'Poppins',sans-serif; font-size:0.97rem; font-weight:500; cursor:pointer; letter-spacing:0.02em; display:flex; align-items:center; justify-content:center; gap:0.6rem; transition:transform 0.2s,box-shadow 0.2s; }
        .ap-submit:hover { transform:translateY(-2px); box-shadow:0 12px 36px rgba(237,131,55,0.5); }
        .ap-submit-arrow { display:inline-flex; align-items:center; justify-content:center; width:24px; height:24px; border-radius:50%; background:rgba(2,43,68,0.25); font-size:0.9rem; }
      `}</style>

      <div className="ap-inner">

        {/* LEFT CONTENT */}
        <div className="ap-left">
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Approach in</div>
          </div>
          <h2 className="ap-heading">Business  <span>Process Automation</span></h2>
          <p className="ap-intro">
            Every business is unique, and its registration journey should reflect that. We begin by understanding your vision, operations, and long-term goals. This helps us align every step with your business direction.
          </p>
          <p className="ap-intro">
            We assess the most suitable structure for your needs and guide you through the process. From documentation to approvals, everything is handled with precision. This ensures a smooth, efficient, and legally sound setup.
          </p>
          <p className="ap-intro">
            Business registration is more than paperwork—it’s the foundation of your growth. We manage every formality so you can focus on building and expanding. Your business starts strong, confident, and ready for long-term success.
          </p>
        </div>

        {/* RIGHT FORM */}
             <div className="ap-form-wrap">
          <div className="ap-form-card">

            <div className="form-card-eyebrow">
              <span className="form-card-eyebrow-line" />Your Growth, Our Mission<span className="form-card-eyebrow-line" />
            </div>
            <div className="form-card-title">
              Get Your <span>Free</span> Quote
            </div>

            {/* ✅ FORM START */}
            <form onSubmit={sendEmail}>

              <div className="fl-row">

                <div className="fl-group">
                  <label className="fl-label">Your Name</label>
                  <div style={{ position: "relative" }}>
                    <span className="fl-icon">👤</span>
                    <input
                      className="fl-input"
                      type="text"
                      name="name"
                      placeholder="Full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="fl-group">
                  <label className="fl-label">Company</label>
                  <div style={{ position: "relative" }}>
                    <span className="fl-icon">🏢</span>
                    <input
                      className="fl-input"
                      type="text"
                      name="company"
                      placeholder="Company name"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

              </div>

              <div className="fl-group">
                <label className="fl-label">Email Address</label>
                <div style={{ position: "relative" }}>
                  <span className="fl-icon">✉️</span>
                  <input
                    className="fl-input"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="fl-group">
                <label className="fl-label">Mobile Number</label>
                <div className="phone-row">
                  <div className="phone-flag">
                    <span className="phone-flag-icon">📞</span>

                  </div>
                  <input
                    className="fl-input"
                    type="tel"
                    name="phone"
                    placeholder="Mobile number"
                    value={form.phone}
                    onChange={handleChange}
                    maxLength="10"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
              </div>

              <div className="fl-group textarea-group">
                <label className="fl-label">Message</label>
                <div style={{ position: "relative" }}>
                  <span className="fl-icon" style={{ top: "0.9rem", transform: "none" }}>💬</span>
                  <textarea
                    className="fl-textarea"
                    name="msg"
                    placeholder="Tell us about your business needs..."
                    value={form.msg}
                    onChange={handleChange}

                  />
                </div>
              </div>

              {/* ✅ SUBMIT BUTTON */}
              <button type="submit" className="ap-submit">
                Get Free Consultation
                <span className="ap-submit-arrow">›</span>
              </button>

            </form>
            {/* ✅ FORM END */}

          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════
   SECTION 3 — REGISTRATION TYPES
═══════════════════════════════ */
const REG_DATA = [
  { num: "01", tag: "PLC", label: "Public Limited Company", title: "Raise Capital and Scale <i>Confidently</i>", desc: ["Ideal for large businesses aiming to raise capital from the public and expand at scale. A Public Limited Company enhances credibility and builds strong trust among investors and stakeholders. It supports structured growth with wider market access.", "With defined governance and strict regulatory compliance, it ensures transparency and accountability. This structure enables long-term expansion, strong financial backing, and sustainable success. It is best suited for businesses with ambitious growth plans"], chips: ["📈 Investor Access", "🏛️ Strong Governance", "📋 Stock Exchange Listed", "✅ Regulatory Compliance"], time: "Avg. 15–25 working days" },
  { num: "02", tag: "Pvt Ltd", label: "Private Limited Company", title: "Structured Growth with <i>Limited Liability</i>", desc: ["A preferred choice for startups and growing businesses seeking structured expansion. A Private Limited Company offers limited liability protection and a clear legal identity. It builds credibility while supporting steady business growth.", "With a formal governance framework and better funding opportunities, it attracts investors easily. This structure ensures compliance while protecting the interests of owners and shareholders. It supports long-term, scalable growth."], chips: ["💼 Limited Liability", "🚀 Investor-Ready", "👥 2–200 Shareholders", "📑 Separate Legal Entity"], time: "Avg. 7–12 working days" },
  { num: "03", tag: "LLP", label: "Limited Liability Partnership", title: "Flexibility Partnership with <i>Legal Protection</i>", desc: ["An LLP combines the flexibility of a partnership with the benefits of limited liability. It is ideal for professionals and small businesses looking for operational freedom. Partners can manage roles efficiently while maintaining flexibility.", "At the same time, it offers legal protection and a recognized business structure. It ensures credibility, shared responsibilities, and reduced compliance burden. This makes it a balanced choice for stable growth."], chips: ["🤝 Flexible Structure", "🛡️ Limited Liability", "📉 Low Compliance", "💰 Easy Profit Sharing"], time: "Avg. 10–15 working days" },
  { num: "04", tag: "OPC", label: "One Person Company (OPC)", title: "Corporate Benefits for <i>Solo Entrepreneurs</i>", desc: ["Designed for individual entrepreneurs who want a corporate identity. An OPC provides limited liability and a structured framework for solo business operations. It allows you to operate with professionalism and credibility.", "With simplified compliance and full control, it supports efficient decision-making. It also offers long-term growth potential with legal protection. This makes it ideal for entrepreneurs scaling independently."], chips: ["👤 Solo Founder", "🏢 Corporate Benefits", "🔒 Asset Protection", "📊 Easy Compliance"], time: "Avg. 7–10 working days" },
  { num: "05", tag: "Partnership", label: "Partnership Firm", title: "Shared Responsibility,  <i>Collective Growth/i>", desc: ["A Partnership Firm is suitable for businesses managed by two or more individuals. It allows partners to share responsibilities, profits, and decision-making. This creates a collaborative environment for business operations.", "It offers a simple structure with legal recognition and operational ease. Partners can combine expertise to drive growth and efficiency. This makes it a practical option for small and medium businesses."], chips: ["🤝 Shared Ownership", "💡 Easy Formation", "📝 Minimal Compliance", "⚖️ Flexible Agreement"], time: "Avg. 3–7 working days" },
  { num: "06", tag: "Proprietor", label: "Sole Proprietorship", title: "Quick and Simple <i>Business Setup</i>", desc: ["Ideal for individuals looking for a quick and easy way to start a business. A Sole Proprietorship requires minimal registration and offers complete control. It is perfect for small-scale and independent operations.", "With fewer compliance requirements, it allows faster decision-making and flexibility. The owner manages all aspects of the business directly. This enables efficient operations and focused growth."], chips: ["👤 Full Control", "💸 Minimal Cost", "⚡ Quick Setup", "🏪 SMEs & Freelancers"], time: "Avg. 1–3 working days" },
];
const REG_ICONS = [
  <img src="/img/icon/public-limited-company.webp" alt="Public Limited Company" width="20" height="20" />,
  <img src="/img/icon/private-limited-company.webp" alt="Private Limited Company" width="20" height="20" />,
  <img src="/img/icon/llp-registration.webp" alt="Limited Liability Partnership" width="20" height="20" />,
  <img src="/img/icon/opc-registration.webp" alt="One Person Company" width="20" height="20" />,
  <img src="/img/icon/partnership-firm.webp" alt="Partnership Firm" width="20" height="20" />,
  <img src="/img/icon/sole-proprietorship.webp" alt="Sole Proprietorship" width="20" height="20" />,
];

function RegistrationSection() {
  const [active, setActive] = useState(0);
  const d = REG_DATA[active];
  return (
    <section style={{ padding: "90px 5%", background: "#004168", position: "relative", overflow: "hidden" }}>
      <style>{`
        .rg-sec-tag{display:inline-block;font-size:.75rem;font-weight:700;color:#ed8337;letter-spacing:2px;text-transform:uppercase;margin-bottom:.85rem;}
        .rg-sec-h{font-family:'Poppins',serif;font-size:clamp(1.9rem,3.5vw,2.6rem);font-weight:600;color:#fff;line-height:1.15;margin-bottom:.9rem;}
        .rg-sec-h i{font-style:italic;color:#ed8337;font-weight:700;}
        .rg-sec-sub{font-size:.95rem;color:#fff;margin:0 auto;line-height:1.85;}
        .rg-layout{display:grid;grid-template-columns:1fr 1.15fr;gap:0;max-width:1240px;margin:0 auto;border-radius:20px;overflow:hidden;box-shadow:0 20px 60px rgba(1,113,164,.1);}
        .rg-left{background:#fff;padding:0;}
        .rg-item{display:flex;align-items:center;gap:1rem;padding:1.4rem 2rem;border-bottom:1px solid #dce8f0;cursor:pointer;position:relative;transition:all .28s;overflow:hidden;}
        .rg-item::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:#ed8337;transform:scaleY(0);transform-origin:center;transition:transform .28s;}
        .rg-item.active::before,.rg-item:hover::before{transform:scaleY(1);}
        .rg-item.active{background:#fff4eb;}
        .rg-item:hover:not(.active){background:#fafcfe;}
        .rg-icon-box{width:42px;height:42px;border-radius:10px;background:#e0f2fb;display:flex;align-items:center;justify-content:center;transition:background .28s;flex-shrink:0;}
        .rg-item.active .rg-icon-box{background:#ed8337;}
        .rg-icon-box img{width:35px;height:23px;object-fit:contain;transition:filter .28s;}
        .rg-item.active .rg-icon-box img{filter:brightness(0) invert(1);}
        .rg-name{font-weight:500;font-size:.95rem;color:#111e27;font-family:'poppins';}
        .rg-item.active .rg-name{color:#c96820;font-family:'poppins';}
        .rg-item-arr{width:28px;height:28px;border-radius:50%;background:#dce8f0;display:flex;align-items:center;justify-content:center;font-size:.8rem;color:#7a909d;transition:all .28s;flex-shrink:0;}
        .rg-item.active .rg-item-arr{background:#ed8337;color:#fff;}
        .rg-tag-pill{font-size:.65rem;font-weight:700;letter-spacing:.8px;text-transform:uppercase;padding:.2rem .65rem;border-radius:50px;background:#e0f2fb;color:#0171a4;transition:all .2s;}
        .rg-item.active .rg-tag-pill{background:rgba(237,131,55,.2);color:#c96820;}
        .rg-right{background:linear-gradient(145deg, rgba(10, 54, 82, 0.55), rgb(76 186 235 / 23%));padding:3rem 2.8rem;position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;min-height:520px;}
        .rg-d-eye{display:flex;align-items:center;gap:.6rem;margin-bottom:1.5rem;}
        .rg-d-num{width:42px;height:42px;border-radius:10px;background:#ed8337;display:flex;align-items:center;justify-content:center;font-family:'Fraunces',serif;font-weight:900;font-size:1.1rem;color:#fff;}
        .rg-d-lbl{font-size:.7rem;font-weight:700;color:rgba(255,255,255,.4);letter-spacing:2px;text-transform:uppercase;}
        .rg-d-title{font-family:'poppins',serif;font-weight:600;font-size:1.7rem;color:#fff;line-height:1.25;margin-bottom:1rem;}
        .rg-d-title i{font-style:italic;font-weight:300;color:#ed8337;}
        .rg-d-desc{font-size:.9rem;color:rgb(255, 255, 255);line-height:1.9;margin-bottom:2rem;font-family:'poppins'}
        .rg-d-footer{display:flex;align-items:center;justify-content:space-between;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,.08);}
        .rg-d-cta{background:#ed8337;color:#fff;padding:.7rem 1.6rem;border-radius:8px;border:none;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:.85rem;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:.5rem;transition:all .2s;}
        .rg-d-cta:hover{background:#c96820;transform:translateY(-1px);}
        .rg-time-dot{width:6px;height:6px;border-radius:50%;background:#ed8337;}
        .rg-dots{display:flex;gap:.4rem;position:absolute;bottom:2.8rem;right:2.8rem;z-index:3;}
        .rg-ddot{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.2);transition:all .3s;}
        .rg-ddot.active{background:#ed8337;width:20px;border-radius:3px;}
        
        .rg-bg-c{position:absolute;border-radius:50%;pointer-events:none;}
                @media(max-width:768px){
          .rg-layout{grid-template-columns:1fr !important;}
          .rg-right{ display:none !important; }
          .rg-mobile-detail{
            display:block;
            background:linear-gradient(145deg, rgba(10,54,82,0.95), rgba(0,40,70,0.98));
            padding:1.4rem 1.2rem;
            border-left:3px solid #ed8337;
            border-radius:0 0 12px 12px;
            margin-top:-1px;
          }
          .rg-mobile-detail .rg-d-title{font-family:'Poppins',sans-serif;font-size:1rem;font-weight:700;color:#fff;margin:0.4rem 0 0.7rem;line-height:1.3;}
          .rg-mobile-detail .rg-d-desc{font-size:0.84rem;line-height:1.7;color:rgba(255,255,255,0.82);}
          .rg-item{border-radius:0;}
          .rg-item.active{border-radius:12px 12px 0 0;}
          .rg-tag-pill{display:none;}
        }
        @media(min-width:769px){
          .rg-mobile-detail{ display:none !important; }
        }
             h3.faq-h3 {
    font-size: 2.3rem;
    color: #000;
    text-align: center;
}

      `}</style>
      <div className="rg-bg-c" style={{ top: "-120px", right: "-120px", width: "400px", height: "400px", border: "1.5px solid rgba(237,131,55,.1)" }} />
      <div className="rg-bg-c" style={{ bottom: "-100px", left: "-80px", width: "300px", height: "300px", border: "1.5px solid rgba(237,131,55,.08)" }} />
      <div style={{ textAlign: "center", marginBottom: "60px", position: "relative", zIndex: 2 }}>
        <div className="partners-header1">
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Specialized Business Registration Services</h2>

        </div>
        <h3 className="rg-sec-h">Every Step <i> Legally Sound.</i> Every Registration Tailored.</h3>
        <p className="rg-sec-sub">Priyam Consultancy Services crafts tailored business registration solutions aligned with your goals and growth vision.</p>
      </div>
      <div className="rg-layout">
        <div className="rg-left">
          {REG_DATA.map((item, i) => (
            <div key={i}>
              <div className={`rg-item${active === i ? " active" : ""}`} onClick={() => setActive(i)} style={i === REG_DATA.length - 1 && active !== i ? { borderBottom: "none" } : {}}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flex: 1 }}>
                  <div className="rg-icon-box">{REG_ICONS[i]}</div>
                  <h4 className="rg-name">{item.label}</h4>
                </div>
                <span className="rg-tag-pill">{item.tag}</span>
                <div className="rg-item-arr">{active === i ? "▾" : "›"}</div>
              </div>
              {active === i && (
                <div className="rg-mobile-detail">
                  <h5 className="rg-d-title" dangerouslySetInnerHTML={{ __html: item.title }} />
                  {Array.isArray(item.desc) ? (
                    item.desc.map((para, pi) => (
                      <div className="rg-d-desc" key={pi} style={{ marginBottom: pi < item.desc.length - 1 ? "0.8rem" : "0" }}>{para}</div>
                    ))
                  ) : (
                    <div className="rg-d-desc">{item.desc}</div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="rg-right">
          <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column" }}>
            <div className="rg-d-eye"><div className="rg-d-num">{d.num}</div><div className="rg-d-lbl">{d.label}</div></div>
            <h5 className="rg-d-title" dangerouslySetInnerHTML={{ __html: d.title }} />
            {Array.isArray(d.desc) ? (
              d.desc.map((para, pi) => (
                <div className="rg-d-desc" key={pi} style={{ marginBottom: pi < d.desc.length - 1 ? "1rem" : "0" }}>{para}</div>
              ))
            ) : (
              <div className="rg-d-desc">{d.desc}</div>
            )}
            <div className="rg-d-footer">
              {/* <div className="rg-d-time"><div className="rg-time-dot" /><span>{d.time}</span></div> */}
            </div>
          </div>
          <div className="rg-dots">{REG_DATA.map((_, i) => <div key={i} className={`rg-ddot${active === i ? " active" : ""}`} />)}</div>
        </div>
      </div>

    </section>
  );
}

/* ═══════════════════════════════
   SECTION 4 — SESSION CHANGE
═══════════════════════════════ */
const SC_STEPS = [
  { num: "01", color: "orange", icon: <img src="/img/icon/business-registration-discovery-assessment.webp" alt="Discovery and Assessment" width="35" height="35" />, lbl: "Step 01 · Initiation", title: "Discovery & Assessment", desc: ["We understand your business model, vision, and goals. By analyzing industry and growth plans, we tailor registration steps to build a strong foundation.", "Business registration is more than paperwork—it’s the foundation of your growth. We manage every formality so you can focus on building and expanding. Your business starts strong, confident, and ready for long-term success."], time: "~1 Working Day", tColor: "blue", even: false, last: false },
  { num: "02", color: "blue", icon: <img src="/img/icon/business-registration-structure-planning.webp" alt="Business Structure Planning" width="35" height="35" />, lbl: "Step 02 · Documentation", title: "Business Structure Planning", desc: "Our experts evaluate entity options based on liability, taxation, investment, and scalability, recommending the most suitable structure for efficiency and sustainable long-term growth.", time: "~2-3 Working Days", tColor: "orange", even: true, last: false },
  { num: "03", color: "orange", icon: <img src="/img/icon/business-registration-documentation-filing.webp" alt="Documentation and Filing" width="35" height="35" />, lbl: "Step 03 · Filing", title: "Documentation & Filing", desc: "We manage the full registration process, preparing and submitting required forms, licenses, and approvals accurately and on time for smooth legal establishment.", time: "~2-4 Working Days", tColor: "blue", even: false, last: false },
  { num: "04", color: "blue", icon: <img src="/img/icon/business-registration-compliance-monitoring.webp" alt="Compliance Setup and Monitoring" width="35" height="35" />, lbl: "Step 04 · Approval", title: "Compliance Setup & Monitoring", desc: "Post-registration, we establish compliance systems, manage licenses and filings, and track deadlines to keep your business secure, compliant, and operating smoothly year-round.", time: "~5-7 Working Days", tColor: "orange", even: true, last: false },
  { num: "05", color: "orange", icon: <img src="/img/icon/business-registration-continuous-support.webp" alt="Continuous Support and Updates" width="35" height="35" />, lbl: "Step 05 · Complete", title: "Continuous Support & Updates", desc: "As regulations evolve, we keep your business updated and compliant, providing ongoing guidance to avoid penalties and stay prepared for future growth opportunities", time: "~1-2 Working Days", tColor: "blue", even: false, last: false },
  { num: "06", color: "blue", icon: <img src="/img/icon/business-registration-launch-maintenance.webp" alt="Launch and Ongoing Maintenance" width="35" height="35" />, lbl: "Step 06 · Complete", title: "Launch & Ongoing Maintenance", desc: "After approval, we deploy your website with monitoring and configuration, providing continuous support, updates, and maintenance for long-term stability", time: "~2-3 Working Days", tColor: "orange", even: true, last: false },


];

function SessionChangeSection() {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "90px 0 100px" }}>
      <style>{`
        .sc-bg{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(237,131,55,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(237,131,55,0.035) 1px,transparent 1px);background-size:56px 56px;animation:sc-gd 22s linear infinite;}
        @keyframes sc-gd{0%{background-position:0 0}100%{background-position:56px 56px}}
        .sc-orb{position:absolute;border-radius:50%;pointer-events:none;filter:blur(90px);animation:sc-op 9s ease-in-out infinite alternate;}
        .sc-orb-a{width:520px;height:520px;background:rgba(237,131,55,0.07);top:-140px;left:-100px;}
        .sc-orb-b{width:380px;height:380px;background:rgba(1,113,164,0.12);bottom:-100px;right:-80px;animation-delay:3s;}
        @keyframes sc-op{0%{transform:scale(1)}100%{transform:scale(1.25) translate(18px,-18px)}}
        .sc-inner{position:relative;z-index:5;max-width:1100px;margin:0 auto;padding:0 5%;}
        .sc-tag{display:inline-flex;align-items:center;gap:0.7rem;font-family:'DM Sans',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#ed8337;margin-bottom:14px;}
        .sc-tag-line{display:inline-block;width:32px;height:2px;background:linear-gradient(90deg,transparent,#ed8337);border-radius:2px;}
        .sc-tag-line:last-child{background:linear-gradient(90deg,#ed8337,transparent);}
        .sc-title{font-family:'Poppins',sans-serif;font-size:clamp(26px,3.8vw,2.6rem);font-weight:600;color:#000;margin:0;line-height:1.4;}
        .sc-title-em{font-style:italic;color:#ed8337;}
        .sc-sub{font-family:'poppins',sans-serif;font-size:16px;color:rgb(0, 0, 0);margin-top:20px;}
        .sc-step{display:flex;align-items:stretch;margin-bottom:22px;}
        .sc-step-even{flex-direction:row-reverse;}
        .sc-num-col{flex-shrink:0;width:84px;display:flex;align-items:center;justify-content:center;position:relative;}
        .sc-line-v{position:absolute;left:50%;top:0;bottom:-22px;width:2px;background:linear-gradient(to bottom,rgba(237,131,55,0.35),rgba(1,113,164,0.2));transform:translateX(-50%);z-index:1;}
        .sc-circle{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Space Mono',monospace;font-size:13px;font-weight:700;position:relative;z-index:2;transition:transform 0.3s;}
        .sc-orange{background:rgb(237, 131, 55);border:2px solid #ed8337;}
        .sc-blue{background:rgb(1, 112, 164);border:2px solid #0171a4;}
        .sc-final{background:linear-gradient(135deg,#ed8337,#f5a66b);border:2px solid #ed8337;font-weight:900;}
        .sc-step:hover .sc-circle{transform:scale(1.1);}
        .sc-conn{flex-shrink:0;width:36px;}
        .sc-card{flex:1;background:#004168;backdrop-filter:blur(18px);border:1px solid rgba(237,131,55,0.14);border-radius:20px;padding:24px 30px;position:relative;overflow:hidden;transition:transform 0.3s,box-shadow 0.3s,border-color 0.3s;}
        .sc-card:hover{transform:translateY(-5px);box-shadow:0 20px 60px rgba(0,0,0,0.4);border-color:rgba(237,131,55,0.3);}
        .sc-card-top{position:absolute;top:0;left:0;right:0;height:3px;border-radius:20px 20px 0 0;}
        .sc-top-orange{background:linear-gradient(90deg,#ed8337,#f5a66b);}
        .sc-top-blue{background:linear-gradient(90deg,#0171a4,#3b8bd4);}
        .sc-card-icon{font-size:24px;display:block;margin-bottom:8px;}
        .sc-lbl{font-family:'DM Sans',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;margin-bottom:5px;}
        .sc-lbl-orange{color:#5ab8e8;}.sc-lbl-blue{color:#5ab8e8;}
        .sc-card-title{font-family:'Poppins',sans-serif;font-size:15.5px;font-weight:600;color:#f5a66b;margin:11px 0px;}
        .sc-card-desc{font-family:'DM Sans',sans-serif;font-size:15.3px;color:rgba(255, 255, 255, 0.83);line-height:1.78;}
        .sc-time{display:inline-flex;align-items:center;gap:5px;margin-top:12px;border-radius:50px;padding:5px 14px;font-family:'DM Sans',sans-serif;font-size:10.5px;font-weight:700;}
        .sc-t-blue{background:rgba(1,113,164,0.15);border:1px solid rgba(1,113,164,0.28);color:#5ab8e8;}
        .sc-t-orange{background:rgba(237,131,55,0.1);border:1px solid rgba(237,131,55,0.25);color:#ed8337;}
        .sc-card-final{background:#022b44,rgba(1,113,164,0.06));border-color:rgba(237,131,55,0.28);}
        .sc-card-final .sc-card-title{color:#f5a66b;}
        @media(max-width:700px){.sc-step,.sc-step-even{flex-direction:column !important;}.sc-conn{display:none !important;}}
      `}</style>
      <div className="sc-bg" /><div className="sc-orb sc-orb-a" /><div className="sc-orb sc-orb-b" />
      <div className="sc-inner">
        <div style={{ textAlign: "center", marginBottom: "90px" }}>
          <div className="partners-header1">
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Business Registration Execution Process</h2>

          </div>
          <h3 className="sc-title">Simplified, Transparent and <em className="sc-title-em">Efficient Business </em>Registration</h3>
          <p className="sc-sub">
            Our Business Registration process at Priyam Consultancy Services is tailored to your business needs. We don’t just file paperwork , we build a solid legal foundation for growth, credibility, and long-term success.
          </p>
        </div>
        <div style={{ position: "relative" }}>
          {SC_STEPS.map((s, i) => (
            <div key={i} className={`sc-step${s.even ? " sc-step-even" : ""}`}>
              <div className="sc-num-col">
                {!s.last && <div className="sc-line-v" />}
                <div className={`sc-circle sc-${s.color}`}>{s.num}</div>
              </div>
              <div className="sc-conn" />
              <div className={`sc-card${s.last ? " sc-card-final" : ""}`}>
                <div className={`sc-card-top ${s.color === "blue" ? "sc-top-blue" : "sc-top-orange"}`} />
                <span className="sc-card-icon">{s.icon}</span>
                <div className={`sc-lbl sc-lbl-${s.color === "blue" ? "blue" : "orange"}`}>{s.lbl}</div>
                <h4 className="sc-card-title">{s.title}</h4>
                <div className="sc-card-desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════
   SECTION 5 — HOW WE WORK
═══════════════════════════════ */
const HWW_STEPS = [
  { title: "Strategic Registration & Planning", desc: "We start by understanding your business vision, operations, and long-term goals. Every step from entity selection to approvals is planned carefully and strategically. This ensures a strong, compliant foundation that supports sustainable growth. ", center: false, icon: <img src="/img/icon/hww-strategic-planning.webp" alt="Strategic Registration and Planning" width="34" height="34" /> },
  { title: "Specialized Team & Clear Accountability", desc: "Our business registration specialists, legal advisors, and documentation experts handle every step accurately. Roles are defined clearly to ensure accountability, smooth execution, and confidence throughout the setup process.", center: false, icon: <img src="/img/icon/hww-team-accountability.webp" alt="Specialized Team and Clear Accountability" width="34" height="34" /> },
  { title: "Review, Approve & Complete", desc: "Before finalizing any registration, our team reviews all documents, forms, and submissions to ensure accuracy and compliance. We deliver only when your business is fully registered and ready to operate.", center: true, icon: <img src="/img/icon/hww-review-approve.webp" alt="Review Approve and Complete" width="34" height="34" /> },
  { title: "Continuous Support & Guidance", desc: "Even after registration, we provide continued support for compliance updates, regulatory changes, and operational queries, keeping your business fully compliant, adaptable, and growth-ready at every stage of your business journey ahead.", center: false, icon: <img src="/img/icon/hww-continuous-support.webp" alt="Continuous Support and Guidance" width="34" height="34" /> },
];

function HowWeWorkSection() {
  return (
    <section style={{ position: "relative", background: "#004168", overflow: "hidden", padding: "60px 5% 81px" }}>
      <style>{`
        .hww-bg{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(237,131,55,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(237,131,55,0.03) 1px,transparent 1px);background-size:52px 52px;animation:hww-gd 22s linear infinite;}
        @keyframes hww-gd{0%{background-position:0 0}100%{background-position:52px 52px}}
        .hww-orb{position:absolute;border-radius:50%;pointer-events:none;filter:blur(90px);animation:hww-od 10s ease-in-out infinite alternate;}
        .hww-orb-1{width:500px;height:500px;background:rgba(237,131,55,0.06);top:-140px;right:-100px;}
        .hww-orb-2{width:380px;height:380px;background:rgba(1,113,164,0.07);bottom:-100px;left:-60px;animation-delay:5s;}
        @keyframes hww-od{0%{transform:scale(1)}100%{transform:scale(1.2) translate(20px,-20px)}}
        .hww-tag{display:inline-flex;align-items:center;gap:0.65rem;font-family:'DM Sans',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#ed8337;margin-bottom:14px;}
        .hww-tag-line{display:inline-block;width:28px;height:2px;border-radius:2px;background:linear-gradient(90deg,transparent,#ed8337);}
        .hww-tag-line:last-child{background:linear-gradient(90deg,#ed8337,transparent);}
        .hww-title{font-family:'Poppins',sans-serif;font-size:clamp(26px,3.6vw,42px);font-weight:600;color:#fff;margin:0;line-height:1.13;}
        .hww-accent{color:#ed8337;font-style:italic;}
        .hww-sub{font-family:'DM Sans',sans-serif;font-size:16px;color:rgb(255, 255, 255);margin-top:20px;margin-left:auto;margin-right:auto;line-height:1.75;}
        .hww-flow{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
        .hww-flow::before{content:'';position:absolute;top:54px;left:calc(10% + 28px);right:calc(10% + 28px);height:2px;background:linear-gradient(90deg,#ed8337,rgba(237,131,55,0.4),rgba(1,113,164,0.5),#0171a4);z-index:0;animation:hww-lg 3s ease-in-out infinite alternate;}
        @keyframes hww-lg{from{opacity:0.5}to{opacity:1}}
        .hww-step{display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 12px;position:relative;z-index:2;cursor:default;}
        .hww-icon-wrap{width:108px;height:108px;position:relative;margin-bottom:22px;flex-shrink:0;}
        .hww-ring{position:absolute;inset:0;border-radius:50%;border:1.5px dashed rgba(237,131,55,0.25);animation:hww-rs 14s linear infinite;}
        .hww-ring::before{content:'';position:absolute;top:-4px;left:50%;transform:translateX(-50%);width:7px;height:7px;border-radius:50%;background:#ed8337;box-shadow:0 0 10px rgba(237,131,55,0.7);}
        .hww-step:hover .hww-ring{border-color:rgba(237,131,55,0.55);}
        .hww-disc{position:absolute;inset:12px;border-radius:50%;background:rgba(237,131,55,0.06);border:1px solid rgba(237,131,55,0.15);animation:hww-db 3.5s ease-in-out infinite;}
        .hww-step:hover .hww-disc{background:rgba(237,131,55,0.12);box-shadow:0 0 28px rgba(237,131,55,0.2);}
        .hww-svg{position:absolute;inset:24px;border-radius:50%;background:#004168;border:1.5px solid rgba(237,131,55,0.3);display:flex;align-items:center;justify-content:center;transition:transform 0.4s,border-color 0.3s;}
        .hww-step:hover .hww-svg{transform:scale(1.12);border-color:rgba(237,131,55,0.6);}
        .hww-svg img{width:28px;height:28px;object-fit:contain;}
        .hww-step-center .hww-ring{border-color:rgba(245,166,107,0.35);}
        .hww-step-center .hww-ring::before{background:#f5a66b;}
        .hww-step-center .hww-svg{border-color:rgba(245,166,107,0.45);}
        .hww-step-center .hww-svg img{opacity:0.85;}
        .hww-step-center .hww-step-title{color:#f5a66b;}
        @keyframes hww-rs{to{transform:rotate(360deg)}}
        @keyframes hww-db{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}
        .hww-arrow{display:none;position:absolute;top:46px;right:-14px;width:28px;height:14px;z-index:3;opacity:0.5;animation:hww-ab 2s ease-in-out infinite;}
        @keyframes hww-ab{0%,100%{opacity:0.3;transform:translateX(0)}50%{opacity:0.7;transform:translateX(3px)}}
        .hww-step-title{font-family:'Poppins',sans-serif;font-size:16px;font-weight:600;color:#f5a66b;line-height:1.35;margin-bottom:14px;}
        .hww-step:hover .hww-step-title{color:#f5a66b;}
        .hww-step-desc{font-family:'DM Sans',sans-serif;font-size:15px;color:rgb(255, 255, 255);line-height:1.8;}
        .hww-step:hover .hww-step-desc{color:rgba(255,255,255,0.6);}
        .hww-cta-row{display:flex;align-items:center;justify-content:center;margin-top:64px;gap:1.6rem;}
        .hww-cta-line{flex:1;max-width:200px;height:1px;background:linear-gradient(90deg,transparent,rgba(237,131,55,0.3),transparent);}
        .hww-cta-btn{display:inline-flex;align-items:center;gap:0.55rem;background:linear-gradient(135deg,#ed8337,#f5a66b);color:#011a2a;padding:0.85rem 2.2rem;border-radius:50px;font-family:'DM Sans',sans-serif;font-size:0.9rem;font-weight:700;text-decoration:none;box-shadow:0 6px 24px rgba(237,131,55,0.38);transition:transform 0.2s,box-shadow 0.2s;}
        .hww-cta-btn:hover{transform:translateY(-3px);box-shadow:0 10px 34px rgba(237,131,55,0.52);}
        .hww-cta-btn svg{width:18px;height:18px;stroke:#011a2a;stroke-width:2;fill:none;}
        @media(max-width:900px){.hww-flow{grid-template-columns:1fr 1fr !important;gap:36px 20px !important;}.hww-flow::before{display:none !important;}}
        @media(max-width:540px){.hww-flow{grid-template-columns:1fr !important;}.hww-arrow{display:none !important;}}
        .faq-head h2 {
          color: #000;
        }
      `}</style>
      <div className="hww-bg" /><div className="hww-orb hww-orb-1" /><div className="hww-orb hww-orb-2" />
      <div style={{ position: "relative", zIndex: 2, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>How We Work</div>

          </div>
          <h2 className="hww-title">Strategize Clearly. <span className="hww-accent">Launch Securely.</span></h2>
          <p className="hww-sub">Build a strong foundation that supports seamless operations, sustained growth, and long-term business success.</p>
        </div>
        <div className="hww-flow">
          {HWW_STEPS.map((s, i) => (
            <div key={i} className={`hww-step${s.center ? " hww-step-center" : ""}`}>
              <div className="hww-icon-wrap">
                <div className="hww-ring" style={i % 2 === 1 ? { animationDirection: "reverse", animationDuration: "18s" } : {}} />
                <div className="hww-disc" />
                <div className="hww-svg">{s.icon}</div>
                {i < 3 && (
                  <div className="hww-arrow" style={{ animationDelay: `${i * 0.4}s` }}>
                    <svg viewBox="0 0 28 14" fill="none"><path d="M0 7h24M18 2l6 5-6 5" stroke="#ed8337" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                )}
              </div>
              <h3 className="hww-step-title">{s.title}</h3>
              <div className="hww-step-desc">{s.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
const faqData = [
  { q: "What do you mean by business registration?", a: " Business registration is the legal process of officially establishing a business entity under applicable government regulations. It provides legal recognition, enables tax registration, supports banking and compliance requirements, and allows businesses to operate professionally within a structured legal framework." },
  { q: "How many types of business registration are there?", a: "Common types of business registration in India include Sole Proprietorship, Partnership Firm, Limited Liability Partnership (LLP), One Person Company (OPC), Private Limited Company, and Public Limited Company. The ideal structure depends on ownership, liability, compliance needs, and long-term business objectives." },
  { q: "Is GST registration mandatory after business registration?", a: "GST registration depends on your business turnover, industry type, and operational requirements. Businesses exceeding the prescribed turnover limit or involved in interstate trade, ecommerce, or specific taxable services are generally required to obtain GST registration under applicable regulations." },
  { q: "Can a single person establish a business?", a: " Yes, a single person can legally establish a business in India through structures like Sole Proprietorship or One Person Company (OPC). These options allow individuals to start and manage businesses independently while meeting applicable legal, taxation, and compliance requirements." },
  { q: "What documents are required for business registration?", a: "Business registration generally requires PAN card, Aadhaar card, address proof, passport-size photographs, business address proof, and bank details. Additional documents may vary depending on the selected business structure, partners, directors, or specific registration and licensing requirements." },
  { q: "How much time does it take in India to register a business?", a: "The business registration timeline in India depends on the business structure and documentation readiness. Typically, registration can take anywhere between 5 to 15 working days, including approvals, verification processes, and statutory registrations required for legal business operations." },
];
function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (

    <section className="faq-section">
      <div className="partners-header2" style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2 className="partners-eyebrow" >Frequently Asked Questions
        </h2>
      </div>
      <div className="container">
        {/* TITLE */}
        <div className="faq-head">
          <h3 className="faq-h3">Queries That Could <span>Hold You Back</span></h3 >
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

/* ═══════════════════════════════
   ROOT EXPORT
═══════════════════════════════ */
export default function BusinessRegistrationPage() {
  return (
    <Layout>
      <SEOHead />
      <HeroSection />
      <ApproachSection />
      <RegistrationSection />
      <SessionChangeSection />
      <HowWeWorkSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
}