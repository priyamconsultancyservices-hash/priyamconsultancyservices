"use strict";
exports.ids = ["2480"];
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
274(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DigitalMarketing)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _emailjs_browser__rspack_import_2 = __webpack_require__(58);
/* import */ var _components_HomePage_CTA__rspack_import_3 = __webpack_require__(9393);
/* import */ var _components_BlogSection__rspack_import_4 = __webpack_require__(3177);
/* import */ var _theme_Layout__rspack_import_5 = __webpack_require__(8328);
/* import */ var _docusaurus_Head__rspack_import_6 = __webpack_require__(3572);



const banner = "/img/custom-web-and-mobile-app.webp";





// ─── Data ───────────────────────────────────────────────────────────────────
const SERVICES = [
    {
        n: "01",
        img: "/img/icon/web-mobile-app-custom-web-dev.webp",
        title: "Custom Web Application Development",
        pills: [
            "On-Page SEO",
            "Link Building",
            "Blog Strategy"
        ],
        desc: "Design and develop secure, scalable, and high-performing web applications with intuitive UI/UX, optimized navigation, and seamless business process integration."
    },
    {
        n: "02",
        img: "/img/icon/web-mobile-app-custom-mobile-dev.webp",
        title: "Custom Mobile Application Development",
        pills: [
            "Reels & Shorts",
            "Community Mgmt",
            "Influencer Tie-ups"
        ],
        desc: "Create native and cross-platform mobile apps for Android and iOS that boost engagement, streamline workflows, and support business scalability."
    },
    {
        n: "03",
        img: "/img/icon/web-mobile-app-maintenance-support.webp",
        title: "Maintenance & End-to-End Support",
        pills: [
            "Search Ads",
            "Retargeting",
            "A/B Testing"
        ],
        desc: "Provide continuous maintenance, updates, and optimization to ensure peak performance, security, and reliability throughout your application lifecycle."
    },
    {
        n: "04",
        img: "/img/icon/web-mobile-app-cross-platform.webp",
        title: "Cross-Platform/Hybrid Web & Mobile Application Development",
        pills: [
            "Drip Campaigns",
            "WhatsApp Broadcasts",
            "Automation"
        ],
        desc: "Build hybrid applications using modern frameworks to deliver consistent performance, faster deployment, and cost-effective scalability across multiple platforms."
    },
    {
        n: "05",
        img: "/img/icon/web-mobile-app-industry-specific.webp",
        title: "Industry-Specific Web & Mobile Application Development",
        pills: [
            "YouTube Ads",
            "Influencer Match",
            "UGC Content"
        ],
        desc: "Deliver tailored web and mobile applications designed to meet the unique operational, compliance, and performance needs of specific industries."
    },
    {
        n: "06",
        img: "/img/icon/web-mobile-app-progressive.webp",
        title: "Progressive Web and Mobile Application Development",
        pills: [
            "GA4 Tracking",
            "Weekly Reports",
            "ROI Dashboards"
        ],
        desc: "Develop responsive Progressive Web Apps (PWAs) that combine web accessibility with mobile app speed, reliability, and offline functionality."
    }
];
const PROCESS_STEPS = [
    {
        n: "01",
        img: "/img/icon/web-mobile-app-process-discovery.webp",
        label: "Discovery",
        title: "Discovery & Assessment",
        desc: "We analyze business requirements, user needs, and technical constraints to design a Custom Web Application Development plan that aligns with your goals and ensures maximum impact.",
        items: [
            "Analyze Requirements",
            "Evaluate Constraints",
            "Identify UserNeeds",
            "Define Objectives"
        ]
    },
    {
        n: "02",
        img: "/img/icon/web-mobile-app-process-strategy.webp",
        label: "Strategy",
        title: "Planning & Strategy",
        desc: "Our team creates a detailed development roadmap, including design, technology stack selection, and integration planning. We ensure scalable Web and Mobile Application Development Services for both current and future needs.",
        items: [
            "Create Roadmaps",
            "Select Technologies",
            "Plan Integrations",
            "Ensure Scalability"
        ]
    },
    {
        n: "03",
        img: "/img/icon/web-mobile-app-process-design.webp",
        label: "Design",
        title: "Design & Development",
        desc: "We develop intuitive, high-performing applications using agile methodology. Every feature is tested for usability, security, and performance to deliver seamless Web and mobile App based on your requirements.",
        items: [
            "Develop Applications",
            "Enhance Usability",
            "Ensure Security",
            "Optimize Performance"
        ]
    },
    {
        n: "04",
        img: "/img/icon/web-mobile-app-process-testing.webp",
        label: "Testing",
        title: "Testing & Quality Assurance",
        desc: "We rigorously test every application for functionality, compatibility, performances and security. Continuous QA ensures the Application is reliable, efficient, smooth running without stoppage and ready for deployment.",
        items: [
            "Test Functionality",
            "Verify Compatibility",
            "Maintain Reliability",
            "Ensure Stability"
        ]
    },
    {
        n: "05",
        img: "/img/icon/web-mobile-app-process-deploy.webp",
        label: "Deployment",
        title: "Deployment & Support",
        desc: "We deploy applications on cloud or on-premises servers while providing continuous support, updates, and maintenance for the applications deployed if required. This ensures long-term performance, scalability, and adaptability.",
        items: [
            "Deploy Applications",
            "Provide Maintenance",
            "Deliver Updates",
            "Support Scalability"
        ]
    }
];
const CARDS = (/* unused pure expression or super */ null && ([
    {
        num: "01",
        img: "/img/wm/process-discovery.png",
        title: "Discover & Audit",
        brief: "We dig deep into your brand, audience, competitors, and existing digital footprint.",
        backLabel: "Phase 01 · Foundation",
        backDesc: "Before a single ad goes live, we map your entire digital ecosystem. No guesswork — only data.",
        items: [
            "Brand & competitor audit",
            "Audience persona research",
            "SEO & website health check",
            "Channel opportunity mapping"
        ],
        duration: "⏱ Week 1"
    },
    {
        num: "02",
        img: "/img/wm/process-strategy.png",
        title: "Strategise & Plan",
        brief: "Your custom 90-day growth roadmap is built — channel by channel, goal by goal.",
        backLabel: "Phase 02 · Blueprint",
        backDesc: "We translate research into a clear, measurable action plan tailored to your business goals.",
        items: [
            "90-day campaign roadmap",
            "KPI & budget allocation",
            "Content calendar creation",
            "Platform & channel selection"
        ],
        duration: "⏱ Week 2"
    },
    {
        num: "03",
        img: "/img/wm/process-design.png",
        title: "Execute & Launch",
        brief: "Campaigns go live with precision — creative assets, targeting, and technical setup all handled.",
        backLabel: "Phase 03 · Launch",
        backDesc: "From ad creatives to landing pages — every element is built, tested, and launched for maximum impact.",
        items: [
            "Ad creative & copywriting",
            "Pixel & tracking setup",
            "Campaign launch & A/B tests",
            "SEO & content publishing"
        ],
        duration: "⏱ Week 3"
    },
    {
        num: "04",
        img: "/img/wm/process-testing.png",
        title: "Optimise & Scale",
        brief: "Continuous data analysis, weekly reporting, and relentless performance improvement.",
        backLabel: "Phase 04 · Growth",
        backDesc: "Campaigns are never \"set and forget\" — we iterate every week to squeeze more ROI from every rupee.",
        items: [
            "Weekly performance reviews",
            "Bid & budget optimisation",
            "Audience expansion & scaling",
            "Monthly ROI report delivery"
        ],
        duration: "⏱ Ongoing"
    }
]));
const faqData = [
    {
        q: "What is web application development?",
        a: "Web application development involves creating interactive, responsive, and scalable applications that run in a web browser. These applications help businesses go beyond a traditional website by supporting operations and user engagement."
    },
    {
        q: "What is Custom Mobile App Development?",
        a: "Custom mobile app development involves building Android or iOS apps designed around your business needs. It helps improve user experience, engagement, and operational efficiency."
    },
    {
        q: "How Is Custom Web Application Development Different from Websites?",
        a: "Unlike static websites, custom web applications are dynamic and interactive. They are built to perform specific business functions, automate workflows, and connect with databases or third-party systems."
    },
    {
        q: "What Can a Custom Web Application Do for Your Business?",
        a: "A custom web application can streamline workflows, improve efficiency, automate tasks, and provide real-time data insights. It helps businesses improve customer experience and scale more effectively."
    },
    {
        q: "How does a custom mobile application work?",
        a: "A custom mobile app runs on smartphones or tablets and connects with servers, databases, and APIs. This allows it to deliver personalized features, updates, and smooth user experiences."
    },
    {
        q: "What industries benefit most from custom web and mobile applications?",
        a: "Industries such as finance, healthcare, education, retail, logistics, and manufacturing can benefit from custom applications that improve operations and user engagement."
    }
];
// ─── Sub-components ──────────────────────────────────────────────────────────
function HeroSection() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "dm-hero",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "dm-hero-left",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "dm-badge",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "dm-badge-dot"
                            }),
                            "Web & Mobile Application"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                        className: "dm-hero-heading",
                        children: [
                            "Custom Web & Mobile   ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: "orange lined",
                                style: {
                                    marginRight: '12px'
                                },
                                children: "Application Solutions"
                            }),
                            "for Your Business"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "dm-hero-sub",
                        children: "We provide end-to-end Custom Web and Mobile Application development solutions, designed to deliver seamless functionality, scalability, and an exceptional user experience. From initial design to development, testing, and integration, our expert team ensures every application aligns with your business goals, and drives operational efficiency."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "dm-hero-actions",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                            className: "dm-btn-fill",
                            href: "/contact-us",
                            children: [
                                "Explore More ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    className: "dm-btn-arrow",
                                    children: "›"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "dm-hero-right",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                        src: banner,
                        alt: "Custom Web & Mobile App Development",
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
                                "Custom   ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "Web & Mobile "
                                }),
                                " Applications"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "PCS delivers application development solutions focused on performance, scalability, and seamless collaboration throughout every stage of the development lifecycle."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "We analyze business requirements, user behavior, and market trends to design customized web and mobile applications aligned with operational goals and user expectations."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "Our agile development approach ensures rapid delivery, seamless integration, optimized user experiences, and high-quality applications that support long-term business growth and efficiency"
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
function ServicesSection() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "dm-svc-section",
        id: "services",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "dm-svc-bg-conic"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "dm-svc-blob dm-svc-blob-1"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "dm-svc-blob dm-svc-blob-2"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "dm-svc-hdr",
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
                            children: "Our Specialized Custom Web & Mobile Application Services"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                        className: "partners-h3-title",
                        children: [
                            "Every Application Tailored.  ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("em", {
                                style: {
                                    color: '#ed8337'
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                    children: "Every Feature Optimized."
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        children: "Priyam Consultancy Services provides Custom Web and Mobile Application Development Company expertise to build web and mobile applications that enhance productivity, usability, and performance across platforms."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "dm-svc-grid",
                children: SERVICES.map((s)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "dm-svc-card",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "dm-svc-body",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                        className: "dm-svc-title",
                                        children: s.title
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        className: "dm-svc-desc",
                                        children: s.desc
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                style: {
                                    marginTop: "auto",
                                    display: "flex",
                                    alignItems: "flex-end",
                                    justifyContent: "space-between",
                                    paddingTop: "1.5rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "dm-svc-n",
                                        style: {
                                            position: "static",
                                            fontSize: "2.8rem",
                                            lineHeight: 1
                                        },
                                        children: s.n
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "dm-svc-icon-wrap",
                                        style: {
                                            position: "static",
                                            flexShrink: 0
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
                                    })
                                ]
                            })
                        ]
                    }, s.n))
            })
        ]
    });
}
function ProcessSection() {
    const [activeStep, setActiveStep] = (0,react__rspack_import_1.useState)(0);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "dm-proc-section",
        id: "process",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "dm-proc-hdr",
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
                                textAlign: 'center',
                                color: '#ed8337'
                            },
                            children: "Our Application Development Process"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                        className: "partners-h3-process",
                        children: [
                            "Structured, Scalable, and  ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("em", {
                                style: {
                                    color: '#ed8337'
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                    children: "Reliable Application  "
                                })
                            }),
                            " Development"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        children: "Our Custom Application Development approach ensures every application is tailored to your business objectives, emphasizing usability, performance, and scalability."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "dm-proc-track",
                children: PROCESS_STEPS.map((step, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: `dm-proc-step${activeStep === i ? " expanded" : ""}`,
                        onClick: ()=>setActiveStep(i),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "dm-proc-collapsed",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        className: "dm-proc-step-n",
                                        children: step.n
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        className: "dm-proc-step-icon-sm",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                            src: step.img,
                                            alt: step.title,
                                            style: {
                                                width: "22px",
                                                height: "22px",
                                                objectFit: "contain"
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        className: "dm-proc-step-vtext",
                                        children: step.label
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "dm-proc-expanded",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "dm-proc-exp-num",
                                        children: step.n
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "dm-proc-exp-top",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "dm-proc-exp-icon",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                    src: step.img,
                                                    alt: step.title,
                                                    style: {
                                                        width: "30px",
                                                        height: "30px",
                                                        objectFit: "contain"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                className: "dm-proc-exp-title",
                                                children: step.title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "dm-proc-exp-desc",
                                                children: step.desc
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
                                                className: "dm-proc-exp-list",
                                                children: step.items.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: item
                                                    }, item))
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, step.n))
            })
        ]
    });
}
const HWW_STEPS = [
    {
        title: "Tailored Development",
        desc: "We build customized applications aligned with your business objectives, workflows, and customer expectations to ensure maximum operational efficiency and performance.",
        center: false,
        img: "/img/icon/web-mobile-app-why-tailored.webp"
    },
    {
        title: "Seamless Integration",
        desc: "Our applications integrate smoothly with existing systems and platforms to create connected, efficient, and unified digital business experiences.",
        center: false,
        img: "/img/icon/web-mobile-app-why-integration.webp"
    },
    {
        title: "User-Centric Design",
        desc: "We design intuitive and engaging interfaces that improve usability, enhance customer interaction, and deliver seamless digital experiences across devices.",
        center: true,
        img: "/img/icon/web-mobile-app-why-design.webp"
    },
    {
        title: "Scalable Performance",
        desc: "Our applications are developed with scalable architecture to support future growth, evolving business needs, and long-term operational flexibility.",
        center: false,
        img: "/img/icon/web-mobile-app-why-scalable.webp"
    }
];
function HowWeWorkSection() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        style: {
            position: "relative",
            background: "#004168",
            overflow: "hidden",
            padding: "60px 5% 81px"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "hww-bg"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "hww-orb hww-orb-1"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "hww-orb hww-orb-2"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                style: {
                    position: "relative",
                    zIndex: 2,
                    margin: "0 auto"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        style: {
                            textAlign: "center",
                            marginBottom: "72px"
                        },
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
                                    children: "Why PCS?"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                                className: "hww-title",
                                children: [
                                    "Plan Strategically. ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        className: "hww-accent",
                                        children: "Build Confidently."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                className: "hww-sub",
                                children: "Ease your business with custom and mobile applications designed to simplify operations, enhance user experience, and accelerate digital transformation."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "hww-flow",
                        children: HWW_STEPS.map((s, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: `hww-step${s.center ? " hww-step-center" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "hww-icon-wrap",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "hww-ring",
                                                style: i % 2 === 1 ? {
                                                    animationDirection: "reverse",
                                                    animationDuration: "18s"
                                                } : {}
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "hww-disc"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "hww-svg",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                    src: s.img,
                                                    alt: s.title,
                                                    style: {
                                                        width: "28px",
                                                        height: "28px",
                                                        objectFit: "contain"
                                                    }
                                                })
                                            }),
                                            i < 3 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "hww-arrow",
                                                style: {
                                                    animationDelay: `${i * 0.4}s`
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                                                    viewBox: "0 0 28 14",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                                                        d: "M0 7h24M18 2l6 5-6 5",
                                                        stroke: "#ed8337",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                        className: "hww-step-title",
                                        children: s.title
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "hww-step-desc",
                                        children: s.desc
                                    })
                                ]
                            }, i))
                    })
                ]
            })
        ]
    });
}
function FAQSection() {
    const [active, setActive] = (0,react__rspack_import_1.useState)(null);
    const toggle = (index)=>{
        setActive(active === index ? null : index);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "faq-section",
        style: {
            background: '#fff',
            padding: '80px 0 0'
        },
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
    });
}
// ─── Root Component ──────────────────────────────────────────────────────────
function DigitalMarketing() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_5/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_6/* ["default"] */.A, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                        children: "Custom Web Application Development Company | Custom App Development "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "description",
                        content: "Expert custom web application development company delivering scalable, secure, and user-friendly apps tailored to your business needs for digital growth. Contact us! "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                        rel: "canonical",
                        href: "https://www.priyamconsultancy.com/web-and-mobile-application/"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "keywords",
                        content: "Business Process Automation, Business Process Automation Services, Business Process Automation Software, Business Automation Software, Business Process Optimisation, Business Automation Solutions, Business Process Automation Solutions, Process Automation Service, BPA Solutions, Business Automation Services Provider"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:title",
                        content: "Custom Web Application Development Company | Custom App Development "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:description",
                        content: "Expert custom web application development company delivering scalable, secure, and user-friendly apps tailored to your business needs for digital growth. Contact us! "
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
                        content: "Custom Web Application Development Company | Custom App Development "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "twitter:description",
                        content: "Expert custom web application development company delivering scalable, secure, and user-friendly apps tailored to your business needs for digital growth. Contact us! "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify({
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
                                            "@id": "https://www.priyamconsultancy.com/web-and-mobile-application/",
                                            "name": "web-and-mobile-application"
                                        }
                                    }
                                ]
                            })
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify({
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
                            })
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "Service",
                                "name": "Custom Web & Mobile Application Development",
                                "description": "Expert custom web application development company delivering scalable, secure, and user-friendly apps tailored to your business needs for digital growth. Contact us!",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "Priyam Consultancy Services",
                                    "url": "https://www.priyamconsultancy.com/"
                                },
                                "serviceType": "Web & Mobile Application Development",
                                "areaServed": "Worldwide",
                                "hasOfferCatalog": {
                                    "@type": "OfferCatalog",
                                    "name": "Web & Mobile App Development Services",
                                    "itemListElement": [
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Custom Web Application Development"
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Mobile App Development (iOS & Android)"
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Cross-Platform App Development"
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "UI/UX Design"
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Full-Stack Development"
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "App Deployment & Support"
                                            }
                                        }
                                    ]
                                },
                                "mainEntityOfPage": {
                                    "@type": "FAQPage",
                                    "mainEntity": [
                                        {
                                            "@type": "Question",
                                            "name": "What is web application development?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Web application development involves creating interactive, responsive, and scalable applications that run in a web browser. These applications help businesses go beyond a traditional website by supporting operations and user engagement."
                                            }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "What is custom mobile app development?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Custom mobile app development involves building Android or iOS apps designed around your business needs. It helps improve user experience, engagement, and operational efficiency."
                                            }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "How is custom web application development different from websites?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Unlike static websites, custom web applications are dynamic and interactive. They are built to perform specific business functions, automate workflows, and connect with databases or third-party systems."
                                            }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "What can a custom web application do for your business?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "A custom web application can streamline workflows, improve efficiency, automate tasks, and provide real-time data insights. It helps businesses improve customer experience and scale more effectively."
                                            }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "How does a custom mobile application work?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "A custom mobile app runs on smartphones or tablets and connects with servers, databases, and APIs. This allows it to deliver personalized features, updates, and smooth user experiences."
                                            }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "What industries benefit most from custom web and mobile applications?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Industries such as finance, healthcare, education, retail, logistics, and manufacturing can benefit from custom applications that improve operations and user engagement."
                                            }
                                        }
                                    ]
                                }
                            })
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify({
                                "@context": "https://schema.org/",
                                "@type": "Product",
                                "name": "web-and-mobile-application",
                                "image": [
                                    "https://www.priyamconsultancy.com/img/custom-web-and-mobile-app.png"
                                ],
                                "description": "Best web and mobile application development services in Coimbatore offering custom web applications, mobile app development, cross-platform solutions, UI/UX design and scalable digital solutions for businesses.",
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
                                    "reviewCount": "5462"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://www.priyamconsultancy.com/web-and-mobile-application/",
                                    "priceCurrency": "USD",
                                    "price": "00.00",
                                    "priceValidUntil": "2026-12-31",
                                    "itemCondition": "https://schema.org/UsedCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "priyamconsultancy.com"
                                    }
                                }
                            })
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                style: {
                    background: "var(--navy)",
                    minHeight: "100vh"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(HeroSection, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ApproachSection, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ServicesSection, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ProcessSection, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(HowWeWorkSection, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(FAQSection, {}),
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