"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["888"],{3177(e,t,i){i.d(t,{A:()=>n});var r=i(4848),a=i(6540);function o(e){let t=document.createElement("div");return t.innerHTML=e,t.textContent||""}function n(){let[e,t]=(0,a.useState)([]),[i,n]=(0,a.useState)(!0),[s,l]=(0,a.useState)(null);return(0,a.useEffect)(()=>{fetch("/wp-json/wp/v2/posts?_embed&per_page=3&status=publish").then(e=>{if(!e.ok)throw Error(`HTTP ${e.status}`);return e.json()}).then(e=>{t(e),n(!1)}).catch(e=>{l(e.message),n(!1)})},[]),(0,r.jsxs)("section",{style:{width:"100%",padding:"4rem 1rem",boxSizing:"border-box",background:"#fff"},children:[(0,r.jsxs)("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[(0,r.jsxs)("div",{style:{textAlign:"center",marginBottom:"2.5rem"},children:[(0,r.jsx)("h2",{style:{fontSize:"2rem",fontWeight:700,margin:"0 0 0.5rem",color:"#111"},children:"Blogs"}),(0,r.jsx)("p",{style:{color:"#666",margin:0,fontSize:"1rem"},children:"Stay updated with the latest in digital marketing, growth strategies, and industry trends."})]}),i&&(0,r.jsx)("p",{style:{textAlign:"center",color:"#888"},children:"Loading..."}),s&&(0,r.jsxs)("p",{style:{textAlign:"center",color:"red"},children:["Error: ",s]}),(0,r.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1.5rem"},className:"blog-grid",children:e.map(e=>{var t;let i=e._embedded?.["wp:featuredmedia"]?.[0]?.source_url||null,a=o(e.title?.rendered||"Untitled"),n=(t=(t=o(e.excerpt?.rendered||"")).trim()).length>140?t.slice(0,140)+"...":t,s=e.link;return(0,r.jsxs)("div",{style:{border:"1px solid #e5e7eb",borderRadius:"12px",overflow:"hidden",background:"#fff",display:"flex",flexDirection:"column"},children:[(0,r.jsx)("div",{style:{width:"100%",aspectRatio:"16/9",overflow:"hidden",background:"#1a2744"},children:i?(0,r.jsx)("img",{src:i,alt:a,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):(0,r.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",opacity:.4,fontSize:"0.8rem"},children:"No image"})}),(0,r.jsxs)("div",{style:{padding:"1.25rem",flex:1,display:"flex",flexDirection:"column",gap:"0.75rem",background:"#fff",color:"#000000"},children:[(0,r.jsx)("p",{style:{fontWeight:600,fontSize:"1.1rem",lineHeight:1.6,margin:0},children:a}),(0,r.jsx)("p",{style:{color:"#000000",fontSize:"0.875rem",lineHeight:1.6,flex:1,margin:0},children:n}),(0,r.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",style:{display:"inline-block",background:"#E87C30",color:"#fff",padding:"0.6rem 1.5rem",borderRadius:"999px",textDecoration:"none",fontWeight:500,alignSelf:"flex-start",marginTop:"0.5rem",fontSize:"0.875rem"},children:"Read More"})]})]},e.id)})})]}),(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        @media (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}})]})}},9393(e,t,i){i.d(t,{A:()=>o});var r=i(4848),a=i(6540);let o=function(){let e=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let t=e.current;if(!t)return;let i=t.getContext("2d"),r="#ed8337",a,o,n=[],s;function l(){a=t.width=t.parentElement.offsetWidth,o=t.height=t.parentElement.offsetHeight}function d(){this.reset()}d.prototype.reset=function(){this.x=Math.random()*a,this.y=Math.random()*o,this.r=2.2*Math.random()+.6,this.type=.55>Math.random()?"dot":.5>Math.random()?"ring":"plus",this.speed=.35*Math.random()+.08,this.dir=Math.random()*Math.PI*2,this.alpha=.45*Math.random()+.1,this.pulse=Math.random()*Math.PI*2,this.pulseSpeed=.018*Math.random()+.008,this.size=4*Math.random()+2},d.prototype.update=function(){this.x+=Math.cos(this.dir)*this.speed,this.y+=Math.sin(this.dir)*this.speed,this.pulse+=this.pulseSpeed,this.dir+=(Math.random()-.5)*.015,this.x<-20&&(this.x=a+20),this.x>a+20&&(this.x=-20),this.y<-20&&(this.y=o+20),this.y>o+20&&(this.y=-20)},d.prototype.draw=function(){let e=this.alpha*(.7+.3*Math.sin(this.pulse));if(i.save(),i.globalAlpha=e,i.strokeStyle=i.fillStyle=r,i.lineWidth=1,"dot"===this.type)i.beginPath(),i.arc(this.x,this.y,this.r+.4*Math.sin(this.pulse),0,2*Math.PI),i.fill();else if("ring"===this.type){let e=this.size*(.9+.15*Math.sin(this.pulse));i.beginPath(),i.arc(this.x,this.y,e,0,2*Math.PI),i.stroke()}else{let e=this.size*(.9+.1*Math.sin(this.pulse));i.beginPath(),i.moveTo(this.x-e,this.y),i.lineTo(this.x+e,this.y),i.moveTo(this.x,this.y-e),i.lineTo(this.x,this.y+e),i.stroke()}i.restore()},window.addEventListener("resize",l),l(),n=[];let c=Math.floor(a*o/9e3);for(let e=0;e<Math.max(c,28);e++)n.push(new d);return!function e(){i.clearRect(0,0,a,o),function(){let e=n.filter(e=>"dot"===e.type);for(let t=0;t<e.length;t++)for(let a=t+1;a<e.length;a++){let o=e[t].x-e[a].x,n=e[t].y-e[a].y,s=Math.sqrt(o*o+n*n);s<110&&(i.save(),i.globalAlpha=(1-s/110)*.12,i.strokeStyle=r,i.lineWidth=.7,i.beginPath(),i.moveTo(e[t].x,e[t].y),i.lineTo(e[a].x,e[a].y),i.stroke(),i.restore())}}(),n.forEach(e=>{e.update(),e.draw()}),s=requestAnimationFrame(e)}(),()=>{cancelAnimationFrame(s),window.removeEventListener("resize",l)}},[]),(0,r.jsx)("section",{id:"cta-final",children:(0,r.jsxs)("div",{className:"cta-banner",style:{"--glow-x":"50%","--glow-y":"50%"},children:[(0,r.jsx)("canvas",{id:"ctaCanvas",ref:e}),(0,r.jsxs)("div",{className:"cta-banner-left",children:[(0,r.jsx)("div",{className:"partners-header",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Ready to Start?"})}),(0,r.jsxs)("h2",{className:"cta-banner-heading",children:["Let's Talk About Your",(0,r.jsx)("br",{}),"Next Big ",(0,r.jsx)("span",{className:"hl-italic",children:"Growth Move"})]}),(0,r.jsx)("p",{className:"cta-banner-sub",children:"No pressure. Just a quick conversation to understand where you are-and how we can help you move forward."})]}),(0,r.jsxs)("div",{className:"cta-banner-right",children:[(0,r.jsxs)("a",{href:"#",className:"cta-bprimary",children:["Book a Free Consultation",(0,r.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",children:(0,r.jsx)("path",{d:"M3 8h10M9 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,r.jsx)("a",{href:"#",className:"cta-bghost",children:"View All Services"})]})]})})}},313(e,t,i){i.r(t),i.d(t,{default:()=>j});var r=i(4848),a=i(6540),o=i(8128),n=i(9393),s=i(3177),l=i(1085);let d=`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=DM+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');

  :root {
    --navy: #004168;
    --navy-deep: #022b44;
    --navy-mid: #0a3652;
    --navy-card: #0d3f60;
    --navy-light: #0d4466;
    --orange: #ed8337;
    --orange-light: #f5a66b;
    --orange-glow: rgba(237,131,55,0.18);
    --white: #ffffff;
    --text-muted: rgba(255,255,255,0.55);
    --text-dim: rgba(255,255,255,0.35);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'DM Sans', sans-serif; overflow-x: hidden; }

  @keyframes fadeUp   { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:translateY(0) } }
  @keyframes fadeIn   { from { opacity:0 } to { opacity:1 } }
  @keyframes pulse-dot{ 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.8);opacity:0.4} }
  @keyframes orb-drift{ 0%{transform:translate(0,0)} 100%{transform:translate(22px,-22px)} }
  @keyframes line-in  { to{transform:scaleX(1)} }

  /* Global responsive fixes */
  img { max-width:100%; height:auto; }
  @media(max-width:768px){
    section { padding-left:5% !important; padding-right:5% !important; }
  }
  @media(max-width:480px){
    section { padding-left:4% !important; padding-right:4% !important; }
  }
`;function c(){return(0,r.jsxs)("section",{className:"hero-main-section",style:{minHeight:"100vh",display:"grid",alignItems:"center",gap:"2rem",padding:"4rem 6% 3rem",position:"relative",overflow:"hidden",background:"#004168"},children:[(0,r.jsxs)("style",{children:[d,`
        .seo-badge { display:inline-flex; align-items:center; gap:0.5rem; background:rgba(237,131,55,0.1); border:1px solid rgba(237,131,55,0.32); color:#ed8337; font-size:0.7rem; font-weight:700; padding:0.38rem 1rem; border-radius:50px; letter-spacing:0.09em; text-transform:uppercase; width:fit-content; animation:fadeUp .6s ease both; }
        .badge-dot-red { width:6px; height:6px; border-radius:50%; background:#ed8337; animation:pulse-dot 1.7s ease-in-out infinite; }
        .seo-hero-heading { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.6vw,3.3rem); font-weight:600; line-height:1.22; margin-top:1.3rem; color:#fff; animation:fadeUp .7s .08s ease both; text-align:start; }
        .seo-red { color:#ed8337; }
        .seo-underline { position:relative; display:inline-block; }
        .seo-underline::after { content:''; position:absolute; left:0; bottom:-3px; width:100%; height:3px; background:linear-gradient(90deg,#ed8337,#f5a66b); border-radius:2px; transform:scaleX(0); transform-origin:left; animation:line-in .55s 1s ease forwards; }
        .seo-sub { margin-top:1.4rem; font-size:0.97rem; line-height:1.82; color:rgba(255,255,255,0.85); max-width:fit-content; animation:fadeUp .7s .16s ease both; }
        .seo-actions { margin-top:2rem; display:flex; gap:1rem; align-items:center; flex-wrap:wrap; animation:fadeUp .7s .26s ease both; }
        .seo-btn-fill { background:linear-gradient(135deg,#ed8337,#f5a66b); color:#fff; padding:0.88rem 2.1rem; border-radius:50px; font-family:'DM Sans',sans-serif; font-size:0.93rem; font-weight:600; text-decoration:none; display:inline-flex; align-items:center; gap:0.55rem; box-shadow:0 6px 26px rgba(237,131,55,0.38); transition:all .22s; }
        .seo-btn-fill:hover { transform:translateY(-3px); box-shadow:0 10px 34px rgba(237,131,55,0.5); }
        .seo-btn-arr { width:24px; height:24px; border-radius:50%; background:rgba(2,43,68,0.25); display:flex; align-items:center; justify-content:center; font-size:0.9rem; }
        .hero-orb { position:absolute; border-radius:50%; pointer-events:none; filter:blur(80px); animation:orb-drift 8s ease-in-out infinite alternate; }
        .hero-orb-1 { width:400px; height:400px; background:rgba(237,131,55,0.06); top:-80px; right:8%; }
        .hero-orb-2 { width:280px; height:280px; background:rgba(10,54,82,0.8); bottom:-60px; left:5%; animation-delay:2s; }

        .hero-section-grid {
          display:grid;
          grid-template-columns:1fr 1fr;
          align-items:center;
          gap:2rem;
          width:100%;
          position:relative;
          z-index:2;
        }
        .hero-content-col { display:flex; flex-direction:column; padding-bottom:3rem; }
        .hero-img-col { display:flex; align-items:flex-end; justify-content:center; animation:fadeUp .9s .12s ease both; }
        .seo-illus-wrap { position:relative; width:100%; max-width:600px; height:470px; display:flex; align-items:center; justify-content:center; }

        @media(max-width:900px){
          section.hero-main-section { padding:4rem 5% 2rem !important; min-height:auto !important; display:block !important; }
          .hero-section-grid { grid-template-columns:1fr !important; gap:1.5rem; padding: 4rem 0; }
          .hero-content-col { order:1; padding-bottom:0; text-align:start !important; align-items:flex-start !important; }
          .hero-img-col { order:2; }
          .seo-illus-wrap { width:100% !important; height:260px !important; max-width:100%; }
          .seo-sub { max-width:100%; text-align:start !important; }
          .seo-hero-heading { text-align:start !important; }
          .seo-badge { align-self:flex-start !important; }
        }
        @media(max-width:480px){
          .seo-illus-wrap { height:200px !important; }
          .seo-hero-heading { font-size:clamp(2rem,7vw,3.3rem) !important; text-align:start !important; }
          .seo-sub { font-size:0.92rem; text-align:start !important; }
          .seo-btn-fill { padding:0.75rem 1.6rem; font-size:0.88rem; }
        }
      `]}),(0,r.jsx)("div",{className:"hero-orb hero-orb-1"}),(0,r.jsx)("div",{className:"hero-orb hero-orb-2"}),(0,r.jsxs)("div",{className:"hero-section-grid",children:[(0,r.jsxs)("div",{className:"hero-content-col",children:[(0,r.jsxs)("div",{className:"seo-badge",children:[(0,r.jsx)("div",{className:"badge-dot-red"}),"Odoo"]}),(0,r.jsxs)("h1",{className:"seo-hero-heading",children:["Transform Your with Business to ",(0,r.jsx)("span",{className:"seo-underline seo-red",children:"Odoo"}),"\u2014 All-in-One ERP Solution"]}),(0,r.jsx)("p",{className:"seo-sub",children:"PCS leverages Odoo to streamline and unify business operations across industries, from startups to enterprises  business operations across industries,. From accounting and inventory to HR and CRM, all processes are integrated into one system. With modular customization and automation, we tailor Odoo to match your workflows and boost efficiency."}),(0,r.jsx)("div",{className:"seo-actions",children:(0,r.jsxs)("a",{className:"seo-btn-fill",href:"#approach",children:[(0,r.jsx)("span",{children:"Get Free SEO Audit"}),(0,r.jsx)("div",{className:"seo-btn-arr",children:"\u203A"})]})})]}),(0,r.jsx)("div",{className:"hero-img-col",children:(0,r.jsx)("div",{className:"seo-illus-wrap",children:(0,r.jsx)("img",{src:"/img/odoo.png",alt:"SEO Growth Illustration",style:{width:"100%",height:"100%",objectFit:"contain",position:"relative",zIndex:5}})})})]})]})}function p(){let[e,t]=(0,a.useState)({name:"",email:"",phone:"",company:"",msg:""}),i=i=>t({...e,[i.target.name]:i.target.value});return(0,r.jsxs)("section",{id:"approach",style:{background:"#ffffff",padding:"5rem 6%",position:"relative",overflow:"hidden"},children:[(0,r.jsx)("style",{children:`
        /* eyebrow shared */
        .seo-eyebrow-wrap { display:flex; align-items:center; gap:12px; margin-bottom:12px; }
        .seo-eyebrow-line { flex:0 0 32px; height:2px; background:linear-gradient(90deg,#ed8337,transparent); border-radius:2px; }
        .seo-eyebrow-line-right { background:linear-gradient(270deg,#ed8337,transparent); }
        .seo-eyebrow-text { font-family:'Poppins',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#ed8337; }

        /* approach layout */
        .ap2-inner { position:relative; z-index:2;  margin:0 auto; display:grid; grid-template-columns:1fr 0.75fr; gap:4rem; align-items:center; }
        .ap2-heading { font-family:'Poppins',sans-serif; font-weight:600; font-size:clamp(1.9rem,2.8vw,2.6rem); line-height:1.12; color:#000; margin-bottom:1.2rem; }
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
        @media(max-width:900px){ .ap2-inner{grid-template-columns:1fr !important; gap:2rem;} .ap2-form-wrap{max-width:100% !important;} }
        @media(max-width:480px){ .ap2-fl-row{grid-template-columns:1fr !important;} .ap2-form-card{padding:2rem 1.4rem !important;} }
      `}),(0,r.jsxs)("div",{className:"ap2-inner",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"partners-header1",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Approach in"})}),(0,r.jsxs)("h2",{className:"ap2-heading",children:["What is  ",(0,r.jsxs)("span",{children:[(0,r.jsx)("i",{children:"Odoo"})," "]})]}),(0,r.jsx)("p",{className:"ap2-intro",children:"Odoo is an all-in-one, open-source business application designed to integrate and manage every aspect of organizational operations efficiently. Its modular structure allows businesses to select and customize applications according to their unique needs, creating a flexible system that supports growth, improves coordination, and simplifies complex business processes."}),(0,r.jsx)("p",{className:"ap2-intro",children:"With Odoo, organizations gain complete visibility and control over operations through automation, centralized management, and real-time data insights. This unified platform empowers teams to make smarter decisions, enhance productivity, streamline workflows, and support sustainable, long-term growth in an increasingly competitive and fast-changing business environment."}),(0,r.jsx)("p",{className:"ap2-intro",style:{color:"rgba(2,43,68,0.45)",fontStyle:"italic"},children:"Precise. Proven. Profitable. Built for long-term dominance."})]}),(0,r.jsx)("div",{className:"ap2-form-wrap",children:(0,r.jsxs)("div",{className:"ap2-form-card",children:[(0,r.jsxs)("div",{className:"ap2-form-eyebrow",children:[(0,r.jsx)("span",{className:"ap2-form-eyebrow-line"}),"Your Growth, Our Mission",(0,r.jsx)("span",{className:"ap2-form-eyebrow-line"})]}),(0,r.jsxs)("div",{className:"ap2-form-title",children:["Get Your ",(0,r.jsx)("span",{children:"Free"})," SEO Audit"]}),(0,r.jsxs)("form",{onSubmit:i=>{i.preventDefault();let r={name:e.name,email:e.email,phone:e.phone,company:e.company,message:e.msg,url:window.location.href};o.Ay.send("service_8xw6k3r","template_jarui36",r,"XWRnXi4hK2SvmRG3q").then(()=>{alert("Message Sent Successfully \u2705"),t({name:"",email:"",phone:"",company:"",msg:""})}).catch(()=>alert("Failed to send \u274C"))},children:[(0,r.jsxs)("div",{className:"ap2-fl-row",children:[(0,r.jsxs)("div",{className:"ap2-fl-group",children:[(0,r.jsx)("label",{className:"ap2-fl-label",children:"Your Name"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"ap2-fl-icon",children:"\u{1F464}"}),(0,r.jsx)("input",{className:"ap2-fl-input",type:"text",name:"name",placeholder:"Full name",value:e.name,onChange:i,required:!0})]})]}),(0,r.jsxs)("div",{className:"ap2-fl-group",children:[(0,r.jsx)("label",{className:"ap2-fl-label",children:"Company"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"ap2-fl-icon",children:"\u{1F3E2}"}),(0,r.jsx)("input",{className:"ap2-fl-input",type:"text",name:"company",placeholder:"Company name",value:e.company,onChange:i})]})]})]}),(0,r.jsxs)("div",{className:"ap2-fl-group",children:[(0,r.jsx)("label",{className:"ap2-fl-label",children:"Email Address"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"ap2-fl-icon",children:"\u2709\uFE0F"}),(0,r.jsx)("input",{className:"ap2-fl-input",type:"email",name:"email",placeholder:"your@email.com",value:e.email,onChange:i,required:!0})]})]}),(0,r.jsxs)("div",{className:"ap2-fl-group",children:[(0,r.jsx)("label",{className:"ap2-fl-label",children:"Mobile Number"}),(0,r.jsxs)("div",{className:"ap2-phone-row",children:[(0,r.jsx)("div",{className:"ap2-phone-flag",children:(0,r.jsx)("span",{children:"\u{1F4DE}"})}),(0,r.jsx)("input",{className:"ap2-fl-input",type:"tel",name:"phone",placeholder:"Mobile number",value:e.phone,onChange:i,maxLength:"10",pattern:"[0-9]{10}",required:!0})]})]}),(0,r.jsxs)("div",{className:"ap2-fl-group",children:[(0,r.jsx)("label",{className:"ap2-fl-label",children:"Message"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"ap2-fl-icon",style:{top:"0.9rem",transform:"none"},children:"\u{1F4AC}"}),(0,r.jsx)("textarea",{className:"ap2-fl-textarea",name:"msg",placeholder:"Tell us about your SEO goals...",value:e.msg,onChange:i})]})]}),(0,r.jsxs)("button",{type:"submit",className:"ap2-submit",children:["Get Free SEO Audit ",(0,r.jsx)("span",{className:"ap2-submit-arrow",children:"\u203A"})]})]})]})})]})]})}let m=[{icon:(0,r.jsx)("img",{src:"/img/icon/odoo-why-modular.webp",alt:"Modular & Scalable Platform",width:"26",height:"26"}),title:"Modular & Scalable Platform",desc:"Odoo grows with your business \u2013 start small and expand effortlessly with new modules as your needs evolve."},{icon:(0,r.jsx)("img",{src:"/img/icon/odoo-why-user.webp",alt:"User-Friendly Interface",width:"26",height:"26"}),title:"User-Friendly Interface",desc:"Intuitive dashboards and clean design ensure seamless adoption and quick onboarding for all team members."}];function g(){return(0,r.jsxs)("section",{style:{background:"#ffffff",padding:"2.5rem 6% 7rem",position:"relative",overflow:"hidden"},children:[(0,r.jsx)("style",{children:`
        .wc2-inner { max-width:1310px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:5rem; align-items:center; }
        .wc2-eyebrow { font-family:'Poppins',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#ed8337; margin-bottom:0.9rem; }
        .wc2-heading { font-family:'Poppins',sans-serif; font-size:clamp(1.8rem,2.7vw,2.39rem); font-weight:600; line-height:1.12; color:#1a1a1a; margin-bottom:1rem; }
        .wc2-desc { font-size:0.96rem; line-height:1.82; color:rgba(30,30,30,0.62); margin-bottom:2rem; }
        .wc2-features { display:flex; flex-direction:column; gap:1.6rem; }
        .wc2-feat { display:flex; gap:1rem; align-items:flex-start; }
        .wc2-feat-icon { flex-shrink:0; width:44px; height:44px; border-radius:10px; border:1.5px solid rgba(237,131,55,0.35); display:flex; align-items:center; justify-content:center; color:#ed8337; background:#fff9f5; }
        .wc2-feat-body { display:flex; flex-direction:column; }
        .wc2-feat-title { font-family:'Poppins',sans-serif; font-size:0.97rem; font-weight:700; color:#1a1a1a; margin-bottom:0.28rem; }
        .wc2-feat-desc { font-size:0.875rem; line-height:1.72; color:rgba(30,30,30,0.58); font-family:'poppins',sans-serif; }
        .wc2-divider { width:1px; background:rgba(237,131,55,0.18); align-self:stretch; margin:0.1rem 0; }

        .wc2-right { position:relative; display:flex; align-items:center; justify-content:center; }
        .wc2-img-bg { position:absolute; width:380px; height:380px; border-radius:50%; background:radial-gradient(circle,#fff5ed 0%,#fff9f4 50%,transparent 75%); }
        .wc2-img { width:86%;  object-fit:contain; position:relative; z-index:2; }

        @media(max-width:900px){
          .wc2-inner { grid-template-columns:1fr !important; gap:2.5rem !important; }
          .wc2-right { order:-1; }
          .wc2-img-bg { width:260px; height:260px; }
        }
      `}),(0,r.jsxs)("div",{className:"wc2-inner",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"partners-header1",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Why choose Odoo"})}),"          ",(0,r.jsx)("h2",{className:"wc2-heading",children:"All-in-One Platform for Smarter Business Management          "}),(0,r.jsx)("p",{className:"wc2-desc",children:"A powerful, flexible, and cost-efficient solution designed to meet the needs of businesses of every size."}),(0,r.jsx)("div",{className:"wc2-features",children:m.map((e,t)=>(0,r.jsxs)("div",{className:"wc2-feat",style:{animation:`fadeUp 0.5s ${.1*t}s ease both`},children:[(0,r.jsx)("div",{className:"wc2-feat-icon",children:e.icon}),t<m.length-1&&(0,r.jsx)("div",{className:"wc2-divider",style:{display:"none"}}),(0,r.jsxs)("div",{className:"wc2-feat-body",children:[(0,r.jsx)("div",{className:"wc2-feat-title",children:e.title}),(0,r.jsx)("div",{className:"wc2-feat-desc",children:e.desc})]})]},t))})]}),(0,r.jsxs)("div",{className:"wc2-right",children:[(0,r.jsx)("div",{className:"wc2-img-bg"}),(0,r.jsx)("img",{src:"/img/odoo.webp",alt:"Why Choose Microsoft Apps",className:"wc2-img"})]})]})]})}let h=[{icon:(0,r.jsx)("img",{src:"/img/icon/odoo-migration.webp",alt:"Data Migration",width:"32",height:"32"}),heading:"Data Migration",content:"Smooth transition from legacy systems or older Odoo versions with zero downtime.",tag:"Foundation"},{icon:(0,r.jsx)("img",{src:"/img/icon/odoo-customize.webp",alt:"Customization",width:"32",height:"32"}),heading:"Customization",content:"Tailor workflows, modules, and reports to match unique business needs.",tag:"On-Site"},{icon:(0,r.jsx)("img",{src:"/img/icon/odoo-integrate.webp",alt:"Integration",width:"32",height:"32"}),heading:"Integration",content:"Connect Odoo with third-party software for a seamless data ecosystem.",tag:"Infrastructure"},{icon:(0,r.jsx)("img",{src:"/img/icon/odoo-implementation.webp",alt:"Implementation",width:"32",height:"32"}),heading:"Implementation",content:"End-to-end deployment customized to your business operations.",tag:"Authority"},{icon:(0,r.jsx)("img",{src:"/img/icon/odoo-training.webp",alt:"Training & Consultation",width:"32",height:"32"}),heading:"Training & Consultation",content:"Equip your team with the knowledge to maximize Odoo\u2019s full potential.",tag:"Local"},{icon:(0,r.jsx)("img",{src:"/img/icon/odoo-support.webp",alt:"Support & Maintenance",width:"32",height:"32"}),heading:"Support & Maintenance",content:"Continuous monitoring, updates, and optimization for uninterrupted operations.",tag:"Reporting"}];function f({service:e,index:t}){let[i,o]=(0,a.useState)(!1);return(0,r.jsxs)("div",{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{position:"relative",background:i?"#ffffff":"#0d3f60",border:i?"2px solid #ed8337":"2px solid rgba(237,131,55,0.18)",borderRadius:"18px",padding:"0",overflow:"visible",cursor:"pointer",transition:"background 0.35s, border-color 0.35s, transform 0.3s, box-shadow 0.35s",transform:i?"translateY(-8px)":"translateY(0)",boxShadow:i?"0 20px 60px rgba(237,131,55,0.18), 0 4px 24px rgba(2,43,68,0.12)":"0 4px 24px rgba(0,0,0,0.3)",minHeight:"220px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingTop:i?"64px":"0",paddingBottom:"2rem",paddingLeft:"1.8rem",paddingRight:"1.8rem",animation:`fadeUp 0.6s ${.1*t}s ease both`},children:[(0,r.jsx)("div",{style:{position:i?"absolute":"relative",top:i?"-28px":"auto",left:i?"50%":"auto",transform:i?"translateX(-50%)":"none",width:"56px",height:"56px",borderRadius:"14px",background:"linear-gradient(135deg,#ed8337,#f5a66b)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:i?"0 8px 28px rgba(237,131,55,0.45)":"0 4px 18px rgba(237,131,55,0.3)",color:"#fff",flexShrink:0,marginBottom:i?"0":"1.2rem",transition:"all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",zIndex:10},children:(0,r.jsx)("div",{style:{width:"32px",height:"32px"},children:e.icon})}),i&&(0,r.jsx)("div",{style:{background:"rgba(237,131,55,0.1)",color:"#ed8337",fontSize:"0.6rem",fontWeight:"700",letterSpacing:"0.18em",textTransform:"uppercase",padding:"0.25rem 0.8rem",borderRadius:"50px",marginBottom:"0.8rem",fontFamily:"'Poppins',sans-serif",border:"1px solid rgba(237,131,55,0.25)",animation:"fadeIn 0.25s ease"},children:e.tag}),(0,r.jsx)("h3",{style:{fontFamily:"'Poppins',sans-serif",fontSize:"1.1rem",fontWeight:"700",color:i?"#ed8337":"#fff",textAlign:"center",marginBottom:i?"0.8rem":"0",transition:"color 0.3s, margin 0.3s"},children:e.heading}),(0,r.jsx)("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:"0.88rem",lineHeight:"1.7",color:"rgba(2,43,68,0.7)",textAlign:"center",maxHeight:i?"200px":"0",overflow:"hidden",opacity:+!!i,transition:"max-height 0.4s ease, opacity 0.35s ease 0.05s"},children:e.content})]})}function x(){return(0,r.jsxs)("section",{style:{background:"linear-gradient(180deg,#004168 0%,#0a3652 100%)",padding:"5rem 6% 6rem",position:"relative",overflow:"hidden"},children:[(0,r.jsx)("style",{children:`
        .seo-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        @media(max-width:900px){ .seo-services-grid{ grid-template-columns:1fr 1fr !important; } }
        @media(max-width:600px){ .seo-services-grid{ grid-template-columns:1fr !important; } }
      `}),(0,r.jsx)("div",{style:{position:"absolute",width:"500px",height:"500px",borderRadius:"50%",background:"radial-gradient(circle,rgba(237,131,55,0.04) 0%,transparent 70%)",top:"-100px",right:"-100px",pointerEvents:"none"}}),(0,r.jsx)("div",{style:{position:"absolute",width:"400px",height:"400px",borderRadius:"50%",background:"radial-gradient(circle,rgba(17,34,64,0.6) 0%,transparent 70%)",bottom:"-80px",left:"-80px",pointerEvents:"none"}}),(0,r.jsxs)("div",{style:{textAlign:"center",marginBottom:"4rem",position:"relative",zIndex:2},children:[(0,r.jsx)("div",{className:"partners-header1",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Services"})}),(0,r.jsxs)("h2",{style:{fontFamily:"'Poppins',sans-serif",fontSize:"clamp(1.9rem,2.8vw,2.6rem)",fontWeight:"700",color:"#fff",lineHeight:"1.15"},children:["Complete Odoo ERP ",(0,r.jsx)("span",{style:{color:"#ed8337"},children:(0,r.jsx)("i",{children:"Implementation & Support"})})]})]}),(0,r.jsx)("div",{className:"seo-services-grid",style:{position:"relative",zIndex:2},children:h.map((e,t)=>(0,r.jsx)(f,{service:e,index:t},t))})]})}let u=[{num:"01",icon:(0,r.jsx)("img",{src:"/img/icon/odoo-proc-discovery.webp",alt:"Discovery & Analysis",width:"28",height:"28"}),title:"Discovery & Analysis",desc:"We begin by conducting an in-depth assessment of your business workflows, challenges, and software requirements. This stage helps us understand your operational structure, identify automation opportunities, and define the right Odoo modules to meet your strategic objectives."},{num:"02",icon:(0,r.jsx)("img",{src:"/img/icon/odoo-proc-planning.webp",alt:"Planning & Design",width:"28",height:"28"}),title:"Planning & Design",desc:"Our team creates a detailed implementation roadmap, mapping every workflow and designing module structures that align with your business goals. This stage ensures a smooth transition, efficient resource allocation, and a framework for scalable system."},{num:"03",icon:(0,r.jsx)("img",{src:"/img/icon/odoo-proc-development.webp",alt:"Customization & Development",width:"28",height:"28"}),title:"Customization & Development",desc:"We configure Odoo modules, automate processes, and develop custom features to match your organization\u2019s unique operations. Every customization is carefully tested and optimized to deliver flexibility, performance, and complete business alignment."},{num:"04",icon:(0,r.jsx)("img",{src:"/img/icon/odoo-proc-testing.webp",alt:"Testing & Deployment",width:"28",height:"28"}),title:"Testing & Deployment",desc:"Before launch, our experts conduct comprehensive testing to validate every integration, feature, and user flow. We ensure the apllication performs seamlessly in real-world environments, followed by a structured deployment that minimizes downtime and disruption."},{num:"05",icon:(0,r.jsx)("img",{src:"/img/icon/odoo-proc-training.webp",alt:"Training & Support",width:"28",height:"28"}),title:"Training & Support",desc:"Once deployed, we provide hands-on training and continuous post-launch support to empower your team. Our experts ensure your system remains optimized, updated, and aligned with your evolving business needs."},{num:"06",icon:(0,r.jsx)("img",{src:"/img/icon/odoo-proc-launch.webp",alt:"Launch & Post-Launch Support",width:"28",height:"28"}),title:"Launch & Post-Launch Support",desc:"After approval, we deploy your WooCommerce website with monitoring, updates, troubleshooting support, security maintenance, and performance tracking for growth."}];function b(){let[e,t]=(0,a.useState)(0),[i,o]=(0,a.useState)(0),n=u[e];return(0,r.jsxs)("section",{style:{background:"#ffffff",padding:"5rem 6%",position:"relative",overflow:"hidden"},children:[(0,r.jsx)("style",{children:`
        /* \u{2500}\u{2500} Vertical Tab Layout (Desktop) \u{2500}\u{2500} */
        .proc-outer { max-width:1180px; margin:0 auto; display:grid; grid-template-columns:260px 1fr; gap:0; align-items:stretch; border-radius:20px; overflow:hidden; box-shadow:0 12px 50px rgba(2,43,68,0.10); border:1.5px solid rgba(2,43,68,0.07); }

        .proc-vtab-col { background:#f4f6fa; display:flex; flex-direction:column; border-right:1.5px solid rgba(2,43,68,0.07); }
        .proc-vtab-header { padding:1.8rem 1.6rem 1.2rem; border-bottom:1.5px solid rgba(2,43,68,0.07); }
        .proc-vtab-label { font-family:'Poppins',sans-serif; font-size:0.6rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#ed8337; margin-bottom:0.3rem; }
        .proc-vtab-title { font-family:'Poppins',sans-serif; font-size:1rem; font-weight:700; color:#004168; line-height:1.25; }

        .proc-vtab-item { position:relative; display:flex; align-items:center; gap:0.85rem; padding:1.1rem 1.6rem; cursor:pointer; border:none; background:transparent; text-align:left; width:100%; transition:all 0.22s; border-bottom:1px solid rgba(2,43,68,0.06); }
        .proc-vtab-item:last-child { border-bottom:none; }
        .proc-vtab-item.active { background:#004168; }
        .proc-vtab-item:hover:not(.active) { background:rgba(2,43,68,0.05); }
        .proc-vtab-item.active::after { content:''; position:absolute; right:-12px; top:50%; transform:translateY(-50%); width:0; height:0; border-top:12px solid transparent; border-bottom:12px solid transparent; border-left:12px solid #004168; z-index:10; }

        .proc-vtab-icon-wrap { width:42px; height:42px; border-radius:10px; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:all 0.22s; }
        .proc-vtab-item.active .proc-vtab-icon-wrap { background:rgba(237,131,55,0.18); }
        .proc-vtab-item:not(.active) .proc-vtab-icon-wrap { background:rgba(2,43,68,0.07); }
        .proc-vtab-num { font-family:'Poppins',sans-serif; font-size:0.6rem; font-weight:700; letter-spacing:0.1em; transition:color 0.22s; }
        .proc-vtab-item.active .proc-vtab-num { color:rgba(255,255,255,0.4); }
        .proc-vtab-item:not(.active) .proc-vtab-num { color:rgba(2,43,68,0.3); }
        .proc-vtab-name { font-family:'Poppins',sans-serif; font-size:0.82rem; font-weight:600; line-height:1.3; transition:color 0.22s; }
        .proc-vtab-item.active .proc-vtab-name { color:#ffffff; }
        .proc-vtab-item:not(.active) .proc-vtab-name { color:#004168; }

        .proc-content-panel { background:#ffffff; display:grid; grid-template-columns:1fr; align-items:center; gap:3.5rem; padding:3.5rem 3.5rem; }
        .proc-big-num { font-family:'Poppins',sans-serif; font-size:6rem; font-weight:900; color:rgba(2,43,68,0.04); line-height:1; margin-bottom:-1.5rem; }
        .proc-content-title { font-family:'Poppins',sans-serif; font-size:clamp(1.5rem,2.2vw,2rem); font-weight:700; color:#004168; line-height:1.2; margin-bottom:0.9rem; }
        .proc-content-title em { color:#ed8337; font-style:normal; }
        .proc-content-desc { font-size:0.97rem; line-height:1.85; color:rgba(2,43,68,0.62); margin-bottom:1.8rem; }
        .proc-content-tag { display:inline-flex; align-items:center; gap:0.5rem; background:#fff5f5; border:1.5px solid rgba(237,131,55,0.2); color:#ed8337; font-family:'Poppins',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; padding:0.38rem 0.9rem; border-radius:50px; }
        .proc-content-dot { width:6px; height:6px; border-radius:50%; background:#ed8337; }

        /* \u{2500}\u{2500} Mobile Accordion \u{2500}\u{2500} */
        .proc-mobile-accordion { display:none; max-width:1180px; margin:0 auto; display:none; flex-direction:column; gap:0.75rem; }

        .proc-acc-card { border-radius:14px; overflow:hidden; border:1.5px solid rgba(2,43,68,0.09); box-shadow:0 4px 20px rgba(2,43,68,0.06); transition:box-shadow 0.22s; }
        .proc-acc-card.open { box-shadow:0 8px 32px rgba(2,43,68,0.13); border-color:rgba(237,131,55,0.35); }

        .proc-acc-header { display:flex; align-items:center; gap:1rem; padding:1.1rem 1.4rem; cursor:pointer; background:#f4f6fa; transition:background 0.22s; border:none; width:100%; text-align:left; }
        .proc-acc-card.open .proc-acc-header { background:#004168; }

        .proc-acc-icon-wrap { width:40px; height:40px; border-radius:10px; display:flex; align-items:center; justify-content:center; flex-shrink:0; background:rgba(2,43,68,0.07); transition:all 0.22s; }
        .proc-acc-card.open .proc-acc-icon-wrap { background:rgba(237,131,55,0.18); }

        .proc-acc-meta { flex:1; }
        .proc-acc-num { font-family:'Poppins',sans-serif; font-size:0.58rem; font-weight:700; letter-spacing:0.1em; color:rgba(2,43,68,0.3); }
        .proc-acc-card.open .proc-acc-num { color:rgba(255,255,255,0.4); }
        .proc-acc-title { font-family:'Poppins',sans-serif; font-size:0.88rem; font-weight:600; color:#004168; line-height:1.3; }
        .proc-acc-card.open .proc-acc-title { color:#ffffff; }

        .proc-acc-chevron { width:28px; height:28px; border-radius:50%; background:rgba(2,43,68,0.07); display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:transform 0.3s, background 0.22s; font-size:0.85rem; color:#004168; }
        .proc-acc-card.open .proc-acc-chevron { transform:rotate(180deg); background:rgba(237,131,55,0.2); color:#ed8337; }

        .proc-acc-body { background:#ffffff; overflow:hidden; max-height:0; transition:max-height 0.4s ease, padding 0.3s ease; padding:0 1.4rem; }
        .proc-acc-card.open .proc-acc-body { max-height:300px; padding:1.4rem; }

        .proc-acc-body-num { font-family:'Poppins',sans-serif; font-size:3.5rem; font-weight:900; color:rgba(2,43,68,0.04); line-height:1; margin-bottom:-0.6rem; }
        .proc-acc-body-desc { font-size:0.92rem; line-height:1.82; color:rgba(2,43,68,0.65); margin-bottom:1rem; }
        .proc-acc-body-tag { display:inline-flex; align-items:center; gap:0.45rem; background:#fff5f5; border:1.5px solid rgba(237,131,55,0.2); color:#ed8337; font-family:'Poppins',sans-serif; font-size:0.6rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; padding:0.32rem 0.8rem; border-radius:50px; }
        .proc-acc-dot { width:5px; height:5px; border-radius:50%; background:#ed8337; }

        /* Show/hide based on viewport */
        @media(min-width:961px){
          .proc-outer { display:grid !important; }
          .proc-mobile-accordion { display:none !important; }
        }
        @media(max-width:960px){
          .proc-outer { display:none !important; }
          .proc-mobile-accordion { display:flex !important; }
        }
      `}),(0,r.jsxs)("div",{style:{textAlign:"center",marginBottom:"3.5rem"},children:[(0,r.jsx)("div",{className:"partners-header1",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Process"})}),(0,r.jsxs)("h2",{style:{fontFamily:"'Poppins',sans-serif",fontSize:"clamp(1.9rem,2.8vw,2.6rem)",fontWeight:"700",color:"#000000",lineHeight:"1.15"},children:["Streamlined Approach for  ",(0,r.jsxs)("span",{style:{color:"#ed8337"},children:[(0,r.jsx)("i",{children:"Odoo "})," "]}),"  Implementation"]}),(0,r.jsx)("p",{style:{marginTop:"0.8rem",color:"rgba(0, 0, 0, 0.86)",fontSize:"0.97rem",margin:"0.8rem auto 0",lineHeight:"1.8"},children:"Our Odoo Implementation Process ensures every phase \u2014 from assessment to deployment \u2014 is handled with precision, transparency, and efficiency."})]}),(0,r.jsxs)("div",{className:"proc-outer",children:[(0,r.jsx)("div",{className:"proc-vtab-col",children:u.map((i,a)=>(0,r.jsxs)("button",{className:`proc-vtab-item${e===a?" active":""}`,onClick:()=>t(a),children:[(0,r.jsx)("div",{className:"proc-vtab-icon-wrap",children:i.icon}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"proc-vtab-num",children:i.num}),(0,r.jsx)("div",{className:"proc-vtab-name",children:i.title})]})]},a))}),(0,r.jsx)("div",{className:"proc-content-panel",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"proc-big-num",children:n.num}),(0,r.jsxs)("h3",{className:"proc-content-title",children:[n.title.split(" ").slice(0,1).join(" ")," ",(0,r.jsx)("em",{children:n.title.split(" ").slice(1).join(" ")})]}),(0,r.jsx)("p",{className:"proc-content-desc",children:n.desc}),(0,r.jsxs)("div",{className:"proc-content-tag",children:[(0,r.jsx)("div",{className:"proc-content-dot"}),"Step ",n.num]})]})})]}),(0,r.jsx)("div",{className:"proc-mobile-accordion",children:u.map((e,t)=>(0,r.jsxs)("div",{className:`proc-acc-card${i===t?" open":""}`,children:[(0,r.jsxs)("button",{className:"proc-acc-header",onClick:()=>o(i===t?-1:t),children:[(0,r.jsx)("div",{className:"proc-acc-icon-wrap",children:e.icon}),(0,r.jsxs)("div",{className:"proc-acc-meta",children:[(0,r.jsx)("div",{className:"proc-acc-num",children:e.num}),(0,r.jsx)("div",{className:"proc-acc-title",children:e.title})]}),(0,r.jsx)("div",{className:"proc-acc-chevron",children:"\u25BC"})]}),(0,r.jsxs)("div",{className:"proc-acc-body",children:[(0,r.jsx)("div",{className:"proc-acc-body-num",children:e.num}),(0,r.jsx)("p",{className:"proc-acc-body-desc",children:e.desc}),(0,r.jsxs)("div",{className:"proc-acc-body-tag",children:[(0,r.jsx)("div",{className:"proc-acc-dot"}),"Step ",e.num]})]})]},t))})]})}let y=[{num:"01",icon:(0,r.jsx)("img",{src:"/img/icon/odoo-gs-certified.webp",alt:"Certified Odoo Experts",width:"24",height:"24"}),title:"Certified Odoo Experts",desc:"Skilled professionals with proven experience in Odoo software implementation and support."},{num:"02",icon:(0,r.jsx)("img",{src:"/img/icon/odoo-gs-tailored.webp",alt:"Tailored Business Solutions",width:"24",height:"24"}),title:"Tailored Business Solutions",desc:"Custom workflows and modules designed to fit your specific industry and goals."},{num:"03",icon:(0,r.jsx)("img",{src:"/img/icon/odoo-gs-future.webp",alt:"Future-Ready Systems",width:"24",height:"24"}),title:"Future-Ready Systems",desc:"Scalable, upgradable, and flexible Odoo solutions that grow with your business."},{num:"04",icon:(0,r.jsx)("img",{src:"/img/icon/odoo-gs-support.webp",alt:"Comprehensive Support",width:"24",height:"24"}),title:"Comprehensive Support",desc:"From setup to optimization, we ensure your system runs smoothly and efficiently."}];function w(){let[e,t]=(0,a.useState)(1);return(0,r.jsxs)("section",{style:{background:"linear-gradient(135deg,#022b44 0%,#004168 55%,#0a3652 100%)",padding:"6rem 6%",position:"relative",overflow:"hidden"},children:[(0,r.jsx)("div",{style:{position:"absolute",width:"600px",height:"600px",borderRadius:"50%",background:"radial-gradient(circle,rgba(237,131,55,0.06) 0%,transparent 65%)",top:"-150px",right:"-100px",pointerEvents:"none"}}),(0,r.jsx)("div",{style:{position:"absolute",width:"400px",height:"400px",borderRadius:"50%",background:"radial-gradient(circle,rgba(237,131,55,0.04) 0%,transparent 65%)",bottom:"-100px",left:"-80px",pointerEvents:"none"}}),(0,r.jsx)("style",{children:`
        /* \u{2500}\u{2500} Get Started Section \u{2500}\u{2500} */
        .gs2-eyebrow { font-family:'Poppins',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#ed8337; text-align:center; margin-bottom:1.1rem; }

        .gs2-main-title { font-family:'Poppins',sans-serif; font-size:clamp(2.4rem,4.5vw,3rem); font-weight:600; color:#ffffff; text-align:center; line-height:1.08; margin-bottom:1.2rem; }
        .gs2-title-accent { color:#ed8337;  text-decoration-color:#ed8337; }

        .gs2-sub { font-size:0.97rem; line-height:1.8; color:rgb(255, 255, 255); text-align:center;  margin:0 auto 3.5rem; }

        /* Unified card container */
        .gs2-cards-wrap { max-width:1180px; margin:0 auto; display:grid; grid-template-columns:repeat(4,1fr); border:1.5px solid rgba(237,131,55,0.3); border-radius:20px; overflow:hidden; box-shadow:0 8px 50px rgba(0,0,0,0.25); position:relative; z-index:2; }

        /* Each card \u{2014} white bg */
        .gs2-card { position:relative; padding:2.4rem 2rem 2.2rem; background:#ffffff; border-right:1.5px solid rgba(237,131,55,0.2); transition:background 0.25s, box-shadow 0.25s; cursor:pointer; }
        .gs2-card:last-child { border-right:none; }
        .gs2-card.gs2-active { background:#fff9f4; }

        /* Top active indicator bar \u{2014} orange */
        .gs2-card-bar { position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg,#ed8337,#f5a66b); transform:scaleX(0); transform-origin:left; transition:transform 0.3s ease; }
        .gs2-card.gs2-active .gs2-card-bar { transform:scaleX(1); }

        /* Ghost number \u{2014} faint navy */
        .gs2-card-num { font-family:'Poppins',sans-serif; font-size:3.5rem; font-weight:900; color:rgba(2,43,68,0.06); line-height:1; position:absolute; top:1.2rem; right:1.4rem; user-select:none; }

        /* Icon box */
        .gs2-icon-box { width:48px; height:48px; border-radius:12px; background:#f5f7fa; border:1.5px solid rgba(237,131,55,0.2); display:flex; align-items:center; justify-content:center; margin-bottom:1.4rem; color:rgba(2,43,68,0.45); transition:all 0.25s; }
        .gs2-card.gs2-active .gs2-icon-box { background:linear-gradient(135deg, #ed833700, #f5a66b00) border-color:#ed8337; color:#ffffff; box-shadow:0 4px 16px rgba(237,131,55,0.35); }

        /* Title */
        .gs2-card-title { font-family:'Poppins',sans-serif; font-size:0.97rem; font-weight:700; color:#004168; margin-bottom:0.75rem; line-height:1.3; }
        .gs2-card.gs2-active .gs2-card-title { color:#ed8337; }

        /* Desc */
        .gs2-card-desc { font-size:0.85rem; line-height:1.72; color:rgb(0, 0, 0); font-family: 'poppins',sans-serif; }

        @media(max-width:960px){ .gs2-cards-wrap{ grid-template-columns:1fr 1fr !important; } .gs2-card{ border-bottom:1.5px solid rgba(237,131,55,0.15); } .gs2-card:nth-child(even){ border-right:none; } }
        @media(max-width:540px){ .gs2-cards-wrap{ grid-template-columns:1fr !important; } .gs2-card{ border-right:none; } }
      `}),(0,r.jsxs)("div",{style:{position:"relative",zIndex:2},children:[(0,r.jsx)("div",{className:"partners-header1",style:{textAlign:"center"},children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px"},children:"Odoo Partner"})}),"      ",(0,r.jsxs)("h2",{className:"gs2-main-title",children:["Why PCS for ",(0,r.jsx)("span",{className:"gs2-title-accent",children:(0,r.jsx)("i",{children:"Odoo "})})," Partner"]}),(0,r.jsx)("p",{className:"gs2-sub",children:"As a trusted Odoo Partner, PCS delivers industry-specific, results-driven ERP solutions that streamline operations and accelerate digital transformation."})]}),(0,r.jsx)("div",{className:"gs2-cards-wrap",children:y.map((i,a)=>(0,r.jsxs)("div",{className:`gs2-card${e===a?" gs2-active":""}`,onMouseEnter:()=>t(a),children:[(0,r.jsx)("div",{className:"gs2-card-bar"}),(0,r.jsx)("div",{className:"gs2-card-num",children:i.num}),(0,r.jsx)("div",{className:"gs2-icon-box",children:i.icon}),(0,r.jsx)("div",{className:"gs2-card-title",children:i.title}),(0,r.jsx)("div",{className:"gs2-card-desc",children:i.desc})]},a))})]})}function v(){return(0,r.jsx)("div",{children:(0,r.jsx)(s.A,{})})}function j(){return(0,r.jsxs)(l.A,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(p,{}),(0,r.jsx)(g,{}),(0,r.jsx)(x,{}),(0,r.jsx)(b,{}),(0,r.jsx)(w,{}),(0,r.jsx)(v,{}),(0,r.jsx)(n.A,{})]})}}}]);