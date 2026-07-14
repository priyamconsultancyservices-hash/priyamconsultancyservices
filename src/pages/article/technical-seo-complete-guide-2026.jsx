import React, { useEffect, useRef, useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";

// ════════════════════════════════════════════
//  DATA
// ════════════════════════════════════════════

const TOC_ITEMS = [
  { id: "intro", num: "00", label: "Introduction" },
  { id: "takeaways", num: "01", label: "Key Takeaways" },
  { id: "what-is", num: "02", label: "What Is Technical SEO?" },
  { id: "why-matters", num: "03", label: "Why It Matters" },
  { id: "benefits", num: "04", label: "Benefits" },
  { id: "core-guide", num: "05", label: "Core Guide" },
  { id: "best-practices", num: "06", label: "Best Practices" },
  { id: "mistakes", num: "07", label: "Common Mistakes" },
  { id: "stats", num: "08", label: "Stats & Research" },
  { id: "tools", num: "09", label: "Tools & Resources" },
  { id: "faq", num: "10", label: "FAQs" },
  { id: "conclusion", num: "11", label: "Conclusion" },
];

const BENEFITS = [
  { ico: "01", title: "Higher crawl efficiency", desc: "Search engines spend their budget on pages that matter, not redirect chains and duplicates." },
  { ico: "02", title: "Faster page experience", desc: "Improved Core Web Vitals correlate with lower bounce rates and higher conversion." },
  { ico: "03", title: "Cleaner indexation", desc: "Fewer thin, duplicate, or orphaned pages competing against your priority content." },
  { ico: "04", title: "Stronger EEAT signals", desc: "Secure, stable, well-structured sites support trust signals search engines weigh heavily." },
];

const PRACTICES = [
  { num: "01", title: "Keep crawl depth under 4 clicks", desc: "Any page more than four clicks from the homepage is statistically less likely to be crawled regularly." },
  { num: "02", title: "Serve a clean, single canonical per page", desc: "Inconsistent canonical signals split ranking authority across duplicate URLs." },
  { num: "03", title: "Defer non-critical JavaScript", desc: "Render-blocking scripts are the single most common cause of poor LCP scores we see in audits." },
  { num: "04", title: "Maintain an accurate XML sitemap", desc: "Only include canonical, indexable, 200-status URLs — stale sitemaps actively mislead crawlers." },
  { num: "05", title: "Run a technical audit quarterly", desc: "Sites accumulate technical debt continuously; an annual cadence lets issues compound unnoticed." },
];

const MISTAKES = [
  { b: "Blocking key resources in robots.txt", rest: "— CSS and JS files blocked from crawling prevent Google from rendering pages correctly." },
  { b: "Mixing redirect types inconsistently", rest: "— chaining 302s instead of single 301s dilutes link equity and slows crawling." },
  { b: "Ignoring mobile rendering differences", rest: "— content hidden on mobile may not be indexed under mobile-first indexing." },
  { b: "Treating a one-time audit as \"done\"", rest: "— technical debt resumes accumulating the moment the audit ends." },
];

const STATS = [
  { num: "53%", label: "of mobile visitors abandon pages that take longer than 3 seconds to load" },
  { num: "68%", label: "of online experiences begin with a search engine query" },
  { num: "4.6x", label: "more crawl requests on sites with clean internal linking structures" },
];

const TOOLS = [
  { tool: "Google Search Console", best: "Indexation, crawl stats, Core Web Vitals", tier: "Free" },
  { tool: "Screaming Frog", best: "Full-site technical crawls", tier: "Free / Paid" },
  { tool: "PageSpeed Insights", best: "Field & lab performance data", tier: "Free" },
  { tool: "Sitebulb", best: "Visual crawl audits & hints", tier: "Paid" },
  { tool: "Schema Markup Validator", best: "Structured data validation", tier: "Free" },
];

const FAQS = [
  { q: "How often should I run a technical SEO audit?", a: "Quarterly for most active sites. High-velocity content sites or frequently redesigned sites benefit from monthly spot-checks on crawl and indexation." },
  { q: "Does technical SEO affect rankings directly?", a: "Yes, partially. Core Web Vitals are a confirmed ranking factor, and crawl/indexation issues can prevent pages from ranking at all, regardless of content quality." },
  { q: "What's the difference between technical and on-page SEO?", a: "Technical SEO governs crawlability, speed, and infrastructure. On-page SEO governs content relevance, keyword targeting, and page-level signals like titles and headers." },
  { q: "Can I do technical SEO without a developer?", a: "Basic fixes — sitemaps, meta tags, redirects — are manageable without a developer. Rendering, server config, and Core Web Vitals work typically require engineering support." },
];

// Related Articles are pulled live from the PCS WordPress blog (title + featured image),
// same source/shape as BlogSection.jsx. Only the 4 most recent posts are shown.
const RELATED_ARTICLES_API =
  "https://www.priyamconsultancy.com/blog/wp-json/wp/v2/posts?_embed&per_page=4";

// Popular Articles = your own site pages (not blog posts). Edit this list to match
// whichever 10 pages you want featured here — label is the text shown, href is the page link.
const ARTICLES = [
  {
    title: "Technical SEO: The Complete Guide for 2026",
    href: "/article/technical-seo-complete-guide-2026",
    date: "2026-06-14",
  },
  // { title: "Your Next Article Title", href: "/article/your-next-article-slug", date: "2026-07-20" },
];

const RECENT_ARTICLES = [...ARTICLES]
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 4);



const HUB_LINKS = [
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "SEO", href: "/seo" },
  { label: "PPC / Performance Marketing", href: "/performance-marketing" },
  { label: "Social Media Marketing", href: "/social-media" },
  { label: "Content Marketing", href: "/content-marketing" },
  { label: "Email Marketing", href: "/email-marketing" },
  { label: "Website Development", href: "/website-development" },
  { label: "Graphic Design", href: "/graphic-design" },
];


const JSON_LD_ARTICLE = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Technical SEO: The Complete Guide for 2026",
  description:
    "A complete, practitioner-grade guide to technical SEO — what it is, why it matters, and how to audit and fix the issues that hold sites back.",
  author: { "@type": "Person", name: "Rhea Menon", jobTitle: "Senior SEO Strategist" },
  publisher: {
    "@type": "Organization",
    name: "Priyam Consultancy Services",
    logo: { "@type": "ImageObject", url: "https://priyamconsultancy.com/img/priyam-consultancy-logo.png" },
  },
  dateModified: "2026-06-12",
  mainEntityOfPage: "https://priyamconsultancy.com/article/technical-seo-complete-guide-2026",
};

// ════════════════════════════════════════════
//  FAQ ITEM
// ════════════════════════════════════════════

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className={`tseo-faq-item${isOpen ? " open" : ""}`}>
      <button className="tseo-faq-q" onClick={onToggle}>
        <span>{q}</span>
        <span className="tseo-plus">+</span>
      </button>
      <div className="tseo-faq-a" style={{ maxHeight: isOpen ? "300px" : "0px" }}>
        <p>{a}</p>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════
//  MAIN PAGE
// ════════════════════════════════════════════

function TechnicalSeoGuide() {
  const [activeSection, setActiveSection] = useState("intro");
  const [progress, setProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const sectionRefs = useRef({});

  // Related Articles — fetched live from the PCS WordPress blog (title + featured image only)
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

  return (
    <Layout
      title="Technical SEO: The Complete Guide for 2026"
      description="A complete, practitioner-grade guide to technical SEO — what it is, why it matters, and how to audit and fix the issues that hold sites back. By Priyam Consultancy Services."
    >
      <Head>
        <link rel="canonical" href="https://priyamconsultancy.com/article/technical-seo-complete-guide-2026" />
        <meta property="og:title" content="Technical SEO: The Complete Guide for 2026 | Priyam Consultancy Services" />
        <meta
          property="og:description"
          content="A complete, practitioner-grade guide to technical SEO — what it is, why it matters, and how to audit and fix the issues that hold sites back."
        />
        <meta property="og:url" content="https://priyamconsultancy.com/article/technical-seo-complete-guide-2026" />
        <meta property="og:site_name" content="Priyam Consultancy Services" />
        <script type="application/ld+json">{JSON.stringify(JSON_LD_ARTICLE)}</script>
      </Head>

      <style>{`
        .tseo-mono{font-family:'JetBrains Mono',monospace;}
        .tseo-breadcrumb{ padding:30px 24px; font-size:13px; color:var(--muted,#6B7A94);}
        .tseo-breadcrumb a{color:var(--muted,#6B7A94); border-bottom:1px dotted transparent;}
        .tseo-breadcrumb a:hover{color:#ED8337; border-bottom-color:#ED8337;}
        .tseo-breadcrumb .sep{margin:0 6px; color:#F0E0D0;}

        .tseo-page{
          max-width:1320px; margin:0 auto;
          display:grid;
          grid-template-columns:240px minmax(0,1fr) 300px;
          gap:40px;
          padding:24px 24px 80px;
          align-items:start;
          font-family:'Poppins',system-ui,sans-serif;
          color:#0D1F3C;
        }
        .tseo-page a{ color:inherit; text-decoration:none; }
        .tseo-page h1,.tseo-page h2,.tseo-page h3,.tseo-page h4{ font-family:'Poppins',system-ui,sans-serif; font-weight:700; line-height:1.22; margin:0; color:#0D1F3C;}

        /* LEFT SIDEBAR : TOC */
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

        /* CENTER CONTENT */
        .tseo-content{ max-width:760px; min-width:0; }
        .tseo-hero{ padding:8px 0 28px; }
        .tseo-eyebrow{ font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:#ED8337; font-weight:700; margin-bottom:14px; display:inline-flex; align-items:center; gap:8px; background:#FFF4EE; padding:5px 10px; border-radius:8px;}
        .tseo-hero h1{ font-size:42px; font-weight:700; letter-spacing:-.01em; margin-bottom:18px;}
        .tseo-dek{ font-size:18px; color:#6B7A94; line-height:1.5; margin-bottom:24px;}
        .tseo-meta-row{ display:flex; flex-wrap:wrap; align-items:center; gap:18px; font-size:13.5px; color:#6B7A94; margin-bottom:22px;}
        .tseo-author{ display:flex; align-items:center; gap:8px; color:#0D1F3C; font-weight:600;}
        .tseo-avatar{ width:34px; height:34px; border-radius:50%; background:#0D1F3C; color:#FFFDFB; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:700; flex-shrink:0;}
        .tseo-meta-dot{ width:4px; height:4px; border-radius:50%; background:#F0E0D0;}
        .tseo-hero-img{ width:100%; aspect-ratio:16/8; border-radius:14px; object-fit:cover;  display:flex; align-items:center; justify-content:center; color:#fff; text-align:center; font-size:15px; padding:20px;}

        .tseo-takeaways{ background:#0D1F3C; color:#FFFDFB; border-radius:14px; padding:28px 30px; margin-bottom:36px;}
        .tseo-takeaways h3{ color:#ED8337; font-size:13px; text-transform:uppercase; letter-spacing:.1em; margin-bottom:16px;}
        .tseo-takeaways ul{ margin:0; padding:0; list-style:none; display:grid; gap:12px;}
        .tseo-takeaways li{ display:flex; gap:12px; font-size:14.5px; line-height:1.55; color:#fff;}
        .tseo-takeaways li::before{ content:"→"; color:#ED8337; font-weight:700; flex-shrink:0;}

        .tseo-content section{ margin-bottom:48px; }
        .tseo-content h2{ font-size:27px; font-weight:700; margin-bottom:16px; scroll-margin-top:24px; letter-spacing:-.005em;}
        .tseo-h2-index{ font-family:'JetBrains Mono',monospace; color:#ED8337; font-size:14px; margin-right:10px; font-weight:500;}
        .tseo-content h3{ font-size:19px; font-weight:600; margin:22px 0 10px;}
        .tseo-content p{ font-size:15px; line-height:1.75; color:#6B7A94; margin:0 0 16px;}
        .tseo-content ul, .tseo-content ol{ font-size:16px; line-height:1.75; color:#2B362F; padding-left:22px; margin:0 0 16px;}
        .tseo-content li{ margin-bottom:6px; }
        .tseo-content strong{ color:#0D1F3C; }
        .tseo-inline-link{ color:#ED8337; border-bottom:1px solid #FFF4EE; font-weight:500;}
        .tseo-inline-link:hover{ border-bottom-color:#ED8337; }

        .tseo-benefit-grid{ display:grid; grid-template-columns:1fr 1fr; gap:14px; margin:20px 0 8px;}
        .tseo-benefit-card{ border:1px solid #F0E0D0; border-radius:14px; padding:18px; background:#fff;}
        .tseo-benefit-card .ico{ font-family:'JetBrains Mono',monospace; color:#ED8337; font-size:12px; margin-bottom:8px; font-weight:700;}
        .tseo-benefit-card h4{ font-size:15.5px; font-weight:600; margin-bottom:6px;}
        .tseo-benefit-card p{ font-size:13.5px; margin:0; color:#6B7A94; line-height:1.5;}

        .tseo-practice-list{ display:grid; gap:14px; margin:18px 0;}
        .tseo-practice-item{ display:grid; grid-template-columns:34px 1fr; gap:14px; padding:16px 0; border-bottom:1px solid #F0E0D0;}
        .tseo-practice-item .num{ font-family:'JetBrains Mono',monospace; color:#ED8337; font-weight:700; font-size:14px;}
        .tseo-practice-item h4{ font-size:16px; margin-bottom:4px; font-weight:600;}
        .tseo-practice-item p{ margin:0; font-size:14.5px; color:#6B7A94;}

        .tseo-mistake-list{ display:grid; gap:10px; margin:18px 0;}
        .tseo-mistake-item{ display:flex; gap:12px; padding:14px 16px; background:#FBEFEA; border-left:3px solid #C2492E; border-radius:14px; font-size:14.5px; color:#3a2a23;}
        .tseo-mistake-item b{ color:#7A2E1B; }

        .tseo-expert-box{ border:1px solid #F0E0D0; border-left:4px solid #ED8337; background:#fff; border-radius:14px; padding:24px 26px; margin:26px 0; display:flex; gap:18px;}
        .tseo-expert-box blockquote{ margin:0 0 10px; font-size:17px; line-height:1.5; font-style:italic; color:#0D1F3C;}
        .tseo-expert-box .who{ font-size:13px; color:#6B7A94; font-weight:600;}

        .tseo-stat-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:14px; margin:20px 0;}
        .tseo-stat-card{ background:#FFF4EE; border-radius:14px; padding:20px 16px; text-align:left;}
        .tseo-stat-card .num{ font-size:30px; font-weight:700; color:#ED8337; display:block; margin-bottom:4px;}
        .tseo-stat-card .label{ font-size:12.5px; color:#2B362F; line-height:1.4;}
        .tseo-stat-source{ font-size:12px; color:#6B7A94; margin-top:6px;}

        .tseo-tools-table{ width:100%; border-collapse:collapse; margin:18px 0; font-size:14.5px;}
        .tseo-tools-table th{ text-align:left; padding:10px 12px; background:#FFF0E6; font-size:12px; text-transform:uppercase; letter-spacing:.05em; color:#6B7A94; font-weight:700;}
        .tseo-tools-table td{ padding:12px 12px; border-bottom:1px solid #F0E0D0; color:#2B362F;}
        .tseo-tools-table tr:last-child td{ border-bottom:none;}

        .tseo-faq-item{ border-bottom:1px solid #F0E0D0; }
        .tseo-faq-q{ width:100%; text-align:left; background:none; border:none; cursor:pointer; padding:18px 0; font-size:16px; font-weight:600; color:#0D1F3C; display:flex; justify-content:space-between; align-items:center; gap:12px;}
        .tseo-plus{ font-family:'JetBrains Mono',monospace; color:#ED8337; font-size:18px; transition:transform .2s ease; flex-shrink:0;}
        .tseo-faq-item.open .tseo-plus{ transform:rotate(45deg); }
        .tseo-faq-a{ max-height:0; overflow:hidden; transition:max-height .25s ease; }
        .tseo-faq-a p{ padding-bottom:18px; color:#6B7A94; font-size:15px; margin:0;}

        .tseo-conclusion-box{ background:#FFF0E6; border-radius:14px; padding:26px 28px; }

        .tseo-cta-banner{ background:linear-gradient(120deg,#ED8337,#0D1F3C 110%); color:#FFFDFB; border-radius:14px; padding:36px 34px; margin:48px 0; display:flex; align-items:center; justify-content:space-between; gap:24px; flex-wrap:wrap;}
        .tseo-cta-banner h3{ color:#fff; font-size:22px; margin-bottom:8px;}
        .tseo-cta-banner p{ color:#D9E6DE; font-size:14.5px; margin:0; max-width:420px;}
        .tseo-cta-btn{ background:#ED8337; color:#2A1000; font-weight:700; padding:13px 24px; border-radius:10px; font-size:14px; white-space:nowrap; letter-spacing:.01em; transition:transform .15s ease; display:inline-block;}
        .tseo-cta-btn:hover{ transform:translateY(-1px); }

        .tseo-author-bio{ display:flex; gap:18px; border-top:1px solid #F0E0D0; padding-top:30px; margin-top:8px;}
        .tseo-author-bio .tseo-avatar{ width:56px; height:56px; font-size:18px; }
        .tseo-author-bio h4{ font-size:16px; margin-bottom:4px;}
        .tseo-author-bio .role{ font-size:13px; color:#ED8337; font-weight:600; margin-bottom:8px;}
        .tseo-author-bio p{ font-size:14px; color:#6B7A94; margin:0; line-height:1.6;}

        /* RIGHT SIDEBAR */
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
        .tseo-article-card .meta{ font-size:11px; color:#ED8337; font-weight:700; text-transform:uppercase; letter-spacing:.04em; margin-bottom:3px;}
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
          .tseo-stat-grid{ grid-template-columns:1fr 1fr;}
        }
        @media (max-width:640px){
          .tseo-hero h1{ font-size:30px; }
          .tseo-benefit-grid, .tseo-stat-grid{ grid-template-columns:1fr; }
          .tseo-cta-banner{ flex-direction:column; align-items:flex-start; }
          .tseo-expert-box{ flex-direction:column; }
        }
      `}</style>

      {/* Breadcrumb */}
      <nav className="tseo-breadcrumb">
        <Link to="/">Home</Link>
        <span className="sep">/</span>
        <Link to="/blog">Resources</Link>
        <span className="sep">/</span>
        <Link to="/seo">Technical SEO</Link>
        <span className="sep">/</span>
        <span>Complete Guide</span>
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
              <span className="tseo-eyebrow">Technical SEO · Updated Guide</span>
              <h1>Technical SEO: The Complete Guide for 2026</h1>
              <p className="tseo-dek">
                Everything you need to audit, fix, and maintain the technical foundation search engines rely on to
                crawl, render, and rank your site.
              </p>
              <div className="tseo-meta-row">
                <div className="tseo-author">
                  <div className="tseo-avatar">RM</div>
                  Rhea Menon, Senior SEO Strategist
                </div>
                <span className="tseo-meta-dot" />
                <span>Last updated: June 14, 2026</span>
                <span className="tseo-meta-dot" />
              
                <span>Reviewed by SEO Editorial Team</span>
              </div>
              <div className="tseo-hero-img" style={{ padding: 0 }}>
              <img src="/img/portfolio.png" />
              </div>
            </div>

            <section id="intro">
              <p>
                Most ranking conversations focus on content and links. But none of that matters if search engines
                can't crawl, render, or index your pages in the first place. <strong>Technical SEO</strong> is the
                layer underneath everything else — the plumbing that determines whether your best content ever gets
                a chance to compete.
              </p>
              <p>
                This guide breaks down what technical SEO actually covers, why it has an outsized impact on
                rankings, and the exact audit process we use with clients before any content or link-building work
                begins. If you manage a site of any size, treat this as a reference you'll return to, not a
                one-time read.
              </p>
            </section>

            <div className="tseo-takeaways" id="takeaways">
              <h3>Key Takeaways</h3>
              <ul>
                <li>
                  Technical SEO controls whether search engines can crawl, render, and index your site at all —
                  it's a prerequisite, not an optional layer.
                </li>
                <li>Core Web Vitals, crawl budget, and structured data are the three areas with the highest ROI for most mid-size sites.</li>
                <li>A technical audit should run quarterly, not once a year — site changes accumulate technical debt quickly.</li>
                <li>Render-blocking JavaScript and duplicate content are the two most common issues we find in client audits.</li>
                <li>Fixing technical issues typically shows ranking movement faster than content or link campaigns — often within 4–8 weeks.</li>
              </ul>
            </div>

            <section id="what-is">
              <h2><span className="tseo-h2-index">02</span>What Is Technical SEO?</h2>
              <p>
                Technical SEO is the practice of optimizing a website's infrastructure so search engines can
                efficiently <strong>crawl, render, and index</strong> its pages, and so users get a fast, stable
                experience once they arrive. It sits apart from on-page SEO (content, keywords) and off-page SEO
                (links, citations) — it's the foundation those two layers are built on.
              </p>
              <p>
                In practice, technical SEO spans site architecture, crawl management, page speed, mobile usability,
                structured data, security, and rendering behavior for JavaScript-heavy frameworks. For a broader
                view of how this fits into the discipline as a whole, see our{" "}
                <Link className="tseo-inline-link" to="/seo">SEO services</Link> overview.
              </p>
            </section>

            <section id="why-matters">
              <h2><span className="tseo-h2-index">03</span>Why Technical SEO Matters</h2>
              <p>
                Search engines operate under finite resources. Googlebot allocates a <strong>crawl budget</strong>{" "}
                to every site, and rendering JavaScript costs significantly more compute than parsing static HTML.
                When your site wastes that budget on broken redirects, duplicate URLs, or bloated scripts,
                important pages get crawled less often — or not at all.
              </p>
              <p>
                Beyond crawling, technical health is now a direct ranking input. Core Web Vitals are part of
                Google's page experience signals, and sites with poor load performance see measurably lower
                engagement and conversion, independent of rankings. Technical SEO is where{" "}
                <Link className="tseo-inline-link" to="/seo">Local SEO</Link>,{" "}
                <Link className="tseo-inline-link" to="/content-marketing">Content Marketing</Link>, and content
                strategy all converge — weak infrastructure caps the ceiling on every other channel.
              </p>
            </section>

            <section id="benefits">
              <h2><span className="tseo-h2-index">04</span>Benefits of Strong Technical SEO</h2>
              <div className="tseo-benefit-grid">
                {BENEFITS.map((b) => (
                  <div className="tseo-benefit-card" key={b.ico}>
                    <div className="ico">{b.ico}</div>
                    <h4>{b.title}</h4>
                    <p>{b.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="core-guide">
              <h2><span className="tseo-h2-index">05</span>The Core Guide: Running a Technical SEO Audit</h2>
              <h3>Step 1 — Crawl the site</h3>
              <p>
                Start with a full crawl using a tool like Screaming Frog or Sitebulb. Export status codes,
                indexability, canonical tags, and response times for every URL. This becomes your baseline.
              </p>
              <h3>Step 2 — Check indexation against crawl</h3>
              <p>
                Compare the URLs Google has indexed (via Search Console) against the URLs your crawl found. Large
                gaps in either direction signal either wasted crawl budget or content Google can't access.
              </p>
              <h3>Step 3 — Audit Core Web Vitals</h3>
              <p>
                Pull field data from CrUX or PageSpeed Insights for your highest-traffic templates. Prioritize
                Largest Contentful Paint and Interaction to Next Paint — both have outsized effects on
                user-perceived speed.
              </p>
              <h3>Step 4 — Review structured data</h3>
              <p>
                Validate schema markup across key templates. Errors here can disqualify pages from rich results
                entirely, silently costing click-through rate.
              </p>
              <h3>Step 5 — Map internal linking</h3>
              <p>
                Identify orphaned pages and overly deep click-depth pages. A strong internal linking structure,
                like the one supporting this guide, distributes authority to priority pages and reinforces topical
                relationships for crawlers. Learn more in our{" "}
                <Link className="tseo-inline-link" to="/seo">SEO</Link> guide.
              </p>
            </section>

            <section id="best-practices">
              <h2><span className="tseo-h2-index">06</span>Best Practices</h2>
              <div className="tseo-practice-list">
                {PRACTICES.map((p) => (
                  <div className="tseo-practice-item" key={p.num}>
                    <div className="num">{p.num}</div>
                    <div>
                      <h4>{p.title}</h4>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="mistakes">
              <h2><span className="tseo-h2-index">07</span>Common Mistakes</h2>
              <div className="tseo-mistake-list">
                {MISTAKES.map((m) => (
                  <div className="tseo-mistake-item" key={m.b}>
                    <span>✕</span>
                    <span>
                      <b>{m.b}</b> {m.rest}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <div className="tseo-expert-box">
              <div className="tseo-avatar">VK</div>
              <div>
                <blockquote>
                  "The fastest ranking gains I've seen in fifteen years of SEO work have almost always come from
                  fixing crawl and rendering issues — not from writing more content."
                </blockquote>
                <div className="who">Vikram Kapoor — Technical SEO Lead, 15+ years in enterprise SEO</div>
              </div>
            </div>

            <section id="stats">
              <h2><span className="tseo-h2-index">08</span>Statistics &amp; Research</h2>
              <div className="tseo-stat-grid">
                {STATS.map((s) => (
                  <div className="tseo-stat-card" key={s.num}>
                    <span className="num">{s.num}</span>
                    <span className="label">{s.label}</span>
                  </div>
                ))}
              </div>
              <p className="tseo-stat-source">
                Figures are illustrative benchmarks based on aggregated industry research; replace with sourced,
                cited statistics from Google, industry studies, or first-party data before publishing.
              </p>
            </section>

            <section id="tools">
              <h2><span className="tseo-h2-index">09</span>Tools &amp; Resources</h2>
              <table className="tseo-tools-table">
                <tbody>
                  <tr>
                    <th>Tool</th>
                    <th>Best for</th>
                    <th>Tier</th>
                  </tr>
                  {TOOLS.map((t) => (
                    <tr key={t.tool}>
                      <td>{t.tool}</td>
                      <td>{t.best}</td>
                      <td>{t.tier}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>
                For a structured walkthrough, see our <Link className="tseo-inline-link" to="/seo">SEO Audit</Link>{" "}
                checklist.
              </p>
            </section>

            <section id="faq">
              <h2><span className="tseo-h2-index">10</span>Frequently Asked Questions</h2>
              <div>
                {FAQS.map((f, i) => (
                  <FaqItem
                    key={f.q}
                    q={f.q}
                    a={f.a}
                    isOpen={openFaq === i}
                    onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                  />
                ))}
              </div>
            </section>

            <div className="tseo-conclusion-box" id="conclusion">
              <h2 style={{ marginBottom: "12px" }}>Conclusion</h2>
              <p>
                Technical SEO is not a one-time checklist — it's ongoing infrastructure work that determines
                whether everything else you do in SEO has a chance to work. Start with crawl and indexation, fix
                the highest-impact Core Web Vitals issues, and build a quarterly audit cadence into your workflow.
                The sites that treat technical health as a habit consistently outperform the ones that treat it as
                a launch-day task.
              </p>
            </div>

            <div className="tseo-cta-banner" id="cta">
              <div>
                <h3>Need a technical SEO audit?</h3>
                <p>
                  Get a free, no-obligation consultation from Priyam Consultancy Services and a prioritized list of
                  the issues holding your site back.
                </p>
              </div>
              <Link className="tseo-cta-btn" to="/contact-us">
                Get a Free SEO Consultation →
              </Link>
            </div>

            <div className="tseo-author-bio">
              <div className="tseo-avatar">RM</div>
              <div>
                <h4>Rhea Menon</h4>
                <div className="role">Senior SEO Strategist, Priyam Consultancy Services</div>
                <p>
                  Rhea leads technical SEO programs for enterprise and mid-market clients at Priyam Consultancy
                  Services, specializing in crawl optimization, Core Web Vitals, and large-scale site migrations.
                  She holds certifications in Google Analytics and Search Console, and contributes regularly to the
                  PCS Resource Center.
                </p>
              </div>
            </div>
          </article>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="tseo-rail">
          <div className="tseo-rail-card">
            <div className="tseo-rail-title"> Digital Marketing Learning Hub</div>
            <div className="tseo-hub-grid">
              {HUB_LINKS.map((l) => (
                <Link className="tseo-hub-link" to={l.href} key={l.href}>
                  {l.label} <span className="arrow">→</span>
                </Link>
              ))}
            </div>
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
                  {a.thumbnail && (
                    <img src={a.thumbnail} alt={a.title} loading="lazy" />
                  )}
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

          <div className="tseo-rail-card tseo-rail-cta">
            <h4>Need professional SEO services?</h4>
            <p>
              Get a free SEO consultation and a custom roadmap from our team at Priyam Consultancy Services — no
              commitment required.
            </p>
            <Link className="tseo-cta-btn" to="/contact-us">
              Get a Free SEO Consultation
            </Link>
            <div className="trust">Trusted by 200+ growth teams · Coimbatore</div>
          </div>
        </aside>
      </div>
    </Layout>
  );
}

export default TechnicalSeoGuide;