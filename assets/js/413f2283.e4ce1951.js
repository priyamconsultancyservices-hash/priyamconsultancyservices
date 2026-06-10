"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["8039"],{3177(e,t,r){r.d(t,{A:()=>n});var a=r(4848),i=r(6540);let s=`https://corsproxy.io/?${encodeURIComponent("https://www.priyamconsultancy.com/blog/feed/")}`;function n(){let[e,t]=(0,i.useState)([]),[r,n]=(0,i.useState)(!0),[o,m]=(0,i.useState)(null);return(0,i.useEffect)(()=>{fetch(s).then(e=>{if(!e.ok)throw Error(`HTTP ${e.status}`);return e.text()}).then(e=>{t(Array.from(new DOMParser().parseFromString(e,"text/xml").querySelectorAll("item")).slice(0,3).map(e=>{let t=e.querySelector("enclosure"),r=e.getElementsByTagNameNS("http://search.yahoo.com/mrss/","content")[0],a=e.getElementsByTagNameNS("http://search.yahoo.com/mrss/","thumbnail")[0],i=e.getElementsByTagNameNS("http://purl.org/rss/1.0/modules/content/","encoded")[0],s=i?.textContent||"",n=s.match(/<img[^>]+src=["']([^"']+)["']/i),o=e.querySelector("description")?.textContent||"",m=o.match(/<img[^>]+src=["']([^"']+)["']/i),c=t?.getAttribute("url")||r?.getAttribute("url")||a?.getAttribute("url")||n?.[1]||m?.[1]||null,l=(s||o).replace(/<[^>]*>/g,"").replace(/&[^;]+;/g," ").trim(),p=l.length>340?l.slice(0,340)+"...":l,d=e.getElementsByTagName("link")[0],g=d?.textContent?.trim()||e.querySelector("guid")?.textContent||"#";return{guid:e.querySelector("guid")?.textContent||Math.random().toString(),title:e.querySelector("title")?.textContent?.trim()||"Untitled",link:g,thumbnail:c,excerpt:p}})),n(!1)}).catch(e=>{m(e.message),n(!1)})},[]),(0,a.jsxs)("section",{style:{width:"100%",padding:"4rem 1rem",boxSizing:"border-box",background:"#fff"},children:[(0,a.jsxs)("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[(0,a.jsxs)("div",{style:{textAlign:"center",marginBottom:"2.5rem"},children:[(0,a.jsx)("h2",{style:{fontSize:"2rem",fontWeight:700,margin:"0 0 0.5rem",color:"#111"},children:"Blogs"}),(0,a.jsx)("p",{style:{color:"#666",margin:0,fontSize:"1rem"},children:"Stay updated with the latest in digital marketing, growth strategies, and industry trends."})]}),r&&(0,a.jsx)("p",{style:{textAlign:"center",color:"#888"},children:"Loading..."}),o&&(0,a.jsxs)("p",{style:{textAlign:"center",color:"red"},children:["Error: ",o]}),(0,a.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1.5rem"},className:"blog-grid",children:e.map(e=>(0,a.jsxs)("a",{href:e.link,target:"_blank",rel:"noreferrer",style:{border:"1px solid #e5e7eb",borderRadius:"12px",overflow:"hidden",background:"#fff",display:"flex",flexDirection:"column",textDecoration:"none",color:"inherit",transition:"box-shadow 0.2s, transform 0.2s",cursor:"pointer"},onMouseEnter:e=>{e.currentTarget.style.boxShadow="0 8px 24px rgba(0,0,0,0.12)",e.currentTarget.style.transform="translateY(-3px)"},onMouseLeave:e=>{e.currentTarget.style.boxShadow="none",e.currentTarget.style.transform="translateY(0)"},children:[(0,a.jsx)("div",{style:{width:"100%",aspectRatio:"16/9",overflow:"hidden",background:"#1a2744"},children:e.thumbnail?(0,a.jsx)("img",{src:e.thumbnail,alt:e.title,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):(0,a.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",opacity:.4,fontSize:"0.8rem"},children:"No image"})}),(0,a.jsxs)("div",{style:{padding:"1.25rem",display:"flex",flexDirection:"column",gap:"0.75rem"},children:[(0,a.jsx)("p",{style:{fontWeight:600,fontSize:"1.1rem",lineHeight:1.6,margin:0,color:"#111"},children:e.title}),(0,a.jsx)("p",{style:{color:"#444",fontSize:"0.875rem",lineHeight:1.6,flex:1,margin:0},children:e.excerpt}),(0,a.jsx)("span",{style:{display:"inline-block",background:"#E87C30",color:"#fff",padding:"0.6rem 1.5rem",borderRadius:"999px",fontWeight:500,alignSelf:"flex-start",marginTop:"0.5rem",fontSize:"0.875rem"},children:"Read More"})]})]},e.guid))})]}),(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        @media (max-width: 1024px) { .blog-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px)  { .blog-grid { grid-template-columns: 1fr !important; } }
      `}})]})}},9393(e,t,r){r.d(t,{A:()=>s});var a=r(4848),i=r(6540);let s=function(){let e=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let t=e.current;if(!t)return;let r=t.getContext("2d"),a="#ed8337",i,s,n=[],o;function m(){i=t.width=t.parentElement.offsetWidth,s=t.height=t.parentElement.offsetHeight}function c(){this.reset()}c.prototype.reset=function(){this.x=Math.random()*i,this.y=Math.random()*s,this.r=2.2*Math.random()+.6,this.type=.55>Math.random()?"dot":.5>Math.random()?"ring":"plus",this.speed=.35*Math.random()+.08,this.dir=Math.random()*Math.PI*2,this.alpha=.45*Math.random()+.1,this.pulse=Math.random()*Math.PI*2,this.pulseSpeed=.018*Math.random()+.008,this.size=4*Math.random()+2},c.prototype.update=function(){this.x+=Math.cos(this.dir)*this.speed,this.y+=Math.sin(this.dir)*this.speed,this.pulse+=this.pulseSpeed,this.dir+=(Math.random()-.5)*.015,this.x<-20&&(this.x=i+20),this.x>i+20&&(this.x=-20),this.y<-20&&(this.y=s+20),this.y>s+20&&(this.y=-20)},c.prototype.draw=function(){let e=this.alpha*(.7+.3*Math.sin(this.pulse));if(r.save(),r.globalAlpha=e,r.strokeStyle=r.fillStyle=a,r.lineWidth=1,"dot"===this.type)r.beginPath(),r.arc(this.x,this.y,this.r+.4*Math.sin(this.pulse),0,2*Math.PI),r.fill();else if("ring"===this.type){let e=this.size*(.9+.15*Math.sin(this.pulse));r.beginPath(),r.arc(this.x,this.y,e,0,2*Math.PI),r.stroke()}else{let e=this.size*(.9+.1*Math.sin(this.pulse));r.beginPath(),r.moveTo(this.x-e,this.y),r.lineTo(this.x+e,this.y),r.moveTo(this.x,this.y-e),r.lineTo(this.x,this.y+e),r.stroke()}r.restore()},window.addEventListener("resize",m),m(),n=[];let l=Math.floor(i*s/9e3);for(let e=0;e<Math.max(l,28);e++)n.push(new c);return!function e(){r.clearRect(0,0,i,s),function(){let e=n.filter(e=>"dot"===e.type);for(let t=0;t<e.length;t++)for(let i=t+1;i<e.length;i++){let s=e[t].x-e[i].x,n=e[t].y-e[i].y,o=Math.sqrt(s*s+n*n);o<110&&(r.save(),r.globalAlpha=(1-o/110)*.12,r.strokeStyle=a,r.lineWidth=.7,r.beginPath(),r.moveTo(e[t].x,e[t].y),r.lineTo(e[i].x,e[i].y),r.stroke(),r.restore())}}(),n.forEach(e=>{e.update(),e.draw()}),o=requestAnimationFrame(e)}(),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",m)}},[]),(0,a.jsx)("section",{id:"cta-final",children:(0,a.jsxs)("div",{className:"cta-banner",style:{"--glow-x":"50%","--glow-y":"50%"},children:[(0,a.jsx)("canvas",{id:"ctaCanvas",ref:e}),(0,a.jsxs)("div",{className:"cta-banner-left",children:[(0,a.jsx)("div",{className:"partners-header",children:(0,a.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Ready to Start?"})}),(0,a.jsxs)("h2",{className:"cta-banner-heading",children:["Let's Talk About Your",(0,a.jsx)("br",{}),"Next Big ",(0,a.jsx)("span",{className:"hl-italic",children:"Growth Move"})]}),(0,a.jsx)("p",{className:"cta-banner-sub",children:"No pressure. Just a quick conversation to understand where you are-and how we can help you move forward."})]}),(0,a.jsxs)("div",{className:"cta-banner-right",children:[(0,a.jsxs)("a",{href:"#",className:"cta-bprimary",children:["Book a Free Consultation",(0,a.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",children:(0,a.jsx)("path",{d:"M3 8h10M9 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,a.jsx)("a",{href:"#",className:"cta-bghost",children:"View All Services"})]})]})})}},8732(e,t,r){r.r(t),r.d(t,{default:()=>S});var a=r(4848),i=r(6540),s=r(8128),n=r(3177),o=r(9393);let m=[{id:"tab1",label:"E-commerce Marketing Services",services:[{num:"01",img:"/img/icon/ecommerce-website-audit.webp",subtitle:"E-commerce Website Audit",title:"E-commerce Website Audit",desc:"A detailed audit of your ecommerce store covering user experience, SEO, speed, and conversion gaps. Our ecommerce marketing agency identifies performance issues and opportunities, helping you improve visibility, enhance user journeys, and build a stronger foundation for scalable ecommerce marketing growth and better results."},{num:"02",img:"/img/icon/ecommerce-seo-growth-strategy.webp",subtitle:"E-commerce SEO & Growth Strategy",title:"E-commerce SEO & Growth Strategy",desc:"We create data-driven ecommerce marketing strategies focused on improving search rankings, organic traffic, and long-term visibility. From keyword mapping to content optimization, our ecommerce marketing agency ensures your store is discoverable, competitive, and positioned for consistent growth across search engines and digital platforms."},{num:"03",img:"/img/icon/performance-marketing.webp",subtitle:"Performance Marketing (Paid Ads)",title:"Performance Marketing (Paid Ads)",desc:"As a results-focused ecommerce marketing agency , we run high-performing paid campaigns across Google, Meta and social platforms. Our ecommerce marketing approach focuses on ROI, audience targeting, creative optimization, and continuous scaling to maximize conversions and overall business performance."},{num:"04",img:"/img/icon/social-commerce-marketing.webp",subtitle:"Social Commerce Marketing",title:"Social Commerce Marketing",desc:"We integrate ecommerce marketing with social platforms to drive direct conversions. From product-focused campaigns to engaging creatives, our strategies help you sell seamlessly across channels, turning social engagement into revenue while strengthening your brand presence and improving customer interaction across every marketplace touchpoint."},{num:"05",img:"/img/icon/customer-retention.webp",subtitle:"Customer Retention & Retargeting",title:"Customer Retention & Retargeting",desc:"Our ecommerce marketing services focus on retaining customers and increasing lifetime value. Through advanced retargeting strategies, audience segmentation, and personalized campaigns, we help re-engage visitors, recover lost sales, and build long-term customer relationships that drive consistent revenue growth across ecommerce and marketplace platforms."},{num:"06",img:"/img/icon/analytics-conversion-reporting.webp",subtitle:"Analytics & Conversion Reporting",title:"Analytics & Conversion Reporting",desc:"We track, measure, and analyze every aspect of your ecommerce marketing performance. From traffic and behavior to conversions and ROI, our reporting provides actionable insights that help refine strategies, optimize campaigns, and improve decision-making for better results across your ecommerce store and marketplace channels."}]},{id:"tab2",label:"Marketplace Services",services:[{num:"01",img:"/img/icon/marketplace-account-setup.webp",subtitle:"Marketplace Account Setup",title:"Marketplace Account Setup",desc:"Complete setup and configuration of your marketplace accounts across platforms like Amazon, Flipkart, and Meesho. We ensure proper structuring, compliance, and optimization from day one, enabling your brand to launch smoothly and perform effectively in a competitive marketplace environment."},{num:"02",img:"/img/icon/competitor-market-analysis.webp",subtitle:"Competitor & Market Analysis",title:"Competitor & Market Analysis",desc:"We conduct in-depth competitor and market analysis to identify opportunities within your marketplace niche. Our ecommerce marketing agency evaluates pricing, positioning, trends, and demand to build strategies that help your products stand out, compete effectively, and achieve stronger visibility and conversions."},{num:"03",img:"/img/icon/marketplace-seo-optimization.webp",subtitle:"Marketplace SEO Optimization",title:"Marketplace SEO Optimization",desc:"Improve your marketplace visibility with optimized titles, keywords, and backend attributes. Our marketplace SEO strategies ensure your products rank higher in search results, attract the right audience, and increase discoverability across platforms, supporting consistent ecommerce marketing performance and growth."},{num:"04",img:"/img/icon/product-listing-ranking-optimization.webp",subtitle:"Product Listing & Ranking Optimization",title:"Product Listing & Ranking Optimization",desc:"Our marketplace product listing service focuses on creating high-converting listings with optimized titles, descriptions, and visuals. Including Flipkart listing optimization and Meesho product listing service, we improve rankings, enhance visibility, and drive better conversions across every marketplace platform."},{num:"05",img:"/img/icon/marketplace-advertising.webp",subtitle:"Marketplace Advertising (Amazon & Flipkart Ads)",title:"Marketplace Advertising (Amazon & Flipkart Ads)",desc:"We manage performance-driven campaigns including Amazon PPC Services as a trusted amazon ppc agency. Our ecommerce marketing strategies focus on targeting, bidding, and optimization to increase visibility, drive traffic, and generate consistent sales across marketplace platforms like Amazon and Flipkart."},{num:"06",img:"/img/icon/review-rating-management.webp",subtitle:"Review & Rating Management",title:"Review & Rating Management",desc:"Build trust and credibility with effective review and rating management. We help monitor feedback, improve customer satisfaction, and maintain strong brand reputation across every marketplace, ensuring positive user perception and better conversion rates as part of your overall ecommerce marketing strategy."}]}],c=`
  .htab-bar-wrap {
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: center;
    padding: 3rem 6% 4rem;
    margin-bottom: 0;
  }
  .htab-bar {
    display: inline-flex;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 50px;
    padding: 5px;
    gap: 4px;
    background: rgba(255,255,255,0.04);
  }
  .htab-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.7rem 2rem;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.88rem;
    font-weight: 500;
    color: rgba(255,255,255,0.5);
    letter-spacing: 0.01em;
    transition: color 0.25s ease, background 0.25s ease;
    white-space: nowrap;
  }
  .htab-btn:hover { color: rgba(255,255,255,0.8); }
  .htab-btn.active { background: #ed8337; color: #fff; font-weight: 600; }
  .htab-pane { animation: htab-fade 0.32s ease both; }
  @keyframes htab-fade {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .smm-sp-img {
    width: 33px;
    height: 33px;
    // border-radius: 12px;
    object-fit: cover;
    display: block;
  }
  @media(max-width:580px) {
    .htab-bar-wrap { padding: 0 5%; }
    .htab-btn { padding: 0.6rem 1.1rem; font-size: 0.8rem; }
  }

  @media (max-width:660px) {
  .htab-bar {
    display: inline;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    padding: 5px;
    gap: 4px;
    background: rgba(255, 255, 255, 0.04);
    justify-content: center;
    text-align: center;
    margin-bottom:30px;
}
    }
`;function l({svc:e,index:t}){let[r,s]=function(e=.1){let t=(0,i.useRef)(null),[r,a]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let r=t.current;if(!r)return;let i=new IntersectionObserver(([e])=>{e.isIntersecting&&(a(!0),i.disconnect())},{threshold:e});return i.observe(r),()=>i.disconnect()},[e]),[t,r]}(.1);return(0,a.jsxs)("div",{ref:r,className:`smm-svc-panel${s?" vis":""}`,style:{transitionDelay:`${.05+.07*t}s`},children:[(0,a.jsx)("div",{className:"smm-sp-slash"}),(0,a.jsx)("div",{className:"smm-sp-ghost",children:e.num}),(0,a.jsx)("div",{className:"smm-sp-bottom-line"}),(0,a.jsxs)("div",{className:"smm-sp-icon-row",children:[(0,a.jsx)("span",{className:"smm-sp-icon-dash"}),(0,a.jsx)("img",{src:e.img,alt:e.subtitle,className:"smm-sp-img"})]}),(0,a.jsxs)("div",{className:"smm-sp-content",children:[(0,a.jsx)("div",{className:"smm-sp-subtitle",children:e.subtitle}),(0,a.jsx)("h5",{className:"smm-sp-title",children:e.title}),(0,a.jsx)("div",{className:"smm-sp-desc",children:e.desc})]})]})}function p(){let[e,t]=(0,i.useState)("tab1");(0,i.useEffect)(()=>{let e="htab-bar-styles";if(!document.getElementById(e)){let t=document.createElement("style");t.id=e,t.textContent=c,document.head.appendChild(t)}},[]);let r=m.find(t=>t.id===e);return(0,a.jsxs)("section",{className:"smm-svc",children:[(0,a.jsx)("div",{className:"smm-svc-dots"}),(0,a.jsxs)("div",{className:"smm-svc-hdr",children:[(0,a.jsx)("div",{className:"partners-header1",children:(0,a.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Specialized Email Marketing Services"})}),(0,a.jsxs)("h3",{className:"smm-svc-h2",children:["Two Powerful Channels. ",(0,a.jsx)("span",{children:(0,a.jsx)("i",{children:"One Goal"})})," - Customer Growth."]}),(0,a.jsx)("p",{className:"smm-svc-sub",children:"We deliver end-to-end ecommerce marketing and marketplace solutions to drive visibility, traffic, and conversions."})]}),(0,a.jsx)("div",{className:"htab-bar-wrap",children:(0,a.jsx)("div",{className:"htab-bar",children:m.map(r=>(0,a.jsx)("button",{className:`htab-btn${e===r.id?" active":""}`,onClick:()=>t(r.id),children:r.label},r.id))})}),(0,a.jsx)("div",{className:"htab-pane",children:(0,a.jsx)("div",{className:"smm-svc-panels",children:r.services.map((t,r)=>(0,a.jsx)(l,{svc:t,index:r},`${e}-${t.num}`))})},e)]})}var d=r(1085),g=r(3572);let h=`
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
  .smm-hero-right { position:relative; z-index:2; display:flex; align-items:flex-start; justify-content:center; animation:smm-fadeUp .9s .15s ease both; }
  .smm-hero-img { height:470px; object-fit:contain; border-radius:16px; display:block; }

  /* \u{2500}\u{2500} SERVICES \u{2500}\u{2500} */
  .smm-svc { position:relative; background:#004168; padding:4rem 0 0; overflow:hidden; }
  .smm-svc-dots { position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(rgba(237,131,55,0.18) 1px,transparent 1px); background-size:38px 38px; animation:smm-dots-drift 30s linear infinite; opacity:0.35; }
  @keyframes smm-dots-drift { to { background-position: 38px 38px; } }
  .smm-svc-glow { position:absolute; border-radius:50%; filter:blur(100px); pointer-events:none; z-index:0; }
  .smm-ssvg1 { width:700px; height:700px; top:-200px; left:-180px; background:rgba(237,131,55,0.07); animation:smm-ssvg-pulse 14s ease-in-out infinite alternate; }
  .smm-ssvg2 { width:550px; height:550px; bottom:-180px; right:-140px; background:rgba(56,189,248,0.06); animation:smm-ssvg-pulse 18s ease-in-out infinite alternate reverse; }
  @keyframes smm-ssvg-pulse { from{opacity:.6;transform:scale(1);} to{opacity:1;transform:scale(1.15);} }
  .smm-svc-hdr { position:relative; z-index:2; text-align:center; padding:0 6% 0.5rem; margin:0 auto; }
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

  .smm-sp-title { font-family:'Poppins',sans-serif; font-size:clamp(1.15rem,1.7vw,1.35rem); font-weight:800; color:#fff; line-height:1.5; margin-bottom:.75rem; transition:letter-spacing .35s ease; }
  .smm-svc-panel:hover .smm-sp-title { letter-spacing:.01em; }
  .smm-sp-desc { font-size:.86rem; line-height:1.76; color:rgba(255,255,255,0.93); max-height:0; overflow:hidden; transition:max-height .5s ease,color .5s ease,margin .5s ease; margin-bottom:0; }
  .smm-svc-panel:hover .smm-sp-desc { max-height:200px; color:rgb(255,255,255); margin-bottom:.9rem; font-family:'Poppins'; }
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

`;function f(e=.1){let t=(0,i.useRef)(null),[r,a]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let r=t.current;if(!r)return;let i=new IntersectionObserver(([e])=>{e.isIntersecting&&(a(!0),i.disconnect())},{threshold:e});return i.observe(r),()=>i.disconnect()},[e]),[t,r]}let u=[{step:"01",title:"Discover",phase:"Discover",desc:"We begin by understanding your business model, products, target audience, customer journey, and current ecommerce and marketplace presence in detail. This helps us define clear goals and align your ecommerce marketing strategy with measurable growth objectives, platform opportunities, and long-term business scalability.",bullets:[]},{step:"02",title:"Research & Analyze",phase:"Research & Analyze",desc:"We conduct in-depth research including keyword analysis, competitor benchmarking, pricing insights, customer behavior patterns, and marketplace trends. This ensures your ecommerce marketing strategy is data-driven, competitive, audience-focused, and strategically positioned to capture demand effectively across multiple ecommerce and marketplace platforms.",bullets:[]},{step:"03",title:"Plan & Strategize",phase:"Plan & Strategize",desc:"Based on gathered insights, we create a structured roadmap covering ecommerce marketing campaigns, marketplace growth strategies, content direction, promotional planning, and advertising execution. Every activity is aligned with clear business goals focused on improving visibility, audience engagement, customer acquisition, and long-term conversion growth across all digital channels.",bullets:[]},{step:"04",title:"Execute & Optimize",phase:"Execute & Optimize",desc:"We implement campaigns across ecommerce platforms and marketplaces, including product listing optimization, paid advertising campaigns, SEO improvements, and conversion-focused enhancements. Continuous monitoring, testing, and strategic refinements ensure stronger performance, improved customer engagement, higher conversions, and consistent growth across all active sales and marketing channels.",bullets:[]},{step:"05",title:"Monitor & Scale",phase:"Monitor & Scale",desc:"We continuously track performance metrics including website traffic, product rankings, customer engagement, conversions, return on ad spend, and overall ROI. Using real-time analytics and marketplace insights, we optimize strategies, scale high-performing campaigns, improve operational efficiency, and strengthen your ecommerce marketing performance for sustainable long-term business growth.",bullets:[]}],x=[{icon:(0,a.jsx)("img",{src:"/img/icon/hww-platform-strategy.webp",alt:"Platform-Specific Strategy",width:"28",height:"28"}),title:"Platform-Specific Strategy",desc:"Every marketplace operates differently, with unique algorithms and ranking factors. We tailor ecommerce marketing strategies for each platform to maximize visibility, performance, and consistent sales growth."},{icon:(0,a.jsx)("img",{src:"/img/icon/hww-expert-execution.webp",alt:"Expert Execution",width:"28",height:"28"}),title:"Expert Execution",desc:"With deep expertise as an amazon marketing agency and marketplace product listing service provider, we execute every strategy with precision, ensuring optimized listings, strong positioning, and improved conversions."},{icon:(0,a.jsx)("img",{src:"/img/icon/hww-performance-drivens.webp",alt:"Performance-Driven Approach",width:"28",height:"28"}),title:"Performance-Driven Approach",desc:"We track key metrics including rankings, traffic, conversions, and ROI. Our ecommerce marketing strategies are continuously refined using data insights to improve performance and maximize overall business results."}],b=[{q:"What does an ecommerce marketing service include?",a:"Ecommerce marketing services include SEO, product listing optimization, performance marketing, marketplace management, social media promotion, email marketing, conversion optimization, and analytics tracking. The goal is to improve product visibility, increase traffic, generate sales, and strengthen overall online store performance effectively."},{q:"How can ecommerce SEO improve my sales?",a:" Ecommerce SEO improves product visibility on search engines by optimizing product pages, keywords, technical structure, and user experience. Better search rankings attract high-intent customers, increase organic traffic, improve product discoverability, and contribute to higher conversions and long-term online sales growth."},{q:"What is marketplace listing optimization?",a:" Marketplace listing optimization involves improving product titles, descriptions, keywords, images, attributes, and overall listing structure on platforms like Amazon and Flipkart. This helps products rank better in marketplace searches, attract more customers, improve click-through rates, and increase overall sales performance."},{q:"Can you help increase sales on multiple marketplaces?",a:"Yes, we help businesses improve visibility and sales across multiple marketplaces including Amazon, Flipkart, Meesho, and other ecommerce platforms. Our strategies focus on listing optimization, advertising, pricing analysis, content improvement, and performance tracking to maximize marketplace growth and conversions."},{q:"Do you provide Amazon PPC services?",a:" Yes, we manage Amazon PPC campaigns focused on improving product visibility, increasing conversions, and maximizing advertising efficiency. Our services include keyword targeting, campaign optimization, bid management, competitor analysis, and performance tracking to improve return on advertising spend and marketplace sales performance."},{q:"How does PCS help ecommerce brands grow?",a:"PCS helps ecommerce brands grow through SEO, marketplace optimization, paid advertising, conversion-focused strategies, content marketing, and performance analytics. Our approach focuses on improving visibility, customer engagement, operational efficiency, and sales scalability to support sustainable long-term ecommerce business growth."}];function v(){return(0,a.jsxs)("section",{className:"hero",id:"hero",children:[(0,a.jsx)("style",{children:`
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
          .hero-left { order: 1; align-items: flex-start; padding: 3rem 0; }
          .hero-right { width: 100% !important; height: auto !important; order: 2; display: flex; justify-content: center; }
          .hero-img { width: 100%; max-width: 480px; height: auto; }
          .hero-sub { max-width: 90%; }
          .hero-actions { justify-content: flex-start; }
        }
        /* MOBILE */
        @media(max-width: 600px) {
          .hero { padding: 1rem 4% 3rem; gap: 2rem; }
          .hero-heading { font-size: clamp(1.7rem, 6vw, 2.2rem) !important;         line-height: 1.46;}
          .hero-sub { font-size: 0.9rem; max-width: 100%; }
          .hero-img { max-width: 100%; width: 100%; }
          .h-badge { font-size: 0.65rem; }
            h3.faq-h3 {font-size:1.9rem!important;}
        }
        .menu li { position: relative; cursor: pointer; font-size: 16px; color: black; }
      `}),(0,a.jsxs)("div",{className:"hero-left",children:[(0,a.jsxs)("div",{className:"h-badge",children:[(0,a.jsx)("div",{className:"badge-dot"}),"Revenue Expansion "]}),(0,a.jsxs)("h1",{className:"hero-heading",children:["Scaling Brands Across",(0,a.jsx)("span",{className:"hl lined",children:"Marketplace "})," & E-commerce  Marketing"]}),(0,a.jsx)("p",{className:"hero-sub",children:"At PCS, we help brands scale through result-driven ecommerce marketing and marketplace growth strategies. As a performance-focused ecommerce marketing agency and digital marketing agency for ecommerce, we combine data, creativity, and platform expertise to drive visibility, traffic, and conversions. "}),"        ",(0,a.jsx)("div",{className:"hero-actions",children:(0,a.jsxs)("a",{className:"btn-fill",href:"/contact-us",children:["Explore More ",(0,a.jsx)("span",{className:"btn-arrow",children:"\u203A"})]})})]}),(0,a.jsx)("div",{className:"hero-right",children:(0,a.jsx)("img",{src:"/img/marketplace-ecommerce-marketing.png",alt:"Email & WhatsApp Marketing Illustration",className:"hero-img"})})]})}function w(){let[e,t]=(0,i.useState)({name:"",email:"",phone:"",company:"",msg:""}),r=r=>t({...e,[r.target.name]:r.target.value});return(0,a.jsxs)("section",{className:"approach",id:"approach",children:[(0,a.jsx)("style",{children:`
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
      `}),(0,a.jsxs)("div",{className:"ap-inner",children:[(0,a.jsxs)("div",{className:"ap-left",children:[(0,a.jsx)("div",{className:"partners-header1",children:(0,a.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"center"},children:"Our Approach in"})}),(0,a.jsxs)("h2",{className:"ap-heading",children:["Strategic ",(0,a.jsx)("span",{children:"Marketplace & E-commerce "})," Marketing Growth That Drives Sales"]}),(0,a.jsx)("p",{className:"ap-intro",children:"In today\u2019s competitive digital landscape, success depends on strong execution across both your website and every marketplace platform you sell on. We build structured ecommerce marketing strategies focused on scalable business growth."}),(0,a.jsx)("p",{className:"ap-intro",children:"As a trusted ecommerce marketing agency, we focus on performance-driven campaigns, product listing optimization, and data-backed decision-making. Our strategies are designed to improve visibility, engagement, and conversion performance consistently across channels."}),(0,a.jsx)("p",{className:"ap-intro",children:"We analyze customer behavior, competitor positioning, and platform algorithms to create high-impact marketplace strategies. Whether your goal is better rankings, higher conversions, or increased sales, we deliver measurable ecommerce marketing outcomes."})]}),(0,a.jsx)("div",{className:"ap-form-wrap",children:(0,a.jsxs)("div",{className:"ap-form-card",children:[(0,a.jsxs)("div",{className:"form-card-eyebrow",children:[(0,a.jsx)("span",{className:"form-card-eyebrow-line"}),"Your Growth, Our Mission",(0,a.jsx)("span",{className:"form-card-eyebrow-line"})]}),(0,a.jsxs)("div",{className:"form-card-title",children:["Get Your ",(0,a.jsx)("span",{children:"Free"})," Quote"]}),(0,a.jsxs)("form",{onSubmit:r=>{r.preventDefault();let a={name:e.name,email:e.email,phone:e.phone,company:e.company,message:e.msg,url:window.location.href};s.Ay.send("service_8xw6k3r","template_jarui36",a,"XWRnXi4hK2SvmRG3q").then(()=>{alert("Message Sent Successfully \u2705"),t({name:"",email:"",phone:"",company:"",msg:""})}).catch(e=>{console.log(e),alert("Failed to send \u274C")})},children:[(0,a.jsxs)("div",{className:"fl-row",children:[(0,a.jsxs)("div",{className:"fl-group",children:[(0,a.jsx)("label",{className:"fl-label",children:"Your Name"}),(0,a.jsxs)("div",{style:{position:"relative"},children:[(0,a.jsx)("span",{className:"fl-icon",children:"\u{1F464}"}),(0,a.jsx)("input",{className:"fl-input",type:"text",name:"name",placeholder:"Full name",value:e.name,onChange:r,required:!0})]})]}),(0,a.jsxs)("div",{className:"fl-group",children:[(0,a.jsx)("label",{className:"fl-label",children:"Company"}),(0,a.jsxs)("div",{style:{position:"relative"},children:[(0,a.jsx)("span",{className:"fl-icon",children:"\u{1F3E2}"}),(0,a.jsx)("input",{className:"fl-input",type:"text",name:"company",placeholder:"Company name",value:e.company,onChange:r})]})]})]}),(0,a.jsxs)("div",{className:"fl-group",children:[(0,a.jsx)("label",{className:"fl-label",children:"Email Address"}),(0,a.jsxs)("div",{style:{position:"relative"},children:[(0,a.jsx)("span",{className:"fl-icon",children:"\u2709\uFE0F"}),(0,a.jsx)("input",{className:"fl-input",type:"email",name:"email",placeholder:"your@email.com",value:e.email,onChange:r,required:!0})]})]}),(0,a.jsxs)("div",{className:"fl-group",children:[(0,a.jsx)("label",{className:"fl-label",children:"Mobile Number"}),(0,a.jsxs)("div",{className:"phone-row",children:[(0,a.jsx)("div",{className:"phone-flag",children:(0,a.jsx)("span",{children:"\u{1F4DE}"})}),(0,a.jsx)("input",{className:"fl-input",type:"tel",name:"phone",placeholder:"Mobile number",value:e.phone,onChange:r,maxLength:"10",pattern:"[0-9]{10}",required:!0})]})]}),(0,a.jsxs)("div",{className:"fl-group textarea-group",children:[(0,a.jsx)("label",{className:"fl-label",children:"Message"}),(0,a.jsxs)("div",{style:{position:"relative"},children:[(0,a.jsx)("span",{className:"fl-icon",style:{top:"0.9rem",transform:"none"},children:"\u{1F4AC}"}),(0,a.jsx)("textarea",{className:"fl-textarea",name:"msg",placeholder:"Tell us about your social media goals...",value:e.msg,onChange:r})]})]}),(0,a.jsxs)("button",{type:"submit",className:"ap-submit",children:["Get Free Consultation ",(0,a.jsx)("span",{className:"ap-submit-arrow",children:"\u203A"})]})]})]})})]})]})}function y({step:e,index:t}){let[r,i]=f(.1);return(0,a.jsx)("div",{ref:r,className:`smm-tp-step${i?" tp-vis":""}`,children:t%2==1?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"smm-tp-text-side",children:[(0,a.jsx)("p",{className:"smm-tp-desc",children:e.desc}),(0,a.jsx)("div",{className:"smm-tp-bullets",children:e.bullets.map(e=>(0,a.jsx)("span",{className:"smm-tp-bullet",children:e},e))})]}),(0,a.jsxs)("div",{className:"smm-tp-num-side",children:[(0,a.jsx)("div",{className:"smm-tp-bg-num",children:e.step}),(0,a.jsxs)("div",{className:"smm-tp-step-index",children:["Step \u2014 ",e.step]}),(0,a.jsx)("h4",{className:"smm-tp-step-title",children:e.title}),(0,a.jsx)("div",{className:"smm-tp-phase",children:e.phase})]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"smm-tp-num-side",children:[(0,a.jsx)("div",{className:"smm-tp-bg-num",children:e.step}),(0,a.jsxs)("div",{className:"smm-tp-step-index",children:["Step \u2014 ",e.step]}),(0,a.jsx)("h4",{className:"smm-tp-step-title",children:e.title}),(0,a.jsx)("div",{className:"smm-tp-phase",children:e.phase})]}),(0,a.jsxs)("div",{className:"smm-tp-text-side",children:[(0,a.jsx)("p",{className:"smm-tp-desc",children:e.desc}),(0,a.jsx)("div",{className:"smm-tp-bullets",children:e.bullets.map(e=>(0,a.jsx)("span",{className:"smm-tp-bullet",children:e},e))})]})]})})}function k(){return(0,a.jsxs)("section",{className:"smm-tp-section",children:[(0,a.jsx)("div",{className:"smm-tp-cross"}),(0,a.jsxs)("div",{className:"smm-tp-header",children:[(0,a.jsx)("div",{className:"partners-header1",children:(0,a.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"center"},children:"Our Proven Marketplace & E-commerce Marketing Process"})}),(0,a.jsxs)("h3",{className:"smm-tp-h2",children:["List Better. ",(0,a.jsxs)("em",{children:[" ",(0,a.jsx)("i",{children:"Rank Higher. "})]}),"Sell More."]})]}),(0,a.jsx)("div",{className:"smm-tp-body",children:u.map((e,t)=>(0,a.jsx)(y,{step:e,index:t},e.step))})]})}function j({item:e}){let[t,r]=f(.12);return(0,a.jsx)("div",{ref:t,className:`smm-hww-arrow-item${r?" hww-vis":""}`,children:(0,a.jsxs)("div",{className:"smm-hww-card",children:[(0,a.jsx)("div",{className:"smm-hww-icon-wrap",children:e.icon}),(0,a.jsx)("h4",{className:"smm-hww-card-title",children:e.title}),(0,a.jsx)("div",{className:"smm-hww-card-desc",children:e.desc})]})})}function z(){return(0,a.jsxs)("section",{className:"smm-hww",children:[(0,a.jsx)("div",{className:"smm-hww-dot-grid"}),(0,a.jsx)("div",{className:"smm-hww-glow smm-hww-glow-1"}),(0,a.jsx)("div",{className:"smm-hww-glow smm-hww-glow-2"}),(0,a.jsxs)("div",{className:"smm-hww-header",children:[(0,a.jsx)("div",{className:"partners-header1",children:(0,a.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"center"},children:"Our Focus on Your Results "})}),(0,a.jsxs)("h3",{className:"smm-hww-h2",children:["Optimize Listings. ",(0,a.jsx)("span",{children:(0,a.jsx)("i",{children:"Drive Traffic."})})," Increase Sales."]})]}),(0,a.jsx)("div",{className:"smm-hww-arrows-wrap",children:(0,a.jsx)("div",{className:"smm-hww-arrow-track",children:x.map(e=>(0,a.jsx)(j,{item:e},e.title))})})]})}function N(){let[e,t]=(0,i.useState)(null),r=r=>t(e===r?null:r);return(0,a.jsxs)("section",{className:"faq-section",children:[(0,a.jsx)("div",{className:"partners-header2",style:{textAlign:"center",marginTop:"20px"},children:(0,a.jsx)("h4",{className:"partners-eyebrow",children:"Frequently Asked Questions"})}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"faq-head",children:(0,a.jsxs)("h3",{className:"faq-h3",children:["Questions That Could ",(0,a.jsx)("span",{children:"Hold You Back"})]})}),(0,a.jsxs)("div",{className:"faq-wrapper",children:[(0,a.jsx)("div",{className:"faq-col",children:b.slice(0,3).map((t,i)=>(0,a.jsxs)("div",{className:"faq-item",children:[(0,a.jsxs)("div",{className:"faq-question",onClick:()=>r(i),children:[(0,a.jsx)("span",{children:t.q}),(0,a.jsx)("span",{className:"icon",children:e===i?"\u2212":"+"})]}),e===i&&(0,a.jsx)("div",{className:"faq-answer ppc-faq-answer",children:t.a})]},i))}),(0,a.jsx)("div",{className:"faq-col",children:b.slice(3,6).map((t,i)=>(0,a.jsxs)("div",{className:"faq-item",children:[(0,a.jsxs)("div",{className:"faq-question",onClick:()=>r(i+3),children:[(0,a.jsx)("span",{children:t.q}),(0,a.jsx)("span",{className:"icon",children:e===i+3?"\u2212":"+"})]}),e===i+3&&(0,a.jsx)("div",{className:"faq-answer ppc-faq-answer",children:t.a})]},i+3))})]})]})]})}function S(){return(0,i.useEffect)(()=>{let e="pcs-smm-styles";if(!document.getElementById(e)){let t=document.createElement("style");t.id=e,t.textContent=h,document.head.appendChild(t)}return()=>{}},[]),(0,a.jsxs)(d.A,{children:[(0,a.jsxs)(g.A,{children:[(0,a.jsx)("title",{children:"Ecommerce & Marketplace Marketing Agency in India | PCS"}),(0,a.jsx)("meta",{name:"description",content:"Increase ecommerce sales with our marketplace and ecommerce marketing services. From ecommerce SEO to listing optimization, PCS drives scalable growth. "}),(0,a.jsx)("meta",{name:"keywords",content:"Social Media Marketing, SMM Services, Social Media Marketing Agency, Social Media Advertising, Social Media Marketing Services, Social Media Marketing Company, Social Media Management Agency, Social Media Management Services, Social Media Marketing Companies"}),(0,a.jsx)("link",{rel:"canonical",href:"https://www.priyamconsultancy.com/marketplace-ecommerce-marketing"}),(0,a.jsx)("meta",{property:"og:title",content:"Ecommerce & Marketplace Marketing Agency in India | PCS"}),(0,a.jsx)("meta",{property:"og:description",content:"Increase ecommerce sales with our marketplace and ecommerce marketing services. From ecommerce SEO to listing optimization, PCS drives scalable growth. "}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:url",content:"https://www.priyamconsultancy.com/marketplace-ecommerce-marketing"}),(0,a.jsx)("meta",{property:"og:image",content:"https://www.priyamconsultancy.com/img/marketplace-ecommerce-marketing.png"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:title",content:"Ecommerce & Marketplace Marketing Agency in India | PCS"}),(0,a.jsx)("meta",{name:"twitter:description",content:"Increase ecommerce sales with our marketplace and ecommerce marketing services. From ecommerce SEO to listing optimization, PCS drives scalable growth. "}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://www.priyamconsultancy.com/img/marketplace-ecommerce-marketing.png"}),(0,a.jsx)("script",{type:"application/ld+json",children:JSON.stringify([{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":"https://www.priyamconsultancy.com/",name:"Home"}},{"@type":"ListItem",position:2,item:{"@id":"https://www.priyamconsultancy.com/marketplace-ecommerce-marketing/",name:"marketplace-ecommerce-marketing"}}]},{"@context":"https://schema.org","@type":"Organization",name:"Priyam Consultancy Services",url:"https://www.priyamconsultancy.com/",logo:"https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png",contactPoint:[{"@type":"ContactPoint",telephone:"+91 96774 44048",contactType:"customer support"}],sameAs:["https://www.facebook.com/profile.php?id=61577125709962","https://www.linkedin.com/company/priyam-consultancy-services/","https://www.instagram.com/priyam_consultancy_services/","https://x.com/services91032","https://g.co/kgs/rdTYdi6"]},{"@context":"https://schema.org","@type":"Service","@id":"https://www.priyamconsultancy.com/marketplace-ecommerce-marketing/#service",name:"Marketplace Ecommerce Marketing",serviceType:"Marketplace Ecommerce Marketing Services",url:"https://www.priyamconsultancy.com/marketplace-ecommerce-marketing/",description:"Priyam Consultancy provides professional marketplace ecommerce marketing services including Amazon marketing, Flipkart marketing, product listing optimization, ecommerce advertising, marketplace management and online sales growth services across India.",provider:{"@type":"Organization",name:"Priyam Consultancy Services",url:"https://www.priyamconsultancy.com/",logo:{"@type":"ImageObject",url:"https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png"}},areaServed:{"@type":"Country",name:"India"}},{"@context":"https://schema.org/","@type":"Product",name:"marketplace-ecommerce-marketing",image:["https://www.priyamconsultancy.com/img/marketplace-ecommerce-marketing.png"],description:"Best marketplace ecommerce marketing services in Coimbatore offering Amazon marketing, Flipkart marketing, marketplace listing optimization, ecommerce SEO, Amazon PPC management, conversion optimization and online sales growth solutions.",brand:{"@type":"Brand",name:"Priyam Consultancy Services"},review:{"@type":"Review",reviewRating:{"@type":"Rating",ratingValue:"4.9",bestRating:"5",worstRating:"1"},author:{"@type":"Person",name:"Admin"}},aggregateRating:{"@type":"AggregateRating",ratingValue:"4.9",reviewCount:"4428"},offers:{"@type":"Offer",url:"https://www.priyamconsultancy.com/marketplace-ecommerce-marketing/",priceCurrency:"USD",price:"00.00",priceValidUntil:"2026-12-31",itemCondition:"https://schema.org/UsedCondition",availability:"https://schema.org/InStock",seller:{"@type":"Organization",name:"priyamconsultancy.com"}}},{"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"What does an ecommerce marketing service include?",acceptedAnswer:{"@type":"Answer",text:"Ecommerce marketing services include SEO, product listing optimization, performance marketing, marketplace management, social media promotion, email marketing, conversion optimization, and analytics tracking. The goal is to improve product visibility, increase traffic, generate sales, and strengthen overall online store performance effectively."}},{"@type":"Question",name:"How can ecommerce SEO improve my sales?",acceptedAnswer:{"@type":"Answer",text:"Ecommerce SEO improves product visibility on search engines by optimizing product pages, keywords, technical structure, and user experience. Better search rankings attract high-intent customers, increase organic traffic, improve product discoverability, and contribute to higher conversions and long-term online sales growth."}},{"@type":"Question",name:"What is marketplace listing optimization?",acceptedAnswer:{"@type":"Answer",text:"Marketplace listing optimization involves improving product titles, descriptions, keywords, images, attributes, and overall listing structure on platforms like Amazon and Flipkart. This helps products rank better in marketplace searches, attract more customers, improve click-through rates, and increase overall sales performance."}},{"@type":"Question",name:"Can you help increase sales on multiple marketplaces?",acceptedAnswer:{"@type":"Answer",text:"Yes, we help businesses improve visibility and sales across multiple marketplaces including Amazon, Flipkart, Meesho, and other ecommerce platforms. Our strategies focus on listing optimization, advertising, pricing analysis, content improvement, and performance tracking to maximize marketplace growth and conversions."}},{"@type":"Question",name:"Do you provide Amazon PPC services?",acceptedAnswer:{"@type":"Answer",text:"Yes, we manage Amazon PPC campaigns focused on improving product visibility, increasing conversions, and maximizing advertising efficiency. Our services include keyword targeting, campaign optimization, bid management, competitor analysis, and performance tracking to improve return on advertising spend and marketplace sales performance."}},{"@type":"Question",name:"How does PCS help ecommerce brands grow?",acceptedAnswer:{"@type":"Answer",text:"PCS helps ecommerce brands grow through SEO, marketplace optimization, paid advertising, conversion-focused strategies, content marketing, and performance analytics. Our approach focuses on improving visibility, customer engagement, operational efficiency, and sales scalability to support sustainable long-term ecommerce business growth."}}]}])})]}),(0,a.jsx)(v,{}),(0,a.jsx)(w,{}),(0,a.jsx)(p,{}),(0,a.jsx)(k,{}),(0,a.jsx)(z,{}),(0,a.jsx)(N,{}),(0,a.jsx)(n.A,{}),(0,a.jsx)(o.A,{})]})}}}]);