import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";

// ════════════════════════════════════════════
//  DATA
// ════════════════════════════════════════════

const TOC_ITEMS = [
    { id: "intro", num: "00", label: "Introduction" },
    { id: "what-is", num: "01", label: "What Is Performance Marketing?" },
    { id: "how-it-works", num: "02", label: "How Does It Work?" },
    { id: "channels", num: "03", label: "Main Channels" },
    { id: "vs-digital", num: "04", label: "vs Digital Marketing" },
    { id: "campaign-types", num: "05", label: "Types of Campaigns" },
    { id: "tracking", num: "06", label: "Conversion Tracking" },
    { id: "landing-pages", num: "07", label: "Landing Pages" },
    { id: "targeting", num: "08", label: "Audience Targeting" },
    { id: "optimize", num: "09", label: "Optimization Steps" },
    { id: "mistakes", num: "10", label: "Common Mistakes" },
    { id: "when-to-use", num: "11", label: "When to Use It" },
    { id: "benefits", num: "12", label: "Benefits" },
    { id: "trends", num: "13", label: "Trends in 2026" },
    { id: "conclusion", num: "14", label: "Conclusion" },
];

const DEFINING_IDEAS = [
    { b: "Outcome-based spend.", rest: "The budget is tied to actions rather than impressions or placements alone. Some models, like affiliate marketing, pay strictly on results. Others, like Google Ads and Meta Ads, charge by click or impression but are managed and judged entirely by the results they produce." },
    { b: "Measurability.", rest: "Every campaign has a target such as a cost per acquisition (CPA) or return on ad spend (ROAS), and success is judged against it." },
    { b: "Continuous optimization.", rest: "Bids, audiences, creatives, and landing pages are tested and refined all the time, so the campaign keeps improving rather than running on a fixed plan." },
];

const COMPONENTS = [
    { b: "Advertiser.", rest: "The business that wants outcomes such as sales, leads, or installs." },
    { b: "Publisher or platform.", rest: "Google, Meta, YouTube, Microsoft Advertising, LinkedIn, Amazon, affiliate websites, and others where ads appear." },
    { b: "Ad auction.", rest: "On most platforms, each ad opportunity triggers an auction. The winner is determined not only by bid but also by ad quality, expected engagement, and relevance to the user." },
    { b: "Tracking.", rest: "Pixels, tags, server-side events, and offline conversion uploads record what users do after seeing or clicking an ad." },
    { b: "Optimization.", rest: "The data flows back into the platform's machine-learning systems and to the marketer, who adjusts budgets, creatives, audiences, and landing pages." },
];

const LOOP_STEPS = [
    "Define a business goal (for example, 500 qualified leads a month at a CPA under a set limit).",
    "Choose channels and build campaigns with matching audiences and creatives.",
    "Send traffic to conversion-focused landing pages.",
    "Track every conversion accurately.",
    "Analyze results, cut what underperforms, and scale what works.",
    "Repeat, with each cycle informed by the last.",
];

const CHANNELS = [
    { b: "Search advertising (Google Ads, Microsoft Advertising).", rest: "Captures people actively searching for a solution. Intent is high, which makes search the backbone of most programs. Google Ads performance marketing typically combines standard search campaigns with newer AI-driven options." },
    { b: "Social advertising (Meta, LinkedIn, TikTok, Snapchat, Pinterest, X, Reddit).", rest: "Creates and captures demand through targeting and creative. Meta Ads performance marketing covers Facebook and Instagram, where AI-driven campaign automation now handles much of the delivery." },
    { b: "Video advertising (YouTube, connected TV, short-form video).", rest: "Strong for reach with measurable response, especially when paired with lead or shopping formats." },
    { b: "Display and programmatic.", rest: "Broad reach and retargeting across sites and apps, useful for remarketing but needing careful quality control." },
    { b: "Affiliate marketing.", rest: "Partners are paid commission per sale or lead, which makes it one of the purest pay-for-performance models." },
    { b: "Influencer and creator marketing.", rest: "Now measured through tracked links, codes, and creator whitelisting, where brands run ads through a creator's handle." },
    { b: "Native advertising.", rest: "Paid content placements that blend into publisher pages, often used for lead generation and content distribution." },
    { b: "Email and SMS marketing.", rest: "Low-cost owned channels that convert existing leads and customers and lift lifetime value." },
    { b: "Retail media and marketplaces (Amazon Ads, Flipkart, Walmart Connect and others).", rest: "Ads placed close to the point of purchase, with closed-loop sales measurement." },
    { b: "Mobile app advertising.", rest: "Install and in-app action campaigns across app networks and social platforms." },
    { b: "Emerging AI surfaces.", rest: "Ads within AI-generated search experiences and conversational assistants are growing, and advertisers should test them as formats and reporting mature." },
];

const VS_TABLE = [
    { aspect: "Scope", dm: "All online marketing activities", pm: "Paid, outcome-focused activities" },
    { aspect: "Primary goal", dm: "Awareness, engagement, and conversions", pm: "Measurable conversions and ROI" },
    { aspect: "Payment logic", dm: "Mixed (time, effort, or spend)", pm: "Tied to actions such as clicks, leads, and sales" },
    { aspect: "Measurement", dm: "Often broad (traffic, reach, engagement)", pm: "Granular (CPA, ROAS, CAC, LTV)" },
    { aspect: "Time to results", dm: "Slower for SEO and content, faster for paid", pm: "Fast feedback, often within days" },
    { aspect: "Optimization", dm: "Periodic", pm: "Continuous and data-driven" },
];

const CAMPAIGN_TYPES = [
    { b: "Pay-per-click (PPC):", rest: "You pay when someone clicks. Standard for search and many social campaigns." },
    { b: "Cost per acquisition or action (CPA):", rest: "The goal is a completed action such as a purchase or signup." },
    { b: "Cost per lead (CPL):", rest: "Focused on lead-generation forms, calls, or demo requests." },
    { b: "Cost per install (CPI):", rest: "Used in mobile app campaigns." },
    { b: "Cost per mille (CPM) with performance goals:", rest: "You pay per thousand impressions but judge the campaign by conversions, common in social and programmatic." },
    { b: "Cost per sale (CPS) and revenue share:", rest: "Affiliate and partner models where commission is paid on sales." },
    { b: "Retargeting and remarketing:", rest: "Re-engage people who visited your site or interacted with your brand." },
    { b: "Prospecting or acquisition campaigns:", rest: "Reach new potential customers using lookalike, interest, or AI-expanded audiences." },
    { b: "Shopping and catalog campaigns:", rest: "Product-feed-based ads for e-commerce, such as Google Shopping and Meta catalog ads." },
    { b: "Local and call campaigns:", rest: "Drive store visits or phone calls." },
    { b: "Full-funnel campaigns:", rest: "Coordinated prospecting, consideration, and conversion campaigns across channels." },
];

const TRACKING = [
    { b: "Pixels and tags", rest: "are pieces of code on your site, for example through Google Tag Manager, that activate when an action occurs." },
    { b: "Conversion events", rest: "are defined actions such as purchase, lead submission, call click, or add to cart, ranked by their value." },
    { b: "Enhanced conversions and advanced matching", rest: "send hashed first-party data, like email addresses, to boost match rates when cookies are limited." },
    { b: "Server-side tracking and conversion APIs,", rest: "such as Meta's Conversions API or Google's server-side tagging, send events from your server and not only from the browser. This makes tracking more reliable against ad blockers and browser restrictions." },
    { b: "Offline conversion imports", rest: "allow you to upload CRM results like lead, closed deal, or repeat purchase, helping platforms optimize toward actual revenue." },
    { b: "Consent management", rest: "is needed under laws such as GDPR and India's DPDP Act. Consent signals must be captured correctly. Google's Consent Mode keeps measurement useful by modelling when users decline tracking." },
    { b: "Value-based tracking", rest: "passes real order values or lead-quality scores so that bidding focuses on your best customers." },
];

const LANDING_PAGE = [
    { b: "Message match.", rest: "The headline and offer should mirror the ad that brought the visitor." },
    { b: "A single clear goal.", rest: "One primary call to action, with distractions removed." },
    { b: "Fast load speed, especially on mobile.", rest: "Most paid traffic is mobile, and delays lose visitors quickly. Core Web Vitals are a useful benchmark." },
    { b: "Trust signals.", rest: "Reviews, testimonials, certifications, client logos, guarantees, and transparent pricing where appropriate." },
    { b: "Short, friction-free forms.", rest: "Ask only for what qualification requires, and consider multi-step forms for longer ones." },
    { b: "Strong offer and value proposition.", rest: "A clear reason to act now, whether a free consultation, trial, or discount." },
    { b: "Mobile-first design.", rest: "Tappable buttons, readable text, and click-to-call where relevant." },
    { b: "Continuous testing.", rest: "A/B and multivariate tests on headlines, images, form length, and layout, run long enough to reach statistical confidence." },
];

const TARGETING = [
    { b: "Intent-based targeting.", rest: "Keywords and search queries show what someone wants right now. Search and shopping campaigns depend on it." },
    { b: "Demographic and geographic targeting.", rest: "Age, gender, location, language, and device, still useful for local and regulated businesses." },
    { b: "Interest and behavioral targeting.", rest: "Affinity and in-market segments on Google, and interest-based audiences on social platforms." },
    { b: "First-party data audiences.", rest: "Customer lists, CRM segments, website visitors, and app users. In a privacy-first environment, these are the most valuable targeting assets." },
    { b: "Lookalike and similar audiences.", rest: "Platforms find new people resembling your best customers. Quality depends on the seed data you provide." },
    { b: "Retargeting.", rest: "Reaching visitors who viewed products, abandoned carts, or engaged with content." },
    { b: "Contextual targeting.", rest: "Placing ads based on page or content topic rather than user identity, which is growing again as cookies and identifiers decline." },
    { b: "AI-driven broad targeting.", rest: "Campaigns like Performance Max and Advantage+ rely on the advertiser's signals (creatives, conversion data, audience hints) and let the algorithm find converters. The more you narrow manually, the less the AI can learn, so in many accounts the winning approach is broader targeting with stronger data and creative. This is a defining feature of AI in performance marketing." },
    { b: "Exclusions.", rest: "Excluding existing customers from acquisition campaigns, filtering irrelevant search terms with negative keywords, and blocking poor placements protect efficiency." },
];

const OPTIMIZE = [
    { title: "Fix the foundations first", desc: "Verify tracking, conversion definitions, and CRM integration before optimizing anything." },
    { title: "Set the right goal", desc: "Use profit-aware targets such as target CPA or target ROAS based on margins and LTV, not vanity metrics." },
    { title: "Structure campaigns for learning", desc: "Avoid splitting the budget across too many campaigns. Automated bidding needs enough conversion volume, and fragmentation starves it." },
    { title: "Prioritize creative", desc: "On modern AI-driven platforms, creative is the main lever advertisers still control. Test multiple concepts, hooks, formats, and messages, and refresh them before fatigue sets in. Short-form video and user-generated-style content often perform well." },
    { title: "Feed the algorithm better signals", desc: "Send value-based and offline conversions, first-party audiences, and clean product feeds." },
    { title: "Test systematically", desc: "Change one major variable at a time when possible, define success criteria in advance, and let tests run long enough to be reliable." },
    { title: "Manage search quality", desc: "Review search-term reports, add negative keywords, and refine match types and asset text, particularly as broader AI-expanded matching becomes standard in Google Ads performance marketing." },
    { title: "Improve the post-click experience", desc: "Run conversion rate optimization (CRO) tests on landing pages, forms, and checkout." },
    { title: "Allocate budget by marginal returns", desc: "Shift spend toward channels and campaigns where the next unit of spend still returns above target, using incrementality and MMM insights rather than platform claims alone." },
    { title: "Use scaling discipline", desc: "Increase budgets gradually, watch for efficiency decay, and expand into new audiences, channels, and geographies as saturation appears." },
    { title: "Review on a rhythm", desc: "Daily monitoring for anomalies, weekly performance reviews, monthly strategy adjustments, and quarterly measurement audits." },
];

const MISTAKES = [
    { b: "Broken or incomplete tracking.", rest: "Duplicate events, missing conversions, and unverified tags corrupt every decision." },
    { b: "Optimizing for cheap leads instead of quality leads.", rest: "Without CRM feedback, platforms find the easiest converters, not the best customers." },
    { b: "Ignoring profit and LTV.", rest: "Chasing ROAS without considering margins, returns, and repeat purchase behavior can grow revenue while shrinking profit." },
    { b: "Over-trusting platform-reported numbers.", rest: "Attribution overlap inflates results across channels." },
    { b: "Neglecting landing pages.", rest: "Sending expensive traffic to slow, generic, or confusing pages." },
    { b: "Creative fatigue.", rest: "Running the same ads too long as frequency rises and performance drops." },
    { b: "Over-fragmented campaigns.", rest: "Too many small campaigns and ad sets that never exit the learning phase." },
    { b: "Unrealistic expectations.", rest: "Performance marketing is fast, but it still needs a testing period, and results depend on product-market fit, pricing, and offer strength." },
];

const WHEN_TO_USE = [
    { b: "You want measurable near-term growth.", rest: "Startups, e-commerce brands, and lead-generation businesses often start here." },
    { b: "Outcomes can be tracked clearly.", rest: "Online sales, form fills, calls, bookings, and app installs are all trackable." },
    { b: "Unit economics are known.", rest: "Understanding margins, CAC limits and LTV lets you set targets" },
    { b: "A product is.", rest: "A new market is being entered. Fast testing helps validate messaging, audiences and demand." },
    { b: "Sales cycles are short to moderate.", rest: "Faster feedback loops mean optimization though long B2B cycles can work with proper CRM integration" },
    { b: "You want to scale.", rest: "Once a profitable channel and formula are found spend can be increased in controlled steps." },
    { rest: "It should be paired with efforts when brand awareness is very low the product or offer is weak the site experience is poor or there is no way to measure outcomes. Performance marketing amplifies what exists so a weak offer scales into wasted spend." },

];

const AGENCY_CHECKLIST = [
    "Proven, relevant case studies with real numbers, not vague claims.",
    "Transparent reporting and direct account access, so you own your ad accounts and data.",
    "Strength in tracking, measurement, and conversion rate optimization (CRO), not just media buying.",
    "A clear approach to creative production and testing.",
    "Fee structures aligned with your goals, whether retainer, percentage of spend, hybrid, or performance-linked.",
    "Communication quality, strategic thinking, and willingness to challenge you.",
    "Experience with your industry and business model, and certifications or platform partnerships as a supporting signal.",
];

const BENEFITS = [
    { b: "Measurable ROI.", rest: "You can see what each campaign spends and returns, and decisions rest on data rather than intuition." },
    { b: "Cost control.", rest: "Budgets, bids, and targets can be adjusted at any time, and underperformers can be stopped quickly." },
    { b: "Lower waste.", rest: "Spend follows outcomes and intent, reducing money lost on irrelevant audiences." },
    { b: "Speed and flexibility.", rest: "Campaigns launch fast, produce feedback within days, and can respond to seasonality, promotions, or market shifts." },
    { b: "Scalability.", rest: "Proven campaigns can be expanded across audiences, channels, and regions." },
    { b: "Precise targeting.", rest: "Reach people by intent, behavior, and first-party data." },
    { b: "Rich customer insight.", rest: "Testing reveals which messages, offers, and audiences resonate, and this learning feeds product, pricing, and brand decisions." },
    { b: "Full-funnel capability.", rest: "Campaigns can address awareness, consideration, conversion, and retention with tailored goals." },
    { b: "Accessibility.", rest: "Businesses of many sizes can begin with modest budgets and grow with results." },
    { b: "Alignment with business goals.", rest: "Because it is tied to leads, sales, and revenue, performance marketing gives marketing a clear seat in business conversations." },
];

const TRENDS = [
    { b: "AI is embedded in the workflow.", rest: "AI in performance marketing now covers bidding, targeting, creative generation, asset testing, reporting, and forecasting. Marketers who do best treat AI as a partner: they supply the strategy, data, brand judgment, and creative direction." },
    { b: "Creative is the new targeting.", rest: "With algorithms finding audiences, distinct and varied creative earns much of the performance edge. Volume and diversity of tested concepts matter." },
    { b: "First-party data is a competitive asset.", rest: "Consent-based data collection, CRM integration, and clean event pipelines directly improve algorithm performance." },
    { b: "Measurement has matured.", rest: "Incrementality testing and MMM sit alongside platform reporting, and blended metrics guide budget decisions." },
    { b: "Search is evolving.", rest: "AI-generated answers and conversational discovery are changing how people find products, and ad formats within these experiences are still developing. Advertisers should test carefully and keep their feeds, structured data, and content strong." },
];

const ARTICLES = [
    { title: "What Is Performance Marketing? A Complete Guide (2026)", href: "/article/what-is-performance-marketing", date: "2026-10-06" },
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

const PAGE_TITLE = "Best performance marketing agencies | Complete Guide";
const PAGE_DESC =
    "Learn what performance marketing is, how it works, key channels, metrics, tracking methods, and proven strategies to improve ROI and scale campaigns.";
const PAGE_URL = "https://www.priyamconsultancy.com/article/what-is-performance-marketing";
const PAGE_IMG = "https://www.priyamconsultancy.com/img/article/what-is-performance-marketing.webp";

// Reusable bold-lead bullet list
const BoldList = ({ items }) => (
    <ul>
        {items.map((i) => (
            <li key={i.b}>
                <strong>{i.b}</strong> {i.rest}
            </li>
        ))}
    </ul>
);

// ════════════════════════════════════════════
//  MAIN PAGE
// ════════════════════════════════════════════

function PerformanceMarketing() {
    const [activeSection, setActiveSection] = useState("intro");
    const [progress, setProgress] = useState(0);

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
        <Layout title={PAGE_TITLE} description={PAGE_DESC}>
            <Head>
                <title>{PAGE_TITLE}</title>
                <meta name="description" content={PAGE_DESC} />
                <meta
                    name="keywords"
                    content="real estate crm,customer relationship management real estate,crm in real estate industry, real estate crm software,crm software for real estate industry, real estate crm software,crm software for real estate industry, best real estate crm,"
                />
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

                <script type="application/ld+json">{`
{
 "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.priyamconsultancy.com/article/best-performance-marketing-agencies/#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.priyamconsultancy.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Best Performance Marketing Agencies",
      "item": "https://www.priyamconsultancy.com/article/best-performance-marketing-agencies"
    }
  ]
}
`}</script>


            </Head>

            <style>{`
        main { background: #fff; }
        .tseo-breadcrumb{ padding:30px 24px; font-size:13px; color:#6B7A94;}
        .tseo-breadcrumb a{color:#6B7A94; border-bottom:1px dotted transparent;}
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
        .tseo-hero h1{ font-size:40px; font-weight:700; letter-spacing:-.01em; margin-bottom:32px;}
        .tseo-dek{ font-size:18px; color:#6B7A94; line-height:1.5; margin-bottom:24px;}
        .tseo-hero-img{ width:100%; aspect-ratio:16/8; border-radius:14px; overflow:hidden;}
        .tseo-hero-img img{ width:100%; height:100%;  display:block;}

        .tseo-content section{ margin-bottom:20px; }
        .tseo-content h2{ font-size:27px; font-weight:700; margin-bottom:16px; scroll-margin-top:24px; letter-spacing:-.005em;}
        .tseo-content h3{ font-size:19px; font-weight:600; margin:22px 0 10px;}
        .tseo-content p{ font-size:15px; line-height:1.75; color:#6B7A94; margin:0 0 16px;}
        .tseo-content ul, .tseo-content ol{ font-size:16px; line-height:1.75; color:#2B362F; padding-left:22px; margin:0 0 16px;}
        .tseo-content li{ margin-bottom:6px; color:#6B7A94; font-size:15px;}
        .tseo-content strong{ color:#0D1F3C; }

        .tseo-practice-list{ display:grid; gap:14px; margin:18px 0;}
        .tseo-practice-item{ display:grid; grid-template-columns:34px 1fr; gap:14px; padding:12px 0; border-bottom:1px solid #F0E0D0;}
        .tseo-practice-item .num{ font-family:'JetBrains Mono',monospace; color:#ED8337; font-weight:700; font-size:14px;}
        .tseo-practice-item h4{ font-size:16px; margin-bottom:4px; font-weight:600;}
        .tseo-practice-item p{ margin:0; font-size:14.5px; color:#6B7A94;}

        .tseo-mistake-list{ display:grid; gap:10px; margin:18px 0;}
        .tseo-mistake-item{ padding:14px 16px; background:#FBEFEA; border-left:3px solid #C2492E; border-radius:14px; font-size:14.5px; line-height:1.6; color:#3a2a23;}
        .tseo-mistake-item b{ color:#7A2E1B; }

        .tseo-tools-table{ width:100%; border-collapse:collapse; margin:18px 0; font-size:14.5px;}
        .tseo-tools-table th{ text-align:left; padding:10px 12px; background:#FFF0E6; font-size:12px; text-transform:uppercase; letter-spacing:.05em; color:#6B7A94; font-weight:700;}
        .tseo-tools-table td{ padding:12px 12px; border-bottom:1px solid #F0E0D0; color:#2B362F;}
        .tseo-tools-table tr:last-child td{ border-bottom:none;}
        .tseo-table-scroll{ overflow-x:auto; }

        .tseo-checklist{ display:grid; gap:10px; margin:18px 0; list-style:none; padding:0;}
        .tseo-checklist li{ display:flex; gap:12px; font-size:15px; line-height:1.6; color:#6B7A94;}
        .tseo-checklist li::before{ content:"✓"; color:#ED8337; font-weight:700; flex-shrink:0;}

        .tseo-cta-banner{ background:linear-gradient(120deg, #004168, #0D1F3C 110%); color:#FFFDFB; border-radius:14px; padding:36px 34px; margin:48px 0; display:flex; align-items:center; justify-content:space-between; gap:24px; flex-wrap:wrap;}
        #cta-final{ background:linear-gradient(120deg,#004168,#0D1F3C 110%); }
        .tseo-cta-banner h3{ color:#fff; font-size:22px; margin-bottom:8px;}
        .tseo-cta-banner p{ color:#D9E6DE; font-size:14.5px; margin:0; }
        .tseo-cta-btn{ background:#ED8337; color:#2A1000; font-weight:700; padding:13px 24px; border-radius:10px; font-size:14px; white-space:nowrap; letter-spacing:.01em; transition:transform .15s ease; display:inline-block;}
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
                <Link to="/blog">Resources</Link>
                <span className="sep">/</span>
                <Link to="/performance-marketing">Performance Marketing</Link>
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
                            <span className="tseo-eyebrow">Performance Marketing · Complete Guide</span>
                            <h1>What Is Performance Marketing? A Complete Guide to How It Works, Channels, Metrics, and Strategies</h1>

                            <div className="tseo-hero-img">
                                <img src="/img/article/what-is-performance-marketing.webp" alt="What is performance marketing" />
                            </div>
                        </div>

                        <section id="intro">
                            <p>
                                Every business wants marketing that can be measured, defended, and scaled. Performance marketing exists for that reason. Instead of paying for exposure and hoping it turns into revenue, you pay for outcomes such as clicks, leads, app installs, and sales, and every rupee, dollar, or euro can be traced to a result.
                            </p>
                            <p>
                                The discipline has changed a great deal. A few years ago, performance marketing meant manually managing keywords and bids in Google Ads and Meta Ads. Now it means feeding clean first-party data to AI-driven campaign types, producing creativity at volume, measuring true incrementality instead of platform-reported conversions, and running campaigns under tighter privacy rules. This shift is at the heart of AI in performance marketing.
                            </p>
                            <p>
                                This guide covers performance marketing from the fundamentals to the advanced practices in use as of September 2026. It explains how a performance marketing campaign works, which performance marketing channels and performance marketing metrics matter, how tracking and attribution function, and how to build a performance marketing strategy. It also covers how to decide between running things in-house and hiring one of the best performance marketing agencies.
                            </p>
                        </section>

                        <section id="what-is">
                            <h2>What Is Performance Marketing?</h2>
                            <p>
                                Performance marketing is a results-based form of digital marketing in which advertisers pay only when a specific, predefined action occurs. That action might be a click, a form submission, a phone call, a purchase, an app install, or a qualified lead.
                            </p>
                            <p>Three ideas define performance marketing:</p>
                            <BoldList items={DEFINING_IDEAS} />
                            <p>
                                Performance marketing is not a channel. It is an approach that can be applied to search, social, video, affiliate, native, email, connected TV, and retail media.
                            </p>
                        </section>

                        <section id="how-it-works">
                            <h2>How Does Performance Marketing Work?</h2>
                            <p>The mechanics of performance marketing follow a loop with a few main components:</p>
                            <BoldList items={COMPONENTS} />
                            <p>In practice, a performance marketing campaign loops like this:</p>
                            <ol>
                                {LOOP_STEPS.map((s) => (
                                    <li key={s}>{s}</li>
                                ))}
                            </ol>
                            <p>
                                Modern platforms automate much of the bidding and targeting. The marketer's value has shifted toward performance marketing strategy, data quality, creative, measurement, and the offer itself.
                            </p>
                        </section>

                        <section id="channels">
                            <h2>What Are the Main Channels Used in Performance Marketing?</h2>
                            <p>
                                Performance marketing channels differ in intent, cost, and scalability. Most successful programs combine several.
                            </p>
                            <BoldList items={CHANNELS} />
                        </section>

                        <section id="vs-digital">
                            <h2>What Is the Difference Between Performance Marketing and Digital Marketing?</h2>
                            <p>
                                Digital marketing is the broad umbrella covering every marketing activity done online: SEO, content, social media, email, branding, paid ads, and more. Performance marketing is a subset of it, focused on paid and partner activity where results are directly measurable and payment or budget is tied to outcomes.
                            </p>
                            <div className="tseo-table-scroll">
                                <table className="tseo-tools-table">
                                    <tbody>
                                        <tr>
                                            <th>Aspect</th>
                                            <th>Digital Marketing</th>
                                            <th>Performance Marketing</th>
                                        </tr>
                                        {VS_TABLE.map((r) => (
                                            <tr key={r.aspect}>
                                                <td><strong>{r.aspect}</strong></td>
                                                <td>{r.dm}</td>
                                                <td>{r.pm}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p>
                                The two work best together. Brand and content marketing build demand and trust that make paid campaigns more efficient, while performance marketing captures and converts that demand.
                            </p>
                        </section>

                        <section id="campaign-types">
                            <h2>What Are the Different Types of Performance Marketing Campaigns?</h2>
                            <p>
                                A performance marketing campaign is usually grouped by the action it pays for or optimizes toward:
                            </p>
                            <BoldList items={CAMPAIGN_TYPES} />
                            <p>
                                Google's automated formats deserve a separate mention in any <strong>Google Ads performance marketing </strong> plan: Performance Max(which runs across Google's inventory from one campaign), Demand Gen (visual, feed-based and video formats across YouTube, Discover and Gmail), and AI Max for Search, which extends search campaigns with broader match and AI-generated assets. For <strong>Meta Ads performance marketing</strong>, Advantage+ campaigns automate audience, placement, and creative delivery.
                            </p>
                        </section>

                        <section id="tracking">
                            <h2>What Is Conversion Tracking in Performance Marketing?</h2>
                            <p>
                                Conversion tracking records user actions and ties them back to the ads that caused those actions. If you do not have conversion tracking, you will be guessing when you try to optimize, and your automated bidding system will not learn anything.
                            </p>
                            <p>Key components:</p>
                            <BoldList items={TRACKING} />
                            <p>
                                Poor tracking is one of the most common reasons a performance marketing campaign fails. That means you should audit your pixels, tags, events, and duplicates before you increase your budget.
                            </p>
                        </section>

                        <section id="landing-pages">
                            <h2>How Do Landing Pages Affect Performance Marketing Results?</h2>
                            <p>
                                A great ad cannot save a weak landing page. Since paid traffic costs money on every click, page quality directly determines CPA and ROAS. A page that lifts conversion rate from 2% to 3% cuts acquisition cost by roughly a third without touching the ad budget. This is the core idea behind conversion rate optimization (CRO).
                            </p>
                            <p>What makes a landing page perform:</p>
                            <BoldList items={LANDING_PAGE} />
                            <p>
                                Increasingly, AI tools help generate and personalize page variants for different audiences, but the discipline of testing against real conversion data still applies to any conversion rate optimization (CRO) program.
                            </p>
                        </section>

                        <section id="targeting">
                            <h2>How Does Audience Targeting Work in Performance Marketing?</h2>
                            <p>
                                Targeting decides who sees your ads. Its nature has shifted from manual precision toward signal-driven automation.
                            </p>
                            <BoldList items={TARGETING} />
                        </section>

                        <section id="optimize">
                            <h2>Steps to Optimize a Performance Marketing Campaign</h2>
                            <p>
                                Optimization is where performance marketing earns its name. A practical performance marketing strategy framework:
                            </p>
                            <div className="tseo-practice-list">
                                {OPTIMIZE.map((o, i) => (
                                    <div className="tseo-practice-item" key={o.title}>
                                        <div className="num">{String(i + 1).padStart(2, "0")}</div>
                                        <div>
                                            <h4>{o.title}</h4>
                                            <p>{o.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>


                        <section id="mistakes">
                            <h2>What Are the Common Performance Marketing Mistakes?</h2>
                            <BoldList items={MISTAKES} />
                        </section>

                        <section id="when-to-use">
                            <h2>When Should a Business Use Performance Marketing?</h2>
                            <p>Performance marketing is a fit when:</p>
                            <BoldList items={WHEN_TO_USE} />
                            <p>
                                In‑house versus agency. Many businesses hire a specialist partner for expertise, tools and speed. When evaluating performance marketing agencies and when searching for the performance marketing agencies look for:              </p>
                            <ul className="tseo-checklist">
                                {AGENCY_CHECKLIST.map((c) => (
                                    <li key={c}>{c}</li>
                                ))}
                            </ul>
                        </section>

                        <section id="benefits">
                            <h2>What Are the Benefits of Performance Marketing?</h2>
                            <BoldList items={BENEFITS} />
                        </section>

                        <section id="trends">
                            <h2>Performance Marketing Trends: What's Different Now</h2>
                            <p>
                                To be current as of September 2026, these performance marketing trends 2026 matter most:
                            </p>
                            <BoldList items={TRENDS} />
                            <p>
                                Because platform features and policies change frequently, confirm current details in each platform's documentation before building a performance marketing strategy around a specific feature.
                            </p>
                        </section>

                        <section id="conclusion">
                            <h2>Conclusion</h2>
                            <p>
                                Performance marketing turns advertising spend into measurable business results. The principles are constant: track what matters, test relentlessly, and invest where returns are proven. What has changed is the tooling. AI handles much of the mechanical work, so success now depends on clear strategy, healthy unit economics, quality first-party data, strong creative, credible measurement, and landing pages that convert.
                            </p>
                            <p>
                                Start by defining goals and margins, setting up reliable tracking, and launching your first performance marketing campaign on intent-rich channels such as Google Ads performance marketing and Meta Ads performance marketing. Then add channels, layer in incrementality testing, and scale with discipline.
                            </p>
                            <p>
                                For businesses that want an experienced partner, PCS combines strategy, tracking, creative, and conversion optimization to build campaigns around revenue rather than vanity metrics. Whether you are comparing the best performance marketing agencies or planning your first campaign, PCS can help you turn ad spend into predictable, profitable growth.
                            </p>
                        </section>


                        {/* MIDDLE CTA */}
                        <div className="tseo-cta-banner" id="cta-mid">
                            <div>
                                <h3>Not Sure If Your Performance Marketing Is Actually Delivering ROI?</h3>
                                <p>
                                    Priyam Consultancy Services offers a free performance marketing consultation, with no pressure. We'll review your current campaigns, tracking, and landing pages, and tell you exactly where your ad spend is leaking.
                                </p>
                            </div>
                            <Link className="tseo-cta-btn" to="/contact-us">
                                Get a Free Performance Marketing Consultation
                            </Link>
                        </div>

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
                            Get a free consultation and a custom roadmap from our team at Priyam Consultancy Services — no commitment required.
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

export default PerformanceMarketing;