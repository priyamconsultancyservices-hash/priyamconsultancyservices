"use strict";
exports.ids = ["4158"];
exports.modules = {
9635(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (CaseStudy)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var _theme_Layout__rspack_import_1 = __webpack_require__(8328);
/* import */ var _docusaurus_Head__rspack_import_2 = __webpack_require__(3572);



const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
  :root { --navy:#004168; --navy-deep:#002a44; --navy-mid:#0a5282; --orange:#ed8337; --orange-light:#f5a66b; }
  * { box-sizing:border-box; margin:0; padding:0; }
  .detail-wrap { font-family:'Poppins',sans-serif; background:#f0f4f8; color:#0d1f2d; min-height:100vh; }

  /* BANNER */
  .detail-banner { position:relative; min-height:420px; display:flex; align-items:center; justify-content:center; overflow:hidden; background:var(--navy); padding:56px 60px; text-align:center; }
  .detail-banner::before { content:''; position:absolute; inset:0; pointer-events:none; z-index:0; background: radial-gradient(ellipse 70% 80% at 80% 40%,rgba(237,131,55,0.13) 0%,transparent 60%), radial-gradient(ellipse 50% 60% at 10% 80%,rgba(10,54,82,0.6) 0%,transparent 55%); }
  .detail-banner::after { content:''; position:absolute; inset:0; pointer-events:none; z-index:0; background-image:linear-gradient(rgba(237,131,55,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(237,131,55,0.05) 1px,transparent 1px); background-size:52px 52px; }
  .detail-banner-inner { position:relative; z-index:2; max-width:860px; display:flex; flex-direction:column; align-items:center; gap:1.1rem; }
  .back-btn { display:inline-flex; align-items:center; gap:.4rem; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.18); color:rgba(255,255,255,0.72); font-size:.72rem; font-weight:600; padding:.38rem 1rem; border-radius:50px; cursor:pointer; transition:all .2s; font-family:'Poppins',sans-serif; text-decoration:none; margin-bottom:.3rem; }
  .back-btn:hover { background:rgba(255,255,255,0.16); color:#fff; }
  .detail-banner-badges { display:flex; flex-wrap:wrap; gap:.5rem; justify-content:center; }
  .cat-badge { display:inline-flex; align-items:center; gap:.4rem; padding:.25rem .75rem; border-radius:6px; font-size:.62rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; width:fit-content; }
  .cat-badge .dot { width:5px; height:5px; border-radius:50%; background:currentColor; opacity:.8; }
  .bdg-dm  { background:rgba(237,131,55,0.15); color:#f5a66b; border:1px solid rgba(237,131,55,0.3); }
  .bdg-seo { background:rgba(52,211,153,0.12); color:#6ee7b7; border:1px solid rgba(52,211,153,0.25); }
  .bdg-smm { background:rgba(129,140,248,0.15); color:#a5b4fc; border:1px solid rgba(129,140,248,0.28); }
  .bdg-ppc { background:rgba(252,165,165,0.15); color:#fca5a5; border:1px solid rgba(252,165,165,0.28); }
  .detail-banner-title { font-size:clamp(1.6rem,3.5vw,2.6rem); font-weight:800; color:#fff; line-height:1.18; letter-spacing:-.022em; max-width:780px; }
  .detail-banner-meta { font-size:.8rem; color:rgba(255,255,255,0.45); font-weight:500; letter-spacing:.04em; }

  /* BODY */
  .detail-page-body { max-width:1360px; margin:0 auto; padding:3rem 4% 5rem; display:grid; grid-template-columns:1fr 380px; gap:2.5rem; align-items:start; }
  .detail-left { display:flex; flex-direction:column; gap:2rem; }
  .detail-hero-img { width:100%; border-radius:18px; overflow:hidden; aspect-ratio:16/7; box-shadow:0 8px 36px rgba(0,0,0,0.11); }
  .detail-hero-img img { width:100%; height:100%; object-fit:cover; display:block; }
  .detail-stats-row { display:grid; grid-template-columns:repeat(3,1fr); gap:1rem; }
  .detail-stat-card { background:#fff; border:1.5px solid rgba(237,131,55,0.13); border-radius:14px; padding:1.3rem 1.1rem; display:flex; flex-direction:column; gap:.35rem; box-shadow:0 3px 14px rgba(237,131,55,0.07); }
  .detail-stat-val  { font-size:1.85rem; font-weight:800; color:var(--orange); line-height:1; }
  .detail-stat-label{ font-size:.73rem; color:#5a7080; font-weight:500; }
  .detail-section h2 { font-size:1.05rem; font-weight:700; color:var(--navy); margin-bottom:.9rem; display:flex; align-items:center; gap:.55rem; }
  .detail-section h2::before { content:''; display:inline-block; width:4px; height:18px; background:var(--orange); border-radius:3px; flex-shrink:0; }
  .detail-section p  { font-size:.875rem; line-height:1.9; color:#3d5060; }
  .detail-section ul { list-style:none; display:flex; flex-direction:column; gap:.5rem; }
  .detail-section ul li { font-size:.875rem; color:#3d5060; display:flex; align-items:flex-start; gap:.65rem; line-height:1.65; }
  .detail-section ul li::before { content:''; min-width:7px; height:7px; border-radius:50%; background:var(--orange); margin-top:.45rem; flex-shrink:0; }

  /* CTA BLOCK */
  .detail-cta-block { background:linear-gradient(135deg,var(--navy) 0%,var(--navy-mid) 100%); border-radius:18px; padding:2rem 1.8rem; display:flex; flex-direction:column; gap:1rem; align-items:flex-start; box-shadow:0 8px 32px rgba(0,65,104,0.18); }
  .detail-cta-block h3 { font-size:1.1rem; font-weight:700; color:#fff; line-height:1.3; }
  .detail-cta-block p  { font-size:.82rem; color:rgba(255,255,255,0.65); line-height:1.7; }
  .cs-cta { display:inline-flex; align-items:center; gap:.45rem; padding:.65rem 1.4rem; border:none; border-radius:50px; font-size:.8rem; font-weight:600; color:#fff; background:var(--orange); cursor:pointer; transition:all .22s; width:fit-content; box-shadow:0 2px 10px rgba(237,131,55,0.3); font-family:'Poppins',sans-serif; text-decoration:none; }
  .cs-cta:hover { background:var(--orange-light); box-shadow:0 4px 16px rgba(237,131,55,0.45); }

  /* SIDEBAR */
  .detail-sidebar { display:flex; flex-direction:column; gap:1.4rem; position:sticky; top:2rem; align-self:start; }
  .sidebar-card { background:#fff; border-radius:18px; border:1.5px solid rgba(0,65,104,0.07); box-shadow:0 3px 14px rgba(0,0,0,0.04); overflow:hidden; }
  .sidebar-card-header { padding:1.1rem 1.3rem .8rem; border-bottom:1px solid rgba(0,65,104,0.06); display:flex; align-items:center; gap:.5rem; }
  .sidebar-card-header h3 { font-size:.82rem; font-weight:700; color:var(--navy); text-transform:uppercase; letter-spacing:.08em; }
  .sidebar-card-header span { width:6px; height:6px; border-radius:50%; background:var(--orange); display:inline-block; }
  .recent-item { display:flex; align-items:center; gap:.85rem; padding:.85rem 1.3rem; cursor:pointer; transition:background .18s; border-bottom:1px solid rgba(0,65,104,0.05); text-decoration:none; }
  .recent-item:last-child { border-bottom:none; }
  .recent-item:hover { background:#f7fafc; }
  .recent-thumb { width:72px; height:52px; border-radius:9px; overflow:hidden; flex-shrink:0; }
  .recent-thumb img { width:100%; height:100%; object-fit:cover; display:block; }
  .recent-info { flex:1; min-width:0; }
  .recent-badge { display:inline-flex; align-items:center; gap:.3rem; font-size:.55rem; font-weight:700; letter-spacing:.07em; text-transform:uppercase; margin-bottom:.28rem; padding:.15rem .5rem; border-radius:4px; }
  .recent-title { font-size:.76rem; font-weight:600; color:#0d1f2d; line-height:1.4; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; transition:color .18s; }
  .recent-item:hover .recent-title { color:var(--orange); }
  .recent-arrow { font-size:.7rem; color:var(--orange); opacity:0; transition:opacity .18s,transform .18s; flex-shrink:0; }
  .recent-item:hover .recent-arrow { opacity:1; transform:translateX(3px); }

  /* ABOUT BOX */
  .sidebar-about { background:#fff; border-radius:18px; border:1.5px solid rgba(0,65,104,0.07); box-shadow:0 3px 14px rgba(0,0,0,0.04); padding:1.4rem 1.3rem; display:flex; flex-direction:column; gap:.75rem; }
  .sidebar-about h3 { font-size:.82rem; font-weight:700; color:var(--navy); text-transform:uppercase; letter-spacing:.08em; display:flex; align-items:center; gap:.5rem; }
  .sidebar-about h3 span { width:6px; height:6px; border-radius:50%; background:var(--orange); display:inline-block; }
  .sidebar-about p { font-size:.8rem; color:#5a7080; line-height:1.75; }
  .sidebar-tag-row { display:flex; flex-wrap:wrap; gap:.4rem; }
  .sidebar-tag { font-size:.65rem; font-weight:600; padding:.25rem .7rem; border-radius:50px; background:rgba(0,65,104,0.06); color:var(--navy-mid); border:1px solid rgba(0,65,104,0.12); }

  /* RESPONSIVE */
  @media(max-width:1100px){ .detail-page-body{ grid-template-columns:1fr 290px; } }
  @media(max-width:860px) { .detail-page-body{ grid-template-columns:1fr; } .detail-sidebar{ order:-1; position:static; } .detail-stats-row{ grid-template-columns:repeat(3,1fr); } .detail-banner{ padding:44px 32px; } }
  @media(max-width:580px) { .detail-stats-row{ grid-template-columns:1fr 1fr; } .detail-banner{ padding:36px 20px; } }
`;
function CaseStudy() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_1/* ["default"] */.A, {
        title: " SterloCare SaaS Lead Generation & SEO Case Study | PCS  ",
        description: "PCS helped SterloCare rank 50+ keywords in Google's Top 10, increase search visibility, and generate qualified enterprise leads across India and GCC.",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_2/* ["default"] */.A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                        children: " SterloCare SaaS Lead Generation & SEO Case Study | PCS  "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "description",
                        content: "PCS helped SterloCare rank 50+ keywords in Google's Top 10, increase search visibility, and generate qualified enterprise leads across India and GCC."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                        rel: "canonical",
                        href: "https://www.priyamconsultancy.com/case-studies/sterlocare/"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:title",
                        content: " SterloCare SaaS Lead Generation & SEO Case Study | PCS  "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:description",
                        content: "PCS helped SterloCare rank 50+ keywords in Google's Top 10, increase search visibility, and generate qualified enterprise leads across India and GCC."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:image",
                        content: "https://picsum.photos/seed/13/1200/630"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:url",
                        content: "https://www.priyamconsultancy.com/case-studies/sterlocare/"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("style", {
                children: styles
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "detail-wrap",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
                        className: "detail-banner",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "detail-banner-inner",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h1", {
                                className: "detail-banner-title",
                                children: "Enterprise Lead Generation Across India and GCC for a Healthcare SaaS Brand"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "detail-page-body",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "detail-left",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "detail-hero-img",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                            src: "/img/case-study-sterlocare-about.webp",
                                            alt: "Enterprise Lead Generation Across India and GCC for a Healthcare SaaS Brand"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "detail-section",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                                children: "About SterloCare"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "SterloCare, powered by the OREOPS Framework, provides low-code web and mobile application development solutions that help businesses automate processes, improve operational efficiency, and scale faster. Since 2016, it has served clients across India, GCC, Africa, and the USA with innovative, user-focused technology solutions."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "detail-section",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                                children: "Overview"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "SterloCare partnered with PCS to enhance its digital visibility and attract qualified enterprise prospects across India and GCC markets. Through strategic SEO, content marketing, and performance-driven campaigns, PCS helped strengthen brand positioning, improve online reach, and support sustainable lead generation efforts"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "detail-section",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                                children: "The Challenge"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "Despite offering strong healthcare technology solutions, SterloCare had limited online visibility within a competitive healthcare SaaS market. The brand required stronger search visibility, structured lead generation, and region-specific marketing strategies to support expansion across India and GCC countries."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "detail-section",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                                children: "Our Strategy"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Executed product launch campaigns supported by SEO and performance marketing"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Conducted keyword research, content analysis, and search intent optimization"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Optimized meta titles, descriptions, and on-page content for healthcare keywords"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Developed conversion-focused landing pages for Google Ads campaigns"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Built region-specific campaigns targeting healthcare audiences across GCC markets"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Strengthened enterprise lead pipelines through strategic conversion-focused marketing initiatives."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "detail-section",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                                children: "The Result"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "SterloCare’s Daily search impressions increased from below 50 to over 300–500+ impressions per day. More than 100 healthcare-focused keywords were actively tracked, with 50+ keywords achieving Google Top 10 rankings. Through SEO, strategic content marketing, and performance campaigns, PCS helped SterloCare build a qualified enterprise lead pipeline exceeding ₹1 Cr while strengthening overall search presence, credibility, and conversion opportunities."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "detail-cta-block",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                                children: "Ready to achieve results like SterloCare?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "We design actionable strategies that deliver visibility, leads, and long-term business growth. "
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                className: "cs-cta",
                                                href: "/contact-us",
                                                children: "Get in Touch →"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "detail-sidebar",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "sidebar-about",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {}),
                                                    "About This Case Study"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                                children: [
                                                    "Client: ",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("strong", {
                                                        children: "SterloCare"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "Service: "
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "sidebar-tag-row",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        className: "sidebar-tag",
                                                        children: "SEO"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        className: "sidebar-tag",
                                                        children: "Performance Marketing"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "sidebar-card",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "sidebar-card-header",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {}),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                                        children: "Recent Case Studies"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                                                className: "recent-item",
                                                href: "/case-studies/urcts",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "recent-thumb",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                            src: "/img/case-study-urtc.webp",
                                                            alt: "Building a Strong Brand Identity and Digital Presence for an Engineering Firm",
                                                            loading: "lazy"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                        className: "recent-info",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                className: "recent-badge cat-badge bdg-dm",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                        className: "dot"
                                                                    }),
                                                                    "Website Development"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                className: "recent-title",
                                                                children: "Building a Strong Brand Identity and Digital Presence for an Engineering Firm"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "recent-arrow",
                                                        children: "→"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                                                className: "recent-item",
                                                href: "/case-studies/feral-roots",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "recent-thumb",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                            src: "/img/case-study-feral.webp",
                                                            alt: "From Brand Study to Performance-Driven E-Commerce Growth for a Sustainable Products Brand",
                                                            loading: "lazy"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                        className: "recent-info",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                className: "recent-badge cat-badge bdg-seo",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                        className: "dot"
                                                                    }),
                                                                    "E-Commerce"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                className: "recent-title",
                                                                children: "From Brand Study to Performance-Driven E-Commerce Growth for a Sustainable Products Brand"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "recent-arrow",
                                                        children: "→"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                                                className: "recent-item",
                                                href: "/case-studies/ey-chiquita",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "recent-thumb",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                            src: "/img/case-study-ey-chiquita.webp",
                                                            alt: "Driving 100 Qualified Leads Through Social Media Marketing for a Fashion Brand",
                                                            loading: "lazy"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                        className: "recent-info",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                className: "recent-badge cat-badge bdg-ppc",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                        className: "dot"
                                                                    }),
                                                                    "Meta Ads"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                className: "recent-title",
                                                                children: "Driving 100 Qualified Leads Through Social Media Marketing for a Fashion Brand"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "recent-arrow",
                                                        children: "→"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                                                className: "recent-item",
                                                href: "/case-studies/sterlo",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "recent-thumb",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                            src: "/img/case-study-sterlo.webp",
                                                            alt: "Enterprise Lead Generation Across India and GCC for a Low Code No Code Platform",
                                                            loading: "lazy"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                        className: "recent-info",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                className: "recent-badge cat-badge bdg-ppc",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                        className: "dot"
                                                                    }),
                                                                    "Content Marketing"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                className: "recent-title",
                                                                children: "Enterprise Lead Generation Across India and GCC for a Low Code No Code Platform"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "recent-arrow",
                                                        children: "→"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


},

};
;