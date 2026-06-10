"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["6389"],{9393(e,r,t){t.d(r,{A:()=>n});var i=t(4848),a=t(6540);let n=function(){let e=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let r=e.current;if(!r)return;let t=r.getContext("2d"),i="#ed8337",a,n,s=[],o;function c(){a=r.width=r.parentElement.offsetWidth,n=r.height=r.parentElement.offsetHeight}function l(){this.reset()}l.prototype.reset=function(){this.x=Math.random()*a,this.y=Math.random()*n,this.r=2.2*Math.random()+.6,this.type=.55>Math.random()?"dot":.5>Math.random()?"ring":"plus",this.speed=.35*Math.random()+.08,this.dir=Math.random()*Math.PI*2,this.alpha=.45*Math.random()+.1,this.pulse=Math.random()*Math.PI*2,this.pulseSpeed=.018*Math.random()+.008,this.size=4*Math.random()+2},l.prototype.update=function(){this.x+=Math.cos(this.dir)*this.speed,this.y+=Math.sin(this.dir)*this.speed,this.pulse+=this.pulseSpeed,this.dir+=(Math.random()-.5)*.015,this.x<-20&&(this.x=a+20),this.x>a+20&&(this.x=-20),this.y<-20&&(this.y=n+20),this.y>n+20&&(this.y=-20)},l.prototype.draw=function(){let e=this.alpha*(.7+.3*Math.sin(this.pulse));if(t.save(),t.globalAlpha=e,t.strokeStyle=t.fillStyle=i,t.lineWidth=1,"dot"===this.type)t.beginPath(),t.arc(this.x,this.y,this.r+.4*Math.sin(this.pulse),0,2*Math.PI),t.fill();else if("ring"===this.type){let e=this.size*(.9+.15*Math.sin(this.pulse));t.beginPath(),t.arc(this.x,this.y,e,0,2*Math.PI),t.stroke()}else{let e=this.size*(.9+.1*Math.sin(this.pulse));t.beginPath(),t.moveTo(this.x-e,this.y),t.lineTo(this.x+e,this.y),t.moveTo(this.x,this.y-e),t.lineTo(this.x,this.y+e),t.stroke()}t.restore()},window.addEventListener("resize",c),c(),s=[];let d=Math.floor(a*n/9e3);for(let e=0;e<Math.max(d,28);e++)s.push(new l);return!function e(){t.clearRect(0,0,a,n),function(){let e=s.filter(e=>"dot"===e.type);for(let r=0;r<e.length;r++)for(let a=r+1;a<e.length;a++){let n=e[r].x-e[a].x,s=e[r].y-e[a].y,o=Math.sqrt(n*n+s*s);o<110&&(t.save(),t.globalAlpha=(1-o/110)*.12,t.strokeStyle=i,t.lineWidth=.7,t.beginPath(),t.moveTo(e[r].x,e[r].y),t.lineTo(e[a].x,e[a].y),t.stroke(),t.restore())}}(),s.forEach(e=>{e.update(),e.draw()}),o=requestAnimationFrame(e)}(),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",c)}},[]),(0,i.jsx)("section",{id:"cta-final",children:(0,i.jsxs)("div",{className:"cta-banner",style:{"--glow-x":"50%","--glow-y":"50%"},children:[(0,i.jsx)("canvas",{id:"ctaCanvas",ref:e}),(0,i.jsxs)("div",{className:"cta-banner-left",children:[(0,i.jsx)("div",{className:"partners-header",children:(0,i.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Ready to Start?"})}),(0,i.jsxs)("h2",{className:"cta-banner-heading",children:["Let's Talk About Your",(0,i.jsx)("br",{}),"Next Big ",(0,i.jsx)("span",{className:"hl-italic",children:"Growth Move"})]}),(0,i.jsx)("p",{className:"cta-banner-sub",children:"No pressure. Just a quick conversation to understand where you are-and how we can help you move forward."})]}),(0,i.jsxs)("div",{className:"cta-banner-right",children:[(0,i.jsxs)("a",{href:"#",className:"cta-bprimary",children:["Book a Free Consultation",(0,i.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",children:(0,i.jsx)("path",{d:"M3 8h10M9 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,i.jsx)("a",{href:"#",className:"cta-bghost",children:"View All Services"})]})]})})}},793(e,r,t){t.r(r),t.d(r,{default:()=>y});var i=t(4848),a=t(6540),n=t(8128),s=t(9393),o=t(1085),c=t(3572);let l=[{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":"https://www.priyamconsultancy.com/",name:"Home"}},{"@type":"ListItem",position:2,item:{"@id":"https://www.priyamconsultancy.com/recruitment-services/",name:"Recruitment Services"}}]},{"@context":"https://schema.org","@type":"Organization",name:"Priyam Consultancy Services",url:"https://www.priyamconsultancy.com/",logo:"https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png",contactPoint:[{"@type":"ContactPoint",telephone:"+91 96774 44048",contactType:"customer support"}],sameAs:["https://www.facebook.com/profile.php?id=61577125709962","https://www.linkedin.com/company/priyam-consultancy-services/","https://www.instagram.com/priyam_consultancy_services/","https://x.com/services91032","https://g.co/kgs/rdTYdi6"]},{"@context":"https://schema.org","@type":"Service","@id":"https://www.priyamconsultancy.com/recruitment-services/#service",name:"Recruitment Services",serviceType:"Recruitment and Hiring Services",url:"https://www.priyamconsultancy.com/recruitment-services/",description:"Priyam Consultancy provides professional recruitment services including talent acquisition, executive hiring, staffing solutions, candidate screening, workforce planning and end-to-end recruitment support for businesses across India.",provider:{"@type":"Organization",name:"Priyam Consultancy Services",url:"https://www.priyamconsultancy.com/",logo:{"@type":"ImageObject",url:"https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png"}},areaServed:{"@type":"Country",name:"India"}},{"@context":"https://schema.org/","@type":"Product",name:"Recruitment Services in Coimbatore | HR Recruitment Agency",image:["https://www.priyamconsultancy.com/img/recriutment-services.png"],description:"Best recruitment services in Coimbatore offering talent acquisition, executive hiring, staffing solutions, candidate screening and end-to-end recruitment support for businesses.",brand:{"@type":"Brand",name:"Priyam Consultancy Services"},review:{"@type":"Review",reviewRating:{"@type":"Rating",ratingValue:"4.9",bestRating:"5",worstRating:"1"},author:{"@type":"Person",name:"Admin"}},aggregateRating:{"@type":"AggregateRating",ratingValue:"4.9",reviewCount:"4387"},offers:{"@type":"Offer",url:"https://www.priyamconsultancy.com/recruitment-services/",priceCurrency:"INR",price:"0",priceValidUntil:"2026-12-31",itemCondition:"https://schema.org/NewCondition",availability:"https://schema.org/InStock",seller:{"@type":"Organization",name:"Priyam Consultancy Services"}}},{"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"What Industries Do You Provide Recruitment Services For?",acceptedAnswer:{"@type":"Answer",text:"We cater to many industries including tech, finance, logistics, FMCG, healthcare, and a number of other industries, with vertical-specific recruiters in each."}},{"@type":"Question",name:"Do You Just Provide Candidate Profiles Or Do You Provide End To End Hiring?",acceptedAnswer:{"@type":"Answer",text:"Both. We are a full-service Recruitment Services Company, that does profile share, end-to-end recruitment and full RPO setups."}},{"@type":"Question",name:"Can You Assist With Hiring For Our HR And Compliance Teams?",acceptedAnswer:{"@type":"Answer",text:"Yes, we offer HR Recruitment Services which focus on sourcing the best possible talent for internal HR, payroll and people ops roles."}},{"@type":"Question",name:"Do You Support Hiring For Remote Or Hybrid Teams?",acceptedAnswer:{"@type":"Answer",text:"Absolutely. We can help you to find and onboard remote, hybrid and freelance resources in-line with your organization's model."}},{"@type":"Question",name:"How Do Your Recruitment Consultancy Services Work?",acceptedAnswer:{"@type":"Answer",text:"We help you improve the way you hire\u2014writing JDs, setting interview SOPs, building talent pools, and being your in-house recruitment strategy partner."}},{"@type":"Question",name:"How Is PCS Different From Other Recruitment Agencies?",acceptedAnswer:{"@type":"Answer",text:"We provide the depth of a consultancy, the scale of an agency and the ownership of an internal HR partner, and we do it all, smarter and faster."}}]}],d=`
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
  h3.hr-h2 {
    font-size: 2.7rem;
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
.btn-fill:hover { background: var(--orange-l); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(237,131,55,0.42); }
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


/* \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}
   SERVICES \u{2014} Accordion Card Layout
   \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500} */
.hr-services {
  padding: 100px 80px;
  background: #004168;
}
.hr-services__inner {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 60px; align-items: start; margin-top: 63px;
}
.hr-services__left { position: sticky; top: 100px; }
.hr-services__left .hr-tag { margin-bottom: 16px; }
.hr-services__desc { color: var(--hr-gray); font-size: 0.95rem; line-height: 1.8; margin-bottom: 32px; margin-top: 12px; max-width: 440px; }
.hr-services__preview {
  background: #fff; border-radius: 20px; padding: 36px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.07);
  border-top: 4px solid var(--preview-color, var(--hr-orange));
  transition: border-color 0.3s ease;
}
.hr-services__preview-icon { font-size: 3rem; margin-bottom: 16px; }
.hr-services__preview-title { font-size: 1.25rem; font-weight: 700; color: var(--hr-dark); margin-bottom: 12px; }
.hr-services__preview-desc { font-size: 0.88rem; color: var(--hr-gray); line-height: 1.75; margin-bottom: 20px; }
.hr-services__bullets { list-style: none; display: flex; flex-direction: column; gap: 9px; }
.hr-services__bullet {
  display: flex; align-items: center; gap: 10px;
  font-size: 0.85rem; font-weight: 500; color: var(--hr-dark);
}
.hr-services__bullet::before {
  content: "\u{2713}"; width: 22px; height: 22px; border-radius: 50%;
  background: var(--bullet-color, var(--hr-orange));
  color: #fff; font-size: 0.7rem; font-weight: 800;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}

/* Accordion on the right */
.hr-services__accordion { display: flex; flex-direction: column; gap: 12px; }
.hr-acc-item {
  background: #fff; border-radius: 16px; overflow: hidden;
  border: 2px solid transparent;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  transition: all 0.3s ease; cursor: pointer;
}
.hr-acc-item:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.1); }
.hr-acc-item.open { border-color: var(--item-color, var(--hr-orange)); box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
.hr-acc-header {
  display: flex; align-items: center; gap: 16px;
  padding: 20px 24px; cursor: pointer; user-select: none;
}
.hr-acc-num {
  font-size: 0.7rem; font-weight: 800; letter-spacing: 0.1em;
  color: var(--item-color, var(--hr-orange)); min-width: 28px;
}
.hr-acc-icon { font-size: 1.6rem; }
.hr-acc-title { font-size: 1rem; font-weight: 700; color: var(--hr-dark); flex: 1; }
.hr-acc-arrow {
  width: 30px; height: 30px; border-radius: 50%;
  background: var(--item-color, var(--hr-orange)); color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem; font-weight: 700;
  transition: transform 0.3s ease; flex-shrink: 0;
}
.hr-acc-item.open .hr-acc-arrow { transform: rotate(45deg); }
.hr-acc-body {
  max-height: 0; overflow: hidden;
  transition: max-height 0.4s ease, padding 0.3s ease;
  padding: 0 24px;
}
.hr-acc-item.open .hr-acc-body { max-height: 300px; padding: 0 24px 24px; }
.hr-acc-body-inner { padding-top: 12px; border-top: 1px solid #F0F0F0; }
.hr-acc-body p { font-size: 0.85rem; color: var(--hr-gray); line-height: 1.75; margin-bottom: 14px; }
.hr-acc-tags { display: flex; gap: 8px; flex-wrap: wrap; }
.hr-acc-tag {
  font-size: 0.72rem; font-weight: 600; padding: 4px 12px; border-radius: 999px;
  background: rgba(255,107,43,0.08); color: var(--item-color, var(--hr-orange));
  border: 1px solid rgba(255,107,43,0.2);
}

/* \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}
   BENEFITS \u{2014} Bento Grid (no-box style)
   \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500} */
.tl-section {
  position: relative; padding: 6rem 6%;
  background: #ffffff; overflow: hidden;
}
.tl-inner { position: relative; z-index: 2; max-width: 1100px; margin: 0 auto; }

.tl-header { text-align: center; margin-bottom: 4rem; }
.tl-heading {
  font-family: var(--font); font-size: clamp(1.7rem, 2.8vw, 2.4rem);
  font-weight: 800; line-height: 1.15; letter-spacing: -.025em;
  color: #0d1f2d; margin-bottom: .85rem;
}
.tl-heading span { color: var(--hr-orange); }
.tl-subtext { font-size: .96rem; line-height: 1.7; color: #6b7a8d; max-width: 560px; margin: 0 auto; }

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
  background: var(--hr-orange);
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
  font-family: var(--font); font-size: 1.05rem; font-weight: 800;
  color: #0d1f2d; line-height: 1.3;
}
.bn-cell .bn-desc {
  font-size: .875rem; line-height: 1.78; color: #6b7a8d;
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
.pr-inner { position: relative; z-index: 2; max-width: 1100px; margin: 0 auto; }

.pr-header { margin-bottom: 3.5rem; text-align: center; }
.pr-heading {
  font-family: var(--font);
  font-size: clamp(1.7rem, 2.8vw, 2.4rem);
  font-weight: 800; line-height: 1.15; letter-spacing: -.025em;
  color: #fff; margin-bottom: 1rem;
}
.pr-subtext {
  font-size: .92rem; line-height: 1.78; color: rgba(255,255,255,0.5);
  max-width: 640px; margin: 0 auto; text-align: center;
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
  font-family: var(--font); font-size: 1.1rem; font-weight: 800;
  color: #fff; line-height: 1.2; letter-spacing: -.01em;
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
  font-family: var(--font); font-size: 1rem; font-weight: 800;
  color: #fff; line-height: 1.3;
}
.cs-desc {
  font-size: .82rem; line-height: 1.72;
  color: rgba(255,255,255,0.45); max-width: 240px;
}
.circ-left-top .cs-desc,
.circ-left-bottom .cs-desc { margin-left: auto; }
h3.faq-h3 {
font-size: 2.5rem;
}
/* \u{2500}\u{2500}\u{2500} RESPONSIVE \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500} */
@media (max-width: 1024px) {
  .hr-services { padding: 80px 40px; }
  .hr-services__inner { grid-template-columns: 1fr; }
  .hr-services__left { position: static; }
  .bento-grid { grid-template-columns: 1fr 1fr; }
  .bn-cell-2, .bn-cell-5 { border-left: none; border-right: none; }
  .bn-cell-3, .bn-cell-6 { border-left: 1.5px solid rgba(0,65,104,0.08); }
  .circ-layout { grid-template-columns: 1fr; grid-template-rows: auto; min-height: unset; }
  .circ-center { grid-column: 1; grid-row: 1; margin: 0 auto 2rem; }
  .circ-left-top, .circ-left-bottom, .circ-right-top, .circ-right-bottom {
    grid-column: 1; padding: 0;
  }
  .circ-left-top .circ-step, .circ-left-bottom .circ-step {
    align-items: flex-start; text-align: left;
  }
  .circ-left-top .cs-desc, .circ-left-bottom .cs-desc { margin-left: 0; }
  .circ-step { padding: 1rem 1.2rem; border-bottom: 1px dashed rgba(237,131,55,0.18); }
}
@media (max-width: 640px) {
  .hr-services { padding: 60px 20px; }
  .tl-section { padding: 4rem 5%; }
  .bento-grid { grid-template-columns: 1fr; }
  .bn-cell-2,.bn-cell-3,.bn-cell-5,.bn-cell-6 { border-left: none; border-right: none; }
  .pr-section { padding: 4rem 5% 5rem; }
  .faq-wrapper {display:block;}
}

/* \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550} SERVICES \u{2014} TILT CARDS (HTML layout) \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550} */
.svc-section {
  position: relative; padding: 6rem 6% 7rem;
  background: linear-gradient(160deg, var(--navy-deep) 0%, var(--navy) 55%, var(--navy-mid) 100%);
  overflow: hidden;
}
.svc-section::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image: linear-gradient(rgba(237,131,55,0.04) 1px,transparent 1px),
                    linear-gradient(90deg,rgba(237,131,55,0.04) 1px,transparent 1px);
  background-size: 60px 60px;
}
.svc-section::after {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(ellipse 55% 60% at 5% 20%, rgba(237,131,55,0.07) 0%, transparent 60%),
    radial-gradient(ellipse 50% 55% at 95% 80%, rgba(78,205,196,0.05) 0%, transparent 55%);
}
.svc-inner { position: relative; z-index: 2; margin: 0 auto; }

.svc-header { text-align: center; margin-bottom: 4.5rem; }
.svc-eyebrow {
  display: inline-flex; align-items: center; gap: .55rem;
  font-size: .73rem; font-weight: 700; color: var(--orange);
  letter-spacing: .14em; text-transform: uppercase; margin-bottom: .9rem;
}
.svc-eyebrow-line { width: 28px; height: 2px; background: var(--orange); border-radius: 2px; }
.svc-heading {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.5rem, 2.4vw, 2.2rem);
  font-weight: 700; line-height: 1.1; letter-spacing: .0em;
  color: #fff; margin-bottom: .75rem;
}
.svc-subtext {
  font-size: .95rem; line-height: 1.75; color: rgb(255, 255, 255);
margin: 30px auto;
}

.svc-trio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  align-items: stretch;
}

/* \u{2500}\u{2500} TILT CARDS \u{2014} Image-matched dark navy style \u{2500}\u{2500} */
.svc-tcard {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  display: flex; flex-direction: column;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.10);
  transition: transform .38s cubic-bezier(.22,.68,0,1.2),
              box-shadow .38s ease,
              border-color .3s;
  cursor: default;
}
.svc-tcard:hover {
  transform: translateY(-8px);
  border-color: rgba(237,131,55,0.4);
  box-shadow: 0 20px 50px rgba(0,0,0,0.35), 0 0 0 1px rgba(237,131,55,0.15);
}

/* Card band \u{2014} top coloured header area like image */
.svc-tcard-band {
  position: relative;
  padding: 1.6rem 1.8rem 2rem;
  background: rgba(255,255,255,0.05);
  border-bottom: 1px solid rgba(255,255,255,0.07);
}

/* Number badge \u{2014} top right corner like image */
.svc-tcard-num {
  position: absolute; top: 1rem; right: 1.2rem; z-index: 2;
  font-family: 'Poppins', monospace; font-size: .65rem; font-weight: 800;
  color: rgba(237,131,55,0.55); letter-spacing: 0.08em;
}

/* Icon box \u{2014} square rounded like image */
.svc-tcard-icon {
  position: relative; z-index: 2;
  width: 54px; height: 54px; border-radius: 14px;
  background: rgba(237,131,55,0.12);
  border: 1px solid rgba(237,131,55,0.22);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 1rem;
  transition: background .3s, transform .35s cubic-bezier(.22,.68,0,1.4);
}
.svc-tcard:hover .svc-tcard-icon {
  background: rgba(237,131,55,0.22);
  transform: scale(1.05);
}
.svc-tcard-icon svg {
  width: 24px; height: 24px; stroke: var(--orange);
  fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round;
}

/* Eyebrow label above title like image */
.svc-tcard-eyebrow {
  font-size: .62rem; font-weight: 700; letter-spacing: .14em;
  text-transform: uppercase; color: var(--orange);
  margin-bottom: .45rem; display: block;
}

.svc-tcard-title {
  position: relative; z-index: 2;
  font-family: 'Poppins', sans-serif; font-size: 1.25rem; font-weight: 700;
  color: #fff; line-height: 1.3;
}

.svc-tcard-body {
  padding: 1.5rem 1.8rem 1.8rem;
  display: flex; flex-direction: column;
  gap: .85rem; flex: 1;
}

.svc-tcard-desc {
  font-size: .88rem; line-height: 1.72; color: rgba(255,255,255,0.82);
  font-family: var(--font);
  padding-bottom: .8rem;
  border-bottom: 1px solid rgba(255,255,255,0.07);
}

/* Bullet list */
.svc-tcard-points { display: flex; flex-direction: column; gap: .6rem; list-style: none; padding: 0; }
.svc-tcard-points li {
  display: flex; align-items: flex-start; gap: .75rem;
  font-size: .84rem; line-height: 1.55; color: rgba(255,255,255,0.78);
}

/* NEW bullet \u{2014} small orange circle with checkmark SVG like image */
.svc-pt-check {
  flex-shrink: 0;
  margin-top: 2px;
  width: 18px; height: 18px; border-radius: 50%;
  background: rgba(237,131,55,0.15);
  border: 1.5px solid rgba(237,131,55,0.5);
  display: flex; align-items: center; justify-content: center;
}
.svc-pt-check svg {
  width: 9px; height: 9px;
  stroke: var(--orange); fill: none;
  stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round;
}

/* Keep old diamond class for compatibility but hide it */
.svc-pt-diamond { display: none; }

.svc-tcard-footer { height: 3px; }
.svc-tcard-1 .svc-tcard-footer { background: linear-gradient(90deg, #ed8337 0%, transparent 100%); }
.svc-tcard-2 .svc-tcard-footer { background: linear-gradient(90deg, #ed8337 0%, transparent 100%); }
.svc-tcard-3 .svc-tcard-footer { background: linear-gradient(90deg, #ed8337 0%, transparent 100%); }

@media (max-width: 900px) {
  .svc-trio-grid { grid-template-columns: 1fr; }
  .svc-section { padding: 4rem 5% 5rem; }
}


.faq-section { padding: 40px 0px 80px 0px; }

/* \u{2500}\u{2500}\u{2500} STEP FLOW SECTION \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500} */
.sf-section {
  padding: 80px 6% 100px;
  background: #004168;
}
.sf-inner {margin: 0 auto; }
.sf-header { text-align: center; margin-bottom: 4rem; }
.sf-heading {
  font-family: var(--font); font-size: clamp(1.7rem, 2.8vw, 2.4rem);
  font-weight: 700; color: #fff; margin-bottom: .7rem;
}
.sf-heading span { color: var(--orange); }
.sf-subtext { font-size: .94rem; color: rgba(255, 255, 255, 0.94); line-height: 1.75; margin: 0 auto; }

/* Flow row \u{2014} vertically centered so cards can offset up/down */
.sf-flow {
  display: flex;
  align-items: center;
  gap: 0;
}

/* Each card+arrow pair */
.sf-card-wrap {
  display: flex;
  align-items: center;
  flex: 1;
  gap: 0;
  min-width: 0;
}

/* \u{2500}\u{2500} Alternating vertical offset \u{2500}\u{2500}
   odd  cards (1,3) \u{2192} translateY(-28px)  \u{2014} zoom-out / lifted up
   even cards (2,4) \u{2192} translateY(+28px)  \u{2014} zoom-out / pushed down
   Both are scale(0.93) so they look "zoomed out" vs default
*/
.sf-card {
  flex: 1;
  min-width: 0;
  background: #fff;
  border: 2px dashed #c8d6e0;
  border-radius: 20px;
  padding: 1.8rem 1.4rem 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  transition: transform .35s cubic-bezier(.22,.68,0,1.3), box-shadow .3s;
  /* default scale \u{2014} all cards start same */
  transform: scale(0.93) translateY(0px);
}

/* Odd index cards (1st, 3rd) \u{2014} lifted up */
.sf-card.sf-odd {
  transform: scale(0.93) translateY(-28px);
}
/* Even index cards (2nd, 4th) \u{2014} pushed down */
.sf-card.sf-even {
  transform: scale(0.93) translateY(28px);
}

/* Hover \u{2014} scale back to full & lift */
.sf-card:hover,
.sf-card.sf-odd:hover,
.sf-card.sf-even:hover {
  // transform: scale(1) translateY(-2px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.22);
  border-style: solid;
  border-color: var(--sf-color, #004168);
}

/* Colored left-border accent bar */
// .sf-card::before {
//   content: '';
//   position: absolute;
//   left: 0; top: 14px; bottom: 14px;
//   width: 4px;
//   border-radius: 0 4px 4px 0;
//   background: var(--sf-color, #004168);
// }

/* Icon */
.sf-card-icon {
  width: 54px; height: 54px;
  border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 1rem;
  background: transparent;
  color: var(--sf-color, #004168);
  flex-shrink: 0;
}
.sf-card-icon svg {
  width: 36px; height: 36px;
  stroke: var(--sf-color, #004168);
  fill: none;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Title */
.sf-card-title {
  font-family: var(--font);
  font-size: .95rem;
  font-weight: 800;
  color: var(--sf-color, #ed8337);
  line-height: 1.25;
  margin-bottom: .65rem;
  text-transform: uppercase;
  letter-spacing: .01em;
}

/* Body text */
.sf-card-desc {
      font-size: .9rem;
    line-height: 1.72;
    color: #000000;
    font-family: 'Poppins';
}

/* \u{2500}\u{2500} Orange Arrow \u{2014} animated pointing \u{2500}\u{2500} */
.sf-arrow {
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  width: 48px;
  z-index: 2;
}
/* Tail line animation \u{2014} draws left to right */
.sf-arrow-tail {
  stroke-dasharray: 20;
  stroke-dashoffset: 20;
  animation: sf-tail-draw 1.4s ease-in-out infinite;
}
/* Head (chevron) \u{2014} slides in after tail */
.sf-arrow-head {
  animation: sf-head-slide 1.4s ease-in-out infinite;
}
/* Whole SVG fades in/out gently */
.sf-arrow svg {
  width: 40px; height: 40px;
  filter: drop-shadow(0 0 6px rgba(237,131,55,0.55));
  animation: sf-arrow-glow 1.4s ease-in-out infinite;
}
@keyframes sf-tail-draw {
  0%        { stroke-dashoffset: 20; opacity: 0.3; }
  35%, 70%  { stroke-dashoffset: 0;  opacity: 1;   }
  100%      { stroke-dashoffset: 0;  opacity: 1;   }
}
@keyframes sf-head-slide {
  0%        { transform: translateX(-5px); opacity: 0; }
  40%, 80%  { transform: translateX(0px);  opacity: 1; }
  100%      { transform: translateX(2px);  opacity: 0.8; }
}
@keyframes sf-arrow-glow {
  0%, 100% { opacity: 0.7; }
  50%       { opacity: 1;   }
}

@media (max-width: 960px) {
  .sf-flow { flex-wrap: wrap; gap: 1.4rem; align-items: stretch; }
  .sf-card-wrap { flex: 1 1 calc(50% - 1.4rem); min-width: 220px; }
  .sf-arrow { display: none; }
  .sf-card, .sf-card.sf-odd, .sf-card.sf-even { transform: scale(1) translateY(0); }
}
@media (max-width: 560px) {
  .sf-flow { flex-direction: column; }
  .sf-card-wrap { flex: 1 1 100%; }
  .sf-section { padding: 60px 5%; }
  .sf-card, .sf-card.sf-odd, .sf-card.sf-even { transform: scale(1) translateY(0); }
}

/* \u{2500}\u{2500} ServicesBuiltForResults (BFR) \u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500}\u{2500} */
.bfr-section {
  padding: 6rem 6%;
  background: #ffffff;
  font-family: var(--font);
}
.bfr-inner { max-width: 1200px; margin: 0 auto; }
.bfr-header { text-align: center; margin-bottom: 3rem; }
.bfr-eyebrow {
  display: inline-flex; align-items: center; gap: 0.55rem;
  font-size: 0.72rem; font-weight: 700; color: var(--orange);
  letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 0.9rem;
}
.bfr-eyebrow-line { width: 28px; height: 2px; background: var(--orange); border-radius: 2px; display: inline-block; }
.bfr-title {
  font-family: var(--font); font-size: clamp(1.75rem, 2.8vw, 2.4rem);
  font-weight: 600;
  color: #000000; margin-bottom: 0.85rem;
}
.bfr-title span { color: var(--orange); }
.bfr-sub { font-size: 0.95rem; color: #000000; line-height: 1.72; margin: 0 auto; }
.bfr-tabs {
  display: flex; gap: 0; overflow-x: auto;
  border-bottom: 2px solid #e8edf2; margin-bottom: 2.5rem; scrollbar-width: none;
}
.bfr-tabs::-webkit-scrollbar { display: none; }
.bfr-tab {
  padding: 0.9rem 1.4rem; font-family: var(--font); font-size: 0.82rem; font-weight: 600;
  color: #8a96a6; background: none; border: none; cursor: pointer; white-space: nowrap;
  position: relative; transition: color 0.22s, background 0.22s;
  border-bottom: 3px solid transparent; margin-bottom: -2px;
  display: flex; align-items: center; gap: 0.4rem;
}
.bfr-tab:hover { color: #0d1f2d; background: rgba(0,65,104,0.03); }
.bfr-tab.active { color: var(--orange);  font-weight: 700; }
.bfr-tab-icon { font-size: 1rem; }
.bfr-panel { animation: bfrFadeUp 0.35s ease both; }
@keyframes bfrFadeUp {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
.bfr-panel-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
.bfr-panel-title { font-size: 1.5rem; font-weight: 600; color: #0d1f2d; line-height: 1.2; margin-bottom: 1rem;  }
.bfr-panel-desc { font-size: 0.92rem; color: #000000; line-height: 1.82; margin-bottom: 1.6rem; }
.bfr-features { list-style: none; display: flex; flex-direction: column; gap: 11px; }
.bfr-features li { display: flex; align-items: center; gap: 11px; font-size: 0.88rem;  color: #000000; }
.bfr-check {
  flex-shrink: 0; width: 22px; height: 22px; border-radius: 50%;
  background: var(--orange); display: flex; align-items: center; justify-content: center;
}
.bfr-check svg { width: 11px; height: 11px; stroke: #fff; stroke-width: 2.8; stroke-linecap: round; stroke-linejoin: round; fill: none; }
.bfr-cta-btn {
  margin-top: 2rem; display: inline-flex; align-items: center; gap: 8px;
  background: var(--orange); color: #fff;
  padding: 0.82rem 1.8rem; border-radius: 50px; font-family: var(--font);
  font-size: 0.88rem; font-weight: 600; border: none; cursor: pointer;
  transition: background 0.22s, transform 0.18s, box-shadow 0.22s;
  box-shadow: 0 4px 18px rgba(237,131,55,0.28);
}
.bfr-cta-btn:hover { background: var(--orange-light); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(237,131,55,0.4); }
.bfr-panel-right {
  background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 60%, var(--navy-mid) 100%);
  border-radius: 24px; padding: 2.4rem 2.2rem;
  border: 1px solid rgba(237,131,55,0.22); position: relative; overflow: hidden;
  display: flex; flex-direction: column; justify-content: space-between;
}
.bfr-panel-right::before {
  content: ''; position: absolute; inset: 0;
  background-image: linear-gradient(rgba(237,131,55,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(237,131,55,0.04) 1px, transparent 1px);
  background-size: 30px 30px; pointer-events: none;
}
.bfr-panel-right::after {
  content: ''; position: absolute; top: -60px; right: -60px;
  width: 220px; height: 220px; border-radius: 50%;
  background: radial-gradient(circle, rgba(237,131,55,0.14) 0%, transparent 70%); pointer-events: none;
}
.bfr-right-icon { display: none; font-size: 3.2rem; position: relative; z-index: 1; margin-bottom: 0.5rem; }
.bfr-right-stat { position: relative; z-index: 1; }
.bfr-right-stat-num { font-size: 3rem; font-weight: 900; color: var(--orange); line-height: 1; letter-spacing: -0.03em; }
.bfr-right-stat-label { font-size: 0.78rem; color: rgba(255,255,255,0.5); margin-top: 5px; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase; }
.bfr-right-tags { display: flex; gap: 8px; flex-wrap: wrap;  position: relative; z-index: 1; }
.bfr-right-tag {
  font-size: 0.7rem; font-weight: 600; padding: 5px 14px; border-radius: 50px;
  background: rgba(237,131,55,0.12); color: var(--orange-light); border: 1px solid rgba(237,131,55,0.28);
}
.bfr-right-cta {
  margin-top: 1.6rem; display: inline-flex; align-items: center; gap: 8px;
  background: rgba(237,131,55,0.18); color: var(--orange-light);
  padding: 0.7rem 1.4rem; border-radius: 50px; font-family: var(--font);
  font-size: 0.82rem; font-weight: 700; border: 1px solid rgba(237,131,55,0.35);
  cursor: pointer; transition: background 0.22s, color 0.22s; position: relative; z-index: 1;
}
.bfr-right-cta:hover { background: var(--orange); color: var(--navy-deep); }
@media (max-width: 900px) {
  .bfr-panel-grid { grid-template-columns: 1fr; }
  .bfr-panel-right { min-height: auto; }
  .bfr-section { padding: 4rem 5%; }
}
@media (max-width: 640px) {
  .bfr-tab { font-size: 0.74rem; padding: 0.75rem 0.9rem; }
  .bfr-title { font-size: 1.55rem; }
}

/* \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
   MOBILE RESPONSIVE FIXES
   \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550} */

/* \u{2500}\u{2500} HERO: Mobile \u{2014} content first, image second, start aligned \u{2500}\u{2500} */
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr !important;
    grid-template-rows: auto auto;
    min-height: auto;
    padding: 1rem 5% 3rem;
    align-items: start;
    gap: 1.5rem;
  }
  .hero-left {
    grid-row: 1;
    grid-column: 1;
    align-items: flex-start;
    text-align: left;
     padding: 3rem 1.0rem 0 1.0rem;
  }
  .hero-right {
    grid-row: 2;
    grid-column: 1;
    width: 100%;
    justify-content: center;
  }
  .hero-right img {
    width: 85% !important;
    max-width: 360px;
    margin: 0 auto;
    display: block;
  }
  .hero-heading {
    font-size: clamp(1.7rem, 6vw, 2.2rem) !important;
    text-align: start !important;
            line-height: 1.46;
  }
  .hero-sub {
    font-size: 0.9rem;
    max-width: 100%;
  }
  .hero-actions {
    justify-content: flex-start;
  }
  .h-badge {
    font-size: 0.65rem;
  }
      h3.faq-h3 {font-size:1.9rem!important;}
      
h3.hr-h2 {
    font-size: 2rem;
}
}

/* \u{2500}\u{2500} OUR BENEFITS (bfr-section): Mobile \u{2014} tabs one-by-one \u{2500}\u{2500} */
@media (max-width: 768px) {
  .bfr-section {
    padding: 3rem 5% 4rem;
  }

  /* Hide scrollable tab bar, show mobile dot-nav instead */
  .bfr-tabs {
    display: none !important;
  }

  /* Mobile tab navigation */
  .bfr-mobile-nav {
    display: flex !important;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    gap: 0.75rem;
  }

  .bfr-mobile-nav-btn {
    width: 38px; height: 38px;
    border-radius: 50%;
    background: var(--navy);
    border: 1.5px solid rgba(237,131,55,0.35);
    color: var(--orange);
    font-size: 1.1rem;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
    transition: background 0.2s;
  }
  .bfr-mobile-nav-btn:hover {
    background: rgba(237,131,55,0.12);
  }
  .bfr-mobile-nav-btn:disabled {
    opacity: 0.3;
    cursor: default;
  }

  .bfr-mobile-tab-label {
    flex: 1;
    text-align: center;
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--orange);
    background: rgba(237,131,55,0.08);
    border: 1px solid rgba(237,131,55,0.22);
    border-radius: 50px;
    padding: 0.5rem 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .bfr-mobile-dots {
    display: flex !important;
    justify-content: center;
    gap: 6px;
    margin-bottom: 1.8rem;
  }
  .bfr-mobile-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: rgba(0,65,104,0.18);
    transition: background 0.22s, transform 0.22s;
    cursor: pointer;
    border: none;
    padding: 0;
  }
  .bfr-mobile-dot.active {
    background: var(--orange);
    transform: scale(1.3);
  }

  /* Panel stacks on mobile */
  .bfr-panel-grid {
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
  }

  .bfr-title {
    font-size: 1.4rem !important;
    text-align: left;
  }
  .bfr-sub {
    font-size: 0.88rem;
    text-align: left;
  }
  .bfr-header {
    margin-bottom: 1.5rem;
  }
}

/* Show mobile nav only on mobile, hide on desktop */
.bfr-mobile-nav,
.bfr-mobile-dots {
  display: none;
}

`,p=[{label:"Discover & Define",icon:(0,i.jsx)("img",{src:"/img/icon/recruitment-service-discover.webp",alt:"Search",style:{width:"30px",height:"30px"}}),title:"Discover & Define",desc:"Before sourcing a single profile we immerse ourselves in your business. We get to understand your hiring objectives, dynamics of the team, the structure of the organization and what success looks like in the role, both technically and culturally. We go beyond job descriptions to understand the must-haves, nice-to-haves and red flags.",features:[],tags:["Understand Hiring Goals","Analyze Team Culture","Identify Role Requirements","Define Success Metrics"]},{label:"Source & Screen",icon:(0,i.jsx)("img",{src:"/img/icon/recruitment-service-source.webp",alt:"Plan",style:{width:"30px",height:"30px"}}),title:"Source & Screen",desc:"With clear direction, we kick off our sourcing engine: a combination of corporate talent databases; AI-based tools; niche job boards; and passive candidate networks. But we do more than source resumes. For every candidate sourced, we do a structured screening on skills, attitude, and culture - so we only put the best forward.",features:[],tags:["Source Qualified Candidates","Access Talent Networks","Conduct Candidate Screening","Shortlist Suitable Professionals"]},{label:"Present & Coordinate",icon:(0,i.jsx)("img",{src:"/img/icon/recruitment-service-present.webp",alt:"Align",style:{width:"30px",height:"30px"}}),title:"Present & Coordinate",desc:"We do not merely share resumes \u2013 we provide complete profiles of candidates, including summary reports, assessment results and indicators for cultural alignment. We handle the entire interview coordination process from scheduling through feedback collation so that your team can focus on making the right choice rather than the admin burden.",features:[],tags:["Share Candidate Profiles","Provide Cultural Insights","Manage Interview Scheduling","Organize Recruitment Feedback"]},{label:"Close & Onboard",icon:(0,i.jsx)("img",{src:"/img/icon/recruitment-service-close.webp",alt:"Check",style:{width:"30px",height:"30px"}}),title:"Close & Onboard",desc:"Hiring isn\u2019t just the offer. We support negotiations, offer letters, and onboarding that keeps candidates warm and engaged. We pre-join actively manage engagement to minimize drop-offs and support the transitional phase with you and the candidate with confidence.",features:[],tags:["Support Offer Negotiations","Ensure Smooth Onboarding","Reduce Dropout Risks","Manage Joining Process"]},{label:"Optimize & Support",icon:(0,i.jsx)("img",{src:"/img/icon/recruitment-service-support.webp",alt:"Implement",style:{width:"30px",height:"30px"}}),title:"Optimize & Support",desc:"At PCS, successful hiring is an ongoing partnership, not just making an offer. We support you long after acceptance, optimizing strategies to evolve with your business. We also monitor hire effectiveness, gather feedback, and offer actionable insights to continuously improve your recruitment processes.",features:[],tags:["Monitor Hiring Performance","Improve Recruitment Strategies","Support Workforce Planning","Build Hiring Partnerships"]},{label:"Monitor & Refine",icon:(0,i.jsx)("img",{src:"/img/icon/recruitment-service-refine.webp",alt:"Refine",style:{width:"30px",height:"30px"}}),title:"Monitor & Refine",desc:"Recruiting is a fluid process, and we continually strive to keep your hiring practices at the cutting edge of what is happening in the marketplace. Through data-enhanced insights and real-time feedback loops, we consistently evaluate your recruiting efforts and identify applicable ways to refine our process to improve recruiting outcomes.",features:[],tags:["Evaluate Recruitment Effectiveness","Track Hiring Trends","Refine Hiring Processes","Improve Recruitment Outcomes"]}];function m(){return(0,i.jsxs)("section",{className:"hero",id:"hero",children:[(0,i.jsxs)("div",{className:"hero-left",children:[(0,i.jsxs)("div",{className:"h-badge",children:[(0,i.jsx)("div",{className:"badge-dot"}),"Expert Recruitment  Services"]}),(0,i.jsxs)("h1",{className:"hero-heading",children:["Hire Smarter. Grow ",(0,i.jsx)("span",{className:"hl lined",children:" Faster"})," With Recruitment Services."]}),(0,i.jsxs)("ul",{className:"hero-sub",children:[(0,i.jsx)("li",{children:"A recruitment partner who understands your business and scales with you."}),(0,i.jsx)("li",{children:"Seamless, end-to-end Recruitment solution that saves time and cost."}),(0,i.jsx)("li",{children:"Qualified candidates who deliver results from Day 1."}),(0,i.jsx)("li",{children:"Precision hiring that reduces attrition and improves team performance."})]}),(0,i.jsx)("div",{className:"hero-actions",children:(0,i.jsxs)("a",{className:"btn-fill",href:"/contact-us",children:["Explore More ",(0,i.jsx)("span",{className:"btn-arrow",children:"\u203A"})]})})]}),(0,i.jsx)("div",{className:"hero-right",children:(0,i.jsx)("img",{src:"/img/recriutment-services.png",alt:"Banner",style:{width:"95%",height:"auto",objectFit:"contain",position:"relative",zIndex:5,animation:"fadeUp .9s .15s ease both"}})})]})}function g(){let[e,r]=(0,a.useState)({name:"",email:"",phone:"",company:"",msg:""}),t=t=>{r({...e,[t.target.name]:t.target.value})};return(0,i.jsxs)("section",{className:"approach",id:"approach",children:[(0,i.jsx)("style",{children:`
        .approach { position:relative; padding:4rem 6%; overflow:hidden;background: white }
        .ap-inner { position:relative; z-index:2; margin:0 auto; display:grid; grid-template-columns:1fr 0.7fr; gap:4rem; align-items:center; }
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
        @media (max-width: 768px) {
          .approach { padding:3rem 5% 3.5rem; }
          .ap-inner { grid-template-columns:1fr !important; gap:2rem !important; }
          .ap-form-wrap { max-width:100% !important; width:100%; }
          .ap-heading { font-size:clamp(1.6rem,6vw,2.2rem) !important; }
          .ap-intro { font-size:0.9rem; margin-bottom:1.2rem; }
          .fl-row { grid-template-columns:1fr !important; gap:0 !important; }
          .ap-form-card { padding:2rem 1.4rem !important; }
          .form-card-title { font-size:1.35rem !important; margin-bottom:1.6rem !important; }
          .fl-input, .fl-textarea { font-size:0.85rem; }
        }
      `}),(0,i.jsxs)("div",{className:"ap-inner",children:[(0,i.jsxs)("div",{className:"ap-left",children:[(0,i.jsx)("div",{className:"partners-header1",children:(0,i.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"center"},children:"Our Approach in"})}),(0,i.jsxs)("h2",{className:"ap-heading",children:["Human-Centered ",(0,i.jsx)("span",{children:"Hiring"})," That Aligns With Business Goals"]}),(0,i.jsx)("p",{className:"ap-intro",children:"From a recruitment service provider to a true partner in growth, PCS supports organizations in building strong, high-performing teams. Our experienced recruitment professionals understand evolving workforce demands and industry expectations. We focus on identifying talent that aligns with both functional needs and long-term vision. Every hiring strategy is structured to deliver quality, speed, and cultural fit. Our goal is to transform recruitment into a competitive advantage."}),(0,i.jsx)("p",{className:"ap-intro",children:"We achieve this through customized and proven recruitment solutions backed by deep market expertise. Our extensive talent networks allow us to access the right candidates across industries and functions. Each Recruitment Consultancy engagement is tailored to your unique business requirements."})]}),(0,i.jsx)("div",{className:"ap-form-wrap",children:(0,i.jsxs)("div",{className:"ap-form-card",children:[(0,i.jsxs)("div",{className:"form-card-eyebrow",children:[(0,i.jsx)("span",{className:"form-card-eyebrow-line"}),"Your Growth, Our Mission",(0,i.jsx)("span",{className:"form-card-eyebrow-line"})]}),(0,i.jsxs)("div",{className:"form-card-title",children:["Get Your ",(0,i.jsx)("span",{children:"Free"})," Quote"]}),(0,i.jsxs)("form",{onSubmit:t=>{t.preventDefault();let i={name:e.name,email:e.email,phone:e.phone,company:e.company,message:e.msg,url:window.location.href};n.Ay.send("service_8xw6k3r","template_jarui36",i,"XWRnXi4hK2SvmRG3q").then(()=>{alert("Message Sent Successfully \u2705"),r({name:"",email:"",phone:"",company:"",msg:""})}).catch(e=>{console.log(e),alert("Failed to send \u274C")})},children:[(0,i.jsxs)("div",{className:"fl-row",children:[(0,i.jsxs)("div",{className:"fl-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Your Name"}),(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)("span",{className:"fl-icon",children:"\u{1F464}"}),(0,i.jsx)("input",{className:"fl-input",type:"text",name:"name",placeholder:"Full name",value:e.name,onChange:t,required:!0})]})]}),(0,i.jsxs)("div",{className:"fl-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Company"}),(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)("span",{className:"fl-icon",children:"\u{1F3E2}"}),(0,i.jsx)("input",{className:"fl-input",type:"text",name:"company",placeholder:"Company name",value:e.company,onChange:t})]})]})]}),(0,i.jsxs)("div",{className:"fl-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Email Address"}),(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)("span",{className:"fl-icon",children:"\u2709\uFE0F"}),(0,i.jsx)("input",{className:"fl-input",type:"email",name:"email",placeholder:"your@email.com",value:e.email,onChange:t,required:!0})]})]}),(0,i.jsxs)("div",{className:"fl-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Mobile Number"}),(0,i.jsxs)("div",{className:"phone-row",children:[(0,i.jsx)("div",{className:"phone-flag",children:(0,i.jsx)("span",{children:"\u{1F4DE}"})}),(0,i.jsx)("input",{className:"fl-input",type:"tel",name:"phone",placeholder:"Mobile number",value:e.phone,onChange:t,maxLength:"10",pattern:"[0-9]{10}",required:!0})]})]}),(0,i.jsxs)("div",{className:"fl-group textarea-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Message"}),(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)("span",{className:"fl-icon",style:{top:"0.9rem",transform:"none"},children:"\u{1F4AC}"}),(0,i.jsx)("textarea",{className:"fl-textarea",name:"msg",placeholder:"Tell us about your social media goals...",value:e.msg,onChange:t})]})]}),(0,i.jsxs)("button",{type:"submit",className:"ap-submit",children:["Get Free Consultation ",(0,i.jsx)("span",{className:"ap-submit-arrow",children:"\u203A"})]})]})]})})]})]})}let h=[{id:"01",bg:"rgba(26,86,219,0.08)",title:"360\xb0 Hiring Solutions",desc:"Complete recruitment support covering sourcing, screening, interview coordination, onboarding, and post-hiring assistance for businesses across every growth stage.",icon:(0,i.jsx)("img",{src:"/img/icon/recruitment-service-hiring.webp",alt:"icon",style:{width:"33px",height:"33px"}})},{id:"02",bg:"rgba(224,62,82,0.08)",title:"Industry-Focused Expertise",desc:"Our recruitment strategies are tailored to industry-specific hiring needs, workforce trends, and business expectations for better candidate alignment.",icon:(0,i.jsx)("img",{src:"/img/icon/recruitment-service-industry.webp",alt:"icon",style:{width:"33px",height:"33px"}})},{id:"03",bg:"rgba(217,119,6,0.08)",title:"Tech-Enabled, Human-Focused",desc:"We combine advanced recruitment technology with human expertise to deliver efficient hiring experiences without compromising relationship-driven decision-making.",icon:(0,i.jsx)("img",{src:"/img/icon/recruitment-service-human-focused.webp",alt:"icon",style:{width:"33px",height:"33px"}})},{id:"04",bg:"rgba(13,148,136,0.08)",title:"Transparent & Scalable",desc:"Our recruitment process ensures clear communication, measurable progress, and scalable hiring solutions that adapt to changing business requirements",icon:(0,i.jsx)("img",{src:"/img/icon/recruitment-service-transparent-scalable.webp",alt:"icon",style:{width:"33px",height:"33px"}})}];function f(){return(0,i.jsx)("section",{className:"svc-section",children:(0,i.jsxs)("div",{className:"svc-inner",children:[(0,i.jsxs)("div",{className:"svc-header",children:[(0,i.jsx)("div",{className:"partners-header1",children:(0,i.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"center"},children:"Our Recruitment Services "})}),(0,i.jsxs)("h3",{className:"hr-h2",style:{textAlign:"center",color:"#fff"},children:["Your Hiring Partner,  ",(0,i.jsx)("span",{style:{color:"#ed8337"},children:(0,i.jsx)("i",{children:"From Role Design "})}),"  to Rollout"]}),(0,i.jsx)("p",{className:"svc-subtext",children:"We bridge the gap between people and performance with recruitment strategies built for growth."})]}),(0,i.jsxs)("div",{className:"svc-trio-grid",children:[(0,i.jsxs)("div",{className:"svc-tcard svc-tcard-1",children:[(0,i.jsxs)("div",{className:"svc-tcard-band",children:[(0,i.jsx)("div",{className:"svc-tcard-num",children:"01"}),(0,i.jsx)("div",{className:"svc-tcard-icon",children:(0,i.jsx)("img",{src:"/img/icon/recruitment-service-talent-acquisition.webp",alt:"service icon",style:{width:"32px",height:"32px"}})}),(0,i.jsx)("span",{className:"svc-tcard-eyebrow",children:"Consultancy"}),(0,i.jsx)("h4",{className:"svc-tcard-title",children:"Recruitment Consultancy Services"})]}),(0,i.jsxs)("div",{className:"svc-tcard-body",children:[(0,i.jsx)("div",{className:"svc-tcard-desc",children:"We design effective onboarding programs to integrate new hires smoothly to keep your top talent engaged and committed long-term."}),(0,i.jsxs)("ul",{className:"svc-tcard-points",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"svc-pt-check",children:(0,i.jsx)("svg",{viewBox:"0 0 12 12",children:(0,i.jsx)("polyline",{points:"2,6 5,9 10,3"})})}),"Talent pipeline strategy & effective JD creation"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"svc-pt-check",children:(0,i.jsx)("svg",{viewBox:"0 0 12 12",children:(0,i.jsx)("polyline",{points:"2,6 5,9 10,3"})})}),"Interview frameworks & robust SOP design"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"svc-pt-check",children:(0,i.jsx)("svg",{viewBox:"0 0 12 12",children:(0,i.jsx)("polyline",{points:"2,6 5,9 10,3"})})}),"Hiring audits & ongoing advisory"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"svc-pt-check",children:(0,i.jsx)("svg",{viewBox:"0 0 12 12",children:(0,i.jsx)("polyline",{points:"2,6 5,9 10,3"})})}),"Onboarding & retention strategies"]})]})]}),(0,i.jsx)("div",{className:"svc-tcard-footer"})]}),(0,i.jsxs)("div",{className:"svc-tcard svc-tcard-2",children:[(0,i.jsxs)("div",{className:"svc-tcard-band",children:[(0,i.jsx)("div",{className:"svc-tcard-num",children:"02"}),(0,i.jsx)("div",{className:"svc-tcard-icon",children:(0,i.jsx)("img",{src:"/img/icon/recruitment-service-executive-search.webp",alt:"service icon",style:{width:"32px",height:"32px"}})}),(0,i.jsx)("span",{className:"svc-tcard-eyebrow",children:"End-to-End"}),(0,i.jsx)("h4",{className:"svc-tcard-title",children:"End-to-End Recruitment Services"})]}),(0,i.jsxs)("div",{className:"svc-tcard-body",children:[(0,i.jsx)("div",{className:"svc-tcard-desc",children:"From job profiling and sourcing to interviews and onboarding, we own the entire hiring lifecycle."}),(0,i.jsxs)("ul",{className:"svc-tcard-points",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"svc-pt-check",children:(0,i.jsx)("svg",{viewBox:"0 0 12 12",children:(0,i.jsx)("polyline",{points:"2,6 5,9 10,3"})})}),"Structured job profiling & role clarity"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"svc-pt-check",children:(0,i.jsx)("svg",{viewBox:"0 0 12 12",children:(0,i.jsx)("polyline",{points:"2,6 5,9 10,3"})})}),"Sourcing through smart tools & curated networks"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"svc-pt-check",children:(0,i.jsx)("svg",{viewBox:"0 0 12 12",children:(0,i.jsx)("polyline",{points:"2,6 5,9 10,3"})})}),"Assessment frameworks that look beyond resumes"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"svc-pt-check",children:(0,i.jsx)("svg",{viewBox:"0 0 12 12",children:(0,i.jsx)("polyline",{points:"2,6 5,9 10,3"})})}),"Interview management & offer rollouts made seamless"]})]})]}),(0,i.jsx)("div",{className:"svc-tcard-footer"})]}),(0,i.jsxs)("div",{className:"svc-tcard svc-tcard-3",children:[(0,i.jsxs)("div",{className:"svc-tcard-band",children:[(0,i.jsx)("div",{className:"svc-tcard-num",children:"03"}),(0,i.jsx)("div",{className:"svc-tcard-icon",children:(0,i.jsx)("img",{src:"/img/icon/recruitment-service-hr-staffing.webp",alt:"service icon",style:{width:"32px",height:"32px"}})}),(0,i.jsx)("span",{className:"svc-tcard-eyebrow",children:"Outsourcing"}),(0,i.jsx)("h4",{className:"svc-tcard-title",children:"Recruitment Process Outsourcing (RPO)"})]}),(0,i.jsxs)("div",{className:"svc-tcard-body",children:[(0,i.jsx)("div",{className:"svc-tcard-desc",children:"Need help at scale? We plug in as your recruitment engine. We provide expert support for all your hiring needs."}),(0,i.jsxs)("ul",{className:"svc-tcard-points",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"svc-pt-check",children:(0,i.jsx)("svg",{viewBox:"0 0 12 12",children:(0,i.jsx)("polyline",{points:"2,6 5,9 10,3"})})}),"Partial or full-scale RPO support"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"svc-pt-check",children:(0,i.jsx)("svg",{viewBox:"0 0 12 12",children:(0,i.jsx)("polyline",{points:"2,6 5,9 10,3"})})}),"Bulk hiring, assessment, and onboarding"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"svc-pt-check",children:(0,i.jsx)("svg",{viewBox:"0 0 12 12",children:(0,i.jsx)("polyline",{points:"2,6 5,9 10,3"})})}),"Cost-effective, SLA-driven, and fully integrated"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"svc-pt-check",children:(0,i.jsx)("svg",{viewBox:"0 0 12 12",children:(0,i.jsx)("polyline",{points:"2,6 5,9 10,3"})})}),"Extensive network and deep industry expertise"]})]})]}),(0,i.jsx)("div",{className:"svc-tcard-footer"})]})]})]})})}function u(){let[e,r]=(0,a.useState)(0),t=p.length,n=p[e];return(0,i.jsx)("section",{className:"bfr-section",children:(0,i.jsxs)("div",{className:"bfr-inner",children:[(0,i.jsxs)("div",{className:"bfr-header",children:[(0,i.jsx)("div",{className:"partners-header1",children:(0,i.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"center"},children:"Our Proven Recruitment Process"})}),(0,i.jsxs)("h3",{className:"bfr-title",children:["Need-Based. ",(0,i.jsxs)("span",{children:[" ",(0,i.jsx)("i",{children:"Candidate-Centric. "})]})," Speed-Oriented."]}),(0,i.jsx)("p",{className:"bfr-sub",children:"We combine deep industry insight, smart technology, and consultative expertise to deliver a hiring experience that\u2019s seamless, structured, and strategically aligned with your business growth."})]}),(0,i.jsx)("div",{className:"bfr-tabs",children:p.map((t,a)=>(0,i.jsxs)("button",{className:`bfr-tab${e===a?" active":""}`,onClick:()=>r(a),children:[(0,i.jsx)("span",{className:"bfr-tab-icon",children:t.icon}),t.label]},a))}),(0,i.jsxs)("div",{className:"bfr-mobile-nav",children:[(0,i.jsx)("button",{className:"bfr-mobile-nav-btn",onClick:()=>r(e=>Math.max(0,e-1)),disabled:0===e,children:"\u2190"}),(0,i.jsx)("span",{className:"bfr-mobile-tab-label",children:n.label||n.tab||n.title}),(0,i.jsx)("button",{className:"bfr-mobile-nav-btn",onClick:()=>r(e=>Math.min(t-1,e+1)),disabled:e===t-1,children:"\u2192"})]}),(0,i.jsx)("div",{className:"bfr-mobile-dots",children:p.map((t,a)=>(0,i.jsx)("button",{className:`bfr-mobile-dot${e===a?" active":""}`,onClick:()=>r(a)},a))}),(0,i.jsx)("div",{className:"bfr-panel",children:(0,i.jsxs)("div",{className:"bfr-panel-grid",children:[(0,i.jsxs)("div",{className:"bfr-panel-left",children:[(0,i.jsx)("h4",{className:"bfr-panel-title",children:n.title}),(0,i.jsx)("p",{className:"bfr-panel-desc",children:n.desc}),(0,i.jsx)("ul",{className:"bfr-features",children:n.features.map((e,r)=>(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"bfr-check",children:(0,i.jsx)("svg",{viewBox:"0 0 12 12",children:(0,i.jsx)("polyline",{points:"2,6 5,9 10,3"})})}),e]},r))})]}),(0,i.jsxs)("div",{className:"bfr-panel-right",children:[(0,i.jsx)("div",{className:"bfr-right-icon",children:n.rightIcon}),(0,i.jsxs)("div",{className:"bfr-right-stat",children:[(0,i.jsx)("div",{className:"bfr-right-stat-num",children:n.stat}),(0,i.jsx)("div",{className:"bfr-right-stat-label",children:n.statLabel})]}),(0,i.jsx)("div",{className:"bfr-right-tags",children:n.tags.map((e,r)=>(0,i.jsx)("span",{className:"bfr-right-tag",children:e},r))})]})]})},e)]})})}function x(){return(0,i.jsx)("section",{className:"sf-section",children:(0,i.jsxs)("div",{className:"sf-inner",children:[(0,i.jsxs)("div",{className:"sf-header",children:[(0,i.jsx)("div",{className:"partners-header1",style:{justifyContent:"center"},children:(0,i.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"16px",color:"var(--orange)"},children:"Why PCS?"})}),(0,i.jsxs)("h2",{className:"sf-heading",children:["End-to-End Recruitment, ",(0,i.jsx)("span",{children:(0,i.jsx)("i",{children:"Built for Every"})})," Business Stage"]}),(0,i.jsx)("p",{className:"sf-subtext",children:"At every stage of a company\u2019s development and at any size, we provide flexible solutions to businesses, whether it is an ad hoc or on-demand hire or bulk recruitment, leadership search or full scale RPO. Our thorough structured process goes through recruitment and covers not just role discovery and smart sourcing but the seamless onboarding process and post-hire support giving you confidence every candidate is the right fit and not just a good CV."})]}),(0,i.jsx)("div",{className:"sf-flow",children:h.map((e,r)=>{let t=r%2==0;return(0,i.jsxs)("div",{className:"sf-card-wrap",children:[(0,i.jsxs)("div",{className:`sf-card ${t?"sf-odd":"sf-even"}`,style:{"--sf-color":e.color},children:[(0,i.jsx)("div",{className:"sf-card-icon",children:e.icon}),(0,i.jsx)("h3",{className:"sf-card-title",children:e.title}),(0,i.jsx)("div",{className:"sf-card-desc",children:e.desc})]}),r<h.length-1&&(0,i.jsx)("div",{className:"sf-arrow",children:(0,i.jsxs)("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{className:"sf-arrow-tail",d:"M8 24H36",stroke:"#ed8337",strokeWidth:"3",strokeLinecap:"round"}),(0,i.jsx)("path",{className:"sf-arrow-head",d:"M28 16L38 24L28 32",stroke:"#ed8337",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})]})})]},r)})})]})})}let b=[{q:"What Industries Do You Provide Recruitment Services For?",a:"We cater to many industries including tech, finance, logistics, FMCG, healthcare, and a number of other industries, with vertical-specific recruiters in each."},{q:"Do You Just Provide Candidate Profiles Or Do You provide End To End Hiring?",a:"Both. We are a full-service Recruitment Services Company, that does profile share, end-to-end recruitment and full RPO setups."},{q:"Can You Assist With Hiring For Our HR And Compliance Teams?",a:"Yes, we offer HR Recruitment Services which focus on sourcing the best possible talent for internal HR, payroll and people ops roles."},{q:"Do You Support Hiring For Remote Or Hybrid Teams?",a:"Absolutely. We can help you to find and onboard remote, hybrid and freelance resources in-line with your organization\u2019s model."},{q:"How Do Your Recruitment Consultancy Services Work?",a:"We help you improve the way you hire\u2014writing JDs, setting interview SOPs, building talent pools, and being your in-house recruitment strategy partner."},{q:"How Is PCS Different From Other Recruitment Agencies?",a:"We provide the depth of a consultancy, the scale of an agency and the ownership of an internal HR partner, and we do it all, smarter and faster."}];function v(){let[e,r]=(0,a.useState)(null),t=t=>{r(e===t?null:t)};return(0,i.jsxs)("section",{className:"faq-section",children:[(0,i.jsx)("div",{className:"partners-header2",style:{textAlign:"center",marginTop:"20px"},children:(0,i.jsx)("h2",{className:"partners-eyebrow",children:"Frequently Asked Questions"})}),(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"faq-head",children:(0,i.jsxs)("h3",{className:"faq-h3",children:["Queries That Could ",(0,i.jsx)("span",{children:"Hold You Back"})]})}),(0,i.jsxs)("div",{className:"faq-wrapper",children:[(0,i.jsx)("div",{className:"faq-col",children:b.slice(0,3).map((r,a)=>(0,i.jsxs)("div",{className:"faq-item",children:[(0,i.jsxs)("div",{className:"faq-question",onClick:()=>t(a),children:[(0,i.jsx)("span",{children:r.q}),(0,i.jsx)("span",{className:"icon",children:e===a?"\u2212":"+"})]}),e===a&&(0,i.jsx)("div",{className:"faq-answer",children:r.a})]},a))}),(0,i.jsx)("div",{className:"faq-col",children:b.slice(3,6).map((r,a)=>(0,i.jsxs)("div",{className:"faq-item",children:[(0,i.jsxs)("div",{className:"faq-question",onClick:()=>t(a+3),children:[(0,i.jsx)("span",{children:r.q}),(0,i.jsx)("span",{className:"icon",children:e===a+3?"\u2212":"+"})]}),e===a+3&&(0,i.jsx)("div",{className:"faq-answer",children:r.a})]},a+3))})]})]})]})}function y(){return(0,i.jsxs)(o.A,{children:[(0,i.jsxs)(c.A,{children:[(0,i.jsx)("title",{children:"Recruitment Services Company | Recruitment agency in Coimbatore"}),(0,i.jsx)("meta",{name:"description",content:" Leading recruitment agency in Coimbatore offering expert hiring solutions, talent acquisition, and staffing services to help businesses build strong teams. Contact us! "}),(0,i.jsx)("meta",{name:"keywords",content:"Recruitment Services, Recruitment Agency, Recruitment Consultancy Services, Recruitment Services Company, Recruitment Solutions, HR Recruitment Services, HR Consultancy Services"}),(0,i.jsx)("link",{rel:"canonical",href:"https://www.priyamconsultancy.com/recruitment-services/"}),(0,i.jsx)("meta",{property:"og:title",content:" Leading recruitment agency in Coimbatore offering expert hiring solutions, talent acquisition, and staffing services to help businesses build strong teams. Contact us! "}),(0,i.jsx)("meta",{property:"og:description",content:" Leading recruitment agency in Coimbatore offering expert hiring solutions, talent acquisition, and staffing services to help businesses build strong teams. Contact us! "}),(0,i.jsx)("meta",{property:"og:url",content:"https://www.priyamconsultancy.com/recruitment-services/"}),(0,i.jsx)("meta",{property:"og:image",content:"https://www.priyamconsultancy.com/img/recriutment-services.png"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:title",content:"Recruitment Services Company | Recruitment agency in Coimbatore"}),(0,i.jsx)("meta",{name:"twitter:description",content:" Leading recruitment agency in Coimbatore offering expert hiring solutions, talent acquisition, and staffing services to help businesses build strong teams. Contact us! "}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://www.priyamconsultancy.com/img/recriutment-services.png"}),l.map((e,r)=>(0,i.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)},r))]}),(0,i.jsx)("style",{children:d}),(0,i.jsxs)("div",{className:"hr-page",children:[(0,i.jsx)(m,{}),(0,i.jsx)(g,{}),(0,i.jsx)(f,{}),(0,i.jsx)(u,{}),(0,i.jsx)(x,{}),(0,i.jsx)(v,{}),(0,i.jsx)(s.A,{})]})]})}}}]);