import { useState, useRef, useCallback, useEffect } from "react";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import emailjs from "@emailjs/browser";

const banner = "/img/digital-marketing.png";

function SEOHead() {
    const pageUrl = "https://priyamconsultancy.com/digital-marketing-company-in-coimbatore/";
    const imageUrl = "https://www.pcsbusinesssolution.com/img/digital-marketing.png";
    const schemaData = [
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@id": "https://priyamconsultancy.com/",
                        "name": "Home"
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@id": "https://priyamconsultancy.com/landing-page/website-development-company-in-coimbatore/",
                        "name": "Website Development Company in Coimbatore"
                    }
                }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Priyam Consultancy Services",
            "url": "https://priyamconsultancy.com/",
            "logo": "https://priyamconsultancy.com/img/priyam-consultancy-logo.png",
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
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://priyamconsultancy.com/img/priyam-consultancy-logo.png"
                }
            },
            "areaServed": {
                "@type": "City",
                "name": "Coimbatore"
            }

        },
        {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Website Development",
            "description": "Professional website development services including business websites, WordPress development, WooCommerce, Shopify, responsive web design, custom web applications, and SEO-optimized websites for businesses in Coimbatore.",
            "brand": {
                "@type": "Brand",
                "name": "Priyam Consultancy Services"
            },
            "provider": {
                "@type": "Organization",
                "name": "Priyam Consultancy Services",
                "url": "https://priyamconsultancy.com/"
            },
            "url": "https://priyamconsultancy.com/landing-page/website-development-company-in-coimbatore/"
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
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 11.043918,
                "longitude": 77.038417
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Monday",
                    "opens": "09:00",
                    "closes": "18:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Tuesday",
                    "opens": "09:00",
                    "closes": "18:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Wednesday",
                    "opens": "09:00",
                    "closes": "18:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Thursday",
                    "opens": "09:00",
                    "closes": "18:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Friday",
                    "opens": "09:00",
                    "closes": "18:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "09:00",
                    "closes": "18:00"
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
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "What does a website development company do?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A website development company plans, designs, and builds websites from the ground up, creating responsive, user-friendly, and business-focused websites tailored to an organization's goals."
                }
            }, {
                "@type": "Question",
                "name": "How is a static website different from a dynamic one?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A static website displays the same content to every visitor, while a dynamic website retrieves content from a database and can change based on the visitor, user interactions, or other dynamic factors."
                }
            }, {
                "@type": "Question",
                "name": "What should I look for in a website development service?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Look for a provider that offers clear communication, a portfolio of successful projects, transparent pricing, technical expertise, and reliable post-launch support and maintenance."
                }
            }, {
                "@type": "Question",
                "name": "How long does website design and development usually take?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Project timelines vary depending on the scope and complexity. A simple static website can often be completed within a few weeks, while a custom or eCommerce website may take several weeks to a few months."
                }
            }, {
                "@type": "Question",
                "name": "What makes an e-commerce development company different from a general web developer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "An e-commerce development company specializes in building online stores with features such as secure checkout, payment gateway integration, inventory management, product catalogs, and order processing."
                }
            }, {
                "@type": "Question",
                "name": "How do I know if I'm hiring the right website development company for my project?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ask for case studies, request client references, review previous work, evaluate their development process, and confirm they provide ongoing support and maintenance after your website is launched."
                }
            }]
        }

    ];
    return (
        <Head>
            <title>Best Website Development Company in Coimbatore | PCS </title>
            <meta name="description" content="Break away from ordinary business websites. Priyam Consultancy Services develops next-generation, SEO-optimized websites that help Coimbatore brands stand out." />
            <meta name="keywords" content="Web Development Company in Coimbatore, Digital Marketing Company Coimbatore, Digital Marketing in Coimbatore, SEO Company in Coimbatore, Recruitment Agency in Coimbatore, SEO Services in Coimbatore, Website Development Company in Coimbatore " />
            <link rel="canonical" href="https://www.priyamconsultancy.com/website-development-company-in-coimbatore/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Best Website Development Company in Coimbatore | PCS " />
            <meta property="og:description" content="Break away from ordinary business websites. Priyam Consultancy Services develops next-generation, SEO-optimized websites that help Coimbatore brands stand out." />
            <meta property="og:url" content="https://www.priyamconsultancy.com/website-development-company-in-coimbatore/" />
            <meta property="og:image" content={imageUrl} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Best Website Development Company in Coimbatore | PCS " />
            <meta name="twitter:description" content="Break away from ordinary business websites. Priyam Consultancy Services develops next-generation, SEO-optimized websites that help Coimbatore brands stand out." />
            <meta name="twitter:image" content={imageUrl} />
            {schemaData.map((schema, i) => (<script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>))}
        </Head>
    );
}

const GlobalStyles = () => (
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap');

    :root {
      --navy:      #004168;
      --navy-deep: #011a2a;
      --navy-mid:  #0a3652;
      --orange:    #ed8337;
      --orange-l:  #f5a66b;
    }

    header.headerWrapper_ROKX, .footerTop_uYEV, .footerBottom_YdiN{
    display: none;
}

    /* ── HERO ── */
    .pg-hero {
      min-height: 100svh;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 2rem;
      padding: 2rem 6% 4rem;
      position: relative;
      overflow: hidden;
      background: var(--navy);
    }
    .pg-hero::before {
      content: '';
      position: absolute; inset: 0; pointer-events: none;
      background:
        radial-gradient(ellipse 65% 70% at 100% 50%, rgba(237,131,55,0.10) 0%, transparent 60%),
        radial-gradient(ellipse 50% 60% at 0% 100%, rgba(10,66,102,0.5) 0%, transparent 55%);
    }
    .pg-hero::after {
      content: '';
      position: absolute; inset: 0; pointer-events: none;
      background-image:
        linear-gradient(rgba(237,131,55,0.028) 1px, transparent 1px),
        linear-gradient(90deg, rgba(237,131,55,0.028) 1px, transparent 1px);
      background-size: 52px 52px;
    }
    .pg-hero-left { position: relative; z-index: 2; display: flex; flex-direction: column; }
    .pg-h-badge {
      display: inline-flex; align-items: center; gap: .5rem;
      background: rgba(237,131,55,0.1); border: 1px solid rgba(237,131,55,0.28);
      color: var(--orange); font-size: .72rem; font-weight: 600;
      padding: .38rem 1rem; border-radius: 50px;
      letter-spacing: .09em; text-transform: uppercase;
      width: fit-content;
    }
    .pg-badge-dot {
      width: 6px; height: 6px; border-radius: 50%; background: var(--orange);
      animation: pg-pulse-dot 1.6s infinite;
    }
    @keyframes pg-pulse-dot {
      0%,100%{ opacity:1; transform:scale(1); }
      50%{ opacity:.4; transform:scale(1.5); }
    }
    .pg-hero-heading {
      font-family: 'Poppins', sans-serif;
      font-size: clamp(2.2rem, 3.8vw, 3rem);
      font-weight: 700; line-height: 1.15;
      margin-top: 1.4rem; color: #fff;
    }
    .pg-hero-heading .hl {
      color: var(--orange);
      position: relative; display: inline-block;
    }
    .pg-hero-heading .hl::after {
      content: ''; position: absolute; left: 0; bottom: -3px;
      width: 100%; height: 3px;
      background: var(--orange); border-radius: 2px;
      transform: scaleX(0); transform-origin: left;
      animation: pg-line-in 0.5s 0.9s ease forwards;
    }
    @keyframes pg-line-in { to { transform: scaleX(1); } }
    .pg-hero-sub {
      margin-top: 1.2rem; font-size: 1rem; line-height: 1.78;
      color: rgba(255,255,255,0.88); max-width: 520px;
    }
    .pg-hero-right {
      position: relative; z-index: 2;
      display: flex; align-items: center; justify-content: center;
    }

    /* ── FORM CARD ── */
    .pg-form-card {
      background: #fff; border-radius: 20px;
      padding: 2.2rem 2.4rem 2.4rem;
      width: 100%; max-width: 480px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.18);
    }
    .pg-form-title {
      font-family: 'Poppins', sans-serif;
      font-size: clamp(1.5rem, 2.5vw, 1.9rem);
      font-weight: 700; color: #022b44; line-height: 1.2; margin-bottom: .4rem;
    }
    .pg-form-title span { color: #ed8337; }
    .pg-form-sub { font-size: .85rem; color: #666; margin-bottom: 1.5rem; }
    .pg-form-row {     display: flex;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
    grid-auto-flow: row;
    flex-direction: column; }
    .pg-form-field { display: flex; flex-direction: column; gap: .3rem; }
    .pg-form-field input,
    .pg-form-field textarea {
      border: none; border-bottom: 1.5px solid #ccc; outline: none;
      padding: .55rem 0; font-size: .88rem;
      font-family: 'Poppins', sans-serif;
      color: #022b44; background: transparent; transition: border-color .2s; width: 100%;
    }
    .pg-form-field input:focus,
    .pg-form-field textarea:focus { border-bottom-color: #ed8337; }
    .pg-form-field input::placeholder,
    .pg-form-field textarea::placeholder { color: #aaa; font-size: .85rem; }
    .pg-form-field textarea { resize: none; min-height: 64px; }
    .pg-phone-wrap {
      display: flex; align-items: flex-end; gap: .5rem;
      border-bottom: 1.5px solid #ccc; transition: border-color .2s;
    }
    .pg-phone-wrap:focus-within { border-bottom-color: #ed8337; }
    .pg-phone-prefix {
      font-size: .88rem; font-weight: 700; color: #022b44;
      padding-bottom: .55rem; white-space: nowrap; flex-shrink: 0;
    }
    .pg-phone-wrap input { border: none !important; border-bottom: none !important; flex: 1; padding: .55rem 0 !important; }
    .pg-form-footer { display: flex; align-items: center; margin-top: 1.4rem; }
    .pg-form-btn {
      display: inline-flex; align-items: center; gap: .6rem;
      background: #ed8337; color: #fff; border: none;
      border-radius: 50px; padding: .85rem 1.8rem;
      font-family: 'Poppins', sans-serif; font-size: .9rem; font-weight: 600;
      cursor: pointer; transition: background .2s, transform .18s;
      text-decoration: none;
    }
    .pg-form-btn:hover { background: #004168; transform: translateY(-2px); }
    .pg-form-btn-arr {
      width: 26px; height: 26px; border-radius: 50%;
      background: rgba(255,255,255,0.15);
      display: flex; align-items: center; justify-content: center; font-size: .9rem;
    }

    /* ── SERVICES SECTION ── */
    .pg-svc-wrap { background: #f4f6f9; padding: 6rem 0 5rem; }
    .pg-svc-inner { max-width: 1200px; margin: 0 auto; padding: 0 5%; }
    .pg-svc-top {
      display: flex; align-items: flex-end;
      justify-content: space-between; gap: 2rem; margin-bottom: 4rem;
    }
    .pg-svc-eyebrow {
      font-size: .72rem; font-weight: 700;
      letter-spacing: .18em; text-transform: uppercase;
      color: var(--orange); margin-bottom: .8rem;
      display: flex; align-items: center; gap: 8px;
    }
    .pg-svc-eyebrow::before { content: ''; width: 24px; height: 2px; background: var(--orange); border-radius: 2px; }
    .pg-svc-main-title {
      font-family: 'Poppins', sans-serif;
      font-size: clamp(2.2rem, 3.5vw, 3rem);
      font-weight: 700; line-height: 1.1; color: #0d1f2d;
    }
    .pg-svc-main-title em { color: var(--orange); font-style: normal; }
    .pg-svc-right-text { max-width: 380px; text-align: right; }
    .pg-svc-desc { font-size: .96rem; line-height: 1.75; color: #555; margin-bottom: 1.4rem; }
    .pg-svc-cta-link {
      display: inline-flex; align-items: center; gap: .5rem;
      font-size: .82rem; font-weight: 700;
      letter-spacing: .1em; text-transform: uppercase;
      color: var(--navy); text-decoration: none;
      border-bottom: 2px solid var(--orange); padding-bottom: 3px;
      transition: color .2s;
    }
    .pg-svc-cta-link:hover { color: var(--orange); }
    .pg-mag-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 1.2rem; }
    .pg-mag-card {
      position: relative; border-radius: 18px; overflow: hidden;
      background: #fff; display: flex; flex-direction: column;
      transition: transform .3s ease, box-shadow .3s ease;
    }
    .pg-mag-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.12); }
    .pg-mag-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
      background: linear-gradient(90deg, var(--orange), var(--orange-l));
      opacity: 0; transition: opacity .3s;
    }
    .pg-mag-card:hover::before { opacity: 1; }
    .pg-card-1 { grid-column: 1 / 5; }
    .pg-card-2 { grid-column: 5 / 9; }
    .pg-card-3 { grid-column: 9 / 13; grid-row: 1 / 3; }
    .pg-card-4 { grid-column: 1 / 5; }
    .pg-card-5 { grid-column: 5 / 7; }
    .pg-card-6 { grid-column: 7 / 9; }
    .pg-card-pad { padding: 1.8rem; display: flex; flex-direction: column; height: 100%; }
    .pg-card-icon {
      width: 52px; height: 52px; border-radius: 14px;
      background: rgba(237,131,55,0.1);
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 1.1rem; transition: background .3s; flex-shrink: 0;
    }
    .pg-mag-card:hover .pg-card-icon { background: rgba(237,131,55,0.2); }
    .pg-card-num { font-family: 'DM Sans', sans-serif; font-size: .6rem; font-weight: 700; letter-spacing: .16em; color: rgba(237,131,55,0.55); text-transform: uppercase; margin-bottom: .5rem; }
    .pg-card-title { font-family: 'Poppins', sans-serif; font-size: 1.05rem; font-weight: 700; color: #0d1f2d; margin-bottom: .7rem; line-height: 1.3; }
    .pg-card-desc { font-size: .84rem; line-height: 1.78; color: #666; flex: 1; }
    .pg-card-learn {
      display: inline-flex; align-items: center; gap: .4rem;
      font-size: .72rem; font-weight: 700; letter-spacing: .1em;
      text-transform: uppercase; color: var(--navy); text-decoration: none;
      margin-top: 1.2rem; transition: color .25s;
    }
    .pg-card-learn:hover { color: var(--orange); }
    .pg-card-learn-ico {
      width: 22px; height: 22px; border-radius: 50%;
      border: 1.5px solid currentColor;
      display: flex; align-items: center; justify-content: center;
      font-size: .7rem; transition: transform .25s;
    }
    .pg-mag-card:hover .pg-card-learn-ico { transform: rotate(45deg); }
    .pg-card-accent { background: var(--navy) !important; }
    .pg-card-accent .pg-card-num { color: rgba(237,131,55,0.55); }
    .pg-card-accent .pg-card-title { color: #fff; }
    .pg-card-accent .pg-card-desc { color: rgba(255,255,255,0.65); }
    .pg-card-accent .pg-card-learn { color: var(--orange); }
    .pg-card-accent .pg-card-icon { background: rgba(237,131,55,0.15); }
    .pg-card-3 .pg-card-pad { padding: 2rem; }
    .pg-card-3 .pg-card-icon { width: 60px; height: 60px; border-radius: 16px; }
    .pg-card-5 .pg-card-title, .pg-card-6 .pg-card-title { font-size: .92rem; }
    .pg-stat-callout { margin-top: 1.4rem; padding: 1.2rem; background: #f9f5f2; border-radius: 12px; border-left: 3px solid var(--orange); }
    .pg-stat-callout-label { font-size: .72rem; font-weight: 700; color: var(--orange); margin-bottom: .4rem; letter-spacing: .06em; }
    .pg-stat-callout-text { font-size: .83rem; line-height: 1.65; color: #555; }

    /* ── APP BANNER ── */
    .pg-app-section {  padding: 150px 5% 5rem; }
    .pg-app-outer { max-width: 1200px; margin: 0 auto; position: relative; }
    .pg-app-card {
      background: var(--navy); border-radius: 24px;
      padding: 3.5rem 3.5rem 3.5rem 4rem;
      display: grid; grid-template-columns: 1fr 550px;
      align-items: center; position: relative; overflow: visible; min-height: 260px;
    }
    .pg-app-card::before {
      content: ''; position: absolute; inset: 0; border-radius: 24px; pointer-events: none;
      background:
        radial-gradient(ellipse 55% 80% at 105% 55%, rgba(237,131,55,0.10) 0%, transparent 60%),
        radial-gradient(ellipse 40% 50% at 0% 0%, rgba(1,26,42,0.55) 0%, transparent 55%);
    }
    .pg-app-card::after {
      content: ''; position: absolute; inset: 0; border-radius: 24px; pointer-events: none;
      background-image:
        linear-gradient(rgba(237,131,55,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(237,131,55,0.025) 1px, transparent 1px);
      background-size: 48px 48px;
    }
    .pg-app-left { position: relative; z-index: 2; }
    .pg-app-badge {
      display: inline-flex; align-items: center; gap: 6px;
      background: rgba(237,131,55,0.12); border: 1px solid rgba(237,131,55,0.28);
      color: var(--orange); font-size: .62rem; font-weight: 600;
      padding: .3rem .9rem; border-radius: 50px;
      letter-spacing: .1em; text-transform: uppercase; margin-bottom: 1.2rem;
    }
    .pg-app-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--orange); animation: pg-pulse-dot 1.6s infinite; }
    .pg-app-heading { font-family: 'Poppins', sans-serif; font-size: clamp(1.8rem, 3vw, 2.4rem); font-weight: 700; line-height: 1.2; color: #fff; margin: 0 0 .6rem; }
    .pg-app-heading em { color: var(--orange); font-style: italic; }
    .pg-app-sub { font-size: .9rem; line-height: 1.72; color: rgba(255,255,255,0.75);  margin: 0 0 2rem; }
    .pg-app-btns { display: flex; gap: .9rem; flex-wrap: wrap; }
    .pg-app-store-btn {
      display: inline-flex; align-items: center; gap: .55rem;
      background: #000; border: 1.5px solid rgba(255,255,255,0.2);
      border-radius: 10px; padding: .6rem 1.3rem;
      cursor: pointer; transition: border-color .2s, transform .18s; text-decoration: none;
    }
    .pg-app-store-btn:hover { border-color: rgba(237,131,55,0.6); transform: translateY(-2px); }
    .pg-app-store-btn svg { width: 22px; height: 22px; fill: #fff; flex-shrink: 0; }
    .pg-app-btn-text { display: flex; flex-direction: column; }
    .pg-app-btn-label { font-size: .52rem; color: rgba(255,255,255,0.65); letter-spacing: .05em; line-height: 1; font-family: 'Poppins', sans-serif; }
    .pg-app-btn-name { font-size: .85rem; font-weight: 600; color: #fff; line-height: 1.3; font-family: 'Poppins', sans-serif; }
    .pg-app-right { position: relative; z-index: 10; display: flex; justify-content: center; align-items: flex-end; }
    .pg-phone-wrapper { position: absolute; top: -225px; transform: translateY(-40px); }
    .pg-phone-frame { width: 100%; height: 100%; background: #fff; border-radius: 38px; border: 8px solid #111; overflow: hidden; position: relative; box-shadow: 0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08); }
    .pg-ph-notch { width: 65px; height: 16px; background: #111; border-radius: 0 0 12px 12px; margin: 0 auto; position: relative; z-index: 5; }
    .pg-ph-screen { background: #f5f5f0; height: calc(100% - 16px); display: flex; flex-direction: column; overflow: hidden; }
    .pg-ph-top { background: #fff; padding: .6rem .85rem .5rem; border-bottom: 1px solid #ebebeb; }
    .pg-ph-hello { font-size: .52rem; color: #999; margin: 0; font-family: 'Poppins', sans-serif; }
    .pg-ph-name { font-size: .82rem; font-weight: 700; color: #111; margin: 0; font-family: 'Poppins', sans-serif; }
    .pg-ph-tabs { display: flex; gap: .28rem; margin-top: .45rem; }
    .pg-ph-tab { font-size: .46rem; padding: .2rem .5rem; border-radius: 20px; background: #ebebeb; color: #666; font-weight: 600; font-family: 'Poppins', sans-serif; }
    .pg-ph-tab.active { background: var(--navy); color: #fff; }
    .pg-ph-body { padding: .65rem .85rem; flex: 1; overflow: hidden; }
    .pg-ph-section-label { font-size: .55rem; font-weight: 700; color: #111; margin: 0 0 .4rem; font-family: 'Poppins', sans-serif; }
    .pg-ph-card { border-radius: 12px; overflow: hidden; margin-bottom: .5rem; background: #1a2f20; }
    .pg-ph-card-img { height: 75px; background: linear-gradient(135deg, #004168 0%, #0a5c8a 60%, #1a7aaa 100%); display: flex; align-items: flex-end; padding: .45rem .55rem; position: relative; }
    .pg-ph-card-title { font-size: .65rem; font-weight: 700; color: #fff; line-height: 1.25; font-family: 'Poppins', sans-serif; }
    .pg-ph-play { position: absolute; right: .5rem; bottom: .5rem; width: 24px; height: 24px; border-radius: 50%; background: rgba(255,255,255,0.92); display: flex; align-items: center; justify-content: center; }
    .pg-ph-play::after { content: ''; border-left: 7px solid #004168; border-top: 4px solid transparent; border-bottom: 4px solid transparent; margin-left: 2px; }
    .pg-ph-pills { display: flex; gap: .28rem; padding: .3rem .45rem; }
    .pg-ph-pill { font-size: .42rem; padding: .14rem .38rem; border-radius: 20px; font-weight: 600; font-family: 'Poppins', sans-serif; }
    .pg-ph-pill-g { background: #e1f5ee; color: #0f6e56; }
    .pg-ph-pill-o { background: #faeeda; color: #854f0b; }
    .pg-ph-today { background: #fff; border-radius: 9px; padding: .45rem .55rem; }
    .pg-ph-today-label { font-size: .46rem; font-weight: 700; color: #999; text-transform: uppercase; letter-spacing: .07em; margin-bottom: .3rem; font-family: 'Poppins', sans-serif; }
    .pg-ph-bar { height: 5px; border-radius: 3px; background: #ebebeb; margin: .12rem 0; }
    .pg-ph-bar.f { background: var(--orange); }
    .pg-ph-bar.w8 { width: 80%; }
    .pg-ph-bar.w5 { width: 50%; background: var(--orange-l); }
    .pg-ph-bar.w7 { width: 70%; }
    .pg-ph-nav { background: #fff; border-top: 1px solid #ebebeb; padding: .32rem; display: flex; justify-content: space-around; align-items: center; }
    .pg-ph-nav-item { width: 26px; height: 26px; border-radius: 7px; display: flex; align-items: center; justify-content: center; font-size: 13px; }
    .pg-ph-nav-item.active { background: rgba(0,65,104,0.12); }

    /* ── CTA SPLIT SECTION ── */
    .pg-cta-section { background: #fff; }
    .pg-cta-inner { max-width: 1200px;     margin: 4rem auto 0; display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 5rem; }
    .pg-cta-img-wrap { position: relative; border-radius: 20px; overflow: visible; }
    .pg-cta-img { width: 100%; aspect-ratio: 4/3; object-fit: cover; border-radius: 20px; display: block; }
    .pg-cta-float-badge { position: absolute; bottom: 1.4rem; left: 1.4rem; background: #fff; border-radius: 12px; padding: .6rem 1rem; display: flex; align-items: center; gap: .5rem; box-shadow: 0 4px 18px rgba(0,65,104,.13); }
    .pg-cta-badge-dot { width: 10px; height: 10px; border-radius: 50%; background: #22c55e; flex-shrink: 0; }
    .pg-cta-badge-title { font-size: .78rem; font-weight: 700; color: #022b44; font-family: 'Poppins', sans-serif; margin: 0; }
    .pg-cta-badge-sub { font-size: .68rem; color: #888; font-family: 'Poppins', sans-serif; margin: 0; }
    .pg-cta-float-stat { position: absolute; top: 1.4rem; right: 1.4rem; background: #004168; border-radius: 12px; padding: .6rem 1rem; text-align: center; }
    .pg-cta-stat-num { font-size: 1.3rem; font-weight: 800; color: #ed8337; font-family: 'Poppins', sans-serif; line-height: 1; margin: 0; }
    .pg-cta-stat-label { font-size: .62rem; color: rgba(255,255,255,.75); font-family: 'Poppins', sans-serif; margin: .2rem 0 0; line-height: 1.3; }
    .pg-cta-heading { font-family: 'Poppins', sans-serif; font-size: clamp(2rem, 3.2vw, 2.2rem); font-weight: 700; line-height: 1.15; color: #0d1f2d; margin-bottom: 1.2rem; }
    .pg-cta-heading em { color: #ed8337; font-style: normal; }
    .pg-cta-desc { font-size: .96rem; line-height: 1.78; color: #555; margin-bottom: 1rem; }
    .pg-cta-desc2 { font-size: .93rem; line-height: 1.75; color: #666; margin-bottom: 2rem; }
    .pg-cta-features { display: flex; flex-direction: column; gap: .7rem; margin-bottom: 2.2rem; }
    .pg-cta-feat { display: flex; align-items: center; gap: .75rem; font-size: .9rem; color: #333; font-family: 'Poppins', sans-serif; }
    .pg-cta-feat-icon { width: 28px; height: 28px; border-radius: 50%; background: rgba(237,131,55,.12); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #ed8337; font-weight: 700; font-size: 14px; }
    .pg-cta-btns { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
    .pg-cta-btn-sec { color: #004168; font-family: 'Poppins', sans-serif; font-size: .9rem; font-weight: 600; text-decoration: none; border-bottom: 2px solid #ed8337; padding-bottom: 2px; transition: color .2s; }
    .pg-cta-btn-sec:hover { color: #ed8337; }

    /* ── MODERN FEATURES SECTION ── */
    .mf-outer { background: #fff; padding: 50px 20px 80px; font-family: 'Poppins', Arial, sans-serif; }
    .mf-head { text-align: center; margin-bottom: 40px; }
    .mf-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 2px; color: #ed8337; text-transform: uppercase; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; gap: 8px; }
    .mf-eyebrow::before, .mf-eyebrow::after { content: ''; width: 24px; height: 2px; background: #ed8337; border-radius: 2px; }
    .mf-h2 { font-size: clamp(1.7rem, 4vw, 2.5rem); font-weight: 700; color: #0d1f2d; margin: 0 0 8px; }
    .mf-h2 span { color: #ed8337; }
    .mf-sub { font-size: 16px;
    color: #030303b0;
    margin: 0;
    padding: 10px 100px; }
    .mf-body { display: flex; align-items: center; justify-content: center; gap: 40px; max-width: 1300px; margin: 0 auto; }
    .mf-col { display: flex; flex-direction: column; gap: 35px; width: 33%; }
    .mf-item { display: flex; align-items: flex-start; gap: 10px; }
    .mf-icon-box { width: 40px; height: 40px; min-width: 40px; border-radius: 10px; background: #eef3f8; display: flex; align-items: center; justify-content: center; }
    .mf-icon-box svg { width: 20px; height: 20px; }
    .mf-t { font-size: 16.5px; font-weight: 700; color: #0d1f2d; margin: 0 0 3px; line-height: 1.3; }
    .mf-d {     font-size: 14.5px;
    color: #291f1f;
    line-height: 1.55;
    margin: 0; }
    .mf-phone { width: 22%; flex-shrink: 0; }
    .mf-phone-outer { background: #111; border-radius: 32px; padding: 9px; }
    .mf-screen { background: #0d0d1c; border-radius: 24px; overflow: hidden; }
    .mf-notch { width: 50px; height: 12px; background: #111; border-radius: 0 0 9px 9px; margin: 0 auto; }
    .mf-topbar { display: flex; align-items: center; justify-content: space-between; padding: 9px 12px 4px; }
    .mf-tbtitle { font-size: 10px; font-weight: 600; color: #fff; }
    .mf-tbback { font-size: 14px; color: rgba(255,255,255,0.53); }
    .mf-tbmore { display: flex; gap: 2px; }
    .mf-tbdot { width: 3px; height: 3px; border-radius: 50%; background: rgba(255,255,255,0.27); }
    .mf-card { margin: 0 10px 8px; background: #1a1a2e; border-radius: 14px; padding: 12px; }
    .mf-cl { font-size: 8px; color: #aaa; margin: 0 0 2px; }
    .mf-cn { font-size: 8px; color: #aaa; margin: 0 0 8px; }
    .mf-ctype { font-size: 9px; font-weight: 600; color: #fff; margin: 0 0 10px; }
    .mf-circles { display: flex; justify-content: flex-end; margin-bottom: 6px; }
    .mf-circ { width: 16px; height: 16px; border-radius: 50%; }
    .mf-al { font-size: 8px; color: #aaa; margin: 0 0 1px; }
    .mf-av { font-size: 18px; font-weight: 700; color: #fff; margin: 0; }
    .mf-sec { padding: 0 10px 6px; }
    .mf-sl { font-size: 8px; color: #aaa; margin: 0 0 6px; }
    .mf-txn { display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; }
    .mf-txl { display: flex; align-items: center; gap: 6px; }
    .mf-av2 { width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 8px; font-weight: 700; color: #fff; flex-shrink: 0; }
    .mf-tn { font-size: 8.5px; font-weight: 600; color: #fff; margin: 0; }
    .mf-td { font-size: 7px; color: #555; margin: 0; }
    .mf-ta { font-size: 9px; font-weight: 700; }
    .mf-g { color: #4ade80; }
    .mf-r { color: #f87171; }
    .mf-nav { display: flex; justify-content: space-around; padding: 7px 10px; border-top: 1px solid rgba(255,255,255,0.05); margin-top: 2px; }
    .mf-nd { width: 5px; height: 5px; border-radius: 50%; background: rgba(255,255,255,0.13); }
    .mf-nd.a { background: #ed8337; width: 16px; border-radius: 3px; }

    /* ══ KEY FEATURES CAROUSEL ══ */
    .kf-section { position:relative; padding:4rem 0; overflow:hidden; background:#004168; }
    .kf-section::before { content:''; position:absolute; inset:0; pointer-events:none; background-image:linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px); background-size:55px 55px; }
    .kf-orbs { position:absolute; inset:0; pointer-events:none; z-index:0; }
    .kf-orb { position:absolute; border-radius:50%; filter:blur(80px); animation:kf-orb-drift 8s ease-in-out infinite alternate; }
    .kf-orb-1 { width:420px; height:420px; top:-80px; left:-60px; background:radial-gradient(circle,rgba(237,131,55,0.18) 0%,transparent 70%); }
    .kf-orb-2 { width:360px; height:360px; bottom:-60px; right:-40px; background:radial-gradient(circle,rgba(96,165,250,0.14) 0%,transparent 70%); animation-delay:-3s; }
    .kf-orb-3 { width:280px; height:280px; top:40%; left:40%; background:radial-gradient(circle,rgba(167,139,250,0.1) 0%,transparent 70%); animation-delay:-5s; }
    @keyframes kf-orb-drift{from{transform:translate(0,0) scale(1);}to{transform:translate(30px,20px) scale(1.1);}}
    .kf-inner { position:relative; z-index:2; width:100%; overflow:hidden; background:#004168; }
    .kf-header { text-align:center; margin-bottom:1.8rem; padding:0 6%; }
    .kf-eyebrow { display:inline-flex; align-items:center; gap:.5rem; font-family:'Space Mono',monospace; font-size:.72rem; font-weight:700; color:var(--orange); letter-spacing:.13em; text-transform:uppercase; margin-bottom:1rem; }
    .kf-eyebrow-line { width:24px; height:2px; background:var(--orange); border-radius:2px; }
    .kf-title { font-family:'Poppins',sans-serif; font-size:clamp(2.2rem,3.4vw,3.4rem); font-weight:600; line-height:1.1; color:#fff; margin-bottom:1rem; }
    .kf-title span { color:var(--orange); }
    .kf-sub { font-size:.89rem; line-height:1.76; color:#fff; font-family:'Poppins'; }
    .kf-carousel-wrap { position:relative; width:100%; height:400px; overflow:visible; }
    .kf-card {
      position:absolute; left:50%; top:50%;
      transform:translateX(-50%) translateY(-50%);
      width:340px; border-radius:26px; padding:2.2rem 1.8rem 1.8rem;
      display:flex; flex-direction:column; gap:1.1rem;
      background:linear-gradient(145deg,rgba(10,54,82,0.55),rgb(76 186 235 / 23%));
      backdrop-filter:blur(22px) saturate(180%);
      border:1px solid rgba(255,255,255,0.14);
      box-shadow:0 8px 40px rgba(0,0,0,0.45),inset 0 1px 0 rgba(255,255,255,0.16);
      cursor:grab; user-select:none;
      transition:transform 0.55s cubic-bezier(.34,1.3,.64,1),opacity 0.45s ease,box-shadow 0.4s ease,border-color 0.3s ease,filter 0.45s ease;
      overflow:hidden; transform-origin:center center;
      filter:blur(2px) brightness(0.7);
    }
    .kf-card.is-active { filter:blur(0px) brightness(1); }
    .kf-card:active { cursor:grabbing; }
    .kf-card::before { content:''; position:absolute; top:0; left:10%; right:10%; height:1px; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.38),transparent); }
    .kf-card::after { content:''; position:absolute; width:200px; height:200px; border-radius:50%; background:radial-gradient(circle,rgba(237,131,55,0.15) 0%,transparent 70%); top:-80px; right:-60px; pointer-events:none; }
    .kf-icon-wrap { flex-shrink:0; width:56px; height:56px; border-radius:16px; background:linear-gradient(135deg,rgba(237,131,55,0.22) 0%,rgba(237,131,55,0.06) 100%); border:1px solid rgba(237,131,55,0.3); display:flex; align-items:center; justify-content:center; font-size:1.6rem; box-shadow:0 4px 18px rgba(237,131,55,0.18),inset 0 1px 0 rgba(255,255,255,0.15); transition:transform .4s cubic-bezier(.34,1.3,.64,1); }
    .kf-card.is-active .kf-icon-wrap { transform:scale(1.08) rotate(-5deg); }
    .kf-card-body { position:relative; z-index:1; flex:1; }
    .kf-card-title { font-family:'Poppins',sans-serif; font-size:1.05rem; font-weight:700; color:#ed8337; margin-bottom:.45rem; line-height:1.3; }
    .kf-card-desc { font-size:.89rem; line-height:1.76; color:#fff; font-family:'Poppins'; }
    .kf-card-accent { height:2px; border-radius:2px; margin-top:1rem; background:linear-gradient(90deg,var(--orange),rgba(237,131,55,0)); transition:width .6s ease .1s; }
    .kf-nav { display:flex; justify-content:center; align-items:center; gap:1.2rem; margin-top:2.4rem; padding:0 6%; }
    .kf-nav-btn { width:44px; height:44px; border-radius:50%; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.14); backdrop-filter:blur(10px); color:#fff; font-size:1.1rem; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .25s; }
    .kf-nav-btn:hover { background:var(--orange); border-color:var(--orange); transform:scale(1.1); }
    .kf-dots { display:flex; gap:.5rem; align-items:center; }
    .kf-dot { width:8px; height:8px; border-radius:50%; background:rgba(255,255,255,0.2); border:none; padding:0; cursor:pointer; transition:all .3s; }
    .kf-dot.active { background:var(--orange); width:22px; border-radius:4px; }
    .kf-drag-hint { text-align:center; margin-top:.8rem; font-size:.72rem; color:rgba(255,255,255,0.25); font-family:'Space Mono',monospace; letter-spacing:.06em; padding:0 6%; }
h2.pg-cta-heading { font-size:clamp(1.8rem,3vw,2.2rem); }
    /* ══ FAQ SECTION ══ */
    .dm-faq-section { background:#fff; padding:5rem 6%; }
    .dm-faq-head { text-align:center; margin-bottom:2.5rem; }
    .dm-faq-head h2 { font-family:'Poppins',sans-serif; font-size:clamp(1.8rem,3vw,2.5rem); font-weight:700; color:#011a2a; line-height:1.15; }
    .dm-faq-head h2 span { color:var(--orange); font-style:italic; }
    .dm-faq-head h3 { font-family:'Poppins',sans-serif; font-size:clamp(1.8rem,3vw,2.5rem); font-weight:700; color:#011a2a; line-height:1.15; }
    .dm-faq-head h3 span { color:var(--orange); font-style:italic; }
    .dm-faq-wrapper { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; }
    .dm-faq-col { display:flex; flex-direction:column; gap:1rem; }
    .dm-faq-item { border-radius:14px; overflow:hidden; transition:border-color .22s; }
    .dm-faq-item:hover { border-color:rgba(237,131,55,0.4); }
    .dm-faq-question {     background: #f8faff;
    border-radius: 10px;display:flex; justify-content:space-between; align-items:center; padding:1.1rem 1.4rem; cursor:pointer; font-family:'Poppins',sans-serif; font-size:.92rem; font-weight:600; color:#011a2a; gap:1rem; user-select:none; }
    .dm-faq-question .icon { font-size:1.3rem; color:var(--orange); flex-shrink:0; }
    .dm-faq-answer { padding:.2rem 1.4rem 1.1rem; font-size:.88rem; color:#5a6070; line-height:1.78;  }

    @media (max-width: 1024px) {
      .mf-body { flex-direction: column; align-items: center; gap: 28px; }
      .mf-col { width: 100%; max-width: 420px; }
      .mf-item.rev { flex-direction: row; text-align: left; }
      .mf-phone { order: -1; width: 60%; max-width: 220px; }
      .mf-sub { padding: 10px 0; }
    }
    @media (max-width: 480px) {
      .mf-phone { width: 75%; max-width: 200px; }
      h2.pg-cta-heading { font-size: clamp(1.6rem, 5vw, 2.2rem); }
    }

    /* ── TECHNOLOGIES MARQUEE ── */
    .tech-section {
      background: #fff;
      padding: 70px 0 80px;
      overflow: hidden;
    }
    .tech-header {
      text-align: center;
      padding: 0 5%;
      margin-bottom: 48px;
    }
    .tech-eyebrow {
      display: inline-flex; align-items: center; gap: 8px;
      font-size: .72rem; font-weight: 700;
      letter-spacing: .18em; text-transform: uppercase;
      color: var(--orange); margin-bottom: 14px;
    }
    .tech-eyebrow::before,
    .tech-eyebrow::after { content: ''; width: 24px; height: 2px; background: var(--orange); border-radius: 2px; }
    .tech-title {
      font-family: 'Poppins', sans-serif;
      font-size: clamp(1.9rem, 3.2vw, 2.5rem);
      font-weight: 700; color: #0d1f2d;
      line-height: 1.15; margin-bottom: 14px;
    }
    .tech-title span { color: var(--orange); }
    .tech-desc {
      font-size: .96rem; line-height: 1.78;
      color: #666; max-width: 680px; margin: 0 auto;
    }
    .tech-track-wrap {
      position: relative;
      overflow: hidden;
    }
    .tech-track-wrap::before,
    .tech-track-wrap::after {
      content: '';
      position: absolute; top: 0; bottom: 0; width: 120px; z-index: 2; pointer-events: none;
    }
    .tech-track-wrap::before { left: 0; background: linear-gradient(90deg, #fff 0%, transparent 100%); }
    .tech-track-wrap::after  { right: 0; background: linear-gradient(-90deg, #fff 0%, transparent 100%); }
    .tech-row {
      display: flex;
      gap: 20px;
      padding: 12px 0;
    }
    .tech-row-inner {
      display: flex;
      gap: 20px;
      flex-shrink: 0;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    .tech-row-inner.row-right  { animation-name: tech-scroll-right; }
    .tech-row-inner.row-left   { animation-name: tech-scroll-left;  }
    .tech-row-inner.speed-1    { animation-duration: 32s; }
    .tech-row-inner.speed-2    { animation-duration: 38s; }
    @keyframes tech-scroll-right {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes tech-scroll-left {
      0%   { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    .tech-track-wrap:hover .tech-row-inner { animation-play-state: paused; }
    .tech-card {
      flex-shrink: 0;
      display: flex; align-items: center; justify-content: center; gap: 10px;
      background: #f5f0e8;
      border: 1.5px solid #e8e2d8;
      border-radius: 14px;
      padding: 18px 28px;
      min-width: 180px;
      transition: box-shadow .25s, transform .25s, border-color .25s;
      cursor: default;
    }
    .tech-card:hover {
      box-shadow: 0 8px 28px rgba(0,65,104,0.13);
      transform: translateY(-4px);
      border-color: rgba(237,131,55,0.45);
    }
    .tech-card-logo {
      width: 36px; height: 36px; object-fit: contain; flex-shrink: 0;
    }
    .tech-card-name {
      font-family: 'Poppins', sans-serif;
      font-size: .88rem; font-weight: 600;
      color: #0d1f2d; white-space: nowrap;
    }

    /* ── RESPONSIVE ── */
    @media (max-width: 960px) {
      .tech-card { min-width: 150px; padding: 14px 20px; }
      .tech-title { font-size: clamp(1.5rem, 5vw, 2rem); }
      .pg-hero { grid-template-columns: 1fr; padding: 6rem 5% 4rem; min-height: auto; gap: 2.5rem; }
      .pg-hero-left { order: 1; } .pg-hero-right { order: 2; }
      .pg-form-card { max-width: 100%; }
      .pg-svc-top { flex-direction: column; align-items: flex-start; }
      .pg-svc-right-text { text-align: left; max-width: 100%; }
      .pg-mag-grid { grid-template-columns: 1fr 1fr; }
      .pg-card-1,.pg-card-2,.pg-card-3,.pg-card-4,.pg-card-5,.pg-card-6 { grid-column: auto !important; grid-row: auto !important; }
      .pg-app-card { grid-template-columns: 1fr; padding: 2.5rem 2rem 220px; }
      .pg-phone-wrapper { width: 170px; height: 340px; right: 50%; transform: translateX(50%) translateY(-20px); }
      .pg-cta-inner { grid-template-columns: 1fr; gap: 3rem; }
      .kf-section { padding: 3rem 0 4rem; }
      .kf-inner { padding: 2rem; }
      .kf-carousel-wrap { height: 360px; }
      .kf-card { width: 290px; }
      .kf-title { font-size: clamp(1.6rem, 5vw, 2.4rem); }
      .dm-faq-wrapper { grid-template-columns: 1fr; gap: 0.8rem; }
      .dm-faq-section { padding: 4rem 5% 3rem; }
    }
    @media (max-width: 600px) {
      .pg-hero { padding: 5rem 4% 3rem; gap: 2rem; }
      .pg-hero-heading { font-size: clamp(1.7rem, 6vw, 2.2rem) !important; }
      .pg-form-row { grid-template-columns: 1fr; }
      .pg-mag-grid { grid-template-columns: 1fr; }
      .pg-svc-wrap { padding: 4rem 0 3rem; }
      .pg-app-section { padding: 60px 4% 3rem; }
      .pg-cta-section { padding: 4rem 4%; }
      .kf-inner { padding: 1.5rem 1rem; }
      .kf-carousel-wrap { height: 320px; }
      .kf-card { width: 260px; padding: 1.6rem 1.4rem 1.4rem; }
      .kf-title { font-size: clamp(1.4rem, 5vw, 1.9rem); }
      .kf-card-title { font-size: 0.95rem; }
      .kf-card-desc { font-size: 0.82rem; }
      .dm-faq-section { padding: 3rem 4% 2.5rem; }
      .dm-faq-head h3 { font-size: clamp(1.4rem, 5vw, 1.9rem); }
      .dm-faq-question { font-size: 0.86rem; padding: 1rem 1.1rem; }
      .dm-faq-answer { font-size: 0.84rem; padding: 0.5rem 1.1rem 1rem; }
    }
      .reasons-section{
    padding:80px 20px;
    background:#f7f7f7;
}

.container{
    max-width:1200px;
    margin:auto;
}

.section-title{
    text-align:center;
    font-size:40px;
    margin-bottom:60px;
    color:#222;
}

.cards-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:30px;
}

.reason-card{
    position:relative;
    background:#fff;
    border-radius:20px;
    padding:35px 25px;
    min-height:260px;
    box-shadow:0 8px 25px rgba(0,0,0,0.08);
    transition:0.4s ease;
    overflow:hidden;
}

.border-animation::before{
    content:"";
    position:absolute;
    top:0;
    left:0;
    width:70px;
    height:70px;
    border-top:3px solid #004168;
    border-left:3px solid #004168;
    border-radius:20px 0 0 0;
    transition:all .6s ease;
}

.border-animation::after{
    content:"";
    position:absolute;
    right:0;
    bottom:0;
    width:70px;
    height:70px;
    border-bottom:3px solid #004168;
    border-right:3px solid #004168;
    border-radius:0 0 20px 0;
    transition:all .6s ease;
}

.reason-card:hover{
    transform:translateY(-8px);
}

.icon-box{
    width:60px;
    height:60px;
    background: #00406838;
    border-radius:12px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#fff;
    font-size:24px;
    margin-bottom:20px;
}

.reason-card h3{
    font-size:16px;
    margin-bottom:15px;
    color:#222;
}

.reason-card p{
    font-size:14px;
    line-height:1.7;
    color:#666;
    margin-bottom:20px;
}

.read-more{
    text-decoration:none;
    color:#222;
    font-weight:600;
}

.read-more i{
    margin-left:5px;
}

@media(max-width:992px){
    .cards-grid{
        grid-template-columns:repeat(2,1fr);
    }
}

@media(max-width:768px){
    .section-title{
        font-size:30px;
    }

    .cards-grid{
        grid-template-columns:1fr;
    }
}
    
  /* ══ PORTFOLIO SECTION ══ */
  .pf-section {
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
    font-family:'Poppins',sans-serif; font-size:clamp(2rem,3vw,2.5rem);
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

  @media (max-width: 1024px) {
    .pf-inner { grid-template-columns: minmax(260px, 380px) 1fr; gap: 2.4rem; padding: 4rem 5%; }
  }
  @media (max-width: 900px) {
    .pf-inner { grid-template-columns: 1fr; gap: 2.2rem; padding: 3.5rem 5%; }
    .pf-left { position: static; top: auto; }
  }
  @media (max-width: 640px) {
    .pf-cols { grid-template-columns: repeat(2, 1fr); gap: .8rem; }
    .pf-inner { padding: 3rem 5%; }
    .pf-card img { height: 160px; }
  }
  @media (max-width: 420px) {
    .pf-cols { grid-template-columns: 1fr; }
  }

  /* ══ SERVICES GRID (Our Services Section) ══ */
  .svc-main-heading {
    text-align: center;
    max-width: 780px;
    margin: 0 auto;
  }
.svc-grid {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  align-items: stretch;
  grid-auto-rows: 1fr;  /* ← equal height rows */
}
  @media (max-width: 1024px) {
    .svc-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
    .svc-main-heading { max-width: 640px; }
  }
  @media (max-width: 640px) {
    .svc-grid { grid-template-columns: 1fr; gap: 20px; }
    .svc-main-heading { max-width: 100%; }

    .mf-outer {
    padding: 50px 20px;
  }
  }
  `}</style>
);

// Used by ServicesSlider (.svs-icon-wrap)
function ServiceIcon({ name }) {
    const icons = {
        search: "/img/icon/website-other-service-seo.webp",
        ppc: "/img/icon/website-other-service-ppc.webp",
        content: "/img/icon/website-other-service-content.webp",
        smm: "/img/icon/website-other-service-smm.webp",
        email: "/img/icon/website-other-service-email.webp",
        graphic: "/img/icon/website-other-service-graphic.webp",
        busregcom: "/img/icon/website-other-service-busregcom.webp",
        digitaltrans: "/img/icon/website-other-service-digitaltrans.webp",
        hrservice: "/img/icon/website-other-service-hrservice.webp",
    };
    return icons[name] ? <img src={icons[name]} alt={name} width="24" height="24" /> : null;
}

// ── FAQ Data ──────────────────────────────────────────
const faqData = [
    { q: "What does a website development company do?", a: "A website development company plans and designs. Builds a website from the ground up." },
    { q: "How is a static website different from a dynamic one?", a: "A static website shows the content to every visitor, while a dynamic website pulls content from a database and can change based on the visitor." },
    { q: "How do I know if I'm hiring the website development company for my project?", a: "Ask for case studies request references. Confirm they can support your site after launch. " },

    { q: "What should I look for in a website development service?", a: "Look for a provider that offers communication, a portfolio of real results, transparent pricing and post-launch support." },
    { q: "How long does website design and development usually take?", a: "Timelines vary by scope. A simple static site can be completed in a couple of weeks, while a custom or e-commerce build takes several weeks to a few months." },
    { q: "What makes an e-commerce development company from a general web developer?", a: "An e-commerce development company specializes in the systems for online selling, such as secure checkout and payment gateway integration." },
];


// ── Site Header ────────────────────────────────────────
function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = [
        { label: "About", href: "#about" },
        { label: "Service", href: "#service" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Case Study", href: "#our-case-studies" },
        { label: "Features", href: "#feature" },
    ];

    return (
        <header className="pcs-site-header-wrap">
            <style>{`
        .pcs-site-header-wrap {
          position: sticky; top: 0; z-index: 30;
          background: #fff;
        }
        .pcs-site-header {
          background: #fff;
          padding: 14px 6%;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          gap: 28px;
          justify-content: space-around;
          position: relative;
          z-index: 2;
        }
        .pcs-header-logo { display: flex; align-items: center; gap: 10px; }
        .pcs-header-logo img { height: 60px; width: auto; display: block; }

        /* ── DESKTOP NAV ── */
        .pcs-header-nav { display: flex; align-items: center; gap: 30px; list-style: none; margin: 0; padding: 0; }
        .pcs-header-nav a {
          font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600;
          color: #022b44; text-decoration: none; position: relative;
          padding-bottom: 4px; transition: color 0.2s; white-space: nowrap;
        }
        .pcs-header-nav a::after {
          content: ''; position: absolute; left: 0; bottom: 0;
          width: 0; height: 2px; background: #ed8337; border-radius: 2px;
          transition: width 0.25s ease;
        }
        .pcs-header-nav a:hover { color: #ed8337; }
        .pcs-header-nav a:hover::after { width: 100%; }

        #about, #service, #portfolio, #our-case-studies, #feature { scroll-margin-top: 100px; }

        .pcs-header-enquire-btn {
          background: #ed8337; color: #fff; padding: 10px 22px; border-radius: 50px;
          font-size: 13px; font-weight: 700; font-family: 'Poppins', sans-serif;
          text-decoration: none; border: none; cursor: pointer;
          display: inline-flex; align-items: center; gap: 6px;
          transition: background 0.2s, transform 0.18s; white-space: nowrap;
        }
        .pcs-header-enquire-btn:hover { background: #004168; transform: translateY(-2px); color: #fff; }

        /* ── HAMBURGER / CLOSE TOGGLE (mobile only) ── */
        .pcs-header-toggle {
          display: none;
          width: 24px; height: 18px;
          border: none; background: transparent; cursor: pointer;
          position: relative; flex-shrink: 0; margin-left: auto;
          padding: 0;
        }
        .pcs-header-toggle span {
          position: absolute; left: 0; width: 100%; height: 2px;
          background: #022b44; border-radius: 2px;
          transition: transform 0.25s ease, opacity 0.2s ease, top 0.25s ease;
        }
        .pcs-header-toggle span:nth-child(1) { top: 0; }
        .pcs-header-toggle span:nth-child(2) { top: 8px; }
        .pcs-header-toggle span:nth-child(3) { top: 16px; }
        .pcs-header-toggle.open span:nth-child(1) { top: 8px; transform: rotate(45deg); }
        .pcs-header-toggle.open span:nth-child(2) { opacity: 0; }
        .pcs-header-toggle.open span:nth-child(3) { top: 8px; transform: rotate(-45deg); }

        /* ── FULL-WIDTH DROPDOWN MENU (below header) ── */
        .pcs-mobile-dropdown {
          background: #fff;
          width: 100%;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease;
        }
        .pcs-mobile-dropdown.open { max-height: 600px; }

        .pcs-mobile-links {
          list-style: none; margin: 0; padding: 14px 5%;
          display: flex; flex-direction: column; gap: 4px;
        }
        .pcs-mobile-links a {
          display: block;
          font-family: 'Poppins', sans-serif;
          font-size: 15px; font-weight: 600;
          color: #022b44;
          text-decoration: none;
          padding: 14px 18px;
          border-radius: 12px;
          transition: background 0.2s, color 0.2s;
        }
        .pcs-mobile-links a.active {
          background: rgba(237,131,55,0.12);
          color: #ed8337;
        }
        .pcs-mobile-links a:hover { color: #ed8337; }

        .pcs-mobile-cta {
          padding: 6px 5% 20px;
        }
        .pcs-mobile-cta .pcs-header-enquire-btn { width: 100%; justify-content: center; }

        .pcs-mobile-bar {
          height: 6px;
          background: #f1f1f1;
        }

        /* ══ TABLET ══ */
        @media(max-width: 1100px) {
          .pcs-header-nav { gap: 18px; }
          .pcs-header-nav a { font-size: 13px; }
        }
        @media(max-width: 900px) {
          .pcs-header-nav { display: none; }
        }

        /* ══ MOBILE ══ */
      @media(max-width: 700px) {
  .pcs-site-header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding: 14px 5%;
    gap: 10px;
  }

  .pcs-header-logo img { height: 42px; }
  .pcs-header-enquire-btn {
    padding: 8px 16px;
    font-size: 12px;
    justify-self: center;
  }
  .pcs-header-toggle {
    display: block;
    margin-left: 0;
    justify-self: center;
  }
}
        @media(min-width: 701px) {
          .pcs-mobile-dropdown, .pcs-mobile-bar { display: none; }
        }
      `}</style>

            <div className="pcs-site-header">
                {/* LOGO */}
                <div className="pcs-header-logo">
                    <img src="/img/priyam-consultancy-logo.png" alt="Priyam Consultancy Services" />
                </div>

                {/* DESKTOP NAV */}
                <ul className="pcs-header-nav">
                    {navLinks.map((item, i) => (
                        <li key={i}><a href={item.href}>{item.label}</a></li>
                    ))}
                </ul>

                {/* ENQUIRE BUTTON — always visible */}
                <a href="#about" className="pcs-header-enquire-btn">
                    Enquire Now
                    <span>→</span>
                </a>

                {/* HAMBURGER / CLOSE TOGGLE — mobile only */}
                <button
                    type="button"
                    className={`pcs-header-toggle${menuOpen ? " open" : ""}`}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMenuOpen((o) => !o)}
                >
                    <span /><span /><span />
                </button>
            </div>

            {/* FULL-WIDTH DROPDOWN — mobile only */}
            <div className={`pcs-mobile-dropdown${menuOpen ? " open" : ""}`}>
                <ul className="pcs-mobile-links">
                    {navLinks.map((item, i) => (
                        <li key={i}>
                            <a
                                href={item.href}
                                className={i === 0 ? "active" : ""}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pcs-mobile-bar" />
        </header>
    );
}

// ── Hero ────────────────────────────────────────────

function HeroSection() {
    return (
        <section className="hero" id="about" >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
 
        :root {
          --navy:      #004168;
          --navy-deep: #011a2a;
          --navy-mid:  #0a3652;
          --orange:    #ed8337;
          --orange-l:  #f5a66b;
          --dim:       rgba(255,255,255,0.45);
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Poppins', sans-serif; color: #fff; overflow-x: hidden; }
 
        .hero {
          min-height: 100svh;
          display: grid; grid-template-columns: 1fr 1fr;
          align-items: center; gap: 2rem;
          padding: 2rem 6% 4rem;
          position: relative; overflow: hidden;
          background: var(--navy);
        }
        .hero::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 65% 70% at 100% 50%, rgba(237,131,55,0.10) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 0% 100%, rgba(10,66,102,0.5) 0%, transparent 55%);
        }
.hero-stats-grid {
  margin-top: 2.2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);   /* ← 2 la irundhu 3 ah maathunga */
  gap: 12px;
  animation: fadeUp 0.7s 0.36s ease both;
}
@media(max-width: 960px) {
  .hero-stats-grid { grid-template-columns: repeat(3, 1fr); }   /* ← 1fr 1fr la irundhu maathunga */
}
@media(max-width: 600px) {
  .hero-stats-grid { grid-template-columns: 1fr; }   /* mobile la mattum stack aagum */
}
        .hero::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: linear-gradient(rgba(237,131,55,0.028) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(237,131,55,0.028) 1px, transparent 1px);
          background-size: 52px 52px;
        }
 
        .hero-left { position: relative; z-index: 2; display: flex; flex-direction: column; }
 
        .h-badge {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: rgba(237,131,55,0.1); border: 1px solid rgba(237,131,55,0.28);
          color: var(--orange); font-size: 0.72rem; font-weight: 600;
          padding: 0.38rem 1rem; border-radius: 50px;
          letter-spacing: 0.09em; text-transform: uppercase;
          width: fit-content; animation: fadeUp 0.6s ease both;
        }
        .badge-dot {
          width: 6px; height: 6px; border-radius: 50%; background: var(--orange);
          animation: pulse-dot 1.6s infinite;
        }
        @keyframes pulse-dot { 0%,100%{ opacity:1; transform:scale(1); } 50%{ opacity:.4; transform:scale(1.5); } }
 
        .hero-heading {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(2.2rem, 3.8vw, 3rem);
          font-weight: 600; line-height: 1.15;
          margin-top: 1.4rem; animation: fadeUp 0.7s 0.08s ease both; color: #fff;
        }
        .hero-heading .hl { color: var(--orange); }
        .hero-heading .lined { position: relative; display: inline-block; }
        .hero-heading .lined::after {
          content: ''; position: absolute; left: 0; bottom: -3px;
          width: 100%; height: 3px; background: var(--orange); border-radius: 2px;
          transform: scaleX(0); transform-origin: left;
          animation: line-in 0.5s 0.9s ease forwards;
        }
        @keyframes line-in { to { transform: scaleX(1); } }
 
        .hero-sub {
          margin-top: 1.4rem; font-size: 1rem; line-height: 1.78;
          color: rgba(255,255,255,0.9); max-width: fit-content;
          animation: fadeUp 0.7s 0.16s ease both;
        }
        .hero-actions { margin-top: 2rem; display: flex; gap: 0.9rem; flex-wrap: wrap; animation: fadeUp 0.7s 0.26s ease both; }
        .btn-fill {
          background: var(--orange);
          padding: 0.85rem 2rem; border-radius: 50px;
          font-family: 'Poppins', sans-serif; font-size: 0.92rem; font-weight: 500;
          text-decoration: none; border: none; cursor: pointer; color: #fff;
          box-shadow: 0 4px 22px rgba(237,131,55,0.32);
          display: inline-flex; align-items: center; gap: 0.5rem;
          transition: background 0.22s, transform 0.18s, box-shadow 0.22s;
        }
        .btn-fill:hover { background: var(--orange-l); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(237,131,55,0.42); }
        .btn-arrow {
          display: inline-flex; align-items: center; justify-content: center;
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(2,43,68,0.3); font-size: 0.85rem;
        }
        @keyframes fadeUp { from{ opacity:0; transform:translateY(26px); } to{ opacity:1; transform:translateY(0); } }
 
        /* ── INLINE HERO STATS GRID ── */
   
        .hero-stat-card {
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 14px;
          padding: 14px 16px;
          backdrop-filter: blur(8px);
          transition: background 0.25s ease, transform 0.22s ease, border-color 0.25s ease;
        }
        .hero-stat-card:hover {
          background: rgba(237,131,55,0.12);
          border-color: rgba(237,131,55,0.35);
          transform: translateY(-3px);
        }
        .hero-stat-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #004168;
          border: 1.5px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .hero-stat-text { display: flex; flex-direction: column; gap: 2px; }
        .hero-stat-value {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.05rem, 1.8vw, 1.25rem);
          font-weight: 800;
          color: #ed8337;
          line-height: 1.1;
          letter-spacing: -0.01em;
        }
        .hero-stat-label {
          font-family: 'Poppins', sans-serif;
          font-size: 0.75rem;
          font-weight: 400;
          color: rgba(255,255,255,0.72);
          line-height: 1.3;
        }
 
        .hero-right {
          overflow: hidden; width: 100%; height: auto;
          position: relative; z-index: 2;
          display: flex; align-items: center; justify-content: center;
        }
        img.hero-img { animation: none !important; }
        .hero-img { width: 100%; object-fit: contain; display: block; }
 
        /* ══ TABLET ══ */
        @media(max-width: 960px) {
          .hero {
            grid-template-columns: 1fr;
            padding: 6rem 5% 4rem;
            min-height: auto;
            gap: 2.5rem;
          }
          .hero-left { order: 1; align-items: flex-start; padding: 3rem 0; }
          .hero-right { width: 100% !important; height: auto !important; order: 2; display: flex; justify-content: center; }
          .hero-img { width: 100%; max-width: 480px; height: auto; }
          .hero-sub { max-width: 90%; }
          .hero-actions { justify-content: flex-start; }
          .hero-stats-grid { grid-template-columns: 1fr 1fr; }
        }
 
        /* ══ MOBILE ══ */
        @media(max-width: 600px) {
          .hero { padding: 1rem 4% 3rem; gap: 2rem; }
          .hero-heading { font-size: clamp(1.7rem, 6vw, 2.2rem) !important; }
          .hero-sub { font-size: 0.9rem; max-width: 100%; }
          .hero-img { max-width: 100%; width: 100%; }
          .h-badge { font-size: 0.65rem; }
          .hero-stats-grid { grid-template-columns: 1fr 1fr; gap: 8px; }
          .hero-stat-card { padding: 10px 12px; gap: 10px; }
          .hero-stat-icon-box { width: 40px; height: 40px; border-radius: 10px; }
          .hero-stat-value { font-size: 0.95rem; }
          .hero-stat-label { font-size: 0.68rem; }
        }
      `}</style>

            {/* LEFT CONTENT */}
            <div className="hero-left">
                <div className="h-badge"><div className="badge-dot" />Web Development</div>
                <h1 className="hero-heading">
                    Best
                    <span className="hl lined" style={{ marginLeft: '12px' }}> Web Development </span>
                    Company in Coimbatore for Business Growth
                </h1>
                <p className="hero-sub">
                    We are a trusted website development company that designs and develops fast, responsive, and SEO-ready websites tailored to industry-specific requirements. From customized corporate websites to complete e-commerce website development, we use technologies such as React.js, Node.js, Docusaurus, WordPress, WooCommerce, Shopify, and more to improve online visibility, expand customer reach, generate quality leads, and support long-term business growth.         </p>


                <div className="hero-stats-grid">
                    <div className="hero-stat-card">
                        <div className="hero-stat-icon-box">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ed8337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="16 18 22 12 16 6" />
                                <polyline points="8 6 2 12 8 18" />
                            </svg>
                        </div>
                        <div className="hero-stat-text">
                            <span className="hero-stat-value">10+</span>
                            <span className="hero-stat-label">Technologies & Platforms</span>
                        </div>
                    </div>

                    <div className="hero-stat-card">
                        <div className="hero-stat-icon-box">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ed8337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="5" y="2" width="14" height="20" rx="2" />
                                <line x1="12" y1="18" x2="12.01" y2="18" />
                            </svg>
                        </div>
                        <div className="hero-stat-text">
                            <span className="hero-stat-value">100%</span>
                            <span className="hero-stat-label">Mobile-Responsive</span>
                        </div>
                    </div>

                    <div className="hero-stat-card">
                        <div className="hero-stat-icon-box">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ed8337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
                            </svg>
                        </div>
                        <div className="hero-stat-text">
                            <span className="hero-stat-value">360°</span>
                            <span className="hero-stat-label">Website Solutions</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT CONTACT FORM */}
            <div className="hero-right" id="get-in-touch-form">
                <div className="hero-form-card">
                    <style>{`
            .hero-form-card {
              background: #fff;
              border-radius: 20px;
              padding: 2.2rem 2.4rem 2.4rem;
              width: 100%;
              max-width: 480px;
              box-shadow: 0 20px 60px rgba(0,0,0,0.18);
              position: relative;
              z-index: 3;
            }
            .hero-form-title {
              font-family: 'Poppins', sans-serif;
              font-size: clamp(1.5rem, 2.5vw, 1.9rem);
              font-weight: 700;
              color: #022b44;
              line-height: 1.2;
              margin-bottom: 0.4rem;
            }
            .hero-form-title span { color: #ed8337; }
            .hero-form-sub { font-size: 0.85rem; color: #666; margin-bottom: 1.5rem; }
            .hero-form-row {
              display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1rem;
            }
            .hero-form-field { display: flex; flex-direction: column; gap: 0.3rem; }
            .hero-form-field input,
            .hero-form-field textarea {
              border: none; border-bottom: 1.5px solid #ccc; outline: none;
              padding: 0.55rem 0; font-size: 0.88rem;
              font-family: 'Poppins', sans-serif; color: #022b44;
              background: transparent; transition: border-color 0.2s; width: 100%;
            }
            .hero-form-field input:focus,
            .hero-form-field textarea:focus { border-bottom-color: #ed8337; }
            .hero-form-field input::placeholder,
            .hero-form-field textarea::placeholder { color: #aaa; font-size: 0.85rem; }
            .hero-form-field textarea { resize: none; min-height: 64px; }
            .hero-phone-wrap {
              display: flex; align-items: flex-end; gap: 0.5rem;
              border-bottom: 1.5px solid #ccc; transition: border-color 0.2s;
            }
            .hero-phone-wrap:focus-within { border-bottom-color: #ed8337; }
            .hero-phone-prefix {
              font-size: 0.88rem; font-weight: 700; color: #022b44;
              padding-bottom: 0.55rem; white-space: nowrap; flex-shrink: 0;
            }
            .hero-phone-wrap input { border: none !important; border-bottom: none !important; padding: 0.55rem 0 !important; flex: 1; }
            .hero-form-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 1.4rem; gap: 1rem; }
            .hero-form-btn {
              display: inline-flex; align-items: center; gap: 0.6rem;
              background: #ed8337; color: #fff; border: none; border-radius: 50px;
              padding: 0.85rem 1.8rem; font-family: 'Poppins', sans-serif;
              font-size: 0.9rem; font-weight: 600; cursor: pointer;
              transition: background 0.2s, transform 0.18s; flex-shrink: 0;
            }
            .hero-form-btn:hover { background: #004168; transform: translateY(-2px); }
            .hero-form-btn-arrow {
              width: 26px; height: 26px; border-radius: 50%;
              background: rgba(255,255,255,0.15);
              display: flex; align-items: center; justify-content: center; font-size: 0.9rem;
            }
            @media(max-width: 960px) { .hero-form-card { max-width: 100%; } }
            @media(max-width: 600px) {
              .hero-form-card { padding: 1.6rem 1.4rem 1.8rem; }
            }
          `}</style>

                    <p className="hero-form-title">Your Growth, <span>Our Mission.</span></p>
                    <p className="hero-form-sub">Fill in your details — we'll get back within 24 hours.</p>
                    <HeroContactForm />
                </div>
            </div>
        </section>
    );
}
function HeroContactForm() {
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

    return (
        <form onSubmit={sendEmail}>
            <div className="hero-form-row">
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
            </div>

            <div className="hero-form-row">
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
            </div>

            <div className="hero-form-row">
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

            <div className="hero-form-row">
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




// ── CTA Split Section ─────────────────────────────────
function CTASplitSection() {
    return (
        <section className="pg-cta-section">
            <div className="pg-cta-inner">
                <div className="pg-cta-img-wrap">
                    <img src="/img/landing-page/trusted-partners.webp" alt="PCS Digital Marketing Team in Coimbatore" className="pg-cta-img" />

                </div>
                <div>
                    <div className="partners-header1" >
                        <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Trusted Website Partner
                        </div>
                    </div>
                    <h2 className="pg-cta-heading">Why We Are Recognized as the   <em>Best Website Development Company in Coimbatore</em>
                    </h2>
                    <p className="pg-cta-desc">
                        We have built our reputation one project at a time. We treat every client's website like it is our business. From a website to a full e-commerce development, our focus is on usable design, clean code and measurable outcomes.

                    </p>
                    <p className="pg-cta-desc2">
                        Businesses partner with us because we combine strategy with execution. We do not just build a good-looking site but one that is structured to load quickly and convert.

                    </p>
                </div>
            </div>
        </section>
    );
}



function BuildTogetherCTASection() {
    return (
        <section style={{ padding: "4rem 5% 4rem" }}>
            <div style={{
                maxWidth: "1200px", margin: "0 auto",
                borderRadius: "20px", overflow: "hidden",
                position: "relative", background: "#004168",
                minHeight: "200px",
                display: "grid", gridTemplateColumns: "1fr auto",
                alignItems: "center", gap: "2rem",
                padding: "3rem 1.7rem",
            }}>

                {/* BG grid pattern */}
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
                    backgroundImage: "url('/img/website-development/cta.webp')",
                    backgroundSize: "cover", backgroundPosition: "center",
                }} />

                {/* BG image */}
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
                    backgroundImage: "url('/img/website-development/cta.webp')",
                    backgroundSize: "cover", backgroundPosition: "center",
                    // opacity: 0.08,
                }} />

                {/* Glow orb */}
                <div style={{
                    position: "absolute", right: "-80px", bottom: "-80px",
                    width: "320px", height: "320px", borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(237,131,55,0.12) 0%, transparent 65%)",
                    pointerEvents: "none", zIndex: 0,
                }} />

                {/* LEFT: Content */}
                <div style={{ position: "relative", zIndex: 2 }}>
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: "7px",
                        background: "rgba(237,131,55,0.12)",
                        border: "1px solid rgba(237,131,55,0.3)",
                        color: "#ed8337", fontSize: "0.68rem", fontWeight: 600,
                        padding: "0.3rem 1rem", borderRadius: "50px",
                        letterSpacing: "0.1em", textTransform: "uppercase",
                        marginBottom: "1rem",
                    }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ed8337", display: "inline-block" }} />
                        Let's Build Together
                    </div>

                    <h2 style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "clamp(1.55rem, 2.4vw, 2.1rem)",
                        fontWeight: 700, color: "#fff",
                        lineHeight: 1.2, margin: "0 0 0.7rem",
                    }}>
                        Get a Free Consultation With Our <br /><em style={{ color: "#ed8337" }}>Website Development Team</em><br />
                    </h2>

                    <p style={{
                        fontSize: "0.9rem", color: "rgba(255,255,255,0.72)",
                        lineHeight: 1.75, margin: 0, maxWidth: "480px",
                    }}>
                        Tell us about your project. We will plan the right approach. We will discuss the platform, timeline and budget before any work begins.
                    </p>
                    <div style={{
                        position: "relative", zIndex: 2,
                        display: "flex", flexDirection: "column",
                        alignItems: "start", gap: "0.85rem", flexShrink: 0, marginTop: "1.5rem",
                    }}>
                        <a href="#about" className="pg-form-btn">
                            Book a Free Consultation
                            <span className="pg-form-btn-arr">→</span>
                        </a>

                    </div>

                </div>

                {/* RIGHT: Buttons */}


            </div>
        </section>
    );
}


// ── Modern Features Section ───────────────────────────
function ModernFeaturesSection() {
    return (
        <section className="mf-outer" id="feature">
            <div className="mf-head">
                <div className="partners-header1" style={{ textAlign: 'center' }}>
                    <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Web Development Features
                    </div>
                </div>
                <h2 className="mf-h2">Everything Your Website Needs to  <span>Perform and Grow </span>
                </h2>
                <p className="mf-sub">
                    Our website development solutions bring together speed, security, functionality, and scalability to build a strong digital presence for your business. Every website is developed using modern technologies, SEO-ready practices, and intuitive user experiences designed to attract visitors, generate enquiries, and support long-term growth.
                </p>
            </div>
            <div className="mf-body">
                <div className="mf-col">
                    <div className="mf-item">
                        <div className="mf-icon-box">
                            <img src="/img/icon/feat-custom-web.webp" alt="Custom Web Development" width={"25px"} />
                        </div>
                        <div><h3 className="mf-t">Custom Website Development</h3><p className="mf-d">
                            Get a website built specifically around your business, industry, brand identity, and unique requirements. From custom functionality to scalable architecture, we develop secure and high-performing websites designed to support your current needs and future growth.
                        </p></div>
                    </div>

                    <div className="mf-item">
                        <div className="mf-icon-box">
                            <img src="/img/icon/feat-responsive-design.webp" alt="Mobile Responsiveness" width={"25px"} />
                        </div>
                        <div><h3 className="mf-t">Mobile-Responsive Development</h3><p className="mf-d">
                            Your website will deliver a consistent and user-friendly experience across desktops, tablets, and smartphones. We ensure every page, feature, and interaction adapts smoothly to different screen sizes for better usability and customer engagement.
                        </p></div>
                    </div>
                    <div className="mf-item">
                        <div className="mf-icon-box">
                            <img src="/img/icon/feat-api-intergation.webp" alt="API Integration" width={"25px"} />
                        </div>
                        <div>
                            <h3 className="mf-t">Third-Party API Integrations</h3><p className="mf-d">
                                Connect your website with essential business tools, including payment gateways, CRM platforms, WhatsApp, shipping providers, analytics, and marketing applications. Our integrations help streamline processes, reduce manual work, and create a more connected digital experience.
                            </p></div>
                    </div>
                </div>

                <div className="mf-phone">
                    <img src="/img/website-development/features.webp" alt="Mobile Responsiveness" />
                </div>

                <div className="mf-col">
                    <div className="mf-item rev">
                        <div className="mf-icon-box">
                            <img src="/img/icon/feat-seo-struture.webp" alt="SEO Optimized Structure" width={"25px"} />
                        </div>
                        <div><h3 className="mf-t">SEO-Ready Website Structure</h3><p className="mf-d">
                            We build websites with a search-friendly technical foundation, including optimized URLs, meta structure, schema markup, clean code, and proper site architecture. This gives your website a stronger foundation for online visibility and organic search growth            </p></div>
                    </div>
                    <div className="mf-item rev">
                        <div className="mf-icon-box">
                            <img src="/img/icon/feat-page-speed.webp" alt="Page Speed Optimization" width={"25px"} />
                        </div>
                        <div><h3 className="mf-t">Website Speed Optimization</h3><p className="mf-d">
                            From optimized images and clean code to caching and lightweight development practices, we focus on reducing loading times and improving overall website performance. Faster websites create better user experiences and help keep visitors engaged.
                        </p></div>
                    </div>
                    <div className="mf-item rev">
                        <div className="mf-icon-box">
                            <img src="/img/icon/feat-server-hosting.webp" alt="Hosting and Maintenance" width={"25px"} />
                        </div>
                        <div><h3 className="mf-t">Hosting & Website Maintenance</h3><p className="mf-d">
                            We provide reliable hosting setup along with ongoing website maintenance, security monitoring, regular backups, and essential updates. This helps keep your website secure, stable, updated, and available to support your business without unnecessary interruptions.
                        </p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}


function WCUScrollReveal() {
    useEffect(() => {
        const items = document.querySelectorAll('.wcu-item');
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const idx = Array.from(items).indexOf(entry.target);
                    setTimeout(() => entry.target.classList.add('wcu-in'), idx * 120);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        items.forEach(c => obs.observe(c));
        return () => obs.disconnect();
    }, []);
    return null;
}

// ── FAQ Section (from doc 1) ──────────────────────────
function FAQSection() {
    const [active, setActive] = useState(null);
    const toggle = (index) => setActive(active === index ? null : index);

    return (
        <section className="dm-faq-section">
            <div className="partners-header1" style={{ textAlign: "center" }}>
                <h2 className="partners-eyebrow" style={{ marginBottom: "20px", textAlign: "center" }}>Frequently Asked Questions</h2>
            </div>
            <div className="container">
                <div className="dm-faq-head">
                    <h3>Queries That Could <span>Hold You Back</span></h3>
                </div>
                <div className="dm-faq-wrapper">
                    <div className="dm-faq-col">
                        {faqData.slice(0, 3).map((item, i) => (
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
                        {faqData.slice(3, 6).map((item, i) => (
                            <div className="dm-faq-item" key={i + 3}>
                                <div className="dm-faq-question" onClick={() => toggle(i + 3)}>
                                    <span>{item.q}</span>
                                    <span className="icon">{active === i + 3 ? "−" : "+"}</span>
                                </div>
                                {active === i + 3 && <div className="dm-faq-answer">{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ── CTA Split Section 1 ───────────────────────────────
const CTA_FEATURES1 = [
    "ROI-focused campaigns with transparent reporting",
    "Dedicated account manager for every client",
    "Proven strategies across SEO, PPC & Social Media",
];

// ── Services Slider Section ───────────────────────────
const SERVICE_SLIDES = [
    {
        iconKey: "search",
        tag: "01",
        title: "Search Engine Optimization (SEO)",
        desc: "Improve your search rankings with strategic keyword targeting, technical optimization, and high-quality content. Our SEO services increase organic traffic, visibility, and qualified leads for sustainable long-term digital growth.",
        highlight: "",
    },
    {
        iconKey: "ppc",
        tag: "02",
        title: "Pay Per Click (PPC)",
        desc: "Drive instant visibility and high-intent traffic through performance-driven PPC campaigns. We create optimized ad strategies, compelling creatives, and data-backed targeting to maximize ROI and reduce cost per lead.",
        highlight: "45% lower cost per lead",
    },
    {
        iconKey: "content",
        tag: "03",
        title: "Content Marketing",
        desc: "Build authority and trust with strategic content marketing. From blogs and website copy to campaign messaging, we craft SEO-focused content that educates, engages, and converts your audience.",
        highlight: "2x engagement rate",
    },
    {
        iconKey: "smm",
        tag: "04",
        title: "Social Media Marketing",
        desc: "Strengthen brand presence with data-driven social media strategies. We create engaging content, targeted campaigns, and consistent brand communication that boosts engagement, reach, and customer loyalty.",
        highlight: "50ms avg. load time",
    },
    {
        iconKey: "email",
        tag: "05",
        title: "Email & WhatsApp Marketing ",
        desc: "Nurture leads and retain customers through personalized email and WhatsApp marketing campaigns. We design automation workflows, compelling newsletters, and conversion-focused messaging across both channels to drive engagement, build stronger customer relationships, and grow business effectively.",
        highlight: "60% higher retention",
    },
    {
        iconKey: "graphic",
        tag: "06",
        title: "Graphic Design",
        desc: "Elevate your brand identity with impactful graphic design. From logos and brand kits to social creatives and marketing materials, we create visually compelling designs that communicate professionalism and consistency.",
        highlight: "Real-time dashboards",
    },
    {
        iconKey: "busregcom",
        tag: "07",
        title: "Business Registration & Compliance",
        desc: "Simplify business setup and regulatory compliance with expert guidance. We handle registrations, documentation, statutory filings, and legal processes to ensure smooth, compliant operations.",
        highlight: "Real-time dashboards",
    },
    {
        iconKey: "digitaltrans",
        tag: "08",
        title: "Digital Transformation",
        desc: "Accelerate business growth with digital transformation strategies. We integrate automation, AI tools, analytics, and scalable systems to improve efficiency, decision-making, and long-term competitiveness.",
        highlight: "Real-time dashboards",
    },
    {
        iconKey: "hrservice",
        tag: "09",
        title: "Human Resource Services",
        desc: "Streamline HR operations with structured recruitment, payroll management, HR Strategy ,policy development, and compliance support. Our HR solutions help organizations scale efficiently while maintaining employee satisfaction and regulatory standards.",
        highlight: "Real-time dashboards",
    },
];


function MilestonesCTA() {
    return (
        <section className="ms-cta-section">
            <style>{`
        .ms-cta-section {
          position: relative;
          background: #ffffff;
          overflow: hidden;
          padding: 0 6%;
        }
        .ms-cta-section::before {
          content: '';
          position: absolute; inset: 0;
          pointer-events: none; z-index: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23004168' fill-opacity='0.045'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .ms-cta-glow-l {
          position: absolute; pointer-events: none; z-index: 0;
          width: 540px; height: 540px; border-radius: 50%;
          top: -190px; left: -130px;
          background: radial-gradient(ellipse, rgba(237,131,55,0.08) 0%, transparent 70%);
        }
        .ms-cta-glow-r {
          position: absolute; pointer-events: none; z-index: 0;
          width: 440px; height: 440px; border-radius: 50%;
          bottom: -150px; right: -90px;
          background: radial-gradient(ellipse, rgba(0,65,104,0.07) 0%, transparent 70%);
        }
        .ms-cta-line-top {
          position: relative; z-index: 2; height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(237,131,55,0.35), transparent);
        }
        .ms-cta-line-bottom {
          position: relative; z-index: 2; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,65,104,0.1), transparent);
        }
        .ms-cta-inner {
          position: relative; z-index: 2;
          display: flex; align-items: center;
          justify-content: space-between;
          gap: 3rem;
          padding: 5.5rem 0 5.5rem;
          max-width: 1200px; margin: 0 auto;
        }
        .ms-cta-left { flex: 1 1 0; min-width: 0; }
        .ms-cta-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: #ed8337;
          margin-bottom: 1.1rem; font-family: 'DM Sans', sans-serif;
        }
        .ms-cta-eyebrow-bar { width: 20px; height: 2px; background: #ed8337; border-radius: 2px; }
        .ms-cta-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.7rem, 3vw, 2.5rem);
          font-weight: 700; line-height: 1.18;
          color: #022b44; margin: 0 0 1.1rem; letter-spacing: -0.02em;
        }
        .ms-cta-title span { color: #ed8337; }
        .ms-cta-desc {
          font-family: 'Poppins', sans-serif;
          font-size: 0.97rem; line-height: 1.82;
          color: #4a5568; max-width: 540px; margin: 0;
        }
        .ms-cta-right {
          display: flex; flex-direction: column;
          align-items: flex-end; gap: 1rem; flex-shrink: 0;
        }
        .ms-cta-stats {
          display: flex; gap: 1.2rem; margin-bottom: 0.3rem;
          justify-content: flex-end; flex-wrap: wrap;
        }
        .ms-cta-stat {
          display: flex; align-items: center; gap: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 0.78rem; color: #64748b; font-weight: 500;
        }
        .ms-cta-stat-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #ed8337;
          flex-shrink: 0; animation: ms-pulse 2s ease-in-out infinite;
        }
        @keyframes ms-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(1.5); }
        }
        .ms-cta-btn-primary {
          display: inline-flex; align-items: center; justify-content: center;
          gap: 0.55rem; padding: 0.95rem 2.2rem; border-radius: 50px;
          background: #ed8337; color: #fff;
          font-family: 'Poppins', sans-serif; font-size: 0.92rem; font-weight: 600;
          text-decoration: none; border: none; cursor: pointer;
          box-shadow: 0 6px 28px rgba(237,131,55,0.30);
          transition: background 0.22s, transform 0.18s, box-shadow 0.22s;
          white-space: nowrap; min-width: 230px; letter-spacing: 0.01em;
        }
        .ms-cta-btn-primary:hover {
          background: #f5a66b; transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(237,131,55,0.42);
          color: #fff; text-decoration: none;
        }
        .ms-cta-btn-arr {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(2,43,68,0.18);
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 0.85rem; transition: transform 0.22s;
        }
        .ms-cta-btn-primary:hover .ms-cta-btn-arr { transform: translateX(3px); }
        .ms-cta-btn-secondary {
          display: inline-flex; align-items: center; justify-content: center;
          gap: 0.55rem; padding: 0.93rem 2.2rem; border-radius: 50px;
          background: transparent; color: #022b44;
          font-family: 'Poppins', sans-serif; font-size: 0.92rem; font-weight: 600;
          text-decoration: none; border: 1.5px solid rgba(0,65,104,0.25);
          cursor: pointer; white-space: nowrap; min-width: 230px; letter-spacing: 0.01em;
          transition: border-color 0.22s, color 0.22s, background 0.22s, transform 0.18s, box-shadow 0.22s;
        }
        .ms-cta-btn-secondary:hover {
          border-color: #ed8337; color: #ed8337;
          background: rgba(237,131,55,0.05);
          transform: translateY(-3px);
          box-shadow: 0 8px 26px rgba(237,131,55,0.12);
          text-decoration: none;
        }
        .ms-cta-btn-ico { font-size: 1rem; transition: transform 0.22s; }
        .ms-cta-btn-secondary:hover .ms-cta-btn-ico { transform: rotate(-6deg) scale(1.15); }
        @media(max-width: 900px) {
          .ms-cta-inner { flex-direction: column; align-items: flex-start; gap: 2.5rem; padding: 4rem 0; }
          .ms-cta-right { align-items: flex-start; width: 100%; }
          .ms-cta-stats { justify-content: flex-start; }
          .ms-cta-btn-primary, .ms-cta-btn-secondary { min-width: 200px; }
        }
        @media(max-width: 580px) {
          .ms-cta-section { padding: 0 5%; }
          .ms-cta-inner { padding: 3rem 0; gap: 2rem; }
          .ms-cta-btn-primary, .ms-cta-btn-secondary { width: 100%; min-width: unset; }
          .ms-cta-right { width: 100%; }
        }
      `}</style>

            <div className="ms-cta-glow-l" />
            <div className="ms-cta-glow-r" />
            <div className="ms-cta-line-top" />

            <div className="ms-cta-inner">
                <div className="ms-cta-left">
                    <div className="partners-header1">
                        <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>
                            READY TO GROW ONLINE?
                        </div>
                    </div>
                    <h2 className="ms-cta-title">
                        Turn Your  <span>Business Idea Into </span><br />  a Website That Works

                    </h2>
                    <p className="ms-cta-desc">
                        Whether you need a corporate website, e-commerce store, or custom web solution, our team can help you build a fast, responsive, and SEO-ready website designed around your business goals.
                    </p>
                </div>

                <div className="ms-cta-right">


                    <a href="#about" className="ms-cta-btn-primary">
                        Discuss Your Project

                        <span className="ms-cta-btn-arr">→</span>
                    </a>


                </div>
            </div>

            <div className="ms-cta-line-bottom" />
        </section>
    );
}

const PORTFOLIO_COL1 = [
    { img: "/img/portfolio/urcts.webp", label: "URCTS", tag: "", link: "https://www.urcts.in/" },
    { img: "/img/portfolio/tgcc.webp", label: "TGCC", tag: "", link: "" },
    { img: "/img/portfolio/zky.webp", label: "ZKY", tag: "", link: "https://zky.co.in/" },
    { img: "/img/portfolio/abb.webp", label: "ABB", tag: "", link: "https://abbmc.in/" },
    { img: "/img/portfolio/riya.webp", label: "Riya consultancy", tag: "", link: "https://www.riyaconsultancy.com/" },
];
const PORTFOLIO_COL2 = [
    { img: "/img/portfolio/feralroots.webp", label: "Feral Roots", tag: "", link: "https://feralroots.in/" },
    { img: "/img/portfolio/sterlocare.webp", label: "SterloCare", tag: "", link: "https://sterlocare.com/" },
    { img: "/img/portfolio/sterlo.webp", label: "Sterlo", tag: "", link: "https://sterlo.io/" },
    { img: "/img/portfolio/talenttribe.webp", label: "Talent Tribe", tag: "", link: "https://talenttribe.in/" },
    { img: "/img/portfolio/sterlobuild.webp", label: "SterloBuild", tag: "", link: "https://www.sterlobuild.com/" },
];
const PORTFOLIO_COL3 = [
    { img: "/img/portfolio/product1.webp", label: "", tag: "", link: "" },
    { img: "/img/portfolio/product2.webp", label: "", tag: "", link: "" },
    { img: "/img/portfolio/product3.webp", label: "", tag: "", link: "" },
    { img: "/img/portfolio/product4.webp", label: "", tag: "", link: "" },
    { img: "/img/portfolio/am.webp", label: "AM Builder", tag: "", link: "" },
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
                {doubled.map((item, i) => {
                    const card = (
                        <div className="pf-card">
                            <img src={item.img} alt={item.label} loading="lazy" />
                            <div className="pf-card-overlay">
                                <div className="pf-card-label">{item.label}</div>
                                <div className="pf-card-tag">{item.tag}</div>
                            </div>
                        </div>
                    );
                    return item.link ? (
                        <a
                            href={item.link}
                            key={i}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pf-card-link"
                        >
                            {card}
                        </a>
                    ) : (
                        <div key={i}>{card}</div>
                    );
                })}
            </div>
        </div>
    );
}

// ── Contact Form Popup Modal (add this near HeroContactForm) ──
function FormPopupModal({ open, onClose }) {
    if (!open) return null;
    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed", inset: 0, zIndex: 9999,
                background: "rgba(1,26,42,0.65)",
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "20px",
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{ position: "relative", width: "100%", maxWidth: 480 }}
            >

                <div className="hero-form-card">
                    <button
                        onClick={onClose}
                        style={{
                            position: "absolute", top: -18, right: -5,
                            width: 36, height: 36, borderRadius: "50%",
                            background: "#ed8337", color: "#fff", border: "none",
                            fontSize: "1.1rem", cursor: "pointer", zIndex: 2,
                            boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
                        }}
                    >
                        ✕
                    </button>
                    <p className="hero-form-title">Your Growth, <span>Our Mission.</span></p>
                    <p className="hero-form-sub">Fill in your details — we'll get back within 24 hours.</p>
                    <HeroContactForm />
                </div>
            </div>
        </div>
    );
}

function PortfolioSection({ onOpenForm }) {
    return (
        <section className="pf-section" id="portfolio">
            <div className="pf-inner">
                <div className="pf-left">
                    <div className="partners-header1">
                        <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our  Portfolio</div>
                    </div>
                    <h2 className="pf-heading">
                        Websites We've Built That <span><i>Are Already Driving Results</i></span>
                    </h2>
                    <p className="pf-desc">
                        Discover our latest website projects showcasing thoughtful design, seamless user experiences, and modern development across diverse industries.
                    </p>

                    <div className="pf-btns">
                        <button
                            type="button"
                            onClick={onOpenForm}
                            className="pf-btn"
                            style={{ border: "none" }}
                        >
                            Start Your Project  →
                        </button>
                    </div>
                </div>

                <div className="pf-cols">
                    <PortfolioColumn items={PORTFOLIO_COL1} speed={0.6} direction="up" />
                    <PortfolioColumn items={PORTFOLIO_COL2} speed={0.5} direction="down" />
                    <PortfolioColumn items={PORTFOLIO_COL3} speed={0.7} direction="up" />
                </div>
            </div>
        </section>
    );
}

// ════════════════════════════════════════════
//  SECTION 8: TESTIMONIAL SLIDER
// ════════════════════════════════════════════

function useWindowWidth() {
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
    useEffect(() => {
        const handler = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);
    return width;
}

const testimonials = [
    { index: 0, text: "PCS delivered a modern responsive website with SEO optimization, analytics integration, heatmap tracking, and performance monitoring. We appreciate their team's dedication, technical expertise, and timely support, which significantly improved our online visibility, website performance, and customer engagement.", name: "Mr.Ashwin", role: "Founder", badge: ["Website Development", "SEO"] },
    { index: 1, text: "Our basic single-page website was upgraded into a professionally structured multi-page platform with enhanced SEO, GMB optimization, analytics setup, and customer activity tracking. We thank the PCS team for their commitment, quick support, and valuable contribution in strengthening our online presence.", name: "Mr.Sabarinath", role: "Founder", badge: ["Website Development", "SEO", "Local SEO"] },
    { index: 2, text: "A fresh UI design with strong website development, improved online reach, lead capture setup, and user activity insights was successfully developed by the PCS team. Every change request was handled patiently while turning our ideas into exactly what we expected. The late-night support before launch was truly appreciated.", name: "Mr.Clement Selvam", role: "Founder", badge: ["Website Development", "SEO"] },
    { index: 3, text: "As a growing forest-based natural products brand, we partnered with PCS to expand our store presence and online sales. PCS team developed a complete e-commerce platform with Razorpay setup, order management, inventory tracking, centralized dashboard, WhatsApp integration for smooth business operations.", name: "Mr.Karupasamy", role: "Director", badge: ["E-Commerce", "SEO", "Local SEO"] },
    { index: 4, text: "Competing in the global market we required a website that matched international standards. With strategic content, SEO optimization, analytics integration, and performance enhancements, our digital presence was significantly strengthened. We appreciate the PCS team for their expertise, flexibility, consistent support throughout the process.", name: "Mr.Gunasekaran", role: "Founder", badge: ["SEO", "Content Marketing", "Paid Ads"] },
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

function StarIcon() {
    return (
        <svg width={14} height={14} viewBox="0 0 24 24" fill="#f47920" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );
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
                top: 0,                  /* ← margin-top bug fix: top:0 + alignItems:flex-start on parent */
                ...posStyles[pos],
            }}
        >
            <div style={{ fontSize: isMobile ? 28 : 36, color: "#f47920", lineHeight: 1, fontFamily: "Georgia, serif", marginBottom: 8 }}>"</div>
            <div style={{ fontSize: isMobile ? 11.5 : 13, color: "#3d4f6a", lineHeight: isMobile ? 1.65 : 1.75, marginBottom: isMobile ? 14 : 22, flex: 1, fontWeight: 400 }}>{data.text}</div>
            <div style={{ height: 1, background: "#f0f2f7", marginBottom: isMobile ? 10 : 16 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <div style={{ fontSize: isMobile ? 13 : 15, fontWeight: 700, color: "#0d1f3c" }}>{data.name}</div>
                <div style={{ fontSize: 11, color: "#6b7a94", lineHeight: 1.4, fontWeight: 400 }}>{data.role}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 4 }}>
                    {data.badge.map((b) => (
                        <span key={b} style={{ display: "inline-block", fontSize: 9.5, fontWeight: 600, letterSpacing: "0.05em", padding: "2px 7px", borderRadius: 20, background: "rgba(244,121,32,0.1)", color: "#f47920", textTransform: "uppercase" }}>{b}</span>
                    ))}
                </div>
                <div style={{ display: "flex", gap: 3, marginTop: 6 }}>
                    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
            </div>
        </div>
    );
}

function TestimonialSlider() {
    const [current, setCurrent] = useState(2);
    const timerRef = useRef(null);
    const touchX = useRef(null);
    const stageRef = useRef(null);
    const [stageHeight, setStageHeight] = useState(380);
    const total = testimonials.length;
    const width = useWindowWidth();
    const isMobile = width < 640;
    const isTablet = width >= 640 && width < 1024;

    /* ── Dynamic stage height: measure the active card after render ── */
    useEffect(() => {
        if (!stageRef.current) return;
        const activeCard = stageRef.current.querySelector("[data-active='true']");
        if (activeCard) {
            const h = activeCard.getBoundingClientRect().height;
            if (h > 0) setStageHeight(h + 8);  /* +8 tiny breathing room */
        }
    }, [current, width]);

    const startAuto = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % total), 3000);
    };
    useEffect(() => { startAuto(); return () => clearInterval(timerRef.current); }, []);

    const goTo = (idx) => { setCurrent(idx); startAuto(); };

    /* ── Touch swipe handlers ── */
    const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) < 40) return;          /* ignore tiny taps */
        if (dx < 0) goTo((current + 1) % total);
        else goTo((current - 1 + total) % total);
    };

    return (
        <section style={{ width: "100%", maxWidth: 1100, margin: "0 auto", padding: isMobile ? "40px 16px" : "60px 20px", fontFamily: "'Poppins', sans-serif", overflow: "hidden" }}>
            <div className="partners-header1" style={{ marginBottom: isMobile ? 12 : 16, textAlign: "center" }}>
                <div className="partners-eyebrow" style={{ marginBottom: "12px", textAlign: "start" }}>Client Testimonials</div>
            </div>
            <h2 style={{ fontSize: isMobile ? 22 : isTablet ? 28 : "clamp(28px,3vw,40px)", fontWeight: 700, color: "#0d1f3c", lineHeight: 1.25, marginBottom: isMobile ? 28 : 48, textAlign: "center" }}>
                What Our Clients{" "}
                <span style={{ color: "#f47920", fontStyle: "italic", fontWeight: 700 }}>Say About PCS</span>
            </h2>

            {/* Stage — alignItems:flex-start so cards grow downward, no margin-top */}
            <div
                ref={stageRef}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                style={{
                    position: "relative",
                    height: stageHeight,
                    display: "flex",
                    alignItems: "flex-start",   /* ← key fix: cards anchor at top, no phantom margin */
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

            {/* Dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, alignItems: "center" }}>
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
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

            {/* Mobile swipe hint */}
            {isMobile && (
                <p style={{ textAlign: "center", fontSize: 11, color: "#b0b8c9", marginTop: 14, letterSpacing: "0.03em" }}>
                    ← swipe to explore →
                </p>
            )}
        </section>
    );
}


// ── Technologies Marquee Section ─────────────────────
function TechnologiesSection() {
    const row1 = [
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Shopify", logo: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/15.16.0/shopify.svg" },
    ];
    const row2 = [
        { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
        { name: "Elementor", logo: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/15.16.0/elementor.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Shopify", logo: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/15.16.0/shopify.svg" },

    ];

    // Duplicate each row so seamless infinite scroll works
    const doubled1 = [...row1, ...row1];
    const doubled2 = [...row2, ...row2];

    return (
        <section className="tech-section">
            <div className="tech-header">
                <div className="partners-header1" style={{ textAlign: 'center' }}>
                    <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Technology Stack
                    </div>
                </div>
                <h2 className="tech-title">
                    Technologies We <span>Work With</span>
                </h2>
                <p className="tech-desc">
                    We use trusted technologies, frameworks, and platforms to build fast, secure, scalable, and high-performing websites tailored to your business needs.
                </p>
            </div>

            {/* Row 1 — scrolls RIGHT (left-to-right direction) */}
            <div className="tech-track-wrap" style={{ marginBottom: 20 }}>
                <div className="tech-row">
                    <div className="tech-row-inner row-right speed-1">
                        {doubled1.map((t, i) => (
                            <div className="tech-card" key={i}>
                                <img src={t.logo} alt={t.name} className="tech-card-logo" />
                                <span className="tech-card-name">{t.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Row 2 — scrolls LEFT (right-to-left direction) */}
            <div className="tech-track-wrap">
                <div className="tech-row">
                    <div className="tech-row-inner row-left speed-2">
                        {doubled2.map((t, i) => (
                            <div className="tech-card" key={i}>
                                <img src={t.logo} alt={t.name} className="tech-card-logo" />
                                <span className="tech-card-name">{t.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ── Our Services Section ──────────────────────────────
function OurServicesSection() {
    const services = [
        {
            img: "/img/landing-page/static-website.webp",
            title: "Website Design",
            desc: "Professional website designs that strengthen your brand and turn visitors to customers",
            features: ["Premium UI/UX Layouts", "User-Friendly Designs", "Modern visuals with custom icons and buttons"],
            href: "/website-design",
        },
        {
            img: "/img/landing-page/website-design.webp",
            title: "Static Website Development",
            desc: "Affordable single-page websites with essential SEO setup, built to help startups and growing businesses",
            features: ["Standard Design Template", "Fast Loading Page", "Mobile Responsive"],
            href: "/static-website-development",
        },
        {
            img: "/img/landing-page/custom-website-development.webp",
            title: "Custom Website Development",
            desc: "Get a customized website tailored to your business, industry, and specific requirements, designed to support your business growth ",
            features: ["Custom Features & Third-Party Integration", "User-friendly website flow", "High-performance & SEO-ready"],
            href: "/custom-website-development",
        },
        {
            img: "/img/landing-page/woo-commerce.webp",
            title: "WooCommerce Development",
            desc: "High-performing WooCommerce stores designed to attract more customers, increase online sales, and simplify the buying process.",
            features: ["Inventory & Order Tracking", "Payment Gateway Integration", "Store & Product Management"],
            href: "/woocommerce-website-development",
        },
        {
            img: "/img/landing-page/ecommerce-development.webp",
            title: "E-Commerce Development",
            desc: "Scalable Shopify Stores Built to Increase Sales and Support Long-Term Business Growth ",
            features: ["Shopify store & product setup", "Payment and Shipping Integration", "SEO Ready and Mobile Responsive"],
            href: "/e-commerce-website-development",
        },
        {
            img: "/img/landing-page/shopify.webp",
            title: "Shopify Development",
            desc: "Complete E-commerce Features Built to Improve Shopping Experiences, Drive More Sales, and Grow Your Online Business",
            features: ["Custom Product & Category Setup", "Customer Login & Account Management", "Shopping Cart & Easy Checkout Process"],
            href: "/shopify-website-development",
        },
    ];

    return (
        <section id="service" style={{ padding: "70px 5% 5rem" }}>
            <div className="partners-header1" style={{ textAlign: 'center' }}>
                <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our  Service</div>
            </div>

            <h2 className="tech-title svc-main-heading">
                <span>Website Development Services</span> That Fit Your Business Goals
            </h2>
            <p style={{ textAlign: "center", maxWidth: 1200, margin: "20px auto 60px", color: "#666", lineHeight: 1.8, fontSize: "0.96rem" }}>
                Every business is different. Every website we make is different too. We offer services, each one designed to fit your budget, timeline and growth targets.
            </p>
            <div className="svc-grid">
                {services.map((svc, i) => (
                    <div
                        key={i}
                        s/* REMOVE height: "90%" and add these instead: */
                        style={{
                            background: "#fff",
                            borderRadius: 24,
                            padding: "30px 30px 28px 30px",
                            boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
                            borderTop: "5px solid #ed8337",
                            display: "flex",
                            flexDirection: "column",
                            // REMOVE height: "90%" entirely
                            transition: "transform 0.35s ease, box-shadow 0.35s ease",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.12)"; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 35px rgba(0,0,0,0.08)"; }}
                    >
                        <img src={svc.img} alt={svc.title} style={{ width: "90%", objectFit: "contain", margin: "0 auto 20px" }} />
                        <h3 style={{ color: "#004168", fontSize: 20, marginBottom: 15, fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
                            {svc.title}
                        </h3>
                        <p style={{ color: "#666", lineHeight: 1.8, marginBottom: 20, fontSize: "0.9rem" }}>
                            {svc.desc}
                        </p>
                        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 25px" }}>
                            {svc.features.map((f, j) => (
                                <li key={j} style={{ position: "relative", paddingLeft: 30, marginBottom: 12, color: "#444", lineHeight: 1.6, fontSize: "0.9rem" }}>
                                    <span style={{ position: "absolute", left: 0, top: 0, color: "#ed8337", fontWeight: "bold", fontSize: 18 }}>✓</span>
                                    {f}
                                </li>
                            ))}
                        </ul>
                        {/* <a
              href={svc.href}
              style={{ display: "inline-block", width: '42%', fontSize: '14px', textAlign: "center", padding: "10px 20px", background: "#004168", color: "#fff", textDecoration: "none", borderRadius: 50, fontWeight: 600, fontFamily: "'Poppins', sans-serif", transition: "background 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#ed8337"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#004168"; }}
            >
              Learn More
            </a> */}
                    </div>
                ))}
            </div>
        </section>
    );
}

// ── Reasons / Portfolio-style Cards Section (exact match) ──
const REASONS_DATA = [
    {
        img: "/img/case-study-feral.webp",
        tags: [{ label: "Website Development", type: "orange" }, { label: "SEO", type: "navy" }],
        title: "Feral Roots",
        short: "Priyam Consultancy Services transformed Feral Roots into a thriving online business with a custom eCommerce website featuring secure online",
        full: "Priyam Consultancy Services transformed Feral Roots into a thriving online business with a custom eCommerce website featuring secure online payments, order tracking, SEO for higher search visibility, and Google Business Profile optimization to increase local reach and customer enquiries.",
    },
    {
        img: "/img/case-study-urtc.webp",
        tags: [{ label: "Website Development", type: "orange" }, { label: "SEO", type: "navy" }],
        title: "URCTS",
        short: "Priyam Consultancy Services developed a premium, SEO-optimized website for URCTS featuring immersive 3D banners, comprehensive service ",
        full: "Priyam Consultancy Services developed a premium, SEO-optimized website for URCTS featuring immersive 3D banners, comprehensive service presentation and complete SEO implementation with keyword-focused content, strengthening brand credibility, improving visibility, enhancing user engagement, supporting global business growth.",
    },
    {
        img: "/img/case-study-tgcc.webp",
        tags: [{ label: "SEO", type: "green" }, { label: "Website Development", type: "navy" }],
        title: "TGCC",
        short: "TGCC partnered with Priyam Consultancy Services to launch a premium website reflecting its training excellence. Using AI-powered visuals, strategic SEO,",
        full: "TGCC partnered with Priyam Consultancy Services to launch a premium website reflecting its training excellence. Using AI-powered visuals, strategic SEO, and modern design, the website was successfully delivered within 20 days, increasing training enquiries and credibility.",
    },
    {
        img: "/img/case-study-abb.webp",
        tags: [{ label: "Website Development", type: "navy" }, { label: "Content", type: "green" }],
        title: "ABB Consultancy",
        short: "Priyam Consultancy Services redesigned ABB's website with a premium, service-focused design, keyword-rich SEO content, and a refined user ",
        full: "Priyam Consultancy Services redesigned ABB's website with a premium, service-focused design, keyword-rich SEO content, and a refined user experience, strengthening brand credibility, improving search visibility, and creating a professional digital presence aligned with business goals successfully.",
    },
    {
        img: "/img/case-study-riya.webp",
        tags: [{ label: "Website Development", type: "orange" }, { label: "SEO", type: "navy" }],
        title: "Riya Consultancy Services",
        short: "With limited local visibility, RIYA partnered with Priyam Consultancy Services to redesign its website using competitor analysis, targeted SEO, and social",
        full: "With limited local visibility, RIYA partnered with Priyam Consultancy Services to redesign its website using competitor analysis, targeted SEO, and social media marketing, helping the brand reach more local prospects, improve search visibility, and generate quality business enquiries.",
    },
    {
        img: "/img/case-study-talent-tribe.webp",
        tags: [{ label: "Website Development", type: "orange" }],
        title: "Talent Tribe",
        short: "Using AI-assisted design and custom website development, Priyam Consultancy Services built a premium website for Talent Tribe to strengthen its",
        full: "Using AI-assisted design and custom website development, Priyam Consultancy Services built a premium website for Talent Tribe to strengthen its brand, improve online visibility, enhance usability, support SEO, and create a strong foundation for future business enquiries.",
    },
];

function ReasonCard({ data }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="reason-card">
            <div className="reason-card-img-wrap">
                <img src={data.img} alt={data.title} className="reason-card-img" />
            </div>

            <div className="reason-card-body">
                <div className="reason-card-tags">
                    {data.tags.map((t, i) => (
                        <span key={i} className={`reason-tag reason-tag-${t.type}`}>
                            <span className="reason-tag-dot" />
                            {t.label}
                        </span>
                    ))}
                </div>

                <h3 className="reason-card-title">
                    <span className="reason-user-icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                        </svg>
                    </span>
                    {data.title}
                </h3>

                <p className={`reason-desc ${open ? "is-open" : ""}`}>
                    {open ? data.full : data.short}
                </p>

                <div className="reason-card-footer">
                    <button
                        type="button"
                        className="reason-read-more"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? "Read Less" : "Read More"}
                        <span className="reason-read-more-arr">→</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

function ReasonsSection() {
    return (
        <section className="reasons-section" id="our-case-studies">
            <style>{`
        /* ══ REASONS / CLIENT-STYLE CARDS ══ */
        .reasons-section {
          padding: 80px 20px;
          background: #f4f6f9;
        }
        .reasons-section .container {
          max-width: 1300px;
          margin: auto;
          // text-align: center;
        }
        .reasons-section .section-title {
          text-align: center;
          font-size: 40px;
          margin-bottom: 60px;
          color: #0d1f2d;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
        }
        .reasons-section .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 3.5rem;
        }

        /* CARD SHELL */
        .reason-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          display: flex;
          flex-direction: column;
        }
        .reason-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.12);
        }

        /* IMAGE — ZOOM ON HOVER */
        .reason-card-img-wrap {
          width: 100%;
          height: 250px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .reason-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .reason-card:hover .reason-card-img {
          transform: scale(1.1);
        }

        /* CARD BODY */
        .reason-card-body {
          // padding: 24px 24px 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .reason-card-tags {
          display: flex; gap: 8px; flex-wrap: wrap;
          margin: 24px 0;
        }
        .reason-tag {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 11px; font-weight: 700; letter-spacing: .03em;
          text-transform: uppercase; padding: 5px 12px; border-radius: 50px;
          font-family: 'Poppins', sans-serif;
        }
        .reason-tag-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: currentColor; flex-shrink: 0;
        }
        .reason-tag-orange { background: rgba(237,131,55,0.12); color: #ed8337; }
        .reason-tag-navy   { background: rgba(0,65,104,0.1);   color: #004168; }
        .reason-tag-green  { background: rgba(34,197,94,0.12); color: #16a34a; }

        .reason-card-title {
          display: flex; align-items: center; gap: 8px;
          font-size: 18px; margin: 0 0 12px;
          color: #004168; font-weight: 700;
          font-family: 'Poppins', sans-serif;
        }
        .reason-user-icon {
          color: #004168;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }

        .reason-desc {
          margin-bottom: 18px;
          font-size: 14.5px; line-height: 1.75; color: #555;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: all .3s ease;
        }
        .reason-desc.is-open {
          -webkit-line-clamp: unset;
          overflow: visible;
        }

        // .reason-card-footer {
        //   padding-top: 14px;
        //   border-top: 1px solid #eee;
        // }

        /* READ MORE — SOLID ORANGE BUTTON */
        .reason-read-more {
          display: inline-flex;
    /* align-items: center; */
    gap: 8px;
    background: #ffffff;
    color: #ed8337;
    border: none;
    /* border-radius: 50px; */
    /* padding: .68rem 1.4rem; */
    font-family: 'Poppins', sans-serif;
    font-size: .85rem;
    font-weight: 600;
    cursor: pointer;
    transition: background .2s, transform .18s;
        }
        .reason-read-more:hover {
          // background: #004168;
          transform: translateY(-2px);
        }
        .reason-read-more-arr {
          display: inline-flex; align-items: center; justify-content: center;
          transition: transform .25s;
        }
        .reason-read-more:hover .reason-read-more-arr {
          transform: translateX(3px);
        }

        @media(max-width: 992px) {
          .reasons-section .cards-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media(max-width: 768px) {
          .reasons-section .section-title { font-size: 30px; }
          .reasons-section .cards-grid { grid-template-columns: 1fr; }
        }
      `}</style>

            <div className="container">
                <div className="partners-header1" style={{ textAlign: 'center' }}>
                    <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Case Studies
                    </div>
                </div>
                <h2 className="pg-cta-heading" style={{ textAlign: 'center' }}>  <em>Success Stories </em> That Drive Growth
                </h2>
                <p style={{ textAlign: "center", maxWidth: 1000, margin: "20px auto 60px", color: "#666", lineHeight: 1.8, fontSize: "0.96rem" }}>
                    Explore how we help businesses across industries improve online visibility, generate leads, and drive growth through customized website solutions.
                </p>
                <div className="cards-grid">
                    {REASONS_DATA.map((r, i) => (
                        <ReasonCard key={i} data={r} />
                    ))}
                </div>
            </div>
        </section>
    );
}


// ── Footer Section ────────────────────────────────────
function FooterSection() {
    const services = [
        "Website Design",
        "Static Website Development",
        "Custom Website Development",
        "WooCommerce Development",
        "WooCommerce Development",
        "Shopify Development",
    ];

    return (
        <footer className="pcs-footer">
            <style>{`
        .pcs-footer {
          background: #0c4a6e;
          padding: 4.5rem 6% 3rem;
          position: relative;
          overflow: hidden;
        }
        .pcs-footer::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(237,131,55,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(237,131,55,0.03) 1px, transparent 1px);
          background-size: 52px 52px;
        }
        .pcs-footer-inner {
          max-width: 1200px; margin: 0 auto; position: relative; z-index: 2;
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr;
          gap: 3rem;
        }
        // .pcs-footer-logo-row {
        //   display: flex; align-items: center; gap: 10px; margin-bottom: 1.3rem;
        // }
        .pcs-footer-logo-text {
          font-family: 'Poppins', sans-serif;
          font-size: 1.6rem; font-weight: 800; color: #fff; letter-spacing: .02em;
        }
        .pcs-footer-logo-text span { color: #ed8337; }
        .pcs-footer-logo-sub {
          font-family: 'Poppins', sans-serif;
          font-size: .6rem; font-weight: 600; letter-spacing: .18em;
          color: rgba(255,255,255,0.55); margin-top: -4px;
        }
        .pcs-footer-desc {
          font-size: .88rem; line-height: 1.8; color: rgba(255,255,255,0.7);
          max-width: 340px; font-family: 'Poppins', sans-serif;margin-top: 1.8rem;
        }
        .pcs-footer-heading {
          font-family: 'Poppins', sans-serif;
          font-size: 1.1rem; font-weight: 700; color: #fff;
          margin-bottom: 1.4rem;
        }
        .pcs-footer-list {
       list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: .8rem;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    font-family: 'Poppins', sans-serif;
        }
        .pcs-footer-list li a {
          font-size: .88rem; color: rgba(255,255,255,0.72);
          text-decoration: none; font-family: 'Poppins', sans-serif;
          transition: color .2s;
        }
        .pcs-footer-list li a:hover { color: #ed8337; }
        .pcs-footer-contact-item {
          display: flex; align-items: flex-start; gap: .7rem;
          margin-bottom: 1.1rem;
        }
        .pcs-footer-contact-icon {
          width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0;
          background: #ed8337; color: #fff;
          display: flex; align-items: center; justify-content: center;
          font-size: .8rem;
        }
        .pcs-footer-contact-text {
          font-size: .86rem; line-height: 1.6; color: rgba(255,255,255,0.78);
          font-family: 'Poppins', sans-serif;
        }
        .pcs-footer-contact-text a { color: rgba(255,255,255,0.78); text-decoration: none; }
        .pcs-footer-contact-text a:hover { color: #ed8337; }
       .pcs-footer-socials { display: flex; gap: .7rem; margin-top: 1.4rem; }
.pcs-footer-social-btn {
  width: 36px; height: 36px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  text-decoration: none; transition: transform .2s, opacity .2s;
  flex-shrink: 0;
}
  .pcs-footer-social-btn svg { width: 16px; height: 16px; }

.pcs-footer-social-btn:hover { transform: translateY(-3px); opacity: 0.9; }
.pcs-footer-social-linkedin { background: #0A66C2; }
.pcs-footer-social-facebook { background: #1877F2; }
.pcs-footer-social-instagram { background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%); }
.pcs-footer-social-x { background: #000; }
        .pcs-footer-bottom {
          max-width: 1200px; margin: 3rem auto 0; padding-top: 1.6rem;
          border-top: 1px solid rgba(255,255,255,0.12);
          text-align: center; position: relative; z-index: 2;
        }
        .pcs-footer-bottom p {
          font-size: .8rem; color: rgba(255,255,255,0.5);
          font-family: 'Poppins', sans-serif;
        }
        @media(max-width: 900px) {
          .pcs-footer-inner { grid-template-columns: 1fr 1fr; gap: 2.4rem; }
          .pcs-footer-inner > div:first-child { grid-column: 1 / -1; }
        }
        @media(max-width: 600px) {
          .pcs-footer { padding: 3.5rem 6% 2.5rem; }
          .pcs-footer-inner { grid-template-columns: 1fr; gap: 2.2rem; }
        }
      `}</style>

            <div className="pcs-footer-inner">
                {/* Column 1: Logo + Description */}
                <div>
                    <div className="pcs-footer-logo-row">
                        <img src="/img/footer-logo.png" alt="PCS Logo" width="30%" />

                    </div>
                    <p className="pcs-footer-desc">
                        We are one of the fastest-growing full-service business solutions companies, delivering cutting-edge, result-driven strategies across digital marketing, technology, branding, and consulting to create the perfect blend of innovation and impact.
                    </p>

                </div>

                {/* Column 2: Our Services */}
                <div>
                    <h4 className="pcs-footer-heading">Our Services</h4>
                    <ul className="pcs-footer-list">
                        {services.map((s, i) => (
                            // <li key={i}><a href="#">{s}</a></li>
                            <li key={i}>{s}</li>

                        ))}
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
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
            </div>


        </footer>
    );
}
// ── Page Export ───────────────────────────────────────

export default function DigitalMarketingNewPage() {
    const [formOpen, setFormOpen] = useState(false);

    return (
        <Layout
            title="Best Website Development Company in Coimbatore | PCS "
            description="Break away from ordinary business websites. Priyam Consultancy Services develops next-generation, SEO-optimized websites that help Coimbatore brands stand out."
        >
            <SEOHead />
            <GlobalStyles />
            <SiteHeader />
            <HeroSection />
            <OurServicesSection />
            <PortfolioSection onOpenForm={() => setFormOpen(true)} />
            <TechnologiesSection />
            <ReasonsSection />
            <CTASplitSection />
            <BuildTogetherCTASection />
            <ModernFeaturesSection />
            <TestimonialSlider />
            <MilestonesCTA />
            <FAQSection />
            <FooterSection />
            <FormPopupModal open={formOpen} onClose={() => setFormOpen(false)} />
        </Layout>
    );
}