"use strict";
exports.ids = ["3937"];
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
8518(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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




const banner = "/img/inversment.webp";




function SEOHead() {
    const pageUrl = "https://www.priyamconsultancy.com/company-valuations-and-investment-support";
    const imageUrl = "https://www.priyamconsultancy.com/img/company-valuations-and-investment-support.png";
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_5/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                children: "Business Valuation & Investment Advisory Services in India | PCS "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "description",
                content: " Expert company valuation and investment support services in India. Get accurate financial insights, strategic guidance, and trusted advisory for business growth. "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "keywords",
                content: "Investment Support, Investment and Company Valuation, Investment Support Services, Company Valuation Services, Business Valuation Services, Investment Consultancy Services, Financial and Investment Services, Investment Support Services in India, Investment Valuation Services, Investment Service Consultant"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                rel: "canonical",
                href: "https://www.priyamconsultancy.com/company-valuations-and-investment-support/"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:title",
                content: "Business Valuation & Investment Advisory Services in India | PCS "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:description",
                content: " Expert company valuation and investment support services in India. Get accurate financial insights, strategic guidance, and trusted advisory for business growth. "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:url",
                content: "https://www.priyamconsultancy.com/company-valuations-and-investment-support/"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:image",
                content: imageUrl
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:site_name",
                content: "Priyam Consultancy Services"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:title",
                content: "Business Valuation & Investment Advisory Services in India | PCS "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:description",
                content: " Expert company valuation and investment support services in India. Get accurate financial insights, strategic guidance, and trusted advisory for business growth. "
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
              "@id":"https://www.priyamconsultancy.com/company-valuations-and-investment-support/",
              "name":"company-valuations-and-investment-support"
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
        "@id":"https://www.priyamconsultancy.com/company-valuations-and-investment-support/#service",
        "name":"Company Valuations and Investment Support",
        "serviceType":"Company Valuation and Investment Support Services",
        "url":"https://www.priyamconsultancy.com/company-valuations-and-investment-support/",
        "description":"Priyam Consultancy provides professional company valuation and investment support services including business valuation, financial analysis, investor readiness, fundraising support, due diligence assistance and strategic investment consulting for businesses across India.",
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
        "name": "company-valuations-and-investment-support",
        "image": ["https://www.priyamconsultancy.com/img/inversment.png"],
        "description": "Best company valuation and investment support services in Coimbatore offering business valuation, financial analysis, investor readiness, fundraising support, due diligence assistance and strategic investment consulting.",
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
        "reviewCount": "6073"
        },
        "offers": {
        "@type": "Offer",
        "url": "https://www.priyamconsultancy.com/company-valuations-and-investment-support/",
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
            "name": "What is company valuation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Company valuation is the process of determining the financial worth of a business based on factors such as revenue, assets, profitability, market position, growth potential, and financial performance. It helps businesses understand their market value for investment, mergers, fundraising, or strategic planning purposes."
            }
          },{
            "@type": "Question",
            "name": "How do you value a company for investment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A company is valued for investment by analyzing financial statements, revenue models, cash flow, assets, liabilities, market conditions, industry trends, and growth potential. Various valuation methods are applied to determine a fair and realistic business value for investors and stakeholders."
            }
          },{
            "@type": "Question",
            "name": "What are the main valuation methods?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Common company valuation methods include Discounted Cash Flow (DCF), Comparable Company Analysis, Asset-Based Valuation, Market Capitalization Method, Earnings Multiplier Method, and Precedent Transaction Analysis. The suitable method depends on the business model, industry, and investment objectives."
            }
          },{
            "@type": "Question",
            "name": "What is the difference between investment and valuation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Valuation determines the financial worth of a business, while investment refers to providing funds into the business for ownership, returns, or growth opportunities. Valuation helps investors assess risk, pricing, and potential returns before making investment decisions."
            }
          },{
            "@type": "Question",
            "name": "What are investment support services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Investment support services include business valuation, financial analysis, investor presentations, due diligence support, fundraising strategy, financial forecasting, and investment readiness consulting. These services help businesses attract investors, improve financial transparency, and support successful funding opportunities."
            }
          },{
            "@type": "Question",
            "name": "Why is valuation important before investment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Valuation helps determine a company’s fair market worth before investment discussions. It supports informed decision-making, improves negotiation clarity, reduces financial risk, and helps investors and business owners establish realistic expectations regarding ownership, funding, and future growth potential."
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
                            "Business Value Optimization "
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                        className: "hero-heading",
                        children: [
                            "Unlock True Business",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: "hl lined",
                                children: "Value with"
                            }),
                            " Expert Valuation & Investment"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "hero-sub",
                        children: "We help you see beyond the balance sheet. At Priyam Consultancy Services, our valuation and investment experts provide accurate, data-backed insights that guide funding, mergers, acquisitions, and growth decisions – empowering you to build sustainable strategies rooted in financial strength, long-term value, and business excellence."
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
                    alt: "Company Valuation Illustration",
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
                                "Company   ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "Valuation and Investment"
                                }),
                                " Support"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "Your business is more than numbers — it reflects potential, innovation, and performance. We assess every aspect of your organization in detail. This includes revenue models, assets, market position, and risk factors."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "Our approach provides a complete 360\xb0 view of your enterprise value. We ensure every factor influencing growth and valuation is carefully evaluated. This creates a strong foundation for strategic financial decisions."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "Beyond valuation, we translate insights into actionable investment strategies. We help identify funding opportunities, evaluate partnerships, and guide growth decisions. This ensures alignment with your long-term business goals."
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
        tag: "BVFM",
        label: "Business Valuation & Financial Modeling",
        title: "Know Your <i>True Worth</i>",
        desc: [
            "We begin by understanding your business model, assets, financial statements, and market positioning in detail. This helps identify key value drivers and industry benchmarks. Our approach ensures your valuation is accurate and aligned with real market condition",
            "By combining financial modeling with data-driven insights, we create a clear picture of your business worth. This supports strategic planning and investor communication. It enables confident financial decisions backed by reliable analysis."
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
        tag: "IRFS",
        label: "Investment Readiness & Funding Support",
        title: "Prepare, <i> Pitch and Prosper.</i>",
        desc: [
            "Our experts prepare your business for funding by structuring financials and refining valuation strategies. We ensure your business meets investor expectations and industry standards. This strengthens your position during funding discussions.",
            "From pitch preparation to investor alignment, we support every stage of the process. Our approach improves credibility and presentation. It increases your chances of securing the right funding for growth."
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
        tag: "MAA",
        label: "Mergers & Acquisitions Advisory",
        title: "Seamless Deals,  <i>Stronger Growth</i>",
        desc: [
            "We provide end-to-end support for mergers and acquisitions with detailed financial analysis. Our team evaluates financial data, projections, and deal structures carefully. This ensures informed decision-making throughout the transaction.",
            "By identifying risks and opportunities, we help you negotiate better terms. Our structured approach ensures smooth execution and compliance. This leads to successful and value-driven business deals."
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
        tag: "ESV",
        label: "Equity & Stakeholder Valuation",
        title: "Fair Value for <i>Every Share</i>",
        desc: [
            "We assess equity distribution and stakeholder value using accurate financial data and valuation methods. This ensures fairness and transparency in ownership structures. It helps maintain balance among stakeholders.",
            "Our insights support strategic decisions related to investments, exits, and restructuring. We present clear and reliable valuation reports. This builds trust and supports long-term business relationships."
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
        tag: "FDD",
        label: "Financial Due Diligence",
        title: "Transparency Before <i>Every Transaction</i>",
        desc: [
            "We conduct thorough financial due diligence to verify data accuracy and compliance. Our team reviews financial records, reports, and operational metrics in detail. This helps identify risks before any transaction.",
            "By ensuring transparency and reliability, we strengthen investor confidence. Our process minimizes uncertainties and supports informed decisions. It ensures secure and well-evaluated financial transactions."
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
        tag: "GES",
        label: "Growth & Expansion Strategy",
        title: "Plan Smart,  <i>Scale Confidently</i>",
        desc: [
            "We develop growth strategies based on financial insights, market trends, and business performance. Our approach focuses on scalability and long-term sustainability. This helps your business expand with clarity and direction.",
            "As your business evolves, we continuously refine strategies and financial plans. This keeps your growth aligned with market dynamics. It ensures you are always prepared for new opportunities."
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
        src: "/img/icon/business-valuation-modeling.webp",
        alt: "Business Valuation and Financial Modeling",
        width: "20",
        height: "20"
    }),
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        src: "/img/icon/investment-readiness-funding.webp",
        alt: "Investment Readiness and Funding Support",
        width: "20",
        height: "20"
    }),
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        src: "/img/icon/mergers-acquisitions-advisory.webp",
        alt: "Mergers and Acquisitions Advisory",
        width: "20",
        height: "20"
    }),
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        src: "/img/icon/equity-stakeholder-valuation.webp",
        alt: "Equity and Stakeholder Valuation",
        width: "20",
        height: "20"
    }),
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        src: "/img/icon/financial-due-diligence.webp",
        alt: "Financial Due Diligence",
        width: "20",
        height: "20"
    }),
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        src: "/img/icon/growth-expansion-strategy.webp",
        alt: "Growth and Expansion Strategy",
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
                            children: "Our Specialized Valuation and Investment Services"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                        className: "rg-sec-h",
                        children: [
                            "Accurate Insights. ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                children: " Strategic Decisions."
                            }),
                            " Confident Growth."
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "rg-sec-sub",
                        children: "Priyam Consultancy Services delivers customized valuation and investment solutions that combine financial precision with strategic foresight, helping you maximize value and make informed business moves."
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
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
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
            src: "/img/icon/sc-business-valuation.webp",
            alt: "Business Valuation",
            width: "35",
            height: "35"
        }),
        lbl: "Step 01 · Initiation",
        title: "Business Valuation",
        desc: "We provide comprehensive valuation services to determine your business’s true economic worth based on performance, assets, and potential, supporting informed decisions, funding, or strategic transactions.",
        time: "~1 Working Day",
        tColor: "blue",
        even: false,
        last: false
    },
    {
        num: "02",
        color: "blue",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/sc-financial-modeling.webp",
            alt: "Financial Modeling and Forecasting",
            width: "35",
            height: "35"
        }),
        lbl: "Step 02 · Documentation",
        title: "Financial Modeling & Forecasting",
        desc: "We develop dynamic financial models and forecasts that simulate scenarios, assess profitability and liquidity, and provide stakeholders a clear view of future financial performance and scalability.",
        time: "~2-3 Working Days",
        tColor: "orange",
        even: true,
        last: false
    },
    {
        num: "03",
        color: "orange",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/sc-investment-readiness.webp",
            alt: "Investment Readiness Assessment",
            width: "35",
            height: "35"
        }),
        lbl: "Step 03 · Filing",
        title: "Investment Readiness Assessment",
        desc: "We evaluate financial stability, governance, and documentation to ensure your business meets investor expectations, presenting a credible and well-prepared case for funding or strategic partnerships.",
        time: "~2-4 Working Days",
        tColor: "blue",
        even: false,
        last: false
    },
    {
        num: "04",
        color: "blue",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/sc-mergers-acquisitions.webp",
            alt: "Mergers and Acquisitions Support",
            width: "35",
            height: "35"
        }),
        lbl: "Step 04 · Approval",
        title: "Mergers & Acquisitions Support",
        desc: "We guide you through due diligence, valuation, and deal structuring, helping negotiate favorable terms and ensure seamless financial integration throughout the merger or acquisition process.",
        time: "~5-7 Working Days",
        tColor: "orange",
        even: true,
        last: false
    },
    {
        num: "05",
        color: "orange",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/sc-investor-relations.webp",
            alt: "Investor Relations and Strategy",
            width: "35",
            height: "35"
        }),
        lbl: "Step 05 · Complete",
        title: "Investor Relations & Strategy",
        desc: "We strengthen investor communications through accurate reporting and valuation insights, building confidence, supporting transparency, and fostering long-term relationships that drive sustainable financial growth.",
        time: "~1-2 Working Days",
        tColor: "blue",
        even: false,
        last: false
    },
    {
        num: "06",
        color: "blue",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/sc-regulatory-compliance.webp",
            alt: "Regulatory and Compliance Advisory",
            width: "35",
            height: "35"
        }),
        lbl: "Step 06 · Complete",
        title: "Regulatory & Compliance Advisory",
        desc: "We ensure all valuations and reports comply with legal, accounting, and tax standards, reducing risks and enhancing credibility during audits, reviews, and investor evaluations.",
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
                                    children: "Our Company Valuation and Investment Support Execution Process"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                                className: "sc-title",
                                children: [
                                    "Structured, Transparent, and ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("em", {
                                        className: "sc-title-em",
                                        children: "Value-Driven Advisory "
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                className: "sc-sub",
                                children: "Our Business Registration process at Priyam Consultancy Services is tailored to your business needs. We don’t just file paperwork , we build a solid legal foundation for growth, credibility, and long-term success."
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
        title: "Strategic Evaluation & Planning",
        desc: "We begin by analyzing your business objectives, market presence, and financial performance. Our strategies are built to highlight your business strengths and maximize value through accurate, transparent valuations.",
        center: false,
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hww-strategic-evaluation.webp",
            alt: "Strategic Evaluation and Planning",
            width: "34",
            height: "34"
        })
    },
    {
        title: "Expert Team & Proven Methodology",
        desc: "Our team of financial analysts, valuation experts, and investment advisors brings deep industry experience and analytical rigor to every project. Each step is data-backed, methodical, and aligned with global valuation standards.",
        center: false,
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hww-expert-team-methodology.webp",
            alt: "Expert Team and Proven Methodology",
            width: "34",
            height: "34"
        })
    },
    {
        title: "Review, Validate & Present",
        desc: "Before finalizing, we review all data models, assumptions, and projections for accuracy. We then present findings in a clear, investor-ready format — ensuring your business is positioned confidently in every negotiation or funding discussion.",
        center: true,
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hww-review-validate-present.webp",
            alt: "Review Validate and Present",
            width: "34",
            height: "34"
        })
    },
    {
        title: "Ongoing Support & Strategic Guidance",
        desc: "We provide continuous support post-valuation, offering actionable insights for investment decisions, funding rounds, and growth planning, ensuring your business leverages its true value effectively and sustainably.",
        center: false,
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hww-ongoing-support-guidance.webp",
            alt: "Ongoing Support and Strategic Guidance",
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
                                    "Evaluate Precisely. ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        className: "hww-accent",
                                        children: "Advise Strategically."
                                    }),
                                    " Deliver Confidently."
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                className: "hww-sub",
                                children: "We provide expert financial analysis and guidance to help your business make informed, growth-focused decisions with confidence."
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
        q: "What is company valuation?",
        a: "Company valuation is the process of determining the financial worth of a business based on factors such as revenue, assets, profitability, market position, growth potential, and financial performance. It helps businesses understand their market value for investment, mergers, fundraising, or strategic planning purposes."
    },
    {
        q: "How do you value a company for investment?",
        a: "A company is valued for investment by analyzing financial statements, revenue models, cash flow, assets, liabilities, market conditions, industry trends, and growth potential. Various valuation methods are applied to determine a fair and realistic business value for investors and stakeholders"
    },
    {
        q: "What are the main valuation methods?",
        a: "Common company valuation methods include Discounted Cash Flow (DCF), Comparable Company Analysis, Asset-Based Valuation, Market Capitalization Method, Earnings Multiplier Method, and Precedent Transaction Analysis. The suitable method depends on the business model, industry, and investment objectives."
    },
    {
        q: "What is the difference between investment and valuation?",
        a: "Valuation determines the financial worth of a business, while investment refers to providing funds into the business for ownership, returns, or growth opportunities. Valuation helps investors assess risk, pricing, and potential returns before making investment decisions."
    },
    {
        q: "What are investment support services?",
        a: "Investment support services include business valuation, financial analysis, investor presentations, due diligence support, fundraising strategy, financial forecasting, and investment readiness consulting. These services help businesses attract investors, improve financial transparency, and support successful funding opportunities"
    },
    {
        q: "Why is valuation important before investment?",
        a: "Valuation helps determine a company’s fair market worth before investment discussions. It supports informed decision-making, improves negotiation clarity, reduces financial risk, and helps investors and business owners establish realistic expectations regarding ownership, funding, and future growth potential"
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
            className: "pg-cvis",
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