"use strict";
exports.ids = ["6882"];
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
5288(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DigitalTransformationPage)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _emailjs_browser__rspack_import_2 = __webpack_require__(58);
/* import */ var _components_HomePage_CTA__rspack_import_3 = __webpack_require__(9393);
/* import */ var _components_BlogSection__rspack_import_4 = __webpack_require__(3177);
/* import */ var _theme_Layout__rspack_import_5 = __webpack_require__(8328);
/* import */ var _docusaurus_Head__rspack_import_6 = __webpack_require__(3572);


const logovideo = "/img/partner-dt.mp4";






const banner = "/img/digital-transformation.webp";
const pageUrl = "https://www.priyamconsultancy.com/digital-transformation/";
const imageUrl = "https://www.priyamconsultancy.com/img/digital-transformation.png";
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
                    "@id": "https://www.priyamconsultancy.com/digital-transformation/",
                    "name": "Digital Transformation"
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
        "@id": "https://www.priyamconsultancy.com/digital-transformation/#service",
        "name": "Digital Transformation",
        "serviceType": "Digital Transformation Services",
        "url": "https://www.priyamconsultancy.com/digital-transformation/",
        "description": "Priyam Consultancy provides professional digital transformation services including business process digitization, workflow automation, technology consulting, digital strategy implementation, operational optimization and business growth solutions across India.",
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
        "name": "Digital Transformation Services in Coimbatore",
        "image": [
            "https://www.priyamconsultancy.com/img/digital-transformation.png"
        ],
        "description": "Best digital transformation services in Coimbatore offering business process digitization, workflow automation, digital strategy implementation, technology consulting and operational optimization solutions for businesses.",
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
            "reviewCount": "5124"
        },
        "offers": {
            "@type": "Offer",
            "url": "https://www.priyamconsultancy.com/digital-transformation/",
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
                "name": "What does a digital transformation agency do?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A digital transformation agency helps businesses adopt digital tools, automate workflows, and modernize operations to improve efficiency, scalability, and customer experience."
                }
            },
            {
                "@type": "Question",
                "name": "What is a digital transformation agency?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is a consulting and implementation partner that guides organizations through strategy, technology adoption, and process optimization for long-term digital growth."
                }
            },
            {
                "@type": "Question",
                "name": "What does digital transformation mean for businesses?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Digital transformation means rethinking how a business operates, delivers value, and interacts with customers through modern technologies and data-driven strategies."
                }
            },
            {
                "@type": "Question",
                "name": "How can I tell if my company is ready for digital transformation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can assess your current technology, workflows, team adaptability, and leadership support to understand how prepared your company is for transformation."
                }
            },
            {
                "@type": "Question",
                "name": "What services are included in a digital transformation package?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A standard package may include strategy consulting, process automation, data analytics, cloud adoption, digital marketing, and integration of advanced technologies like AI and RPA."
                }
            },
            {
                "@type": "Question",
                "name": "Which companies are examples of digital transformation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Companies like Amazon, Netflix, and Tesla are often cited as examples because they continuously use digital technologies to improve operations and customer engagement."
                }
            }
        ]
    }
];
/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */ const SERVICES = [
    {
        img: "/img/icon/dt-business-process-automation.webp",
        tag: "Automate",
        color: "#ed8337",
        title: "Business Process Automation",
        desc: "Streamline workflows, reduce manual tasks, and improve efficiency using intelligent automation solutions tailored to your business operations and long-term growth.",
        points: [
            "Streamlining",
            "Automation",
            "Efficiency",
            "Optimization"
        ]
    },
    {
        img: "/img/icon/dt-custom-web-mobile-apps.webp",
        tag: "Build",
        color: "#ed8337",
        title: "Custom Web & Mobile Applications",
        desc: "Design and deploy user-focused applications built for your unique business requirements. From development to integration, we ensure functionality, scalability, and a superior user experience.",
        points: [
            "Scalability",
            "Security",
            "Integration",
            "Experience"
        ]
    },
    {
        img: "/img/icon/dt-data-analytics.webp",
        tag: "Analyse",
        color: "#ed8337",
        title: "Data Analytics",
        desc: "Transform raw data into actionable insights that enable smarter decisions, uncover opportunities, and optimize performance across all areas of your business.",
        points: [
            "Insights",
            "Forecasting",
            "Tracking",
            "Intelligence"
        ]
    }
];
const PROCESS_STEPS = [
    {
        num: "01",
        img: "/img/icon/dt-assessment-strategy.webp",
        color: "#ed8337",
        title: "Assessment & Strategy Design",
        shortDesc: "We assess existing workflows, systems, and business operations to identify gaps and create customized digital transformation strategies aligned with organizational goals and growth plans.",
        fullDesc: "Based on our analysis, we design a digital transformation strategy that aligns with your business objectives, operational needs, and growth vision. Every recommendation is customized to maximize ROI and operational efficiency. "
    },
    {
        num: "02",
        img: "/img/icon/dt-solution-design.webp",
        color: "#0171a4",
        title: "Solution Design",
        shortDesc: "We design scalable applications, automation tools, and integrated digital solutions focused on improving efficiency, user experience, and operational productivity across business functions.",
        fullDesc: "Our focus is on creating solutions that are intuitive, responsive, and engaging. From UI/UX design to backend architecture, we ensure that your team and customers enjoy a seamless digital experience."
    },
    {
        num: "03",
        img: "/img/icon/dt-implementation.webp",
        color: "#27ae60",
        title: "Implementation",
        shortDesc: "Our team manages seamless deployment, system integration, data migration, testing, and training to ensure smooth digital transformation with minimal operational disruption.",
        fullDesc: "The PCS team works closely with stakeholders to minimize disruption and ensure a smooth transition. Training, documentation, and testing are built into every step, ensuring teams quickly adapt and start realizing the benefits of digital transformation."
    },
    {
        num: "04",
        img: "/img/icon/dt-monitoring-analytics.webp",
        color: "#9b59b6",
        title: "Monitoring, Analytics & Continuous Improvement",
        shortDesc: "We track performance through analytics, optimize digital systems continuously, and provide ongoing support to maintain scalability, efficiency, and long-term business adaptability.",
        fullDesc: "Insights from analytics are used to refine processes, applications, and workflows. We continuously optimize digital systems to ensure they evolve with business growth and changing market demands."
    }
];
const faqData = [
    {
        q: " What does a digital transformation agency do?",
        a: "A digital transformation agency helps businesses adopt digital tools, automate workflows, and modernize operations to improve efficiency, scalability, and customer experience."
    },
    {
        q: "What is a digital transformation agency?",
        a: "It is a consulting and implementation partner that guides organizations through strategy, technology adoption, and process optimization for long-term digital growth."
    },
    {
        q: "What does digital transformation mean for businesses?",
        a: "Digital transformation means rethinking how a business operates, delivers value, and interacts with customers through modern technologies and data-driven strategies."
    },
    {
        q: " How can I tell if my company is ready for digital transformation?",
        a: "You can assess your current technology, workflows, team adaptability, and leadership support to understand how prepared your company is for transformation."
    },
    {
        q: "What services are included in a digital transformation package?",
        a: "A standard package may include strategy consulting, process automation, data analytics, cloud adoption, digital marketing, and integration of advanced technologies like AI and RPA."
    },
    {
        q: "Which companies are examples of digital transformation?",
        a: "Companies like Amazon, Netflix, and Tesla are often cited as examples because they continuously use digital technologies to improve operations and customer engagement"
    }
];
/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */ function DigitalTransformationPage() {
    // ✅ All useState hooks inside the component
    const [active, setActive] = (0,react__rspack_import_1.useState)(null);
    const [form, setForm] = (0,react__rspack_import_1.useState)({
        name: "",
        email: "",
        phone: "",
        company: "",
        msg: ""
    });
    const toggle = (i)=>setActive(active === i ? null : i);
    const handleChange = (e)=>setForm({
            ...form,
            [e.target.name]: e.target.value
        });
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
        _emailjs_browser__rspack_import_2["default"].send("service_8xw6k3r", "template_jarui36", templateParams, "XWRnXi4hK2SvmRG3q").then(()=>{
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
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_5/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_6/* ["default"] */.A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                        children: "Digital Transformation Services Company in India | PCS  "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "description",
                        content: "Top digital transformation services company in India helping businesses adopt automation, AI, cloud, and data-driven solutions for growth and innovation."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "keywords",
                        content: "Digital Transformation Agency, Digital Transformation Consulting, Digital Transformation Company, Digital Transformation Services, Digital Transformation Technologies, Digital Transformation Strategies, Digital Transformation Solutions, Digital Transformation Company in India, Digital Transformation Services In India"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                        rel: "canonical",
                        href: "https://www.priyamconsultancy.com/digital-transformation/"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:title",
                        content: "Digital Transformation Services Company in India | PCS "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:description",
                        content: "Top digital transformation services company in India helping businesses adopt automation, AI, cloud, and data-driven solutions for growth and innovation."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:url",
                        content: "https://www.priyamconsultancy.com/digital-transformation/"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:image",
                        content: "https://www.priyamconsultancy.com/img/digital-transformation.png"
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
                        content: "Digital Transformation Services Company in India | PCS "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "twitter:description",
                        content: "Top digital transformation services company in India helping businesses adopt automation, AI, cloud, and data-driven solutions for growth and innovation."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "twitter:image",
                        content: "https://www.priyamconsultancy.com/img/digital-transformation.png"
                    }),
                    schemaData.map((schema, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                            type: "application/ld+json",
                            children: JSON.stringify(schema)
                        }, i))
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                        className: "dt-hero",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "dt-orb dt-orb-1"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "dt-orb dt-orb-2"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                style: {
                                    position: "relative",
                                    zIndex: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    paddingBottom: "4rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "dt-badge",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "dt-badge-dot"
                                            }),
                                            "Digital Transformation "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                                        className: "dt-hero-h",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "orange",
                                                style: {
                                                    marginLeft: '10px'
                                                },
                                                children: "Digital Transformation"
                                            }),
                                            "  for Maximum Business Impact"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        className: "dt-hero-sub",
                                        children: "Starting with a deep understanding of your business, goals, and growth ambitions, we design tailored digital solutions that remove bottlenecks, streamline workflows, enhance efficiency, and drive seamless, measurable, and lasting transformation across every level of your organization for sustainable growth and long-term success."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "dt-hero-actions",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                            className: "dt-btn",
                                            href: "/contact-us",
                                            children: "Explore More ›"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                style: {
                                    position: "relative",
                                    zIndex: 2,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                    src: banner,
                                    alt: "Digital Transformation",
                                    style: {
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain"
                                    }
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
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
                                                    textAlign: 'start'
                                                },
                                                children: "Our Approach in"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                                            className: "ap2-heading",
                                            children: [
                                                "Digital ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                    children: "Transformation"
                                                }),
                                                " Services"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            className: "ap-intro",
                                            children: "Modern businesses rely on speed, operational efficiency, and data-driven decision-making to remain competitive and achieve sustainable growth in rapidly evolving digital environments."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            className: "ap-intro",
                                            children: "We implement digital solutions that optimize workflows, improve customer interactions, automate processes, and deliver measurable business outcomes through structured and scalable technology strategies."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            className: "ap-intro",
                                            children: "From automation to analytics and custom applications, we manage technical execution while helping businesses stay agile, innovative, and future-ready in changing market conditions."
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
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                        className: "dt-services",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "dt-svc-hdr",
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
                                                color: '#ed8337'
                                            },
                                            children: "Our Specialized Digital Transformation Services"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                                        className: "pr-heading",
                                        children: [
                                            "Efficient. ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                style: {
                                                    color: '#ed8337'
                                                },
                                                children: "Seamless."
                                            }),
                                            " Impactful."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        children: "From workflow automation to custom applications and data analytics, we design solutions that optimize operations, reduce manual effort, and deliver measurable business outcomes tailored to your unique objectives."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "dt-svc-grid",
                                children: SERVICES.map((s, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "dt-svc-card",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "dt-svc-deco",
                                                style: {
                                                    background: `${s.color}08`
                                                }
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "dt-svc-bar",
                                                style: {
                                                    background: s.color
                                                }
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "dt-svc-icon",
                                                style: {
                                                    background: `${s.color}15`,
                                                    border: `1px solid ${s.color}30`
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                    src: s.img,
                                                    alt: s.title,
                                                    style: {
                                                        width: "32px",
                                                        height: "32px",
                                                        objectFit: "contain"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "dt-svc-tag",
                                                style: {
                                                    color: s.color
                                                },
                                                children: s.tag
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                children: s.title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: s.desc
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "dt-svc-pts",
                                                children: s.points.map((pt, j)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        className: "dt-svc-chip",
                                                        style: {
                                                            background: `${s.color}10`,
                                                            color: s.color,
                                                            border: `1px solid ${s.color}30`
                                                        },
                                                        children: pt
                                                    }, j))
                                            })
                                        ]
                                    }, i))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                        className: "dt-process",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "dt-proc-bg"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "dt-proc-hdr",
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
                                                textAlign: 'start',
                                                color: '#ed8337'
                                            },
                                            children: "Our Proven Process For Digital Transformation"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                                        className: "pr-heading-process",
                                        children: [
                                            "How We ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "accent",
                                                style: {
                                                    color: '#ed8337'
                                                },
                                                children: "Transform"
                                            }),
                                            " Your Business"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        children: "A structured, four-phase approach that takes you from discovery to continuous improvement."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "dt-proc-grid",
                                children: PROCESS_STEPS.map((s, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "dt-proc-card",
                                        style: {
                                            borderTop: `3px solid ${s.color}80`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "dt-flip-num",
                                                children: s.num
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "dt-flip-ico",
                                                style: {
                                                    background: `${s.color}20`,
                                                    border: `1px solid ${s.color}40`
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                    src: s.img,
                                                    alt: s.title,
                                                    style: {
                                                        width: "32px",
                                                        height: "32px",
                                                        objectFit: "contain"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                className: "dt-flip-ttl",
                                                children: s.title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "dt-flip-dsc",
                                                children: s.shortDesc
                                            })
                                        ]
                                    }, i))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                        className: "dt-video-section",
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
                                        textAlign: 'start'
                                    },
                                    children: "Implementation Partners"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                                className: "dt-video-title",
                                children: [
                                    "Empowering Your  ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        children: " Growth Through Seamless "
                                    }),
                                    " Technology Integration"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "dt-video-wrap",
                                style: {
                                    marginTop: '50px'
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("video", {
                                    src: logovideo,
                                    alt: "logo",
                                    className: "logo-gif",
                                    autoPlay: true,
                                    muted: true,
                                    loop: true,
                                    playsInline: true
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                        className: "faq-section",
                        style: {
                            padding: '80px 0 0'
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                style: {
                                    textAlign: "center",
                                    marginBottom: "12px"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                    className: "partners-eyebrow",
                                    children: "Frequently Asked Questions"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "container",
                                style: {
                                    width: '100%'
                                },
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
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_BlogSection__rspack_import_4/* ["default"] */.A, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_HomePage_CTA__rspack_import_3/* ["default"] */.A, {})
                ]
            })
        ]
    });
}


},

};
;