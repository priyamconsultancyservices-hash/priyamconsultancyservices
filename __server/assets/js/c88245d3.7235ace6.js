"use strict";
exports.ids = ["2627"];
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
1844(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (PcsSmmPage)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _emailjs_browser__rspack_import_2 = __webpack_require__(58);
/* import */ var _components_HomePage_CTA__rspack_import_3 = __webpack_require__(9393);
/* import */ var _components_BlogSection__rspack_import_4 = __webpack_require__(3177);
/* import */ var _theme_Layout__rspack_import_5 = __webpack_require__(8328);
/* import */ var _docusaurus_Head__rspack_import_6 = __webpack_require__(3572);








const banner = "/img/content-marketing.webp";
// ─── useInView hook ───────────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
    const ref = (0,react__rspack_import_1.useRef)(null);
    const [visible, setVisible] = (0,react__rspack_import_1.useState)(false);
    (0,react__rspack_import_1.useEffect)(()=>{
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e])=>{
            if (e.isIntersecting) {
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
// ─── Data ─────────────────────────────────────────────────────────────────────
const SERVICES = [
    {
        num: "01",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/svc-content-strategy.webp",
            alt: "Content Strategy and Planning",
            width: "28",
            height: "28"
        }),
        subtitle: "Brand Presence",
        title: "Content Strategy & Planning",
        desc: "A strong content marketing strategy forms the backbone of success. We create structured calendars, keyword clusters, and topic funnels aligned with your business goals."
    },
    {
        num: "02",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/svc-content-audits.webp",
            alt: "Content Audits and Optimization",
            width: "28",
            height: "28"
        }),
        subtitle: "Visual Identity",
        title: "Content Audits & Optimization",
        desc: "We enhance your existing content assets by auditing, updating, and optimizing them for better rankings and engagement."
    },
    {
        num: "03",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/svc-seo-content.webp",
            alt: "SEO Content Writing",
            width: "28",
            height: "28"
        }),
        subtitle: "Paid Campaigns",
        title: "SEO Content Writing",
        desc: "Our content marketing services ensure your content ranks and resonates. We balance SEO with readability to improve performance."
    },
    {
        num: "04",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/svc-website-copy.webp",
            alt: "Website and Landing Page Copy",
            width: "28",
            height: "28"
        }),
        subtitle: "Community Building",
        title: "Website & Landing Page Copy",
        desc: "High-converting content is essential for success. Our content marketing approach ensures every page drives action and improves conversions."
    },
    {
        num: "05",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/svc-thought-leadership.webp",
            alt: "Thought Leadership and Blogs",
            width: "28",
            height: "28"
        }),
        subtitle: "Partnerships",
        title: "Thought Leadership & Blogs",
        desc: "Build authority with impactful content marketing. We create research-driven blogs that position your brand as an industry leader."
    },
    {
        num: "06",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/svc-social-email-content.webp",
            alt: "Content for Social and Email",
            width: "28",
            height: "28"
        }),
        subtitle: "Insights & ROI",
        title: "Content for Social & Email",
        desc: "Extend your content marketing reach across channels. From social media to email campaigns, we keep your audience engaged."
    }
];
const PROCESS_STEPS = [
    {
        step: "01",
        title: "Discover",
        phase: "Brand Audit",
        desc: "We begin by understanding your brand, business goals, audience segments, market positioning, and competitive landscape in detail. This phase helps us define your unique value proposition and align your content marketing direction with measurable business objectives and long-term brand communication goals. Every successful content marketing strategy starts with complete clarity and strategic understanding.",
        bullets: []
    },
    {
        step: "02",
        title: "Research & Analyze",
        phase: "Custom Roadmap",
        desc: "Our team conducts in-depth research including keyword analysis, search intent mapping, competitor benchmarking, audience behavior study, and content gap identification. We also evaluate industry trends, and content performance opportunities to create a stronger strategic direction. This ensures your content marketing efforts are not only relevant and engaging but also strategically positioned to outperform competitors and long-term digital authority. ",
        bullets: []
    },
    {
        step: "03",
        title: "Plan & Strategize",
        phase: "Content Production",
        desc: "Based on gathered insights, we develop a structured roadmap for your content marketing services aligned with business priorities and audience intent. This includes content calendars, topic clusters, SEO frameworks, funnel-based content planning, campaign structures, and strategic distribution methods designed to maximize reach, engagement, and conversion opportunities consistently across platforms.",
        bullets: []
    },
    {
        step: "04",
        title: "Create & Refine",
        phase: "Full Execution",
        desc: "Our writers, editors, designers, and strategists collaborate closely to produce high-quality content marketing assets tailored to your brand voice. Each content piece is carefully crafted to maintain consistency while being optimized for SEO, readability, engagement, and user experience. Multiple review stages ensure accuracy, clarity, messaging quality, and stronger conversion effectiveness throughout every campaign.",
        bullets: []
    },
    {
        step: "05",
        title: "Publish & Optimize",
        phase: "Continuous Growth",
        desc: "Publishing content is only the beginning of our continuous optimization process. We consistently monitor performance metrics such as keyword rankings, website traffic, engagement rates, user behavior, and conversions to measure effectiveness accurately. As a proactive content marketing agency, we regularly refine and optimize your content marketing assets to improve visibility, sustain growth, and deliver long-term business impact.",
        bullets: []
    }
];
const HOW_WE_WORK = [
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hww-strategic-planning.webp",
            alt: "Strategic Planning",
            width: "28",
            height: "28"
        }),
        title: "Strategic Planning",
        desc: "Every piece of content is backed by a well-thought-out strategy. We ensure everything we create is tied to a clear goal—ranking, converting, or educating."
    },
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hww-defined-roles.webp",
            alt: "Defined Roles and Collaboration",
            width: "28",
            height: "28"
        }),
        title: "Defined Roles & Collaboration",
        desc: "From content strategists and writers to editors and SEO analysts—each expert owns their role. With clear responsibilities, we ensure seamless execution and timely delivery."
    },
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/review-quality-control.webp",
            alt: "Thorough Review and Quality Control",
            width: "28",
            height: "28"
        }),
        title: "Thorough Review & Quality Control",
        desc: "Before anything goes live, it passes through multiple layers of quality checks. From fact-checking to formatting, we deliver nothing but polished, high-impact content."
    }
];
const faqData = [
    {
        q: "What does content marketing do for my business?",
        a: "Content marketing helps businesses build brand awareness, improve audience engagement, increase website traffic, and generate qualified leads through valuable and strategic content. It strengthens credibility, supports SEO performance, and helps businesses communicate their expertise effectively across digital platforms."
    },
    {
        q: "Do you write content for specific industries?",
        a: "We create industry-specific content for sectors including healthcare, technology, ecommerce, consulting, construction, finance, retail, and professional services. Our content strategies are tailored to match industry trends, audience behavior, business goals, and brand communication requirements for maximum relevance and impact."
    },
    {
        q: "Can you optimize existing content?",
        a: "Yes, we optimize existing content by improving structure, readability, SEO performance, keyword relevance, and audience engagement. Our optimization process helps strengthen search visibility, enhance user experience, update outdated information, and improve overall content effectiveness across digital platforms and search engines."
    },
    {
        q: "Do you provide blog writing services?",
        a: "We provide professional blog writing services focused on SEO, audience engagement, and brand positioning. Our blogs are strategically created to improve website traffic, establish industry authority, support digital marketing goals, and provide valuable information that connects with your target audience."
    },
    {
        q: "Can content marketing improve SEO?",
        a: " Yes, content marketing plays a major role in improving SEO by targeting relevant keywords, increasing website engagement, strengthening internal linking, and generating valuable search-focused content. High-quality content helps improve search rankings, organic traffic, visibility, and long-term digital authority across search engines."
    },
    {
        q: "How do you decide what content to create?",
        a: " We decide content strategies based on your business goals, target audience, industry trends, competitor analysis, keyword research, and platform performance. Our approach focuses on creating relevant, audience-focused content that improves engagement, search visibility, lead generation, and overall digital marketing performance."
    }
];
// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
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
                            "Authority Building "
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                        className: "hero-heading",
                        style: {
                            fontWeight: '600'
                        },
                        children: [
                            "Turn Content into",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: "hl lined",
                                children: "Conversions"
                            }),
                            " with the Content Marketing"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "hero-sub",
                        children: "At PCS, content marketing isn’t just about writing — it’s about creating value that drives results. As a performance-focused content marketing agency, we deliver content marketing services that attract, engage, and convert your ideal audience.        "
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
                    alt: "Content Marketing Illustration",
                    className: "hero-img"
                })
            })
        ]
    });
}
// ─── Approach + Form ──────────────────────────────────────────────────────────
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
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "Strategic Content "
                                }),
                                " That Drives Search, Shares & Sales"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "Great content marketing starts with understanding your brand identity, business positioning, and long-term communication goals. We ensure every message reflects your voice, values, audience expectations, and overall brand direction consistently."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "Our content marketing services are driven by detailed research, audience insights, competitor analysis, and market trends. This helps us create performance-focused campaigns that deliver relevance, engagement, visibility, and measurable business impact."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "Whether your goal is SEO growth, lead generation, or audience engagement, our content marketing approach combines storytelling with strategic optimization. Every content asset is crafted to maximize reach, conversions, and brand authority."
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
// ─── Services ─────────────────────────────────────────────────────────────────
function ServicePanel({ svc, index }) {
    const [ref, visible] = useInView(0.1);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        ref: ref,
        className: `smm-svc-panel${visible ? " vis" : ""}`,
        style: {
            transitionDelay: `${0.05 + index * 0.07}s`
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "smm-sp-slash"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "smm-sp-ghost",
                children: svc.num
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "smm-sp-bottom-line"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "smm-sp-icon-row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        className: "smm-sp-icon-dash"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        className: "smm-sp-icon",
                        children: svc.icon
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "smm-sp-content",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "smm-sp-subtitle",
                        children: svc.subtitle
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                        className: "smm-sp-title",
                        children: svc.title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "smm-sp-desc",
                        children: svc.desc
                    })
                ]
            })
        ]
    });
}
function Services() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "smm-svc",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "smm-svc-dots"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "smm-svc-glow smm-ssvg1"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "smm-svc-glow smm-ssvg2"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "smm-svc-hdr",
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
                            children: "Our Specialized Content Marketing Services"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                        className: "smm-svc-h2",
                        children: [
                            "Not Just Content. ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                        children: "Content That Works."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "smm-svc-sub",
                        children: "As a results-driven content marketing agency, we go beyond generic writing. Our content marketing services are tailored to your brand, industry, and audience journey."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "smm-svc-panels",
                children: SERVICES.map((svc, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ServicePanel, {
                        svc: svc,
                        index: i
                    }, svc.num))
            })
        ]
    });
}
// ─── Process ──────────────────────────────────────────────────────────────────
function ProcessStep({ step, index }) {
    const [ref, visible] = useInView(0.1);
    const isEven = index % 2 === 1;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        ref: ref,
        className: `smm-tp-step${visible ? " tp-vis" : ""}`,
        children: isEven ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "smm-tp-text-side",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "smm-tp-desc",
                            children: step.desc
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "smm-tp-bullets",
                            children: step.bullets.map((b)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    className: "smm-tp-bullet",
                                    children: b
                                }, b))
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "smm-tp-num-side",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "smm-tp-bg-num",
                            children: step.step
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "smm-tp-step-index",
                            children: [
                                "Step — ",
                                step.step
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                            className: "smm-tp-step-title",
                            children: step.title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "smm-tp-phase",
                            children: step.phase
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "smm-tp-num-side",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "smm-tp-bg-num",
                            children: step.step
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "smm-tp-step-index",
                            children: [
                                "Step — ",
                                step.step
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                            className: "smm-tp-step-title",
                            children: step.title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "smm-tp-phase",
                            children: step.phase
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "smm-tp-text-side",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "smm-tp-desc",
                            children: step.desc
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "smm-tp-bullets",
                            children: step.bullets.map((b)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    className: "smm-tp-bullet",
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
        className: "smm-tp-section",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "smm-tp-cross"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "smm-tp-header",
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
                            children: "Our Proven Content Marketing Process"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                        className: "smm-tp-h2",
                        children: [
                            "Built on Strategy. ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("em", {
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                        children: "Refined by Insight. "
                                    })
                                ]
                            }),
                            " Measured by Impact."
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "smm-tp-sub",
                        children: "Our content marketing process that will make your brand unique, and value proposition end for each stage for your customer. Let's see how PCS  thought process can be a game changer for your business"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "smm-tp-body",
                children: PROCESS_STEPS.map((step, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ProcessStep, {
                        step: step,
                        index: i
                    }, step.step))
            })
        ]
    });
}
// ─── How We Work ──────────────────────────────────────────────────────────────
function HowWeWorkItem({ item }) {
    const [ref, visible] = useInView(0.12);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        ref: ref,
        className: `smm-hww-arrow-item${visible ? " hww-vis" : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "smm-hww-card",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "smm-hww-icon-wrap",
                    children: item.icon
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                    className: "smm-hww-card-title",
                    children: item.title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "smm-hww-card-desc",
                    children: item.desc
                })
            ]
        })
    });
}
function HowWeWork() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "smm-hww",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "smm-hww-dot-grid"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "smm-hww-glow smm-hww-glow-1"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "smm-hww-glow smm-hww-glow-2"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "smm-hww-header",
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
                            children: "Our Focus on Your Results in Content Marketing"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                        className: "smm-hww-h2",
                        children: [
                            "Plan Smart.  ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                    children: "Write Better."
                                })
                            }),
                            " Deliver Results."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "smm-hww-arrows-wrap",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "smm-hww-arrow-track",
                    children: HOW_WE_WORK.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(HowWeWorkItem, {
                            item: item
                        }, item.title))
                })
            })
        ]
    });
}
// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQSection() {
    const [active, setActive] = (0,react__rspack_import_1.useState)(null);
    const toggle = (index)=>{
        setActive(active === index ? null : index);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "faq-section",
        style: {
            padding: '80px 0 0'
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "partners-header2",
                style: {
                    textAlign: 'center',
                    marginTop: '20px'
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
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
// ─── Root Component ───────────────────────────────────────────────────────────
function PcsSmmPage() {
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
                        "@id": "https://www.priyamconsultancy.com/content-marketing/",
                        "name": "content-marketing"
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
        // -- SERVICE PAGE SCHEMA --
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.priyamconsultancy.com/content-marketing/#service",
            "name": "Content Marketing",
            "serviceType": "Content Marketing Services",
            "url": "https://www.priyamconsultancy.com/content-marketing/",
            "description": "Priyam Consultancy provides professional content marketing services including website content writing, SEO content, blog writing, social media content, brand storytelling and content strategy services across India.",
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
            "name": "content-marketing",
            "image": [
                "https://www.priyamconsultancy.com/img/content-marketing.png"
            ],
            "description": "Best content marketing services in Coimbatore offering blog writing, SEO content creation, website content development, content optimization, brand storytelling and audience engagement strategies for business growth.",
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
                "reviewCount": "4861"
            },
            "offers": {
                "@type": "Offer",
                "url": "https://www.priyamconsultancy.com/content-marketing/",
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
        },
        //  FAQ Schema
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What does content marketing do for my business?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Content marketing helps businesses build brand awareness, improve audience engagement, increase website traffic, and generate qualified leads through valuable and strategic content. It strengthens credibility, supports SEO performance, and helps businesses communicate their expertise effectively across digital platforms."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you write content for specific industries?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We create industry-specific content for sectors including healthcare, technology, ecommerce, consulting, construction, finance, retail, and professional services. Our content strategies are tailored to match industry trends, audience behavior, business goals, and brand communication requirements for maximum relevance and impact."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you optimize existing content?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we optimize existing content by improving structure, readability, SEO performance, keyword relevance, and audience engagement. Our optimization process helps strengthen search visibility, enhance user experience, update outdated information, and improve overall content effectiveness across digital platforms and search engines."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you provide blog writing services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We provide professional blog writing services focused on SEO, audience engagement, and brand positioning. Our blogs are strategically created to improve website traffic, establish industry authority, support digital marketing goals, and provide valuable information that connects with your target audience."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can content marketing improve SEO?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, content marketing plays a major role in improving SEO by targeting relevant keywords, increasing website engagement, strengthening internal linking, and generating valuable search-focused content. High-quality content helps improve search rankings, organic traffic, visibility, and long-term digital authority across search engines."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do you decide what content to create?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We decide content strategies based on your business goals, target audience, industry trends, competitor analysis, keyword research, and platform performance. Our approach focuses on creating relevant, audience-focused content that improves engagement, search visibility, lead generation, and overall digital marketing performance."
                    }
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Layout__rspack_import_5/* ["default"] */.A, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "pg-content-marketing",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_6/* ["default"] */.A, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                            children: "Content Marketing Agency in India | Content Marketing Services"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                            name: "description",
                            content: "PCS is a leading content marketing agency in India. Our content strategy and creation help drive traffic, generate leads, & boost brand visibility on search engines."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                            name: "keywords",
                            content: "Content Marketing, Content Marketing Agency, Content Marketing Service, Content Marketing Strategy, Content Marketing Company, Social Media Content Agency, Content Creation Companies"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                            rel: "canonical",
                            href: "https://www.priyamconsultancy.com/content-marketing/"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                            property: "og:title",
                            content: "Content Marketing Agency in India | Content Marketing Services"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                            property: "og:description",
                            content: "PCS is a leading content marketing agency in India. Our content strategy and creation help drive traffic, generate leads, & boost brand visibility on search engines."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                            property: "og:url",
                            content: "https://www.priyamconsultancy.com/content-marketing/"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                            property: "og:image",
                            content: "https://www.priyamconsultancy.com/img/content-marketing.png"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                            name: "twitter:title",
                            content: "Content Marketing Agency in India | Content Marketing Services"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                            name: "twitter:description",
                            content: "PCS is a leading content marketing agency in India. Our content strategy and creation help drive traffic, generate leads, & boost brand visibility on search engines."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                            name: "twitter:image",
                            content: "https://www.priyamconsultancy.com/img/content-marketing.png"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                            type: "application/ld+json",
                            children: JSON.stringify(schemaData)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Hero, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ApproachSection, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Services, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Process, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(HowWeWork, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(FAQSection, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_BlogSection__rspack_import_4/* ["default"] */.A, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_HomePage_CTA__rspack_import_3/* ["default"] */.A, {})
            ]
        })
    });
}


},

};
;