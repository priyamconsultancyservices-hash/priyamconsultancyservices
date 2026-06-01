"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["6126"],{9393(e,i,a){a.d(i,{A:()=>r});var n=a(4848),t=a(6540);let r=function(){let e=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let i=e.current;if(!i)return;let a=i.getContext("2d"),n="#ed8337",t,r,s=[],o;function l(){t=i.width=i.parentElement.offsetWidth,r=i.height=i.parentElement.offsetHeight}function d(){this.reset()}d.prototype.reset=function(){this.x=Math.random()*t,this.y=Math.random()*r,this.r=2.2*Math.random()+.6,this.type=.55>Math.random()?"dot":.5>Math.random()?"ring":"plus",this.speed=.35*Math.random()+.08,this.dir=Math.random()*Math.PI*2,this.alpha=.45*Math.random()+.1,this.pulse=Math.random()*Math.PI*2,this.pulseSpeed=.018*Math.random()+.008,this.size=4*Math.random()+2},d.prototype.update=function(){this.x+=Math.cos(this.dir)*this.speed,this.y+=Math.sin(this.dir)*this.speed,this.pulse+=this.pulseSpeed,this.dir+=(Math.random()-.5)*.015,this.x<-20&&(this.x=t+20),this.x>t+20&&(this.x=-20),this.y<-20&&(this.y=r+20),this.y>r+20&&(this.y=-20)},d.prototype.draw=function(){let e=this.alpha*(.7+.3*Math.sin(this.pulse));if(a.save(),a.globalAlpha=e,a.strokeStyle=a.fillStyle=n,a.lineWidth=1,"dot"===this.type)a.beginPath(),a.arc(this.x,this.y,this.r+.4*Math.sin(this.pulse),0,2*Math.PI),a.fill();else if("ring"===this.type){let e=this.size*(.9+.15*Math.sin(this.pulse));a.beginPath(),a.arc(this.x,this.y,e,0,2*Math.PI),a.stroke()}else{let e=this.size*(.9+.1*Math.sin(this.pulse));a.beginPath(),a.moveTo(this.x-e,this.y),a.lineTo(this.x+e,this.y),a.moveTo(this.x,this.y-e),a.lineTo(this.x,this.y+e),a.stroke()}a.restore()},window.addEventListener("resize",l),l(),s=[];let c=Math.floor(t*r/9e3);for(let e=0;e<Math.max(c,28);e++)s.push(new d);return!function e(){a.clearRect(0,0,t,r),function(){let e=s.filter(e=>"dot"===e.type);for(let i=0;i<e.length;i++)for(let t=i+1;t<e.length;t++){let r=e[i].x-e[t].x,s=e[i].y-e[t].y,o=Math.sqrt(r*r+s*s);o<110&&(a.save(),a.globalAlpha=(1-o/110)*.12,a.strokeStyle=n,a.lineWidth=.7,a.beginPath(),a.moveTo(e[i].x,e[i].y),a.lineTo(e[t].x,e[t].y),a.stroke(),a.restore())}}(),s.forEach(e=>{e.update(),e.draw()}),o=requestAnimationFrame(e)}(),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",l)}},[]),(0,n.jsx)("section",{id:"cta-final",children:(0,n.jsxs)("div",{className:"cta-banner",style:{"--glow-x":"50%","--glow-y":"50%"},children:[(0,n.jsx)("canvas",{id:"ctaCanvas",ref:e}),(0,n.jsxs)("div",{className:"cta-banner-left",children:[(0,n.jsx)("div",{className:"partners-header",children:(0,n.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Ready to Start?"})}),(0,n.jsxs)("h2",{className:"cta-banner-heading",children:["Let's Talk About Your",(0,n.jsx)("br",{}),"Next Big ",(0,n.jsx)("span",{className:"hl-italic",children:"Growth Move"})]}),(0,n.jsx)("p",{className:"cta-banner-sub",children:"No pressure. Just a quick conversation to understand where you are-and how we can help you move forward."})]}),(0,n.jsxs)("div",{className:"cta-banner-right",children:[(0,n.jsxs)("a",{href:"#",className:"cta-bprimary",children:["Book a Free Consultation",(0,n.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",children:(0,n.jsx)("path",{d:"M3 8h10M9 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,n.jsx)("a",{href:"#",className:"cta-bghost",children:"View All Services"})]})]})})}},4231(e,i,a){a.r(i),a.d(i,{default:()=>w});var n=a(4848),t=a(6540),r=a(9393),s=a(8128),o=a(1085);function l(){return(0,n.jsxs)("section",{className:"hero",id:"hero",children:[(0,n.jsx)("style",{children:`
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
  padding: 3rem 6% 4rem;
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
  .hero-left { order: 1; align-items: flex-start;         padding: 3rem 0;}
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

      `}),(0,n.jsxs)("div",{className:"hero-left",children:[(0,n.jsxs)("div",{className:"h-badge",children:[(0,n.jsx)("div",{className:"badge-dot"}),"Strategic Financial Leadership"]}),(0,n.jsxs)("h1",{className:"hero-heading",children:["Virtual CFO Services for ",(0,n.jsx)("span",{className:"hl lined",children:"Growth & Profitability"}),"with Financial Clarity"]}),(0,n.jsx)("p",{className:"hero-sub",children:"Gain strategic financial guidance and actionable insights for your business. From budgeting and forecasting to financial reporting and risk management, our Virtual CFO services help you make informed decisions, optimize cash flow, and drive sustainable growth with confidence."}),(0,n.jsx)("div",{className:"hero-actions",children:(0,n.jsxs)("a",{className:"btn-fill",href:"#",children:["Explore More ",(0,n.jsx)("span",{className:"btn-arrow",children:"\u203A"})]})})]}),(0,n.jsx)("div",{className:"hero-right",children:(0,n.jsx)("img",{src:"/img/virtual-cfo.png",alt:"Virtual CFO Illustration",className:"hero-img"})})]})}function d(){let[e,i]=(0,t.useState)({name:"",email:"",phone:"",company:"",msg:""}),a=a=>{i({...e,[a.target.name]:a.target.value})};return(0,n.jsxs)("section",{className:"approach",id:"approach",children:[(0,n.jsx)("style",{children:`
        .approach { position:relative; padding:4rem 6%; overflow:hidden; }
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
        .fl-input,.fl-textarea { width:100%; padding:0.82rem 1rem 0.82rem 2.6rem; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; font-family:'Poppins',sans-serif; font-size:0.88rem; color:#fff; background:rgba(255,255,255,0.04); outline:none; appearance:none; transition:border-color 0.22s,background 0.22s,box-shadow 0.22s; }
        .fl-input::placeholder,.fl-textarea::placeholder { color:rgba(255,255,255,0.3); }
        .fl-input:focus,.fl-textarea:focus { border-color:var(--orange); background:rgba(237,131,55,0.06); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .fl-icon { position:absolute; left:0.85rem; top:50%; transform:translateY(-50%); font-size:0.95rem; opacity:0.5; pointer-events:none; }
        .fl-group.textarea-group .fl-icon { top:0.9rem; transform:none; }
        .fl-textarea { min-height:88px; resize:none; padding-top:0.82rem; padding-left:2.6rem; }
        .phone-row { display:flex; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; overflow:hidden; background:rgba(255,255,255,0.04); transition:border-color 0.22s,box-shadow 0.22s; }
        .phone-row:focus-within { border-color:var(--orange); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .phone-flag { display:flex; align-items:center; gap:0.3rem; padding:0 0.85rem; font-size:0.82rem; font-weight:700; color:#fff; border-right:1.5px solid rgba(237,131,55,0.2); white-space:nowrap; background:rgba(237,131,55,0.08); cursor:default; flex-shrink:0; }
        .phone-flag-icon { font-size:0.9rem; opacity:0.7; }
        .phone-row .fl-input { border:none; border-radius:0; background:transparent; box-shadow:none; padding:0.82rem 1rem; }
        .phone-row .fl-input:focus { box-shadow:none; }
        .ap-submit { width:100%; background:linear-gradient(135deg,#ed8337,#f5a66b); color:#fff; border:none; padding:1rem 1.5rem; border-radius:12px; font-family:'Poppins',sans-serif; font-size:0.97rem; font-weight:500; cursor:pointer; letter-spacing:0.02em; display:flex; align-items:center; justify-content:center; gap:0.6rem; transition:transform 0.2s,box-shadow 0.2s; }
        .ap-submit:hover { transform:translateY(-2px); box-shadow:0 12px 36px rgba(237,131,55,0.5); }
        .ap-submit-arrow { display:inline-flex; align-items:center; justify-content:center; width:24px; height:24px; border-radius:50%; background:rgba(2,43,68,0.25); font-size:0.9rem; }
        @media(max-width:900px){
          .ap-inner { grid-template-columns:1fr !important; gap:2.5rem !important; }
          .ap-form-wrap { max-width:100% !important; width:100% !important; }
          .ap-form-card { padding:2rem 1.4rem !important; }
        }
        @media(max-width:600px){
          .approach { padding:3rem 4% !important; }
          .ap-inner { gap:2rem !important; }
          .fl-row { grid-template-columns:1fr !important; gap:0 !important; }
          .form-card-title { font-size:1.3rem !important; margin-bottom:1.6rem !important; }
          .ap-form-card { padding:1.6rem 1.1rem !important; }
        }
      `}),(0,n.jsxs)("div",{className:"ap-inner",children:[(0,n.jsxs)("div",{className:"ap-left",children:[(0,n.jsx)("div",{className:"partners-header1",children:(0,n.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Approach in"})}),(0,n.jsxs)("h2",{className:"ap-heading",children:["Virtual  ",(0,n.jsx)("span",{children:"CFO Services"})]}),(0,n.jsx)("p",{className:"ap-intro",children:"Every business has unique financial goals, challenges, and growth plans. We begin by understanding your operations, revenue streams, and priorities. This helps us align financial strategies with your long-term vision."}),(0,n.jsx)("p",{className:"ap-intro",children:"We craft a tailored financial management approach covering budgeting, reporting, and advisory. Each element is designed to support stability, efficiency, and informed decision-making. Our process ensures your finances are structured and goal-oriented.          "}),(0,n.jsx)("p",{className:"ap-intro",children:"Financial management is not just about numbers, but clarity and control. We analyze data, optimize processes, and deliver actionable insights. This empowers confident decisions while you focus on growth and profitability."})]}),(0,n.jsx)("div",{className:"ap-form-wrap",children:(0,n.jsxs)("div",{className:"ap-form-card",children:[(0,n.jsxs)("div",{className:"form-card-eyebrow",children:[(0,n.jsx)("span",{className:"form-card-eyebrow-line"}),"Your Growth, Our Mission",(0,n.jsx)("span",{className:"form-card-eyebrow-line"})]}),(0,n.jsxs)("div",{className:"form-card-title",children:["Get Your ",(0,n.jsx)("span",{children:"Free"})," Quote"]}),(0,n.jsxs)("form",{onSubmit:a=>{a.preventDefault();let n={name:e.name,email:e.email,phone:e.phone,company:e.company,message:e.msg,url:window.location.href};s.Ay.send("service_8xw6k3r","template_jarui36",n,"XWRnXi4hK2SvmRG3q").then(()=>{alert("Message Sent Successfully \u2705"),i({name:"",email:"",phone:"",company:"",msg:""})}).catch(e=>{console.log(e),alert("Failed to send \u274C")})},children:[(0,n.jsxs)("div",{className:"fl-row",children:[(0,n.jsxs)("div",{className:"fl-group",children:[(0,n.jsx)("label",{className:"fl-label",children:"Your Name"}),(0,n.jsxs)("div",{style:{position:"relative"},children:[(0,n.jsx)("span",{className:"fl-icon",children:(0,n.jsx)("img",{src:"/img/icons/form-user.svg",alt:"User",width:"16",height:"16"})}),(0,n.jsx)("input",{className:"fl-input",type:"text",name:"name",placeholder:"Full name",value:e.name,onChange:a,required:!0})]})]}),(0,n.jsxs)("div",{className:"fl-group",children:[(0,n.jsx)("label",{className:"fl-label",children:"Company"}),(0,n.jsxs)("div",{style:{position:"relative"},children:[(0,n.jsx)("span",{className:"fl-icon",children:(0,n.jsx)("img",{src:"/img/icons/form-company.svg",alt:"Company",width:"16",height:"16"})}),(0,n.jsx)("input",{className:"fl-input",type:"text",name:"company",placeholder:"Company name",value:e.company,onChange:a})]})]})]}),(0,n.jsxs)("div",{className:"fl-group",children:[(0,n.jsx)("label",{className:"fl-label",children:"Email Address"}),(0,n.jsxs)("div",{style:{position:"relative"},children:[(0,n.jsx)("span",{className:"fl-icon",children:(0,n.jsx)("img",{src:"/img/icons/form-email.svg",alt:"Email",width:"16",height:"16"})}),(0,n.jsx)("input",{className:"fl-input",type:"email",name:"email",placeholder:"your@email.com",value:e.email,onChange:a,required:!0})]})]}),(0,n.jsxs)("div",{className:"fl-group",children:[(0,n.jsx)("label",{className:"fl-label",children:"Mobile Number"}),(0,n.jsxs)("div",{className:"phone-row",children:[(0,n.jsx)("div",{className:"phone-flag",children:(0,n.jsx)("span",{className:"phone-flag-icon",children:(0,n.jsx)("img",{src:"/img/icons/form-phone.svg",alt:"Phone",width:"16",height:"16"})})}),(0,n.jsx)("input",{className:"fl-input",type:"tel",name:"phone",placeholder:"Mobile number",value:e.phone,onChange:a,maxLength:"10",pattern:"[0-9]{10}",required:!0})]})]}),(0,n.jsxs)("div",{className:"fl-group textarea-group",children:[(0,n.jsx)("label",{className:"fl-label",children:"Message"}),(0,n.jsxs)("div",{style:{position:"relative"},children:[(0,n.jsx)("span",{className:"fl-icon",style:{top:"0.9rem",transform:"none"},children:(0,n.jsx)("img",{src:"/img/icons/form-message.svg",alt:"Message",width:"16",height:"16"})}),(0,n.jsx)("textarea",{className:"fl-textarea",name:"msg",placeholder:"Tell us about your business needs...",value:e.msg,onChange:a})]})]}),(0,n.jsxs)("button",{type:"submit",className:"ap-submit",children:["Get Free Consultation",(0,n.jsx)("span",{className:"ap-submit-arrow",children:"\u203A"})]})]})]})})]})]})}let c=[{num:"01",tag:"FPB",label:"Financial Planning & Budgeting",title:"Strategic plans for <i>sustainable financial growth</i>",desc:["We develop realistic budgets, forecasts, and long-term financial plans tailored to your business. Our approach analyzes revenue streams, expenses, and future projections in detail. This ensures your financial strategy is practical and growth-oriented.","By aligning financial planning with business goals, we help optimize resource allocation and control costs. Our structured approach improves stability and preparedness. It enables your business to grow confidently with clear financial direction."],chips:["\u{1F4C8} Investor Access","\u{1F3DB}\uFE0F Strong Governance","\u{1F4CB} Stock Exchange Listed","\u2705 Regulatory Compliance"],time:"Avg. 15\u201325 working days"},{num:"02",tag:"MRA",label:"Management Reporting & Analytics",title:"Clear insights for informed <i>business decisions</i>",desc:["We deliver timely and accurate reports, dashboards, and financial summaries. These track performance, cash flow, and key business metrics consistently. This gives you a clear view of your financial health.","By simplifying complex data into actionable insights, we support better decision-making. Our reports highlight opportunities, risks, and trends effectively. This enhances transparency and strengthens stakeholder confidence."],chips:["\u{1F4BC} Limited Liability","\u{1F680} Investor-Ready","\u{1F465} 2\u2013200 Shareholders","\u{1F4D1} Separate Legal Entity"],time:"Avg. 7\u201312 working days"},{num:"03",tag:"CPA",label:"Cost & Profitability Analysis",title:"Maximize efficiency and optimize <i>profits effectively</i>",desc:["We analyze your cost structure, revenue streams, and operational processes in depth. Our goal is to identify inefficiencies and areas for cost reduction. This helps improve overall financial performance.","By optimizing resources and enhancing margins, we support smarter business decisions. Our insights reduce waste and improve profitability. This drives efficiency and ensures long-term sustainable growth."],chips:["\u{1F91D} Flexible Structure","\u{1F6E1}\uFE0F Limited Liability","\u{1F4C9} Low Compliance","\u{1F4B0} Easy Profit Sharing"],time:"Avg. 10\u201315 working days"},{num:"04",tag:"CFM",label:"Cash Flow Management",title:"Ensure liquidity and smooth <i>operations consistently</i>",desc:["We manage your cash flow to ensure consistent liquidity and operational stability. Our team monitors inflows, outflows, and working capital requirements closely. This prevents disruptions in daily operations.","By forecasting cash needs and planning for contingencies, we reduce financial risks. Our approach improves cash efficiency and control. It ensures your business runs smoothly without financial bottlenecks."],chips:["\u{1F464} Solo Founder","\u{1F3E2} Corporate Benefits","\u{1F512} Asset Protection","\u{1F4CA} Easy Compliance"],time:"Avg. 7\u201310 working days"},{num:"05",tag:"FIA",label:"Fundraising & Investment Advisory",title:"Guided capital and investment <i>decisions confidently</i>",desc:["We assist with capital raising, investor communication, and funding strategies. Our team evaluates your financial needs and identifies suitable investment options. This supports your growth and expansion plans.","By preparing strong financial insights and strategies, we enhance investor confidence. We help secure funding while maintaining financial discipline. This ensures sustainable and well-planned business growth."],chips:["\u{1F91D} Shared Ownership","\u{1F4A1} Easy Formation","\u{1F4DD} Minimal Compliance","\u2696\uFE0F Flexible Agreement"],time:"Avg. 3\u20137 working days"},{num:"06",tag:"RCA",label:"Risk & Compliance Advisory",title:"Mitigate risks and maintain <i>regulatory compliance</i>",desc:["We monitor financial compliance, statutory requirements, and potential business risks. Our team ensures your operations align with current regulations and standards. This reduces exposure to legal and financial issues.","By implementing proactive risk management strategies, we safeguard your business stability. Our approach minimizes penalties and enhances credibility. It enables confident operations in a changing regulatory environment."],chips:["\u{1F464} Full Control","\u{1F4B8} Minimal Cost","\u26A1 Quick Setup","\u{1F3EA} SMEs & Freelancers"],time:"Avg. 1\u20133 working days"}],p=[(0,n.jsx)("img",{src:"/img/icon/financial-planning-budgeting.webp",alt:"Financial Planning and Budgeting",width:"20",height:"20"}),(0,n.jsx)("img",{src:"/img/icon/management-reporting-analytics.webp",alt:"Management Reporting and Analytics",width:"20",height:"20"}),(0,n.jsx)("img",{src:"/img/icon/cost-profitability-analysis.webp",alt:"Cost and Profitability Analysis",width:"20",height:"20"}),(0,n.jsx)("img",{src:"/img/icon/cashflow-management.webp",alt:"Cash Flow Management",width:"20",height:"20"}),(0,n.jsx)("img",{src:"/img/icon/fundraising-investment-advisory.webp",alt:"Fundraising and Investment Advisory",width:"20",height:"20"}),(0,n.jsx)("img",{src:"/img/icon/risk-compliance-advisory.webp",alt:"Risk and Compliance Advisory",width:"20",height:"20"})];function g(){let[e,i]=(0,t.useState)(0),a=c[e];return(0,n.jsxs)("section",{style:{padding:"90px 5%",background:"#004168",position:"relative",overflow:"hidden"},children:[(0,n.jsx)("style",{children:`
        .rg-sec-tag{display:inline-block;font-size:.75rem;font-weight:700;color:#ed8337;letter-spacing:2px;text-transform:uppercase;margin-bottom:.85rem;}
        .rg-sec-h{font-family:'Poppins',serif;font-size:clamp(1.9rem,3.5vw,2.6rem);font-weight:600;color:#fff;line-height:1.15;margin-bottom:.9rem;}
        .rg-sec-h i{font-style:italic;color:#ed8337;font-weight:700;}
        .rg-sec-sub{font-size:.95rem;color:#fff;margin:0 auto;line-height:1.85;}
        .rg-layout{display:grid;grid-template-columns:1fr 1.15fr;gap:0;max-width:1240px;margin:0 auto;border-radius:20px;overflow:hidden;box-shadow:0 20px 60px rgba(1,113,164,.1);}
        .rg-left{background:#fff;padding:0;}
        .rg-item{display:flex;align-items:center;gap:1rem;padding:1.4rem 2rem;border-bottom:1px solid #dce8f0;cursor:pointer;position:relative;transition:all .28s;overflow:hidden;}
        .rg-item::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:#ed8337;transform:scaleY(0);transform-origin:center;transition:transform .28s;}
        .rg-item.active::before,.rg-item:hover::before{transform:scaleY(1);}
        .rg-item.active{background:#fff4eb;}
        .rg-item:hover:not(.active){background:#fafcfe;}
        .rg-icon-box{width:42px;height:42px;border-radius:10px;background:#e0f2fb;display:flex;align-items:center;justify-content:center;transition:background .28s;flex-shrink:0;}
        .rg-item.active .rg-icon-box{background:#ed8337;}
        .rg-icon-box img{width:35px;height:23px;object-fit:contain;transition:filter .28s;}
        .rg-item.active .rg-icon-box img{filter:brightness(0) invert(1);}
        .rg-name{font-weight:500;font-size:.95rem;color:#111e27;font-family:'poppins';}
        .rg-item.active .rg-name{color:#c96820;font-family:'poppins';}
        .rg-item-arr{width:28px;height:28px;border-radius:50%;background:#dce8f0;display:flex;align-items:center;justify-content:center;font-size:.8rem;color:#7a909d;transition:all .28s;flex-shrink:0;}
        .rg-item.active .rg-item-arr{background:#ed8337;color:#fff;}
        .rg-tag-pill{font-size:.65rem;font-weight:700;letter-spacing:.8px;text-transform:uppercase;padding:.2rem .65rem;border-radius:50px;background:#e0f2fb;color:#0171a4;transition:all .2s;}
        .rg-item.active .rg-tag-pill{background:rgba(237,131,55,.2);color:#c96820;}
        .rg-right{background:linear-gradient(145deg, rgba(10, 54, 82, 0.55), rgb(76 186 235 / 23%));padding:3rem 2.8rem;position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;min-height:520px;}
        .rg-d-eye{display:flex;align-items:center;gap:.6rem;margin-bottom:1.5rem;}
        .rg-d-num{width:42px;height:42px;border-radius:10px;background:#ed8337;display:flex;align-items:center;justify-content:center;font-family:'Fraunces',serif;font-weight:900;font-size:1.1rem;color:#fff;}
        .rg-d-lbl{font-size:.7rem;font-weight:700;color:rgba(255,255,255,.4);letter-spacing:2px;text-transform:uppercase;}
        .rg-d-title{font-family:'poppins',serif;font-weight:600;font-size:1.7rem;color:#fff;line-height:1.25;margin-bottom:1rem;}
        .rg-d-title i{font-style:italic;font-weight:300;color:#ed8337;}
        .rg-d-desc{font-size:.9rem;color:rgb(255, 255, 255);line-height:1.9;margin-bottom:2rem;font-family:'poppins'}
        .rg-d-footer{display:flex;align-items:center;justify-content:space-between;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,.08);}
        .rg-d-cta{background:#ed8337;color:#fff;padding:.7rem 1.6rem;border-radius:8px;border:none;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:.85rem;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:.5rem;transition:all .2s;}
        .rg-d-cta:hover{background:#c96820;transform:translateY(-1px);}
        .rg-time-dot{width:6px;height:6px;border-radius:50%;background:#ed8337;}
        .rg-dots{display:flex;gap:.4rem;position:absolute;bottom:2.8rem;right:2.8rem;z-index:3;}
        .rg-ddot{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.2);transition:all .3s;}
        .rg-ddot.active{background:#ed8337;width:20px;border-radius:3px;}
        
        .rg-bg-c{position:absolute;border-radius:50%;pointer-events:none;}
                @media(max-width:768px){
          .rg-layout{grid-template-columns:1fr !important;}
          .rg-right{ display:none !important; }
          .rg-mobile-detail{
            display:block;
            background:linear-gradient(145deg, rgba(10,54,82,0.95), rgba(0,40,70,0.98));
            padding:1.4rem 1.2rem;
            border-left:3px solid #ed8337;
            border-radius:0 0 12px 12px;
            margin-top:-1px;
          }
          .rg-mobile-detail .rg-d-title{font-family:'Poppins',sans-serif;font-size:1rem;font-weight:700;color:#fff;margin:0.4rem 0 0.7rem;line-height:1.3;}
          .rg-mobile-detail .rg-d-desc{font-size:0.84rem;line-height:1.7;color:rgba(255,255,255,0.82);}
          .rg-item{border-radius:0;}
          .rg-item.active{border-radius:12px 12px 0 0;}
          .rg-tag-pill{display:none;}
        }
        @media(min-width:769px){
          .rg-mobile-detail{ display:none !important; }
        }

      `}),(0,n.jsx)("div",{className:"rg-bg-c",style:{top:"-120px",right:"-120px",width:"400px",height:"400px",border:"1.5px solid rgba(237,131,55,.1)"}}),(0,n.jsx)("div",{className:"rg-bg-c",style:{bottom:"-100px",left:"-80px",width:"300px",height:"300px",border:"1.5px solid rgba(237,131,55,.08)"}}),(0,n.jsxs)("div",{style:{textAlign:"center",marginBottom:"60px",position:"relative",zIndex:2},children:[(0,n.jsx)("div",{className:"partners-header1",children:(0,n.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"center"},children:"Our Specialized Virtual CFO Services"})}),(0,n.jsxs)("h2",{className:"rg-sec-h",children:["Strategic Insights. ",(0,n.jsx)("i",{children:" Data-Driven Decisions."})," "]}),(0,n.jsx)("p",{className:"rg-sec-sub",children:"Priyam Consultancy Services delivers customized Virtual CFO solutions designed to align with your financial goals and drive sustainable business growth."})]}),(0,n.jsxs)("div",{className:"rg-layout",children:[(0,n.jsx)("div",{className:"rg-left",children:c.map((a,t)=>(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:`rg-item${e===t?" active":""}`,onClick:()=>i(t),style:t===c.length-1&&e!==t?{borderBottom:"none"}:{},children:[(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1rem",flex:1},children:[(0,n.jsx)("div",{className:"rg-icon-box",children:p[t]}),(0,n.jsx)("div",{className:"rg-name",children:a.label})]}),(0,n.jsx)("span",{className:"rg-tag-pill",children:a.tag}),(0,n.jsx)("div",{className:"rg-item-arr",children:e===t?"\u25BE":"\u203A"})]}),e===t&&(0,n.jsxs)("div",{className:"rg-mobile-detail",children:[(0,n.jsx)("div",{className:"rg-d-title",dangerouslySetInnerHTML:{__html:a.title}}),Array.isArray(a.desc)?a.desc.map((e,i)=>(0,n.jsx)("div",{className:"rg-d-desc",style:{marginBottom:i<a.desc.length-1?"0.8rem":"0"},children:e},i)):(0,n.jsx)("div",{className:"rg-d-desc",children:a.desc})]})]},t))}),(0,n.jsxs)("div",{className:"rg-right",children:[(0,n.jsxs)("div",{style:{position:"relative",zIndex:2,height:"100%",display:"flex",flexDirection:"column"},children:[(0,n.jsxs)("div",{className:"rg-d-eye",children:[(0,n.jsx)("div",{className:"rg-d-num",children:a.num}),(0,n.jsx)("div",{className:"rg-d-lbl",children:a.label})]}),(0,n.jsx)("div",{className:"rg-d-title",dangerouslySetInnerHTML:{__html:a.title}}),Array.isArray(a.desc)?a.desc.map((e,i)=>(0,n.jsx)("div",{className:"rg-d-desc",style:{marginBottom:i<a.desc.length-1?"1rem":"0"},children:e},i)):(0,n.jsx)("div",{className:"rg-d-desc",children:a.desc}),(0,n.jsx)("div",{className:"rg-d-footer"})]}),(0,n.jsx)("div",{className:"rg-dots",children:c.map((i,a)=>(0,n.jsx)("div",{className:`rg-ddot${e===a?" active":""}`},a))})]})]})]})}let m=[{num:"01",color:"orange",icon:(0,n.jsx)("img",{src:"/img/icon/sc-financial-planning-strategy.webp",alt:"Financial Planning and Strategy",width:"35",height:"35"}),lbl:"Step 01 \xb7 Initiation",title:"Financial Planning & Strategy",desc:"We develop budgets, forecasts, and long-term financial strategies aligned with your goals, providing a clear roadmap for profitability, sustainable growth, and informed business decision-making.",time:"~1 Working Day",tColor:"blue",even:!1,last:!1},{num:"02",color:"blue",icon:(0,n.jsx)("img",{src:"/img/icon/sc-reporting-analysis.webp",alt:"Reporting and Analysis",width:"35",height:"35"}),lbl:"Step 02 \xb7 Documentation",title:"Reporting & Analysis",desc:"We deliver detailed reports and analytics presenting financial data clearly, monitoring performance, expenses, cash flow, and profitability to provide actionable insights for strategic decisions and financial control.",time:"~2-3 Working Days",tColor:"orange",even:!0,last:!1},{num:"03",color:"orange",icon:(0,n.jsx)("img",{src:"/img/icon/sc-cashflow-liquidity.webp",alt:"Cash Flow and Liquidity Management",width:"35",height:"35"}),lbl:"Step 03 \xb7 Filing",title:"Cash Flow & Liquidity Management",desc:"We monitor inflows and outflows, manage working capital, and forecast cash requirements to optimize liquidity, ensuring smooth operations and preventing financial bottlenecks across your business.",time:"~2-4 Working Days",tColor:"blue",even:!1,last:!1},{num:"04",color:"blue",icon:(0,n.jsx)("img",{src:"/img/icon/sc-risk-compliance.webp",alt:"Risk Management and Compliance",width:"35",height:"35"}),lbl:"Step 04 \xb7 Approval",title:"Risk Management & Compliance",desc:"We identify and mitigate financial and regulatory risks while ensuring compliance with statutory requirements and controls, protecting stakeholder interests and strengthening your foundation for sustainable growth.",time:"~5-7 Working Days",tColor:"orange",even:!0,last:!1},{num:"05",color:"orange",icon:(0,n.jsx)("img",{src:"/img/icon/sc-continuous-advisory.webp",alt:"Continuous Advisory and Optimization",width:"35",height:"35"}),lbl:"Step 05 \xb7 Complete",title:"Continuous Advisory & Optimization",desc:"We provide ongoing strategic guidance, adapting financial processes to regulatory and market changes, optimizing operations, improving efficiency, and supporting sustainable growth and long-term profitability for your business.",time:"~1-2 Working Days",tColor:"blue",even:!1,last:!1},{num:"06",color:"blue",icon:(0,n.jsx)("img",{src:"/img/icon/sc-cost-optimization.webp",alt:"Cost Optimization and Performance Improvement",width:"35",height:"35"}),lbl:"Step 06 \xb7 Complete",title:"Cost Optimization & Performance Improvement",desc:"We analyze cost structures, identify inefficiencies, and implement optimization strategies to reduce expenses while maintaining quality, improving overall efficiency, strengthening margins, and supporting long-term organizational financial sustainability.",time:"~2-3 Working Days",tColor:"orange",even:!0,last:!1}];function h(){return(0,n.jsxs)("section",{style:{position:"relative",overflow:"hidden",padding:"90px 0 100px"},children:[(0,n.jsx)("style",{children:`
        .sc-bg{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(237,131,55,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(237,131,55,0.035) 1px,transparent 1px);background-size:56px 56px;animation:sc-gd 22s linear infinite;}
        @keyframes sc-gd{0%{background-position:0 0}100%{background-position:56px 56px}}
        .sc-orb{position:absolute;border-radius:50%;pointer-events:none;filter:blur(90px);animation:sc-op 9s ease-in-out infinite alternate;}
        .sc-orb-a{width:520px;height:520px;background:rgba(237,131,55,0.07);top:-140px;left:-100px;}
        .sc-orb-b{width:380px;height:380px;background:rgba(1,113,164,0.12);bottom:-100px;right:-80px;animation-delay:3s;}
        @keyframes sc-op{0%{transform:scale(1)}100%{transform:scale(1.25) translate(18px,-18px)}}
        .sc-inner{position:relative;z-index:5;max-width:1100px;margin:0 auto;padding:0 5%;}
        .sc-tag{display:inline-flex;align-items:center;gap:0.7rem;font-family:'DM Sans',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#ed8337;margin-bottom:14px;}
        .sc-tag-line{display:inline-block;width:32px;height:2px;background:linear-gradient(90deg,transparent,#ed8337);border-radius:2px;}
        .sc-tag-line:last-child{background:linear-gradient(90deg,#ed8337,transparent);}
        .sc-title{font-family:'Poppins',sans-serif;font-size:clamp(26px,3.8vw,2.6rem);font-weight:600;color:#000;margin:0;line-height:1.4;}
        .sc-title-em{font-style:italic;color:#ed8337;}
        .sc-sub{font-family:'poppins',sans-serif;font-size:16px;color:rgb(0, 0, 0);margin-top:20px;}
        .sc-step{display:flex;align-items:stretch;margin-bottom:22px;}
        .sc-step-even{flex-direction:row-reverse;}
        .sc-num-col{flex-shrink:0;width:84px;display:flex;align-items:center;justify-content:center;position:relative;}
        .sc-line-v{position:absolute;left:50%;top:0;bottom:-22px;width:2px;background:linear-gradient(to bottom,rgba(237,131,55,0.35),rgba(1,113,164,0.2));transform:translateX(-50%);z-index:1;}
        .sc-circle{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Space Mono',monospace;font-size:13px;font-weight:700;position:relative;z-index:2;transition:transform 0.3s;}
        .sc-orange{background:rgb(237, 131, 55);border:2px solid #ed8337;}
        .sc-blue{background:rgb(1, 112, 164);border:2px solid #0171a4;}
        .sc-final{background:linear-gradient(135deg,#ed8337,#f5a66b);border:2px solid #ed8337;font-weight:900;}
        .sc-step:hover .sc-circle{transform:scale(1.1);}
        .sc-conn{flex-shrink:0;width:36px;}
        .sc-card{flex:1;background:#004168;backdrop-filter:blur(18px);border:1px solid rgba(237,131,55,0.14);border-radius:20px;padding:24px 30px;position:relative;overflow:hidden;transition:transform 0.3s,box-shadow 0.3s,border-color 0.3s;}
        .sc-card:hover{transform:translateY(-5px);box-shadow:0 20px 60px rgba(0,0,0,0.4);border-color:rgba(237,131,55,0.3);}
        .sc-card-top{position:absolute;top:0;left:0;right:0;height:3px;border-radius:20px 20px 0 0;}
        .sc-top-orange{background:linear-gradient(90deg,#ed8337,#f5a66b);}
        .sc-top-blue{background:linear-gradient(90deg,#0171a4,#3b8bd4);}
        .sc-card-icon{font-size:24px;display:block;margin-bottom:8px;}
        .sc-lbl{font-family:'DM Sans',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;margin-bottom:5px;}
        .sc-lbl-orange{color:#5ab8e8;}.sc-lbl-blue{color:#5ab8e8;}
        .sc-card-title{font-family:'Poppins',sans-serif;font-size:15.5px;font-weight:600;color:#f5a66b;margin:11px 0px;}
        .sc-card-desc{font-family:'DM Sans',sans-serif;font-size:15.3px;color:rgba(255, 255, 255, 0.83);line-height:1.78;}
        .sc-time{display:inline-flex;align-items:center;gap:5px;margin-top:12px;border-radius:50px;padding:5px 14px;font-family:'DM Sans',sans-serif;font-size:10.5px;font-weight:700;}
        .sc-t-blue{background:rgba(1,113,164,0.15);border:1px solid rgba(1,113,164,0.28);color:#5ab8e8;}
        .sc-t-orange{background:rgba(237,131,55,0.1);border:1px solid rgba(237,131,55,0.25);color:#ed8337;}
        .sc-card-final{background:#022b44,rgba(1,113,164,0.06));border-color:rgba(237,131,55,0.28);}
        .sc-card-final .sc-card-title{color:#f5a66b;}
        @media(max-width:700px){.sc-step,.sc-step-even{flex-direction:column !important;}.sc-conn{display:none !important;}.sc-num-col{width:100% !important;flex-direction:row !important;justify-content:flex-start !important;padding-left:4px !important;margin-bottom:8px;}.sc-line-v{display:none !important;}.sc-inner{padding:0 4% !important;}}
      `}),(0,n.jsx)("div",{className:"sc-bg"}),(0,n.jsx)("div",{className:"sc-orb sc-orb-a"}),(0,n.jsx)("div",{className:"sc-orb sc-orb-b"}),(0,n.jsxs)("div",{className:"sc-inner",children:[(0,n.jsxs)("div",{style:{textAlign:"center",marginBottom:"90px"},children:[(0,n.jsx)("div",{className:"partners-header1",children:(0,n.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"center"},children:"Our Virtual CFO Process"})}),(0,n.jsxs)("h2",{className:"sc-title",children:["Strategic, Transparent, and ",(0,n.jsx)("em",{className:"sc-title-em",children:"Insight-Driven Financial "}),"Management"]}),(0,n.jsx)("p",{className:"sc-sub",children:"Our Virtual CFO process at Priyam Consultancy Services is designed to meet the unique financial needs of your business, step by step. We don\u2019t just manage numbers \u2014 we build a strategic financial framework that drives growth, profitability, and long-term success. From budgeting to reporting and advisory, every step is accurate, insightful, and tailored to your vision."})]}),(0,n.jsx)("div",{style:{position:"relative"},children:m.map((e,i)=>(0,n.jsxs)("div",{className:`sc-step${e.even?" sc-step-even":""}`,children:[(0,n.jsxs)("div",{className:"sc-num-col",children:[!e.last&&(0,n.jsx)("div",{className:"sc-line-v"}),(0,n.jsx)("div",{className:`sc-circle sc-${e.color}`,children:e.num})]}),(0,n.jsx)("div",{className:"sc-conn"}),(0,n.jsxs)("div",{className:`sc-card${e.last?" sc-card-final":""}`,children:[(0,n.jsx)("div",{className:`sc-card-top ${"blue"===e.color?"sc-top-blue":"sc-top-orange"}`}),(0,n.jsx)("span",{className:"sc-card-icon",children:e.icon}),(0,n.jsx)("div",{className:`sc-lbl sc-lbl-${"blue"===e.color?"blue":"orange"}`,children:e.lbl}),(0,n.jsx)("div",{className:"sc-card-title",children:e.title}),(0,n.jsx)("div",{className:"sc-card-desc",children:e.desc})]})]},i))})]})]})}let f=[{title:"Strategic Planning & Financial Oversight",desc:"We analyze your business model, financial priorities, and growth goals. Every recommendation \u2014 from budgeting to investments \u2014 is designed to provide clarity, control, and measurable financial impact.",center:!1,icon:(0,n.jsx)("img",{src:"/img/icon/hww-strategic-planning-oversigh.webp",alt:"Strategic Planning and Financial Oversight",width:"34",height:"34"})},{title:"Expert Team & Accountability",desc:"Our Virtual CFO team of analysts, accountants, and advisors ensures clear role ownership. This guarantees accuracy, accountability, and seamless execution of every financial strategy for your business.",center:!1,icon:(0,n.jsx)("img",{src:"/img/icon/hww-expert-team-accountability.webp",alt:"Expert Team and Accountability",width:"34",height:"34"})},{title:"Review, Advise & Deliver",desc:"We thoroughly review all reports, budgets, and plans, ensuring compliance and accuracy. Our actionable insights help you make informed decisions aligned with your long-term business objectives.",center:!0,icon:(0,n.jsx)("img",{src:"/img/icon/hww-review-advise-deliver.webp",alt:"Review Advise and Deliver",width:"34",height:"34"})},{title:"Continuous Monitoring & Support",desc:"We continuously track financial performance, cash flow, and compliance obligations. Ongoing guidance ensures your business stays financially healthy, compliant, and positioned for sustainable growth.",center:!1,icon:(0,n.jsx)("img",{src:"/img/icon/hww-continuous-monitoring-support.webp",alt:"Continuous Monitoring and Support",width:"34",height:"34"})}];function u(){return(0,n.jsxs)("section",{style:{position:"relative",background:"#004168",overflow:"hidden",padding:"60px 5% 81px"},children:[(0,n.jsx)("style",{children:`
        .hww-bg{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(237,131,55,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(237,131,55,0.03) 1px,transparent 1px);background-size:52px 52px;animation:hww-gd 22s linear infinite;}
        @keyframes hww-gd{0%{background-position:0 0}100%{background-position:52px 52px}}
        .hww-orb{position:absolute;border-radius:50%;pointer-events:none;filter:blur(90px);animation:hww-od 10s ease-in-out infinite alternate;}
        .hww-orb-1{width:500px;height:500px;background:rgba(237,131,55,0.06);top:-140px;right:-100px;}
        .hww-orb-2{width:380px;height:380px;background:rgba(1,113,164,0.07);bottom:-100px;left:-60px;animation-delay:5s;}
        @keyframes hww-od{0%{transform:scale(1)}100%{transform:scale(1.2) translate(20px,-20px)}}
        .hww-tag{display:inline-flex;align-items:center;gap:0.65rem;font-family:'DM Sans',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#ed8337;margin-bottom:14px;}
        .hww-tag-line{display:inline-block;width:28px;height:2px;border-radius:2px;background:linear-gradient(90deg,transparent,#ed8337);}
        .hww-tag-line:last-child{background:linear-gradient(90deg,#ed8337,transparent);}
        .hww-title{font-family:'Poppins',sans-serif;font-size:clamp(26px,3.6vw,42px);font-weight:600;color:#fff;margin:0;line-height:1.13;}
        .hww-accent{color:#ed8337;font-style:italic;}
        .hww-sub{font-family:'DM Sans',sans-serif;font-size:16px;color:rgb(255, 255, 255);margin-top:20px;margin-left:auto;margin-right:auto;line-height:1.75;}
        .hww-flow{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
        .hww-flow::before{content:'';position:absolute;top:54px;left:calc(10% + 28px);right:calc(10% + 28px);height:2px;background:linear-gradient(90deg,#ed8337,rgba(237,131,55,0.4),rgba(1,113,164,0.5),#0171a4);z-index:0;animation:hww-lg 3s ease-in-out infinite alternate;}
        @keyframes hww-lg{from{opacity:0.5}to{opacity:1}}
        .hww-step{display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 12px;position:relative;z-index:2;cursor:default;}
        .hww-icon-wrap{width:108px;height:108px;position:relative;margin-bottom:22px;flex-shrink:0;}
        .hww-ring{position:absolute;inset:0;border-radius:50%;border:1.5px dashed rgba(237,131,55,0.25);animation:hww-rs 14s linear infinite;}
        .hww-ring::before{content:'';position:absolute;top:-4px;left:50%;transform:translateX(-50%);width:7px;height:7px;border-radius:50%;background:#ed8337;box-shadow:0 0 10px rgba(237,131,55,0.7);}
        .hww-step:hover .hww-ring{border-color:rgba(237,131,55,0.55);}
        .hww-disc{position:absolute;inset:12px;border-radius:50%;background:rgba(237,131,55,0.06);border:1px solid rgba(237,131,55,0.15);animation:hww-db 3.5s ease-in-out infinite;}
        .hww-step:hover .hww-disc{background:rgba(237,131,55,0.12);box-shadow:0 0 28px rgba(237,131,55,0.2);}
        .hww-svg{position:absolute;inset:24px;border-radius:50%;background:#004168;border:1.5px solid rgba(237,131,55,0.3);display:flex;align-items:center;justify-content:center;transition:transform 0.4s,border-color 0.3s;}
        .hww-step:hover .hww-svg{transform:scale(1.12);border-color:rgba(237,131,55,0.6);}
        .hww-svg img{width:28px;height:28px;object-fit:contain;}
        .hww-step-center .hww-ring{border-color:rgba(245,166,107,0.35);}
        .hww-step-center .hww-ring::before{background:#f5a66b;}
        .hww-step-center .hww-svg{border-color:rgba(245,166,107,0.45);}
        .hww-step-center .hww-svg img{opacity:0.85;}
        .hww-step-center .hww-step-title{color:#f5a66b;}
        @keyframes hww-rs{to{transform:rotate(360deg)}}
        @keyframes hww-db{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}
        .hww-arrow{display:none;position:absolute;top:46px;right:-14px;width:28px;height:14px;z-index:3;opacity:0.5;animation:hww-ab 2s ease-in-out infinite;}
        @keyframes hww-ab{0%,100%{opacity:0.3;transform:translateX(0)}50%{opacity:0.7;transform:translateX(3px)}}
        .hww-step-title{font-family:'Poppins',sans-serif;font-size:16px;font-weight:600;color:#f5a66b;line-height:1.35;margin-bottom:14px;}
        .hww-step:hover .hww-step-title{color:#f5a66b;}
        .hww-step-desc{font-family:'DM Sans',sans-serif;font-size:15px;color:rgb(255, 255, 255);line-height:1.8;}
        .hww-step:hover .hww-step-desc{color:rgba(255,255,255,0.6);}
        .hww-cta-row{display:flex;align-items:center;justify-content:center;margin-top:64px;gap:1.6rem;}
        .hww-cta-line{flex:1;max-width:200px;height:1px;background:linear-gradient(90deg,transparent,rgba(237,131,55,0.3),transparent);}
        .hww-cta-btn{display:inline-flex;align-items:center;gap:0.55rem;background:linear-gradient(135deg,#ed8337,#f5a66b);color:#011a2a;padding:0.85rem 2.2rem;border-radius:50px;font-family:'DM Sans',sans-serif;font-size:0.9rem;font-weight:700;text-decoration:none;box-shadow:0 6px 24px rgba(237,131,55,0.38);transition:transform 0.2s,box-shadow 0.2s;}
        .hww-cta-btn:hover{transform:translateY(-3px);box-shadow:0 10px 34px rgba(237,131,55,0.52);}
        .hww-cta-btn svg{width:18px;height:18px;stroke:#011a2a;stroke-width:2;fill:none;}
        @media(max-width:900px){
         .faq-wrapper {display:block;}
        .hww-flow{grid-template-columns:1fr 1fr !important;gap:36px 20px !important;}.hww-flow::before{display:none !important;}}
        @media(max-width:540px){.hww-flow{grid-template-columns:1fr !important;}.hww-arrow{display:none !important;}}
        .faq-head h2 {
          color: #000;
        }
      `}),(0,n.jsx)("div",{className:"hww-bg"}),(0,n.jsx)("div",{className:"hww-orb hww-orb-1"}),(0,n.jsx)("div",{className:"hww-orb hww-orb-2"}),(0,n.jsxs)("div",{style:{position:"relative",zIndex:2,margin:"0 auto"},children:[(0,n.jsxs)("div",{style:{textAlign:"center",marginBottom:"72px"},children:[(0,n.jsx)("div",{className:"partners-header1",children:(0,n.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"center"},children:"How We Work"})}),(0,n.jsxs)("h2",{className:"hww-title",children:["Plan Strategically.  ",(0,n.jsx)("span",{className:"hww-accent",children:"Manage Confidently."})]}),(0,n.jsx)("p",{className:"hww-sub",children:"We create tailored compliance strategies and ensure every regulatory requirement is managed accurately and on time."})]}),(0,n.jsx)("div",{className:"hww-flow",children:f.map((e,i)=>(0,n.jsxs)("div",{className:`hww-step${e.center?" hww-step-center":""}`,children:[(0,n.jsxs)("div",{className:"hww-icon-wrap",children:[(0,n.jsx)("div",{className:"hww-ring",style:i%2==1?{animationDirection:"reverse",animationDuration:"18s"}:{}}),(0,n.jsx)("div",{className:"hww-disc"}),(0,n.jsx)("div",{className:"hww-svg",children:e.icon}),i<3&&(0,n.jsx)("div",{className:"hww-arrow",style:{animationDelay:`${.4*i}s`},children:(0,n.jsx)("svg",{viewBox:"0 0 28 14",fill:"none",children:(0,n.jsx)("path",{d:"M0 7h24M18 2l6 5-6 5",stroke:"#ed8337",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),(0,n.jsx)("div",{className:"hww-step-title",children:e.title}),(0,n.jsx)("div",{className:"hww-step-desc",children:e.desc})]},i))})]})]})}let x=[{q:"What is included in virtual CFO services?",a:"Virtual CFO services include budgeting, financial planning, cash flow management, reporting, compliance, strategic advisory, investment guidance, and performance analysis to drive business growth."},{q:"Which is the best virtual CFO in India?",a:"The best Virtual CFO depends on your business needs, expertise, and industry. Priyam Consultancy Services offers experienced VCFO support tailored for startups, SMEs, and growing businesses."},{q:"What industries can benefit from virtual CFO services?",a:"Startups, SMEs, e-commerce, manufacturing, IT services, retail, and other sectors can benefit from expert financial planning, compliance, and growth strategies provided by a Virtual CFO."},{q:"How can virtual CFOs help start-ups manage their finances?",a:"VCFOs guide startups with budgeting, fundraising, cash flow management, tax planning, and financial reporting, ensuring smart financial decisions and sustainable growth from day one."},{q:"Are virtual CFO services affordable for small businesses?",a:"Yes, Virtual CFO services are cost-effective compared to full-time CFOs. Businesses pay only for the expertise and support they need, saving time and resources."},{q:"What are Virtual CFO (VCFO) services?",a:"VCFO services provide outsourced financial leadership, offering strategic insights, compliance management, reporting, and advisory services without the need for an in-house CFO."}];function b(){let[e,i]=(0,t.useState)(null),a=a=>{i(e===a?null:a)};return(0,n.jsxs)("section",{className:"faq-section",children:[(0,n.jsx)("div",{className:"partners-header2",style:{textAlign:"center",marginTop:"20px"},children:(0,n.jsx)("div",{className:"partners-eyebrow",children:"Frequently Asked Questions"})}),(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"faq-head",children:(0,n.jsxs)("h2",{children:["Queries That Could ",(0,n.jsx)("span",{children:"Hold You Back"})]})}),(0,n.jsxs)("div",{className:"faq-wrapper",children:[(0,n.jsx)("div",{className:"faq-col",children:x.slice(0,3).map((i,t)=>(0,n.jsxs)("div",{className:"faq-item",children:[(0,n.jsxs)("div",{className:"faq-question",onClick:()=>a(t),children:[(0,n.jsx)("span",{children:i.q}),(0,n.jsx)("span",{className:"icon",children:e===t?"\u2212":"+"})]}),e===t&&(0,n.jsx)("div",{className:"faq-answer",children:i.a})]},t))}),(0,n.jsx)("div",{className:"faq-col",children:x.slice(3,6).map((i,t)=>(0,n.jsxs)("div",{className:"faq-item",children:[(0,n.jsxs)("div",{className:"faq-question",onClick:()=>a(t+3),children:[(0,n.jsx)("span",{children:i.q}),(0,n.jsx)("span",{className:"icon",children:e===t+3?"\u2212":"+"})]}),e===t+3&&(0,n.jsx)("div",{className:"faq-answer",children:i.a})]},t+3))})]})]})]})}function w(){return(0,n.jsxs)(o.A,{children:[(0,n.jsx)(l,{}),(0,n.jsx)(d,{}),(0,n.jsx)(g,{}),(0,n.jsx)(h,{}),(0,n.jsx)(u,{}),(0,n.jsx)(b,{}),(0,n.jsx)(r.A,{})]})}}}]);