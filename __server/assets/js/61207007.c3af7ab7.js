"use strict";
exports.ids = ["641"];
exports.modules = {
9393(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);



/* ── CTA particle animation hook ── */ function useCtaCanvas(canvasRef) {
    (0,react__rspack_import_1.useEffect)(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const ORANGE = "#ed8337";
        let W, H, particles = [], raf;
        function resize() {
            W = canvas.width = canvas.parentElement.offsetWidth;
            H = canvas.height = canvas.parentElement.offsetHeight;
        }
        function Particle() {
            this.reset();
        }
        Particle.prototype.reset = function() {
            this.x = Math.random() * W;
            this.y = Math.random() * H;
            this.r = Math.random() * 2.2 + 0.6;
            this.type = Math.random() < 0.55 ? "dot" : Math.random() < 0.5 ? "ring" : "plus";
            this.speed = Math.random() * 0.35 + 0.08;
            this.dir = Math.random() * Math.PI * 2;
            this.alpha = Math.random() * 0.45 + 0.1;
            this.pulse = Math.random() * Math.PI * 2;
            this.pulseSpeed = Math.random() * 0.018 + 0.008;
            this.size = Math.random() * 4 + 2;
        };
        Particle.prototype.update = function() {
            this.x += Math.cos(this.dir) * this.speed;
            this.y += Math.sin(this.dir) * this.speed;
            this.pulse += this.pulseSpeed;
            this.dir += (Math.random() - 0.5) * 0.015;
            if (this.x < -20) this.x = W + 20;
            if (this.x > W + 20) this.x = -20;
            if (this.y < -20) this.y = H + 20;
            if (this.y > H + 20) this.y = -20;
        };
        Particle.prototype.draw = function() {
            const a = this.alpha * (0.7 + 0.3 * Math.sin(this.pulse));
            ctx.save();
            ctx.globalAlpha = a;
            ctx.strokeStyle = ctx.fillStyle = ORANGE;
            ctx.lineWidth = 1;
            if (this.type === "dot") {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r + Math.sin(this.pulse) * 0.4, 0, Math.PI * 2);
                ctx.fill();
            } else if (this.type === "ring") {
                const rr = this.size * (0.9 + 0.15 * Math.sin(this.pulse));
                ctx.beginPath();
                ctx.arc(this.x, this.y, rr, 0, Math.PI * 2);
                ctx.stroke();
            } else {
                const s = this.size * (0.9 + 0.1 * Math.sin(this.pulse));
                ctx.beginPath();
                ctx.moveTo(this.x - s, this.y);
                ctx.lineTo(this.x + s, this.y);
                ctx.moveTo(this.x, this.y - s);
                ctx.lineTo(this.x, this.y + s);
                ctx.stroke();
            }
            ctx.restore();
        };
        function drawLines() {
            const dots = particles.filter((p)=>p.type === "dot");
            for(let i = 0; i < dots.length; i++){
                for(let j = i + 1; j < dots.length; j++){
                    const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 110) {
                        ctx.save();
                        ctx.globalAlpha = (1 - dist / 110) * 0.12;
                        ctx.strokeStyle = ORANGE;
                        ctx.lineWidth = 0.7;
                        ctx.beginPath();
                        ctx.moveTo(dots[i].x, dots[i].y);
                        ctx.lineTo(dots[j].x, dots[j].y);
                        ctx.stroke();
                        ctx.restore();
                    }
                }
            }
        }
        function init() {
            resize();
            particles = [];
            const count = Math.floor(W * H / 9000);
            for(let i = 0; i < Math.max(count, 28); i++)particles.push(new Particle());
        }
        function loop() {
            ctx.clearRect(0, 0, W, H);
            drawLines();
            particles.forEach((p)=>{
                p.update();
                p.draw();
            });
            raf = requestAnimationFrame(loop);
        }
        window.addEventListener("resize", resize);
        init();
        loop();
        return ()=>{
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
        };
    }, []);
}
/* ── CTA Section ── */ function CTASection() {
    const canvasRef = (0,react__rspack_import_1.useRef)(null);
    useCtaCanvas(canvasRef);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        id: "cta-final",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "cta-banner",
            style: {
                "--glow-x": "50%",
                "--glow-y": "50%"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("canvas", {
                    id: "ctaCanvas",
                    ref: canvasRef
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "cta-banner-left",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "partners-header",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "partners-eyebrow",
                                style: {
                                    marginBottom: '20px',
                                    textAlign: 'start'
                                },
                                children: "Ready to Start?"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                            className: "cta-banner-heading",
                            children: [
                                "Let's Talk About Your",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}),
                                "Next Big ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    className: "hl-italic",
                                    children: "Growth Move"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "cta-banner-sub",
                            children: "No pressure. Just a quick conversation to understand where you are-and how we can help you move forward."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "cta-banner-right",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                            href: "#",
                            className: "cta-bprimary",
                            children: [
                                "Book a Free Consultation",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                                    viewBox: "0 0 16 16",
                                    fill: "none",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                                        d: "M3 8h10M9 4l4 4-4 4",
                                        stroke: "currentColor",
                                        strokeWidth: "1.8",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                            href: "#",
                            className: "cta-bghost",
                            children: "View All Services"
                        })
                    ]
                })
            ]
        })
    });
}
/* export default */ const __rspack_default_export = (CTASection);


},
8471(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DigitalMarketingLandingPage)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _theme_Layout__rspack_import_2 = __webpack_require__(8328);
/* import */ var _components_HomePage_CTA__rspack_import_3 = __webpack_require__(9393);
/* import */ var _emailjs_browser__rspack_import_4 = __webpack_require__(58);
/* import */ var _docusaurus_Head__rspack_import_5 = __webpack_require__(3572);






/* ─── useInView hook ─── */ function useInView(threshold = 0.1) {
    const ref = (0,react__rspack_import_1.useRef)(null);
    const [visible, setVisible] = (0,react__rspack_import_1.useState)(false);
    (0,react__rspack_import_1.useEffect)(()=>{
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setVisible(true);
                obs.disconnect();
            }
        }, {
            threshold
        });
        obs.observe(el);
        return ()=>obs.disconnect();
    }, [
        threshold
    ]);
    return [
        ref,
        visible
    ];
}
const banner = "/img/digital-marketing.png";
const who = "/img/who-digital-marketing.webp";
const Analytix = "/img/Analytix-Hub.webp";
const Baltimore = "/img/baltimore.webp";
const Sterlo = "/img/sterlo.webp";
const sterloBuild = "/img/sterlobuild-partner.webp";
const sterloCare = "/img/sterlocare-partner.webp";
const odoo = "/img/odoo-partner.webp";
const RiyaConsultancy = "/img/riyaconsultancy.webp";
const Tactive = "/img/tactive.webp";
const URCTC = "/img/urctc.webp";
const ZKY = "/img/zky.webp";
const microsoft = "/img/microsoft-app-partner.jpeg";
const OreOps = "/img/oreopps.webp";
/* ═══════════════════════════════════════════════════
   SEO META & SCHEMA
═══════════════════════════════════════════════════ */ function SEOHead() {
    const pageUrl = "https://priyamconsultancy.com/digital-marketing-company-in-coimbatore/";
    const imageUrl = "https://www.pcsbusinesssolution.com/img/digital-marketing.png";
    const schemaData = [
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@id": "https://www.priyamconsultancy.com/",
                        "name": "Home"
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@id": "https://www.priyamconsultancy.com/digital-marketing-company-in-coimbatore/",
                        "name": "Digital Marketing Company in Coimbatore"
                    }
                }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Priyam Consultancy Services",
            "url": "https://www.priyamconsultancy.com/",
            "logo": "https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png",
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "telephone": "+91 96774 44048",
                    "contactType": "customer support"
                }
            ],
            "sameAs": [
                "https://www.facebook.com/profile.php?id=61577125709962",
                "https://www.linkedin.com/company/priyam-consultancy-services/",
                "https://www.instagram.com/priyam_consultancy_services/",
                "https://x.com/services91032",
                "https://g.co/kgs/rdTYdi6"
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.priyamconsultancy.com/digital-marketing-company-in-coimbatore/#service",
            "name": "Digital Marketing Services in Coimbatore",
            "serviceType": "Digital Marketing Services",
            "url": "https://www.priyamconsultancy.com/digital-marketing-company-in-coimbatore/",
            "description": "Priyam Consultancy provides digital marketing services in Coimbatore including SEO, Google Ads, social media marketing, content marketing, website optimization, performance marketing, local SEO, and lead generation solutions for businesses of all sizes.",
            "provider": {
                "@type": "Organization",
                "name": "Priyam Consultancy Services",
                "url": "https://www.priyamconsultancy.com/",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png"
                }
            },
            "areaServed": {
                "@type": "City",
                "name": "Coimbatore"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Digital Marketing Company in Coimbatore | Priyam Consultancy Services",
            "image": "https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png",
            "@id": "https://www.priyamconsultancy.com/digital-marketing-company-in-coimbatore/",
            "url": "https://www.priyamconsultancy.com/digital-marketing-company-in-coimbatore/",
            "telephone": "+91 96774 44048",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "1st Floor, SF.11/4, Pooja Garden, Kalapatti Road, Civil Aerodrame Post",
                "addressLocality": "Coimbatore",
                "addressRegion": "Tamil Nadu",
                "postalCode": "641014",
                "addressCountry": "India"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 11.043918,
                "longitude": 77.038417
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Monday",
                    "opens": "09:00",
                    "closes": "18:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Tuesday",
                    "opens": "09:00",
                    "closes": "18:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Wednesday",
                    "opens": "09:00",
                    "closes": "18:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Thursday",
                    "opens": "09:00",
                    "closes": "18:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Friday",
                    "opens": "09:00",
                    "closes": "18:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "09:00",
                    "closes": "18:00"
                }
            ],
            "sameAs": [
                "https://www.facebook.com/profile.php?id=61577125709962",
                "https://www.linkedin.com/company/priyam-consultancy-services/",
                "https://www.instagram.com/priyam_consultancy_services/",
                "https://x.com/services91032",
                "https://g.co/kgs/rdTYdi6"
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What does a Digital Marketing Company in Coimbatore do?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A Digital Marketing Company in Coimbatore helps businesses grow online through services like SEO, Google Ads, social media marketing, content marketing, and website optimization. The goal is to increase visibility, generate leads, and improve sales."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why should I choose a Digital Marketing Agency in Coimbatore for my business?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Choosing a Digital Marketing Agency in Coimbatore ensures local market understanding, targeted strategies, and cost-effective campaigns. Agencies like PCS focus on measurable results such as leads, conversions, and ROI."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the benefits of Digital Marketing Services in Coimbatore?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Digital Marketing Services in Coimbatore help businesses improve online presence, attract targeted customers, increase website traffic, and generate high-quality leads through SEO, PPC, and social media strategies."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does it take to see results from digital marketing?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Results depend on strategy and competition. SEO may take 3–6 months, while paid advertising campaigns can generate immediate leads. A combined digital strategy delivers both short-term and long-term growth."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you provide customized digital marketing strategies?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, every business is unique. A professional Digital Marketing Company in Coimbatore creates customized strategies based on your industry, target audience, competition, and business goals to ensure better performance and ROI."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why is PCS considered the best digital marketing company in Coimbatore?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "PCS is trusted as one of the best digital marketing companies in Coimbatore due to its result-driven approach, strong lead generation strategies, transparent reporting, and focus on measurable business growth."
                    }
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_5/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                children: " No.1 Digital Marketing Company in Coimbatore | ROI-Driven  "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "description",
                content: "Top Digital Marketing Company in Coimbatore providing SEO services, paid ads, social media marketing, and web development solutions for business growth.       "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "keywords",
                content: "digital marketing services India, SEO services, social media marketing, PPC advertising, content marketing, email marketing, online marketing agency, digital marketing company India, PCS Business Solution"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                rel: "canonical",
                href: pageUrl
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:title",
                content: "No.1 Digital Marketing Company in Coimbatore | ROI-Driven  "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:description",
                content: "Top Digital Marketing Company in Coimbatore providing SEO services, paid ads, social media marketing, and web development solutions for business growth.       "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:url",
                content: pageUrl
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:image",
                content: imageUrl
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
                content: "No.1 Digital Marketing Company in Coimbatore | ROI-Driven  "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:description",
                content: "Top Digital Marketing Company in Coimbatore providing SEO services, paid ads, social media marketing, and web development solutions for business growth.       "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:image",
                content: imageUrl
            }),
            schemaData.map((schema, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                    type: "application/ld+json",
                    children: JSON.stringify(schema)
                }, i))
        ]
    });
}
/* ─── Google Fonts ─── */ const FontLoader = ()=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("style", {
        children: `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap');
    :root {
      --navy:#022b44; --navy-deep:#011a2a; --navy-mid:#0a3652;
      --orange:#ed8337; --orange-light:#f5a66b;
      --text-dim:rgba(255,255,255,0.45);
    }
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    html{scroll-behavior:smooth;}
    body,#root,main{overflow-x:hidden;max-width:100vw;}
    img{max-width:100%;height:auto;}
    /* body{font-family:'DM Sans',sans-serif;background:var(--navy);color:#fff;overflow-x:hidden;} */

    /* ── PROCESS SECTION ── */
    .ppc-tp-section{position:relative;background:#ffffff;padding:4rem 0 4rem;overflow:hidden;}
    .ppc-tp-cross{position:absolute;inset:0;pointer-events:none;z-index:0;background-image:linear-gradient(45deg,rgba(2,43,68,0.015) 25%,transparent 25%),linear-gradient(-45deg,rgba(2,43,68,0.015) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(2,43,68,0.015) 75%),linear-gradient(-45deg,transparent 75%,rgba(2,43,68,0.015) 75%);background-size:20px 20px;background-position:0 0,0 10px,10px -10px,-10px 0px;}
    .ppc-tp-header{position:relative;z-index:2;text-align:center;padding:0 6% 5rem;}
    .ppc-tp-h2{font-family:'Poppins',sans-serif;font-size:clamp(2rem,3.5vw,2.6rem);font-weight:700;line-height:1.1;color:#0d1f2d;margin-bottom:1.1rem;}
    .ppc-tp-h2 em{color:var(--orange);font-style:normal;font-weight:600;}
    .ppc-tp-sub{font-size:.97rem;line-height:1.8;color:#000;margin:0 auto;}
    .ppc-tp-body{position:relative;z-index:2;max-width:1180px;margin:0 auto;padding:0 5%;}
    .ppc-tp-step{display:grid;grid-template-columns:1fr 2fr;gap:0;margin-bottom:1px;position:relative;opacity:0;transition:opacity .6s ease,transform .6s ease;}
    .ppc-tp-step.tp-vis{opacity:1;transform:none !important;}
    .ppc-tp-step:nth-child(odd){transform:translateX(-28px);}
    .ppc-tp-step:nth-child(even){transform:translateX(28px);grid-template-columns:2fr 1fr;}
    .ppc-tp-step:nth-child(1){transition-delay:.04s;}.ppc-tp-step:nth-child(2){transition-delay:.15s;}.ppc-tp-step:nth-child(3){transition-delay:.26s;}.ppc-tp-step:nth-child(4){transition-delay:.37s;}.ppc-tp-step:nth-child(5){transition-delay:.48s;}
    .ppc-tp-num-side{background:#fafafa;border:1px solid rgba(2,43,68,0.06);padding:3rem 2.5rem;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden;transition:background .35s ease;}
    .ppc-tp-step:hover .ppc-tp-num-side{background:rgba(237,131,55,0.04);}
    .ppc-tp-step:nth-child(even) .ppc-tp-num-side{order:2;}
    .ppc-tp-step:nth-child(even) .ppc-tp-text-side{order:1;}
    .ppc-tp-bg-num{position:absolute;bottom:-20px;right:-10px;font-family:'Poppins',sans-serif;font-size:9rem;font-weight:900;color:rgba(237,131,55,0.07);line-height:1;letter-spacing:-.06em;pointer-events:none;transition:color .35s ease;user-select:none;}
    .ppc-tp-step:hover .ppc-tp-bg-num{color:rgba(237,131,55,0.13);}
    .ppc-tp-step-index{font-family:'Space Mono',monospace;font-size:.6rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:rgba(237,131,55,0.5);margin-bottom:.5rem;}
    .ppc-tp-step-title{font-family:'Poppins',sans-serif;font-size:1.23rem;font-weight:600;color:#0d1f2d;line-height:1.3;letter-spacing:-.02em;transition:color .3s ease;position:relative;z-index:2;}
    .ppc-tp-step:hover .ppc-tp-step-title{color:var(--orange);}
    .ppc-tp-step-title::after{content:'';display:block;margin-top:6px;height:3px;background:var(--orange);border-radius:2px;width:0;transition:width .35s ease;}
    .ppc-tp-step:hover .ppc-tp-step-title::after{width:48px;}
    .ppc-tp-phase{margin-top:.8rem;font-family:'DM Sans',sans-serif;font-size:.78rem;font-weight:600;color:rgba(237,131,55,0.65);letter-spacing:.04em;position:relative;z-index:2;}
    .ppc-tp-text-side{border:1px solid rgba(2,43,68,0.06);border-left:none;padding:3rem 2.8rem;display:flex;flex-direction:column;justify-content:center;background:#fff;position:relative;overflow:hidden;transition:background .35s ease;}
    .ppc-tp-step:nth-child(even) .ppc-tp-text-side{border-left:1px solid rgba(2,43,68,0.06);border-right:none;}
    .ppc-tp-text-side::before{content:'';position:absolute;bottom:0;right:0;width:0;height:0;border-style:solid;border-width:0 0 32px 32px;border-color:transparent transparent rgba(237,131,55,0.1) transparent;transition:border-width .3s ease;}
    .ppc-tp-step:hover .ppc-tp-text-side::before{border-width:0 0 44px 44px;}
    .ppc-tp-desc{font-size:.89rem;line-height:1.82;color:#010202a3;margin-bottom:1.2rem;}
    .ppc-tp-bullets{display:flex;flex-direction:column;gap:.3rem;}
    .ppc-tp-bullet{font-size:.85rem;font-weight:500;color:#010202a3;display:flex;align-items:flex-start;gap:.55rem;}
    .ppc-tp-bullet::before{content:'';display:inline-block;width:12px;height:1.5px;background:var(--orange);flex-shrink:0;border-radius:2px;}
    @media(max-width:760px){
      .ppc-tp-step,.ppc-tp-step:nth-child(even){grid-template-columns:1fr;}
      .ppc-tp-step:nth-child(even) .ppc-tp-num-side{order:0;}
      .ppc-tp-step:nth-child(even) .ppc-tp-text-side{order:1;border-left:none;border-right:none;}
      .ppc-tp-text-side{border-left:none;border-top:none;}
      .ppc-tp-num-side,.ppc-tp-text-side{padding:2rem 5%;}
    }
    @media(max-width:580px){
      .ppc-tp-step,.ppc-tp-step:nth-child(even){grid-template-columns:1fr !important;}
      .ppc-tp-step:nth-child(even) .ppc-tp-num-side{order:0 !important;}
      .ppc-tp-step:nth-child(even) .ppc-tp-text-side{order:1 !important;border-left:none !important;border-right:none !important;}
      .ppc-tp-text-side{border-left:none !important;border-top:none !important;}
      .ppc-tp-num-side,.ppc-tp-text-side{padding:1.5rem 4% !important;}
      .ppc-tp-header{padding:0 4% 2.5rem !important;}
      .ppc-tp-body{padding:0 4% !important;}
      .ppc-tp-step-title{font-size:1.4rem !important;}
    }
    @media(max-width:480px){
      .ppc-tp-num-side,.ppc-tp-text-side{padding:1.2rem 4% !important;}
    }

    /* ── BENEFITS SECTION ── */
    .tl-section{position:relative;padding:6rem 4% 4%;background:#ffffff;overflow:hidden;}
    .tl-inner{position:relative;z-index:2;margin:0 auto;}
    .tl-header{text-align:center;margin-bottom:4rem;}
    .tl-heading{font-family:'Poppins',sans-serif;font-size:clamp(1.7rem,2.8vw,2.4rem);font-weight:700;line-height:1.15;color:#000;margin-bottom:.85rem;}
    .tl-heading span{color:var(--orange);}
    .tl-subtext{font-size:.96rem;line-height:1.7;color:#000;margin:0 auto;}
    .bento-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;}
    .bn-cell{position:relative;padding:2.4rem 2.2rem;display:flex;flex-direction:column;gap:.7rem;background:transparent;opacity:1;transition:background 0.3s ease;}
    .bn-cell-1,.bn-cell-2,.bn-cell-3{border-top:1.5px solid rgba(0,65,104,0.08);}
    .bn-cell-2,.bn-cell-5{border-left:1.5px solid rgba(0,65,104,0.08);border-right:1.5px solid rgba(0,65,104,0.08);}
    .bn-cell-4,.bn-cell-5,.bn-cell-6{border-top:1.5px solid rgba(0,65,104,0.08);}
    .bn-cell::before{content:'';position:absolute;left:0;top:2.4rem;bottom:2.4rem;width:3px;border-radius:2px;background:var(--orange);transform:scaleY(0);transform-origin:top;transition:transform 0.3s ease;}
    .bn-cell:hover::before{transform:scaleY(1);}
    .bn-cell:hover{background:rgba(237,131,55,0.025);}
    .bn-cell .bn-icon{width:44px;height:44px;border-radius:12px;background:rgba(237,131,55,0.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-bottom:.2rem;transition:background 0.28s;}
    .bn-cell:hover .bn-icon{background:rgba(237,131,55,0.2);}
    .bn-cell .bn-icon svg{width:22px;height:22px;stroke:var(--orange);fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}
    .bn-cell .bn-num{font-size:.62rem;font-weight:700;letter-spacing:.1em;color:var(--orange);text-transform:uppercase;}
    .bn-cell .bn-title{font-family:'Poppins',sans-serif;font-size:1.05rem;font-weight:600;color:#000;line-height:1.3;}
    .bn-cell .bn-desc{font-size:.875rem;line-height:1.78;color:#000;font-family:'Poppins',sans-serif;}
    .bn-cell .bn-link{display:inline-flex;align-items:center;gap:.3rem;font-size:.8rem;font-weight:700;color:var(--orange);text-decoration:none;margin-top:.3rem;opacity:0;transform:translateX(-6px);transition:opacity 0.25s ease,transform 0.25s ease;}
    .bn-cell:hover .bn-link{opacity:1;transform:translateX(0);}
    @media(max-width:768px){.bento-grid{grid-template-columns:repeat(2,1fr);}.bn-cell-2,.bn-cell-5{border-left:none;border-right:none;}.bn-cell-3,.bn-cell-5{border-left:1.5px solid rgba(0,65,104,0.08);}}
    @media(max-width:480px){.bento-grid{grid-template-columns:1fr;}.bn-cell-2,.bn-cell-5{border-left:none;}.bn-cell-3,.bn-cell-5{border-left:none;}}
  
  /* CONTAINER */
.feature-container{
  display:flex;
  justify-content:center;
  gap:40px;
  /*flex-wrap: wrap;*/
}

/* LEFT & RIGHT COLUMN */
.feature-col{
  width:320px;
  display:flex;
  flex-direction:column;
  /* justify-content:space-between; */
  position:relative;
}
.feature-col.left{text-align:left;}
.feature-col.right{text-align:left; margin-left: 20px;}

/* FEATURE BOX */
.feature-box{
  position:relative;
  margin-bottom: 30px;
}

.feature-box h3{
  color:#101828;
  font-size:22px;
  letter-spacing: 0.1px;
  margin-bottom:6px;
  font-weight: 600;
  position:relative;
  padding-bottom:14px;
}

/* UNDERLINE DOTTED LINE FOR h3 */
.feature-box h3::after {
    content: '';
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 99%;
    border-top: 1px solid #2042765c;
}

/* h4 and list */
.feature-box h4{
  font-size:19px;
  margin-bottom:10px;
  letter-spacing: 0.1px;
  color: #F8A117;
  font-weight: 500;
}

.feature-box ul{
  padding-left:18px;
   font-size:17px;
  margin:0;
}

.feature-box li{
  color:#4B5569;
  margin-bottom:6px;
}

/* UNIQUE CONNECTOR LINES LEFT (touch icons) */
.feature-col.left .box1::after{
 content: '';
    position: absolute;
    top: 74px;
    right: -69px;
    width: 77px;
    height: 1px;
    border-top: 1px solid #2042765c;
    transform: rotate(20deg);
    transform-origin: right center;
}

.feature-col.left .box2::after{
content: '';
    position: absolute;
    top: 22.5%;
    right: -31px;
    width: 35px;
    height: 1px;
    border-top: 1px solid #2042765c;
    transform: rotate(0deg);
    transform-origin: right center;
}

.feature-col.left .box3::after{
content: '';
    position: absolute;
    bottom: 250px;
    right: -96px;
    width: 118px;
    height: 1px;
    border-top: 1px solid #2042765c;
    transform: rotate(-32deg);
    transform-origin: right center;
}

/* UNIQUE CONNECTOR LINES RIGHT (touch icons) */
.feature-col.right .box1::after{
content: '';
    position: absolute;
    top: 72px;
    left: -88px;
    width: 92px;
    height: 1px;
    border-top: 1px solid #2042765c;
    transform: rotate(-15deg);
    transform-origin: left center;
}

.feature-col.right .box2::after {
       content: '';
    position: absolute;
    top: 23%;
    left: -33px;
    width: 33px;
    height: 1px;
    border-top: 1px solid #2042765c;
    transform: rotate(0deg);
    transform-origin: left center;
}

.feature-col.right .box3::after{
        content: '';
    position: absolute;
    bottom: 0px;
    left: -104px;
    top: -16px;
    width: 122px;
    height: 1px;
    border-top: 1px solid #2042765c;
    transform: rotate(32deg);
    transform-origin: left center;

}
/* CENTER CIRCLE */
.feature-center{
  flex:0 0 420px;
  display:flex;
  justify-content:center;
}

.outer-circle{
  width:500px;
  height:500px;
  border:3px solid #0F234B;
  border-radius:50%;
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
}

.ring{
  position:absolute;
  width:400px;
  height:400px;
  border:2px dashed #05041875;
  border-radius:50%;
}

.inner-circle{
  width:350px;
  height:350px;
  border-radius:50%;
  overflow:hidden;
}

.inner-circle img{
  width:100%;
  height:100%;
  object-fit:cover;
}
/* ICON STYLE */
.icon{
  width:56px;
  height:56px;
  background:#0F234B;       /* ✅ icon bg */
  color:#fff;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  font-size:22px;
  border: 2px solid #204276; /* ✅ inner border */
  z-index: 2;
}
.icon::before{
  content: "";
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 2px solid #204276; /* ✅ line color */
  opacity: .6;
  animation: ringBlink 2s ease-in-out infinite;
}
.icon::after{
  content: "";
  position: absolute;
  inset: -12px;
  border-radius: 50%;
  border: 1px dashed #204276!important; /* ✅ line color */
  opacity: .4;
  animation: ringBlink 2s ease-in-out infinite;
  animation-delay: .6s;
}

@keyframes ringBlink{
  0%{
    transform: scale(1);
    opacity: .3;
  }
  50%{
    transform: scale(1.08);
    opacity: .9;
  }
  100%{
    transform: scale(1);
    opacity: .3;
  }
}
/* LEFT ICONS */
.top-left{
     left: 35px;
    top: 33px;
}

.middle-left{
  left:-28px;
  top:53%;
  transform:translateY(-50%);
}

.bottom-left{
    left: 54px;
    bottom: 29px;
}

/* RIGHT ICONS */
.top-right{
 right: 35px;
    top: 40px;
}

.middle-right{
  right:-28px;
  top:53%;
  transform:translateY(-50%);
}

.bottom-right{
     right: 46px;
    bottom: 25px;
}
/* RESPONSIVE */
@media(max-width:1024px){
  .feature-container{
    flex-direction:column;
    align-items:center;
    padding: 30px;
  }

  .feature-col{
    width:100%;
    max-width:420px;
    height:auto;
    justify-content:flex-start;
    gap:40px;
    text-align:center;
  }

  .feature-center{
    margin:40px 0;
  }

  .outer-circle{
    width:320px;
    height:320px;
  }

  .ring{
    width:220px;
    height:220px;
  }

  .inner-circle{
    width:180px;
    height:180px;
  }

  /* hide connector lines on mobile for cleaner layout */
  .feature-box::after{
    display:none;
  }
}
@media (max-width: 1024px){
  .feature-container{
    flex-direction: column;
    align-items: center;
  }

  .feature-col{
    max-width: 500px;
    width: 100%;
    text-align: center;
    gap: 40px;
  }

  .feature-center{
    margin: 50px 0;
  }

  .outer-circle{
    width: 360px;
    height: 360px;
  }

  .ring{
    width: 260px;
    height: 260px;
  }

  .inner-circle{
    width: 210px;
    height: 210px;
  }

  /* Hide connector lines */
  .feature-box::after{
    display: none !important;
  }
}

/* Mobiles */
@media (max-width: 600px){
  .outer-circle{
    width: 280px;
    height: 280px;
  }

  .ring{
    width: 200px;
    height: 200px;
  }

  .inner-circle{
    width: 160px;
    height: 160px;
  }

  .icon{
    width: 46px;
    height: 46px;
    font-size: 18px;
  }

  .feature-box h3{
    font-size: 20px;
  }

  .feature-box h4{
    font-size: 17px;
  }

  .feature-box ul{
    font-size: 15px;
  }
}

  
    `
    });
const PROCESS_STEPS = [
    {
        step: "01",
        title: "Insight Discovery ",
        phase: "Phase 1 — Understand",
        desc: "We begin with in-depth research to clearly understand your business, industry landscape, and competitive environment. This includes industry analysis, competitor mapping, keyword research, audience behavior insights, and current performance evaluation. By identifying opportunities, challenges, and intent-driven data, we lay a strong foundation for a focused and effective digital marketing strategy.",
        bullets: []
    },
    {
        step: "02",
        title: "Strategy Planning ",
        phase: "Phase 2 — Planning ",
        desc: "As a strategy-first digital marketing agency, we design customized growth roadmaps aligned with your specific objectives—whether it’s brand awareness, lead generation, customer acquisition, or revenue growth. Each roadmap outlines clear action plans, timelines, channels, and performance benchmarks to ensure every digital effort contributes directly to your business goals.",
        bullets: []
    },
    {
        step: "03",
        title: "Rapid Execution ",
        phase: "Phase 3 — Execution ",
        desc: "Once the strategy is defined, our in-house team of digital marketing specialists executes with speed, precision, and accountability. From SEO and paid advertising to content creation and social media campaigns, we ensure seamless execution across platforms while maintaining quality, consistency, and alignment with the overall growth plan.",
        bullets: []
    },
    {
        step: "04",
        title: "Continuous Optimization",
        phase: "Phase 4 — Optimize ",
        desc: "Digital marketing is an ongoing process, not a one-time activity. We continuously monitor campaign performance, analyze data, test new approaches, and optimize strategies in real time. By refining targeting, creatives, content, and funnels, we ensure sustained growth, improved efficiency, and long-term digital success.",
        bullets: []
    }
];
// hero section 
const HERO_STATS = [
    {
        value: "₹17.88 Cr+",
        label: "Total Ad Spend Managed",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: "none",
            stroke: "#fff",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                    d: "M12 6v2m0 8v2M9.5 9.5a2.5 2.5 0 0 1 5 0c0 1.5-1.5 2-2.5 2.5S9.5 14 9.5 15.5a2.5 2.5 0 0 0 5 0"
                })
            ]
        })
    },
    {
        value: "1,93,989+",
        label: "Leads Generated",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: "none",
            stroke: "#fff",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                    d: "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                })
            ]
        })
    },
    {
        value: "829+",
        label: "Campaigns Managed",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: "none",
            stroke: "#fff",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                    x1: "18",
                    y1: "20",
                    x2: "18",
                    y2: "10"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                    x1: "12",
                    y1: "20",
                    x2: "12",
                    y2: "4"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                    x1: "6",
                    y1: "20",
                    x2: "6",
                    y2: "14"
                })
            ]
        })
    },
    {
        value: "4X",
        label: "Average ROI Delivered",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: "none",
            stroke: "#fff",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                    points: "23 6 13.5 15.5 8.5 10.5 1 18"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                    points: "17 6 23 6 23 12"
                })
            ]
        })
    }
];
function HeroSection() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "hero",
        id: "hero",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("style", {
                children: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
 
        :root {
          --navy:      #004168;
          --navy-deep: #011a2a;
          --navy-mid:  #0a3652;
          --orange:    #ed8337;
          --orange-l:  #f5a66b;
          --dim:       rgba(255,255,255,0.45);
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Poppins', sans-serif; color: #fff; overflow-x: hidden; }
 
        .hero {
          min-height: 100svh;
          display: grid; grid-template-columns: 1fr 1fr;
          align-items: center; gap: 2rem;
          padding: 2rem 6% 4rem;
          position: relative; overflow: hidden;
          background: var(--navy);
        }
        .hero::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 65% 70% at 100% 50%, rgba(237,131,55,0.10) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 0% 100%, rgba(10,66,102,0.5) 0%, transparent 55%);
        }
        .hero::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: linear-gradient(rgba(237,131,55,0.028) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(237,131,55,0.028) 1px, transparent 1px);
          background-size: 52px 52px;
        }
 
        .hero-left { position: relative; z-index: 2; display: flex; flex-direction: column; }
 
        .h-badge {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: rgba(237,131,55,0.1); border: 1px solid rgba(237,131,55,0.28);
          color: var(--orange); font-size: 0.72rem; font-weight: 600;
          padding: 0.38rem 1rem; border-radius: 50px;
          letter-spacing: 0.09em; text-transform: uppercase;
          width: fit-content; animation: fadeUp 0.6s ease both;
        }
        .badge-dot {
          width: 6px; height: 6px; border-radius: 50%; background: var(--orange);
          animation: pulse-dot 1.6s infinite;
        }
        @keyframes pulse-dot { 0%,100%{ opacity:1; transform:scale(1); } 50%{ opacity:.4; transform:scale(1.5); } }
 
        .hero-heading {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(2.2rem, 3.8vw, 3rem);
          font-weight: 600; line-height: 1.15;
          margin-top: 1.4rem; animation: fadeUp 0.7s 0.08s ease both; color: #fff;
        }
        .hero-heading .hl { color: var(--orange); }
        .hero-heading .lined { position: relative; display: inline-block; }
        .hero-heading .lined::after {
          content: ''; position: absolute; left: 0; bottom: -3px;
          width: 100%; height: 3px; background: var(--orange); border-radius: 2px;
          transform: scaleX(0); transform-origin: left;
          animation: line-in 0.5s 0.9s ease forwards;
        }
        @keyframes line-in { to { transform: scaleX(1); } }
 
        .hero-sub {
          margin-top: 1.4rem; font-size: 1rem; line-height: 1.78;
          color: rgba(255,255,255,0.9); max-width: fit-content;
          animation: fadeUp 0.7s 0.16s ease both;
        }
        .hero-actions { margin-top: 2rem; display: flex; gap: 0.9rem; flex-wrap: wrap; animation: fadeUp 0.7s 0.26s ease both; }
        .btn-fill {
          background: var(--orange);
          padding: 0.85rem 2rem; border-radius: 50px;
          font-family: 'Poppins', sans-serif; font-size: 0.92rem; font-weight: 500;
          text-decoration: none; border: none; cursor: pointer; color: #fff;
          box-shadow: 0 4px 22px rgba(237,131,55,0.32);
          display: inline-flex; align-items: center; gap: 0.5rem;
          transition: background 0.22s, transform 0.18s, box-shadow 0.22s;
        }
        .btn-fill:hover { background: var(--orange-l); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(237,131,55,0.42); }
        .btn-arrow {
          display: inline-flex; align-items: center; justify-content: center;
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(2,43,68,0.3); font-size: 0.85rem;
        }
        @keyframes fadeUp { from{ opacity:0; transform:translateY(26px); } to{ opacity:1; transform:translateY(0); } }
 
        /* ── INLINE HERO STATS GRID ── */
        .hero-stats-grid {
          margin-top: 2.2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          animation: fadeUp 0.7s 0.36s ease both;
        }
        .hero-stat-card {
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 14px;
          padding: 14px 16px;
          backdrop-filter: blur(8px);
          transition: background 0.25s ease, transform 0.22s ease, border-color 0.25s ease;
        }
        .hero-stat-card:hover {
          background: rgba(237,131,55,0.12);
          border-color: rgba(237,131,55,0.35);
          transform: translateY(-3px);
        }
        .hero-stat-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #004168;
          border: 1.5px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .hero-stat-text { display: flex; flex-direction: column; gap: 2px; }
        .hero-stat-value {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.05rem, 1.8vw, 1.25rem);
          font-weight: 800;
          color: #ed8337;
          line-height: 1.1;
          letter-spacing: -0.01em;
        }
        .hero-stat-label {
          font-family: 'Poppins', sans-serif;
          font-size: 0.75rem;
          font-weight: 400;
          color: rgba(255,255,255,0.72);
          line-height: 1.3;
        }
 
        .hero-right {
          overflow: hidden; width: 100%; height: auto;
          position: relative; z-index: 2;
          display: flex; align-items: center; justify-content: center;
        }
        img.hero-img { animation: none !important; }
        .hero-img { width: 100%; object-fit: contain; display: block; }
 
        /* ══ TABLET ══ */
        @media(max-width: 960px) {
          .hero {
            grid-template-columns: 1fr;
            padding: 6rem 5% 4rem;
            min-height: auto;
            gap: 2.5rem;
          }
          .hero-left { order: 1; align-items: flex-start; padding: 3rem 0; }
          .hero-right { width: 100% !important; height: auto !important; order: 2; display: flex; justify-content: center; }
          .hero-img { width: 100%; max-width: 480px; height: auto; }
          .hero-sub { max-width: 90%; }
          .hero-actions { justify-content: flex-start; }
          .hero-stats-grid { grid-template-columns: 1fr 1fr; }
        }
 
        /* ══ MOBILE ══ */
        @media(max-width: 600px) {
          .hero { padding: 5rem 4% 3rem; gap: 2rem; }
          .hero-heading { font-size: clamp(1.7rem, 6vw, 2.2rem) !important; }
          .hero-sub { font-size: 0.9rem; max-width: 100%; }
          .hero-img { max-width: 100%; width: 100%; }
          .h-badge { font-size: 0.65rem; }
          .hero-stats-grid { grid-template-columns: 1fr 1fr; gap: 8px; }
          .hero-stat-card { padding: 10px 12px; gap: 10px; }
          .hero-stat-icon-box { width: 40px; height: 40px; border-radius: 10px; }
          .hero-stat-value { font-size: 0.95rem; }
          .hero-stat-label { font-size: 0.68rem; }
        }
      `
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "hero-left",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "h-badge",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "badge-dot"
                            }),
                            "Real Results. Measurable Growth"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                        className: "hero-heading",
                        children: [
                            "#1 Best",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: "hl lined",
                                style: {
                                    marginLeft: '12px'
                                },
                                children: "  Digital Marketing  "
                            }),
                            "Company in Coimbatore"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "hero-sub",
                        children: "PCS is a results-focused Digital Marketing Company in Coimbatore helping businesses increase online visibility, attract qualified leads, and improve conversions through SEO, Performance Marketing, Social Media Marketing, and Website Development"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "hero-stats-grid",
                        children: HERO_STATS.map((stat, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "hero-stat-card",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "hero-stat-icon-box",
                                        children: stat.icon
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "hero-stat-text",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "hero-stat-value",
                                                children: stat.value
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "hero-stat-label",
                                                children: stat.label
                                            })
                                        ]
                                    })
                                ]
                            }, i))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "hero-right",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "hero-form-card",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("style", {
                            children: `
            .hero-form-card {
              background: #fff;
              border-radius: 20px;
              padding: 2.2rem 2.4rem 2.4rem;
              width: 100%;
              max-width: 480px;
              box-shadow: 0 20px 60px rgba(0,0,0,0.18);
              position: relative;
              z-index: 3;
            }
            .hero-form-title {
              font-family: 'Poppins', sans-serif;
              font-size: clamp(1.5rem, 2.5vw, 1.9rem);
              font-weight: 700;
              color: #022b44;
              line-height: 1.2;
              margin-bottom: 0.4rem;
            }
            .hero-form-title span { color: #ed8337; }
            .hero-form-sub { font-size: 0.85rem; color: #666; margin-bottom: 1.5rem; }
            .hero-form-row {
              display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1rem;
            }
            .hero-form-field { display: flex; flex-direction: column; gap: 0.3rem; }
            .hero-form-field input,
            .hero-form-field textarea {
              border: none; border-bottom: 1.5px solid #ccc; outline: none;
              padding: 0.55rem 0; font-size: 0.88rem;
              font-family: 'Poppins', sans-serif; color: #022b44;
              background: transparent; transition: border-color 0.2s; width: 100%;
            }
            .hero-form-field input:focus,
            .hero-form-field textarea:focus { border-bottom-color: #ed8337; }
            .hero-form-field input::placeholder,
            .hero-form-field textarea::placeholder { color: #aaa; font-size: 0.85rem; }
            .hero-form-field textarea { resize: none; min-height: 64px; }
            .hero-phone-wrap {
              display: flex; align-items: flex-end; gap: 0.5rem;
              border-bottom: 1.5px solid #ccc; transition: border-color 0.2s;
            }
            .hero-phone-wrap:focus-within { border-bottom-color: #ed8337; }
            .hero-phone-prefix {
              font-size: 0.88rem; font-weight: 700; color: #022b44;
              padding-bottom: 0.55rem; white-space: nowrap; flex-shrink: 0;
            }
            .hero-phone-wrap input { border: none !important; border-bottom: none !important; padding: 0.55rem 0 !important; flex: 1; }
            .hero-form-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 1.4rem; gap: 1rem; }
            .hero-form-btn {
              display: inline-flex; align-items: center; gap: 0.6rem;
              background: #ed8337; color: #fff; border: none; border-radius: 50px;
              padding: 0.85rem 1.8rem; font-family: 'Poppins', sans-serif;
              font-size: 0.9rem; font-weight: 600; cursor: pointer;
              transition: background 0.2s, transform 0.18s; flex-shrink: 0;
            }
            .hero-form-btn:hover { background: #004168; transform: translateY(-2px); }
            .hero-form-btn-arrow {
              width: 26px; height: 26px; border-radius: 50%;
              background: rgba(255,255,255,0.15);
              display: flex; align-items: center; justify-content: center; font-size: 0.9rem;
            }
            @media(max-width: 960px) { .hero-form-card { max-width: 100%; } }
            @media(max-width: 600px) {
              .hero-form-card { padding: 1.6rem 1.4rem 1.8rem; }
            }
          `
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                            className: "hero-form-title",
                            children: [
                                "Your Growth, ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "Our Mission."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "hero-form-sub",
                            children: "Fill in your details — we'll get back within 24 hours."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(HeroContactForm, {})
                    ]
                })
            })
        ]
    });
}
function HeroContactForm() {
    const [form, setForm] = (0,react__rspack_import_1.useState)({
        name: "",
        email: "",
        phone: "",
        company: "",
        msg: ""
    });
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const sendEmail = (e)=>{
        e.preventDefault();
        const templateParams = {
            name: form.name,
            email: form.email,
            phone: form.phone,
            company: form.company,
            message: form.msg,
            url: window.location.href
        };
        _emailjs_browser__rspack_import_4["default"].send("service_8xw6k3r", "template_jarui36", templateParams, "XWRnXi4hK2SvmRG3q").then(()=>{
            alert("Message Sent Successfully ✅");
            setForm({
                name: "",
                email: "",
                phone: "",
                company: "",
                msg: ""
            });
        }).catch((error)=>{
            console.log(error);
            alert("Failed to send ❌");
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("form", {
        onSubmit: sendEmail,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "hero-form-row",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "hero-form-field",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                        type: "text",
                        name: "name",
                        placeholder: "Your Name",
                        value: form.name,
                        onChange: handleChange,
                        required: true
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "hero-form-row",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "hero-form-field",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                        type: "email",
                        name: "email",
                        placeholder: "Email Address",
                        value: form.email,
                        onChange: handleChange,
                        required: true
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "hero-form-row",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "hero-form-field",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "hero-phone-wrap",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: "hero-phone-prefix",
                                children: "IN +91"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                type: "tel",
                                name: "phone",
                                placeholder: "Mobile Number",
                                value: form.phone,
                                onChange: handleChange,
                                maxLength: "10",
                                pattern: "[0-9]{10}",
                                required: true
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "hero-form-row",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "hero-form-field",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                        type: "text",
                        name: "company",
                        placeholder: "Company Name",
                        value: form.company,
                        onChange: handleChange
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "hero-form-row",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "hero-form-field",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("textarea", {
                        name: "msg",
                        placeholder: "Your Message",
                        value: form.msg,
                        onChange: handleChange
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "hero-form-footer",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("button", {
                    type: "submit",
                    className: "hero-form-btn",
                    children: [
                        "Send Message",
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                            className: "hero-form-btn-arrow",
                            children: "→"
                        })
                    ]
                })
            })
        ]
    });
}
const PARTNERS = [
    {
        id: 1,
        name: "Analytix-Hub",
        logo: Analytix
    },
    {
        id: 2,
        name: "Baltimore",
        logo: Baltimore
    },
    {
        id: 3,
        name: "Sterlo",
        logo: Sterlo
    },
    {
        id: 4,
        name: "Sterlo Build",
        logo: sterloBuild
    },
    {
        id: 5,
        name: "Sterlo Care",
        logo: sterloCare
    },
    {
        id: 6,
        name: "Microsoft",
        logo: microsoft
    },
    {
        id: 7,
        name: "Odoo",
        logo: odoo
    },
    {
        id: 8,
        name: "OreOps",
        logo: OreOps
    },
    {
        id: 9,
        name: "Riya Consultancy",
        logo: RiyaConsultancy
    },
    {
        id: 10,
        name: "Tactive",
        logo: Tactive
    },
    {
        id: 11,
        name: "URCTS",
        logo: URCTC
    },
    {
        id: 12,
        name: "ZKY",
        logo: ZKY
    }
];
function Partners() {
    const items = [
        ...PARTNERS,
        ...PARTNERS
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        className: "partners-section",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "partners-track-wrapper",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "partners-fade-left"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "partners-fade-right"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "partners-track",
                    children: items.map((partner, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "partner-logo-card",
                            children: partner.logo && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                src: partner.logo,
                                alt: partner.name
                            })
                        }, i))
                })
            ]
        })
    });
}
function WhoWeAre() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: "page",
        style: {
            padding: '60px 65px 75px'
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "left",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "why-eyebrow",
                        children: "Who We Are"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                        children: [
                            "No.1 ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("em", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                    children: "Digital Marketing Company in Coimbatore"
                                })
                            }),
                            "  for ROI-Focused Growth "
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        children: "PCS is recognized as a trusted Digital Marketing Company in Coimbatore helping businesses transform their online presence into measurable business outcomes."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        children: "Unlike agencies that focus only on clicks and impressions, our team focuses on generating qualified leads, increasing conversions, and improving customer acquisition. Every campaign is backed by detailed market research, audience insights, and performance analysis."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        children: "Our comprehensive Digital Marketing Services in Coimbatore combine SEO, PPC advertising, content marketing, social media marketing, website development, and performance marketing under one roof."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        children: "If you're searching for a Digital Marketing Company in Coimbatore that focuses on growth rather than vanity metrics, PCS is your ideal partner."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "right",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                    src: who,
                    alt: "Who We Are",
                    className: "who-img"
                })
            })
        ]
    });
}
/* ═══════════════════════════════════════════════════
   BUSINESS INFOGRAPHIC COMPONENT
═══════════════════════════════════════════════════ */ const infographicCards = [
    {
        id: "L1",
        side: "left",
        accentColor: "#004168",
        diamondBorder: "#ed8337e9",
        title: "Traffic Growth ",
        text: "Increased website impressions from 340 to 10,000+ per month using SEO-rich Digital Marketing strategies.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/seo-miletones.webp",
            alt: "SEO",
            width: "44",
            height: "44"
        })
    },
    {
        id: "R1",
        side: "right",
        accentColor: "#004168",
        diamondBorder: "#ed8337",
        title: "Ranking Success ",
        text: "Secured Top 5 Google rankings using ethical SEO and expert content-led Digital Marketing solutions.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/secure-miletones.webp",
            alt: "Paid Marketing",
            width: "44",
            height: "44"
        })
    },
    {
        id: "L2",
        side: "left",
        accentColor: "#004168",
        diamondBorder: "#ed8337",
        title: "Lead Expansion ",
        text: "Achieved 150% growth in qualified lead generation, scaling from zero to a 40cr strong-performing pipeline.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/achive-miletones.webp",
            alt: "Content Marketing",
            width: "44",
            height: "44"
        })
    },
    {
        id: "R2",
        side: "right",
        accentColor: "#004168",
        diamondBorder: "#ed8337",
        title: "Global Reach ",
        text: "Delivered performance-driven ad campaigns across India, GCC, SEA, Africa, USA, and the UK through advanced Digital Marketing frameworks.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/driven-miletones.webp",
            alt: "Social Media",
            width: "44",
            height: "44"
        })
    },
    {
        id: "L3",
        side: "left",
        accentColor: "#004168",
        diamondBorder: "#ed8337e9",
        title: "Revenue Impact ",
        text: "Generated over ₹35 Cr in qualified leads for a single client through precise Digital Marketing funnels.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/lead-miletones.webp",
            alt: "Website Development",
            width: "44",
            height: "44"
        })
    },
    {
        id: "R3",
        side: "right",
        accentColor: "#004168",
        diamondBorder: "#ed8337e9",
        title: "Conversion Optimization ",
        text: "Reduced bounce rates from 80% to 35% and cut lead costs by 45% through optimized Digital Marketing executions.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/bounce-miletones.webp",
            alt: "Email Marketing",
            width: "44",
            height: "44"
        })
    }
];
const infographicDesktopPositions = {
    L1: {
        cardTop: 0,
        diamondTop: 23
    },
    R1: {
        cardTop: 95,
        diamondTop: 118
    },
    L2: {
        cardTop: 190,
        diamondTop: 213
    },
    R2: {
        cardTop: 285,
        diamondTop: 308
    },
    L3: {
        cardTop: 380,
        diamondTop: 403
    },
    R3: {
        cardTop: 475,
        diamondTop: 498
    }
};
function BusinessInfographic() {
    const [isMobile, setIsMobile] = (0,react__rspack_import_1.useState)(false);
    (0,react__rspack_import_1.useEffect)(()=>{
        const check = ()=>setIsMobile(window.innerWidth < 700);
        check();
        window.addEventListener("resize", check);
        return ()=>window.removeEventListener("resize", check);
    }, []);
    // Change 1: bg color rgb(10, 61, 86)
    // Change 2: each card gets a gradient based on its base color
    // Change 3: title 15px, desc 14px
    // Change 4: title block removed
    // Change 5: connector line (snake) white
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        style: {
            background: "#004168",
            padding: isMobile ? "40px 16px" : "60px 20px",
            display: "flex",
            justifyContent: "center"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            style: {
                background: "#004168",
                padding: isMobile ? "28px 18px 40px" : "44px 50px 68px 50px",
                width: "100%",
                maxWidth: 1200,
                boxSizing: "border-box",
                position: "relative"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "svc-header",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "partners-header1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "partners-eyebrow",
                                style: {
                                    marginBottom: '20px',
                                    textAlign: 'start'
                                },
                                children: "Our Major Milestones"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                            className: "svc-h2",
                            children: [
                                "Key Moments in  ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "Our Growth "
                                }),
                                " Story."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "svc-sub",
                            children: "Celebrating achievements that define our journey as a leading best digital marketing company in Coimbatore focused on measurable success."
                        })
                    ]
                }),
                isMobile && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: 8
                    },
                    children: infographicCards.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginBottom: 20,
                                width: "100%"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    style: {
                                        width: 60,
                                        height: 60,
                                        borderRadius: 12,
                                        background: "#fff",
                                        border: "2.5px solid #ed8337",
                                        transform: "rotate(45deg)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        boxShadow: "0 4px 14px rgba(237,131,55,0.25)",
                                        marginBottom: 10
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        style: {
                                            transform: "rotate(-45deg)",
                                            width: 28,
                                            height: 28,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        },
                                        children: item.icon
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    style: {
                                        background: "#fff",
                                        borderLeft: `4px solid ${item.accentColor}`,
                                        borderRadius: 14,
                                        padding: "16px 20px",
                                        width: "100%",
                                        maxWidth: 420,
                                        boxShadow: "0 4px 20px rgba(0,0,0,0.12)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                            style: {
                                                fontSize: 16,
                                                fontWeight: 800,
                                                letterSpacing: "1.2px",
                                                textTransform: "uppercase",
                                                marginBottom: 8,
                                                color: item.accentColor,
                                                fontFamily: "'Poppins',sans-serif"
                                            },
                                            children: item.title
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            style: {
                                                fontSize: 15,
                                                lineHeight: 1.72,
                                                color: "#334155",
                                                fontFamily: "'Poppins',sans-serif"
                                            },
                                            children: item.text
                                        })
                                    ]
                                }),
                                i < infographicCards.length - 1 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    style: {
                                        width: 2,
                                        height: 18,
                                        borderLeft: "2px dashed rgba(255,255,255,0.5)",
                                        marginTop: 4
                                    }
                                })
                            ]
                        }, item.id))
                }),
                !isMobile && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    style: {
                        position: "relative",
                        width: "100%",
                        height: 660,
                        marginTop: '100px'
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
                            style: {
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                zIndex: 5,
                                pointerEvents: "none",
                                overflow: "visible"
                            },
                            viewBox: "0 0 1000 660",
                            preserveAspectRatio: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polygon", {
                                    points: "500,4 492,22 508,22",
                                    fill: "rgba(255,255,255,0.7)"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                                    d: "M 500,22 C 505,32 530,63 530,80 C 530,98 510,111 500,127 C 490,143 470,159 470,175 C 470,191 490,206 500,222 C 510,238 530,254 530,270 C 530,286 510,301 500,317 C 490,333 470,349 470,365 C 470,381 490,396 500,412 C 510,428 530,444 530,460 C 530,476 510,491 500,507 C 490,523 470,539 470,555 C 470,571 490,586 500,602 C 500,620 500,640 500,655",
                                    stroke: "rgba(255,255,255,0.7)",
                                    strokeWidth: "2.5",
                                    strokeDasharray: "7 5",
                                    fill: "none",
                                    vectorEffect: "non-scaling-stroke"
                                })
                            ]
                        }),
                        infographicCards.map((item)=>{
                            const pos = infographicDesktopPositions[item.id];
                            const isLeft = item.side === "left";
                            return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        style: {
                                            position: "absolute",
                                            borderRadius: 18,
                                            padding: isLeft ? "18px 70px 18px 24px" : "18px 24px 18px 70px",
                                            width: "calc(50% - 80px)",
                                            height: 160,
                                            zIndex: 2,
                                            boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
                                            background: "#fff",
                                            borderTop: `4px solid ${item.accentColor}`,
                                            clipPath: isLeft ? "polygon(0% 0%, 100% 0%, 100% calc(50% - 70px), calc(100% - 70px) 50%, 100% calc(50% + 70px), 100% 100%, 0% 100%)" : "polygon(0% 0%, 0% calc(50% - 70px), 70px 50%, 0% calc(50% + 70px), 0% 100%, 100% 100%, 100% 0%)",
                                            top: pos.cardTop,
                                            left: isLeft ? 0 : undefined,
                                            right: isLeft ? undefined : 0,
                                            boxSizing: "border-box"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                                style: {
                                                    fontSize: 16,
                                                    fontWeight: 800,
                                                    letterSpacing: "1.2px",
                                                    textTransform: "uppercase",
                                                    marginBottom: 8,
                                                    color: item.accentColor,
                                                    fontFamily: "'Poppins',sans-serif"
                                                },
                                                children: item.title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                style: {
                                                    fontSize: 15,
                                                    lineHeight: 1.72,
                                                    color: "#334155",
                                                    fontFamily: "'Poppins',sans-serif"
                                                },
                                                children: item.text
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        style: {
                                            position: "absolute",
                                            zIndex: 10,
                                            width: 100,
                                            height: 100,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            top: pos.diamondTop,
                                            left: isLeft ? "calc(50% - 60px)" : "calc(50% + 60px)",
                                            transform: "translateX(-50%)"
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            style: {
                                                width: 95,
                                                height: 95,
                                                borderRadius: 18,
                                                transform: "rotate(45deg)",
                                                background: "#fff",
                                                border: "3px solid #ed8337f8",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                boxShadow: "0 5px 24px rgba(237,131,55,0.25)",
                                                position: "relative",
                                                flexShrink: 0
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    style: {
                                                        position: "absolute",
                                                        inset: 8,
                                                        borderRadius: 12,
                                                        border: "1px solid rgba(237,131,55,0.25)",
                                                        pointerEvents: "none"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    style: {
                                                        transform: "rotate(-45deg)",
                                                        width: 30,
                                                        height: 30,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center"
                                                    },
                                                    children: item.icon
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }, item.id);
                        })
                    ]
                })
            ]
        })
    });
}
/* ═══════════════════════════════════════════════════
   MILESTONES CTA SECTION — White BG + Pattern
═══════════════════════════════════════════════════ */ function MilestonesCTA() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "ms-cta-section",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("style", {
                children: `
        .ms-cta-section {
          position: relative;
          background: #ffffff;
          overflow: hidden;
          padding: 0 6%;
        }
        .ms-cta-section::before {
          content: '';
          position: absolute; inset: 0;
          pointer-events: none; z-index: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23004168' fill-opacity='0.045'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .ms-cta-glow-l {
          position: absolute; pointer-events: none; z-index: 0;
          width: 540px; height: 540px; border-radius: 50%;
          top: -190px; left: -130px;
          background: radial-gradient(ellipse, rgba(237,131,55,0.08) 0%, transparent 70%);
        }
        .ms-cta-glow-r {
          position: absolute; pointer-events: none; z-index: 0;
          width: 440px; height: 440px; border-radius: 50%;
          bottom: -150px; right: -90px;
          background: radial-gradient(ellipse, rgba(0,65,104,0.07) 0%, transparent 70%);
        }
          .left p {
    margin-top: 12px;}
        .ms-cta-line-top {
          position: relative; z-index: 2; height: 1.5px;
          background: linear-gradient(90deg, transparent, rgb(237 131 55 / 19%), transparent);
        }
        .ms-cta-line-bottom {
          position: relative; z-index: 2; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,65,104,0.1), transparent);
        }
        .ms-cta-inner {
          position: relative; z-index: 2;
          display: flex; align-items: center;
          justify-content: space-between;
          gap: 3rem;
          padding: 5.5rem 0 5.5rem;
          max-width: 1200px; margin: 0 auto;
        }
        .ms-cta-left { flex: 1 1 0; min-width: 0; }
        .ms-cta-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: #ed8337;
          margin-bottom: 1.1rem; font-family: 'DM Sans', sans-serif;
        }
        .ms-cta-eyebrow-bar { width: 20px; height: 2px; background: #ed8337; border-radius: 2px; }
        .ms-cta-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 700; line-height: 1.18;
          color: #022b44; margin: 0 0 1.1rem; letter-spacing: -0.02em;
        }
        .ms-cta-title span { color: #ed8337; }
        .ms-cta-desc {
          font-family: 'Poppins', sans-serif;
          font-size: 0.97rem; line-height: 1.82;
          color: #4a5568; max-width: 540px; margin: 0;
        }
        .ms-cta-right {
          display: flex; flex-direction: column;
          align-items: flex-end; gap: 1rem; flex-shrink: 0;
        }
        .ms-cta-stats {
          display: flex; gap: 1.2rem; margin-bottom: 0.3rem;
          justify-content: flex-end; flex-wrap: wrap;
        }
        .ms-cta-stat {
          display: flex; align-items: center; gap: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 0.78rem; color: #64748b; font-weight: 500;
        }
        .ms-cta-stat-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #ed8337;
          flex-shrink: 0; animation: ms-pulse 2s ease-in-out infinite;
        }
        @keyframes ms-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(1.5); }
        }
        .ms-cta-btn-primary {
          display: inline-flex; align-items: center; justify-content: center;
          gap: 0.55rem; padding: 0.95rem 2.2rem; border-radius: 50px;
          background: #ed8337; color: #fff;
          font-family: 'Poppins', sans-serif; font-size: 0.92rem; font-weight: 600;
          text-decoration: none; border: none; cursor: pointer;
          box-shadow: 0 6px 28px rgba(237,131,55,0.30);
          transition: background 0.22s, transform 0.18s, box-shadow 0.22s;
          white-space: nowrap; min-width: 230px; letter-spacing: 0.01em;
        }
        .ms-cta-btn-primary:hover {
          background: #f5a66b; transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(237,131,55,0.42);
          color: #fff; text-decoration: none;
        }
        .ms-cta-btn-arr {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(2,43,68,0.18);
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 0.85rem; transition: transform 0.22s;
        }
        .ms-cta-btn-primary:hover .ms-cta-btn-arr { transform: translateX(3px); }
        .ms-cta-btn-secondary {
          display: inline-flex; align-items: center; justify-content: center;
          gap: 0.55rem; padding: 0.93rem 2.2rem; border-radius: 50px;
          background: transparent; color: #022b44;
          font-family: 'Poppins', sans-serif; font-size: 0.92rem; font-weight: 600;
          text-decoration: none; border: 1.5px solid rgba(0,65,104,0.25);
          cursor: pointer; white-space: nowrap; min-width: 230px; letter-spacing: 0.01em;
          transition: border-color 0.22s, color 0.22s, background 0.22s, transform 0.18s, box-shadow 0.22s;
        }
        .ms-cta-btn-secondary:hover {
          border-color: #ed8337; color: #ed8337;
          background: rgba(237,131,55,0.05);
          transform: translateY(-3px);
          box-shadow: 0 8px 26px rgba(237,131,55,0.12);
          text-decoration: none;
        }
        .ms-cta-btn-ico { font-size: 1rem; transition: transform 0.22s; }
        .ms-cta-btn-secondary:hover .ms-cta-btn-ico { transform: rotate(-6deg) scale(1.15); }
        @media(max-width: 900px) {
          .ms-cta-inner { flex-direction: column; align-items: flex-start; gap: 2.5rem; padding: 4rem 0; }
          .ms-cta-right { align-items: flex-start; width: 100%; }
          .ms-cta-stats { justify-content: flex-start; }
          .ms-cta-btn-primary, .ms-cta-btn-secondary { min-width: 200px; }
        }
        @media(max-width: 580px) {
          .ms-cta-section { padding: 0 5%; }
          .ms-cta-inner { padding: 3rem 0; gap: 2rem; }
          .ms-cta-btn-primary, .ms-cta-btn-secondary { width: 100%; min-width: unset; }
          .ms-cta-right { width: 100%; }
        }
      `
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "ms-cta-glow-l"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "ms-cta-glow-r"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "ms-cta-line-top"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "ms-cta-inner",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "ms-cta-left",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "partners-header1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "partners-eyebrow",
                                    style: {
                                        marginBottom: '20px',
                                        textAlign: 'start'
                                    },
                                    children: "Case Studies"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                                className: "ms-cta-title",
                                children: [
                                    "Explore ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        children: "Proven Results Through"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}),
                                    " Our Case Studies"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                className: "ms-cta-desc",
                                children: "Discover our projects that demonstrate how strategy and clear execution drive measurable business success.          "
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "ms-cta-right",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                                href: "/contact-us",
                                className: "ms-cta-btn-primary",
                                children: [
                                    "Start Your Growth Journey",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        className: "ms-cta-btn-arr",
                                        children: "→"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                                href: "/portfolio",
                                className: "ms-cta-btn-secondary",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        className: "ms-cta-btn-ico",
                                        children: "\uD83D\uDCCA"
                                    }),
                                    "View Results"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "ms-cta-line-bottom"
            })
        ]
    });
}
const SERVICES = [
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/seo-dm.webp",
            alt: "Search Engine Optimization",
            width: "26",
            height: "26"
        }),
        title: "SEO (Search Engine Optimization)",
        subtitle: "Get Found on Google & Drive Organic Growth",
        desc: "Improve search visibility and attract high-intent customers through strategic SEO.",
        bullets: [
            " On-Page & Technical SEO",
            "Keyword Research & Optimization",
            " Local SEO & GMB Management"
        ],
        link: "/search-engine-optimization/"
    },
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/dm-paid-marketing.webp",
            alt: "Paid Marketing",
            width: "26",
            height: "26"
        }),
        title: "PPC (Paid Marketing)",
        subtitle: "Run ROI-Focused Advertising Campaigns",
        desc: "Generate quality leads faster with targeted performance marketing campaigns.",
        bullets: [
            "Google Search & Display Ads",
            " Performance Max Campaigns",
            "Conversion Optimization"
        ],
        link: "/performance-marketing/"
    },
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/dm-social-media-marketing.webp",
            alt: "Social Media Marketing",
            width: "26",
            height: "26"
        }),
        title: "Social Media Marketing",
        subtitle: "Build Visibility & Audience Engagement",
        desc: "Connect with your audience through creative and conversion-focused campaigns.",
        bullets: [
            " Facebook & Instagram Marketing",
            "LinkedIn Marketing",
            "Creative Content Campaigns"
        ],
        link: "/social-media-marketing/"
    },
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/content-marketing-dm.webp",
            alt: "Content Marketing",
            width: "26",
            height: "26"
        }),
        title: "Content Marketing",
        subtitle: "Create Content That Builds Authority",
        desc: "Strengthen brand credibility through valuable and engaging content.",
        bullets: [
            "SEO Blog Writing",
            "Website & Landing Page Content",
            "Content Strategy Development"
        ],
        link: "/content-marketing/"
    },
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/website-development-dm.webp",
            alt: "Website Development",
            width: "26",
            height: "26"
        }),
        title: "Website Development",
        subtitle: "Build Websites That Convert Visitors",
        desc: "Develop responsive websites designed for user experience and growth.",
        bullets: [
            " Corporate Websites",
            " Ecommerce Development ",
            " Landing Page Design"
        ],
        link: "/website-development/"
    },
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/dm-email-whatsapp-marketing.webp",
            alt: "Graphic Design",
            width: "26",
            height: "26"
        }),
        title: "Graphic Design",
        subtitle: "Create Visuals That Strengthen Brands",
        desc: "Design impactful creatives that communicate your message effectively.",
        bullets: [
            "Branding & Marketing Creatives",
            "Social Media Designs",
            "Brochures & Presentation Design "
        ],
        link: "/graphic-design/"
    }
];
function ServicesSection() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "svc-section",
        style: {
            position: "relative",
            background: "#004168",
            padding: "8rem 6% 7rem",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("style", {
                children: `
        @media(max-width:768px){ .svc-section{ padding:4rem 5% 4rem !important; } }
        @media(max-width:480px){ .svc-section{ padding:3rem 4% 3rem !important; } }
        .svc-bg-r{position:absolute;inset:0;pointer-events:none;z-index:0;background:radial-gradient(ellipse 60% 55% at 15% 30%,rgba(237,131,55,0.07) 0%,transparent 60%),radial-gradient(ellipse 50% 45% at 85% 70%,rgba(56,189,248,0.05) 0%,transparent 55%);}
        .svc-grid{position:absolute;inset:0;pointer-events:none;z-index:0;background-image:linear-gradient(rgba(237,131,55,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(237,131,55,0.03) 1px,transparent 1px);background-size:58px 58px;}
        .svc-orb{position:absolute;border-radius:50%;filter:blur(70px);pointer-events:none;z-index:0;}
        .svc-orb-1{width:500px;height:500px;top:-120px;left:-100px;background:rgba(237,131,55,0.05);animation:sdm-o 14s ease-in-out infinite alternate;}
        .svc-orb-2{width:400px;height:400px;bottom:-80px;right:-60px;background:rgba(56,189,248,0.04);animation:sdm-o 14s 4s ease-in-out infinite alternate;}
        @keyframes sdm-o{from{transform:scale(1);}to{transform:scale(1.2) translate(20px,-20px);}}

        .svc-header{position:relative;z-index:2;text-align:center;margin-bottom:3rem;margin-left:auto;margin-right:auto;}
        .svc-tag{display:inline-flex;align-items:flex-start;gap:.55rem;font-size:.72rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--orange);margin-bottom:1rem;font-family:'DM Sans',sans-serif;}
        .svc-tagline{width:20px;height:2px;background:var(--orange);border-radius:2px;}
        .svc-h2{font-family:'Poppins',sans-serif;font-size:clamp(2rem,3.8vw,2.6rem);font-weight:600;line-height:1.1;color:#fff;margin-bottom:1.1rem;}
        .svc-h2 span{color:var(--orange);}
        .svc-sub{font-size:.97rem;line-height:1.8;color:rgb(255, 255, 255);}

        /* ── Card grid (reference layout) ── */
        .svc-cards{position:relative;z-index:2;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:1.6rem;}

        .svc-card{
          // background:#fff;
          border-radius:16px;
          overflow:hidden;
          display:flex;
          flex-direction:column;
          box-shadow:0 14px 38px rgba(0,0,0,0.22);
          transition:transform .32s ease, box-shadow .32s ease;
        }
        .svc-card:hover{
          transform:translateY(-8px);
          box-shadow:0 22px 50px rgba(0,0,0,0.3),0 0 0 1px rgba(237,131,55,0.35);
        }

        /* Header band — navy, with icon + title + subtitle */
        .svc-card-head{
          // background:linear-gradient(135deg,#0a3652,#022b44);
          padding:1.5rem 1.6rem 1.3rem;
          position:relative;
          overflow:hidden;
        }
        .svc-card-head::after{
          content:'';position:absolute;bottom:0;left:0;right:0;height:1.5px;
          background:linear-gradient(90deg,#ed8337,#f5a66b);
        }
        .svc-card-icon-row{display:flex;align-items:center;gap:.7rem;margin-bottom:.55rem;}
        .svc-icon-ring-sm{
          width:42px;height:42px;border-radius:50%;flex-shrink:0;
          background:rgba(237,131,55,0.16);
          border:1.5px solid rgba(237,131,55,0.4);
          display:flex;align-items:center;justify-content:center;
        }
        .svc-card-title{font-family:'Poppins',sans-serif;font-size:1.04rem;font-weight:700;color:#fff;line-height:1.28;}
        .svc-card-subtitle{font-family:'Poppins',sans-serif;font-size:.78rem;font-weight:400;color:rgba(255,255,255,0.62);line-height:1.4;}

        /* Body — white, intro + checklist + CTA */
        .svc-card-body{padding:1.5rem 1.6rem 1.7rem;display:flex;flex-direction:column;flex:1;}
        .svc-card-desc{font-family:'Poppins',sans-serif;font-size:.85rem;line-height:1.7;color:#fff;margin-bottom:1.1rem;}
        .svc-card-bullets{display:flex;flex-direction:column;gap:.5rem;margin-bottom:1.4rem;}
        .svc-card-bullet{display:flex;align-items:flex-start;gap:.5rem;font-family:'Poppins',sans-serif;font-size:.83rem;font-weight:500;color:#fff;line-height:1.4;}
        .svc-bullet-check{
          width:16px;height:16px;border-radius:50%;flex-shrink:0;margin-top:1px;
          background:rgba(237,131,55,0.12);
          display:flex;align-items:center;justify-content:center;
        }
        .svc-bullet-check svg{width:9px;height:9px;stroke:#ed8337;fill:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;}

        .svc-card-cta{
          display:inline-flex;align-items:center;justify-content:center;gap:.45rem;
          margin-top:auto;
          color:#ed8337;
          font-family:'Poppins',sans-serif;font-size:.82rem;font-weight:600;
          padding:.7rem 1.3rem;border-radius:50px;
          text-decoration:none;width:fit-content;
          transition:background .22s,transform .18s;
        }
        .svc-card-cta:hover{transform:translateY(-2px);text-decoration:none;}
        .svc-card-cta-arr{font-size:.78rem;transition:transform .22s;}
        .svc-card-cta:hover .svc-card-cta-arr{transform:translateX(3px);}

        @media(max-width:900px){.svc-cards{grid-template-columns:1fr 1fr;gap:1.2rem;}}
        @media(max-width:580px){
          .svc-cards{grid-template-columns:1fr;gap:1rem;}
          .svc-h2{font-size:clamp(1.5rem,5vw,2rem);}
        }
      `
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "svc-bg-r"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "svc-grid"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "svc-orb svc-orb-1"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "svc-orb svc-orb-2"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "svc-header",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "partners-header1",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "partners-eyebrow",
                            style: {
                                marginBottom: '20px',
                                textAlign: 'start'
                            },
                            children: "Our Specialized Digital Marketing Services in Coimbatore"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                        className: "svc-h2",
                        children: [
                            "Comprehensive ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                children: "Solutions "
                            }),
                            " Under One Roof "
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "svc-sub",
                        children: "As a leading Digital Marketing Agency in Coimbatore, PCS provides end-to-end digital solutions designed to help businesses attract, engage, and convert customers. Our Digital Marketing Services in Coimbatore are built around measurable growth, improved visibility, and sustainable ROI."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "svc-cards",
                children: SERVICES.map((s, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "svc-card",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "svc-card-head",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "svc-card-icon-row",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "svc-icon-ring-sm",
                                            children: s.icon
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "svc-card-title",
                                                    children: s.title
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "svc-card-subtitle",
                                                    children: s.subtitle
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "svc-card-body",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        className: "svc-card-desc",
                                        children: s.desc
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "svc-card-bullets",
                                        children: s.bullets.map((b, bi)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "svc-card-bullet",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        className: "svc-bullet-check",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                                                                points: "20 6 9 17 4 12"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        children: b
                                                    })
                                                ]
                                            }, bi))
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                                        className: "svc-card-cta",
                                        href: s.link,
                                        children: [
                                            "Learn More ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "svc-card-cta-arr",
                                                children: "→"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, i))
            })
        ]
    });
}
const MILESTONES = [
    {
        pos: "left",
        slot: "top",
        title: "AI-Powered Accuracy",
        subtitle: "Verification you can trust",
        bullets: [
            "Advanced AI ensures precision in every BGV verification check",
            "Detects fraud, impersonation, and anomalies instantly"
        ],
        iconSvg: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: "none",
            stroke: "#fff",
            strokeWidth: "1.7",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("circle", {
                    cx: "11",
                    cy: "11",
                    r: "8"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                    d: "m21 21-4.35-4.35"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                    d: "M11 8v6"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                    d: "M8 11h6"
                })
            ]
        })
    },
    {
        pos: "left",
        slot: "middle",
        title: "Pre-Hire Advantage",
        subtitle: "Verify before they join",
        bullets: [
            "Complete background checks for employment before onboarding",
            "Cut up to 40% in wrong-hire costs significantly"
        ],
        iconSvg: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: "none",
            stroke: "#fff",
            strokeWidth: "1.7",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("rect", {
                    x: "3",
                    y: "3",
                    width: "18",
                    height: "18",
                    rx: "2"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                    d: "M3 9h18"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                    d: "M9 21V9"
                })
            ]
        })
    },
    {
        pos: "left",
        slot: "bottom",
        title: "Compliance First",
        subtitle: "Stay audit-ready always",
        bullets: [
            "ISO-certified, GDPR-ready, and fully encrypted",
            "Ideal for regulated industries and enterprise-grade employment background screening services"
        ],
        iconSvg: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: "none",
            stroke: "#fff",
            strokeWidth: "1.7",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            })
        })
    },
    {
        pos: "right",
        slot: "top",
        title: "Smart Reports",
        subtitle: "Numbers that speak for themselves",
        bullets: [
            "Clear, easy-to-read reports with 100% actionable insights",
            "Supports faster decisions with reliable HR background verification"
        ],
        iconSvg: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: "none",
            stroke: "#fff",
            strokeWidth: "1.7",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                    points: "14 2 14 8 20 8"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                    x1: "16",
                    y1: "13",
                    x2: "8",
                    y2: "13"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                    x1: "16",
                    y1: "17",
                    x2: "8",
                    y2: "17"
                })
            ]
        })
    },
    {
        pos: "right",
        slot: "middle",
        title: "Faster Turnaround",
        subtitle: "Speed that matches hiring",
        bullets: [
            "90% of checks completed in under 48 hours",
            "Instant results for critical verifications"
        ],
        iconSvg: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: "none",
            stroke: "#fff",
            strokeWidth: "1.7",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                    points: "12 6 12 12 16 14"
                })
            ]
        })
    },
    {
        pos: "right",
        slot: "bottom",
        title: "Scalable & Reliable",
        subtitle: "For startups and enterprises alike",
        bullets: [
            "Handles bulk and seasonal hiring effortlessly",
            "Trusted background screening service for high-volume recruitment"
        ],
        iconSvg: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
            viewBox: "0 0 24 24",
            width: "26",
            height: "26",
            fill: "none",
            stroke: "#fff",
            strokeWidth: "1.7",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                    points: "23 6 13.5 15.5 8.5 10.5 1 18"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                    points: "17 6 23 6 23 12"
                })
            ]
        })
    }
];
const benefits = [
    {
        num: "01",
        title: "Experience That Drives Outcomes",
        desc: "Years of proven expertise in digital marketing  , delivering strategies that go beyond theory to create measurable business growth and long-term impact.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/experience-benifits.webp",
            alt: "Experience",
            width: "30",
            height: "30"
        })
    },
    {
        num: "02",
        title: "Results-Driven Not Report-Driven",
        desc: "Our focus is on real ROI, not vanity metrics. Every campaign is optimized to generate conversions, revenue, and sustainable growth.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/results-driven-benifits.webp",
            alt: "Results Driven",
            width: "30",
            height: "30"
        })
    },
    {
        num: "03",
        title: "Innovation That Reinvents The Way You Work",
        desc: "We blend creativity with modern tech to deliver digital marketing solutions that streamline processes , and transform how your business operates.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/innovation-benifits.webp",
            alt: "Innovation",
            width: "30",
            height: "30"
        })
    },
    {
        num: "04",
        title: "Support that's Always On, Always Human",
        desc: "Round-the-clock assistance with a personal touch—our team ensures you’re never left waiting for answers or solutions.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/support-benifits.webp",
            alt: "Support",
            width: "30",
            height: "30"
        })
    },
    {
        num: "05",
        title: "Customized Strategies for Every Business",
        desc: "We don’t believe in one-size-fits-all. Every campaign is tailored to your brand, audience, and goals for maximum impact.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/customized-benifits.webp",
            alt: "Customized Strategies",
            width: "30",
            height: "30"
        })
    },
    {
        num: "06",
        title: "Transparent Process & Measurable Impact",
        desc: "You always know where your budget goes and how your digital marketing campaigns perform, supported by detailed analytics and full visibility at every stage.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/transparent-benifits.webp",
            alt: "Transparent Process",
            width: "30",
            height: "30"
        })
    }
];
function BenefitsSection() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        className: "tl-section",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "tl-inner",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "tl-header",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "partners-header1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "partners-eyebrow",
                                style: {
                                    marginBottom: '20px',
                                    textAlign: 'start'
                                },
                                children: "Our Uniqueness "
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                            className: "tl-heading",
                            children: [
                                "How we ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "differ from "
                                }),
                                " others"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "tl-subtext",
                            children: "From SEO to paid ads, we deliver result-driven digital marketing strategies designed to grow your business in Coimbatore and beyond."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "bento-grid",
                    children: benefits.map((b, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: `bn-cell bn-cell-${i + 1}`,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "bn-icon",
                                    style: {
                                        width: "44px",
                                        height: "44px",
                                        borderRadius: "12px",
                                        background: "rgba(237,131,55,0.1)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                        marginBottom: ".2rem"
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        },
                                        children: b.icon
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "bn-num",
                                    children: b.num
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "bn-title",
                                    children: b.title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "bn-desc",
                                    children: b.desc
                                })
                            ]
                        }, i))
                })
            ]
        })
    });
}
/* ═══════════════════════════════════════════════════
   UNIQUENESS CTA — matches reference image layout
   (heading + subtext + 3 trust pills + 2 buttons)
   themed with site colors: --navy:#004168  --orange:#ed8337
═══════════════════════════════════════════════════ */ function UniquenessCTA() {
    const [showPopup, setShowPopup] = (0,react__rspack_import_1.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            showPopup && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                onClick: (e)=>{
                    if (e.target === e.currentTarget) setShowPopup(false);
                },
                style: {
                    position: "fixed",
                    inset: 0,
                    zIndex: 9999,
                    background: "rgba(2,43,68,0.75)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1rem"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    style: {
                        background: "#fff",
                        borderRadius: 20,
                        padding: "2.2rem 2.4rem 2.4rem",
                        width: "100%",
                        maxWidth: 480,
                        position: "relative",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
                        maxHeight: "90vh",
                        overflowY: "auto"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
                            onClick: ()=>setShowPopup(false),
                            style: {
                                position: "absolute",
                                top: 14,
                                right: 16,
                                background: "none",
                                border: "none",
                                fontSize: "1.4rem",
                                cursor: "pointer",
                                color: "#999",
                                lineHeight: 1,
                                padding: "4px 8px",
                                borderRadius: "50%"
                            },
                            children: "✕"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                            className: "hero-form-title",
                            children: [
                                "Your Growth, ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "Our Mission."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "hero-form-sub",
                            children: "Fill in your details — we'll get back within 24 hours."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(HeroContactForm, {})
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                className: "uniq-cta-section",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("style", {
                        children: `
          .uniq-cta-section {
            background: #ffffff;
            padding: 1rem 4% 6rem;
            display: flex;
            justify-content: center;
          }
          .uniq-cta-card {
            position: relative;
            max-width: 1100px;
            width: 100%;
            background: #fff;
            border-radius: 28px;
            padding: 3.4rem 3rem 3.2rem;
            box-shadow: 0 18px 60px rgba(0,65,104,0.10);
            border: 1px solid rgba(0,65,104,0.06);
            overflow: hidden;
            text-align: center;
          }
          .uniq-cta-glow-tr {
            position: absolute; top: -90px; right: -90px;
            width: 280px; height: 280px; border-radius: 50%;
            background: radial-gradient(circle, rgba(237,131,55,0.16) 0%, transparent 70%);
            pointer-events: none;
          }
          .uniq-cta-glow-bl {
            position: absolute; bottom: -100px; left: -100px;
            width: 260px; height: 260px; border-radius: 50%;
            background: radial-gradient(circle, rgba(0,65,104,0.06) 0%, transparent 70%);
            pointer-events: none;
          }
          .uniq-cta-heading {
            position: relative; z-index: 2;
            font-family: 'Poppins', sans-serif;
            font-size: clamp(1.6rem, 3vw, 2.3rem);
            font-weight: 700; color: #0d1f2d; line-height: 1.3;
            max-width: 720px; margin: 0 auto 1rem;
          }
          .uniq-cta-heading span { color: #ed8337; }
          .uniq-cta-sub {
            position: relative; z-index: 2;
            font-family: 'Poppins', sans-serif;
            font-size: .94rem; line-height: 1.78; color: #5b6b7a;
            max-width: 620px; margin: 0 auto 2.3rem;
          }
          .uniq-cta-pills {
            position: relative; z-index: 2;
            display: flex; justify-content: center; flex-wrap: wrap;
            gap: 1rem; margin-bottom: 2.5rem;
          }
          .uniq-cta-pill {
            display: flex; align-items: center; gap: .7rem;
            background: #fff; border: 1px solid rgba(0,65,104,0.08);
            border-radius: 50px; padding: .65rem 1.3rem .65rem .55rem;
            box-shadow: 0 6px 18px rgba(0,65,104,0.06);
            transition: transform .25s ease, box-shadow .25s ease;
          }
          .uniq-cta-pill:hover { transform: translateY(-3px); box-shadow: 0 12px 26px rgba(237,131,55,0.16); }
          .uniq-cta-pill-icon {
            width: 36px; height: 36px; border-radius: 50%;
            background: #ed8337; display: flex; align-items: center; justify-content: center;
          }
          .uniq-cta-pill-icon svg { width: 17px; height: 17px; stroke: #fff; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
          .uniq-cta-pill-text { font-family: 'Poppins', sans-serif; font-size: .85rem; font-weight: 600; color: #0d1f2d; white-space: nowrap; }
          .uniq-cta-actions {
            position: relative; z-index: 2;
            display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;
          }
          .uniq-cta-btn-primary {
            display: inline-flex; align-items: center; gap: .55rem;
            background: #ed8337; color: #fff; border: none; border-radius: 50px;
            padding: .95rem 2rem;
            font-family: 'Poppins', sans-serif; font-size: .92rem; font-weight: 600;
            text-decoration: none; cursor: pointer;
            box-shadow: 0 8px 26px rgba(237,131,55,0.32);
            transition: background .22s ease, transform .18s ease, box-shadow .22s ease;
          }
          .uniq-cta-btn-primary:hover {
            background: #f5a66b; transform: translateY(-2px);
            box-shadow: 0 12px 32px rgba(237,131,55,0.4);
            color: #fff; text-decoration: none;
          }
          .uniq-cta-btn-secondary {
            display: inline-flex; align-items: center; gap: .6rem;
            background: #004168; color: #fff; border: none; border-radius: 50px;
            padding: .95rem 2rem;
            font-family: 'Poppins', sans-serif; font-size: .92rem; font-weight: 600;
            text-decoration: none; cursor: pointer;
            transition: background .22s ease, transform .18s ease;
          }
          .uniq-cta-btn-secondary:hover { background: #0a3652; transform: translateY(-2px); color: #fff; text-decoration: none; }
          @media(max-width: 640px) {
            .uniq-cta-section { padding: 0 5% 4rem; }
            .uniq-cta-card { padding: 2.3rem 1.4rem 2.5rem; border-radius: 20px; }
            .uniq-cta-btn-primary, .uniq-cta-btn-secondary { width: 100%; justify-content: center; }
            .uniq-cta-actions { flex-direction: column; }
          }
        `
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "uniq-cta-card",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "uniq-cta-glow-tr"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "uniq-cta-glow-bl"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                                className: "uniq-cta-heading",
                                children: [
                                    "Ready to Work with a Leading ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        children: "Digital Marketing Company"
                                    }),
                                    " in Coimbatore?"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                className: "uniq-cta-sub",
                                children: "Whether your goal is lead generation, brand visibility, SEO growth, or revenue expansion, We provide customized Digital Marketing Services designed to deliver measurable business results."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "uniq-cta-pills",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "uniq-cta-pill",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "uniq-cta-pill-icon",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                                                        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "uniq-cta-pill-text",
                                                children: "Proven Industry Expertise"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "uniq-cta-pill",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "uniq-cta-pill-icon",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polygon", {
                                                        points: "12 2 15 8.5 22 9.3 17 14 18.2 21 12 17.6 5.8 21 7 14 2 9.3 9 8.5 12 2"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "uniq-cta-pill-text",
                                                children: "Results-Driven Strategies"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "uniq-cta-pill",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "uniq-cta-pill-icon",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
                                                    viewBox: "0 0 24 24",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                                                            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                                                            points: "9 12 11 14 15 10"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "uniq-cta-pill-text",
                                                children: "Transparent Performance Tracking"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "uniq-cta-actions",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("button", {
                                        onClick: ()=>setShowPopup(true),
                                        className: "uniq-cta-btn-primary",
                                        children: [
                                            "Request a Free Proposal ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                children: "→"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                                        href: "tel:+919677444048",
                                        className: "uniq-cta-btn-secondary",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "#fff",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                                                    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 4.36 19.79 19.79 0 0 1 7.43 1.3 2 2 0 0 1 9.43 3.3v3a2 2 0 0 1-2 1.72 12.05 12.05 0 0 0-.7 2.81 2 2 0 0 1 .45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                                                })
                                            }),
                                            "Schedule a Call"
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
// ─── Process ─────────────────────────────────────────────────────────────────
function ProcessStep({ step, index }) {
    const [ref, visible] = useInView(0.1);
    const isEven = index % 2 === 1;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        ref: ref,
        className: `ppc-tp-step${visible ? " tp-vis" : ""}`,
        children: isEven ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "ppc-tp-text-side",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ppc-tp-desc",
                            children: step.desc
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "ppc-tp-bullets",
                            children: step.bullets.map((b)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    className: "ppc-tp-bullet",
                                    children: b
                                }, b))
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "ppc-tp-num-side",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "ppc-tp-bg-num",
                            children: step.step
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "ppc-tp-step-index",
                            children: [
                                "Step — ",
                                step.step
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "ppc-tp-step-title",
                            children: step.title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "ppc-tp-phase",
                            children: step.phase
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "ppc-tp-num-side",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "ppc-tp-bg-num",
                            children: step.step
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "ppc-tp-step-index",
                            children: [
                                "Step — ",
                                step.step
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "ppc-tp-step-title",
                            children: step.title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "ppc-tp-phase",
                            children: step.phase
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "ppc-tp-text-side",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ppc-tp-desc",
                            children: step.desc
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "ppc-tp-bullets",
                            children: step.bullets.map((b)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    className: "ppc-tp-bullet",
                                    children: b
                                }, b))
                        })
                    ]
                })
            ]
        })
    });
}
function Process() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "ppc-tp-section",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "ppc-tp-cross"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "ppc-tp-header",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "partners-header1",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "partners-eyebrow",
                            style: {
                                marginBottom: '20px',
                                textAlign: 'center'
                            },
                            children: "From Strategy to Success "
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                        className: "ppc-tp-h2",
                        children: [
                            "Our ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("em", {
                                children: " Work Process"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "ppc-tp-sub",
                        children: "Our streamlined process combines research, planning, execution, and optimization to deliver measurable digital marketing results and business growth.         "
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "ppc-tp-body",
                children: PROCESS_STEPS.map((step, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ProcessStep, {
                        step: step,
                        index: i
                    }, step.step))
            })
        ]
    });
}
// ─── How We Work Data ────────────────────────────────────────────────────────
const HOW_WE_WORK_DM = [
    {
        img: "/img/digital-marketing/textile-dm.webp",
        title: "Textile ",
        desc: "We help textile manufacturers and apparel brands grow through digital marketing . Our industry-focused approach boosts visibility, strengthens branding, and generates high-quality leads.",
        link: "/textile"
    },
    {
        img: "/img/digital-marketing/hospitals-dm.webp",
        title: "Healthcare",
        desc: "We support hospitals and clinics with effective healthcare digital marketing, local SEO, Google Ads . PCS ensures better patient engagement through targeted campaigns and optimized digital platforms.",
        link: "/healthcare"
    },
    {
        img: "/img/digital-marketing/construction-dm.webp",
        title: "Construction",
        desc: "PCS elevates construction and real estate brands with lead generation, PPC, landing page optimization, and hyperlocal marketing. Our campaigns boost project visibility and attract buyers in competitive markets.",
        link: "/construction"
    },
    {
        img: "/img/digital-marketing/manufacturing-dm.webp",
        title: "Manufacturing",
        desc: "We empower manufacturing companies through B2B SEO, email marketing  and performance marketing. PCS helps industrial brands build authority, increase search presence, and convert business enquiries.",
        link: "/manufacturing"
    },
    {
        img: "/img/digital-marketing/retail-dm.webp",
        title: "Retail & E-Commerce",
        desc: "As one of the top digital marketing companies in Coimbatore, we deliver e-commerce SEO, shopping ads, and remarketing campaigns that increase conversions and maximize revenue. ",
        link: "/retail-ecommerce"
    },
    {
        img: "/img/digital-marketing/tourism-dm.webp",
        title: "Tourism & Hospitality ",
        desc: "PCS helps hotels, resorts, and travel businesses grow with travel digital marketing, review management, social media branding, and location-based marketing that boost bookings and online visibility.",
        link: "/tourism-and-hospitality"
    },
    {
        img: "/img/digital-marketing/it-service-dm.webp",
        title: "IT / IT Service",
        desc: "PCS helps IT companies, SaaS businesses, and technology service providers accelerate growth through B2B digital marketing, SEO, content marketing, LinkedIn campaigns, and lead generation strategies.",
        link: "/it-or-it-services"
    },
    {
        img: "/img/digital-marketing/bankin-finace-dm.webp",
        title: "Banking, Financial & Insurance",
        desc: "PCS helps banks, insurance providers, and fintech companies grow online through SEO, performance marketing, lead generation, and content strategies that attract qualified customers. ",
        link: "/banking-financial-and-insurance-services"
    }
];
// ─── How We Work ─────────────────────────────────────────────────────────────
function HowWeWork() {
    const trackRef = (0,react__rspack_import_1.useRef)(null);
    const indexRef = (0,react__rspack_import_1.useRef)(0);
    const isTransitioning = (0,react__rspack_import_1.useRef)(false);
    const timerRef = (0,react__rspack_import_1.useRef)(null);
    const [dotIndex, setDotIndex] = (0,react__rspack_import_1.useState)(0);
    const [paused, setPaused] = (0,react__rspack_import_1.useState)(false);
    const total = HOW_WE_WORK_DM.length;
    const CARDS_VISIBLE = 3;
    const getCardWidth = ()=>{
        if (!trackRef.current) return 0;
        const wrap = trackRef.current.parentElement;
        return wrap.offsetWidth / CARDS_VISIBLE;
    };
    const slideTo = (idx, animate = true)=>{
        const track = trackRef.current;
        if (!track) return;
        const w = getCardWidth();
        track.style.transition = animate ? 'transform 0.55s cubic-bezier(0.22,1,0.36,1)' : 'none';
        track.style.transform = `translateX(${-idx * w}px)`;
        indexRef.current = idx;
        setDotIndex(idx % total);
    };
    const next = ()=>{
        if (isTransitioning.current) return;
        isTransitioning.current = true;
        const nextIdx = indexRef.current + 1;
        slideTo(nextIdx);
        setTimeout(()=>{
            if (indexRef.current >= total) {
                slideTo(indexRef.current - total, false);
            }
            isTransitioning.current = false;
        }, 560);
    };
    const prev = ()=>{
        if (isTransitioning.current) return;
        isTransitioning.current = true;
        const prevIdx = indexRef.current - 1;
        if (prevIdx < 0) {
            slideTo(total + prevIdx + 1, false);
            requestAnimationFrame(()=>requestAnimationFrame(()=>{
                    slideTo(total + prevIdx);
                    setTimeout(()=>{
                        isTransitioning.current = false;
                    }, 560);
                }));
        } else {
            slideTo(prevIdx);
            setTimeout(()=>{
                isTransitioning.current = false;
            }, 560);
        }
    };
    const goTo = (idx)=>{
        setPaused(true);
        slideTo(idx);
        setTimeout(()=>{
            isTransitioning.current = false;
        }, 560);
    };
    (0,react__rspack_import_1.useEffect)(()=>{
        const onResize = ()=>slideTo(indexRef.current, false);
        window.addEventListener('resize', onResize);
        return ()=>window.removeEventListener('resize', onResize);
    }, []);
    (0,react__rspack_import_1.useEffect)(()=>{
        slideTo(0, false);
    }, []);
    (0,react__rspack_import_1.useEffect)(()=>{
        if (paused) {
            clearInterval(timerRef.current);
            return;
        }
        timerRef.current = setInterval(next, 3000);
        return ()=>clearInterval(timerRef.current);
    }, [
        paused
    ]);
    const displayCards = [
        ...HOW_WE_WORK_DM,
        ...HOW_WE_WORK_DM.slice(0, CARDS_VISIBLE)
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        style: {
            position: 'relative',
            background: '#004168',
            padding: '5rem 0 4rem',
            overflow: 'hidden',
            fontFamily: "'Poppins',sans-serif"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("style", {
                children: `
        .dm-hww-dot-grid{position:absolute;inset:0;pointer-events:none;z-index:0;background-image:radial-gradient(rgba(237,131,55,0.10) 1px,transparent 1px);background-size:36px 36px;opacity:0.25;animation:dm-dots-drift 28s linear infinite;}
        @keyframes dm-dots-drift{to{background-position:36px 36px;}}
        .dm-hww-glow{position:absolute;border-radius:50%;pointer-events:none;z-index:0;filter:blur(110px);}
        .dm-hww-glow-1{width:600px;height:600px;top:-180px;left:-160px;background:rgba(237,131,55,0.07);animation:dm-orb 10s ease-in-out infinite;}
        .dm-hww-glow-2{width:500px;height:500px;bottom:-160px;right:-120px;background:rgba(56,189,248,0.05);animation:dm-orb 14s ease-in-out infinite reverse;}
        @keyframes dm-orb{0%,100%{transform:translateY(0);}50%{transform:translateY(-24px);}}
        .dm-hww-header{position:relative;z-index:2;text-align:center;padding:0 6% 3.5rem;}
        .dm-hww-h2{font-family:'Poppins',sans-serif;font-size:clamp(2rem,3.5vw,2.68rem);font-weight:600;line-height:1.12;letter-spacing:-0.02em;color:#fff;margin:0;}
        .dm-hww-h2 span{color:#ed8337;}
        .dm-hww-h2 em{font-style:italic;}
        .dm-carousel-outer{position:relative;z-index:2;padding:0 4rem 1rem;}
        .dm-track-window{overflow:hidden;}
        .dm-track{display:flex;will-change:transform;}

        /* ── Image-based card styles ── */
        .dm-card-wrap{flex:0 0 calc(100% / 3);padding:0 12px;box-sizing:border-box;}
        .dm-card{background:#fff;border-radius:16px;overflow:hidden;height:100%;display:flex;flex-direction:column;box-shadow:0 4px 24px rgba(0,0,0,0.18);transition:transform .3s,box-shadow .3s;cursor:default;}
        .dm-card:hover{transform:translateY(-6px);box-shadow:0 12px 40px rgba(0,0,0,0.28);}
        .dm-card-img{width:100%;height:220px;object-fit:cover;display:block;flex-shrink:0;}
        .dm-card-body{padding:1.6rem 1.6rem 1.4rem;display:flex;flex-direction:column;flex:1;}
        .dm-card-title{font-family:'Poppins',sans-serif;font-size:1.08rem;font-weight:700;color:#0d1f2d;margin-bottom:0.65rem;line-height:1.3;text-align:center;}
        .dm-card-desc{font-family:'Poppins',sans-serif;font-size:0.85rem;line-height:1.74;color:#4a5568;margin-bottom:1.2rem;text-align:center;flex:1;}
        .dm-card-arrow-wrap{display:flex;justify-content:center;margin-top:auto;}
        .dm-card-arrow{width:44px;height:44px;border-radius:50%;background:#ed8337;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .25s,transform .25s;text-decoration:none;}
        .dm-card-arrow:hover{background:#d9711e;transform:scale(1.08);}
        .dm-card-arrow svg{width:18px;height:18px;fill:none;stroke:#fff;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;}

        .dm-dots{display:flex;justify-content:center;gap:8px;margin-top:2.2rem;position:relative;z-index:2;}
        .dm-dot{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,0.25);border:none;cursor:pointer;padding:0;transition:background .3s,width .3s,border-radius .3s;}
        .dm-dot-active{background:#ed8337 !important;width:24px !important;border-radius:4px !important;}

        .faq-head h2 {color: #000;}
        .faq-toggle-icon{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;font-size:1.2rem;line-height:1;flex-shrink:0;}
        @media(max-width:900px){.dm-card-wrap{flex:0 0 50%;}}
        @media(max-width:580px){.dm-card-wrap{flex:0 0 85%;}.dm-hww-header{padding:0 5% 2.5rem;}}
      `
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "dm-hww-dot-grid"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "dm-hww-glow dm-hww-glow-1"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "dm-hww-glow dm-hww-glow-2"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "dm-hww-header",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "partners-header1",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "partners-eyebrow",
                            style: {
                                marginBottom: '20px',
                                textAlign: 'center'
                            },
                            children: "Industries We Serve"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                        className: "dm-hww-h2",
                        children: [
                            "Industries We Serve Through  ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("em", {
                                    children: "Digital Marketing Services "
                                })
                            }),
                            " in Coimbatore "
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        style: {
                            margin: '30px 0'
                        },
                        children: "As a trusted Digital Marketing Company in Coimbatore, we create customized strategies for businesses across diverse industries. Our industry-specific expertise helps us understand customer behavior, market trends, and growth opportunities more effectively."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "dm-carousel-outer",
                onMouseEnter: ()=>setPaused(true),
                onMouseLeave: ()=>setPaused(false),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "dm-track-window",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "dm-track",
                            ref: trackRef,
                            children: displayCards.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "dm-card-wrap",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "dm-card",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                className: "dm-card-img",
                                                src: item.img,
                                                alt: item.title,
                                                loading: "lazy",
                                                onError: (e)=>{
                                                    e.currentTarget.style.background = '#0a3652';
                                                    e.currentTarget.style.minHeight = '220px';
                                                }
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "dm-card-body",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "dm-card-title",
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "dm-card-desc",
                                                        children: item.desc
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "dm-card-arrow-wrap",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                            className: "dm-card-arrow",
                                                            href: item.link,
                                                            "aria-label": `Learn more about ${item.title}`,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
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
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, i))
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "dm-dots",
                        children: HOW_WE_WORK_DM.map((_, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
                                className: `dm-dot${dotIndex === i ? " dm-dot-active" : ""}`,
                                onClick: ()=>goTo(i)
                            }, i))
                    })
                ]
            })
        ]
    });
}
const faqData = [
    {
        q: "What does a Digital Marketing Company in Coimbatore do?",
        a: "A Digital Marketing Company in Coimbatore helps businesses grow online through services like SEO, Google Ads, social media marketing, content marketing, and website optimization. The goal is to increase visibility, generate leads, and improve sales."
    },
    {
        q: "Why should I choose a Digital Marketing Agency in Coimbatore for my business?",
        a: "Choosing a Digital Marketing Agency in Coimbatore ensures local market understanding, targeted strategies, and cost-effective campaigns. Agencies like PCS focus on measurable results such as leads, conversions, and ROI."
    },
    {
        q: "What are the benefits of Digital Marketing Services in Coimbatore?",
        a: "Digital Marketing Services in Coimbatore help businesses improve online presence, attract targeted customers, increase website traffic, and generate high-quality leads through SEO, PPC, and social media strategies."
    },
    {
        q: "How long does it take to see results from digital marketing?",
        a: "Results depend on strategy and competition. SEO may take 3–6 months, while paid advertising campaigns can generate immediate leads. A combined digital strategy delivers both short-term and long-term growth."
    },
    {
        q: "Do you provide customized digital marketing strategies?",
        a: "Yes, every business is unique. A professional Digital Marketing Company in Coimbatore creates customized strategies based on your industry, target audience, competition, and business goals to ensure better performance and ROI."
    },
    {
        q: "Why is PCS considered the best digital marketing company in Coimbatore?",
        a: "PCS is trusted as one of the best digital marketing companies in Coimbatore due to its result-driven approach, strong lead generation strategies, transparent reporting, and focus on measurable business growth."
    }
];
// ─── FAQ ─────────────────────────────────────────────────────────────────────
function FAQSection() {
    const [active, setActive] = (0,react__rspack_import_1.useState)(null);
    const toggle = (index)=>setActive(active === index ? null : index);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "faq-section",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "partners-header2",
                style: {
                    textAlign: 'center',
                    marginTop: '20px'
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "partners-eyebrow",
                    children: "Frequently Asked Questions"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "faq-head",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                            children: [
                                "Questions That Could ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "Hold You Back"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "faq-wrapper",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "faq-col",
                                children: faqData.slice(0, 3).map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "faq-item",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "faq-question",
                                                onClick: ()=>toggle(i),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        children: item.q
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        className: "faq-toggle-icon",
                                                        children: active === i ? "−" : "+"
                                                    })
                                                ]
                                            }),
                                            active === i && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "faq-answer ppc-faq-answer",
                                                children: item.a
                                            })
                                        ]
                                    }, i))
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "faq-col",
                                children: faqData.slice(3, 6).map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "faq-item",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "faq-question",
                                                onClick: ()=>toggle(i + 3),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        children: item.q
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        className: "faq-toggle-icon",
                                                        children: active === i + 3 ? "−" : "+"
                                                    })
                                                ]
                                            }),
                                            active === i + 3 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "faq-answer ppc-faq-answer",
                                                children: item.a
                                            })
                                        ]
                                    }, i + 3))
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function DigitalMarketingLandingPage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_2/* ["default"] */.A, {
        title: "No.1 Digital Marketing Company in Coimbatore | ROI- Driven  ",
        description: "Top Digital Marketing Company in Coimbatore providing SEO services, paid ads, social media marketing, and web development solutions for business growth.       ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(SEOHead, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(FontLoader, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(HeroSection, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(WhoWeAre, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BusinessInfographic, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Partners, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(MilestonesCTA, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ServicesSection, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BenefitsSection, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(UniquenessCTA, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(HowWeWork, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Process, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(FAQSection, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_HomePage_CTA__rspack_import_3/* ["default"] */.A, {})
        ]
    });
}


},

};
;