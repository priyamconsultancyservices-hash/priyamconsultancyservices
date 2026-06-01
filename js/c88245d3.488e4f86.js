"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["2627"],{9393(e,t,s){s.d(t,{A:()=>n});var a=s(4848),r=s(6540);let n=function(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=e.current;if(!t)return;let s=t.getContext("2d"),a="#ed8337",r,n,i=[],o;function m(){r=t.width=t.parentElement.offsetWidth,n=t.height=t.parentElement.offsetHeight}function l(){this.reset()}l.prototype.reset=function(){this.x=Math.random()*r,this.y=Math.random()*n,this.r=2.2*Math.random()+.6,this.type=.55>Math.random()?"dot":.5>Math.random()?"ring":"plus",this.speed=.35*Math.random()+.08,this.dir=Math.random()*Math.PI*2,this.alpha=.45*Math.random()+.1,this.pulse=Math.random()*Math.PI*2,this.pulseSpeed=.018*Math.random()+.008,this.size=4*Math.random()+2},l.prototype.update=function(){this.x+=Math.cos(this.dir)*this.speed,this.y+=Math.sin(this.dir)*this.speed,this.pulse+=this.pulseSpeed,this.dir+=(Math.random()-.5)*.015,this.x<-20&&(this.x=r+20),this.x>r+20&&(this.x=-20),this.y<-20&&(this.y=n+20),this.y>n+20&&(this.y=-20)},l.prototype.draw=function(){let e=this.alpha*(.7+.3*Math.sin(this.pulse));if(s.save(),s.globalAlpha=e,s.strokeStyle=s.fillStyle=a,s.lineWidth=1,"dot"===this.type)s.beginPath(),s.arc(this.x,this.y,this.r+.4*Math.sin(this.pulse),0,2*Math.PI),s.fill();else if("ring"===this.type){let e=this.size*(.9+.15*Math.sin(this.pulse));s.beginPath(),s.arc(this.x,this.y,e,0,2*Math.PI),s.stroke()}else{let e=this.size*(.9+.1*Math.sin(this.pulse));s.beginPath(),s.moveTo(this.x-e,this.y),s.lineTo(this.x+e,this.y),s.moveTo(this.x,this.y-e),s.lineTo(this.x,this.y+e),s.stroke()}s.restore()},window.addEventListener("resize",m),m(),i=[];let d=Math.floor(r*n/9e3);for(let e=0;e<Math.max(d,28);e++)i.push(new l);return!function e(){s.clearRect(0,0,r,n),function(){let e=i.filter(e=>"dot"===e.type);for(let t=0;t<e.length;t++)for(let r=t+1;r<e.length;r++){let n=e[t].x-e[r].x,i=e[t].y-e[r].y,o=Math.sqrt(n*n+i*i);o<110&&(s.save(),s.globalAlpha=(1-o/110)*.12,s.strokeStyle=a,s.lineWidth=.7,s.beginPath(),s.moveTo(e[t].x,e[t].y),s.lineTo(e[r].x,e[r].y),s.stroke(),s.restore())}}(),i.forEach(e=>{e.update(),e.draw()}),o=requestAnimationFrame(e)}(),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",m)}},[]),(0,a.jsx)("section",{id:"cta-final",children:(0,a.jsxs)("div",{className:"cta-banner",style:{"--glow-x":"50%","--glow-y":"50%"},children:[(0,a.jsx)("canvas",{id:"ctaCanvas",ref:e}),(0,a.jsxs)("div",{className:"cta-banner-left",children:[(0,a.jsx)("div",{className:"partners-header",children:(0,a.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Ready to Start?"})}),(0,a.jsxs)("h2",{className:"cta-banner-heading",children:["Let's Talk About Your",(0,a.jsx)("br",{}),"Next Big ",(0,a.jsx)("span",{className:"hl-italic",children:"Growth Move"})]}),(0,a.jsx)("p",{className:"cta-banner-sub",children:"No pressure. Just a quick conversation to understand where you are-and how we can help you move forward."})]}),(0,a.jsxs)("div",{className:"cta-banner-right",children:[(0,a.jsxs)("a",{href:"#",className:"cta-bprimary",children:["Book a Free Consultation",(0,a.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",children:(0,a.jsx)("path",{d:"M3 8h10M9 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,a.jsx)("a",{href:"#",className:"cta-bghost",children:"View All Services"})]})]})})}},1844(e,t,s){s.r(t),s.d(t,{default:()=>k});var a=s(4848),r=s(6540),n=s(8128),i=s(9393),o=s(1085);let m=`
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
  .smm-hero {
    min-height: 100vh;
    display: grid; grid-template-columns: 1fr 1fr;
    align-items: flex-start; gap: 2rem;
    padding: 4rem 6% 4rem;
    position: relative; overflow: hidden;
    background: #004168;
  }
  .smm-hero::before {
    content:''; position:absolute; inset:0; pointer-events:none;
    background:
      radial-gradient(ellipse 65% 70% at 100% 50%, rgba(237,131,55,0.10) 0%, transparent 60%),
      radial-gradient(ellipse 50% 60% at 0% 100%, rgba(10,66,102,0.5) 0%, transparent 55%);
  }
  .smm-hero::after {
    content:''; position:absolute; inset:0; pointer-events:none;
    background-image: linear-gradient(rgba(237,131,55,0.028) 1px,transparent 1px), linear-gradient(90deg,rgba(237,131,55,0.028) 1px,transparent 1px);
    background-size: 52px 52px;
  }
  .smm-hero-left { position:relative; z-index:2; display:flex; flex-direction:column; }
  .smm-badge { display:inline-flex; align-items:flex-start; gap:0.5rem; background:rgba(237,131,55,0.1); border:1px solid rgba(237,131,55,0.28); color:var(--orange); font-size:0.72rem; font-weight:600; padding:0.38rem 1rem; border-radius:50px; letter-spacing:0.09em; text-transform:uppercase; width:fit-content; animation:smm-fadeUp .6s ease both; }
  .smm-badge-dot { width:6px; height:6px; border-radius:50%; background:var(--orange); animation:smm-pulse-dot 1.6s infinite; }
  @keyframes smm-pulse-dot { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:.4;transform:scale(1.5);} }
  .smm-hero-heading { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.6vw,3.3rem); font-weight:600; color:#fff; line-height:1.15; letter-spacing:-0.02em; margin-top:1.4rem; animation:smm-fadeUp .7s .08s ease both; }
  .smm-hero-heading .orange { color:var(--orange); }
  .smm-hero-heading .lined { position:relative; display:inline-block; }
  .smm-hero-heading .lined::after { content:''; position:absolute; left:0; bottom:-3px; width:100%; height:3px; background:var(--orange); border-radius:2px; transform:scaleX(0); transform-origin:left; animation:smm-line-in .5s .9s ease forwards; }
  @keyframes smm-line-in { to{transform:scaleX(1);} }
  .smm-hero-sub { margin-top:1.4rem; font-size:1rem; line-height:1.78; color:rgb(255,255,255); max-width:fit-content;  }
  .smm-hero-actions { margin-top:2rem; display:flex; gap:0.9rem; flex-wrap:wrap; animation:smm-fadeUp .7s .26s ease both; }
  .smm-btn-fill { background:var(--orange); color:#fff; padding:0.85rem 2rem; border-radius:50px; font-family:'DM Sans',sans-serif; font-size:0.92rem; font-weight:500; text-decoration:none; border:none; cursor:pointer; transition:background .22s,transform .18s,box-shadow .22s; box-shadow:0 4px 22px rgba(237,131,55,0.32); display:inline-flex; align-items:flex-start; gap:0.5rem; }
  .smm-btn-fill:hover { background:var(--orange-light); transform:translateY(-2px); box-shadow:0 8px 30px rgba(237,131,55,0.42); }
  .smm-btn-arrow { display:inline-flex; align-items:flex-start; justify-content:center; width:22px; height:22px; border-radius:50%; background:rgba(2,43,68,0.3); font-size:0.85rem; }
  @keyframes smm-fadeUp { from{opacity:0;transform:translateY(26px);} to{opacity:1;transform:translateY(0);} }
  @media(max-width:900px){
    .smm-hero { grid-template-columns:1fr; padding:4rem 5% 5rem; text-align:start; }
    .smm-hero-left { align-items:flex-start; }
    .smm-hero-sub { width:100%; max-width:90%; }

  }

  /* \u{2500}\u{2500} HERO IMAGE \u{2500}\u{2500} */
  .smm-hero-right { position:relative; z-index:2; display:flex; align-items:flex-start; justify-content:center;  }
  .smm-hero-img { height:470px; object-fit:contain; border-radius:16px; display:block; }

  /* \u{2500}\u{2500} SERVICES \u{2500}\u{2500} */
  .smm-svc { position:relative; background:#004168; padding:4rem 0 0; overflow:hidden; }
  .smm-svc-dots { position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(rgba(237,131,55,0.18) 1px,transparent 1px); background-size:38px 38px; animation:smm-dots-drift 30s linear infinite; opacity:0.35; }
  @keyframes smm-dots-drift { to { background-position: 38px 38px; } }
  .smm-svc-glow { position:absolute; border-radius:50%; filter:blur(100px); pointer-events:none; z-index:0; }
  .smm-ssvg1 { width:700px; height:700px; top:-200px; left:-180px; background:rgba(237,131,55,0.07); animation:smm-ssvg-pulse 14s ease-in-out infinite alternate; }
  .smm-ssvg2 { width:550px; height:550px; bottom:-180px; right:-140px; background:rgba(56,189,248,0.06); animation:smm-ssvg-pulse 18s ease-in-out infinite alternate reverse; }
  @keyframes smm-ssvg-pulse { from{opacity:.6;transform:scale(1);} to{opacity:1;transform:scale(1.15);} }
  .smm-svc-hdr { position:relative; z-index:2; text-align:center; padding:0 6% 5.5rem; margin:0 auto; }
  .smm-svc-tag { display:inline-flex; align-items:flex-start; gap:.55rem; font-size:.72rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:var(--orange); margin-bottom:1rem; font-family:'DM Sans',sans-serif; }
  .smm-svc-tagline { width:20px; height:2px; background:var(--orange); border-radius:2px; display:inline-block; }
  .smm-svc-h2 { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.8vw,2.7rem); font-weight:600; line-height:1.1; color:#fff; margin-bottom:2rem; }
  .smm-svc-h2 span { color:var(--orange); }
  .smm-svc-sub { font-size:.97rem; line-height:1.8; color:rgb(255,255,255); }
  .smm-svc-panels { position:relative; z-index:2; display:grid; grid-template-columns:repeat(3,1fr); margin: 0 3%;}
  .smm-svc-panel { position:relative; padding:3.2rem 2.6rem 3rem; overflow:hidden; cursor:default; min-height:280px; display:flex; flex-direction:column; justify-content:flex-end; border-right:1px solid rgba(255,255,255,0.04); border-bottom:1px solid rgba(255,255,255,0.04); transition:background .5s ease,opacity .6s ease,transform .6s ease; opacity:0; transform:translateY(40px) scale(0.97); }
  .smm-svc-panel.vis { opacity:1; transform:translateY(0) scale(1); }
  .smm-svc-panel:nth-child(3n) { border-right:none; }
  .smm-svc-panel:nth-child(4),.smm-svc-panel:nth-child(5),.smm-svc-panel:nth-child(6) { border-bottom:none; }
  .smm-sp-ghost { position:absolute; top:-0.3em; right:-0.1em; font-family:'Poppins',sans-serif; font-size:9rem; font-weight:900; line-height:1; color:rgba(255,255,255,0.025); letter-spacing:-.04em; pointer-events:none; z-index:0; transition:color .5s ease,transform .5s ease; user-select:none; }
  .smm-svc-panel:hover .smm-sp-ghost { color:rgba(255,255,255,0.06); transform:scale(1.05) translateY(-5px); }
  .smm-sp-slash { position:absolute; top:0; left:0; width:0; height:0; border-style:solid; border-width:55px 55px 0 0; transition:border-width .4s ease; z-index:1; }
  .smm-svc-panel:hover .smm-sp-slash { border-width:70px 70px 0 0; }
  .smm-svc-panel:nth-child(1) .smm-sp-slash { border-color:rgba(237,131,55,0.15) transparent transparent transparent; }
  .smm-svc-panel:nth-child(2) .smm-sp-slash { border-color:rgba(56,189,248,0.12) transparent transparent transparent; }
  .smm-svc-panel:nth-child(3) .smm-sp-slash { border-color:rgba(52,211,153,0.12) transparent transparent transparent; }
  .smm-svc-panel:nth-child(4) .smm-sp-slash { border-color:rgba(167,139,250,0.12) transparent transparent transparent; }
  .smm-svc-panel:nth-child(5) .smm-sp-slash { border-color:rgba(251,191,36,0.12) transparent transparent transparent; }
  .smm-svc-panel:nth-child(6) .smm-sp-slash { border-color:rgba(248,113,113,0.12) transparent transparent transparent; }
  .smm-svc-panel:nth-child(1):hover { background:linear-gradient(135deg,rgba(237,131,55,0.06) 0%,transparent 70%); }
  .smm-svc-panel:nth-child(2):hover { background:linear-gradient(135deg,rgba(56,189,248,0.05) 0%,transparent 70%); }
  .smm-svc-panel:nth-child(3):hover { background:linear-gradient(135deg,rgba(52,211,153,0.05) 0%,transparent 70%); }
  .smm-svc-panel:nth-child(4):hover { background:linear-gradient(135deg,rgba(167,139,250,0.05) 0%,transparent 70%); }
  .smm-svc-panel:nth-child(5):hover { background:linear-gradient(135deg,rgba(251,191,36,0.05) 0%,transparent 70%); }
  .smm-svc-panel:nth-child(6):hover { background:linear-gradient(135deg,rgba(248,113,113,0.05) 0%,transparent 70%); }
  .smm-sp-icon-row { display:flex; align-items:flex-start; gap:.8rem; margin-bottom:1.3rem; position:relative; z-index:2; }
  .smm-sp-icon-dash { height:2px; width:0; border-radius:2px; transition:width .5s ease; }
  .smm-svc-panel:hover .smm-sp-icon-dash { width:28px; }
  .smm-svc-panel:nth-child(1) .smm-sp-icon-dash { background:var(--orange); }
  .smm-svc-panel:nth-child(2) .smm-sp-icon-dash { background:#38bdf8; }
  .smm-svc-panel:nth-child(3) .smm-sp-icon-dash { background:#34d399; }
  .smm-svc-panel:nth-child(4) .smm-sp-icon-dash { background:#a78bfa; }
  .smm-svc-panel:nth-child(5) .smm-sp-icon-dash { background:#fbbf24; }
  .smm-svc-panel:nth-child(6) .smm-sp-icon-dash { background:#f87171; }
  .smm-sp-icon { font-size:1.6rem; transition:transform .4s cubic-bezier(.34,1.56,.64,1); display:inline-block; filter:drop-shadow(0 0 0px transparent); }
  .smm-svc-panel:nth-child(1):hover .smm-sp-icon { transform:rotate(-12deg) scale(1.2); filter:drop-shadow(0 0 8px rgba(237,131,55,0.5)); }
  .smm-svc-panel:nth-child(2):hover .smm-sp-icon { transform:rotate(12deg) scale(1.2); filter:drop-shadow(0 0 8px rgba(56,189,248,0.5)); }
  .smm-svc-panel:nth-child(3):hover .smm-sp-icon { transform:translateY(-6px) scale(1.2); filter:drop-shadow(0 0 8px rgba(52,211,153,0.5)); }
  .smm-svc-panel:nth-child(4):hover .smm-sp-icon { transform:rotate(-12deg) scale(1.2); filter:drop-shadow(0 0 8px rgba(167,139,250,0.5)); }
  .smm-svc-panel:nth-child(5):hover .smm-sp-icon { transform:rotate(12deg) scale(1.2); filter:drop-shadow(0 0 8px rgba(251,191,36,0.5)); }
  .smm-svc-panel:nth-child(6):hover .smm-sp-icon { transform:translateY(-6px) scale(1.2); filter:drop-shadow(0 0 8px rgba(248,113,113,0.5)); }
  .smm-sp-content { position:relative; z-index:2; }
  .smm-sp-subtitle {display:none; font-family:'Space Mono',monospace; font-size:.6rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; margin-bottom:.55rem; transition:color .35s; }
  
  .smm-sp-title { font-family:'Poppins',sans-serif; font-size:clamp(1.15rem,1.7vw,1.5rem); font-weight:800; color:#fff; line-height:1.15; margin-bottom:.75rem; transition:letter-spacing .35s ease; }
  .smm-svc-panel:hover .smm-sp-title { letter-spacing:.01em; }
  .smm-sp-desc { font-size:.86rem; line-height:1.76; color:rgba(255,255,255,0.93); max-height:0; overflow:hidden; transition:max-height .5s ease,color .5s ease,margin .5s ease; margin-bottom:0; }
  .smm-svc-panel:hover .smm-sp-desc { max-height:140px; color:rgb(255,255,255); margin-bottom:.9rem; font-family:'Poppins'; }
  .smm-sp-link { display:inline-flex; align-items:flex-start; gap:.4rem; font-family:'DM Sans',sans-serif; font-size:.68rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; text-decoration:none; opacity:0; transform:translateY(8px); transition:opacity .4s ease,transform .4s ease,gap .3s ease; position:relative; z-index:2; }
  .smm-svc-panel:hover .smm-sp-link { opacity:1; transform:translateY(0); }
  .smm-svc-panel:hover .smm-sp-link:hover { gap:.7rem; }
  .smm-svc-panel:nth-child(1) .smm-sp-link { color:var(--orange); }
  .smm-svc-panel:nth-child(2) .smm-sp-link { color:#38bdf8; }
  .smm-svc-panel:nth-child(3) .smm-sp-link { color:#34d399; }
  .smm-svc-panel:nth-child(4) .smm-sp-link { color:#a78bfa; }
  .smm-svc-panel:nth-child(5) .smm-sp-link { color:#fbbf24; }
  .smm-svc-panel:nth-child(6) .smm-sp-link { color:#f87171; }
  .smm-sp-link-arr { width:20px; height:20px; border-radius:50%; border:1px solid currentColor; display:flex; align-items:flex-start; justify-content:center; font-size:.72rem; transition:transform .3s ease; }
  .smm-sp-link:hover .smm-sp-link-arr { transform:rotate(45deg); }
  .smm-sp-bottom-line { position:absolute; bottom:0; left:0; height:2px; width:0; transition:width .5s ease; }
  .smm-svc-panel:hover .smm-sp-bottom-line { width:100%; }
  .smm-svc-panel:nth-child(1) .smm-sp-bottom-line { background:linear-gradient(90deg,var(--orange),transparent); }
  .smm-svc-panel:nth-child(2) .smm-sp-bottom-line { background:linear-gradient(90deg,#38bdf8,transparent); }
  .smm-svc-panel:nth-child(3) .smm-sp-bottom-line { background:linear-gradient(90deg,#34d399,transparent); }
  .smm-svc-panel:nth-child(4) .smm-sp-bottom-line { background:linear-gradient(90deg,#a78bfa,transparent); }
  .smm-svc-panel:nth-child(5) .smm-sp-bottom-line { background:linear-gradient(90deg,#fbbf24,transparent); }
  .smm-svc-panel:nth-child(6) .smm-sp-bottom-line { background:linear-gradient(90deg,#f87171,transparent); }
  @media(max-width:900px){ .smm-svc-panels { grid-template-columns:1fr 1fr; } }
  @media(max-width:580px){ .smm-svc-panels { grid-template-columns:1fr; } .smm-svc-panel { border-right:none !important; min-height:220px; } }

  /* \u{2500}\u{2500} PROCESS \u{2500}\u{2500} */
  .smm-tp-section { position:relative; background:#ffffff; padding:4rem 0 4rem; overflow:hidden; }
  .smm-tp-cross { position:absolute; inset:0; pointer-events:none; z-index:0; background-image:linear-gradient(45deg,rgba(2,43,68,0.015) 25%,transparent 25%),linear-gradient(-45deg,rgba(2,43,68,0.015) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(2,43,68,0.015) 75%),linear-gradient(-45deg,transparent 75%,rgba(2,43,68,0.015) 75%); background-size:20px 20px; background-position:0 0,0 10px,10px -10px,-10px 0px; }
  .smm-tp-header { position:relative; z-index:2; text-align:center; padding:0 6% 5rem; }
  .smm-tp-h2 { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.5vw,2.6rem); font-weight:700; line-height:1.1; color:#0d1f2d; margin-bottom:1.1rem; }
  .smm-tp-h2 em { color:var(--orange); font-style:normal; font-weight:600; }
  .smm-tp-sub { font-size:.97rem; line-height:1.8; color:#000; margin:0 auto; }
  .smm-tp-body { position:relative; z-index:2; max-width:1180px; margin:0 auto; padding:0 5%; }
  .smm-tp-step { display:grid; grid-template-columns:1fr 2fr; gap:0; margin-bottom:1px; position:relative; opacity:0; transition:opacity .6s ease,transform .6s ease; }
  .smm-tp-step.tp-vis { opacity:1; transform:none !important; }
  .smm-tp-step:nth-child(odd)  { transform:translateX(-28px); }
  .smm-tp-step:nth-child(even) { transform:translateX(28px); grid-template-columns:2fr 1fr; }
  .smm-tp-step:nth-child(1){transition-delay:.04s;} .smm-tp-step:nth-child(2){transition-delay:.15s;} .smm-tp-step:nth-child(3){transition-delay:.26s;} .smm-tp-step:nth-child(4){transition-delay:.37s;} .smm-tp-step:nth-child(5){transition-delay:.48s;}
  .smm-tp-num-side { background:#fafafa; border:1px solid rgba(2,43,68,0.06); padding:3rem 2.5rem; display:flex; flex-direction:column; justify-content:center; position:relative; overflow:hidden; transition:background .35s ease; }
  .smm-tp-step:hover .smm-tp-num-side { background:rgba(237,131,55,0.04); }
  .smm-tp-step:nth-child(even) .smm-tp-num-side { order:2; }
  .smm-tp-step:nth-child(even) .smm-tp-text-side { order:1; }
  .smm-tp-bg-num { position:absolute; bottom:-20px; right:-10px; font-family:'Poppins',sans-serif; font-size:9rem; font-weight:900; color:rgba(237,131,55,0.07); line-height:1; letter-spacing:-.06em; pointer-events:none; transition:color .35s ease; user-select:none; }
  .smm-tp-step:hover .smm-tp-bg-num { color:rgba(237,131,55,0.13); }
  .smm-tp-step-index { font-family:'Space Mono',monospace; font-size:.6rem; font-weight:700; letter-spacing:.15em; text-transform:uppercase; color:rgba(237,131,55,0.5); margin-bottom:.5rem; }
  .smm-tp-step-title { font-family:'Poppins',sans-serif; font-size:1.3rem; font-weight:600; color:#0d1f2d; line-height:1; letter-spacing:-.02em; transition:color .3s ease; position:relative; z-index:2; }
  .smm-tp-step:hover .smm-tp-step-title { color:var(--orange); }
  .smm-tp-step-title::after { content:''; display:block; margin-top:6px; height:3px; background:var(--orange); border-radius:2px; width:0; transition:width .35s ease; }
  .smm-tp-step:hover .smm-tp-step-title::after { width:48px; }
  .smm-tp-phase { margin-top:.8rem; font-family:'DM Sans',sans-serif; font-size:.78rem; font-weight:600; color:rgba(237,131,55,0.65); letter-spacing:.04em; position:relative; z-index:2; }
  .smm-tp-text-side { border:1px solid rgba(2,43,68,0.06); border-left:none; padding:3rem 2.8rem; display:flex; flex-direction:column; justify-content:center; background:#fff; position:relative; overflow:hidden; transition:background .35s ease; }
  .smm-tp-step:nth-child(even) .smm-tp-text-side { border-left:1px solid rgba(2,43,68,0.06); border-right:none; }
  .smm-tp-text-side::before { content:''; position:absolute; bottom:0; right:0; width:0; height:0; border-style:solid; border-width:0 0 32px 32px; border-color:transparent transparent rgba(237,131,55,0.1) transparent; transition:border-width .3s ease; }
  .smm-tp-step:hover .smm-tp-text-side::before { border-width:0 0 44px 44px; }
  .smm-tp-desc { font-size:.89rem; line-height:1.82; color:#010202a3; margin-bottom:1.2rem; }
  .smm-tp-bullets { display:flex; flex-direction:column; gap:.3rem; }
  .smm-tp-bullet { font-size:.85rem; font-weight:500; color:#010202a3; display:flex; align-items:flex-start; gap:.55rem; }
  .smm-tp-bullet::before { content:''; display:inline-block; width:12px; height:1.5px; background:var(--orange); flex-shrink:0; border-radius:2px; }
  @media(max-width:760px){
    .smm-tp-step,.smm-tp-step:nth-child(even) { grid-template-columns:1fr; }
    .smm-tp-step:nth-child(even) .smm-tp-num-side { order:0; }
    .smm-tp-step:nth-child(even) .smm-tp-text-side { order:1; border-left:none; border-right:none; }
    .smm-tp-text-side { border-left:none; border-top:none; }
    .smm-tp-num-side,.smm-tp-text-side { padding:2rem 5%; }
  }

  /* \u{2500}\u{2500} HOW WE WORK \u{2500}\u{2500} */
  .smm-hww { position:relative; background:#004168; padding:4rem 0 4rem; overflow:hidden; }
  .smm-hww-dot-grid { position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(rgba(237,131,55,0.13) 1px,transparent 1px); background-size:36px 36px; opacity:0.3; animation:smm-dots-drift 28s linear infinite; }
  .smm-hww-glow { position:absolute; border-radius:50%; pointer-events:none; z-index:0; filter:blur(100px); }
  .smm-hww-glow-1 { width:600px; height:600px; top:-180px; left:-160px; background:rgba(237,131,55,0.07); animation:smm-orb-float 10s ease-in-out infinite; }
  .smm-hww-glow-2 { width:500px; height:500px; bottom:-160px; right:-120px; background:rgba(56,189,248,0.05); animation:smm-orb-float 14s ease-in-out infinite reverse; }
  @keyframes smm-orb-float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-24px);} }
  .smm-hww-header { position:relative; z-index:2; text-align:center; padding:0 6% 5rem; }
  .smm-hww-h2 { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.5vw,2.9rem); font-weight:600; line-height:1.12; letter-spacing:-.02em; color:#fff; }
  .smm-hww-h2 span { color:var(--orange); }
  .smm-hww-arrows-wrap { position:relative; z-index:2; margin:0 auto; padding:0 4%; }
  .smm-hww-arrow-track { display:grid; grid-template-columns:1fr 1fr 1fr; gap:30px; }
  .smm-hww-arrow-item { position:relative; display:flex; flex-direction:column; align-items:stretch; opacity:0; transform:translateX(-50px); transition:opacity .55s ease,transform .55s cubic-bezier(.22,1,.36,1); }
  .smm-hww-arrow-item.hww-vis { opacity:1; transform:translateX(0); }
  .smm-hww-arrow-item:nth-child(1){transition-delay:.05s;} .smm-hww-arrow-item:nth-child(2){transition-delay:.2s;} .smm-hww-arrow-item:nth-child(3){transition-delay:.35s;}
  .smm-hww-card { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.07); border-radius:16px; padding:1.8rem 1.6rem; margin-bottom:2rem; flex:1; transition:background .3s ease,border-color .3s ease,transform .3s ease; cursor:default; }
  .smm-hww-card:hover { background:rgba(255,255,255,0.07); border-color:rgba(237,131,55,0.25); transform:translateY(-4px); }
  .smm-hww-icon-wrap { width:60px; height:60px; border-radius:50%; background:#004168; border:2px solid rgba(237,131,55,0.28); display:flex; align-items:center; justify-content:center; margin-bottom:1.1rem; font-size:1.5rem; box-shadow:0 6px 22px rgba(2,43,68,0.55); transition:transform .3s ease,border-color .3s ease,box-shadow .3s ease; }
  .smm-hww-card:hover .smm-hww-icon-wrap { transform:scale(1.1) rotate(-5deg); border-color:var(--orange); box-shadow:0 10px 32px rgba(237,131,55,0.22); }
  .smm-hww-card-title { font-family:'Poppins',sans-serif; font-size:1.05rem; font-weight:700; color:#ee873d; margin-bottom:.55rem; line-height:1.3; }
  .smm-hww-card-desc { font-family:'Poppins'; font-size:.88rem; line-height:1.74; color:rgb(255,255,255); letter-spacing:0.1px; }
  @media(max-width:760px){ .smm-hww-arrow-track { grid-template-columns:1fr; gap:20px; } }

 
  /* \u{2500}\u{2500} HERO MOBILE ORDER: content first, image second \u{2500}\u{2500} */
  @media(max-width:900px){
    .pcs-hero-left { order:1 !important; }
    .pcs-hero-right { order:2 !important; }
    .ppc-hero-left { order:1 !important; }
    .ppc-hero-right { order:2 !important; }
    .smm-hero-left { order:1 !important; }
    .smm-hero-right { order:2 !important; }
  }
  /* image size constraints on mobile */
  @media(max-width:900px){
    .pcs-seo-scene { max-width:300px !important; height:260px !important; }
    .pcs-hero-img { width:100% !important; height:100% !important; }
    .ppc-scene { max-width:300px !important; height:260px !important; }
    .ppc-hero-img { width:100% !important; height:100% !important; }
    .smm-scene { width:280px !important; height:260px !important; }
  }
  @media(max-width:480px){
    .pcs-seo-scene { max-width:240px !important; height:200px !important; }
    .ppc-scene { max-width:240px !important; height:200px !important; }
    .smm-scene { width:220px !important; height:200px !important; }
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
  .container {width:100%;}
  .faq-section { padding:4rem 6%; overflow:hidden; }
  .faq-wrapper { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; }
  .faq-item { border-radius:12px; overflow:hidden; margin-bottom:1rem; background:#fff; }
  .faq-question { display:flex; justify-content:space-between; align-items:flex-start; padding:1rem 1.4rem; cursor:pointer; font-family:'Poppins',sans-serif; font-size:.92rem; font-weight:600; color:#0d1f2d; gap:.8rem; }
  .faq-question .icon { flex-shrink:0; color:var(--orange); font-size:1.2rem; }
  .faq-answer { padding:0 1.4rem 1rem; font-size:.88rem; line-height:1.76; color:#5a6a7a; font-family:'Poppins',sans-serif; }
  .faq-head { text-align:start; margin-bottom:2.5rem; }
  .faq-head h2 { font-family:'Poppins',sans-serif; font-size:clamp(1.6rem,3vw,2.4rem); font-weight:700; color:#0d1f2d;text-align:center; }
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

  /* \u{2500}\u{2500} SMM HERO ORDER FIX (mobile: content top, image bottom) \u{2500}\u{2500} */
  @media(max-width:900px){
    .smm-hero { display:flex !important; flex-direction:column !important; align-items:stretch !important; }
    .smm-hero-left { order:1 !important; text-align:start; align-items:flex-start; display:flex; flex-direction:column; }
    .smm-hero-right { order:2 !important; display:flex; justify-content:center; align-items:flex-start; }
    .smm-badge { align-self:center; }
    .smm-hero-actions { justify-content:center; }
    .smm-hero-sub { text-align:start; }
    .smm-hero-heading { text-align:start; }
  }

  /* \u{2500}\u{2500} SMM HERO IMAGE MOBILE FIX \u{2500}\u{2500} */
  @media(max-width:900px){
    .smm-hero-right img { max-width:300px !important; height:auto !important; display:block; margin:0 auto; }
  }
  @media(max-width:480px){
    .smm-hero-right img { max-width:240px !important; }
    .smm-hero { padding:4rem 4% 3rem !important; gap:1.5rem !important; min-height:auto !important; }
    .smm-hero-heading { font-size:clamp(1.7rem,6vw,2.2rem) !important; }
    .smm-hero-sub { font-size:.9rem !important; }
  }
  .smm-hero-img { height:auto !important; max-width:100%; }

`;function l(e=.1){let t=(0,r.useRef)(null),[s,a]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let s=t.current;if(!s)return;let r=new IntersectionObserver(([e])=>{e.isIntersecting&&(a(!0),r.disconnect())},{threshold:e});return r.observe(s),()=>r.disconnect()},[e]),[t,s]}let d=[{num:"01",icon:(0,a.jsx)("img",{src:"/img/icon/svc-content-strategy.webp",alt:"Content Strategy and Planning",width:"28",height:"28"}),subtitle:"Brand Presence",title:"Content Strategy & Planning",desc:"A solid strategy is the backbone of successful content. We map content calendars, keyword clusters, and topic funnels aligned with your business and SEO goals."},{num:"02",icon:(0,a.jsx)("img",{src:"/img/icon/svc-content-audits.webp",alt:"Content Audits and Optimization",width:"28",height:"28"}),subtitle:"Visual Identity",title:"Content Audits & Optimization",desc:"Make your existing content work harder. We audit, update, and reoptimize underperforming content to improve rankings, engagement, and conversions."},{num:"03",icon:(0,a.jsx)("img",{src:"/img/icon/svc-seo-content.webp",alt:"SEO Content Writing",width:"28",height:"28"}),subtitle:"Paid Campaigns",title:"SEO Content Writing",desc:"Get found where it matters. We create keyword-optimized content that speaks to both search engines and your audience balancing rankings with relevance."},{num:"04",icon:(0,a.jsx)("img",{src:"/img/icon/svc-website-copy.webp",alt:"Website and Landing Page Copy",width:"28",height:"28"}),subtitle:"Community Building",title:"Website & Landing Page Copy",desc:"Every word on your site should sell. We write persuasive, conversion-optimized website and landing page content that drives action and boosts performance."},{num:"05",icon:(0,a.jsx)("img",{src:"/img/icon/svc-thought-leadership.webp",alt:"Thought Leadership and Blogs",width:"28",height:"28"}),subtitle:"Partnerships",title:"Thought Leadership & Blogs",desc:"Establish authority in your niche. Our team writes compelling, research-backed blogs and articles that reflect your expertise and connect with your readers."},{num:"06",icon:(0,a.jsx)("img",{src:"/img/icon/svc-social-email-content.webp",alt:"Content for Social and Email",width:"28",height:"28"}),subtitle:"Insights & ROI",title:"Content for Social & Email",desc:"Fuel your marketing channels. From social captions to email nurture series, we craft engaging content that keeps your brand top-of-mind and drives engagement."}],p=[{step:"01",title:"Discover",phase:"Brand Audit",desc:"We begin by understanding your brand, business goals, audience segments, market positioning, and competitive landscape in detail. This phase helps us define your unique value proposition and align your content marketing direction with measurable business objectives and long-term brand communication goals. Every successful content marketing strategy starts with complete clarity and strategic understanding.",bullets:[]},{step:"02",title:"Research & Analyze",phase:"Custom Roadmap",desc:"Our team conducts in-depth research including keyword analysis, search intent mapping, competitor benchmarking, audience behavior study, and content gap identification. This ensures your content marketing efforts are not only relevant and engaging but also strategically positioned to outperform competitors across search visibility, audience engagement, and digital authority.",bullets:[]},{step:"03",title:"Plan & Strategize",phase:"Content Production",desc:"Based on gathered insights, we develop a structured roadmap for your content marketing services aligned with business priorities and audience intent. This includes content calendars, topic clusters, SEO frameworks, funnel-based content planning, campaign structures, and strategic distribution methods designed to maximize reach, engagement, and conversion opportunities consistently across platforms.",bullets:[]},{step:"04",title:"Create & Refine",phase:"Full Execution",desc:"Our writers, editors, designers, and strategists collaborate closely to produce high-quality content marketing assets tailored to your brand voice. Each content piece is carefully crafted to maintain consistency while being optimized for SEO, readability, engagement, and user experience. Multiple review stages ensure accuracy, clarity, messaging quality, and stronger conversion effectiveness throughout every campaign.",bullets:[]},{step:"05",title:"Publish & Optimize",phase:"Continuous Growth",desc:"Publishing content is only the beginning of our continuous optimization process. We consistently monitor performance metrics such as keyword rankings, website traffic, engagement rates, user behavior, and conversions to measure effectiveness accurately. As a proactive content marketing agency, we regularly refine and optimize your content marketing assets to improve visibility, sustain growth, and deliver long-term business impact.",bullets:[]}],c=[{icon:(0,a.jsx)("img",{src:"/img/icon/hww-strategic-planning.webp",alt:"Strategic Planning",width:"28",height:"28"}),title:"Strategic Planning",desc:"Every piece of content is backed by a well-thought-out strategy. We ensure everything we create is tied to a clear goal\u2014ranking, converting, or educating."},{icon:(0,a.jsx)("img",{src:"/img/icon/hww-defined-roles.webp",alt:"Defined Roles and Collaboration",width:"28",height:"28"}),title:"Defined Roles & Collaboration",desc:"From content strategists and writers to editors and SEO analysts\u2014each expert owns their role. With clear responsibilities, we ensure seamless execution and timely delivery."},{icon:(0,a.jsx)("img",{src:"/img/icon/review-quality-control.webp",alt:"Thorough Review and Quality Control",width:"28",height:"28"}),title:"Thorough Review & Quality Control",desc:"Before anything goes live, it passes through multiple layers of quality checks. From fact-checking to formatting, we deliver nothing but polished, high-impact content."}],h=[{q:"What Does Content Marketing Actually Do For My Business?",a:"Content marketing helps attract your target audience, establish your authority, improve SEO rankings, and convert readers into leads or customers all through valuable, relevant content."},{q:"Do You Write For My Industry Specifically?",a:"Yes. We tailor content to your business, industry, and audience. Our writers research deeply to ensure every piece reflects your brand\u2019s expertise."},{q:"How Do You Decide What Content To Create?",a:"We start with a strategy phase where we align with your business goals, perform keyword research, identify gaps, and develop a content calendar accordingly."},{q:"Can You Rewrite Or Optimize My Existing Content?",a:"Absolutely. We audit your current content, update it for SEO, improve clarity, and rework it to perform better across search and engagement metrics."},{q:"Will I get reports on how the content is performing?",a:"Yes. We share performance reports that track rankings, engagement, traffic, and conversions so you always know what\u2019s working."},{q:"Do You Offer Design Or Visuals With Content?",a:"Yes, if needed. We collaborate with design partners to deliver infographics, social creatives, or visual-rich content to boost engagement and shareability."}];function g(){return(0,a.jsxs)("section",{className:"hero",id:"hero",children:[(0,a.jsx)("style",{children:`
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
          .hero-left { order: 1; align-items: flex-start; padding: 3rem 0; }
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
      `}),(0,a.jsxs)("div",{className:"hero-left",children:[(0,a.jsxs)("div",{className:"h-badge",children:[(0,a.jsx)("div",{className:"badge-dot"}),"Content Marketing"]}),(0,a.jsxs)("h1",{className:"hero-heading",children:["Turn Content into",(0,a.jsx)("span",{className:"hl lined",children:"Conversions"})," with the Content Marketing"]}),(0,a.jsx)("p",{className:"hero-sub",children:"At PCS, content marketing isn\u2019t just about writing \u2014 it\u2019s about creating value that drives results. As a performance-focused content marketing agency, we deliver content marketing services that attract, engage, and convert your ideal audience.        "}),(0,a.jsx)("div",{className:"hero-actions",children:(0,a.jsxs)("a",{className:"btn-fill",href:"#",children:["Explore More ",(0,a.jsx)("span",{className:"btn-arrow",children:"\u203A"})]})})]}),(0,a.jsx)("div",{className:"hero-right",children:(0,a.jsx)("img",{src:"/img/content-marketing.png",alt:"Content Marketing Illustration",className:"hero-img"})})]})}function f(){let[e,t]=(0,r.useState)({name:"",email:"",phone:"",company:"",msg:""}),s=s=>t({...e,[s.target.name]:s.target.value});return(0,a.jsxs)("section",{className:"approach",id:"approach",children:[(0,a.jsx)("style",{children:`
        .approach { position:relative; padding:4rem 6%; overflow:hidden; }
        .ap-inner { position:relative; z-index:2; margin:0 auto; display:grid; grid-template-columns:1fr 0.7fr; gap:4rem; align-items:center; }
        .ap-heading { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3vw,2.6rem); line-height:1.12; color:#000; margin-bottom:1.2rem; font-weight:600; }
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
        .fl-input,.fl-textarea { width:100%; padding:0.82rem 1rem 0.82rem 2.6rem; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; font-family:'Poppins',sans-serif; font-size:0.88rem; color:#fff; background:rgba(255,255,255,0.04); outline:none; transition:border-color 0.22s,background 0.22s,box-shadow 0.22s; }
        .fl-input::placeholder,.fl-textarea::placeholder { color:rgba(255,255,255,0.3); }
        .fl-input:focus,.fl-textarea:focus { border-color:var(--orange); background:rgba(237,131,55,0.06); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .fl-icon { position:absolute; left:0.85rem; top:50%; transform:translateY(-50%); font-size:0.95rem; opacity:0.5; pointer-events:none; }
        .fl-group.textarea-group .fl-icon { top:0.9rem; transform:none; }
        .fl-textarea { min-height:88px; resize:none; padding-top:0.82rem; padding-left:2.6rem; }
        .phone-row { display:flex; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; overflow:hidden; background:rgba(255,255,255,0.04); transition:border-color 0.22s,box-shadow 0.22s; }
        .phone-row:focus-within { border-color:var(--orange); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .phone-flag { display:flex; align-items:flex-start; gap:0.3rem; padding:0 0.85rem; font-size:0.82rem; font-weight:700; color:#fff; border-right:1.5px solid rgba(237,131,55,0.2); white-space:nowrap; background:rgba(237,131,55,0.08); cursor:default; flex-shrink:0; }
        .phone-row .fl-input { border:none; border-radius:0; background:transparent; box-shadow:none; padding:0.82rem 1rem; }
        .phone-row .fl-input:focus { box-shadow:none; }
        .ap-submit { width:100%; background:linear-gradient(135deg,#ed8337,#f5a66b); color:#fff; border:none; padding:1rem 1.5rem; border-radius:12px; font-family:'Poppins',sans-serif; font-size:0.97rem; font-weight:500; cursor:pointer; letter-spacing:0.02em; display:flex; align-items:flex-start; justify-content:center; gap:0.6rem; transition:transform 0.2s,box-shadow 0.2s; }
        .ap-submit:hover { transform:translateY(-2px); box-shadow:0 12px 36px rgba(237,131,55,0.5); }
        .ap-submit-arrow { display:inline-flex; align-items:flex-start; justify-content:center; width:24px; height:24px; border-radius:50%; background:rgba(2,43,68,0.25); font-size:0.9rem; }
        @media(max-width:900px){ .ap-inner { grid-template-columns:1fr; } }
      `}),(0,a.jsxs)("div",{className:"ap-inner",children:[(0,a.jsxs)("div",{className:"ap-left",children:[(0,a.jsx)("div",{className:"partners-header1",children:(0,a.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Approach in"})}),(0,a.jsxs)("h2",{className:"ap-heading",children:[(0,a.jsx)("span",{children:"Strategic Content "})," That Drives Search, Shares & Sales"]}),(0,a.jsx)("p",{className:"ap-intro",children:"Great content marketing starts with understanding your brand identity, business positioning, and long-term communication goals. We ensure every message reflects your voice, values, audience expectations, and overall brand direction consistently."}),(0,a.jsx)("p",{className:"ap-intro",children:"Our content marketing services are driven by detailed research, audience insights, competitor analysis, and market trends. This helps us create performance-focused campaigns that deliver relevance, engagement, visibility, and measurable business impact."}),(0,a.jsx)("p",{className:"ap-intro",children:"Whether your goal is SEO growth, lead generation, or audience engagement, our content marketing approach combines storytelling with strategic optimization. Every content asset is crafted to maximize reach, conversions, and brand authority."})]}),(0,a.jsx)("div",{className:"ap-form-wrap",children:(0,a.jsxs)("div",{className:"ap-form-card",children:[(0,a.jsxs)("div",{className:"form-card-eyebrow",children:[(0,a.jsx)("span",{className:"form-card-eyebrow-line"}),"Your Growth, Our Mission",(0,a.jsx)("span",{className:"form-card-eyebrow-line"})]}),(0,a.jsxs)("div",{className:"form-card-title",children:["Get Your ",(0,a.jsx)("span",{children:"Free"})," Quote"]}),(0,a.jsxs)("form",{onSubmit:s=>{s.preventDefault();let a={name:e.name,email:e.email,phone:e.phone,company:e.company,message:e.msg,url:window.location.href};n.Ay.send("service_8xw6k3r","template_jarui36",a,"XWRnXi4hK2SvmRG3q").then(()=>{alert("Message Sent Successfully \u2705"),t({name:"",email:"",phone:"",company:"",msg:""})}).catch(e=>{console.log(e),alert("Failed to send \u274C")})},children:[(0,a.jsxs)("div",{className:"fl-row",children:[(0,a.jsxs)("div",{className:"fl-group",children:[(0,a.jsx)("label",{className:"fl-label",children:"Your Name"}),(0,a.jsxs)("div",{style:{position:"relative"},children:[(0,a.jsx)("span",{className:"fl-icon",children:"\u{1F464}"}),(0,a.jsx)("input",{className:"fl-input",type:"text",name:"name",placeholder:"Full name",value:e.name,onChange:s,required:!0})]})]}),(0,a.jsxs)("div",{className:"fl-group",children:[(0,a.jsx)("label",{className:"fl-label",children:"Company"}),(0,a.jsxs)("div",{style:{position:"relative"},children:[(0,a.jsx)("span",{className:"fl-icon",children:"\u{1F3E2}"}),(0,a.jsx)("input",{className:"fl-input",type:"text",name:"company",placeholder:"Company name",value:e.company,onChange:s})]})]})]}),(0,a.jsxs)("div",{className:"fl-group",children:[(0,a.jsx)("label",{className:"fl-label",children:"Email Address"}),(0,a.jsxs)("div",{style:{position:"relative"},children:[(0,a.jsx)("span",{className:"fl-icon",children:"\u2709\uFE0F"}),(0,a.jsx)("input",{className:"fl-input",type:"email",name:"email",placeholder:"your@email.com",value:e.email,onChange:s,required:!0})]})]}),(0,a.jsxs)("div",{className:"fl-group",children:[(0,a.jsx)("label",{className:"fl-label",children:"Mobile Number"}),(0,a.jsxs)("div",{className:"phone-row",children:[(0,a.jsx)("div",{className:"phone-flag",children:(0,a.jsx)("span",{children:"\u{1F4DE}"})}),(0,a.jsx)("input",{className:"fl-input",type:"tel",name:"phone",placeholder:"Mobile number",value:e.phone,onChange:s,maxLength:"10",pattern:"[0-9]{10}",required:!0})]})]}),(0,a.jsxs)("div",{className:"fl-group textarea-group",children:[(0,a.jsx)("label",{className:"fl-label",children:"Message"}),(0,a.jsxs)("div",{style:{position:"relative"},children:[(0,a.jsx)("span",{className:"fl-icon",style:{top:"0.9rem",transform:"none"},children:"\u{1F4AC}"}),(0,a.jsx)("textarea",{className:"fl-textarea",name:"msg",placeholder:"Tell us about your social media goals...",value:e.msg,onChange:s})]})]}),(0,a.jsxs)("button",{type:"submit",className:"ap-submit",children:["Get Free Consultation ",(0,a.jsx)("span",{className:"ap-submit-arrow",children:"\u203A"})]})]})]})})]})]})}function x({svc:e,index:t}){let[s,r]=l(.1);return(0,a.jsxs)("div",{ref:s,className:`smm-svc-panel${r?" vis":""}`,style:{transitionDelay:`${.05+.07*t}s`},children:[(0,a.jsx)("div",{className:"smm-sp-slash"}),(0,a.jsx)("div",{className:"smm-sp-ghost",children:e.num}),(0,a.jsx)("div",{className:"smm-sp-bottom-line"}),(0,a.jsxs)("div",{className:"smm-sp-icon-row",children:[(0,a.jsx)("span",{className:"smm-sp-icon-dash"}),(0,a.jsx)("span",{className:"smm-sp-icon",children:e.icon})]}),(0,a.jsxs)("div",{className:"smm-sp-content",children:[(0,a.jsx)("div",{className:"smm-sp-subtitle",children:e.subtitle}),(0,a.jsx)("div",{className:"smm-sp-title",children:e.title}),(0,a.jsx)("div",{className:"smm-sp-desc",children:e.desc})]})]})}function u(){return(0,a.jsxs)("section",{className:"smm-svc",children:[(0,a.jsx)("div",{className:"smm-svc-dots"}),(0,a.jsx)("div",{className:"smm-svc-glow smm-ssvg1"}),(0,a.jsx)("div",{className:"smm-svc-glow smm-ssvg2"}),(0,a.jsxs)("div",{className:"smm-svc-hdr",children:[(0,a.jsx)("div",{className:"partners-header1",children:(0,a.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Specialized Content Marketing Services"})}),(0,a.jsxs)("h2",{className:"smm-svc-h2",children:["Not Just Content. ",(0,a.jsxs)("span",{children:[" ",(0,a.jsx)("i",{children:"Content That Works."})]})]}),(0,a.jsx)("p",{className:"smm-svc-sub",children:"At Priyam Consultancy Services, we go beyond generic blogs. We craft conversion-focused, insight-led content tailored to your brand, industry, and audience journey."})]}),(0,a.jsx)("div",{className:"smm-svc-panels",children:d.map((e,t)=>(0,a.jsx)(x,{svc:e,index:t},e.num))})]})}function b({step:e,index:t}){let[s,r]=l(.1);return(0,a.jsx)("div",{ref:s,className:`smm-tp-step${r?" tp-vis":""}`,children:t%2==1?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"smm-tp-text-side",children:[(0,a.jsx)("p",{className:"smm-tp-desc",children:e.desc}),(0,a.jsx)("div",{className:"smm-tp-bullets",children:e.bullets.map(e=>(0,a.jsx)("span",{className:"smm-tp-bullet",children:e},e))})]}),(0,a.jsxs)("div",{className:"smm-tp-num-side",children:[(0,a.jsx)("div",{className:"smm-tp-bg-num",children:e.step}),(0,a.jsxs)("div",{className:"smm-tp-step-index",children:["Step \u2014 ",e.step]}),(0,a.jsx)("div",{className:"smm-tp-step-title",children:e.title}),(0,a.jsx)("div",{className:"smm-tp-phase",children:e.phase})]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"smm-tp-num-side",children:[(0,a.jsx)("div",{className:"smm-tp-bg-num",children:e.step}),(0,a.jsxs)("div",{className:"smm-tp-step-index",children:["Step \u2014 ",e.step]}),(0,a.jsx)("div",{className:"smm-tp-step-title",children:e.title}),(0,a.jsx)("div",{className:"smm-tp-phase",children:e.phase})]}),(0,a.jsxs)("div",{className:"smm-tp-text-side",children:[(0,a.jsx)("p",{className:"smm-tp-desc",children:e.desc}),(0,a.jsx)("div",{className:"smm-tp-bullets",children:e.bullets.map(e=>(0,a.jsx)("span",{className:"smm-tp-bullet",children:e},e))})]})]})})}function w(){return(0,a.jsxs)("section",{className:"smm-tp-section",children:[(0,a.jsx)("div",{className:"smm-tp-cross"}),(0,a.jsxs)("div",{className:"smm-tp-header",children:[(0,a.jsx)("div",{className:"partners-header1",children:(0,a.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Proven Content Marketing Process"})}),(0,a.jsxs)("h2",{className:"smm-tp-h2",children:["Built on Strategy. ",(0,a.jsxs)("em",{children:[" ",(0,a.jsx)("i",{children:"Refined by Insight. "})]})," Measured by Impact."]}),(0,a.jsx)("p",{className:"smm-tp-sub",children:"Our content marketing process that will make your brand unique, and value proposition end for each stage for your customer. Let\u2019s see how Priyam Consultancy Services thought process can be a game changer for your business."})]}),(0,a.jsx)("div",{className:"smm-tp-body",children:p.map((e,t)=>(0,a.jsx)(b,{step:e,index:t},e.step))})]})}function v({item:e}){let[t,s]=l(.12);return(0,a.jsx)("div",{ref:t,className:`smm-hww-arrow-item${s?" hww-vis":""}`,children:(0,a.jsxs)("div",{className:"smm-hww-card",children:[(0,a.jsx)("div",{className:"smm-hww-icon-wrap",children:e.icon}),(0,a.jsx)("div",{className:"smm-hww-card-title",children:e.title}),(0,a.jsx)("div",{className:"smm-hww-card-desc",children:e.desc})]})})}function y(){return(0,a.jsxs)("section",{className:"smm-hww",children:[(0,a.jsx)("div",{className:"smm-hww-dot-grid"}),(0,a.jsx)("div",{className:"smm-hww-glow smm-hww-glow-1"}),(0,a.jsx)("div",{className:"smm-hww-glow smm-hww-glow-2"}),(0,a.jsxs)("div",{className:"smm-hww-header",children:[(0,a.jsx)("div",{className:"partners-header1",children:(0,a.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Focus on Your Results in Content Marketing"})}),(0,a.jsxs)("h2",{className:"smm-hww-h2",children:["Plan Smart.  ",(0,a.jsx)("span",{children:(0,a.jsx)("i",{children:"Write Better."})})," Deliver Results."]})]}),(0,a.jsx)("div",{className:"smm-hww-arrows-wrap",children:(0,a.jsx)("div",{className:"smm-hww-arrow-track",children:c.map(e=>(0,a.jsx)(v,{item:e},e.title))})})]})}function j(){let[e,t]=(0,r.useState)(null),s=s=>{t(e===s?null:s)};return(0,a.jsxs)("section",{className:"faq-section",children:[(0,a.jsx)("div",{className:"partners-header2",style:{textAlign:"center",marginTop:"20px"},children:(0,a.jsx)("div",{className:"partners-eyebrow",children:"Frequently Asked Questions"})}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"faq-head",children:(0,a.jsxs)("h2",{children:["Queries That Could ",(0,a.jsx)("span",{children:"Hold You Back"})]})}),(0,a.jsxs)("div",{className:"faq-wrapper",children:[(0,a.jsx)("div",{className:"faq-col",children:h.slice(0,3).map((t,r)=>(0,a.jsxs)("div",{className:"faq-item",children:[(0,a.jsxs)("div",{className:"faq-question",onClick:()=>s(r),children:[(0,a.jsx)("span",{children:t.q}),(0,a.jsx)("span",{className:"icon",children:e===r?"\u2212":"+"})]}),e===r&&(0,a.jsx)("div",{className:"faq-answer",children:t.a})]},r))}),(0,a.jsx)("div",{className:"faq-col",children:h.slice(3,6).map((t,r)=>(0,a.jsxs)("div",{className:"faq-item",children:[(0,a.jsxs)("div",{className:"faq-question",onClick:()=>s(r+3),children:[(0,a.jsx)("span",{children:t.q}),(0,a.jsx)("span",{className:"icon",children:e===r+3?"\u2212":"+"})]}),e===r+3&&(0,a.jsx)("div",{className:"faq-answer",children:t.a})]},r+3))})]})]})]})}function k(){return(0,r.useEffect)(()=>{let e="pcs-smm-styles";if(!document.getElementById(e)){let t=document.createElement("style");t.id=e,t.textContent=m,document.head.appendChild(t)}return()=>{}},[]),(0,a.jsxs)(o.A,{children:[(0,a.jsx)(g,{}),(0,a.jsx)(f,{}),(0,a.jsx)(u,{}),(0,a.jsx)(w,{}),(0,a.jsx)(y,{}),(0,a.jsx)(j,{}),(0,a.jsx)(i.A,{})]})}}}]);