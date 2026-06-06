"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["2241"],{9393(e,i,n){n.d(i,{A:()=>s});var a=n(4848),t=n(6540);let s=function(){let e=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let i=e.current;if(!i)return;let n=i.getContext("2d"),a="#ed8337",t,s,r=[],o;function l(){t=i.width=i.parentElement.offsetWidth,s=i.height=i.parentElement.offsetHeight}function c(){this.reset()}c.prototype.reset=function(){this.x=Math.random()*t,this.y=Math.random()*s,this.r=2.2*Math.random()+.6,this.type=.55>Math.random()?"dot":.5>Math.random()?"ring":"plus",this.speed=.35*Math.random()+.08,this.dir=Math.random()*Math.PI*2,this.alpha=.45*Math.random()+.1,this.pulse=Math.random()*Math.PI*2,this.pulseSpeed=.018*Math.random()+.008,this.size=4*Math.random()+2},c.prototype.update=function(){this.x+=Math.cos(this.dir)*this.speed,this.y+=Math.sin(this.dir)*this.speed,this.pulse+=this.pulseSpeed,this.dir+=(Math.random()-.5)*.015,this.x<-20&&(this.x=t+20),this.x>t+20&&(this.x=-20),this.y<-20&&(this.y=s+20),this.y>s+20&&(this.y=-20)},c.prototype.draw=function(){let e=this.alpha*(.7+.3*Math.sin(this.pulse));if(n.save(),n.globalAlpha=e,n.strokeStyle=n.fillStyle=a,n.lineWidth=1,"dot"===this.type)n.beginPath(),n.arc(this.x,this.y,this.r+.4*Math.sin(this.pulse),0,2*Math.PI),n.fill();else if("ring"===this.type){let e=this.size*(.9+.15*Math.sin(this.pulse));n.beginPath(),n.arc(this.x,this.y,e,0,2*Math.PI),n.stroke()}else{let e=this.size*(.9+.1*Math.sin(this.pulse));n.beginPath(),n.moveTo(this.x-e,this.y),n.lineTo(this.x+e,this.y),n.moveTo(this.x,this.y-e),n.lineTo(this.x,this.y+e),n.stroke()}n.restore()},window.addEventListener("resize",l),l(),r=[];let d=Math.floor(t*s/9e3);for(let e=0;e<Math.max(d,28);e++)r.push(new c);return!function e(){n.clearRect(0,0,t,s),function(){let e=r.filter(e=>"dot"===e.type);for(let i=0;i<e.length;i++)for(let t=i+1;t<e.length;t++){let s=e[i].x-e[t].x,r=e[i].y-e[t].y,o=Math.sqrt(s*s+r*r);o<110&&(n.save(),n.globalAlpha=(1-o/110)*.12,n.strokeStyle=a,n.lineWidth=.7,n.beginPath(),n.moveTo(e[i].x,e[i].y),n.lineTo(e[t].x,e[t].y),n.stroke(),n.restore())}}(),r.forEach(e=>{e.update(),e.draw()}),o=requestAnimationFrame(e)}(),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",l)}},[]),(0,a.jsx)("section",{id:"cta-final",children:(0,a.jsxs)("div",{className:"cta-banner",style:{"--glow-x":"50%","--glow-y":"50%"},children:[(0,a.jsx)("canvas",{id:"ctaCanvas",ref:e}),(0,a.jsxs)("div",{className:"cta-banner-left",children:[(0,a.jsx)("div",{className:"partners-header",children:(0,a.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Ready to Start?"})}),(0,a.jsxs)("h2",{className:"cta-banner-heading",children:["Let's Talk About Your",(0,a.jsx)("br",{}),"Next Big ",(0,a.jsx)("span",{className:"hl-italic",children:"Growth Move"})]}),(0,a.jsx)("p",{className:"cta-banner-sub",children:"No pressure. Just a quick conversation to understand where you are-and how we can help you move forward."})]}),(0,a.jsxs)("div",{className:"cta-banner-right",children:[(0,a.jsxs)("a",{href:"#",className:"cta-bprimary",children:["Book a Free Consultation",(0,a.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",children:(0,a.jsx)("path",{d:"M3 8h10M9 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,a.jsx)("a",{href:"#",className:"cta-bghost",children:"View All Services"})]})]})})}},1991(e,i,n){n.r(i),n.d(i,{default:()=>v});var a=n(4848),t=n(6540),s=n(9393),r=n(8128),o=n(1085),l=n(3572);function c(){let e="https://www.priyamconsultancy.com/img/finances.png";return(0,a.jsxs)(l.A,{children:[(0,a.jsx)("title",{children:"Financial Services Companies in Coimbatore | Financial Services "}),(0,a.jsx)("meta",{name:"description",content:"Leading financial services companies in Coimbatore providing accounting, investment, tax planning, and business advisory solutions to drive growth and stability. "}),(0,a.jsx)("meta",{name:"keywords",content:"Financial Service, Financial Service Company, Business and Financial Services, Financial Service Solutions, Business Valuations, Business Investment Analysis, Financial Service Partner, Finance Consultant, Financial Service in India, Financial Service for Business "}),(0,a.jsx)("link",{rel:"canonical",href:"https://www.priyamconsultancy.com/finances/"}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:title",content:"Financial Services Companies in Coimbatore | Financial Services "}),(0,a.jsx)("meta",{property:"og:description",content:"Leading financial services companies in Coimbatore providing accounting, investment, tax planning, and business advisory solutions to drive growth and stability. "}),(0,a.jsx)("meta",{property:"og:url",content:"https://www.priyamconsultancy.com/finances/"}),(0,a.jsx)("meta",{property:"og:image",content:e}),(0,a.jsx)("meta",{property:"og:site_name",content:"PCS Business Solution"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:title",content:"Financial Services Companies in Coimbatore | Financial Services "}),(0,a.jsx)("meta",{name:"twitter:description",content:"Leading financial services companies in Coimbatore providing accounting, investment, tax planning, and business advisory solutions to drive growth and stability. "}),(0,a.jsx)("meta",{name:"twitter:image",content:e}),(0,a.jsx)("script",{type:"application/ld+json",children:`
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
              "@id":"https://www.priyamconsultancy.com/finances/",
              "name":"finances"
            }
          }
        ]
        }

      `}),(0,a.jsx)("script",{type:"application/ld+json",children:`
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

      `}),(0,a.jsx)("script",{type:"application/ld+json",children:`
        {
          "@context":"https://schema.org",
          "@type":"Service",
          "@id":"https://www.priyamconsultancy.com/finances/#service",
          "name":"Financial Services",
          "serviceType":"Financial Services",
          "url":"https://www.priyamconsultancy.com/finances/",
          "description":"Priyam Consultancy provides professional financial services including financial planning, financial advisory, wealth management, asset management, corporate finance, taxation support and business financial consulting solutions across India.",
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

      `}),(0,a.jsx)("script",{type:"application/ld+json",children:`
      {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Finances",
        "image": ["https://www.priyamconsultancy.com/img/finances.png"],
        "description": "Best financial services in Coimbatore offering financial planning, financial advisory, wealth management, asset management, corporate finance, taxation support and business financial consulting solutions.",
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
        "reviewCount": "6648"
        },
        "offers": {
        "@type": "Offer",
        "url": "https://www.priyamconsultancy.com/finances/",
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

      `}),(0,a.jsx)("script",{type:"application/ld+json",children:`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "What is a financial service business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A financial service business provides services related to money management, investments, accounting, taxation, financial planning, loans, insurance, and business advisory. These services help individuals and organizations manage finances effectively, improve financial stability, and support long-term financial growth objectives."
            }
          },{
            "@type": "Question",
            "name": "What are the types of financial services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Financial services include accounting, taxation, auditing, investment advisory, wealth management, asset management, insurance, banking, financial planning, corporate finance, payroll services, and compliance management. Each service supports different financial, operational, and strategic business or individual financial requirements."
            }
          },{
            "@type": "Question",
            "name": "What is financial advisory and why is it important?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Financial advisory involves providing expert guidance on budgeting, investments, cash flow, taxation, risk management, and financial planning. It is important because it helps businesses and individuals make informed financial decisions, reduce risks, improve profitability, and achieve long-term financial stability."
            }
          },{
            "@type": "Question",
            "name": "What is wealth management service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Wealth management services focus on managing and growing an individual\u{2019}s or organization\u{2019}s financial assets through investment planning, financial advisory, tax optimization, risk management, and long-term financial strategies. The goal is to preserve wealth while supporting sustainable financial growth and future security."
            }
          },{
            "@type": "Question",
            "name": "What is asset management service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Asset management services involve managing investments, financial assets, and portfolios to maximize returns while minimizing financial risks. These services include portfolio analysis, investment planning, risk assessment, and continuous monitoring to support long-term financial performance and asset growth."
            }
          },{
            "@type": "Question",
            "name": "What is corporate finance service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Corporate finance services help businesses manage financial planning, fundraising, budgeting, investments, mergers, acquisitions, and capital structure decisions. These services support business growth, improve financial efficiency, optimize cash flow, and help organizations make strategic financial decisions confidently."
            }
          }]
        }

      `})]})}function d(){return(0,a.jsxs)("section",{className:"hero-section",style:{minHeight:"100vh",display:"grid",gridTemplateColumns:"1fr 1fr",alignItems:"center",gap:"2rem",padding:"0rem 6% 3rem",position:"relative",overflow:"hidden",background:"#004168"},children:[(0,a.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:ital,wght@0,700;0,900;1,300;1,700&display=swap');
        :root{--navy:#022b44;--navy-deep:#011a2a;--navy-mid:#0a3652;--orange:#ed8337;--orange-light:#f5a66b;--text-dim:rgba(255,255,255,0.45);}
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        body{font-family:'DM Sans',sans-serif;color:#fff;overflow-x:hidden;}
        .orb{position:absolute;border-radius:50%;pointer-events:none;filter:blur(70px);animation:orb-drift 8s ease-in-out infinite alternate;}
        .orb-1{width:380px;height:380px;background:rgba(237,131,55,0.07);top:-80px;right:10%;}
        .orb-2{width:300px;height:300px;background:rgba(10,54,82,0.8);bottom:-60px;left:5%;animation-delay:2s;}
        .orb-3{width:200px;height:200px;background:rgba(237,131,55,0.05);top:40%;left:40%;animation-delay:4s;}
        @keyframes orb-drift{0%{transform:translate(0,0)}100%{transform:translate(20px,-20px)}}
        @keyframes float-ud{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        .badge{display:inline-flex;align-items:center;gap:0.5rem;background:rgba(237,131,55,0.1);border:1px solid rgba(237,131,55,0.28);color:#ed8337;font-size:0.7rem;font-weight:700;padding:0.38rem 1rem;border-radius:50px;letter-spacing:0.09em;text-transform:uppercase;width:fit-content;animation:fadeUp .6s ease both;}
        .badge-dot{width:6px;height:6px;border-radius:50%;background:#ed8337;animation:pulse-dot 1.7s ease-in-out infinite;}
        @keyframes pulse-dot{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.7);opacity:0.45}}
        .hero-heading{font-family:'Poppins',sans-serif;font-size:clamp(2rem,3.6vw,3.3rem);font-weight:600;line-height:1.1;margin-top:1.3rem;animation:fadeUp .7s .08s ease both;color:#fff;}
        .orange{color:#ed8337;}
        .underline-word{position:relative;display:inline-block;}
        .underline-word::after{content:'';position:absolute;left:0;bottom:-3px;width:100%;height:3px;background:linear-gradient(90deg,#ed8337,#f5a66b);border-radius:2px;transform:scaleX(0);transform-origin:left;animation:line-in .55s 1s ease forwards;}
        @keyframes line-in{to{transform:scaleX(1)}}
        .hero-sub{margin-top:1.4rem;font-size:0.97rem;line-height:1.82;color:rgba(255,255,255,0.99);max-width:fit-content;animation:fadeUp .7s .16s ease both;}
        .hero-actions{margin-top:2rem;display:flex;gap:1rem;align-items:center;animation:fadeUp .7s .26s ease both;}
        .btn-fill{background:#ed8337;color:#fff;padding:0.88rem 2.1rem;border-radius:50px;font-family:'DM Sans',sans-serif;font-size:0.93rem;font-weight:500;text-decoration:none;display:inline-flex;align-items:center;gap:0.55rem;box-shadow:0 6px 26px rgba(237,131,55,0.34);transition:background .22s,transform .18s,box-shadow .22s;}
        .btn-fill:hover{background:#f5a66b;transform:translateY(-3px);box-shadow:0 10px 34px rgba(237,131,55,0.46);}
        .btn-arr{width:24px;height:24px;border-radius:50%;background:rgba(2,43,68,0.25);display:flex;align-items:center;justify-content:center;font-size:0.9rem;}
        @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        .hero-img-wrap{position:relative;width:100%;max-width:530px;height:auto;display:flex;align-items:center;justify-content:center;}
        .hero-img{width:100%;height:110%;object-fit:contain;}
        /* \u{2550}\u{2550} HERO RESPONSIVE \u{2550}\u{2550} */
        .hero-section { overflow-x: hidden; }

        /* Tablet */
        @media(max-width:900px){
          .hero-section {
            grid-template-columns: 1fr !important;
            padding: 6rem 5% 3rem !important;
            min-height: auto !important;
            text-align: start;
          }
          .hero-content-col {
            order: 1 !important;
            align-items: start !important;
                    padding: 3rem 0;
            display: flex; flex-direction: column;
          }
          .hero-img-col {
            order: 2 !important;
            width: 100%; display: flex;
            justify-content: center;
          }
          .illus-wrap, .hero-img-wrap {
            height: auto !important;
            width: 100% !important;
            max-width: 460px !important;
          }
          .hero-img { width: 100% !important; height: 100% !important; }
          .hero-sub { max-width: 90% !important; }
          .hero-actions { justify-content: center !important; }
          .badge { margin: 0 auto 0 0; }
          /* approach */
          .ap-inner { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .ap-form-wrap { max-width: 100% !important; width: 100% !important; }
          .fl-row { grid-template-columns: 1fr 1fr !important; }
          /* faq */
          .faq-wrapper { grid-template-columns: 1fr 1fr !important; }
          /* rg */
          .rg-layout { grid-template-columns: 1fr !important; }
        }

        /* Mobile */
        @media(max-width:600px){
          .hero-section {
            padding: 5rem 4% 2.5rem !important;
          }
          .hero-heading { font-size: clamp(1.7rem,6vw,2.2rem) !important; }
          .hero-sub { font-size: 0.9rem !important; max-width: 100% !important; }
          .illus-wrap, .hero-img-wrap {
            height: auto !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .hero-img { object-fit: contain !important; }
          .badge { font-size: 0.62rem !important; }
          /* approach */
          .fl-row { grid-template-columns: 1fr !important; }
          .ap-form-card { padding: 2rem 1.4rem !important; }
          /* faq */
          .faq-wrapper {display: block !important; }
          /* faq mobile */
          .faq-col { display:flex; flex-direction:column; gap:0.6rem; }
          .faq-item { border-radius:10px; padding:13px 16px; }
          .faq-question { font-size:0.88rem; gap:0.6rem; align-items:flex-start; }
          .faq-question .icon { flex-shrink:0; font-size:1.1rem; color:#ed8337; }
          .faq-answer { font-size:0.82rem; line-height:1.65; margin-top:0.5rem; }

          /* hww */
          .hww-flow { grid-template-columns: 1fr !important; }
          .hww-arrow { display: none !important; }
        }
        li.dropdown.mega {color:#000;}
      `}),(0,a.jsx)("div",{className:"orb orb-1"}),(0,a.jsx)("div",{className:"orb orb-2"}),(0,a.jsx)("div",{className:"orb orb-3"}),(0,a.jsxs)("div",{className:"hero-content-col",style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column"},children:[(0,a.jsxs)("div",{className:"badge",children:[(0,a.jsx)("div",{className:"badge-dot"}),"Expert Accounting Partner"]}),(0,a.jsxs)("h1",{className:"hero-heading",children:["Complete Financial Service &",(0,a.jsx)("span",{className:"underline-word orange",style:{marginLeft:"0.5rem"},children:" Support"})," for Your Business"]}),(0,a.jsx)("p",{className:"hero-sub",children:"We provide end-to-end financial solutions, including banking, loans, CMA reports, audits, and approvals. Our expert guidance ensures accurate financial management, smooth operations, and strategic support to help your business grow confidently."}),(0,a.jsx)("div",{className:"hero-actions",children:(0,a.jsxs)("a",{className:"btn-fill",href:"#",children:[(0,a.jsx)("span",{children:"Explore More"}),(0,a.jsx)("div",{className:"btn-arr",children:"\u203A"})]})})]}),(0,a.jsx)("div",{className:"hero-img-col",style:{position:"relative",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,a.jsx)("div",{className:"hero-img-wrap",children:(0,a.jsx)("img",{src:"/img/finances.png",alt:"Financial Services Illustration",className:"hero-img"})})})]})}function p(){let[e,i]=(0,t.useState)({name:"",email:"",phone:"",company:"",msg:""}),n=n=>{i({...e,[n.target.name]:n.target.value})};return(0,a.jsxs)("section",{className:"approach",id:"approach",children:[(0,a.jsx)("style",{children:`
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
      `}),(0,a.jsxs)("div",{className:"ap-inner",children:[(0,a.jsxs)("div",{className:"ap-left",children:[(0,a.jsx)("div",{className:"partners-header1",children:(0,a.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Approach in"})}),(0,a.jsxs)("h2",{className:"ap-heading",children:["Financial   ",(0,a.jsx)("span",{children:"Services"})]}),(0,a.jsx)("p",{className:"ap-intro",children:"We provide complete visibility into your financial operations, from cash flow monitoring to detailed reporting. Every insight is accurate, timely, and easy to understand. This helps you stay in control of your business finances."}),(0,a.jsx)("p",{className:"ap-intro",children:"Our reports deliver actionable insights that support confident and informed decision-making. You gain clarity on performance, expenses, and growth trends. This enables better planning and financial control."}),(0,a.jsx)("p",{className:"ap-intro",children:"Our proactive approach identifies risks, uncovers opportunities, and optimizes resources. We help improve profitability and support strategic planning. With expert guidance, your finances drive long-term, sustainable success"})]}),(0,a.jsx)("div",{className:"ap-form-wrap",children:(0,a.jsxs)("div",{className:"ap-form-card",children:[(0,a.jsxs)("div",{className:"form-card-eyebrow",children:[(0,a.jsx)("span",{className:"form-card-eyebrow-line"}),"Your Growth, Our Mission",(0,a.jsx)("span",{className:"form-card-eyebrow-line"})]}),(0,a.jsxs)("div",{className:"form-card-title",children:["Get Your ",(0,a.jsx)("span",{children:"Free"})," Quote"]}),(0,a.jsxs)("form",{onSubmit:n=>{n.preventDefault();let a={name:e.name,email:e.email,phone:e.phone,company:e.company,message:e.msg,url:window.location.href};r.Ay.send("service_8xw6k3r","template_jarui36",a,"XWRnXi4hK2SvmRG3q").then(()=>{alert("Message Sent Successfully \u2705"),i({name:"",email:"",phone:"",company:"",msg:""})}).catch(e=>{console.log(e),alert("Failed to send \u274C")})},children:[(0,a.jsxs)("div",{className:"fl-row",children:[(0,a.jsxs)("div",{className:"fl-group",children:[(0,a.jsx)("label",{className:"fl-label",children:"Your Name"}),(0,a.jsxs)("div",{style:{position:"relative"},children:[(0,a.jsx)("span",{className:"fl-icon",children:"\u{1F464}"}),(0,a.jsx)("input",{className:"fl-input",type:"text",name:"name",placeholder:"Full name",value:e.name,onChange:n,required:!0})]})]}),(0,a.jsxs)("div",{className:"fl-group",children:[(0,a.jsx)("label",{className:"fl-label",children:"Company"}),(0,a.jsxs)("div",{style:{position:"relative"},children:[(0,a.jsx)("span",{className:"fl-icon",children:"\u{1F3E2}"}),(0,a.jsx)("input",{className:"fl-input",type:"text",name:"company",placeholder:"Company name",value:e.company,onChange:n})]})]})]}),(0,a.jsxs)("div",{className:"fl-group",children:[(0,a.jsx)("label",{className:"fl-label",children:"Email Address"}),(0,a.jsxs)("div",{style:{position:"relative"},children:[(0,a.jsx)("span",{className:"fl-icon",children:"\u2709\uFE0F"}),(0,a.jsx)("input",{className:"fl-input",type:"email",name:"email",placeholder:"your@email.com",value:e.email,onChange:n,required:!0})]})]}),(0,a.jsxs)("div",{className:"fl-group",children:[(0,a.jsx)("label",{className:"fl-label",children:"Mobile Number"}),(0,a.jsxs)("div",{className:"phone-row",children:[(0,a.jsx)("div",{className:"phone-flag",children:(0,a.jsx)("span",{className:"phone-flag-icon",children:"\u{1F4DE}"})}),(0,a.jsx)("input",{className:"fl-input",type:"tel",name:"phone",placeholder:"Mobile number",value:e.phone,onChange:n,maxLength:"10",pattern:"[0-9]{10}",required:!0})]})]}),(0,a.jsxs)("div",{className:"fl-group textarea-group",children:[(0,a.jsx)("label",{className:"fl-label",children:"Message"}),(0,a.jsxs)("div",{style:{position:"relative"},children:[(0,a.jsx)("span",{className:"fl-icon",style:{top:"0.9rem",transform:"none"},children:"\u{1F4AC}"}),(0,a.jsx)("textarea",{className:"fl-textarea",name:"msg",placeholder:"Tell us about your business needs...",value:e.msg,onChange:n})]})]}),(0,a.jsxs)("button",{type:"submit",className:"ap-submit",children:["Get Free Consultation",(0,a.jsx)("span",{className:"ap-submit-arrow",children:"\u203A"})]})]})]})})]})]})}let m=[{num:"01",tag:"BLM",label:"Banking & Loan Management",title:"Secure Funds and <i>Grow Confidently</i>",desc:["We manage your bank accounts, loans, and credit facilities with a structured and efficient approach. Our team ensures smooth banking operations and timely access to funds when needed. This helps maintain financial stability and operational continuity.","By coordinating with banks and financial institutions, we simplify funding processes. Our support reduces delays and financial bottlenecks. This enables your business to expand confidently and sustain long-term growth."],chips:["\u{1F4C8} Investor Access","\u{1F3DB}\uFE0F Strong Governance","\u{1F4CB} Stock Exchange Listed","\u2705 Regulatory Compliance"],time:"Avg. 15\u201325 working days"},{num:"02",tag:"CRFA",label:"CMA Reports & Financial Analysis",title:"Structured Insights for  <i>Informed Decisions</i>",desc:["We prepare accurate and detailed CMA reports required by lenders and investors. Our analysis covers financial statements, cash flow, and future projections. This ensures your reports meet industry and regulatory standards.","By presenting clear and structured financial insights, we improve your chances of securing funding. Our approach enhances credibility and transparency. It supports confident decision-making and financial planning."],chips:["\u{1F4BC} Limited Liability","\u{1F680} Investor-Ready","\u{1F465} 2\u2013200 Shareholders","\u{1F4D1} Separate Legal Entity"],time:"Avg. 7\u201312 working days"},{num:"03",tag:"AA",label:"Audits & Approvals",title:"Transparent Audits for <i>Reliable Governance</i>",desc:["Our team conducts internal and statutory audits with precision and attention to detail. We review records, transactions, and processes to ensure accuracy and compliance. This helps identify potential risks early.","By maintaining transparency and proper documentation, we strengthen financial governance. Our audit support builds trust with stakeholders and authorities. It ensures your business operates with integrity and compliance."],chips:["\u{1F91D} Flexible Structure","\u{1F6E1}\uFE0F Limited Liability","\u{1F4C9} Low Compliance","\u{1F4B0} Easy Profit Sharing"],time:"Avg. 10\u201315 working days"},{num:"04",tag:"BCFM",label:"Budgeting & Cash Flow Management",title:"Optimized Cash Flow for <i>Operational Efficiency</i>",desc:["We monitor cash inflows and outflows to maintain strong financial control. Our team optimizes working capital and ensures consistent liquidity for daily operations. This prevents disruptions and improves efficiency.","Through structured budgeting and forecasting, we support better financial planning. Our approach provides clarity and control over expenses and revenues. It enables sustainable growth and informed decision-making."],chips:["\u{1F464} Solo Founder","\u{1F3E2} Corporate Benefits","\u{1F512} Asset Protection","\u{1F4CA} Easy Compliance"],time:"Avg. 7\u201310 working days"},{num:"05",tag:"FPA",label:"Financial Planning & Advisory",title:"Strategic Guidance for <i>Sustainable Growth</i>",desc:["We offer expert guidance on investments, funding strategies, and financial planning. Our team aligns financial decisions with your business goals and growth objectives. This ensures a balanced and forward-looking approach.","By identifying opportunities and managing risks, we enhance profitability and stability. Our advisory services support long-term success and compliance. This helps your business grow with confidence and clarity."],chips:["\u{1F91D} Shared Ownership","\u{1F4A1} Easy Formation","\u{1F4DD} Minimal Compliance","\u2696\uFE0F Flexible Agreement"],time:"Avg. 3\u20137 working days"},{num:"06",tag:"CFS",label:"Complete Financial Support",title:"Comprehensive Support for <i>Seamless Finance</i>",desc:["We provide end-to-end financial services covering bookkeeping, reporting, and compliance. Our team ensures every financial activity is managed accurately and efficiently. This keeps your operations well-organized.","By handling all financial processes, we reduce your internal workload significantly. Our support delivers clarity, consistency, and actionable insights. This allows you to focus on scaling your business with confidence."],chips:["\u{1F464} Full Control","\u{1F4B8} Minimal Cost","\u26A1 Quick Setup","\u{1F3EA} SMEs & Freelancers"],time:"Avg. 1\u20133 working days"}],g=[(0,a.jsx)("img",{src:"/img/icon/banking-loan-management.webp",alt:"Banking and Loan Management",width:"20",height:"20"}),(0,a.jsx)("img",{src:"/img/icon/cma-reports-analysis.webp",alt:"CMA Reports and Financial Analysis",width:"20",height:"20"}),(0,a.jsx)("img",{src:"/img/icon/audits-approvals.webp",alt:"Audits and Approvals",width:"20",height:"20"}),(0,a.jsx)("img",{src:"/img/icon/budgeting-cashflow.webp",alt:"Budgeting and Cash Flow Management",width:"20",height:"20"}),(0,a.jsx)("img",{src:"/img/icon/financial-planning-advisory.webp",alt:"Financial Planning and Advisory",width:"20",height:"20"}),(0,a.jsx)("img",{src:"/img/icon/complete-financial-support.webp",alt:"Complete Financial Support",width:"20",height:"20"})];function h(){let[e,i]=(0,t.useState)(0),n=m[e];return(0,a.jsxs)("section",{style:{padding:"90px 5%",background:"#004168",position:"relative",overflow:"hidden"},children:[(0,a.jsx)("style",{children:`
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
        h3.faq-h3{font-size:2.5rem; color:#000;}
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

       
      `}),(0,a.jsx)("div",{className:"rg-bg-c",style:{top:"-120px",right:"-120px",width:"400px",height:"400px",border:"1.5px solid rgba(237,131,55,.1)"}}),(0,a.jsx)("div",{className:"rg-bg-c",style:{bottom:"-100px",left:"-80px",width:"300px",height:"300px",border:"1.5px solid rgba(237,131,55,.08)"}}),(0,a.jsxs)("div",{style:{textAlign:"center",marginBottom:"60px",position:"relative",zIndex:2},children:[(0,a.jsx)("div",{className:"partners-header1",children:(0,a.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"center"},children:"Our Specialized Financial Services"})}),(0,a.jsxs)("h3",{className:"rg-sec-h",children:["Every Transaction Managed. ",(0,a.jsx)("i",{children:" Every Report Accurate."})," "]}),(0,a.jsx)("p",{className:"rg-sec-sub",children:"Priyam Consultancy Services offers comprehensive financial solutions tailored to your business goals"})]}),(0,a.jsxs)("div",{className:"rg-layout",children:[(0,a.jsx)("div",{className:"rg-left",children:m.map((n,t)=>(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:`rg-item${e===t?" active":""}`,onClick:()=>i(t),style:t===m.length-1&&e!==t?{borderBottom:"none"}:{},children:[(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1rem",flex:1},children:[(0,a.jsx)("div",{className:"rg-icon-box",children:g[t]}),(0,a.jsx)("h4",{className:"rg-name",children:n.label})]}),(0,a.jsx)("span",{className:"rg-tag-pill",children:n.tag}),(0,a.jsx)("div",{className:"rg-item-arr",children:e===t?"\u25BE":"\u203A"})]}),e===t&&(0,a.jsxs)("div",{className:"rg-mobile-detail",children:[(0,a.jsx)("h5",{className:"rg-d-title",dangerouslySetInnerHTML:{__html:n.title}}),Array.isArray(n.desc)?n.desc.map((e,i)=>(0,a.jsx)("div",{className:"rg-d-desc",style:{marginBottom:i<n.desc.length-1?"0.8rem":"0"},children:e},i)):(0,a.jsx)("div",{className:"rg-d-desc",children:n.desc})]})]},t))}),(0,a.jsxs)("div",{className:"rg-right",children:[(0,a.jsxs)("div",{style:{position:"relative",zIndex:2,height:"100%",display:"flex",flexDirection:"column"},children:[(0,a.jsxs)("div",{className:"rg-d-eye",children:[(0,a.jsx)("div",{className:"rg-d-num",children:n.num}),(0,a.jsx)("div",{className:"rg-d-lbl",children:n.label})]}),(0,a.jsx)("h5",{className:"rg-d-title",dangerouslySetInnerHTML:{__html:n.title}}),Array.isArray(n.desc)?n.desc.map((e,i)=>(0,a.jsx)("div",{className:"rg-d-desc",style:{marginBottom:i<n.desc.length-1?"1rem":"0"},children:e},i)):(0,a.jsx)("div",{className:"rg-d-desc",children:n.desc}),(0,a.jsx)("div",{className:"rg-d-footer"})]}),(0,a.jsx)("div",{className:"rg-dots",children:m.map((i,n)=>(0,a.jsx)("div",{className:`rg-ddot${e===n?" active":""}`},n))})]})]})]})}let f=[{num:"01",color:"orange",icon:(0,a.jsx)("img",{src:"/img/icon/sc-discovery-assessment.webp",alt:"Discovery and Assessment",width:"35",height:"35"}),lbl:"Step 01 \xb7 Initiation",title:"Discovery & Assessment",desc:"We analyze your financial structure, cash flow, reporting needs, and operations to design a tailored financial management plan aligned with your business objectives and growth strategy.",time:"~1 Working Day",tColor:"blue",even:!1,last:!1},{num:"02",color:"blue",icon:(0,a.jsx)("img",{src:"/img/icon/sc-planning-strategy.webp",alt:"Planning and Strategy",width:"35",height:"35"}),lbl:"Step 02 \xb7 Documentation",title:"Planning & Strategy",desc:"We develop budgets, funding plans, and financial roadmaps aligned with business priorities, ensuring optimal resource allocation, effective cash flow management, and sustainable long-term financial growth.",time:"~2-3 Working Days",tColor:"orange",even:!0,last:!1},{num:"03",color:"orange",icon:(0,a.jsx)("img",{src:"/img/icon/sc-documentation-approvals.webp",alt:"Documentation and Approvals",width:"35",height:"35"}),lbl:"Step 03 \xb7 Filing",title:"Documentation & Approvals",desc:"We prepare, verify, and submit financial records, loan applications, and CMA reports accurately and on time, ensuring compliance and reliable documentation for smooth financial operations.",time:"~2-4 Working Days",tColor:"blue",even:!1,last:!1},{num:"04",color:"blue",icon:(0,a.jsx)("img",{src:"/img/icon/sc-monitoring-review.webp",alt:"Monitoring and Review",width:"35",height:"35"}),lbl:"Step 04 \xb7 Approval",title:"Monitoring & Review",desc:"We track financial performance, update records, and review compliance regularly, identifying discrepancies and optimizing processes to maintain transparency, accuracy, and alignment with regulatory and business requirements.",time:"~5-7 Working Days",tColor:"orange",even:!0,last:!1},{num:"05",color:"orange",icon:(0,a.jsx)("img",{src:"/img/icon/sc-continuous-support.webp",alt:"Continuous Support and Updates",width:"35",height:"35"}),lbl:"Step 05 \xb7 Filing",title:"Continuous Support & Updates",desc:"We provide ongoing support for audits, approvals, and regulatory changes, offering actionable insights that keep your business financially healthy, compliant, and prepared for growth opportunities.",time:"~2-4 Working Days",tColor:"blue",even:!1,last:!1},{num:"06",color:"blue",icon:(0,a.jsx)("img",{src:"/img/icon/sc-performance-reporting.webp",alt:"Performance Reporting and Insights",width:"35",height:"35"}),lbl:"Step 06 \xb7 Approval",title:"Performance Reporting & Insights",desc:"We generate clear financial dashboards and performance insights, enabling timely decisions, improved accountability, trend analysis, and proactive adjustments to support strategic business objectives effectively.",time:"~5-7 Working Days",tColor:"orange",even:!0,last:!1}];function u(){return(0,a.jsxs)("section",{style:{position:"relative",overflow:"hidden",padding:"90px 0 100px"},children:[(0,a.jsx)("style",{children:`
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
        @media(max-width:700px){.sc-step,.sc-step-even{flex-direction:column !important;}.sc-conn{display:none !important;}}
      `}),(0,a.jsx)("div",{className:"sc-bg"}),(0,a.jsx)("div",{className:"sc-orb sc-orb-a"}),(0,a.jsx)("div",{className:"sc-orb sc-orb-b"}),(0,a.jsxs)("div",{className:"sc-inner",children:[(0,a.jsxs)("div",{style:{textAlign:"center",marginBottom:"90px"},children:[(0,a.jsx)("div",{className:"partners-header1",children:(0,a.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"center"},children:"Our Financial Execution Process"})}),(0,a.jsxs)("h3",{className:"sc-title",children:["Structured, Transparent, and ",(0,a.jsx)("em",{className:"sc-title-em",children:"Reliable Financial Management "})]}),(0,a.jsx)("p",{className:"sc-sub",children:"Our Financial Management process at Priyam Consultancy Services is designed to meet the unique needs of your business, step by step. We don\u2019t just handle numbers \u2014 we build a robust financial foundation that enables growth, stability, and long-term success. From cash flow management to audits and strategic planning, every step is precise, compliant, and tailored to your business objectives."})]}),(0,a.jsx)("div",{style:{position:"relative"},children:f.map((e,i)=>(0,a.jsxs)("div",{className:`sc-step${e.even?" sc-step-even":""}`,children:[(0,a.jsxs)("div",{className:"sc-num-col",children:[!e.last&&(0,a.jsx)("div",{className:"sc-line-v"}),(0,a.jsx)("div",{className:`sc-circle sc-${e.color}`,children:e.num})]}),(0,a.jsx)("div",{className:"sc-conn"}),(0,a.jsxs)("div",{className:`sc-card${e.last?" sc-card-final":""}`,children:[(0,a.jsx)("div",{className:`sc-card-top ${"blue"===e.color?"sc-top-blue":"sc-top-orange"}`}),(0,a.jsx)("span",{className:"sc-card-icon",children:e.icon}),(0,a.jsx)("div",{className:`sc-lbl sc-lbl-${"blue"===e.color?"blue":"orange"}`,children:e.lbl}),(0,a.jsx)("h4",{className:"sc-card-title",children:e.title}),(0,a.jsx)("div",{className:"sc-card-desc",children:e.desc})]})]},i))})]})]})}let x=[{title:"Strategic Financial Planning",desc:"We carefully analyze your business\u2019s financial needs, cash flow, and growth objectives. Every budgeting, funding, and investment plan is designed to optimize resources and support long-term success.",center:!1,icon:(0,a.jsx)("img",{src:"/img/icon/hww-strategic-financial-planning.webp",alt:"Strategic Financial Planning",width:"34",height:"34"})},{title:"Expert Team & Clear Accountability",desc:"Our skilled financial analysts, auditors, and advisors manage every task with precision. Clearly defined roles ensure accuracy, accountability, and seamless execution across all financial operations and reporting.",center:!1,icon:(0,a.jsx)("img",{src:"/img/icon/hww-expert-team-accountability.webp",alt:"Expert Team and Clear Accountability",width:"34",height:"34"})},{title:"Review, Validate & Deliver",desc:"Before finalizing any report, approval, or submission, we perform thorough verification for accuracy, compliance, and completeness. Only after review do we deliver actionable, reliable, and audit-ready financial outputs.",center:!0,icon:(0,a.jsx)("img",{src:"/img/icon/hww-review-validate-deliver.webp",alt:"Review Validate and Deliver",width:"34",height:"34"})},{title:"Ongoing Monitoring & Guidance",desc:"We provide continuous oversight of cash flow, funding, audits, and regulatory compliance. Our proactive guidance ensures your business stays financially secure, fully compliant, and growth opportunities.",center:!1,icon:(0,a.jsx)("img",{src:"/img/icon/hww-ongoing-monitoring-guidance.webp",alt:"Ongoing Monitoring and Guidance",width:"34",height:"34"})}];function b(){return(0,a.jsxs)("section",{style:{position:"relative",background:"#004168",overflow:"hidden",padding:"60px 5% 81px"},children:[(0,a.jsx)("style",{children:`
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
        @media(max-width:900px){.hww-flow{grid-template-columns:1fr 1fr !important;gap:36px 20px !important;}.hww-flow::before{display:none !important;}}
        @media(max-width:540px){.hww-flow{grid-template-columns:1fr !important;}.hww-arrow{display:none !important;}}
        .faq-head h2 {
          color: #000;
        }
      `}),(0,a.jsx)("div",{className:"hww-bg"}),(0,a.jsx)("div",{className:"hww-orb hww-orb-1"}),(0,a.jsx)("div",{className:"hww-orb hww-orb-2"}),(0,a.jsxs)("div",{style:{position:"relative",zIndex:2,margin:"0 auto"},children:[(0,a.jsxs)("div",{style:{textAlign:"center",marginBottom:"72px"},children:[(0,a.jsx)("div",{className:"partners-header1",children:(0,a.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"center"},children:"How We Work"})}),(0,a.jsxs)("h2",{className:"hww-title",children:["Plan With Clarity.  ",(0,a.jsx)("span",{className:"hww-accent",children:"Execute With Confidence."})]}),(0,a.jsx)("p",{className:"hww-sub",children:"Guiding your finances with precision, insight, and strategic focus to drive growth, ensure compliance, and strengthen long-term business success."})]}),(0,a.jsx)("div",{className:"hww-flow",children:x.map((e,i)=>(0,a.jsxs)("div",{className:`hww-step${e.center?" hww-step-center":""}`,children:[(0,a.jsxs)("div",{className:"hww-icon-wrap",children:[(0,a.jsx)("div",{className:"hww-ring",style:i%2==1?{animationDirection:"reverse",animationDuration:"18s"}:{}}),(0,a.jsx)("div",{className:"hww-disc"}),(0,a.jsx)("div",{className:"hww-svg",children:e.icon}),i<3&&(0,a.jsx)("div",{className:"hww-arrow",style:{animationDelay:`${.4*i}s`},children:(0,a.jsx)("svg",{viewBox:"0 0 28 14",fill:"none",children:(0,a.jsx)("path",{d:"M0 7h24M18 2l6 5-6 5",stroke:"#ed8337",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),(0,a.jsx)("h3",{className:"hww-step-title",children:e.title}),(0,a.jsx)("div",{className:"hww-step-desc",children:e.desc})]},i))})]})]})}let w=[{q:"What is a financial service business?",a:"A financial service business provides services related to money management, investments, accounting, taxation, financial planning, loans, insurance, and business advisory. These services help individuals and organizations manage finances effectively, improve financial stability, and support long-term financial growth objectives."},{q:"What are the types of financial services?",a:" Financial services include accounting, taxation, auditing, investment advisory, wealth management, asset management, insurance, banking, financial planning, corporate finance, payroll services, and compliance management. Each service supports different financial, operational, and strategic business or individual financial requirements."},{q:"What is financial advisory and why is it important?",a:" Financial advisory involves providing expert guidance on budgeting, investments, cash flow, taxation, risk management, and financial planning. It is important because it helps businesses and individuals make informed financial decisions, reduce risks, improve profitability, and achieve long-term financial stability."},{q:"What is wealth management service?",a:"Wealth management services focus on managing and growing an individual\u2019s or organization\u2019s financial assets through investment planning, financial advisory, tax optimization, risk management, and long-term financial strategies. The goal is to preserve wealth while supporting sustainable financial growth and future security."},{q:"What is asset management service?",a:" Asset management services involve managing investments, financial assets, and portfolios to maximize returns while minimizing financial risks. These services include portfolio analysis, investment planning, risk assessment, and continuous monitoring to support long-term financial performance and asset growth."},{q:"What is corporate finance service?",a:"Corporate finance services help businesses manage financial planning, fundraising, budgeting, investments, mergers, acquisitions, and capital structure decisions. These services support business growth, improve financial efficiency, optimize cash flow, and help organizations make strategic financial decisions confidently."}];function y(){let[e,i]=(0,t.useState)(null),n=n=>{i(e===n?null:n)};return(0,a.jsxs)("section",{className:"faq-section",children:[(0,a.jsx)("div",{className:"partners-header2",style:{textAlign:"center",marginTop:"20px"},children:(0,a.jsx)("h2",{className:"partners-eyebrow",children:"Frequently Asked Questions"})}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"faq-head",children:(0,a.jsxs)("h3",{className:"faq-h3",children:["Queries That Could ",(0,a.jsx)("span",{children:"Hold You Back"})]})}),(0,a.jsxs)("div",{className:"faq-wrapper",children:[(0,a.jsx)("div",{className:"faq-col",children:w.slice(0,3).map((i,t)=>(0,a.jsxs)("div",{className:"faq-item",children:[(0,a.jsxs)("div",{className:"faq-question",onClick:()=>n(t),children:[(0,a.jsx)("span",{children:i.q}),(0,a.jsx)("span",{className:"icon",children:e===t?"\u2212":"+"})]}),e===t&&(0,a.jsx)("div",{className:"faq-answer",children:i.a})]},t))}),(0,a.jsx)("div",{className:"faq-col",children:w.slice(3,6).map((i,t)=>(0,a.jsxs)("div",{className:"faq-item",children:[(0,a.jsxs)("div",{className:"faq-question",onClick:()=>n(t+3),children:[(0,a.jsx)("span",{children:i.q}),(0,a.jsx)("span",{className:"icon",children:e===t+3?"\u2212":"+"})]}),e===t+3&&(0,a.jsx)("div",{className:"faq-answer",children:i.a})]},t+3))})]})]})]})}function v(){return(0,a.jsxs)(o.A,{children:[(0,a.jsx)(c,{}),(0,a.jsx)(d,{}),(0,a.jsx)(p,{}),(0,a.jsx)(h,{}),(0,a.jsx)(u,{}),(0,a.jsx)(b,{}),(0,a.jsx)(y,{}),(0,a.jsx)(s.A,{})]})}}}]);