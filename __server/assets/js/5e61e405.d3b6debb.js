"use strict";
exports.ids = ["1057"];
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
9525(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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




const banner = "/img/busniess-registration.webp";




function SEOHead() {
    const pageUrl = "https://www.priyamconsultancy.com/business-registrations/";
    const imageUrl = "https://www.priyamconsultancy.com/img/business-registration.png";
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_5/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                children: "Business Registration Services | Company Registration in Coimbatore "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "description",
                content: "Professional Business Registration Services in Coimbatore. Get seamless company registration, legal support, and compliance guidance for your business growth. "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "keywords",
                content: "Business Registration, Business Registration Services, Business Registration Consultants, Limited Company Registration Services, Private Limited Company Registration Services, Public Limited Company Registration Services, Limited Liability Partnership Services, Company Registration Consultants"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                rel: "canonical",
                href: "https://www.priyamconsultancy.com/business-registrations/"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:title",
                content: "Business Registration Services | Company Registration in Coimbatore "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:description",
                content: "Professional Business Registration Services in Coimbatore. Get seamless company registration, legal support, and compliance guidance for your business growth. "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:url",
                content: "https://www.priyamconsultancy.com/business-registrations/"
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
                content: "Business Registration Services | Company Registration in Coimbatore "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:description",
                content: "Professional Business Registration Services in Coimbatore. Get seamless company registration, legal support, and compliance guidance for your business growth. "
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
              "@id":"https://www.priyamconsultancy.com/business-registrations/",
              "name":"business-registrations"
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
        "@id":"https://www.priyamconsultancy.com/business-registrations/#service",
        "name":"Business Registrations",
        "serviceType":"Business Registration Services",
        "url":"https://www.priyamconsultancy.com/business-registrations/",
        "description":"Priyam Consultancy provides professional business registration services including proprietorship registration, partnership registration, LLP registration, OPC registration, private limited company incorporation and statutory registration support for businesses across India.",
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
        "name": "business-registrations",
        "image": ["https://www.priyamconsultancy.com/img/busniess-registration.png"],
        "description": "Best business registration services in Coimbatore offering proprietorship registration, partnership registration, LLP registration, OPC registration, private limited company incorporation and statutory registration support.",
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
        "reviewCount": "5927"
        },
        "offers": {
        "@type": "Offer",
        "url": "https://www.priyamconsultancy.com/business-registrations/",
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
            "name": "What do you mean by business registration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Business registration is the legal process of officially establishing a business entity under applicable government regulations. It provides legal recognition, enables tax registration, supports banking and compliance requirements, and allows businesses to operate professionally within a structured legal framework."
            }
          },{
            "@type": "Question",
            "name": "How many types of business registration are there?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Common types of business registration in India include Sole Proprietorship, Partnership Firm, Limited Liability Partnership (LLP), One Person Company (OPC), Private Limited Company, and Public Limited Company. The ideal structure depends on ownership, liability, compliance needs, and long-term business objectives."
            }
          },{
            "@type": "Question",
            "name": "Can a single person establish a business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, a single person can legally establish a business in India through structures like Sole Proprietorship or One Person Company (OPC). These options allow individuals to start and manage businesses independently while meeting applicable legal, taxation, and compliance requirements."
            }
          },{
            "@type": "Question",
            "name": "How much time does it take in India to register a business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The business registration timeline in India depends on the business structure and documentation readiness. Typically, registration can take anywhere between 5 to 15 working days, including approvals, verification processes, and statutory registrations required for legal business operations."
            }
          },{
            "@type": "Question",
            "name": "What documents are required for business registration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Business registration generally requires PAN card, Aadhaar card, address proof, passport-size photographs, business address proof, and bank details. Additional documents may vary depending on the selected business structure, partners, directors, or specific registration and licensing requirements."
            }
          },{
            "@type": "Question",
            "name": "Is GST registration mandatory after business registration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GST registration depends on your business turnover, industry type, and operational requirements. Businesses exceeding the prescribed turnover limit or involved in interstate trade, ecommerce, or specific taxable services are generally required to obtain GST registration under applicable regulations."
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
        className: "hero-section",
        style: {
            minHeight: "100svh",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "2rem",
            padding: "1rem 6% 3rem",
            position: "relative",
            overflow: "hidden",
            background: "#004168"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "hero-content-col",
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
                            "Business Registration "
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                        className: "hero-heading",
                        children: [
                            "Business Registration Partner for",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: "underline-word orange",
                                children: "Sustainable  "
                            }),
                            "Success"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "hero-sub",
                        children: "Your business deserves a solid foundation. From registration to ongoing compliance, we simplify the legal and regulatory maze so you can focus on building your brand, expanding your operations, and achieving sustainable growth. With expert guidance at every step, your business stays protected, credible, and ready for the future."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "hero-actions",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                            className: "btn-fill",
                            href: "/contact-us",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "Explore More"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "btn-arr",
                                    children: "›"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "hero-img-col",
                style: {
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "hero-img-wrap",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                        src: banner,
                        alt: "Business Registration Illustration",
                        className: "hero-img"
                    })
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
                                "Business  ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "Process Automation"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "Every business is unique, and its registration journey should reflect that. We begin by understanding your vision, operations, and long-term goals. This helps us align every step with your business direction."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "We assess the most suitable structure for your needs and guide you through the process. From documentation to approvals, everything is handled with precision. This ensures a smooth, efficient, and legally sound setup."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap-intro",
                            children: "Business registration is more than paperwork—it’s the foundation of your growth. We manage every formality so you can focus on building and expanding. Your business starts strong, confident, and ready for long-term success."
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
        tag: "PLC",
        label: "Public Limited Company",
        title: "Raise Capital and Scale <i>Confidently</i>",
        desc: [
            "Ideal for large businesses aiming to raise capital from the public and expand at scale. A Public Limited Company enhances credibility and builds strong trust among investors and stakeholders. It supports structured growth with wider market access.",
            "With defined governance and strict regulatory compliance, it ensures transparency and accountability. This structure enables long-term expansion, strong financial backing, and sustainable success. It is best suited for businesses with ambitious growth plans"
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
        tag: "Pvt Ltd",
        label: "Private Limited Company",
        title: "Structured Growth with <i>Limited Liability</i>",
        desc: [
            "A preferred choice for startups and growing businesses seeking structured expansion. A Private Limited Company offers limited liability protection and a clear legal identity. It builds credibility while supporting steady business growth.",
            "With a formal governance framework and better funding opportunities, it attracts investors easily. This structure ensures compliance while protecting the interests of owners and shareholders. It supports long-term, scalable growth."
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
        tag: "LLP",
        label: "Limited Liability Partnership",
        title: "Flexibility Partnership with <i>Legal Protection</i>",
        desc: [
            "An LLP combines the flexibility of a partnership with the benefits of limited liability. It is ideal for professionals and small businesses looking for operational freedom. Partners can manage roles efficiently while maintaining flexibility.",
            "At the same time, it offers legal protection and a recognized business structure. It ensures credibility, shared responsibilities, and reduced compliance burden. This makes it a balanced choice for stable growth."
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
        tag: "OPC",
        label: "One Person Company (OPC)",
        title: "Corporate Benefits for <i>Solo Entrepreneurs</i>",
        desc: [
            "Designed for individual entrepreneurs who want a corporate identity. An OPC provides limited liability and a structured framework for solo business operations. It allows you to operate with professionalism and credibility.",
            "With simplified compliance and full control, it supports efficient decision-making. It also offers long-term growth potential with legal protection. This makes it ideal for entrepreneurs scaling independently."
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
        tag: "Partnership",
        label: "Partnership Firm",
        title: "Shared Responsibility,  <i>Collective Growth/i>",
        desc: [
            "A Partnership Firm is suitable for businesses managed by two or more individuals. It allows partners to share responsibilities, profits, and decision-making. This creates a collaborative environment for business operations.",
            "It offers a simple structure with legal recognition and operational ease. Partners can combine expertise to drive growth and efficiency. This makes it a practical option for small and medium businesses."
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
        tag: "Proprietor",
        label: "Sole Proprietorship",
        title: "Quick and Simple <i>Business Setup</i>",
        desc: [
            "Ideal for individuals looking for a quick and easy way to start a business. A Sole Proprietorship requires minimal registration and offers complete control. It is perfect for small-scale and independent operations.",
            "With fewer compliance requirements, it allows faster decision-making and flexibility. The owner manages all aspects of the business directly. This enables efficient operations and focused growth."
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
        src: "/img/icon/public-limited-company.webp",
        alt: "Public Limited Company",
        width: "20",
        height: "20"
    }),
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        src: "/img/icon/private-limited-company.webp",
        alt: "Private Limited Company",
        width: "20",
        height: "20"
    }),
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        src: "/img/icon/llp-registration.webp",
        alt: "Limited Liability Partnership",
        width: "20",
        height: "20"
    }),
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        src: "/img/icon/opc-registration.webp",
        alt: "One Person Company",
        width: "20",
        height: "20"
    }),
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        src: "/img/icon/partnership-firm.webp",
        alt: "Partnership Firm",
        width: "20",
        height: "20"
    }),
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        src: "/img/icon/sole-proprietorship.webp",
        alt: "Sole Proprietorship",
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
                            children: "Our Specialized Business Registration Services"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                        className: "rg-sec-h",
                        children: [
                            "Every Step ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                children: " Legally Sound."
                            }),
                            " Every Registration Tailored."
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "rg-sec-sub",
                        children: "Priyam Consultancy Services crafts tailored business registration solutions aligned with your goals and growth vision."
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
            src: "/img/icon/business-registration-discovery-assessment.webp",
            alt: "Discovery and Assessment",
            width: "35",
            height: "35"
        }),
        lbl: "Step 01 · Initiation",
        title: "Discovery & Assessment",
        desc: [
            "We understand your business model, vision, and goals. By analyzing industry and growth plans, we tailor registration steps to build a strong foundation.",
            "Business registration is more than paperwork—it’s the foundation of your growth. We manage every formality so you can focus on building and expanding. Your business starts strong, confident, and ready for long-term success."
        ],
        time: "~1 Working Day",
        tColor: "blue",
        even: false,
        last: false
    },
    {
        num: "02",
        color: "blue",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/business-registration-structure-planning.webp",
            alt: "Business Structure Planning",
            width: "35",
            height: "35"
        }),
        lbl: "Step 02 · Documentation",
        title: "Business Structure Planning",
        desc: "Our experts evaluate entity options based on liability, taxation, investment, and scalability, recommending the most suitable structure for efficiency and sustainable long-term growth.",
        time: "~2-3 Working Days",
        tColor: "orange",
        even: true,
        last: false
    },
    {
        num: "03",
        color: "orange",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/business-registration-documentation-filing.webp",
            alt: "Documentation and Filing",
            width: "35",
            height: "35"
        }),
        lbl: "Step 03 · Filing",
        title: "Documentation & Filing",
        desc: "We manage the full registration process, preparing and submitting required forms, licenses, and approvals accurately and on time for smooth legal establishment.",
        time: "~2-4 Working Days",
        tColor: "blue",
        even: false,
        last: false
    },
    {
        num: "04",
        color: "blue",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/business-registration-compliance-monitoring.webp",
            alt: "Compliance Setup and Monitoring",
            width: "35",
            height: "35"
        }),
        lbl: "Step 04 · Approval",
        title: "Compliance Setup & Monitoring",
        desc: "Post-registration, we establish compliance systems, manage licenses and filings, and track deadlines to keep your business secure, compliant, and operating smoothly year-round.",
        time: "~5-7 Working Days",
        tColor: "orange",
        even: true,
        last: false
    },
    {
        num: "05",
        color: "orange",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/business-registration-continuous-support.webp",
            alt: "Continuous Support and Updates",
            width: "35",
            height: "35"
        }),
        lbl: "Step 05 · Complete",
        title: "Continuous Support & Updates",
        desc: "As regulations evolve, we keep your business updated and compliant, providing ongoing guidance to avoid penalties and stay prepared for future growth opportunities",
        time: "~1-2 Working Days",
        tColor: "blue",
        even: false,
        last: false
    },
    {
        num: "06",
        color: "blue",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/business-registration-launch-maintenance.webp",
            alt: "Launch and Ongoing Maintenance",
            width: "35",
            height: "35"
        }),
        lbl: "Step 06 · Complete",
        title: "Launch & Ongoing Maintenance",
        desc: "After approval, we deploy your website with monitoring and configuration, providing continuous support, updates, and maintenance for long-term stability",
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
                                        textAlign: 'start'
                                    },
                                    children: "Our Business Registration Execution Process"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                                className: "sc-title",
                                children: [
                                    "Simplified, Transparent and ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("em", {
                                        className: "sc-title-em",
                                        children: "Efficient Business "
                                    }),
                                    "Registration"
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
        title: "Strategic Registration & Planning",
        desc: "We start by understanding your business vision, operations, and long-term goals. Every step from entity selection to approvals is planned carefully and strategically. This ensures a strong, compliant foundation that supports sustainable growth. ",
        center: false,
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hww-strategic-planning.webp",
            alt: "Strategic Registration and Planning",
            width: "34",
            height: "34"
        })
    },
    {
        title: "Specialized Team & Clear Accountability",
        desc: "Our business registration specialists, legal advisors, and documentation experts handle every step accurately. Roles are defined clearly to ensure accountability, smooth execution, and confidence throughout the setup process.",
        center: false,
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hww-team-accountability.webp",
            alt: "Specialized Team and Clear Accountability",
            width: "34",
            height: "34"
        })
    },
    {
        title: "Review, Approve & Complete",
        desc: "Before finalizing any registration, our team reviews all documents, forms, and submissions to ensure accuracy and compliance. We deliver only when your business is fully registered and ready to operate.",
        center: true,
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hww-review-approve.webp",
            alt: "Review Approve and Complete",
            width: "34",
            height: "34"
        })
    },
    {
        title: "Continuous Support & Guidance",
        desc: "Even after registration, we provide continued support for compliance updates, regulatory changes, and operational queries, keeping your business fully compliant, adaptable, and growth-ready at every stage of your business journey ahead.",
        center: false,
        icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: "/img/icon/hww-continuous-support.webp",
            alt: "Continuous Support and Guidance",
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
                                        textAlign: 'start'
                                    },
                                    children: "How We Work"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                                className: "hww-title",
                                children: [
                                    "Strategize Clearly. ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        className: "hww-accent",
                                        children: "Launch Securely."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                className: "hww-sub",
                                children: "Build a strong foundation that supports seamless operations, sustained growth, and long-term business success."
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
        q: "What do you mean by business registration?",
        a: " Business registration is the legal process of officially establishing a business entity under applicable government regulations. It provides legal recognition, enables tax registration, supports banking and compliance requirements, and allows businesses to operate professionally within a structured legal framework."
    },
    {
        q: "How many types of business registration are there?",
        a: "Common types of business registration in India include Sole Proprietorship, Partnership Firm, Limited Liability Partnership (LLP), One Person Company (OPC), Private Limited Company, and Public Limited Company. The ideal structure depends on ownership, liability, compliance needs, and long-term business objectives."
    },
    {
        q: "Is GST registration mandatory after business registration?",
        a: "GST registration depends on your business turnover, industry type, and operational requirements. Businesses exceeding the prescribed turnover limit or involved in interstate trade, ecommerce, or specific taxable services are generally required to obtain GST registration under applicable regulations."
    },
    {
        q: "Can a single person establish a business?",
        a: " Yes, a single person can legally establish a business in India through structures like Sole Proprietorship or One Person Company (OPC). These options allow individuals to start and manage businesses independently while meeting applicable legal, taxation, and compliance requirements."
    },
    {
        q: "What documents are required for business registration?",
        a: "Business registration generally requires PAN card, Aadhaar card, address proof, passport-size photographs, business address proof, and bank details. Additional documents may vary depending on the selected business structure, partners, directors, or specific registration and licensing requirements."
    },
    {
        q: "How much time does it take in India to register a business?",
        a: "The business registration timeline in India depends on the business structure and documentation readiness. Typically, registration can take anywhere between 5 to 15 working days, including approvals, verification processes, and statutory registrations required for legal business operations."
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
            className: "pg-bizreg",
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