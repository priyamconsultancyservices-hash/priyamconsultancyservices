import { useState, useRef, useCallback, useEffect } from "react";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import emailjs from "@emailjs/browser";
import '../../css/landing-page.css';
const banner = "/img/digital-marketing.png";

function SEOHead() {
    const pageUrl = "https://priyamconsultancy.com/digital-marketing-company-in-coimbatore/";
    const imageUrl = "https://www.pcsbusinesssolution.com/img/digital-marketing.png";
    const schemaData = [
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@id": "https://priyamconsultancy.com/",
                        "name": "Home"
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@id": "https://priyamconsultancy.com/landing-page/website-development-company-in-coimbatore/",
                        "name": "Website Development Company in Coimbatore"
                    }
                }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Priyam Consultancy Services",
            "url": "https://priyamconsultancy.com/",
            "logo": "https://priyamconsultancy.com/img/priyam-consultancy-logo.png",
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
            "@id": "https://priyamconsultancy.com/landing-page/website-development-company-in-coimbatore/#service",
            "name": "Website Development Services in Coimbatore",
            "serviceType": "Website Development Services",
            "url": "https://priyamconsultancy.com/landing-page/website-development-company-in-coimbatore/",
            "description": "Priyam Consultancy Services develops SEO-optimized business websites, WordPress websites, WooCommerce stores, Shopify websites, custom web applications, responsive websites, and eCommerce solutions for businesses in Coimbatore.",
            "provider": {
                "@type": "Organization",
                "name": "Priyam Consultancy Services",
                "url": "https://priyamconsultancy.com/",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://priyamconsultancy.com/img/priyam-consultancy-logo.png"
                }
            },
            "areaServed": {
                "@type": "City",
                "name": "Coimbatore"
            }

        },
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Website Development Company in Coimbatore | Priyam Consultancy Services",
            "image": "https://priyamconsultancy.com/img/priyam-consultancy-logo.png",
            "@id": "https://priyamconsultancy.com/landing-page/website-development-company-in-coimbatore/",
            "url": "https://priyamconsultancy.com/landing-page/website-development-company-in-coimbatore/",
            "telephone": "+91 96774 44048",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "1st Floor, SF.11/4, Pooja Garden, Kalapatti Road, Civil Aerodrame Post",
                "addressLocality": "Coimbatore",
                "addressRegion": "Tamil Nadu",
                "postalCode": "641014",
                "addressCountry": "India"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 11.043918,
                "longitude": 77.038417
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Monday",
                    "opens": "09:00",
                    "closes": "18:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Tuesday",
                    "opens": "09:00",
                    "closes": "18:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Wednesday",
                    "opens": "09:00",
                    "closes": "18:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Thursday",
                    "opens": "09:00",
                    "closes": "18:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Friday",
                    "opens": "09:00",
                    "closes": "18:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "09:00",
                    "closes": "18:00"
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
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "What does a website development company do?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A website development company plans, designs, and builds websites from the ground up, creating responsive, user-friendly, and business-focused websites tailored to an organization's goals."
                }
            }, {
                "@type": "Question",
                "name": "How is a static website different from a dynamic one?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A static website displays the same content to every visitor, while a dynamic website retrieves content from a database and can change based on the visitor, user interactions, or other dynamic factors."
                }
            }, {
                "@type": "Question",
                "name": "What should I look for in a website development service?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Look for a provider that offers clear communication, a portfolio of successful projects, transparent pricing, technical expertise, and reliable post-launch support and maintenance."
                }
            }, {
                "@type": "Question",
                "name": "How long does website design and development usually take?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Project timelines vary depending on the scope and complexity. A simple static website can often be completed within a few weeks, while a custom or eCommerce website may take several weeks to a few months."
                }
            }, {
                "@type": "Question",
                "name": "What makes an e-commerce development company different from a general web developer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "An e-commerce development company specializes in building online stores with features such as secure checkout, payment gateway integration, inventory management, product catalogs, and order processing."
                }
            }, {
                "@type": "Question",
                "name": "How do I know if I'm hiring the right website development company for my project?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ask for case studies, request client references, review previous work, evaluate their development process, and confirm they provide ongoing support and maintenance after your website is launched."
                }
            }]
        }

    ];
    return (
        <Head>
            <title>Best Website Development Company in Coimbatore | PCS </title>
            <meta name="description" content="Break away from ordinary business websites. Priyam Consultancy Services develops next-generation, SEO-optimized websites that help Coimbatore brands stand out." />
            <meta name="keywords" content="Web Development Company in Coimbatore, Digital Marketing Company Coimbatore, Digital Marketing in Coimbatore, SEO Company in Coimbatore, Recruitment Agency in Coimbatore, SEO Services in Coimbatore, Website Development Company in Coimbatore " />
            <link rel="canonical" href="https://www.priyamconsultancy.com/landing-page/website-development-company-in-coimbatore/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Best Website Development Company in Coimbatore | PCS " />
            <meta property="og:description" content="Break away from ordinary business websites. Priyam Consultancy Services develops next-generation, SEO-optimized websites that help Coimbatore brands stand out." />
            <meta property="og:url" content="https://www.priyamconsultancy.com/landing-page/website-development-company-in-coimbatore/" />
            <meta property="og:image" content={imageUrl} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Best Website Development Company in Coimbatore | PCS " />
            <meta name="twitter:description" content="Break away from ordinary business websites. Priyam Consultancy Services develops next-generation, SEO-optimized websites that help Coimbatore brands stand out." />
            <meta name="twitter:image" content={imageUrl} />
            {schemaData.map((schema, i) => (<script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>))}
        </Head>
    );
}

const GlobalStyles = () => (
    <style>{`
     header.headerWrapper_ROKX, .footerTop_uYEV, .footerBottom_YdiN{
    display: none;
} 


`}</style>
);
// Used by ServicesSlider (.svs-icon-wrap)
function ServiceIcon({ name }) {
    const icons = {
        search: "/img/icon/website-other-service-seo.webp",
        ppc: "/img/icon/website-other-service-ppc.webp",
        content: "/img/icon/website-other-service-content.webp",
        smm: "/img/icon/website-other-service-smm.webp",
        email: "/img/icon/website-other-service-email.webp",
        graphic: "/img/icon/website-other-service-graphic.webp",
        busregcom: "/img/icon/website-other-service-busregcom.webp",
        digitaltrans: "/img/icon/website-other-service-digitaltrans.webp",
        hrservice: "/img/icon/website-other-service-hrservice.webp",
    };
    return icons[name] ? <img src={icons[name]} alt={name} width="24" height="24" /> : null;
}

// ── FAQ Data ──────────────────────────────────────────
const faqData = [
    { q: "How will my new website help me beat my local competitors?", a: "A professionally designed website improves your online visibility, builds credibility, and attracts qualified leads — turning more visitors into paying customers and giving your business a real edge over competitors still relying on outdated sites." },
    { q: "Can you guarantee my website will rank on the first page of Google?", a: " No one can honestly guarantee first-page rankings — and you should be cautious of anyone who does. What we can promise is an SEO-friendly website built on proven optimization practices that significantly improve your chances of ranking higher over time." },
    { q: "How do you design a website that generates more customer enquiries?", a: "We focus on clear navigation, persuasive content, fast loading speeds, and strong calls-to-action — every element is built to guide a visitor toward contacting or buying from you, not just look good." },

    { q: "Why should I choose a website development company in Coimbatore?", a: "A local team understands your target audience, your competitors, and the regional market — which means better communication, faster turnaround, and a website built around how your actual customers think and search." },
    { q: "Can I meet your team in person to discuss my project?", a: "Yes — we welcome in-person meetings at our Coimbatore office, and offer virtual consultations too if that's easier for your schedule." },
    { q: "Will I be able to update my website without technical knowledge?", a: "Yes. We build every website on an easy-to-use content management system, so you can update text, images, products, and blog posts yourself — no coding required." },

    { q: "Is every website you build mobile-friendly?", a: "Every site we build is fully responsive across smartphones, tablets, and desktops — since most of your customers will likely find you on mobile first." },
    { q: "Can my website be upgraded with new features later?", a: "Yes — our websites are built with scalability in mind, so adding new pages, features, payment systems, or integrations down the line is straightforward, not a rebuild." },
    { q: "What support do you provide after my website goes live?", a: "We don't disappear after launch. You get ongoing technical support, security updates, performance monitoring, and bug fixes to keep your website running smoothly." },
    { q: "How do you keep my website secure and fast?", a: "We use SSL certificates, secure coding practices, regular updates, optimized images, and caching to protect your site and keep load times fast — both of which matter for trust and for Google rankings." },


];

// ── Site Header ────────────────────────────────────────
function SiteHeader() {
    return (
        <header className="pcs-site-header-wrap">
            <div className="pcs-site-header">
                <div className="pcs-header-logo">
                    <img src="/img/priyam-consultancy-logo.png" alt="Priyam Consultancy Services" />
                </div>

                <div className="pcs-header-right">
                    <a href="tel:+919677444048" className="pcs-header-call">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ed8337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span>+91 96774 44048</span>
                    </a>

                    <a href="#contact" className="pcs-header-enquire-btn">
                        Build Your Website Today
                        <span>→</span>
                    </a>
                </div>
            </div>
        </header>
    );
}

// ── Hero ────────────────────────────────────────────
function HeroSection() {
    return (
        <section className="hero" id="about">
            {/* LEFT CONTENT */}
            <div className="hero-left">
                <div className="h-badge"><div className="badge-dot" />Web Development</div>
                <h1 className="pf-heading" style={{ margin: "2.5rem 0 0" }}>
                    Trusted <span><i>Website Development Company </i></span>in Coimbatore
                </h1>

                <p className="hero-sub1">
                    We design and build fast, mobile-ready websites that help you get found, get leads, and grow — without delays. From business websites to online stores, every site is tailored to your industry and built to bring real results, not just look good.
                </p>

      <div className="hero-cta-row">
    <a href="tel:+919677444048" className="hero-cta-fill">
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        Call Now — Free Consultation
    </a>
    <a href="#get-in-touch-form" className="hero-cta-outline">
       Get a Custom Website Quote 
    </a>
</div>


                <div className="hero-img-grid">
                    <img src="/img/landing-page/hero-img-1.webp" alt="Website Development Coimbatore" className="hero-img-1" />
                    <img src="/img/landing-page/hero-img-2.webp" alt="Web Design Coimbatore" className="hero-img-2" />
                    <img src="/img/landing-page/hero-img-3.webp" alt="Digital Solutions Coimbatore" className="hero-img-3" />
                </div>
            </div>

            {/* RIGHT: dummy image (form removed from here) */}
            <div className="hero-right">
                <img
                    src="/img/landing-page/banner.webp"
                    alt="Website Development Coimbatore"
                    className="hero-img"
                />
            </div>
        </section>
    );
}

// ── Custom Service Dropdown ────────────────────────────
const SERVICE_OPTIONS = [
    "Website Design",
    "Static Website Development",
    "Custom Website Development",
    "WooCommerce Development",
    "Custom E-Commerce Development",
    "Shopify Development",
    "Other",
];

function ServiceDropdown({ value, onChange }) {
    const [open, setOpen] = useState(false);
    const wrapRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectOption = (opt) => {
        onChange({ target: { name: "service", value: opt } });
        setOpen(false);
    };

    return (
        <div className="svc-dd-wrap" ref={wrapRef}>
            <div
                className={`svc-dd-control ${open ? "open" : ""}`}
                onClick={() => setOpen((o) => !o)}
            >
                <span className={value ? "svc-dd-value" : "svc-dd-placeholder"}>
                    {value || "Select a Service"}
                </span>
                <span className="svc-dd-arrow">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </div>

            {open && (
                <ul className="svc-dd-menu">
                    {SERVICE_OPTIONS.map((opt) => (
                        <li
                            key={opt}
                            className={`svc-dd-item ${value === opt ? "active" : ""}`}
                            onClick={() => selectOption(opt)}
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            )}

            {/* hidden input keeps form.service in sync + enables native required validation */}
            <input type="hidden" name="service" value={value} required />
        </div>
    );
}

function HeroContactForm() {
    const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", service: "", msg: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            name: form.name,
            email: form.email,
            phone: form.phone,
            company: form.company,
            service: form.service,
            message: form.msg,
            url: window.location.href,
        };

        emailjs
            .send(
                "service_8xw6k3r",
                "template_jarui36",
                templateParams,
                "XWRnXi4hK2SvmRG3q"
            )
            .then(() => {
                alert("Message Sent Successfully ✅");
                setForm({ name: "", email: "", phone: "", company: "", service: "", msg: "" });
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to send ❌");
            });
    };

    return (
        <form onSubmit={sendEmail}>
            {/* Row 1: Name + Mobile */}
            <div className="hero-form-row hero-form-row-2col">
                <div className="hero-form-field">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="hero-form-field">
                    <div className="hero-phone-wrap">
                        <span className="hero-phone-prefix">IN +91</span>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Mobile Number"
                            value={form.phone}
                            onChange={handleChange}
                            maxLength="10"
                            pattern="[0-9]{10}"
                            required
                        />
                    </div>
                </div>
            </div>

            {/* Row 2: Email + Company */}
            <div className="hero-form-row hero-form-row-2col">
                <div className="hero-form-field">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="hero-form-field">
                    <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={form.company}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {/* Row 3: Service (full width row, custom dropdown) */}
            <div className="hero-form-row">
                <div className="hero-form-field">
                    <ServiceDropdown
                        value={form.service}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {/* Row 4: Message (full width) */}
            <div className="hero-form-row">
                <div className="hero-form-field">
                    <textarea
                        name="msg"
                        placeholder="Your Message"
                        value={form.msg}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="hero-form-footer">
                <button type="submit" className="hero-form-btn">
                    Send Message
                    <span className="hero-form-btn-arrow">→</span>
                </button>
            </div>
        </form>
    );
}

const CLIENT_MARQUEE_LOGOS = [
    { name: "Tactive", img: "/img/landing-page/client-slide-1.webp" },
    { name: "URCTS", img: "/img/landing-page/client-slide-2.webp" },
    { name: "ZKY", img: "/img/landing-page/client-slide-3.webp" },
    { name: "Analytix Hub", img: "/img/landing-page/client-slide-4.webp" },
    { name: "Baltimore Health Analytics", img: "/img/landing-page/client-slide-5.webp" },
    { name: "Sterlo", img: "/img/landing-page/client-slide-6.webp" },
    { name: "SterloBuild", img: "/img/landing-page/client-slide-7.webp" },
    { name: "SterloCare", img: "/img/landing-page/client-slide-8.webp" },
    { name: "Microsoft", img: "/img/landing-page/client-slide-9.webp" },
    { name: "Microsoft", img: "/img/landing-page/client-slide-10.webp" },
    { name: "Microsoft", img: "/img/landing-page/client-slide-11.webp" },
    { name: "Microsoft", img: "/img/landing-page/client-slide-12.webp" },
    { name: "Microsoft", img: "/img/landing-page/client-slide-13.webp" },
    { name: "Microsoft", img: "/img/landing-page/client-slide-14.webp" },
    { name: "Microsoft", img: "/img/landing-page/client-slide-15.webp" },
    { name: "Microsoft", img: "/img/landing-page/client-slide-16.webp" },
    { name: "Microsoft", img: "/img/landing-page/client-slide-17.webp" },
    { name: "Microsoft", img: "/img/landing-page/client-slide-18.webp" },
    { name: "Microsoft", img: "/img/landing-page/client-slide-19.webp" },
    { name: "Microsoft", img: "/img/landing-page/client-slide-20.webp" },
];

function ClientLogosMarquee() {
    const doubled = [...CLIENT_MARQUEE_LOGOS, ...CLIENT_MARQUEE_LOGOS];

    return (
        <div className="clm-track-wrap">
            <div className="clm-row">
                <div className="clm-row-inner">
                    {doubled.map((client, i) => (
                        <div className="clm-item" key={i}>
                            <img src={client.img} alt={client.name} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const CTA_LOGOS = [
    { name: "Sterlo", img: "/img/landing-page/cta-logo-1.webp", url: "https://sterlo.com" },
    { name: "SterloCare", img: "/img/landing-page/cta-logo-2.webp", url: "https://sterlocare.com" },
    { name: "SterloBuild", img: "/img/landing-page/cta-logo-3.webp", url: "https://sterlobuild.com" },
    { name: "Talent Tribe", img: "/img/landing-page/cta-logo-4.webp", url: "https://talenttribe.in" },
    { name: "ZKY", img: "/img/landing-page/cta-logo-5.webp", url: "https://zky.co.in" },
    { name: "Riya Consultancy", img: "/img/landing-page/cta-logo-6.webp", url: "https://riyaconsultancy.com" },
    { name: "Star Health Finance", img: "/img/landing-page/cta-logo-7.webp", url: "" },
    { name: "Feral Roots", img: "/img/landing-page/cta-logo-8.webp", url: "https://feralroots.in" },
];

function BuildTogetherCTASection() {
    return (
        <section style={{ padding: "4rem 5% 4rem", background: '#fff' }}>
            <div style={{
                maxWidth: "1200px", margin: "0 auto",
                borderRadius: "20px", overflow: "hidden",
                position: "relative", background: "#004168",
                minHeight: "200px",
                display: "grid", gridTemplateColumns: "1fr auto",
                alignItems: "center", gap: "2rem",
                padding: "3rem 1.7rem",
            }}>

                {/* BG grid pattern */}
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
                    backgroundImage: "url('/img/website-development/cta.webp')",
                    backgroundSize: "cover", backgroundPosition: "center",
                }} />

                {/* BG image */}
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
                    backgroundImage: "url('/img/website-development/cta.webp')",
                    backgroundSize: "cover", backgroundPosition: "center",
                    // opacity: 0.08,
                }} />

                {/* Glow orb */}
                <div style={{
                    position: "absolute", right: "-80px", bottom: "-80px",
                    width: "320px", height: "320px", borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(237,131,55,0.12) 0%, transparent 65%)",
                    pointerEvents: "none", zIndex: 0,
                }} />

                {/* LEFT: Content */}
                <div style={{ position: "relative", zIndex: 2 }}>
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: "7px",
                        background: "rgba(237,131,55,0.12)",
                        border: "1px solid rgba(237,131,55,0.3)",
                        color: "#ed8337", fontSize: "0.68rem", fontWeight: 600,
                        padding: "0.3rem 1rem", borderRadius: "50px",
                        letterSpacing: "0.1em", textTransform: "uppercase",
                        marginBottom: "1rem",
                    }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ed8337", display: "inline-block" }} />
                        Let's Build Together
                    </div>

                    <h2 style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "clamp(1.48rem, 2.4vw, 2.1rem)",
                        fontWeight: 700, color: "#fff",
                        lineHeight: 1.2, margin: "0 0 0.7rem",
                    }}>
                        Get a Free Consultation With Our <br /><em style={{ color: "#ed8337" }}>Website Development Team</em><br />
                    </h2>

                    <p style={{
                        fontSize: "0.9rem", color: "rgba(255,255,255,0.72)",
                        lineHeight: 1.75, margin: 0, maxWidth: "480px",
                    }}>
                        Tell us about your project. We will plan the right approach. We will discuss the platform, timeline and budget before any work begins.
                    </p>

                    {/* LOGOS ROW */}
                    <div className="cta-logos-row">
                        {CTA_LOGOS.map((logo, i) => (
                            <img key={i} src={logo.img} alt={logo.name} className="cta-logo-item" loading="lazy" />
                        ))}
                    </div>

                    <div style={{
                        position: "relative", zIndex: 2,
                        display: "flex", flexDirection: "column",
                        alignItems: "start", gap: "0.85rem", flexShrink: 0, marginTop: "1.5rem",
                    }}>
                        <a href="#about" className="pg-form-btn">
                            Book a Free Consultation
                            <span className="pg-form-btn-arr">→</span>
                        </a>
                    </div>
                </div>
                {/* RIGHT: Buttons */}
            </div>
        </section>
    );
}

// ── Modern Features Section ───────────────────────────
function ModernFeaturesSection() {
    return (
        <section className="mf-outer" id="feature">
            <div className="mf-head">
                <div className="partners-header1" style={{ textAlign: 'center' }}>
                    <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Web Development Features
                    </div>
                </div>
                <h2 className="mf-h2">Everything Your Website Needs to  <span>Perform and Grow </span>
                </h2>
                <p className="mf-sub">
                    Our website development solutions bring together speed, security, functionality, and scalability to build a strong digital presence for your business. Every website is developed using modern technologies, SEO-ready practices, and intuitive user experiences designed to attract visitors, generate enquiries, and support long-term growth.
                </p>
            </div>
            <div className="mf-body">
                <div className="mf-col">
                    <div className="mf-item">
                        <div className="mf-icon-box">
                            <img src="/img/icon/feat-custom-web.webp" alt="Custom Web Development" width={"25px"} />
                        </div>
                        <div><h3 className="mf-t">Custom Website Development</h3><p className="mf-d">
                            Get a website built specifically around your business, industry, brand identity, and unique requirements. From custom functionality to scalable architecture, we develop secure and high-performing websites designed to support your current needs and future growth.
                        </p></div>
                    </div>

                    <div className="mf-item">
                        <div className="mf-icon-box">
                            <img src="/img/icon/feat-responsive-design.webp" alt="Mobile Responsiveness" width={"25px"} />
                        </div>
                        <div><h3 className="mf-t">Mobile-Responsive Development</h3><p className="mf-d">
                            Your website will deliver a consistent and user-friendly experience across desktops, tablets, and smartphones. We ensure every page, feature, and interaction adapts smoothly to different screen sizes for better usability and customer engagement.
                        </p></div>
                    </div>
                    <div className="mf-item">
                        <div className="mf-icon-box">
                            <img src="/img/icon/feat-api-intergation.webp" alt="API Integration" width={"25px"} />
                        </div>
                        <div>
                            <h3 className="mf-t">Third-Party API Integrations</h3><p className="mf-d">
                                Connect your website with essential business tools, including payment gateways, CRM platforms, WhatsApp, shipping providers, analytics, and marketing applications. Our integrations help streamline processes, reduce manual work, and create a more connected digital experience.
                            </p></div>
                    </div>
                </div>

                <div className="mf-phone">
                    <img src="/img/website-development/features.webp" alt="Mobile Responsiveness" />
                </div>

                <div className="mf-col">
                    <div className="mf-item rev">
                        <div className="mf-icon-box">
                            <img src="/img/icon/feat-seo-struture.webp" alt="SEO Optimized Structure" width={"25px"} />
                        </div>
                        <div><h3 className="mf-t">SEO-Ready Website Structure</h3><p className="mf-d">
                            We build websites with a search-friendly technical foundation, including optimized URLs, meta structure, schema markup, clean code, and proper site architecture. This gives your website a stronger foundation for online visibility and organic search growth            </p></div>
                    </div>
                    <div className="mf-item rev">
                        <div className="mf-icon-box">
                            <img src="/img/icon/feat-page-speed.webp" alt="Page Speed Optimization" width={"25px"} />
                        </div>
                        <div><h3 className="mf-t">Website Speed Optimization</h3><p className="mf-d">
                            From optimized images and clean code to caching and lightweight development practices, we focus on reducing loading times and improving overall website performance. Faster websites create better user experiences and help keep visitors engaged.
                        </p></div>
                    </div>
                    <div className="mf-item rev">
                        <div className="mf-icon-box">
                            <img src="/img/icon/feat-server-hosting.webp" alt="Hosting and Maintenance" width={"25px"} />
                        </div>
                        <div><h3 className="mf-t">Hosting & Website Maintenance</h3><p className="mf-d">
                            We provide reliable hosting setup along with ongoing website maintenance, security monitoring, regular backups, and essential updates. This helps keep your website secure, stable, updated, and available to support your business without unnecessary interruptions.
                        </p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WCUScrollReveal() {
    useEffect(() => {
        const onScroll = () => {
            if (triggeredRef.current || closed) return;
            if (!timerRef.current) {
                timerRef.current = setTimeout(() => {
                    if (!triggeredRef.current && !closed) {
                        setVisible(true);
                        triggeredRef.current = true;
                    }
                }, 3500); // scroll pannina 3.5 sec kalichu popup varum
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [closed]);
    // return null;
}

// ── FAQ Section (from doc 1) ──────────────────────────
function FAQSection() {
    const [active, setActive] = useState(null);
    const toggle = (index) => setActive(active === index ? null : index);

    return (
        <section className="dm-faq-section">
            <div className="container" style={{ width: '100%' }}>
                <div className="dm-faq-head">
                    <h2>Frequently Asked <span>Questions</span></h2>
                </div>
                <div className="dm-faq-wrapper">
                    <div className="dm-faq-col">
                        {faqData.slice(0, 5).map((item, i) => (
                            <div className="dm-faq-item" key={i}>
                                <div className="dm-faq-question" onClick={() => toggle(i)}>
                                    <span>{item.q}</span>
                                    <span className="icon">{active === i ? "−" : "+"}</span>
                                </div>
                                {active === i && <div className="dm-faq-answer">{item.a}</div>}
                            </div>
                        ))}
                    </div>
                    <div className="dm-faq-col">
                        {faqData.slice(5, 10).map((item, i) => (
                            <div className="dm-faq-item" key={i + 5}>
                                <div className="dm-faq-question" onClick={() => toggle(i + 5)}>
                                    <span>{item.q}</span>
                                    <span className="icon">{active === i + 5 ? "−" : "+"}</span>
                                </div>
                                {active === i + 5 && <div className="dm-faq-answer">{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ── CTA Split Section 1 ───────────────────────────────
const CTA_FEATURES1 = [
    "ROI-focused campaigns with transparent reporting",
    "Dedicated account manager for every client",
    "Proven strategies across SEO, PPC & Social Media",
];

// ── Services Slider Section ───────────────────────────
const SERVICE_SLIDES = [
    {
        iconKey: "search",
        tag: "01",
        title: "Search Engine Optimization (SEO)",
        desc: "Improve your search rankings with strategic keyword targeting, technical optimization, and high-quality content. Our SEO services increase organic traffic, visibility, and qualified leads for sustainable long-term digital growth.",
        highlight: "",
    },
    {
        iconKey: "ppc",
        tag: "02",
        title: "Pay Per Click (PPC)",
        desc: "Drive instant visibility and high-intent traffic through performance-driven PPC campaigns. We create optimized ad strategies, compelling creatives, and data-backed targeting to maximize ROI and reduce cost per lead.",
        highlight: "45% lower cost per lead",
    },
    {
        iconKey: "content",
        tag: "03",
        title: "Content Marketing",
        desc: "Build authority and trust with strategic content marketing. From blogs and website copy to campaign messaging, we craft SEO-focused content that educates, engages, and converts your audience.",
        highlight: "2x engagement rate",
    },
    {
        iconKey: "smm",
        tag: "04",
        title: "Social Media Marketing",
        desc: "Strengthen brand presence with data-driven social media strategies. We create engaging content, targeted campaigns, and consistent brand communication that boosts engagement, reach, and customer loyalty.",
        highlight: "50ms avg. load time",
    },
    {
        iconKey: "email",
        tag: "05",
        title: "Email & WhatsApp Marketing ",
        desc: "Nurture leads and retain customers through personalized email and WhatsApp marketing campaigns. We design automation workflows, compelling newsletters, and conversion-focused messaging across both channels to drive engagement, build stronger customer relationships, and grow business effectively.",
        highlight: "60% higher retention",
    },
    {
        iconKey: "graphic",
        tag: "06",
        title: "Graphic Design",
        desc: "Elevate your brand identity with impactful graphic design. From logos and brand kits to social creatives and marketing materials, we create visually compelling designs that communicate professionalism and consistency.",
        highlight: "Real-time dashboards",
    },
    {
        iconKey: "busregcom",
        tag: "07",
        title: "Business Registration & Compliance",
        desc: "Simplify business setup and regulatory compliance with expert guidance. We handle registrations, documentation, statutory filings, and legal processes to ensure smooth, compliant operations.",
        highlight: "Real-time dashboards",
    },
    {
        iconKey: "digitaltrans",
        tag: "08",
        title: "Digital Transformation",
        desc: "Accelerate business growth with digital transformation strategies. We integrate automation, AI tools, analytics, and scalable systems to improve efficiency, decision-making, and long-term competitiveness.",
        highlight: "Real-time dashboards",
    },
    {
        iconKey: "hrservice",
        tag: "09",
        title: "Human Resource Services",
        desc: "Streamline HR operations with structured recruitment, payroll management, HR Strategy ,policy development, and compliance support. Our HR solutions help organizations scale efficiently while maintaining employee satisfaction and regulatory standards.",
        highlight: "Real-time dashboards",
    },
];


const INDUSTRIES_LIST = [
    "Textile",
    "Manufacturing",
    "Healthcare",
    "Tourism & Hospitality",
    "Construction",
    "IT / IT Services",
    "Retail & E-Commerce",
    "Banking, Financial & Insurance",
];

// ── Trusted By / Client Logos Section ─────────────────
const CLIENT_LOGOS = [
    { name: "SterloBuild", img: "/img/landing-page/client-logo-1.webp" },
    { name: "Talent Tribe", img: "/img/landing-page/client-logo-2.webp" },
    { name: "Star Health Finance", img: "/img/landing-page/client-logo-3.webp" },
    { name: "Riya Consultancy", img: "/img/landing-page/client-logo-10.webp" },
    { name: "ZKY", img: "/img/landing-page/client-logo-5.webp" },
    { name: "Sterlo", img: "/img/landing-page/client-logo-6.webp" },
    { name: "SterloCare", img: "/img/landing-page/client-logo-7.webp" },
    { name: "SterloCare", img: "/img/landing-page/client-logo-8.webp" },
];

function TrustedClientsSlider() {
    const cols = 4;
    const row1 = CLIENT_LOGOS.slice(0, cols);
    const row2 = CLIENT_LOGOS.slice(cols);

    return (
        <div className="tc-slider-wrap">
            <div className="tc-fixed-grid">
                <div className="tc-fixed-row">
                    {row1.map((client, i) => (
                        <div className="tc-cell" key={i}>
                            <img src={client.img} alt={client.name} loading="lazy" />
                        </div>
                    ))}
                </div>
                {row2.length > 0 && (
                    <div className="tc-fixed-row tc-fixed-row-last">
                        {row2.map((client, i) => (
                            <div className="tc-cell" key={i}>
                                <img src={client.img} alt={client.name} loading="lazy" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function TrustedClientsSection() {
    return (
        <section className="tc-section">
            <div className="partners-header1" style={{ textAlign: 'center' }}>
                <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>WEBSITE DEVELOPMENT</div>
            </div>

            <h2 className="tech-title svc-main-heading" >
                <span>Best </span> Website Development Company in Coimbatore
            </h2>
            <p className="tech-desc1">
                We at Priyam Consultancy Services are a trusted website development company in Coimbatore, offering complete website design and development services that are affordable, high-quality, and result-oriented. As a leading website development service provider, we build custom web solutions focused on performance, usability, and speed. We specialize in mobile-responsive websites, WordPress and CMS-based development, ecommerce website development, custom static and dynamic websites, portal development, and SEO-ready website structures. As a recognized website design company in Coimbatore, our focus stays on SEO-optimized website design, conversion-friendly layouts, and landing pages that turn visitors into customers, making us a trusted choice for businesses looking for the best website development company.
            </p>
            <div className="tc-inner">
                <TrustedClientsSlider />
            </div>
        </section>
    );
}

function useWindowWidth() {
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
    useEffect(() => {
        const handler = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);
    return width;
}

const testimonials = [
    { index: 0, text: "PCS delivered a modern responsive website with SEO optimization, analytics integration, heatmap tracking, and performance monitoring. We appreciate their team's dedication, technical expertise, and timely support, which significantly improved our online visibility, website performance, and customer engagement.", name: "Mr.Ashwin", role: "Founder", badge: ["Website Development", "SEO"], color: "#004168", logo: "/img/landing-page/testi-logo-5.webp" },
    { index: 1, text: "Our basic single-page website was upgraded into a professionally structured multi-page platform with enhanced SEO, GMB optimization, analytics setup, and customer activity tracking. We thank the PCS team for their commitment, quick support, and valuable contribution in strengthening our online presence.", name: "Mr.Sabarinath", role: "Founder", badge: ["Website Development", "SEO", "Local SEO"], color: "#ed8337", logo: "/img/landing-page/testi-logo-4.webp" },
    { index: 2, text: "A fresh UI design with strong website development, improved online reach, lead capture setup, and user activity insights was successfully developed by the PCS team. Every change request was handled patiently while turning our ideas into exactly what we expected. The late-night support before launch was truly appreciated.", name: "Mr.Clement Selvam", role: "Founder", badge: ["Website Development", "SEO"], color: "#16a34a", logo: "/img/landing-page/testi-logo-3.webp" },
    { index: 3, text: "As a growing forest-based natural products brand, we partnered with PCS to expand our store presence and online sales. PCS team developed a complete e-commerce platform with Razorpay setup, order management, inventory tracking, centralized dashboard, WhatsApp integration for smooth business operations.", name: "Mr.Karupasamy", role: "Director", badge: ["E-Commerce", "SEO", "Local SEO"], color: "#0a3652", logo: "/img/landing-page/testi-logo-1.webp" },
    { index: 4, text: "Competing in the global market we required a website that matched international standards. With strategic content, SEO optimization, analytics integration, and performance enhancements, our digital presence was significantly strengthened. We appreciate the PCS team for their expertise, flexibility, consistent support throughout the process.", name: "Mr.Gunasekaran", role: "Founder", badge: ["SEO", "Content Marketing", "Paid Ads"], color: "#f47920", logo: "/img/landing-page/testi-logo-2.webp" },
];

function getTestimonialPos(cardIndex, activeIndex, total, isMobile) {
    const diff = cardIndex - activeIndex;
    if (diff === 0) return "center";
    if (isMobile) return diff < 0 ? "farLeft" : "farRight";
    if (diff === -1 || diff === total - 1) return "left";
    if (diff === 1 || diff === -(total - 1)) return "right";
    if (diff < 0) return "farLeft";
    return "farRight";
}

function getTestimonialPosStyles(isMobile, isTablet) {
    const leftX = isTablet ? -220 : -300;
    const rightX = isTablet ? 220 : 300;
    const farLeftX = isTablet ? -380 : -490;
    const farRightX = isTablet ? 380 : 490;
    return {
        center: { transform: "translateX(0) scale(1) rotateY(0deg)", opacity: 1, filter: "none", zIndex: 10, boxShadow: "0 24px 64px rgba(13,31,60,0.14)", pointerEvents: "auto" },
        left: { transform: `translateX(${leftX}px) scale(0.85) rotateY(18deg)`, opacity: 0.55, filter: "blur(2px)", zIndex: 5, boxShadow: "none", pointerEvents: "auto" },
        right: { transform: `translateX(${rightX}px) scale(0.85) rotateY(-18deg)`, opacity: 0.55, filter: "blur(2px)", zIndex: 5, boxShadow: "none", pointerEvents: "auto" },
        farLeft: { transform: `translateX(${farLeftX}px) scale(0.7) rotateY(28deg)`, opacity: 0, filter: "blur(4px)", zIndex: 1, boxShadow: "none", pointerEvents: "none" },
        farRight: { transform: `translateX(${farRightX}px) scale(0.7) rotateY(-28deg)`, opacity: 0, filter: "blur(4px)", zIndex: 1, boxShadow: "none", pointerEvents: "none" },
    };
}

function StarIcon() {
    return (
        <svg width={14} height={14} viewBox="0 0 24 24" fill="#f47920" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );
}

function TestimonialCard({ data, pos, onClick, isMobile, isTablet, isActive }) {
    const posStyles = getTestimonialPosStyles(isMobile, isTablet);
    const cardWidth = isMobile
        ? Math.min((typeof window !== "undefined" ? window.innerWidth : 360) - 40, 320)
        : isTablet ? 300 : 340;
    return (
        <div
            onClick={onClick}
            data-active={isActive ? "true" : "false"}
            style={{
                position: "absolute",
                width: cardWidth,
                background: "#ffffff",
                borderRadius: 20,
                padding: isMobile ? "20px 18px" : 32,
                cursor: "pointer",
                transition: "all 0.55s cubic-bezier(0.4,0,0.2,1)",
                userSelect: "none",
                display: "flex",
                flexDirection: "column",
                boxSizing: "border-box",
                top: 0,                  /* ← margin-top bug fix: top:0 + alignItems:flex-start on parent */
                ...posStyles[pos],
            }}
        >
            <div style={{ fontSize: isMobile ? 28 : 36, color: "#f47920", lineHeight: 1, fontFamily: "Georgia, serif", marginBottom: 8 }}>"</div>
            <div style={{ fontSize: isMobile ? 11.5 : 13, color: "#3d4f6a", lineHeight: isMobile ? 1.65 : 1.75, marginBottom: isMobile ? 14 : 22, flex: 1, fontWeight: 400 }}>{data.text}</div>
            <div style={{ height: 1, background: "#f0f2f7", marginBottom: isMobile ? 10 : 16 }} />

            <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <div style={{ fontSize: isMobile ? 13 : 15, fontWeight: 700, color: "#0d1f3c" }}>{data.name}</div>
                    <div style={{ fontSize: 11, color: "#6b7a94", lineHeight: 1.4, fontWeight: 400 }}>{data.role}</div>
                </div>

                {data.logo && (
                    <img
                        src={data.logo}
                        alt={`${data.name} company logo`}
                        style={{
                            height: isMobile ? 24 : 30,
                            maxWidth: isMobile ? 60 : 80,
                            objectFit: "contain",
                            flexShrink: 0,
                        }}
                    />
                )}
            </div>
        </div>
    );
}

function TestimonialSlider() {
    const [current, setCurrent] = useState(2);
    const timerRef = useRef(null);
    const touchX = useRef(null);
    const stageRef = useRef(null);
    const [stageHeight, setStageHeight] = useState(380);
    const total = testimonials.length;
    const width = useWindowWidth();
    const isMobile = width < 640;
    const isTablet = width >= 640 && width < 1024;

    /* ── Dynamic stage height: measure the active card after render ── */
    useEffect(() => {
        if (!stageRef.current) return;
        const activeCard = stageRef.current.querySelector("[data-active='true']");
        if (activeCard) {
            const h = activeCard.getBoundingClientRect().height;
            if (h > 0) setStageHeight(h + 8);  /* +8 tiny breathing room */
        }
    }, [current, width]);

    const startAuto = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % total), 3000);
    };
    useEffect(() => { startAuto(); return () => clearInterval(timerRef.current); }, []);

    const goTo = (idx) => { setCurrent(idx); startAuto(); };

    /* ── Touch swipe handlers ── */
    const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) < 40) return;          /* ignore tiny taps */
        if (dx < 0) goTo((current + 1) % total);
        else goTo((current - 1 + total) % total);
    };

    return (
        <section style={{ width: "100%", margin: "0 auto", padding: isMobile ? "40px 16px" : "60px 20px", fontFamily: "'Poppins', sans-serif", overflow: "hidden", background: '#fff' }} id="testimonials">
            <div className="partners-header1" style={{ marginBottom: isMobile ? 12 : 16, textAlign: "center" }}>
                <div className="partners-eyebrow" style={{ marginBottom: "12px", textAlign: "start" }}>Client Testimonials</div>
            </div>
            <h2 style={{ fontSize: isMobile ? 22 : isTablet ? 28 : "clamp(28px,3vw,40px)", fontWeight: 700, color: "#0d1f3c", lineHeight: 1.25, marginBottom: isMobile ? 28 : 48, textAlign: "center" }}>
                What Our Clients{" "}
                <span style={{ color: "#f47920", fontStyle: "italic", fontWeight: 700 }}>Say About PCS</span>
            </h2>

            {/* Stage — alignItems:flex-start so cards grow downward, no margin-top */}
            <div
                ref={stageRef}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                style={{
                    position: "relative",
                    height: stageHeight,
                    display: "flex",
                    alignItems: "flex-start",   /* ← key fix: cards anchor at top, no phantom margin */
                    justifyContent: "center",
                    perspective: 1200,
                    marginBottom: 28,
                    transition: "height 0.4s ease",
                }}
            >
                {testimonials.map((t, i) => {
                    const pos = getTestimonialPos(i, current, total, isMobile);
                    return (
                        <TestimonialCard
                            key={t.index}
                            data={t}
                            pos={pos}
                            isActive={pos === "center"}
                            onClick={() => { if (i !== current) goTo(i); }}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />
                    );
                })}
            </div>

            {/* Dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, alignItems: "center" }}>
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        style={{
                            width: i === current ? 22 : 9,
                            height: 9,
                            borderRadius: 9,
                            padding: 0,
                            outline: "none",
                            cursor: "pointer",
                            flexShrink: 0,
                            transition: "all 0.3s ease",
                            background: i === current ? "#f47920" : "transparent",
                            border: i === current ? "none" : "1.8px solid #b0b8c9",
                        }}
                    />
                ))}
            </div>

            {/* Mobile swipe hint */}
            {isMobile && (
                <p style={{ textAlign: "center", fontSize: 11, color: "#b0b8c9", marginTop: 14, letterSpacing: "0.03em" }}>
                    ← swipe to explore →
                </p>
            )}
        </section>
    );
}

// ── Technologies Marquee Section ─────────────────────
function TechnologiesSection() {
    const row1 = [
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Shopify", logo: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/15.16.0/shopify.svg" },
    ];
    const row2 = [
        { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
        { name: "Elementor", logo: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/15.16.0/elementor.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Shopify", logo: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/15.16.0/shopify.svg" },

    ];

    // Duplicate each row so seamless infinite scroll works
    const doubled1 = [...row1, ...row1];
    const doubled2 = [...row2, ...row2];

    return (
        <section className="tech-section" id="technologies" >
            <div className="tech-header">
                <div className="partners-header1" style={{ textAlign: 'center' }}>
                    <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Technology Stack
                    </div>
                </div>
                <h2 className="tech-title">
                    Technologies We <span>Work With</span>
                </h2>
                <p className="tech-desc">
                    We use trusted technologies, frameworks, and platforms to build fast, secure, scalable, and high-performing websites tailored to your business needs.
                </p>
            </div>

            {/* Row 1 — scrolls RIGHT (left-to-right direction) */}
            <div className="tech-track-wrap" style={{ marginBottom: 20 }}>
                <div className="tech-row">
                    <div className="tech-row-inner row-right speed-1">
                        {doubled1.map((t, i) => (
                            <div className="tech-card" key={i}>
                                <img src={t.logo} alt={t.name} className="tech-card-logo" />
                                <span className="tech-card-name">{t.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Row 2 — scrolls LEFT (right-to-left direction) */}
            <div className="tech-track-wrap">
                <div className="tech-row">
                    <div className="tech-row-inner row-left speed-2">
                        {doubled2.map((t, i) => (
                            <div className="tech-card" key={i}>
                                <img src={t.logo} alt={t.name} className="tech-card-logo" />
                                <span className="tech-card-name">{t.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ── Our Services Section ──────────────────────────────
function OurServicesSection() {
    const services = [
        {
            img: "/img/landing-page/static-website.webp",
            title: "Website Design",
            desc: "Website designs that strengthen your brand and turn visitors into loyal customers through engaging experiences and strategic design.",
            features: ["Premium UI/UX Layouts", "User-Friendly Designs", "Modern visuals with custom icons and buttons"],
            href: "/website-design",
            price: "₹7,500",
        },
        {
            img: "/img/landing-page/website-design.webp",
            title: "Static Website Development",
            desc: "Affordable single-page websites with essential SEO, designed to help startups and growing businesses attract customers and build credibility online.",
            features: ["Standard Design Template", "Fast Loading Page", "Mobile Responsive"],
            href: "/static-website-development",
            price: "₹7,500",
        },
        {
            img: "/img/landing-page/custom-website-development.webp",
            title: "Custom Website Development",
            desc: "Get a customized website tailored to your business, industry, and specific requirements, designed to support your business growth",
            features: ["Custom Features & Third-Party Integration", "User-friendly website flow", "High-performance & SEO-ready"],
            href: "/custom-website-development",
            price: "₹15,000",
        },
        {
            img: "/img/landing-page/woo-commerce.webp",
            title: "WooCommerce Development",
            desc: "High-performing WooCommerce stores designed to attract more customers, increase online sales, and simplify the buying process.",
            features: ["Inventory & Order Tracking", "Payment Gateway Integration", "Store & Product Management"],
            href: "/woocommerce-website-development",
            price: "₹20,000",
        },
        {
            img: "/img/landing-page/ecommerce-development.webp",
            title: "Custom E-Commerce Development",
            desc: "Complete E-commerce Features Built to Improve Shopping Experiences, Drive More Sales, and Grow Your Online Business.",
            features: ["Shopify store & product setup", "Payment and Shipping Integration", "SEO Ready and Mobile Responsive"],
            href: "/e-commerce-website-development",
            price: "₹25,000",
        },
        {
            img: "/img/landing-page/shopify.webp",
            title: "Shopify Development",
            desc: "Scalable Shopify stores built to increase sales, enhance customer experiences, and support sustainable long-term business growth. ",
            features: ["Custom Product & Category Setup", "Customer Login & Account Management", "Shopping Cart & Easy Checkout Process"],
            href: "/shopify-website-development",
            price: "₹22,000",
        },
    ];

    return (
        <section id="service" style={{ padding: "70px 5% 5rem", background: '#fff' }} >
            <div className="partners-header1" style={{ textAlign: 'center' }}>
                <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>What We  Build</div>
            </div>

            <h2 className="tech-title svc-main-heading">
                <span>What Kind of Website Does </span> Your Business Need?
            </h2>
            <p style={{ textAlign: "center", maxWidth: 1200, margin: "20px auto 60px", color: "#666", lineHeight: 1.8, fontSize: "0.96rem" }}>
                Every business is different. Every website we make is different too. We offer services, each one designed to fit your budget, timeline and growth targets.
            </p>
            <div className="svc-grid">
                {services.map((svc, i) => (
                    <div
                        key={i}
                        style={{
                            background: "#fff",
                            borderRadius: 24,
                            padding: "30px 30px 2px 30px",
                            boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
                            borderTop: "5px solid #ed8337",
                            display: "flex",
                            flexDirection: "column",
                            transition: "transform 0.35s ease, box-shadow 0.35s ease",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.12)"; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 35px rgba(0,0,0,0.08)"; }}
                    >
                        <img src={svc.img} alt={svc.title} style={{ width: "90%", objectFit: "contain", margin: "0 auto 20px" }} />
                        <h3 style={{ color: "#004168", fontSize: 18, marginBottom: 15, fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
                            {svc.title}
                        </h3>
                        <p style={{ color: "#666", lineHeight: 1.8, marginBottom: 20, fontSize: "0.9rem" }}>
                            {svc.desc}
                        </p>
                        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
                            {svc.features.map((f, j) => (
                                <li key={j} style={{ position: "relative", paddingLeft: 30, marginBottom: 12, color: "#444", lineHeight: 1.6, fontSize: "0.9rem" }}>
                                    <span style={{ position: "absolute", left: 0, top: 0, color: "#ed8337", fontWeight: "bold", fontSize: 18 }}>✓</span>
                                    {f}
                                </li>
                            ))}
                        </ul>

                        <div className="svc-card-price-row">
                            <span className="svc-card-price">
                                From <strong>{svc.price}</strong>
                            </span>
                            <a href="tel:+919677444048" className="svc-card-call">
                                Call <span>→</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

// ── Portfolio Grid Data — replace img/link with your real ones ──
const PORTFOLIO_GRID_ITEMS = [
    { img: "/img/landing-page/protfoilo-1.webp", category: "E - Commerce", title: "Feral Roots ", link: "" },
    { img: "/img/landing-page/protfoilo-2.webp", category: "HR Background Verification ", title: "ZKY Technologies ", link: "" },
    { img: "/img/landing-page/protfoilo-3.webp", category: "Enterprise SaaS / No-Code-Low-Code Platform ", title: "Sterlo", link: "" },
    { img: "/img/landing-page/protfoilo-4.webp", category: "Digital Transformation ", title: "ABB Management Consulting ", link: "" },
    { img: "/img/landing-page/protfoilo-5.webp", category: "Design & Construction ", title: "URC Technology Services", link: "" },
    { img: "/img/landing-page/protfoilo-6.webp", category: "Accounting ", title: "RIYA Consultancy  ", link: "" },
    { img: "/img/landing-page/protfoilo-7.webp", category: "Healthcare", title: "SterloCare ", link: "" },
    { img: "/img/landing-page/protfoilo-8.webp", category: "HR Consultancy ", title: "Talent Tribe ", link: "" },

];

function PortfolioSection() {
    const width = useWindowWidth();
    const isMobile = width < 768;

    return (
        <section className="pf-grid-section" id="portfolio">
            <div className="pf-grid-inner">
                <div
                    className="pf-grid-header"
                    style={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        justifyContent: "space-between",
                        alignItems: isMobile ? "flex-start" : "center",
                        gap: isMobile ? "24px" : "3rem",
                        flexWrap: "wrap",
                    }}
                >
                    {/* LEFT: eyebrow + heading + desc */}
                    <div style={{ textAlign: "left", width: "100%", maxWidth: '650px' }}>
                        <div
                            className="partners-eyebrow"
                            style={{ marginBottom: isMobile ? "12px" : "20px", textAlign: "left" }}
                        >
                            Our Recent Work
                        </div>

                        <h2
                            className="pf-grid-heading"
                            style={{
                                textAlign: "left",
                                fontSize: isMobile ? "1.6rem" : undefined,
                                lineHeight: isMobile ? 1.3 : undefined,
                            }}
                        >
                            <span className="navy">Websites We've Built That</span>{" "}
                            <span className="orange">Are Already Driving Results</span>
                        </h2>

                        <p
                            className="pf-grid-desc"
                            style={{
                                textAlign: "left",
                                maxWidth: isMobile ? "100%" : "560px",
                                fontSize: isMobile ? "0.9rem" : undefined,
                            }}
                        >
                            Discover our latest website projects showcasing thoughtful design,
                            seamless user experiences, and modern development across diverse
                            industries.
                        </p>
                    </div>

                    {/* RIGHT: button */}
                    <a
                        href="#get-in-touch-form"
                        className="pf-grid-viewmore-btn"
                        style={{
                            flexShrink: 0,
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "10px",
                            background: "#ed8337",
                            color: "#fff",
                            fontWeight: 600,
                            padding: isMobile ? "12px 24px" : "14px 28px",
                            borderRadius: "50px",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            width: isMobile ? "100%" : "auto",
                            fontSize: isMobile ? "0.9rem" : undefined,
                        }}
                    >
                        Launch Your Website 
                        <span className="pf-grid-viewmore-arr">→</span>
                    </a>
                </div>

                <div
                    className="pf-grid-cards"
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : undefined,
                        gap: isMobile ? "16px" : undefined,
                        marginTop: isMobile ? "24px" : undefined,
                    }}
                >
                    {PORTFOLIO_GRID_ITEMS.map((item, i) => {
                        const Card = (
                            <>
                                <div className="pf-grid-card-img-wrap">
                                    <img src={item.img} alt={item.title} loading="lazy" />
                                </div>
                                <div className="pf-grid-card-category">{item.category}</div>
                                <div className="pf-grid-card-title">{item.title}</div>
                            </>
                        );
                        return item.link ? (
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="pf-grid-card" key={i}>
                                {Card}
                            </a>
                        ) : (
                            <div className="pf-grid-card" key={i}>{Card}</div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function useCtaCanvas(canvasRef) {
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const ORANGE = "#ed8337";
        let W, H, particles = [], raf;

        function resize() {
            W = canvas.width = canvas.parentElement.offsetWidth;
            H = canvas.height = canvas.parentElement.offsetHeight;
        }

        function Particle() { this.reset(); }
        Particle.prototype.reset = function () {
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
        Particle.prototype.update = function () {
            this.x += Math.cos(this.dir) * this.speed;
            this.y += Math.sin(this.dir) * this.speed;
            this.pulse += this.pulseSpeed;
            this.dir += (Math.random() - 0.5) * 0.015;
            if (this.x < -20) this.x = W + 20;
            if (this.x > W + 20) this.x = -20;
            if (this.y < -20) this.y = H + 20;
            if (this.y > H + 20) this.y = -20;
        };
        Particle.prototype.draw = function () {
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
                ctx.beginPath(); ctx.arc(this.x, this.y, rr, 0, Math.PI * 2); ctx.stroke();
            } else {
                const s = this.size * (0.9 + 0.1 * Math.sin(this.pulse));
                ctx.beginPath();
                ctx.moveTo(this.x - s, this.y); ctx.lineTo(this.x + s, this.y);
                ctx.moveTo(this.x, this.y - s); ctx.lineTo(this.x, this.y + s);
                ctx.stroke();
            }
            ctx.restore();
        };

        function drawLines() {
            const dots = particles.filter(p => p.type === "dot");
            for (let i = 0; i < dots.length; i++) {
                for (let j = i + 1; j < dots.length; j++) {
                    const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 110) {
                        ctx.save();
                        ctx.globalAlpha = (1 - dist / 110) * 0.12;
                        ctx.strokeStyle = ORANGE; ctx.lineWidth = 0.7;
                        ctx.beginPath(); ctx.moveTo(dots[i].x, dots[i].y); ctx.lineTo(dots[j].x, dots[j].y); ctx.stroke();
                        ctx.restore();
                    }
                }
            }
        }

        function init() {
            resize();
            particles = [];
            const count = Math.floor((W * H) / 9000);
            for (let i = 0; i < Math.max(count, 28); i++) particles.push(new Particle());
        }

        function loop() {
            ctx.clearRect(0, 0, W, H);
            drawLines();
            particles.forEach(p => { p.update(); p.draw(); });
            raf = requestAnimationFrame(loop);
        }

        window.addEventListener("resize", resize);
        init();
        loop();

        return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
    }, []);
}

function CallCTASection() {
    const canvasRef = useRef(null);
    useCtaCanvas(canvasRef);

    return (
        <section className="call-cta-section">
            <canvas ref={canvasRef} className="call-cta-particles" />

            <div className="call-cta-inner">
                <div className="partners-header1" style={{ textAlign: 'center' }}>
                    <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Not Sure Which Website You Need? </div>
                </div>

                <h2 className="call-cta-heading">
                  Tell Us About  <span>Your Business
</span>
                </h2>

                <p className="call-cta-sub">

We'll recommend the right website type, features and approximate investment based on your actual requirements.
                </p>

                <a href="tel:+919677444048" className="call-cta-phone">
                    <span className="call-cta-phone-icon">
                        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                    </span>
                    <span className="call-cta-phone-number">
                        <span className="tone-1">+91 </span>
                        <span className="tone-2">96774</span>{" "}
                        <span className="tone-3">44048</span>
                    </span>
                </a>

               <div className="call-cta-btns">
    <a href="tel:+919677444048" className="call-cta-btn-fill">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
       Get Your Website Started Today
    </a>
    <a
        href="https://wa.me/919677444048"
        target="_blank"
        rel="noopener noreferrer"
        className="call-cta-btn-outline"
    >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.79 14.13c-.24.68-1.19 1.25-1.94 1.41-.52.11-1.2.2-3.48-.75-2.92-1.21-4.8-4.17-4.95-4.36-.14-.19-1.19-1.58-1.19-3.02s.75-2.15 1.02-2.44c.24-.27.52-.34.7-.34h.5c.16 0 .38-.03.59.45.24.56.79 1.94.86 2.08.07.14.11.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.14-.29.29-.12.57.16.28.73 1.2 1.57 1.95 1.08.96 1.99 1.26 2.27 1.4.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.54.33.06.12.06.68-.18 1.36z"/>
        </svg>
        WhatsApp Us
    </a>
</div>
            </div>
        </section>
    );
}

// ── Footer Section ────────────────────────────────────
function FooterSection() {
    return (
        <footer className="pcs-footer" id="contact">
            <div className="pcs-footer-inner">
                {/* Column 1: Logo + Description */}
                <div>
                    <div className="pcs-footer-logo-row">
                        <img src="/img/footer-logo.png" alt="PCS Logo" width="30%" />
                    </div>
                    <p className="pcs-footer-desc">
                        We are one of the fastest-growing full-service business solutions companies, delivering cutting-edge, result-driven strategies across digital marketing, technology, branding, and consulting to create the perfect blend of innovation and impact.
                    </p>
                </div>

                {/* Column 2: Contact Info */}
                <div>
                    <h4 className="pcs-footer-heading">Contact Info</h4>
                    <div className="pcs-footer-contact-item">
                        <div className="pcs-footer-contact-icon">
                            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </div>
                        <div className="pcs-footer-contact-text">
                            <a href="tel:+919677444048">+91 96774 44048</a>
                        </div>
                    </div>
                    <div className="pcs-footer-contact-item">
                        <div className="pcs-footer-contact-icon">
                            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        </div>
                        <div className="pcs-footer-contact-text">
                            <a href="https://maps.app.goo.gl/Qh3YkXsp1nktfp9k9">1st Floor, SF.11/4, Pooja Garden, Kalapatti Road, Civil Aerodrome Post, Coimbatore - 641014</a>
                        </div>
                    </div>
                    <div className="pcs-footer-contact-item">
                        <div className="pcs-footer-contact-icon">
                            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
                        </div>
                        <div className="pcs-footer-contact-text">
                            <a href="mailto:sales@priyamconsultancy.com">sales@priyamconsultancy.com</a>
                        </div>
                    </div>
                    <div className="pcs-footer-socials">
                        <a href="https://www.linkedin.com/company/priyam-consultancy-services/" target="_blank" rel="noopener noreferrer" className="pcs-footer-social-btn pcs-footer-social-linkedin" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="#fff"><path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" /></svg>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61577125709962" target="_blank" rel="noopener noreferrer" className="pcs-footer-social-btn pcs-footer-social-facebook" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" fill="#fff"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/priyam_consultancy_services/" target="_blank" rel="noopener noreferrer" className="pcs-footer-social-btn pcs-footer-social-instagram" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.6" /><circle cx="17.4" cy="6.6" r="0.9" fill="#fff" stroke="none" /></svg>
                        </a>
                        <a href="https://x.com/services91032" target="_blank" rel="noopener noreferrer" className="pcs-footer-social-btn pcs-footer-social-x" aria-label="X">
                            <svg viewBox="0 0 24 24" fill="#fff"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.5 22H1.4l8.1-9.3L1 2h7.2l5 6.6L18.9 2zm-1.2 18h1.7L7.4 4H5.6l12.1 16z" /></svg>
                        </a>
                    </div>
                </div>

                {/* Column 3: Contact Form */}
                <div className="pcs-footer-form-col" id="get-in-touch-form">
                    <div className="hero-form-card">
                        <p className="hero-form-title">Your Growth, <span>Our Mission.</span></p>
                        <p className="hero-form-sub">Fill in your details — we'll get back within 24 hours.</p>
                        <HeroContactForm />
                    </div>
                </div>
            </div>
        </footer>
    );
}

// ── Scroll-Triggered Stepper Popup Form ──
const STEPPER_SERVICES = [
    { key: "web", icon: "💻", label: "Website Design & Development" },
    { key: "app", icon: "📱", label: "E-Commerce / Online Store" },
    { key: "marketing", icon: "📈", label: "Landing Page" },
    { key: "branding", icon: "💡", label: "Website Revamp & SEO" },
];


// ── Page Export ───────────────────────────────────────
export default function DigitalMarketingNewPage() {
    const [formOpen, setFormOpen] = useState(false);

    return (
        <Layout
            title="Best Website Development Company in Coimbatore | PCS "
            description="Break away from ordinary business websites. Priyam Consultancy Services develops next-generation, SEO-optimized websites that help Coimbatore brands stand out."
        >
            <SEOHead />
            <GlobalStyles />
            <SiteHeader />
            <HeroSection />
            <ClientLogosMarquee />
            <TrustedClientsSection />
            <OurServicesSection />
            <PortfolioSection />
            <BuildTogetherCTASection />
            <TechnologiesSection />
            <ModernFeaturesSection />
            <TestimonialSlider />
            <FAQSection />
            <CallCTASection />
            <FooterSection />
        </Layout>
    );
}