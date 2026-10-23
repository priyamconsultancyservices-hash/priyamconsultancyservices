"use strict";
exports.ids = ["4504"];
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
9799(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (PCSWebsite)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _components_HomePage_CTA__rspack_import_2 = __webpack_require__(9393);
/* import */ var _emailjs_browser__rspack_import_3 = __webpack_require__(58);
/* import */ var _components_BlogSection__rspack_import_4 = __webpack_require__(3177);
/* import */ var _theme_Layout__rspack_import_5 = __webpack_require__(8328);
/* import */ var _docusaurus_Head__rspack_import_6 = __webpack_require__(3572);




const TechImg = "/img/Technology-logos.gif";


const banner = "/img/website-development.webp";

function SEOHead() {
    const pageUrl = "https://www.priyamconsultancy.com/website-development/";
    const imageUrl = "https://www.priyamconsultancy.com/img/website-development.png";
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_6/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                children: "Best Website Development Services in Coimbatore | Experts   "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "description",
                content: "Professional website development services in Coimbatore. We build fast, SEO-friendly, responsive websites that boost brand presence and business growth. Visit us! "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "keywords",
                content: "Website Development, Website Development Company in Coimbatore, Web Development Services in Coimbatore, Web Development Company in Coimbatore, Website Development Services in Coimbatore, Website Design & Development in Coimbatore, Website Design Services in Coimbatore "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                rel: "canonical",
                href: "https://www.priyamconsultancy.com/website-development/"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:title",
                content: "Best Website Development Services in Coimbatore | Experts   "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:description",
                content: "Professional website development services in Coimbatore. We build fast, SEO-friendly, responsive websites that boost brand presence and business growth. Visit us! "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:url",
                content: "https://www.priyamconsultancy.com/website-development/"
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
                content: "Best Website Development Services in Coimbatore | Experts   "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:description",
                content: "Professional website development services in Coimbatore. We build fast, SEO-friendly, responsive websites that boost brand presence and business growth. Visit us! "
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
              "@id":"https://www.priyamconsultancy.com/website-development/",
              "name":"website-development"
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
          "@id":"https://www.priyamconsultancy.com/website-development/#service",
          "name":"Website Development",
          "serviceType":"Website Development Services",
          "url":"https://www.priyamconsultancy.com/website-development/",
          "description":"Priyam Consultancy provides professional website development services including custom website development, responsive web design, business websites, CMS development, e-commerce development and scalable web solutions for businesses across India.",
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
        "name": "website-development",
        "image": ["https://www.priyamconsultancy.com/img/website-development.png"],
        "description": "Best website development services in Coimbatore offering business website development, corporate websites, ecommerce websites, custom web applications, responsive website design and SEO-friendly web development solutions.",
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
        "reviewCount": "4836"
        },
        "offers": {
        "@type": "Offer",
        "url": "https://www.priyamconsultancy.com/website-development/",
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
            "name": "What website development services do you offer?", 
            "acceptedAnswer": { 
              "@type": "Answer", 
              "text": "We offer website design, static website development, custom website development, WooCommerce website development, Shopify website development, and custom e-commerce solutions based on your business needs. 
        " 
            } 
          },{ 
            "@type": "Question", 
            "name": "Will my website be mobile-friendly and SEO-ready?", 
            "acceptedAnswer": { 
              "@type": "Answer", 
              "text": "Yes. We build responsive websites that work smoothly on all devices and follow SEO best practices such as clean structure, optimized content, and fast performance." 
            }
          },{ 
            "@type": "Question", 
            "name": "Can you integrate payment gateways, WhatsApp, CRM, or other tools?", 
            "acceptedAnswer": { 
              "@type": "Answer", 
              "text": "Yes. We can connect your website with the tools your business needs, including payment gateways, WhatsApp chat, CRM systems, and other third-party integrations." 
            } 
          },{ 
            "@type": "Question", 
            "name": "Do you also help with content and SEO??", 
            "acceptedAnswer": { 
              "@type": "Answer", 
              "text": "Yes. We provide content support and on-page SEO services to help your website communicate clearly and perform better in search results." 
            } 
        },{ 
            "@type": "Question", 
            "name": "What kind of businesses do you build websites for?", 
            "acceptedAnswer": { 
              "@type": "Answer", 
              "text": "We build websites for startups, small businesses, service companies, ecommerce brands, and growing enterprises that want a strong online presence." 
            } 
        },{ 
            "@type": "Question", 
            "name": "What is included in your website development service?", 
            "acceptedAnswer": { 
              "@type": "Answer", 
              "text": "Our website development service typically includes planning, design, development, responsive setup, basic SEO implementation, integrations, testing, and launch support." 
            } 
            }] 
        }

      `
            })
        ]
    });
}
/* ══════ DATA ══════ */ const SERVICES = [
    {
        num: "01",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/svc-website-design.webp",
            alt: "Website Design",
            width: "30",
            height: "30"
        }),
        title: "Website Design",
        tag: "Design",
        tagColor: "#ed8337",
        fill: 92,
        desc: "Create visually compelling, user-focused website designs that enhance brand identity and engagement. We combine modern aesthetics, intuitive navigation, and strategic layouts to deliver impactful digital experiences that build credibility and customer trust."
    },
    {
        num: "02",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/svc-static-website.webp",
            alt: "Static Website Development",
            width: "30",
            height: "30"
        }),
        title: "Static Website Development",
        tag: "Fast",
        tagColor: "#ed8337",
        fill: 88,
        desc: "Develop fast, secure static websites designed for performance and simplicity. Ideal for startups and growing businesses, our solutions ensure reliability, easy maintenance, and professional online presence across all devices."
    },
    {
        num: "03",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/svc-custom-website.webp",
            alt: "Custom Website Development",
            width: "30",
            height: "30"
        }),
        title: "Custom Website Development",
        tag: "Custom",
        tagColor: "#ed8337",
        fill: 95,
        desc: "Build fully customized websites tailored to your business requirements and workflows. Our development approach ensures scalability, seamless integrations, flexibility, and complete control, delivering solutions aligned with long-term growth objectives."
    },
    {
        num: "04",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/svc-woocommerce.webp",
            alt: "WooCommerce Development",
            width: "30",
            height: "30"
        }),
        title: "WooCommerce Development",
        tag: "eCommerce",
        tagColor: "#ed8337",
        fill: 90,
        desc: "Develop scalable WooCommerce stores with secure payments and flexible customization. We focus on optimized performance, structured product management, and conversion-driven design to support consistent ecommerce growth."
    },
    {
        num: "05",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/svc-ecommerce.webp",
            alt: "Custom E-Commerce Development",
            width: "30",
            height: "30"
        }),
        title: "Custom E-Commerce Development",
        tag: "Scale",
        tagColor: "#ed8337",
        fill: 87,
        desc: "Create conversion-focused ecommerce websites optimized for speed, security, and usability. Our scalable platforms feature structured architecture, seamless checkout systems, and performance enhancements to maximize engagement and sales."
    },
    {
        num: "06",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/svc-shopify.webp",
            alt: "Shopify Website Development",
            width: "30",
            height: "30"
        }),
        title: "Shopify Website Development",
        tag: "Shopify",
        tagColor: "#ed8337",
        fill: 93,
        desc: "Design high-performing Shopify stores built for growth and automation. From store setup to customization and SEO optimization, we deliver secure, mobile-responsive solutions that enhance user experience and scalability."
    }
];
const FEATURES = [
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/feat-structure.webp",
            alt: "Strategic Website Structure",
            width: "28",
            height: "28"
        }),
        title: "Strategic Website Structure",
        desc: "Well-planned layouts and intuitive navigation systems crafted to enhance usability, improve engagement, and guide visitors smoothly toward meaningful actions."
    },
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/feat-responsive.webp",
            alt: "Responsive and Adaptive Design",
            width: "28",
            height: "28"
        }),
        title: "Responsive & Adaptive Design",
        desc: "Device-optimized, mobile-first designs ensuring seamless performance and consistent user experience across desktops, tablets, and smartphones."
    },
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/feat-seo.webp",
            alt: "Search Ready Development",
            width: "28",
            height: "28"
        }),
        title: "Search-Ready Development",
        desc: "SEO-focused coding practices, structured metadata, schema setup, and optimized architecture to strengthen search engine visibility."
    },
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/feat-performance.webp",
            alt: "Speed and Performance Enhancement",
            width: "28",
            height: "28"
        }),
        title: "Speed & Performance Enhancement",
        desc: "Optimized frameworks, efficient database structuring, and performance tuning techniques to deliver fast-loading and stable websites."
    },
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/feat-integrations.webp",
            alt: "Seamless System Integrations",
            width: "28",
            height: "28"
        }),
        title: "Seamless System Integrations",
        desc: "Integration with payment gateways, WhatsApp, shipping systems, analytics tools, and marketing solutions for streamlined operations."
    },
    {
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/feat-scalability.webp",
            alt: "Future Ready Scalability",
            width: "28",
            height: "28"
        }),
        title: "Future-Ready Scalability",
        desc: "Flexible development frameworks designed to accommodate business expansion, advanced features, increasing traffic, and evolving digital needs."
    }
];
const PROCESS_LEFT = [
    {
        num: "Step 01",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/website-discover.webp",
            alt: "Discover",
            width: "24",
            height: "24"
        }),
        title: "Discover",
        desc: "We understand your brand, goals, audience, competitors, and preferences to build a strategic foundation aligned with business objectives."
    },
    {
        num: "Step 02",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/proc-plan-structure.webp",
            alt: "Plan and Structure",
            width: "24",
            height: "24"
        }),
        title: "Plan & Structure",
        desc: "We create sitemaps, define functionalities, finalize technology stack, and establish timelines ensuring clarity before development begins."
    },
    {
        num: "Step 03",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/proc-design-prototype.webp",
            alt: "Design and Prototype",
            width: "24",
            height: "24"
        }),
        title: "Design & Prototype",
        desc: "Our designers craft intuitive interfaces and interactive prototypes, allowing you to review visual direction before development."
    }
];
const PROCESS_RIGHT = [
    {
        num: "Step 04",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/proc-develop-integrate.webp",
            alt: "Develop and Integrate",
            width: "24",
            height: "24"
        }),
        title: "Develop & Integrate",
        desc: "We convert designs into responsive code, integrating CMS, analytics, databases, and essential third-party tools."
    },
    {
        num: "Step 05",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/proc-test-optimize.webp",
            alt: "Test and Optimize",
            width: "24",
            height: "24"
        }),
        title: "Test & Optimize",
        desc: "We conduct thorough testing across devices, browsers, speed performance, and functionality to ensure reliability."
    },
    {
        num: "Step 06",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/proc-launch-support.webp",
            alt: "Launch and Support",
            width: "24",
            height: "24"
        }),
        title: "Launch & Support",
        desc: "After final approval, we launch confidently and provide ongoing support, updates, and performance monitoring."
    }
];
/* ══════ SECTION 1A: HERO BANNER ══════ */ function HeroBanner() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "wd-hero",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "wd-hero-bg-radial"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "wd-hero-bg-grid"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                style: {
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "badge",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "badge-dot"
                            }),
                            "Website Development"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                        className: "wd-hero-heading",
                        children: [
                            "Performance Driven",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: "orange lined",
                                children: " Website Development"
                            }),
                            " from Concept to Code"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "wd-hero-sub",
                        children: "At PCS, we deliver strategic website development services that combine design, performance, and scalability to help businesses grow online. As a trusted website development agency in Coimbatore , we ensure high-value solutions optimized for cost efficiency."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "wd-hero-actions",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                            className: "wd-btn-fill",
                            href: "/contact-us",
                            children: [
                                "Connect Now",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    className: "wd-btn-arrow",
                                    children: "›"
                                })
                            ]
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
                    justifyContent: "center",
                    animation: "fadeUp .9s .15s ease both"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                    src: banner,
                    alt: " Website Development Banner",
                    className: "wd-hero-img"
                })
            })
        ]
    });
}
/* ══════ SECTION 1B: OUR APPROACH ══════ */ function ApproachSection() {
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
                                    textAlign: 'center'
                                },
                                children: "Our Approach in"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                            className: "ap2-heading",
                            children: [
                                "Smart, Scalable, and ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: " Stunning Websites"
                                }),
                                " Built for Results"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "Your website is more than a digital storefront — it represents your brand, credibility, and customer experience around the clock. We follow a strategy-first approach focused on usability, structure, scalability, and long-term business growth."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "Every website element is thoughtfully planned to align with your business objectives, audience expectations, and brand positioning. Our development process prioritizes seamless functionality, responsive performance, and creating strong digital foundations that support growth."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "Whether launching a startup website, revamping an outdated platform, or building a complex system, we focus on speed, reliability, and user experience. Every website is designed to perform smoothly across devices and platforms."
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
/* ══════ SECTION 2: SERVICES ACCORDION ══════ */ function ServicesSection() {
    const [openIdx, setOpenIdx] = (0,react__rspack_import_1.useState)(0);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        className: "svc-section",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "svc-layout",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "svc-right-col",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "partners-header1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                className: "partners-eyebrow",
                                style: {
                                    marginBottom: '20px',
                                    textAlign: 'center'
                                },
                                children: "Our Specialized Website Development Services"
                            })
                        }),
                        "          ",
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                            className: "svc-heading",
                            children: [
                                "Not Just Websites. ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    className: "accent",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                        children: "Growth-Driven"
                                    })
                                }),
                                " Digital Experiences."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "svc-sub",
                            children: "We create websites that go beyond pretty pages. They’re fast, intuitive, optimized, and built for long-term impact."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                            href: "/contact-us",
                            className: "svc-cta-btn",
                            children: "Get a Free Consultation \xa0→"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "svc-accordion",
                    children: SERVICES.map((s, i)=>{
                        const isOpen = openIdx === i;
                        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: `acc-item${isOpen ? " open" : ""}`,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "acc-header",
                                    onClick: ()=>setOpenIdx(isOpen ? -1 : i),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            className: "acc-num",
                                            children: s.num
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "acc-icon",
                                            children: s.icon
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                            className: "acc-title",
                                            children: s.title
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "acc-arrow",
                                            children: "▼"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "acc-body",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "acc-divider",
                                            style: {
                                                background: `linear-gradient(90deg,${s.tagColor}4d,transparent)`
                                            }
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "acc-desc",
                                            children: s.desc
                                        })
                                    ]
                                })
                            ]
                        }, i);
                    })
                })
            ]
        })
    });
}
/* ══════ SECTION 2B: WHY CHOOSE US ══════ */ function WhyChooseUsSection() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        className: "wcu-section",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "wcu-inner",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "wcu-img-col",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "wcu-img-frame",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                            src: TechImg,
                            alt: "Web development team working"
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "wcu-text-col",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "h2artners-header1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                className: "partners-eyebrow",
                                style: {
                                    marginBottom: '20px',
                                    textAlign: 'center'
                                },
                                children: "Why Choose Us"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                            className: "wcu-heading",
                            children: [
                                "Trusted",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                            children: " Website Development Company"
                                        }),
                                        " "
                                    ]
                                }),
                                " Delivering Growth-Driven Digital Solutions"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "wcu-desc",
                            children: "We develop strategic, high-performance websites designed to enhance brand visibility and support measurable business growth. Our solutions combine modern design, structured architecture, and scalable technology tailored to diverse industries and operational requirements."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "wcu-desc",
                            children: "Our approach begins with understanding your brand identity, target audience, competitors, and long-term objectives. This research-driven foundation allows us to create websites that reflect your vision while supporting usability, engagement, and performance."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "wcu-desc",
                            children: "Every website is built with SEO best practices, mobile responsiveness, speed optimization, and secure coding standards. The result is a reliable, user-focused digital platform that strengthens credibility and drives sustainable online growth."
                        })
                    ]
                })
            ]
        })
    });
}
/* ══════ SECTION 3: PROCESS — FIXED ══════ */ function ProcessSection() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        className: "proc-section",
        style: {
            padding: "7rem 6% 8rem ",
            background: '#fff'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "proc-inner",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "proc-header",
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
                                children: "Our Proven Website Development Process"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                            className: "proc-heading",
                            children: [
                                "Planned for Performance. ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                        children: "Built for Scale."
                                    })
                                }),
                                " Launched with Confidence."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "proc-sub",
                            children: "We follow a transparent, step-by-step process to ensure your site is built efficiently, beautifully, and exactly as you envisioned."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "proc-cols",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "proc-points left",
                            children: PROCESS_LEFT.map((p, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "proc-point",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "proc-icon",
                                            children: p.icon
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: "proc-point-text",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "proc-pt-num",
                                                    children: p.num
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                    className: "proc-pt-title",
                                                    children: p.title
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "proc-pt-desc",
                                                    children: p.desc
                                                })
                                            ]
                                        })
                                    ]
                                }, i))
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "proc-mockup-wrap",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "proc-badge pb-tl",
                                    children: "✓ Strategy"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "proc-badge pb-tr",
                                    children: "\uD83D\uDE80 Launch"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "proc-badge pb-bl",
                                    children: "\uD83C\uDFA8 Design"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "proc-badge pb-br",
                                    children: "⚙️ Dev"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "proc-screen",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: "proc-browser-bar",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "pb-dot pb-d1"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "pb-dot pb-d2"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "pb-dot pb-d3"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "proc-url-bar",
                                                    children: "pcs-website.com"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: "proc-site-body",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    className: "ps-nav",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "ps-nav-logo",
                                                            children: "P"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                            className: "ps-nav-links",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                    className: "ps-nav-link active"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                    className: "ps-nav-link"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                    className: "ps-nav-link"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                    className: "ps-nav-link"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "ps-nav-btn-sm",
                                                            children: "Contact"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    className: "ps-hero",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "ps-hero-tag",
                                                            children: "PCS \xb7 Web Dev"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                            className: "ps-hero-h",
                                                            children: [
                                                                "Websites Built",
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}),
                                                                "for Results"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "ps-hero-btn",
                                                            children: "Explore More →"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "ps-cards",
                                                    children: [
                                                        "🏗️",
                                                        "📱",
                                                        "🔍"
                                                    ].map((ic, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                            className: "ps-card",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                    className: "ps-card-icon",
                                                                    children: ic
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                    className: "ps-card-line w100"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                    className: "ps-card-line w70"
                                                                })
                                                            ]
                                                        }, i))
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    style: {
                                        position: "absolute",
                                        bottom: "60px",
                                        left: "50%",
                                        width: "10px",
                                        height: "10px",
                                        borderRadius: "50%",
                                        background: "var(--orange)",
                                        border: "2px solid #fff",
                                        boxShadow: "0 2px 8px rgba(237,131,55,0.5)",
                                        animation: "float1 2s ease-in-out infinite",
                                        zIndex: 15
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "proc-points right",
                            children: PROCESS_RIGHT.map((p, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "proc-point",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "proc-icon",
                                            children: p.icon
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: "proc-point-text",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "proc-pt-num",
                                                    children: p.num
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                    className: "proc-pt-title",
                                                    children: p.title
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "proc-pt-desc",
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
        })
    });
}
/* ══════ SECTION 4: KEY FEATURES CAROUSEL — CENTER FIXED ══════ */ function KeyFeaturesSection() {
    const N = FEATURES.length;
    const [current, setCurrent] = (0,react__rspack_import_1.useState)(0);
    const wrapRef = (0,react__rspack_import_1.useRef)(null);
    const cardRefs = (0,react__rspack_import_1.useRef)([]);
    const dragStart = (0,react__rspack_import_1.useRef)(0);
    const dragging = (0,react__rspack_import_1.useRef)(false);
    const dragDelta = (0,react__rspack_import_1.useRef)(0);
    const timerRef = (0,react__rspack_import_1.useRef)(null);
    const goTo = (0,react__rspack_import_1.useCallback)((idx)=>{
        setCurrent((idx % N + N) % N);
        dragDelta.current = 0;
    }, [
        N
    ]);
    const layout = (0,react__rspack_import_1.useCallback)((animate)=>{
        const wrap = wrapRef.current;
        if (!wrap) return;
        const W = wrap.offsetWidth;
        const cardW = Math.min(340, W * 0.78);
        const cur = current;
        cardRefs.current.forEach((card, i)=>{
            if (!card) return;
            let rel = i - cur;
            if (rel > N / 2) rel -= N;
            if (rel < -N / 2) rel += N;
            const absRel = Math.abs(rel);
            if (absRel > 3) {
                card.style.opacity = "0";
                card.style.pointerEvents = "none";
                return;
            }
            const xStep = cardW * 0.56;
            const xOffset = rel * xStep;
            const scale = 1 - absRel * 0.1;
            const zIndex = 10 - absRel;
            const opacity = rel === 0 ? 1 : Math.max(0.12, 1 - absRel * 0.45);
            const yOffset = absRel * 6;
            const nudge = rel === 0 ? dragDelta.current * 0.5 : rel === 1 || rel === -1 ? dragDelta.current * 0.15 : 0;
            card.style.width = cardW + "px";
            /* CENTER FIX: use left:50% on the card, then offset from center */ card.style.left = "50%";
            card.style.top = "50%";
            card.style.marginLeft = -(cardW / 2) + "px";
            card.style.marginTop = "-120px"; /* half of approx card height */ 
            card.style.transform = `translateX(${xOffset + nudge}px) translateY(${yOffset}px) scale(${scale})`;
            card.style.zIndex = zIndex;
            card.style.opacity = opacity;
            card.style.pointerEvents = rel === 0 ? "auto" : "none";
            card.style.borderColor = rel === 0 ? "rgba(237,131,55,0.45)" : "rgba(255,255,255,0.10)";
            card.style.boxShadow = rel === 0 ? "0 20px 60px rgba(0,0,0,0.55),0 0 0 1px rgba(237,131,55,0.2),inset 0 1px 0 rgba(255,255,255,0.18)" : "0 8px 30px rgba(0,0,0,0.35),inset 0 1px 0 rgba(255,255,255,0.1)";
            const accent = card.querySelector(".kf-card-accent");
            if (accent) accent.style.width = rel === 0 ? "65%" : "0%";
            card.classList.toggle("is-active", rel === 0);
            if (!animate) {
                card.style.transition = "none";
                requestAnimationFrame(()=>{
                    card.style.transition = "";
                });
            }
        });
    }, [
        current,
        N
    ]);
    (0,react__rspack_import_1.useEffect)(()=>{
        layout(true);
    }, [
        current,
        layout
    ]);
    (0,react__rspack_import_1.useEffect)(()=>{
        const handler = ()=>layout(false);
        window.addEventListener("resize", handler);
        return ()=>window.removeEventListener("resize", handler);
    }, [
        layout
    ]);
    (0,react__rspack_import_1.useEffect)(()=>{
        timerRef.current = setInterval(()=>goTo(current + 1), 4000);
        return ()=>clearInterval(timerRef.current);
    }, [
        current,
        goTo
    ]);
    const onDragStart = (x)=>{
        dragStart.current = x;
        dragging.current = true;
        clearInterval(timerRef.current);
    };
    const onDragMove = (x)=>{
        if (!dragging.current) return;
        dragDelta.current = x - dragStart.current;
        layout(false);
    };
    const onDragEnd = ()=>{
        if (!dragging.current) return;
        dragging.current = false;
        if (dragDelta.current < -50) goTo(current + 1);
        else if (dragDelta.current > 50) goTo(current - 1);
        else {
            dragDelta.current = 0;
            layout(true);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "kf-section",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "kf-orbs",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "kf-orb kf-orb-1"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "kf-orb kf-orb-2"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "kf-orb kf-orb-3"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "kf-inner",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "kf-header",
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
                                    children: "Our Uniqueness"
                                })
                            }),
                            "          ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                                className: "kf-title",
                                children: [
                                    "Key ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        children: "Features"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                className: "kf-sub",
                                children: "Everything we build is engineered for performance, growth, and lasting digital impact."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "kf-carousel-wrap",
                        ref: wrapRef,
                        onMouseDown: (e)=>onDragStart(e.clientX),
                        onMouseMove: (e)=>{
                            if (dragging.current) onDragMove(e.clientX);
                        },
                        onMouseUp: onDragEnd,
                        onMouseLeave: onDragEnd,
                        onTouchStart: (e)=>onDragStart(e.touches[0].clientX),
                        onTouchMove: (e)=>onDragMove(e.touches[0].clientX),
                        onTouchEnd: onDragEnd,
                        children: FEATURES.map((f, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "kf-card",
                                ref: (el)=>cardRefs.current[i] = el,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "kf-icon-wrap",
                                        children: f.icon
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "kf-card-body",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                className: "kf-card-title",
                                                children: f.title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "kf-card-desc",
                                                children: f.desc
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "kf-card-accent"
                                            })
                                        ]
                                    })
                                ]
                            }, i))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "kf-nav",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
                                className: "kf-nav-btn",
                                onClick: ()=>goTo(current - 1),
                                children: "←"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "kf-dots",
                                children: FEATURES.map((_, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
                                        className: `kf-dot${i === current ? " active" : ""}`,
                                        onClick: ()=>goTo(i)
                                    }, i))
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
                                className: "kf-nav-btn",
                                onClick: ()=>goTo(current + 1),
                                children: "→"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "kf-drag-hint",
                        children: "← drag or swipe to explore →"
                    })
                ]
            })
        ]
    });
}
/* ══════ SECTION 5: FAQ ══════ */ const faqData = [
    {
        q: "What website development services do you offer?",
        a: "We offer website design, static website development, custom website development, WooCommerce website development, Shopify website development, and custom e-commerce solutions based on your business needs. "
    },
    {
        q: "Will my website be mobile-friendly and SEO-ready?",
        a: "Yes. We build responsive websites that work smoothly on all devices and follow SEO best practices such as clean structure, optimized content, and fast performance."
    },
    {
        q: "Can you integrate payment gateways, WhatsApp, CRM, or other tools?",
        a: "Yes. We can connect your website with the tools your business needs, including payment gateways, WhatsApp chat, CRM systems, and other third-party integrations."
    },
    {
        q: "Do you also help with content and SEO?",
        a: "Yes. We provide content support and on-page SEO services to help your website communicate clearly and perform better in search results."
    },
    {
        q: "What kind of businesses do you build websites for?",
        a: "We build websites for startups, small businesses, service companies, ecommerce brands, and growing enterprises that want a strong online presence."
    },
    {
        q: "What is included in your website development service?",
        a: "Our website development service typically includes planning, design, development, responsive setup, basic SEO implementation, integrations, testing, and launch support."
    }
];
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
/* ══════ SECTION 2C: PORTFOLIO ══════ */ const PORTFOLIO_COL1 = [
    {
        img: "/img/portfolio/urcts.webp",
        label: "URCTS",
        tag: ""
    },
    {
        img: "/img/portfolio/am.webp",
        label: "AM Builders",
        tag: ""
    },
    {
        img: "/img/portfolio/zky.webp",
        label: "ZKY",
        tag: ""
    },
    {
        img: "/img/portfolio/abb.webp",
        label: "ABB",
        tag: ""
    },
    {
        img: "/img/portfolio/riya.webp",
        label: "Riya consultancy",
        tag: ""
    }
];
const PORTFOLIO_COL2 = [
    {
        img: "/img/portfolio/feralroots.webp",
        label: "Feral Roots",
        tag: ""
    },
    {
        img: "/img/portfolio/sterlocare.webp",
        label: "SterloCare",
        tag: ""
    },
    {
        img: "/img/portfolio/sterlo.webp",
        label: "Sterlo",
        tag: ""
    },
    {
        img: "/img/portfolio/talenttribe.webp",
        label: "Talent Tribe",
        tag: ""
    },
    {
        img: "/img/portfolio/sterlobuild.webp",
        label: "SterloBuild",
        tag: ""
    }
];
const PORTFOLIO_COL3 = [
    {
        img: "/img/portfolio/product1.webp",
        label: "",
        tag: ""
    },
    {
        img: "/img/portfolio/product2.webp",
        label: "",
        tag: ""
    },
    {
        img: "/img/portfolio/product3.webp",
        label: "",
        tag: ""
    },
    {
        img: "/img/portfolio/product4.webp",
        label: "",
        tag: ""
    },
    {
        img: "/img/portfolio/product5.webp",
        label: "",
        tag: ""
    }
];
function PortfolioColumn({ items, speed, direction }) {
    const innerRef = (0,react__rspack_import_1.useRef)(null);
    const offsetRef = (0,react__rspack_import_1.useRef)(0);
    const pausedRef = (0,react__rspack_import_1.useRef)(false);
    const rafRef = (0,react__rspack_import_1.useRef)(null);
    // duplicate for infinite loop
    const doubled = [
        ...items,
        ...items
    ];
    (0,react__rspack_import_1.useEffect)(()=>{
        const el = innerRef.current;
        if (!el) return;
        const singleH = el.scrollHeight / 2;
        const animate = ()=>{
            if (!pausedRef.current) {
                offsetRef.current += speed;
                if (direction === "up") {
                    if (offsetRef.current >= singleH) offsetRef.current -= singleH;
                    el.style.transform = `translateY(-${offsetRef.current}px)`;
                } else {
                    if (offsetRef.current >= singleH) offsetRef.current -= singleH;
                    el.style.transform = `translateY(${offsetRef.current - singleH}px)`;
                }
            }
            rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);
        return ()=>cancelAnimationFrame(rafRef.current);
    }, [
        speed,
        direction
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        className: "pf-col",
        style: {
            height: "min(600px, 60vw)",
            overflow: "hidden",
            position: "relative"
        },
        onMouseEnter: ()=>{
            pausedRef.current = true;
        },
        onMouseLeave: ()=>{
            pausedRef.current = false;
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            ref: innerRef,
            className: "pf-col-inner",
            children: doubled.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "pf-card",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                            src: item.img,
                            alt: item.label,
                            loading: "lazy"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "pf-card-overlay",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "pf-card-label",
                                    children: item.label
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "pf-card-tag",
                                    children: item.tag
                                })
                            ]
                        })
                    ]
                }, i))
        })
    });
}
function PortfolioSection() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        className: "pf-section",
        style: {
            padding: '0'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "pf-inner",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "pf-left",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "partners-header1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                className: "partners-eyebrow",
                                style: {
                                    marginBottom: '20px',
                                    textAlign: 'center'
                                },
                                children: "Our  Portfolio"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                            className: "pf-heading",
                            children: [
                                "Proven Website ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                        children: "Solutions Across"
                                    })
                                }),
                                " Industries"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "pf-desc",
                            children: "Review performance-driven websites developed with strategic architecture, intuitive design, and measurable results."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "pf-btns",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                href: "/portfolio",
                                className: "pf-btn",
                                children: "View All Projects →"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "pf-cols",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(PortfolioColumn, {
                            items: PORTFOLIO_COL1,
                            speed: 0.6,
                            direction: "up"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(PortfolioColumn, {
                            items: PORTFOLIO_COL2,
                            speed: 0.5,
                            direction: "down"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(PortfolioColumn, {
                            items: PORTFOLIO_COL3,
                            speed: 0.7,
                            direction: "up"
                        })
                    ]
                })
            ]
        })
    });
}
/* ══════ ROOT APP ══════ */ function PCSWebsite() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Layout__rspack_import_5/* ["default"] */.A, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(SEOHead, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(HeroBanner, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ApproachSection, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ServicesSection, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(WhyChooseUsSection, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(PortfolioSection, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ProcessSection, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(KeyFeaturesSection, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(FAQSection, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_BlogSection__rspack_import_4/* ["default"] */.A, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_HomePage_CTA__rspack_import_2/* ["default"] */.A, {})
            ]
        })
    });
}


},

};
;