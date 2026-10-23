"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["6029"],{2240(e,i,t){t.r(i),t.d(i,{default:()=>m});var r=t(4848),a=t(6540),s=t(8230);let n=[{id:1,url:"https://feralroots.in/",domain:"feralroots.in",image:"/img/work-6.webp"},{id:2,url:"https://www.urcts.in/",domain:"urcts.in",image:"/img/work-14.webp"},{id:7,url:"https://staging.vrikshabuilders.com/",domain:"staging.vrikshabuilders.com",image:"/img/work-2.webp"},{id:8,url:"https://www.vatcommtechnologies.com/",domain:"vatcommtechnologies.com",image:"/img/work-4.webp"},{id:9,url:"https://www.greenstarexports.com/",domain:"greenstarexports.com",image:"/img/work-3.webp"},{id:10,url:"https://www.tgcc.com.my/",domain:"tgcc.com.my",image:"/img/work-1.webp"},{id:3,url:"https://zky.co.in/",domain:"zky.co.in",image:"/img/work-8.webp"},{id:4,url:"https://abbmc.in/",domain:"abbmc.in",image:"/img/work-5.webp"},{id:5,url:"https://riyaconsultancy.com",domain:"riyaconsultancy.com",image:"/img/work-10.webp"},{id:6,url:"https://talenttribe.in/",domain:"talenttribe.in",image:"/img/work-9.webp"},{id:11,url:"https://www.sterlo.io/",domain:"sterlo.io",image:"/img/work-11.webp"},{id:12,url:"https://www.sterlocare.com/",domain:"sterlocare.com",image:"/img/work-12.webp"}],o=()=>(0,r.jsx)("style",{children:`
/* Image window: fixed ratio, image inside scrolls on hover */
.pg-card .pg-img-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  height: auto;
  container-type: size;
}
.pg-card .pg-img {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: auto;
  max-width: none;
  object-fit: initial;
  transform: translateY(0) !important;     /* stop any old zoom/scale hover effect */
  transition: transform 0.8s ease;         /* scroll back to top */
  will-change: transform;
}
.pg-card:hover .pg-img {
  /* scroll to the bottom of the screenshot (fallback first, then responsive) */
  transform: translateY(min(0px, calc(-100% + 260px))) !important;
  transform: translateY(min(0px, calc(-100% + 100cqh))) !important;
  transition: transform var(--dur, 6s) linear;
}

/* White background, full width (covers the dark side areas) */
.pg-content {
  --pg-max-width: 1400px;                 /* change this to set section max width */
  background: #fff !important;
  box-shadow: 0 0 0 100vmax #fff;
  clip-path: inset(0 -100vmax);
  width: 100%;
  max-width: none !important;
  margin: 0 auto;
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
}
.pg-content .pg-grid {
  width: 100%;
  max-width: var(--pg-max-width);
  margin-left: auto;
  margin-right: auto;
}

/* Card is now one clickable link */
a.pg-card {
  display: block;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

@media (prefers-reduced-motion: reduce) {
  .pg-card .pg-img { transition: none; }
}
`});function c(){return(0,r.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,r.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),(0,r.jsx)("polyline",{points:"12 5 19 12 12 19"})]})}function l({project:e}){let i=(0,a.useRef)(null),t=()=>{let e=i.current;if(!e||!e.parentElement)return;let t=Math.min(Math.max(Math.max(0,e.offsetHeight-e.parentElement.clientHeight)/.1,1.5),6);e.style.setProperty("--dur",`${t.toFixed(1)}s`)};return(0,a.useEffect)(()=>(i.current&&i.current.complete&&t(),window.addEventListener("resize",t,{passive:!0}),()=>window.removeEventListener("resize",t)),[]),(0,r.jsxs)("a",{className:"pg-card",href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":`Open ${e.domain}`,children:[(0,r.jsx)("div",{className:"pg-img-wrap",children:(0,r.jsx)("img",{ref:i,className:"pg-img",src:e.image,alt:e.domain,loading:"lazy",onLoad:t})}),(0,r.jsxs)("div",{className:"pg-footer",children:[(0,r.jsx)("div",{className:"pg-dot"}),(0,r.jsx)("span",{className:"pg-domain",children:e.domain})]})]})}function m(){return(0,r.jsxs)(s.A,{children:[(0,r.jsx)(o,{}),(0,r.jsx)("section",{className:"sc-banner",children:(0,r.jsxs)("div",{className:"sc-banner-inner",children:[(0,r.jsxs)("div",{className:"sc-banner-left",children:[(0,r.jsxs)("div",{className:"sc-banner-eyebrow",children:[(0,r.jsx)("span",{className:"sc-banner-dot"}),"Our Work"]}),(0,r.jsxs)("h1",{className:"sc-banner-title",children:["Our ",(0,r.jsx)("span",{className:"sc-highlight",children:"Portfolio"})]}),(0,r.jsx)("p",{className:"sc-banner-subtitle",children:"We craft stunning digital experiences \u2014 from e-commerce stores to SaaS platforms. Hover to explore, click to visit each live project."}),(0,r.jsxs)("a",{href:"#projects",className:"sc-banner-cta",children:["Explore More ",(0,r.jsx)(c,{})]})]}),(0,r.jsx)("div",{className:"sc-banner-right",children:(0,r.jsx)("img",{src:"/img/portfolio.webp",alt:"Portfolio showcase"})})]})}),(0,r.jsx)("div",{className:"pg-content",id:"projects",children:(0,r.jsx)("div",{className:"pg-grid",children:n.map(e=>(0,r.jsx)(l,{project:e},e.id))})})]})}}}]);