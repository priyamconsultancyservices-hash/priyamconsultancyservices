"use strict";
exports.ids = ["1003"];
exports.modules = {
3852(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _theme_Layout__rspack_import_2 = __webpack_require__(8328);
/* import */ var _docusaurus_Head__rspack_import_3 = __webpack_require__(3572);
/* import */ var _docusaurus_Link__rspack_import_4 = __webpack_require__(5310);





// ════════════════════════════════════════════
//  DATA
// ════════════════════════════════════════════
const TOC_ITEMS = [
    {
        id: "intro",
        num: "00",
        label: "Introduction"
    },
    //   { id: "takeaways", num: "01", label: "Key Takeaways" },
    {
        id: "factors",
        num: "01",
        label: "What Affects the Cost?"
    },
    {
        id: "comparison",
        num: "02",
        label: "DIY vs Freelancer vs Agency"
    },
    {
        id: "small-business",
        num: "03",
        label: "Small Business Websites"
    },
    {
        id: "ecommerce",
        num: "04",
        label: "E-Commerce Website Costs"
    },
    {
        id: "pricing",
        num: "05",
        label: "Our Pricing vs the Market"
    },
    {
        id: "hidden-costs",
        num: "06",
        label: "Hidden & Ongoing Costs"
    },
    {
        id: "choosing-partner",
        num: "07",
        label: "Choosing the Right Partner"
    },
    //   { id: "stats", num: "09", label: "Stats & Numbers" },
    {
        id: "conclusion",
        num: "08",
        label: "Conclusion"
    }
];
const FACTORS = [
    {
        title: "Website type",
        desc: "A static informational site costs far less than a dynamic, database-driven platform."
    },
    {
        title: "Design complexity",
        desc: "Template-based design is cheaper; fully custom UI/UX takes more hours to build."
    },
    {
        title: "Platform choice",
        desc: "WordPress, Shopify, WooCommerce, and fully custom code all carry different licensing, dev, and upkeep costs."
    },
    {
        title: "Features & integrations",
        desc: "Payment gateways, CRM sync, booking systems, and third-party APIs each add development time."
    },
    {
        title: "Who builds it",
        desc: "A freelancer, a small studio, and a full-service agency price the same scope very differently."
    }
];
const OPTIONS_TABLE = [
    {
        option: "DIY builder (Wix, Shopify basic, etc.)",
        cost: "₹5,000 – ₹25,000/yr",
        get: "Fastest to launch, limited customization, you do all the work"
    },
    {
        option: "Freelancer",
        cost: "₹20,000 – ₹80,000",
        get: "Lower cost, but often excludes design polish, SEO structure, or post-launch support"
    },
    {
        option: "Small agency / development company",
        cost: "₹50,000 – ₹3,00,000+",
        get: "Structured process — design, development, QA, SEO setup, and support bundled in"
    },
    {
        option: "Enterprise / custom development firm",
        cost: "₹5,00,000+",
        get: "Fully custom builds, scalable architecture, dedicated project management"
    }
];
const SMALL_BIZ = [
    {
        num: "01",
        title: "Basic static website (5–8 pages)",
        desc: "₹15,000 – ₹60,000 — good for a simple online presence with limited update needs."
    },
    {
        num: "02",
        title: "Dynamic CMS-based website (WordPress, 8–15 pages)",
        desc: "₹25,000 – ₹50,000 — the most common choice for small businesses, since it allows easy self-updates."
    },
    {
        num: "03",
        title: "Custom-designed business website",
        desc: "Pricing depends on requirements — single pages start from ₹2,500 each, with fully original UI, advanced functionality, and stronger brand alignment as the scope grows. "
    }
];
const ECOM_TIERS = (/* unused pure expression or super */ null && ([
    {
        num: "01",
        title: "Up to 15 products",
        desc: "₹15,000 – ₹30,000"
    },
    {
        num: "02",
        title: "16–30 products",
        desc: "₹20,000 – ₹40,000"
    },
    {
        num: "03",
        title: "30–50 products",
        desc: "₹40,000 – ₹75,000"
    },
    {
        num: "04",
        title: "Above 50 products",
        desc: "₹50,000 – ₹1,00,000"
    }
]));
const ECOM_DRIVERS = (/* unused pure expression or super */ null && ([
    {
        b: "Catalog size and product complexity",
        rest: "— variants, bundles, and custom attributes all add build time."
    },
    {
        b: "Number of payment gateways and integrations",
        rest: "— each third-party connection adds setup and testing work."
    },
    {
        b: "Inventory management and multi-warehouse support",
        rest: "— more complex stock logic means more development hours."
    },
    {
        b: "Expected traffic volume and scalability",
        rest: "— high-traffic stores need stronger infrastructure from day one."
    }
]));
const PRICING_COMPARISON = [
    {
        service: "Website Design (new home / landing page)",
        market: "₹5,000 – ₹40,000 per page",
        ours: "₹1,500 per page — multi-page sites quoted on requirement"
    },
    {
        service: "Static Website Development",
        market: "₹8,000 – ₹20,000",
        ours: "₹5,000 – ₹7,500"
    },
    {
        service: "Custom Website Development (5 pages)",
        market: "₹25,000 – ₹50,000",
        ours: "₹15,000 — includes 1 year of free hosting"
    },
    {
        service: "WooCommerce Website Development (5 products)",
        market: "₹25,000 – ₹60,000",
        ours: "₹20,000 – ₹25,000"
    },
    {
        service: "Shopify Website Development (~5 products)",
        market: "₹30,000 – ₹1,00,000+ (excl. subscription)",
        ours: "From ₹22,000 + Shopify subscription"
    },
    {
        service: "Custom E-Commerce Website (5 products)",
        market: "₹30,000 – ₹90,000",
        ours: "₹25,000 – custom quote based on requirements"
    }
];
const HIDDEN_COSTS = (/* unused pure expression or super */ null && ([
    {
        b: "Domain and hosting",
        rest: "— ₹1,500 – ₹15,000/year, depending on hosting quality and traffic needs."
    },
    {
        b: "SSL certificate",
        rest: "— often free with hosting, but premium SSL can run ₹2,000 – ₹10,000/year."
    },
    {
        b: "Maintenance and updates",
        rest: "— ₹5,000 – ₹25,000/month for security patches, plugin updates, and backups."
    },
    {
        b: "Content creation",
        rest: "— copywriting, product photography, and blog content are frequently quoted separately."
    },
    {
        b: "SEO and marketing",
        rest: "— budget ₹15,000 – ₹75,000/month if visibility matters to you."
    },
    {
        b: "Third-party app licenses",
        rest: "— payment gateways, CRM tools, and marketing plugins often carry their own subscriptions."
    }
]));
const CHOOSING_PARTNER = [
    "A portfolio in your industry or a comparable one — not just generic templates.",
    "Clarity on what's included — design, development, SEO setup, revisions, and support, spelled out in writing.",
    "Ownership of your code and assets — you should fully own your website, not be locked into a vendor.",
    "Post-launch support terms — what happens when something breaks in month three?",
    "Realistic timelines — a five-page business website shouldn't take four months, and a custom platform shouldn't be promised in two weeks."
];
const STATS = (/* unused pure expression or super */ null && ([
    {
        num: "950M+",
        label: "internet users in India, one of the fastest-growing digital markets in the world"
    },
    {
        num: "₹40K–₹1.8L",
        label: "typical realistic range for a professional, mobile-responsive small business website"
    },
    {
        num: "20+",
        label: "industries served — across brochure sites, WooCommerce, Shopify, and custom builds"
    }
]));
const ARTICLES = [
    {
        title: "E-Commerce Website Development: A Complete Guide to Features, Platforms, and Strategies",
        href: "/article/ecommerce-website-development-complete-guide",
        date: "2026-10-09"
    },
    {
        title: "Website Development Cost in India (2026): Real Ranges by Type, Not Guesswork",
        href: "/article/website-development-cost-in-india",
        date: "2026-09-01"
    },
    {
        title: "SEO for Small Businesses in India: 10 Proven Strategies That Actually Work",
        href: "/article/seo-strategies-for-small-businesses-india",
        date: "2026-08-04"
    }
];
const RECENT_ARTICLES = [
    ...ARTICLES
].sort((a, b)=>new Date(b.date) - new Date(a.date)).slice(0, 4);
const RELATED_ARTICLES_API = "https://www.priyamconsultancy.com/blog/wp-json/wp/v2/posts?_embed&per_page=4";
const HUB_LINKS = [
    {
        label: "Website Development",
        href: "/website-development"
    },
    {
        label: "Digital Marketing",
        href: "/digital-marketing"
    },
    {
        label: "SEO",
        href: "/seo"
    },
    {
        label: "PPC / Performance Marketing",
        href: "/performance-marketing"
    },
    {
        label: "Social Media Marketing",
        href: "/social-media"
    },
    {
        label: "Content Marketing",
        href: "/content-marketing"
    },
    {
        label: "Email Marketing",
        href: "/email-marketing"
    },
    {
        label: "Graphic Design",
        href: "/graphic-design"
    }
];
// ════════════════════════════════════════════
//  MAIN PAGE
// ════════════════════════════════════════════
function WebsiteDevelopmentCostIndia() {
    const [activeSection, setActiveSection] = (0,react__rspack_import_1.useState)("intro");
    const [progress, setProgress] = (0,react__rspack_import_1.useState)(0);
    const [relatedArticles, setRelatedArticles] = (0,react__rspack_import_1.useState)([]);
    const [relatedLoading, setRelatedLoading] = (0,react__rspack_import_1.useState)(true);
    const [relatedError, setRelatedError] = (0,react__rspack_import_1.useState)(null);
    (0,react__rspack_import_1.useEffect)(()=>{
        fetch(RELATED_ARTICLES_API).then((r)=>{
            if (!r.ok) throw new Error(`HTTP ${r.status}`);
            return r.json();
        }).then((data)=>{
            const parsed = data.map((post)=>{
                const thumbnail = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
                const cleanTitle = (post.title?.rendered || "Untitled").replace(/&[^;]+;/g, " ").trim();
                return {
                    id: post.id,
                    title: cleanTitle,
                    link: post.link,
                    thumbnail
                };
            });
            setRelatedArticles(parsed);
            setRelatedLoading(false);
        }).catch((err)=>{
            setRelatedError(err.message);
            setRelatedLoading(false);
        });
    }, []);
    (0,react__rspack_import_1.useEffect)(()=>{
        const sections = TOC_ITEMS.map((t)=>document.getElementById(t.id)).filter(Boolean);
        function onScroll() {
            let activeIdx = 0;
            const scrollPos = window.scrollY + 140;
            sections.forEach((sec, i)=>{
                if (sec.offsetTop <= scrollPos) activeIdx = i;
            });
            setActiveSection(TOC_ITEMS[activeIdx]?.id);
            const doc = document.documentElement;
            const pct = window.scrollY / (doc.scrollHeight - window.innerHeight) * 100;
            setProgress(Math.min(100, Math.max(0, pct)));
        }
        document.addEventListener("scroll", onScroll);
        onScroll();
        return ()=>document.removeEventListener("scroll", onScroll);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_2/* ["default"] */.A, {
        title: " Website Development Cost in India (2026): Pricing Guide ",
        description: "Explore website development costs in India in 2026, from business websites to Shopify, WooCommerce and custom e-commerce platforms, with real price ranges.",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_3/* ["default"] */.A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                        children: "Website Development Cost in India (2026): Pricing Guide"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "description",
                        content: "Explore website development costs in India in 2026, from business websites to Shopify, WooCommerce and custom e-commerce platforms, with real price ranges."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "keywords",
                        content: "website development cost in india, cost of e commerce website development in india, website development rates in india, website development company in coimbatore"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                        rel: "canonical",
                        href: "https://www.priyamconsultancy.com/article/website-development-cost-in-india"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:type",
                        content: "article"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:title",
                        content: "Website Development Cost in India (2026): Pricing Guide"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:description",
                        content: "Explore website development costs in India in 2026, from business websites to Shopify, WooCommerce and custom e-commerce platforms, with real price ranges."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:url",
                        content: "https://www.priyamconsultancy.com/article/website-development-cost-in-india"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:site_name",
                        content: "Priyam Consultancy Services"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:image",
                        content: "https://www.priyamconsultancy.com/img/article/article-website-development-cost.webp"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "twitter:title",
                        content: "Website Development Cost in India (2026): Pricing Guide"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "twitter:description",
                        content: "Explore website development costs in India in 2026, from business websites to Shopify, WooCommerce and custom e-commerce platforms, with real price ranges."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "twitter:image",
                        content: "https://www.priyamconsultancy.com/img/article/article-website-development-cost.webp"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                        type: "application/ld+json",
                        children: `
{
 "@context":"https://schema.org",
 "@type":"BreadcrumbList",
 "itemListElement":[
   {
     "@type":"ListItem",
     "position":1,
     "name":"Home",
     "item":"https://www.priyamconsultancy.com/"
   },
   {
     "@type":"ListItem",
     "position":2,
     "name":"Articles",
     "item":"https://www.priyamconsultancy.com/article/"
   },
   {
     "@type":"ListItem",
     "position":3,
     "name":"Website Development Cost in India (2026)",
     "item":"https://www.priyamconsultancy.com/article/website-development-cost-in-india"
   }
 ]
}
`
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                        type: "application/ld+json",
                        children: `
{
 "@context":"https://schema.org",
 "@type":"Organization",
 "name":"Priyam Consultancy Services",
 "url":"https://www.priyamconsultancy.com/",
 "logo":"https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png",
 "contactPoint":[
   {
     "@type":"ContactPoint",
     "telephone":"+91 96774 44048",
     "contactType":"customer support"
   }
 ],
 "sameAs":[
   "https://www.facebook.com/profile.php?id=61577125709962",
   "https://www.linkedin.com/company/priyam-consultancy-services/",
   "https://www.instagram.com/priyam_consultancy_services/",
   "https://x.com/services91032",
   "https://g.co/kgs/rdTYdi6"
 ]
}
`
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("style", {
                children: `
        main { background: #fff; }
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
        .tseo-hero h1{ font-size:42px; font-weight:700; letter-spacing:-.01em; margin-bottom:18px;}
        .tseo-dek{ font-size:18px; color:#6B7A94; line-height:1.5; margin-bottom:24px;}
        .tseo-meta-row{ display:flex; flex-wrap:wrap; align-items:center; gap:18px; font-size:13.5px; color:#6B7A94; margin-bottom:22px;}
        .tseo-author{ display:flex; align-items:center; gap:8px; color:#0D1F3C; font-weight:600;}
        .tseo-avatar{ width:34px; height:34px; border-radius:50%; background:#0D1F3C; color:#FFFDFB; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:700; flex-shrink:0;}
        .tseo-meta-dot{ width:4px; height:4px; border-radius:50%; background:#F0E0D0;}
        .tseo-hero-img{ width:100%; aspect-ratio:16/8; border-radius:14px; object-fit:cover; display:flex; align-items:center; justify-content:center; color:#fff; text-align:center; font-size:15px; padding:20px;}

        .tseo-takeaways{ background:#0D1F3C; color:#FFFDFB; border-radius:14px; padding:28px 30px; margin-bottom:36px;}
        .tseo-takeaways h3{ color:#ED8337; font-size:13px; text-transform:uppercase; letter-spacing:.1em; margin-bottom:16px;}
        .tseo-takeaways ul{ margin:0; padding:0; list-style:none; display:grid; gap:12px;}
        .tseo-takeaways li{ display:flex; gap:12px; font-size:14.5px; line-height:1.55; color:#fff;}
        .tseo-takeaways li::before{ content:"→"; color:#ED8337; font-weight:700; flex-shrink:0;}

        .tseo-content section{ margin-bottom:20px; }
        .tseo-content h2{ font-size:27px; font-weight:700; margin-bottom:16px; scroll-margin-top:24px; letter-spacing:-.005em;}
        .tseo-h2-index{ font-family:'JetBrains Mono',monospace; color:#ED8337; font-size:14px; margin-right:10px; font-weight:500;}
        .tseo-content h3{ font-size:19px; font-weight:600; margin:22px 0 10px;}
        .tseo-content p{ font-size:15px; line-height:1.75; color:#6B7A94; margin:0 0 16px;}
        .tseo-content ul, .tseo-content ol{ font-size:16px; line-height:1.75; color:#2B362F; padding-left:22px; margin:0 0 16px;}
        .tseo-content li{ margin-bottom:6px; 
    color: #6B7A94;
    font-size: 15px;}
        .tseo-content strong{ color:#0D1F3C; }
        .tseo-inline-link{ color:#ED8337; border-bottom:1px solid #FFF4EE; font-weight:500;}
        .tseo-inline-link:hover{ border-bottom-color:#ED8337; }

.tseo-benefit-card {
    margin-bottom: 17px;
}        .tseo-benefit-card h4{ font-size:15.5px; font-weight:600; margin-bottom:6px;}
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
        .tseo-stat-card .num{ font-size:26px; font-weight:700; color:#ED8337; display:block; margin-bottom:4px;}
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

        .tseo-checklist{ display:grid; gap:10px; margin:18px 0; list-style:none; padding:0;}
        .tseo-checklist li{ display:flex; gap:12px; font-size:15px; line-height:1.6; color:#6B7A94;}
        .tseo-checklist li::before{ content:"✓"; color:#ED8337; font-weight:700; flex-shrink:0;}

#cta-final {
background: linear-gradient(120deg, #004168, #0D1F3C 110%);
      }
        .tseo-cta-banner{ background:linear-gradient(120deg, #004168, #0D1F3C 110%); color:#FFFDFB; border-radius:14px; padding:36px 34px; margin:48px 0; display:flex; align-items:center; justify-content:space-between; gap:24px; flex-wrap:wrap;}
        .tseo-cta-banner h3{ color:#fff; font-size:22px; margin-bottom:8px;}
        .tseo-cta-banner p{ color:#D9E6DE; font-size:14.5px; margin:0; }
        .tseo-cta-btn{ background:#ED8337; color:#2A1000; font-weight:700; padding:13px 24px; border-radius:10px; font-size:14px; white-space:nowrap; letter-spacing:.01em; transition:transform .15s ease; display:inline-block;}
        .tseo-cta-btn:hover{ transform:translateY(-1px); }

        .tseo-author-bio{ display:flex; gap:18px; border-top:1px solid #F0E0D0; padding-top:30px; margin-top:8px;}
        .tseo-author-bio .tseo-avatar{ width:56px; height:56px; font-size:18px; }
        .tseo-author-bio h4{ font-size:16px; margin-bottom:4px;}
        .tseo-author-bio .role{ font-size:13px; color:#ED8337; font-weight:600; margin-bottom:8px;}
        .tseo-author-bio p{ font-size:14px; color:#6B7A94; margin:0; line-height:1.6;}

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
          .tseo-stat-grid{ grid-template-columns:1fr 1fr;}
        }
        @media (max-width:640px){
          .tseo-hero h1{ font-size:30px; }
          .tseo-benefit-grid, .tseo-stat-grid{ grid-template-columns:1fr; }
          .tseo-cta-banner{ flex-direction:column; align-items:flex-start; }
          .tseo-expert-box{ flex-direction:column; }
        }
      `
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("nav", {
                className: "tseo-breadcrumb",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_4/* ["default"] */.A, {
                        to: "/",
                        children: "Home"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        className: "sep",
                        children: "/"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_4/* ["default"] */.A, {
                        to: "https://www.priyamconsultancy.com/blog/",
                        children: "Resources"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        className: "sep",
                        children: "/"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_4/* ["default"] */.A, {
                        to: "/website-development",
                        children: "Website Development"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        className: "sep",
                        children: "/"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        children: "Cost Guide"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "tseo-page",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("aside", {
                        className: "tseo-toc-wrap",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "tseo-toc-label",
                                children: "On this page"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
                                className: "tseo-toc",
                                children: TOC_ITEMS.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                        className: activeSection === item.id ? "active" : "",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                                            href: `#${item.id}`,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                    className: "num",
                                                    children: item.num
                                                }),
                                                item.label
                                            ]
                                        })
                                    }, item.id))
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "tseo-toc-progress",
                                children: [
                                    "Reading progress",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tseo-toc-bar",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "tseo-toc-bar-fill",
                                            style: {
                                                width: `${progress}%`
                                            }
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("main", {
                        className: "tseo-content",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("article", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "tseo-hero",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            className: "tseo-eyebrow",
                                            children: "Website Development \xb7 Pricing Guide"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h1", {
                                            children: "Website Development Cost in India (2026): Real Ranges by Type, Not Guesswork"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            className: "tseo-dek",
                                            children: "With over 950 million internet users, India is one of the fastest-growing digital markets in the world — and for most businesses, that growth starts with Google search. If you're not ranking, you're simply not being found."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "tseo-hero-img",
                                            style: {
                                                padding: 0
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_4/* ["default"] */.A, {
                                                href: "/article/website-development-cost-in-india",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                    src: "/img/article/article-website-development-cost.webp"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                                    id: "intro",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "That's what makes \"how much does a website cost\" such a loaded question. The honest answer depends entirely on what you're building, and most business owners have no real way to know where their project should land."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                            children: [
                                                "The truth is, ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                    href: "https://www.priyamconsultancy.com/landing-page/website-development-company-in-coimbatore/",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        style: {
                                                            color: "#ed8337"
                                                        },
                                                        children: "website development cost in India"
                                                    })
                                                }),
                                                " isn't one figure — it depends entirely on what you're building. A brochure site and a full-scale e-commerce platform solve completely different problems, and pricing them the same way is where most businesses get misled. Getting a clear picture of  ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                    href: "https://www.priyamconsultancy.com/landing-page/website-development-company-in-coimbatore/",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        style: {
                                                            color: "#ed8337"
                                                        },
                                                        children: "website development rates in India"
                                                    })
                                                }),
                                                " before you request a quote puts you in a much stronger position to compare what you're actually being offered."
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                                    id: "factors",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            children: "What Actually Affects the Cost of a Website Development in India?"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Before looking at price tables, it helps to understand what's actually driving the number on your quote. Five factors matter more than anything else:"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "tseo-benefit-grid",
                                            children: FACTORS.map((f)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    className: "tseo-benefit-card",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "ico",
                                                            children: f.ico
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                            children: f.title
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                            children: f.desc
                                                        })
                                                    ]
                                                }, f.ico))
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: 'These factors rarely act alone — a custom WooCommerce store with multiple payment gateways, for instance, stacks platform cost, feature complexity, and design work into a single quote, which is exactly why two "e-commerce website" estimates can differ by lakhs even for what looks like the same request on paper.'
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Once you know which of these apply to your project, the price range narrows quickly — and that's exactly what the next few sections cover. Working with a provider that offers complete Website development services under one roof, rather than piecing together freelancers for each part, is usually where that clarity starts."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                                    id: "comparison",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            children: "DIY Builders vs. Freelancers vs. Agencies: What's the Real Difference?"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("table", {
                                            className: "tseo-tools-table",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tbody", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
                                                                children: "Option"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
                                                                children: "Typical Cost"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
                                                                children: "What You Actually Get"
                                                            })
                                                        ]
                                                    }),
                                                    OPTIONS_TABLE.map((o)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: o.option
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: o.cost
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: o.get
                                                                })
                                                            ]
                                                        }, o.option))
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "The gap isn't just about price — it's about what's included. A freelancer quote that looks 40% cheaper than an agency quote often excludes content writing, revisions, mobile optimization, or any support after the site goes live. When you're comparing quotes, always ask what's inside the number, not just what the number is."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                                    id: "small-business",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            children: "Small Business & Brochure Websites: Typical Cost Range"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "For most small and mid-sized businesses in India, a professional, mobile-responsive, SEO-ready business website realistically costs ₹40,000 – ₹1,80,000, depending on page count, design customization, and CMS setup."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "tseo-practice-list",
                                            children: SMALL_BIZ.map((p)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    className: "tseo-practice-item",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "num",
                                                            children: p.num
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                                    children: p.title
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                                    children: p.desc
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, p.num))
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "If you're specifically comparing WordPress website development cost in India, expect the range to widen based on premium themes, plugin licensing, and whether the design is templated or custom-built from scratch. A templated WordPress build sits at the lower end; a custom WordPress theme with unique layouts, animations, and integrations pushes well past ₹1,50,000."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                                    id: "ecommerce",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            children: "E-Commerce Website Development: Why Costs Vary So Widely"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: 'This is where the cost of e-commerce website development in India varies the most, since "an online store" can mean very different things depending on scale and complexity.'
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "A basic online store built on Shopify or WooCommerce with a limited catalog can launch for ₹15,000 – ₹1,00,000, depending primarily on product count:"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("strong", {
                                                            children: "Up to 15 products:"
                                                        }),
                                                        " ₹15,000 – ₹30,000"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("strong", {
                                                            children: "16–30 products:"
                                                        }),
                                                        " ₹20,000 – ₹40,000"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("strong", {
                                                            children: "30–50 products:"
                                                        }),
                                                        " ₹40,000 – ₹75,000"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("strong", {
                                                            children: "Above 50 products:"
                                                        }),
                                                        " ₹50,000 – ₹1,00,000"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "But a custom-built e-commerce platform with advanced inventory management, multiple payment gateways, and high-traffic scalability can run ₹3,00,000 – ₹15,00,000+. What drives that gap includes:"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                    children: "Catalog size and product complexity (variants, bundles, custom attributes)"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                    children: "Number of payment gateways and third-party integrations"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                    children: "Inventory management and multi-warehouse support"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                    children: "Expected traffic volume and scalability requirements"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: 'The platform you choose changes the ceiling dramatically — which is exactly why "how much does an e-commerce site cost" never has a single answer. Whether you need a WooCommerce store built by an experienced E - commerce Website Development on Shopify, the right partner should be able to justify exactly why your quote falls where it does.'
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                                    id: "pricing",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            children: "How Our Website Development Pricing Compares to the Market"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Most quotes in the market are built around broad, padded estimates. Ours are built around fixed, transparent starting prices — so you know exactly where you stand before you even ask for a quote."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("table", {
                                            className: "tseo-tools-table",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tbody", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
                                                                children: "Service"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
                                                                children: "Typical Market Rate"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
                                                                children: "Our Starting Price"
                                                            })
                                                        ]
                                                    }),
                                                    PRICING_COMPARISON.map((r)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: r.service
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: r.market
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                    children: r.ours
                                                                })
                                                            ]
                                                        }, r.service))
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                                    id: "hidden-costs",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            children: "Hidden & Ongoing Costs Most Quotes Don't Include"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "This is the section most website quotes conveniently skip — and it's often where the real budget surprises show up."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                    children: "Domain and hosting: ₹1,500 – ₹15,000/year, depending on hosting quality and traffic needs."
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                    children: "SSL certificate: Often free with hosting, but premium SSL can run ₹2,000 – ₹10,000/year."
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                    children: "Maintenance and updates: ₹5,000 – ₹25,000/month for security patches, plugin updates, and backups."
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                    children: "Content creation:Copywriting, product photography, and blog content are frequently quoted separately."
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                    children: "SEO and marketing: A website without ongoing SEO rarely ranks — budget ₹15,000 – ₹75,000/month if visibility matters to you."
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                    children: "Third-party app licenses: Payment gateways, CRM tools, and marketing plugins often carry their own subscription costs."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "If a quote you've received looks unusually low compared to everything above, it's worth asking directly what's excluded — not after the contract is signed, but before."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                                    id: "choosing-partner",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            children: "How to Choose the Right Website Development Partner"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Price should never be the only filter. Before signing off on any quote, check for:"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
                                            className: "tseo-checklist",
                                            children: CHOOSING_PARTNER.map((c)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                    children: c
                                                }, c))
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "If you're specifically looking for a website development company in Coimbatore, ask for local case studies and references you can actually verify — proximity matters less than proof of delivery, but working with a team that understands your regional market can still be a meaningful advantage for local SEO and support responsiveness."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "tseo-conclusion-box",
                                    id: "conclusion",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            style: {
                                                marginBottom: "12px"
                                            },
                                            children: "Conclusion"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                    href: "https://www.priyamconsultancy.com/website-development/",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        style: {
                                                            color: "#ed8337"
                                                        },
                                                        children: "Website development"
                                                    })
                                                }),
                                                " cost in India isn't a mystery once you separate it by type, platform, and provider. A brochure site, a WooCommerce store, a Shopify build, and a custom web application all sit on very different points of the pricing spectrum — and the right number for your business depends entirely on what you're trying to achieve, not what a random quote says."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            style: {
                                                marginBottom: 0
                                            },
                                            children: "The smartest move isn't chasing the cheapest number. It's understanding exactly what's included, what's missing, and what it will actually cost you to fix later if the foundation isn't right. Compare quotes with that lens, ask the right questions upfront, and you'll invest in a website that pays for itself — instead of one you end up rebuilding within a year. At PCS, that's exactly the approach we bring to every project — transparent pricing, clear scope, and a build that's meant to last."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Looking for a clear, transparent quote for your project? Reach out and we'll break down exactly what your website needs — and what it will actually cost."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "tseo-cta-banner",
                                    id: "cta-final",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                                    children: "Not Sure What Your Website Should Actually Cost?"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                    children: "Priyam Consultancy Services offers a free project consultation — no pressure. We'll review your requirements and give you a clear, honest quote based on what you actually need."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_4/* ["default"] */.A, {
                                            className: "tseo-cta-btn",
                                            to: "/contact-us",
                                            children: "Get a Free Website Consultation →"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("aside", {
                        className: "tseo-rail",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "tseo-rail-card",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tseo-rail-title",
                                        children: " Digital Marketing Learning Hub"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tseo-hub-grid",
                                        children: HUB_LINKS.map((l)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_4/* ["default"] */.A, {
                                                className: "tseo-hub-link",
                                                to: l.href,
                                                children: [
                                                    l.label,
                                                    " ",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        className: "arrow",
                                                        children: "→"
                                                    })
                                                ]
                                            }, l.href))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "tseo-rail-card tseo-rail-cta",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                        children: "Not Sure What Your Business Needs?"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        children: "Get a free consultation and a custom roadmap from our team at Priyam Consultancy Services — no commitment required.                          "
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_4/* ["default"] */.A, {
                                        className: "tseo-cta-btn",
                                        to: "/contact-us",
                                        children: "Talk to Our Team"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "trust",
                                        children: "20+ Industries Served"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "tseo-rail-card",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tseo-rail-title",
                                        children: "Related Blogs"
                                    }),
                                    relatedLoading && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        className: "tseo-rail-status",
                                        children: "Loading..."
                                    }),
                                    relatedError && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        className: "tseo-rail-status tseo-rail-status-error",
                                        children: "Couldn't load articles."
                                    }),
                                    !relatedLoading && !relatedError && relatedArticles.length === 0 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        className: "tseo-rail-status",
                                        children: "No related articles yet."
                                    }),
                                    relatedArticles.map((a)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                                            className: "tseo-article-card",
                                            href: a.link,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "thumb",
                                                    children: a.thumbnail && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                        src: a.thumbnail,
                                                        alt: a.title,
                                                        loading: "lazy"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h5", {
                                                        children: a.title
                                                    })
                                                })
                                            ]
                                        }, a.id))
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "tseo-rail-card",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tseo-rail-title",
                                        children: "Popular Articles"
                                    }),
                                    RECENT_ARTICLES.map((p, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: "tseo-popular-row",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                    className: "rank",
                                                    children: String(i + 1).padStart(2, "0")
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_4/* ["default"] */.A, {
                                                    to: p.href,
                                                    children: p.title
                                                })
                                            ]
                                        }, p.href))
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* export default */ const __rspack_default_export = (WebsiteDevelopmentCostIndia);


},

};
;