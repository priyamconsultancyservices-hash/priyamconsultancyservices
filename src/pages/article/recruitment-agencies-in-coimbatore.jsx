import React, { useEffect, useRef, useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";

// ════════════════════════════════════════════
//  DATA
// ════════════════════════════════════════════

const TOC_ITEMS = [
    // { id: "intro", num: "", label: "Introduction" },
    { id: "what-is", num: "01", label: "What Is Recruitment in HR? Definition, Types, Process & Everything You Need to Know" },
    { id: "how-hire", num: "02", label: "How a Hire Actually Comes Together" },
    { id: "strategy-1", num: "03", label: "What Happens After the Offer Is Accepted" },
    { id: "strategy-2", num: "04", label: "What Are the Main Types and Approaches to Recruitment?" },
    { id: "strategy-3", num: "05", label: "What Are the 7 Common Steps in a Recruitment Process?" },
    { id: "strategy-4", num: "06", label: "Recruitment vs. Selection: A Distinction Worth Knowing" },
    { id: "strategy-5", num: "07", label: "Why Businesses Choose to Work With an HR Consultancy or Recruitment Agency" },

   
    { id: "conclusion", num: "08", label: "Conclusion" },

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
        href: "/article/seo-strategies-for-small-businesses-india/",
        date: "2026-08-04",
    },
  { title: "Website Development Cost in India (2026): Real Ranges by Type, Not Guesswork", href: "/article/website-development-cost-in-india", date: "2026-09-01" },

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
      "position": 1,
      "name": "Home",
      "item": "https://www.priyamconsultancy.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Recruitment Agencies in Coimbatore",
      "item": "https://www.priyamconsultancy.com/recruitment-agencies-in-coimbatore/"
    }
  ],
};
const JSON_LD_FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.priyamconsultancy.com/recruitment-agencies-in-coimbatore/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is recruitment in HR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recruitment in HR is the process of identifying a hiring need, attracting and sourcing candidates, evaluating applicants, selecting the right candidate, extending an offer, and supporting the new hire through onboarding.",
      },
    },
    {
      "@type": "Question",
      name: "What are the main types of recruitment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The two main types of recruitment are internal recruitment and external recruitment. Businesses may also use recruitment outsourcing or Recruitment Process Outsourcing (RPO) to have an external partner manage part or all of the recruitment process.",
      },
    },
    {
      "@type": "Question",
      name: "What are the 7 steps in the recruitment process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The seven common steps are identifying the hiring need, creating a job description, sourcing candidates, screening and shortlisting applications, interviewing candidates, selecting a candidate and extending an offer, and onboarding the new hire.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between recruitment and selection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recruitment generally focuses on identifying the hiring need and attracting and sourcing potential candidates, while selection focuses on evaluating candidates and deciding who should receive an offer. In some HR frameworks, selection is considered part of the broader recruitment process.",
      },
    },
    {
      "@type": "Question",
      name: "Why do businesses use recruitment agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Businesses use recruitment agencies to access recruitment expertise, sourcing networks, structured hiring processes, and support with activities such as candidate sourcing, screening, shortlisting, selection, and onboarding.",
      },
    },
    {
      "@type": "Question",
      name: "How can recruitment agencies in Coimbatore help businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recruitment agencies in Coimbatore can support businesses with candidate sourcing, screening, shortlisting, recruitment coordination, selection support, and onboarding assistance based on their hiring requirements.",
      },
    },
  ],
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
    const sections = TOC_ITEMS
        .map((t) => ({ id: t.id, el: document.getElementById(t.id) }))
        .filter((s) => s.el);

    function onScroll() {
        let activeId = sections[0]?.id;
        const scrollPos = window.scrollY + 140;
        sections.forEach((sec) => {
            if (sec.el.offsetTop <= scrollPos) activeId = sec.id;
        });
        setActiveSection(activeId);

        const doc = document.documentElement;
        const pct = (window.scrollY / (doc.scrollHeight - window.innerHeight)) * 100;
        setProgress(Math.min(100, Math.max(0, pct)));
    }

    document.addEventListener("scroll", onScroll);
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
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
            title="Recruitment Agencies in Coimbatore | Hiring & HR Services"
            description=" Looking for recruitment agencies in Coimbatore? Learn about recruitment types, processes, hiring strategies, and how HR services can support your business. "
        >
            <Head>
                <title>Recruitment Agencies in Coimbatore | Hiring & HR Services </title>
                <meta
                    name="description"
                    content=" Looking for recruitment agencies in Coimbatore? Learn about recruitment types, processes, hiring strategies, and how HR services can support your business. "
                />
                <meta
                    name="keywords"
                    content="recruitment agencies in coimbatore,hr consultancy in coimbatore,hr services in coimbatore,hr companies in coimbatore,hr services."
                />
                <link rel="canonical" href="https://www.priyamconsultancy.com/article/recruitment-agencies-in-coimbatore/" />

                <meta property="og:type" content="article" />
                <meta property="og:title" content="Recruitment Agencies in Coimbatore | Hiring & HR Services" />
                <meta
                    property="og:description"
                    content="Looking for recruitment agencies in Coimbatore? Learn about recruitment types, processes, hiring strategies, and how HR services can support your business. "
                />
                <meta property="og:url" content="https://www.priyamconsultancy.com/article/recruitment-hr/" />
                <meta property="og:site_name" content="Priyam Consultancy Services" />
                <meta property="og:image" content="https://www.priyamconsultancy.com/img/article/recruitment-agencies-in-coimbatore.webp" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Recruitment Agencies in Coimbatore | Hiring & HR Services" />
                <meta
                    name="twitter:description"
                    content="Looking for recruitment agencies in Coimbatore? Learn about recruitment types, processes, hiring strategies, and how HR services can support your business. "
                />
                <meta name="twitter:image" content="https://www.priyamconsultancy.com/img/article/recruitment-agencies-in-coimbatore.webp" />
            </Head>

            {/* Breadcrumb Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_BREADCRUMB) }}
            />
            {/* FAQ Schema */}
<script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_FAQ) }}
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

        .tseo-cta-banner{ background:linear-gradient(120deg, #004168, #0D1F3C 110%); color:#FFFDFB; border-radius:14px; padding:36px 34px; margin:48px 0; display:flex; align-items:center; justify-content:space-between; gap:24px; flex-wrap:wrap;}
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
                <Link to="/hr-services">HR</Link>
                <span className="sep">/</span>
                <span>What Is Recruitment in HR?</span>
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
                        <div className="tseo-hero" id="what-is">
                            <span className="tseo-eyebrow">HR · Recruitment</span>
                            <h1>What Is Recruitment in HR? Definition, Types, Process & Everything You Need to Know</h1>
                            <p className="tseo-dek" style={{ marginTop: "25px" }}>
                                Recruitment is the process of identifying a hiring need, finding the right person for it, and bringing them successfully into the business. It's easy to think of this as just "posting a job and picking someone," but in practice, it spans everything from budgeting and planning before a role is even created, to attracting and evaluating the right candidates, through to a hire settling successfully into the team. Businesses that don't have this fully covered in-house often turn to HR services or one of the established <a href="/recruitment-services/"><span  style={{color: 'rgb(237 131 55)'}}>recruitment agencies </span></a> to manage the process properly.
                            </p>
                            <div className="tseo-hero-img" style={{ padding: 0 }}>
                                <img src="/img/article/Article3.webp" />
                            </div>
                        </div>

                        <div id="how-hire">
                            <h3>How a Hire Actually Comes Together</h3>
                            <p>
                                Before a job is ever posted, there's groundwork that shapes whether the eventual hire makes sense for the business. This starts with getting the basics right — finalizing a budget for the role, aligning the hiring decision with the broader financial year plan, and clearly identifying the specific skill or resource gap the business is trying to fill. Skipping this groundwork is one of the most common reasons hiring goes wrong before it even starts — a role gets created without a clear budget or justification, and the business ends up overpaying, hiring for the wrong skill set, or filling a position that didn't need to exist.

                            </p>
                            <p>
                                Once that groundwork is in place, the hiring itself moves forward: a job description is built around the specific role identified earlier, candidates are actively sourced through job boards, referrals, or direct outreach, and once the right person is found, a formal offer is issued and accepted. This is the stage most people associate with "recruitment" — but it only works well when it's built on solid planning underneath it.
                            </p>

                        </div>
                        <section id="strategy-1">
                            <h2>What Happens After the Offer Is Accepted</h2>
                            <p>
                                Recruitment connects closely with onboarding, but they are distinct stages of the employee lifecycle. Recruitment focuses on attracting and hiring the right candidate; onboarding begins after the offer is accepted and helps the new employee integrate into the organization. That transition includes completing formal documentation as the new employee enters the system, following a structured onboarding checklist so nothing important gets missed, and a proper handover where the new hire is introduced to their team and responsibilities.
                            </p>
                            <p>
                                Onboarding also typically means setting clear expectations early — discussing how performance will be evaluated and building the foundation for ongoing engagement so the person stays motivated well beyond their first few weeks. Getting the new hire set up correctly in payroll and other HR administration systems is usually handled as part of this onboarding stage rather than recruitment itself. A structured onboarding process can support early integration, employee experience, and longer-term retention — though outcomes will naturally vary by organization and role.
                            </p>


                        </section>

                        <section id="strategy-2">
                            <h4>What Are the Main Types and Approaches to Recruitment?</h4>
                            <p>
                                Businesses generally draw on a mix of the following approaches to recruitment, depending on their size, hiring volume, and internal resources. Internal and external recruitment are the two most established categories, while outsourcing is better understood as a delivery model businesses use to run either of those approaches — rather than a separate, distinct "type" of recruitment in its own right.
                            </p>
                            <p>
                                <strong>1. Internal Recruitment</strong> This involves filling a vacancy with an existing employee — through a promotion, transfer, or internal job posting — rather than hiring externally. It's typically faster, cheaper, and comes with less onboarding risk, since the person already understands the company's culture and systems.
                            </p>

                            <p>
                                Internal recruitment works especially well for leadership transitions and roles that require deep institutional knowledge — the ramp-up time is minimal because the person already knows how the business operates. The trade-off is that it doesn't bring new skills or perspectives into the organization, and it can create a vacancy elsewhere that then needs to be filled anyway. Businesses that rely on internal recruitment too heavily also risk stagnation — the same ideas and approaches simply get recycled into new positions.

                            </p>
                            <p>
                                <strong>2. External Recruitment</strong> This is the traditional approach: sourcing candidates from outside the organization through job boards, social media, employee referrals, or direct outreach. External recruitment widens the talent pool and brings in fresh skills and perspectives that may not exist internally yet.
                            </p>
                            <p>
                                External recruitment is essential when a business is scaling, entering a new function it hasn't hired for before, or specifically wants to introduce new ways of thinking into a team. It typically takes longer than internal recruitment and carries more onboarding risk, since the new hire has no existing familiarity with the company's culture, tools, or working style — which is exactly why the later steps of the <a href="https://www.cipd.org/en/knowledge/factsheets/recruitment-factsheet/"><span  style={{color: 'rgb(237 131 55)'}}>recruitment process</span></a> (screening, interviewing, structured onboarding) matter more here than with internal moves.
                            </p> 
                            <p>
                                <strong>3. Recruitment Outsourcing / RPO</strong> Here, all or part of the recruitment process — internal or external — is handed over to an external partner: a recruitment agency, an HR consultancy in Coimbatore, or a Recruitment Process Outsourcing (RPO) provider. This is common for businesses that don't have the internal bandwidth, expertise, or time to manage sourcing, screening, and shortlisting on their own, and want a structured process handled for them.
                            </p>
                            <p>
                                Outsourced recruitment can range from a single-role engagement — filling one specific position — to a full RPO arrangement, where a partner effectively runs the organization's entire hiring function on an ongoing basis. It's particularly useful for businesses hiring for the first time at scale, hiring for niche or hard-to-fill roles, or simply wanting recruitment expertise without building it internally from scratch. The main consideration is choosing a partner who understands the specific role and industry well enough to represent the business accurately to candidates.

                            </p>
                            <p>
                                Most growing businesses end up using a mix of these approaches, depending on the role — promoting internally for leadership positions while relying on external sourcing or an outsourced partner for specialized or high-volume hiring.

                            </p>
                        </section>

                        <section id="strategy-3">
                            <h4>What Are the 7 Common Steps in a Recruitment Process?</h4>
                            <p>
                                There is no single, universally standardized recruitment process — different organizations and HR frameworks structure it differently. That said, most practical recruitment efforts follow a similar sequence, commonly broken into seven core steps:
                            </p>
                            <p>
                                <strong>1. Identify the Hiring Need </strong>
                                Before anything else, the business defines exactly what role needs to be filled, why, and what success in that role looks like. This step also involves deciding whether the role is a replacement, a newly created position, or a response to a specific growth bottleneck — because each of those scenarios changes what the ideal candidate profile actually looks like.

                            </p>
                            <p>
                                <strong>2. Create a Job Description </strong>
                                A clear, accurate job description is drafted — outlining responsibilities, required skills, reporting structure, and expectations — since a vague description is one of the most common reasons recruitment goes wrong from the start. A good job description does double duty: it attracts the right applicants and discourages unqualified ones from applying in the first place, saving screening time later.

                            </p>
                            <p>
                                <strong>3. Source Candidates </strong>
                                Candidates are actively sourced through job boards, referrals, professional networks, social media, or outreach to passive candidates who aren't actively job-hunting. Sourcing is where recruitment stops being reactive (waiting for applications) and becomes proactive — actively going after the kind of candidate the role actually needs, rather than settling for whoever happens to apply.

                            </p>
                            <p>
                                <strong>4. Screen and Shortlist </strong>
                                Applications are reviewed against the role's requirements, and a shortlist of qualified candidates is created — filtering out those who clearly aren't a fit before any interview time is spent. This stage often includes an initial phone or video screen to verify basic fit — availability, salary expectations, and core qualifications — before committing to a full interview process.

                            </p>
                            <p>
                                <strong>5. Interview Candidates </strong>
                                Shortlisted candidates go through one or more rounds of interviews or assessments, depending on the role's seniority and complexity. Smaller organizations often run a single-round interview process for faster hiring decisions, while larger organizations tend to use multiple rounds — narrowing the pool progressively until only the strongest candidates remain for a final decision.

                            </p>
                            <p>
                                <strong>6. Select and Extend an Offer </strong>
                                Once the strongest candidate is identified, an offer is extended, negotiated if needed, and formally accepted. This step also typically includes reference or background checks, which confirm that the information gathered throughout the process holds up before the hire is finalized.

                            </p>
                            <p>
                                <strong>7. Onboard the New Hire </strong>
                                The final step — getting the new employee set up, informed, and integrated into the team — is where a lot of the value of a good hire is either reinforced or lost, depending on how well it's handled. Strong onboarding covers more than paperwork and system access; it includes making sure the new hire understands the team, the culture, and what's expected of them in the first 30, 60, and 90 days.
                            </p>
                            <p>
                                Skipping or rushing any one of these seven steps is usually where recruitment processes start to break down — a weak job description leads to the wrong applicants, a rushed screening stage leads to wasted interviews, and a weak onboarding process can undo the value of an otherwise strong hire.

                            </p>

                        </section>

                        <section id="strategy-4">
                            <h4>Recruitment vs. Selection: A Distinction Worth Knowing</h4>
                            <p>
                                Recruitment and selection are closely connected but are often used to describe different stages of hiring. Recruitment generally focuses on identifying the hiring need and attracting and sourcing potential candidates, while selection focuses on evaluating those candidates and deciding who should receive an offer. In some HR frameworks, selection is treated as part of the broader recruitment or hiring process; in others, the two are described as distinct, sequential stages. Either way, the terminology matters less than the practice: a wide, well-run sourcing effort is only half the job if the evaluation stage that follows it isn't given the same care. A strong hiring outcome comes from both stages working well together, not from treating one as more important than the other
                            </p>

                        </section>

                        <section id="strategy-5">
                            <h4>Why Businesses Choose to Work With an HR Consultancy or Recruitment Agency</h4>
                            <p>
                                Not every business has the internal resources to manage recruitment effectively from end to end — and that's exactly the gap HR services and recruitment agencies are built to close. Rather than building recruitment expertise from scratch, businesses get access to an established process, a wider sourcing network, and the experience needed to evaluate candidates more effectively.
                            </p>
                            <p>
                                This is particularly valuable for growing businesses that need to hire consistently but don't yet have the headcount or budget to justify a full internal HR team. Working with an established <a href="/hr-services/"><span  style={{color: 'rgb(237 131 55)'}}>HR consultancy in Coimbatore</span></a> also means having a single partner manage recruitment end-to-end, rather than juggling job portals, freelance recruiters, and internal screening all at once. It's also worth comparing a few HR companies in Coimbatore before committing, since the depth of HR services offered can vary significantly between providers.

                            </p>


                        </section>



                        <div id="conclusion">
                            <h3 style={{ marginBottom: "12px" }}>Conclusion</h3>
                            <p>
                                Recruitment isn't just "posting a job and picking someone" — it's a structured process that directly shapes the quality, retention, and performance of the people who join your team. Understanding the types of recruitment available and the steps a proper process should follow puts you in a much stronger position, whether you're hiring in-house or bringing in outside help.                            </p>

                            <p>
                                At Priyam Consultancy Services, we work as one of the trusted recruitment agencies in Coimbatore, offering complete HR services — from sourcing and screening to final selection and onboarding support. Whether you're comparing an HR company for the first time or looking for an established HR consultancy in Coimbatore to manage your hiring end-to-end, we're happy to walk you through what a properly structured recruitment process could look like for your business.

                            </p>
                            <p>
                                Looking to fix your hiring process instead of just filling a role? Reach out for a free recruitment consultation.


                            </p>

                        </div>

                        <div className="tseo-cta-banner" id="cta">
                            <div>
                                <h3>Not Sure If Your Hiring Process Is Actually Working?
                                </h3>
                                <p>
                                    Priyam Consultancy Services offers a free recruitment consultation — no pressure. We'll review your current hiring process and tell you exactly where it's costing you good candidates.
                                </p>
                            </div>
                            <Link className="tseo-cta-btn" to="/contact-us">
                                Get a Free Recruitment Consultation →
                            </Link>
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

                    <div className="tseo-rail-card tseo-rail-cta">
                        <h4>Not Sure What Your Business Needs?</h4>
                        <p>
                            Get a free consultation and a custom roadmap from our team at Priyam Consultancy Services — no commitment required.                         </p>
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

                </aside>
            </div>
        </Layout>
    );
}

export default SeoSmallBusinessIndiaGuide;