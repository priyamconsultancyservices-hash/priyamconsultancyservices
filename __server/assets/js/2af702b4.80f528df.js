"use strict";
exports.ids = ["6126"];
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
4231(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (BusinessRegistrationPage)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _components_HomePage_CTA__rspack_import_2 = __webpack_require__(9393);
/* import */ var _emailjs_browser__rspack_import_3 = __webpack_require__(58);
/* import */ var _theme_Layout__rspack_import_4 = __webpack_require__(8328);
/* import */ var _docusaurus_Head__rspack_import_5 = __webpack_require__(3572);
/* import */ var _components_BlogSection__rspack_import_6 = __webpack_require__(3177);






const banner = "/img/virtual-cfo.webp";


function SEOHead() {
    const pageUrl = "https://www.priyamconsultancy.com/virtual-cfo-services/";
    const imageUrl = "https://www.priyamconsultancy.com/img/virtual-cfo.png";
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_5/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                children: "Empower Your Business with Expert Virtual CFO Services in Coimbatore "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "description",
                content: "Empower your business with expert Virtual CFO services in Coimbatore. Get financial planning, compliance, cash flow management, and strategic growth support."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "keywords",
                content: "Virtual CFO Services, Outsourced VCFO Services, Chief Financial Officer Services, VCFO Services, virtual CFO Service Providers, virtual CFOS Provide, Outsourcing CFO Services, Virtual CFO Solution, Virtual CFO Services in India, Fractional CFO Services "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                rel: "canonical",
                href: "https://www.priyamconsultancy.com/virtual-cfo-services/"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:title",
                content: "Empower Your Business with Expert Virtual CFO Services in Coimbatore "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:description",
                content: "Empower your business with expert Virtual CFO services in Coimbatore. Get financial planning, compliance, cash flow management, and strategic growth support."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:url",
                content: "https://www.priyamconsultancy.com/virtual-cfo-services/"
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
                content: "Empower Your Business with Expert Virtual CFO Services in Coimbatore "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:description",
                content: "Empower your business with expert Virtual CFO services in Coimbatore. Get financial planning, compliance, cash flow management, and strategic growth support."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:image",
                content: imageUrl
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                type: "application/ld+json",
                children: `
        {
          "@context":"https://schema.org",
          "@type":"BreadcrumbList",
          "itemListElement":[
            {
              "@type":"ListItem",
              "position":1,
              "item":{
                "@id":"https://www.priyamconsultancy.com/",
                "name":"Home"
              }
            },
            {
              "@type":"ListItem",
              "position":2,
              "item":{
                "@id":"https://www.priyamconsultancy.com/virtual-cfo-services/",
                "name":"virtual-cfo-services"
              }
            }
          ]
          }

      `
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                type: "application/ld+json",
                children: `
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
        }

      `
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                type: "application/ld+json",
                children: `
       {
          "@context":"https://schema.org",
          "@type":"Service",
          "@id":"https://www.priyamconsultancy.com/virtual-cfo-services/#service",
          "name":"Virtual CFO Services",
          "serviceType":"Virtual CFO Services",
          "url":"https://www.priyamconsultancy.com/virtual-cfo-services/",
          "description":"Priyam Consultancy provides professional Virtual CFO services including financial planning, budgeting, cash flow management, financial reporting, business forecasting, compliance monitoring, profitability analysis and strategic financial advisory for businesses across India.",
          "provider":{
            "@type":"Organization",
            "name":"Priyam Consultancy Services",
            "url":"https://www.priyamconsultancy.com/",
            "logo":{
              "@type":"ImageObject",
              "url":"https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png"
            }
          },
          "areaServed":{
            "@type":"Country",
            "name":"India"
          }
        }

      `
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                type: "application/ld+json",
                children: `
        {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "virtual-cfo-services",
        "image": ["https://www.priyamconsultancy.com/img/virtual-cfo.png"],
        "description": "Best Virtual CFO services in Coimbatore offering financial planning, budgeting, cash flow management, business forecasting, profitability analysis and strategic financial advisory for businesses.",
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
        "reviewCount": "6359"
        },
        "offers": {
        "@type": "Offer",
        "url": "https://www.priyamconsultancy.com/virtual-cfo-services/",
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
        }

      `
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                type: "application/ld+json",
                children: `
       {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "What is included in virtual CFO services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Virtual CFO services typically include financial planning, budgeting, cash flow management, financial reporting, compliance monitoring, business forecasting, profitability analysis, strategic advisory, and investor reporting. These services help businesses improve financial control, decision-making, and long-term growth planning without hiring a full-time CFO."
            }
          },{
            "@type": "Question",
            "name": "What does a Virtual CFO do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Virtual CFO manages and oversees a company’s financial strategy, reporting, budgeting, cash flow, and business planning. They provide financial insights, risk management support, and strategic guidance that help businesses improve profitability, operational efficiency, and overall financial performance."
            }
          },{
            "@type": "Question",
            "name": "Who needs a Virtual CFO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Startups, small businesses, growing companies, and organizations lacking in-house financial leadership can benefit from Virtual CFO services. Businesses seeking better financial planning, strategic guidance, investor readiness, cost optimization, or scalable financial management often require Virtual CFO support."
            }
          },{
            "@type": "Question",
            "name": "How can Virtual CFOs help startups manage finances?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Virtual CFOs help startups manage finances through budgeting, cash flow forecasting, fundraising support, financial planning, expense control, and strategic decision-making. They provide structured financial guidance that helps startups improve financial discipline, reduce risks, and plan sustainable business growth effectively."
            }
          },{
            "@type": "Question",
            "name": "What is the difference between an accountant and a Virtual CFO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An accountant primarily handles bookkeeping, tax filing, and financial record maintenance, while a Virtual CFO focuses on financial strategy, forecasting, business planning, profitability improvement, and decision-making support. Virtual CFOs provide higher-level financial guidance aligned with long-term business growth objectives."
            }
          },{
            "@type": "Question",
            "name": "Are virtual CFO services affordable for small businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Virtual CFO services are cost-effective for small businesses because they provide expert financial leadership without the expense of hiring a full-time CFO. Businesses gain strategic financial support, planning expertise, and operational guidance through flexible and scalable service models."
            }
          }]
        }

      `
            })
        ]
    });
}
/* ═══════════════════════════════
   SECTION 1 — HERO BANNER
═══════════════════════════════ */ function HeroSection() {
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
                            "Scalable CFO Solutions "
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                        className: "hero-heading",
                        children: [
                            "Virtual CFO Services for ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: "hl lined",
                                children: "Growth & Profitability"
                            }),
                            "with Financial Clarity"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "hero-sub",
                        children: "Gain strategic financial guidance and actionable insights for your business. From budgeting and forecasting to financial reporting and risk management, our Virtual CFO services help you make informed decisions, optimize cash flow, and drive sustainable growth with confidence."
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
                    alt: "Virtual CFO Illustration",
                    className: "hero-img"
                })
            })
        ]
    });
}
/* ═══════════════════════════════
   SECTION 2 — OUR APPROACH
═══════════════════════════════ */ function ApproachSection() {
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
        _emailjs_browser__rspack_import_3["default"].send("service_8xw6k3r", "template_jarui36", templateParams, "XWRnXi4hK2SvmRG3q" // 🔴 replace
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
                                    textAlign: 'start'
                                },
                                children: "Our Approach in"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                            className: "ap2-heading",
                            children: [
                                "Virtual  ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "CFO Services"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "Every business has unique financial goals, challenges, and growth plans. We begin by understanding your operations, revenue streams, and priorities. This helps us align financial strategies with your long-term vision."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "We craft a tailored financial management approach covering budgeting, reporting, and advisory. Each element is designed to support stability, efficiency, and informed decision-making. Our process ensures your finances are structured and goal-oriented.          "
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "Financial management is not just about numbers, but clarity and control. We analyze data, optimize processes, and deliver actionable insights. This empowers confident decisions while you focus on growth and profitability."
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
/* ═══════════════════════════════
   SECTION 3 — REGISTRATION TYPES
═══════════════════════════════ */ const REG_DATA = [
    {
        num: "01",
        tag: "FPB",
        label: "Financial Planning & Budgeting",
        title: "Strategic plans for <i>sustainable financial growth</i>",
        desc: [
            "We develop realistic budgets, forecasts, and long-term financial plans tailored to your business. Our approach analyzes revenue streams, expenses, and future projections in detail. This ensures your financial strategy is practical and growth-oriented.",
            "By aligning financial planning with business goals, we help optimize resource allocation and control costs. Our structured approach improves stability and preparedness. It enables your business to grow confidently with clear financial direction."
        ],
        chips: [
            "📈 Investor Access",
            "🏛️ Strong Governance",
            "📋 Stock Exchange Listed",
            "✅ Regulatory Compliance"
        ],
        time: "Avg. 15–25 working days"
    },
    {
        num: "02",
        tag: "MRA",
        label: "Management Reporting & Analytics",
        title: "Clear insights for informed <i>business decisions</i>",
        desc: [
            "We deliver timely and accurate reports, dashboards, and financial summaries. These track performance, cash flow, and key business metrics consistently. This gives you a clear view of your financial health.",
            "By simplifying complex data into actionable insights, we support better decision-making. Our reports highlight opportunities, risks, and trends effectively. This enhances transparency and strengthens stakeholder confidence."
        ],
        chips: [
            "💼 Limited Liability",
            "🚀 Investor-Ready",
            "👥 2–200 Shareholders",
            "📑 Separate Legal Entity"
        ],
        time: "Avg. 7–12 working days"
    },
    {
        num: "03",
        tag: "CPA",
        label: "Cost & Profitability Analysis",
        title: "Maximize efficiency and optimize <i>profits effectively</i>",
        desc: [
            "We analyze your cost structure, revenue streams, and operational processes in depth. Our goal is to identify inefficiencies and areas for cost reduction. This helps improve overall financial performance.",
            "By optimizing resources and enhancing margins, we support smarter business decisions. Our insights reduce waste and improve profitability. This drives efficiency and ensures long-term sustainable growth."
        ],
        chips: [
            "🤝 Flexible Structure",
            "🛡️ Limited Liability",
            "📉 Low Compliance",
            "💰 Easy Profit Sharing"
        ],
        time: "Avg. 10–15 working days"
    },
    {
        num: "04",
        tag: "CFM",
        label: "Cash Flow Management",
        title: "Ensure liquidity and smooth <i>operations consistently</i>",
        desc: [
            "We manage your cash flow to ensure consistent liquidity and operational stability. Our team monitors inflows, outflows, and working capital requirements closely. This prevents disruptions in daily operations.",
            "By forecasting cash needs and planning for contingencies, we reduce financial risks. Our approach improves cash efficiency and control. It ensures your business runs smoothly without financial bottlenecks."
        ],
        chips: [
            "👤 Solo Founder",
            "🏢 Corporate Benefits",
            "🔒 Asset Protection",
            "📊 Easy Compliance"
        ],
        time: "Avg. 7–10 working days"
    },
    {
        num: "05",
        tag: "FIA",
        label: "Fundraising & Investment Advisory",
        title: "Guided capital and investment <i>decisions confidently</i>",
        desc: [
            "We assist with capital raising, investor communication, and funding strategies. Our team evaluates your financial needs and identifies suitable investment options. This supports your growth and expansion plans.",
            "By preparing strong financial insights and strategies, we enhance investor confidence. We help secure funding while maintaining financial discipline. This ensures sustainable and well-planned business growth."
        ],
        chips: [
            "🤝 Shared Ownership",
            "💡 Easy Formation",
            "📝 Minimal Compliance",
            "⚖️ Flexible Agreement"
        ],
        time: "Avg. 3–7 working days"
    },
    {
        num: "06",
        tag: "RCA",
        label: "Risk & Compliance Advisory",
        title: "Mitigate risks and maintain <i>regulatory compliance</i>",
        desc: [
            "We monitor financial compliance, statutory requirements, and potential business risks. Our team ensures your operations align with current regulations and standards. This reduces exposure to legal and financial issues.",
            "By implementing proactive risk management strategies, we safeguard your business stability. Our approach minimizes penalties and enhances credibility. It enables confident operations in a changing regulatory environment."
        ],
        chips: [
            "👤 Full Control",
            "💸 Minimal Cost",
            "⚡ Quick Setup",
            "🏪 SMEs & Freelancers"
        ],
        time: "Avg. 1–3 working days"
    }
];
const REG_ICONS = [
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        src: "/img/icon/financial-planning-budgeting.webp",
        alt: "Financial Planning and Budgeting",
        width: "20",
        height: "20"
    }),
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        src: "/img/icon/management-reporting-analytics.webp",
        alt: "Management Reporting and Analytics",
        width: "20",
        height: "20"
    }),
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        src: "/img/icon/cost-profitability-analysis.webp",
        alt: "Cost and Profitability Analysis",
        width: "20",
        height: "20"
    }),
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        src: "/img/icon/cashflow-management.webp",
        alt: "Cash Flow Management",
        width: "20",
        height: "20"
    }),
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        src: "/img/icon/fundraising-investment-advisory.webp",
        alt: "Fundraising and Investment Advisory",
        width: "20",
        height: "20"
    }),
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        src: "/img/icon/risk-compliance-advisory.webp",
        alt: "Risk and Compliance Advisory",
        width: "20",
        height: "20"
    })
];
function RegistrationSection() {
    const [active, setActive] = (0,react__rspack_import_1.useState)(0);
    const d = REG_DATA[active];
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        style: {
            padding: "90px 5%",
            background: "#004168",
            position: "relative",
            overflow: "hidden"
        },
        children: [
            "      ",
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "rg-bg-c",
                style: {
                    top: "-120px",
                    right: "-120px",
                    width: "400px",
                    height: "400px",
                    border: "1.5px solid rgba(237,131,55,.1)"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "rg-bg-c",
                style: {
                    bottom: "-100px",
                    left: "-80px",
                    width: "300px",
                    height: "300px",
                    border: "1.5px solid rgba(237,131,55,.08)"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                style: {
                    textAlign: "center",
                    marginBottom: "60px",
                    position: "relative",
                    zIndex: 2
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
                            children: "Our Specialized Virtual CFO Services"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                        className: "rg-sec-h",
                        children: [
                            "Strategic Insights. ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                children: " Data-Driven Decisions."
                            }),
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "rg-sec-sub",
                        children: "Priyam Consultancy Services delivers customized Virtual CFO solutions designed to align with your financial goals and drive sustainable business growth."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "rg-layout",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "rg-left",
                        children: REG_DATA.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: `rg-item${active === i ? " active" : ""}`,
                                        onClick: ()=>setActive(i),
                                        style: i === REG_DATA.length - 1 && active !== i ? {
                                            borderBottom: "none"
                                        } : {},
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "1rem",
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                        className: "rg-icon-box",
                                                        children: REG_ICONS[i]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                        className: "rg-name",
                                                        children: item.label
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "rg-tag-pill",
                                                children: item.tag
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "rg-item-arr",
                                                children: active === i ? "▾" : "›"
                                            })
                                        ]
                                    }),
                                    active === i && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "rg-mobile-detail",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h5", {
                                                className: "rg-d-title",
                                                dangerouslySetInnerHTML: {
                                                    __html: item.title
                                                }
                                            }),
                                            Array.isArray(item.desc) ? item.desc.map((para, pi)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "rg-d-desc",
                                                    style: {
                                                        marginBottom: pi < item.desc.length - 1 ? "0.8rem" : "0"
                                                    },
                                                    children: para
                                                }, pi)) : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "rg-d-desc",
                                                children: item.desc
                                            })
                                        ]
                                    })
                                ]
                            }, i))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "rg-right",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                style: {
                                    position: "relative",
                                    zIndex: 2,
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "rg-d-eye",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "rg-d-num",
                                                children: d.num
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "rg-d-lbl",
                                                children: d.label
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h5", {
                                        className: "rg-d-title",
                                        dangerouslySetInnerHTML: {
                                            __html: d.title
                                        }
                                    }),
                                    Array.isArray(d.desc) ? d.desc.map((para, pi)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "rg-d-desc",
                                            style: {
                                                marginBottom: pi < d.desc.length - 1 ? "1rem" : "0"
                                            },
                                            children: para
                                        }, pi)) : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "rg-d-desc",
                                        children: d.desc
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "rg-d-footer"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "rg-dots",
                                children: REG_DATA.map((_, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: `rg-ddot${active === i ? " active" : ""}`
                                    }, i))
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* ═══════════════════════════════
   SECTION 4 — SESSION CHANGE
═══════════════════════════════ */ const SC_STEPS = [
    {
        num: "01",
        color: "orange",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/sc-financial-planning-strategy.webp",
            alt: "Financial Planning and Strategy",
            width: "35",
            height: "35"
        }),
        lbl: "Step 01 · Initiation",
        title: "Financial Planning & Strategy",
        desc: "We develop budgets, forecasts, and long-term financial strategies aligned with your goals, providing a clear roadmap for profitability, sustainable growth, and informed business decision-making.",
        time: "~1 Working Day",
        tColor: "blue",
        even: false,
        last: false
    },
    {
        num: "02",
        color: "blue",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/sc-reporting-analysis.webp",
            alt: "Reporting and Analysis",
            width: "35",
            height: "35"
        }),
        lbl: "Step 02 · Documentation",
        title: "Reporting & Analysis",
        desc: "We deliver detailed reports and analytics presenting financial data clearly, monitoring performance, expenses, cash flow, and profitability to provide actionable insights for strategic decisions and financial control.",
        time: "~2-3 Working Days",
        tColor: "orange",
        even: true,
        last: false
    },
    {
        num: "03",
        color: "orange",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/sc-cashflow-liquidity.webp",
            alt: "Cash Flow and Liquidity Management",
            width: "35",
            height: "35"
        }),
        lbl: "Step 03 · Filing",
        title: "Cash Flow & Liquidity Management",
        desc: "We monitor inflows and outflows, manage working capital, and forecast cash requirements to optimize liquidity, ensuring smooth operations and preventing financial bottlenecks across your business.",
        time: "~2-4 Working Days",
        tColor: "blue",
        even: false,
        last: false
    },
    {
        num: "04",
        color: "blue",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/sc-risk-compliance.webp",
            alt: "Risk Management and Compliance",
            width: "35",
            height: "35"
        }),
        lbl: "Step 04 · Approval",
        title: "Risk Management & Compliance",
        desc: "We identify and mitigate financial and regulatory risks while ensuring compliance with statutory requirements and controls, protecting stakeholder interests and strengthening your foundation for sustainable growth.",
        time: "~5-7 Working Days",
        tColor: "orange",
        even: true,
        last: false
    },
    {
        num: "05",
        color: "orange",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/sc-continuous-advisory.webp",
            alt: "Continuous Advisory and Optimization",
            width: "35",
            height: "35"
        }),
        lbl: "Step 05 · Complete",
        title: "Continuous Advisory & Optimization",
        desc: "We provide ongoing strategic guidance, adapting financial processes to regulatory and market changes, optimizing operations, improving efficiency, and supporting sustainable growth and long-term profitability for your business.",
        time: "~1-2 Working Days",
        tColor: "blue",
        even: false,
        last: false
    },
    {
        num: "06",
        color: "blue",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/sc-cost-optimization.webp",
            alt: "Cost Optimization and Performance Improvement",
            width: "35",
            height: "35"
        }),
        lbl: "Step 06 · Complete",
        title: "Cost Optimization & Performance Improvement",
        desc: "We analyze cost structures, identify inefficiencies, and implement optimization strategies to reduce expenses while maintaining quality, improving overall efficiency, strengthening margins, and supporting long-term organizational financial sustainability.",
        time: "~2-3 Working Days",
        tColor: "orange",
        even: true,
        last: false
    }
];
function SessionChangeSection() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        style: {
            position: "relative",
            overflow: "hidden",
            padding: "90px 0 100px",
            background: '#fff'
        },
        children: [
            "      ",
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "sc-bg"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "sc-orb sc-orb-a"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "sc-orb sc-orb-b"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "sc-inner",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        style: {
                            textAlign: "center",
                            marginBottom: "90px"
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
                                    children: "Our Virtual CFO Process"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                                className: "sc-title",
                                children: [
                                    "Strategic, Transparent, and ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("em", {
                                        className: "sc-title-em",
                                        children: "Insight-Driven Financial "
                                    }),
                                    "Management"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                className: "sc-sub",
                                children: "Our Virtual CFO process at Priyam Consultancy Services is designed to meet the unique financial needs of your business, step by step. We don’t just manage numbers — we build a strategic financial framework that drives growth, profitability, and long-term success. From budgeting to reporting and advisory, every step is accurate, insightful, and tailored to your vision."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        style: {
                            position: "relative"
                        },
                        children: SC_STEPS.map((s, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: `sc-step${s.even ? " sc-step-even" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "sc-num-col",
                                        children: [
                                            !s.last && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "sc-line-v"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: `sc-circle sc-${s.color}`,
                                                children: s.num
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "sc-conn"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: `sc-card${s.last ? " sc-card-final" : ""}`,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: `sc-card-top ${s.color === "blue" ? "sc-top-blue" : "sc-top-orange"}`
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "sc-card-icon",
                                                children: s.icon
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: `sc-lbl sc-lbl-${s.color === "blue" ? "blue" : "orange"}`,
                                                children: s.lbl
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                className: "sc-card-title",
                                                children: s.title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "sc-card-desc",
                                                children: s.desc
                                            })
                                        ]
                                    })
                                ]
                            }, i))
                    })
                ]
            })
        ]
    });
}
/* ═══════════════════════════════
   SECTION 5 — HOW WE WORK
═══════════════════════════════ */ const HWW_STEPS = [
    {
        title: "Strategic Planning & Financial Oversight",
        desc: "We analyze your business model, financial priorities, and growth goals. Every recommendation — from budgeting to investments — is designed to provide clarity, control, and measurable financial impact.",
        center: false,
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hww-strategic-planning-oversigh.webp",
            alt: "Strategic Planning and Financial Oversight",
            width: "34",
            height: "34"
        })
    },
    {
        title: "Expert Team & Accountability",
        desc: "Our Virtual CFO team of analysts, accountants, and advisors ensures clear role ownership. This guarantees accuracy, accountability, and seamless execution of every financial strategy for your business.",
        center: false,
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hww-expert-team-accountability.webp",
            alt: "Expert Team and Accountability",
            width: "34",
            height: "34"
        })
    },
    {
        title: "Review, Advise & Deliver",
        desc: "We thoroughly review all reports, budgets, and plans, ensuring compliance and accuracy. Our actionable insights help you make informed decisions aligned with your long-term business objectives.",
        center: true,
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hww-review-advise-deliver.webp",
            alt: "Review Advise and Deliver",
            width: "34",
            height: "34"
        })
    },
    {
        title: "Continuous Monitoring & Support",
        desc: "We continuously track financial performance, cash flow, and compliance obligations. Ongoing guidance ensures your business stays financially healthy, compliant, and positioned for sustainable growth.",
        center: false,
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hww-continuous-monitoring-support.webp",
            alt: "Continuous Monitoring and Support",
            width: "34",
            height: "34"
        })
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
            "      ",
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
                                    children: "How We Work"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                                className: "hww-title",
                                children: [
                                    "Plan Strategically.  ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        className: "hww-accent",
                                        children: "Manage Confidently."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                className: "hww-sub",
                                children: "We create tailored compliance strategies and ensure every regulatory requirement is managed accurately and on time."
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
                                                children: s.icon
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
const faqData = [
    {
        q: "What is included in virtual CFO services?",
        a: "Virtual CFO services typically include financial planning, budgeting, cash flow management, financial reporting, compliance monitoring, business forecasting, profitability analysis, strategic advisory, and investor reporting. These services help businesses improve financial control, decision-making, and long-term growth planning without hiring a full-time CFO."
    },
    {
        q: "What does a Virtual CFO do?",
        a: "A Virtual CFO manages and oversees a company’s financial strategy, reporting, budgeting, cash flow, and business planning. They provide financial insights, risk management support, and strategic guidance that help businesses improve profitability, operational efficiency, and overall financial performance."
    },
    {
        q: "Who needs a Virtual CFO?",
        a: " Startups, small businesses, growing companies, and organizations lacking in-house financial leadership can benefit from Virtual CFO services. Businesses seeking better financial planning, strategic guidance, investor readiness, cost optimization, or scalable financial management often require Virtual CFO support."
    },
    {
        q: "How can Virtual CFOs help startups manage finances?",
        a: "Virtual CFOs help startups manage finances through budgeting, cash flow forecasting, fundraising support, financial planning, expense control, and strategic decision-making. They provide structured financial guidance that helps startups improve financial discipline, reduce risks, and plan sustainable business growth effectively."
    },
    {
        q: "What is the difference between an accountant and a Virtual CFO?",
        a: "An accountant primarily handles bookkeeping, tax filing, and financial record maintenance, while a Virtual CFO focuses on financial strategy, forecasting, business planning, profitability improvement, and decision-making support. Virtual CFOs provide higher-level financial guidance aligned with long-term business growth objectives."
    },
    {
        q: "Are virtual CFO services affordable for small businesses?",
        a: "Yes, Virtual CFO services are cost-effective for small businesses because they provide expert financial leadership without the expense of hiring a full-time CFO. Businesses gain strategic financial support, planning expertise, and operational guidance through flexible and scalable service models."
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
/* ═══════════════════════════════
   ROOT EXPORT
═══════════════════════════════ */ function BusinessRegistrationPage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Layout__rspack_import_4/* ["default"] */.A, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "pg-vcfo",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(SEOHead, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(HeroSection, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ApproachSection, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(RegistrationSection, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(SessionChangeSection, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(HowWeWorkSection, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(FAQSection, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_BlogSection__rspack_import_6/* ["default"] */.A, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_HomePage_CTA__rspack_import_2/* ["default"] */.A, {})
            ]
        })
    });
}


},

};
;