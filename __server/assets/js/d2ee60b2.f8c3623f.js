"use strict";
exports.ids = ["4410"];
exports.modules = {
9421(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
        title: "Vriksha Builders Construction Website Development Case Study",
        description: "PCS built a professional AI-assisted website for Vriksha Builders, strengthening its digital presence, brand credibility, and enquiry generation in the construction industry.",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_2/* ["default"] */.A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                        children: "Vriksha Builders Construction Website Development Case Study"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "description",
                        content: "PCS built a professional AI-assisted website for Vriksha Builders, strengthening its digital presence, brand credibility, and enquiry generation in the construction industry."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                        rel: "canonical",
                        href: "https://www.priyamconsultancy.com/case-studies/vriksha/"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:title",
                        content: "Vriksha Builders Construction Website Development Case Study"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:description",
                        content: "PCS built a professional AI-assisted website for Vriksha Builders, strengthening its digital presence, brand credibility, and enquiry generation in the construction industry."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:image",
                        content: "https://picsum.photos/seed/13/1200/630"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:url",
                        content: "https://www.priyamconsultancy.com/case-studies/vriksha/"
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
                                children: "From Sitework to Web: Establishing Vriksha Builders Online"
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
                                            src: "/img/case-study-vriksha-about.webp",
                                            alt: "From Sitework to Web: Establishing Vriksha Builders Online"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "detail-section",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                                children: "About Vriksha Builders"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "Vriksha Builders is a Coimbatore, Tamil Nadu-based construction company delivering quality construction services across residential, commercial, industrial, and specialized construction projects. Their offerings span architecture, interior works, commercial construction, metro maintenance services, and solar project civil and structural works, with a focus on precise planning, sound engineering, and skilled site execution."
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
                                                children: "Vriksha Builders partnered with PCS to establish a professional online presence that reflected its expertise across the full construction lifecycle — from design and planning to civil, structural, and finishing works. While the company had strong technical capability and a growing project portfolio across multiple sectors, it lacked a structured digital platform to showcase its work, build trust with prospective clients, and clearly communicate its service offerings."
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
                                                children: "Vriksha Builders required a modern, credible website that could represent the scale and diversity of its construction services — spanning residential, commercial, industrial, and infrastructure projects — while also reflecting relationships with major clients across sectors. Without a dedicated digital platform, the company had limited visibility, no structured way to present its project portfolio and process, and no mechanism to capture and convert enquiries online."
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
                                                        children: 'Developed a professional website aligned with Vriksha Builders\' brand identity and "Built for Strength & Performance" positioning'
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Utilized AI-assisted content development to create structured service, process, and project content"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Designed a user-friendly, mobile-responsive website with clear service and project presentation"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Built a client and testimonials showcase to strengthen credibility and trust"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Implemented SEO-friendly content and enquiry-focused call-to-action elements to support lead generation"
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
                                                children: "We successfully delivered a professional AI-assisted website that strengthened Vriksha Builders' digital presence and brand credibility in the construction industry. The new platform clearly communicates the company's service range, project portfolio, process, and client relationships, improving online visibility and supporting stronger client engagement. With a structured, well-organized website now in place, Vriksha Builders has a scalable digital asset that supports enquiry generation and future business growth across residential, commercial, and infrastructure construction segments."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "detail-cta-block",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                                children: "Ready to achieve results like Vriksha Builders?"
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
                                                        children: "Vriksha Builders"
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
                                                        children: "Website Development"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        className: "sidebar-tag",
                                                        children: "SEO"
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
                                                href: "/case-studies/tactive",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "recent-thumb",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                            src: "/img/case-study-tactive.webp",
                                                            alt: "From Zero Lead Pipeline to 35 Cr+ Qualified Pipeline for a Construction Tech ERP Brand",
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
                                                                    "Performance Marketing"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                className: "recent-title",
                                                                children: "From Zero Lead Pipeline to 35 Cr+ Qualified Pipeline for a Construction Tech ERP Brand"
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
                                                href: "/case-studies/sterlocare",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "recent-thumb",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                            src: "/img/case-study-sterlocare.webp",
                                                            alt: "Enterprise Lead Generation Across India and GCC for a Healthcare SaaS Brand",
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
                                                                    "SEO"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                className: "recent-title",
                                                                children: "Enterprise Lead Generation Across India and GCC for a Healthcare SaaS Brand"
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