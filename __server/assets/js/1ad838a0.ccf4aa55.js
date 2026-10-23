"use strict";
exports.ids = ["240"];
exports.modules = {
9095(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (ContactPage)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _emailjs_browser__rspack_import_2 = __webpack_require__(58);
/* import */ var _theme_Layout__rspack_import_3 = __webpack_require__(8328);
/* import */ var _docusaurus_Head__rspack_import_4 = __webpack_require__(3572);




const banner = "/img/contact-us.webp";


function SEOHead() {
    const pageUrl = "https://www.priyamconsultancy.com/contact-us/";
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Head__rspack_import_4/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("title", {
                children: "Get in Touch with Priyam Consultancy | Contact Us "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "description",
                content: "Get professional support for business registration, compliance management, website development, HR solutions, and digital marketing. Contact PCS today."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "keywords",
                content: "Priyam Consultancy Services, Contact Us"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("link", {
                rel: "canonical",
                href: "https://www.priyamconsultancy.com/contact-us/"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:title",
                content: "Get in Touch with Priyam Consultancy | Contact Us "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:description",
                content: "Get professional support for business registration, compliance management, website development, HR solutions, and digital marketing. Contact PCS today."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:url",
                content: "https://www.priyamconsultancy.com/contact-us/"
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
                content: "Get in Touch with Priyam Consultancy | Contact Us "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                name: "twitter:description",
                content: "Get professional support for business registration, compliance management, website development, HR solutions, and digital marketing. Contact PCS today."
            })
        ]
    });
}
function ServiceDropdown({ value, onChange }) {
    const [open, setOpen] = (0,react__rspack_import_1.useState)(false);
    const wrapRef = (0,react__rspack_import_1.useRef)(null);
    const services = [
        "Website Design",
        "Static Website Development",
        "Custom Website Development",
        "WooCommerce Website Development",
        "Shopify Website Development",
        "E-Commerce Website Development"
    ];
    (0,react__rspack_import_1.useEffect)(()=>{
        function handleClickOutside(e) {
            if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: "cf-custom-select",
        ref: wrapRef,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "cf-custom-select-trigger",
                onClick: ()=>setOpen(!open),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        className: value ? "cf-cs-value" : "cf-cs-placeholder",
                        children: value || "Select a Service"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        className: `cf-cs-arrow ${open ? "cf-cs-arrow-open" : ""}`,
                        children: "▾"
                    })
                ]
            }),
            open && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
                className: "cf-custom-select-list",
                children: services.map((s)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                        className: `cf-custom-select-item ${value === s ? "cf-cs-item-selected" : ""}`,
                        onClick: ()=>{
                            onChange(s);
                            setOpen(false);
                        },
                        children: s
                    }, s))
            })
        ]
    });
}
function ContactPage() {
    const [form, setForm] = (0,react__rspack_import_1.useState)({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
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
            service: form.service,
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
                service: "",
                msg: ""
            });
        }).catch((error)=>{
            console.log(error);
            alert("Failed to send ❌");
        });
    };
    const canvasRef = (0,react__rspack_import_1.useRef)(null);
    const sectionRef = (0,react__rspack_import_1.useRef)(null);
    // Bouncing balls animation
    (0,react__rspack_import_1.useEffect)(()=>{
        const canvas = canvasRef.current;
        const section = sectionRef.current;
        if (!canvas || !section) return;
        const ctx = canvas.getContext("2d");
        const BALLS = [
            {
                x: 0,
                y: 0,
                r: 55,
                vx: 1.1,
                vy: 0.8,
                color: "rgba(0,65,104,0.10)"
            },
            {
                x: 0,
                y: 0,
                r: 38,
                vx: -0.9,
                vy: 1.2,
                color: "rgba(237,131,55,0.12)"
            },
            {
                x: 0,
                y: 0,
                r: 70,
                vx: 0.7,
                vy: -1.0,
                color: "rgba(0,65,104,0.07)"
            },
            {
                x: 0,
                y: 0,
                r: 28,
                vx: -1.4,
                vy: -0.75,
                color: "rgba(237,131,55,0.09)"
            },
            {
                x: 0,
                y: 0,
                r: 48,
                vx: 1.3,
                vy: 1.1,
                color: "rgba(10,82,130,0.09)"
            },
            {
                x: 0,
                y: 0,
                r: 22,
                vx: -0.8,
                vy: 1.5,
                color: "rgba(237,131,55,0.15)"
            },
            {
                x: 0,
                y: 0,
                r: 62,
                vx: 0.6,
                vy: -0.9,
                color: "rgba(0,42,68,0.07)"
            },
            {
                x: 0,
                y: 0,
                r: 34,
                vx: 1.6,
                vy: -1.2,
                color: "rgba(237,131,55,0.08)"
            }
        ];
        function resize() {
            const rect = section.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
            BALLS.forEach((b, i)=>{
                if (b.x === 0 && b.y === 0) {
                    b.x = canvas.width / BALLS.length * i + b.r + Math.random() * 60;
                    b.y = Math.random() * (canvas.height - b.r * 2) + b.r;
                }
            });
        }
        let animId;
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            BALLS.forEach((b)=>{
                b.x += b.vx;
                b.y += b.vy;
                if (b.x - b.r < 0) {
                    b.x = b.r;
                    b.vx *= -1;
                }
                if (b.x + b.r > canvas.width) {
                    b.x = canvas.width - b.r;
                    b.vx *= -1;
                }
                if (b.y - b.r < 0) {
                    b.y = b.r;
                    b.vy *= -1;
                }
                if (b.y + b.r > canvas.height) {
                    b.y = canvas.height - b.r;
                    b.vy *= -1;
                }
                const grad = ctx.createRadialGradient(b.x - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.1, b.x, b.y, b.r);
                grad.addColorStop(0, b.color.replace(/[\d.]+\)$/, (v)=>parseFloat(v) + 0.08 + ")"));
                grad.addColorStop(1, b.color);
                ctx.beginPath();
                ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
                ctx.fillStyle = grad;
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
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_3/* ["default"] */.A, {
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
                                        "Get In Touch"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h1", {
                                    className: "sc-banner-title",
                                    children: [
                                        "Contact ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            className: "sc-highlight",
                                            children: "Us"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                    className: "sc-banner-subtitle",
                                    children: "Have questions or need support? We’re just a message away. Let's talk and discover how we can help your business grow."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                    className: "pcs-hero-quote",
                                    children: "“Every great connection starts with a conversation - we’re here to listen and help you move forward”"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "sc-banner-right",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                src: banner,
                                alt: "Contact Us Illustration"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                className: "pcs-contact-section",
                id: "contact",
                ref: sectionRef,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("canvas", {
                        id: "pcs-ball-canvas",
                        ref: canvasRef
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "pcs-contact-inner",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: "pcs-contact-grid",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "pcs-cs-info-card",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: "pcs-cs-tag",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                    className: "pcs-cs-tag-dot"
                                                }),
                                                "Contact Info"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                                            className: "pcs-cs-heading",
                                            children: [
                                                "We’d Love to Hear from You!  ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("em", {
                                                    children: "Talk to Our Experts"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            className: "pcs-cs-subtext",
                                            children: "Whether you have a question, need support, or want to explore how we can collaborate              "
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: "pcs-cs-channel-list",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    className: "pcs-cs-channel",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "pcs-cs-channel-ico",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                                src: "/img/icon/phone.webp",
                                                                alt: "Phone",
                                                                style: {
                                                                    width: "20px",
                                                                    height: "20px",
                                                                    objectFit: "contain"
                                                                }
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                            className: "pcs-cs-channel-body",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                    className: "pcs-cs-channel-title",
                                                                    children: "Call us any time"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                    className: "pcs-cs-channel-val",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                                            href: "tel:+919677444048",
                                                                            children: "+91 96774 44048"
                                                                        }),
                                                                        "\xa0/\xa0",
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                                            href: "tel:+917904386418",
                                                                            children: "+91 79043 86418"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    className: "pcs-cs-channel",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "pcs-cs-channel-ico",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                                src: "/img/icon/mail.webp",
                                                                alt: "Mail",
                                                                style: {
                                                                    width: "20px",
                                                                    height: "20px",
                                                                    objectFit: "contain"
                                                                }
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                            className: "pcs-cs-channel-body",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                    className: "pcs-cs-channel-title",
                                                                    children: "Send Us Mail"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                    className: "pcs-cs-channel-val",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                                        href: "mailto:sales@priyamconsultancy.com",
                                                                        children: "sales@priyamconsultancy.com"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    className: "pcs-cs-channel",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "pcs-cs-channel-ico",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                                src: "/img/icon/location.webp",
                                                                alt: "Location",
                                                                style: {
                                                                    width: "20px",
                                                                    height: "20px",
                                                                    objectFit: "contain"
                                                                }
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                            className: "pcs-cs-channel-body",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                    className: "pcs-cs-channel-title",
                                                                    children: "Visit Our Office"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                    className: "pcs-cs-channel-val",
                                                                    style: {
                                                                        whiteSpace: "normal",
                                                                        lineHeight: 1.5,
                                                                        fontSize: ".8rem"
                                                                    },
                                                                    children: [
                                                                        "SF.11/4, Pooja Garden, Kalapatti Road,",
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}),
                                                                        "Civil Aerodrome Post, Coimbatore – 641014"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "pcs-cs-divider"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: "pcs-cs-social",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                    className: "pcs-cs-social-label",
                                                    children: "Follow"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                    className: "pcs-cs-social-btn",
                                                    href: "https://www.linkedin.com/company/priyam-consultancy-services/",
                                                    children: "in"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                    className: "pcs-cs-social-btn",
                                                    href: "https://www.facebook.com/people/Priyam-Consultancy-Services/61577125709962/",
                                                    children: "f"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                    className: "pcs-cs-social-btn",
                                                    href: "https://www.instagram.com/priyam_consultancy_services/",
                                                    children: "ig"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                    className: "pcs-cs-social-btn",
                                                    href: "https://x.com/services91032",
                                                    children: "\uD835\uDD4F"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "pcs-cs-quote-deco",
                                            children: "\"We're just a message away. Let's talk and discover how we can help your business grow. \"              "
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: "pcs-cs-form-card",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: "cf-badge",
                                            children: "+ Free Quote"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: "cf-title",
                                            children: [
                                                "Your Growth, ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                    children: " Our Mission."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            className: "cf-sub",
                                            children: "Fill in your details — we'll get back within 24 hours."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("form", {
                                            onSubmit: sendEmail,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    className: "cf-row",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "cf-field",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                type: "text",
                                                                name: "name",
                                                                placeholder: "Your Name",
                                                                value: form.name,
                                                                onChange: handleChange,
                                                                required: true
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "cf-field",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                type: "email",
                                                                name: "email",
                                                                placeholder: "Email Address",
                                                                value: form.email,
                                                                onChange: handleChange,
                                                                required: true
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    className: "cf-row",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "cf-field",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                                className: "cf-phone-wrap",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                        className: "cf-phone-prefix",
                                                                        children: "IN +91"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                        type: "tel",
                                                                        name: "phone",
                                                                        placeholder: "Mobile Number",
                                                                        value: form.phone,
                                                                        onChange: handleChange,
                                                                        maxLength: "10",
                                                                        pattern: "[0-9]{10}",
                                                                        required: true
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                            className: "cf-field",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                type: "text",
                                                                name: "company",
                                                                placeholder: "Company Name",
                                                                value: form.company,
                                                                onChange: handleChange
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "cf-row",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                        className: "cf-field cf-field-full",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ServiceDropdown, {
                                                            value: form.service,
                                                            onChange: (val)=>setForm({
                                                                    ...form,
                                                                    service: val
                                                                })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                    className: "cf-field",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("textarea", {
                                                        name: "msg",
                                                        placeholder: "Your Message",
                                                        value: form.msg,
                                                        onChange: handleChange
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    className: "cf-submit-row",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("button", {
                                                            type: "submit",
                                                            className: "cf-submit",
                                                            children: [
                                                                "Send Message ",
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                    className: "cf-submit-arrow",
                                                                    children: "→"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
                                                            className: "cf-note",
                                                            children: [
                                                                "We reply within",
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}),
                                                                "24 hours ✓"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
                className: "pcs-map-section",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: "pcs-map-frame-wrap",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("iframe", {
                            title: "Priyam Consultancy Services Location",
                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.3!2d77.0384169!3d11.0437549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8570043539609%3A0x153fa62eb3f9b6e4!2sPriyam%20Consultancy%20Services!5e0!3m2!1sen!2sin!4v1714200000000!5m2!1sen!2sin",
                            allowFullScreen: "",
                            loading: "lazy",
                            referrerPolicy: "no-referrer-when-downgrade"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                            className: "pcs-map-open-link",
                            href: "https://www.google.com/maps/place/Priyam+Consultancy+Services/@11.0437549,77.0384169,864m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba8570043539609:0x153fa62eb3f9b6e4!8m2!3d11.0437549!4d77.0384169!16s%2Fg%2F11ydmf6wk6?hl=en-US&entry=ttu",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            title: "Open in Google Maps",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    className: "pcs-map-open-icon",
                                    children: "↗"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    children: "Open in Google Maps"
                                })
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