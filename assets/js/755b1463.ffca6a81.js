"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["7753"],{9393(e,t,a){a.d(t,{A:()=>n});var r=a(4848),i=a(6540);let n=function(){let e=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let t=e.current;if(!t)return;let a=t.getContext("2d"),r="#ed8337",i,n,o=[],s;function l(){i=t.width=t.parentElement.offsetWidth,n=t.height=t.parentElement.offsetHeight}function p(){this.reset()}p.prototype.reset=function(){this.x=Math.random()*i,this.y=Math.random()*n,this.r=2.2*Math.random()+.6,this.type=.55>Math.random()?"dot":.5>Math.random()?"ring":"plus",this.speed=.35*Math.random()+.08,this.dir=Math.random()*Math.PI*2,this.alpha=.45*Math.random()+.1,this.pulse=Math.random()*Math.PI*2,this.pulseSpeed=.018*Math.random()+.008,this.size=4*Math.random()+2},p.prototype.update=function(){this.x+=Math.cos(this.dir)*this.speed,this.y+=Math.sin(this.dir)*this.speed,this.pulse+=this.pulseSpeed,this.dir+=(Math.random()-.5)*.015,this.x<-20&&(this.x=i+20),this.x>i+20&&(this.x=-20),this.y<-20&&(this.y=n+20),this.y>n+20&&(this.y=-20)},p.prototype.draw=function(){let e=this.alpha*(.7+.3*Math.sin(this.pulse));if(a.save(),a.globalAlpha=e,a.strokeStyle=a.fillStyle=r,a.lineWidth=1,"dot"===this.type)a.beginPath(),a.arc(this.x,this.y,this.r+.4*Math.sin(this.pulse),0,2*Math.PI),a.fill();else if("ring"===this.type){let e=this.size*(.9+.15*Math.sin(this.pulse));a.beginPath(),a.arc(this.x,this.y,e,0,2*Math.PI),a.stroke()}else{let e=this.size*(.9+.1*Math.sin(this.pulse));a.beginPath(),a.moveTo(this.x-e,this.y),a.lineTo(this.x+e,this.y),a.moveTo(this.x,this.y-e),a.lineTo(this.x,this.y+e),a.stroke()}a.restore()},window.addEventListener("resize",l),l(),o=[];let d=Math.floor(i*n/9e3);for(let e=0;e<Math.max(d,28);e++)o.push(new p);return!function e(){a.clearRect(0,0,i,n),function(){let e=o.filter(e=>"dot"===e.type);for(let t=0;t<e.length;t++)for(let i=t+1;i<e.length;i++){let n=e[t].x-e[i].x,o=e[t].y-e[i].y,s=Math.sqrt(n*n+o*o);s<110&&(a.save(),a.globalAlpha=(1-s/110)*.12,a.strokeStyle=r,a.lineWidth=.7,a.beginPath(),a.moveTo(e[t].x,e[t].y),a.lineTo(e[i].x,e[i].y),a.stroke(),a.restore())}}(),o.forEach(e=>{e.update(),e.draw()}),s=requestAnimationFrame(e)}(),()=>{cancelAnimationFrame(s),window.removeEventListener("resize",l)}},[]),(0,r.jsx)("section",{id:"cta-final",children:(0,r.jsxs)("div",{className:"cta-banner",style:{"--glow-x":"50%","--glow-y":"50%"},children:[(0,r.jsx)("canvas",{id:"ctaCanvas",ref:e}),(0,r.jsxs)("div",{className:"cta-banner-left",children:[(0,r.jsx)("div",{className:"partners-header",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Ready to Start?"})}),(0,r.jsxs)("h2",{className:"cta-banner-heading",children:["Let's Talk About Your",(0,r.jsx)("br",{}),"Next Big ",(0,r.jsx)("span",{className:"hl-italic",children:"Growth Move"})]}),(0,r.jsx)("p",{className:"cta-banner-sub",children:"No pressure. Just a quick conversation to understand where you are-and how we can help you move forward."})]}),(0,r.jsxs)("div",{className:"cta-banner-right",children:[(0,r.jsxs)("a",{href:"#",className:"cta-bprimary",children:["Book a Free Consultation",(0,r.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",children:(0,r.jsx)("path",{d:"M3 8h10M9 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,r.jsx)("a",{href:"#",className:"cta-bghost",children:"View All Services"})]})]})})}},5155(e,t,a){a.r(t),a.d(t,{default:()=>y});var r=a(4848),i=a(6540),n=a(8128),o=a(9393),s=a(1085),l=a(3572);function p(){let e="https://www.priyamconsultancy.com/healthcare/",t="https://www.pcsbusinesssolution.com/img/2.webp";return(0,r.jsxs)(l.A,{children:[(0,r.jsx)("title",{children:"Healthcare Digital Marketing Company for Hospitals & Clinics"}),(0,r.jsx)("meta",{name:"description",content:"Grow your healthcare business with expert digital marketing, website development, and HR solutions. Attract more patients and scale with confidence."}),(0,r.jsx)("meta",{name:"keywords",content:"Healthcare Digital Marketing Company, Healthcare Website Development, HR Solutions for Healthcare, Healthcare workforce management , Payroll In Hospitals & Healthcare, healthcare digital marketing agency, healthcare website development services, Best Hospital Website Development Company"}),(0,r.jsx)("link",{rel:"canonical",href:e}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:title",content:"Healthcare Digital Marketing Company for Hospitals & Clinics"}),(0,r.jsx)("meta",{property:"og:description",content:"Grow your healthcare business with expert digital marketing, website development, and HR solutions. Attract more patients and scale with confidence."}),(0,r.jsx)("meta",{property:"og:url",content:e}),(0,r.jsx)("meta",{property:"og:image",content:t}),(0,r.jsx)("meta",{property:"og:site_name",content:"PCS Business Solution"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:"Healthcare Digital Marketing Company for Hospitals & Clinics"}),(0,r.jsx)("meta",{name:"twitter:description",content:"Grow your healthcare business with expert digital marketing, website development, and HR solutions. Attract more patients and scale with confidence."}),(0,r.jsx)("meta",{name:"twitter:image",content:t}),[{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":"https://www.priyamconsultancy.com/",name:"Home"}},{"@type":"ListItem",position:2,item:{"@id":"https://www.priyamconsultancy.com/healthcare/",name:"healthcare"}}]},{"@context":"https://schema.org","@type":"Organization",name:"Priyam Consultancy Services",url:"https://www.priyamconsultancy.com/",logo:"https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png",contactPoint:[{"@type":"ContactPoint",telephone:"+91 96774 44048",contactType:"customer support"}],sameAs:["https://www.facebook.com/profile.php?id=61577125709962","https://www.linkedin.com/company/priyam-consultancy-services/","https://www.instagram.com/priyam_consultancy_services/","https://x.com/services91032","https://g.co/kgs/rdTYdi6"]},{"@context":"https://schema.org","@type":"Service","@id":"https://www.priyamconsultancy.com/healthcare/#service",name:"Healthcare Industry Services",serviceType:"Business Solutions for Healthcare Industry",url:"https://www.priyamconsultancy.com/healthcare/",description:"Priyam Consultancy provides digital marketing, website development, HR services, payroll management, business registration, statutory compliance, Virtual CFO services, accounting and business consulting solutions tailored for healthcare providers, clinics, hospitals and medical organizations across India.",provider:{"@type":"Organization",name:"Priyam Consultancy Services",url:"https://www.priyamconsultancy.com/",logo:{"@type":"ImageObject",url:"https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png"}},areaServed:{"@type":"Country",name:"India"}},{"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"Why does a healthcare clinic/hospital need digital marketing?",acceptedAnswer:{"@type":"Answer",text:"Digital marketing helps healthcare providers improve online visibility, build patient trust, promote healthcare services, and attract new patients. It supports appointment generation, strengthens local search presence, and helps clinics and hospitals communicate effectively with patients across digital platforms."}},{"@type":"Question",name:"How can social media marketing help healthcare businesses?",acceptedAnswer:{"@type":"Answer",text:"Social media marketing helps healthcare businesses improve patient engagement, increase awareness about treatments and services, share health-related information, and build credibility. It also supports brand visibility, patient communication, and targeted campaigns that help attract relevant healthcare audiences online."}},{"@type":"Question",name:"What features should a healthcare website have?",acceptedAnswer:{"@type":"Answer",text:"A healthcare website should include service information, doctor profiles, online appointment booking, contact details, patient testimonials, mobile responsiveness, SEO optimization, secure patient communication, and easy navigation. These features improve patient experience, accessibility, trust, and overall engagement with healthcare services."}},{"@type":"Question",name:"Can you build a website with online appointment booking?",acceptedAnswer:{"@type":"Answer",text:"Yes, we develop healthcare websites with integrated online appointment booking systems, patient enquiry forms, doctor schedules, automated confirmations, and user-friendly interfaces. These features help healthcare providers streamline patient management, improve accessibility, and enhance overall patient convenience and operational efficiency."}},{"@type":"Question",name:"What HR services do healthcare providers need?",acceptedAnswer:{"@type":"Answer",text:"Healthcare providers typically require recruitment, payroll management, compliance management, attendance tracking, workforce planning, onboarding, shift scheduling, and HR policy support. These services help manage medical and non-medical staff efficiently while ensuring compliance with healthcare and labor regulations."}},{"@type":"Question",name:"How does payroll management work for medical staff?",acceptedAnswer:{"@type":"Answer",text:"Payroll management for medical staff includes salary processing, shift calculations, overtime management, statutory deductions, attendance tracking, incentive handling, and compliance reporting. Structured payroll systems ensure accurate payments, reduce administrative workload, and maintain smooth workforce operations within healthcare organizations."}}]}].map((e,t)=>(0,r.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)},t))]})}let d=`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

  :root {
    --navy: #004168;
    --navy-deep: #002a44;
    --navy-mid: #0a5282;
    --orange: #ed8337;
    --orange-light: #f5a66b;
    --text-dim: rgba(255,255,255,0.45);
    --glass: rgba(255,255,255,0.04);
    --glass-border: rgba(255,255,255,0.09);
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'Poppins', sans-serif; background: var(--navy); color: #fff; overflow-x: hidden; }
li.dropdown.mega {
    color: black;
}

.left {
    width: 100%;
}
  /* HERO */
  .hero {
    // min-height: 100vh;
    display: grid; grid-template-columns: 1fr 1fr;
    align-items: center; gap: 3rem;
    padding: 4rem 6% 2rem;
    position: relative; overflow: hidden;
    background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 60%, var(--navy-mid) 100%);
  }
  .hero::before {
    content:''; position:absolute; inset:0; pointer-events:none;
    background-image: linear-gradient(rgba(237,131,55,0.04) 1px,transparent 1px), linear-gradient(90deg,rgba(237,131,55,0.04) 1px,transparent 1px);
    background-size: 60px 60px;
    animation: grid-drift 20s linear infinite;
  }
  .hero::after {
    content:''; position:absolute; inset:0; pointer-events:none;
    background: radial-gradient(ellipse 60% 70% at 80% 50%, rgba(237,131,55,0.09) 0%, transparent 65%),
                radial-gradient(ellipse 50% 60% at 0% 0%, rgba(0,42,68,0.6) 0%, transparent 55%);
  }
  @keyframes grid-drift { from{background-position:0 0;} to{background-position:60px 60px;} }
  .hero-left { position:relative; z-index:2; }
  .badge {
    display:inline-flex; align-items:center; gap:.5rem;
    background:rgba(237,131,55,0.1); border:1px solid rgba(237,131,55,0.28);
    color:var(--orange); font-size:0.72rem; font-weight:700;
    padding:.38rem 1rem; border-radius:50px; letter-spacing:.09em; text-transform:uppercase;
    margin-bottom:1.4rem; animation:fadeUp .6s ease both;
  }
  .badge-dot { width:6px; height:6px; border-radius:50%; background:var(--orange); animation:pulse-dot 1.6s infinite; }
  @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:.4;transform:scale(1.5);} }
  .hero-heading {
    font-family:'Poppins',sans-serif;
    font-size:clamp(2rem,3.6vw,3.4rem);
    font-weight:800; line-height:1.1; letter-spacing:-.02em;
    margin-bottom:1.4rem; animation:fadeUp .7s .08s ease both;
  }
  .hero-heading .orange { color:var(--orange); }
  .hero-desc {
    font-size:.97rem; line-height:1.8; color:rgba(255,255,255,0.65);
    margin-bottom:2rem; max-width:500px; animation:fadeUp .7s .16s ease both;
  }
  .btn-fill {
    display:inline-flex; align-items:center; gap:.5rem;
    background:var(--orange); color:var(--navy);
    padding:.85rem 2rem; border-radius:50px;
    font-family:'Poppins',sans-serif; font-size:.92rem; font-weight:700;
    text-decoration:none; transition:all .22s;
    box-shadow:0 4px 22px rgba(237,131,55,.32);
    animation:fadeUp .7s .26s ease both; cursor:pointer; border:none;
  }
  .btn-fill:hover { background:var(--orange-light); transform:translateY(-2px); box-shadow:0 8px 30px rgba(237,131,55,.45); }
  @keyframes fadeUp { from{opacity:0;transform:translateY(26px);} to{opacity:1;transform:translateY(0);} }
  .hero-right {
    position:relative; z-index:2;
    display:flex; align-items:center; justify-content:center;
    animation:fadeUp .9s .15s ease both;
  }
  @media(max-width:900px){
    .hero{grid-template-columns:1fr;padding:7rem 5% 5rem;text-align:start;}
    .badge{margin:0 auto 1.4rem;}
  }

  /* ABOUT */
  .ap-section { position:relative; padding:7rem 6%; overflow:hidden; background:#ffffff; }
  .ap-bg { position:absolute; inset:0; pointer-events:none; z-index:0;
    background: radial-gradient(ellipse 60% 55% at 10% 20%, rgba(237,131,55,0.07) 0%, transparent 65%),
                radial-gradient(ellipse 50% 60% at 90% 80%, rgba(0,65,104,0.05) 0%, transparent 60%); }
  .ap-grid { position:absolute; inset:0; pointer-events:none; z-index:0;
    background-image: linear-gradient(rgba(0,65,104,0.03) 1px,transparent 1px), linear-gradient(90deg,rgba(0,65,104,0.03) 1px,transparent 1px);
    background-size: 64px 64px; }
  .ap-inner { position:relative; z-index:2; max-width:1200px; margin:0 auto;
    display:grid; grid-template-columns:1fr 1fr; gap:4rem; align-items:start; }
  .ap-eyebrow { display:inline-flex; align-items:center; gap:.5rem;
    font-family:'Poppins',sans-serif; font-size:.75rem; font-weight:700;
    color:var(--orange); letter-spacing:.12em; text-transform:uppercase; margin-bottom:1.2rem; }
  .ap-eyebrow-line { width:28px; height:2px; background:var(--orange); border-radius:2px; }
  .ap-heading { font-family:'Poppins',sans-serif; font-size:clamp(1.9rem,2.8vw,2.8rem);
    font-weight:800; line-height:1.12; letter-spacing:-.025em; color:#0d1f2d; margin-bottom:1.2rem; }
  .ap-heading span { color:var(--orange); }
  .ap-intro { font-size:.97rem; line-height:1.82; color:#5a6a7a; margin-bottom:.9rem; max-width:520px; }
  .ap-steps { display:flex; flex-direction:column; gap:1rem; margin-top:1.2rem; }
  .ap-step { display:flex; align-items:flex-start; gap:1.1rem;
    background:#fff; border:1px solid rgba(0,65,104,0.07);
    border-radius:16px; padding:1.2rem 1.4rem;
    box-shadow:0 2px 12px rgba(0,0,0,0.04);
    transition:transform .28s,box-shadow .28s,border-color .28s; }
  .ap-step:hover { transform:translateX(6px); box-shadow:0 6px 28px rgba(237,131,55,0.12); border-color:rgba(237,131,55,0.3); }
  .step-icon { width:44px; height:44px; flex-shrink:0; border-radius:12px;
    background:rgba(237,131,55,0.10); color:var(--orange);
    display:flex; align-items:center; justify-content:center; font-size:1.2rem;
    transition:background .28s,color .28s; }
  .ap-step:hover .step-icon { background:var(--orange); color:#fff; }
  .step-body { flex:1; }
  .step-title { font-family:'Poppins',sans-serif; font-size:.95rem; font-weight:700; color:#0d1f2d; margin-bottom:.2rem; }
  .step-desc { font-size:.86rem; line-height:1.65; color:#6b7a8d; }
  .ap-form-wrap { position:relative; }
  .ap-form-wrap::before { content:''; position:absolute; inset:12px -10px -10px 10px;
    background:linear-gradient(135deg,var(--orange),var(--orange-light));
    border-radius:24px; opacity:.18; z-index:0; }
  .ap-form-card { position:relative; z-index:1; background:#fff;
    border-radius:22px; padding:2.6rem 2.2rem;
    box-shadow:0 12px 48px rgba(0,0,0,0.09);
    border:1px solid rgba(237,131,55,0.12); }
  .form-card-header { text-align:center; margin-bottom:1.8rem; }
  .form-card-title { font-family:'Poppins',sans-serif; font-size:1.3rem; font-weight:800; color:#0d1f2d; margin-bottom:.3rem; }
  .form-card-sub { font-size:.88rem; color:#7a8a9a; }
  .fl-group { position:relative; margin-bottom:1.1rem; }
  .fl-input { width:100%; padding:.82rem 1.1rem; background:#f7f9fc;
    border:1.5px solid rgba(0,65,104,0.1); border-radius:10px;
    font-family:'Poppins',sans-serif; font-size:.92rem; color:#0d1f2d;
    outline:none; transition:border-color .25s,box-shadow .25s; }
  .fl-input:focus { border-color:var(--orange); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
  .fl-group label { position:absolute; top:50%; left:1.1rem; transform:translateY(-50%);
    font-size:.88rem; color:#9aabb8; pointer-events:none; transition:all .22s; }
  .fl-input:not(:placeholder-shown) ~ label,
  .fl-input:focus ~ label { top:-.52rem; font-size:.72rem; color:var(--orange); background:#fff; padding:0 .3rem; left:.85rem; }
  .phone-row { display:flex; gap:.6rem; align-items:center; }
  .phone-flag-btn { display:flex; align-items:center; gap:.3rem;
    padding:.82rem .9rem; background:#f7f9fc;
    border:1.5px solid rgba(0,65,104,0.1); border-radius:10px;
    font-size:.88rem; color:#0d1f2d; white-space:nowrap; }
  .phone-row .fl-input { flex:1; }
  .fl-textarea { width:100%; padding:1rem 1.1rem; background:#f7f9fc;
    border:1.5px solid rgba(0,65,104,0.1); border-radius:10px;
    font-family:'Poppins',sans-serif; font-size:.92rem; color:#0d1f2d;
    outline:none; resize:none; min-height:90px; transition:border-color .25s,box-shadow .25s; }
  .fl-textarea:focus { border-color:var(--orange); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
  .ap-submit { width:100%; padding:.9rem; background:var(--orange); color:var(--navy);
    border:none; border-radius:10px; font-family:'Poppins',sans-serif;
    font-size:.95rem; font-weight:700; cursor:pointer;
    transition:background .22s,transform .18s,box-shadow .22s;
    box-shadow:0 4px 18px rgba(237,131,55,0.28); }
  .ap-submit:hover { background:var(--orange-light); transform:translateY(-2px); box-shadow:0 8px 28px rgba(237,131,55,0.38); }
  @media(max-width:900px){ .ap-inner{grid-template-columns:1fr;} }

  /* WHY PCS (Section 3) */
  .why-section { position:relative; padding:7rem 6%; overflow:hidden; background:#08456b; }
  .why-section::before { content:none; }
  .why-particles { position:absolute; inset:0; overflow:hidden; pointer-events:none; z-index:1; }
  .why-p { position:absolute; border-radius:50%; opacity:0.12; animation:fp 7s ease-in-out infinite; }
  .why-p:nth-child(1){ width:90px;height:90px;background:var(--orange);top:10%;left:5%;animation-delay:0s; }
  .why-p:nth-child(2){ width:60px;height:60px;background:#60a5fa;top:60%;left:15%;animation-delay:1.5s; }
  .why-p:nth-child(3){ width:110px;height:110px;background:var(--navy-mid);top:20%;right:8%;animation-delay:0.8s; }
  .why-p:nth-child(4){ width:50px;height:50px;background:#34d399;bottom:15%;right:18%;animation-delay:2.2s; }
  .why-p:nth-child(5){ width:75px;height:75px;background:var(--orange-light);bottom:30%;left:40%;animation-delay:1s; }
  @keyframes fp { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(-22px) scale(1.1);} }
  .why-section::after {
    content:''; position:absolute; inset:0; pointer-events:none; z-index:0;
    background: radial-gradient(ellipse 50% 60% at 90% 20%, rgba(237,131,55,0.12) 0%, transparent 60%),
                radial-gradient(ellipse 40% 50% at 5% 80%, rgba(10,82,130,0.35) 0%, transparent 55%);
  }
  .why-inner { position:relative; z-index:2; margin:0 auto; }
  .why-top-header { text-align:center; margin-bottom:3.5rem; }
  .why-eyebrow { display:inline-block; font-size:.72rem; font-weight:700; color:var(--orange);
    letter-spacing:.18em; text-transform:uppercase; margin-bottom:.9rem;
    background:rgba(237,131,55,0.1); border:1px solid rgba(237,131,55,0.28);
    padding:.3rem .9rem; border-radius:50px; }
  .why-heading { font-family:'Poppins',sans-serif; font-size:clamp(1.8rem,2.8vw,2.7rem);
    font-weight:700; line-height:1.1; color:#fff; margin-bottom:1rem; }
  .why-heading span { color:var(--orange); }
.why-desc { font-size:.95rem; line-height:1.82; color:rgba(255, 255, 255, 0.94); margin:0 auto; padding-top:15px;}
  .why-stats-row { display:grid; grid-template-columns:repeat(4,1fr); gap:1.2rem; margin-bottom:3rem; }
  .why-stat-pill { background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1);
    border-radius:16px; padding:1.6rem 1.4rem; text-align:center;
    transition:background .28s, border-color .28s, transform .28s; position:relative; overflow:hidden; }
  .why-stat-pill::before { content:''; position:absolute; top:0; left:0; right:0; height:2px;
    background:linear-gradient(90deg,var(--orange),var(--orange-light)); opacity:0; transition:opacity .28s; }
  .why-stat-pill:hover { background:rgba(237,131,55,0.08); border-color:rgba(237,131,55,0.35); transform:translateY(-4px); }
  .why-stat-pill:hover::before { opacity:1; }
  .why-stat-num { font-family:'Poppins',sans-serif; font-size:2.2rem; font-weight:800; color:var(--orange); line-height:1; margin-bottom:.35rem; }
  .why-stat-lbl { font-size:.72rem; color:rgba(255,255,255,0.5); letter-spacing:.06em; font-weight:600; text-transform:uppercase; }
  .why-cards-row { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; }
  .why-feat-card { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.09);
    border-radius:20px; padding:2rem; display:flex; align-items:flex-start; gap:1.4rem;
    transition:background .3s, border-color .3s, transform .3s; position:relative; overflow:hidden; }
  .why-feat-card:hover { background:rgba(255,255,255,0.07); border-color:rgba(237,131,55,0.28); transform:translateY(-4px); }
  .why-feat-icon-wrap { width:52px; height:52px; border-radius:14px; flex-shrink:0;
    background:linear-gradient(135deg,rgba(237,131,55,0.2),rgba(237,131,55,0.08));
    border:1.5px solid rgba(237,131,55,0.3);
    display:flex; align-items:center; justify-content:center; font-size:1.4rem; }
  .why-feat-title { font-family:'Poppins',sans-serif; font-size:1.05rem; font-weight:800; color:#fff; margin-bottom:.4rem; }
  .why-feat-desc { font-size:.875rem; line-height:1.72; color:rgba(255,255,255,0.5); }
  @media(max-width:900px){ .why-stats-row{grid-template-columns:1fr 1fr;} .why-cards-row{grid-template-columns:1fr;} }

  /* PCS SECTION (Why Businesses Choose) */
  .pcs-section { position:relative; padding:7rem 6%; overflow:hidden;
    background:linear-gradient(135deg,var(--navy-deep) 0%,#003558 40%,var(--navy-mid) 100%); }
  .pcs-section::before {
    content:''; position:absolute; inset:0; pointer-events:none;
    background: linear-gradient(135deg,rgba(237,131,55,0.06) 25%,transparent 25%) -60px 0,
      linear-gradient(225deg,rgba(237,131,55,0.06) 25%,transparent 25%) -60px 0,
      linear-gradient(315deg,rgba(237,131,55,0.06) 25%,transparent 25%),
      linear-gradient(45deg,rgba(237,131,55,0.06) 25%,transparent 25%);
    background-size:120px 120px;
  }
  .pcs-section::after {
    content:''; position:absolute; inset:0; pointer-events:none;
    background: radial-gradient(ellipse 60% 55% at 5% 50%,rgba(237,131,55,0.1) 0%,transparent 55%),
                radial-gradient(ellipse 55% 60% at 95% 50%,rgba(10,82,130,0.4) 0%,transparent 55%);
  }
  .pcs-inner { position:relative; z-index:2; max-width:1200px; margin:0 auto; }
  .pcs-header { text-align:center; margin-bottom:3.5rem; display:flex; flex-direction:column; align-items:center; }
  .pcs-tag { font-family:'Poppins',sans-serif; font-size:.68rem; letter-spacing:.2em;
    text-transform:uppercase; color:var(--orange); background:rgba(237,131,55,0.12);
    padding:.3rem .8rem; border-radius:4px; display:inline-block; margin-bottom:1rem;
    border:1px solid rgba(237,131,55,0.28); align-self:center; }
  .pcs-h2 { font-family:'Poppins',sans-serif; font-size:clamp(1.8rem,2.8vw,2.5rem); font-weight:700; color:#fff; line-height:1.1; margin-bottom:1rem; text-align:center; }
  .pcs-h2 span { color:var(--orange); }
  .pcs-lead { font-size:.95rem; line-height:1.8; color:rgb(255, 255, 255);  margin:0 auto; text-align:center; }
  .pcs-radial-layout { display:grid; grid-template-columns:1fr 340px 1fr; gap:0; align-items:center;  margin:0 auto; }
  .pcs-radial-col { display:flex; flex-direction:column; gap:2.4rem; padding:1rem 0; }
  .pcs-radial-col.right { align-items:flex-start; padding-left:90px; }
  .pcs-radial-col.left { align-items:flex-end; padding-right:90px; }
  .pcs-point { display:flex; align-items:flex-start; gap:1.1rem; max-width:310px; position:relative; }
  .pcs-radial-col.left .pcs-point { flex-direction:row-reverse; text-align:right; }
  .pcs-radial-col.left .pcs-point-body { align-items:flex-end; display:flex; flex-direction:column; }
  .pcs-point-line { position:absolute; top:22px; width:80px; height:2px; background:linear-gradient(90deg,rgba(237,131,55,0.08),rgba(237,131,55,0.7)); }
  .pcs-radial-col.right .pcs-point-line { left:-85px; }
  .pcs-radial-col.left .pcs-point-line { right:-85px; left:auto; background:linear-gradient(270deg,rgba(237,131,55,0.08),rgba(237,131,55,0.7)); }
  .pcs-point-icon-wrap { width:46px; height:46px; border-radius:12px; flex-shrink:0;
    display:flex; align-items:center; justify-content:center; font-size:1.3rem; border:1.5px solid;
    transition:transform .3s, box-shadow .3s; }
  .pcs-point:hover .pcs-point-icon-wrap { transform:scale(1.12); box-shadow:0 6px 20px rgba(0,0,0,0.3); }
  .pcs-point-num { font-family:'Poppins',sans-serif; font-size:.65rem; font-weight:700; letter-spacing:.2em;
    text-transform:uppercase;  margin-bottom:.5rem; display:block; }
  .pcs-point-title { font-family:'Poppins',sans-serif; font-size:.95rem; font-weight:600; color:#ed8337; margin-bottom:.7rem; line-height:1.2; }
  .pcs-point-desc { font-size:.84rem; line-height:1.7; color:rgba(255, 255, 255, 0.91); font-family:'Poppins',sans-serif; }
  .pcs-radial-center { display:flex; align-items:center; justify-content:center; position:relative; }
  .pcs-center-ring-outer { width:300px; height:300px; border-radius:50%; position:relative;
    display:flex; align-items:center; justify-content:center;
    border:1.5px solid rgba(237,131,55,0.18);  }
  @keyframes slow-spin { to{transform:rotate(360deg);} }
  .pcs-center-ring-outer::before,.pcs-center-ring-outer::after { content:''; position:absolute; width:10px; height:10px; border-radius:50%; background:var(--orange); opacity:0.7; }
  .pcs-center-ring-outer::before { top:-5px; left:50%; transform:translateX(-50%); }
  .pcs-center-ring-outer::after { bottom:-5px; left:50%; transform:translateX(-50%); }
  .pcs-center-ring-inner { width:230px; height:230px; border-radius:50%;
    border:1.5px dashed rgba(255,255,255,0.08);
    display:flex; align-items:center; justify-content:center;
     }
  .pcs-center-hub { width:170px; height:170px; border-radius:50%;
    background:linear-gradient(135deg,rgba(237,131,55,0.18) 0%,rgba(0,65,104,0.5) 100%);
    border:2px solid rgba(237,131,55,0.35);
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    text-align:center; padding:1rem;
    box-shadow:0 0 60px rgba(237,131,55,0.15),inset 0 0 40px rgba(0,0,0,0.2); }
  .pcs-center-emoji { font-size:2rem; margin-bottom:.4rem; }
  .pcs-center-label { font-family:'Poppins',sans-serif; font-size:.75rem; font-weight:800; color:#fff; line-height:1.3; }
  .pcs-center-sub { font-size:.6rem; color:var(--orange); font-weight:700; letter-spacing:.1em; text-transform:uppercase; margin-top:.2rem; }
  @media(max-width:900px){
    .pcs-radial-layout {
      grid-template-columns: 1fr !important;
      gap: 0rem !important;
    }
    /* Center ring goes first (order:0), then left col (order:1), then right col (order:2) */
    .pcs-radial-center { order:0 !important; }
    .pcs-radial-col.left { order:1 !important; align-items:flex-start !important; padding-right:0 !important; }
    .pcs-radial-col.right { order:2 !important; align-items:flex-start !important; padding-left:0 !important; }
    /* Fix left col cards direction */
    .pcs-radial-col.left .pcs-point { flex-direction:row !important; text-align:left !important; }
    .pcs-radial-col.left .pcs-point-body { align-items:flex-start !important; display:flex !important; flex-direction:column !important; }
    .pcs-point-line { display:none !important; }
    .pcs-center-ring-outer { width:220px; height:220px; }
    .pcs-center-ring-inner { width:170px; height:170px; }
    .pcs-center-hub { width:130px; height:130px; }
    /* Make all points consistent left-align */
    .pcs-point { max-width:100% !important; }
  }

  /* CHALLENGES */
  #why-choose { background:#ffffff !important; }
  #why-choose .why-heading { color:#000; }
  #why-choose .why-eyebrow { color:var(--orange); border-color:rgba(237,131,55,0.28); }
  #why-choose .why-desc { color:#5a6a7a; }
  .chal-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.4rem; margin-bottom:1.4rem; }
  .chal-grid-2 { display:grid; grid-template-columns:repeat(2,1fr); gap:1.4rem; max-width:68%; margin:0 auto; }
  .chal-num-tag { font-family:'Poppins',sans-serif; font-size:.55rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; margin-bottom:.3rem; }
  .chal-card-title { font-family:'Poppins',sans-serif; font-size:.97rem; font-weight:600; color:#0d1f2d; line-height:1.25; margin-bottom:.4rem; }
  .chal-card-desc { font-size:.86rem; line-height:1.72; color:#000; font-family:'Poppins',sans-serif; }
  .chal-card {
    display:flex; align-items:center; gap:1.4rem;
    border-radius:18px; padding:1.6rem;
    border-left-width:4px; border-left-style:solid;
    border-top:1px solid; border-right:1px solid; border-bottom:1px solid;
    transition:transform .3s, background .3s, box-shadow .3s;
    position:relative; overflow:hidden;
  }
  .chal-card:hover { transform:translateX(6px); box-shadow:0 8px 32px rgba(0,0,0,0.1); }
  .chal-card-icon { flex-shrink:0; width:60px; height:60px; }
  .chal-card-body { flex:1; }

  /* Color variants */
  .chal-c1 { background:rgba(237,131,55,0.06); border-left-color:var(--orange); border-top-color:rgba(237,131,55,0.18); border-right-color:rgba(237,131,55,0.18); border-bottom-color:rgba(237,131,55,0.18); }
  .chal-c1:hover { background:rgba(237,131,55,0.1); box-shadow:0 8px 32px rgba(237,131,55,0.12); }
  .chal-c1 .chal-num-tag { color:rgba(237,131,55,0.7); }

  .chal-c2 { background:rgba(237,131,55,0.06); border-left-color:var(--orange); border-top-color:rgba(237,131,55,0.18); border-right-color:rgba(237,131,55,0.18); border-bottom-color:rgba(237,131,55,0.18); }
  .chal-c2:hover { background:rgba(237,131,55,0.1); box-shadow:0 8px 32px rgba(237,131,55,0.12); }
  .chal-c2 .chal-num-tag { color:rgba(237,131,55,0.7); }

  .chal-c3 { background:rgba(237,131,55,0.06); border-left-color:var(--orange); border-top-color:rgba(237,131,55,0.18); border-right-color:rgba(237,131,55,0.18); border-bottom-color:rgba(237,131,55,0.18); }
  .chal-c3:hover { background:rgba(237,131,55,0.1); box-shadow:0 8px 32px rgba(237,131,55,0.12); }
  .chal-c3 .chal-num-tag {  color:rgba(237,131,55,0.7); }

  .chal-c4 { background:rgba(237,131,55,0.06); border-left-color:var(--orange); border-top-color:rgba(237,131,55,0.18); border-right-color:rgba(237,131,55,0.18); border-bottom-color:rgba(237,131,55,0.18); }
  .chal-c4:hover { background:rgba(237,131,55,0.1); box-shadow:0 8px 32px rgba(237,131,55,0.12); }
  .chal-c4 .chal-num-tag {  color:rgba(237,131,55,0.7);}

  .chal-c5 { background:rgba(237,131,55,0.06); border-left-color:var(--orange); border-top-color:rgba(237,131,55,0.18); border-right-color:rgba(237,131,55,0.18); border-bottom-color:rgba(237,131,55,0.18); }
  .chal-c5:hover { background:rgba(237,131,55,0.1); box-shadow:0 8px 32px rgba(237,131,55,0.12); }
  .chal-c5 .chal-num-tag {  color:rgba(237,131,55,0.7); }

  .chal-icon { display:block; width:58px; height:58px; flex-shrink:0; }

  @media(max-width:1024px){ .chal-grid{grid-template-columns:1fr 1fr;} .chal-grid-2{grid-template-columns:1fr 1fr;max-width:100%;} }
  @media(max-width:640px){ .chal-grid,.chal-grid-2{grid-template-columns:1fr;max-width:100%;} .chal-card{flex-direction:row;} }

  /* CASE STUDY */
  .cs-section { position:relative; padding:7rem 6%; overflow:hidden;
    background:linear-gradient(135deg,var(--navy-deep) 0%,#003558 45%,var(--navy-mid) 100%); }
  .cs-section::before { content:''; position:absolute; inset:0; pointer-events:none;
    background-image:radial-gradient(circle,rgba(255,255,255,0.035) 1px,transparent 1px); background-size:34px 34px; }
  .cs-section::after { content:''; position:absolute; inset:0; pointer-events:none;
    background: radial-gradient(ellipse 55% 60% at 5% 50%,rgba(237,131,55,0.09) 0%,transparent 60%),
                radial-gradient(ellipse 50% 55% at 95% 30%,rgba(10,82,130,0.35) 0%,transparent 55%); }
  .cs-inner { position:relative; z-index:2; max-width:1100px; margin:0 auto; }
  .cs-eyebrow { display:inline-flex; align-items:center; gap:.5rem; font-size:.72rem; font-weight:700; color:var(--orange);
    letter-spacing:.18em; text-transform:uppercase; margin-bottom:1rem;
    background:rgba(237,131,55,0.1); border:1px solid rgba(237,131,55,0.28); padding:.3rem .9rem; border-radius:50px; }
  .cs-header { text-align:center; margin-bottom:3.5rem; }
  .cs-h2 { font-family:'Poppins',sans-serif; font-size:clamp(1.9rem,2.8vw,2.7rem); font-weight:700; color:#fff; line-height:1.1;  margin-bottom:.8rem; }
  .cs-h2 span { color:var(--orange); }
  .cs-lead { font-size:.95rem; line-height:1.82; color:rgba(255, 255, 255, 0.93);  margin:0 auto; padding-top:15px; }
  .cs-quote-wrap { position:relative; text-align:center; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.09);
    border-radius:28px; padding:3.5rem 4rem 3rem; margin-bottom:3rem; overflow:hidden; }
  .cs-quote-wrap::before { content:''; position:absolute; inset:0; pointer-events:none; background:linear-gradient(135deg,rgba(237,131,55,0.06) 0%,transparent 60%); }
  .cs-q-mark { font-family:'Poppins',sans-serif; font-size:10rem; font-weight:900; line-height:.6;
    color:rgba(237,131,55,0.14); position:absolute; top:1.2rem; left:2.5rem; pointer-events:none; user-select:none; }
  .cs-q-mark-r { font-family:'Poppins',sans-serif; font-size:10rem; font-weight:900; line-height:.6;
    color:rgba(237,131,55,0.1); position:absolute; bottom:1.2rem; right:2.5rem; pointer-events:none; user-select:none; }
  .cs-quote-text { font-family:'Poppins',sans-serif; font-size:clamp(1.1rem,2vw,1.5rem); font-weight:700;
    color:#fff; line-height:1.55; letter-spacing:-.01em; position:relative; z-index:2; max-width:720px; margin:0 auto 1.5rem; }
  .cs-quote-text em { color:var(--orange); font-style:normal; }
  .cs-quote-attr { display:inline-flex; align-items:center; gap:.6rem; font-size:.94rem; font-style: italic; font-weight:600; color:rgba(255, 255, 255, 0.94);
    letter-spacing:.08em; position:relative; z-index:2; }
  .cs-quote-line { width:32px; height:2px; background:var(--orange); border-radius:2px; }

  /* ===== GLOBAL RESPONSIVE ===== */
  @media(max-width:1024px){
    .hero { padding:7rem 5% 4rem; gap:2rem; }
    .ap-inner { gap:2.5rem; }
    .pcs-radial-layout { grid-template-columns:1fr; gap:2.5rem; }
    .pcs-radial-col.left, .pcs-radial-col.right { align-items:flex-start; padding-left:0; padding-right:0; }
    .pcs-radial-col.left .pcs-point { flex-direction:row; text-align:left; }
    .pcs-radial-col.left .pcs-point-body { align-items:flex-start; }
    .pcs-point-line { display:none; }
    .pcs-radial-center { order:-1; }
  }
  @media(max-width:900px){
    .hero { grid-template-columns:1fr; padding:7rem 5% 5rem; text-align:start; }
    .badge { margin:0 auto 1.4rem; }
    .ap-inner { grid-template-columns:1fr; }
    .why-stats-row { grid-template-columns:1fr 1fr; }
    .why-cards-row { grid-template-columns:1fr; }
    .pcs-center-ring-outer { width:220px; height:220px; }
    .pcs-center-ring-inner { width:170px; height:170px; }
    .pcs-center-hub { width:130px; height:130px; }
  }
  @media(max-width:768px){
    .pcs-nav { padding:1rem 5%; }
    .nav-links { display:none; }
    .nav-btn { display:none; }
    .hero { padding:6rem 5% 4rem; }
    .hero-heading { font-size:clamp(1.8rem,6vw,2.8rem); }
    .ap-section, .why-section, .pcs-section, .cs-section { padding:5rem 5%; }
    .ap-form-card { padding:2rem 1.5rem; }
    .why-stats-row { grid-template-columns:1fr 1fr; gap:1rem; }
    .cs-quote-wrap { padding:2.5rem 2rem 2rem; }
    .cs-q-mark, .cs-q-mark-r { font-size:6rem; }
  }
  @media(max-width:640px){
    .hero { grid-template-columns:1fr; }
    .hero-right { display:none; }
    .ap-intro { font-size:.9rem; }
    .why-stats-row { grid-template-columns:1fr 1fr; }
    .chal-grid { grid-template-columns:1fr; }
    .chal-grid-2 { grid-template-columns:1fr; max-width:100%; }
    .chal-card { gap:1rem; padding:1.3rem; }
    .chal-icon { width:48px; height:48px; }
  }
  @media(max-width:480px){
    .hero-heading { font-size:1.8rem; }
    .ap-heading, .why-heading, .pcs-h2, .cs-h2 { font-size:1.7rem; }
    .why-stats-row { grid-template-columns:1fr 1fr; gap:.8rem; }
    .why-stat-num { font-size:1.7rem; }
    .pcs-point {  gap:.7rem; }
    .pcs-point-body { width:100%; }
    .cs-quote-wrap { padding:2rem 1.2rem; }
    .ap-form-card { padding:1.5rem 1rem; }
  }
@media (max-width: 768px) {
    .faq-wrapper {
        display: block;
    }
}
//   faq  section
.faq-section {background: #fff!important;  }
.faq-head h2 {color: #000}
h3.faq-h3{font-size:2.5rem;  color:#000;}
/* ===== HERO SECTION RESPONSIVE ===== */
.seo-hero-section {
  grid-template-columns: 1fr;
}
@media(max-width:900px){
  .seo-hero-section {
    grid-template-columns: 1fr !important;
    padding: 5rem 5% 3rem !important;
  }
  .hero-content-left { order:1 !important; text-align:start !important; padding: 3rem 0;}
  .seo-badge { margin:0 !important; }
  .seo-sub { max-width:100% !important; text-align:start !important; }
  .seo-actions { justify-content:flex-start !important; }
}
@media(max-width:640px){
  .seo-hero-section { padding:4.5rem 4% 2.5rem !important; gap:1.5rem !important; }
}
@media(max-width:480px){
  .seo-hero-section { padding:4rem 4% 2rem !important; }
  .seo-hero-heading { font-size:clamp(1.6rem,5vw,2.5rem) !important; font-weight:600 !important; }
}

/* ===== APPROACH (SECTION 2) FORM RESPONSIVE ===== */
@media(max-width:900px){
  .ap2-inner { grid-template-columns:1fr !important; gap:2.5rem !important; }
  .ap2-form-wrap { max-width:100% !important; }
}
@media(max-width:640px){
  .ap2-fl-row { grid-template-columns:1fr !important; }
  .ap2-form-card { padding:2rem 1.4rem !important; }
}
@media(max-width:480px){
  .ap2-heading { font-size:1.6rem !important; }
  .ap2-form-card { padding:1.6rem 1rem !important; }
}

/* ===== WHY PCS RADIAL RESPONSIVE ===== */
@media(max-width:640px){
  .why-cards-row { grid-template-columns:1fr !important; }
  .why-stats-row { grid-template-columns:1fr 1fr !important; gap:0.8rem !important; }
}
@media(max-width:480px){
  .pcs-center-ring-outer { width:180px !important; height:180px !important; }
  .pcs-center-ring-inner { width:140px !important; height:140px !important; }
  .pcs-center-hub { width:110px !important; height:110px !important; }
  .pcs-h2, .ap-heading, .why-heading, .cs-h2 { font-size:1.5rem !important; }
}

/* ===== CHALLENGES RESPONSIVE ===== */
@media(max-width:768px){
  .chal-grid { grid-template-columns:1fr 1fr !important; }
  .chal-grid-2 { grid-template-columns:1fr 1fr !important; max-width:100% !important; }
}
@media(max-width:560px){
  .chal-grid, .chal-grid-2 { grid-template-columns:1fr !important; max-width:100% !important; }
  .chal-card { flex-direction:row !important; gap:1rem !important; padding:1.2rem !important; }
}

/* ===== FAQ RESPONSIVE ===== */
@media(max-width:768px){
  .faq-wrapper { grid-template-columns:1fr !important; }
  .container { padding:0 5% !important; }
  .faq-head h2 { font-size:1.6rem !important; }
}
@media(max-width:480px){
  .faq-head h2 { font-size:1.4rem !important; }
}

/* ===== CASE STUDY RESPONSIVE ===== */
@media(max-width:640px){
  .cs-quote-wrap { padding:2rem 1.2rem !important; }
  .cs-q-mark, .cs-q-mark-r { font-size:5rem !important; }
  .cs-quote-text { font-size:1rem !important; }
}

/* ===== GENERAL SECTION PADDING ===== */
@media(max-width:768px){
  .ap-section, .why-section, .pcs-section, .cs-section { padding:4rem 5% !important; }
  #approach { padding:4rem 5% !important; }
}
@media(max-width:480px){
  .ap-section, .why-section, .pcs-section, .cs-section { padding:3rem 4% !important; }
  #approach { padding:3rem 4% !important; }
}

/* ===== APPROACH SECTION 1 FORM RESPONSIVE ===== */
@media(max-width:480px){
  .ap-form-card { padding:1.5rem 1rem !important; }
  .phone-row { flex-wrap:wrap !important; }
}
`;function c(){return(0,r.jsxs)("section",{className:"seo-hero-section",style:{minHeight:"95vh",display:"grid",gridTemplateColumns:"1fr 1fr",alignItems:"center",gap:"2rem",padding:"5rem 6% 4rem",position:"relative",overflow:"hidden",backgroundImage:"url(/img/healthcare.webp)",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:[(0,r.jsx)("style",{children:`
        @media(max-width:1008px){
          .hero-overlay { background: #004168d4 !important; }
        }
        @media(max-width:480px){
          .hero-overlay { background: #004168d4!important; }
        }
        .seo-badge { display:inline-flex; align-items:center; gap:0.5rem; background:rgba(237,131,55,0.12); border:1px solid rgba(237,131,55,0.32); color:#ed8337; font-size:0.7rem; font-weight:700; padding:0.38rem 1rem; border-radius:50px; letter-spacing:0.09em; text-transform:uppercase; width:fit-content; animation:fadeUp .6s ease both; backdrop-filter:none; }
        .badge-dot-red { width:6px; height:6px; border-radius:50%; background:#ed8337; animation:pulse-dot 1.7s ease-in-out infinite; }
        .seo-hero-heading { width:100%; max-width:750px; font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.6vw,3.3rem); font-weight:600; line-height:1.15; margin-top:1.3rem; color:#ffffff; text-shadow:0 2px 12px rgba(0,0,0,0.5); animation:fadeUp .7s .08s ease both; }
        .seo-red { color:#ed8337; }
        .seo-underline { position:relative; display:inline-block; }
        .seo-underline::after { content:''; position:absolute; left:0; bottom:-4px; width:100%; height:4px; background:linear-gradient(90deg,#ed8337,#f5a66b); border-radius:3px; transform:scaleX(0); transform-origin:left; animation:line-in .65s 0.8s ease forwards; }
        @keyframes line-in { from{transform:scaleX(0);} to{transform:scaleX(1);} }
        .seo-sub { margin-top:1.4rem; font-size:0.97rem; line-height:1.82; color:rgba(255,255,255,0.92); max-width:750px; width:100%; animation:fadeUp .7s .16s ease both; text-shadow:0 1px 6px rgba(0,0,0,0.4); }
        .seo-actions { margin-top:2rem; display:flex; gap:1rem; align-items:center; animation:fadeUp .7s .26s ease both; }
        .seo-btn-fill { background:linear-gradient(135deg,#ed8337,#f5a66b); color:#fff; padding:0.88rem 2.1rem; border-radius:50px; font-family:'DM Sans',sans-serif; font-size:0.93rem; font-weight:700; text-decoration:none; display:inline-flex; align-items:center; gap:0.55rem; box-shadow:0 6px 26px rgba(237,131,55,0.5); transition:all .22s; }
        .seo-btn-fill:hover { transform:translateY(-3px); box-shadow:0 10px 34px rgba(237,131,55,0.6); }
        .seo-btn-arr { width:24px; height:24px; border-radius:50%; background:rgba(2,43,68,0.35); display:flex; align-items:center; justify-content:center; font-size:0.9rem; }
        .hero-orb { position:absolute; border-radius:50%; pointer-events:none; filter:blur(80px); animation:orb-drift 8s ease-in-out infinite alternate; }
        .hero-orb-1 { width:400px; height:400px; background:rgba(237,131,55,0.06); top:-80px; right:8%; }
        .hero-orb-2 { width:280px; height:280px; background:rgba(10,54,82,0.8); bottom:-60px; left:5%; animation-delay:2s; }
        /* hero-img-right hidden \u{2014} image is now background */
        .hero-img-right { display:none !important; }
        @media(max-width:900px){
          .seo-hero-section { grid-template-columns:1fr !important; padding:5rem 5% 3rem !important; }
          .hero-content-left { order:1 !important; text-align:start !important; }
          .seo-badge { margin:0 !important; }
          .seo-sub { max-width:100% !important; text-align:start !important; }
          .seo-actions { justify-content:flex-start !important; }
        }
        @media(max-width:640px){
          .seo-hero-section { grid-template-columns:1fr !important; padding:5rem 5% 3rem !important; text-align:left !important; }
          .hero-content-left { order:1 !important; align-items:flex-start !important; text-align:start !important; }
          .seo-badge { margin:0 !important; }
          .seo-sub { max-width:100% !important; text-align:left !important; font-size:0.88rem !important; }
          .seo-actions { justify-content:flex-start !important; flex-wrap:wrap; }
        }
        @media(max-width:480px){
          .seo-hero-section { padding:5rem 4% 2.5rem !important; min-height:100svh !important; background-position:top right !important; }
          .seo-hero-heading { font-size:clamp(1.5rem,7.5vw,1.7rem) !important; font-weight:600 !important; color:#fff !important; line-height:1.2 !important; text-shadow:0 2px 12px rgba(0,0,0,0.6) !important; }
          .seo-sub { font-size:0.84rem !important; color:rgba(255,255,255,0.95) !important; line-height:1.7 !important; text-shadow:0 1px 8px rgba(0,0,0,0.5) !important; margin-top:1rem !important; }
          .seo-badge { font-size:0.65rem !important; }
          .seo-btn-fill { padding:0.78rem 1.6rem !important; font-size:0.85rem !important; }
        }
        @media(max-width:380px){
          .seo-hero-heading { font-size:clamp(1.4rem,7vw,1.7rem) !important; font-weight:600 !important; }
          .seo-sub { font-size:0.8rem !important; }
        }
      `}),(0,r.jsx)("div",{className:"hero-overlay",style:{position:"absolute",inset:0,zIndex:1}}),(0,r.jsx)("div",{className:"hero-orb hero-orb-1"}),(0,r.jsx)("div",{className:"hero-orb hero-orb-2"}),(0,r.jsxs)("div",{className:"hero-content-left",style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",paddingBottom:"3rem",order:1},children:[(0,r.jsxs)("div",{className:"seo-badge",children:[(0,r.jsx)("div",{className:"badge-dot-red"}),"Healthcare "]}),(0,r.jsxs)("h1",{className:"seo-hero-heading",children:["Powering Progress in the ",(0,r.jsx)("span",{className:"seo-underline seo-red",style:{marginRight:"10px"},children:"Healthcare"}),"Industry  Powering Progress"]}),(0,r.jsx)("p",{className:"seo-sub",children:"Enabling healthcare providers to grow with confidence, We bring together registration, compliance, HR solutions for healthcare, digital transformation, and digital marketing , Website Development into a unified, end-to-end solution.       "}),(0,r.jsx)("div",{className:"seo-actions",children:(0,r.jsxs)("a",{className:"seo-btn-fill",href:"#approach",children:[(0,r.jsx)("span",{children:"Get in Touch"}),(0,r.jsx)("div",{className:"seo-btn-arr",children:"\u203A"})]})})]}),(0,r.jsx)("div",{style:{order:2}}),(0,r.jsx)("style",{children:`
        @media(max-width:900px){
          .seo-hero-section { grid-template-columns:1fr !important; min-height:100svh !important; background-size:cover !important; background-position:center !important; }
        }
      `})]})}function m(){let[e,t]=(0,i.useState)({name:"",email:"",phone:"",company:"",msg:""}),a=a=>t({...e,[a.target.name]:a.target.value});return(0,r.jsxs)("section",{id:"approach",style:{background:"#ffffff",padding:"5rem 6%",position:"relative",overflow:"hidden"},children:[(0,r.jsx)("style",{children:`
        /* eyebrow shared */
        .seo-eyebrow-wrap { display:flex; align-items:center; gap:12px; margin-bottom:12px; }
        .seo-eyebrow-line { flex:0 0 32px; height:2px; background:linear-gradient(90deg,#ed8337,transparent); border-radius:2px; }
        .seo-eyebrow-line-right { background:linear-gradient(270deg,#ed8337,transparent); }
        .seo-eyebrow-text { font-family:'Poppins',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#ed8337; }

        /* approach layout */
        .ap2-inner { position:relative; z-index:2;  margin:0 auto; display:grid; grid-template-columns:1fr 0.75fr; gap:4rem; align-items:center; }
        .ap2-heading { font-family:'Poppins',sans-serif;font-weight:700; font-size:clamp(1.9rem,2.8vw,2.4rem); line-height:1.12; color:#000; margin-bottom:1.2rem; }
        .ap2-heading span { color:#ed8337; }
        .ap2-intro { font-size:0.97rem; line-height:1.8; color:rgba(2,43,68,0.72); margin-bottom:1.2rem; }

        /* form card */
        .ap2-form-wrap { position:relative; max-width:460px; }
        .ap2-form-wrap::before { content:''; position:absolute; inset:-2px; background:linear-gradient(135deg,rgba(237,131,55,0.5),rgba(2,43,68,0.08),rgba(237,131,55,0.5)); border-radius:26px; z-index:0; }
        .ap2-form-card { position:relative; z-index:1; background:#004168; border-radius:24px; padding:2.8rem 2.6rem; box-shadow:0 24px 60px rgba(2,43,68,0.18),0 0 40px rgba(237,131,55,0.06); border:1px solid rgba(237,131,55,0.18); text-align:center; }
        .ap2-form-eyebrow { display:inline-flex; align-items:center; gap:8px; font-family:'Poppins',sans-serif; font-size:0.6rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#ed8337; margin-bottom:0.8rem; }
        .ap2-form-eyebrow-line { width:22px; height:1px; background:#ed8337; }
        .ap2-form-title { font-family:'Poppins',sans-serif; font-size:1.7rem; font-weight:800; color:#fff; line-height:1.15; margin-bottom:2.4rem; }
        .ap2-form-title span { color:#ed8337; }
        .ap2-fl-row { display:grid; grid-template-columns:1fr 1fr; gap:0.85rem; }
        .ap2-fl-group { position:relative; margin-bottom:1rem; }
        .ap2-fl-label { display:block; font-family:'Poppins',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:#ed8337; margin-bottom:0.4rem; text-align:start; }
        .ap2-fl-input, .ap2-fl-textarea { width:100%; padding:0.82rem 1rem 0.82rem 2.6rem; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; font-family:'DM Sans',sans-serif; font-size:0.88rem; color:#fff; background:rgba(255,255,255,0.04); outline:none; transition:all 0.22s; }
        .ap2-fl-input::placeholder, .ap2-fl-textarea::placeholder { color:rgba(255,255,255,0.3); }
        .ap2-fl-input:focus, .ap2-fl-textarea:focus { border-color:#ed8337; background:rgba(237,131,55,0.06); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .ap2-fl-icon { position:absolute; left:0.85rem; top:50%; transform:translateY(-50%); font-size:0.95rem; opacity:0.5; pointer-events:none; }
        .ap2-fl-textarea { min-height:88px; resize:none; padding-top:0.82rem; padding-left:2.6rem; }
        .ap2-phone-row { display:flex; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; overflow:hidden; background:rgba(255,255,255,0.04); transition:all 0.22s; }
        .ap2-phone-row:focus-within { border-color:#ed8337; box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .ap2-phone-flag { display:flex; align-items:center; gap:0.3rem; padding:0 0.85rem; font-size:0.82rem; font-weight:700; color:#fff; border-right:1.5px solid rgba(237,131,55,0.2); white-space:nowrap; background:rgba(237,131,55,0.08); flex-shrink:0; }
        .ap2-phone-row .ap2-fl-input { border:none; border-radius:0; background:transparent; box-shadow:none; padding:0.82rem 1rem; }
        .ap2-submit { width:100%; background:linear-gradient(135deg,#ed8337,#f5a66b); color:#fff; border:none; padding:1rem 1.5rem; border-radius:12px; font-family:'Poppins',sans-serif; font-size:0.97rem; font-weight:600; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:0.6rem; transition:all 0.2s; }
        .ap2-submit:hover { transform:translateY(-2px); box-shadow:0 12px 36px rgba(237,131,55,0.5); }
        .ap2-submit-arrow { display:inline-flex; align-items:center; justify-content:center; width:24px; height:24px; border-radius:50%; background:rgba(2,43,68,0.25); font-size:0.9rem; }
        @media(max-width:900px){ .ap2-inner{grid-template-columns:1fr !important;} }
      `}),(0,r.jsxs)("div",{className:"ap2-inner",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"partners-header1",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"About Industry"})}),(0,r.jsxs)("h2",{className:"ap2-heading",children:[(0,r.jsx)("span",{children:"Healthcare Industry in India "})," \u2014 Care Meets Innovation"]}),(0,r.jsx)("p",{className:"ap2-intro",children:"India's healthcare industry plays a critical role in improving quality of life, spanning hospitals, clinics, diagnostic centers, and specialized care providers \u2014 offering immense opportunities. "}),(0,r.jsx)("p",{className:"ap2-intro",children:"But in today\u2019s evolving landscape, delivering quality care alone is not enough. Compliance, strong digital presence, efficient workforce management, and technology adoption have become essential for healthcare providers to operate effectively and scale. That\u2019s where PCS, a trusted Healthcare Digital Marketing Company and healthcare digital marketing agency, steps in with end-to-end support."})]}),(0,r.jsx)("div",{className:"ap2-form-wrap",children:(0,r.jsxs)("div",{className:"ap2-form-card",children:[(0,r.jsxs)("div",{className:"ap2-form-eyebrow",children:[(0,r.jsx)("span",{className:"ap2-form-eyebrow-line"}),"Your Growth, Our Mission",(0,r.jsx)("span",{className:"ap2-form-eyebrow-line"})]}),(0,r.jsxs)("div",{className:"ap2-form-title",children:["Get Your ",(0,r.jsx)("span",{children:"Free"})," SEO Audit"]}),(0,r.jsxs)("form",{onSubmit:a=>{a.preventDefault();let r={name:e.name,email:e.email,phone:e.phone,company:e.company,message:e.msg,url:window.location.href};n.Ay.send("service_8xw6k3r","template_jarui36",r,"XWRnXi4hK2SvmRG3q").then(()=>{alert("Message Sent Successfully \u2705"),t({name:"",email:"",phone:"",company:"",msg:""})}).catch(()=>alert("Failed to send \u274C"))},children:[(0,r.jsxs)("div",{className:"ap2-fl-row",children:[(0,r.jsxs)("div",{className:"ap2-fl-group",children:[(0,r.jsx)("label",{className:"ap2-fl-label",children:"Your Name"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"ap2-fl-icon",children:"\u{1F464}"}),(0,r.jsx)("input",{className:"ap2-fl-input",type:"text",name:"name",placeholder:"Full name",value:e.name,onChange:a,required:!0})]})]}),(0,r.jsxs)("div",{className:"ap2-fl-group",children:[(0,r.jsx)("label",{className:"ap2-fl-label",children:"Company"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"ap2-fl-icon",children:"\u{1F3E2}"}),(0,r.jsx)("input",{className:"ap2-fl-input",type:"text",name:"company",placeholder:"Company name",value:e.company,onChange:a})]})]})]}),(0,r.jsxs)("div",{className:"ap2-fl-group",children:[(0,r.jsx)("label",{className:"ap2-fl-label",children:"Email Address"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"ap2-fl-icon",children:"\u2709\uFE0F"}),(0,r.jsx)("input",{className:"ap2-fl-input",type:"email",name:"email",placeholder:"your@email.com",value:e.email,onChange:a,required:!0})]})]}),(0,r.jsxs)("div",{className:"ap2-fl-group",children:[(0,r.jsx)("label",{className:"ap2-fl-label",children:"Mobile Number"}),(0,r.jsxs)("div",{className:"ap2-phone-row",children:[(0,r.jsx)("div",{className:"ap2-phone-flag",children:(0,r.jsx)("span",{children:"\u{1F4DE}"})}),(0,r.jsx)("input",{className:"ap2-fl-input",type:"tel",name:"phone",placeholder:"Mobile number",value:e.phone,onChange:a,maxLength:"10",pattern:"[0-9]{10}",required:!0})]})]}),(0,r.jsxs)("div",{className:"ap2-fl-group",children:[(0,r.jsx)("label",{className:"ap2-fl-label",children:"Message"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"ap2-fl-icon",style:{top:"0.9rem",transform:"none"},children:"\u{1F4AC}"}),(0,r.jsx)("textarea",{className:"ap2-fl-textarea",name:"msg",placeholder:"Tell us about your SEO goals...",value:e.msg,onChange:a})]})]}),(0,r.jsxs)("button",{type:"submit",className:"ap2-submit",children:["Get Free SEO Audit ",(0,r.jsx)("span",{className:"ap2-submit-arrow",children:"\u203A"})]})]})]})})]})]})}function h(){return(0,r.jsx)("section",{className:"pcs-section",id:"why-pcs",children:(0,r.jsxs)("div",{className:"pcs-inner",children:[(0,r.jsxs)("div",{className:"pcs-header",children:[(0,r.jsx)("div",{className:"partners-header1",children:(0,r.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Challenges"})}),"          ",(0,r.jsxs)("h3",{className:"pcs-h2",children:["The Biggest Challenges in the  ",(0,r.jsx)("span",{children:(0,r.jsx)("i",{children:"Healthcare  Industry "})})," Today"]}),(0,r.jsx)("p",{className:"pcs-lead",children:"Running a healthcare organization comes with its own set of complexities. Here are the most common challenges faced by providers:"})]}),(0,r.jsxs)("div",{className:"pcs-radial-layout",children:[(0,r.jsx)("div",{className:"pcs-radial-col left",children:[{num:"01 \xb7 Expertise",title:"Compliance Complexity",desc:"Managing licenses, accreditations, and regulatory filings can overwhelm healthcare providers.",icon:"/img/icon/healthcare-compliance.webp",iconStyle:{background:"rgba(0,65,104,0.3)",borderColor:"rgba(0,130,210,0.5)"}},{num:"02 \xb7 Approach",title:"Digital Absence ",desc:"Managing licenses, accreditations, and regulatory filings can overwhelm healthcare providers.",icon:"/img/icon/healthcare-digital-absence.webp",iconStyle:{background:"rgba(237,131,55,0.2)",borderColor:"rgba(237,131,55,0.5)"}},{num:"03 \xb7 Reliability",title:"Patient Reach",desc:"Without effective digital marketing strategies, hospitals struggle to reach and engage the right audience.",icon:"/img/icon/healthcare-buyer-reach.webp",iconStyle:{background:"rgba(10,82,130,0.3)",borderColor:"rgba(20,120,190,0.5)"}}].map((e,t)=>(0,r.jsxs)("div",{className:"pcs-point",children:[(0,r.jsx)("div",{className:"pcs-point-line"}),(0,r.jsx)("div",{className:"pcs-point-icon-wrap",style:e.iconStyle,children:(0,r.jsx)("img",{src:e.icon,alt:e.title,style:{width:"30px",height:"30px",objectFit:"contain"}})}),(0,r.jsxs)("div",{className:"pcs-point-body",children:[(0,r.jsx)("span",{className:"pcs-point-num",children:e.num}),(0,r.jsx)("h4",{className:"pcs-point-title",children:e.title}),(0,r.jsx)("div",{className:"pcs-point-desc",children:e.desc})]})]},t))}),(0,r.jsx)("div",{className:"pcs-radial-center",children:(0,r.jsx)("div",{className:"pcs-center-ring-outer",children:(0,r.jsx)("div",{className:"pcs-center-ring-inner",children:(0,r.jsxs)("div",{className:"pcs-center-hub",children:[(0,r.jsx)("div",{className:"pcs-center-emoji",children:(0,r.jsx)("img",{src:"/img/icon/healthcare.webp",alt:"PCS",style:{width:"36px",height:"36px",objectFit:"contain"}})}),(0,r.jsx)("div",{className:"pcs-center-label",children:"PCS Healthcare Industry "})]})})})}),(0,r.jsx)("div",{className:"pcs-radial-col right",children:[{num:"04 \xb7 Delivery",title:"Workforce Challenges",desc:"Managing staff efficiently requires strong healthcare workforce management and reliable HR solutions for healthcare.",icon:"/img/icon/healthcare-growth.webp",iconStyle:{background:"rgba(0,42,68,0.4)",borderColor:"rgba(0,100,170,0.5)"}},{num:"05 \xb7 Value",title:"Technology Gap",desc:"Limited adoption of digital tools affects operational efficiency and patient experience.",icon:"/img/icon/healthcare-technology.webp",iconStyle:{background:"rgba(20,102,160,0.3)",borderColor:"rgba(30,140,210,0.5)"}},{num:"06 \xb7 Growth",title:"Brand Visibility",desc:"Low online visibility reduces patient trust and acquisition, emphasizing the need for a strong digital presence.",icon:"/img/icon/healthcare-brand-visibility.webp",iconStyle:{background:"rgba(201,109,26,0.2)",borderColor:"rgba(237,131,55,0.5)"}}].map((e,t)=>(0,r.jsxs)("div",{className:"pcs-point",children:[(0,r.jsx)("div",{className:"pcs-point-icon-wrap",style:e.iconStyle,children:(0,r.jsx)("img",{src:e.icon,alt:e.title,style:{width:"24px",height:"24px",objectFit:"contain"}})}),(0,r.jsxs)("div",{className:"pcs-point-body",children:[(0,r.jsx)("span",{className:"pcs-point-num",children:e.num}),(0,r.jsx)("div",{className:"pcs-point-title",children:e.title}),(0,r.jsx)("div",{className:"pcs-point-desc",children:e.desc})]}),(0,r.jsx)("div",{className:"pcs-point-line"})]},t))})]})]})})}let g=[{num:"01",label:"Registration",tag:"01 \u2014 Compliance",title:"Business Registration & Compliance",desc:"Comprehensive support covering registration, statutory compliance, accounting, GST, payroll, and audits \u2014 all in one place. From setup to financial guidance like banking, loans, CMA reports, company valuations, and Virtual CFO services, we ensure your healthcare operations run smoothly and stay compliant.",progress:"20%"},{num:"02",label:"Digital Marketing",tag:"02 \u2014 Web",title:"Digital Marketing for Healthcare",desc:"As a leading Healthcare Digital Marketing Company, we drive patient engagement and visibility through SEO, paid campaigns, content, and social media strategies designed for measurable growth.",progress:"40%"},{num:"03",label:"Website Development ",tag:"03 \u2014 Trust",title:"Healthcare Website Development",desc:"Professional Healthcare Website Development tailored for hospitals and clinics. Recognized as a Best Hospital Website Development Company, we build secure, user-friendly, and high-performing websites that enhance patient experience and trust.",progress:"60%"},{num:"04",label:"HR Solutions",tag:"04 \u2014 HR Management",title:"Healthcare Workforce & HR Solutions",desc:"End-to-end HR solutions for healthcare, including recruitment, healthcare workforce management, and payroll in hospitals & healthcare. We ensure efficient staffing, compliant payroll processes, and structured HR systems for seamless operations.",progress:"80%"},{num:"05",label:"Digital Transformation  ",tag:"05 \u2014 Visibility",title:"Digital Transformation Solutions ",desc:"Smart solutions to streamline operations and improve efficiency. From process automation and custom web & mobile applications to data-driven insights, we help healthcare providers deliver better outcomes.",progress:"100%"}];function f(){let[e,t]=(0,i.useState)(0),[a,n]=(0,i.useState)(!1),[o,s]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=()=>{let e=window.innerWidth;n(e<=600),s(e>600&&e<=900)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let l=g[e];return(0,r.jsxs)("section",{id:"why-choose",style:{background:"#ffffff",padding:a?"4rem 5%":o?"5rem 5%":"7rem 6%",fontFamily:"'Poppins', sans-serif"},children:[(0,r.jsxs)("div",{style:{textAlign:"center",marginBottom:a?"2rem":"3rem"},children:[(0,r.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"12px",marginBottom:"14px"},children:(0,r.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Solutions"})}),(0,r.jsxs)("h3",{style:{fontFamily:"'Poppins', sans-serif",fontSize:a?"22px":o?"28px":"clamp(28px, 3.5vw, 40px)",fontWeight:"700",color:"#0d1f2d",lineHeight:"1.25",marginBottom:"12px"},children:["How We Help "," ",(0,r.jsx)("span",{style:{color:"#ed8337",fontStyle:"italic"},children:"Hospitals & Healthcare"})," "," Providers Grow Grow"]}),(0,r.jsx)("p",{style:{fontSize:a?"13px":"15px",color:"#000000",fontWeight:"300",margin:"30px auto",lineHeight:"1.75"},children:"From business registration to digital growth and website development, we provide the right solutions at every stage of your healthcare journey.  "}),"     "]}),a?(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px",maxWidth:"500px",margin:"0 auto"},children:[g.map((a,i)=>{let n=e===i;return(0,r.jsxs)("div",{style:{border:n?"1.5px solid #ed8337":"1.5px solid #EDE6DF",borderRadius:"12px",overflow:"hidden",transition:"border-color 0.25s"},children:[(0,r.jsxs)("button",{onClick:()=>t(n?-1:i),style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 18px",fontFamily:"'Poppins', sans-serif",fontSize:"13px",fontWeight:n?"600":"400",color:n?"#ed8337":"#3a3a3a",background:n?"#FFF4EC":"#ffffff",border:"none",cursor:"pointer",transition:"all 0.22s",textAlign:"left"},children:[(0,r.jsx)("span",{children:a.label}),(0,r.jsx)("span",{style:{fontSize:"18px",fontWeight:"300",color:n?"#ed8337":"#aaa",transform:n?"rotate(45deg)":"rotate(0deg)",transition:"transform 0.25s",lineHeight:"1"},children:"+"})]}),n&&(0,r.jsxs)("div",{style:{background:"#ffffff",borderTop:"1px solid #EDE6DF",padding:"18px 18px 20px",animation:"accordionFadeIn 0.25s ease"},children:[(0,r.jsx)("p",{style:{fontSize:"13px",color:"#5a6a7a",lineHeight:"1.85",fontWeight:"300",marginBottom:"14px"},children:a.desc}),(0,r.jsx)("div",{style:{height:"2px",background:"#EDE6DF",borderRadius:"2px",overflow:"hidden"},children:(0,r.jsx)("div",{style:{height:"100%",background:"#ed8337",borderRadius:"2px",width:a.progress,transition:"width 0.4s ease"}})}),(0,r.jsxs)("p",{style:{fontSize:"10px",color:"#bbb",marginTop:"6px",letterSpacing:"1px"},children:[i+1," / ",g.length]})]})]},i)}),(0,r.jsx)("style",{children:"@keyframes accordionFadeIn { from{opacity:0;transform:translateY(-6px);} to{opacity:1;transform:translateY(0);} }"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",borderBottom:"1.5px solid #EDE6DF",overflowX:"auto",gap:"0",scrollbarWidth:"none",maxWidth:"1100px",margin:"0 auto",WebkitOverflowScrolling:"touch"},children:g.map((a,i)=>(0,r.jsx)("button",{onClick:()=>t(i),style:{display:"flex",alignItems:"center",padding:o?"14px 16px":"16px 24px",fontFamily:"'Poppins', sans-serif",fontSize:o?"12px":"13px",fontWeight:e===i?"600":"400",color:e===i?"#ed8337":"#7A6E66",background:"none",border:"none",borderBottom:e===i?"2.5px solid #ed8337":"2.5px solid transparent",marginBottom:"-1.5px",cursor:"pointer",whiteSpace:"nowrap",transition:"color 0.25s"},children:a.label},i))}),(0,r.jsxs)("div",{style:{maxWidth:"1100px",margin:"0 auto",background:"#ffffff",border:"1.5px solid #EDE6DF",borderTop:"none",borderRadius:"0 0 16px 16px",overflow:"hidden",display:"grid",gridTemplateColumns:o?"1fr":"1fr 1.4fr",minHeight:"320px"},children:[(0,r.jsxs)("div",{style:{background:"#FFF9F5",padding:o?"32px 28px":"44px 40px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",borderRight:o?"none":"1.5px solid #EDE6DF",borderBottom:o?"1.5px solid #EDE6DF":"none",position:"relative",overflow:"hidden"},children:[(0,r.jsx)("span",{style:{position:"absolute",bottom:"-30px",left:"-30px",width:"120px",height:"120px",borderRadius:"50%",background:"#F5C49A",opacity:"0.18",pointerEvents:"none"}}),(0,r.jsx)("h4",{style:{fontFamily:"'Poppins', sans-serif",fontSize:o?"19px":"clamp(18px, 2.2vw, 24px)",fontWeight:"700",color:"#0d1f2d",lineHeight:"1.35",margin:"0"},children:l.title})]}),(0,r.jsxs)("div",{style:{padding:o?"28px 24px":"44px 44px 44px 40px",display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,r.jsx)("p",{style:{fontSize:"15px",color:"#7A6E66",lineHeight:"1.85",fontWeight:"300",marginBottom:"24px"},children:l.desc}),(0,r.jsx)("div",{style:{height:"2px",background:"#EDE6DF",borderRadius:"2px",overflow:"hidden"},children:(0,r.jsx)("div",{style:{height:"100%",background:"#ed8337",borderRadius:"2px",width:l.progress,transition:"width 0.4s ease"}})}),(0,r.jsxs)("p",{style:{fontSize:"11px",color:"#bbb",marginTop:"8px",letterSpacing:"1px"},children:[e+1," / ",g.length]})]})]})]})]})}function x(){return(0,r.jsx)("section",{className:"cs-section",id:"case-study",children:(0,r.jsxs)("div",{className:"cs-inner",children:[(0,r.jsxs)("div",{className:"cs-header",children:[(0,r.jsx)("div",{className:"partners-header1",children:(0,r.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Approach in"})}),"          ",(0,r.jsxs)("h3",{className:"cs-h2",children:["Real Results for ",(0,r.jsx)("span",{children:"Real  Businesses"})]})]}),(0,r.jsxs)("div",{className:"cs-quote-wrap",children:[(0,r.jsx)("div",{className:"cs-q-mark",children:'"'}),(0,r.jsx)("div",{className:"cs-q-mark-r",children:'"'}),(0,r.jsxs)("p",{className:"cs-quote-text",children:["We have helped businesses across ",(0,r.jsx)("em",{children:"industries streamline compliance"}),", build their ",(0,r.jsx)("em",{children:"digital presence"}),", and achieve  ",(0,r.jsx)("em",{children:"consistent growth."})]}),(0,r.jsxs)("div",{className:"cs-quote-attr",children:[(0,r.jsx)("span",{className:"cs-quote-line"}),"Explore Our Work",(0,r.jsx)("span",{className:"cs-quote-line"})]})]})]})})}let b=[{q:"Why does a healthcare clinic/hospital need digital marketing?",a:"Digital marketing helps healthcare providers improve online visibility, build patient trust, promote healthcare services, and attract new patients. It supports appointment generation, strengthens local search presence, and helps clinics and hospitals communicate effectively with patients across digital platforms."},{q:"How can social media marketing help healthcare businesses?",a:"Social media marketing helps healthcare businesses improve patient engagement, increase awareness about treatments and services, share health-related information, and build credibility. It also supports brand visibility, patient communication, and targeted campaigns that help attract relevant healthcare audiences online."},{q:"What features should a healthcare website have?",a:"A healthcare website should include service information, doctor profiles, online appointment booking, contact details, patient testimonials, mobile responsiveness, SEO optimization, secure patient communication, and easy navigation. These features improve patient experience, accessibility, trust, and overall engagement with healthcare services"},{q:"Can you build a website with online appointment booking?",a:"Yes, we develop healthcare websites with integrated online appointment booking systems, patient enquiry forms, doctor schedules, automated confirmations, and user-friendly interfaces. These features help healthcare providers streamline patient management, improve accessibility, and enhance overall patient convenience and operational efficiency."},{q:"What HR services do healthcare providers need?",a:"Healthcare providers typically require recruitment, payroll management, compliance management, attendance tracking, workforce planning, onboarding, shift scheduling, and HR policy support. These services help manage medical and non-medical staff efficiently while ensuring compliance with healthcare and labor regulations."},{q:"How does payroll management work for medical staff?",a:"Payroll management for medical staff includes salary processing, shift calculations, overtime management, statutory deductions, attendance tracking, incentive handling, and compliance reporting. Structured payroll systems ensure accurate payments, reduce administrative workload, and maintain smooth workforce operations within healthcare organizations."}];function u(){let[e,t]=(0,i.useState)(null),a=a=>{t(e===a?null:a)};return(0,r.jsxs)("section",{className:"faq-section",style:{background:"#ffffff"},children:[(0,r.jsx)("div",{className:"partners-header2",style:{textAlign:"center",marginTop:"20px"},children:(0,r.jsx)("h2",{className:"partners-eyebrow",children:"Frequently Asked Questions"})}),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"faq-head",children:(0,r.jsxs)("h3",{className:"faq-h3",children:["Queries That Could ",(0,r.jsx)("span",{children:"Hold You Back"})]})}),(0,r.jsxs)("div",{className:"faq-wrapper",children:[(0,r.jsx)("div",{className:"faq-col",children:b.slice(0,3).map((t,i)=>(0,r.jsxs)("div",{className:"faq-item",children:[(0,r.jsxs)("div",{className:"faq-question",onClick:()=>a(i),children:[(0,r.jsx)("span",{children:t.q}),(0,r.jsx)("span",{className:"icon",children:e===i?"\u2212":"+"})]}),e===i&&(0,r.jsx)("div",{className:"faq-answer",children:t.a})]},i))}),(0,r.jsx)("div",{className:"faq-col",children:b.slice(3,6).map((t,i)=>(0,r.jsxs)("div",{className:"faq-item",children:[(0,r.jsxs)("div",{className:"faq-question",onClick:()=>a(i+3),children:[(0,r.jsx)("span",{children:t.q}),(0,r.jsx)("span",{className:"icon",children:e===i+3?"\u2212":"+"})]}),e===i+3&&(0,r.jsx)("div",{className:"faq-answer",children:t.a})]},i+3))})]})]})]})}function y(){return(0,r.jsxs)(s.A,{title:"Healthcare Digital Marketing Company for Hospitals & Clinics",description:"Grow your healthcare business with expert digital marketing, website development, and HR solutions. Attract more patients and scale with confidence.",children:[(0,r.jsx)(p,{}),(0,r.jsx)("style",{children:d}),(0,r.jsx)(c,{}),(0,r.jsx)(m,{}),(0,r.jsx)(h,{}),(0,r.jsx)(f,{}),(0,r.jsx)(x,{}),(0,r.jsx)(u,{}),(0,r.jsx)(o.A,{})]})}}}]);