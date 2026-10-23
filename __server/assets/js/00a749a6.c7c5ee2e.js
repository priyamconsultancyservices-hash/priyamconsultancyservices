"use strict";
exports.ids = ["5364"];
exports.modules = {
9930(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (CaseStudyCards)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var _theme_Layout__rspack_import_1 = __webpack_require__(8328);
/* import */ var _docusaurus_Head__rspack_import_2 = __webpack_require__(3572);


const banner = "/img/case-study.webp";


const cards = [
    {
        id: 1,
        image: "/img/case-study-tactive.webp",
        badge: "bdg-dm",
        label: "Perfomance Marketing",
        tags: [
            "SEO"
        ],
        client: "Tactive Software Systems",
        slug: "tactive",
        title: "From Zero Lead Pipeline to 35 Cr+ Qualified Pipeline for a Construction Tech ERP Brand",
        overview: "Tactive Software Systems is a technology-driven company delivering dedicated construction ERP solutions . Backed by over 17 years of research and development and supported by the industry expertise of URC Constructions, Tactive helps construction businesses streamline operations and make data-driven decisions."
    },
    {
        id: 2,
        image: "/img/case-study-sterlocare.webp",
        badge: "bdg-seo",
        label: "SEO",
        tags: [
            "Perfomance Marketing"
        ],
        client: "SterloCare",
        slug: "sterlocare",
        title: "Enterprise Lead Generation Across India and GCC for a Healthcare SaaS Brand",
        overview: "SterloCare, powered by the OREOPS Framework, delivers low-code technology solutions for web and mobile application development. Established in 2016, the company helps businesses streamline workflows, manage operations, and build scalable digital solutions with minimal coding. Operating across India, GCC, Africa, and the USA, SterloCare focuses on innovation, enterprise performance, and user-centric technology experiences."
    },
    {
        id: 3,
        image: "/img/case-study-urtc.webp",
        badge: "bdg-dm",
        label: "Website Development",
        tags: [
            "SEO"
        ],
        client: "URCTS",
        slug: "urcts",
        title: "Building a Strong Brand Identity and Digital Presence for an Engineering Firm",
        overview: "URCTS is a global engineering solutions provider serving Oil & Gas, industrial, and infrastructure sectors with multidisciplinary expertise. Established in 2023, the company builds on the engineering legacy of URC Constructions (P) Ltd. URCTS delivers integrated solutions from concept to commissioning with a focus on precision, compliance, and operational excellence. With experience across India, the Middle East, Europe, and the USA, the company supports complex engineering projects with scalable and reliable execution. "
    },
    {
        id: 4,
        image: "/img/case-study-feral.webp",
        badge: "bdg-seo",
        label: "E-Commerence Website Development",
        tags: [
            "Local SEO"
        ],
        client: "Feral Roots India Pvt Ltd",
        slug: "feral-roots",
        title: "From Brand Study to Performance-Driven E-Commerce Growth for a Sustainable Products Brand",
        overview: "Feral Roots is a sustainable lifestyle brand focused on empowering tribal communities through ethical trade and responsible sourcing practices. The company works closely with local communities to source natural and millet-based products at fair prices while creating sustainable livelihood opportunities."
    },
    {
        id: 5,
        image: "/img/case-study-ey-chiquita.webp",
        badge: "bdg-ppc",
        label: "Meta Ads",
        tags: [],
        client: "Ey Chiquita",
        slug: "ey-chiquita",
        title: "Driving 100 Qualified Leads Through Social Media Marketing for a Fashion Brand",
        overview: "Ey Chiquita is a fashion and lifestyle brand focused on creating trend-driven products and engaging digital experiences for modern consumers. The brand emphasizes style, audience engagement, and strong social media presence to connect with fashion-focused customers."
    },
    {
        id: 6,
        image: "/img/case-study-sterlo.webp",
        badge: "bdg-ppc",
        label: "Content Marketing",
        tags: [
            "SEO"
        ],
        client: "Sterlo",
        slug: "sterlo",
        title: "Enterprise Lead Generation Across India and GCC for a Low Code No Code Platform",
        overview: "Sterlo is a low code / no code platform developed under the OREOPS Framework, enabling businesses to create web and mobile applications, manage workflows, and generate reports with minimal coding."
    },
    {
        id: 7,
        image: "/img/case-study-zky.webp",
        badge: "bdg-seo",
        label: "SEO",
        tags: [
            "Website Development"
        ],
        client: "ZKY",
        slug: "zky",
        title: "Establishing a Professional Digital Presence for an HR Verification Company",
        overview: "ZKY wanted a professional online identity that reflected trust, accuracy, and reliability within the HR verification industry. We created a structured digital presence designed to strengthen credibility and support business enquiries."
    },
    {
        id: 8,
        image: "/img/case-study-riya.webp",
        badge: "bdg-dm",
        label: "SEO",
        tags: [
            "Website Development",
            "SMM"
        ],
        client: "RIYA Consultancy",
        slug: "riya-consultancy",
        title: "Building a Credible Digital Presence for a Business Consulting Firm",
        overview: "Focused on delivering business consulting and operational support solutions, the company helps organizations improve efficiency, compliance, and long-term growth through structured and professional advisory services across multiple business functions."
    },
    {
        id: 9,
        image: "/img/case-study-abb.webp",
        badge: "bdg-smm",
        label: "Website Development",
        tags: [
            "SEO"
        ],
        client: "ABB Management Consulting ",
        slug: "abb",
        title: "Strengthening Digital Presence for a Digital Transformation Company",
        overview: "ABB Management Consulting helps MSMEs accelerate growth through Digital Transformation, Application Development, and Process Automation solutions. The company focuses on improving operational efficiency, streamlining business processes, and enabling sustainable growth through technology-driven strategies and innovation-focused consulting services."
    },
    {
        id: 10,
        image: "/img/case-study-sterlobuild.webp",
        badge: "bdg-dm",
        label: "SEO",
        tags: [
            "Content Marketing"
        ],
        client: "SterloBuild",
        slug: "sterlobuild",
        title: "Enterprise Lead Generation Across India for a Construction Tech SaaS Brand",
        overview: "SterloBuild is a construction technology SaaS platform focused on simplifying construction workflows and improving operational efficiency through digital solutions designed for the construction industry."
    },
    {
        id: 11,
        image: "/img/case-study-analytixhub.webp",
        badge: "bdg-seo",
        label: "Recruitment Service",
        tags: [
            "Payroll"
        ],
        client: "Analytix Hub",
        slug: "analytixhub",
        title: "Fast Recruitment and On-Time Payroll Enablement for an IT Company",
        overview: "Analytix Hub is an IT services firm delivering technology solutions and operational support for business scaling needs."
    },
    {
        id: 12,
        image: "/img/case-study-ainqa.webp",
        badge: "bdg-smm",
        label: "Recruitment Service",
        tags: [],
        client: "AINQA",
        slug: "ainqa",
        title: "On-Time Recruitment Closure for Critical IT Roles",
        overview: "AINQA is a technology company specializing in digital services and IT solutions for diverse industries."
    },
    {
        id: 13,
        image: "/img/case-study-starhealth.webp",
        badge: "bdg-ppc",
        label: "Recruitment Service",
        tags: [],
        client: "StarHealth",
        slug: "starhealth",
        title: "Bulk Recruitment Support for a Leading Insurance Brand",
        overview: "StarHealth is a prominent insurance provider offering comprehensive health solutions across India, supported by a large and diverse workforce."
    },
    {
        id: 14,
        image: "/img/case-study-baltimore.webp",
        badge: "bdg-dm",
        label: "Recruitment Service",
        tags: [],
        client: "Baltimore Health Analytics",
        slug: "baltimore-health-analytics",
        title: "Recruitment Support for a US-Based Healthcare Analytics Company",
        overview: "Baltimore Health Analytics is a healthcare-focused analytics company supporting HEDIS consulting, Medicare Advantage operations, and data-driven healthcare solutions."
    },
    {
        id: 15,
        image: "/img/case-study-curetech.webp",
        badge: "bdg-seo",
        label: "Recruitment Service",
        tags: [],
        client: "Cure Tech Manufacturing",
        slug: "cure-tek-manufacturing",
        title: "Fast Recruitment Support for a Printing & Packaging Startup",
        overview: "Cure Tech is a startup operating within the printing and packaging industry, focused on building efficient operational capabilities and strengthening its workforce during the early stages of business growth."
    },
    {
        id: 16,
        image: "/img/case-study-natural.webp",
        badge: "bdg-seo",
        label: "Recruitment Service",
        tags: [],
        client: "Natural Salon",
        slug: "naturals",
        title: "Fast Recruitment Support for a Growing Salon Brand",
        overview: "Natural Salon is a beauty and wellness brand focused on delivering professional salon and grooming services through skilled talent, customer-focused experiences, and consistent service quality."
    },
    {
        id: 17,
        image: "/img/case-study-talent-tribe.webp",
        badge: "bdg-seo",
        label: "SEO",
        tags: [
            "Website Development"
        ],
        client: "Talent Tribe",
        slug: "talent-tribe",
        title: "Brand Identity and Website Development for a Recruitment Company",
        overview: "Talent Tribe wanted a professional brand identity and website that clearly represented its recruitment expertise while creating a strong first impression for both employers and job seekers."
    },
    {
        id: 18,
        image: "/img/case-study-tgcc.webp",
        badge: "bdg-dm",
        label: "Website Development",
        tags: [
            "SEO"
        ],
        client: "TGCC",
        slug: "tgcc",
        title: "Building a Professional Digital Presence for a Corporate Training Company",
        overview: "TGCC is a corporate training company that helps professionals and organizations build skills and capabilities through structured learning programs. We developed a clean, credible website that presents its training offerings clearly and supports business enquiries."
    },
    {
        id: 19,
        image: "/img/case-study-vatcom.webp",
        badge: "bdg-seo",
        label: "Website Development",
        tags: [
            "SEO"
        ],
        client: "Vatcomm Technologies",
        slug: "vatcomm",
        title: "Creating a Strong Online Identity for a Manufacturing Company",
        overview: "Vatcomm Technologies is a manufacturing company focused on delivering quality products and reliable technical solutions. We built a professional, SEO-ready website that showcases its capabilities and helps customers reach the business easily."
    },
    {
        id: 20,
        image: "/img/case-study-greenstar.webp",
        badge: "bdg-dm",
        label: "Website Development",
        tags: [
            "SEO"
        ],
        client: "Greenstar Exports",
        slug: "greenstar",
        title: "Establishing a Global Digital Presence for an Export Business",
        overview: "Greenstar Exports is an export company serving international buyers with quality products. We designed a trustworthy, easy-to-navigate website that presents its product range and supports global enquiries."
    },
    {
        id: 21,
        image: "/img/case-study-vriksha.webp",
        badge: "bdg-seo",
        label: "Website Development",
        tags: [
            "SEO"
        ],
        client: "Vriksha Builders",
        slug: "vriksha",
        title: "Showcasing Construction Expertise Through a Modern Website",
        overview: "Vriksha Builders is a construction company focused on quality building and customer trust. We developed a modern website that highlights its projects and services and helps potential clients connect with the team."
    }
];
function Badge({ cls, label, tags = [] }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: "badges-row",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: `cat-badge ${cls}`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        className: "dot"
                    }),
                    label
                ]
            }),
            tags.map((tag)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "cat-badge bdg-tag",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                            className: "dot"
                        }),
                        tag
                    ]
                }, tag))
        ]
    });
}
/* ── Card: entire card + button both go to slug page ── */ function CaseStudyCard({ card }) {
    const { image, badge, label, tags, title, client, overview, slug } = card;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
        className: "cs-card",
        href: `/case-studies/${slug}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "cs-thumb",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                        src: image,
                        alt: title
                    }),
                    "      "
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "cs-body",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Badge, {
                        cls: badge,
                        label: label,
                        tags: tags
                    }),
                    client && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "cs-client",
                        children: client
                    }),
                    overview && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "cs-overview",
                        children: overview
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "cs-divider"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
                        className: "cs-cta",
                        children: [
                            "Read More ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: "arrow",
                                children: "→"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function CaseStudyCards() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_1/* ["default"] */.A, {
        title: " Case Studies & Success Stories | Priyam Consultancy services ",
        description: "Explore real case studies showcasing website development, digital marketing, branding, SEO, and business growth results delivered by Priyam Consultancy.",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_2/* ["default"] */.A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                        children: " Case Studies & Success Stories | Priyam Consultancy services "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "description",
                        content: "Explore real case studies showcasing website development, digital marketing, branding, SEO, and business growth results delivered by Priyam Consultancy."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                        rel: "canonical",
                        href: "https://www.priyamconsultancy.com/case-studies/"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:title",
                        content: " Case Studies & Success Stories | Priyam Consultancy services "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:description",
                        content: "Explore real case studies showcasing website development, digital marketing, branding, SEO, and business growth results delivered by Priyam Consultancy."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:url",
                        content: "https://www.priyamconsultancy.com/case-studies/"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "cs-wrap",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
                        className: "sc-banner",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "sc-banner-inner",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "sc-banner-left",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: "sc-banner-eyebrow",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                    className: "sc-banner-dot"
                                                }),
                                                "Real Results"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                                            className: "sc-banner-title",
                                            children: [
                                                "Our ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                    className: "sc-highlight",
                                                    children: "Case Studies"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}),
                                                "Speak For Themselves"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            className: "sc-banner-subtitle",
                                            children: "Our case studies reflect real work, clear thinking, and results that matter. Each engagement is built around what the client actually needs — whether that is a brand, a website, a marketing strategy, or a combination of all three — executed with precision and delivered with purpose."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("button", {
                                            className: "sc-banner-cta",
                                            onClick: ()=>document.querySelector('.cards-section')?.scrollIntoView({
                                                    behavior: 'smooth'
                                                }),
                                            children: [
                                                "Explore Case Studies",
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
                                                    viewBox: "0 0 24 24",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                                                            x1: "5",
                                                            y1: "12",
                                                            x2: "19",
                                                            y2: "12"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                                                            points: "12 5 19 12 12 19"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "sc-banner-right",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                        src: banner,
                                        alt: "Case Studies"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
                        className: "cards-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "cards-grid",
                            children: cards.map((card)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(CaseStudyCard, {
                                    card: card
                                }, card.id))
                        })
                    })
                ]
            })
        ]
    });
}


},

};
;