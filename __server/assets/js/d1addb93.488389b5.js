"use strict";
exports.ids = ["5508"];
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
7667(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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





const banner = "/img/statutory-compliance.webp";



function SEOHead() {
    const pageUrl = "https://www.priyamconsultancy.com/statutory-compliance/";
    const imageUrl = "https://www.priyamconsultancy.com/img/statutory-compliance.png";
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_5/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                children: "Statutory Compliance Services in Coimbatore | Statutory Compliance"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "description",
                content: "Reliable statutory compliance services in Coimbatore. Ensure legal adherence, payroll & labor law compliance with expert guidance for smooth business operations."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "keywords",
                content: "Statutory Compliance, Statutory Compliance Services, Statutory Compliance Consultants, HR & Statutory Compliance Services, Statutory Compliance Services Providers, HR and Payroll Statutory Compliance, Statutory Compliance Solutions, Statutory Compliance Outsourcing, Statutory Compliance Company, Labour Statutory Compliances"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                rel: "canonical",
                href: "https://www.priyamconsultancy.com/statutory-compliance/"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:title",
                content: "Statutory Compliance Services in Coimbatore | Statutory Compliance"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:description",
                content: "Reliable statutory compliance services in Coimbatore. Ensure legal adherence, payroll & labor law compliance with expert guidance for smooth business operations."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:url",
                content: "https://www.priyamconsultancy.com/statutory-compliance/"
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
                content: "Statutory Compliance Services in Coimbatore | Statutory Compliance"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:description",
                content: "Reliable statutory compliance services in Coimbatore. Ensure legal adherence, payroll & labor law compliance with expert guidance for smooth business operations."
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
              "@id":"https://www.priyamconsultancy.com/statutory-compliance/",
              "name":"statutory-compliance"
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
          "@id":"https://www.priyamconsultancy.com/statutory-compliance/#service",
          "name":"Statutory Compliance",
          "serviceType":"Statutory Compliance Services",
          "url":"https://www.priyamconsultancy.com/statutory-compliance/",
          "description":"Priyam Consultancy provides professional statutory compliance services including GST compliance, TDS filings, PF and ESI compliance, ROC filings, payroll compliance and regulatory compliance management for businesses across India.",
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
        "name": "statutory-compliance",
        "image": ["https://www.priyamconsultancy.com/img/statutory-compliance.png"],
        "description": "Best statutory compliance services in Coimbatore offering GST compliance, TDS filings, PF and ESI compliance, ROC filings, payroll compliance and regulatory compliance management for businesses.",
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
        "reviewCount": "6218"
        },
        "offers": {
        "@type": "Offer",
        "url": "https://www.priyamconsultancy.com/statutory-compliance/",
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
            "name": "What is statutory compliance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Statutory compliance refers to adhering to government-mandated laws, regulations, and legal requirements applicable to a business. This includes labor laws, tax filings, payroll regulations, PF, ESI, TDS, ROC filings, and other statutory obligations necessary for lawful business operations."
            }
          },{
            "@type": "Question",
            "name": "Why is compliance important for a business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Compliance helps businesses operate legally, avoid penalties, maintain financial transparency, and build credibility with clients, investors, and regulatory authorities. Proper compliance management also reduces operational risks and supports sustainable long-term business growth and smooth organizational functioning."
            }
          },{
            "@type": "Question",
            "name": "What are the Big 6 compliance requirements?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The commonly referred Big 6 compliance requirements include GST, TDS, PF, ESI, Professional Tax, and ROC filings. These are essential statutory obligations businesses must manage regularly to maintain legal compliance and avoid penalties or regulatory issues."
            }
          },{
            "@type": "Question",
            "name": "Do small businesses need compliance services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, small businesses also require compliance services to meet legal, tax, labor, and regulatory obligations. Proper compliance management helps avoid penalties, improves operational structure, builds credibility, and ensures smooth business growth from the early stages of operations."
            }
          },{
            "@type": "Question",
            "name": "What is the difference between legal and statutory compliance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Legal compliance refers to following all applicable laws and regulations governing business operations, while statutory compliance specifically relates to mandatory requirements defined under statutory acts such as tax laws, labor laws, payroll regulations, and corporate filing obligations."
            }
          },{
            "@type": "Question",
            "name": "What happens if compliance is missed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Missing compliance requirements can lead to penalties, legal notices, financial liabilities, operational disruptions, and reputational damage. Continued non-compliance may also affect business credibility, regulatory approvals, taxation processes, and future business expansion or investment opportunities."
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
                            "Statutory Compliance"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                        className: "hero-heading",
                        children: [
                            "Statutory Compliance",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: "hl lined",
                                children: "Partner"
                            }),
                            " for Accuracy,",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}),
                            "Reliability & Growth"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "hero-sub",
                        children: "Timely filings, audits, and regulatory adherence are critical for your business’s credibility and operational stability. At Priyam Consultancy Services, we simplify compliance management, ensuring your business stays legally secure, avoids penalties, and maintains a strong foundation for growth."
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
                    alt: "Statutory Compliance Illustration",
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
                                "Statutory   ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "Compliance"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "Your business operations and regulatory obligations are unique. That is why your compliance approach must be personalized and well-structured. We begin by understanding your requirements in detail."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "We assess your reporting needs and design a clear, step-by-step compliance plan. This covers audits, filings, and statutory responsibilities with accuracy. Everything is managed efficiently and always on schedule."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "Statutory compliance brings clarity and peace of mind to your business. We track deadlines, maintain proper documentation, and adapt to regulatory changes. This keeps your business compliant while you focus on growth and performance."
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
        tag: "AFR",
        label: "Annual Filings & Returns",
        title: "Timely and accurate <i>statutory filings.</i>",
        desc: [
            "We ensure timely and accurate submission of all mandatory filings, including annual returns, GST filings, and tax returns. Our team carefully tracks deadlines and prepares documents with precision. This reduces risks and ensures smooth regulatory compliance.",
            "By maintaining proper records and timely submissions, we help your business avoid penalties and disruptions. Our structured approach strengthens credibility with authorities and stakeholders. It keeps your operations consistent, compliant, and well-organized."
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
        tag: "ISA",
        label: "Internal & Statutory Audits",
        title: "Thorough audits to <i>ensure accuracy</i>",
        desc: [
            "Our team conducts detailed internal and statutory audits to verify financial accuracy and compliance. We review transactions, records, and processes to identify gaps or risks. This ensures your business maintains clarity and control.",
            "With a strong audit framework, we improve transparency and strengthen governance practices. Our insights help you make informed decisions and stay compliant. This builds trust and supports long-term financial stability."
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
        tag: "CG",
        label: "Corporate Governance",
        title: "Maintain proper  <i>records and resolutions</i>",
        desc: [
            "We support strong corporate governance by maintaining essential records, registers, and resolutions. Our team ensures all documentation is accurate, updated, and compliant with legal standards. This keeps your business structured and accountable.",
            "By aligning with statutory requirements, we help build trust among stakeholders and authorities. Proper governance reduces risks and improves operational clarity. It ensures your business functions with integrity and discipline."
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
        tag: "TC",
        label: "Tax Compliance",
        title: "Accurate tax filings <i>zero penalties.</i>",
        desc: [
            "We manage all aspects of tax compliance, including income tax, GST, and other statutory obligations. Our team ensures accurate preparation and timely submission of all returns. This minimizes errors and compliance risks.",
            "By tracking deadlines and regulatory updates, we help you avoid penalties and maintain financial discipline. Our approach improves transparency and accountability. It ensures smooth and compliant business operations."
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
        tag: "RR",
        label: "Regulatory Reporting",
        title: "Complete and compliant  <i>government reporting.</i>",
        desc: [
            "We handle end-to-end regulatory reporting, ensuring all required submissions are completed accurately. Our team prepares and files reports as per government norms and timelines. This keeps your business aligned with compliance standards.",
            "By maintaining consistency and accuracy, we reduce the risk of non-compliance and penalties. Our structured reporting approach enhances transparency. It supports smooth communication with regulatory authorities."
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
        tag: "ELLC",
        label: "Employee & Labour Law Compliance",
        title: "Ensure PF, ESI, and other labour law <i>obligations are met efficiently.</i>",
        desc: [
            "We ensure timely registration and compliance with PF, ESI, and other labour law requirements. Our team manages filings, documentation, and updates with accuracy. This helps your business meet statutory obligations seamlessly.",
            "By maintaining proper records and monitoring compliance regularly, we reduce legal risks. Our services support smooth workforce management and operational efficiency. This allows you to focus on growth and employee engagement"
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
        src: "/img/icon/annual-filings-returns.webp",
        alt: "Annual Filings and Returns",
        width: "20",
        height: "20"
    }),
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        src: "/img/icon/internal-statutory-audits.webp",
        alt: "Internal and Statutory Audits",
        width: "20",
        height: "20"
    }),
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        src: "/img/icon/corporate-governance.webp",
        alt: "Corporate Governance",
        width: "20",
        height: "20"
    }),
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        src: "/img/icon/tax-compliance.webp",
        alt: "Tax Compliance",
        width: "20",
        height: "20"
    }),
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        src: "/img/icon/regulatory-reporting.webp",
        alt: "Regulatory Reporting",
        width: "20",
        height: "20"
    }),
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        src: "/img/icon/employee-labour-law.webp",
        alt: "Employee and Labour Law Compliance",
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
                            children: "Our Specialized Statutory Compliance Services"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                        className: "rg-sec-h",
                        children: [
                            "Every Requirement Met.  ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                children: " Every Deadline Managed."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "rg-sec-sub",
                        children: "Priyam Consultancy Services provides comprehensive compliance solutions designed to keep your business legally protected and audit-ready."
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
            src: "/img/icon/sc-discovery-assessment.webp",
            alt: "Discovery and Assessment",
            width: "35",
            height: "35"
        }),
        lbl: "Step 01 · Initiation",
        title: "Discovery & Assessment",
        desc: "We analyze your business structure, operations, and regulatory obligations to identify compliance requirements, deadlines, and reporting frameworks, ensuring every statutory responsibility is clearly defined.",
        time: "~1 Working Day",
        tColor: "blue",
        even: false,
        last: false
    },
    {
        num: "02",
        color: "blue",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/sc-compliance-planning.webp",
            alt: "Compliance Planning and Scheduling",
            width: "35",
            height: "35"
        }),
        lbl: "Step 02 · Documentation",
        title: "Compliance Planning & Scheduling",
        desc: "We create a comprehensive compliance calendar covering filings, audits, and statutory obligations, prioritizing tasks by deadlines and regulatory importance to prevent delays and maintain full compliance.",
        time: "~2-3 Working Days",
        tColor: "orange",
        even: true,
        last: false
    },
    {
        num: "03",
        color: "orange",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/sc-documentation-filing.webp",
            alt: "Documentation and Filing",
            width: "35",
            height: "35"
        }),
        lbl: "Step 03 · Filing",
        title: "Documentation & Filing",
        desc: "We prepare, verify, and submit statutory forms, returns, and registers accurately and on time, reducing errors, avoiding penalties, and ensuring complete compliance without administrative delays.",
        time: "~2-4 Working Days",
        tColor: "blue",
        even: false,
        last: false
    },
    {
        num: "04",
        color: "blue",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/sc-monitoring-review.webp",
            alt: "Monitoring and Review",
            width: "35",
            height: "35"
        }),
        lbl: "Step 04 · Approval",
        title: "Monitoring & Review",
        desc: "We continuously track regulatory changes, filing schedules, and audit requirements, conducting regular reviews to maintain accurate records and ensure readiness for inspections and regulatory verifications.",
        time: "~5-7 Working Days",
        tColor: "orange",
        even: true,
        last: false
    },
    {
        num: "05",
        color: "orange",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/sc-continuous-support.webp",
            alt: "Continuous Support and Updates",
            width: "35",
            height: "35"
        }),
        lbl: "Step 05 · Complete",
        title: "Continuous Support & Updates",
        desc: "We provide ongoing guidance as regulations evolve, updating processes and assisting with filings to keep your business compliant, avoid penalties, and support long-term operational growth.",
        time: "~1-2 Working Days",
        tColor: "blue",
        even: false,
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
                                        marginBottom: '20px'
                                    },
                                    children: "Our Statutory Compliance Execution Process"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                                className: "sc-title",
                                children: [
                                    "Streamlined, Transparent, and ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("em", {
                                        className: "sc-title-em",
                                        children: "Accurate Compliance Management "
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                className: "sc-sub",
                                children: "Our statutory compliance process is designed to reduce risk, save time, and ensure complete regulatory adherence. Every step is managed strategically, accurately, and customized to your business requirements."
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
        title: "Strategic Planning & Execution",
        desc: "We begin by understanding your business operations, compliance obligations, and reporting requirements. Every filing, audit, and statutory task is carefully planned to ensure complete legal adherence and operational efficiency.",
        center: false,
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hww-strategic-planning-execution.webp",
            alt: "Strategic Planning and Execution",
            width: "34",
            height: "34"
        })
    },
    {
        title: "Specialized Team & Accountability",
        desc: "Our team of compliance experts, auditors, and legal advisors manages every statutory obligation with precision. Clear roles and accountability ensure smooth execution, accuracy, and peace of mind for your business.",
        center: false,
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hww-specialized-team-accountability.webp",
            alt: "Specialized Team and Accountability",
            width: "34",
            height: "34"
        })
    },
    {
        title: "Review, Verify & Submit",
        desc: "Before any filing or submission, we conduct thorough reviews to ensure accuracy, completeness, and compliance. Submissions are finalized only after meeting all statutory standards, protecting your business from risks.",
        center: true,
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hww-review-verify-submit.webp",
            alt: "Review Verify and Submit",
            width: "34",
            height: "34"
        })
    },
    {
        title: "Ongoing Support & Updates",
        desc: "We continuously monitor regulatory changes, deadlines, and compliance requirements. Our proactive guidance ensures your business stays fully compliant, avoids penalties, and adapts efficiently to evolving legal obligations.",
        center: false,
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hww-ongoing-support-updates.webp",
            alt: "Ongoing Support and Updates",
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
                                        marginBottom: '20px'
                                    },
                                    children: "How We Work"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                                className: "hww-title",
                                children: [
                                    "Compliance Managed Clearly.  ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        className: "hww-accent",
                                        children: "Delivered Reliably."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                className: "hww-sub",
                                children: "We handle all regulatory and statutory requirements accurately, on time, and with complete transparency"
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
        q: "What is statutory compliance?",
        a: "Statutory compliance refers to adhering to government-mandated laws, regulations, and legal requirements applicable to a business. This includes labor laws, tax filings, payroll regulations, PF, ESI, TDS, ROC filings, and other statutory obligations necessary for lawful business operations."
    },
    {
        q: "Why is compliance important for a business?",
        a: "Compliance helps businesses operate legally, avoid penalties, maintain financial transparency, and build credibility with clients, investors, and regulatory authorities. Proper compliance management also reduces operational risks and supports sustainable long-term business growth and smooth organizational functioning."
    },
    {
        q: "What are the Big 6 compliance requirements?",
        a: "The commonly referred Big 6 compliance requirements include GST, TDS, PF, ESI, Professional Tax, and ROC filings. These are essential statutory obligations businesses must manage regularly to maintain legal compliance and avoid penalties or regulatory issues."
    },
    {
        q: "Do small businesses need compliance services?",
        a: "Yes, small businesses also require compliance services to meet legal, tax, labor, and regulatory obligations. Proper compliance management helps avoid penalties, improves operational structure, builds credibility, and ensures smooth business growth from the early stages of operations."
    },
    {
        q: "What is the difference between legal and statutory compliance?",
        a: " Legal compliance refers to following all applicable laws and regulations governing business operations, while statutory compliance specifically relates to mandatory requirements defined under statutory acts such as tax laws, labor laws, payroll regulations, and corporate filing obligations."
    },
    {
        q: "What happens if compliance is missed?",
        a: "Missing compliance requirements can lead to penalties, legal notices, financial liabilities, operational disruptions, and reputational damage. Continued non-compliance may also affect business credibility, regulatory approvals, taxation processes, and future business expansion or investment opportunities"
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
            className: "pg-statutory",
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