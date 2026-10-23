"use strict";
exports.ids = ["6353"];
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
8130(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (PCSWebsite)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _emailjs_browser__rspack_import_2 = __webpack_require__(58);
/* import */ var _components_HomePage_CTA__rspack_import_3 = __webpack_require__(9393);
/* import */ var _components_BlogSection__rspack_import_4 = __webpack_require__(3177);
/* import */ var _theme_Layout__rspack_import_5 = __webpack_require__(8328);
/* import */ var _docusaurus_Head__rspack_import_6 = __webpack_require__(3572);






const banner = "/img/shopify-website.webp";

function SEOHead() {
    const pageUrl = "https://www.priyamconsultancy.com/shopify-website-development/";
    const imageUrl = "https://www.priyamconsultancy.com/img/static-website.png";
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_6/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                children: "Shopify Website Design Company | Build Powerful Online Stores   "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "description",
                content: "shopify website design services to create stunning, and high-converting online stores that enhance user experience and drive more sales. "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "keywords",
                content: " shopify website design, shopify website development services, shopify website design services, shopify ecommerce website development, shopify website development company india, shopify website development company coimbatore, shopify website development cost, Shopify SEO services, Shopify store setup "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                rel: "canonical",
                href: "https://www.priyamconsultancy.com/shopify-website-development/"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:title",
                content: "Shopify Website Design Company | Build Powerful Online Stores   "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:description",
                content: "shopify website design services to create stunning, and high-converting online stores that enhance user experience and drive more sales. "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:url",
                content: "https://www.priyamconsultancy.com/shopify-website-development/"
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
                content: "Shopify Website Design Company | Build Powerful Online Stores   "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:description",
                content: "shopify website design services to create stunning, and high-converting online stores that enhance user experience and drive more sales. "
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
       "@id":"https://www.priyamconsultancy.com/shopify-website-development/",
       "name":"shopify-website-development"
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
  "@id":"https://www.priyamconsultancy.com/shopify-website-development/#service",
  "name":"Shopify Website Development",
  "serviceType":"Shopify Website Development Services",
  "url":"https://www.priyamconsultancy.com/shopify-website-development/",
  "description":"Priyam Consultancy provides professional Shopify website development services including custom Shopify store setup, ecommerce website design, Shopify theme customization, payment gateway integration, product management and scalable online store solutions across India.",
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
"name": "shopify-website-development",
"image": ["https://www.priyamconsultancy.com/img/shopify.png"],
"description": "Best Shopify website development services in Coimbatore offering Shopify store setup, custom ecommerce website development, Shopify theme customization, payment gateway integration, product management and scalable online store solutions.",
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
"reviewCount": "4718"
},
"offers": {
"@type": "Offer",
"url": "https://www.priyamconsultancy.com/shopify-website-development/",
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
    "name": "What is Shopify website design?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Shopify website design is the process of creating a visually appealing, user-friendly, and conversion-focused online store on the Shopify platform.
" 
    } 
  },{ 
    "@type": "Question", 
    "name": "Do you provide custom Shopify store design?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, we provide fully customized Shopify store design services tailored to your branding, products, and customer journey." 
    }
  },{ 
    "@type": "Question", 
    "name": "Is Shopify good for small businesses?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, Shopify is a strong choice for small and growing businesses because it is easy to manage, secure, and scalable." 
    } 
  },{ 
    "@type": "Question", 
    "name": "Do you provide Shopify SEO services?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, our Shopify SEO services include on-page optimization, speed improvement, structured data implementation, and analytics tracking." 
    } 
 },{ 
    "@type": "Question", 
    "name": "Do you provide support after website launch?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, we offer ongoing maintenance, updates, monitoring, and performance optimization after launch." 
    } 
 },{ 
    "@type": "Question", 
    "name": "How long does it take to build a Shopify website?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "The timeline depends on the project scope, design complexity, and product volume. Standard Shopify website development usually takes 2–6 weeks." 
    } 
    }] 
}

      `
            })
        ]
    });
}
const offerData = [
    {
        img: "/img/icon/shopify-seo.webp",
        label: "SEO Services",
        title: "SEO Services & Optimization",
        desc: "We implement technical SEO, structured metadata, speed optimization, schema configuration, and analytics integration to improve search visibility and organic growth.",
        tags: [
            "Visible",
            "Optimized",
            "Structured",
            "SearchFriendly"
        ]
    },
    {
        img: "/img/icon/shopify-store.webp",
        label: " Store Setup",
        title: "Complete Store Setup",
        desc: "From domain configuration to product uploads, collections, payment gateway integration, and shipping setup, we provide end-to-end Shopify store setup services for a seamless launch.",
        tags: [
            "Configured ",
            "Integrated",
            "Organized",
            "LaunchReady"
        ]
    },
    {
        img: "/img/icon/shopify-maintenance.webp",
        label: " Maintenance",
        title: "Ongoing Support & Maintenance",
        desc: "As a reliable Shopify website development company in India, we offer continuous updates, troubleshooting, performance monitoring, and strategic improvements for long-term business scalability.",
        tags: [
            "Reliable",
            "Consistent",
            "Supportive",
            "Maintained"
        ]
    },
    {
        img: "/img/icon/shopify-design.webp",
        label: "Responsive Design",
        title: "Professional Shopify Website Design",
        desc: "We create high-performing Shopify website design solutions customized to your products, brand positioning, and customer journey — ensuring strong visual appeal and higher conversion rates.",
        tags: [
            "Customized",
            "Engaging",
            "Branded",
            "ConversionFocused"
        ]
    },
    {
        img: "/img/icon/shopify-ecommerce.webp",
        label: " Ecommerce",
        title: "Shopify Ecommerce Website Development",
        desc: "Our Shopify ecommerce website development approach supports all models with custom pricing structures, app integrations, automation workflows, and scalable architecture.",
        tags: [
            "Optimized",
            "Flexible",
            "Automated",
            "Scalable"
        ]
    }
];
const nodePositions = [
    {
        top: "5%",
        left: "50%"
    },
    {
        top: "22%",
        left: "87%"
    },
    {
        top: "73%",
        left: "82%"
    },
    {
        top: "73%",
        left: "18%"
    },
    {
        top: "22%",
        left: "13%"
    }
];
const connectorAngles = [
    -90,
    -18,
    54,
    126,
    198
];
const includedData = [
    {
        num: "01",
        icon: "/img/icon/shopify-strategy.webp",
        title: "Business Strategy & Planning",
        desc: "We analyze your products, target audience, revenue model, and competition to define a conversion-focused Shopify architecture aligned with measurable growth goals.",
        tags: [
            {
                t: "UI Design",
                c: "t-orange"
            },
            {
                t: "UX Strategy",
                c: "t-blue"
            },
            {
                t: "Brand Alignment",
                c: "t-orange"
            },
            {
                t: "Typography",
                c: "t-blue"
            }
        ]
    },
    {
        num: "02",
        icon: "/img/icon/shopify-store-design.webp",
        title: "Custom Shopify Store Design",
        desc: "Structured collections, intelligent navigation systems, optimized product pages, mobile-responsive layouts, and conversion-driven checkout flow enhance user experience and purchasing efficiency.",
        tags: [
            {
                t: "Content Hierarchy",
                c: "t-orange"
            },
            {
                t: "Info Architecture",
                c: "t-blue"
            },
            {
                t: "CTA Placement",
                c: "t-orange"
            },
            {
                t: "Navigation Flow",
                c: "t-blue"
            }
        ]
    },
    {
        num: "03",
        icon: "/img/icon/shopify-payment.webp",
        title: "Secure Payment & App Integration",
        desc: "We integrate trusted payment gateways, shipping solutions, CRM tools, marketing apps, and third-party integrations to streamline operations.",
        tags: [
            {
                t: "Mobile-First",
                c: "t-orange"
            },
            {
                t: "Cross-Device",
                c: "t-blue"
            },
            {
                t: "Fluid Layouts",
                c: "t-orange"
            },
            {
                t: "Touch UX",
                c: "t-blue"
            }
        ]
    },
    {
        num: "04",
        icon: "/img/icon/shopify-seo-services.webp",
        title: "SEO Services",
        desc: "On-page SEO configuration, structured data implementation, speed enhancement, keyword mapping, and analytics setup improve search rankings and performance tracking.",
        tags: [
            {
                t: "Brand Guidelines",
                c: "t-orange"
            },
            {
                t: "Colour System",
                c: "t-blue"
            },
            {
                t: "Visual Identity",
                c: "t-orange"
            },
            {
                t: "Brand Voice",
                c: "t-blue"
            }
        ]
    },
    {
        num: "05",
        icon: "/img/icon/shopify-performance.webp",
        title: "Performance & Scalability Optimization",
        desc: "Database structuring, app performance audits, cloud scalability readiness, and checkout optimization ensure long-term operational efficiency and reliability.",
        tags: [
            {
                t: "Page Speed",
                c: "t-orange"
            },
            {
                t: "Core Web Vitals",
                c: "t-blue"
            },
            {
                t: "SEO Architecture",
                c: "t-orange"
            },
            {
                t: "Conversion Rate",
                c: "t-blue"
            }
        ]
    }
];
const processSteps = [
    {
        num: "01",
        icon: "/img/icon/shopify-planning.webp",
        title: "Requirement Analysis & Planning",
        desc: "We understand your brand positioning, operational requirements, competitors, and business objectives to define a scalable Shopify development roadmap",
        tags: [
            "Business Goals",
            "Audience Research",
            "Competitor Analysis"
        ],
        last: false
    },
    {
        num: "02",
        icon: "/img/icon/shopify-architecture.webp",
        title: "Store Architecture & Wireframing",
        desc: "Structured layouts and customer-focused navigation flows are designed to enhance engagement and maximize conversions.",
        tags: [
            "Wireframes",
            "Site Architecture",
            "Content Planning"
        ],
        last: false
    },
    {
        num: "03",
        icon: "/img/icon/shopify-web-store-design.webp",
        title: "Shopify Website Design & Development",
        desc: "Structured layouts and customer-focused navigation flows are designed to enhance engagement and maximize conversions.",
        tags: [
            "Visual Design",
            "Brand System",
            "UX Prototyping"
        ],
        last: false
    },
    {
        num: "04",
        icon: "/img/icon/shopify-payment-gateway.webp",
        title: "App & Integration Setup",
        desc: "Payment gateways, shipping systems, CRM tools, marketing automation platforms, and analytics integrations are configured seamlessly.",
        tags: [
            "Responsive Code",
            "SEO Structure",
            "Performance"
        ],
        last: false
    },
    {
        num: "05",
        icon: "/img/icon/shopify-testing.webp",
        title: "Testing & Optimization",
        desc: "Comprehensive testing ensures checkout performance, mobile responsiveness, speed optimization, and secure transaction validation.",
        tags: [
            "Cross-Browser",
            "Speed Testing",
            "QA Review"
        ],
        last: false
    },
    {
        num: "06",
        icon: "/img/icon/shopify-launch.webp",
        title: "Launch & Post-Launch Support",
        desc: "Ongoing SEO services, updates, monitoring, and maintenance ensure consistent growth and operational stability.",
        tags: [
            "Go Live",
            "Monitoring",
            "Ongoing Support"
        ],
        last: true
    }
];
const whyData = [
    {
        cls: "pcs-fb-box-tl",
        icon: "/img/icon/shopify-feat1.webp",
        title: "Custom Shopify Website Design",
        desc: "Strategic, conversion-focused Shopify website design services tailored to your brand identity, product structure, and target audience behavior."
    },
    {
        cls: "pcs-fb-box-tr",
        icon: "/img/icon/shopify-feat2.webp",
        title: "Complete Store Setup",
        desc: "End-to-end Shopify store setup including theme customization, product configuration, collections structuring, tax setup, and payment integration."
    },
    {
        cls: "pcs-fb-box-bl",
        icon: "/img/icon/shopify-feat3.webp",
        title: "Scalable Architecture",
        desc: "Flexible Shopify ecommerce website development supporting B2B, B2C, and D2C business models with automation capabilities and growth-ready infrastructure."
    },
    {
        cls: "pcs-fb-box-br",
        icon: "/img/icon/shopify-feat4.webp",
        title: "Advanced SEO Services",
        desc: "Technical SEO implementation, speed optimization, structured metadata, analytics tracking, and performance monitoring for improved visibility and sustainable traffic growth."
    }
];
const faqData = [
    {
        q: "What is Shopify website design?",
        a: "Shopify website design is the process of creating a visually appealing, user-friendly, and conversion-focused online store on the Shopify platform."
    },
    {
        q: "Do you provide custom Shopify store design?",
        a: "Yes, we provide fully customized Shopify store design services tailored to your branding, products, and customer journey."
    },
    {
        q: "Is Shopify good for small businesses?",
        a: "Yes, Shopify is a strong choice for small and growing businesses because it is easy to manage, secure, and scalable."
    },
    {
        q: "Do you provide Shopify SEO services?",
        a: "Yes, our Shopify SEO services include on-page optimization, speed improvement, structured data implementation, and analytics tracking."
    },
    {
        q: "Do you provide support after website launch?",
        a: "Yes, we offer ongoing maintenance, updates, monitoring, and performance optimization after launch."
    },
    {
        q: "How long does it take to build a Shopify website?",
        a: "The timeline depends on the project scope, design complexity, and product volume. Standard Shopify website development usually takes 2–6 weeks."
    }
];
function PCSWebsite() {
    const [activeOffer, setActiveOffer] = (0,react__rspack_import_1.useState)(0);
    const [openTab, setOpenTab] = (0,react__rspack_import_1.useState)(0);
    // Auto-loop Our Services orbit nodes
    (0,react__rspack_import_1.useEffect)(()=>{
        const timer = setInterval(()=>{
            setActiveOffer((prev)=>(prev + 1) % offerData.length);
        }, 3000);
        return ()=>clearInterval(timer);
    }, []);
    // Auto-open Our Included accordion tabs
    (0,react__rspack_import_1.useEffect)(()=>{
        const timer = setInterval(()=>{
            setOpenTab((prev)=>(prev + 1) % includedData.length);
        }, 3500);
        return ()=>clearInterval(timer);
    }, []);
    const handleOfferSelect = (i)=>setActiveOffer(i);
    const handleTabToggle = (i)=>setOpenTab(openTab === i ? -1 : i);
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
    const handleSubmit = (e)=>{
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
    const [active, setActive] = (0,react__rspack_import_1.useState)(null);
    const toggle = (index)=>{
        setActive(active === index ? null : index);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Layout__rspack_import_5/* ["default"] */.A, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(SEOHead, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
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
                                        "Shopify Website"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                                    className: "wd-hero-heading",
                                    children: [
                                        "Build a High-Performance",
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            className: "orange lined",
                                            style: {
                                                marginLeft: "12px"
                                            },
                                            children: "Shopify"
                                        }),
                                        " Ecommerce Website"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                    className: "wd-hero-sub",
                                    children: "Your Shopify store should attract, engage, and convert customers effortlessly. As an experienced Shopify website development company in Coimbatore, we design and develop scalable Shopify ecommerce solutions focused on performance, security, and measurable business growth.."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "wd-hero-actions",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                                        className: "wd-btn-fill",
                                        href: "/contact-us",
                                        children: [
                                            "Get a Free Quote ",
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
                                alt: "Shopify Website Development",
                                className: "wd-hero-img"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
                    className: "wd-approach",
                    id: "approach",
                    style: {
                        background: '#fff'
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "wd-ap-inner",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "partners-header1",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "partners-eyebrow",
                                            style: {
                                                marginBottom: '20px',
                                                textAlign: 'start'
                                            },
                                            children: "Our Strategy for Shopify Website Development"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                                        className: "wd-ap-heading",
                                        children: [
                                            "Strategic,  ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                children: "Conversion-Driven  "
                                            }),
                                            " Shopify Solutions"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        className: "wd-ap-intro",
                                        children: "Successful Shopify ecommerce website development requires structured store architecture, smooth navigation, secure checkout systems, and performance-focused design that enhances user experience and business scalability."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        className: "wd-ap-intro",
                                        children: "Our Shopify website development services focus on creating optimized online stores that improve usability, strengthen brand presence, and support long-term revenue growth."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        className: "wd-ap-intro",
                                        children: "From Shopify store setup to advanced customization, we build flexible and scalable ecommerce websites aligned with your workflow, operational goals, and digital growth strategy."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "wd-ap-form-wrap",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "wd-ap-form-card",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: "wd-form-eyebrow",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                    className: "wd-form-eyebrow-line"
                                                }),
                                                "Your Growth, Our Mission",
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                    className: "wd-form-eyebrow-line"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: "wd-form-title",
                                            children: [
                                                "Get Your ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                    children: "Free"
                                                }),
                                                " Quote"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("form", {
                                            onSubmit: handleSubmit,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    className: "wd-fl-row",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                            className: "wd-fl-group",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("label", {
                                                                    className: "wd-fl-label",
                                                                    children: "Your Name"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                    style: {
                                                                        position: "relative"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                            className: "wd-fl-icon",
                                                                            children: "\uD83D\uDC64"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                            className: "wd-fl-input",
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
                                                            className: "wd-fl-group",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("label", {
                                                                    className: "wd-fl-label",
                                                                    children: "Company"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                    style: {
                                                                        position: "relative"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                            className: "wd-fl-icon",
                                                                            children: "\uD83C\uDFE2"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                            className: "wd-fl-input",
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
                                                    className: "wd-fl-group",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("label", {
                                                            className: "wd-fl-label",
                                                            children: "Email Address"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                            style: {
                                                                position: "relative"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                    className: "wd-fl-icon",
                                                                    children: "✉️"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                    className: "wd-fl-input",
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
                                                    className: "wd-fl-group",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("label", {
                                                            className: "wd-fl-label",
                                                            children: "Mobile Number"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                            className: "wd-phone-row",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                    className: "wd-phone-flag",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                        children: "\uD83D\uDCDE"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                    className: "wd-fl-input",
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
                                                    className: "wd-fl-group wd-textarea-group",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("label", {
                                                            className: "wd-fl-label",
                                                            children: "Message"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                            style: {
                                                                position: "relative"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                    className: "wd-fl-icon",
                                                                    style: {
                                                                        top: "0.9rem",
                                                                        transform: "none"
                                                                    },
                                                                    children: "\uD83D\uDCAC"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("textarea", {
                                                                    className: "wd-fl-textarea",
                                                                    name: "msg",
                                                                    placeholder: "Tell us about your project...",
                                                                    value: form.msg,
                                                                    onChange: handleChange
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("button", {
                                                    type: "submit",
                                                    className: "wd-ap-submit",
                                                    children: [
                                                        "Get Free Consultation",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                            className: "wd-ap-submit-arrow",
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
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
                    className: "pcs-offer-section",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "pcs-offer-inner",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "partners-header1",
                                style: {
                                    marginBottom: '20px',
                                    textAlign: 'center'
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                    className: "partners-eyebrow",
                                    style: {
                                        marginBottom: '20px',
                                        textAlign: 'center'
                                    },
                                    children: "Key Uniqueness"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                                className: "pcs-offer-heading",
                                children: [
                                    "Why Should You Choose us for ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                            children: "Shopify Website Design?"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "pcs-offer-body",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "pcs-offer-left",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: "pcs-orbit-wrap",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "pcs-orbit-ring"
                                                }),
                                                connectorAngles.map((angle, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: `pcs-orbit-connector${activeOffer === i ? " active" : ""}`,
                                                        style: {
                                                            width: "calc(50% - 62px)",
                                                            transform: `rotate(${angle}deg) translateY(-50%)`
                                                        }
                                                    }, i)),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    className: "pcs-orbit-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "pcs-orbit-center-name",
                                                            children: "PCS"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "pcs-orbit-center-sub",
                                                            children: "Web Design"
                                                        })
                                                    ]
                                                }),
                                                offerData.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "pcs-orbit-node",
                                                        style: {
                                                            top: nodePositions[i].top,
                                                            left: nodePositions[i].left
                                                        },
                                                        onClick: ()=>handleOfferSelect(i),
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                            className: `pcs-orbit-node-box${activeOffer === i ? " active" : ""}`,
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                                    src: item.img,
                                                                    alt: item.label,
                                                                    className: "pcs-orbit-node-emoji",
                                                                    style: {
                                                                        width: "32px",
                                                                        height: "32px",
                                                                        objectFit: "contain"
                                                                    }
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                    className: "pcs-orbit-node-lbl",
                                                                    children: item.label
                                                                })
                                                            ]
                                                        })
                                                    }, i))
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "pcs-offer-right",
                                        children: [
                                            activeOffer === -1 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "pcs-offer-placeholder",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "pcs-offer-placeholder-icon",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                            src: "/img/click-pointer.png",
                                                            alt: "click",
                                                            style: {
                                                                width: "44px",
                                                                height: "44px",
                                                                objectFit: "contain",
                                                                opacity: 0.35
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "pcs-offer-placeholder-text",
                                                        children: "Click any box to view details"
                                                    })
                                                ]
                                            }),
                                            offerData.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    className: `pcs-offer-panel${activeOffer === i ? " active" : ""}`,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "pcs-offer-panel-bar"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                            className: "pcs-offer-panel-title-row",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                    className: "pcs-offer-panel-icon",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                                        src: item.img,
                                                                        alt: item.title,
                                                                        style: {
                                                                            width: "32px",
                                                                            height: "32px",
                                                                            objectFit: "contain"
                                                                        }
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                                    className: "pcs-offer-panel-title",
                                                                    children: item.title
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "pcs-offer-panel-divider"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "pcs-offer-panel-desc",
                                                            children: item.desc
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "pcs-offer-panel-tags",
                                                            children: item.tags.map((tag, j)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                    className: "pcs-offer-panel-tag",
                                                                    children: tag
                                                                }, j))
                                                        })
                                                    ]
                                                }, i))
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
                    className: "pcs-wi5-section",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "pcs-wi5-inner",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "pcs-offer-inner",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                    className: "partners-header1",
                                    style: {
                                        marginBottom: '10px',
                                        textAlign: 'center'
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "partners-eyebrow",
                                        style: {
                                            textAlign: 'center'
                                        },
                                        children: "Our Expertise"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                                className: "pcs-wi5-heading",
                                children: [
                                    "What’s Included in Our  ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                            children: "Shopify Website"
                                        })
                                    }),
                                    " Development Services?"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "pcs-wi5-tabs",
                                children: includedData.map((tab, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: `pcs-wi5-tab${openTab === i ? " open" : ""}`,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "pcs-wi5-tab-head",
                                                onClick: ()=>handleTabToggle(i),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                        className: "pcs-wi5-tab-num",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                className: "pcs-wi5-tab-num-diamond"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                className: "pcs-wi5-tab-num-text",
                                                                children: tab.num
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "pcs-wi5-tab-icon",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                            src: tab.icon,
                                                            alt: tab.title,
                                                            style: {
                                                                width: "24px",
                                                                height: "24px",
                                                                objectFit: "contain"
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                        className: "pcs-wi5-tab-title",
                                                        children: tab.title
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "pcs-wi5-tab-chev",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                            src: "/img/chevron-down.png",
                                                            alt: "toggle",
                                                            style: {
                                                                width: "14px",
                                                                height: "14px",
                                                                objectFit: "contain"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "pcs-wi5-tab-body",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "pcs-wi5-tab-content",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "pcs-wi5-tab-desc",
                                                            children: tab.desc
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "pcs-wi5-tab-progress"
                                                    })
                                                ]
                                            })
                                        ]
                                    }, i))
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
                    className: "pcs-proc-section",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "pcs-proc-inner",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "pcs-proc-header",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "pcs-offer-inner",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "partners-header1",
                                            style: {
                                                marginBottom: '10px',
                                                textAlign: 'center'
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                                className: "partners-eyebrow",
                                                style: {
                                                    textAlign: 'center'
                                                },
                                                children: "Workflow Process"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                                        className: "pcs-proc-title",
                                        children: [
                                            "Our ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                                    children: "Shopify Website"
                                                })
                                            }),
                                            " Development Process"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "pcs-proc-grid",
                                children: processSteps.map((step, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "pcs-proc-gc",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "pcs-proc-gc-top",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "pcs-proc-gc-num",
                                                        children: step.num
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "pcs-proc-gc-icon",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                            src: step.icon,
                                                            alt: step.title,
                                                            style: {
                                                                width: "32px",
                                                                height: "32px",
                                                                objectFit: "contain"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                className: "pcs-proc-gc-title",
                                                children: step.title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "pcs-proc-gc-desc",
                                                children: step.desc
                                            })
                                        ]
                                    }, i))
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
                    className: "pcs-fb-section",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "pcs-fb-inner",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "pcs-fb-header",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "pcs-offer-inner",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "partners-header1",
                                            style: {
                                                marginBottom: '10px',
                                                textAlign: 'center'
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                                className: "partners-eyebrow",
                                                style: {
                                                    textAlign: 'center'
                                                },
                                                children: "Key Service Features"
                                            })
                                        })
                                    }),
                                    "            ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                                        className: "pcs-fb-title",
                                        children: [
                                            "Features of our ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                                    children: "Shopify Website"
                                                })
                                            }),
                                            " Development Services"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "pcs-fb-grid",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "pcs-fb-vline"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "pcs-fb-hline"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: `pcs-fb-box pcs-fb-box-tl`,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "pcs-fb-icon",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                    src: whyData[0].icon,
                                                    alt: whyData[0].title,
                                                    style: {
                                                        width: "28px",
                                                        height: "28px",
                                                        objectFit: "contain"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                className: "pcs-fb-box-title",
                                                children: whyData[0].title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "pcs-fb-box-desc",
                                                children: whyData[0].desc
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "pcs-fb-center-col",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "pcs-fb-center-circle",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "pcs-fb-center-inner",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "pcs-fb-center-icon",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                        src: "/img/priyam-consultancy-logo.png",
                                                        alt: "PCS",
                                                        style: {
                                                            width: "80px",
                                                            height: "80px",
                                                            objectFit: "contain"
                                                        }
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: `pcs-fb-box pcs-fb-box-tr`,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "pcs-fb-icon",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                    src: whyData[1].icon,
                                                    alt: whyData[1].title,
                                                    style: {
                                                        width: "28px",
                                                        height: "28px",
                                                        objectFit: "contain"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                className: "pcs-fb-box-title",
                                                children: whyData[1].title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "pcs-fb-box-desc",
                                                children: whyData[1].desc
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: `pcs-fb-box pcs-fb-box-bl`,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "pcs-fb-icon",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                    src: whyData[2].icon,
                                                    alt: whyData[2].title,
                                                    style: {
                                                        width: "28px",
                                                        height: "28px",
                                                        objectFit: "contain"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                className: "pcs-fb-box-title",
                                                children: whyData[2].title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "pcs-fb-box-desc",
                                                children: whyData[2].desc
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: `pcs-fb-box pcs-fb-box-br`,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "pcs-fb-icon",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                    src: whyData[3].icon,
                                                    alt: whyData[3].title,
                                                    style: {
                                                        width: "28px",
                                                        height: "28px",
                                                        objectFit: "contain"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                className: "pcs-fb-box-title",
                                                children: whyData[3].title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "pcs-fb-box-desc",
                                                children: whyData[3].desc
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
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
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_BlogSection__rspack_import_4/* ["default"] */.A, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_HomePage_CTA__rspack_import_3/* ["default"] */.A, {})
            ]
        })
    });
}


},

};
;