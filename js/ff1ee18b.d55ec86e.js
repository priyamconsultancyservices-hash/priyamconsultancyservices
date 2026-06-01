"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["6882"],{3177(e,t,a){a.d(t,{A:()=>s});var i=a(4848),r=a(6540);let n=`https://corsproxy.io/?${encodeURIComponent("https://www.priyamconsultancy.com/blog/feed/")}`;function s(){let[e,t]=(0,r.useState)([]),[a,s]=(0,r.useState)(!0),[o,l]=(0,r.useState)(null);return(0,r.useEffect)(()=>{fetch(n).then(e=>{if(!e.ok)throw Error(`HTTP ${e.status}`);return e.text()}).then(e=>{t(Array.from(new DOMParser().parseFromString(e,"text/xml").querySelectorAll("item")).slice(0,3).map(e=>{let t=e.querySelector("enclosure"),a=e.getElementsByTagNameNS("http://search.yahoo.com/mrss/","content")[0],i=e.getElementsByTagNameNS("http://search.yahoo.com/mrss/","thumbnail")[0],r=e.getElementsByTagNameNS("http://purl.org/rss/1.0/modules/content/","encoded")[0],n=r?.textContent||"",s=n.match(/<img[^>]+src=["']([^"']+)["']/i),o=e.querySelector("description")?.textContent||"",l=o.match(/<img[^>]+src=["']([^"']+)["']/i),d=t?.getAttribute("url")||a?.getAttribute("url")||i?.getAttribute("url")||s?.[1]||l?.[1]||null,c=(n||o).replace(/<[^>]*>/g,"").replace(/&[^;]+;/g," ").trim(),m=c.length>340?c.slice(0,340)+"...":c,p=e.getElementsByTagName("link")[0],h=p?.textContent?.trim()||e.querySelector("guid")?.textContent||"#";return{guid:e.querySelector("guid")?.textContent||Math.random().toString(),title:e.querySelector("title")?.textContent?.trim()||"Untitled",link:h,thumbnail:d,excerpt:m}})),s(!1)}).catch(e=>{l(e.message),s(!1)})},[]),(0,i.jsxs)("section",{style:{width:"100%",padding:"4rem 1rem",boxSizing:"border-box",background:"#fff"},children:[(0,i.jsxs)("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[(0,i.jsxs)("div",{style:{textAlign:"center",marginBottom:"2.5rem"},children:[(0,i.jsx)("h2",{style:{fontSize:"2rem",fontWeight:700,margin:"0 0 0.5rem",color:"#111"},children:"Blogs"}),(0,i.jsx)("p",{style:{color:"#666",margin:0,fontSize:"1rem"},children:"Stay updated with the latest in digital marketing, growth strategies, and industry trends."})]}),a&&(0,i.jsx)("p",{style:{textAlign:"center",color:"#888"},children:"Loading..."}),o&&(0,i.jsxs)("p",{style:{textAlign:"center",color:"red"},children:["Error: ",o]}),(0,i.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1.5rem"},className:"blog-grid",children:e.map(e=>(0,i.jsxs)("a",{href:e.link,target:"_blank",rel:"noreferrer",style:{border:"1px solid #e5e7eb",borderRadius:"12px",overflow:"hidden",background:"#fff",display:"flex",flexDirection:"column",textDecoration:"none",color:"inherit",transition:"box-shadow 0.2s, transform 0.2s",cursor:"pointer"},onMouseEnter:e=>{e.currentTarget.style.boxShadow="0 8px 24px rgba(0,0,0,0.12)",e.currentTarget.style.transform="translateY(-3px)"},onMouseLeave:e=>{e.currentTarget.style.boxShadow="none",e.currentTarget.style.transform="translateY(0)"},children:[(0,i.jsx)("div",{style:{width:"100%",aspectRatio:"16/9",overflow:"hidden",background:"#1a2744"},children:e.thumbnail?(0,i.jsx)("img",{src:e.thumbnail,alt:e.title,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):(0,i.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",opacity:.4,fontSize:"0.8rem"},children:"No image"})}),(0,i.jsxs)("div",{style:{padding:"1.25rem",display:"flex",flexDirection:"column",gap:"0.75rem"},children:[(0,i.jsx)("p",{style:{fontWeight:600,fontSize:"1.1rem",lineHeight:1.6,margin:0,color:"#111"},children:e.title}),(0,i.jsx)("p",{style:{color:"#444",fontSize:"0.875rem",lineHeight:1.6,flex:1,margin:0},children:e.excerpt}),(0,i.jsx)("span",{style:{display:"inline-block",background:"#E87C30",color:"#fff",padding:"0.6rem 1.5rem",borderRadius:"999px",fontWeight:500,alignSelf:"flex-start",marginTop:"0.5rem",fontSize:"0.875rem"},children:"Read More"})]})]},e.guid))})]}),(0,i.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        @media (max-width: 1024px) { .blog-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px)  { .blog-grid { grid-template-columns: 1fr !important; } }
      `}})]})}},9393(e,t,a){a.d(t,{A:()=>n});var i=a(4848),r=a(6540);let n=function(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=e.current;if(!t)return;let a=t.getContext("2d"),i="#ed8337",r,n,s=[],o;function l(){r=t.width=t.parentElement.offsetWidth,n=t.height=t.parentElement.offsetHeight}function d(){this.reset()}d.prototype.reset=function(){this.x=Math.random()*r,this.y=Math.random()*n,this.r=2.2*Math.random()+.6,this.type=.55>Math.random()?"dot":.5>Math.random()?"ring":"plus",this.speed=.35*Math.random()+.08,this.dir=Math.random()*Math.PI*2,this.alpha=.45*Math.random()+.1,this.pulse=Math.random()*Math.PI*2,this.pulseSpeed=.018*Math.random()+.008,this.size=4*Math.random()+2},d.prototype.update=function(){this.x+=Math.cos(this.dir)*this.speed,this.y+=Math.sin(this.dir)*this.speed,this.pulse+=this.pulseSpeed,this.dir+=(Math.random()-.5)*.015,this.x<-20&&(this.x=r+20),this.x>r+20&&(this.x=-20),this.y<-20&&(this.y=n+20),this.y>n+20&&(this.y=-20)},d.prototype.draw=function(){let e=this.alpha*(.7+.3*Math.sin(this.pulse));if(a.save(),a.globalAlpha=e,a.strokeStyle=a.fillStyle=i,a.lineWidth=1,"dot"===this.type)a.beginPath(),a.arc(this.x,this.y,this.r+.4*Math.sin(this.pulse),0,2*Math.PI),a.fill();else if("ring"===this.type){let e=this.size*(.9+.15*Math.sin(this.pulse));a.beginPath(),a.arc(this.x,this.y,e,0,2*Math.PI),a.stroke()}else{let e=this.size*(.9+.1*Math.sin(this.pulse));a.beginPath(),a.moveTo(this.x-e,this.y),a.lineTo(this.x+e,this.y),a.moveTo(this.x,this.y-e),a.lineTo(this.x,this.y+e),a.stroke()}a.restore()},window.addEventListener("resize",l),l(),s=[];let c=Math.floor(r*n/9e3);for(let e=0;e<Math.max(c,28);e++)s.push(new d);return!function e(){a.clearRect(0,0,r,n),function(){let e=s.filter(e=>"dot"===e.type);for(let t=0;t<e.length;t++)for(let r=t+1;r<e.length;r++){let n=e[t].x-e[r].x,s=e[t].y-e[r].y,o=Math.sqrt(n*n+s*s);o<110&&(a.save(),a.globalAlpha=(1-o/110)*.12,a.strokeStyle=i,a.lineWidth=.7,a.beginPath(),a.moveTo(e[t].x,e[t].y),a.lineTo(e[r].x,e[r].y),a.stroke(),a.restore())}}(),s.forEach(e=>{e.update(),e.draw()}),o=requestAnimationFrame(e)}(),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",l)}},[]),(0,i.jsx)("section",{id:"cta-final",children:(0,i.jsxs)("div",{className:"cta-banner",style:{"--glow-x":"50%","--glow-y":"50%"},children:[(0,i.jsx)("canvas",{id:"ctaCanvas",ref:e}),(0,i.jsxs)("div",{className:"cta-banner-left",children:[(0,i.jsx)("div",{className:"partners-header",children:(0,i.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Ready to Start?"})}),(0,i.jsxs)("h2",{className:"cta-banner-heading",children:["Let's Talk About Your",(0,i.jsx)("br",{}),"Next Big ",(0,i.jsx)("span",{className:"hl-italic",children:"Growth Move"})]}),(0,i.jsx)("p",{className:"cta-banner-sub",children:"No pressure. Just a quick conversation to understand where you are-and how we can help you move forward."})]}),(0,i.jsxs)("div",{className:"cta-banner-right",children:[(0,i.jsxs)("a",{href:"#",className:"cta-bprimary",children:["Book a Free Consultation",(0,i.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",children:(0,i.jsx)("path",{d:"M3 8h10M9 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,i.jsx)("a",{href:"#",className:"cta-bghost",children:"View All Services"})]})]})})}},5288(e,t,a){a.r(t),a.d(t,{default:()=>h});var i=a(4848),r=a(6540),n=a(8128),s=a(9393),o=a(3177),l=a(1085);let d=[{img:"/img/icon/dt-business-process-automation.webp",tag:"Automate",color:"#ed8337",title:"Business Process Automation",desc:"Streamline workflows, reduce manual tasks, and improve efficiency using intelligent automation solutions tailored to your business operations and long-term growth.",points:["Streamlining","Automation","Efficiency","Optimization"]},{img:"/img/icon/dt-custom-web-mobile-apps.webp",tag:"Build",color:"#ed8337",title:"Custom Web & Mobile Applications",desc:"Design and deploy user-focused applications built for your unique business requirements. From development to integration, we ensure functionality, scalability, and a superior user experience.",points:["Scalability","Security","Integration","Experience"]},{img:"/img/icon/dt-data-analytics.webp",tag:"Analyse",color:"#ed8337",title:"Data Analytics",desc:"Transform raw data into actionable insights that enable smarter decisions, uncover opportunities, and optimize performance across all areas of your business.",points:["Insights","Forecasting","Tracking","Intelligence"]}],c=[{num:"01",img:"/img/icon/dt-assessment-strategy.webp",color:"#ed8337",title:"Assessment & Strategy Design",shortDesc:"We assess existing workflows, systems, and business operations to identify gaps and create customized digital transformation strategies aligned with organizational goals and growth plans.",fullDesc:"Based on our analysis, we design a digital transformation strategy that aligns with your business objectives, operational needs, and growth vision. Every recommendation is customized to maximize ROI and operational efficiency. "},{num:"02",img:"/img/icon/dt-solution-design.webp",color:"#0171a4",title:"Solution Design",shortDesc:"We design scalable applications, automation tools, and integrated digital solutions focused on improving efficiency, user experience, and operational productivity across business functions.",fullDesc:"Our focus is on creating solutions that are intuitive, responsive, and engaging. From UI/UX design to backend architecture, we ensure that your team and customers enjoy a seamless digital experience."},{num:"03",img:"/img/icon/dt-implementation.webp",color:"#27ae60",title:"Implementation",shortDesc:"Our team manages seamless deployment, system integration, data migration, testing, and training to ensure smooth digital transformation with minimal operational disruption.",fullDesc:"The PCS team works closely with stakeholders to minimize disruption and ensure a smooth transition. Training, documentation, and testing are built into every step, ensuring teams quickly adapt and start realizing the benefits of digital transformation."},{num:"04",img:"/img/icon/dt-monitoring-analytics.webp",color:"#9b59b6",title:"Monitoring, Analytics & Continuous Improvement",shortDesc:"We track performance through analytics, optimize digital systems continuously, and provide ongoing support to maintain scalability, efficiency, and long-term business adaptability.",fullDesc:"Insights from analytics are used to refine processes, applications, and workflows. We continuously optimize digital systems to ensure they evolve with business growth and changing market demands."}],m=[{q:"What does a digital transformation agency do?",a:"A digital transformation agency helps businesses adopt digital tools, automate workflows, and modernize operations to improve efficiency, scalability, and customer experience."},{q:"What is a digital transformation agency?",a:"It\u2019s a consulting and implementation partner that guides organizations through strategy, technology adoption, and process optimization for end-to-end digital growth."},{q:"What services are covered by a standard package for digital transformation?",a:"Typical services include strategy consulting, automation, data analytics, cloud adoption, digital marketing, and integration of advanced technologies like AI and RPA."},{q:"Which company is going through digital transformation?",a:"Many global companies like Amazon, Netflix, and Tesla continually evolve through digital transformation to enhance operations, data-driven decisions, and customer engagement"},{q:"What does \u201CDigital Transformation\u201D actually mean for businesses?",a:"Digital transformation means reimagining how a business operates, delivers value, and interacts with customers through innovative digital technologies and data-driven strategies."},{q:"How can I determine whether my company is prepared for digital transformation?",a:"Assess your current technology, workflows, team adaptability, and leadership commitment to identify readiness and areas that need improvement for transformation."}],p=`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');
  :root { --navy:#004168; --navy-deep:#011a2a; --navy-mid:#0a3652; --orange:#ed8337; --orange-light:#f5a66b; }
  *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
  body { font-family:'Poppins',sans-serif; overflow-x:hidden; }

  @keyframes fadeUp      { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
  @keyframes pulse-dot   { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.7);opacity:.45} }
  @keyframes orb-drift   { 0%{transform:translate(0,0)} 100%{transform:translate(20px,-20px)} }
  @keyframes ring-spin   { to{transform:translate(-50%,-50%) rotate(360deg)} }
  @keyframes glow-breathe{ 0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.7} 50%{transform:translate(-50%,-50%) scale(1.2);opacity:1} }
  @keyframes float-ud    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
  @keyframes float-ud2   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes scr         { from{opacity:.5} to{opacity:1} }
  @keyframes dp          { 0%,100%{opacity:.3} 50%{opacity:1} }

  .dt-badge { display:inline-flex; align-items:center; gap:.5rem; background:rgba(237,131,55,.1); border:1px solid rgba(237,131,55,.28); color:#ed8337; font-size:.7rem; font-weight:700; padding:.38rem 1rem; border-radius:50px; letter-spacing:.09em; text-transform:uppercase; width:fit-content; animation:fadeUp .6s ease both; }
  .dt-badge-dot { width:6px; height:6px; border-radius:50%; background:#ed8337; animation:pulse-dot 1.7s ease-in-out infinite; }
  // .dt-eyebrow { display:inline-flex; align-items:center; gap:.65rem; font-size:11px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; color:#ed8337; margin-bottom:14px; }
  .dt-eline { display:inline-block; width:28px; height:2px; border-radius:2px; background:linear-gradient(90deg,transparent,#ed8337); }
  .dt-eline.rev { background:linear-gradient(90deg,#ed8337,transparent); }
  .dt-btn { background:#ed8337; color:#fff; padding:.88rem 2.1rem; border-radius:50px; font-family:'DM Sans',sans-serif; font-size:.93rem; font-weight:500; text-decoration:none; display:inline-flex; align-items:center; gap:.55rem; box-shadow:0 6px 26px rgba(237,131,55,.34); transition:background .22s,transform .18s,box-shadow .22s; border:none; cursor:pointer; }
  .dt-btn:hover { background:#f5a66b; transform:translateY(-3px); box-shadow:0 10px 34px rgba(237,131,55,.46); }

  /* HERO */
  .dt-hero { min-height:100vh; display:grid; grid-template-columns:1fr 1fr; align-items:center; gap:2rem; padding:5rem 6% 3rem; position:relative; overflow:hidden; background:#004168; }
  .dt-orb { position:absolute; border-radius:50%; pointer-events:none; filter:blur(70px); animation:orb-drift 8s ease-in-out infinite alternate; }
  .dt-orb-1 { width:380px; height:380px; background:rgba(237,131,55,.07); top:-80px; right:10%; }
  .dt-orb-2 { width:300px; height:300px; background:rgba(10,54,82,.8); bottom:-60px; left:5%; animation-delay:2s; }
  .dt-hero-h { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.6vw,3.3rem); font-weight:600; line-height:1.15; margin-top:1.3rem; animation:fadeUp .7s .08s ease both; color:#fff; text-align:start; }
  .dt-hero-h .orange { color: #ed8337;
    text-decoration: underline;
    text-underline-offset: 6px;
    text-decoration-thickness: 3px; }
  .dt-hero-sub { margin-top:1.4rem; font-size:.97rem; line-height:1.82; color:rgba(255,255,255,.9); max-width:fit-content; animation:fadeUp .7s .16s ease both; }
  .dt-hero-actions { margin-top:2rem; display:flex; gap:1rem; align-items:center; animation:fadeUp .7s .26s ease both; }
            .dt-fi  { animation:float-ud  3.5s ease-in-out infinite; }
          
  /* APPROACH */
  .approach { position:relative; padding:4rem 6%; overflow:hidden; }
  .ap-inner { position:relative; z-index:2; margin:0 auto; display:grid; grid-template-columns:1fr 0.7fr; gap:4rem; align-items:center; }
  .ap-heading { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3vw,2.6rem); line-height:1.12; color:#000; margin-bottom:1.2rem; font-weight:600; }
  .ap-heading span { color:#ed8337; }
  .ap-intro { font-size:1rem; line-height:1.8; color:#5a6a7a; margin-bottom:1.2rem; }
  .ap-form-wrap { position:relative; max-width:450px; }
  .ap-form-wrap::before { content:''; position:absolute; inset:-2px; background:linear-gradient(135deg,rgba(237,131,55,0.55),rgba(237,131,55,0.1),rgba(237,131,55,0.55)); border-radius:26px; z-index:0; }
  .ap-form-card { position:relative; z-index:1; background:#004168; border-radius:24px; padding:2.8rem 2.6rem; box-shadow:0 24px 60px rgba(0,0,0,0.5),0 0 40px rgba(237,131,55,0.06); border:1px solid rgba(237,131,55,0.18); text-align:center; }
  .form-card-eyebrow { display:inline-flex; align-items:center; gap:8px; font-family:'Poppins',sans-serif; font-size:0.6rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#ed8337; margin-bottom:0.8rem; }
  .form-card-eyebrow-line { width:22px; height:1px; background:#ed8337; }
  .form-card-title { font-family:'Poppins',sans-serif; font-size:1.7rem; font-weight:800; color:#fff; line-height:1.15; margin-bottom:2.4rem; }
  .form-card-title span { color:#ed8337; }
  .fl-row { display:grid; grid-template-columns:1fr 1fr; gap:0.85rem; }
  .fl-group { position:relative; margin-bottom:1rem; }
  .fl-label { display:block; font-family:'Poppins',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:#ed8337; margin-bottom:0.4rem; text-align:start; }
  .fl-input, .fl-textarea { width:100%; padding:0.82rem 1rem 0.82rem 2.6rem; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; font-family:'Poppins',sans-serif; font-size:0.88rem; color:#fff; background:rgba(255,255,255,0.04); outline:none; appearance:none; transition:border-color 0.22s,background 0.22s,box-shadow 0.22s; }
  .fl-input::placeholder, .fl-textarea::placeholder { color:rgba(255,255,255,0.3); }
  .fl-input:focus, .fl-textarea:focus { border-color:#ed8337; background:rgba(237,131,55,0.06); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
  .fl-icon { position:absolute; left:0.85rem; top:50%; transform:translateY(-50%); font-size:0.95rem; opacity:0.5; pointer-events:none; }
  .fl-group.textarea-group .fl-icon { top:0.9rem; transform:none; }
  .fl-textarea { min-height:88px; resize:none; padding-top:0.82rem; padding-left:2.6rem; }
  .phone-row { display:flex; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; overflow:hidden; background:rgba(255,255,255,0.04); transition:border-color 0.22s,box-shadow 0.22s; }
  .phone-row:focus-within { border-color:#ed8337; box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
  .phone-flag { display:flex; align-items:center; gap:0.3rem; padding:0 0.85rem; font-size:0.82rem; font-weight:700; color:#fff; border-right:1.5px solid rgba(237,131,55,0.2); white-space:nowrap; background:rgba(237,131,55,0.08); cursor:default; flex-shrink:0; }
  .phone-flag-icon { font-size:0.9rem; opacity:0.7; }
  .phone-row .fl-input { border:none; border-radius:0; background:transparent; box-shadow:none; padding:0.82rem 1rem; }
  .phone-row .fl-input:focus { box-shadow:none; }
  .ap-submit { width:100%; background:linear-gradient(135deg,#ed8337,#f5a66b); color:#fff; border:none; padding:1rem 1.5rem; border-radius:12px; font-family:'Poppins',sans-serif; font-size:0.97rem; font-weight:500; cursor:pointer; letter-spacing:0.02em; display:flex; align-items:center; justify-content:center; gap:0.6rem; transition:transform 0.2s,box-shadow 0.2s; }
  .ap-submit:hover { transform:translateY(-2px); box-shadow:0 12px 36px rgba(237,131,55,0.5); }
  .ap-submit-arrow { display:inline-flex; align-items:center; justify-content:center; width:24px; height:24px; border-radius:50%; background:rgba(2,43,68,0.25); font-size:0.9rem; }
  // .partners-eyebrow { font-family:'Poppins',sans-serif; font-size:11px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; color:#ed8337; }

  /* SERVICES */
  .dt-services { background:#004168; padding:90px 5%; }
  .dt-svc-hdr { text-align:center; margin-bottom:60px; }
  .dt-svc-hdr h2 { font-family:'Poppins',sans-serif; font-size:clamp(1.9rem,3.5vw,2.7rem); font-weight:700; color:#fff; line-height:1.15; margin-bottom:1rem; }
  .dt-svc-hdr h2 span { color:#ed8337; font-style:italic; }
  .dt-svc-hdr p { font-size:.95rem; color:rgba(255, 255, 255, 0.99);  margin:0 auto; line-height:1.8; }
  .dt-svc-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2rem; max-width:1200px; margin:0 auto; }
  .dt-svc-card { background:#fff; border-radius:20px; padding:2.5rem 2rem; position:relative; overflow:hidden; transition:transform .3s,box-shadow .3s; cursor:default; }
  .dt-svc-card:hover { transform:translateY(-8px); box-shadow:0 24px 60px rgba(0,0,0,.18); }
  .dt-svc-bar { position:absolute; top:0; left:0; right:0; height:4px; border-radius:20px 20px 0 0; }
  .dt-svc-icon { width:68px; height:68px; border-radius:16px; display:flex; align-items:center; justify-content:center; margin-bottom:1.5rem; overflow:hidden; }
  .dt-svc-tag { font-size:.65rem; font-weight:700; letter-spacing:.15em; text-transform:uppercase; margin-bottom:.6rem; }
  .dt-svc-card h3 { font-family:'Poppins',sans-serif; font-size:1.2rem; font-weight:700; color:#011a2a; margin-bottom:1rem; line-height:1.3; }
  .dt-svc-card p { font-size:.88rem; color:#6b7280; line-height:1.8; margin-bottom:1.5rem; }
  .dt-svc-pts { display:flex; flex-wrap:wrap; gap:.5rem; }
  .dt-svc-chip { font-size:.72rem; font-weight:600; padding:.3rem .8rem; border-radius:50px; }
  .dt-svc-deco { position:absolute; bottom:-40px; right:-40px; width:130px; height:130px; border-radius:50%; pointer-events:none; }

  /* PROCESS */
  .dt-process { background:#fff; padding:80px 5%; position:relative; overflow:hidden; }
  .dt-proc-bg { position:absolute; inset:0; pointer-events:none; background-image:linear-gradient(rgba(0,65,104,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,65,104,.04) 1px,transparent 1px); background-size:52px 52px; }
  .dt-proc-hdr { text-align:center; margin-bottom:60px; position:relative; z-index:2; }
  .dt-proc-hdr h2 { font-family:'Poppins',sans-serif; font-size:clamp(1.9rem,3.5vw,2.7rem); font-weight:700; color:#011a2a; margin-bottom:1rem; }
  .dt-proc-hdr h2 .accent { color:#ed8337; font-style:italic; }
  .dt-proc-hdr p { color:#6b7280; max-width:560px; margin:0 auto; font-size:.95rem; line-height:1.8; }
  .dt-proc-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1.5rem; margin:0 auto; position:relative; z-index:2; }
  .dt-proc-card { background:#004168; border-radius:20px; padding:1.8rem 1.5rem; border:1px solid rgba(255,255,255,.08); box-shadow:0 8px 32px rgba(0,65,104,.15); display:flex; flex-direction:column; transition:transform .3s,box-shadow .3s; cursor:default; }
  .dt-proc-card:hover { transform:translateY(-6px); box-shadow:0 16px 48px rgba(0,65,104,.25); }
  .dt-flip-num { font-family:'Poppins',sans-serif; font-size:3.5rem; font-weight:800; line-height:1; opacity:.12; color:#fff; margin-bottom:.5rem; }
  .dt-flip-ico { width:56px; height:56px; border-radius:14px; display:flex; align-items:center; justify-content:center; margin-bottom:1rem; overflow:hidden; }
  .dt-flip-ttl { font-family:'Poppins',sans-serif; font-size:1rem; font-weight:700; color:#ed8337; line-height:1.35; margin-bottom:.8rem; }
  .dt-flip-dsc { font-size:.82rem; color:rgba(255,255,255,0.98); line-height:1.7; font-family:'Poppins',sans-serif; }

  /* VIDEO */
  .dt-video-eyebrow { justify-content:center; margin-bottom:1rem; }
  .dt-video-title { font-family:'Poppins',sans-serif; font-size:clamp(1.9rem,3.5vw,2.7rem); font-weight:700; color:#fff; margin-bottom:1rem; line-height:1.2; }
  .dt-video-title span { color:#ed8337; font-style:italic; }
  .dt-video-desc { font-size:.97rem; color:#fff;  margin:0 auto 2.5rem; line-height:1.85; }
  .dt-video-wrap { position:relative; max-width:1100px; margin:0 auto; background:#004673; border-radius:16px; overflow:hidden; }
  .dt-video-wrap video { display:block; width:100%; height:auto; border:none; outline:none; mix-blend-mode:lighten; }
.dt-video-section {
    background-color: #004673 !important;
    padding: 90px 5%;
    text-align: center;
    margin-top: 60px;
}
  
  /* FAQ */
  .faq-section { background:#fff; padding:80px 5%; }
  .container { max-width:1350px; margin:0 auto; }
  .faq-head { text-align:center; margin-bottom:2.5rem; }
  .faq-head h2 { font-family:'Poppins',sans-serif; font-size:clamp(1.8rem,3vw,2.5rem); font-weight:700; color:#011a2a; }
  .faq-head h2 span { color:#ed8337; font-style:italic; }
  .faq-wrapper { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; }
  .faq-col { display:flex; flex-direction:column; gap:1rem; }
  .faq-item { border-radius:10px; overflow:hidden; transition:border-color .22s; }
  .faq-item:hover { border-color:rgba(237,131,55,0.4); }
  .faq-question { display:flex; justify-content:space-between; align-items:center; padding:1.1rem 1.4rem; cursor:pointer; font-family:'Poppins',sans-serif; font-size:.92rem; font-weight:600; color:#011a2a; gap:1rem; }
  .faq-question .icon { font-size:1.3rem; color:#ed8337; flex-shrink:0; }
  .faq-answer { padding:.2rem 1.4rem 1.1rem; font-size:.88rem; color:#5a6070; line-height:1.78; }

  /* RESPONSIVE */

  /* \u{2500}\u{2500} Tablet 1024px \u{2500}\u{2500} */
  @media(max-width:1024px) {
    .dt-proc-grid { grid-template-columns:repeat(2,1fr) !important; }
  }

  /* \u{2500}\u{2500} Tablet 900px \u{2500}\u{2500} */
  @media(max-width:900px) {
    /* Hero */
    .dt-hero { grid-template-columns:1fr !important; padding:6rem 5% 3rem !important; gap:2rem; text-align:center !important; }
    .dt-hero > div:first-child { align-items:center; padding-bottom:0 !important; }
    .dt-badge { margin:0 auto; }
    .dt-hero-h { font-size:clamp(1.8rem,6vw,2.4rem) !important; }
    .dt-hero-sub { text-align:start; }
    .dt-hero-actions { justify-content:start; }

    /* Approach */
    .approach { padding:3rem 5% !important; }
    .ap-inner { grid-template-columns:1fr !important; gap:2.5rem; }
    .ap-form-wrap { max-width:100%; }
    .ap-heading { font-size:clamp(1.6rem,4vw,2.2rem); }
    .ap-heading span { color:#ed8337; }
    .ap-intro { text-align:start; }
    .partners-eyebrow { text-align:center !important; display:block; }
    .partners-header1 { text-align:center; }

    /* Services */
    .dt-services { padding:60px 5%; }
    .dt-svc-hdr { text-align:center; }
    .dt-svc-hdr h2 { text-align:center; }
    .dt-svc-hdr h2 span { color:#ed8337; }
    .dt-svc-grid { grid-template-columns:1fr !important; }
    .fl-row { grid-template-columns:1fr !important; }

    /* Process */
    .dt-process { padding:60px 5%; }
    .dt-proc-hdr h2 { text-align:center; }
    .dt-proc-hdr h2 .accent { color:#ed8337; }

    /* Video */
    .dt-video-section { padding:60px 5%; margin-top:0 !important; }
    .dt-video-title { font-size:clamp(1.6rem,4vw,2.2rem); text-align:center; }
    .dt-video-title span { color:#ed8337; }

    /* FAQ */
    .faq-section { padding:60px 5%; }
    .faq-head h2 { text-align:center; }
    .faq-head h2 span { color:#ed8337; }
    .faq-wrapper { grid-template-columns:1fr !important; flex-direction:column; }
  }

  /* \u{2500}\u{2500} Mobile 600px \u{2500}\u{2500} */
  @media(max-width:600px) {
    /* Hero */
    .dt-hero { padding:5.5rem 4% 2.5rem !important; }
    .dt-hero-h { font-size:clamp(1.5rem,7vw,2rem) !important; }
    .dt-hero-sub { font-size:.9rem; }

    /* Approach */
    .approach { padding:2.5rem 4% !important; }
    .ap-form-card { padding:1.8rem 1.4rem; }
    .form-card-title { font-size:1.4rem; }
    .fl-row { grid-template-columns:1fr !important; }

    /* Services */
    .dt-services { padding:50px 4%; }
    .dt-svc-hdr { margin-bottom:40px; }
    .dt-svc-card { padding:2rem 1.5rem; }

    /* Process */
    .dt-process { padding:50px 4%; }
    .dt-proc-grid { grid-template-columns:1fr !important; }
    .dt-proc-card { padding:1.5rem 1.2rem; }

    /* Video */
    .dt-video-section { padding:50px 4%; }

    /* FAQ */
    .faq-section { padding:50px 4% !important; }
    .container { padding:0 !important; }
    .faq-wrapper { display:flex !important; flex-direction:column; gap:0; }
    .faq-col { width:100% !important; }

    /* Orange titles \u{2014} all center on mobile */
    .dt-svc-hdr h2,.dt-proc-hdr h2,.dt-video-title,.faq-head h2 { text-align:center !important; }
  }

  /* \u{2500}\u{2500} Small mobile 400px \u{2500}\u{2500} */
  @media(max-width:400px) {
    .dt-hero { padding:7.5rem 4% 2rem !important; }
    .dt-hero-h { font-size:1.45rem !important; }
    .approach { padding:2rem 4% !important; }
    .ap-form-card { padding:1.4rem 1.1rem; }
    .dt-services,.dt-process,.dt-video-section,.faq-section { padding:40px 4% !important; }
  }
  img.logo-gif {
    width: 100%;
  height: auto;
  }

  `;function h(){let[e,t]=(0,r.useState)(null),[a,h]=(0,r.useState)({name:"",email:"",phone:"",company:"",msg:""}),g=a=>t(e===a?null:a),f=e=>h({...a,[e.target.name]:e.target.value});return(0,i.jsx)(l.A,{children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("style",{children:p}),(0,i.jsxs)("section",{className:"dt-hero",children:[(0,i.jsx)("div",{className:"dt-orb dt-orb-1"}),(0,i.jsx)("div",{className:"dt-orb dt-orb-2"}),(0,i.jsxs)("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",paddingBottom:"4rem"},children:[(0,i.jsxs)("div",{className:"dt-badge",children:[(0,i.jsx)("div",{className:"dt-badge-dot"}),"Digital Transformation Experts"]}),(0,i.jsxs)("h1",{className:"dt-hero-h",children:[(0,i.jsx)("span",{className:"orange",style:{marginLeft:"10px"},children:"Digital Transformation"}),"  for Maximum Business Impact"]}),(0,i.jsx)("p",{className:"dt-hero-sub",children:"Starting with a deep understanding of your business, goals, and growth ambitions, we design tailored digital solutions that remove bottlenecks, streamline workflows, enhance efficiency, and drive seamless, measurable, and lasting transformation across every level of your organization for sustainable growth and long-term success."}),(0,i.jsx)("div",{className:"dt-hero-actions",children:(0,i.jsx)("a",{className:"dt-btn",href:"#",children:"Explore More \u203A"})})]}),(0,i.jsx)("div",{style:{position:"relative",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,i.jsx)("img",{src:"/img/digital-transformation.png",alt:"Digital Transformation",style:{width:"100%",height:"auto",objectFit:"contain"}})})]}),(0,i.jsx)("section",{className:"approach",id:"approach",children:(0,i.jsxs)("div",{className:"ap-inner",children:[(0,i.jsxs)("div",{className:"ap-left",children:[(0,i.jsx)("div",{className:"partners-header1",children:(0,i.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Approach in"})}),"          ",(0,i.jsxs)("h2",{className:"ap-heading",children:["Digital ",(0,i.jsx)("span",{children:"Transformation"})," Services"]}),(0,i.jsx)("p",{className:"ap-intro",children:"Modern businesses rely on speed, operational efficiency, and data-driven decision-making to remain competitive and achieve sustainable growth in rapidly evolving digital environments."}),(0,i.jsx)("p",{className:"ap-intro",children:"We implement digital solutions that optimize workflows, improve customer interactions, automate processes, and deliver measurable business outcomes through structured and scalable technology strategies."}),(0,i.jsx)("p",{className:"ap-intro",children:"From automation to analytics and custom applications, we manage technical execution while helping businesses stay agile, innovative, and future-ready in changing market conditions."})]}),(0,i.jsx)("div",{className:"ap-form-wrap",children:(0,i.jsxs)("div",{className:"ap-form-card",children:[(0,i.jsxs)("div",{className:"form-card-eyebrow",children:[(0,i.jsx)("span",{className:"form-card-eyebrow-line"}),"Your Growth, Our Mission",(0,i.jsx)("span",{className:"form-card-eyebrow-line"})]}),(0,i.jsxs)("div",{className:"form-card-title",children:["Get Your ",(0,i.jsx)("span",{children:"Free"})," Quote"]}),(0,i.jsxs)("form",{onSubmit:e=>{e.preventDefault();let t={name:a.name,email:a.email,phone:a.phone,company:a.company,message:a.msg,url:window.location.href};n.Ay.send("service_8xw6k3r","template_jarui36",t,"XWRnXi4hK2SvmRG3q").then(()=>{alert("Message Sent Successfully \u2705"),h({name:"",email:"",phone:"",company:"",msg:""})}).catch(e=>{console.log(e),alert("Failed to send \u274C")})},children:[(0,i.jsxs)("div",{className:"fl-row",children:[(0,i.jsxs)("div",{className:"fl-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Your Name"}),(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)("span",{className:"fl-icon",children:"\u{1F464}"}),(0,i.jsx)("input",{className:"fl-input",type:"text",name:"name",placeholder:"Full name",value:a.name,onChange:f,required:!0})]})]}),(0,i.jsxs)("div",{className:"fl-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Company"}),(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)("span",{className:"fl-icon",children:"\u{1F3E2}"}),(0,i.jsx)("input",{className:"fl-input",type:"text",name:"company",placeholder:"Company name",value:a.company,onChange:f})]})]})]}),(0,i.jsxs)("div",{className:"fl-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Email Address"}),(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)("span",{className:"fl-icon",children:"\u2709\uFE0F"}),(0,i.jsx)("input",{className:"fl-input",type:"email",name:"email",placeholder:"your@email.com",value:a.email,onChange:f,required:!0})]})]}),(0,i.jsxs)("div",{className:"fl-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Mobile Number"}),(0,i.jsxs)("div",{className:"phone-row",children:[(0,i.jsx)("div",{className:"phone-flag",children:(0,i.jsx)("span",{className:"phone-flag-icon",children:"\u{1F4DE}"})}),(0,i.jsx)("input",{className:"fl-input",type:"tel",name:"phone",placeholder:"Mobile number",value:a.phone,onChange:f,maxLength:"10",pattern:"[0-9]{10}",required:!0})]})]}),(0,i.jsxs)("div",{className:"fl-group textarea-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Message"}),(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)("span",{className:"fl-icon",style:{top:"0.9rem",transform:"none"},children:"\u{1F4AC}"}),(0,i.jsx)("textarea",{className:"fl-textarea",name:"msg",placeholder:"Tell us about your business needs...",value:a.msg,onChange:f})]})]}),(0,i.jsxs)("button",{type:"submit",className:"ap-submit",children:["Get Free Consultation ",(0,i.jsx)("span",{className:"ap-submit-arrow",children:"\u203A"})]})]})]})})]})}),(0,i.jsxs)("section",{className:"dt-services",children:[(0,i.jsxs)("div",{className:"dt-svc-hdr",children:[(0,i.jsx)("div",{className:"partners-header1",children:(0,i.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Specialized Digital Transformation Services"})}),(0,i.jsxs)("h2",{children:["Efficient. ",(0,i.jsx)("span",{children:"Seamless."})," Impactful."]}),(0,i.jsx)("p",{children:"From workflow automation to custom applications and data analytics, we design solutions that optimize operations, reduce manual effort, and deliver measurable business outcomes tailored to your unique objectives."})]}),(0,i.jsx)("div",{className:"dt-svc-grid",children:d.map((e,t)=>(0,i.jsxs)("div",{className:"dt-svc-card",children:[(0,i.jsx)("div",{className:"dt-svc-deco",style:{background:`${e.color}08`}}),(0,i.jsx)("div",{className:"dt-svc-bar",style:{background:e.color}}),(0,i.jsx)("div",{className:"dt-svc-icon",style:{background:`${e.color}15`,border:`1px solid ${e.color}30`},children:(0,i.jsx)("img",{src:e.img,alt:e.title,style:{width:"32px",height:"32px",objectFit:"contain"}})}),(0,i.jsx)("div",{className:"dt-svc-tag",style:{color:e.color},children:e.tag}),(0,i.jsx)("h3",{children:e.title}),(0,i.jsx)("p",{children:e.desc}),(0,i.jsx)("div",{className:"dt-svc-pts",children:e.points.map((t,a)=>(0,i.jsx)("span",{className:"dt-svc-chip",style:{background:`${e.color}10`,color:e.color,border:`1px solid ${e.color}30`},children:t},a))})]},t))})]}),(0,i.jsxs)("section",{className:"dt-process",children:[(0,i.jsx)("div",{className:"dt-proc-bg"}),(0,i.jsxs)("div",{className:"dt-proc-hdr",children:[(0,i.jsx)("div",{className:"partners-header1",children:(0,i.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Proven Process For Digital Transformation"})}),(0,i.jsxs)("h2",{children:["How We ",(0,i.jsx)("span",{className:"accent",children:"Transform"})," Your Business"]}),(0,i.jsx)("p",{children:"A structured, four-phase approach that takes you from discovery to continuous improvement."})]}),(0,i.jsx)("div",{className:"dt-proc-grid",children:c.map((e,t)=>(0,i.jsxs)("div",{className:"dt-proc-card",style:{borderTop:`3px solid ${e.color}80`},children:[(0,i.jsx)("div",{className:"dt-flip-num",children:e.num}),(0,i.jsx)("div",{className:"dt-flip-ico",style:{background:`${e.color}20`,border:`1px solid ${e.color}40`},children:(0,i.jsx)("img",{src:e.img,alt:e.title,style:{width:"32px",height:"32px",objectFit:"contain"}})}),(0,i.jsx)("div",{className:"dt-flip-ttl",children:e.title}),(0,i.jsx)("div",{className:"dt-flip-dsc",children:e.shortDesc})]},t))})]}),(0,i.jsxs)("section",{className:"dt-video-section",children:[(0,i.jsx)("div",{className:"partners-header1",children:(0,i.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Implementation Partners"})}),(0,i.jsxs)("h2",{className:"dt-video-title",children:["Empowering Your  ",(0,i.jsx)("span",{children:" Growth Through Seamless "})," Technology Integration"]}),(0,i.jsx)("div",{className:"dt-video-wrap",style:{marginTop:"50px"},children:(0,i.jsx)("video",{src:"/img/partner-dt.mp4",alt:"logo",className:"logo-gif",autoPlay:!0,muted:!0,loop:!0,playsInline:!0})})]}),(0,i.jsxs)("section",{className:"faq-section",children:[(0,i.jsx)("div",{style:{textAlign:"center",marginBottom:"12px"},children:(0,i.jsx)("span",{className:"partners-eyebrow",children:"Frequently Asked Questions"})}),(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"faq-head",children:(0,i.jsxs)("h2",{children:["Queries That Could ",(0,i.jsx)("span",{children:"Hold You Back"})]})}),(0,i.jsxs)("div",{className:"faq-wrapper",children:[(0,i.jsx)("div",{className:"faq-col",children:m.slice(0,3).map((t,a)=>(0,i.jsxs)("div",{className:"faq-item",children:[(0,i.jsxs)("div",{className:"faq-question",onClick:()=>g(a),children:[(0,i.jsx)("span",{children:t.q}),(0,i.jsx)("span",{className:"icon",children:e===a?"\u2212":"+"})]}),e===a&&(0,i.jsx)("div",{className:"faq-answer",children:t.a})]},a))}),(0,i.jsx)("div",{className:"faq-col",children:m.slice(3,6).map((t,a)=>(0,i.jsxs)("div",{className:"faq-item",children:[(0,i.jsxs)("div",{className:"faq-question",onClick:()=>g(a+3),children:[(0,i.jsx)("span",{children:t.q}),(0,i.jsx)("span",{className:"icon",children:e===a+3?"\u2212":"+"})]}),e===a+3&&(0,i.jsx)("div",{className:"faq-answer",children:t.a})]},a+3))})]})]})]}),(0,i.jsx)(o.A,{}),(0,i.jsx)(s.A,{})]})})}}}]);