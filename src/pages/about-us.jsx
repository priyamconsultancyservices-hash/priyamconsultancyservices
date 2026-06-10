import { useEffect, useRef, useState } from "react";
import Layout from '@theme/Layout';
const banner = "/img/approach.png";
const bannerImg = "/img/about-us.png";
const vision = "/img/vision.png";
const mission = "/img/mission.png";

const microsoft = "/img/microsoft-app-partner.jpeg";
const sterlo = "/img/sterlo-partner.webp";
const sterloBuild = "/img/sterlobuild-partner.webp";
const sterloCare = "/img/sterlocare-partner.webp";
const odoo = "/img/odoo-partner.webp";

const Analytix = "/img/Analytix-Hub.webp";
const Baltimore = "/img/baltimore.webp";
const Sterlo = "/img/sterlo.webp";
const OreOps = "/img/oreopps.webp";
const RiyaConsultancy = "/img/riyaconsultancy.webp";
const Tactive = "/img/tactive.webp";  
const URCTC = "/img/urctc.webp";
const ZKY = "/img/zky.webp";

import Head from '@docusaurus/Head';


function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/about-us/";

  return (
    <Head>
      <title>About | Digital Transformation HR Services & Marketing Agency </title>
      <meta name="description" content="PCS is the best digital marketing agency in India with results-driven strategies. We offer the best digital marketing services in India for your brand's growth!" />
      <meta name="keywords" content="Digital Marketing Services, Digital Marketing Agency, Top Digital Marketing Agency, Human Resource, HR Services, HR service provider, HR Recruitment, HR consulting services,Website development " />
      <link rel="canonical" href="https://www.priyamconsultancy.com/about-us/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="About | Digital Transformation HR Services & Marketing Agency " />
      <meta property="og:description" content="PCS is the best digital marketing agency in India with results-driven strategies. We offer the best digital marketing services in India for your brand's growth!" />
      <meta property="og:url" content="https://www.priyamconsultancy.com/about-us/" />
      <meta property="og:site_name" content=" Microsoft App" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About | Digital Transformation HR Services & Marketing Agency " />
      <meta name="twitter:description" content="PCS is the best digital marketing agency in India with results-driven strategies. We offer the best digital marketing services in India for your brand's growth!" />
  
    </Head>
  );
}


const css = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800;900&display=swap');

  :root {
    --navy:#022b44; --navy-deep:#011a2a; --navy-mid:#0a3652;
    --orange:#ed8337; --orange-light:#f5a66b;
    --blue:#3b9ec9; --blue-light:#5bb8e8;
  }
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  body{font-family:'Poppins',sans-serif;background:#fff;color:#222;overflow-x:hidden;}

  /* HERO IMAGE (replaces animated scene) */
  .pcs-hero-img-wrap{width:100%;border-radius:24px;overflow:hidden;animation:pcs-fadeUp .9s .15s ease both;}
  .pcs-hero-img{width:100%;height:auto;object-fit:cover;display:block;}

  /* ABOUT SECTION IMAGE (replaces left SVG) */
  .pcs-about-section-img{width:100%;height:auto;border-radius:20px;object-fit:cover;display:block;}

  /* NAV */
  .pcs-nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.1rem 6%;background:rgba(2,43,68,0.95);backdrop-filter:blur(18px);border-bottom:1px solid rgba(237,131,55,0.18);}
  .pcs-logo{font-family:'Poppins',sans-serif;font-weight:800;font-size:1.45rem;color:#fff;text-decoration:none;letter-spacing:-0.02em;display:flex;align-items:center;gap:0.5rem;}
  .pcs-logo em{color:var(--orange);font-style:normal;}
  .pcs-logo-mark{width:34px;height:34px;border-radius:9px;background:linear-gradient(135deg,var(--orange),var(--orange-light));display:flex;align-items:center;justify-content:center;font-size:0.85rem;font-weight:900;color:var(--navy);}
  .pcs-nav-links{display:flex;gap:2rem;list-style:none;}
  .pcs-nav-links a{color:rgba(255,255,255,0.6);text-decoration:none;font-size:0.87rem;font-weight:600;transition:color .22s;}
  .pcs-nav-links a:hover,.pcs-nav-links a.active{color:var(--orange);}
  .pcs-nav-btn{background:var(--orange);color:var(--navy);padding:0.5rem 1.3rem;border-radius:50px;font-size:0.85rem;font-weight:700;text-decoration:none;transition:background .22s,transform .18s;}
  .pcs-nav-btn:hover{background:var(--orange-light);transform:translateY(-1px);}

  /* HERO */
  .pcs-hero{min-height:85vh;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:4rem;padding:3rem 6% 1rem;position:relative;overflow:hidden;background:#004168}
  .pcs-hero::before{content:'';position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(237,131,55,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(237,131,55,0.04) 1px,transparent 1px);background-size:60px 60px;animation:pcs-grid-drift 20s linear infinite;}
  @keyframes pcs-grid-drift{from{background-position:0 0;}to{background-position:60px 60px;}}
  .pcs-hero::after{content:'';position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 60% 70% at 80% 50%,rgba(237,131,55,0.09) 0%,transparent 65%),radial-gradient(ellipse 50% 60% at 0% 0%,rgba(10,54,82,0.6) 0%,transparent 55%);}
  .pcs-hero-left{position:relative;z-index:2;}
  .pcs-badge{display:inline-flex;align-items:center;gap:.5rem;background:rgba(237,131,55,0.1);border:1px solid rgba(237,131,55,0.28);color:var(--orange);font-size:0.72rem;font-weight:700;padding:.38rem 1rem;border-radius:50px;letter-spacing:.09em;text-transform:uppercase;margin-bottom:1.4rem;animation:pcs-fadeUp .6s ease both;}
  .pcs-badge-dot{width:6px;height:6px;border-radius:50%;background:var(--orange);animation:pcs-pulse-dot 1.6s infinite;}
  @keyframes pcs-pulse-dot{0%,100%{opacity:1;transform:scale(1);}50%{opacity:.4;transform:scale(1.5);}}

  /* Hero heading — 3.3rem fixed, fw 600, orange word with underline */
  .pcs-hero-heading{font-family:'Poppins',sans-serif;font-size:3.3rem;font-weight:600;line-height:1.12;letter-spacing:-.02em;color:#fff;margin-bottom:1.4rem;animation:pcs-fadeUp .7s .08s ease both;}
  .pcs-hero-heading .orange{color:var(--orange);position:relative;display:inline-block;}
  .pcs-hero-heading .orange::after{content:'';position:absolute;left:0;bottom:-5px;width:100%;height:3px;background:linear-gradient(90deg,var(--orange),var(--orange-light));border-radius:2px;transform:scaleX(0);transform-origin:left;animation:pcs-ul-in .55s 1s ease forwards;}
  @keyframes pcs-ul-in{to{transform:scaleX(1);}}

  .pcs-hero-sub{font-size:1rem;line-height:1.82;color:rgb(255, 255, 255);margin-bottom:2rem;animation:pcs-fadeUp .7s .16s ease both;}
  .pcs-btn-row{display:flex;gap:1rem;flex-wrap:wrap;animation:pcs-fadeUp .7s .26s ease both;}

  /* Button — white text (not navy) */
  .pcs-btn-fill{display:inline-flex;align-items:center;gap:.5rem;background:var(--orange);color:#fff;padding:.85rem 2rem;border-radius:50px;font-family:'Poppins',sans-serif;font-size:.92rem;font-weight:600;text-decoration:none;transition:all .22s;box-shadow:0 4px 22px rgba(237,131,55,.32);}
  .pcs-btn-fill:hover{background:var(--orange-light);color:#fff;transform:translateY(-2px);box-shadow:0 8px 30px rgba(237,131,55,.45);}
  @keyframes pcs-fadeUp{from{opacity:0;transform:translateY(26px);}to{opacity:1;transform:translateY(0);}}

  /* Hero right — image always centered */
  .pcs-hero-right{position:relative;z-index:2;display:flex;align-items:center;justify-content:center;animation:pcs-fadeUp .9s .15s ease both;}
  .pcs-about-scene{position:relative;width:480px;height:480px;}
  .pcs-orbit{position:absolute;top:50%;left:50%;width:380px;height:380px;margin:-190px 0 0 -190px;border-radius:50%;border:1px dashed rgba(237,131,55,0.12);animation:pcs-ring-spin 25s linear infinite;}
  .pcs-orbit-2{position:absolute;top:50%;left:50%;width:280px;height:280px;margin:-140px 0 0 -140px;border-radius:50%;border:1px dashed rgba(96,165,250,0.1);animation:pcs-ring-spin 18s linear infinite reverse;}
  @keyframes pcs-ring-spin{to{transform:rotate(360deg);}}
  .pcs-scene-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:200px;height:200px;border-radius:50%;background:radial-gradient(circle,rgba(237,131,55,0.12) 0%,transparent 70%);animation:pcs-glow-pulse 3s ease-in-out infinite;pointer-events:none;z-index:3;}
  @keyframes pcs-glow-pulse{0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.6;}50%{transform:translate(-50%,-50%) scale(1.5);opacity:1;}}
  .pcs-about-card{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:260px;background:rgba(1,26,42,0.95);border:1.5px solid rgba(237,131,55,0.28);border-radius:20px;padding:1.4rem;box-shadow:0 20px 60px rgba(0,0,0,.5);z-index:10;}
  .pcs-ac-avatar{width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,var(--orange),var(--orange-light));display:flex;align-items:center;justify-content:center;font-size:1.4rem;margin-bottom:1rem;box-shadow:0 4px 16px rgba(237,131,55,.3);}
  .pcs-ac-title{font-family:'Poppins',sans-serif;font-size:.85rem;font-weight:700;color:#fff;margin-bottom:.3rem;}
  .pcs-ac-sub{font-family:'Poppins',monospace;font-size:.6rem;color:var(--orange);margin-bottom:1rem;font-weight:600;}
  .pcs-ac-bar-label{font-size:.6rem;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.07em;margin-bottom:.3rem;font-family:'Poppins',sans-serif;}
  .pcs-ac-bar{height:5px;background:rgba(255,255,255,.08);border-radius:3px;margin-bottom:.7rem;overflow:hidden;}
  .pcs-ac-bar-fill{height:100%;border-radius:3px;background:linear-gradient(90deg,var(--orange),var(--orange-light));animation:pcs-bar-grow 1.8s ease both;}
  @keyframes pcs-bar-grow{from{width:0;}}
  .pcs-ac-tag-row{display:flex;gap:.4rem;flex-wrap:wrap;margin-top:.8rem;}
  .pcs-ac-tag{font-family:'Poppins',sans-serif;font-size:.55rem;background:rgba(237,131,55,0.1);border:1px solid rgba(237,131,55,0.2);color:var(--orange);padding:.2rem .6rem;border-radius:20px;}
  .pcs-stat-float{position:absolute;background:rgba(10,54,82,0.92);backdrop-filter:blur(10px);border:1px solid rgba(237,131,55,0.22);border-radius:14px;padding:.8rem 1.1rem;z-index:12;min-width:110px;}
  .pcs-sf-num{font-family:'Poppins',sans-serif;font-size:1.4rem;font-weight:800;color:var(--orange);}
  .pcs-sf-label{font-family:'Poppins',sans-serif;font-size:.58rem;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.07em;margin-top:.2rem;}
  .pcs-sf1{top:30px;left:10px;animation:pcs-float1 3.2s ease-in-out infinite;}
  .pcs-sf2{top:30px;right:10px;animation:pcs-float2 3.8s .4s ease-in-out infinite;}
  .pcs-sf3{bottom:60px;left:10px;animation:pcs-float1 3.5s .6s ease-in-out infinite;}
  .pcs-sf4{bottom:60px;right:10px;animation:pcs-float2 3s .3s ease-in-out infinite;}
  @keyframes pcs-float1{0%,100%{transform:translateY(0);}50%{transform:translateY(-12px);}}
  @keyframes pcs-float2{0%,100%{transform:translateY(0) rotate(-1deg);}50%{transform:translateY(-14px) rotate(1deg);}}
  .pcs-notif-pop{position:absolute;border-radius:8px;padding:.4rem .9rem;font-size:.62rem;font-family:'Poppins',sans-serif;z-index:13;white-space:nowrap;}
  .pcs-np1{top:10px;left:50%;transform:translateX(-50%);background:rgba(52,211,153,0.1);border:1px solid rgba(52,211,153,0.4);color:#34d399;animation:pcs-notif-pop 5s ease-in-out infinite;}
  .pcs-np2{bottom:22px;left:50%;transform:translateX(-50%);background:rgba(237,131,55,0.1);border:1px solid rgba(237,131,55,0.4);color:var(--orange-light);animation:pcs-notif-pop 5s 2.5s ease-in-out infinite;}
  @keyframes pcs-notif-pop{0%,100%{opacity:0;transform:translateX(-50%) translateY(8px) scale(.9);}18%,80%{opacity:1;transform:translateX(-50%) translateY(0) scale(1);}}

  /* SCROLL REVEAL — only active after CSS loads via .pcs-loaded */
  .pcs-loaded .pcs-reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease;}
  .pcs-loaded .pcs-reveal.visible{opacity:1;transform:translateY(0);}
  .pcs-loaded .pcs-reveal-left{opacity:0;transform:translateX(-50px);transition:opacity .7s ease,transform .7s ease;}
  .pcs-loaded .pcs-reveal-left.visible{opacity:1;transform:translateX(0);}
  .pcs-loaded .pcs-reveal-right{opacity:0;transform:translateX(50px);transition:opacity .7s ease,transform .7s ease;}
  .pcs-loaded .pcs-reveal-right.visible{opacity:1;transform:translateX(0);}

  /* ABOUT SECTION */
  .pcs-about-section{padding:7rem 6%;background:#fff9f5;position:relative;overflow:hidden;}
  .pcs-about-section::before{content:'';position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(135deg,transparent 0px,transparent 60px,rgba(237,131,55,0.025) 60px,rgba(237,131,55,0.025) 61px);}
  .pcs-about-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;}
  .pcs-about-illo{display:flex;align-items:center;justify-content:center;}
  .pcs-about-illo svg{width:100%;max-width:480px;}
  .pcs-about-eyebrow{color:var(--orange);font-weight:700;font-size:.85rem;letter-spacing:.06em;margin-bottom:.8rem;}
  .pcs-about-heading{font-family:'Poppins',sans-serif;font-size:clamp(1.6rem,2.5vw,2.4rem);font-weight:600;color:#1a1a2e;line-height:1.15;margin-bottom:1.4rem;}
  .pcs-about-para{font-size:.97rem;line-height:1.85;color:#5a6070;margin-bottom:.9rem;}

  /* STORY SECTION */
  .pcs-story-section{padding:7rem 8%;background:#004168;position:relative;overflow:hidden;}
  #pcs-story-canvas{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;}
  .pcs-story-inner{max-width:1350px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:start;position:relative;z-index:2;}
  .pcs-story-eyebrow{display:inline-flex;align-items:center;gap:.5rem;color:var(--orange);font-weight:700;font-size:.8rem;letter-spacing:.1em;text-transform:uppercase;margin-bottom:1rem;background:rgba(237,131,55,0.1);border:1px solid rgba(237,131,55,0.25);padding:.35rem 1rem;border-radius:50px;}
  .pcs-story-heading{font-family:'Poppins',sans-serif;font-size:clamp(1.8rem,2.8vw,2.7rem);font-weight:600;color:#fff;line-height:1.1;margin-bottom:1.4rem;letter-spacing:-.02em;}
  .pcs-story-heading .orange{color:var(--orange);}
  .pcs-story-text{font-size:.97rem;line-height:1.88;color:rgb(255, 255, 255);margin-bottom:1.3rem;}
  .pcs-story-quote{position:relative;padding:1.2rem 1.4rem 1.2rem 2rem;border-left:3px solid var(--orange);background:rgba(237,131,55,0.06);border-radius:0 12px 12px 0;color:rgba(255,255,255,.85);font-weight:600;font-size:.97rem;font-style:italic;line-height:1.6;margin-top:1.5rem;}
  .pcs-story-divider{width:48px;height:3px;background:linear-gradient(90deg,var(--orange),var(--orange-light));border-radius:2px;margin:1.6rem 0;}
  .pcs-story-stat-row{display:flex;gap:2rem;margin-top:2rem;}
  .pcs-story-stat-num{font-family:'Poppins',sans-serif;font-size:1.8rem;font-weight:900;color:var(--orange);line-height:1;}
  .pcs-story-stat-label{font-size:.72rem;color:rgba(255,255,255,.4);letter-spacing:.06em;text-transform:uppercase;margin-top:.3rem;}
  .pcs-story-cards{display:flex;flex-direction:column;gap:1.6rem;}
  .pcs-vm-card{background:rgba(255,255,255,0.04);backdrop-filter:blur(8px);border-radius:20px;padding:0;border:1px solid rgba(255,255,255,0.09);transition:transform .3s,border-color .3s,box-shadow .3s;overflow:hidden;}
  .pcs-vm-card:hover{transform:translateY(-5px);border-color:rgba(237,131,55,0.35);box-shadow:0 20px 50px rgba(0,0,0,.3);}
  .pcs-vm-illo{width:100%;height:170px;display:block;position:relative;}
  .pcs-vm-illo svg{width:100%;height:100%;}
  .pcs-vm-body{padding:1.3rem 1.5rem 1.5rem;}
  .pcs-vm-label{font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:.45rem;}
  .pcs-vm-label-vision{color:var(--blue-light);}
  .pcs-vm-label-mission{color:var(--orange);}
  .pcs-vm-title{font-family:'Poppins',sans-serif;font-size:1.1rem;font-weight:600;color:#fff;margin-bottom:.55rem;}
  .pcs-vm-text{font-size:.88rem;line-height:1.75;color:rgba(255, 255, 255, 0.99);}



  /* TRUST SECTION */
  .pcs-trust-section{padding:7rem 6%;background:#fff;position:relative;overflow:hidden;}
  .pcs-trust-section::before{content:'';position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 55% 40% at 15% 50%,rgba(237,131,55,0.05) 0%,transparent 60%),radial-gradient(ellipse 55% 40% at 85% 50%,rgba(59,158,201,0.04) 0%,transparent 60%);}
  .pcs-trust-inner{max-width:1350px;margin:0 auto;position:relative;z-index:2;}
  .pcs-trust-head{text-align:center;margin-bottom:4rem;}
  .pcs-trust-eyebrow{display:inline-flex;align-items:center;gap:.5rem;color:var(--orange);font-weight:700;font-size:.8rem;letter-spacing:.1em;text-transform:uppercase;background:rgba(237,131,55,0.1);border:1px solid rgba(237,131,55,0.25);padding:.35rem 1rem;border-radius:50px;margin-bottom:1rem;}
  .pcs-trust-title{font-family:'Poppins',sans-serif;font-size:clamp(1.7rem,2.8vw,2.6rem);font-weight:600;color:#1a1a2e;line-height:1.1;margin-bottom:.8rem;}
  .pcs-trust-title span{color:var(--orange);}
  .pcs-trust-sub{font-size:.97rem;color:#5a6070;margin:0 auto;line-height:1.8;}
  .pcs-trust-list{display:grid;grid-template-columns:1fr 1fr;gap:0;}
  .pcs-trust-item{position:relative;padding:2.4rem 2rem 2.4rem 0;display:flex;gap:1.4rem;align-items:flex-start;border-bottom:1px solid rgba(0,0,0,0.07);opacity:0;transform:translateY(30px);transition:opacity .6s ease,transform .6s ease;}
  .pcs-trust-item.visible{opacity:1;transform:translateY(0);}
  .pcs-trust-item:nth-child(odd){border-right:1px solid rgba(0,0,0,0.07);padding-right:2.8rem;}
  .pcs-trust-item:nth-child(even){padding-left:2.8rem;}
  .pcs-trust-item:nth-last-child(-n+2){border-bottom:none;}
  .pcs-ti-num{font-family:'Poppins',sans-serif;font-size:2.9rem;font-weight:900;line-height:1;color:transparent;-webkit-text-stroke:1px #ed83379e;flex-shrink:0;width:64px;text-align:right;transition:color .3s,-webkit-text-stroke .3s;margin-top:-.3rem;}
  .pcs-trust-item:hover .pcs-ti-num{color:rgba(237,131,55,0.1);-webkit-text-stroke:1px rgba(237,131,55,0.6);}
  .pcs-ti-icon{width:44px;height:44px;border-radius:12px;flex-shrink:0;display:flex;align-items:center;justify-content:center;margin-top:.1rem;transition:transform .3s;}
  .pcs-trust-item:hover .pcs-ti-icon{transform:scale(1.12) rotate(-6deg);}
  .pcs-ti-icon svg,.pcs-ti-icon img{width:100%;height:67%;object-fit:contain;}
  .pcs-ti-title{font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#1a1a2e;margin-bottom:.4rem;transition:color .3s;}
  .pcs-trust-item:hover .pcs-ti-title{color:var(--orange);}
  .pcs-ti-text{font-size:.875rem;line-height:1.75;color:#5a6070;}
  .pcs-trust-item::after{content:'';position:absolute;left:0;bottom:-1px;width:0;height:2px;background:linear-gradient(90deg,var(--orange),var(--orange-light));transition:width .4s ease;}
  .pcs-trust-item:nth-child(odd)::after{left:0;}
  .pcs-trust-item:nth-child(even)::after{left:2.8rem;}
  .pcs-trust-item:hover::after{width:60px;}

  /* CTA */
  .pcs-cta-section{padding:6rem 6%;text-align:center;background:linear-gradient(135deg,var(--navy-deep),var(--navy));position:relative;overflow:hidden;}
  .pcs-cta-section::before{content:'';position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(237,131,55,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(237,131,55,0.04) 1px,transparent 1px);background-size:60px 60px;}
  .pcs-cta-inner{position:relative;z-index:2;max-width:680px;margin:0 auto;}
  .pcs-cta-title{font-family:'Poppins',sans-serif;font-size:clamp(1.8rem,3vw,2.8rem);font-weight:600;color:#fff;margin-bottom:1rem;}
  .pcs-cta-title span{color:var(--orange);}
  .pcs-cta-text{font-size:.97rem;line-height:1.82;color:rgba(255,255,255,.6);margin-bottom:2rem;}
  .pcs-cta-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;}
  .pcs-btn-outline-w{display:inline-flex;align-items:center;gap:.5rem;border:1.5px solid rgba(237,131,55,0.45);color:var(--orange);padding:.85rem 2rem;border-radius:50px;font-family:'Poppins',sans-serif;font-size:.92rem;font-weight:700;text-decoration:none;transition:all .22s;}
  .pcs-btn-outline-w:hover{background:rgba(237,131,55,0.1);transform:translateY(-2px);}

  /* PARTNERS & CLIENTS — MARQUEE SLIDER */
  .pcs-pc-section{padding:0 0 6rem 0;background:#fff;}
  .pcs-pc-inner{display:flex;flex-direction:column;gap:3rem;}
  .pcs-pc-block{display:flex;flex-direction:column;gap:1.6rem;}
  .pcs-pc-head{text-align:center;}
  .pcs-pc-title{font-family:'Poppins',sans-serif;font-size:clamp(1.5rem,2.2vw,2rem);font-weight:600;color:#1a1a2e;margin-bottom:.5rem;}
  .pcs-pc-title span{color:var(--orange);}
  .pcs-pc-sub{font-size:.9rem;color:#9ca3af;line-height:1.6;}
  .pcs-pc-divider{width:88%;margin:0 auto;height:1px;background:linear-gradient(90deg,transparent,rgba(0,0,0,0.08),transparent);}
  /* partners static row */
  .pcs-pc-partners-static{display:flex;align-items:center;justify-content:center;gap:1.2rem;flex-wrap:wrap;padding:0 6%;}
  /* marquee track */
  .pcs-marquee-wrap{overflow:hidden;position:relative;padding:.5rem 0;}
  .pcs-marquee-wrap::before,.pcs-marquee-wrap::after{content:'';position:absolute;top:0;bottom:0;width:120px;z-index:2;pointer-events:none;}
  .pcs-marquee-wrap::before{left:0;background:linear-gradient(90deg,#fff,transparent);}
  .pcs-marquee-wrap::after{right:0;background:linear-gradient(270deg,#fff,transparent);}
  .pcs-marquee-track{display:flex;gap:1.2rem;width:max-content;animation:pcs-marquee 28s linear infinite;}
  .pcs-marquee-track-rev{animation:pcs-marquee-rev 32s linear infinite;}
  .pcs-marquee-wrap:hover .pcs-marquee-track,.pcs-marquee-wrap:hover .pcs-marquee-track-rev{animation-play-state:paused;}
  @keyframes pcs-marquee{from{transform:translateX(0);}to{transform:translateX(-50%);}}
  @keyframes pcs-marquee-rev{from{transform:translateX(-50%);}to{transform:translateX(0);}}
  .pcs-mq-item{flex-shrink:0;background:#fff;border:1.5px solid rgba(0,0,0,0.07);border-radius:14px;padding:.9rem 1.6rem;display:flex;align-items:center;justify-content:center;height:72px;width:150px;transition:box-shadow .24s,border-color .24s,transform .24s;cursor:default;}
  .pcs-mq-item-lg{width:200px;height:88px;}
  .pcs-mq-item:hover{box-shadow:0 6px 24px rgba(0,0,0,0.09);border-color:rgba(237,131,55,0.4);transform:translateY(-3px);}
  .pcs-mq-item img{max-width:100%;max-height:36px;object-fit:contain;filter:none;opacity:1;transition:transform .24s,opacity .24s;}
  .pcs-mq-item-lg img{max-height:48px;}
  .pcs-mq-item:hover img{opacity:1;filter:none;}
  .pcs-mq-fallback{font-family:'Poppins',sans-serif;font-size:.65rem;font-weight:700;color:#aab0bc;text-align:center;line-height:1.3;}

  /* CLIENTS GRID */
  .pcs-clients-grid-wrap{display:flex;flex-direction:column;gap:1.2rem;padding:0 6%;}
  .pcs-clients-row{display:flex;align-items:center;justify-content:center;gap:1.2rem;flex-wrap:wrap;}
  .pcs-clients-row-center{justify-content:center;}
  .pcs-client-card{background:#fff;border:1.5px solid rgba(0,0,0,0.07);border-radius:14px;padding:1rem 2rem;display:flex;align-items:center;justify-content:center;height:80px;width:180px;transition:box-shadow .24s,border-color .24s,transform .24s;cursor:default;}
  .pcs-client-card:hover{box-shadow:0 6px 24px rgba(0,0,0,0.09);border-color:rgba(237,131,55,0.4);transform:translateY(-3px);}
  .pcs-client-card img{max-width:100%;max-height:38px;object-fit:contain;filter:none;opacity:1;transition:transform .24s,opacity .24s;}
  .pcs-client-card:hover img{filter:none;opacity:1;}

  /* CLIENTS CAROUSEL */
  .pcs-carousel-wrap{display:flex;flex-direction:column;gap:1.6rem;padding:0 6%;}
  .pcs-carousel-slide{display:flex;flex-direction:column;gap:1.2rem;transition:opacity .38s ease,transform .38s ease;}
  .pcs-slide-enter{opacity:1;transform:translateX(0);}
  .pcs-slide-exit-left{opacity:0;transform:translateX(-40px);}
  .pcs-slide-exit-right{opacity:0;transform:translateX(40px);}
  .pcs-clients-grid-wrap{display:flex;flex-direction:column;gap:1.2rem;padding:0 6%;}
  .pcs-clients-row{display:flex;align-items:center;justify-content:center;gap:1.2rem;flex-wrap:wrap;}
  .pcs-clients-row-center{justify-content:center;}
  .pcs-client-card{background:#fff;border:1.5px solid rgba(0,0,0,0.07);border-radius:14px;padding:1rem 2rem;display:flex;align-items:center;justify-content:center;height:80px;width:180px;transition:box-shadow .24s,border-color .24s,transform .24s;cursor:default;}
  .pcs-client-card:hover{box-shadow:0 6px 24px rgba(0,0,0,0.09);border-color:rgba(237,131,55,0.4);transform:translateY(-3px);}
  .pcs-client-card img{max-width:100%;max-height:38px;object-fit:contain;filter:none;opacity:1;transition:transform .24s,opacity .24s;}
  .pcs-client-card:hover img{filter:none;opacity:1;}
  .pcs-carousel-dots{display:flex;align-items:center;justify-content:center;gap:.6rem;margin-top:.4rem;}
  .pcs-carousel-dot{width:8px;height:8px;border-radius:50%;border:none;background:rgba(0,0,0,0.15);cursor:pointer;padding:0;transition:background .25s,transform .25s,width .25s;}
  .pcs-carousel-dot.active{background:var(--orange);width:22px;border-radius:4px;transform:none;}

  /* FOOTER */
  .pcs-footer{background:var(--navy-deep);padding:2rem 6%;display:flex;align-items:center;justify-content:space-between;border-top:1px solid rgba(237,131,55,0.12);}
  .pcs-foot-copy{font-size:.8rem;color:rgba(255,255,255,0.35);font-family:'Poppins',sans-serif;}
  .pcs-foot-links{display:flex;gap:1.5rem;}
  .pcs-foot-links a{font-size:.8rem;color:rgba(255,255,255,0.4);text-decoration:none;transition:color .2s;}
  .pcs-foot-links a:hover{color:var(--orange);}

  /* RESPONSIVE */

  /* Tablet — 900px */
  @media(max-width:900px){
    /* Layout stacks */
    .pcs-hero,.pcs-about-inner,.pcs-story-inner{grid-template-columns:1fr;gap:2.5rem;}

    /* Hero — left-align text on tablet, image center */
    .pcs-hero{text-align:left;padding:4rem 5% 2rem;min-height:auto;}
    .pcs-hero-sub{max-width:100%;}
    .pcs-btn-row{justify-content:flex-start;}
    .pcs-hero-right{justify-content:center;}
    .pcs-hero-img-wrap{max-width:100%;border-radius:16px;}

    /* About section */
    .pcs-about-section{padding:5rem 5%;}
    .pcs-about-illo{justify-content:center;}
    .pcs-about-section-img{max-width:100%;border-radius:16px;}

    /* Story section */
    .pcs-story-section{padding:5rem 5%;}
    .pcs-story-inner{gap:2.5rem;}
    .pcs-story-stat-row{gap:1.2rem;}
    .pcs-vm-card{width:100%;}
    .pcs-vm-illo img{height:150px;}

    /* Trust */
    .pcs-trust-section{padding:5rem 5%;}
    .pcs-trust-list{grid-template-columns:1fr;gap:0;}
    .pcs-trust-item{border-right:none !important;padding-right:0 !important;padding-left:0 !important;}
    .pcs-trust-item:nth-child(even){padding-left:0;}
    .pcs-trust-item::after{left:0 !important;}

    /* Partners */
    .pcs-pc-partners-static{gap:.8rem;}
    .pcs-mq-item{width:120px;height:60px;}
    .pcs-client-card{width:140px;height:68px;}
  }

  /* Mobile — 600px */
  @media(max-width:600px){
    /* Nav */
    .pcs-nav-links,.pcs-nav-btn{display:none;}
    .pcs-nav{padding:.9rem 5%;}

    /* Hero — always left/start aligned on mobile */
    .pcs-hero{padding:6rem 5% 3rem;text-align:left;}
    .pcs-hero-heading{font-size:clamp(1.9rem,8vw,2.6rem);}
    .pcs-hero-sub{font-size:.92rem;text-align:left;}
    .pcs-btn-row{justify-content:flex-start;}
    .pcs-hero-right{justify-content:center;}
    .pcs-hero-img-wrap{border-radius:12px;width:100%;}
    .pcs-badge{justify-content:flex-start;}
    .pcs-btn-fill{padding:.75rem 1.5rem;font-size:.85rem;}

    /* About */
    .pcs-about-section{padding:4rem 5%;}
    .pcs-about-heading{font-size:clamp(1.4rem,6vw,2rem);}
    .pcs-about-section-img{border-radius:12px;}

    /* Story */
    .pcs-story-section{padding:4rem 5%;}
    .pcs-story-heading{font-size:clamp(1.5rem,6.5vw,2.2rem);}
    .pcs-story-stat-row{flex-wrap:wrap;gap:1rem;}
    .pcs-story-cards{gap:1.2rem;}
    .pcs-vm-illo img{height:130px;}
    .pcs-vm-body{padding:1rem 1.2rem 1.2rem;}

    /* Trust */
    .pcs-trust-section{padding:4rem 5%;}
    .pcs-trust-list{grid-template-columns:1fr;}
    .pcs-trust-head{margin-bottom:2.5rem;}
    .pcs-trust-item{padding:1.6rem 0;}
    .pcs-ti-num{font-size:2rem;width:48px;}

    /* Partners & Clients */
    .pcs-pc-section{padding:0 0 4rem 0;}
    .pcs-pc-partners-static{gap:.6rem;padding:0 5%;}
    .pcs-mq-item{width:100px;height:54px;padding:.6rem 1rem;}
    .pcs-carousel-wrap{padding:0 5%;}
    .pcs-client-card{width:120px;height:60px;padding:.7rem 1rem;}

    /* CTA */
    .pcs-cta-section{padding:4rem 5%;}
    .pcs-cta-btns{flex-direction:column;align-items:center;}

    /* Footer */
    .pcs-footer{flex-direction:column;gap:1rem;text-align:center;padding:1.5rem 5%;}
    .pcs-foot-links{justify-content:center;flex-wrap:wrap;gap:1rem;}
  }

  /* Small mobile — 400px */
  @media(max-width:400px){
    .pcs-hero{padding:3.5rem 4% 3rem;}
    .pcs-hero-heading{font-size:1.65rem;}
    .pcs-about-heading,.pcs-story-heading{font-size:1.4rem;}
    .pcs-mq-item{width:88px;height:50px;}
    .pcs-client-card{width:105px;height:56px;}
    .pcs-story-stat-num{font-size:1.4rem;}
  }
`;

const ALL_CLIENTS = [
   { name: "Analytix-Hub",     logo: Analytix },
  { name: "Baltimore",        logo: Baltimore},
  { name: "Sterlo",           logo: Sterlo },
  { name: "Sterlo Build",     logo: sterloBuild },
  { name: "Sterlo Care",      logo: sterloCare },
  { name: "Microsoft",        logo: microsoft },
  { name: "Odoo",             logo: odoo },
  { name: "OreOps",           logo: OreOps },
  { name: "Riya Consultancy", logo: RiyaConsultancy },
  { name: "Tactive",          logo: Tactive },
  { name: "URCTC",            logo: URCTC },
  { name: "ZKY",              logo: ZKY },
];

// Build slides: 6 clients per slide → row of 3 + row of 3
function buildSlides(clients) {
  const slides = [];
  for (let i = 0; i < clients.length; i += 6) {
    const chunk = clients.slice(i, i + 6);
    if (chunk.length < 1) break;
    slides.push({ row1: chunk.slice(0, 4), row2: chunk.slice(3, 6) });
  }
  return slides;
}

function LogoImg({ src, name }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <span className="pcs-mq-fallback">{name}</span>;
  }
  return (
    <img
      src={src}
      alt={name}
      onError={() => setFailed(true)}
      style={{ maxWidth: "100%", maxHeight: "38px", objectFit: "contain", display: "block" }}
    />
  );
}

function ClientCarousel() {
  const slides = buildSlides(ALL_CLIENTS);
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const timerRef = useRef(null);

  const goTo = (idx, dir = "next") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 380);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      goTo((current + 1) % slides.length, "next");
    }, 3500);
    return () => clearInterval(timerRef.current);
  }, [current, animating]);

  const slide = slides[current];

  return (
    <div className="pcs-carousel-wrap">
      <div className={`pcs-carousel-slide ${animating ? (direction === "next" ? "pcs-slide-exit-left" : "pcs-slide-exit-right") : "pcs-slide-enter"}`}>
        {/* Row 1 — 3 logos */}
        <div className="pcs-clients-row">
          {slide.row1.map((c, i) => (
            <div key={c.name + i} className="pcs-client-card">
              <LogoImg src={c.logo} name={c.name} />
            </div>
          ))}
        </div>
        {/* Row 2 — 3 logos centered */}
        <div className="pcs-clients-row pcs-clients-row-center">
          {slide.row2.map((c, i) => (
            <div key={c.name + i} className="pcs-client-card">
              <LogoImg src={c.logo} name={c.name} />
            </div>
          ))}
        </div>
      </div>
      {/* Dot indicators */}
      <div className="pcs-carousel-dots">
        {slides.map((_, i) => (
          <button key={i} className={`pcs-carousel-dot${i === current ? " active" : ""}`} onClick={() => goTo(i, i > current ? "next" : "prev")} />
        ))}
      </div>
    </div>
  );
}

export default function PCSAboutUs() {
  const storyCanvasRef = useRef(null);

  useEffect(() => {
    // Inject CSS
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
    // Add loaded class AFTER css is injected so reveal opacity:0 applies safely
    const wrapper = document.getElementById("pcs-about-wrapper");
    if (wrapper) wrapper.classList.add("pcs-loaded");
    return () => {
      document.head.removeChild(style);
      if (wrapper) wrapper.classList.remove("pcs-loaded");
    };
  }, []);

  useEffect(() => {
    // Scroll reveal — rootMargin ensures above-fold elements fire immediately
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    const revealEls = document.querySelectorAll(".pcs-reveal,.pcs-reveal-left,.pcs-reveal-right");
    revealEls.forEach((el) => {
      // If element is already in viewport on load, mark visible immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("visible");
      } else {
        io.observe(el);
      }
    });

    // Trust items reveal
    const trustIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const delay = parseInt(e.target.dataset.delay || 0);
            setTimeout(() => e.target.classList.add("visible"), delay);
            trustIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document
      .querySelectorAll(".pcs-trust-item")
      .forEach((c) => {
        const rect = c.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          c.classList.add("visible");
        } else {
          trustIO.observe(c);
        }
      });

    return () => {
      io.disconnect();
      trustIO.disconnect();
    };
  }, []);

  useEffect(() => {
    // Bouncing balls canvas
    const canvas = storyCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const section = canvas.parentElement;
    let W, H, balls, animId;

    const COLORS = [
      "rgba(237,131,55,VAL)",
      "rgba(59,158,201,VAL)",
      "rgba(91,184,232,VAL)",
      "rgba(245,166,107,VAL)",
      "rgba(255,255,255,VAL)",
    ];

    function makeBall() {
      const r = 3 + Math.random() * 9;
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        r,
        vx: (Math.random() - 0.5) * 1.1,
        vy: (Math.random() - 0.5) * 1.1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)].replace(
          "VAL",
          (0.12 + Math.random() * 0.22).toFixed(2)
        ),
      };
    }

    function resize() {
      W = canvas.width = section.offsetWidth;
      H = canvas.height = section.offsetHeight;
      balls = Array.from({ length: 28 }, makeBall);
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      balls.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x - b.r < 0) { b.x = b.r; b.vx *= -1; }
        if (b.x + b.r > W) { b.x = W - b.r; b.vx *= -1; }
        if (b.y - b.r < 0) { b.y = b.r; b.vy *= -1; }
        if (b.y + b.r > H) { b.y = H - b.r; b.vy *= -1; }
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div id="pcs-about-wrapper" style={{ fontFamily: "'Poppins', sans-serif" }}>
    <SEOHead />

      {/* HERO */}
      <section className="pcs-hero">
        <div className="pcs-hero-left">
          <div className="pcs-badge">
            <span className="pcs-badge-dot"></span>About Priyam Consultancy Services
          </div>
          <h1 className="pcs-hero-heading">
            Transforming with Businesses for<br />
            <span className="orange">Beyond the Usual.</span>
          </h1>
          <p className="pcs-hero-sub">
            Empowering progress with end-to-end transformation services combining innovation, compliance, and people strategies to redefine business success.
          </p>
          <div className="pcs-btn-row">
            <a href="#" className="pcs-btn-fill">View Portfolio →</a>
          </div>
        </div>
        <div className="pcs-hero-right">
          <div className="pcs-hero-img-wrap">
            <img
              src={bannerImg}
              alt="Priyam Consultancy Services"
              className="pcs-hero-img"
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="pcs-about-section">
        <div className="pcs-about-inner">
          <div className="pcs-about-illo pcs-reveal-left">
            {/* REPLACE: Add your image below — remove this SVG block */}
            <img
              src={banner}
              alt="Growth Engine"
              className="pcs-about-section-img"
            />
          </div>
          <div className="pcs-reveal-right">
            <div className="partners-header1">
              <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>About Us</div>
            </div>
            <h2 className="pcs-about-heading">We Don’t Just Offer Services. We Solve Your Business Challenges.</h2>
            <p className="pcs-about-para"> A leading digital transformation and Growth Partner that turns your ideas into action.</p>
            <p className="pcs-about-para">We turn ideas into plans, blending innovation to deliver results across Business Registration & Compliance, Digital Transformation, Digital Marketing, and HR Services.</p>
            <p className="pcs-about-para">Our expertise helps businesses grow brands, streamline operations, optimize talent, and remain compliant with tailored solutions.</p>
            <p className="pcs-about-para">From startups to enterprises, we provide scalable, flexible services that adapt to evolving objectives and market demands.</p>
            <p className="pcs-about-para">We prioritize trust, transparency, and measurable outcomes, ensuring long-term success and sustainable impact for every client.</p>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="pcs-story-section">
        <canvas id="pcs-story-canvas" ref={storyCanvasRef}></canvas>
        <div className="pcs-story-inner">
          <div className="pcs-reveal-left">
      <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Story</div>
          </div>            <h2 className="pcs-story-heading">The Minds <span className="orange">Behind</span> the Magic </h2>
            <div className="pcs-story-divider"></div>
            <p className="pcs-story-text">We’re more than a team – we’re a dynamic, collaborative mix of strategists, marketers, HR thinkers, tech innovators, and creative minds. Each member brings unique expertise, diverse experiences, and a shared passion for solving complex business challenges. Together, we’re united by one unwavering belief.</p>
            <blockquote className="pcs-story-quote">
              “Great businesses are built from the inside out”
            </blockquote>
          </div>
          <div className="pcs-story-cards pcs-reveal-right">
            {/* Vision Card */}
            <div className="pcs-vm-card">
              <div className="pcs-vm-illo">
                <img
                  src={vision}
                  alt="Our Vision"
                  style={{ width: "100%", height: "170px", objectFit: "cover", display: "block" }}
                />
              </div>
              <div className="pcs-vm-body">
                <div className="pcs-vm-label pcs-vm-label-vision">⬡ Our Vision</div>
                <div className="pcs-vm-text">To be the most trusted partner in business growth by delivering innovative solutions across business registration, technology, marketing, and HR, helping clients exceed goals and achieve lasting success.</div>
              </div>
            </div>
            {/* Mission Card */}
            <div className="pcs-vm-card">
              <div className="pcs-vm-illo">
                <img
                  src={mission}
                  alt="Our Mission"
                  style={{ width: "100%", height: "170px", objectFit: "cover", display: "block" }}
                />
              </div>
              <div className="pcs-vm-body">
                <div className="pcs-vm-label pcs-vm-label-mission">⬡ Our Mission</div>
                <div className="pcs-vm-text">We drive visibility, efficiency, and performance with data-led marketing, people-first HR strategies, seamless business registration, and digital transformation solutions all built for real business impact.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="pcs-trust-section">
        <div className="pcs-trust-inner">
          <div className="pcs-trust-head pcs-reveal">
      <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Why Businesses Trust Us</div>
          </div>            <h2 className="pcs-trust-title">We Don't Just Deliver Services.<span><i> We Deliver Results.</i></span></h2>
            <p className="pcs-trust-sub">At PCS, every partnership is built on trust and performance. Our holistic approach ensures measurable results across compliance, HR, finance, and digital transformation.</p>
          </div>
          <div className="pcs-trust-list">
            {[
              { num: "01", icon: "/img/icon/one-point-access.webp", bg: "rgba(237,131,55,0.12)",  title: "One Point Access",       text: "Complete expertise — compliance, HR, digital, and marketing — integrated under one roof. No juggling vendors.", delay: 0 },
              { num: "02", icon: "/img/icon/customized-strategies.webp",    bg: "rgba(59,158,201,0.12)",  title: "Scalable Solutions",     text: "Flexible, modular offerings that grow with your business — from early-stage startups to established enterprises.", delay: 100 },
              { num: "03", icon:"/img/icon/expert-team.webp", bg: "rgba(34,197,94,0.12)",   title: "Result-Oriented",        text: "Every strategy we deploy is tied to measurable ROI, performance benchmarks, and tangible business growth.", delay: 200 },
              { num: "04", icon:"/img/icon/result-oriented.webp", bg: "rgba(168,85,247,0.12)",  title: "Customized Strategies",  text: "No templates. No copy-paste. Every solution is designed specifically around your business reality and goals.", delay: 300 },
              { num: "05", icon:"/img/icon/customer-success.webp", bg: "rgba(245,166,107,0.12)", title: "Customer Success First", text: "We don't close deals — we open possibilities. Our growth is directly tied to the success of every client we serve.", delay: 400 },
              { num: "06", icon:"/img/icon/scalable-solutions.webp", bg: "rgba(91,184,232,0.12)",  title: "Expert Team",            text: "Skilled professionals with deep multi-domain expertise — strategists, technologists, HR specialists, and marketers working as one.", delay: 500 },
            ].map((item) => (
              <div key={item.num} className="pcs-trust-item" data-delay={item.delay}>
                <div className="pcs-ti-num">{item.num}</div>
                <div className="pcs-ti-icon" style={{ background: item.bg }}>
                  <img src={item.icon} alt={item.title} width={22} height={22} style={{ objectFit: "contain" }} />
                </div>
                <div>
                  <div className="pcs-ti-title">{item.title}</div>
                  <div className="pcs-ti-text">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS & CLIENTS — COMBINED */}
      <section className="pcs-pc-section pcs-reveal">
        <div className="pcs-pc-inner">
          {/* Partners — 5 static cards */}
          <div className="pcs-pc-block">
            <div className="pcs-pc-head">
              <h2 className="pcs-pc-title">Our <span><i>Partners</i></span></h2>
            </div>
            <div className="pcs-pc-partners-static">
              {[
                { name: "Microsoft", src: microsoft },
                { name: "Sterlo",    src: sterlo },
                { name: "SterloBuild",      src: sterloBuild },
                { name: "SterloCare",     src: sterloCare },
                { name: "Odoo",       src: odoo },
              ].map((p) => (
                <div key={p.name} className="pcs-mq-item">
                  <LogoImg src={p.src} name={p.name} />
                </div>
              ))}
            </div>
          </div>

          <div className="pcs-pc-divider"></div>

          {/* Clients — auto-sliding 4x3 carousel */}
          <div className="pcs-pc-block">
            <div className="pcs-pc-head">
              <h2 className="pcs-pc-title">Our <span><i>Clients</i></span></h2>
            </div>
            <ClientCarousel />
          </div>

        </div>
      </section>


    </div>
  );
}