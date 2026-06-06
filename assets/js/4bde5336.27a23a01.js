"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["4504"],{3177(e,t,r){r.d(t,{A:()=>o});var i=r(4848),a=r(6540);let n=`https://corsproxy.io/?${encodeURIComponent("https://www.priyamconsultancy.com/blog/feed/")}`;function o(){let[e,t]=(0,a.useState)([]),[r,o]=(0,a.useState)(!0),[s,c]=(0,a.useState)(null);return(0,a.useEffect)(()=>{fetch(n).then(e=>{if(!e.ok)throw Error(`HTTP ${e.status}`);return e.text()}).then(e=>{t(Array.from(new DOMParser().parseFromString(e,"text/xml").querySelectorAll("item")).slice(0,3).map(e=>{let t=e.querySelector("enclosure"),r=e.getElementsByTagNameNS("http://search.yahoo.com/mrss/","content")[0],i=e.getElementsByTagNameNS("http://search.yahoo.com/mrss/","thumbnail")[0],a=e.getElementsByTagNameNS("http://purl.org/rss/1.0/modules/content/","encoded")[0],n=a?.textContent||"",o=n.match(/<img[^>]+src=["']([^"']+)["']/i),s=e.querySelector("description")?.textContent||"",c=s.match(/<img[^>]+src=["']([^"']+)["']/i),l=t?.getAttribute("url")||r?.getAttribute("url")||i?.getAttribute("url")||o?.[1]||c?.[1]||null,d=(n||s).replace(/<[^>]*>/g,"").replace(/&[^;]+;/g," ").trim(),p=d.length>340?d.slice(0,340)+"...":d,m=e.getElementsByTagName("link")[0],g=m?.textContent?.trim()||e.querySelector("guid")?.textContent||"#";return{guid:e.querySelector("guid")?.textContent||Math.random().toString(),title:e.querySelector("title")?.textContent?.trim()||"Untitled",link:g,thumbnail:l,excerpt:p}})),o(!1)}).catch(e=>{c(e.message),o(!1)})},[]),(0,i.jsxs)("section",{style:{width:"100%",padding:"4rem 1rem",boxSizing:"border-box",background:"#fff"},children:[(0,i.jsxs)("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[(0,i.jsxs)("div",{style:{textAlign:"center",marginBottom:"2.5rem"},children:[(0,i.jsx)("h2",{style:{fontSize:"2rem",fontWeight:700,margin:"0 0 0.5rem",color:"#111"},children:"Blogs"}),(0,i.jsx)("p",{style:{color:"#666",margin:0,fontSize:"1rem"},children:"Stay updated with the latest in digital marketing, growth strategies, and industry trends."})]}),r&&(0,i.jsx)("p",{style:{textAlign:"center",color:"#888"},children:"Loading..."}),s&&(0,i.jsxs)("p",{style:{textAlign:"center",color:"red"},children:["Error: ",s]}),(0,i.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1.5rem"},className:"blog-grid",children:e.map(e=>(0,i.jsxs)("a",{href:e.link,target:"_blank",rel:"noreferrer",style:{border:"1px solid #e5e7eb",borderRadius:"12px",overflow:"hidden",background:"#fff",display:"flex",flexDirection:"column",textDecoration:"none",color:"inherit",transition:"box-shadow 0.2s, transform 0.2s",cursor:"pointer"},onMouseEnter:e=>{e.currentTarget.style.boxShadow="0 8px 24px rgba(0,0,0,0.12)",e.currentTarget.style.transform="translateY(-3px)"},onMouseLeave:e=>{e.currentTarget.style.boxShadow="none",e.currentTarget.style.transform="translateY(0)"},children:[(0,i.jsx)("div",{style:{width:"100%",aspectRatio:"16/9",overflow:"hidden",background:"#1a2744"},children:e.thumbnail?(0,i.jsx)("img",{src:e.thumbnail,alt:e.title,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):(0,i.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",opacity:.4,fontSize:"0.8rem"},children:"No image"})}),(0,i.jsxs)("div",{style:{padding:"1.25rem",display:"flex",flexDirection:"column",gap:"0.75rem"},children:[(0,i.jsx)("p",{style:{fontWeight:600,fontSize:"1.1rem",lineHeight:1.6,margin:0,color:"#111"},children:e.title}),(0,i.jsx)("p",{style:{color:"#444",fontSize:"0.875rem",lineHeight:1.6,flex:1,margin:0},children:e.excerpt}),(0,i.jsx)("span",{style:{display:"inline-block",background:"#E87C30",color:"#fff",padding:"0.6rem 1.5rem",borderRadius:"999px",fontWeight:500,alignSelf:"flex-start",marginTop:"0.5rem",fontSize:"0.875rem"},children:"Read More"})]})]},e.guid))})]}),(0,i.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        @media (max-width: 1024px) { .blog-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px)  { .blog-grid { grid-template-columns: 1fr !important; } }
      `}})]})}},9393(e,t,r){r.d(t,{A:()=>n});var i=r(4848),a=r(6540);let n=function(){let e=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let t=e.current;if(!t)return;let r=t.getContext("2d"),i="#ed8337",a,n,o=[],s;function c(){a=t.width=t.parentElement.offsetWidth,n=t.height=t.parentElement.offsetHeight}function l(){this.reset()}l.prototype.reset=function(){this.x=Math.random()*a,this.y=Math.random()*n,this.r=2.2*Math.random()+.6,this.type=.55>Math.random()?"dot":.5>Math.random()?"ring":"plus",this.speed=.35*Math.random()+.08,this.dir=Math.random()*Math.PI*2,this.alpha=.45*Math.random()+.1,this.pulse=Math.random()*Math.PI*2,this.pulseSpeed=.018*Math.random()+.008,this.size=4*Math.random()+2},l.prototype.update=function(){this.x+=Math.cos(this.dir)*this.speed,this.y+=Math.sin(this.dir)*this.speed,this.pulse+=this.pulseSpeed,this.dir+=(Math.random()-.5)*.015,this.x<-20&&(this.x=a+20),this.x>a+20&&(this.x=-20),this.y<-20&&(this.y=n+20),this.y>n+20&&(this.y=-20)},l.prototype.draw=function(){let e=this.alpha*(.7+.3*Math.sin(this.pulse));if(r.save(),r.globalAlpha=e,r.strokeStyle=r.fillStyle=i,r.lineWidth=1,"dot"===this.type)r.beginPath(),r.arc(this.x,this.y,this.r+.4*Math.sin(this.pulse),0,2*Math.PI),r.fill();else if("ring"===this.type){let e=this.size*(.9+.15*Math.sin(this.pulse));r.beginPath(),r.arc(this.x,this.y,e,0,2*Math.PI),r.stroke()}else{let e=this.size*(.9+.1*Math.sin(this.pulse));r.beginPath(),r.moveTo(this.x-e,this.y),r.lineTo(this.x+e,this.y),r.moveTo(this.x,this.y-e),r.lineTo(this.x,this.y+e),r.stroke()}r.restore()},window.addEventListener("resize",c),c(),o=[];let d=Math.floor(a*n/9e3);for(let e=0;e<Math.max(d,28);e++)o.push(new l);return!function e(){r.clearRect(0,0,a,n),function(){let e=o.filter(e=>"dot"===e.type);for(let t=0;t<e.length;t++)for(let a=t+1;a<e.length;a++){let n=e[t].x-e[a].x,o=e[t].y-e[a].y,s=Math.sqrt(n*n+o*o);s<110&&(r.save(),r.globalAlpha=(1-s/110)*.12,r.strokeStyle=i,r.lineWidth=.7,r.beginPath(),r.moveTo(e[t].x,e[t].y),r.lineTo(e[a].x,e[a].y),r.stroke(),r.restore())}}(),o.forEach(e=>{e.update(),e.draw()}),s=requestAnimationFrame(e)}(),()=>{cancelAnimationFrame(s),window.removeEventListener("resize",c)}},[]),(0,i.jsx)("section",{id:"cta-final",children:(0,i.jsxs)("div",{className:"cta-banner",style:{"--glow-x":"50%","--glow-y":"50%"},children:[(0,i.jsx)("canvas",{id:"ctaCanvas",ref:e}),(0,i.jsxs)("div",{className:"cta-banner-left",children:[(0,i.jsx)("div",{className:"partners-header",children:(0,i.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Ready to Start?"})}),(0,i.jsxs)("h2",{className:"cta-banner-heading",children:["Let's Talk About Your",(0,i.jsx)("br",{}),"Next Big ",(0,i.jsx)("span",{className:"hl-italic",children:"Growth Move"})]}),(0,i.jsx)("p",{className:"cta-banner-sub",children:"No pressure. Just a quick conversation to understand where you are-and how we can help you move forward."})]}),(0,i.jsxs)("div",{className:"cta-banner-right",children:[(0,i.jsxs)("a",{href:"#",className:"cta-bprimary",children:["Book a Free Consultation",(0,i.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",children:(0,i.jsx)("path",{d:"M3 8h10M9 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,i.jsx)("a",{href:"#",className:"cta-bghost",children:"View All Services"})]})]})})}},9799(e,t,r){r.r(t),r.d(t,{default:()=>A});var i=r(4848),a=r(6540),n=r(9393),o=r(8128),s=r(3177),c=r(1085),l=r(3572);function d(){let e="https://www.priyamconsultancy.com/img/website-development.png";return(0,i.jsxs)(l.A,{children:[(0,i.jsx)("title",{children:"Best Website Development Services in Coimbatore | Experts   "}),(0,i.jsx)("meta",{name:"description",content:"Professional website development services in Coimbatore. We build fast, SEO-friendly, responsive websites that boost brand presence and business growth. Visit us! "}),(0,i.jsx)("meta",{name:"keywords",content:"Website Development, Website Development Company in Coimbatore, Web Development Services in Coimbatore, Web Development Company in Coimbatore, Website Development Services in Coimbatore, Website Design & Development in Coimbatore, Website Design Services in Coimbatore "}),(0,i.jsx)("link",{rel:"canonical",href:"https://www.priyamconsultancy.com/website-development/"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:title",content:"Best Website Development Services in Coimbatore | Experts   "}),(0,i.jsx)("meta",{property:"og:description",content:"Professional website development services in Coimbatore. We build fast, SEO-friendly, responsive websites that boost brand presence and business growth. Visit us! "}),(0,i.jsx)("meta",{property:"og:url",content:"https://www.priyamconsultancy.com/website-development/"}),(0,i.jsx)("meta",{property:"og:image",content:e}),(0,i.jsx)("meta",{property:"og:site_name",content:"PCS Business Solution"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:title",content:"Best Website Development Services in Coimbatore | Experts   "}),(0,i.jsx)("meta",{name:"twitter:description",content:"Professional website development services in Coimbatore. We build fast, SEO-friendly, responsive websites that boost brand presence and business growth. Visit us! "}),(0,i.jsx)("meta",{name:"twitter:image",content:e}),(0,i.jsx)("script",{type:"application/ld+json",children:`
       {
        "@context":"https://schema.org",
        "@type":"BreadcrumbList",
        "itemListElement":[
          {
            "@type":"ListItem",
            "position":1,
            "item":{
              "@id":"https://www.priyamconsultancy.com/",
              "name":"Home"
            }
          },
          {
            "@type":"ListItem",
            "position":2,
            "item":{
              "@id":"https://www.priyamconsultancy.com/website-development/",
              "name":"website-development"
            }
          }
        ]
        }


      `}),(0,i.jsx)("script",{type:"application/ld+json",children:`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Priyam Consultancy Services",
          "url": "https://www.priyamconsultancy.com/",
          "logo": "https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+91 96774 44048",
              "contactType": "customer support"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/profile.php?id=61577125709962",
            "https://www.linkedin.com/company/priyam-consultancy-services/",
            "https://www.instagram.com/priyam_consultancy_services/",
            "https://x.com/services91032",
            "https://g.co/kgs/rdTYdi6"
          ]
          }

      `}),(0,i.jsx)("script",{type:"application/ld+json",children:`
        {
          "@context":"https://schema.org",
          "@type":"Service",
          "@id":"https://www.priyamconsultancy.com/website-development/#service",
          "name":"Website Development",
          "serviceType":"Website Development Services",
          "url":"https://www.priyamconsultancy.com/website-development/",
          "description":"Priyam Consultancy provides professional website development services including custom website development, responsive web design, business websites, CMS development, e-commerce development and scalable web solutions for businesses across India.",
          "provider":{
            "@type":"Organization",
            "name":"Priyam Consultancy Services",
            "url":"https://www.priyamconsultancy.com/",
            "logo":{
              "@type":"ImageObject",
              "url":"https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png"
            }
          },
          "areaServed":{
            "@type":"Country",
            "name":"India"
          }
        }

      `}),(0,i.jsx)("script",{type:"application/ld+json",children:`
      {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "website-development",
        "image": ["https://www.priyamconsultancy.com/img/website-development.png"],
        "description": "Best website development services in Coimbatore offering business website development, corporate websites, ecommerce websites, custom web applications, responsive website design and SEO-friendly web development solutions.",
        "brand": {
        "@type": "Brand",
        "name": "Priyam Consultancy Services"
        },
        "review": {
        "@type": "Review",
        "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1"
        },
        "author": {
        "@type": "Person",
        "name": "Admin"
        }
        },
        "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "4836"
        },
        "offers": {
        "@type": "Offer",
        "url": "https://www.priyamconsultancy.com/website-development/",
        "priceCurrency": "USD",
        "price": "00.00",
        "priceValidUntil": "2026-12-31",
        "itemCondition": "https://schema.org/UsedCondition",
        "availability": "https://schema.org/InStock",
        "seller": {
        "@type": "Organization",
        "name": "priyamconsultancy.com"
        }
        }
        }

      `}),(0,i.jsx)("script",{type:"application/ld+json",children:`
       { 
          "@context": "https://schema.org", 
          "@type": "FAQPage", 
          "mainEntity": [{ 
            "@type": "Question", 
            "name": "What website development services do you offer?", 
            "acceptedAnswer": { 
              "@type": "Answer", 
              "text": "We offer website design, static website development, custom website development, WooCommerce website development, Shopify website development, and custom e-commerce solutions based on your business needs. 
        " 
            } 
          },{ 
            "@type": "Question", 
            "name": "Will my website be mobile-friendly and SEO-ready?", 
            "acceptedAnswer": { 
              "@type": "Answer", 
              "text": "Yes. We build responsive websites that work smoothly on all devices and follow SEO best practices such as clean structure, optimized content, and fast performance." 
            }
          },{ 
            "@type": "Question", 
            "name": "Can you integrate payment gateways, WhatsApp, CRM, or other tools?", 
            "acceptedAnswer": { 
              "@type": "Answer", 
              "text": "Yes. We can connect your website with the tools your business needs, including payment gateways, WhatsApp chat, CRM systems, and other third-party integrations." 
            } 
          },{ 
            "@type": "Question", 
            "name": "Do you also help with content and SEO??", 
            "acceptedAnswer": { 
              "@type": "Answer", 
              "text": "Yes. We provide content support and on-page SEO services to help your website communicate clearly and perform better in search results." 
            } 
        },{ 
            "@type": "Question", 
            "name": "What kind of businesses do you build websites for?", 
            "acceptedAnswer": { 
              "@type": "Answer", 
              "text": "We build websites for startups, small businesses, service companies, ecommerce brands, and growing enterprises that want a strong online presence." 
            } 
        },{ 
            "@type": "Question", 
            "name": "What is included in your website development service?", 
            "acceptedAnswer": { 
              "@type": "Answer", 
              "text": "Our website development service typically includes planning, design, development, responsive setup, basic SEO implementation, integrations, testing, and launch support." 
            } 
            }] 
        }

      `})]})}let p=`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap');

  :root {
    --navy: #022b44; --navy-deep: #011a2a; --navy-mid: #0a3652;
    --orange: #ed8337; --orange-light: #f5a66b;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { overflow-x: hidden; }

 .container {
 width:100%; 
 }
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
    align-items:center; gap:2rem; padding:4rem 6% 4rem;
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

  /* \u{2550}\u{2550} OUR APPROACH SECTION \u{2550}\u{2550} */
  .wd-approach { position:relative; padding:5rem 6%; overflow:hidden;  }
  .wd-ap-inner { position:relative; z-index:2; margin:0 auto; display:grid; grid-template-columns:1fr 0.75fr; gap:4rem; align-items:center; }
  .wd-ap-eyebrow { display:inline-flex; align-items:center; gap:.55rem; font-family:'Space Mono',monospace; font-size:.7rem; font-weight:700; color:var(--orange); letter-spacing:.13em; text-transform:uppercase; margin-bottom:1.1rem; }
  .wd-ap-eyebrow-line { width:24px; height:2px; background:var(--orange); border-radius:2px; }
  .wd-ap-heading { font-family:'Poppins',sans-serif; font-size:clamp(1.8rem,2.8vw,2.5rem); line-height:1.12; margin-bottom:1.2rem; font-weight:700;color:#000; }
  .wd-ap-heading span { color:var(--orange); }
  .wd-ap-intro { font-size:1rem; line-height:1.8;  margin-bottom:1.4rem; color:#000; }
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
  h3.faq-h3 {font-size:2.5rem; color:#000;}
  /* \u{2550}\u{2550} SERVICES ACCORDION \u{2550}\u{2550} */
  .svc-section {
    position:relative; overflow:hidden;
    background:#004168;
    padding:7rem 6% 8rem;
  }
  .svc-section::before { content:''; position:absolute; inset:0; pointer-events:none; background-image:linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px); background-size:60px 60px; }
  .svc-section::after { content:''; position:absolute; inset:0; pointer-events:none; background:radial-gradient(ellipse 50% 60% at 90% 10%,rgba(237,131,55,0.09) 0%,transparent 60%),radial-gradient(ellipse 45% 55% at 5% 90%,rgba(96,165,250,0.07) 0%,transparent 55%); }
  .svc-layout { position:relative; z-index:2;  margin:0 auto; display:grid; grid-template-columns:1fr 1.1fr; gap:5rem; align-items:start; }
  .svc-right-col { position:sticky; top:110px; }
  .svc-eyebrow { display:inline-flex; align-items:center; gap:.55rem; font-family:'Space Mono',monospace; font-size:.7rem; font-weight:700; color:var(--orange); letter-spacing:.13em; text-transform:uppercase; margin-bottom:1.1rem; }
  .svc-eyebrow-line { width:24px; height:2px; background:var(--orange); border-radius:2px; }
  .svc-heading { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3vw,3rem); font-weight:600; line-height:1.1;  color:#fff; margin-bottom:1rem; }
  .svc-heading .accent { color:var(--orange); }
  .svc-sub { font-size:.97rem; color:#ffffffe3; line-height:1.78; margin-bottom:2.2rem; max-width:440px; }
  .svc-count-row { display:flex; gap:1rem; margin-bottom:2.4rem; flex-wrap:wrap; }
  .svc-count-pill { display:flex; flex-direction:column; align-items:center; background:rgba(255,255,255,0.05); border-radius:14px; padding:.8rem 1.4rem; border:1px solid rgba(255,255,255,0.1); backdrop-filter:blur(10px); }
  .svc-count-num { font-family:'Poppins',sans-serif; font-size:1.8rem; font-weight:800; color:var(--orange); line-height:1; }
  .svc-count-lbl { font-size:.72rem; color:rgba(255,255,255,0.4); margin-top:.2rem; font-weight:600; letter-spacing:.04em; }
  .svc-cta-btn { display:inline-flex; align-items:center; gap:.5rem; background:var(--orange); color:#fff; padding:.88rem 2rem; border-radius:50px; font-family:'Poppins',sans-serif; font-size:.92rem; font-weight:700; text-decoration:none; transition:all .22s; box-shadow:0 4px 20px rgba(237,131,55,.3); }
  .svc-cta-btn:hover { background:var(--orange-light); transform:translateY(-2px); box-shadow:0 8px 28px rgba(237,131,55,.45); }
  .svc-accordion { display:flex; flex-direction:column; gap:.75rem; }
  .acc-item { border-radius:18px; border:1px solid rgba(255,255,255,0.08); background:rgba(255,255,255,0.04); backdrop-filter:blur(12px); overflow:hidden; transition:border-color .3s,box-shadow .3s,background .3s; }
  .acc-item.open { border-color:rgba(237,131,55,0.35); background:linear-gradient(145deg, rgba(10, 54, 82, 0.55), rgb(76 186 235 / 23%)); box-shadow:0 8px 40px rgba(0,0,0,0.3),0 0 0 1px rgba(237,131,55,0.1); }
  .acc-header { display:flex; align-items:center; gap:1.2rem; padding:1.15rem 1.5rem; cursor:pointer; user-select:none; position:relative; }
  .acc-num { font-family:'Space Mono',monospace; font-size:.68rem; font-weight:700; color:rgba(255,255,255,0.25); letter-spacing:.1em; min-width:28px; transition:color .3s; }
  .acc-item.open .acc-num { color:var(--orange); }
  .acc-icon { width:42px; height:42px; border-radius:12px; flex-shrink:0; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; font-size:1.1rem; transition:background .3s,border-color .3s,transform .4s cubic-bezier(.34,1.3,.64,1); }
  .acc-item.open .acc-icon { background:rgba(237,131,55,0.18); border-color:rgba(237,131,55,0.3); transform:scale(1.08) rotate(-5deg); }
  .acc-title { font-family:'Poppins',sans-serif; font-size:.98rem; font-weight:700; color:rgba(255,255,255,0.75); flex:1; transition:color .3s; }
  .acc-item.open .acc-title { color: #ed8337; }
  .acc-item.open  { opacity:1; }
  .acc-arrow { width:28px; height:28px; border-radius:50%; flex-shrink:0; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; font-size:.75rem; color:rgba(255,255,255,0.4); transition:transform .4s cubic-bezier(.34,1.3,.64,1),background .3s,color .3s,border-color .3s; }
  .acc-item.open .acc-arrow { transform:rotate(180deg); background:rgba(237,131,55,0.2); border-color:rgba(237,131,55,0.3); color:var(--orange); }
  .acc-body { max-height:0; overflow:hidden; transition:max-height .48s cubic-bezier(.4,0,.2,1),padding .3s; padding:0 1.5rem; }
  .acc-item.open .acc-body { max-height:240px; padding-bottom:1.5rem; }
  .acc-divider { height:1px; background:linear-gradient(90deg,rgba(237,131,55,0.3),rgba(237,131,55,0)); margin-bottom:1.1rem; }
  .acc-desc { font-family:'Poppins',sans-serif; font-size:.91rem; line-height:2.1; color:rgb(255, 255, 255); padding-left:calc(28px + 42px + 1.2rem + 1.2rem); }

  /* \u{2550}\u{2550} PROCESS \u{2014} FIXED \u{2550}\u{2550} */
  .proc-section { position:relative; padding:7rem 6% 8rem; background:#ffffff; overflow:hidden; }
  .proc-section::before { content:''; position:absolute; inset:0; pointer-events:none; background-image:radial-gradient(circle,rgba(2,43,68,0.07) 1px,transparent 1px); background-size:28px 28px; z-index:0; }
  .proc-section::after { content:''; position:absolute; inset:0; pointer-events:none; background:radial-gradient(ellipse 55% 45% at 15% 10%,rgba(237,131,55,0.06) 0%,transparent 65%),radial-gradient(ellipse 50% 50% at 85% 90%,rgba(2,43,68,0.05) 0%,transparent 60%); z-index:0; }
  .proc-inner { position:relative; z-index:2; max-width:1240px; margin:0 auto; }
  .proc-header { text-align:center; margin-bottom:4rem; }
  .proc-eyebrow { display:inline-flex; align-items:center; gap:.5rem; font-size:.74rem; font-weight:700; color:var(--orange); letter-spacing:.12em; text-transform:uppercase; margin-bottom:1rem; }
  .proc-eyebrow-line { width:26px; height:2px; background:var(--orange); border-radius:2px; }
  .proc-heading { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3vw,2.6rem); font-weight:600; line-height:1.1; color:#000; margin-bottom:1rem; }
  .proc-heading span { color:var(--orange); }
  .proc-sub { font-size:.97rem; color:#000; margin:0 auto; line-height:1.78; }

  /* \u{2500}\u{2500} Process 3-col layout \u{2500}\u{2500} */
  .proc-cols { display:grid; grid-template-columns:1fr 300px 1fr; gap:4rem; align-items:stretch; }
  .proc-mockup-wrap { align-self:center; }

  /* \u{2500}\u{2500} Process cards \u{2014} FIXED sizes & alignment \u{2500}\u{2500} */
  .proc-points { display:flex; flex-direction:column; gap:1.2rem; justify-content:space-between; height:100%; }

  .proc-point {
    display:flex; align-items:flex-start; gap:.9rem;
    padding:1rem 1.1rem; border-radius:14px;
    border:1px solid rgba(2,43,68,0.08); background:#fff;
    box-shadow:0 2px 12px rgba(0,0,0,0.05);
    transition:transform .28s,box-shadow .28s,border-color .28s;
    cursor:default; width:100%;
  }
  .proc-point:hover { transform:translateY(-3px); box-shadow:0 8px 28px rgba(237,131,55,0.12); border-color:rgba(237,131,55,0.3); }

  /* left column \u{2014} icon on right, text on left */
  .proc-points.left { width:100%; }
  .proc-points.left .proc-point { flex-direction:row-reverse; text-align:right; }
  .proc-points.left .proc-point-text { align-items:flex-end; }

  /* right column \u{2014} icon on left, text on right */
  .proc-points.right .proc-point { flex-direction:row; text-align:left; }
  .proc-points.right .proc-point-text { align-items:flex-start; }

  .proc-icon {
    flex-shrink:0; width:38px; height:38px; min-width:38px;
    border-radius:10px; background:rgba(237,131,55,0.1);
    color:var(--orange); display:flex; align-items:center;
    justify-content:center; font-size:1rem; transition:background .28s;
  }
  .proc-point:hover .proc-icon { background:#ed833736; }

  .proc-point-text { display:flex; flex-direction:column; flex:1; min-width:0; }
  .proc-pt-num { font-family:'Space Mono',monospace; font-size:.6rem; font-weight:700; color:var(--orange); letter-spacing:.08em; text-transform:uppercase; margin-bottom:.2rem; }
  .proc-pt-title { font-family:'Poppins',sans-serif; font-size:1.1rem; font-weight:700; color:#0d1f2d; margin-bottom:.18rem; line-height:1.3; }
  .proc-pt-desc { font-size:.89rem; line-height:1.6; font-family:'Poppins'; color:#000000d9; }

  /* center mockup */
  .proc-mockup-wrap { display:flex; flex-direction:column; align-items:center; justify-content:center; position:relative; }
  .proc-mockup-wrap::before { content:''; position:absolute; width:240px; height:240px; border-radius:50%; background:radial-gradient(circle,rgba(237,131,55,0.12) 0%,transparent 70%); animation:proc-glow 3s ease-in-out infinite; z-index:0; }
  @keyframes proc-glow{0%,100%{transform:scale(1);opacity:.7;}50%{transform:scale(1.2);opacity:1;}}
  .proc-screen { position:relative; z-index:2; width:260px; background:#0d1f2d; border-radius:16px; border:2px solid rgba(237,131,55,0.3); box-shadow:0 24px 64px rgba(0,0,0,0.22),0 0 0 6px rgba(237,131,55,0.06); overflow:hidden; }
  .proc-browser-bar { background:#1a2d3e; padding:.5rem .85rem; display:flex; align-items:center; gap:.4rem; border-bottom:1px solid rgba(237,131,55,0.15); }
  .pb-dot { width:8px; height:8px; border-radius:50%; }
  .pb-d1{background:#ff5f57;} .pb-d2{background:#ffbd2e;} .pb-d3{background:#28c840;}
  .proc-url-bar { flex:1; margin-left:.5rem; background:rgba(255,255,255,0.06); border-radius:5px; padding:.22rem .7rem; font-family:'Space Mono',monospace; font-size:.56rem; color:rgba(255,255,255,0.4); }
  .proc-site-body { padding:.7rem; }
  .ps-hero { background:linear-gradient(135deg,#022b44,#0a3652); border-radius:8px; padding:.7rem .85rem; margin-bottom:.6rem; position:relative; overflow:hidden; }
  .ps-hero::after { content:''; position:absolute; right:-20px; top:-20px; width:80px; height:80px; border-radius:50%; background:rgba(237,131,55,0.2); animation:proc-glow 2.5s ease-in-out infinite; }
  .ps-hero-tag { font-family:'Space Mono',monospace; font-size:.48rem; color:var(--orange); letter-spacing:.1em; text-transform:uppercase; margin-bottom:.3rem; }
  .ps-hero-h { font-family:'Poppins',sans-serif; font-size:.65rem; font-weight:800; color:#fff; line-height:1.3; margin-bottom:.4rem; }
  .ps-hero-btn { display:inline-block; background:var(--orange); color:#022b44; font-family:'Poppins',sans-serif; font-size:.48rem; font-weight:700; padding:.22rem .55rem; border-radius:10px; }
  .ps-nav { display:flex; align-items:center; gap:.35rem; margin-bottom:.6rem; padding:.3rem .4rem; background:#f7f9fc; border-radius:6px; }
  .ps-nav-logo { width:18px; height:18px; border-radius:4px; background:var(--orange); font-family:'Poppins',sans-serif; font-size:.45rem; font-weight:800; color:#022b44; display:flex; align-items:center; justify-content:center; }
  .ps-nav-links { display:flex; gap:.3rem; margin-left:.3rem; }
  .ps-nav-link { width:22px; height:4px; border-radius:2px; background:rgba(2,43,68,0.15); }
  .ps-nav-link.active { background:var(--orange); }
  .ps-nav-btn-sm { margin-left:auto; background:var(--orange); border-radius:4px; padding:.15rem .35rem; font-family:'Space Mono',monospace; font-size:.45rem; color:#022b44; font-weight:700; }
  .ps-cards { display:grid; grid-template-columns:1fr 1fr 1fr; gap:.45rem; margin-bottom:.6rem; }
  .ps-card { background:#fff; border-radius:7px; padding:.5rem .5rem; border:1px solid rgba(2,43,68,0.08); }
  .ps-card-icon { width:20px; height:20px; border-radius:5px; background:rgba(237,131,55,0.12); display:flex; align-items:center; justify-content:center; font-size:.6rem; margin-bottom:.3rem; }
  .ps-card-line { height:3px; border-radius:2px; margin-bottom:.2rem; }
  .ps-card-line.w100{width:100%;background:rgba(2,43,68,0.12);} .ps-card-line.w70{width:70%;background:rgba(2,43,68,0.08);}
  .proc-badge { position:absolute; background:#fff; border-radius:8px; padding:.38rem .85rem; font-size:.62rem; font-family:'Space Mono',monospace; font-weight:700; color:var(--orange); border:1px solid rgba(237,131,55,0.2); box-shadow:0 4px 18px rgba(0,0,0,0.1); white-space:nowrap; z-index:10; }
  .pb-tl{top:-18px;left:-30px;animation:float1 3s ease-in-out infinite;}
  .pb-tr{top:-18px;right:-30px;animation:float2 3.4s .5s ease-in-out infinite;}
  .pb-bl{bottom:10px;left:-40px;animation:float1 2.8s 1s ease-in-out infinite;}
  .pb-br{bottom:10px;right:-40px;animation:float2 3.1s .3s ease-in-out infinite;}
    .proc-points.left .proc-point{flex-direction:row;text-align:left;}
    .proc-points.left .proc-point-text{align-items:flex-start;}
    .proc-mockup-wrap{margin:2rem 0;}
  }

  /* \u{2550}\u{2550} KEY FEATURES CAROUSEL \u{2014} FIXED CENTER ALIGN \u{2550}\u{2550} */
  .kf-section { position:relative; padding:4rem 0 6rem; overflow:hidden; background:#004168; }
  .kf-section::before { content:''; position:absolute; inset:0; pointer-events:none; background-image:linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px); background-size:55px 55px; }
  .kf-orbs { position:absolute; inset:0; pointer-events:none; z-index:0; }
  .kf-orb { position:absolute; border-radius:50%; filter:blur(80px); animation:kf-orb-drift 8s ease-in-out infinite alternate; }
  .kf-orb-1 { width:420px; height:420px; top:-80px; left:-60px; background:radial-gradient(circle,rgba(237,131,55,0.18) 0%,transparent 70%); }
  .kf-orb-2 { width:360px; height:360px; bottom:-60px; right:-40px; background:radial-gradient(circle,rgba(96,165,250,0.14) 0%,transparent 70%); animation-delay:-3s; }
  .kf-orb-3 { width:280px; height:280px; top:40%; left:40%; background:radial-gradient(circle,rgba(167,139,250,0.1) 0%,transparent 70%); animation-delay:-5s; }
  @keyframes kf-orb-drift{from{transform:translate(0,0) scale(1);}to{transform:translate(30px,20px) scale(1.1);}}

  .kf-inner { position:relative; z-index:2; width:100%; overflow:hidden;     background: #004168;
    padding: 4rem; }

  /* header centered */
  .kf-header { text-align:center; margin-bottom:1.8rem; padding:0 6%; }
  .kf-eyebrow { display:inline-flex; align-items:center; gap:.5rem; font-family:'Space Mono',monospace; font-size:.72rem; font-weight:700; color:var(--orange); letter-spacing:.13em; text-transform:uppercase; margin-bottom:1rem; }
  .kf-eyebrow-line { width:24px; height:2px; background:var(--orange); border-radius:2px; }
  .kf-title { font-family:'Poppins',sans-serif; font-size:clamp(2.2rem,3.4vw,3.4rem); font-weight:600; line-height:1.1; color:#fff; margin-bottom:1rem; }
  .kf-title span { color:var(--orange); }
  .kf-sub { font-size:.89rem; line-height:1.76; color:#fff; font-family:'Poppins'; }

  /* carousel: full width, cards centered via transform */
  .kf-carousel-wrap {
    position:relative;
    width:100%;
    height:400px;
    overflow:visible;
  }

  .kf-card {
    position:absolute;
    left:50%;
    top:50%;
    transform:translateX(-50%) translateY(-50%);
    width:340px;
    border-radius:26px;
    padding:2.2rem 1.8rem 1.8rem;
    display:flex; flex-direction:column; gap:1.1rem;
    background: linear-gradient(145deg, rgba(10, 54, 82, 0.55), rgb(76 186 235 / 23%));
    backdrop-filter:blur(22px) saturate(180%);
    border:1px solid rgba(255,255,255,0.14);
    box-shadow:0 8px 40px rgba(0,0,0,0.45),inset 0 1px 0 rgba(255,255,255,0.16);
    cursor:grab; user-select:none;
    transition:transform 0.55s cubic-bezier(.34,1.3,.64,1),opacity 0.45s ease,box-shadow 0.4s ease,border-color 0.3s ease,filter 0.45s ease;
    overflow:hidden; transform-origin:center center;
    filter: blur(2px) brightness(0.7);
  }
  .kf-card.is-active { filter: blur(0px) brightness(1); }
  .kf-card:active { cursor:grabbing; }
  .kf-card::before { content:''; position:absolute; top:0; left:10%; right:10%; height:1px; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.38),transparent); }
  .kf-card::after { content:''; position:absolute; width:200px; height:200px; border-radius:50%; background:radial-gradient(circle,rgba(237,131,55,0.15) 0%,transparent 70%); top:-80px; right:-60px; pointer-events:none; }
  .kf-icon-wrap { flex-shrink:0; width:56px; height:56px; border-radius:16px; background:linear-gradient(135deg,rgba(237,131,55,0.22) 0%,rgba(237,131,55,0.06) 100%); border:1px solid rgba(237,131,55,0.3); display:flex; align-items:center; justify-content:center; font-size:1.6rem; box-shadow:0 4px 18px rgba(237,131,55,0.18),inset 0 1px 0 rgba(255,255,255,0.15); transition:transform .4s cubic-bezier(.34,1.3,.64,1); }
  .kf-card.is-active .kf-icon-wrap { transform:scale(1.08) rotate(-5deg); }
  .kf-card-body { position:relative; z-index:1; flex:1; }
  .kf-card-title { font-family:'Poppins',sans-serif; font-size:1.05rem; font-weight:700; color: #ed8337; margin-bottom:.45rem; line-height:1.3; }
  .kf-card-desc { font-size:.89rem; line-height:1.76; color:#fff; font-family:'Poppins'; }
  .kf-card-accent { height:2px; border-radius:2px; margin-top:1rem; background:linear-gradient(90deg,var(--orange),rgba(237,131,55,0)); transition:width .6s ease .1s; }

  /* nav & dots \u{2014} centered */
  .kf-nav { display:flex; justify-content:center; align-items:center; gap:1.2rem; margin-top:2.4rem; padding:0 6%; }
  .kf-nav-btn { width:44px; height:44px; border-radius:50%; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.14); backdrop-filter:blur(10px); color:#fff; font-size:1.1rem; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .25s; }
  .kf-nav-btn:hover { background:var(--orange); border-color:var(--orange); transform:scale(1.1); }
  .kf-dots { display:flex; gap:.5rem; align-items:center; }
  .kf-dot { width:8px; height:8px; border-radius:50%; background:rgba(255,255,255,0.2); border:none; padding:0; cursor:pointer; transition:all .3s; }
  .kf-dot.active { background:var(--orange); width:22px; border-radius:4px; }
  .kf-drag-hint { text-align:center; margin-top:.8rem; font-size:.72rem; color:rgba(255,255,255,0.25); font-family:'Space Mono',monospace; letter-spacing:.06em; padding:0 6%; }

  /* \u{2550}\u{2550} WHY CHOOSE US SECTION \u{2550}\u{2550} */
  .wcu-section {
    padding: 4rem 6%; background: #fff; position: relative; overflow: hidden;
  }
  .wcu-section::before {
    content:''; position:absolute; top:-120px; right:-120px; width:420px; height:420px;
    border-radius:50%; background:radial-gradient(circle, rgba(237,131,55,0.07) 0%, transparent 70%);
    pointer-events:none;
  }
  .wcu-inner {
    margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center;
  }
  /* LEFT IMAGE SIDE */
  .wcu-img-col { position: relative; }
  .wcu-img-frame {
    position: relative; border-radius: 24px; overflow: hidden;
  }
  .wcu-img-frame img {
    width: 100%; object-fit: cover; display: block;
  }
  /* RIGHT TEXT SIDE */
  .wcu-text-col { padding-bottom: 1.5rem; }
  .wcu-eyebrow {
    display: inline-flex; align-items: center; gap: .55rem;
    font-family:'Space Mono',monospace; font-size:.7rem; font-weight:700;
    color: var(--orange); letter-spacing:.13em; text-transform:uppercase;
    margin-bottom: 1rem;
  }
  .wcu-eyebrow-line { width:24px; height:2px; background:var(--orange); border-radius:2px; }
  .wcu-heading {
    font-family:'Poppins',sans-serif; font-size:clamp(1.8rem,2.8vw,2.2rem);
    font-weight:600; line-height:1.12; color:#000; margin-bottom:1rem;
  }
  .wcu-heading span { color: var(--orange); }
  .wcu-desc {
    font-size:1rem; line-height:1.82; color:#4a5568; margin-bottom:1rem;
  }
    
  }

  /* \u{2550}\u{2550} PORTFOLIO SECTION \u{2550}\u{2550} */
  .pf-section {
    padding: 6rem 6%;
    background: #004168;
    position: relative; overflow: hidden;
  }
  .pf-section::before {
    content:''; position:absolute; inset:0; pointer-events:none;
    background-image:linear-gradient(rgba(237,131,55,0.03) 1px,transparent 1px),
                     linear-gradient(90deg,rgba(237,131,55,0.03) 1px,transparent 1px);
    background-size:55px 55px;
  }
  .pf-section::after {
    content:''; position:absolute; top:-200px; right:-200px; width:600px; height:600px;
    border-radius:50%; pointer-events:none;
    background:radial-gradient(circle, rgba(237,131,55,0.07) 0%, transparent 65%);
  }
  .pf-inner {
   margin:0 auto; position:relative; z-index:2;
    display:grid; grid-template-columns:minmax(280px, 450px) 1fr; gap:4rem; align-items:start;
        background: #004168;
    padding: 5rem 4rem;
  }

  /* LEFT TEXT */
  .pf-left { position:sticky; top:6rem; }
  .pf-eyebrow {
    display:inline-flex; align-items:center; gap:.55rem;
    font-family:'Space Mono',monospace; font-size:.68rem; font-weight:700;
    color:var(--orange); letter-spacing:.14em; text-transform:uppercase; margin-bottom:1.2rem;
  }
  .pf-eyebrow-line { width:22px; height:2px; background:var(--orange); border-radius:2px; }
  .pf-heading {
    font-family:'Poppins',sans-serif; font-size:clamp(2rem,3vw,2.8rem);
    font-weight:600; line-height:1.1; color:#fff; margin-bottom:1.2rem;
  }
  .pf-heading span { color:var(--orange); }
  .pf-desc { font-size:.97rem; line-height:1.82; color:rgba(255, 255, 255, 0.92); margin-bottom:2.2rem; }
  .pf-btn {
    display:inline-flex; align-items:center; gap:.55rem;
    background:var(--orange); color:#fff; padding:.88rem 2rem; border-radius:50px;
    font-family:'Poppins',sans-serif; font-size:.9rem; font-weight:700;
    text-decoration:none; border:none; cursor:pointer;
    box-shadow:0 4px 24px rgba(237,131,55,.35); transition:all .22s;
  }
  .pf-btn:hover { background:var(--orange-light); transform:translateY(-2px); box-shadow:0 8px 32px rgba(237,131,55,.45); }
  .pf-btns { display:flex; flex-direction:column; align-items:flex-start; gap:.5rem; }
  /* RIGHT COLUMNS */
  .pf-cols {
    display:grid; grid-template-columns:repeat(3, 1fr); gap:1.1rem; align-items:start;
  }
  .pf-col { display:flex; flex-direction:column; gap:1.1rem; overflow:hidden; }
  /* scroll animation */
  .pf-col-inner {
    display:flex; flex-direction:column; gap:1.1rem;
    transition: transform 0.1s linear;
  }
  /* individual card */
  .pf-card {
    border-radius:16px; overflow:hidden; position:relative; cursor:pointer;
    border:1.5px solid rgba(255,255,255,0.07);
    box-shadow:0 4px 20px rgba(0,0,0,0.35);
    transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
    flex-shrink:0;
  }
  .pf-card:hover { transform:scale(1.03); box-shadow:0 12px 40px rgba(0,0,0,.55); border-color:rgba(237,131,55,0.5); }
  .pf-card img {
    width:100%; height:200px; object-fit:cover; display:block;
    transition:transform .4s ease;
  }
  .pf-card:hover img { transform:scale(1.06); }
  .pf-card-overlay {
    position:absolute; inset:0;
    background:linear-gradient(180deg, transparent 40%, rgba(2,27,43,0.92) 100%);
    opacity:0; transition:opacity .3s ease;
    display:flex; flex-direction:column; justify-content:flex-end; padding:1rem 1.1rem;
  }
  .pf-card:hover .pf-card-overlay { opacity:1; }
  .pf-card-label {
    font-family:'Poppins',sans-serif; font-size:.78rem; font-weight:700; color:#fff;
    margin-bottom:.2rem;
  }
  .pf-card-tag {
    font-family:'Space Mono',monospace; font-size:.6rem; color:var(--orange);
    letter-spacing:.08em; text-transform:uppercase;
  }
    .pf-left { position:static; }
  } }
  /* \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
     FULLY RESPONSIVE \u{2014} Mobile / Tablet / Desktop
     Mobile  : \u{2264} 540px
     Tablet  : 541px \u{2013} 900px
     Desktop : > 900px  (defaults above)
  \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550} */

  /* \u{2500}\u{2500} HERO BANNER \u{2500}\u{2500} */
  
    .wd-hero-content  { order: 1; align-items: flex-start; }
    .wd-hero-img { width:100%; }
    .wd-hero-actions { justify-content: flex-start; }
    .badge { margin: 0 0 1.2rem; }
    .wd-hero-heading { text-align: start; }
  }
  @keyframes wd-line-in-c { to { transform: translateX(-50%) scaleX(1); } }
  @media (max-width: 540px) {
    .wd-hero { padding: 5.5rem 4% 3rem; gap: 1.2rem; }
    .wd-hero-heading { font-size: clamp(1.7rem, 7vw, 2.2rem); }
    .wd-hero-sub { font-size: 0.93rem; }
    .wd-btn-fill { padding: 0.75rem 1.5rem; font-size: 0.85rem; width: 100%; justify-content: center; }
  }

  /* \u{2500}\u{2500} OUR APPROACH (content + form) \u{2500}\u{2500} */
  @media (max-width: 900px) {
    .wd-approach { padding: 3.5rem 5%; }
    .wd-ap-inner {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    .wd-ap-form-wrap { max-width: 100%; }
    .wd-ap-heading { font-size: clamp(1.5rem, 4vw, 2rem); }
  }
  @media (max-width: 540px) {
    .wd-approach { padding: 3rem 4%; }
    .wd-ap-form-card { padding: 2rem 1.4rem; }
    .wd-fl-row { grid-template-columns: 1fr; }
    .wd-form-title { font-size: 1.4rem; }
  }

  /* \u{2500}\u{2500} WHAT WE OFFER \u{2014} ORBIT \u{2500}\u{2500} */
  @media (max-width: 900px) {
    .pcs-offer-section { padding: 4rem 5% 5rem; }
    .pcs-offer-body { grid-template-columns: 1fr; gap: 2.5rem; }
    .pcs-offer-left { justify-content: center; }
    .pcs-orbit-wrap { width: 320px; height: 320px; }
    .pcs-orbit-center { width: 90px; height: 90px; }
    .pcs-orbit-center-name { font-size: 1.1rem; }
    .pcs-orbit-node-box { width: 78px; height: 78px; gap: 6px; }
    .pcs-orbit-node-emoji { font-size: 1.2rem; }
    .pcs-orbit-node-lbl { font-size: .6rem; }
    .pcs-offer-heading { margin-bottom: 3rem; }
  }
  @media (max-width: 540px) {
    .pcs-offer-section { padding: 3rem 4% 4rem; }
    .pcs-orbit-wrap { width: 260px; height: 260px; }
    .pcs-orbit-center { width: 76px; height: 76px; }
    .pcs-orbit-center-name { font-size: 0.95rem; }
    .pcs-orbit-node-box { width: 62px; height: 62px; padding: 4px; }
    .pcs-orbit-node-emoji { font-size: 1rem; }
    .pcs-orbit-node-lbl { font-size: .52rem; }
  }

  /* \u{2500}\u{2500} WHAT'S INCLUDED \u{2014} ACCORDION \u{2500}\u{2500} */
  @media (max-width: 900px) {
    .pcs-wi5-section { padding: 4rem 5% 5rem; }
    .pcs-wi5-tab-content { grid-template-columns: 1fr; padding-left: 2rem; gap: 1rem; }
    .pcs-wi5-tab-head { gap: 1rem; padding: 1.2rem 1.4rem; }
  }
  @media (max-width: 540px) {
    .pcs-wi5-section { padding: 3rem 4% 4rem; }
    .pcs-wi5-tab-num { width: 42px; height: 42px; }
    .pcs-wi5-tab-icon { width: 34px; height: 34px; font-size: 1rem; }
    .pcs-wi5-tab-title { font-size: 0.88rem; }
    .pcs-wi5-tab-content { padding-left: 1rem; }
    .pcs-wi5-tab-head { padding: 1rem; gap: 0.7rem; }
  }

  /* \u{2500}\u{2500} OUR PROCESS \u{2500}\u{2500} */
  @media (max-width: 900px) {
    .pcs-proc-section { padding: 4rem 5%; }
    .pcs-proc-track { padding-left: 0.5rem; }
  }
  @media (max-width: 540px) {
    .pcs-proc-section { padding: 3rem 4%; }
    .pcs-proc-card { flex-direction: column; gap: 0.8rem; padding: 1.2rem; }
    .pcs-proc-card-icon { width: 42px; height: 42px; font-size: 1.3rem; }
    .pcs-proc-step { gap: 1rem; }
    .pcs-proc-num-wrap { width: 44px; height: 44px; }
    .pcs-proc-card-title { font-size: 0.95rem; }
    .pcs-proc-card-desc { font-size: 0.85rem; }
  }

  /* \u{2500}\u{2500} FEATURES / WHY \u{2014} 4 BOX GRID \u{2500}\u{2500} */
  @media (max-width: 900px) {
    .pcs-fb-section { padding: 4rem 5%; }
    .pcs-fb-grid {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto auto;
    }
    .pcs-fb-grid > div:nth-child(2) {
      grid-column: 1 / -1;
      grid-row: auto;
      order: -1;
      margin-bottom: 1rem;
    }
    .pcs-fb-vline, .pcs-fb-hline { display: none; }
    .pcs-fb-box { border-radius: 14px !important; border: 1.5px solid rgba(0,65,104,0.13) !important; margin: 0.4rem; }
  }
  @media (max-width: 540px) {
    .pcs-fb-section { padding: 3rem 4%; }
    .pcs-fb-grid {
      grid-template-columns: 1fr;
    }
    .pcs-fb-grid > div:nth-child(2) {
      grid-column: 1;
    }
    .pcs-fb-title { font-size: clamp(1.4rem, 5vw, 1.9rem); }
    .pcs-fb-box { padding: 1.6rem 1.4rem; margin: 0.3rem 0; }
  }

  /* \u{2500}\u{2500} FAQ SECTION \u{2500}\u{2500} */
  .faq-section { background: #fff; padding: 5rem 6%; }
  0
  .faq-head { text-align: center; margin-bottom: 2.5rem; }
  .faq-head h2 { font-family:'Poppins',sans-serif; font-size: clamp(1.8rem,3vw,2.5rem); font-weight: 700; color: #011a2a; line-height: 1.15; }
  .faq-head h2 span { color: var(--orange); font-style: italic; }
  .faq-wrapper { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
  .faq-col { display: flex; flex-direction: column; gap: 1rem; }
  .faq-item { border-radius: 14px; overflow: hidden; transition: border-color .22s; }
  .faq-item:hover { border-color: rgba(237,131,55,0.4); }
  .faq-question { display: flex; justify-content: space-between; align-items: center; padding: 1.1rem 1.4rem; cursor: pointer; font-family:'Poppins',sans-serif; font-size: .92rem; font-weight: 600; color: #011a2a; gap: 1rem; user-select: none; }
  .faq-question .icon { font-size: 1.3rem; color: var(--orange); flex-shrink: 0; }
  .faq-answer { padding: .2rem 1.4rem 1.1rem; font-size: .88rem; color: #5a6070; line-height: 1.78; border-top: 1px solid rgba(0,0,0,0.05); }

  @media (max-width: 900px) {
    .faq-wrapper { grid-template-columns: 1fr !important; gap: 0.8rem !important; }
    .faq-section { padding: 4rem 5% 3rem !important; }
    .faq-head { margin-bottom: 2rem; }
  }
  @media (max-width: 540px) {
    .faq-section { padding: 3rem 4% 2.5rem !important; }
    .faq-head h2 { font-size: clamp(1.4rem, 5vw, 1.9rem); }
    .faq-question { font-size: 0.86rem; padding: 1rem 1.1rem; gap: 0.7rem; }
    .faq-answer { font-size: 0.84rem; padding: 0.5rem 1.1rem 1rem; }
    .faq-col { gap: 0.7rem; }
    .faq-item { border-radius: 10px; }
  }
  @media (max-width: 400px) {
    .faq-section { padding: 2.5rem 4% 2rem !important; }
    .faq-question { font-size: 0.82rem; padding: 0.9rem 1rem; }
  }

  /* \u{2500}\u{2500} SECTION APPROACH / INNER TEXT \u{2500}\u{2500} */
  @media (max-width: 900px) {
    section#approach { padding-top: 3rem; }
  }

  /* \u{2500}\u{2500} GENERAL UTILITY \u{2500}\u{2500} */
  @media (max-width: 540px) {
    .partners-header1, .partners-header2 { padding: 0 1rem; }
    .partners-eyebrow { font-size: 0.68rem; }
    .pcs-proc-header h2, .pcs-proc-title { font-size: clamp(1.4rem, 5vw, 2rem); }
    .pcs-wi5-heading, .pcs-offer-heading, .wd-ap-heading { font-size: clamp(1.4rem, 5vw, 1.9rem) !important; }
  }

  /* \u{2500}\u{2500} SERVICES ACCORDION \u{2500}\u{2500} */
  @media (max-width: 900px) {
    .svc-section { padding: 4rem 5% 5rem; }
    .svc-layout { grid-template-columns: 1fr; gap: 2.5rem; }
    .svc-right-col { position: static; top: auto; }
    .svc-heading { font-size: clamp(1.6rem, 5vw, 2.2rem); }
    .svc-sub { max-width: 100%; }
    .svc-count-row { gap: 0.75rem; flex-wrap: wrap; }
    .acc-desc { padding-left: 0; }
    .acc-item.open .acc-body { max-height: 400px; }
  }
  @media (max-width: 540px) {
    .svc-section { padding: 3rem 4% 4rem; }
    .svc-heading { font-size: clamp(1.4rem, 6vw, 1.9rem); }
    .svc-count-row { gap: 0.5rem; }
    .svc-count-pill { padding: 0.6rem 1rem; }
    .svc-count-num { font-size: 1.4rem; }
    .svc-count-lbl { font-size: 0.65rem; }
    .acc-header { padding: 1rem; gap: 0.8rem; }
    .acc-num { min-width: 20px; font-size: 0.6rem; }
    .acc-icon { width: 34px; height: 34px; font-size: 0.95rem; }
    .acc-title { font-size: 0.86rem; }
    .acc-arrow { width: 24px; height: 24px; }
    .acc-desc { font-size: 0.85rem; line-height: 1.75; }
    .acc-item.open .acc-body { max-height: 500px; padding-bottom: 1.2rem; }
    .svc-cta-btn { width: 100%; justify-content: center; }
  }

  /* \u{2500}\u{2500} WHY CHOOSE US \u{2500}\u{2500} */
  @media (max-width: 900px) {
    .wcu-section { padding: 4rem 5%; }
    .wcu-inner { grid-template-columns: 1fr; gap: 2.5rem; }
    .wcu-img-col { max-width: 520px; margin: 0 auto; width: 100%; }
  }
  @media (max-width: 540px) {
    .wcu-section { padding: 3rem 4%; }
    .wcu-heading { font-size: clamp(1.4rem, 5vw, 1.9rem); }
  }

  /* \u{2500}\u{2500} KEY FEATURES CAROUSEL \u{2500}\u{2500} */
  @media (max-width: 900px) {
    .kf-section { padding: 3rem 0 4rem; }
    .kf-inner { padding: 2rem; }
    .kf-carousel-wrap { height: 360px; }
    .kf-card { width: 290px; }
    .kf-title { font-size: clamp(1.6rem, 5vw, 2.4rem); }
  }
  @media (max-width: 540px) {
    .kf-inner { padding: 1.5rem 1rem; }
    .kf-carousel-wrap { height: 320px; }
    .kf-card { width: 260px; padding: 1.6rem 1.4rem 1.4rem; }
    .kf-title { font-size: clamp(1.4rem, 5vw, 1.9rem); }
    .kf-card-title { font-size: 0.95rem; }
    .kf-card-desc { font-size: 0.82rem; }
  }

  /* \u{2500}\u{2500} PORTFOLIO SECTION \u{2500}\u{2500} */
  @media (max-width: 1100px) {
    .pf-inner { grid-template-columns: 1fr; gap: 2.5rem; padding: 3rem 2rem; }
    .pf-left { position: static; top: auto; }
    .pf-cols { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 900px) {
    .pf-section { padding: 4rem 5%; }
    .pf-inner { padding: 2rem 1.5rem; }
    .pf-heading { font-size: clamp(1.6rem, 5vw, 2.2rem); }
  }
  @media (max-width: 540px) {
    .pf-section { padding: 3rem 4%; }
    .pf-inner { padding: 1.5rem 1rem; }
    .pf-cols { grid-template-columns: 1fr 1fr; gap: 0.75rem; }
    .pf-heading { font-size: clamp(1.4rem, 5vw, 1.9rem); }
    .pf-desc { font-size: 0.88rem; }
    .pf-col { height: 400px !important; }
  }

  /* \u{2500}\u{2500} PROCESS SECTION \u{2500}\u{2500} */
  @media (max-width: 1000px) {
    .proc-cols { grid-template-columns: 1fr; gap: 2rem; }
    .proc-mockup-wrap { order: -1; margin: 1rem auto; }
    .proc-points.left .proc-point { flex-direction: row; text-align: left; }
    .proc-points.left .proc-point-text { align-items: flex-start; }
    .proc-screen { width: 220px; }
    .pb-tl, .pb-tr, .pb-bl, .pb-br { display: none; }
  }
  @media (max-width: 900px) {
    .proc-section { padding: 4rem 5%; margin: 0 !important; }
    .proc-heading { font-size: clamp(1.6rem, 5vw, 2.2rem); }
  }
  @media (max-width: 540px) {
    .proc-section { padding: 3rem 4%; }
    .proc-heading { font-size: clamp(1.4rem, 5vw, 1.9rem); }
    .proc-point { padding: 0.8rem; gap: 0.7rem; }
    .proc-icon { width: 32px; height: 32px; min-width: 32px; font-size: 0.85rem; }
    .proc-pt-title { font-size: 0.95rem; }
    .proc-pt-desc { font-size: 0.82rem; }
    .proc-screen { width: 180px; }
  }

`,m=[{num:"01",icon:(0,i.jsx)("img",{src:"/img/icon/svc-website-design.webp",alt:"Website Design",width:"30",height:"30"}),title:"Website Design",tag:"Design",tagColor:"#ed8337",fill:92,desc:"Create visually compelling, user-focused website designs that enhance brand identity and engagement. We combine modern aesthetics, intuitive navigation, and strategic layouts to deliver impactful digital experiences that build credibility and customer trust."},{num:"02",icon:(0,i.jsx)("img",{src:"/img/icon/svc-static-website.webp",alt:"Static Website Development",width:"30",height:"30"}),title:"Static Website Development",tag:"Fast",tagColor:"#ed8337",fill:88,desc:"Develop fast, secure static websites designed for performance and simplicity. Ideal for startups and growing businesses, our solutions ensure reliability, easy maintenance, and professional online presence across all devices."},{num:"03",icon:(0,i.jsx)("img",{src:"/img/icon/svc-custom-website.webp",alt:"Custom Website Development",width:"30",height:"30"}),title:"Custom Website Development",tag:"Custom",tagColor:"#ed8337",fill:95,desc:"Build fully customized websites tailored to your business requirements and workflows. Our development approach ensures scalability, seamless integrations, flexibility, and complete control, delivering solutions aligned with long-term growth objectives."},{num:"04",icon:(0,i.jsx)("img",{src:"/img/icon/svc-woocommerce.webp",alt:"WooCommerce Development",width:"30",height:"30"}),title:"WooCommerce Development",tag:"eCommerce",tagColor:"#ed8337",fill:90,desc:"Develop scalable WooCommerce stores with secure payments and flexible customization. We focus on optimized performance, structured product management, and conversion-driven design to support consistent ecommerce growth."},{num:"05",icon:(0,i.jsx)("img",{src:"/img/icon/svc-ecommerce.webp",alt:"Custom E-Commerce Development",width:"30",height:"30"}),title:"Custom E-Commerce Development",tag:"Scale",tagColor:"#ed8337",fill:87,desc:"Create conversion-focused ecommerce websites optimized for speed, security, and usability. Our scalable platforms feature structured architecture, seamless checkout systems, and performance enhancements to maximize engagement and sales."},{num:"06",icon:(0,i.jsx)("img",{src:"/img/icon/svc-shopify.webp",alt:"Shopify Website Development",width:"30",height:"30"}),title:"Shopify Website Development",tag:"Shopify",tagColor:"#ed8337",fill:93,desc:"Design high-performing Shopify stores built for growth and automation. From store setup to customization and SEO optimization, we deliver secure, mobile-responsive solutions that enhance user experience and scalability."}],g=[{icon:(0,i.jsx)("img",{src:"/img/icon/feat-structure.webp",alt:"Strategic Website Structure",width:"28",height:"28"}),title:"Strategic Website Structure",desc:"Well-planned layouts and intuitive navigation systems crafted to enhance usability, improve engagement, and guide visitors smoothly toward meaningful actions."},{icon:(0,i.jsx)("img",{src:"/img/icon/feat-responsive.webp",alt:"Responsive and Adaptive Design",width:"28",height:"28"}),title:"Responsive & Adaptive Design",desc:"Device-optimized, mobile-first designs ensuring seamless performance and consistent user experience across desktops, tablets, and smartphones."},{icon:(0,i.jsx)("img",{src:"/img/icon/feat-seo.webp",alt:"Search Ready Development",width:"28",height:"28"}),title:"Search-Ready Development",desc:"SEO-focused coding practices, structured metadata, schema setup, and optimized architecture to strengthen search engine visibility."},{icon:(0,i.jsx)("img",{src:"/img/icon/feat-performance.webp",alt:"Speed and Performance Enhancement",width:"28",height:"28"}),title:"Speed & Performance Enhancement",desc:"Optimized frameworks, efficient database structuring, and performance tuning techniques to deliver fast-loading and stable websites."},{icon:(0,i.jsx)("img",{src:"/img/icon/feat-integrations.webp",alt:"Seamless System Integrations",width:"28",height:"28"}),title:"Seamless System Integrations",desc:"Integration with payment gateways, WhatsApp, shipping systems, analytics tools, and marketing solutions for streamlined operations."},{icon:(0,i.jsx)("img",{src:"/img/icon/feat-scalability.webp",alt:"Future Ready Scalability",width:"28",height:"28"}),title:"Future-Ready Scalability",desc:"Flexible development frameworks designed to accommodate business expansion, advanced features, increasing traffic, and evolving digital needs."}],h=[{num:"Step 01",icon:(0,i.jsx)("img",{src:"/img/icon/website-discover.webp",alt:"Discover",width:"24",height:"24"}),title:"Discover",desc:"We understand your brand, goals, audience, competitors, and preferences to build a strategic foundation aligned with business objectives."},{num:"Step 02",icon:(0,i.jsx)("img",{src:"/img/icon/proc-plan-structure.webp",alt:"Plan and Structure",width:"24",height:"24"}),title:"Plan & Structure",desc:"We create sitemaps, define functionalities, finalize technology stack, and establish timelines ensuring clarity before development begins."},{num:"Step 03",icon:(0,i.jsx)("img",{src:"/img/icon/proc-design-prototype.webp",alt:"Design and Prototype",width:"24",height:"24"}),title:"Design & Prototype",desc:"Our designers craft intuitive interfaces and interactive prototypes, allowing you to review visual direction before development."}],f=[{num:"Step 04",icon:(0,i.jsx)("img",{src:"/img/icon/proc-develop-integrate.webp",alt:"Develop and Integrate",width:"24",height:"24"}),title:"Develop & Integrate",desc:"We convert designs into responsive code, integrating CMS, analytics, databases, and essential third-party tools."},{num:"Step 05",icon:(0,i.jsx)("img",{src:"/img/icon/proc-test-optimize.webp",alt:"Test and Optimize",width:"24",height:"24"}),title:"Test & Optimize",desc:"We conduct thorough testing across devices, browsers, speed performance, and functionality to ensure reliability."},{num:"Step 06",icon:(0,i.jsx)("img",{src:"/img/icon/proc-launch-support.webp",alt:"Launch and Support",width:"24",height:"24"}),title:"Launch & Support",desc:"After final approval, we launch confidently and provide ongoing support, updates, and performance monitoring."}];function b(){return(0,i.jsxs)("section",{className:"wd-hero",children:[(0,i.jsx)("div",{className:"wd-hero-bg-radial"}),(0,i.jsx)("div",{className:"wd-hero-bg-grid"}),(0,i.jsxs)("div",{className:"wd-hero-content",style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column"},children:[(0,i.jsxs)("div",{className:"badge",children:[(0,i.jsx)("div",{className:"badge-dot"}),"Website Development"]}),(0,i.jsxs)("h1",{className:"wd-hero-heading",children:["Performance Driven",(0,i.jsx)("span",{className:"orange lined",children:"Website Development "}),"from Concept to Code"]}),(0,i.jsx)("p",{className:"wd-hero-sub",children:"At PCS, we deliver strategic website development services that combine design, performance, and scalability to help businesses grow online. As a trusted website development agency in Coimbatore , we ensure high-value solutions optimized for cost efficiency."}),(0,i.jsx)("div",{className:"wd-hero-actions",children:(0,i.jsxs)("a",{className:"wd-btn-fill",href:"#",children:["Get a Free Quote ",(0,i.jsx)("span",{className:"wd-btn-arrow",children:"\u203A"})]})})]}),(0,i.jsx)("div",{className:"wd-hero-img-wrap",style:{position:"relative",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center",animation:"fadeUp .9s .15s ease both"},children:(0,i.jsx)("img",{src:"/img/website-development.png",alt:"Website Development Services",className:"wd-hero-img"})})]})}function u(){let[e,t]=(0,a.useState)({name:"",email:"",phone:"",company:"",msg:""}),r=r=>{t({...e,[r.target.name]:r.target.value})};return(0,i.jsxs)("section",{className:"approach",id:"approach",children:[(0,i.jsx)("style",{children:`
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
        @media (max-width: 900px) {
          .approach { padding: 3.5rem 5%; }
          .ap-inner { grid-template-columns: 1fr; gap: 2.5rem; }
          .ap-form-wrap { max-width: 100%; }
          .ap-heading { font-size: clamp(1.5rem, 4vw, 2rem); }
        }
        @media (max-width: 540px) {
          .approach { padding: 3rem 4%; }
          .ap-form-card { padding: 2rem 1.4rem; }
          .fl-row { grid-template-columns: 1fr; }
          .form-card-title { font-size: 1.4rem; }
          .ap-heading { font-size: clamp(1.3rem, 5vw, 1.8rem); }
        }

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
      width: 100% !important;
      justify-content: center !important;
    }
    .badge {
      margin: 0 0 1.2rem !important;
    }
  }

  /* Small mobile */
  @media (max-width: 480px) {
    .wd-hero {
      padding: 4rem 4% 2.5rem !important;
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
    .acc-desc { padding-left: 0; }

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

      `}),(0,i.jsxs)("div",{className:"ap-inner",children:[(0,i.jsxs)("div",{className:"ap-left",children:[(0,i.jsx)("div",{className:"partners-header1",children:(0,i.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Approach in"})}),(0,i.jsxs)("h2",{className:"ap-heading",children:["Smart, Scalable, and ",(0,i.jsx)("span",{children:" Stunning Websites"})," Built for Results"]}),(0,i.jsx)("p",{className:"ap-intro",children:"Your website is more than a digital storefront \u2014 it represents your brand, credibility, and customer experience around the clock. We follow a strategy-first approach focused on usability, structure, scalability, and long-term business growth."}),(0,i.jsx)("p",{className:"ap-intro",children:"Every website element is thoughtfully planned to align with your business objectives, audience expectations, and brand positioning. Our development process prioritizes seamless functionality, responsive performance, and creating strong digital foundations that support growth."}),(0,i.jsx)("p",{className:"ap-intro",children:"Whether launching a startup website, revamping an outdated platform, or building a complex system, we focus on speed, reliability, and user experience. Every website is designed to perform smoothly across devices and platforms."})]}),(0,i.jsx)("div",{className:"ap-form-wrap",children:(0,i.jsxs)("div",{className:"ap-form-card",children:[(0,i.jsxs)("div",{className:"form-card-eyebrow",children:[(0,i.jsx)("span",{className:"form-card-eyebrow-line"}),"Your Growth, Our Mission",(0,i.jsx)("span",{className:"form-card-eyebrow-line"})]}),(0,i.jsxs)("div",{className:"form-card-title",children:["Get Your ",(0,i.jsx)("span",{children:"Free"})," Quote"]}),(0,i.jsxs)("form",{onSubmit:r=>{r.preventDefault();let i={name:e.name,email:e.email,phone:e.phone,company:e.company,message:e.msg,url:window.location.href};o.Ay.send("service_8xw6k3r","template_jarui36",i,"XWRnXi4hK2SvmRG3q").then(()=>{alert("Message Sent Successfully \u2705"),t({name:"",email:"",phone:"",company:"",msg:""})}).catch(e=>{console.log(e),alert("Failed to send \u274C")})},children:[(0,i.jsxs)("div",{className:"fl-row",children:[(0,i.jsxs)("div",{className:"fl-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Your Name"}),(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)("span",{className:"fl-icon",children:"\u{1F464}"}),(0,i.jsx)("input",{className:"fl-input",type:"text",name:"name",placeholder:"Full name",value:e.name,onChange:r,required:!0})]})]}),(0,i.jsxs)("div",{className:"fl-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Company"}),(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)("span",{className:"fl-icon",children:"\u{1F3E2}"}),(0,i.jsx)("input",{className:"fl-input",type:"text",name:"company",placeholder:"Company name",value:e.company,onChange:r})]})]})]}),(0,i.jsxs)("div",{className:"fl-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Email Address"}),(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)("span",{className:"fl-icon",children:"\u2709\uFE0F"}),(0,i.jsx)("input",{className:"fl-input",type:"email",name:"email",placeholder:"your@email.com",value:e.email,onChange:r,required:!0})]})]}),(0,i.jsxs)("div",{className:"fl-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Mobile Number"}),(0,i.jsxs)("div",{className:"phone-row",children:[(0,i.jsx)("div",{className:"phone-flag",children:(0,i.jsx)("span",{className:"phone-flag-icon",children:"\u{1F4DE}"})}),(0,i.jsx)("input",{className:"fl-input",type:"tel",name:"phone",placeholder:"Mobile number",value:e.phone,onChange:r,maxLength:"10",pattern:"[0-9]{10}",required:!0})]})]}),(0,i.jsxs)("div",{className:"fl-group textarea-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Message"}),(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)("span",{className:"fl-icon",style:{top:"0.9rem",transform:"none"},children:"\u{1F4AC}"}),(0,i.jsx)("textarea",{className:"fl-textarea",name:"msg",placeholder:"Tell us about your business needs...",value:e.msg,onChange:r})]})]}),(0,i.jsxs)("button",{type:"submit",className:"ap-submit",children:["Get Free Consultation",(0,i.jsx)("span",{className:"ap-submit-arrow",children:"\u203A"})]})]})]})})]})]})}function x(){let[e,t]=(0,a.useState)(0);return(0,i.jsx)("section",{className:"svc-section",children:(0,i.jsxs)("div",{className:"svc-layout",children:[(0,i.jsxs)("div",{className:"svc-right-col",children:[(0,i.jsx)("div",{className:"partners-header1",children:(0,i.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Specialized Website Development Services"})}),"          ",(0,i.jsxs)("h3",{className:"svc-heading",children:["Not Just Websites. ",(0,i.jsx)("span",{className:"accent",children:(0,i.jsx)("i",{children:"Growth-Driven"})})," Digital Experiences."]}),(0,i.jsx)("p",{className:"svc-sub",children:"We create websites that go beyond pretty pages. They\u2019re fast, intuitive, optimized, and built for long-term impact."}),(0,i.jsx)("a",{href:"#",className:"svc-cta-btn",children:"Get a Free Consultation \xa0\u2192"})]}),(0,i.jsx)("div",{className:"svc-accordion",children:m.map((r,a)=>{let n=e===a;return(0,i.jsxs)("div",{className:`acc-item${n?" open":""}`,children:[(0,i.jsxs)("div",{className:"acc-header",onClick:()=>t(n?-1:a),children:[(0,i.jsx)("span",{className:"acc-num",children:r.num}),(0,i.jsx)("div",{className:"acc-icon",children:r.icon}),(0,i.jsx)("h4",{className:"acc-title",children:r.title}),(0,i.jsx)("div",{className:"acc-arrow",children:"\u25BC"})]}),(0,i.jsxs)("div",{className:"acc-body",children:[(0,i.jsx)("div",{className:"acc-divider",style:{background:`linear-gradient(90deg,${r.tagColor}4d,transparent)`}}),(0,i.jsx)("div",{className:"acc-desc",children:r.desc})]})]},a)})})]})})}function w(){return(0,i.jsx)("section",{className:"wcu-section",children:(0,i.jsxs)("div",{className:"wcu-inner",children:[(0,i.jsx)("div",{className:"wcu-img-col",children:(0,i.jsx)("div",{className:"wcu-img-frame",children:(0,i.jsx)("img",{src:"/img/Technology-logos.gif",alt:"Web development team working"})})}),(0,i.jsxs)("div",{className:"wcu-text-col",children:[(0,i.jsx)("div",{className:"h2artners-header1",children:(0,i.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Why Choose Us"})}),(0,i.jsxs)("h3",{className:"wcu-heading",children:["Trusted",(0,i.jsxs)("span",{children:[(0,i.jsx)("i",{children:" Website Development Company"})," "]})," Delivering Growth-Driven Digital Solutions"]}),(0,i.jsx)("p",{className:"wcu-desc",children:"We develop strategic, high-performance websites designed to enhance brand visibility and support measurable business growth. Our solutions combine modern design, structured architecture, and scalable technology tailored to diverse industries and operational requirements."}),(0,i.jsx)("p",{className:"wcu-desc",children:"Our approach begins with understanding your brand identity, target audience, competitors, and long-term objectives. This research-driven foundation allows us to create websites that reflect your vision while supporting usability, engagement, and performance."}),(0,i.jsx)("p",{className:"wcu-desc",children:"Every website is built with SEO best practices, mobile responsiveness, speed optimization, and secure coding standards. The result is a reliable, user-focused digital platform that strengthens credibility and drives sustainable online growth."})]})]})})}function v(){return(0,i.jsx)("section",{className:"proc-section",children:(0,i.jsxs)("div",{className:"proc-inner",children:[(0,i.jsxs)("div",{className:"proc-header",children:[(0,i.jsx)("div",{className:"partners-header1",children:(0,i.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Proven Website Development Process"})}),(0,i.jsxs)("h3",{className:"proc-heading",children:["Planned for Performance. ",(0,i.jsx)("span",{children:(0,i.jsx)("i",{children:"Built for Scale."})})," Launched with Confidence."]}),(0,i.jsx)("p",{className:"proc-sub",children:"We follow a transparent, step-by-step process to ensure your site is built efficiently, beautifully, and exactly as you envisioned."})]}),(0,i.jsxs)("div",{className:"proc-cols",children:[(0,i.jsx)("div",{className:"proc-points left",children:h.map((e,t)=>(0,i.jsxs)("div",{className:"proc-point",children:[(0,i.jsx)("div",{className:"proc-icon",children:e.icon}),(0,i.jsxs)("div",{className:"proc-point-text",children:[(0,i.jsx)("div",{className:"proc-pt-num",children:e.num}),(0,i.jsx)("h4",{className:"proc-pt-title",children:e.title}),(0,i.jsx)("div",{className:"proc-pt-desc",children:e.desc})]})]},t))}),(0,i.jsxs)("div",{className:"proc-mockup-wrap",children:[(0,i.jsx)("div",{className:"proc-badge pb-tl",children:"\u2713 Strategy"}),(0,i.jsx)("div",{className:"proc-badge pb-tr",children:"\u{1F680} Launch"}),(0,i.jsx)("div",{className:"proc-badge pb-bl",children:"\u{1F3A8} Design"}),(0,i.jsx)("div",{className:"proc-badge pb-br",children:"\u2699\uFE0F Dev"}),(0,i.jsxs)("div",{className:"proc-screen",children:[(0,i.jsxs)("div",{className:"proc-browser-bar",children:[(0,i.jsx)("div",{className:"pb-dot pb-d1"}),(0,i.jsx)("div",{className:"pb-dot pb-d2"}),(0,i.jsx)("div",{className:"pb-dot pb-d3"}),(0,i.jsx)("div",{className:"proc-url-bar",children:"pcs-website.com"})]}),(0,i.jsxs)("div",{className:"proc-site-body",children:[(0,i.jsxs)("div",{className:"ps-nav",children:[(0,i.jsx)("div",{className:"ps-nav-logo",children:"P"}),(0,i.jsxs)("div",{className:"ps-nav-links",children:[(0,i.jsx)("div",{className:"ps-nav-link active"}),(0,i.jsx)("div",{className:"ps-nav-link"}),(0,i.jsx)("div",{className:"ps-nav-link"}),(0,i.jsx)("div",{className:"ps-nav-link"})]}),(0,i.jsx)("div",{className:"ps-nav-btn-sm",children:"Contact"})]}),(0,i.jsxs)("div",{className:"ps-hero",children:[(0,i.jsx)("div",{className:"ps-hero-tag",children:"PCS \xb7 Web Dev"}),(0,i.jsxs)("div",{className:"ps-hero-h",children:["Websites Built",(0,i.jsx)("br",{}),"for Results"]}),(0,i.jsx)("div",{className:"ps-hero-btn",children:"Explore More \u2192"})]}),(0,i.jsx)("div",{className:"ps-cards",children:["\u{1F3D7}\uFE0F","\u{1F4F1}","\u{1F50D}"].map((e,t)=>(0,i.jsxs)("div",{className:"ps-card",children:[(0,i.jsx)("div",{className:"ps-card-icon",children:e}),(0,i.jsx)("div",{className:"ps-card-line w100"}),(0,i.jsx)("div",{className:"ps-card-line w70"})]},t))})]})]}),(0,i.jsx)("div",{style:{position:"absolute",bottom:"60px",left:"50%",width:"10px",height:"10px",borderRadius:"50%",background:"var(--orange)",border:"2px solid #fff",boxShadow:"0 2px 8px rgba(237,131,55,0.5)",animation:"float1 2s ease-in-out infinite",zIndex:15}})]}),(0,i.jsx)("div",{className:"proc-points right",children:f.map((e,t)=>(0,i.jsxs)("div",{className:"proc-point",children:[(0,i.jsx)("div",{className:"proc-icon",children:e.icon}),(0,i.jsxs)("div",{className:"proc-point-text",children:[(0,i.jsx)("div",{className:"proc-pt-num",children:e.num}),(0,i.jsx)("h4",{className:"proc-pt-title",children:e.title}),(0,i.jsx)("div",{className:"proc-pt-desc",children:e.desc})]})]},t))})]})]})})}function y(){let e=g.length,[t,r]=(0,a.useState)(0),n=(0,a.useRef)(null),o=(0,a.useRef)([]),s=(0,a.useRef)(0),c=(0,a.useRef)(!1),l=(0,a.useRef)(0),d=(0,a.useRef)(null),p=(0,a.useCallback)(t=>{r((t%e+e)%e),l.current=0},[e]),m=(0,a.useCallback)(r=>{let i=n.current;if(!i)return;let a=Math.min(340,.78*i.offsetWidth);o.current.forEach((i,n)=>{if(!i)return;let o=n-t;o>e/2&&(o-=e),o<-e/2&&(o+=e);let s=Math.abs(o);if(s>3){i.style.opacity="0",i.style.pointerEvents="none";return}let c=.56*a*o,d=0===o?1:Math.max(.12,1-.45*s),p=0===o?.5*l.current:1===o||-1===o?.15*l.current:0;i.style.width=a+"px",i.style.left="50%",i.style.top="50%",i.style.marginLeft=-(a/2)+"px",i.style.marginTop="-120px",i.style.transform=`translateX(${c+p}px) translateY(${6*s}px) scale(${1-.1*s})`,i.style.zIndex=10-s,i.style.opacity=d,i.style.pointerEvents=0===o?"auto":"none",i.style.borderColor=0===o?"rgba(237,131,55,0.45)":"rgba(255,255,255,0.10)",i.style.boxShadow=0===o?"0 20px 60px rgba(0,0,0,0.55),0 0 0 1px rgba(237,131,55,0.2),inset 0 1px 0 rgba(255,255,255,0.18)":"0 8px 30px rgba(0,0,0,0.35),inset 0 1px 0 rgba(255,255,255,0.1)";let m=i.querySelector(".kf-card-accent");m&&(m.style.width=0===o?"65%":"0%"),i.classList.toggle("is-active",0===o),r||(i.style.transition="none",requestAnimationFrame(()=>{i.style.transition=""}))})},[t,e]);(0,a.useEffect)(()=>{m(!0)},[t,m]),(0,a.useEffect)(()=>{let e=()=>m(!1);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[m]),(0,a.useEffect)(()=>(d.current=setInterval(()=>p(t+1),4e3),()=>clearInterval(d.current)),[t,p]);let h=e=>{s.current=e,c.current=!0,clearInterval(d.current)},f=e=>{c.current&&(l.current=e-s.current,m(!1))},b=()=>{c.current&&(c.current=!1,l.current<-50?p(t+1):l.current>50?p(t-1):(l.current=0,m(!0)))};return(0,i.jsxs)("section",{className:"kf-section",children:[(0,i.jsxs)("div",{className:"kf-orbs",children:[(0,i.jsx)("div",{className:"kf-orb kf-orb-1"}),(0,i.jsx)("div",{className:"kf-orb kf-orb-2"}),(0,i.jsx)("div",{className:"kf-orb kf-orb-3"})]}),(0,i.jsxs)("div",{className:"kf-inner",children:[(0,i.jsxs)("div",{className:"kf-header",children:[(0,i.jsx)("div",{className:"partners-header1",children:(0,i.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Uniqueness"})}),"          ",(0,i.jsxs)("h3",{className:"kf-title",children:["Key ",(0,i.jsx)("span",{children:"Features"})]}),(0,i.jsx)("p",{className:"kf-sub",children:"Everything we build is engineered for performance, growth, and lasting digital impact."})]}),(0,i.jsx)("div",{className:"kf-carousel-wrap",ref:n,onMouseDown:e=>h(e.clientX),onMouseMove:e=>{c.current&&f(e.clientX)},onMouseUp:b,onMouseLeave:b,onTouchStart:e=>h(e.touches[0].clientX),onTouchMove:e=>f(e.touches[0].clientX),onTouchEnd:b,children:g.map((e,t)=>(0,i.jsxs)("div",{className:"kf-card",ref:e=>o.current[t]=e,children:[(0,i.jsx)("div",{className:"kf-icon-wrap",children:e.icon}),(0,i.jsxs)("div",{className:"kf-card-body",children:[(0,i.jsx)("h4",{className:"kf-card-title",children:e.title}),(0,i.jsx)("div",{className:"kf-card-desc",children:e.desc}),(0,i.jsx)("div",{className:"kf-card-accent"})]})]},t))}),(0,i.jsxs)("div",{className:"kf-nav",children:[(0,i.jsx)("button",{className:"kf-nav-btn",onClick:()=>p(t-1),children:"\u2190"}),(0,i.jsx)("div",{className:"kf-dots",children:g.map((e,r)=>(0,i.jsx)("button",{className:`kf-dot${r===t?" active":""}`,onClick:()=>p(r)},r))}),(0,i.jsx)("button",{className:"kf-nav-btn",onClick:()=>p(t+1),children:"\u2192"})]}),(0,i.jsx)("div",{className:"kf-drag-hint",children:"\u2190 drag or swipe to explore \u2192"})]})]})}let j=[{q:"What website development services do you offer?",a:"We offer website design, static website development, custom website development, WooCommerce website development, Shopify website development, and custom e-commerce solutions based on your business needs. "},{q:"Will my website be mobile-friendly and SEO-ready?",a:"Yes. We build responsive websites that work smoothly on all devices and follow SEO best practices such as clean structure, optimized content, and fast performance."},{q:"Can you integrate payment gateways, WhatsApp, CRM, or other tools?",a:"Yes. We can connect your website with the tools your business needs, including payment gateways, WhatsApp chat, CRM systems, and other third-party integrations."},{q:"Do you also help with content and SEO?",a:"Yes. We provide content support and on-page SEO services to help your website communicate clearly and perform better in search results."},{q:"What kind of businesses do you build websites for?",a:"We build websites for startups, small businesses, service companies, ecommerce brands, and growing enterprises that want a strong online presence."},{q:"What is included in your website development service?",a:"Our website development service typically includes planning, design, development, responsive setup, basic SEO implementation, integrations, testing, and launch support."}];function k(){let[e,t]=(0,a.useState)(null),r=r=>{t(e===r?null:r)};return(0,i.jsxs)("section",{className:"faq-section",children:[(0,i.jsx)("div",{className:"partners-header1",style:{textAlign:"center"},children:(0,i.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"center"},children:"Frequently Asked Questions"})}),(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"faq-head",children:(0,i.jsxs)("h3",{className:"faq-h3",children:["Queries That Could ",(0,i.jsx)("span",{children:"Hold You Back"})]})}),(0,i.jsxs)("div",{className:"faq-wrapper",children:[(0,i.jsx)("div",{className:"faq-col",children:j.slice(0,3).map((t,a)=>(0,i.jsxs)("div",{className:"faq-item",children:[(0,i.jsxs)("div",{className:"faq-question",onClick:()=>r(a),children:[(0,i.jsx)("span",{children:t.q}),(0,i.jsx)("span",{className:"icon",children:e===a?"\u2212":"+"})]}),e===a&&(0,i.jsx)("div",{className:"faq-answer",children:t.a})]},a))}),(0,i.jsx)("div",{className:"faq-col",children:j.slice(3,6).map((t,a)=>(0,i.jsxs)("div",{className:"faq-item",children:[(0,i.jsxs)("div",{className:"faq-question",onClick:()=>r(a+3),children:[(0,i.jsx)("span",{children:t.q}),(0,i.jsx)("span",{className:"icon",children:e===a+3?"\u2212":"+"})]}),e===a+3&&(0,i.jsx)("div",{className:"faq-answer",children:t.a})]},a+3))})]})]})]})}let N=[{img:"https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&q=80",label:"E-Commerce Store",tag:"Shopify"},{img:"https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&q=80",label:"SaaS Dashboard",tag:"React"},{img:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",label:"Mobile App UI",tag:"Flutter"},{img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",label:"Corporate Website",tag:"WordPress"},{img:"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80",label:"Analytics Platform",tag:"Next.js"}],z=[{img:"https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80",label:"Food Delivery App",tag:"React Native"},{img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",label:"Personal Brand",tag:"Custom"},{img:"https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&q=80",label:"Agency Landing",tag:"Static"},{img:"https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80",label:"Online Store",tag:"WooCommerce"},{img:"https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&q=80",label:"Tech Startup",tag:"Next.js"}],S=[{img:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80",label:"Real Estate Portal",tag:"Custom"},{img:"https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80",label:"Design Studio",tag:"WordPress"},{img:"https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&q=80",label:"Healthcare Site",tag:"React"},{img:"https://images.unsplash.com/photo-1529078155058-5d716f45d604?w=400&q=80",label:"Restaurant Website",tag:"Shopify"},{img:"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&q=80",label:"Blog Platform",tag:"Next.js"}];function C({items:e,speed:t,direction:r}){let n=(0,a.useRef)(null),o=(0,a.useRef)(0),s=(0,a.useRef)(!1),c=(0,a.useRef)(null),l=[...e,...e];return(0,a.useEffect)(()=>{let e=n.current;if(!e)return;let i=e.scrollHeight/2,a=()=>{s.current||(o.current+=t,"up"===r?(o.current>=i&&(o.current-=i),e.style.transform=`translateY(-${o.current}px)`):(o.current>=i&&(o.current-=i),e.style.transform=`translateY(${o.current-i}px)`)),c.current=requestAnimationFrame(a)};return c.current=requestAnimationFrame(a),()=>cancelAnimationFrame(c.current)},[t,r]),(0,i.jsx)("div",{className:"pf-col",style:{height:"min(600px, 60vw)",overflow:"hidden",position:"relative"},onMouseEnter:()=>{s.current=!0},onMouseLeave:()=>{s.current=!1},children:(0,i.jsx)("div",{ref:n,className:"pf-col-inner",children:l.map((e,t)=>(0,i.jsxs)("div",{className:"pf-card",children:[(0,i.jsx)("img",{src:e.img,alt:e.label,loading:"lazy"}),(0,i.jsxs)("div",{className:"pf-card-overlay",children:[(0,i.jsx)("div",{className:"pf-card-label",children:e.label}),(0,i.jsx)("div",{className:"pf-card-tag",children:e.tag})]})]},t))})})}function E(){return(0,i.jsx)("section",{className:"pf-section",children:(0,i.jsxs)("div",{className:"pf-inner",children:[(0,i.jsxs)("div",{className:"pf-left",children:[(0,i.jsx)("div",{className:"partners-header1",children:(0,i.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our  Portfolio"})}),(0,i.jsxs)("h3",{className:"pf-heading",children:["Proven Website ",(0,i.jsx)("span",{children:(0,i.jsx)("i",{children:"Solutions Across"})})," Industries"]}),(0,i.jsx)("p",{className:"pf-desc",children:"Review performance-driven websites developed with strategic architecture, intuitive design, and measurable results."}),(0,i.jsx)("div",{className:"pf-btns",children:(0,i.jsx)("a",{href:"#",className:"pf-btn",children:"View All Projects \u2192"})})]}),(0,i.jsxs)("div",{className:"pf-cols",children:[(0,i.jsx)(C,{items:N,speed:.6,direction:"up"}),(0,i.jsx)(C,{items:z,speed:.5,direction:"down"}),(0,i.jsx)(C,{items:S,speed:.7,direction:"up"})]})]})})}function A(){return(0,a.useEffect)(()=>{let e=document.createElement("style");return e.textContent=p,document.head.appendChild(e),()=>document.head.removeChild(e)},[]),(0,i.jsx)(c.A,{children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d,{}),(0,i.jsx)(b,{}),(0,i.jsx)(u,{}),(0,i.jsx)(x,{}),(0,i.jsx)(w,{}),(0,i.jsx)(E,{}),(0,i.jsx)(v,{}),(0,i.jsx)(y,{}),(0,i.jsx)(s.A,{}),(0,i.jsx)(k,{}),(0,i.jsx)(n.A,{})]})})}}}]);