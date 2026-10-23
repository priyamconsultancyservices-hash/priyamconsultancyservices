"use strict";
exports.ids = ["3565"];
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
8532(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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




const banner = "/img/static-website.webp";



function SEOHead() {
    const pageUrl = "https://www.priyamconsultancy.com/static-website-development/";
    const imageUrl = "https://www.priyamconsultancy.com/img/static-website.png";
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_6/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                children: "Professional Static Website Development Company "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "description",
                content: "Static website development services to create simple, fast-loading, and SEO-friendly websites for better performance and user experience. "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "keywords",
                content: "Static Website Development Company in Coimbatore, Static Website Development Services, Static website design, Static website "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                rel: "canonical",
                href: "https://www.priyamconsultancy.com/static-website-development/"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:title",
                content: "Professional Static Website Development Company "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:description",
                content: "Static website development services to create simple, fast-loading, and SEO-friendly websites for better performance and user experience. "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:url",
                content: "https://www.priyamconsultancy.com/static-website-development/"
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
                content: "Professional Static Website Development Company "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:description",
                content: "Static website development services to create simple, fast-loading, and SEO-friendly websites for better performance and user experience. "
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
       "@id":"https://www.priyamconsultancy.com/static-website-development/",
       "name":"static-website-development"
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
  "@id":"https://www.priyamconsultancy.com/static-website-development/#service",
  "name":"Static Website Development",
  "serviceType":"Static Website Development Services",
  "url":"https://www.priyamconsultancy.com/static-website-development/",
  "description":"Priyam Consultancy provides professional static website development services including fast-loading static websites, business landing pages, brochure websites, SEO-friendly HTML websites and lightweight web solutions for businesses across India.",
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
"name": "static-website-development",
"image": ["https://www.priyamconsultancy.com/img/static-website.png"],
"description": "Best static website development services in Coimbatore offering responsive static websites, business websites, corporate web pages, fast-loading website solutions, SEO-friendly website development and professional web design services.",
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
"reviewCount": "4689"
},
"offers": {
"@type": "Offer",
"url": "https://www.priyamconsultancy.com/static-website-development/",
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
    "name": "What is a static website?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, we can help with hosting and deployment for your static website. We make sure the website is properly uploaded, configured, and launched smoothly so it works correctly from day one." 
    } 
  },{ 
    "@type": "Question", 
    "name": "Do you handle hosting and deployment?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes. We build responsive websites that work smoothly on all devices and follow SEO best practices such as clean structure, optimized content, and fast performance." 
    }
  },{ 
    "@type": "Question", 
    "name": "Are static websites good for SEO?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, static websites are generally good for SEO because they load quickly, have clean code, and are easy for search engines to crawl. With proper optimization, they can support strong search visibility." 
    } 
  },{ 
    "@type": "Question", 
    "name": "What are the benefits of a static website for my business?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "A static website offers fast performance, strong security, low maintenance, and a professional online presence. It is a practical choice for businesses that want a simple website with dependable performance." 
    } 
 },{ 
    "@type": "Question", 
    "name": "Can you customize a static website to match my brand?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, we can customize the design, colors, layout, and content to match your brand identity. The website will be tailored to reflect your business style and goals." 
    } 
 },{ 
    "@type": "Question", 
    "name": "Do you provide support after launch?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, we provide support after launch to help with updates, fixes, and any technical assistance you may need. This helps keep your website running smoothly over time.
" 
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
        emoji: "/img/icon/static-website-cost.webp",
        label: "Cost-Effective",
        title: "Cost-Effective Development",
        desc: "Static websites are one of the most budget-friendly web development solutions available for businesses of all sizes. At PCS, we deliver high-quality static websites that require minimal infrastructure, reduce ongoing maintenance costs, and provide exceptional value.",
        tags: [
            "Affordable",
            "Efficient",
            "Scalable",
            "Valuable"
        ]
    },
    {
        emoji: "/img/icon/static-website-experience.webp",
        label: "Experience",
        title: "Seamless User Experience",
        desc: "User experience plays a critical role in engagement and conversions. Our team focuses on clean layouts, structured content, and intuitive navigation to ensure visitors can easily find what they're looking for. A smooth browsing experience encourages users to stay longer and take action.",
        tags: [
            "Intuitive",
            "Smooth",
            "Structured",
            "Engaging"
        ]
    },
    {
        emoji: "/img/icon/static-website-security.webp",
        label: " Security",
        title: "Enhanced Security & Stability",
        desc: "Static websites have no database or server-side scripts, significantly reducing security vulnerabilities. PCS builds static websites using secure frameworks and coding standards that protect your business online, ensuring stability, reliability, and peace of mind for the long term.",
        tags: [
            "Secure",
            "Stable",
            "Reliable",
            "Protected"
        ]
    },
    {
        emoji: "/img/icon/static-website-customization.webp",
        label: "Customized",
        title: "Customized Static Website Solutions",
        desc: "Every business has its own identity, goals, and audience. That's why PCS delivers tailor-made static website development solutions designed specifically around your brand requirements. We understand your business objectives and create a website that not only reflects your brand personality but also differentiates you from competitors.",
        tags: [
            "Tailored",
            "Strategic",
            "Branded",
            "Unique"
        ]
    },
    {
        emoji: "/img/icon/static-website-delivery.webp",
        label: " Delivery",
        title: "On-Time Delivery",
        desc: "We value your time and business commitments. PCS follows a structured development process with clearly defined timelines to ensure timely project completion. Our efficient workflow ensures your static website is delivered on schedule without compromising on quality or performance.",
        tags: [
            "Timely",
            "Consistent",
            "Reliable",
            "Professional"
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
        icon: "/img/icon/static-website-custom-design.webp",
        title: "Custom UI/UX Design",
        desc: "We craft visually engaging and brand-aligned static websites tailored to your business goals. From layout structure to typography and color systems, every element is thoughtfully developed to enhance visual appeal and user experience.",
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
        icon: "/img/icon/static-website-planning.webp",
        title: "Structured Content Layout",
        desc: "Great development supports great content. We organize and structure your website content for clarity, readability, and flow — ensuring visitors can easily navigate and understand your message",
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
        icon: "/img/icon/static-website-mobile-responsive.webp",
        title: "Responsive Design Experience",
        desc: "Our static websites are fully responsive, adapting seamlessly across mobiles, tablets, and desktops. This ensures consistent branding, smooth browsing, and a visually polished experience on every device.",
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
        icon: "/img/icon/static-website-branding.webp",
        title: "Visual Branding Consistency",
        desc: "Consistency is the foundation of a strong brand. We apply your colors, fonts, imagery, and iconography uniformly across every page of your static website — enhancing brand recognition, communicating reliability, and delivering a cohesive digital presence that sets your business apart.",
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
        icon: "/img/icon/static-website-performance.webp",
        title: "Performance & Engagement Optimization",
        desc: "Our development approach focuses on engagement. With clear calls-to-action, intuitive layouts, and strategic section placement, we create static websites that not only look impressive but encourage meaningful interaction.",
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
        icon: "/img/icon/static-website-target.webp",
        title: "Business Discovery & Goal Setting",
        desc: "We start by having a detailed conversation about your business, target audience, industry, and objectives. Understanding your vision from the very beginning allows us to set a focused development direction that aligns perfectly with your brand and business goals.",
        tags: [
            "Business Goals",
            "Audience Research",
            "Competitor Analysis"
        ],
        last: false
    },
    {
        num: "02",
        icon: "/img/icon/static-website-market-research.webp",
        title: "Market Research & Strategic Planning",
        desc: "Our team conducts in-depth research on your competitors, industry landscape, and user expectations. This insight helps us craft a well-informed development strategy that ensures your static website stands out, communicates clearly, and delivers real value.",
        tags: [
            "Wireframes",
            "Site Architecture",
            "Content Planning"
        ],
        last: false
    },
    {
        num: "03",
        icon: "/img/icon/static-website-wireframing.webp",
        title: "Wireframing & Layout Planning",
        desc: "Before development begins, we create detailed wireframes that define the structure, content placement, and user flow of your website. This step ensures a logical, intuitive layout and strong visual hierarchy that guides visitors seamlessly through your content.",
        tags: [
            "Visual Design",
            "Brand System",
            "UX Prototyping"
        ],
        last: false
    },
    {
        num: "04",
        icon: "/img/icon/static-website-design-layout.webp",
        title: "Design & Static Development",
        desc: "Our developers and designers work together to build a visually compelling, brand-consistent static website. From typography and color systems to imagery and interface elements, every detail is crafted to reflect your brand's professionalism and identity.",
        tags: [
            "Responsive Code",
            "SEO Structure",
            "Performance"
        ],
        last: false
    },
    {
        num: "05",
        icon: "/img/icon/static-website-responsive.webp",
        title: "Responsive Refinement & Optimization",
        desc: "We thoroughly test and optimize your static website across desktops, tablets, and mobile devices. This ensures consistent performance, smooth interaction, and a flawless visual experience regardless of the screen size or device used.",
        tags: [
            "Cross-Browser",
            "Speed Testing",
            "QA Review"
        ],
        last: false
    },
    {
        num: "06",
        icon: "/img/icon/static-website-launch.webp",
        title: "Review, Approval & Launch",
        desc: "Once development is complete, we present your static website for review and welcome your feedback openly. All necessary refinements are implemented with care. Once everything meets your expectations, we finalize and deploy your website for a smooth, confident, and disruption-free launch.",
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
        icon: "/img/icon/static-website-strategy.webp",
        title: "Intuitive & User-Focused Experience",
        desc: "Every static website is designed with the end user in mind. Clear structure, smooth navigation, and organized layouts create an engaging browsing experience that encourages visitors to explore and interact confidently."
    },
    {
        cls: "pcs-fb-box-tr",
        icon: "/img/icon/static-website-seo.webp",
        title: "SEO-Optimized Structure",
        desc: "Search-friendly development practices are implemented from the foundation stage. Clean coding standards, optimized content placement, and responsive frameworks improve online visibility and strengthen overall search engine performance."
    },
    {
        cls: "pcs-fb-box-bl",
        icon: "/img/icon/static-website-email.webp",
        title: "Professional Email Integration",
        desc: "Seamless email integration connects contact forms, inquiry submissions, and automated responses directly to your business email system. This ensures every lead is captured, managed efficiently, and responded to without delays."
    },
    {
        cls: "pcs-fb-box-br",
        icon: "/img/icon/static-website-whatsapp.webp",
        title: "WhatsApp Business Integration",
        desc: "Direct WhatsApp integration enables instant communication between visitors and your business. With a single click, users can initiate conversations, improving engagement, accelerating responses, and enhancing customer trust."
    }
];
const faqData = [
    {
        q: "What is a static website?",
        a: "A static website is built with fixed HTML, CSS, and JavaScript files that show the same content to every visitor. It is fast, secure, and ideal for businesses that want a simple and reliable online presence."
    },
    {
        q: "Do you handle hosting and deployment?",
        a: "Yes, we can help with hosting and deployment for your static website. We make sure the website is properly uploaded, configured, and launched smoothly so it works correctly from day one."
    },
    {
        q: " Do you provide support after launch?",
        a: "Yes, we provide support after launch to help with updates, fixes, and any technical assistance you may need. This helps keep your website running smoothly over time."
    },
    {
        q: "Can you customize a static website to match my brand?",
        a: "Yes, we can customize the design, colors, layout, and content to match your brand identity. The website will be tailored to reflect your business style and goals."
    },
    {
        q: "What are the benefits of a static website for my business?",
        a: "A static website offers fast performance, strong security, low maintenance, and a professional online presence. It is a practical choice for businesses that want a simple website with dependable performance."
    },
    {
        q: "Are static websites good for SEO?",
        a: "Yes, static websites are generally good for SEO because they load quickly, have clean code, and are easy for search engines to crawl. With proper optimization, they can support strong search visibility."
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
                                        "static Websites"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                                    className: "wd-hero-heading",
                                    children: [
                                        "Fast and secure Static",
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            className: "orange lined",
                                            children: " Websites built "
                                        }),
                                        "  to Scale up Performance"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                    className: "wd-hero-sub",
                                    children: "As a leading static website development company in Coimbatore, we deliver lightning-fast, secure, and scalable static websites built to strengthen your brand presence, attract the right audience, and support sustainable business growth through superior performance, SEO visibility, and seamless user experience."
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
                                alt: "Static Website Development Banner",
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
                                                textAlign: 'center'
                                            },
                                            children: "Our Strategy for Static Website Development "
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                                        className: "wd-ap-heading",
                                        children: [
                                            "Fast, Clean &  ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                children: "Conversion-Focused "
                                            }),
                                            " Static Website Development"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        className: "wd-ap-intro",
                                        children: "Your website creates the first impression of your business online. As an experienced static website development company, we build fast, secure, and strategically structured websites aligned with your business goals."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        className: "wd-ap-intro",
                                        children: "Every element, from layout design to code structure, is developed with a focus on SEO performance, user engagement, and seamless browsing experience across all devices and screen sizes."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        className: "wd-ap-intro",
                                        children: "As a trusted static website development company , we create modern and responsive static websites that combine visual appeal, performance, and functionality to strengthen your digital presence and business credibility."
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
                                    "Why Should You Choose for",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                            children: " Static Website Development?"
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
                                                                    src: item.emoji,
                                                                    alt: item.label,
                                                                    style: {
                                                                        width: "28px",
                                                                        height: "28px",
                                                                        objectFit: "contain",
                                                                        filter: activeOffer === i ? "brightness(0) invert(1)" : "none",
                                                                        transition: "filter 0.3s"
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
                                                            src: "/img/icons/click.png",
                                                            alt: "Select an option",
                                                            style: {
                                                                width: "40px",
                                                                height: "40px",
                                                                objectFit: "contain",
                                                                opacity: "0.4"
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
                                                                        src: item.emoji,
                                                                        alt: item.title,
                                                                        style: {
                                                                            width: "32px",
                                                                            height: "32px",
                                                                            objectFit: "contain",
                                                                            filter: "brightness(0) invert(1)"
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
                                            children: "Static Website"
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
                                                                width: "22px",
                                                                height: "22px",
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
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                            style: {
                                                                fontSize: "1rem",
                                                                lineHeight: "1",
                                                                display: "block"
                                                            },
                                                            children: "▾"
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
                                            "Our  ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                                    children: " Static Website"
                                                })
                                            }),
                                            " Development Process "
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
                                                                width: "28px",
                                                                height: "28px",
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
                                                children: "Key Service Features  "
                                            })
                                        })
                                    }),
                                    "            ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                                        className: "pcs-fb-title",
                                        children: [
                                            "Features of our Static  ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                                    children: "Website Development "
                                                })
                                            }),
                                            " Services"
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
                                                        width: "32px",
                                                        height: "32px",
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
                                                        width: "32px",
                                                        height: "32px",
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
                                                        width: "32px",
                                                        height: "32px",
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
                                                        width: "32px",
                                                        height: "32px",
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