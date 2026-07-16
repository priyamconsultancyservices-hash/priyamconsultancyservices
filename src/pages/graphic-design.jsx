import '../css/pages-common.css';
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import BlogSection from "../components/BlogSection";
import CTASection from "../components/HomePage/CTA";
const banner = "/img/graphic-design.webp";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';


// ─── useInView hook ───────────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  { num: "01", icon: <img src="/img/icon/svc-logo-design.webp" alt="Logo Design" width="34" height="34" />, subtitle: "Brand Presence", title: "Logo Design", desc: "Build a powerful identity with our expert logo design agency services. We create distinctive logos that reflect your brand values, enhance recognition, and establish a strong visual foundation for your business.", },
  { num: "02", icon: <img src="/img/icon/svc-business-cards-brochure.webp" alt="Business Cards and Brochure Design" width="34" height="34" />, subtitle: "Visual Identity", title: "Business Cards & Brochure Design", desc: "Strengthen your brand presence with professionally crafted graphic design assets. Our business cards and brochures are designed to communicate credibility, leaving a lasting impression in every interaction.", },
  { num: "03", icon: <img src="/img/icon/svc-social-media-graphics.webp" alt="Social Media Graphic Design" width="34" height="34" />, subtitle: "Paid Campaigns", title: "Social Media Graphic Design", desc: "Capture attention instantly with high-performing social media graphic design. From posts to ads, we create engaging visuals that boost visibility, drive engagement, and strengthen your digital brand presence.", },
  { num: "04", icon: <img src="/img/icon/svc-website-app-graphics.webp" alt="Website and App Graphics" width="34" height="34" />, subtitle: "Community Building", title: "Website & App Graphics", desc: "Enhance user experience with custom graphic design elements including UI visuals, icons, and banners. Our graphic design company ensures consistency and usability across your website and mobile applications.", },
  { num: "05", icon: <img src="/img/icon/svc-poster-banner.webp" alt="Poster and Banner Design" width="34" height="34" />, subtitle: "Partnerships", title: "Poster & Banner Design", desc: "Stand out with bold and impactful graphic design for marketing and promotions. We design posters and banners that grab attention and communicate your message effectively across both digital and print platforms.", },
  { num: "06", icon: <img src="/img/icon/svc-presentation-design.webp" alt="Presentation Design" width="34" height="34" />, subtitle: "Insights & ROI", title: "Presentation Design", desc: "Deliver impactful presentations with professionally designed slides. Our graphic design services transform your ideas into visually compelling presentations that engage, persuade, and communicate your message clearly.", },
];

const PROCESS_STEPS = [
  { step: "01", title: "Discover", phase: "Brand Audit", desc: "Before any designs take shape, we dive deep into your brand identity and business vision. We explore your business goals, target audience, industry landscape, competitor positioning, and brand personality thoroughly. This discovery phase ensures our creative design services are built on insights, strategy, and audience understanding — so every visual element aligns perfectly with your message, values, and market expectations.", bullets: [] },
  { step: "02", title: "Research & Analyze", phase: "Custom Roadmap", desc: "We study competitors, audit existing brand assets, and analyze current market and design trends to identify opportunities for visual differentiation. From typography and colour psychology to layout preferences, user behavior, and platform-specific creative expectations, we gather the insights needed to create visuals that stand out, communicate effectively, and resonate strongly with your target audience. This research-driven approach helps ensure every design element aligns with your brand identity across digital and marketing platforms.", bullets: [] },
  { step: "03", title: "Strategize", phase: "Content Production", desc: "With clear insights and research in hand, we craft a custom design strategy tailored to your business objectives and branding goals. Whether it’s logo design, marketing collateral, presentation materials, or social media creatives, we define the visual style, layout direction, messaging tone, and creative framework. Every design decision is made strategically to strengthen brand identity, improve recognition, increase engagement, and build long-term trust.", bullets: [] },
  { step: "04", title: "Create & Refine", phase: "Full Execution", desc: "Our graphic design company brings the strategy to life by transforming concepts into compelling and impactful visual experiences. Through collaborative discussions and iterative refinements, we explore multiple design directions, gather your feedback carefully, and fine-tune every detail until the final output feels perfect. We balance creativity, usability, consistency, and functionality to ensure every asset performs effectively across both digital and print platforms.", bullets: [] },
  { step: "05", title: "Deliver & Evolve", phase: "Continuous Growth", desc: "Once finalized, we deliver print-ready and web-optimized design assets in all required formats for seamless business usage. But our support doesn’t stop there — we continue assisting with ongoing design updates, campaign creatives, seasonal refreshes, and brand adaptations as your business grows and evolves. This ensures your visual identity remains modern, consistent, relevant, and impactful across every customer touchpoint.", bullets: [] },
];

const HOW_WE_WORK = [
  { icon: <img src="/img/icon/hww-brand-design-strategy.webp" alt="Brand-Specific Design Strategy" width="28" height="28" />, title: "Brand-Specific Design Strategy", desc: "As a strategic graphic design company, we create tailored graphic design solutions aligned with your brand identity, audience insights, and business goals to maximize impact." },
  { icon: <img src="/img/icon/hww-creative-team.webp" alt="Cross-Functional Creative Team" width="28" height="28" />, title: "Cross-Functional Creative Team", desc: "Our graphic design services are powered by designers, branding experts, and strategists collaborating to deliver cohesive, high-quality visual communication that strengthens your brand presence." },
  { icon: <img src="/img/icon/hww-result-focused.webp" alt="Result Focused Creativity" width="28" height="28" />, title: "Result Focused Creativity", desc: "We combine creativity with performance, ensuring every graphic design enhances engagement, and drives measurable growth through visually compelling and strategically crafted designs." },
];

const faqData = [
  { q: "What graphic design services do you offer?", a: "We offer graphic design services including brand identity design, social media creatives, brochures, presentations, website graphics, marketing materials, packaging design, banners, advertisements, and corporate communication assets. Our designs focus on visual consistency, audience engagement, and strengthening overall brand presentation across digital and print platforms." },
  { q: "How does graphic design help my business?", a: " Graphic design improves brand visibility, communication, and customer perception through professional visual presentation. Strong design helps businesses build credibility, attract attention, improve engagement, and communicate messages more effectively across websites, social media, advertisements, presentations, and marketing campaigns." },
  { q: "Can you create a new brand identity for my business?", a: " Yes, we create complete brand identity systems including logo design, color palettes, typography, visual guidelines, and brand communication assets. Our approach focuses on building a consistent and professional identity that reflects your business values, positioning, and long-term growth objectives." },
  { q: "Do you offer brochure and presentation design?", a: "Yes, we design professional brochures, company profiles, pitch decks, corporate presentations, and marketing collaterals customized to your business goals. Our designs focus on clarity, visual appeal, structured communication, and creating strong impressions for clients, investors, and business stakeholders." },
  { q: "Do you redesign existing graphics or brand materials?", a: "Yes, we redesign existing graphics, presentations, brochures, social media creatives, and brand materials to improve visual consistency, modernize communication, and strengthen brand perception. Our redesign approach focuses on enhancing usability, professionalism, engagement, and alignment with your current business positioning." },
  { q: "How many revisions do you provide?", a: " The number of revisions depends on the project scope and requirements. We work collaboratively with clients throughout the design process to ensure the final output aligns with brand expectations, business objectives, and communication goals while maintaining quality and creative consistency." },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" id="hero">

      {/* LEFT CONTENT */}
      <div className="hero-left">
        <div className="h-badge"><div className="badge-dot" />Creative Design</div>
        <h1 className="hero-heading" style={{fontWeight: '600'}}>
          From Concept to 
          <span className="hl lined">Design Elevate Your </span>
          Brand Creatively
        </h1>
        <p className="hero-sub">
          As a leading Graphic Design Company, PCS transforms ideas into impactful visuals that define your brand identity. Our graphic design approach blends creativity with strategy to craft logos, social media creatives, and brand assets that capture attention.We go beyond aesthetics — our graphic design services ensure consistency, recognition, and strong brand recall.         </p>
        <div className="hero-actions">
          <a className="btn-fill" href="/contact-us">Explore More <span className="btn-arrow">›</span></a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-right">
        <img
          src={banner}
          alt="Graphic Design Illustration"
          className="hero-img"
        />
      </div>
    </section>
  );
}

// ─── Approach + Form ──────────────────────────────────────────────────────────
function ApproachSection() {
   const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    msg: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ EMAIL SEND FUNCTION
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
        "service_8xw6k3r",   // 🔴 replace
        "template_jarui36",  // 🔴 replace
        templateParams,
        "XWRnXi4hK2SvmRG3q"    // 🔴 replace
      )
      .then(() => {
        alert("Message Sent Successfully ✅");

        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          msg: ""
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send ❌");
      });
  };

  return (
    <section className="approach" id="approach">
      <div className="ap2-inner">
        <div className="ap-left">
          <div className="partners-header1">
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Approach in</h2>
          </div>
          <h3 className="ap2-heading">Creative Designs that <span>Speak Your Brand</span> </h3>
          <p className="ap-intro">
            Looking to elevate your visual identity and strengthen brand perception across digital platforms? PCS delivers purpose-driven graphic design solutions focused on clear communication, strong branding, and meaningful audience engagement.

          </p>
          <p className="ap-intro">
            Every design we create reflects your brand personality, business positioning, and audience expectations accurately. As a trusted graphic design company, we ensure visuals align strategically with your marketing and business goals.

          </p>
          <p className="ap-intro">
            From brand identity creation to social media graphic design, we deliver cohesive visuals across platforms. Our graphic design services focus on creativity, clarity, consistency, and building a memorable market presence.

          </p>
        </div>
         <div className="ap2-form-wrap">
          <div className="ap2-form-card">
            <div className="ap2-form-eyebrow">
              <span className="ap2-form-eyebrow-line" />Your Growth, Our Mission<span className="ap2-form-eyebrow-line" />
            </div>
            <div className="ap2-form-title">Get Your <span>Free</span> SEO Audit</div>
            <form onSubmit={sendEmail}>
              <div className="ap2-fl-row">
                <div className="ap2-fl-group">
                  <label className="ap2-fl-label">Your Name</label>
                  <div style={{ position: "relative" }}>
                    <span className="ap2-fl-icon">👤</span>
                    <input className="ap2-fl-input" type="text" name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
                  </div>
                </div>
                <div className="ap2-fl-group">
                  <label className="ap2-fl-label">Company</label>
                  <div style={{ position: "relative" }}>
                    <span className="ap2-fl-icon">🏢</span>
                    <input className="ap2-fl-input" type="text" name="company" placeholder="Company name" value={form.company} onChange={handleChange} />
                  </div>
                </div>
              </div>
              <div className="ap2-fl-group">
                <label className="ap2-fl-label">Email Address</label>
                <div style={{ position: "relative" }}>
                  <span className="ap2-fl-icon">✉️</span>
                  <input className="ap2-fl-input" type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="ap2-fl-group">
                <label className="ap2-fl-label">Mobile Number</label>
                <div className="ap2-phone-row">
                  <div className="ap2-phone-flag"><span>📞</span></div>
                  <input className="ap2-fl-input" type="tel" name="phone" placeholder="Mobile number" value={form.phone} onChange={handleChange} maxLength="10" pattern="[0-9]{10}" required />
                </div>
              </div>
              <div className="ap2-fl-group">
                <label className="ap2-fl-label">Message</label>
                <div style={{ position: "relative" }}>
                  <span className="ap2-fl-icon" style={{ top: "0.9rem", transform: "none" }}>💬</span>
                  <textarea className="ap2-fl-textarea" name="msg" placeholder="Tell us about your SEO goals..." value={form.msg} onChange={handleChange} />
                </div>
              </div>
              <button type="submit" className="ap2-submit">
                Get Free SEO Audit <span className="ap2-submit-arrow">›</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function ServicePanel({ svc, index }) {
  const [ref, visible] = useInView(0.1);
  return (
    <div ref={ref} className={`smm-svc-panel${visible ? " vis" : ""}`} style={{ transitionDelay: `${0.05 + index * 0.07}s` }}>
      <div className="smm-sp-slash" />
      <div className="smm-sp-ghost">{svc.num}</div>
      <div className="smm-sp-bottom-line" />
      <div className="smm-sp-icon-row">
        <span className="smm-sp-icon-dash" />
        <span className="smm-sp-icon">{svc.icon}</span>
      </div>
      <div className="smm-sp-content">
        <div className="smm-sp-subtitle">{svc.subtitle}</div>
        <div className="smm-sp-title">{svc.title}</div>
        <div className="smm-sp-desc">{svc.desc}</div>
        {/* <a className="smm-sp-link" href="#">LEARN MORE <span className="smm-sp-link-arr">↗</span></a> */}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="smm-svc">
      <div className="smm-svc-dots" />
      <div className="smm-svc-glow smm-ssvg1" />
      <div className="smm-svc-glow smm-ssvg2" />
      <div className="smm-svc-hdr">
        <div className="partners-header1" style={{ textAlign: 'center' }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Specialized Graphic Design Services</h2>
        </div>
        <h3 className="smm-svc-h2">Pixel Perfect. <span> <i>Purpose Driven. </i></span>Brand Defining</h3>
        <p className="smm-svc-sub">
          As a professional graphic design company, PCS delivers high-impact graphic design services tailored to your brand identity and business goals.


        </p>
      </div>
      <div className="smm-svc-panels">
        {SERVICES.map((svc, i) => <ServicePanel key={svc.num} svc={svc} index={i} />)}
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────
function ProcessStep({ step, index }) {
  const [ref, visible] = useInView(0.1);
  const isEven = index % 2 === 1;
  return (
    <div ref={ref} className={`smm-tp-step${visible ? " tp-vis" : ""}`}>
      {isEven ? (
        <>
          <div className="smm-tp-text-side">
            <p className="smm-tp-desc">{step.desc}</p>
            <div className="smm-tp-bullets">{step.bullets.map(b => <span key={b} className="smm-tp-bullet">{b}</span>)}</div>
          </div>
          <div className="smm-tp-num-side">
            <div className="smm-tp-bg-num">{step.step}</div>
            <div className="smm-tp-step-index">Step — {step.step}</div>
            <div className="smm-tp-step-title">{step.title}</div>
            <div className="smm-tp-phase">{step.phase}</div>
          </div>
        </>
      ) : (
        <>
          <div className="smm-tp-num-side">
            <div className="smm-tp-bg-num">{step.step}</div>
            <div className="smm-tp-step-index">Step — {step.step}</div>
            <div className="smm-tp-step-title">{step.title}</div>
            <div className="smm-tp-phase">{step.phase}</div>
          </div>
          <div className="smm-tp-text-side">
            <p className="smm-tp-desc">{step.desc}</p>
            <div className="smm-tp-bullets">{step.bullets.map(b => <span key={b} className="smm-tp-bullet">{b}</span>)}</div>
          </div>
        </>
      )}
    </div>
  );
}

function Process() {
  return (
    <section className="smm-tp-section">
      <div className="smm-tp-cross" />
      <div className="smm-tp-header">
        <div className="partners-header1" style={{ textAlign: 'center' }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Proven Creative Design Process</h2>
        </div>
        <h3 className="smm-tp-h2">Crafted for Impact, <em> <i>Aligned with Vision</i> </em></h3>
        <p className="smm-tp-sub">
          Every graphic design project begins with strategy and ends with measurable impact. As a trusted graphic design company, our process ensures every visual communicates effectively and strengthens your brand identity.



        </p>
      </div>
      <div className="smm-tp-body">
        {PROCESS_STEPS.map((step, i) => <ProcessStep key={step.step} step={step} index={i} />)}
      </div>
    </section>
  );
}

// ─── How We Work ──────────────────────────────────────────────────────────────
function HowWeWorkItem({ item }) {
  const [ref, visible] = useInView(0.12);
  return (
    <div ref={ref} className={`smm-hww-arrow-item${visible ? " hww-vis" : ""}`}>
      <div className="smm-hww-card">
        <div className="smm-hww-icon-wrap">{item.icon}</div>
        <div className="smm-hww-card-title">{item.title}</div>
        <div className="smm-hww-card-desc">{item.desc}</div>
      </div>
    </div>
  );
}

function HowWeWork() {
  return (
    <section className="smm-hww">
      <div className="smm-hww-dot-grid" />
      <div className="smm-hww-glow smm-hww-glow-1" />
      <div className="smm-hww-glow smm-hww-glow-2" />
      <div className="smm-hww-header">
        <div className="partners-header1" style={{ textAlign: 'center' }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Focus on Your Brand Through Creative Design</h2>
        </div>
        <h3 className="smm-hww-h2">Visualize Ideas. <span><i>Elevate Identity.  </i></span> Inspire Action.</h3>
      </div>
      <div className="smm-hww-arrows-wrap">
        <div className="smm-hww-arrow-track">
          {HOW_WE_WORK.map(item => <HowWeWorkItem key={item.title} item={item} />)}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <section className="faq-section" style={{padding: '80px 0 0'}}>
      <div className="partners-header2" style={{ textAlign: 'center', marginTop: '20px' }}>
        <div className="partners-eyebrow" >Frequently Asked Questions</div>
      </div>
      <div className="container">
        {/* TITLE */}
        <div className="faq-head">
          <h2>Queries That Could <span>Hold You Back</span></h2>
        </div>
        {/* FAQ GRID */}
        <div className="faq-wrapper">

          {/* LEFT COLUMN */}
          <div className="faq-col">
            {faqData.slice(0, 3).map((item, i) => (
              <div className="faq-item" key={i}>
                <div className="faq-question" onClick={() => toggle(i)}>
                  <span>{item.q}</span>
                  <span className="icon">{active === i ? "−" : "+"}</span>
                </div>
                {active === i && (
                  <div className="faq-answer">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="faq-col">
            {faqData.slice(3, 6).map((item, i) => (
              <div className="faq-item" key={i + 3}>
                <div className="faq-question" onClick={() => toggle(i + 3)}>
                  <span>{item.q}</span>
                  <span className="icon">{active === i + 3 ? "−" : "+"}</span>
                </div>
                {active === i + 3 && (
                  <div className="faq-answer">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Root Component ───────────────────────────────────────────────────────────
export default function PcsSmmPage() {

  const schemaData = [

    // Breadcrumb List Schema
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
            "@id": "https://www.priyamconsultancy.com/graphic-design/",
            "name": "graphic-design"
          }
        }
      ]
    },

    // Organization Schema

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

    // SERVICE PAGE SCHEMA
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.priyamconsultancy.com/graphic-design/#service",
      "name": "Graphic Design Services",
      "serviceType": "Graphic Design Services",
      "url": "https://www.priyamconsultancy.com/graphic-design/",
      "description": "Priyam Consultancy provides professional graphic design services including logo design, social media creatives, branding materials, marketing designs, business brochures and visual branding solutions across India.",
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

    // Product Schema
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "graphic-design",
      "image": ["https://www.priyamconsultancy.com/img/graphic-design.png"],
      "description": "Best graphic design services in Coimbatore offering logo design, brand identity design, social media creatives, brochure design, presentation design, marketing materials and visual branding solutions.",
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
        "reviewCount": "4916"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.priyamconsultancy.com/graphic-design/",
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
    },

    // FAQ Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "What graphic design services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer graphic design services including brand identity design, social media creatives, brochures, presentations, website graphics, marketing materials, packaging design, banners, advertisements, and corporate communication assets. Our designs focus on visual consistency, audience engagement, and strengthening overall brand presentation across digital and print platforms."
        }
      }, {
        "@type": "Question",
        "name": "How does graphic design help my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Graphic design improves brand visibility, communication, and customer perception through professional visual presentation. Strong design helps businesses build credibility, attract attention, improve engagement, and communicate messages more effectively across websites, social media, advertisements, presentations, and marketing campaigns."
        }
      }, {
        "@type": "Question",
        "name": "Can you create a new brand identity for my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we create complete brand identity systems including logo design, color palettes, typography, visual guidelines, and brand communication assets. Our approach focuses on building a consistent and professional identity that reflects your business values, positioning, and long-term growth objectives."
        }
      }, {
        "@type": "Question",
        "name": "Do you offer brochure and presentation design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we design professional brochures, company profiles, pitch decks, corporate presentations, and marketing collaterals customized to your business goals. Our designs focus on clarity, visual appeal, structured communication, and creating strong impressions for clients, investors, and business stakeholders."
        }
      }, {
        "@type": "Question",
        "name": "Do you redesign existing graphics or brand materials?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we redesign existing graphics, presentations, brochures, social media creatives, and brand materials to improve visual consistency, modernize communication, and strengthen brand perception. Our redesign approach focuses on enhancing usability, professionalism, engagement, and alignment with your current business positioning."
        }
      }, {
        "@type": "Question",
        "name": "How many revisions do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The number of revisions depends on the project scope and requirements. We work collaboratively with clients throughout the design process to ensure the final output aligns with brand expectations, business objectives, and communication goals while maintaining quality and creative consistency."
        }
      }]
    }

  ]
  return (
    <Layout>
      <div className="pg-graphic-design">
      <Head>
        <title>Creative Graphic And Logo Design Company In Coimbatore </title>
        <meta name="description" content="Creative graphic and logo design company in Coimbatore offering modern, professional branding solutions. Boost your business identity with expert design services. " />
        <meta name="keywords" content="Graphic Design, Graphic Design Company, Graphic Design Services, Logo Design, Branding Agency, Graphic Design Agency, Logo Design Agency, Logo Design Services, Graphic Design in Coimbatore, Graphic Design Company in Coimbatore, Graphic Design Services in Coimbatore, Logo Design in Coimbatore, Branding Agency in Coimbatore, Graphic Design Agency in Coimbatore, Logo Design Agency in Coimbatore " />
        <link rel="canonical" href="https://www.priyamconsultancy.com/graphic-design/" />
        {/* Open Graph */}
        <meta property="og:title" content="Creative Graphic And Logo Design Company In Coimbatore " />
        <meta property="og:description" content="Creative graphic and logo design company in Coimbatore offering modern, professional branding solutions. Boost your business identity with expert design services. " />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.priyamconsultancy.com/graphic-design/" />
        <meta property="og:image" content="https://www.priyamconsultancy.com/img/graphic-design.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Creative Graphic And Logo Design Company In Coimbatore " />
        <meta name="twitter:description" content="Creative graphic and logo design company in Coimbatore offering modern, professional branding solutions. Boost your business identity with expert design services. " />
        <meta name="twitter:image" content="https://www.priyamconsultancy.com/img/graphic-design.png" />
        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Head>
      <Hero />
      <ApproachSection />
      <Services />
      <Process />
      <HowWeWork />
      <FAQSection />
      <BlogSection />
      <CTASection />
      </div>
    </Layout>
  );
}