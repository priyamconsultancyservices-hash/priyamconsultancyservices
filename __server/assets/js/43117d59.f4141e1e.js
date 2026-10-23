"use strict";
exports.ids = ["5242"];
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
7716(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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





const banner = "/img/it-service.webp";


function SEOHead() {
    const pageUrl = "https://www.priyamconsultancy.com/it-or-it-services";
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
                        "@id": "https://www.priyamconsultancy.com/it-or-it-services/",
                        "name": "IT / IT Services"
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
            "@id": "https://www.priyamconsultancy.com/it-or-it-services/#service",
            "name": "IT / IT Services Industry Solutions",
            "serviceType": "Business Solutions for IT and IT Services Industry",
            "url": "https://www.priyamconsultancy.com/it-or-it-services/",
            "description": "Priyam Consultancy provides digital marketing, SEO, LinkedIn marketing, website development, recruitment services, payroll management, HR solutions, statutory compliance, Virtual CFO services, accounting and business consulting solutions tailored for IT companies, software firms, IT service providers and technology businesses across India.",
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
                    "name": "Why does an IT company need digital marketing?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Digital marketing helps IT companies improve brand visibility, generate qualified leads, showcase technical expertise, and attract potential clients globally. Strategies like SEO, content marketing, LinkedIn marketing, and performance campaigns help strengthen market positioning and support long-term business growth."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does digital marketing work for B2B IT service providers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, digital marketing is highly effective for B2B IT service providers. It helps businesses reach decision-makers, improve search visibility, build credibility, and generate high-intent enquiries through SEO, LinkedIn marketing, content strategies, and targeted performance marketing campaigns."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How can recruitment services help IT companies?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Recruitment services help IT companies identify skilled technical professionals quickly and efficiently. Structured hiring support reduces recruitment delays, improves candidate quality, supports project continuity, and enables businesses to scale teams based on evolving technology and operational requirements."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does payroll management work for IT professionals?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Payroll management for IT professionals includes salary processing, attendance tracking, tax deductions, incentives, reimbursements, statutory compliance, and payroll reporting. A structured payroll system ensures accurate salary disbursement, legal compliance, and smooth workforce management across technical and operational teams."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What HR policies are essential for IT companies?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "IT companies commonly require policies related to employee conduct, attendance, remote work, data security, leave management, payroll, performance evaluation, workplace ethics, and compliance. Strong HR policies help maintain operational consistency, employee productivity, and professional work culture standards."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What licenses are required for IT businesses in India?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "IT businesses in India may require company registration, GST registration, Shop and Establishment registration, MSME registration, Professional Tax registration, and other industry-specific approvals. Required licenses depend on business structure, service offerings, operational scale, and applicable regulatory requirements."
                    }
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_5/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                children: "Digital Marketing for IT Companies & IT Recruitment Services | Priyam Consultancy "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "description",
                content: "Boost your IT business with expert digital marketing, website development, SEO, and IT recruitment services. PCS helps IT companies generate leads and improve online visibility."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "keywords",
                content: "digital marketing for it companies,digital marketing for it industry,IT Recruitment Consultants, it job placement agencies,website development for it company"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                rel: "canonical",
                href: "https://www.priyamconsultancy.com/it-or-it-services"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:title",
                content: "Digital Marketing for IT Companies & IT Recruitment Services | Priyam Consultancy "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:description",
                content: "Boost your IT business with expert digital marketing, website development, SEO, and IT recruitment services. PCS helps IT companies generate leads and improve online visibility."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:url",
                content: "https://www.priyamconsultancy.com/it-or-it-services"
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
                content: "Digital Marketing for IT Companies & IT Recruitment Services | Priyam Consultancy "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:description",
                content: "Boost your IT business with expert digital marketing, website development, SEO, and IT recruitment services. PCS helps IT companies generate leads and improve online visibility."
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
// EmailJS will be loaded via CDN in the component
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
            padding: "6rem 6% 4rem",
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
                            "IT / IT Services "
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                        className: "seo-hero-heading",
                        children: [
                            "Driving Growth Services in ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: "seo-underline seo-red",
                                style: {
                                    marginRight: '10px'
                                },
                                children: "IT / IT Services"
                            }),
                            "with Confidence"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "seo-sub",
                        children: "Supporting IT companies from inception to expansion, PCS brings together registration, compliance, HR solutions, digital transformation, and digital marketing for IT companies — along with digital marketing for IT industry strategies — under one roof, creating a seamless path to scalable growth.   "
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
                                    children: "IT Industry   "
                                }),
                                " — Innovation Meets Opportunity"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap2-intro",
                            children: "The IT and IT services industry continues to drive global innovation, spanning software companies, service providers, startups, and tech enterprises — offering vast opportunities for growth.  "
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap2-intro",
                            children: "In today’s competitive landscape, strong digital presence, talent acquisition, and operational efficiency are essential. Businesses investing in digital marketing for IT companies and digital marketing for IT industry are better positioned to attract clients, build credibility, and scale globally. That’s where PCS steps in with end-to-end support."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap2-intro",
                            style: {
                                color: "rgba(2,43,68,0.45)",
                                fontStyle: "italic"
                            },
                            children: "Precise. Proven. Profitable. Built for long-term dominance."
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
                                        children: "IT Industry  "
                                    })
                                }),
                                " Today"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "pcs-lead",
                            children: "Running an IT business comes with its own set of complexities. Here are the most common challenges: "
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
                                    title: "Compliance Complexity",
                                    desc: " Managing registrations, regulatory filings, and financial compliance can be time-consuming.",
                                    icon: "/img/icon/it-services-compliance.webp",
                                    iconStyle: {
                                        background: "rgba(0,65,104,0.3)",
                                        borderColor: "rgba(0,130,210,0.5)"
                                    }
                                },
                                {
                                    num: "02 · Approach",
                                    title: "Digital Presence Gap",
                                    desc: "Lack of a strong online presence highlights the need for website development for IT companies to improve credibility and client acquisition",
                                    icon: "/img/icon/it-services-digital-absence.webp",
                                    iconStyle: {
                                        background: "rgba(237,131,55,0.2)",
                                        borderColor: "rgba(237,131,55,0.5)"
                                    }
                                },
                                {
                                    num: "03 · Reliability",
                                    title: "Client Acquisition",
                                    desc: "Without effective digital marketing for IT companies , businesses struggle to generate consistent leads and visibility.",
                                    icon: "/img/icon/it-services-buyer-reach.webp",
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
                                                    src: "/img/icon/it-services.webp",
                                                    alt: "PCS",
                                                    style: {
                                                        width: "36px",
                                                        height: "36px",
                                                        objectFit: "contain"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "pcs-center-label",
                                                children: "PCS IT Industry "
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
                                    title: "Talent Shortage",
                                    desc: "Finding skilled professionals increases reliance on IT Recruitment Consultants and IT job placement agencies.",
                                    icon: "/img/icon/it-services-growth.webp",
                                    iconStyle: {
                                        background: "rgba(201,109,26,0.2)",
                                        borderColor: "rgba(237,131,55,0.5)"
                                    }
                                },
                                {
                                    num: "05 · Delivery",
                                    title: "Technology & Scaling Challenges",
                                    desc: "Adapting to evolving technologies while maintaining growth can be challenging.",
                                    icon: "/img/icon/it-services-technology.webp",
                                    iconStyle: {
                                        background: "rgba(0,42,68,0.4)",
                                        borderColor: "rgba(0,100,170,0.5)"
                                    }
                                },
                                {
                                    num: "06 · Value",
                                    title: "Brand Visibility",
                                    desc: " Low online visibility impacts trust and competitiveness in the IT industry.",
                                    icon: "/img/icon/it-services-brand-visibility.webp",
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
        desc: "Comprehensive support covering company registration, statutory compliance, accounting, GST, payroll, and audits — all in one place. We ensure your IT business remains compliant and financially structured for growth.",
        progress: "20%"
    },
    {
        num: "02",
        label: "Digital Marketing",
        tag: "02 — Web",
        title: "Digital Marketing for IT Companies",
        desc: "Our digital marketing for IT companies strategies are designed to improve visibility, generate qualified leads, and build strong brand presence. By combining SEO, paid campaigns, content, and social media, we deliver measurable results aligned with digital marketing for IT companies standards.",
        progress: "40%"
    },
    {
        num: "03",
        label: "Website Development ",
        tag: "03 — Trust",
        title: "Website Development for IT Company",
        desc: "Professional website development for IT company solutions that showcase your services, enhance credibility, and improve user engagement. We build responsive, high-performing websites tailored for IT businesses.",
        progress: "60%"
    },
    {
        num: "04",
        label: "HR Solutions",
        tag: "04 — HR Management",
        title: "IT Workforce & HR Solutions",
        desc: "End-to-end HR support powered by experienced IT Recruitment Consultants , ensuring access to the right talent, efficient hiring, and smooth workforce management.",
        progress: "80%"
    },
    {
        num: "05",
        label: "Digital Transformation  ",
        tag: "05 — Visibility",
        title: "Digital Transformation Solutions ",
        desc: "Smart solutions to streamline IT operations. From automation and custom applications to data-driven insights, we improve efficiency and scalability.",
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
                            "How We Help ",
                            " ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                style: {
                                    color: "#ed8337",
                                    fontStyle: "italic"
                                },
                                children: "IT Companies"
                            }),
                            " ",
                            "   Grow Grow"
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
                        children: "From business registration to digital growth and website development, we provide the right solutions at every stage of your IT business journey."
                    }),
                    "      "
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
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "partners-eyebrow",
                                style: {
                                    marginBottom: '20px',
                                    textAlign: 'start'
                                },
                                children: "Our Approach in"
                            })
                        }),
                        "          ",
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
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
        q: "What is a financial service business?",
        a: "A financial service business provides expert support in banking, investments, accounting, loans, and advisory services to help businesses and individuals manage their finances efficiently."
    },
    {
        q: "What are the types of financial services?",
        a: "Financial services include banking, insurance, investment management, accounting, tax advisory, loans, and financial planning, covering all aspects of money management and business growth"
    },
    {
        q: "What are the four financial services?",
        a: "The main four financial services are banking, insurance, investment advisory, and accounting, which collectively help businesses and individuals manage, protect, and grow their assets."
    },
    {
        q: "What are the 8 financial sectors?",
        a: "The eight sectors include banking, insurance, capital markets, investment services, asset management, accounting, tax advisory, and fintech, covering the full spectrum of financial operations."
    },
    {
        q: "Why is a financial advisory important?",
        a: "Financial advisory helps businesses make informed decisions, optimize resources, manage risks, plan growth, and ensure compliance, ultimately improving profitability and long-term financial stability."
    },
    {
        q: "What are the five types of finance?",
        a: "The five types are banking, insurance, investment management, accounting, and financial planning, each addressing critical aspects of financial control, risk management, and wealth creation."
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
        title: "Digital Marketing for IT Companies & IT Recruitment Services | Priyam Consultancy ",
        description: "Boost your IT business with expert digital marketing, website development, SEO, and IT recruitment services. PCS helps IT companies generate leads and improve online visibility.",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(SEOHead, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("style", {
                children: `
      main {
background: #004168;
}
/* Page-specific overrides — it-or-it-services differs from the other 7 industry pages here */
.hero { min-height: 100vh; padding: 8rem 6% 4rem; }
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