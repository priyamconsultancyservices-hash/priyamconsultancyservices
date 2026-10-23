"use strict";
exports.ids = ["9636"];
exports.modules = {
9546(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (PCSAboutUs)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _docusaurus_Head__rspack_import_2 = __webpack_require__(3572);



const banner = "/img/approach.webp";
const bannerImg = "/img/about-us.webp";
const vision = "/img/vision.webp";
const mission = "/img/mission.webp";
const microsoft = "/img/microsoft-app-partner.jpeg";
const sterlo = "/img/sterlo-partner.webp";
const sterloBuild = "/img/sterlobuild-partner.webp";
const sterloCare = "/img/sterlocare-partner.webp";
const odoo = "/img/odoo-partner.webp";
const Analytix = "/img/Analytix-Hub.webp";
const Baltimore = "/img/baltimore.webp";
const Sterlo = "/img/sterlo.webp";
const OreOps = "/img/oreopps.webp";
const RiyaConsultancy = "/img/riyaconsultancy.webp";
const Tactive = "/img/tactive.webp";
const URCTC = "/img/urctc.webp";
const ZKY = "/img/zky.webp";

function SEOHead() {
    const pageUrl = "https://www.priyamconsultancy.com/about-us/";
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_2/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                children: "About | Digital Transformation HR Services & Marketing Agency "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "description",
                content: "PCS is the best digital marketing agency in India with results-driven strategies. We offer the best digital marketing services in India for your brand's growth!"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "keywords",
                content: "Digital Marketing Services, Digital Marketing Agency, Top Digital Marketing Agency, Human Resource, HR Services, HR service provider, HR Recruitment, HR consulting services,Website development "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                rel: "canonical",
                href: "https://www.priyamconsultancy.com/about-us/"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:title",
                content: "About | Digital Transformation HR Services & Marketing Agency "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:description",
                content: "PCS is the best digital marketing agency in India with results-driven strategies. We offer the best digital marketing services in India for your brand's growth!"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:url",
                content: "https://www.priyamconsultancy.com/about-us/"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:site_name",
                content: " Microsoft App"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:title",
                content: "About | Digital Transformation HR Services & Marketing Agency "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:description",
                content: "PCS is the best digital marketing agency in India with results-driven strategies. We offer the best digital marketing services in India for your brand's growth!"
            })
        ]
    });
}
const ALL_CLIENTS = [
    {
        name: "Analytix-Hub",
        logo: Analytix
    },
    {
        name: "Baltimore",
        logo: Baltimore
    },
    {
        name: "Sterlo",
        logo: Sterlo
    },
    {
        name: "Sterlo Build",
        logo: sterloBuild
    },
    {
        name: "Sterlo Care",
        logo: sterloCare
    },
    {
        name: "Microsoft",
        logo: microsoft
    },
    {
        name: "Odoo",
        logo: odoo
    },
    {
        name: "OreOps",
        logo: OreOps
    },
    {
        name: "Riya Consultancy",
        logo: RiyaConsultancy
    },
    {
        name: "Tactive",
        logo: Tactive
    },
    {
        name: "URCTC",
        logo: URCTC
    },
    {
        name: "ZKY",
        logo: ZKY
    }
];
// Build slides: 6 clients per slide → row of 3 + row of 3
function buildSlides(clients) {
    const slides = [];
    for(let i = 0; i < clients.length; i += 6){
        const chunk = clients.slice(i, i + 6);
        if (chunk.length < 1) break;
        slides.push({
            row1: chunk.slice(0, 4),
            row2: chunk.slice(3, 6)
        });
    }
    return slides;
}
function LogoImg({ src, name }) {
    const [failed, setFailed] = (0,react__rspack_import_1.useState)(false);
    if (failed) {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
            className: "pcs-mq-fallback",
            children: name
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        src: src,
        alt: name,
        onError: ()=>setFailed(true),
        style: {
            maxWidth: "100%",
            maxHeight: "38px",
            objectFit: "contain",
            display: "block"
        }
    });
}
function ClientCarousel() {
    const slides = buildSlides(ALL_CLIENTS);
    const [current, setCurrent] = (0,react__rspack_import_1.useState)(0);
    const [animating, setAnimating] = (0,react__rspack_import_1.useState)(false);
    const [direction, setDirection] = (0,react__rspack_import_1.useState)("next");
    const timerRef = (0,react__rspack_import_1.useRef)(null);
    const goTo = (idx, dir = "next")=>{
        if (animating) return;
        setDirection(dir);
        setAnimating(true);
        setTimeout(()=>{
            setCurrent(idx);
            setAnimating(false);
        }, 380);
    };
    (0,react__rspack_import_1.useEffect)(()=>{
        timerRef.current = setInterval(()=>{
            goTo((current + 1) % slides.length, "next");
        }, 3500);
        return ()=>clearInterval(timerRef.current);
    }, [
        current,
        animating
    ]);
    const slide = slides[current];
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: "pcs-carousel-wrap",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: `pcs-carousel-slide ${animating ? direction === "next" ? "pcs-slide-exit-left" : "pcs-slide-exit-right" : "pcs-slide-enter"}`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "pcs-clients-row",
                        children: slide.row1.map((c, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "pcs-client-card",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(LogoImg, {
                                    src: c.logo,
                                    name: c.name
                                })
                            }, c.name + i))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "pcs-clients-row pcs-clients-row-center",
                        children: slide.row2.map((c, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "pcs-client-card",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(LogoImg, {
                                    src: c.logo,
                                    name: c.name
                                })
                            }, c.name + i))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "pcs-carousel-dots",
                children: slides.map((_, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
                        className: `pcs-carousel-dot${i === current ? " active" : ""}`,
                        onClick: ()=>goTo(i, i > current ? "next" : "prev")
                    }, i))
            })
        ]
    });
}
function PCSAboutUs() {
    const storyCanvasRef = (0,react__rspack_import_1.useRef)(null);
    (0,react__rspack_import_1.useEffect)(()=>{
        // Styles now come from the shared stylesheet (sterlo-shared.css) import above.
        // Add loaded class so reveal opacity:0 animations apply safely.
        const wrapper = document.getElementById("pcs-about-wrapper");
        if (wrapper) wrapper.classList.add("pcs-loaded");
        return ()=>{
            if (wrapper) wrapper.classList.remove("pcs-loaded");
        };
    }, []);
    (0,react__rspack_import_1.useEffect)(()=>{
        // Scroll reveal — rootMargin ensures above-fold elements fire immediately
        const io = new IntersectionObserver((entries)=>{
            entries.forEach((e)=>{
                if (e.isIntersecting) {
                    e.target.classList.add("visible");
                    io.unobserve(e.target);
                }
            });
        }, {
            threshold: 0.08,
            rootMargin: "0px 0px -40px 0px"
        });
        const revealEls = document.querySelectorAll(".pcs-reveal,.pcs-reveal-left,.pcs-reveal-right");
        revealEls.forEach((el)=>{
            // If element is already in viewport on load, mark visible immediately
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add("visible");
            } else {
                io.observe(el);
            }
        });
        // Trust items reveal
        const trustIO = new IntersectionObserver((entries)=>{
            entries.forEach((e)=>{
                if (e.isIntersecting) {
                    const delay = parseInt(e.target.dataset.delay || 0);
                    setTimeout(()=>e.target.classList.add("visible"), delay);
                    trustIO.unobserve(e.target);
                }
            });
        }, {
            threshold: 0.08,
            rootMargin: "0px 0px -40px 0px"
        });
        document.querySelectorAll(".pcs-trust-item").forEach((c)=>{
            const rect = c.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                c.classList.add("visible");
            } else {
                trustIO.observe(c);
            }
        });
        return ()=>{
            io.disconnect();
            trustIO.disconnect();
        };
    }, []);
    (0,react__rspack_import_1.useEffect)(()=>{
        // Bouncing balls canvas
        const canvas = storyCanvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const section = canvas.parentElement;
        let W, H, balls, animId;
        const COLORS = [
            "rgba(237,131,55,VAL)",
            "rgba(59,158,201,VAL)",
            "rgba(91,184,232,VAL)",
            "rgba(245,166,107,VAL)",
            "rgba(255,255,255,VAL)"
        ];
        function makeBall() {
            const r = 3 + Math.random() * 9;
            return {
                x: Math.random() * W,
                y: Math.random() * H,
                r,
                vx: (Math.random() - 0.5) * 1.1,
                vy: (Math.random() - 0.5) * 1.1,
                color: COLORS[Math.floor(Math.random() * COLORS.length)].replace("VAL", (0.12 + Math.random() * 0.22).toFixed(2))
            };
        }
        function resize() {
            W = canvas.width = section.offsetWidth;
            H = canvas.height = section.offsetHeight;
            balls = Array.from({
                length: 28
            }, makeBall);
        }
        function draw() {
            ctx.clearRect(0, 0, W, H);
            balls.forEach((b)=>{
                b.x += b.vx;
                b.y += b.vy;
                if (b.x - b.r < 0) {
                    b.x = b.r;
                    b.vx *= -1;
                }
                if (b.x + b.r > W) {
                    b.x = W - b.r;
                    b.vx *= -1;
                }
                if (b.y - b.r < 0) {
                    b.y = b.r;
                    b.vy *= -1;
                }
                if (b.y + b.r > H) {
                    b.y = H - b.r;
                    b.vy *= -1;
                }
                ctx.beginPath();
                ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
                ctx.fillStyle = b.color;
                ctx.fill();
            });
            animId = requestAnimationFrame(draw);
        }
        resize();
        window.addEventListener("resize", resize);
        draw();
        return ()=>{
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        id: "pcs-about-wrapper",
        style: {
            fontFamily: "'Poppins', sans-serif"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(SEOHead, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
                className: "sc-banner",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "sc-banner-inner",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "sc-banner-left",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "sc-banner-eyebrow",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            className: "sc-banner-dot"
                                        }),
                                        "About Priyam Consultancy Services"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                                    className: "sc-banner-title",
                                    children: [
                                        "Transforming with Businesses for",
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            className: "sc-highlight",
                                            children: "Beyond the Usual."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                    className: "sc-banner-subtitle",
                                    children: "Empowering progress with end-to-end transformation services combining innovation, compliance, and people strategies to redefine business success."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                    href: "#",
                                    className: "sc-banner-cta",
                                    children: "View Portfolio →"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "sc-banner-right",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                src: bannerImg,
                                alt: "Priyam Consultancy Services"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
                className: "pcs-about-section",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "pcs-about-inner",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "pcs-about-illo pcs-reveal-left",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                src: banner,
                                alt: "Growth Engine",
                                className: "pcs-about-section-img"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "pcs-reveal-right",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "partners-header1",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "partners-eyebrow",
                                        style: {
                                            marginBottom: '20px',
                                            textAlign: 'start'
                                        },
                                        children: "About Us"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                    className: "pcs-about-heading",
                                    children: "We Don’t Just Offer Services. We Solve Your Business Challenges."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                    className: "pcs-about-para",
                                    children: " A leading digital transformation and Growth Partner that turns your ideas into action."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                    className: "pcs-about-para",
                                    children: "We turn ideas into plans, blending innovation to deliver results across Business Registration & Compliance, Digital Transformation, Digital Marketing, and HR Services."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                    className: "pcs-about-para",
                                    children: "Our expertise helps businesses grow brands, streamline operations, optimize talent, and remain compliant with tailored solutions."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                    className: "pcs-about-para",
                                    children: "From startups to enterprises, we provide scalable, flexible services that adapt to evolving objectives and market demands."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                    className: "pcs-about-para",
                                    children: "We prioritize trust, transparency, and measurable outcomes, ensuring long-term success and sustainable impact for every client."
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                className: "pcs-story-section",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("canvas", {
                        id: "pcs-story-canvas",
                        ref: storyCanvasRef
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "pcs-story-inner",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "pcs-reveal-left",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "partners-header1",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "partners-eyebrow",
                                            style: {
                                                marginBottom: '20px',
                                                textAlign: 'start'
                                            },
                                            children: "Our Story"
                                        })
                                    }),
                                    "            ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                                        className: "pcs-story-heading",
                                        children: [
                                            "The Minds ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "orange",
                                                children: "Behind"
                                            }),
                                            " the Magic "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "pcs-story-divider"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        className: "pcs-story-text",
                                        children: "We’re more than a team – we’re a dynamic, collaborative mix of strategists, marketers, HR thinkers, tech innovators, and creative minds. Each member brings unique expertise, diverse experiences, and a shared passion for solving complex business challenges. Together, we’re united by one unwavering belief."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("blockquote", {
                                        className: "pcs-story-quote",
                                        children: "“Great businesses are built from the inside out”"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "pcs-story-cards pcs-reveal-right",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "pcs-vm-card",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "pcs-vm-illo",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                    src: vision,
                                                    alt: "Our Vision",
                                                    style: {
                                                        width: "100%",
                                                        height: "170px",
                                                        objectFit: "cover",
                                                        display: "block"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "pcs-vm-body",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "pcs-vm-label pcs-vm-label-vision",
                                                        children: "⬡ Our Vision"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "pcs-vm-text",
                                                        children: "To be the most trusted partner in business growth by delivering innovative solutions across business registration, technology, marketing, and HR, helping clients exceed goals and achieve lasting success."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "pcs-vm-card",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                className: "pcs-vm-illo",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                    src: mission,
                                                    alt: "Our Mission",
                                                    style: {
                                                        width: "100%",
                                                        height: "170px",
                                                        objectFit: "cover",
                                                        display: "block"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "pcs-vm-body",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "pcs-vm-label pcs-vm-label-mission",
                                                        children: "⬡ Our Mission"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "pcs-vm-text",
                                                        children: "We drive visibility, efficiency, and performance with data-led marketing, people-first HR strategies, seamless business registration, and digital transformation solutions all built for real business impact."
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
                className: "pcs-trust-section",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "pcs-trust-inner",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "pcs-trust-head pcs-reveal",
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
                                        children: "Why Businesses Trust Us"
                                    })
                                }),
                                "            ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                                    className: "pcs-trust-title",
                                    children: [
                                        "We Don't Just Deliver Services.",
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                                children: " We Deliver Results."
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                    className: "pcs-trust-sub",
                                    children: "At PCS, every partnership is built on trust and performance. Our holistic approach ensures measurable results across compliance, HR, finance, and digital transformation."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "pcs-trust-list",
                            children: [
                                {
                                    num: "01",
                                    icon: "/img/icon/one-point-access.webp",
                                    bg: "rgba(237,131,55,0.12)",
                                    title: "One Point Access",
                                    text: "Complete expertise — compliance, HR, digital, and marketing — integrated under one roof. No juggling vendors.",
                                    delay: 0
                                },
                                {
                                    num: "02",
                                    icon: "/img/icon/customized-strategies.webp",
                                    bg: "rgba(59,158,201,0.12)",
                                    title: "Scalable Solutions",
                                    text: "Flexible, modular offerings that grow with your business — from early-stage startups to established enterprises.",
                                    delay: 100
                                },
                                {
                                    num: "03",
                                    icon: "/img/icon/expert-team.webp",
                                    bg: "rgba(34,197,94,0.12)",
                                    title: "Result-Oriented",
                                    text: "Every strategy we deploy is tied to measurable ROI, performance benchmarks, and tangible business growth.",
                                    delay: 200
                                },
                                {
                                    num: "04",
                                    icon: "/img/icon/result-oriented.webp",
                                    bg: "rgba(168,85,247,0.12)",
                                    title: "Customized Strategies",
                                    text: "No templates. No copy-paste. Every solution is designed specifically around your business reality and goals.",
                                    delay: 300
                                },
                                {
                                    num: "05",
                                    icon: "/img/icon/customer-success.webp",
                                    bg: "rgba(245,166,107,0.12)",
                                    title: "Customer Success First",
                                    text: "We don't close deals — we open possibilities. Our growth is directly tied to the success of every client we serve.",
                                    delay: 400
                                },
                                {
                                    num: "06",
                                    icon: "/img/icon/scalable-solutions.webp",
                                    bg: "rgba(91,184,232,0.12)",
                                    title: "Expert Team",
                                    text: "Skilled professionals with deep multi-domain expertise — strategists, technologists, HR specialists, and marketers working as one.",
                                    delay: 500
                                }
                            ].map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "pcs-trust-item",
                                    "data-delay": item.delay,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "pcs-ti-num",
                                            children: item.num
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "pcs-ti-icon",
                                            style: {
                                                background: item.bg
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                src: item.icon,
                                                alt: item.title,
                                                width: 22,
                                                height: 22,
                                                style: {
                                                    objectFit: "contain"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "pcs-ti-title",
                                                    children: item.title
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "pcs-ti-text",
                                                    children: item.text
                                                })
                                            ]
                                        })
                                    ]
                                }, item.num))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
                className: "pcs-pc-section pcs-reveal",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "pcs-pc-inner",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "pcs-pc-block",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "pcs-pc-head",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                                        className: "pcs-pc-title",
                                        children: [
                                            "Our ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                                    children: "Partners"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "pcs-pc-partners-static",
                                    children: [
                                        {
                                            name: "Microsoft",
                                            src: microsoft
                                        },
                                        {
                                            name: "Sterlo",
                                            src: sterlo
                                        },
                                        {
                                            name: "SterloBuild",
                                            src: sterloBuild
                                        },
                                        {
                                            name: "SterloCare",
                                            src: sterloCare
                                        },
                                        {
                                            name: "Odoo",
                                            src: odoo
                                        }
                                    ].map((p)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "pcs-mq-item",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(LogoImg, {
                                                src: p.src,
                                                name: p.name
                                            })
                                        }, p.name))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "pcs-pc-divider"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "pcs-pc-block",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "pcs-pc-head",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                                        className: "pcs-pc-title",
                                        children: [
                                            "Our ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                                    children: "Clients"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ClientCarousel, {})
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


},

};
;