"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["641"],{9393(e,t,i){i.d(t,{A:()=>a});var r=i(4848),n=i(6540);let a=function(){let e=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let t=e.current;if(!t)return;let i=t.getContext("2d"),r="#ed8337",n,a,s=[],o;function l(){n=t.width=t.parentElement.offsetWidth,a=t.height=t.parentElement.offsetHeight}function d(){this.reset()}d.prototype.reset=function(){this.x=Math.random()*n,this.y=Math.random()*a,this.r=2.2*Math.random()+.6,this.type=.55>Math.random()?"dot":.5>Math.random()?"ring":"plus",this.speed=.35*Math.random()+.08,this.dir=Math.random()*Math.PI*2,this.alpha=.45*Math.random()+.1,this.pulse=Math.random()*Math.PI*2,this.pulseSpeed=.018*Math.random()+.008,this.size=4*Math.random()+2},d.prototype.update=function(){this.x+=Math.cos(this.dir)*this.speed,this.y+=Math.sin(this.dir)*this.speed,this.pulse+=this.pulseSpeed,this.dir+=(Math.random()-.5)*.015,this.x<-20&&(this.x=n+20),this.x>n+20&&(this.x=-20),this.y<-20&&(this.y=a+20),this.y>a+20&&(this.y=-20)},d.prototype.draw=function(){let e=this.alpha*(.7+.3*Math.sin(this.pulse));if(i.save(),i.globalAlpha=e,i.strokeStyle=i.fillStyle=r,i.lineWidth=1,"dot"===this.type)i.beginPath(),i.arc(this.x,this.y,this.r+.4*Math.sin(this.pulse),0,2*Math.PI),i.fill();else if("ring"===this.type){let e=this.size*(.9+.15*Math.sin(this.pulse));i.beginPath(),i.arc(this.x,this.y,e,0,2*Math.PI),i.stroke()}else{let e=this.size*(.9+.1*Math.sin(this.pulse));i.beginPath(),i.moveTo(this.x-e,this.y),i.lineTo(this.x+e,this.y),i.moveTo(this.x,this.y-e),i.lineTo(this.x,this.y+e),i.stroke()}i.restore()},window.addEventListener("resize",l),l(),s=[];let c=Math.floor(n*a/9e3);for(let e=0;e<Math.max(c,28);e++)s.push(new d);return!function e(){i.clearRect(0,0,n,a),function(){let e=s.filter(e=>"dot"===e.type);for(let t=0;t<e.length;t++)for(let n=t+1;n<e.length;n++){let a=e[t].x-e[n].x,s=e[t].y-e[n].y,o=Math.sqrt(a*a+s*s);o<110&&(i.save(),i.globalAlpha=(1-o/110)*.12,i.strokeStyle=r,i.lineWidth=.7,i.beginPath(),i.moveTo(e[t].x,e[t].y),i.lineTo(e[n].x,e[n].y),i.stroke(),i.restore())}}(),s.forEach(e=>{e.update(),e.draw()}),o=requestAnimationFrame(e)}(),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",l)}},[]),(0,r.jsx)("section",{id:"cta-final",children:(0,r.jsxs)("div",{className:"cta-banner",style:{"--glow-x":"50%","--glow-y":"50%"},children:[(0,r.jsx)("canvas",{id:"ctaCanvas",ref:e}),(0,r.jsxs)("div",{className:"cta-banner-left",children:[(0,r.jsx)("div",{className:"partners-header",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Ready to Start?"})}),(0,r.jsxs)("h2",{className:"cta-banner-heading",children:["Let's Talk About Your",(0,r.jsx)("br",{}),"Next Big ",(0,r.jsx)("span",{className:"hl-italic",children:"Growth Move"})]}),(0,r.jsx)("p",{className:"cta-banner-sub",children:"No pressure. Just a quick conversation to understand where you are-and how we can help you move forward."})]}),(0,r.jsxs)("div",{className:"cta-banner-right",children:[(0,r.jsxs)("a",{href:"#",className:"cta-bprimary",children:["Book a Free Consultation",(0,r.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",children:(0,r.jsx)("path",{d:"M3 8h10M9 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,r.jsx)("a",{href:"#",className:"cta-bghost",children:"View All Services"})]})]})})}},8471(e,t,i){i.r(t),i.d(t,{default:()=>E});var r=i(4848),n=i(6540),a=i(1085),s=i(9393),o=i(3572);function l(){let e="https://priyamconsultancy.com/digital-marketing-company-in-coimbatore/",t="https://www.pcsbusinesssolution.com/img/digital-marketing.png",i=[{"@context":"https://schema.org","@type":"WebSite",name:"PCS Business Solution",url:"https://www.pcsbusinesssolution.com",potentialAction:{"@type":"SearchAction",target:"https://www.pcsbusinesssolution.com/search?q={search_term_string}","query-input":"required name=search_term_string"}},{"@context":"https://schema.org","@type":"Article",headline:"Digital Marketing Services in India | PCS Business Solution",description:"Result-driven digital marketing services including SEO, social media marketing, PPC, content marketing, and email marketing to grow your business online.",image:t,author:{"@type":"Organization",name:"PCS Business Solution"},publisher:{"@type":"Organization",name:"PCS Business Solution",logo:{"@type":"ImageObject",url:"https://www.pcsbusinesssolution.com/img/logo.png"}},url:e,datePublished:"2024-01-01",dateModified:"2025-01-01"},{"@context":"https://schema.org","@type":"LocalBusiness",name:"PCS Business Solution",description:"PCS Business Solution offers digital marketing, business registration, HR, and Microsoft App services across India.",url:"https://www.pcsbusinesssolution.com",logo:"https://www.pcsbusinesssolution.com/img/logo.png",image:t,telephone:"+91-XXXXXXXXXX",address:{"@type":"PostalAddress",streetAddress:"Your Street Address",addressLocality:"Chennai",addressRegion:"Tamil Nadu",postalCode:"600001",addressCountry:"IN"},openingHours:"Mo-Fr 09:00-18:00",sameAs:["https://www.linkedin.com/company/pcs-business-solution","https://www.facebook.com/pcsbusinesssolution"]},{"@context":"https://schema.org","@type":"Service",serviceType:"Digital Marketing",provider:{"@type":"Organization",name:"PCS Business Solution"},name:"Digital Marketing Services",description:"Comprehensive digital marketing services including SEO, social media marketing, PPC advertising, content marketing, and email marketing for business growth.",url:e,areaServed:{"@type":"Country",name:"India"},offers:{"@type":"Offer",availability:"https://schema.org/InStock",priceCurrency:"INR",url:e}},{"@context":"https://schema.org","@type":"ImageObject",contentUrl:t,url:e,description:"Digital Marketing Services by PCS Business Solution",name:"Digital Marketing Banner"},{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://www.pcsbusinesssolution.com"},{"@type":"ListItem",position:2,name:"Digital Marketing",item:e}]},{"@context":"https://schema.org","@type":"ItemList",name:"Digital Marketing Services",description:"List of digital marketing services offered by PCS Business Solution",url:e,itemListElement:[{"@type":"ListItem",position:1,name:"Search Engine Optimization (SEO)"},{"@type":"ListItem",position:2,name:"Social Media Marketing"},{"@type":"ListItem",position:3,name:"Pay-Per-Click Advertising (PPC)"},{"@type":"ListItem",position:4,name:"Content Marketing"},{"@type":"ListItem",position:5,name:"Email Marketing"},{"@type":"ListItem",position:6,name:"Online Reputation Management"}]},{"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"What do you mean by business registration?",acceptedAnswer:{"@type":"Answer",text:"Business registration is the official process of legally establishing a business entity with government authorities for recognition and lawful operations."}},{"@type":"Question",name:"How many types of business registration are there?",acceptedAnswer:{"@type":"Answer",text:"Common types include Private Limited Company, Public Limited Company, Limited Liability Partnership (LLP), One Person Company (OPC), Partnership Firm, and Sole Proprietorship."}},{"@type":"Question",name:"Which is better: Ltd or LLC?",acceptedAnswer:{"@type":"Answer",text:"It depends on your business needs; Private Limited (Ltd) suits structured growth and investor funding, while LLC offers flexibility and limited liability protection."}},{"@type":"Question",name:"Can a single person establish a business?",acceptedAnswer:{"@type":"Answer",text:"Yes, a single person can register as a One Person Company (OPC) or Sole Proprietorship, depending on liability and compliance preferences."}},{"@type":"Question",name:"Where do I go to register my business?",acceptedAnswer:{"@type":"Answer",text:"Business registration is done through government portals like MCA for companies, GST portal, or local state authorities, depending on the entity type."}},{"@type":"Question",name:"How much time does it take in India to register a business?",acceptedAnswer:{"@type":"Answer",text:"Registration timelines vary by entity type, typically 5\u201320 working days, depending on approvals, documentation, and government processing."}}]}];return(0,r.jsxs)(o.A,{children:[(0,r.jsx)("title",{children:"No.1 Digital Marketing Company in Coimbatore | ROI-Driven "}),(0,r.jsx)("meta",{name:"description",content:"Top Digital Marketing Company in Coimbatore providing SEO services, paid ads, social media marketing, and web development solutions for business growth. "}),(0,r.jsx)("meta",{name:"keywords",content:"digital marketing services India, SEO services, social media marketing, PPC advertising, content marketing, email marketing, online marketing agency, digital marketing company India, PCS Business Solution"}),(0,r.jsx)("link",{rel:"canonical",href:e}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:title",content:"No.1 Digital Marketing Company in Coimbatore | ROI-Driven "}),(0,r.jsx)("meta",{property:"og:description",content:"Top Digital Marketing Company in Coimbatore providing SEO services, paid ads, social media marketing, and web development solutions for business growth. "}),(0,r.jsx)("meta",{property:"og:url",content:e}),(0,r.jsx)("meta",{property:"og:image",content:t}),(0,r.jsx)("meta",{property:"og:site_name",content:"PCS Business Solution"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:"No.1 Digital Marketing Company in Coimbatore | ROI-Driven "}),(0,r.jsx)("meta",{name:"twitter:description",content:"Top Digital Marketing Company in Coimbatore providing SEO services, paid ads, social media marketing, and web development solutions for business growth. "}),(0,r.jsx)("meta",{name:"twitter:image",content:t}),i.map((e,t)=>(0,r.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)},t))]})}let d=()=>(0,r.jsx)("style",{children:`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap');
    :root {
      --navy:#022b44; --navy-deep:#011a2a; --navy-mid:#0a3652;
      --orange:#ed8337; --orange-light:#f5a66b;
      --text-dim:rgba(255,255,255,0.45);
    }
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    html{scroll-behavior:smooth;}
    body,#root,main{overflow-x:hidden;max-width:100vw;}
    img{max-width:100%;height:auto;}
    /* body{font-family:'DM Sans',sans-serif;background:var(--navy);color:#fff;overflow-x:hidden;} */

    /* \u{2500}\u{2500} PROCESS SECTION \u{2500}\u{2500} */
    .ppc-tp-section{position:relative;background:#ffffff;padding:4rem 0 4rem;overflow:hidden;}
    .ppc-tp-cross{position:absolute;inset:0;pointer-events:none;z-index:0;background-image:linear-gradient(45deg,rgba(2,43,68,0.015) 25%,transparent 25%),linear-gradient(-45deg,rgba(2,43,68,0.015) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(2,43,68,0.015) 75%),linear-gradient(-45deg,transparent 75%,rgba(2,43,68,0.015) 75%);background-size:20px 20px;background-position:0 0,0 10px,10px -10px,-10px 0px;}
    .ppc-tp-header{position:relative;z-index:2;text-align:center;padding:0 6% 5rem;}
    .ppc-tp-h2{font-family:'Poppins',sans-serif;font-size:clamp(2rem,3.5vw,2.6rem);font-weight:700;line-height:1.1;color:#0d1f2d;margin-bottom:1.1rem;}
    .ppc-tp-h2 em{color:var(--orange);font-style:normal;font-weight:600;}
    .ppc-tp-sub{font-size:.97rem;line-height:1.8;color:#000;margin:0 auto;}
    .ppc-tp-body{position:relative;z-index:2;max-width:1180px;margin:0 auto;padding:0 5%;}
    .ppc-tp-step{display:grid;grid-template-columns:1fr 2fr;gap:0;margin-bottom:1px;position:relative;opacity:0;transition:opacity .6s ease,transform .6s ease;}
    .ppc-tp-step.tp-vis{opacity:1;transform:none !important;}
    .ppc-tp-step:nth-child(odd){transform:translateX(-28px);}
    .ppc-tp-step:nth-child(even){transform:translateX(28px);grid-template-columns:2fr 1fr;}
    .ppc-tp-step:nth-child(1){transition-delay:.04s;}.ppc-tp-step:nth-child(2){transition-delay:.15s;}.ppc-tp-step:nth-child(3){transition-delay:.26s;}.ppc-tp-step:nth-child(4){transition-delay:.37s;}.ppc-tp-step:nth-child(5){transition-delay:.48s;}
    .ppc-tp-num-side{background:#fafafa;border:1px solid rgba(2,43,68,0.06);padding:3rem 2.5rem;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden;transition:background .35s ease;}
    .ppc-tp-step:hover .ppc-tp-num-side{background:rgba(237,131,55,0.04);}
    .ppc-tp-step:nth-child(even) .ppc-tp-num-side{order:2;}
    .ppc-tp-step:nth-child(even) .ppc-tp-text-side{order:1;}
    .ppc-tp-bg-num{position:absolute;bottom:-20px;right:-10px;font-family:'Poppins',sans-serif;font-size:9rem;font-weight:900;color:rgba(237,131,55,0.07);line-height:1;letter-spacing:-.06em;pointer-events:none;transition:color .35s ease;user-select:none;}
    .ppc-tp-step:hover .ppc-tp-bg-num{color:rgba(237,131,55,0.13);}
    .ppc-tp-step-index{font-family:'Space Mono',monospace;font-size:.6rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:rgba(237,131,55,0.5);margin-bottom:.5rem;}
    .ppc-tp-step-title{font-family:'Poppins',sans-serif;font-size:1.23rem;font-weight:600;color:#0d1f2d;line-height:1.3;letter-spacing:-.02em;transition:color .3s ease;position:relative;z-index:2;}
    .ppc-tp-step:hover .ppc-tp-step-title{color:var(--orange);}
    .ppc-tp-step-title::after{content:'';display:block;margin-top:6px;height:3px;background:var(--orange);border-radius:2px;width:0;transition:width .35s ease;}
    .ppc-tp-step:hover .ppc-tp-step-title::after{width:48px;}
    .ppc-tp-phase{margin-top:.8rem;font-family:'DM Sans',sans-serif;font-size:.78rem;font-weight:600;color:rgba(237,131,55,0.65);letter-spacing:.04em;position:relative;z-index:2;}
    .ppc-tp-text-side{border:1px solid rgba(2,43,68,0.06);border-left:none;padding:3rem 2.8rem;display:flex;flex-direction:column;justify-content:center;background:#fff;position:relative;overflow:hidden;transition:background .35s ease;}
    .ppc-tp-step:nth-child(even) .ppc-tp-text-side{border-left:1px solid rgba(2,43,68,0.06);border-right:none;}
    .ppc-tp-text-side::before{content:'';position:absolute;bottom:0;right:0;width:0;height:0;border-style:solid;border-width:0 0 32px 32px;border-color:transparent transparent rgba(237,131,55,0.1) transparent;transition:border-width .3s ease;}
    .ppc-tp-step:hover .ppc-tp-text-side::before{border-width:0 0 44px 44px;}
    .ppc-tp-desc{font-size:.89rem;line-height:1.82;color:#010202a3;margin-bottom:1.2rem;}
    .ppc-tp-bullets{display:flex;flex-direction:column;gap:.3rem;}
    .ppc-tp-bullet{font-size:.85rem;font-weight:500;color:#010202a3;display:flex;align-items:flex-start;gap:.55rem;}
    .ppc-tp-bullet::before{content:'';display:inline-block;width:12px;height:1.5px;background:var(--orange);flex-shrink:0;border-radius:2px;}
    @media(max-width:760px){
      .ppc-tp-step,.ppc-tp-step:nth-child(even){grid-template-columns:1fr;}
      .ppc-tp-step:nth-child(even) .ppc-tp-num-side{order:0;}
      .ppc-tp-step:nth-child(even) .ppc-tp-text-side{order:1;border-left:none;border-right:none;}
      .ppc-tp-text-side{border-left:none;border-top:none;}
      .ppc-tp-num-side,.ppc-tp-text-side{padding:2rem 5%;}
    }
    @media(max-width:580px){
      .ppc-tp-step,.ppc-tp-step:nth-child(even){grid-template-columns:1fr !important;}
      .ppc-tp-step:nth-child(even) .ppc-tp-num-side{order:0 !important;}
      .ppc-tp-step:nth-child(even) .ppc-tp-text-side{order:1 !important;border-left:none !important;border-right:none !important;}
      .ppc-tp-text-side{border-left:none !important;border-top:none !important;}
      .ppc-tp-num-side,.ppc-tp-text-side{padding:1.5rem 4% !important;}
      .ppc-tp-header{padding:0 4% 2.5rem !important;}
      .ppc-tp-body{padding:0 4% !important;}
      .ppc-tp-step-title{font-size:1.4rem !important;}
    }
    @media(max-width:480px){
      .ppc-tp-num-side,.ppc-tp-text-side{padding:1.2rem 4% !important;}
    }

    /* \u{2500}\u{2500} BENEFITS SECTION \u{2500}\u{2500} */
    .tl-section{position:relative;padding:6rem 4%;background:#ffffff;overflow:hidden;}
    .tl-inner{position:relative;z-index:2;margin:0 auto;}
    .tl-header{text-align:center;margin-bottom:4rem;}
    .tl-heading{font-family:'Poppins',sans-serif;font-size:clamp(1.7rem,2.8vw,2.4rem);font-weight:700;line-height:1.15;color:#000;margin-bottom:.85rem;}
    .tl-heading span{color:var(--orange);}
    .tl-subtext{font-size:.96rem;line-height:1.7;color:#000;margin:0 auto;}
    .bento-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;}
    .bn-cell{position:relative;padding:2.4rem 2.2rem;display:flex;flex-direction:column;gap:.7rem;background:transparent;opacity:1;transition:background 0.3s ease;}
    .bn-cell-1,.bn-cell-2,.bn-cell-3{border-top:1.5px solid rgba(0,65,104,0.08);}
    .bn-cell-2,.bn-cell-5{border-left:1.5px solid rgba(0,65,104,0.08);border-right:1.5px solid rgba(0,65,104,0.08);}
    .bn-cell-4,.bn-cell-5,.bn-cell-6{border-top:1.5px solid rgba(0,65,104,0.08);}
    .bn-cell::before{content:'';position:absolute;left:0;top:2.4rem;bottom:2.4rem;width:3px;border-radius:2px;background:var(--orange);transform:scaleY(0);transform-origin:top;transition:transform 0.3s ease;}
    .bn-cell:hover::before{transform:scaleY(1);}
    .bn-cell:hover{background:rgba(237,131,55,0.025);}
    .bn-cell .bn-icon{width:44px;height:44px;border-radius:12px;background:rgba(237,131,55,0.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-bottom:.2rem;transition:background 0.28s;}
    .bn-cell:hover .bn-icon{background:rgba(237,131,55,0.2);}
    .bn-cell .bn-icon svg{width:22px;height:22px;stroke:var(--orange);fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}
    .bn-cell .bn-num{font-size:.62rem;font-weight:700;letter-spacing:.1em;color:var(--orange);text-transform:uppercase;}
    .bn-cell .bn-title{font-family:'Poppins',sans-serif;font-size:1.05rem;font-weight:600;color:#000;line-height:1.3;}
    .bn-cell .bn-desc{font-size:.875rem;line-height:1.78;color:#000;font-family:'Poppins',sans-serif;}
    .bn-cell .bn-link{display:inline-flex;align-items:center;gap:.3rem;font-size:.8rem;font-weight:700;color:var(--orange);text-decoration:none;margin-top:.3rem;opacity:0;transform:translateX(-6px);transition:opacity 0.25s ease,transform 0.25s ease;}
    .bn-cell:hover .bn-link{opacity:1;transform:translateX(0);}
    @media(max-width:768px){.bento-grid{grid-template-columns:repeat(2,1fr);}.bn-cell-2,.bn-cell-5{border-left:none;border-right:none;}.bn-cell-3,.bn-cell-5{border-left:1.5px solid rgba(0,65,104,0.08);}}
    @media(max-width:480px){.bento-grid{grid-template-columns:1fr;}.bn-cell-2,.bn-cell-5{border-left:none;}.bn-cell-3,.bn-cell-5{border-left:none;}}
  
  /* CONTAINER */
.feature-container{
  display:flex;
  justify-content:center;
  gap:40px;
  /*flex-wrap: wrap;*/
}

/* LEFT & RIGHT COLUMN */
.feature-col{
  width:320px;
  display:flex;
  flex-direction:column;
  /* justify-content:space-between; */
  position:relative;
}
.feature-col.left{text-align:left;}
.feature-col.right{text-align:left; margin-left: 20px;}

/* FEATURE BOX */
.feature-box{
  position:relative;
  margin-bottom: 30px;
}

.feature-box h3{
  color:#101828;
  font-size:22px;
  letter-spacing: 0.1px;
  margin-bottom:6px;
  font-weight: 600;
  position:relative;
  padding-bottom:14px;
}

/* UNDERLINE DOTTED LINE FOR h3 */
.feature-box h3::after {
    content: '';
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 99%;
    border-top: 1px solid #2042765c;
}

/* h4 and list */
.feature-box h4{
  font-size:19px;
  margin-bottom:10px;
  letter-spacing: 0.1px;
  color: #F8A117;
  font-weight: 500;
}

.feature-box ul{
  padding-left:18px;
   font-size:17px;
  margin:0;
}

.feature-box li{
  color:#4B5569;
  margin-bottom:6px;
}

/* UNIQUE CONNECTOR LINES LEFT (touch icons) */
.feature-col.left .box1::after{
 content: '';
    position: absolute;
    top: 74px;
    right: -69px;
    width: 77px;
    height: 1px;
    border-top: 1px solid #2042765c;
    transform: rotate(20deg);
    transform-origin: right center;
}

.feature-col.left .box2::after{
content: '';
    position: absolute;
    top: 22.5%;
    right: -31px;
    width: 35px;
    height: 1px;
    border-top: 1px solid #2042765c;
    transform: rotate(0deg);
    transform-origin: right center;
}

.feature-col.left .box3::after{
content: '';
    position: absolute;
    bottom: 250px;
    right: -96px;
    width: 118px;
    height: 1px;
    border-top: 1px solid #2042765c;
    transform: rotate(-32deg);
    transform-origin: right center;
}

/* UNIQUE CONNECTOR LINES RIGHT (touch icons) */
.feature-col.right .box1::after{
content: '';
    position: absolute;
    top: 72px;
    left: -88px;
    width: 92px;
    height: 1px;
    border-top: 1px solid #2042765c;
    transform: rotate(-15deg);
    transform-origin: left center;
}

.feature-col.right .box2::after {
       content: '';
    position: absolute;
    top: 23%;
    left: -33px;
    width: 33px;
    height: 1px;
    border-top: 1px solid #2042765c;
    transform: rotate(0deg);
    transform-origin: left center;
}

.feature-col.right .box3::after{
        content: '';
    position: absolute;
    bottom: 0px;
    left: -104px;
    top: -16px;
    width: 122px;
    height: 1px;
    border-top: 1px solid #2042765c;
    transform: rotate(32deg);
    transform-origin: left center;

}
/* CENTER CIRCLE */
.feature-center{
  flex:0 0 420px;
  display:flex;
  justify-content:center;
}

.outer-circle{
  width:500px;
  height:500px;
  border:3px solid #0F234B;
  border-radius:50%;
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
}

.ring{
  position:absolute;
  width:400px;
  height:400px;
  border:2px dashed #05041875;
  border-radius:50%;
}

.inner-circle{
  width:350px;
  height:350px;
  border-radius:50%;
  overflow:hidden;
}

.inner-circle img{
  width:100%;
  height:100%;
  object-fit:cover;
}
/* ICON STYLE */
.icon{
  width:56px;
  height:56px;
  background:#0F234B;       /* \u{2705} icon bg */
  color:#fff;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  font-size:22px;
  border: 2px solid #204276; /* \u{2705} inner border */
  z-index: 2;
}
.icon::before{
  content: "";
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 2px solid #204276; /* \u{2705} line color */
  opacity: .6;
  animation: ringBlink 2s ease-in-out infinite;
}
.icon::after{
  content: "";
  position: absolute;
  inset: -12px;
  border-radius: 50%;
  border: 1px dashed #204276!important; /* \u{2705} line color */
  opacity: .4;
  animation: ringBlink 2s ease-in-out infinite;
  animation-delay: .6s;
}

@keyframes ringBlink{
  0%{
    transform: scale(1);
    opacity: .3;
  }
  50%{
    transform: scale(1.08);
    opacity: .9;
  }
  100%{
    transform: scale(1);
    opacity: .3;
  }
}
/* LEFT ICONS */
.top-left{
     left: 35px;
    top: 33px;
}

.middle-left{
  left:-28px;
  top:53%;
  transform:translateY(-50%);
}

.bottom-left{
    left: 54px;
    bottom: 29px;
}

/* RIGHT ICONS */
.top-right{
 right: 35px;
    top: 40px;
}

.middle-right{
  right:-28px;
  top:53%;
  transform:translateY(-50%);
}

.bottom-right{
     right: 46px;
    bottom: 25px;
}
/* RESPONSIVE */
@media(max-width:1024px){
  .feature-container{
    flex-direction:column;
    align-items:center;
    padding: 30px;
  }

  .feature-col{
    width:100%;
    max-width:420px;
    height:auto;
    justify-content:flex-start;
    gap:40px;
    text-align:center;
  }

  .feature-center{
    margin:40px 0;
  }

  .outer-circle{
    width:320px;
    height:320px;
  }

  .ring{
    width:220px;
    height:220px;
  }

  .inner-circle{
    width:180px;
    height:180px;
  }

  /* hide connector lines on mobile for cleaner layout */
  .feature-box::after{
    display:none;
  }
}
@media (max-width: 1024px){
  .feature-container{
    flex-direction: column;
    align-items: center;
  }

  .feature-col{
    max-width: 500px;
    width: 100%;
    text-align: center;
    gap: 40px;
  }

  .feature-center{
    margin: 50px 0;
  }

  .outer-circle{
    width: 360px;
    height: 360px;
  }

  .ring{
    width: 260px;
    height: 260px;
  }

  .inner-circle{
    width: 210px;
    height: 210px;
  }

  /* Hide connector lines */
  .feature-box::after{
    display: none !important;
  }
}

/* Mobiles */
@media (max-width: 600px){
  .outer-circle{
    width: 280px;
    height: 280px;
  }

  .ring{
    width: 200px;
    height: 200px;
  }

  .inner-circle{
    width: 160px;
    height: 160px;
  }

  .icon{
    width: 46px;
    height: 46px;
    font-size: 18px;
  }

  .feature-box h3{
    font-size: 20px;
  }

  .feature-box h4{
    font-size: 17px;
  }

  .feature-box ul{
    font-size: 15px;
  }
}

  
    `}),c=[{step:"01",title:"Understanding What Really Matters",phase:"Phase 1 \u2014 Understand",desc:"We begin with in-depth research to clearly understand your business, industry landscape, and competitive environment. This includes industry analysis, competitor mapping, keyword research, audience behavior insights, and current performance evaluation. By identifying opportunities, challenges, and intent-driven data, we lay a strong foundation for a focused and effective digital marketing strategy.",bullets:[]},{step:"02",title:"Customized Digital Growth Roadmap",phase:"Phase 2 \u2014 Digital ",desc:"As a strategy-first digital marketing agency, we design customized growth roadmaps aligned with your specific objectives\u2014whether it\u2019s brand awareness, lead generation, customer acquisition, or revenue growth. Each roadmap outlines clear action plans, timelines, channels, and performance benchmarks to ensure every digital effort contributes directly to your business goals",bullets:[]},{step:"03",title:"Fast Execution With Expertise",phase:"Phase 3 \u2014 Fast ",desc:"Once the strategy is defined, our in-house team of digital marketing specialists executes with speed, precision, and accountability. From SEO and paid advertising to content creation and social media campaigns, we ensure seamless execution across platforms while maintaining quality, consistency, and alignment with the overall growth plan.",bullets:[]},{step:"04",title:"Continuous Optimization",phase:"Phase 4 \u2014 Optimize ",desc:"Digital marketing is an ongoing process, not a one-time activity. We continuously monitor campaign performance, analyze data, test new approaches, and optimize strategies in real time. By refining targeting, creatives, content, and funnels, we ensure sustained growth, improved efficiency, and long-term digital success.",bullets:[]}];function p(){return(0,r.jsxs)("section",{className:"hero",id:"hero",children:[(0,r.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

/* \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
   HERO \u{2014} BRC Standard Layout
\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550} */
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
html { scroll-behavior: smooth; }
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
/* orange span support */
.hero-heading .orange { color: var(--orange); }
.hero-heading .underline-word { position: relative; display: inline-block; }
.hero-heading .underline-word::after {
  content: ''; position: absolute; left: 0; bottom: -3px;
  width: 100%; height: 3px; background: linear-gradient(90deg,#ed8337,#f5a66b); border-radius: 2px;
  transform: scaleX(0); transform-origin: left;
  animation: line-in 0.55s 1s ease forwards;
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
.hero-img {
  width: 100%;
  object-fit: contain;
  display: block;
}

/* \u{2550}\u{2550} TABLET (\u{2264} 960px) \u{2550}\u{2550} */
@media(max-width: 960px) {
  .hero {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    padding: 6rem 5% 4rem;
    min-height: auto;
    text-align: start;
    gap: 2.5rem;
  }
  .hero-left { order: 1; align-items: flex-start;         padding: 3rem 0; }
  .hero-right { width: 100% !important; height: auto !important; order: 2; display: flex; justify-content: center; }
  .hero-img { width: 100%; max-width: 480px; height: auto; }
  .hero-sub { max-width: 90%; }
  .hero-actions { justify-content: flex-start; }
}

/* \u{2550}\u{2550} MOBILE (\u{2264} 600px) \u{2550}\u{2550} */
@media(max-width: 600px) {
  .hero { padding: 5rem 4% 3rem; gap: 2rem; }
  .hero-heading { font-size: clamp(1.7rem, 6vw, 2.2rem) !important; }
  .hero-sub { font-size: 0.9rem; max-width: 100%; }
  .hero-img { max-width: 100%; width: 100%; }
  .h-badge { font-size: 0.65rem; }
}
.menu li { position: relative; cursor: pointer; font-size: 16px; color: black; }

      `}),(0,r.jsxs)("div",{className:"hero-left",children:[(0,r.jsxs)("div",{className:"h-badge",children:[(0,r.jsx)("div",{className:"badge-dot"}),"Digital Marketing "]}),(0,r.jsxs)("h1",{className:"hero-heading",children:["Trusted Digital",(0,r.jsx)("span",{className:"hl lined",style:{marginRight:"12px"},children:"   Marketing Company"}),"in Coimbatore"]}),(0,r.jsx)("p",{className:"hero-sub",children:"Grow your business with a results-driven Digital Marketing Company in Coimbatore that focuses on visibility, lead generation, and long-term business growth. At PCS, we don\u2019t just run campaigns \u2014 we build strategic digital ecosystems that help businesses attract the right audience, generate quality leads, and improve conversions."}),(0,r.jsx)("p",{className:"hero-sub",children:"As a performance-focused Digital Marketing Agency, we help brands stay ahead in today\u2019s competitive digital landscape through customized marketing strategies that drive ROI, engagement, and growth."})]}),(0,r.jsx)("div",{className:"hero-right",children:(0,r.jsxs)("div",{className:"hero-form-card",children:[(0,r.jsx)("style",{children:`
            .hero-form-card {
              background: #fff;
              border-radius: 20px;
              padding: 2.2rem 2.4rem 2.4rem;
              width: 100%;
              max-width: 480px;
              box-shadow: 0 20px 60px rgba(0,0,0,0.18);
              position: relative;
              z-index: 3;
            }
            .hero-form-badge {
              display: inline-flex;
              align-items: center;
              gap: 0.4rem;
              background: transparent;
              border: 1px solid #022b44;
              color: #022b44;
              font-size: 0.7rem;
              font-weight: 600;
              padding: 0.3rem 0.85rem;
              border-radius: 50px;
              letter-spacing: 0.07em;
              text-transform: uppercase;
              margin-bottom: 1rem;
            }
            .hero-form-title {
              font-family: 'Poppins', sans-serif;
              font-size: clamp(1.5rem, 2.5vw, 1.9rem);
              font-weight: 700;
              color: #022b44;
              line-height: 1.2;
              margin-bottom: 0.4rem;
            }
            .hero-form-title span {
              color: #ed8337;
            }
            .hero-form-sub {
              font-size: 0.85rem;
              color: #666;
              margin-bottom: 1.5rem;
            }
            .hero-form-row {
             display: flex;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
    grid-auto-flow: row;
    flex-direction: column;
            }
            .hero-form-field {
              display: flex;
              flex-direction: column;
              gap: 0.3rem;
            }
            .hero-form-field.full {
              grid-column: 1 / -1;
            }
            .hero-form-field input,
            .hero-form-field textarea {
              border: none;
              border-bottom: 1.5px solid #ccc;
              outline: none;
              padding: 0.55rem 0;
              font-size: 0.88rem;
              font-family: 'Poppins', sans-serif;
              color: #022b44;
              background: transparent;
              transition: border-color 0.2s;
              width: 100%;
            }
            .hero-form-field input:focus,
            .hero-form-field textarea:focus {
              border-bottom-color: #ed8337;
            }
            .hero-form-field input::placeholder,
            .hero-form-field textarea::placeholder {
              color: #aaa;
              font-size: 0.85rem;
            }
            .hero-form-field textarea {
              resize: none;
              min-height: 64px;
            }
            .hero-phone-wrap {
              display: flex;
              align-items: flex-end;
              gap: 0.5rem;
              border-bottom: 1.5px solid #ccc;
              transition: border-color 0.2s;
            }
            .hero-phone-wrap:focus-within {
              border-bottom-color: #ed8337;
            }
            .hero-phone-prefix {
              font-size: 0.88rem;
              font-weight: 700;
              color: #022b44;
              padding-bottom: 0.55rem;
              white-space: nowrap;
              flex-shrink: 0;
            }
            .hero-phone-wrap input {
              border: none !important;
              border-bottom: none !important;
              padding: 0.55rem 0 !important;
              flex: 1;
            }
            .hero-phone-wrap input:focus {
              border-bottom: none !important;
            }
            .hero-form-footer {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-top: 1.4rem;
              gap: 1rem;
            }
            .hero-form-btn {
              display: inline-flex;
              align-items: center;
              gap: 0.6rem;
              background: #ed8337;
              color: #fff;
              border: none;
              border-radius: 50px;
              padding: 0.85rem 1.8rem;
              font-family: 'Poppins', sans-serif;
              font-size: 0.9rem;
              font-weight: 600;
              cursor: pointer;
              transition: background 0.2s, transform 0.18s;
              flex-shrink: 0;
            }
            .hero-form-btn:hover {
              background: #004168;
              transform: translateY(-2px);
            }
            .hero-form-btn-arrow {
              width: 26px;
              height: 26px;
              border-radius: 50%;
              background: rgba(255,255,255,0.15);
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 0.9rem;
            }
            .hero-form-reply {
              font-size: 0.78rem;
              color: #888;
              line-height: 1.4;
            }
            .hero-form-reply strong {
              display: block;
              color: #555;
              font-size: 0.82rem;
            }
            @media(max-width: 960px) {
              .hero-form-card {
                max-width: 100%;
              }
            }
            @media(max-width: 600px) {
              .hero-form-card {
                padding: 1.6rem 1.4rem 1.8rem;
              }
              .hero-form-row {
                grid-template-columns: 1fr;
              }
            }
          `}),(0,r.jsxs)("h2",{className:"hero-form-title",children:["Your Growth, ",(0,r.jsx)("span",{children:"Our Mission."})]}),(0,r.jsx)("p",{className:"hero-form-sub",children:"Fill in your details \u2014 we'll get back within 24 hours."}),(0,r.jsx)(m,{})]})})]})}function m(){let[e,t]=(0,n.useState)({name:"",email:"",phone:"",company:"",message:""}),[i,a]=(0,n.useState)(!1),s=e=>{t(t=>({...t,[e.target.name]:e.target.value}))};return i?(0,r.jsxs)("div",{style:{textAlign:"center",padding:"2rem 0"},children:[(0,r.jsx)("div",{style:{fontSize:"2.5rem",marginBottom:"0.8rem"},children:"\u2705"}),(0,r.jsx)("p",{style:{color:"#022b44",fontWeight:700,fontSize:"1.1rem",marginBottom:"0.4rem"},children:"Thank you!"}),(0,r.jsx)("p",{style:{color:"#666",fontSize:"0.88rem"},children:"We'll get back to you within 24 hours."})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"hero-form-row",children:[(0,r.jsx)("div",{className:"hero-form-field",children:(0,r.jsx)("input",{type:"text",name:"name",placeholder:"Your Name",value:e.name,onChange:s})}),(0,r.jsx)("div",{className:"hero-form-field",children:(0,r.jsx)("input",{type:"email",name:"email",placeholder:"Email Address",value:e.email,onChange:s})})]}),(0,r.jsxs)("div",{className:"hero-form-row",children:[(0,r.jsx)("div",{className:"hero-form-field",children:(0,r.jsxs)("div",{className:"hero-phone-wrap",children:[(0,r.jsx)("span",{className:"hero-phone-prefix",children:"IN +91"}),(0,r.jsx)("input",{type:"tel",name:"phone",placeholder:"Mobile Number",value:e.phone,onChange:s})]})}),(0,r.jsx)("div",{className:"hero-form-field",children:(0,r.jsx)("input",{type:"text",name:"company",placeholder:"Company Name",value:e.company,onChange:s})})]}),(0,r.jsx)("div",{className:"hero-form-row",children:(0,r.jsx)("div",{className:"hero-form-field full",children:(0,r.jsx)("textarea",{name:"message",placeholder:"Your Message",value:e.message,onChange:s})})}),(0,r.jsx)("div",{className:"hero-form-footer",children:(0,r.jsxs)("button",{className:"hero-form-btn",onClick:()=>{e.name&&e.email&&e.phone&&a(!0)},children:["Send Message",(0,r.jsx)("span",{className:"hero-form-btn-arrow",children:"\u2192"})]})})]})}let g=[{id:1,name:"Analytix-Hub",logo:"/img/Analytix-Hub.webp"},{id:2,name:"Baltimore",logo:"/img/baltimore.webp"},{id:3,name:"Sterlo",logo:"/img/sterlo.webp"},{id:4,name:"Sterlo Build",logo:"/img/sterlobuild-partner.webp"},{id:5,name:"Sterlo Care",logo:"/img/sterlocare-partner.webp"},{id:6,name:"Microsoft",logo:"/img/microsoft-app-partner.jpeg"},{id:7,name:"Odoo",logo:"/img/odoo-partner.webp"},{id:8,name:"OreOps",logo:"/img/oreopps.webp"},{id:9,name:"Riya Consultancy",logo:"/img/riyaconsultancy.webp"},{id:10,name:"Tactive",logo:"/img/tactive.webp"},{id:11,name:"URCTS",logo:"/img/urctc.webp"},{id:12,name:"ZKY",logo:"/img/zky.webp"}];function h(){let e=[...g,...g];return(0,r.jsx)("section",{className:"partners-section",children:(0,r.jsxs)("div",{className:"partners-track-wrapper",children:[(0,r.jsx)("div",{className:"partners-fade-left"}),(0,r.jsx)("div",{className:"partners-fade-right"}),(0,r.jsx)("div",{className:"partners-track",children:e.map((e,t)=>(0,r.jsx)("div",{className:"partner-logo-card",children:e.logo&&(0,r.jsx)("img",{src:e.logo,alt:e.name})},t))})]})})}function x(){return(0,r.jsxs)("div",{className:"page",style:{padding:"60px 65px 75px"},children:[(0,r.jsxs)("div",{className:"left",children:[(0,r.jsx)("div",{className:"why-eyebrow",children:"Who We Are"}),(0,r.jsxs)("h2",{children:[(0,r.jsx)("em",{children:(0,r.jsx)("i",{children:"No.1 Digital Marketing"})})," Agency in Coimbatore"]}),(0,r.jsx)("p",{children:"PCS is recognized as one of the most trusted providers of Digital Marketing Services in Coimbatore, helping businesses improve visibility, strengthen customer engagement, and increase revenue through strategic digital solutions."}),(0,r.jsx)("p",{children:"Unlike traditional agencies that focus only on impressions and reports, our approach is built around measurable business outcomes. Every campaign is strategically planned based on your business goals, industry trends, target audience, and market competition."}),(0,r.jsx)("p",{children:"If you are searching for a reliable Digital Marketing Company in Coimbatore that focuses on both branding and performance, PCS delivers strategies designed for long-term success."})]}),(0,r.jsx)("div",{className:"right",children:(0,r.jsx)("img",{src:"/img/who-digital-marketing.webp",alt:"Who We Are",className:"who-img"})})]})}let f=[{id:"L1",side:"left",accentColor:"#004168",diamondBorder:"#ed8337e9",title:"Search Engine Optimization",text:"Increased website impressions from 340 to 10,000+ per month using SEO-rich Digital Marketing strategies.",icon:(0,r.jsx)("img",{src:"/img/icon/seo-miletones.webp",alt:"SEO",width:"44",height:"44"})},{id:"R1",side:"right",accentColor:"#004168",diamondBorder:"#ed8337",title:"Paid Marketing (PPC)",text:"Secured Top 5 Google rankings using ethical SEO and expert content-led Digital Marketing solutions.",icon:(0,r.jsx)("img",{src:"/img/icon/secure-miletones.webp",alt:"Paid Marketing",width:"44",height:"44"})},{id:"L2",side:"left",accentColor:"#004168",diamondBorder:"#ed8337",title:"Content Marketing",text:"Achieved 150% growth in qualified lead generation, scaling from zero to a 40cr strong-performing pipeline.",icon:(0,r.jsx)("img",{src:"/img/icon/achive-miletones.webp",alt:"Content Marketing",width:"44",height:"44"})},{id:"R2",side:"right",accentColor:"#004168",diamondBorder:"#ed8337",title:"Social Media Marketing",text:"Delivered performance-driven ad campaigns across India, GCC, SEA, Africa, USA, and the UK through advanced Digital Marketing frameworks.",icon:(0,r.jsx)("img",{src:"/img/icon/driven-miletones.webp",alt:"Social Media",width:"44",height:"44"})},{id:"L3",side:"left",accentColor:"#004168",diamondBorder:"#ed8337e9",title:"Website Development",text:"Generated over \u20B935 Cr in qualified leads for a single client through precise Digital Marketing funnels.",icon:(0,r.jsx)("img",{src:"/img/icon/lead-miletones.webp",alt:"Website Development",width:"44",height:"44"})},{id:"R3",side:"right",accentColor:"#004168",diamondBorder:"#ed8337e9",title:"Email & WhatsApp Marketing",text:"Reduced bounce rates from 80% to 35% and cut lead costs by 45% through optimized Digital Marketing executions.",icon:(0,r.jsx)("img",{src:"/img/icon/bounce-miletones.webp",alt:"Email Marketing",width:"44",height:"44"})}],u={L1:{cardTop:0,diamondTop:23},R1:{cardTop:95,diamondTop:118},L2:{cardTop:190,diamondTop:213},R2:{cardTop:285,diamondTop:308},L3:{cardTop:380,diamondTop:403},R3:{cardTop:475,diamondTop:498}};function b(){let[e,t]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=()=>t(window.innerWidth<700);return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,r.jsx)("section",{style:{background:"#004168",padding:e?"40px 16px":"60px 20px",display:"flex",justifyContent:"center"},children:(0,r.jsxs)("div",{style:{background:"#004168",padding:e?"28px 18px 40px":"44px 50px 68px 50px",width:"100%",maxWidth:1200,boxSizing:"border-box",position:"relative"},children:[(0,r.jsxs)("div",{className:"svc-header",children:[(0,r.jsx)("div",{className:"partners-header1",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Major Milestones"})}),(0,r.jsxs)("h2",{className:"svc-h2",children:["Smart Marketing. ",(0,r.jsx)("span",{children:"Sharp Execution."})," Stronger Results."]}),(0,r.jsx)("p",{className:"svc-sub",children:"Celebrating the key achievements that define our growth, success, and commitment as one of the best digital marketing agencies in Coimbatore."})]}),e&&(0,r.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:8},children:f.map((e,t)=>(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:20,width:"100%"},children:[(0,r.jsx)("div",{style:{width:60,height:60,borderRadius:12,background:"#fff",border:"2.5px solid #ed8337",transform:"rotate(45deg)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 14px rgba(237,131,55,0.25)",marginBottom:10},children:(0,r.jsx)("div",{style:{transform:"rotate(-45deg)",width:28,height:28,display:"flex",alignItems:"center",justifyContent:"center"},children:e.icon})}),(0,r.jsxs)("div",{style:{background:"#fff",borderLeft:`4px solid ${e.accentColor}`,borderRadius:14,padding:"16px 20px",width:"100%",maxWidth:420,boxShadow:"0 4px 20px rgba(0,0,0,0.12)"},children:[(0,r.jsx)("h3",{style:{fontSize:16,fontWeight:800,letterSpacing:"1.2px",textTransform:"uppercase",marginBottom:8,color:e.accentColor,fontFamily:"'Poppins',sans-serif"},children:e.title}),(0,r.jsx)("p",{style:{fontSize:15,lineHeight:1.72,color:"#334155",fontFamily:"'Poppins',sans-serif"},children:e.text})]}),t<f.length-1&&(0,r.jsx)("div",{style:{width:2,height:18,borderLeft:"2px dashed rgba(255,255,255,0.5)",marginTop:4}})]},e.id))}),!e&&(0,r.jsxs)("div",{style:{position:"relative",width:"100%",height:660,marginTop:"100px"},children:[(0,r.jsxs)("svg",{style:{position:"absolute",inset:0,width:"100%",height:"100%",zIndex:5,pointerEvents:"none",overflow:"visible"},viewBox:"0 0 1000 660",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("polygon",{points:"500,4 492,22 508,22",fill:"rgba(255,255,255,0.7)"}),(0,r.jsx)("path",{d:"M 500,22 C 505,32 530,63 530,80 C 530,98 510,111 500,127 C 490,143 470,159 470,175 C 470,191 490,206 500,222 C 510,238 530,254 530,270 C 530,286 510,301 500,317 C 490,333 470,349 470,365 C 470,381 490,396 500,412 C 510,428 530,444 530,460 C 530,476 510,491 500,507 C 490,523 470,539 470,555 C 470,571 490,586 500,602 C 500,620 500,640 500,655",stroke:"rgba(255,255,255,0.7)",strokeWidth:"2.5",strokeDasharray:"7 5",fill:"none",vectorEffect:"non-scaling-stroke"})]}),f.map(e=>{let t=u[e.id],i="left"===e.side;return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{position:"absolute",borderRadius:18,padding:i?"18px 70px 18px 24px":"18px 24px 18px 70px",width:"calc(50% - 80px)",height:160,zIndex:2,boxShadow:"0 4px 24px rgba(0,0,0,0.15)",background:"#fff",borderTop:`4px solid ${e.accentColor}`,clipPath:i?"polygon(0% 0%, 100% 0%, 100% calc(50% - 70px), calc(100% - 70px) 50%, 100% calc(50% + 70px), 100% 100%, 0% 100%)":"polygon(0% 0%, 0% calc(50% - 70px), 70px 50%, 0% calc(50% + 70px), 0% 100%, 100% 100%, 100% 0%)",top:t.cardTop,left:i?0:void 0,right:i?void 0:0,boxSizing:"border-box"},children:[(0,r.jsx)("h3",{style:{fontSize:16,fontWeight:800,letterSpacing:"1.2px",textTransform:"uppercase",marginBottom:8,color:e.accentColor,fontFamily:"'Poppins',sans-serif"},children:e.title}),(0,r.jsx)("p",{style:{fontSize:15,lineHeight:1.72,color:"#334155",fontFamily:"'Poppins',sans-serif"},children:e.text})]}),(0,r.jsx)("div",{style:{position:"absolute",zIndex:10,width:100,height:100,display:"flex",alignItems:"center",justifyContent:"center",top:t.diamondTop,left:i?"calc(50% - 60px)":"calc(50% + 60px)",transform:"translateX(-50%)"},children:(0,r.jsxs)("div",{style:{width:95,height:95,borderRadius:18,transform:"rotate(45deg)",background:"#fff",border:"3px solid #ed8337f8",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 5px 24px rgba(237,131,55,0.25)",position:"relative",flexShrink:0},children:[(0,r.jsx)("div",{style:{position:"absolute",inset:8,borderRadius:12,border:"1px solid rgba(237,131,55,0.25)",pointerEvents:"none"}}),(0,r.jsx)("div",{style:{transform:"rotate(-45deg)",width:30,height:30,display:"flex",alignItems:"center",justifyContent:"center"},children:e.icon})]})})]},e.id)})]})]})})}function y(){return(0,r.jsxs)("section",{className:"ms-cta-section",children:[(0,r.jsx)("style",{children:`
        .ms-cta-section {
          position: relative;
          background: #ffffff;
          overflow: hidden;
          padding: 0 6%;
        }
        .ms-cta-section::before {
          content: '';
          position: absolute; inset: 0;
          pointer-events: none; z-index: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23004168' fill-opacity='0.045'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .ms-cta-glow-l {
          position: absolute; pointer-events: none; z-index: 0;
          width: 540px; height: 540px; border-radius: 50%;
          top: -190px; left: -130px;
          background: radial-gradient(ellipse, rgba(237,131,55,0.08) 0%, transparent 70%);
        }
        .ms-cta-glow-r {
          position: absolute; pointer-events: none; z-index: 0;
          width: 440px; height: 440px; border-radius: 50%;
          bottom: -150px; right: -90px;
          background: radial-gradient(ellipse, rgba(0,65,104,0.07) 0%, transparent 70%);
        }
        .ms-cta-line-top {
          position: relative; z-index: 2; height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(237,131,55,0.35), transparent);
        }
        .ms-cta-line-bottom {
          position: relative; z-index: 2; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,65,104,0.1), transparent);
        }
        .ms-cta-inner {
          position: relative; z-index: 2;
          display: flex; align-items: center;
          justify-content: space-between;
          gap: 3rem;
          padding: 5.5rem 0 5.5rem;
          max-width: 1200px; margin: 0 auto;
        }
        .ms-cta-left { flex: 1 1 0; min-width: 0; }
        .ms-cta-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: #ed8337;
          margin-bottom: 1.1rem; font-family: 'DM Sans', sans-serif;
        }
        .ms-cta-eyebrow-bar { width: 20px; height: 2px; background: #ed8337; border-radius: 2px; }
        .ms-cta-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 700; line-height: 1.18;
          color: #022b44; margin: 0 0 1.1rem; letter-spacing: -0.02em;
        }
        .ms-cta-title span { color: #ed8337; }
        .ms-cta-desc {
          font-family: 'Poppins', sans-serif;
          font-size: 0.97rem; line-height: 1.82;
          color: #4a5568; max-width: 540px; margin: 0;
        }
        .ms-cta-right {
          display: flex; flex-direction: column;
          align-items: flex-end; gap: 1rem; flex-shrink: 0;
        }
        .ms-cta-stats {
          display: flex; gap: 1.2rem; margin-bottom: 0.3rem;
          justify-content: flex-end; flex-wrap: wrap;
        }
        .ms-cta-stat {
          display: flex; align-items: center; gap: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 0.78rem; color: #64748b; font-weight: 500;
        }
        .ms-cta-stat-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #ed8337;
          flex-shrink: 0; animation: ms-pulse 2s ease-in-out infinite;
        }
        @keyframes ms-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(1.5); }
        }
        .ms-cta-btn-primary {
          display: inline-flex; align-items: center; justify-content: center;
          gap: 0.55rem; padding: 0.95rem 2.2rem; border-radius: 50px;
          background: #ed8337; color: #fff;
          font-family: 'Poppins', sans-serif; font-size: 0.92rem; font-weight: 600;
          text-decoration: none; border: none; cursor: pointer;
          box-shadow: 0 6px 28px rgba(237,131,55,0.30);
          transition: background 0.22s, transform 0.18s, box-shadow 0.22s;
          white-space: nowrap; min-width: 230px; letter-spacing: 0.01em;
        }
        .ms-cta-btn-primary:hover {
          background: #f5a66b; transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(237,131,55,0.42);
          color: #fff; text-decoration: none;
        }
        .ms-cta-btn-arr {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(2,43,68,0.18);
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 0.85rem; transition: transform 0.22s;
        }
        .ms-cta-btn-primary:hover .ms-cta-btn-arr { transform: translateX(3px); }
        .ms-cta-btn-secondary {
          display: inline-flex; align-items: center; justify-content: center;
          gap: 0.55rem; padding: 0.93rem 2.2rem; border-radius: 50px;
          background: transparent; color: #022b44;
          font-family: 'Poppins', sans-serif; font-size: 0.92rem; font-weight: 600;
          text-decoration: none; border: 1.5px solid rgba(0,65,104,0.25);
          cursor: pointer; white-space: nowrap; min-width: 230px; letter-spacing: 0.01em;
          transition: border-color 0.22s, color 0.22s, background 0.22s, transform 0.18s, box-shadow 0.22s;
        }
        .ms-cta-btn-secondary:hover {
          border-color: #ed8337; color: #ed8337;
          background: rgba(237,131,55,0.05);
          transform: translateY(-3px);
          box-shadow: 0 8px 26px rgba(237,131,55,0.12);
          text-decoration: none;
        }
        .ms-cta-btn-ico { font-size: 1rem; transition: transform 0.22s; }
        .ms-cta-btn-secondary:hover .ms-cta-btn-ico { transform: rotate(-6deg) scale(1.15); }
        @media(max-width: 900px) {
          .ms-cta-inner { flex-direction: column; align-items: flex-start; gap: 2.5rem; padding: 4rem 0; }
          .ms-cta-right { align-items: flex-start; width: 100%; }
          .ms-cta-stats { justify-content: flex-start; }
          .ms-cta-btn-primary, .ms-cta-btn-secondary { min-width: 200px; }
        }
        @media(max-width: 580px) {
          .ms-cta-section { padding: 0 5%; }
          .ms-cta-inner { padding: 3rem 0; gap: 2rem; }
          .ms-cta-btn-primary, .ms-cta-btn-secondary { width: 100%; min-width: unset; }
          .ms-cta-right { width: 100%; }
        }
      `}),(0,r.jsx)("div",{className:"ms-cta-glow-l"}),(0,r.jsx)("div",{className:"ms-cta-glow-r"}),(0,r.jsx)("div",{className:"ms-cta-line-top"}),(0,r.jsxs)("div",{className:"ms-cta-inner",children:[(0,r.jsxs)("div",{className:"ms-cta-left",children:[(0,r.jsx)("div",{className:"partners-header1",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Major Milestones"})}),(0,r.jsxs)("h2",{className:"ms-cta-title",children:["Explore ",(0,r.jsx)("span",{children:"Proven Results Through"}),(0,r.jsx)("br",{})," Our Case Studies"]}),(0,r.jsx)("p",{className:"ms-cta-desc",children:"Discover our projects that demonstrate how strategy and clear execution drive measurable business success."})]}),(0,r.jsxs)("div",{className:"ms-cta-right",children:[(0,r.jsxs)("a",{href:"/contact",className:"ms-cta-btn-primary",children:["Start Your Growth Journey",(0,r.jsx)("span",{className:"ms-cta-btn-arr",children:"\u2192"})]}),(0,r.jsxs)("a",{href:"/our-work",className:"ms-cta-btn-secondary",children:[(0,r.jsx)("span",{className:"ms-cta-btn-ico",children:"\u{1F4CA}"}),"View Our Case Studies"]})]})]}),(0,r.jsx)("div",{className:"ms-cta-line-bottom"})]})}let w=[{icon:(0,r.jsx)("img",{src:"/img/icon/seo-dm.webp",alt:"Search Engine Optimization",width:"28",height:"28"}),title:"SEO (Search Engine Optimization)",desc:"We help your brand appear where customers search. Our Digital Marketing SEO strategies focus on authority-building, keyword targeting, link architecture, and long-term search ranking.",link:"/search-engine-optimization/"},{icon:(0,r.jsx)("img",{src:"/img/icon/dm-paid-marketing.webp",alt:"Paid Marketing",width:"28",height:"28"}),title:"PPC (Paid Marketing)",desc:"Maximize your reach instantly with targeted paid campaigns. We create data-driven ads that attract the right audience, boost conversions, and deliver measurable ROI.",link:"/performance-marketing/"},{icon:(0,r.jsx)("img",{src:"/img/icon/content-marketing-dm.webp",alt:"Content Marketing",width:"28",height:"28"}),title:"Content Marketing",desc:"Engage and inspire your audience with impactful content strategies\u2014blogs, videos, and social posts that build authority, boost visibility, and drive business growth.",link:"/content-marketing/"},{icon:(0,r.jsx)("img",{src:"/img/icon/dm-social-media-marketing.webp",alt:"Social Media Marketing",width:"28",height:"28"}),title:"Social Media Marketing",desc:"We build brands that people love. Our Digital Marketing experts create campaigns that spark engagement, build community, and convert followers into buyers.",link:"/social-media-marketing/"},{icon:(0,r.jsx)("img",{src:"/img/icon/website-development-dm.webp",alt:"Website Development",width:"28",height:"28"}),title:"Website Development",desc:"Designing and developing responsive, user-friendly websites that showcase your brand, enhance customer experience, and drive online growth with lasting impact.",link:"/website-development/"},{icon:(0,r.jsx)("img",{src:"/img/icon/dm-email-whatsapp-marketing.webp",alt:"Email and WhatsApp Marketing",width:"28",height:"28"}),title:"Graphic Design",desc:"Crafting creative and impactful designs that capture attention, reflect your brand identity, and communicate your message with clarity and style.",link:"/graphic-design/"}];function v(){return(0,r.jsxs)("section",{className:"svc-section",style:{position:"relative",background:"#004168",padding:"8rem 6% 7rem",overflow:"hidden"},children:[(0,r.jsx)("style",{children:`
        @media(max-width:768px){ .svc-section{ padding:4rem 5% 4rem !important; } }
        @media(max-width:480px){ .svc-section{ padding:3rem 4% 3rem !important; } }
        .svc-bg-r{position:absolute;inset:0;pointer-events:none;z-index:0;background:radial-gradient(ellipse 60% 55% at 15% 30%,rgba(237,131,55,0.07) 0%,transparent 60%),radial-gradient(ellipse 50% 45% at 85% 70%,rgba(56,189,248,0.05) 0%,transparent 55%);}
        .svc-grid{position:absolute;inset:0;pointer-events:none;z-index:0;background-image:linear-gradient(rgba(237,131,55,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(237,131,55,0.03) 1px,transparent 1px);background-size:58px 58px;}
        .svc-orb{position:absolute;border-radius:50%;filter:blur(70px);pointer-events:none;z-index:0;}
        .svc-orb-1{width:500px;height:500px;top:-120px;left:-100px;background:rgba(237,131,55,0.05);animation:sdm-o 14s ease-in-out infinite alternate;}
        .svc-orb-2{width:400px;height:400px;bottom:-80px;right:-60px;background:rgba(56,189,248,0.04);animation:sdm-o 14s 4s ease-in-out infinite alternate;}
        @keyframes sdm-o{from{transform:scale(1);}to{transform:scale(1.2) translate(20px,-20px);}}
        .svc-header{position:relative;z-index:2;text-align:center;margin-bottom:3rem;margin-left:auto;margin-right:auto;}
        .svc-tag{display:inline-flex;align-items:flex-start;gap:.55rem;font-size:.72rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--orange);margin-bottom:1rem;font-family:'DM Sans',sans-serif;}
        .svc-tagline{width:20px;height:2px;background:var(--orange);border-radius:2px;}
        .svc-h2{font-family:'Poppins',sans-serif;font-size:clamp(2rem,3.8vw,2.6rem);font-weight:600;line-height:1.1;color:#fff;margin-bottom:1.1rem;}
        .svc-h2 span{color:var(--orange);}
        .svc-sub{font-size:.97rem;line-height:1.8;color:rgb(255, 255, 255);}
        .svc-cards{position:relative;z-index:2;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:1.6rem;}
        .svc-card{background:linear-gradient(145deg, rgba(10, 54, 82, 0.55), rgb(76 186 235 / 23%));border:1px solid rgba(255,255,255,0.065);border-radius:22px;padding:2rem 1.8rem 1.8rem;position:relative;overflow:hidden;transition:transform .32s ease,box-shadow .32s ease,border-color .32s ease,background .32s ease;cursor:default;}
        .svc-card::before{content:'';position:absolute;inset:0;border-radius:22px;background:radial-gradient(ellipse 80% 55% at 50% 0%,rgba(237,131,55,0.1) 0%,transparent 70%);opacity:0;transition:opacity .32s;pointer-events:none;}
        .svc-card:hover{transform:translateY(-10px);box-shadow:0 22px 60px rgba(237,131,55,0.12),0 0 0 1px rgba(237,131,55,0.22);border-color:rgba(237,131,55,0.28);background:rgba(255,255,255,0.045);}
        .svc-card:hover::before{opacity:1;}
        .svc-card:hover .svc-icon-ring{border-color:rgba(237,131,55,0.5);box-shadow:0 0 20px rgba(237,131,55,0.2);}
        .svc-card:hover .svc-learn{color:var(--orange);letter-spacing:.15em;}
        .svc-icon-wrap{margin-bottom:1.4rem;position:relative;width:60px;height:60px;}
        .svc-icon-ring{width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,rgba(30,100,150,0.8),rgba(10,50,90,0.9));border:1.5px solid rgba(56,189,248,0.22);display:flex;align-items:center;justify-content:center;font-size:1.45rem;transition:border-color .32s,box-shadow .32s;position:relative;z-index:1;}
        .svc-icon-wrap::after{content:'';position:absolute;inset:-5px;border-radius:50%;border:1px solid rgba(237,131,55,0.12);animation:icon-pulse 2.5s ease-in-out infinite;}
        @keyframes icon-pulse{0%,100%{transform:scale(1);opacity:.6;}50%{transform:scale(1.18);opacity:.15;}}
        .svc-card-title{font-family:'Poppins',sans-serif;font-size:1.05rem;font-weight:700;color:#ee883f;margin-bottom:.7rem;line-height:1.3;}
        .svc-card-desc{    font-size: 14px; line-height: 1.74;color: rgb(255 255 255); margin-bottom: 1.4rem; letter-spacing: 0.3px; font-family: 'Poppins';}
        .svc-learn{display:inline-flex;align-items:flex-start;gap:.4rem;font-size:.7rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,0.3);text-decoration:none;transition:color .25s,letter-spacing .25s;font-family:'DM Sans',sans-serif;}
        .svc-learn-arr{display:inline-flex;align-items:flex-start;justify-content:center;width:20px;height:20px;border-radius:50%;border:1px solid currentColor;font-size:.7rem;transition:transform .25s;}
        .svc-card:hover .svc-learn-arr{transform:rotate(45deg) scale(1.1);}
        .svc-card-line{position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--orange),transparent);opacity:0;border-radius:0 0 22px 22px;transition:opacity .32s;}
        .svc-card:hover .svc-card-line{opacity:1;}
        @media(max-width:900px){.svc-cards{grid-template-columns:1fr 1fr;gap:1.2rem;}}
        @media(max-width:580px){.svc-cards{grid-template-columns:1fr;gap:1rem;}
          .svc-h2{font-size:clamp(1.5rem,5vw,2rem);}
          section[style*="background:#004168"]:nth-of-type(2){padding:4rem 4% 4rem !important;}
        }
      `}),(0,r.jsx)("div",{className:"svc-bg-r"}),(0,r.jsx)("div",{className:"svc-grid"}),(0,r.jsx)("div",{className:"svc-orb svc-orb-1"}),(0,r.jsx)("div",{className:"svc-orb svc-orb-2"}),(0,r.jsxs)("div",{className:"svc-header",children:[(0,r.jsx)("div",{className:"partners-header1",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Specialized Digital Marketing Services in Coimbatore"})}),(0,r.jsxs)("h2",{className:"svc-h2",children:["Smart Marketing. ",(0,r.jsx)("span",{children:"Sharp Execution."})," Stronger Results."]}),(0,r.jsx)("p",{className:"svc-sub",children:"As a full-stack Digital Marketing Agency in Coimbatore, PCS delivers innovative solutions that combine creativity, analytics, and technology."})]}),(0,r.jsx)("div",{className:"svc-cards",children:w.map((e,t)=>(0,r.jsxs)("div",{className:"svc-card",style:{animationDelay:`${.05+.07*t}s`},children:[(0,r.jsx)("div",{className:"svc-icon-wrap",children:(0,r.jsx)("div",{className:"svc-icon-ring",children:e.icon})}),(0,r.jsx)("div",{className:"svc-card-title",children:e.title}),(0,r.jsx)("div",{className:"svc-card-desc",children:e.desc}),(0,r.jsxs)("a",{className:"svc-learn",href:e.link,children:["LEARN MORE ",(0,r.jsx)("span",{className:"svc-learn-arr",children:"\u2197"})]}),(0,r.jsx)("div",{className:"svc-card-line"})]},t))})]})}let k=[{num:"01",title:"Experience That Drives Outcomes",desc:"Years of proven expertise in digital marketing, delivering strategies that go beyond theory to create measurable business growth and long-term impact.",icon:(0,r.jsx)("img",{src:"/img/icon/experience-benifits.webp",alt:"Experience",width:"30",height:"30"})},{num:"02",title:"Results-Driven Not Report-Driven",desc:"Our focus is on real ROI, not vanity metrics. Every campaign is optimized to generate conversions, revenue, and sustainable growth.",icon:(0,r.jsx)("img",{src:"/img/icon/results-driven-benifits.webp",alt:"Results Driven",width:"30",height:"30"})},{num:"03",title:"Innovation That Reinvents The Way You Work",desc:"We blend creativity with modern tech to deliver digital marketing solutions that streamline processes, and transform how your business operates.",icon:(0,r.jsx)("img",{src:"/img/icon/innovation-benifits.webp",alt:"Innovation",width:"30",height:"30"})},{num:"04",title:"Support that's Always On, Always Human",desc:"Round-the-clock assistance with a personal touch\u2014our team ensures you're never left waiting for answers or solutions.",icon:(0,r.jsx)("img",{src:"/img/icon/support-benifits.webp",alt:"Support",width:"30",height:"30"})},{num:"05",title:"Customized Strategies for Every Business",desc:"We don't believe in one-size-fits-all. Every campaign is tailored to your brand, audience, and goals for maximum impact.",icon:(0,r.jsx)("img",{src:"/img/icon/customized-benifits.webp",alt:"Customized Strategies",width:"30",height:"30"})},{num:"06",title:"Transparent Process & Measurable Impact",desc:"You always know where your budget goes and how your digital marketing campaigns perform, supported by detailed analytics and full visibility at every stage.",icon:(0,r.jsx)("img",{src:"/img/icon/transparent-benifits.webp",alt:"Transparent Process",width:"30",height:"30"})}];function j(){return(0,r.jsx)("section",{className:"tl-section",children:(0,r.jsxs)("div",{className:"tl-inner",children:[(0,r.jsxs)("div",{className:"tl-header",children:[(0,r.jsx)("div",{className:"partners-header1",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Benefits "})}),(0,r.jsxs)("h2",{className:"tl-heading",children:["How we ",(0,r.jsx)("span",{children:"differ from "})," others"]}),(0,r.jsx)("p",{className:"tl-subtext",children:"From SEO to paid ads, we deliver result-driven digital marketing strategies designed to grow your business in Coimbatore and beyond."})]}),(0,r.jsx)("div",{className:"bento-grid",children:k.map((e,t)=>(0,r.jsxs)("div",{className:`bn-cell bn-cell-${t+1}`,children:[(0,r.jsx)("div",{className:"bn-icon",style:{width:"44px",height:"44px",borderRadius:"12px",background:"rgba(237,131,55,0.1)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginBottom:".2rem"},children:(0,r.jsx)("span",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:e.icon})}),(0,r.jsx)("div",{className:"bn-num",children:e.num}),(0,r.jsx)("div",{className:"bn-title",children:e.title}),(0,r.jsx)("div",{className:"bn-desc",children:e.desc})]},t))})]})})}function N({step:e,index:t}){let[i,a]=function(e=.1){let t=(0,n.useRef)(null),[i,r]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let i=t.current;if(!i)return;let n=new IntersectionObserver(([e])=>{e.isIntersecting&&(r(!0),n.disconnect())},{threshold:e});return n.observe(i),()=>n.disconnect()},[e]),[t,i]}(.1);return(0,r.jsx)("div",{ref:i,className:`ppc-tp-step${a?" tp-vis":""}`,children:t%2==1?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"ppc-tp-text-side",children:[(0,r.jsx)("p",{className:"ppc-tp-desc",children:e.desc}),(0,r.jsx)("div",{className:"ppc-tp-bullets",children:e.bullets.map(e=>(0,r.jsx)("span",{className:"ppc-tp-bullet",children:e},e))})]}),(0,r.jsxs)("div",{className:"ppc-tp-num-side",children:[(0,r.jsx)("div",{className:"ppc-tp-bg-num",children:e.step}),(0,r.jsxs)("div",{className:"ppc-tp-step-index",children:["Step \u2014 ",e.step]}),(0,r.jsx)("div",{className:"ppc-tp-step-title",children:e.title}),(0,r.jsx)("div",{className:"ppc-tp-phase",children:e.phase})]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"ppc-tp-num-side",children:[(0,r.jsx)("div",{className:"ppc-tp-bg-num",children:e.step}),(0,r.jsxs)("div",{className:"ppc-tp-step-index",children:["Step \u2014 ",e.step]}),(0,r.jsx)("div",{className:"ppc-tp-step-title",children:e.title}),(0,r.jsx)("div",{className:"ppc-tp-phase",children:e.phase})]}),(0,r.jsxs)("div",{className:"ppc-tp-text-side",children:[(0,r.jsx)("p",{className:"ppc-tp-desc",children:e.desc}),(0,r.jsx)("div",{className:"ppc-tp-bullets",children:e.bullets.map(e=>(0,r.jsx)("span",{className:"ppc-tp-bullet",children:e},e))})]})]})})}function C(){return(0,r.jsxs)("section",{className:"ppc-tp-section",children:[(0,r.jsx)("div",{className:"ppc-tp-cross"}),(0,r.jsxs)("div",{className:"ppc-tp-header",children:[(0,r.jsx)("div",{className:"partners-header1",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"center"},children:"Our Proven PPC Execution Process"})}),(0,r.jsxs)("h2",{className:"ppc-tp-h2",children:["Built for Clarity,",(0,r.jsx)("em",{children:" Tuned for Results"})]}),(0,r.jsx)("p",{className:"ppc-tp-sub",children:"Every pay per click ads campaign starts with strategy and ends with measurable impact. Our process ensures your ad spend works harder, smarter, and faster."})]}),(0,r.jsx)("div",{className:"ppc-tp-body",children:c.map((e,t)=>(0,r.jsx)(N,{step:e,index:t},e.step))})]})}let S=[{img:"/img/digital-marketing/textile-dm.webp",title:"Textile ",desc:"We help textile manufacturers and apparel brands grow through digital marketing . Our industry-focused approach boosts visibility, strengthens branding, and generates high-quality leads.",link:"/textile"},{img:"/img/digital-marketing/hospitals-dm.webp",title:"Healthcare",desc:"We support hospitals and clinics with effective healthcare digital marketing, local SEO, Google Ads . PCS ensures better patient engagement through targeted campaigns and optimized digital platforms.",link:"/healthcare"},{img:"/img/digital-marketing/construction-dm.webp",title:"Construction",desc:"PCS elevates construction and real estate brands with lead generation, PPC, landing page optimization, and hyperlocal marketing. Our campaigns boost project visibility and attract high-intent buyers in competitive markets.",link:"/construction"},{img:"/img/digital-marketing/manufacturing-dm.webp",title:"Manufacturing",desc:"We empower manufacturing companies through B2B SEO, email marketing  and performance marketing. PCS helps industrial brands build authority, increase search presence, and convert business enquiries.",link:"/retail-ecommerce"},{img:"/img/digital-marketing/retail-dm.webp",title:"Retail & E-Commerce",desc:"As one of the top digital marketing companies in Coimbatore, we deliver e-commerce SEO, shopping ads, and remarketing campaigns that increase conversions.",link:"/manufacturing"},{img:"/img/digital-marketing/tourism-dm.webp",title:"Tourism & Hospitality ",desc:"PCS helps hotels, resorts, and travel businesses grow with travel digital marketing, review management, social media branding, and location-based marketing that boost bookings and online visibility.",link:"/tourism-and-hospitality"},{img:"/img/digital-marketing/it-service-dm.webp",title:"IT / IT Service",desc:"Clear, transparent reports that show exactly what's working \u2014 no jargon, just actionable insights you can use to grow your business faster.",link:"/it-or-it-services"},{img:"/img/digital-marketing/bankin-finace-dm.webp",title:"Banking",desc:"We never set and forget \u2014 every campaign is continuously refined based on real performance data to ensure you always get the best possible results.",link:"/banking-financial-and-insurance-services"}];function z(){let e=(0,n.useRef)(null),t=(0,n.useRef)(0),i=(0,n.useRef)(!1),a=(0,n.useRef)(null),[s,o]=(0,n.useState)(0),[l,d]=(0,n.useState)(!1),c=S.length,p=(i,r=!0)=>{let n=e.current;if(!n)return;let a=e.current?e.current.parentElement.offsetWidth/3:0;n.style.transition=r?"transform 0.55s cubic-bezier(0.22,1,0.36,1)":"none",n.style.transform=`translateX(${-i*a}px)`,t.current=i,o(i%c)},m=()=>{i.current||(i.current=!0,p(t.current+1),setTimeout(()=>{t.current>=c&&p(t.current-c,!1),i.current=!1},560))};(0,n.useEffect)(()=>{let e=()=>p(t.current,!1);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,n.useEffect)(()=>{p(0,!1)},[]),(0,n.useEffect)(()=>l?void clearInterval(a.current):(a.current=setInterval(m,3e3),()=>clearInterval(a.current)),[l]);let g=[...S,...S.slice(0,3)];return(0,r.jsxs)("section",{style:{position:"relative",background:"#004168",padding:"5rem 0 4rem",overflow:"hidden",fontFamily:"'Poppins',sans-serif"},children:[(0,r.jsx)("style",{children:`
        .dm-hww-dot-grid{position:absolute;inset:0;pointer-events:none;z-index:0;background-image:radial-gradient(rgba(237,131,55,0.10) 1px,transparent 1px);background-size:36px 36px;opacity:0.25;animation:dm-dots-drift 28s linear infinite;}
        @keyframes dm-dots-drift{to{background-position:36px 36px;}}
        .dm-hww-glow{position:absolute;border-radius:50%;pointer-events:none;z-index:0;filter:blur(110px);}
        .dm-hww-glow-1{width:600px;height:600px;top:-180px;left:-160px;background:rgba(237,131,55,0.07);animation:dm-orb 10s ease-in-out infinite;}
        .dm-hww-glow-2{width:500px;height:500px;bottom:-160px;right:-120px;background:rgba(56,189,248,0.05);animation:dm-orb 14s ease-in-out infinite reverse;}
        @keyframes dm-orb{0%,100%{transform:translateY(0);}50%{transform:translateY(-24px);}}
        .dm-hww-header{position:relative;z-index:2;text-align:center;padding:0 6% 3.5rem;}
        .dm-hww-h2{font-family:'Poppins',sans-serif;font-size:clamp(2rem,3.5vw,2.9rem);font-weight:600;line-height:1.12;letter-spacing:-0.02em;color:#fff;margin:0;}
        .dm-hww-h2 span{color:#ed8337;}
        .dm-hww-h2 em{font-style:italic;}
        .dm-carousel-outer{position:relative;z-index:2;padding:0 4rem 1rem;}
        .dm-track-window{overflow:hidden;}
        .dm-track{display:flex;will-change:transform;}

        /* \u{2500}\u{2500} Image-based card styles \u{2500}\u{2500} */
        .dm-card-wrap{flex:0 0 calc(100% / 3);padding:0 12px;box-sizing:border-box;}
        .dm-card{background:#fff;border-radius:16px;overflow:hidden;height:100%;display:flex;flex-direction:column;box-shadow:0 4px 24px rgba(0,0,0,0.18);transition:transform .3s,box-shadow .3s;cursor:default;}
        .dm-card:hover{transform:translateY(-6px);box-shadow:0 12px 40px rgba(0,0,0,0.28);}
        .dm-card-img{width:100%;height:220px;object-fit:cover;display:block;flex-shrink:0;}
        .dm-card-body{padding:1.6rem 1.6rem 1.4rem;display:flex;flex-direction:column;flex:1;}
        .dm-card-title{font-family:'Poppins',sans-serif;font-size:1.08rem;font-weight:700;color:#0d1f2d;margin-bottom:0.65rem;line-height:1.3;text-align:center;}
        .dm-card-desc{font-family:'Poppins',sans-serif;font-size:0.85rem;line-height:1.74;color:#4a5568;margin-bottom:1.2rem;text-align:center;flex:1;}
        .dm-card-arrow-wrap{display:flex;justify-content:center;margin-top:auto;}
        .dm-card-arrow{width:44px;height:44px;border-radius:50%;background:#ed8337;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .25s,transform .25s;text-decoration:none;}
        .dm-card-arrow:hover{background:#d9711e;transform:scale(1.08);}
        .dm-card-arrow svg{width:18px;height:18px;fill:none;stroke:#fff;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;}

        .dm-dots{display:flex;justify-content:center;gap:8px;margin-top:2.2rem;position:relative;z-index:2;}
        .dm-dot{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,0.25);border:none;cursor:pointer;padding:0;transition:background .3s,width .3s,border-radius .3s;}
        .dm-dot-active{background:#ed8337 !important;width:24px !important;border-radius:4px !important;}

        .faq-head h2 {color: #000;}
        .faq-toggle-icon{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;font-size:1.2rem;line-height:1;flex-shrink:0;}
        @media(max-width:900px){.dm-card-wrap{flex:0 0 50%;}}
        @media(max-width:580px){.dm-card-wrap{flex:0 0 85%;}.dm-hww-header{padding:0 5% 2.5rem;}}
      `}),(0,r.jsx)("div",{className:"dm-hww-dot-grid"}),(0,r.jsx)("div",{className:"dm-hww-glow dm-hww-glow-1"}),(0,r.jsx)("div",{className:"dm-hww-glow dm-hww-glow-2"}),(0,r.jsxs)("div",{className:"dm-hww-header",children:[(0,r.jsx)("div",{className:"partners-header1",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"center"},children:"Industries We Serve"})}),(0,r.jsxs)("h2",{className:"dm-hww-h2",children:["Plan Smart. ",(0,r.jsx)("span",{children:(0,r.jsx)("em",{children:"Execute Sharper."})})," Deliver Right."]}),(0,r.jsx)("p",{style:{margin:"30px 0"},children:"As a leading Digital Marketing Agency in Coimbatore, PCS supports:"})]}),(0,r.jsxs)("div",{className:"dm-carousel-outer",onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[(0,r.jsx)("div",{className:"dm-track-window",children:(0,r.jsx)("div",{className:"dm-track",ref:e,children:g.map((e,t)=>(0,r.jsx)("div",{className:"dm-card-wrap",children:(0,r.jsxs)("div",{className:"dm-card",children:[(0,r.jsx)("img",{className:"dm-card-img",src:e.img,alt:e.title,loading:"lazy",onError:e=>{e.currentTarget.style.background="#0a3652",e.currentTarget.style.minHeight="220px"}}),(0,r.jsxs)("div",{className:"dm-card-body",children:[(0,r.jsx)("div",{className:"dm-card-title",children:e.title}),(0,r.jsx)("div",{className:"dm-card-desc",children:e.desc}),(0,r.jsx)("div",{className:"dm-card-arrow-wrap",children:(0,r.jsx)("a",{className:"dm-card-arrow",href:e.link,"aria-label":`Learn more about ${e.title}`,children:(0,r.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,r.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),(0,r.jsx)("polyline",{points:"12 5 19 12 12 19"})]})})})]})]})},t))})}),(0,r.jsx)("div",{className:"dm-dots",children:S.map((e,t)=>(0,r.jsx)("button",{className:`dm-dot${s===t?" dm-dot-active":""}`,onClick:()=>{d(!0),p(t),setTimeout(()=>{i.current=!1},560)}},t))})]})]})}let M=[{q:"What digital marketing services do you offer?",a:"We provide end-to-end digital marketing services including SEO, PPC, Content, and Social Media Marketing to grow your business online. Our expert team also delivers website development and creative graphic design to make your brand stand out."},{q:"What is pay-per-click in digital marketing?",a:"Pay-Per-Click (PPC) is a digital advertising model where you pay only when someone clicks on your ad. It helps businesses get instant visibility on search engines and social media. With targeted campaigns, PPC drives qualified leads and measurable ROI."},{q:"What is ROI in digital marketing?",a:"In digital marketing, ROI (Return on Investment) measures how profitable your marketing efforts are compared to the amount you spend. It shows whether your campaigns are generating enough leads, sales, or brand value to justify the cost."},{q:"What is CRM in digital marketing?",a:"CRM (Customer Relationship Management) is a strategy and technology used to manage and analyze customer interactions. It helps businesses increase sales, build a strong reputation, and improve customer satisfaction. In digital marketing, CRM ensures better targeting, personalized campaigns, and long-term customer loyalty"},{q:"What is brand awareness in digital marketing?",a:"Brand awareness in digital marketing refers to how well your target audience recognizes and remembers your brand online. It\u2019s about creating visibility through channels like social media, SEO, PPC, and content so that customers think of your brand first when they need your product or service. Strong brand awareness builds trust, credibility, and long-term customer loyalty"},{q:"What is a good CTR for digital marketing?",a:"A good CTR (Click-Through Rate) in digital marketing varies by platform, industry, and campaign type. On average, 2% to 5% is considered strong. Search ads often get higher CTRs than display or social ads since users actively seek solutions. A higher CTR shows your ad is relevant, engaging, and targeting the right audience."}];function P(){let[e,t]=(0,n.useState)(null),i=i=>t(e===i?null:i);return(0,r.jsxs)("section",{className:"faq-section",children:[(0,r.jsx)("div",{className:"partners-header2",style:{textAlign:"center",marginTop:"20px"},children:(0,r.jsx)("div",{className:"partners-eyebrow",children:"Frequently Asked Questions"})}),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"faq-head",children:(0,r.jsxs)("h2",{children:["Questions That Could ",(0,r.jsx)("span",{children:"Hold You Back"})]})}),(0,r.jsxs)("div",{className:"faq-wrapper",children:[(0,r.jsx)("div",{className:"faq-col",children:M.slice(0,3).map((t,n)=>(0,r.jsxs)("div",{className:"faq-item",children:[(0,r.jsxs)("div",{className:"faq-question",onClick:()=>i(n),children:[(0,r.jsx)("span",{children:t.q}),(0,r.jsx)("span",{className:"faq-toggle-icon",children:e===n?"\u2212":"+"})]}),e===n&&(0,r.jsx)("div",{className:"faq-answer ppc-faq-answer",children:t.a})]},n))}),(0,r.jsx)("div",{className:"faq-col",children:M.slice(3,6).map((t,n)=>(0,r.jsxs)("div",{className:"faq-item",children:[(0,r.jsxs)("div",{className:"faq-question",onClick:()=>i(n+3),children:[(0,r.jsx)("span",{children:t.q}),(0,r.jsx)("span",{className:"faq-toggle-icon",children:e===n+3?"\u2212":"+"})]}),e===n+3&&(0,r.jsx)("div",{className:"faq-answer ppc-faq-answer",children:t.a})]},n+3))})]})]})]})}function E(){return(0,r.jsxs)(a.A,{title:"No.1 Digital Marketing Company in Coimbatore | ROI-Driven ",description:"Top Digital Marketing Company in Coimbatore providing SEO services, paid ads, social media marketing, and web development solutions for business growth. ",children:[(0,r.jsx)(l,{}),(0,r.jsx)(d,{}),(0,r.jsx)(p,{}),(0,r.jsx)(h,{}),(0,r.jsx)(x,{}),(0,r.jsx)(b,{}),(0,r.jsx)(y,{}),(0,r.jsx)(v,{}),(0,r.jsx)(j,{}),(0,r.jsx)(z,{}),(0,r.jsx)(C,{}),(0,r.jsx)(P,{}),(0,r.jsx)(s.A,{})]})}}}]);