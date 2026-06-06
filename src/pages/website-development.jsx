import { useState, useEffect, useRef, useCallback } from "react";
import CTASection from "../components/HomePage/CTA";
import emailjs from "@emailjs/browser"; 
const TechImg = "/img/Technology-logos.gif";
import BlogSection from "../components/BlogSection";
import Layout from '@theme/Layout';
const banner = "/img/website-development.png";
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


/* ══════════════════════════════════════
   GLOBAL STYLES
══════════════════════════════════════ */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap');

  :root {
    --navy: #022b44; --navy-deep: #011a2a; --navy-mid: #0a3652;
    --orange: #ed8337; --orange-light: #f5a66b;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { overflow-x: hidden; }

 .container {
 width:100%; 
 }
  /* ── HERO BADGE ── */
  .badge {
    display:inline-flex; align-items:center; gap:.5rem;
    background:rgba(237,131,55,0.1); border:1px solid rgba(237,131,55,0.28);
    color:var(--orange); font-size:0.72rem; font-weight:700;
    padding:.38rem 1rem; border-radius:50px; letter-spacing:.09em; text-transform:uppercase;
    margin-bottom:1.4rem; animation:fadeUp .6s ease both;
  }
  .badge-dot { width:6px; height:6px; border-radius:50%; background:var(--orange); animation:pulse-dot 1.6s infinite; }

  /* ══ HERO BANNER (Website Dev) ══ */
  .wd-hero {
    min-height:100vh; display:grid; grid-template-columns:1fr 1fr;
    align-items:center; gap:2rem; padding:4rem 6% 4rem;
    position:relative; box-sizing:border-box; overflow:hidden; background:#004168;
  }
  .wd-hero-bg-radial { position:absolute;inset:0;pointer-events:none;
    background:radial-gradient(ellipse 65% 70% at 100% 50%,rgba(237,131,55,0.10) 0%,transparent 60%),
               radial-gradient(ellipse 50% 60% at 0% 100%,rgba(10,66,102,0.5) 0%,transparent 55%); }
  .wd-hero-bg-grid { position:absolute;inset:0;pointer-events:none;
    background-image:linear-gradient(rgba(237,131,55,0.028) 1px,transparent 1px),linear-gradient(90deg,rgba(237,131,55,0.028) 1px,transparent 1px);
    background-size:52px 52px; }
  .wd-hero-heading { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.6vw,3.3rem); font-weight:600; line-height:1.15; margin-top:1.4rem; animation:fadeUp .7s .08s ease both; color:#fff; text-align:start; }
  .wd-hero-heading .orange { color:var(--orange); }
  .wd-hero-heading .lined { position:relative; display:inline-block; }
  .wd-hero-heading .lined::after { content:''; position:absolute; left:0; bottom:-3px; width:100%; height:3px; background:var(--orange); border-radius:2px; transform:scaleX(0); transform-origin:left; animation:wd-line-in .5s .9s ease forwards; }
  @keyframes wd-line-in { to{transform:scaleX(1);} }
  .wd-hero-sub { margin-top:1.4rem; font-size:1rem; line-height:1.78; color:rgba(255,255,255,0.85); max-width:100%; animation:fadeUp .7s .16s ease both; }
  .wd-hero-actions { margin-top:2rem; display:flex; gap:.9rem; flex-wrap:wrap; animation:fadeUp .7s .26s ease both; }
  .wd-btn-fill { background:var(--orange); color:#fff; padding:.85rem 2rem; border-radius:50px; font-family:'Poppins',sans-serif; font-size:.9rem; font-weight:600; text-decoration:none; border:none; cursor:pointer; transition:background .22s,transform .18s,box-shadow .22s; display:inline-flex; align-items:center; gap:.5rem; box-shadow:0 4px 22px rgba(237,131,55,.32); }
  .wd-btn-fill:hover { background:var(--orange-light); transform:translateY(-2px); box-shadow:0 8px 30px rgba(237,131,55,0.42); }
  .wd-btn-arrow { display:inline-flex; align-items:center; justify-content:center; width:22px; height:22px; border-radius:50%; background:rgba(2,43,68,0.3); font-size:.85rem; }

  /* Hero right image */
  .wd-hero-img { height:470px; object-fit:contain; max-width:100%; border-radius:16px; }

  /* ══ OUR APPROACH SECTION ══ */
  .wd-approach { position:relative; padding:5rem 6%; overflow:hidden;  }
  .wd-ap-inner { position:relative; z-index:2; margin:0 auto; display:grid; grid-template-columns:1fr 0.75fr; gap:4rem; align-items:center; }
  .wd-ap-eyebrow { display:inline-flex; align-items:center; gap:.55rem; font-family:'Space Mono',monospace; font-size:.7rem; font-weight:700; color:var(--orange); letter-spacing:.13em; text-transform:uppercase; margin-bottom:1.1rem; }
  .wd-ap-eyebrow-line { width:24px; height:2px; background:var(--orange); border-radius:2px; }
  .wd-ap-heading { font-family:'Poppins',sans-serif; font-size:clamp(1.8rem,2.8vw,2.5rem); line-height:1.12; margin-bottom:1.2rem; font-weight:700;color:#000; }
  .wd-ap-heading span { color:var(--orange); }
  .wd-ap-intro { font-size:1rem; line-height:1.8;  margin-bottom:1.4rem; color:#000; }
  .wd-ap-form-wrap { position:relative; max-width:450px; }
  .wd-ap-form-wrap::before { content:''; position:absolute; inset:-2px; background:linear-gradient(135deg,rgba(237,131,55,0.55),rgba(237,131,55,0.1),rgba(237,131,55,0.55)); border-radius:26px; z-index:0; }
  .wd-ap-form-card { position:relative; z-index:1; background:#004168; border-radius:24px; padding:2.8rem 2.6rem; box-shadow:0 24px 60px rgba(0,0,0,0.5),0 0 40px rgba(237,131,55,0.06); border:1px solid rgba(237,131,55,0.18); text-align:center; }
  .wd-form-eyebrow { display:inline-flex; align-items:center; gap:8px; font-family:'Poppins',sans-serif; font-size:.6rem; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:var(--orange); margin-bottom:.8rem; }
  .wd-form-eyebrow-line { width:22px; height:1px; background:var(--orange); }
  .wd-form-title { font-family:'Poppins',sans-serif; font-size:1.7rem; font-weight:800; color:#fff; line-height:1.15; margin-bottom:2rem; }
  .wd-form-title span { color:var(--orange); }
  .wd-fl-row { display:grid; grid-template-columns:1fr 1fr; gap:.85rem; }
  .wd-fl-group { position:relative; margin-bottom:1rem; }
  .wd-fl-label { display:block; font-family:'Poppins',sans-serif; font-size:.65rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:var(--orange); margin-bottom:.4rem; text-align:start; }
  .wd-fl-input, .wd-fl-textarea { width:100%; padding:.82rem 1rem .82rem 2.6rem; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; font-family:'Poppins',sans-serif; font-size:.88rem; color:#fff; background:rgba(255,255,255,0.04); outline:none; appearance:none; transition:border-color .22s,background .22s,box-shadow .22s; }
  .wd-fl-input::placeholder,.wd-fl-textarea::placeholder { color:rgba(255,255,255,0.3); }
  .wd-fl-input:focus,.wd-fl-textarea:focus { border-color:var(--orange); background:rgba(237,131,55,0.06); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
  .wd-fl-icon { position:absolute; left:.85rem; top:50%; transform:translateY(-50%); font-size:.95rem; opacity:.5; pointer-events:none; }
  .wd-fl-group.wd-textarea-group .wd-fl-icon { top:.9rem; transform:none; }
  .wd-fl-textarea { min-height:88px; resize:none; padding-top:.82rem; padding-left:2.6rem; }
  .wd-phone-row { display:flex; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; overflow:hidden; background:rgba(255,255,255,0.04); transition:border-color .22s,box-shadow .22s; }
  .wd-phone-row:focus-within { border-color:var(--orange); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
  .wd-phone-flag { display:flex; align-items:center; gap:.3rem; padding:0 .85rem; font-size:.82rem; font-weight:700; color:#fff; border-right:1.5px solid rgba(237,131,55,0.2); white-space:nowrap; background:rgba(237,131,55,0.08); cursor:default; flex-shrink:0; }
  .wd-phone-row .wd-fl-input { border:none; border-radius:0; background:transparent; box-shadow:none; padding:.82rem 1rem; }
  .wd-phone-row .wd-fl-input:focus { box-shadow:none; }
  .wd-ap-submit { width:100%; background:linear-gradient(135deg,#ed8337,#f5a66b); color:#fff; border:none; padding:1rem 1.5rem; border-radius:12px; font-family:'Poppins',sans-serif; font-size:.97rem; font-weight:600; cursor:pointer; letter-spacing:.02em; display:flex; align-items:center; justify-content:center; gap:.6rem; transition:transform .2s,box-shadow .2s; }
  .wd-ap-submit:hover { transform:translateY(-2px); box-shadow:0 12px 36px rgba(237,131,55,0.5); }
  .wd-ap-submit-arrow { display:inline-flex; align-items:center; justify-content:center; width:24px; height:24px; border-radius:50%; background:rgba(2,43,68,0.25); font-size:.9rem; }
  h3.faq-h3 {font-size:2.5rem; color:#000;}
  /* ══ SERVICES ACCORDION ══ */
  .svc-section {
    position:relative; overflow:hidden;
    background:#004168;
    padding:7rem 6% 8rem;
  }
  .svc-section::before { content:''; position:absolute; inset:0; pointer-events:none; background-image:linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px); background-size:60px 60px; }
  .svc-section::after { content:''; position:absolute; inset:0; pointer-events:none; background:radial-gradient(ellipse 50% 60% at 90% 10%,rgba(237,131,55,0.09) 0%,transparent 60%),radial-gradient(ellipse 45% 55% at 5% 90%,rgba(96,165,250,0.07) 0%,transparent 55%); }
  .svc-layout { position:relative; z-index:2;  margin:0 auto; display:grid; grid-template-columns:1fr 1.1fr; gap:5rem; align-items:start; }
  .svc-right-col { position:sticky; top:110px; }
  .svc-eyebrow { display:inline-flex; align-items:center; gap:.55rem; font-family:'Space Mono',monospace; font-size:.7rem; font-weight:700; color:var(--orange); letter-spacing:.13em; text-transform:uppercase; margin-bottom:1.1rem; }
  .svc-eyebrow-line { width:24px; height:2px; background:var(--orange); border-radius:2px; }
  .svc-heading { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3vw,3rem); font-weight:600; line-height:1.1;  color:#fff; margin-bottom:1rem; }
  .svc-heading .accent { color:var(--orange); }
  .svc-sub { font-size:.97rem; color:#ffffffe3; line-height:1.78; margin-bottom:2.2rem; max-width:440px; }
  .svc-count-row { display:flex; gap:1rem; margin-bottom:2.4rem; flex-wrap:wrap; }
  .svc-count-pill { display:flex; flex-direction:column; align-items:center; background:rgba(255,255,255,0.05); border-radius:14px; padding:.8rem 1.4rem; border:1px solid rgba(255,255,255,0.1); backdrop-filter:blur(10px); }
  .svc-count-num { font-family:'Poppins',sans-serif; font-size:1.8rem; font-weight:800; color:var(--orange); line-height:1; }
  .svc-count-lbl { font-size:.72rem; color:rgba(255,255,255,0.4); margin-top:.2rem; font-weight:600; letter-spacing:.04em; }
  .svc-cta-btn { display:inline-flex; align-items:center; gap:.5rem; background:var(--orange); color:#fff; padding:.88rem 2rem; border-radius:50px; font-family:'Poppins',sans-serif; font-size:.92rem; font-weight:700; text-decoration:none; transition:all .22s; box-shadow:0 4px 20px rgba(237,131,55,.3); }
  .svc-cta-btn:hover { background:var(--orange-light); transform:translateY(-2px); box-shadow:0 8px 28px rgba(237,131,55,.45); }
  .svc-accordion { display:flex; flex-direction:column; gap:.75rem; }
  .acc-item { border-radius:18px; border:1px solid rgba(255,255,255,0.08); background:rgba(255,255,255,0.04); backdrop-filter:blur(12px); overflow:hidden; transition:border-color .3s,box-shadow .3s,background .3s; }
  .acc-item.open { border-color:rgba(237,131,55,0.35); background:linear-gradient(145deg, rgba(10, 54, 82, 0.55), rgb(76 186 235 / 23%)); box-shadow:0 8px 40px rgba(0,0,0,0.3),0 0 0 1px rgba(237,131,55,0.1); }
  .acc-header { display:flex; align-items:center; gap:1.2rem; padding:1.15rem 1.5rem; cursor:pointer; user-select:none; position:relative; }
  .acc-num { font-family:'Space Mono',monospace; font-size:.68rem; font-weight:700; color:rgba(255,255,255,0.25); letter-spacing:.1em; min-width:28px; transition:color .3s; }
  .acc-item.open .acc-num { color:var(--orange); }
  .acc-icon { width:42px; height:42px; border-radius:12px; flex-shrink:0; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; font-size:1.1rem; transition:background .3s,border-color .3s,transform .4s cubic-bezier(.34,1.3,.64,1); }
  .acc-item.open .acc-icon { background:rgba(237,131,55,0.18); border-color:rgba(237,131,55,0.3); transform:scale(1.08) rotate(-5deg); }
  .acc-title { font-family:'Poppins',sans-serif; font-size:.98rem; font-weight:700; color:rgba(255,255,255,0.75); flex:1; transition:color .3s; }
  .acc-item.open .acc-title { color: #ed8337; }
  .acc-item.open  { opacity:1; }
  .acc-arrow { width:28px; height:28px; border-radius:50%; flex-shrink:0; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; font-size:.75rem; color:rgba(255,255,255,0.4); transition:transform .4s cubic-bezier(.34,1.3,.64,1),background .3s,color .3s,border-color .3s; }
  .acc-item.open .acc-arrow { transform:rotate(180deg); background:rgba(237,131,55,0.2); border-color:rgba(237,131,55,0.3); color:var(--orange); }
  .acc-body { max-height:0; overflow:hidden; transition:max-height .48s cubic-bezier(.4,0,.2,1),padding .3s; padding:0 1.5rem; }
  .acc-item.open .acc-body { max-height:240px; padding-bottom:1.5rem; }
  .acc-divider { height:1px; background:linear-gradient(90deg,rgba(237,131,55,0.3),rgba(237,131,55,0)); margin-bottom:1.1rem; }
  .acc-desc { font-family:'Poppins',sans-serif; font-size:.91rem; line-height:2.1; color:rgb(255, 255, 255); padding-left:calc(28px + 42px + 1.2rem + 1.2rem); }

  /* ══ PROCESS — FIXED ══ */
  .proc-section { position:relative; padding:7rem 6% 8rem; background:#ffffff; overflow:hidden; }
  .proc-section::before { content:''; position:absolute; inset:0; pointer-events:none; background-image:radial-gradient(circle,rgba(2,43,68,0.07) 1px,transparent 1px); background-size:28px 28px; z-index:0; }
  .proc-section::after { content:''; position:absolute; inset:0; pointer-events:none; background:radial-gradient(ellipse 55% 45% at 15% 10%,rgba(237,131,55,0.06) 0%,transparent 65%),radial-gradient(ellipse 50% 50% at 85% 90%,rgba(2,43,68,0.05) 0%,transparent 60%); z-index:0; }
  .proc-inner { position:relative; z-index:2; max-width:1240px; margin:0 auto; }
  .proc-header { text-align:center; margin-bottom:4rem; }
  .proc-eyebrow { display:inline-flex; align-items:center; gap:.5rem; font-size:.74rem; font-weight:700; color:var(--orange); letter-spacing:.12em; text-transform:uppercase; margin-bottom:1rem; }
  .proc-eyebrow-line { width:26px; height:2px; background:var(--orange); border-radius:2px; }
  .proc-heading { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3vw,2.6rem); font-weight:600; line-height:1.1; color:#000; margin-bottom:1rem; }
  .proc-heading span { color:var(--orange); }
  .proc-sub { font-size:.97rem; color:#000; margin:0 auto; line-height:1.78; }

  /* ── Process 3-col layout ── */
  .proc-cols { display:grid; grid-template-columns:1fr 300px 1fr; gap:4rem; align-items:stretch; }
  .proc-mockup-wrap { align-self:center; }

  /* ── Process cards — FIXED sizes & alignment ── */
  .proc-points { display:flex; flex-direction:column; gap:1.2rem; justify-content:space-between; height:100%; }

  .proc-point {
    display:flex; align-items:flex-start; gap:.9rem;
    padding:1rem 1.1rem; border-radius:14px;
    border:1px solid rgba(2,43,68,0.08); background:#fff;
    box-shadow:0 2px 12px rgba(0,0,0,0.05);
    transition:transform .28s,box-shadow .28s,border-color .28s;
    cursor:default; width:100%;
  }
  .proc-point:hover { transform:translateY(-3px); box-shadow:0 8px 28px rgba(237,131,55,0.12); border-color:rgba(237,131,55,0.3); }

  /* left column — icon on right, text on left */
  .proc-points.left { width:100%; }
  .proc-points.left .proc-point { flex-direction:row-reverse; text-align:right; }
  .proc-points.left .proc-point-text { align-items:flex-end; }

  /* right column — icon on left, text on right */
  .proc-points.right .proc-point { flex-direction:row; text-align:left; }
  .proc-points.right .proc-point-text { align-items:flex-start; }

  .proc-icon {
    flex-shrink:0; width:38px; height:38px; min-width:38px;
    border-radius:10px; background:rgba(237,131,55,0.1);
    color:var(--orange); display:flex; align-items:center;
    justify-content:center; font-size:1rem; transition:background .28s;
  }
  .proc-point:hover .proc-icon { background:#ed833736; }

  .proc-point-text { display:flex; flex-direction:column; flex:1; min-width:0; }
  .proc-pt-num { font-family:'Space Mono',monospace; font-size:.6rem; font-weight:700; color:var(--orange); letter-spacing:.08em; text-transform:uppercase; margin-bottom:.2rem; }
  .proc-pt-title { font-family:'Poppins',sans-serif; font-size:1.1rem; font-weight:700; color:#0d1f2d; margin-bottom:.18rem; line-height:1.3; }
  .proc-pt-desc { font-size:.89rem; line-height:1.6; font-family:'Poppins'; color:#000000d9; }

  /* center mockup */
  .proc-mockup-wrap { display:flex; flex-direction:column; align-items:center; justify-content:center; position:relative; }
  .proc-mockup-wrap::before { content:''; position:absolute; width:240px; height:240px; border-radius:50%; background:radial-gradient(circle,rgba(237,131,55,0.12) 0%,transparent 70%); animation:proc-glow 3s ease-in-out infinite; z-index:0; }
  @keyframes proc-glow{0%,100%{transform:scale(1);opacity:.7;}50%{transform:scale(1.2);opacity:1;}}
  .proc-screen { position:relative; z-index:2; width:260px; background:#0d1f2d; border-radius:16px; border:2px solid rgba(237,131,55,0.3); box-shadow:0 24px 64px rgba(0,0,0,0.22),0 0 0 6px rgba(237,131,55,0.06); overflow:hidden; }
  .proc-browser-bar { background:#1a2d3e; padding:.5rem .85rem; display:flex; align-items:center; gap:.4rem; border-bottom:1px solid rgba(237,131,55,0.15); }
  .pb-dot { width:8px; height:8px; border-radius:50%; }
  .pb-d1{background:#ff5f57;} .pb-d2{background:#ffbd2e;} .pb-d3{background:#28c840;}
  .proc-url-bar { flex:1; margin-left:.5rem; background:rgba(255,255,255,0.06); border-radius:5px; padding:.22rem .7rem; font-family:'Space Mono',monospace; font-size:.56rem; color:rgba(255,255,255,0.4); }
  .proc-site-body { padding:.7rem; }
  .ps-hero { background:linear-gradient(135deg,#022b44,#0a3652); border-radius:8px; padding:.7rem .85rem; margin-bottom:.6rem; position:relative; overflow:hidden; }
  .ps-hero::after { content:''; position:absolute; right:-20px; top:-20px; width:80px; height:80px; border-radius:50%; background:rgba(237,131,55,0.2); animation:proc-glow 2.5s ease-in-out infinite; }
  .ps-hero-tag { font-family:'Space Mono',monospace; font-size:.48rem; color:var(--orange); letter-spacing:.1em; text-transform:uppercase; margin-bottom:.3rem; }
  .ps-hero-h { font-family:'Poppins',sans-serif; font-size:.65rem; font-weight:800; color:#fff; line-height:1.3; margin-bottom:.4rem; }
  .ps-hero-btn { display:inline-block; background:var(--orange); color:#022b44; font-family:'Poppins',sans-serif; font-size:.48rem; font-weight:700; padding:.22rem .55rem; border-radius:10px; }
  .ps-nav { display:flex; align-items:center; gap:.35rem; margin-bottom:.6rem; padding:.3rem .4rem; background:#f7f9fc; border-radius:6px; }
  .ps-nav-logo { width:18px; height:18px; border-radius:4px; background:var(--orange); font-family:'Poppins',sans-serif; font-size:.45rem; font-weight:800; color:#022b44; display:flex; align-items:center; justify-content:center; }
  .ps-nav-links { display:flex; gap:.3rem; margin-left:.3rem; }
  .ps-nav-link { width:22px; height:4px; border-radius:2px; background:rgba(2,43,68,0.15); }
  .ps-nav-link.active { background:var(--orange); }
  .ps-nav-btn-sm { margin-left:auto; background:var(--orange); border-radius:4px; padding:.15rem .35rem; font-family:'Space Mono',monospace; font-size:.45rem; color:#022b44; font-weight:700; }
  .ps-cards { display:grid; grid-template-columns:1fr 1fr 1fr; gap:.45rem; margin-bottom:.6rem; }
  .ps-card { background:#fff; border-radius:7px; padding:.5rem .5rem; border:1px solid rgba(2,43,68,0.08); }
  .ps-card-icon { width:20px; height:20px; border-radius:5px; background:rgba(237,131,55,0.12); display:flex; align-items:center; justify-content:center; font-size:.6rem; margin-bottom:.3rem; }
  .ps-card-line { height:3px; border-radius:2px; margin-bottom:.2rem; }
  .ps-card-line.w100{width:100%;background:rgba(2,43,68,0.12);} .ps-card-line.w70{width:70%;background:rgba(2,43,68,0.08);}
  .proc-badge { position:absolute; background:#fff; border-radius:8px; padding:.38rem .85rem; font-size:.62rem; font-family:'Space Mono',monospace; font-weight:700; color:var(--orange); border:1px solid rgba(237,131,55,0.2); box-shadow:0 4px 18px rgba(0,0,0,0.1); white-space:nowrap; z-index:10; }
  .pb-tl{top:-18px;left:-30px;animation:float1 3s ease-in-out infinite;}
  .pb-tr{top:-18px;right:-30px;animation:float2 3.4s .5s ease-in-out infinite;}
  .pb-bl{bottom:10px;left:-40px;animation:float1 2.8s 1s ease-in-out infinite;}
  .pb-br{bottom:10px;right:-40px;animation:float2 3.1s .3s ease-in-out infinite;}
    .proc-points.left .proc-point{flex-direction:row;text-align:left;}
    .proc-points.left .proc-point-text{align-items:flex-start;}
    .proc-mockup-wrap{margin:2rem 0;}
  }

  /* ══ KEY FEATURES CAROUSEL — FIXED CENTER ALIGN ══ */
  .kf-section { position:relative; padding:4rem 0 6rem; overflow:hidden; background:#004168; }
  .kf-section::before { content:''; position:absolute; inset:0; pointer-events:none; background-image:linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px); background-size:55px 55px; }
  .kf-orbs { position:absolute; inset:0; pointer-events:none; z-index:0; }
  .kf-orb { position:absolute; border-radius:50%; filter:blur(80px); animation:kf-orb-drift 8s ease-in-out infinite alternate; }
  .kf-orb-1 { width:420px; height:420px; top:-80px; left:-60px; background:radial-gradient(circle,rgba(237,131,55,0.18) 0%,transparent 70%); }
  .kf-orb-2 { width:360px; height:360px; bottom:-60px; right:-40px; background:radial-gradient(circle,rgba(96,165,250,0.14) 0%,transparent 70%); animation-delay:-3s; }
  .kf-orb-3 { width:280px; height:280px; top:40%; left:40%; background:radial-gradient(circle,rgba(167,139,250,0.1) 0%,transparent 70%); animation-delay:-5s; }
  @keyframes kf-orb-drift{from{transform:translate(0,0) scale(1);}to{transform:translate(30px,20px) scale(1.1);}}

  .kf-inner { position:relative; z-index:2; width:100%; overflow:hidden;     background: #004168;
    padding: 4rem; }

  /* header centered */
  .kf-header { text-align:center; margin-bottom:1.8rem; padding:0 6%; }
  .kf-eyebrow { display:inline-flex; align-items:center; gap:.5rem; font-family:'Space Mono',monospace; font-size:.72rem; font-weight:700; color:var(--orange); letter-spacing:.13em; text-transform:uppercase; margin-bottom:1rem; }
  .kf-eyebrow-line { width:24px; height:2px; background:var(--orange); border-radius:2px; }
  .kf-title { font-family:'Poppins',sans-serif; font-size:clamp(2.2rem,3.4vw,3.4rem); font-weight:600; line-height:1.1; color:#fff; margin-bottom:1rem; }
  .kf-title span { color:var(--orange); }
  .kf-sub { font-size:.89rem; line-height:1.76; color:#fff; font-family:'Poppins'; }

  /* carousel: full width, cards centered via transform */
  .kf-carousel-wrap {
    position:relative;
    width:100%;
    height:400px;
    overflow:visible;
  }

  .kf-card {
    position:absolute;
    left:50%;
    top:50%;
    transform:translateX(-50%) translateY(-50%);
    width:340px;
    border-radius:26px;
    padding:2.2rem 1.8rem 1.8rem;
    display:flex; flex-direction:column; gap:1.1rem;
    background: linear-gradient(145deg, rgba(10, 54, 82, 0.55), rgb(76 186 235 / 23%));
    backdrop-filter:blur(22px) saturate(180%);
    border:1px solid rgba(255,255,255,0.14);
    box-shadow:0 8px 40px rgba(0,0,0,0.45),inset 0 1px 0 rgba(255,255,255,0.16);
    cursor:grab; user-select:none;
    transition:transform 0.55s cubic-bezier(.34,1.3,.64,1),opacity 0.45s ease,box-shadow 0.4s ease,border-color 0.3s ease,filter 0.45s ease;
    overflow:hidden; transform-origin:center center;
    filter: blur(2px) brightness(0.7);
  }
  .kf-card.is-active { filter: blur(0px) brightness(1); }
  .kf-card:active { cursor:grabbing; }
  .kf-card::before { content:''; position:absolute; top:0; left:10%; right:10%; height:1px; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.38),transparent); }
  .kf-card::after { content:''; position:absolute; width:200px; height:200px; border-radius:50%; background:radial-gradient(circle,rgba(237,131,55,0.15) 0%,transparent 70%); top:-80px; right:-60px; pointer-events:none; }
  .kf-icon-wrap { flex-shrink:0; width:56px; height:56px; border-radius:16px; background:linear-gradient(135deg,rgba(237,131,55,0.22) 0%,rgba(237,131,55,0.06) 100%); border:1px solid rgba(237,131,55,0.3); display:flex; align-items:center; justify-content:center; font-size:1.6rem; box-shadow:0 4px 18px rgba(237,131,55,0.18),inset 0 1px 0 rgba(255,255,255,0.15); transition:transform .4s cubic-bezier(.34,1.3,.64,1); }
  .kf-card.is-active .kf-icon-wrap { transform:scale(1.08) rotate(-5deg); }
  .kf-card-body { position:relative; z-index:1; flex:1; }
  .kf-card-title { font-family:'Poppins',sans-serif; font-size:1.05rem; font-weight:700; color: #ed8337; margin-bottom:.45rem; line-height:1.3; }
  .kf-card-desc { font-size:.89rem; line-height:1.76; color:#fff; font-family:'Poppins'; }
  .kf-card-accent { height:2px; border-radius:2px; margin-top:1rem; background:linear-gradient(90deg,var(--orange),rgba(237,131,55,0)); transition:width .6s ease .1s; }

  /* nav & dots — centered */
  .kf-nav { display:flex; justify-content:center; align-items:center; gap:1.2rem; margin-top:2.4rem; padding:0 6%; }
  .kf-nav-btn { width:44px; height:44px; border-radius:50%; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.14); backdrop-filter:blur(10px); color:#fff; font-size:1.1rem; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .25s; }
  .kf-nav-btn:hover { background:var(--orange); border-color:var(--orange); transform:scale(1.1); }
  .kf-dots { display:flex; gap:.5rem; align-items:center; }
  .kf-dot { width:8px; height:8px; border-radius:50%; background:rgba(255,255,255,0.2); border:none; padding:0; cursor:pointer; transition:all .3s; }
  .kf-dot.active { background:var(--orange); width:22px; border-radius:4px; }
  .kf-drag-hint { text-align:center; margin-top:.8rem; font-size:.72rem; color:rgba(255,255,255,0.25); font-family:'Space Mono',monospace; letter-spacing:.06em; padding:0 6%; }

  /* ══ WHY CHOOSE US SECTION ══ */
  .wcu-section {
    padding: 4rem 6%; background: #fff; position: relative; overflow: hidden;
  }
  .wcu-section::before {
    content:''; position:absolute; top:-120px; right:-120px; width:420px; height:420px;
    border-radius:50%; background:radial-gradient(circle, rgba(237,131,55,0.07) 0%, transparent 70%);
    pointer-events:none;
  }
  .wcu-inner {
    margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center;
  }
  /* LEFT IMAGE SIDE */
  .wcu-img-col { position: relative; }
  .wcu-img-frame {
    position: relative; border-radius: 24px; overflow: hidden;
  }
  .wcu-img-frame img {
    width: 100%; object-fit: cover; display: block;
  }
  /* RIGHT TEXT SIDE */
  .wcu-text-col { padding-bottom: 1.5rem; }
  .wcu-eyebrow {
    display: inline-flex; align-items: center; gap: .55rem;
    font-family:'Space Mono',monospace; font-size:.7rem; font-weight:700;
    color: var(--orange); letter-spacing:.13em; text-transform:uppercase;
    margin-bottom: 1rem;
  }
  .wcu-eyebrow-line { width:24px; height:2px; background:var(--orange); border-radius:2px; }
  .wcu-heading {
    font-family:'Poppins',sans-serif; font-size:clamp(1.8rem,2.8vw,2.2rem);
    font-weight:600; line-height:1.12; color:#000; margin-bottom:1rem;
  }
  .wcu-heading span { color: var(--orange); }
  .wcu-desc {
    font-size:1rem; line-height:1.82; color:#4a5568; margin-bottom:1rem;
  }
    
  }

  /* ══ PORTFOLIO SECTION ══ */
  .pf-section {
    padding: 6rem 6%;
    background: #004168;
    position: relative; overflow: hidden;
  }
  .pf-section::before {
    content:''; position:absolute; inset:0; pointer-events:none;
    background-image:linear-gradient(rgba(237,131,55,0.03) 1px,transparent 1px),
                     linear-gradient(90deg,rgba(237,131,55,0.03) 1px,transparent 1px);
    background-size:55px 55px;
  }
  .pf-section::after {
    content:''; position:absolute; top:-200px; right:-200px; width:600px; height:600px;
    border-radius:50%; pointer-events:none;
    background:radial-gradient(circle, rgba(237,131,55,0.07) 0%, transparent 65%);
  }
  .pf-inner {
   margin:0 auto; position:relative; z-index:2;
    display:grid; grid-template-columns:minmax(280px, 450px) 1fr; gap:4rem; align-items:start;
        background: #004168;
    padding: 5rem 4rem;
  }

  /* LEFT TEXT */
  .pf-left { position:sticky; top:6rem; }
  .pf-eyebrow {
    display:inline-flex; align-items:center; gap:.55rem;
    font-family:'Space Mono',monospace; font-size:.68rem; font-weight:700;
    color:var(--orange); letter-spacing:.14em; text-transform:uppercase; margin-bottom:1.2rem;
  }
  .pf-eyebrow-line { width:22px; height:2px; background:var(--orange); border-radius:2px; }
  .pf-heading {
    font-family:'Poppins',sans-serif; font-size:clamp(2rem,3vw,2.8rem);
    font-weight:600; line-height:1.1; color:#fff; margin-bottom:1.2rem;
  }
  .pf-heading span { color:var(--orange); }
  .pf-desc { font-size:.97rem; line-height:1.82; color:rgba(255, 255, 255, 0.92); margin-bottom:2.2rem; }
  .pf-btn {
    display:inline-flex; align-items:center; gap:.55rem;
    background:var(--orange); color:#fff; padding:.88rem 2rem; border-radius:50px;
    font-family:'Poppins',sans-serif; font-size:.9rem; font-weight:700;
    text-decoration:none; border:none; cursor:pointer;
    box-shadow:0 4px 24px rgba(237,131,55,.35); transition:all .22s;
  }
  .pf-btn:hover { background:var(--orange-light); transform:translateY(-2px); box-shadow:0 8px 32px rgba(237,131,55,.45); }
  .pf-btns { display:flex; flex-direction:column; align-items:flex-start; gap:.5rem; }
  /* RIGHT COLUMNS */
  .pf-cols {
    display:grid; grid-template-columns:repeat(3, 1fr); gap:1.1rem; align-items:start;
  }
  .pf-col { display:flex; flex-direction:column; gap:1.1rem; overflow:hidden; }
  /* scroll animation */
  .pf-col-inner {
    display:flex; flex-direction:column; gap:1.1rem;
    transition: transform 0.1s linear;
  }
  /* individual card */
  .pf-card {
    border-radius:16px; overflow:hidden; position:relative; cursor:pointer;
    border:1.5px solid rgba(255,255,255,0.07);
    box-shadow:0 4px 20px rgba(0,0,0,0.35);
    transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
    flex-shrink:0;
  }
  .pf-card:hover { transform:scale(1.03); box-shadow:0 12px 40px rgba(0,0,0,.55); border-color:rgba(237,131,55,0.5); }
  .pf-card img {
    width:100%; height:200px; object-fit:cover; display:block;
    transition:transform .4s ease;
  }
  .pf-card:hover img { transform:scale(1.06); }
  .pf-card-overlay {
    position:absolute; inset:0;
    background:linear-gradient(180deg, transparent 40%, rgba(2,27,43,0.92) 100%);
    opacity:0; transition:opacity .3s ease;
    display:flex; flex-direction:column; justify-content:flex-end; padding:1rem 1.1rem;
  }
  .pf-card:hover .pf-card-overlay { opacity:1; }
  .pf-card-label {
    font-family:'Poppins',sans-serif; font-size:.78rem; font-weight:700; color:#fff;
    margin-bottom:.2rem;
  }
  .pf-card-tag {
    font-family:'Space Mono',monospace; font-size:.6rem; color:var(--orange);
    letter-spacing:.08em; text-transform:uppercase;
  }
    .pf-left { position:static; }
  } }
  /* ══════════════════════════════════════════════
     FULLY RESPONSIVE — Mobile / Tablet / Desktop
     Mobile  : ≤ 540px
     Tablet  : 541px – 900px
     Desktop : > 900px  (defaults above)
  ══════════════════════════════════════════════ */

  /* ── HERO BANNER ── */
  
    .wd-hero-content  { order: 1; align-items: flex-start; }
    .wd-hero-img { width:100%; }
    .wd-hero-actions { justify-content: flex-start; }
    .badge { margin: 0 0 1.2rem; }
    .wd-hero-heading { text-align: start; }
  }
  @keyframes wd-line-in-c { to { transform: translateX(-50%) scaleX(1); } }
  @media (max-width: 540px) {
    .wd-hero { padding: 5.5rem 4% 3rem; gap: 1.2rem; }
    .wd-hero-heading { font-size: clamp(1.7rem, 7vw, 2.2rem); }
    .wd-hero-sub { font-size: 0.93rem; }
    .wd-btn-fill { padding: 0.75rem 1.5rem; font-size: 0.85rem; width: 100%; justify-content: center; }
  }

  /* ── OUR APPROACH (content + form) ── */
  @media (max-width: 900px) {
    .wd-approach { padding: 3.5rem 5%; }
    .wd-ap-inner {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    .wd-ap-form-wrap { max-width: 100%; }
    .wd-ap-heading { font-size: clamp(1.5rem, 4vw, 2rem); }
  }
  @media (max-width: 540px) {
    .wd-approach { padding: 3rem 4%; }
    .wd-ap-form-card { padding: 2rem 1.4rem; }
    .wd-fl-row { grid-template-columns: 1fr; }
    .wd-form-title { font-size: 1.4rem; }
  }

  /* ── WHAT WE OFFER — ORBIT ── */
  @media (max-width: 900px) {
    .pcs-offer-section { padding: 4rem 5% 5rem; }
    .pcs-offer-body { grid-template-columns: 1fr; gap: 2.5rem; }
    .pcs-offer-left { justify-content: center; }
    .pcs-orbit-wrap { width: 320px; height: 320px; }
    .pcs-orbit-center { width: 90px; height: 90px; }
    .pcs-orbit-center-name { font-size: 1.1rem; }
    .pcs-orbit-node-box { width: 78px; height: 78px; gap: 6px; }
    .pcs-orbit-node-emoji { font-size: 1.2rem; }
    .pcs-orbit-node-lbl { font-size: .6rem; }
    .pcs-offer-heading { margin-bottom: 3rem; }
  }
  @media (max-width: 540px) {
    .pcs-offer-section { padding: 3rem 4% 4rem; }
    .pcs-orbit-wrap { width: 260px; height: 260px; }
    .pcs-orbit-center { width: 76px; height: 76px; }
    .pcs-orbit-center-name { font-size: 0.95rem; }
    .pcs-orbit-node-box { width: 62px; height: 62px; padding: 4px; }
    .pcs-orbit-node-emoji { font-size: 1rem; }
    .pcs-orbit-node-lbl { font-size: .52rem; }
  }

  /* ── WHAT'S INCLUDED — ACCORDION ── */
  @media (max-width: 900px) {
    .pcs-wi5-section { padding: 4rem 5% 5rem; }
    .pcs-wi5-tab-content { grid-template-columns: 1fr; padding-left: 2rem; gap: 1rem; }
    .pcs-wi5-tab-head { gap: 1rem; padding: 1.2rem 1.4rem; }
  }
  @media (max-width: 540px) {
    .pcs-wi5-section { padding: 3rem 4% 4rem; }
    .pcs-wi5-tab-num { width: 42px; height: 42px; }
    .pcs-wi5-tab-icon { width: 34px; height: 34px; font-size: 1rem; }
    .pcs-wi5-tab-title { font-size: 0.88rem; }
    .pcs-wi5-tab-content { padding-left: 1rem; }
    .pcs-wi5-tab-head { padding: 1rem; gap: 0.7rem; }
  }

  /* ── OUR PROCESS ── */
  @media (max-width: 900px) {
    .pcs-proc-section { padding: 4rem 5%; }
    .pcs-proc-track { padding-left: 0.5rem; }
  }
  @media (max-width: 540px) {
    .pcs-proc-section { padding: 3rem 4%; }
    .pcs-proc-card { flex-direction: column; gap: 0.8rem; padding: 1.2rem; }
    .pcs-proc-card-icon { width: 42px; height: 42px; font-size: 1.3rem; }
    .pcs-proc-step { gap: 1rem; }
    .pcs-proc-num-wrap { width: 44px; height: 44px; }
    .pcs-proc-card-title { font-size: 0.95rem; }
    .pcs-proc-card-desc { font-size: 0.85rem; }
  }

  /* ── FEATURES / WHY — 4 BOX GRID ── */
  @media (max-width: 900px) {
    .pcs-fb-section { padding: 4rem 5%; }
    .pcs-fb-grid {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto auto;
    }
    .pcs-fb-grid > div:nth-child(2) {
      grid-column: 1 / -1;
      grid-row: auto;
      order: -1;
      margin-bottom: 1rem;
    }
    .pcs-fb-vline, .pcs-fb-hline { display: none; }
    .pcs-fb-box { border-radius: 14px !important; border: 1.5px solid rgba(0,65,104,0.13) !important; margin: 0.4rem; }
  }
  @media (max-width: 540px) {
    .pcs-fb-section { padding: 3rem 4%; }
    .pcs-fb-grid {
      grid-template-columns: 1fr;
    }
    .pcs-fb-grid > div:nth-child(2) {
      grid-column: 1;
    }
    .pcs-fb-title { font-size: clamp(1.4rem, 5vw, 1.9rem); }
    .pcs-fb-box { padding: 1.6rem 1.4rem; margin: 0.3rem 0; }
  }

  /* ── FAQ SECTION ── */
  .faq-section { background: #fff; padding: 5rem 6%; }
  0
  .faq-head { text-align: center; margin-bottom: 2.5rem; }
  .faq-head h2 { font-family:'Poppins',sans-serif; font-size: clamp(1.8rem,3vw,2.5rem); font-weight: 700; color: #011a2a; line-height: 1.15; }
  .faq-head h2 span { color: var(--orange); font-style: italic; }
  .faq-wrapper { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
  .faq-col { display: flex; flex-direction: column; gap: 1rem; }
  .faq-item { border-radius: 14px; overflow: hidden; transition: border-color .22s; }
  .faq-item:hover { border-color: rgba(237,131,55,0.4); }
  .faq-question { display: flex; justify-content: space-between; align-items: center; padding: 1.1rem 1.4rem; cursor: pointer; font-family:'Poppins',sans-serif; font-size: .92rem; font-weight: 600; color: #011a2a; gap: 1rem; user-select: none; }
  .faq-question .icon { font-size: 1.3rem; color: var(--orange); flex-shrink: 0; }
  .faq-answer { padding: .2rem 1.4rem 1.1rem; font-size: .88rem; color: #5a6070; line-height: 1.78; border-top: 1px solid rgba(0,0,0,0.05); }

  @media (max-width: 900px) {
    .faq-wrapper { grid-template-columns: 1fr !important; gap: 0.8rem !important; }
    .faq-section { padding: 4rem 5% 3rem !important; }
    .faq-head { margin-bottom: 2rem; }
  }
  @media (max-width: 540px) {
    .faq-section { padding: 3rem 4% 2.5rem !important; }
    .faq-head h2 { font-size: clamp(1.4rem, 5vw, 1.9rem); }
    .faq-question { font-size: 0.86rem; padding: 1rem 1.1rem; gap: 0.7rem; }
    .faq-answer { font-size: 0.84rem; padding: 0.5rem 1.1rem 1rem; }
    .faq-col { gap: 0.7rem; }
    .faq-item { border-radius: 10px; }
  }
  @media (max-width: 400px) {
    .faq-section { padding: 2.5rem 4% 2rem !important; }
    .faq-question { font-size: 0.82rem; padding: 0.9rem 1rem; }
  }

  /* ── SECTION APPROACH / INNER TEXT ── */
  @media (max-width: 900px) {
    section#approach { padding-top: 3rem; }
  }

  /* ── GENERAL UTILITY ── */
  @media (max-width: 540px) {
    .partners-header1, .partners-header2 { padding: 0 1rem; }
    .partners-eyebrow { font-size: 0.68rem; }
    .pcs-proc-header h2, .pcs-proc-title { font-size: clamp(1.4rem, 5vw, 2rem); }
    .pcs-wi5-heading, .pcs-offer-heading, .wd-ap-heading { font-size: clamp(1.4rem, 5vw, 1.9rem) !important; }
  }

  /* ── SERVICES ACCORDION ── */
  @media (max-width: 900px) {
    .svc-section { padding: 4rem 5% 5rem; }
    .svc-layout { grid-template-columns: 1fr; gap: 2.5rem; }
    .svc-right-col { position: static; top: auto; }
    .svc-heading { font-size: clamp(1.6rem, 5vw, 2.2rem); }
    .svc-sub { max-width: 100%; }
    .svc-count-row { gap: 0.75rem; flex-wrap: wrap; }
    .acc-desc { padding-left: 0; }
    .acc-item.open .acc-body { max-height: 400px; }
  }
  @media (max-width: 540px) {
    .svc-section { padding: 3rem 4% 4rem; }
    .svc-heading { font-size: clamp(1.4rem, 6vw, 1.9rem); }
    .svc-count-row { gap: 0.5rem; }
    .svc-count-pill { padding: 0.6rem 1rem; }
    .svc-count-num { font-size: 1.4rem; }
    .svc-count-lbl { font-size: 0.65rem; }
    .acc-header { padding: 1rem; gap: 0.8rem; }
    .acc-num { min-width: 20px; font-size: 0.6rem; }
    .acc-icon { width: 34px; height: 34px; font-size: 0.95rem; }
    .acc-title { font-size: 0.86rem; }
    .acc-arrow { width: 24px; height: 24px; }
    .acc-desc { font-size: 0.85rem; line-height: 1.75; }
    .acc-item.open .acc-body { max-height: 500px; padding-bottom: 1.2rem; }
    .svc-cta-btn { width: 100%; justify-content: center; }
  }

  /* ── WHY CHOOSE US ── */
  @media (max-width: 900px) {
    .wcu-section { padding: 4rem 5%; }
    .wcu-inner { grid-template-columns: 1fr; gap: 2.5rem; }
    .wcu-img-col { max-width: 520px; margin: 0 auto; width: 100%; }
  }
  @media (max-width: 540px) {
    .wcu-section { padding: 3rem 4%; }
    .wcu-heading { font-size: clamp(1.4rem, 5vw, 1.9rem); }
  }

  /* ── KEY FEATURES CAROUSEL ── */
  @media (max-width: 900px) {
    .kf-section { padding: 3rem 0 4rem; }
    .kf-inner { padding: 2rem; }
    .kf-carousel-wrap { height: 360px; }
    .kf-card { width: 290px; }
    .kf-title { font-size: clamp(1.6rem, 5vw, 2.4rem); }
  }
  @media (max-width: 540px) {
    .kf-inner { padding: 1.5rem 1rem; }
    .kf-carousel-wrap { height: 320px; }
    .kf-card { width: 260px; padding: 1.6rem 1.4rem 1.4rem; }
    .kf-title { font-size: clamp(1.4rem, 5vw, 1.9rem); }
    .kf-card-title { font-size: 0.95rem; }
    .kf-card-desc { font-size: 0.82rem; }
  }

  /* ── PORTFOLIO SECTION ── */
  @media (max-width: 1100px) {
    .pf-inner { grid-template-columns: 1fr; gap: 2.5rem; padding: 3rem 2rem; }
    .pf-left { position: static; top: auto; }
    .pf-cols { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 900px) {
    .pf-section { padding: 4rem 5%; }
    .pf-inner { padding: 2rem 1.5rem; }
    .pf-heading { font-size: clamp(1.6rem, 5vw, 2.2rem); }
  }
  @media (max-width: 540px) {
    .pf-section { padding: 3rem 4%; }
    .pf-inner { padding: 1.5rem 1rem; }
    .pf-cols { grid-template-columns: 1fr 1fr; gap: 0.75rem; }
    .pf-heading { font-size: clamp(1.4rem, 5vw, 1.9rem); }
    .pf-desc { font-size: 0.88rem; }
    .pf-col { height: 400px !important; }
  }

  /* ── PROCESS SECTION ── */
  @media (max-width: 1000px) {
    .proc-cols { grid-template-columns: 1fr; gap: 2rem; }
    .proc-mockup-wrap { order: -1; margin: 1rem auto; }
    .proc-points.left .proc-point { flex-direction: row; text-align: left; }
    .proc-points.left .proc-point-text { align-items: flex-start; }
    .proc-screen { width: 220px; }
    .pb-tl, .pb-tr, .pb-bl, .pb-br { display: none; }
  }
  @media (max-width: 900px) {
    .proc-section { padding: 4rem 5%; margin: 0 !important; }
    .proc-heading { font-size: clamp(1.6rem, 5vw, 2.2rem); }
  }
  @media (max-width: 540px) {
    .proc-section { padding: 3rem 4%; }
    .proc-heading { font-size: clamp(1.4rem, 5vw, 1.9rem); }
    .proc-point { padding: 0.8rem; gap: 0.7rem; }
    .proc-icon { width: 32px; height: 32px; min-width: 32px; font-size: 0.85rem; }
    .proc-pt-title { font-size: 0.95rem; }
    .proc-pt-desc { font-size: 0.82rem; }
    .proc-screen { width: 180px; }
  }

`;

/* ══════ DATA ══════ */
const SERVICES = [
  { num:"01", icon:<img src="/img/icon/svc-website-design.webp" alt="Website Design" width="30" height="30" />, title:"Website Design", tag:"Design", tagColor:"#ed8337", fill:92, desc:"Create visually compelling, user-focused website designs that enhance brand identity and engagement. We combine modern aesthetics, intuitive navigation, and strategic layouts to deliver impactful digital experiences that build credibility and customer trust." },
  { num:"02", icon:<img src="/img/icon/svc-static-website.webp" alt="Static Website Development" width="30" height="30" />, title:"Static Website Development", tag:"Fast", tagColor:"#ed8337", fill:88, desc:"Develop fast, secure static websites designed for performance and simplicity. Ideal for startups and growing businesses, our solutions ensure reliability, easy maintenance, and professional online presence across all devices." },
  { num:"03", icon:<img src="/img/icon/svc-custom-website.webp" alt="Custom Website Development" width="30" height="30" />, title:"Custom Website Development", tag:"Custom", tagColor:"#ed8337", fill:95, desc:"Build fully customized websites tailored to your business requirements and workflows. Our development approach ensures scalability, seamless integrations, flexibility, and complete control, delivering solutions aligned with long-term growth objectives." },
  { num:"04", icon:<img src="/img/icon/svc-woocommerce.webp" alt="WooCommerce Development" width="30" height="30" />, title:"WooCommerce Development", tag:"eCommerce", tagColor:"#ed8337", fill:90, desc:"Develop scalable WooCommerce stores with secure payments and flexible customization. We focus on optimized performance, structured product management, and conversion-driven design to support consistent ecommerce growth." },
  { num:"05", icon:<img src="/img/icon/svc-ecommerce.webp" alt="Custom E-Commerce Development" width="30" height="30" />, title:"Custom E-Commerce Development", tag:"Scale", tagColor:"#ed8337", fill:87, desc:"Create conversion-focused ecommerce websites optimized for speed, security, and usability. Our scalable platforms feature structured architecture, seamless checkout systems, and performance enhancements to maximize engagement and sales." },
  { num:"06", icon:<img src="/img/icon/svc-shopify.webp" alt="Shopify Website Development" width="30" height="30" />, title:"Shopify Website Development", tag:"Shopify", tagColor:"#ed8337", fill:93, desc:"Design high-performing Shopify stores built for growth and automation. From store setup to customization and SEO optimization, we deliver secure, mobile-responsive solutions that enhance user experience and scalability." },
];

const FEATURES = [
  { icon:<img src="/img/icon/feat-structure.webp" alt="Strategic Website Structure" width="28" height="28" />, title:"Strategic Website Structure", desc:"Well-planned layouts and intuitive navigation systems crafted to enhance usability, improve engagement, and guide visitors smoothly toward meaningful actions." },
  { icon:<img src="/img/icon/feat-responsive.webp" alt="Responsive and Adaptive Design" width="28" height="28" />, title:"Responsive & Adaptive Design", desc:"Device-optimized, mobile-first designs ensuring seamless performance and consistent user experience across desktops, tablets, and smartphones." },
  { icon:<img src="/img/icon/feat-seo.webp" alt="Search Ready Development" width="28" height="28" />, title:"Search-Ready Development", desc:"SEO-focused coding practices, structured metadata, schema setup, and optimized architecture to strengthen search engine visibility." },
  { icon:<img src="/img/icon/feat-performance.webp" alt="Speed and Performance Enhancement" width="28" height="28" />, title:"Speed & Performance Enhancement", desc:"Optimized frameworks, efficient database structuring, and performance tuning techniques to deliver fast-loading and stable websites." },
  { icon:<img src="/img/icon/feat-integrations.webp" alt="Seamless System Integrations" width="28" height="28" />, title:"Seamless System Integrations", desc:"Integration with payment gateways, WhatsApp, shipping systems, analytics tools, and marketing solutions for streamlined operations." },
  { icon:<img src="/img/icon/feat-scalability.webp" alt="Future Ready Scalability" width="28" height="28" />, title:"Future-Ready Scalability", desc:"Flexible development frameworks designed to accommodate business expansion, advanced features, increasing traffic, and evolving digital needs." },
];

const PROCESS_LEFT = [
  { num:"Step 01", icon:<img src="/img/icon/website-discover.webp" alt="Discover" width="24" height="24" />, title:"Discover", desc:"We understand your brand, goals, audience, competitors, and preferences to build a strategic foundation aligned with business objectives." },
  { num:"Step 02", icon:<img src="/img/icon/proc-plan-structure.webp" alt="Plan and Structure" width="24" height="24" />, title:"Plan & Structure", desc:"We create sitemaps, define functionalities, finalize technology stack, and establish timelines ensuring clarity before development begins." },
  { num:"Step 03", icon:<img src="/img/icon/proc-design-prototype.webp" alt="Design and Prototype" width="24" height="24" />, title:"Design & Prototype", desc:"Our designers craft intuitive interfaces and interactive prototypes, allowing you to review visual direction before development." },
];

const PROCESS_RIGHT = [
  { num:"Step 04", icon:<img src="/img/icon/proc-develop-integrate.webp" alt="Develop and Integrate" width="24" height="24" />, title:"Develop & Integrate", desc:"We convert designs into responsive code, integrating CMS, analytics, databases, and essential third-party tools." },
  { num:"Step 05", icon:<img src="/img/icon/proc-test-optimize.webp" alt="Test and Optimize" width="24" height="24" />, title:"Test & Optimize", desc:"We conduct thorough testing across devices, browsers, speed performance, and functionality to ensure reliability." },
  { num:"Step 06", icon:<img src="/img/icon/proc-launch-support.webp" alt="Launch and Support" width="24" height="24" />, title:"Launch & Support", desc:"After final approval, we launch confidently and provide ongoing support, updates, and performance monitoring." },
];

/* ══════ SECTION 1A: HERO BANNER ══════ */
function HeroBanner() {
  return (
    <section className="wd-hero">
      <div className="wd-hero-bg-radial" />
      <div className="wd-hero-bg-grid" />

      {/* LEFT */}
      <div className="wd-hero-content" style={{position:"relative",zIndex:2,display:"flex",flexDirection:"column"}}>
        <div className="badge"><div className="badge-dot" />Website Development</div>
        <h1 className="wd-hero-heading">
          Performance Driven
          <span className="orange lined">Website Development </span>from Concept to Code 
        </h1>
        <p className="wd-hero-sub">
At PCS, we deliver strategic website development services that combine design, performance, and scalability to help businesses grow online. As a trusted website development agency in Coimbatore , we ensure high-value solutions optimized for cost efficiency.
        </p>
        <div className="wd-hero-actions">
          <a className="wd-btn-fill" href="#">Get a Free Quote <span className="wd-btn-arrow">›</span></a>
        </div>
      </div>

      {/* RIGHT — hero image */}
      <div className="wd-hero-img-wrap" style={{position:"relative",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center",animation:"fadeUp .9s .15s ease both"}}>
        <img
          src={banner}
          alt="Website Development Services"
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
      <style>{`
        .approach { position:relative; padding:4rem 6%; overflow:hidden;background: white }
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
        @media (max-width: 900px) {
          .approach { padding: 3.5rem 5%; }
          .ap-inner { grid-template-columns: 1fr; gap: 2.5rem; }
          .ap-form-wrap { max-width: 100%; }
          .ap-heading { font-size: clamp(1.5rem, 4vw, 2rem); }
        }
        @media (max-width: 540px) {
          .approach { padding: 3rem 4%; }
          .ap-form-card { padding: 2rem 1.4rem; }
          .fl-row { grid-template-columns: 1fr; }
          .form-card-title { font-size: 1.4rem; }
          .ap-heading { font-size: clamp(1.3rem, 5vw, 1.8rem); }
        }

  /* ══════════════════════════════════════════════
     TABLET FIX — 900px to 1020px
     Specifically targets the gap between mobile
     breakpoint (<=900px) and desktop (>1020px)
  ══════════════════════════════════════════════ */

  
  /* ══ HERO — FULL RESPONSIVE FIX ══ */

  /* Base hero: ensure no overflow */
  .wd-hero {
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
  }

  /* image always contained */
  .wd-hero-img {
    max-width: 100%;
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }

  /* Mobile — single column, left aligned */
  @media (max-width: 768px) {
    .wd-hero {
      grid-template-columns: 1fr !important;
      padding: 5.5rem 5% 3rem !important;
      gap: 2rem !important;
      text-align: left !important;
      min-height: auto !important;
    }
    /* image goes below text */
    .wd-hero > div:last-child {
      order: 2;
    }
    .wd-hero > div:first-of-type {
      order: 1;
    }
    .wd-hero-heading {
      font-size: clamp(1.7rem, 6.5vw, 2.4rem) !important;
      text-align: left !important;
    }
    .wd-hero-sub {
      font-size: 0.93rem !important;
      max-width: 100% !important;
    }
    .wd-hero-img {
      height: auto !important;
      max-height: 280px !important;
      width: 100% !important;
      object-fit: contain !important;
    }
    .wd-hero-actions {
      justify-content: flex-start !important;
    }
    .wd-btn-fill {
      width: 100% !important;
      justify-content: center !important;
    }
    .badge {
      margin: 0 0 1.2rem !important;
    }
  }

  /* Small mobile */
  @media (max-width: 480px) {
    .wd-hero {
      padding: 4rem 4% 2.5rem !important;
    }
    .wd-hero-heading {
      font-size: clamp(1.5rem, 7vw, 2rem) !important;
    }
    .wd-hero-img {
      max-height: 220px !important;
    }
  }

  /* Tablet portrait — single column still */
  @media (min-width: 769px) and (max-width: 900px) {
    .wd-hero {
      grid-template-columns: 1fr !important;
      padding: 6rem 5% 3.5rem !important;
      gap: 2rem !important;
    }
    
    .wd-hero-heading { font-size: clamp(1.8rem, 4vw, 2.6rem) !important; }
    .wd-hero-img { height: auto !important; max-height: 360px !important; }
  }

  @media (min-width: 901px) and (max-width: 1020px) {

    /* ── HERO BANNER ── */
    .wd-hero {
      grid-template-columns: 1fr 1fr;
      padding: 5rem 4% 3.5rem;
      gap: 1.5rem;
    }
    .wd-hero-heading { font-size: clamp(1.6rem, 2.8vw, 2.2rem); }
    .wd-hero-sub { font-size: 0.92rem; }
    .wd-hero-img { height: 340px; }

    /* ── APPROACH SECTION ── */
    .wd-approach { padding: 3.5rem 4%; }
    .wd-ap-inner {
      grid-template-columns: 1fr 0.85fr;
      gap: 2rem;
    }
    .wd-ap-form-wrap { max-width: 100%; }
    .wd-ap-form-card { padding: 2rem 1.8rem; }
    .wd-ap-heading { font-size: clamp(1.5rem, 2.5vw, 2rem); }

    /* ── APPROACH (ApproachSection component) ── */
    .ap-inner {
      grid-template-columns: 1fr 0.85fr !important;
      gap: 2rem !important;
    }

    /* ── SERVICES ACCORDION ── */
    .svc-section { padding: 4.5rem 4% 5rem; }
    .svc-layout {
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }
    .svc-heading { font-size: clamp(1.5rem, 2.8vw, 2rem); }
    .svc-right-col { position: static; top: auto; }
    .acc-desc { padding-left: 0; }

    /* ── WHAT WE OFFER — ORBIT ── */
    .pcs-offer-section { padding: 4rem 4% 5rem; }
    .pcs-offer-body {
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }
    .pcs-orbit-wrap { width: 300px; height: 300px; }
    .pcs-orbit-center { width: 85px; height: 85px; }
    .pcs-orbit-center-name { font-size: 1rem; }
    .pcs-orbit-node-box { width: 80px; height: 80px; gap: 5px; }
    .pcs-orbit-node-emoji { font-size: 1.1rem; }
    .pcs-orbit-node-lbl { font-size: .58rem; }

    /* ── WHAT'S INCLUDED — ACCORDION ── */
    .pcs-wi5-section { padding: 4rem 4% 5rem; }
    .pcs-wi5-tab-content {
      grid-template-columns: 1fr;
      padding-left: 3rem;
      gap: 1rem;
    }
    .pcs-wi5-tab-head { gap: 1rem; padding: 1.2rem 1.4rem; }

    /* ── PROCESS GRID ── */
    .pcs-proc-section { padding: 4rem 4%; }
    .pcs-proc-grid { grid-template-columns: repeat(2, 1fr); gap: 1.2rem; }

    /* ── WHY / FEATURES — 4 BOX ── */
    .pcs-fb-section { padding: 4.5rem 4%; }
    .pcs-fb-grid {
      grid-template-columns: 1fr 120px 1fr;
    }
    .pcs-fb-center-circle { width: 100px; height: 100px; }
    .pcs-fb-center-inner { width: 74px; height: 74px; }
    .pcs-fb-center-icon { font-size: 1.5rem; }
    .pcs-fb-box { padding: 1.6rem 1.4rem; min-height: 180px; }
    .pcs-fb-title { font-size: clamp(1.5rem, 2.5vw, 2rem); }

    /* ── WHY CHOOSE US ── */
    .wcu-section { padding: 3.5rem 4%; }
    .wcu-inner {
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }
    .wcu-heading { font-size: clamp(1.5rem, 2.5vw, 2rem); }

    /* ── PORTFOLIO SECTION ── */
    .pf-section { padding: 3.5rem 4%; }
    .pf-inner {
      grid-template-columns: minmax(220px, 340px) 1fr;
      gap: 2.5rem;
      padding: 3rem 2rem;
    }
    .pf-cols { grid-template-columns: repeat(2, 1fr); gap: 0.8rem; }
    .pf-heading { font-size: clamp(1.5rem, 2.5vw, 2rem); }

    /* ── PROCESS SECTION (WebsiteDevelopment) ── */
    .proc-section { padding: 4rem 4%; margin: 0 !important; }
    .proc-cols {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    .proc-mockup-wrap { order: -1; margin: 1rem auto; }
    .proc-points.left .proc-point { flex-direction: row; text-align: left; }
    .proc-points.left .proc-point-text { align-items: flex-start; }
    .proc-screen { width: 220px; }
    .pb-tl, .pb-tr, .pb-bl, .pb-br { display: none; }
    .proc-heading { font-size: clamp(1.5rem, 2.5vw, 2rem); }

    /* ── KEY FEATURES CAROUSEL ── */
    .kf-section { padding: 3rem 0 4rem; }
    .kf-inner { padding: 2rem 2.5rem; }
    .kf-carousel-wrap { height: 360px; }
    .kf-card { width: 300px; }
    .kf-title { font-size: clamp(1.6rem, 2.8vw, 2.2rem); }

    /* ── FAQ SECTION ── */
    .faq-wrapper { grid-template-columns: 1fr 1fr !important; gap: 1rem !important; }
    .faq-section { padding: 3rem 4% 4rem !important; }

    /* ── GENERAL ── */
    .pcs-wi5-heading, .pcs-offer-heading { font-size: clamp(1.5rem, 2.5vw, 2rem) !important; }
  }

      `}</style>

      <div className="ap-inner">

        {/* LEFT CONTENT */}
        <div className="ap-left">
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Approach in</div>
          </div>
          <h2 className="ap-heading">Smart, Scalable, and <span> Stunning Websites</span> Built for Results</h2>
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


/* ══════ SECTION 2: SERVICES ACCORDION ══════ */
function ServicesSection() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="svc-section">
      <div className="svc-layout">
        <div className="svc-right-col">
  <div className="partners-header1">
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Specialized Website Development Services
</h2>
          </div>          <h3 className="svc-heading">Not Just Websites. <span className="accent"><i>Growth-Driven</i></span> Digital Experiences.</h3>
          <p className="svc-sub">
We create websites that go beyond pretty pages. They’re fast, intuitive, optimized, and built for long-term impact.
</p>

          <a href="#" className="svc-cta-btn">Get a Free Consultation &nbsp;→</a>
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
                  <div className="acc-divider" style={{background:`linear-gradient(90deg,${s.tagColor}4d,transparent)`}}></div>
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
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Why Choose Us</h2>
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
    <section className="proc-section">
      <div className="proc-inner">
        <div className="proc-header">
      <div className="partners-header1">
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Proven Website Development Process</h2>
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
                  {["🏗️","📱","🔍"].map((ic,i) => (
                    <div key={i} className="ps-card">
                      <div className="ps-card-icon">{ic}</div>
                      <div className="ps-card-line w100"></div>
                      <div className="ps-card-line w70"></div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
            <div style={{position:"absolute",bottom:"60px",left:"50%",width:"10px",height:"10px",borderRadius:"50%",background:"var(--orange)",border:"2px solid #fff",boxShadow:"0 2px 8px rgba(237,131,55,0.5)",animation:"float1 2s ease-in-out infinite",zIndex:15}}></div>
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
  <div className="partners-header1">
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Uniqueness
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
    <section className="faq-section">
     <div className="partners-header1" style={{  textAlign: 'center' }}>
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
  { img:"https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&q=80", label:"E-Commerce Store", tag:"Shopify" },
  { img:"https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&q=80", label:"SaaS Dashboard", tag:"React" },
  { img:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80", label:"Mobile App UI", tag:"Flutter" },
  { img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80", label:"Corporate Website", tag:"WordPress" },
  { img:"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80", label:"Analytics Platform", tag:"Next.js" },
];
const PORTFOLIO_COL2 = [
  { img:"https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80", label:"Food Delivery App", tag:"React Native" },
  { img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", label:"Personal Brand", tag:"Custom" },
  { img:"https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&q=80", label:"Agency Landing", tag:"Static" },
  { img:"https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80", label:"Online Store", tag:"WooCommerce" },
  { img:"https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&q=80", label:"Tech Startup", tag:"Next.js" },
];
const PORTFOLIO_COL3 = [
  { img:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80", label:"Real Estate Portal", tag:"Custom" },
  { img:"https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80", label:"Design Studio", tag:"WordPress" },
  { img:"https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&q=80", label:"Healthcare Site", tag:"React" },
  { img:"https://images.unsplash.com/photo-1529078155058-5d716f45d604?w=400&q=80", label:"Restaurant Website", tag:"Shopify" },
  { img:"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&q=80", label:"Blog Platform", tag:"Next.js" },
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
    <section className="pf-section">
      <div className="pf-inner">
        {/* LEFT */}
        <div className="pf-left">
       <div className="partners-header1">
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our  Portfolio</h2>
          </div>
          <h3 className="pf-heading">
            Proven Website <span><i>Solutions Across</i></span> Industries
          </h3>
          <p className="pf-desc">
Review performance-driven websites developed with strategic architecture, intuitive design, and measurable results.

          </p>

          <div className="pf-btns">
            <a href="#" className="pf-btn">View All Projects →</a>
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
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = GLOBAL_CSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);


  
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
      <BlogSection />
      <FAQSection />
      <CTASection />

      </>
    </Layout>
  );
}