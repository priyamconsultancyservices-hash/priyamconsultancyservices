"use strict";
exports.ids = ["6389"];
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
793(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (HRConsultancy)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _emailjs_browser__rspack_import_2 = __webpack_require__(58);
/* import */ var _components_HomePage_CTA__rspack_import_3 = __webpack_require__(9393);
/* import */ var _theme_Layout__rspack_import_4 = __webpack_require__(8328);
/* import */ var _docusaurus_Head__rspack_import_5 = __webpack_require__(3572);
/* import */ var _components_BlogSection__rspack_import_6 = __webpack_require__(3177);








const banner = "/img/recriutment-services.webp";
const pageUrl = "https://www.priyamconsultancy.com/recruitment-services/";
const imageUrl = "https://www.priyamconsultancy.com/img/recriutment-services.png";
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
                    "@id": "https://www.priyamconsultancy.com/recruitment-services/",
                    "name": "Recruitment Services"
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
        "@id": "https://www.priyamconsultancy.com/recruitment-services/#service",
        "name": "Recruitment Services",
        "serviceType": "Recruitment and Hiring Services",
        "url": "https://www.priyamconsultancy.com/recruitment-services/",
        "description": "Priyam Consultancy provides professional recruitment services including talent acquisition, executive hiring, staffing solutions, candidate screening, workforce planning and end-to-end recruitment support for businesses across India.",
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
        "name": "Recruitment Services in Coimbatore | HR Recruitment Agency",
        "image": [
            "https://www.priyamconsultancy.com/img/recriutment-services.png"
        ],
        "description": "Best recruitment services in Coimbatore offering talent acquisition, executive hiring, staffing solutions, candidate screening and end-to-end recruitment support for businesses.",
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
            "reviewCount": "4387"
        },
        "offers": {
            "@type": "Offer",
            "url": "https://www.priyamconsultancy.com/recruitment-services/",
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
                "name": "What Industries Do You Provide Recruitment Services For?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We cater to many industries including tech, finance, logistics, FMCG, healthcare, and a number of other industries, with vertical-specific recruiters in each."
                }
            },
            {
                "@type": "Question",
                "name": "Do You Just Provide Candidate Profiles Or Do You Provide End To End Hiring?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Both. We are a full-service Recruitment Services Company, that does profile share, end-to-end recruitment and full RPO setups."
                }
            },
            {
                "@type": "Question",
                "name": "Can You Assist With Hiring For Our HR And Compliance Teams?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer HR Recruitment Services which focus on sourcing the best possible talent for internal HR, payroll and people ops roles."
                }
            },
            {
                "@type": "Question",
                "name": "Do You Support Hiring For Remote Or Hybrid Teams?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We can help you to find and onboard remote, hybrid and freelance resources in-line with your organization's model."
                }
            },
            {
                "@type": "Question",
                "name": "How Do Your Recruitment Consultancy Services Work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We help you improve the way you hire—writing JDs, setting interview SOPs, building talent pools, and being your in-house recruitment strategy partner."
                }
            },
            {
                "@type": "Question",
                "name": "How Is PCS Different From Other Recruitment Agencies?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide the depth of a consultancy, the scale of an agency and the ownership of an internal HR partner, and we do it all, smarter and faster."
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
            src: "/img/icon/recruitment-service-payroll.webp",
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
            src: "/img/icon/recruitment-service-recruitment.webp",
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
            src: "/img/icon/recruitment-service-policy.webp",
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
            src: "/img/icon/recruitment-service-customized.webp",
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
            src: "/img/icon/recruitment-service-talent.webp",
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
            src: "/img/icon/recruitment-service-risk-management.webp",
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
            src: "/img/icon/recruitment-service-streamlined-payroll.webp",
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
            src: "/img/icon/recruitment-service-scalable.webp",
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
            src: "/img/icon/recruitment-service-coast-effective.webp",
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
            src: "/img/icon/recruitment-service-process-understand.webp",
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
            src: "/img/icon/recruitment-service-process-strategy.webp",
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
            src: "/img/icon/recruitment-service-process-execution.webp",
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
            src: "/img/icon/recruitment-service-process-feedback.webp",
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
        label: "Discover & Define",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/recruitment-service-discover.webp",
            alt: "Search",
            style: {
                width: "30px",
                height: "30px"
            }
        }),
        title: "Discover & Define",
        desc: "Before sourcing a single profile we immerse ourselves in your business. We get to understand your hiring objectives, dynamics of the team, the structure of the organization and what success looks like in the role, both technically and culturally. We go beyond job descriptions to understand the must-haves, nice-to-haves and red flags.",
        features: [],
        tags: [
            "Understand Hiring Goals",
            "Analyze Team Culture",
            "Identify Role Requirements",
            "Define Success Metrics"
        ]
    },
    {
        label: "Source & Screen",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/recruitment-service-source.webp",
            alt: "Plan",
            style: {
                width: "30px",
                height: "30px"
            }
        }),
        title: "Source & Screen",
        desc: "With clear direction, we kick off our sourcing engine: a combination of corporate talent databases; AI-based tools; niche job boards; and passive candidate networks. But we do more than source resumes. For every candidate sourced, we do a structured screening on skills, attitude, and culture - so we only put the best forward.",
        features: [],
        tags: [
            "Source Qualified Candidates",
            "Access Talent Networks",
            "Conduct Candidate Screening",
            "Shortlist Suitable Professionals"
        ]
    },
    {
        label: "Present & Coordinate",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/recruitment-service-present.webp",
            alt: "Align",
            style: {
                width: "30px",
                height: "30px"
            }
        }),
        title: "Present & Coordinate",
        desc: "We do not merely share resumes – we provide complete profiles of candidates, including summary reports, assessment results and indicators for cultural alignment. We handle the entire interview coordination process from scheduling through feedback collation so that your team can focus on making the right choice rather than the admin burden.",
        features: [],
        tags: [
            "Share Candidate Profiles",
            "Provide Cultural Insights",
            "Manage Interview Scheduling",
            "Organize Recruitment Feedback"
        ]
    },
    {
        label: "Close & Onboard",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/recruitment-service-close.webp",
            alt: "Check",
            style: {
                width: "30px",
                height: "30px"
            }
        }),
        title: "Close & Onboard",
        desc: "Hiring isn’t just the offer. We support negotiations, offer letters, and onboarding that keeps candidates warm and engaged. We pre-join actively manage engagement to minimize drop-offs and support the transitional phase with you and the candidate with confidence.",
        features: [],
        tags: [
            "Support Offer Negotiations",
            "Ensure Smooth Onboarding",
            "Reduce Dropout Risks",
            "Manage Joining Process"
        ]
    },
    {
        label: "Optimize & Support",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/recruitment-service-support.webp",
            alt: "Implement",
            style: {
                width: "30px",
                height: "30px"
            }
        }),
        title: "Optimize & Support",
        desc: "At PCS, successful hiring is an ongoing partnership, not just making an offer. We support you long after acceptance, optimizing strategies to evolve with your business. We also monitor hire effectiveness, gather feedback, and offer actionable insights to continuously improve your recruitment processes.",
        features: [],
        tags: [
            "Monitor Hiring Performance",
            "Improve Recruitment Strategies",
            "Support Workforce Planning",
            "Build Hiring Partnerships"
        ]
    },
    {
        label: "Monitor & Refine",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/recruitment-service-refine.webp",
            alt: "Refine",
            style: {
                width: "30px",
                height: "30px"
            }
        }),
        title: "Monitor & Refine",
        desc: "Recruiting is a fluid process, and we continually strive to keep your hiring practices at the cutting edge of what is happening in the marketplace. Through data-enhanced insights and real-time feedback loops, we consistently evaluate your recruiting efforts and identify applicable ways to refine our process to improve recruiting outcomes.",
        features: [],
        tags: [
            "Evaluate Recruitment Effectiveness",
            "Track Hiring Trends",
            "Refine Hiring Processes",
            "Improve Recruitment Outcomes"
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
                            "Expert Recruitment  Services"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                        className: "hero-heading",
                        children: [
                            "Hire Smarter. Grow ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: "hl lined",
                                children: " Faster"
                            }),
                            " With Recruitment Services."
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                        className: "hero-sub",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                children: "A recruitment partner who understands your business and scales with you."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                children: "Seamless, end-to-end Recruitment solution that saves time and cost."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                children: "Qualified candidates who deliver results from Day 1."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                children: "Precision hiring that reduces attrition and improves team performance."
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
                        width: "95%",
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
                                children: "Our Approach in"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                            className: "ap2-heading",
                            children: [
                                "Human-Centered ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "Hiring"
                                }),
                                " That Aligns With Business Goals"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "From a recruitment service provider to a true partner in growth, PCS supports organizations in building strong, high-performing teams. Our experienced recruitment professionals understand evolving workforce demands and industry expectations. We focus on identifying talent that aligns with both functional needs and long-term vision. Every hiring strategy is structured to deliver quality, speed, and cultural fit. Our goal is to transform recruitment into a competitive advantage."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "We achieve this through customized and proven recruitment solutions backed by deep market expertise. Our extensive talent networks allow us to access the right candidates across industries and functions. Each Recruitment Consultancy engagement is tailored to your unique business requirements."
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
        title: "360° Hiring Solutions",
        desc: "Complete recruitment support covering sourcing, screening, interview coordination, onboarding, and post-hiring assistance for businesses across every growth stage.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/recruitment-service-hiring.webp",
            alt: "icon",
            style: {
                width: "33px",
                height: "33px"
            }
        })
    },
    {
        id: "02",
        // color: "#e03e52",
        bg: "rgba(224,62,82,0.08)",
        title: "Industry-Focused Expertise",
        desc: "Our recruitment strategies are tailored to industry-specific hiring needs, workforce trends, and business expectations for better candidate alignment.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/recruitment-service-industry.webp",
            alt: "icon",
            style: {
                width: "33px",
                height: "33px"
            }
        })
    },
    {
        id: "03",
        // color: "#d97706",
        bg: "rgba(217,119,6,0.08)",
        title: "Tech-Enabled, Human-Focused",
        desc: "We combine advanced recruitment technology with human expertise to deliver efficient hiring experiences without compromising relationship-driven decision-making.",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/recruitment-service-human-focused.webp",
            alt: "icon",
            style: {
                width: "33px",
                height: "33px"
            }
        })
    },
    {
        id: "04",
        // color: "#0d9488",
        bg: "rgba(13,148,136,0.08)",
        title: "Transparent & Scalable",
        desc: "Our recruitment process ensures clear communication, measurable progress, and scalable hiring solutions that adapt to changing business requirements",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/recruitment-service-transparent-scalable.webp",
            alt: "icon",
            style: {
                width: "33px",
                height: "33px"
            }
        })
    }
];
// ── TAB SERVICE DATA (Image 2 style) ────────────────────────────
const tabServicesData = (/* unused pure expression or super */ null && ([
    {
        tab: "Recruitment Consultancy Services",
        title: "Recruitment Consultancy Services",
        desc: "We design effective onboarding programs to integrate new hires smoothly to keep your top talent engaged and committed long-term.",
        points: [
            "Talent pipeline strategy & JD creation",
            "Interview frameworks & SOP design",
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
                                children: "Our Recruitment Services "
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                            className: "hr-h2",
                            style: {
                                textAlign: 'center',
                                color: '#fff'
                            },
                            children: [
                                "Your Hiring Partner,  ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    style: {
                                        color: '#ed8337'
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                        children: "From Role Design "
                                    })
                                }),
                                "  to Rollout"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "svc-subtext",
                            children: "We bridge the gap between people and performance with recruitment strategies built for growth."
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
                                                src: "/img/icon/recruitment-service-talent-acquisition.webp",
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
                                            children: "Recruitment Consultancy Services"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "svc-tcard-body",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "svc-tcard-desc",
                                            children: "We design effective onboarding programs to integrate new hires smoothly to keep your top talent engaged and committed long-term."
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
                                                        "Talent pipeline strategy & effective JD creation"
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
                                                        "Interview frameworks & robust SOP design"
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
                                                        "Hiring audits & ongoing advisory"
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
                                                        "Onboarding & retention strategies"
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
                                                src: "/img/icon/recruitment-service-executive-search.webp",
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
                                            children: "End-to-End Recruitment Services"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "svc-tcard-body",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "svc-tcard-desc",
                                            children: "From job profiling and sourcing to interviews and onboarding, we own the entire hiring lifecycle."
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
                                                        "Structured job profiling & role clarity"
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
                                                        "Sourcing through smart tools & curated networks"
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
                                                        "Assessment frameworks that look beyond resumes"
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
                                                        "Interview management & offer rollouts made seamless"
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
                                                src: "/img/icon/recruitment-service-hr-staffing.webp",
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
                                            children: "Recruitment Process Outsourcing (RPO)"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "svc-tcard-body",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "svc-tcard-desc",
                                            children: "Need help at scale? We plug in as your recruitment engine. We provide expert support for all your hiring needs."
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
                                                        "Partial or full-scale RPO support"
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
                                                        "Bulk hiring, assessment, and onboarding"
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
                                                        "Cost-effective, SLA-driven, and fully integrated"
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
                                                        "Extensive network and deep industry expertise"
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
                                children: "Our Proven Recruitment Process"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                            className: "bfr-title",
                            children: [
                                "Need-Based. ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
                                    children: [
                                        " ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                            children: "Candidate-Centric. "
                                        })
                                    ]
                                }),
                                " Speed-Oriented."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "bfr-sub",
                            children: "We combine deep industry insight, smart technology, and consultative expertise to deliver a hiring experience that’s seamless, structured, and strategically aligned with your business growth."
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
                                "End-to-End Recruitment, ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                        children: "Built for Every"
                                    })
                                }),
                                " Business Stage"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "sf-subtext",
                            children: "At every stage of a company’s development and at any size, we provide flexible solutions to businesses, whether it is an ad hoc or on-demand hire or bulk recruitment, leadership search or full scale RPO. Our thorough structured process goes through recruitment and covers not just role discovery and smart sourcing but the seamless onboarding process and post-hire support giving you confidence every candidate is the right fit and not just a good CV."
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
        q: "What Industries Do You Provide Recruitment Services For?",
        a: "We cater to many industries including tech, finance, logistics, FMCG, healthcare, and a number of other industries, with vertical-specific recruiters in each."
    },
    {
        q: "Do You Just Provide Candidate Profiles Or Do You provide End To End Hiring?",
        a: "Both. We are a full-service Recruitment Services Company, that does profile share, end-to-end recruitment and full RPO setups."
    },
    {
        q: "Can You Assist With Hiring For Our HR And Compliance Teams?",
        a: "Yes, we offer HR Recruitment Services which focus on sourcing the best possible talent for internal HR, payroll and people ops roles."
    },
    {
        q: "Do You Support Hiring For Remote Or Hybrid Teams?",
        a: "Absolutely. We can help you to find and onboard remote, hybrid and freelance resources in-line with your organization’s model."
    },
    {
        q: "How Do Your Recruitment Consultancy Services Work?",
        a: "We help you improve the way you hire—writing JDs, setting interview SOPs, building talent pools, and being your in-house recruitment strategy partner."
    },
    {
        q: "How Is PCS Different From Other Recruitment Agencies?",
        a: "We provide the depth of a consultancy, the scale of an agency and the ownership of an internal HR partner, and we do it all, smarter and faster."
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
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_4/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_5/* ["default"] */.A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                        children: "Recruitment Services Company | Recruitment agency in Coimbatore"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "description",
                        content: " Leading recruitment agency in Coimbatore offering expert hiring solutions, talent acquisition, and staffing services to help businesses build strong teams. Contact us! "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "keywords",
                        content: "Recruitment Services, Recruitment Agency, Recruitment Consultancy Services, Recruitment Services Company, Recruitment Solutions, HR Recruitment Services, HR Consultancy Services"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                        rel: "canonical",
                        href: "https://www.priyamconsultancy.com/recruitment-services/"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:title",
                        content: " Leading recruitment agency in Coimbatore offering expert hiring solutions, talent acquisition, and staffing services to help businesses build strong teams. Contact us! "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:description",
                        content: " Leading recruitment agency in Coimbatore offering expert hiring solutions, talent acquisition, and staffing services to help businesses build strong teams. Contact us! "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:url",
                        content: "https://www.priyamconsultancy.com/recruitment-services/"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:image",
                        content: "https://www.priyamconsultancy.com/img/recriutment-services.png"
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
                        content: "Recruitment Services Company | Recruitment agency in Coimbatore"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "twitter:description",
                        content: " Leading recruitment agency in Coimbatore offering expert hiring solutions, talent acquisition, and staffing services to help businesses build strong teams. Contact us! "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "twitter:image",
                        content: "https://www.priyamconsultancy.com/img/recriutment-services.png"
                    }),
                    schemaData.map((schema, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                            type: "application/ld+json",
                            children: JSON.stringify(schema)
                        }, i))
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "hr-page pg-recruitment",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(HeroSection, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ApproachSection, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ServicesSection, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(TabServiceSection, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(StepFlowSection, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(FAQSection, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_BlogSection__rspack_import_6/* ["default"] */.A, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_HomePage_CTA__rspack_import_3/* ["default"] */.A, {})
                ]
            })
        ]
    });
}


},

};
;