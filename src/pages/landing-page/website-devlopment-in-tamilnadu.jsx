import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import '../../css/landing-website-development.css';

// ── SEO (module scope: built once, not on every render) ──
const imageUrl = "https://www.pcsbusinesssolution.com/img/digital-marketing.png";
const SOCIAL_LINKS = [
    "https://www.facebook.com/profile.php?id=61577125709962",
    "https://www.linkedin.com/company/priyam-consultancy-services/",
    "https://www.instagram.com/priyam_consultancy_services/",
    "https://x.com/services91032",
    "https://g.co/kgs/rdTYdi6"
];
const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const schemaData = [
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "item": { "@id": "https://priyamconsultancy.com/", "name": "Home" } },
            { "@type": "ListItem", "position": 2, "item": { "@id": "https://priyamconsultancy.com/landing-page/website-development-company-in-coimbatore/", "name": "Website Development Company in Coimbatore" } }
        ]
    },
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Priyam Consultancy Services",
        "url": "https://priyamconsultancy.com/",
        "logo": "https://priyamconsultancy.com/img/priyam-consultancy-logo.png",
        "contactPoint": [{ "@type": "ContactPoint", "telephone": "+91 96774 44048", "contactType": "customer support" }],
        "sameAs": SOCIAL_LINKS
    },
    {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://priyamconsultancy.com/landing-page/website-development-company-in-coimbatore/#service",
        "name": "Website Development Services in Coimbatore",
        "serviceType": "Website Development Services",
        "url": "https://priyamconsultancy.com/landing-page/website-development-company-in-coimbatore/",
        "description": "Priyam Consultancy Services develops SEO-optimized business websites, WordPress websites, WooCommerce stores, Shopify websites, custom web applications, responsive websites, and eCommerce solutions for businesses in Coimbatore.",
        "provider": {
            "@type": "Organization",
            "name": "Priyam Consultancy Services",
            "url": "https://priyamconsultancy.com/",
            "logo": { "@type": "ImageObject", "url": "https://priyamconsultancy.com/img/priyam-consultancy-logo.png" }
        },
        "areaServed": { "@type": "City", "name": "Coimbatore" }
    },
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Website Development Company in Coimbatore | Priyam Consultancy Services",
        "image": "https://priyamconsultancy.com/img/priyam-consultancy-logo.png",
        "@id": "https://priyamconsultancy.com/landing-page/website-development-company-in-coimbatore/",
        "url": "https://priyamconsultancy.com/landing-page/website-development-company-in-coimbatore/",
        "telephone": "+91 96774 44048",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "1st Floor, SF.11/4, Pooja Garden, Kalapatti Road, Civil Aerodrame Post",
            "addressLocality": "Coimbatore",
            "addressRegion": "Tamil Nadu",
            "postalCode": "641014",
            "addressCountry": "India"
        },
        "geo": { "@type": "GeoCoordinates", "latitude": 11.043918, "longitude": 77.038417 },
        "openingHoursSpecification": WEEKDAYS.map((d) => ({
            "@type": "OpeningHoursSpecification", "dayOfWeek": d, "opens": "09:00", "closes": "18:00"
        })),
        "sameAs": SOCIAL_LINKS
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            { "@type": "Question", "name": "What does a website development company do?", "acceptedAnswer": { "@type": "Answer", "text": "A website development company plans, designs, and builds websites from the ground up, creating responsive, user-friendly, and business-focused websites tailored to an organization's goals." } },
            { "@type": "Question", "name": "How is a static website different from a dynamic one?", "acceptedAnswer": { "@type": "Answer", "text": "A static website displays the same content to every visitor, while a dynamic website retrieves content from a database and can change based on the visitor, user interactions, or other dynamic factors." } },
            { "@type": "Question", "name": "What should I look for in a website development service?", "acceptedAnswer": { "@type": "Answer", "text": "Look for a provider that offers clear communication, a portfolio of successful projects, transparent pricing, technical expertise, and reliable post-launch support and maintenance." } },
            { "@type": "Question", "name": "How long does website design and development usually take?", "acceptedAnswer": { "@type": "Answer", "text": "Project timelines vary depending on the scope and complexity. A simple static website can often be completed within a few weeks, while a custom or eCommerce website may take several weeks to a few months." } },
            { "@type": "Question", "name": "What makes an e-commerce development company different from a general web developer?", "acceptedAnswer": { "@type": "Answer", "text": "An e-commerce development company specializes in building online stores with features such as secure checkout, payment gateway integration, inventory management, product catalogs, and order processing." } },
            { "@type": "Question", "name": "How do I know if I'm hiring the right website development company for my project?", "acceptedAnswer": { "@type": "Answer", "text": "Ask for case studies, request client references, review previous work, evaluate their development process, and confirm they provide ongoing support and maintenance after your website is launched." } }
        ]
    }
];

const SCHEMA_JSON = schemaData.map((s) => JSON.stringify(s));

// Leadfeeder tracking script (injected into <head>)
const LEADFEEDER_SCRIPT = `
(function(ss,ex){
  window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));};
  (function(d,s){
    var fs=d.getElementsByTagName(s)[0];
    function ce(src){
      var cs=d.createElement(s);
      cs.src=src;
      cs.async=1;
      fs.parentNode.insertBefore(cs,fs);
    }
    ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js');
  })(document,'script');
})('JMvZ8gvBAAEa2pOd');
`;

function SEOHead() {
    return (
        <Head>
            <title>Best Website Development Company in Coimbatore | PCS </title>
                        <meta name="robots" content="noindex, nofollow" />
            <meta name="description" content="Break away from ordinary business websites. Priyam Consultancy Services develops next-generation, SEO-optimized websites that help Coimbatore brands stand out." />
            <meta name="keywords" content="Web Development Company in Coimbatore, Digital Marketing Company Coimbatore, Digital Marketing in Coimbatore, SEO Company in Coimbatore, Recruitment Agency in Coimbatore, SEO Services in Coimbatore, Website Development Company in Coimbatore " />
            <link rel="canonical" href="https://www.priyamconsultancy.com/landing-page/website-development-company-in-coimbatore/" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" />
            <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
            <link rel="preload" as="image" href="/img/landing-page/banner.webp" fetchpriority="high" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Best Website Development Company in Coimbatore | PCS " />
            <meta property="og:description" content="Break away from ordinary business websites. Priyam Consultancy Services develops next-generation, SEO-optimized websites that help Coimbatore brands stand out." />
            <meta property="og:url" content="https://www.priyamconsultancy.com/landing-page/website-development-company-in-coimbatore/" />
            <meta property="og:image" content={imageUrl} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Best Website Development Company in Coimbatore | PCS " />
            <meta name="twitter:description" content="Break away from ordinary business websites. Priyam Consultancy Services develops next-generation, SEO-optimized websites that help Coimbatore brands stand out." />
            <meta name="twitter:image" content={imageUrl} />
            {SCHEMA_JSON.map((json, i) => (<script key={i} type="application/ld+json">{json}</script>))}
            <script>{LEADFEEDER_SCRIPT}</script>
        </Head>
    );
}

// Hover + offscreen-render rules moved from JS handlers / inline styles into CSS
const GlobalStyles = () => (
    <style>{`
     header.headerWrapper_ROKX, .footerTop_uYEV, .footerBottom_YdiN{
    display: none;
}

/* Hero partner logos (6) */
.hero-partner-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; margin-top: 2rem; width: 100%; }
.hero-partner-cell { background: #fff; border: 1px solid #e6ebf3; border-radius: 12px; height: 64px; display: flex; align-items: center; justify-content: center; padding: 8px 10px; box-shadow: 0 4px 14px rgba(0,0,0,0.04); min-width: 0; }
.hero-partner-cell img { max-width: 100%; max-height: 100%; object-fit: contain; }
@media (max-width: 640px) { .hero-partner-grid { gap: 6px; } .hero-partner-cell { height: 46px; padding: 5px 6px; border-radius: 8px; } }

/* Pricing plans (3) */
.pp-section { background: linear-gradient(180deg, #f6f9fd 0%, #ffffff 100%); padding: 4.5rem 5% 5rem; font-family: 'Poppins', sans-serif; }
.pp-inner { max-width: 1200px; margin: 0 auto; }
.pp-head { text-align: center; margin-bottom: 3.2rem; }
.pp-eyebrow { display: inline-block; color: #ed8337; border: 1px solid rgba(237,131,55,0.4); background: rgba(237,131,55,0.1); font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em; padding: 0.4rem 1.1rem; border-radius: 50px; margin-bottom: 0.9rem; }
.pp-title { color: #004168; font-weight: 700; font-size: clamp(1.4rem, 2.6vw, 2.2rem); margin: 0; }
.pp-title span { color: #ed8337; font-style: italic; }
.pp-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 44px 28px; align-items: stretch; max-width: 1080px; margin: 0 auto; }
.pp-card { position: relative; display: flex; flex-direction: column; background: #fff; border: 2px solid transparent; border-radius: 22px; padding: 1.7rem 1.5rem 1.6rem; box-shadow: 0 10px 35px rgba(0,0,0,0.07); transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.3s ease; }
.pp-card:hover { transform: translateY(-6px); border-color: #ed8337; box-shadow: 0 18px 44px rgba(237,131,55,0.16); }
.pp-from { margin: 0 6px 0 0 !important; }
.pp-card-popular { border: 2px solid #ed8337; box-shadow: 0 18px 50px rgba(237,131,55,0.18); transform: translateY(-14px); }
.pp-card-popular:hover { transform: translateY(-20px); }
.pp-popular-badge { position: absolute; top: -13px; left: 50%; transform: translateX(-50%); background: linear-gradient(90deg, #004168, #ed8337); color: #fff; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 5px 16px; border-radius: 50px; white-space: nowrap; }
.pp-plan-tag { align-self: flex-start; background: #eef3fa; color: #004168; font-size: 0.72rem; font-weight: 600; padding: 4px 12px; border-radius: 50px; margin-bottom: 0.8rem; }
.pp-plan-desc { color: #666; font-size: 0.82rem; line-height: 1.6; margin: 0 0 1rem; min-height: 2.6em; }
.pp-price-box { border: 1.5px dashed rgba(237,131,55,0.55); background: #fffaf5; border-radius: 14px; padding: 0.9rem 1rem 0.8rem; margin-bottom: 1.2rem; }
.pp-price-top { display: flex; align-items: center; gap: 10px; margin-bottom: 4px; }
.pp-off { background: #e3f6ec; color: #16794a; font-size: 0.66rem; font-weight: 700; padding: 3px 9px; border-radius: 6px; }
.pp-was { color: #9aa3b2; text-decoration: line-through; font-size: 0.8rem; font-weight: 500; }
.pp-price-main { color: #004168; font-size: 2.1rem; font-weight: 800; line-height: 1.2; }
.pp-price-main small { color: #6b7a94; font-size: 0.78rem; font-weight: 500; margin-left: 4px; }
.pp-group { margin-bottom: 1rem; }
.pp-group-title { display: flex; align-items: center; gap: 10px; margin-bottom: 0.65rem; }
.pp-group-title span { color: #ed8337; font-weight: 700; font-size: 0.9rem; }
.pp-group-title::after { content: ""; flex: 1; height: 1px; background: rgba(237,131,55,0.4); }
.pp-list { list-style: none; margin: 0; padding: 0; }
.pp-list li { display: flex; align-items: center; gap: 9px; color: #444; font-size: 0.8rem; line-height: 1.4; padding: 5px 0; }
.pp-list li svg { flex-shrink: 0; }
.pp-btn { margin-top: auto; display: block; width: 100%; border: 0; cursor: pointer; font-family: inherit; box-sizing: border-box; text-align: center; text-decoration: none; background: linear-gradient(90deg, #ed8337, #f59a52); color: #fff !important; font-weight: 600; font-size: 0.9rem; padding: 0.85rem 1rem; border-radius: 12px; box-shadow: 0 8px 20px rgba(237,131,55,0.3); transition: transform 0.25s ease, box-shadow 0.25s ease; }
.pp-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(237,131,55,0.4); }
.pp-card-popular .pp-btn { background: linear-gradient(90deg, #004168, #0a5a8c); box-shadow: 0 8px 20px rgba(0,65,104,0.3); }
.pp-list + .pp-btn, .pp-group:last-of-type { margin-bottom: 1.4rem; }
@media (max-width: 1000px) {
  .pp-grid { grid-template-columns: 1fr; max-width: 440px; gap: 34px; }
  .pp-card-popular, .pp-card-popular:hover { transform: none; }
  .pp-plan-desc { min-height: 0; }
}
@media (max-width: 480px) { .pp-section { padding: 3rem 16px 3.5rem; } .pp-price-main { font-size: 1.8rem; } }

/* Plan enquiry popup */
.pm-overlay { overscroll-behavior: contain; position: fixed; inset: 0; z-index: 99999; background: rgba(6,24,38,0.65); display: flex; align-items: center; justify-content: center; padding: 16px; overflow-y: auto; animation: pmFade 0.25s ease; }
.pm-box { overscroll-behavior: contain; position: relative; width: 100%; max-width: 520px; max-height: 94vh; overflow-y: auto; background: #fff; border-radius: 20px; padding: 2rem 1.6rem 1.6rem; box-shadow: 0 30px 80px rgba(0,0,0,0.35); animation: pmPop 0.3s ease; font-family: 'Poppins', sans-serif; }
.pm-close { position: absolute; top: 12px; right: 12px; width: 34px; height: 34px; border-radius: 50%; border: 0; background: #eef3fa; color: #004168; font-size: 1.2rem; line-height: 1; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s ease, color 0.2s ease; }
.pm-close:hover { background: #ed8337; color: #fff; }
.pm-title { color: #004168; font-size: 1.25rem; font-weight: 700; margin: 0 0 0.3rem; padding-right: 30px; }
.pm-title span { color: #ed8337; }
.pm-sub { color: #6b7a94; font-size: 0.82rem; margin: 0 0 1.2rem; }
.svc-locked { display: flex; align-items: center; justify-content: space-between; gap: 10px; width: 100%; box-sizing: border-box; padding: 0.8rem 1rem; border: 1.5px solid rgba(237,131,55,0.55); background: #fffaf5; color: #004168; font-weight: 600; font-size: 0.9rem; border-radius: 10px; cursor: not-allowed; user-select: none; }
.svc-locked svg { flex-shrink: 0; }
@keyframes pmFade { from { opacity: 0; } to { opacity: 1; } }
@keyframes pmPop { from { opacity: 0; transform: translateY(14px) scale(0.97); } to { opacity: 1; transform: none; } }
@media (max-width: 480px) { .pm-box { padding: 1.6rem 1.1rem 1.2rem; border-radius: 16px; } }

/* Recent work (6) - dark blue background, screenshot scrolls inside the card on hover */
.wk-section { background: #0c4a6e; padding: 4.5rem 5% 5rem; font-family: 'Poppins', sans-serif; }
.wk-inner { max-width: 1200px; margin: 0 auto; }
.wk-head { text-align: center; margin-bottom: 3rem; }
.wk-eyebrow { display: inline-block; color: #ed8337; border: 1px solid rgba(237,131,55,0.4); background: rgba(237,131,55,0.1); font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.4rem 1.1rem; border-radius: 50px; margin-bottom: 0.9rem; }
.wk-section .partners-eyebrow { color: #ed8337;  }
.wk-title { color: #fff; font-weight: 700; font-size: clamp(1.4rem, 2.6vw, 2.2rem); line-height: 1.3; margin: 0 0 0.6rem; }
.wk-title span { color: #ed8337; font-style: italic; }
.wk-sub { color: rgba(255,255,255,0.75); font-size: 0.95rem; margin: 0; }
.wk-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
.wk-card { display: block; text-decoration: none; background: #fff; border: 2px solid transparent; border-radius: 20px; padding: 14px 14px 18px; box-shadow: 0 10px 30px rgba(0,0,0,0.25); transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease; }
.wk-card:hover { border-color: #ed8337; transform: translateY(-6px); }
.wk-frame { border-radius: 12px; overflow: hidden; border: 1px solid #e6ebf3; background: #f4f7fc; }
.wk-bar { display: flex; align-items: center; gap: 6px; height: 28px; padding: 0 12px; background: #eef2f8; border-bottom: 1px solid #e6ebf3; }
.wk-bar i { width: 8px; height: 8px; border-radius: 50%; background: #cfd6e2; display: block; }
.wk-bar i:nth-child(1) { background: #ff6b5e; }
.wk-bar i:nth-child(2) { background: #ffc233; }
.wk-bar i:nth-child(3) { background: #3ccf6e; }
.wk-bar span { margin-left: 8px; font-size: 0.66rem; color: #7b879b; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.wk-view { height: 250px; overflow: hidden; position: relative; background: #fff; }
.wk-view img { display: block; width: 100%; height: auto; transform: translateY(0); transition: transform 0.7s ease; will-change: transform; }
.wk-meta { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 16px 6px 0; }
.wk-cat { display: block; color: #ed8337; font-size: 0.7rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 3px; }
.wk-name { color: #004168; font-size: 1.05rem; font-weight: 700; margin: 0; line-height: 1.3; }
.wk-visit { flex-shrink: 0; color: #004168; font-size: 0.82rem; font-weight: 600; background: #eef3fa; padding: 7px 14px; border-radius: 50px; transition: background 0.3s ease, color 0.3s ease; }
.wk-visit b { display: inline-block; transition: transform 0.3s ease; }
.wk-card:hover .wk-visit { background: #ed8337; color: #fff; }
.wk-card:hover .wk-visit b { transform: translateX(3px); }
@media (max-width: 1000px) { .wk-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .wk-grid { grid-template-columns: 1fr; gap: 22px; } .wk-section { padding: 3rem 16px 3.5rem; } .wk-view { height: 220px; } }

/* Client logos - static grid, all clients visible */
.cl-section { background: #f6f9fd; padding: 4rem 5% 4.5rem; font-family: 'Poppins', sans-serif; }
.cl-head { text-align: center; max-width: 760px; margin: 0 auto 2.6rem; }
.cl-eyebrow { display: inline-block; color: #ed8337; border: 1px solid rgba(237,131,55,0.4); background: rgba(237,131,55,0.1); font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.4rem 1.1rem; border-radius: 50px; margin-bottom: 0.9rem; }
.cl-title { color: #004168; font-weight: 700; font-size: clamp(1.4rem, 2.6vw, 2.2rem); line-height: 1.3; margin: 0 0 0.6rem; }
.cl-title span { color: #ed8337; font-style: italic; }
.cl-sub { color: #666; font-size: 0.95rem; line-height: 1.7; margin: 0; }
.cl-grid { max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }
.cl-cell { box-sizing: border-box; width: calc((100% - 80px) / 6); background: #fff; border: 2px solid #e9edf4; border-radius: 14px; height: 92px; display: flex; align-items: center; justify-content: center; padding: 14px 18px; transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease; }
.cl-cell:hover { border-color: #ed833733; box-shadow: 0 10px 26px rgba(237,131,55,0.15); transform: translateY(-3px); }
.cl-cell img { max-width: 100%; max-height: 100%; object-fit: contain; }
@media (max-width: 1000px) { .cl-cell { width: calc((100% - 48px) / 4); } }
@media (max-width: 640px) { .cl-section { padding: 2.5rem 16px 3rem; } .cl-grid { gap: 10px; } .cl-cell { width: calc((100% - 20px) / 3); height: 70px; padding: 8px 10px; border-radius: 10px; } }

/* Get Started banner */
.gs-section { background: #fff; padding: 3.5rem 5%; font-family: 'Poppins', sans-serif; }
.gs-card { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; gap: 1.5rem; background: #ed833733;  border-radius: 26px; padding: 1.6rem 2rem; box-shadow: 0 14px 40px rgba(0,65,104,0.08); }
.gs-icon { flex-shrink: 0; width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(135deg, #004168, #0a5a8c); display: flex; align-items: center; justify-content: center; }
.gs-text { flex: 1; min-width: 0; }
.gs-title { color: #004168; font-size: 1.15rem; font-weight: 700; margin: 0 0 0.35rem; }
.gs-desc { color: #6b7a94; font-size: 0.82rem; line-height: 1.6; margin: 0; max-width: 460px; }
.gs-btn { flex-shrink: 0; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; background: linear-gradient(90deg, #ed8337, #f59a52); color: #fff !important; font-weight: 600; font-size: 0.92rem; padding: 0.85rem 1.7rem; border-radius: 12px; box-shadow: 0 8px 20px rgba(237,131,55,0.3); transition: transform 0.25s ease, box-shadow 0.25s ease; }
.gs-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(237,131,55,0.4); }
.gs-btn span { transition: transform 0.25s ease; }
.gs-btn:hover span { transform: translateX(3px); }
@media (max-width: 760px) {
  .gs-section { padding: 2.5rem 16px; }
  .gs-card { flex-direction: column; text-align: center; padding: 1.6rem 1.2rem; gap: 1rem; }
  .gs-desc { max-width: none; }
  .gs-btn { width: 100%; justify-content: center; box-sizing: border-box; }
}

/* Trust strip (4) - dark band with floating cards */
.ts-section { background: #fff; padding: 3.5rem 5%; position: relative; overflow: hidden; }
.ts-inner { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
.ts-head { text-align: center; margin-bottom: 2rem; }
.ts-eyebrow { display: inline-block; color: #ed8337; border: 1px solid rgba(237,131,55,0.4); background: rgba(237,131,55,0.1); font-size: 0.7rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.3rem 1rem; border-radius: 50px; margin-bottom: 0.9rem; }
.ts-title { font-family: 'Poppins', sans-serif; color: #004168; font-weight: 700; font-size: clamp(1.3rem, 2.4vw, 2rem); margin: 0; }
.ts-title span { color: #ed8337; font-style: italic; }
.ts-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.ts-card { position: relative; background: #fff; border: 1px solid #e6ebf3; border-radius: 18px; border-bottom: 4px solid #ed8337; padding: 2.2rem 1.2rem 1.4rem; text-align: center; transition: transform 0.3s ease, box-shadow 0.3s ease; box-shadow: 0 10px 30px rgba(0,0,0,0.07); }
.ts-card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(0,0,0,0.13); }
.ts-tag { position: absolute; top: 12px; left: 50%; transform: translateX(-50%); font-size: 0.62rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #004168; background: #eef3fa; padding: 3px 10px; border-radius: 50px; white-space: nowrap; }
.ts-logo-box { height: 140px; display: flex; align-items: center; justify-content: center; padding-top:1rem;}
.ts-logo-box img { max-width: 85%; max-height: 100%; object-fit: contain; }
@media (max-width: 900px) { .ts-cards { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .ts-section { padding: 2.5rem 16px; } .ts-cards { gap: 12px; } .ts-card { padding: 2.2rem 0.8rem 1.1rem; } }
.svc-card-item { transition: transform 0.35s ease, box-shadow 0.35s ease; box-shadow: 0 10px 35px rgba(0,0,0,0.08); }
.svc-card-item:hover { transform: translateY(-8px); box-shadow: 0 18px 40px rgba(0,0,0,0.12); }
.tc-section, #service, .pf-grid-section, .tech-section, .mf-outer, .dm-faq-section, .call-cta-section, .pcs-footer {
    content-visibility: auto;
    contain-intrinsic-size: auto 800px;
}
`}</style>
);

// ── Shared hooks ──────────────────────────────────────
function useWindowWidth() {
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
    useEffect(() => {
        let raf;
        const handler = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => setWidth(window.innerWidth));
        };
        window.addEventListener("resize", handler, { passive: true });
        return () => { window.removeEventListener("resize", handler); cancelAnimationFrame(raf); };
    }, []);
    return width;
}

// ── FAQ Data ──────────────────────────────────────────
const faqData = [
    { q: "How will my new website help me beat my local competitors?", a: "A professionally designed website improves your online visibility, builds credibility, and attracts qualified leads — turning more visitors into paying customers and giving your business a real edge over competitors still relying on outdated sites." },
    { q: "Can you guarantee my website will rank on the first page of Google?", a: " No one can honestly guarantee first-page rankings — and you should be cautious of anyone who does. What we can promise is an SEO-friendly website built on proven optimization practices that significantly improve your chances of ranking higher over time." },
    { q: "How do you design a website that generates more customer enquiries?", a: "We focus on clear navigation, persuasive content, fast loading speeds, and strong calls-to-action — every element is built to guide a visitor toward contacting or buying from you, not just look good." },

    { q: "Why should I choose a website development company in Coimbatore?", a: "A local team understands your target audience, your competitors, and the regional market — which means better communication, faster turnaround, and a website built around how your actual customers think and search." },
    { q: "Can I meet your team in person to discuss my project?", a: "Yes — we welcome in-person meetings at our Coimbatore office, and offer virtual consultations too if that's easier for your schedule." },
    { q: "Will I be able to update my website without technical knowledge?", a: "Yes. We build every website on an easy-to-use content management system, so you can update text, images, products, and blog posts yourself — no coding required." },

    { q: "Is every website you build mobile-friendly?", a: "Every site we build is fully responsive across smartphones, tablets, and desktops — since most of your customers will likely find you on mobile first." },
    { q: "Can my website be upgraded with new features later?", a: "Yes — our websites are built with scalability in mind, so adding new pages, features, payment systems, or integrations down the line is straightforward, not a rebuild." },
    { q: "What support do you provide after my website goes live?", a: "We don't disappear after launch. You get ongoing technical support, security updates, performance monitoring, and bug fixes to keep your website running smoothly." },
    { q: "How do you keep my website secure and fast?", a: "We use SSL certificates, secure coding practices, regular updates, optimized images, and caching to protect your site and keep load times fast — both of which matter for trust and for Google rankings." },
];

// ── Site Header ────────────────────────────────────────
function SiteHeader() {
    return (
        <header className="pcs-site-header-wrap">
            <div className="pcs-site-header">
                <div className="pcs-header-logo">
                    <img src="/img/priyam-consultancy-logo.png" alt="Priyam Consultancy Services" decoding="async" />
                </div>

                <div className="pcs-header-right">
                    <a href="tel:+919677444048" className="pcs-header-call">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ed8337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span>+91 96774 44048</span>
                    </a>

                    <a href="#contact" className="pcs-header-enquire-btn">
                        Build Your Website
                        <span>→</span>
                    </a>
                </div>
            </div>
        </header>
    );
}

// ── Partner / certification logos ─────────────────────
// Crop each logo from your screenshot and save with these file names.
const PARTNER_LOGOS = {
    meta:      { name: "Meta Business Partner",      img: "/img/landing-page/client-logo-1.webp" },
    shopify:   { name: "Shopify Partner",            img: "/img/landing-page/client-logo-2.webp" },
    microsoft: { name: "Microsoft Partner",          img: "/img/landing-page/client-logo-3.webp" },
    odoo:      { name: "Odoo Official Partner",      img: "/img/landing-page/client-logo-10.webp" },
    gPartner:  { name: "Google Partner",             img: "/img/landing-page/client-logo-5.webp" },
    gRating:   { name: "Google Rating 4.9/5",        img: "/img/landing-page/client-logo-6.webp" },
    designRush:{ name: "DesignRush Verified Agency", img: "/img/landing-page/client-logo-7.webp" },
    kovai:     { name: "360 Kovai Verified Agency",  img: "/img/landing-page/client-logo-8.webp" },
};

// 6 logos under the hero buttons
const HERO_PARTNER_LOGOS = [
    PARTNER_LOGOS.meta, PARTNER_LOGOS.shopify, PARTNER_LOGOS.microsoft,
    PARTNER_LOGOS.odoo, PARTNER_LOGOS.gPartner, PARTNER_LOGOS.gRating,
];

// 4 logos in the new section below the hero
const TRUST_STRIP_LOGOS = [
    { name: "Google Partner",             img: "/img/landing-page/hero-img-1.webp", label: "Certified" },
    { name: "Google Rating 4.9/5",        img: "/img/landing-page/hero-img-2.webp", label: "Client Rated" },
    { name: "DesignRush Verified Agency", img: "/img/landing-page/hero-img-3.webp", label: "Verified" },
    { name: "360 Kovai Verified Agency",  img: "/img/landing-page/hero-img-4.webp", label: "Local Trusted" },
];

function TrustStripSection() {
    return (
        <section className="ts-section" aria-label="Verified partners and ratings">
            <div className="ts-inner">
                <div className="ts-head">
                    <div className="partners-header1" style={{ textAlign: 'center' }}>
                        <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Trusted &amp; Verified</div>
                    </div>
                    <h2 className="ts-title">Recognised by the Platforms <span>You Trust</span></h2>
                </div>
                <div className="ts-cards">
                    {TRUST_STRIP_LOGOS.map((t) => (
                        <div className="ts-card" key={t.name}>
                            <span className="ts-tag">{t.label}</span>
                            <div className="ts-logo-box">
                                <img src={t.img} alt={t.name} loading="lazy" decoding="async" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ── Pricing plans ─────────────────────────────────────
const PRICING_PLANS = [
    {
        tag: "Starter Website",
        desc: "Perfect for Startups and Small Businesses",
        off: "25% OFF",
        was: "₹13,400",
        price: "₹9,999",
        popular: false,
        groups: [
            { title: "Website", items: ["Up to 5 Pages", "Custom Design", "Mobile Responsive", "Contact Form", "WhatsApp Integration", "Google Map Integration"] },
            { title: "Features", items: ["Social Media Integration", "Basic SEO Setup", "Basic Speed Optimization", "SSL Installation", "Basic Security", "Client Content Upload"] },
            { title: "Support", items: ["30 Minutes Training", "1 Month Free Support"] },
        ],
    },
    {
        tag: "Business Website",
        desc: "Ideal for growing businesses and service providers",
        off: "25% OFF",
        was: "₹26,665",
        price: "₹19,999",
        popular: true,
        groups: [
            { title: "Website", items: ["Up to 15 Pages", "Custom Design", "Mobile Responsive", "Contact Form", "WhatsApp Integration", "Google Map Integration"] },
            { title: "Features", items: ["Social Media Integration", "Blog Module", "SEO Setup", "Standard Speed Optimization", "SSL + Security", "Admin Panel", "Dynamic Website", "Inquiry Management", "Google Analytics", "Search Console Setup"] },
            { title: "Support", items: ["1 Hour Training", "3 Months Free Support"] },
        ],
    },
    {
        tag: "Premium Corporate Website",
        desc: "Designed for businesses looking for a professional online presence",
        off: "25% OFF",
        was: "₹39,999",
        price: "₹29,999",
        popular: false,
        groups: [
            { title: "Website", items: ["Up to 25 Premium Pages", "Premium UI/UX Design", "Mobile Responsive", "Contact Form", "WhatsApp Integration", "Google Map Integration"] },
            { title: "Features", items: ["Social Media Integration", "Advanced SEO Setup", "Advanced Speed Optimization", "Advanced Security", "Admin Panel", "Dynamic Website", "Inquiry Management", "Live Chat Integration", "Google Analytics", "Search Console Setup"] },
            { title: "Support", items: ["2 Hours Training", "6 Months Free Support"] },
        ],
    },
    {
        tag: "WooCommerce Development",
        desc: "High-performing WooCommerce stores designed to attract more customers and increase online sales",
        from: true,
        price: "₹20,000",
        popular: false,
        groups: [
            { title: "Store", items: ["Inventory & Order Tracking", "Payment Gateway Integration", "Store & Product Management", "Mobile Responsive", "WhatsApp Integration"] },
            { title: "Features", items: ["SEO Ready Structure", "Speed Optimization", "SSL + Security", "Admin Panel"] },
            { title: "Support", items: ["Training Included", "Free Post-Launch Support"] },
        ],
    },
    {
        tag: "Custom E-Commerce Development",
        desc: "Complete e-commerce features built to improve shopping experiences and grow your online business",
        from: true,
        price: "₹25,000",
        popular: false,
        groups: [
            { title: "Store", items: ["Product Catalog Setup", "Payment and Shipping Integration", "Mobile Responsive", "Customer Accounts", "WhatsApp Integration"] },
            { title: "Features", items: ["Custom Features & Integrations", "SEO Ready Structure", "Speed Optimization", "SSL + Security"] },
            { title: "Support", items: ["Training Included", "Free Post-Launch Support"] },
        ],
    },
    {
        tag: "Shopify Development",
        desc: "Scalable Shopify stores built to increase sales and support long-term business growth",
        from: true,
        price: "₹22,000",
        popular: false,
        groups: [
            { title: "Store", items: ["Custom Product & Category Setup", "Customer Login & Account Management", "Shopping Cart & Easy Checkout", "Mobile Responsive", "WhatsApp Integration"] },
            { title: "Features", items: ["SEO Ready Structure", "Speed Optimization", "Payment Gateway Setup", "Shipping Setup"] },
            { title: "Support", items: ["Training Included", "Free Post-Launch Support"] },
        ],
    },
];

function PlanModal({ plan, onClose }) {
    // Close on Esc. The page is never scrolled or locked, so the user stays exactly where they clicked.
    useEffect(() => {
        const y = window.scrollY;
        const onKey = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", onKey);
        // Safety: if anything moved the page while the popup was open, put it back
        return () => {
            document.removeEventListener("keydown", onKey);
            if (Math.abs(window.scrollY - y) > 2) window.scrollTo({ top: y, behavior: "instant" });
        };
    }, [onClose]);

    return createPortal(
        <div className="pm-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <div className="pm-box" role="dialog" aria-modal="true" aria-label={`Enquire about ${plan.tag}`}>
                <button type="button" className="pm-close" onClick={onClose} aria-label="Close">×</button>
                <h3 className="pm-title">Get Started with <span>{plan.tag}</span></h3>
                <p className="pm-sub">Fill in your details — we'll get back within 24 hours.</p>
                <HeroContactForm lockedService={plan.tag} onSuccess={onClose} />
            </div>
        </div>,
        document.body
    );
}

function PricingSection() {
    const [selectedPlan, setSelectedPlan] = useState(null);
    return (
        <section className="pp-section" id="pricing">
            <div className="pp-inner">
                <div className="pp-head">
                    <div className="partners-header1" style={{ textAlign: 'center' }}>
                        <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Affordable Plans for Every Need</div>
                    </div>
                    <h2 className="pp-title">Website Plans That Fit <span>Your Budget</span></h2>
                </div>

                <div className="pp-grid">
                    {PRICING_PLANS.map((plan) => (
                        <div className={`pp-card${plan.popular ? " pp-card-popular" : ""}`} key={plan.tag}>
                            {plan.popular && <span className="pp-popular-badge">Most Popular</span>}
                            <span className="pp-plan-tag">{plan.tag}</span>
                            <p className="pp-plan-desc">{plan.desc}</p>

                            <div className="pp-price-box">
                                {plan.off && (
                                    <div className="pp-price-top">
                                        <span className="pp-off">{plan.off}</span>
                                        <span className="pp-was">{plan.was}</span>
                                    </div>
                                )}
                                <div className="pp-price-main">
                                    {plan.from && <small className="pp-from">From</small>}
                                    {plan.price}
                                    {!plan.from && <small>/year</small>}
                                </div>
                            </div>

                            {plan.groups.map((g) => (
                                <div className="pp-group" key={g.title}>
                                    <div className="pp-group-title"><span>{g.title}</span></div>
                                    <ul className="pp-list">
                                        {g.items.map((it) => (
                                            <li key={it}>
                                                <svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true">
                                                    <circle cx="10" cy="10" r="10" fill="#004168" />
                                                    <path d="M5.8 10.4l2.8 2.8 5.6-5.8" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                {it}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            <button type="button" className="pp-btn" onClick={(e) => { e.preventDefault(); setSelectedPlan(plan); }}>Get Started Now</button>
                        </div>
                    ))}
                </div>
            </div>
            {selectedPlan && <PlanModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />}
        </section>
    );
}

// ── Recent work (6 cards, screenshot scrolls inside card on hover) ──
// Use tall, full-page screenshots for the scroll effect to be visible.
const WORK_ITEMS = [
    { img: "/img/landing-page/protfoilo-9.webp", category: "Corporate Training", title: "TGCC", domain: "tgcc.com.my", link: "https://www.tgcc.com.my/" },
    { img: "/img/landing-page/protfoilo-11.webp", category: "Manufacturing", title: "Vatcomm Technologies", domain: "vatcommtechnologies.com", link: "https://www.vatcommtechnologies.com/" },
    { img: "/img/landing-page/protfoilo-greenstar.webp", category: "Exports", title: "Greenstar Exports", domain: "greenstarexports.com", link: "https://www.greenstarexports.com/" },
    { img: "/img/landing-page/protfoilo-10.webp", category: "Construction", title: "Vriksha Builders", domain: "vrikshabuilders.com", link: "https://staging.vrikshabuilders.com/" },
    { img: "/img/landing-page/protfoilo-1.webp", category: "E-Commerce", title: "Feral Roots", domain: "feralroots.in", link: "https://feralroots.in/" },
    { img: "/img/landing-page/protfoilo-5.webp", category: "Design & Construction", title: "URC Technology Services", domain: "urcts.in", link: "https://www.urcts.in/" },
];

// Measures the real image height and scrolls it inside the card window
function WorkCard({ w }) {
    const viewRef = useRef(null);
    const imgRef = useRef(null);

    const play = () => {
        const view = viewRef.current, img = imgRef.current;
        if (!view || !img) return;
        const dist = img.offsetHeight - view.offsetHeight;
        if (dist <= 0) return; // image is not taller than the card window
        const secs = Math.min(9, Math.max(3, dist / 300));
        img.style.transition = `transform ${secs}s linear`;
        img.style.transform = `translateY(-${dist}px)`;
    };
    const reset = () => {
        const img = imgRef.current;
        if (!img) return;
        img.style.transition = "transform 0.7s ease";
        img.style.transform = "translateY(0)";
    };

    return (
        <a
            className="wk-card"
            href={w.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={play}
            onMouseLeave={reset}
            onFocus={play}
            onBlur={reset}
            onTouchStart={play}
        >
            <div className="wk-frame">
                <div className="wk-bar"><i /><i /><i /><span>{w.domain}</span></div>
                <div className="wk-view" ref={viewRef}>
                    <img ref={imgRef} src={w.img} alt={`${w.title} website`} loading="lazy" decoding="async" />
                </div>
            </div>
            <div className="wk-meta">
                <div>
                    <span className="wk-cat">{w.category}</span>
                    <h3 className="wk-name">{w.title}</h3>
                </div>
                <span className="wk-visit">Visit <b>→</b></span>
            </div>
        </a>
    );
}

function RecentWorkSection() {
    return (
        <section className="wk-section" id="our-work">
            <div className="wk-inner">
                <div className="wk-head">
                    <div className="partners-header1" style={{ textAlign: 'center' }}>
                        <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Recent Work</div>
                    </div>
                    <h2 className="wk-title">Websites We've Built That <span>Are Already Driving Results</span></h2>
                    <p className="wk-sub">Hover to explore, click to visit each live project.</p>
                </div>

                <div className="wk-grid">
                    {WORK_ITEMS.map((w) => (
                        <WorkCard key={w.title} w={w} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// ── Hero ────────────────────────────────────────────
function HeroSection() {
    return (
        <section className="hero" id="about">
            <div className="hero-left">
                <div className="h-badge"><div className="badge-dot" />Web Development</div>
                <h1 className="pf-heading" style={{ margin: "2.5rem 0 0" }}>
                    Trusted <span><i>Website Development Company </i></span>in Coimbatore
                </h1>

                <p className="hero-sub1">
                    We design and build fast, mobile-ready websites that help you get found, get leads, and grow — without delays. From business websites to online stores, every site is tailored to your industry and built to bring real results, not just look good.
                </p>

                <div className="hero-cta-row">
                    <a href="tel:+919677444048" className="hero-cta-fill">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        Call Now — Free Consultation
                    </a>
                    <a href="#get-in-touch-form" className="hero-cta-outline">
                        Get a Custom Website Quote
                    </a>
                </div>

                <div className="hero-partner-grid">
                    {HERO_PARTNER_LOGOS.map((p) => (
                        <div className="hero-partner-cell" key={p.name}>
                            <img src={p.img} alt={p.name} loading="eager" decoding="async" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="hero-right">
                <img
                    src="/img/landing-page/banner.webp"
                    alt="Website Development Coimbatore"
                    className="hero-img"
                    fetchPriority="high"
                    decoding="async"
                />
            </div>
        </section>
    );
}

// ── Custom Service Dropdown ────────────────────────────
const SERVICE_OPTIONS = [
    "Website Design",
    "Static Website Development",
    "Custom Website Development",
    "WooCommerce Development",
    "Custom E-Commerce Development",
    "Shopify Development",
    "Other",
];

function ServiceDropdown({ value, onChange }) {
    const [open, setOpen] = useState(false);
    const wrapRef = useRef(null);

    // Listener attached only while the menu is open
    useEffect(() => {
        if (!open) return;
        const handleClickOutside = (e) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    const selectOption = (opt) => {
        onChange({ target: { name: "service", value: opt } });
        setOpen(false);
    };

    return (
        <div className="svc-dd-wrap" ref={wrapRef}>
            <div
                className={`svc-dd-control ${open ? "open" : ""}`}
                onClick={() => setOpen((o) => !o)}
            >
                <span className={value ? "svc-dd-value" : "svc-dd-placeholder"}>
                    {value || "Select a Service"}
                </span>
                <span className="svc-dd-arrow">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </div>

            {open && (
                <ul className="svc-dd-menu">
                    {SERVICE_OPTIONS.map((opt) => (
                        <li
                            key={opt}
                            className={`svc-dd-item ${value === opt ? "active" : ""}`}
                            onClick={() => selectOption(opt)}
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            )}

            <input type="hidden" name="service" value={value} required />
        </div>
    );
}

function HeroContactForm({ lockedService = "", onSuccess }) {
    const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", service: lockedService, msg: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        const templateParams = {
            name: form.name,
            email: form.email,
            phone: form.phone,
            company: form.company,
            service: lockedService || form.service,
            message: form.msg,
            url: window.location.href,
        };

        try {
            // Loaded only when the form is submitted, keeps it out of the initial bundle
            const emailjs = (await import("@emailjs/browser")).default;
            await emailjs.send(
                "service_8xw6k3r",
                "template_jarui36",
                templateParams,
                "XWRnXi4hK2SvmRG3q"
            );
            alert("Message Sent Successfully ✅");
            setForm({ name: "", email: "", phone: "", company: "", service: lockedService, msg: "" });
            if (onSuccess) onSuccess();
        } catch (error) {
            console.log(error);
            alert("Failed to send ❌");
        }
    };

    return (
        <form onSubmit={sendEmail}>
            <div className="hero-form-row hero-form-row-2col">
                <div className="hero-form-field">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="hero-form-field">
                    <div className="hero-phone-wrap">
                        <span className="hero-phone-prefix">IN +91</span>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Mobile Number"
                            value={form.phone}
                            onChange={handleChange}
                            maxLength="10"
                            pattern="[0-9]{10}"
                            required
                        />
                    </div>
                </div>
            </div>

            <div className="hero-form-row hero-form-row-2col">
                <div className="hero-form-field">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="hero-form-field">
                    <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={form.company}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="hero-form-row">
                <div className="hero-form-field">
                    {lockedService ? (
                        <div className="svc-locked" aria-readonly="true" title="Selected plan">
                            <span>{lockedService}</span>
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ed8337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <rect x="4" y="11" width="16" height="10" rx="2" />
                                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                            </svg>
                            <input type="hidden" name="service" value={lockedService} />
                        </div>
                    ) : (
                        <ServiceDropdown
                            value={form.service}
                            onChange={handleChange}
                        />
                    )}
                </div>
            </div>

            <div className="hero-form-row">
                <div className="hero-form-field">
                    <textarea
                        name="msg"
                        placeholder="Your Message"
                        value={form.msg}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="hero-form-footer">
                <button type="submit" className="hero-form-btn">
                    Send Message
                    <span className="hero-form-btn-arrow">→</span>
                </button>
            </div>
        </form>
    );
}

// Alt text matches the brand name shown in each logo image.
// Slides 1–8 are updated from the logo strip screenshot.
const CLIENT_MARQUEE_LOGOS = [
    { name: "Talent Tribe", img: "/img/landing-page/client-slide-1.webp" },
    { name: "Star Health", img: "/img/landing-page/client-slide-2.webp" },
    { name: "Sterlo Build", img: "/img/landing-page/client-slide-3.webp" },
    { name: "Riya Consultancy", img: "/img/landing-page/client-slide-4.webp" },
    { name: "ZKY", img: "/img/landing-page/client-slide-5.webp" },
    { name: "Sterlo", img: "/img/landing-page/client-slide-6.webp" },
    { name: "Sterlo Care", img: "/img/landing-page/client-slide-7.webp" },
    { name: "Feral Roots", img: "/img/landing-page/client-slide-8.webp" },
    { name: "Vriksha", img: "/img/landing-page/client-slide-9.webp" },
    { name: "Tech Global", img: "/img/landing-page/client-slide-10.webp" },
    { name: "AM Builders", img: "/img/landing-page/client-slide-11.webp" },
    { name: "Analytix Hub", img: "/img/landing-page/client-slide-12.webp" },
    { name: "AB", img: "/img/landing-page/client-slide-13.webp" },
    { name: "Tactive", img: "/img/landing-page/client-slide-14.webp" },
    { name: "Ey Chiquita", img: "/img/landing-page/client-slide-15.webp" },
    { name: "CureTek", img: "/img/landing-page/client-slide-16.webp" },
    { name: "AINQA", img: "/img/landing-page/client-slide-17.webp" },
    { name: "Vatcomm", img: "/img/landing-page/client-slide-18.webp" },
    { name: "Naturals", img: "/img/landing-page/client-slide-19.webp" },
    { name: "URCTS", img: "/img/landing-page/client-slide-20.webp" },
    { name: "Greenstar", img: "/img/landing-page/greenstar-logo.webp" },
    { name: "Orvix", img: "/img/landing-page/orvix-logo.webp" },
];

// Static grid: every client is visible at once, nothing slides
function ClientLogosGrid() {
    return (
        <section className="cl-section" aria-label="Our clients">
            <div className="cl-head">
                <div className="partners-header1" style={{ textAlign: 'center' }}>
                    <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Clients</div>
                </div>
                <h2 className="cl-title">Businesses That <span>Trust Us</span></h2>
                <p className="cl-sub">From growing startups to established brands, these are the companies we've helped build a strong and result-driven online presence.</p>
            </div>
            <div className="cl-grid">
                {CLIENT_MARQUEE_LOGOS.map((client) => (
                    <div className="cl-cell" key={client.name}>
                        <img src={client.img} alt={client.name} loading="lazy" decoding="async" />
                    </div>
                ))}
            </div>
        </section>
    );
}

// ── Get Started banner ────────────────────────────────
function GetStartedBanner() {
    return (
        <section className="gs-section">
            <div className="gs-card">
                <div className="gs-icon">
                    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z" />
                        <path d="m9 12 2 2 4-4" />
                    </svg>
                </div>
                <div className="gs-text">
                    <h3 className="gs-title">Simple. Transparent. Results-Driven.</h3>
                    <p className="gs-desc">No confusing steps. No hidden delays. Just a smooth process that gets you online and bringing in enquiries faster.</p>
                </div>
                <a href="#get-in-touch-form" className="gs-btn">Let's Get Started <span>→</span></a>
            </div>
        </section>
    );
}

// ── FAQ Section ───────────────────────────────────────
function FAQSection() {
    const [active, setActive] = useState(null);
    const toggle = (index) => setActive(active === index ? null : index);

    return (
        <section className="dm-faq-section">
            <div className="container" style={{ width: '100%' }}>
                <div className="dm-faq-head">
                    <h2>Frequently Asked <span>Questions</span></h2>
                </div>
                <div className="dm-faq-wrapper">
                    <div className="dm-faq-col">
                        {faqData.slice(0, 5).map((item, i) => (
                            <div className="dm-faq-item" key={i}>
                                <div className="dm-faq-question" onClick={() => toggle(i)}>
                                    <span>{item.q}</span>
                                    <span className="icon">{active === i ? "−" : "+"}</span>
                                </div>
                                {active === i && <div className="dm-faq-answer">{item.a}</div>}
                            </div>
                        ))}
                    </div>
                    <div className="dm-faq-col">
                        {faqData.slice(5, 10).map((item, i) => (
                            <div className="dm-faq-item" key={i + 5}>
                                <div className="dm-faq-question" onClick={() => toggle(i + 5)}>
                                    <span>{item.q}</span>
                                    <span className="icon">{active === i + 5 ? "−" : "+"}</span>
                                </div>
                                {active === i + 5 && <div className="dm-faq-answer">{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ── Testimonials ──────────────────────────────────────
const testimonials = [
    { index: 0, text: "PCS delivered a modern responsive website with SEO optimization, analytics integration, heatmap tracking, and performance monitoring. We appreciate their team's dedication, technical expertise, and timely support, which significantly improved our online visibility, website performance, and customer engagement.", name: "Mr.Ashwin", role: "Founder", badge: ["Website Development", "SEO"], color: "#004168", logo: "/img/landing-page/testi-logo-5.webp" },
    { index: 1, text: "Our basic single-page website was upgraded into a professionally structured multi-page platform with enhanced SEO, GMB optimization, analytics setup, and customer activity tracking. We thank the PCS team for their commitment, quick support, and valuable contribution in strengthening our online presence.", name: "Mr.Sabarinath", role: "Founder", badge: ["Website Development", "SEO", "Local SEO"], color: "#ed8337", logo: "/img/landing-page/testi-logo-4.webp" },
    { index: 2, text: "A fresh UI design with strong website development, improved online reach, lead capture setup, and user activity insights was successfully developed by the PCS team. Every change request was handled patiently while turning our ideas into exactly what we expected. The late-night support before launch was truly appreciated.", name: "Mr.Clement Selvam", role: "Founder", badge: ["Website Development", "SEO"], color: "#16a34a", logo: "/img/landing-page/testi-logo-3.webp" },
    { index: 3, text: "As a growing forest-based natural products brand, we partnered with PCS to expand our store presence and online sales. PCS team developed a complete e-commerce platform with Razorpay setup, order management, inventory tracking, centralized dashboard, WhatsApp integration for smooth business operations.", name: "Mr.Karupasamy", role: "Director", badge: ["E-Commerce", "SEO", "Local SEO"], color: "#0a3652", logo: "/img/landing-page/testi-logo-1.webp" },
    { index: 4, text: "Competing in the global market we required a website that matched international standards. With strategic content, SEO optimization, analytics integration, and performance enhancements, our digital presence was significantly strengthened. We appreciate the PCS team for their expertise, flexibility, consistent support throughout the process.", name: "Mr.Gunasekaran", role: "Founder", badge: ["SEO", "Content Marketing", "Paid Ads"], color: "#f47920", logo: "/img/landing-page/testi-logo-2.webp" },
];

function getTestimonialPos(cardIndex, activeIndex, total, isMobile) {
    const diff = cardIndex - activeIndex;
    if (diff === 0) return "center";
    if (isMobile) return diff < 0 ? "farLeft" : "farRight";
    if (diff === -1 || diff === total - 1) return "left";
    if (diff === 1 || diff === -(total - 1)) return "right";
    if (diff < 0) return "farLeft";
    return "farRight";
}

function getTestimonialPosStyles(isMobile, isTablet) {
    const leftX = isTablet ? -220 : -300;
    const rightX = isTablet ? 220 : 300;
    const farLeftX = isTablet ? -380 : -490;
    const farRightX = isTablet ? 380 : 490;
    return {
        center: { transform: "translateX(0) scale(1) rotateY(0deg)", opacity: 1, filter: "none", zIndex: 10, boxShadow: "0 24px 64px rgba(13,31,60,0.14)", pointerEvents: "auto" },
        left: { transform: `translateX(${leftX}px) scale(0.85) rotateY(18deg)`, opacity: 0.55, filter: "blur(2px)", zIndex: 5, boxShadow: "none", pointerEvents: "auto" },
        right: { transform: `translateX(${rightX}px) scale(0.85) rotateY(-18deg)`, opacity: 0.55, filter: "blur(2px)", zIndex: 5, boxShadow: "none", pointerEvents: "auto" },
        farLeft: { transform: `translateX(${farLeftX}px) scale(0.7) rotateY(28deg)`, opacity: 0, filter: "blur(4px)", zIndex: 1, boxShadow: "none", pointerEvents: "none" },
        farRight: { transform: `translateX(${farRightX}px) scale(0.7) rotateY(-28deg)`, opacity: 0, filter: "blur(4px)", zIndex: 1, boxShadow: "none", pointerEvents: "none" },
    };
}

function TestimonialCard({ data, pos, onClick, isMobile, isTablet, isActive }) {
    const posStyles = getTestimonialPosStyles(isMobile, isTablet);
    const cardWidth = isMobile
        ? Math.min((typeof window !== "undefined" ? window.innerWidth : 360) - 40, 320)
        : isTablet ? 300 : 340;
    return (
        <div
            onClick={onClick}
            data-active={isActive ? "true" : "false"}
            style={{
                position: "absolute",
                width: cardWidth,
                background: "#ffffff",
                borderRadius: 20,
                padding: isMobile ? "20px 18px" : 32,
                cursor: "pointer",
                transition: "all 0.55s cubic-bezier(0.4,0,0.2,1)",
                userSelect: "none",
                display: "flex",
                flexDirection: "column",
                boxSizing: "border-box",
                top: 0,
                willChange: "transform, opacity",
                ...posStyles[pos],
            }}
        >
            <div style={{ fontSize: isMobile ? 28 : 36, color: "#f47920", lineHeight: 1, fontFamily: "Georgia, serif", marginBottom: 8 }}>"</div>
            <div style={{ fontSize: isMobile ? 11.5 : 13, color: "#3d4f6a", lineHeight: isMobile ? 1.65 : 1.75, marginBottom: isMobile ? 14 : 22, flex: 1, fontWeight: 400 }}>{data.text}</div>
            <div style={{ height: 1, background: "#f0f2f7", marginBottom: isMobile ? 10 : 16 }} />

            <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <div style={{ fontSize: isMobile ? 13 : 15, fontWeight: 700, color: "#0d1f3c" }}>{data.name}</div>
                    <div style={{ fontSize: 11, color: "#6b7a94", lineHeight: 1.4, fontWeight: 400 }}>{data.role}</div>
                </div>

                {data.logo && (
                    <img
                        src={data.logo}
                        alt={`${data.name} company logo`}
                        loading="lazy"
                        decoding="async"
                        style={{
                            height: isMobile ? 24 : 30,
                            maxWidth: isMobile ? 60 : 80,
                            objectFit: "contain",
                            flexShrink: 0,
                        }}
                    />
                )}
            </div>
        </div>
    );
}

function TestimonialSlider() {
    const [current, setCurrent] = useState(2);
    const timerRef = useRef(null);
    const touchX = useRef(null);
    const stageRef = useRef(null);
    const visibleRef = useRef(true);
    const [stageHeight, setStageHeight] = useState(380);
    const total = testimonials.length;
    const width = useWindowWidth();
    const isMobile = width < 640;
    const isTablet = width >= 640 && width < 1024;

    useEffect(() => {
        if (!stageRef.current) return;
        const activeCard = stageRef.current.querySelector("[data-active='true']");
        if (activeCard) {
            const h = activeCard.getBoundingClientRect().height;
            if (h > 0) setStageHeight(h + 8);
        }
    }, [current, width]);

    // Autoplay only while the slider is on screen and the tab is visible
    const startAuto = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            if (visibleRef.current && !document.hidden) setCurrent((c) => (c + 1) % total);
        }, 3000);
    };
    useEffect(() => {
        startAuto();
        let io;
        if (stageRef.current && "IntersectionObserver" in window) {
            io = new IntersectionObserver(([e]) => { visibleRef.current = e.isIntersecting; });
            io.observe(stageRef.current);
        }
        return () => { clearInterval(timerRef.current); if (io) io.disconnect(); };
    }, []);

    const goTo = (idx) => { setCurrent(idx); startAuto(); };

    const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) < 40) return;
        if (dx < 0) goTo((current + 1) % total);
        else goTo((current - 1 + total) % total);
    };

    return (
        <section style={{ width: "100%", margin: "0 auto", padding: isMobile ? "40px 16px" : "60px 20px", fontFamily: "'Poppins', sans-serif", overflow: "hidden", background: '#fff' }} id="testimonials">
            <div className="partners-header1" style={{ marginBottom: isMobile ? 12 : 16, textAlign: "center" }}>
                <div className="partners-eyebrow" style={{ marginBottom: "12px", textAlign: "start" }}>Client Testimonials</div>
            </div>
            <h2 style={{ fontSize: isMobile ? 22 : isTablet ? 28 : "clamp(28px,3vw,40px)", fontWeight: 700, color: "#0d1f3c", lineHeight: 1.25, marginBottom: isMobile ? 28 : 48, textAlign: "center" }}>
                What Our Clients{" "}
                <span style={{ color: "#f47920", fontStyle: "italic", fontWeight: 700 }}>Say About PCS</span>
            </h2>

            <div
                ref={stageRef}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                style={{
                    position: "relative",
                    height: stageHeight,
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    perspective: 1200,
                    marginBottom: 28,
                    transition: "height 0.4s ease",
                }}
            >
                {testimonials.map((t, i) => {
                    const pos = getTestimonialPos(i, current, total, isMobile);
                    return (
                        <TestimonialCard
                            key={t.index}
                            data={t}
                            pos={pos}
                            isActive={pos === "center"}
                            onClick={() => { if (i !== current) goTo(i); }}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                    );
                })}
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: 8, alignItems: "center", paddingTop: "40px" }}>
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Show testimonial ${i + 1}`}
                        style={{
                            width: i === current ? 22 : 9,
                            height: 9,
                            borderRadius: 9,
                            padding: 0,
                            outline: "none",
                            cursor: "pointer",
                            flexShrink: 0,
                            transition: "all 0.3s ease",
                            background: i === current ? "#f47920" : "transparent",
                            border: i === current ? "none" : "1.8px solid #b0b8c9",
                        }}
                    />
                ))}
            </div>

            {isMobile && (
                <p style={{ textAlign: "center", fontSize: 11, color: "#b0b8c9", marginTop: 14, letterSpacing: "0.03em" }}>
                    ← swipe to explore →
                </p>
            )}
        </section>
    );
}

// ── CTA particle canvas (runs only while visible) ─────
function useCtaCanvas(canvasRef) {
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const ctx = canvas.getContext("2d");
        const ORANGE = "#ed8337";
        let W, H, particles = [], dots = [], raf, running = false;

        function resize() {
            W = canvas.width = canvas.parentElement.offsetWidth;
            H = canvas.height = canvas.parentElement.offsetHeight;
        }

        function Particle() { this.reset(); }
        Particle.prototype.reset = function () {
            this.x = Math.random() * W;
            this.y = Math.random() * H;
            this.r = Math.random() * 2.2 + 0.6;
            this.type = Math.random() < 0.55 ? "dot" : Math.random() < 0.5 ? "ring" : "plus";
            this.speed = Math.random() * 0.35 + 0.08;
            this.dir = Math.random() * Math.PI * 2;
            this.alpha = Math.random() * 0.45 + 0.1;
            this.pulse = Math.random() * Math.PI * 2;
            this.pulseSpeed = Math.random() * 0.018 + 0.008;
            this.size = Math.random() * 4 + 2;
        };
        Particle.prototype.update = function () {
            this.x += Math.cos(this.dir) * this.speed;
            this.y += Math.sin(this.dir) * this.speed;
            this.pulse += this.pulseSpeed;
            this.dir += (Math.random() - 0.5) * 0.015;
            if (this.x < -20) this.x = W + 20;
            if (this.x > W + 20) this.x = -20;
            if (this.y < -20) this.y = H + 20;
            if (this.y > H + 20) this.y = -20;
        };
        Particle.prototype.draw = function () {
            const a = this.alpha * (0.7 + 0.3 * Math.sin(this.pulse));
            ctx.save();
            ctx.globalAlpha = a;
            ctx.strokeStyle = ctx.fillStyle = ORANGE;
            ctx.lineWidth = 1;
            if (this.type === "dot") {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r + Math.sin(this.pulse) * 0.4, 0, Math.PI * 2);
                ctx.fill();
            } else if (this.type === "ring") {
                const rr = this.size * (0.9 + 0.15 * Math.sin(this.pulse));
                ctx.beginPath(); ctx.arc(this.x, this.y, rr, 0, Math.PI * 2); ctx.stroke();
            } else {
                const s = this.size * (0.9 + 0.1 * Math.sin(this.pulse));
                ctx.beginPath();
                ctx.moveTo(this.x - s, this.y); ctx.lineTo(this.x + s, this.y);
                ctx.moveTo(this.x, this.y - s); ctx.lineTo(this.x, this.y + s);
                ctx.stroke();
            }
            ctx.restore();
        };

        function drawLines() {
            for (let i = 0; i < dots.length; i++) {
                for (let j = i + 1; j < dots.length; j++) {
                    const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 110) {
                        ctx.save();
                        ctx.globalAlpha = (1 - dist / 110) * 0.12;
                        ctx.strokeStyle = ORANGE; ctx.lineWidth = 0.7;
                        ctx.beginPath(); ctx.moveTo(dots[i].x, dots[i].y); ctx.lineTo(dots[j].x, dots[j].y); ctx.stroke();
                        ctx.restore();
                    }
                }
            }
        }

        function init() {
            resize();
            particles = [];
            const count = Math.floor((W * H) / 9000);
            for (let i = 0; i < Math.max(count, 28); i++) particles.push(new Particle());
            dots = particles.filter(p => p.type === "dot"); // computed once, not every frame
        }

        function loop() {
            if (!running) return;
            ctx.clearRect(0, 0, W, H);
            drawLines();
            particles.forEach(p => { p.update(); p.draw(); });
            raf = requestAnimationFrame(loop);
        }

        function start() { if (!running) { running = true; loop(); } }
        function stop() { running = false; cancelAnimationFrame(raf); }

        window.addEventListener("resize", resize, { passive: true });
        init();

        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) start(); else stop();
        });
        io.observe(canvas);

        return () => { stop(); io.disconnect(); window.removeEventListener("resize", resize); };
    }, []);
}

function CallCTASection() {
    const canvasRef = useRef(null);
    useCtaCanvas(canvasRef);

    return (
        <section className="call-cta-section">
            <canvas ref={canvasRef} className="call-cta-particles" />

            <div className="call-cta-inner">
                <div className="partners-header1" style={{ textAlign: 'center' }}>
                    <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Not Sure Which Website You Need? </div>
                </div>

                <h2 className="call-cta-heading">
                    Tell Us About  <span>Your Business
                    </span>
                </h2>

                <p className="call-cta-sub">

                    We'll recommend the right website type, features and approximate investment based on your actual requirements.
                </p>

                <a href="tel:+919677444048" className="call-cta-phone">
                    <span className="call-cta-phone-icon">
                        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                    </span>
                    <span className="call-cta-phone-number">
                        <span className="tone-1">+91 </span>
                        <span className="tone-2">96774</span>{" "}
                        <span className="tone-3">44048</span>
                    </span>
                </a>

                <div className="call-cta-btns">
                    <a href="#get-in-touch-form" className="call-cta-btn-fill">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
                            <path d="M15 2v5h5" />
                            <path d="M10 9H8" />
                            <path d="M16 13H8" />
                            <path d="M16 17H8" />
                        </svg>
                        Get Your Website Started Today
                    </a>
                    <a
                        href="https://wa.me/919677444048"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="call-cta-btn-outline"
                    >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.79 14.13c-.24.68-1.19 1.25-1.94 1.41-.52.11-1.2.2-3.48-.75-2.92-1.21-4.8-4.17-4.95-4.36-.14-.19-1.19-1.58-1.19-3.02s.75-2.15 1.02-2.44c.24-.27.52-.34.7-.34h.5c.16 0 .38-.03.59.45.24.56.79 1.94.86 2.08.07.14.11.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.14-.29.29-.12.57.16.28.73 1.2 1.57 1.95 1.08.96 1.99 1.26 2.27 1.4.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.54.33.06.12.06.68-.18 1.36z" />
                        </svg>
                        WhatsApp Us
                    </a>
                </div>
            </div>
        </section>
    );
}

// ── Footer Section ────────────────────────────────────
function FooterSection() {
    return (
        <footer className="pcs-footer" id="contact">
            <div className="pcs-footer-inner">
                <div>
                    <div className="pcs-footer-logo-row">
                        <img src="/img/footer-logo.png" alt="PCS Logo" width="30%" loading="lazy" decoding="async" />
                    </div>
                    <p className="pcs-footer-desc">
                        We are one of the fastest-growing full-service business solutions companies, delivering cutting-edge, result-driven strategies across digital marketing, technology, branding, and consulting to create the perfect blend of innovation and impact.
                    </p>
                </div>

                <div>
                    <h4 className="pcs-footer-heading">Contact Info</h4>
                    <div className="pcs-footer-contact-item">
                        <div className="pcs-footer-contact-icon">
                            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </div>
                        <div className="pcs-footer-contact-text">
                            <a href="tel:+919677444048">+91 96774 44048</a>
                        </div>
                    </div>
                    <div className="pcs-footer-contact-item">
                        <div className="pcs-footer-contact-icon">
                            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        </div>
                        <div className="pcs-footer-contact-text">
                            <a href="https://maps.app.goo.gl/Qh3YkXsp1nktfp9k9">1st Floor, SF.11/4, Pooja Garden, Kalapatti Road, Civil Aerodrome Post, Coimbatore - 641014</a>
                        </div>
                    </div>
                    <div className="pcs-footer-contact-item">
                        <div className="pcs-footer-contact-icon">
                            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
                        </div>
                        <div className="pcs-footer-contact-text">
                            <a href="mailto:sales@priyamconsultancy.com">sales@priyamconsultancy.com</a>
                        </div>
                    </div>
                    <div className="pcs-footer-socials">
                        <a href="https://www.linkedin.com/company/priyam-consultancy-services/" target="_blank" rel="noopener noreferrer" className="pcs-footer-social-btn pcs-footer-social-linkedin" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="#fff"><path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" /></svg>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61577125709962" target="_blank" rel="noopener noreferrer" className="pcs-footer-social-btn pcs-footer-social-facebook" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" fill="#fff"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/priyam_consultancy_services/" target="_blank" rel="noopener noreferrer" className="pcs-footer-social-btn pcs-footer-social-instagram" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.6" /><circle cx="17.4" cy="6.6" r="0.9" fill="#fff" stroke="none" /></svg>
                        </a>
                        <a href="https://x.com/services91032" target="_blank" rel="noopener noreferrer" className="pcs-footer-social-btn pcs-footer-social-x" aria-label="X">
                            <svg viewBox="0 0 24 24" fill="#fff"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.5 22H1.4l8.1-9.3L1 2h7.2l5 6.6L18.9 2zm-1.2 18h1.7L7.4 4H5.6l12.1 16z" /></svg>
                        </a>
                    </div>
                </div>

                <div className="pcs-footer-form-col" id="get-in-touch-form">
                    <div className="hero-form-card">
                        <p className="hero-form-title">Your Growth, <span>Our Mission.</span></p>
                        <p className="hero-form-sub">Fill in your details — we'll get back within 24 hours.</p>
                        <HeroContactForm />
                    </div>
                </div>
            </div>
        </footer>
    );
}

// ── Page Export ───────────────────────────────────────
export default function DigitalMarketingNewPage() {
    return (
        <Layout
            title="Best Website Development Company in Coimbatore | PCS "
            description="Break away from ordinary business websites. Priyam Consultancy Services develops next-generation, SEO-optimized websites that help Coimbatore brands stand out."
        >
            <SEOHead />
            <GlobalStyles />
            <SiteHeader />
            <HeroSection />
            <TrustStripSection />
            <PricingSection />
            <RecentWorkSection />
            <ClientLogosGrid />
            <GetStartedBanner />
            <TestimonialSlider />
            <FAQSection />
            <CallCTASection />
            <FooterSection />
        </Layout>
    );
}