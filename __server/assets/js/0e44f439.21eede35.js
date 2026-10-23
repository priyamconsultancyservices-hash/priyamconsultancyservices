"use strict";
exports.ids = ["6029"];
exports.modules = {
2240(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (PortfolioGrid)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var _theme_Layout__rspack_import_1 = __webpack_require__(8328);



const banner = "/img/portfolio.webp";
const feralroots = "/img/feral-roots-site.webp";
const urcts = "/img/urctc-site.webp";
const zky = "/img/zky-site.webp";
const ambuilders = "/img/am-site.webp";
const abb = "/img/abb-site.webp";
const riya = "/img/riya-site.webp";
const sterlocareportfiolo = "/img/sterlocare-portfiolo.webp";
const TalentTribe = "/img/talent-tribe-protfolio.webp";
const vriskha = "/img/vriksha-protfolio.webp";
const vatcomm = "/img/vatcomm-protfolio.webp";
const Sterlo = "/img/sterlo-portfiolo.webp";
const greenstar = "/img/greenstar-protfolio.webp";
const tgcc = "/img/tgcc-protfolio.webp";
const sterlobuildportfiolo = "/img/sterlobuild-portfiolo.webp";
/* ─────────────────────────────────────────
   Portfolio data
───────────────────────────────────────── */ const PROJECTS = [
    {
        id: 1,
        url: "https://feralroots.in/",
        domain: "feralroots.in",
        image: feralroots
    },
    {
        id: 2,
        url: "https://www.urcts.in/",
        domain: "urcts.in",
        image: urcts
    },
    {
        id: 7,
        url: "https://staging.vrikshabuilders.com/",
        domain: "staging.vrikshabuilders.com",
        image: vriskha
    },
    {
        id: 8,
        url: "https://www.vatcommtechnologies.com/",
        domain: "vatcommtechnologies.com",
        image: vatcomm
    },
    {
        id: 9,
        url: "https://www.greenstarexports.com/",
        domain: "greenstarexports.com",
        image: greenstar
    },
    {
        id: 10,
        url: "https://www.tgcc.com.my/",
        domain: "tgcc.com.my",
        image: tgcc
    },
    {
        id: 3,
        url: "https://zky.co.in/",
        domain: "zky.co.in",
        image: zky
    },
    {
        id: 4,
        url: "https://abbmc.in/",
        domain: "abbmc.in",
        image: abb
    },
    {
        id: 5,
        url: "https://riyaconsultancy.com",
        domain: "riyaconsultancy.com",
        image: riya
    },
    {
        id: 6,
        url: "https://talenttribe.in/",
        domain: "talenttribe.in",
        image: TalentTribe
    },
    {
        id: 11,
        url: "https://www.sterlo.io/",
        domain: "sterlo.io",
        image: Sterlo
    },
    {
        id: 12,
        url: "https://www.sterlocare.com/",
        domain: "sterlocare.com",
        image: sterlocareportfiolo
    }
];
/* ─────────────────────────────────────────
   CSS
───────────────────────────────────────── */ /* ─────────────────────────────────────────
   Icons
───────────────────────────────────────── */ function ExternalIcon() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                points: "15 3 21 3 21 9"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                x1: "10",
                y1: "14",
                x2: "21",
                y2: "3"
            })
        ]
    });
}
function ArrowRightIcon() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
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
    });
}
/* ─────────────────────────────────────────
   Single Card
───────────────────────────────────────── */ function PortfolioCard({ project }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: "pg-card",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "pg-img-wrap",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                        className: "pg-img",
                        src: project.image,
                        alt: project.domain,
                        loading: "lazy"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "pg-overlay",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                            className: "pg-view-btn",
                            href: project.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ExternalIcon, {}),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "View Site"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "pg-footer",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "pg-dot"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        className: "pg-domain",
                        children: project.domain
                    })
                ]
            })
        ]
    });
}
/* ─────────────────────────────────────────
   Main Export
───────────────────────────────────────── */ function PortfolioGrid() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_1/* ["default"] */.A, {
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
                                        "Our Work"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                                    className: "sc-banner-title",
                                    children: [
                                        "Our ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            className: "sc-highlight",
                                            children: "Portfolio"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                    className: "sc-banner-subtitle",
                                    children: "We craft stunning digital experiences — from e-commerce stores to SaaS platforms. Hover to explore, click to visit each live project."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                                    href: "#projects",
                                    className: "sc-banner-cta",
                                    children: [
                                        "Explore More ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ArrowRightIcon, {})
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "sc-banner-right",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                src: banner,
                                alt: "Portfolio showcase"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "pg-content",
                id: "projects",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "pg-grid",
                    children: PROJECTS.map((project)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(PortfolioCard, {
                            project: project
                        }, project.id))
                })
            })
        ]
    });
}


},

};
;