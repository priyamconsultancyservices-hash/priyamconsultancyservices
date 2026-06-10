"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["5364"],{9930(e,a,i){i.r(a),i.d(a,{default:()=>c});var t=i(4848),n=i(1085),r=i(3572);let s=`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

  :root {
    --navy: #004168;
    --navy-deep: #002a44;
    --navy-mid: #0a5282;
    --orange: #ed8337;
    --orange-light: #f5a66b;
    --green: #34d399;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .cs-wrap {
    font-family: 'Poppins', sans-serif;
    background: #f0f4f8;
    color: #0d1f2d;
    overflow-x: hidden;
  }

  .banner {
    position: relative;
    min-height: 340px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: var(--navy);
    padding: 5rem 4rem;
  }
  .banner::before {
    content: '';
    position: absolute; inset: 0; pointer-events: none; z-index: 0;
    background:
      radial-gradient(ellipse 70% 80% at 80% 40%, rgba(237,131,55,0.13) 0%, transparent 60%),
      radial-gradient(ellipse 50% 60% at 10% 80%, rgba(10,54,82,0.6) 0%, transparent 55%);
  }
  .banner::after {
    content: '';
    position: absolute; inset: 0; pointer-events: none; z-index: 0;
    background-image:
      linear-gradient(rgba(237,131,55,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(237,131,55,0.05) 1px, transparent 1px);
    background-size: 52px 52px;
  }

  .banner-split {
    position: relative;
    z-index: 2;
    max-width: 1350px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }
  .banner-inner {
    flex: 1 1 0;
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 1.1rem;
  }
  .banner-img-wrap {
    flex: 0 0 auto;
    width: 46%;
    display: flex;
    align-items: center;
    justify-content: start;
    animation: fadeUp 0.8s 0.25s ease both;
  }
  .banner-img-wrap img {
    width: 90%;
    height: auto;
    object-fit: contain;
    border-radius: 16px;
    display: block;
    filter: drop-shadow(0 8px 40px rgba(0,0,0,0.3));
  }

  @media (max-width: 900px) {
    .banner { padding: 44px 32px; }
    .banner-split { gap: 28px; }
    .banner-img-wrap { width: 44%; }
  }
  @media (max-width: 640px) {
    .banner { padding: 70px 20px 44px; }
    .banner-split { flex-direction: column; align-items: flex-start; gap: 28px; }
    .banner-inner { width: 100%; }
    .banner-img-wrap { width: 100%; max-width: 100%; justify-content: center; }
    .banner-img-wrap img { max-height: 220px; object-fit: contain; }
  }

  .banner-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    background: rgba(237,131,55,0.12);
    border: 1px solid rgba(237,131,55,0.32);
    color: var(--orange);
    font-size: .7rem;
    font-weight: 700;
    padding: .38rem 1.1rem;
    border-radius: 50px;
    letter-spacing: .12em;
    text-transform: uppercase;
    animation: fadeUp .5s ease both;
  }
  .eyebrow-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--orange);
    animation: pulse-dot 1.6s infinite;
  }
  @keyframes pulse-dot {
    0%,100%{opacity:1;transform:scale(1)}
    50%{opacity:.4;transform:scale(1.5)}
  }
  .banner-title {
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 700;
    line-height: 1.1;
    color: #fff;
    animation: fadeUp .6s .08s ease both;
  }
  .banner-title span {
    color: var(--orange);
    position: relative;
    display: inline-block;
  }
  .banner-title span::after {
    content: '';
    position: absolute;
    left: 0; bottom: -4px;
    width: 100%; height: 3px;
    background: linear-gradient(90deg, var(--orange), var(--orange-light));
    border-radius: 2px;
  }
  .banner-subtitle {
    font-size: .97rem;
    line-height: 1.8;
    color: rgb(255,255,255);
    max-width: 540px;
    animation: fadeUp .65s .16s ease both;
  }
  .banner-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--orange);
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 14px 28px;
    border-radius: 50px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
    animation: fadeUp 0.7s 0.26s ease both;
    box-shadow: 0 4px 20px rgba(237,131,55,0.35);
  }
  .banner-cta-btn:hover {
    background: var(--orange-light);
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(237,131,55,0.45);
  }
  .banner-cta-btn svg {
    width: 18px; height: 18px;
    stroke: #fff; fill: none;
    stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round;
    flex-shrink: 0;
  }
  @keyframes fadeUp {
    from{opacity:0;transform:translateY(24px)}
    to{opacity:1;transform:translateY(0)}
  }

  .cards-section { max-width: 1380px; margin: 0 auto; padding: 3rem 4% 5rem; }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  /* \u{2500}\u{2500} card is now an <a> tag \u{2500}\u{2500} */
  .cs-card {
    background: #ffffff;
    border: 1.5px solid rgba(237,131,55,0.12);
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform .32s, box-shadow .32s;
    box-shadow: 0 4px 20px rgba(237,131,55,0.08);
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
  .cs-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(0,0,0,0.12);
  }
  .cs-thumb {
    width: 100%;
    aspect-ratio: 16/9;
    overflow: hidden;
    flex-shrink: 0;
  }
  .cs-thumb img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
    transition: transform .4s ease;
  }
  .cs-card:hover .cs-thumb img { transform: scale(1.06); }

  .cs-body {
    padding: 1.2rem 1.3rem 1.3rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: .6rem;
  }

  /* Badges */
  .cat-badge {
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    padding: .25rem .75rem;
    border-radius: 6px;
    font-size: .62rem;
    font-weight: 700;
    letter-spacing: .08em;
    text-transform: uppercase;
    width: fit-content;
  }
  .cat-badge .dot { width:5px;height:5px;border-radius:50%;background:currentColor;opacity:.8; }
  .bdg-dm  { background:rgba(237,131,55,0.15); color:var(--orange-light); border:1px solid rgba(237,131,55,0.3); }
  .bdg-seo { background:rgba(52,211,153,0.12); color:#6ee7b7; border:1px solid rgba(52,211,153,0.25); }
  .bdg-smm { background:rgba(129,140,248,0.15); color:#a5b4fc; border:1px solid rgba(129,140,248,0.28); }
  .bdg-ppc { background:rgba(252,165,165,0.15); color:#fca5a5; border:1px solid rgba(252,165,165,0.28); }
  .badges-row { display:flex;flex-wrap:wrap;gap:.4rem; }
  .bdg-tag { background:rgba(0,65,104,0.08);color:var(--navy-mid);border:1px solid rgba(0,65,104,0.18); }

  .cs-overview { font-size:.88rem;color:#4a5568;line-height:1.6;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;margin:0; }
  .cs-client {
    font-size: .89rem;
    font-weight: 600;
    color: var(--navy-mid);
    display: flex;
    align-items: center;
    gap: .35rem;
    letter-spacing: .01em;
  }
  .cs-client::before {
    content: '';
    display: inline-block;
    width: 14px; height: 14px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230a5282' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3C/svg%3E") center/contain no-repeat;
    flex-shrink: 0;
    opacity: 0.75;
  }
  .cs-divider { width:100%;height:1px;background:rgba(0,65,104,0.08); }

  .cs-cta {
    display: inline-flex;
    align-items: center;
    gap: .45rem;
    padding: .5rem 1.1rem;
    border: none;
    border-radius: 50px;
    font-size: .76rem;
    font-weight: 600;
    color: #fff;
    background: var(--orange);
    cursor: pointer;
    transition: all .22s;
    width: fit-content;
    box-shadow: 0 2px 10px rgba(237,131,55,0.3);
    font-family: 'Poppins', sans-serif;
  }
  .cs-cta:hover { background:var(--orange-light); box-shadow:0 4px 16px rgba(237,131,55,0.45); }
  .cs-cta .arrow { transition:transform .22s;display:inline-block; }
  .cs-cta:hover .arrow { transform:translateX(5px); }

  @media(max-width:1100px) { .cards-grid { grid-template-columns:repeat(3,1fr); } }
  @media(max-width:720px)  { .cards-grid { grid-template-columns:repeat(2,1fr); } }
  @media(max-width:460px)  { .cards-grid { grid-template-columns:1fr; } }
`,o=[{id:1,image:"/img/case-study-tactive.webp",badge:"bdg-dm",label:"Perfomance Marketing",tags:["SEO"],client:"Tactive",slug:"tactive",title:"From Zero Lead Pipeline to 35 Cr+ Qualified Pipeline for a Construction Tech ERP Brand",overview:"Tactive Software Systems is a technology-driven company delivering dedicated construction ERP solutions . Backed by over 17 years of research and development and supported by the industry expertise of URC Constructions, Tactive helps construction businesses streamline operations and make data-driven decisions."},{id:2,image:"/img/case-study-sterlocare.webp",badge:"bdg-seo",label:"SEO",tags:["Perfomance Marketing"],client:"SterloCare",slug:"sterlocare",title:"Enterprise Lead Generation Across India and GCC for a Healthcare SaaS Brand",overview:"SterloCare, powered by the OREOPS Framework, delivers low-code technology solutions for web and mobile application development. Established in 2016, the company helps businesses streamline workflows, manage operations, and build scalable digital solutions with minimal coding. Operating across India, GCC, Africa, and the USA, SterloCare focuses on innovation, enterprise performance, and user-centric technology experiences."},{id:3,image:"/img/case-study-urtc.webp",badge:"bdg-dm",label:"Website Development",tags:["SEO"],client:"URCTS",slug:"urcts",title:"Building a Strong Brand Identity and Digital Presence for an Engineering Firm",overview:"URCTS is a global engineering solutions provider serving Oil & Gas, industrial, and infrastructure sectors with multidisciplinary expertise. Established in 2023, the company builds on the engineering legacy of URC Constructions (P) Ltd. URCTS delivers integrated solutions from concept to commissioning with a focus on precision, compliance, and operational excellence. With experience across India, the Middle East, Europe, and the USA, the company supports complex engineering projects with scalable and reliable execution. "},{id:4,image:"/img/case-study-feral.webp",badge:"bdg-seo",label:"E-Commerence Website Development",tags:["Local SEO"],client:"Feral Roots",slug:"feral-roots",title:"From Brand Study to Performance-Driven E-Commerce Growth for a Sustainable Products Brand",overview:"Feral Roots is a sustainable lifestyle brand focused on empowering tribal communities through ethical trade and responsible sourcing practices. The company works closely with local communities to source natural and millet-based products at fair prices while creating sustainable livelihood opportunities."},{id:5,image:"/img/case-study-ey-chiquita.webp",badge:"bdg-ppc",label:"Meta Ads",tags:[],client:"Ey Chiquita",slug:"ey-chiquita",title:"Driving 100 Qualified Leads Through Social Media Marketing for a Fashion Brand",overview:"Ey Chiquita is a fashion and lifestyle brand focused on creating trend-driven products and engaging digital experiences for modern consumers. The brand emphasizes style, audience engagement, and strong social media presence to connect with fashion-focused customers."},{id:6,image:"/img/case-study-sterlo.webp",badge:"bdg-ppc",label:"Content Marketing",tags:["SEO"],client:"Sterlo",slug:"sterlo",title:"Enterprise Lead Generation Across India and GCC for a Low Code No Code Platform",overview:"Sterlo is a low code / no code platform developed under the OREOPS Framework, enabling businesses to create web and mobile applications, manage workflows, and generate reports with minimal coding."},{id:7,image:"/img/case-study-zky.webp",badge:"bdg-seo",label:"SEO",tags:["Website Development"],client:"ZKY",slug:"zky",title:"Establishing a Professional Digital Presence for an HR Verification Company",overview:"ZKY wanted a professional online identity that reflected trust, accuracy, and reliability within the HR verification industry. We created a structured digital presence designed to strengthen credibility and support business enquiries."},{id:8,image:"/img/case-study-riya.webp",badge:"bdg-dm",label:"SEO",tags:["Website Development","SMM"],client:"RIYA",slug:"riya-consultancy",title:"Building a Credible Digital Presence for a Business Consulting Firm",overview:"Focused on delivering business consulting and operational support solutions, the company helps organizations improve efficiency, compliance, and long-term growth through structured and professional advisory services across multiple business functions."},{id:9,image:"/img/case-study-abb.webp",badge:"bdg-smm",label:"Website Development",tags:["SEO"],client:"ABB",slug:"abb",title:"Strengthening Digital Presence for a Digital Transformation Company",overview:"ABB Management Consulting helps MSMEs accelerate growth through Digital Transformation, Application Development, and Process Automation solutions. The company focuses on improving operational efficiency, streamlining business processes, and enabling sustainable growth through technology-driven strategies and innovation-focused consulting services."},{id:10,image:"/img/case-study-sterlobuild.webp",badge:"bdg-dm",label:"SEO",tags:["Content Marketing"],client:"SterloBuild",slug:"sterlobuild",title:"Enterprise Lead Generation Across India for a Construction Tech SaaS Brand",overview:"SterloBuild is a construction technology SaaS platform focused on simplifying construction workflows and improving operational efficiency through digital solutions designed for the construction industry."},{id:11,image:"/img/case-study-analytixhub.webp",badge:"bdg-seo",label:"Recruitment Service",tags:["Payroll"],client:"Analytix Hub",slug:"analytixhub",title:"Fast Recruitment and On-Time Payroll Enablement for an IT Company",overview:"Analytix Hub is an IT services firm delivering technology solutions and operational support for business scaling needs."},{id:12,image:"/img/case-study-ainqa.webp",badge:"bdg-smm",label:"Recruitment Service",tags:[],client:"AINQA",slug:"ainqa",title:"On-Time Recruitment Closure for Critical IT Roles",overview:"AINQA is a technology company specializing in digital services and IT solutions for diverse industries."},{id:13,image:"/img/case-study-starhealth.webp",badge:"bdg-ppc",label:"Recruitment Service",tags:[],client:"StarHealth",slug:"starhealth",title:"Bulk Recruitment Support for a Leading Insurance Brand",overview:"StarHealth is a prominent insurance provider offering comprehensive health solutions across India, supported by a large and diverse workforce."},{id:14,image:"/img/case-study-baltimore.webp",badge:"bdg-dm",label:"Recruitment Service",tags:[],client:"Baltimore Health Analytics",slug:"baltimore-health-analytics",title:"Recruitment Support for a US-Based Healthcare Analytics Company",overview:"Baltimore Health Analytics is a healthcare-focused analytics company supporting HEDIS consulting, Medicare Advantage operations, and data-driven healthcare solutions."},{id:15,image:"/img/case-study-curetech.webp",badge:"bdg-seo",label:"Recruitment Service",tags:[],client:"Cure Tech",slug:"cure-tek-manufacturing",title:"Fast Recruitment Support for a Printing & Packaging Startup",overview:"Cure Tech is a startup operating within the printing and packaging industry, focused on building efficient operational capabilities and strengthening its workforce during the early stages of business growth."},{id:16,image:"/img/case-study-natural.webp",badge:"bdg-seo",label:"Recruitment Service",tags:[],client:"Natural Salon",slug:"naturals",title:"Fast Recruitment Support for a Growing Salon Brand",overview:"Natural Salon is a beauty and wellness brand focused on delivering professional salon and grooming services through skilled talent, customer-focused experiences, and consistent service quality."},{id:17,image:"/img/case-study-talent-tribe.webp",badge:"bdg-seo",label:"SEO",tags:["Website Development"],client:"Talent Tribe",slug:"talent-tribe",title:"Brand Identity and Website Development for a Recruitment Company",overview:"Talent Tribe wanted a professional brand identity and website that clearly represented its recruitment expertise while creating a strong first impression for both employers and job seekers."}];function l({cls:e,label:a,tags:i=[]}){return(0,t.jsxs)("div",{className:"badges-row",children:[(0,t.jsxs)("div",{className:`cat-badge ${e}`,children:[(0,t.jsx)("span",{className:"dot"}),a]}),i.map(e=>(0,t.jsxs)("div",{className:"cat-badge bdg-tag",children:[(0,t.jsx)("span",{className:"dot"}),e]},e))]})}function d({card:e}){let{image:a,badge:i,label:n,tags:r,title:s,client:o,overview:c,slug:g}=e;return(0,t.jsxs)("a",{className:"cs-card",href:`/case-studies/${g}`,children:[(0,t.jsxs)("div",{className:"cs-thumb",children:[(0,t.jsx)("img",{src:a,alt:s}),"      "]}),(0,t.jsxs)("div",{className:"cs-body",children:[(0,t.jsx)(l,{cls:i,label:n,tags:r}),o&&(0,t.jsx)("div",{className:"cs-client",children:o}),c&&(0,t.jsx)("p",{className:"cs-overview",children:c}),(0,t.jsx)("div",{className:"cs-divider"}),(0,t.jsxs)("span",{className:"cs-cta",children:["Read More ",(0,t.jsx)("span",{className:"arrow",children:"\u2192"})]})]})]})}function c(){return(0,t.jsxs)(n.A,{title:" Case Studies & Success Stories | Priyam Consultancy services ",description:"Explore real case studies showcasing website development, digital marketing, branding, SEO, and business growth results delivered by Priyam Consultancy.",children:[(0,t.jsxs)(r.A,{children:[(0,t.jsx)("title",{children:" Case Studies & Success Stories | Priyam Consultancy services "}),(0,t.jsx)("meta",{name:"description",content:"Explore real case studies showcasing website development, digital marketing, branding, SEO, and business growth results delivered by Priyam Consultancy."}),(0,t.jsx)("link",{rel:"canonical",href:"https://www.priyamconsultancy.com/case-studies/"}),(0,t.jsx)("meta",{property:"og:title",content:" Case Studies & Success Stories | Priyam Consultancy services "}),(0,t.jsx)("meta",{property:"og:description",content:"Explore real case studies showcasing website development, digital marketing, branding, SEO, and business growth results delivered by Priyam Consultancy."}),(0,t.jsx)("meta",{property:"og:url",content:"https://www.priyamconsultancy.com/case-studies/"})]}),(0,t.jsxs)("div",{className:"cs-wrap",children:[(0,t.jsx)("style",{children:s}),(0,t.jsx)("section",{className:"banner",children:(0,t.jsxs)("div",{className:"banner-split",children:[(0,t.jsxs)("div",{className:"banner-inner",children:[(0,t.jsxs)("div",{className:"banner-eyebrow",children:[(0,t.jsx)("div",{className:"eyebrow-dot"}),"Real Results"]}),(0,t.jsxs)("h1",{className:"banner-title",children:["Our ",(0,t.jsx)("span",{children:"Case Studies"}),(0,t.jsx)("br",{}),"Speak For Themselves"]}),(0,t.jsx)("p",{className:"banner-subtitle",children:"Our case studies reflect real work, clear thinking, and results that matter. Each engagement is built around what the client actually needs \u2014 whether that is a brand, a website, a marketing strategy, or a combination of all three \u2014 executed with precision and delivered with purpose."}),(0,t.jsxs)("button",{className:"banner-cta-btn",onClick:()=>document.querySelector(".cards-section")?.scrollIntoView({behavior:"smooth"}),children:["Explore Case Studies",(0,t.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,t.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),(0,t.jsx)("polyline",{points:"12 5 19 12 12 19"})]})]})]}),(0,t.jsx)("div",{className:"banner-img-wrap",children:(0,t.jsx)("img",{src:"/img/case-study.png",alt:"Case Studies"})})]})}),(0,t.jsx)("section",{className:"cards-section",children:(0,t.jsx)("div",{className:"cards-grid",children:o.map(e=>(0,t.jsx)(d,{card:e},e.id))})})]})]})}}}]);