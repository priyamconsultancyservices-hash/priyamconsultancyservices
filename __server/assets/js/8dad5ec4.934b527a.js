"use strict";
exports.ids = ["4820"];
exports.modules = {
9184(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
    {
        id: "what-is",
        num: "01",
        label: "What Is Succession Planning?"
    },
    {
        id: "strategy",
        num: "02",
        label: "Why It Matters in HR Strategy"
    },
    {
        id: "challenges",
        num: "03",
        label: "Traditional Challenges"
    },
    {
        id: "faster",
        num: "04",
        label: "How AI Makes It Faster"
    },
    {
        id: "fairer",
        num: "05",
        label: "How AI Makes It Fairer"
    },
    {
        id: "accurate",
        num: "06",
        label: "How AI Makes It More Accurate"
    },
    {
        id: "workforce",
        num: "07",
        label: "Workforce Management"
    },
    {
        id: "cxo",
        num: "08",
        label: "CXO Succession Planning"
    },
    {
        id: "risks",
        num: "09",
        label: "Risks of Using AI"
    },
    {
        id: "implement",
        num: "10",
        label: "How to Implement AI"
    },
    {
        id: "measure",
        num: "11",
        label: "Measuring Success"
    },
    {
        id: "conclusion",
        num: "12",
        label: "Conclusion"
    },
    {
        id: "faq",
        num: "13",
        label: "FAQs"
    }
];
const CHALLENGES = [
    {
        b: "Outdated information:",
        rest: "Data is collected once a year and ages quickly."
    },
    {
        b: "Subjective choices:",
        rest: "Managers often nominate people they know best, which hides capable employees elsewhere in the company."
    },
    {
        b: "Limited visibility:",
        rest: "HR cannot easily see skills, experience, and readiness across teams or locations."
    },
    {
        b: "Time-consuming effort:",
        rest: "Gathering and updating records takes HR weeks of manual work."
    },
    {
        b: "Reactive planning:",
        rest: "Plans are often reviewed only after someone resigns."
    }
];
const FASTER_HEADERS = [
    "Area",
    "Traditional Approach",
    "AI-Supported Approach"
];
const FASTER_TABLE = [
    [
        "Finding successors",
        "Manager nominations",
        "Data-assisted candidate matching"
    ],
    [
        "Skills visibility",
        "May be limited to known employees",
        "Can broaden visibility across teams"
    ],
    [
        "Bias risk",
        "Subjective judgments may introduce bias",
        "Historical data and model design may introduce bias"
    ],
    [
        "Plan updates",
        "Often periodic",
        "Can be updated when connected data changes"
    ]
];
const FAIRER_HEADERS = [
    "Where Bias Appears",
    "How AI Can Help",
    "What HR Must Still Do"
];
const FAIRER_TABLE = [
    [
        "Manager nominations",
        "Assesses all employees against the same criteria",
        "Review the shortlist for missing groups"
    ],
    [
        "Limited visibility",
        "Surfaces talent across teams and locations",
        "Check that data is complete for everyone"
    ],
    [
        "Subjective ratings",
        "Adds skills and performance data to opinions",
        "Keep criteria clear and documented"
    ],
    [
        "Historical promotion patterns",
        "Flags where outcomes differ between groups",
        "Audit results and correct skewed data"
    ],
    [
        "Final selection",
        "Provides recommendations",
        "Make the final decision with human judgment"
    ]
];
const CXO_POINTS = [
    "Mapping the competencies each executive role requires.",
    "Comparing internal candidates against those requirements.",
    "Identifying development needs, such as exposure to finance or operations.",
    "Tracking progress on development plans over time."
];
const RISKS = [
    {
        b: "Bias in data:",
        rest: "Models can repeat past patterns if historical data is skewed."
    },
    {
        b: "Privacy and consent:",
        rest: "Employee data used in AI-supported succession planning should be handled in accordance with applicable data protection requirements, including India’s Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025, as applicable. Organisations should review their obligations concerning lawful processing, access controls, security, and transparency."
    },
    {
        b: "Over-reliance:",
        rest: "Scores should guide conversations, not replace them."
    },
    {
        b: "Poor data quality:",
        rest: "Incomplete or outdated records lead to unreliable results."
    },
    {
        b: "Lack of transparency:",
        rest: "Employees and managers should understand how recommendations are produced."
    }
];
const IMPLEMENT_STEPS = [
    {
        b: "Identify critical roles.",
        rest: "Start with a small set of positions that would hurt the business most if vacated."
    },
    {
        b: "Clean your data.",
        rest: "Make sure skills, performance, and role records are accurate and current."
    },
    {
        b: "Define clear criteria.",
        rest: "Agree on what readiness means for each role before using any tool."
    },
    {
        b: "Choose suitable tools.",
        rest: "Pick HR systems with succession and skills features that fit your size and budget."
    },
    {
        b: "Pilot first.",
        rest: "Test on one department, compare the results with managers’ views, and refine. Track measurable outcomes such as the time taken to identify successors and the number of critical roles without a successor."
    },
    {
        b: "Keep humans in charge.",
        rest: "Use AI recommendations as input, and let HR leaders and managers decide."
    },
    {
        b: "Review regularly.",
        rest: "Update the plan as roles, people, and business goals change."
    }
];
const MEASURES = [
    "Percentage of critical roles with at least one identified successor.",
    "Number of successors who meet the agreed readiness criteria.",
    "Time required to identify internal candidates.",
    "Progress in closing skills gaps through training and development.",
    "Differences in succession outcomes across employee groups.",
    "Usefulness of AI recommendations, after human review."
];
const FAQS = [
    {
        q: "How does AI help with succession planning in HR?",
        a: "AI helps by looking at skills, performance, training and career history from HR systems to match workers with future jobs, show where skills are missing and point out important roles that don’t have someone ready to take over. AI is only as good as the data it gets and HR leaders still make the choice."
    },
    {
        q: "What data is needed to use AI for succession planning in HRM?",
        a: "AI needs to correct up to date records of employee skills, performance reviews, training and certificates experience, career goals and what each important job requires. This data must be handled according to the rules like India’s Digital Personal Data Protection Act, 2023 and the DPDP Rules, 2025 when they apply."
    },
    {
        q: "Can AI reduce bias in succession planning?",
        a: "Some. AI can reduce the chance of bias by looking at every employee with the rules, which can find talent that might be missed.. Ai can also copy bias if it learns from unfair past choices. Checking results across groups and having people review them is important to keep things fair."
    },
    {
        q: "Can AI predict which employee will resign or retire?",
        a: "Not really. AI can’t know what a person wants to do. It can look at turnover and guess what might happen in teams or roles which helps with planning.. These are just guesses, not sure things about a specific person."
    },
    {
        q: "How is CXO succession planning different from succession planning for roles?",
        a: "CXO succession planning deals with the jobs, like CEO, CFO and COO where a bad change can hurt the company’s direction, culture and trust with people outside. It needs a longer time to get ready and the board’s help. AI can find the skills needed and compare people. The board decides in the end."
    },
    {
        q: "How can an HR consultancy in Coimbatore help with succession planning?",
        a: "An HR consultancy in Coimbatore can help a company find its jobs, set clear rules for being ready, make plans to grow people and connect succession planning with the company’s HR plan. This should happen before using AI tools so the technology works with data and clear rules."
    }
];
const ARTICLES = [
    {
        title: "Website Development Cost in India (2026): Real Ranges by Type, Not Guesswork",
        href: "/article/website-development-cost-in-india",
        date: "2026-09-01"
    },
    {
        title: "E-Commerce Website Development: A Complete Guide to Features, Platforms, and Strategies",
        href: "/article/ecommerce-website-development-complete-guide",
        date: "2026-10-09"
    },
    {
        title: "What Is Recruitment in HR? Definition, Types, Process & Everything You Need to Know",
        href: "/article/recruitment-agencies-in-coimbatore",
        date: ""
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
const PAGE_H1 = "How AI Makes Succession Planning in HR Faster, Fairer, and More Accurate";
const PAGE_TITLE = "AI in Succession Planning in HR: Faster, Fairer, Accurate";
const PAGE_DESC = "How AI makes succession planning in HR faster, fairer and more accurate, plus the risks to watch and how to start. Get expert HR guidance in Coimbatore.";
const PAGE_URL = "https://www.priyamconsultancy.com/article/ai-succession-planning-in-hr";
const PAGE_IMG = "https://www.priyamconsultancy.com/img/article/ai-succession-planning-hr.webp";
// Reusable bold-lead list (bullets or numbered)
const BoldList = ({ items, ordered = false })=>{
    const Tag = ordered ? "ol" : "ul";
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Tag, {
        children: items.map((i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("strong", {
                        children: i.b
                    }),
                    " ",
                    i.rest
                ]
            }, i.b))
    });
};
// Reusable table
const DataTable = ({ headers, rows })=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        className: "tseo-table-scroll",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("table", {
            className: "tseo-tools-table",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("thead", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("tr", {
                        children: headers.map((h)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
                                children: h
                            }, h))
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("tbody", {
                    children: rows.map((r)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("tr", {
                            children: r.map((c, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                    children: i === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("strong", {
                                        children: c
                                    }) : c
                                }, i))
                        }, r[0]))
                })
            ]
        })
    });
// ════════════════════════════════════════════
//  MAIN PAGE
// ════════════════════════════════════════════
function AISuccessionPlanning() {
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
        title: PAGE_TITLE,
        description: PAGE_DESC,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_3/* ["default"] */.A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                        children: PAGE_TITLE
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "description",
                        content: PAGE_DESC
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "keywords",
                        content: "hr consultancy in coimbatore,succession planning in HR,HR strategy and planning, succession planning in HRM, workforce management, CXO succession planning"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                        rel: "canonical",
                        href: PAGE_URL
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:type",
                        content: "article"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:title",
                        content: PAGE_TITLE
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:description",
                        content: PAGE_DESC
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:url",
                        content: PAGE_URL
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:site_name",
                        content: "Priyam Consultancy Services"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:image",
                        content: PAGE_IMG
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "twitter:title",
                        content: PAGE_TITLE
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "twitter:description",
                        content: PAGE_DESC
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "twitter:image",
                        content: PAGE_IMG
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                        type: "application/ld+json",
                        children: `
                    {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "@id": "https://www.priyamconsultancy.com/article/ai-succession-planning-in-hr #breadcrumb",
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
                        "name": "AI in Succession Planning in HR: Faster, Fairer, Accurate",
                        "item": "https://www.priyamconsultancy.com/article/ai-succession-planning-in-hr"
                        }
                    ]
                    }

                `
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("style", {
                children: `
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
        .tseo-hero-img{ width:100%;  border-radius:14px; overflow:hidden;}
        .tseo-hero-img img{ width:100%; height:100%;  display:block;}

        .tseo-content section{ margin-bottom:20px; }
        .tseo-content h2{ font-size:27px; font-weight:700; margin-bottom:16px; scroll-margin-top:24px; letter-spacing:-.005em;}
        .tseo-content h3{ font-size:19px; font-weight:600; margin:22px 0 10px;}
        .tseo-content p{ font-size:15px; line-height:1.75; color:#6B7A94; margin:0 0 16px;}
        .tseo-content ul, .tseo-content ol{ font-size:16px; line-height:1.75; color:#2B362F; padding-left:22px; margin:0 0 16px;}
        .tseo-content li{ margin-bottom:6px; color:#6B7A94; font-size:15px;}
        .tseo-content strong{ color:#0D1F3C; }

        .tseo-practice-list{ display:grid; gap:14px; margin:18px 0;}
        .tseo-practice-item{ display:grid; grid-template-columns:34px 1fr; gap:14px; }
        .tseo-practice-item .num{ font-family:'JetBrains Mono',monospace; color:#ED8337; font-weight:700; font-size:14px;}
        .tseo-practice-item h4{ font-size:16px; margin-bottom:4px; font-weight:600;}
        .tseo-practice-item p{ margin:0; font-size:15px; color:#6B7A94;}

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

        .tseo-faq{ display:grid; gap:16px; margin:20px 0; }
        .tseo-faq details{ background:#fff; border:1px solid #F0E0D0; border-radius:20px; padding:0 26px; transition:box-shadow .2s ease, border-color .2s ease; }
        // .tseo-faq details[open]{ border-color:#ED8337; box-shadow:0 6px 20px rgba(237,131,55,.10); }
        .tseo-faq summary{ cursor:pointer; padding:26px 0; font-size:17px; font-weight:600; color:#0D1F3C; line-height:1.6; list-style:none; display:flex; justify-content:space-between; align-items:center; gap:20px; }
        .tseo-faq summary::-webkit-details-marker{ display:none; }
        .tseo-faq summary::marker{ content:""; }
        .tseo-faq summary::after{ content:"+"; color:#ED8337; font-weight:700; font-size:26px; line-height:1; flex-shrink:0; transition:transform .2s ease; }
        .tseo-faq details[open] summary::after{ content:"–"; }
        .tseo-faq details p{ margin:0; padding:0 0 24px; font-size:15px; line-height:1.75; color:#6B7A94; }
        .tseo-faq summary:focus-visible{ outline:2px solid #ED8337; outline-offset:4px; border-radius:12px; }

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
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        children: "AI in Succession Planning"
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
                                            children: "HR Strategy \xb7 Succession Planning"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h1", {
                                            children: PAGE_H1
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "tseo-hero-img",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_4/* ["default"] */.A, {
                                                href: "/article/ai-succession-planning-in-hr",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                    src: "/img/article/ai-succession-planning-hr.webp",
                                                    alt: "How AI makes succession planning in HR faster, fairer, and more accurate"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
                                    id: "intro",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        children: "What happens to your business if a key leader resigns tomorrow? For many companies, the honest answer is a scramble. Roles stay vacant, decisions slow down, and the replacement is often chosen in a hurry. Succession planning in HR exists to prevent this, and AI can help make it faster, fairer, and more accurate when it is used with good data and human judgment. This article explains how, where the risks are, and how to start. Businesses that want expert help can also work with an HR consultancy in Coimbatore to build the right foundation."
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                                    id: "what-is",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            children: "What Is Succession Planning in HR?"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Succession planning in HR is the process of finding and preparing workers who can take over positions when the people in those roles leave, retire or get promoted. It includes leadership positions. Also important technical and day-to-day jobs. The goal is to have a group of people ready. The company does not rely on one person. In succession planning, in HRM this usually means finding jobs, checking who could take over, making plans to help those people grow and looking at the plan often."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                                    id: "strategy",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            children: "Does Succession Planning Matter in HR Strategy and Planning?"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Yes. HR strategy and planning links people's decisions to business goals, and succession planning is where that link is tested. A company planning to expand, launch new services, or enter new markets needs leaders and skills in place before the growth happens. Without a succession plan, growth depends on luck and last-minute hiring. With one, the business can promote from within, keep institutional knowledge, and reduce the cost and disruption of sudden vacancies."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                                    id: "challenges",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            children: "Challenges of Traditional Succession Planning in HRM"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Many organisations still manage succession planning with spreadsheets, annual reviews, and manager recommendations. This creates several problems:"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BoldList, {
                                            items: CHALLENGES
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                                    id: "faster",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            children: "How Does AI Make Succession Planning Faster?"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "AI removes much of the manual work when it is connected to your HR systems. It can analyse skills, performance, training, and career-history data when these records are available through connected HR systems. With suitable integrations and data-update processes, it can help HR teams identify potential successors, highlight skills gaps, and flag critical roles without an identified successor."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DataTable, {
                                            headers: FASTER_HEADERS,
                                            rows: FASTER_TABLE
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Speed matters because a faster process lets HR react to changes such as a resignation or restructure with a plan already in place."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                                    id: "fairer",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            children: "How Does AI Make Succession Planning Fairer?"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Fairness is a missing piece in old succession planning methods in HR. When managers pick people they know skilled workers in other teams, places or jobs often slip through the cracks. AI helps by checking every employee against the role standards using data on skills, performance and experience. This brings hidden talent to light. Cuts down the influence of personal bias."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "However AI is not automatically fair. If earlier promotions favored a group, a model trained on that past data may repeat the same pattern. The table, below shows where bias shows up and how to manage it."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DataTable, {
                                            headers: FAIRER_HEADERS,
                                            rows: FAIRER_TABLE
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Fair outcomes come from the combination of consistent AI-supported criteria and regular human review, not from the technology alone."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                                    id: "accurate",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            children: "How Does AI Make Succession Planning More Accurate?"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Accuracy improves when decisions are based on evidence. AI can compare an employee’s skills with the requirements of a target role. Clearly show the exact gaps. It can also combine performance history learning progress and experience to help estimate how ready someone is for a position."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "AI can also help HR teams look at past workforce turnover, find staffing weaknesses and run different scenarios involving job vacancies. These insights should be seen as estimates not as predictions about what an employee will do. HR should treat all AI scores as input, for a decision not as the decision itself. They should regularly check the scores against performance to stay accurate."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                                    id: "workforce",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            children: "How Does AI Improve Workforce Management and Planning?"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Good workforce management is about having the right people with the right skills at the right time. I see that AI shows where skills are packed, where they are missing and where future gaps may appear. AI can look at growth plans and employee turnover to guess what skills will be needed later and AI can suggest training or moves, inside the company to get ready. AI makes succession planning not a one‑time task but a steady part of planning the workforce."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                                    id: "cxo",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            children: "How Can AI Support CXO Succession Planning?"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "CXO succession planning deals with the most senior roles, where a poor transition can affect the entire business. The stakes are higher, so AI should support the process, not lead it. It can help by:"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
                                            className: "tseo-checklist",
                                            children: CXO_POINTS.map((c)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                    children: c
                                                }, c))
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Final decisions on CXO succession planning still belong to the board and senior leadership. They involve judgment about culture, trust, and strategy that data cannot fully capture. Confidentiality also matters here, so access to this data should be tightly restricted."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                                    id: "risks",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            children: "Risks of Using AI in Succession Planning"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "AI brings real benefits, but it also brings risks that HR should plan for:"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BoldList, {
                                            items: RISKS
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                                    id: "implement",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            children: "How Do You Implement AI in Succession Planning?"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "A practical rollout looks like this:"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "tseo-practice-list",
                                            children: IMPLEMENT_STEPS.map((s, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    className: "tseo-practice-item",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "num",
                                                            children: String(i + 1).padStart(2, "0")
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("strong", {
                                                                    children: s.b
                                                                }),
                                                                " ",
                                                                s.rest
                                                            ]
                                                        })
                                                    ]
                                                }, s.b))
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Many businesses find it easier to begin with expert guidance. An HR consultancy in Coimbatore can help define critical roles, set assessment criteria, and build a succession framework that fits the company’s size, industry, and growth plans before any technology is added."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                                    id: "measure",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            children: "How Should Businesses Measure the Success of AI-Supported Succession Planning?"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Businesses should evaluate results using measures such as:"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
                                            className: "tseo-checklist",
                                            children: MEASURES.map((m)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                    children: m
                                                }, m))
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "These are suggested evaluation measures, not claims that AI will automatically improve every metric. Reviewing them regularly helps HR leaders see what is working and adjust the plan."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                                    id: "conclusion",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            children: "Conclusion"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "AI can make succession planning in HR faster by automating data work, more accurate by grounding decisions in skills and readiness, and fairer when it is used with consistent criteria and human review. It works best as a support for people, not a replacement for them. Start small, keep your data clean, and build leadership pipelines before you need them."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Priyam Consultancy Services is an HR consultancy in Coimbatore that supports businesses with HR strategy and planning, recruitment, and workforce management. If you want to build a succession plan that prepares your next leaders, book a free consultation with our team."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "tseo-cta-banner",
                                    id: "cta-mid",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                                    children: "Is Your Business Prepared for Unexpected Leadership Changes?"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                    children: "Priyam Consultancy Services helps businesses build effective succession plans with expert HR guidance. We’ll help you identify critical roles, assess employee potential, and prepare future leaders to ensure business continuity and reduce disruption."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_4/* ["default"] */.A, {
                                            className: "tseo-cta-btn",
                                            to: "/contact-us",
                                            children: "Build Your Succession Plan with Expert Guidance"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                                    id: "faq",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            children: "Frequently Asked Questions"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "tseo-faq",
                                            children: FAQS.map((f, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("details", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("summary", {
                                                            children: [
                                                                i + 1,
                                                                ". ",
                                                                f.q
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                            children: f.a
                                                        })
                                                    ]
                                                }, f.q))
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
                                        children: "Digital Marketing Learning Hub"
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
                                        children: "Get a free consultation and a custom roadmap from our team at Priyam Consultancy Services, no commitment required."
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
/* export default */ const __rspack_default_export = (AISuccessionPlanning);


},

};
;