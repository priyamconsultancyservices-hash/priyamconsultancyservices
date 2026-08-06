import React, { useEffect, useRef, useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";

// ════════════════════════════════════════════
//  DATA
// ════════════════════════════════════════════

const TOC_ITEMS = [
    { id: "intro", num: "", label: "Introduction" },
    { id: "what-is", num: "01", label: "What Is SEO and Why Does It Matter for Small Businesses in India?" },
    { id: "why-seo", num: "02", label: "Why SEO Works Differently in the Indian Market" },
    { id: "strategy-1", num: "03", label: "Strategy 1: Claim and Optimise Your Local Google Business Profile" },
    { id: "strategy-2", num: "04", label: "Strategy 2: Do Keyword Research the Right Way" },
    { id: "strategy-3", num: "05", label: "Strategy 3: Optimise Every Page with On-Page SEO" },
    { id: "strategy-4", num: "06", label: "Strategy 4: Make Your Website Mobile-Friendly and Fast" },
    { id: "strategy-5", num: "07", label: "Strategy 5: Create Helpful Content That Answers Real Questions" },
    { id: "strategy-6", num: "08", label: "Strategy 6: Build Local Citations on Indian DirectoriesStats & Research" },
    { id: "strategy-7", num: "09", label: "Strategy 7: Get Google Reviews — and Respond to Every One" },
    { id: "strategy-8", num: "10", label: "Strategy 8: Fix Your Website's Technical SEO" },
    { id: "strategy-9", num: "11", label: "Strategy 9: Build Internal Links Between Your Pages" },
    { id: "strategy-10", num: "12", label: "Strategy 10: Earn Backlinks from Other Websites" },
    { id: "conclusion", num: "13", label: "Conclusion" },

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
        href: "/article/seo-strategies-for-small-businesses-india",
        date: "2026-08-04",
    },
];

const RECENT_ARTICLES = [...ARTICLES]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

const HUB_LINKS = [
    { label: "Digital Marketing", href: "/digital-marketing" },
    { label: "SEO", href: "/search-engine-optimization" },
    { label: "Performance Marketing", href: "/marketplace-ecommerce-marketing" },
    { label: "Social Media Marketing", href: "/social-media-marketing" },
    { label: "Content Marketing", href: "/content-marketing" },
    { label: "Email Marketing", href: "/email-marketing" },
    { label: "Website Development", href: "/website-development" },
    { label: "Graphic Design", href: "/graphic-design" },
];

const JSON_LD_BREADCRUMB = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            item: { "@id": "https://priyamconsultancy.com/", name: "Home" },
        },
        {
            "@type": "ListItem",
            position: 2,
            item: { "@id": "https://priyamconsultancy.com/article/", name: "Articles" },
        },
        {
            "@type": "ListItem",
            position: 3,
            item: {
                "@id": "https://priyamconsultancy.com/article/seo-strategies-for-small-businesses-india",
                name: "SEO Strategies for Small Businesses in India",
            },
        },
    ],
};

const JSON_LD_WEBPAGE = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://priyamconsultancy.com/article/seo-strategies-for-small-businesses-india",
    url: "https://priyamconsultancy.com/article/seo-strategies-for-small-businesses-india",
    name: "SEO Strategies for Small Businesses in India",
    description:
        "Learn proven SEO strategies for small businesses in India to improve search rankings, attract qualified traffic, generate leads, and grow your business online with practical optimization techniques.",
    inLanguage: "en-IN",
    isPartOf: {
        "@type": "WebSite",
        name: "Priyam Consultancy Services",
        url: "https://priyamconsultancy.com/",
    },
    publisher: {
        "@type": "Organization",
        name: "Priyam Consultancy Services",
        logo: { "@type": "ImageObject", url: "https://priyamconsultancy.com/img/priyam-consultancy-logo.png" },
    },
};

const JSON_LD_ORGANIZATION = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Priyam Consultancy Services",
    url: "https://priyamconsultancy.com/",
    logo: "https://priyamconsultancy.com/img/priyam-consultancy-logo.png",
    contactPoint: [
        {
            "@type": "ContactPoint",
            telephone: "+91 96774 44048",
            contactType: "customer support",
        },
    ],
    sameAs: [
        "https://www.facebook.com/profile.php?id=61577125709962",
        "https://www.linkedin.com/company/priyam-consultancy-services/",
        "https://www.instagram.com/priyam_consultancy_services/",
        "https://x.com/services91032",
        "https://g.co/kgs/rdTYdi6",
    ],
};

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
    mainEntityOfPage: "https://priyamconsultancy.com/article/seo-strategies-for-small-businesses-india",
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
            title="SEO for Small Businesses in India: 10 Proven Strategies"
            description="Discover practical SEO tips for small businesses in India, including local SEO, keyword research, technical SEO, and Google Business Profile optimization."
        >
            <Head>
                <link rel="canonical" href="https://priyamconsultancy.com/article/seo-strategies-for-small-businesses-india" />
                <meta property="og:title" content="SEO for Small Businesses in India: 10 Proven Strategies" />
                <meta
                    property="og:description"
                    content="Discover practical SEO tips for small businesses in India, including local SEO, keyword research, technical SEO, and Google Business Profile optimization."
                />
                <meta property="og:url" content="https://priyamconsultancy.com/article/seo-strategies-for-small-businesses-india" />
                <meta property="og:site_name" content="Priyam Consultancy Services" />
                <script type="application/ld+json">{JSON.stringify(JSON_LD_ARTICLE)}</script>
            </Head>
            {/* Breadcrumb Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_BREADCRUMB) }}
            />
            {/* WebPage Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_WEBPAGE) }}
            />
            {/* Organization Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_ORGANIZATION) }}
            />
            {/* Article Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_ARTICLE) }}
            />

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
          max-width:1450px; margin:0 auto;
          display:grid;
          grid-template-columns:310px minmax(0,1fr) 300px;
          gap:40px;
          padding:24px 24px 80px;
          align-items:start;
          font-family:'Poppins',system-ui,sans-serif;
          color:#0D1F3C;
        }
        .tseo-page a{ color:inherit; text-decoration:none; }
        .tseo-page h1,.tseo-page h2,.tseo-page h3,.tseo-page h4, h5{ font-family:'Poppins',system-ui,sans-serif; font-weight:700; 
    line-height: 1.35;
    margin: 0;
    font-size: 1.8rem;
    color: #0D1F3C;}

  .tseo-page h3,.tseo-page h4, h5{ padding-bottom:1.4rem;}

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
        .tseo-hero h1{ font-size:40px; font-weight:700;}
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
        .tseo-content h3{ font-size:30px; font-weight:700; margin:22px 0 10px;}
        .tseo-content p{ font-size:15px; line-height:1.75; color:#6B7A94; margin:0 0 16px;}
        .tseo-content ul, .tseo-content ol{ font-size:16px; line-height:1.75; color:#2B362F; padding-left:22px; margin:0 0 16px;}
        .tseo-content li{ margin-bottom:6px; color: #6B7A94;}
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
                <Link to="/search-engine-optimization">SEO</Link>
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
                            {/* <div className="tseo-meta-row">
                                <div className="tseo-author">
                                    <div className="tseo-avatar">RM</div>
                                    Rhea Menon, Senior SEO Strategist
                                </div>
                                <span className="tseo-meta-dot" />
                                <span>Last updated: August 4, 2026</span>
                                <span className="tseo-meta-dot" />
                                <span>Reviewed by SEO Editorial Team</span>
                            </div> */}
                            <div className="tseo-hero-img" style={{ padding: 0 }}>
                                <img src="/img/article/seo-for-small-business-in-india.webp" />
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

                        <div id="what-is">
                            <h3>What Is SEO and Why Does It Matter for Small Businesses in India?</h3>
                            <p>SEO for small businesses means making your website visible on Google when your potential customers search for your products or services — without paying for ads. The overwhelming majority of clicks on Google go to organic results, not paid ads. Ads get a small fraction of total clicks — and the moment you stop paying, that visibility disappears entirely.
                            </p>
                            <p>Think of it this way: Google Ads is renting visibility. SEO is owning it. Every rupee you spend on real SEO strategies keeps working for months after you spend it. Every rupee on ads disappears the moment you stop paying.
                            </p>
                            <p>For Indian small businesses, this matters even more. The digital economy of India is growing at a pace unlike any other market in the world — fuelled by internet penetration, mobile usage, and an exploding e-commerce ecosystem. Your customers are already online and already searching. The only question is whether they find you or your competitor.
                            </p>
                        </div>
                        <section id="why-seo">
                            <h2>Why SEO Works Differently in the Indian Market</h2>
                            <p>
                                Local SEO for small businesses in India has unique advantages that most business owners overlook. A significant share of all Google searches in India carry local intent — meaning people are actively searching for businesses and services near them, right now.
                            </p>
                            <p>
                                India's market adds extra layers that global SEO guides rarely address:
                            </p>
                            <ul>
                                <li>Over 70% of Indian internet users access online content primarily through smartphones — making mobile SEO not optional, but survival
                                </li>
                                <li>Tier-2 and tier-3 cities are the fastest-growing segments for internet adoption, with rural users growing rapidly year on year</li>
                                <li>Google drives the overwhelming majority of organic search traffic in India — so ranking on Google is non-negotiable
                                </li>
                                <li>Voice search in Hindi and regional languages is growing fastest in smaller cities — an opportunity most competitors are still ignoring
                                </li>
                            </ul>
                            <p>SEO strategies designed for Western markets consistently miss these realities. The 12 strategies below are built around how Indian consumers actually search.</p>
                            <p><em>India's search market is approximately 75% mobile — mobile-first design and Core Web Vitals are the dominant drivers of organic visibility. — StatCounter / IAMAI, 2025
                            </em></p>
                        </section>

                        <section id="strategy-1">
                            <h4>Strategy 1: Claim and Optimise Your Local Google Business Profile</h4>
                            <p>
                                This is the single highest-ROI first step for local SEO for small business — and it is completely free. Your Google Business Profile is what shows up in the map pack when someone searches "digital marketing agency near me" or "web developer in Salem."
                            </p>
                            <p>
                                How to optimise it:
                            </p>
                            <ul>
                                <li>Claim and verify your listing at business.google.com</li>
                                <li>Fill every field — business name, category, description, hours, phone, website</li>
                                <li>Upload at least 10 high-quality photos of your office, team, and work</li>
                                <li>Add your services with descriptions and pricing where possible</li>
                                <li>Post updates weekly — Google rewards active profiles</li>
                                <li>Respond to every review within 24 hours</li>
                            </ul>
                            <p>Businesses with a complete and active Google Business Profile are significantly more likely to attract visitors and be considered for a purchase than those with incomplete listings.</p>
                        </section>

                        <section id="strategy-2">
                            <h4>Strategy 2: Do Keyword Research the Right Way</h4>
                            <p>Every effective SEO strategy begins with keyword research for SEO. This means finding the exact words and phrases your potential customers type into Google — and then building your website content around them.</p>
                            <p>Keyword research for SEO tools to use, all with free versions:</p>
                            <ul>
                                <li><strong>Google Keyword Planner</strong> — shows search volume and competition</li>
                                <li><strong>Ubersuggest</strong> — shows competitor keywords and content ideas</li>
                                <li><strong>AnswerThePublic</strong> — shows questions people ask around your topic</li>
                                <li><strong>Google Search itself</strong> — study the autocomplete suggestions and "People Also Ask" section</li>
                            </ul>
                            <p>For Indian SEO for small businesses, focus on long-tail keywords — specific four-to-six word phrases with lower competition. "Affordable SEO packages for small business in Chennai" converts far better than just "SEO." Always add your city. "Web designer Salem" ranks faster and brings more relevant traffic than "web designer India."</p>
                        </section>

                        <section id="strategy-3">
                            <h4>Strategy 3: Optimise Every Page with On-Page SEO</h4>
                            <p>On-page SEO is everything you do on your own website to help Google understand what each page is about. It is the foundation of all SEO strategies — and most small business websites get it badly wrong.</p>
                            <p>On-page SEO checklist for every page:</p>
                            <ul>
                                <li><strong>Title Tag </strong>— include your primary keyword, keep it under 60 characters</li>
                                <li><strong>Meta Description</strong> — 130–155 characters, include keyword and a clear benefit</li>
                                <li><strong>H1 Heading</strong> — use H1 for the main title, H2 for subheadings, and so on</li>
                                <li><strong>H2 / H3 Subheadings</strong> — break up content, include secondary keywords</li>
                                <li><strong>First 100 words </strong> — use your primary keyword naturally in the opening paragraph</li>
                                <li><strong>URL Slug</strong> — short and keyword-only. /seo-services-india not /page?id=1234</li>
                                <li><strong>Image Alt Text </strong> — describe every image using relevant keywords</li>
                            </ul>
                            <p>Nearly all page-one results on Google use their primary keyword in the title or H1. On-page SEO is not about stuffing keywords everywhere — it is about making it crystal clear to Google what your page is about while keeping it natural for the reader.</p>

                        </section>

                        <section id="strategy-4">
                            <h4>Strategy 4: Make Your Website Mobile-Friendly and Fast</h4>
                            <p>Page speed optimisation is not a technical nicety — it is a direct ranking factor. Bounce rates rise sharply when a website takes more than two seconds to load. For Indian users on mobile data connections, slow pages mean lost customers before you even get a chance to speak to them.</p>
                            <p>Google now indexes the mobile version of your site first — known as mobile-first indexing. If your site is not mobile-friendly, you will not rank</p>
                            <p>Page speed optimisation steps you can take today:</p>
                            <ul>
                                <li>Test your site at PageSpeed Insights — aim for a score above 70 on mobile</li>
                                <li>Compress all images using TinyPNG or ShortPixel before uploading</li>
                                <li>Use a fast hosting provider — avoid cheap shared hosting</li>
                                <li>Enable browser caching and GZIP compression</li>
                                <li>Remove unnecessary plugins if you are on WordPress</li>
                                <li>Use a CDN for faster delivery across India</li>
                            </ul>

                        </section>

                        <section id="strategy-5">
                            <h4>Strategy 5: Create Helpful Content That Answers Real Questions</h4>
                            <p>Content is what fuels every other SEO strategy. Without valuable content, there is nothing for Google to rank. This is where partnering with a strong content marketing agency India can give your business a significant advantage — because content done right compounds over time.</p>
                            <p>The most effective content types for SEO for small businesses:</p>
                            <ul>
                                <li>How-to guides — "How to Register a Startup in India: Step-by-Step Guide"</li>
                                <li>Comparison articles — "SEO vs Google Ads: Which Is Better for Small Businesses?"</li>
                                <li>FAQ pages — target Google's "People Also Ask" box for free extra visibility</li>
                                <li>Local service pages — one dedicated page per service per city you serve</li>
                                <li>Case studies — real results from real clients — the most trust-building content you can create</li>
                            </ul>
                            <p>Aim for a minimum of 1,000 words per article, publish at least twice a month consistently, and always answer the specific question your reader is asking — not a watered-down version of it.</p>
                        </section>


                        <section id="strategy-6">
                            <h4>Strategy 6: Build Local Citations on Indian Directories</h4>
                            <p>Local citations are mentions of your business name, address, and phone number on other websites. For local SEO for small business, they are a critical trust signal that tells Google your business is real and where it operates.</p>
                            <p>Key Indian directories to list your business on:</p>
                            <ul>
                                <li><strong>JustDial</strong> — India's largest local search platform</li>
                                <li><strong>Sulekha</strong> — high traffic, especially for service businesses</li>
                                <li><strong>IndiaMART</strong> — essential for B2B businesses</li>
                                <li><strong>IndiaBizClub, TradeIndia, ExportersIndia</strong> — sector-specific</li>
                            </ul>
                            <p>Your business name, address, and phone number must be exactly identical across every listing. Even small differences — Road vs Rd, +91 vs 0 — confuse Google and hurt your local rankings.</p>
                        </section>

                        <section id="strategy-7">
                            <h2>Strategy 7: Get Google Reviews — and Respond to Every One</h2>
                            <p>Reviews are the number two ranking factor for local SEO for small business — and they directly influence whether someone calls you or your competitor. Most consumers check reviews on multiple platforms before choosing a local business.   </p>
                            <p>How to get more Google reviews without violating Google's policies:</p>
                            <ul>
                                <li>Send a follow-up WhatsApp or email to every happy client with your Google review link</li>
                                <li>Add a "Review Us on Google" button to your website footer</li>
                                <li>Ask at the right moment — right after a successful project delivery</li>
                                <li>Create a short QR code linking to your review page and display it at your office</li>
                            </ul>
                            <p>Always respond to every review — positive and negative. Potential customers read how you handle complaints just as carefully as they read the complaints themselves.             </p>
                        </section>

                        <section id="strategy-8">
                            <h5>Strategy 8: Fix Your Website's Technical SEO</h5>
                            <p>Understanding technical SEO vs on-page SEO is essential for any small business owner investing in search. On-page SEO is what your visitors see — content, headings, and meta tags. Technical SEO is what Google sees underneath — your site speed, crawlability, sitemap, security certificate, and structured data.</p>
                            <p>Common technical SEO issues that hurt small business rankings:</p>
                            <ul>
                                <li>Broken links (404 errors) — test with Screaming Frog, free up to 500 pages</li>
                                <li>Missing XML sitemap — submit yours in Google Search Console</li>
                                <li>No HTTPS certificate — Google penalises non-secure sites</li>
                                <li>Duplicate content — use canonical tags to resolve it</li>
                                <li>Crawl errors — pages Google cannot access cannot be ranked</li>
                                <li>Schema markup — structured data helps Google show rich results for your pages</li>
                            </ul>
                            <p>Technical SEO does not require a developer for most fixes. Google Search Console will show you the most critical issues on your site within 48 hours of verification.</p>
                        </section>

                        <section id="strategy-9">
                            <h5>Strategy 9: Build Internal Links Between Your Pages</h5>
                            <p>Internal linking is one of the most underused SEO strategies for small business websites — and one of the easiest to implement with zero cost. Every new article you publish should link to at least two or three existing pages on your site.</p>
                            <p>This matters for website SEO analysis because internal links spread authority from high-performing pages to pages that need a ranking boost, help Google understand your site structure, and keep visitors on your site longer — all of which reduce bounce rate and signal quality to Google.</p>
                            <p>Rule of thumb: every page on your site should be reachable within three clicks from your homepage.</p>
                        </section>

                        <section id="strategy-10">
                            <h5>Strategy 10: Earn Backlinks from Other Websites</h5>
                            <p>Backlinks — links from other websites pointing to yours — remain one of Google's most powerful ranking signals. A single link from a reputable Indian publication can move your ranking more than dozens of minor on-page optimisations.</p>
                            <p>Link building strategies for Indian small businesses:</p>
                            <ul>
                                <li>Guest posting — write a valuable article for an industry blog in exchange for a backlink</li>
                                <li>Business directory listings — JustDial, Sulekha, IndiaMART all provide backlinks</li>
                                <li>PR and press releases — get featured in local news when you launch or win awards</li>
                                <li>Broken link building — find broken links on relevant websites and offer your content as a replacement</li>
                                <li>Shareable assets — original data, infographics, or free tools earn natural backlinks</li>
                            </ul>
                            <p>The majority of web pages online have zero backlinks — meaning most of your competitors are not doing this at all. Even five to ten quality backlinks from relevant Indian sites can make a measurable ranking difference.</p>
                        </section>

                        <div id="conclusion">
                            <h3 style={{ marginBottom: "12px" }}>Conclusion</h3>
                            <p>
                                SEO for small businesses in India is not a magic switch — but it is the closest thing to a compounding business asset you can build online
                            </p>
                            <p>Every blog post you publish, every Google review you earn, every backlink you build — they stack. They compound. A business that starts its SEO strategies today will be in a fundamentally stronger position six months from now than one that waits.</p>
                            <p>The 12 strategies in this guide — from keyword research for SEO and on-page SEO to technical SEO, link building strategies, and local SEO for small business — are the same approaches that help Indian businesses rank on page one. Start with one strategy this week. Just one.</p>
                            <p>Not sure where to start? Priyam Consultancy Services offers a free consultation for  website SEO analysis — no jargon, no pressure. We'll look at where your site stands today and tell you exactly what it would take to start ranking.</p>
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

                        {/* <div className="tseo-author-bio">
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
                        </div> */}
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