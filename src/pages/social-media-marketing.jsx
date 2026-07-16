import '../css/pages-common.css';
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import BlogSection from "../components/BlogSection";
import CTASection from "../components/HomePage/CTA";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
const banner = "/img/smm.webp";


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
  { num: "01", icon: <img src="/img/icon/svc-social-strategy.webp" alt="Social Media Strategy and Planning" width="28" height="28" />, subtitle: "Brand Presence", title: "Social Media Strategy & Planning", desc: "We begin by building a strong strategic foundation tailored to your brand and industry. Our team crafts detailed content calendars, platform-specific blueprints, posting schedules, and campaign themes. We identify the type of content that resonates with your audience and ensure consistency across channels. From tone of voice to visual aesthetics, every detail is fine-tuned for maximum engagement and clarity.", },
  { num: "02", icon: <img src="/img/icon/svc-instagram-facebook.webp" alt="Instagram and Facebook Marketing" width="28" height="28" />, subtitle: "Visual Identity", title: "Instagram & Facebook Marketing", desc: "We help you stand out in the scroll. From carousel posts and reels to stories and UGC, we create compelling, scroll-stopping content that sparks engagement and builds lasting loyalty. Whether your goal is to boost awareness or drive conversions through Meta Ads, our creative and performance teams work in tandem to deliver visuals, copy, and CTAs that truly click, driving measurable results for your brand.", },
  { num: "03", icon: <img src="/img/icon/svc-linkedin-b2b.webp" alt="LinkedIn B2B Campaigns" width="28" height="28" />, subtitle: "Paid Campaigns", title: "LinkedIn B2B Campaigns", desc: "LinkedIn isn't just for hiring; it's where enduring trust is truly built in the B2B world. We help you effectively generate leads, position your team as influential thought leaders, and build an authoritative voice in your niche. From executive ghostwriting to sponsored content strategies, we ensure your business is consistently seen and respected by the right audience. Elevate your brand's presence and unlock new opportunities on this essential platform, driving real business growth.", },
  { num: "04", icon: <img src="/img/icon/svc-social-content.webp" alt="Social Content Creation" width="28" height="28" />, subtitle: "Community Building", title: "Social Content Creation", desc: "We handle the entire content production process: ideation, scripting, designing, and editing. Whether you need product showcases, brand stories, memes, or testimonials, we ensure your social feed reflects your brand personality and speaks directly to your audience’s interests, challenges, and aspirations.", },
  { num: "05", icon: <img src="/img/icon/svc-community-management.webp" alt="Community Management" width="28" height="28" />, subtitle: "Partnerships", title: "Community Management", desc: "Engagement doesn’t end with publishing. We help you stay connected with your audience by responding to DMs, comments, and tags in a timely, friendly, and brand-consistent manner. We also monitor sentiment and escalate critical feedback or opportunities, keeping your community positive and active.", },
  { num: "06", icon: <img src="/img/icon/svc-paid-social-ads.webp" alt="Paid Social Ads" width="28" height="28" />, subtitle: "Insights & ROI", title: "Paid Social & Media Advertising", desc: "We scale your growth with performance-driven social media marketing and media advertising campaigns, optimized for ROI.", },
];

const PROCESS_STEPS = [
  { step: "01", title: "Discover", phase: "Brand Audit", desc: "Every engagement begins with discovery and understanding your unique business journey. We listen carefully to your goals, review past performance, analyze competitors, and define the audience personas that matter most. This phase sets the tone for everything we build together — from brand voice and communication style to campaign KPIs, engagement objectives, and long-term growth direction.", bullets: [] },
  { step: "02", title: "Research & Audit", phase: "Custom Roadmap", desc: "Before we post a single piece of content, we analyze what’s working and what needs improvement across your digital presence. We evaluate platform analytics, competitor strategies, hashtag effectiveness, audience behavior, content gaps, and engagement trends to ensure we build your social presence from a position of strength, opportunity, and market relevance.", bullets: [] },
  { step: "03", title: "Plan & Strategize", phase: "Content Production", desc: "With insights in hand, we build a smart and scalable social media roadmap tailored to your business goals. We define your core content pillars, plan campaigns around seasonal opportunities, create visually distinct templates, and align everything with your broader marketing strategy. Every content plan includes posting schedules, caption hooks, engagement tactics, and CTA goals.", bullets: [] },
  { step: "04", title: "Create & Publish", phase: "Full Execution", desc: "Once approved, we move into seamless execution with a collaborative creative workflow. Our team of designers, writers, strategists, and video editors work together to deliver consistency. We schedule posts at optimal times, use relevant hashtags strategically, and optimize captions to improve engagement, reach, clicks, and audience interaction.", bullets: [] },
  { step: "05", title: "Monitor & Optimize", phase: "Continuous Growth", desc: "After publishing, the real optimization process begins through continuous monitoring and performance analysis. We track metrics across reach, engagement, saves, shares, profile visits, link clicks, and conversions to understand audience behavior. Based on these insights, we refine content strategies,continuously enhance overall social media performance over time.", bullets: [] },
];

const HOW_WE_WORK = [
  { icon: <img src="/img/icon/hww-channel-planning.webp" alt="Channel-Specific Planning" width="30" height="30" />, title: "Channel-Specific Planning", desc: " Each social media platform demands a unique approach. What works on LinkedIn might flop on Instagram. That’s why we plan platform-wise, ensuring content formats, tone, and goals are perfectly matched to each ecosystem." },
  { icon: <img src="/img/icon/hww-team-experts.webp" alt="Team of Experts" width="30" height="30" />, title: "Team of Experts", desc: " Your social presence is managed by a team that includes strategists, writers, motion designers, ad specialists, and analytics pros. This collaborative ecosystem ensures that your campaigns are not only creative but also efficient and data-driven." },
  { icon: <img src="/img/icon/hww-performance-driven.webp" alt="Performance-Driven Approach" width="30" height="30" />, title: "Performance-Driven Approach", desc: " We love metrics. Engagement rate, reach, follower growth, CTR, cost-per-lead you name it, we track it. We help you move beyond vanity metrics and focus on what matters: actual business outcomes." },
];

const faqData = [
  { q: "What social media platforms do you manage?", a: " We manage social media platforms including Instagram, Facebook, LinkedIn, YouTube, X (Twitter), and other relevant channels based on your business goals, audience behavior, and industry requirements. Our strategies are customized to improve visibility, engagement, and overall brand communication across digital platforms." },
  { q: "Do you create content for social media accounts?", a: "Yes, we create strategic social media content including creatives, captions, reels, carousels, promotional campaigns, and branded communication. Our content approach focuses on audience engagement, brand consistency, visibility, and creating meaningful interactions that support your overall marketing objectives and business growth." },
  { q: "Do you run paid social media ads?", a: "Yes, we manage paid social media advertising campaigns across platforms like Facebook, Instagram, LinkedIn, and YouTube. Our campaigns focus on audience targeting, lead generation, brand awareness, engagement growth, and conversion optimization to maximize advertising performance and return on investment." },
  { q: "Which social media platform is best for my business?", a: " The ideal platform depends on your industry, target audience, business goals, and content strategy. We analyze customer behavior and market trends to recommend the most effective social media platforms for improving engagement, visibility, lead generation, and long-term digital growth." },
  { q: "Can social media marketing help generate leads?", a: "Yes, social media marketing can effectively generate qualified leads through targeted campaigns, engaging content, optimized landing pages, and audience-focused advertising strategies. It helps businesses improve visibility, attract potential customers, build trust, and increase conversions across digital platforms consistently." },
  { q: "How do you increase followers and engagement?", a: "We increase followers and engagement through strategic content creation, audience targeting, consistent posting, performance-driven campaigns, trend analysis, community interaction, and platform optimization. Our approach focuses on attracting relevant audiences while improving meaningful engagement, reach, and long-term brand visibility organically and through paid strategies." },
];

// ─── SMM Hero Image ───────────────────────────────────────────────────────────
function SmmScene() {
  return (
      <div className="smm-scene">
      <img
        src={banner}
        alt="Social Media Marketing Illustration"
        className="smm-hero-img"
      />
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="smm-hero">
      <div className="smm-hero-left">
        <div className="smm-badge"><div className="smm-badge-dot" />Brand Engagement </div>
        <h1 className="smm-hero-heading" style={{fontWeight: '600'}}>
          Turn Followers into <br />
          <span className="orange lined">Customers </span> with Social Media Marketing
        </h1>
        <p className="smm-hero-sub">
At PCS, we don’t just manage platforms — we deliver results through social media marketing that connects, engages, and converts. As a performance-focused social media marketing agency, we help brands grow organically while scaling through smart campaigns and media advertising.
<br /> Our social media marketing services combine creative storytelling, targeted campaigns, and data-driven insights to turn attention into measurable business outcomes.

        </p>
        <div className="smm-hero-actions">
          <a className="smm-btn-fill" href="/contact-us">Explore More <span className="smm-btn-arrow">›</span></a>
        </div>
      </div>
      <div className="smm-hero-right"><SmmScene /></div>
    </section>
  );
}

// ─── Approach + Form ──────────────────────────────────────────────────────────
function ApproachSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", msg: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      name: form.name, email: form.email, phone: form.phone,
      company: form.company, message: form.msg, url: window.location.href,
    };
    emailjs.send("service_8xw6k3r", "template_jarui36", templateParams, "XWRnXi4hK2SvmRG3q")
      .then(() => { alert("Message Sent Successfully ✅"); setForm({ name:"", email:"", phone:"", company:"", msg:"" }); })
      .catch((error) => { console.log(error); alert("Failed to send ❌"); });
  };

  return (
    <section className="approach" id="approach">
      <div className="ap2-inner">
        <div className="ap-left">
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Approach in</div>
          </div>
          <h2 className="ap2-heading">Purpose-Driven <span>Social Media </span> That Engages, Grows & Converts</h2>
          <p className="ap-intro">
In today’s digital-first world, social media marketing agencies plays a critical role in building trust and influencing decisions. At PCS, every social media marketing campaign is built with a clear objective — whether it's awareness, engagement, or conversions.
          </p>
          <p className="ap-intro">
As a results-driven social media marketing agency, we connect your brand with the right audience at the right time. Our approach blends creativity with analytics to maximize reach, engagement, and ROI through effective social media marketing services.
          </p>
          <p className="ap-intro">
            We go beyond routine posting. Our social media marketing strategies are built after analyzing audience behavior, competitor activity, and industry trends — ensuring every campaign drives consistent growth.

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
    <div ref={ref} className={`smm-svc-panel${visible ? " vis" : ""}`} style={{transitionDelay:`${0.05 + index * 0.07}s`}}>
      <div className="smm-sp-slash" />
      <div className="smm-sp-ghost">{svc.num}</div>
      <div className="smm-sp-bottom-line" />
      <div className="smm-sp-icon-row">
        <span className="smm-sp-icon-dash" />
        <span className="smm-sp-icon">{svc.icon}</span>
      </div>
      <div className="smm-sp-content">
        <div className="smm-sp-subtitle">{svc.subtitle}</div>
        <h4 className="smm-sp-title">{svc.title}</h4>
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
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Specialized Social Media Marketing Services</h2>
        </div>
        <h3 className="smm-svc-h2">Not Just Posts. <span> <i>Conversations </i></span>That Convert.</h3>
        <p className="smm-svc-sub">
        We don’t treat social as a side channel, it’s a core growth lever. Our services are designed to help you dominate each platform with purpose and precision.
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
            <h4 className="smm-tp-step-title">{step.title}</h4>
            <div className="smm-tp-phase">{step.phase}</div>
          </div>
        </>
      ) : (
        <>
          <div className="smm-tp-num-side">
            <div className="smm-tp-bg-num">{step.step}</div>
            <div className="smm-tp-step-index">Step — {step.step}</div>
            <h4 className="smm-tp-step-title">{step.title}</h4>
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
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Proven Social Media Marketing Process</h2>
        </div>
        <h3 className="smm-tp-h2">Strategy Driven. <em><i> Audience First.</i></em> ROI Focused.</h3>
        <p className="smm-tp-sub">
        We combine deep research with creative execution and agile iteration to ensure your social media consistently delivers measurable impact.
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
        <h4 className="smm-hww-card-title">{item.title}</h4>
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
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Focus on Your Results in Social Media Marketing</h2>
        </div>
        <h3 className="smm-hww-h2">Create Content. <span><i>Build Community. </i></span> Drive Results.</h3>
        <p className="smm-hww-sub">
We don’t believe in posting for the sake of it. Every action is backed by strategy and aimed at results.        </p>
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
        <h2 className="partners-eyebrow" >Frequently Asked Questions</h2>
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
export default function PcsSmmPage() {

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
          "@id": "https://www.priyamconsultancy.com/social-media-marketing/",
          "name": "social-media-marketing"
        }
      }
    ]
  };
 
  // =============================================
  // 2. ORGANIZATION SCHEMA
  // =============================================
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
 
  // =============================================
  // 3. SERVICE PAGE SCHEMA (உங்கள் existing schema + hasOfferCatalog சேர்க்கப்பட்டது)
  // =============================================
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.priyamconsultancy.com/social-media-marketing/#service",
    "name": "Social Media Marketing Services",
    "serviceType": "Social Media Marketing Services",
    "url": "https://www.priyamconsultancy.com/social-media-marketing/",
    "description": "Priyam Consultancy provides professional social media marketing services including content creation, social media management, paid advertising, audience engagement, lead generation, brand awareness campaigns and platform growth strategies across India.",
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
    },
    // hasOfferCatalog — new code-இல் இருந்து சேர்க்கப்பட்டது
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Social Media Marketing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Strategy" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paid Social Advertising" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Creation & Scheduling" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Community Management" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Influencer Marketing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Analytics & Reporting" } }
      ]
    }
  };
 
  // =============================================
  // 4. PRODUCT SCHEMA
  // =============================================
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "social-media-marketing",
    "image": ["https://www.priyamconsultancy.com/img/smm.png"],
    "description": "Best social media marketing services in Coimbatore offering content creation, social media management, Facebook marketing, Instagram marketing, LinkedIn marketing, paid social media advertising and lead generation solutions.",
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
      "reviewCount": "4674"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.priyamconsultancy.com/social-media-marketing/",
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
  };
 
  // =============================================
  // 5. FAQ SCHEMA
  // =============================================
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What social media platforms do you manage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We manage social media platforms including Instagram, Facebook, LinkedIn, YouTube, X (Twitter), and other relevant channels based on your business goals, audience behavior, and industry requirements. Our strategies are customized to improve visibility, engagement, and overall brand communication across digital platforms."
        }
      },
      {
        "@type": "Question",
        "name": "Do you create content for social media accounts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we create strategic social media content including creatives, captions, reels, carousels, promotional campaigns, and branded communication. Our content approach focuses on audience engagement, brand consistency, visibility, and creating meaningful interactions that support your overall marketing objectives and business growth."
        }
      },
      {
        "@type": "Question",
        "name": "Do you run paid social media ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we manage paid social media advertising campaigns across platforms like Facebook, Instagram, LinkedIn, and YouTube. Our campaigns focus on audience targeting, lead generation, brand awareness, engagement growth, and conversion optimization to maximize advertising performance and return on investment."
        }
      },
      {
        "@type": "Question",
        "name": "Which social media platform is best for my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The ideal platform depends on your industry, target audience, business goals, and content strategy. We analyze customer behavior and market trends to recommend the most effective social media platforms for improving engagement, visibility, lead generation, and long-term digital growth."
        }
      },
      {
        "@type": "Question",
        "name": "Can social media marketing help generate leads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, social media marketing can effectively generate qualified leads through targeted campaigns, engaging content, optimized landing pages, and audience-focused advertising strategies. It helps businesses improve visibility, attract potential customers, build trust, and increase conversions across digital platforms consistently."
        }
      },
      {
        "@type": "Question",
        "name": "How do you increase followers and engagement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We increase followers and engagement through strategic content creation, audience targeting, consistent posting, performance-driven campaigns, trend analysis, community interaction, and platform optimization. Our approach focuses on attracting relevant audiences while improving meaningful engagement, reach, and long-term brand visibility organically and through paid strategies."
        }
      }
    ]
  };
 
  return (
    <Layout>
      <div className="pg-smm">
      <Head>
        <title>Social Media Marketing Company in India | SMM Services</title>
        <meta
          name="description"
          content="Boost your brand with India's leading social media marketing company. We produce content across all social platforms that drives growth and visibility for your brand."
        />
        <meta
          name="keywords"
          content="Social Media Marketing, SMM Services, Social Media Marketing Agency, Social Media Advertising, Social Media Marketing Services, Social Media Marketing Company, Social Media Management Agency, Social Media Management Services, Social Media Marketing Companies"
        />
        <link
          rel="canonical"
          href="https://www.priyamconsultancy.com/social-media-marketing/"
        />
 
        {/* Open Graph */}
        <meta property="og:title" content="Social Media Marketing Company in India | SMM Services" />
        <meta
          property="og:description"
          content="Boost your brand with India's leading social media marketing company. We produce content across all social platforms that drives growth and visibility for your brand."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.priyamconsultancy.com/social-media-marketing" />
        <meta property="og:image" content="https://www.priyamconsultancy.com/img/social-media-marketing.png" />
 
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Social Media Marketing Company in India | SMM Services" />
        <meta
          name="twitter:description"
          content="Boost your brand with India's leading social media marketing company. We produce content across all social platforms that drives growth and visibility for your brand."
        />
        <meta name="twitter:image" content="https://www.priyamconsultancy.com/img/social-media-marketing.png" />
 
        {/* ✅ Schema Scripts — அனைத்தும் சேர்க்கப்பட்டன */}
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
      <FAQSection />
      <BlogSection/>
      <CTASection />
      </div>
    </Layout>
  );
}