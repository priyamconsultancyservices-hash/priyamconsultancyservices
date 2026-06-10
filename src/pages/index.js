import { useEffect, useRef, useState } from "react";
import CTASection from "../components/HomePage/CTA";
import Link from "@docusaurus/Link";                        // ✅ CHANGED
import Layout from "@theme/Layout";                         // ✅ ADDED
import "../css/home.css";                                   // ✅ CHANGED (Home.css → src/css/home.css)
// ════════════════════════════════════════════
//  IMAGES → static/img/ folder-ல் வையுங்கள்
// ════════════════════════════════════════════
const logo = "/img/priyam-consultancy-logo.png";
const who = "/img/who-we-are.webp";
const Analytix = "/img/Analytix-Hub.webp";
const Baltimore = "/img/baltimore.webp";
const Sterlo = "/img/sterlo.webp";
const sterloBuild = "/img/sterlobuild-partner.webp";
const sterloCare = "/img/sterlocare-partner.webp";
const odoo = "/img/odoo-partner.webp";
const RiyaConsultancy = "/img/riyaconsultancy.webp";
const Tactive = "/img/tactive.webp";
const URCTC = "/img/urctc.webp";
const ZKY = "/img/zky.webp";
const microsoft = "/img/microsoft-app-partner.jpeg";
const OreOps = "/img/oreopps.webp";

// ════════════════════════════════════════════
//  SVG ICONS → static/img/icons/services/ folder-ல் வையுங்கள்
// ════════════════════════════════════════════
const TabRegistration = "/img/icon/business-registration-compliance.webp";
const TabDigitalTransform = "/img/icon/digital-transformation.webp";
const TabDigitalMarketing = "/img/icon/digital-marketing.webp";
const TabWebDevelopment = "/img/icon/website-development.webp";
const TabHumanResource = "/img/icon/hr-services.webp";

const IcoBusinessReg = "/img/icon/business-registration.webp";
const IcoStatutory = "/img/icon/statutory-compliance.webp";
const IcoVirtualCFO = "/img/icon/virtual-cfo.webp";
const IcoInvestment = "/img/icon/investment.webp";
const IcoAccounting = "/img/icon/accounting.webp";
const IcoFinace = "/img/icon/finance.webp";


// Dummy placeholder — icon file ready ஆனதும் actual path மாத்தினா போதும்
const DummyIcon = ({ size = 26 }) => (
  <img src="/img/icon/placeholder.webp" alt="icon" width={size} height={size} style={{ objectFit: "contain", opacity: 0.4 }} />
);
// null = dummy icon use செய்ய வேண்டும் என்று signal

// ── Digital Transformation card icons  (src/assets/icons/services/digital-transformation/)
// Uncomment each line once the SVG file is added to the correct path:
// import IcoAutomation         from "../assets/icons/services/digital-transformation/business-process-automation.svg";
// import IcoWebMobileApps      from "../assets/icons/services/digital-transformation/custom-web-mobile-apps.svg";
// import IcoDataAnalytics      from "../assets/icons/services/digital-transformation/data-analytics.svg";
const IcoAutomation = "/img/icon/business-process-automation.webp";
const IcoWebMobileApps = "/img/icon/custom-web-mobile-applications.webp";
const IcoDataAnalytics = "/img/icon/data-analytics.webp";

// ── Digital Marketing card icons  (src/assets/icons/services/digital-marketing/)
// import IcoSEO                from "../assets/icons/services/digital-marketing/seo.svg";
// import IcoPPC                from "../assets/icons/services/digital-marketing/ppc-marketing.svg";
// import IcoSocialMedia        from "../assets/icons/services/digital-marketing/social-media-marketing.svg";
// import IcoContent            from "../assets/icons/services/digital-marketing/content-marketing.svg";
// import IcoEmail              from "../assets/icons/services/digital-marketing/email-whatsapp-marketing.svg";
// import IcoGraphic            from "../assets/icons/services/digital-marketing/graphic-designing.svg";
const IcoSEO = "/img/icon/seo.webp";
const IcoPPC = "/img/icon/ppc-marketing.webp";
const IcoSocialMedia = "/img/icon/smm.webp";
const IcoContent = "/img/icon/content-marketing.webp";
const IcoEmail = "/img/icon/email-marketing.webp";
const IcoGraphic = "/img/icon/graphic-design.webp";

// ── Website Development card icons  (src/assets/icons/services/website-development/)
// import IcoWebDesign          from "../assets/icons/services/website-development/website-design.svg";
// import IcoStaticWeb          from "../assets/icons/services/website-development/static-website.svg";
// import IcoCustomWeb          from "../assets/icons/services/website-development/custom-website.svg";
// import IcoWooCommerce        from "../assets/icons/services/website-development/woocommerce.svg";
// import IcoECommerce          from "../assets/icons/services/website-development/ecommerce.svg";
// import IcoShopify            from "../assets/icons/services/website-development/shopify.svg";
const IcoWebDesign = "/img/icon/website-design.webp";
const IcoStaticWeb = "/img/icon/static-website-development.webp";
const IcoCustomWeb = "/img/icon/custom-website-development.webp";
const IcoWooCommerce = "/img/icon/woocommerce-website-development.webp";
const IcoECommerce = "/img/icon/ecommerce-website-development.webp";
const IcoShopify = "/img/icon/shopify-website-development.webp";

// ── HR card icons  (src/assets/icons/services/hr/)
// import IcoPayroll            from "../assets/icons/services/hr/payroll-management.svg";
// import IcoRecruitment        from "../assets/icons/services/hr/recruitment-services.svg";
// import IcoHRStrategy         from "../assets/icons/services/hr/hr-strategy.svg";
const IcoPayroll = "/img/icon/payroll-management.webp";
const IcoRecruitment = "/img/icon/recruitment-services.webp";
const IcoHRStrategy = "/img/icon/hr-strategy.webp";


// implementation Partners logo image

const PartnerMicrosoft = "/img/partner-microsoft.webp";
const PartnerOdoo = "/img/partner-odoo.webp";
const PartnerSterloBuild = "/img/partner-sterlo-build.webp";
const PartnerSterloCare = "/img/partner-sterlo-care.webp";
const PartnerSterlo = "/img/partner-sterlo.webp";

// ════════════════════════════════════════════
//  SECTION 1: PCS BANNER
// ════════════════════════════════════════════

const O = "#ed8337";

const SERVICES = [
  {
    name: "Business Registration",
    icon: "🏢",
    svg: `<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <filter id="bsh" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#ed8337" flood-opacity="0.15"/>
        </filter>
      </defs>
      <rect x="0" y="0" width="220" height="180" rx="18" fill="#fff"/>
      <rect x="0" y="0" width="220" height="46" rx="18" fill="${O}"/>
      <rect x="0" y="30" width="220" height="16" fill="${O}"/>
      <text x="14" y="22" font-size="13" fill="#fff" font-family="Poppins,sans-serif" font-weight="800">Business Registration</text>
      <rect x="148" y="28" width="58" height="14" rx="7" fill="#fff"/>
      <text x="177" y="38" text-anchor="middle" font-size="7" fill="${O}" font-family="Poppins,sans-serif" font-weight="700">Fast &amp; Legal</text>
      <rect x="46" y="66" width="70" height="84" rx="9" fill="#f5c8a8"/>
      <rect x="40" y="60" width="70" height="84" rx="9" fill="#ffd9b8"/>
      <rect x="34" y="54" width="70" height="84" rx="9" fill="#fff" stroke="#ffe0cc" stroke-width="1.2" filter="url(#bsh)"/>
      <polygon points="92,54 104,54 104,66" fill="${O}" opacity="0.45"/>
      <polygon points="92,54 104,66 92,66" fill="${O}" opacity="0.2"/>
      <rect x="42" y="68" width="46" height="5" rx="2.5" fill="${O}" opacity="0.85"/>
      <rect x="42" y="78" width="54" height="3.5" rx="1.5" fill="#e8d8cc"/>
      <rect x="42" y="85" width="48" height="3.5" rx="1.5" fill="#e8d8cc"/>
      <rect x="42" y="92" width="52" height="3.5" rx="1.5" fill="#e8d8cc"/>
      <rect x="42" y="99" width="42" height="3.5" rx="1.5" fill="#e8d8cc"/>
      <rect x="42" y="106" width="50" height="3.5" rx="1.5" fill="#e8d8cc"/>
      <rect x="42" y="113" width="44" height="3.5" rx="1.5" fill="#e8d8cc"/>
      <circle cx="69" cy="130" r="13" fill="#fff" stroke="${O}" stroke-width="1.5" filter="url(#bsh)"/>
      <circle cx="69" cy="130" r="9" fill="${O}" opacity="0.12"/>
      <text x="69" y="135" text-anchor="middle" font-size="13" fill="${O}" font-weight="900">✓</text>
      <circle cx="69" cy="130" r="13" fill="none" stroke="${O}" stroke-width="2">
        <animate attributeName="r" values="13;19;13" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite"/>
      </circle>
      <rect x="116" y="54" width="96" height="106" rx="10" fill="#fff" stroke="#ffe0cc" stroke-width="1" filter="url(#bsh)"/>
      <rect x="122" y="60" width="84" height="28" rx="7" fill="${O}"/>
      <circle cx="135" cy="74" r="9" fill="rgba(255,255,255,0.25)"/>
      <text x="135" y="78.5" text-anchor="middle" font-size="10" fill="#fff" font-weight="800">1</text>
      <text x="152" y="70" font-size="7.5" fill="#fff" font-family="Poppins,sans-serif" font-weight="700">Submit Docs</text>
      <text x="152" y="80" font-size="6.5" fill="rgba(255,255,255,0.85)" font-family="Poppins,sans-serif">Upload documents</text>
      <rect x="122" y="60" width="84" height="28" rx="7" fill="none" stroke="#fff" stroke-width="1.5">
        <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite"/>
      </rect>
      <line x1="164" y1="88" x2="164" y2="96" stroke="${O}" stroke-width="1.5" stroke-dasharray="2,2"/>
      <rect x="122" y="96" width="84" height="28" rx="7" fill="#fff4ee" stroke="${O}" stroke-width="1"/>
      <circle cx="135" cy="110" r="9" fill="${O}" opacity="0.7"/>
      <text x="135" y="114.5" text-anchor="middle" font-size="10" fill="#fff" font-weight="800">2</text>
      <text x="152" y="106" font-size="7.5" fill="#333" font-family="Poppins,sans-serif" font-weight="700">Verification</text>
      <text x="152" y="116" font-size="6.5" fill="#999" font-family="Poppins,sans-serif">Expert review</text>
      <line x1="164" y1="124" x2="164" y2="132" stroke="#ddd" stroke-width="1.5" stroke-dasharray="2,2"/>
      <rect x="122" y="132" width="84" height="24" rx="7" fill="#f5f5f5" stroke="#eee" stroke-width="1"/>
      <circle cx="135" cy="144" r="9" fill="#ddd"/>
      <text x="135" y="148.5" text-anchor="middle" font-size="10" fill="#bbb" font-weight="800">3</text>
      <text x="152" y="140" font-size="7.5" fill="#bbb" font-family="Poppins,sans-serif" font-weight="700">Certificate</text>
      <text x="152" y="150" font-size="6.5" fill="#ccc" font-family="Poppins,sans-serif">Ready in 3 days</text>
      <rect x="6" y="162" width="208" height="14" rx="7" fill="#fff4ee"/>
      <text x="110" y="171.5" text-anchor="middle" font-size="6.5" fill="${O}" font-family="Poppins,sans-serif" font-weight="600">Fast  •  Legal  •  Trusted  •  End-to-End</text>
    </svg>`,
  },
  {
    name: "Digital Marketing",
    icon: "📈",
    svg: `<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect x="0" y="0" width="220" height="180" rx="18" fill="#fff"/>
      <rect x="0" y="0" width="220" height="46" rx="18" fill="${O}"/>
      <rect x="0" y="30" width="220" height="16" fill="${O}"/>
      <text x="14" y="22" font-size="13" fill="#fff" font-family="Poppins,sans-serif" font-weight="800">Digital Marketing</text>
      <rect x="158" y="28" width="48" height="14" rx="7" fill="#fff"/>
      <text x="182" y="38" text-anchor="middle" font-size="7" fill="${O}" font-family="Poppins,sans-serif" font-weight="700">↑ 48% ROI</text>
      <rect x="10" y="52" width="200" height="96" rx="10" fill="#fff8f3"/>
      <line x1="28" y1="136" x2="200" y2="136" stroke="#f0e0d0" stroke-width="1"/>
      <line x1="28" y1="120" x2="200" y2="120" stroke="#f0e0d0" stroke-width="1"/>
      <line x1="28" y1="104" x2="200" y2="104" stroke="#f0e0d0" stroke-width="1"/>
      <line x1="28" y1="88" x2="200" y2="88" stroke="#f0e0d0" stroke-width="1"/>
      <line x1="28" y1="72" x2="200" y2="72" stroke="#f0e0d0" stroke-width="1"/>
      <rect x="34" y="126" width="16" height="10" rx="3" fill="${O}" opacity="0.25"/>
      <rect x="60" y="114" width="16" height="22" rx="3" fill="${O}" opacity="0.4"/>
      <rect x="86" y="98" width="16" height="38" rx="3" fill="${O}" opacity="0.6"/>
      <rect x="112" y="80" width="16" height="56" rx="3" fill="${O}" opacity="0.82"/>
      <rect x="138" y="86" width="16" height="50" rx="3" fill="${O}" opacity="0.9"/>
      <rect x="164" y="66" width="16" height="70" rx="3" fill="${O}"/>
      <polyline points="42,126 68,113 94,97 120,79 146,85 172,65" fill="none" stroke="#1a1a2e" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.3" stroke-dasharray="4,3"/>
      <circle cx="172" cy="65" r="5" fill="${O}">
        <animate attributeName="r" values="5;8;5" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="172" cy="65" r="3" fill="#fff"/>
      <text x="42" y="150" text-anchor="middle" font-size="6" fill="#bbb" font-family="Poppins,sans-serif">Jan</text>
      <text x="68" y="150" text-anchor="middle" font-size="6" fill="#bbb" font-family="Poppins,sans-serif">Feb</text>
      <text x="94" y="150" text-anchor="middle" font-size="6" fill="#bbb" font-family="Poppins,sans-serif">Mar</text>
      <text x="120" y="150" text-anchor="middle" font-size="6" fill="#bbb" font-family="Poppins,sans-serif">Apr</text>
      <text x="146" y="150" text-anchor="middle" font-size="6" fill="#bbb" font-family="Poppins,sans-serif">May</text>
      <text x="172" y="150" text-anchor="middle" font-size="6" fill="${O}" font-family="Poppins,sans-serif" font-weight="700">Jun</text>
      <rect x="10" y="156" width="34" height="12" rx="6" fill="#fff0e6"/><text x="27" y="164" text-anchor="middle" font-size="6.5" fill="${O}" font-family="Poppins,sans-serif" font-weight="600">SEO</text>
      <rect x="48" y="156" width="40" height="12" rx="6" fill="#fff0e6"/><text x="68" y="164" text-anchor="middle" font-size="6.5" fill="${O}" font-family="Poppins,sans-serif" font-weight="600">Social</text>
      <rect x="92" y="156" width="34" height="12" rx="6" fill="#fff0e6"/><text x="109" y="164" text-anchor="middle" font-size="6.5" fill="${O}" font-family="Poppins,sans-serif" font-weight="600">PPC</text>
      <rect x="130" y="156" width="40" height="12" rx="6" fill="#fff0e6"/><text x="150" y="164" text-anchor="middle" font-size="6.5" fill="${O}" font-family="Poppins,sans-serif" font-weight="600">Email</text>
      <rect x="174" y="156" width="36" height="12" rx="6" fill="${O}"/><text x="192" y="164" text-anchor="middle" font-size="6.5" fill="#fff" font-family="Poppins,sans-serif" font-weight="600">Ads</text>
    </svg>`,
  },
  {
    name: "Website Development",
    icon: "💻",
    svg: `<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <filter id="wsh" x="-15%" y="-15%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#ed8337" flood-opacity="0.12"/>
        </filter>
      </defs>
      <rect x="0" y="0" width="220" height="180" rx="18" fill="#fff"/>
      <rect x="0" y="0" width="220" height="46" rx="18" fill="${O}"/>
      <rect x="0" y="30" width="220" height="16" fill="${O}"/>
      <text x="14" y="22" font-size="13" fill="#fff" font-family="Poppins,sans-serif" font-weight="800">Website Development</text>
      <rect x="158" y="28" width="48" height="14" rx="7" fill="#fff"/>
      <text x="182" y="38" text-anchor="middle" font-size="7" fill="${O}" font-family="Poppins,sans-serif" font-weight="700">UI/UX Pro</text>
      <rect x="18" y="60" width="182" height="88" rx="10" fill="#f0c8a0"/>
      <rect x="14" y="56" width="182" height="88" rx="10" fill="#ffd9b8"/>
      <rect x="10" y="52" width="182" height="88" rx="10" fill="#fff" stroke="#ffe0cc" stroke-width="1" filter="url(#wsh)"/>
      <rect x="10" y="52" width="182" height="20" rx="10" fill="${O}"/>
      <rect x="10" y="63" width="182" height="9" fill="${O}"/>
      <circle cx="26" cy="62" r="4.5" fill="#ff5f56"/><circle cx="37" cy="62" r="4.5" fill="#febc2e"/><circle cx="48" cy="62" r="4.5" fill="#28c840"/>
      <rect x="58" y="57" width="116" height="10" rx="5" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.3)" stroke-width="0.8"/>
      <text x="116" y="64.5" text-anchor="middle" font-size="5.5" fill="#fff" font-family="monospace">priyamcs.com</text>
      <rect x="18" y="74" width="166" height="20" rx="5" fill="${O}" opacity="0.85"/>
      <rect x="26" y="78" width="78" height="6" rx="3" fill="rgba(255,255,255,0.55)"/>
      <rect x="26" y="87" width="52" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
      <rect x="20" y="108" width="52" height="28" rx="6" fill="#f0c0a0"/>
      <rect x="18" y="105" width="52" height="28" rx="6" fill="#fff" stroke="#ffe0cc" stroke-width="0.8" filter="url(#wsh)"/>
      <text x="44" y="117" text-anchor="middle" font-size="13">💡</text>
      <text x="44" y="128" text-anchor="middle" font-size="6" fill="${O}" font-family="Poppins,sans-serif" font-weight="700">Design</text>
      <rect x="86" y="108" width="52" height="28" rx="6" fill="#f0c0a0"/>
      <rect x="84" y="105" width="52" height="28" rx="6" fill="#fff" stroke="${O}" stroke-width="1" filter="url(#wsh)"/>
      <text x="110" y="117" text-anchor="middle" font-size="13">⚡</text>
      <text x="110" y="128" text-anchor="middle" font-size="6" fill="${O}" font-family="Poppins,sans-serif" font-weight="700">Speed</text>
      <rect x="152" y="108" width="34" height="28" rx="6" fill="#f0c0a0"/>
      <rect x="150" y="105" width="34" height="28" rx="6" fill="#fff" stroke="#ffe0cc" stroke-width="0.8" filter="url(#wsh)"/>
      <text x="167" y="117" text-anchor="middle" font-size="13">🔧</text>
      <text x="167" y="128" text-anchor="middle" font-size="6" fill="${O}" font-family="Poppins,sans-serif" font-weight="700">Dev</text>
      <polygon points="110,82 114,90 111.5,89 110.5,93 107,86" fill="${O}" opacity="0.9">
        <animateTransform attributeName="transform" type="translate" values="0,0;20,8;0,0" dur="2.8s" repeatCount="indefinite"/>
      </polygon>
      <rect x="10" y="148" width="34" height="11" rx="5.5" fill="#fff0e6" stroke="${O}" stroke-width="0.8"/><text x="27" y="155.5" text-anchor="middle" font-size="6" fill="${O}" font-family="Poppins,sans-serif">React</text>
      <rect x="48" y="148" width="38" height="11" rx="5.5" fill="#fff0e6" stroke="${O}" stroke-width="0.8"/><text x="67" y="155.5" text-anchor="middle" font-size="6" fill="${O}" font-family="Poppins,sans-serif">Next.js</text>
      <rect x="90" y="148" width="38" height="11" rx="5.5" fill="#fff0e6" stroke="${O}" stroke-width="0.8"/><text x="109" y="155.5" text-anchor="middle" font-size="6" fill="${O}" font-family="Poppins,sans-serif">Node.js</text>
      <rect x="132" y="148" width="30" height="11" rx="5.5" fill="#fff0e6" stroke="${O}" stroke-width="0.8"/><text x="147" y="155.5" text-anchor="middle" font-size="6" fill="${O}" font-family="Poppins,sans-serif">UI/UX</text>
      <rect x="166" y="148" width="44" height="11" rx="5.5" fill="${O}"/><text x="188" y="155.5" text-anchor="middle" font-size="6" fill="#fff" font-family="Poppins,sans-serif">50+ Sites</text>
      <rect x="10" y="163" width="200" height="14" rx="7" fill="#fff8f3" stroke="#ffe0cc" stroke-width="1"/>
      <text x="110" y="172.5" text-anchor="middle" font-size="6.5" fill="${O}" font-weight="800" font-family="Poppins,sans-serif">50+ Built · 4.9★ Rating · 3 Day Delivery</text>
    </svg>`,
  },
  {
    name: "Human Resources",
    icon: "👥",
    svg: `<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect x="0" y="0" width="220" height="180" rx="18" fill="#fff"/>

      <!-- Orange header — Bus Reg style -->
      <rect x="0" y="0" width="220" height="46" rx="18" fill="${O}"/>
      <rect x="0" y="30" width="220" height="16" fill="${O}"/>
      <text x="14" y="22" font-size="13" fill="#fff" font-family="Poppins,sans-serif" font-weight="800">Human Resources</text>
      <!-- White pill badge -->
      <rect x="152" y="28" width="54" height="14" rx="7" fill="#fff"/>
      <text x="179" y="38" text-anchor="middle" font-size="7" fill="${O}" font-family="Poppins,sans-serif" font-weight="700">Team Pulse</text>

      <!-- Donut chart — 90% -->
      <!-- Track -->
      <circle cx="82" cy="108" r="48" fill="none" stroke="#ffe0cc" stroke-width="13"/>
      <!-- 90% arc — continuous grow then hold loop -->
      <circle cx="82" cy="108" r="48" fill="none" stroke="${O}" stroke-width="13"
        stroke-dasharray="271 302" stroke-dashoffset="75" stroke-linecap="round">
        <animate attributeName="stroke-dasharray" values="0 302;271 302;271 302;0 302" dur="4s" repeatCount="indefinite"/>
      </circle>
      <!-- Glow pulse ring outer -->
      <circle cx="82" cy="108" r="54" fill="none" stroke="${O}" stroke-width="1.5" opacity="0.2">
        <animate attributeName="r" values="54;60;54" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.25;0;0.25" dur="2s" repeatCount="indefinite"/>
      </circle>
      <!-- Spinning dot on arc tip -->
      <circle r="6" fill="${O}">
        <animateMotion path="M82,60 A48,48 0 1,1 81.9,60" dur="4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0;0" dur="4s" repeatCount="indefinite"/>
      </circle>

      <!-- Center text -->
      <text x="82" y="101" text-anchor="middle" font-size="22" fill="${O}" font-weight="800" font-family="Poppins,sans-serif">90%</text>
      <text x="82" y="114" text-anchor="middle" font-size="7.5" fill="#aaa" font-family="Poppins,sans-serif">Satisfaction</text>
      <text x="82" y="124" text-anchor="middle" font-size="7" fill="${O}" font-family="Poppins,sans-serif" font-weight="600">😊 Excellent</text>

      <!-- Right side stat cards -->
      <rect x="146" y="52" width="66" height="26" rx="8" fill="#fff4ee" stroke="#ffe0cc" stroke-width="1"/>
      <text x="179" y="63" text-anchor="middle" font-size="8" fill="${O}" font-weight="800" font-family="Poppins,sans-serif">😊 4.8</text>
      <text x="179" y="73" text-anchor="middle" font-size="6" fill="#aaa" font-family="Poppins,sans-serif">Avg. Rating</text>

      <rect x="146" y="84" width="66" height="26" rx="8" fill="#fff4ee" stroke="#ffe0cc" stroke-width="1"/>
      <text x="179" y="95" text-anchor="middle" font-size="8" fill="${O}" font-weight="800" font-family="Poppins,sans-serif">500+</text>
      <text x="179" y="105" text-anchor="middle" font-size="6" fill="#aaa" font-family="Poppins,sans-serif">Placements</text>

      <rect x="146" y="116" width="66" height="26" rx="8" fill="${O}"/>
      <text x="179" y="127" text-anchor="middle" font-size="8" fill="#fff" font-weight="800" font-family="Poppins,sans-serif">↑ 5%</text>
      <text x="179" y="137" text-anchor="middle" font-size="6" fill="rgba(255,255,255,0.85)" font-family="Poppins,sans-serif">This Month</text>
      <!-- pulse on orange card -->
      <rect x="146" y="116" width="66" height="26" rx="8" fill="none" stroke="${O}" stroke-width="2">
        <animate attributeName="opacity" values="0.7;0;0.7" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="stroke-width" values="2;6;2" dur="2s" repeatCount="indefinite"/>
      </rect>

      <!-- Bottom label strip — Bus Reg style -->
      <rect x="6" y="152" width="208" height="22" rx="8" fill="#fff4ee" stroke="#ffe0cc" stroke-width="1"/>
      <text x="50" y="165" text-anchor="middle" font-size="7.5" fill="${O}" font-weight="800" font-family="Poppins,sans-serif">500+</text>
      <text x="50" y="171" text-anchor="middle" font-size="5.5" fill="#aaa" font-family="Poppins,sans-serif">Placed</text>
      <line x1="90" y1="153" x2="90" y2="173" stroke="#ffe0cc" stroke-width="1"/>
      <text x="118" y="165" text-anchor="middle" font-size="7.5" fill="${O}" font-weight="800" font-family="Poppins,sans-serif">98%</text>
      <text x="118" y="171" text-anchor="middle" font-size="5.5" fill="#aaa" font-family="Poppins,sans-serif">Retention</text>
      <line x1="148" y1="153" x2="148" y2="173" stroke="#ffe0cc" stroke-width="1"/>
      <text x="178" y="165" text-anchor="middle" font-size="7.5" fill="${O}" font-weight="800" font-family="Poppins,sans-serif">4.9★</text>
      <text x="178" y="171" text-anchor="middle" font-size="5.5" fill="#aaa" font-family="Poppins,sans-serif">Rating</text>
    </svg>`,
  },
  {
    name: "Digital Transformation",
    icon: "🚀",
    svg: `<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect x="0" y="0" width="220" height="180" rx="18" fill="#fff"/>
      <rect x="0" y="0" width="220" height="46" rx="18" fill="${O}"/>
      <rect x="0" y="30" width="220" height="16" fill="${O}"/>
      <text x="14" y="22" font-size="13" fill="#fff" font-family="Poppins,sans-serif" font-weight="800">Digital Transformation</text>
      <rect x="158" y="28" width="48" height="14" rx="7" fill="#fff"/>
      <text x="182" y="38" text-anchor="middle" font-size="7" fill="${O}" font-family="Poppins,sans-serif" font-weight="700">Innovate</text>
      <circle cx="110" cy="108" r="24" fill="#fff4ee" stroke="${O}" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.6"/>
      <circle cx="110" cy="108" r="18" fill="#fff" stroke="${O}" stroke-width="1.5"/>
      <circle cx="110" cy="108" r="14" fill="${O}"/>
      <text x="110" y="114" text-anchor="middle" font-size="16">🚀</text>
      <circle cx="110" cy="108" r="46" fill="none" stroke="${O}" stroke-width="1" stroke-dasharray="4,4" opacity="0.28">
        <animateTransform attributeName="transform" type="rotate" values="0 110 108;360 110 108" dur="10s" repeatCount="indefinite"/>
      </circle>
      <circle cx="58" cy="72" r="17" fill="#fff4ee" stroke="${O}" stroke-width="1"/>
      <text x="58" y="78" text-anchor="middle" font-size="15">☁️</text>
      <text x="58" y="93" text-anchor="middle" font-size="6" fill="${O}" font-family="Poppins,sans-serif" font-weight="700">Cloud</text>
      <line x1="73" y1="80" x2="93" y2="95" stroke="${O}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
      <circle cx="162" cy="72" r="17" fill="#fff4ee" stroke="${O}" stroke-width="1"/>
      <text x="162" y="78" text-anchor="middle" font-size="15">🤖</text>
      <text x="162" y="93" text-anchor="middle" font-size="6" fill="${O}" font-family="Poppins,sans-serif" font-weight="700">AI/ML</text>
      <line x1="147" y1="80" x2="127" y2="95" stroke="${O}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
      <circle cx="58" cy="144" r="17" fill="#fff4ee" stroke="${O}" stroke-width="1"/>
      <text x="58" y="150" text-anchor="middle" font-size="15">📊</text>
      <text x="58" y="165" text-anchor="middle" font-size="6" fill="${O}" font-family="Poppins,sans-serif" font-weight="700">Analytics</text>
      <line x1="73" y1="136" x2="93" y2="121" stroke="${O}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
      <circle cx="162" cy="144" r="17" fill="#fff4ee" stroke="${O}" stroke-width="1"/>
      <text x="162" y="150" text-anchor="middle" font-size="15">🔐</text>
      <text x="162" y="165" text-anchor="middle" font-size="6" fill="${O}" font-family="Poppins,sans-serif" font-weight="700">Security</text>
      <line x1="147" y1="136" x2="127" y2="121" stroke="${O}" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
      <circle r="4" fill="${O}" opacity="0.9">
        <animateMotion path="M110,62 A46,46 0 1,1 109.9,62" dur="4s" repeatCount="indefinite"/>
      </circle>
    </svg>`,
  },
];

function PCSBanner() {
  const [current, setCurrent] = useState(0);
  const [pillPos, setPillPos] = useState([]);
  const phoneRef = useRef(null);
  const canvasRef = useRef(null);
  const angleRef = useRef(0);
  const timerRef = useRef(null);
  const [screenW, setScreenW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const check = () => setScreenW(window.innerWidth);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Breakpoint flags
  const isMobile = screenW < 768;
  const isTabSm = screenW >= 768 && screenW <= 860;
  const isTabMid = screenW >= 861 && screenW <= 1100;    // 861–1100: mobile pill list style
  const isDesktop = screenW > 1100;                       // > 1100: full orbit

  const hideOrbit = !isDesktop;
  const showPillList = isMobile || isTabSm || isTabMid;    // all non-desktop → pill list
  const showPillGrid = false;

  const orbitOffset = 58;

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % SERVICES.length), 2800);
  };

  useEffect(() => { startTimer(); return () => clearInterval(timerRef.current); }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const phone = phoneRef.current;
    if (!canvas || !phone || hideOrbit) {
      if (canvas) { canvas.width = 0; canvas.height = 0; }
      setPillPos([]);
      return;
    }
    let raf;
    function draw() {
      const cx = phone.offsetWidth / 2, cy = phone.offsetHeight / 2;
      const R = Math.sqrt(cx * cx + cy * cy) + orbitOffset;
      const sz = R * 2 + 40;
      canvas.width = canvas.height = sz;
      canvas.style.cssText = `position:absolute;pointer-events:none;z-index:1;width:${sz}px;height:${sz}px;left:${cx - sz / 2}px;top:${cy - sz / 2}px;`;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, sz, sz);
      ctx.beginPath();
      ctx.arc(sz / 2, sz / 2, R, 0, Math.PI * 2);
      ctx.setLineDash([5, 8]);
      ctx.strokeStyle = "rgba(237,131,55,0.25)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      setPillPos(SERVICES.map((_, i) => {
        const a = angleRef.current + (i / SERVICES.length) * Math.PI * 2;
        return { x: cx + R * Math.cos(a), y: cy + R * Math.sin(a) };
      }));
      angleRef.current += 0.004;
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(raf);
  }, [hideOrbit, orbitOffset]);

  const goTo = (n) => { setCurrent(n); startTimer(); };

  return (
    <div className="pcs-body">
      <section className="hero">
        <div className="hero-left">
          <div className="badge"><div className="badge-dot" />Business Growth Partner </div>
          <h1 className="hero-heading">
            All-in-One<br />Solutions for your
            <span className="orange"> Business Journey</span>
          </h1>
          <p className="hero-sub">
            One partner for all your needs – business setup, finance, digital transformation, digital marketing, and HR – helping your business grow smarter and faster.
          </p>
          <p className="hero-sub">Partner with us to build, scale, and succeed in a digital-first world.</p>
          <div className="hero-actions">
            <a href="#" className="btn-fill">Explore Services</a>
          </div>
        </div>

        <div className="hero-right" style={showPillGrid ? { display: "flex", alignItems: "center", gap: "32px", justifyContent: "start" } : {}}>
          <div className="glow-ring glow-ring-2" />
          <div className="glow-ring" />

          {/* Phone wrapper */}
          <div
            className="phone-wrap"
            ref={phoneRef}
          >
            <div className="phone phone-white">
              <div className="phone-notch phone-notch-white" />
              <div className="phone-status phone-status-orange">
                <span>9:41</span><span>▐▐▐ ✦ 100%</span>
              </div>
              <div className="phone-screen phone-screen-white">
                <div className="app-header app-header-white">
                  <div className="app-logo-sm app-logo-dark">Priyam <em>Consultancy</em> Services</div>
                  <div className="app-notif app-notif-orange">🔔</div>
                </div>
                <div className="svc-slide svc-slide-white" onMouseEnter={() => clearInterval(timerRef.current)} onMouseLeave={startTimer}>
                  {SERVICES.map((s, i) => (
                    <div key={i} className="slide-item" style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "all" : "none" }}>
                      <div dangerouslySetInnerHTML={{ __html: s.svg }} style={{ width: "100%" }} />
                      <div className="slide-label slide-label-orange">{s.name}</div>
                    </div>
                  ))}
                </div>
                <div className="svc-dots">
                  {SERVICES.map((_, i) => (
                    <div key={i} className="svc-dot" onClick={() => goTo(i)}
                      style={{ width: i === current ? 18 : 6, background: i === current ? "#ed8337" : "rgba(237,131,55,0.25)" }} />
                  ))}
                </div>
              </div>
            </div>

            <canvas ref={canvasRef} className="orbit-canvas" />

            {/* Orbit pills — desktop (>1140) only */}
            {!hideOrbit && pillPos.map((p, i) => (
              <div key={i} className={`svc-pill${i === current ? " active" : ""}`}
                style={{ left: p.x - 64, top: p.y - 13, minWidth: 128 }}
                onClick={() => goTo(i)}>
                <span className="pill-icon">{SERVICES[i].icon}</span>
                <span className="pill-name">{SERVICES[i].name}</span>
              </div>
            ))}
            {!hideOrbit && pillPos.map((p, i) => (
              <div key={`d${i}`} className="orbit-dot" style={{ left: p.x - 3.5, top: p.y - 3.5 }} />
            ))}
          </div>

          {/* 861–1140: pill grid to the RIGHT of the phone (image style) */}
          {showPillGrid && (
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
              flexShrink: 0,
            }}>
              {SERVICES.map((s, i) => (
                <div
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 18px",
                    borderRadius: "28px",
                    fontSize: "13px",
                    fontWeight: i === current ? 700 : 500,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    background: i === current ? "#ed8337" : "rgba(255,255,255,0.08)",
                    color: i === current ? "#fff" : "#fff",
                    border: i === current ? "none" : "1.5px solid rgba(255,255,255,0.2)",
                    boxShadow: i === current ? "0 4px 16px rgba(237,131,55,0.4)" : "none",
                    backdropFilter: "blur(4px)",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ fontSize: "16px", lineHeight: 1 }}>{s.icon}</span>
                  <span>{s.name}</span>
                </div>
              ))}
            </div>
          )}

          {/* Mobile & small tablet (< 768, 768–860): pill list BELOW phone */}
          {showPillList && (
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
              marginTop: "20px",
              padding: "0 8px",
            }}>
              {SERVICES.map((s, i) => (
                <div
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 14px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: i === current ? 700 : 500,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    background: i === current ? "#ed8337" : "rgba(237,131,55,0.1)",
                    color: i === current ? "#fff" : "#ed8337",
                    border: i === current ? "none" : "1px solid rgba(237,131,55,0.35)",
                    boxShadow: i === current ? "0 4px 12px rgba(237,131,55,0.35)" : "none",
                  }}
                >
                  <span style={{ fontSize: "14px" }}>{s.icon}</span>
                  <span>{s.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// ════════════════════════════════════════════
//  SECTION 2: PARTNERS (Logo Scroll)
// ════════════════════════════════════════════

// Replace these with your actual image imports:
// import Analytix from "../../images/Analytix-Hub.webp"; ... etc.
const PARTNERS = [
  { id: 1, name: "Analytix-Hub", logo: Analytix },
  { id: 2, name: "Baltimore", logo: Baltimore },
  { id: 3, name: "Sterlo", logo: Sterlo },
  { id: 4, name: "Sterlo Build", logo: sterloBuild },
  { id: 5, name: "Sterlo Care", logo: sterloCare },
  { id: 6, name: "Microsoft", logo: microsoft },
  { id: 7, name: "Odoo", logo: odoo },
  { id: 8, name: "OreOps", logo: OreOps },
  { id: 9, name: "Riya Consultancy", logo: RiyaConsultancy },
  { id: 10, name: "Tactive", logo: Tactive },
  { id: 11, name: "URCTS", logo: URCTC },
  { id: 12, name: "ZKY", logo: ZKY },
];

function Partners() {
  const items = [...PARTNERS, ...PARTNERS];
  return (
    <section className="partners-section">
      <div className="partners-track-wrapper">
        <div className="partners-fade-left" />
        <div className="partners-fade-right" />
        <div className="partners-track">
          {items.map((partner, i) => (
            <div className="partner-logo-card" key={i}>
              {partner.logo && <img src={partner.logo} alt={partner.name} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════
//  SECTION 3: WHO WE ARE
// ════════════════════════════════════════════

function WhoWeAre() {
  // Replace with: import Who from "../../images/who-we-are.png";
  const Who = null;

  return (
    <div className="page">
      <span className="dot" style={{ width: '10px', height: '10px', background: '#ed8337', top: '170px', left: '410px', animationDuration: '5s', animationDelay: '0s' }}></span>
      <span className="dot" style={{ width: '7px', height: '7px', background: '#ed8337', top: '215px', left: '545px', animationDuration: '6.5s', animationDelay: '0.3s' }}></span>
      <span className="dot" style={{ width: '14px', height: '14px', background: '#ed8337', top: '408px', left: '265px', animationDuration: '7s', animationDelay: '0.5s' }}></span>
      <span className="dot" style={{ width: '10px', height: '10px', background: '#ed8337', top: '458px', left: '465px', animationDuration: '5.8s', animationDelay: '0.2s' }}></span>
      <span className="dot" style={{ width: '8px', height: '8px', background: '#ed8337', top: '498px', left: '585px', animationDuration: '6.2s', animationDelay: '0.4s' }}></span>
      <span className="dot" style={{ width: '11px', height: '11px', background: '#ed8337', top: '510px', left: '65px', animationDuration: '7.2s', animationDelay: '0.1s' }}></span>
      <span className="dot" style={{ width: '7px', height: '7px', background: '#ed8337', top: '210px', left: '82px', animationDuration: '5.5s', animationDelay: '0.6s' }}></span>
      <span className="red-ring"></span>
      <span className="small-dot"></span>
      <div className="left">
        <div className="why-eyebrow">Who We Are</div>
        <h2> One Team Powering Every Stage of <em><i>Your Business Growth.</i></em></h2>
        <p>Priyam Consultancy Services is your all-in-one business partner, guiding you from business registration and compliances, then through digital transformation, digital marketing for brand reach and lead generation, and human resource management. With PCS, businesses gain a single, trusted partner to manage every step of their growth journey, making complex processes seamless, efficient, and tailored for lasting success.</p>
      </div>
      <div className="right">
        <img src={who} alt="Who We Are" className="who-img" />
      </div>
    </div>
  );
}

// ════════════════════════════════════════════
//  SECTION 4: HOME SERVICE (Tabs)
// ════════════════════════════════════════════

const serviceTabs = [
  {
    emoji: TabRegistration,
    label: " Business Registration and Compliance  ",
    tagline: "Scalable, fast & modern web solutions built for growth",
    iconBg: "rgba(59,130,246,0.12)",
    iconBorder: "1.5px solid rgba(59,130,246,0.25)",
    cards: [
      { num: "01", icon: IcoBusinessReg, iconBg: "rgba(59,130,246,0.1)", title: "Business Registration", desc: "Public Limited, Private Limited, LLP, OPC, Partnership, Sole Proprietorship services.", link: "/business-registrations", glow: "#ed8337" },
      { num: "02", icon: IcoStatutory, iconBg: "rgba(237,131,55,0.1)", title: "Statutory Compliance", desc: "Ensuring timely filings, audits, and adherence to all regulatory requirements.", link: "/statutory-compliance", glow: "#ed8337" },
      { num: "03", icon: IcoVirtualCFO, iconBg: "rgba(99,179,237,0.1)", title: "Virtual CFO Services", desc: "Strategic financial guidance, budgeting, and reporting to drive informed business decisions.", link: "/virtual-cfo-services", glow: "#ed8337" },
      { num: "04", icon: IcoInvestment, iconBg: "rgba(72,187,120,0.1)", title: "Investment Support", desc: "Providing accurate valuations and insights to secure funding and drive growth.", link: "/company-valuations-and-investment-support", glow: "#ed8337" },
      { num: "05", icon: IcoAccounting, iconBg: "rgba(237,131,55,0.1)", title: "Accounting", desc: "Complete accounting, GST, TDS, MIS reports, payroll, and back-office support.", link: "/accounting", glow: "#ed8337" },
      { num: "06", icon: IcoFinace, iconBg: "rgba(246,173,85,0.1)", title: "Finances", desc: "Banking, loans, CMA reports, audits, approvals, and complete financial support services.", link: "/finances", glow: "#ed8337" },
    ],
  },

  {
    emoji: TabDigitalMarketing,
    label: "Digital Marketing",
    tagline: "Native & cross-platform apps with exceptional user experiences",
    iconBg: "rgba(52,211,153,0.1)",
    iconBorder: "1.5px solid rgba(52,211,153,0.25)",
    cards: [
      { num: "01", icon: IcoSEO, iconBg: "rgba(52,211,153,0.1)", title: "Search Engine Optimization", desc: "Advanced SEO from technical optimization to content and link building for higher rankings.", link: "/search-engine-optimization", glow: "#ed8337" },
      { num: "02", icon: IcoPPC, iconBg: "rgba(72,187,120,0.1)", title: "Performance Marketing", desc: "Run targeted ads on Google, Meta, LinkedIn, YouTube & display to generate leads.", link: "/performance-marketing", glow: "#ed8337" },
      { num: "03", icon: IcoSocialMedia, iconBg: "rgba(56,189,248,0.1)", title: "Social Media Marketing", desc: "Data-driven social media and content management strategies to grow your online brand.", link: "/social-media-marketing", glow: "#ed8337" },
      { num: "04", icon: IcoContent, iconBg: "rgba(99,179,237,0.1)", title: "Content Marketing", desc: "Strategic content, blogs, and website copy to engage and convert your target audience.", link: "/content-marketing", glow: "#ed8337" },
      { num: "05", icon: IcoEmail, iconBg: "rgba(237,131,55,0.1)", title: "Marketplace Ecommerce Marketing", desc: "Engage customers directly with targeted email and WhatsApp marketing campaigns.", link: "/marketplace-ecommerce-marketing", glow: "#ed8337" },
      { num: "06", icon: IcoGraphic, iconBg: "rgba(246,173,85,0.1)", title: "Graphic Designing", desc: "Creative designs for logos, print, digital, and social media to elevate your brand identity.", link: "/graphic-design", glow: "#ed8337" },
    ],
  },
  {
    emoji: TabWebDevelopment,
    label: "Website Development",
    tagline: "Visual storytelling that makes your brand impossible to forget",
    iconBg: "rgba(168,85,247,0.1)",
    iconBorder: "1.5px solid rgba(168,85,247,0.25)",
    cards: [
      { num: "01", icon: IcoWebDesign, iconBg: "rgba(168,85,247,0.1)", title: "Website Design", desc: "Create visually compelling, user-focused website designs that strengthen brand presence.", link: "/website-design", glow: "#ed8337" },
      { num: "02", icon: IcoStaticWeb, iconBg: "rgba(237,131,55,0.1)", title: "Static Website Development", desc: "Develop fast, secure static websites ideal for professional business presence.", link: "/static-website-development", glow: "#ed8337" },
      { num: "03", icon: IcoCustomWeb, iconBg: "rgba(99,179,237,0.1)", title: "Custom Website Development", desc: "Build fully customized websites tailored to unique business requirements and goals.", link: "/custom-website-development", glow: "#ed8337" },
      { num: "04", icon: IcoWooCommerce, iconBg: "rgba(168,85,247,0.1)", title: "WooCommerce Website Development", desc: "Develop scalable WooCommerce stores with secure payments and flexible features.", link: "/woocommerce-website-development", glow: "#ed8337" },
      { num: "05", icon: IcoECommerce, iconBg: "rgba(236,72,153,0.1)", title: "E-Commerce Website Development", desc: "Create conversion-focused ecommerce websites optimized for performance and scalability.", link: "/shopify-website-development", glow: "#ed8337" },
      { num: "06", icon: IcoShopify, iconBg: "rgba(246,173,85,0.1)", title: "Shopify Website Development", desc: "Design high-performing Shopify stores built for growth and seamless selling.", link: "/e-commerce-website-development", glow: "#ed8337" },
    ],
  },
  {
    emoji: TabHumanResource,
    label: "Human Resource",
    tagline: "Scalable infrastructure & automated pipelines for reliable systems",
    iconBg: "rgba(56,189,248,0.1)",
    iconBorder: "1.5px solid rgba(56,189,248,0.25)",
    cards: [
      { num: "01", icon: IcoPayroll, iconBg: "rgba(56,189,248,0.1)", title: "Payroll Management", desc: "Comprehensive payroll management, outsourcing, and expert consulting services to streamline processes.", link: "/recruitment-services", glow: "#ed8337" },
      { num: "02", icon: IcoRecruitment, iconBg: "rgba(99,179,237,0.1)", title: "Recruitment Services", desc: "Comprehensive end-to-end hiring solutions, expert consultancy, and seamless process outsourcing tailored to your needs.", link: "/payroll-management", glow: "#ed8337" },
      { num: "03", icon: IcoHRStrategy, iconBg: "rgba(237,131,55,0.1)", title: "HR Strategy & Policy Development", desc: "Expert HR policy development, strategic planning, audits, and advisory services for businesses.", link: "/hr-strategy-and-policy-development", glow: "#ed8337" },
    ],
  },
  {
    emoji: TabDigitalTransform,
    label: "Digital Transformation",
    tagline: "Data-driven campaigns that grow your brand & maximize ROI",
    iconBg: "rgba(237,131,55,0.12)",
    iconBorder: "1.5px solid rgba(237,131,55,0.3)",
    cards: [
      { num: "01", icon: IcoAutomation, iconBg: "rgba(237,131,55,0.1)", title: "Business Process Automation", desc: "Technical SEO, keyword strategy, and on-page optimization to rank higher on Google and drive organic traffic.", link: "/business-process-automation", glow: "#ed8337" },
      { num: "02", icon: IcoWebMobileApps, iconBg: "rgba(236,72,153,0.1)", title: "Custom Web & Mobile Applications", desc: "Engaging campaigns across Instagram, Facebook, LinkedIn & Twitter that build community and brand awareness.", link: "/web-and-mobile-application", glow: "#ed8337" },
      { num: "03", icon: IcoDataAnalytics, iconBg: "rgba(59,130,246,0.1)", title: "Data Analytics", desc: "Precisely targeted PPC campaigns on Google Search, Display, YouTube, and Meta platforms that convert clicks into customers.", link: "/data-analytics", glow: "#ed8337" },
    ],
  },
];

function HomeServiceSection() {
  const [activeTab, setActiveTab] = useState(0);
  const active = serviceTabs[activeTab];

  return (
    <section id="services">
      <div className="svc-divider" />
      <div className="svc-header">
        <div className="svc-eyebrow">Our Services</div>
        <h2 className="svc-title">
          Your Complete <span className="hl" style={{ fontWeight: '700' }}><i>Business Growth</i></span> Partner
        </h2>
        <p className="svc-subtitle">
          We provide end-to-end services – from setting up your business and compliances to driving growth through digital innovation, digital marketing, and strong HR solutions.
        </p>
      </div>
      <div className="tab-row">
        {serviceTabs.map((tab, i) => (
          <button
            key={i}
            className={`svc-tab${activeTab === i ? " active" : ""}`}
            onClick={() => setActiveTab(i)}
          >
            <span className="tab-emoji">
              {tab.emoji
                ? <img src={tab.emoji} alt={tab.label} width={18} height={18} />
                : <DummyIcon size={18} />}
            </span>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="panels-wrap">
        <div className="svc-panel active" key={activeTab}>
          <div className="panel-topbar">
            <div className="panel-info">
              <div className="panel-bigicon" style={{ background: active.iconBg, border: active.iconBorder }}>
                {active.emoji
                  ? <img src={active.emoji} alt={active.label} width={32} height={32} />
                  : <DummyIcon size={32} />}
              </div>
              <div>
                <h2 className="panel-name">{active.label}</h2>
                <div className="panel-tagline">{active.tagline}</div>
              </div>
            </div>
          </div>
          <div className="sub-grid">
            {active.cards.map((card, ci) => (
              <div className="sub-card" key={ci}>
                <div className="card-num">{card.num}</div>
                <div className="card-icon-wrap" style={{ background: card.iconBg }}>
                  {card.icon
                    ? <img src={card.icon} alt={card.title} width={30} height={30} />
                    : <DummyIcon size={26} color="#ed8337" />
                  }
                </div>
                <h3 className="card-title">{card.title}</h3>
                <div className="card-desc">{card.desc}</div>
                <div className="card-arrow">
                  <a href={card.link} className="card-arrow">Explore Service <span>→</span></a>
                </div>
                <div className="card-glow" style={{ background: card.glow }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════
//  SECTION 5: WHY CHOOSE US (Radial)
// ════════════════════════════════════════════

const whyNodes = [
  { num: "01", icon: "/img/icon/one-point-access.webp", title: "One Point Access", desc: "Complete expertise integrated under one roof for sustainable growth, digital innovation, and long-term business success." },
  { num: "02", icon: "/img/icon/customized-strategies.webp", title: "Customized Strategies", desc: "We don't rely on templates - we deliver tailor-made solutions designed around your unique requirements." },
  { num: "03", icon: "/img/icon/expert-team.webp", title: "Expert Team", desc: "Skilled professionals offering multi-domain and technical expertise and solutions to drive your business forward." },
  { num: "04", icon: "/img/icon/result-oriented.webp", title: "Result-Oriented", desc: "Driven by ROI, performance, and sustainable business growth through innovative strategies and expert solutions." },
  { num: "05", icon: "/img/icon/customer-success.webp", title: "Customer Success First", desc: "Our goal isn't just sales, we grow by helping you succeed, innovate, and achieve long-term business excellence." },
  { num: "06", icon: "/img/icon/scalable-solutions.webp", title: "Scalable Solutions", desc: "Flexible and tailored offerings designed to support businesses of all sizes, from startups to large enterprises." },
];

function buildRadial(wrap, svg, nodeEls) {
  svg.innerHTML = "";
  const W = wrap.offsetWidth, H = wrap.offsetHeight;
  const cx = W / 2, cy = H / 2;
  const R = Math.min(W, H) * 0.385;
  const ns = "http://www.w3.org/2000/svg";
  const start = -Math.PI / 2 - Math.PI / 6;
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  const defs = document.createElementNS(ns, "defs");
  svg.appendChild(defs);
  const ring = document.createElementNS(ns, "circle");
  Object.entries({ cx, cy, r: R, fill: "none", stroke: "rgba(237,131,55,0.08)", "stroke-width": "1", "stroke-dasharray": "3 6" }).forEach(([k, v]) => ring.setAttribute(k, v));
  svg.appendChild(ring);
  nodeEls.forEach((node, i) => {
    if (!node) return;
    const angle = start + (i / 6) * Math.PI * 2;
    const nx = cx + R * Math.cos(angle), ny = cy + R * Math.sin(angle);
    node.style.left = nx + "px"; node.style.top = ny + "px";
    const dx = nx - cx, dy = ny - cy, dist = Math.sqrt(dx * dx + dy * dy);
    const sx = cx + (dx / dist) * 65, sy = cy + (dy / dist) * 65;
    const g = document.createElementNS(ns, "linearGradient");
    g.setAttribute("id", `spk${i}`); g.setAttribute("gradientUnits", "userSpaceOnUse");
    ["x1", "y1", "x2", "y2"].forEach((a, j) => g.setAttribute(a, [sx, sy, nx, ny][j]));
    g.innerHTML = `<stop offset="0%" stop-color="#ed8337" stop-opacity="0.7"/><stop offset="100%" stop-color="#ed8337" stop-opacity="0.15"/>`;
    defs.appendChild(g);
    const line = document.createElementNS(ns, "line");
    Object.entries({ x1: sx, y1: sy, x2: nx, y2: ny, stroke: `url(#spk${i})`, "stroke-width": "1.5", "stroke-dasharray": "5 4" }).forEach(([k, v]) => line.setAttribute(k, v));
    svg.appendChild(line);
    const mp = document.createElementNS(ns, "path");
    mp.setAttribute("id", `mp${i}`); mp.setAttribute("d", `M${sx},${sy} L${nx},${ny}`); mp.setAttribute("fill", "none");
    svg.appendChild(mp);
    const dot = document.createElementNS(ns, "circle");
    dot.setAttribute("r", "3"); dot.setAttribute("fill", "#ed8337"); dot.setAttribute("opacity", "0.85");
    const anim = document.createElementNS(ns, "animateMotion");
    anim.setAttribute("dur", (2.2 + i * 0.35) + "s"); anim.setAttribute("repeatCount", "indefinite"); anim.setAttribute("calcMode", "linear");
    const mpath = document.createElementNS(ns, "mpath");
    mpath.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#mp" + i);
    anim.appendChild(mpath); dot.appendChild(anim); svg.appendChild(dot);
    const arcR = R + 28, span = (Math.PI * 2 / 6) * 0.5;
    const arc = document.createElementNS(ns, "path");
    arc.setAttribute("d", `M${cx + arcR * Math.cos(angle - span / 2)},${cy + arcR * Math.sin(angle - span / 2)} A${arcR},${arcR} 0 0,1 ${cx + arcR * Math.cos(angle + span / 2)},${cy + arcR * Math.sin(angle + span / 2)}`);
    Object.entries({ fill: "none", stroke: "rgba(237,131,55,0.18)", "stroke-width": "1.5", "stroke-linecap": "round" }).forEach(([k, v]) => arc.setAttribute(k, v));
    svg.appendChild(arc);
  });
}

const WhyNodeCard = ({ n }) => (
  <div className="why-panel">
    <span className="wn-num">{n.num}</span>
    <span className="wn-icon">
      <img src={n.icon} alt={n.title} width={32} height={32} style={{ objectFit: "contain" }} />
    </span>
    <h3 className="wn-title">{n.title}</h3>
    <div className="wn-desc">{n.desc}</div>
  </div>
);

function WhyChooseUs() {
  const wrapRef = useRef(null);
  const svgRef = useRef(null);
  const nodeRefs = useRef([]);

  useEffect(() => {
    const init = () => {
      if (!wrapRef.current || !svgRef.current || window.innerWidth <= 780) return;
      buildRadial(wrapRef.current, svgRef.current, nodeRefs.current);
    };
    window.addEventListener("load", init);
    window.addEventListener("resize", init);
    const t = setTimeout(init, 300);
    return () => { window.removeEventListener("load", init); window.removeEventListener("resize", init); clearTimeout(t); };
  }, []);

  return (
    <section id="why">
      <div className="why-divider" />
      <div className="why-hdr">
        <div className="why-eyebrow">Why Choose Us</div>
        <h2><span className="hl"><i>One-Stop Solution for</i></span> Business Registration, Digital Transformation, Marketing & HR</h2>
      </div>
      <div className="why-radial-wrap" ref={wrapRef}>
        <svg className="why-spoke-svg" ref={svgRef} />
        <div className="why-hub">
          <div className="why-hub-logo">
            <img src={logo} style={{ width: '85px', display: 'block', margin: '0 auto' }} alt="PCS Logo" />
          </div>
        </div>
        {whyNodes.map((n, i) => (
          <div className="why-node" key={i} ref={el => (nodeRefs.current[i] = el)}>
            <WhyNodeCard n={n} />
          </div>
        ))}
      </div>
      <div className="why-nodes-mobile">
        {whyNodes.map((n, i) => <div className="why-node" key={i}><WhyNodeCard n={n} /></div>)}
      </div>
    </section>
  );
}

// ════════════════════════════════════════════
//  SECTION 6: HOME INSIGHT (Steps)
// ════════════════════════════════════════════

const INSIGHT_CARDS = [
  {
    step: "01", title: "Discover Your Business Needs",
    desc: "We analyze your business goals, industry landscape, and challenges to build solutions rooted in data and clarity.",
    icon: "/img/icon/understand-vision.webp",
  },
  {
    step: "02", title: "Design the Right Roadmap",
    desc: "Our holistic planning covers compliance, digital transformation, marketing, and HR—aligned to support long-term growth.",
    icon: "/img/icon/implement-strategically.webp",
  },
  {
    step: "03", title: "Execute with Precision",
    desc: "Expert teams implement strategies efficiently, ensuring speed, accuracy, and business alignment.",
    icon: "/img/icon/plan-holistically.webp",
  },
  {
    step: "04", title: "Track, Improve, Scale",
    desc: "We continuously monitor performance and refine strategies to maximize outcomes across every function.",
    icon: "/img/icon/monitor-optimize.webp",
  },
];

function useReveal(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("on"); io.disconnect(); } },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
}

function HomeInsight() {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  useReveal(headerRef);
  useReveal(cardsRef);

  return (
    <section className="insights-section">
      <div className="ins-hd ins-reveal" ref={headerRef} style={{ transitionDelay: "0s" }}>
        <div className="partners-header1" style={{ textAlign: "center" }}>
          <div className="partners-eyebrow" style={{ marginBottom: "12px", textAlign: "start" }}>
            From Insights to Impact
          </div>
        </div>
        <h3 className="insights-h3">Smart Strategy. Fast Execution. <em style={{ color: "var(--orange)" }}><i>Continuous Growth.</i></em></h3>
      </div>
      <div className="ins-cards ins-reveal" ref={cardsRef} style={{ transitionDelay: "0.1s" }}>
        {INSIGHT_CARDS.map((c, i) => (
          <div className="ins-card" key={i}>
            <div className="ins-step-n">{c.step}</div>
            <div className="ins-icon-box">
              <img src={c.icon} alt={c.title} width={30} height={30} style={{ objectFit: "contain" }} />
            </div>
            <h4 className="ins-card-title">{c.title}</h4>
            <p className="ins-card-desc">{c.desc}</p>
            {i < INSIGHT_CARDS.length - 1 && (
              <div className="ins-conn">
                <img src="/img/icon/arrow-next.webp" alt="next" width={10} height={10} style={{ objectFit: "contain" }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ════════════════════════════════════════════
//  SECTION 7: IMPLEMENTATION PARTNERS
// ════════════════════════════════════════════

const IMPL_PARTNERS = [
  {
    name: "ODOO",
    desc: "Comprehensive end-to-end ERP solutions for efficient enterprise management.",
    bg: "rgba(255,153,0,0.1)",
    logo: PartnerOdoo,
    link: "/odoo-partners",
  },
  {
    name: "STERLO",
    desc: "Low-code and no-code platform solutions for faster digital solution deployment.",
    bg: "rgba(0,120,212,0.1)",
    logo: PartnerSterlo,
    link: "/sterlo-partners",
  },
  {
    name: "STERLO CARE",
    desc: "Digitizing healthcare operations to improve patient satisfaction and compliance.",
    bg: "rgba(66,133,244,0.12)",
    logo: PartnerSterloCare,
    link: "/sterlo-care-partners",
  },
  {
    name: "STERLO BUILD",
    desc: "Digital Construction Management Platform for Quality, Safety, and Operational Excellence.",
    bg: "rgba(0,176,116,0.1)",
    logo: PartnerSterloBuild,
    link: "/sterlo-build-partners",
  },
  {
    name: "MICROSOFT",
    desc: "Customized mobile and web applications to streamline your business operations.",
    bg: "rgba(237,131,55,0.1)",
    logo: PartnerMicrosoft,
    link: "/microsoft-apps-partners",
  },
];

// PartnerCard — layout fully handled by CSS grid / nth-child rules
function PartnerCard({ p }) {
  return (
    <div className="partner-card" style={{ background: p.bg }}>
      <div
        className="partner-logo-zone"
        style={{ width: "75%", height: "80px", display: "flex", alignItems: "center", margin: "0 auto 12px auto" }}
      >
        <img src={p.logo} alt={p.name} style={{ width: "90%", height: "90%", objectFit: "contain" }} />
      </div>
      <div className="partner-desc">{p.desc}</div>
      <a href={p.link} className="partner-btn" style={{ textDecoration: "none", display: "inline-block" }}>
        Learn More <span>→</span>
      </a>
    </div>
  );
}

function ImplementationSection() {
  return (
    <section id="partners">
      <div className="partners-divider" />
      <div className="partners-title-wrap">
        <div className="partners-eyebrow">Implementation Partners</div>
        <h2 className="partners-title" style={{ color: "white" }}>
          Collaborating with <span className="hl" style={{ fontWeight: "700" }}>trusted partners</span> to deliver complete business solutions.
        </h2>
      </div>

      {/*
        Responsive grid — pure CSS, no JS breakpoint juggling:
          ≤640 px  (mobile)      → 1 col
          641–768 px (tab-sm)    → 2 cols, last card centred via col-span trick
          769–1024 px (tab-lg)   → 3 cols, last 2 cards centred via col-span trick
          >1024 px (desktop)     → 5 cols (original design — partners-stack)

        The CSS custom property --impl-last-col is set per breakpoint
        in the inline <style> below so the PartnerCard can pick it up.
      */}
      <style>{`
        /* ── Base: mobile-first, ≤640px → 1 column ── */
        .impl-grid {
          display: grid;
          gap: 16px;
          padding: 0 16px 32px;
          max-width: 480px;
          margin: 0 auto;
          box-sizing: border-box;
          grid-template-columns: 1fr;
        }

        /* Reset any rotation/3D or fixed sizing from global .partner-card */
        .impl-grid .partner-card {
          transform: none !important;
          rotate: none !important;
          box-shadow: 0 4px 18px rgba(0,0,0,0.13);
          border-radius: 16px;
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          flex: unset !important;
          box-sizing: border-box !important;
          margin: 0 !important;
          position: static !important;
          left: auto !important;
          right: auto !important;
        }

        /* ── Mobile wide (481–640px): still 1 col but wider container ── */
        @media (min-width: 481px) and (max-width: 640px) {
          .impl-grid {
            max-width: 560px;
            padding: 0 20px 32px;
          }
        }

        /* ── Tablet-sm (641–780px): 2 cols, last card centred at 50% ── */
        @media (min-width: 641px) and (max-width: 780px) {
          .impl-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
            max-width: 700px;
            padding: 0 20px 32px;
          }
          .impl-grid .partner-card:last-child {
            grid-column: 1 / -1;
            max-width: calc(50% - 7px);
            margin-inline: auto;
          }
        }

        /* ── Tablet-lg (769–1024px): row1 = 3 equal cols, row2 = 2 equal centred cols ── */
        @media (min-width: 769px) and (max-width: 1024px) {
          .impl-grid {
            grid-template-columns: repeat(6, 1fr);
            gap: 18px;
            max-width: 1000px;
            padding: 0 24px 32px;
          }
          /* cards 1-3: each takes 2 of 6 cols → 3 equal columns */
          .impl-grid .partner-card:nth-child(1),
          .impl-grid .partner-card:nth-child(2),
          .impl-grid .partner-card:nth-child(3) {
            grid-column: span 2;
          }
          /* cards 4-5: each takes 3 of 6 cols → 2 equal columns, fills full row */
          .impl-grid .partner-card:nth-child(4),
          .impl-grid .partner-card:nth-child(5) {
            grid-column: span 2 !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
          }
        }

        /* ── Desktop (>1024px): hide grid, show original partners-stack ── */
        @media (min-width: 1025px) {
          .impl-grid {
            display: none;
          }
        }
        @media (max-width: 1024px) {
          .partners-stack { display: none !important; }
        }
      `}</style>

      {/* Desktop (>1024): original flex row */}
      <div className="partners-stack">
        {IMPL_PARTNERS.map((p, i) => (
          <div className="partner-card" key={i} style={{ background: p.bg }}>
            <div className="partner-logo-zone" style={{ width: "75%", height: "80px", display: "flex", alignItems: "center", margin: "0 auto 12px auto" }}>
              <img src={p.logo} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
            <div className="partner-desc">{p.desc}</div>
            <a href={p.link} className="partner-btn" style={{ textDecoration: "none", display: "inline-block" }}>Learn More <span>→</span></a>
          </div>
        ))}
      </div>

      {/* Mobile / Tablet: CSS-grid layout */}
      <div className="impl-grid">
        {IMPL_PARTNERS.map((p, i) => (
          <PartnerCard key={i} p={p} />
        ))}
      </div>
    </section>
  );
}

// ════════════════════════════════════════════
//  SECTION 8: TESTIMONIAL SLIDER
// ════════════════════════════════════════════

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
    <section style={{ width: "100%", maxWidth: 1100, margin: "0 auto", padding: isMobile ? "40px 16px" : "60px 20px", fontFamily: "'Poppins', sans-serif", overflow: "hidden" }}>
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

// ════════════════════════════════════════════
//  FAQ DATA
// ════════════════════════════════════════════

const faqData = [
  { q: "What services does Priyam Consultancy Services (PCS) provide?", a: " Priyam Consultancy Services (PCS) provides digital marketing, website development, HR services, payroll management, business registration, statutory compliance, Virtual CFO services, accounting, branding, ecommerce solutions, and business consulting services designed to support operational efficiency and long-term business growth." },
  { q: "What types of digital marketing services do you provide?", a: " Our digital marketing services include SEO, performance marketing, social media marketing, content marketing, ecommerce marketing, branding, Google Ads, Meta Ads, local SEO, marketplace marketing, and strategic digital campaigns focused on improving visibility, lead generation, customer engagement, and business growth." },
  { q: "What is company registration and what types do you offer?", a: "Company registration is the legal process of establishing a business entity under government regulations. We support registrations including Sole Proprietorship, Partnership Firm, LLP, One Person Company (OPC), Private Limited Company, and other business structures based on operational and compliance requirements." },
  { q: "How are your HR services different from other agencies?", a: " Our HR services combine recruitment expertise, payroll management, compliance support, workforce planning, and scalable hiring solutions under one structured system. We focus on operational efficiency, faster closures, compliance accuracy, and long-term workforce support tailored to each business requirement and industry need." },
  { q: "What is a Virtual CFO and how can it help my business?", a: "A Virtual CFO provides strategic financial guidance including budgeting, cash flow management, financial planning, reporting, compliance monitoring, and profitability analysis. These services help businesses improve financial decision-making, operational efficiency, investor readiness, and sustainable growth without hiring a full-time CFO." },
  { q: "What website development services do you provide?", a: " We provide website development services including corporate websites, ecommerce platforms, Shopify development, WordPress websites, custom web applications, landing pages, booking systems, and SEO-friendly business websites designed for performance, scalability, user experience, and long-term digital growth." },
];

// ════════════════════════════════════════════
//  WHOM WE WORK FOR DATA
// ════════════════════════════════════════════

const whomCards = [
  { num: "01", icon: "/img/icon/startups.webp", label: "Early Stage", titleHl: "Startups", desc: "We help startups build a strong foundation for success. Whether it's registering your business, setting up efficient HR systems, implementing digital solutions, or creating a marketing strategy for brand visibility and lead generation, we provide fast, effective, and cost-efficient solutions to get your venture off the ground.", featured: false },
  { num: "02", icon: "/img/icon/smes.webp", label: "Growing Business", titleHl: "SMEs", desc: "For small and mid-sized businesses, we deliver end-to-end support across all business functions. From compliances and digital transformation to HR management and digital marketing campaigns, we help streamline processes, scale operations, enhance brand reach, and optimize resources — all under one roof.", featured: true, badge: "Most Common" },
  { num: "03", icon: "/img/icon/enterprises.webp", label: "Large Scale", titleHl: "Enterprises", desc: "For large enterprises, we provide integrated, technology-driven solutions to manage complex operations. From compliance and HR optimization to digital transformation, marketing, and brand growth initiatives, our holistic approach ensures efficiency, consistency, and measurable results across teams and locations.", featured: false },
];

const WhomCard = ({ c }) => (
  <div className={`whom-card${c.featured ? " whom-card--featured" : ""}`}>
    <div className="whom-card-shimmer" />
    <div className="whom-card-blob" />
    <div className="whom-card-num">{c.num}</div>
    <div className="whom-card-icon">
      <img src={c.icon} alt={c.titleHl} width={36} height={36} style={{ objectFit: "contain" }} />
    </div>
    <span className="whom-card-label">{c.label}</span>
    <h4 className="whom-card-title"><span className="hl">{c.titleHl}</span></h4>
    <p className="whom-card-desc">{c.desc}</p>
  </div>
);

// ════════════════════════════════════════════
//  MAIN HOME COMPONENT
// ════════════════════════════════════════════

function Home() {
  const [active, setActive] = useState(null);
  const toggle = (index) => { setActive(active === index ? null : index); };

  return (
    <Layout>

      {/* ✅ Meta Keywords & JSON-LD Schemas */}
      <head>
        <title> Website Development & Digital Marketing Agency in India | HR Solutions</title>
        <meta name="description" content="We are the No.1 website development and digital marketing agency in India, offering SEO, social media marketing, and HR solutions to help businesses grow faster." />
        <link rel="canonical" href="https://www.priyamconsultancy.com/" />
        <meta name="keywords" content="Digital Marketing, Digital Marketing Agency, Digital Marketing Services, Digital Transformation, Digital Transformation Consulting, Digital Transformation Company, HR Services, HR Slutions, HR Consultant, HR Consultancy Services, HR Service Provider, Business Registration, HRMS Solutions, Corporate Compliance, CFO Services" />

        {/* 1. WebSite Schema */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Priyam Consultancy Services",
            "url": "https://www.priyamconsultancy.com/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>

        {/* 2. Organization Schema */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Priyam Consultancy Services",
            "url": "https://www.priyamconsultancy.com/",
            "logo": "https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+91 96774 44048",
              "contactType": "Website Development & Digital Marketing Agency in India | HR Solutions"
            }],
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61577125709962",
              "https://www.linkedin.com/company/priyam-consultancy-services/",
              "https://www.instagram.com/priyam_consultancy_services/",
              "https://x.com/PCSconsultant_",
              "https://g.co/kgs/rdTYdi6"
            ]
          }
        `}</script>

        {/* 3. Product Schema */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Website Development & Digital Marketing Agency in India | HR Solutions",
            "image": ["https://www.priyamconsultancy.com/wp-content/uploads/2025/10/who-we-are.webp"],
            "description": "Leading digital transformation and marketing agency in India offering SEO, PPC, SMM, web & app development, and automation solutions to accelerate business growth.",
            "mpn": "priyamconsultancy.com",
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
              "reviewCount": "4521"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://www.priyamconsultancy.com/",
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

        {/* 4. BreadcrumbList Schema */}
        <script type="application/ld+json">{`
          {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@id": "https://www.priyamconsultancy.com/",
                "Name": "Priyam Consultancy Services"
              }
            }]
          }
        `}</script>

        {/* 5. LocalBusiness Schema */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Website Development & Digital Marketing Agency in India | HR Solutions",
            "image": "https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png",
            "@id": "Priyam Consultancy Services",
            "url": "https://www.priyamconsultancy.com/",
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
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday",    "opens": "09:00", "closes": "18:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday",   "opens": "09:00", "closes": "18:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "09:00", "closes": "18:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday",  "opens": "09:00", "closes": "18:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday",    "opens": "09:00", "closes": "18:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday",  "opens": "09:00", "closes": "18:00" }
            ],
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61577125709962",
              "https://www.linkedin.com/company/priyam-consultancy-services/",
              "https://www.instagram.com/priyam_consultancy_services/",
              "https://x.com/PCSconsultant_",
              "https://g.co/kgs/rdTYdi6"
            ]
          }
        `}</script>

        {/* 6. FAQPage Schema */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What services does Priyam Consultancy Services (PCS) provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Priyam Consultancy Services (PCS) provides digital marketing, website development, HR services, payroll management, business registration, statutory compliance, Virtual CFO services, accounting, branding, ecommerce solutions, and business consulting services designed to support operational efficiency and long-term business growth."
                }
              },
              {
                "@type": "Question",
                "name": "What types of digital marketing services do you provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our digital marketing services include SEO, performance marketing, social media marketing, content marketing, ecommerce marketing, branding, Google Ads, Meta Ads, local SEO, marketplace marketing, and strategic digital campaigns focused on improving visibility, lead generation, customer engagement, and business growth."
                }
              },
              {
                "@type": "Question",
                "name": "What is company registration and what types do you offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Company registration is the legal process of establishing a business entity under government regulations. We support registrations including Sole Proprietorship, Partnership Firm, LLP, One Person Company (OPC), Private Limited Company, and other business structures based on operational and compliance requirements."
                }
              },
              {
                "@type": "Question",
                "name": "How are your HR services different from other agencies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our HR services combine recruitment expertise, payroll management, compliance support, workforce planning, and scalable hiring solutions under one structured system. We focus on operational efficiency, faster closures, compliance accuracy, and long-term workforce support tailored to each business requirement and industry need."
                }
              },
              {
                "@type": "Question",
                "name": "What is a Virtual CFO and how can it help my business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A Virtual CFO provides strategic financial guidance including budgeting, cash flow management, financial planning, reporting, compliance monitoring, and profitability analysis. These services help businesses improve financial decision-making, operational efficiency, investor readiness, and sustainable growth without hiring a full-time CFO."
                }
              },
              {
                "@type": "Question",
                "name": "How Long To See Results Through Digital Marketing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide website development services including corporate websites, ecommerce platforms, Shopify development, WordPress websites, custom web applications, landing pages, booking systems, and SEO-friendly business websites designed for performance, scalability, user experience, and long-term digital growth."
                }
              }
            ]
          }
        `}</script>
      </head>
      {/* 1. Banner */}
      <PCSBanner />
      {/* 2. Partners Logo Scroll */}
      <Partners />
      {/* 3. Who We Are */}
      <WhoWeAre />
      {/* 4. Our Services */}
      <HomeServiceSection />
      {/* 5. Why Choose Us */}
      <WhyChooseUs />
      {/* 6. Whom We Work For */}
      <section id="whom">
        <div className="whom-divider" />
        <div className="whom-blob whom-blob-1" />
        <div className="whom-blob whom-blob-2" />
        <div className="whom-blob whom-blob-3" />
        <div className="whom-hdr">
          <div className="whom-eyebrow">Our Clients</div>
          <h2>Whom Do We <span className="hl"><i>Work For?</i></span></h2>
          <p>At Priyam Consultancy Services, we provide all-in-one, future-ready solutions tailored to the unique needs of startups, SMEs, and enterprises. From business registration and digital transformation to digital marketing, and HR management, we help businesses at every stage streamline operations, drive growth, and achieve lasting success.</p>
        </div>
        <div className="whom-grid">
          {whomCards.map((c, i) => <WhomCard key={i} c={c} />)}
        </div>
      </section>

      {/* 7. Insights / Steps */}
      <HomeInsight />
      {/* 8. Implementation Partners */}
      <ImplementationSection />
      {/* 9. Testimonial Slider */}
      <TestimonialSlider />
      {/* 10. FAQ */}
      <section className="faq-section">
        <div className="partners-header1" style={{ textAlign: "center" }}>
          <div className="partners-eyebrow" style={{ marginBottom: "25px", textAlign: "center" }}>
            Frequently Asked Questions
          </div>
        </div>
        <div className="container">
          <div className="faq-head">
            <h2>Queries That Could <span>Hold You Back</span></h2>
          </div>
          <div className="faq-wrapper">
            <div className="faq-col">
              {faqData.slice(0, 3).map((item, i) => (
                <div className="faq-item" key={i}>
                  <div className="faq-question" onClick={() => toggle(i)}>
                    <span>{item.q}</span>
                    <span className="icon">
                      {active === i ? (
                        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#ed8337" strokeWidth={2.5} strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /></svg>
                      ) : (
                        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#ed8337" strokeWidth={2.5} strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                      )}
                    </span>
                  </div>
                  {active === i && <div className="faq-answer">{item.a}</div>}
                </div>
              ))}
            </div>
            <div className="faq-col">
              {faqData.slice(3, 6).map((item, i) => (
                <div className="faq-item" key={i + 3}>
                  <div className="faq-question" onClick={() => toggle(i + 3)}>
                    <span>{item.q}</span>
                    <span className="icon">
                      {active === i + 3 ? (
                        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#ed8337" strokeWidth={2.5} strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /></svg>
                      ) : (
                        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#ed8337" strokeWidth={2.5} strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                      )}
                    </span>
                  </div>
                  {active === i + 3 && <div className="faq-answer">{item.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 11. CTA — keep your existing CTASection import if you have CTA.jsx separately */}
      <CTASection />
    </Layout>
  );
}

export default Home;