"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["8392"],{9393(e,t,s){s.d(t,{A:()=>i});var r=s(4848),a=s(6540);let i=function(){let e=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let t=e.current;if(!t)return;let s=t.getContext("2d"),r="#ed8337",a,i,n=[],o;function p(){a=t.width=t.parentElement.offsetWidth,i=t.height=t.parentElement.offsetHeight}function c(){this.reset()}c.prototype.reset=function(){this.x=Math.random()*a,this.y=Math.random()*i,this.r=2.2*Math.random()+.6,this.type=.55>Math.random()?"dot":.5>Math.random()?"ring":"plus",this.speed=.35*Math.random()+.08,this.dir=Math.random()*Math.PI*2,this.alpha=.45*Math.random()+.1,this.pulse=Math.random()*Math.PI*2,this.pulseSpeed=.018*Math.random()+.008,this.size=4*Math.random()+2},c.prototype.update=function(){this.x+=Math.cos(this.dir)*this.speed,this.y+=Math.sin(this.dir)*this.speed,this.pulse+=this.pulseSpeed,this.dir+=(Math.random()-.5)*.015,this.x<-20&&(this.x=a+20),this.x>a+20&&(this.x=-20),this.y<-20&&(this.y=i+20),this.y>i+20&&(this.y=-20)},c.prototype.draw=function(){let e=this.alpha*(.7+.3*Math.sin(this.pulse));if(s.save(),s.globalAlpha=e,s.strokeStyle=s.fillStyle=r,s.lineWidth=1,"dot"===this.type)s.beginPath(),s.arc(this.x,this.y,this.r+.4*Math.sin(this.pulse),0,2*Math.PI),s.fill();else if("ring"===this.type){let e=this.size*(.9+.15*Math.sin(this.pulse));s.beginPath(),s.arc(this.x,this.y,e,0,2*Math.PI),s.stroke()}else{let e=this.size*(.9+.1*Math.sin(this.pulse));s.beginPath(),s.moveTo(this.x-e,this.y),s.lineTo(this.x+e,this.y),s.moveTo(this.x,this.y-e),s.lineTo(this.x,this.y+e),s.stroke()}s.restore()},window.addEventListener("resize",p),p(),n=[];let l=Math.floor(a*i/9e3);for(let e=0;e<Math.max(l,28);e++)n.push(new c);return!function e(){s.clearRect(0,0,a,i),function(){let e=n.filter(e=>"dot"===e.type);for(let t=0;t<e.length;t++)for(let a=t+1;a<e.length;a++){let i=e[t].x-e[a].x,n=e[t].y-e[a].y,o=Math.sqrt(i*i+n*n);o<110&&(s.save(),s.globalAlpha=(1-o/110)*.12,s.strokeStyle=r,s.lineWidth=.7,s.beginPath(),s.moveTo(e[t].x,e[t].y),s.lineTo(e[a].x,e[a].y),s.stroke(),s.restore())}}(),n.forEach(e=>{e.update(),e.draw()}),o=requestAnimationFrame(e)}(),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",p)}},[]),(0,r.jsx)("section",{id:"cta-final",children:(0,r.jsxs)("div",{className:"cta-banner",style:{"--glow-x":"50%","--glow-y":"50%"},children:[(0,r.jsx)("canvas",{id:"ctaCanvas",ref:e}),(0,r.jsxs)("div",{className:"cta-banner-left",children:[(0,r.jsx)("div",{className:"partners-header",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Ready to Start?"})}),(0,r.jsxs)("h2",{className:"cta-banner-heading",children:["Let's Talk About Your",(0,r.jsx)("br",{}),"Next Big ",(0,r.jsx)("span",{className:"hl-italic",children:"Growth Move"})]}),(0,r.jsx)("p",{className:"cta-banner-sub",children:"No pressure. Just a quick conversation to understand where you are-and how we can help you move forward."})]}),(0,r.jsxs)("div",{className:"cta-banner-right",children:[(0,r.jsxs)("a",{href:"#",className:"cta-bprimary",children:["Book a Free Consultation",(0,r.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",children:(0,r.jsx)("path",{d:"M3 8h10M9 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,r.jsx)("a",{href:"#",className:"cta-bghost",children:"View All Services"})]})]})})}},3917(e,t,s){s.r(t),s.d(t,{default:()=>j});var r=s(4848),a=s(6540),i=s(8128),n=s(9393),o=s(1085);let p=`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap');

  :root {
    --navy:        #022b44;
    --navy-deep:   #011a2a;
    --navy-mid:    #0a3652;
    --orange:      #ed8337;
    --orange-light:#f5a66b;
    --text-dim:    rgba(255,255,255,0.45);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { overflow-x: hidden; }

  /* \u{2500}\u{2500} HERO \u{2500}\u{2500} */
  .pcs-hero {
    min-height: 100vh;
    display: grid; grid-template-columns: 1fr 1fr;
    align-items: flex-start; gap: 2rem;
    padding: 4rem 6% 4rem;
    position: relative; overflow: hidden;
    background: #004168;
  }
  .pcs-hero::before {
    content:''; position:absolute; inset:0; pointer-events:none;
    background:
      radial-gradient(ellipse 65% 70% at 100% 50%, rgba(237,131,55,0.10) 0%, transparent 60%),
      radial-gradient(ellipse 50% 60% at 0% 100%, rgba(10,66,102,0.5) 0%, transparent 55%);
  }
  .pcs-hero::after {
    content:''; position:absolute; inset:0; pointer-events:none;
    background-image: linear-gradient(rgba(237,131,55,0.028) 1px,transparent 1px), linear-gradient(90deg,rgba(237,131,55,0.028) 1px,transparent 1px);
    background-size: 52px 52px;
  }
  .pcs-hero-left { position:relative; z-index:2; display:flex; flex-direction:column; order:1; }
  .pcs-hero-right { position:relative; z-index:2; order:2; }
  .pcs-badge { display:inline-flex; align-items:flex-start; gap:0.5rem; background:rgba(237,131,55,0.1); border:1px solid rgba(237,131,55,0.28); color:var(--orange); font-size:0.72rem; font-weight:600; padding:0.38rem 1rem; border-radius:50px; letter-spacing:0.09em; text-transform:uppercase; width:fit-content; animation:pcs-fadeUp .6s ease both; }
  .pcs-badge-dot { width:6px; height:6px; border-radius:50%; background:var(--orange); animation:pcs-pulse-dot 1.6s infinite; }
  @keyframes pcs-pulse-dot { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:.4;transform:scale(1.5);} }
  .pcs-hero-heading { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.6vw,3.3rem); font-weight:600; color:#fff; line-height:1.15; letter-spacing:-0.02em; margin-top:1.4rem; animation:pcs-fadeUp .7s .08s ease both; }
  .pcs-hero-heading .orange { color:var(--orange); }
  .pcs-hero-heading .lined { position:relative; display:inline-block; }
  .pcs-hero-heading .lined::after { content:''; position:absolute; left:0; bottom:-3px; width:100%; height:3px; background:var(--orange); border-radius:2px; transform:scaleX(0); transform-origin:left; animation:pcs-line-in .5s .9s ease forwards; }
  @keyframes pcs-line-in { to{transform:scaleX(1);} }
  .pcs-hero-sub { margin-top:1.4rem; font-size:1rem; line-height:1.78; color:rgb(255, 255, 255); max-width:fit-content; animation:pcs-fadeUp .7s .16s ease both; }
  .pcs-hero-actions { margin-top:2rem; display:flex; gap:0.9rem; flex-wrap:wrap; animation:pcs-fadeUp .7s .26s ease both; }
  .pcs-btn-fill { background:var(--orange); color:#fff; padding:0.85rem 2rem; border-radius:50px; font-family:'DM Sans',sans-serif; font-size:0.92rem; font-weight:500; text-decoration:none; border:none; cursor:pointer; transition:background .22s, transform .18s, box-shadow .22s; box-shadow:0 4px 22px rgba(237,131,55,0.32); display:inline-flex; align-items:flex-start; gap:0.5rem; }
  .pcs-btn-fill:hover { background:var(--orange-light); transform:translateY(-2px); box-shadow:0 8px 30px rgba(237,131,55,0.42); }
  .pcs-btn-arrow { display:inline-flex; align-items:flex-start; justify-content:center; width:22px; height:22px; border-radius:50%; background:rgba(2,43,68,0.3); font-size:0.85rem; }
  @keyframes pcs-fadeUp { from{opacity:0;transform:translateY(26px);} to{opacity:1;transform:translateY(0);} }
  @media(max-width:900px){
    .pcs-hero { grid-template-columns:1fr; padding:5rem 5% 4rem; text-align:start; min-height:auto; }
    .pcs-hero-left { align-items:flex-start; order:1; }
    .pcs-hero-right { order:2; width:100%; display:flex; justify-content:center; }
    .pcs-hero-sub { width:100%; max-width:90%; }
  }
  @media(max-width:480px){
    .pcs-hero { padding: 4rem 4% 3rem; gap: 1.5rem; }
    .pcs-hero-heading { font-size: clamp(1.7rem, 6vw, 2.2rem) !important; }
    .pcs-hero-sub { font-size: 0.92rem; }
  }

  /* \u{2500}\u{2500} SEO HERO RIGHT \u{2500}\u{2500} */
  .pcs-hero-right { position:relative; z-index:2; display:flex; align-items:flex-start; justify-content:center; animation:pcs-fadeUp .9s .15s ease both; }
  .pcs-seo-scene { position:relative; height:470px; display:flex; align-items:flex-start; justify-content:center; margin:0 auto; }
  .pcs-hero-img { width:100%; height:100%; object-fit:contain; display:block; }

  /* \u{2500}\u{2500} SERVICES \u{2500}\u{2500} */
  .pcs-svc { position:relative; background:#004168; padding:4rem 0 0; overflow:hidden; }
  .pcs-svc-dots { position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(rgba(237,131,55,0.18) 1px,transparent 1px); background-size:38px 38px; animation:pcs-dots-drift 30s linear infinite; opacity:0.35; }
  @keyframes pcs-dots-drift { to { background-position: 38px 38px; } }
  .pcs-svc-glow { position:absolute; border-radius:50%; filter:blur(100px); pointer-events:none; z-index:0; }
  .pcs-ssvg1 { width:700px; height:700px; top:-200px; left:-180px; background:rgba(237,131,55,0.07); animation:pcs-ssvg-pulse 14s ease-in-out infinite alternate; }
  .pcs-ssvg2 { width:550px; height:550px; bottom:-180px; right:-140px; background:rgba(56,189,248,0.06); animation:pcs-ssvg-pulse 18s ease-in-out infinite alternate reverse; }
  @keyframes pcs-ssvg-pulse { from{opacity:.6;transform:scale(1);} to{opacity:1;transform:scale(1.15);} }
  .pcs-svc-hdr { position:relative; z-index:2; text-align:center; padding:0 6% 5.5rem; margin:0 auto; }
  .pcs-svc-tag { display:inline-flex; align-items:flex-start; gap:.55rem; font-size:.72rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:var(--orange); margin-bottom:1rem; font-family:'DM Sans',sans-serif; }
  .pcs-svc-tagline { width:20px; height:2px; background:var(--orange); border-radius:2px; display:inline-block; }
  .pcs-svc-h2 { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.8vw,2.7rem); font-weight:600; line-height:1.1; color:#fff; margin-bottom:2rem; }
  .pcs-svc-h2 span { color:var(--orange); }
  .pcs-svc-sub { font-size:.97rem; line-height:1.8; color:rgb(255, 255, 255);margin: 0 3%; }
  .pcs-svc-panels { position:relative; z-index:2; display:grid; grid-template-columns:repeat(3,1fr); margin: 0 3%;}
  .pcs-svc-panel { position:relative; padding:3.2rem 2.6rem 3rem; overflow:hidden; cursor:default; min-height:280px; display:flex; flex-direction:column; justify-content:flex-end; border-right:1px solid rgba(255,255,255,0.04); border-bottom:1px solid rgba(255,255,255,0.04); transition:background .5s ease, opacity .6s ease, transform .6s ease; opacity:0; transform:translateY(40px) scale(0.97); }
  .pcs-svc-panel.vis { opacity:1; transform:translateY(0) scale(1); }
  .pcs-svc-panel:nth-child(3n) { border-right:none; }
  .pcs-svc-panel:nth-child(4),.pcs-svc-panel:nth-child(5),.pcs-svc-panel:nth-child(6) { border-bottom:none; }
  .pcs-sp-ghost { position:absolute; top:-0.3em; right:-0.1em; font-family:'Poppins',sans-serif; font-size:9rem; font-weight:900; line-height:1; color:rgba(255,255,255,0.025); letter-spacing:-.04em; pointer-events:none; z-index:0; transition:color .5s ease,transform .5s ease; user-select:none; }
  .pcs-svc-panel:hover .pcs-sp-ghost { color:rgba(255,255,255,0.06); transform:scale(1.05) translateY(-5px); }
  .pcs-sp-slash { position:absolute; top:0; left:0; width:0; height:0; border-style:solid; border-width:55px 55px 0 0; transition:border-width .4s ease; z-index:1; }
  .pcs-svc-panel:hover .pcs-sp-slash { border-width:70px 70px 0 0; }
  .pcs-svc-panel:nth-child(1) .pcs-sp-slash { border-color:rgba(237,131,55,0.15) transparent transparent transparent; }
  .pcs-svc-panel:nth-child(2) .pcs-sp-slash { border-color:rgba(56,189,248,0.12) transparent transparent transparent; }
  .pcs-svc-panel:nth-child(3) .pcs-sp-slash { border-color:rgba(52,211,153,0.12) transparent transparent transparent; }
  .pcs-svc-panel:nth-child(4) .pcs-sp-slash { border-color:rgba(167,139,250,0.12) transparent transparent transparent; }
  .pcs-svc-panel:nth-child(5) .pcs-sp-slash { border-color:rgba(251,191,36,0.12) transparent transparent transparent; }
  .pcs-svc-panel:nth-child(6) .pcs-sp-slash { border-color:rgba(248,113,113,0.12) transparent transparent transparent; }
  .pcs-svc-panel:nth-child(1):hover { background:linear-gradient(135deg,rgba(237,131,55,0.06) 0%,transparent 70%); }
  .pcs-svc-panel:nth-child(2):hover { background:linear-gradient(135deg,rgba(56,189,248,0.05) 0%,transparent 70%); }
  .pcs-svc-panel:nth-child(3):hover { background:linear-gradient(135deg,rgba(52,211,153,0.05) 0%,transparent 70%); }
  .pcs-svc-panel:nth-child(4):hover { background:linear-gradient(135deg,rgba(167,139,250,0.05) 0%,transparent 70%); }
  .pcs-svc-panel:nth-child(5):hover { background:linear-gradient(135deg,rgba(251,191,36,0.05) 0%,transparent 70%); }
  .pcs-svc-panel:nth-child(6):hover { background:linear-gradient(135deg,rgba(248,113,113,0.05) 0%,transparent 70%); }
  .pcs-sp-icon-row { display:flex; align-items:flex-start; gap:.8rem; margin-bottom:1.3rem; position:relative; z-index:2; }
  .pcs-sp-icon-dash { height:2px; width:0; border-radius:2px; transition:width .5s ease; }
  .pcs-svc-panel:hover .pcs-sp-icon-dash { width:28px; }
  .pcs-svc-panel:nth-child(1) .pcs-sp-icon-dash { background:var(--orange); }
  .pcs-svc-panel:nth-child(2) .pcs-sp-icon-dash { background:#38bdf8; }
  .pcs-svc-panel:nth-child(3) .pcs-sp-icon-dash { background:#34d399; }
  .pcs-svc-panel:nth-child(4) .pcs-sp-icon-dash { background:#a78bfa; }
  .pcs-svc-panel:nth-child(5) .pcs-sp-icon-dash { background:#fbbf24; }
  .pcs-svc-panel:nth-child(6) .pcs-sp-icon-dash { background:#f87171; }
  .pcs-sp-icon { font-size:1.6rem; transition:transform .4s cubic-bezier(.34,1.56,.64,1); display:inline-block; filter:drop-shadow(0 0 0px transparent); }
  .pcs-svc-panel:nth-child(1):hover .pcs-sp-icon { transform:rotate(-12deg) scale(1.2); filter:drop-shadow(0 0 8px rgba(237,131,55,0.5)); }
  .pcs-svc-panel:nth-child(2):hover .pcs-sp-icon { transform:rotate(12deg) scale(1.2); filter:drop-shadow(0 0 8px rgba(56,189,248,0.5)); }
  .pcs-svc-panel:nth-child(3):hover .pcs-sp-icon { transform:translateY(-6px) scale(1.2); filter:drop-shadow(0 0 8px rgba(52,211,153,0.5)); }
  .pcs-svc-panel:nth-child(4):hover .pcs-sp-icon { transform:rotate(-12deg) scale(1.2); filter:drop-shadow(0 0 8px rgba(167,139,250,0.5)); }
  .pcs-svc-panel:nth-child(5):hover .pcs-sp-icon { transform:rotate(12deg) scale(1.2); filter:drop-shadow(0 0 8px rgba(251,191,36,0.5)); }
  .pcs-svc-panel:nth-child(6):hover .pcs-sp-icon { transform:translateY(-6px) scale(1.2); filter:drop-shadow(0 0 8px rgba(248,113,113,0.5)); }
  .pcs-sp-content { position:relative; z-index:2; }
  .pcs-sp-subtitle {display:none; font-family:'Space Mono',monospace; font-size:.6rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; margin-bottom:.55rem; transition:color .35s; }

  .pcs-sp-title { font-family:'Poppins',sans-serif; font-size:clamp(1.15rem,1.7vw,1.5rem); font-weight:800; color:#fff; line-height:1.15; margin-bottom:.75rem; transition:letter-spacing .35s ease; }
  .pcs-svc-panel:hover .pcs-sp-title { letter-spacing:.01em; }
  .pcs-sp-desc { font-size:.86rem; line-height:1.76; color:rgba(255, 255, 255, 0.93); max-height:0; overflow:hidden; transition:max-height .5s ease,color .5s ease,margin .5s ease; margin-bottom:0; }
  .pcs-svc-panel:hover .pcs-sp-desc { max-height:140px; color:rgb(255, 255, 255); margin-bottom:.9rem; font-family:'poppins'}
  .pcs-sp-link { display:inline-flex; align-items:flex-start; gap:.4rem; font-family:'DM Sans',sans-serif; font-size:.68rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; text-decoration:none; opacity:0; transform:translateY(8px); transition:opacity .4s ease,transform .4s ease,gap .3s ease; position:relative; z-index:2; }
  .pcs-svc-panel:hover .pcs-sp-link { opacity:1; transform:translateY(0); }
  .pcs-svc-panel:hover .pcs-sp-link:hover { gap:.7rem; }
  .pcs-svc-panel:nth-child(1) .pcs-sp-link { color:var(--orange); }
  .pcs-svc-panel:nth-child(2) .pcs-sp-link { color:#38bdf8; }
  .pcs-svc-panel:nth-child(3) .pcs-sp-link { color:#34d399; }
  .pcs-svc-panel:nth-child(4) .pcs-sp-link { color:#a78bfa; }
  .pcs-svc-panel:nth-child(5) .pcs-sp-link { color:#fbbf24; }
  .pcs-svc-panel:nth-child(6) .pcs-sp-link { color:#f87171; }
  .pcs-sp-link-arr { width:20px; height:20px; border-radius:50%; border:1px solid currentColor; display:flex; align-items:flex-start; justify-content:center; font-size:.72rem; transition:transform .3s ease; }
  .pcs-sp-link:hover .pcs-sp-link-arr { transform:rotate(45deg); }
  .pcs-sp-bottom-line { position:absolute; bottom:0; left:0; height:2px; width:0; transition:width .5s ease; }
  .pcs-svc-panel:hover .pcs-sp-bottom-line { width:100%; }
  .pcs-svc-panel:nth-child(1) .pcs-sp-bottom-line { background:linear-gradient(90deg,var(--orange),transparent); }
  .pcs-svc-panel:nth-child(2) .pcs-sp-bottom-line { background:linear-gradient(90deg,#38bdf8,transparent); }
  .pcs-svc-panel:nth-child(3) .pcs-sp-bottom-line { background:linear-gradient(90deg,#34d399,transparent); }
  .pcs-svc-panel:nth-child(4) .pcs-sp-bottom-line { background:linear-gradient(90deg,#a78bfa,transparent); }
  .pcs-svc-panel:nth-child(5) .pcs-sp-bottom-line { background:linear-gradient(90deg,#fbbf24,transparent); }
  .pcs-svc-panel:nth-child(6) .pcs-sp-bottom-line { background:linear-gradient(90deg,#f87171,transparent); }
  @media(max-width:900px){ .pcs-svc-panels { grid-template-columns:1fr 1fr; } }
  @media(max-width:580px){ .pcs-svc-panels { grid-template-columns:1fr; } .pcs-svc-panel { border-right:none !important; min-height:220px; } }

  /* \u{2500}\u{2500} PROCESS \u{2500}\u{2500} */
  .pcs-tp-section { position:relative; background:#ffffff; padding:4rem 0 4rem; overflow:hidden; }
  .pcs-tp-cross { position:absolute; inset:0; pointer-events:none; z-index:0; background-image:linear-gradient(45deg,rgba(2,43,68,0.015) 25%,transparent 25%),linear-gradient(-45deg,rgba(2,43,68,0.015) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(2,43,68,0.015) 75%),linear-gradient(-45deg,transparent 75%,rgba(2,43,68,0.015) 75%); background-size:20px 20px; background-position:0 0,0 10px,10px -10px,-10px 0px; }
  .pcs-tp-header { position:relative; z-index:2; text-align:center; padding:0 6% 5rem; }
  .pcs-tp-eyebrow { display:inline-flex; align-items:flex-start; gap:.6rem; font-family:'DM Sans',sans-serif; font-size:.7rem; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:var(--orange); margin-bottom:1.1rem; }
  .pcs-tp-eyebrow-rule { width:30px; height:1.5px; background:var(--orange); border-radius:2px; display:inline-block; }
  .pcs-tp-h2 { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.5vw,2.6rem); font-weight:700; line-height:1.1; color:#0d1f2d; margin-bottom:1.1rem; }
  .pcs-tp-h2 em { color:var(--orange); font-style:normal; font-weight:600}
  .pcs-tp-sub { font-size:.97rem; line-height:1.8; color:#000; margin:0 auto; }
  .pcs-tp-body { position:relative; z-index:2; max-width:1180px; margin:0 auto; padding:0 5%; }
  .pcs-tp-step { display:grid; grid-template-columns:1fr 2fr; gap:0; margin-bottom:1px; position:relative; opacity:0; transition:opacity .6s ease, transform .6s ease; }
  .pcs-tp-step.tp-vis { opacity:1; transform:none !important; }
  .pcs-tp-step:nth-child(odd)  { transform:translateX(-28px); }
  .pcs-tp-step:nth-child(even) { transform:translateX(28px); grid-template-columns:2fr 1fr; }
  .pcs-tp-step:nth-child(1){transition-delay:.04s;} .pcs-tp-step:nth-child(2){transition-delay:.15s;} .pcs-tp-step:nth-child(3){transition-delay:.26s;} .pcs-tp-step:nth-child(4){transition-delay:.37s;} .pcs-tp-step:nth-child(5){transition-delay:.48s;}
  .pcs-tp-num-side { background:#fafafa; border:1px solid rgba(2,43,68,0.06); padding:3rem 2.5rem; display:flex; flex-direction:column; justify-content:center; position:relative; overflow:hidden; transition:background .35s ease; }
  .pcs-tp-step:hover .pcs-tp-num-side { background:rgba(237,131,55,0.04); }
  .pcs-tp-step:nth-child(even) .pcs-tp-num-side { order:2; }
  .pcs-tp-step:nth-child(even) .pcs-tp-text-side { order:1; }
  .pcs-tp-bg-num { position:absolute; bottom:-20px; right:-10px; font-family:'Poppins',sans-serif; font-size:9rem; font-weight:900; color:rgba(237,131,55,0.07); line-height:1; letter-spacing:-.06em; pointer-events:none; transition:color .35s ease; user-select:none; }
  .pcs-tp-step:hover .pcs-tp-bg-num { color:rgba(237,131,55,0.13); }
  .pcs-tp-step-index { font-family:'Space Mono',monospace; font-size:.6rem; font-weight:700; letter-spacing:.15em; text-transform:uppercase; color:rgba(237,131,55,0.5); margin-bottom:.5rem; }
  .pcs-tp-step-title { font-family:'Poppins',sans-serif; font-size:1.8rem; font-weight:600; color:#0d1f2d; line-height:1; letter-spacing:-.02em; transition:color .3s ease; position:relative; z-index:2; }
  .pcs-tp-step:hover .pcs-tp-step-title { color:var(--orange); }
  .pcs-tp-step-title::after { content:''; display:block; margin-top:6px; height:3px; background:var(--orange); border-radius:2px; width:0; transition:width .35s ease; }
  .pcs-tp-step:hover .pcs-tp-step-title::after { width:48px; }
  .pcs-tp-phase { margin-top:.8rem; font-family:'DM Sans',sans-serif; font-size:.78rem; font-weight:600; color:rgba(237,131,55,0.65); letter-spacing:.04em; position:relative; z-index:2; }
  .pcs-tp-text-side { border:1px solid rgba(2,43,68,0.06); border-left:none; padding:3rem 2.8rem; display:flex; flex-direction:column; justify-content:center; background:#fff; position:relative; overflow:hidden; transition:background .35s ease; }
  .pcs-tp-step:nth-child(even) .pcs-tp-text-side { border-left:1px solid rgba(2,43,68,0.06); border-right:none; }
  .pcs-tp-text-side::before { content:''; position:absolute; bottom:0; right:0; width:0; height:0; border-style:solid; border-width:0 0 32px 32px; border-color:transparent transparent rgba(237,131,55,0.1) transparent; transition:border-width .3s ease; }
  .pcs-tp-step:hover .pcs-tp-text-side::before { border-width:0 0 44px 44px; }
  .pcs-tp-desc {font-size:.89rem; line-height:1.82; color:#010202a3; margin-bottom:1.2rem; }
  .pcs-tp-bullets { display:flex; flex-direction:column; gap:.3rem; }
  .pcs-tp-bullet {font-size:.85rem; font-weight:500; color:#010202a3; display:flex; align-items:flex-start; gap:.55rem; }
  .pcs-tp-bullet::before { content:''; display:inline-block; width:12px; height:1.5px; background:var(--orange); flex-shrink:0; border-radius:2px; }
  @media(max-width:760px){
    .pcs-tp-step, .pcs-tp-step:nth-child(even) { grid-template-columns:1fr; }
    .pcs-tp-step:nth-child(even) .pcs-tp-num-side { order:0; }
    .pcs-tp-step:nth-child(even) .pcs-tp-text-side { order:1; border-left:none; border-right:none; }
    .pcs-tp-text-side { border-left:none; border-top:none; }
    .pcs-tp-num-side,.pcs-tp-text-side { padding:2rem 5%; }
  }

  /* \u{2500}\u{2500} HOW WE WORK \u{2500}\u{2500} */
  .pcs-hww { position:relative; background:#004168; padding:4rem 0 4rem; overflow:hidden; }
  .pcs-hww-dot-grid { position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(rgba(237,131,55,0.13) 1px,transparent 1px); background-size:36px 36px; opacity:0.3; animation:pcs-dots-drift 28s linear infinite; }
  .pcs-hww-glow { position:absolute; border-radius:50%; pointer-events:none; z-index:0; filter:blur(100px); }
  .pcs-hww-glow-1 { width:600px; height:600px; top:-180px; left:-160px; background:rgba(237,131,55,0.07); animation:pcs-orb-float 10s ease-in-out infinite; }
  .pcs-hww-glow-2 { width:500px; height:500px; bottom:-160px; right:-120px; background:rgba(56,189,248,0.05); animation:pcs-orb-float 14s ease-in-out infinite reverse; }
  @keyframes pcs-orb-float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-24px);} }
  .pcs-hww-header { position:relative; z-index:2; text-align:center; padding:0 6% 5rem; }
  .pcs-hww-eyebrow { display:inline-flex; align-items:flex-start; gap:.55rem; font-family:'DM Sans',sans-serif; font-size:.72rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:var(--orange); margin-bottom:1rem; }
  .pcs-hww-eyebrow-line { width:24px; height:2px; background:var(--orange); border-radius:2px; display:inline-block; }
  .pcs-hww-h2 { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.5vw,2.9rem); font-weight:600; line-height:1.12; letter-spacing:-.02em; color:#fff; }
  .pcs-hww-h2 span { color:var(--orange); }
  .pcs-hww-arrows-wrap { position:relative; z-index:2;  margin:0 auto; padding:0 4%; }
  .pcs-hww-arrow-track { display:grid; grid-template-columns:1fr 1fr 1fr; gap:30px; }
  .pcs-hww-arrow-item { position:relative; display:flex; flex-direction:column; align-items:stretch; opacity:0; transform:translateX(-50px); transition:opacity .55s ease,transform .55s cubic-bezier(.22,1,.36,1); }
  .pcs-hww-arrow-item.hww-vis { opacity:1; transform:translateX(0); }
  .pcs-hww-arrow-item:nth-child(1){transition-delay:.05s;} .pcs-hww-arrow-item:nth-child(2){transition-delay:.2s;} .pcs-hww-arrow-item:nth-child(3){transition-delay:.35s;}
  .pcs-hww-card { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.07); border-radius:16px; padding:1.8rem 1.6rem; margin-bottom:2rem; flex:1; transition:background .3s ease,border-color .3s ease,transform .3s ease; cursor:default; }
  .pcs-hww-card:hover { background:rgba(255,255,255,0.07); border-color:rgba(237,131,55,0.25); transform:translateY(-4px); }
  .pcs-hww-icon-wrap { width:60px; height:60px; border-radius:50%; background:#004168; border:2px solid rgba(237,131,55,0.28); display:flex; align-items:center; justify-content:center; margin-bottom:1.1rem; font-size:1.5rem; box-shadow:0 6px 22px rgba(2,43,68,0.55); transition:transform .3s ease,border-color .3s ease,box-shadow .3s ease; }
  .pcs-hww-card:hover .pcs-hww-icon-wrap { transform:scale(1.1) rotate(-5deg); border-color:var(--orange); box-shadow:0 10px 32px rgba(237,131,55,0.22); }
  .pcs-hww-card-title { font-family:'Poppins',sans-serif; font-size:1.05rem; font-weight:700; color:#ee873d; margin-bottom:.55rem; line-height:1.3; }
  .pcs-hww-card-desc { font-family:'poppins'; font-size:.88rem; line-height:1.74; color:rgb(255, 255, 255); letter-spacing:0.1px}
  .pcs-hww-arrow-bg { position:absolute; inset:0; clip-path:polygon(0 20%,88% 20%,88% 0%,100% 50%,88% 100%,88% 80%,0 80%); transition:filter .3s ease,transform .3s ease; background-size:200% 100%; }
  .pcs-hww-arrow-item:nth-child(1) .pcs-hww-arrow-bg { background:linear-gradient(90deg,#b85c1a,var(--orange),#f5a66b); }
  .pcs-hww-arrow-item:nth-child(2) .pcs-hww-arrow-bg { background:linear-gradient(90deg,#0a3652,#0d5280,#1565a0); }
  .pcs-hww-arrow-item:nth-child(3) .pcs-hww-arrow-bg { background:linear-gradient(90deg,#c26a10,#e8882a,var(--orange-light)); }
  .pcs-hww-arrow-item:hover .pcs-hww-arrow-bg { filter:brightness(1.12); transform:scaleX(1.02); }
  .pcs-hww-arrow-item.hww-vis .pcs-hww-arrow-bg { background-size:200% 100%; animation:pcs-hww-shimmer 3s linear infinite; }
  .pcs-hww-arrow-item.hww-vis:nth-child(1) .pcs-hww-arrow-bg { background-image:linear-gradient(90deg,#b85c1a,var(--orange),#f5a66b,var(--orange),#b85c1a); }
  .pcs-hww-arrow-item.hww-vis:nth-child(2) .pcs-hww-arrow-bg { background-image:linear-gradient(90deg,#0a3652,#1565a0,#1a82c8,#1565a0,#0a3652); }
  .pcs-hww-arrow-item.hww-vis:nth-child(3) .pcs-hww-arrow-bg { background-image:linear-gradient(90deg,#c26a10,#e8882a,var(--orange-light),#e8882a,#c26a10); }
  @keyframes pcs-hww-shimmer { 0%{background-position:-200% center;} 100%{background-position:200% center;} }
  .pcs-hww-arrow-label { position:relative; z-index:2; font-family:'Poppins',sans-serif; font-size:1.6rem; font-weight:900; color:rgba(255,255,255,0.95); letter-spacing:-.02em; margin-right:8px; text-shadow:0 2px 10px rgba(0,0,0,0.4); }
  .pcs-hww-arrow-icon { position:absolute; bottom:-22px; left:50%; transform:translateX(-50%); width:44px; height:44px; border-radius:50%; background:var(--navy,#022b44); border:2px solid rgba(237,131,55,0.3); display:flex; align-items:flex-start; justify-content:center; font-size:1.1rem; z-index:3; transition:border-color .3s ease,transform .3s ease; }
  .pcs-hww-arrow-item:hover .pcs-hww-arrow-icon { border-color:var(--orange); transform:translateX(-50%) scale(1.1); }
  @media(max-width:860px){ .pcs-hww-arrow-track { grid-template-columns:1fr; gap:2rem; } }
  .faq-answer {font-size: .92rem;}

  /* \u{2500}\u{2500} GLOBAL RESPONSIVE \u{2500}\u{2500} */
  @media(max-width:900px){
    .pcs-svc-hdr { padding:0 5% 3.5rem; }
    .pcs-tp-header { padding:0 5% 3rem; }
    .pcs-hww-header { padding:0 5% 3rem; }
    .pcs-hww-arrows-wrap { padding:0 5%; }
    .pcs-tp-body { padding:0 5%; }
    .faq-wrapper { display: block; }
  }
  @media(max-width:768px){
    .pcs-svc { padding:3rem 0 0; }
    .pcs-tp-section { padding:3rem 0; }
    .pcs-hww { padding:3rem 0; }
    .faq-section { padding:3rem 4% !important; }
    .faq-head h2 { font-size:clamp(1.6rem,5vw,2rem) !important; }
    .pcs-svc-h2 { font-size:clamp(1.7rem,5vw,2.2rem); }
    .pcs-tp-h2 { font-size:clamp(1.7rem,5vw,2.2rem); }
    .pcs-hww-h2 { font-size:clamp(1.7rem,5vw,2.2rem); }
    .pcs-hww-arrow-track { grid-template-columns:1fr; gap:1.5rem; }
    .pcs-hww-card { padding:1.4rem 1.2rem; }
  }
  @media(max-width:580px){
    .pcs-svc-panels { grid-template-columns:1fr; }
    .pcs-svc-panel { border-right:none !important; min-height:200px; }
    .pcs-svc-hdr { padding:0 4% 2.5rem; }
    .pcs-svc-sub { margin:0 2%; font-size:.9rem; }
    .pcs-tp-step, .pcs-tp-step:nth-child(even) { grid-template-columns:1fr; }
    .pcs-tp-step:nth-child(even) .pcs-tp-num-side { order:0; }
    .pcs-tp-step:nth-child(even) .pcs-tp-text-side { order:1; border-left:none; border-right:none; }
    .pcs-tp-text-side { border-left:none; border-top:none; }
    .pcs-tp-num-side,.pcs-tp-text-side { padding:1.5rem 4%; }
  }
  @media(max-width:480px){
    .pcs-svc { padding:2rem 0 0; }
    .pcs-tp-section { padding:2rem 0; }
    .pcs-hww { padding:2rem 0; }
    .pcs-hww-card-title { font-size:.95rem; }
    .pcs-hww-card-desc { font-size:.82rem; }
    .pcs-sp-title { font-size:1.1rem; }
    .pcs-svc-tag, .pcs-tp-eyebrow, .pcs-hww-eyebrow { font-size:.65rem; }
  }

  
  /* \u{2500}\u{2500} HERO MOBILE ORDER: content first, image second \u{2500}\u{2500} */
  @media(max-width:900px){
    .pcs-hero-left { order:1 !important; }
    .pcs-hero-right { order:2 !important; }
    .ppc-hero-left { order:1 !important; }
    .ppc-hero-right { order:2 !important; }
    .smm-hero-left { order:1 !important; }
    .smm-hero-right { order:2 !important; }
  }


  /* \u{2500}\u{2500} APPROACH SECTION MOBILE \u{2500}\u{2500} */
  @media(max-width:900px){
    .ap-inner { grid-template-columns:1fr !important; gap:2.5rem !important; }
    .ap-form-wrap { max-width:100% !important; width:100% !important; }
  }
  @media(max-width:580px){
    .approach { padding:3rem 4% !important; }
    .fl-row { grid-template-columns:1fr !important; gap:0 !important; }
    .ap-form-card { padding:2rem 1.4rem !important; }
    .form-card-title { font-size:1.35rem !important; }
    .ap-heading { font-size:clamp(1.5rem,5vw,2rem) !important; }
  }
  @media(max-width:480px){
    .ap-intro { font-size:.92rem !important; }
  }

  /* \u{2500}\u{2500} FAQ MOBILE \u{2500}\u{2500} */
  .container {width:100%; }
  .faq-section { padding:4rem 6%; overflow:hidden; }
  .faq-wrapper { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; }
  .faq-item {  border-radius:12px; overflow:hidden; margin-bottom:1rem; background:#fff; }
  .faq-question { display:flex; justify-content:space-between; align-items:flex-start; padding:1rem 1.4rem; cursor:pointer; font-family:'Poppins',sans-serif; font-size:.92rem; font-weight:600; color:#0d1f2d; gap:.8rem; }
  .faq-question .icon { flex-shrink:0; color:var(--orange); font-size:1.2rem; }
  .faq-answer { padding:0 1.4rem 1rem; font-size:.88rem; line-height:1.76; color:#5a6a7a; font-family:'Poppins',sans-serif; }
  .faq-head { text-align:center; margin-bottom:2.5rem; }
  .faq-head h2 { font-family:'Poppins',sans-serif; font-size:clamp(1.6rem,3vw,2.4rem); font-weight:700; color:#0d1f2d; text-align:center; }
  .faq-head h2 span { color:var(--orange); }
  @media(max-width:768px){
    .faq-wrapper { grid-template-columns:1fr !important; }
    .faq-section { padding:3rem 4% !important; }
    .faq-head h2 { font-size:clamp(1.5rem,5vw,2rem) !important; }
  }
  @media(max-width:480px){
    .faq-section { padding:2.5rem 4% !important; }
    .faq-question { font-size:.85rem !important; padding:.85rem 1rem !important; }
    .faq-answer { font-size:.82rem !important; padding:0 1rem .85rem !important; }
  }

  /* \u{2500}\u{2500} HOW WE WORK MOBILE \u{2500}\u{2500} */
  @media(max-width:768px){
    .pcs-hww-arrow-track,
    .ppc-hww-arrow-track,
    .smm-hww-arrow-track { grid-template-columns:1fr !important; gap:1.5rem !important; }
    .pcs-hww-header, .ppc-hww-header, .smm-hww-header { padding:0 5% 3rem !important; }
    .pcs-hww-arrows-wrap, .ppc-hww-arrows-wrap, .smm-hww-arrows-wrap { padding:0 5% !important; }
  }
  @media(max-width:480px){
    .pcs-hww-card, .ppc-hww-card, .smm-hww-card { padding:1.4rem 1.2rem !important; }
    .pcs-hww-card-title, .ppc-hww-card-title, .smm-hww-card-title { font-size:.95rem !important; }
    .pcs-hww-card-desc, .ppc-hww-card-desc, .smm-hww-card-desc { font-size:.82rem !important; }
  }

  /* \u{2500}\u{2500} PROCESS SECTION MOBILE \u{2500}\u{2500} */
  @media(max-width:580px){
    .pcs-tp-step, .pcs-tp-step:nth-child(even),
    .ppc-tp-step, .ppc-tp-step:nth-child(even),
    .smm-tp-step, .smm-tp-step:nth-child(even) { grid-template-columns:1fr !important; }
    .pcs-tp-step:nth-child(even) .pcs-tp-num-side,
    .ppc-tp-step:nth-child(even) .ppc-tp-num-side,
    .smm-tp-step:nth-child(even) .smm-tp-num-side { order:0 !important; }
    .pcs-tp-step:nth-child(even) .pcs-tp-text-side,
    .ppc-tp-step:nth-child(even) .ppc-tp-text-side,
    .smm-tp-step:nth-child(even) .smm-tp-text-side { order:1 !important; border-left:none !important; border-right:none !important; }
    .pcs-tp-text-side, .ppc-tp-text-side, .smm-tp-text-side { border-left:none !important; border-top:none !important; }
    .pcs-tp-num-side,.pcs-tp-text-side,
    .ppc-tp-num-side,.ppc-tp-text-side,
    .smm-tp-num-side,.smm-tp-text-side { padding:1.5rem 4% !important; }
    .pcs-tp-header, .ppc-tp-header, .smm-tp-header { padding:0 4% 2.5rem !important; }
    .pcs-tp-body, .ppc-tp-body, .smm-tp-body { padding:0 4% !important; }
    .pcs-tp-step-title, .ppc-tp-step-title, .smm-tp-step-title { font-size:1.4rem !important; }
  }
  @media(max-width:480px){
    .pcs-tp-num-side,.pcs-tp-text-side,
    .ppc-tp-num-side,.ppc-tp-text-side,
    .smm-tp-num-side,.smm-tp-text-side { padding:1.2rem 4% !important; }
  }

  /* \u{2500}\u{2500} GLOBAL OVERFLOW FIX \u{2500}\u{2500} */
  img { max-width:100%; height:auto; }
  * { box-sizing:border-box; }
`;function c(e=.1){let t=(0,a.useRef)(null),[s,r]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let s=t.current;if(!s)return;let a=new IntersectionObserver(([e])=>{e.isIntersecting&&(r(!0),a.unobserve(s))},{threshold:e});return a.observe(s),()=>a.disconnect()},[e]),[t,s]}let l=[{num:"01",icon:(0,r.jsx)("img",{src:"/img/icon/svc-technical-seo.webp",alt:"Technical SEO",width:"28",height:"28"}),subtitle:"Fix What's Holding You Back",title:"Technical SEO",desc:"Your website may look great but if it's not technically sound, Google won't care. We perform deep-dive audits to fix crawl errors, boost speed, improve mobile responsiveness, and optimize site architecture for maximum search engine performance."},{num:"02",icon:(0,r.jsx)("img",{src:"/img/icon/svc-on-page-seo.webp",alt:"On-Page SEO",width:"28",height:"28"}),subtitle:"Optimize What You Already Have",title:"On-Page SEO",desc:"We turn your existing pages into conversion-ready SEO assets. From title tags to internal linking, our on-page strategies focus on user experience and search engine signals so every page pulls its weight in rankings and results."},{num:"03",icon:(0,r.jsx)("img",{src:"/img/icon/svc-content-management.webp",alt:"Content Management",width:"28",height:"28"}),subtitle:"Content That Attracts and Converts",title:"Content Management",desc:"We don't write for bots, we write for buyers. PCS creates high-intent, keyword-driven content that educates, engages, and converts. From landing pages to long-form blogs, we build topical authority while driving relevant traffic."},{num:"04",icon:(0,r.jsx)("img",{src:"/img/icon/svc-link-building.webp",alt:"Link Building",width:"28",height:"28"}),subtitle:"Earn Authority, Not Just Backlinks",title:"Link Building",desc:"Backlinks are still one of Google's top ranking factors but not all links are created equal. We secure high-quality, relevant backlinks through white-hat outreach and partnerships that actually move the needle."},{num:"05",icon:(0,r.jsx)("img",{src:"/img/icon/svc-local-seo.webp",alt:"Local SEO",width:"28",height:"28"}),subtitle:"Win Local Searches, Win Local Customers",title:"Local SEO",desc:"Be the first name people see when they search locally. PCS optimizes your Google Business Profile, local citations, and review strategy to boost your map pack visibility and drive more footfalls or calls."},{num:"06",icon:(0,r.jsx)("img",{src:"/img/icon/svc-seo-strategy-reporting.webp",alt:"SEO Strategy and Reporting",width:"28",height:"28"}),subtitle:"Know What's Working. And What's Next.",title:"SEO Strategy & Reporting",desc:"Get crystal-clear insights into your SEO performance. Our monthly reports go beyond vanity metrics showing you what's improving, what needs action, and where your next big SEO win lies."}],d=[{step:"01",title:"Understand",phase:"Discovery Phase",desc:"Before we optimize anything, we dive deep into your business operations and market positioning. We connect with your core team to understand your industry, target customers, revenue goals, and long-term growth vision. This phase helps us identify key performance indicators (KPIs), customer intent, market challenges, and scalable growth opportunities unique to your business.",bullets:[]},{step:"02",title:"Diagnose",phase:"Technical Audit",desc:"Our team conducts a detailed audit covering technical SEO, competitor benchmarking, keyword gaps, analytics review, website structure, and overall content health. We identify everything that\u2019s helping or hurting your visibility and search performance. Think of this as your complete SEO health check before we create the right optimization roadmap and growth strategy.",bullets:[]},{step:"03",title:"Strategize",phase:"Blueprint Creation",desc:"Based on our findings, we create a tailored SEO blueprint aligned with your business objectives and audience behavior. This includes your most critical fixes, highest-opportunity keywords, content themes, competitor insights, and channel mix. Every action is carefully mapped to achieve measurable business outcomes like traffic growth, better rankings, stronger engagement, and higher conversions.",bullets:[]},{step:"04",title:"Deploy",phase:"Full Execution",desc:"Once the strategy is finalized, our execution phase begins with structured implementation across every important SEO layer. From technical fixes and keyword-rich content updates to on-page optimization and website performance improvements, we optimize everything strategically. We also focus on local listings, mobile responsiveness, user experience, and conversion-focused journey.",bullets:[]},{step:"05",title:"Track",phase:"Live Monitoring",desc:"We don\u2019t wait for monthly reviews alone to understand what\u2019s working and what needs improvement. Our team continuously tracks real-time metrics including organic traffic, ranking shifts, user behavior, engagement patterns, and conversion signals using advanced analytics dashboards set up from day one. Every insight collected helps us refine strategies, make smarter SEO decisions consistently.",bullets:[]}],h=[{icon:(0,r.jsx)("img",{src:"/img/icon/hww-seo-strategy-planning.webp",alt:"SEO Strategy and Planning",width:"30",height:"30"}),title:"SEO Strategy & Planning",desc:"At the start, we fully comprehend your business, market and goals. Then we develop a custom SEO strategy based on long term growth not rankings. Your business objectives drive the keywords, content ideas, and technical fixes.",label:"A",arrowIcon:"\u2705"},{icon:(0,r.jsx)("img",{src:"/img/icon/hww-expert-accountability.webp",alt:"Expert Roles and Clear Accountability",width:"30",height:"30"}),title:"Expert Roles & Clear Accountability",desc:" Our SEO approach is supported by a team of experts ranging from technical SEO analysts to its content strategists and link-building specialists. Each role is owned, and everything about your SEO is handled with accountability and accuracy.",label:"B",arrowIcon:"\u{1F527}"},{icon:(0,r.jsx)("img",{src:"/img/icon/hww-review-refine-deliver.webp",alt:"Review Refine and Deliver",width:"30",height:"30"}),title:"Review, Refine & Deliver",desc:" Before anything goes live, the QA team conducts thorough checks for optimization, compliance, and performance. We test for results, refine based on the data and will only deliver once the project is aligned with both SEO best practices and your brand standards.",label:"C",arrowIcon:"\u{1F3AF}"}];function m(){return(0,r.jsxs)("section",{className:"hero",id:"hero",children:[(0,r.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

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
        .hero-img { width: 100%; object-fit: contain; display: block; }

        /* TABLET */
        @media(max-width: 960px) {
          .hero {
            grid-template-columns: 1fr;
            padding: 6rem 5% 4rem;
            min-height: auto;
            text-align: start;
            gap: 2.5rem;
          }
          .hero-left { order: 1; align-items: flex-start;  padding: 3rem 0;}
          .hero-right { width: 100% !important; height: auto !important; order: 2; display: flex; justify-content: center; }
          .hero-img { width: 100%; max-width: 480px; height: auto; }
          .hero-sub { max-width: 90%; }
          .hero-actions { justify-content: flex-start; }
        }
        /* MOBILE */
        @media(max-width: 600px) {
          .hero { padding: 5rem 4% 3rem; gap: 2rem; }
          .hero-heading { font-size: clamp(1.7rem, 6vw, 2.2rem) !important; }
          .hero-sub { font-size: 0.9rem; max-width: 100%; }
          .hero-img { max-width: 100%; width: 100%; }
          .h-badge { font-size: 0.65rem; }
        }
        .menu li { position: relative; cursor: pointer; font-size: 16px; color: black; }
      `}),(0,r.jsxs)("div",{className:"hero-left",children:[(0,r.jsxs)("div",{className:"h-badge",children:[(0,r.jsx)("div",{className:"badge-dot"})," SEO Growth"]}),(0,r.jsxs)("h1",{className:"hero-heading",children:["A Leading SEO Growth for Growth",(0,r.jsx)("span",{className:"hl lined",children:"Traffic, Leads"}),"& Growth"]}),(0,r.jsx)("p",{className:"hero-sub",children:"Whether your traffic is stagnant, leads are drying up, or you\u2019re overspending on paid campaigns, our search engine optimization services deliver sustainable, organic growth. As a performance-driven SEO company, we combine search engine marketing insights with data-backed execution to attract the right audience and turn visibility into measurable business results.         "}),(0,r.jsx)("div",{className:"hero-actions",children:(0,r.jsxs)("a",{className:"btn-fill",href:"#",children:["Explore More ",(0,r.jsx)("span",{className:"btn-arrow",children:"\u203A"})]})})]}),(0,r.jsx)("div",{className:"hero-right",children:(0,r.jsx)("img",{src:"/img/seo.png",alt:"SEO Illustration",className:"hero-img"})})]})}function g({svc:e,index:t}){let[s,a]=c(.1);return(0,r.jsxs)("div",{ref:s,className:`pcs-svc-panel${a?" vis":""}`,style:{transitionDelay:`${.05+.07*t}s`},children:[(0,r.jsx)("div",{className:"pcs-sp-slash"}),(0,r.jsx)("div",{className:"pcs-sp-ghost",children:e.num}),(0,r.jsx)("div",{className:"pcs-sp-bottom-line"}),(0,r.jsxs)("div",{className:"pcs-sp-icon-row",children:[(0,r.jsx)("span",{className:"pcs-sp-icon-dash"}),(0,r.jsx)("span",{className:"pcs-sp-icon",children:e.icon})]}),(0,r.jsxs)("div",{className:"pcs-sp-content",children:[(0,r.jsx)("div",{className:"pcs-sp-subtitle",children:e.subtitle}),(0,r.jsx)("div",{className:"pcs-sp-title",children:e.title}),(0,r.jsx)("div",{className:"pcs-sp-desc",children:e.desc})]})]})}function f(){let[e,t]=(0,a.useState)({name:"",email:"",phone:"",company:"",msg:""}),s=s=>{t({...e,[s.target.name]:s.target.value})};return(0,r.jsxs)("section",{className:"approach",id:"approach",children:[(0,r.jsx)("style",{children:`
        .approach { position:relative; padding:4rem 6%; overflow:hidden; }
        .ap-inner { position:relative; z-index:2; margin:0 auto; display:grid; grid-template-columns:1fr 0.7fr; gap:4rem; align-items:center; }
        .ap-heading { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3vw,2.6rem); line-height:1.12; color:#000; margin-bottom:1.2rem;font-weight:600; }
        .ap-heading span { color:var(--orange); }
        .ap-intro { font-size:1rem; line-height:1.8; color:#5a6a7a; margin-bottom:2rem; }
        .ap-form-wrap { position:relative; max-width:450px; }
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
        @media(max-width:900px){
          .ap-inner { grid-template-columns:1fr; gap:2.5rem; }
          .ap-form-wrap { max-width:100%; }
        }
        @media(max-width:580px){
          .approach { padding:3rem 4%; }
          .fl-row { grid-template-columns:1fr; gap:0; }
          .ap-form-card { padding:2rem 1.4rem; }
          .form-card-title { font-size:1.4rem; }
        }
      `}),(0,r.jsxs)("div",{className:"ap-inner",children:[(0,r.jsxs)("div",{className:"ap-left",children:[(0,r.jsx)("div",{className:"partners-header1",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Approach in"})}),(0,r.jsxs)("h2",{className:"ap-heading",children:["End-to-End ",(0,r.jsx)("span",{children:"SEO Services"})," Your Business Deserves"]}),(0,r.jsx)("p",{className:"ap-intro",children:"We create customized website SEO optimization strategies tailored to each business instead of following generic SEO methods. Every strategy is aligned with business objectives, audience intent, and the competitive market landscape."}),(0,r.jsx)("p",{className:"ap-intro",children:"As a trusted search engine optimization digital marketing partner, PCS studies your complete business ecosystem, including website performance, customer behavior, sales funnel, and competitor positioning to identify meaningful growth opportunities."}),(0,r.jsx)("p",{className:"ap-intro",children:"Whether working with startups or established businesses, We focus on building scalable SEO solutions that improve online visibility, strengthen brand positioning, and help businesses compete among the best search engine optimization companies."})]}),(0,r.jsx)("div",{className:"ap-form-wrap",children:(0,r.jsxs)("div",{className:"ap-form-card",children:[(0,r.jsxs)("div",{className:"form-card-eyebrow",children:[(0,r.jsx)("span",{className:"form-card-eyebrow-line"}),"Your Growth, Our Mission",(0,r.jsx)("span",{className:"form-card-eyebrow-line"})]}),(0,r.jsxs)("div",{className:"form-card-title",children:["Get Your ",(0,r.jsx)("span",{children:"Free"})," Quote"]}),(0,r.jsxs)("form",{onSubmit:s=>{s.preventDefault();let r={name:e.name,email:e.email,phone:e.phone,company:e.company,message:e.msg,url:window.location.href};i.Ay.send("service_8xw6k3r","template_jarui36",r,"XWRnXi4hK2SvmRG3q").then(()=>{alert("Message Sent Successfully \u2705"),t({name:"",email:"",phone:"",company:"",msg:""})}).catch(e=>{console.log(e),alert("Failed to send \u274C")})},children:[(0,r.jsxs)("div",{className:"fl-row",children:[(0,r.jsxs)("div",{className:"fl-group",children:[(0,r.jsx)("label",{className:"fl-label",children:"Your Name"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"fl-icon",children:"\u{1F464}"}),(0,r.jsx)("input",{className:"fl-input",type:"text",name:"name",placeholder:"Full name",value:e.name,onChange:s,required:!0})]})]}),(0,r.jsxs)("div",{className:"fl-group",children:[(0,r.jsx)("label",{className:"fl-label",children:"Company"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"fl-icon",children:"\u{1F3E2}"}),(0,r.jsx)("input",{className:"fl-input",type:"text",name:"company",placeholder:"Company name",value:e.company,onChange:s})]})]})]}),(0,r.jsxs)("div",{className:"fl-group",children:[(0,r.jsx)("label",{className:"fl-label",children:"Email Address"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"fl-icon",children:"\u2709\uFE0F"}),(0,r.jsx)("input",{className:"fl-input",type:"email",name:"email",placeholder:"your@email.com",value:e.email,onChange:s,required:!0})]})]}),(0,r.jsxs)("div",{className:"fl-group",children:[(0,r.jsx)("label",{className:"fl-label",children:"Mobile Number"}),(0,r.jsxs)("div",{className:"phone-row",children:[(0,r.jsx)("div",{className:"phone-flag",children:(0,r.jsx)("span",{className:"phone-flag-icon",children:"\u{1F4DE}"})}),(0,r.jsx)("input",{className:"fl-input",type:"tel",name:"phone",placeholder:"Mobile number",value:e.phone,onChange:s,maxLength:"10",pattern:"[0-9]{10}",required:!0})]})]}),(0,r.jsxs)("div",{className:"fl-group textarea-group",children:[(0,r.jsx)("label",{className:"fl-label",children:"Message"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"fl-icon",style:{top:"0.9rem",transform:"none"},children:"\u{1F4AC}"}),(0,r.jsx)("textarea",{className:"fl-textarea",name:"msg",placeholder:"Tell us about your business needs...",value:e.msg,onChange:s})]})]}),(0,r.jsxs)("button",{type:"submit",className:"ap-submit",children:["Get Free Consultation",(0,r.jsx)("span",{className:"ap-submit-arrow",children:"\u203A"})]})]})]})})]})]})}function u(){return(0,r.jsxs)("section",{className:"pcs-svc",children:[(0,r.jsx)("div",{className:"pcs-svc-dots"}),(0,r.jsx)("div",{className:"pcs-svc-glow pcs-ssvg1"}),(0,r.jsx)("div",{className:"pcs-svc-glow pcs-ssvg2"}),(0,r.jsxs)("div",{className:"pcs-svc-hdr",children:[(0,r.jsx)("div",{className:"partners-header1",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"center"},children:"Our Specialized SEO Marketing Services"})}),(0,r.jsxs)("h2",{className:"pcs-svc-h2",children:["Every Keyword a Strategy.",(0,r.jsx)("span",{children:" Every Click a Step Forward."})]}),(0,r.jsx)("p",{className:"pcs-svc-sub",children:"As a results-driven SEO agency, Priyam Consultancy Services crafts tailored strategies customized to your brand's goals, market, and growth stage."})]}),(0,r.jsx)("div",{className:"pcs-svc-panels",children:l.map((e,t)=>(0,r.jsx)(g,{svc:e,index:t},e.num))})]})}function x({step:e,index:t}){let[s,a]=c(.1);return(0,r.jsx)("div",{ref:s,className:`pcs-tp-step${a?" tp-vis":""}`,children:t%2==1?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"pcs-tp-text-side",children:[(0,r.jsx)("p",{className:"pcs-tp-desc",children:e.desc}),(0,r.jsx)("div",{className:"pcs-tp-bullets",children:e.bullets.map(e=>(0,r.jsx)("span",{className:"pcs-tp-bullet",children:e},e))})]}),(0,r.jsxs)("div",{className:"pcs-tp-num-side",children:[(0,r.jsx)("div",{className:"pcs-tp-bg-num",children:e.step}),(0,r.jsxs)("div",{className:"pcs-tp-step-index",children:["Step \u2014 ",e.step]}),(0,r.jsx)("div",{className:"pcs-tp-step-title",children:e.title}),(0,r.jsx)("div",{className:"pcs-tp-phase",children:e.phase})]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"pcs-tp-num-side",children:[(0,r.jsx)("div",{className:"pcs-tp-bg-num",children:e.step}),(0,r.jsxs)("div",{className:"pcs-tp-step-index",children:["Step \u2014 ",e.step]}),(0,r.jsx)("div",{className:"pcs-tp-step-title",children:e.title}),(0,r.jsx)("div",{className:"pcs-tp-phase",children:e.phase})]}),(0,r.jsxs)("div",{className:"pcs-tp-text-side",children:[(0,r.jsx)("p",{className:"pcs-tp-desc",children:e.desc}),(0,r.jsx)("div",{className:"pcs-tp-bullets",children:e.bullets.map(e=>(0,r.jsx)("span",{className:"pcs-tp-bullet",children:e},e))})]})]})})}function b(){return(0,r.jsxs)("section",{className:"pcs-tp-section",children:[(0,r.jsx)("div",{className:"pcs-tp-cross"}),(0,r.jsxs)("div",{className:"pcs-tp-header",children:[(0,r.jsx)("div",{className:"partners-header1",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"center"},children:"Our SEO Execution Process"})}),(0,r.jsxs)("h2",{className:"pcs-tp-h2",children:["Precise SEO Execution,",(0,r.jsx)("em",{children:" Backed by Data and Strategy"})]}),(0,r.jsx)("p",{className:"pcs-tp-sub",children:"Our SEO process at Priyam Consultancy Services is structured to meet the unique objectives of your business, step-by-step. From audits to content, everything we do is strategic, measurable, and customized."})]}),(0,r.jsx)("div",{className:"pcs-tp-body",children:d.map((e,t)=>(0,r.jsx)(x,{step:e,index:t},e.step))})]})}function w({item:e}){let[t,s]=c(.12);return(0,r.jsx)("div",{ref:t,className:`pcs-hww-arrow-item${s?" hww-vis":""}`,children:(0,r.jsxs)("div",{className:"pcs-hww-card",children:[(0,r.jsx)("div",{className:"pcs-hww-icon-wrap",children:e.icon}),(0,r.jsx)("div",{className:"pcs-hww-card-title",children:e.title}),(0,r.jsx)("div",{className:"pcs-hww-card-desc",children:e.desc})]})})}function v(){return(0,r.jsxs)("section",{className:"pcs-hww",children:[(0,r.jsx)("div",{className:"pcs-hww-dot-grid"}),(0,r.jsx)("div",{className:"pcs-hww-glow pcs-hww-glow-1"}),(0,r.jsx)("div",{className:"pcs-hww-glow pcs-hww-glow-2"}),(0,r.jsxs)("div",{className:"pcs-hww-header",children:[(0,r.jsx)("div",{className:"partners-header1",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"center"},children:"How We Work"})}),(0,r.jsxs)("h2",{className:"pcs-hww-h2",children:["Plan With ",(0,r.jsx)("span",{children:"Purpose."})," Execute With ",(0,r.jsx)("span",{children:"Precision."})]})]}),(0,r.jsx)("div",{className:"pcs-hww-arrows-wrap",children:(0,r.jsx)("div",{className:"pcs-hww-arrow-track",children:h.map(e=>(0,r.jsx)(w,{item:e},e.label))})})]})}let y=[{q:"How Long Does SEO Take To Show Results?",a:"SEO represents a long-term plan. Usually, you can anticipate some significant results in a 3 to 6 month period depending on your industry, competition, and the health of your website. PCS develops your SEO strategy for both short term wins and long term growth."},{q:"What\u2019s The Difference Between SEO And Paid Ads?",a:"SEO works towards organic growth getting a website to rank higher on search engines naturally without spending money per click. Paid ads (like Google Ads), give you a quick visibility fix, but stop working once you cease spending money. SEO, builds long term value that just continues to get better over time."},{q:"Can You Guarantee #1 Ranking On Google?",a:"No agency can truthfully claim to guarantee a #1 ranking \u2013 and if they do, that\u2019s a warning sign. What PCS guarantees is clear transparency on the work we\u2019re doing, data-driven strategies and insights, and regular tracking so you can see the growth you need in relevant searches."},{q:"What Industries Do You Specialize in for SEO?",a:"We\u2019ve worked across a broad spectrum of industries: ecommerce, real estate, healthcare, education, SaaS, and local service companies. Our strengths is that we know your market, and we can develop the strategies that are right for your niche."},{q:"Do You Provide Reports to Track SEO Progress?",a:"For sure. PCS will provide you with monthly performance reports that show the movements of keywords, the traffic growth, website technical fixes, and ROI metrics, so you know exactly where you stand."},{q:"Is SEO A One-Time Process or Ongoing?",a:"SEO is not a fix-it-once-then-forget-it process. Search engine algorithms continuously evolve, and your competitors\u2019 optimization does too. You\u2019ll constantly need to update content, make content improvements, and adjust technical settings in order to remain in the best position and continue growing."}];function k(){let[e,t]=(0,a.useState)(null),s=s=>{t(e===s?null:s)};return(0,r.jsxs)("section",{className:"faq-section",children:[(0,r.jsx)("div",{className:"partners-header2",style:{textAlign:"center",marginTop:"20px"},children:(0,r.jsx)("div",{className:"partners-eyebrow",children:"Frequently Asked Questions"})}),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"faq-head",children:(0,r.jsxs)("h2",{children:["Queries That Could ",(0,r.jsx)("span",{children:"Hold You Back"})]})}),(0,r.jsxs)("div",{className:"faq-wrapper",children:[(0,r.jsx)("div",{className:"faq-col",children:y.slice(0,3).map((t,a)=>(0,r.jsxs)("div",{className:"faq-item",children:[(0,r.jsxs)("div",{className:"faq-question",onClick:()=>s(a),children:[(0,r.jsx)("span",{children:t.q}),(0,r.jsx)("span",{className:"icon",children:e===a?"\u2212":"+"})]}),e===a&&(0,r.jsx)("div",{className:"faq-answer",children:t.a})]},a))}),(0,r.jsx)("div",{className:"faq-col",children:y.slice(3,6).map((t,a)=>(0,r.jsxs)("div",{className:"faq-item",children:[(0,r.jsxs)("div",{className:"faq-question",onClick:()=>s(a+3),children:[(0,r.jsx)("span",{children:t.q}),(0,r.jsx)("span",{className:"icon",children:e===a+3?"\u2212":"+"})]}),e===a+3&&(0,r.jsx)("div",{className:"faq-answer",children:t.a})]},a+3))})]})]})]})}function j(){return(0,a.useEffect)(()=>{let e="pcs-seo-styles";if(!document.getElementById(e)){let t=document.createElement("style");t.id=e,t.textContent=p,document.head.appendChild(t)}return()=>{}},[]),(0,r.jsxs)(o.A,{children:[(0,r.jsx)(m,{}),(0,r.jsx)(f,{}),(0,r.jsx)(u,{}),(0,r.jsx)(b,{}),(0,r.jsx)(v,{}),(0,r.jsx)(k,{}),(0,r.jsx)(n.A,{})]})}}}]);