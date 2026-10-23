"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["6178"],{4708(e,i,a){a.r(i),a.d(i,{default:()=>d});var n=a(4848),s=a(8230);let l=[{name:"Sterlo Build",img:"/img/landing-page/client-slide-3.webp"},{name:"Star Health",img:"/img/landing-page/client-slide-2.webp"},{name:"Riya Consultancy",img:"/img/landing-page/client-slide-4.webp"},{name:"Sterlo",img:"/img/landing-page/client-slide-6.webp"},{name:"Feral Roots",img:"/img/landing-page/client-slide-8.webp"},{name:"Vriksha",img:"/img/landing-page/client-slide-9.webp"},{name:"Tech Global",img:"/img/landing-page/client-slide-10.webp"},{name:"AM Builders",img:"/img/landing-page/client-slide-11.webp"},{name:"Sterlo Care",img:"/img/landing-page/client-slide-7.webp"},{name:"Analytix Hub",img:"/img/landing-page/client-slide-12.webp"},{name:"AB Interiors",img:"/img/landing-page/client-slide-13.webp"},{name:"Tactive",img:"/img/landing-page/client-slide-14.webp"},{name:"Talent Tribe",img:"/img/landing-page/client-slide-1.webp"},{name:"ZKY",img:"/img/landing-page/client-slide-5.webp"},{name:"Ey Chiquita",img:"/img/landing-page/client-slide-15.webp"},{name:"CureTek",img:"/img/landing-page/client-slide-16.webp"},{name:"AINQA",img:"/img/landing-page/client-slide-17.webp"},{name:"Vatcomm",img:"/img/landing-page/client-slide-18.webp"},{name:"Naturals",img:"/img/landing-page/client-slide-19.webp"},{name:"URCTS",img:"/img/landing-page/client-slide-20.webp"},{name:"Greenstar",img:"/img/landing-page/greenstar-logo.webp"},{name:"Orvix",img:"/img/landing-page/orvix-logo.webp"}],r=()=>(0,n.jsx)("style",{children:`
.cl-section {
  background: #fff;
  padding: 70px 5% 90px;
  scroll-margin-top: 90px;
  font-family: 'Poppins', sans-serif;
}
.cl-inner { max-width: 1000px; margin: 0 auto; }

/* Heading */
.cl-heading {
  text-align: center;
  font-size: clamp(1.5rem, 2.6vw, 2rem);
  font-weight: 800;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #004168;
  margin: 0 0 3.2rem;
}
.cl-heading span { position: relative; display: inline-block; color: #ed8337; }
.cl-heading span::after {
  content: "";
  position: absolute; left: 0; right: 0; bottom: -7px;
  height: 3px; border-radius: 3px; background: #ed8337;
}

/* Grid */
.cl-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* last row stays centered */
  gap: 24px;
}

/* Card */
.cl-card {
  position: relative;
  width: calc((100% - 72px) / 4); /* 4 per row */
  height: 96px;
  padding: 14px 18px;
  display: flex; align-items: center; justify-content: center;
  background: #fff;
  border: 1px solid rgba(237, 131, 55, 0.08);
  border-radius: 14px;
  box-shadow: 0 4px 20px rgba(237, 131, 55, 0.22);
  cursor: pointer;
  outline: none;
  opacity: 0;
  animation: clIn 0.5s ease forwards;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-color 0.3s ease;
}
.cl-card img {
  max-width: 100%; max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}
.cl-card:hover, .cl-card:focus-visible {
  z-index: 5;
  transform: translateY(-6px) scale(1.04);
  border-color: rgba(237, 131, 55, 0.35);
  box-shadow: 0 14px 34px rgba(237, 131, 55, 0.38);
}
.cl-card:hover img, .cl-card:focus-visible img { transform: scale(1.08); }

@keyframes clIn {
  from { opacity: 0; transform: translateY(18px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

@media (max-width: 900px) {
  .cl-grid { gap: 20px; }
  .cl-card { width: calc((100% - 40px) / 3); }
}
@media (max-width: 600px) {
  .cl-section { padding: 50px 5% 70px; }
  .cl-grid { gap: 16px; }
  .cl-card { width: calc((100% - 16px) / 2); height: 82px; padding: 10px 12px; }
  .cl-heading { margin-bottom: 2.4rem; }
}
@media (prefers-reduced-motion: reduce) {
  .cl-card { animation: none; opacity: 1; }
  .cl-card, .cl-card img { transition: none; }
}
`});function c(){return(0,n.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,n.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),(0,n.jsx)("polyline",{points:"12 5 19 12 12 19"})]})}function t({client:e,index:i}){return(0,n.jsx)("div",{className:"cl-card",tabIndex:0,style:{animationDelay:`${60*i}ms`},children:(0,n.jsx)("img",{src:e.img,alt:e.name,loading:"lazy",decoding:"async"})})}function d(){return(0,n.jsxs)(s.A,{children:[(0,n.jsx)(r,{}),(0,n.jsx)("section",{className:"sc-banner",children:(0,n.jsxs)("div",{className:"sc-banner-inner",children:[(0,n.jsxs)("div",{className:"sc-banner-left",children:[(0,n.jsxs)("div",{className:"sc-banner-eyebrow",children:[(0,n.jsx)("span",{className:"sc-banner-dot"}),"Our Work"]}),(0,n.jsxs)("h1",{className:"sc-banner-title",children:["Our ",(0,n.jsx)("span",{className:"sc-highlight",children:"Clients"})]}),(0,n.jsx)("p",{className:"sc-banner-subtitle",children:"From online stores to SaaS platforms, we build digital experiences that turn visitors into customers. Explore the projects we\u2019re proud of."}),(0,n.jsxs)("a",{href:"#clients",className:"sc-banner-cta",children:["Explore More ",(0,n.jsx)(c,{})]})]}),(0,n.jsx)("div",{className:"sc-banner-right",children:(0,n.jsx)("img",{src:"/img/client.webp",alt:"Portfolio showcase"})})]})}),(0,n.jsx)("section",{className:"cl-section",id:"clients",children:(0,n.jsxs)("div",{className:"cl-inner",children:[(0,n.jsxs)("h2",{className:"cl-heading",children:["Our ",(0,n.jsx)("span",{children:"Clients"})]}),(0,n.jsx)("div",{className:"cl-grid",children:l.map((e,i)=>(0,n.jsx)(t,{client:e,index:i},e.name+i))})]})})]})}}}]);