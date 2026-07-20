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
            "@id": "https://www.priyamconsultancy.com/",
            "name": "Home"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": "https://www.priyamconsultancy.com/website-development-company-in-coimbatore/",
            "name": "Website Development Company in Coimbatore"
          }
        }
      ]
    },
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
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.priyamconsultancy.com/website-development-company-in-coimbatore/#service",
      "name": "Website Development Services",
      "serviceType": "Website Design and Development Services",
      "url": "https://www.priyamconsultancy.com/website-development-company-in-coimbatore/",
      "description": "Priyam Consultancy provides professional website development services including static website development, dynamic website development, WordPress development, WooCommerce development, Shopify development, ecommerce website development, custom web applications, website maintenance, and SEO-friendly website solutions for businesses across India.",
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
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Website Development Company in Coimbatore | Priyam Consultancy Services",
      "image": "https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png",
      "@id": "https://www.priyamconsultancy.com/website-development-company-in-coimbatore/",
      "url": "https://www.priyamconsultancy.com/website-development-company-in-coimbatore/",
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
        "name": "What is the difference between a static and dynamic website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A static website displays fixed content that remains the same for every visitor unless manually updated by a developer. A dynamic website, on the other hand, displays interactive and database-driven content that can change based on user behavior, location, or preferences. Dynamic websites are ideal for businesses that require regular updates, user logins, eCommerce functionality, or content management systems."
        }
      }, {
        "@type": "Question",
        "name": "What is a static website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A static website consists of fixed web pages built using HTML, CSS, and basic scripts. The content remains the same for all visitors and does not change unless manually edited. Static websites are suitable for small businesses, portfolios, landing pages, and informational websites that do not require frequent updates or complex functionality."
        }
      }, {
        "@type": "Question",
        "name": "What is an eCommerce website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An eCommerce website is an online platform that allows businesses to sell products or services digitally. It includes features like product listings, shopping cart, secure payment gateways, order management, and customer accounts. Platforms like WooCommerce and Shopify enable businesses to build scalable and user-friendly online stores."
        }
      }, {
        "@type": "Question",
        "name": "How to create a category page in WooCommerce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To create a category page in WooCommerce, go to Products → Categories in your WordPress dashboard and add a new category by entering the name, slug, and description. After creating it, assign relevant products to that category. If required, add the category to your website menu for easy navigation. WooCommerce automatically generates a dedicated category page that displays all products assigned to it."
        }
      }, {
        "@type": "Question",
        "name": "How to delete a Shopify store?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To delete a Shopify store, log in to your Shopify admin panel and navigate to Settings → Plan. Click on Deactivate store, select a reason for closing, and confirm the deactivation. Make sure all outstanding charges and payments are cleared before proceeding, as your store cannot be closed until all dues are settled."
        }
      }, {
        "@type": "Question",
        "name": "What is WooCommerce and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WooCommerce is a powerful eCommerce plugin for WordPress that allows businesses to create and manage online stores. It enables users to add products, manage inventory, process payments, handle shipping, and track orders directly from the WordPress dashboard. WooCommerce is highly customizable, making it suitable for small businesses as well as large-scale online stores."
        }
      }]
    }

  ];
  return (
    <Head>
      <title>Website Development Company in Coimbatore | Expert Web </title>
      <meta name="description" content="Looking for a website development company in Coimbatore? We design responsive, SEO-friendly, high-performance websites to grow your business . " />
      <meta name="keywords" content="Web Development Company in Coimbatore, Digital Marketing Company Coimbatore, Digital Marketing in Coimbatore, SEO Company in Coimbatore, Recruitment Agency in Coimbatore, SEO Services in Coimbatore, Website Development Company in Coimbatore " />
      <link rel="canonical" href="https://www.priyamconsultancy.com/website-development-company-in-coimbatore/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Website Development Company in Coimbatore | Expert Web " />
      <meta property="og:description" content="Looking for a website development company in Coimbatore? We design responsive, SEO-friendly, high-performance websites to grow your business . " />
      <meta property="og:url" content="https://www.priyamconsultancy.com/website-development-company-in-coimbatore/" />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Website Development Company in Coimbatore | Expert Web " />
      <meta name="twitter:description" content="Looking for a website development company in Coimbatore? We design responsive, SEO-friendly, high-performance websites to grow your business . " />
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
    .pg-cta-heading { font-family: 'Poppins', sans-serif; font-size: clamp(2rem, 3.2vw, 2.8rem); font-weight: 700; line-height: 1.15; color: #0d1f2d; margin-bottom: 1.2rem; }
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
  }
  `}</style>
);

// ── Inline SVG Icon Helpers (replaces missing icon-font classes) ──
// Used by ModernFeaturesSection (.mf-icon-box)
// function FeatIcon({ name }) {
//   const icons = {
//     code: "/img/icon/feat-custom-web.webp",
//     plug: "/img/icon/feat-api.webp",
//     responsive: "/img/icon/feat-responsive.webp",
//     search: "/img/icon/feat-seo.webp",
//     rocket: "/img/icon/feat-speed.webp",
//     server: "/img/icon/feat-server.webp",
//   };
//   return icons[name] ? <img src={icons[name]} alt={name} width="20" height="20" /> : null;
// }

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

// ── Key Features Data ─────────────────────────────────
// const FEATURES = [
//   { icon: <img src="/icon/feat-structure.webp" alt="Strategic Website Structure" width="28" height="28" />, title: "Strategic Website Structure", desc: "Well-planned layouts and intuitive navigation systems crafted to enhance usability, improve engagement, and guide visitors smoothly toward meaningful actions." },
//   { icon: <img src="/icon/feat-responsive.webp" alt="Responsive and Adaptive Design" width="28" height="28" />, title: "Responsive & Adaptive Design", desc: "Device-optimized, mobile-first designs ensuring seamless performance and consistent user experience across desktops, tablets, and smartphones." },
//   { icon: <img src="/icon/feat-seo.webp" alt="Search Ready Development" width="28" height="28" />, title: "Search-Ready Development", desc: "SEO-focused coding practices, structured metadata, schema setup, and optimized architecture to strengthen search engine visibility." },
//   { icon: <img src="/icon/feat-performance.webp" alt="Speed and Performance Enhancement" width="28" height="28" />, title: "Speed & Performance Enhancement", desc: "Optimized frameworks, efficient database structuring, and performance tuning techniques to deliver fast-loading and stable websites." },
//   { icon: <img src="/icon/feat-integrations.webp" alt="Seamless System Integrations" width="28" height="28" />, title: "Seamless System Integrations", desc: "Integration with payment gateways, WhatsApp, shipping systems, analytics tools, and marketing solutions for streamlined operations." },
//   { icon: <img src="/icon/feat-scalability.webp" alt="Future Ready Scalability" width="28" height="28" />, title: "Future-Ready Scalability", desc: "Flexible development frameworks designed to accommodate business expansion, advanced features, increasing traffic, and evolving digital needs." },
// ];

// ── FAQ Data ──────────────────────────────────────────
const faqData = [
  { q: "What is the difference between a static and dynamic website?", a: "A static website displays fixed content that remains the same for every visitor unless manually updated by a developer. A dynamic website, on the other hand, displays interactive and database-driven content that can change based on user behavior, location, or preferences. Dynamic websites are ideal for businesses that require regular updates, user logins, eCommerce functionality, or content management systems." },
  { q: "What is a static website?", a: "A static website consists of fixed web pages built using HTML, CSS, and basic scripts. The content remains the same for all visitors and does not change unless manually edited. Static websites are suitable for small businesses, portfolios, landing pages, and informational websites that do not require frequent updates or complex functionality." },
  { q: "What is an eCommerce website?", a: "An eCommerce website is an online platform that allows businesses to sell products or services digitally. It includes features like product listings, shopping cart, secure payment gateways, order management, and customer accounts. Platforms like WooCommerce and Shopify enable businesses to build scalable and user-friendly online stores." },
  { q: "How to create a category page in WooCommerce?", a: "To create a category page in WooCommerce, go to Products → Categories in your WordPress dashboard and add a new category by entering the name, slug, and description. After creating it, assign relevant products to that category. If required, add the category to your website menu for easy navigation. WooCommerce automatically generates a dedicated category page that displays all products assigned to it." },
  { q: "How to delete a Shopify store?", a: "To delete a Shopify store, log in to your Shopify admin panel and navigate to Settings → Plan. Click on Deactivate store, select a reason for closing, and confirm the deactivation. Make sure all outstanding charges and payments are cleared before proceeding, as your store cannot be closed until all dues are settled." },
  { q: "What is WooCommerce and how does it work?", a: "WooCommerce is a powerful eCommerce plugin for WordPress that allows businesses to create and manage online stores. It enables users to add products, manage inventory, process payments, handle shipping, and track orders directly from the WordPress dashboard. WooCommerce is highly customizable, making it suitable for small businesses as well as large-scale online stores. " },
];




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
        .hero-stats-grid {
          margin-top: 2.2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          animation: fadeUp 0.7s 0.36s ease both;
        }
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
          <span className="hl lined" style={{ marginLeft: '12px' }}> Website Development </span>
          Company in Coimbatore for Business Growth
        </h1>
        <p className="hero-sub">
          We are a trusted Web Development Company helping businesses build responsive, scalable, and conversion-focused websites. From corporate websites to e-commerce website development, we create digital experiences that strengthen brands and drive measurable growth.
        </p>
        <p className="hero-sub">
          As a Website Development Company, we deliver customized solutions designed to improve user experience, enhance online visibility, and support long-term business success.

        </p>
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


// ── App Banner ────────────────────────────────────────


// ── CTA Split Section ─────────────────────────────────
function CTASplitSection() {
  return (
    <section className="pg-cta-section">
      <div className="pg-cta-inner">
        <div className="pg-cta-img-wrap">
          <img src="/img/website-development/trusted-website-partner.webp" alt="PCS Digital Marketing Team in Coimbatore" className="pg-cta-img" />

        </div>
        <div>
          <div className="partners-header1" >
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Trusted Website Partner
            </div>
          </div>
          <h2 className="pg-cta-heading">Leading  <em>Website Development Company</em><br />in Coimbatore
          </h2>
          <p className="pg-cta-desc">
            We are  a trusted Website Development Company in Coimbatore delivering innovative, scalable, and digital solutions for businesses of all sizes. As a leading Website Design Company in Coimbatore, we specialize in creating responsive, user-friendly, and SEO-optimized websites that enhance brand visibility and drive measurable results.
          </p>
          <p className="pg-cta-desc2">
            From custom business websites and eCommerce Website Development to Shopify and WooCommerce solutions, our Website Development Services are designed to improve user experience, and support long-term business growth. We combine creativity, technology, and strategy to build websites that help businesses stand out in today's competitive digital landscape.          </p>

        </div>
      </div>
    </section>
  );
}



function BuildTogetherCTASection() {
  return (
    <section style={{ padding: "4rem 5% 4rem", background: '#fff' }}>
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

          <h3 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)",
            fontWeight: 700, color: "#fff",
            lineHeight: 1.2, margin: "0 0 0.7rem",
          }}>
            Ready to Grow with a <br /><em style={{ color: "#ed8337" }}>Web Development Company?</em><br />
          </h3>

          <p style={{
            fontSize: "0.9rem", color: "rgba(255,255,255,0.72)",
            lineHeight: 1.75, margin: 0, maxWidth: "480px",
          }}>
            Partner with Coimbatore's trusted web development team. From design to deployment — we build websites that drive real business growth.
          </p>
          <div style={{
            position: "relative", zIndex: 2,
            display: "flex", flexDirection: "column",
            alignItems: "start", gap: "0.85rem", flexShrink: 0, marginTop: "1.5rem",
          }}>
            <a href="#about" className="pg-form-btn">
              Get Free Consultation
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
        <h2 className="mf-h2">Powerful  <span>Features Built </span>for Growth
        </h2>
        <p className="mf-sub">Our website development services combine performance, security, and scalability to help businesses succeed online. Every website is built with modern technologies, SEO best practices, and user-focused experiences that drive measurable results.
        </p>
      </div>
      <div className="mf-body">
        <div className="mf-col">
          <div className="mf-item">
            <div className="mf-icon-box">
              <img src="/img/icon/feat-custom-web.webp" alt="Custom Web Development" width={"25px"} />
            </div>
            <div><h3 className="mf-t">Custom Web Development</h3><p className="mf-d">
              We build fully customized websites tailored to your business goals, branding, and functionality needs. No templates — only scalable, secure, and performance-driven development solutions.
            </p></div>
          </div>
          <div className="mf-item">
            <div className="mf-icon-box">
              <img src="/img/icon/feat-api-intergation.webp" alt="API Integration" width={"25px"} />
            </div>
            <div>
              <h3 className="mf-t">API Integration</h3><p className="mf-d">
                Seamless integration with third-party tools such as payment gateways, CRM systems, WhatsApp, shipping providers, and marketing platforms to automate workflows and improve efficiency.
              </p></div>
          </div>
          <div className="mf-item">
            <div className="mf-icon-box">
              <img src="/img/icon/feat-responsive-design.webp" alt="Mobile Responsiveness" width={"25px"} />
            </div>
            <div><h3 className="mf-t">Mobile Responsiveness</h3><p className="mf-d">Every website is designed to function flawlessly across all devices — desktops, tablets, and smartphones — ensuring a smooth and engaging user experience everywhere.
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
            <div><h3 className="mf-t">SEO Optimized Structure</h3><p className="mf-d">Websites are built with search engine-friendly architecture, optimized URLs, meta structure, schema, and clean coding practices to improve visibility and ranking potential.
            </p></div>
          </div>
          <div className="mf-item rev">
            <div className="mf-icon-box">
              <img src="/img/icon/feat-page-speed.webp" alt="Page Speed Optimization" width={"25px"} />
            </div>
            <div><h3 className="mf-t">Page Speed Optimization</h3><p className="mf-d">We optimize website performance through clean coding, image compression, caching, and lightweight frameworks to ensure fast loading times and better user retention.</p></div>
          </div>
          <div className="mf-item rev">
            <div className="mf-icon-box">
              <img src="/img/icon/feat-server-hosting.webp" alt="Hosting and Maintenance" width={"25px"} />
            </div>
            <div><h3 className="mf-t">Hosting &amp; Maintenance</h3><p className="mf-d">Reliable hosting setup with Hostinger along with ongoing website maintenance, security monitoring, backups, and updates to ensure uninterrupted business operations.
            </p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Why Choose Us Section ────────────────────────────
function WhyChooseUsSection() {
  return (
    <>
      <style>{`
        /* ══ WHY CHOOSE US — TARGET SECTION ══ */
        .wcu-section {
          position: relative;
          padding: 7rem 6% 8rem;
          background: linear-gradient(135deg, #002a44 0%, #004168 60%, #0a5282 100%);
          overflow: hidden;
        }
        .wcu-section::before {
          content:''; position:absolute; inset:0; pointer-events:none;
          background-image: linear-gradient(rgba(237,131,55,0.04) 1px,transparent 1px),
                            linear-gradient(90deg,rgba(237,131,55,0.04) 1px,transparent 1px);
          background-size: 60px 60px;
        }
        .wcu-inner-1 {
          position: relative; z-index: 2;
          max-width: 1160px; margin: 0 auto;
        }
        .wcu-header { margin-bottom: 3.5rem; }
        .wcu-eyebrow {
          display: inline-flex; align-items: center; gap: .5rem;
          font-family: 'Poppins', sans-serif;
          font-size: .72rem; font-weight: 700; color: #ed8337;
          letter-spacing: .14em; text-transform: uppercase; margin-bottom: .9rem;
        }
        .wcu-eyebrow-line { width: 22px; height: 2px; background: #ed8337; border-radius: 2px; }
        .wcu-heading {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.9rem, 2.9vw, 2.8rem);
          font-weight: 700; line-height: 1.12;
          color: #ffffff;
        }
        .wcu-heading span { color: #ed8337; }
        .wcu-body {
          display: grid;
          grid-template-columns: 480px 1fr;
          gap: 3rem;
          align-items: center;
        }
        .wcu-target-wrap {
          position: relative;
          width: 480px; height: 460px;
          flex-shrink: 0;
        }
        .wcu-arc-svg {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          pointer-events: none; overflow: visible;
        }
        .wcu-target-svg {
          position: absolute;
    left: -125px;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 60%;
    filter: drop-shadow(0 20px 50px rgba(0, 0, 0, 0.18));
    animation: wcu-target-float 4s ease-in-out infinite;

        }
        @keyframes wcu-target-float {
          0%,100% { transform: translateY(-50%) translateY(0); }
          50%      { transform: translateY(-50%) translateY(-10px); }
        }
        .wcu-arc-num {
          position: absolute;
          font-family: 'Space Mono', monospace;
          font-size: .7rem; font-weight: 700;
          color: rgba(237,131,55,0.6);
          letter-spacing: .05em;
        }
        .wcu-arc-num.n1 { top: 14%;  left: 52%; }
        .wcu-arc-num.n2 { top: 38%;  left: 61%; }
        .wcu-arc-num.n3 { top: 60%;  left: 61%; }
        .wcu-arc-num.n4 { top: 82%;  left: 52%; }
        .wcu-items {
          display: flex; flex-direction: column; gap: 0;
        }
        .wcu-item {
          display: flex; align-items: flex-start; gap: 1.1rem;
          padding: 1.4rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          opacity: 0; transform: translateX(28px);
          transition: opacity .6s ease, transform .6s ease;
          position: relative;
        }
        .wcu-item:first-child { border-top: 1px solid rgba(255,255,255,0.08); }
        .wcu-item.wcu-in { opacity: 1; transform: translateX(0); }
        .wcu-item-connector {
          position: absolute; left: -3rem; top: 50%;
          width: 2.5rem; height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(237,131,55,0.35));
          transform: translateY(-50%);
        }
        .wcu-item-icon {
          width: 52px; height: 52px; flex-shrink: 0; border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 2px solid rgba(237,131,55,0.35);
          box-shadow: 0 3px 14px rgba(237,131,55,0.15);
          display: flex; align-items: center; justify-content: center;
          transition: background .28s, border-color .28s, transform .28s, box-shadow .28s;
        }
        .wcu-item:hover .wcu-item-icon {
          border-color: #ed8337;
          transform: scale(1.1); box-shadow: 0 6px 22px rgba(237,131,55,0.32);
        }
        .wcu-item-icon svg {
          width: 22px; height: 22px; fill: none;
          stroke: #ed8337; stroke-width: 1.8;
          stroke-linecap: round; stroke-linejoin: round;
          transition: stroke .28s;
        }
        .wcu-item:hover .wcu-item-icon svg { stroke: #fff; }
        .wcu-item-body { flex: 1; }
        .wcu-item-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1rem; font-weight: 800;
          color: #ffffff; margin-bottom: .3rem; line-height: 1.25;
          transition: color .22s;
        }
        .wcu-item:hover .wcu-item-title { color: #ed8337; }
        .wcu-item-desc {
          font-size: .86rem; line-height: 1.72; color: rgba(255,255,255,0.55);
        }
        .wcu-item-arrow {
          align-self: center;
          width: 30px; height: 30px; flex-shrink: 0; border-radius: 50%;
          background: rgba(237,131,55,0.08);
          border: 1.5px solid rgba(237,131,55,0.2);
          display: flex; align-items: center; justify-content: center;
          transition: background .28s, border-color .28s, transform .28s;
        }
        .wcu-item:hover .wcu-item-arrow {
          background: #ed8337; border-color: #ed8337; transform: translateX(4px);
        }
        .wcu-item-arrow svg {
          width: 13px; height: 13px; fill: none;
          stroke: #ed8337; stroke-width: 2.2;
          stroke-linecap: round; stroke-linejoin: round;
          transition: stroke .28s;
        }
        .wcu-item:hover .wcu-item-arrow svg { stroke: #fff; }
 @media(max-width:1000px) {
  .wcu-body { 
    grid-template-columns: 1fr; 
    gap: 2rem; 
  }
  .wcu-target-wrap { 
    width: 100%; 
    height: auto;          /* ← was 320px, auto lets it size naturally */
    min-height: 220px;
    margin: 0 auto; 
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
  }
  .wcu-target-svg { 
    position: relative;    /* ← KEY: remove absolute */
    left: auto;            /* ← remove -125px offset */
    top: auto; 
    transform: none;       /* ← remove translateY(-50%) */
    width: 75%;
    max-width: 320px;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  .wcu-arc-svg { display: none; }
  .wcu-arc-num { display: none; }
  .wcu-item-connector { display: none; }
}

@media(max-width:560px) {
  .wcu-section { padding: 4rem 5% 5rem; }
  .wcu-target-wrap { height: 180px; }
  .wcu-target-svg {         width: 100%;
        margin-top: 240px; }
}
      `}</style>

      <section className="wcu-section">
        <div className="wcu-inner-1">

          <div className="wcu-header" style={{ textAlign: 'center' }}>
            <div className="partners-header1" style={{ textAlign: 'center' }}>
              <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Excellence That Sets Us Apart
              </div>
            </div>

            <h2 className="wcu-heading">Why Choose us As Your <span>Website Development </span>Partner?</h2>
          </div>

          <div className="wcu-body">

            {/* LEFT: Illustration */}
            <div className="wcu-target-wrap">

              {/* Dashed arc curve + connector lines */}
              <svg className="wcu-arc-svg" viewBox="0 0 480 460" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 300 230 C 340 230 360 80 440 70" stroke="rgba(237,131,55,0.3)" strokeWidth="1.5" strokeDasharray="6 5" fill="none" />
                <path d="M 300 230 C 340 230 370 160 440 175" stroke="rgba(237,131,55,0.3)" strokeWidth="1.5" strokeDasharray="6 5" fill="none" />
                <path d="M 300 230 C 340 230 370 295 440 285" stroke="rgba(237,131,55,0.3)" strokeWidth="1.5" strokeDasharray="6 5" fill="none" />
                <path d="M 300 230 C 340 230 360 370 440 390" stroke="rgba(237,131,55,0.3)" strokeWidth="1.5" strokeDasharray="6 5" fill="none" />
                <circle cx="440" cy="70" r="4" fill="rgba(237,131,55,0.5)" />
                <circle cx="440" cy="175" r="4" fill="rgba(237,131,55,0.5)" />
                <circle cx="440" cy="285" r="4" fill="rgba(237,131,55,0.5)" />
                <circle cx="440" cy="390" r="4" fill="rgba(237,131,55,0.5)" />
                <circle cx="300" cy="230" r="5" fill="rgba(237,131,55,0.5)" />
              </svg>



              {/* Growth / Analytics Dashboard Image */}
              <img
                src="/img/website-whu-choose-use.webp"
                alt="Results Analytics Dashboard"
                className="wcu-target-svg"
                style={{ objectFit: "contain", borderRadius: "18px" }}
              />

            </div>
            {/* END LEFT */}

            {/* RIGHT: 4 items */}
            <div className="wcu-items" id="wcuItemsRef">

              <div className="wcu-item">
                <div className="wcu-item-connector"></div>
                <div className="wcu-item-icon">
                  <img src="/img/icon/website-wcu-seo.webp" alt="Hosting and Maintenance" width={"25px"} />
                </div>
                <div className="wcu-item-body">
                  <h3 className="wcu-item-title">SEO-Optimized Website Architecture</h3>
                  <div className="wcu-item-desc">As a performance-driven website development company in Coimbatore, PCS builds search-engine-friendly websites designed to rank higher, load faster, and attract qualified traffic that converts into real business opportunities.</div>
                </div>
              </div>

              <div className="wcu-item">
                <div className="wcu-item-connector"></div>
                <div className="wcu-item-icon">
                  <img src="/img/icon/website-wcu-lead.webp" alt="Hosting and Maintenance" width={"25px"} />
                </div>
                <div className="wcu-item-body">
                  <h3 className="wcu-item-title">Improved Lead Conversion Efficiency</h3>
                  <div className="wcu-item-desc">Our conversion-focused website development and landing page optimization reduced cost per lead by <strong style={{ color: "#ed8337" }}>45%</strong>, generating higher-quality inquiries at a lower acquisition cost.</div>
                </div>
              </div>

              <div className="wcu-item">
                <div className="wcu-item-connector"></div>
                <div className="wcu-item-icon">
                  <img src="/img/icon/website-wcu-google-rank.webp" alt="Hosting and Maintenance" width={"25px"} />
                </div>
                <div className="wcu-item-body">
                  <h3 className="wcu-item-title">Top 5 Google Rankings Achieved</h3>
                  <div className="wcu-item-desc">Through technically sound website development and strategic keyword integration, we secured <strong style={{ color: "#ed8337" }}>Top 5</strong> search rankings, outperforming competitors with larger advertising budgets.</div>
                </div>
              </div>

              <div className="wcu-item">
                <div className="wcu-item-connector"></div>
                <div className="wcu-item-icon">
                  <img src="/img/icon/website-wcu-bounce-rate.webp" alt="Hosting and Maintenance" width={"25px"} />
                </div>
                <div className="wcu-item-body">
                  <h3 className="wcu-item-title">Higher Engagement &amp; Lower Bounce Rate</h3>
                  <div className="wcu-item-desc">By enhancing UI/UX design, improving website speed, and optimizing content flow, we reduced bounce rates from <strong style={{ color: "#ed8337" }}>80% to 35%</strong>, significantly improving visitor engagement and retention.</div>
                </div>
              </div>

            </div>
            {/* END RIGHT */}

          </div>
        </div>
      </section>

      <WCUScrollReveal />
    </>
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

function ServicesSlider() {
  const total = SERVICE_SLIDES.length;
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dir, setDir] = useState("next");
  const autoRef = useRef(null);
  const touchX = useRef(null);

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setDir("next");
      setAnimating(true);
      setTimeout(() => { setCurrent((c) => (c + 1) % total); setAnimating(false); }, 480);
    }, 4000);
  }, [total]);

  useEffect(() => { startAuto(); return () => clearInterval(autoRef.current); }, [startAuto]);

  const goTo = (idx) => {
    if (animating || idx === current) return;
    setDir(idx > current ? "next" : "prev");
    setAnimating(true);
    setTimeout(() => { setCurrent(idx); setAnimating(false); }, 480);
    startAuto();
  };

  const prev = () => goTo((current - 1 + total) % total);
  const next = () => goTo((current + 1) % total);

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) < 40) return;
    dx < 0 ? next() : prev();
  };

  /* visible: active + 2 side cards */
  const getCard = (offset) => SERVICE_SLIDES[(current + offset + total) % total];
  const cards = [getCard(-1), getCard(0), getCard(1)];

  const outLeft = "svs-out-left";
  const outRight = "svs-out-right";
  const inLeft = "svs-in-left";
  const inRight = "svs-in-right";

  return (
    <>
      <style>{`
        /* ══ SERVICES SLIDER ══ */
        .svs-section {
          background: linear-gradient(135deg, #002a44 0%, #004168 60%, #0a5282 100%);
          padding: 80px 5% 70px;
          position: relative;
          overflow: hidden;
        }
        .svs-section::before {
          content:'';
          position:absolute; inset:0; pointer-events:none;
          background-image:
            linear-gradient(rgba(237,131,55,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(237,131,55,0.04) 1px, transparent 1px);
          background-size: 56px 56px;
        }
        .svs-section::after {
          content:'';
          position:absolute; top:-200px; right:-200px;
          width:600px; height:600px; border-radius:50%;
          pointer-events:none;
          background:radial-gradient(circle, rgba(237,131,55,0.07) 0%, transparent 65%);
        }
        .svs-inner { max-width: 1200px; margin: 0 auto; position: relative; z-index:2; }

        /* header */
        .svs-header { text-align:center; margin-bottom: 56px; }
        .svs-eyebrow {
          display:inline-flex; align-items:center; gap:8px;
          font-size:.72rem; font-weight:700; letter-spacing:.16em;
          text-transform:uppercase; color:#ed8337; margin-bottom:12px;
        }
        .svs-eyebrow-line { width:22px; height:2px; background:#ed8337; border-radius:2px; }
        .svs-h2 {
          font-family:'Poppins',sans-serif;
          font-size: clamp(1.9rem,3vw,2.7rem);
          font-weight:700; color:#ffffff; line-height:1.15;
        }
        .svs-h2 span { color:#ed8337; }
        .svs-sub {
          font-size:.96rem; color:rgba(255,255,255,0.7); line-height:1.7;
          max-width:520px; margin:12px auto 0;
        }

        /* stage */
        .svs-stage {
          display:flex; align-items:stretch; justify-content:center;
          gap:20px;
        }

        /* ALL cards — same dark navy base */
        .svs-card {
          background: rgba(255,255,255,0.05);
          border:1.5px solid rgba(237,131,55,0.2);
          border-radius:20px;
          padding:36px 28px 32px;
          display:flex; flex-direction:column;
          transition: all 0.45s cubic-bezier(0.4,0,0.2,1);
          position:relative; overflow:hidden;
          cursor:pointer;
          flex:1;
        }
        .svs-card::before {
          content:'';
          position:absolute; top:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,#ed8337,#f5a66b);
          opacity:0; transition:opacity 0.3s;
        }
        .svs-card:hover::before { opacity:1; }

        /* active card — brighter stand-out */
        .svs-card.svs-active {
          flex:1.6;
          background: rgba(255,255,255,0.10);
          border-color: rgba(237,131,55,0.55);
          box-shadow: 0 20px 56px rgba(0,0,0,0.35);
          transform: translateY(-10px);
        }
        .svs-card.svs-active::before { opacity:1; }

        /* side cards — slightly dimmed */
        .svs-card.svs-side {
          opacity:0.72;
          transform: translateY(4px) scale(0.98);
        }
        .svs-card.svs-side:hover {
          opacity:0.92;
          transform:translateY(0) scale(1);
          border-color:rgba(237,131,55,0.4);
        }

        /* tag */
        .svs-tag {
          font-family:'Space Mono',monospace;
          font-size:.6rem; font-weight:700; letter-spacing:.16em;
          color:rgba(237,131,55,0.6); margin-bottom:18px;
        }

        /* icon circle */
        .svs-icon-wrap {
          width:60px; height:60px; border-radius:50%;
          border:2px solid #ed8337;
          background:rgba(237,131,55,0.1);
          display:flex; align-items:center; justify-content:center;
          margin-bottom:22px; flex-shrink:0;
          transition:background 0.3s, transform 0.3s;
        }
        .svs-card:hover .svs-icon-wrap {
          background:rgba(237,131,55,0.2);
          transform:scale(1.08);
        }
        .svs-icon-wrap svg { width:24px; height:24px; }

        /* title */
        .svs-card-title {
          font-family:'Poppins',sans-serif;
          font-size:1.05rem; font-weight:700;
          color:#ffffff; margin-bottom:12px; line-height:1.3;
        }
        .svs-active .svs-card-title { color:#ffffff; font-size:1.1rem; }

        /* desc — VISIBLE on ALL cards */
        .svs-card-desc {
          font-size:.86rem; line-height:1.78;
          color:rgba(255,255,255,0.65);
          flex:1; margin-bottom:20px;
        }
        .svs-active .svs-card-desc { color:rgba(255,255,255,0.85); }

        /* highlight pill */
        .svs-highlight {
          display:inline-flex; align-items:center; gap:6px;
          background:rgba(237,131,55,0.12);
          border:1px solid rgba(237,131,55,0.3);
          border-radius:50px;
          padding:5px 14px;
          font-size:.75rem; font-weight:700;
          color:#ed8337; width:fit-content;
          letter-spacing:.03em;
          display: none;
        }
        .svs-active .svs-highlight {
          background:rgba(237,131,55,0.2);
          border-color:rgba(237,131,55,0.5);
          display: none;
        }
        .svs-hl-dot {
          width:6px; height:6px; border-radius:50%;
          background:#ed8337;
          animation:svs-pulse 1.6s infinite;
        }
        @keyframes svs-pulse {
          0%,100%{ opacity:1; transform:scale(1); }
          50%    { opacity:.4; transform:scale(1.5); }
        }

        /* controls */
        .svs-controls {
          display:flex; align-items:center; justify-content:center;
          gap:16px; margin-top:44px;
        }
        .svs-nav {
          width:46px; height:46px; border-radius:50%;
          border:1.5px solid rgba(237,131,55,0.4);
          background:transparent; color:#ed8337;
          font-size:22px; line-height:1;
          cursor:pointer;
          display:flex; align-items:center; justify-content:center;
          transition:all 0.22s;
        }
        .svs-nav:hover { background:#ed8337; color:#fff; border-color:#ed8337; transform:scale(1.1); }
        .svs-dots { display:flex; gap:8px; align-items:center; }
        .svs-dot {
          width:9px; height:9px; border-radius:50%;
          border:1.8px solid rgba(255,255,255,0.25);
          background:transparent;
          padding:0; cursor:pointer;
          transition:all 0.3s;
        }
        .svs-dot.on { width:26px; border-radius:9px; background:#ed8337; border-color:#ed8337; }

        /* responsive */
        @media(max-width:860px) {
          .svs-stage { gap:14px; }
          .svs-card.svs-side { flex:0.85; }
        }
        @media(max-width:600px) {
          .svs-stage { flex-direction:column; }
          .svs-card.svs-side { display:none; }
          .svs-card.svs-active { transform:translateY(0); flex:unset; }
          .svs-section { padding:56px 4% 48px; }
        }
      `}</style>

      <section className="svs-section">
        <div className="svs-inner">

          {/* Header */}
          <div className="svs-header">
            <div className="svs-eyebrow">
              <div className="partners-header1" style={{ textAlign: 'center' }}>
                <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Other Services
                </div>
              </div>

            </div>
            <h2 className="svs-h2">Complete <span>Digital & Business </span> Solutions</h2>
          </div>

          {/* Stage */}
          <div
            className="svs-stage"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {cards.map((card, i) => {
              const isActive = i === 1;
              return (
                <div
                  key={card.tag}
                  className={`svs-card ${isActive ? "svs-active" : "svs-side"}`}
                  onClick={() => { if (!isActive) { i === 0 ? prev() : next(); } }}
                >
                  <div className="svs-tag">— {card.tag}</div>
                  <div className="svs-icon-wrap"><ServiceIcon name={card.iconKey} /></div>
                  <h3 className="svs-card-title">{card.title}</h3>
                  <p className="svs-card-desc">{card.desc}</p>
                  <div className="svs-highlight">
                    <span className="svs-hl-dot" />{card.highlight}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="svs-controls">
            <button className="svs-nav" onClick={prev} aria-label="Previous">‹</button>
            <div className="svs-dots">
              {SERVICE_SLIDES.map((_, i) => (
                <button
                  key={i}
                  className={`svs-dot${i === current ? " on" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Service ${i + 1}`}
                />
              ))}
            </div>
            <button className="svs-nav" onClick={next} aria-label="Next">›</button>
          </div>

        </div>
      </section>
    </>
  );
}

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
          font-size: clamp(1.75rem, 3vw, 2.5rem);
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
              Case Studies</div>
          </div>
          <h2 className="ms-cta-title">
            Explore <span>Proven Results Through</span><br /> Our Case Studies
          </h2>
          <p className="ms-cta-desc">
            Discover our projects that demonstrate how strategy and clear execution drive measurable business success.          </p>
        </div>

        <div className="ms-cta-right">


          <a href="/contact-us" className="ms-cta-btn-primary">
            Start Your Growth Journey
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

function PortfolioSection() {
  return (
    <section className="pf-section" id="portfolio" style={{ padding: '0px' }}>
      <div className="pf-inner">
        <div className="pf-left">
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our  Portfolio</div>
          </div>
          <h2 className="pf-heading">
            Our Work That <span><i>Speaks for Itself</i></span>
          </h2>
          <p className="pf-desc">
            Discover high-performing websites designed for speed, credibility, user experience, and measurable growth across diverse industries and business models.
          </p>

          <div className="pf-btns">
            <a href="/portfolio" className="pf-btn">
              Explore Our Work  →
            </a>
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
    <section style={{background: '#fff', width: "100%", margin: "0 auto", padding: isMobile ? "40px 16px" : "60px 20px", fontFamily: "'Poppins', sans-serif", overflow: "hidden" }}>
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
          We leverage the world's most trusted tools and frameworks to build fast, scalable, and future-proof digital solutions for your business.
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
      img: "/img/website-development/website-design.webp",
      title: "Website Design",
      desc: "Creative website designs that strengthen your brand and improve Customer engagement.",
      features: ["Responsive Layouts", "Modern UI/UX", "Mobile Friendly"],
      href: "/website-design",
    },
    {
      img: "/img/website-development/static-website.webp",
      title: "Static Website Development",
      desc: "Fast, secure, and cost-effective websites ideal for startups and growing businesses",
      features: ["Fast Loading", "Secure Structure", "Easy Maintenance"],
      href: "/static-website-development",
    },
    {
      img: "/img/website-development/custom-website-development.webp",
      title: "Custom Website Development",
      desc: "Tailor-made web solutions built around your business requirements and growth goals.",
      features: [" Custom Features", "Scalable Architecture", "High Performance"],
      href: "/custom-website-development",
    },
    {
      img: "/img/website-development/woo-commerce.webp",
      title: "WooCommerce Development",
      desc: "Powerful WooCommerce stores designed for conversions and seamless shopping experiences.",
      features: [" Secure Checkout", " Product Management", "Store Optimization"],
      href: "/woocommerce-website-development",
    },
    {
      img: "/img/website-development/ecommerce-development.webp",
      title: "E-Commerce Development",
      desc: "Robust online stores with advanced functionality and payment integrations.",
      features: ["Shopping Cart", "Payment Gateway", "Order Management"],
      href: "/e-commerce-website-development",
    },
    {
      img: "/img/website-development/shopify.webp",
      title: "Shopify Development",
      desc: "Professional Shopify stores built for speed, usability, and business growth.",
      features: ["Theme Customization", "Shopify Setup", "Performance Optimization"],
      href: "/shopify-website-development",
    },
  ];

  return (
    <section id="service" style={{ padding: "70px 5% 5rem", background:'#fff' }}>
      <div className="partners-header1" style={{ textAlign: 'center' }}>
        <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our  Service</div>
      </div>

      <h2 className="tech-title svc-main-heading">
        Professional  <span>Website Development Services</span> in Coimbatore
      </h2>
      <p style={{ textAlign: "center", maxWidth: 1200, margin: "20px auto 60px", color: "#666", lineHeight: 1.8, fontSize: "0.96rem" }}>
        We deliver scalable, high-performance website solutions from static websites to eCommerce platforms designed to enhance brand presence, user experience, and business growth.
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
            <a
              href={svc.href}
              style={{ display: "inline-block", width: '42%', fontSize: '14px', textAlign: "center", padding: "10px 20px", background: "#004168", color: "#fff", textDecoration: "none", borderRadius: 50, fontWeight: 600, fontFamily: "'Poppins', sans-serif", transition: "background 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#ed8337"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#004168"; }}
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}


// ── Page Export ───────────────────────────────────────

export default function DigitalMarketingNewPage() {
  return (
    <Layout
      title="Website Development Company in Coimbatore | Expert Web "
      description="Looking for a website development company in Coimbatore? We design responsive, SEO-friendly, high-performance websites to grow your business . "
    >
      <SEOHead />
      <GlobalStyles />
      <HeroSection />
      <OurServicesSection />
      <PortfolioSection />
      <TechnologiesSection />
      <CTASplitSection />
      <BuildTogetherCTASection />
      <ModernFeaturesSection />
      <WhyChooseUsSection />
      <TestimonialSlider />
      <MilestonesCTA />
      <ServicesSlider />
      <FAQSection />
    </Layout>
  );
}