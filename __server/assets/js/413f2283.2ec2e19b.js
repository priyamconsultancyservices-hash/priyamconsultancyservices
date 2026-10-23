"use strict";
exports.ids = ["8039"];
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
7638(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (ServicesWithTabs)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);


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
const TAB1_SERVICES = [
    {
        num: "01",
        img: "/img/icon/ecommerce-website-audit.webp",
        subtitle: "E-commerce Website Audit",
        title: "E-commerce Website Audit",
        desc: "A detailed audit of your ecommerce store covering user experience, SEO, speed, and conversion gaps. Our ecommerce marketing agency identifies performance issues and opportunities, helping you improve visibility, enhance user journeys, and build a stronger foundation for scalable ecommerce marketing growth and better results."
    },
    {
        num: "02",
        img: "/img/icon/ecommerce-seo-growth-strategy.webp",
        subtitle: "E-commerce SEO & Growth Strategy",
        title: "E-commerce SEO & Growth Strategy",
        desc: "We create data-driven ecommerce marketing strategies focused on improving search rankings, organic traffic, and long-term visibility. From keyword mapping to content optimization, our ecommerce marketing agency ensures your store is discoverable, competitive, and positioned for consistent growth across search engines and digital platforms."
    },
    {
        num: "03",
        img: "/img/icon/performance-marketing.webp",
        subtitle: "Performance Marketing (Paid Ads)",
        title: "Performance Marketing (Paid Ads)",
        desc: "As a results-focused ecommerce marketing agency , we run high-performing paid campaigns across Google, Meta and social platforms. Our ecommerce marketing approach focuses on ROI, audience targeting, creative optimization, and continuous scaling to maximize conversions and overall business performance."
    },
    {
        num: "04",
        img: "/img/icon/social-commerce-marketing.webp",
        subtitle: "Social Commerce Marketing",
        title: "Social Commerce Marketing",
        desc: "We integrate ecommerce marketing with social platforms to drive direct conversions. From product-focused campaigns to engaging creatives, our strategies help you sell seamlessly across channels, turning social engagement into revenue while strengthening your brand presence and improving customer interaction across every marketplace touchpoint."
    },
    {
        num: "05",
        img: "/img/icon/customer-retention.webp",
        subtitle: "Customer Retention & Retargeting",
        title: "Customer Retention & Retargeting",
        desc: "Our ecommerce marketing services focus on retaining customers and increasing lifetime value. Through advanced retargeting strategies, audience segmentation, and personalized campaigns, we help re-engage visitors, recover lost sales, and build long-term customer relationships that drive consistent revenue growth across ecommerce and marketplace platforms."
    },
    {
        num: "06",
        img: "/img/icon/analytics-conversion-reporting.webp",
        subtitle: "Analytics & Conversion Reporting",
        title: "Analytics & Conversion Reporting",
        desc: "We track, measure, and analyze every aspect of your ecommerce marketing performance. From traffic and behavior to conversions and ROI, our reporting provides actionable insights that help refine strategies, optimize campaigns, and improve decision-making for better results across your ecommerce store and marketplace channels."
    }
];
const TAB2_SERVICES = [
    {
        num: "01",
        img: "/img/icon/marketplace-account-setup.webp",
        subtitle: "Marketplace Account Setup",
        title: "Marketplace Account Setup",
        desc: "Complete setup and configuration of your marketplace accounts across platforms like Amazon, Flipkart, and Meesho. We ensure proper structuring, compliance, and optimization from day one, enabling your brand to launch smoothly and perform effectively in a competitive marketplace environment."
    },
    {
        num: "02",
        img: "/img/icon/competitor-market-analysis.webp",
        subtitle: "Competitor & Market Analysis",
        title: "Competitor & Market Analysis",
        desc: "We conduct in-depth competitor and market analysis to identify opportunities within your marketplace niche. Our ecommerce marketing agency evaluates pricing, positioning, trends, and demand to build strategies that help your products stand out, compete effectively, and achieve stronger visibility and conversions."
    },
    {
        num: "03",
        img: "/img/icon/marketplace-seo-optimization.webp",
        subtitle: "Marketplace SEO Optimization",
        title: "Marketplace SEO Optimization",
        desc: "Improve your marketplace visibility with optimized titles, keywords, and backend attributes. Our marketplace SEO strategies ensure your products rank higher in search results, attract the right audience, and increase discoverability across platforms, supporting consistent ecommerce marketing performance and growth."
    },
    {
        num: "04",
        img: "/img/icon/product-listing-ranking-optimization.webp",
        subtitle: "Product Listing & Ranking Optimization",
        title: "Product Listing & Ranking Optimization",
        desc: "Our marketplace product listing service focuses on creating high-converting listings with optimized titles, descriptions, and visuals. Including Flipkart listing optimization and Meesho product listing service, we improve rankings, enhance visibility, and drive better conversions across every marketplace platform."
    },
    {
        num: "05",
        img: "/img/icon/marketplace-advertising.webp",
        subtitle: "Marketplace Advertising (Amazon & Flipkart Ads)",
        title: "Marketplace Advertising (Amazon & Flipkart Ads)",
        desc: "We manage performance-driven campaigns including Amazon PPC Services as a trusted amazon ppc agency. Our ecommerce marketing strategies focus on targeting, bidding, and optimization to increase visibility, drive traffic, and generate consistent sales across marketplace platforms like Amazon and Flipkart."
    },
    {
        num: "06",
        img: "/img/icon/review-rating-management.webp",
        subtitle: "Review & Rating Management",
        title: "Review & Rating Management",
        desc: "Build trust and credibility with effective review and rating management. We help monitor feedback, improve customer satisfaction, and maintain strong brand reputation across every marketplace, ensuring positive user perception and better conversion rates as part of your overall ecommerce marketing strategy."
    }
];
const TABS = [
    {
        id: "tab1",
        label: "E-commerce Marketing Services",
        services: TAB1_SERVICES
    },
    {
        id: "tab2",
        label: "Marketplace Services",
        services: TAB2_SERVICES
    }
];
const TAB_BAR_STYLES = `
  .htab-bar-wrap {
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: center;
    padding: 3rem 6% 4rem;
    margin-bottom: 0;
  }
  .htab-bar {
    display: inline-flex;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 50px;
    padding: 5px;
    gap: 4px;
    background: rgba(255,255,255,0.04);
  }
  .htab-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.7rem 2rem;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.88rem;
    font-weight: 500;
    color: rgba(255,255,255,0.5);
    letter-spacing: 0.01em;
    transition: color 0.25s ease, background 0.25s ease;
    white-space: nowrap;
  }
  .htab-btn:hover { color: rgba(255,255,255,0.8); }
  .htab-btn.active { background: #ed8337; color: #fff; font-weight: 600; }
  .htab-pane { animation: htab-fade 0.32s ease both; }
  @keyframes htab-fade {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .smm-sp-img {
    width: 33px;
    height: 33px;
    // border-radius: 12px;
    object-fit: cover;
    display: block;
  }
  @media(max-width:580px) {
    .htab-bar-wrap { padding: 0 5%; }
    .htab-btn { padding: 0.6rem 1.1rem; font-size: 0.8rem; }
  }

  @media (max-width:660px) {
  .htab-bar {
    display: inline;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    padding: 5px;
    gap: 4px;
    background: rgba(255, 255, 255, 0.04);
    justify-content: center;
    text-align: center;
    margin-bottom:30px;
}
    }
`;
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
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                        src: svc.img,
                        alt: svc.subtitle,
                        className: "smm-sp-img"
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
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h5", {
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
function ServicesWithTabs() {
    const [activeTab, setActiveTab] = (0,react__rspack_import_1.useState)("tab1");
    (0,react__rspack_import_1.useEffect)(()=>{
        const id = "htab-bar-styles";
        if (!document.getElementById(id)) {
            const el = document.createElement("style");
            el.id = id;
            el.textContent = TAB_BAR_STYLES;
            document.head.appendChild(el);
        }
    }, []);
    const current = TABS.find((t)=>t.id === activeTab);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "smm-svc",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "smm-svc-dots"
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
                                marginBottom: "20px",
                                textAlign: "start"
                            },
                            children: "Our Specialized Email Marketing Services"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                        className: "smm-svc-h2",
                        children: [
                            "Two Powerful Channels. ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                    children: "One Goal"
                                })
                            }),
                            " - Customer Growth."
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "smm-svc-sub",
                        children: "We deliver end-to-end ecommerce marketing and marketplace solutions to drive visibility, traffic, and conversions."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "htab-bar-wrap",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "htab-bar",
                    children: TABS.map((tab)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
                            className: `htab-btn${activeTab === tab.id ? " active" : ""}`,
                            onClick: ()=>setActiveTab(tab.id),
                            children: tab.label
                        }, tab.id))
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "htab-pane",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "smm-svc-panels",
                    children: current.services.map((svc, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ServicePanel, {
                            svc: svc,
                            index: i
                        }, `${activeTab}-${svc.num}`))
                })
            }, activeTab)
        ]
    });
}


},
6489(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (PcsSmmPage)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _emailjs_browser__rspack_import_2 = __webpack_require__(58);
/* import */ var _components_BlogSection__rspack_import_3 = __webpack_require__(3177);
/* import */ var _components_HomePage_CTA__rspack_import_4 = __webpack_require__(9393);
/* import */ var _components_MarketplaceEcommerenceService_ServiceSection__rspack_import_5 = __webpack_require__(7638);
/* import */ var _theme_Layout__rspack_import_6 = __webpack_require__(8328);
/* import */ var _docusaurus_Head__rspack_import_7 = __webpack_require__(3572);






const banner = "/img/marketplace-ecommerce-marketing.webp";



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
            src: "/img/icons/svc-email-strategy.svg",
            alt: "Email Strategy and Planning",
            width: "28",
            height: "28"
        }),
        subtitle: "Brand Presence",
        title: "Email Strategy & Planning",
        desc: "We begin with a complete audit and strategy blueprint defining your brand voice, identifying audience segments, and setting clear campaign goals. From welcome sequences to retention loops, we build smart strategies that power long-term growth."
    },
    {
        num: "02",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icons/svc-automated-email-flows.svg",
            alt: "Automated Email Flows",
            width: "28",
            height: "28"
        }),
        subtitle: "Visual Identity",
        title: "Automated Email Flows",
        desc: "Turn your funnel into a conversion machine. We set up advanced automated flows such as welcome series, cart recovery, post-purchase nurture, reactivation campaigns, and more, ensuring you never miss a chance to convert."
    },
    {
        num: "03",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icons/svc-email-design-personalization.svg",
            alt: "Email Design Personalization and Optimization",
            width: "28",
            height: "28"
        }),
        subtitle: "Paid Campaigns",
        title: "Email Design, Personalization & Optimization",
        desc: "Our team creates visually engaging, mobile-friendly email templates paired with persuasive copy. Through segmentation, personalization, and performance optimization, we ensure every email delivers maximum impact."
    },
    {
        num: "04",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icons/svc-whatsapp-campaign.svg",
            alt: "WhatsApp Campaign Strategy and Setup",
            width: "28",
            height: "28"
        }),
        subtitle: "Community Building",
        title: "WhatsApp Campaign Strategy & Setup",
        desc: "We help businesses implement structured WhatsApp marketing campaigns based on their communication goals. This includes audience planning, message framework development, and campaign execution strategy."
    },
    {
        num: "05",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icons/svc-meta-whatsapp.svg",
            alt: "Meta Verified WhatsApp Marketing",
            width: "28",
            height: "28"
        }),
        subtitle: "Partnerships",
        title: "Meta Verified WhatsApp Marketing",
        desc: "We provide official WhatsApp Business API setup and campaign management with verified business identity, enabling secure, scalable, and compliant customer communication."
    },
    {
        num: "06",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icons/svc-bulk-whatsapp.svg",
            alt: "Bulk WhatsApp Marketing Campaigns",
            width: "28",
            height: "28"
        }),
        subtitle: "Insights & ROI",
        title: "Bulk WhatsApp Marketing Campaigns",
        desc: "For businesses seeking quick outreach, we execute bulk WhatsApp campaigns for promotions, announcements, and customer updates, ensuring fast and wide message delivery."
    }
];
const PROCESS_STEPS = [
    {
        step: "01",
        title: "Discover",
        phase: "Discover",
        desc: "We begin by understanding your business model, products, target audience, customer journey, and current ecommerce and marketplace presence in detail. This helps us define clear goals and align your ecommerce marketing strategy with measurable growth objectives, platform opportunities, and long-term business scalability.",
        bullets: []
    },
    {
        step: "02",
        title: "Research & Analyze",
        phase: "Research & Analyze",
        desc: "We conduct in-depth research including keyword analysis, competitor benchmarking, pricing insights, customer behavior patterns, and marketplace trends. This ensures your ecommerce marketing strategy is data-driven, competitive, audience-focused, and strategically positioned to capture demand effectively across multiple ecommerce and marketplace platforms.",
        bullets: []
    },
    {
        step: "03",
        title: "Plan & Strategize",
        phase: "Plan & Strategize",
        desc: "Based on gathered insights, we create a structured roadmap covering ecommerce marketing campaigns, marketplace growth strategies, content direction, promotional planning, and advertising execution. Every activity is aligned with clear business goals focused on improving visibility, audience engagement, customer acquisition, and long-term conversion growth across all digital channels.",
        bullets: []
    },
    {
        step: "04",
        title: "Execute & Optimize",
        phase: "Execute & Optimize",
        desc: "We implement campaigns across ecommerce platforms and marketplaces, including product listing optimization, paid advertising campaigns, SEO improvements, and conversion-focused enhancements. Continuous monitoring, testing, and strategic refinements ensure stronger performance, improved customer engagement, higher conversions, and consistent growth across all active sales and marketing channels.",
        bullets: []
    },
    {
        step: "05",
        title: "Monitor & Scale",
        phase: "Monitor & Scale",
        desc: "We continuously track performance metrics including website traffic, product rankings, customer engagement, conversions, return on ad spend, and overall ROI. Using real-time analytics and marketplace insights, we optimize strategies, scale high-performing campaigns, improve operational efficiency, and strengthen your ecommerce marketing performance for sustainable long-term business growth.",
        bullets: []
    }
];
const HOW_WE_WORK = [
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hww-platform-strategy.webp",
            alt: "Platform-Specific Strategy",
            width: "28",
            height: "28"
        }),
        title: "Platform-Specific Strategy",
        desc: "Every marketplace operates differently, with unique algorithms and ranking factors. We tailor ecommerce marketing strategies for each platform to maximize visibility, performance, and consistent sales growth."
    },
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hww-expert-execution.webp",
            alt: "Expert Execution",
            width: "28",
            height: "28"
        }),
        title: "Expert Execution",
        desc: "With deep expertise as an amazon marketing agency and marketplace product listing service provider, we execute every strategy with precision, ensuring optimized listings, strong positioning, and improved conversions."
    },
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hww-performance-drivens.webp",
            alt: "Performance-Driven Approach",
            width: "28",
            height: "28"
        }),
        title: "Performance-Driven Approach",
        desc: "We track key metrics including rankings, traffic, conversions, and ROI. Our ecommerce marketing strategies are continuously refined using data insights to improve performance and maximize overall business results."
    }
];
const faqData = [
    {
        q: "What does an ecommerce marketing service include?",
        a: "Ecommerce marketing services include SEO, product listing optimization, performance marketing, marketplace management, social media promotion, email marketing, conversion optimization, and analytics tracking. The goal is to improve product visibility, increase traffic, generate sales, and strengthen overall online store performance effectively."
    },
    {
        q: "How can ecommerce SEO improve my sales?",
        a: " Ecommerce SEO improves product visibility on search engines by optimizing product pages, keywords, technical structure, and user experience. Better search rankings attract high-intent customers, increase organic traffic, improve product discoverability, and contribute to higher conversions and long-term online sales growth."
    },
    {
        q: "What is marketplace listing optimization?",
        a: " Marketplace listing optimization involves improving product titles, descriptions, keywords, images, attributes, and overall listing structure on platforms like Amazon and Flipkart. This helps products rank better in marketplace searches, attract more customers, improve click-through rates, and increase overall sales performance."
    },
    {
        q: "Can you help increase sales on multiple marketplaces?",
        a: "Yes, we help businesses improve visibility and sales across multiple marketplaces including Amazon, Flipkart, Meesho, and other ecommerce platforms. Our strategies focus on listing optimization, advertising, pricing analysis, content improvement, and performance tracking to maximize marketplace growth and conversions."
    },
    {
        q: "Do you provide Amazon PPC services?",
        a: " Yes, we manage Amazon PPC campaigns focused on improving product visibility, increasing conversions, and maximizing advertising efficiency. Our services include keyword targeting, campaign optimization, bid management, competitor analysis, and performance tracking to improve return on advertising spend and marketplace sales performance."
    },
    {
        q: "How does PCS help ecommerce brands grow?",
        a: "PCS helps ecommerce brands grow through SEO, marketplace optimization, paid advertising, conversion-focused strategies, content marketing, and performance analytics. Our approach focuses on improving visibility, customer engagement, operational efficiency, and sales scalability to support sustainable long-term ecommerce business growth."
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
                            "Revenue Expansion "
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                        className: "hero-heading",
                        style: {
                            fontWeight: '600'
                        },
                        children: [
                            "Scaling Brands Across",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: "hl lined",
                                children: "Marketplace "
                            }),
                            " & E-commerce  Marketing"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "hero-sub",
                        children: "At PCS, we help brands scale through result-driven ecommerce marketing and marketplace growth strategies. As a performance-focused ecommerce marketing agency and digital marketing agency for ecommerce, we combine data, creativity, and platform expertise to drive visibility, traffic, and conversions. "
                    }),
                    "        ",
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
                    alt: "Email & WhatsApp Marketing Illustration",
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
                                "Strategic ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "Marketplace & E-commerce "
                                }),
                                " Marketing Growth That Drives Sales"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "In today’s competitive digital landscape, success depends on strong execution across both your website and every marketplace platform you sell on. We build structured ecommerce marketing strategies focused on scalable business growth."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "As a trusted ecommerce marketing agency, we focus on performance-driven campaigns, product listing optimization, and data-backed decision-making. Our strategies are designed to improve visibility, engagement, and conversion performance consistently across channels."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "We analyze customer behavior, competitor positioning, and platform algorithms to create high-impact marketplace strategies. Whether your goal is better rankings, higher conversions, or increased sales, we deliver measurable ecommerce marketing outcomes."
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
// function Services() {
//   return (
//     <section className="smm-svc">
//       <div className="smm-svc-dots" />
//       <div className="smm-svc-glow smm-ssvg1" />
//       <div className="smm-svc-glow smm-ssvg2" />
//       <div className="smm-svc-hdr">
//         <div className="partners-header1">
//           <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Specialized Email Marketing Services</div>
//         </div>
//         <h2 className="smm-svc-h2">Two Powerful Channels. <span><i>One Goal</i></span> - Customer Growth.</h2>
//         <p className="smm-svc-sub">
//          We provide Email and WhatsApp marketing services to engage audiences and drive measurable business growth.
//         </p>
//       </div>
//       <div className="smm-svc-panels">
//         {SERVICES.map((svc, i) => <ServicePanel key={svc.num} svc={svc} index={i} />)}
//       </div>
//     </section>
//   );
// }
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
                            children: "Our Proven Marketplace & E-commerce Marketing Process"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                        className: "smm-tp-h2",
                        children: [
                            "List Better. ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("em", {
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                        children: "Rank Higher. "
                                    })
                                ]
                            }),
                            "Sell More."
                        ]
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
                            children: "Our Focus on Your Results "
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                        className: "smm-hww-h2",
                        children: [
                            "Optimize Listings. ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                    children: "Drive Traffic."
                                })
                            }),
                            " Increase Sales."
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
    const toggle = (index)=>setActive(active === index ? null : index);
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
                                                        className: "icon",
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
                                                        className: "icon",
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
// ─── Root Component ───────────────────────────────────────────────────────────
function PcsSmmPage() {
    const schemaData = [
        //  Breadcrumb List Schema
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
                        "@id": "https://www.priyamconsultancy.com/marketplace-ecommerce-marketing/",
                        "name": "marketplace-ecommerce-marketing"
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
        // SERVICE PAGE SCHEMA
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.priyamconsultancy.com/marketplace-ecommerce-marketing/#service",
            "name": "Marketplace Ecommerce Marketing",
            "serviceType": "Marketplace Ecommerce Marketing Services",
            "url": "https://www.priyamconsultancy.com/marketplace-ecommerce-marketing/",
            "description": "Priyam Consultancy provides professional marketplace ecommerce marketing services including Amazon marketing, Flipkart marketing, product listing optimization, ecommerce advertising, marketplace management and online sales growth services across India.",
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
        //  Product Schema
        {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "marketplace-ecommerce-marketing",
            "image": [
                "https://www.priyamconsultancy.com/img/marketplace-ecommerce-marketing.png"
            ],
            "description": "Best marketplace ecommerce marketing services in Coimbatore offering Amazon marketing, Flipkart marketing, marketplace listing optimization, ecommerce SEO, Amazon PPC management, conversion optimization and online sales growth solutions.",
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
                "reviewCount": "4428"
            },
            "offers": {
                "@type": "Offer",
                "url": "https://www.priyamconsultancy.com/marketplace-ecommerce-marketing/",
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
                    "name": "What does an ecommerce marketing service include?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ecommerce marketing services include SEO, product listing optimization, performance marketing, marketplace management, social media promotion, email marketing, conversion optimization, and analytics tracking. The goal is to improve product visibility, increase traffic, generate sales, and strengthen overall online store performance effectively."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How can ecommerce SEO improve my sales?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ecommerce SEO improves product visibility on search engines by optimizing product pages, keywords, technical structure, and user experience. Better search rankings attract high-intent customers, increase organic traffic, improve product discoverability, and contribute to higher conversions and long-term online sales growth."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is marketplace listing optimization?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Marketplace listing optimization involves improving product titles, descriptions, keywords, images, attributes, and overall listing structure on platforms like Amazon and Flipkart. This helps products rank better in marketplace searches, attract more customers, improve click-through rates, and increase overall sales performance."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you help increase sales on multiple marketplaces?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we help businesses improve visibility and sales across multiple marketplaces including Amazon, Flipkart, Meesho, and other ecommerce platforms. Our strategies focus on listing optimization, advertising, pricing analysis, content improvement, and performance tracking to maximize marketplace growth and conversions."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you provide Amazon PPC services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we manage Amazon PPC campaigns focused on improving product visibility, increasing conversions, and maximizing advertising efficiency. Our services include keyword targeting, campaign optimization, bid management, competitor analysis, and performance tracking to improve return on advertising spend and marketplace sales performance."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does PCS help ecommerce brands grow?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "PCS helps ecommerce brands grow through SEO, marketplace optimization, paid advertising, conversion-focused strategies, content marketing, and performance analytics. Our approach focuses on improving visibility, customer engagement, operational efficiency, and sales scalability to support sustainable long-term ecommerce business growth."
                    }
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Layout__rspack_import_6/* ["default"] */.A, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "pg-marketplace-ecom",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_7/* ["default"] */.A, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                            children: "Ecommerce & Marketplace Marketing Agency in India | PCS"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                            name: "description",
                            content: "Increase ecommerce sales with our marketplace and ecommerce marketing services. From ecommerce SEO to listing optimization, PCS drives scalable growth. "
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                            name: "keywords",
                            content: "Social Media Marketing, SMM Services, Social Media Marketing Agency, Social Media Advertising, Social Media Marketing Services, Social Media Marketing Company, Social Media Management Agency, Social Media Management Services, Social Media Marketing Companies"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                            rel: "canonical",
                            href: "https://www.priyamconsultancy.com/marketplace-ecommerce-marketing"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                            property: "og:title",
                            content: "Ecommerce & Marketplace Marketing Agency in India | PCS"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                            property: "og:description",
                            content: "Increase ecommerce sales with our marketplace and ecommerce marketing services. From ecommerce SEO to listing optimization, PCS drives scalable growth. "
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                            property: "og:url",
                            content: "https://www.priyamconsultancy.com/marketplace-ecommerce-marketing"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                            property: "og:image",
                            content: "https://www.priyamconsultancy.com/img/marketplace-ecommerce-marketing.png"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                            name: "twitter:title",
                            content: "Ecommerce & Marketplace Marketing Agency in India | PCS"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                            name: "twitter:description",
                            content: "Increase ecommerce sales with our marketplace and ecommerce marketing services. From ecommerce SEO to listing optimization, PCS drives scalable growth. "
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                            name: "twitter:image",
                            content: "https://www.priyamconsultancy.com/img/marketplace-ecommerce-marketing.png"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                            type: "application/ld+json",
                            children: JSON.stringify(schemaData)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Hero, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ApproachSection, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_MarketplaceEcommerenceService_ServiceSection__rspack_import_5/* ["default"] */.A, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Process, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(HowWeWork, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(FAQSection, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_BlogSection__rspack_import_3/* ["default"] */.A, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_HomePage_CTA__rspack_import_4/* ["default"] */.A, {})
            ]
        })
    });
}


},

};
;