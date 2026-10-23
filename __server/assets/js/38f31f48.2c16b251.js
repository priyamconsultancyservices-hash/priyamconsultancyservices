"use strict";
exports.ids = ["5655"];
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
3610(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (PCSPage)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _components_HomePage_CTA__rspack_import_2 = __webpack_require__(9393);
/* import */ var _emailjs_browser__rspack_import_3 = __webpack_require__(58);
/* import */ var _components_BlogSection__rspack_import_4 = __webpack_require__(3177);
/* import */ var _docusaurus_Link__rspack_import_5 = __webpack_require__(5310);
/* import */ var _theme_Layout__rspack_import_6 = __webpack_require__(8328);
/* import */ var _docusaurus_Head__rspack_import_7 = __webpack_require__(3572);









const Bannerimg = "/img/business-registration-compliance.png";
/* ═══════════════════════════════════════════════════
   SEO META & SCHEMA
═══════════════════════════════════════════════════ */ function SEOHead() {
    const pageUrl = "https://www.pcsbusinesssolution.com/business-registration-compliance";
    const imageUrl = "https://www.pcsbusinesssolution.com/img/business-registration-compliance.png";
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_7/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                children: "Business Registration and Compliance Services | Company Registration"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "description",
                content: "Efficient Business Registration and Compliance Services. Get expert support for company registration, legal documentation, and regulatory compliance. Contact us!"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "keywords",
                content: "Business Registration and Compliance, Business Registration and Compliance Services, Company Registration & Compliance in India, Business Registration Services, Company Registration and Compliances, Business License Registration, Business Registration Consultants, Statutory Compliance Services, Investment and Company Valuation, Virtual CFO Services, Accounting Services, Financial Services"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                rel: "canonical",
                href: "https://www.priyamconsultancy.com/business-registration-compliance/"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:title",
                content: "Business Registration and Compliance Services | Company Registration"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:description",
                content: "Efficient Business Registration and Compliance Services. Get expert support for company registration, legal documentation, and regulatory compliance. Contact us!"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:url",
                content: "https://www.priyamconsultancy.com/business-registration-compliance/"
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
                content: "Business Registration & Compliance Services | PCS Business Solution"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:description",
                content: "Complete business registration & compliance management in India. PCS Business Solution."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:image",
                content: imageUrl
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                type: "application/ld+json",
                children: `
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
        "@id": "https://www.priyamconsultancy.com/business-registration-compliance/",
        "name": "business-registration-compliance"
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
  "url": "www.priyamconsultancy.com/",
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
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.priyamconsultancy.com/business-registration-compliance/#service",
  "name": "Business Registration & Compliance",
  "serviceType": "Business Registration & Compliance Services",
  "url": "https://www.priyamconsultancy.com/business-registration-compliance/",
  "description": "Priyam Consultancy provides professional business registration and compliance services including company registration, statutory compliance, virtual CFO services, company valuation and investment support across India.",
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
}
      `
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                type: "application/ld+json",
                children: `

  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Business Registration and Compliance",
  "image": ["https://www.priyamconsultancy.com/wp-content/uploads/2025/10/business-registration-compliances.png"],
  "description": "Streamline your business registration and compliance with expert guidance. Ensure your business stays compliant and grows with fast, accurate, and hassle-free services.",
  "mpn": "priyamconsultancy.com",
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
    "reviewCount": "4345"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.priyamconsultancy.com/business-registration-compliance/",
    "priceCurrency": "USD",
    "price": "00.00",
    "priceValidUntil": "2025-12-31",
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
    "name": "What are the benefits of digital transformation?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Digital transformation improves operational efficiency, enhances customer experience, and enables data-driven decision-making. It drives innovation, scalability, and long-term business growth." 
    } 
  },{ 
    "@type": "Question", 
    "name": "What are the challenges of digital transformation?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Challenges include resistance to change, technology integration issues, skill gaps, data security concerns, and the need for clear strategic planning." 
    }
  },{ 
    "@type": "Question", 
    "name": "What Types Of Digital Marketing Services Do You Provide?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "We offer SEO, PPC, social media marketing, content marketing, email campaigns, and analytics-driven strategies to boost online visibility and engagement." 
    } 
  },{ 
    "@type": "Question", 
    "name": "How Are Your HR Services Different From Other Agencies?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "We provide tailored HR solutions, combining strategy, compliance, payroll, recruitment, and employee engagement, with a focus on seamless integration into your business operations." 
    } 
 },{ 
    "@type": "Question", 
    "name": "What is a company registration?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Company registration is the legal process of forming a business entity, obtaining licenses, and ensuring compliance with government regulations to operate officially." 
    } 
 },{ 
    "@type": "Question", 
    "name": "How Long To See Results Through Digital Marketing?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Results vary by strategy; paid campaigns may show immediate impact, while SEO and organic efforts typically take 3–6 months for measurable outcomes." 
    } 
    }] 

      `
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                type: "application/ld+json",
                children: `
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Website Development Services",
  "image": ["https://www.priyamconsultancy.com/wp-content/uploads/2025/08/website-development-services.webp"],
  "description": "We provide expert web development services in India to help you transform your business. Website design and development, mobile app development, and SEO are some of our services.",
  "mpn": "priyamconsultancy.com",
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
    "reviewCount": "4327"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.priyamconsultancy.com/website-development/",
    "priceCurrency": "USD",
    "price": "00.00",
    "priceValidUntil": "2025-12-31",
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
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What Types Of Digital Marketing Services Do You Provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We approach each business as a whole, offering a range of services from SEO, social media marketing, Google & Meta ads, content marketing, email marketing, and performance tracking related to your business objectives."
      }
    },
    {
      "@type": "Question",
      "name": "How Long Does It Take To See Results Through Digital Marketing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This varies depending on the service. Generally, SEO will take 3-6 months to see any measurable impact, while paid campaigns and email marketing can help drive leads in days. We focus on providing short-term gains, while also contending with long-term objectives."
      }
    },
    {
      "@type": "Question",
      "name": "Will Your Team Understand My Industry?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "100%. We spend an immense amount of time becoming well acquainted with your niche market before we initiate any campaign, dissecting everything from brand voice and market dynamics to audience behavior."
      }
    },
    {
      "@type": "Question",
      "name": "How Are Your HR Services Different From Other Agencies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our specialty is matching candidates to your culture, vision, and long-term objectives, rather than simply matching candidates to roles. Our approach is people-first and performance-backed."
      }
    },
    {
      "@type": "Question",
      "name": "You Help Us With Hiring As Well As Retention?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We do everything from the sourcing of top-tier talent to designing the onboarding, engagement, and retention strategy. We handle the full employee life-cycle so you can stay focused on your growth."
      }
    },
    {
      "@type": "Question",
      "name": "Do You Provide Custom HR Solutions For Small Businesses Or Start-Ups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We will tailor our HR services to fit your stage and size – whether it is your first team or you're scaling quickly."
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
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Smarter Healthcare Solutions",
  "image": ["https://www.priyamconsultancy.com/wp-content/uploads/2025/10/healthcare-2048x1678.webp"],
  "description": "Accelerate innovation in the healthcare industry with our Digital Transformation solutions. Enhance patient care, streamline operations, and boost efficiency with smart technologies.",
  "mpn": "priyamconsultancy.com",
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
    "reviewCount": "4193"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.priyamconsultancy.com/healthcare/",
    "priceCurrency": "USD",
    "price": "00.00",
    "priceValidUntil": "2025-12-31",
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
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What do you mean by Data Analytics Services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Data Analytics Services involve collecting, processing, and interpreting data to extract meaningful insights that support better business decisions and improve performance."
      }
    },
    {
      "@type": "Question",
      "name": "What are the 4 types of Data Analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The four types are Descriptive, Diagnostic, Predictive, and Prescriptive Analytics, each helping businesses understand the past, analyze causes, forecast outcomes, and recommend future actions."
      }
    },
    {
      "@type": "Question",
      "name": "Are your Data and Analytics Services scalable for future needs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our Data Analytics Solutions are designed for scalability, ensuring they adapt seamlessly to evolving data volumes, business models, and technology advancements."
      }
    },
    {
      "@type": "Question",
      "name": "What is Data Analytics with an example?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Data analytics is the process of analyzing raw data to find patterns or trends — for example, a retail company analyzing customer purchase data to predict future demand."
      }
    },
    {
      "@type": "Question",
      "name": "What is the main purpose of Data Analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The main purpose of Data Analytics is to transform data into actionable insights, helping organizations optimize operations, improve decision-making, and drive business growth."
      }
    },
    {
      "@type": "Question",
      "name": "Why are Data Analytics Services important for businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They help businesses identify opportunities, minimize risks, enhance efficiency, and make data-backed decisions that lead to measurable growth and competitive advantage."
      }
    }
  ]
}
      `
            })
        ]
    });
}
/* ─── Scroll reveal ─── */ function useReveal() {
    (0,react__rspack_import_1.useEffect)(()=>{
        const io = new IntersectionObserver((es)=>es.forEach((e)=>{
                if (e.isIntersecting) {
                    e.target.classList.add("on");
                    io.unobserve(e.target);
                }
            }), {
            threshold: 0.1
        });
        document.querySelectorAll(".reveal").forEach((el)=>io.observe(el));
        return ()=>io.disconnect();
    }, []);
}
/* ─── DATA ─── */ const AP_STEPS = (/* unused pure expression or super */ null && ([
    {
        icon: "📊",
        title: "360° Enterprise Assessment",
        desc: "We evaluate revenue models, assets, market positioning, and risk factors to build a complete picture of your enterprise value."
    },
    {
        icon: "🎯",
        title: "Investment Strategy Translation",
        desc: "Our experts convert valuations into actionable strategies — identifying funding opportunities and growth-aligned partnerships."
    },
    {
        icon: "🚀",
        title: "Long-Term Growth Decisions",
        desc: "We help you make informed decisions that align with your goals, ensuring sustainable performance and investor confidence."
    }
]));
const SERVICES = [
    {
        n: "01",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/business-registration-service.webp",
            alt: "Business Registration",
            width: "28",
            height: "28"
        }),
        title: "Business Registration",
        desc: "Public Limited, Private Limited, LLP, OPC, Partnership, Sole Proprietorship services.",
        link: "/business-registrations"
    },
    {
        n: "02",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/company-valuations-service.webp",
            alt: "Company Valuations",
            width: "28",
            height: "28"
        }),
        title: "Company Valuations",
        desc: "Accurate valuations and strategic guidance to fuel funding, growth, and smart investments.",
        link: "/company-valuations-and-investment-support"
    },
    {
        n: "03",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/statutory-compliance-service.webp",
            alt: "Statutory Compliance",
            width: "28",
            height: "28"
        }),
        title: "Statutory Compliance",
        desc: "Ensuring timely filings, audits, and adherence to all regulatory requirements.",
        link: "/statutory-compliance"
    },
    {
        n: "04",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/virtual-services.webp",
            alt: "Virtual CFO Services",
            width: "28",
            height: "28"
        }),
        title: "Virtual CFO Services",
        desc: "Strategic financial guidance, budgeting, and reporting to drive informed business decisions.",
        link: "/virtual-cfo-services"
    },
    {
        n: "05",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/accounting-service.webp",
            alt: "Accounting",
            width: "28",
            height: "28"
        }),
        title: "Accounting",
        desc: "Complete accounting, GST, TDS, MIS reports, payroll, and comprehensive full-scale back-office support.",
        link: "/accounting"
    },
    {
        n: "06",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/finances-service.webp",
            alt: "Finances",
            width: "28",
            height: "28"
        }),
        title: "Finances",
        desc: "Banking, loans, CMA reports, audits, approvals, and complete financial support services.",
        link: "/finances"
    }
];
const PROCESS_STEPS = [
    {
        n: "01",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/business-registration-discover.webp",
            alt: "Discover",
            width: "28",
            height: "28"
        }),
        title: "Discover",
        desc: "Every successful business begins with understanding. We learn your goals, model, and growth vision, analyze industry and ownership, and recommend the best entity for long-term alignment.",
        color: "#ed8337"
    },
    {
        n: "02",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/business-registration-assess.webp",
            alt: "Assess and Plan",
            width: "28",
            height: "28"
        }),
        title: "Assess & Plan",
        desc: "After understanding goals, we review legal, financial, and compliance requirements for your location and structure, mapping registrations, licenses, and taxes to create a clear, risk-aware launch roadmap.",
        color: "#38bdf8"
    },
    {
        n: "03",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/business-registration-register.webp",
            alt: "Register and Establish",
            width: "28",
            height: "28"
        }),
        title: "Register & Establish",
        desc: "Our experts prepare and file all documents—name approval, incorporation, PAN, TAN, GST, and professional tax—ensuring accuracy, transparency, and efficient, confusion-free legal establishment for your business.",
        color: "#34d399"
    },
    {
        n: "04",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/business-registration-comply.webp",
            alt: "Comply and Maintain",
            width: "28",
            height: "28"
        }),
        title: "Comply & Maintain",
        desc: "We manage statutory filings, annual returns, renewals, ROC and tax submissions, meeting deadlines, maintaining records, and keeping your business compliant, audit-ready, and legally strong year-round.",
        color: "#a855f7"
    },
    {
        n: "05",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/business-registration-monitor.webp",
            alt: "Monitor and Update",
            width: "28",
            height: "28"
        }),
        title: "Monitor & Update",
        desc: "Regulations evolve, and so do you. We monitor changes, update registrations, amend records, and advise proactively, ensuring ongoing compliance, accuracy, and alignment with your business growth.",
        color: "#f6ad55"
    }
];
const WHY_CARDS = [
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/professional-credibility.webp",
            alt: "Professional Credibility",
            width: "28",
            height: "28"
        }),
        title: "Professional Credibility",
        desc: "Build strong trust with clients and partners through a verified and professionally registered business presence."
    },
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/financial-advantages.webp",
            alt: "Financial Advantages",
            width: "28",
            height: "28"
        }),
        title: "Financial Advantages",
        desc: "Access loans, funding, and tax benefits that support smoother financial growth and scalability."
    },
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/compliance-assurance.webp",
            alt: "Compliance Assurance",
            width: "28",
            height: "28"
        }),
        title: "Compliance Assurance",
        desc: "Stay fully compliant with timely filings, updates, and expert monitoring of regulatory requirements."
    }
];
/* ═══════════════════════════════════════════════════
   SECTION 1 — HERO (exact SVG + animations)
═══════════════════════════════════════════════════ */ function HeroSection() {
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
                            "Business Registration Compliance"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                        className: "hero-heading",
                        children: [
                            "Simple Registration Made ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: "hl lined",
                                children: "Strong  business"
                            }),
                            ", Compliance"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "hero-sub",
                        children: "We start with clarity. We get to know your business, your plans, and the direction you want to grow in. Then we tailor the right structure and registration approach to fit your exact needs. We look for what slows you down incomplete documents, missed filings, or confusing procedures  and make the entire process simple, transparent, and stress-free."
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
                    src: Bannerimg,
                    alt: "Business Registration",
                    className: "hero-img"
                })
            })
        ]
    });
}
/* ═══════════════════════════════════════════════════
   SECTION 2 — OUR APPROACH (light + floating labels)
═══════════════════════════════════════════════════ */ function ApproachSection() {
    const [form, setForm] = (0,react__rspack_import_1.useState)({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
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
                                "Business  ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "Registration & Compliance"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "Every great business starts with a strong foundation. We help you register, comply, and launch with confidence. You won’t face confusion, complexity, or red tape that can hold startups back."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "We take care of everything from choosing the right business structure to handling legal filings, licenses, and documentation. Our approach ensures a smooth, hassle-free setup process. This allows you to stay focused on your ideas, innovation, and growth"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "As regulations evolve, we stay ahead for you by monitoring changes and ensuring ongoing compliance. Your business remains protected, updated, and future-ready. Simple, seamless, and reliable—built for lasting success."
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
/* ═══════════════════════════════════════════════════
   SECTION 3 — SERVICES
═══════════════════════════════════════════════════ */ function ServicesSection() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "services",
        id: "services",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "sep-line"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "svc-header reveal",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                        className: "partners-eyebrow",
                        style: {
                            marginBottom: '20px',
                            textAlign: 'start'
                        },
                        children: "Our Specialized Business Registration & Compliance Services"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                        className: "partners-h3-title",
                        children: [
                            "Simplified Setup. ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("em", {
                                style: {
                                    color: '#ed8337',
                                    marginBottom: '20px'
                                },
                                children: " Seamless Compliance. "
                            }),
                            "Growth Assured."
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        children: "From Registration to Reporting, We Deliver End-to-End Solutions That Keep Your Business On Track."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "svc-grid reveal",
                style: {
                    transitionDelay: "0.1s"
                },
                children: SERVICES.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "svc-card",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "svc-num",
                                children: item.n
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "svc-icon",
                                children: item.icon
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                className: "svc-title",
                                children: item.title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                className: "svc-desc",
                                children: item.desc
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_5/* ["default"] */.A, {
                                to: item.link,
                                className: "svc-btn",
                                children: "Discover More →"
                            })
                        ]
                    }, i))
            })
        ]
    });
}
/* ═══════════════════════════════════════════════════
   SECTION 4 — PROCESS (vertical timeline card design)
═══════════════════════════════════════════════════ */ function ProcessSection() {
    const TAGS = [
        "Discover",
        "Assess & Plan",
        "Register & Establish",
        "Comply & Maintain",
        "Monitor & Update"
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "process",
        id: "process",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "sep-line"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "proc-header reveal",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                        className: "partners-eyebrow",
                        style: {
                            marginBottom: '20px',
                            textAlign: 'start',
                            color: '#ed8337'
                        },
                        children: "Our Proven Business Registration and Compliance Process"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                        className: "pr-heading-process",
                        children: [
                            "Start Smart. ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("em", {
                                style: {
                                    color: '#ed8337'
                                },
                                children: "Stay Compliant."
                            }),
                            " Grow Fast."
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        children: "From registration to compliance management, we deliver structured, reliable, and efficient solutions for your business success."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "proc-timeline reveal",
                style: {
                    transitionDelay: "0.1s"
                },
                children: PROCESS_STEPS.map((step, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "proc-tl-row",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "proc-tl-num",
                                children: step.n
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "proc-tl-spine",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "proc-tl-dot"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "proc-tl-line"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "proc-tl-card",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "proc-tl-card-inner",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "proc-tl-icon-box",
                                            children: step.icon
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: "proc-tl-text",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    className: "proc-tl-badge",
                                                    children: [
                                                        "Step ",
                                                        step.n
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                    className: "proc-tl-title",
                                                    children: step.title
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                    className: "proc-tl-desc",
                                                    children: step.desc
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "proc-tl-tag",
                                            children: TAGS[idx]
                                        })
                                    ]
                                })
                            })
                        ]
                    }, step.n))
            })
        ]
    });
}
/* ═══════════════════════════════════════════════════
   SECTION 5 — WHY PCS
═══════════════════════════════════════════════════ */ function WhySection() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "why",
        id: "why",
        style: {
            background: '#004168'
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "sep-line"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "why-diagonal"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "why-inner",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "why-left1 reveal",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                className: "partners-eyebrow",
                                style: {
                                    marginBottom: '20px',
                                    textAlign: 'start'
                                },
                                children: "Why Choose Us"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                                className: "partners-h3-title",
                                children: [
                                    "Why You Should Choose us for ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("em", {
                                        style: {
                                            color: '#ed8337'
                                        },
                                        children: " Business Registration"
                                    }),
                                    " & Compliance Services"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                style: {
                                    marginTop: '20px'
                                },
                                children: "Starting your business the right way means setting a strong foundation from day one. Registering your business not only gives it a legal identity but also adds credibility, unlocks financial opportunities, and safeguards you from future compliance issues. With expert registration support, you save time, avoid errors, and ensure your business is ready to grow without roadblocks."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                                href: "#approach",
                                className: "why-cta",
                                children: [
                                    "Get Started Free",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                                            d: "M5 12h14M12 5l7 7-7 7"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "why-right reveal",
                        style: {
                            transitionDelay: "0.12s"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "why-card tall",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "why-card-icon",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                            src: "/img/icon/business-registration-legal.webp",
                                            alt: "Legal Identity and Protection",
                                            width: "28",
                                            height: "28"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                        className: "why-card-title",
                                        children: "Legal Identity & Protection"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        className: "why-card-desc",
                                        children: "Secure your business with proper registration, ensuring legal recognition and complete protection from risks."
                                    })
                                ]
                            }),
                            WHY_CARDS.map((c)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "why-card",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "why-card-icon",
                                            children: c.icon
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                            className: "why-card-title",
                                            children: c.title
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            className: "why-card-desc",
                                            children: c.desc
                                        })
                                    ]
                                }, c.title))
                        ]
                    })
                ]
            })
        ]
    });
}
const faqData = [
    {
        q: "What is business compliance?",
        a: "Business compliance refers to following all legal, regulatory, financial, and operational requirements applicable to a company. This includes registrations, tax filings, labor laws, statutory reporting, and industry-specific regulations necessary to ensure smooth, lawful, and risk-free business operations."
    },
    {
        q: "What documents are needed for business registration?",
        a: " Business registration documents typically include PAN card, Aadhaar card, address proof, passport-size photographs, bank details, and registered office proof. Additional documents may vary depending on the business structure, such as proprietorship, partnership, LLP, or private limited company registration requirements."
    },
    {
        q: "Why is compliance important for a business?",
        a: "Compliance helps businesses operate legally, avoid penalties, maintain financial transparency, and build credibility with clients, investors, and government authorities. Proper compliance management also supports smooth business operations, reduces legal risks, and creates a strong foundation for sustainable long-term growth and expansion."
    },
    {
        q: "What are the annual compliance requirements for a company?",
        a: " Annual compliance requirements may include income tax filing, GST returns, ROC filings, financial statement submissions, board resolutions, statutory audits, TDS filings, payroll compliance, and maintenance of legal records. Requirements vary based on company structure, industry, and applicable government regulations."
    },
    {
        q: "Can you help with both registration and compliance?",
        a: " Yes, we provide complete support for business registration and ongoing compliance management. Our services include company incorporation, GST registration, licensing, ROC filings, tax compliance, payroll compliance, documentation management, and statutory reporting to ensure smooth and legally compliant business operations."
    },
    {
        q: "What are the types of compliance?",
        a: "Business compliance includes statutory compliance, tax compliance, labor law compliance, corporate compliance, environmental compliance, industry-specific regulatory compliance, and financial reporting compliance. Each type ensures businesses operate according to applicable laws, regulations, and operational standards within their respective industries."
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
/* ═══════════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════════ */ function PCSPage() {
    useReveal();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_6/* ["default"] */.A, {
        title: "Business Registration and Compliance Services | Company Registration ",
        description: "Efficient Business Registration and Compliance Services. Get expert support for company registration, legal documentation, and regulatory compliance. Contact us! ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(SEOHead, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "pcs",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(HeroSection, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ApproachSection, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ServicesSection, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ProcessSection, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(WhySection, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(FAQSection, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_BlogSection__rspack_import_4/* ["default"] */.A, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_HomePage_CTA__rspack_import_2/* ["default"] */.A, {})
                ]
            })
        ]
    });
}


},

};
;