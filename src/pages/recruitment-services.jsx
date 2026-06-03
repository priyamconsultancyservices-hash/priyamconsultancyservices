import { useState } from "react";
import emailjs from "@emailjs/browser";
import CTASection from "../components/HomePage/CTA";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
const banner = "/img/recriutment-services.png";
const pageUrl = "https://www.priyamconsultancy.com/recruitment-services/";
const imageUrl = "https://www.priyamconsultancy.com/img/recriutment-services.png";

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
          "@id": "https://www.priyamconsultancy.com/recruitment-services/",
          "name": "Recruitment Services"
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
    "@id": "https://www.priyamconsultancy.com/recruitment-services/#service",
    "name": "Recruitment Services",
    "serviceType": "Recruitment and Hiring Services",
    "url": "https://www.priyamconsultancy.com/recruitment-services/",
    "description": "Priyam Consultancy provides professional recruitment services including talent acquisition, executive hiring, staffing solutions, candidate screening, workforce planning and end-to-end recruitment support for businesses across India.",
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
    "name": "Recruitment Services in Coimbatore | HR Recruitment Agency",
    "image": ["https://www.priyamconsultancy.com/img/recriutment-services.png"],
    "description": "Best recruitment services in Coimbatore offering talent acquisition, executive hiring, staffing solutions, candidate screening and end-to-end recruitment support for businesses.",
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
      "reviewCount": "4387"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.priyamconsultancy.com/recruitment-services/",
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
        "name": "What Industries Do You Provide Recruitment Services For?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We cater to many industries including tech, finance, logistics, FMCG, healthcare, and a number of other industries, with vertical-specific recruiters in each."
        }
      },
      {
        "@type": "Question",
        "name": "Do You Just Provide Candidate Profiles Or Do You Provide End To End Hiring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both. We are a full-service Recruitment Services Company, that does profile share, end-to-end recruitment and full RPO setups."
        }
      },
      {
        "@type": "Question",
        "name": "Can You Assist With Hiring For Our HR And Compliance Teams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer HR Recruitment Services which focus on sourcing the best possible talent for internal HR, payroll and people ops roles."
        }
      },
      {
        "@type": "Question",
        "name": "Do You Support Hiring For Remote Or Hybrid Teams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We can help you to find and onboard remote, hybrid and freelance resources in-line with your organization's model."
        }
      },
      {
        "@type": "Question",
        "name": "How Do Your Recruitment Consultancy Services Work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We help you improve the way you hire—writing JDs, setting interview SOPs, building talent pools, and being your in-house recruitment strategy partner."
        }
      },
      {
        "@type": "Question",
        "name": "How Is PCS Different From Other Recruitment Agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide the depth of a consultancy, the scale of an agency and the ownership of an internal HR partner, and we do it all, smarter and faster."
        }
      }
    ]
  }
];

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
  h3.hr-h2 {
    font-size: 2.7rem;
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
.btn-fill:hover { background: var(--orange-l); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(237,131,55,0.42); }
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


/* ──────────────────────────────────────────────────
   SERVICES — Accordion Card Layout
   ────────────────────────────────────────────────── */
.hr-services {
  padding: 100px 80px;
  background: #004168;
}
.hr-services__inner {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 60px; align-items: start; margin-top: 63px;
}
.hr-services__left { position: sticky; top: 100px; }
.hr-services__left .hr-tag { margin-bottom: 16px; }
.hr-services__desc { color: var(--hr-gray); font-size: 0.95rem; line-height: 1.8; margin-bottom: 32px; margin-top: 12px; max-width: 440px; }
.hr-services__preview {
  background: #fff; border-radius: 20px; padding: 36px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.07);
  border-top: 4px solid var(--preview-color, var(--hr-orange));
  transition: border-color 0.3s ease;
}
.hr-services__preview-icon { font-size: 3rem; margin-bottom: 16px; }
.hr-services__preview-title { font-size: 1.25rem; font-weight: 700; color: var(--hr-dark); margin-bottom: 12px; }
.hr-services__preview-desc { font-size: 0.88rem; color: var(--hr-gray); line-height: 1.75; margin-bottom: 20px; }
.hr-services__bullets { list-style: none; display: flex; flex-direction: column; gap: 9px; }
.hr-services__bullet {
  display: flex; align-items: center; gap: 10px;
  font-size: 0.85rem; font-weight: 500; color: var(--hr-dark);
}
.hr-services__bullet::before {
  content: "✓"; width: 22px; height: 22px; border-radius: 50%;
  background: var(--bullet-color, var(--hr-orange));
  color: #fff; font-size: 0.7rem; font-weight: 800;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}

/* Accordion on the right */
.hr-services__accordion { display: flex; flex-direction: column; gap: 12px; }
.hr-acc-item {
  background: #fff; border-radius: 16px; overflow: hidden;
  border: 2px solid transparent;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  transition: all 0.3s ease; cursor: pointer;
}
.hr-acc-item:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.1); }
.hr-acc-item.open { border-color: var(--item-color, var(--hr-orange)); box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
.hr-acc-header {
  display: flex; align-items: center; gap: 16px;
  padding: 20px 24px; cursor: pointer; user-select: none;
}
.hr-acc-num {
  font-size: 0.7rem; font-weight: 800; letter-spacing: 0.1em;
  color: var(--item-color, var(--hr-orange)); min-width: 28px;
}
.hr-acc-icon { font-size: 1.6rem; }
.hr-acc-title { font-size: 1rem; font-weight: 700; color: var(--hr-dark); flex: 1; }
.hr-acc-arrow {
  width: 30px; height: 30px; border-radius: 50%;
  background: var(--item-color, var(--hr-orange)); color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem; font-weight: 700;
  transition: transform 0.3s ease; flex-shrink: 0;
}
.hr-acc-item.open .hr-acc-arrow { transform: rotate(45deg); }
.hr-acc-body {
  max-height: 0; overflow: hidden;
  transition: max-height 0.4s ease, padding 0.3s ease;
  padding: 0 24px;
}
.hr-acc-item.open .hr-acc-body { max-height: 300px; padding: 0 24px 24px; }
.hr-acc-body-inner { padding-top: 12px; border-top: 1px solid #F0F0F0; }
.hr-acc-body p { font-size: 0.85rem; color: var(--hr-gray); line-height: 1.75; margin-bottom: 14px; }
.hr-acc-tags { display: flex; gap: 8px; flex-wrap: wrap; }
.hr-acc-tag {
  font-size: 0.72rem; font-weight: 600; padding: 4px 12px; border-radius: 999px;
  background: rgba(255,107,43,0.08); color: var(--item-color, var(--hr-orange));
  border: 1px solid rgba(255,107,43,0.2);
}

/* ──────────────────────────────────────────────────
   BENEFITS — Bento Grid (no-box style)
   ────────────────────────────────────────────────── */
.tl-section {
  position: relative; padding: 6rem 6%;
  background: #ffffff; overflow: hidden;
}
.tl-inner { position: relative; z-index: 2; max-width: 1100px; margin: 0 auto; }

.tl-header { text-align: center; margin-bottom: 4rem; }
.tl-heading {
  font-family: var(--font); font-size: clamp(1.7rem, 2.8vw, 2.4rem);
  font-weight: 800; line-height: 1.15; letter-spacing: -.025em;
  color: #0d1f2d; margin-bottom: .85rem;
}
.tl-heading span { color: var(--hr-orange); }
.tl-subtext { font-size: .96rem; line-height: 1.7; color: #6b7a8d; max-width: 560px; margin: 0 auto; }

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
  background: var(--hr-orange);
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
  font-family: var(--font); font-size: 1.05rem; font-weight: 800;
  color: #0d1f2d; line-height: 1.3;
}
.bn-cell .bn-desc {
  font-size: .875rem; line-height: 1.78; color: #6b7a8d;
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
.pr-inner { position: relative; z-index: 2; max-width: 1100px; margin: 0 auto; }

.pr-header { margin-bottom: 3.5rem; text-align: center; }
.pr-heading {
  font-family: var(--font);
  font-size: clamp(1.7rem, 2.8vw, 2.4rem);
  font-weight: 800; line-height: 1.15; letter-spacing: -.025em;
  color: #fff; margin-bottom: 1rem;
}
.pr-subtext {
  font-size: .92rem; line-height: 1.78; color: rgba(255,255,255,0.5);
  max-width: 640px; margin: 0 auto; text-align: center;
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
  font-family: var(--font); font-size: 1.1rem; font-weight: 800;
  color: #fff; line-height: 1.2; letter-spacing: -.01em;
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
  font-family: var(--font); font-size: 1rem; font-weight: 800;
  color: #fff; line-height: 1.3;
}
.cs-desc {
  font-size: .82rem; line-height: 1.72;
  color: rgba(255,255,255,0.45); max-width: 240px;
}
.circ-left-top .cs-desc,
.circ-left-bottom .cs-desc { margin-left: auto; }
h3.faq-h3 {
font-size: 2.5rem;
}
/* ─── RESPONSIVE ─────────────────────────────────── */
@media (max-width: 1024px) {
  .hr-services { padding: 80px 40px; }
  .hr-services__inner { grid-template-columns: 1fr; }
  .hr-services__left { position: static; }
  .bento-grid { grid-template-columns: 1fr 1fr; }
  .bn-cell-2, .bn-cell-5 { border-left: none; border-right: none; }
  .bn-cell-3, .bn-cell-6 { border-left: 1.5px solid rgba(0,65,104,0.08); }
  .circ-layout { grid-template-columns: 1fr; grid-template-rows: auto; min-height: unset; }
  .circ-center { grid-column: 1; grid-row: 1; margin: 0 auto 2rem; }
  .circ-left-top, .circ-left-bottom, .circ-right-top, .circ-right-bottom {
    grid-column: 1; padding: 0;
  }
  .circ-left-top .circ-step, .circ-left-bottom .circ-step {
    align-items: flex-start; text-align: left;
  }
  .circ-left-top .cs-desc, .circ-left-bottom .cs-desc { margin-left: 0; }
  .circ-step { padding: 1rem 1.2rem; border-bottom: 1px dashed rgba(237,131,55,0.18); }
}
@media (max-width: 640px) {
  .hr-services { padding: 60px 20px; }
  .tl-section { padding: 4rem 5%; }
  .bento-grid { grid-template-columns: 1fr; }
  .bn-cell-2,.bn-cell-3,.bn-cell-5,.bn-cell-6 { border-left: none; border-right: none; }
  .pr-section { padding: 4rem 5% 5rem; }
  .faq-wrapper {display:block;}
}

/* ══════ SERVICES — TILT CARDS (HTML layout) ══════ */
.svc-section {
  position: relative; padding: 6rem 6% 7rem;
  background: linear-gradient(160deg, var(--navy-deep) 0%, var(--navy) 55%, var(--navy-mid) 100%);
  overflow: hidden;
}
.svc-section::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image: linear-gradient(rgba(237,131,55,0.04) 1px,transparent 1px),
                    linear-gradient(90deg,rgba(237,131,55,0.04) 1px,transparent 1px);
  background-size: 60px 60px;
}
.svc-section::after {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(ellipse 55% 60% at 5% 20%, rgba(237,131,55,0.07) 0%, transparent 60%),
    radial-gradient(ellipse 50% 55% at 95% 80%, rgba(78,205,196,0.05) 0%, transparent 55%);
}
.svc-inner { position: relative; z-index: 2; margin: 0 auto; }

.svc-header { text-align: center; margin-bottom: 4.5rem; }
.svc-eyebrow {
  display: inline-flex; align-items: center; gap: .55rem;
  font-size: .73rem; font-weight: 700; color: var(--orange);
  letter-spacing: .14em; text-transform: uppercase; margin-bottom: .9rem;
}
.svc-eyebrow-line { width: 28px; height: 2px; background: var(--orange); border-radius: 2px; }
.svc-heading {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.5rem, 2.4vw, 2.2rem);
  font-weight: 700; line-height: 1.1; letter-spacing: .0em;
  color: #fff; margin-bottom: .75rem;
}
.svc-subtext {
  font-size: .95rem; line-height: 1.75; color: rgb(255, 255, 255);
margin: 30px auto;
}

.svc-trio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  align-items: stretch;
}

/* ── TILT CARDS — Image-matched dark navy style ── */
.svc-tcard {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  display: flex; flex-direction: column;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.10);
  transition: transform .38s cubic-bezier(.22,.68,0,1.2),
              box-shadow .38s ease,
              border-color .3s;
  cursor: default;
}
.svc-tcard:hover {
  transform: translateY(-8px);
  border-color: rgba(237,131,55,0.4);
  box-shadow: 0 20px 50px rgba(0,0,0,0.35), 0 0 0 1px rgba(237,131,55,0.15);
}

/* Card band — top coloured header area like image */
.svc-tcard-band {
  position: relative;
  padding: 1.6rem 1.8rem 2rem;
  background: rgba(255,255,255,0.05);
  border-bottom: 1px solid rgba(255,255,255,0.07);
}

/* Number badge — top right corner like image */
.svc-tcard-num {
  position: absolute; top: 1rem; right: 1.2rem; z-index: 2;
  font-family: 'Poppins', monospace; font-size: .65rem; font-weight: 800;
  color: rgba(237,131,55,0.55); letter-spacing: 0.08em;
}

/* Icon box — square rounded like image */
.svc-tcard-icon {
  position: relative; z-index: 2;
  width: 54px; height: 54px; border-radius: 14px;
  background: rgba(237,131,55,0.12);
  border: 1px solid rgba(237,131,55,0.22);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 1rem;
  transition: background .3s, transform .35s cubic-bezier(.22,.68,0,1.4);
}
.svc-tcard:hover .svc-tcard-icon {
  background: rgba(237,131,55,0.22);
  transform: scale(1.05);
}
.svc-tcard-icon svg {
  width: 24px; height: 24px; stroke: var(--orange);
  fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round;
}

/* Eyebrow label above title like image */
.svc-tcard-eyebrow {
  font-size: .62rem; font-weight: 700; letter-spacing: .14em;
  text-transform: uppercase; color: var(--orange);
  margin-bottom: .45rem; display: block;
}

.svc-tcard-title {
  position: relative; z-index: 2;
  font-family: 'Poppins', sans-serif; font-size: 1.25rem; font-weight: 700;
  color: #fff; line-height: 1.3;
}

.svc-tcard-body {
  padding: 1.5rem 1.8rem 1.8rem;
  display: flex; flex-direction: column;
  gap: .85rem; flex: 1;
}

.svc-tcard-desc {
  font-size: .88rem; line-height: 1.72; color: rgba(255,255,255,0.82);
  font-family: var(--font);
  padding-bottom: .8rem;
  border-bottom: 1px solid rgba(255,255,255,0.07);
}

/* Bullet list */
.svc-tcard-points { display: flex; flex-direction: column; gap: .6rem; list-style: none; padding: 0; }
.svc-tcard-points li {
  display: flex; align-items: flex-start; gap: .75rem;
  font-size: .84rem; line-height: 1.55; color: rgba(255,255,255,0.78);
}

/* NEW bullet — small orange circle with checkmark SVG like image */
.svc-pt-check {
  flex-shrink: 0;
  margin-top: 2px;
  width: 18px; height: 18px; border-radius: 50%;
  background: rgba(237,131,55,0.15);
  border: 1.5px solid rgba(237,131,55,0.5);
  display: flex; align-items: center; justify-content: center;
}
.svc-pt-check svg {
  width: 9px; height: 9px;
  stroke: var(--orange); fill: none;
  stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round;
}

/* Keep old diamond class for compatibility but hide it */
.svc-pt-diamond { display: none; }

.svc-tcard-footer { height: 3px; }
.svc-tcard-1 .svc-tcard-footer { background: linear-gradient(90deg, #ed8337 0%, transparent 100%); }
.svc-tcard-2 .svc-tcard-footer { background: linear-gradient(90deg, #ed8337 0%, transparent 100%); }
.svc-tcard-3 .svc-tcard-footer { background: linear-gradient(90deg, #ed8337 0%, transparent 100%); }

@media (max-width: 900px) {
  .svc-trio-grid { grid-template-columns: 1fr; }
  .svc-section { padding: 4rem 5% 5rem; }
}


.faq-section { padding: 40px 0px 80px 0px; }

/* ─── STEP FLOW SECTION ─────────────────────────────────── */
.sf-section {
  padding: 80px 6% 100px;
  background: #004168;
}
.sf-inner {margin: 0 auto; }
.sf-header { text-align: center; margin-bottom: 4rem; }
.sf-heading {
  font-family: var(--font); font-size: clamp(1.7rem, 2.8vw, 2.4rem);
  font-weight: 700; color: #fff; margin-bottom: .7rem;
}
.sf-heading span { color: var(--orange); }
.sf-subtext { font-size: .94rem; color: rgba(255, 255, 255, 0.94); line-height: 1.75; margin: 0 auto; }

/* Flow row — vertically centered so cards can offset up/down */
.sf-flow {
  display: flex;
  align-items: center;
  gap: 0;
}

/* Each card+arrow pair */
.sf-card-wrap {
  display: flex;
  align-items: center;
  flex: 1;
  gap: 0;
  min-width: 0;
}

/* ── Alternating vertical offset ──
   odd  cards (1,3) → translateY(-28px)  — zoom-out / lifted up
   even cards (2,4) → translateY(+28px)  — zoom-out / pushed down
   Both are scale(0.93) so they look "zoomed out" vs default
*/
.sf-card {
  flex: 1;
  min-width: 0;
  background: #fff;
  border: 2px dashed #c8d6e0;
  border-radius: 20px;
  padding: 1.8rem 1.4rem 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  transition: transform .35s cubic-bezier(.22,.68,0,1.3), box-shadow .3s;
  /* default scale — all cards start same */
  transform: scale(0.93) translateY(0px);
}

/* Odd index cards (1st, 3rd) — lifted up */
.sf-card.sf-odd {
  transform: scale(0.93) translateY(-28px);
}
/* Even index cards (2nd, 4th) — pushed down */
.sf-card.sf-even {
  transform: scale(0.93) translateY(28px);
}

/* Hover — scale back to full & lift */
.sf-card:hover,
.sf-card.sf-odd:hover,
.sf-card.sf-even:hover {
  // transform: scale(1) translateY(-2px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.22);
  border-style: solid;
  border-color: var(--sf-color, #004168);
}

/* Colored left-border accent bar */
// .sf-card::before {
//   content: '';
//   position: absolute;
//   left: 0; top: 14px; bottom: 14px;
//   width: 4px;
//   border-radius: 0 4px 4px 0;
//   background: var(--sf-color, #004168);
// }

/* Icon */
.sf-card-icon {
  width: 54px; height: 54px;
  border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 1rem;
  background: transparent;
  color: var(--sf-color, #004168);
  flex-shrink: 0;
}
.sf-card-icon svg {
  width: 36px; height: 36px;
  stroke: var(--sf-color, #004168);
  fill: none;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Title */
.sf-card-title {
  font-family: var(--font);
  font-size: .95rem;
  font-weight: 800;
  color: var(--sf-color, #ed8337);
  line-height: 1.25;
  margin-bottom: .65rem;
  text-transform: uppercase;
  letter-spacing: .01em;
}

/* Body text */
.sf-card-desc {
      font-size: .9rem;
    line-height: 1.72;
    color: #000000;
    font-family: 'Poppins';
}

/* ── Orange Arrow — animated pointing ── */
.sf-arrow {
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  width: 48px;
  z-index: 2;
}
/* Tail line animation — draws left to right */
.sf-arrow-tail {
  stroke-dasharray: 20;
  stroke-dashoffset: 20;
  animation: sf-tail-draw 1.4s ease-in-out infinite;
}
/* Head (chevron) — slides in after tail */
.sf-arrow-head {
  animation: sf-head-slide 1.4s ease-in-out infinite;
}
/* Whole SVG fades in/out gently */
.sf-arrow svg {
  width: 40px; height: 40px;
  filter: drop-shadow(0 0 6px rgba(237,131,55,0.55));
  animation: sf-arrow-glow 1.4s ease-in-out infinite;
}
@keyframes sf-tail-draw {
  0%        { stroke-dashoffset: 20; opacity: 0.3; }
  35%, 70%  { stroke-dashoffset: 0;  opacity: 1;   }
  100%      { stroke-dashoffset: 0;  opacity: 1;   }
}
@keyframes sf-head-slide {
  0%        { transform: translateX(-5px); opacity: 0; }
  40%, 80%  { transform: translateX(0px);  opacity: 1; }
  100%      { transform: translateX(2px);  opacity: 0.8; }
}
@keyframes sf-arrow-glow {
  0%, 100% { opacity: 0.7; }
  50%       { opacity: 1;   }
}

@media (max-width: 960px) {
  .sf-flow { flex-wrap: wrap; gap: 1.4rem; align-items: stretch; }
  .sf-card-wrap { flex: 1 1 calc(50% - 1.4rem); min-width: 220px; }
  .sf-arrow { display: none; }
  .sf-card, .sf-card.sf-odd, .sf-card.sf-even { transform: scale(1) translateY(0); }
}
@media (max-width: 560px) {
  .sf-flow { flex-direction: column; }
  .sf-card-wrap { flex: 1 1 100%; }
  .sf-section { padding: 60px 5%; }
  .sf-card, .sf-card.sf-odd, .sf-card.sf-even { transform: scale(1) translateY(0); }
}

/* ── ServicesBuiltForResults (BFR) ────────────────────────── */
.bfr-section {
  padding: 6rem 6%;
  background: #ffffff;
  font-family: var(--font);
}
.bfr-inner { max-width: 1200px; margin: 0 auto; }
.bfr-header { text-align: center; margin-bottom: 3rem; }
.bfr-eyebrow {
  display: inline-flex; align-items: center; gap: 0.55rem;
  font-size: 0.72rem; font-weight: 700; color: var(--orange);
  letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 0.9rem;
}
.bfr-eyebrow-line { width: 28px; height: 2px; background: var(--orange); border-radius: 2px; display: inline-block; }
.bfr-title {
  font-family: var(--font); font-size: clamp(1.75rem, 2.8vw, 2.4rem);
  font-weight: 600;
  color: #000000; margin-bottom: 0.85rem;
}
.bfr-title span { color: var(--orange); }
.bfr-sub { font-size: 0.95rem; color: #000000; line-height: 1.72; margin: 0 auto; }
.bfr-tabs {
  display: flex; gap: 0; overflow-x: auto;
  border-bottom: 2px solid #e8edf2; margin-bottom: 2.5rem; scrollbar-width: none;
}
.bfr-tabs::-webkit-scrollbar { display: none; }
.bfr-tab {
  padding: 0.9rem 1.4rem; font-family: var(--font); font-size: 0.82rem; font-weight: 600;
  color: #8a96a6; background: none; border: none; cursor: pointer; white-space: nowrap;
  position: relative; transition: color 0.22s, background 0.22s;
  border-bottom: 3px solid transparent; margin-bottom: -2px;
  display: flex; align-items: center; gap: 0.4rem;
}
.bfr-tab:hover { color: #0d1f2d; background: rgba(0,65,104,0.03); }
.bfr-tab.active { color: var(--orange);  font-weight: 700; }
.bfr-tab-icon { font-size: 1rem; }
.bfr-panel { animation: bfrFadeUp 0.35s ease both; }
@keyframes bfrFadeUp {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
.bfr-panel-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
.bfr-panel-title { font-size: 1.5rem; font-weight: 600; color: #0d1f2d; line-height: 1.2; margin-bottom: 1rem;  }
.bfr-panel-desc { font-size: 0.92rem; color: #000000; line-height: 1.82; margin-bottom: 1.6rem; }
.bfr-features { list-style: none; display: flex; flex-direction: column; gap: 11px; }
.bfr-features li { display: flex; align-items: center; gap: 11px; font-size: 0.88rem;  color: #000000; }
.bfr-check {
  flex-shrink: 0; width: 22px; height: 22px; border-radius: 50%;
  background: var(--orange); display: flex; align-items: center; justify-content: center;
}
.bfr-check svg { width: 11px; height: 11px; stroke: #fff; stroke-width: 2.8; stroke-linecap: round; stroke-linejoin: round; fill: none; }
.bfr-cta-btn {
  margin-top: 2rem; display: inline-flex; align-items: center; gap: 8px;
  background: var(--orange); color: #fff;
  padding: 0.82rem 1.8rem; border-radius: 50px; font-family: var(--font);
  font-size: 0.88rem; font-weight: 600; border: none; cursor: pointer;
  transition: background 0.22s, transform 0.18s, box-shadow 0.22s;
  box-shadow: 0 4px 18px rgba(237,131,55,0.28);
}
.bfr-cta-btn:hover { background: var(--orange-light); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(237,131,55,0.4); }
.bfr-panel-right {
  background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 60%, var(--navy-mid) 100%);
  border-radius: 24px; padding: 2.4rem 2.2rem;
  border: 1px solid rgba(237,131,55,0.22); position: relative; overflow: hidden;
  display: flex; flex-direction: column; justify-content: space-between;
}
.bfr-panel-right::before {
  content: ''; position: absolute; inset: 0;
  background-image: linear-gradient(rgba(237,131,55,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(237,131,55,0.04) 1px, transparent 1px);
  background-size: 30px 30px; pointer-events: none;
}
.bfr-panel-right::after {
  content: ''; position: absolute; top: -60px; right: -60px;
  width: 220px; height: 220px; border-radius: 50%;
  background: radial-gradient(circle, rgba(237,131,55,0.14) 0%, transparent 70%); pointer-events: none;
}
.bfr-right-icon { display: none; font-size: 3.2rem; position: relative; z-index: 1; margin-bottom: 0.5rem; }
.bfr-right-stat { position: relative; z-index: 1; }
.bfr-right-stat-num { font-size: 3rem; font-weight: 900; color: var(--orange); line-height: 1; letter-spacing: -0.03em; }
.bfr-right-stat-label { font-size: 0.78rem; color: rgba(255,255,255,0.5); margin-top: 5px; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase; }
.bfr-right-tags { display: flex; gap: 8px; flex-wrap: wrap;  position: relative; z-index: 1; }
.bfr-right-tag {
  font-size: 0.7rem; font-weight: 600; padding: 5px 14px; border-radius: 50px;
  background: rgba(237,131,55,0.12); color: var(--orange-light); border: 1px solid rgba(237,131,55,0.28);
}
.bfr-right-cta {
  margin-top: 1.6rem; display: inline-flex; align-items: center; gap: 8px;
  background: rgba(237,131,55,0.18); color: var(--orange-light);
  padding: 0.7rem 1.4rem; border-radius: 50px; font-family: var(--font);
  font-size: 0.82rem; font-weight: 700; border: 1px solid rgba(237,131,55,0.35);
  cursor: pointer; transition: background 0.22s, color 0.22s; position: relative; z-index: 1;
}
.bfr-right-cta:hover { background: var(--orange); color: var(--navy-deep); }
@media (max-width: 900px) {
  .bfr-panel-grid { grid-template-columns: 1fr; }
  .bfr-panel-right { min-height: auto; }
  .bfr-section { padding: 4rem 5%; }
}
@media (max-width: 640px) {
  .bfr-tab { font-size: 0.74rem; padding: 0.75rem 0.9rem; }
  .bfr-title { font-size: 1.55rem; }
}

/* ═══════════════════════════════════════════════════
   MOBILE RESPONSIVE FIXES
   ═══════════════════════════════════════════════════ */

/* ── HERO: Mobile — content first, image second, start aligned ── */
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr !important;
    grid-template-rows: auto auto;
    min-height: auto;
    padding: 5rem 5% 3rem;
    align-items: start;
    gap: 1.5rem;
  }
  .hero-left {
    grid-row: 1;
    grid-column: 1;
    align-items: flex-start;
    text-align: left;
     padding: 3rem 1.0rem 0 1.0rem;
  }
  .hero-right {
    grid-row: 2;
    grid-column: 1;
    width: 100%;
    justify-content: center;
  }
  .hero-right img {
    width: 85% !important;
    max-width: 360px;
    margin: 0 auto;
    display: block;
  }
  .hero-heading {
    font-size: clamp(1.7rem, 6vw, 2.2rem) !important;
    text-align: start !important;
  }
  .hero-sub {
    font-size: 0.9rem;
    max-width: 100%;
  }
  .hero-actions {
    justify-content: flex-start;
  }
  .h-badge {
    font-size: 0.65rem;
  }
}

/* ── OUR BENEFITS (bfr-section): Mobile — tabs one-by-one ── */
@media (max-width: 768px) {
  .bfr-section {
    padding: 3rem 5% 4rem;
  }

  /* Hide scrollable tab bar, show mobile dot-nav instead */
  .bfr-tabs {
    display: none !important;
  }

  /* Mobile tab navigation */
  .bfr-mobile-nav {
    display: flex !important;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    gap: 0.75rem;
  }

  .bfr-mobile-nav-btn {
    width: 38px; height: 38px;
    border-radius: 50%;
    background: var(--navy);
    border: 1.5px solid rgba(237,131,55,0.35);
    color: var(--orange);
    font-size: 1.1rem;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
    transition: background 0.2s;
  }
  .bfr-mobile-nav-btn:hover {
    background: rgba(237,131,55,0.12);
  }
  .bfr-mobile-nav-btn:disabled {
    opacity: 0.3;
    cursor: default;
  }

  .bfr-mobile-tab-label {
    flex: 1;
    text-align: center;
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--orange);
    background: rgba(237,131,55,0.08);
    border: 1px solid rgba(237,131,55,0.22);
    border-radius: 50px;
    padding: 0.5rem 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .bfr-mobile-dots {
    display: flex !important;
    justify-content: center;
    gap: 6px;
    margin-bottom: 1.8rem;
  }
  .bfr-mobile-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: rgba(0,65,104,0.18);
    transition: background 0.22s, transform 0.22s;
    cursor: pointer;
    border: none;
    padding: 0;
  }
  .bfr-mobile-dot.active {
    background: var(--orange);
    transform: scale(1.3);
  }

  /* Panel stacks on mobile */
  .bfr-panel-grid {
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
  }

  .bfr-title {
    font-size: 1.4rem !important;
    text-align: left;
  }
  .bfr-sub {
    font-size: 0.88rem;
    text-align: left;
  }
  .bfr-header {
    margin-bottom: 1.5rem;
  }
}

/* Show mobile nav only on mobile, hide on desktop */
.bfr-mobile-nav,
.bfr-mobile-dots {
  display: none;
}

`;

// ── DATA ──────────────────────────────────────────────────────────

const services = [
  {
    id: "01", icon: <img src="/img/icon/recruitment-service-payroll.webp" alt="Payroll" style={{ width: "28px", height: "28px" }} />, color: "#FF6B2B",
    title: "Payroll Management",
    tagline: "Accurate. Timely. Compliant.",
    desc: "Timely, accurate, and fully compliant — we simplify your payroll so you're never exposed to the complexities of salary processing, tax filings, and benefits admin.",
    bullets: ["Payroll Processing & Accurate Calculations", "Tax Deductions and Form Filing", "Statutory Compliance and Filings"],
  },
  {
    id: "02", icon: <img src="/img/icon/recruitment-service-recruitment.webp" alt="Recruitment" style={{ width: "28px", height: "28px" }} />, color: "#1A56DB",
    title: "Recruitment Services",
    tagline: "Right People. Right Roles. Right Now.",
    desc: "We attract top talent that fits both the role and your culture — whether rapidly growing, filling a single position, or looking for future leaders.",
    bullets: ["Job Analysis & Profiling", "Candidate Sourcing & Screening", "Shortlisting", "Interviewing & Selection Support"],
  },
  {
    id: "03", icon: <img src="/img/icon/recruitment-service-policy.webp" alt="Plan" style={{ width: "20px", height: "20px" }} />, color: "#059669",
    title: "HR Strategy & Policy",
    tagline: "Build Culture. Drive Performance.",
    desc: "We align your HR strategy with your business vision by crafting clear policies and procedures that attract and retain top talent while ensuring workplace compliance.",
    bullets: ["HR Policy Documentation", "Organizational Design & Structuring", "Org Charts & Designation Mapping", "HR Audit & Compliance Checks"],
  },
];

const benefits = [
  {
    num: "01", title: "Customized HR Solutions",
    desc: "Personalized HR strategies and policies that align with your company's specific needs, values, and long-term goals.",
    icon: (
      <img src="/img/icon/recruitment-service-customized.webp" alt="Customized HR Solutions" style={{ width: "28px", height: "28px" }} />
    ),
  },
  {
    num: "02", title: "Talent Acquisition Excellence",
    desc: "Attract and hire top talent that fits your culture and long-term objectives seamlessly.",
    icon: (
      <img src="/img/icon/recruitment-service-talent.webp" alt="Talent Acquisition" style={{ width: "28px", height: "28px" }} />
    ),
  },
  {
    num: "03", title: "Compliance & Risk Management",
    desc: "Full legal compliance across all HR functions, minimizing costly risks.",
    icon: (
      <img src="/img/icon/recruitment-service-risk-management.webp" alt="Compliance" style={{ width: "28px", height: "28px" }} />
    ),
  },
  {
    num: "04", title: "Streamlined Payroll Services",
    desc: "End-to-end payroll with tax compliance, timely payments, and zero errors.",
    icon: (
      <img src="/img/icon/recruitment-service-streamlined-payroll.webp" alt="Payroll Services" style={{ width: "28px", height: "28px" }} />
    ),
  },
  {
    num: "05", title: "Scalable HR Solutions",
    desc: "From a small team to a large enterprise — our HR systems grow with your business at every stage.",
    icon: (
      <img src="/img/icon/recruitment-service-scalable.webp" alt="Scalable HR" style={{ width: "28px", height: "28px" }} />
    ),
  },
  {
    num: "06", title: "Cost-Effective HR Support",
    desc: "Maximize ROI by reducing overhead while receiving exceptional, fully tailored HR support across all functions.",
    icon: (
      <img src="/img/icon/recruitment-service-coast-effective.webp" alt="Cost-Effective" style={{ width: "28px", height: "28px" }} />
    ),
  },
];

const processSteps = {
  leftTop: {
    title: "Deeper Understanding",
    desc: "We begin with a thorough analysis of your business goals, workforce structure, and HR challenges.",
    icon: (
      <img src="/img/icon/recruitment-service-process-understand.webp" alt="Deeper Understanding" style={{ width: "28px", height: "28px" }} />
    ),
  },
  rightTop: {
    title: "Strategy & Planning",
    desc: "We craft tailored HR strategies aligned with your business vision and long-term objectives.",
    icon: (
      <img src="/img/icon/recruitment-service-process-strategy.webp" alt="Strategy & Planning" style={{ width: "28px", height: "28px" }} />
    ),
  },
  rightBottom: {
    title: "Execution & Monitoring",
    desc: "Seamless implementation with continuous monitoring to ensure every initiative stays on track.",
    icon: (
      <img src="/img/icon/recruitment-service-process-execution.webp" alt="Execution & Monitoring" style={{ width: "28px", height: "28px" }} />
    ),
  },
  leftBottom: {
    title: "Feedback & Analytics Reports",
    desc: "Detailed reporting and analytics to help you optimize results and make data-driven decisions.",
    icon: (
      <img src="/img/icon/recruitment-service-process-feedback.webp" alt="Feedback & Analytics" style={{ width: "28px", height: "28px" }} />
    ),
  },
};
const servicesTabs = [
  {
    label: "Discover & Define",
    icon: <img src="/img/icon/recruitment-service-discover.webp" alt="Search" style={{ width: "30px", height: "30px" }} />,
    title: "Discover & Define",
    desc: "Before sourcing a single profile we immerse ourselves in your business. We get to understand your hiring objectives, dynamics of the team, the structure of the organization and what success looks like in the role, both technically and culturally. We go beyond job descriptions to understand the must-haves, nice-to-haves and red flags.",
    features: [],
    tags: ["Understand Hiring Goals", "Analyze Team Culture", "Identify Role Requirements", "Define Success Metrics"],
  },
  {
    label: "Source & Screen",
    icon: <img src="/img/icon/recruitment-service-source.webp" alt="Plan" style={{ width: "30px", height: "30px" }} />,
    title: "Source & Screen",
    desc: "With clear direction, we kick off our sourcing engine: a combination of corporate talent databases; AI-based tools; niche job boards; and passive candidate networks. But we do more than source resumes. For every candidate sourced, we do a structured screening on skills, attitude, and culture - so we only put the best forward.",
    features: [],
    tags: ["Source Qualified Candidates", "Access Talent Networks", "Conduct Candidate Screening", "Shortlist Suitable Professionals"],
  },
  {
    label: "Present & Coordinate",
    icon: <img src="/img/icon/recruitment-service-present.webp" alt="Align" style={{ width: "30px", height: "30px" }} />,
    title: "Present & Coordinate",
    desc: "We do not merely share resumes – we provide complete profiles of candidates, including summary reports, assessment results and indicators for cultural alignment. We handle the entire interview coordination process from scheduling through feedback collation so that your team can focus on making the right choice rather than the admin burden.",
    features: [],
    tags: ["Share Candidate Profiles", "Provide Cultural Insights", "Manage Interview Scheduling", "Organize Recruitment Feedback"],
  },
  {
    label: "Close & Onboard",
    icon: <img src="/img/icon/recruitment-service-close.webp" alt="Check" style={{ width: "30px", height: "30px" }} />,
    title: "Close & Onboard",
    desc: "Hiring isn’t just the offer. We support negotiations, offer letters, and onboarding that keeps candidates warm and engaged. We pre-join actively manage engagement to minimize drop-offs and support the transitional phase with you and the candidate with confidence.",
    features: [],
    tags: ["Support Offer Negotiations", "Ensure Smooth Onboarding", "Reduce Dropout Risks", "Manage Joining Process"],
  },
  {
    label: "Optimize & Support",
    icon: <img src="/img/icon/recruitment-service-support.webp" alt="Implement" style={{ width: "30px", height: "30px" }} />,
    title: "Optimize & Support",
    desc: "At PCS, successful hiring is an ongoing partnership, not just making an offer. We support you long after acceptance, optimizing strategies to evolve with your business. We also monitor hire effectiveness, gather feedback, and offer actionable insights to continuously improve your recruitment processes.",
    features: [],
    tags: ["Monitor Hiring Performance", "Improve Recruitment Strategies", "Support Workforce Planning", "Build Hiring Partnerships"],
  },
  {
    label: "Monitor & Refine",
    icon: <img src="/img/icon/recruitment-service-refine.webp" alt="Refine" style={{ width: "30px", height: "30px" }} />,
    title: "Monitor & Refine",
    desc: "Recruiting is a fluid process, and we continually strive to keep your hiring practices at the cutting edge of what is happening in the marketplace. Through data-enhanced insights and real-time feedback loops, we consistently evaluate your recruiting efforts and identify applicable ways to refine our process to improve recruiting outcomes.",
    features: [],
    tags: ["Evaluate Recruitment Effectiveness", "Track Hiring Trends", "Refine Hiring Processes", "Improve Recruitment Outcomes"],
  },

];

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
        <div className="h-badge"><div className="badge-dot" />Expert Recruitment  Services</div>
        <h1 className="hero-heading">
          Hire Smarter. Grow <span className="hl lined"> Faster</span> With Recruitment Services.

        </h1>
        <ul className="hero-sub">
          <li>A recruitment partner who understands your business and scales with you.</li>
          <li>Seamless, end-to-end Recruitment solution that saves time and cost.</li>
          <li>Qualified candidates who deliver results from Day 1.</li>
          <li>Precision hiring that reduces attrition and improves team performance.</li>
        </ul>
        <div className="hero-actions">
          <a className="btn-fill" href="#approach">Explore More <span className="btn-arrow">›</span></a>
        </div>
      </div>

      <div className="hero-right">
        <img
          src={banner}
          alt="Banner"
          style={{ width: "95%", height: "auto", objectFit: "contain", position: "relative", zIndex: 5, animation: "fadeUp .9s .15s ease both" }}
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
        @media (max-width: 768px) {
          .approach { padding:3rem 5% 3.5rem; }
          .ap-inner { grid-template-columns:1fr !important; gap:2rem !important; }
          .ap-form-wrap { max-width:100% !important; width:100%; }
          .ap-heading { font-size:clamp(1.6rem,6vw,2.2rem) !important; }
          .ap-intro { font-size:0.9rem; margin-bottom:1.2rem; }
          .fl-row { grid-template-columns:1fr !important; gap:0 !important; }
          .ap-form-card { padding:2rem 1.4rem !important; }
          .form-card-title { font-size:1.35rem !important; margin-bottom:1.6rem !important; }
          .fl-input, .fl-textarea { font-size:0.85rem; }
        }
      `}</style>

      <div className="ap-inner">

        {/* LEFT CONTENT */}
        <div className="ap-left">
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Approach in</div>
          </div>
          <h2 className="ap-heading">Human-Centered <span>Hiring</span> That Aligns With Business Goals</h2>
          <p className="ap-intro">
            From a recruitment service provider to a true partner in growth, PCS supports organizations in building strong, high-performing teams. Our experienced recruitment professionals understand evolving workforce demands and industry expectations. We focus on identifying talent that aligns with both functional needs and long-term vision. Every hiring strategy is structured to deliver quality, speed, and cultural fit. Our goal is to transform recruitment into a competitive advantage.


          </p>
          <p className="ap-intro">
            We achieve this through customized and proven recruitment solutions backed by deep market expertise. Our extensive talent networks allow us to access the right candidates across industries and functions. Each Recruitment Consultancy engagement is tailored to your unique business requirements.


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



// ── STEP FLOW DATA — exact image match colors & icons ──────────
const stepFlowData = [
  {
    id: "01",
    // color: "#1A56DB",
    bg: "rgba(26,86,219,0.08)",
    title: "360° Hiring Solutions",
    desc: "Complete recruitment support covering sourcing, screening, interview coordination, onboarding, and post-hiring assistance for businesses across every growth stage.",
    icon: (
      <img src="/img/icon/recruitment-service-hiring.webp" alt="icon" style={{ width: "33px", height: "33px" }} />
    ),
  },
  {
    id: "02",
    // color: "#e03e52",
    bg: "rgba(224,62,82,0.08)",
    title: "Industry-Focused Expertise",
    desc: "Our recruitment strategies are tailored to industry-specific hiring needs, workforce trends, and business expectations for better candidate alignment.",
    icon: (
      <img src="/img/icon/recruitment-service-industry.webp" alt="icon" style={{ width: "33px", height: "33px" }} />
    ),
  },
  {
    id: "03",
    // color: "#d97706",
    bg: "rgba(217,119,6,0.08)",
    title: "Tech-Enabled, Human-Focused",
    desc: "We combine advanced recruitment technology with human expertise to deliver efficient hiring experiences without compromising relationship-driven decision-making.",
    icon: (
      <img src="/img/icon/recruitment-service-human-focused.webp" alt="icon" style={{ width: "33px", height: "33px" }} />
    ),
  },
  {
    id: "04",
    // color: "#0d9488",
    bg: "rgba(13,148,136,0.08)",
    title: "Transparent & Scalable",
    desc: "Our recruitment process ensures clear communication, measurable progress, and scalable hiring solutions that adapt to changing business requirements",
    icon: (
      <img src="/img/icon/recruitment-service-transparent-scalable.webp" alt="icon" style={{ width: "33px", height: "33px" }} />
    ),
  },
];

// ── TAB SERVICE DATA (Image 2 style) ────────────────────────────
const tabServicesData = [
  {
    tab: "Recruitment Consultancy Services",
    title: "Recruitment Consultancy Services",
    desc: "We design effective onboarding programs to integrate new hires smoothly to keep your top talent engaged and committed long-term.",
    points: ["Talent pipeline strategy & JD creation", "Interview frameworks & SOP design", "Hiring audits & ongoing advisory", "Onboarding & retention strategies"],
  },
  {
    tab: "Recruitment Services",
    title: "Recruitment Services",
    desc: "Finding the right talent is one of the most critical challenges for any growing business. PCS provides end-to-end recruitment support — from defining job profiles and sourcing candidates to structured interviews and final onboarding. We connect you with people who fit both the role and your culture.",
    points: ["Job Analysis & Profiling", "Candidate Sourcing & Screening", "Shortlisting & Assessment", "Interview Coordination", "Offer & Onboarding Support"],
  },
  {
    tab: "HR Strategy & Policy",
    title: "HR Strategy & Policy",
    desc: "A strong HR framework is the foundation of a high-performing organisation. We work with leadership to design policies, organisational structures, and HR governance that drive performance, ensure compliance, and create a workplace people want to be part of.",
    points: ["HR Policy Documentation", "Organisational Design", "Designation & Org Chart Mapping", "HR Audit & Compliance", "Performance Management Frameworks"],
  },
  {
    tab: "Training & Development",
    title: "Training & Development",
    desc: "Upskilling your workforce is key to staying competitive. PCS designs and delivers targeted training programmes — from leadership development to role-specific technical skills — that elevate individual performance and strengthen your entire organisation.",
    points: ["Leadership Development", "Skill Gap Analysis", "Custom Training Modules", "Employee Onboarding Programs", "Performance Coaching"],
  },
  {
    tab: "Compliance & Legal",
    title: "Compliance & Legal HR",
    desc: "Navigating HR-related legal requirements is complex and ever-changing. Our compliance specialists ensure your policies, practices, and documentation meet all statutory obligations — protecting your business from risk while building a legally sound workplace.",
    points: ["Labour Law Compliance", "Contract & Offer Letter Drafting", "Grievance Handling Procedures", "Termination & Exit Compliance", "Statutory Registration Support"],
  },
  {
    tab: "HR Outsourcing",
    title: "HR Outsourcing",
    desc: "Let PCS be your dedicated HR department. We offer full or partial HR outsourcing services — giving you access to seasoned HR professionals without the overhead of a full in-house team. Scalable, cost-effective, and built around your business needs.",
    points: ["Dedicated HR Manager", "Employee Lifecycle Management", "MIS Reporting & Analytics", "HR Helpdesk Support", "Vendor & Contract Management"],
  },
];

// ── SERVICES SECTION (HTML tilt card layout) ────────────────────
function ServicesSection() {
  return (
    <section className="svc-section">
      <div className="svc-inner">
        <div className="svc-header">
          <div className="partners-header1">
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Recruitment Services </h2>
          </div>
          <h3 className="hr-h2" style={{ textAlign: 'center', color: '#fff' }}>Your Hiring Partner,  <span style={{ color: '#ed8337' }}><i>From Role Design </i></span>  to Rollout</h3>
          <p className="svc-subtext">
            We bridge the gap between people and performance with recruitment strategies built for growth.
          </p>
        </div>
        <div className="svc-trio-grid">
          <div className="svc-tcard svc-tcard-1">
            <div className="svc-tcard-band">
              <div className="svc-tcard-num">01</div>
              <div className="svc-tcard-icon">
                <img src="/img/icon/recruitment-service-talent-acquisition.webp" alt="service icon" style={{ width: "32px", height: "32px" }} />
              </div>
              <span className="svc-tcard-eyebrow">Consultancy</span>
              <h4 className="svc-tcard-title">Recruitment Consultancy Services</h4>
            </div>
            <div className="svc-tcard-body">
              <div className="svc-tcard-desc">
                We design effective onboarding programs to integrate new hires smoothly to keep your top talent engaged and committed long-term.

              </div>
              <ul className="svc-tcard-points">
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Talent pipeline strategy &amp; effective JD creation</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Interview frameworks &amp; robust SOP design</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Hiring audits &amp; ongoing advisory</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Onboarding &amp; retention strategies</li>
              </ul>
            </div>
            <div className="svc-tcard-footer"></div>
          </div>
          <div className="svc-tcard svc-tcard-2">
            <div className="svc-tcard-band">
              <div className="svc-tcard-num">02</div>
              <div className="svc-tcard-icon">
                <img src="/img/icon/recruitment-service-executive-search.webp" alt="service icon" style={{ width: "32px", height: "32px" }} />
              </div>
              <span className="svc-tcard-eyebrow">End-to-End</span>
              <h4 className="svc-tcard-title">End-to-End Recruitment Services</h4>
            </div>
            <div className="svc-tcard-body">
              <div className="svc-tcard-desc">
                From job profiling and sourcing to interviews and onboarding, we own the entire hiring lifecycle.



              </div>
              <ul className="svc-tcard-points">
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Structured job profiling &amp; role clarity</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Sourcing through smart tools &amp; curated networks</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Assessment frameworks that look beyond resumes</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Interview management &amp; offer rollouts made seamless</li>
              </ul>
            </div>
            <div className="svc-tcard-footer"></div>
          </div>
          <div className="svc-tcard svc-tcard-3">
            <div className="svc-tcard-band">
              <div className="svc-tcard-num">03</div>
              <div className="svc-tcard-icon">
                <img src="/img/icon/recruitment-service-hr-staffing.webp" alt="service icon" style={{ width: "32px", height: "32px" }} />
              </div>
              <span className="svc-tcard-eyebrow">Outsourcing</span>
              <h4 className="svc-tcard-title">Recruitment Process Outsourcing (RPO)</h4>
            </div>
            <div className="svc-tcard-body">
              <div className="svc-tcard-desc">Need help at scale? We plug in as your recruitment engine. We provide expert support for all your hiring needs.</div>
              <ul className="svc-tcard-points">
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Partial or full-scale RPO support</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Bulk hiring, assessment, and onboarding</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Cost-effective, SLA-driven, and fully integrated</li>
                <li><span className="svc-pt-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>Extensive network and deep industry expertise</li>
              </ul>
            </div>
            <div className="svc-tcard-footer"></div>
          </div>
        </div>
      </div>
    </section>
  );
}




// ── SERVICES BUILT FOR RESULTS COMPONENT ────────────────────────
function TabServiceSection() {
  const [activeTab, setActiveTab] = useState(0);
  const total = servicesTabs.length;
  const svc = servicesTabs[activeTab];
  const goPrev = () => setActiveTab(i => Math.max(0, i - 1));
  const goNext = () => setActiveTab(i => Math.min(total - 1, i + 1));

  return (
    <section className="bfr-section">
      <div className="bfr-inner">

        {/* Header */}
        <div className="bfr-header">
          <div className="partners-header1">
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Proven Recruitment Process</h2>
          </div>
          <h3 className="bfr-title">
            Need-Based. <span> <i>Candidate-Centric. </i></span> Speed-Oriented.
          </h3>
          <p className="bfr-sub">
            We combine deep industry insight, smart technology, and consultative expertise to deliver a hiring experience that’s seamless, structured, and strategically aligned with your business growth.
          </p>
        </div>

        {/* Desktop Tabs */}
        <div className="bfr-tabs">
          {servicesTabs.map((t, i) => (
            <button
              key={i}
              className={`bfr-tab${activeTab === i ? " active" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              <span className="bfr-tab-icon">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>

        {/* Mobile Nav — prev/next + label */}
        <div className="bfr-mobile-nav">
          <button className="bfr-mobile-nav-btn" onClick={goPrev} disabled={activeTab === 0}>&#8592;</button>
          <span className="bfr-mobile-tab-label">{svc.label || svc.tab || svc.title}</span>
          <button className="bfr-mobile-nav-btn" onClick={goNext} disabled={activeTab === total - 1}>&#8594;</button>
        </div>

        {/* Mobile Dots */}
        <div className="bfr-mobile-dots">
          {servicesTabs.map((_, i) => (
            <button key={i} className={`bfr-mobile-dot${activeTab === i ? " active" : ""}`} onClick={() => setActiveTab(i)} />
          ))}
        </div>

        {/* Panel */}
        <div className="bfr-panel" key={activeTab}>
          <div className="bfr-panel-grid">

            {/* Left */}
            <div className="bfr-panel-left">
              <h4 className="bfr-panel-title">{svc.title}</h4>
              <p className="bfr-panel-desc">{svc.desc}</p>
              <ul className="bfr-features">
                {svc.features.map((f, i) => (
                  <li key={i}>
                    <span className="bfr-check">
                      <svg viewBox="0 0 12 12">
                        <polyline points="2,6 5,9 10,3" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              {/* <button className="bfr-cta-btn">Learn More →</button> */}
            </div>

            {/* Right stat card */}
            <div className="bfr-panel-right">
              <div className="bfr-right-icon">{svc.rightIcon}</div>
              <div className="bfr-right-stat">
                <div className="bfr-right-stat-num">{svc.stat}</div>
                <div className="bfr-right-stat-label">{svc.statLabel}</div>
              </div>
              <div className="bfr-right-tags">
                {svc.tags.map((tag, i) => (
                  <span key={i} className="bfr-right-tag">{tag}</span>
                ))}
              </div>
              {/* <button className="bfr-right-cta">Get Started →</button> */}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
// ── STEP FLOW COMPONENT ──────────────────────────────────────────
function StepFlowSection() {
  return (
    <section className="sf-section">
      <div className="sf-inner">
        <div className="sf-header">
          <div className="partners-header1" style={{ justifyContent: "center" }}>
            <div className="partners-eyebrow" style={{ marginBottom: "16px", color: "var(--orange)" }}>Why PCS?
            </div>
          </div>
          <h2 className="sf-heading">End-to-End Recruitment, <span><i>Built for Every</i></span> Business Stage</h2>
          <p className="sf-subtext">
            At every stage of a company’s development and at any size, we provide flexible solutions to businesses, whether it is an ad hoc or on-demand hire or bulk recruitment, leadership search or full scale RPO. Our thorough structured process goes through recruitment and covers not just role discovery and smart sourcing but the seamless onboarding process and post-hire support giving you confidence every candidate is the right fit and not just a good CV.

          </p>
        </div>

        <div className="sf-flow">
          {stepFlowData.map((step, i) => {
            const isOdd = i % 2 === 0; // 0,2 → odd visual (1st,3rd)
            return (
              <div key={i} className="sf-card-wrap">
                <div
                  className={`sf-card ${isOdd ? "sf-odd" : "sf-even"}`}
                  style={{ "--sf-color": step.color }}
                >
                  <div className="sf-card-icon">{step.icon}</div>
                  <h3 className="sf-card-title">{step.title}</h3>
                  <div className="sf-card-desc">{step.desc}</div>
                </div>
                {i < stepFlowData.length - 1 && (
                  <div className="sf-arrow">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Tail line — animated draw */}
                      <path
                        className="sf-arrow-tail"
                        d="M8 24H36"
                        stroke="#ed8337"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      {/* Arrowhead chevron — slides in */}
                      <path
                        className="sf-arrow-head"
                        d="M28 16L38 24L28 32"
                        stroke="#ed8337"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



// faq section
const faqData = [
  { q: "What Industries Do You Provide Recruitment Services For?", a: "We cater to many industries including tech, finance, logistics, FMCG, healthcare, and a number of other industries, with vertical-specific recruiters in each." },
  { q: "Do You Just Provide Candidate Profiles Or Do You provide End To End Hiring?", a: "Both. We are a full-service Recruitment Services Company, that does profile share, end-to-end recruitment and full RPO setups." },
  { q: "Can You Assist With Hiring For Our HR And Compliance Teams?", a: "Yes, we offer HR Recruitment Services which focus on sourcing the best possible talent for internal HR, payroll and people ops roles." },
  { q: "Do You Support Hiring For Remote Or Hybrid Teams?", a: "Absolutely. We can help you to find and onboard remote, hybrid and freelance resources in-line with your organization’s model." },
  { q: "How Do Your Recruitment Consultancy Services Work?", a: "We help you improve the way you hire—writing JDs, setting interview SOPs, building talent pools, and being your in-house recruitment strategy partner." },
  { q: "How Is PCS Different From Other Recruitment Agencies?", a: "We provide the depth of a consultancy, the scale of an agency and the ownership of an internal HR partner, and we do it all, smarter and faster." },
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
    <Layout    >
      <Head>
        <title>Recruitment Services Company | Recruitment agency in Coimbatore</title>
        <meta name="description" content=" Leading recruitment agency in Coimbatore offering expert hiring solutions, talent acquisition, and staffing services to help businesses build strong teams. Contact us! " />

        <meta name="keywords" content="Recruitment Services, Recruitment Agency, Recruitment Consultancy Services, Recruitment Services Company, Recruitment Solutions, HR Recruitment Services, HR Consultancy Services" />
        <link rel="canonical" href="https://www.priyamconsultancy.com/recruitment-services/" />
        <meta property="og:title" content=" Leading recruitment agency in Coimbatore offering expert hiring solutions, talent acquisition, and staffing services to help businesses build strong teams. Contact us! " />
        <meta property="og:description" content=" Leading recruitment agency in Coimbatore offering expert hiring solutions, talent acquisition, and staffing services to help businesses build strong teams. Contact us! " />
        <meta property="og:url" content="https://www.priyamconsultancy.com/recruitment-services/" />
        <meta property="og:image" content="https://www.priyamconsultancy.com/img/recriutment-services.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Recruitment Services Company | Recruitment agency in Coimbatore" />
        <meta name="twitter:description" content=" Leading recruitment agency in Coimbatore offering expert hiring solutions, talent acquisition, and staffing services to help businesses build strong teams. Contact us! " />
        <meta name="twitter:image" content="https://www.priyamconsultancy.com/img/recriutment-services.png" />
        {schemaData.map((schema, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}
      </Head>
      <style>{styles}</style>
      <div className="hr-page">
        <HeroSection />
        <ApproachSection />
        <ServicesSection />
        <TabServiceSection />
        <StepFlowSection />
        <FAQSection />
        <CTASection />
      </div>
    </Layout>
  );
}