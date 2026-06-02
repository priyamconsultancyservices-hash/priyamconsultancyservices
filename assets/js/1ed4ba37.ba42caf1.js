"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["6329"],{3177(e,t,a){a.d(t,{A:()=>s});var r=a(4848),n=a(6540);let i=`https://corsproxy.io/?${encodeURIComponent("https://www.priyamconsultancy.com/blog/feed/")}`;function s(){let[e,t]=(0,n.useState)([]),[a,s]=(0,n.useState)(!0),[o,p]=(0,n.useState)(null);return(0,n.useEffect)(()=>{fetch(i).then(e=>{if(!e.ok)throw Error(`HTTP ${e.status}`);return e.text()}).then(e=>{t(Array.from(new DOMParser().parseFromString(e,"text/xml").querySelectorAll("item")).slice(0,3).map(e=>{let t=e.querySelector("enclosure"),a=e.getElementsByTagNameNS("http://search.yahoo.com/mrss/","content")[0],r=e.getElementsByTagNameNS("http://search.yahoo.com/mrss/","thumbnail")[0],n=e.getElementsByTagNameNS("http://purl.org/rss/1.0/modules/content/","encoded")[0],i=n?.textContent||"",s=i.match(/<img[^>]+src=["']([^"']+)["']/i),o=e.querySelector("description")?.textContent||"",p=o.match(/<img[^>]+src=["']([^"']+)["']/i),c=t?.getAttribute("url")||a?.getAttribute("url")||r?.getAttribute("url")||s?.[1]||p?.[1]||null,l=(i||o).replace(/<[^>]*>/g,"").replace(/&[^;]+;/g," ").trim(),d=l.length>340?l.slice(0,340)+"...":l,m=e.getElementsByTagName("link")[0],g=m?.textContent?.trim()||e.querySelector("guid")?.textContent||"#";return{guid:e.querySelector("guid")?.textContent||Math.random().toString(),title:e.querySelector("title")?.textContent?.trim()||"Untitled",link:g,thumbnail:c,excerpt:d}})),s(!1)}).catch(e=>{p(e.message),s(!1)})},[]),(0,r.jsxs)("section",{style:{width:"100%",padding:"4rem 1rem",boxSizing:"border-box",background:"#fff"},children:[(0,r.jsxs)("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[(0,r.jsxs)("div",{style:{textAlign:"center",marginBottom:"2.5rem"},children:[(0,r.jsx)("h2",{style:{fontSize:"2rem",fontWeight:700,margin:"0 0 0.5rem",color:"#111"},children:"Blogs"}),(0,r.jsx)("p",{style:{color:"#666",margin:0,fontSize:"1rem"},children:"Stay updated with the latest in digital marketing, growth strategies, and industry trends."})]}),a&&(0,r.jsx)("p",{style:{textAlign:"center",color:"#888"},children:"Loading..."}),o&&(0,r.jsxs)("p",{style:{textAlign:"center",color:"red"},children:["Error: ",o]}),(0,r.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1.5rem"},className:"blog-grid",children:e.map(e=>(0,r.jsxs)("a",{href:e.link,target:"_blank",rel:"noreferrer",style:{border:"1px solid #e5e7eb",borderRadius:"12px",overflow:"hidden",background:"#fff",display:"flex",flexDirection:"column",textDecoration:"none",color:"inherit",transition:"box-shadow 0.2s, transform 0.2s",cursor:"pointer"},onMouseEnter:e=>{e.currentTarget.style.boxShadow="0 8px 24px rgba(0,0,0,0.12)",e.currentTarget.style.transform="translateY(-3px)"},onMouseLeave:e=>{e.currentTarget.style.boxShadow="none",e.currentTarget.style.transform="translateY(0)"},children:[(0,r.jsx)("div",{style:{width:"100%",aspectRatio:"16/9",overflow:"hidden",background:"#1a2744"},children:e.thumbnail?(0,r.jsx)("img",{src:e.thumbnail,alt:e.title,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):(0,r.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",opacity:.4,fontSize:"0.8rem"},children:"No image"})}),(0,r.jsxs)("div",{style:{padding:"1.25rem",display:"flex",flexDirection:"column",gap:"0.75rem"},children:[(0,r.jsx)("p",{style:{fontWeight:600,fontSize:"1.1rem",lineHeight:1.6,margin:0,color:"#111"},children:e.title}),(0,r.jsx)("p",{style:{color:"#444",fontSize:"0.875rem",lineHeight:1.6,flex:1,margin:0},children:e.excerpt}),(0,r.jsx)("span",{style:{display:"inline-block",background:"#E87C30",color:"#fff",padding:"0.6rem 1.5rem",borderRadius:"999px",fontWeight:500,alignSelf:"flex-start",marginTop:"0.5rem",fontSize:"0.875rem"},children:"Read More"})]})]},e.guid))})]}),(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        @media (max-width: 1024px) { .blog-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px)  { .blog-grid { grid-template-columns: 1fr !important; } }
      `}})]})}},9393(e,t,a){a.d(t,{A:()=>i});var r=a(4848),n=a(6540);let i=function(){let e=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let t=e.current;if(!t)return;let a=t.getContext("2d"),r="#ed8337",n,i,s=[],o;function p(){n=t.width=t.parentElement.offsetWidth,i=t.height=t.parentElement.offsetHeight}function c(){this.reset()}c.prototype.reset=function(){this.x=Math.random()*n,this.y=Math.random()*i,this.r=2.2*Math.random()+.6,this.type=.55>Math.random()?"dot":.5>Math.random()?"ring":"plus",this.speed=.35*Math.random()+.08,this.dir=Math.random()*Math.PI*2,this.alpha=.45*Math.random()+.1,this.pulse=Math.random()*Math.PI*2,this.pulseSpeed=.018*Math.random()+.008,this.size=4*Math.random()+2},c.prototype.update=function(){this.x+=Math.cos(this.dir)*this.speed,this.y+=Math.sin(this.dir)*this.speed,this.pulse+=this.pulseSpeed,this.dir+=(Math.random()-.5)*.015,this.x<-20&&(this.x=n+20),this.x>n+20&&(this.x=-20),this.y<-20&&(this.y=i+20),this.y>i+20&&(this.y=-20)},c.prototype.draw=function(){let e=this.alpha*(.7+.3*Math.sin(this.pulse));if(a.save(),a.globalAlpha=e,a.strokeStyle=a.fillStyle=r,a.lineWidth=1,"dot"===this.type)a.beginPath(),a.arc(this.x,this.y,this.r+.4*Math.sin(this.pulse),0,2*Math.PI),a.fill();else if("ring"===this.type){let e=this.size*(.9+.15*Math.sin(this.pulse));a.beginPath(),a.arc(this.x,this.y,e,0,2*Math.PI),a.stroke()}else{let e=this.size*(.9+.1*Math.sin(this.pulse));a.beginPath(),a.moveTo(this.x-e,this.y),a.lineTo(this.x+e,this.y),a.moveTo(this.x,this.y-e),a.lineTo(this.x,this.y+e),a.stroke()}a.restore()},window.addEventListener("resize",p),p(),s=[];let l=Math.floor(n*i/9e3);for(let e=0;e<Math.max(l,28);e++)s.push(new c);return!function e(){a.clearRect(0,0,n,i),function(){let e=s.filter(e=>"dot"===e.type);for(let t=0;t<e.length;t++)for(let n=t+1;n<e.length;n++){let i=e[t].x-e[n].x,s=e[t].y-e[n].y,o=Math.sqrt(i*i+s*s);o<110&&(a.save(),a.globalAlpha=(1-o/110)*.12,a.strokeStyle=r,a.lineWidth=.7,a.beginPath(),a.moveTo(e[t].x,e[t].y),a.lineTo(e[n].x,e[n].y),a.stroke(),a.restore())}}(),s.forEach(e=>{e.update(),e.draw()}),o=requestAnimationFrame(e)}(),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",p)}},[]),(0,r.jsx)("section",{id:"cta-final",children:(0,r.jsxs)("div",{className:"cta-banner",style:{"--glow-x":"50%","--glow-y":"50%"},children:[(0,r.jsx)("canvas",{id:"ctaCanvas",ref:e}),(0,r.jsxs)("div",{className:"cta-banner-left",children:[(0,r.jsx)("div",{className:"partners-header",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Ready to Start?"})}),(0,r.jsxs)("h2",{className:"cta-banner-heading",children:["Let's Talk About Your",(0,r.jsx)("br",{}),"Next Big ",(0,r.jsx)("span",{className:"hl-italic",children:"Growth Move"})]}),(0,r.jsx)("p",{className:"cta-banner-sub",children:"No pressure. Just a quick conversation to understand where you are-and how we can help you move forward."})]}),(0,r.jsxs)("div",{className:"cta-banner-right",children:[(0,r.jsxs)("a",{href:"#",className:"cta-bprimary",children:["Book a Free Consultation",(0,r.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",children:(0,r.jsx)("path",{d:"M3 8h10M9 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,r.jsx)("a",{href:"#",className:"cta-bghost",children:"View All Services"})]})]})})}},8653(e,t,a){a.r(t),a.d(t,{default:()=>z});var r=a(4848),n=a(6540),i=a(8128),s=a(3177),o=a(9393),p=a(1085),c=a(3572);let l=`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap');

  :root {
    --navy:        #022b44;
    --navy-deep:   #011a2a;
    --navy-mid:    #0a3652;
    --orange:      #ed8337;
    --orange-light:#f5a66b;
    --text-dim:    rgba(255,255,255,0.45);
  }
.container {
width:100%; 
}
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { overflow-x: hidden; }

  /* \u{2500}\u{2500} HERO \u{2500}\u{2500} */
  .ppc-hero {
    min-height: 100vh;
    display: grid; grid-template-columns: 1fr 1fr;
    align-items: flex-start; gap: 2rem;
    padding: 4rem 6% 4rem;
    position: relative; overflow: hidden;
    background: #004168;
  }
  .ppc-hero::before {
    content:''; position:absolute; inset:0; pointer-events:none;
    background:
      radial-gradient(ellipse 65% 70% at 100% 50%, rgba(237,131,55,0.10) 0%, transparent 60%),
      radial-gradient(ellipse 50% 60% at 0% 100%, rgba(10,66,102,0.5) 0%, transparent 55%);
  }
  .ppc-hero::after {
    content:''; position:absolute; inset:0; pointer-events:none;
    background-image: linear-gradient(rgba(237,131,55,0.028) 1px,transparent 1px), linear-gradient(90deg,rgba(237,131,55,0.028) 1px,transparent 1px);
    background-size: 52px 52px;
  }
  .ppc-hero-left { position:relative; z-index:2; display:flex; flex-direction:column; order:1; }
  .ppc-hero-right { position:relative; z-index:2; display:flex; align-items:flex-start; justify-content:center; order:2; animation:ppc-fadeUp .9s .15s ease both; }
  .ppc-badge { display:inline-flex; align-items:flex-start; gap:0.5rem; background:rgba(237,131,55,0.1); border:1px solid rgba(237,131,55,0.28); color:var(--orange); font-size:0.72rem; font-weight:600; padding:0.38rem 1rem; border-radius:50px; letter-spacing:0.09em; text-transform:uppercase; width:fit-content; animation:ppc-fadeUp .6s ease both; }
  .ppc-badge-dot { width:6px; height:6px; border-radius:50%; background:var(--orange); animation:ppc-pulse-dot 1.6s infinite; }
  @keyframes ppc-pulse-dot { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:.4;transform:scale(1.5);} }
  .ppc-hero-heading { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.6vw,3.3rem); font-weight:600; color:#fff; line-height:1.15; letter-spacing:-0.02em; margin-top:1.4rem; animation:ppc-fadeUp .7s .08s ease both; }
  .ppc-hero-heading .orange { color:var(--orange); }
  .ppc-hero-heading .lined { position:relative; display:inline-block; }
  .ppc-hero-heading .lined::after { content:''; position:absolute; left:0; bottom:-3px; width:100%; height:3px; background:var(--orange); border-radius:2px; transform:scaleX(0); transform-origin:left; animation:ppc-line-in .5s .9s ease forwards; }
  @keyframes ppc-line-in { to{transform:scaleX(1);} }
  .ppc-hero-sub { margin-top:1.4rem; font-size:1rem; line-height:1.78; color:rgb(255,255,255); max-width:fit-content; animation:ppc-fadeUp .7s .16s ease both; }
  .ppc-hero-actions { margin-top:2rem; display:flex; gap:0.9rem; flex-wrap:wrap; animation:ppc-fadeUp .7s .26s ease both; }
  .ppc-btn-fill { background:var(--orange); color:#fff; padding:0.85rem 2rem; border-radius:50px; font-family:'DM Sans',sans-serif; font-size:0.92rem; font-weight:500; text-decoration:none; border:none; cursor:pointer; transition:background .22s, transform .18s, box-shadow .22s; box-shadow:0 4px 22px rgba(237,131,55,0.32); display:inline-flex; align-items:flex-start; gap:0.5rem; }
  .ppc-btn-fill:hover { background:var(--orange-light); transform:translateY(-2px); box-shadow:0 8px 30px rgba(237,131,55,0.42); }
  .ppc-btn-arrow { display:inline-flex; align-items:flex-start; justify-content:center; width:22px; height:22px; border-radius:50%; background:rgba(2,43,68,0.3); font-size:0.85rem; }
  @keyframes ppc-fadeUp { from{opacity:0;transform:translateY(26px);} to{opacity:1;transform:translateY(0);} }
  @media(max-width:900px){
    .ppc-hero { grid-template-columns:1fr; padding:5rem 5% 4rem; text-align:start; min-height:auto; }
    .ppc-hero-left { align-items:flex-start; order:1; }
    .ppc-hero-right { order:2; width:100%; justify-content:center; }
    .ppc-hero-sub { width:100%; max-width:90%; }
  }
  @media(max-width:480px){
    .ppc-hero { padding:4rem 4% 3rem; gap:1.5rem; }
    .ppc-hero-heading { font-size:clamp(1.7rem,6vw,2.2rem) !important; }
    .ppc-hero-sub { font-size:0.92rem; }
  }

  /* \u{2500}\u{2500} PPC HERO RIGHT \u{2500}\u{2500} */
  .ppc-scene { position:relative; height:470px; display:flex; align-items:flex-start; justify-content:center; margin:0 auto; }
  .ppc-hero-img { width:100%; height:100%; object-fit:contain; display:block; }
  @keyframes ppc-float1 { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-14px);} }

  /* \u{2500}\u{2500} SERVICES \u{2500}\u{2500} */
  .ppc-svc { position:relative; background:#004168; padding:4rem 0 0; overflow:hidden; }
  .ppc-svc-dots { position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(rgba(237,131,55,0.18) 1px,transparent 1px); background-size:38px 38px; animation:ppc-dots-drift 30s linear infinite; opacity:0.35; }
  @keyframes ppc-dots-drift { to { background-position: 38px 38px; } }
  .ppc-svc-glow { position:absolute; border-radius:50%; filter:blur(100px); pointer-events:none; z-index:0; }
  .ppc-ssvg1 { width:700px; height:700px; top:-200px; left:-180px; background:rgba(237,131,55,0.07); animation:ppc-ssvg-pulse 14s ease-in-out infinite alternate; }
  .ppc-ssvg2 { width:550px; height:550px; bottom:-180px; right:-140px; background:rgba(56,189,248,0.06); animation:ppc-ssvg-pulse 18s ease-in-out infinite alternate reverse; }
  @keyframes ppc-ssvg-pulse { from{opacity:.6;transform:scale(1);} to{opacity:1;transform:scale(1.15);} }
  .ppc-svc-hdr { position:relative; z-index:2; text-align:center; padding:0 6% 5.5rem; margin:0 auto; }
  .ppc-svc-tag { display:inline-flex; align-items:flex-start; gap:.55rem; font-size:.72rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:var(--orange); margin-bottom:1rem; font-family:'DM Sans',sans-serif; }
  .ppc-svc-tagline { width:20px; height:2px; background:var(--orange); border-radius:2px; display:inline-block; }
  .ppc-svc-h2 { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.8vw,2.7rem); font-weight:600; line-height:1.1; color:#fff; margin-bottom:2rem; }
  .ppc-svc-h2 span { color:var(--orange); }
  .ppc-svc-sub { font-size:.97rem; line-height:1.8; color:rgb(255,255,255); }
  .ppc-svc-panels { position:relative; z-index:2; display:grid; grid-template-columns:repeat(3,1fr); margin: 0 3%; }
  .ppc-svc-panel { position:relative; padding:3.2rem 2.6rem 3rem; overflow:hidden; cursor:default; min-height:280px; display:flex; flex-direction:column; justify-content:flex-end; border-right:1px solid rgba(255,255,255,0.04); border-bottom:1px solid rgba(255,255,255,0.04); transition:background .5s ease, opacity .6s ease, transform .6s ease; opacity:0; transform:translateY(40px) scale(0.97); }
  .ppc-svc-panel.vis { opacity:1; transform:translateY(0) scale(1); }
  .ppc-svc-panel:nth-child(3n) { border-right:none; }
  .ppc-svc-panel:nth-child(4),.ppc-svc-panel:nth-child(5),.ppc-svc-panel:nth-child(6) { border-bottom:none; }
  .ppc-sp-ghost { position:absolute; top:-0.3em; right:-0.1em; font-family:'Poppins',sans-serif; font-size:9rem; font-weight:900; line-height:1; color:rgba(255,255,255,0.025); letter-spacing:-.04em; pointer-events:none; z-index:0; transition:color .5s ease,transform .5s ease; user-select:none; }
  .ppc-svc-panel:hover .ppc-sp-ghost { color:rgba(255,255,255,0.06); transform:scale(1.05) translateY(-5px); }
  .ppc-sp-slash { position:absolute; top:0; left:0; width:0; height:0; border-style:solid; border-width:55px 55px 0 0; transition:border-width .4s ease; z-index:1; }
  .ppc-svc-panel:hover .ppc-sp-slash { border-width:70px 70px 0 0; }
  .ppc-svc-panel:nth-child(1) .ppc-sp-slash { border-color:rgba(237,131,55,0.15) transparent transparent transparent; }
  .ppc-svc-panel:nth-child(2) .ppc-sp-slash { border-color:rgba(56,189,248,0.12) transparent transparent transparent; }
  .ppc-svc-panel:nth-child(3) .ppc-sp-slash { border-color:rgba(52,211,153,0.12) transparent transparent transparent; }
  .ppc-svc-panel:nth-child(4) .ppc-sp-slash { border-color:rgba(167,139,250,0.12) transparent transparent transparent; }
  .ppc-svc-panel:nth-child(5) .ppc-sp-slash { border-color:rgba(251,191,36,0.12) transparent transparent transparent; }
  .ppc-svc-panel:nth-child(6) .ppc-sp-slash { border-color:rgba(248,113,113,0.12) transparent transparent transparent; }
  .ppc-svc-panel:nth-child(1):hover { background:linear-gradient(135deg,rgba(237,131,55,0.06) 0%,transparent 70%); }
  .ppc-svc-panel:nth-child(2):hover { background:linear-gradient(135deg,rgba(56,189,248,0.05) 0%,transparent 70%); }
  .ppc-svc-panel:nth-child(3):hover { background:linear-gradient(135deg,rgba(52,211,153,0.05) 0%,transparent 70%); }
  .ppc-svc-panel:nth-child(4):hover { background:linear-gradient(135deg,rgba(167,139,250,0.05) 0%,transparent 70%); }
  .ppc-svc-panel:nth-child(5):hover { background:linear-gradient(135deg,rgba(251,191,36,0.05) 0%,transparent 70%); }
  .ppc-svc-panel:nth-child(6):hover { background:linear-gradient(135deg,rgba(248,113,113,0.05) 0%,transparent 70%); }
  .ppc-sp-icon-row { display:flex; align-items:flex-start; gap:.8rem; margin-bottom:1.3rem; position:relative; z-index:2; }
  .ppc-sp-icon-dash { height:2px; width:0; border-radius:2px; transition:width .5s ease; }
  .ppc-svc-panel:hover .ppc-sp-icon-dash { width:28px; }
  .ppc-svc-panel:nth-child(1) .ppc-sp-icon-dash { background:var(--orange); }
  .ppc-svc-panel:nth-child(2) .ppc-sp-icon-dash { background:#38bdf8; }
  .ppc-svc-panel:nth-child(3) .ppc-sp-icon-dash { background:#34d399; }
  .ppc-svc-panel:nth-child(4) .ppc-sp-icon-dash { background:#a78bfa; }
  .ppc-svc-panel:nth-child(5) .ppc-sp-icon-dash { background:#fbbf24; }
  .ppc-svc-panel:nth-child(6) .ppc-sp-icon-dash { background:#f87171; }
  .ppc-sp-icon { font-size:1.6rem; transition:transform .4s cubic-bezier(.34,1.56,.64,1); display:inline-block; filter:drop-shadow(0 0 0px transparent); }
  .ppc-svc-panel:nth-child(1):hover .ppc-sp-icon { transform:rotate(-12deg) scale(1.2); filter:drop-shadow(0 0 8px rgba(237,131,55,0.5)); }
  .ppc-svc-panel:nth-child(2):hover .ppc-sp-icon { transform:rotate(12deg) scale(1.2); filter:drop-shadow(0 0 8px rgba(56,189,248,0.5)); }
  .ppc-svc-panel:nth-child(3):hover .ppc-sp-icon { transform:translateY(-6px) scale(1.2); filter:drop-shadow(0 0 8px rgba(52,211,153,0.5)); }
  .ppc-svc-panel:nth-child(4):hover .ppc-sp-icon { transform:rotate(-12deg) scale(1.2); filter:drop-shadow(0 0 8px rgba(167,139,250,0.5)); }
  .ppc-svc-panel:nth-child(5):hover .ppc-sp-icon { transform:rotate(12deg) scale(1.2); filter:drop-shadow(0 0 8px rgba(251,191,36,0.5)); }
  .ppc-svc-panel:nth-child(6):hover .ppc-sp-icon { transform:translateY(-6px) scale(1.2); filter:drop-shadow(0 0 8px rgba(248,113,113,0.5)); }
  .ppc-sp-content { position:relative; z-index:2; }
  .ppc-sp-subtitle {display: none; font-family:'Space Mono',monospace; font-size:.6rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; margin-bottom:.55rem; transition:color .35s; }
  
  .ppc-sp-title { font-family:'Poppins',sans-serif; font-size:clamp(1.15rem,1.7vw,1.5rem); font-weight:800; color:#fff; line-height:1.15; margin-bottom:.75rem; transition:letter-spacing .35s ease; }
  .ppc-svc-panel:hover .ppc-sp-title { letter-spacing:.01em; }
  .ppc-sp-desc { font-size:.86rem; line-height:1.76; color:rgba(255,255,255,0.93); max-height:0; overflow:hidden; transition:max-height .5s ease,color .5s ease,margin .5s ease; margin-bottom:0; }
  .ppc-svc-panel:hover .ppc-sp-desc { max-height:140px; color:rgb(255,255,255); margin-bottom:.9rem; font-family:'Poppins'; }
  .ppc-sp-link { display:inline-flex; align-items:flex-start; gap:.4rem; font-family:'DM Sans',sans-serif; font-size:.68rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; text-decoration:none; opacity:0; transform:translateY(8px); transition:opacity .4s ease,transform .4s ease,gap .3s ease; position:relative; z-index:2; }
  .ppc-svc-panel:hover .ppc-sp-link { opacity:1; transform:translateY(0); }
  .ppc-svc-panel:hover .ppc-sp-link:hover { gap:.7rem; }
  .ppc-svc-panel:nth-child(1) .ppc-sp-link { color:var(--orange); }
  .ppc-svc-panel:nth-child(2) .ppc-sp-link { color:#38bdf8; }
  .ppc-svc-panel:nth-child(3) .ppc-sp-link { color:#34d399; }
  .ppc-svc-panel:nth-child(4) .ppc-sp-link { color:#a78bfa; }
  .ppc-svc-panel:nth-child(5) .ppc-sp-link { color:#fbbf24; }
  .ppc-svc-panel:nth-child(6) .ppc-sp-link { color:#f87171; }
  .ppc-sp-link-arr { width:20px; height:20px; border-radius:50%; border:1px solid currentColor; display:flex; align-items:flex-start; justify-content:center; font-size:.72rem; transition:transform .3s ease; }
  .ppc-sp-link:hover .ppc-sp-link-arr { transform:rotate(45deg); }
  .ppc-sp-bottom-line { position:absolute; bottom:0; left:0; height:2px; width:0; transition:width .5s ease; }
  .ppc-svc-panel:hover .ppc-sp-bottom-line { width:100%; }
  .ppc-svc-panel:nth-child(1) .ppc-sp-bottom-line { background:linear-gradient(90deg,var(--orange),transparent); }
  .ppc-svc-panel:nth-child(2) .ppc-sp-bottom-line { background:linear-gradient(90deg,#38bdf8,transparent); }
  .ppc-svc-panel:nth-child(3) .ppc-sp-bottom-line { background:linear-gradient(90deg,#34d399,transparent); }
  .ppc-svc-panel:nth-child(4) .ppc-sp-bottom-line { background:linear-gradient(90deg,#a78bfa,transparent); }
  .ppc-svc-panel:nth-child(5) .ppc-sp-bottom-line { background:linear-gradient(90deg,#fbbf24,transparent); }
  .ppc-svc-panel:nth-child(6) .ppc-sp-bottom-line { background:linear-gradient(90deg,#f87171,transparent); }
  @media(max-width:900px){ .ppc-svc-panels { grid-template-columns:1fr 1fr; } }
  @media(max-width:580px){ .ppc-svc-panels { grid-template-columns:1fr; } .ppc-svc-panel { border-right:none !important; min-height:220px; } }

  /* \u{2500}\u{2500} PROCESS \u{2500}\u{2500} */
  .ppc-tp-section { position:relative; background:#ffffff; padding:4rem 0 4rem; overflow:hidden; }
  .ppc-tp-cross { position:absolute; inset:0; pointer-events:none; z-index:0; background-image:linear-gradient(45deg,rgba(2,43,68,0.015) 25%,transparent 25%),linear-gradient(-45deg,rgba(2,43,68,0.015) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(2,43,68,0.015) 75%),linear-gradient(-45deg,transparent 75%,rgba(2,43,68,0.015) 75%); background-size:20px 20px; background-position:0 0,0 10px,10px -10px,-10px 0px; }
  .ppc-tp-header { position:relative; z-index:2; text-align:center; padding:0 6% 5rem; }
  .ppc-tp-h2 { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.5vw,2.6rem); font-weight:700; line-height:1.1; color:#0d1f2d; margin-bottom:1.1rem; }
  .ppc-tp-h2 em { color:var(--orange); font-style:normal; font-weight:600; }
  .ppc-tp-sub { font-size:.97rem; line-height:1.8; color:#000; margin:0 auto; }
  .ppc-tp-body { position:relative; z-index:2; max-width:1180px; margin:0 auto; padding:0 5%; }
  .ppc-tp-step { display:grid; grid-template-columns:1fr 2fr; gap:0; margin-bottom:1px; position:relative; opacity:0; transition:opacity .6s ease, transform .6s ease; }
  .ppc-tp-step.tp-vis { opacity:1; transform:none !important; }
  .ppc-tp-step:nth-child(odd)  { transform:translateX(-28px); }
  .ppc-tp-step:nth-child(even) { transform:translateX(28px); grid-template-columns:2fr 1fr; }
  .ppc-tp-step:nth-child(1){transition-delay:.04s;} .ppc-tp-step:nth-child(2){transition-delay:.15s;} .ppc-tp-step:nth-child(3){transition-delay:.26s;} .ppc-tp-step:nth-child(4){transition-delay:.37s;} .ppc-tp-step:nth-child(5){transition-delay:.48s;}
  .ppc-tp-num-side { background:#fafafa; border:1px solid rgba(2,43,68,0.06); padding:3rem 2.5rem; display:flex; flex-direction:column; justify-content:center; position:relative; overflow:hidden; transition:background .35s ease; }
  .ppc-tp-step:hover .ppc-tp-num-side { background:rgba(237,131,55,0.04); }
  .ppc-tp-step:nth-child(even) .ppc-tp-num-side { order:2; }
  .ppc-tp-step:nth-child(even) .ppc-tp-text-side { order:1; }
  .ppc-tp-bg-num { position:absolute; bottom:-20px; right:-10px; font-family:'Poppins',sans-serif; font-size:9rem; font-weight:900; color:rgba(237,131,55,0.07); line-height:1; letter-spacing:-.06em; pointer-events:none; transition:color .35s ease; user-select:none; }
  .ppc-tp-step:hover .ppc-tp-bg-num { color:rgba(237,131,55,0.13); }
  .ppc-tp-step-index { font-family:'Space Mono',monospace; font-size:.6rem; font-weight:700; letter-spacing:.15em; text-transform:uppercase; color:rgba(237,131,55,0.5); margin-bottom:.5rem; }
  .ppc-tp-step-title { font-family:'Poppins',sans-serif; font-size:1.5rem; font-weight:600; color:#0d1f2d; line-height:1; letter-spacing:-.02em; transition:color .3s ease; position:relative; z-index:2; }
  .ppc-tp-step:hover .ppc-tp-step-title { color:var(--orange); }
  .ppc-tp-step-title::after { content:''; display:block; margin-top:6px; height:3px; background:var(--orange); border-radius:2px; width:0; transition:width .35s ease; }
  .ppc-tp-step:hover .ppc-tp-step-title::after { width:48px; }
  .ppc-tp-phase { margin-top:.8rem; font-family:'DM Sans',sans-serif; font-size:.78rem; font-weight:600; color:rgba(237,131,55,0.65); letter-spacing:.04em; position:relative; z-index:2; }
  .ppc-tp-text-side { border:1px solid rgba(2,43,68,0.06); border-left:none; padding:3rem 2.8rem; display:flex; flex-direction:column; justify-content:center; background:#fff; position:relative; overflow:hidden; transition:background .35s ease; }
  .ppc-tp-step:nth-child(even) .ppc-tp-text-side { border-left:1px solid rgba(2,43,68,0.06); border-right:none; }
  .ppc-tp-text-side::before { content:''; position:absolute; bottom:0; right:0; width:0; height:0; border-style:solid; border-width:0 0 32px 32px; border-color:transparent transparent rgba(237,131,55,0.1) transparent; transition:border-width .3s ease; }
  .ppc-tp-step:hover .ppc-tp-text-side::before { border-width:0 0 44px 44px; }
  .ppc-tp-desc { font-size:.89rem; line-height:1.82; color:#010202a3; margin-bottom:1.2rem; }
  .ppc-tp-bullets { display:flex; flex-direction:column; gap:.3rem; }
  .ppc-tp-bullet { font-size:.85rem; font-weight:500; color:#010202a3; display:flex; align-items:flex-start; gap:.55rem; }
  .ppc-tp-bullet::before { content:''; display:inline-block; width:12px; height:1.5px; background:var(--orange); flex-shrink:0; border-radius:2px; }
  @media(max-width:760px){
    .ppc-tp-step, .ppc-tp-step:nth-child(even) { grid-template-columns:1fr; }
    .ppc-tp-step:nth-child(even) .ppc-tp-num-side { order:0; }
    .ppc-tp-step:nth-child(even) .ppc-tp-text-side { order:1; border-left:none; border-right:none; }
    .ppc-tp-text-side { border-left:none; border-top:none; }
    .ppc-tp-num-side,.ppc-tp-text-side { padding:2rem 5%; }
  }

  /* \u{2500}\u{2500} HOW WE WORK \u{2500}\u{2500} */
  .ppc-hww { position:relative; background:#004168; padding:4rem 0 4rem; overflow:hidden; }
  .ppc-hww-dot-grid { position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(rgba(237,131,55,0.13) 1px,transparent 1px); background-size:36px 36px; opacity:0.3; animation:ppc-dots-drift 28s linear infinite; }
  .ppc-hww-glow { position:absolute; border-radius:50%; pointer-events:none; z-index:0; filter:blur(100px); }
  .ppc-hww-glow-1 { width:600px; height:600px; top:-180px; left:-160px; background:rgba(237,131,55,0.07); animation:ppc-orb-float 10s ease-in-out infinite; }
  .ppc-hww-glow-2 { width:500px; height:500px; bottom:-160px; right:-120px; background:rgba(56,189,248,0.05); animation:ppc-orb-float 14s ease-in-out infinite reverse; }
  @keyframes ppc-orb-float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-24px);} }
  .ppc-hww-header { position:relative; z-index:2; text-align:center; padding:0 6% 5rem; }
  .ppc-hww-h2 { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.5vw,2.9rem); font-weight:600; line-height:1.12; letter-spacing:-.02em; color:#fff; }
  .ppc-hww-h2 span { color:var(--orange); }
  .ppc-hww-arrows-wrap { position:relative; z-index:2; margin:0 auto; padding:0 4%; }
  .ppc-hww-arrow-track { display:grid; grid-template-columns:1fr 1fr 1fr; gap:30px; }
  .ppc-hww-arrow-item { position:relative; display:flex; flex-direction:column; align-items:stretch; opacity:0; transform:translateX(-50px); transition:opacity .55s ease,transform .55s cubic-bezier(.22,1,.36,1); }
  .ppc-hww-arrow-item.hww-vis { opacity:1; transform:translateX(0); }
  .ppc-hww-arrow-item:nth-child(1){transition-delay:.05s;} .ppc-hww-arrow-item:nth-child(2){transition-delay:.2s;} .ppc-hww-arrow-item:nth-child(3){transition-delay:.35s;}
  .ppc-hww-card { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.07); border-radius:16px; padding:1.8rem 1.6rem; margin-bottom:2rem; flex:1; transition:background .3s ease,border-color .3s ease,transform .3s ease; cursor:default; }
  .ppc-hww-card:hover { background:rgba(255,255,255,0.07); border-color:rgba(237,131,55,0.25); transform:translateY(-4px); }
  .ppc-hww-icon-wrap { width:60px; height:60px; border-radius:50%; background:#004168; border:2px solid rgba(237,131,55,0.28); display:flex; align-items:center; justify-content:center; margin-bottom:1.1rem; font-size:1.5rem; box-shadow:0 6px 22px rgba(2,43,68,0.55); transition:transform .3s ease,border-color .3s ease,box-shadow .3s ease; }
  .ppc-hww-card:hover .ppc-hww-icon-wrap { transform:scale(1.1) rotate(-5deg); border-color:var(--orange); box-shadow:0 10px 32px rgba(237,131,55,0.22); }
  .ppc-hww-card-title { font-family:'Poppins',sans-serif; font-size:1.05rem; font-weight:700; color:#ee873d; margin-bottom:.55rem; line-height:1.3; }
  .ppc-hww-card-desc { font-family:'Poppins'; font-size:.88rem; line-height:1.74; color:rgb(255,255,255); letter-spacing:0.1px; }
  @media(max-width:860px){ .ppc-hww-arrow-track { grid-template-columns:1fr; gap:2rem; } }

  /* \u{2500}\u{2500} FAQ \u{2500}\u{2500} */
  .ppc-faq-answer { font-size:.92rem; }

  /* \u{2500}\u{2500} GLOBAL RESPONSIVE \u{2500}\u{2500} */
  @media(max-width:900px){
    .ppc-svc-hdr { padding:0 5% 3.5rem; }
    .ppc-tp-header { padding:0 5% 3rem; }
    .ppc-hww-header { padding:0 5% 3rem; }
    .ppc-hww-arrows-wrap { padding:0 5%; }
    .ppc-tp-body { padding:0 5%; }
  }
  @media(max-width:768px){
    .ppc-svc { padding:3rem 0 0; }
    .ppc-tp-section { padding:3rem 0; }
    .ppc-hww { padding:3rem 0; }
    .ppc-svc-h2 { font-size:clamp(1.7rem,5vw,2.2rem); }
    .ppc-tp-h2 { font-size:clamp(1.7rem,5vw,2.2rem); }
    .ppc-hww-h2 { font-size:clamp(1.7rem,5vw,2.2rem); }
    .faq-section { padding:3rem 4% !important; }
    .faq-head h2 { font-size:clamp(1.6rem,5vw,2rem) !important; }
  }
  @media(max-width:580px){
    .ppc-svc-panels { grid-template-columns:1fr; }
    .ppc-svc-panel { border-right:none !important; min-height:200px; }
    .ppc-svc-hdr { padding:0 4% 2.5rem; }
    .ppc-svc-sub { font-size:.9rem; }
    .faq-wrapper { flex-direction:column; }
  }
  @media(max-width:480px){
    .ppc-svc { padding:2rem 0 0; }
    .ppc-tp-section { padding:2rem 0; }
    .ppc-hww { padding:2rem 0; }
    .ppc-hww-card-title { font-size:.95rem; }
    .ppc-hww-card-desc { font-size:.82rem; }
    .ppc-sp-title { font-size:1.1rem; }
  }
  /* \u{2500}\u{2500} HERO MOBILE ORDER: content first, image second \u{2500}\u{2500} */
  @media(max-width:900px){
    .pcs-hero-left { order:1 !important; }
    .pcs-hero-right { order:2 !important; }
    .ppc-hero-left { order:1 !important; }
    .ppc-hero-right { order:2 !important; }
    .smm-hero-left { order:1 !important;  padding: 3rem 0;}
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
h3.faq-h3 {
    color: black;
    font-size: 2.5rem;
    font-weight: 600;
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

`;function d(e=.1){let t=(0,n.useRef)(null),[a,r]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let a=t.current;if(!a)return;let n=new IntersectionObserver(([e])=>{e.isIntersecting&&(r(!0),n.disconnect())},{threshold:e});return n.observe(a),()=>n.disconnect()},[e]),[t,a]}let m=[{num:"01",icon:(0,r.jsx)("img",{src:"/img/icon/svc-google-search-ads.webp",alt:"Google Search Ads",width:"28",height:"28"}),subtitle:"Google Search Ads ",title:"Google Search Ads",desc:"Be present when your customers are searching. Our Search Engine Marketing specialists run high-converting Google Search Ads that target the right keywords, ensuring your business shows up exactly where and when it matters. Whether it's PPC for local leads or national reach, we make every search count."},{num:"02",icon:(0,r.jsx)("img",{src:"/img/icon/svc-display-advertising.webp",alt:"Display Advertising",width:"28",height:"28"}),subtitle:"Display Advertising ",title:"Display Advertising ",desc:"Get noticed beyond search. Our visually engaging display ads reach users across millions of websites, boosting brand awareness and driving traffic \u2014 a core part of any strong performance marketing strategy."},{num:"03",icon:(0,r.jsx)("img",{src:"/img/icon/svc-youtube-video-ads.webp",alt:"YouTube Video Ads",width:"28",height:"28"}),subtitle:"YouTube Video Ads ",title:"YouTube Video Ads ",desc:"Tell your brand story through video. We create and manage YouTube ads that capture attention, build trust, and drive action \u2014 perfect for both branding and conversions within your broader pay per click in digital marketing strategy."},{num:"04",icon:(0,r.jsx)("img",{src:"/img/icon/svc-meta-ads.webp",alt:"Meta Ads Facebook and Instagram",width:"28",height:"28"}),subtitle:"Social Advertising",title:"Meta Ads (Facebook & Instagram) ",desc:"Connect with your audience on the platforms they love. Our Meta ads management, Facebook ads management, and Instagram ads management services drive traffic, leads, and sales through targeted creatives and optimized campaign strategies. As a specialist social media advertising service, we make every rupee of your social budget work harder."},{num:"05",icon:(0,r.jsx)("img",{src:"/img/icon/svc-linkedin-ads.webp",alt:"LinkedIn Ads Management",width:"28",height:"28"}),subtitle:"LinkedIn Ads ",title:"LinkedIn Ads Management ",desc:"Reach decision-makers in any industry. Our LinkedIn Ads management campaigns are tailored for B2B growth, generating high-quality leads through precise targeting and impactful messaging \u2014 ideal for companies selling to professionals and enterprises."},{num:"06",icon:(0,r.jsx)("img",{src:"/img/icon/svc-whatsapp-marketing.webp",alt:"WhatsApp Marketing",width:"28",height:"28"}),subtitle:"WhatsApp Marketing ",title:"WhatsApp Marketing ",desc:"As a dedicated WhatsApp Marketing agency, we run structured, scalable WhatsApp marketing campaigns \u2014 from strategy and API setup to bulk outreach and re-engagement. Verified, compliant, and built to deliver real business results. "}],g=[{step:"01",title:"Discover",phase:"Phase 1 \u2014 Discover",desc:"Before we launch any ads, we take time to deeply understand your business model, target audience, market positioning, and revenue goals. Our performance marketing team connects with key stakeholders to identify your customer journey, core services, unique selling points, and campaign objectives \u2014 ensuring every campaign is aligned with real business needs, customer expectations, and measurable growth outcomes.",bullets:[]},{step:"02",title:"Research & Analyze",phase:"Phase 2 \u2014 Research & Analyze ",desc:"We conduct thorough competitor research, analyze your industry landscape, review historical ad performance where available, and identify high-intent keywords and audience segments. From ideal customer profiles and buying behavior to seasonality trends and platform opportunities, we gather every critical insight needed to maximize ROI from day one \u2014 a fundamental part of any serious and scalable PPC strategy.",bullets:[]},{step:"03",title:"Strategize",phase:"Phase 3 \u2014 Strategize ",desc:"With insights in hand, we craft a custom performance marketing strategy tailored to your business goals and audience behavior. We carefully choose the right platforms across Search Engine Marketing, Meta ads management, LinkedIn Ads management, and more. From campaign structuring and compelling ad creatives to conversion-optimized landing pages, every element is designed to ensure your pay per click ads generate meaningful engagement, qualified leads, and real business results.",bullets:[]},{step:"04",title:"Launch & Optimize",phase:"Phase 4 \u2014 Launch & Optimize ",desc:"Once campaigns are live, we continuously monitor performance metrics and optimize campaigns in real time for maximum efficiency. We A/B test ad variations, adjust bidding strategies, refine audience targeting, and pause underperforming segments to improve results consistently. Our goal across every pay per click campaign is simple: reduce unnecessary ad spend, increase conversion efficiency, improve lead quality, and scale strategies that deliver measurable performance.",bullets:[]},{step:"05",title:"Report & Evolve",phase:"Phase 5 \u2014 Report & Evolve ",desc:"We provide clear, transparent, and easy-to-understand reports highlighting what\u2019s performing well, what requires improvement, and how campaigns are progressing over time. Alongside detailed monthly reviews, our team proactively updates strategies based on new market trends, platform algorithm changes, audience behavior, and evolving business priorities \u2014 ensuring your performance marketing services remain competitive, scalable, and consistently effective as your business continues to grow.",bullets:[]}],h=[{icon:(0,r.jsx)("img",{src:"/img/icon/hww-strategic-plannings.webp",alt:"Strategic Planning",width:"30",height:"30"}),title:"Strategic Planning ",desc:"Every successful pay per click in digital marketing campaign starts with a clear strategy. We take time to understand your goals, audience, and market \u2014 crafting a data-driven roadmap tailored to your business needs."},{icon:(0,r.jsx)("img",{src:"/img/icon/hww-defined-roles.webp",alt:"Defined Roles and Collaboration",width:"30",height:"30"}),title:"Defined Roles & Collaboration ",desc:"We believe great outcomes come from clear responsibilities and strong collaboration. Each team member is aligned with specific roles, ensuring smooth execution and full accountability across every performance marketing engagement."},{icon:(0,r.jsx)("img",{src:"/img/icon/hww-testing-delivery.webp",alt:"Thorough Testing and On-Time Delivery",width:"30",height:"30"}),title:"Thorough Testing & On-Time Delivery ",desc:"Before any campaign goes live, it goes through rigorous quality checks \u2014 reviewing every detail for functionality, accuracy, and performance. As a results-driven performance marketing company, we deliver only when everything is right."}],f=[{q:"What is performance marketing and how does it help my business?",a:" Performance marketing is a results-driven digital marketing approach where campaigns are optimized based on measurable actions like leads, clicks, sales, or conversions. It helps businesses improve visibility, attract targeted audiences, generate qualified leads, and maximize return on advertising investment effectively."},{q:"How much budget do I need to start a PPC campaign?",a:" PPC campaign budgets depend on your industry, competition, business goals, and target audience. We create customized strategies suitable for both small and large businesses, ensuring your budget is allocated efficiently to maximize reach, lead generation, and overall campaign performance."},{q:"Which platforms do you run PPC ads on?",a:" We run PPC campaigns across multiple platforms including Google Ads, Meta Ads (Facebook and Instagram), LinkedIn Ads, YouTube Ads, and other relevant advertising networks. Platform selection depends on your business objectives, audience behavior, and the type of conversions you want to achieve."},{q:"Is performance marketing suitable for small businesses?",a:"Yes, performance marketing is highly suitable for small businesses because it focuses on measurable outcomes and controlled spending. It allows businesses to target specific audiences, track campaign performance in real time, optimize budgets efficiently, and generate qualified leads without unnecessary advertising expenses."},{q:"How is performance marketing different from regular digital marketing?",a:" Regular digital marketing focuses broadly on brand visibility and online presence, while performance marketing is centered around measurable actions like leads, conversions, and sales. Every campaign is continuously optimized using data and analytics to improve ROI and deliver trackable business outcomes."},{q:"Do you create the ad content and landing pages too?",a:"Yes, we provide complete campaign support including ad creatives, copywriting, landing page development, audience targeting, and conversion optimization. Our approach ensures that both the advertisements and landing pages work together effectively to improve engagement, lead quality, and campaign performance."}];function u(){return(0,r.jsxs)("section",{className:"hero",id:"hero",children:[(0,r.jsx)("style",{children:`
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
      `}),(0,r.jsxs)("div",{className:"hero-left",children:[(0,r.jsxs)("div",{className:"h-badge",children:[(0,r.jsx)("div",{className:"badge-dot"}),"Performance Driven "]}),(0,r.jsxs)("h1",{className:"hero-heading",children:["Turn Your Clicks into with",(0,r.jsx)("span",{className:"hl lined",style:{marginLeft:"12px"},children:" Our Performance  "})," Marketing"]}),(0,r.jsx)("p",{className:"hero-sub",children:"At PCS, our performance marketing services are built around one thing: results. Whether it's Google Ads, Meta, LinkedIn, or display networks, we drive high-intent traffic that converts into leads, sales, and real business outcomes. As a trusted performance marketing agency, we combine data, strategy, and creativity to deliver campaigns that don't just spend your budget \u2014 they grow your business."}),(0,r.jsx)("div",{className:"hero-actions",children:(0,r.jsxs)("a",{className:"btn-fill",href:"#",children:["Get Free Audit ",(0,r.jsx)("span",{className:"btn-arrow",children:"\u203A"})]})})]}),(0,r.jsx)("div",{className:"hero-right",children:(0,r.jsx)("img",{src:"/img/performance-marketing.png",alt:"PPC Marketing Illustration",className:"hero-img"})})]})}function x(){let[e,t]=(0,n.useState)({name:"",email:"",phone:"",company:"",msg:""}),[a,s]=(0,n.useState)("idle"),o=(0,n.useRef)(null),p=a=>t({...e,[a.target.name]:a.target.value});return(0,r.jsxs)("section",{className:"approach",id:"approach",children:[(0,r.jsx)("style",{children:`
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
        .fl-input,.fl-textarea { width:100%; padding:0.82rem 1rem 0.82rem 2.6rem; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; font-family:'Poppins',sans-serif; font-size:0.88rem; color:#fff; background:rgba(255,255,255,0.04); outline:none; appearance:none; transition:border-color 0.22s,background 0.22s,box-shadow 0.22s; }
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
        .ap-submit:disabled { opacity:0.7; cursor:not-allowed; transform:none; }
        .ap-submit-arrow { display:inline-flex; align-items:flex-start; justify-content:center; width:24px; height:24px; border-radius:50%; background:rgba(2,43,68,0.25); font-size:0.9rem; }
        @media(max-width:860px){
          .ap-inner { grid-template-columns:1fr; gap:2.5rem; }
          .ap-form-wrap { max-width:100%; width:100%; }
        }
        @media(max-width:580px){
          .approach { padding:3rem 4%; }
          .fl-row { grid-template-columns:1fr; gap:0; }
          .ap-form-card { padding:2rem 1.4rem; }
          .form-card-title { font-size:1.4rem; }
          .ap-heading { font-size:clamp(1.6rem,5vw,2rem); }
        }
      `}),(0,r.jsxs)("div",{className:"ap-inner",children:[(0,r.jsxs)("div",{className:"ap-left",children:[(0,r.jsx)("div",{className:"partners-header1",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Approach in"})}),(0,r.jsxs)("h2",{className:"ap-heading",children:["Strategic ",(0,r.jsx)("span",{children:"Performance Marketing Campaigns "})," Built to Perform"]}),(0,r.jsx)("p",{className:"ap-intro",children:"Whether your goal is lead generation, eCommerce sales, or improving local visibility, our performance marketing experts create data-driven campaigns tailored to your specific business objectives and target audience behavior."}),(0,r.jsx)("p",{className:"ap-intro",children:"Using strategic audience targeting, keyword planning, and compelling ad creatives, we build campaigns designed to maximize brand visibility, customer engagement, and measurable marketing outcomes across multiple digital platforms."}),(0,r.jsx)("p",{className:"ap-intro",children:"From smart bidding strategies to continuous monitoring and optimization, every campaign is managed with precision. We focus on improving conversions, reducing costs, and driving scalable long-term business growth consistently."})]}),(0,r.jsx)("div",{className:"ap-form-wrap",children:(0,r.jsxs)("div",{className:"ap-form-card",children:[(0,r.jsxs)("div",{className:"form-card-eyebrow",children:[(0,r.jsx)("span",{className:"form-card-eyebrow-line"}),"Your Growth, Our Mission",(0,r.jsx)("span",{className:"form-card-eyebrow-line"})]}),(0,r.jsxs)("div",{className:"form-card-title",children:["Get Your ",(0,r.jsx)("span",{children:"Free"})," PPC Audit"]}),(0,r.jsxs)("form",{ref:o,onSubmit:e=>{e.preventDefault(),s("sending"),i.Ay.sendForm("service_priyam","template_priyam",o.current,"YOUR_PUBLIC_KEY").then(()=>{s("success"),t({name:"",email:"",phone:"",company:"",msg:""}),setTimeout(()=>s("idle"),4e3)}).catch(e=>{console.error("EmailJS error:",e),s("error"),setTimeout(()=>s("idle"),4e3)})},children:[(0,r.jsxs)("div",{className:"fl-row",children:[(0,r.jsxs)("div",{className:"fl-group",children:[(0,r.jsx)("label",{className:"fl-label",children:"Your Name"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"fl-icon",children:"\u{1F464}"}),(0,r.jsx)("input",{className:"fl-input",type:"text",name:"name",placeholder:"Full name",value:e.name,onChange:p,required:!0})]})]}),(0,r.jsxs)("div",{className:"fl-group",children:[(0,r.jsx)("label",{className:"fl-label",children:"Company"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"fl-icon",children:"\u{1F3E2}"}),(0,r.jsx)("input",{className:"fl-input",type:"text",name:"company",placeholder:"Company name",value:e.company,onChange:p})]})]})]}),(0,r.jsxs)("div",{className:"fl-group",children:[(0,r.jsx)("label",{className:"fl-label",children:"Email Address"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"fl-icon",children:"\u2709\uFE0F"}),(0,r.jsx)("input",{className:"fl-input",type:"email",name:"email",placeholder:"your@email.com",value:e.email,onChange:p,required:!0})]})]}),(0,r.jsxs)("div",{className:"fl-group",children:[(0,r.jsx)("label",{className:"fl-label",children:"Mobile Number"}),(0,r.jsxs)("div",{className:"phone-row",children:[(0,r.jsx)("div",{className:"phone-flag",children:(0,r.jsx)("span",{children:"\u{1F4DE}"})}),(0,r.jsx)("input",{className:"fl-input",type:"tel",name:"phone",placeholder:"Mobile number",value:e.phone,onChange:p,maxLength:"10",pattern:"[0-9]{10}",required:!0})]})]}),(0,r.jsxs)("div",{className:"fl-group textarea-group",children:[(0,r.jsx)("label",{className:"fl-label",children:"Message"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"fl-icon",style:{top:"0.9rem",transform:"none"},children:"\u{1F4AC}"}),(0,r.jsx)("textarea",{className:"fl-textarea",name:"msg",placeholder:"Tell us about your ad goals and budget...",value:e.msg,onChange:p})]})]}),"success"===a&&(0,r.jsx)("div",{style:{background:"rgba(52,211,153,0.12)",border:"1px solid rgba(52,211,153,0.4)",color:"#34d399",borderRadius:"10px",padding:"0.75rem 1rem",marginBottom:"1rem",fontSize:"0.88rem",textAlign:"center"},children:"\u2705 Message sent successfully! We'll get back to you soon."}),"error"===a&&(0,r.jsx)("div",{style:{background:"rgba(248,113,113,0.12)",border:"1px solid rgba(248,113,113,0.4)",color:"#f87171",borderRadius:"10px",padding:"0.75rem 1rem",marginBottom:"1rem",fontSize:"0.88rem",textAlign:"center"},children:"\u274C Something went wrong. Please try again."}),(0,r.jsx)("button",{type:"submit",className:"ap-submit",disabled:"sending"===a,children:"sending"===a?"Sending\u2026":(0,r.jsxs)(r.Fragment,{children:["Get Free PPC Audit ",(0,r.jsx)("span",{className:"ap-submit-arrow",children:"\u203A"})]})})]})]})})]})]})}function b({svc:e,index:t}){let[a,n]=d(.1);return(0,r.jsxs)("div",{ref:a,className:`ppc-svc-panel${n?" vis":""}`,style:{transitionDelay:`${.05+.07*t}s`},children:[(0,r.jsx)("div",{className:"ppc-sp-slash"}),(0,r.jsx)("div",{className:"ppc-sp-ghost",children:e.num}),(0,r.jsx)("div",{className:"ppc-sp-bottom-line"}),(0,r.jsxs)("div",{className:"ppc-sp-icon-row",children:[(0,r.jsx)("span",{className:"ppc-sp-icon-dash"}),(0,r.jsx)("span",{className:"ppc-sp-icon",children:e.icon})]}),(0,r.jsxs)("div",{className:"ppc-sp-content",children:[(0,r.jsx)("div",{className:"ppc-sp-subtitle",children:e.subtitle}),(0,r.jsx)("h4",{className:"ppc-sp-title",children:e.title}),(0,r.jsx)("div",{className:"ppc-sp-desc",children:e.desc})]})]})}function w(){return(0,r.jsxs)("section",{className:"ppc-svc",children:[(0,r.jsx)("div",{className:"ppc-svc-dots"}),(0,r.jsx)("div",{className:"ppc-svc-glow ppc-ssvg1"}),(0,r.jsx)("div",{className:"ppc-svc-glow ppc-ssvg2"}),(0,r.jsxs)("div",{className:"ppc-svc-hdr",children:[(0,r.jsx)("div",{className:"partners-header1",children:(0,r.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"center"},children:"Our Specialized PPC Marketing Services"})}),(0,r.jsxs)("h3",{className:"ppc-svc-h2",children:["Smart Ads. ",(0,r.jsxs)("span",{children:[(0,r.jsx)("i",{children:"Real Reach."})," "]}),"Measurable Results."]}),(0,r.jsx)("p",{className:"ppc-svc-sub",children:"At PCS we believe in delivering results that grow your business. With years of experience managing high-performing PPC campaigns across Google, Meta, and LinkedIn."})]}),(0,r.jsx)("div",{className:"ppc-svc-panels",children:m.map((e,t)=>(0,r.jsx)(b,{svc:e,index:t},e.num))})]})}function v({step:e,index:t}){let[a,n]=d(.1);return(0,r.jsx)("div",{ref:a,className:`ppc-tp-step${n?" tp-vis":""}`,children:t%2==1?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"ppc-tp-text-side",children:[(0,r.jsx)("p",{className:"ppc-tp-desc",children:e.desc}),(0,r.jsx)("div",{className:"ppc-tp-bullets",children:e.bullets.map(e=>(0,r.jsx)("span",{className:"ppc-tp-bullet",children:e},e))})]}),(0,r.jsxs)("div",{className:"ppc-tp-num-side",children:[(0,r.jsx)("div",{className:"ppc-tp-bg-num",children:e.step}),(0,r.jsxs)("div",{className:"ppc-tp-step-index",children:["Step \u2014 ",e.step]}),(0,r.jsx)("div",{className:"ppc-tp-step-title",children:e.title}),(0,r.jsx)("div",{className:"ppc-tp-phase",children:e.phase})]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"ppc-tp-num-side",children:[(0,r.jsx)("div",{className:"ppc-tp-bg-num",children:e.step}),(0,r.jsxs)("div",{className:"ppc-tp-step-index",children:["Step \u2014 ",e.step]}),(0,r.jsx)("h4",{className:"ppc-tp-step-title",children:e.title}),(0,r.jsx)("div",{className:"ppc-tp-phase",children:e.phase})]}),(0,r.jsxs)("div",{className:"ppc-tp-text-side",children:[(0,r.jsx)("p",{className:"ppc-tp-desc",children:e.desc}),(0,r.jsx)("div",{className:"ppc-tp-bullets",children:e.bullets.map(e=>(0,r.jsx)("span",{className:"ppc-tp-bullet",children:e},e))})]})]})})}function y(){return(0,r.jsxs)("section",{className:"ppc-tp-section",children:[(0,r.jsx)("div",{className:"ppc-tp-cross"}),(0,r.jsxs)("div",{className:"ppc-tp-header",children:[(0,r.jsx)("div",{className:"partners-header1",children:(0,r.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"center"},children:"Our Proven PPC Execution Process"})}),(0,r.jsxs)("h3",{className:"ppc-tp-h2",children:["Built for Clarity,",(0,r.jsx)("em",{children:" Tuned for Results"})]}),(0,r.jsx)("p",{className:"ppc-tp-sub",children:"Every pay per click ads campaign starts with strategy and ends with measurable impact. Our process ensures your ad spend works harder, smarter, and faster."})]}),(0,r.jsx)("div",{className:"ppc-tp-body",children:g.map((e,t)=>(0,r.jsx)(v,{step:e,index:t},e.step))})]})}function k({item:e}){let[t,a]=d(.12);return(0,r.jsx)("div",{ref:t,className:`ppc-hww-arrow-item${a?" hww-vis":""}`,children:(0,r.jsxs)("div",{className:"ppc-hww-card",children:[(0,r.jsx)("div",{className:"ppc-hww-icon-wrap",children:e.icon}),(0,r.jsx)("h4",{className:"ppc-hww-card-title",children:e.title}),(0,r.jsx)("div",{className:"ppc-hww-card-desc",children:e.desc})]})})}function j(){return(0,r.jsxs)("section",{className:"ppc-hww",children:[(0,r.jsx)("div",{className:"ppc-hww-dot-grid"}),(0,r.jsx)("div",{className:"ppc-hww-glow ppc-hww-glow-1"}),(0,r.jsx)("div",{className:"ppc-hww-glow ppc-hww-glow-2"}),(0,r.jsxs)("div",{className:"ppc-hww-header",children:[(0,r.jsx)("div",{className:"partners-header1",children:(0,r.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"center"},children:"Our Focus on Your Results in PPC Management"})}),(0,r.jsxs)("h3",{className:"ppc-hww-h2",children:["Plan Smart. ",(0,r.jsx)("span",{children:(0,r.jsx)("i",{children:"Execute Sharper. "})})," Deliver Right."]})]}),(0,r.jsx)("div",{className:"ppc-hww-arrows-wrap",children:(0,r.jsx)("div",{className:"ppc-hww-arrow-track",children:h.map(e=>(0,r.jsx)(k,{item:e},e.title))})})]})}function N(){let[e,t]=(0,n.useState)(null),a=a=>t(e===a?null:a);return(0,r.jsxs)("section",{className:"faq-section",children:[(0,r.jsx)("div",{className:"partners-header2",style:{textAlign:"center",marginTop:"20px"},children:(0,r.jsx)("h4",{className:"partners-eyebrow",children:"Frequently Asked Questions"})}),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"faq-head",children:(0,r.jsxs)("h3",{className:"faq-h3",children:["Questions That Could ",(0,r.jsx)("span",{children:"Hold You Back"})]})}),(0,r.jsxs)("div",{className:"faq-wrapper",children:[(0,r.jsx)("div",{className:"faq-col",children:f.slice(0,3).map((t,n)=>(0,r.jsxs)("div",{className:"faq-item",children:[(0,r.jsxs)("div",{className:"faq-question",onClick:()=>a(n),children:[(0,r.jsx)("span",{children:t.q}),(0,r.jsx)("span",{className:"icon",children:e===n?"\u2212":"+"})]}),e===n&&(0,r.jsx)("div",{className:"faq-answer ppc-faq-answer",children:t.a})]},n))}),(0,r.jsx)("div",{className:"faq-col",children:f.slice(3,6).map((t,n)=>(0,r.jsxs)("div",{className:"faq-item",children:[(0,r.jsxs)("div",{className:"faq-question",onClick:()=>a(n+3),children:[(0,r.jsx)("span",{children:t.q}),(0,r.jsx)("span",{className:"icon",children:e===n+3?"\u2212":"+"})]}),e===n+3&&(0,r.jsx)("div",{className:"faq-answer ppc-faq-answer",children:t.a})]},n+3))})]})]})]})}function z(){return(0,n.useEffect)(()=>{let e="pcs-ppc-styles";if(!document.getElementById(e)){let t=document.createElement("style");t.id=e,t.textContent=l,document.head.appendChild(t)}return()=>{}},[]),(0,r.jsxs)(p.A,{children:[(0,r.jsxs)(c.A,{children:[(0,r.jsx)("title",{children:"Performance Marketing Companies | Performance Marketing Services"}),(0,r.jsx)("meta",{name:"description",content:"Looking for top performance marketing companies? We offer result-driven performance marketing services including PPC, social media ads, and lead generation."}),(0,r.jsx)("meta",{name:"keywords",content:"PPC Marketing, PPC Advertising Company, Pay-Per-Click, pay per click advertising, PPC Management, PPC Advertising Agency, PPC services, PPC campaign"}),(0,r.jsx)("link",{rel:"canonical",href:"https://www.priyamconsultancy.com/performance-marketing"}),(0,r.jsx)("meta",{property:"og:title",content:"Performance Marketing Companies | Performance Marketing Services"}),(0,r.jsx)("meta",{property:"og:description",content:"Looking for top performance marketing companies? We offer result-driven performance marketing services including PPC, social media ads, and lead generation."}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:"https://www.priyamconsultancy.com/performance-marketing"}),(0,r.jsx)("meta",{property:"og:image",content:"https://www.priyamconsultancy.com/img/performance-marketing.png"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:"Performance Marketing Companies | Performance Marketing Services"}),(0,r.jsx)("meta",{name:"twitter:description",content:"Looking for top performance marketing companies? We offer result-driven performance marketing services including PPC, social media ads, and lead generation."}),(0,r.jsx)("meta",{name:"twitter:image",content:"https://www.priyamconsultancy.com/img/performance-marketing.png"}),[{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":"https://www.priyamconsultancy.com/",name:"Home"}},{"@type":"ListItem",position:2,item:{"@id":"https://www.priyamconsultancy.com/performance-marketing/",name:"performance-marketing"}}]},{"@context":"https://schema.org","@type":"Organization",name:"Priyam Consultancy Services",url:"https://www.priyamconsultancy.com/",logo:"https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png",contactPoint:[{"@type":"ContactPoint",telephone:"+91 96774 44048",contactType:"customer support"}],sameAs:["https://www.facebook.com/profile.php?id=61577125709962","https://www.linkedin.com/company/priyam-consultancy-services/","https://www.instagram.com/priyam_consultancy_services/","https://x.com/services91032","https://g.co/kgs/rdTYdi6"]},{"@context":"https://schema.org","@type":"Service","@id":"https://www.priyamconsultancy.com/performance-marketing/#service",name:"Performance Marketing",serviceType:"Performance Marketing Services",url:"https://www.priyamconsultancy.com/performance-marketing/",description:"Looking for top performance marketing companies? We offer result-driven performance marketing services including PPC, social media ads, and lead generation.",provider:{"@type":"Organization",name:"Priyam Consultancy Services",url:"https://www.priyamconsultancy.com/",logo:{"@type":"ImageObject",url:"https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png"}},areaServed:{"@type":"Country",name:"India"}},{"@context":"https://schema.org/","@type":"Product",name:"performance-marketing",image:["https://www.priyamconsultancy.com/img/performance-marketing.png"],description:"Best performance marketing services in Coimbatore offering Google Ads, Meta Ads, PPC campaign management, lead generation, conversion optimization, audience targeting and ROI-focused advertising solutions.",brand:{"@type":"Brand",name:"Priyam Consultancy Services"},review:{"@type":"Review",reviewRating:{"@type":"Rating",ratingValue:"4.9",bestRating:"5",worstRating:"1"},author:{"@type":"Person",name:"Admin"}},aggregateRating:{"@type":"AggregateRating",ratingValue:"4.9",reviewCount:"4732"},offers:{"@type":"Offer",url:"https://www.priyamconsultancy.com/performance-marketing/",priceCurrency:"USD",price:"00.00",priceValidUntil:"2026-12-31",itemCondition:"https://schema.org/UsedCondition",availability:"https://schema.org/InStock",seller:{"@type":"Organization",name:"priyamconsultancy.com"}}},{"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"What is performance marketing and how does it help my business?",acceptedAnswer:{"@type":"Answer",text:"Performance marketing is a results-driven digital marketing approach where campaigns are optimized based on measurable actions like leads, clicks, sales, or conversions. It helps businesses improve visibility, attract targeted audiences, generate qualified leads, and maximize return on advertising investment effectively."}},{"@type":"Question",name:"How much budget do I need to start a PPC campaign?",acceptedAnswer:{"@type":"Answer",text:"PPC campaign budgets depend on your industry, competition, business goals, and target audience. We create customized strategies suitable for both small and large businesses, ensuring your budget is allocated efficiently to maximize reach, lead generation, and overall campaign performance."}},{"@type":"Question",name:"Which platforms do you run PPC ads on?",acceptedAnswer:{"@type":"Answer",text:"We run PPC campaigns across multiple platforms including Google Ads, Meta Ads (Facebook and Instagram), LinkedIn Ads, YouTube Ads, and other relevant advertising networks. Platform selection depends on your business objectives, audience behavior, and the type of conversions you want to achieve."}},{"@type":"Question",name:"Is performance marketing suitable for small businesses?",acceptedAnswer:{"@type":"Answer",text:"Yes, performance marketing is highly suitable for small businesses because it focuses on measurable outcomes and controlled spending. It allows businesses to target specific audiences, track campaign performance in real time, optimize budgets efficiently, and generate qualified leads without unnecessary advertising expenses."}},{"@type":"Question",name:"How is performance marketing different from regular digital marketing?",acceptedAnswer:{"@type":"Answer",text:"Regular digital marketing focuses broadly on brand visibility and online presence, while performance marketing is centered around measurable actions like leads, conversions, and sales. Every campaign is continuously optimized using data and analytics to improve ROI and deliver trackable business outcomes."}},{"@type":"Question",name:"Do you create the ad content and landing pages too?",acceptedAnswer:{"@type":"Answer",text:"Yes, we provide complete campaign support including ad creatives, copywriting, landing page development, audience targeting, and conversion optimization. Our approach ensures that both the advertisements and landing pages work together effectively to improve engagement, lead quality, and campaign performance."}}]}].map((e,t)=>(0,r.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(e)}},t))]}),(0,r.jsx)(u,{}),(0,r.jsx)(x,{}),(0,r.jsx)(w,{}),(0,r.jsx)(y,{}),(0,r.jsx)(j,{}),(0,r.jsx)(N,{}),(0,r.jsx)(s.A,{}),(0,r.jsx)(o.A,{})]})}}}]);