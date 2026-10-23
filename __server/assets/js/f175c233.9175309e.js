"use strict";
exports.ids = ["5638"];
exports.modules = {
3010(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (TermsOfService)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var _theme_Layout__rspack_import_1 = __webpack_require__(8328);
/* import */ var _docusaurus_Head__rspack_import_2 = __webpack_require__(3572);



function SEOHead() {
    const pageUrl = "https://www.priyamconsultancy.com/terms-and-conditions";
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_2/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                children: "Terms & Conditions | Priyam Consultancy Services  "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "description",
                content: "Priyam Consultancy Services operates this website. The terms we, us, and our refer to PCS, which offers this website. "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "keywords",
                content: "digital marketing services India, SEO services, social media marketing, PPC advertising, content marketing, email marketing, online marketing agency, digital marketing company India, PCS Business Solution"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                rel: "canonical",
                href: "https://www.priyamconsultancy.com/terms-and-conditions/"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:title",
                content: "Terms & Conditions | Priyam Consultancy Services  "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:description",
                content: "Priyam Consultancy Services operates this website. The terms we, us, and our refer to PCS, which offers this website. "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:url",
                content: "https://www.priyamconsultancy.com/terms-and-conditions"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:site_name",
                content: "PCS Business Solution"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:title",
                content: "Terms & Conditions | Priyam Consultancy Services  "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:description",
                content: "Priyam Consultancy Services operates this website. The terms we, us, and our refer to PCS, which offers this website. "
            })
        ]
    });
}
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

  :root {
    --navy: #004168;
    --navy-deep: #002a44;
    --navy-mid: #0a5282;
    --orange: #ed8337;
    --blue: #1a73e8;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .tos-wrap {
    font-family: 'Poppins', sans-serif;
    background: #f0f4f8;
    color: #0d1f2d;
    overflow-x: hidden;
  }

  /* ═══ BANNER ═══ */
  .banner {
    position: relative;
    min-height: 340px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 55%, var(--navy-mid) 100%);
    padding: 5rem 6% 4rem;
  }
  .banner::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: linear-gradient(rgba(237,131,55,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(237,131,55,0.06) 1px, transparent 1px);
    background-size: 60px 60px;
    animation: grid-drift 22s linear infinite;
  }
  .banner::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(ellipse 55% 80% at 80% 60%, rgba(237,131,55,0.12) 0%, transparent 65%),
      radial-gradient(ellipse 45% 70% at 5% 20%, rgba(0,42,68,0.6) 0%, transparent 55%);
  }
  @keyframes grid-drift { from{background-position:0 0} to{background-position:60px 60px} }

  .banner-inner {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.1rem;
    max-width: 700px;
  }
  .banner-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    background: rgba(237,131,55,0.12);
    border: 1px solid rgba(237,131,55,0.32);
    color: var(--orange);
    font-size: .7rem;
    font-weight: 700;
    padding: .38rem 1.1rem;
    border-radius: 50px;
    letter-spacing: .12em;
    text-transform: uppercase;
    animation: fadeUp .5s ease both;
  }
  .eyebrow-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--orange);
    animation: pulse-dot 1.6s infinite;
  }
  @keyframes pulse-dot {
    0%,100%{opacity:1;transform:scale(1)}
    50%{opacity:.4;transform:scale(1.5)}
  }
  .banner-title {
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 700;
    line-height: 1.1;
    color: #fff;
    animation: fadeUp .6s .08s ease both;
  }
  .banner-title span {
    color: var(--orange);
    text-decoration: underline;
    text-decoration-color: var(--orange);
    text-underline-offset: 6px;
    text-decoration-thickness: 3px;
  }
  .banner-subtitle {
    font-size: .97rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.55);
    max-width: 560px;
    animation: fadeUp .65s .16s ease both;
  }
  @keyframes fadeUp {
    from{opacity:0;transform:translateY(24px)}
    to{opacity:1;transform:translateY(0)}
  }

  /* ═══ CONTENT ═══ */
  .tos-body {
  
    margin: 0 auto;
    padding: 5rem 6% 5rem;
    background: #fff;
  }

  .tos-section {
    margin-bottom: 2rem;
  }

  .tos-section-title {
    font-size: 1.08rem;
    font-weight: 600;
    color: #0d1f2d;
    font-family: 'Poppins', sans-serif;
    margin-bottom: .55rem;
  }

  .tos-section-body {
    font-size: .9rem;
    line-height: 1.85;
    color: #5a6a7a;
  }

  .tos-section-body p + p { margin-top: .5rem; }

  .tos-section-body ul {
    margin-top: .5rem;
    list-style: none;
    padding-left: 0;
  }
  .tos-section-body ul li {
    padding-left: 1.2rem;
    margin-bottom: .3rem;
    position: relative;
  }
  .tos-section-body ul li::before {
    content: '*';
    position: absolute;
    left: 0;
  }

  .tos-link {
    color: var(--blue);
    text-decoration: none;
  }
  .tos-link:hover { text-decoration: underline; }

  .tos-contact-links {
    margin-top: .4rem;
    display: flex;
    flex-wrap: wrap;
    gap: .3rem 1.2rem;
  }
  .tos-contact-link {
    color: var(--blue);
    font-size: .9rem;
    text-decoration: none;
  }
  .tos-contact-link:hover { text-decoration: underline; }

  @media (max-width: 640px) {
    .tos-body { padding: 2.5rem 5% 3.5rem; }
  }
`;
function TermsOfService() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_1/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(SEOHead, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "tos-wrap",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("style", {
                        children: styles
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
                        className: "banner",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "banner-inner",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "banner-eyebrow",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "eyebrow-dot"
                                        }),
                                        "Legal"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                                    className: "banner-title",
                                    children: [
                                        "Terms of ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            children: "Service"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "tos-body",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "tos-section",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tos-section-title",
                                        children: "1. Overview"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tos-section-body",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: 'This website is operated by Priyam Consultancy Services (PCS). Throughout the site, the terms "we," "us," and "our" refer to PCS. By accessing or using our website (https://www.priyamconsultancy.com), you agree to be bound by these Terms and Conditions of Use and all applicable laws and regulations. These terms apply to all visitors of the site, including without limitation, cybersurfers, merchandisers, guests, and content contributors.'
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "tos-section",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tos-section-title",
                                        children: "2. Use License"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "tos-section-body",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "Authorization is granted to temporarily download one copy of the materials on PCS's website for personal, non-commercial, temporary viewing only. This is an entitlement of a license, not a transfer of title, and under this License you may not:"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Modify or copy the materials"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Use them for marketable purposes or public display"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Reverse-engineer or decompile any software"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Remove any brand or personal memos"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Mirror the materials on another platform"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "This License shall automatically terminate if you violate any of these restrictions."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "tos-section",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tos-section-title",
                                        children: "3. Disclaimer"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tos-section-body",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: 'All services are provided "as is" and "as available." PCS doesn\'t guarantee continued or error-free service. We aren\'t liable for any direct or indirect damages, including data loss, missed gains, or system failure.'
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "tos-section",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tos-section-title",
                                        children: "4. Accuracy of Information"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tos-section-body",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "We do our best to give accurate and streamlined content, but PCS isn't responsible if any information made available on this site is deficient or outdated. All material is provided for general information and shouldn't be relied upon as the sole basis for decision-making."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "tos-section",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tos-section-title",
                                        children: "5. Pricing and Variations"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tos-section-body",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Prices for our services are subject to change without notice. PCS reserves the right to modify or discontinue any part of the service without notice. We aren't liable for any change, suspension, or termination."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "tos-section",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tos-section-title",
                                        children: "6. Optional Tools & Third-Party Links"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tos-section-body",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "PCS may offer access to third-party tools or services. These are provided \"as is\" without guarantees. Use of similar tools is at your own risk. Our site may also contain links to third-party websites. We aren't responsible for the content or accuracy of any external site and don't assume responsibility for any third-party content or services."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "tos-section",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tos-section-title",
                                        children: "7. Personal Information"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tos-section-body",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                            children: [
                                                "Your submission of personal information is governed by our ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                    className: "tos-link",
                                                    href: "/privacy-policy",
                                                    children: "Privacy Policy"
                                                }),
                                                "."
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "tos-section",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tos-section-title",
                                        children: "8. Intellectual Property"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tos-section-body",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "All content, designs, images, logos, trademarks, and other materials available on this website or through our services are the exclusive property of Priyam Consultancy Services (PCS), unless otherwise stated. You may not reproduce, distribute, modify, transmit, display, perform, publish, license, or produce secondary works from any PCS-owned content without prior written authorization. Unauthorized use of any PCS intellectual property is strictly prohibited and may result in legal action."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "tos-section",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tos-section-title",
                                        children: "9. Governing Law"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tos-section-body",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "The laws of India shall govern these terms and any disputes arising under them."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "tos-section",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tos-section-title",
                                        children: "10. Contact Information"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "tos-section-body",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "For any questions regarding these Terms of Service, you may contact us at:"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "tos-contact-links",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                        className: "tos-contact-link",
                                                        href: "mailto:sales@priyamconsultancy.com",
                                                        children: "✉ sales@priyamconsultancy.com"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                        className: "tos-contact-link",
                                                        href: "https://www.priyamconsultancy.com",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: "\uD83C\uDF10 www.priyamconsultancy.com"
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