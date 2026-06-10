import { useState, useEffect, useRef } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const TAB1_SERVICES = [
  { num: "01", img: "/img/icon/ecommerce-website-audit.webp",       subtitle: "E-commerce Website Audit",           title: "E-commerce Website Audit",           desc: "A detailed audit of your ecommerce store covering user experience, SEO, speed, and conversion gaps. Our ecommerce marketing agency identifies performance issues and opportunities, helping you improve visibility, enhance user journeys, and build a stronger foundation for scalable ecommerce marketing growth and better results." },
  { num: "02", img: "/img/icon/ecommerce-seo-growth-strategy.webp",         subtitle: "E-commerce SEO & Growth Strategy",   title: "E-commerce SEO & Growth Strategy",   desc: "We create data-driven ecommerce marketing strategies focused on improving search rankings, organic traffic, and long-term visibility. From keyword mapping to content optimization, our ecommerce marketing agency ensures your store is discoverable, competitive, and positioned for consistent growth across search engines and digital platforms." },
  { num: "03", img: "/img/icon/performance-marketing.webp",         subtitle: "Performance Marketing (Paid Ads)",   title: "Performance Marketing (Paid Ads)",   desc: "As a results-focused ecommerce marketing agency , we run high-performing paid campaigns across Google, Meta and social platforms. Our ecommerce marketing approach focuses on ROI, audience targeting, creative optimization, and continuous scaling to maximize conversions and overall business performance." },
  { num: "04", img: "/img/icon/social-commerce-marketing.webp",      subtitle: "Social Commerce Marketing",          title: "Social Commerce Marketing",          desc: "We integrate ecommerce marketing with social platforms to drive direct conversions. From product-focused campaigns to engaging creatives, our strategies help you sell seamlessly across channels, turning social engagement into revenue while strengthening your brand presence and improving customer interaction across every marketplace touchpoint." },
  { num: "05", img: "/img/icon/customer-retention.webp",      subtitle: "Customer Retention & Retargeting",   title: "Customer Retention & Retargeting",   desc: "Our ecommerce marketing services focus on retaining customers and increasing lifetime value. Through advanced retargeting strategies, audience segmentation, and personalized campaigns, we help re-engage visitors, recover lost sales, and build long-term customer relationships that drive consistent revenue growth across ecommerce and marketplace platforms." },
  { num: "06", img: "/img/icon/analytics-conversion-reporting.webp",   subtitle: "Analytics & Conversion Reporting",   title: "Analytics & Conversion Reporting",   desc: "We track, measure, and analyze every aspect of your ecommerce marketing performance. From traffic and behavior to conversions and ROI, our reporting provides actionable insights that help refine strategies, optimize campaigns, and improve decision-making for better results across your ecommerce store and marketplace channels." },
];

const TAB2_SERVICES = [
  { num: "01", img: "/img/icon/marketplace-account-setup.webp",       subtitle: "Marketplace Account Setup",                    title: "Marketplace Account Setup",                    desc: "Complete setup and configuration of your marketplace accounts across platforms like Amazon, Flipkart, and Meesho. We ensure proper structuring, compliance, and optimization from day one, enabling your brand to launch smoothly and perform effectively in a competitive marketplace environment." },
  { num: "02", img: "/img/icon/competitor-market-analysis.webp",     subtitle: "Competitor & Market Analysis",                 title: "Competitor & Market Analysis",                 desc: "We conduct in-depth competitor and market analysis to identify opportunities within your marketplace niche. Our ecommerce marketing agency evaluates pricing, positioning, trends, and demand to build strategies that help your products stand out, compete effectively, and achieve stronger visibility and conversions." },
  { num: "03", img: "/img/icon/marketplace-seo-optimization.webp",      subtitle: "Marketplace SEO Optimization",                 title: "Marketplace SEO Optimization",                 desc: "Improve your marketplace visibility with optimized titles, keywords, and backend attributes. Our marketplace SEO strategies ensure your products rank higher in search results, attract the right audience, and increase discoverability across platforms, supporting consistent ecommerce marketing performance and growth." },
  { num: "04", img: "/img/icon/product-listing-ranking-optimization.webp",     subtitle: "Product Listing & Ranking Optimization",       title: "Product Listing & Ranking Optimization",       desc: "Our marketplace product listing service focuses on creating high-converting listings with optimized titles, descriptions, and visuals. Including Flipkart listing optimization and Meesho product listing service, we improve rankings, enhance visibility, and drive better conversions across every marketplace platform." },
  { num: "05", img: "/img/icon/marketplace-advertising.webp",      subtitle: "Marketplace Advertising (Amazon & Flipkart Ads)", title: "Marketplace Advertising (Amazon & Flipkart Ads)", desc: "We manage performance-driven campaigns including Amazon PPC Services as a trusted amazon ppc agency. Our ecommerce marketing strategies focus on targeting, bidding, and optimization to increase visibility, drive traffic, and generate consistent sales across marketplace platforms like Amazon and Flipkart." },
  { num: "06", img: "/img/icon/review-rating-management.webp",      subtitle: "Review & Rating Management",                   title: "Review & Rating Management",                   desc: "Build trust and credibility with effective review and rating management. We help monitor feedback, improve customer satisfaction, and maintain strong brand reputation across every marketplace, ensuring positive user perception and better conversion rates as part of your overall ecommerce marketing strategy." },
];

const TABS = [
  { id: "tab1", label: "E-commerce Marketing Services", services: TAB1_SERVICES },
  { id: "tab2", label: "Marketplace Services",          services: TAB2_SERVICES },
];

const TAB_BAR_STYLES = `
  .htab-bar-wrap {
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: center;
    padding: 3rem 6% 4rem;
    margin-bottom: 0;
  }
  .htab-bar {
    display: inline-flex;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 50px;
    padding: 5px;
    gap: 4px;
    background: rgba(255,255,255,0.04);
  }
  .htab-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.7rem 2rem;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.88rem;
    font-weight: 500;
    color: rgba(255,255,255,0.5);
    letter-spacing: 0.01em;
    transition: color 0.25s ease, background 0.25s ease;
    white-space: nowrap;
  }
  .htab-btn:hover { color: rgba(255,255,255,0.8); }
  .htab-btn.active { background: #ed8337; color: #fff; font-weight: 600; }
  .htab-pane { animation: htab-fade 0.32s ease both; }
  @keyframes htab-fade {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .smm-sp-img {
    width: 33px;
    height: 33px;
    // border-radius: 12px;
    object-fit: cover;
    display: block;
  }
  @media(max-width:580px) {
    .htab-bar-wrap { padding: 0 5%; }
    .htab-btn { padding: 0.6rem 1.1rem; font-size: 0.8rem; }
  }

  @media (max-width:660px) {
  .htab-bar {
    display: inline;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    padding: 5px;
    gap: 4px;
    background: rgba(255, 255, 255, 0.04);
    justify-content: center;
    text-align: center;
    margin-bottom:30px;
}
    }
`;

function ServicePanel({ svc, index }) {
  const [ref, visible] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`smm-svc-panel${visible ? " vis" : ""}`}
      style={{ transitionDelay: `${0.05 + index * 0.07}s` }}
    >
      <div className="smm-sp-slash" />
      <div className="smm-sp-ghost">{svc.num}</div>
      <div className="smm-sp-bottom-line" />
      <div className="smm-sp-icon-row">
        <span className="smm-sp-icon-dash" />
        <img
          src={svc.img}
          alt={svc.subtitle}
          className="smm-sp-img"
        />
      </div>
      <div className="smm-sp-content">
        <div className="smm-sp-subtitle">{svc.subtitle}</div>
        <h5 className="smm-sp-title">{svc.title}</h5>
        <div className="smm-sp-desc">{svc.desc}</div>
      </div>
    </div>
  );
}

export default function ServicesWithTabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  useEffect(() => {
    const id = "htab-bar-styles";
    if (!document.getElementById(id)) {
      const el = document.createElement("style");
      el.id = id;
      el.textContent = TAB_BAR_STYLES;
      document.head.appendChild(el);
    }
  }, []);

  const current = TABS.find((t) => t.id === activeTab);

  return (
    <section className="smm-svc">
      <div className="smm-svc-dots" />

      {/* 1. Eyebrow + Title + Description — static, never changes */}
      <div className="smm-svc-hdr">
        <div className="partners-header1">
          <h2 className="partners-eyebrow" style={{ marginBottom: "20px", textAlign: "start" }}>
            Our Specialized Email Marketing Services
          </h2>
        </div>
        <h3 className="smm-svc-h2">
          Two Powerful Channels. <span><i>One Goal</i></span> - Customer Growth.
        </h3>
        <p className="smm-svc-sub">
          We deliver end-to-end ecommerce marketing and marketplace solutions to drive visibility, traffic, and conversions.
        </p>
      </div>

      {/* 2. Tab bar */}
      <div className="htab-bar-wrap">
        <div className="htab-bar">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`htab-btn${activeTab === tab.id ? " active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Panels */}
      <div key={activeTab} className="htab-pane">
        <div className="smm-svc-panels">
          {current.services.map((svc, i) => (
            <ServicePanel key={`${activeTab}-${svc.num}`} svc={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}