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
    { q: "What does a website development company do?", a: "A website development company plans and designs. Builds a website from the ground up." },
    { q: "How is a static website different from a dynamic one?", a: "A static website shows the content to every visitor, while a dynamic website pulls content from a database and can change based on the visitor." },
    { q: "How do I know if I'm hiring the website development company for my project?", a: "Ask for case studies request references. Confirm they can support your site after launch. " },

    { q: "What should I look for in a website development service?", a: "Look for a provider that offers communication, a portfolio of real results, transparent pricing and post-launch support." },
    { q: "How long does website design and development usually take?", a: "Timelines vary by scope. A simple static site can be completed in a couple of weeks, while a custom or e-commerce build takes several weeks to a few months." },
    { q: "What makes an e-commerce development company from a general web developer?", a: "An e-commerce development company specializes in the systems for online selling, such as secure checkout and payment gateway integration." },
];


// ── Site Header ────────────────────────────────────────
function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = [
        { label: "About", href: "#about" },
        { label: "Service", href: "#service" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Case Study", href: "#our-case-studies" },
        { label: "Features", href: "#feature" },
    ];

    return (
        <header className="pcs-site-header-wrap">


            <div className="pcs-site-header">
                {/* LOGO */}
                <div className="pcs-header-logo">
                    <img src="/img/priyam-consultancy-logo.png" alt="Priyam Consultancy Services" />
                </div>

                {/* DESKTOP NAV */}
                <ul className="pcs-header-nav">
                    {navLinks.map((item, i) => (
                        <li key={i}><a href={item.href}>{item.label}</a></li>
                    ))}
                </ul>

                {/* ENQUIRE BUTTON — always visible */}
                <a href="#about" className="pcs-header-enquire-btn">
                    Enquire Now
                    <span>→</span>
                </a>

                {/* HAMBURGER / CLOSE TOGGLE — mobile only */}
                <button
                    type="button"
                    className={`pcs-header-toggle${menuOpen ? " open" : ""}`}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMenuOpen((o) => !o)}
                >
                    <span /><span /><span />
                </button>
            </div>

            {/* FULL-WIDTH DROPDOWN — mobile only */}
            <div className={`pcs-mobile-dropdown${menuOpen ? " open" : ""}`}>
                <ul className="pcs-mobile-links">
                    {navLinks.map((item, i) => (
                        <li key={i}>
                            <a
                                href={item.href}
                                className={i === 0 ? "active" : ""}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pcs-mobile-bar" />
        </header>
    );
}

// ── Hero ────────────────────────────────────────────

function HeroSection() {
    return (
        <section className="hero" id="about" >
            {/* <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
 
        :root {
          --navy:      #004168;
          --navy-deep: #011a2a;
          --navy-mid:  #0a3652;
          --orange:    #ed8337;
          --orange-l:  #f5a66b;
          --dim:       rgba(255,255,255,0.45);
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Poppins', sans-serif; color: #fff; overflow-x: hidden; }
 
       
      `}</style> */}

            {/* LEFT CONTENT */}
            <div className="hero-left">
                <div className="h-badge"><div className="badge-dot" />Web Development</div>
                <h1 className="hero-heading">
                    Trusted
                    <span className="hl lined" > Website Development </span>
                    Company in Coimbatore Delivering Real Growth
                </h1>
                <p className="hero-sub">
                    We design and build fast, mobile-ready websites that help you get found, get leads, and grow — without the jargon, delays, or guesswork. From business websites to full online stores, every site we build is tailored to your industry and made to work for your business, not just look good.
                </p>

                <div className="hero-stats-grid">
                    <div className="hero-stat-card">
                        <div className="hero-stat-icon-box">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ed8337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="16 18 22 12 16 6" />
                                <polyline points="8 6 2 12 8 18" />
                            </svg>
                        </div>
                        <div className="hero-stat-text">
                            <span className="hero-stat-value">15+</span>
                            <span className="hero-stat-label">Technologies & Platforms</span>
                        </div>
                    </div>

                    <div className="hero-stat-card">
                        <div className="hero-stat-icon-box">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ed8337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        </div>
                        <div className="hero-stat-text">
                            <span className="hero-stat-value">98%</span>
                            <span className="hero-stat-label">Client Satisfaction</span>
                        </div>
                    </div>

                    <div className="hero-stat-card">
                        <div className="hero-stat-icon-box">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ed8337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="7" width="18" height="13" rx="2" />
                                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                            </svg>
                        </div>
                        <div className="hero-stat-text">
                            <span className="hero-stat-value">10+</span>
                            <span className="hero-stat-label">Industries Served</span>
                        </div>
                    </div>

                    <div className="hero-stat-card">
                        <div className="hero-stat-icon-box">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ed8337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                            </svg>
                        </div>
                        <div className="hero-stat-text">
                            <span className="hero-stat-value">30-Day</span>
                            <span className="hero-stat-label">Free Support</span>
                        </div>
                    </div>

                    <div className="hero-stat-card">
                        <div className="hero-stat-icon-box">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ed8337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="3" />
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                            </svg>
                        </div>
                        <div className="hero-stat-text">
                            <span className="hero-stat-value">100%</span>
                            <span className="hero-stat-label">Customisable Designs</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT CONTACT FORM */}
            <div className="hero-right" id="get-in-touch-form">
                <div className="hero-form-card">
                    {/* <style>{`
          
          `}</style> */}

                    <p className="hero-form-title">Your Growth, <span>Our Mission.</span></p>
                    <p className="hero-form-sub">Fill in your details — we'll get back within 24 hours.</p>
                    <HeroContactForm />
                </div>
            </div>
        </section>
    );
}

function HeroContactForm() {
    const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", msg: "" });

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
                setForm({ name: "", email: "", phone: "", company: "", msg: "" });
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to send ❌");
            });
    };

    return (
        <form onSubmit={sendEmail}>
            <div className="hero-form-row">
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
            </div>

            <div className="hero-form-row">
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
            </div>

            <div className="hero-form-row">
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

            <div className="hero-form-row">
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

// ── CTA Split Section ─────────────────────────────────
function CTASplitSection() {
    return (
        <section className="pg-cta-section">
            <div className="pg-cta-inner">
                <div className="pg-cta-img-wrap">
                    <img src="/img/landing-page/trusted-partners.webp" alt="PCS Digital Marketing Team in Coimbatore" className="pg-cta-img" />

                </div>
                <div>
                    <div className="partners-header1" >
                        <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Trusted Website Partner
                        </div>
                    </div>
                    <h2 className="pg-cta-heading">Why We Are Recognized as the   <em>Best Website Development Company in Coimbatore</em>
                    </h2>
                    <p className="pg-cta-desc">
                        We have built our reputation one project at a time. We treat every client's website like it is our business. From a website to a full e-commerce development, our focus is on usable design, clean code and measurable outcomes.

                    </p>
                    <p className="pg-cta-desc2">
                        Businesses partner with us because we combine strategy with execution. We do not just build a good-looking site but one that is structured to load quickly and convert.

                    </p>
                </div>
            </div>
        </section>
    );
}

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
                        fontSize: "clamp(1.55rem, 2.4vw, 2.1rem)",
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
            <div className="partners-header1" style={{ textAlign: "center" }}>
                <h2 className="partners-eyebrow" style={{ marginBottom: "20px", textAlign: "center" }}>Frequently Asked Questions</h2>
            </div>
            <div className="container" style={{ width: '100%' }}>
                <div className="dm-faq-head">
                    <h3>Queries That Could <span>Hold You Back</span></h3>
                </div>
                <div className="dm-faq-wrapper">
                    <div className="dm-faq-col">
                        {faqData.slice(0, 3).map((item, i) => (
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
                        {faqData.slice(3, 6).map((item, i) => (
                            <div className="dm-faq-item" key={i + 3}>
                                <div className="dm-faq-question" onClick={() => toggle(i + 3)}>
                                    <span>{item.q}</span>
                                    <span className="icon">{active === i + 3 ? "−" : "+"}</span>
                                </div>
                                {active === i + 3 && <div className="dm-faq-answer">{item.a}</div>}
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


function MilestonesCTA() {
    return (
        <section className="ms-cta-section">


            <div className="ms-cta-glow-l" />
            <div className="ms-cta-glow-r" />
            <div className="ms-cta-line-top" />

            <div className="ms-cta-inner">
                <div className="ms-cta-left">
                    <div className="partners-header1">
                        <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>
                            READY TO GROW ONLINE?
                        </div>
                    </div>
                    <h2 className="ms-cta-title">
                        Turn Your  <span>Business Idea Into </span><br />  a Website That Works

                    </h2>
                    <p className="ms-cta-desc">
                        Whether you need a corporate website, e-commerce store, or custom web solution, our team can help you build a fast, responsive, and SEO-ready website designed around your business goals.
                    </p>
                </div>

                <div className="ms-cta-right">


                    <a href="#about" className="ms-cta-btn-primary">
                        Discuss Your Project

                        <span className="ms-cta-btn-arr">→</span>
                    </a>


                </div>
            </div>

            <div className="ms-cta-line-bottom" />
        </section>
    );
}

const PORTFOLIO_COL1 = [
    { img: "/img/portfolio/urcts.webp", label: "URCTS", tag: "", link: "https://www.urcts.in/" },
    { img: "/img/portfolio/tgcc.webp", label: "TGCC", tag: "", link: "" },
    { img: "/img/portfolio/zky.webp", label: "ZKY", tag: "", link: "https://zky.co.in/" },
    { img: "/img/portfolio/abb.webp", label: "ABB", tag: "", link: "https://abbmc.in/" },
    { img: "/img/portfolio/riya.webp", label: "Riya consultancy", tag: "", link: "https://www.riyaconsultancy.com/" },
];
const PORTFOLIO_COL2 = [
    { img: "/img/portfolio/feralroots.webp", label: "Feral Roots", tag: "", link: "https://feralroots.in/" },
    { img: "/img/portfolio/sterlocare.webp", label: "SterloCare", tag: "", link: "https://sterlocare.com/" },
    { img: "/img/portfolio/sterlo.webp", label: "Sterlo", tag: "", link: "https://sterlo.io/" },
    { img: "/img/portfolio/talenttribe.webp", label: "Talent Tribe", tag: "", link: "https://talenttribe.in/" },
    { img: "/img/portfolio/sterlobuild.webp", label: "SterloBuild", tag: "", link: "https://www.sterlobuild.com/" },
];
const PORTFOLIO_COL3 = [
    { img: "/img/portfolio/product1.webp", label: "", tag: "", link: "" },
    { img: "/img/portfolio/product2.webp", label: "", tag: "", link: "" },
    { img: "/img/portfolio/product3.webp", label: "", tag: "", link: "" },
    { img: "/img/portfolio/product4.webp", label: "", tag: "", link: "" },
    { img: "/img/portfolio/am.webp", label: "AM Builder", tag: "", link: "" },
];

function PortfolioColumn({ items, speed, direction }) {
    const innerRef = useRef(null);
    const offsetRef = useRef(0);
    const pausedRef = useRef(false);
    const rafRef = useRef(null);
    // duplicate for infinite loop
    const doubled = [...items, ...items];

    useEffect(() => {
        const el = innerRef.current;
        if (!el) return;
        const singleH = el.scrollHeight / 2;

        const animate = () => {
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
        return () => cancelAnimationFrame(rafRef.current);
    }, [speed, direction]);

    return (
        <div
            className="pf-col"
            style={{ height: "min(600px, 60vw)", overflow: "hidden", position: "relative" }}
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = false; }}
        >
            <div ref={innerRef} className="pf-col-inner">
                {doubled.map((item, i) => {
                    const card = (
                        <div className="pf-card">
                            <img src={item.img} alt={item.label} loading="lazy" />
                            <div className="pf-card-overlay">
                                <div className="pf-card-label">{item.label}</div>
                                <div className="pf-card-tag">{item.tag}</div>
                            </div>
                        </div>
                    );
                    return item.link ? (
                        <a
                            href={item.link}
                            key={i}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pf-card-link"
                        >
                            {card}
                        </a>
                    ) : (
                        <div key={i}>{card}</div>
                    );
                })}
            </div>
        </div>
    );
}


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

// ── Contact Form Popup Modal (add this near HeroContactForm) ──
function FormPopupModal({ open, onClose }) {
    if (!open) return null;
    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed", inset: 0, zIndex: 9999,
                background: "rgba(1,26,42,0.65)",
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "20px",
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{ position: "relative", width: "100%", maxWidth: 480 }}
            >

                <div className="hero-form-card">
                    <button
                        onClick={onClose}
                        style={{
                            position: "absolute", top: -18, right: -5,
                            width: 36, height: 36, borderRadius: "50%",
                            background: "#ed8337", color: "#fff", border: "none",
                            fontSize: "1.1rem", cursor: "pointer", zIndex: 2,
                            boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
                        }}
                    >
                        ✕
                    </button>
                    <p className="hero-form-title">Your Growth, <span>Our Mission.</span></p>
                    <p className="hero-form-sub">Fill in your details — we'll get back within 24 hours.</p>
                    <HeroContactForm />
                </div>
            </div>
        </div>
    );
}

function PortfolioSection({ onOpenForm }) {
    return (

        <section className="pf-section" id="portfolio" style={{ padding: '0' }}>



            <div className="pf-inner">
                <div className="pf-left">
                    <div className="partners-header1">
                        <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our  Portfolio</div>
                    </div>
                    <h2 className="pf-heading">
                        Websites We've Built That <span><i>Are Already Driving Results</i></span>
                    </h2>
                    <p className="pf-desc">
                        Discover our latest website projects showcasing thoughtful design, seamless user experiences, and modern development across diverse industries.
                    </p>
                    <h2 className="ind-heading">
                        Industries We <span>Serve</span>
                    </h2>
                    <div className="ind-grid">
                        {INDUSTRIES_LIST.map((industry, i) => (
                            <div className="ind-item" key={i}>
                                <div className="ind-icon">{String(i + 1).padStart(2, "0")}</div>
                                <div className="ind-label">{industry}</div>
                            </div>
                        ))}
                    </div>
                    <div className="pf-btns">
                        <button
                            type="button"
                            onClick={onOpenForm}
                            className="pf-btn"
                            style={{ border: "none" }}
                        >
                            Start Your Project  →
                        </button>
                    </div>
                </div>

                <div className="pf-cols">
                    <PortfolioColumn items={PORTFOLIO_COL1} speed={0.6} direction="up" />
                    <PortfolioColumn items={PORTFOLIO_COL2} speed={0.5} direction="down" />
                    <PortfolioColumn items={PORTFOLIO_COL3} speed={0.7} direction="up" />
                </div>
            </div>
        </section>
    );
}

// ── Trusted By / Client Logos Section ─────────────────
const CLIENT_LOGOS = [
    { name: "Strelocare", img: "/img/landing-page/clients/client-1.webp" },
    { name: "Indane", img: "/img/landing-page/clients/client-2.webp" },
    { name: "Mahindra Water Utilities", img: "/img/landing-page/clients/client-3.webp" },
    { name: "AJK", img: "/img/landing-page/clients/client-4.webp" },
    { name: "Shanthi Gears", img: "/img/landing-page/clients/client-5.webp" },
    { name: "Native Indian Organics", img: "/img/landing-page/clients/client-6.webp" },
    { name: "EloraGems", img: "/img/landing-page/clients/client-7.webp" },
    { name: "SNS", img: "/img/landing-page/clients/client-8.webp" },
    { name: "Medwin Hospital", img: "/img/landing-page/clients/client-9.webp" },
    { name: "Vijay Park Inn Hotel", img: "/img/landing-page/clients/client-10.webp" },
    { name: "Colourfuller", img: "/img/landing-page/clients/client-11.webp" },
    { name: "Five Fingers Exports", img: "/img/landing-page/clients/client-12.webp" },
];

function TrustedClientsSection() {
    return (
        <section className="tc-section">
            {/* <style>{`
        
      `}</style> */}

            <div className="partners-header1" style={{ textAlign: 'center' }}>
                <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our  Clients</div>
            </div>

            <h2 className="tech-title svc-main-heading" style={{ marginBottom: '50px' }}>
                <span>Trusted By Established </span> Leaders and Innovative Startups
            </h2>
            <div className="tc-inner">
                <div className="tc-grid">
                    {CLIENT_LOGOS.map((client, i) => (
                        <div className="tc-cell" key={i}>
                            <img src={client.img} alt={client.name} loading="lazy" />
                        </div>
                    ))}
                </div>
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
    { index: 0, text: "PCS delivered a modern responsive website with SEO optimization, analytics integration, heatmap tracking, and performance monitoring. We appreciate their team's dedication, technical expertise, and timely support, which significantly improved our online visibility, website performance, and customer engagement.", name: "Mr.Ashwin", role: "Founder", badge: ["Website Development", "SEO"] },
    { index: 1, text: "Our basic single-page website was upgraded into a professionally structured multi-page platform with enhanced SEO, GMB optimization, analytics setup, and customer activity tracking. We thank the PCS team for their commitment, quick support, and valuable contribution in strengthening our online presence.", name: "Mr.Sabarinath", role: "Founder", badge: ["Website Development", "SEO", "Local SEO"] },
    { index: 2, text: "A fresh UI design with strong website development, improved online reach, lead capture setup, and user activity insights was successfully developed by the PCS team. Every change request was handled patiently while turning our ideas into exactly what we expected. The late-night support before launch was truly appreciated.", name: "Mr.Clement Selvam", role: "Founder", badge: ["Website Development", "SEO"] },
    { index: 3, text: "As a growing forest-based natural products brand, we partnered with PCS to expand our store presence and online sales. PCS team developed a complete e-commerce platform with Razorpay setup, order management, inventory tracking, centralized dashboard, WhatsApp integration for smooth business operations.", name: "Mr.Karupasamy", role: "Director", badge: ["E-Commerce", "SEO", "Local SEO"] },
    { index: 4, text: "Competing in the global market we required a website that matched international standards. With strategic content, SEO optimization, analytics integration, and performance enhancements, our digital presence was significantly strengthened. We appreciate the PCS team for their expertise, flexibility, consistent support throughout the process.", name: "Mr.Gunasekaran", role: "Founder", badge: ["SEO", "Content Marketing", "Paid Ads"] },
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
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <div style={{ fontSize: isMobile ? 13 : 15, fontWeight: 700, color: "#0d1f3c" }}>{data.name}</div>
                <div style={{ fontSize: 11, color: "#6b7a94", lineHeight: 1.4, fontWeight: 400 }}>{data.role}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 4 }}>
                    {data.badge.map((b) => (
                        <span key={b} style={{ display: "inline-block", fontSize: 9.5, fontWeight: 600, letterSpacing: "0.05em", padding: "2px 7px", borderRadius: 20, background: "rgba(244,121,32,0.1)", color: "#f47920", textTransform: "uppercase" }}>{b}</span>
                    ))}
                </div>
                <div style={{ display: "flex", gap: 3, marginTop: 6 }}>
                    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
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
        <section style={{ width: "100%", margin: "0 auto", padding: isMobile ? "40px 16px" : "60px 20px", fontFamily: "'Poppins', sans-serif", overflow: "hidden", background: '#fff' }}>
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
        <section className="tech-section">
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
            desc: "Professional website designs that strengthen your brand and turn visitors to customers",
            features: ["Premium UI/UX Layouts", "User-Friendly Designs", "Modern visuals with custom icons and buttons"],
            href: "/website-design",
        },
        {
            img: "/img/landing-page/website-design.webp",
            title: "Static Website Development",
            desc: "Affordable single-page websites with essential SEO setup, built to help startups and growing businesses",
            features: ["Standard Design Template", "Fast Loading Page", "Mobile Responsive"],
            href: "/static-website-development",
        },
        {
            img: "/img/landing-page/custom-website-development.webp",
            title: "Custom Website Development",
            desc: "Get a customized website tailored to your business, industry, and specific requirements, designed to support your business growth ",
            features: ["Custom Features & Third-Party Integration", "User-friendly website flow", "High-performance & SEO-ready"],
            href: "/custom-website-development",
        },
        {
            img: "/img/landing-page/woo-commerce.webp",
            title: "WooCommerce Development",
            desc: "High-performing WooCommerce stores designed to attract more customers, increase online sales, and simplify the buying process.",
            features: ["Inventory & Order Tracking", "Payment Gateway Integration", "Store & Product Management"],
            href: "/woocommerce-website-development",
        },
        {
            img: "/img/landing-page/ecommerce-development.webp",
            title: "E-Commerce Development",
            desc: "Scalable Shopify Stores Built to Increase Sales and Support Long-Term Business Growth ",
            features: ["Shopify store & product setup", "Payment and Shipping Integration", "SEO Ready and Mobile Responsive"],
            href: "/e-commerce-website-development",
        },
        {
            img: "/img/landing-page/shopify.webp",
            title: "Shopify Development",
            desc: "Complete E-commerce Features Built to Improve Shopping Experiences, Drive More Sales, and Grow Your Online Business",
            features: ["Custom Product & Category Setup", "Customer Login & Account Management", "Shopping Cart & Easy Checkout Process"],
            href: "/shopify-website-development",
        },
    ];

    return (
        <section id="service" style={{ padding: "70px 5% 5rem", background: '#fff' }} >
            <div className="partners-header1" style={{ textAlign: 'center' }}>
                <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our  Service</div>
            </div>

            <h2 className="tech-title svc-main-heading">
                <span>Website Development Services</span> That Fit Your Business Goals
            </h2>
            <p style={{ textAlign: "center", maxWidth: 1200, margin: "20px auto 60px", color: "#666", lineHeight: 1.8, fontSize: "0.96rem" }}>
                Every business is different. Every website we make is different too. We offer services, each one designed to fit your budget, timeline and growth targets.
            </p>
            <div className="svc-grid">
                {services.map((svc, i) => (
                    <div
                        key={i}
                        s/* REMOVE height: "90%" and add these instead: */
                        style={{
                            background: "#fff",
                            borderRadius: 24,
                            padding: "30px 30px 2px 30px",
                            boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
                            borderTop: "5px solid #ed8337",
                            display: "flex",
                            flexDirection: "column",
                            // REMOVE height: "90%" entirely
                            transition: "transform 0.35s ease, box-shadow 0.35s ease",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.12)"; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 35px rgba(0,0,0,0.08)"; }}
                    >
                        <img src={svc.img} alt={svc.title} style={{ width: "90%", objectFit: "contain", margin: "0 auto 20px" }} />
                        <h3 style={{ color: "#004168", fontSize: 20, marginBottom: 15, fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
                            {svc.title}
                        </h3>
                        <p style={{ color: "#666", lineHeight: 1.8, marginBottom: 20, fontSize: "0.9rem" }}>
                            {svc.desc}
                        </p>
                        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 25px" }}>
                            {svc.features.map((f, j) => (
                                <li key={j} style={{ position: "relative", paddingLeft: 30, marginBottom: 12, color: "#444", lineHeight: 1.6, fontSize: "0.9rem" }}>
                                    <span style={{ position: "absolute", left: 0, top: 0, color: "#ed8337", fontWeight: "bold", fontSize: 18 }}>✓</span>
                                    {f}
                                </li>
                            ))}
                        </ul>
                        {/* <a
              href={svc.href}
              style={{ display: "inline-block", width: '42%', fontSize: '14px', textAlign: "center", padding: "10px 20px", background: "#004168", color: "#fff", textDecoration: "none", borderRadius: 50, fontWeight: 600, fontFamily: "'Poppins', sans-serif", transition: "background 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#ed8337"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#004168"; }}
            >
              Learn More
            </a> */}
                    </div>
                ))}
            </div>
        </section>
    );
}

// ── Reasons / Portfolio-style Cards Section (exact match) ──
const REASONS_DATA = [
    {
        img: "/img/case-study-feral.webp",
        tags: [{ label: "Website Development", type: "orange" }, { label: "SEO", type: "navy" }],
        title: "Feral Roots",
        short: "Priyam Consultancy Services transformed Feral Roots into a thriving online business with a custom eCommerce website featuring secure online",
        full: "Priyam Consultancy Services transformed Feral Roots into a thriving online business with a custom eCommerce website featuring secure online payments, order tracking, SEO for higher search visibility, and Google Business Profile optimization to increase local reach and customer enquiries.",
    },
    {
        img: "/img/case-study-urtc.webp",
        tags: [{ label: "Website Development", type: "orange" }, { label: "SEO", type: "navy" }],
        title: "URCTS",
        short: "Priyam Consultancy Services developed a premium, SEO-optimized website for URCTS featuring immersive 3D banners, comprehensive service ",
        full: "Priyam Consultancy Services developed a premium, SEO-optimized website for URCTS featuring immersive 3D banners, comprehensive service presentation and complete SEO implementation with keyword-focused content, strengthening brand credibility, improving visibility, enhancing user engagement, supporting global business growth.",
    },
    {
        img: "/img/case-study-tgcc.webp",
        tags: [{ label: "SEO", type: "green" }, { label: "Website Development", type: "navy" }],
        title: "TGCC",
        short: "TGCC partnered with Priyam Consultancy Services to launch a premium website reflecting its training excellence. Using AI-powered visuals, strategic SEO,",
        full: "TGCC partnered with Priyam Consultancy Services to launch a premium website reflecting its training excellence. Using AI-powered visuals, strategic SEO, and modern design, the website was successfully delivered within 20 days, increasing training enquiries and credibility.",
    },
    {
        img: "/img/case-study-abb.webp",
        tags: [{ label: "Website Development", type: "navy" }, { label: "Content", type: "green" }],
        title: "ABB Consultancy",
        short: "Priyam Consultancy Services redesigned ABB's website with a premium, service-focused design, keyword-rich SEO content, and a refined user ",
        full: "Priyam Consultancy Services redesigned ABB's website with a premium, service-focused design, keyword-rich SEO content, and a refined user experience, strengthening brand credibility, improving search visibility, and creating a professional digital presence aligned with business goals successfully.",
    },
    {
        img: "/img/case-study-riya.webp",
        tags: [{ label: "Website Development", type: "orange" }, { label: "SEO", type: "navy" }],
        title: "Riya Consultancy Services",
        short: "With limited local visibility, RIYA partnered with Priyam Consultancy Services to redesign its website using competitor analysis, targeted SEO, and social",
        full: "With limited local visibility, RIYA partnered with Priyam Consultancy Services to redesign its website using competitor analysis, targeted SEO, and social media marketing, helping the brand reach more local prospects, improve search visibility, and generate quality business enquiries.",
    },
    {
        img: "/img/case-study-talent-tribe.webp",
        tags: [{ label: "Website Development", type: "orange" }],
        title: "Talent Tribe",
        short: "Using AI-assisted design and custom website development, Priyam Consultancy Services built a premium website for Talent Tribe to strengthen its",
        full: "Using AI-assisted design and custom website development, Priyam Consultancy Services built a premium website for Talent Tribe to strengthen its brand, improve online visibility, enhance usability, support SEO, and create a strong foundation for future business enquiries.",
    },
];

function ReasonCard({ data }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="reason-card">
            <div className="reason-card-img-wrap">
                <img src={data.img} alt={data.title} className="reason-card-img" />
            </div>

            <div className="reason-card-body">
                <div className="reason-card-tags">
                    {data.tags.map((t, i) => (
                        <span key={i} className={`reason-tag reason-tag-${t.type}`}>
                            <span className="reason-tag-dot" />
                            {t.label}
                        </span>
                    ))}
                </div>

                <h3 className="reason-card-title">
                    <span className="reason-user-icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                        </svg>
                    </span>
                    {data.title}
                </h3>

                <p className={`reason-desc ${open ? "is-open" : ""}`}>
                    {open ? data.full : data.short}
                </p>

                <div className="reason-card-footer">
                    <button
                        type="button"
                        className="reason-read-more"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? "Read Less" : "Read More"}
                        <span className="reason-read-more-arr">→</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

function ReasonsSection() {
    return (
        <section className="reasons-section" id="our-case-studies">


            <div className="container">
                <div className="partners-header1" style={{ textAlign: 'center' }}>
                    <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Case Studies
                    </div>
                </div>
                <h2 className="pg-cta-heading" style={{ textAlign: 'center' }}>  <em>Success Stories </em> That Drive Growth
                </h2>
                <p style={{ textAlign: "center", maxWidth: 1000, margin: "20px auto 60px", color: "#666", lineHeight: 1.8, fontSize: "0.96rem" }}>
                    Explore how we help businesses across industries improve online visibility, generate leads, and drive growth through customized website solutions.
                </p>
                <div className="cards-grid">
                    {REASONS_DATA.map((r, i) => (
                        <ReasonCard key={i} data={r} />
                    ))}
                </div>
            </div>
        </section>
    );
}


// ── Footer Section ────────────────────────────────────
function FooterSection() {
    const services = [
        "Website Design",
        "Static Website Development",
        "Custom Website Development",
        "WooCommerce Development",
        "E-Commerce Development",
        "Shopify Development",
    ];

    return (
        <footer className="pcs-footer">


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

                {/* Column 2: Our Services */}
                <div>
                    <h4 className="pcs-footer-heading">Our Services</h4>
                    <ul className="pcs-footer-list">
                        {services.map((s, i) => (
                            // <li key={i}><a href="#">{s}</a></li>
                            <li key={i}>{s}</li>

                        ))}
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
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

function StepperPopupForm() {
    const [visible, setVisible] = useState(false);
    const [closed, setClosed] = useState(false);
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState(null);
    const [form, setForm] = useState({ name: "", company: "", phone: "" });
    const timerRef = useRef(null);
    const triggeredRef = useRef(false);

    useEffect(() => {
        const onScroll = () => {
            if (triggeredRef.current || closed) return;
            if (!timerRef.current) {
                timerRef.current = setTimeout(() => {
                    if (!triggeredRef.current && !closed) {
                        setVisible(true);
                        triggeredRef.current = true;
                    }
                }, 3500);
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [closed]);
    const handleClose = () => {
        setVisible(false);
        setClosed(true);
        if (timerRef.current) clearTimeout(timerRef.current);
    };

    const handleSelectService = (svc) => {
        setSelectedService(svc);
        setStep(2);
    };

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const templateParams = {
            name: form.name,
            company: form.company,
            phone: form.phone,
            email: form.email,
            message: form.msg,
            service: selectedService?.label || "",
            url: window.location.href,
        };
        emailjs
            .send("service_8xw6k3r", "template_jarui36", templateParams, "XWRnXi4hK2SvmRG3q")
            .then(() => {
                alert("Message Sent Successfully ✅");
                setForm({ name: "", company: "", phone: "", email: "", msg: "" });
                setSelectedService(null);
                setStep(1);
                handleClose();
            })
            .catch((err) => {
                console.log(err);
                alert("Failed to send ❌");
            });
    };
    if (!visible) return null;

    return (
        <div className="stepper-popup-overlay" onClick={handleClose}>


            <div className="stepper-popup-card" onClick={(e) => e.stopPropagation()}>
                <button className="stepper-popup-close" onClick={handleClose}>✕</button>

                <div className="stepper-popup-left">
                    <div className="stepper-left-icon">📋</div>
                    <div className="stepper-left-title">
                        {step === 1 ? "Select Service" : "Your Details"}
                    </div>
                    <div className="stepper-left-desc">
                        {step === 1
                            ? "Please select a service for which you want to schedule an appointment"
                            : "Almost done! Share your contact details so our team can reach you."}
                    </div>
                    <div>
                        <div className="stepper-left-questions">Questions?</div>
                        <div style={{ fontSize: ".8rem" }}>
                            Call: <a href="tel:+919677444048">+91 96774 44048</a>
                        </div>
                    </div>
                </div>

                <div className="stepper-popup-right">
                    {step === 1 && (
                        <>
                            <div className="stepper-right-title">Service Selection</div>
                            <div className="stepper-svc-list">
                                {STEPPER_SERVICES.map((svc) => (
                                    <div
                                        key={svc.key}
                                        className="stepper-svc-item"
                                        onClick={() => handleSelectService(svc)}
                                    >
                                        {/* <span className="stepper-svc-icon">{svc.icon}</span> */}
                                        {svc.label}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {step === 2 && (
                        <form onSubmit={handleSubmit}>
                            <button type="button" className="stepper-back-btn" onClick={() => setStep(1)}>
                                ← Back
                            </button>

                            <div className="stepper-form-row">
                                <div className="stepper-form-field">
                                    <label>Name</label>
                                    <input
                                        type="text" name="name" placeholder="Your Name"
                                        value={form.name} onChange={handleChange} required
                                    />
                                </div>
                                <div className="stepper-form-field">
                                    <label>Phone Number</label>
                                    <input
                                        type="tel" name="phone" placeholder="Mobile Number"
                                        value={form.phone} onChange={handleChange}
                                        maxLength="10" pattern="[0-9]{10}" required
                                    />
                                </div>
                            </div>

                            <div className="stepper-form-row">
                                <div className="stepper-form-field">
                                    <label>Email Address</label>
                                    <input
                                        type="email" name="email" placeholder="Email Address"
                                        value={form.email} onChange={handleChange} required
                                    />
                                </div>
                                <div className="stepper-form-field">
                                    <label>Company Name</label>
                                    <input
                                        type="text" name="company" placeholder="Company Name"
                                        value={form.company} onChange={handleChange} required
                                    />
                                </div>
                            </div>

                            <div className="stepper-form-field">
                                <label>Service</label>
                                <select
                                    value={selectedService?.key || ""}
                                    onChange={(e) => {
                                        const svc = STEPPER_SERVICES.find(s => s.key === e.target.value);
                                        setSelectedService(svc);
                                    }}
                                    required
                                >
                                    {STEPPER_SERVICES.map((svc) => (
                                        <option key={svc.key} value={svc.key}>{svc.label}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="stepper-form-field">
                                <label>Message</label>
                                <textarea
                                    name="msg" placeholder="Your Message"
                                    value={form.msg} onChange={handleChange}
                                    rows="3"
                                />
                            </div>

                            <button type="submit" className="stepper-submit-btn">Submit</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
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
            <TrustedClientsSection />
            <OurServicesSection />
            <PortfolioSection onOpenForm={() => setFormOpen(true)} />
            <TechnologiesSection />
            <ReasonsSection />
            <CTASplitSection />
            <BuildTogetherCTASection />
            <ModernFeaturesSection />
            <TestimonialSlider />
            <MilestonesCTA />
            <FAQSection />
            <FooterSection />
            <FormPopupModal open={formOpen} onClose={() => setFormOpen(false)} />
            <StepperPopupForm />
        </Layout>
    );
}