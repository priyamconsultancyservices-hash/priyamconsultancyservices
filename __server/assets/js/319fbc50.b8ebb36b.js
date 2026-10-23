"use strict";
exports.ids = ["2517"];
exports.modules = {
3177(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogSection)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);

// BlogSection.jsx

const API_URL = "https://www.priyamconsultancy.com/blog/wp-json/wp/v2/posts?_embed&per_page=3";
function BlogSection() {
    const [posts, setPosts] = (0,react__rspack_import_1.useState)([]);
    const [loading, setLoading] = (0,react__rspack_import_1.useState)(true);
    const [error, setError] = (0,react__rspack_import_1.useState)(null);
    (0,react__rspack_import_1.useEffect)(()=>{
        fetch(API_URL).then((r)=>{
            if (!r.ok) throw new Error(`HTTP ${r.status}`);
            return r.json();
        }).then((data)=>{
            const parsed = data.map((post)=>{
                const thumbnail = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
                const cleanText = (post.excerpt?.rendered || "").replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ").trim();
                const excerpt = cleanText.length > 200 ? cleanText.slice(0, 200) + "..." : cleanText;
                const cleanTitle = (post.title?.rendered || "Untitled").replace(/&[^;]+;/g, " ").trim();
                return {
                    guid: post.id,
                    title: cleanTitle,
                    link: post.link,
                    thumbnail,
                    excerpt
                };
            });
            setPosts(parsed);
            setLoading(false);
        }).catch((err)=>{
            setError(err.message);
            setLoading(false);
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        style: {
            width: "100%",
            padding: "4rem 1rem",
            boxSizing: "border-box",
            background: "#fff"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                style: {
                    maxWidth: "1200px",
                    margin: "0 auto"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        style: {
                            textAlign: "center",
                            marginBottom: "2.5rem"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                style: {
                                    fontSize: "2rem",
                                    fontWeight: 700,
                                    margin: "0 0 0.5rem",
                                    color: "#111"
                                },
                                children: "Blogs"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                style: {
                                    color: "#666",
                                    margin: 0,
                                    fontSize: "1rem"
                                },
                                children: "Stay updated with the latest in digital marketing, growth strategies, and industry trends."
                            })
                        ]
                    }),
                    loading && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        style: {
                            textAlign: "center",
                            color: "#888"
                        },
                        children: "Loading..."
                    }),
                    error && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                        style: {
                            textAlign: "center",
                            color: "red"
                        },
                        children: [
                            "Error: ",
                            error
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "1.5rem"
                        },
                        className: "blog-grid",
                        children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                                href: post.link,
                                target: "_blank",
                                rel: "noreferrer",
                                style: {
                                    border: "1px solid #e5e7eb",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    background: "#fff",
                                    display: "flex",
                                    flexDirection: "column",
                                    textDecoration: "none",
                                    color: "inherit",
                                    transition: "box-shadow 0.2s, transform 0.2s",
                                    cursor: "pointer"
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
                                    e.currentTarget.style.transform = "translateY(-3px)";
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.boxShadow = "none";
                                    e.currentTarget.style.transform = "translateY(0)";
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        style: {
                                            width: "100%",
                                            aspectRatio: "16/9",
                                            overflow: "hidden",
                                            background: "#1a2744"
                                        },
                                        children: post.thumbnail ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                            src: post.thumbnail,
                                            alt: post.title,
                                            loading: "lazy",
                                            style: {
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                display: "block"
                                            }
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            style: {
                                                width: "100%",
                                                height: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#fff",
                                                opacity: 0.4,
                                                fontSize: "0.8rem"
                                            },
                                            children: "No image"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        style: {
                                            padding: "1.25rem",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "0.75rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                style: {
                                                    fontWeight: 600,
                                                    fontSize: "1.1rem",
                                                    lineHeight: 1.6,
                                                    margin: 0,
                                                    color: "#111"
                                                },
                                                children: post.title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                style: {
                                                    color: "#444",
                                                    fontSize: "0.875rem",
                                                    lineHeight: 1.6,
                                                    flex: 1,
                                                    margin: 0
                                                },
                                                children: post.excerpt
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                style: {
                                                    display: "inline-block",
                                                    background: "#E87C30",
                                                    color: "#fff",
                                                    padding: "0.6rem 1.5rem",
                                                    borderRadius: "999px",
                                                    fontWeight: 500,
                                                    alignSelf: "flex-start",
                                                    marginTop: "0.5rem",
                                                    fontSize: "0.875rem"
                                                },
                                                children: "Read More"
                                            })
                                        ]
                                    })
                                ]
                            }, post.guid))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("style", {
                dangerouslySetInnerHTML: {
                    __html: `
        @media (max-width: 1024px) { .blog-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px)  { .blog-grid { grid-template-columns: 1fr !important; } }
      `
                }
            })
        ]
    });
}


},
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
7833(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (HRConsultancy)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _emailjs_browser__rspack_import_2 = __webpack_require__(58);
/* import */ var _components_BlogSection__rspack_import_3 = __webpack_require__(3177);
/* import */ var _components_HomePage_CTA__rspack_import_4 = __webpack_require__(9393);
/* import */ var _theme_Layout__rspack_import_5 = __webpack_require__(8328);
/* import */ var _docusaurus_Head__rspack_import_6 = __webpack_require__(3572);








const banner = "/img/hr-strategy.webp";
const pageUrl = "https://www.priyamconsultancy.com/hr-strategy-and-policy-development/";
const imageUrl = "https://www.priyamconsultancy.com/img/hr-strategy.png";
const schemaData = [
    // Breadcrumb List Schema
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
                    "@id": "https://www.priyamconsultancy.com/hr-strategy-and-policy-development/",
                    "name": "HR Strategy and Policy Development"
                }
            }
        ]
    },
    // Organization Schema
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
    // Service Page Schema
    {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.priyamconsultancy.com/hr-strategy-and-policy-development/#service",
        "name": "HR Strategy and Policy Development",
        "serviceType": "HR Strategy and Policy Development Services",
        "url": "https://www.priyamconsultancy.com/hr-strategy-and-policy-development/",
        "description": "Priyam Consultancy provides professional HR strategy and policy development services including HR framework creation, employee policy development, workforce planning, organizational strategy, compliance policies and human resource management solutions for businesses across India.",
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
            "@type": "Country",
            "name": "India"
        }
    },
    // Product Schema
    {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "HR Strategy & Policy Development Services in Coimbatore",
        "image": [
            "https://www.priyamconsultancy.com/img/hr-strategy.png"
        ],
        "description": "Best HR strategy and policy development services in Coimbatore offering HR framework creation, employee policy development, workforce planning, compliance policies and organizational HR solutions for businesses.",
        "brand": {
            "@type": "Brand",
            "name": "Priyam Consultancy Services"
        },
        "review": {
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.9",
                "bestRating": "5",
                "worstRating": "1"
            },
            "author": {
                "@type": "Person",
                "name": "Admin"
            }
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "4916"
        },
        "offers": {
            "@type": "Offer",
            "url": "https://www.priyamconsultancy.com/hr-strategy-and-policy-development/",
            "priceCurrency": "INR",
            "price": "0",
            "priceValidUntil": "2026-12-31",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "name": "Priyam Consultancy Services"
            }
        }
    },
    // FAQ Schema
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What Does HR Strategy and Policy Development Include?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It includes full scope planning, drafting, implementation, and consultation around your HR strategy, HR policy development, and overall human resource management framework."
                }
            },
            {
                "@type": "Question",
                "name": "Can PCS Help Us Develop HR Policies From Scratch?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We specialize in development of HR policies that are tailored to your size, industry and growth stage."
                }
            },
            {
                "@type": "Question",
                "name": "How Frequently Should HR Policies Be Reviewed And Updated?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We recommend reviewing HR policies annually and/or when there are significant regulatory or organizational changes."
                }
            },
            {
                "@type": "Question",
                "name": "Can You Support Policy Development For Remote Or Geographically Dispersed Teams?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We develop HR strategies and policies for hybrid, remote, and in-office workforces operating in multiple locations."
                }
            },
            {
                "@type": "Question",
                "name": "What Makes PCS A Trusted Partner For HR Strategy And Development Policy?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We integrate compliance, business goals and employee needs into our approach. With extensive knowledge around human resource management, we are able to make HR policy development and HR strategy development practically and future-ready."
                }
            },
            {
                "@type": "Question",
                "name": "Can PCS Support Leadership Hiring And Organizational Design?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Extended HR advisory includes org structures, succession planning, and leadership hiring strategies as part of a bundle of human resource policies and strategies."
                }
            }
        ]
    }
];
// ── DATA ──────────────────────────────────────────────────────────
const services = [
    {
        id: "01",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icons/payroll.png",
            alt: "Payroll",
            style: {
                width: "28px",
                height: "28px"
            }
        }),
        color: "#FF6B2B",
        title: "Payroll Management",
        tagline: "Accurate. Timely. Compliant.",
        desc: "Timely, accurate, and fully compliant — we simplify your payroll so you're never exposed to the complexities of salary processing, tax filings, and benefits admin.",
        bullets: [
            "Payroll Processing & Accurate Calculations",
            "Tax Deductions and Form Filing",
            "Statutory Compliance and Filings"
        ]
    },
    {
        id: "02",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icons/recruitment.png",
            alt: "Recruitment",
            style: {
                width: "28px",
                height: "28px"
            }
        }),
        color: "#1A56DB",
        title: "Recruitment Services",
        tagline: "Right People. Right Roles. Right Now.",
        desc: "We attract top talent that fits both the role and your culture — whether rapidly growing, filling a single position, or looking for future leaders.",
        bullets: [
            "Job Analysis & Profiling",
            "Candidate Sourcing & Screening",
            "Shortlisting",
            "Interviewing & Selection Support"
        ]
    },
    {
        id: "03",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icons/tab-plan.png",
            alt: "Plan",
            style: {
                width: "20px",
                height: "20px"
            }
        }),
        color: "#059669",
        title: "HR Strategy & Policy",
        tagline: "Build Culture. Drive Performance.",
        desc: "We align your HR strategy with your business vision by crafting clear policies and procedures that attract and retain top talent while ensuring workplace compliance.",
        bullets: [
            "HR Policy Documentation",
            "Organizational Design & Structuring",
            "Org Charts & Designation Mapping",
            "HR Audit & Compliance Checks"
        ]
    }
];
const benefits = [
    {
        num: "01",
        title: "Customized HR Solutions",
        desc: "Personalized HR strategies and policies that align with your company's specific needs, values, and long-term goals.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icons/benefit-01.png",
            alt: "Customized HR Solutions",
            style: {
                width: "28px",
                height: "28px"
            }
        })
    },
    {
        num: "02",
        title: "Talent Acquisition Excellence",
        desc: "Attract and hire top talent that fits your culture and long-term objectives seamlessly.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icons/benefit-02.png",
            alt: "Talent Acquisition",
            style: {
                width: "28px",
                height: "28px"
            }
        })
    },
    {
        num: "03",
        title: "Compliance & Risk Management",
        desc: "Full legal compliance across all HR functions, minimizing costly risks.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icons/benefit-03.png",
            alt: "Compliance",
            style: {
                width: "28px",
                height: "28px"
            }
        })
    },
    {
        num: "04",
        title: "Streamlined Payroll Services",
        desc: "End-to-end payroll with tax compliance, timely payments, and zero errors.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icons/benefit-04.png",
            alt: "Payroll Services",
            style: {
                width: "28px",
                height: "28px"
            }
        })
    },
    {
        num: "05",
        title: "Scalable HR Solutions",
        desc: "From a small team to a large enterprise — our HR systems grow with your business at every stage.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icons/benefit-05.png",
            alt: "Scalable HR",
            style: {
                width: "28px",
                height: "28px"
            }
        })
    },
    {
        num: "06",
        title: "Cost-Effective HR Support",
        desc: "Maximize ROI by reducing overhead while receiving exceptional, fully tailored HR support across all functions.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icons/benefit-06.png",
            alt: "Cost-Effective",
            style: {
                width: "28px",
                height: "28px"
            }
        })
    }
];
const processSteps = {
    leftTop: {
        title: "Deeper Understanding",
        desc: "We begin with a thorough analysis of your business goals, workforce structure, and HR challenges.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icons/process-understand.png",
            alt: "Deeper Understanding",
            style: {
                width: "28px",
                height: "28px"
            }
        })
    },
    rightTop: {
        title: "Strategy & Planning",
        desc: "We craft tailored HR strategies aligned with your business vision and long-term objectives.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icons/process-strategy.png",
            alt: "Strategy & Planning",
            style: {
                width: "28px",
                height: "28px"
            }
        })
    },
    rightBottom: {
        title: "Execution & Monitoring",
        desc: "Seamless implementation with continuous monitoring to ensure every initiative stays on track.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icons/process-execution.png",
            alt: "Execution & Monitoring",
            style: {
                width: "28px",
                height: "28px"
            }
        })
    },
    leftBottom: {
        title: "Feedback & Analytics Reports",
        desc: "Detailed reporting and analytics to help you optimize results and make data-driven decisions.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icons/process-feedback.png",
            alt: "Feedback & Analytics",
            style: {
                width: "28px",
                height: "28px"
            }
        })
    }
};
const servicesTabs = [
    {
        label: "Understand & Audit",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hr-policy-aduit.webp",
            alt: "Search",
            style: {
                width: "30px",
                height: "30px"
            }
        }),
        title: "Understand & Audit",
        desc: "We start by identifying your current HR policies and organizational structure, analyzing what works and where the gaps are, and evaluating how your current human resource management fits your business needs.",
        features: [],
        tags: [
            "Review HRPolicies",
            "Analyze OrganizationStructure",
            "Identify ProcessGaps",
            "Evaluate WorkforceAlignment"
        ]
    },
    {
        label: "Strategize & Customize",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hr-policy-strategize.webp",
            alt: "Plan",
            style: {
                width: "30px",
                height: "30px"
            }
        }),
        title: "Strategize & Customize",
        desc: "There are no cookie-cutter templates. Our process creates a custom HR strategy development framework, with policy blueprints tailored to your industry, size and organizational context. Everything, from workforce planning to onboarding policy, is laid out.",
        features: [],
        tags: [
            "Develop HRStrategies",
            "Customize PolicyFrameworks",
            "Plan WorkforceStructures",
            "Align BusinessObjectives"
        ]
    },
    {
        label: "Draft & Align",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hr-policy-draft.webp",
            alt: "Align",
            style: {
                width: "30px",
                height: "30px"
            }
        }),
        title: "Draft & Align",
        desc: "We develop or revise your HR policies, taking care to comply with the law, be culturally relevant, and to be operationally clear. All policies are subject to internal alignment reviews to ensure that they can be adopted across departments.",
        features: [],
        tags: [
            "Draft HRPolicies",
            "Ensure LegalCompliance",
            "Maintain CulturalRelevance",
            "Conduct AlignmentReviews"
        ]
    },
    {
        label: "Monitor & Optimize",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hr-policy-monitor.webp",
            alt: "Check",
            style: {
                width: "30px",
                height: "30px"
            }
        }),
        title: "Monitor & Optimize",
        desc: "Policies have power only when communicated and executed. We support your leaders and HR staff by training them to implement the new human resource policies and strategies consistently and easily.",
        features: [],
        tags: [
            "Train LeadershipTeams",
            "Support PolicyExecution",
            "Monitor ImplementationConsistency",
            "Improve HRProcesses"
        ]
    },
    {
        label: "Implement & Enable",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hr-policy-implement.webp",
            alt: "Implement",
            style: {
                width: "30px",
                height: "30px"
            }
        }),
        title: "Implement & Enable",
        desc: "Execution is beyond circulation. We work with you and your HR and leadership teams to do internal rollouts, have conversations, and provide toolkits and communication plans that allow a smooth and consistent adoption.",
        features: [],
        tags: [
            "Execute InternalRollouts",
            "Provide CommunicationPlans",
            "Deliver HRToolkits",
            "Enable SmoothAdoption"
        ]
    },
    {
        label: "Review & Refine",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hr-policy-refine.webp",
            alt: "Refine",
            style: {
                width: "30px",
                height: "30px"
            }
        }),
        title: "Review & Refine",
        desc: "Keep policies current and compliant with regular audits. Whether caused by regulations or organizational evolution, we believe in the proactive approach of updating strategies and their supporting documentation to remain ahead of risk exposure and match the workforce.",
        features: [],
        tags: [
            "Conduct PolicyAudits",
            "Update HRStrategies",
            "Reduce ComplianceRisks",
            "Adapt WorkforcePolicies"
        ]
    }
];
// ── COMPONENTS ────────────────────────────────────────────────────
function HeroSection() {
    const particles = [
        {
            cx: 150,
            cy: 100,
            r: 4,
            fill: "rgba(237,131,55,0.5)",
            dur: "3s",
            delay: "0s"
        },
        {
            cx: 250,
            cy: 160,
            r: 3,
            fill: "rgba(56,189,248,0.5)",
            dur: "4s",
            delay: "0.8s"
        },
        {
            cx: 310,
            cy: 220,
            r: 3.5,
            fill: "rgba(52,211,153,0.5)",
            dur: "3.5s",
            delay: "0.3s"
        },
        {
            cx: 90,
            cy: 200,
            r: 3,
            fill: "rgba(246,173,85,0.5)",
            dur: "4.2s",
            delay: "1.1s"
        },
        {
            cx: 370,
            cy: 160,
            r: 2.5,
            fill: "rgba(237,131,55,0.4)",
            dur: "3.8s",
            delay: "0.6s"
        },
        {
            cx: 340,
            cy: 350,
            r: 3,
            fill: "rgba(168,85,247,0.5)",
            dur: "3.2s",
            delay: "1.5s"
        },
        {
            cx: 50,
            cy: 120,
            r: 2.5,
            fill: "rgba(56,189,248,0.4)",
            dur: "4.5s",
            delay: "0.2s"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "hero",
        id: "hero",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "hero-left",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "h-badge",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "badge-dot"
                            }),
                            "HR & Policy Development"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                        className: "hero-heading",
                        children: [
                            "Strategic HR & Policy",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: "hl lined",
                                children: "Development"
                            }),
                            " for Businesses"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                        className: "hero-sub",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                children: "Accuracy That Builds a Strong Workforce."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                children: "Compliance You Never Have to Worry About."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                children: "Cut Down HR Guesswork."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                children: "Scalable HR Strategy and Policy Development."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "hero-actions",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                            className: "btn-fill",
                            href: "/contact-us",
                            children: [
                                "Explore More ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    className: "btn-arrow",
                                    children: "›"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "hero-right",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                    src: banner,
                    alt: "Banner",
                    style: {
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                        position: "relative",
                        zIndex: 5,
                        animation: "fadeUp .9s .15s ease both"
                    }
                })
            })
        ]
    });
}
function ApproachSection() {
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
    // ✅ EMAIL SEND FUNCTION
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
        _emailjs_browser__rspack_import_2["default"].send("service_8xw6k3r", "template_jarui36", templateParams, "XWRnXi4hK2SvmRG3q" // 🔴 replace
        ).then(()=>{
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
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        className: "approach",
        id: "approach",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "ap2-inner",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "ap-left",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "partners-header1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "partners-eyebrow",
                                style: {
                                    marginBottom: '20px',
                                    textAlign: 'center'
                                },
                                children: "About PCS"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                            className: "ap2-heading",
                            children: [
                                "HR Clarity for  ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "Every Stage"
                                }),
                                " of Growth"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "PCS supports startups and enterprises with tailored HR strategies and policy development designed to create structured, scalable, and compliant workforce management systems."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "Our team combines industry expertise with a compliance-first approach to develop HR frameworks that improve operational clarity, employee management, and organizational stability."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "Whether creating new HR policies or refining existing structures, PCS helps businesses make faster, smarter, and more confident workforce management decisions."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "ap2-form-wrap",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "ap2-form-card",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "ap2-form-eyebrow",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        className: "ap2-form-eyebrow-line"
                                    }),
                                    "Your Growth, Our Mission",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        className: "ap2-form-eyebrow-line"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "ap2-form-title",
                                children: [
                                    "Get Your ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        children: "Free"
                                    }),
                                    " SEO Audit"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("form", {
                                onSubmit: sendEmail,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "ap2-fl-row",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "ap2-fl-group",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("label", {
                                                        className: "ap2-fl-label",
                                                        children: "Your Name"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                        style: {
                                                            position: "relative"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                className: "ap2-fl-icon",
                                                                children: "\uD83D\uDC64"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                className: "ap2-fl-input",
                                                                type: "text",
                                                                name: "name",
                                                                placeholder: "Full name",
                                                                value: form.name,
                                                                onChange: handleChange,
                                                                required: true
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "ap2-fl-group",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("label", {
                                                        className: "ap2-fl-label",
                                                        children: "Company"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                        style: {
                                                            position: "relative"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                className: "ap2-fl-icon",
                                                                children: "\uD83C\uDFE2"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                className: "ap2-fl-input",
                                                                type: "text",
                                                                name: "company",
                                                                placeholder: "Company name",
                                                                value: form.company,
                                                                onChange: handleChange
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "ap2-fl-group",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("label", {
                                                className: "ap2-fl-label",
                                                children: "Email Address"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                style: {
                                                    position: "relative"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        className: "ap2-fl-icon",
                                                        children: "✉️"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                        className: "ap2-fl-input",
                                                        type: "email",
                                                        name: "email",
                                                        placeholder: "your@email.com",
                                                        value: form.email,
                                                        onChange: handleChange,
                                                        required: true
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "ap2-fl-group",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("label", {
                                                className: "ap2-fl-label",
                                                children: "Mobile Number"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "ap2-phone-row",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "ap2-phone-flag",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                            children: "\uD83D\uDCDE"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                        className: "ap2-fl-input",
                                                        type: "tel",
                                                        name: "phone",
                                                        placeholder: "Mobile number",
                                                        value: form.phone,
                                                        onChange: handleChange,
                                                        maxLength: "10",
                                                        pattern: "[0-9]{10}",
                                                        required: true
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "ap2-fl-group",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("label", {
                                                className: "ap2-fl-label",
                                                children: "Message"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                style: {
                                                    position: "relative"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        className: "ap2-fl-icon",
                                                        style: {
                                                            top: "0.9rem",
                                                            transform: "none"
                                                        },
                                                        children: "\uD83D\uDCAC"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("textarea", {
                                                        className: "ap2-fl-textarea",
                                                        name: "msg",
                                                        placeholder: "Tell us about your SEO goals...",
                                                        value: form.msg,
                                                        onChange: handleChange
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("button", {
                                        type: "submit",
                                        className: "ap2-submit",
                                        children: [
                                            "Get Free SEO Audit ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "ap2-submit-arrow",
                                                children: "›"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}
// ── STEP FLOW DATA — exact image match colors & icons ──────────
const stepFlowData = [
    {
        id: "01",
        // color: "#1A56DB",
        bg: "rgba(26,86,219,0.08)",
        title: "Strategic Clarity",
        desc: "We create clear HR strategies and policy frameworks that align workforce management with your long-term business objectives and operations.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hr-policy-clarity.webp",
            alt: "icon",
            style: {
                width: "30px",
                height: "30px"
            }
        })
    },
    {
        id: "02",
        // color: "#e03e52",
        bg: "rgba(224,62,82,0.08)",
        title: "Compliance Guaranteed",
        desc: "Our HR policies are developed with a compliance-first approach to ensure legal accuracy, risk reduction, and regulatory alignment consistently.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hr-policy-compliance-guaranted.webp",
            alt: "icon",
            style: {
                width: "30px",
                height: "30px"
            }
        })
    },
    {
        id: "03",
        // color: "#d97706",
        bg: "rgba(217,119,6,0.08)",
        title: "Structured Implementation",
        desc: "PCS ensures smooth HR policy execution through structured processes, leadership coordination, employee communication, and implementation-focused operational supp",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hr-policy-structured.webp",
            alt: "icon",
            style: {
                width: "30px",
                height: "30px"
            }
        })
    },
    {
        id: "04",
        // color: "#0d9488",
        bg: "rgba(13,148,136,0.08)",
        title: "Scalable for Any Size",
        desc: "Our HR strategy solutions are flexible and scalable, supporting startups, growing businesses, and large enterprises across diverse workforce structures.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hr-policy-scalable.webp",
            alt: "icon",
            style: {
                width: "30px",
                height: "30px"
            }
        })
    }
];
// ── TAB SERVICE DATA (Image 2 style) ────────────────────────────
const tabServicesData = (/* unused pure expression or super */ null && ([
    {
        tab: "Understand & Audit",
        title: "Recruitment Consultancy Services",
        desc: "We design effective onboarding programs to integrate new hires smoothly to keep your top talent engaged and committed long-term.",
        points: [
            "Talent pipeline strategy & Effective JD creation",
            "Interview frameworks & Robust SOP design",
            "Hiring audits & ongoing advisory",
            "Onboarding & retention strategies"
        ]
    },
    {
        tab: "Recruitment Services",
        title: "Recruitment Services",
        desc: "Finding the right talent is one of the most critical challenges for any growing business. PCS provides end-to-end recruitment support — from defining job profiles and sourcing candidates to structured interviews and final onboarding. We connect you with people who fit both the role and your culture.",
        points: [
            "Job Analysis & Profiling",
            "Candidate Sourcing & Screening",
            "Shortlisting & Assessment",
            "Interview Coordination",
            "Offer & Onboarding Support"
        ]
    },
    {
        tab: "HR Strategy & Policy",
        title: "HR Strategy & Policy",
        desc: "A strong HR framework is the foundation of a high-performing organisation. We work with leadership to design policies, organisational structures, and HR governance that drive performance, ensure compliance, and create a workplace people want to be part of.",
        points: [
            "HR Policy Documentation",
            "Organisational Design",
            "Designation & Org Chart Mapping",
            "HR Audit & Compliance",
            "Performance Management Frameworks"
        ]
    },
    {
        tab: "Training & Development",
        title: "Training & Development",
        desc: "Upskilling your workforce is key to staying competitive. PCS designs and delivers targeted training programmes — from leadership development to role-specific technical skills — that elevate individual performance and strengthen your entire organisation.",
        points: [
            "Leadership Development",
            "Skill Gap Analysis",
            "Custom Training Modules",
            "Employee Onboarding Programs",
            "Performance Coaching"
        ]
    },
    {
        tab: "Compliance & Legal",
        title: "Compliance & Legal HR",
        desc: "Navigating HR-related legal requirements is complex and ever-changing. Our compliance specialists ensure your policies, practices, and documentation meet all statutory obligations — protecting your business from risk while building a legally sound workplace.",
        points: [
            "Labour Law Compliance",
            "Contract & Offer Letter Drafting",
            "Grievance Handling Procedures",
            "Termination & Exit Compliance",
            "Statutory Registration Support"
        ]
    },
    {
        tab: "HR Outsourcing",
        title: "HR Outsourcing",
        desc: "Let PCS be your dedicated HR department. We offer full or partial HR outsourcing services — giving you access to seasoned HR professionals without the overhead of a full in-house team. Scalable, cost-effective, and built around your business needs.",
        points: [
            "Dedicated HR Manager",
            "Employee Lifecycle Management",
            "MIS Reporting & Analytics",
            "HR Helpdesk Support",
            "Vendor & Contract Management"
        ]
    }
]));
// ── SERVICES SECTION (HTML tilt card layout) ────────────────────
function ServicesSection() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        className: "svc-section",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "svc-inner",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "svc-header",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "partners-header1",
                            style: {
                                textAlign: 'center'
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                className: "partners-eyebrow",
                                style: {
                                    marginBottom: '20px',
                                    textAlign: 'center'
                                },
                                children: "HR & Policy Development Services "
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                            className: "hr-h2",
                            style: {
                                textAlign: 'center',
                                color: '#fff'
                            },
                            children: [
                                "Our Result-Driven  ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    style: {
                                        color: '#ed8337'
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                        children: "HR Advisory "
                                    })
                                }),
                                "  Framework"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "svc-subtext",
                            children: "We bring structure, compliance, and strategy to every HR function."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "svc-trio-grid",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "svc-tcard svc-tcard-1",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "svc-tcard-band",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "svc-tcard-num",
                                            children: "01"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "svc-tcard-icon",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                src: "/img/icon/hr-policy-development.webp",
                                                alt: "service icon",
                                                style: {
                                                    width: "32px",
                                                    height: "32px"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            className: "svc-tcard-eyebrow",
                                            children: "Consultancy"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                            className: "svc-tcard-title",
                                            children: "HR Policy Development Services"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "svc-tcard-body",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "svc-tcard-desc",
                                            children: "We handle HR Policy Development end-to-end from setting the cultural tone to ensuring full compliance."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                            className: "svc-tcard-points",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                            className: "svc-pt-check",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                                                                viewBox: "0 0 12 12",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                                                                    points: "2,6 5,9 10,3"
                                                                })
                                                            })
                                                        }),
                                                        "Strategic HR Policy Development aligned to your organization’s goals"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                            className: "svc-pt-check",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                                                                viewBox: "0 0 12 12",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                                                                    points: "2,6 5,9 10,3"
                                                                })
                                                            })
                                                        }),
                                                        "Employee handbooks, codes of conduct, leave and benefits policies"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                            className: "svc-pt-check",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                                                                viewBox: "0 0 12 12",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                                                                    points: "2,6 5,9 10,3"
                                                                })
                                                            })
                                                        }),
                                                        "Department-specific and role-based HR policies"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                            className: "svc-pt-check",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                                                                viewBox: "0 0 12 12",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                                                                    points: "2,6 5,9 10,3"
                                                                })
                                                            })
                                                        }),
                                                        "Policy reviews for clarity, tone, accessibility, and legal compliance"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "svc-tcard-footer"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "svc-tcard svc-tcard-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "svc-tcard-band",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "svc-tcard-num",
                                            children: "02"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "svc-tcard-icon",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                src: "/img/icon/hr-policy-hr-strategy.webp",
                                                alt: "service icon",
                                                style: {
                                                    width: "32px",
                                                    height: "32px"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            className: "svc-tcard-eyebrow",
                                            children: "End-to-End"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                            className: "svc-tcard-title",
                                            children: "HR Strategy Development Services"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "svc-tcard-body",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "svc-tcard-desc",
                                            children: "For businesses that don’t just want to grow but grow with purpose, structure, and clarity."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                            className: "svc-tcard-points",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                            className: "svc-pt-check",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                                                                viewBox: "0 0 12 12",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                                                                    points: "2,6 5,9 10,3"
                                                                })
                                                            })
                                                        }),
                                                        "Long-term HR strategy development roadmap creation"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                            className: "svc-pt-check",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                                                                viewBox: "0 0 12 12",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                                                                    points: "2,6 5,9 10,3"
                                                                })
                                                            })
                                                        }),
                                                        "Role clarity, workforce planning, and growth alignment"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                            className: "svc-pt-check",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                                                                viewBox: "0 0 12 12",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                                                                    points: "2,6 5,9 10,3"
                                                                })
                                                            })
                                                        }),
                                                        "Succession planning, leadership framework, and org design"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                            className: "svc-pt-check",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                                                                viewBox: "0 0 12 12",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                                                                    points: "2,6 5,9 10,3"
                                                                })
                                                            })
                                                        }),
                                                        "Integration with business goals and operational strategy"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "svc-tcard-footer"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "svc-tcard svc-tcard-3",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "svc-tcard-band",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "svc-tcard-num",
                                            children: "03"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "svc-tcard-icon",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                src: "/img/icon/hr-policy-hr-audit.webp",
                                                alt: "service icon",
                                                style: {
                                                    width: "32px",
                                                    height: "32px"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            className: "svc-tcard-eyebrow",
                                            children: "Outsourcing"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                            className: "svc-tcard-title",
                                            children: "HR Audits & Advisory Services"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "svc-tcard-body",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "svc-tcard-desc",
                                            children: "When HR feels overwhelming, we bring structure. When there’s confusion, we bring clarity."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                            className: "svc-tcard-points",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                            className: "svc-pt-check",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                                                                viewBox: "0 0 12 12",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                                                                    points: "2,6 5,9 10,3"
                                                                })
                                                            })
                                                        }),
                                                        "Audit of current HR policies and compliance risks"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                            className: "svc-pt-check",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                                                                viewBox: "0 0 12 12",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                                                                    points: "2,6 5,9 10,3"
                                                                })
                                                            })
                                                        }),
                                                        "Evaluation of workforce structures and reporting lines"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                            className: "svc-pt-check",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                                                                viewBox: "0 0 12 12",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                                                                    points: "2,6 5,9 10,3"
                                                                })
                                                            })
                                                        }),
                                                        "Alignment with labor laws, DEI goals, and market practices"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                            className: "svc-pt-check",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                                                                viewBox: "0 0 12 12",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                                                                    points: "2,6 5,9 10,3"
                                                                })
                                                            })
                                                        }),
                                                        "Risk mitigation, documentation standardization, and advisory"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "svc-tcard-footer"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
// ── SERVICES BUILT FOR RESULTS COMPONENT ────────────────────────
function TabServiceSection() {
    const [activeTab, setActiveTab] = (0,react__rspack_import_1.useState)(0);
    const total = servicesTabs.length;
    const svc = servicesTabs[activeTab];
    const goPrev = ()=>setActiveTab((i)=>Math.max(0, i - 1));
    const goNext = ()=>setActiveTab((i)=>Math.min(total - 1, i + 1));
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        className: "bfr-section",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "bfr-inner",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "bfr-header",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "partners-header1",
                            style: {
                                textAlign: 'center'
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                className: "partners-eyebrow",
                                style: {
                                    marginBottom: '20px',
                                    textAlign: 'center'
                                },
                                children: "Proven HR Strategy & Policy Development"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                            className: "bfr-title",
                            children: [
                                "Our Proven  ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                            children: "HR Strategy and Policy "
                                        }),
                                        " "
                                    ]
                                }),
                                " Development Process"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "bfr-sub",
                            children: "We turn HR challenges into strategic advantages with a clear, proven framework built for real-world impact."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "bfr-tabs",
                    children: servicesTabs.map((t, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("button", {
                            className: `bfr-tab${activeTab === i ? " active" : ""}`,
                            onClick: ()=>setActiveTab(i),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    className: "bfr-tab-icon",
                                    children: t.icon
                                }),
                                t.label
                            ]
                        }, i))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "bfr-mobile-nav",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
                            className: "bfr-mobile-nav-btn",
                            onClick: goPrev,
                            disabled: activeTab === 0,
                            children: "←"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                            className: "bfr-mobile-tab-label",
                            children: svc.label || svc.tab || svc.title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
                            className: "bfr-mobile-nav-btn",
                            onClick: goNext,
                            disabled: activeTab === total - 1,
                            children: "→"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "bfr-mobile-dots",
                    children: servicesTabs.map((_, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
                            className: `bfr-mobile-dot${activeTab === i ? " active" : ""}`,
                            onClick: ()=>setActiveTab(i)
                        }, i))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "bfr-panel",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "bfr-panel-grid",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "bfr-panel-left",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                        className: "bfr-panel-title",
                                        children: svc.title
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        className: "bfr-panel-desc",
                                        children: svc.desc
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
                                        className: "bfr-features",
                                        children: svc.features.map((f, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        className: "bfr-check",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                                                            viewBox: "0 0 12 12",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                                                                points: "2,6 5,9 10,3"
                                                            })
                                                        })
                                                    }),
                                                    f
                                                ]
                                            }, i))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "bfr-panel-right",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "bfr-right-icon",
                                        children: svc.rightIcon
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "bfr-right-stat",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "bfr-right-stat-num",
                                                children: svc.stat
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "bfr-right-stat-label",
                                                children: svc.statLabel
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "bfr-right-tags",
                                        children: svc.tags.map((tag, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "bfr-right-tag",
                                                children: tag
                                            }, i))
                                    })
                                ]
                            })
                        ]
                    })
                }, activeTab)
            ]
        })
    });
}
// ── STEP FLOW COMPONENT ──────────────────────────────────────────
function StepFlowSection() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        className: "sf-section",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "sf-inner",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "sf-header",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "partners-header1",
                            style: {
                                textAlign: "center"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "partners-eyebrow",
                                style: {
                                    marginBottom: "16px",
                                    color: "var(--orange)"
                                },
                                children: "Why PCS?"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                            className: "sf-heading",
                            children: [
                                "Why Priyam Consultancy Services, ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                        children: "HR Strategy and Policy Development "
                                    })
                                }),
                                " Works for Growing Businesses"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "sf-subtext",
                            children: "At Priyam Consultancy Services, we recognize that many organizations experience fragmented processes, outdated policies, and unclear responsibilities. Therefore, our services in HR Strategy and Policy Development simplify the complexity of HR by crafting systems to be practical, compliant, and suitable for your organization. Whether it is policy writing or planning for a future strategic workforce, we focus on providing your organization with a resilient HR foundation that is scalable and future-proof."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "sf-flow",
                    children: stepFlowData.map((step, i)=>{
                        const isOdd = i % 2 === 0; // 0,2 → odd visual (1st,3rd)
                        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "sf-card-wrap",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: `sf-card ${isOdd ? "sf-odd" : "sf-even"}`,
                                    style: {
                                        "--sf-color": step.color
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "sf-card-icon",
                                            children: step.icon
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                            className: "sf-card-title",
                                            children: step.title
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "sf-card-desc",
                                            children: step.desc
                                        })
                                    ]
                                }),
                                i < stepFlowData.length - 1 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "sf-arrow",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
                                        viewBox: "0 0 48 48",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                                                className: "sf-arrow-tail",
                                                d: "M8 24H36",
                                                stroke: "#ed8337",
                                                strokeWidth: "3",
                                                strokeLinecap: "round"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                                                className: "sf-arrow-head",
                                                d: "M28 16L38 24L28 32",
                                                stroke: "#ed8337",
                                                strokeWidth: "3",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, i);
                    })
                })
            ]
        })
    });
}
// faq section
const faqData = [
    {
        q: "Can You Support Policy Development For Remote Or Geographically Dispersed Teams?",
        a: "Yes! We develop HR strategies and policies for hybrid, remote, and in-office workforces operating in multiple locations."
    },
    {
        q: "What Does HR Strategy and Policy Development Include?",
        a: "It includes full scope planning, drafting, implementation, and consultation around your HR strategy, HR policy development, and overall human resource management framework."
    },
    {
        q: "How Frequently Should HR Policies Be Reviewed And Updated?",
        a: "We recommend reviewing HR policies annually and/or when there are significant regulatory or organizational changes."
    },
    {
        q: "What Makes PCS A Trusted Partner For HR Strategy And Development Policy?",
        a: "We integrate compliance, business goals and employee needs into our approach. With extensive knowledge around human resource management, we are able to make HR policy development and HR strategy development practically and future-ready."
    },
    {
        q: "Can PCS Help Us Develop HR Policies From Scratch?",
        a: "Yes. We specialize in development of HR policies that are tailored to your size, industry and growth stage."
    },
    {
        q: "Can PCS Support Leadership Hiring And Organizational Design?",
        a: "Yes. Extended HR advisory includes org structures, succession planning, and leadership hiring strategies as part of a bundle of human resource policies and strategies."
    }
];
function FAQSection() {
    const [active, setActive] = (0,react__rspack_import_1.useState)(null);
    const toggle = (index)=>{
        setActive(active === index ? null : index);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "faq-section",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "partners-header2",
                style: {
                    textAlign: 'center',
                    marginTop: '20px'
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                    className: "partners-eyebrow",
                    children: "Frequently Asked Questions"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "faq-head",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                            className: "faq-h3",
                            children: [
                                "Queries That Could ",
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
                                                        className: "icon",
                                                        children: active === i ? "−" : "+"
                                                    })
                                                ]
                                            }),
                                            active === i && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "faq-answer",
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
                                                        className: "icon",
                                                        children: active === i + 3 ? "−" : "+"
                                                    })
                                                ]
                                            }),
                                            active === i + 3 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "faq-answer",
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
function HRConsultancy() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_5/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_6/* ["default"] */.A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                        children: "HR Strategy Development | HR Policy Development Services "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "description",
                        content: " Enhance your workforce with our expert HR Strategy and Policy Development services. Implement customized HR policies, support compliance, and plan for the future. "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "keywords",
                        content: "HR Strategy, HR Policy Development, HR Strategy Development, Developing HR Policies, HR Policies, Human Resource Management, HR Policy Development, Human Resource Policies and Strategies, HR Strategy and Policy Development"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                        rel: "canonical",
                        href: "https://www.priyamconsultancy.com/hr-strategy-and-policy-development/"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:title",
                        content: "HR Strategy Development | HR Policy Development Services"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:description",
                        content: " Enhance your workforce with our expert HR Strategy and Policy Development services. Implement customized HR policies, support compliance, and plan for the future. "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:url",
                        content: "https://www.priyamconsultancy.com/hr-strategy-and-policy-development/"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:image",
                        content: "https://www.priyamconsultancy.com/img/hr-strategy.png"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "twitter:title",
                        content: "HR Strategy Development | HR Policy Development Services"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "twitter:description",
                        content: " Enhance your workforce with our expert HR Strategy and Policy Development services. Implement customized HR policies, support compliance, and plan for the future. "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "twitter:image",
                        content: "https://www.priyamconsultancy.com/img/hr-strategy.png"
                    }),
                    schemaData.map((schema, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                            type: "application/ld+json",
                            children: JSON.stringify(schema)
                        }, i))
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "hr-page pg-strategy",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(HeroSection, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ApproachSection, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ServicesSection, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(TabServiceSection, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(StepFlowSection, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(FAQSection, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_BlogSection__rspack_import_3/* ["default"] */.A, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_HomePage_CTA__rspack_import_4/* ["default"] */.A, {})
                ]
            })
        ]
    });
}


},

};
;