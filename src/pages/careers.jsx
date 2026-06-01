import { useState } from "react";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

const SITE_URL = "https://www.sterlo.com"; // ← உங்கள் domain இங்கே மாற்றவும்

const banner = "/img/career.png";

/* ═══════════════════════════════════════════════════════
   SEO — Careers Page (Main)
   Title       : 60 chars max
   Description : 150–160 chars
   Keywords    : page-specific, comma-separated
═══════════════════════════════════════════════════════ */
const CAREERS_SEO = {
  title: "Careers at Sterlo | Join Our Digital Marketing & Tech Team",
  description:
    "Explore exciting career opportunities at Sterlo in Coimbatore. We're hiring Website Developers, Digital Marketing Analysts, Content Writers, Graphic Designers & more.",
  keywords:
    "careers at Sterlo, jobs in Coimbatore, digital marketing jobs, website developer jobs Coimbatore, content writer jobs, graphic designer jobs, HR executive jobs, video editor jobs, marketing agency hiring, Sterlo careers",
  canonical: `${SITE_URL}/careers`,
  ogImage: `${SITE_URL}/img/career.png`,
};

/* ═══════════════════════════════════════════════════════
   SCHEMA HELPERS
═══════════════════════════════════════════════════════ */

// 1. Product Schema — Careers page (represents Sterlo's recruitment/hiring service as a product)
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${SITE_URL}/careers#product`,
  name: "Careers at Sterlo — Join Our Team",
  description:
    "Explore open job positions at Sterlo, Coimbatore. We offer roles in Website Development, Digital Marketing, Content Writing, Graphic Design, HR, and Video Editing.",
  url: `${SITE_URL}/careers`,
  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}/img/career.png`,
    width: 1200,
    height: 630,
  },
  brand: {
    "@type": "Brand",
    name: "Sterlo",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Sterlo",
    url: SITE_URL,
    logo: `${SITE_URL}/img/logo.png`,
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "0",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/careers`,
    seller: {
      "@type": "Organization",
      name: "Sterlo",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "120",
    bestRating: "5",
    worstRating: "1",
  },
};

// 2. WebSite Schema (global — inject on every page ideally via plugin)
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Sterlo",
  description:
    "Sterlo is a growth-focused digital marketing and technology agency based in Coimbatore, India.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// 3. Local Business / Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "Sterlo",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/img/logo.png`,
    width: 200,
    height: 60,
  },
  image: `${SITE_URL}/img/career.png`,
  description:
    "Sterlo is a digital marketing and technology agency in Coimbatore offering SEO, paid media, web development, and AI-driven marketing services.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/sterlo",  // ← update with actual URLs
    "https://twitter.com/sterlo",
    "https://www.instagram.com/sterlo",
  ],
};

// 4. Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${SITE_URL}/careers#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Careers",
      item: `${SITE_URL}/careers`,
    },
  ],
};

// 5. Listing Schema — all open roles as ItemList
const rolesListingSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Open Roles at Sterlo",
  description:
    "Current job openings at Sterlo, Coimbatore — across digital marketing, web development, design, HR, and video production.",
  url: `${SITE_URL}/careers`,
  numberOfItems: 9,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Website Developer", url: `${SITE_URL}/careers#website-developer` },
    { "@type": "ListItem", position: 2, name: "Digital Marketing Analyst", url: `${SITE_URL}/careers#digital-marketing-analyst` },
    { "@type": "ListItem", position: 3, name: "Content Writer", url: `${SITE_URL}/careers#content-writer` },
    { "@type": "ListItem", position: 4, name: "Graphic Designer", url: `${SITE_URL}/careers#graphic-designer` },
    { "@type": "ListItem", position: 5, name: "HR Executive", url: `${SITE_URL}/careers#hr-executive` },
    { "@type": "ListItem", position: 6, name: "Video Editor", url: `${SITE_URL}/careers#video-editor` },
    { "@type": "ListItem", position: 7, name: "Web Developer Intern", url: `${SITE_URL}/careers#web-developer-intern` },
    { "@type": "ListItem", position: 8, name: "Digital Marketing Intern", url: `${SITE_URL}/careers#digital-marketing-intern` },
    { "@type": "ListItem", position: 9, name: "Content Writer Intern", url: `${SITE_URL}/careers#content-writer-intern` },
  ],
};

// 6. FAQ Schema — common careers questions
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What job openings are currently available at Sterlo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sterlo is currently hiring for Website Developer, Digital Marketing Analyst, Content Writer, Graphic Designer, HR Executive, Video Editor, and intern positions in Coimbatore.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Sterlo located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sterlo is based in Coimbatore, Tamil Nadu, India. All current openings are for the Coimbatore office.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for a job at Sterlo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can apply directly through our Careers page by clicking 'Apply Now' on the role you're interested in. Fill in your details, upload your resume, and submit your application. Our team will get back to you within 3–5 business days.",
      },
    },
    {
      "@type": "Question",
      name: "What is the hiring process at Sterlo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our hiring process has 4 stages: Application Review, Introduction Call, Technical/Functional Evaluation, and a Final In-Person Discussion followed by an offer.",
      },
    },
    {
      "@type": "Question",
      name: "Does Sterlo offer internship opportunities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Sterlo offers internships for Web Developer, Digital Marketing, Content Writing, and Graphic Design roles — ideal for students and freshers looking for hands-on experience.",
      },
    },
  ],
};

// 7. Image Schema — careers banner image
const imageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  contentUrl: `${SITE_URL}/img/career.png`,
  url: `${SITE_URL}/careers`,
  name: "Careers at Sterlo — Join Our Team in Coimbatore",
  description:
    "Sterlo careers page banner showing open roles in digital marketing, web development, design, and more.",
  width: 1200,
  height: 630,
  encodingFormat: "image/png",
  copyrightHolder: {
    "@type": "Organization",
    name: "Sterlo",
  },
};

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
      <title>{CAREERS_SEO.title}</title>
      <meta name="description" content={CAREERS_SEO.description} />
      <meta name="keywords" content={CAREERS_SEO.keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Sterlo" />

      {/* ── Canonical ── */}
      <link rel="canonical" href={CAREERS_SEO.canonical} />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={CAREERS_SEO.title} />
      <meta property="og:description" content={CAREERS_SEO.description} />
      <meta property="og:url" content={CAREERS_SEO.canonical} />
      <meta property="og:image" content={CAREERS_SEO.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Sterlo" />
      <meta property="og:locale" content="en_IN" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={CAREERS_SEO.title} />
      <meta name="twitter:description" content={CAREERS_SEO.description} />
      <meta name="twitter:image" content={CAREERS_SEO.ogImage} />
      <meta name="twitter:site" content="@sterlo" />

      {/* ── Schema: Product ── */}
      <script type="application/ld+json">{JSON.stringify(productSchema)}</script>

      {/* ── Schema: WebSite ── */}
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>

      {/* ── Schema: Organization / Local Business ── */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>

      {/* ── Schema: Breadcrumb ── */}
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

      {/* ── Schema: ItemList (all open roles) ── */}
      <script type="application/ld+json">{JSON.stringify(rolesListingSchema)}</script>

      {/* ── Schema: FAQ ── */}
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      {/* ── Schema: Image ── */}
      <script type="application/ld+json">{JSON.stringify(imageSchema)}</script>
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
    title: "Application Review",
    desc: "Once your application is submitted, our hiring team carefully reviews your profile and shortlists candidates whose skills and experience align with our requirements.",
    icon: "/img/icon/hiring-step1.webp",
  },
  {
    grad: "bg-g2",
    title: "Introduction Call",
    desc: "A discovery call is scheduled to understand your background, core strengths, career goals, and how well your profile matches the role.",
    icon: "/img/icon/hiring-step2.webp",
  },
  {
    grad: "bg-g3",
    title: "Technical / Functional Evaluation",
    desc: "You will participate in a video discussion with our hiring managers, along with a system-based assessment to evaluate your technical or functional capabilities.",
    icon: "/img/icon/hiring-step3.webp",
  },
  {
    grad: "bg-g4",
    title: "Final In-Person Discussion & Offer",
    desc: "Selected candidates will attend an in-person discussion on role fit, culture, compensation, and notice period, followed by a formal offer.",
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
    experience: "1–3 Years in Human Resources or Talent Acquisition. Any Graduate or MBA in HR.",
    desc: "Support end-to-end recruitment, employee engagement, and HR operations to build a strong, motivated workforce aligned with organisational goals.",
    bullets: [
      "Manage end-to-end recruitment processes including job posting, sourcing, screening, and interview coordination.",
      "Collaborate with hiring managers to understand role requirements and define accurate job descriptions.",
      "Source candidates through job portals (Naukri, LinkedIn, Indeed), social media, and employee referrals.",
      "Conduct initial HR screening calls and coordinate technical and managerial interview rounds.",
      "Maintain and update candidate databases, recruitment trackers, and MIS reports.",
      "Coordinate onboarding activities including document collection, induction scheduling, and system access setup.",
      "Support employee engagement initiatives, HR communications, and internal events.",
      "Assist with HR policy implementation, attendance management, and payroll inputs.",
      "Handle employee queries related to HR policies, leave management, and employee benefits.",
    
      "--- Skills Required ---",
      "Talent Acquisition",
      "End-to-End Recruitment",
      "Job Portals (Naukri / LinkedIn)",
      "Onboarding & Induction",
      "Employee Engagement",
      "HR MIS & Reporting",
      "Payroll Basics",
      "HR Policies & Compliance",
    ],
  },
  {
    title: "Video Editor",
    location: "Coimbatore",
    openings: 2,
    experience: "1–3 Years in Video Editing / Post-Production. Any Graduate in Media, Film, or related field.",
    desc: "Edit raw footage into engaging, high-quality videos aligned with brand goals by incorporating music, sound design, colour grading, and motion graphics.",
    bullets: [
      "Edit raw footage into polished, engaging videos aligned with brand guidelines and project briefs.",
      "Add music, sound design, colour grading, and motion graphics to enhance video quality.",
      "Collaborate with the marketing and design teams on video concepts, scripts, and storyboards.",
      "Create short-form video content for social media platforms including LinkedIn, Instagram, and YouTube.",
      "Produce explainer videos, product demos, testimonials, and promotional reels.",
      "Ensure all deliverables are completed on time and meet defined quality standards.",
      "Manage and organise video assets, raw footage, and project files efficiently.",
      "Stay updated on video editing trends, platform-specific formats, and algorithm changes.",
    
      "--- Skills Required ---",
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "Colour Grading",
      "Motion Graphics",
      "Sound Design",
      "Short-form Content",
      "Storyboarding",
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
    experience: "Fresher or up to 1 Year of experience. Any Graduate or pursuing MBA in HR.",
    desc: "Assist the HR team with recruitment coordination, employee engagement activities, and HR operations to gain practical exposure in core human resources functions.",
    bullets: [
      "Assist in sourcing, screening, and shortlisting candidates from job portals and LinkedIn.",
      "Schedule and coordinate interviews between candidates and hiring managers.",
      "Maintain and update recruitment trackers, candidate databases, and MIS reports.",
      "Support onboarding activities including documentation, induction coordination, and asset setup.",
      "Assist in drafting job descriptions, offer letters, and HR communication templates.",
      "Help coordinate employee engagement activities, internal events, and recognition programs.",
      "Handle basic HR administrative tasks such as attendance tracking and leave records.",
      "Assist in HR policy documentation and compliance-related activities.",
    
      "--- Skills Required ---",
      "Recruitment Basics",
      "LinkedIn Sourcing",
      "Job Portal Usage",
      "MS Excel / Google Sheets",
      "Communication Skills",
      "Attention to Detail",
      "Documentation",
      "Time Management",
    ],
  },
  {
    title: "Video Editor Intern",
    location: "Coimbatore",
    openings: 2,
    experience: "Fresher or up to 1 Year of experience. Any Graduate in Media, Film Production, or related field.",
    desc: "Assist the creative team in editing video content for digital platforms while developing hands-on skills in post-production, colour grading, and motion graphics.",
    bullets: [
      "Assist in editing raw footage into polished videos for social media, websites, and marketing campaigns.",
      "Add background music, voiceovers, sound effects, and subtitles to video projects.",
      "Apply basic colour correction and grading to enhance visual consistency.",
      "Support the creation of short-form content including reels, stories, and video ads.",
      "Assist in creating simple motion graphics, lower thirds, and animated text using After Effects or similar tools.",
      "Organise and manage raw footage, project files, and exported assets systematically.",
      "Collaborate with the design and marketing teams on video concepts and storyboards.",
      "Incorporate feedback from senior editors to improve output quality and meet deadlines.",
    
      "--- Skills Required ---",
      "Adobe Premiere Pro (Basics)",
      "After Effects (Basics)",
      "Colour Correction Basics",
      "Subtitle & Captions",
      "Short-form Video Editing",
      "File Management",
      "Creativity",
      "Team Collaboration",
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
      // ── Step 1: Upload resume to Cloudinary ──
      let resumeUrl = "Not provided";
      if (resume) {
        const cloudData = new FormData();
        cloudData.append("file", resume);
        cloudData.append("upload_preset", "PCS Career");
        cloudData.append("folder", "sterlo_resumes");

        const cloudRes = await fetch(
          "https://api.cloudinary.com/v1_1/dsmzvp3ew/raw/upload",
          { method: "POST", body: cloudData }
        );
        const cloudJson = await cloudRes.json();
        if (cloudJson.secure_url) {
          resumeUrl = cloudJson.secure_url;
        } else {
          throw new Error("Resume upload failed. Please try again.");
        }
      }

      // ── Step 2: Send form data + resume link to Formspree ──
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
      formData.append("resume_link", resumeUrl);

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
              Build Your  <span className="underline-word">Career</span>
            </h1>
            <p className="banner-subtitle">
              At PCS, we don’t just hire for roles — we build growth-focused professionals. Our team works at the intersection of strategy, creativity, performance, and AI-driven marketing. If you’re curious, data-minded, and ready to grow fast, you’ll fit right in.
            </p>
            <div className="hero-actions">
              <a className="btn-fill" href="#">Explore More <span className="btn-arrow">›</span></a>
            </div>


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
          <h2 className="hww-title">Our<span className="hww-accent" style={{color: '#ed8337'}}><i> Hiring Process </i></span> </h2>
          <p className="section-subtitle">
            At sterlo, Hiring process is clear and purposeful—focused on skills, real-world evaluation, and mutual fit.
            Each stage is designed to ensure the right alignment from application to offer.
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
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>How We Work</div>
          </div>
          <h2 className="hww-title">Discover <span className="hww-accent" style={{color: '#ed8337'}}><i> Open Roles at </i></span> Excellence in Your Journey</h2>
          <p className="section-subtitle">
            Grow with sterlo! Step into opportunities that encourage ownership, expose you to diverse responsibilities,
            and provide end-to-end exposure that strengthens your expertise.
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