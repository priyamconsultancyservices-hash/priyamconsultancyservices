"use strict";
exports.ids = ["913"];
exports.modules = {
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
7943(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (HealthcarePCS)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _emailjs_browser__rspack_import_2 = __webpack_require__(58);
/* import */ var _components_HomePage_CTA__rspack_import_3 = __webpack_require__(9393);
/* import */ var _theme_Layout__rspack_import_4 = __webpack_require__(8328);
/* import */ var _docusaurus_Head__rspack_import_5 = __webpack_require__(3572);







const banner = "/img/textile.webp";
// EmailJS will be loaded via CDN in the component
/* ═══════════════════════════════════════════════════
   SEO META & SCHEMA
═══════════════════════════════════════════════════ */ function SEOHead() {
    const pageUrl = "https://www.priyamconsultancy.com/textile/";
    const imageUrl = "https://www.pcsbusinesssolution.com/img/2.webp";
    const schemaData = [
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
                        "@id": "https://www.priyamconsultancy.com/textile/",
                        "name": "textile"
                    }
                }
            ]
        },
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
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.priyamconsultancy.com/textile/#service",
            "name": "Textile Industry Services",
            "serviceType": "Business Solutions for Textile Industry",
            "url": "https://www.priyamconsultancy.com/textile/",
            "description": "Priyam Consultancy provides digital marketing, website development, HR services, payroll management, business registration, statutory compliance, Virtual CFO services, accounting and business consulting solutions tailored for textile businesses across India.",
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
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Why does a textile business need digital marketing?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Digital marketing helps textile businesses improve brand visibility, attract buyers, showcase products, and generate enquiries across domestic and international markets. It supports lead generation, strengthens online presence, and helps textile brands compete effectively through SEO, social media, and performance marketing strategies."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What licenses are required for textile businesses in India?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Textile businesses in India may require GST registration, trade license, MSME registration, factory license, pollution control approvals, import-export code (IEC), and labor law registrations. Required licenses depend on manufacturing activities, export operations, and the scale of business operations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How can you help with textile compliance?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We support textile businesses with statutory compliance, labor law management, payroll compliance, GST filings, factory-related compliance, documentation, and regulatory reporting. Our services help businesses maintain legal compliance, reduce operational risks, and ensure smooth day-to-day workforce and business operations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What HR services do textile companies need?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Textile companies commonly require recruitment, payroll management, attendance tracking, labor compliance, shift management, workforce planning, onboarding, and HR policy support. These services help manage large operational teams efficiently while maintaining productivity and compliance across manufacturing units and facilities."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does digital marketing work for textile exporters?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, digital marketing is highly effective for textile exporters. SEO, LinkedIn marketing, content marketing, and performance campaigns help exporters improve international visibility, generate global enquiries, showcase products professionally, and connect with distributors, wholesalers, and buyers across international markets."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What certifications do textile exporters need?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Textile exporters may require certifications such as Import Export Code (IEC), GST registration, ISO certification, OEKO-TEX certification, GOTS certification, and other buyer or country-specific compliance certifications. Certification requirements vary based on export markets, products, and industry regulations."
                    }
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_5/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                children: "Digital Marketing for Textile Industry | Web & HR Services"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "description",
                content: "Grow your textile or garment business with digital marketing, website development, and HR solutions. Attract buyers, generate leads, and scale faster."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "keywords",
                content: "digital marketing for textile industry, Best textile website development Company, digital marketing for clothing brands, Digital Marketing for Textile & Garment Brands, Digital Transformation Solutions for Textile Manufacturers, Textile Business Registration & Compliance Services, Digital Marketing Agency for Fabrics & Textiles, garment industry manpower services"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                rel: "canonical",
                href: "https://www.priyamconsultancy.com/textile/"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:title",
                content: "Digital Marketing for Textile Industry | Web & HR Services"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:description",
                content: "Grow your textile or garment business with digital marketing, website development, and HR solutions. Attract buyers, generate leads, and scale faster."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:url",
                content: "https://www.priyamconsultancy.com/textile/"
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
                content: "Textile Industry Business Solutions | PCS Business Solution"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:description",
                content: "Grow your textile or garment business with digital marketing, website development, and HR solutions. Attract buyers, generate leads, and scale faster."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:image",
                content: imageUrl
            }),
            schemaData.map((schema, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("script", {
                    type: "application/ld+json",
                    children: JSON.stringify(schema)
                }, i))
        ]
    });
}
/* ═══════════════════════════════════════════
   SECTION 1 — HERO BANNER (Finance Orange Theme)
═══════════════════════════════════════════ */ function HeroSection() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "seo-hero-section",
        style: {
            minHeight: "95vh",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "2rem",
            padding: "5rem 6% 4rem",
            position: "relative",
            overflow: "hidden",
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "hero-overlay",
                style: {
                    position: "absolute",
                    inset: 0,
                    zIndex: 1
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "hero-orb hero-orb-1"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "hero-orb hero-orb-2"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "hero-content-left",
                style: {
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "3rem",
                    order: 1
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "seo-badge",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "badge-dot-red"
                            }),
                            "Textile "
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                        className: "seo-hero-heading",
                        children: [
                            "Empowering with Grow",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: "seo-underline seo-red",
                                style: {
                                    marginRight: '10px'
                                },
                                children: "Textile Industry"
                            }),
                            "to Grow with Confidence"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "seo-sub",
                        children: "Supporting textile and garment businesses from inception to expansion, PCS brings together registration, compliance, HR solutions, digital transformation, and digital marketing for the textile industry under one roof — creating a seamless path to scalable growth.         "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "seo-actions",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                            className: "seo-btn-fill",
                            href: "/contact-us",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "Get in Touch"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "seo-btn-arr",
                                    children: "›"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                style: {
                    order: 2
                }
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
        }).catch(()=>alert("Failed to send ❌"));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        id: "approach",
        style: {
            background: "#ffffff",
            padding: "5rem 6%",
            position: "relative",
            overflow: "hidden"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "ap2-inner",
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
                                children: "About Industry"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                            className: "ap2-heading",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "Textile Industry in India "
                                }),
                                " — Tradition Meets Transformation"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap2-intro",
                            children: "India's textile industry is a major contributor to the nation's economy and employment, spanning fabric manufacturers and garment exporters to clothing brands and retail outlets — offering immense opportunities.          "
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap2-intro",
                            children: "But staying competitive in today's fast-evolving market demands more than just quality products. Compliance, digital presence, skilled manpower, and technology adoption have become essential for textile businesses to survive and scale. That’s where PCS, a trusted Digital Marketing Agency for Fabrics & Textile steps in end-to-end support.           "
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
/* ─────────────────────────────────────────
   SECTION 3: WHY PCS
───────────────────────────────────────── */ function WhyPCSSection() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        className: "pcs-section",
        id: "why-pcs",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "pcs-inner",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "pcs-header",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "partners-header1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                className: "partners-eyebrow",
                                style: {
                                    marginBottom: '20px',
                                    textAlign: 'start'
                                },
                                children: "Challenges"
                            })
                        }),
                        "          ",
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                            className: "pcs-h2",
                            children: [
                                "The Biggest Challenges in the  ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                        children: "Textile Industry "
                                    })
                                }),
                                " Today"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "pcs-lead",
                            children: "Running a healthcare organization comes with its own set of complexities. Here are the most common challenges faced by providers:"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "pcs-radial-layout",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "pcs-radial-col left",
                            style: {
                                width: '100%'
                            },
                            children: [
                                {
                                    num: "01 · Expertise",
                                    title: "Compliance Complexity ",
                                    desc: "Managing licenses, GST, and regulatory filings overwhelms most textile businesses daily. ",
                                    icon: "/img/icon/textile-compliance.webp",
                                    iconStyle: {
                                        background: "rgba(0,65,104,0.3)",
                                        borderColor: "rgba(0,130,210,0.5)"
                                    }
                                },
                                {
                                    num: "02 · Approach",
                                    title: "Digital Absence ",
                                    desc: "The absence of a website and structured digital presence prevents textile businesses from tapping into wider markets. ",
                                    icon: "/img/icon/textile-digital-absence.webp",
                                    iconStyle: {
                                        background: "rgba(237,131,55,0.2)",
                                        borderColor: "rgba(237,131,55,0.5)"
                                    }
                                },
                                {
                                    num: "03 · Reliability",
                                    title: "Buyer Reach ",
                                    desc: "Without digital marketing, garment brands struggle to connect with right buyers.",
                                    icon: "/img/icon/textile-buyer-reach.webp",
                                    iconStyle: {
                                        background: "rgba(10,82,130,0.3)",
                                        borderColor: "rgba(20,120,190,0.5)"
                                    }
                                }
                            ].map((p, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "pcs-point",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "pcs-point-line"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "pcs-point-icon-wrap",
                                            style: p.iconStyle,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                src: p.icon,
                                                alt: p.title,
                                                style: {
                                                    width: "30px",
                                                    height: "30px",
                                                    objectFit: "contain"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: "pcs-point-body",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                    className: "pcs-point-num",
                                                    children: p.num
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                    className: "pcs-point-title",
                                                    children: p.title
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "pcs-point-desc",
                                                    children: p.desc
                                                })
                                            ]
                                        })
                                    ]
                                }, i))
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "pcs-radial-center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "pcs-center-ring-outer",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "pcs-center-ring-inner",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "pcs-center-hub",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "pcs-center-emoji",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                    src: "/img/icon/textile.webp",
                                                    alt: "PCS Textile",
                                                    style: {
                                                        width: "36px",
                                                        height: "36px",
                                                        objectFit: "contain"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "pcs-center-label",
                                                children: "PCS Textile Industry "
                                            })
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "pcs-radial-col right",
                            children: [
                                {
                                    num: "04 · Growth",
                                    title: "Manpower Shortage ",
                                    desc: "Finding and retaining skilled garment workers remains a constant operational challenge.",
                                    icon: "/img/icon/textile-manpower.webp",
                                    iconStyle: {
                                        background: "rgba(201,109,26,0.2)",
                                        borderColor: "rgba(237,131,55,0.5)"
                                    }
                                },
                                {
                                    num: "05 · Delivery",
                                    title: "Technology Gap ",
                                    desc: "Many textile businesses still run manually, causing inefficiencies and missed growth.",
                                    icon: "/img/icon/textile-technology.webp",
                                    iconStyle: {
                                        background: "rgba(0,42,68,0.4)",
                                        borderColor: "rgba(0,100,170,0.5)"
                                    }
                                },
                                {
                                    num: "06 · Value",
                                    title: "Brand Visibility ",
                                    desc: "Poor online visibility makes it harder for clothing brands to attract customers.",
                                    icon: "/img/icon/textile-brand-visibility.webp",
                                    iconStyle: {
                                        background: "rgba(20,102,160,0.3)",
                                        borderColor: "rgba(30,140,210,0.5)"
                                    }
                                }
                            ].map((p, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "pcs-point",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "pcs-point-icon-wrap",
                                            style: p.iconStyle,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                src: p.icon,
                                                alt: p.title,
                                                style: {
                                                    width: "30px",
                                                    height: "30px",
                                                    objectFit: "contain"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: "pcs-point-body",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                    className: "pcs-point-num",
                                                    children: p.num
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                    className: "pcs-point-title",
                                                    children: p.title
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "pcs-point-desc",
                                                    children: p.desc
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "pcs-point-line"
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
/* ─────────────────────────────────────────
   SECTION 4: OUR SOLUTIONS (TABS)
───────────────────────────────────────── */ const solutionTabs = [
    {
        num: "01",
        label: "Registration",
        tag: "01 — Compliance",
        title: "Business Registration & Compliance",
        desc: "Comprehensive Textile Business Registration & Compliance Services covering company incorporation, statutory compliance, accounting, GST, payroll, and audits — all in one place. From registrations to financial support like banking, loans, CMA reports, company valuations, and Virtual CFO guidance, we ensure your textile business runs smoothly and stays fully compliant.",
        progress: "20%"
    },
    {
        num: "02",
        label: "Digital Marketing",
        tag: "02 — Web",
        title: "Digital Marketing for Textile & Garment Brands",
        desc: "As a Digital Marketing Agency for Fabrics & Textiles, we drive visibility and growth through SEO, paid campaigns, content, and social media. We also build high-performing websites and run targeted email & WhatsApp campaigns to connect your brand with the right buyers and boost conversions. ",
        progress: "40%"
    },
    {
        num: "03",
        label: "Website Development ",
        tag: "03 — Trust",
        title: "Textile Website Development ",
        desc: "Professional textile website development company has solutions tailored for textile and garment businesses — from custom websites and ecommerce platforms (Shopify, WooCommerce) to fast, reliable static sites. Built to showcase your brand effectively, enhance user experience, and drive real, measurable business growth.",
        progress: "60%"
    },
    {
        num: "04",
        label: "HR Solutions",
        tag: "04 — HR Management",
        title: "Textile Workforce & HR Solutions  ",
        desc: "End-to-end garment industry manpower services designed to keep your operations running smoothly. From recruitment and candidate screening to payroll management, statutory compliance, and HR policy development — we ensure you have the right people, systems, and support to scale with confidence. ",
        progress: "80%"
    },
    {
        num: "05",
        label: "Digital Transformation  ",
        tag: "05 — Visibility",
        title: "Digital Transformation Solutions ",
        desc: "Smart Digital Transformation Solutions for Textile Manufacturers to streamline operations and improve efficiency. From business process automation and custom web & mobile applications to data analytics, we help modernize your workflows and enable smarter decision-making for scalable growth. ",
        progress: "100%"
    }
];
function ChallengesSection() {
    const [activeTab, setActiveTab] = (0,react__rspack_import_1.useState)(0);
    const [isMobile, setIsMobile] = (0,react__rspack_import_1.useState)(false);
    const [isTablet, setIsTablet] = (0,react__rspack_import_1.useState)(false);
    (0,react__rspack_import_1.useEffect)(()=>{
        const update = ()=>{
            const w = window.innerWidth;
            setIsMobile(w <= 600);
            setIsTablet(w > 600 && w <= 900);
        };
        update();
        window.addEventListener("resize", update);
        return ()=>window.removeEventListener("resize", update);
    }, []);
    const isSmall = isTablet;
    const current = solutionTabs[activeTab];
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        id: "why-choose",
        style: {
            background: "#ffffff",
            padding: isMobile ? "4rem 5%" : isTablet ? "5rem 5%" : "7rem 6%",
            fontFamily: "'Poppins', sans-serif"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                style: {
                    textAlign: "center",
                    marginBottom: isMobile ? "2rem" : "3rem"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "12px",
                            marginBottom: "14px"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                            className: "partners-eyebrow",
                            style: {
                                marginBottom: '20px',
                                textAlign: 'start'
                            },
                            children: "Our Solutions"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                        style: {
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: isMobile ? "22px" : isTablet ? "28px" : "clamp(28px, 3.5vw, 40px)",
                            fontWeight: "700",
                            color: "#0d1f2d",
                            lineHeight: "1.25",
                            marginBottom: "12px"
                        },
                        children: [
                            "How We Help Clothing",
                            " ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                style: {
                                    color: "#ed8337",
                                    fontStyle: "italic"
                                },
                                children: "Brands & Textile Businesses"
                            }),
                            " ",
                            "Grow"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        style: {
                            fontSize: isMobile ? "13px" : "15px",
                            color: "#000000",
                            fontWeight: "300",
                            margin: "30px auto",
                            lineHeight: "1.75"
                        },
                        children: "From business registration to digital growth and website development, we provide the right solutions at every stage of your textile business journey        "
                    })
                ]
            }),
            isMobile ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    maxWidth: "500px",
                    margin: "0 auto"
                },
                children: solutionTabs.map((tab, i)=>{
                    const isOpen = activeTab === i;
                    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        style: {
                            border: isOpen ? "1.5px solid #ed8337" : "1.5px solid #EDE6DF",
                            borderRadius: "12px",
                            overflow: "hidden",
                            transition: "border-color 0.25s"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("button", {
                                onClick: ()=>setActiveTab(isOpen ? -1 : i),
                                style: {
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "14px 18px",
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "13px",
                                    fontWeight: isOpen ? "600" : "400",
                                    color: isOpen ? "#ed8337" : "#3a3a3a",
                                    background: isOpen ? "#FFF4EC" : "#ffffff",
                                    border: "none",
                                    cursor: "pointer",
                                    transition: "all 0.22s",
                                    textAlign: "left"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        children: tab.label
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        style: {
                                            fontSize: "18px",
                                            fontWeight: "300",
                                            color: isOpen ? "#ed8337" : "#aaa",
                                            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                                            transition: "transform 0.25s",
                                            lineHeight: "1"
                                        },
                                        children: "+"
                                    })
                                ]
                            }),
                            isOpen && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                style: {
                                    background: "#ffffff",
                                    borderTop: "1px solid #EDE6DF",
                                    padding: "18px 18px 20px",
                                    animation: "accordionFadeIn 0.25s ease"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        style: {
                                            fontSize: "13px",
                                            color: "#5a6a7a",
                                            lineHeight: "1.85",
                                            fontWeight: "300",
                                            marginBottom: "14px"
                                        },
                                        children: tab.desc
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        style: {
                                            height: "2px",
                                            background: "#EDE6DF",
                                            borderRadius: "2px",
                                            overflow: "hidden"
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            style: {
                                                height: "100%",
                                                background: "#ed8337",
                                                borderRadius: "2px",
                                                width: tab.progress,
                                                transition: "width 0.4s ease"
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                        style: {
                                            fontSize: "10px",
                                            color: "#bbb",
                                            marginTop: "6px",
                                            letterSpacing: "1px"
                                        },
                                        children: [
                                            i + 1,
                                            " / ",
                                            solutionTabs.length
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, i);
                })
            }) : /* ══════════════════════════════════
           TABLET + DESKTOP — Horizontal tab bar
           ══════════════════════════════════ */ /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            borderBottom: "1.5px solid #EDE6DF",
                            overflowX: "auto",
                            gap: "0",
                            scrollbarWidth: "none",
                            maxWidth: "1100px",
                            margin: "0 auto",
                            WebkitOverflowScrolling: "touch"
                        },
                        children: solutionTabs.map((tab, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
                                onClick: ()=>setActiveTab(i),
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    padding: isTablet ? "14px 16px" : "16px 24px",
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: isTablet ? "12px" : "13px",
                                    fontWeight: activeTab === i ? "600" : "400",
                                    color: activeTab === i ? "#ed8337" : "#7A6E66",
                                    background: "none",
                                    border: "none",
                                    borderBottom: activeTab === i ? "2.5px solid #ed8337" : "2.5px solid transparent",
                                    marginBottom: "-1.5px",
                                    cursor: "pointer",
                                    whiteSpace: "nowrap",
                                    transition: "color 0.25s"
                                },
                                children: tab.label
                            }, i))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        style: {
                            maxWidth: "1100px",
                            margin: "0 auto",
                            background: "#ffffff",
                            border: "1.5px solid #EDE6DF",
                            borderTop: "none",
                            borderRadius: "0 0 16px 16px",
                            overflow: "hidden",
                            display: "grid",
                            gridTemplateColumns: isSmall ? "1fr" : "1fr 1.4fr",
                            minHeight: "320px"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                style: {
                                    background: "#FFF9F5",
                                    padding: isTablet ? "32px 28px" : "44px 40px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    borderRight: isSmall ? "none" : "1.5px solid #EDE6DF",
                                    borderBottom: isSmall ? "1.5px solid #EDE6DF" : "none",
                                    position: "relative",
                                    overflow: "hidden"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        style: {
                                            position: "absolute",
                                            bottom: "-30px",
                                            left: "-30px",
                                            width: "120px",
                                            height: "120px",
                                            borderRadius: "50%",
                                            background: "#F5C49A",
                                            opacity: "0.18",
                                            pointerEvents: "none"
                                        }
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                        style: {
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: isTablet ? "19px" : "clamp(18px, 2.2vw, 24px)",
                                            fontWeight: "700",
                                            color: "#0d1f2d",
                                            lineHeight: "1.35",
                                            margin: "0"
                                        },
                                        children: current.title
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                style: {
                                    padding: isTablet ? "28px 24px" : "44px 44px 44px 40px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        style: {
                                            fontSize: "15px",
                                            color: "#7A6E66",
                                            lineHeight: "1.85",
                                            fontWeight: "300",
                                            marginBottom: "24px"
                                        },
                                        children: current.desc
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        style: {
                                            height: "2px",
                                            background: "#EDE6DF",
                                            borderRadius: "2px",
                                            overflow: "hidden"
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            style: {
                                                height: "100%",
                                                background: "#ed8337",
                                                borderRadius: "2px",
                                                width: current.progress,
                                                transition: "width 0.4s ease"
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                        style: {
                                            fontSize: "11px",
                                            color: "#bbb",
                                            marginTop: "8px",
                                            letterSpacing: "1px"
                                        },
                                        children: [
                                            activeTab + 1,
                                            " / ",
                                            solutionTabs.length
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* ─────────────────────────────────────────
   SECTION 5: CASE STUDY
───────────────────────────────────────── */ function CaseStudySection() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        className: "cs-section",
        id: "case-study",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "cs-inner",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "cs-header",
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
                                children: "Our Approach in"
                            })
                        }),
                        "          ",
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                            className: "cs-h2",
                            children: [
                                "Real Results for ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "Real  Businesses"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "cs-quote-wrap",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "cs-q-mark",
                            children: '"'
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "cs-q-mark-r",
                            children: '"'
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                            className: "cs-quote-text",
                            children: [
                                "We have helped businesses across ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("em", {
                                    children: "industries streamline compliance"
                                }),
                                ", build their ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("em", {
                                    children: "digital presence"
                                }),
                                ", and achieve  ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("em", {
                                    children: "consistent growth."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "cs-quote-attr",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    className: "cs-quote-line"
                                }),
                                "Explore Our Work",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    className: "cs-quote-line"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
const faqData = [
    {
        q: "Why does a textile business need digital marketing?",
        a: " Digital marketing helps textile businesses improve brand visibility, attract buyers, showcase products, and generate enquiries across domestic and international markets. It supports lead generation, strengthens online presence, and helps textile brands compete effectively through SEO, social media, and performance marketing strategies."
    },
    {
        q: "What licenses are required for textile businesses in India?",
        a: " Textile businesses in India may require GST registration, trade license, MSME registration, factory license, pollution control approvals, import-export code (IEC), and labor law registrations. Required licenses depend on manufacturing activities, export operations, and the scale of business operations."
    },
    {
        q: "How can you help with textile compliance?",
        a: "We support textile businesses with statutory compliance, labor law management, payroll compliance, GST filings, factory-related compliance, documentation, and regulatory reporting. Our services help businesses maintain legal compliance, reduce operational risks, and ensure smooth day-to-day workforce and business operations."
    },
    {
        q: "What HR services do textile companies need?",
        a: "Textile companies commonly require recruitment, payroll management, attendance tracking, labor compliance, shift management, workforce planning, onboarding, and HR policy support. These services help manage large operational teams efficiently while maintaining productivity and compliance across manufacturing units and facilities."
    },
    {
        q: "Does digital marketing work for textile exporters?",
        a: "Yes, digital marketing is highly effective for textile exporters. SEO, LinkedIn marketing, content marketing, and performance campaigns help exporters improve international visibility, generate global enquiries, showcase products professionally, and connect with distributors, wholesalers, and buyers across international markets."
    },
    {
        q: "What certifications do textile exporters need?",
        a: " Textile exporters may require certifications such as Import Export Code (IEC), GST registration, ISO certification, OEKO-TEX certification, GOTS certification, and other buyer or country-specific compliance certifications. Certification requirements vary based on export markets, products, and industry regulations."
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
            background: "#ffffff"
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
    });
}
/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */ function HealthcarePCS() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_4/* ["default"] */.A, {
        title: "Digital Marketing for Textile Industry | Web & HR Services",
        description: "Grow your textile or garment business with digital marketing, website development, and HR solutions. Attract buyers, generate leads, and scale faster.",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(SEOHead, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("style", {
                children: `
/* Page-specific overrides — textile differs from the other 7 industry pages here */
.pcs-inner { max-width:1200px; }
.pcs-lead { margin:0 auto; }
.pcs-point-icon-wrap { width:50px; height:50px; }
@media(max-width:900px){
  .seo-hero-section { padding:2rem 5% 3rem !important; }
}
@media(max-width:480px){
  .seo-hero-section { padding:2rem 4% 2rem !important; }
}
@media(max-width:900px){
  .seo-hero-section { min-height:45svh !important; }
}
  main {
background: #004168;
}
      `
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(HeroSection, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ApproachSection, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(WhyPCSSection, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ChallengesSection, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(CaseStudySection, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(FAQSection, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_HomePage_CTA__rspack_import_3/* ["default"] */.A, {})
        ]
    });
}


},

};
;