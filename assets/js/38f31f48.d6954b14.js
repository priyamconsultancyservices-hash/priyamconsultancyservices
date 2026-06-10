"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["5655"],{9393(e,t,a){a.d(t,{A:()=>n});var r=a(4848),i=a(6540);let n=function(){let e=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let t=e.current;if(!t)return;let a=t.getContext("2d"),r="#ed8337",i,n,s=[],o;function l(){i=t.width=t.parentElement.offsetWidth,n=t.height=t.parentElement.offsetHeight}function c(){this.reset()}c.prototype.reset=function(){this.x=Math.random()*i,this.y=Math.random()*n,this.r=2.2*Math.random()+.6,this.type=.55>Math.random()?"dot":.5>Math.random()?"ring":"plus",this.speed=.35*Math.random()+.08,this.dir=Math.random()*Math.PI*2,this.alpha=.45*Math.random()+.1,this.pulse=Math.random()*Math.PI*2,this.pulseSpeed=.018*Math.random()+.008,this.size=4*Math.random()+2},c.prototype.update=function(){this.x+=Math.cos(this.dir)*this.speed,this.y+=Math.sin(this.dir)*this.speed,this.pulse+=this.pulseSpeed,this.dir+=(Math.random()-.5)*.015,this.x<-20&&(this.x=i+20),this.x>i+20&&(this.x=-20),this.y<-20&&(this.y=n+20),this.y>n+20&&(this.y=-20)},c.prototype.draw=function(){let e=this.alpha*(.7+.3*Math.sin(this.pulse));if(a.save(),a.globalAlpha=e,a.strokeStyle=a.fillStyle=r,a.lineWidth=1,"dot"===this.type)a.beginPath(),a.arc(this.x,this.y,this.r+.4*Math.sin(this.pulse),0,2*Math.PI),a.fill();else if("ring"===this.type){let e=this.size*(.9+.15*Math.sin(this.pulse));a.beginPath(),a.arc(this.x,this.y,e,0,2*Math.PI),a.stroke()}else{let e=this.size*(.9+.1*Math.sin(this.pulse));a.beginPath(),a.moveTo(this.x-e,this.y),a.lineTo(this.x+e,this.y),a.moveTo(this.x,this.y-e),a.lineTo(this.x,this.y+e),a.stroke()}a.restore()},window.addEventListener("resize",l),l(),s=[];let p=Math.floor(i*n/9e3);for(let e=0;e<Math.max(p,28);e++)s.push(new c);return!function e(){a.clearRect(0,0,i,n),function(){let e=s.filter(e=>"dot"===e.type);for(let t=0;t<e.length;t++)for(let i=t+1;i<e.length;i++){let n=e[t].x-e[i].x,s=e[t].y-e[i].y,o=Math.sqrt(n*n+s*s);o<110&&(a.save(),a.globalAlpha=(1-o/110)*.12,a.strokeStyle=r,a.lineWidth=.7,a.beginPath(),a.moveTo(e[t].x,e[t].y),a.lineTo(e[i].x,e[i].y),a.stroke(),a.restore())}}(),s.forEach(e=>{e.update(),e.draw()}),o=requestAnimationFrame(e)}(),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",l)}},[]),(0,r.jsx)("section",{id:"cta-final",children:(0,r.jsxs)("div",{className:"cta-banner",style:{"--glow-x":"50%","--glow-y":"50%"},children:[(0,r.jsx)("canvas",{id:"ctaCanvas",ref:e}),(0,r.jsxs)("div",{className:"cta-banner-left",children:[(0,r.jsx)("div",{className:"partners-header",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Ready to Start?"})}),(0,r.jsxs)("h2",{className:"cta-banner-heading",children:["Let's Talk About Your",(0,r.jsx)("br",{}),"Next Big ",(0,r.jsx)("span",{className:"hl-italic",children:"Growth Move"})]}),(0,r.jsx)("p",{className:"cta-banner-sub",children:"No pressure. Just a quick conversation to understand where you are-and how we can help you move forward."})]}),(0,r.jsxs)("div",{className:"cta-banner-right",children:[(0,r.jsxs)("a",{href:"#",className:"cta-bprimary",children:["Book a Free Consultation",(0,r.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",children:(0,r.jsx)("path",{d:"M3 8h10M9 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,r.jsx)("a",{href:"#",className:"cta-bghost",children:"View All Services"})]})]})})}},3610(e,t,a){a.r(t),a.d(t,{default:()=>j});var r=a(4848),i=a(6540),n=a(9393),s=a(8128),o=a(5310),l=a(1085),c=a(3572);function p(){let e="https://www.pcsbusinesssolution.com/img/business-registration-compliance.png";return(0,r.jsxs)(c.A,{children:[(0,r.jsx)("title",{children:"Business Registration and Compliance Services | Company Registration"}),(0,r.jsx)("meta",{name:"description",content:"Efficient Business Registration and Compliance Services. Get expert support for company registration, legal documentation, and regulatory compliance. Contact us!"}),(0,r.jsx)("meta",{name:"keywords",content:"Business Registration and Compliance, Business Registration and Compliance Services, Company Registration & Compliance in India, Business Registration Services, Company Registration and Compliances, Business License Registration, Business Registration Consultants, Statutory Compliance Services, Investment and Company Valuation, Virtual CFO Services, Accounting Services, Financial Services"}),(0,r.jsx)("link",{rel:"canonical",href:"https://www.priyamconsultancy.com/business-registration-compliance/"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:title",content:"Business Registration and Compliance Services | Company Registration"}),(0,r.jsx)("meta",{property:"og:description",content:"Efficient Business Registration and Compliance Services. Get expert support for company registration, legal documentation, and regulatory compliance. Contact us!"}),(0,r.jsx)("meta",{property:"og:url",content:"https://www.priyamconsultancy.com/business-registration-compliance/"}),(0,r.jsx)("meta",{property:"og:image",content:e}),(0,r.jsx)("meta",{property:"og:site_name",content:"PCS Business Solution"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:"Business Registration & Compliance Services | PCS Business Solution"}),(0,r.jsx)("meta",{name:"twitter:description",content:"Complete business registration & compliance management in India. PCS Business Solution."}),(0,r.jsx)("meta",{name:"twitter:image",content:e}),(0,r.jsx)("script",{type:"application/ld+json",children:`
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
      `}),(0,r.jsx)("script",{type:"application/ld+json",children:`
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
      `}),(0,r.jsx)("script",{type:"application/ld+json",children:`
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
      `}),(0,r.jsx)("script",{type:"application/ld+json",children:`

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
      `}),(0,r.jsx)("script",{type:"application/ld+json",children:`
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

      `}),(0,r.jsx)("script",{type:"application/ld+json",children:`
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
      `}),(0,r.jsx)("script",{type:"application/ld+json",children:`
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
      `}),(0,r.jsx)("script",{type:"application/ld+json",children:`
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
      `}),(0,r.jsx)("script",{type:"application/ld+json",children:`
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
      `})]})}let d=`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

:root {
  --navy:        #004168;
  --navy-deep:   #011a2a;
  --navy-mid:    #0a3652;
  --orange:      #ed8337;
  --orange-l:    #f5a66b;
  --dim:         rgba(255,255,255,0.45);
  --dim2:        rgba(255,255,255,0.5);
}
.menu li {
    position: relative;
    cursor: pointer;
    font-size: 16px;
    color: black;
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
.pcs {  color: #fff; overflow-x: hidden; }

/* \u{2500}\u{2500} Shared \u{2500}\u{2500} */
.eyebrow-wrap {
  display: inline-flex; align-items: flex-start; gap: 8px;
   font-family: 'Poppins', sans-serif;
  font-size: 0.63rem; letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--orange); margin-bottom: 1.4rem;
}
.eyebrow-line { width: 24px; height: 1px; background: var(--orange); }
.reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
.reveal.on { opacity: 1; transform: none; }
.sep-line {
  position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(237,131,55,0.38), transparent);
}

/* \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
   1. HERO \u{2014} animated SVG illustration
\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550} */
.hero {
  min-height: 95svh;
  display: grid; grid-template-columns: 1fr 1fr;
  align-items: flex-start; gap: 2rem;
  padding: 7rem 6% 0rem;
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
  font-size: clamp(2rem, 3.6vw, 3.3rem);
  font-weight: 600; line-height: 1.15;
  color: rgb(255, 255, 255);
  margin-top: 1.4rem; animation: fadeUp 0.7s 0.08s ease both;
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
  text-decoration: none; border: none; cursor: pointer;
  box-shadow: 0 4px 22px rgba(237,131,55,0.32);
  display: inline-flex; align-items: flex-start; gap: 0.5rem;
  transition: background 0.22s, transform 0.18s, box-shadow 0.22s;
}
.btn-fill:hover { background: var(--orange-l); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(237,131,55,0.42); }
.btn-arrow {
  display: inline-flex; align-items: flex-start; justify-content: center;
  width: 22px; height: 22px; border-radius: 50%;
  background: rgba(2,43,68,0.3); font-size: 0.85rem;
}
@keyframes fadeUp { from{ opacity:0; transform:translateY(26px); } to{ opacity:1; transform:translateY(0); } }

.hero-right { overflow: hidden; width: 100%; height: auto;

  position: relative; z-index: 2;
  display: flex; align-items: flex-start; justify-content: center;

}
  img.hero-img {
       animation: none!important;
  }
.hero-img {
  width: 100%; 
  border-radius: 20px;
  object-fit: contain;
  display: block;
}

/* \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
   2. OUR APPROACH \u{2014} light bg, floating labels
\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550} */
.approach {
  position: relative; padding: 4rem 6%;
  overflow: hidden; background: #f8faff;
}
.ap-bg {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background:
    radial-gradient(ellipse 60% 55% at 10% 20%, rgba(237,131,55,0.10) 0%, transparent 65%),
    radial-gradient(ellipse 50% 60% at 90% 80%, rgba(2,43,68,0.07) 0%, transparent 60%),
    radial-gradient(ellipse 40% 50% at 55% 50%, rgba(56,189,248,0.05) 0%, transparent 60%);
  animation: bg-shift 10s ease-in-out infinite alternate;
}
@keyframes bg-shift {
  0%{ background-position:0% 0%,100% 100%,50% 50%; } 100%{ background-position:8% 8%,92% 88%,54% 46%; }
}
.ap-orb { position:absolute; border-radius:50%; pointer-events:none; z-index:0; filter:blur(48px); opacity:0.45; }
.ap-orb-1 { width:320px;height:320px;top:-80px;left:-60px;background:rgba(237,131,55,0.18);animation:orb-float 8s ease-in-out infinite; }
.ap-orb-2 { width:260px;height:260px;bottom:-60px;right:5%;background:rgba(2,43,68,0.12);animation:orb-float 11s ease-in-out infinite reverse; }
.ap-orb-3 { width:180px;height:180px;top:40%;left:50%;background:rgba(56,189,248,0.10);animation:orb-float 7s 1.5s ease-in-out infinite; }
@keyframes orb-float { 0%,100%{ transform:translateY(0) scale(1); } 50%{ transform:translateY(-28px) scale(1.07); } }
.ap-dot { position:absolute; border-radius:50%; pointer-events:none; z-index:0; animation:dot-drift linear infinite; }
@keyframes dot-drift {
  0%{ transform:translateY(0) translateX(0); opacity:0.6; } 50%{ opacity:0.9; }
  100%{ transform:translateY(-70px) translateX(20px); opacity:0; }
}
.ap-grid {
  position:absolute; inset:0; pointer-events:none; z-index:0;
  background-image: linear-gradient(rgba(2,43,68,0.04) 1px,transparent 1px),
                    linear-gradient(90deg,rgba(2,43,68,0.04) 1px,transparent 1px);
  background-size: 64px 64px;
}
.ap-inner {
  position:relative; z-index:2;  margin:0 auto;
  display:grid; grid-template-columns:1fr 0.7fr; gap:4rem; align-items:center;
}

/* left content */
.ap-eyebrow {
  display:inline-flex; align-items:center; gap:0.5rem;
   font-family: 'Poppins', sans-serif; font-size:0.75rem; font-weight:700;
  color:var(--orange); letter-spacing:0.12em; text-transform:uppercase; margin-bottom:1.2rem;
}
.ap-eyebrow-line { width:28px; height:2px; background:var(--orange); border-radius:2px; }
.ap-heading {
  font-family:'Poppins',sans-serif; font-size:clamp(2rem,3vw,2.6rem);
  line-height:1.12; color:#000; margin-bottom:1.2rem;
}
.ap-heading span { color:var(--orange); }
.ap-intro { font-size:1rem; line-height:1.8; color:#5a6a7a; margin-bottom:2rem;}


/* form card \u{2014} dark navy design */
.ap-form-wrap { position:relative;max-width: 450px; }
.ap-form-wrap::before {
  content:''; position:absolute; inset:-2px;
  background:linear-gradient(135deg,rgba(237,131,55,0.55),rgba(237,131,55,0.1),rgba(237,131,55,0.55));
  border-radius:26px; z-index:0;
}
.ap-form-card {
  position:relative;z-index:1;
  background:#004168;
  border-radius:24px;
  padding:2.8rem 2.6rem;
  box-shadow:0 24px 60px rgba(0,0,0,0.5),0 0 40px rgba(237,131,55,0.06);
  border:1px solid rgba(237,131,55,0.18);
      text-align: start;
}

/* eyebrow tag inside card */
.form-card-eyebrow {
  display:inline-flex;align-items:center;gap:8px;
  font-family:'Poppins',sans-serif;font-size:0.6rem;font-weight:700;
  letter-spacing:0.22em;text-transform:uppercase;color:var(--orange);margin-bottom:0.8rem;
}
.form-card-eyebrow-line { width:22px;height:1px;background:var(--orange); }

.form-card-title {
  font-family:'Poppins',sans-serif;font-size:1.7rem;font-weight:800;
  color:#fff;line-height:1.15;margin-bottom:2.4rem;
}
.form-card-title span { color:var(--orange); }
.form-card-sub { font-size:0.82rem;color:rgba(255,255,255,0.45);margin-bottom:1.6rem; }

/* floating label inputs \u{2014} dark theme */
.fl-row { display:grid;grid-template-columns:1fr 1fr;gap:0.85rem; }
.fl-group { position:relative;margin-bottom:1rem; }
.fl-label {
  display:block;font-family:'Poppins',sans-serif;
  font-size:0.65rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;
  color:var(--orange);margin-bottom:0.4rem;    text-align: start;
}
.fl-input,.fl-textarea,.fl-select {
  width:100%;padding:0.82rem 1rem 0.82rem 2.6rem;
  border:1.5px solid rgba(237,131,55,0.2);border-radius:10px;
  font-family:'Poppins',sans-serif;font-size:0.88rem;color:#fff;
  background:rgba(255,255,255,0.04);outline:none;appearance:none;
  transition:border-color 0.22s,background 0.22s,box-shadow 0.22s;
}
.fl-input::placeholder,.fl-textarea::placeholder { color:rgba(255,255,255,0.3); }
.fl-input:focus,.fl-textarea:focus,.fl-select:focus {
  border-color:var(--orange);background:rgba(237,131,55,0.06);
  box-shadow:0 0 0 3px rgba(237,131,55,0.1);
}
.fl-icon {
  position:absolute;left:0.85rem;top:50%;transform:translateY(-50%);
  font-size:0.95rem;opacity:0.5;pointer-events:none;
}
.fl-group.textarea-group .fl-icon { top:0.9rem;transform:none; }
.fl-textarea { min-height:88px;resize:none;padding-top:0.82rem;padding-left:2.6rem; }

/* phone row \u{2014} dark */
.phone-row {
  display:flex;border:1.5px solid rgba(237,131,55,0.2);border-radius:10px;
  overflow:hidden;background:rgba(255,255,255,0.04);
  transition:border-color 0.22s,box-shadow 0.22s;
}
.phone-row:focus-within { border-color:var(--orange);box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
.phone-flag {
  display:flex;align-items:center;gap:0.3rem;padding:0 0.85rem;
  font-size:0.82rem;font-weight:700;color:#fff;
  border-right:1.5px solid rgba(237,131,55,0.2);white-space:nowrap;
  background:rgba(237,131,55,0.08);cursor:default;flex-shrink:0;
}
.phone-flag-icon { font-size:0.9rem;opacity:0.7; }
.phone-row .fl-input {
  border:none;border-radius:0;background:transparent;
  box-shadow:none;padding:0.82rem 1rem;
}
.phone-row .fl-input:focus { box-shadow:none; }

/* select */
.select-wrap { position:relative; }
.select-wrap::after { content:'\u{25BE}';position:absolute;right:1rem;top:50%;transform:translateY(-50%);font-size:0.8rem;color:rgba(255,255,255,0.4);pointer-events:none; }
.fl-select { padding:0.82rem 1rem;cursor:pointer;color:rgba(255,255,255,0.3); }
.fl-select option { background:#0b2d44;color:#fff; }

/* submit */
.form-submit-row { display:flex;align-items:center;gap:1rem;margin-top:0.4rem; }
.ap-submit {
  width:100%;background:linear-gradient(135deg,#ed8337,#f5a66b);
  color:#fff;border:none;
  padding:1rem 1.5rem;border-radius:12px;
  font-family:'Poppins',sans-serif;font-size:0.97rem;font-weight:500;
  cursor:pointer;letter-spacing:0.02em;
  
  display:flex;align-items:center;justify-content:center;gap:0.6rem;
  transition:transform 0.2s,box-shadow 0.2s;
}
.ap-submit:hover { transform:translateY(-2px);box-shadow:0 12px 36px rgba(237,131,55,0.5); }
.ap-submit-arrow {
  display:inline-flex;align-items:center;justify-content:center;
  width:24px;height:24px;border-radius:50%;
  background:rgba(2,43,68,0.25);font-size:0.9rem;
}


/* \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
   3. SERVICES
\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550} */
.services {
  padding:8rem 7%;position:relative;
  background:linear-gradient(180deg,var(--navy) 0%,#010c15 100%);overflow:hidden;
}
.services::after {
  content:'';position:absolute;left:-300px;bottom:-300px;
  width:700px;height:700px;border-radius:50%;
  background:radial-gradient(circle,rgba(237,131,55,0.05),transparent 60%);pointer-events:none;
}
.svc-header { text-align:center;margin-bottom:5rem;position:relative;z-index:2; }
.svc-header h2 { font-family:'Poppins',sans-serif;font-size:clamp(2rem,3.8vw,2.6rem);font-weight:700;margin-bottom:1rem; }
.svc-header h2 em { font-style:normal;color:var(--orange); }
.svc-header p { font-size:0.95rem;color: #fff;margin:0 auto;line-height:1.7; }
.svc-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;position:relative;z-index:2; }
.svc-card {
  // background:linear-gradient(145deg,rgba(10,54,82,0.55),rgba(1,18,30,0.85));
  background: linear-gradient(145deg, rgba(10, 54, 82, 0.55), rgb(76 186 235 / 23%));
  border:1px solid rgba(237,131,55,0.12);border-radius:20px;
  padding:2.2rem 2rem;position:relative;overflow:hidden;cursor:default;
  transition:transform 0.35s cubic-bezier(.22,1,.36,1),border-color 0.3s,box-shadow 0.35s;
}
.svc-card:hover { transform:translateY(-8px);border-color:rgba(237,131,55,0.4);
  box-shadow:0 24px 60px rgba(0,0,0,0.5),0 0 0 1px rgba(237,131,55,0.2),0 0 30px rgba(237,131,55,0.08); }
.svc-card::before { content:'';position:absolute;top:0;left:15%;right:15%;height:1px;background:linear-gradient(90deg,transparent,rgba(237,131,55,0),transparent);transition:background 0.35s; }
.svc-card:hover::before { background:linear-gradient(90deg,transparent,var(--orange),transparent); }
.svc-card.featured { border-color:rgba(237,131,55,0.3);background:linear-gradient(145deg,rgba(30,80,110,0.6),rgba(2,30,50,0.95));
  box-shadow:0 8px 40px rgba(0,0,0,0.4),0 0 0 1px rgba(237,131,55,0.2); }
.svc-card.featured::before { background:linear-gradient(90deg,transparent,rgba(237,131,55,0.4),transparent); }
.svc-num { position:absolute;top:1.2rem;right:1.5rem;font-family:'Poppins',sans-serif;font-size:3.5rem;font-weight:900;color:rgba(237,131,55,0.05);line-height:1;transition:color 0.35s; }
.svc-card:hover .svc-num,.svc-card.featured .svc-num { color:rgba(237,131,55,0.1); }
.featured-pill { position:absolute;top:1.2rem;left:50%;transform:translateX(-50%);background:var(--orange);color:var(--navy-deep);font-size:0.6rem;font-family:'Poppins', sans-serif;letter-spacing:0.12em;text-transform:uppercase;font-weight:700;padding:0.2rem 0.7rem;border-radius:50px;white-space:nowrap; }
.svc-icon { width:50px;height:50px;border-radius:14px;background:rgba(237,131,55,0.08);border:1.5px solid rgba(237,131,55,0.22);display:flex;align-items:center;justify-content:center;margin-bottom:1.4rem;font-size:1.3rem;transition:background 0.3s,border-color 0.3s,transform 0.3s; }
.svc-card:hover .svc-icon { background:rgba(237,131,55,0.16);border-color:var(--orange);transform:scale(1.1); }
.svc-title { font-family:'Poppins',sans-serif;font-size:1rem;font-weight:700;margin-bottom:0.7rem;transition:color 0.3s; }
.svc-card:hover .svc-title { color:var(--orange); }
.svc-desc { font-size:0.91rem;line-height:1.75;color:var(--dim2);margin-bottom:1.4rem;transition:color 0.3s; }
.svc-card:hover .svc-desc { color:rgb(255, 255, 255); }
.svc-tags { display:flex;flex-wrap:wrap;gap:0.4rem; }
.svc-tag { font-size:0.66rem;  font-family: 'Poppins', sans-serif;letter-spacing:0.08em;text-transform:uppercase;color:var(--orange);background:rgba(237,131,55,0.08);border:1px solid rgba(237,131,55,0.18);padding:0.25rem 0.6rem;border-radius:6px; }
.svc-btn {
  display: inline-block;
  margin-top: 12px;
  color: #ed8337;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;
  font-size: 14px;
}

.svc-btn:hover {
  letter-spacing: 1px;
  transform: translateX(5px);
}
/* \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
   4. PROCESS \u{2014} Bold timeline card design
\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550} */
.process {
  padding: 7rem 6%; position: relative;
  background: #ffffff;
  overflow: hidden;
}
.process::after {
  content:''; position:absolute; inset:0; pointer-events:none;
  background-image: linear-gradient(rgba(2,43,68,0.04) 1px,transparent 1px),
                    linear-gradient(90deg,rgba(2,43,68,0.04) 1px,transparent 1px);
  background-size: 64px 64px;
}

.proc-header { text-align:center; margin-bottom:5rem; position:relative; z-index:2; }
.proc-header h2 {
  font-family:'Poppins',sans-serif; font-size:clamp(1.8rem,3.5vw,2.6rem);
  font-weight:600; line-height:1.1;
  margin-bottom:0.9rem; color:#000;
}
.proc-header h2 em { font-style:normal; color:var(--orange); }
.proc-header p { font-size:0.92rem; color:#5a6a7a; margin:30px auto; line-height:1.7; }

/* \u{2500}\u{2500} TIMELINE WRAPPER \u{2500}\u{2500} */
.proc-timeline {
  max-width:1100px; margin:0 auto; position:relative; z-index:2;
  display:flex; flex-direction:column; gap:0;
}

/* \u{2500}\u{2500} EACH ROW (step card) \u{2500}\u{2500} */
.proc-tl-row {
  display:grid; grid-template-columns:100px 60px 1fr; align-items:stretch;
  position:relative; min-height:130px;
}

/* Number column */
.proc-tl-num {
  display:flex; align-items:flex-start; justify-content:flex-end;
  padding-top:1.8rem; padding-right:0;
  font-family:'Poppins',sans-serif; font-size:3.8rem; font-weight:900;
  line-height:1; letter-spacing:-0.04em;
  color:rgba(237,131,55,0.18);
  transition:color 0.3s;
  user-select:none;
}
.proc-tl-row:hover .proc-tl-num { color:rgba(237,131,55,0.42); }

/* Spine column \u{2014} dot + vertical line */
.proc-tl-spine {
  display:flex; flex-direction:column; align-items:center;
  padding-top:1.8rem; position:relative;
}
.proc-tl-dot {
  width:14px; height:14px; border-radius:50%;
  background:var(--orange);
  box-shadow:0 0 0 4px rgba(237,131,55,0.18);
  flex-shrink:0; z-index:2;
  transition:transform 0.3s, box-shadow 0.3s;
}
.proc-tl-row:hover .proc-tl-dot {
  transform:scale(1.4);
  box-shadow:0 0 0 6px rgba(237,131,55,0.25), 0 0 18px rgba(237,131,55,0.4);
}
.proc-tl-line {
  flex:1; width:2px;
  background:linear-gradient(180deg, rgba(237,131,55,0.45) 0%, rgba(237,131,55,0.1) 100%);
  margin-top:6px;
}
.proc-tl-row:last-child .proc-tl-line { display:none; }

/* Card column */
.proc-tl-card {
  margin: 0.6rem 0 1.8rem 1.8rem;
  background:#f8faff;
  border:1px solid rgba(237,131,55,0.18);
  border-radius:20px;
  padding:1.6rem 2rem;
  position:relative; overflow:hidden;
  cursor:default;
  transition:background 0.35s, border-color 0.3s, transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s;
}
.proc-tl-card::before {
  content:''; position:absolute;
  top:0; left:0; bottom:0; width:3px;
  background:var(--orange); border-radius:20px 0 0 20px;
  transform:scaleY(0); transform-origin:top;
  transition:transform 0.4s cubic-bezier(.22,1,.36,1);
}
.proc-tl-row:hover .proc-tl-card {
  background:#fff;
  border-color:rgba(237,131,55,0.45);
  transform:translateX(6px);
  box-shadow:0 12px 40px rgba(0,0,0,0.08), -4px 0 20px rgba(237,131,55,0.1);
}
.proc-tl-row:hover .proc-tl-card::before { transform:scaleY(1); }

/* Inside card layout */
.proc-tl-card-inner {
  display:flex; align-items:center; gap:1.6rem;
}
.proc-tl-icon-box {
  width:54px; height:54px; border-radius:14px; flex-shrink:0;
  display:flex; align-items:center; justify-content:center;
  font-size:1.5rem;
  border:1px solid rgba(237,131,55,0.2);
  background:rgba(237,131,55,0.06);
  transition:background 0.3s, border-color 0.3s, transform 0.3s;
}
.proc-tl-row:hover .proc-tl-icon-box {
  background:rgba(237,131,55,0.14);
  border-color:rgba(237,131,55,0.5);
  transform:rotate(-4deg) scale(1.08);
}
.proc-tl-text { flex:1; }
.proc-tl-badge {
  display:inline-block;
  font-family:'Poppins',sans-serif; font-size:0.52rem; font-weight:700;
  letter-spacing:0.22em; text-transform:uppercase;
  color:var(--orange); background:rgba(237,131,55,0.1);
  border:1px solid rgba(237,131,55,0.2);
  padding:0.18rem 0.6rem; border-radius:20px;
  margin-bottom:0.5rem;
}
.proc-tl-title {
  font-family: 'Poppins', sans-serif;
    font-size: 1.05rem;
    font-weight: 600;
    color: #0d1f2d;
    margin-bottom: 0.35rem;
    line-height: 1;
    transition: color 0.3s;
    margin-top: 13px;
}
.proc-tl-row:hover .proc-tl-title { color:var(--orange); }
.proc-tl-desc {
  font-size: 0.87rem;
  line-height: 1.7;
  margin: 8px 0 0;
  color: #000000;
  transition: color 0.3s;
}
.proc-tl-row:hover .proc-tl-desc { color:#3a4a5a; }

/* Tag chips on right */
.proc-tl-tag {
  flex-shrink:0; align-self:center;
  font-family:'Poppins',sans-serif; font-size:0.68rem; font-weight:700;
  color:rgba(237,131,55,0.6); letter-spacing:0.08em; text-transform:uppercase;
  writing-mode:vertical-lr; text-orientation:mixed;
  opacity:0.5; transition:opacity 0.3s;
}
.proc-tl-row:hover .proc-tl-tag { opacity:1; color:var(--orange); }

/* \u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}
   5. WHY
\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550}\u{2550} */
.why { padding:9rem 0;position:relative;overflow:hidden;background:linear-gradient(135deg,var(--navy) 0%,var(--navy-deep) 100%); }
.why-diagonal { position:absolute;top:0;left:0;right:0;bottom:0;clip-path:polygon(0 0,55% 0,45% 100%,0 100%);background:rgba(237,131,55,0.025);pointer-events:none; }
.why-inner { display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:5rem;padding:0 7%;position:relative;z-index:2; }
.why-left h2 { font-family:'Poppins',sans-serif;font-size:clamp(2rem,3.8vw,3.8rem);font-weight:600;line-height:1.1;margin-bottom:1.2rem; }
.why-left h2 em { font-style:normal;color:var(--orange); }
.why-left > p { font-size:0.89rem;line-height:1.8;color:#fff;margin-bottom:2.5rem; }
.why-cta { display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #ffffff;
    font-size: 1.01rem;
    font-weight: 600;
    text-decoration: none;
    transition: gap 0.2s;
    margin-top: 2rem;
    background: #ed8337;
    padding: 18px;
    border-radius: 30px;}
.why-cta:hover { gap:0.8rem; }
.why-cta svg { width:18px;height:18px;stroke:#fff;fill:none;stroke-width:2; }
.why-right { display:grid;grid-template-columns:1fr 1fr;gap:1rem; }
.why-card {     background: linear-gradient(145deg, rgba(10, 54, 82, 0.55), rgb(76 186 235 / 23%));;border:1px solid rgba(237,131,55,0.12);border-radius:16px;padding:1.6rem 1.4rem;position:relative;overflow:hidden;cursor:default;transition:transform 0.35s cubic-bezier(.22,1,.36,1),border-color 0.3s,box-shadow 0.3s; }
.why-card:hover { transform:translateY(-5px);border-color:rgba(237,131,55,0.35);box-shadow:0 16px 40px rgba(0,0,0,0.4),0 0 20px rgba(237,131,55,0.06); }
.why-card::before { content:'';position:absolute;top:0;left:0;width:3px;height:0;background:var(--orange);transition:height 0.4s ease;border-radius:0 0 2px 0; }
.why-card:hover::before { height:100%; }
// .why-card.tall { grid-row:span 2; }
.why-card-icon { width:40px;height:40px;border-radius:10px;background:rgba(237,131,55,0.08);border:1px solid rgba(237,131,55,0.2);display:flex;align-items:center;justify-content:center;font-size:1rem;margin-bottom:1rem;transition:background 0.3s,border-color 0.3s; }
.why-card:hover .why-card-icon { background:rgba(237,131,55,0.15);border-color:var(--orange); }
.why-card-title { font-family:'Poppins',sans-serif;font-size:0.92rem;font-weight:700;margin-bottom:0.4rem;transition:color 0.3s; }
.why-card:hover .why-card-title { color:var(--orange); }
.why-card-desc { font-size:14px;line-height:1.7;color:rgb(255 255 255 / 75%);transition:color 0.3s; }
.why-card:hover .why-card-desc { color:rgb(255 255 255 / 75%); }
.speed-box { margin-top:1.4rem;padding:1rem;background:rgba(237,131,55,0.06);border-radius:10px;border:1px solid rgba(237,131,55,0.15); }
.speed-lbl {   font-family: 'Poppins', sans-serif;font-size:0.6rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--orange);margin-bottom:0.5rem; }
.speed-val { font-family:'Poppins',sans-serif;font-size:1.8rem;font-weight:900;color:#fff;line-height:1; }
.speed-val span { font-size:1rem;color:var(--orange); }
.speed-bar { height:5px;background:rgba(237,131,55,0.12);border-radius:3px;margin-top:0.6rem;overflow:hidden; }
.speed-fill { height:100%;width:85%;background:linear-gradient(90deg,var(--orange),var(--orange-l));border-radius:3px; }
#why {
    padding: 5rem 0;
    position: relative;
    overflow: hidden;
    background: #004168;
}

// cta section 

#cta-final {
    position: relative;
    padding: 5rem 6%;
    overflow: hidden;
    background: white;
}

/* faq section */
.container {width:100%;}
        .faq-section{ padding:4rem 6%; }
        .faq-wrapper{ display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; }
        .faq-item{  border-radius:12px; overflow:hidden; margin-bottom:1rem; background:#fff;  }
        .faq-question{ display:flex; justify-content:space-between; align-items:flex-start; padding:1.1rem 1.4rem; cursor:pointer; font-family:'Poppins',sans-serif; font-size:.95rem; font-weight:600; color:#0d1f2d; gap:1rem; }
        .faq-question .icon{ flex-shrink:0; font-size:1.3rem; color:var(--orange); }
        .faq-answer{ padding:0 1.4rem 1.1rem; font-size:.9rem; line-height:1.78; color:#5a6a7a; font-family:'Poppins',sans-serif; }
        .faq-head{ text-align:start; margin-bottom:2.5rem; }
        .faq-head h2{ font-family:'Poppins',sans-serif; font-size:clamp(1.6rem,3vw,2.4rem); font-weight:700; color:#0d1f2d;text-align:center; }
        .faq-head h2 span{ color:var(--orange); }
        @media(max-width:768px){
          .faq-wrapper{ grid-template-columns:1fr; }
          .faq-section{ padding:3rem 4%; }
        }
        @media(max-width:480px){
          .faq-section{ padding:2.5rem 4%; }
          .faq-question{ font-size:.88rem; padding:.9rem 1rem; }
          .faq-answer{ padding:0 1rem .9rem; font-size:.85rem; }
        }


/* \u{2550}\u{2550} RESPONSIVE \u{2014} TABLET (\u{2264} 960px) \u{2550}\u{2550} */
@media(max-width:960px) {
  /* \u{2500}\u{2500} HERO: content first, image second \u{2500}\u{2500} */
  .hero {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    padding: 6rem 5% 4rem;
    min-height: auto;
    text-align: start;
    gap: 2.5rem;
  }
  .hero-left {
    order: 1;
    padding: 2rem 0;
    align-items: flex-start;
  }
  .hero-right { width: 100% !important; height: auto !important; order: 2; display: flex; justify-content: center; }
  .hero-img {
    width: 100%;
    max-width: 480px;
    height: auto;
  }
  .hero-sub { max-width: 90%; }
  .hero-actions { justify-content: center; }

  /* \u{2500}\u{2500} APPROACH \u{2500}\u{2500} */
  .ap-inner { grid-template-columns: 1fr; gap: 2.5rem; }
  .ap-form-wrap { max-width: 100%; }
  .fl-row { grid-template-columns: 1fr 1fr; }

  /* \u{2500}\u{2500} SERVICES \u{2500}\u{2500} */
  .svc-grid { grid-template-columns: repeat(2, 1fr); }
  .svc-header { text-align: start; }
  .svc-header .partners-eyebrow { text-align: center !important; }

  /* \u{2500}\u{2500} PROCESS \u{2500}\u{2500} */
  .process { padding: 4rem 5%; }
  .proc-header { text-align: start; }
  .proc-header .partners-eyebrow { text-align: center !important; }
  .proc-tl-row { grid-template-columns: 60px 48px 1fr; }
  .proc-tl-num { font-size: 2.6rem; padding-top: 1.5rem; }
  .proc-tl-card { padding: 1.3rem 1.5rem; margin-left: 1rem; }
  .proc-tl-tag { display: none; }

  /* \u{2500}\u{2500} WHY \u{2500}\u{2500} */
  .why-inner { grid-template-columns: 1fr; gap: 3rem; padding: 0 5%; }
  .why-right { grid-template-columns: repeat(2, 1fr); }
  .why-card.tall { grid-row: span 1; }
  .why-left { text-align: start; align-items: flex-start; display: flex; flex-direction: column; }
  .why-cta { margin: 0 auto; }

  /* \u{2500}\u{2500} FAQ \u{2500}\u{2500} */
  .faq-wrapper { grid-template-columns: 1fr 1fr; }

  /* \u{2500}\u{2500} Approach header \u{2500}\u{2500} */
  .partners-header1 { text-align: start; }
  .partners-header1 .partners-eyebrow { text-align: center !important; }
}

/* \u{2550}\u{2550} RESPONSIVE \u{2014} MOBILE (\u{2264} 600px) \u{2550}\u{2550} */
@media(max-width:600px) {
  /* \u{2500}\u{2500} HERO \u{2500}\u{2500} */
  .hero {
    padding: 3rem 4% 3rem;
    gap: 2rem;
  }
  .hero-heading { font-size: clamp(1.7rem, 6vw, 2.2rem) !important; text-align: start !important; }
  .hero-sub { font-size: 0.9rem; max-width: 100%; }
  .hero-img { max-width: 100%; width: 100%; }
  .h-badge { font-size: 0.65rem; }

  /* \u{2500}\u{2500} APPROACH \u{2500}\u{2500} */
  .approach { padding: 3rem 4%; }
  .ap-form-card { padding: 2rem 1.4rem; }
  .form-card-title { font-size: 1.35rem; }
  .fl-row { grid-template-columns: 1fr; }

  /* \u{2500}\u{2500} SERVICES \u{2500}\u{2500} */
  .services { padding: 4rem 4%; }
  .svc-grid { grid-template-columns: 1fr; }
  .svc-header { margin-bottom: 2.5rem; }

  /* \u{2500}\u{2500} PROCESS \u{2500}\u{2500} */
  .process { padding: 3rem 4%; overflow: hidden; }
  .proc-header { margin-bottom: 2rem; }
  .proc-header p { font-size: 0.85rem; margin: 14px auto; }

  /* Remove 3-col grid \u{2014} use simple flex layout */
  .proc-timeline { width: 100%; }
  .proc-tl-row {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    position: relative;
    min-height: auto;
    width: 100%;
  }
  .proc-tl-num { display: none !important; }

  /* Slim spine */
  .proc-tl-spine {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 1.2rem;
    flex-shrink: 0;
    width: 28px;
  }
  .proc-tl-dot { width: 11px; height: 11px; box-shadow: 0 0 0 3px rgba(237,131,55,0.2); }
  .proc-tl-line { width: 2px; }

  /* Card fills remaining width, no overflow */
  .proc-tl-card {
    flex: 1;
    min-width: 0;
    margin: 0.3rem 0 1.2rem 0.6rem;
    padding: 1rem;
    border-radius: 14px;
    transform: none !important;
    box-sizing: border-box;
  }

  /* Stack icon + text vertically */
  .proc-tl-card-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.6rem;
  }
  .proc-tl-icon-box {
    width: 40px; height: 40px;
    font-size: 1rem;
    border-radius: 10px;
    flex-shrink: 0;
  }
  .proc-tl-text { width: 100%; min-width: 0; }
  .proc-tl-badge { font-size: 0.5rem; letter-spacing: 0.12em; }
  .proc-tl-title { font-size: 0.92rem; margin-top: 4px; line-height: 1.3; }
  .proc-tl-desc {
    font-size: 0.83rem;
    line-height: 1.65;
    margin-top: 5px;
    word-break: break-word;
    white-space: normal;
  }
  .proc-tl-tag { display: none; }

  /* \u{2500}\u{2500} WHY \u{2500}\u{2500} */
  .why { padding: 4rem 0; }
  .why-inner { padding: 0 4%; gap: 2rem; }
  .why-right { grid-template-columns: 1fr; }
  .why-card.tall { grid-row: span 1; }
  .speed-val { font-size: 1.4rem; }

  /* \u{2500}\u{2500} FAQ \u{2500}\u{2500} */
  .faq-section { padding: 3rem 4%; }
  .faq-wrapper { grid-template-columns: 1fr; gap: 0; }
  .faq-col { gap: 0.6rem; }
  .faq-head { margin-bottom: 1.8rem; }
  .faq-head h2 { font-size: 1.4rem; }
  .faq-question { font-size: 0.88rem; gap: 0.6rem; }
  .faq-question .icon { font-size: 1.1rem; }
  .faq-answer { font-size: 0.82rem; }
  .faq-item { padding: 12px 14px; border-radius: 8px; }
  .section-subtitle { margin-bottom: 0.8rem; }
  h3.pr-heading-process {  font-size: 2.4rem!important;}
  h3.partners-h3-title {  font-size: 2rem!important;}
  h3.faq-h3 {font-size:1.9rem!important;}
}


// our approch
.partners-header1 {
    text-align: start;
    margin-bottom: 0rem;
    position: relative;
    z-index: 2;
}

h2.partners-eyebrow {
    font-size: 1rem;
    font-weight: 900;
}
    h3.pr-heading {
    color: #fff;
    font-size: 2.7rem;
    margin-bottom: 1.4rem;
}
   h3.pr-heading-process {
    color: #000;
    font-size: 2.7rem;
    margin-bottom: 1.4rem;
} 
    h3.partners-h3-title {
    font-size: 2.5rem;
    margin-bottom: 1.2rem;
}
    h3.faq-h3 {
    font-size: 2.3rem;
    color: #000;
    text-align: center;
}

`,m=[{n:"01",icon:(0,r.jsx)("img",{src:"/img/icon/business-registration-service.webp",alt:"Business Registration",width:"28",height:"28"}),title:"Business Registration",desc:"Public Limited, Private Limited, LLP, OPC, Partnership, Sole Proprietorship services.",link:"/business-registrations"},{n:"02",icon:(0,r.jsx)("img",{src:"/img/icon/company-valuations-service.webp",alt:"Company Valuations",width:"28",height:"28"}),title:"Company Valuations",desc:"Accurate valuations and strategic guidance to fuel funding, growth, and smart investments.",link:"/company-valuations-and-investment-support"},{n:"03",icon:(0,r.jsx)("img",{src:"/img/icon/statutory-compliance-service.webp",alt:"Statutory Compliance",width:"28",height:"28"}),title:"Statutory Compliance",desc:"Ensuring timely filings, audits, and adherence to all regulatory requirements.",link:"/statutory-compliance"},{n:"04",icon:(0,r.jsx)("img",{src:"/img/icon/virtual-services.webp",alt:"Virtual CFO Services",width:"28",height:"28"}),title:"Virtual CFO Services",desc:"Strategic financial guidance, budgeting, and reporting to drive informed business decisions.",link:"/virtual-cfo-services"},{n:"05",icon:(0,r.jsx)("img",{src:"/img/icon/accounting-service.webp",alt:"Accounting",width:"28",height:"28"}),title:"Accounting",desc:"Complete accounting, GST, TDS, MIS reports, payroll, and comprehensive full-scale back-office support.",link:"/accounting"},{n:"06",icon:(0,r.jsx)("img",{src:"/img/icon/finances-service.webp",alt:"Finances",width:"28",height:"28"}),title:"Finances",desc:"Banking, loans, CMA reports, audits, approvals, and complete financial support services.",link:"/finances"}],g=[{n:"01",icon:(0,r.jsx)("img",{src:"/img/icon/business-registration-discover.webp",alt:"Discover",width:"28",height:"28"}),title:"Discover",desc:"Every successful business begins with understanding. We learn your goals, model, and growth vision, analyze industry and ownership, and recommend the best entity for long-term alignment.",color:"#ed8337"},{n:"02",icon:(0,r.jsx)("img",{src:"/img/icon/business-registration-assess.webp",alt:"Assess and Plan",width:"28",height:"28"}),title:"Assess & Plan",desc:"After understanding goals, we review legal, financial, and compliance requirements for your location and structure, mapping registrations, licenses, and taxes to create a clear, risk-aware launch roadmap.",color:"#38bdf8"},{n:"03",icon:(0,r.jsx)("img",{src:"/img/icon/business-registration-register.webp",alt:"Register and Establish",width:"28",height:"28"}),title:"Register & Establish",desc:"Our experts prepare and file all documents\u2014name approval, incorporation, PAN, TAN, GST, and professional tax\u2014ensuring accuracy, transparency, and efficient, confusion-free legal establishment for your business.",color:"#34d399"},{n:"04",icon:(0,r.jsx)("img",{src:"/img/icon/business-registration-comply.webp",alt:"Comply and Maintain",width:"28",height:"28"}),title:"Comply & Maintain",desc:"We manage statutory filings, annual returns, renewals, ROC and tax submissions, meeting deadlines, maintaining records, and keeping your business compliant, audit-ready, and legally strong year-round.",color:"#a855f7"},{n:"05",icon:(0,r.jsx)("img",{src:"/img/icon/business-registration-monitor.webp",alt:"Monitor and Update",width:"28",height:"28"}),title:"Monitor & Update",desc:"Regulations evolve, and so do you. We monitor changes, update registrations, amend records, and advise proactively, ensuring ongoing compliance, accuracy, and alignment with your business growth.",color:"#f6ad55"}],h=[{icon:(0,r.jsx)("img",{src:"/img/icon/professional-credibility.webp",alt:"Professional Credibility",width:"28",height:"28"}),title:"Professional Credibility",desc:"Build strong trust with clients and partners through a verified and professionally registered business presence."},{icon:(0,r.jsx)("img",{src:"/img/icon/financial-advantages.webp",alt:"Financial Advantages",width:"28",height:"28"}),title:"Financial Advantages",desc:"Access loans, funding, and tax benefits that support smoother financial growth and scalability."},{icon:(0,r.jsx)("img",{src:"/img/icon/compliance-assurance.webp",alt:"Compliance Assurance",width:"28",height:"28"}),title:"Compliance Assurance",desc:"Stay fully compliant with timely filings, updates, and expert monitoring of regulatory requirements."}];function u(){return(0,r.jsxs)("section",{className:"hero",id:"hero",children:[(0,r.jsxs)("div",{className:"hero-left",children:[(0,r.jsxs)("div",{className:"h-badge",children:[(0,r.jsx)("div",{className:"badge-dot"}),"Business Registration Compliance"]}),(0,r.jsxs)("h1",{className:"hero-heading",children:["Simple Registration Made ",(0,r.jsx)("span",{className:"hl lined",children:"Strong  business"}),", Compliance"]}),(0,r.jsx)("p",{className:"hero-sub",children:"We start with clarity. We get to know your business, your plans, and the direction you want to grow in. Then we tailor the right structure and registration approach to fit your exact needs. We look for what slows you down incomplete documents, missed filings, or confusing procedures  and make the entire process simple, transparent, and stress-free."}),(0,r.jsx)("div",{className:"hero-actions",children:(0,r.jsxs)("a",{className:"btn-fill",href:"/contact-us",children:["Explore More ",(0,r.jsx)("span",{className:"btn-arrow",children:"\u203A"})]})})]}),(0,r.jsx)("div",{className:"hero-right",children:(0,r.jsx)("img",{src:"/img/business-registration-compliance.png",alt:"Business Registration",className:"hero-img"})})]})}function f(){let[e,t]=(0,i.useState)({name:"",email:"",phone:"",company:"",service:"",msg:""}),a=a=>{t({...e,[a.target.name]:a.target.value})};return(0,r.jsx)("section",{className:"approach",id:"approach",children:(0,r.jsxs)("div",{className:"ap-inner",children:[(0,r.jsxs)("div",{className:"ap-left",children:[(0,r.jsx)("div",{className:"partners-header1",children:(0,r.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Approach in"})}),(0,r.jsxs)("h2",{className:"ap-heading",children:["Business  ",(0,r.jsx)("span",{children:"Registration & Compliance"})]}),(0,r.jsx)("p",{className:"ap-intro",children:"Every great business starts with a strong foundation. We help you register, comply, and launch with confidence. You won\u2019t face confusion, complexity, or red tape that can hold startups back."}),(0,r.jsx)("p",{className:"ap-intro",children:"We take care of everything from choosing the right business structure to handling legal filings, licenses, and documentation. Our approach ensures a smooth, hassle-free setup process. This allows you to stay focused on your ideas, innovation, and growth"}),(0,r.jsx)("p",{className:"ap-intro",children:"As regulations evolve, we stay ahead for you by monitoring changes and ensuring ongoing compliance. Your business remains protected, updated, and future-ready. Simple, seamless, and reliable\u2014built for lasting success."})]}),(0,r.jsx)("div",{className:"ap-form-wrap",children:(0,r.jsxs)("div",{className:"ap-form-card",children:[(0,r.jsxs)("div",{className:"form-card-eyebrow",children:[(0,r.jsx)("span",{className:"form-card-eyebrow-line"}),"Your Growth, Our Mission",(0,r.jsx)("span",{className:"form-card-eyebrow-line"})]}),(0,r.jsxs)("div",{className:"form-card-title",children:["Get Your ",(0,r.jsx)("span",{children:"Free"})," Quote"]}),(0,r.jsxs)("form",{onSubmit:a=>{a.preventDefault();let r={name:e.name,email:e.email,phone:e.phone,company:e.company,message:e.msg,url:window.location.href};s.Ay.send("service_8xw6k3r","template_jarui36",r,"XWRnXi4hK2SvmRG3q").then(()=>{alert("Message Sent Successfully \u2705"),t({name:"",email:"",phone:"",company:"",msg:""})}).catch(e=>{console.log(e),alert("Failed to send \u274C")})},children:[(0,r.jsxs)("div",{className:"fl-row",children:[(0,r.jsxs)("div",{className:"fl-group",children:[(0,r.jsx)("label",{className:"fl-label",children:"Your Name"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"fl-icon",children:"\u{1F464}"}),(0,r.jsx)("input",{className:"fl-input",type:"text",name:"name",placeholder:"Full name",value:e.name,onChange:a,required:!0})]})]}),(0,r.jsxs)("div",{className:"fl-group",children:[(0,r.jsx)("label",{className:"fl-label",children:"Company"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"fl-icon",children:"\u{1F3E2}"}),(0,r.jsx)("input",{className:"fl-input",type:"text",name:"company",placeholder:"Company name",value:e.company,onChange:a})]})]})]}),(0,r.jsxs)("div",{className:"fl-group",children:[(0,r.jsx)("label",{className:"fl-label",children:"Email Address"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"fl-icon",children:"\u2709\uFE0F"}),(0,r.jsx)("input",{className:"fl-input",type:"email",name:"email",placeholder:"your@email.com",value:e.email,onChange:a,required:!0})]})]}),(0,r.jsxs)("div",{className:"fl-group",children:[(0,r.jsx)("label",{className:"fl-label",children:"Mobile Number"}),(0,r.jsxs)("div",{className:"phone-row",children:[(0,r.jsx)("div",{className:"phone-flag",children:(0,r.jsx)("span",{className:"phone-flag-icon",children:"\u{1F4DE}"})}),(0,r.jsx)("input",{className:"fl-input",type:"tel",name:"phone",placeholder:"Mobile number",value:e.phone,onChange:a,maxLength:"10",pattern:"[0-9]{10}",required:!0})]})]}),(0,r.jsxs)("div",{className:"fl-group textarea-group",children:[(0,r.jsx)("label",{className:"fl-label",children:"Message"}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("span",{className:"fl-icon",style:{top:"0.9rem",transform:"none"},children:"\u{1F4AC}"}),(0,r.jsx)("textarea",{className:"fl-textarea",name:"msg",placeholder:"Tell us about your business needs...",value:e.msg,onChange:a})]})]}),(0,r.jsxs)("button",{type:"submit",className:"ap-submit",children:["Get Free Consultation",(0,r.jsx)("span",{className:"ap-submit-arrow",children:"\u203A"})]})]})]})})]})})}function b(){return(0,r.jsxs)("section",{className:"services",id:"services",children:[(0,r.jsx)("div",{className:"sep-line"}),(0,r.jsxs)("div",{className:"svc-header reveal",children:[(0,r.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Specialized Business Registration & Compliance Services"}),(0,r.jsxs)("h3",{className:"partners-h3-title",children:["Simplified Setup. ",(0,r.jsx)("em",{style:{color:"#ed8337",marginBottom:"20px"},children:" Seamless Compliance. "}),"Growth Assured."]}),(0,r.jsx)("p",{children:"From Registration to Reporting, We Deliver End-to-End Solutions That Keep Your Business On Track."})]}),(0,r.jsx)("div",{className:"svc-grid reveal",style:{transitionDelay:"0.1s"},children:m.map((e,t)=>(0,r.jsxs)("div",{className:"svc-card",children:[(0,r.jsx)("div",{className:"svc-num",children:e.n}),(0,r.jsx)("div",{className:"svc-icon",children:e.icon}),(0,r.jsx)("h3",{className:"svc-title",children:e.title}),(0,r.jsx)("p",{className:"svc-desc",children:e.desc}),(0,r.jsx)(o.A,{to:e.link,className:"svc-btn",children:"Discover More \u2192"})]},t))})]})}function x(){let e=["Discover","Assess & Plan","Register & Establish","Comply & Maintain","Monitor & Update"];return(0,r.jsxs)("section",{className:"process",id:"process",children:[(0,r.jsx)("div",{className:"sep-line"}),(0,r.jsxs)("div",{className:"proc-header reveal",children:[(0,r.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start",color:"#ed8337"},children:"Our Proven Business Registration and Compliance Process"}),(0,r.jsxs)("h3",{className:"pr-heading-process",children:["Start Smart. ",(0,r.jsx)("em",{style:{color:"#ed8337"},children:"Stay Compliant."})," Grow Fast."]}),(0,r.jsx)("p",{children:"From registration to compliance management, we deliver structured, reliable, and efficient solutions for your business success."})]}),(0,r.jsx)("div",{className:"proc-timeline reveal",style:{transitionDelay:"0.1s"},children:g.map((t,a)=>(0,r.jsxs)("div",{className:"proc-tl-row",children:[(0,r.jsx)("div",{className:"proc-tl-num",children:t.n}),(0,r.jsxs)("div",{className:"proc-tl-spine",children:[(0,r.jsx)("div",{className:"proc-tl-dot"}),(0,r.jsx)("div",{className:"proc-tl-line"})]}),(0,r.jsx)("div",{className:"proc-tl-card",children:(0,r.jsxs)("div",{className:"proc-tl-card-inner",children:[(0,r.jsx)("div",{className:"proc-tl-icon-box",children:t.icon}),(0,r.jsxs)("div",{className:"proc-tl-text",children:[(0,r.jsxs)("div",{className:"proc-tl-badge",children:["Step ",t.n]}),(0,r.jsx)("h4",{className:"proc-tl-title",children:t.title}),(0,r.jsx)("p",{className:"proc-tl-desc",children:t.desc})]}),(0,r.jsx)("div",{className:"proc-tl-tag",children:e[a]})]})})]},t.n))})]})}function y(){return(0,r.jsxs)("section",{className:"why",id:"why",children:[(0,r.jsx)("div",{className:"sep-line"}),(0,r.jsx)("div",{className:"why-diagonal"}),(0,r.jsxs)("div",{className:"why-inner",children:[(0,r.jsxs)("div",{className:"why-left1 reveal",children:[(0,r.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Why Choose Us"}),(0,r.jsxs)("h3",{className:"partners-h3-title",children:["Why You Should Choose us for ",(0,r.jsx)("em",{style:{color:"#ed8337"},children:" Business Registration"})," & Compliance Services"]}),(0,r.jsx)("p",{style:{marginTop:"20px"},children:"Starting your business the right way means setting a strong foundation from day one. Registering your business not only gives it a legal identity but also adds credibility, unlocks financial opportunities, and safeguards you from future compliance issues. With expert registration support, you save time, avoid errors, and ensure your business is ready to grow without roadblocks."}),(0,r.jsxs)("a",{href:"#approach",className:"why-cta",children:["Get Started Free",(0,r.jsx)("svg",{viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),(0,r.jsxs)("div",{className:"why-right reveal",style:{transitionDelay:"0.12s"},children:[(0,r.jsxs)("div",{className:"why-card tall",children:[(0,r.jsx)("div",{className:"why-card-icon",children:(0,r.jsx)("img",{src:"/img/icon/business-registration-legal.webp",alt:"Legal Identity and Protection",width:"28",height:"28"})}),(0,r.jsx)("h4",{className:"why-card-title",children:"Legal Identity & Protection"}),(0,r.jsx)("p",{className:"why-card-desc",children:"Secure your business with proper registration, ensuring legal recognition and complete protection from risks."})]}),h.map(e=>(0,r.jsxs)("div",{className:"why-card",children:[(0,r.jsx)("div",{className:"why-card-icon",children:e.icon}),(0,r.jsx)("h4",{className:"why-card-title",children:e.title}),(0,r.jsx)("p",{className:"why-card-desc",children:e.desc})]},e.title))]})]})]})}let w=[{q:"What is business compliance?",a:"Business compliance refers to following all legal, regulatory, financial, and operational requirements applicable to a company. This includes registrations, tax filings, labor laws, statutory reporting, and industry-specific regulations necessary to ensure smooth, lawful, and risk-free business operations."},{q:"What documents are needed for business registration?",a:" Business registration documents typically include PAN card, Aadhaar card, address proof, passport-size photographs, bank details, and registered office proof. Additional documents may vary depending on the business structure, such as proprietorship, partnership, LLP, or private limited company registration requirements."},{q:"Why is compliance important for a business?",a:"Compliance helps businesses operate legally, avoid penalties, maintain financial transparency, and build credibility with clients, investors, and government authorities. Proper compliance management also supports smooth business operations, reduces legal risks, and creates a strong foundation for sustainable long-term growth and expansion."},{q:"What are the annual compliance requirements for a company?",a:" Annual compliance requirements may include income tax filing, GST returns, ROC filings, financial statement submissions, board resolutions, statutory audits, TDS filings, payroll compliance, and maintenance of legal records. Requirements vary based on company structure, industry, and applicable government regulations."},{q:"Can you help with both registration and compliance?",a:" Yes, we provide complete support for business registration and ongoing compliance management. Our services include company incorporation, GST registration, licensing, ROC filings, tax compliance, payroll compliance, documentation management, and statutory reporting to ensure smooth and legally compliant business operations."},{q:"What are the types of compliance?",a:"Business compliance includes statutory compliance, tax compliance, labor law compliance, corporate compliance, environmental compliance, industry-specific regulatory compliance, and financial reporting compliance. Each type ensures businesses operate according to applicable laws, regulations, and operational standards within their respective industries."}];function v(){let[e,t]=(0,i.useState)(null),a=a=>{t(e===a?null:a)};return(0,r.jsxs)("section",{className:"faq-section",children:[(0,r.jsx)("div",{className:"partners-header2",style:{textAlign:"center",marginTop:"20px"},children:(0,r.jsx)("h2",{className:"partners-eyebrow",children:"Frequently Asked Questions"})}),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"faq-head",children:(0,r.jsxs)("h3",{className:"faq-h3",children:["Queries That Could ",(0,r.jsx)("span",{children:"Hold You Back"})]})}),(0,r.jsxs)("div",{className:"faq-wrapper",children:[(0,r.jsx)("div",{className:"faq-col",children:w.slice(0,3).map((t,i)=>(0,r.jsxs)("div",{className:"faq-item",children:[(0,r.jsxs)("div",{className:"faq-question",onClick:()=>a(i),children:[(0,r.jsx)("span",{children:t.q}),(0,r.jsx)("span",{className:"icon",children:e===i?"\u2212":"+"})]}),e===i&&(0,r.jsx)("div",{className:"faq-answer",children:t.a})]},i))}),(0,r.jsx)("div",{className:"faq-col",children:w.slice(3,6).map((t,i)=>(0,r.jsxs)("div",{className:"faq-item",children:[(0,r.jsxs)("div",{className:"faq-question",onClick:()=>a(i+3),children:[(0,r.jsx)("span",{children:t.q}),(0,r.jsx)("span",{className:"icon",children:e===i+3?"\u2212":"+"})]}),e===i+3&&(0,r.jsx)("div",{className:"faq-answer",children:t.a})]},i+3))})]})]})]})}function j(){return(0,i.useEffect)(()=>{let e=new IntersectionObserver(t=>t.forEach(t=>{t.isIntersecting&&(t.target.classList.add("on"),e.unobserve(t.target))}),{threshold:.1});return document.querySelectorAll(".reveal").forEach(t=>e.observe(t)),()=>e.disconnect()},[]),(0,r.jsxs)(l.A,{title:"Business Registration and Compliance Services | Company Registration ",description:"Efficient Business Registration and Compliance Services. Get expert support for company registration, legal documentation, and regulatory compliance. Contact us! ",children:[(0,r.jsx)(p,{}),(0,r.jsx)("style",{children:d}),(0,r.jsxs)("div",{className:"pcs",children:[(0,r.jsx)(u,{}),(0,r.jsx)(f,{}),(0,r.jsx)(b,{}),(0,r.jsx)(x,{}),(0,r.jsx)(y,{}),(0,r.jsx)(v,{}),(0,r.jsx)(n.A,{})]})]})}}}]);