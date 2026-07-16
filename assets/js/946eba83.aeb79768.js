"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["572"],{3177(e,t,i){i.d(t,{A:()=>r});var s=i(4848),a=i(6540);function r(){let[e,t]=(0,a.useState)([]),[i,r]=(0,a.useState)(!0),[n,l]=(0,a.useState)(null);return(0,a.useEffect)(()=>{fetch("https://www.priyamconsultancy.com/blog/wp-json/wp/v2/posts?_embed&per_page=3").then(e=>{if(!e.ok)throw Error(`HTTP ${e.status}`);return e.json()}).then(e=>{t(e.map(e=>{let t=e._embedded?.["wp:featuredmedia"]?.[0]?.source_url||null,i=(e.excerpt?.rendered||"").replace(/<[^>]*>/g,"").replace(/&[^;]+;/g," ").trim(),s=i.length>200?i.slice(0,200)+"...":i,a=(e.title?.rendered||"Untitled").replace(/&[^;]+;/g," ").trim();return{guid:e.id,title:a,link:e.link,thumbnail:t,excerpt:s}})),r(!1)}).catch(e=>{l(e.message),r(!1)})},[]),(0,s.jsxs)("section",{style:{width:"100%",padding:"4rem 1rem",boxSizing:"border-box",background:"#fff"},children:[(0,s.jsxs)("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[(0,s.jsxs)("div",{style:{textAlign:"center",marginBottom:"2.5rem"},children:[(0,s.jsx)("h2",{style:{fontSize:"2rem",fontWeight:700,margin:"0 0 0.5rem",color:"#111"},children:"Blogs"}),(0,s.jsx)("p",{style:{color:"#666",margin:0,fontSize:"1rem"},children:"Stay updated with the latest in digital marketing, growth strategies, and industry trends."})]}),i&&(0,s.jsx)("p",{style:{textAlign:"center",color:"#888"},children:"Loading..."}),n&&(0,s.jsxs)("p",{style:{textAlign:"center",color:"red"},children:["Error: ",n]}),(0,s.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1.5rem"},className:"blog-grid",children:e.map(e=>(0,s.jsxs)("a",{href:e.link,target:"_blank",rel:"noreferrer",style:{border:"1px solid #e5e7eb",borderRadius:"12px",overflow:"hidden",background:"#fff",display:"flex",flexDirection:"column",textDecoration:"none",color:"inherit",transition:"box-shadow 0.2s, transform 0.2s",cursor:"pointer"},onMouseEnter:e=>{e.currentTarget.style.boxShadow="0 8px 24px rgba(0,0,0,0.12)",e.currentTarget.style.transform="translateY(-3px)"},onMouseLeave:e=>{e.currentTarget.style.boxShadow="none",e.currentTarget.style.transform="translateY(0)"},children:[(0,s.jsx)("div",{style:{width:"100%",aspectRatio:"16/9",overflow:"hidden",background:"#1a2744"},children:e.thumbnail?(0,s.jsx)("img",{src:e.thumbnail,alt:e.title,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):(0,s.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",opacity:.4,fontSize:"0.8rem"},children:"No image"})}),(0,s.jsxs)("div",{style:{padding:"1.25rem",display:"flex",flexDirection:"column",gap:"0.75rem"},children:[(0,s.jsx)("p",{style:{fontWeight:600,fontSize:"1.1rem",lineHeight:1.6,margin:0,color:"#111"},children:e.title}),(0,s.jsx)("p",{style:{color:"#444",fontSize:"0.875rem",lineHeight:1.6,flex:1,margin:0},children:e.excerpt}),(0,s.jsx)("span",{style:{display:"inline-block",background:"#E87C30",color:"#fff",padding:"0.6rem 1.5rem",borderRadius:"999px",fontWeight:500,alignSelf:"flex-start",marginTop:"0.5rem",fontSize:"0.875rem"},children:"Read More"})]})]},e.guid))})]}),(0,s.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        @media (max-width: 1024px) { .blog-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px)  { .blog-grid { grid-template-columns: 1fr !important; } }
      `}})]})}},9393(e,t,i){i.d(t,{A:()=>r});var s=i(4848),a=i(6540);let r=function(){let e=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let t=e.current;if(!t)return;let i=t.getContext("2d"),s="#ed8337",a,r,n=[],l;function o(){a=t.width=t.parentElement.offsetWidth,r=t.height=t.parentElement.offsetHeight}function c(){this.reset()}c.prototype.reset=function(){this.x=Math.random()*a,this.y=Math.random()*r,this.r=2.2*Math.random()+.6,this.type=.55>Math.random()?"dot":.5>Math.random()?"ring":"plus",this.speed=.35*Math.random()+.08,this.dir=Math.random()*Math.PI*2,this.alpha=.45*Math.random()+.1,this.pulse=Math.random()*Math.PI*2,this.pulseSpeed=.018*Math.random()+.008,this.size=4*Math.random()+2},c.prototype.update=function(){this.x+=Math.cos(this.dir)*this.speed,this.y+=Math.sin(this.dir)*this.speed,this.pulse+=this.pulseSpeed,this.dir+=(Math.random()-.5)*.015,this.x<-20&&(this.x=a+20),this.x>a+20&&(this.x=-20),this.y<-20&&(this.y=r+20),this.y>r+20&&(this.y=-20)},c.prototype.draw=function(){let e=this.alpha*(.7+.3*Math.sin(this.pulse));if(i.save(),i.globalAlpha=e,i.strokeStyle=i.fillStyle=s,i.lineWidth=1,"dot"===this.type)i.beginPath(),i.arc(this.x,this.y,this.r+.4*Math.sin(this.pulse),0,2*Math.PI),i.fill();else if("ring"===this.type){let e=this.size*(.9+.15*Math.sin(this.pulse));i.beginPath(),i.arc(this.x,this.y,e,0,2*Math.PI),i.stroke()}else{let e=this.size*(.9+.1*Math.sin(this.pulse));i.beginPath(),i.moveTo(this.x-e,this.y),i.lineTo(this.x+e,this.y),i.moveTo(this.x,this.y-e),i.lineTo(this.x,this.y+e),i.stroke()}i.restore()},window.addEventListener("resize",o),o(),n=[];let d=Math.floor(a*r/9e3);for(let e=0;e<Math.max(d,28);e++)n.push(new c);return!function e(){i.clearRect(0,0,a,r),function(){let e=n.filter(e=>"dot"===e.type);for(let t=0;t<e.length;t++)for(let a=t+1;a<e.length;a++){let r=e[t].x-e[a].x,n=e[t].y-e[a].y,l=Math.sqrt(r*r+n*n);l<110&&(i.save(),i.globalAlpha=(1-l/110)*.12,i.strokeStyle=s,i.lineWidth=.7,i.beginPath(),i.moveTo(e[t].x,e[t].y),i.lineTo(e[a].x,e[a].y),i.stroke(),i.restore())}}(),n.forEach(e=>{e.update(),e.draw()}),l=requestAnimationFrame(e)}(),()=>{cancelAnimationFrame(l),window.removeEventListener("resize",o)}},[]),(0,s.jsx)("section",{id:"cta-final",children:(0,s.jsxs)("div",{className:"cta-banner",style:{"--glow-x":"50%","--glow-y":"50%"},children:[(0,s.jsx)("canvas",{id:"ctaCanvas",ref:e}),(0,s.jsxs)("div",{className:"cta-banner-left",children:[(0,s.jsx)("div",{className:"partners-header",children:(0,s.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Ready to Start?"})}),(0,s.jsxs)("h2",{className:"cta-banner-heading",children:["Let's Talk About Your",(0,s.jsx)("br",{}),"Next Big ",(0,s.jsx)("span",{className:"hl-italic",children:"Growth Move"})]}),(0,s.jsx)("p",{className:"cta-banner-sub",children:"No pressure. Just a quick conversation to understand where you are-and how we can help you move forward."})]}),(0,s.jsxs)("div",{className:"cta-banner-right",children:[(0,s.jsxs)("a",{href:"#",className:"cta-bprimary",children:["Book a Free Consultation",(0,s.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",children:(0,s.jsx)("path",{d:"M3 8h10M9 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})]}),(0,s.jsx)("a",{href:"#",className:"cta-bghost",children:"View All Services"})]})]})})}},4171(e,t,i){i.r(t),i.d(t,{default:()=>j});var s=i(4848),a=i(6540),r=i(8128),n=i(3177),l=i(9393),o=i(8230),c=i(3572);function d(){let e="https://www.pcsbusinesssolution.com/img/digital-marketing.png";return(0,s.jsxs)(c.A,{children:[(0,s.jsx)("title",{children:"Digital Marketing Agency in Coimbatore | Priyam Consultancy"}),(0,s.jsx)("meta",{name:"description",content:"PCS is the best digital marketing agency in India with results-driven strategies. We offer the best digital marketing services in India for your brand's growth!"}),(0,s.jsx)("meta",{name:"keywords",content:"Digital Marketing Agency, Digital Marketing, Digital Marketing Services, Digital Marketing Company, Digital Marketing Solutions, igital Marketing Consultant"}),(0,s.jsx)("link",{rel:"canonical",href:"https://www.priyamconsultancy.com/digital-marketing/"}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:title",content:"Digital Marketing Agency in Coimbatore | Priyam Consultancy"}),(0,s.jsx)("meta",{property:"og:description",content:"PCS is the best digital marketing agency in India with results-driven strategies. We offer the best digital marketing services in India for your brand's growth!"}),(0,s.jsx)("meta",{property:"og:url",content:"https://www.priyamconsultancy.com/digital-marketing/"}),(0,s.jsx)("meta",{property:"og:image",content:e}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{name:"twitter:title",content:"Digital Marketing Agency in Coimbatore | Priyam Consultancy"}),(0,s.jsx)("meta",{name:"twitter:description",content:"PCS is the best digital marketing agency in India with results-driven strategies. We offer the best digital marketing services in India for your brand's growth!"}),(0,s.jsx)("meta",{name:"twitter:image",content:e}),(0,s.jsx)("script",{type:"application/ld+json",children:`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Priyam Consultancy Services",
            "alternateName": "PCS",
            "url": "https://www.priyamconsultancy.com/",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png"
            },
            "description": "Priyam Consultancy Services is an all-in-one business solutions provider offering Business Registration, Statutory Compliance, Virtual CFO, Digital Transformation, Digital Marketing, Website Development, and HR Services across India.",
            "foundingDate": "2020",
            "areaServed": "IN",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91 96774 44048",
                "contactType": "customer support",
                "availableLanguage": ["English", "Tamil"]
              }
            ],
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61577125709962",
              "https://www.linkedin.com/company/priyam-consultancy-services/",
              "https://www.instagram.com/priyam_consultancy_services/",
              "https://x.com/services91032",
              "https://g.co/kgs/rdTYdi6"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Business & Digital Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Registration" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Statutory Compliance" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Virtual CFO Services" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Transformation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HR & Payroll Services" } }
              ]
            }
          }
        `}),(0,s.jsx)("script",{type:"application/ld+json",children:`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Priyam Consultancy Services",
            "url": "https://www.priyamconsultancy.com/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.priyamconsultancy.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          }
        `}),(0,s.jsx)("script",{type:"application/ld+json",children:`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Priyam Consultancy Services",
            "image": "https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png",
            "url": "https://www.priyamconsultancy.com/",
            "description": "All-in-one business consultancy offering registration, compliance, digital transformation, marketing and HR services across India.",
            "telephone": "+91 96774 44048",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Coimbatore",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "areaServed": { "@type": "Country", "name": "India" },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61577125709962",
              "https://www.linkedin.com/company/priyam-consultancy-services/",
              "https://www.instagram.com/priyam_consultancy_services/"
            ]
          }
        `}),(0,s.jsx)("script",{type:"application/ld+json",children:`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.priyamconsultancy.com/#service",
            "serviceType": "Business Consultancy & Digital Services",
            "name": "Business Registration, Digital Marketing & IT Solutions",
            "url": "https://www.priyamconsultancy.com/",
            "description": "Priyam Consultancy Services provides end-to-end business solutions including Business Registration, Statutory Compliance, Virtual CFO, Digital Transformation, SEO, Social Media Marketing, Google Ads, Meta Ads, Website Development, and HR & Payroll Services across India.",
            "provider": {
              "@type": "Organization",
              "name": "Priyam Consultancy Services",
              "url": "https://www.priyamconsultancy.com/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png"
              }
            },
            "areaServed": { "@type": "Country", "name": "India" },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "INR",
              "url": "https://www.priyamconsultancy.com/"
            }
          }
        `}),(0,s.jsx)("script",{type:"application/ld+json",children:`
          {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Business Registration & Digital Solutions",
            "image": ["https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png"],
            "description": "All-in-one business consultancy services in Coimbatore \u{2014} Business Registration, Compliance, Digital Transformation, Digital Marketing, Website Development, HR & Payroll Management.",
            "brand": {
              "@type": "Brand",
              "name": "Priyam Consultancy Services"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.9",
                "bestRating": "5"
              },
              "author": { "@type": "Organization", "name": "Priyam Consultancy Services" }
            },
            "offers": {
              "@type": "Offer",
              "url": "https://www.priyamconsultancy.com/",
              "priceCurrency": "INR",
              "price": "0.00",
              "priceValidUntil": "2026-12-31",
              "availability": "https://schema.org/InStock",
              "seller": { "@type": "Organization", "name": "Priyam Consultancy Services" }
            }
          }
        `}),(0,s.jsx)("script",{type:"application/ld+json",children:`
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
              }
            ]
          }
        `}),(0,s.jsx)("script",{type:"application/ld+json",children:`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Priyam Consultancy Services \u{2014} All Services",
            "url": "https://www.priyamconsultancy.com/",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Business Registration" },
              { "@type": "ListItem", "position": 2, "name": "Statutory Compliance" },
              { "@type": "ListItem", "position": 3, "name": "Virtual CFO Services" },
              { "@type": "ListItem", "position": 4, "name": "Digital Transformation" },
              { "@type": "ListItem", "position": 5, "name": "Search Engine Optimization (SEO)" },
              { "@type": "ListItem", "position": 6, "name": "Social Media Marketing" },
              { "@type": "ListItem", "position": 7, "name": "Performance Marketing (PPC)" },
              { "@type": "ListItem", "position": 8, "name": "Content Marketing" },
              { "@type": "ListItem", "position": 9, "name": "Website Development" },
              { "@type": "ListItem", "position": 10, "name": "HR & Payroll Management" }
            ]
          }
        `}),(0,s.jsx)("script",{type:"application/ld+json",children:`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What makes PCS different from other consultancy agencies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "At PCS, we focus on strategy, creativity, and measurable business growth. Every solution is customised to your brand goals, helping you build stronger visibility, better engagement, and long-term digital success."
                }
              },
              {
                "@type": "Question",
                "name": "What types of digital marketing services do you provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer SEO, performance marketing (PPC), social media marketing, content marketing, email & WhatsApp campaigns, graphic design, and analytics-driven strategies to boost online visibility and engagement."
                }
              },
              {
                "@type": "Question",
                "name": "What are the benefits of digital transformation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Digital transformation improves operational efficiency, enhances customer experience, and enables data-driven decision-making. It drives innovation, scalability, and long-term business growth."
                }
              },
              {
                "@type": "Question",
                "name": "What is a company registration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Company registration is the legal process of forming a business entity, obtaining licenses, and ensuring compliance with government regulations to operate officially."
                }
              },
              {
                "@type": "Question",
                "name": "How long to see results through digital marketing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Results vary by strategy; paid campaigns may show immediate impact, while SEO and organic efforts typically take 3 to 6 months for measurable outcomes."
                }
              },
              {
                "@type": "Question",
                "name": "How are your HR services different from other agencies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide tailored HR solutions combining strategy, compliance, payroll, recruitment, and employee engagement with seamless integration into your business operations."
                }
              },
              {
                "@type": "Question",
                "name": "Can PCS manage the entire digital marketing process?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, PCS provides complete end-to-end digital marketing support including branding, website development, SEO, content marketing, social media management, paid advertising, lead generation, and performance tracking."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work with startups as well as established businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We work with startups, SMEs, and large enterprises. Our team creates scalable solutions suitable for businesses at every stage of growth and expansion."
                }
              }
            ]
          }
        `})]})}let m=()=>null;function h(){return(0,s.jsxs)("section",{className:"hero",id:"hero",children:[(0,s.jsxs)("div",{className:"hero-left",children:[(0,s.jsxs)("div",{className:"h-badge",children:[(0,s.jsx)("div",{className:"badge-dot"}),"Digital Marketing "]}),(0,s.jsxs)("h1",{className:"hero-heading",style:{fontWeight:"600"},children:["Best",(0,s.jsx)("span",{className:"hl lined",style:{marginLeft:"12px"},children:"Digital Marketing "}),"Who Puts the Clients First"]}),(0,s.jsx)("p",{className:"hero-sub",children:"As the best digital marketing agency, we believe great digital marketing starts with listening. We ask the right questions to understand what truly holds your business back\u2014whether it's low leads, weak visibility, or underperforming campaigns. As a trusted digital marketing company, we go beyond surface-level strategies and uncover insights that drive real results."}),(0,s.jsx)("div",{className:"hero-actions",children:(0,s.jsxs)("a",{className:"btn-fill",href:"/contact-us",children:["Explore More ",(0,s.jsx)("span",{className:"btn-arrow",children:"\u203A"})]})})]}),(0,s.jsx)("div",{className:"hero-right",children:(0,s.jsx)("img",{src:"/img/digital-marketing.webp",alt:"Digital Marketing Illustration",className:"hero-img"})})]})}function p(){let[e,t]=(0,a.useState)({name:"",email:"",phone:"",company:"",msg:""}),i=i=>{t({...e,[i.target.name]:i.target.value})};return(0,s.jsx)("section",{className:"approach",id:"approach",children:(0,s.jsxs)("div",{className:"ap2-inner",children:[(0,s.jsxs)("div",{className:"ap-left",children:[(0,s.jsx)("div",{className:"partners-header1",children:(0,s.jsx)("div",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Approach in"})}),(0,s.jsxs)("h2",{className:"ap2-heading",children:["Result-Driven  ",(0,s.jsx)("span",{children:"Digital Marketing"})," Services"]}),(0,s.jsx)("p",{className:"ap-intro",children:"At our full-service digital marketing company, every digital marketing service we offer is aligned with measurable business outcomes. Whether it\u2019s lead generation, conversions, or brand awareness, our digital marketing strategies are designed to deliver impact."}),(0,s.jsx)("p",{className:"ap-intro",children:"We don\u2019t believe in guesswork. Our best digital marketing services are backed by data, tracking, and continuous optimization. As a best digital marketing company, we measure what matters and refine what doesn\u2019t work."}),(0,s.jsx)("p",{className:"ap-intro",children:"In the fast-changing world of digital marketing, we stay ahead by constantly testing, learning, and improving. That\u2019s what makes us the best digital marketing agency businesses trust.          "})]}),(0,s.jsx)("div",{className:"ap2-form-wrap",children:(0,s.jsxs)("div",{className:"ap2-form-card",children:[(0,s.jsxs)("div",{className:"ap2-form-eyebrow",children:[(0,s.jsx)("span",{className:"ap2-form-eyebrow-line"}),"Your Growth, Our Mission",(0,s.jsx)("span",{className:"ap2-form-eyebrow-line"})]}),(0,s.jsxs)("div",{className:"ap2-form-title",children:["Get Your ",(0,s.jsx)("span",{children:"Free"})," SEO Audit"]}),(0,s.jsxs)("form",{onSubmit:i=>{i.preventDefault();let s={name:e.name,email:e.email,phone:e.phone,company:e.company,message:e.msg,url:window.location.href};r.Ay.send("service_8xw6k3r","template_jarui36",s,"XWRnXi4hK2SvmRG3q").then(()=>{alert("Message Sent Successfully \u2705"),t({name:"",email:"",phone:"",company:"",msg:""})}).catch(e=>{console.log(e),alert("Failed to send \u274C")})},children:[(0,s.jsxs)("div",{className:"ap2-fl-row",children:[(0,s.jsxs)("div",{className:"ap2-fl-group",children:[(0,s.jsx)("label",{className:"ap2-fl-label",children:"Your Name"}),(0,s.jsxs)("div",{style:{position:"relative"},children:[(0,s.jsx)("span",{className:"ap2-fl-icon",children:"\u{1F464}"}),(0,s.jsx)("input",{className:"ap2-fl-input",type:"text",name:"name",placeholder:"Full name",value:e.name,onChange:i,required:!0})]})]}),(0,s.jsxs)("div",{className:"ap2-fl-group",children:[(0,s.jsx)("label",{className:"ap2-fl-label",children:"Company"}),(0,s.jsxs)("div",{style:{position:"relative"},children:[(0,s.jsx)("span",{className:"ap2-fl-icon",children:"\u{1F3E2}"}),(0,s.jsx)("input",{className:"ap2-fl-input",type:"text",name:"company",placeholder:"Company name",value:e.company,onChange:i})]})]})]}),(0,s.jsxs)("div",{className:"ap2-fl-group",children:[(0,s.jsx)("label",{className:"ap2-fl-label",children:"Email Address"}),(0,s.jsxs)("div",{style:{position:"relative"},children:[(0,s.jsx)("span",{className:"ap2-fl-icon",children:"\u2709\uFE0F"}),(0,s.jsx)("input",{className:"ap2-fl-input",type:"email",name:"email",placeholder:"your@email.com",value:e.email,onChange:i,required:!0})]})]}),(0,s.jsxs)("div",{className:"ap2-fl-group",children:[(0,s.jsx)("label",{className:"ap2-fl-label",children:"Mobile Number"}),(0,s.jsxs)("div",{className:"ap2-phone-row",children:[(0,s.jsx)("div",{className:"ap2-phone-flag",children:(0,s.jsx)("span",{children:"\u{1F4DE}"})}),(0,s.jsx)("input",{className:"ap2-fl-input",type:"tel",name:"phone",placeholder:"Mobile number",value:e.phone,onChange:i,maxLength:"10",pattern:"[0-9]{10}",required:!0})]})]}),(0,s.jsxs)("div",{className:"ap2-fl-group",children:[(0,s.jsx)("label",{className:"ap2-fl-label",children:"Message"}),(0,s.jsxs)("div",{style:{position:"relative"},children:[(0,s.jsx)("span",{className:"ap2-fl-icon",style:{top:"0.9rem",transform:"none"},children:"\u{1F4AC}"}),(0,s.jsx)("textarea",{className:"ap2-fl-textarea",name:"msg",placeholder:"Tell us about your SEO goals...",value:e.msg,onChange:i})]})]}),(0,s.jsxs)("button",{type:"submit",className:"ap2-submit",children:["Get Free SEO Audit ",(0,s.jsx)("span",{className:"ap2-submit-arrow",children:"\u203A"})]})]})]})})]})})}let g=[{icon:(0,s.jsx)("img",{src:"/img/icon/dm-seo.webp",alt:"Search Engine Optimization",width:"28",height:"28"}),title:"Search Engine Optimization",desc:"Our digital marketing experts help your business rank higher, increase visibility, and drive organic traffic consistently.",link:"/search-engine-optimization"},{icon:(0,s.jsx)("img",{src:"/img/icon/paid-marketing.webp",alt:"Paid Marketing",width:"28",height:"28"}),title:"Performance Marketing",desc:"We create high-performing ad campaigns as part of our digital marketing services, targeting the right audience at the right time.",link:"/performance-marketing"},{icon:(0,s.jsx)("img",{src:"/img/icon/dm-content-marketing.webp",alt:"Content Marketing",width:"28",height:"28"}),title:"Content Marketing",desc:"Content is at the core of digital marketing. We craft content that engages, informs, and converts.",link:"/content-marketing"},{icon:(0,s.jsx)("img",{src:"/img/icon/social-media-marketing.webp",alt:"Social Media Marketing",width:"28",height:"28"}),title:"Social Media Marketing",desc:"Our digital marketing service turns engagement into loyalty through strategic storytelling and audience connection.",link:"/social-media-marketing"},{icon:(0,s.jsx)("img",{src:"/img/icon/dm-website-development.webp",alt:"Website Development",width:"28",height:"28"}),title:"Website Development",desc:"As the best digital marketing company, we build responsive, high-performing websites that support your digital marketing goals.",link:"/website-development"},{icon:(0,s.jsx)("img",{src:"/img/icon/email-whatsapp-marketing.webp",alt:"Email and WhatsApp Marketing",width:"28",height:"28"}),title:"Email & WhatsApp Marketing",desc:"We strengthen your digital marketing efforts with direct communication strategies that boost conversions and retention.",link:"/performance-marketing"}];function u(){return(0,s.jsxs)("section",{className:"svc-section",style:{position:"relative",background:"#004168",padding:"8rem 6% 7rem",overflow:"hidden"},children:[(0,s.jsx)("div",{className:"svc-bg-r"}),(0,s.jsx)("div",{className:"svc-grid"}),(0,s.jsx)("div",{className:"svc-orb svc-orb-1"}),(0,s.jsx)("div",{className:"svc-orb svc-orb-2"}),(0,s.jsxs)("div",{className:"svc-header",children:[(0,s.jsx)("div",{className:"partners-header1",style:{textAlign:"center"},children:(0,s.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Specialized Digital Marketing Services"})}),(0,s.jsxs)("h2",{className:"svc-h2",children:["Smart Marketing. ",(0,s.jsx)("span",{children:"Sharp Execution."})," Stronger Results."]}),(0,s.jsx)("p",{className:"svc-sub",children:"As a full-service digital marketing company, we cover every stage of your customer journey through powerful digital marketing services:"})]}),(0,s.jsx)("div",{className:"svc-cards",children:g.map((e,t)=>(0,s.jsxs)("div",{className:"svc-card",style:{animationDelay:`${.05+.07*t}s`},children:[(0,s.jsx)("div",{className:"svc-icon-wrap",children:(0,s.jsx)("div",{className:"svc-icon-ring",children:e.icon})}),(0,s.jsx)("h3",{className:"svc-card-title",children:e.title}),(0,s.jsx)("div",{className:"svc-card-desc",children:e.desc}),(0,s.jsxs)("a",{className:"svc-learn",href:e.link,children:["LEARN MORE ",(0,s.jsx)("span",{className:"svc-learn-arr",children:"\u2197"})]}),"  ",(0,s.jsx)("div",{className:"svc-card-line"})]},t))})]})}let y=[{num:"01",emoji:(0,s.jsx)("img",{src:"/img/icon/proc-discover.webp",alt:"Discover and Understand",width:"32",height:"32"}),title:"Discover & Understand",desc:"Every brand is different, so we don\u2019t start with assumptions\u2014we start with you. Through in-depth discovery calls, competitor research, and audience analysis, we dig into your business goals, current challenges, and the ecosystem you operate in. This helps us understand the \u201Cwhy\u201D behind the work and sets a strong foundation for everything that follows."},{num:"02",emoji:(0,s.jsx)("img",{src:"/img/icon/proc-audit-strategize.webp",alt:"Audit and Strategize",width:"32",height:"32"}),title:"Audit & Strategize",desc:"Next, we run a full diagnostic of your digital presence\u2014website, content, SEO, paid ads, social media, and more. We identify gaps, missed opportunities, and underperforming channels. Based on this, we create a custom strategy aligned with your objectives\u2014whether it\u2019s brand awareness, lead generation, or revenue growth."},{num:"03",emoji:(0,s.jsx)("img",{src:"/img/icon/proc-execute.webp",alt:"Execute with Precision",width:"32",height:"32"}),title:"Execute with Precision",desc:"Our team then gets to work\u2014designing creatives, writing copy, setting up campaigns, building funnels, and optimizing user journeys. Each piece of work is handled with care, clarity, and a focus on performance. We believe in clean execution with zero guesswork and complete visibility for you at every milestone."},{num:"04",emoji:(0,s.jsx)("img",{src:"/img/icon/proc-track-optimize.webp",alt:"Track Report and Optimize",width:"32",height:"32"}),title:"Track, Report & Optimize",desc:"We don\u2019t just measure for the sake of it\u2014we measure what matters. Every campaign is monitored in real time, KPIs are reviewed weekly, and reports are built to be easy to understand. What\u2019s performing stays, what\u2019s not gets fixed. This ongoing optimization is what helps us keep improving, without wasting time or budget."},{num:"05",emoji:(0,s.jsx)("img",{src:"/img/icon/proc-scale-expand.webp",alt:"Scale and Expand",width:"32",height:"32"}),title:"We Scale & Expand",desc:"Once we have a winning formula, we replicate and scale it across platforms or geographies. Whether it\u2019s scaling ad budgets, expanding into new markets, or growing your content engine, we help you amplify what\u2019s working without losing control of quality or ROI."}];function x(){let[e,t]=(0,a.useState)(!1),[i,r]=(0,a.useState)(0),n=(0,a.useRef)(null);(0,a.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&t(!0)},{threshold:.1});return n.current&&e.observe(n.current),()=>e.disconnect()},[]),(0,a.useEffect)(()=>{let e=setInterval(()=>r(e=>(e+1)%5),2200);return()=>clearInterval(e)},[]);let l=[270,342,54,126,198];return(0,s.jsxs)("section",{ref:n,className:"prc3-section",style:{position:"relative",background:"#ffffff",padding:"6rem 4% 7rem",overflow:"hidden"},children:[(0,s.jsx)("div",{className:"prc3-dotgrid"}),(0,s.jsxs)("div",{className:"prc3-header",children:[(0,s.jsx)("div",{className:"partners-header1",style:{textAlign:"center"},children:(0,s.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"Our Digital Marketing Process"})}),(0,s.jsxs)("h3",{className:"prc3-h2",children:["Simple. Strategic. ",(0,s.jsx)("em",{children:"Built Around Your Goals."})]}),(0,s.jsx)("p",{className:"prc3-sub",children:"We follow a clear, collaborative process that ensures every step is aligned with your business outcomes and not just marketing metrics."})]}),(0,s.jsxs)("div",{className:"prc3-radial-wrap",children:[(0,s.jsxs)("div",{className:"prc3-orbit-area",children:[(0,s.jsx)("div",{className:"prc3-ring-outer"}),(0,s.jsx)("div",{className:"prc3-ring-mid"}),(0,s.jsxs)("svg",{className:"prc3-spokes",viewBox:"0 0 500 500",fill:"none",children:[y.map((e,t)=>{let a=l[t]*Math.PI/180,r=250+210*Math.cos(a),n=250+210*Math.sin(a),o=i===t;return(0,s.jsx)("line",{x1:"250",y1:"250",x2:r,y2:n,stroke:o?"rgba(237,131,55,0.55)":"rgba(2,43,68,0.07)",strokeWidth:o?"2":"1",strokeDasharray:o?"none":"4 4",style:{transition:"stroke .4s,stroke-width .4s"}},t)}),y.map((e,t)=>{let i=l[t]*Math.PI/180;return(0,s.jsx)("line",{x1:250+230*Math.cos(i),y1:250+230*Math.sin(i),x2:250+240*Math.cos(i),y2:250+240*Math.sin(i),stroke:"rgba(237,131,55,0.35)",strokeWidth:"2",strokeLinecap:"round"},`t${t}`)})]}),(0,s.jsx)("div",{className:"prc3-hub",children:(0,s.jsx)("img",{src:"/img/priyam-consultancy-logo.png",alt:"PCS Business Solution",className:"prc3-hub-logo"})}),y.map((e,t)=>{let a=l[t]*Math.PI/180,n=250+210*Math.cos(a),o=250+210*Math.sin(a),c=e=>`${e/500*100}%`;return(0,s.jsx)("div",{className:`prc3-orb-node${i===t?" active":""}`,style:{left:c(n),top:c(o)},onClick:()=>r(t),children:(0,s.jsxs)("div",{className:"prc3-orb-ring",children:[(0,s.jsx)("span",{className:"prc3-orb-emoji",children:e.emoji}),(0,s.jsx)("span",{className:"prc3-step-num",children:e.num})]})},t)})]}),(0,s.jsx)("div",{className:"prc3-cards-col",children:y.map((t,a)=>(0,s.jsxs)("div",{className:`prc3-mag-card${e?" vis":""}${i===a?" active-card":""}`,style:{transitionDelay:e?`${.1*a}s`:"0s"},onClick:()=>r(a),children:[(0,s.jsx)("div",{className:"prc3-accent-bar"}),(0,s.jsxs)("div",{className:"prc3-card-body",children:[(0,s.jsxs)("div",{className:"prc3-card-top",children:[(0,s.jsx)("div",{className:"prc3-card-num",children:t.num}),(0,s.jsx)("div",{className:"prc3-card-title-wrap",children:(0,s.jsx)("h4",{className:"prc3-card-title",children:t.title})}),(0,s.jsx)("span",{className:"prc3-card-icon",children:t.emoji})]}),(0,s.jsx)("div",{className:"prc3-card-desc",children:t.desc})]})]},a))})]})]})}let f=[{num:"01",color:"#34d399",label:"We Collaborate, Not Dictate",title:"We Collaborate, Not Dictate",desc:"We work closely with your team to build practical, scalable digital marketing strategies aligned with your goals, ensuring clarity, flexibility, and effective execution."},{num:"02",color:"#a78bfa",label:"We Build with Context",title:"We Build with Context",desc:"Our digital marketing services are tailored to your industry, audience, and growth stage, ensuring strategies are relevant, personalized, and designed to deliver meaningful results."},{num:"03",color:"#ed8337",label:"We Own Outcomes",title:"We Own Outcomes",desc:"We take full responsibility for your digital marketing performance, ensuring transparency, accountability, and consistent results from execution to optimization and measurable business growth."}];function w(){let[e,t]=(0,a.useState)([!1,!1,!1]),i=[(0,a.useRef)(null),(0,a.useRef)(null),(0,a.useRef)(null)];return(0,a.useEffect)(()=>{i.forEach((e,i)=>{let s=new IntersectionObserver(([e])=>{e.isIntersecting&&t(e=>{let t=[...e];return t[i]=!0,t})},{threshold:.15});return e.current&&s.observe(e.current),()=>s.disconnect()})},[]),(0,s.jsxs)("section",{className:"wcu-section",style:{position:"relative",background:"#004168",padding:"4rem 6%",overflow:"hidden"},children:[(0,s.jsx)("div",{className:"wcu-grid-bg"}),(0,s.jsx)("div",{className:"wcu-orb-el wcu-orb-1"}),(0,s.jsx)("div",{className:"wcu-orb-el wcu-orb-2"}),(0,s.jsxs)("div",{className:"prc3-header",children:[(0,s.jsx)("div",{className:"partners-header1",style:{textAlign:"center"},children:(0,s.jsx)("h2",{className:"partners-eyebrow",style:{marginBottom:"20px",textAlign:"start"},children:"How We Work"})}),(0,s.jsxs)("h2",{className:"prc3-h2",style:{color:"#fff"},children:["Plan With Purpose. ",(0,s.jsx)("em",{children:"Execute With Precision."})]})]}),(0,s.jsxs)("div",{className:"wcu-inner",children:[(0,s.jsxs)("div",{className:"wcu-left",children:[(0,s.jsxs)("div",{className:"wcu-stat wcu-sc-1",children:[(0,s.jsx)("div",{className:"sc-label",children:"Organic Reach"}),(0,s.jsxs)("div",{className:"sc-val",children:["+218% ",(0,s.jsx)("span",{className:"sc-up",children:"\u2191"})]})]}),(0,s.jsxs)("div",{className:"wcu-stat wcu-sc-2",children:[(0,s.jsx)("div",{className:"sc-label",children:"Campaign ROI"}),(0,s.jsxs)("div",{className:"sc-val",children:["4.8x ",(0,s.jsx)("span",{className:"sc-up",children:"\u2191"})]})]}),(0,s.jsxs)("div",{className:"wcu-stat wcu-sc-3",children:[(0,s.jsx)("div",{className:"sc-label",children:"Lead Quality"}),(0,s.jsxs)("div",{className:"sc-val",children:["94% ",(0,s.jsx)("span",{className:"sc-up",children:"\u2191"})]})]}),(0,s.jsxs)("div",{className:"wcu-stat wcu-sc-4",children:[(0,s.jsx)("div",{className:"sc-label",children:"Conversions"}),(0,s.jsxs)("div",{className:"sc-val",children:["+312% ",(0,s.jsx)("span",{className:"sc-up",children:"\u2191"})]})]}),(0,s.jsx)("div",{className:"wcu-illus",children:(0,s.jsxs)("svg",{viewBox:"0 0 380 380",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("circle",{cx:"190",cy:"190",r:"155",stroke:"rgba(237,131,55,0.08)",strokeWidth:"1",strokeDasharray:"6 4"}),(0,s.jsx)("circle",{cx:"190",cy:"190",r:"120",stroke:"rgba(237,131,55,0.12)",strokeWidth:"1",strokeDasharray:"4 6"}),(0,s.jsx)("rect",{x:"110",y:"140",width:"160",height:"105",rx:"10",fill:"rgba(10,54,82,0.9)",stroke:"rgba(237,131,55,0.4)",strokeWidth:"1.5"}),(0,s.jsx)("rect",{x:"118",y:"148",width:"144",height:"88",rx:"6",fill:"#0a2535"}),(0,s.jsx)("rect",{x:"176",y:"245",width:"28",height:"12",rx:"2",fill:"rgba(10,54,82,0.9)",stroke:"rgba(237,131,55,0.3)",strokeWidth:"1"}),(0,s.jsx)("rect",{x:"158",y:"255",width:"64",height:"6",rx:"3",fill:"rgba(10,54,82,0.9)",stroke:"rgba(237,131,55,0.25)",strokeWidth:"1"}),(0,s.jsxs)("rect",{x:"126",y:"210",width:"12",height:"22",rx:"2",fill:"rgba(237,131,55,0.7)",children:[(0,s.jsx)("animate",{attributeName:"height",values:"10;22;14;22",dur:"2.5s",repeatCount:"indefinite"}),(0,s.jsx)("animate",{attributeName:"y",values:"222;210;216;210",dur:"2.5s",repeatCount:"indefinite"})]}),(0,s.jsxs)("rect",{x:"143",y:"200",width:"12",height:"32",rx:"2",fill:"#38bdf8",children:[(0,s.jsx)("animate",{attributeName:"height",values:"18;32;24;32",dur:"2.8s",repeatCount:"indefinite"}),(0,s.jsx)("animate",{attributeName:"y",values:"214;200;208;200",dur:"2.8s",repeatCount:"indefinite"})]}),(0,s.jsxs)("rect",{x:"160",y:"206",width:"12",height:"26",rx:"2",fill:"rgba(237,131,55,0.5)",children:[(0,s.jsx)("animate",{attributeName:"height",values:"14;26;20;26",dur:"2.2s",repeatCount:"indefinite"}),(0,s.jsx)("animate",{attributeName:"y",values:"218;206;212;206",dur:"2.2s",repeatCount:"indefinite"})]}),(0,s.jsxs)("rect",{x:"177",y:"195",width:"12",height:"37",rx:"2",fill:"#34d399",children:[(0,s.jsx)("animate",{attributeName:"height",values:"22;37;28;37",dur:"3s",repeatCount:"indefinite"}),(0,s.jsx)("animate",{attributeName:"y",values:"210;195;204;195",dur:"3s",repeatCount:"indefinite"})]}),(0,s.jsxs)("rect",{x:"194",y:"203",width:"12",height:"29",rx:"2",fill:"rgba(237,131,55,0.8)",children:[(0,s.jsx)("animate",{attributeName:"height",values:"16;29;20;29",dur:"2.6s",repeatCount:"indefinite"}),(0,s.jsx)("animate",{attributeName:"y",values:"216;203;212;203",dur:"2.6s",repeatCount:"indefinite"})]}),(0,s.jsxs)("rect",{x:"211",y:"198",width:"12",height:"34",rx:"2",fill:"#38bdf8",children:[(0,s.jsx)("animate",{attributeName:"height",values:"20;34;26;34",dur:"2.4s",repeatCount:"indefinite"}),(0,s.jsx)("animate",{attributeName:"y",values:"212;198;206;198",dur:"2.4s",repeatCount:"indefinite"})]}),(0,s.jsxs)("rect",{x:"228",y:"193",width:"12",height:"39",rx:"2",fill:"#34d399",children:[(0,s.jsx)("animate",{attributeName:"height",values:"24;39;30;39",dur:"2.7s",repeatCount:"indefinite"}),(0,s.jsx)("animate",{attributeName:"y",values:"208;193;201;193",dur:"2.7s",repeatCount:"indefinite"})]}),(0,s.jsx)("polyline",{points:"126,208 143,198 160,204 177,190 194,196 211,184 228,178 250,170",stroke:"#ed8337",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:(0,s.jsx)("animate",{attributeName:"stroke-dasharray",values:"0,300;300,0",dur:"2s",fill:"freeze"})}),(0,s.jsx)("circle",{cx:"250",cy:"170",r:"3",fill:"#ed8337",children:(0,s.jsx)("animate",{attributeName:"r",values:"2;4;2",dur:"1.5s",repeatCount:"indefinite"})}),(0,s.jsx)("rect",{x:"126",y:"153",width:"60",height:"6",rx:"3",fill:"rgba(237,131,55,0.3)"}),(0,s.jsx)("rect",{x:"192",y:"153",width:"30",height:"6",rx:"3",fill:"rgba(255,255,255,0.1)"}),(0,s.jsx)("rect",{x:"228",y:"153",width:"26",height:"6",rx:"3",fill:"rgba(255,255,255,0.08)"}),(0,s.jsxs)("g",{transform:"translate(68,110)",children:[(0,s.jsx)("circle",{cx:"22",cy:"22",r:"22",fill:"rgba(13,74,112,0.85)",stroke:"rgba(237,131,55,0.35)",strokeWidth:"1.5"}),(0,s.jsx)("text",{x:"22",y:"28",textAnchor:"middle",fontSize:"18",children:"\u{1F50D}"}),(0,s.jsx)("animate",{attributeName:"transform",attributeType:"XML",values:"translate(68,110);translate(68,100);translate(68,110)",dur:"2.5s",repeatCount:"indefinite",keyTimes:"0;0.5;1"})]}),(0,s.jsxs)("g",{transform:"translate(268,108)",children:[(0,s.jsx)("circle",{cx:"22",cy:"22",r:"22",fill:"rgba(13,74,112,0.85)",stroke:"rgba(237,131,55,0.35)",strokeWidth:"1.5"}),(0,s.jsx)("text",{x:"22",y:"28",textAnchor:"middle",fontSize:"18",children:"\u{1F4E3}"}),(0,s.jsx)("animate",{attributeName:"transform",attributeType:"XML",values:"translate(268,108);translate(268,98);translate(268,108)",dur:"3s",repeatCount:"indefinite",keyTimes:"0;0.5;1"})]}),(0,s.jsxs)("g",{transform:"translate(62,232)",children:[(0,s.jsx)("circle",{cx:"22",cy:"22",r:"22",fill:"rgba(13,74,112,0.85)",stroke:"rgba(56,189,248,0.35)",strokeWidth:"1.5"}),(0,s.jsx)("text",{x:"22",y:"28",textAnchor:"middle",fontSize:"18",children:"\u{1F4E7}"}),(0,s.jsx)("animate",{attributeName:"transform",attributeType:"XML",values:"translate(62,232);translate(62,222);translate(62,232)",dur:"2.8s",repeatCount:"indefinite",keyTimes:"0;0.5;1"})]}),(0,s.jsxs)("g",{transform:"translate(270,238)",children:[(0,s.jsx)("circle",{cx:"22",cy:"22",r:"22",fill:"rgba(13,74,112,0.85)",stroke:"rgba(52,211,153,0.35)",strokeWidth:"1.5"}),(0,s.jsx)("text",{x:"22",y:"28",textAnchor:"middle",fontSize:"18",children:"\u{1F4CA}"}),(0,s.jsx)("animate",{attributeName:"transform",attributeType:"XML",values:"translate(270,238);translate(270,228);translate(270,238)",dur:"3.2s",repeatCount:"indefinite",keyTimes:"0;0.5;1"})]}),(0,s.jsx)("line",{x1:"112",y1:"132",x2:"130",y2:"148",stroke:"rgba(237,131,55,0.2)",strokeWidth:"1",strokeDasharray:"4 3",children:(0,s.jsx)("animate",{attributeName:"stroke-dashoffset",from:"0",to:"-14",dur:"1.5s",repeatCount:"indefinite"})}),(0,s.jsx)("line",{x1:"268",y1:"132",x2:"254",y2:"148",stroke:"rgba(237,131,55,0.2)",strokeWidth:"1",strokeDasharray:"4 3",children:(0,s.jsx)("animate",{attributeName:"stroke-dashoffset",from:"0",to:"-14",dur:"1.8s",repeatCount:"indefinite"})}),(0,s.jsx)("line",{x1:"106",y1:"252",x2:"120",y2:"248",stroke:"rgba(56,189,248,0.2)",strokeWidth:"1",strokeDasharray:"4 3",children:(0,s.jsx)("animate",{attributeName:"stroke-dashoffset",from:"0",to:"-14",dur:"1.6s",repeatCount:"indefinite"})}),(0,s.jsx)("line",{x1:"270",y1:"252",x2:"262",y2:"248",stroke:"rgba(52,211,153,0.2)",strokeWidth:"1",strokeDasharray:"4 3",children:(0,s.jsx)("animate",{attributeName:"stroke-dashoffset",from:"0",to:"-14",dur:"2s",repeatCount:"indefinite"})}),(0,s.jsxs)("g",{transform:"translate(168,60)",children:[(0,s.jsx)("circle",{cx:"22",cy:"22",r:"20",fill:"rgba(237,131,55,0.12)",stroke:"rgba(237,131,55,0.45)",strokeWidth:"1.5"}),(0,s.jsx)("text",{x:"22",y:"28",textAnchor:"middle",fontSize:"16",children:"\u{1F3AF}"})]}),(0,s.jsx)("line",{x1:"190",y1:"102",x2:"190",y2:"140",stroke:"rgba(237,131,55,0.2)",strokeWidth:"1",strokeDasharray:"4 3",children:(0,s.jsx)("animate",{attributeName:"stroke-dashoffset",from:"0",to:"-14",dur:"1.2s",repeatCount:"indefinite"})})]})})]}),(0,s.jsx)("div",{className:"wcu-right",children:f.map((t,a)=>(0,s.jsxs)("div",{ref:i[a],className:`wcu-point${e[a]?" vis":""}`,style:{opacity:0,transform:"translateX(30px)",transitionDelay:`${.1+.15*a}s`},children:[(0,s.jsxs)("div",{className:"wcu-num-col",children:[(0,s.jsx)("div",{className:"wcu-num",style:{color:t.color},children:t.num}),a<2&&(0,s.jsx)("div",{className:"wcu-vert-line"})]}),(0,s.jsxs)("div",{className:"wcu-content",style:2===a?{paddingBottom:0}:{},children:[(0,s.jsxs)("div",{className:"wcu-label",style:{color:t.color,borderColor:`${t.color}55`,background:`${t.color}14`},children:[t.label,(0,s.jsxs)("span",{className:"wcu-arrow-span",style:{"--arrow-color":t.color,"--arrowb-color":t.color},children:[(0,s.jsx)("span",{style:{position:"absolute",top:0,left:0,right:0,height:"2px",borderRadius:"2px",background:t.color}}),(0,s.jsx)("span",{style:{position:"absolute",right:"-1px",top:"-4px",width:0,height:0,borderTop:"5px solid transparent",borderBottom:"5px solid transparent",borderLeft:`8px solid ${t.color}`}})]})]}),(0,s.jsx)("h3",{className:"wcu-title",children:t.title}),(0,s.jsx)("div",{className:"wcu-desc",children:t.desc})]})]},a))})]})]})}let v=[{q:"What makes PCS different from all the other digital marketing agencies out there?",a:"At PCS, we focus on strategy, creativity, and measurable business growth. Every solution is customised to your brand goals, helping you build stronger visibility, better engagement, and long-term digital success."},{q:"Do you offer custom packages or fixed pricing?",a:"Yes, we offer both fixed plans and customised packages based on your business requirements, industry, goals, and marketing scope to ensure you receive the right solution within your budget."},{q:"Do you only work with established businesses/brands, or with startups as well?",a:"We work with startups, small businesses, growing brands, and established companies. Our team creates scalable digital marketing strategies suitable for businesses at every stage of growth and expansion."},{q:"Can you manage the entire digital marketing process?",a:"Yes, PCS provides complete end-to-end digital marketing support including branding, website development, SEO, content marketing, social media management, paid advertising, lead generation, and performance tracking."},{q:"Do you provide monthly reporting?",a:"Yes, we provide detailed monthly performance reports that include campaign insights, SEO progress, website traffic, engagement metrics, lead performance, and other important data to help you track growth clearly."},{q:"Can PCS help with both organic and paid marketing?",a:"Absolutely. We specialise in both organic and paid marketing strategies including SEO, content marketing, social media growth, Google Ads, Meta Ads, and performance campaigns to support sustainable business growth."}];function b(){let[e,t]=(0,a.useState)(null),i=i=>{t(e===i?null:i)};return(0,s.jsxs)("section",{className:"faq-section",children:[(0,s.jsx)("div",{className:"partners-header2",style:{textAlign:"center",marginTop:"20px"},children:(0,s.jsx)("h4",{className:"partners-eyebrow",children:"Frequently Asked Questions"})}),(0,s.jsxs)("div",{className:"container",style:{width:"100%"},children:[(0,s.jsx)("div",{className:"faq-head",children:(0,s.jsxs)("h3",{className:"faq-h3",children:["Queries That Could ",(0,s.jsx)("span",{children:"Hold You Back"})]})}),(0,s.jsxs)("div",{className:"faq-wrapper",children:[(0,s.jsx)("div",{className:"faq-col",children:v.slice(0,3).map((t,a)=>(0,s.jsxs)("div",{className:"faq-item",children:[(0,s.jsxs)("div",{className:"faq-question",onClick:()=>i(a),children:[(0,s.jsx)("span",{children:t.q}),(0,s.jsx)("span",{className:"icon",children:e===a?"\u2212":"+"})]}),e===a&&(0,s.jsx)("div",{className:"faq-answer",children:t.a})]},a))}),(0,s.jsx)("div",{className:"faq-col",children:v.slice(3,6).map((t,a)=>(0,s.jsxs)("div",{className:"faq-item",children:[(0,s.jsxs)("div",{className:"faq-question",onClick:()=>i(a+3),children:[(0,s.jsx)("span",{children:t.q}),(0,s.jsx)("span",{className:"icon",children:e===a+3?"\u2212":"+"})]}),e===a+3&&(0,s.jsx)("div",{className:"faq-answer",children:t.a})]},a+3))})]})]})]})}function j(){return(0,s.jsx)(o.A,{title:"Digital Marketing Services in India | PCS Business Solution",description:"Result-driven digital marketing services including SEO, social media marketing, PPC, content marketing, and email marketing to grow your business online.",children:(0,s.jsxs)("div",{className:"pg-digital-marketing",children:[(0,s.jsx)(d,{}),(0,s.jsx)(m,{}),(0,s.jsx)(h,{}),(0,s.jsx)(p,{}),(0,s.jsx)(u,{}),(0,s.jsx)(x,{}),(0,s.jsx)(w,{}),(0,s.jsx)(b,{}),(0,s.jsx)(n.A,{}),(0,s.jsx)(l.A,{})]})})}}}]);