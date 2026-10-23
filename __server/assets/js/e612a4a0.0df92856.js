"use strict";
exports.ids = ["7172"];
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
9059(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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








const banner = "/img/payroll-services.webp";
const pageUrl = "https://www.priyamconsultancy.com/payroll-management/";
const imageUrl = "https://www.priyamconsultancy.com/img/payroll-services.png";
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
                    "@id": "https://www.priyamconsultancy.com/payroll-management/",
                    "name": "Payroll Management"
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
        "@id": "https://www.priyamconsultancy.com/payroll-management/#service",
        "name": "Payroll Management",
        "serviceType": "Payroll Management Services",
        "url": "https://www.priyamconsultancy.com/payroll-management/",
        "description": "Priyam Consultancy provides professional payroll management services including salary processing, employee payroll administration, statutory compliance, payslip generation, tax calculations and end-to-end payroll support for businesses across India.",
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
        "name": "Payroll Management Services in Coimbatore",
        "image": [
            "https://www.priyamconsultancy.com/img/payroll-services.png"
        ],
        "description": "Best payroll management services in Coimbatore offering salary processing, payroll administration, statutory compliance, tax calculations and end-to-end payroll support for businesses.",
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
            "reviewCount": "4678"
        },
        "offers": {
            "@type": "Offer",
            "url": "https://www.priyamconsultancy.com/payroll-management/",
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
                "name": "What Are The Payroll Management Services/Work A Part Of Your Services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We encompass all details such as employee salaries, tax deductions, leave trackers, payslips, and PF/ESI/TDS filings."
                }
            },
            {
                "@type": "Question",
                "name": "Is Your Payroll System Cloud Based?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Everything in our payroll management system is cloud based, and accessible 24 hours a day, 7 days a week and with secure logins for the admin role and all employee roles."
                }
            },
            {
                "@type": "Question",
                "name": "Do You Support Compliance Filings?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We ensure monthly, quarterly, and annual compliance filings across PF, ESI, TDS, and labor laws."
                }
            },
            {
                "@type": "Question",
                "name": "Can You Integrate With Our Current HR Systems?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Our system can integrate with most HR systems, and will run seamlessly with data flowing between your systems and automating workflows."
                }
            },
            {
                "@type": "Question",
                "name": "What Makes PCS A Trustworthy Option For Payroll Management?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide accuracy, security, expertise in our domain, and compliance-first service. With PCS, you're getting a partner as opposed to just a vendor."
                }
            },
            {
                "@type": "Question",
                "name": "Can You Handle Payroll For Remote Teams Across India?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We manage payroll for remote teams, hybrid teams, and multi-state teams all across India and especially ensure compliance with local laws in each state."
                }
            }
        ]
    }
];
// ── DATA ──────────────────────────────────────────────────────────
const services = (/* unused pure expression or super */ null && ([
    {
        id: "01",
        icon: "💰",
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
        icon: "🎯",
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
        icon: "📋",
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
]));
const benefits = [
    {
        num: "01",
        title: "Customized HR Solutions",
        desc: "Personalized HR strategies and policies that align with your company's specific needs, values, and long-term goals.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                    d: "M2 20c0-4 3-7 7-7"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("circle", {
                    cx: "17",
                    cy: "9",
                    r: "3"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                    d: "M14 20c0-3 2-5 5-5"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                    d: "M19 4l1.5 1.5L23 3"
                })
            ]
        })
    },
    {
        num: "02",
        title: "Talent Acquisition Excellence",
        desc: "Attract and hire top talent that fits your culture and long-term objectives seamlessly.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("circle", {
                    cx: "11",
                    cy: "11",
                    r: "7"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                    x1: "16.5",
                    y1: "16.5",
                    x2: "22",
                    y2: "22"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                    x1: "11",
                    y1: "8",
                    x2: "11",
                    y2: "14"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                    x1: "8",
                    y1: "11",
                    x2: "14",
                    y2: "11"
                })
            ]
        })
    },
    {
        num: "03",
        title: "Compliance & Risk Management",
        desc: "Full legal compliance across all HR functions, minimizing costly risks.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                    d: "M12 2l7 4v6c0 5-3.5 9-7 10C8.5 21 5 17 5 12V6z"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                    d: "M9 12l2 2 4-4"
                })
            ]
        })
    },
    {
        num: "04",
        title: "Streamlined Payroll Services",
        desc: "End-to-end payroll with tax compliance, timely payments, and zero errors.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("rect", {
                    x: "2",
                    y: "6",
                    width: "20",
                    height: "14",
                    rx: "2"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                    x1: "2",
                    y1: "11",
                    x2: "22",
                    y2: "11"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                    x1: "6",
                    y1: "16",
                    x2: "10",
                    y2: "16"
                })
            ]
        })
    },
    {
        num: "05",
        title: "Scalable HR Solutions",
        desc: "From a small team to a large enterprise — our HR systems grow with your business at every stage.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("circle", {
                    cx: "12",
                    cy: "12",
                    r: "8"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                    x1: "12",
                    y1: "2",
                    x2: "12",
                    y2: "5"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                    x1: "12",
                    y1: "19",
                    x2: "12",
                    y2: "22"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                    x1: "2",
                    y1: "12",
                    x2: "5",
                    y2: "12"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                    x1: "19",
                    y1: "12",
                    x2: "22",
                    y2: "12"
                })
            ]
        })
    },
    {
        num: "06",
        title: "Cost-Effective HR Support",
        desc: "Maximize ROI by reducing overhead while receiving exceptional, fully tailored HR support across all functions.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                    d: "M5 9l7-5 7 5v10l-7 4-7-4z"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                    d: "M9 13l2 2 4-4"
                })
            ]
        })
    }
];
const processSteps = {
    leftTop: {
        title: "Deeper Understanding",
        desc: "We begin with a thorough analysis of your business goals, workforce structure, and HR challenges.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("circle", {
                    cx: "12",
                    cy: "8",
                    r: "4"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("circle", {
                    cx: "12",
                    cy: "8",
                    r: "1.5",
                    fill: "#ed8337",
                    stroke: "none"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                    d: "M7 18c0-3.5 2.2-6 5-6s5 2.5 5 6",
                    strokeLinecap: "round"
                })
            ]
        })
    },
    rightTop: {
        title: "Strategy & Planning",
        desc: "We craft tailored HR strategies aligned with your business vision and long-term objectives.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("rect", {
                    x: "8",
                    y: "6",
                    width: "7",
                    height: "7",
                    rx: "1.5"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("rect", {
                    x: "14",
                    y: "12",
                    width: "6",
                    height: "6",
                    rx: "1.5"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                    x1: "11.5",
                    y1: "13",
                    x2: "11.5",
                    y2: "15"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                    x1: "11.5",
                    y1: "15",
                    x2: "17",
                    y2: "15"
                })
            ]
        })
    },
    rightBottom: {
        title: "Execution & Monitoring",
        desc: "Seamless implementation with continuous monitoring to ensure every initiative stays on track.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("rect", {
                    x: "3",
                    y: "8",
                    width: "18",
                    height: "12",
                    rx: "2"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                    points: "6,14 9,11 12,13 15,9 18,12"
                })
            ]
        })
    },
    leftBottom: {
        title: "Feedback & Analytics Reports",
        desc: "Detailed reporting and analytics to help you optimize results and make data-driven decisions.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("rect", {
                    x: "4",
                    y: "9",
                    width: "16",
                    height: "11",
                    rx: "2"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                    x1: "4",
                    y1: "14",
                    x2: "20",
                    y2: "14"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                    x1: "8",
                    y1: "18",
                    x2: "13",
                    y2: "18"
                })
            ]
        })
    }
};
const servicesTabs = [
    {
        label: "Understand & Audit",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/payroll-understand-audit.webp",
            alt: "Understand & Audit",
            style: {
                width: "28px",
                height: "28px",
                objectFit: "contain",
                verticalAlign: "middle"
            }
        }),
        rightIcon: "",
        title: "Understand & Audit",
        desc: "To begin, we will meticulously examine your current payroll system, employee data, and compliance situation. This audit gives us insight into any flags or gaps in your business. We will look at your overall payroll structure initiating with accuracy of data, statutory compliance and whether there are unnecessary inefficiencies in your workflow.",
        features: [],
        tags: [
            "Review Payroll",
            "Analyze Compliance",
            "Verify EmployeeData",
            "Identify Inefficiencies"
        ],
        stat: "",
        statLabel: ""
    },
    {
        label: "Configure & Customize",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/payroll-configure-customize.webp",
            alt: "Configure & Customize",
            style: {
                width: "28px",
                height: "28px",
                objectFit: "contain",
                verticalAlign: "middle"
            }
        }),
        rightIcon: "",
        title: "Configure & Customize",
        desc: "We don't believe in one-size-fits-all solutions. That's why we spend the time tailoring our payroll management system to fit your business perfectly. We customize salary structure, tax calculations and other compensation based on your organization's internal policies.",
        features: [],
        tags: [
            "Customize SalaryStructures",
            "Configure TaxCalculations",
            "Align CompanyPolicies",
            "Personalize PayrollSystems"
        ],
        stat: "",
        statLabel: ""
    },
    {
        label: "Process & Disburse",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/payroll-process-disburse.webp",
            alt: "Process & Disburse",
            style: {
                width: "28px",
                height: "28px",
                objectFit: "contain",
                verticalAlign: "middle"
            }
        }),
        rightIcon: "",
        title: "Process & Disburse",
        desc: "With accuracy and efficiency we will process all stages of the payroll cycle - from data entry to payout. Begins with checking data entry where we ensure that attendance and leave balances and any other elements being entered onto payroll are accurate to the day. We will calculate salaries, benefits, bonuses, and deductions according to your company policies.",
        features: [],
        tags: [
            "Verify AttendanceRecords",
            "Calculate EmployeeSalaries",
            "Process PayrollCycles",
            "Manage SalaryDisbursement"
        ],
        stat: "",
        statLabel: ""
    },
    {
        label: "Comply & Report",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/payroll-comply-report.webp",
            alt: "Comply & Report",
            style: {
                width: "28px",
                height: "28px",
                objectFit: "contain",
                verticalAlign: "middle"
            }
        }),
        rightIcon: "",
        title: "Comply & Report",
        desc: "Keeping up with regulations that are constantly changing can be tough, but we have got you covered! We take responsibility for all statutory filings (PF, ESI, TDS, PT, etc) and file all required documents on time. We also produce Form 16s and quarterly/year-end reports with complete documentations of all transactions.",
        features: [],
        tags: [
            "Handle StatutoryFilings",
            "Generate ComplianceReports",
            "Prepare Form16s",
            "Maintain Documentation"
        ],
        stat: "",
        statLabel: ""
    },
    {
        label: "Monitor & Optimize",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/payroll-monitor-optimize.webp",
            alt: "Monitor & Optimize",
            style: {
                width: "28px",
                height: "28px",
                objectFit: "contain",
                verticalAlign: "middle"
            }
        }),
        rightIcon: "",
        title: "Monitor & Optimize",
        desc: "We view payroll management as an ongoing journey, not a one-time task. That's why we don't stop at execution we continuously optimize. Each cycle is reviewed closely to track outcomes, spot inefficiencies, and make timely improvements that keep your payroll process sharp and dependable.",
        features: [],
        tags: [
            "Track PayrollPerformance",
            "Identify ProcessGaps",
            "Improve PayrollEfficiency",
            "Optimize Workflows"
        ],
        stat: "",
        statLabel: ""
    },
    {
        label: "Continuous Support & Proactive Insights",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/payroll-continuous-support.webp",
            alt: "Continuous Support",
            style: {
                width: "28px",
                height: "28px",
                objectFit: "contain",
                verticalAlign: "middle"
            }
        }),
        rightIcon: "",
        title: "Continuous Support & Proactive Insights",
        desc: "At PCS, payroll management is an ongoing partnership, not just processing. Our dedicated team is always available to help with questions, fix issues, or discuss anything you need. We'll also provide proactive assistance with your payroll data, helping you see trends, risks, and possible savings.",
        features: [],
        tags: [
            "Provide DedicatedSupport",
            "Resolve PayrollQueries",
            "Analyze PayrollTrends",
            "Identify CostSavings"
        ],
        stat: "",
        statLabel: ""
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
                            "Payroll Services"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                        className: "hero-heading",
                        children: [
                            "Simplify Payroll. Grow",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: "hl lined",
                                children: "Confidently"
                            }),
                            " With Services"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                        className: "hero-sub",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                children: "Accuracy That Builds Trust."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                children: "Compliance You Never Have to Worry About."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                children: "Cut down manual work & speed up execution."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                children: "Scalable Payroll Solutions for Business Types."
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
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                        src: banner,
                        alt: "Payroll Management",
                        style: {
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }
                    })
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
                                children: "Our Approach in"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                            className: "ap2-heading",
                            children: [
                                "Seamless ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "Payroll for"
                                }),
                                " Every Stage of Growth"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "PCS delivers seamless payroll solutions for startups, growing businesses, and large enterprises through a combination of automation, compliance expertise, and reliable operational support."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "Our scalable payroll systems manage salary processing, tax filing, statutory compliance, reporting, and employee coordination while ensuring accuracy, security, and smooth workforce management."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "Beyond payroll processing, PCS acts as a strategic HR operations partner focused on precision, compliance, efficiency, and stress-free payroll management for businesses of every size."
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
        title: "Precision That Minimizes Errors",
        desc: "Our accuracy-focused payroll process ensures correct salary calculations, deductions, reimbursements, and payouts while minimizing payroll errors and operational disruptions",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/payroll-precision.webp",
            alt: "Precision That Minimizes Errors",
            style: {
                width: "36px",
                height: "36px",
                objectFit: "contain"
            }
        })
    },
    {
        id: "02",
        // color: "#e03e52",
        bg: "rgba(224,62,82,0.08)",
        title: "Total Compliance, Guaranteed",
        desc: "PCS manages statutory filings, tax compliance, reporting requirements, and regulatory updates to help businesses maintain complete payroll compliance without risk.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/payroll-compliance.webp",
            alt: "Total Compliance",
            style: {
                width: "36px",
                height: "36px",
                objectFit: "contain"
            }
        })
    },
    {
        id: "03",
        // color: "#d97706",
        bg: "rgba(217,119,6,0.08)",
        title: "Streamlined Payroll Operations",
        desc: "We simplify payroll workflows through structured processes, automation, and expert management that improve efficiency, reduce delays, and support smooth business operations.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/payroll-streamlined.webp",
            alt: "Streamlined Payroll Operations",
            style: {
                width: "36px",
                height: "36px",
                objectFit: "contain"
            }
        })
    },
    {
        id: "04",
        // color: "#0d9488",
        bg: "rgba(13,148,136,0.08)",
        title: "Flexible Solutions for Every Business Size",
        desc: "Our scalable payroll solutions are designed to support startups, growing businesses, and large enterprises with customized payroll management based on operational needs.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/payroll-flexible.webp",
            alt: "Flexible Solutions",
            style: {
                width: "36px",
                height: "36px",
                objectFit: "contain"
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
                                children: "Payroll Management Services "
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
                                        children: "Payroll Management "
                                    })
                                }),
                                "  Sources"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "svc-subtext",
                            children: "We bring clarity, compliance, and confidence to every payroll cycle."
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
                                                src: "/img/icon/payroll-processing.webp",
                                                alt: "Payroll Processing",
                                                style: {
                                                    width: "28px",
                                                    height: "28px",
                                                    objectFit: "contain"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            className: "svc-tcard-eyebrow",
                                            children: "Consultancy"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                            className: "svc-tcard-title",
                                            children: "Payroll Processing Services"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "svc-tcard-body",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "svc-tcard-desc",
                                            children: "End-to-end salary management—from inputs to disbursals."
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
                                                        "Salary structure design, tax computation, bonus/incentive processing"
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
                                                        "Automated payslip generation & salary credit tracking"
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
                                                        "Monthly compliance deductions: PF, ESI, PT, and TDS"
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
                                                src: "/img/icon/payroll-outsourcing.webp",
                                                alt: "Payroll Outsourcing",
                                                style: {
                                                    width: "28px",
                                                    height: "28px",
                                                    objectFit: "contain"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            className: "svc-tcard-eyebrow",
                                            children: "End-to-End"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                            className: "svc-tcard-title",
                                            children: "Payroll Outsourcing Services"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "svc-tcard-body",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "svc-tcard-desc",
                                            children: "A dedicated team that runs payroll, so your HR can focus on people."
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
                                                        "Fully managed payroll cycles with SLA-driven timelines"
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
                                                        "Employee data collation and pre-validation"
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
                                                        "Filing & distribution of Form 16, returns, and audit-ready reports"
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
                                                src: "/img/icon/payroll-consultants.webp",
                                                alt: "Payroll Consultants",
                                                style: {
                                                    width: "28px",
                                                    height: "28px",
                                                    objectFit: "contain"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            className: "svc-tcard-eyebrow",
                                            children: "Outsourcing"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                            className: "svc-tcard-title",
                                            children: "Payroll Consultants"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "svc-tcard-body",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "svc-tcard-desc",
                                            children: "When you need more than execution, you need optimization."
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
                                                        "Audit of existing payroll practices and gap identification"
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
                                                        "Compliance alignment and risk mitigation"
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
                                                        "Regular updates on changing labor laws and statutory norms"
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
                                children: "Our Proven Payroll Process"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                            className: "bfr-title",
                            children: [
                                "Compliance-Focused. ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                            children: "Tech-Powered. "
                                        }),
                                        " "
                                    ]
                                }),
                                " People-First."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "bfr-sub",
                            children: "A 360\xb0 payroll solution built for precision, compliance, and continuous optimization."
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
                                        children: "Payroll Management"
                                    })
                                }),
                                " Works for Growing Businesses"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "sf-subtext",
                            children: "Priyam Consultancy Services streamlines payroll so you can do what really matters – look after your people and grow. With our accuracy-first approach, we verify every calculation from salaries to deductions, reduce errors, and pay on time. Your employees are paid accurately every time."
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
        q: "What Are The Payroll Management Services/Work A Part Of Your Services?",
        a: "We encompass all details such as employee salaries, tax deductions, leave trackers, payslips, and PF/ESI/TDS filings."
    },
    {
        q: "Is Your Payroll System Cloud Based?",
        a: "Yes! Everything in our payroll management system is cloud based, and accessible 24 hours a day, 7 days a week and with secure logins for the admin role and all employee roles."
    },
    {
        q: "Do You Support Compliance Filings?",
        a: "Absolutely. We ensure monthly, quarterly, and annual compliance filings across PF, ESI, TDS, and labor laws."
    },
    {
        q: "Can You Integrate With Our Current HR Systems?",
        a: "Absolutely. Our system can integrate with most HR systems, and will run seamlessly with data flowing between your systems and automating workflows."
    },
    {
        q: "What Makes PCS A Trustworthy Option For Payroll Management?",
        a: "We provide accuracy, security, expertise in our domain, and compliance-first service. With PCS, you’re getting a partner as opposed to just a vendor."
    },
    {
        q: "Can You Handle Payroll For Remote Teams Across India?",
        a: "Yes! We manage payroll for remote teams, hybrid teams, and multi-state teams all across India and especially ensure compliance with local laws in each state."
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
                        children: "Best Payroll Outsourcing Services Company In Coimbatore "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "description",
                        content: "Get accurate and hassle-free payroll outsourcing services in Coimbatore. We handle payroll processing, compliance, and employee management with expert support. "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "keywords",
                        content: "Payroll Management, Payroll Management Services, Payroll Outsourcing Services, Payroll Processing Service, Payroll Management Consultants, Payroll Management Company, Payroll Management System"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                        rel: "canonical",
                        href: "https://www.priyamconsultancy.com/payroll-management/"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:title",
                        content: "Best Payroll Outsourcing Services Company In Coimbatore "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:description",
                        content: "Get accurate and hassle-free payroll outsourcing services in Coimbatore. We handle payroll processing, compliance, and employee management with expert support. "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:url",
                        content: "https://www.priyamconsultancy.com/payroll-management/"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:image",
                        content: "https://www.priyamconsultancy.com/img/payroll-services.png"
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
                        content: "Best Payroll Outsourcing Services Company In Coimbatore "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "twitter:description",
                        content: "Get accurate and hassle-free payroll outsourcing services in Coimbatore. We handle payroll processing, compliance, and employee management with expert support. "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "twitter:image",
                        content: "https://www.priyamconsultancy.com/img/payroll-services.png"
                    }),
                    schemaData.map((schema, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                            type: "application/ld+json",
                            children: JSON.stringify(schema)
                        }, i))
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "hr-page pg-payroll",
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