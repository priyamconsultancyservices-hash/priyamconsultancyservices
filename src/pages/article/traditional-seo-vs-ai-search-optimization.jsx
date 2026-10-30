import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";

// ════════════════════════════════════════════
//  DATA
// ════════════════════════════════════════════

const PAGE_URL = "https://www.priyamconsultancy.com/article/traditional-seo-vs-ai-search-optimization";
const PAGE_TITLE = "Traditional SEO vs AI Search Optimization: Key Differences";
const PAGE_DESC =
  "Understand traditional SEO vs AI search optimization, GEO, AI SEO, and practical strategies to improve your brand visibility on Google and ChatGPT.";
const PAGE_IMG = "https://www.priyamconsultancy.com/img/article/article-traditional-seo-vs-ai-search-optimization.webp";
const PAGE_KEYWORDS =
  "Traditional SEO vs AI Search Optimization,AI search optimization,Search engine optimization trends,Generative Engine Optimization (GEO),seo optimization service,AI search visibility, AI SEO, Digital Marketing Company in Coimbatore,How to get found in ChatGPT, How to optimize for AI search";

const TOC_ITEMS = [
  { id: "intro", num: "00", label: "Introduction" },
  { id: "traditional-seo", num: "01", label: "What Is Traditional SEO?" },
  { id: "ai-search", num: "02", label: "What Is AI Search Optimization?" },
  { id: "comparison", num: "03", label: "SEO vs AI Search Optimization" },
  { id: "why-now", num: "04", label: "Why This Matters Now" },
  { id: "google-says", num: "05", label: "What Does Google Say?" },
  { id: "how-to", num: "06", label: "How to Optimize for AI Search" },
  { id: "chatgpt", num: "07", label: "Getting Found in ChatGPT" },
  { id: "checklist", num: "08", label: "Google AI Search Checklist" },
  { id: "measure", num: "09", label: "Measuring AI Visibility" },
  { id: "mistakes", num: "10", label: "Common Mistakes" },
  { id: "local", num: "11", label: "Local Businesses in Coimbatore" },
  { id: "seo-services-need", num: "12", label: "Do You Still Need SEO Services?" },
  { id: "both", num: "13", label: "Why You Need Both" },
  { id: "conclusion", num: "14", label: "Conclusion" },
  { id: "faq", num: "15", label: "FAQs" },
];

const SEO_PARTS = [
  { b: "Keyword research", rest: "— finding the keywords people use in search engines." },
  { b: "On-page SEO", rest: "— titles, headings, meta descriptions, and useful content." },
  { b: "Technical SEO", rest: "— fast loading, mobile-friendly pages, and good site structure." },
  { b: "Backlinks", rest: "— links from other trusted, relevant websites that build credibility and authority." },
  { b: "Local SEO", rest: "— Google Business Profile, reviews, and local business listings." },
];

const COMPARISON = [
  { point: "Main goal", seo: "Rank high in the list of links", geo: "Be mentioned or cited in the AI answer" },
  { point: "What wins", seo: "Keywords, backlinks, page speed", geo: "Clear answers, trust, original value" },
  { point: "Content style", seo: "Built around keywords", geo: "Built around real questions" },
  { point: "Success looks like", seo: "Clicks and traffic", geo: "Mentions, citations, brand recall" },
  { point: "Where it shows", seo: "Google results page", geo: "ChatGPT, AI Overviews, Perplexity, Gemini" },
  { point: "Measurement", seo: "Rankings, traffic, conversions", geo: "Brand mentions, AI citations, referral visits" },
];

const TRENDS = [
  { b: "Answers come first.", rest: "People want a quick, clear reply, not ten tabs to open." },
  { b: "Conversational searching.", rest: "People ask full questions, like “Which digital marketing company in Coimbatore is good for small businesses?”" },
  { b: "Zero-click behavior.", rest: "Many searches end on the results page." },
  { b: "Brand trust matters more.", rest: "AI tools lean toward sources that look reliable and clear." },
];

const GOOGLE_POINTS = [
  "Content that people find unique, engaging, and helpful will matter more in the long run than any other tip in the guide.",
  "The basics still count: allow crawling in robots.txt, link your pages well inside your site, and give visitors a good page experience.",
  "No special file is needed to appear in AI Overviews or AI Mode, and Google advises writing for people rather than bending your structure around AI systems.",
  "Google’s guidance does not support treating GEO or AEO as a replacement for technical SEO, content quality, and search eligibility.",
];

const STEPS = [
  { num: "01", title: "Answer questions directly", desc: "Put the answer in the first one or two lines under each heading, then explain further. AI tools like content that gets to the point." },
  { num: "02", title: "Write for real questions", desc: "Use headings like “How much does SEO cost?” or “How do I get found in ChatGPT?” Think about how a customer would actually say it out loud." },
  { num: "03", title: "Show real experience (the E-E-A-T approach)", desc: "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness — the quality standard Google uses to judge whether content deserves to be trusted. See the breakdown below." },
  { num: "04", title: "Add something only you can say", desc: "If your article says what every other article says, an AI tool has no reason to pick yours. Add your own data, your own opinion, a local example, or a short story from your work." },
  { num: "05", title: "Keep your technical SEO strong", desc: "Fast loading, mobile-friendly pages, clean links, and structured data (schema) still help search systems understand you. Do not skip these." },
  { num: "06", title: "Build your brand beyond your website", desc: "AI tools learn about businesses from many places. Keep your Google Business Profile updated, collect honest reviews, appear in trusted directories, interviews, and industry write-ups, and use the same business name, address, and details everywhere." },
  { num: "07", title: "Keep content fresh", desc: "Update prices, services, timings, and facts. Old information makes your page less useful." },
];

const EEAT = [
  { b: "Experience:", rest: "share real project results, photos, and case studies." },
  { b: "Expertise:", rest: "add an author name and a short bio with real credentials." },
  { b: "Authoritativeness:", rest: "earn mentions from trusted sites, local news, and industry listings." },
  { b: "Trustworthiness:", rest: "show your address, contact details, reviews, and honest claims." },
];

const CHATGPT_TIPS = [
  "Publish clear, helpful pages that answer common questions.",
  "Make sure your site can be crawled and is not blocked by mistake.",
  "Be mentioned on other trusted websites, not only your own.",
  "Keep your business details consistent across the web.",
  "Use simple language, short sections, and plain headings.",
  "Add FAQs, because they match how people ask questions.",
];

const CHECKLIST = [
  "Pages are indexed and open to crawling",
  "Titles and meta descriptions are clear and honest",
  "Images have useful alt text",
  "Pages load fast on mobile",
  "Internal links connect related pages",
  "Content is original and written for people",
  "Author details and business details are visible",
  "Structured data matches what is on the page",
];

const MEASURE = [
  { b: "Run a monthly question test.", rest: "Write 10 to 15 questions your customers ask. Ask them in ChatGPT, Perplexity, Gemini, and Google. Note whether your brand is named, linked, or missing." },
  { b: "Track brand mentions.", rest: "Count how often your business name appears in AI answers and which pages are cited." },
  { b: "Watch your referral traffic.", rest: "In Google Analytics, look for visits coming from AI tools. These visitors are often few, but they can be ready to buy." },
  { b: "Check Search Console.", rest: "Keep an eye on impressions, clicks, and new reports about how your pages appear in AI features." },
  { b: "Compare with competitors.", rest: "Note who gets named when you do not, and study their pages." },
];

const MISTAKES = [
  { b: "Trying to hack the process.", rest: "Google’s recommendations do not support GEO and AEO as an alternative to regular SEO and good content. There are no magic tricks." },
  { b: "Copying other content.", rest: "Duplicated pages give no reason to select your website. Create content nobody else can." },
  { b: "Neglecting the basics.", rest: "A blocked page, bad speed, or broken links can keep your content out of both search results and AI answers." },
  { b: "Writing for algorithms, not readers.", rest: "Excessive keywords or design tweaks only make content more confusing. Write for your customers first." },
  { b: "Ignoring your brand beyond your website.", rest: "If no reliable site mentions your company, AI tools have less reason to trust it." },
  { b: "Using outdated information.", rest: "Incorrect prices, timings, or services spoil trust very quickly." },
  { b: "Waiting for instant results.", rest: "Building trust takes time. Beware of any SEO optimization services promising guaranteed AI presence." },
];

const LOCAL_TIPS = [
  { b: "Fix your Google Business Profile.", rest: "Add accurate hours, services, photos, and your correct address and phone number." },
  { b: "Collect real reviews.", rest: "Ask happy customers to share honest feedback, and reply to every review." },
  { b: "Create local service pages.", rest: "Write clear pages for your services and areas, such as Peelamedu, RS Puram, Saibaba Colony, or Gandhipuram, if you truly serve them." },
  { b: "Use local proof.", rest: "Share case studies, customer stories, and photos from real Coimbatore projects." },
  { b: "Keep details consistent.", rest: "Your name, address, and phone number should match on every listing." },
  { b: "Update often.", rest: "Google’s new guide gives special attention to local and shopping content, where prices, availability, and store hours change often. Keep those details current." },
];

const PLAN = [
  "Fix your SEO basics.",
  "Write clear, useful, original content.",
  "Show real experience and build trust.",
  "Make answers easy to find.",
  "Track how you appear in both search results and AI tools.",
];

const FAQS = [
  { q: "How does traditional SEO differ from AI search optimization?", a: "Traditional SEO focuses on getting your page ranked in the search result list, which people click to access. AI search optimization focuses on getting your brand cited or recommended in the answers generated by AI tools." },
  { q: "Has SEO been made obsolete by AI search?", a: "No. Google’s own guidelines still lead back to the basics: helpful content, technical SEO, and a good user experience." },
  { q: "What is Generative Engine Optimization (GEO)?", a: "Generative Engine Optimization is the process of making your content easy to understand, trustworthy, and usable by AI systems in their answers. It is also known as AI SEO or Answer Engine Optimization (AEO)." },
  { q: "How do I make my content AI-search friendly?", a: "Provide clear answers, demonstrate your expertise, offer unique insights, maintain a healthy technical website, and build your brand on reputable websites other than your own." },
  { q: "How do I get my content ranked in ChatGPT?", a: "There is no sure-shot way. Publish useful, well-structured content, earn mentions and backlinks from reputable websites, keep your business information consistent, and test by asking the questions your customers ask." },
  { q: "Will AI search decrease my website traffic?", a: "It may reduce clicks for some queries, since people can get answers directly. However, Google says clicks from pages with AI Overviews tend to be higher quality." },
];

const ARTICLES = [
  { title: "Traditional SEO vs AI Search Optimization: What Changes and What Stays the Same", href: "/article/traditional-seo-vs-ai-search-optimization", date: "2026-10-30" },
  { title: "E-Commerce Website Development: A Complete Guide to Features, Platforms, and Strategies", href: "/article/ecommerce-website-development-complete-guide", date: "2026-10-09" },
  { title: "Website Development Cost in India (2026): Real Ranges by Type, Not Guesswork", href: "/article/website-development-cost-in-india", date: "2026-09-01" },
  { title: "SEO for Small Businesses in India: 10 Proven Strategies That Actually Work", href: "/article/seo-strategies-for-small-businesses-india", date: "2026-08-04" },
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
      name: PAGE_TITLE,
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
  headline: PAGE_TITLE,
  description: PAGE_DESC,
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
  datePublished: "2026-10-30T09:00:00+05:30",
  dateModified: "2026-10-30T09:00:00+05:30",
  inLanguage: "en-IN",
  articleSection: "Digital marketing",
  keywords: PAGE_KEYWORDS,
};

// FAQ Schema — built from the same FAQS array shown on the page,
// so the schema always matches the visible content.
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};


// ════════════════════════════════════════════
//  MAIN PAGE
// ════════════════════════════════════════════

function TraditionalSeoVsAiSearch() {
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

        {/* Structured Data (JSON-LD) */}
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
        .tseo-dek{ font-size:18px; color:#6B7A94; line-height:1.5; margin-bottom:24px;}
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

        .tseo-practice-list{ display:grid; gap:14px; margin:18px 0;}
        .tseo-practice-item{ display:grid; grid-template-columns:34px 1fr; gap:14px;}
        .tseo-practice-item .num{ font-family:'JetBrains Mono',monospace; color:#ED8337; font-weight:700; font-size:14px;}
        .tseo-practice-item h4{ font-size:16px; margin-bottom:4px; font-weight:600;}
        .tseo-practice-item p{ margin:0; font-size:14.5px; color:#6B7A94;}
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
        <span>SEO vs AI Search Optimization</span>
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
              <span className="tseo-eyebrow">SEO · AI Search Guide</span>
              <h1>Traditional SEO vs AI Search Optimization: What Changes and What Stays the Same</h1>

              <div className="tseo-hero-img">
                <Link href="/article/traditional-seo-vs-ai-search-optimization">
                  <img src="/img/article/traditional-seo-vs-ai-search-optimization.webp" alt="Traditional SEO vs AI Search Optimization" />
                </Link>
              </div>
            </div>

            <section id="intro">
              <p>
                You search for something. Before you see a single website, a neat answer appears at the top of the page. You read it, get what you need, and leave without clicking anything.
              </p>
              <p>
                This now happens millions of times a day. If you own a business, that raises a worrying question: if people get answers without visiting websites, what happens to the work we put into SEO?
              </p>
              <p>
                The short answer is that SEO is not dead. But the way people find businesses is changing, and the rules are widening. This guide explains traditional SEO vs AI search optimization in plain words. It also shows you what to do about it.
              </p>
            </section>

            <section id="traditional-seo">
              <h2>What Is Traditional SEO?</h2>
              <p>
                Traditional SEO is the practice of improving your website so it ranks higher on search engines like Google. A person types a query, sees a list of links, and clicks one. The main parts of traditional SEO are:
              </p>
              <BoldList items={SEO_PARTS} />
              <p>
                The goal is simple: rank high and earn the click. One easy way to remember it: <strong>SEO ranks pages, while GEO powers answers.</strong>
              </p>
            </section>

            <section id="ai-search">
              <h2>What Is AI Search Optimization?</h2>
              <p>
                AI search optimization means preparing your content so that AI tools can find it, trust it, and use it when answering a question. These tools include ChatGPT, Google AI Overviews, Google AI Mode, Perplexity, and Gemini.
              </p>
              <p>
                It goes by several names: Generative Engine Optimization (GEO), AI SEO, Answer Engine Optimization (AEO), and AI search visibility. The naming is still unsettled, and “answer engine optimization” and “generative search optimization” have gained traction over the last couple of years. Don't let the labels confuse you — they all point to the same idea.
              </p>
              <p>
                GEO means shaping your content and brand information so AI systems use it while generating answers. Success here is not only about clicks, but about having your brand name, quote, or recommendation appear in the answer itself.
              </p>
            </section>

            <section id="comparison">
              <h2>Traditional SEO vs AI Search Optimization</h2>
              <div className="tseo-table-wrap">
                <table className="tseo-tools-table">
                  <tbody>
                    <tr>
                      <th>Point</th>
                      <th>Traditional SEO</th>
                      <th>AI Search Optimization (GEO)</th>
                    </tr>
                    {COMPARISON.map((r) => (
                      <tr key={r.point}>
                        <td><strong>{r.point}</strong></td>
                        <td>{r.seo}</td>
                        <td>{r.geo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>The two are closer than most people think. Good SEO still sits underneath good AI search visibility.</p>
            </section>

            <section id="why-now">
              <h2>Why This Matters Now: Search Engine Optimization Trends</h2>
              <p>Several search engine optimization trends are pushing this change:</p>
              <BoldList items={TRENDS} />
              <p>
                There is also a useful finding from Google: clicks coming from results pages with AI Overviews tend to be higher quality, with people spending more time on the site. So you may get fewer clicks, but the visitors who do arrive can be more serious.
              </p>
            </section>

            <section id="google-says">
              <h2>What Does Google Itself Say?</h2>
              <p>
                In May 2026, Google published its first official guide on how to optimize a site for AI features in Search, announced through the Google Search Central Blog by John Mueller. Here is what stands out for business owners:
              </p>
              <Checklist items={GOOGLE_POINTS} />
              <div className="tseo-callout">
                <p>
                  The lesson is clear: do not chase tricks. Build a strong base, then make your content easy to understand and easy to quote. This is the heart of Google AI search optimization.
                </p>
              </div>
            </section>

            <section id="how-to">
              <h2>How to Optimize for AI Search: A Practical Plan</h2>
              <p>
                Here is a simple way to start. It applies whether you run a shop, a clinic, a school, or a service business. If you are wondering how to optimize for AI search, begin with these steps.
              </p>
              <div className="tseo-practice-list">
                {STEPS.map((s) => (
                  <div className="tseo-practice-item" key={s.num}>
                    <div className="num">{s.num}</div>
                    <div>
                      <h4>{s.title}</h4>
                      <p>{s.desc}</p>
                      {s.num === "03" && <BoldList items={EEAT} />}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="chatgpt">
              <h2>How to Rank in ChatGPT and Get Found in ChatGPT</h2>
              <p>
                Many people ask how to rank in ChatGPT, so here is an honest answer: nobody can guarantee a place in ChatGPT. There is no button to press. But if you want to get found in ChatGPT, you can raise your chances:
              </p>
              <Checklist items={CHATGPT_TIPS} />
              <p>
                Then test it. Ask ChatGPT, Perplexity, and Google the questions your customers would ask. Note whether your brand appears, and which sites appear instead. That tells you what to improve.
              </p>
            </section>

            <section id="checklist">
              <h2>Google AI Search Optimization: Quick Checklist</h2>
              <Checklist items={CHECKLIST} />
            </section>

            <section id="measure">
              <h2>How to Measure AI Search Visibility</h2>
              <p>
                You cannot improve what you do not track. AI search visibility is harder to measure than rankings, but it is not impossible. Start with these simple methods:
              </p>
              <BoldList items={MEASURE} />
              <p>
                Seeing AI-written summaries that mention your content is a chance to improve your clarity, and over time this kind of visibility may become its own performance measure. Treat it as a new column next to rankings and traffic, not a replacement for them.
              </p>
            </section>

            <section id="mistakes">
              <h2>Common Mistakes to Avoid in AI Search Optimization</h2>
              <p>As more companies get involved in AI SEO, a few mistakes keep showing up:</p>
              <BoldList items={MISTAKES} />
            </section>

            <section id="local">
              <h2>AI Search Optimization for Local Businesses in Coimbatore</h2>
              <p>
                Local searches are some of the best examples of how AI answers work. A person might ask, “Best textile machinery supplier in Coimbatore” or “Which digital marketing company in Coimbatore helps small businesses grow?” The AI tool then builds a short list from what it can find and trust. Here is how a local business can improve its chances:
              </p>
              <BoldList items={LOCAL_TIPS} />
              <p>
                Local knowledge is a real advantage. Big national websites cannot easily match a business that truly understands its own city and customers.
              </p>
            </section>

            <section id="seo-services-need">
              <h2>Do You Still Need SEO Optimization Services?</h2>
              <p>
                Yes — even more than before. A quality SEO optimization company today takes care of both: the traditional techniques for gaining rankings and the newer techniques for getting mentioned by AI.
              </p>
              <p>
                If you run a local business, working with an experienced Digital Marketing Company in Coimbatore can help, since local insight matters. The team should understand your market, your customers, and the questions they usually ask in your city. Choose a reputable SEO company that is open about its process, and be wary of anyone who promises high rankings or AI placements in advance.
              </p>
              <h3>A Small Example</h3>
              <p>
                Consider two Coimbatore textile manufacturers, both ranking on page one for the same keyword. One has a small service page with a few keyword-stuffed lines. The other has a well-written page covering fabric types, minimum order quantity, delivery time, and real customer experiences, plus an FAQ section and an author bio.
              </p>
              <p>
                Which company do you think will be easier to cite when someone asks an AI tool for a trustworthy manufacturer?
              </p>
            </section>

            <section id="both">
              <h2>Why You Need Both: SEO and AI Search Together</h2>
              <p>
                Traditional SEO and AI search optimization are not enemies. SEO gets you found by search engines. Generative Engine Optimization (GEO) helps you get quoted by answer engines. Today's visibility needs both. The plan is simple:
              </p>
              <Checklist items={PLAN} />
            </section>

            <section id="conclusion">
              <h2>Conclusion</h2>
              <p>
                The debate around traditional SEO vs AI search optimization is not about picking a winner. It is about understanding what each one does best. Traditional SEO gives you a proven, measurable base. It brings steady traffic, works well for local and buying searches, and builds the trust that search engines look for. Its weakness is that rankings alone no longer guarantee a click, or a mention in an AI answer.
              </p>
              <p>
                AI search optimization, also called Generative Engine Optimization (GEO), fills that gap. It helps your brand get named in ChatGPT and Google AI search, and it rewards clear, original, helpful content. The downside is that results are harder to measure, and the field is still changing.
              </p>
              <p>
                Put together, the two cover each other's weak spots. Google's own guidance agrees that useful content and a healthy website still matter most. So fix your basics, answer real questions, show real experience, and track your AI search visibility every month.
              </p>
              <p>
                If you run a business in Tamil Nadu, now is a smart time to start. Work with <Link className="tseo-inline-link" to="/seo">Priyam Consultancy Services</Link>, a team that understands both approaches, and make your brand easy to find on Google and in AI answers.
              </p>
            </section>

            <div className="tseo-cta-banner" id="cta-middle">
              <div>
                <h3>Is Your Business Ready for the Shift to AI Search?</h3>
                <p>
                  Priyam Consultancy Services helps businesses stay visible on Google and in AI answers like ChatGPT. We'll review your website, fix your SEO basics, and build content that AI tools can trust and quote, so your brand gets found when customers ask questions.
                </p>
              </div>
              <Link className="tseo-cta-btn" to="/contact-us">
                Improve Your AI Search Visibility Today →
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

export default TraditionalSeoVsAiSearch;