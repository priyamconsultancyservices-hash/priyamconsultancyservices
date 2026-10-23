"use strict";
exports.ids = ["2912"];
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
5758(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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








const banner = "/img/business-process-automation.webp";
// ─── Data ───────────────────────────────────────────────────────────────────
const SERVICES = [
    {
        n: "01",
        img: "/img/icon/bpa-data-migration.webp",
        title: "Data Migration",
        pills: [
            "On-Page SEO",
            "Link Building",
            "Blog Strategy"
        ],
        desc: "We migrate your business data with precision and care, ensuring a smooth transition, complete security, and uninterrupted operations throughout every stage of the process"
    },
    {
        n: "02",
        img: "/img/icon/bpa-workflow-automation.webp",
        title: "Workflow Automation",
        pills: [
            "Reels & Shorts",
            "Community Mgmt",
            "Influencer Tie-ups"
        ],
        desc: "We transform manual, repetitive workflows into automated systems that simplify operations, improve collaboration, visibility across all your business functions."
    },
    {
        n: "03",
        img: "/img/icon/bpa-system-integration.webp",
        title: "System Integration",
        pills: [
            "Search Ads",
            "Retargeting",
            "A/B Testing"
        ],
        desc: "We integrate our solutions with your existing systems to ensure uninterrupted operations and improved efficiency avoiding costly replacements or downtime"
    },
    {
        n: "04",
        img: "/img/icon/bpa-process-assessment.webp",
        title: "Process Assessment & Automation",
        pills: [
            "Drip Campaigns",
            "WhatsApp Broadcasts",
            "Automation"
        ],
        desc: "We evaluate and streamline your business processes, address inefficiencies, and automate repetitive tasks to improve accuracy, efficiency, and overall performance."
    },
    {
        n: "05",
        img: "/img/icon/bpa-document-management.webp",
        title: "Document Management Automation",
        pills: [
            "YouTube Ads",
            "Influencer Match",
            "UGC Content"
        ],
        desc: "We help you digitize and automate document workflows for faster storage, effortless retrieval, and streamlined approvals — ensuring compliance and accessibility."
    },
    {
        n: "06",
        img: "/img/icon/bpa-dashboards-reporting.webp",
        title: "Dashboards and Reporting Solutions",
        pills: [
            "GA4 Tracking",
            "Weekly Reports",
            "ROI Dashboards"
        ],
        desc: "We design and deliver interactive dashboards and reports tailored to your business needs, providing real-time insights for smarter decisions and better performance"
    }
];
const PROCESS_STEPS = [
    {
        n: "01",
        img: "/img/icon/bpa-process-discovery.webp",
        label: "Research",
        title: "Discovery & Assessment",
        desc: "We analyze workflows, repetitive tasks, and operational bottlenecks to design customized Business Automation Services. By understanding your business processes and objectives, we identify opportunities for automation that maximize efficiency, reduce errors, and deliver measurable improvements across all functions.",
        items: [
            "Analyze Workflows",
            "Identify Bottlenecks",
            "Reduce Errors",
            "Improve Efficiency"
        ]
    },
    {
        n: "02",
        img: "/img/icon/bpa-process-planning.webp",
        label: "Strategy",
        title: "Planning & Strategy",
        desc: "We create a detailed Business Process Automation Plan & Strategy, aligning workflows with your business goals. Our strategic planning ensures optimal resource allocation, streamlined processes, and scalable solutions that improve efficiency, reduce costs, and support long-term growth.",
        items: [
            "Align BusinessGoals",
            "Streamline Processes",
            "Optimize Resources",
            "Support Scalability"
        ]
    },
    {
        n: "03",
        img: "/img/icon/bpa-process-implement.webp",
        label: "Create",
        title: "Implementation & Testing",
        desc: "Our team deploys and rigorously tests the applications to ensure accuracy, reliability, and seamless operation. Each workflow and integration is validated for error-free execution, followed by comprehensive user training to ensure smooth adoption and effective utilization across departments.",
        items: [
            "Deploy Applications",
            "Validate Integrations",
            "Ensure Reliability",
            "Conduct UserTraining"
        ]
    },
    {
        n: "04",
        img: "/img/icon/bpa-process-monitoring.webp",
        label: "Launch",
        title: "Monitoring & Optimization",
        desc: "We continuously monitor system performance to identify opportunities for improvement and optimization. Our real-time process enhancements ensure greater efficiency, adaptability, and sustained productivity — maintaining seamless operations across your entire business operations.",
        items: [
            "Track Performance",
            "Enhance Processes",
            "Improve Productivity",
            "Maintain Operations"
        ]
    },
    {
        n: "05",
        img: "/img/icon/bpa-process-support.webp",
        label: "Optimise",
        title: "Continuous Support & Updates",
        desc: "We provide continuous maintenance, updates, and expert SLA-driven support to help your business scale faster and operate seamlessly. Our dedicated team ensures quick turnaround for issue fixes, enhancements, and new requirements — keeping your operations consistently smooth and highly efficient.",
        items: [
            "Provide Maintenance",
            "Deliver Updates",
            "Resolve Issues",
            "Ensure Scalability"
        ]
    }
];
const CARDS = (/* unused pure expression or super */ null && ([
    {
        num: "01",
        img: "/img/bpa/process-discovery.png",
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
        img: "/img/bpa/process-planning.png",
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
        img: "/img/bpa/process-implement.png",
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
        img: "/img/bpa/process-monitoring.png",
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
        q: "What is Business Process Automation?",
        a: "Business Process Automation uses technology to automate repetitive workflows, reduce manual effort, and improve efficiency. It helps businesses focus more on strategic and high-value activities."
    },
    {
        q: "What are the 4 types of business processes?",
        a: "The four types are operational, management, supporting, and development processes. Together, they cover core business activities, strategy, support functions, and innovation."
    },
    {
        q: " What are the benefits of customized Business Process Automation?",
        a: "Customized BPA improves efficiency, reduces errors, lowers costs, enhances compliance, and provides scalable solutions tailored to your business needs."
    },
    {
        q: "What makes up Business Process Automation?",
        a: "BPA includes workflow automation, RPA, data management, system integration, and analytics. These elements work together to streamline operations and provide useful insights"
    },
    {
        q: "What are the 5 levels of automation?",
        a: "The five levels are manual, assisted, partial, high, and full automation. They range from fully human-driven tasks to completely autonomous workflows."
    },
    {
        q: "How can Sterlo be a valuable Business Process Automation tool?",
        a: "Sterlo is a no-code platform that helps businesses automate workflows, optimize processes, and make data-driven decisions without needing coding expertise."
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
                            "Improve Efficiency"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                        className: "dm-hero-heading",
                        children: [
                            "Streamline Business",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: "orange lined",
                                style: {
                                    marginLeft: '10PX'
                                },
                                children: "Operations "
                            }),
                            "   with Automation"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "dm-hero-sub",
                        children: "We provide comprehensive Business Process Automation Solutions that streamline workflows, eliminate manual tasks, and boost efficiency across your organization. From document management and approvals to reporting, we integrate every process for seamless operations, improved accuracy, and real-time visibility."
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
                        alt: "Business Process Automation",
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
                                "Business  ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "Process Automation"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "PCS follows a consultative and technology-driven approach to Business Process Automation focused on improving operational efficiency, scalability, and long-term business performance."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "We work closely with teams to assess workflows, identify bottlenecks, and design structured automation strategies aligned with business objectives and operational requirements."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "From implementation to continuous optimization, PCS builds integrated and data-driven workflows that reduce manual effort, improve accuracy, and strengthen process consistency across departments."
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
                            children: "Our Specialized Business Process Automation Services"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                        className: "partners-h3-title",
                        children: [
                            "Every Task Automated.  ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("em", {
                                style: {
                                    color: '#ed8337'
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                    children: "Every Process Optimized."
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        children: "Priyam Consultancy Services delivers Business Process Automation solutions that simplify operations, eliminate inefficiencies, and enhance productivity — helping businesses achieve accuracy, agility, and sustainable growth."
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
                            children: "Our Automation Execution Process"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                        className: "partners-h3-process",
                        children: [
                            "Structured,  ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("em", {
                                style: {
                                    color: '#ed8337'
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                    children: "Intelligent, "
                                })
                            }),
                            " and Reliable Automation"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        children: "Our Process Automation Services are tailored to your unique business needs, focusing on efficiency, accuracy, and scalability to deliver measurable results. We streamline complex workflows, integrate intelligent tools, and enhance productivity, ensuring your operations run seamlessly and adapt effortlessly to growth and innovation."
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
        title: "Tailored Solutions",
        desc: "We develop customized automation solutions aligned with your business workflows, operational requirements, and long-term efficiency and scalability goals.",
        center: false,
        img: "/img/icon/bpa-why-tailored.webp"
    },
    {
        title: "Seamless Integration",
        desc: "Our systems integrate smoothly with existing tools and platforms to improve workflow efficiency, connectivity, and operational performance across departments.",
        center: false,
        img: "/img/icon/bpa-why-integration.webp"
    },
    {
        title: "Insight-Driven Decisions",
        desc: "We leverage real-time analytics and data insights to support accurate decision-making, operational visibility, and sustainable business growth strategies.",
        center: true,
        img: "/img/icon/bpa-why-insights.webp"
    },
    {
        title: "Ongoing Optimization",
        desc: "Provides continuous monitoring, support, and process improvements to ensure automation systems remain efficient, scalable, and performance-focused over time.",
        center: false,
        img: "/img/icon/bpa-why-optimize.webp"
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
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "partners-eyebrow",
                                    style: {
                                        marginBottom: '20px',
                                        textAlign: 'center'
                                    },
                                    children: "Why PCS?"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                                className: "hww-title",
                                children: [
                                    "Plan Smart. ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        className: "hww-accent",
                                        children: "Automate Confidently."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                className: "hww-sub",
                                children: "Transform your workflows, reduce errors, and boost efficiency with tailored Business Process Automation Solutions designed to drive growth and operational excellence."
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
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
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
                        children: "Business Process Automation | Improve Efficiency Fast "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "description",
                        content: "Streamline operations with Business Process Automation to boost efficiency, reduce costs, and improve accuracy with smart workflow solutions. "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                        rel: "canonical",
                        href: "https://www.priyamconsultancy.com/business-process-automation/"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "keywords",
                        content: "Business Process Automation, Business Process Automation Services, Business Process Automation Software, Business Automation Software, Business Process Optimisation, Business Automation Solutions, Business Process Automation Solutions, Process Automation Service, BPA Solutions, Business Automation Services Provider"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:title",
                        content: "Business Process Automation | Improve Efficiency Fast "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        property: "og:description",
                        content: "Streamline operations with Business Process Automation to boost efficiency, reduce costs, and improve accuracy with smart workflow solutions. "
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
                        content: "Business Process Automation | Improve Efficiency Fast "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        name: "twitter:description",
                        content: "Streamline operations with Business Process Automation to boost efficiency, reduce costs, and improve accuracy with smart workflow solutions. "
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
                                            "@id": "https://www.priyamconsultancy.com/business-process-automation/",
                                            "name": "business-process-automation"
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
                                "name": "Business Process Automation",
                                "description": "Streamline operations with Business Process Automation to boost efficiency, reduce costs, and improve accuracy with smart workflow solutions.",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "Priyam Consultancy Services",
                                    "url": "https://www.priyamconsultancy.com/"
                                },
                                "serviceType": "Business Process Automation",
                                "areaServed": "Worldwide",
                                "hasOfferCatalog": {
                                    "@type": "OfferCatalog",
                                    "name": "Business Process Automation Services",
                                    "itemListElement": [
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Workflow Automation"
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Robotic Process Automation (RPA)"
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Process Consulting & Strategy"
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Integration & Implementation"
                                            }
                                        }
                                    ]
                                },
                                "mainEntityOfPage": {
                                    "@type": "FAQPage",
                                    "mainEntity": [
                                        {
                                            "@type": "Question",
                                            "name": "What is Business Process Automation?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Business Process Automation uses technology to automate repetitive workflows, reduce manual effort, and improve efficiency. It helps businesses focus more on strategic and high-value activities."
                                            }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "What are the 4 types of business processes?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "The four types are operational, management, supporting, and development processes. Together, they cover core business activities, strategy, support functions, and innovation."
                                            }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "What are the 5 levels of automation?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "The five levels are manual, assisted, partial, high, and full automation. They range from fully human-driven tasks to completely autonomous workflows."
                                            }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "What are the benefits of customized Business Process Automation?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Customized BPA improves efficiency, reduces errors, lowers costs, enhances compliance, and provides scalable solutions tailored to your business needs."
                                            }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "What makes up Business Process Automation?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "BPA includes workflow automation, RPA, data management, system integration, and analytics. These elements work together to streamline operations and provide useful insights."
                                            }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "How can Sterlo be a valuable Business Process Automation tool?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Sterlo is a no-code platform that helps businesses automate workflows, optimize processes, and make data-driven decisions without needing coding expertise."
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
                                "name": "business-process-automation",
                                "image": [
                                    "https://www.priyamconsultancy.com/img/digital-transformation.png"
                                ],
                                "description": "Best business process automation services in Coimbatore offering workflow automation, task automation, operational efficiency improvement, business system integration and digital process management solutions for businesses.",
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
                                    "reviewCount": "5283"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://www.priyamconsultancy.com/business-process-automation/",
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