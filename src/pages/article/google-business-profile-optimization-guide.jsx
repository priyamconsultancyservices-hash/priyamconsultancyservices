import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";

// ════════════════════════════════════════════
//  DATA
// ════════════════════════════════════════════

const PAGE_URL = "https://www.priyamconsultancy.com/article/google-business-profile-optimization-guide";
const PAGE_TITLE = "Google Business Profile Optimization: Get Found Locally";
const PAGE_DESC =
  "Learn how to set up and optimize your Google Business Profile with the right categories, keywords, reviews and citations to get more local enquiries.";
const PAGE_IMG = "https://www.priyamconsultancy.com/img/article/article-google-business-profile-optimization.webp";
const PAGE_KEYWORDS =
  "google business profile optimization services,GMB optimization,google business optimization, gmb optimization services, local seo services, local seo optimization, google maps seo services, GMB, Google my business";

const TOC_ITEMS = [
  { id: "intro", num: "00", label: "Introduction" },
  { id: "takeaways", num: "01", label: "Top Takeaways" },
  { id: "what-is-gmb", num: "02", label: "What Is Google My Business?" },
  { id: "create-verify", num: "03", label: "Create and Verify Your Profile" },
  { id: "business-details", num: "04", label: "Business Details to Add" },
  { id: "categories", num: "05", label: "Primary and Secondary Categories" },
  { id: "keywords", num: "06", label: "Local Search Keywords" },
  { id: "ranking", num: "07", label: "Relevance, Distance, Prominence" },
  { id: "reviews", num: "08", label: "Ratings and Reviews" },
  { id: "citations", num: "09", label: "Local Citations" },
  { id: "website", num: "10", label: "Your Website and Your Profile" },
  { id: "enquiries", num: "11", label: "Calls, Messages and Bookings" },
  { id: "visibility", num: "12", label: "Improving Your Visibility" },
  { id: "summary", num: "13", label: "Profile Optimization at a Glance" },
  { id: "conclusion", num: "14", label: "Conclusion" },
  { id: "faq", num: "15", label: "FAQs" },
];

const TAKEAWAYS = [
  "An entirely optimized Google Business Profile is the cornerstone of local SEO.",
  "Select the correct main category and include local keywords, but don’t put them in your business name.",
  "The factors for ranking locally are relevance, distance, and prominence, and both relevance and prominence can be increased.",
  "Get authentic reviews and respond to every single one, regardless of whether they are good or bad.",
  "Ensure that your NAP information is accurate throughout your profile, citations, and website.",
  "Facilitate calls, messaging, and booking so that profile views turn into inquiries.",
  "Local SEO is most effective when all of these elements are managed together.",
];

const SETUP_STEPS = [
  "Login into your Google account and search for the name of your business to check whether you have a profile already.",
  "Enter your business name, category, address or service area, phone number and website.",
  "Select one of the methods of verification provided by Google, including postcard, phone, e-mail or video verification.",
  "Finish the process of verification to make sure that the profile can be made public and edited.",
];

const BUSINESS_DETAILS = [
  "Name of your business, without additional keywords;",
  "Address or regions in which you offer services or products;",
  "Phone number and your website;",
  "Work schedule, including holidays;",
  "Description of your business;",
  "Information about services and products with brief descriptions;",
  "Photos of your office, employees, products, and works performed.",
];

const RANK_FACTORS = [
  { b: "Relevance", rest: "– how relevant your profile is to the search query." },
  { b: "Distance", rest: "– how close your company is to the person who made the search or to the place he is searching for." },
  { b: "Prominence", rest: "– how popular and trustworthy your business looks like depending on its reviews, citations, website and web presence overall." },
];

const REVIEW_TIPS = [
  "Ask your satisfied clients immediately after you have completed the work for them.",
  "Provide the link to your reviews via email, SMS, WhatsApp or QR codes.",
  "Simplify the process with clear guidelines.",
  "Always thank your reviewers, and provide a polite and professional response to all negative feedback.",
];

const SUMMARY_TABLE = [
  { element: "Business details", what: "Keep name, address, phone number and hours accurate", why: "Builds trust and avoids lost enquiries" },
  { element: "Categories", what: "Choose one precise primary category and relevant secondary ones", why: "Improves relevance for local searches" },
  { element: "Keywords", what: "Use local phrases naturally in descriptions and services", why: "Helps Google match you to nearby searches" },
  { element: "Reviews", what: "Ask genuinely, reply to every review", why: "Strengthens prominence and customer trust" },
  { element: "Citations", what: "Keep name, address and phone identical across directories", why: "Confirms your business is real and consistent" },
  { element: "Website", what: "Link to a relevant page with matching details", why: "Supports your profile’s ranking signals" },
  { element: "Contact options", what: "Respond quickly to calls, messages and bookings", why: "Turns profile views into enquiries" },
];

const FAQS = [
  { q: "What are the Google Business Profile optimization services?", a: "The Google Business Profile optimization service allows you to create and manage your profile to show up on Google Maps and in the local search results." },
  { q: "What is GMB optimization and why is it important?", a: "Google My Business optimization is the process of optimizing your Google My Business profile which is now known as Google Business Profile so that your profile is accurate, complete, and relevant for local search. This is important as people who are looking for something \"near me\" are ready to call, visit, and purchase." },
  { q: "What Google business optimization entails?", a: "Google business optimization involves business information, proper categories, local keywords in your business description and services, pictures, real reviews, and updating of your profile." },
  { q: "How does GMB optimization service vary from local SEO service?", a: "The optimization of GMB service centers on your GMB profile while local SEO service is broader and takes into account your site, local citations, reviews and location pages. In order to be effective both approaches should go hand in hand as they provide the same set of signals." },
  { q: "Is local SEO for small businesses a worthy investment?", a: "In most cases, yes. It is a tool which allows you to target the audience within your region that is actively searching for your offers and allows you to compete with major brands on your turf. It brings gradual results and should be considered as an ongoing activity." },
  { q: "When is the right time to approach a search engine optimization consultancy for local SEO?", a: "When you do not have enough time or skills to handle your profile, citations, reviews and site and your rankings stagnate. In this case, a search engine optimization consultancy will analyze your local visibility, detect the weak points and create an effective strategy. Google Maps SEO services and local SEO optimization are typically included there." },
];

const ARTICLES = [
  { title: "Traditional SEO vs AI Search Optimization: What Changes and What Stays the Same", href: "/article/traditional-seo-vs-ai-search-optimization", date: "2026-10-30" },
  { title: "E-Commerce Website Development: A Complete Guide to Features, Platforms, and Strategies", href: "/article/ecommerce-website-development-complete-guide", date: "2026-10-09" },
  { title: "Website Development Cost in India (2026): Real Ranges by Type, Not Guesswork", href: "/article/website-development-cost-in-india", date: "2026-09-01" },
];

const RECENT_ARTICLES = [...ARTICLES].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4);

const RELATED_ARTICLES_API =
  "https://www.priyamconsultancy.com/blog/wp-json/wp/v2/posts?_embed&per_page=4";

const HUB_LINKS = [
  { label: "Website Development", href: "/website-development" },
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "SEO", href: "/seo" },
  { label: "PPC / Performance Marketing", href: "/performance-marketing" },
  { label: "Social Media Marketing", href: "/social-media" },
  { label: "Content Marketing", href: "/content-marketing" },
  { label: "Email Marketing", href: "/email-marketing" },
  { label: "Graphic Design", href: "/graphic-design" },
];

// ════════════════════════════════════════════
//  SCHEMA (JSON-LD)
// ════════════════════════════════════════════

// Breadcrumb Schema
const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.priyamconsultancy.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Google Business Profile Optimization: How to Get Found by Local Customers",
      item: PAGE_URL,
    },
  ],
};

// Article Schema
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": PAGE_URL,
  },
  headline: "Google Business Profile Optimization: How to Get Found by Local Customers",
  description:
    "Learn how to set up and optimize your Google Business Profile with the right categories, keywords, reviews and citations to get more local enquiries.",
  image: PAGE_IMG,
  author: {
    "@type": "Organization",
    name: "Priyam Consultancy Services",
    url: "https://www.linkedin.com/company/107495499/",
  },
  publisher: {
    "@type": "Organization",
    name: "Priyam Consultancy Services",
    url: "https://www.priyamconsultancy.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png",
    },
    sameAs: ["https://www.linkedin.com/company/107495499/"],
  },
  datePublished: "2026-11-19T09:00:00+05:30",
  dateModified: "2026-11-19T09:00:00+05:30",
  inLanguage: "en-IN",
  articleSection: "Local SEO",
  keywords:
    "Google Business Profile optimization, Google My Business optimization, GMB optimization, Google Business Profile optimization services, local SEO, local SEO for small business, Google Maps SEO services, local citations, Google reviews, Local SEO Services in Coimbatore",
};

// FAQ Schema
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are Google Business Profile optimization services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Business Profile optimization services help you create and manage your profile so that it shows up on Google Maps and in local search results.",
      },
    },
    {
      "@type": "Question",
      name: "What is GMB optimization and why is it important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GMB optimization is the process of making your Google Business Profile (earlier known as Google My Business) accurate, complete and relevant for local search. It is important because people searching for something \"near me\" are usually ready to call, visit and buy.",
      },
    },
    {
      "@type": "Question",
      name: "What does Google business optimization involve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google business optimization involves accurate business information, the right categories, local keywords in your description and services, photos, genuine reviews and regular profile updates.",
      },
    },
    {
      "@type": "Question",
      name: "How is GMB optimization different from local SEO service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GMB optimization focuses on your Google Business Profile, while local SEO is broader and also covers your website, local citations, reviews and location pages. Both work best together because they send Google the same set of signals.",
      },
    },
    {
      "@type": "Question",
      name: "Is local SEO for small businesses a worthwhile investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most cases, yes. Local SEO lets you reach people in your area who are actively searching for your offerings and helps you compete with bigger brands on your home ground. It delivers gradual results and should be treated as an ongoing activity.",
      },
    },
    {
      "@type": "Question",
      name: "When is the right time to approach a search engine optimization consultancy for local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is a good time when you do not have the time or skills to manage your profile, citations, reviews and website, and your rankings have stagnated. A consultancy can analyze your local visibility, find weak points and build an effective strategy, usually including Google Maps SEO and local SEO optimization.",
      },
    },
  ],
};

// ════════════════════════════════════════════
//  MAIN PAGE
// ════════════════════════════════════════════

function GoogleBusinessProfileOptimization() {
  const [activeSection, setActiveSection] = useState("intro");
  const [progress, setProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const [relatedArticles, setRelatedArticles] = useState([]);
  const [relatedLoading, setRelatedLoading] = useState(true);
  const [relatedError, setRelatedError] = useState(null);

  useEffect(() => {
    fetch(RELATED_ARTICLES_API)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => {
        const parsed = data.map((post) => {
          const thumbnail = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
          const cleanTitle = (post.title?.rendered || "Untitled").replace(/&[^;]+;/g, " ").trim();
          return { id: post.id, title: cleanTitle, link: post.link, thumbnail };
        });
        setRelatedArticles(parsed);
        setRelatedLoading(false);
      })
      .catch((err) => {
        setRelatedError(err.message);
        setRelatedLoading(false);
      });
  }, []);

  useEffect(() => {
    const sections = TOC_ITEMS.map((t) => document.getElementById(t.id)).filter(Boolean);

    function onScroll() {
      let activeIdx = 0;
      const scrollPos = window.scrollY + 140;
      sections.forEach((sec, i) => {
        if (sec.offsetTop <= scrollPos) activeIdx = i;
      });
      setActiveSection(TOC_ITEMS[activeIdx]?.id);

      const doc = document.documentElement;
      const pct = (window.scrollY / (doc.scrollHeight - window.innerHeight)) * 100;
      setProgress(Math.min(100, Math.max(0, pct)));
    }

    document.addEventListener("scroll", onScroll);
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  const BoldList = ({ items }) => (
    <ul>
      {items.map((i) => (
        <li key={i.b}>
          <strong>{i.b}</strong> {i.rest}
        </li>
      ))}
    </ul>
  );

  const PlainList = ({ items }) => (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );

  const Checklist = ({ items }) => (
    <ul className="tseo-checklist">
      {items.map((c) => (
        <li key={c}>{c}</li>
      ))}
    </ul>
  );

  return (
    <Layout title={PAGE_TITLE} description={PAGE_DESC}>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        <meta name="keywords" content={PAGE_KEYWORDS} />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="Priyam Consultancy Services" />
        <meta property="og:image" content={PAGE_IMG} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESC} />
        <meta name="twitter:image" content={PAGE_IMG} />

        <script type="application/ld+json">{JSON.stringify(BREADCRUMB_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(ARTICLE_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
      </Head>

      <style>{`
        main { background: #fff; }
        .tseo-mono{font-family:'JetBrains Mono',monospace;}
        .tseo-breadcrumb{ padding:30px 24px; font-size:13px; color:var(--muted,#6B7A94);}
        .tseo-breadcrumb a{color:var(--muted,#6B7A94); border-bottom:1px dotted transparent;}
        .tseo-breadcrumb a:hover{color:#ED8337; border-bottom-color:#ED8337;}
        .tseo-breadcrumb .sep{margin:0 6px; color:#F0E0D0;}

        .tseo-page{
          max-width:1350px; margin:0 auto;
          display:grid;
          grid-template-columns:300px minmax(0,1fr) 300px;
          gap:40px;
          padding:24px 24px 80px;
          align-items:start;
          font-family:'Poppins',system-ui,sans-serif;
          color:#0D1F3C;
        }
        .tseo-page a{ color:inherit; text-decoration:none; }
        .tseo-page h1,.tseo-page h2,.tseo-page h3,.tseo-page h4{ font-family:'Poppins',system-ui,sans-serif; font-weight:700; line-height:1.22; margin:0; color:#0D1F3C;}

        .tseo-toc-wrap{ position:sticky; top:24px; align-self:start; max-height:calc(100vh - 48px); overflow-y:auto;}
        .tseo-toc-label{ font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:#6B7A94; font-weight:700; margin-bottom:14px; display:flex; align-items:center; gap:8px;}
        .tseo-toc-label::before{content:""; width:14px; height:1px; background:#ED8337;}
        .tseo-toc{ list-style:none; margin:0; padding:0; border-left:1px solid #F0E0D0; }
        .tseo-toc li{ position:relative; }
        .tseo-toc a{ display:flex; align-items:baseline; gap:10px; padding:7px 0 7px 16px; font-size:13.5px; color:#6B7A94; transition:color .15s ease;}
        .tseo-toc .num{ font-family:'JetBrains Mono',monospace; font-size:11px; color:#F0E0D0; min-width:20px;}
        .tseo-toc a:hover{ color:#0D1F3C; }
        .tseo-toc li::before{ content:""; position:absolute; left:-1px; top:0; bottom:0; width:2px; background:transparent; transition:background .15s ease;}
        .tseo-toc li.active::before{ background:#ED8337; }
        .tseo-toc li.active a{ color:#ED8337; font-weight:600; }
        .tseo-toc li.active .num{ color:#ED8337; }
        .tseo-toc-progress{ margin-top:18px; padding-top:14px; border-top:1px solid #F0E0D0; font-size:12px; color:#6B7A94;}
        .tseo-toc-bar{ height:3px; background:#FFF0E6; border-radius:3px; margin-top:8px; overflow:hidden;}
        .tseo-toc-bar-fill{ height:100%; background:#ED8337; transition:width .15s linear;}

        .tseo-content{ max-width:760px; min-width:0; }
        .tseo-hero{ padding:8px 0 28px; }
        .tseo-eyebrow{ font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:#ED8337; font-weight:700; margin-bottom:14px; display:inline-flex; align-items:center; gap:8px; background:#FFF4EE; padding:5px 10px; border-radius:8px;}
        .tseo-hero h1{ font-size:40px; font-weight:700; letter-spacing:-.01em; margin-bottom:18px;}
        .tseo-hero-img{ width:100%;  border-radius:14px; overflow:hidden; display:flex; align-items:center; justify-content:center;}
        .tseo-hero-img img{ width:100%; height:100%; object-fit:cover; }

        .tseo-content section{ margin-bottom:20px; }
        .tseo-content h2{ font-size:27px; font-weight:700; margin-bottom:16px; scroll-margin-top:24px; letter-spacing:-.005em;}
        .tseo-content h3{ font-size:19px; font-weight:600; margin:22px 0 10px;}
        .tseo-content p{ font-size:15px; line-height:1.75; color:#6B7A94; margin:0 0 16px;}
        .tseo-content ul, .tseo-content ol{ line-height:1.75; padding-left:22px; margin:0 0 16px;}
        .tseo-content li{ margin-bottom:6px; color:#6B7A94; font-size:15px;}
        .tseo-content strong{ color:#0D1F3C; }
        .tseo-inline-link{ color:#ED8337; border-bottom:1px solid #FFF4EE; font-weight:500;}
        .tseo-inline-link:hover{ border-bottom-color:#ED8337; }

        .tseo-table-wrap{ overflow-x:auto; }
        .tseo-tools-table{ width:100%; border-collapse:collapse; margin:18px 0; font-size:14.5px;}
        .tseo-tools-table th{ text-align:left; padding:10px 12px; background:#FFF0E6; font-size:12px; text-transform:uppercase; letter-spacing:.05em; color:#6B7A94; font-weight:700;}
        .tseo-tools-table td{ padding:12px 12px; border-bottom:1px solid #F0E0D0; color:#2B362F;}
        .tseo-tools-table tr:last-child td{ border-bottom:none;}

        .tseo-checklist{ display:grid; gap:10px; margin:18px 0; list-style:none; padding:0 !important;}
        .tseo-checklist li{ display:flex; gap:12px; font-size:15px; line-height:1.6; color:#6B7A94;}
        .tseo-checklist li::before{ content:"✓"; color:#ED8337; font-weight:700; flex-shrink:0;}

        .tseo-faq-title{ font-size:28px !important; margin-bottom:22px !important; }
        .tseo-faq-list{ display:grid; gap:14px; }
        .tseo-faq-item{ border:1px solid #F0E0D0; border-radius:18px; background:#fff; transition:box-shadow .2s ease; }
        .tseo-faq-item.open{ box-shadow:0 2px 14px rgba(237,131,55,.08); }
        .tseo-faq-q{ width:100%; display:flex; align-items:center; justify-content:space-between; gap:16px; padding:18px 22px; background:none; border:0; cursor:pointer; text-align:left; font-family:inherit; font-size:15.5px; font-weight:600; color:#0D1F3C; line-height:1.35; }
        .tseo-faq-q:focus-visible{ outline:2px solid #ED8337; outline-offset:2px; border-radius:18px; }
        .tseo-faq-icon{ color:#ED8337; font-size:22px; font-weight:700; line-height:1; flex-shrink:0; width:24px; text-align:center; }
        .tseo-faq-a{ display:grid; grid-template-rows:0fr; transition:grid-template-rows .25s ease; }
        .tseo-faq-item.open .tseo-faq-a{ grid-template-rows:1fr; }
        .tseo-faq-a > div{ overflow:hidden; }
        .tseo-faq-a p{ margin:0; padding:0 22px 20px; font-size:14.5px !important; line-height:1.75; color:#6B7A94; }

        .tseo-cta-banner{ background:linear-gradient(120deg, #004168, #0D1F3C 110%); color:#FFFDFB; border-radius:14px; padding:36px 34px; margin:40px 0; display:flex; align-items:center; justify-content:space-between; gap:24px; flex-wrap:wrap;}
        .tseo-cta-banner h3{ color:#fff; font-size:22px; margin:0 0 8px;}
        .tseo-cta-banner p{ color:#D9E6DE !important; font-size:14.5px; margin:0; }
        .tseo-cta-btn{ background:#ED8337; color:#2A1000 !important; font-weight:700; padding:13px 24px; border-radius:10px; font-size:14px; white-space:nowrap; letter-spacing:.01em; transition:transform .15s ease; display:inline-block;}
        .tseo-cta-btn:hover{ transform:translateY(-1px); }

        .tseo-rail{ position:sticky; top:24px; display:flex; flex-direction:column; gap:28px; align-self:start;}
        .tseo-rail-card{ background:#fff; border:1px solid #F0E0D0; border-radius:14px; padding:22px;}
        .tseo-rail-title{ font-size:12px; letter-spacing:.1em; text-transform:uppercase; font-weight:700; color:#0D1F3C; margin-bottom:14px;}
        .tseo-hub-grid{ display:grid; gap:4px; }
        .tseo-hub-link{ display:flex; align-items:center; justify-content:space-between; padding:9px 10px; font-size:13.5px; border-radius:8px; color:#2B362F; font-weight:500;}
        .tseo-hub-link:hover{ background:#FFF4EE; color:#ED8337; }
        .tseo-hub-link .arrow{ color:#F0E0D0; font-family:'JetBrains Mono',monospace; }
        .tseo-hub-link:hover .arrow{ color:#ED8337; }

        .tseo-article-card{ display:flex; gap:12px; padding:12px 0; border-bottom:1px solid #FFF0E6;}
        .tseo-article-card:last-child{ border-bottom:none; padding-bottom:0;}
        .tseo-article-card .thumb{ width:56px; height:56px; flex-shrink:0; border-radius:10px; background:linear-gradient(135deg,#ED8337,#0D1F3C); overflow:hidden;}
        .tseo-article-card .thumb img{ width:100%; height:100%; object-fit:cover; display:block; }
        .tseo-article-card h5{ font-size:13.5px; line-height:1.35; font-weight:600; color:#0D1F3C; margin:0;}
        .tseo-article-card:hover h5{ color:#ED8337; }
        .tseo-rail-status{ font-size:13px; color:#6B7A94; margin:0 0 8px; }
        .tseo-rail-status-error{ color:#C2492E; }

        .tseo-popular-row{ display:flex; align-items:baseline; gap:10px; padding:10px 0; border-bottom:1px solid #FFF0E6; font-size:13.5px;}
        .tseo-popular-row:last-child{ border-bottom:none; }
        .tseo-popular-row .rank{ font-family:'JetBrains Mono',monospace; color:#F0E0D0; font-weight:700; font-size:13px;}
        .tseo-popular-row a{ font-weight:600; color:#0D1F3C; line-height:1.35; }
        .tseo-popular-row a:hover{ color:#ED8337; }

        .tseo-rail-cta{ background:#0D1F3C; color:#FFFDFB; }
        .tseo-rail-cta h4{ font-size:18px; margin-bottom:8px; color:#fff;}
        .tseo-rail-cta p{ font-size:13px; color:#C7CFC9; margin-bottom:16px; line-height:1.5;}
        .tseo-rail-cta .tseo-cta-btn{ display:block; text-align:center; width:100%; box-sizing:border-box;}
        .tseo-rail-cta .trust{ display:flex; gap:10px; margin-top:14px; font-size:11px; color:#8C9A91;}

        @media (max-width:1180px){
          .tseo-page{ grid-template-columns:1fr; }
          .tseo-toc-wrap, .tseo-rail{ position:static; max-height:none; }
          .tseo-rail{ order:3; }
        }
        @media (max-width:640px){
          .tseo-hero h1{ font-size:30px; }
          .tseo-cta-banner{ flex-direction:column; align-items:flex-start; }
        }
      `}</style>

      <nav className="tseo-breadcrumb">
        <Link to="/">Home</Link>
        <span className="sep">/</span>
        <Link to="https://www.priyamconsultancy.com/blog/">Resources</Link>
        <span className="sep">/</span>
        <Link to="/seo">SEO</Link>
        <span className="sep">/</span>
        <span>Google Business Profile Optimization</span>
      </nav>

      <div className="tseo-page">
        {/* LEFT SIDEBAR — TOC */}
        <aside className="tseo-toc-wrap">
          <div className="tseo-toc-label">On this page</div>
          <ul className="tseo-toc">
            {TOC_ITEMS.map((item) => (
              <li key={item.id} className={activeSection === item.id ? "active" : ""}>
                <a href={`#${item.id}`}>
                  <span className="num">{item.num}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="tseo-toc-progress">
            Reading progress
            <div className="tseo-toc-bar">
              <div className="tseo-toc-bar-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </aside>

        {/* CENTER CONTENT */}
        <main className="tseo-content">
          <article>
            <div className="tseo-hero">
              <span className="tseo-eyebrow">Local SEO · Google Business Profile Guide</span>
              <h1>Google Business Profile (Google My Business): How to Get Found by Local Customers</h1>

              <div className="tseo-hero-img">
                <Link href="/article/google-business-profile-optimization-guide">
                  <img src="/img/article/google-business-profile-optimization.webp" alt="Google Business Profile Optimization" />
                </Link>
              </div>
            </div>

            <section id="intro">
              <p>
                When the term "near me" is used for searching on Google, the person is usually ready to take action. The customer needs either the contact numbers or the directions, and sometimes an immediate answer regarding whom to contact. When your company doesn’t feature in that list, or even when it doesn’t have proper information or reviews, then the client chooses your competition.
              </p>
              <p>
                Here comes the importance of GMB Optimization. Google Business Profile, which is known as Google My Business earlier, is one of the first impressions your customers get of your business. This guide will tell you about how to make your Google Business Profile and optimize it to convert views to enquiries.
              </p>
            </section>

            <section id="takeaways">
              <h2>Top Takeaways</h2>
              <Checklist items={TAKEAWAYS} />
            </section>

            <section id="what-is-gmb">
              <h2>What Is Google My Business, and How Does It Work?</h2>
              <p>
                GMB, commonly referred to as Google My Business (GMB), is a free listing that dictates how your business is listed on Google Search and Maps. It includes information such as the name, address, phone number, hours, photos, reviews, and website.
              </p>
              <p>
                If a client searches for services close to him or her, Google evaluates the profiles it believes to be most relevant, closest, and reliable and then lists them both on the search and map page. An active and complete profile greatly increases the chances of your business being listed. Optimization of the GMB guarantees an active and complete profile.
              </p>
              <p>
                It should be noted that since Google offers personalized results, two businesses from the same location could get a very different listing on search and map results. For example, a restaurant could be listed on the map for the phrase "biryani near me", while a service business could be listed when the client searches for its name.
              </p>
            </section>

            <section id="create-verify">
              <h2>How Do You Create and Verify Your Google Business Profile?</h2>
              <h3>How to set up a profile?</h3>
              <ol>
                {SETUP_STEPS.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
              <p>
                Do not set up a profile for a fictional business and do not enter a fake name or address. Unverified profiles have low visibility, thus making sure to verify them immediately is necessary.
              </p>
              <p>
                Make sure to have the information on how to go through the verification and follow Google's instructions. If your verification was not successful, make sure that all the information entered about your business, including pictures, is correct. Service-area businesses, like plumbers or tutors, have an option to enter the areas they work rather than the address.
              </p>
            </section>

            <section id="business-details">
              <h2>Which Business Details Should You Add to Fully Optimise Your Profile?</h2>
              <p>
                The first stage of optimization is completeness of your data. Complete profiles will be easily recognized by Google and are reliable for clients. Your data will include:
              </p>
              <PlainList items={BUSINESS_DETAILS} />
              <p>
                Your data must be up-to-date. It is annoying for your potential clients to see inaccurate working hours or out-of-date phone numbers. For this reason, many businesses opt for google business profile optimization services in order to have accurate information in their Google Business profile.
              </p>
              <p>
                Photos are equally important. You have to upload your logo, cover photo and photos of your office, products, interior and staff. Authentic photos will help your potential clients recognize your company when they come and will serve as proof of validity of your profile. Describe your business and what makes it unique.
              </p>
            </section>

            <section id="categories">
              <h2>Why Do Primary and Secondary Categories Matter for Your Business?</h2>
              <p>
                Your main category informs Google about the main type of service you provide, and this significantly affects the search results you get. Pick the one that accurately reflects your main service, e.g., "Interior Designer" instead of "Business".
              </p>
              <p>
                Your secondary categories are used for extra services you actually provide. Include only relevant ones since the inclusion of categories that are not related to your business reduces your relevancy. Check your categories from time to time since the category list of Google is updated, as well as your services. Categories play an important role in <a href="https://support.google.com/business/answer/7091?hl=en" style={{ color: '#ed8337' }} >google business optimization</a>.
              </p>
              <p>
                As an illustration, for a dental office you can pick "Dentist" as your primary category and add "Cosmetic Dentist" or "Orthodontist" as your secondary ones depending on whether or not you provide such services.
              </p>
            </section>

            <section id="keywords">
              <h2>Where Should You Use Local Search Keywords in Your Google Business Profile?</h2>
              <p>
                Keywords enable Google to know what you do and where you do it. Study the language used by customers when describing your service and the geographical locations searched, such as “dentist in RS Puram” or “accounting services in Coimbatore.”
              </p>
              <p>
                Integrate these terms naturally in the description of your business, the descriptions of your service or products, the posts made and responses to reviews. Refrain from inserting keywords into the name of your business or repeating them unnaturally, as this is a violation of Google’s policies and may cause your account to be suspended. Write naturally for the benefit of the customer.
              </p>
              <p>
                One simple way to obtain the right keywords is by typing your service into Google and reading through the recommendations provided, or listing the questions your customers ask you in your call and message conversations. Mention the neighborhood name and landmarks where applicable, because this will assist Google in linking your business to the searches conducted in the locality. Update your keywords every time you introduce a new service or branch.
              </p>
            </section>

            <section id="ranking">
              <h2>Do Relevance, Distance and Prominence Decide Your Local Search Ranking?</h2>
              <p>Indeed, these are the three elements that influence local searches according to Google:</p>
              <BoldList items={RANK_FACTORS} />
              <p>
                There is nothing you can do about your distance from your client but you can work on other two elements. This is the goal of professional local SEO optimization including profile information, reviews, citations and website signals.
              </p>
              <p>
                The quality of additional information about your company also matters to Google. A more complete and consistent profile is generally seen as more trustworthy.
              </p>
            </section>

            <section id="reviews">
              <h2>Can You Increase Your Google Rating and Reviews Organically?</h2>
              <p>
                Yes, honest reviews will increase trust, improve ranking, and they can be gained legitimately. Never purchase any reviews and do not pay for good reviews, this will be against the policy of Google.
              </p>
              <p>The alternative would be:</p>
              <PlainList items={REVIEW_TIPS} />
              <p>
                Regular reviews, which are genuine, will definitely leave a great impression on Google and the possible customers. Professional Google business profile optimization services will also help to gain regular reviews.
              </p>
              <p>
                When responding, address the person by name, provide a specific point, and always remain calm and professional. In case of negative review, admit the issue, try to solve the problem off the website and do not argue on the Internet. Future customers will check the replies to understand how you deal with people. Always do not ask only satisfied clients for reviews.
              </p>
            </section>

            <section id="citations">
              <h2>Should You Invest in Local Citations to Strengthen Your Profile?</h2>
              <p>
                Local citation is any mention of your company's name, address and telephone number found on the Internet. Citations act as proof that your company exists and is consistent on the web.
              </p>
              <p>
                Build a list of citations on relevant directories where you will keep your company's name, address and telephone number exactly the same. Inconsistencies will only lead to confusions. Most of the time, cleaning up your citations is done by companies that specialize in local <a href="https://www.priyamconsultancy.com/search-engine-optimization/" style={{color:'#ed8337'}}>SEO</a>.
              </p>
              <p>
                Begin with a list of a few citations, the ones that are most relevant to your business and city. After some time, continue adding more directories. Quantity is not as important as quality. It will be more helpful having a few consistent listings rather than many inconsistent ones. Remember to periodically check for duplicates.
              </p>
            </section>

            <section id="website">
              <h2>Is Your Website Helping Your Google Business Profile Ranking?</h2>
              <p>
                Together, your profile and website create a synergy. Instead of linking your profile to your homepage, use the more specific pages related to your business – either location or service pages. Your information should also match in your profile and website.
              </p>
              <p>
                Fast, mobile optimized websites with local content, service pages, and contact information help increase your visibility even more. This is why the local SEO optimization of small business websites needs to be carried out on a profile and a website as a whole.
              </p>
              <p>
                Local information needs to be integrated into your website whenever you can, including your address, locations of services, testimonials and a map embedded on your website. Also, make separate pages for each location or service you provide, and use the same information as in your profile (business name, address and phone).
              </p>
            </section>

            <section id="enquiries">
              <h2>Are Calls, Messages and Bookings Turning Profile Views into Enquiries?</h2>
              <p>
                Visibility does not matter unless there is action. There are several means that will allow your customers to contact you using your Google My Business profile: calls, messages, booking links, directions, and website visits.
              </p>
              <p>
                Make all those actions convenient. Be quick in responding to calls and messages; keep your booking link functional and your hours of operation correct. Look into your profile insights provided by Google to find out how many people call, ask for directions, or visit your website. You can use a number of GMB optimization tools to monitor your profile insights.
              </p>
              <p>
                Review the questions and messages sent from your profile and answer them timely. In case you take appointments, provide a booking or appointment link. The slightest changes may increase the number of calls and visits without any additional costs for advertising.
              </p>
            </section>

            <section id="visibility">
              <h2>How Does Search Engine-Based Local Profile Optimisation Improve Your Visibility?</h2>
              <p>
                The components that make up visibility are as follows: the right profile information, appropriate categories, the correct keywords, regular reviews, regular citations, and a good website. These components tell Google that you are relevant, you are nearby, and you are reliable.
              </p>
              <p>
                These are the underlying concepts of google maps seo services and gmb optimization services. Instead of rectifying a single component, these services try to coordinate and regularly update all these components based on search results. A seo consultancy service can help in evaluating your website and local presence for future plans.
              </p>
            </section>

            <section id="summary">
              <h2>Profile Optimization at a Glance</h2>
              <div className="tseo-table-wrap">
                <table className="tseo-tools-table">
                  <tbody>
                    <tr>
                      <th>Profile element</th>
                      <th>What to do</th>
                      <th>Why it helps</th>
                    </tr>
                    {SUMMARY_TABLE.map((r) => (
                      <tr key={r.element}>
                        <td><strong>{r.element}</strong></td>
                        <td>{r.what}</td>
                        <td>{r.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="conclusion">
              <h2>Conclusion</h2>
              <p>
                A properly managed Google Business Profile ensures that people in your local vicinity discover, trust, and contact you. Ensure you have filled all information, pick appropriate categories, use local keywords naturally, get honest reviews, maintain consistent citations, and link the Google Business Profile with a good website.
              </p>
              <p>
                Should you need professional assistance with that, then you may reach out to <a href="https://www.priyamconsultancy.com/contact-us/" style={{ color: '#ed8337' }}>Priyam Consultancy Services</a>, where we provide Google Business Profile Optimization Services and Local SEO Services.
              </p>
            </section>

            <div className="tseo-cta-banner" id="cta-middle">
              <div>
                <h3>Is Your Business Missing Out on Local Customers?</h3>
                <p>
                  Priyam Consultancy Services helps businesses get found on Google Search and Maps through local SEO and profile support. We’ll review your Google Business Profile, fix the gaps in your details, categories, reviews and citations, and build a plan that brings more calls and enquiries from nearby customers.
                </p>
              </div>
              <Link className="tseo-cta-btn" to="/contact-us">
                Improve Your Local Visibility Today →
              </Link>
            </div>


            <section id="faq">
              <h2 className="tseo-faq-title">Frequently Asked Questions</h2>
              <div className="tseo-faq-list">
                {FAQS.map((f, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div className={`tseo-faq-item${isOpen ? " open" : ""}`} key={f.q}>
                      <button
                        type="button"
                        className="tseo-faq-q"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaq(isOpen ? -1 : i)}
                      >
                        <span>{i + 1}. {f.q}</span>
                        <span className="tseo-faq-icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                      </button>
                      <div className="tseo-faq-a">
                        <div>
                          <p>{f.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </article>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="tseo-rail">
          <div className="tseo-rail-card">
            <div className="tseo-rail-title">Digital Marketing Learning Hub</div>
            <div className="tseo-hub-grid">
              {HUB_LINKS.map((l) => (
                <Link className="tseo-hub-link" to={l.href} key={l.href}>
                  {l.label} <span className="arrow">→</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="tseo-rail-card tseo-rail-cta">
            <h4>Not Sure What Your Business Needs?</h4>
            <p>
              Get a free consultation and a custom roadmap from our team at Priyam Consultancy Services, no commitment required.
            </p>
            <Link className="tseo-cta-btn" to="/contact-us">
              Talk to Our Team
            </Link>
            <div className="trust">20+ Industries Served</div>
          </div>

          <div className="tseo-rail-card">
            <div className="tseo-rail-title">Related Blogs</div>
            {relatedLoading && <p className="tseo-rail-status">Loading...</p>}
            {relatedError && <p className="tseo-rail-status tseo-rail-status-error">Couldn't load articles.</p>}
            {!relatedLoading && !relatedError && relatedArticles.length === 0 && (
              <p className="tseo-rail-status">No related articles yet.</p>
            )}
            {relatedArticles.map((a) => (
              <a className="tseo-article-card" key={a.id} href={a.link} target="_blank" rel="noreferrer">
                <div className="thumb">
                  {a.thumbnail && <img src={a.thumbnail} alt={a.title} loading="lazy" />}
                </div>
                <div>
                  <h5>{a.title}</h5>
                </div>
              </a>
            ))}
          </div>

          <div className="tseo-rail-card">
            <div className="tseo-rail-title">Popular Articles</div>
            {RECENT_ARTICLES.map((p, i) => (
              <div className="tseo-popular-row" key={p.href}>
                <span className="rank">{String(i + 1).padStart(2, "0")}</span>
                <Link to={p.href}>{p.title}</Link>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </Layout>
  );
}

export default GoogleBusinessProfileOptimization;