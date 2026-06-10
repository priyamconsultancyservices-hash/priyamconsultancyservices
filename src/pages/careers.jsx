import { useState } from "react";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

const SITE_URL = "https://www.priyamconsultancy.com/careers/"; // ← உங்கள் domain இங்கே மாற்றவும்

const banner = "/img/career.png";

// Helper: build JobPosting schema per role (used in JobDetail page)
function buildJobPostingSchema(role) {
  const slugMap = {
    "Website Developer": "website-developer",
    "Digital Marketing Analyst": "digital-marketing-analyst",
    "Content Writer": "content-writer",
    "Graphic Designer": "graphic-designer",
    "HR Executive": "hr-executive",
    "Video Editor": "video-editor",
    "Web Developer Intern": "web-developer-intern",
    "Digital Marketing Intern": "digital-marketing-intern",
    "Content Writer Intern": "content-writer-intern",
  };
  const slug = slugMap[role.title] || role.title.toLowerCase().replace(/\s+/g, "-");
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: role.desc,
    identifier: {
      "@type": "PropertyValue",
      name: "Sterlo",
      value: slug,
    },
    datePosted: "2025-01-01",         // ← actual post date pannu
    validThrough: "2025-12-31",       // ← expiry date pannu
    employmentType: role.title.toLowerCase().includes("intern") ? "INTERN" : "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "Sterlo",
      sameAs: SITE_URL,
      logo: `${SITE_URL}/img/logo.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Coimbatore",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
    },
    experienceRequirements: role.experience,
    numberOfPositions: role.openings,
    url: `${SITE_URL}/careers#${slug}`,
    directApply: true,
  };
}

// Helper: build breadcrumb schema for a specific job detail page
function buildJobBreadcrumbSchema(role) {
  const slug = role.title.toLowerCase().replace(/\s+/g, "-");
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Careers", item: `${SITE_URL}/careers` },
      { "@type": "ListItem", position: 3, name: role.title, item: `${SITE_URL}/careers#${slug}` },
    ],
  };
}

/* ═══════════════════════════════════════════════════════
   SEO HEAD COMPONENT — Careers Main Page
═══════════════════════════════════════════════════════ */
function CareersPageSEO() {
  return (
    <Head>
      {/* ── Primary Meta ── */}
      <title>Business Registration and Compliance Services | Company Registration </title>
      <meta name="description" content="Efficient Business Registration and Compliance Services. Get expert support for company registration, legal documentation, and regulatory compliance. Contact us! " />
      <meta name="keywords" content="" />
      <meta name="robots" content="index, follow" />

      {/* ── Canonical ── */}
      <link rel="canonical" href="https://www.priyamconsultancy.com/careers/" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Business Registration and Compliance Services | Company Registration " />
      <meta property="og:description" content="Efficient Business Registration and Compliance Services. Get expert support for company registration, legal documentation, and regulatory compliance. Contact us! "/>
      <meta property="og:url" content="https://www.priyamconsultancy.com/careers/" />
      
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Sterlo" />
      <meta property="og:locale" content="en_IN" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Business Registration and Compliance Services | Company Registration " />
      <meta name="twitter:description" content="Efficient Business Registration and Compliance Services. Get expert support for company registration, legal documentation, and regulatory compliance. Contact us! "/>
      <meta name="twitter:site" content="" />

   
    </Head>
  );
}

/* ═══════════════════════════════════════════════════════
   SEO HEAD COMPONENT — Job Detail Page
   (Product-style schema = JobPosting; Article + Breadcrumb)
═══════════════════════════════════════════════════════ */
function JobDetailSEO({ role }) {
  const jobSchema = buildJobPostingSchema(role);
  const jdBreadcrumb = buildJobBreadcrumbSchema(role);
  const slug = role.title.toLowerCase().replace(/\s+/g, "-");
  const canonicalUrl = `${SITE_URL}/careers#${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${role.title} — Job Opening at Sterlo, Coimbatore`,
    description: role.desc,
    image: `${SITE_URL}/img/career.png`,
    author: {
      "@type": "Organization",
      name: "Sterlo",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Sterlo",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/img/logo.png`,
      },
    },
    datePublished: "2025-01-01",
    dateModified: "2025-01-01",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
  };

  return (
    <Head>
      {/* ── Primary Meta ── */}
      <title>{role.title} Jobs in Coimbatore | Sterlo Careers</title>
      <meta
        name="description"
        content={`Apply for ${role.title} at Sterlo, Coimbatore. ${role.desc.slice(0, 120)}. ${role.openings} openings available.`}
      />
      <meta
        name="keywords"
        content={`${role.title} jobs Coimbatore, ${role.title} careers, Sterlo ${role.title}, ${role.title} hiring Coimbatore`}
      />
      <meta name="robots" content="index, follow" />

      {/* ── Canonical ── */}
      <link rel="canonical" href={canonicalUrl} />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`${role.title} | Sterlo Careers`} />
      <meta property="og:description" content={role.desc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${SITE_URL}/img/career.png`} />
      <meta property="og:site_name" content="Sterlo" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${role.title} | Sterlo Careers`} />
      <meta name="twitter:description" content={role.desc} />
      <meta name="twitter:image" content={`${SITE_URL}/img/career.png`} />

      {/* ── Schema: JobPosting (Product-equivalent for jobs) ── */}
      <script type="application/ld+json">{JSON.stringify(jobSchema)}</script>

      {/* ── Schema: Article ── */}
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>

      {/* ── Schema: Breadcrumb ── */}
      <script type="application/ld+json">{JSON.stringify(jdBreadcrumb)}</script>
    </Head>
  );
}
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

  :root {
    --navy: #004168;
    --navy-deep: #002a44;
    --navy-mid: #0a5282;
    --orange: #ed8337;
    --orange-light: #f5a66b;
    --green: #34d399;
    --blue: #1a73e8;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  /* ═══════════════════════════
     CAREERS WRAP
  ═══════════════════════════ */
  .careers-wrap {
    font-family: 'Poppins', sans-serif;
    background: #f0f4f8;
    color: #0d1f2d;
  }

  /* ═══════════════════════════
     BANNER (same as CaseStudies)
  ═══════════════════════════ */
  .banner {
    position: relative;
    min-height: 340px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 55%, var(--navy-mid) 100%);
    padding: 3rem 5% 4rem;
  }

  /* ── Banner split layout (main page only) ── */
  .banner-split {
    max-width: 1350px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 48px;
    position: relative;
    z-index: 2;
  }
  .banner-split .banner-inner {
    align-items: flex-start;
    text-align: left;
    flex: 1 1 0;
    min-width: 0;
    max-width: 100%;
  }
  .banner-split .banner-subtitle {
    text-align: left;
  }
  .banner-img-wrap {
    flex: 0 0 auto;
    width: 46%;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    animation: fadeUp 0.8s 0.3s ease both;
  }
  .banner-img-wrap img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
    border-radius: 16px;
    filter: drop-shadow(0 12px 48px rgba(0,0,0,0.35));
  }

  @media (max-width: 860px) {
    .banner-split {
      flex-direction: column;
      align-items: center;
      gap: 32px;
    }
    .banner-split .banner-inner {
      align-items: start;
      text-align: start;
      width: 100%;
    }

    .banner-img-wrap {
      width: 80%;
      max-width: 400px;
      justify-content: center;
    }
  }
  @media (max-width: 500px) {
    .banner { padding: 3rem 5% 3rem; }
    .banner-img-wrap {
      width: 100%;
      max-width: 100%;
    }
  }
  .banner::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: linear-gradient(rgba(237,131,55,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(237,131,55,0.06) 1px, transparent 1px);
    background-size: 60px 60px;
    animation: grid-drift 22s linear infinite;
  }
  .banner::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(ellipse 55% 80% at 80% 60%, rgba(237,131,55,0.12) 0%, transparent 65%),
      radial-gradient(ellipse 45% 70% at 5% 20%, rgba(0,42,68,0.6) 0%, transparent 55%);
  }
  @keyframes grid-drift { from{background-position:0 0} to{background-position:60px 60px} }

  .banner-inner {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.1rem;
    max-width: 700px;
  }
  .banner-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    background: rgba(237,131,55,0.12);
    border: 1px solid rgba(237,131,55,0.32);
    color: var(--orange);
    font-size: .7rem;
    font-weight: 700;
    padding: .38rem 1.1rem;
    border-radius: 50px;
    letter-spacing: .12em;
    text-transform: uppercase;
    animation: fadeUp .5s ease both;
  }
  .eyebrow-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--orange);
    animation: pulse-dot 1.6s infinite;
  }
  @keyframes pulse-dot {
    0%,100%{opacity:1;transform:scale(1)}
    50%{opacity:.4;transform:scale(1.5)}
  }
  .banner-title {
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 700;
    line-height: 1.1;
    color: #fff;
    animation: fadeUp .6s .08s ease both;
  }
  .banner-title span { color: var(--orange); }
  .banner-title .underline-word {
    position: relative;
    display: inline-block;
    margin-left: 8px;
  }
  .banner-title .underline-word::after {
    content: '';
    position: absolute;
    left: 0; bottom: -4px;
    width: 100%; height: 3px;
    background: linear-gradient(90deg, #ed8337, #f5a66b);
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: left;
    animation: line-in 0.55s 1s ease forwards;
  }
  @keyframes line-in { to { transform: scaleX(1); } }
  .banner-subtitle {
    font-size: .97rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.92);
    max-width: 560px;
    animation: fadeUp .65s .16s ease both;
  }
  @keyframes fadeUp {
    from{opacity:0;transform:translateY(24px)}
    to{opacity:1;transform:translateY(0)}
  }

  /* ═══════════════════════════
     HIRING PROCESS SECTION
  ═══════════════════════════ */
  .hiring-section {
    background: #ffffff;
    padding: 5rem 6% 4rem;
    position: relative;
    overflow: hidden;
  }
  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }
  .section-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: .45rem;
    color: var(--blue);
    font-size: .72rem;
    font-weight: 700;
    letter-spacing: .13em;
    text-transform: uppercase;
    margin-bottom: .85rem;
  }
  .section-eyebrow-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--blue);
  }
  .section-title {
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    font-weight: 800;
    color: #0d1f2d;
    letter-spacing: -.02em;
    margin-bottom: .9rem;
  }
  .section-subtitle {
    font-size: .95rem;
    color: #5a6a7a;
    line-height: 1.8;
    // max-width: 620px;
    margin: 0 auto;
    border: none;
    display: block;
  }
  .section-subtitle::before,
  .section-subtitle::after {
    display: none !important;
    content: none !important;
  }

  /* ── DESIGN C: STEP CARDS ── */
  .step-cards-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.2rem;
    max-width: 1350px;
    margin: 0 auto;
    align-items: stretch;
  }

  .step-card {
    background: #ffffff;
    border: 1px solid rgba(0,65,104,0.1);
    // border-left: 4px solid var(--orange);
    border-radius: 12px;
    padding: 1.4rem 1.3rem 1.3rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    transition: transform .25s, box-shadow .25s;
    cursor: default;
  }
  .step-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 32px rgba(237,131,55,0.13);
  }

  .step-card-num {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1;
    color: rgba(237,131,55,0.13);
    position: absolute;
    top: 0.7rem;
    right: 1rem;
    pointer-events: none;
    font-family: 'Poppins', sans-serif;
  }

  .step-card-icon {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    background: rgba(237,131,55,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .step-card-icon img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  .step-card-label {
    font-size: 0.68rem;
    font-weight: 700;
    color: var(--orange);
    letter-spacing: .09em;
    text-transform: uppercase;
  }

  .step-card-title {
    font-size: 0.95rem;
    font-weight: 600;
    color: #0d1f2d;
    line-height: 1.35;
  }

  .step-card-desc {
    font-size: 0.82rem;
    color: #5a6a7a;
    line-height: 1.75;
    flex: 1;
  }

  @media (max-width: 1024px) {
    .step-cards-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 560px) {
    .step-cards-grid { grid-template-columns: 1fr; }
  }

  /* ═══════════════════════════
     OPEN ROLES SECTION
  ═══════════════════════════ */
  .roles-section {
    background: #f0f4f8;
    padding: 5rem 6%;
  }
  .roles-section .section-title {
    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
    max-width: 820px;
    margin: 0 auto .9rem;
    text-align: center;
  }
  .roles-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.4rem;
    max-width: 1180px;
    margin: 0 auto;
  }

  .role-card {
    background: #ffffff;
    border: 1.5px solid rgba(0,65,104,0.1);
    border-radius: 16px;
    padding: 1.6rem 1.8rem 1.4rem;
    display: flex;
    flex-direction: column;
    gap: .75rem;
    transition: transform .28s, box-shadow .28s;
    box-shadow: 0 2px 14px rgba(0,0,0,0.05);
    cursor: pointer;
  }
  .role-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 36px rgba(0,0,0,0.1);
    border-color: rgba(26,115,232,0.25);
  }
  .role-title {
    font-size: 1rem;
    font-weight: 700;
    color: #ed8337;
    line-height: 1.35;
  }
  .role-desc {
    font-size: .845rem;
    color: #4b5a6a;
    line-height: 1.7;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .role-apply {
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    color: #ed8337;
    font-size: .82rem;
    font-weight: 600;
    text-decoration: none;
    margin-top: .2rem;
    transition: gap .2s;
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }
  .role-apply:hover { gap: .7rem; }
  .role-apply .apply-icon {
    width: 20px; height: 20px;
    border-radius: 50%;
    border: 1.5px solid #ed8337;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: .75rem;
    transition: background .2s, color .2s;
  }
  .role-card:hover .apply-icon {
    background: #ed8337;
    color: #fff;
  }

  @media (max-width: 1024px) {
    .roles-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .roles-grid  { grid-template-columns: 1fr; }
    .banner { padding: 4rem 5% 3rem; }
    .hiring-section, .roles-section { padding: 3.5rem 5%; }
  }

  /* ═══════════════════════════
     JOB DETAIL PAGE
  ═══════════════════════════ */
  .jd-body {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 2.5rem;
    max-width: 1300px;
    margin: 0 auto;
    padding: 3rem 2rem;
    align-items: start;
  }

  /* back button */
  .jd-back {
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    background: none;
    border: none;
    color: var(--blue);
    font-size: .82rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    padding: 0;
    margin-bottom: 2rem;
    transition: gap .2s;
  }
  .jd-back:hover { gap: .7rem; }

  /* meta pills row */
  .jd-meta-row {
    // display: flex;
    flex-wrap: wrap;
    padding: 24px;
    gap: 0;
    background: #fff;
    border: 1.5px solid rgba(0,65,104,0.1);
    border-radius: 14px;
    overflow: hidden;
    margin-bottom: 2.2rem;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  }
  .jd-meta-item {
    flex: 1;
    min-width: 160px;
    padding: 1.2rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: .3rem;
  }
  .jd-meta-label {
    font-size: .67rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .1em;
    color: #8a9aaa;
  }
  .jd-meta-value {
    font-size: .88rem;
    font-weight: 600;
    color: #0d1f2d;
    line-height: 1.4;
  }
  .jd-meta-divider {
    width: 1px;
    background: rgba(0,65,104,0.08);
    align-self: stretch;
  }

  /* sections */
  .jd-section { margin-bottom: 2rem; }
  .jd-section-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: #0d1f2d;
    margin-bottom: 1rem;
    padding-bottom: .6rem;
    border-bottom: 2px solid rgba(26,115,232,0.15);
  }
  .jd-bullets {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: .7rem;
  }
  .jd-bullets li {
    font-size: .875rem;
    color: #3a4a5a;
    line-height: 1.75;
    padding-left: 1.4rem;
    position: relative;
  }
  .jd-bullets li::before {
    content: '';
    position: absolute;
    left: 0; top: 10px;
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--blue);
  }

  .jd-content {
    min-width: 0;
  }

  /* ── STICKY SIDEBAR CARD ── */
  .jd-sidebar {
    position: sticky;
    top: 24px;
    align-self: start;
    height: fit-content;
  }
  .jd-sticky-card {
    background: #fff;
    border: 1.5px solid rgba(26,115,232,0.15);
    border-radius: 18px;
    padding: 1.8rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 0 8px 32px rgba(26,115,232,0.1);
    margin-top: 60px;
  }
  .jd-sticky-role {
    font-size: 1.05rem;
    font-weight: 800;
    color: #0d1f2d;
    line-height: 1.3;
  }
  .jd-sticky-loc {
    display: flex;
    align-items: center;
    gap: .4rem;
    font-size: .8rem;
    color: #6a7a8a;
    font-weight: 500;
  }
  .jd-sticky-divider {
    height: 1px;
    background: rgba(0,65,104,0.08);
  }
  .jd-sticky-info {
    display: flex;
    flex-direction: column;
    gap: .55rem;
  }
  .jd-info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .82rem;
    color: #6a7a8a;
  }
  .jd-info-row strong {
    color: #0d1f2d;
    font-weight: 700;
  }
  .jd-apply-btn {
    width: 100%;
    padding: .9rem;
    background: var(--blue);
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: .92rem;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: background .22s, transform .18s, box-shadow .22s;
    box-shadow: 0 4px 18px rgba(26,115,232,0.35);
    letter-spacing: .02em;
  }
  .jd-apply-btn:hover {
    background: #1558c0;
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(26,115,232,0.45);
  }
  .jd-apply-note {
    font-size: .72rem;
    color: #9aabbA;
    text-align: center;
    line-height: 1.5;
  }

  @media (max-width: 860px) {
    .jd-body {
      display: flex;
      flex-direction: column;
      padding: 2.5rem 1.2rem;
      gap: 1.8rem;
    }
    .jd-content { order: 1; }
    .jd-sidebar {
      position: static;
      order: 2;
      width: 100%;
    }
    h2.hww-title { font-size: 2.1rem; }
  }

  /* ═══════════════════════════
     APPLICATION MODAL
  ═══════════════════════════ */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,20,40,0.55);
    backdrop-filter: blur(4px);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    animation: fadeIn .2s ease;
  }
  @keyframes fadeIn { from{opacity:0} to{opacity:1} }

  .modal-box {
    background: #fff;
    border-radius: 22px;
    width: 100%;
    max-width: 580px;
    max-height: 92vh;
    overflow-y: auto;
    box-shadow: 0 24px 80px rgba(0,0,0,0.22);
    animation: slideUp .28s ease;
    position: relative;
  }
  @keyframes slideUp {
    from{opacity:0;transform:translateY(30px)}
    to{opacity:1;transform:translateY(0)}
  }

  .modal-header {
    background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 60%, var(--navy-mid) 100%);
    padding: 1.8rem 2rem 1.5rem;
    border-radius: 22px 22px 0 0;
    position: relative;
  }
  .modal-header::before {
    content:'';position:absolute;inset:0;border-radius:22px 22px 0 0;
    background-image:linear-gradient(rgba(237,131,55,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(237,131,55,0.07) 1px,transparent 1px);
    background-size:40px 40px;pointer-events:none;
  }
  .modal-eyebrow { font-size:.65rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--orange);margin-bottom:.45rem;position:relative;z-index:1; }
  .modal-title { font-size:1.2rem;font-weight:800;color:#fff;line-height:1.3;position:relative;z-index:1; }
  .modal-subtitle { font-size:.78rem;color:rgba(255,255,255,0.55);margin-top:.35rem;position:relative;z-index:1; }
  .modal-close {
    position:absolute;top:1.1rem;right:1.1rem;width:32px;height:32px;border-radius:50%;
    background:rgba(255,255,255,0.12);border:none;color:#fff;font-size:1.1rem;cursor:pointer;
    display:flex;align-items:center;justify-content:center;transition:background .2s;z-index:2;font-family:'Poppins',sans-serif;
  }
  .modal-close:hover{background:rgba(255,255,255,0.22);}

  .modal-body { padding:1.8rem 2rem 2rem;display:flex;flex-direction:column;gap:1.1rem; }
  .form-row { display:grid;grid-template-columns:1fr 1fr;gap:1rem; }
  .form-group { display:flex;flex-direction:column;gap:.4rem; }
  .form-group.full { grid-column:1/-1; }
  .form-label { font-size:.72rem;font-weight:700;color:#3a4a5a;letter-spacing:.04em;text-transform:uppercase; }
  .form-label span { color:#e53e3e;margin-left:2px; }
  .form-input,.form-select,.form-textarea {
    width:100%;padding:.72rem 1rem;border:1.5px solid #dde3ea;border-radius:10px;
    font-size:.875rem;color:#0d1f2d;font-family:'Poppins',sans-serif;background:#f8fafc;
    transition:border-color .2s,box-shadow .2s;outline:none;
  }
  .form-input:focus,.form-select:focus,.form-textarea:focus {
    border-color:var(--blue);box-shadow:0 0 0 3px rgba(26,115,232,0.1);background:#fff;
  }
  .form-textarea { resize:vertical;min-height:90px; }
  .form-select { appearance:none;cursor:pointer; }

  .file-upload-area {
    border:2px dashed #c8d5e4;border-radius:12px;padding:1.4rem;text-align:center;
    cursor:pointer;transition:border-color .2s,background .2s;background:#f8fafc;position:relative;
  }
  .file-upload-area:hover { border-color:var(--blue);background:rgba(26,115,232,0.04); }
  .file-upload-area input[type="file"] { position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%; }
  .file-upload-icon { font-size:1.8rem;margin-bottom:.4rem; }
  .file-upload-text { font-size:.8rem;color:#6a7a8a;line-height:1.6; }
  .file-upload-text strong { color:var(--blue); }
  .file-name { margin-top:.5rem;font-size:.75rem;color:var(--blue);font-weight:600;background:rgba(26,115,232,0.08);border-radius:6px;padding:.3rem .7rem;display:inline-block; }

  .modal-submit {
    width:100%;padding:.95rem;background:var(--blue);color:#fff;border:none;border-radius:12px;
    font-size:.95rem;font-weight:700;font-family:'Poppins',sans-serif;cursor:pointer;
    transition:background .22s,transform .18s,box-shadow .22s;box-shadow:0 4px 18px rgba(26,115,232,0.35);margin-top:.4rem;
  }
  .modal-submit:hover { background:#1558c0;transform:translateY(-2px);box-shadow:0 8px 28px rgba(26,115,232,0.45); }
  .modal-submit:disabled { background:#a0b4cc;cursor:not-allowed;transform:none;box-shadow:none; }

  .modal-success { padding:3rem 2rem;text-align:center;display:flex;flex-direction:column;align-items:center;gap:1rem; }
  .success-icon {
    width:70px;height:70px;border-radius:50%;background:linear-gradient(135deg,#34d399,#059669);
    display:flex;align-items:center;justify-content:center;font-size:2rem;
    box-shadow:0 8px 24px rgba(52,211,153,0.35);animation:pop .4s cubic-bezier(.34,1.56,.64,1);
  }
  @keyframes pop { from{transform:scale(0)} to{transform:scale(1)} }
  .success-title { font-size:1.3rem;font-weight:800;color:#0d1f2d; }
  .success-sub { font-size:.85rem;color:#6a7a8a;line-height:1.7;max-width:360px; }
  .success-close {
    margin-top:.5rem;padding:.7rem 2rem;background:var(--blue);color:#fff;border:none;
    border-radius:10px;font-size:.875rem;font-weight:700;font-family:'Poppins',sans-serif;cursor:pointer;transition:background .2s;
  }
  .success-close:hover { background:#1558c0; }

  @media (max-width: 520px) {
    .form-row { grid-template-columns: 1fr; }
    .modal-body { padding: 1.4rem 1.2rem 1.6rem; }
    .modal-header { padding: 1.4rem 1.2rem 1.2rem; }
  }

  /* ── SKILLS TAGS ── */
  .skills-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: .55rem;
    margin-top: .4rem;
  }
  .skill-tag {
    display: inline-flex;
    align-items: center;
    gap: .35rem;
    background: rgba(26,115,232,0.08);
    border: 1px solid rgba(26,115,232,0.2);
    color: #1a73e8;
    font-size: .75rem;
    font-weight: 600;
    padding: .32rem .85rem;
    border-radius: 50px;
    letter-spacing: .01em;
    transition: background .2s, border-color .2s;
  }
  .skill-tag:hover {
    background: rgba(26,115,232,0.15);
    border-color: rgba(26,115,232,0.4);
  }
`;


const hiringSteps = [
  {
    grad: "bg-g1",
    title: "Profile Screening",
    desc: "After receiving your application, our recruitment team reviews your qualifications, experience, and relevant skills to shortlist candidates who best fit the role requirements.",
    icon: "/img/icon/hiring-step1.webp",
  },
  {
    grad: "bg-g2",
    title: "Initial Interaction",
    desc: "A preliminary discussion is arranged to learn about your professional background, key strengths, career aspirations, and overall suitability for the opportunity.",
    icon: "/img/icon/hiring-step2.webp",
  },
  {
    grad: "bg-g3",
    title: "Technical / Functional Assessment",
    desc: "Candidates will attend a virtual discussion with the respective hiring panel, along with an assessment process designed to evaluate technical knowledge and functional expertise.",
    icon: "/img/icon/hiring-step3.webp",
  },
  {
    grad: "bg-g4",
    title: "Final Face-to-Face Discussion & Offer",
    desc: "Shortlisted candidates will participate in a final in-person meeting covering role expectations, work culture, compensation details, and joining timeline, followed by the official offer process.",
    icon: "/img/icon/hiring-step4.webp",
  },
];

const openRoles = [
  {
    title: "Website Developer",
    location: "Coimbatore",
    openings: 2,
    experience: "Bachelor's degree in Computer Science or related field with 2+ years of website development experience.",
    desc: "Design, develop, and maintain high-performance websites and web applications that deliver exceptional user experiences across desktop and mobile platforms.",
    bullets: [
      "Design, develop, and maintain high-performance websites",
      "Optimize websites for speed, usability, and conversions",
      "Collaborate with marketing and design teams for execution",
      "Implement updates, enhancements, and new features",
      "Troubleshoot technical issues and ensure smooth performance",
      "Maintain documentation and version control",
      "Stay updated with latest web technologies and best practices",
    
      "--- Skills Required ---",
      "Strong knowledge of HTML, CSS, JavaScript, Shopify, WordPress Platform.",
      "Experience in responsive and performance-focused web development",
      "Understanding of SEO, page speed, and UX best practices",
      "Ability to debug and optimize websites efficiently",
      "Experience working with APIs and third-party integrations",
      "Effective utilization of AI tools for development, testing, and optimization",
      "Strong problem-solving and analytical thinking",
      "Ability to work independently and in collaborative teams",
    ],
  },
  {
    title: "Digital Marketing Analyst",
    location: "Coimbatore",
    openings: 2,
    experience: "Bachelor’s degree or equivalent qualification with 2+ years of experience in digital marketing analytics.",
    desc: "Plan, execute, and optimise digital marketing campaigns across SEO, SEM, social media, and email channels to drive brand awareness, lead generation, and business growth.",
    bullets: [
      "Track and analyze digital marketing performance across organic and paid channels",
      "Manage technical SEO, on-page SEO, off-page SEO, and local SEO initiatives",
      "Implement and optimize AEO, GEO, Google PMAX, and Meta Andromeda strategies",
      "Prepare detailed performance reports, dashboards, and insights",
      "Identify trends, gaps, and optimization opportunities across campaigns",
      "Support campaign optimization using data-backed decisions",
      "Monitor lead quality, conversion performance, and overall ROI",
      "Maintain structured documentation and tracking frameworks",
      "Stay updated with evolving analytics tools, AI-driven platforms, and marketing trends",
    
      "--- Skills Required ---",
      "Strong understanding of SEO, AEO, GEO, paid ads, and social media performance metrics",
      "Hands-on experience with Google Analytics, Search Console, and advertising platforms",
      "Expertise in branding, organic lead generation, and paid campaign execution",
      "Ability to analyze data and convert insights into actionable growth decisions",
      "Knowledge of performance funnels, lead quality metrics, and conversion tracking",
      "Strong experience in reporting, dashboards, and performance monitoring",
      "Effective utilization of AI tools for analytics, forecasting, and optimization",
      "High attention to data accuracy, detail, and insight communication",
    ],
  },
  {
    title: "Content Writer",
    location: "Coimbatore",
    openings: 2,
    experience: "Bachelor’s degree or equivalent qualification with 2+ years of content writing experience.1–3 Years in Content Writing or Copywriting. Any Graduate in English, Journalism, or related field.",
    desc: "Create compelling, SEO-optimised content across blogs, website pages, social media, and marketing collaterals that communicates our brand voice and drives audience engagement.",
    bullets: [
      "Create high-quality content for blogs, websites, ads, and social media platforms",
      "Plan, research, and execute content aligned with brand positioning and business goals",
      "Align content strategy with SEO, AEO, and lead generation objectives",
      "Collaborate closely with marketing teams on campaign-based content execution",
      "Edit, refine, and optimize content for clarity, engagement, and performance",
      "Conduct in-depth research to support authority-driven and insight-led content",
      "Maintain structured content calendars, documentation, and publishing schedules",
      "Stay updated with evolving content trends, search behavior, and AI-led discovery",
    
      "--- Skills Required ---",
      "Strong writing, editing, and storytelling abilities",
      "Understanding of SEO, AEO, and content structure",
      "Ability to research and simplify complex topics",
      "Knowledge of brand tone and messaging consistency",
      "Experience writing blogs, website content, and social media copies",
      "Effective utilization of AI tools for research and optimization",
      "Attention to detail and content quality",
      "Ability to meet deadlines consistently",
    ],
  },
   {
    title: "Graphic Designer",
    location: "Coimbatore",
    openings: 2,
    experience: "Bachelor’s degree or equivalent qualification with 2+ years of graphic design experience.",
    desc: "Create compelling, SEO-optimised content across blogs, website pages, social media, and marketing collaterals that communicates our brand voice and drives audience engagement.",
    bullets: [
      "Design creatives for digital marketing and branding",
      "Maintain visual consistency across platforms",
      "Collaborate with marketing and content teams",
      "Create ad creatives, banners, and social visuals",
      "Revise designs based on feedback",
      "Maintain organized design assets",
      "Stay updated with design trends and tools",
    
      "--- Skills Required ---",
      "Strong understanding of design principles and branding",
      "Experience with Adobe , Coreldraw , Canva.",
      "Ability to design creatives for social media, ads, and websites",
      "Visual storytelling and layout skills",
      "Attention to brand consistency and detail",
      "Effective utilization of AI design tools for ideation and speed",
      "Time management and creative problem-solving",
      "Ability to work collaboratively with teams",
    ],
  },
  {
    title: "HR Executive",
    location: "Coimbatore",
    openings: 2,
    experience: "Bachelor’s degree in Human Resources, Business Administration, or related field with 1+ years of HR or recruitment experience.",
    desc: "Support end-to-end recruitment, employee engagement, and HR operations to build a strong, motivated workforce aligned with organisational goals.",
    bullets: [
      "Manage end-to-end recruitment and candidate coordination",
      "Handle onboarding and employee documentation processes",
      "Support employee engagement and internal communication activities",
      "Coordinate interviews and maintain hiring records",
      "Assist in implementing HR policies and procedures",
      "Maintain employee databases and attendance records",
      "Support management in day-to-day HR operations",
      "Stay updated with HR practices and recruitment trends",
    
      "--- Skills Required ---",
      "Strong understanding of recruitment, onboarding, and employee coordination",
      "Good communication and interpersonal skills",
      "Knowledge of HR processes, policies, and documentation",
      "Ability to manage employee records and recruitment databases",
      "Familiarity with MS Office and HR management tools",
      "Strong organizational and multitasking abilities",
      "Problem-solving mindset with attention to detail",
      "Ability to work independently and within teams",
    ],
  },
  {
    title: "Video Editor",
    location: "Coimbatore",
    openings: 2,
    experience: "Bachelor’s degree or equivalent practical experience with 1+ years of professional video editing experience.",
    desc: "Edit raw footage into engaging, high-quality videos aligned with brand goals by incorporating music, sound design, colour grading, and motion graphics.",
    bullets: [
      "Edit engaging videos for marketing, branding, and social media platforms",
      "Create high-quality visual content aligned with brand guidelines",
      "Collaborate with creative and marketing teams for campaign execution",
      "Add motion graphics, effects, subtitles, and audio enhancements",
      "Optimize videos for different digital platforms and formats",
      "Manage revisions and deliver projects within deadlines",
      "Organize project files and maintain editing workflows",
      "Stay updated with current editing trends and creative techniques",
    
      "--- Skills Required ---",
      "Strong proficiency in Adobe Premiere Pro, After Effects, and video editing tool",
      "Understanding of motion graphics, transitions, and storytelling techniques",
      "Ability to edit content for social media, branding, and marketing campaigns",
      "Knowledge of video formats, color correction, and audio balancing",
      "Creativity with strong visual communication skills",
      "Creativity with strong visual communication skills",
      "Effective utilization of AI tools for editing and content enhancement",
      "Attention to detail and time management skills",
    ],
  },
  {
    title: "Web Developer Intern",
    location: "Coimbatore",
    openings: 2,
    experience: "Student / Fresher pursuing or completed a relevant degree.",
    desc: "Assist the development team in building and maintaining web applications while gaining hands-on experience in modern web technologies and real-world projects.",
    bullets: [
      "Assist in website development tasks",
      "Support senior developers on live projects",
      "Learn performance and SEO best practices",
      "Debug and test website features",
      "Maintain basic documentation",
      "Apply learnings through hands-on execution",
      "Continuously improve technical skills",
    
      "--- Skills Required ---",
      "Basic knowledge of web development fundamentals",
      "Willingness to learn modern development practices",
      "Interest in website performance and optimization",
      "Basic understanding of HTML, CSS, or JavaScript",
      "Problem-solving mindset",
      "Effective utilization of AI tools for learning and development",
      "Good communication skills",
      "Ability to follow guidance and instructions",
    ],
  },
  {
    title: "Digital Marketing Intern",
    location: "Coimbatore",
    openings: 2,
    experience: "Student / Fresher with interest in digital marketing.",
    desc: "Support the digital marketing team in executing campaigns, creating content, and analysing performance to build practical skills in a fast-paced marketing environment.",
    bullets: [
      "Assist in SEO, AEO , GEO , ads, and social media tasks",
      "Support campaign execution and reporting",
      "Conduct market and keyword research",
      "Learn analytics and performance tracking",
      "Support content and lead generation activities",
      "Maintain task documentation",
      "Gain hands-on exposure to real campaigns",
    
      "--- Skills Required ---",
      "Basic understanding of digital marketing concepts",
      "Interest in SEO, AEO , GEO , ads, and social media",
      "Willingness to learn analytics and tools",
      "Research and data interpretation skills",
      "Good communication skills",
      "Effective utilization of AI tools for research and reporting",
      "Curiosity and learning mindset",
      "Ability to work in a team",
    ],
  },
  {
    title: "Content Writer Intern",
    location: "Coimbatore",
    openings: 2,
    experience: " Student / Fresher with interest in writing and content creation.",
    desc: "Assist the content team in creating well-researched, engaging written content for digital platforms while developing core writing, editing, and SEO skills.",
    bullets: [
      "Assist in writing blogs and social media content",
      "Conduct research for content topics",
      "Edit and refine content drafts",
      "Learn SEO and content frameworks",
      "Support senior writers",
      "Maintain content schedules",
      "Improve writing through practice and feedback",
    
      "--- Skills Required ---",
      "Basic writing and grammar skills",
      "Interest in digital content and marketing",
      "Research and learning ability",
      "Creativity and storytelling mindset",
      "Attention to detail",
      "Effective utilization of AI tools for content drafting",
      "Time management skills",
      "Openness to feedback",
    ],
  },
  {
    title: "Graphic Designer Intern",
    location: "Coimbatore",
    openings: 2,
    experience: "Student / Fresher with basic design knowledge.",
    desc: "Support the design team in creating visually compelling graphics for digital and print channels while building proficiency in industry-standard design tools.",
    bullets: [
      "Assist in creating marketing creatives",
      "Support senior designers on projects",
      "Learn brand guidelines and workflows",
      "Design social media and basic visuals",
      "Revise designs based on feedback",
      "Maintain organized design assets",
      "Improve skills through hands-on practice",
    
      "--- Skills Required ---",
      "Basic understanding of design principles",
      "Familiarity with design tools",
      "Creativity and visual sense",
      "Willingness to learn branding systems",
      "Attention to detail",
      "Effective utilization of AI design tools for ideation",
      "Time management skills",
      "Ability to accept feedback",
    ],
  },
  {
    title: "HR Executive Intern",
    location: "Coimbatore",
    openings: 2,
    experience: "Pursuing or recently completed a degree in Human Resources, Business Administration, or related field.",
    desc: "Assist the HR team with recruitment coordination, employee engagement activities, and HR operations to gain practical exposure in core human resources functions.",
    bullets: [
      "Assist the HR team in recruitment and onboarding activities",
      "Schedule interviews and coordinate with candidates",
      "Maintain employee and recruitment records",
      "Support internal HR operations and documentation",
      "Help with employee engagement initiatives",
      "Assist in preparing reports and HR-related data",
      "Coordinate communication between teams and candidates",
      "Learn and support daily HR administrative tasks",
    
      "--- Skills Required ---",
      "Good verbal and written communication skills",
      "Basic understanding of recruitment and HR operations",
      "Familiarity with MS Office and online recruitment platforms",
      "Strong coordination and organizational abilities",
      "Willingness to learn and adapt in a fast-paced environment",
      "Attention to detail and professional attitude",
      "Ability to manage tasks efficiently",
      "Team collaboration and interpersonal skills",
    ],
  },
  {
    title: "Video Editor Intern",
    location: "Coimbatore",
    openings: 2,
    experience: "Pursuing or recently completed a degree in Visual Communication, Media, Multimedia, or related field.",
    desc: "Assist the creative team in editing video content for digital platforms while developing hands-on skills in post-production, colour grading, and motion graphics.",
    bullets: [
      "Assist in editing videos for social media and marketing campaigns",
      "Support the creative team with video production requirements",
      "Add basic transitions, subtitles, and audio adjustments",
      "Organize raw footage and project files efficiently",
      "Participate in brainstorming and creative discussions",
      "Assist with content formatting for different platforms",
      "Learn editing workflows and content optimization techniques",
      "Support the team in day-to-day video editing activities",
    
      "--- Skills Required ---",
      "Basic knowledge of Adobe Premiere Pro, After Effects, or similar editing software",
      "Understanding of video editing principles and storytelling",
      "Interest in social media and digital content creation",
      "Creativity and willingness to learn new editing techniques",
      "Basic knowledge of audio editing and transitions",
      "Ability to manage tasks and meet deadlines",
      "Attention to detail and visual consistency",
      "Team collaboration and communication skills",
    ],
  },
];

/* ── APPLICATION MODAL ── */
function ApplyModal({ role, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', experience: '', linkedin: '', cover: '' });
  const [resume, setResume] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) setResume(file);
  };

 const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone) return;
    setLoading(true);

    try {
      // ── Send form data + resume directly to Formspree ──
      const formData = new FormData();
      formData.append("_subject", `New Job Application — ${role.title}`);
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("role_title", role.title);
      formData.append("location", role.location);
      formData.append("years_of_experience", form.experience || "Not specified");
      formData.append("linkedin_profile", form.linkedin || "Not provided");
      formData.append("cover_note", form.cover || "Not provided");
      if (resume) {
        formData.append("resume", resume);
      }

      const res = await fetch("https://formspree.io/f/xbdqnqre", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        const errMsg = data?.errors?.map(e => e.message).join(", ") || "Something went wrong.";
        alert(`Error: ${errMsg}`);
      }
    } catch (err) {
      alert(err.message || "Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        {submitted ? (
          <div className="modal-success">
            <div className="success-icon">✓</div>
            <div className="success-title">Application Submitted!</div>
            <p className="success-sub">
              Thank you for applying for <strong>{role.title}</strong>. Our team will review your profile and get back to you within 3–5 business days.
            </p>
            <button className="success-close" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="modal-header">
              <button className="modal-close" onClick={onClose}>✕</button>
              <div className="modal-eyebrow">Apply Now</div>
              <div className="modal-title">{role.title}</div>
              <div className="modal-subtitle">📍 {role.location} &nbsp;·&nbsp; Full-time &nbsp;·&nbsp; {role.openings} Opening{role.openings > 1 ? 's' : ''}</div>
            </div>

            {/* Form Body */}
            <div className="modal-body">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name <span>*</span></label>
                  <input className="form-input" placeholder="John Doe" value={form.name} onChange={set('name')} />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number <span>*</span></label>
                  <input className="form-input" placeholder="+91 98765 43210" value={form.phone} onChange={set('phone')} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address <span>*</span></label>
                <input className="form-input" type="email" placeholder="you@email.com" value={form.email} onChange={set('email')} />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Years of Experience</label>
                  <select className="form-select" value={form.experience} onChange={set('experience')}>
                    <option value="">Select...</option>
                    <option>Fresher (0–1 yr)</option>
                    <option>1–3 Years</option>
                    <option>3–5 Years</option>
                    <option>5–8 Years</option>
                    <option>8+ Years</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">LinkedIn Profile</label>
                  <input className="form-input" placeholder="linkedin.com/in/yourname" value={form.linkedin} onChange={set('linkedin')} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Upload Resume <span>*</span></label>
                <div className="file-upload-area">
                  <input type="file" accept=".pdf,.doc,.docx" onChange={handleFile} />
                  <div className="file-upload-icon">📄</div>
                  <div className="file-upload-text">
                    <strong>Click to upload</strong> or drag & drop<br />PDF, DOC, DOCX (max 5MB)
                  </div>
                  {resume && <div className="file-name">✓ {resume.name}</div>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Cover Note</label>
                <textarea className="form-textarea" placeholder="Tell us why you're a great fit for this role..." value={form.cover} onChange={set('cover')} />
              </div>

              <button
                className="modal-submit"
                onClick={handleSubmit}
                disabled={loading || !form.name || !form.email || !form.phone}
              >
                {loading ? (resume ? '📤 Uploading Resume...' : 'Submitting...') : 'Submit Application →'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ── JOB DETAIL PAGE ── */
function JobDetail({ role, onBack }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="careers-wrap">
      <style>{styles}</style>
      <JobDetailSEO role={role} />

      {showModal && <ApplyModal role={role} onClose={() => setShowModal(false)} />}

      {/* BANNER */}
      <section className="banner">
        <div className="banner-inner">
          <div className="banner-eyebrow">
            <div className="eyebrow-dot" />
            Open Position
          </div>
          <h1 className="banner-title">{role.title}</h1>
          <p className="banner-subtitle">{role.desc}</p>
        </div>
      </section>

      {/* DETAIL BODY */}
      <div className="jd-body">

        {/* LEFT — Job Content */}
        <div className="jd-content">
          <button className="jd-back" onClick={onBack}>← Back to Open Roles</button>

          <div className="jd-meta-row">
            <div className="jd-meta-item">
              <span className="jd-meta-label">Location</span>
              <span className="jd-meta-value">{role.location}</span>
            </div>
            <div className="jd-meta-divider" />
            <div className="jd-meta-item">
              <span className="jd-meta-label">Number of Openings</span>
              <span className="jd-meta-value">{role.openings}</span>
            </div>
            <div className="jd-meta-divider" />
            <div className="jd-meta-item">
              <span className="jd-meta-label">Experience & Qualification</span>
              <span className="jd-meta-value">{role.experience}</span>
            </div>
          </div>

          {(() => {
            const splitIdx = role.bullets.indexOf("--- Skills Required ---");
            const jobBullets = splitIdx === -1 ? role.bullets : role.bullets.slice(0, splitIdx);
            const skillItems = splitIdx === -1 ? [] : role.bullets.slice(splitIdx + 1);
            return (
              <>
                <div className="jd-section">
                  <h2 className="jd-section-title">Job Description</h2>
                  <ul className="jd-bullets">
                    {jobBullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
                {skillItems.length > 0 && (
                  <div className="jd-section">
                    <h2 className="jd-section-title">Skills Required</h2>
                    <ul className="jd-bullets">
                      {skillItems.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            );
          })()}
        </div>

        {/* RIGHT — Sticky Apply Card */}
        <div className="jd-sidebar" style={{position:'sticky', top:'24px', alignSelf:'start', height:'fit-content'}}>
          <div className="jd-sticky-card">
            <div className="jd-sticky-role">{role.title}</div>
            <div className="jd-sticky-loc">
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              {role.location}
            </div>
            <div className="jd-sticky-divider" />
            <div className="jd-sticky-info">
              <div className="jd-info-row"><span>Openings</span><strong>{role.openings}</strong></div>
              <div className="jd-info-row"><span>Type</span><strong>Full-time</strong></div>
            </div>
            <button className="jd-apply-btn" onClick={() => setShowModal(true)}>Apply Now</button>
            <p className="jd-apply-note">We'll get back to you within 3–5 business days.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CareersPage() {
  return (
    <Layout>
      <CareersPageSEO />
    <div className="careers-wrap">
      <style>{styles}</style>

      {/* ── BANNER ── */}
      <section className="banner">
        <div className="banner-split">
          {/* LEFT: text content */}
          <div className="banner-inner">
            <div className="banner-eyebrow">
              <div className="eyebrow-dot" />
              Careers at Sterlo
            </div>
            <h1 className="banner-title">
              Build Your  <span className="underline-word">Future with PCS</span>
            </h1>
            <p className="banner-subtitle">
At PCS, we don’t just hire for roles — we build growth-focused professionals.
Our team operates at the intersection of strategy, creativity, performance, and AI-driven marketing. We value individuals who are self-driven, take full ownership of their work, and hold themselves accountable for outcomes. If you’re curious, data-minded, and ready to grow fast in a responsibility-first environment, you’ll fit right in.
            </p>
  


          </div>

          {/* RIGHT: banner image — replace src with your actual image */}
          <div className="banner-img-wrap">
            <img
              src= {banner}
              alt="Careers at Sterlo"
            />
          </div>
        </div>
      </section>

      {/* ── HIRING PROCESS ── */}
      <section className="hiring-section">
        <div className="section-header">
            <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Hiring Process</div>

          </div>
          <h2 className="hww-title">Our<span className="hww-accent" style={{color: '#ed8337', marginBottom:'20px'}}><i> Recruitment Process </i></span> </h2>
          <p className="section-subtitle">
           At Sterlo, our recruitment process is structured, transparent, and focused on identifying the right talent through practical evaluation and role alignment. Every stage is carefully designed to create a smooth experience from application to final selectio
          </p>
        </div>

        <div className="step-cards-grid">
          {hiringSteps.map((step, i) => (
            <div className="step-card" key={i}>
              <div className="step-card-num">0{i + 1}</div>
              <div className="step-card-icon"><img src={step.icon} alt={step.title} /></div>
              <div className="step-card-label">Step 0{i + 1}</div>
              <div className="step-card-title">{step.title}</div>
              <div className="step-card-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section className="roles-section">
        <div className="section-header">
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Join Our Team</div>
          </div>
          <h2 className="hww-title">Explore  <span className="hww-accent" style={{color: '#ed8337'}}><i> Opportunities & Build </i></span> Your Career</h2>
          <p className="section-subtitle">
        Grow with PCS ! Discover career opportunities that encourage responsibility, support continuous learning, and provide hands-on experience to help you strengthen your professional expertise.
          </p>
        </div>

        <div className="roles-grid">
          {openRoles.map((role, i) => {
            const slug = role.title.toLowerCase().replace(/\s+/g, "-");
            return (
              <div className="role-card" key={i}>
                <div className="role-title">{role.title}</div>
                <div className="role-desc">{role.desc}</div>
                <a className="role-apply" href={`/career/${slug}`}>
                  <span className="apply-icon">→</span>
                  Apply Now
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </div>
    </Layout>
  );
}