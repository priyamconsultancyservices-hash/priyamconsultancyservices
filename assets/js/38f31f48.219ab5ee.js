"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["5655"],{3177(e,s,t){t.d(s,{A:()=>a});var i=t(4848),n=t(6540);function a(){let[e,s]=(0,n.useState)([]),[t,a]=(0,n.useState)(!0),[r,o]=(0,n.useState)(null);return(0,n.useEffect)(()=>{fetch("https://www.priyamconsultancy.com/blog/wp-json/wp/v2/posts?_embed&per_page=3").then(e=>{if(!e.ok)throw Error(`HTTP ${e.status}`);return e.json()}).then(e=>{s(e.map(e=>{let s=e._embedded?.["wp:featuredmedia"]?.[0]?.source_url||null,t=(e.excerpt?.rendered||"").replace(/<[^>]*>/g,"").replace(/&[^;]+;/g," ").trim(),i=t.length>200?t.slice(0,200)+"...":t,n=(e.title?.rendered||"Untitled").replace(/&[^;]+;/g," ").trim();return{guid:e.id,title:n,link:e.link,thumbnail:s,excerpt:i}})),a(!1)}).catch(e=>{o(e.message),a(!1)})},[]),(0,i.jsxs)("section",{style:{width:"100%",padding:"4rem 1rem",boxSizing:"border-box",background:"#fff"},children:[(0,i.jsxs)("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[(0,i.jsxs)("div",{style:{textAlign:"center",marginBottom:"2.5rem"},children:[(0,i.jsx)("h2",{style:{fontSize:"2rem",fontWeight:700,margin:"0 0 0.5rem",color:"#111"},children:"Blogs"}),(0,i.jsx)("p",{style:{color:"#666",margin:0,fontSize:"1rem"},children:"Stay updated with the latest in digital marketing, growth strategies, and industry trends."})]}),t&&(0,i.jsx)("p",{style:{textAlign:"center",color:"#888"},children:"Loading..."}),r&&(0,i.jsxs)("p",{style:{textAlign:"center",color:"red"},children:["Error: ",r]}),(0,i.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1.5rem"},className:"blog-grid",children:e.map(e=>(0,i.jsxs)("a",{href:e.link,target:"_blank",rel:"noreferrer",style:{border:"1px solid #e5e7eb",borderRadius:"12px",overflow:"hidden",background:"#fff",display:"flex",flexDirection:"column",textDecoration:"none",color:"inherit",transition:"box-shadow 0.2s, transform 0.2s",cursor:"pointer"},onMouseEnter:e=>{e.currentTarget.style.boxShadow="0 8px 24px rgba(0,0,0,0.12)",e.currentTarget.style.transform="translateY(-3px)"},onMouseLeave:e=>{e.currentTarget.style.boxShadow="none",e.currentTarget.style.transform="translateY(0)"},children:[(0,i.jsx)("div",{style:{width:"100%",aspectRatio:"16/9",overflow:"hidden",background:"#1a2744"},children:e.thumbnail?(0,i.jsx)("img",{src:e.thumbnail,alt:e.title,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):(0,i.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",opacity:.4,fontSize:"0.8rem"},children:"No image"})}),(0,i.jsxs)("div",{style:{padding:"1.25rem",display:"flex",flexDirection:"column",gap:"0.75rem"},children:[(0,i.jsx)("p",{style:{fontWeight:600,fontSize:"1.1rem",lineHeight:1.6,margin:0,color:"#111"},children:e.title}),(0,i.jsx)("p",{style:{color:"#444",fontSize:"0.875rem",lineHeight:1.6,flex:1,margin:0},children:e.excerpt}),(0,i.jsx)("span",{style:{display:"inline-block",background:"#E87C30",color:"#fff",padding:"0.6rem 1.5rem",borderRadius:"999px",fontWeight:500,alignSelf:"flex-start",marginTop:"0.5rem",fontSize:"0.875rem"},children:"Read More"})]})]},e.guid))})]}),(0,i.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        @media (max-width: 1024px) { .blog-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px)  { .blog-grid { grid-template-columns: 1fr !important; } }
      `}})]})}},9393(e,s,t){t.d(s,{A:()=>a});var i=t(4848),n=t(6540);let a=function(){let e=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let s=e.current;if(!s)return;let t=s.getContext("2d"),i="#ed8337",n,a,r=[],o;function c(){n=s.width=s.parentElement.offsetWidth,a=s.height=s.parentElement.offsetHeight}function l(){this.reset()}l.prototype.reset=function(){this.x=Math.random()*n,this.y=Math.random()*a,this.r=2.2*Math.random()+.6,this.type=.55>Math.random()?"dot":.5>Math.random()?"ring":"plus",this.speed=.35*Math.random()+.08,this.dir=Math.random()*Math.PI*2,this.alpha=.45*Math.random()+.1,this.pulse=Math.random()*Math.PI*2,this.pulseSpeed=.018*Math.random()+.008,this.size=4*Math.random()+2},l.prototype.update=function(){this.x+=Math.cos(this.dir)*this.speed,this.y+=Math.sin(this.dir)*this.speed,this.pulse+=this.pulseSpeed,this.dir+=(Math.random()-.5)*.015,this.x<-20&&(this.x=n+20),this.x>n+20&&(this.x=-20),this.y<-20&&(this.y=a+20),this.y>a+20&&(this.y=-20)},l.prototype.draw=function(){let e=this.alpha*(.7+.3*Math.sin(this.pulse));if(t.save(),t.globalAlpha=e,t.strokeStyle=t.fillStyle=i,t.lineWidth=1,"dot"===this.type)t.beginPath(),t.arc(this.x,this.y,this.r+.4*Math.sin(this.pulse),0,2*Math.PI),t.fill();else if("ring"===this.type){let e=this.size*(.9+.15*Math.sin(this.pulse));t.beginPath(),t.arc(this.x,this.y,e,0,2*Math.PI),t.stroke()}else{let e=this.size*(.9+.1*Math.sin(this.pulse));t.beginPath(),t.moveTo(this.x-e,this.y),t.lineTo(this.x+e,this.y),t.moveTo(this.x,this.y-e),t.lineTo(this.x,this.y+e),t.stroke()}t.restore()},window.addEventListener("resize",c),c(),r=[];let d=Math.floor(n*a/9e3);for(let e=0;e<Math.max(d,28);e++)r.push(new l);return!function e(){t.clearRect(0,0,n,a),function(){let e=r.filter(e=>"dot"===e.type);for(let s=0;s<e.length;s++)for(let n=s+1;n<e.length;n++){let a=e[s].x-e[n].x,r=e[s].y-e[n].y,o=Math.sqrt(a*a+r*r);o<110&&(t.save(),t.globalAlpha=(1-o/110)*.12,t.strokeStyle=i,t.lineWidth=.7,t.beginPath(),t.moveTo(e[s].x,e[s].y),t.lineTo(e[n].x,e[n].y),t.stroke(),t.restore())}}(),r.forEach(e=>{e.update(),e.draw()}),o=requestAnimationFrame(e)}(),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",c)}},[]),(0,i.jsx)("section",{id:"cta-final",children:(0,i.jsxs)("div",{className:"cta-banner",style:{"--glow-x":"50%","--glow-y":"50%"},children:[(0,i.jsx)("canvas",{id:"ctaCanvas",ref:e}),(0,i.jsxs)("div",{className:"cta-banner-left",children:[(0,i.jsx)("div",{className:"partners-header",children:(0,i.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Ready to Start?"})}),(0,i.jsxs)("h2",{className:"cta-banner-heading",children:["Let's Talk About Your",(0,i.jsx)("br",{}),"Next Big ",(0,i.jsx)("span",{className:"hl-italic",children:"Growth Move"})]}),(0,i.jsx)("p",{className:"cta-banner-sub",children:"No pressure. Just a quick conversation to understand where you are-and how we can help you move forward."})]}),(0,i.jsxs)("div",{className:"cta-banner-right",children:[(0,i.jsxs)("a",{href:"#",className:"cta-bprimary",children:["Book a Free Consultation",(0,i.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",children:(0,i.jsx)("path",{d:"M3 8h10M9 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,i.jsx)("a",{href:"#",className:"cta-bghost",children:"View All Services"})]})]})})}},3610(e,s,t){t.r(s),t.d(s,{default:()=>j});var i=t(4848),n=t(6540),a=t(9393),r=t(8128),o=t(3177),c=t(5310),l=t(8230),d=t(3572);function p(){let e="https://www.pcsbusinesssolution.com/img/business-registration-compliance.png";return(0,i.jsxs)(d.A,{children:[(0,i.jsx)("title",{children:"Business Registration and Compliance Services | Company Registration"}),(0,i.jsx)("meta",{name:"description",content:"Efficient Business Registration and Compliance Services. Get expert support for company registration, legal documentation, and regulatory compliance. Contact us!"}),(0,i.jsx)("meta",{name:"keywords",content:"Business Registration and Compliance, Business Registration and Compliance Services, Company Registration & Compliance in India, Business Registration Services, Company Registration and Compliances, Business License Registration, Business Registration Consultants, Statutory Compliance Services, Investment and Company Valuation, Virtual CFO Services, Accounting Services, Financial Services"}),(0,i.jsx)("link",{rel:"canonical",href:"https://www.priyamconsultancy.com/business-registration-compliance/"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:title",content:"Business Registration and Compliance Services | Company Registration"}),(0,i.jsx)("meta",{property:"og:description",content:"Efficient Business Registration and Compliance Services. Get expert support for company registration, legal documentation, and regulatory compliance. Contact us!"}),(0,i.jsx)("meta",{property:"og:url",content:"https://www.priyamconsultancy.com/business-registration-compliance/"}),(0,i.jsx)("meta",{property:"og:image",content:e}),(0,i.jsx)("meta",{property:"og:site_name",content:"PCS Business Solution"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:title",content:"Business Registration & Compliance Services | PCS Business Solution"}),(0,i.jsx)("meta",{name:"twitter:description",content:"Complete business registration & compliance management in India. PCS Business Solution."}),(0,i.jsx)("meta",{name:"twitter:image",content:e}),(0,i.jsx)("script",{type:"application/ld+json",children:`
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@id": "https://www.priyamconsultancy.com/",
        "name": "Home"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@id": "https://www.priyamconsultancy.com/business-registration-compliance/",
        "name": "business-registration-compliance"
      }
    }
  ]
}
      `}),(0,i.jsx)("script",{type:"application/ld+json",children:`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Priyam Consultancy Services",
  "url": "www.priyamconsultancy.com/",
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
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.priyamconsultancy.com/business-registration-compliance/#service",
  "name": "Business Registration & Compliance",
  "serviceType": "Business Registration & Compliance Services",
  "url": "https://www.priyamconsultancy.com/business-registration-compliance/",
  "description": "Priyam Consultancy provides professional business registration and compliance services including company registration, statutory compliance, virtual CFO services, company valuation and investment support across India.",
  "provider": {
    "@type": "Organization",
    "name": "Priyam Consultancy Services",
    "url": "https://www.priyamconsultancy.com/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png"
    }
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  }
}
      `}),(0,i.jsx)("script",{type:"application/ld+json",children:`

  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Business Registration and Compliance",
  "image": ["https://www.priyamconsultancy.com/wp-content/uploads/2025/10/business-registration-compliances.png"],
  "description": "Streamline your business registration and compliance with expert guidance. Ensure your business stays compliant and grows with fast, accurate, and hassle-free services.",
  "mpn": "priyamconsultancy.com",
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
    "reviewCount": "4345"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.priyamconsultancy.com/business-registration-compliance/",
    "priceCurrency": "USD",
    "price": "00.00",
    "priceValidUntil": "2025-12-31",
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
    "name": "What are the benefits of digital transformation?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Digital transformation improves operational efficiency, enhances customer experience, and enables data-driven decision-making. It drives innovation, scalability, and long-term business growth." 
    } 
  },{ 
    "@type": "Question", 
    "name": "What are the challenges of digital transformation?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Challenges include resistance to change, technology integration issues, skill gaps, data security concerns, and the need for clear strategic planning." 
    }
  },{ 
    "@type": "Question", 
    "name": "What Types Of Digital Marketing Services Do You Provide?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "We offer SEO, PPC, social media marketing, content marketing, email campaigns, and analytics-driven strategies to boost online visibility and engagement." 
    } 
  },{ 
    "@type": "Question", 
    "name": "How Are Your HR Services Different From Other Agencies?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "We provide tailored HR solutions, combining strategy, compliance, payroll, recruitment, and employee engagement, with a focus on seamless integration into your business operations." 
    } 
 },{ 
    "@type": "Question", 
    "name": "What is a company registration?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Company registration is the legal process of forming a business entity, obtaining licenses, and ensuring compliance with government regulations to operate officially." 
    } 
 },{ 
    "@type": "Question", 
    "name": "How Long To See Results Through Digital Marketing?", 
    "acceptedAnswer": { 
      "@type": "Answer", 
      "text": "Results vary by strategy; paid campaigns may show immediate impact, while SEO and organic efforts typically take 3\u{2013}6 months for measurable outcomes." 
    } 
    }] 

      `}),(0,i.jsx)("script",{type:"application/ld+json",children:`
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Website Development Services",
  "image": ["https://www.priyamconsultancy.com/wp-content/uploads/2025/08/website-development-services.webp"],
  "description": "We provide expert web development services in India to help you transform your business. Website design and development, mobile app development, and SEO are some of our services.",
  "mpn": "priyamconsultancy.com",
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
    "reviewCount": "4327"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.priyamconsultancy.com/website-development/",
    "priceCurrency": "USD",
    "price": "00.00",
    "priceValidUntil": "2025-12-31",
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
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What Types Of Digital Marketing Services Do You Provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We approach each business as a whole, offering a range of services from SEO, social media marketing, Google & Meta ads, content marketing, email marketing, and performance tracking related to your business objectives."
      }
    },
    {
      "@type": "Question",
      "name": "How Long Does It Take To See Results Through Digital Marketing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This varies depending on the service. Generally, SEO will take 3-6 months to see any measurable impact, while paid campaigns and email marketing can help drive leads in days. We focus on providing short-term gains, while also contending with long-term objectives."
      }
    },
    {
      "@type": "Question",
      "name": "Will Your Team Understand My Industry?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "100%. We spend an immense amount of time becoming well acquainted with your niche market before we initiate any campaign, dissecting everything from brand voice and market dynamics to audience behavior."
      }
    },
    {
      "@type": "Question",
      "name": "How Are Your HR Services Different From Other Agencies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our specialty is matching candidates to your culture, vision, and long-term objectives, rather than simply matching candidates to roles. Our approach is people-first and performance-backed."
      }
    },
    {
      "@type": "Question",
      "name": "You Help Us With Hiring As Well As Retention?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We do everything from the sourcing of top-tier talent to designing the onboarding, engagement, and retention strategy. We handle the full employee life-cycle so you can stay focused on your growth."
      }
    },
    {
      "@type": "Question",
      "name": "Do You Provide Custom HR Solutions For Small Businesses Or Start-Ups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We will tailor our HR services to fit your stage and size \u{2013} whether it is your first team or you're scaling quickly."
      }
    }
  ]
}
      `}),(0,i.jsx)("script",{type:"application/ld+json",children:`
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Smarter Healthcare Solutions",
  "image": ["https://www.priyamconsultancy.com/wp-content/uploads/2025/10/healthcare-2048x1678.webp"],
  "description": "Accelerate innovation in the healthcare industry with our Digital Transformation solutions. Enhance patient care, streamline operations, and boost efficiency with smart technologies.",
  "mpn": "priyamconsultancy.com",
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
    "reviewCount": "4193"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.priyamconsultancy.com/healthcare/",
    "priceCurrency": "USD",
    "price": "00.00",
    "priceValidUntil": "2025-12-31",
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
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What do you mean by Data Analytics Services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Data Analytics Services involve collecting, processing, and interpreting data to extract meaningful insights that support better business decisions and improve performance."
      }
    },
    {
      "@type": "Question",
      "name": "What are the 4 types of Data Analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The four types are Descriptive, Diagnostic, Predictive, and Prescriptive Analytics, each helping businesses understand the past, analyze causes, forecast outcomes, and recommend future actions."
      }
    },
    {
      "@type": "Question",
      "name": "Are your Data and Analytics Services scalable for future needs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our Data Analytics Solutions are designed for scalability, ensuring they adapt seamlessly to evolving data volumes, business models, and technology advancements."
      }
    },
    {
      "@type": "Question",
      "name": "What is Data Analytics with an example?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Data analytics is the process of analyzing raw data to find patterns or trends \u{2014} for example, a retail company analyzing customer purchase data to predict future demand."
      }
    },
    {
      "@type": "Question",
      "name": "What is the main purpose of Data Analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The main purpose of Data Analytics is to transform data into actionable insights, helping organizations optimize operations, improve decision-making, and drive business growth."
      }
    },
    {
      "@type": "Question",
      "name": "Why are Data Analytics Services important for businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They help businesses identify opportunities, minimize risks, enhance efficiency, and make data-backed decisions that lead to measurable growth and competitive advantage."
      }
    }
  ]
}
      `})]})}let m=[{n:"01",icon:(0,i.jsx)("img",{src:"/img/icon/business-registration-service.webp",alt:"Business Registration",width:"28",height:"28"}),title:"Business Registration",desc:"Public Limited, Private Limited, LLP, OPC, Partnership, Sole Proprietorship services.",link:"/business-registrations"},{n:"02",icon:(0,i.jsx)("img",{src:"/img/icon/company-valuations-service.webp",alt:"Company Valuations",width:"28",height:"28"}),title:"Company Valuations",desc:"Accurate valuations and strategic guidance to fuel funding, growth, and smart investments.",link:"/company-valuations-and-investment-support"},{n:"03",icon:(0,i.jsx)("img",{src:"/img/icon/statutory-compliance-service.webp",alt:"Statutory Compliance",width:"28",height:"28"}),title:"Statutory Compliance",desc:"Ensuring timely filings, audits, and adherence to all regulatory requirements.",link:"/statutory-compliance"},{n:"04",icon:(0,i.jsx)("img",{src:"/img/icon/virtual-services.webp",alt:"Virtual CFO Services",width:"28",height:"28"}),title:"Virtual CFO Services",desc:"Strategic financial guidance, budgeting, and reporting to drive informed business decisions.",link:"/virtual-cfo-services"},{n:"05",icon:(0,i.jsx)("img",{src:"/img/icon/accounting-service.webp",alt:"Accounting",width:"28",height:"28"}),title:"Accounting",desc:"Complete accounting, GST, TDS, MIS reports, payroll, and comprehensive full-scale back-office support.",link:"/accounting"},{n:"06",icon:(0,i.jsx)("img",{src:"/img/icon/finances-service.webp",alt:"Finances",width:"28",height:"28"}),title:"Finances",desc:"Banking, loans, CMA reports, audits, approvals, and complete financial support services.",link:"/finances"}],h=[{n:"01",icon:(0,i.jsx)("img",{src:"/img/icon/business-registration-discover.webp",alt:"Discover",width:"28",height:"28"}),title:"Discover",desc:"Every successful business begins with understanding. We learn your goals, model, and growth vision, analyze industry and ownership, and recommend the best entity for long-term alignment.",color:"#ed8337"},{n:"02",icon:(0,i.jsx)("img",{src:"/img/icon/business-registration-assess.webp",alt:"Assess and Plan",width:"28",height:"28"}),title:"Assess & Plan",desc:"After understanding goals, we review legal, financial, and compliance requirements for your location and structure, mapping registrations, licenses, and taxes to create a clear, risk-aware launch roadmap.",color:"#38bdf8"},{n:"03",icon:(0,i.jsx)("img",{src:"/img/icon/business-registration-register.webp",alt:"Register and Establish",width:"28",height:"28"}),title:"Register & Establish",desc:"Our experts prepare and file all documents\u2014name approval, incorporation, PAN, TAN, GST, and professional tax\u2014ensuring accuracy, transparency, and efficient, confusion-free legal establishment for your business.",color:"#34d399"},{n:"04",icon:(0,i.jsx)("img",{src:"/img/icon/business-registration-comply.webp",alt:"Comply and Maintain",width:"28",height:"28"}),title:"Comply & Maintain",desc:"We manage statutory filings, annual returns, renewals, ROC and tax submissions, meeting deadlines, maintaining records, and keeping your business compliant, audit-ready, and legally strong year-round.",color:"#a855f7"},{n:"05",icon:(0,i.jsx)("img",{src:"/img/icon/business-registration-monitor.webp",alt:"Monitor and Update",width:"28",height:"28"}),title:"Monitor & Update",desc:"Regulations evolve, and so do you. We monitor changes, update registrations, amend records, and advise proactively, ensuring ongoing compliance, accuracy, and alignment with your business growth.",color:"#f6ad55"}],u=[{icon:(0,i.jsx)("img",{src:"/img/icon/professional-credibility.webp",alt:"Professional Credibility",width:"28",height:"28"}),title:"Professional Credibility",desc:"Build strong trust with clients and partners through a verified and professionally registered business presence."},{icon:(0,i.jsx)("img",{src:"/img/icon/financial-advantages.webp",alt:"Financial Advantages",width:"28",height:"28"}),title:"Financial Advantages",desc:"Access loans, funding, and tax benefits that support smoother financial growth and scalability."},{icon:(0,i.jsx)("img",{src:"/img/icon/compliance-assurance.webp",alt:"Compliance Assurance",width:"28",height:"28"}),title:"Compliance Assurance",desc:"Stay fully compliant with timely filings, updates, and expert monitoring of regulatory requirements."}];function g(){return(0,i.jsxs)("section",{className:"hero",id:"hero",children:[(0,i.jsxs)("div",{className:"hero-left",children:[(0,i.jsxs)("div",{className:"h-badge",children:[(0,i.jsx)("div",{className:"badge-dot"}),"Business Registration Compliance"]}),(0,i.jsxs)("h1",{className:"hero-heading",children:["Simple Registration Made ",(0,i.jsx)("span",{className:"hl lined",children:"Strong  business"}),", Compliance"]}),(0,i.jsx)("p",{className:"hero-sub",children:"We start with clarity. We get to know your business, your plans, and the direction you want to grow in. Then we tailor the right structure and registration approach to fit your exact needs. We look for what slows you down incomplete documents, missed filings, or confusing procedures  and make the entire process simple, transparent, and stress-free."}),(0,i.jsx)("div",{className:"hero-actions",children:(0,i.jsxs)("a",{className:"btn-fill",href:"/contact-us",children:["Explore More ",(0,i.jsx)("span",{className:"btn-arrow",children:"\u203A"})]})})]}),(0,i.jsx)("div",{className:"hero-right",children:(0,i.jsx)("img",{src:"/img/business-registration-compliance.png",alt:"Business Registration",className:"hero-img"})})]})}function y(){let[e,s]=(0,n.useState)({name:"",email:"",phone:"",company:"",service:"",msg:""}),t=t=>{s({...e,[t.target.name]:t.target.value})};return(0,i.jsx)("section",{className:"approach",id:"approach",children:(0,i.jsxs)("div",{className:"ap-inner",children:[(0,i.jsxs)("div",{className:"ap-left",children:[(0,i.jsx)("div",{className:"partners-header1",children:(0,i.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Approach in"})}),(0,i.jsxs)("h2",{className:"ap-heading",children:["Business  ",(0,i.jsx)("span",{children:"Registration & Compliance"})]}),(0,i.jsx)("p",{className:"ap-intro",children:"Every great business starts with a strong foundation. We help you register, comply, and launch with confidence. You won\u2019t face confusion, complexity, or red tape that can hold startups back."}),(0,i.jsx)("p",{className:"ap-intro",children:"We take care of everything from choosing the right business structure to handling legal filings, licenses, and documentation. Our approach ensures a smooth, hassle-free setup process. This allows you to stay focused on your ideas, innovation, and growth"}),(0,i.jsx)("p",{className:"ap-intro",children:"As regulations evolve, we stay ahead for you by monitoring changes and ensuring ongoing compliance. Your business remains protected, updated, and future-ready. Simple, seamless, and reliable\u2014built for lasting success."})]}),(0,i.jsx)("div",{className:"ap-form-wrap",children:(0,i.jsxs)("div",{className:"ap-form-card",children:[(0,i.jsxs)("div",{className:"form-card-eyebrow",children:[(0,i.jsx)("span",{className:"form-card-eyebrow-line"}),"Your Growth, Our Mission",(0,i.jsx)("span",{className:"form-card-eyebrow-line"})]}),(0,i.jsxs)("div",{className:"form-card-title",children:["Get Your ",(0,i.jsx)("span",{children:"Free"})," Quote"]}),(0,i.jsxs)("form",{onSubmit:t=>{t.preventDefault();let i={name:e.name,email:e.email,phone:e.phone,company:e.company,message:e.msg,url:window.location.href};r.Ay.send("service_8xw6k3r","template_jarui36",i,"XWRnXi4hK2SvmRG3q").then(()=>{alert("Message Sent Successfully \u2705"),s({name:"",email:"",phone:"",company:"",msg:""})}).catch(e=>{console.log(e),alert("Failed to send \u274C")})},children:[(0,i.jsxs)("div",{className:"fl-row",children:[(0,i.jsxs)("div",{className:"fl-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Your Name"}),(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)("span",{className:"fl-icon",children:"\u{1F464}"}),(0,i.jsx)("input",{className:"fl-input",type:"text",name:"name",placeholder:"Full name",value:e.name,onChange:t,required:!0})]})]}),(0,i.jsxs)("div",{className:"fl-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Company"}),(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)("span",{className:"fl-icon",children:"\u{1F3E2}"}),(0,i.jsx)("input",{className:"fl-input",type:"text",name:"company",placeholder:"Company name",value:e.company,onChange:t})]})]})]}),(0,i.jsxs)("div",{className:"fl-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Email Address"}),(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)("span",{className:"fl-icon",children:"\u2709\uFE0F"}),(0,i.jsx)("input",{className:"fl-input",type:"email",name:"email",placeholder:"your@email.com",value:e.email,onChange:t,required:!0})]})]}),(0,i.jsxs)("div",{className:"fl-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Mobile Number"}),(0,i.jsxs)("div",{className:"phone-row",children:[(0,i.jsx)("div",{className:"phone-flag",children:(0,i.jsx)("span",{className:"phone-flag-icon",children:"\u{1F4DE}"})}),(0,i.jsx)("input",{className:"fl-input",type:"tel",name:"phone",placeholder:"Mobile number",value:e.phone,onChange:t,maxLength:"10",pattern:"[0-9]{10}",required:!0})]})]}),(0,i.jsxs)("div",{className:"fl-group textarea-group",children:[(0,i.jsx)("label",{className:"fl-label",children:"Message"}),(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)("span",{className:"fl-icon",style:{top:"0.9rem",transform:"none"},children:"\u{1F4AC}"}),(0,i.jsx)("textarea",{className:"fl-textarea",name:"msg",placeholder:"Tell us about your business needs...",value:e.msg,onChange:t})]})]}),(0,i.jsxs)("button",{type:"submit",className:"ap-submit",children:["Get Free Consultation",(0,i.jsx)("span",{className:"ap-submit-arrow",children:"\u203A"})]})]})]})})]})})}function x(){return(0,i.jsxs)("section",{className:"services",id:"services",children:[(0,i.jsx)("div",{className:"sep-line"}),(0,i.jsxs)("div",{className:"svc-header reveal",children:[(0,i.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Specialized Business Registration & Compliance Services"}),(0,i.jsxs)("h3",{className:"partners-h3-title",children:["Simplified Setup. ",(0,i.jsx)("em",{style:{color:"#ed8337",marginBottom:"20px"},children:" Seamless Compliance. "}),"Growth Assured."]}),(0,i.jsx)("p",{children:"From Registration to Reporting, We Deliver End-to-End Solutions That Keep Your Business On Track."})]}),(0,i.jsx)("div",{className:"svc-grid reveal",style:{transitionDelay:"0.1s"},children:m.map((e,s)=>(0,i.jsxs)("div",{className:"svc-card",children:[(0,i.jsx)("div",{className:"svc-num",children:e.n}),(0,i.jsx)("div",{className:"svc-icon",children:e.icon}),(0,i.jsx)("h3",{className:"svc-title",children:e.title}),(0,i.jsx)("p",{className:"svc-desc",children:e.desc}),(0,i.jsx)(c.A,{to:e.link,className:"svc-btn",children:"Discover More \u2192"})]},s))})]})}function f(){let e=["Discover","Assess & Plan","Register & Establish","Comply & Maintain","Monitor & Update"];return(0,i.jsxs)("section",{className:"process",id:"process",children:[(0,i.jsx)("div",{className:"sep-line"}),(0,i.jsxs)("div",{className:"proc-header reveal",children:[(0,i.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start",color:"#ed8337"},children:"Our Proven Business Registration and Compliance Process"}),(0,i.jsxs)("h3",{className:"pr-heading-process",children:["Start Smart. ",(0,i.jsx)("em",{style:{color:"#ed8337"},children:"Stay Compliant."})," Grow Fast."]}),(0,i.jsx)("p",{children:"From registration to compliance management, we deliver structured, reliable, and efficient solutions for your business success."})]}),(0,i.jsx)("div",{className:"proc-timeline reveal",style:{transitionDelay:"0.1s"},children:h.map((s,t)=>(0,i.jsxs)("div",{className:"proc-tl-row",children:[(0,i.jsx)("div",{className:"proc-tl-num",children:s.n}),(0,i.jsxs)("div",{className:"proc-tl-spine",children:[(0,i.jsx)("div",{className:"proc-tl-dot"}),(0,i.jsx)("div",{className:"proc-tl-line"})]}),(0,i.jsx)("div",{className:"proc-tl-card",children:(0,i.jsxs)("div",{className:"proc-tl-card-inner",children:[(0,i.jsx)("div",{className:"proc-tl-icon-box",children:s.icon}),(0,i.jsxs)("div",{className:"proc-tl-text",children:[(0,i.jsxs)("div",{className:"proc-tl-badge",children:["Step ",s.n]}),(0,i.jsx)("h4",{className:"proc-tl-title",children:s.title}),(0,i.jsx)("p",{className:"proc-tl-desc",children:s.desc})]}),(0,i.jsx)("div",{className:"proc-tl-tag",children:e[t]})]})})]},s.n))})]})}function v(){return(0,i.jsxs)("section",{className:"why",id:"why",style:{background:"#004168"},children:[(0,i.jsx)("div",{className:"sep-line"}),(0,i.jsx)("div",{className:"why-diagonal"}),(0,i.jsxs)("div",{className:"why-inner",children:[(0,i.jsxs)("div",{className:"why-left1 reveal",children:[(0,i.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Why Choose Us"}),(0,i.jsxs)("h3",{className:"partners-h3-title",children:["Why You Should Choose us for ",(0,i.jsx)("em",{style:{color:"#ed8337"},children:" Business Registration"})," & Compliance Services"]}),(0,i.jsx)("p",{style:{marginTop:"20px"},children:"Starting your business the right way means setting a strong foundation from day one. Registering your business not only gives it a legal identity but also adds credibility, unlocks financial opportunities, and safeguards you from future compliance issues. With expert registration support, you save time, avoid errors, and ensure your business is ready to grow without roadblocks."}),(0,i.jsxs)("a",{href:"#approach",className:"why-cta",children:["Get Started Free",(0,i.jsx)("svg",{viewBox:"0 0 24 24",children:(0,i.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),(0,i.jsxs)("div",{className:"why-right reveal",style:{transitionDelay:"0.12s"},children:[(0,i.jsxs)("div",{className:"why-card tall",children:[(0,i.jsx)("div",{className:"why-card-icon",children:(0,i.jsx)("img",{src:"/img/icon/business-registration-legal.webp",alt:"Legal Identity and Protection",width:"28",height:"28"})}),(0,i.jsx)("h4",{className:"why-card-title",children:"Legal Identity & Protection"}),(0,i.jsx)("p",{className:"why-card-desc",children:"Secure your business with proper registration, ensuring legal recognition and complete protection from risks."})]}),u.map(e=>(0,i.jsxs)("div",{className:"why-card",children:[(0,i.jsx)("div",{className:"why-card-icon",children:e.icon}),(0,i.jsx)("h4",{className:"why-card-title",children:e.title}),(0,i.jsx)("p",{className:"why-card-desc",children:e.desc})]},e.title))]})]})]})}let w=[{q:"What is business compliance?",a:"Business compliance refers to following all legal, regulatory, financial, and operational requirements applicable to a company. This includes registrations, tax filings, labor laws, statutory reporting, and industry-specific regulations necessary to ensure smooth, lawful, and risk-free business operations."},{q:"What documents are needed for business registration?",a:" Business registration documents typically include PAN card, Aadhaar card, address proof, passport-size photographs, bank details, and registered office proof. Additional documents may vary depending on the business structure, such as proprietorship, partnership, LLP, or private limited company registration requirements."},{q:"Why is compliance important for a business?",a:"Compliance helps businesses operate legally, avoid penalties, maintain financial transparency, and build credibility with clients, investors, and government authorities. Proper compliance management also supports smooth business operations, reduces legal risks, and creates a strong foundation for sustainable long-term growth and expansion."},{q:"What are the annual compliance requirements for a company?",a:" Annual compliance requirements may include income tax filing, GST returns, ROC filings, financial statement submissions, board resolutions, statutory audits, TDS filings, payroll compliance, and maintenance of legal records. Requirements vary based on company structure, industry, and applicable government regulations."},{q:"Can you help with both registration and compliance?",a:" Yes, we provide complete support for business registration and ongoing compliance management. Our services include company incorporation, GST registration, licensing, ROC filings, tax compliance, payroll compliance, documentation management, and statutory reporting to ensure smooth and legally compliant business operations."},{q:"What are the types of compliance?",a:"Business compliance includes statutory compliance, tax compliance, labor law compliance, corporate compliance, environmental compliance, industry-specific regulatory compliance, and financial reporting compliance. Each type ensures businesses operate according to applicable laws, regulations, and operational standards within their respective industries."}];function b(){let[e,s]=(0,n.useState)(null),t=t=>{s(e===t?null:t)};return(0,i.jsxs)("section",{className:"faq-section",children:[(0,i.jsx)("div",{className:"partners-header2",style:{textAlign:"center",marginTop:"20px"},children:(0,i.jsx)("h2",{className:"partners-eyebrow",children:"Frequently Asked Questions"})}),(0,i.jsxs)("div",{className:"container",style:{width:"100%"},children:[(0,i.jsx)("div",{className:"faq-head",children:(0,i.jsxs)("h3",{className:"faq-h3",children:["Queries That Could ",(0,i.jsx)("span",{children:"Hold You Back"})]})}),(0,i.jsxs)("div",{className:"faq-wrapper",children:[(0,i.jsx)("div",{className:"faq-col",children:w.slice(0,3).map((s,n)=>(0,i.jsxs)("div",{className:"faq-item",children:[(0,i.jsxs)("div",{className:"faq-question",onClick:()=>t(n),children:[(0,i.jsx)("span",{children:s.q}),(0,i.jsx)("span",{className:"icon",children:e===n?"\u2212":"+"})]}),e===n&&(0,i.jsx)("div",{className:"faq-answer",children:s.a})]},n))}),(0,i.jsx)("div",{className:"faq-col",children:w.slice(3,6).map((s,n)=>(0,i.jsxs)("div",{className:"faq-item",children:[(0,i.jsxs)("div",{className:"faq-question",onClick:()=>t(n+3),children:[(0,i.jsx)("span",{children:s.q}),(0,i.jsx)("span",{className:"icon",children:e===n+3?"\u2212":"+"})]}),e===n+3&&(0,i.jsx)("div",{className:"faq-answer",children:s.a})]},n+3))})]})]})]})}function j(){return(0,n.useEffect)(()=>{let e=new IntersectionObserver(s=>s.forEach(s=>{s.isIntersecting&&(s.target.classList.add("on"),e.unobserve(s.target))}),{threshold:.1});return document.querySelectorAll(".reveal").forEach(s=>e.observe(s)),()=>e.disconnect()},[]),(0,i.jsxs)(l.A,{title:"Business Registration and Compliance Services | Company Registration ",description:"Efficient Business Registration and Compliance Services. Get expert support for company registration, legal documentation, and regulatory compliance. Contact us! ",children:[(0,i.jsx)(p,{}),(0,i.jsxs)("div",{className:"pcs",children:[(0,i.jsx)(g,{}),(0,i.jsx)(y,{}),(0,i.jsx)(x,{}),(0,i.jsx)(f,{}),(0,i.jsx)(v,{}),(0,i.jsx)(b,{}),(0,i.jsx)(o.A,{}),(0,i.jsx)(a.A,{})]})]})}}}]);