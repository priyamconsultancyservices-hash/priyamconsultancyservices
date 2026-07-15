import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import CTASection from "../components/HomePage/CTA";
import BlogSection from "../components/BlogSection";
import Layout from '@theme/Layout';
const banner = "/img/website-design.webp";
import Head from '@docusaurus/Head';


function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/website-design/";
  const imageUrl = "https://www.priyamconsultancy.com/img/website-design.png";

  return (
    <Head>
      {/* ── Primary Meta ── */}
      <title>Website Design Company | Custom & SEO-Friendly Web Design </title>
      <meta name="description" content="Professional website design company in Coimbatore offering responsive, SEO-ready, and custom website design solutions to grow your business online. " />
      <meta name="keywords" content="Website design, Website design Services, Website designers in Coimbatore, Website design company in coimbatore, Website design agency, website design company, Best website design, sample website design" />
      <link rel="canonical" href="https://www.priyamconsultancy.com/website-design/" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Website Design Company | Custom & SEO-Friendly Web Design " />
      <meta property="og:description" content="Professional website design company in Coimbatore offering responsive, SEO-ready, and custom website design solutions to grow your business online. " />
      <meta property="og:url" content="https://www.priyamconsultancy.com/website-design/" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="PCS Business Solution" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Website Design Company | Custom & SEO-Friendly Web Design " />
      <meta name="twitter:description" content="Professional website design company in Coimbatore offering responsive, SEO-ready, and custom website design solutions to grow your business online. " />
      <meta name="twitter:image" content={imageUrl} />

      {/* ── Breadcrumb List Schema ── */}
      <script type="application/ld+json">{`
      {
 "@context":"https://schema.org",
 "@type":"BreadcrumbList",
 "itemListElement":[
   {
     "@type":"ListItem",
     "position":1,
     "item":{
       "@id":"https://www.priyamconsultancy.com/",
       "name":"Home"
     }
   },
   {
     "@type":"ListItem",
     "position":2,
     "item":{
       "@id":"https://www.priyamconsultancy.com/website-design/",
       "name":"website-design"
     }
   }
 ]
}



      `}</script>

      {/* ── Organization Schema ── */}
      <script type="application/ld+json">{`
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
}

      `}</script>

      {/* ── Service Schema ── */}
      <script type="application/ld+json">{`
      {
  "@context":"https://schema.org",
  "@type":"Service",
  "@id":"https://www.priyamconsultancy.com/website-design/#service",
  "name":"Website Design",
  "serviceType":"Website Design Services",
  "url":"https://www.priyamconsultancy.com/website-design/",
  "description":"Priyam Consultancy provides professional website design services including UI/UX design, responsive website design, landing page design, branding-focused web layouts and user experience optimization for businesses across India.",
  "provider":{
    "@type":"Organization",
    "name":"Priyam Consultancy Services",
    "url":"https://www.priyamconsultancy.com/",
    "logo":{
      "@type":"ImageObject",
      "url":"https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png"
    }
  },
  "areaServed":{
    "@type":"Country",
    "name":"India"
  }
}

      `}</script>

      {/* ── Product Schema (Business Registration) ── */}
      <script type="application/ld+json">{`
      {
"@context": "https://schema.org/",
"@type": "Product",
"name": "website-design",
"image": ["https://www.priyamconsultancy.com/img/website-design.png"],
"description": "Best website design services in Coimbatore offering responsive website design, UI/UX design, corporate website design, ecommerce website design, landing page design and user-focused web design solutions.",
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
"reviewCount": "4524"
},
"offers": {
"@type": "Offer",
"url": "https://www.priyamconsultancy.com/website-design/",
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
}


      `}</script>

      {/* ── FAQ Schema (Business Registration) ── */}
      <script type="application/ld+json">{`
      { 
  "@context": "https://schema.org", 
  "@type": "FAQPage", 
  "mainEntity": [{ 
    "@type": "Question", 
    "name": "Do you redesign existing websites?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, we redesign existing websites to improve their visual appeal, user experience, and overall performance. Our redesign process focuses on modern layouts, better navigation, responsive structure, and brand consistency while keeping the useful content intact." 
    } 
  },{ 
    "@type": "Question", 
    "name": "Do you provide custom UI/UX design?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Common website design problems include poor navigation, outdated visuals, slow loading speed, lack of mobile responsiveness, inconsistent branding, and unclear call-to-actions. These issues can reduce user trust and affect overall business performance." 
    }
  },{ 
    "@type": "Question", 
    "name": "What are the most common problems in website design??", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "UI/UX design affects how users interact with your website. A well-designed interface improves usability, builds trust, increases engagement, and helps visitors take action more easily.
" 
    } 
  },{ 
    "@type": "Question", 
    "name": "Why is UI/UX important for a business website", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Absolutely! We offer content writing services and on-page SEO services to ensure that your website looks good and performs well in search engines." 
    } 
 },{ 
    "@type": "Question", 
    "name": "Will my website be mobile-friendly and SEO-ready?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Yes, your website will be designed to work smoothly on all devices and follow SEO-friendly structure. We focus on responsive design, clean coding, fast loading, and proper on-page elements to support better visibility." 
    } 
 },{ 
    "@type": "Question", 
    "name": "What is included in your UI/UX design process?
", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Our UI/UX design process includes research, wireframing, design mockups, revisions, and final approval. We make sure the design aligns with your business goals and creates a user-friendly experience." 
    } 
    }] 
}

      `}</script>
    </Head>
  );
}


const offerData = [
  { emoji: "/img/icon/design.webp", label: "Social", title: "Social & Third-Party Integrations", desc: "Modern websites need to be connected and functional. PCS integrates your website with social media platforms, analytics tools, CRM systems, and other essential third-party applications. This enhances engagement, improves tracking, and supports your overall digital marketing strategy.", tags: ["Connected","Integrated","Automated","Functional"] },
  { emoji: "/img/icon/planning.webp", label: "Delivery", title: "On-Time Delivery", desc: "We value your time and business commitments. PCS follows a structured development process with clearly defined timelines to ensure timely project completion. Our efficient workflow ensures your website design is delivered on schedule without compromising on quality or performance.", tags: ["Timely","Reliable","Efficient","Consistent"] },
  { emoji: "/img/icon/mobile.webp", label: "Experience", title: "Seamless User Experience", desc: "User experience plays a critical role in engagement and conversions. Our team focuses on clean layouts, structured content, and intuitive navigation to ensure visitors can easily find what they’re looking for. A smooth browsing experience encourages users to stay longer and take action.", tags: ["Intuitive","Structured","Smooth","Engaging"] },
  { emoji: "/img/icon/target.webp", label: "Responsive Design", title: "Responsive & Device-Ready Design", desc: "With users browsing across mobiles, tablets, laptops, and desktops, having a fully responsive website is essential. At PCS, we design websites that seamlessly adapt to all screen sizes and devices. This ensures a consistent, visually appealing, and high-performing experience for your visitors—no matter how they access your website.", tags: ["Adaptive","Responsive","Optimized","Seamless"] },
  { emoji: "/img/icon/performance.webp", label: "Customized", title: "Customized Website Solutions", desc: "Every business has its own identity, goals, and audience. That’s why PCS delivers tailor-made website solutions designed specifically around your brand requirements. We understand your business objectives and create a website design that not only reflects your brand personality but also differentiates you from competitors.", tags: ["Tailored","Strategic","Unique","Branded"] },
];

const nodePositions = [
  { top: "5%", left: "50%" },
  { top: "22%", left: "87%" },
  { top: "73%", left: "82%" },
  { top: "73%", left: "18%" },
  { top: "22%", left: "13%" },
];

const connectorAngles = [-90, -18, 54, 126, 198];

const includedData = [
  { num:"01", icon:"/img/icon/website-custom-design.webp", title:"Custom UI/UX Design", desc:"We craft visually engaging and brand-aligned website designs tailored to your business goals. From layout structure to typography and color systems, every element is thoughtfully designed to enhance visual appeal and user experience.", tags:[{t:"UI Design",c:"t-orange"},{t:"UX Strategy",c:"t-blue"},{t:"Brand Alignment",c:"t-orange"},{t:"Typography",c:"t-blue"}] },
  { num:"02", icon:"/img/icon/website-design-structured-planning.webp", title:"Structured Content Layout", desc:"Great design supports great content. We organize and structure your website content for clarity, readability, and flow — ensuring visitors can easily navigate and understand your message.", tags:[{t:"Content Hierarchy",c:"t-orange"},{t:"Info Architecture",c:"t-blue"},{t:"CTA Placement",c:"t-orange"},{t:"Navigation Flow",c:"t-blue"}] },
  { num:"03", icon:"/img/icon/website-design-mobile.webp", title:"Responsive Design Experience", desc:"Our designs are fully responsive, adapting seamlessly across mobiles, tablets, and desktops. This ensures consistent branding, smooth browsing, and a visually polished experience on every device.", tags:[{t:"Mobile-First",c:"t-orange"},{t:"Cross-Device",c:"t-blue"},{t:"Fluid Layouts",c:"t-orange"},{t:"Touch UX",c:"t-blue"}] },
  { num:"04", icon:"/img/icon/website-design-branding.webp", title:"Visual Branding Consistency", desc:"We maintain strong visual consistency across pages using defined brand elements, imagery, iconography, and design systems — reinforcing credibility and professional identity.", tags:[{t:"Brand Guidelines",c:"t-orange"},{t:"Colour System",c:"t-blue"},{t:"Visual Identity",c:"t-orange"},{t:"Brand Voice",c:"t-blue"}] },
  { num:"05", icon:"/img/icon/website-design-performance.webp", title:"Performance & Engagement Optimization", desc:"Our design approach focuses on engagement. With clear calls-to-action, intuitive layouts, and strategic section placement, we create websites that not only look impressive but encourage meaningful interaction.", tags:[{t:"Page Speed",c:"t-orange"},{t:"Core Web Vitals",c:"t-blue"},{t:"SEO Architecture",c:"t-orange"},{t:"Conversion Rate",c:"t-blue"}] },
];

const processSteps = [
  { num:"01", icon:"/img/icon/website-design-target.webp", title:"Discovery & Requirement Analysis", desc:"We begin by understanding your business, target audience, brand positioning, and goals. This helps us define a clear design direction aligned with your objectives.", tags:["Business Goals","Audience Research","Competitor Analysis"], last:false },
  { num:"02", icon:"/img/icon/website-design-planning.webp", title:"Research & Strategy Planning", desc:"We analyze competitors, industry trends, and user behavior to create a strategic design plan that ensures clarity, differentiation, and effective communication.", tags:["Wireframes","Site Architecture","Content Planning"], last:false },
  { num:"03", icon:"/img/icon/website-design-wireframing.webp", title:"Wireframing & Structure", desc:"We design structured wireframes to map layouts, content placement, and user flow. This ensures logical navigation and a strong visual hierarchy before final design execution.", tags:["Visual Design","Brand System","UX Prototyping"], last:false },
  { num:"04", icon:"/img/icon/website-design-settings.webp", title:"Creative UI Design", desc:"Our team creates visually compelling, brand-focused designs including typography, color schemes, imagery, and interface elements that reflect professionalism and consistency.", tags:["Responsive Code","SEO Structure","Performance"], last:false },
  { num:"05", icon:"/img/icon/website-design-seo-optimization.webp", title:"Responsive Optimization", desc:"We refine the design for seamless viewing across desktops, tablets, and mobile devices, ensuring consistency, usability, and smooth interaction on every screen.", tags:["Cross-Browser","Speed Testing","QA Review"], last:false },
  { num:"06", icon:"/img/icon/website-design-launch.webp", title:"Review, Feedback & Finalization", desc:"We collaborate with you for feedback, make necessary refinements, and finalize the design to ensure it meets expectations and is ready for a flawless launch.", tags:["Go Live","Monitoring","Ongoing Support"], last:true },
];

const whyData = [
  { cls:"pcs-fb-box-tl", icon:"/img/icon/website-user-design-strategy.webp", title:"Intuitive & User-Centric Design", desc:"At PCS, our website designs are created with the end user in mind. We focus on clarity, smooth navigation, and structured layouts to deliver an engaging and effortless browsing experience that keeps visitors exploring." },
  { cls:"pcs-fb-box-tr", icon:"/img/icon/website-design-seo-structure.webp", title:"SEO-Ready Design Structure", desc:"We incorporate search-friendly design practices from the beginning. Clean layouts, optimized content placement, and responsive frameworks help improve visibility, enhance organic reach, and support stronger search engine performance." },
  { cls:"pcs-fb-box-bl", icon:"/img/icon/website-design-mobile-responsive.webp", title:"Responsive & Adaptive Experience", desc:"With most users browsing on mobile devices, we ensure every website design is fully responsive. Our layouts adapt seamlessly across desktops, tablets, and smartphones for consistent branding and flawless usability." },
  { cls:"pcs-fb-box-br", icon:"/img/icon/website-design-security.webp", title:"Secure & Reliable Framework", desc:"We prioritize website safety by implementing secure design standards and best practices. Our approach helps protect user data, maintain site stability, and ensure long-term performance with regular updates and monitoring support." },
];

const faqData = [
  { q: " Do you redesign existing websites?", a: "Yes, we redesign existing websites to improve their visual appeal, user experience, and overall performance. Our redesign process focuses on modern layouts, better navigation, responsive structure, and brand consistency while keeping the useful content intact." },
  { q: "Do you provide custom UI/UX design?", a: "Yes, we offer fully customized UI/UX design tailored to your brand identity, audience behavior, and business goals. Our approach ensures intuitive navigation, engaging layouts, and a smooth user journey that supports better interaction and conversions." },
  { q: "What are the most common problems in website design?", a: "Common website design problems include poor navigation, outdated visuals, slow loading speed, lack of mobile responsiveness, inconsistent branding, and unclear call-to-actions. These issues can reduce user trust and affect overall business performance." },
  { q: "Why is UI/UX important for a business website?", a: "UI/UX design affects how users interact with your website. A well-designed interface improves usability, builds trust, increases engagement, and helps visitors take action more easily." },
  { q: "Will my website be mobile-friendly and SEO-ready?", a: "Yes, your website will be designed to work smoothly on all devices and follow SEO-friendly structure. We focus on responsive design, clean coding, fast loading, and proper on-page elements to support better visibility." },
  { q: "What is included in your UI/UX design process?", a: "Our UI/UX design process includes research, wireframing, design mockups, revisions, and final approval. We make sure the design aligns with your business goals and creates a user-friendly experience." },
];

export default function PCSWebsite() {
  const [activeOffer, setActiveOffer] = useState(0);
  const [openTab, setOpenTab] = useState(0);

  // Auto-loop Our Services orbit nodes
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveOffer(prev => (prev + 1) % offerData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Auto-open Our Included accordion tabs
  useEffect(() => {
    const timer = setInterval(() => {
      setOpenTab(prev => (prev + 1) % includedData.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

   const handleOfferSelect = (i) => setActiveOffer(i);
  const handleTabToggle = (i) => setOpenTab(openTab === i ? -1 : i);

  const [form, setForm] = useState({ name:"", email:"", phone:"", company:"", msg:"" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
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
        setForm({ name:"", email:"", phone:"", company:"", msg:"" });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send ❌");
      });
  };

    const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <Layout>
      <>
      <SEOHead />
      {/* SECTION 1: HERO */}
     <section className="wd-hero">
      <div className="wd-hero-bg-radial" />
      <div className="wd-hero-bg-grid" />

      {/* LEFT */}
      <div style={{position:"relative",zIndex:2,display:"flex",flexDirection:"column"}}>
        <div className="badge"><div className="badge-dot" />Elevated Design</div>
        <h1 className="wd-hero-heading">
          Professional Website<br />
          <span className="orange lined" style={{marginRight: '12px'}}>Design</span>Company  That Elevates
          Your Brand 
        </h1>
        <p className="wd-hero-sub">
As an experienced website design company , we create modern, responsive website design solutions and customizable website design tailored to elevate your brand presence and drive business growth, ensuring performance, user engagement, SEO visibility, and long-term scalability for your success.
        </p>
        <div className="wd-hero-actions">
          <a className="wd-btn-fill" href="/contact-us">Get a Free Quote <span className="wd-btn-arrow">›</span></a>
        </div>
      </div>

      {/* RIGHT — banner image */}
      <div style={{position:"relative",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center",animation:"fadeUp .9s .15s ease both"}}>
        <img
          src={banner}
          alt="Website Design Banner"
          className="wd-hero-img"
        />
      </div>
    </section>

      {/* SECTION 2: OUR APPROACH */}
     <section className="wd-approach" id="approach">
      <div className="wd-ap-inner">

        {/* LEFT CONTENT */}
        <div>
             <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Strategy for Website Design</div>
          </div>
          <h2 className="wd-ap-heading">Strategic,  <span>Responsive </span> & Result-Driven Website Design</h2>
          <p className="wd-ap-intro">
Your website design is more than an online presence — it represents your brand’s first impression. We follow a strategy-first approach to create websites aligned with your business goals and growth vision.
          </p>
          <p className="wd-ap-intro">
As an experienced website design company, we focus on UI/UX, responsiveness, SEO, speed, and performance to deliver seamless website design services that improve user experience and engagement across all devices.
          </p>
          <p className="wd-ap-intro">
            We create scalable and modern website solutions that combine visual appeal with functionality, helping businesses strengthen credibility, increase conversions, and support long-term digital growth.

          </p>
        </div>

              {/* RIGHT FORM */}
        <div className="wd-ap-form-wrap">
          <div className="wd-ap-form-card">
            <div className="wd-form-eyebrow">
              <span className="wd-form-eyebrow-line"/>Your Growth, Our Mission<span className="wd-form-eyebrow-line"/>
            </div>
            <div className="wd-form-title">Get Your <span>Free</span> Quote</div>

            <form onSubmit={handleSubmit}>
              <div className="wd-fl-row">
                <div className="wd-fl-group">
                  <label className="wd-fl-label">Your Name</label>
                  <div style={{position:"relative"}}>
                    <span className="wd-fl-icon">👤</span>
                    <input className="wd-fl-input" type="text" name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
                  </div>
                </div>
                <div className="wd-fl-group">
                  <label className="wd-fl-label">Company</label>
                  <div style={{position:"relative"}}>
                    <span className="wd-fl-icon">🏢</span>
                    <input className="wd-fl-input" type="text" name="company" placeholder="Company name" value={form.company} onChange={handleChange} />
                  </div>
                </div>
              </div>

              <div className="wd-fl-group">
                <label className="wd-fl-label">Email Address</label>
                <div style={{position:"relative"}}>
                  <span className="wd-fl-icon">✉️</span>
                  <input className="wd-fl-input" type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="wd-fl-group">
                <label className="wd-fl-label">Mobile Number</label>
                <div className="wd-phone-row">
                  <div className="wd-phone-flag"><span>📞</span></div>
                  <input className="wd-fl-input" type="tel" name="phone" placeholder="Mobile number" value={form.phone} onChange={handleChange} maxLength="10" pattern="[0-9]{10}" required />
                </div>
              </div>

              <div className="wd-fl-group wd-textarea-group">
                <label className="wd-fl-label">Message</label>
                <div style={{position:"relative"}}>
                  <span className="wd-fl-icon" style={{top:"0.9rem",transform:"none"}}>💬</span>
                  <textarea className="wd-fl-textarea" name="msg" placeholder="Tell us about your project..." value={form.msg} onChange={handleChange} />
                </div>
              </div>

              <button type="submit" className="wd-ap-submit">
                Get Free Consultation
                <span className="wd-ap-submit-arrow">›</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

      {/* SECTION 3: WHAT WE OFFER — ORBIT */}
      <section className="pcs-offer-section">
        <div className="pcs-offer-inner">
                <div className="partners-header1" style={{ marginBottom: '20px', textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Key Uniqueness</h2>
          </div>
          <h3 className="pcs-offer-heading">Why Should You Choose <span><i> for Website Design?</i></span></h3>
          <div className="pcs-offer-body">
            <div className="pcs-offer-left">
              <div className="pcs-orbit-wrap">
                <div className="pcs-orbit-ring"></div>
                {connectorAngles.map((angle, i) => (
                  <div key={i} className={`pcs-orbit-connector${activeOffer === i ? " active" : ""}`}
                    style={{ width:"calc(50% - 62px)", transform:`rotate(${angle}deg) translateY(-50%)` }}
                  ></div>
                ))}
                <div className="pcs-orbit-center">
                  <div className="pcs-orbit-center-name">PCS</div>
                  <div className="pcs-orbit-center-sub">Web Design</div>
                </div>
                {offerData.map((item, i) => (
                  <div key={i} className="pcs-orbit-node" style={{ top: nodePositions[i].top, left: nodePositions[i].left }} onClick={() => handleOfferSelect(i)}>
                    <div className={`pcs-orbit-node-box${activeOffer === i ? " active" : ""}`}>
                      <img src={item.emoji} alt={item.label} style={{width:"28px",height:"28px",objectFit:"contain", filter: activeOffer === i ? "brightness(0) invert(1)" : "none", transition:"filter 0.3s"}} />
                      <div className="pcs-orbit-node-lbl">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pcs-offer-right">
              {activeOffer === -1 && (
                <div className="pcs-offer-placeholder">
                  <div className="pcs-offer-placeholder-icon">
                    <img src="/img/icons/click.png" alt="Select an option" style={{width:"40px",height:"40px",objectFit:"contain",opacity:"0.4"}} />
                    </div>
                  <div className="pcs-offer-placeholder-text">Click any box to view details</div>
                </div>
              )}
              {offerData.map((item, i) => (
                <div key={i} className={`pcs-offer-panel${activeOffer === i ? " active" : ""}`}>
                  <div className="pcs-offer-panel-bar"></div>
                  <div className="pcs-offer-panel-title-row">
                    <div className="pcs-offer-panel-icon"><img src={item.emoji} alt={item.title} style={{width:"32px",height:"32px",objectFit:"contain", filter:"brightness(0) invert(1)"}} /></div>
                    <h4 className="pcs-offer-panel-title">{item.title}</h4>
                  </div>
                  <div className="pcs-offer-panel-divider"></div>
                  <div className="pcs-offer-panel-desc">{item.desc}</div>
                  <div className="pcs-offer-panel-tags">
                    {item.tags.map((tag, j) => <span key={j} className="pcs-offer-panel-tag">{tag}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT'S INCLUDED */}
      <section className="pcs-wi5-section">
        <div className="pcs-wi5-inner">
            <div className="pcs-offer-inner">
                <div className="partners-header1" style={{ marginBottom: '10px', textAlign: 'center' }}>
            <div className="partners-eyebrow" style={{ textAlign: 'center' }}>Our Expertise</div>
          </div>
          </div>
          <h2 className="pcs-wi5-heading">What’s Included in Our  <span><i>Website Design</i></span> Services?</h2>
          <div className="pcs-wi5-tabs">
            {includedData.map((tab, i) => (
              <div key={i} className={`pcs-wi5-tab${openTab === i ? " open" : ""}`}>
                <div className="pcs-wi5-tab-head" onClick={() => handleTabToggle(i)}>
                  <div className="pcs-wi5-tab-num">
                    <div className="pcs-wi5-tab-num-diamond"></div>
                    <span className="pcs-wi5-tab-num-text">{tab.num}</span>
                  </div>
                  <div className="pcs-wi5-tab-icon"><img src={tab.icon} alt={tab.title} style={{width:"22px",height:"22px",objectFit:"contain"}} /></div>
                  <h3 className="pcs-wi5-tab-title">{tab.title}</h3>
                  <div className="pcs-wi5-tab-chev">
                    <span style={{fontSize:"1rem",lineHeight:"1",display:"block"}}>▾</span>
                  </div>
                </div>
                <div className="pcs-wi5-tab-body">
                  <div className="pcs-wi5-tab-content">
                    <div className="pcs-wi5-tab-desc">{tab.desc}</div>
                    {/* <div className="pcs-wi5-tab-tags">
                      {tab.tags.map((t, j) => <span key={j} className={`pcs-wi5-tab-tag ${t.c}`}>{t.t}</span>)}
                    </div> */}
                  </div>
                  <div className="pcs-wi5-tab-progress"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR PROCESS */}
      <section className="pcs-proc-section">
        <div className="pcs-proc-inner">
          <div className="pcs-proc-header">
                 <div className="pcs-offer-inner">
                <div className="partners-header1" style={{ marginBottom: '10px', textAlign: 'center' }}>
            <div className="partners-eyebrow" style={{ textAlign: 'center' }}>Workflow Process</div>
          </div>
          </div>
            <h2 className="pcs-proc-title">Our Website <span><i> Design Process</i></span> </h2>
          </div>
          <div className="pcs-proc-grid">
            {processSteps.map((step, i) => (
              <div className="pcs-proc-gc" key={i}>
                <div className="pcs-proc-gc-top">
                  <div className="pcs-proc-gc-num">{step.num}</div>
                  <div className="pcs-proc-gc-icon"><img src={step.icon} alt={step.title} style={{width:"28px",height:"28px",objectFit:"contain"}} /></div>
                </div>
                <h3 className="pcs-proc-gc-title">{step.title}</h3>
                <div className="pcs-proc-gc-desc">{step.desc}</div>
                {/* <div className="pcs-proc-gc-tags">
                  {step.tags.map((t, j) => <span key={j}>{t}</span>)}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* SECTION 6: WHY */}
      <section className="pcs-fb-section">
        <div className="pcs-fb-inner">
          <div className="pcs-fb-header">
           <div className="pcs-offer-inner">
                <div className="partners-header1" style={{ marginBottom: '10px', textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ textAlign: 'center' }}>Key Service Features  </h2>
          </div>
          </div>            <h3 className="pcs-fb-title">Features of our Corporate <span><i>Website Designs</i></span> Services</h3>
          </div>
          <div className="pcs-fb-grid">
            <div className="pcs-fb-vline"></div>
            <div className="pcs-fb-hline"></div>
            <div className={`pcs-fb-box pcs-fb-box-tl`}>
              <div className="pcs-fb-icon"><img src={whyData[0].icon} alt={whyData[0].title} style={{width:"32px",height:"32px",objectFit:"contain"}} /></div>
              <h4 className="pcs-fb-box-title">{whyData[0].title}</h4>
              <div className="pcs-fb-box-desc">{whyData[0].desc}</div>
            </div>
            <div className="pcs-fb-center-col">
              <div className="pcs-fb-center-circle">
                <div className="pcs-fb-center-inner">
                  <div className="pcs-fb-center-icon"><img src="/img/priyam-consultancy-logo.png" alt="PCS" style={{width:"80px",height:"80px",objectFit:"contain"}} /></div>
                </div>
              </div>
            </div>
            <div className={`pcs-fb-box pcs-fb-box-tr`}>
              <div className="pcs-fb-icon"><img src={whyData[1].icon} alt={whyData[1].title} style={{width:"32px",height:"32px",objectFit:"contain"}} /></div>
              <h4 className="pcs-fb-box-title">{whyData[1].title}</h4>
              <div className="pcs-fb-box-desc">{whyData[1].desc}</div>
            </div>
            <div className={`pcs-fb-box pcs-fb-box-bl`}>
              <div className="pcs-fb-icon"><img src={whyData[2].icon} alt={whyData[2].title} style={{width:"32px",height:"32px",objectFit:"contain"}} /></div>
              <h4 className="pcs-fb-box-title">{whyData[2].title}</h4>
              <div className="pcs-fb-box-desc">{whyData[2].desc}</div>
            </div>
            <div className={`pcs-fb-box pcs-fb-box-br`}>
              <div className="pcs-fb-icon"><img src={whyData[3].icon} alt={whyData[3].title} style={{width:"32px",height:"32px",objectFit:"contain"}} /></div>
              <h4 className="pcs-fb-box-title">{whyData[3].title}</h4>
              <div className="pcs-fb-box-desc">{whyData[3].desc}</div>
            </div>
          </div>
        </div>
      </section>


      {/* faq section */}
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

  {/* blog section */}
      <BlogSection />


    {/* cta section */}
       <CTASection />

    </>
    </Layout>
  );
}