import '../css/pages-common.css';
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import BlogSection from "../components/BlogSection";
import CTASection from "../components/HomePage/CTA";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
const banner = "/img/seo.webp";


// ─── Intersection observer hook ──────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── Data ────────────────────────────────────────────────────────────────────
const SERVICES = [
  { num: "01", icon: <img src="/img/icon/svc-seo-audit-strategy.webp" alt="Technical SEO" width="33" height="33" />, subtitle: "Fix What's Holding You Back", title: "SEO Audit & Strategy", desc: "We begin with a comprehensive audit and strategy roadmap tailored to your business. As one of the best search engine optimization companies, we identify gaps, opportunities, and high-impact actions to strengthen your website SEO optimization and long-term visibility." },
  { num: "02", icon: <img src="/img/icon/svc-technical-seo-audit-fixes.webp" alt="Technical SEO" width="33" height="33" />, subtitle: "Fix What's Holding You Back", title: "Technical SEO Audit & Fixes", desc: "We conduct in-depth technical audits to resolve issues affecting performance—crawl errors, site speed, indexing, and mobile usability. Our approach ensures your website SEO optimization meets modern search engine optimization standards for better rankings." },
  { num: "03", icon: <img src="/img/icon/svc-seo-optimization.webp" alt="On-Page SEO" width="33" height="33" />, subtitle: "Optimize What You Already Have", title: "On-Page SEO Optimization", desc: "Our on page SEO service enhances your existing content with keyword placement, metadata optimization, internal linking, and UX improvements. As a trusted SEO optimization agency, we ensure every page drives better engagement and conversions." },
  { num: "04", icon: <img src="/img/icon/svc-content-keyword-Strategy.webp" alt="Content Management" width="33" height="33" />, subtitle: "Content That Attracts and Converts", title: "Content & Keyword Strategy", desc: "We create data-driven content aligned with search engine optimization digital marketing goals. From keyword research to execution, we help businesses—including SEO companies for small business—build authority and attract high-quality traffic." },
  { num: "05", icon: <img src="/img/icon/svc-seo-building.webp" alt="Link Building" width="33" height="33" />, subtitle: "Earn Authority, Not Just Backlinks", title: "Off-Page SEO & Authority Building", desc: "As a leading SEO company, we build high-quality backlinks through ethical outreach strategies. This strengthens your domain authority and helps you compete with the best search engine optimization companies in your industry." },
  { num: "06", icon: <img src="/img/icon/svc-seo-map-ranking.webp" alt="Local SEO" width="33" height="33" />, subtitle: "Win Local Searches, Win Local Customers", title: "Local SEO & Google Maps Ranking", desc: "Our local search engine optimization and geo SEO strategies improve your presence in local search and Google Maps. We optimize your Google Business Profile, citations, and reviews to drive real customer actions." },
  { num: "07", icon: <img src="/img/icon/svc-seo-roi-tracking.webp" alt="SEO Strategy and Reporting" width="33" height="33" />, subtitle: "Know What's Working. And What's Next.", title: "SEO Analytics & ROI Tracking", desc: "We combine search engine marketing data with advanced analytics to track rankings, traffic, and conversions. Our transparent reporting ensures your search engine optimization efforts translate into measurable ROI." },
  { num: "08", icon: <img src="/img/icon/svc-answer-engine-optimization.webp" alt="Answer Engine Optimization" width="33" height="33" />, subtitle: "Fix What's Holding You Back", title: "Answer Engine Optimization (AEO)", desc: "Our answer engine optimization (AEO) strategies help your content rank for featured snippets, voice search, and direct answers. We position your brand as the most relevant solution in evolving search experiences." },
  { num: "09", icon: <img src="/img/icon/svc-generative-engine-optimization.webp" alt="Generative Engine Optimization" width="33" height="33" />, subtitle: "Fix What's Holding You Back", title: "Generative Engine Optimization (GEO)", desc: "Our AI Search Optimization approach, powered by Generative Engine Optimization (GEO), ensures your content is discoverable across AI platforms. We structure content for machine understanding, helping you stay ahead in the future of search engine optimization digital marketing." },


];

const PROCESS_STEPS = [
  { step: "01", title: "Understand", phase: "Discovery Phase", desc: "Before we optimize anything, we dive deep into your business operations and market positioning. We connect with your core team to understand your industry, target customers, revenue goals, and long-term growth vision. This phase helps us identify key performance indicators (KPIs), customer intent, market challenges, and scalable growth opportunities unique to your business.", bullets: [] },
  { step: "02", title: "Diagnose", phase: "Technical Audit", desc: "Our team conducts a detailed audit covering technical SEO, competitor benchmarking, keyword gaps, analytics review, website structure, and overall content health. We identify everything that’s helping or hurting your visibility and search performance. Think of this as your complete SEO health check before we create the right optimization roadmap and growth strategy.", bullets: [] },
  { step: "03", title: "Strategize", phase: "Blueprint Creation", desc: "Based on our findings, we create a tailored SEO blueprint aligned with your business objectives and audience behavior. This includes your most critical fixes, highest-opportunity keywords, content themes, competitor insights, and channel mix. Every action is carefully mapped to achieve measurable business outcomes like traffic growth, better rankings, stronger engagement, and higher conversions.", bullets: [] },
  { step: "04", title: "Deploy", phase: "Full Execution", desc: "Once the strategy is finalized, our execution phase begins with structured implementation across every important SEO layer. From technical fixes and keyword-rich content updates to on-page optimization and website performance improvements, we optimize everything strategically. We also focus on local listings, mobile responsiveness, user experience, and conversion-focused journey.", bullets: [] },
  { step: "05", title: "Track", phase: "Live Monitoring", desc: "We don’t wait for monthly reviews alone to understand what’s working and what needs improvement. Our team continuously tracks real-time metrics including organic traffic, ranking shifts, user behavior, engagement patterns, and conversion signals using advanced analytics dashboards set up from day one. Every insight collected helps us refine strategies, make smarter SEO decisions consistently.", bullets: [] },
];

const HOW_WE_WORK = [
  { icon: <img src="/img/icon/hww-seo-strategy-planning.webp" alt="SEO Strategy and Planning" width="30" height="30" />, title: "SEO Strategy & Planning", desc: "We design custom search engine optimization strategies that align closely with your business objectives, industry landscape, and growth targets. As a trusted SEO optimization agency, we go beyond basic keyword planning by integrating search engine marketing insights, competitor analysis, and user intent mapping. ", label: "A", arrowIcon: "✅" },
  { icon: <img src="/img/icon/hww-expert-accountability.webp" alt="Expert Roles and Clear Accountability" width="30" height="30" />, title: "Expert Roles & Clear Accountability", desc: "Our team is built with specialized professionals including technical SEO experts, content strategists, link-building specialists, and analytics professionals. This structured approach allows us to deliver end-to-end search engine optimization digital marketing solutions with precision. As a full-scale SEO company, every aspect of your project is handled with clear ownership", label: "B", arrowIcon: "🔧" },
  { icon: <img src="/img/icon/hww-review-refine-deliver.webp" alt="Review Refine and Deliver" width="30" height="30" />, title: "Review, Refine & Deliver", desc: "Before any implementation goes live, we conduct rigorous quality checks to ensure alignment with SEO best practices, search engine guidelines, and your brand voice. Our process includes continuous testing, performance tracking, and refinement based on real-time data. Whether it’s on page SEO service, technical fixes, or e-commerce SEO services.", label: "C", arrowIcon: "🎯" },
];

// ─── SEO Hero Image ───────────────────────────────────────────────────────────
function SeoScene() {
  return (
      <div className="pcs-seo-scene">
      <img
        src={banner}
        alt="SEO Illustration"
        className="pcs-hero-img"
      />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero">

      {/* LEFT CONTENT */}
      <div className="hero-left">
        <div className="h-badge"><div className="badge-dot" /> SEO Growth</div>
        <h1 className="hero-heading" style={{fontWeight: '600'}}>
          A Leading SEO Growth
          for Growth<span className="hl lined">Traffic, Leads</span>
          &amp; Growth 
        </h1>
        <p className="hero-sub">
Whether your traffic is stagnant, leads are drying up, or you’re overspending on paid campaigns, our search engine optimization services deliver sustainable, organic growth. As a performance-driven SEO company, we combine search engine marketing insights with data-backed execution to attract the right audience and turn visibility into measurable business results.         </p>
        <div className="hero-actions">
          <a className="btn-fill" href="/contact-us">Explore More <span className="btn-arrow">›</span></a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-right">
        <img
          src={banner}
          alt="SEO Illustration"
          className="hero-img"
        />
      </div>
    </section>
  );
}

function ServicePanel({ svc, index }) {
  const [ref, visible] = useInView(0.1);
  return (
    <div ref={ref} className={`pcs-svc-panel${visible ? " vis" : ""}`} style={{transitionDelay:`${0.05 + index * 0.07}s`}}>
      {/* <div className="pcs-sp-slash" /> */}
      <div className="pcs-sp-ghost">{svc.num}</div>
      <div className="pcs-sp-bottom-line" />
      <div className="pcs-sp-icon-row">
        <span className="pcs-sp-icon-dash" />
        <span className="pcs-sp-icon">{svc.icon}</span>
      </div>
      <div className="pcs-sp-content">
        <div className="pcs-sp-subtitle">{svc.subtitle}</div>
        <h4 className="pcs-sp-title">{svc.title}</h4>
        <div className="pcs-sp-desc">{svc.desc}</div>
        {/* <a className="pcs-sp-link" href="#">LEARN MORE <span className="pcs-sp-link-arr">↗</span></a> */}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — OUR APPROACH + FORM
═══════════════════════════════════════════ */

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

      <div className="ap-inner">

        {/* LEFT CONTENT */}
        <div className="ap-left">
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Approach in</div>
          </div>
          <h2 className="ap-heading">End-to-End <span>SEO Services</span> Your Business Deserves</h2>
          <p className="ap-intro">
We create customized website SEO optimization strategies tailored to each business instead of following generic SEO methods. Every strategy is aligned with business objectives, audience intent, and the competitive market landscape.
          </p>
          <p className="ap-intro">
As a trusted search engine optimization digital marketing partner, PCS studies your complete business ecosystem, including website performance, customer behavior, sales funnel, and competitor positioning to identify meaningful growth opportunities.
          </p>
          <p className="ap-intro">
            Whether working with startups or established businesses, We focus on building scalable SEO solutions that improve online visibility, strengthen brand positioning, and help businesses compete among the best search engine optimization companies.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="ap-form-wrap">
          <div className="ap-form-card">
            <div className="form-card-eyebrow">
              <span className="form-card-eyebrow-line" />Your Growth, Our Mission<span className="form-card-eyebrow-line" />
            </div>
            <div className="form-card-title">
              Get Your <span>Free</span> Quote
            </div>

            {/* ✅ FORM START */}
            <form onSubmit={sendEmail}>

              <div className="fl-row">

                <div className="fl-group">
                  <label className="fl-label">Your Name</label>
                  <div style={{ position: "relative" }}>
                    <span className="fl-icon">👤</span>
                    <input
                      className="fl-input"
                      type="text"
                      name="name"
                      placeholder="Full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="fl-group">
                  <label className="fl-label">Company</label>
                  <div style={{ position: "relative" }}>
                    <span className="fl-icon">🏢</span>
                    <input
                      className="fl-input"
                      type="text"
                      name="company"
                      placeholder="Company name"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

              </div>

              <div className="fl-group">
                <label className="fl-label">Email Address</label>
                <div style={{ position: "relative" }}>
                  <span className="fl-icon">✉️</span>
                  <input
                    className="fl-input"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="fl-group">
                <label className="fl-label">Mobile Number</label>
                <div className="phone-row">
                  <div className="phone-flag">
                    <span className="phone-flag-icon">📞</span>

                  </div>
                  <input
                    className="fl-input"
                    type="tel"
                    name="phone"
                    placeholder="Mobile number"
                    value={form.phone}
                    onChange={handleChange}
                    maxLength="10"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
              </div>

              <div className="fl-group textarea-group">
                <label className="fl-label">Message</label>
                <div style={{ position: "relative" }}>
                  <span className="fl-icon" style={{ top: "0.9rem", transform: "none" }}>💬</span>
                  <textarea
                    className="fl-textarea"
                    name="msg"
                    placeholder="Tell us about your business needs..."
                    value={form.msg}
                    onChange={handleChange}

                  />
                </div>
              </div>

              {/* ✅ SUBMIT BUTTON */}
              <button type="submit" className="ap-submit">
                Get Free Consultation
                <span className="ap-submit-arrow">›</span>
              </button>

            </form>
            {/* ✅ FORM END */}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="pcs-svc">
      <div className="pcs-svc-dots" />
      <div className="pcs-svc-glow pcs-ssvg1" />
      <div className="pcs-svc-glow pcs-ssvg2" />
      <div className="pcs-svc-hdr">
           <div className="partners-header1" style={{ textAlign: 'center' }}>
                <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Specialized SEO Marketing Services</h2>
          </div>
        <h3 className="pcs-svc-h2">Every Keyword a Strategy.<span> Every Click a Step Forward.</span></h3>
        <p className="pcs-svc-sub">As a results-driven SEO agency, Priyam Consultancy Services crafts tailored strategies customized to your brand's goals, market, and growth stage.</p>
      </div>
      <div className="pcs-svc-panels">
        {SERVICES.map((svc, i) => <ServicePanel key={svc.num} svc={svc} index={i} />)}
      </div>
    </section>
  );
}

function ProcessStep({ step, index }) {
  const [ref, visible] = useInView(0.1);
  const isEven = index % 2 === 1;
  return (
    <div ref={ref} className={`pcs-tp-step${visible ? " tp-vis" : ""}`}>
      {isEven ? (
        <>
          <div className="pcs-tp-text-side">
            <p className="pcs-tp-desc">{step.desc}</p>
            <div className="pcs-tp-bullets">{step.bullets.map(b => <span key={b} className="pcs-tp-bullet">{b}</span>)}</div>
          </div>
          <div className="pcs-tp-num-side">
            <div className="pcs-tp-bg-num">{step.step}</div>
            <div className="pcs-tp-step-index">Step — {step.step}</div>
            <h4 className="pcs-tp-step-title">{step.title}</h4>
            <div className="pcs-tp-phase">{step.phase}</div>
          </div>
        </>
      ) : (
        <>
          <div className="pcs-tp-num-side">
            <div className="pcs-tp-bg-num">{step.step}</div>
            <div className="pcs-tp-step-index">Step — {step.step}</div>
            <h4 className="pcs-tp-step-title">{step.title}</h4>
            <div className="pcs-tp-phase">{step.phase}</div>
          </div>
          <div className="pcs-tp-text-side">
            <p className="pcs-tp-desc">{step.desc}</p>
            <div className="pcs-tp-bullets">{step.bullets.map(b => <span key={b} className="pcs-tp-bullet">{b}</span>)}</div>
          </div>
        </>
      )}
    </div>
  );
}

function Process() {
  return (
    <section className="pcs-tp-section">
      <div className="pcs-tp-cross" />
      <div className="pcs-tp-header">
           <div className="partners-header1" style={{ textAlign: 'center' }}>
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our SEO Execution Process</div>
          </div>

        <h2 className="pcs-tp-h2">Precise SEO Execution,<em> Backed by Data and Strategy</em></h2>
        <p className="pcs-tp-sub">Our SEO process at Priyam Consultancy Services is structured to meet the unique objectives of your business, step-by-step. From audits to content, everything we do is strategic, measurable, and customized.</p>
      </div>
      <div className="pcs-tp-body">
        {PROCESS_STEPS.map((step, i) => <ProcessStep key={step.step} step={step} index={i} />)}
      </div>
    </section>
  );
}

function HowWeWorkItem({ item }) {
  const [ref, visible] = useInView(0.12);
  return (
    <div ref={ref} className={`pcs-hww-arrow-item${visible ? " hww-vis" : ""}`}>
      <div className="pcs-hww-card">
        <div className="pcs-hww-icon-wrap">{item.icon}</div>
        <h4 className="pcs-hww-card-title">{item.title}</h4>
        <div className="pcs-hww-card-desc">{item.desc}</div>
      </div>
      
    </div>
  );
}

function HowWeWork() {
  return (
    <section className="pcs-hww">
      <div className="pcs-hww-dot-grid" />
      <div className="pcs-hww-glow pcs-hww-glow-1" />
      <div className="pcs-hww-glow pcs-hww-glow-2" />
      <div className="pcs-hww-header">
           <div className="partners-header1" style={{ textAlign: 'center' }}>
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>How We Work</div>
          </div>
        <h2 className="pcs-hww-h2">Plan With <span>Purpose.</span> Execute With <span>Precision.</span></h2>
      </div>
      <div className="pcs-hww-arrows-wrap">
        <div className="pcs-hww-arrow-track">
          {HOW_WE_WORK.map(item => <HowWeWorkItem key={item.label} item={item} />)}
        </div>
      </div>
    </section>
  );
}

// faq section
const faqData = [
  { q: "What is SEO?", a: " SEO (Search Engine Optimization) is the process of improving a website’s visibility on search engines like Google. It helps businesses attract organic traffic, improve rankings, increase credibility, and generate long-term online growth through optimized content, technical improvements, and strategic keyword targeting." },
  { q: "What is the difference between SEO and SEM?", a: "SEO focuses on improving organic search rankings through long-term optimization strategies, while SEM (Search Engine Marketing) includes paid advertising campaigns like Google Ads for immediate visibility. SEO builds sustainable traffic over time, whereas SEM generates faster short-term results through paid promotions." },
  { q: "How long does SEO take to show results?", a: "SEO is a long-term strategy, and results typically begin appearing within 3 to 6 months depending on competition, industry, website condition, and keyword difficulty. Consistent optimization, quality content, and technical improvements contribute to stronger and more sustainable ranking growth over time." },
  { q: "What do your SEO services include?", a: " Our SEO services include keyword research, technical SEO, on-page optimization, content strategy, link building, local SEO, performance tracking, competitor analysis, and regular reporting. We focus on improving search visibility, website traffic, user engagement, and long-term business growth through data-driven optimization strategies." },
  { q: "Do you work with specific industries?", a: "We work with businesses across multiple industries including healthcare, technology, ecommerce, construction, consulting, retail, manufacturing, and professional services. Our SEO strategies are customized based on industry trends, audience behavior, competition levels, and business goals to deliver measurable digital growth outcomes." },
  { q: "What do e-commerce SEO services include?", a: " E-commerce SEO services include product page optimization, category structure improvements, technical SEO, keyword targeting, content optimization, image optimization, schema implementation, and conversion-focused strategies. The goal is to improve product visibility, increase organic traffic, and drive higher online sales performance" },
];

function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <section className="faq-section" style={{padding: '80px 0 0'}}>
      <div className="partners-header2" style={{ textAlign: 'center', marginTop: '20px' }}>
        <h4 className="partners-eyebrow" >Frequently Asked Questions</h4>
      </div>
      <div className="container">
        {/* TITLE */}
        <div className="faq-head">
          <h3 className="faq-h3">Queries That Could <span>Hold You Back</span></h3>
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
export default function PcsSeoPage() {

const breadcrumbSchema = {
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
        "@id": "https://www.priyamconsultancy.com/search-engine-optimization/",
        "name": "Search Engine Optimization"
      }
    }
  ]
};

const organizationSchema = {
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
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.priyamconsultancy.com/search-engine-optimization/#service",
  "name": "Search Engine Optimization",
  "serviceType": "SEO Services",
  "url": "https://www.priyamconsultancy.com/search-engine-optimization/",
  "description": "PCS is an award-winning SEO company in India. Search engine visibility for your website is improved with our expert Search Engine Optimization services.",
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
};

const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Search Engine Optimization",
  "image": [
    "https://www.priyamconsultancy.com/img/seo.png"
  ],
  "description": "Best SEO services in Coimbatore offering keyword research, technical SEO, on-page optimization, content strategy, link building, local SEO, ecommerce SEO and search engine ranking improvement solutions.",
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
    "reviewCount": "4587"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.priyamconsultancy.com/search-engine-optimization/",
    "priceCurrency": "USD",
    "price": "0.00",
    "priceValidUntil": "2026-12-31",
    "itemCondition": "https://schema.org/NewCondition",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Priyam Consultancy Services"
    }
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO (Search Engine Optimization) is the process of improving a website's visibility on search engines like Google."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between SEO and SEM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO focuses on organic rankings while SEM includes paid advertising such as Google Ads."
      }
    },
    {
      "@type": "Question",
      "name": "How long does SEO take to show results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO results typically begin appearing within 3 to 6 months depending on competition and website condition."
      }
    },
    {
      "@type": "Question",
      "name": "What do your SEO services include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our SEO services include keyword research, technical SEO, on-page optimization, content strategy, link building, local SEO and reporting."
      }
    }
  ]
}; 
  return (
    <Layout>
      <div className="pg-seo">
      <Head>
        <title>Best SEO Company in India | Search Engine Optimization</title>
        <meta name="description" content="PCS is an award-winning SEO company in India. Search engine visibility for your website is improved with our export Search Engine Optimization services." />
        <meta name="keywords" content="SEO Agency, Search Engine Optimization, SEO Services, SEO Company, Search Engine Optimization Agency, SEO Services Providers" />
        <link rel="canonical" href="https://www.priyamconsultancy.com/search-engine-optimization" />
        {/* Open Graph */}
        <meta property="og:title" content="Best SEO Company in India | Search Engine Optimization" />
        <meta property="og:description" content="PCS is an award-winning SEO company in India. Search engine visibility for your website is improved with our export Search Engine Optimization services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.priyamconsultancy.com/search-engine-optimization" />
        <meta property="og:image" content="https://www.priyamconsultancy.com/img/seo.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best SEO Company in India | Search Engine Optimization" />
        <meta name="twitter:description" content="PCS is an award-winning SEO company in India. Search engine visibility for your website is improved with our export Search Engine Optimization services." />
        <meta name="twitter:image" content="https://www.priyamconsultancy.com/img/seo.png" />
        {/* Schema */}
         <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      </Head>
      <Hero />
      <ApproachSection />
      <Services />
      <Process />
      <HowWeWork />
      <FAQSection/>
      <BlogSection />
      <CTASection />

      </div>
    </Layout>
  );
}