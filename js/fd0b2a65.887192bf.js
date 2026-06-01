"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["5408"],{3177(e,t,i){i.d(t,{A:()=>s});var r=i(4848),n=i(6540);let a=`https://corsproxy.io/?${encodeURIComponent("https://www.priyamconsultancy.com/blog/feed/")}`;function s(){let[e,t]=(0,n.useState)([]),[i,s]=(0,n.useState)(!0),[o,c]=(0,n.useState)(null);return(0,n.useEffect)(()=>{fetch(a).then(e=>{if(!e.ok)throw Error(`HTTP ${e.status}`);return e.text()}).then(e=>{t(Array.from(new DOMParser().parseFromString(e,"text/xml").querySelectorAll("item")).slice(0,3).map(e=>{let t=e.querySelector("enclosure"),i=e.getElementsByTagNameNS("http://search.yahoo.com/mrss/","content")[0],r=e.getElementsByTagNameNS("http://search.yahoo.com/mrss/","thumbnail")[0],n=e.getElementsByTagNameNS("http://purl.org/rss/1.0/modules/content/","encoded")[0],a=n?.textContent||"",s=a.match(/<img[^>]+src=["']([^"']+)["']/i),o=e.querySelector("description")?.textContent||"",c=o.match(/<img[^>]+src=["']([^"']+)["']/i),l=t?.getAttribute("url")||i?.getAttribute("url")||r?.getAttribute("url")||s?.[1]||c?.[1]||null,d=(a||o).replace(/<[^>]*>/g,"").replace(/&[^;]+;/g," ").trim(),p=d.length>340?d.slice(0,340)+"...":d,m=e.getElementsByTagName("link")[0],g=m?.textContent?.trim()||e.querySelector("guid")?.textContent||"#";return{guid:e.querySelector("guid")?.textContent||Math.random().toString(),title:e.querySelector("title")?.textContent?.trim()||"Untitled",link:g,thumbnail:l,excerpt:p}})),s(!1)}).catch(e=>{c(e.message),s(!1)})},[]),(0,r.jsxs)("section",{style:{width:"100%",padding:"4rem 1rem",boxSizing:"border-box",background:"#fff"},children:[(0,r.jsxs)("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[(0,r.jsxs)("div",{style:{textAlign:"center",marginBottom:"2.5rem"},children:[(0,r.jsx)("h2",{style:{fontSize:"2rem",fontWeight:700,margin:"0 0 0.5rem",color:"#111"},children:"Blogs"}),(0,r.jsx)("p",{style:{color:"#666",margin:0,fontSize:"1rem"},children:"Stay updated with the latest in digital marketing, growth strategies, and industry trends."})]}),i&&(0,r.jsx)("p",{style:{textAlign:"center",color:"#888"},children:"Loading..."}),o&&(0,r.jsxs)("p",{style:{textAlign:"center",color:"red"},children:["Error: ",o]}),(0,r.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1.5rem"},className:"blog-grid",children:e.map(e=>(0,r.jsxs)("a",{href:e.link,target:"_blank",rel:"noreferrer",style:{border:"1px solid #e5e7eb",borderRadius:"12px",overflow:"hidden",background:"#fff",display:"flex",flexDirection:"column",textDecoration:"none",color:"inherit",transition:"box-shadow 0.2s, transform 0.2s",cursor:"pointer"},onMouseEnter:e=>{e.currentTarget.style.boxShadow="0 8px 24px rgba(0,0,0,0.12)",e.currentTarget.style.transform="translateY(-3px)"},onMouseLeave:e=>{e.currentTarget.style.boxShadow="none",e.currentTarget.style.transform="translateY(0)"},children:[(0,r.jsx)("div",{style:{width:"100%",aspectRatio:"16/9",overflow:"hidden",background:"#1a2744"},children:e.thumbnail?(0,r.jsx)("img",{src:e.thumbnail,alt:e.title,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):(0,r.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",opacity:.4,fontSize:"0.8rem"},children:"No image"})}),(0,r.jsxs)("div",{style:{padding:"1.25rem",display:"flex",flexDirection:"column",gap:"0.75rem"},children:[(0,r.jsx)("p",{style:{fontWeight:600,fontSize:"1.1rem",lineHeight:1.6,margin:0,color:"#111"},children:e.title}),(0,r.jsx)("p",{style:{color:"#444",fontSize:"0.875rem",lineHeight:1.6,flex:1,margin:0},children:e.excerpt}),(0,r.jsx)("span",{style:{display:"inline-block",background:"#E87C30",color:"#fff",padding:"0.6rem 1.5rem",borderRadius:"999px",fontWeight:500,alignSelf:"flex-start",marginTop:"0.5rem",fontSize:"0.875rem"},children:"Read More"})]})]},e.guid))})]}),(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        @media (max-width: 1024px) { .blog-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px)  { .blog-grid { grid-template-columns: 1fr !important; } }
      `}})]})}},9393(e,t,i){i.d(t,{A:()=>a});var r=i(4848),n=i(6540);let a=function(){let e=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let t=e.current;if(!t)return;let i=t.getContext("2d"),r="#ed8337",n,a,s=[],o;function c(){n=t.width=t.parentElement.offsetWidth,a=t.height=t.parentElement.offsetHeight}function l(){this.reset()}l.prototype.reset=function(){this.x=Math.random()*n,this.y=Math.random()*a,this.r=2.2*Math.random()+.6,this.type=.55>Math.random()?"dot":.5>Math.random()?"ring":"plus",this.speed=.35*Math.random()+.08,this.dir=Math.random()*Math.PI*2,this.alpha=.45*Math.random()+.1,this.pulse=Math.random()*Math.PI*2,this.pulseSpeed=.018*Math.random()+.008,this.size=4*Math.random()+2},l.prototype.update=function(){this.x+=Math.cos(this.dir)*this.speed,this.y+=Math.sin(this.dir)*this.speed,this.pulse+=this.pulseSpeed,this.dir+=(Math.random()-.5)*.015,this.x<-20&&(this.x=n+20),this.x>n+20&&(this.x=-20),this.y<-20&&(this.y=a+20),this.y>a+20&&(this.y=-20)},l.prototype.draw=function(){let e=this.alpha*(.7+.3*Math.sin(this.pulse));if(i.save(),i.globalAlpha=e,i.strokeStyle=i.fillStyle=r,i.lineWidth=1,"dot"===this.type)i.beginPath(),i.arc(this.x,this.y,this.r+.4*Math.sin(this.pulse),0,2*Math.PI),i.fill();else if("ring"===this.type){let e=this.size*(.9+.15*Math.sin(this.pulse));i.beginPath(),i.arc(this.x,this.y,e,0,2*Math.PI),i.stroke()}else{let e=this.size*(.9+.1*Math.sin(this.pulse));i.beginPath(),i.moveTo(this.x-e,this.y),i.lineTo(this.x+e,this.y),i.moveTo(this.x,this.y-e),i.lineTo(this.x,this.y+e),i.stroke()}i.restore()},window.addEventListener("resize",c),c(),s=[];let d=Math.floor(n*a/9e3);for(let e=0;e<Math.max(d,28);e++)s.push(new l);return!function e(){i.clearRect(0,0,n,a),function(){let e=s.filter(e=>"dot"===e.type);for(let t=0;t<e.length;t++)for(let n=t+1;n<e.length;n++){let a=e[t].x-e[n].x,s=e[t].y-e[n].y,o=Math.sqrt(a*a+s*s);o<110&&(i.save(),i.globalAlpha=(1-o/110)*.12,i.strokeStyle=r,i.lineWidth=.7,i.beginPath(),i.moveTo(e[t].x,e[t].y),i.lineTo(e[n].x,e[n].y),i.stroke(),i.restore())}}(),s.forEach(e=>{e.update(),e.draw()}),o=requestAnimationFrame(e)}(),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",c)}},[]),(0,r.jsx)("section",{id:"cta-final",children:(0,r.jsxs)("div",{className:"cta-banner",style:{"--glow-x":"50%","--glow-y":"50%"},children:[(0,r.jsx)("canvas",{id:"ctaCanvas",ref:e}),(0,r.jsxs)("div",{className:"cta-banner-left",children:[(0,r.jsx)("div",{className:"partners-header",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Ready to Start?"})}),(0,r.jsxs)("h2",{className:"cta-banner-heading",children:["Let's Talk About Your",(0,r.jsx)("br",{}),"Next Big ",(0,r.jsx)("span",{className:"hl-italic",children:"Growth Move"})]}),(0,r.jsx)("p",{className:"cta-banner-sub",children:"No pressure. Just a quick conversation to understand where you are-and how we can help you move forward."})]}),(0,r.jsxs)("div",{className:"cta-banner-right",children:[(0,r.jsxs)("a",{href:"#",className:"cta-bprimary",children:["Book a Free Consultation",(0,r.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",children:(0,r.jsx)("path",{d:"M3 8h10M9 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,r.jsx)("a",{href:"#",className:"cta-bghost",children:"View All Services"})]})]})})}},1131(e,t,i){i.r(t),i.d(t,{default:()=>x});var r=i(4848),n=i(6540),a=i(8128),s=i(9393),o=i(3177),c=i(1085);let l=`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

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
  body { font-family: 'Nunito Sans', sans-serif;  overflow-x: hidden; }

  

  /* \u{2500}\u{2500} HERO BADGE \u{2500}\u{2500} */
  .badge {
    display:inline-flex; align-items:center; gap:.5rem;
    background:rgba(237,131,55,0.1); border:1px solid rgba(237,131,55,0.28);
    color:var(--orange); font-size:0.72rem; font-weight:700;
    padding:.38rem 1rem; border-radius:50px; letter-spacing:.09em; text-transform:uppercase;
    margin-bottom:1.4rem; animation:fadeUp .6s ease both;
  }
  .badge-dot { width:6px; height:6px; border-radius:50%; background:var(--orange); animation:pulse-dot 1.6s infinite; }

  /* \u{2550}\u{2550} HERO BANNER (Website Dev) \u{2550}\u{2550} */
  .wd-hero {
    min-height:100vh; display:grid; grid-template-columns:1fr 1fr;
    align-items:center; gap:2rem; padding:2rem 6% 4rem;
    position:relative; box-sizing:border-box; overflow:hidden; background:#004168;
  }
  .wd-hero-bg-radial { position:absolute;inset:0;pointer-events:none;
    background:radial-gradient(ellipse 65% 70% at 100% 50%,rgba(237,131,55,0.10) 0%,transparent 60%),
               radial-gradient(ellipse 50% 60% at 0% 100%,rgba(10,66,102,0.5) 0%,transparent 55%); }
  .wd-hero-bg-grid { position:absolute;inset:0;pointer-events:none;
    background-image:linear-gradient(rgba(237,131,55,0.028) 1px,transparent 1px),linear-gradient(90deg,rgba(237,131,55,0.028) 1px,transparent 1px);
    background-size:52px 52px; }
  .wd-hero-heading { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.6vw,3.3rem); font-weight:600; line-height:1.15; margin-top:1.4rem; animation:fadeUp .7s .08s ease both; color:#fff; text-align:start; }
  .wd-hero-heading .orange { color:var(--orange); }
  .wd-hero-heading .lined { position:relative; display:inline-block; }
  .wd-hero-heading .lined::after { content:''; position:absolute; left:0; bottom:-3px; width:100%; height:3px; background:var(--orange); border-radius:2px; transform:scaleX(0); transform-origin:left; animation:wd-line-in .5s .9s ease forwards; }
  @keyframes wd-line-in { to{transform:scaleX(1);} }
  .wd-hero-sub { margin-top:1.4rem; font-size:1rem; line-height:1.78; color:rgba(255,255,255,0.85); max-width:100%; animation:fadeUp .7s .16s ease both; }
  .wd-hero-actions { margin-top:2rem; display:flex; gap:.9rem; flex-wrap:wrap; animation:fadeUp .7s .26s ease both; }
  .wd-btn-fill { background:var(--orange); color:#fff; padding:.85rem 2rem; border-radius:50px; font-family:'Poppins',sans-serif; font-size:.9rem; font-weight:600; text-decoration:none; border:none; cursor:pointer; transition:background .22s,transform .18s,box-shadow .22s; display:inline-flex; align-items:center; gap:.5rem; box-shadow:0 4px 22px rgba(237,131,55,.32); }
  .wd-btn-fill:hover { background:var(--orange-light); transform:translateY(-2px); box-shadow:0 8px 30px rgba(237,131,55,0.42); }
  .wd-btn-arrow { display:inline-flex; align-items:center; justify-content:center; width:22px; height:22px; border-radius:50%; background:rgba(2,43,68,0.3); font-size:.85rem; }

  /* Hero right image */
  .wd-hero-img { height:470px; object-fit:contain; max-width:100%; border-radius:16px; }
  

  /* OUR APPROACH */
  /* \u{2550}\u{2550} OUR APPROACH SECTION \u{2550}\u{2550} */
  section#approach {
    padding-top: 5rem;
}
  .wd-approach { position:relative; padding:5rem 6%; overflow:hidden;  }
  .wd-ap-inner { position:relative; z-index:2;  margin:0 auto; display:grid; grid-template-columns:1fr 0.75fr; gap:4rem; align-items:center; }
  .wd-ap-eyebrow { display:inline-flex; align-items:center; gap:.55rem; font-family:'Space Mono',monospace; font-size:.7rem; font-weight:700; color:var(--orange); letter-spacing:.13em; text-transform:uppercase; margin-bottom:1.1rem; }
  .wd-ap-eyebrow-line { width:24px; height:2px; background:var(--orange); border-radius:2px; }
  .wd-ap-heading { font-family:'Poppins',sans-serif; font-size:clamp(1.8rem,2.8vw,2.5rem); line-height:1.12; margin-bottom:1.2rem; font-weight:700; }
  .wd-ap-heading span { color:var(--orange); }
  .wd-ap-intro { font-size:1rem; line-height:1.8;  margin-bottom:1.4rem; }
  .wd-ap-form-wrap { position:relative; max-width:450px; }
  .wd-ap-form-wrap::before { content:''; position:absolute; inset:-2px; background:linear-gradient(135deg,rgba(237,131,55,0.55),rgba(237,131,55,0.1),rgba(237,131,55,0.55)); border-radius:26px; z-index:0; }
  .wd-ap-form-card { position:relative; z-index:1; background:#004168; border-radius:24px; padding:2.8rem 2.6rem; box-shadow:0 24px 60px rgba(0,0,0,0.5),0 0 40px rgba(237,131,55,0.06); border:1px solid rgba(237,131,55,0.18); text-align:center; }
  .wd-form-eyebrow { display:inline-flex; align-items:center; gap:8px; font-family:'Poppins',sans-serif; font-size:.6rem; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:var(--orange); margin-bottom:.8rem; }
  .wd-form-eyebrow-line { width:22px; height:1px; background:var(--orange); }
  .wd-form-title { font-family:'Poppins',sans-serif; font-size:1.7rem; font-weight:800; color:#fff; line-height:1.15; margin-bottom:2rem; }
  .wd-form-title span { color:var(--orange); }
  .wd-fl-row { display:grid; grid-template-columns:1fr 1fr; gap:.85rem; }
  .wd-fl-group { position:relative; margin-bottom:1rem; }
  .wd-fl-label { display:block; font-family:'Poppins',sans-serif; font-size:.65rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:var(--orange); margin-bottom:.4rem; text-align:start; }
  .wd-fl-input, .wd-fl-textarea { width:100%; padding:.82rem 1rem .82rem 2.6rem; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; font-family:'Poppins',sans-serif; font-size:.88rem; color:#fff; background:rgba(255,255,255,0.04); outline:none; appearance:none; transition:border-color .22s,background .22s,box-shadow .22s; }
  .wd-fl-input::placeholder,.wd-fl-textarea::placeholder { color:rgba(255,255,255,0.3); }
  .wd-fl-input:focus,.wd-fl-textarea:focus { border-color:var(--orange); background:rgba(237,131,55,0.06); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
  .wd-fl-icon { position:absolute; left:.85rem; top:50%; transform:translateY(-50%); font-size:.95rem; opacity:.5; pointer-events:none; }
  .wd-fl-group.wd-textarea-group .wd-fl-icon { top:.9rem; transform:none; }
  .wd-fl-textarea { min-height:88px; resize:none; padding-top:.82rem; padding-left:2.6rem; }
  .wd-phone-row { display:flex; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; overflow:hidden; background:rgba(255,255,255,0.04); transition:border-color .22s,box-shadow .22s; }
  .wd-phone-row:focus-within { border-color:var(--orange); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
  .wd-phone-flag { display:flex; align-items:center; gap:.3rem; padding:0 .85rem; font-size:.82rem; font-weight:700; color:#fff; border-right:1.5px solid rgba(237,131,55,0.2); white-space:nowrap; background:rgba(237,131,55,0.08); cursor:default; flex-shrink:0; }
  .wd-phone-row .wd-fl-input { border:none; border-radius:0; background:transparent; box-shadow:none; padding:.82rem 1rem; }
  .wd-phone-row .wd-fl-input:focus { box-shadow:none; }
  .wd-ap-submit { width:100%; background:linear-gradient(135deg,#ed8337,#f5a66b); color:#fff; border:none; padding:1rem 1.5rem; border-radius:12px; font-family:'Poppins',sans-serif; font-size:.97rem; font-weight:600; cursor:pointer; letter-spacing:.02em; display:flex; align-items:center; justify-content:center; gap:.6rem; transition:transform .2s,box-shadow .2s; }
  .wd-ap-submit:hover { transform:translateY(-2px); box-shadow:0 12px 36px rgba(237,131,55,0.5); }
  .wd-ap-submit-arrow { display:inline-flex; align-items:center; justify-content:center; width:24px; height:24px; border-radius:50%; background:rgba(2,43,68,0.25); font-size:.9rem; }
  @media(max-width:900px){ .wd-ap-inner{grid-template-columns:1fr;} .wd-ap-form-wrap{max-width:100%;} }

  /* WHAT WE OFFER \u{2014} ORBIT */
  .pcs-offer-section { padding:6rem 6% 7rem; background:#004168; overflow:hidden; }
  .pcs-offer-inner { max-width:1200px; margin:0 auto; }
  .pcs-offer-heading {
    font-family: 'Poppins',sans-serif; font-size:clamp(1.7rem,2.6vw,2.3rem);
    font-weight:600; line-height:1.15; 
    color:#fff; text-align:center; margin-bottom:6.5rem;
  }
  .pcs-offer-heading span { color:var(--orange); }
  .pcs-offer-body { display:grid; grid-template-columns:1fr 1fr; gap:5rem; align-items:center; }
  .pcs-offer-left { display:flex; align-items:center; justify-content:center; }
  .pcs-orbit-wrap { position:relative; width:400px; height:400px; flex-shrink:0; }
  .pcs-orbit-ring {
    position:absolute; inset:24px; border-radius:50%;
    border:1.5px dashed rgba(30,143,196,0.25);
    animation:wi5-spin-offer 32s linear infinite;
  }
  @keyframes wi5-spin-offer { to{transform:rotate(360deg);} }
  .pcs-orbit-center {
    position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
    width:110px; height:110px; border-radius:50%;
    background:linear-gradient(135deg,#004168,#1e8fc4);
    border:3px solid #ed8337;
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    box-shadow:0 0 0 6px rgba(237,131,55,0.15),0 8px 28px rgba(0,65,104,0.3); z-index:10;
  }
  .pcs-orbit-center-name { font-family:'Syne',sans-serif; font-size:1.4rem; font-weight:800; color:#fff; line-height:1; }
  .pcs-orbit-center-sub { font-size:.48rem; font-weight:600; color:rgba(255,255,255,0.6); letter-spacing:.08em; text-transform:uppercase; margin-top:4px; }
  .pcs-orbit-connector {
    position:absolute; top:50%; left:50%; height:2px;
    transform-origin:0 50%; pointer-events:none; z-index:1;
    background:linear-gradient(to right,rgba(30,143,196,0.5),rgba(30,143,196,0.08));
  }
  .pcs-orbit-connector.active { background:linear-gradient(to right,#ed8337,rgba(237,131,55,0.15)); }
  .pcs-orbit-node { position:absolute; transform:translate(-50%,-50%); z-index:5; cursor:pointer; }
  .pcs-orbit-node-box {
    width:100px; height:100px; border-radius:15px;
    background:linear-gradient(145deg,#eaf6fd,#d4ecf7);
    border:2px solid #1e8fc4;
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    gap:10px; padding:7px; transition:all .3s;
    box-shadow:0 3px 12px rgba(30,143,196,0.12); text-align:center;
  }
  .pcs-orbit-node-box.active { background:linear-gradient(145deg,#ed8337,#c96a1e); border-color:#ed8337; box-shadow:0 6px 24px rgba(237,131,55,0.25); transform:scale(1.12); }
  .pcs-orbit-node-emoji { font-size:1.5rem; line-height:1; }
  .pcs-orbit-node-lbl { font-family: 'Poppins',sans-serif; font-size:.68rem; font-weight:700; color:#004168; line-height:1.3; }
  .pcs-orbit-node-box.active .pcs-orbit-node-lbl { color:#fff; }
  .pcs-offer-right { min-height:320px; }
  .pcs-offer-panel { display:none; }
  .pcs-offer-panel.active { display:block; }
  .pcs-offer-panel-bar { height:4px; background:linear-gradient(to right,#ed8337,#1e8fc4); border-radius:4px; margin-bottom:1.4rem; }
  .pcs-offer-panel-title-row { display:flex; align-items:center; gap:1rem; margin-bottom:1rem; }
  .pcs-offer-panel-icon {
    width:56px; height:56px; border-radius:14px; flex-shrink:0;
    display:flex; align-items:center; justify-content:center; font-size:1.6rem;
    border-top:2.5px solid #ed8337; border-right:2.5px solid #ed8337;
    border-bottom:2.5px solid #1e8fc4; border-left:2.5px solid #1e8fc4;
    background:linear-gradient(135deg,rgba(237,131,55,0.08),rgba(30,143,196,0.08));
    box-shadow:0 4px 14px rgba(0,0,0,0.07);
  }
  .pcs-offer-panel-title {
    font-family:'poppins',sans-serif; font-size:1.3rem; font-weight:700; line-height:1.2;
    background:linear-gradient(90deg,#ed8337 0%,#1e8fc4 100%);
    -webkit-background-clip:text; -webkit-text-fill-color:#ed8337; background-clip:text;
  }
  .pcs-offer-panel-divider { height:1.5px; background:linear-gradient(to right,#ed8337,#1e8fc4); border-radius:2px; margin-bottom:1.2rem; opacity:.35; }
  .pcs-offer-panel-desc { font-size:.97rem; line-height:1.82; color:#fff; margin-bottom:1.2rem; font-family: 'poppins',sans-serif; }
  .pcs-offer-panel-tags { display:flex; flex-wrap:wrap; gap:.45rem; }
  .pcs-offer-panel-tag { font-size:.72rem; font-weight:700; padding:.28rem .72rem; border-radius:50px; }
  .pcs-offer-panel-tag:nth-child(odd) { background:rgba(237,131,55,0.09); border:1px solid rgba(237,131,55,0.35); color:#c96a1e; }
  .pcs-offer-panel-tag:nth-child(even) { background:rgba(30,143,196,0.09); border:1px solid rgba(30,143,196,0.3); color:#1e8fc4; }
  .pcs-offer-placeholder { display:flex; flex-direction:column; align-items:center; justify-content:center; height:260px; gap:.8rem; text-align:center; }
  .pcs-offer-placeholder-icon { font-size:2.8rem; opacity:.35; }
  .pcs-offer-placeholder-text { font-family:'Syne',sans-serif; font-size:.85rem; font-weight:600; color:rgba(0,65,104,0.3); }

  /* WHAT'S INCLUDED \u{2014} ACCORDION */
  .pcs-wi5-section {
    padding:6rem 6% 7rem; background:#ffffff; overflow:hidden; position:relative;
  }
  .pcs-wi5-section::before {
    content:''; position:absolute; inset:0; pointer-events:none;
    background-image:linear-gradient(rgba(0,65,104,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,65,104,0.03) 1px,transparent 1px);
    background-size:56px 56px;
  }
  .pcs-wi5-inner { max-width:1100px; margin:0 auto; position:relative; z-index:2; }
  .pcs-wi5-heading {
    font-family:'Poppins',sans-serif; font-size:clamp(1.7rem,2.6vw,2.3rem);
    font-weight:700; line-height:1.15; 
    color:#000; text-align:center; margin-bottom:3.5rem;
  }
  .pcs-wi5-heading span { color:var(--orange); }
  .pcs-wi5-tab { border-bottom:1.5px solid rgba(0,65,104,0.08); overflow:hidden; transition:background .3s; }
  .pcs-wi5-tab:first-child { border-top:1.5px solid rgba(0,65,104,0.08); border-radius:18px 18px 0 0; }
  .pcs-wi5-tab:last-child { border-radius:0 0 18px 18px; }
  .pcs-wi5-tab.open { background:linear-gradient(135deg,rgba(237,131,55,0.03),rgba(0,65,104,0.03)); }
  .pcs-wi5-tab-head {
    display:flex; align-items:center; gap:1.6rem;
    padding:1.4rem 2rem; cursor:pointer; user-select:none;
    position:relative; transition:background .25s;
  }
  .pcs-wi5-tab-head:hover { background:rgba(237,131,55,0.04); }
  .pcs-wi5-tab.open .pcs-wi5-tab-head { background:rgba(237,131,55,0.05); }
  .pcs-wi5-tab-num { position:relative; width:54px; height:54px; flex-shrink:0; display:flex; align-items:center; justify-content:center; }
  .pcs-wi5-tab-num-diamond { position:absolute; inset:0; background:linear-gradient(135deg,#004168,#1e8fc4); clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%); transition:background .3s,transform .3s; }
  .pcs-wi5-tab.open .pcs-wi5-tab-num-diamond { background:linear-gradient(135deg,#ed8337,#f5a66b); transform:rotate(45deg) scale(0.9); }
  .pcs-wi5-tab-num-text { position:relative; z-index:2; font-family:'Syne',sans-serif; font-size:.82rem; font-weight:800; color:#fff; letter-spacing:.04em; }
  .pcs-wi5-tab-icon { width:42px; height:42px; flex-shrink:0; border-radius:50%; background:rgba(0,65,104,0.06); border:1.5px solid rgba(0,65,104,0.1); display:flex; align-items:center; justify-content:center; font-size:1.2rem; transition:background .3s,border-color .3s; }
  .pcs-wi5-tab.open .pcs-wi5-tab-icon { background:rgba(237,131,55,0.1); border-color:rgba(237,131,55,0.3); }
  .pcs-wi5-tab-title { flex:1; font-family:'Poppins',sans-serif; font-size:1rem; font-weight:700; color:#0d1f2d; transition:color .25s; }
  .pcs-wi5-tab.open .pcs-wi5-tab-title { color:var(--orange); }
  .pcs-wi5-tab-chev { width:28px; height:28px; border-radius:50%; background:rgba(0,65,104,0.06); display:flex; align-items:center; justify-content:center; transition:background .3s,transform .35s; flex-shrink:0; }
  .pcs-wi5-tab.open .pcs-wi5-tab-chev { background:rgba(237,131,55,0.12); transform:rotate(180deg); }
  .pcs-wi5-tab-body { max-height:0; overflow:hidden; transition:max-height .45s cubic-bezier(.4,0,.2,1); }
  .pcs-wi5-tab.open .pcs-wi5-tab-body { max-height:320px; }
  .pcs-wi5-tab-content { padding:2rem 2rem 1.8rem 7.2rem; display:grid; grid-template-columns:1fr 0fr; gap:1.8rem; }
  .pcs-wi5-tab-desc { font-size:.94rem; line-height:1.82; color:#000; border-left:3px solid rgba(237,131,55,0.3); padding-left:1rem; font-family:'Poppins',sans-serif; }
  .pcs-wi5-tab-tag { font-size:.72rem; font-weight:700; padding:.3rem .85rem; border-radius:50px; letter-spacing:.04em; }
  .pcs-wi5-tab-tag.t-orange { background:rgba(237,131,55,0.1); border:1px solid rgba(237,131,55,0.3); color:#c96a1e; }
  .pcs-wi5-tab-tag.t-blue { background:rgba(30,143,196,0.1); border:1px solid rgba(30,143,196,0.25); color:#1e8fc4; }
  .pcs-wi5-tab-progress { height:3px; background:linear-gradient(to right,var(--orange),#1e8fc4); border-radius:0 3px 3px 0; transform-origin:left; transform:scaleX(0); transition:transform .5s .1s ease; }
  .pcs-wi5-tab.open .pcs-wi5-tab-progress { transform:scaleX(1); }

  /* OUR PROCESS \u{2014} NUMBERED CARDS GRID */
  .pcs-proc-section {
    padding:7rem 6%;
    background:linear-gradient(160deg,var(--navy-deep) 0%,var(--navy) 50%,var(--navy-mid) 100%);
    position:relative; overflow:hidden;
  }
  .pcs-proc-section::before {
    content:''; position:absolute; inset:0; pointer-events:none;
    background-image:linear-gradient(rgba(237,131,55,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(237,131,55,0.04) 1px,transparent 1px);
    background-size:56px 56px;
  }
  .pcs-proc-inner { max-width:1200px; margin:0 auto; position:relative; z-index:2; }
  .pcs-proc-header { text-align:center; margin-bottom:4rem; }
  .pcs-proc-eyebrow-dot { width:6px; height:6px; border-radius:50%; background:var(--orange); animation:pulse-dot 1.6s infinite; display:inline-block; }
  .pcs-proc-title { font-family:'Poppins',sans-serif; font-size:clamp(1.9rem,2.8vw,2.6rem); font-weight:600; line-height:1.12; color:#fff; margin-bottom:.9rem; }
  .pcs-proc-title span { color:var(--orange); }
  .pcs-proc-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.8rem; }
  @media(max-width:900px){ .pcs-proc-grid { grid-template-columns:repeat(2,1fr); } }
  @media(max-width:560px){ .pcs-proc-grid { grid-template-columns:1fr; } }

  /* \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
     TABLET FIX \u{2014} 900px to 1020px
     Specifically targets the gap between mobile
     breakpoint (<=900px) and desktop (>1020px)
  \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550} */

  
  /* \u{2550}\u{2550} HERO \u{2014} FULL RESPONSIVE FIX \u{2550}\u{2550} */

  /* Base hero: ensure no overflow */
  .wd-hero {
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
  }

  /* image always contained */
  .wd-hero-img {
    max-width: 100%;
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }

  /* Mobile \u{2014} single column, left aligned */
  @media (max-width: 768px) {
    .wd-hero {
      grid-template-columns: 1fr !important;
      padding: 5.5rem 5% 3rem !important;
      gap: 2rem !important;
      text-align: left !important;
      min-height: auto !important;
    }
    /* image goes below text */
    .wd-hero > div:last-child {
      order: 2;
    }
    .wd-hero > div:first-of-type {
      order: 1;
    }
    .wd-hero-heading {
      font-size: clamp(1.7rem, 6.5vw, 2.4rem) !important;
      text-align: left !important;
    }
    .wd-hero-sub {
      font-size: 0.93rem !important;
      max-width: 100% !important;
    }
    .wd-hero-img {
      height: auto !important;
      max-height: 280px !important;
      width: 100% !important;
      object-fit: contain !important;
    }
    .wd-hero-actions {
      justify-content: flex-start !important;
    }
    .wd-btn-fill {
      width: 70% !important;
      justify-content: center !important;
    }
    .badge {
      margin: 0 0 1.2rem !important;
    }
  }

  /* Small mobile */
  @media (max-width: 480px) {
    .wd-hero {
      padding: 5rem 4% 2.5rem !important;
    }
    .wd-hero-heading {
      font-size: clamp(1.5rem, 7vw, 2rem) !important;
    }
    .wd-hero-img {
      max-height: 220px !important;
    }
  }

  /* Tablet portrait \u{2014} single column still */
  @media (min-width: 769px) and (max-width: 900px) {
    .wd-hero {
      grid-template-columns: 1fr !important;
      padding: 6rem 5% 3.5rem !important;
      gap: 2rem !important;
    }
    .wd-hero-heading { font-size: clamp(1.8rem, 4vw, 2.6rem) !important; }
    .wd-hero-img { height: auto !important; max-height: 360px !important; }
  }

  @media (min-width: 901px) and (max-width: 1020px) {

    /* \u{2500}\u{2500} HERO BANNER \u{2500}\u{2500} */
    .wd-hero {
      grid-template-columns: 1fr 1fr;
      padding: 5rem 4% 3.5rem;
      gap: 1.5rem;
    }
    .wd-hero-heading { font-size: clamp(1.6rem, 2.8vw, 2.2rem); }
    .wd-hero-sub { font-size: 0.92rem; }
    .wd-hero-img { height: 340px; }

    /* \u{2500}\u{2500} APPROACH SECTION \u{2500}\u{2500} */
    .wd-approach { padding: 3.5rem 4%; }
    .wd-ap-inner {
      grid-template-columns: 1fr 0.85fr;
      gap: 2rem;
    }
    .wd-ap-form-wrap { max-width: 100%; }
    .wd-ap-form-card { padding: 2rem 1.8rem; }
    .wd-ap-heading { font-size: clamp(1.5rem, 2.5vw, 2rem); }

    /* \u{2500}\u{2500} APPROACH (ApproachSection component) \u{2500}\u{2500} */
    .ap-inner {
      grid-template-columns: 1fr 0.85fr !important;
      gap: 2rem !important;
    }

    /* \u{2500}\u{2500} SERVICES ACCORDION \u{2500}\u{2500} */
    .svc-section { padding: 4.5rem 4% 5rem; }
    .svc-layout {
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }
    .svc-heading { font-size: clamp(1.5rem, 2.8vw, 2rem); }
    .svc-right-col { position: static; top: auto; }
    .acc-desc, .acc-bar-wrap { padding-left: 0; }

    /* \u{2500}\u{2500} WHAT WE OFFER \u{2014} ORBIT \u{2500}\u{2500} */
    .pcs-offer-section { padding: 4rem 4% 5rem; }
    .pcs-offer-body {
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }
    .pcs-orbit-wrap { width: 300px; height: 300px; }
    .pcs-orbit-center { width: 85px; height: 85px; }
    .pcs-orbit-center-name { font-size: 1rem; }
    .pcs-orbit-node-box { width: 80px; height: 80px; gap: 5px; }
    .pcs-orbit-node-emoji { font-size: 1.1rem; }
    .pcs-orbit-node-lbl { font-size: .58rem; }

    /* \u{2500}\u{2500} WHAT'S INCLUDED \u{2014} ACCORDION \u{2500}\u{2500} */
    .pcs-wi5-section { padding: 4rem 4% 5rem; }
    .pcs-wi5-tab-content {
      grid-template-columns: 1fr;
      padding-left: 3rem;
      gap: 1rem;
    }
    .pcs-wi5-tab-head { gap: 1rem; padding: 1.2rem 1.4rem; }

    /* \u{2500}\u{2500} PROCESS GRID \u{2500}\u{2500} */
    .pcs-proc-section { padding: 4rem 4%; }
    .pcs-proc-grid { grid-template-columns: repeat(2, 1fr); gap: 1.2rem; }

    /* \u{2500}\u{2500} WHY / FEATURES \u{2014} 4 BOX \u{2500}\u{2500} */
    .pcs-fb-section { padding: 4.5rem 4%; }
    .pcs-fb-grid {
      grid-template-columns: 1fr 120px 1fr;
    }
    .pcs-fb-center-circle { width: 100px; height: 100px; }
    .pcs-fb-center-inner { width: 74px; height: 74px; }
    .pcs-fb-center-icon { font-size: 1.5rem; }
    .pcs-fb-box { padding: 1.6rem 1.4rem; min-height: 180px; }
    .pcs-fb-title { font-size: clamp(1.5rem, 2.5vw, 2rem); }

    /* \u{2500}\u{2500} WHY CHOOSE US \u{2500}\u{2500} */
    .wcu-section { padding: 3.5rem 4%; }
    .wcu-inner {
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }
    .wcu-heading { font-size: clamp(1.5rem, 2.5vw, 2rem); }

    /* \u{2500}\u{2500} PORTFOLIO SECTION \u{2500}\u{2500} */
    .pf-section { padding: 3.5rem 4%; }
    .pf-inner {
      grid-template-columns: minmax(220px, 340px) 1fr;
      gap: 2.5rem;
      padding: 3rem 2rem;
    }
    .pf-cols { grid-template-columns: repeat(2, 1fr); gap: 0.8rem; }
    .pf-heading { font-size: clamp(1.5rem, 2.5vw, 2rem); }

    /* \u{2500}\u{2500} PROCESS SECTION (WebsiteDevelopment) \u{2500}\u{2500} */
    .proc-section { padding: 4rem 4%; margin: 0 !important; }
    .proc-cols {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    .proc-mockup-wrap { order: -1; margin: 1rem auto; }
    .proc-points.left .proc-point { flex-direction: row; text-align: left; }
    .proc-points.left .proc-point-text { align-items: flex-start; }
    .proc-screen { width: 220px; }
    .pb-tl, .pb-tr, .pb-bl, .pb-br { display: none; }
    .proc-heading { font-size: clamp(1.5rem, 2.5vw, 2rem); }

    /* \u{2500}\u{2500} KEY FEATURES CAROUSEL \u{2500}\u{2500} */
    .kf-section { padding: 3rem 0 4rem; }
    .kf-inner { padding: 2rem 2.5rem; }
    .kf-carousel-wrap { height: 360px; }
    .kf-card { width: 300px; }
    .kf-title { font-size: clamp(1.6rem, 2.8vw, 2.2rem); }

    /* \u{2500}\u{2500} FAQ SECTION \u{2500}\u{2500} */
    .faq-wrapper { grid-template-columns: 1fr 1fr !important; gap: 1rem !important; }
    .faq-section { padding: 3rem 4% 4rem !important; }

    /* \u{2500}\u{2500} GENERAL \u{2500}\u{2500} */
    .pcs-wi5-heading, .pcs-offer-heading { font-size: clamp(1.5rem, 2.5vw, 2rem) !important; }
  }

  .pcs-proc-gc {
    position:relative; background:rgba(255,255,255,0.04);
    border:1px solid rgba(255,255,255,0.09); border-radius:20px;
    padding:2rem 1.6rem 1.8rem; display:flex; flex-direction:column; gap:.9rem;
    transition:transform .28s,box-shadow .28s,border-color .28s,background .28s; overflow:hidden;
  }
  .pcs-proc-gc::after {
    content:''; position:absolute; bottom:0; left:0; right:0; height:3px;
    background:linear-gradient(to right,var(--orange),#1e8fc4);
    border-radius:0 0 20px 20px; transform:scaleX(0); transform-origin:left; transition:transform .35s ease;
  }
  .pcs-proc-gc:hover { transform:translateY(-6px); box-shadow:0 18px 48px rgba(0,0,0,0.3); border-color:rgba(237,131,55,0.3); background:rgba(237,131,55,0.05); }
  .pcs-proc-gc:hover::after { transform:scaleX(1); }
  .pcs-proc-gc:hover .pcs-proc-gc-icon { background:rgba(237,131,55,0.22); transform:scale(1.1) rotate(-4deg); }
  .pcs-proc-gc-num {
    font-family:'Poppins',sans-serif; font-size:3.2rem; font-weight:900;
    line-height:1; letter-spacing:-.03em;
    background:linear-gradient(135deg,rgba(237,131,55,0.5) 0%,rgba(237,131,55,0.1) 100%);
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; user-select:none;
  }
  .pcs-proc-gc-icon {
    width:50px; height:50px; border-radius:14px;
    background:rgba(237,131,55,0.1); border:1px solid rgba(237,131,55,0.25);
    display:flex; align-items:center; justify-content:center;
    font-size:1.5rem; transition:background .3s,transform .3s; flex-shrink:0;
  }
  .pcs-proc-gc-top { display:flex; align-items:center; justify-content:space-between; }
  .pcs-proc-gc-title { font-family:'Poppins',sans-serif; font-size:1rem; font-weight:700; color:#fff; line-height:1.3; }
  .pcs-proc-gc-desc { font-family:'Poppins',sans-serif; font-size:.87rem; line-height:1.78; color:rgba(255,255,255,0.72); flex:1; }

  /* WHY \u{2014} 4 BOX */
  .pcs-fb-section { padding:7rem 6%; background:#f7f9fc; overflow:hidden; position:relative; }
  .pcs-fb-inner { max-width:1100px; margin:0 auto; position:relative; z-index:2; }
  .pcs-fb-header { text-align:center; margin-bottom:3.5rem; }
  .pcs-fb-eyebrow { display:inline-flex; align-items:center; gap:.5rem; font-size:.72rem; font-weight:700; color:#ed8337; letter-spacing:.12em; text-transform:uppercase; margin-bottom:.9rem; background:rgba(237,131,55,0.09); border:1px solid rgba(237,131,55,0.25); padding:.35rem 1rem; border-radius:50px; }
  .pcs-fb-eyebrow-dot { width:6px; height:6px; border-radius:50%; background:#ed8337; animation:pulse-dot 1.6s infinite; display:inline-block; }
  .pcs-fb-title { font-family:'Poppins',sans-serif; font-size:clamp(1.7rem,2.6vw,2.4rem); font-weight:700; line-height:1.15; color:#000; }
  .pcs-fb-title span { color:#ed8337; }
  .pcs-fb-grid { display:grid; grid-template-columns:1fr 160px 1fr; grid-template-rows:auto; position:relative; align-items:stretch; }
  .pcs-fb-vline { position:absolute; left:50%; top:0; bottom:0; width:1.5px; background:linear-gradient(to bottom,rgba(0,65,104,0.1),rgba(237,131,55,0.25),rgba(0,65,104,0.1)); transform:translateX(-50%); pointer-events:none; z-index:1; }
  .pcs-fb-hline { position:absolute; top:50%; left:0; right:0; height:1.5px; background:linear-gradient(to right,rgba(0,65,104,0.1),rgba(237,131,55,0.25),rgba(0,65,104,0.1)); transform:translateY(-50%); pointer-events:none; z-index:1; }
  .pcs-fb-center-col { grid-column:2; grid-row:1 / 3; display:flex; align-items:center; justify-content:center; position:relative; z-index:10; }
  .pcs-fb-center-circle { width:128px; height:128px; border-radius:50%; background:conic-gradient(#ed8337 0deg 180deg,#004168 180deg 360deg); box-shadow:0 0 0 5px rgba(237,131,55,0.15),0 0 0 10px rgba(0,65,104,0.07),0 8px 30px rgba(0,0,0,0.13); display:flex; align-items:center; justify-content:center; }
  .pcs-fb-center-inner { width:96px; height:96px; border-radius:50%; background:#fff; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:4px; }
  .pcs-fb-center-icon { font-size:1.9rem; line-height:1; }
  .pcs-fb-center-lbl { font-family:'Syne',sans-serif; font-size:.62rem; font-weight:800; color:#004168; letter-spacing:.08em; text-transform:uppercase; }
  .pcs-fb-box { position:relative; padding:2.2rem 2rem; background:#fff; overflow:hidden; transition:box-shadow .3s; display:flex; flex-direction:column; min-height:220px; }
  .pcs-fb-box:hover { box-shadow:0 10px 36px rgba(0,0,0,0.08); }
  .pcs-fb-box-tl { border:1.5px solid rgba(0,65,104,0.13); border-right:none; border-bottom:none; border-radius:20px 0 0 0; }
  .pcs-fb-box-tr { border:1.5px solid rgba(0,65,104,0.13); border-left:none; border-bottom:none; border-radius:0 20px 0 0; }
  .pcs-fb-box-bl { border:1.5px solid rgba(0,65,104,0.13); border-right:none; border-top:none; border-radius:0 0 0 20px; background:rgba(237,131,55,0.04); }
  .pcs-fb-box-br { border:1.5px solid rgba(0,65,104,0.13); border-left:none; border-top:none; border-radius:0 0 20px 0; background:rgba(0,65,104,0.03); }
  .pcs-fb-icon { width:52px; height:52px; border-radius:13px; display:flex; align-items:center; justify-content:center; font-size:1.45rem; margin-bottom:.95rem; }
  .pcs-fb-box-tl .pcs-fb-icon, .pcs-fb-box-br .pcs-fb-icon { background:rgba(237,131,55,0.11); border:1.5px solid rgba(237,131,55,0.28); }
  .pcs-fb-box-tr .pcs-fb-icon, .pcs-fb-box-bl .pcs-fb-icon { background:rgba(0,65,104,0.08); border:1.5px solid rgba(0,65,104,0.2); }
  .pcs-fb-box-title { font-family:'Poppins',sans-serif; font-size:1rem; font-weight:600; line-height:1.25; margin-bottom:.6rem; }
  .pcs-fb-box-tl .pcs-fb-box-title, .pcs-fb-box-br .pcs-fb-box-title { color:#004168; }
  .pcs-fb-box-tr .pcs-fb-box-title, .pcs-fb-box-bl .pcs-fb-box-title { color:#c96a1e; }
  .pcs-fb-box-title::after { content:''; display:block; width:36px; height:3px; border-radius:2px; margin-top:6px; }
  .pcs-fb-box-tl .pcs-fb-box-title::after, .pcs-fb-box-br .pcs-fb-box-title::after { background:#ed8337; }
  .pcs-fb-box-tr .pcs-fb-box-title::after, .pcs-fb-box-bl .pcs-fb-box-title::after { background:#004168; }
  .pcs-fb-box-desc { font-size:.86rem; line-height:1.78; color:#000; font-family:'Poppins',sans-serif; }

  @media(max-width:900px){
    .pcs-hero { grid-template-columns:1fr; padding:7rem 5% 5rem; text-align:center; }
    .pcs-badge { margin:0 auto 1.4rem; }
    .pcs-hero-sub { max-width:90%; }
    .pcs-design-scene { width:340px; height:340px; transform:scale(.8); }
    .pcs-ap-inner { grid-template-columns:1fr; }
    .pcs-offer-body { grid-template-columns:1fr; gap:2.5rem; }
    .pcs-orbit-wrap { width:320px; height:320px; }
    .pcs-orbit-center { width:90px; height:90px; }
    .pcs-orbit-center-name { font-size:1.1rem; }
    .pcs-orbit-node-box { width:70px; height:70px; }
    /* pcs-fb-grid handled in 540px */
    .pcs-fb-grid { grid-template-columns:1fr 120px 1fr; }
    .pcs-offer-body { grid-template-columns:1fr; }
    .pcs-orbit-wrap { width:300px; height:300px; }
  }
  @media(max-width:540px){
    .pcs-nav-links, .pcs-nav-btn { display:none; }
    .pcs-hero-heading { font-size:clamp(1.7rem,6vw,2.2rem); } .wd-hero-heading { font-size:clamp(1.7rem,6vw,2.2rem) !important; text-align:start !important; }
    .pcs-wi5-tab-content { grid-template-columns:1fr; padding-left:1rem; }
    .pcs-proc-gc { padding:1.4rem 1.2rem; }
    .pcs-proc-gc-num { font-size:2.4rem; }
    .pcs-fb-grid { grid-template-columns:1fr !important; }
    .pcs-fb-center-col { display:none; }
    .pcs-fb-box-tl, .pcs-fb-box-tr, .pcs-fb-box-bl, .pcs-fb-box-br { border-radius:16px;        margin-top: 25px; border:1.5px solid rgba(0,65,104,0.13) !important; grid-column:1 !important; }
    .pcs-fb-vline, .pcs-fb-hline { display:none; }
    .wd-hero { grid-template-columns:1fr; padding:7rem 5% 5rem; text-align:center; }
    .wd-hero-actions { justify-content:center; }
    .wd-ap-inner { grid-template-columns:1fr; }
    .wd-ap-form-wrap { max-width:100%; }
    .pcs-orbit-wrap { width:260px; height:260px; }
    .pcs-orbit-node-box { width:60px; height:60px; }
    .pcs-orbit-center { width:75px; height:75px; }
    .pcs-orbit-center-name { font-size:.9rem; }
    .pcs-wi5-tab-num { width:36px; height:36px; }
    .pcs-wi5-tab-num-text { font-size:.7rem; }
    .pcs-wi5-tab-icon { width:32px; height:32px; font-size:.95rem; }
    .pcs-wi5-tab-title { font-size:.92rem; }
    .pcs-wi5-tab-head { gap:1rem; padding:1.1rem 1.2rem; }
    .pcs-wi5-tab-content { padding:1.2rem 1rem 1.2rem 1rem; }
  }
  /* \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
     COMPREHENSIVE MOBILE RESPONSIVE FIXES
     Covers: form, FAQ, orbit, features, all sections
  \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550} */

  /* \u{2500}\u{2500} FORM: 2-col row \u{2192} 1-col on mobile \u{2500}\u{2500} */
  @media (max-width: 768px) {
    .wd-fl-row { grid-template-columns: 1fr !important; }
    .wd-ap-form-card { padding: 1.8rem 1.2rem !important; }
    .wd-form-title { font-size: 1.35rem !important; margin-bottom: 1.4rem !important; }
    .wd-ap-form-wrap { max-width: 100% !important; }
    .wd-ap-inner { grid-template-columns: 1fr !important; gap: 2rem !important; }
    .wd-approach { padding: 3rem 5% !important; }

    /* \u{2500}\u{2500} OFFER SECTION \u{2500}\u{2500} */
    .pcs-offer-section { padding: 3.5rem 5% 4rem !important; }
    .pcs-offer-body { grid-template-columns: 1fr !important; gap: 2rem !important; }
    .pcs-offer-heading { margin-bottom: 2.5rem !important; font-size: clamp(1.5rem, 5vw, 2rem) !important; }
    .pcs-orbit-wrap { width: 260px !important; height: 260px !important; margin: 0 auto !important; }
    .pcs-orbit-center { width: 80px !important; height: 80px !important; }
    .pcs-orbit-center-name { font-size: 0.95rem !important; }
    .pcs-orbit-node-box { width: 65px !important; height: 65px !important; }
    .pcs-orbit-node-emoji { font-size: 1rem !important; }
    .pcs-orbit-node-lbl { font-size: 0.55rem !important; }

    /* \u{2500}\u{2500} WHAT'S INCLUDED ACCORDION \u{2500}\u{2500} */
    .pcs-wi5-section { padding: 3.5rem 5% 4rem !important; }
    .pcs-wi5-tab-content { grid-template-columns: 1fr !important; padding-left: 1rem !important; gap: 1rem !important; }
    .pcs-wi5-tab-head { gap: 0.8rem !important; padding: 1rem 1rem !important; }
    .pcs-wi5-tab-num { width: 38px !important; height: 38px !important; }
    .pcs-wi5-tab-icon { width: 34px !important; height: 34px !important; font-size: 1rem !important; }
    .pcs-wi5-tab-title { font-size: 0.9rem !important; }
    .pcs-wi5-heading { font-size: clamp(1.4rem, 5vw, 1.9rem) !important; margin-bottom: 2rem !important; }

    /* \u{2500}\u{2500} PROCESS GRID \u{2500}\u{2500} */
    .pcs-proc-section { padding: 3.5rem 5% !important; }
    .pcs-proc-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
    .pcs-proc-gc { padding: 1.4rem 1.2rem !important; }
    .pcs-proc-gc-num { font-size: 2.2rem !important; }
    .pcs-proc-title { font-size: clamp(1.4rem, 5vw, 2rem) !important; }

    /* \u{2500}\u{2500} FEATURES (4-BOX) \u{2500}\u{2500} */
    .pcs-fb-section { padding: 3.5rem 5% !important; }
    .pcs-fb-grid { grid-template-columns: 1fr !important; }
    .pcs-fb-center-col { display: none !important; }
    .pcs-fb-vline, .pcs-fb-hline { display: none !important; }
    .pcs-fb-box-tl, .pcs-fb-box-tr, .pcs-fb-box-bl, .pcs-fb-box-br {
      border-radius: 16px !important;
      border: 1.5px solid rgba(0,65,104,0.13) !important;
      grid-column: 1 !important;
      margin-top: 16px !important;
    }
    .pcs-fb-title { font-size: clamp(1.4rem, 5vw, 2rem) !important; }

    /* \u{2500}\u{2500} FAQ SECTION \u{2500}\u{2500} */
    .faq-section { padding: 0 5% 60px !important; }
    .faq-wrapper { grid-template-columns: 1fr !important; gap: 0 !important; }
    .faq-head h2 { font-size: clamp(1.4rem, 5vw, 2rem) !important; }
    .faq-question { font-size: 0.92rem !important; padding: 1rem 1.2rem !important; }
    .faq-answer { font-size: 0.88rem !important; padding: 0.8rem 1.2rem 1rem !important; }
    .faq-item { margin-bottom: 0.5rem !important; }

    /* \u{2500}\u{2500} WCU (Why Choose Us) \u{2500}\u{2500} */
    .wcu-section { padding: 3rem 5% !important; }
    .wcu-inner { grid-template-columns: 1fr !important; gap: 2rem !important; }
    .wcu-heading { font-size: clamp(1.4rem, 5vw, 2rem) !important; }

    /* \u{2500}\u{2500} PORTFOLIO \u{2500}\u{2500} */
    .pf-section { padding: 3rem 5% !important; }
    .pf-inner { grid-template-columns: 1fr !important; gap: 1.5rem !important; padding: 1.8rem 1.2rem !important; }
    .pf-cols { grid-template-columns: repeat(2, 1fr) !important; gap: 0.6rem !important; }
    .pf-heading { font-size: clamp(1.4rem, 5vw, 2rem) !important; }

    /* \u{2500}\u{2500} KEY FEATURES CAROUSEL \u{2500}\u{2500} */
    .kf-section { padding: 2.5rem 0 3rem !important; }
    .kf-inner { padding: 1.5rem 1rem !important; }
    .kf-card { width: 260px !important; }
    .kf-title { font-size: clamp(1.4rem, 5vw, 1.9rem) !important; }

    /* \u{2500}\u{2500} HERO (Static page fallback) \u{2500}\u{2500} */
    .wd-hero {
      grid-template-columns: 1fr !important;
      padding: 5.5rem 5% 3rem !important;
      gap: 2rem !important;
      text-align: left !important;
      min-height: auto !important;
    }
    .wd-hero-heading { font-size: clamp(1.6rem, 6vw, 2.3rem) !important; text-align: left !important; }
    .wd-hero-sub { font-size: 0.92rem !important; }
    .wd-hero-img { height: auto !important; max-height: 260px !important; width: 100% !important; object-fit: contain !important; }
    .wd-hero-actions { justify-content: flex-start !important; }
    .wd-btn-fill { width: auto !important; min-width: 200px !important; justify-content: center !important; }
    .badge { margin: 0 0 1.2rem !important; }

    /* \u{2500}\u{2500} APPROACH SECTION (generic) \u{2500}\u{2500} */
    .wd-ap-eyebrow { font-size: 0.62rem !important; }
    .wd-ap-heading { font-size: clamp(1.4rem, 5vw, 2rem) !important; }
    .wd-ap-intro { font-size: 0.92rem !important; }

    /* \u{2500}\u{2500} GENERAL PADDING \u{2500}\u{2500} */
    section { overflow-x: hidden; }
    .container { padding-left: 1rem !important; padding-right: 1rem !important; }
  }

  /* \u{2500}\u{2500} EXTRA SMALL (< 400px) \u{2500}\u{2500} */
  @media (max-width: 400px) {
    .wd-hero { padding: 7.5rem 4% 2rem !important; }
    .wd-hero-heading { font-size: clamp(1.4rem, 7.5vw, 1.9rem) !important; }
    .wd-hero-img { max-height: 200px !important; }
    .wd-ap-form-card { padding: 1.4rem 1rem !important; }
    .wd-form-title { font-size: 1.2rem !important; }
    .pcs-orbit-wrap { width: 220px !important; height: 220px !important; }
    .pcs-orbit-node-box { width: 54px !important; height: 54px !important; }
    .pcs-orbit-center { width: 68px !important; height: 68px !important; }
    .wd-btn-fill { width: 75% !important; }
    .faq-wrapper { grid-template-columns: 1fr !important; }
  }

`,d=[{emoji:"/img/icon/custom-website-tailored.webp",label:"Tailored",title:"Tailored Website Solutions",desc:"Every business is unique. Our custom website design and hosting solutions are developed around your goals, target audience, and industry requirements. We create personalized, high-performing, scalable digital platforms aligned with your brand identity and long-term vision.",tags:["Personalized","Strategic","Scalable","Branded"]},{emoji:"/img/icon/custom-website-architecture.webp",label:"Architecture",title:"Scalable & Future-Ready Architecture",desc:"Our websites are built with scalable structures that allow seamless expansion, feature upgrades, and performance enhancements. Whether you require additional pages or functionality upgrades, your website adapts effortlessly as your business evolves.",tags:["Expandable","Flexible","Futureproof","Adaptive"]},{emoji:"/img/icon/custom-website-security.webp",label:"Security",title:"Performance & Security Optimization",desc:"Our custom website development services include speed optimization, secure hosting guidance, SSL configuration, and strict coding practices. We ensure your website remains stable, secure, and reliable while delivering an exceptional browsing experience.",tags:["Optimized","Secure","Stable","Reliable"]},{emoji:"/img/icon/custom-website-experience.webp",label:"Experience",title:"Conversion-Focused User Experience",desc:"Through strategic layouts, structured content hierarchy, and intuitive navigation, we design websites that encourage engagement. Every element is carefully crafted to guide visitors smoothly and convert interest into meaningful business inquiries.",tags:["Engaging","Intuitive","Structured","ConversionDriven"]},{emoji:"/img/icon/custom-website-delivery.webp",label:"Delivery",title:"On-Time Delivery & Continuous Support",desc:"A milestone-driven development approach ensures your custom website launches without delays. Post-deployment, we provide ongoing maintenance, updates, and technical assistance to ensure consistent performance and long-term digital reliability.",tags:["Timely","Supportive","Consistent","Dependable"]}],p=[{top:"5%",left:"50%"},{top:"22%",left:"87%"},{top:"73%",left:"82%"},{top:"73%",left:"18%"},{top:"22%",left:"13%"}],m=[-90,-18,54,126,198],g=[{num:"01",icon:"/img/icon/custom-website-strategy.webp",title:"Custom Website Strategy & Development",desc:"We design and develop fully customized websites tailored to your brand positioning, audience expectations, and business objectives. Every element is strategically structured to ensure performance, scalability, seamless navigation, and long-term digital impact.",tags:[{t:"UI Design",c:"t-orange"},{t:"UX Strategy",c:"t-blue"},{t:"Brand Alignment",c:"t-orange"},{t:"Typography",c:"t-blue"}]},{num:"02",icon:"/img/icon/custom-website-modernization.webp",title:"Website Revamp & Modernization",desc:"Our website redesign services Coimbatore focus on transforming outdated websites into modern, high-performing platforms with refined user interfaces, improved speed, optimized content flow, and enhanced usability while preserving brand consistency.",tags:[{t:"Content Hierarchy",c:"t-orange"},{t:"Info Architecture",c:"t-blue"},{t:"CTA Placement",c:"t-orange"},{t:"Navigation Flow",c:"t-blue"}]},{num:"03",icon:"/img/icon/custom-website-audience.webp",title:"Audience-Centric Custom Web Design",desc:"With our custom web design Coimbatore expertise, we create engaging visual experiences tailored to your target audience, ensuring your website leaves a strong and lasting impression.",tags:[{t:"Mobile-First",c:"t-orange"},{t:"Cross-Device",c:"t-blue"},{t:"Fluid Layouts",c:"t-orange"},{t:"Touch UX",c:"t-blue"}]},{num:"04",icon:"/img/icon/custom-website-hosting.webp",title:"Secure Hosting & Technical Deployment",desc:"We offer complete custom website design and hosting solutions including server setup, domain configuration, SSL security implementation, and optimized deployment to ensure reliable performance and uninterrupted online presence.",tags:[{t:"Brand Guidelines",c:"t-orange"},{t:"Colour System",c:"t-blue"},{t:"Visual Identity",c:"t-orange"},{t:"Brand Voice",c:"t-blue"}]},{num:"05",icon:"/img/icon/custom-website-seo.webp",title:"SEO & Performance Optimization Setup",desc:"Our team implements foundational SEO configuration, analytics integration, and performance tracking systems to enhance visibility, monitor user behavior, and support data-driven decision-making for sustainable business growth.",tags:[{t:"Page Speed",c:"t-orange"},{t:"Core Web Vitals",c:"t-blue"},{t:"SEO Architecture",c:"t-orange"},{t:"Conversion Rate",c:"t-blue"}]}],f=[{num:"01",icon:"/img/icon/custom-website-analytics.webp",title:"Business Discovery & Requirement Analysis",desc:"We analyze your brand, audience, and objectives to define technical scope, design direction, and functional requirements for your website.",tags:["Business Goals","Audience Research","Competitor Analysis"],last:!1},{num:"02",icon:"/img/icon/custom-website-wireframing.webp",title:"Structure Planning & Wireframing",desc:"We create detailed sitemaps and wireframes to structure page hierarchy, navigation flow, and content placement for intuitive user experience.",tags:["Wireframes","Site Architecture","Content Planning"],last:!1},{num:"03",icon:"/img/icon/custom-website-design-development.webp",title:"UI/UX Design & Development",desc:"Our team designs and develops responsive websites using modern frameworks, ensuring consistent visuals, clean coding, and seamless performance across devices.",tags:["Visual Design","Brand System","UX Prototyping"],last:!1},{num:"04",icon:"/img/icon/custom-website-content.webp",title:"Content Integration & On-Page Setup",desc:"We integrate structured content, optimize layout alignment, configure essential on-page elements, and ensure clarity, consistency, and SEO readiness across pages.",tags:["Responsive Code","SEO Structure","Performance"],last:!1},{num:"05",icon:"/img/icon/custom-website-testing.webp",title:"Testing & Optimization",desc:"We conduct comprehensive testing for speed, responsiveness, security, and compatibility, optimizing performance to ensure smooth functionality before launch.",tags:["Cross-Browser","Speed Testing","QA Review"],last:!1},{num:"06",icon:"/img/icon/custom-website-launch.webp",title:"Launch & Ongoing Maintenance",desc:"After approval, we deploy your website with monitoring and configuration, providing continuous support, updates, and maintenance for long-term stability",tags:["Go Live","Monitoring","Ongoing Support"],last:!0}],b=[{cls:"pcs-fb-box-tl",icon:"/img/icon/custom-website-responsive.webp",title:"Responsive & Mobile-Optimized Design",desc:"Our custom websites are fully responsive, ensuring smooth browsing, fast loading speeds, and consistent visual presentation across smartphones, tablets, and desktops for enhanced user engagement and accessibility."},{cls:"pcs-fb-box-tr",icon:"/img/icon/custom-website-seo-structure.webp",title:"SEO-Optimized Structure",desc:"We implement search-friendly URLs, optimized content hierarchy, structured metadata, and mobile-first frameworks to improve visibility, strengthen search engine performance, and increase organic traffic reach."},{cls:"pcs-fb-box-bl",icon:"/img/icon/custom-website-secure-security.webp",title:"Secure & Reliable Hosting",desc:"Advanced security configurations, SSL integration, and stable hosting environments protect your website, safeguard sensitive data, and ensure uninterrupted performance with maximum uptime reliability."},{cls:"pcs-fb-box-br",icon:"/img/icon/custom-website-framework.webp",title:"Scalable & Flexible Framework",desc:"Our custom website development India solutions are built with flexible architecture, allowing easy feature enhancements, additional pages, seamless integrations, and future upgrades without performance compromise."}],h=[{q:"Why should I choose a local web development company in Coimbatore?",a:"Choosing a local provider for Custom Website Development in Coimbatore ensures better communication, regional market understanding, faster support, and personalized service tailored to your business needs."},{q:"What types of websites do you develop?",a:"We develop corporate websites, portfolio websites, service-based websites, landing pages, informational websites, and business websites customized according to industry requirements."},{q:"What does custom development in website development mean?",a:"It means designing and coding website features, layouts, and functionality specifically for your business needs, allowing greater control, scalability, and customization"},{q:"Do you provide ongoing maintenance and support?",a:"Yes. We offer continuous maintenance, security updates, technical support, and performance monitoring to ensure your website remains stable and up-to-date."},{q:"Is my custom website mobile-friendly and SEO-optimized?",a:"Yes. Every website we build is fully responsive and developed with foundational SEO best practices to improve search visibility and user experience."},{q:"What features can be included in a custom website?",a:"Features can include contact forms, inquiry systems, analytics integration, blog sections, service pages, CRM integration, and custom functionality based on business needs."}];function x(){let[e,t]=(0,n.useState)(0),[i,x]=(0,n.useState)(0),[u,w]=(0,n.useState)({name:"",email:"",phone:"",company:"",msg:""}),v=e=>w({...u,[e.target.name]:e.target.value}),[y,j]=(0,n.useState)(null),N=e=>{j(y===e?null:e)};return(0,r.jsx)(c.A,{children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:l}),(0,r.jsxs)("section",{className:"wd-hero",children:[(0,r.jsx)("div",{className:"wd-hero-bg-radial"}),(0,r.jsx)("div",{className:"wd-hero-bg-grid"}),(0,r.jsxs)("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column"},children:[(0,r.jsxs)("div",{className:"badge",children:[(0,r.jsx)("div",{className:"badge-dot"}),"Custom Website"]}),(0,r.jsxs)("h1",{className:"wd-hero-heading",children:["Build a Custom Website That ",(0,r.jsx)("span",{className:"orange lined",children:"Reflects"})," Your Brand Identity"]}),(0,r.jsx)("p",{className:"wd-hero-sub",children:"Your digital presence should communicate credibility, clarity, and confidence. Through our Custom Website Development services in Coimbatore, we deliver tailored websites engineered for performance, scalability, and long-term business success."}),(0,r.jsx)("div",{className:"wd-hero-actions",children:(0,r.jsxs)("a",{className:"wd-btn-fill",href:"#",children:["Get a Free Quote ",(0,r.jsx)("span",{className:"wd-btn-arrow",children:"\u203A"})]})})]}),(0,r.jsx)("div",{style:{position:"relative",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center",animation:"fadeUp .9s .15s ease both"},children:(0,r.jsx)("img",{src:"/img/custom-website-development.png",alt:"Custom Website Development",className:"wd-hero-img"})})]}),(0,r.jsx)("section",{className:"wd-approach",id:"approach",children:(0,r.jsxs)("div",{className:"wd-ap-inner",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"partners-header1",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Strategy for Custom Website Development"})}),(0,r.jsxs)("h2",{className:"wd-ap-heading",children:["Strategic,   ",(0,r.jsx)("span",{children:"High-Performance "})," Custom Website Solutions"]}),(0,r.jsx)("p",{className:"wd-ap-intro",children:"A successful website requires more than attractive design \u2014 it needs the right strategy, structure, and technical foundation. Our custom website development services focus on scalability, responsiveness, SEO readiness, and long-term digital performance."}),(0,r.jsx)("p",{className:"wd-ap-intro",children:"We follow clean coding standards, structured architecture, and optimized development practices to ensure seamless functionality, faster loading speeds, and an enhanced user experience across all devices and platforms."}),(0,r.jsx)("p",{className:"wd-ap-intro",children:"As a trusted custom website development company, we build search-friendly websites integrated with analytics tools and scalable frameworks that strengthen your online presence and support sustainable business growth."})]}),(0,r.jsx)("div",{className:"wd-ap-form-wrap",children:(0,r.jsxs)("div",{className:"wd-ap-form-card",children:[(0,r.jsxs)("div",{className:"wd-form-eyebrow",children:[(0,r.jsx)("span",{className:"wd-form-eyebrow-line"}),"Your Growth, Our Mission",(0,r.jsx)("span",{className:"wd-form-eyebrow-line"})]}),(0,r.jsxs)("div",{className:"wd-form-title",children:["Get Your ",(0,r.jsx)("span",{children:"Free"})," Quote"]}),(0,r.jsxs)("form",{onSubmit:e=>{e.preventDefault();let t={name:u.name,email:u.email,phone:u.phone,company:u.company,message:u.msg,url:window.location.href};a.Ay.send("service_8xw6k3r","template_jarui36",t,"XWRnXi4hK2SvmRG3q").then(()=>{alert("Message Sent Successfully \u2705"),w({name:"",email:"",phone:"",company:"",msg:""})}).catch(e=>{console.log(e),alert("Failed to send \u274C")})},children:[(0,r.jsxs)("div",{className:"wd-fl-row",children:[(0,r.jsxs)("div",{className:"wd-fl-group",children:[(0,r.jsx)("label",{className:"wd-fl-label",children:"Your Name"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"wd-fl-icon",children:"\u{1F464}"}),(0,r.jsx)("input",{className:"wd-fl-input",type:"text",name:"name",placeholder:"Full name",value:u.name,onChange:v,required:!0})]})]}),(0,r.jsxs)("div",{className:"wd-fl-group",children:[(0,r.jsx)("label",{className:"wd-fl-label",children:"Company"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"wd-fl-icon",children:"\u{1F3E2}"}),(0,r.jsx)("input",{className:"wd-fl-input",type:"text",name:"company",placeholder:"Company name",value:u.company,onChange:v})]})]})]}),(0,r.jsxs)("div",{className:"wd-fl-group",children:[(0,r.jsx)("label",{className:"wd-fl-label",children:"Email Address"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"wd-fl-icon",children:"\u2709\uFE0F"}),(0,r.jsx)("input",{className:"wd-fl-input",type:"email",name:"email",placeholder:"your@email.com",value:u.email,onChange:v,required:!0})]})]}),(0,r.jsxs)("div",{className:"wd-fl-group",children:[(0,r.jsx)("label",{className:"wd-fl-label",children:"Mobile Number"}),(0,r.jsxs)("div",{className:"wd-phone-row",children:[(0,r.jsx)("div",{className:"wd-phone-flag",children:(0,r.jsx)("span",{children:"\u{1F4DE}"})}),(0,r.jsx)("input",{className:"wd-fl-input",type:"tel",name:"phone",placeholder:"Mobile number",value:u.phone,onChange:v,maxLength:"10",pattern:"[0-9]{10}",required:!0})]})]}),(0,r.jsxs)("div",{className:"wd-fl-group wd-textarea-group",children:[(0,r.jsx)("label",{className:"wd-fl-label",children:"Message"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"wd-fl-icon",style:{top:"0.9rem",transform:"none"},children:"\u{1F4AC}"}),(0,r.jsx)("textarea",{className:"wd-fl-textarea",name:"msg",placeholder:"Tell us about your project...",value:u.msg,onChange:v})]})]}),(0,r.jsxs)("button",{type:"submit",className:"wd-ap-submit",children:["Get Free Consultation",(0,r.jsx)("span",{className:"wd-ap-submit-arrow",children:"\u203A"})]})]})]})})]})}),(0,r.jsx)("section",{className:"pcs-offer-section",children:(0,r.jsxs)("div",{className:"pcs-offer-inner",children:[(0,r.jsx)("div",{className:"partners-header1",style:{marginBottom:"20px",textAlign:"center"},children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"center"},children:"Key Uniqueness"})}),(0,r.jsxs)("h2",{className:"pcs-offer-heading",children:["Why Should You Choose us for ",(0,r.jsx)("span",{children:(0,r.jsx)("i",{children:"Custom Website Development??"})})]}),(0,r.jsxs)("div",{className:"pcs-offer-body",children:[(0,r.jsx)("div",{className:"pcs-offer-left",children:(0,r.jsxs)("div",{className:"pcs-orbit-wrap",children:[(0,r.jsx)("div",{className:"pcs-orbit-ring"}),m.map((t,i)=>(0,r.jsx)("div",{className:`pcs-orbit-connector${e===i?" active":""}`,style:{width:"calc(50% - 62px)",transform:`rotate(${t}deg) translateY(-50%)`}},i)),(0,r.jsxs)("div",{className:"pcs-orbit-center",children:[(0,r.jsx)("div",{className:"pcs-orbit-center-name",children:"PCS"}),(0,r.jsx)("div",{className:"pcs-orbit-center-sub",children:"Web Design"})]}),d.map((i,n)=>(0,r.jsx)("div",{className:"pcs-orbit-node",style:{top:p[n].top,left:p[n].left},onClick:()=>t(n),children:(0,r.jsxs)("div",{className:`pcs-orbit-node-box${e===n?" active":""}`,children:[(0,r.jsx)("img",{src:i.emoji,alt:i.label,style:{width:"28px",height:"28px",objectFit:"contain"}}),(0,r.jsx)("div",{className:"pcs-orbit-node-lbl",children:i.label})]})},n))]})}),(0,r.jsxs)("div",{className:"pcs-offer-right",children:[-1===e&&(0,r.jsxs)("div",{className:"pcs-offer-placeholder",children:[(0,r.jsx)("div",{className:"pcs-offer-placeholder-icon",children:(0,r.jsx)("img",{src:"/img/icons/click.png",alt:"Select an option",style:{width:"40px",height:"40px",objectFit:"contain",opacity:"0.4"}})}),(0,r.jsx)("div",{className:"pcs-offer-placeholder-text",children:"Click any box to view details"})]}),d.map((t,i)=>(0,r.jsxs)("div",{className:`pcs-offer-panel${e===i?" active":""}`,children:[(0,r.jsx)("div",{className:"pcs-offer-panel-bar"}),(0,r.jsxs)("div",{className:"pcs-offer-panel-title-row",children:[(0,r.jsx)("div",{className:"pcs-offer-panel-icon",children:(0,r.jsx)("img",{src:t.emoji,alt:t.title,style:{width:"32px",height:"32px",objectFit:"contain"}})}),(0,r.jsx)("div",{className:"pcs-offer-panel-title",children:t.title})]}),(0,r.jsx)("div",{className:"pcs-offer-panel-divider"}),(0,r.jsx)("div",{className:"pcs-offer-panel-desc",children:t.desc}),(0,r.jsx)("div",{className:"pcs-offer-panel-tags",children:t.tags.map((e,t)=>(0,r.jsx)("span",{className:"pcs-offer-panel-tag",children:e},t))})]},i))]})]})]})}),(0,r.jsx)("section",{className:"pcs-wi5-section",children:(0,r.jsxs)("div",{className:"pcs-wi5-inner",children:[(0,r.jsx)("div",{className:"pcs-offer-inner",children:(0,r.jsx)("div",{className:"partners-header1",style:{marginBottom:"10px",textAlign:"center"},children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{textAlign:"center"},children:"Our Expertise  "})})}),(0,r.jsxs)("h2",{className:"pcs-wi5-heading",children:["What\u2019s Included in Our  ",(0,r.jsx)("span",{children:(0,r.jsx)("i",{children:"Custom Website "})}),"Development  Services?"]}),(0,r.jsx)("div",{className:"pcs-wi5-tabs",children:g.map((e,t)=>(0,r.jsxs)("div",{className:`pcs-wi5-tab${i===t?" open":""}`,children:[(0,r.jsxs)("div",{className:"pcs-wi5-tab-head",onClick:()=>x(i===t?-1:t),children:[(0,r.jsxs)("div",{className:"pcs-wi5-tab-num",children:[(0,r.jsx)("div",{className:"pcs-wi5-tab-num-diamond"}),(0,r.jsx)("span",{className:"pcs-wi5-tab-num-text",children:e.num})]}),(0,r.jsx)("div",{className:"pcs-wi5-tab-icon",children:(0,r.jsx)("img",{src:e.icon,alt:e.title,style:{width:"22px",height:"22px",objectFit:"contain"}})}),(0,r.jsx)("div",{className:"pcs-wi5-tab-title",children:e.title}),(0,r.jsx)("div",{className:"pcs-wi5-tab-chev",children:(0,r.jsx)("span",{style:{fontSize:"1rem",lineHeight:"1",display:"block"},children:"\u25BE"})})]}),(0,r.jsxs)("div",{className:"pcs-wi5-tab-body",children:[(0,r.jsx)("div",{className:"pcs-wi5-tab-content",children:(0,r.jsx)("div",{className:"pcs-wi5-tab-desc",children:e.desc})}),(0,r.jsx)("div",{className:"pcs-wi5-tab-progress"})]})]},t))})]})}),(0,r.jsx)("section",{className:"pcs-proc-section",children:(0,r.jsxs)("div",{className:"pcs-proc-inner",children:[(0,r.jsxs)("div",{className:"pcs-proc-header",children:[(0,r.jsx)("div",{className:"pcs-offer-inner",children:(0,r.jsx)("div",{className:"partners-header1",style:{marginBottom:"10px",textAlign:"center"},children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{textAlign:"center"},children:"Workflow Process"})})}),(0,r.jsxs)("h2",{className:"pcs-proc-title",children:["Our  ",(0,r.jsx)("span",{children:(0,r.jsx)("i",{children:" Custom Website"})})," Development Process "]})]}),(0,r.jsx)("div",{className:"pcs-proc-grid",children:f.map((e,t)=>(0,r.jsxs)("div",{className:"pcs-proc-gc",children:[(0,r.jsxs)("div",{className:"pcs-proc-gc-top",children:[(0,r.jsx)("div",{className:"pcs-proc-gc-num",children:e.num}),(0,r.jsx)("div",{className:"pcs-proc-gc-icon",children:(0,r.jsx)("img",{src:e.icon,alt:e.title,style:{width:"28px",height:"28px",objectFit:"contain"}})})]}),(0,r.jsx)("div",{className:"pcs-proc-gc-title",children:e.title}),(0,r.jsx)("div",{className:"pcs-proc-gc-desc",children:e.desc})]},t))})]})}),(0,r.jsx)("section",{className:"pcs-fb-section",children:(0,r.jsxs)("div",{className:"pcs-fb-inner",children:[(0,r.jsxs)("div",{className:"pcs-fb-header",children:[(0,r.jsx)("div",{className:"pcs-offer-inner",children:(0,r.jsx)("div",{className:"partners-header1",style:{marginBottom:"10px",textAlign:"center"},children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{textAlign:"center"},children:"Key Service Features"})})}),"            ",(0,r.jsxs)("h2",{className:"pcs-fb-title",children:["Features of our  ",(0,r.jsx)("span",{children:(0,r.jsx)("i",{children:" Custom Website"})})," Development Services"]})]}),(0,r.jsxs)("div",{className:"pcs-fb-grid",children:[(0,r.jsx)("div",{className:"pcs-fb-vline"}),(0,r.jsx)("div",{className:"pcs-fb-hline"}),(0,r.jsxs)("div",{className:"pcs-fb-box pcs-fb-box-tl",children:[(0,r.jsx)("div",{className:"pcs-fb-icon",children:(0,r.jsx)("img",{src:b[0].icon,alt:b[0].title,style:{width:"32px",height:"32px",objectFit:"contain"}})}),(0,r.jsx)("div",{className:"pcs-fb-box-title",children:b[0].title}),(0,r.jsx)("div",{className:"pcs-fb-box-desc",children:b[0].desc})]}),(0,r.jsx)("div",{className:"pcs-fb-center-col",children:(0,r.jsx)("div",{className:"pcs-fb-center-circle",children:(0,r.jsxs)("div",{className:"pcs-fb-center-inner",children:[(0,r.jsx)("div",{className:"pcs-fb-center-icon",children:(0,r.jsx)("img",{src:"/img/icons/web.png",alt:"PCS",style:{width:"36px",height:"36px",objectFit:"contain"}})}),(0,r.jsx)("div",{className:"pcs-fb-center-lbl",children:"PCS"})]})})}),(0,r.jsxs)("div",{className:"pcs-fb-box pcs-fb-box-tr",children:[(0,r.jsx)("div",{className:"pcs-fb-icon",children:(0,r.jsx)("img",{src:b[1].icon,alt:b[1].title,style:{width:"32px",height:"32px",objectFit:"contain"}})}),(0,r.jsx)("div",{className:"pcs-fb-box-title",children:b[1].title}),(0,r.jsx)("div",{className:"pcs-fb-box-desc",children:b[1].desc})]}),(0,r.jsxs)("div",{className:"pcs-fb-box pcs-fb-box-bl",children:[(0,r.jsx)("div",{className:"pcs-fb-icon",children:(0,r.jsx)("img",{src:b[2].icon,alt:b[2].title,style:{width:"32px",height:"32px",objectFit:"contain"}})}),(0,r.jsx)("div",{className:"pcs-fb-box-title",children:b[2].title}),(0,r.jsx)("div",{className:"pcs-fb-box-desc",children:b[2].desc})]}),(0,r.jsxs)("div",{className:"pcs-fb-box pcs-fb-box-br",children:[(0,r.jsx)("div",{className:"pcs-fb-icon",children:(0,r.jsx)("img",{src:b[3].icon,alt:b[3].title,style:{width:"32px",height:"32px",objectFit:"contain"}})}),(0,r.jsx)("div",{className:"pcs-fb-box-title",children:b[3].title}),(0,r.jsx)("div",{className:"pcs-fb-box-desc",children:b[3].desc})]})]})]})}),(0,r.jsx)(o.A,{}),(0,r.jsxs)("section",{className:"faq-section",style:{padding:"0 0 80px 0"},children:[(0,r.jsx)("div",{className:"partners-header2",style:{textAlign:"center",marginTop:"20px"},children:(0,r.jsx)("div",{className:"partners-eyebrow",children:"Frequently Asked Questions"})}),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"faq-head",children:(0,r.jsxs)("h2",{children:["Queries That Could ",(0,r.jsx)("span",{children:"Hold You Back"})]})}),(0,r.jsxs)("div",{className:"faq-wrapper",children:[(0,r.jsx)("div",{className:"faq-col",children:h.slice(0,3).map((e,t)=>(0,r.jsxs)("div",{className:"faq-item",children:[(0,r.jsxs)("div",{className:"faq-question",onClick:()=>N(t),children:[(0,r.jsx)("span",{children:e.q}),(0,r.jsx)("span",{className:"icon",children:y===t?"\u2212":"+"})]}),y===t&&(0,r.jsx)("div",{className:"faq-answer",children:e.a})]},t))}),(0,r.jsx)("div",{className:"faq-col",children:h.slice(3,6).map((e,t)=>(0,r.jsxs)("div",{className:"faq-item",children:[(0,r.jsxs)("div",{className:"faq-question",onClick:()=>N(t+3),children:[(0,r.jsx)("span",{children:e.q}),(0,r.jsx)("span",{className:"icon",children:y===t+3?"\u2212":"+"})]}),y===t+3&&(0,r.jsx)("div",{className:"faq-answer",children:e.a})]},t+3))})]})]})]}),(0,r.jsx)(s.A,{})]})})}}}]);