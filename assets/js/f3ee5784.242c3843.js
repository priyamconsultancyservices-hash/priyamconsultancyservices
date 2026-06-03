"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["1913"],{9393(e,t,r){r.d(t,{A:()=>a});var i=r(4848),n=r(6540);let a=function(){let e=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let t=e.current;if(!t)return;let r=t.getContext("2d"),i="#ed8337",n,a,s=[],o;function l(){n=t.width=t.parentElement.offsetWidth,a=t.height=t.parentElement.offsetHeight}function c(){this.reset()}c.prototype.reset=function(){this.x=Math.random()*n,this.y=Math.random()*a,this.r=2.2*Math.random()+.6,this.type=.55>Math.random()?"dot":.5>Math.random()?"ring":"plus",this.speed=.35*Math.random()+.08,this.dir=Math.random()*Math.PI*2,this.alpha=.45*Math.random()+.1,this.pulse=Math.random()*Math.PI*2,this.pulseSpeed=.018*Math.random()+.008,this.size=4*Math.random()+2},c.prototype.update=function(){this.x+=Math.cos(this.dir)*this.speed,this.y+=Math.sin(this.dir)*this.speed,this.pulse+=this.pulseSpeed,this.dir+=(Math.random()-.5)*.015,this.x<-20&&(this.x=n+20),this.x>n+20&&(this.x=-20),this.y<-20&&(this.y=a+20),this.y>a+20&&(this.y=-20)},c.prototype.draw=function(){let e=this.alpha*(.7+.3*Math.sin(this.pulse));if(r.save(),r.globalAlpha=e,r.strokeStyle=r.fillStyle=i,r.lineWidth=1,"dot"===this.type)r.beginPath(),r.arc(this.x,this.y,this.r+.4*Math.sin(this.pulse),0,2*Math.PI),r.fill();else if("ring"===this.type){let e=this.size*(.9+.15*Math.sin(this.pulse));r.beginPath(),r.arc(this.x,this.y,e,0,2*Math.PI),r.stroke()}else{let e=this.size*(.9+.1*Math.sin(this.pulse));r.beginPath(),r.moveTo(this.x-e,this.y),r.lineTo(this.x+e,this.y),r.moveTo(this.x,this.y-e),r.lineTo(this.x,this.y+e),r.stroke()}r.restore()},window.addEventListener("resize",l),l(),s=[];let d=Math.floor(n*a/9e3);for(let e=0;e<Math.max(d,28);e++)s.push(new c);return!function e(){r.clearRect(0,0,n,a),function(){let e=s.filter(e=>"dot"===e.type);for(let t=0;t<e.length;t++)for(let n=t+1;n<e.length;n++){let a=e[t].x-e[n].x,s=e[t].y-e[n].y,o=Math.sqrt(a*a+s*s);o<110&&(r.save(),r.globalAlpha=(1-o/110)*.12,r.strokeStyle=i,r.lineWidth=.7,r.beginPath(),r.moveTo(e[t].x,e[t].y),r.lineTo(e[n].x,e[n].y),r.stroke(),r.restore())}}(),s.forEach(e=>{e.update(),e.draw()}),o=requestAnimationFrame(e)}(),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",l)}},[]),(0,i.jsx)("section",{id:"cta-final",children:(0,i.jsxs)("div",{className:"cta-banner",style:{"--glow-x":"50%","--glow-y":"50%"},children:[(0,i.jsx)("canvas",{id:"ctaCanvas",ref:e}),(0,i.jsxs)("div",{className:"cta-banner-left",children:[(0,i.jsx)("div",{className:"partners-header",children:(0,i.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Ready to Start?"})}),(0,i.jsxs)("h2",{className:"cta-banner-heading",children:["Let's Talk About Your",(0,i.jsx)("br",{}),"Next Big ",(0,i.jsx)("span",{className:"hl-italic",children:"Growth Move"})]}),(0,i.jsx)("p",{className:"cta-banner-sub",children:"No pressure. Just a quick conversation to understand where you are-and how we can help you move forward."})]}),(0,i.jsxs)("div",{className:"cta-banner-right",children:[(0,i.jsxs)("a",{href:"#",className:"cta-bprimary",children:["Book a Free Consultation",(0,i.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",children:(0,i.jsx)("path",{d:"M3 8h10M9 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,i.jsx)("a",{href:"#",className:"cta-bghost",children:"View All Services"})]})]})})}},1055(e,t,r){r.r(t),r.d(t,{default:()=>w});var i=r(4848),n=r(6540),a=r(8128),s=r(9393),o=r(1085),l=r(3572);function c(){return(0,i.jsxs)(l.A,{children:[(0,i.jsx)("title",{children:"Best HR Services in Coimbatore | HR consultancy in coimbatore "}),(0,i.jsx)("meta",{name:"description",content:"Best HR services in Coimbatore offering end-to-end HR solutions including recruitment, payroll, compliance, and training. Grow your team with expert HR support. "}),(0,i.jsx)("meta",{name:"keywords",content:"HR Services, HR Services in Coimbatore, HR Solutions, HR Solutions in Coimbatore, HR consultancy in coimbatore, HR Consultant in Coimbatore, HR Support Services in Coimbatore, HR Consultancy Services in Coimbatore, Human Resource Consultants in Coimbatore, HR Service Provider in Coimbatore, Human Resource Services in Coimbatore, Human Resource Management Services in Coimbatore, Payroll Management, Recruitment Services, HR Strategy, HR Policy Development"}),(0,i.jsx)("link",{rel:"canonical",href:"https://www.priyamconsultancy.com/hr-services"}),(0,i.jsx)("meta",{property:"og:title",content:"Best HR Services in Coimbatore | HR consultancy in coimbatore "}),(0,i.jsx)("meta",{property:"og:description",content:"Best HR services in Coimbatore offering end-to-end HR solutions including recruitment, payroll, compliance, and training. Grow your team with expert HR support. "}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:url",content:"https://www.priyamconsultancy.com/hr-services"}),(0,i.jsx)("meta",{property:"og:image",content:"https://www.priyamconsultancy.com/img/hr-services.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:title",content:"Best HR Services in Coimbatore | HR consultancy in coimbatore "}),(0,i.jsx)("meta",{name:"twitter:description",content:"Best HR services in Coimbatore offering end-to-end HR solutions including recruitment, payroll, compliance, and training. Grow your team with expert HR support. "}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://www.priyamconsultancy.com/img/hr-services.png"}),(0,i.jsx)("script",{type:"application/ld+json",children:JSON.stringify([{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":"https://www.priyamconsultancy.com/",name:"Home"}},{"@type":"ListItem",position:2,item:{"@id":"https://www.priyamconsultancy.com/hr-services/",name:"hr-services"}}]},{"@context":"https://schema.org","@type":"Organization",name:"Priyam Consultancy Services",url:"https://www.priyamconsultancy.com/",logo:"https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png",contactPoint:[{"@type":"ContactPoint",telephone:"+91 96774 44048",contactType:"customer support"}],sameAs:["https://www.facebook.com/profile.php?id=61577125709962","https://www.linkedin.com/company/priyam-consultancy-services/","https://www.instagram.com/priyam_consultancy_services/","https://x.com/services91032","https://g.co/kgs/rdTYdi6"]},{"@context":"https://schema.org","@type":"Service","@id":"https://www.priyamconsultancy.com/hr-services/#service",name:"HR Services",serviceType:"Human Resource Management Services",url:"https://www.priyamconsultancy.com/hr-services/",description:"Priyam Consultancy provides professional HR services including payroll management, recruitment services, HR strategy, policy development, talent acquisition, compliance management and workforce solutions for businesses across India.",provider:{"@type":"Organization",name:"Priyam Consultancy Services",url:"https://www.priyamconsultancy.com/",logo:{"@type":"ImageObject",url:"https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png"}},areaServed:{"@type":"Country",name:"India"}},{"@context":"https://schema.org/","@type":"Product",name:"HR Services in Coimbatore | HR consultancy in coimbatore",image:["https://www.priyamconsultancy.com/img/hr-services.png"],description:"Best HR services in Coimbatore offering end-to-end HR solutions including recruitment, payroll, compliance, and training. Grow your team with expert HR support.",brand:{"@type":"Brand",name:"Priyam Consultancy Services"},review:{"@type":"Review",reviewRating:{"@type":"Rating",ratingValue:"4.9",bestRating:"5",worstRating:"1"},author:{"@type":"Person",name:"Admin"}},aggregateRating:{"@type":"AggregateRating",ratingValue:"4.9",reviewCount:"4521"},offers:{"@type":"Offer",url:"https://www.priyamconsultancy.com/hr-services/",priceCurrency:"USD",price:"00.00",priceValidUntil:"2026-12-31",itemCondition:"https://schema.org/UsedCondition",availability:"https://schema.org/InStock",seller:{"@type":"Organization",name:"priyamconsultancy.com"}}},{"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"What Makes Your Payroll Management Different From Others?",acceptedAnswer:{"@type":"Answer",text:"We don't just process numbers\u2014we ensure accuracy, compliance, and confidentiality at every step. From salary disbursals and tax filings to statutory compliance (PF, ESI, TDS), we handle it all with tech-enabled precision and end-to-end transparency."}},{"@type":"Question",name:"Can You Help Us Hire For Niche Or Leadership Roles?",acceptedAnswer:{"@type":"Answer",text:"Absolutely. Our recruitment services cover everything from entry-level to CXO positions. We focus on culture-fit and long-term alignment, using a consultative approach to find the right talent\u2014not just fill the vacancy."}},{"@type":"Question",name:"Do You Offer HR Strategy Support For Startups Or Small Teams?",acceptedAnswer:{"@type":"Answer",text:"Yes. Whether you're hiring your first employee or scaling rapidly, we help set up HR foundations like org structure, role mapping, goal-setting frameworks, and people policies that grow with your business."}},{"@type":"Question",name:"How Do You Ensure Our HR Policies Are Compliant?",acceptedAnswer:{"@type":"Answer",text:"Our policy management services are crafted by HR and legal experts to ensure they meet local labor laws, industry standards, and your internal values. We customize every policy to be legally sound yet people-friendly."}},{"@type":"Question",name:"Can We Outsource Only A Few HR Functions Instead Of The Full Setup?",acceptedAnswer:{"@type":"Answer",text:"Definitely. Our services are modular\u2014you can pick and choose what you need. Whether it's just payroll, recruitment, or policy support, we'll step in where you need us most."}},{"@type":"Question",name:"How Long Does It Take To Get Started With Your Services?",acceptedAnswer:{"@type":"Answer",text:"Depending on the scope, onboarding typically takes 1\u20133 weeks. For payroll, we can go live within a month. For recruitment or strategy services, timelines vary based on the complexity and goals."}}]}])})]})}let d=`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

:root {
  --hr-orange: #FF6B2B;
  --hr-orange-light: #FF8F5E;
  --hr-blue: #1A56DB;
  --hr-green: #059669;
  --hr-dark: #0D1117;
  --hr-gray: #6B7280;
  --hr-light: #F9FAFB;
  --hr-white: #FFFFFF;
  --font: "Poppins", sans-serif;

  /* HTML file color vars */
  --navy:        #004168;
  --navy-deep:   #002a44;
  --navy-mid:    #0a5282;
  --orange:      #ed8337;
  --orange-light:#f5a66b;
}
.container {
width: 100%; 
}
* { box-sizing: border-box; margin: 0; padding: 0; }
.hr-page { font-family: var(--font); overflow-x: hidden; background: var(--hr-white); }

/* \u{2500}\u{2500}\u{2500} BUTTONS \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500} */
.btn { font-family: var(--font); font-weight: 600; font-size: 0.88rem; border: none; cursor: pointer; border-radius: 10px; padding: 13px 28px; transition: all 0.25s ease; }
.btn-orange { background: var(--hr-orange); color: #fff; box-shadow: 0 4px 18px rgba(255,107,43,0.35); }
.btn-orange:hover { background: var(--hr-orange-light); transform: translateY(-2px); box-shadow: 0 8px 26px rgba(255,107,43,0.45); }
.btn-ghost { background: rgba(255,255,255,0.1); color: #fff; border: 1.5px solid rgba(255,255,255,0.3); backdrop-filter: blur(8px); }
.btn-ghost:hover { background: rgba(255,255,255,0.18); }
.btn-outline { background: transparent; color: var(--hr-orange); border: 2px solid var(--hr-orange); }
.btn-outline:hover { background: var(--hr-orange); color: #fff; }
.btn-lg { padding: 15px 36px; font-size: 0.95rem; }

section.hr-services {
    padding: 5rem;
    background: #004168;
}
/* \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
   1. HERO \u{2014} animated SVG illustration
\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550} */
.hero {
  min-height: 100vh;
  display: grid; grid-template-columns: 1fr 1fr;
  align-items: center; gap: 2rem;
  padding: 0rem 6% 4rem;
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
  font-size: clamp(2rem, 3.6vw, 3.3rem);
  font-weight: 600; line-height: 1.15;
  text-align: start;
  color:#fff;
  margin-top: 1.4rem; animation: fadeUp 0.7s 0.08s ease both;
}
.hero-heading .hl { color: var(--orange); }
.hero-heading .lined { position: relative; display: inline-block; }
.hero-heading .lined::after {
  content: ''; position: absolute; left: 0; bottom: -3px;
  width: 100%; height: 3px; background: var(--orange); border-radius: 2px;
  transform: scaleX(0); transform-origin: left;
  animation: line-in 0.5s 0.9s ease forwards;
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
  text-decoration: none; border: none; cursor: pointer;
  box-shadow: 0 4px 22px rgba(237,131,55,0.32);
  display: inline-flex; align-items: center; gap: 0.5rem;
  transition: background 0.22s, transform 0.18s, box-shadow 0.22s;
}
.btn-fill:hover {  transform: translateY(-2px); box-shadow: 0 8px 30px rgba(237,131,55,0.42); }
.btn-arrow {
  display: inline-flex; align-items: center; justify-content: center;
  width: 22px; height: 22px; border-radius: 50%;
  background: rgba(2,43,68,0.3); font-size: 0.85rem;
}
@keyframes fadeUp { from{ opacity:0; transform:translateY(26px); } to{ opacity:1; transform:translateY(0); } }

.hero-right {
  position: relative; z-index: 2;
  display: flex; align-items: center; justify-content: center;
  animation: fadeUp 0.9s 0.15s ease both;
}
50%    { transform: translate(-50%,-50%) scale(1.18); opacity: 1; }
}
}
30%{ transform:translateY(-18px); }
  50%{ transform:translateY(-8px); } 70%{ transform:translateY(-20px); } 85%{ transform:translateY(-5px); }
}
30%{ transform:scaleX(0.55);opacity:0.2; }
  50%{ transform:scaleX(0.75);opacity:0.3; } 70%{ transform:scaleX(0.5);opacity:0.18; } 85%{ transform:scaleX(0.85);opacity:0.35; }
}
40%{ transform:scale(1.08) rotate(-2deg); } 70%{ transform:scale(0.96) rotate(-5deg); }
}
25%{ transform:translateY(-22px) scale(1.15) rotate(8deg); }
  50%{ transform:translateY(-10px) scale(1.05) rotate(14deg); } 75%{ transform:translateY(-26px) scale(1.18) rotate(10deg); }
  90%{ transform:translateY(-4px) scale(1.02) rotate(12deg); }
}
35%{ transform:translateY(-16px) scale(1.1) rotate(4deg); }
  60%{ transform:translateY(-6px) scale(1.04) rotate(7deg); } 80%{ transform:translateY(-20px) scale(1.12) rotate(5deg); }
}
30%{ transform:scale(1.12) translateY(-12px); }
  60%{ transform:scale(0.94) translateY(5px); } 80%{ transform:scale(1.08) translateY(-8px); }
}
20%{ transform:translateY(-24px) scale(1.2) rotateY(180deg); }
  45%{ transform:translateY(-12px) scale(1.08) rotateY(280deg); } 65%{ transform:translateY(-28px) scale(1.22) rotateY(360deg); }
  85%{ transform:translateY(-6px) scale(1.05) rotateY(420deg); }
}
50%{ transform:scale(1.3) rotate(30deg); opacity:1; }
}
50%{ transform:translateX(8px); } }
50%{ transform:translateY(-30px) scale(1.2); opacity:0.3; }
  100%{ transform:translateY(-60px) scale(0.8); opacity:0; }
}
          h3.faq-h3 {
    color: black;
    font-size: 2.5rem!important;
    font-weight: 600;
}
/* \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}
   SERVICES \u{2014} Tab + Content Layout
   \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500} */
.hr-services {
  padding: 100px 80px;
  background: #004168;
}
.hr-services__inner {
  display: grid; grid-template-columns: 400px 1fr;
  gap: 32px; align-items: start; margin-top: 63px;
}

/* LEFT \u{2014} Tab List */
.hr-services__tabs {
  display: flex; flex-direction: column; gap: 0;
  border-radius: 16px; overflow: hidden;
  border: 1px solid rgba(237,131,55,0.2);
}
.hr-tab-item {
  display: flex; align-items: center; gap: 14px;
  padding: 18px 20px;
  cursor: pointer;
  background: rgba(255,255,255,0.03);
  border-bottom: 1px solid rgba(237,131,55,0.12);
  transition: all 0.25s ease;
  position: relative;
  flex: 1;
}
.hr-tab-item:last-child { border-bottom: none; }
.hr-tab-item:hover { background: rgba(237,131,55,0.08); }
.hr-tab-item.active {
  background: rgba(237,131,55,0.13);
  border-left: 3px solid #ed8337;
  box-shadow: inset 0 0 20px rgba(237,131,55,0.06), 0 0 12px rgba(237,131,55,0.08);
}
.hr-tab-item.active::after {
  content: '';
  position: absolute; right: -1px; top: 50%; transform: translateY(-50%);
  width: 0; height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #ed8337;
  opacity: 0.7;
}
.hr-tab-icon {
  font-size: 1.5rem; flex-shrink: 0;
  filter: brightness(0) invert(1) opacity(0.6);
  transition: filter 0.25s;
}
.hr-tab-item.active .hr-tab-icon { filter: brightness(0) invert(1) opacity(1); }
.hr-tab-label {
  font-size: 0.92rem; font-weight: 600;
  color: rgba(255,255,255,0.6);
  transition: color 0.25s;
  line-height: 1.3;
}
.hr-tab-item.active .hr-tab-label { color: #fff; }

/* RIGHT \u{2014} Content Box */
.hr-services__content {
  background: #fff; border-radius: 20px; padding: 28px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.12);
  border-top: 4px solid #ed8337;
  transition: border-color 0.3s ease;
  min-height: 100%;
}
.hr-content-header {
  display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
}
.hr-content-icon { font-size: 2rem; line-height: 1; flex-shrink: 0; }
.hr-content-title { font-size: 1.2rem; font-weight: 700; color: var(--hr-dark); }
.hr-services__preview-desc { font-size: 0.88rem; color: var(--hr-gray); line-height: 1.75; margin-bottom: 20px; }
.hr-services__bullets { list-style: none; display: flex; flex-direction: column; gap: 9px; }
.hr-services__bullet {
  display: flex; align-items: center; gap: 10px;
  font-size: 0.85rem; font-weight: 500; color: var(--hr-dark);
}
.hr-services__bullet::before {
  content: "\u{2713}"; width: 22px; height: 22px; border-radius: 50%;
  background: #ed8337;
  color: #fff; font-size: 0.7rem; font-weight: 800;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}

/* Content explore button */
.hr-content-btn {
  margin-top: 20px;
  display: inline-block;
  padding: 10px 22px; border-radius: 8px;
  font-size: 0.88rem; font-weight: 600; border: none; cursor: pointer;
  color: #fff; transition: all 0.2s ease;
}

/* \u{2500}\u{2500} ACCORDION (hidden on desktop) \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500} */
.hr-accordion-item { display: contents; }
.hr-accordion-content { display: none; }
.hr-tab-arrow { display: none; }

/* \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}
   BENEFITS \u{2014} Bento Grid (no-box style)
   \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500} */
.tl-section {
  position: relative; padding: 6rem 4%;
  background: #ffffff; overflow: hidden;
}
.tl-inner { position: relative; z-index: 2;  margin: 0 auto; }

.tl-header { text-align: center; margin-bottom: 4rem; }
.tl-heading {
  font-family: var(--font); font-size: clamp(1.7rem, 2.8vw, 2.4rem);
  font-weight: 700; line-height: 1.15; 
  color: #000; margin-bottom: .85rem;
}
.tl-heading span { color: var(--hr-orange); }
.tl-subtext { font-size: .96rem; line-height: 1.7; color: #000; margin: 0 auto; }

.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
}

.bn-cell {
  position: relative;
  padding: 2.4rem 2.2rem;
  display: flex; flex-direction: column; gap: .7rem;
  background: transparent;
  opacity: 1;
  transition: background 0.3s ease;
}

.bn-cell-1, .bn-cell-2, .bn-cell-3 { border-top: 1.5px solid rgba(0,65,104,0.08); }
.bn-cell-2, .bn-cell-5 { border-left: 1.5px solid rgba(0,65,104,0.08); border-right: 1.5px solid rgba(0,65,104,0.08); }
.bn-cell-4, .bn-cell-5, .bn-cell-6 { border-top: 1.5px solid rgba(0,65,104,0.08); }

.bn-cell::before {
  content: ''; position: absolute; left: 0; top: 2.4rem; bottom: 2.4rem;
  width: 3px; border-radius: 2px;
  background: #ed8337;
  transform: scaleY(0); transform-origin: top;
  transition: transform 0.3s ease;
}
.bn-cell:hover::before { transform: scaleY(1); }
.bn-cell:hover { background: rgba(237,131,55,0.025); }

.bn-cell .bn-icon {
  width: 44px; height: 44px; border-radius: 12px;
  background: rgba(237,131,55,0.1);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; margin-bottom: .2rem;
  transition: background 0.28s;
}
.bn-cell:hover .bn-icon { background: rgba(237,131,55,0.2); }
.bn-cell .bn-icon svg { width: 22px; height: 22px; stroke: var(--hr-orange); fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }

.bn-cell .bn-num {
  font-size: .62rem; font-weight: 700; letter-spacing: .1em;
  color: var(--hr-orange); text-transform: uppercase;
}
.bn-cell .bn-title {
  font-family: var(--font); font-size: 1.05rem; font-weight: 600;
  color: #000; line-height: 1.3;
}
.bn-cell .bn-desc {
  font-size: .875rem; line-height: 1.78; color: #000;font-family: var(--font);
}
.bn-cell .bn-link {
  display: inline-flex; align-items: center; gap: .3rem;
  font-size: .8rem; font-weight: 700; color: var(--hr-orange);
  text-decoration: none; margin-top: .3rem;
  opacity: 0; transform: translateX(-6px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.bn-cell:hover .bn-link { opacity: 1; transform: translateX(0); }

/* \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}
   PROCESS \u{2014} Circular Infographic
   \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500} */
.pr-section {
  position: relative;
  padding: 6rem 6% 7rem;
  background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 55%, var(--navy-mid) 100%);
  overflow: hidden;
}
.pr-section::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(237,131,55,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(237,131,55,0.03) 1px, transparent 1px);
  background-size: 56px 56px;
}
.pr-inner { position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; }

.pr-header { margin-bottom: 3.5rem; text-align: center; }
.pr-heading {
  font-family: var(--font);
  font-size: clamp(1.7rem, 2.8vw, 2.4rem);
  font-weight: 700; line-height: 1.15; 
  color: #fff; margin-bottom: 1rem;
}
.pr-subtext {
  font-size: .92rem; line-height: 1.78; color: rgb(255, 255, 255);
   margin: 0 auto; text-align: center;
}

.circ-layout {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 340px 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0;
  align-items: center;
  min-height: 540px;
}

.circ-center {
  grid-column: 2; grid-row: 1 / 3;
  position: relative;
  display: flex; align-items: center; justify-content: center;
  z-index: 5;
}
.circ-svg-wrap {
  position: relative; width: 300px; height: 300px;
}
.circ-svg-wrap svg {
  width: 300px; height: 300px;
  animation: circ-spin 18s linear infinite;
}
@keyframes circ-spin { to { transform: rotate(360deg); } }

.circ-core {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  text-align: center; z-index: 6; pointer-events: none;
}
.circ-core-title {
  font-family: var(--font); font-size: 1.2rem; font-weight: 600;
  color: #fff; line-height: 1.2; 
}
.circ-core-sub {
  font-size: .55rem; color: var(--hr-orange); letter-spacing: .1em;
  text-transform: uppercase; margin-top: .3rem;
}

.circ-left-top    { grid-column: 1; grid-row: 1; padding-right: 2.5rem; text-align: right; }
.circ-left-bottom { grid-column: 1; grid-row: 2; padding-right: 2.5rem; text-align: right; }
.circ-right-top   { grid-column: 3; grid-row: 1; padding-left: 2.5rem; text-align: left; }
.circ-right-bottom{ grid-column: 3; grid-row: 2; padding-left: 2.5rem; text-align: left; }

.circ-step {
  display: flex; flex-direction: column; gap: .55rem;
  padding: 1.4rem 0;
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.circ-left-top .circ-step,
.circ-left-bottom .circ-step { align-items: flex-end; }
.circ-right-top .circ-step,
.circ-right-bottom .circ-step { align-items: flex-start; }

.cs-icon-wrap {
  width: 52px; height: 52px; border-radius: 50%;
  background: linear-gradient(135deg, rgba(237,131,55,0.18), rgba(237,131,55,0.06));
  border: 1.5px solid rgba(237,131,55,0.35);
  display: flex; align-items: center; justify-content: center;
  transition: background 0.28s, border-color 0.28s, transform 0.28s;
}
.circ-step:hover .cs-icon-wrap {
  background: linear-gradient(135deg, rgba(237,131,55,0.32), rgba(237,131,55,0.12));
  border-color: var(--hr-orange);
  transform: scale(1.1);
}
.cs-icon-wrap svg { width: 24px; height: 24px; stroke: var(--hr-orange); fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }

.cs-title {
  font-family: var(--font); font-size: 1rem; font-weight: 600;
  color: #e28039; line-height: 1.3; letter-spacing: .01em;
}
.cs-desc {
  font-size: .9rem; line-height: 1.72;
  color: rgb(255, 255, 255); font-family: var(--font);
}
.circ-left-top .cs-desc,
.circ-left-bottom .cs-desc { margin-left: auto; }

/* \u{2500}\u{2500}\u{2500} FAQ \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500} */
.faq-section { padding: 5rem 6%; background: #fff; }
.faq-head { text-align: center; margin-bottom: 3rem; }
.faq-head h2 { font-family: var(--font); font-size: clamp(1.6rem, 2.8vw, 2.3rem); font-weight: 700; color: #0D1117; }
.faq-head h2 span { color: var(--hr-orange); }
.faq-wrapper { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; }
.faq-col { display: flex; flex-direction: column; gap: 1rem; }
.faq-item {  border-radius: 10px; overflow: hidden; background: #fff; }
.faq-question { display: flex; justify-content: space-between; align-items: center; padding: 18px 20px; cursor: pointer; font-family: var(--font); font-size: 0.95rem; font-weight: 600; color: #0D1117; gap: 1rem; }
.faq-question .icon { font-size: 1.2rem; color: var(--hr-orange); flex-shrink: 0; }
.faq-answer { padding: 0 20px 18px; font-size: 0.88rem; line-height: 1.75; color: #6B7280; font-family: var(--font); }
h3.faq-h3 {
    font-size: 2.5rem;
}
/* \u{2500}\u{2500}\u{2500} PARTNERS HEADER \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500} */
.partners-header1, .partners-header2 { }
.partners-eyebrow { font-family: var(--font); color: var(--orange); }

/* \u{2500}\u{2500}\u{2500} RESPONSIVE \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500} */
@media (max-width: 1024px) {
  .hr-services { padding: 80px 40px; }
  .hr-services__inner { grid-template-columns: 1fr; }
  .hr-services__left { position: static; }
  .bento-grid { grid-template-columns: 1fr 1fr; }
  .bn-cell-2, .bn-cell-5 { border-left: none; border-right: none; }
  .bn-cell-3, .bn-cell-6 { border-left: 1.5px solid rgba(0,65,104,0.08); }
  .circ-layout { display: flex !important; flex-direction: column; gap: 1rem; min-height: unset; }
  .circ-center { display: none; }
  .circ-left-top, .circ-right-top, .circ-left-bottom, .circ-right-bottom { padding: 0; }
  .circ-left-top .circ-step,
  .circ-left-bottom .circ-step { align-items: flex-start; text-align: left; }
  .circ-left-top .cs-desc, .circ-left-bottom .cs-desc { margin-left: 0; }
  .circ-step { padding: 1.2rem; border-bottom: none; }

  /* Hero */
  .hero { grid-template-columns: 1fr; padding: 5rem 6% 3rem; min-height: auto; }
  .hero-left { order: 1; text-align: left; align-items: flex-start;       padding: 3rem 1.0rem 0 1.0rem;
}
  .hero-right { order: 2; display: flex; justify-content: center; align-items: center; }
  .hero-right img { max-width: 70%; }
  .hero-heading { font-size: clamp(1.8rem, 4vw, 2.6rem); text-align: left; }
  .hero-sub { text-align: left; }
  .hero-actions { justify-content: flex-start; }
  .h-badge { align-self: flex-start; }

  /* Approach section */
  .ap-inner { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
  .ap-form-wrap { max-width: 100% !important; }

  /* FAQ */
  .faq-wrapper { grid-template-columns: 1fr !important; }

  /* Services section heading */
  h2.hr-h2 { font-size: 2rem; }
}

@media (max-width: 768px) {
  /* Hero */
  .hero { padding: 4.5rem 5% 3rem; }
  .hero-heading { font-size: clamp(1.6rem, 5vw, 2.2rem); }
  .hero-sub { font-size: 0.92rem; }
  .hero-actions { flex-direction: column; align-items: flex-start; }

  /* Approach form */
  .fl-row { grid-template-columns: 1fr !important; }
  .ap-form-card { padding: 2rem 1.4rem !important; }

  /* Services */
  .hr-services { padding: 60px 5%; }
  .hr-services__preview { padding: 24px; }

  /* Benefits */
  .tl-section { padding: 3.5rem 5%; }
  .bento-grid { grid-template-columns: 1fr; }
  .bn-cell-2,.bn-cell-3,.bn-cell-4,.bn-cell-5,.bn-cell-6 { border-left: none; border-right: none; }

  /* Process section */
  .pr-section { padding: 3.5rem 5% 4rem; }
  .circ-center { display: none; }
  .circ-layout { display: flex !important; flex-direction: column !important; gap: 1rem !important; min-height: unset !important; }
  .circ-left-top, .circ-right-top, .circ-left-bottom, .circ-right-bottom { padding: 0 !important; }
  .circ-left-top .circ-step, .circ-left-bottom .circ-step { align-items: flex-start !important; text-align: left !important; }
  .circ-left-top .cs-desc, .circ-left-bottom .cs-desc { margin-left: 0 !important; }
  .circ-step { padding: 1.1rem !important; border-bottom: none !important; }
  .pr-heading { font-size: 1.6rem !important; }

  /* FAQ */
  .faq-section { padding: 3rem 5% !important; }
  .faq-head h2 { font-size: 1.6rem !important; }

  /* Section headings */
  h2.hr-h2 { font-size: 1.7rem; }
  .tl-heading { font-size: 1.6rem !important; }
  .pr-heading { font-size: 1.6rem !important; }
}

@media (max-width: 640px) {
  .hr-services { padding: 60px 20px; }
  .tl-section { padding: 4rem 5%; }
  .bento-grid { grid-template-columns: 1fr; }
  .bn-cell-2,.bn-cell-3,.bn-cell-5,.bn-cell-6 { border-left: none; border-right: none; }
  .pr-section { padding: 4rem 5% 5rem; }
}

@media (max-width: 480px) {
  /* Hero */
  .hero { padding: 4rem 5% 2.5rem; gap: 1.5rem; }
  .hero-heading { font-size: clamp(1.4rem, 7vw, 1.8rem); text-align: left; }
  .h-badge { font-size: 0.62rem; padding: 0.3rem 0.8rem; }
  .hero-right img { max-width: 80%; }
  .btn-fill { width: 100%; justify-content: center; font-size: 0.85rem; padding: 0.75rem 1.2rem; }

  /* Approach */
  .approach { padding: 3rem 5% !important; }
  .ap-heading { font-size: 1.5rem !important; }
  .ap-intro { font-size: 0.88rem !important; }
  .ap-form-card { padding: 1.6rem 1.1rem !important; }
  .form-card-title { font-size: 1.3rem !important; }

  /* Services \u{2014} accordion mode */
  .hr-services { padding: 50px 16px; }
  .hr-services__inner { grid-template-columns: 1fr; gap: 0; }

  /* Hide desktop content panel */
  .hr-services__content--desktop { display: none !important; }

  /* Tabs become vertical accordion list */
  .hr-services__tabs {
    flex-direction: column;
    overflow-x: unset;
    border-radius: 12px;
    gap: 0;
  }
  .hr-accordion-item { display: block; }
  .hr-tab-item {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 16px 18px;
    text-align: left;
    min-width: unset;
    border-bottom: 1px solid rgba(237,131,55,0.15);
  }
  .hr-tab-item:last-child { border-bottom: none; }
  .hr-tab-item.active { border-left: 3px solid #ed8337; }
  .hr-tab-item.active::after { display: none; }
  .hr-tab-label { font-size: 0.9rem; flex: 1; }
  .hr-tab-arrow { display: inline-block; font-size: 0.65rem; color: #ed8337; flex-shrink: 0; }

  /* Accordion content panel */
  .hr-accordion-content { display: none; }
  .hr-accordion-content.hr-accordion-open {
    display: block;
    animation: accFadeIn 0.25s ease both;
  }
  @keyframes accFadeIn {
    from { opacity: 0; transform: translateY(-6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hr-accordion-content .hr-services__content {
    border-radius: 0 0 12px 12px;
    border-top: none;
    padding: 20px 16px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  }
  h2.hr-h2 { font-size: 1.45rem; }

  /* Benefits */
  .bn-cell { padding: 1.8rem 1.4rem; }
  .bn-title { font-size: 0.95rem; }
  .bn-desc { font-size: 0.82rem; }

  /* Process \u{2014} hide circle only, steps one by one */
  .circ-center { display: none; }
  .circ-layout { display: flex !important; flex-direction: column !important; gap: 0.8rem !important; min-height: unset !important; }
  .circ-left-top, .circ-right-top, .circ-left-bottom, .circ-right-bottom { padding: 0 !important; }
  .circ-step { padding: 1rem !important; border-bottom: none !important; align-items: flex-start !important; text-align: left !important; }
  .circ-left-top .circ-step, .circ-left-bottom .circ-step { align-items: flex-start !important; }
  .cs-title { font-size: 0.88rem; }
  .cs-desc { font-size: 0.8rem; }

  /* FAQ */
  .faq-head h2 { font-size: 1.3rem !important; }
  .faq-question { font-size: 0.88rem !important; padding: 14px 12px !important; }
  .faq-answer { font-size: 0.82rem !important; padding: 12px !important; }

  /* section.hr-services padding fix */
  section.hr-services { padding: 50px 16px !important; }
}
  h2.hr-h2 {
    letter-spacing: 0px;
    font-size: 2.7rem;
    margin-bottom: 1rem;
}
`,p=[{id:"01",icon:(0,i.jsx)("img",{src:"/img/icon/hr-services-payroll.webp",alt:"Payroll",style:{width:"28px",height:"28px"}}),color:"#FF6B2B",title:"Payroll Management",tagline:"Accurate. Timely. Compliant.",desc:"Timely, accurate, and fully compliant, we simplify your payroll process to ensure you never miss a payout or fall short on regulations. From salary structuring to tax filings and benefits administration, we handle all the backend complexities, so you can focus on what matters most: your team and growing your business.",bullets:["Payroll Processing and Accurate Calculations","Tax Deductions and Withholdings","Statutory Compliance and Filings"]},{id:"02",icon:(0,i.jsx)("img",{src:"/img/icon/hr-services-recruitment.webp",alt:"Recruitment",style:{width:"30px",height:"30px"}}),color:"#1A56DB",title:"Recruitment Services",tagline:"Right People. Right Roles. Right Now.",desc:"We go beyond resumes to find people who belong. Our recruitment services attract top talent that not only fits role but also fits your role, culture, and growth goals. Whether you\u2019re hiring a single position or scaling your team, we ensure a seamless process that meets your vision.",bullets:["Job Analysis & Positioning","Candidate Sourcing, Screening & Shortlisting","Interviewing & Selection Support"]},{id:"03",icon:(0,i.jsx)("img",{src:"/img/icon/hr-services-policy.webp",alt:"HR Policy",style:{width:"30px",height:"30px"}}),color:"#FF6B2B",title:"HR Strategy & Policy Development",tagline:"Build Culture. Drive Performance.",desc:"We align your HR strategy with your business vision by crafting clear, custom policies and tailored frameworks that drive performance, engagement, and scalability from startup to enterprise while ensuring compliance without adding unnecessary friction to your daily operations.",bullets:["HR Handbook or Policies and Procedures Development","Organizational Design & Restructuring","HR Audits & Compliance Checks"]}],m=[{num:"01",title:"Customized HR Solutions",desc:"We understand that each business is unique, so we provide personalized HR strategies and policies that align with your company\u2019s specific needs, values, and goals.",icon:(0,i.jsx)("img",{src:"/img/icon/hr-services-solution.webp",alt:"Customized HR Solutions",style:{width:"31px",height:"31px"}})},{num:"02",title:"Talent Acquisition Excellence",desc:"Our recruitment services are designed to attract and hire top talent that not only meets the job requirements but also fits seamlessly with your company culture and long-term objectives.",icon:(0,i.jsx)("img",{src:"/img/icon/hr-services-talent.webp",alt:"Talent Acquisition",style:{width:"31px",height:"31px"}})},{num:"03",title:"Compliance & Risk Management",desc:"Our expert team ensures that your business is fully compliant with local, state, and federal laws, minimizing risks associated with costly legal non-compliance.",icon:(0,i.jsx)("img",{src:"/img/icon/hr-services-compliance.webp",alt:"Compliance",style:{width:"31px",height:"31px"}})},{num:"04",title:"Streamlined Payroll Services",desc:"At Priyam Consultancy Services HR services we offer end-to-end payroll services that ensure tax compliance, deductions, and timely payments, freeing you from the administrative burden and reducing errors.",icon:(0,i.jsx)("img",{src:"/img/icon/hr-services-streamlined-payroll.webp",alt:"Payroll Services",style:{width:"31px",height:"31px"}})},{num:"05",title:"Scalable HR Solutions",desc:"As your business grows, so do your HR needs. We provide scalable HR solutions that evolve with your company, from managing a small team to supporting a large, complex organization.",icon:(0,i.jsx)("img",{src:"/img/icon/hr-services-scalable-solution.webp",alt:"Scalable HR",style:{width:"31px",height:"31px"}})},{num:"06",title:"Cost-Effective HR Support",desc:"We provide comprehensive HR services that maximize your return on investment by reducing overhead costs while delivering exceptional support tailored to your business needs.",icon:(0,i.jsx)("img",{src:"/img/icon/hr-services-cost-effective.webp",alt:"Cost-Effective",style:{width:"31px",height:"31px"}})}],h={leftTop:{title:"Deeper Understanding",desc:"We analyze your business goals, workforce structure, and operational challenges to build HR solutions that align with your organizational needs and long-term growth plans.",icon:(0,i.jsx)("img",{src:"/img/icon/hr-services-process-understand.webp",alt:"Deeper Understanding",style:{width:"30px",height:"30px"}})},rightTop:{title:"Strategy & Planning",desc:"Our team develops customized HR strategies focused on workforce efficiency, compliance, employee management, and sustainable business growth through structured planning and execution.",icon:(0,i.jsx)("img",{src:"/img/icon/hr-services-process-strategy.webp",alt:"Strategy & Planning",style:{width:"30px",height:"30px"}})},rightBottom:{title:"Execution & Monitoring",desc:"We ensure smooth implementation of HR processes with continuous monitoring, performance tracking, and proactive support to maintain efficiency, compliance, and consistent progress.",icon:(0,i.jsx)("img",{src:"/img/icon/hr-services-process-execution.webp",alt:"Execution & Monitoring",style:{width:"30px",height:"30px"}})},leftBottom:{title:"Feedback & Analytics Reports",desc:"We provide detailed HR reports and workforce insights that help businesses track performance, improve decision-making, and optimize overall operational effectiveness.",icon:(0,i.jsx)("img",{src:"/img/icon/hr-services-process-feedback.webp",alt:"Feedback & Analytics",style:{width:"30px",height:"30px"}})}};function g(){return(0,i.jsxs)("section",{className:"hero",id:"hero",children:[(0,i.jsxs)("div",{className:"hero-left",children:[(0,i.jsxs)("div",{className:"h-badge",children:[(0,i.jsx)("div",{className:"badge-dot"}),"Human Resource"]}),(0,i.jsxs)("h1",{className:"hero-heading",children:["HR Consultancy Services that ",(0,i.jsx)("span",{className:"hl lined",children:"Builds Strong "}),"Teams"]}),(0,i.jsxs)("ul",{className:"hero-sub",children:[(0,i.jsx)("li",{children:"We find candidates who match your company\u2019s values and drive success."}),(0,i.jsx)("li",{children:"We create custom HR solutions that ensure clarity, compliance, and growth."}),(0,i.jsx)("li",{children:"We handle accurate payroll to ensure compliance and reduce administrative."}),(0,i.jsx)("li",{children:"We manage HR so you can focus on growing your business-hassle-free."})]}),(0,i.jsx)("div",{className:"hero-actions",children:(0,i.jsxs)("a",{className:"btn-fill",href:"#approach",children:["Explore More ",(0,i.jsx)("span",{className:"btn-arrow",children:"\u203A"})]})})]}),(0,i.jsx)("div",{className:"hero-right",children:(0,i.jsx)("img",{src:"/img/hr-services.png",alt:"Banner",style:{width:"100%",height:"auto",objectFit:"contain",position:"relative",zIndex:5,animation:"fadeUp .9s .15s ease both"}})})]})}function f(){let[e,t]=(0,n.useState)({name:"",email:"",phone:"",company:"",msg:""}),r=r=>{t({...e,[r.target.name]:r.target.value})};return(0,i.jsxs)("section",{className:"approach",id:"approach",children:[(0,i.jsx)("style",{children:`
        .approach { position:relative; padding:4rem 6%; overflow:hidden;background: white }
        .ap-inner { position:relative; z-index:2; margin:0 auto; display:grid; grid-template-columns:1fr 0.7fr; gap:4rem; align-items:center; }
        @media (max-width:1024px) { .ap-inner { grid-template-columns:1fr; gap:2.5rem; } .ap-form-wrap { max-width:100%; } }
        @media (max-width:768px) { .fl-row { grid-template-columns:1fr; } .ap-form-card { padding:2rem 1.4rem; } }
        @media (max-width:480px) { .approach { padding:3rem 5%; } .ap-form-card { padding:1.6rem 1.1rem; } }
        .ap-heading { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3vw,2.6rem); line-height:1.12; color:#000; margin-bottom:1.2rem; }
        .ap-heading span { color:var(--orange); }
        .ap-intro { font-size:1rem; line-height:1.8; color:#5a6a7a; margin-bottom:2rem; }
        .ap-form-wrap { position:relative; max-width:450px; }
        .ap-form-wrap::before { content:''; position:absolute; inset:-2px; background:linear-gradient(135deg,rgba(237,131,55,0.55),rgba(237,131,55,0.1),rgba(237,131,55,0.55)); border-radius:26px; z-index:0; }
        .ap-form-card { position:relative; z-index:1; background:#004168; border-radius:24px; padding:2.8rem 2.6rem; box-shadow:0 24px 60px rgba(0,0,0,0.5),0 0 40px rgba(237,131,55,0.06); border:1px solid rgba(237,131,55,0.18); text-align:center; }
        .form-card-eyebrow { display:inline-flex; align-items:center; gap:8px; font-family:'Poppins',sans-serif; font-size:0.6rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:var(--orange); margin-bottom:0.8rem; }
        .form-card-eyebrow-line { width:22px; height:1px; background:var(--orange); }
        .form-card-title { font-family:'Poppins',sans-serif; font-size:1.7rem; font-weight:800; color:#fff; line-height:1.15; margin-bottom:2.4rem; }
        .form-card-title span { color:var(--orange); }
        .fl-row { display:grid; grid-template-columns:1fr 1fr; gap:0.85rem; }
        .fl-group { position:relative; margin-bottom:1rem; }
        .fl-label { display:block; font-family:'Poppins',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--orange); margin-bottom:0.4rem; text-align:start; }
        .fl-input,.fl-textarea { width:100%; padding:0.82rem 1rem; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; font-family:'Poppins',sans-serif; font-size:0.88rem; color:#fff; background:rgba(255,255,255,0.04); outline:none; appearance:none; transition:border-color 0.22s,background 0.22s,box-shadow 0.22s; }
        .fl-input::placeholder,.fl-textarea::placeholder { color:rgba(255,255,255,0.3); }
        .fl-input:focus,.fl-textarea:focus { border-color:var(--orange); background:rgba(237,131,55,0.06); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .fl-icon { position:absolute; left:0.85rem; top:50%; transform:translateY(-50%); font-size:0.95rem; opacity:0.5; pointer-events:none; }
        .fl-group.textarea-group .fl-icon { top:0.9rem; transform:none; }
        .fl-textarea { min-height:88px; resize:none; padding-top:0.82rem; padding-left:1rem; }
        .phone-row { display:flex; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; overflow:hidden; background:rgba(255,255,255,0.04); transition:border-color 0.22s,box-shadow 0.22s; }
        .phone-row:focus-within { border-color:var(--orange); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .phone-flag { display:flex; align-items:center; gap:0.3rem; padding:0 0.85rem; font-size:0.82rem; font-weight:700; color:#fff; border-right:1.5px solid rgba(237,131,55,0.2); white-space:nowrap; background:rgba(237,131,55,0.08); cursor:default; flex-shrink:0; }
        .phone-flag-icon { font-size:0.9rem; opacity:0.7; }
        .phone-row .fl-input { border:none; border-radius:0; background:transparent; box-shadow:none; padding:0.82rem 1rem; }
        .phone-row .fl-input:focus { box-shadow:none; }
        .ap-submit { width:100%; background:linear-gradient(135deg,#ed8337,#f5a66b); color:#fff; border:none; padding:1rem 1.5rem; border-radius:12px; font-family:'Poppins',sans-serif; font-size:0.97rem; font-weight:500; cursor:pointer; letter-spacing:0.02em; display:flex; align-items:center; justify-content:center; gap:0.6rem; transition:transform 0.2s,box-shadow 0.2s; }
        .ap-submit:hover { transform:translateY(-2px); box-shadow:0 12px 36px rgba(237,131,55,0.5); }
        .ap-submit-arrow { display:inline-flex; align-items:center; justify-content:center; width:24px; height:24px; border-radius:50%; background:rgba(2,43,68,0.25); font-size:0.9rem; }
      h3.hr-h2 {
    font-size: 2.5rem;
}
      `}),(0,i.jsxs)("div",{className:"ap-inner",children:[(0,i.jsxs)("div",{className:"ap-left",children:[(0,i.jsx)("div",{className:"partners-header1",children:(0,i.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Approach in"})}),(0,i.jsxs)("h2",{className:"ap-heading",children:[" ",(0,i.jsx)("span",{children:"Human Resource "}),"Management"]}),(0,i.jsx)("p",{className:"ap-intro",children:"At PCS, we simplify complex HR challenges through structured and scalable solutions aligned with your business goals. Our approach improves operational clarity, workforce efficiency, and long-term organizational growth."}),(0,i.jsx)("p",{className:"ap-intro",children:"We support businesses across every HR stage, including compliance management, recruitment, policy development, and employee engagement. Our team works as an extended HR partner focused on stability and performance."}),(0,i.jsx)("p",{className:"ap-intro",children:"Our HR solutions are designed to reduce operational risk, strengthen workplace culture, and improve productivity. PCS helps businesses build strong people systems that support sustainable and scalable growth."})]}),(0,i.jsx)("div",{className:"ap-form-wrap",children:(0,i.jsxs)("div",{className:"ap-form-card",children:[(0,i.jsxs)("div",{className:"form-card-eyebrow",children:[(0,i.jsx)("span",{className:"form-card-eyebrow-line"}),"Your Growth, Our Mission",(0,i.jsx)("span",{className:"form-card-eyebrow-line"})]}),(0,i.jsxs)("div",{className:"form-card-title",children:["Get Your ",(0,i.jsx)("span",{children:"Free"})," Quote"]}),(0,i.jsxs)("form",{onSubmit:r=>{r.preventDefault();let i={name:e.name,email:e.email,phone:e.phone,company:e.company,message:e.msg,url:window.location.href};a.Ay.send("service_8xw6k3r","template_jarui36",i,"XWRnXi4hK2SvmRG3q").then(()=>{alert("Message Sent Successfully \u2705"),t({name:"",email:"",phone:"",company:"",msg:""})}).catch(e=>{console.log(e),alert("Failed to send \u274C")})},children:[(0,i.jsxs)("div",{className:"fl-row",children:[(0,i.jsxs)("div",{className:"fl-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Your Name"}),(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)("span",{className:"fl-icon",children:"\u{1F464}"}),(0,i.jsx)("input",{className:"fl-input",type:"text",name:"name",placeholder:"Full name",value:e.name,onChange:r,required:!0})]})]}),(0,i.jsxs)("div",{className:"fl-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Company"}),(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)("span",{className:"fl-icon",children:"\u{1F3E2}"}),(0,i.jsx)("input",{className:"fl-input",type:"text",name:"company",placeholder:"Company name",value:e.company,onChange:r})]})]})]}),(0,i.jsxs)("div",{className:"fl-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Email Address"}),(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)("span",{className:"fl-icon",children:"\u2709\uFE0F"}),(0,i.jsx)("input",{className:"fl-input",type:"email",name:"email",placeholder:"your@email.com",value:e.email,onChange:r,required:!0})]})]}),(0,i.jsxs)("div",{className:"fl-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Mobile Number"}),(0,i.jsxs)("div",{className:"phone-row",children:[(0,i.jsx)("div",{className:"phone-flag",children:(0,i.jsx)("span",{children:"\u{1F4DE}"})}),(0,i.jsx)("input",{className:"fl-input",type:"tel",name:"phone",placeholder:"Mobile number",value:e.phone,onChange:r,maxLength:"10",pattern:"[0-9]{10}",required:!0})]})]}),(0,i.jsxs)("div",{className:"fl-group textarea-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Message"}),(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)("span",{className:"fl-icon",style:{top:"0.9rem",transform:"none"},children:"\u{1F4AC}"}),(0,i.jsx)("textarea",{className:"fl-textarea",name:"msg",placeholder:"Tell us about your social media goals...",value:e.msg,onChange:r})]})]}),(0,i.jsxs)("button",{type:"submit",className:"ap-submit",children:["Get Free Consultation ",(0,i.jsx)("span",{className:"ap-submit-arrow",children:"\u203A"})]})]})]})})]})]})}function u(){let[e,t]=(0,n.useState)(0),r=p[e];return(0,i.jsxs)("section",{className:"hr-services",children:[(0,i.jsx)("div",{className:"partners-header1",style:{textAlign:"center"},children:(0,i.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px"},children:"Our Services"})}),(0,i.jsxs)("h3",{className:"hr-h2",style:{textAlign:"center",color:"#fff"},children:["Your Growth, ",(0,i.jsx)("span",{style:{color:"#ed8337"},children:(0,i.jsx)("i",{children:"Backed by Smarter "})}),"HR Services"]}),(0,i.jsx)("p",{className:"hr-sub",style:{textAlign:"center",color:"#fff"},children:"We bridge the gap between people and performance through custom-built HR strategies that scale as you do."}),(0,i.jsxs)("div",{className:"hr-services__inner",children:[(0,i.jsx)("div",{className:"hr-services__tabs",children:p.map((r,n)=>(0,i.jsxs)("div",{className:"hr-accordion-item",children:[(0,i.jsxs)("div",{className:`hr-tab-item${e===n?" active":""}`,onClick:()=>{t(e===n?-1:n)},children:[(0,i.jsx)("span",{className:"hr-tab-icon",children:r.icon}),(0,i.jsx)("h2",{className:"hr-tab-label",children:r.title}),(0,i.jsx)("span",{className:"hr-tab-arrow",children:e===n?"\u25B2":"\u25BC"})]}),(0,i.jsx)("div",{className:`hr-accordion-content${e===n?" hr-accordion-open":""}`,children:(0,i.jsxs)("div",{className:"hr-services__content",style:{"--preview-color":r.color},children:[(0,i.jsxs)("div",{className:"hr-content-header",children:[(0,i.jsx)("span",{className:"hr-content-icon",children:r.icon}),(0,i.jsx)("span",{className:"hr-content-title",children:r.title})]}),(0,i.jsx)("p",{className:"hr-services__preview-desc",children:r.desc}),(0,i.jsx)("ul",{className:"hr-services__bullets",style:{"--bullet-color":r.color},children:r.bullets.map((e,t)=>(0,i.jsx)("li",{className:"hr-services__bullet",children:e},t))}),(0,i.jsx)("button",{className:"hr-content-btn",style:{background:"#ed8337",marginTop:"20px"},children:"Explore More \u2192"})]})})]},n))}),(0,i.jsxs)("div",{className:"hr-services__content hr-services__content--desktop",style:{"--preview-color":r.color},children:[(0,i.jsxs)("div",{className:"hr-content-header",children:[(0,i.jsx)("span",{className:"hr-content-icon",children:r?r.icon:""}),(0,i.jsx)("span",{className:"hr-content-title",children:r?r.title:""})]}),(0,i.jsx)("p",{className:"hr-services__preview-desc",children:r?r.desc:""}),(0,i.jsx)("ul",{className:"hr-services__bullets",style:{"--bullet-color":r?r.color:""},children:r&&r.bullets.map((e,t)=>(0,i.jsx)("li",{className:"hr-services__bullet",children:e},t))}),(0,i.jsx)("button",{className:"hr-content-btn",style:{background:"#ed8337",marginTop:"20px"},children:"Explore More \u2192"})]})]})]})}function x(){return(0,i.jsx)("section",{className:"tl-section",children:(0,i.jsxs)("div",{className:"tl-inner",children:[(0,i.jsxs)("div",{className:"tl-header",children:[(0,i.jsx)("div",{className:"partners-header1",children:(0,i.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Benefits "})}),(0,i.jsxs)("h3",{className:"tl-heading",children:["Benefits of Choosing ",(0,i.jsx)("span",{children:"Our HR Consultancy "})," Services"]}),(0,i.jsx)("p",{className:"tl-subtext",children:"From recruitment to payroll, we deliver cost-effective HR solutions designed to evolve with your business."})]}),(0,i.jsx)("div",{className:"bento-grid",children:m.map((e,t)=>(0,i.jsxs)("div",{className:`bn-cell bn-cell-${t+1}`,children:[(0,i.jsx)("div",{className:"bn-icon",children:e.icon}),(0,i.jsx)("div",{className:"bn-num",children:e.num}),(0,i.jsx)("h4",{className:"bn-title",children:e.title}),(0,i.jsx)("div",{className:"bn-desc",children:e.desc}),(0,i.jsx)("a",{className:"bn-link",href:"#",children:"Learn more \u2192"})]},t))})]})})}function b(){return(0,i.jsx)("section",{className:"pr-section",children:(0,i.jsxs)("div",{className:"pr-inner",children:[(0,i.jsxs)("div",{className:"pr-header",children:[(0,i.jsx)("div",{className:"partners-header1",children:(0,i.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Human Resource Management Process"})}),(0,i.jsxs)("h3",{className:"pr-heading",children:["Our Human ",(0,i.jsx)("span",{style:{color:"#ed8337"},children:"Resource Management"})," Process"]}),(0,i.jsx)("p",{className:"pr-subtext",children:"We begin with a deep understanding of your business, then craft tailored strategies and action plans. Our team ensures seamless execution and constant monitoring of every initiative. Through detailed feedback and analytics reports, we help you stay informed, optimize results, and make data-driven decisions that drive long-term success."})]}),(0,i.jsxs)("div",{className:"circ-layout",children:[(0,i.jsx)("div",{className:"circ-left-top",children:(0,i.jsxs)("div",{className:"circ-step",children:[(0,i.jsx)("div",{className:"cs-icon-wrap",children:h.leftTop.icon}),(0,i.jsx)("h3",{className:"cs-title",children:h.leftTop.title}),(0,i.jsx)("div",{className:"cs-desc",children:h.leftTop.desc})]})}),(0,i.jsx)("div",{className:"circ-center",children:(0,i.jsxs)("div",{className:"circ-svg-wrap",children:[(0,i.jsxs)("svg",{viewBox:"0 0 300 300",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("circle",{cx:"150",cy:"150",r:"135",fill:"none",stroke:"rgba(237,131,55,0.12)",strokeWidth:"1",strokeDasharray:"6 5"}),(0,i.jsx)("circle",{cx:"150",cy:"150",r:"118",fill:"none",stroke:"rgba(237,131,55,0.08)",strokeWidth:"22"}),(0,i.jsx)("path",{d:"M150,32 A118,118 0 0,1 268,150",fill:"none",stroke:"#ed8337",strokeWidth:"20",strokeLinecap:"butt",opacity:"0.95"}),(0,i.jsx)("path",{d:"M268,150 A118,118 0 0,1 150,268",fill:"none",stroke:"#f5a66b",strokeWidth:"20",strokeLinecap:"butt",opacity:"0.75"}),(0,i.jsx)("path",{d:"M150,268 A118,118 0 0,1 32,150",fill:"none",stroke:"#ed8337",strokeWidth:"20",strokeLinecap:"butt",opacity:"0.45"}),(0,i.jsx)("path",{d:"M32,150 A118,118 0 0,1 150,32",fill:"none",stroke:"#f5a66b",strokeWidth:"20",strokeLinecap:"butt",opacity:"0.22"}),(0,i.jsx)("circle",{cx:"150",cy:"150",r:"96",fill:"none",stroke:"rgba(237,131,55,0.08)",strokeWidth:"1",strokeDasharray:"4 6"}),(0,i.jsx)("circle",{cx:"150",cy:"150",r:"85",fill:"rgba(0,20,40,0.85)"}),(0,i.jsx)("circle",{cx:"150",cy:"32",r:"8",fill:"#ed8337"}),(0,i.jsx)("circle",{cx:"268",cy:"150",r:"8",fill:"#ed8337"}),(0,i.jsx)("circle",{cx:"150",cy:"268",r:"8",fill:"#ed8337"}),(0,i.jsx)("circle",{cx:"32",cy:"150",r:"8",fill:"#ed8337"}),(0,i.jsx)("circle",{cx:"150",cy:"32",r:"13",fill:"none",stroke:"rgba(237,131,55,0.3)",strokeWidth:"2"}),(0,i.jsx)("circle",{cx:"268",cy:"150",r:"13",fill:"none",stroke:"rgba(237,131,55,0.3)",strokeWidth:"2"}),(0,i.jsx)("circle",{cx:"150",cy:"268",r:"13",fill:"none",stroke:"rgba(237,131,55,0.3)",strokeWidth:"2"}),(0,i.jsx)("circle",{cx:"32",cy:"150",r:"13",fill:"none",stroke:"rgba(237,131,55,0.3)",strokeWidth:"2"})]}),(0,i.jsx)("div",{className:"circ-core",children:(0,i.jsxs)("div",{className:"circ-core-title",children:["HR Management",(0,i.jsx)("br",{}),"Process"]})})]})}),(0,i.jsx)("div",{className:"circ-right-top",children:(0,i.jsxs)("div",{className:"circ-step",children:[(0,i.jsx)("div",{className:"cs-icon-wrap",children:h.rightTop.icon}),(0,i.jsx)("h3",{className:"cs-title",children:h.rightTop.title}),(0,i.jsx)("div",{className:"cs-desc",children:h.rightTop.desc})]})}),(0,i.jsx)("div",{className:"circ-left-bottom",children:(0,i.jsxs)("div",{className:"circ-step",children:[(0,i.jsx)("div",{className:"cs-icon-wrap",children:h.leftBottom.icon}),(0,i.jsx)("div",{className:"cs-title",children:h.leftBottom.title}),(0,i.jsx)("div",{className:"cs-desc",children:h.leftBottom.desc})]})}),(0,i.jsx)("div",{className:"circ-right-bottom",children:(0,i.jsxs)("div",{className:"circ-step",children:[(0,i.jsx)("div",{className:"cs-icon-wrap",children:h.rightBottom.icon}),(0,i.jsx)("div",{className:"cs-title",children:h.rightBottom.title}),(0,i.jsx)("div",{className:"cs-desc",children:h.rightBottom.desc})]})})]})]})})}let y=[{q:"What Makes Your Payroll Management Different From Others?",a:"We don\u2019t just process numbers\u2014we ensure accuracy, compliance, and confidentiality at every step. From salary disbursals and tax filings to statutory compliance (PF, ESI, TDS), we handle it all with tech-enabled precision and end-to-end transparency."},{q:"Can You Help Us Hire For Niche Or Leadership Roles?",a:"Absolutely. Our recruitment services cover everything from entry-level to CXO positions. We focus on culture-fit and long-term alignment, using a consultative approach to find the right talent\u2014not just fill the vacancy."},{q:"Do You Offer HR Strategy Support For Startups Or Small Teams?",a:"Yes. Whether you\u2019re hiring your first employee or scaling rapidly, we help set up HR foundations like org structure, role mapping, goal-setting frameworks, and people policies that grow with your business."},{q:"How Do You Ensure Our HR Policies Are Compliant?",a:"Our policy management services are crafted by HR and legal experts to ensure they meet local labor laws, industry standards, and your internal values. We customize every policy to be legally sound yet people-friendly."},{q:"Can We Outsource Only A Few HR Functions Instead Of The Full Setup?",a:"Definitely. Our services are modular\u2014you can pick and choose what you need. Whether it\u2019s just payroll, recruitment, or policy support, we\u2019ll step in where you need us most."},{q:"How Long Does It Take To Get Started With Your Services?",a:"Depending on the scope, onboarding typically takes 1\u20133 weeks. For payroll, we can go live within a month. For recruitment or strategy services, timelines vary based on the complexity and goals."}];function v(){let[e,t]=(0,n.useState)(null),r=r=>{t(e===r?null:r)};return(0,i.jsxs)("section",{className:"faq-section",children:[(0,i.jsx)("div",{className:"partners-header2",style:{textAlign:"center",marginTop:"20px"},children:(0,i.jsx)("h2",{className:"partners-eyebrow",children:"Frequently Asked Questions"})}),(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"faq-head",children:(0,i.jsxs)("h3",{className:"faq-h3",children:["Queries That Could ",(0,i.jsx)("span",{children:"Hold You Back"})]})}),(0,i.jsxs)("div",{className:"faq-wrapper",children:[(0,i.jsx)("div",{className:"faq-col",children:y.slice(0,3).map((t,n)=>(0,i.jsxs)("div",{className:"faq-item",children:[(0,i.jsxs)("div",{className:"faq-question",onClick:()=>r(n),children:[(0,i.jsx)("span",{children:t.q}),(0,i.jsx)("span",{className:"icon",children:e===n?"\u2212":"+"})]}),e===n&&(0,i.jsx)("div",{className:"faq-answer",children:t.a})]},n))}),(0,i.jsx)("div",{className:"faq-col",children:y.slice(3,6).map((t,n)=>(0,i.jsxs)("div",{className:"faq-item",children:[(0,i.jsxs)("div",{className:"faq-question",onClick:()=>r(n+3),children:[(0,i.jsx)("span",{children:t.q}),(0,i.jsx)("span",{className:"icon",children:e===n+3?"\u2212":"+"})]}),e===n+3&&(0,i.jsx)("div",{className:"faq-answer",children:t.a})]},n+3))})]})]})]})}function w(){return(0,i.jsxs)(o.A,{children:[(0,i.jsx)(c,{}),(0,i.jsx)("style",{children:d}),(0,i.jsxs)("div",{className:"hr-page",children:[(0,i.jsx)(g,{}),(0,i.jsx)(f,{}),(0,i.jsx)(u,{}),(0,i.jsx)(x,{}),(0,i.jsx)(b,{}),(0,i.jsx)(v,{}),(0,i.jsx)(s.A,{})]})]})}}}]);