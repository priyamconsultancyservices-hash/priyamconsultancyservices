"use strict";
exports.ids = ["8841"];
exports.modules = {
4589(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (PrivacyPolicy)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var _theme_Layout__rspack_import_1 = __webpack_require__(8328);
/* import */ var _docusaurus_Head__rspack_import_2 = __webpack_require__(3572);



function SEOHead() {
    const pageUrl = "https://www.priyamconsultancy.com/privacy-policy/";
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_2/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                children: "Privacy Policy | Priyam Consultancy Services "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "description",
                content: "The purpose of this privacy policy is to govern how Priyam Consultancy Services collects, uses, maintains, and discloses information collected from users.  "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "keywords",
                content: "Official Odoo Partner, Odoo Implementation Partner, Odoo ERP Solutions Partner, Odoo Official Partner for India, Odoo Gold Partner, Odoo ERP Consultant Partners, Odoo Implementation & ERP Solutions, Odoo Official Certified Partner"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                rel: "canonical",
                href: "https://www.priyamconsultancy.com/privacy-policy/"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:title",
                content: "Privacy Policy | Priyam Consultancy Services "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:description",
                content: "The purpose of this privacy policy is to govern how Priyam Consultancy Services collects, uses, maintains, and discloses information collected from users.  "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:url",
                content: "https://www.priyamconsultancy.com/privacy-policy/"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:site_name",
                content: " Microsoft App"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:title",
                content: "Privacy Policy | Priyam Consultancy Services "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:description",
                content: "The purpose of this privacy policy is to govern how Priyam Consultancy Services collects, uses, maintains, and discloses information collected from users.  "
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

  .tos-intro {
    font-size: .9rem;
    line-height: 1.85;
    color: #5a6a7a;
    margin-bottom: 2.5rem;
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

  .tos-subsection-title {
    font-size: .95rem;
    font-weight: 600;
    color: #0d1f2d;
    margin-top: 1rem;
    margin-bottom: .35rem;
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
function PrivacyPolicy() {
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
                                        "Privacy ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            children: "Policy"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "tos-body",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                className: "tos-intro",
                                children: 'This Privacy Policy describes the policies of Priyam Consultancy Services, 1st Floor, Pooja Garden, Kalapatti Road, Civil Aerodrome post, Coimbatore, Tamil Nadu, India, sales@priyamconsultancy.com, on the collection, use, and disclosure of your information that we collect when you use our website (https://www.priyamconsultancy.com) (the "Service"). By accessing or using the Service, you are consenting to the collection, use, and disclosure of your information in accordance with this Privacy Policy.'
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "tos-section",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tos-section-title",
                                        children: "INFORMATION WE COLLECT"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "tos-section-body",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "tos-subsection-title",
                                                children: "Personally Identifiable Information (PII)"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "Depending on how you interact with our website or services, we may collect certain Personally Identifiable Information (PII). This can include your name, email address, phone number, business name, company website, and location. We may also collect additional information if you choose to inquire about our services, submit forms, participate in recruitment activities, or request consultations. In case of paid services, your billing details or payment preferences may also be collected through our gateways."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "tos-subsection-title",
                                                children: "Non-Personally Identifiable Information (Non-PII)"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "When you visit our website, we may automatically collect Non-PII such as your IP address, browser type, device type, operating system, referring URLs, pages visited, time spent on site, and general browsing behavior. This data helps us improve website performance, understand user behavior, and optimize overall user experience. Such information is typically collected through cookies and third-party analytics tools."
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
                                        children: "HOW WE USE YOUR INFORMATION"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "tos-section-body",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "We will use the information that we collect about you for the following purposes:"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Marketing / Promotional"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Responding to service inquiries and support"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Recruitment and HR consulting services"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Website improvement and analytics"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "If we intend to use your information for any other purpose, we will ask for your consent. Your information will only be used for the purpose(s) for which you provided consent, unless required by law to do otherwise."
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
                                        children: "HOW WE SHARE YOUR INFORMATION"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "tos-section-body",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "We do not share or transfer your personal information to any third party without your prior consent, except under limited circumstances as outlined below:"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Advertising service providers"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "HR and IT partners"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Third-party marketing or branding agencies"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Analytics tools (e.g., Google Analytics)"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Web hosting and data processing service providers"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "These third parties are required to use the information solely for the purpose for which it was shared and must not retain it longer than necessary to fulfill that purpose."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "We may also disclose your personal information if:"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Required to comply with applicable laws, court orders, or legal obligations"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Necessary to enforce agreements or policies, including this Privacy Policy"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Required to respond to legal claims regarding your use of our services"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "PCS is acquired or merged—your information may be transferred to the new entity as part of business assets"
                                                    })
                                                ]
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
                                        children: "RETENTION OF YOUR INFORMATION"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "tos-section-body",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "We will retain your personal information depending on the type of data and purpose after you stop using our services, or as long as needed to fulfil the purposes outlined in this policy."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "In some cases, we may need to retain data for longer due to:"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Legal obligations and regulatory compliance"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Fraud prevention and dispute resolution"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "Internal record-keeping or audits"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "Non-identifiable and aggregated data that cannot be linked back to you may be stored indefinitely."
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
                                        children: "TEXT MESSAGE COMMUNICATIONS"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "tos-section-body",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "PCS may use SMS (text messaging) to communicate service updates, appointment confirmations, or marketing alerts. Message frequency may vary. Standard messaging rates from your mobile carrier may apply."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "We do not share any mobile information with third parties for promotional or marketing purposes. Consent and opt-in data from messaging services will not be sold or shared."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "tos-subsection-title",
                                                children: "OPT-OUT OF TEXT MESSAGE COMMUNICATIONS"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "You can opt out of receiving SMS communications at any time by replying with STOP or emailing us at sales@priyamconsultancy.com. You may still receive service-related or transactional messages from other PCS-managed numbers, and you can opt out of those separately in the same way."
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
                                        children: "COOKIES AND WEB BEACONS"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tos-section-body",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            children: "Like most websites, Priyam Consultancy Services (PCS) uses cookies to collect certain information when you visit our website. These cookies store data such as your browser type, device information, pages visited, and user preferences. This information helps us understand how visitors interact with our website and allows us to personalise content, improve functionality, and enhance your browsing experience. Cookies do not contain any personally identifiable information. You may choose to disable cookies through your browser settings at any time; however, doing so may affect the functionality or performance of certain parts of the website."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "tos-section",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "tos-section-title",
                                        children: "CHILDREN'S INFORMATION"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "tos-section-body",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "At Priyam Consultancy Services (PCS), protecting children while using the Internet is one of our key responsibilities. We strongly encourage parents and guardians to monitor and guide the online activities of their children."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "We do not knowingly collect any Personally Identifiable Information (PII) from children under the age of 13. If you believe that your child may have submitted such information on our website, we kindly request you to contact us immediately. We will take prompt steps to remove that data from our records."
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
                                        children: "QUESTIONS AND CONTACT INFORMATION"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "tos-section-body",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "If you would like to access, correct, amend, or delete any personal information we may have about you, register a complaint, or simply want more information regarding our privacy practices, please feel free to contact us at Priyam Consultancy Services, 1st Floor, SF.31/A Pooja Garden, Kalapatti Road Civil Aerodrome post, Coimbatore Tamil Nadu, India"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "tos-contact-links",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                    className: "tos-contact-link",
                                                    href: "mailto:sales@priyamconsultancy.com",
                                                    children: "✉ sales@priyamconsultancy.com"
                                                })
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