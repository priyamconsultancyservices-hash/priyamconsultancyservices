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
  { id: "what-is", num: "02", label: "What Is SEO for Small Business?" },
  { id: "why-matters", num: "03", label: "Why It Matters in India" },
  { id: "benefits", num: "04", label: "Why SEO Works Differently in India" },
  { id: "core-guide", num: "05", label: "10 Proven Strategies" },
  { id: "best-practices", num: "06", label: "Quick-Win Best Practices" },
  { id: "mistakes", num: "07", label: "Common Mistakes" },
  { id: "stats", num: "08", label: "Stats & Research" },
  { id: "tools", num: "09", label: "Tools & Resources" },
  { id: "faq", num: "10", label: "FAQs" },
  { id: "conclusion", num: "11", label: "Conclusion" },
];

const BENEFITS = [
  { ico: "01", title: "Mobile is the default", desc: "Over 70% of Indian internet users browse primarily on smartphones — mobile SEO isn't optional, it's survival." },
  { ico: "02", title: "Tier-2 & tier-3 are booming", desc: "Smaller cities are the fastest-growing segments for internet adoption, with rural users growing rapidly year on year." },
  { ico: "03", title: "Google owns the market", desc: "Google drives the overwhelming majority of organic search traffic in India, so ranking there is non-negotiable." },
  { ico: "04", title: "Voice search is rising", desc: "Voice search in Hindi and regional languages is growing fastest in smaller cities — most competitors are still ignoring it." },
];

const PRACTICES = [
  { num: "01", title: "Keep your Google Business Profile active", desc: "Post updates weekly and respond to every review within 24 hours — Google rewards active, complete profiles." },
  { num: "02", title: "Go long-tail and local with keywords", desc: "\"Web designer Salem\" ranks faster and converts better than a broad, unqualified term like \"web designer India.\"" },
  { num: "03", title: "Keep title tags under 60 characters", desc: "Include your primary keyword naturally in the title tag, H1, and the first 100 words of the page." },
  { num: "04", title: "Get your site under 2 seconds", desc: "Compress images, enable caching and GZIP, and use a CDN — bounce rates rise sharply past the 2-second mark." },
  { num: "05", title: "Publish consistently, not occasionally", desc: "Aim for at least 1,000 words per article, published a minimum of twice a month, each answering a real reader question." },
];

const MISTAKES = [
  { b: "Inconsistent business details across directories", rest: "— even small differences like \"Road\" vs \"Rd\" or +91 vs 0 confuse Google and hurt local rankings." },
  { b: "Ignoring mobile-first indexing", rest: "— Google indexes the mobile version of your site first, so a non-mobile-friendly site simply won't rank." },
  { b: "Not responding to reviews", rest: "— potential customers read how you handle complaints just as carefully as they read the complaints themselves." },
  { b: "Treating SEO as a one-time task", rest: "— SEO strategies compound over months; businesses that start today are simply in a stronger position six months from now." },
];

const STATS = [
  { num: "14.6%", label: "close rate for SEO leads, versus just 1.7% for outbound methods like print or direct mail" },
  { num: "950M+", label: "internet users in India, one of the fastest-growing digital markets in the world" },
  { num: "~75%", label: "of India's search market is mobile — mobile-first design is now the dominant ranking driver" },
];

const TOOLS = [
  { tool: "Google Business Profile", best: "Local map-pack visibility, reviews, posts", tier: "Free" },
  { tool: "Google Keyword Planner", best: "Search volume & competition data", tier: "Free" },
  { tool: "Ubersuggest", best: "Competitor keywords & content ideas", tier: "Free / Paid" },
  { tool: "AnswerThePublic", best: "Question-based keyword discovery", tier: "Free" },
  { tool: "Google Search Console", best: "Sitemap, indexing & crawl error alerts", tier: "Free" },
  { tool: "JustDial / Sulekha / IndiaMART", best: "Local citations & backlinks", tier: "Free" },
];

const FAQS = [
  {
    q: "How long does SEO take to show results for a small business in India?",
    a: "SEO is not a magic switch — it's a compounding asset. Every blog post, review, and backlink stacks over time, so a business that starts its SEO strategies today will be in a fundamentally stronger position within a few months than one that waits.",
  },
  {
    q: "What's the real difference between SEO and Google Ads?",
    a: "Google Ads is renting visibility — the moment you stop paying, it disappears. SEO is owning it: every rupee spent on real SEO strategies keeps working for months after you spend it.",
  },
  {
    q: "Is a Google Business Profile really worth optimising?",
    a: "Yes — it's the single highest-ROI first step for local SEO and it's completely free. It's what shows up in the map pack when someone nearby searches for exactly what you offer.",
  },
  {
    q: "Do backlinks still matter for a small business website?",
    a: "Very much so. Most web pages online have zero backlinks, meaning most competitors aren't doing this at all — even five to ten quality backlinks from relevant Indian sites can make a measurable ranking difference.",
  },
];

const STRATEGIES = [
  {
    num: "01",
    title: "Claim and Optimise Your Local Google Business Profile",
    desc: "Claim and verify your listing at business.google.com, fill every field, upload at least 10 high-quality photos, list your services with pricing, post weekly updates, and respond to every review within 24 hours.",
  },
  {
    num: "02",
    title: "Do Keyword Research the Right Way",
    desc: "Use Google Keyword Planner, Ubersuggest, AnswerThePublic, and Google's own autocomplete and \"People Also Ask\" results to find long-tail, city-specific phrases your customers actually type.",
  },
  {
    num: "03",
    title: "Optimise Every Page with On-Page SEO",
    desc: "Nail your title tag, meta description, H1, subheadings, first 100 words, URL slug, and image alt text — clarity for Google, kept natural for the reader.",
  },
  {
    num: "04",
    title: "Make Your Website Mobile-Friendly and Fast",
    desc: "Test with PageSpeed Insights, compress every image, use solid hosting, enable caching and GZIP, and serve through a CDN — Google indexes your mobile site first.",
  },
  {
    num: "05",
    title: "Create Helpful Content That Answers Real Questions",
    desc: "Publish how-to guides, comparisons, FAQ pages, local service pages, and case studies — a minimum of 1,000 words, at least twice a month.",
  },
  {
    num: "06",
    title: "Build Local Citations on Indian Directories",
    desc: "List your business on JustDial, Sulekha, IndiaMART, and sector-specific directories, keeping your name, address, and phone number exactly identical everywhere.",
  },
  {
    num: "07",
    title: "Get Google Reviews — and Respond to Every One",
    desc: "Send follow-up review links after every successful project, add a \"Review Us on Google\" button to your site, and reply to positive and negative reviews alike.",
  },
  {
    num: "08",
    title: "Fix Your Website's Technical SEO",
    desc: "Resolve broken links, submit an XML sitemap, install HTTPS, canonicalise duplicate content, and add schema markup — most fixes don't require a developer.",
  },
  {
    num: "09",
    title: "Build Internal Links Between Your Pages",
    desc: "Link every new article to two or three existing pages so authority spreads and every page stays reachable within three clicks of your homepage.",
  },
  {
    num: "10",
    title: "Earn Backlinks from Other Websites",
    desc: "Guest post on industry blogs, list on directories, pursue local PR, fix broken links with your own content, and create shareable data or tools that earn links naturally.",
  },
];

// Related Articles are pulled live from the PCS WordPress blog (title + featured image),
// same source/shape as BlogSection.jsx. Only the 4 most recent posts are shown.
const RELATED_ARTICLES_API =
  "https://www.priyamconsultancy.com/blog/wp-json/wp/v2/posts?_embed&per_page=4";

// Popular Articles = your own site pages (not blog posts). Edit this list to match
// whichever pages you want featured here — label is the text shown, href is the page link.
const ARTICLES = [
  {
    title: "SEO for Small Businesses in India: 10 Proven Strategies That Actually Work",
    href: "/article/seo-for-small-businesses-india",
    date: "2026-08-04",
  },
  { title: "Technical SEO: The Complete Guide for 2026", href: "/article/technical-seo-complete-guide-2026", date: "2026-06-14" },
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
  headline: "SEO for Small Businesses in India: 10 Proven Strategies That Actually Work",
  description:
    "A practical, India-specific guide to SEO for small businesses — Google Business Profile, keyword research, on-page and technical SEO, local citations, reviews, and link building.",
  author: { "@type": "Person", name: "Rhea Menon", jobTitle: "Senior SEO Strategist" },
  publisher: {
    "@type": "Organization",
    name: "Priyam Consultancy Services",
    logo: { "@type": "ImageObject", url: "https://priyamconsultancy.com/img/priyam-consultancy-logo.png" },
  },
  dateModified: "2026-08-04",
  mainEntityOfPage: "https://priyamconsultancy.com/article/seo-for-small-businesses-india",
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

function SeoSmallBusinessIndiaGuide() {
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
      title="SEO for Small Businesses in India: 10 Proven Strategies That Actually Work"
      description="A practical, India-specific guide to SEO for small businesses — Google Business Profile, keyword research, on-page and technical SEO, local citations, reviews, and link building. By Priyam Consultancy Services."
    >
      <Head>
        <link rel="canonical" href="https://priyamconsultancy.com/article/seo-for-small-businesses-india" />
        <meta property="og:title" content="SEO for Small Businesses in India: 10 Proven Strategies That Actually Work | Priyam Consultancy Services" />
        <meta
          property="og:description"
          content="A practical, India-specific guide to SEO for small businesses — Google Business Profile, keyword research, on-page and technical SEO, local citations, reviews, and link building."
        />
        <meta property="og:url" content="https://priyamconsultancy.com/article/seo-for-small-businesses-india" />
        <meta property="og:site_name" content="Priyam Consultancy Services" />
        <script type="application/ld+json">{JSON.stringify(JSON_LD_ARTICLE)}</script>
      </Head>

      <style>{`
 main {
    background: #fff;
}
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

        .tseo-strategy-list{ display:grid; gap:14px; margin:18px 0;}
        .tseo-strategy-item{ display:grid; grid-template-columns:40px 1fr; gap:14px; padding:16px 0; border-bottom:1px solid #F0E0D0;}
        .tseo-strategy-item .num{ font-family:'JetBrains Mono',monospace; color:#ED8337; font-weight:700; font-size:15px;}
        .tseo-strategy-item h3{ font-size:17px; margin:0 0 6px; font-weight:600;}
        .tseo-strategy-item p{ margin:0; font-size:14.5px; color:#6B7A94;}

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
        <Link to="/seo">SEO</Link>
        <span className="sep">/</span>
        <span>Small Business Guide</span>
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
              <span className="tseo-eyebrow">SEO · Small Business Guide</span>
              <h1>SEO for Small Businesses in India: 10 Proven Strategies That Actually Work</h1>
              <p className="tseo-dek">
                Picture this. A potential customer in your city opens Google and types exactly what your business offers. Your competitor's website appears. Yours does not. That customer calls your competitor, pays your competitor, and never even knows you exist.

              </p>
              <div className="tseo-meta-row">
                <div className="tseo-author">
                  <div className="tseo-avatar">RM</div>
                  Rhea Menon, Senior SEO Strategist
                </div>
                <span className="tseo-meta-dot" />
                <span>Last updated: August 4, 2026</span>
                <span className="tseo-meta-dot" />
                <span>Reviewed by SEO Editorial Team</span>
              </div>
              <div className="tseo-hero-img" style={{ padding: 0 }}>
                <img src="/img/portfolio.webp" />
              </div>
            </div>

            <section id="intro">
              <p>
                This is happening right now — every single day — to thousands of small businesses across India.
              </p>
              <p>
                India has crossed 950 million internet users and is one of the fastest-growing digital markets in the world. Google dominates search here — meaning if you are not ranking on Google, you are simply not being found. SEO for small businesses is the single highest-return investment you can make online to change that — and this article breaks it down into 12 clear, proven strategies built for the Indian market.
              </p>
              <p>No jargon. No empty promises. Just what actually works.</p>
              <p><em>SEO leads have a 14.6% close rate — compared to just 1.7% for outbound methods like print or direct mail. — HubSpot</em></p>
            </section>

            <div className="tseo-takeaways" id="takeaways">
              <h3>Key Takeaways</h3>
              <ul>
                <li>SEO leads close at 14.6%, compared to just 1.7% for outbound methods like print or direct mail.</li>
                <li>Google Ads is renting visibility; SEO is owning it — the effect keeps compounding after you stop actively investing.</li>
                <li>Over 70% of Indian internet users are mobile-first, so mobile speed and Core Web Vitals drive most of your organic visibility.</li>
                <li>Your Google Business Profile is the single highest-ROI first step for local SEO, and it's completely free.</li>
                <li>SEO compounds — a business that starts today will be in a fundamentally stronger position six months from now than one that waits.</li>
              </ul>
            </div>

            <section id="what-is">
              <h2><span className="tseo-h2-index">02</span>What Is SEO for Small Business?</h2>
              <p>
                SEO for small businesses means making your website visible on Google when potential customers
                search for your products or services — without paying for ads. The overwhelming majority of
                clicks on Google go to organic results, not paid ads, and that visibility disappears the moment
                you stop paying for ads but keeps compounding with real SEO strategies.
              </p>
              <p>
                For a broader view of how this connects to related channels, see our{" "}
                <Link className="tseo-inline-link" to="/seo">SEO services</Link> overview.
              </p>
            </section>

            <section id="why-matters">
              <h2><span className="tseo-h2-index">03</span>Why It Matters in India</h2>
              <p>
                India's digital economy is growing at a pace unlike any other market in the world, fuelled by
                internet penetration, mobile usage, and an exploding e-commerce ecosystem. Your customers are
                already online and already searching — the only question is whether they find you or your
                competitor.
              </p>
              <p>
                A significant share of all Google searches in India carry local intent, meaning people are
                actively searching for businesses and services near them, right now. This is where{" "}
                <Link className="tseo-inline-link" to="/seo">Local SEO</Link> and{" "}
                <Link className="tseo-inline-link" to="/content-marketing">Content Marketing</Link> converge —
                weak local visibility caps the ceiling on every other channel.
              </p>
            </section>

            <section id="benefits">
              <h2><span className="tseo-h2-index">04</span>Why SEO Works Differently in India</h2>
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
              <h2><span className="tseo-h2-index">05</span>10 Proven Strategies That Actually Work</h2>
              <div className="tseo-strategy-list">
                {STRATEGIES.map((s) => (
                  <div className="tseo-strategy-item" key={s.num}>
                    <div className="num">{s.num}</div>
                    <div>
                      <h3>{s.title}</h3>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="best-practices">
              <h2><span className="tseo-h2-index">06</span>Quick-Win Best Practices</h2>
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
              <div className="tseo-avatar">RM</div>
              <div>
                <blockquote>
                  Every rupee you spend on real SEO strategies keeps working for months after you spend it. Every
                  rupee on ads disappears the moment you stop paying.
                </blockquote>
                <div className="who">Rhea Menon — Senior SEO Strategist, Priyam Consultancy Services</div>
              </div>
            </div>

            <section id="stats">
              <h2><span className="tseo-h2-index">08</span>Stats &amp; Research</h2>
              <div className="tseo-stat-grid">
                {STATS.map((s) => (
                  <div className="tseo-stat-card" key={s.num}>
                    <span className="num">{s.num}</span>
                    <span className="label">{s.label}</span>
                  </div>
                ))}
              </div>
              <p className="tseo-stat-source">Sources: HubSpot; StatCounter / IAMAI, 2025.</p>
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
                SEO for small businesses in India is not a magic switch — but it is the closest thing to a
                compounding business asset you can build online. Every blog post you publish, every Google review
                you earn, every backlink you build — they stack. They compound. Start with one strategy this week.
                Just one.
              </p>
            </div>

            <div className="tseo-cta-banner" id="cta">
              <div>
                <h3>Not sure where to start?</h3>
                <p>
                  Priyam Consultancy Services offers a free consultation for website SEO analysis — no jargon, no
                  pressure. We'll tell you exactly what it would take to start ranking.
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
                  Rhea leads SEO programs for small and mid-market clients at Priyam Consultancy Services,
                  specialising in local SEO, keyword strategy, and content that ranks. She holds certifications in
                  Google Analytics and Search Console, and contributes regularly to the PCS Resource Center.
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

export default SeoSmallBusinessIndiaGuide;