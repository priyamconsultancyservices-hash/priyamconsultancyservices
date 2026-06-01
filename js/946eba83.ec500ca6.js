"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["572"],{9393(e,t,i){i.d(t,{A:()=>s});var a=i(4848),r=i(6540);let s=function(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=e.current;if(!t)return;let i=t.getContext("2d"),a="#ed8337",r,s,n=[],o;function l(){r=t.width=t.parentElement.offsetWidth,s=t.height=t.parentElement.offsetHeight}function c(){this.reset()}c.prototype.reset=function(){this.x=Math.random()*r,this.y=Math.random()*s,this.r=2.2*Math.random()+.6,this.type=.55>Math.random()?"dot":.5>Math.random()?"ring":"plus",this.speed=.35*Math.random()+.08,this.dir=Math.random()*Math.PI*2,this.alpha=.45*Math.random()+.1,this.pulse=Math.random()*Math.PI*2,this.pulseSpeed=.018*Math.random()+.008,this.size=4*Math.random()+2},c.prototype.update=function(){this.x+=Math.cos(this.dir)*this.speed,this.y+=Math.sin(this.dir)*this.speed,this.pulse+=this.pulseSpeed,this.dir+=(Math.random()-.5)*.015,this.x<-20&&(this.x=r+20),this.x>r+20&&(this.x=-20),this.y<-20&&(this.y=s+20),this.y>s+20&&(this.y=-20)},c.prototype.draw=function(){let e=this.alpha*(.7+.3*Math.sin(this.pulse));if(i.save(),i.globalAlpha=e,i.strokeStyle=i.fillStyle=a,i.lineWidth=1,"dot"===this.type)i.beginPath(),i.arc(this.x,this.y,this.r+.4*Math.sin(this.pulse),0,2*Math.PI),i.fill();else if("ring"===this.type){let e=this.size*(.9+.15*Math.sin(this.pulse));i.beginPath(),i.arc(this.x,this.y,e,0,2*Math.PI),i.stroke()}else{let e=this.size*(.9+.1*Math.sin(this.pulse));i.beginPath(),i.moveTo(this.x-e,this.y),i.lineTo(this.x+e,this.y),i.moveTo(this.x,this.y-e),i.lineTo(this.x,this.y+e),i.stroke()}i.restore()},window.addEventListener("resize",l),l(),n=[];let d=Math.floor(r*s/9e3);for(let e=0;e<Math.max(d,28);e++)n.push(new c);return!function e(){i.clearRect(0,0,r,s),function(){let e=n.filter(e=>"dot"===e.type);for(let t=0;t<e.length;t++)for(let r=t+1;r<e.length;r++){let s=e[t].x-e[r].x,n=e[t].y-e[r].y,o=Math.sqrt(s*s+n*n);o<110&&(i.save(),i.globalAlpha=(1-o/110)*.12,i.strokeStyle=a,i.lineWidth=.7,i.beginPath(),i.moveTo(e[t].x,e[t].y),i.lineTo(e[r].x,e[r].y),i.stroke(),i.restore())}}(),n.forEach(e=>{e.update(),e.draw()}),o=requestAnimationFrame(e)}(),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",l)}},[]),(0,a.jsx)("section",{id:"cta-final",children:(0,a.jsxs)("div",{className:"cta-banner",style:{"--glow-x":"50%","--glow-y":"50%"},children:[(0,a.jsx)("canvas",{id:"ctaCanvas",ref:e}),(0,a.jsxs)("div",{className:"cta-banner-left",children:[(0,a.jsx)("div",{className:"partners-header",children:(0,a.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Ready to Start?"})}),(0,a.jsxs)("h2",{className:"cta-banner-heading",children:["Let's Talk About Your",(0,a.jsx)("br",{}),"Next Big ",(0,a.jsx)("span",{className:"hl-italic",children:"Growth Move"})]}),(0,a.jsx)("p",{className:"cta-banner-sub",children:"No pressure. Just a quick conversation to understand where you are-and how we can help you move forward."})]}),(0,a.jsxs)("div",{className:"cta-banner-right",children:[(0,a.jsxs)("a",{href:"#",className:"cta-bprimary",children:["Book a Free Consultation",(0,a.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",children:(0,a.jsx)("path",{d:"M3 8h10M9 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,a.jsx)("a",{href:"#",className:"cta-bghost",children:"View All Services"})]})]})})}},4171(e,t,i){i.r(t),i.d(t,{default:()=>v});var a=i(4848),r=i(6540),s=i(8128),n=i(9393),o=i(1085),l=i(3572);function c(){let e="https://www.pcsbusinesssolution.com/digital-marketing",t="https://www.pcsbusinesssolution.com/img/digital-marketing.png",i=[{"@context":"https://schema.org","@type":"WebSite",name:"PCS Business Solution",url:"https://www.pcsbusinesssolution.com",potentialAction:{"@type":"SearchAction",target:"https://www.pcsbusinesssolution.com/search?q={search_term_string}","query-input":"required name=search_term_string"}},{"@context":"https://schema.org","@type":"Article",headline:"Digital Marketing Services in India | PCS Business Solution",description:"Result-driven digital marketing services including SEO, social media marketing, PPC, content marketing, and email marketing to grow your business online.",image:t,author:{"@type":"Organization",name:"PCS Business Solution"},publisher:{"@type":"Organization",name:"PCS Business Solution",logo:{"@type":"ImageObject",url:"https://www.pcsbusinesssolution.com/img/logo.png"}},url:e,datePublished:"2024-01-01",dateModified:"2025-01-01"},{"@context":"https://schema.org","@type":"LocalBusiness",name:"PCS Business Solution",description:"PCS Business Solution offers digital marketing, business registration, HR, and Microsoft App services across India.",url:"https://www.pcsbusinesssolution.com",logo:"https://www.pcsbusinesssolution.com/img/logo.png",image:t,telephone:"+91-XXXXXXXXXX",address:{"@type":"PostalAddress",streetAddress:"Your Street Address",addressLocality:"Chennai",addressRegion:"Tamil Nadu",postalCode:"600001",addressCountry:"IN"},openingHours:"Mo-Fr 09:00-18:00",sameAs:["https://www.linkedin.com/company/pcs-business-solution","https://www.facebook.com/pcsbusinesssolution"]},{"@context":"https://schema.org","@type":"Service",serviceType:"Digital Marketing",provider:{"@type":"Organization",name:"PCS Business Solution"},name:"Digital Marketing Services",description:"Comprehensive digital marketing services including SEO, social media marketing, PPC advertising, content marketing, and email marketing for business growth.",url:e,areaServed:{"@type":"Country",name:"India"},offers:{"@type":"Offer",availability:"https://schema.org/InStock",priceCurrency:"INR",url:e}},{"@context":"https://schema.org","@type":"ImageObject",contentUrl:t,url:e,description:"Digital Marketing Services by PCS Business Solution",name:"Digital Marketing Banner"},{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://www.pcsbusinesssolution.com"},{"@type":"ListItem",position:2,name:"Digital Marketing",item:e}]},{"@context":"https://schema.org","@type":"ItemList",name:"Digital Marketing Services",description:"List of digital marketing services offered by PCS Business Solution",url:e,itemListElement:[{"@type":"ListItem",position:1,name:"Search Engine Optimization (SEO)"},{"@type":"ListItem",position:2,name:"Social Media Marketing"},{"@type":"ListItem",position:3,name:"Pay-Per-Click Advertising (PPC)"},{"@type":"ListItem",position:4,name:"Content Marketing"},{"@type":"ListItem",position:5,name:"Email Marketing"},{"@type":"ListItem",position:6,name:"Online Reputation Management"}]},{"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"What do you mean by business registration?",acceptedAnswer:{"@type":"Answer",text:"Business registration is the official process of legally establishing a business entity with government authorities for recognition and lawful operations."}},{"@type":"Question",name:"How many types of business registration are there?",acceptedAnswer:{"@type":"Answer",text:"Common types include Private Limited Company, Public Limited Company, Limited Liability Partnership (LLP), One Person Company (OPC), Partnership Firm, and Sole Proprietorship."}},{"@type":"Question",name:"Which is better: Ltd or LLC?",acceptedAnswer:{"@type":"Answer",text:"It depends on your business needs; Private Limited (Ltd) suits structured growth and investor funding, while LLC offers flexibility and limited liability protection."}},{"@type":"Question",name:"Can a single person establish a business?",acceptedAnswer:{"@type":"Answer",text:"Yes, a single person can register as a One Person Company (OPC) or Sole Proprietorship, depending on liability and compliance preferences."}},{"@type":"Question",name:"Where do I go to register my business?",acceptedAnswer:{"@type":"Answer",text:"Business registration is done through government portals like MCA for companies, GST portal, or local state authorities, depending on the entity type."}},{"@type":"Question",name:"How much time does it take in India to register a business?",acceptedAnswer:{"@type":"Answer",text:"Registration timelines vary by entity type, typically 5\u201320 working days, depending on approvals, documentation, and government processing."}}]}];return(0,a.jsxs)(l.A,{children:[(0,a.jsx)("title",{children:"Digital Marketing Services in India | PCS Business Solution"}),(0,a.jsx)("meta",{name:"description",content:"Result-driven digital marketing services including SEO, social media marketing, PPC, content marketing, and email marketing. Grow your business online with PCS Business Solution."}),(0,a.jsx)("meta",{name:"keywords",content:"digital marketing services India, SEO services, social media marketing, PPC advertising, content marketing, email marketing, online marketing agency, digital marketing company India, PCS Business Solution"}),(0,a.jsx)("link",{rel:"canonical",href:e}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:title",content:"Digital Marketing Services in India | PCS Business Solution"}),(0,a.jsx)("meta",{property:"og:description",content:"Result-driven digital marketing services \u2014 SEO, social media, PPC, content & email marketing. Grow your business with PCS."}),(0,a.jsx)("meta",{property:"og:url",content:e}),(0,a.jsx)("meta",{property:"og:image",content:t}),(0,a.jsx)("meta",{property:"og:site_name",content:"PCS Business Solution"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:title",content:"Digital Marketing Services | PCS Business Solution"}),(0,a.jsx)("meta",{name:"twitter:description",content:"SEO, social media, PPC & content marketing services in India. PCS Business Solution."}),(0,a.jsx)("meta",{name:"twitter:image",content:t}),i.map((e,t)=>(0,a.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)},t))]})}let d=()=>(0,a.jsx)("style",{children:`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap');
    :root {
      --navy:#022b44; --navy-deep:#011a2a; --navy-mid:#0a3652;
      --orange:#ed8337; --orange-light:#f5a66b;
      --text-dim:rgba(255,255,255,0.45);
    }
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    html{scroll-behavior:smooth;}
    body,#root,main{overflow-x:hidden;max-width:100vw;}
    img{max-width:100%;height:auto;}
    // body{font-family:'DM Sans',sans-serif;background:var(--navy);color:#fff;overflow-x:hidden;}
  `});function p(){return(0,a.jsxs)("section",{className:"hero",id:"hero",children:[(0,a.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

/* \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
   HERO \u{2014} BRC Standard Layout
\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550} */
:root {
  --navy:      #004168;
  --navy-deep: #011a2a;
  --navy-mid:  #0a3652;
  --orange:    #ed8337;
  --orange-l:  #f5a66b;
  --dim:       rgba(255,255,255,0.45);
  --dim2:      rgba(255,255,255,0.5);
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { font-family: 'Poppins', sans-serif; color: #fff; overflow-x: hidden; }

.hero {
  min-height: 100svh;
  display: grid; grid-template-columns: 1fr 1fr;
  align-items: center; gap: 2rem;
  padding: 2rem 6% 4rem;
  position: relative; overflow: hidden;
  background: var(--navy);
}
.hero::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(ellipse 65% 70% at 100% 50%, rgba(237,131,55,0.10) 0%, transparent 60%),
    radial-gradient(ellipse 50% 60% at 0% 100%, rgba(10,66,102,0.5) 0%, transparent 55%);
}
.hero::after {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image: linear-gradient(rgba(237,131,55,0.028) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(237,131,55,0.028) 1px, transparent 1px);
  background-size: 52px 52px;
}

.hero-left { position: relative; z-index: 2; display: flex; flex-direction: column; }

.h-badge {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: rgba(237,131,55,0.1); border: 1px solid rgba(237,131,55,0.28);
  color: var(--orange); font-size: 0.72rem; font-weight: 600;
  padding: 0.38rem 1rem; border-radius: 50px;
  letter-spacing: 0.09em; text-transform: uppercase;
  width: fit-content; animation: fadeUp 0.6s ease both;
}
.badge-dot {
  width: 6px; height: 6px; border-radius: 50%; background: var(--orange);
  animation: pulse-dot 1.6s infinite;
}
@keyframes pulse-dot { 0%,100%{ opacity:1; transform:scale(1); } 50%{ opacity:.4; transform:scale(1.5); } }

.hero-heading {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2.2rem, 3.8vw, 3.3rem);
  font-weight: 600; line-height: 1.15;
  margin-top: 1.4rem; animation: fadeUp 0.7s 0.08s ease both; color: #fff;
}
.hero-heading .hl { color: var(--orange); }
.hero-heading .lined { position: relative; display: inline-block; }
.hero-heading .lined::after {
  content: ''; position: absolute; left: 0; bottom: -3px;
  width: 100%; height: 3px; background: var(--orange); border-radius: 2px;
  transform: scaleX(0); transform-origin: left;
  animation: line-in 0.5s 0.9s ease forwards;
}
/* orange span support */
.hero-heading .orange { color: var(--orange); }
.hero-heading .underline-word { position: relative; display: inline-block; }
.hero-heading .underline-word::after {
  content: ''; position: absolute; left: 0; bottom: -3px;
  width: 100%; height: 3px; background: linear-gradient(90deg,#ed8337,#f5a66b); border-radius: 2px;
  transform: scaleX(0); transform-origin: left;
  animation: line-in 0.55s 1s ease forwards;
}
@keyframes line-in { to { transform: scaleX(1); } }

.hero-sub {
  margin-top: 1.4rem; font-size: 1rem; line-height: 1.78;
  color: rgb(255, 255, 255); max-width: fit-content;
  animation: fadeUp 0.7s 0.16s ease both;
}
.hero-actions { margin-top: 2rem; display: flex; gap: 0.9rem; flex-wrap: wrap; animation: fadeUp 0.7s 0.26s ease both; }
.btn-fill {
  background: var(--orange);
  padding: 0.85rem 2rem; border-radius: 50px;
  font-family: 'Poppins', sans-serif; font-size: 0.92rem; font-weight: 500;
  text-decoration: none; border: none; cursor: pointer; color: #fff;
  box-shadow: 0 4px 22px rgba(237,131,55,0.32);
  display: inline-flex; align-items: center; gap: 0.5rem;
  transition: background 0.22s, transform 0.18s, box-shadow 0.22s;
}
.btn-fill:hover { background: var(--orange-l); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(237,131,55,0.42); }
.btn-arrow {
  display: inline-flex; align-items: center; justify-content: center;
  width: 22px; height: 22px; border-radius: 50%;
  background: rgba(2,43,68,0.3); font-size: 0.85rem;
}
@keyframes fadeUp { from{ opacity:0; transform:translateY(26px); } to{ opacity:1; transform:translateY(0); } }

.hero-right {
  overflow: hidden; width: 100%; height: auto;
  position: relative; z-index: 2;
  display: flex; align-items: center; justify-content: center;
}
img.hero-img { animation: none !important; }
.hero-img {
  width: 100%;
  object-fit: contain;
  display: block;
}

/* \u{2550}\u{2550} TABLET (\u{2264} 960px) \u{2550}\u{2550} */
@media(max-width: 960px) {
  .hero {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    padding: 6rem 5% 4rem;
    min-height: auto;
    text-align: start;
    gap: 2.5rem;
  }
  .hero-left { order: 1; align-items: flex-start;         padding: 3rem 0; }
  .hero-right { width: 100% !important; height: auto !important; order: 2; display: flex; justify-content: center; }
  .hero-img { width: 100%; max-width: 480px; height: auto; }
  .hero-sub { max-width: 90%; }
  .hero-actions { justify-content: flex-start; }
}

/* \u{2550}\u{2550} MOBILE (\u{2264} 600px) \u{2550}\u{2550} */
@media(max-width: 600px) {
  .hero { padding: 5rem 4% 3rem; gap: 2rem; }
  .hero-heading { font-size: clamp(1.7rem, 6vw, 2.2rem) !important; }
  .hero-sub { font-size: 0.9rem; max-width: 100%; }
  .hero-img { max-width: 100%; width: 100%; }
  .h-badge { font-size: 0.65rem; }
}
.menu li { position: relative; cursor: pointer; font-size: 16px; color: black; }

      `}),(0,a.jsxs)("div",{className:"hero-left",children:[(0,a.jsxs)("div",{className:"h-badge",children:[(0,a.jsx)("div",{className:"badge-dot"}),"Digital Marketing "]}),(0,a.jsxs)("h1",{className:"hero-heading",children:["Best",(0,a.jsx)("span",{className:"hl lined",style:{marginLeft:"12px"},children:"Digital Marketing "}),"Who Puts the Clients First"]}),(0,a.jsx)("p",{className:"hero-sub",children:"As the best digital marketing agency, we believe great digital marketing starts with listening. We ask the right questions to understand what truly holds your business back\u2014whether it's low leads, weak visibility, or underperforming campaigns. As a trusted digital marketing company, we go beyond surface-level strategies and uncover insights that drive real results."}),(0,a.jsx)("div",{className:"hero-actions",children:(0,a.jsxs)("a",{className:"btn-fill",href:"#",children:["Explore More ",(0,a.jsx)("span",{className:"btn-arrow",children:"\u203A"})]})})]}),(0,a.jsx)("div",{className:"hero-right",children:(0,a.jsx)("img",{src:"/img/digital-marketing.png",alt:"Digital Marketing Illustration",className:"hero-img"})})]})}function m(){let[e,t]=(0,r.useState)({name:"",email:"",phone:"",company:"",msg:""}),i=i=>{t({...e,[i.target.name]:i.target.value})};return(0,a.jsxs)("section",{className:"approach",id:"approach",children:[(0,a.jsx)("style",{children:`
        .approach { position:relative; padding:4rem 6%; overflow:hidden; }
        .ap-inner { position:relative; z-index:2; margin:0 auto; display:grid; grid-template-columns:1fr 0.7fr; gap:4rem; align-items:center; }
        .ap-heading { font-family:'Poppins',sans-serif; font-size:clamp(1.6rem,3vw,2.6rem); line-height:1.12; color:#000; margin-bottom:1.2rem;font-weight:600; }
        .ap-heading span { color:var(--orange); }
        .ap-intro { font-size:1rem; line-height:1.8; color:#5a6a7a; margin-bottom:2rem; }
        .ap-form-wrap { position:relative; max-width:450px; width:100%; }
        @media(max-width:900px){
          .ap-inner { grid-template-columns:1fr !important; gap:2.5rem; }
          .ap-form-wrap { max-width:100%; }
          .fl-row { grid-template-columns:1fr !important; }
        }
        @media(max-width:480px){
          .approach { padding:3rem 4%; }
          .ap-form-card { padding:2rem 1.4rem; }
          .form-card-title { font-size:1.4rem; }
        }
        .ap-form-wrap::before { content:''; position:absolute; inset:-2px; background:linear-gradient(135deg,rgba(237,131,55,0.55),rgba(237,131,55,0.1),rgba(237,131,55,0.55)); border-radius:26px; z-index:0; }
        .ap-form-card { position:relative; z-index:1; background:#004168; border-radius:24px; padding:2.8rem 2.6rem; box-shadow:0 24px 60px rgba(0,0,0,0.5),0 0 40px rgba(237,131,55,0.06); border:1px solid rgba(237,131,55,0.18); text-align:start; }
        .form-card-eyebrow { display:inline-flex; align-items:flex-start; gap:8px; font-family:'Poppins',sans-serif; font-size:0.6rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:var(--orange); margin-bottom:0.8rem; }
        .form-card-eyebrow-line { width:22px; height:1px; background:var(--orange); }
        .form-card-title { font-family:'Poppins',sans-serif; font-size:1.7rem; font-weight:800; color:#fff; line-height:1.15; margin-bottom:2.4rem; }
        .form-card-title span { color:var(--orange); }
        .fl-row { display:grid; grid-template-columns:1fr 1fr; gap:0.85rem; }
        .fl-group { position:relative; margin-bottom:1rem; }
        .fl-label { display:block; font-family:'Poppins',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--orange); margin-bottom:0.4rem; text-align:start; }
        .fl-input,.fl-textarea { width:100%; padding:0.82rem 1rem 0.82rem 2.6rem; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; font-family:'Poppins',sans-serif; font-size:0.88rem; color:#fff; background:rgba(255,255,255,0.04); outline:none; appearance:none; transition:border-color 0.22s,background 0.22s,box-shadow 0.22s; }
        .fl-input::placeholder,.fl-textarea::placeholder { color:rgba(255,255,255,0.3); }
        .fl-input:focus,.fl-textarea:focus { border-color:var(--orange); background:rgba(237,131,55,0.06); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .fl-icon { position:absolute; left:0.85rem; top:50%; transform:translateY(-50%); font-size:0.95rem; opacity:0.5; pointer-events:none; }
        .fl-group.textarea-group .fl-icon { top:0.9rem; transform:none; }
        .fl-textarea { min-height:88px; resize:none; padding-top:0.82rem; padding-left:2.6rem; }
        .phone-row { display:flex; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; overflow:hidden; background:rgba(255,255,255,0.04); transition:border-color 0.22s,box-shadow 0.22s; }
        .phone-row:focus-within { border-color:var(--orange); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .phone-flag { display:flex; align-items:flex-start; gap:0.3rem; padding:0 0.85rem; font-size:0.82rem; font-weight:700; color:#fff; border-right:1.5px solid rgba(237,131,55,0.2); white-space:nowrap; background:rgba(237,131,55,0.08); cursor:default; flex-shrink:0; }
        .phone-flag-icon { font-size:0.9rem; opacity:0.7; }
        .phone-row .fl-input { border:none; border-radius:0; background:transparent; box-shadow:none; padding:0.82rem 1rem; }
        .phone-row .fl-input:focus { box-shadow:none; }
        .ap-submit { width:100%; background:linear-gradient(135deg,#ed8337,#f5a66b); color:#fff; border:none; padding:1rem 1.5rem; border-radius:12px; font-family:'Poppins',sans-serif; font-size:0.97rem; font-weight:500; cursor:pointer; letter-spacing:0.02em; display:flex; align-items:flex-start; justify-content:center; gap:0.6rem; transition:transform 0.2s,box-shadow 0.2s; }
        .ap-submit:hover { transform:translateY(-2px); box-shadow:0 12px 36px rgba(237,131,55,0.5); }
        .ap-submit-arrow { display:inline-flex; align-items:flex-start; justify-content:center; width:24px; height:24px; border-radius:50%; background:rgba(2,43,68,0.25); font-size:0.9rem; }
      `}),(0,a.jsxs)("div",{className:"ap-inner",children:[(0,a.jsxs)("div",{className:"ap-left",children:[(0,a.jsx)("div",{className:"partners-header1",children:(0,a.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Approach in"})}),(0,a.jsxs)("h2",{className:"ap-heading",children:["Result-Driven  ",(0,a.jsx)("span",{children:"Digital Marketing"})," Services"]}),(0,a.jsx)("p",{className:"ap-intro",children:"At our full-service digital marketing company, every digital marketing service we offer is aligned with measurable business outcomes. Whether it\u2019s lead generation, conversions, or brand awareness, our digital marketing strategies are designed to deliver impact."}),(0,a.jsx)("p",{className:"ap-intro",children:"We don\u2019t believe in guesswork. Our best digital marketing services are backed by data, tracking, and continuous optimization. As a best digital marketing company, we measure what matters and refine what doesn\u2019t work."}),(0,a.jsx)("p",{className:"ap-intro",children:"In the fast-changing world of digital marketing, we stay ahead by constantly testing, learning, and improving. That\u2019s what makes us the best digital marketing agency businesses trust.          "})]}),(0,a.jsx)("div",{className:"ap-form-wrap",children:(0,a.jsxs)("div",{className:"ap-form-card",children:[(0,a.jsxs)("div",{className:"form-card-eyebrow",children:[(0,a.jsx)("span",{className:"form-card-eyebrow-line"}),"Your Growth, Our Mission",(0,a.jsx)("span",{className:"form-card-eyebrow-line"})]}),(0,a.jsxs)("div",{className:"form-card-title",children:["Get Your ",(0,a.jsx)("span",{children:"Free"})," Quote"]}),(0,a.jsxs)("form",{onSubmit:i=>{i.preventDefault();let a={name:e.name,email:e.email,phone:e.phone,company:e.company,message:e.msg,url:window.location.href};s.Ay.send("service_8xw6k3r","template_jarui36",a,"XWRnXi4hK2SvmRG3q").then(()=>{alert("Message Sent Successfully \u2705"),t({name:"",email:"",phone:"",company:"",msg:""})}).catch(e=>{console.log(e),alert("Failed to send \u274C")})},children:[(0,a.jsxs)("div",{className:"fl-row",children:[(0,a.jsxs)("div",{className:"fl-group",children:[(0,a.jsx)("label",{className:"fl-label",children:"Your Name"}),(0,a.jsxs)("div",{style:{position:"relative"},children:[(0,a.jsx)("span",{className:"fl-icon",children:"\u{1F464}"}),(0,a.jsx)("input",{className:"fl-input",type:"text",name:"name",placeholder:"Full name",value:e.name,onChange:i,required:!0})]})]}),(0,a.jsxs)("div",{className:"fl-group",children:[(0,a.jsx)("label",{className:"fl-label",children:"Company"}),(0,a.jsxs)("div",{style:{position:"relative"},children:[(0,a.jsx)("span",{className:"fl-icon",children:"\u{1F3E2}"}),(0,a.jsx)("input",{className:"fl-input",type:"text",name:"company",placeholder:"Company name",value:e.company,onChange:i})]})]})]}),(0,a.jsxs)("div",{className:"fl-group",children:[(0,a.jsx)("label",{className:"fl-label",children:"Email Address"}),(0,a.jsxs)("div",{style:{position:"relative"},children:[(0,a.jsx)("span",{className:"fl-icon",children:"\u2709\uFE0F"}),(0,a.jsx)("input",{className:"fl-input",type:"email",name:"email",placeholder:"your@email.com",value:e.email,onChange:i,required:!0})]})]}),(0,a.jsxs)("div",{className:"fl-group",children:[(0,a.jsx)("label",{className:"fl-label",children:"Mobile Number"}),(0,a.jsxs)("div",{className:"phone-row",children:[(0,a.jsx)("div",{className:"phone-flag",children:(0,a.jsx)("span",{className:"phone-flag-icon",children:"\u{1F4DE}"})}),(0,a.jsx)("input",{className:"fl-input",type:"tel",name:"phone",placeholder:"Mobile number",value:e.phone,onChange:i,maxLength:"10",pattern:"[0-9]{10}",required:!0})]})]}),(0,a.jsxs)("div",{className:"fl-group textarea-group",children:[(0,a.jsx)("label",{className:"fl-label",children:"Message"}),(0,a.jsxs)("div",{style:{position:"relative"},children:[(0,a.jsx)("span",{className:"fl-icon",style:{top:"0.9rem",transform:"none"},children:"\u{1F4AC}"}),(0,a.jsx)("textarea",{className:"fl-textarea",name:"msg",placeholder:"Tell us about your business needs...",value:e.msg,onChange:i})]})]}),(0,a.jsxs)("button",{type:"submit",className:"ap-submit",children:["Get Free Consultation",(0,a.jsx)("span",{className:"ap-submit-arrow",children:"\u203A"})]})]})]})})]})]})}let h=[{icon:(0,a.jsx)("img",{src:"/img/icon/dm-seo.webp",alt:"Search Engine Optimization",width:"28",height:"28"}),title:"Search Engine Optimization",desc:"Get found where it matters. We help you climb rankings, earn trust, and stay visible, organically."},{icon:(0,a.jsx)("img",{src:"/img/icon/paid-marketing.webp",alt:"Paid Marketing",width:"28",height:"28"}),title:"Paid Marketing",desc:"We don't just run ads. We craft high-ROI, data-driven campaigns that effectively speak to the right people at the right time."},{icon:(0,a.jsx)("img",{src:"/img/icon/dm-content-marketing.webp",alt:"Content Marketing",width:"28",height:"28"}),title:"Content Marketing",desc:"From blogs to lead magnets, we create content that informs, engages, and converts, without the fluff."},{icon:(0,a.jsx)("img",{src:"/img/icon/social-media-marketing.webp",alt:"Social Media Marketing",width:"28",height:"28"}),title:"Social Media Marketing",desc:"We turn scrolls into conversations and followers into loyal customers with compelling, strategic, and engaging social storytelling that truly resonates."},{icon:(0,a.jsx)("img",{src:"/img/icon/dm-website-development.webp",alt:"Website Development",width:"28",height:"28"}),title:"Website Development",desc:"We create responsive, user-friendly websites that enhance user experience and drive engagement, turning ideas into functional, high-performing sites."},{icon:(0,a.jsx)("img",{src:"/img/icon/email-whatsapp-marketing.webp",alt:"Email and WhatsApp Marketing",width:"28",height:"28"}),title:"Email & WhatsApp Marketing",desc:"Engage customers directly through targeted email and WhatsApp marketing campaigns to boost conversions, retention, brand awareness, and measurable business growth."}];function g(){return(0,a.jsxs)("section",{className:"svc-section",style:{position:"relative",background:"#004168",padding:"8rem 6% 7rem",overflow:"hidden"},children:[(0,a.jsx)("style",{children:`
        @media(max-width:768px){ .svc-section{ padding:4rem 5% 4rem !important; } }
        @media(max-width:480px){ .svc-section{ padding:3rem 4% 3rem !important; } }
        .svc-bg-r{position:absolute;inset:0;pointer-events:none;z-index:0;background:radial-gradient(ellipse 60% 55% at 15% 30%,rgba(237,131,55,0.07) 0%,transparent 60%),radial-gradient(ellipse 50% 45% at 85% 70%,rgba(56,189,248,0.05) 0%,transparent 55%);}
        .svc-grid{position:absolute;inset:0;pointer-events:none;z-index:0;background-image:linear-gradient(rgba(237,131,55,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(237,131,55,0.03) 1px,transparent 1px);background-size:58px 58px;}
        .svc-orb{position:absolute;border-radius:50%;filter:blur(70px);pointer-events:none;z-index:0;}
        .svc-orb-1{width:500px;height:500px;top:-120px;left:-100px;background:rgba(237,131,55,0.05);animation:sdm-o 14s ease-in-out infinite alternate;}
        .svc-orb-2{width:400px;height:400px;bottom:-80px;right:-60px;background:rgba(56,189,248,0.04);animation:sdm-o 14s 4s ease-in-out infinite alternate;}
        @keyframes sdm-o{from{transform:scale(1);}to{transform:scale(1.2) translate(20px,-20px);}}
        .svc-header{position:relative;z-index:2;text-align:center;margin-bottom:3rem;margin-left:auto;margin-right:auto;}
        .svc-tag{display:inline-flex;align-items:flex-start;gap:.55rem;font-size:.72rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--orange);margin-bottom:1rem;font-family:'DM Sans',sans-serif;}
        .svc-tagline{width:20px;height:2px;background:var(--orange);border-radius:2px;}
        .svc-h2{font-family:'Poppins',sans-serif;font-size:clamp(2rem,3.8vw,2.6rem);font-weight:600;line-height:1.1;color:#fff;margin-bottom:1.1rem;}
        .svc-h2 span{color:var(--orange);}
        .svc-sub{font-size:.97rem;line-height:1.8;color:rgb(255, 255, 255);}
        .svc-cards{position:relative;z-index:2;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:1.6rem;}
        .svc-card{background:linear-gradient(145deg, rgba(10, 54, 82, 0.55), rgb(76 186 235 / 23%));border:1px solid rgba(255,255,255,0.065);border-radius:22px;padding:2rem 1.8rem 1.8rem;position:relative;overflow:hidden;transition:transform .32s ease,box-shadow .32s ease,border-color .32s ease,background .32s ease;cursor:default;}
        .svc-card::before{content:'';position:absolute;inset:0;border-radius:22px;background:radial-gradient(ellipse 80% 55% at 50% 0%,rgba(237,131,55,0.1) 0%,transparent 70%);opacity:0;transition:opacity .32s;pointer-events:none;}
        .svc-card:hover{transform:translateY(-10px);box-shadow:0 22px 60px rgba(237,131,55,0.12),0 0 0 1px rgba(237,131,55,0.22);border-color:rgba(237,131,55,0.28);background:rgba(255,255,255,0.045);}
        .svc-card:hover::before{opacity:1;}
        .svc-card:hover .svc-icon-ring{border-color:rgba(237,131,55,0.5);box-shadow:0 0 20px rgba(237,131,55,0.2);}
        .svc-card:hover .svc-learn{color:var(--orange);letter-spacing:.15em;}
        .svc-icon-wrap{margin-bottom:1.4rem;position:relative;width:60px;height:60px;}
        .svc-icon-ring{width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,rgba(30,100,150,0.8),rgba(10,50,90,0.9));border:1.5px solid rgba(56,189,248,0.22);display:flex;align-items:center;justify-content:center;font-size:1.45rem;transition:border-color .32s,box-shadow .32s;position:relative;z-index:1;}
        .svc-icon-wrap::after{content:'';position:absolute;inset:-5px;border-radius:50%;border:1px solid rgba(237,131,55,0.12);animation:icon-pulse 2.5s ease-in-out infinite;}
        @keyframes icon-pulse{0%,100%{transform:scale(1);opacity:.6;}50%{transform:scale(1.18);opacity:.15;}}
        .svc-card-title{font-family:'Poppins',sans-serif;font-size:1.05rem;font-weight:700;color:#ee883f;margin-bottom:.7rem;line-height:1.3;}
        .svc-card-desc{    font-size: 14px; line-height: 1.74;color: rgb(255 255 255); margin-bottom: 1.4rem; letter-spacing: 0.3px; font-family: 'Poppins';}
        .svc-learn{display:inline-flex;align-items:flex-start;gap:.4rem;font-size:.7rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,0.3);text-decoration:none;transition:color .25s,letter-spacing .25s;font-family:'DM Sans',sans-serif;}
        .svc-learn-arr{display:inline-flex;align-items:flex-start;justify-content:center;width:20px;height:20px;border-radius:50%;border:1px solid currentColor;font-size:.7rem;transition:transform .25s;}
        .svc-card:hover .svc-learn-arr{transform:rotate(45deg) scale(1.1);}
        .svc-card-line{position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--orange),transparent);opacity:0;border-radius:0 0 22px 22px;transition:opacity .32s;}
        .svc-card:hover .svc-card-line{opacity:1;}
        @media(max-width:900px){.svc-cards{grid-template-columns:1fr 1fr;gap:1.2rem;}}
        @media(max-width:580px){.svc-cards{grid-template-columns:1fr;gap:1rem;}
          .svc-h2{font-size:clamp(1.5rem,5vw,2rem);}
          section[style*="background:#004168"]:nth-of-type(2){padding:4rem 4% 4rem !important;}
        }
      `}),(0,a.jsx)("div",{className:"svc-bg-r"}),(0,a.jsx)("div",{className:"svc-grid"}),(0,a.jsx)("div",{className:"svc-orb svc-orb-1"}),(0,a.jsx)("div",{className:"svc-orb svc-orb-2"}),(0,a.jsxs)("div",{className:"svc-header",children:[(0,a.jsx)("div",{className:"partners-header1",children:(0,a.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Specialized Digital Marketing Services"})}),(0,a.jsxs)("h2",{className:"svc-h2",children:["Smart Marketing. ",(0,a.jsx)("span",{children:"Sharp Execution."})," Stronger Results."]}),(0,a.jsx)("p",{className:"svc-sub",children:"From Discovery To Conversion, We Support Every Stage Of Your Customer Journey With Tailored, Data-Backed Solutions."})]}),(0,a.jsx)("div",{className:"svc-cards",children:h.map((e,t)=>(0,a.jsxs)("div",{className:"svc-card",style:{animationDelay:`${.05+.07*t}s`},children:[(0,a.jsx)("div",{className:"svc-icon-wrap",children:(0,a.jsx)("div",{className:"svc-icon-ring",children:e.icon})}),(0,a.jsx)("div",{className:"svc-card-title",children:e.title}),(0,a.jsx)("div",{className:"svc-card-desc",children:e.desc}),(0,a.jsxs)("a",{className:"svc-learn",href:"#",children:["LEARN MORE ",(0,a.jsx)("span",{className:"svc-learn-arr",children:"\u2197"})]}),(0,a.jsx)("div",{className:"svc-card-line"})]},t))})]})}let u=[{num:"01",emoji:(0,a.jsx)("img",{src:"/img/icon/proc-discover.webp",alt:"Discover and Understand",width:"32",height:"32"}),title:"Discover & Understand",desc:"Every brand is different, so we don\u2019t start with assumptions\u2014we start with you. Through in-depth discovery calls, competitor research, and audience analysis, we dig into your business goals, current challenges, and the ecosystem you operate in. This helps us understand the \u201Cwhy\u201D behind the work and sets a strong foundation for everything that follows."},{num:"02",emoji:(0,a.jsx)("img",{src:"/img/icon/proc-audit-strategize.webp",alt:"Audit and Strategize",width:"32",height:"32"}),title:"Audit & Strategize",desc:"Next, we run a full diagnostic of your digital presence\u2014website, content, SEO, paid ads, social media, and more. We identify gaps, missed opportunities, and underperforming channels. Based on this, we create a custom strategy aligned with your objectives\u2014whether it\u2019s brand awareness, lead generation, or revenue growth."},{num:"03",emoji:(0,a.jsx)("img",{src:"/img/icon/proc-execute.webp",alt:"Execute with Precision",width:"32",height:"32"}),title:"Execute with Precision",desc:"Our team then gets to work\u2014designing creatives, writing copy, setting up campaigns, building funnels, and optimizing user journeys. Each piece of work is handled with care, clarity, and a focus on performance. We believe in clean execution with zero guesswork and complete visibility for you at every milestone."},{num:"04",emoji:(0,a.jsx)("img",{src:"/img/icon/proc-track-optimize.webp",alt:"Track Report and Optimize",width:"32",height:"32"}),title:"Track, Report & Optimize",desc:"We don\u2019t just measure for the sake of it\u2014we measure what matters. Every campaign is monitored in real time, KPIs are reviewed weekly, and reports are built to be easy to understand. What\u2019s performing stays, what\u2019s not gets fixed. This ongoing optimization is what helps us keep improving, without wasting time or budget."},{num:"05",emoji:(0,a.jsx)("img",{src:"/img/icon/proc-scale-expand.webp",alt:"Scale and Expand",width:"32",height:"32"}),title:"We Scale & Expand",desc:"Once we have a winning formula, we replicate and scale it across platforms or geographies. Whether it\u2019s scaling ad budgets, expanding into new markets, or growing your content engine, we help you amplify what\u2019s working without losing control of quality or ROI."}];function x(){let[e,t]=(0,r.useState)(!1),[i,s]=(0,r.useState)(0),n=(0,r.useRef)(null);(0,r.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&t(!0)},{threshold:.1});return n.current&&e.observe(n.current),()=>e.disconnect()},[]),(0,r.useEffect)(()=>{let e=setInterval(()=>s(e=>(e+1)%5),2200);return()=>clearInterval(e)},[]);let o=[270,342,54,126,198];return(0,a.jsxs)("section",{ref:n,className:"prc3-section",style:{position:"relative",background:"#ffffff",padding:"6rem 4% 7rem",overflow:"hidden"},children:[(0,a.jsx)("style",{children:`
        @media(max-width:768px){ .prc3-section{ padding:3.5rem 4% 4rem !important; } }
        @media(max-width:480px){ .prc3-section{ padding:2.5rem 4% 3rem !important; } }
        /* \u{2500}\u{2500} Process Radial Section \u{2500}\u{2500} */
        .prc3-dotgrid{position:absolute;inset:0;pointer-events:none;z-index:0;
          background-image:radial-gradient(circle,rgba(237,131,55,0.18) 1px,transparent 1px);
          background-size:32px 32px;}
        .prc3-dotgrid::after{content:'';position:absolute;inset:0;
          background:radial-gradient(ellipse 70% 70% at 50% 50%,rgba(255,255,255,0) 30%,#fff 80%);}

        .prc3-header{position:relative;z-index:2;text-align:center;margin-bottom:3.5rem;}
        .prc3-eyebrow{display:inline-flex;align-items:flex-start;gap:.55rem;font-size:.7rem;font-weight:700;
          letter-spacing:.18em;text-transform:uppercase;color:var(--orange);margin-bottom:.9rem;font-family:'DM Sans',sans-serif;}
        .prc3-eye-line{width:28px;height:1.5px;background:var(--orange);border-radius:2px;}
        .prc3-h2{font-family:'Poppins',sans-serif;font-size:clamp(1.9rem,3vw,2.6rem);font-weight:700;
          color:#0d1f2d;line-height:1.12;margin-bottom:.8rem;}
        .prc3-h2 em{color:var(--orange);font-style:normal;}
        .prc3-sub{font-size:.95rem;line-height:1.82;color:#5a6a7a;margin:0 auto;}

        /* \u{2500}\u{2500} Radial canvas \u{2500}\u{2500} */
        .prc3-radial-wrap{position:relative;z-index:2;display:flex;gap:3.5rem;
          align-items:flex-start;justify-content:center;flex-wrap:wrap;max-width:1200px;margin:0 auto;}

        .prc3-orbit-area{position:relative;width:500px;height:500px;flex-shrink:0;}

        /* outer dashed ring */
        .prc3-ring-outer{position:absolute;inset:10px;border-radius:50%;
          border:1.5px dashed rgba(237,131,55,0.2);animation:ring-rot 30s linear infinite;}
        .prc3-ring-mid{position:absolute;inset:55px;border-radius:50%;
          border:1px dashed rgba(2,43,68,0.1);animation:ring-rot 20s linear infinite reverse;}
        @keyframes ring-rot{to{transform:rotate(360deg);}}

        /* center hub */
        .prc3-hub{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
          width:110px;height:110px;border-radius:50%;z-index:5;
          background:linear-gradient(135deg,#fff 0%,#fef3e8 100%);
          box-shadow:0 0 0 8px rgba(237,131,55,0.08),0 0 0 16px rgba(237,131,55,0.04),
                     0 12px 40px rgba(237,131,55,0.2);
          display:flex;flex-direction:column;align-items:center;justify-content:center;
          border:2px solid rgba(237,131,55,0.35);cursor:default;}
        .prc3-hub-logo{width:82px;height:auto;object-fit:contain;margin-bottom:4px;display:block;}
        .prc3-hub-num{font-family:'Poppins',sans-serif;font-size:2rem;font-weight:900;
          color:#0d1f2d;line-height:1;}
        .prc3-hub-sub{font-family:'DM Sans',sans-serif;font-size:.6rem;color:#8a9aaa;margin-top:2px;}

        /* spoke lines (SVG) */
        .prc3-spokes{position:absolute;inset:0;pointer-events:none;z-index:2;}

        /* orbit nodes */
        .prc3-orb-node{position:absolute;transform:translate(-50%,-50%);z-index:6;cursor:pointer;}
        .prc3-orb-ring{width:56px;height:56px;border-radius:50%;border:2px solid rgba(237,131,55,0.25);
          background:#fff;display:flex;align-items:center;justify-content:center;font-size:1.4rem;
          box-shadow:0 4px 18px rgba(2,43,68,0.1);transition:all .3s ease;position:relative;}
        .prc3-orb-ring::before{content:'';position:absolute;inset:-5px;border-radius:50%;
          border:1px solid rgba(237,131,55,0);transition:border-color .3s,transform .4s;}
        .prc3-orb-node.active .prc3-orb-ring{
          background:linear-gradient(135deg,var(--orange),var(--orange-light));
          border-color:var(--orange);box-shadow:0 8px 30px rgba(237,131,55,0.4);transform:scale(1.18);}
        .prc3-orb-node.active .prc3-orb-ring::before{border-color:rgba(237,131,55,0.3);transform:scale(1.25);}
        .prc3-orb-emoji img{width:32px;height:32px;object-fit:contain;display:block;transition:filter .3s;}
        .prc3-orb-node.active .prc3-orb-emoji img{filter:brightness(0) invert(1);}
        .prc3-step-num{position:absolute;top:-6px;right:-6px;width:20px;height:20px;border-radius:50%;
          background:var(--orange);color:#fff;font-family:'Poppins',sans-serif;font-size:.6rem;
          font-weight:800;display:flex;align-items:flex-start;justify-content:center;
          box-shadow:0 2px 8px rgba(237,131,55,0.5);}

        /* \u{2500}\u{2500} Magazine card strip (right side) \u{2500}\u{2500} */
        .prc3-cards-col{display:flex;flex-direction:column;gap:1.2rem;flex:1;min-width:340px;max-width:600px;}

        .prc3-mag-card{display:flex;align-items:stretch;border-radius:14px;overflow:hidden;
          background:#fff;box-shadow:0 4px 24px rgba(2,43,68,0.07);
          border:1px solid rgba(2,43,68,0.07);
          transition:box-shadow .3s,transform .3s,border-color .3s;cursor:pointer;
          opacity:0;transform:translateX(30px);
          transition:opacity .6s ease,transform .6s ease,box-shadow .3s,border-color .3s;}
        .prc3-mag-card.vis{opacity:1;transform:translateX(0);}
        .prc3-mag-card.active-card{border-color:rgba(237,131,55,0.4);
          box-shadow:0 8px 36px rgba(237,131,55,0.15);}
        .prc3-mag-card:hover{box-shadow:0 10px 40px rgba(237,131,55,0.14);
          transform:translateX(4px);border-color:rgba(237,131,55,0.3);}

        /* left accent bar */
        .prc3-accent-bar{width:7px;flex-shrink:0;background:rgba(2,43,68,0.08);
          transition:background .3s;}
        .prc3-mag-card.active-card .prc3-accent-bar{background:var(--orange);}
        .prc3-mag-card:hover .prc3-accent-bar{background:var(--orange-light);}

        /* card body */
        .prc3-card-body{padding:1.4rem 1.6rem;flex:1;}
        .prc3-card-top{display:flex;align-items:flex-start;gap:.9rem;margin-bottom:.6rem;}
        .prc3-card-num{font-family:'Poppins',sans-serif;font-size:2.2rem;font-weight:900;
          color:rgba(2,43,68,0.08);line-height:1;transition:color .3s;min-width:48px;}
        .prc3-mag-card.active-card .prc3-card-num{color:rgba(237,131,55,0.2);}
        .prc3-card-title-wrap{flex:1;}
        .prc3-card-title{font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;
          color:#0d1f2d;line-height:1.3;transition:color .3s;}
        .prc3-mag-card.active-card .prc3-card-title{color:var(--orange);}
        .prc3-card-icon{font-size:1.4rem;opacity:.8;display:flex;align-items:center;justify-content:center;}
        .prc3-card-icon img{width:28px;height:28px;object-fit:contain;transition:filter .3s;}
        .prc3-mag-card.active-card .prc3-card-icon img{filter:brightness(0) saturate(100%) invert(51%) sepia(98%) saturate(1200%) hue-rotate(1deg) brightness(103%);}
        .prc3-card-desc{font-size:.92rem;line-height:1.78;color:#000;
          font-family:'poppins',sans-serif;
          max-height:0;overflow:hidden;transition:max-height .5s ease,opacity .4s ease;opacity:0;}
        .prc3-mag-card.active-card .prc3-card-desc{max-height:160px;opacity:1;}

        /* mobile */
        @media(max-width:860px){
          .prc3-orbit-area{width:320px;height:320px;}
          .prc3-hub{width:75px;height:75px;}
          .prc3-hub-num{font-size:1.4rem;}
          .prc3-orb-ring{width:44px;height:44px;font-size:1.1rem;}
        }
        @media(max-width:640px){
          .prc3-radial-wrap{flex-direction:column;gap:2rem;align-items:flex-start;}
          .prc3-orbit-area{width:280px;height:280px;}
          .prc3-cards-col{max-width:100%;width:100%;min-width:unset;}
          .prc3-mag-card{transform:translateX(0)!important;opacity:1!important;}
        }
        @media(max-width:480px){
          .prc3-orbit-area{width:240px;height:240px;}
          .prc3-hub{width:60px;height:60px;}
          .prc3-hub-label{font-size:.5rem;}
          .prc3-hub-num{font-size:1.1rem;}
          .prc3-hub-sub{display:none;}
          .prc3-orb-ring{width:36px;height:36px;font-size:.9rem;}
          .prc3-step-num{width:16px;height:16px;font-size:.5rem;}
          .prc3-card-body{padding:1rem 1.2rem;}
        }
      `}),(0,a.jsx)("div",{className:"prc3-dotgrid"}),(0,a.jsxs)("div",{className:"prc3-header",children:[(0,a.jsx)("div",{className:"partners-header1",children:(0,a.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Digital Marketing Process"})}),(0,a.jsxs)("h2",{className:"prc3-h2",children:["Simple. Strategic. ",(0,a.jsx)("em",{children:"Built Around Your Goals."})]}),(0,a.jsx)("p",{className:"prc3-sub",children:"We follow a clear, collaborative process that ensures every step is aligned with your business outcomes and not just marketing metrics."})]}),(0,a.jsxs)("div",{className:"prc3-radial-wrap",children:[(0,a.jsxs)("div",{className:"prc3-orbit-area",children:[(0,a.jsx)("div",{className:"prc3-ring-outer"}),(0,a.jsx)("div",{className:"prc3-ring-mid"}),(0,a.jsxs)("svg",{className:"prc3-spokes",viewBox:"0 0 500 500",fill:"none",children:[u.map((e,t)=>{let r=o[t]*Math.PI/180,s=250+210*Math.cos(r),n=250+210*Math.sin(r),l=i===t;return(0,a.jsx)("line",{x1:"250",y1:"250",x2:s,y2:n,stroke:l?"rgba(237,131,55,0.55)":"rgba(2,43,68,0.07)",strokeWidth:l?"2":"1",strokeDasharray:l?"none":"4 4",style:{transition:"stroke .4s,stroke-width .4s"}},t)}),u.map((e,t)=>{let i=o[t]*Math.PI/180;return(0,a.jsx)("line",{x1:250+230*Math.cos(i),y1:250+230*Math.sin(i),x2:250+240*Math.cos(i),y2:250+240*Math.sin(i),stroke:"rgba(237,131,55,0.35)",strokeWidth:"2",strokeLinecap:"round"},`t${t}`)})]}),(0,a.jsx)("div",{className:"prc3-hub",children:(0,a.jsx)("img",{src:"/img/priyam-consultancy-logo.png",alt:"PCS Business Solution",className:"prc3-hub-logo"})}),u.map((e,t)=>{let r=o[t]*Math.PI/180,n=250+210*Math.cos(r),l=250+210*Math.sin(r),c=e=>`${e/500*100}%`;return(0,a.jsx)("div",{className:`prc3-orb-node${i===t?" active":""}`,style:{left:c(n),top:c(l)},onClick:()=>s(t),children:(0,a.jsxs)("div",{className:"prc3-orb-ring",children:[(0,a.jsx)("span",{className:"prc3-orb-emoji",children:e.emoji}),(0,a.jsx)("span",{className:"prc3-step-num",children:e.num})]})},t)})]}),(0,a.jsx)("div",{className:"prc3-cards-col",children:u.map((t,r)=>(0,a.jsxs)("div",{className:`prc3-mag-card${e?" vis":""}${i===r?" active-card":""}`,style:{transitionDelay:e?`${.1*r}s`:"0s"},onClick:()=>s(r),children:[(0,a.jsx)("div",{className:"prc3-accent-bar"}),(0,a.jsxs)("div",{className:"prc3-card-body",children:[(0,a.jsxs)("div",{className:"prc3-card-top",children:[(0,a.jsx)("div",{className:"prc3-card-num",children:t.num}),(0,a.jsx)("div",{className:"prc3-card-title-wrap",children:(0,a.jsx)("div",{className:"prc3-card-title",children:t.title})}),(0,a.jsx)("span",{className:"prc3-card-icon",children:t.emoji})]}),(0,a.jsx)("div",{className:"prc3-card-desc",children:t.desc})]})]},r))})]})]})}let f=[{num:"01",color:"#34d399",label:"We Collaborate, Not Dictate",title:"We Collaborate, Not Dictate",desc:"We start by collaborating with your internal teams, understanding your approach to day to day workflows, and creating strategies that are practical and at a pace that aligns with your growth.."},{num:"02",color:"#a78bfa",label:"We Build with Context",title:"We Build with Context",desc:" Our ideas aren't based on what is working for someone else. We take the time to know your market, audience, and stage of business, and then we build campaigns that are appropriate for you, not what\u2019s trendy."},{num:"03",color:"#ed8337",label:"We Own Outcomes",title:"We Own Outcomes",desc:" From campaign performance through to conversion rates, we remain accountable for the end result. You will receive timely timeline communications, transparent reporting, and a team that is available beyond just execution."}];function b(){let[e,t]=(0,r.useState)([!1,!1,!1]),i=[(0,r.useRef)(null),(0,r.useRef)(null),(0,r.useRef)(null)];return(0,r.useEffect)(()=>{i.forEach((e,i)=>{let a=new IntersectionObserver(([e])=>{e.isIntersecting&&t(e=>{let t=[...e];return t[i]=!0,t})},{threshold:.15});return e.current&&a.observe(e.current),()=>a.disconnect()})},[]),(0,a.jsxs)("section",{className:"wcu-section",style:{position:"relative",background:"#004168",padding:"4rem 6%",overflow:"hidden"},children:[(0,a.jsx)("style",{children:`
        @media(max-width:768px){ .wcu-section{ padding:3rem 5% !important; } }
        @media(max-width:480px){ .wcu-section{ padding:2.5rem 4% !important; } }
        .wcu-grid-bg{position:absolute;inset:0;pointer-events:none;z-index:0;background-image:linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px);background-size:55px 55px;}
        .wcu-orb-el{position:absolute;border-radius:50%;filter:blur(80px);pointer-events:none;z-index:0;}
        .wcu-orb-1{width:420px;height:420px;top:-100px;left:-80px;background:rgba(237,131,55,0.07);animation:wcu-of 12s ease-in-out infinite alternate;}
        .wcu-orb-2{width:360px;height:360px;bottom:-80px;right:-60px;background:rgba(56,189,248,0.05);animation:wcu-of 16s 3s ease-in-out infinite alternate;}
        @keyframes wcu-of{from{transform:scale(1);}to{transform:scale(1.25) translate(18px,-18px);}}
        .wcu-inner{position:relative;z-index:2;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:flex-start;}
        .wcu-left{position:relative;display:flex;align-items:flex-start;justify-content:center;min-height:420px;}
        .wcu-illus{position:relative;width:380px;height:380px;display:flex;align-items:flex-start;justify-content:center;}
        .wcu-illus svg{width:100%;height:100%;overflow:visible;filter:drop-shadow(0 0 30px rgba(237,131,55,0.12));}
        .wcu-stat{position:absolute;background:rgba(10,54,82,0.9);backdrop-filter:blur(10px);border:1px solid rgba(237,131,55,0.25);border-radius:12px;padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:0.7rem;color:#fff;white-space:nowrap;box-shadow:0 6px 24px rgba(0,0,0,0.3);animation:wcu-cf 3s ease-in-out infinite;}
        .wcu-stat .sc-label{font-size:0.58rem;color:rgba(255,255,255,0.45);text-transform:uppercase;letter-spacing:.06em;margin-bottom:2px;}
        .wcu-stat .sc-val{font-family:'Poppins',sans-serif;font-weight:700;font-size:0.95rem;color:var(--orange);}
        .wcu-stat .sc-up{color:#34d399;font-size:0.7rem;}
        .wcu-sc-1{top:30px;left:0;animation-delay:0s;}
        .wcu-sc-2{top:40px;right:0;animation-delay:.8s;}
        .wcu-sc-3{bottom:60px;left:10px;animation-delay:1.6s;}
        .wcu-sc-4{bottom:50px;right:0;animation-delay:.4s;}
        @keyframes wcu-cf{0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}
        .wcu-right{display:flex;flex-direction:column;gap:0;}
        .wcu-point{display:flex;gap:0;align-items:stretch;position:relative;transition:opacity .55s ease,transform .55s ease;}
        .wcu-point.vis{opacity:1 !important;transform:translateX(0) !important;}
        .wcu-num-col{display:flex;flex-direction:column;align-items:flex-start;width:52px;flex-shrink:0;padding-top:4px;}
        .wcu-num{font-family:'Space Mono',monospace;font-size:1.5rem;font-weight:700;line-height:1;letter-spacing:-0.03em;}
        .wcu-vert-line{flex:1;width:2px;margin:8px auto 0;background:linear-gradient(180deg,rgba(255,255,255,0.1) 0%,transparent 100%);border-radius:2px;}
        .wcu-content{flex:1;padding:0 0 3rem 1.2rem;}
        .wcu-label{display:none;align-items:flex-start;gap:.35rem;font-family:'DM Sans',sans-serif;font-size:0.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:.28rem .85rem;border-radius:20px;margin-bottom:.75rem;border:1px solid;}
        .wcu-title{font-family:'Poppins',sans-serif;font-size:1.05rem;font-weight:700;color:#f4a164;line-height:1.3;margin-bottom:.5rem;}
        .wcu-desc{font-size:.92rem;line-height:1.76;color:rgb(255 255 255 / 90%);max-width:420px;font-family:'poppins'}
        .wcu-arrow-span{display:inline-block;width:60px;height:2px;position:relative;vertical-align:middle;margin-left:.6rem;}
        @media(max-width:900px){
          .wcu-inner{grid-template-columns:1fr;gap:3rem;}
          .wcu-left{min-height:320px;}
          .wcu-illus{width:300px;height:300px;}
        }
        @media(max-width:480px){
          .wcu-inner{gap:2rem;}
          .wcu-left{min-height:260px;}
          .wcu-illus{width:240px;height:240px;}
          .wcu-stat{font-size:.6rem;padding:6px 10px;}
          .wcu-stat .sc-val{font-size:.8rem;}
          .wcu-sc-1{top:10px;left:-5px;}
          .wcu-sc-2{top:10px;right:-5px;}
          .wcu-sc-3{bottom:30px;left:-5px;}
          .wcu-sc-4{bottom:30px;right:-5px;}
          .wcu-content{padding:0 0 2rem 1rem;}
          .wcu-desc{font-size:.85rem;}
        }
      `}),(0,a.jsx)("div",{className:"wcu-grid-bg"}),(0,a.jsx)("div",{className:"wcu-orb-el wcu-orb-1"}),(0,a.jsx)("div",{className:"wcu-orb-el wcu-orb-2"}),(0,a.jsxs)("div",{className:"prc3-header",children:[(0,a.jsx)("div",{className:"partners-header1",children:(0,a.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"How We Work"})}),(0,a.jsxs)("h2",{className:"prc3-h2",style:{color:"#fff"},children:["Plan With Purpose. ",(0,a.jsx)("em",{children:"Execute With Precision."})]})]}),(0,a.jsxs)("div",{className:"wcu-inner",children:[(0,a.jsxs)("div",{className:"wcu-left",children:[(0,a.jsxs)("div",{className:"wcu-stat wcu-sc-1",children:[(0,a.jsx)("div",{className:"sc-label",children:"Organic Reach"}),(0,a.jsxs)("div",{className:"sc-val",children:["+218% ",(0,a.jsx)("span",{className:"sc-up",children:"\u2191"})]})]}),(0,a.jsxs)("div",{className:"wcu-stat wcu-sc-2",children:[(0,a.jsx)("div",{className:"sc-label",children:"Campaign ROI"}),(0,a.jsxs)("div",{className:"sc-val",children:["4.8x ",(0,a.jsx)("span",{className:"sc-up",children:"\u2191"})]})]}),(0,a.jsxs)("div",{className:"wcu-stat wcu-sc-3",children:[(0,a.jsx)("div",{className:"sc-label",children:"Lead Quality"}),(0,a.jsxs)("div",{className:"sc-val",children:["94% ",(0,a.jsx)("span",{className:"sc-up",children:"\u2191"})]})]}),(0,a.jsxs)("div",{className:"wcu-stat wcu-sc-4",children:[(0,a.jsx)("div",{className:"sc-label",children:"Conversions"}),(0,a.jsxs)("div",{className:"sc-val",children:["+312% ",(0,a.jsx)("span",{className:"sc-up",children:"\u2191"})]})]}),(0,a.jsx)("div",{className:"wcu-illus",children:(0,a.jsxs)("svg",{viewBox:"0 0 380 380",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("circle",{cx:"190",cy:"190",r:"155",stroke:"rgba(237,131,55,0.08)",strokeWidth:"1",strokeDasharray:"6 4"}),(0,a.jsx)("circle",{cx:"190",cy:"190",r:"120",stroke:"rgba(237,131,55,0.12)",strokeWidth:"1",strokeDasharray:"4 6"}),(0,a.jsx)("rect",{x:"110",y:"140",width:"160",height:"105",rx:"10",fill:"rgba(10,54,82,0.9)",stroke:"rgba(237,131,55,0.4)",strokeWidth:"1.5"}),(0,a.jsx)("rect",{x:"118",y:"148",width:"144",height:"88",rx:"6",fill:"#0a2535"}),(0,a.jsx)("rect",{x:"176",y:"245",width:"28",height:"12",rx:"2",fill:"rgba(10,54,82,0.9)",stroke:"rgba(237,131,55,0.3)",strokeWidth:"1"}),(0,a.jsx)("rect",{x:"158",y:"255",width:"64",height:"6",rx:"3",fill:"rgba(10,54,82,0.9)",stroke:"rgba(237,131,55,0.25)",strokeWidth:"1"}),(0,a.jsxs)("rect",{x:"126",y:"210",width:"12",height:"22",rx:"2",fill:"rgba(237,131,55,0.7)",children:[(0,a.jsx)("animate",{attributeName:"height",values:"10;22;14;22",dur:"2.5s",repeatCount:"indefinite"}),(0,a.jsx)("animate",{attributeName:"y",values:"222;210;216;210",dur:"2.5s",repeatCount:"indefinite"})]}),(0,a.jsxs)("rect",{x:"143",y:"200",width:"12",height:"32",rx:"2",fill:"#38bdf8",children:[(0,a.jsx)("animate",{attributeName:"height",values:"18;32;24;32",dur:"2.8s",repeatCount:"indefinite"}),(0,a.jsx)("animate",{attributeName:"y",values:"214;200;208;200",dur:"2.8s",repeatCount:"indefinite"})]}),(0,a.jsxs)("rect",{x:"160",y:"206",width:"12",height:"26",rx:"2",fill:"rgba(237,131,55,0.5)",children:[(0,a.jsx)("animate",{attributeName:"height",values:"14;26;20;26",dur:"2.2s",repeatCount:"indefinite"}),(0,a.jsx)("animate",{attributeName:"y",values:"218;206;212;206",dur:"2.2s",repeatCount:"indefinite"})]}),(0,a.jsxs)("rect",{x:"177",y:"195",width:"12",height:"37",rx:"2",fill:"#34d399",children:[(0,a.jsx)("animate",{attributeName:"height",values:"22;37;28;37",dur:"3s",repeatCount:"indefinite"}),(0,a.jsx)("animate",{attributeName:"y",values:"210;195;204;195",dur:"3s",repeatCount:"indefinite"})]}),(0,a.jsxs)("rect",{x:"194",y:"203",width:"12",height:"29",rx:"2",fill:"rgba(237,131,55,0.8)",children:[(0,a.jsx)("animate",{attributeName:"height",values:"16;29;20;29",dur:"2.6s",repeatCount:"indefinite"}),(0,a.jsx)("animate",{attributeName:"y",values:"216;203;212;203",dur:"2.6s",repeatCount:"indefinite"})]}),(0,a.jsxs)("rect",{x:"211",y:"198",width:"12",height:"34",rx:"2",fill:"#38bdf8",children:[(0,a.jsx)("animate",{attributeName:"height",values:"20;34;26;34",dur:"2.4s",repeatCount:"indefinite"}),(0,a.jsx)("animate",{attributeName:"y",values:"212;198;206;198",dur:"2.4s",repeatCount:"indefinite"})]}),(0,a.jsxs)("rect",{x:"228",y:"193",width:"12",height:"39",rx:"2",fill:"#34d399",children:[(0,a.jsx)("animate",{attributeName:"height",values:"24;39;30;39",dur:"2.7s",repeatCount:"indefinite"}),(0,a.jsx)("animate",{attributeName:"y",values:"208;193;201;193",dur:"2.7s",repeatCount:"indefinite"})]}),(0,a.jsx)("polyline",{points:"126,208 143,198 160,204 177,190 194,196 211,184 228,178 250,170",stroke:"#ed8337",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:(0,a.jsx)("animate",{attributeName:"stroke-dasharray",values:"0,300;300,0",dur:"2s",fill:"freeze"})}),(0,a.jsx)("circle",{cx:"250",cy:"170",r:"3",fill:"#ed8337",children:(0,a.jsx)("animate",{attributeName:"r",values:"2;4;2",dur:"1.5s",repeatCount:"indefinite"})}),(0,a.jsx)("rect",{x:"126",y:"153",width:"60",height:"6",rx:"3",fill:"rgba(237,131,55,0.3)"}),(0,a.jsx)("rect",{x:"192",y:"153",width:"30",height:"6",rx:"3",fill:"rgba(255,255,255,0.1)"}),(0,a.jsx)("rect",{x:"228",y:"153",width:"26",height:"6",rx:"3",fill:"rgba(255,255,255,0.08)"}),(0,a.jsxs)("g",{transform:"translate(68,110)",children:[(0,a.jsx)("circle",{cx:"22",cy:"22",r:"22",fill:"rgba(13,74,112,0.85)",stroke:"rgba(237,131,55,0.35)",strokeWidth:"1.5"}),(0,a.jsx)("text",{x:"22",y:"28",textAnchor:"middle",fontSize:"18",children:"\u{1F50D}"}),(0,a.jsx)("animate",{attributeName:"transform",attributeType:"XML",values:"translate(68,110);translate(68,100);translate(68,110)",dur:"2.5s",repeatCount:"indefinite",keyTimes:"0;0.5;1"})]}),(0,a.jsxs)("g",{transform:"translate(268,108)",children:[(0,a.jsx)("circle",{cx:"22",cy:"22",r:"22",fill:"rgba(13,74,112,0.85)",stroke:"rgba(237,131,55,0.35)",strokeWidth:"1.5"}),(0,a.jsx)("text",{x:"22",y:"28",textAnchor:"middle",fontSize:"18",children:"\u{1F4E3}"}),(0,a.jsx)("animate",{attributeName:"transform",attributeType:"XML",values:"translate(268,108);translate(268,98);translate(268,108)",dur:"3s",repeatCount:"indefinite",keyTimes:"0;0.5;1"})]}),(0,a.jsxs)("g",{transform:"translate(62,232)",children:[(0,a.jsx)("circle",{cx:"22",cy:"22",r:"22",fill:"rgba(13,74,112,0.85)",stroke:"rgba(56,189,248,0.35)",strokeWidth:"1.5"}),(0,a.jsx)("text",{x:"22",y:"28",textAnchor:"middle",fontSize:"18",children:"\u{1F4E7}"}),(0,a.jsx)("animate",{attributeName:"transform",attributeType:"XML",values:"translate(62,232);translate(62,222);translate(62,232)",dur:"2.8s",repeatCount:"indefinite",keyTimes:"0;0.5;1"})]}),(0,a.jsxs)("g",{transform:"translate(270,238)",children:[(0,a.jsx)("circle",{cx:"22",cy:"22",r:"22",fill:"rgba(13,74,112,0.85)",stroke:"rgba(52,211,153,0.35)",strokeWidth:"1.5"}),(0,a.jsx)("text",{x:"22",y:"28",textAnchor:"middle",fontSize:"18",children:"\u{1F4CA}"}),(0,a.jsx)("animate",{attributeName:"transform",attributeType:"XML",values:"translate(270,238);translate(270,228);translate(270,238)",dur:"3.2s",repeatCount:"indefinite",keyTimes:"0;0.5;1"})]}),(0,a.jsx)("line",{x1:"112",y1:"132",x2:"130",y2:"148",stroke:"rgba(237,131,55,0.2)",strokeWidth:"1",strokeDasharray:"4 3",children:(0,a.jsx)("animate",{attributeName:"stroke-dashoffset",from:"0",to:"-14",dur:"1.5s",repeatCount:"indefinite"})}),(0,a.jsx)("line",{x1:"268",y1:"132",x2:"254",y2:"148",stroke:"rgba(237,131,55,0.2)",strokeWidth:"1",strokeDasharray:"4 3",children:(0,a.jsx)("animate",{attributeName:"stroke-dashoffset",from:"0",to:"-14",dur:"1.8s",repeatCount:"indefinite"})}),(0,a.jsx)("line",{x1:"106",y1:"252",x2:"120",y2:"248",stroke:"rgba(56,189,248,0.2)",strokeWidth:"1",strokeDasharray:"4 3",children:(0,a.jsx)("animate",{attributeName:"stroke-dashoffset",from:"0",to:"-14",dur:"1.6s",repeatCount:"indefinite"})}),(0,a.jsx)("line",{x1:"270",y1:"252",x2:"262",y2:"248",stroke:"rgba(52,211,153,0.2)",strokeWidth:"1",strokeDasharray:"4 3",children:(0,a.jsx)("animate",{attributeName:"stroke-dashoffset",from:"0",to:"-14",dur:"2s",repeatCount:"indefinite"})}),(0,a.jsxs)("g",{transform:"translate(168,60)",children:[(0,a.jsx)("circle",{cx:"22",cy:"22",r:"20",fill:"rgba(237,131,55,0.12)",stroke:"rgba(237,131,55,0.45)",strokeWidth:"1.5"}),(0,a.jsx)("text",{x:"22",y:"28",textAnchor:"middle",fontSize:"16",children:"\u{1F3AF}"})]}),(0,a.jsx)("line",{x1:"190",y1:"102",x2:"190",y2:"140",stroke:"rgba(237,131,55,0.2)",strokeWidth:"1",strokeDasharray:"4 3",children:(0,a.jsx)("animate",{attributeName:"stroke-dashoffset",from:"0",to:"-14",dur:"1.2s",repeatCount:"indefinite"})})]})})]}),(0,a.jsx)("div",{className:"wcu-right",children:f.map((t,r)=>(0,a.jsxs)("div",{ref:i[r],className:`wcu-point${e[r]?" vis":""}`,style:{opacity:0,transform:"translateX(30px)",transitionDelay:`${.1+.15*r}s`},children:[(0,a.jsxs)("div",{className:"wcu-num-col",children:[(0,a.jsx)("div",{className:"wcu-num",style:{color:t.color},children:t.num}),r<2&&(0,a.jsx)("div",{className:"wcu-vert-line"})]}),(0,a.jsxs)("div",{className:"wcu-content",style:2===r?{paddingBottom:0}:{},children:[(0,a.jsxs)("div",{className:"wcu-label",style:{color:t.color,borderColor:`${t.color}55`,background:`${t.color}14`},children:[t.label,(0,a.jsxs)("span",{className:"wcu-arrow-span",style:{"--arrow-color":t.color,"--arrowb-color":t.color},children:[(0,a.jsx)("span",{style:{position:"absolute",top:0,left:0,right:0,height:"2px",borderRadius:"2px",background:t.color}}),(0,a.jsx)("span",{style:{position:"absolute",right:"-1px",top:"-4px",width:0,height:0,borderTop:"5px solid transparent",borderBottom:"5px solid transparent",borderLeft:`8px solid ${t.color}`}})]})]}),(0,a.jsx)("div",{className:"wcu-title",children:t.title}),(0,a.jsx)("div",{className:"wcu-desc",children:t.desc})]})]},r))})]})]})}let w=[{q:"What do you mean by business registration?",a:"Business registration is the official process of legally establishing a business entity with government authorities for recognition and lawful operations."},{q:"How many types of business registration are there?",a:"Common types include Private Limited Company, Public Limited Company, Limited Liability Partnership (LLP), One Person Company (OPC), Partnership Firm, and Sole Proprietorship."},{q:"Which is better: Ltd or LLC?",a:"It depends on your business needs; Private Limited (Ltd) suits structured growth and investor funding, while LLC offers flexibility and limited liability protection."},{q:"Can a single person establish a business?",a:"Yes, a single person can register as a One Person Company (OPC) or Sole Proprietorship, depending on liability and compliance preferences."},{q:"Where do I go to register my business?",a:"Business registration is done through government portals like MCA (Ministry of Corporate Affairs) for companies, GST portal, or local state authorities, depending on the entity type."},{q:"How much time does it take in India to register a business?",a:"Registration timelines vary by entity type, typically 5\u201320 working days, depending on approvals, documentation, and government processing."}];function y(){let[e,t]=(0,r.useState)(null),i=i=>{t(e===i?null:i)};return(0,a.jsxs)("section",{className:"faq-section",children:[(0,a.jsx)("style",{children:`
       .container {width:100%;}
        .faq-section{ padding:4rem 6%; }
        .faq-wrapper{ display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; }
        .faq-item{  border-radius:12px; overflow:hidden; margin-bottom:1rem; background:#fff;  }
        .faq-question{ display:flex; justify-content:space-between; align-items:flex-start; padding:1.1rem 1.4rem; cursor:pointer; font-family:'Poppins',sans-serif; font-size:.95rem; font-weight:600; color:#0d1f2d; gap:1rem; }
        .faq-question .icon{ flex-shrink:0; font-size:1.3rem; color:var(--orange); }
        .faq-answer{ padding:0 1.4rem 1.1rem; font-size:.9rem; line-height:1.78; color:#5a6a7a; font-family:'Poppins',sans-serif; }
        .faq-head{ text-align:start; margin-bottom:2.5rem; }
        .faq-head h2{ font-family:'Poppins',sans-serif; font-size:clamp(1.6rem,3vw,2.4rem); font-weight:700; color:#0d1f2d;text-align:center; }
        .faq-head h2 span{ color:var(--orange); }
        @media(max-width:768px){
          .faq-wrapper{ grid-template-columns:1fr; }
          .faq-section{ padding:3rem 4%; }
        }
        @media(max-width:480px){
          .faq-section{ padding:2.5rem 4%; }
          .faq-question{ font-size:.88rem; padding:.9rem 1rem; }
          .faq-answer{ padding:0 1rem .9rem; font-size:.85rem; }
        }
      `}),(0,a.jsx)("div",{className:"partners-header2",style:{textAlign:"center",marginTop:"20px"},children:(0,a.jsx)("div",{className:"partners-eyebrow",children:"Frequently Asked Questions"})}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"faq-head",children:(0,a.jsxs)("h2",{children:["Queries That Could ",(0,a.jsx)("span",{children:"Hold You Back"})]})}),(0,a.jsxs)("div",{className:"faq-wrapper",children:[(0,a.jsx)("div",{className:"faq-col",children:w.slice(0,3).map((t,r)=>(0,a.jsxs)("div",{className:"faq-item",children:[(0,a.jsxs)("div",{className:"faq-question",onClick:()=>i(r),children:[(0,a.jsx)("span",{children:t.q}),(0,a.jsx)("span",{className:"icon",children:e===r?"\u2212":"+"})]}),e===r&&(0,a.jsx)("div",{className:"faq-answer",children:t.a})]},r))}),(0,a.jsx)("div",{className:"faq-col",children:w.slice(3,6).map((t,r)=>(0,a.jsxs)("div",{className:"faq-item",children:[(0,a.jsxs)("div",{className:"faq-question",onClick:()=>i(r+3),children:[(0,a.jsx)("span",{children:t.q}),(0,a.jsx)("span",{className:"icon",children:e===r+3?"\u2212":"+"})]}),e===r+3&&(0,a.jsx)("div",{className:"faq-answer",children:t.a})]},r+3))})]})]})]})}function v(){return(0,a.jsxs)(o.A,{title:"Digital Marketing Services in India | PCS Business Solution",description:"Result-driven digital marketing services including SEO, social media marketing, PPC, content marketing, and email marketing to grow your business online.",children:[(0,a.jsx)(c,{}),(0,a.jsx)(d,{}),(0,a.jsx)(p,{}),(0,a.jsx)(m,{}),(0,a.jsx)(g,{}),(0,a.jsx)(x,{}),(0,a.jsx)(b,{}),(0,a.jsx)(y,{}),(0,a.jsx)(n.A,{})]})}}}]);