"use strict";
exports.ids = ["572"];
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
4171(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (PCSDigitalMarketing)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _emailjs_browser__rspack_import_2 = __webpack_require__(58);
/* import */ var _components_BlogSection__rspack_import_3 = __webpack_require__(3177);
/* import */ var _components_HomePage_CTA__rspack_import_4 = __webpack_require__(9393);
/* import */ var _theme_Layout__rspack_import_5 = __webpack_require__(8328);
/* import */ var _docusaurus_Head__rspack_import_6 = __webpack_require__(3572);








const banner = "/img/digital-marketing.webp";
/* ═══════════════════════════════════════════════════
   SEO META & SCHEMA
═══════════════════════════════════════════════════ */ function SEOHead() {
    const pageUrl = "https://www.priyamconsultancy.com/digital-marketing/";
    const imageUrl = "https://www.pcsbusinesssolution.com/img/digital-marketing.png";
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_6/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                children: "Digital Marketing Agency in Coimbatore | Priyam Consultancy"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "description",
                content: "PCS is the best digital marketing agency in India with results-driven strategies. We offer the best digital marketing services in India for your brand's growth!"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "keywords",
                content: "Digital Marketing Agency, Digital Marketing, Digital Marketing Services, Digital Marketing Company, Digital Marketing Solutions, igital Marketing Consultant"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                rel: "canonical",
                href: "https://www.priyamconsultancy.com/digital-marketing/"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:title",
                content: "Digital Marketing Agency in Coimbatore | Priyam Consultancy"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:description",
                content: "PCS is the best digital marketing agency in India with results-driven strategies. We offer the best digital marketing services in India for your brand's growth!"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:url",
                content: "https://www.priyamconsultancy.com/digital-marketing/"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:image",
                content: imageUrl
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:title",
                content: "Digital Marketing Agency in Coimbatore | Priyam Consultancy"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:description",
                content: "PCS is the best digital marketing agency in India with results-driven strategies. We offer the best digital marketing services in India for your brand's growth!"
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
            "@type": "Organization",
            "name": "Priyam Consultancy Services",
            "alternateName": "PCS",
            "url": "https://www.priyamconsultancy.com/",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png"
            },
            "description": "Priyam Consultancy Services is an all-in-one business solutions provider offering Business Registration, Statutory Compliance, Virtual CFO, Digital Transformation, Digital Marketing, Website Development, and HR Services across India.",
            "foundingDate": "2020",
            "areaServed": "IN",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91 96774 44048",
                "contactType": "customer support",
                "availableLanguage": ["English", "Tamil"]
              }
            ],
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61577125709962",
              "https://www.linkedin.com/company/priyam-consultancy-services/",
              "https://www.instagram.com/priyam_consultancy_services/",
              "https://x.com/services91032",
              "https://g.co/kgs/rdTYdi6"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Business & Digital Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Registration" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Statutory Compliance" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Virtual CFO Services" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Transformation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HR & Payroll Services" } }
              ]
            }
          }
        `
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                type: "application/ld+json",
                children: `
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Priyam Consultancy Services",
            "url": "https://www.priyamconsultancy.com/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.priyamconsultancy.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          }
        `
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                type: "application/ld+json",
                children: `
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Priyam Consultancy Services",
            "image": "https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png",
            "url": "https://www.priyamconsultancy.com/",
            "description": "All-in-one business consultancy offering registration, compliance, digital transformation, marketing and HR services across India.",
            "telephone": "+91 96774 44048",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Coimbatore",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "areaServed": { "@type": "Country", "name": "India" },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61577125709962",
              "https://www.linkedin.com/company/priyam-consultancy-services/",
              "https://www.instagram.com/priyam_consultancy_services/"
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
            "@id": "https://www.priyamconsultancy.com/#service",
            "serviceType": "Business Consultancy & Digital Services",
            "name": "Business Registration, Digital Marketing & IT Solutions",
            "url": "https://www.priyamconsultancy.com/",
            "description": "Priyam Consultancy Services provides end-to-end business solutions including Business Registration, Statutory Compliance, Virtual CFO, Digital Transformation, SEO, Social Media Marketing, Google Ads, Meta Ads, Website Development, and HR & Payroll Services across India.",
            "provider": {
              "@type": "Organization",
              "name": "Priyam Consultancy Services",
              "url": "https://www.priyamconsultancy.com/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png"
              }
            },
            "areaServed": { "@type": "Country", "name": "India" },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "INR",
              "url": "https://www.priyamconsultancy.com/"
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
            "name": "Business Registration & Digital Solutions",
            "image": ["https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png"],
            "description": "All-in-one business consultancy services in Coimbatore — Business Registration, Compliance, Digital Transformation, Digital Marketing, Website Development, HR & Payroll Management.",
            "brand": {
              "@type": "Brand",
              "name": "Priyam Consultancy Services"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.9",
                "bestRating": "5"
              },
              "author": { "@type": "Organization", "name": "Priyam Consultancy Services" }
            },
            "offers": {
              "@type": "Offer",
              "url": "https://www.priyamconsultancy.com/",
              "priceCurrency": "INR",
              "price": "0.00",
              "priceValidUntil": "2026-12-31",
              "availability": "https://schema.org/InStock",
              "seller": { "@type": "Organization", "name": "Priyam Consultancy Services" }
            }
          }
        `
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
            "@type": "ItemList",
            "name": "Priyam Consultancy Services — All Services",
            "url": "https://www.priyamconsultancy.com/",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Business Registration" },
              { "@type": "ListItem", "position": 2, "name": "Statutory Compliance" },
              { "@type": "ListItem", "position": 3, "name": "Virtual CFO Services" },
              { "@type": "ListItem", "position": 4, "name": "Digital Transformation" },
              { "@type": "ListItem", "position": 5, "name": "Search Engine Optimization (SEO)" },
              { "@type": "ListItem", "position": 6, "name": "Social Media Marketing" },
              { "@type": "ListItem", "position": 7, "name": "Performance Marketing (PPC)" },
              { "@type": "ListItem", "position": 8, "name": "Content Marketing" },
              { "@type": "ListItem", "position": 9, "name": "Website Development" },
              { "@type": "ListItem", "position": 10, "name": "HR & Payroll Management" }
            ]
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
                "name": "What makes PCS different from other consultancy agencies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "At PCS, we focus on strategy, creativity, and measurable business growth. Every solution is customised to your brand goals, helping you build stronger visibility, better engagement, and long-term digital success."
                }
              },
              {
                "@type": "Question",
                "name": "What types of digital marketing services do you provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer SEO, performance marketing (PPC), social media marketing, content marketing, email & WhatsApp campaigns, graphic design, and analytics-driven strategies to boost online visibility and engagement."
                }
              },
              {
                "@type": "Question",
                "name": "What are the benefits of digital transformation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Digital transformation improves operational efficiency, enhances customer experience, and enables data-driven decision-making. It drives innovation, scalability, and long-term business growth."
                }
              },
              {
                "@type": "Question",
                "name": "What is a company registration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Company registration is the legal process of forming a business entity, obtaining licenses, and ensuring compliance with government regulations to operate officially."
                }
              },
              {
                "@type": "Question",
                "name": "How long to see results through digital marketing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Results vary by strategy; paid campaigns may show immediate impact, while SEO and organic efforts typically take 3 to 6 months for measurable outcomes."
                }
              },
              {
                "@type": "Question",
                "name": "How are your HR services different from other agencies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide tailored HR solutions combining strategy, compliance, payroll, recruitment, and employee engagement with seamless integration into your business operations."
                }
              },
              {
                "@type": "Question",
                "name": "Can PCS manage the entire digital marketing process?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, PCS provides complete end-to-end digital marketing support including branding, website development, SEO, content marketing, social media management, paid advertising, lead generation, and performance tracking."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work with startups as well as established businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We work with startups, SMEs, and large enterprises. Our team creates scalable solutions suitable for businesses at every stage of growth and expansion."
                }
              }
            ]
          }
        `
            })
        ]
    });
}
/* ─── Google Fonts (now loaded via pages-common.css) ─── */ const FontLoader = ()=>null;
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
                            "Digital Marketing "
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                        className: "hero-heading",
                        style: {
                            fontWeight: '600'
                        },
                        children: [
                            "Best",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: "hl lined",
                                style: {
                                    marginLeft: '12px'
                                },
                                children: "Digital Marketing "
                            }),
                            "Who Puts the Clients First"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "hero-sub",
                        children: "As the best digital marketing agency, we believe great digital marketing starts with listening. We ask the right questions to understand what truly holds your business back—whether it's low leads, weak visibility, or underperforming campaigns. As a trusted digital marketing company, we go beyond surface-level strategies and uncover insights that drive real results."
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
                    alt: "Digital Marketing Illustration",
                    className: "hero-img"
                })
            })
        ]
    });
}
/* ═══════════════════════════════════════════
   SECTION 2 — OUR APPROACH + FORM
═══════════════════════════════════════════ */ function ApproachSection() {
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
                                    textAlign: 'start'
                                },
                                children: "Our Approach in"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                            className: "ap2-heading",
                            children: [
                                "Result-Driven  ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "Digital Marketing"
                                }),
                                " Services"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "At our full-service digital marketing company, every digital marketing service we offer is aligned with measurable business outcomes. Whether it’s lead generation, conversions, or brand awareness, our digital marketing strategies are designed to deliver impact."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "We don’t believe in guesswork. Our best digital marketing services are backed by data, tracking, and continuous optimization. As a best digital marketing company, we measure what matters and refine what doesn’t work."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "In the fast-changing world of digital marketing, we stay ahead by constantly testing, learning, and improving. That’s what makes us the best digital marketing agency businesses trust.          "
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
/* ═══════════════════════════════════════════
   SECTION 3 — SERVICES CARDS
═══════════════════════════════════════════ */ const SERVICES = [
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/dm-seo.webp",
            alt: "Search Engine Optimization",
            width: "28",
            height: "28"
        }),
        title: "Search Engine Optimization",
        desc: "Our digital marketing experts help your business rank higher, increase visibility, and drive organic traffic consistently.",
        link: "/search-engine-optimization" // ← உங்கள் page path போடுங்கள்
    },
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/paid-marketing.webp",
            alt: "Paid Marketing",
            width: "28",
            height: "28"
        }),
        title: "Performance Marketing",
        desc: "We create high-performing ad campaigns as part of our digital marketing services, targeting the right audience at the right time.",
        link: "/performance-marketing"
    },
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/dm-content-marketing.webp",
            alt: "Content Marketing",
            width: "28",
            height: "28"
        }),
        title: "Content Marketing",
        desc: "Content is at the core of digital marketing. We craft content that engages, informs, and converts.",
        link: "/content-marketing"
    },
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/social-media-marketing.webp",
            alt: "Social Media Marketing",
            width: "28",
            height: "28"
        }),
        title: "Social Media Marketing",
        desc: "Our digital marketing service turns engagement into loyalty through strategic storytelling and audience connection.",
        link: "/social-media-marketing"
    },
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/dm-website-development.webp",
            alt: "Website Development",
            width: "28",
            height: "28"
        }),
        title: "Website Development",
        desc: "As the best digital marketing company, we build responsive, high-performing websites that support your digital marketing goals.",
        link: "/website-development"
    },
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/email-whatsapp-marketing.webp",
            alt: "Email and WhatsApp Marketing",
            width: "28",
            height: "28"
        }),
        title: "Email & WhatsApp Marketing",
        desc: "We strengthen your digital marketing efforts with direct communication strategies that boost conversions and retention.",
        link: "/performance-marketing"
    }
];
function ServicesSection() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "svc-section",
        style: {
            position: "relative",
            background: "#004168",
            padding: "8rem 6% 7rem",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "svc-bg-r"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "svc-grid"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "svc-orb svc-orb-1"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "svc-orb svc-orb-2"
            }),
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
                                textAlign: 'start'
                            },
                            children: "Our Specialized Digital Marketing Services"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                        className: "svc-h2",
                        children: [
                            "Smart Marketing. ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                children: "Sharp Execution."
                            }),
                            " Stronger Results."
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "svc-sub",
                        children: "As a full-service digital marketing company, we cover every stage of your customer journey through powerful digital marketing services:"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "svc-cards",
                children: SERVICES.map((s, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "svc-card",
                        style: {
                            animationDelay: `${.05 + i * .07}s`
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "svc-icon-wrap",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "svc-icon-ring",
                                    children: s.icon
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                className: "svc-card-title",
                                children: s.title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "svc-card-desc",
                                children: s.desc
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                                className: "svc-learn",
                                href: s.link,
                                children: [
                                    "LEARN MORE ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        className: "svc-learn-arr",
                                        children: "↗"
                                    })
                                ]
                            }),
                            "  ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "svc-card-line"
                            })
                        ]
                    }, i))
            })
        ]
    });
}
/* ═══════════════════════════════════════════
   SECTION 4 — PROCESS
═══════════════════════════════════════════ */ const PROCESS_STEPS = [
    {
        num: "01",
        emoji: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/proc-discover.webp",
            alt: "Discover and Understand",
            width: "32",
            height: "32"
        }),
        title: "Discover & Understand",
        desc: "Every brand is different, so we don’t start with assumptions—we start with you. Through in-depth discovery calls, competitor research, and audience analysis, we dig into your business goals, current challenges, and the ecosystem you operate in. This helps us understand the “why” behind the work and sets a strong foundation for everything that follows."
    },
    {
        num: "02",
        emoji: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/proc-audit-strategize.webp",
            alt: "Audit and Strategize",
            width: "32",
            height: "32"
        }),
        title: "Audit & Strategize",
        desc: "Next, we run a full diagnostic of your digital presence—website, content, SEO, paid ads, social media, and more. We identify gaps, missed opportunities, and underperforming channels. Based on this, we create a custom strategy aligned with your objectives—whether it’s brand awareness, lead generation, or revenue growth."
    },
    {
        num: "03",
        emoji: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/proc-execute.webp",
            alt: "Execute with Precision",
            width: "32",
            height: "32"
        }),
        title: "Execute with Precision",
        desc: "Our team then gets to work—designing creatives, writing copy, setting up campaigns, building funnels, and optimizing user journeys. Each piece of work is handled with care, clarity, and a focus on performance. We believe in clean execution with zero guesswork and complete visibility for you at every milestone."
    },
    {
        num: "04",
        emoji: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/proc-track-optimize.webp",
            alt: "Track Report and Optimize",
            width: "32",
            height: "32"
        }),
        title: "Track, Report & Optimize",
        desc: "We don’t just measure for the sake of it—we measure what matters. Every campaign is monitored in real time, KPIs are reviewed weekly, and reports are built to be easy to understand. What’s performing stays, what’s not gets fixed. This ongoing optimization is what helps us keep improving, without wasting time or budget."
    },
    {
        num: "05",
        emoji: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/proc-scale-expand.webp",
            alt: "Scale and Expand",
            width: "32",
            height: "32"
        }),
        title: "We Scale & Expand",
        desc: "Once we have a winning formula, we replicate and scale it across platforms or geographies. Whether it’s scaling ad budgets, expanding into new markets, or growing your content engine, we help you amplify what’s working without losing control of quality or ROI."
    }
];
function ProcessSection() {
    const [visible, setVisible] = (0,react__rspack_import_1.useState)(false);
    const [activeStep, setActiveStep] = (0,react__rspack_import_1.useState)(0);
    const ref = (0,react__rspack_import_1.useRef)(null);
    (0,react__rspack_import_1.useEffect)(()=>{
        const obs = new IntersectionObserver(([e])=>{
            if (e.isIntersecting) setVisible(true);
        }, {
            threshold: 0.1
        });
        if (ref.current) obs.observe(ref.current);
        return ()=>obs.disconnect();
    }, []);
    (0,react__rspack_import_1.useEffect)(()=>{
        const iv = setInterval(()=>setActiveStep((d)=>(d + 1) % 5), 2200);
        return ()=>clearInterval(iv);
    }, []);
    // Radial positions for 5 steps (clock-like, starting top)
    const angles = [
        270,
        342,
        54,
        126,
        198
    ]; // degrees
    const R = 210; // orbit radius
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        ref: ref,
        className: "prc3-section",
        style: {
            position: "relative",
            background: "#ffffff",
            padding: "6rem 4% 7rem",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "prc3-dotgrid"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "prc3-header",
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
                            children: "Our Digital Marketing Process"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                        className: "prc3-h2",
                        children: [
                            "Simple. Strategic. ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("em", {
                                children: "Built Around Your Goals."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "prc3-sub",
                        children: "We follow a clear, collaborative process that ensures every step is aligned with your business outcomes and not just marketing metrics."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "prc3-radial-wrap",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "prc3-orbit-area",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "prc3-ring-outer"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "prc3-ring-mid"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
                                className: "prc3-spokes",
                                viewBox: "0 0 500 500",
                                fill: "none",
                                children: [
                                    PROCESS_STEPS.map((s, i)=>{
                                        const angle = angles[i] * Math.PI / 180;
                                        const cx = 250 + R * Math.cos(angle);
                                        const cy = 250 + R * Math.sin(angle);
                                        const isActive = activeStep === i;
                                        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                                            x1: "250",
                                            y1: "250",
                                            x2: cx,
                                            y2: cy,
                                            stroke: isActive ? "rgba(237,131,55,0.55)" : "rgba(2,43,68,0.07)",
                                            strokeWidth: isActive ? "2" : "1",
                                            strokeDasharray: isActive ? "none" : "4 4",
                                            style: {
                                                transition: "stroke .4s,stroke-width .4s"
                                            }
                                        }, i);
                                    }),
                                    PROCESS_STEPS.map((_, i)=>{
                                        const a = angles[i] * Math.PI / 180;
                                        const r1 = 230;
                                        const r2 = 240;
                                        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                                            x1: 250 + r1 * Math.cos(a),
                                            y1: 250 + r1 * Math.sin(a),
                                            x2: 250 + r2 * Math.cos(a),
                                            y2: 250 + r2 * Math.sin(a),
                                            stroke: "rgba(237,131,55,0.35)",
                                            strokeWidth: "2",
                                            strokeLinecap: "round"
                                        }, `t${i}`);
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "prc3-hub",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                    src: "/img/priyam-consultancy-logo.png",
                                    alt: "PCS Business Solution",
                                    className: "prc3-hub-logo"
                                })
                            }),
                            PROCESS_STEPS.map((s, i)=>{
                                const angle = angles[i] * Math.PI / 180;
                                const x = 250 + R * Math.cos(angle);
                                const y = 250 + R * Math.sin(angle);
                                const pct = (v)=>`${v / 500 * 100}%`;
                                return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: `prc3-orb-node${activeStep === i ? " active" : ""}`,
                                    style: {
                                        left: pct(x),
                                        top: pct(y)
                                    },
                                    onClick: ()=>setActiveStep(i),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "prc3-orb-ring",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "prc3-orb-emoji",
                                                children: s.emoji
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "prc3-step-num",
                                                children: s.num
                                            })
                                        ]
                                    })
                                }, i);
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "prc3-cards-col",
                        children: PROCESS_STEPS.map((s, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: `prc3-mag-card${visible ? " vis" : ""}${activeStep === i ? " active-card" : ""}`,
                                style: {
                                    transitionDelay: visible ? `${i * 0.1}s` : "0s"
                                },
                                onClick: ()=>setActiveStep(i),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "prc3-accent-bar"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "prc3-card-body",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "prc3-card-top",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "prc3-card-num",
                                                        children: s.num
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "prc3-card-title-wrap",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                            className: "prc3-card-title",
                                                            children: s.title
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        className: "prc3-card-icon",
                                                        children: s.emoji
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "prc3-card-desc",
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
/* ═══════════════════════════════════════════
   SECTION 5 — WHY CHOOSE US
═══════════════════════════════════════════ */ const WCU_POINTS = [
    {
        num: "01",
        color: "#34d399",
        label: "We Collaborate, Not Dictate",
        title: "We Collaborate, Not Dictate",
        desc: "We work closely with your team to build practical, scalable digital marketing strategies aligned with your goals, ensuring clarity, flexibility, and effective execution."
    },
    {
        num: "02",
        color: "#a78bfa",
        label: "We Build with Context",
        title: "We Build with Context",
        desc: "Our digital marketing services are tailored to your industry, audience, and growth stage, ensuring strategies are relevant, personalized, and designed to deliver meaningful results."
    },
    {
        num: "03",
        color: "#ed8337",
        label: "We Own Outcomes",
        title: "We Own Outcomes",
        desc: "We take full responsibility for your digital marketing performance, ensuring transparency, accountability, and consistent results from execution to optimization and measurable business growth."
    }
];
function WhyChooseUsSection() {
    const [visible, setVisible] = (0,react__rspack_import_1.useState)([
        false,
        false,
        false
    ]);
    const refs = [
        (0,react__rspack_import_1.useRef)(null),
        (0,react__rspack_import_1.useRef)(null),
        (0,react__rspack_import_1.useRef)(null)
    ];
    (0,react__rspack_import_1.useEffect)(()=>{
        refs.forEach((r, i)=>{
            const obs = new IntersectionObserver(([e])=>{
                if (e.isIntersecting) setVisible((v)=>{
                    const n = [
                        ...v
                    ];
                    n[i] = true;
                    return n;
                });
            }, {
                threshold: 0.15
            });
            if (r.current) obs.observe(r.current);
            return ()=>obs.disconnect();
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "wcu-section",
        style: {
            position: "relative",
            background: "#004168",
            padding: "4rem 6%",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "wcu-grid-bg"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "wcu-orb-el wcu-orb-1"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "wcu-orb-el wcu-orb-2"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "prc3-header",
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
                            children: "How We Work"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                        className: "prc3-h2",
                        style: {
                            color: '#fff'
                        },
                        children: [
                            "Plan With Purpose. ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("em", {
                                children: "Execute With Precision."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "wcu-inner",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "wcu-left",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "wcu-stat wcu-sc-1",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "sc-label",
                                        children: "Organic Reach"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "sc-val",
                                        children: [
                                            "+218% ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "sc-up",
                                                children: "↑"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "wcu-stat wcu-sc-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "sc-label",
                                        children: "Campaign ROI"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "sc-val",
                                        children: [
                                            "4.8x ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "sc-up",
                                                children: "↑"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "wcu-stat wcu-sc-3",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "sc-label",
                                        children: "Lead Quality"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "sc-val",
                                        children: [
                                            "94% ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "sc-up",
                                                children: "↑"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "wcu-stat wcu-sc-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "sc-label",
                                        children: "Conversions"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "sc-val",
                                        children: [
                                            "+312% ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "sc-up",
                                                children: "↑"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "wcu-illus",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
                                    viewBox: "0 0 380 380",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("circle", {
                                            cx: "190",
                                            cy: "190",
                                            r: "155",
                                            stroke: "rgba(237,131,55,0.08)",
                                            strokeWidth: "1",
                                            strokeDasharray: "6 4"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("circle", {
                                            cx: "190",
                                            cy: "190",
                                            r: "120",
                                            stroke: "rgba(237,131,55,0.12)",
                                            strokeWidth: "1",
                                            strokeDasharray: "4 6"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("rect", {
                                            x: "110",
                                            y: "140",
                                            width: "160",
                                            height: "105",
                                            rx: "10",
                                            fill: "rgba(10,54,82,0.9)",
                                            stroke: "rgba(237,131,55,0.4)",
                                            strokeWidth: "1.5"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("rect", {
                                            x: "118",
                                            y: "148",
                                            width: "144",
                                            height: "88",
                                            rx: "6",
                                            fill: "#0a2535"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("rect", {
                                            x: "176",
                                            y: "245",
                                            width: "28",
                                            height: "12",
                                            rx: "2",
                                            fill: "rgba(10,54,82,0.9)",
                                            stroke: "rgba(237,131,55,0.3)",
                                            strokeWidth: "1"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("rect", {
                                            x: "158",
                                            y: "255",
                                            width: "64",
                                            height: "6",
                                            rx: "3",
                                            fill: "rgba(10,54,82,0.9)",
                                            stroke: "rgba(237,131,55,0.25)",
                                            strokeWidth: "1"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("rect", {
                                            x: "126",
                                            y: "210",
                                            width: "12",
                                            height: "22",
                                            rx: "2",
                                            fill: "rgba(237,131,55,0.7)",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                    attributeName: "height",
                                                    values: "10;22;14;22",
                                                    dur: "2.5s",
                                                    repeatCount: "indefinite"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                    attributeName: "y",
                                                    values: "222;210;216;210",
                                                    dur: "2.5s",
                                                    repeatCount: "indefinite"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("rect", {
                                            x: "143",
                                            y: "200",
                                            width: "12",
                                            height: "32",
                                            rx: "2",
                                            fill: "#38bdf8",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                    attributeName: "height",
                                                    values: "18;32;24;32",
                                                    dur: "2.8s",
                                                    repeatCount: "indefinite"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                    attributeName: "y",
                                                    values: "214;200;208;200",
                                                    dur: "2.8s",
                                                    repeatCount: "indefinite"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("rect", {
                                            x: "160",
                                            y: "206",
                                            width: "12",
                                            height: "26",
                                            rx: "2",
                                            fill: "rgba(237,131,55,0.5)",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                    attributeName: "height",
                                                    values: "14;26;20;26",
                                                    dur: "2.2s",
                                                    repeatCount: "indefinite"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                    attributeName: "y",
                                                    values: "218;206;212;206",
                                                    dur: "2.2s",
                                                    repeatCount: "indefinite"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("rect", {
                                            x: "177",
                                            y: "195",
                                            width: "12",
                                            height: "37",
                                            rx: "2",
                                            fill: "#34d399",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                    attributeName: "height",
                                                    values: "22;37;28;37",
                                                    dur: "3s",
                                                    repeatCount: "indefinite"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                    attributeName: "y",
                                                    values: "210;195;204;195",
                                                    dur: "3s",
                                                    repeatCount: "indefinite"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("rect", {
                                            x: "194",
                                            y: "203",
                                            width: "12",
                                            height: "29",
                                            rx: "2",
                                            fill: "rgba(237,131,55,0.8)",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                    attributeName: "height",
                                                    values: "16;29;20;29",
                                                    dur: "2.6s",
                                                    repeatCount: "indefinite"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                    attributeName: "y",
                                                    values: "216;203;212;203",
                                                    dur: "2.6s",
                                                    repeatCount: "indefinite"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("rect", {
                                            x: "211",
                                            y: "198",
                                            width: "12",
                                            height: "34",
                                            rx: "2",
                                            fill: "#38bdf8",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                    attributeName: "height",
                                                    values: "20;34;26;34",
                                                    dur: "2.4s",
                                                    repeatCount: "indefinite"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                    attributeName: "y",
                                                    values: "212;198;206;198",
                                                    dur: "2.4s",
                                                    repeatCount: "indefinite"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("rect", {
                                            x: "228",
                                            y: "193",
                                            width: "12",
                                            height: "39",
                                            rx: "2",
                                            fill: "#34d399",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                    attributeName: "height",
                                                    values: "24;39;30;39",
                                                    dur: "2.7s",
                                                    repeatCount: "indefinite"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                    attributeName: "y",
                                                    values: "208;193;201;193",
                                                    dur: "2.7s",
                                                    repeatCount: "indefinite"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polyline", {
                                            points: "126,208 143,198 160,204 177,190 194,196 211,184 228,178 250,170",
                                            stroke: "#ed8337",
                                            strokeWidth: "2",
                                            fill: "none",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                attributeName: "stroke-dasharray",
                                                values: "0,300;300,0",
                                                dur: "2s",
                                                fill: "freeze"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("circle", {
                                            cx: "250",
                                            cy: "170",
                                            r: "3",
                                            fill: "#ed8337",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                attributeName: "r",
                                                values: "2;4;2",
                                                dur: "1.5s",
                                                repeatCount: "indefinite"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("rect", {
                                            x: "126",
                                            y: "153",
                                            width: "60",
                                            height: "6",
                                            rx: "3",
                                            fill: "rgba(237,131,55,0.3)"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("rect", {
                                            x: "192",
                                            y: "153",
                                            width: "30",
                                            height: "6",
                                            rx: "3",
                                            fill: "rgba(255,255,255,0.1)"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("rect", {
                                            x: "228",
                                            y: "153",
                                            width: "26",
                                            height: "6",
                                            rx: "3",
                                            fill: "rgba(255,255,255,0.08)"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("g", {
                                            transform: "translate(68,110)",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("circle", {
                                                    cx: "22",
                                                    cy: "22",
                                                    r: "22",
                                                    fill: "rgba(13,74,112,0.85)",
                                                    stroke: "rgba(237,131,55,0.35)",
                                                    strokeWidth: "1.5"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("text", {
                                                    x: "22",
                                                    y: "28",
                                                    textAnchor: "middle",
                                                    fontSize: "18",
                                                    children: "\uD83D\uDD0D"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                    attributeName: "transform",
                                                    attributeType: "XML",
                                                    values: "translate(68,110);translate(68,100);translate(68,110)",
                                                    dur: "2.5s",
                                                    repeatCount: "indefinite",
                                                    keyTimes: "0;0.5;1"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("g", {
                                            transform: "translate(268,108)",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("circle", {
                                                    cx: "22",
                                                    cy: "22",
                                                    r: "22",
                                                    fill: "rgba(13,74,112,0.85)",
                                                    stroke: "rgba(237,131,55,0.35)",
                                                    strokeWidth: "1.5"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("text", {
                                                    x: "22",
                                                    y: "28",
                                                    textAnchor: "middle",
                                                    fontSize: "18",
                                                    children: "\uD83D\uDCE3"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                    attributeName: "transform",
                                                    attributeType: "XML",
                                                    values: "translate(268,108);translate(268,98);translate(268,108)",
                                                    dur: "3s",
                                                    repeatCount: "indefinite",
                                                    keyTimes: "0;0.5;1"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("g", {
                                            transform: "translate(62,232)",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("circle", {
                                                    cx: "22",
                                                    cy: "22",
                                                    r: "22",
                                                    fill: "rgba(13,74,112,0.85)",
                                                    stroke: "rgba(56,189,248,0.35)",
                                                    strokeWidth: "1.5"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("text", {
                                                    x: "22",
                                                    y: "28",
                                                    textAnchor: "middle",
                                                    fontSize: "18",
                                                    children: "\uD83D\uDCE7"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                    attributeName: "transform",
                                                    attributeType: "XML",
                                                    values: "translate(62,232);translate(62,222);translate(62,232)",
                                                    dur: "2.8s",
                                                    repeatCount: "indefinite",
                                                    keyTimes: "0;0.5;1"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("g", {
                                            transform: "translate(270,238)",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("circle", {
                                                    cx: "22",
                                                    cy: "22",
                                                    r: "22",
                                                    fill: "rgba(13,74,112,0.85)",
                                                    stroke: "rgba(52,211,153,0.35)",
                                                    strokeWidth: "1.5"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("text", {
                                                    x: "22",
                                                    y: "28",
                                                    textAnchor: "middle",
                                                    fontSize: "18",
                                                    children: "\uD83D\uDCCA"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                    attributeName: "transform",
                                                    attributeType: "XML",
                                                    values: "translate(270,238);translate(270,228);translate(270,238)",
                                                    dur: "3.2s",
                                                    repeatCount: "indefinite",
                                                    keyTimes: "0;0.5;1"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                                            x1: "112",
                                            y1: "132",
                                            x2: "130",
                                            y2: "148",
                                            stroke: "rgba(237,131,55,0.2)",
                                            strokeWidth: "1",
                                            strokeDasharray: "4 3",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                attributeName: "stroke-dashoffset",
                                                from: "0",
                                                to: "-14",
                                                dur: "1.5s",
                                                repeatCount: "indefinite"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                                            x1: "268",
                                            y1: "132",
                                            x2: "254",
                                            y2: "148",
                                            stroke: "rgba(237,131,55,0.2)",
                                            strokeWidth: "1",
                                            strokeDasharray: "4 3",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                attributeName: "stroke-dashoffset",
                                                from: "0",
                                                to: "-14",
                                                dur: "1.8s",
                                                repeatCount: "indefinite"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                                            x1: "106",
                                            y1: "252",
                                            x2: "120",
                                            y2: "248",
                                            stroke: "rgba(56,189,248,0.2)",
                                            strokeWidth: "1",
                                            strokeDasharray: "4 3",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                attributeName: "stroke-dashoffset",
                                                from: "0",
                                                to: "-14",
                                                dur: "1.6s",
                                                repeatCount: "indefinite"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                                            x1: "270",
                                            y1: "252",
                                            x2: "262",
                                            y2: "248",
                                            stroke: "rgba(52,211,153,0.2)",
                                            strokeWidth: "1",
                                            strokeDasharray: "4 3",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                attributeName: "stroke-dashoffset",
                                                from: "0",
                                                to: "-14",
                                                dur: "2s",
                                                repeatCount: "indefinite"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("g", {
                                            transform: "translate(168,60)",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("circle", {
                                                    cx: "22",
                                                    cy: "22",
                                                    r: "20",
                                                    fill: "rgba(237,131,55,0.12)",
                                                    stroke: "rgba(237,131,55,0.45)",
                                                    strokeWidth: "1.5"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("text", {
                                                    x: "22",
                                                    y: "28",
                                                    textAnchor: "middle",
                                                    fontSize: "16",
                                                    children: "\uD83C\uDFAF"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("line", {
                                            x1: "190",
                                            y1: "102",
                                            x2: "190",
                                            y2: "140",
                                            stroke: "rgba(237,131,55,0.2)",
                                            strokeWidth: "1",
                                            strokeDasharray: "4 3",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("animate", {
                                                attributeName: "stroke-dashoffset",
                                                from: "0",
                                                to: "-14",
                                                dur: "1.2s",
                                                repeatCount: "indefinite"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "wcu-right",
                        children: WCU_POINTS.map((p, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                ref: refs[i],
                                className: `wcu-point${visible[i] ? " vis" : ""}`,
                                style: {
                                    opacity: 0,
                                    transform: "translateX(30px)",
                                    transitionDelay: `${.1 + i * .15}s`
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "wcu-num-col",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "wcu-num",
                                                style: {
                                                    color: p.color
                                                },
                                                children: p.num
                                            }),
                                            i < 2 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "wcu-vert-line"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "wcu-content",
                                        style: i === 2 ? {
                                            paddingBottom: 0
                                        } : {},
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "wcu-label",
                                                style: {
                                                    color: p.color,
                                                    borderColor: `${p.color}55`,
                                                    background: `${p.color}14`
                                                },
                                                children: [
                                                    p.label,
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
                                                        className: "wcu-arrow-span",
                                                        style: {
                                                            "--arrow-color": p.color,
                                                            "--arrowb-color": p.color
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: 0,
                                                                    left: 0,
                                                                    right: 0,
                                                                    height: "2px",
                                                                    borderRadius: "2px",
                                                                    background: p.color
                                                                }
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                style: {
                                                                    position: "absolute",
                                                                    right: "-1px",
                                                                    top: "-4px",
                                                                    width: 0,
                                                                    height: 0,
                                                                    borderTop: "5px solid transparent",
                                                                    borderBottom: "5px solid transparent",
                                                                    borderLeft: `8px solid ${p.color}`
                                                                }
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                                className: "wcu-title",
                                                children: p.title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "wcu-desc",
                                                children: p.desc
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
// faq section
const faqData = [
    {
        q: "What makes PCS different from all the other digital marketing agencies out there?",
        a: "At PCS, we focus on strategy, creativity, and measurable business growth. Every solution is customised to your brand goals, helping you build stronger visibility, better engagement, and long-term digital success."
    },
    {
        q: "Do you offer custom packages or fixed pricing?",
        a: "Yes, we offer both fixed plans and customised packages based on your business requirements, industry, goals, and marketing scope to ensure you receive the right solution within your budget."
    },
    {
        q: "Do you only work with established businesses/brands, or with startups as well?",
        a: "We work with startups, small businesses, growing brands, and established companies. Our team creates scalable digital marketing strategies suitable for businesses at every stage of growth and expansion."
    },
    {
        q: "Can you manage the entire digital marketing process?",
        a: "Yes, PCS provides complete end-to-end digital marketing support including branding, website development, SEO, content marketing, social media management, paid advertising, lead generation, and performance tracking."
    },
    {
        q: "Do you provide monthly reporting?",
        a: "Yes, we provide detailed monthly performance reports that include campaign insights, SEO progress, website traffic, engagement metrics, lead performance, and other important data to help you track growth clearly."
    },
    {
        q: "Can PCS help with both organic and paid marketing?",
        a: "Absolutely. We specialise in both organic and paid marketing strategies including SEO, content marketing, social media growth, Google Ads, Meta Ads, and performance campaigns to support sustainable business growth."
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
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
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
/* ═══════════════════════════════════════════
   ROOT EXPORT
═══════════════════════════════════════════ */ function PCSDigitalMarketing() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Layout__rspack_import_5/* ["default"] */.A, {
        title: "Digital Marketing Services in India | PCS Business Solution",
        description: "Result-driven digital marketing services including SEO, social media marketing, PPC, content marketing, and email marketing to grow your business online.",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "pg-digital-marketing",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(SEOHead, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(FontLoader, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(HeroSection, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ApproachSection, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ServicesSection, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ProcessSection, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(WhyChooseUsSection, {}),
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