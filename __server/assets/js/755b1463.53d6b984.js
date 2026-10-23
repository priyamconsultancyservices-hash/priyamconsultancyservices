"use strict";
exports.ids = ["7753"];
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
5155(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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





const banner = "/img/healthcare.webp";


function SEOHead() {
    const pageUrl = "https://www.priyamconsultancy.com/healthcare/";
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
                        "@id": "https://www.priyamconsultancy.com/healthcare/",
                        "name": "healthcare"
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
            "@id": "https://www.priyamconsultancy.com/healthcare/#service",
            "name": "Healthcare Industry Services",
            "serviceType": "Business Solutions for Healthcare Industry",
            "url": "https://www.priyamconsultancy.com/healthcare/",
            "description": "Priyam Consultancy provides digital marketing, website development, HR services, payroll management, business registration, statutory compliance, Virtual CFO services, accounting and business consulting solutions tailored for healthcare providers, clinics, hospitals and medical organizations across India.",
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
                    "name": "Why does a healthcare clinic/hospital need digital marketing?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Digital marketing helps healthcare providers improve online visibility, build patient trust, promote healthcare services, and attract new patients. It supports appointment generation, strengthens local search presence, and helps clinics and hospitals communicate effectively with patients across digital platforms."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How can social media marketing help healthcare businesses?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Social media marketing helps healthcare businesses improve patient engagement, increase awareness about treatments and services, share health-related information, and build credibility. It also supports brand visibility, patient communication, and targeted campaigns that help attract relevant healthcare audiences online."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What features should a healthcare website have?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A healthcare website should include service information, doctor profiles, online appointment booking, contact details, patient testimonials, mobile responsiveness, SEO optimization, secure patient communication, and easy navigation. These features improve patient experience, accessibility, trust, and overall engagement with healthcare services."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you build a website with online appointment booking?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we develop healthcare websites with integrated online appointment booking systems, patient enquiry forms, doctor schedules, automated confirmations, and user-friendly interfaces. These features help healthcare providers streamline patient management, improve accessibility, and enhance overall patient convenience and operational efficiency."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What HR services do healthcare providers need?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Healthcare providers typically require recruitment, payroll management, compliance management, attendance tracking, workforce planning, onboarding, shift scheduling, and HR policy support. These services help manage medical and non-medical staff efficiently while ensuring compliance with healthcare and labor regulations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does payroll management work for medical staff?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Payroll management for medical staff includes salary processing, shift calculations, overtime management, statutory deductions, attendance tracking, incentive handling, and compliance reporting. Structured payroll systems ensure accurate payments, reduce administrative workload, and maintain smooth workforce operations within healthcare organizations."
                    }
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_5/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                children: "Healthcare Digital Marketing Company for Hospitals & Clinics"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "description",
                content: "Grow your healthcare business with expert digital marketing, website development, and HR solutions. Attract more patients and scale with confidence."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "keywords",
                content: "Healthcare Digital Marketing Company, Healthcare Website Development, HR Solutions for Healthcare, Healthcare workforce management , Payroll In Hospitals & Healthcare, healthcare digital marketing agency, healthcare website development services, Best Hospital Website Development Company"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                rel: "canonical",
                href: "https://www.priyamconsultancy.com/healthcare/"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:title",
                content: "Healthcare Digital Marketing Company for Hospitals & Clinics"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:description",
                content: "Grow your healthcare business with expert digital marketing, website development, and HR solutions. Attract more patients and scale with confidence."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:url",
                content: "https://www.priyamconsultancy.com/healthcare/"
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
                content: "Healthcare Digital Marketing Company for Hospitals & Clinics"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:description",
                content: "Grow your healthcare business with expert digital marketing, website development, and HR solutions. Attract more patients and scale with confidence."
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
                            "Healthcare "
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                        className: "seo-hero-heading",
                        children: [
                            "Powering Progress in the ",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: "seo-underline seo-red",
                                style: {
                                    marginRight: '10px'
                                },
                                children: "Healthcare"
                            }),
                            "Industry  Powering Progress"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "seo-sub",
                        children: "Enabling healthcare providers to grow with confidence, We bring together registration, compliance, HR solutions for healthcare, digital transformation, and digital marketing , Website Development into a unified, end-to-end solution.       "
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
                                    children: "Healthcare Industry in India "
                                }),
                                " — Care Meets Innovation"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap2-intro",
                            children: "India's healthcare industry plays a critical role in improving quality of life, spanning hospitals, clinics, diagnostic centers, and specialized care providers — offering immense opportunities. "
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            className: "ap2-intro",
                            children: "But in today’s evolving landscape, delivering quality care alone is not enough. Compliance, strong digital presence, efficient workforce management, and technology adoption have become essential for healthcare providers to operate effectively and scale. That’s where PCS, a trusted Healthcare Digital Marketing Company and healthcare digital marketing agency, steps in with end-to-end support."
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
                                        children: "Healthcare  Industry "
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
                                    title: "Compliance Complexity",
                                    desc: "Managing licenses, accreditations, and regulatory filings can overwhelm healthcare providers.",
                                    icon: "/img/icon/healthcare-compliance.webp",
                                    iconStyle: {
                                        background: "rgba(0,65,104,0.3)",
                                        borderColor: "rgba(0,130,210,0.5)"
                                    }
                                },
                                {
                                    num: "02 · Approach",
                                    title: "Digital Absence ",
                                    desc: "Managing licenses, accreditations, and regulatory filings can overwhelm healthcare providers.",
                                    icon: "/img/icon/healthcare-digital-absence.webp",
                                    iconStyle: {
                                        background: "rgba(237,131,55,0.2)",
                                        borderColor: "rgba(237,131,55,0.5)"
                                    }
                                },
                                {
                                    num: "03 · Reliability",
                                    title: "Patient Reach",
                                    desc: "Without effective digital marketing strategies, hospitals struggle to reach and engage the right audience.",
                                    icon: "/img/icon/healthcare-buyer-reach.webp",
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
                                                    src: "/img/icon/healthcare.webp",
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
                                                children: "PCS Healthcare Industry "
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
                                    num: "04 · Delivery",
                                    title: "Workforce Challenges",
                                    desc: "Managing staff efficiently requires strong healthcare workforce management and reliable HR solutions for healthcare.",
                                    icon: "/img/icon/healthcare-growth.webp",
                                    iconStyle: {
                                        background: "rgba(0,42,68,0.4)",
                                        borderColor: "rgba(0,100,170,0.5)"
                                    }
                                },
                                {
                                    num: "05 · Value",
                                    title: "Technology Gap",
                                    desc: "Limited adoption of digital tools affects operational efficiency and patient experience.",
                                    icon: "/img/icon/healthcare-technology.webp",
                                    iconStyle: {
                                        background: "rgba(20,102,160,0.3)",
                                        borderColor: "rgba(30,140,210,0.5)"
                                    }
                                },
                                {
                                    num: "06 · Growth",
                                    title: "Brand Visibility",
                                    desc: "Low online visibility reduces patient trust and acquisition, emphasizing the need for a strong digital presence.",
                                    icon: "/img/icon/healthcare-brand-visibility.webp",
                                    iconStyle: {
                                        background: "rgba(201,109,26,0.2)",
                                        borderColor: "rgba(237,131,55,0.5)"
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
                                                    width: "24px",
                                                    height: "24px",
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
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
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
        desc: "Comprehensive support covering registration, statutory compliance, accounting, GST, payroll, and audits — all in one place. From setup to financial guidance like banking, loans, CMA reports, company valuations, and Virtual CFO services, we ensure your healthcare operations run smoothly and stay compliant.",
        progress: "20%"
    },
    {
        num: "02",
        label: "Digital Marketing",
        tag: "02 — Web",
        title: "Digital Marketing for Healthcare",
        desc: "As a leading Healthcare Digital Marketing Company, we drive patient engagement and visibility through SEO, paid campaigns, content, and social media strategies designed for measurable growth.",
        progress: "40%"
    },
    {
        num: "03",
        label: "Website Development ",
        tag: "03 — Trust",
        title: "Healthcare Website Development",
        desc: "Professional Healthcare Website Development tailored for hospitals and clinics. Recognized as a Best Hospital Website Development Company, we build secure, user-friendly, and high-performing websites that enhance patient experience and trust.",
        progress: "60%"
    },
    {
        num: "04",
        label: "HR Solutions",
        tag: "04 — HR Management",
        title: "Healthcare Workforce & HR Solutions",
        desc: "End-to-end HR solutions for healthcare, including recruitment, healthcare workforce management, and payroll in hospitals & healthcare. We ensure efficient staffing, compliant payroll processes, and structured HR systems for seamless operations.",
        progress: "80%"
    },
    {
        num: "05",
        label: "Digital Transformation  ",
        tag: "05 — Visibility",
        title: "Digital Transformation Solutions ",
        desc: "Smart solutions to streamline operations and improve efficiency. From process automation and custom web & mobile applications to data-driven insights, we help healthcare providers deliver better outcomes.",
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
                                children: "Hospitals & Healthcare"
                            }),
                            " ",
                            " Providers Grow Grow"
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
                        children: "From business registration to digital growth and website development, we provide the right solutions at every stage of your healthcare journey.  "
                    }),
                    "     "
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
        q: "Why does a healthcare clinic/hospital need digital marketing?",
        a: "Digital marketing helps healthcare providers improve online visibility, build patient trust, promote healthcare services, and attract new patients. It supports appointment generation, strengthens local search presence, and helps clinics and hospitals communicate effectively with patients across digital platforms."
    },
    {
        q: "How can social media marketing help healthcare businesses?",
        a: "Social media marketing helps healthcare businesses improve patient engagement, increase awareness about treatments and services, share health-related information, and build credibility. It also supports brand visibility, patient communication, and targeted campaigns that help attract relevant healthcare audiences online."
    },
    {
        q: "What features should a healthcare website have?",
        a: "A healthcare website should include service information, doctor profiles, online appointment booking, contact details, patient testimonials, mobile responsiveness, SEO optimization, secure patient communication, and easy navigation. These features improve patient experience, accessibility, trust, and overall engagement with healthcare services"
    },
    {
        q: "Can you build a website with online appointment booking?",
        a: "Yes, we develop healthcare websites with integrated online appointment booking systems, patient enquiry forms, doctor schedules, automated confirmations, and user-friendly interfaces. These features help healthcare providers streamline patient management, improve accessibility, and enhance overall patient convenience and operational efficiency."
    },
    {
        q: "What HR services do healthcare providers need?",
        a: "Healthcare providers typically require recruitment, payroll management, compliance management, attendance tracking, workforce planning, onboarding, shift scheduling, and HR policy support. These services help manage medical and non-medical staff efficiently while ensuring compliance with healthcare and labor regulations."
    },
    {
        q: "How does payroll management work for medical staff?",
        a: "Payroll management for medical staff includes salary processing, shift calculations, overtime management, statutory deductions, attendance tracking, incentive handling, and compliance reporting. Structured payroll systems ensure accurate payments, reduce administrative workload, and maintain smooth workforce operations within healthcare organizations."
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
        title: "Healthcare Digital Marketing Company for Hospitals & Clinics",
        description: "Grow your healthcare business with expert digital marketing, website development, and HR solutions. Attract more patients and scale with confidence.",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(SEOHead, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("style", {
                children: `
      main {
background: #004168;
}
/* Page-specific overrides — healthcare differs from the other 7 industry pages here */
.pcs-inner { max-width:1200px; }
.pcs-lead { margin:0 auto; }
.seo-hero-section { grid-template-columns: 1fr; }

/* NOTE: source jsx did not include ".hero-img-right { order:2 !important; }" inside
   the max-width:900px block that the other 7 pages have — likely fine since this
   page already uses a single-column hero grid, flagging for awareness. */
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