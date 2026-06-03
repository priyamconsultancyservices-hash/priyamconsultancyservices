import { useState } from "react";
import emailjs from "@emailjs/browser";
import CTASection from "../components/HomePage/CTA";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
const banner = "/img/hr-services.png";

/* ═══════════════════════════════════════════════════
   SEO META & SCHEMA
═══════════════════════════════════════════════════ */
function SEOHead() {
  const pageUrl = "https://www.pcsbusinesssolution.com/hr-services";
  const imageUrl = "https://www.pcsbusinesssolution.com/img/hr-services.png";
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
            "@id": "https://www.priyamconsultancy.com/hr-services/",
            "name": "hr-services"
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

    // Service Schema
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.priyamconsultancy.com/hr-services/#service",
      "name": "HR Services",
      "serviceType": "Human Resource Management Services",
      "url": "https://www.priyamconsultancy.com/hr-services/",
      "description": "Priyam Consultancy provides professional HR services including payroll management, recruitment services, HR strategy, policy development, talent acquisition, compliance management and workforce solutions for businesses across India.",
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
      "name": "HR Services in Coimbatore | HR consultancy in coimbatore",
      "image": ["https://www.priyamconsultancy.com/img/hr-services.png"],
      "description": "Best HR services in Coimbatore offering end-to-end HR solutions including recruitment, payroll, compliance, and training. Grow your team with expert HR support.",
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
        "reviewCount": "4521"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.priyamconsultancy.com/hr-services/",
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
    },

    // FAQ Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What Makes Your Payroll Management Different From Others?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We don't just process numbers—we ensure accuracy, compliance, and confidentiality at every step. From salary disbursals and tax filings to statutory compliance (PF, ESI, TDS), we handle it all with tech-enabled precision and end-to-end transparency."
          }
        },
        {
          "@type": "Question",
          "name": "Can You Help Us Hire For Niche Or Leadership Roles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Our recruitment services cover everything from entry-level to CXO positions. We focus on culture-fit and long-term alignment, using a consultative approach to find the right talent—not just fill the vacancy."
          }
        },
        {
          "@type": "Question",
          "name": "Do You Offer HR Strategy Support For Startups Or Small Teams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Whether you're hiring your first employee or scaling rapidly, we help set up HR foundations like org structure, role mapping, goal-setting frameworks, and people policies that grow with your business."
          }
        },
        {
          "@type": "Question",
          "name": "How Do You Ensure Our HR Policies Are Compliant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our policy management services are crafted by HR and legal experts to ensure they meet local labor laws, industry standards, and your internal values. We customize every policy to be legally sound yet people-friendly."
          }
        },
        {
          "@type": "Question",
          "name": "Can We Outsource Only A Few HR Functions Instead Of The Full Setup?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Definitely. Our services are modular—you can pick and choose what you need. Whether it's just payroll, recruitment, or policy support, we'll step in where you need us most."
          }
        },
        {
          "@type": "Question",
          "name": "How Long Does It Take To Get Started With Your Services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depending on the scope, onboarding typically takes 1–3 weeks. For payroll, we can go live within a month. For recruitment or strategy services, timelines vary based on the complexity and goals."
          }
        }
      ]
    }
  ];

  return (
    <Head>
      <title>Best HR Services in Coimbatore | HR consultancy in coimbatore </title>
      <meta name="description" content="Best HR services in Coimbatore offering end-to-end HR solutions including recruitment, payroll, compliance, and training. Grow your team with expert HR support. " />
      <meta name="keywords" content="HR Services, HR Services in Coimbatore, HR Solutions, HR Solutions in Coimbatore, HR consultancy in coimbatore, HR Consultant in Coimbatore, HR Support Services in Coimbatore, HR Consultancy Services in Coimbatore, Human Resource Consultants in Coimbatore, HR Service Provider in Coimbatore, Human Resource Services in Coimbatore, Human Resource Management Services in Coimbatore, Payroll Management, Recruitment Services, HR Strategy, HR Policy Development" />
      <link rel="canonical" href="https://www.priyamconsultancy.com/hr-services" />
      {/* Open Graph */}
      <meta property="og:title" content="Best HR Services in Coimbatore | HR consultancy in coimbatore " />
      <meta property="og:description" content="Best HR services in Coimbatore offering end-to-end HR solutions including recruitment, payroll, compliance, and training. Grow your team with expert HR support. " />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.priyamconsultancy.com/hr-services" />
      <meta property="og:image" content="https://www.priyamconsultancy.com/img/hr-services.png" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Best HR Services in Coimbatore | HR consultancy in coimbatore " />
      <meta name="twitter:description" content="Best HR services in Coimbatore offering end-to-end HR solutions including recruitment, payroll, compliance, and training. Grow your team with expert HR support. " />
      <meta name="twitter:image" content="https://www.priyamconsultancy.com/img/hr-services.png" />
      {/* Schema */}
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Head>
  );
}

const styles = `
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

:root {
  --hr-orange: #FF6B2B;
  --hr-orange-light: #FF8F5E;
  --hr-blue: #1A56DB;
  --hr-green: #059669;
  --hr-dark: #0D1117;
  --hr-gray: #6B7280;
  --hr-light: #F9FAFB;
  --hr-white: #FFFFFF;
  --font: "Poppins", sans-serif;

  /* HTML file color vars */
  --navy:        #004168;
  --navy-deep:   #002a44;
  --navy-mid:    #0a5282;
  --orange:      #ed8337;
  --orange-light:#f5a66b;
}
.container {
width: 100%; 
}
* { box-sizing: border-box; margin: 0; padding: 0; }
.hr-page { font-family: var(--font); overflow-x: hidden; background: var(--hr-white); }

/* ─── BUTTONS ────────────────────────────────────── */
.btn { font-family: var(--font); font-weight: 600; font-size: 0.88rem; border: none; cursor: pointer; border-radius: 10px; padding: 13px 28px; transition: all 0.25s ease; }
.btn-orange { background: var(--hr-orange); color: #fff; box-shadow: 0 4px 18px rgba(255,107,43,0.35); }
.btn-orange:hover { background: var(--hr-orange-light); transform: translateY(-2px); box-shadow: 0 8px 26px rgba(255,107,43,0.45); }
.btn-ghost { background: rgba(255,255,255,0.1); color: #fff; border: 1.5px solid rgba(255,255,255,0.3); backdrop-filter: blur(8px); }
.btn-ghost:hover { background: rgba(255,255,255,0.18); }
.btn-outline { background: transparent; color: var(--hr-orange); border: 2px solid var(--hr-orange); }
.btn-outline:hover { background: var(--hr-orange); color: #fff; }
.btn-lg { padding: 15px 36px; font-size: 0.95rem; }

section.hr-services {
    padding: 5rem;
    background: #004168;
}
/* ══════════════════════════════════════════
   1. HERO — animated SVG illustration
══════════════════════════════════════════ */
.hero {
  min-height: 100vh;
  display: grid; grid-template-columns: 1fr 1fr;
  align-items: center; gap: 2rem;
  padding: 0rem 6% 4rem;
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
  font-size: clamp(2rem, 3.6vw, 3.3rem);
  font-weight: 600; line-height: 1.15;
  text-align: start;
  color:#fff;
  margin-top: 1.4rem; animation: fadeUp 0.7s 0.08s ease both;
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
  color: rgb(255, 255, 255); max-width: fit-content;
  animation: fadeUp 0.7s 0.16s ease both;
}
.hero-actions { margin-top: 2rem; display: flex; gap: 0.9rem; flex-wrap: wrap; animation: fadeUp 0.7s 0.26s ease both; }
.btn-fill {
  background: var(--orange);
  padding: 0.85rem 2rem; border-radius: 50px;
    font-family: 'Poppins', sans-serif; font-size: 0.92rem; font-weight: 500;
  text-decoration: none; border: none; cursor: pointer;
  box-shadow: 0 4px 22px rgba(237,131,55,0.32);
  display: inline-flex; align-items: center; gap: 0.5rem;
  transition: background 0.22s, transform 0.18s, box-shadow 0.22s;
}
.btn-fill:hover {  transform: translateY(-2px); box-shadow: 0 8px 30px rgba(237,131,55,0.42); }
.btn-arrow {
  display: inline-flex; align-items: center; justify-content: center;
  width: 22px; height: 22px; border-radius: 50%;
  background: rgba(2,43,68,0.3); font-size: 0.85rem;
}
@keyframes fadeUp { from{ opacity:0; transform:translateY(26px); } to{ opacity:1; transform:translateY(0); } }

.hero-right {
  position: relative; z-index: 2;
  display: flex; align-items: center; justify-content: center;
  animation: fadeUp 0.9s 0.15s ease both;
}
50%    { transform: translate(-50%,-50%) scale(1.18); opacity: 1; }
}
}
30%{ transform:translateY(-18px); }
  50%{ transform:translateY(-8px); } 70%{ transform:translateY(-20px); } 85%{ transform:translateY(-5px); }
}
30%{ transform:scaleX(0.55);opacity:0.2; }
  50%{ transform:scaleX(0.75);opacity:0.3; } 70%{ transform:scaleX(0.5);opacity:0.18; } 85%{ transform:scaleX(0.85);opacity:0.35; }
}
40%{ transform:scale(1.08) rotate(-2deg); } 70%{ transform:scale(0.96) rotate(-5deg); }
}
25%{ transform:translateY(-22px) scale(1.15) rotate(8deg); }
  50%{ transform:translateY(-10px) scale(1.05) rotate(14deg); } 75%{ transform:translateY(-26px) scale(1.18) rotate(10deg); }
  90%{ transform:translateY(-4px) scale(1.02) rotate(12deg); }
}
35%{ transform:translateY(-16px) scale(1.1) rotate(4deg); }
  60%{ transform:translateY(-6px) scale(1.04) rotate(7deg); } 80%{ transform:translateY(-20px) scale(1.12) rotate(5deg); }
}
30%{ transform:scale(1.12) translateY(-12px); }
  60%{ transform:scale(0.94) translateY(5px); } 80%{ transform:scale(1.08) translateY(-8px); }
}
20%{ transform:translateY(-24px) scale(1.2) rotateY(180deg); }
  45%{ transform:translateY(-12px) scale(1.08) rotateY(280deg); } 65%{ transform:translateY(-28px) scale(1.22) rotateY(360deg); }
  85%{ transform:translateY(-6px) scale(1.05) rotateY(420deg); }
}
50%{ transform:scale(1.3) rotate(30deg); opacity:1; }
}
50%{ transform:translateX(8px); } }
50%{ transform:translateY(-30px) scale(1.2); opacity:0.3; }
  100%{ transform:translateY(-60px) scale(0.8); opacity:0; }
}
          h3.faq-h3 {
    color: black;
    font-size: 2.5rem!important;
    font-weight: 600;
}
/* ──────────────────────────────────────────────────
   SERVICES — Tab + Content Layout
   ────────────────────────────────────────────────── */
.hr-services {
  padding: 100px 80px;
  background: #004168;
}
.hr-services__inner {
  display: grid; grid-template-columns: 400px 1fr;
  gap: 32px; align-items: start; margin-top: 63px;
}

/* LEFT — Tab List */
.hr-services__tabs {
  display: flex; flex-direction: column; gap: 0;
  border-radius: 16px; overflow: hidden;
  border: 1px solid rgba(237,131,55,0.2);
}
.hr-tab-item {
  display: flex; align-items: center; gap: 14px;
  padding: 18px 20px;
  cursor: pointer;
  background: rgba(255,255,255,0.03);
  border-bottom: 1px solid rgba(237,131,55,0.12);
  transition: all 0.25s ease;
  position: relative;
  flex: 1;
}
.hr-tab-item:last-child { border-bottom: none; }
.hr-tab-item:hover { background: rgba(237,131,55,0.08); }
.hr-tab-item.active {
  background: rgba(237,131,55,0.13);
  border-left: 3px solid #ed8337;
  box-shadow: inset 0 0 20px rgba(237,131,55,0.06), 0 0 12px rgba(237,131,55,0.08);
}
.hr-tab-item.active::after {
  content: '';
  position: absolute; right: -1px; top: 50%; transform: translateY(-50%);
  width: 0; height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #ed8337;
  opacity: 0.7;
}
.hr-tab-icon {
  font-size: 1.5rem; flex-shrink: 0;
  filter: brightness(0) invert(1) opacity(0.6);
  transition: filter 0.25s;
}
.hr-tab-item.active .hr-tab-icon { filter: brightness(0) invert(1) opacity(1); }
.hr-tab-label {
  font-size: 0.92rem; font-weight: 600;
  color: rgba(255,255,255,0.6);
  transition: color 0.25s;
  line-height: 1.3;
}
.hr-tab-item.active .hr-tab-label { color: #fff; }

/* RIGHT — Content Box */
.hr-services__content {
  background: #fff; border-radius: 20px; padding: 28px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.12);
  border-top: 4px solid #ed8337;
  transition: border-color 0.3s ease;
  min-height: 100%;
}
.hr-content-header {
  display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
}
.hr-content-icon { font-size: 2rem; line-height: 1; flex-shrink: 0; }
.hr-content-title { font-size: 1.2rem; font-weight: 700; color: var(--hr-dark); }
.hr-services__preview-desc { font-size: 0.88rem; color: var(--hr-gray); line-height: 1.75; margin-bottom: 20px; }
.hr-services__bullets { list-style: none; display: flex; flex-direction: column; gap: 9px; }
.hr-services__bullet {
  display: flex; align-items: center; gap: 10px;
  font-size: 0.85rem; font-weight: 500; color: var(--hr-dark);
}
.hr-services__bullet::before {
  content: "✓"; width: 22px; height: 22px; border-radius: 50%;
  background: #ed8337;
  color: #fff; font-size: 0.7rem; font-weight: 800;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}

/* Content explore button */
.hr-content-btn {
  margin-top: 20px;
  display: inline-block;
  padding: 10px 22px; border-radius: 8px;
  font-size: 0.88rem; font-weight: 600; border: none; cursor: pointer;
  color: #fff; transition: all 0.2s ease;
}

/* ── ACCORDION (hidden on desktop) ─────────────────── */
.hr-accordion-item { display: contents; }
.hr-accordion-content { display: none; }
.hr-tab-arrow { display: none; }

/* ──────────────────────────────────────────────────
   BENEFITS — Bento Grid (no-box style)
   ────────────────────────────────────────────────── */
.tl-section {
  position: relative; padding: 6rem 4%;
  background: #ffffff; overflow: hidden;
}
.tl-inner { position: relative; z-index: 2;  margin: 0 auto; }

.tl-header { text-align: center; margin-bottom: 4rem; }
.tl-heading {
  font-family: var(--font); font-size: clamp(1.7rem, 2.8vw, 2.4rem);
  font-weight: 700; line-height: 1.15; 
  color: #000; margin-bottom: .85rem;
}
.tl-heading span { color: var(--hr-orange); }
.tl-subtext { font-size: .96rem; line-height: 1.7; color: #000; margin: 0 auto; }

.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
}

.bn-cell {
  position: relative;
  padding: 2.4rem 2.2rem;
  display: flex; flex-direction: column; gap: .7rem;
  background: transparent;
  opacity: 1;
  transition: background 0.3s ease;
}

.bn-cell-1, .bn-cell-2, .bn-cell-3 { border-top: 1.5px solid rgba(0,65,104,0.08); }
.bn-cell-2, .bn-cell-5 { border-left: 1.5px solid rgba(0,65,104,0.08); border-right: 1.5px solid rgba(0,65,104,0.08); }
.bn-cell-4, .bn-cell-5, .bn-cell-6 { border-top: 1.5px solid rgba(0,65,104,0.08); }

.bn-cell::before {
  content: ''; position: absolute; left: 0; top: 2.4rem; bottom: 2.4rem;
  width: 3px; border-radius: 2px;
  background: #ed8337;
  transform: scaleY(0); transform-origin: top;
  transition: transform 0.3s ease;
}
.bn-cell:hover::before { transform: scaleY(1); }
.bn-cell:hover { background: rgba(237,131,55,0.025); }

.bn-cell .bn-icon {
  width: 44px; height: 44px; border-radius: 12px;
  background: rgba(237,131,55,0.1);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; margin-bottom: .2rem;
  transition: background 0.28s;
}
.bn-cell:hover .bn-icon { background: rgba(237,131,55,0.2); }
.bn-cell .bn-icon svg { width: 22px; height: 22px; stroke: var(--hr-orange); fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }

.bn-cell .bn-num {
  font-size: .62rem; font-weight: 700; letter-spacing: .1em;
  color: var(--hr-orange); text-transform: uppercase;
}
.bn-cell .bn-title {
  font-family: var(--font); font-size: 1.05rem; font-weight: 600;
  color: #000; line-height: 1.3;
}
.bn-cell .bn-desc {
  font-size: .875rem; line-height: 1.78; color: #000;font-family: var(--font);
}
.bn-cell .bn-link {
  display: inline-flex; align-items: center; gap: .3rem;
  font-size: .8rem; font-weight: 700; color: var(--hr-orange);
  text-decoration: none; margin-top: .3rem;
  opacity: 0; transform: translateX(-6px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.bn-cell:hover .bn-link { opacity: 1; transform: translateX(0); }

/* ──────────────────────────────────────────────────
   PROCESS — Circular Infographic
   ────────────────────────────────────────────────── */
.pr-section {
  position: relative;
  padding: 6rem 6% 7rem;
  background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 55%, var(--navy-mid) 100%);
  overflow: hidden;
}
.pr-section::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(237,131,55,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(237,131,55,0.03) 1px, transparent 1px);
  background-size: 56px 56px;
}
.pr-inner { position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; }

.pr-header { margin-bottom: 3.5rem; text-align: center; }
.pr-heading {
  font-family: var(--font);
  font-size: clamp(1.7rem, 2.8vw, 2.4rem);
  font-weight: 700; line-height: 1.15; 
  color: #fff; margin-bottom: 1rem;
}
.pr-subtext {
  font-size: .92rem; line-height: 1.78; color: rgb(255, 255, 255);
   margin: 0 auto; text-align: center;
}

.circ-layout {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 340px 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0;
  align-items: center;
  min-height: 540px;
}

.circ-center {
  grid-column: 2; grid-row: 1 / 3;
  position: relative;
  display: flex; align-items: center; justify-content: center;
  z-index: 5;
}
.circ-svg-wrap {
  position: relative; width: 300px; height: 300px;
}
.circ-svg-wrap svg {
  width: 300px; height: 300px;
  animation: circ-spin 18s linear infinite;
}
@keyframes circ-spin { to { transform: rotate(360deg); } }

.circ-core {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  text-align: center; z-index: 6; pointer-events: none;
}
.circ-core-title {
  font-family: var(--font); font-size: 1.2rem; font-weight: 600;
  color: #fff; line-height: 1.2; 
}
.circ-core-sub {
  font-size: .55rem; color: var(--hr-orange); letter-spacing: .1em;
  text-transform: uppercase; margin-top: .3rem;
}

.circ-left-top    { grid-column: 1; grid-row: 1; padding-right: 2.5rem; text-align: right; }
.circ-left-bottom { grid-column: 1; grid-row: 2; padding-right: 2.5rem; text-align: right; }
.circ-right-top   { grid-column: 3; grid-row: 1; padding-left: 2.5rem; text-align: left; }
.circ-right-bottom{ grid-column: 3; grid-row: 2; padding-left: 2.5rem; text-align: left; }

.circ-step {
  display: flex; flex-direction: column; gap: .55rem;
  padding: 1.4rem 0;
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.circ-left-top .circ-step,
.circ-left-bottom .circ-step { align-items: flex-end; }
.circ-right-top .circ-step,
.circ-right-bottom .circ-step { align-items: flex-start; }

.cs-icon-wrap {
  width: 52px; height: 52px; border-radius: 50%;
  background: linear-gradient(135deg, rgba(237,131,55,0.18), rgba(237,131,55,0.06));
  border: 1.5px solid rgba(237,131,55,0.35);
  display: flex; align-items: center; justify-content: center;
  transition: background 0.28s, border-color 0.28s, transform 0.28s;
}
.circ-step:hover .cs-icon-wrap {
  background: linear-gradient(135deg, rgba(237,131,55,0.32), rgba(237,131,55,0.12));
  border-color: var(--hr-orange);
  transform: scale(1.1);
}
.cs-icon-wrap svg { width: 24px; height: 24px; stroke: var(--hr-orange); fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }

.cs-title {
  font-family: var(--font); font-size: 1rem; font-weight: 600;
  color: #e28039; line-height: 1.3; letter-spacing: .01em;
}
.cs-desc {
  font-size: .9rem; line-height: 1.72;
  color: rgb(255, 255, 255); font-family: var(--font);
}
.circ-left-top .cs-desc,
.circ-left-bottom .cs-desc { margin-left: auto; }

/* ─── FAQ ─────────────────────────────────────────── */
.faq-section { padding: 5rem 6%; background: #fff; }
.faq-head { text-align: center; margin-bottom: 3rem; }
.faq-head h2 { font-family: var(--font); font-size: clamp(1.6rem, 2.8vw, 2.3rem); font-weight: 700; color: #0D1117; }
.faq-head h2 span { color: var(--hr-orange); }
.faq-wrapper { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; }
.faq-col { display: flex; flex-direction: column; gap: 1rem; }
.faq-item {  border-radius: 10px; overflow: hidden; background: #fff; }
.faq-question { display: flex; justify-content: space-between; align-items: center; padding: 18px 20px; cursor: pointer; font-family: var(--font); font-size: 0.95rem; font-weight: 600; color: #0D1117; gap: 1rem; }
.faq-question .icon { font-size: 1.2rem; color: var(--hr-orange); flex-shrink: 0; }
.faq-answer { padding: 0 20px 18px; font-size: 0.88rem; line-height: 1.75; color: #6B7280; font-family: var(--font); }
h3.faq-h3 {
    font-size: 2.5rem;
}
/* ─── PARTNERS HEADER ─────────────────────────────── */
.partners-header1, .partners-header2 { }
.partners-eyebrow { font-family: var(--font); color: var(--orange); }

/* ─── RESPONSIVE ─────────────────────────────────── */
@media (max-width: 1024px) {
  .hr-services { padding: 80px 40px; }
  .hr-services__inner { grid-template-columns: 1fr; }
  .hr-services__left { position: static; }
  .bento-grid { grid-template-columns: 1fr 1fr; }
  .bn-cell-2, .bn-cell-5 { border-left: none; border-right: none; }
  .bn-cell-3, .bn-cell-6 { border-left: 1.5px solid rgba(0,65,104,0.08); }
  .circ-layout { display: flex !important; flex-direction: column; gap: 1rem; min-height: unset; }
  .circ-center { display: none; }
  .circ-left-top, .circ-right-top, .circ-left-bottom, .circ-right-bottom { padding: 0; }
  .circ-left-top .circ-step,
  .circ-left-bottom .circ-step { align-items: flex-start; text-align: left; }
  .circ-left-top .cs-desc, .circ-left-bottom .cs-desc { margin-left: 0; }
  .circ-step { padding: 1.2rem; border-bottom: none; }

  /* Hero */
  .hero { grid-template-columns: 1fr; padding: 5rem 6% 3rem; min-height: auto; }
  .hero-left { order: 1; text-align: left; align-items: flex-start;       padding: 3rem 1.0rem 0 1.0rem;
}
  .hero-right { order: 2; display: flex; justify-content: center; align-items: center; }
  .hero-right img { max-width: 70%; }
  .hero-heading { font-size: clamp(1.8rem, 4vw, 2.6rem); text-align: left; }
  .hero-sub { text-align: left; }
  .hero-actions { justify-content: flex-start; }
  .h-badge { align-self: flex-start; }

  /* Approach section */
  .ap-inner { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
  .ap-form-wrap { max-width: 100% !important; }

  /* FAQ */
  .faq-wrapper { grid-template-columns: 1fr !important; }

  /* Services section heading */
  h2.hr-h2 { font-size: 2rem; }
}

@media (max-width: 768px) {
  /* Hero */
  .hero { padding: 4.5rem 5% 3rem; }
  .hero-heading { font-size: clamp(1.6rem, 5vw, 2.2rem); }
  .hero-sub { font-size: 0.92rem; }
  .hero-actions { flex-direction: column; align-items: flex-start; }

  /* Approach form */
  .fl-row { grid-template-columns: 1fr !important; }
  .ap-form-card { padding: 2rem 1.4rem !important; }

  /* Services */
  .hr-services { padding: 60px 5%; }
  .hr-services__preview { padding: 24px; }

  /* Benefits */
  .tl-section { padding: 3.5rem 5%; }
  .bento-grid { grid-template-columns: 1fr; }
  .bn-cell-2,.bn-cell-3,.bn-cell-4,.bn-cell-5,.bn-cell-6 { border-left: none; border-right: none; }

  /* Process section */
  .pr-section { padding: 3.5rem 5% 4rem; }
  .circ-center { display: none; }
  .circ-layout { display: flex !important; flex-direction: column !important; gap: 1rem !important; min-height: unset !important; }
  .circ-left-top, .circ-right-top, .circ-left-bottom, .circ-right-bottom { padding: 0 !important; }
  .circ-left-top .circ-step, .circ-left-bottom .circ-step { align-items: flex-start !important; text-align: left !important; }
  .circ-left-top .cs-desc, .circ-left-bottom .cs-desc { margin-left: 0 !important; }
  .circ-step { padding: 1.1rem !important; border-bottom: none !important; }
  .pr-heading { font-size: 1.6rem !important; }

  /* FAQ */
  .faq-section { padding: 3rem 5% !important; }
  .faq-head h2 { font-size: 1.6rem !important; }

  /* Section headings */
  h2.hr-h2 { font-size: 1.7rem; }
  .tl-heading { font-size: 1.6rem !important; }
  .pr-heading { font-size: 1.6rem !important; }
}

@media (max-width: 640px) {
  .hr-services { padding: 60px 20px; }
  .tl-section { padding: 4rem 5%; }
  .bento-grid { grid-template-columns: 1fr; }
  .bn-cell-2,.bn-cell-3,.bn-cell-5,.bn-cell-6 { border-left: none; border-right: none; }
  .pr-section { padding: 4rem 5% 5rem; }
}

@media (max-width: 480px) {
  /* Hero */
  .hero { padding: 4rem 5% 2.5rem; gap: 1.5rem; }
  .hero-heading { font-size: clamp(1.4rem, 7vw, 1.8rem); text-align: left; }
  .h-badge { font-size: 0.62rem; padding: 0.3rem 0.8rem; }
  .hero-right img { max-width: 80%; }
  .btn-fill { width: 100%; justify-content: center; font-size: 0.85rem; padding: 0.75rem 1.2rem; }

  /* Approach */
  .approach { padding: 3rem 5% !important; }
  .ap-heading { font-size: 1.5rem !important; }
  .ap-intro { font-size: 0.88rem !important; }
  .ap-form-card { padding: 1.6rem 1.1rem !important; }
  .form-card-title { font-size: 1.3rem !important; }

  /* Services — accordion mode */
  .hr-services { padding: 50px 16px; }
  .hr-services__inner { grid-template-columns: 1fr; gap: 0; }

  /* Hide desktop content panel */
  .hr-services__content--desktop { display: none !important; }

  /* Tabs become vertical accordion list */
  .hr-services__tabs {
    flex-direction: column;
    overflow-x: unset;
    border-radius: 12px;
    gap: 0;
  }
  .hr-accordion-item { display: block; }
  .hr-tab-item {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 16px 18px;
    text-align: left;
    min-width: unset;
    border-bottom: 1px solid rgba(237,131,55,0.15);
  }
  .hr-tab-item:last-child { border-bottom: none; }
  .hr-tab-item.active { border-left: 3px solid #ed8337; }
  .hr-tab-item.active::after { display: none; }
  .hr-tab-label { font-size: 0.9rem; flex: 1; }
  .hr-tab-arrow { display: inline-block; font-size: 0.65rem; color: #ed8337; flex-shrink: 0; }

  /* Accordion content panel */
  .hr-accordion-content { display: none; }
  .hr-accordion-content.hr-accordion-open {
    display: block;
    animation: accFadeIn 0.25s ease both;
  }
  @keyframes accFadeIn {
    from { opacity: 0; transform: translateY(-6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hr-accordion-content .hr-services__content {
    border-radius: 0 0 12px 12px;
    border-top: none;
    padding: 20px 16px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  }
  h2.hr-h2 { font-size: 1.45rem; }

  /* Benefits */
  .bn-cell { padding: 1.8rem 1.4rem; }
  .bn-title { font-size: 0.95rem; }
  .bn-desc { font-size: 0.82rem; }

  /* Process — hide circle only, steps one by one */
  .circ-center { display: none; }
  .circ-layout { display: flex !important; flex-direction: column !important; gap: 0.8rem !important; min-height: unset !important; }
  .circ-left-top, .circ-right-top, .circ-left-bottom, .circ-right-bottom { padding: 0 !important; }
  .circ-step { padding: 1rem !important; border-bottom: none !important; align-items: flex-start !important; text-align: left !important; }
  .circ-left-top .circ-step, .circ-left-bottom .circ-step { align-items: flex-start !important; }
  .cs-title { font-size: 0.88rem; }
  .cs-desc { font-size: 0.8rem; }

  /* FAQ */
  .faq-head h2 { font-size: 1.3rem !important; }
  .faq-question { font-size: 0.88rem !important; padding: 14px 12px !important; }
  .faq-answer { font-size: 0.82rem !important; padding: 12px !important; }

  /* section.hr-services padding fix */
  section.hr-services { padding: 50px 16px !important; }
}
  h2.hr-h2 {
    letter-spacing: 0px;
    font-size: 2.7rem;
    margin-bottom: 1rem;
}
`;

// ── DATA ──────────────────────────────────────────────────────────

const services = [
  {
    id: "01", icon: <img src="/img/icon/hr-services-payroll.webp" alt="Payroll" style={{ width: "28px", height: "28px" }} />, color: "#FF6B2B",
    title: "Payroll Management",
    tagline: "Accurate. Timely. Compliant.",
    desc: "Timely, accurate, and fully compliant, we simplify your payroll process to ensure you never miss a payout or fall short on regulations. From salary structuring to tax filings and benefits administration, we handle all the backend complexities, so you can focus on what matters most: your team and growing your business.",
    bullets: ["Payroll Processing and Accurate Calculations", "Tax Deductions and Withholdings", "Statutory Compliance and Filings"],
  },
  {
    id: "02", icon: <img src="/img/icon/hr-services-recruitment.webp" alt="Recruitment" style={{ width: "30px", height: "30px" }} />, color: "#1A56DB",
    title: "Recruitment Services",
    tagline: "Right People. Right Roles. Right Now.",
    desc: "We go beyond resumes to find people who belong. Our recruitment services attract top talent that not only fits role but also fits your role, culture, and growth goals. Whether you’re hiring a single position or scaling your team, we ensure a seamless process that meets your vision.",
    bullets: ["Job Analysis & Positioning", "Candidate Sourcing, Screening & Shortlisting", "Interviewing & Selection Support"],
  },
  {
    id: "03", icon: <img src="/img/icon/hr-services-policy.webp" alt="HR Policy" style={{ width: "30px", height: "30px" }} />, color: "#FF6B2B",
    title: "HR Strategy & Policy Development",
    tagline: "Build Culture. Drive Performance.",
    desc: "We align your HR strategy with your business vision by crafting clear, custom policies and tailored frameworks that drive performance, engagement, and scalability from startup to enterprise while ensuring compliance without adding unnecessary friction to your daily operations.",
    bullets: ["HR Handbook or Policies and Procedures Development", "Organizational Design & Restructuring", "HR Audits & Compliance Checks"],
  },
];

const benefits = [
  {
    num: "01", title: "Customized HR Solutions",
    desc: "We understand that each business is unique, so we provide personalized HR strategies and policies that align with your company’s specific needs, values, and goals.",
    icon: (
      <img src="/img/icon/hr-services-solution.webp" alt="Customized HR Solutions" style={{ width: "31px", height: "31px" }} />
    ),
  },
  {
    num: "02", title: "Talent Acquisition Excellence",
    desc: "Our recruitment services are designed to attract and hire top talent that not only meets the job requirements but also fits seamlessly with your company culture and long-term objectives.",
    icon: (
      <img src="/img/icon/hr-services-talent.webp" alt="Talent Acquisition" style={{ width: "31px", height: "31px" }} />
    ),
  },
  {
    num: "03", title: "Compliance & Risk Management",
    desc: "Our expert team ensures that your business is fully compliant with local, state, and federal laws, minimizing risks associated with costly legal non-compliance.",
    icon: (
      <img src="/img/icon/hr-services-compliance.webp" alt="Compliance" style={{ width: "31px", height: "31px" }} />
    ),
  },
  {
    num: "04", title: "Streamlined Payroll Services",
    desc: "At Priyam Consultancy Services HR services we offer end-to-end payroll services that ensure tax compliance, deductions, and timely payments, freeing you from the administrative burden and reducing errors.",
    icon: (
      <img src="/img/icon/hr-services-streamlined-payroll.webp" alt="Payroll Services" style={{ width: "31px", height: "31px" }} />
    ),
  },
  {
    num: "05", title: "Scalable HR Solutions",
    desc: "As your business grows, so do your HR needs. We provide scalable HR solutions that evolve with your company, from managing a small team to supporting a large, complex organization.",
    icon: (
      <img src="/img/icon/hr-services-scalable-solution.webp" alt="Scalable HR" style={{ width: "31px", height: "31px" }} />
    ),
  },
  {
    num: "06", title: "Cost-Effective HR Support",
    desc: "We provide comprehensive HR services that maximize your return on investment by reducing overhead costs while delivering exceptional support tailored to your business needs.",
    icon: (
      <img src="/img/icon/hr-services-cost-effective.webp" alt="Cost-Effective" style={{ width: "31px", height: "31px" }} />
    ),
  },
];

const processSteps = {
  leftTop: {
    title: "Deeper Understanding",
    desc: "We analyze your business goals, workforce structure, and operational challenges to build HR solutions that align with your organizational needs and long-term growth plans.",
    icon: (
      <img src="/img/icon/hr-services-process-understand.webp" alt="Deeper Understanding" style={{ width: "30px", height: "30px" }} />
    ),
  },
  rightTop: {
    title: "Strategy & Planning",
    desc: "Our team develops customized HR strategies focused on workforce efficiency, compliance, employee management, and sustainable business growth through structured planning and execution.",
    icon: (
      <img src="/img/icon/hr-services-process-strategy.webp" alt="Strategy & Planning" style={{ width: "30px", height: "30px" }} />
    ),
  },
  rightBottom: {
    title: "Execution & Monitoring",
    desc: "We ensure smooth implementation of HR processes with continuous monitoring, performance tracking, and proactive support to maintain efficiency, compliance, and consistent progress.",
    icon: (
      <img src="/img/icon/hr-services-process-execution.webp" alt="Execution & Monitoring" style={{ width: "30px", height: "30px" }} />
    ),
  },
  leftBottom: {
    title: "Feedback & Analytics Reports",
    desc: "We provide detailed HR reports and workforce insights that help businesses track performance, improve decision-making, and optimize overall operational effectiveness.",
    icon: (
      <img src="/img/icon/hr-services-process-feedback.webp" alt="Feedback & Analytics" style={{ width: "30px", height: "30px" }} />
    ),
  },
};

// ── COMPONENTS ────────────────────────────────────────────────────

function HeroSection() {
  const particles = [
    { cx: 150, cy: 100, r: 4, fill: "rgba(237,131,55,0.5)", dur: "3s", delay: "0s" },
    { cx: 250, cy: 160, r: 3, fill: "rgba(56,189,248,0.5)", dur: "4s", delay: "0.8s" },
    { cx: 310, cy: 220, r: 3.5, fill: "rgba(52,211,153,0.5)", dur: "3.5s", delay: "0.3s" },
    { cx: 90, cy: 200, r: 3, fill: "rgba(246,173,85,0.5)", dur: "4.2s", delay: "1.1s" },
    { cx: 370, cy: 160, r: 2.5, fill: "rgba(237,131,55,0.4)", dur: "3.8s", delay: "0.6s" },
    { cx: 340, cy: 350, r: 3, fill: "rgba(168,85,247,0.5)", dur: "3.2s", delay: "1.5s" },
    { cx: 50, cy: 120, r: 2.5, fill: "rgba(56,189,248,0.4)", dur: "4.5s", delay: "0.2s" },
  ];
  return (

    <section className="hero" id="hero">

      <div className="hero-left">
        <div className="h-badge"><div className="badge-dot" />Human Resource</div>
        <h1 className="hero-heading">
          HR Consultancy Services
          that <span className="hl lined">Builds Strong </span>
          Teams
        </h1>
        <ul className="hero-sub">
          <li>We find candidates who match your company’s values and drive success.</li>
          <li>We create custom HR solutions that ensure clarity, compliance, and growth.</li>
          <li>We handle accurate payroll to ensure compliance and reduce administrative.</li>
          <li>We manage HR so you can focus on growing your business-hassle-free.</li>
        </ul>
        <div className="hero-actions">
          <a className="btn-fill" href="#approach">Explore More <span className="btn-arrow">›</span></a>
        </div>
      </div>

      <div className="hero-right">
        <img
          src={banner}
          alt="Banner"
          style={{ width: "100%", height: "auto", objectFit: "contain", position: "relative", zIndex: 5, animation: "fadeUp .9s .15s ease both" }}
        />
      </div>
    </section>
  );
}


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
        @media (max-width:1024px) { .ap-inner { grid-template-columns:1fr; gap:2.5rem; } .ap-form-wrap { max-width:100%; } }
        @media (max-width:768px) { .fl-row { grid-template-columns:1fr; } .ap-form-card { padding:2rem 1.4rem; } }
        @media (max-width:480px) { .approach { padding:3rem 5%; } .ap-form-card { padding:1.6rem 1.1rem; } }
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
        .fl-input,.fl-textarea { width:100%; padding:0.82rem 1rem; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; font-family:'Poppins',sans-serif; font-size:0.88rem; color:#fff; background:rgba(255,255,255,0.04); outline:none; appearance:none; transition:border-color 0.22s,background 0.22s,box-shadow 0.22s; }
        .fl-input::placeholder,.fl-textarea::placeholder { color:rgba(255,255,255,0.3); }
        .fl-input:focus,.fl-textarea:focus { border-color:var(--orange); background:rgba(237,131,55,0.06); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .fl-icon { position:absolute; left:0.85rem; top:50%; transform:translateY(-50%); font-size:0.95rem; opacity:0.5; pointer-events:none; }
        .fl-group.textarea-group .fl-icon { top:0.9rem; transform:none; }
        .fl-textarea { min-height:88px; resize:none; padding-top:0.82rem; padding-left:1rem; }
        .phone-row { display:flex; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; overflow:hidden; background:rgba(255,255,255,0.04); transition:border-color 0.22s,box-shadow 0.22s; }
        .phone-row:focus-within { border-color:var(--orange); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .phone-flag { display:flex; align-items:center; gap:0.3rem; padding:0 0.85rem; font-size:0.82rem; font-weight:700; color:#fff; border-right:1.5px solid rgba(237,131,55,0.2); white-space:nowrap; background:rgba(237,131,55,0.08); cursor:default; flex-shrink:0; }
        .phone-flag-icon { font-size:0.9rem; opacity:0.7; }
        .phone-row .fl-input { border:none; border-radius:0; background:transparent; box-shadow:none; padding:0.82rem 1rem; }
        .phone-row .fl-input:focus { box-shadow:none; }
        .ap-submit { width:100%; background:linear-gradient(135deg,#ed8337,#f5a66b); color:#fff; border:none; padding:1rem 1.5rem; border-radius:12px; font-family:'Poppins',sans-serif; font-size:0.97rem; font-weight:500; cursor:pointer; letter-spacing:0.02em; display:flex; align-items:center; justify-content:center; gap:0.6rem; transition:transform 0.2s,box-shadow 0.2s; }
        .ap-submit:hover { transform:translateY(-2px); box-shadow:0 12px 36px rgba(237,131,55,0.5); }
        .ap-submit-arrow { display:inline-flex; align-items:center; justify-content:center; width:24px; height:24px; border-radius:50%; background:rgba(2,43,68,0.25); font-size:0.9rem; }
      h3.hr-h2 {
    font-size: 2.5rem;
}
      `}</style>

      <div className="ap-inner">

        {/* LEFT CONTENT */}
        <div className="ap-left">
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Approach in</div>
          </div>
          <h2 className="ap-heading"> <span>Human Resource </span>Management</h2>
          <p className="ap-intro">
            At PCS, we simplify complex HR challenges through structured and scalable solutions aligned with your business goals. Our approach improves operational clarity, workforce efficiency, and long-term organizational growth.

          </p>
          <p className="ap-intro">
            We support businesses across every HR stage, including compliance management, recruitment, policy development, and employee engagement. Our team works as an extended HR partner focused on stability and performance.

          </p>
          <p className="ap-intro">
            Our HR solutions are designed to reduce operational risk, strengthen workplace culture, and improve productivity. PCS helps businesses build strong people systems that support sustainable and scalable growth.
          </p>
        </div>

        {/* RIGHT FORM */}
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
                  <div className="phone-flag"><span>📞</span></div>
                  <input className="fl-input" type="tel" name="phone" placeholder="Mobile number" value={form.phone} onChange={handleChange} maxLength="10" pattern="[0-9]{10}" required />
                </div>
              </div>
              <div className="fl-group textarea-group">
                <label className="fl-label">Message</label>
                <div style={{ position: "relative" }}>
                  <span className="fl-icon" style={{ top: "0.9rem", transform: "none" }}>💬</span>
                  <textarea className="fl-textarea" name="msg" placeholder="Tell us about your social media goals..." value={form.msg} onChange={handleChange} />
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
  );
}


function ServicesSection() {
  const [open, setOpen] = useState(0);
  const active = services[open];

  const handleTabClick = (i) => {
    setOpen(open === i ? -1 : i);
  };

  return (
    <section className="hr-services">
      <div className="partners-header1" style={{ textAlign: 'center' }}>
        <h2 className="partners-eyebrow" style={{ marginBottom: '20px' }}>Our Services</h2>
      </div>
      <h3 className="hr-h2" style={{ textAlign: 'center', color: '#fff' }}>Your Growth, <span style={{ color: '#ed8337' }}><i>Backed by Smarter </i></span>HR Services</h3>
      <p className="hr-sub" style={{ textAlign: 'center', color: '#fff' }}>
        We bridge the gap between people and performance through custom-built HR strategies that scale as you do.
      </p>

      <div className="hr-services__inner">
        {/* LEFT — Tab list (desktop) / Accordion (mobile) */}
        <div className="hr-services__tabs">
          {services.map((s, i) => (
            <div key={i} className="hr-accordion-item">
              <div
                className={`hr-tab-item${open === i ? " active" : ""}`}
                onClick={() => handleTabClick(i)}
              >
                <span className="hr-tab-icon">{s.icon}</span>
                <h2 className="hr-tab-label">{s.title}</h2>
                <span className="hr-tab-arrow">{open === i ? "▲" : "▼"}</span>
              </div>
              {/* Mobile accordion content — shows inline below each tab */}
              <div className={`hr-accordion-content${open === i ? " hr-accordion-open" : ""}`}>
                <div className="hr-services__content" style={{ "--preview-color": s.color }}>
                  <div className="hr-content-header">
                    <span className="hr-content-icon">{s.icon}</span>
                    <span className="hr-content-title">{s.title}</span>
                  </div>
                  <p className="hr-services__preview-desc">{s.desc}</p>
                  <ul className="hr-services__bullets" style={{ "--bullet-color": s.color }}>
                    {s.bullets.map((b, j) => (
                      <li key={j} className="hr-services__bullet">{b}</li>
                    ))}
                  </ul>
                  <button className="hr-content-btn" style={{ background: '#ed8337', marginTop: '20px' }}>
                    Explore More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — Content box (desktop only) */}
        <div
          className="hr-services__content hr-services__content--desktop"
          style={{ "--preview-color": active.color }}
        >
          <div className="hr-content-header">
            <span className="hr-content-icon">{active ? active.icon : ""}</span>
            <span className="hr-content-title">{active ? active.title : ""}</span>
          </div>
          <p className="hr-services__preview-desc">{active ? active.desc : ""}</p>
          <ul className="hr-services__bullets" style={{ "--bullet-color": active ? active.color : "" }}>
            {active && active.bullets.map((b, i) => (
              <li key={i} className="hr-services__bullet">{b}</li>
            ))}
          </ul>
          <button
            className="hr-content-btn"
            style={{ background: '#ed8337', marginTop: '20px' }}
          >
            Explore More →
          </button>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="tl-section">
      <div className="tl-inner">
        <div className="tl-header">
          <div className="partners-header1">
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Benefits </h2>
          </div>
          <h3 className="tl-heading">Benefits of Choosing <span>Our HR Consultancy </span> Services</h3>
          <p className="tl-subtext">
            From recruitment to payroll, we deliver cost-effective HR solutions designed to evolve with your business.

          </p>
        </div>

        <div className="bento-grid">
          {benefits.map((b, i) => (
            <div key={i} className={`bn-cell bn-cell-${i + 1}`}>
              <div className="bn-icon">{b.icon}</div>
              <div className="bn-num">{b.num}</div>
              <h4 className="bn-title">{b.title}</h4>
              <div className="bn-desc">{b.desc}</div>
              <a className="bn-link" href="#">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="pr-section">
      <div className="pr-inner">
        <div className="pr-header">
          <div className="partners-header1">
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Human Resource Management Process</h2>
          </div>
          <h3 className="pr-heading">Our Human <span style={{ color: '#ed8337' }}>Resource Management</span> Process</h3>
          <p className="pr-subtext">
            We begin with a deep understanding of your business, then craft tailored strategies and action plans. Our team ensures seamless execution and constant monitoring of every initiative. Through detailed feedback and analytics reports, we help you stay informed, optimize results, and make data-driven decisions that drive long-term success.


          </p>
        </div>

        <div className="circ-layout">
          {/* LEFT TOP: Step A */}
          <div className="circ-left-top">
            <div className="circ-step">
              <div className="cs-icon-wrap">{processSteps.leftTop.icon}</div>
              <h3 className="cs-title">{processSteps.leftTop.title}</h3>
              <div className="cs-desc">{processSteps.leftTop.desc}</div>
            </div>
          </div>

          {/* CENTER: Circular SVG Ring */}
          <div className="circ-center">
            <div className="circ-svg-wrap">
              <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="150" r="135" fill="none" stroke="rgba(237,131,55,0.12)" strokeWidth="1" strokeDasharray="6 5" />
                <circle cx="150" cy="150" r="118" fill="none" stroke="rgba(237,131,55,0.08)" strokeWidth="22" />
                <path d="M150,32 A118,118 0 0,1 268,150" fill="none" stroke="#ed8337" strokeWidth="20" strokeLinecap="butt" opacity="0.95" />
                <path d="M268,150 A118,118 0 0,1 150,268" fill="none" stroke="#f5a66b" strokeWidth="20" strokeLinecap="butt" opacity="0.75" />
                <path d="M150,268 A118,118 0 0,1 32,150" fill="none" stroke="#ed8337" strokeWidth="20" strokeLinecap="butt" opacity="0.45" />
                <path d="M32,150 A118,118 0 0,1 150,32" fill="none" stroke="#f5a66b" strokeWidth="20" strokeLinecap="butt" opacity="0.22" />
                <circle cx="150" cy="150" r="96" fill="none" stroke="rgba(237,131,55,0.08)" strokeWidth="1" strokeDasharray="4 6" />
                <circle cx="150" cy="150" r="85" fill="rgba(0,20,40,0.85)" />
                <circle cx="150" cy="32" r="8" fill="#ed8337" />
                <circle cx="268" cy="150" r="8" fill="#ed8337" />
                <circle cx="150" cy="268" r="8" fill="#ed8337" />
                <circle cx="32" cy="150" r="8" fill="#ed8337" />
                <circle cx="150" cy="32" r="13" fill="none" stroke="rgba(237,131,55,0.3)" strokeWidth="2" />
                <circle cx="268" cy="150" r="13" fill="none" stroke="rgba(237,131,55,0.3)" strokeWidth="2" />
                <circle cx="150" cy="268" r="13" fill="none" stroke="rgba(237,131,55,0.3)" strokeWidth="2" />
                <circle cx="32" cy="150" r="13" fill="none" stroke="rgba(237,131,55,0.3)" strokeWidth="2" />
              </svg>
              {/* Center core text — not rotating */}
              <div className="circ-core">
                <div className="circ-core-title">HR Management<br />Process</div>
                {/* <div className="circ-core-sub">PCS Method</div> */}
              </div>
            </div>
          </div>

          {/* RIGHT TOP: Step B */}
          <div className="circ-right-top">
            <div className="circ-step">
              <div className="cs-icon-wrap">{processSteps.rightTop.icon}</div>
              <h3 className="cs-title">{processSteps.rightTop.title}</h3>
              <div className="cs-desc">{processSteps.rightTop.desc}</div>
            </div>
          </div>

          {/* LEFT BOTTOM: Step D */}
          <div className="circ-left-bottom">
            <div className="circ-step">
              <div className="cs-icon-wrap">{processSteps.leftBottom.icon}</div>
              <div className="cs-title">{processSteps.leftBottom.title}</div>
              <div className="cs-desc">{processSteps.leftBottom.desc}</div>
            </div>
          </div>

          {/* RIGHT BOTTOM: Step C */}
          <div className="circ-right-bottom">
            <div className="circ-step">
              <div className="cs-icon-wrap">{processSteps.rightBottom.icon}</div>
              <div className="cs-title">{processSteps.rightBottom.title}</div>
              <div className="cs-desc">{processSteps.rightBottom.desc}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// faq section
const faqData = [
  { q: "What Makes Your Payroll Management Different From Others?", a: "We don’t just process numbers—we ensure accuracy, compliance, and confidentiality at every step. From salary disbursals and tax filings to statutory compliance (PF, ESI, TDS), we handle it all with tech-enabled precision and end-to-end transparency." },
  { q: "Can You Help Us Hire For Niche Or Leadership Roles?", a: "Absolutely. Our recruitment services cover everything from entry-level to CXO positions. We focus on culture-fit and long-term alignment, using a consultative approach to find the right talent—not just fill the vacancy." },
  { q: "Do You Offer HR Strategy Support For Startups Or Small Teams?", a: "Yes. Whether you’re hiring your first employee or scaling rapidly, we help set up HR foundations like org structure, role mapping, goal-setting frameworks, and people policies that grow with your business." },
  { q: "How Do You Ensure Our HR Policies Are Compliant?", a: "Our policy management services are crafted by HR and legal experts to ensure they meet local labor laws, industry standards, and your internal values. We customize every policy to be legally sound yet people-friendly." },
  { q: "Can We Outsource Only A Few HR Functions Instead Of The Full Setup?", a: "Definitely. Our services are modular—you can pick and choose what you need. Whether it’s just payroll, recruitment, or policy support, we’ll step in where you need us most." },
  { q: "How Long Does It Take To Get Started With Your Services?", a: "Depending on the scope, onboarding typically takes 1–3 weeks. For payroll, we can go live within a month. For recruitment or strategy services, timelines vary based on the complexity and goals." },
];
function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <section className="faq-section">
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
  );
}

export default function HRConsultancy() {
  return (
    <Layout >


      <SEOHead />
      <style>{styles}</style>
      <div className="hr-page">
        <HeroSection />
        <ApproachSection />
        <ServicesSection />
        <BenefitsSection />
        <ProcessSection />
        <FAQSection />
        <CTASection />
      </div>
    </Layout>
  );
}