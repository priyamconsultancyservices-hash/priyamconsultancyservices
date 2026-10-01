import { useState, useRef, useEffect, useMemo } from "react";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import emailjs from "@emailjs/browser";
import '../../css/landing-page.css';

/* ============================================================
   Formwork-style "What kind of website are you planning?"
   quiz landing page — rebuilt with Priyam Consultancy Services'
   navy / orange visual theme and component pattern.
   ============================================================ */


function SEOHead() {
    const pageUrl = "https://www.priyamconsultancy.com/landing-page/website-development-services-coimbatore/";
    const imageUrl = "https://www.priyamconsultancy.com/img/website-development.png";

    return (
        <Head>
            {/* ── Primary Meta ── */}
            <title>Website Development Company in Coimbatore-Priyam Consultancy</title>
            <meta name="description" content="Looking for a website development company in Coimbatore?PCS builds fast, responsive and SEO-friendly websites designed to generate leads and grow your business." />
            <meta name="keywords" content="website development company in coimbatore,website development service,website development company,ecommerce development company" />
            <link rel="canonical" href="https://www.priyamconsultancy.com/landing-page/website-development-services-coimbatore/" />

            {/* ── Open Graph ── */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Website Development Company in Coimbatore-Priyam Consultancy" />
            <meta property="og:description" content="Looking for a website development company in Coimbatore?PCS builds fast, responsive and SEO-friendly websites designed to generate leads and grow your business." />
            <meta property="og:url" content="https://www.priyamconsultancy.com/landing-page/website-development-services-coimbatore/" />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:site_name" content="PCS Business Solution" />

            {/* ── Twitter Card ── */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Website Development Company in Coimbatore-Priyam Consultancy" />
            <meta name="twitter:description" content="Looking for a website development company in Coimbatore?PCS builds fast, responsive and SEO-friendly websites designed to generate leads and grow your business." />
            <meta name="twitter:image" content={imageUrl} />

            {/* ── Breadcrumb List Schema ── */}
            <script type="application/ld+json">{`
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
        "@id":"https://www.priyamconsultancy.com/landing-page/",
        "name":"Landing Pages"
      }
    },
    {
      "@type":"ListItem",
      "position":3,
      "item":{
        "@id":"https://www.priyamconsultancy.com/landing-page/website-development-services-coimbatore/",
        "name":"Website Development Company in Coimbatore"
      }
    }
  ]
        }


      `}</script>

            {/* ── Organization Schema ── */}
            <script type="application/ld+json">{`
       {
         "@context":"https://schema.org",
 "@type":"Organization",
 "name":"Priyam Consultancy Services",
 "url":"https://www.priyamconsultancy.com/",
 "logo":"https://www.priyamconsultancy.com/img/priyam-consultancy-logo.png",
 "contactPoint":[
   {
     "@type":"ContactPoint",
     "telephone":"+91 96774 44048",
     "contactType":"customer support"
   }
 ],
 "sameAs":[
   "https://www.facebook.com/profile.php?id=61577125709962",
   "https://www.linkedin.com/company/priyam-consultancy-services/",
   "https://www.instagram.com/priyam_consultancy_services/",
   "https://x.com/services91032",
   "https://g.co/kgs/rdTYdi6"
 ]

        }

      `}</script>

        </Head>
    );
}

const GlobalStyles = () => (
    <style>{`
    :root{
      --fw-navy:#004168;
      --fw-navy-deep:#0d1f3c;
      --fw-orange:#ed8337;
      --fw-orange-soft:#f9a66c;
      --fw-paper:#f7f8fb;
      --fw-white:#ffffff;
      --fw-line:rgba(0,65,104,0.12);
      --fw-text-mid:#5b6b7c;
      --fw-text-lo:#8a97a6;
      --fw-green:#16a34a;
      --fw-radius-s:10px;
      --fw-radius-m:16px;
      --fw-radius-l:24px;
    }
      
   header.headerWrapper_ROKX, .footerTop_uYEV, .footerBottom_YdiN{
    display: none;
} 
    .fw-page{ font-family:'Inter', sans-serif; color:var(--fw-navy-deep); background:var(--fw-white); overflow-x:hidden; }
    .fw-page h1,.fw-page h2,.fw-page h3,.fw-page .fw-disp{ font-family:'Poppins', sans-serif; font-weight:700; letter-spacing:-0.01em; margin:0; }
    .fw-page section[id]{ scroll-margin-top:90px; }
    .fw-wrap{ max-width:1350px; margin:0 auto; padding:0 24px; }
    @media(max-width:640px){ .fw-wrap{ padding:0 18px; } }
    .fw-eyebrow{
      font-size:15px; letter-spacing:0.12em; text-transform:uppercase; font-weight:700;
      color:var(--fw-orange); display:inline-flex; align-items:center; gap:8px; margin-bottom:16px;
    }
    .fw-eyebrow::before{ content:''; width:6px; height:6px; border-radius:50%; background:var(--fw-orange); display:inline-block; }
    .fw-btn{ display:inline-flex; align-items:center; gap:10px; padding:15px 22px; border-radius:999px; font-weight:600; font-size:14.5px; border:1px solid transparent; transition:all .25s ease; }
    .fw-btn-fill{ background:var(--fw-orange); color:#fff; box-shadow:0 10px 24px -10px rgba(237,131,55,0.7); }
    .fw-btn-fill:hover{ transform:translateY(-2px); box-shadow:0 16px 30px -10px rgba(237,131,55,0.85); }
    .fw-btn-ghost{ background:transparent; color:var(--fw-navy); border-color:var(--fw-line); }
    .fw-btn-ghost:hover{ border-color:var(--fw-orange); color:var(--fw-orange); }
    .fw-section{ padding:80px 0; }
    @media(max-width:768px){ .fw-section{ padding:56px 0; } }
    .fw-section-dark{ background:var(--fw-navy-deep); color:#fff; }
    .fw-section-dark .fw-text-mid{ color:rgba(255,255,255,0.65); }
    .fw-navy-section{ background:#004168; color:#fff; }
    .fw-navy-section .fw-text-mid{ color:rgba(255,255,255,0.72); }
    .fw-navy-section .fw-head h2, .fw-navy-section h2, .fw-navy-section h3{ color:#fff; }
    .fw-navy-section .fw-head h2 span{ color:var(--fw-orange-soft); }
    .fw-navy-section .fw-eyebrow{ color:var(--fw-orange-soft); }
    .fw-navy-section .fw-clients-label{ color:rgba(255,255,255,0.6); }
    .fw-navy-section .fw-stack-flow::before{ background:repeating-linear-gradient(to bottom, rgba(255,255,255,0.35) 0 6px, transparent 6px 12px); }
    .fw-navy-section .fw-stack-node .body h3{ color:#fff; }
    .fw-navy-section .fw-stack-node .body p{ color:rgba(255,255,255,0.72); }
    .fw-navy-section .fw-fit-card{ background:#fff; }
    .fw-navy-section .fw-fit-card.hi::before{ background:var(--fw-orange); }
    .fw-text-mid{ color:var(--fw-text-mid); }
    .fw-head{ text-align:center;  margin:0 auto 44px; }
    .fw-head h2{ font-size:clamp(24px,3vw,36px); line-height:1.25; margin:6px 0 12px; }
    .fw-head h2 span{ color:var(--fw-orange);  }

    /* ---- HERO ---- */
    .fw-hero{ padding:56px 0 60px;background: #004168;  }
    .fw-hero-grid{ display:grid; grid-template-columns:1.05fr 0.95fr; gap:48px; align-items:center; }
    @media(max-width:980px){ .fw-hero-grid{ grid-template-columns:1fr; } }
    .fw-loc-pill{ display:inline-flex; align-items:center; gap:8px; border:1px solid rgba(255,255,255,0.3); border-radius:999px; padding:8px 16px; font-size:12px; color:rgba(255,255,255,0.85); margin-bottom:22px; font-weight:600; }
    .fw-loc-pill .pin{ width:6px; height:6px; border-radius:50%; background:var(--fw-orange-soft); }
    .fw-hero h1{ font-size:clamp(30px,4.4vw,50px); line-height:1.1; margin-bottom:16px; color:#fff; }
    .fw-hero h1 em{ font-style:italic; color:var(--fw-orange-soft); }
    .fw-hero-sub{ font-size:16px; color:rgba(255,255,255,0.75); max-width:480px; margin-bottom:30px; line-height:1.7; }
    .fw-choice-grid{ display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:26px; }
    @media(max-width:480px){ .fw-choice-grid{ grid-template-columns:1fr; } }
    .fw-choice-card{ text-align:left; border:1px solid var(--fw-line); border-radius:var(--fw-radius-m); padding:18px 18px; background:#fff; transition:all .2s ease; position:relative; cursor:pointer; }
    .fw-choice-card:hover{ border-color:var(--fw-orange-soft); transform:translateY(-3px); box-shadow:0 12px 30px -16px rgba(0,0,0,0.35); }
    .fw-choice-card.active{ background:#fff; border-color:var(--fw-orange); box-shadow:0 0 0 2px rgba(237,131,55,0.3), 0 14px 32px -16px rgba(0,0,0,0.4); }
    .fw-choice-card .tag{ font-size:11px; color:var(--fw-text-lo); display:block; margin-bottom:8px; font-weight:600; }
    .fw-choice-card .name{ font-weight:700; font-size:15px; color:var(--fw-navy-deep); }
    .fw-choice-card .desc{ font-size:12.5px; line-height:1.5; color:var(--fw-text-mid); margin-top:6px; }
    .fw-choice-card .check{ position:absolute; top:16px; right:16px; width:18px; height:18px; border-radius:50%; border:1.5px solid var(--fw-line); display:flex; align-items:center; justify-content:center; }
    .fw-choice-card.active .check{ background:var(--fw-orange); border-color:var(--fw-orange); }
    .fw-choice-card.active .check::after{ content:''; width:6px; height:6px; border-radius:50%; background:#fff; }
    .fw-hero-actions{ display:flex; align-items:center; gap:16px; flex-wrap:wrap; margin-bottom:30px; }
    .fw-hero-hint{ font-size:13px; color:rgba(255,255,255,0.6); }
    .fw-build-on-label{ display:block; font-size:11px; color:rgba(255,255,255,0.6); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:12px; font-weight:700; }
    .fw-hero-img-wrap{ position:relative; }
    // .fw-hero-img-wrap img{ width:100%; height:auto; aspect-ratio:4.5/3.1; object-fit:cover;  }
    /* ---- BUILD ON (5-column grid, white logo tile with border) ---- */
.fw-build-on-grid{
  display:grid; grid-template-columns:repeat(4,1fr);
  gap:16px; align-items:center;
}
@media(max-width:480px){ .fw-build-on-grid{ gap:8px; } }

.fw-build-on-cell{
  display:flex; align-items:center; justify-content:center;
  padding:0; background:transparent; border:none; border-radius:0;
  box-shadow:none; transition:transform .25s ease;
}
.fw-build-on-cell:hover{ transform:translateY(-4px); border:none; box-shadow:none; }

.fw-build-on-dot{
 height:46px; border-radius:12px;
  display:flex; align-items:center; justify-content:center;
  font-size:14px; font-weight:800; color:#fff; flex-shrink:0; overflow:hidden;
  box-sizing:border-box;
}
.fw-build-on-dot,
.fw-build-on-dot.has-img{
  width:100%; height:auto; background:transparent !important;
  border-radius:0; overflow:visible; display:flex;
  align-items:center; justify-content:center;
}
  .fw-build-on-dot img{
  width:100%; height:auto; max-height:170px;
  object-fit:contain; display:block;
}

.fw-build-on-cell span.label{ display:none; }

    /* ---- CLIENTS MARQUEE ---- */
    .fw-clients-label{ text-align:center; font-size:35px; color:#000;  margin-bottom:40px; font-weight:600;FONT-FAMILY: 'Poppins', sans-serif; }
    .fw-marquee{ overflow:hidden; }
    .fw-marquee-track{ display:flex; gap:65px; width:max-content; animation:fw-scroll 32s linear infinite; }
    @keyframes fw-scroll{ from{ transform:translateX(0);} to{ transform:translateX(-50%);} }
    .fw-client-logo{ display:flex; align-items:center; gap:8px; flex-shrink:0; }
    .fw-client-logo .mark{ width:28px; height:28px; border-radius:8px; display:flex; align-items:center; justify-content:center; color:#fff; font-size:11px; font-weight:800; }
    .fw-client-logo .name{ font-size:13px; font-weight:600; color:var(--fw-navy-deep); white-space:nowrap; }

    /* ---- OVERVIEW ---- */
    .fw-overview-para{ max-width:800px; margin:0 auto; color:var(--fw-text-mid); line-height:1.8; font-size:15px; text-align:center; }
    .fw-overview-stats{ display:flex; justify-content:center; gap:56px; margin-top:40px; flex-wrap:wrap; }
    .fw-ov-stat{ text-align:center; }
    .fw-ov-stat .n{ font-family:'Poppins',sans-serif; font-weight:700; font-size:32px; color:var(--fw-orange); }
    .fw-ov-stat .l{ font-size:12.5px; letter-spacing:0.08em; text-transform:uppercase; color:#000; margin-top:4px; font-weight:600; }

    /* ---- STACK ---- */
    .fw-stack-flow{ max-width:760px; margin:0 auto; position:relative; }
    .fw-stack-flow::before{ content:''; position:absolute; left:29px; top:20px; bottom:20px; width:1px; background:repeating-linear-gradient(to bottom, var(--fw-line) 0 6px, transparent 6px 12px); }
    .fw-stack-node{ display:flex; gap:22px; padding:26px 0; position:relative; transition:opacity .3s ease, padding .3s ease; }
    .fw-stack-node .marker{ flex-shrink:0; width:60px; height:60px; border-radius:50%; background:#fff; border:1px solid var(--fw-line); display:flex; align-items:center; justify-content:center; font-family:'IBM Plex Mono',monospace; font-size:12px; font-weight:700; color:var(--fw-orange); z-index:2; }
    .fw-stack-node .body h3{ font-size:20.59px; margin-bottom:8px; color:var(--fw-navy-deep); }
    .fw-stack-node .body p{ font-size:14.5px; color:var(--fw-text-mid); line-height:1.7; margin:0;    padding: 14px 0; }
    .fw-tech-grid{ display:flex; flex-wrap:wrap; gap:10px; margin-top:16px; }
    .fw-tech-tile{ display:flex; flex-direction:column; align-items:center; gap:8px; width:78px; padding:12px 8px 10px; border:1px solid var(--fw-line); border-radius:12px; background:#fff; }
    .fw-tech-tile .ic{ width:30px; height:30px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:10.5px; font-weight:800; color:#fff; overflow:hidden; flex-shrink:0; }
    .fw-tech-tile .ic.dark{ color:#0B0D12; }
    .fw-tech-tile .ic.has-img{ background:#f2f4f8 !important; padding:5px; box-sizing:border-box; }
    .fw-tech-tile .ic img{ width:100%; height:100%; object-fit:contain; display:block; }
    .fw-tech-tile .lbl{ font-size:10px; text-align:center; color:var(--fw-text-mid); font-weight:600; line-height:1.3; }
    @media(max-width:560px){.fw-clients-label {font-size:25px;} .fw-stack-node{ gap:14px; } .fw-stack-node .marker{ width:46px; height:46px; } .fw-stack-flow::before{ left:22px; } }
    /* personalized state */
    .fw-stack-flow.personalized::before{ display:none; }
    .fw-stack-flow.personalized .fw-stack-node{ display:none; opacity:0.5; padding:14px 0; }
    .fw-stack-flow.personalized .fw-stack-node .marker{ display:none; }
    .fw-stack-flow.personalized .fw-stack-node .body h3{ font-size:15px; margin-bottom:0; }
    .fw-stack-flow.personalized .fw-stack-node .body p, .fw-stack-flow.personalized .fw-stack-node .fw-tech-grid{ display:none; }
    .fw-stack-flow.personalized .fw-stack-node.hi{ display:flex; opacity:1; padding:10px 0 26px; }
    .fw-stack-flow.personalized .fw-stack-node.hi .body h3{ font-size:19px; margin-bottom:8px; }
    .fw-stack-flow.personalized .fw-stack-node.hi .body p{ display:block; }
    .fw-stack-flow.personalized .fw-stack-node.hi .fw-tech-grid{ display:flex; }

    /* ---- SHOWCASE ---- */
    .fw-cat-row{ display:flex; flex-wrap:wrap; gap:10px; justify-content:center; margin-bottom:36px; }
    .fw-cat-btn{ padding:10px 25px; border-radius:999px; border:1px solid var(--fw-line); background:#fff; font-size:14px; font-weight:600; color:#000; cursor:pointer; transition:all .2s ease;font-family: 'Poppins', sans-serif; }
    .fw-cat-btn.on{ background:var(--fw-navy); border-color:var(--fw-navy); color:#fff; }
    .fw-showcase-grid{ display:grid; grid-template-columns:1.2fr 1fr; gap:36px; align-items:center; }
    @media(max-width:900px){ .fw-showcase-grid{ grid-template-columns:1fr; } }
    .fw-browser{ border-radius:var(--fw-radius-l); overflow:hidden; border:1px solid var(--fw-line); box-shadow:0 30px 70px -34px rgba(0,65,104,0.4); background:#fff; }
    .fw-browser-bar{ display:flex; align-items:center; gap:10px; padding:12px 16px; background:var(--fw-paper); border-bottom:1px solid var(--fw-line); }
    .fw-browser-bar .dots{ display:flex; gap:6px; }
    .fw-browser-bar .dots span{ width:9px; height:9px; border-radius:50%; background:var(--fw-line); }
    .fw-browser-bar .url{     font-size: 14px;
    color: #ed8337;
    font-weight: 500;
    margin-left: 6px;}
.fw-browser-body{ height:360px; padding:0; overflow:hidden; background:var(--fw-paper); }
.fw-browser-body img{ width:100%; height:100%; object-fit:cover; object-position:top; display:block; }
    .fw-showcase-meta-card{ background:#fff; border:1px solid var(--fw-line); border-radius:var(--fw-radius-l); padding:30px 28px; box-shadow:0 24px 54px -30px rgba(0,65,104,0.3); }
    .fw-m-industry{ font-size:12px; letter-spacing:0.1em; color:var(--fw-orange); font-weight:700; margin-bottom:10px;    font-family: 'Poppins'; }
    .fw-showcase-meta h3{ font-size:22px; margin-bottom:8px; color:var(--fw-navy-deep); }
    .fw-m-type{font-size: 17px;
    color: #ed8337;
    margin: 15px 0;
    font-family: 'Poppins';
    font-weight: 600;}
    .fw-func-list div{ position:relative; padding-left:22px; margin-bottom:10px; font-size:14.5px; color:var(--fw-navy-deep);    font-family: 'Poppins'; }
    .fw-func-list div::before{ content:'✓'; position:absolute; left:0; color:var(--fw-orange); font-weight:800; }
    @media(max-width:900px){
  .fw-browser-body{ height:260px; }
}

    /* ---- FIT CARDS ---- */
    .fw-fit-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
    @media(max-width:940px){ .fw-fit-grid{ grid-template-columns:1fr 1fr; } }
    @media(max-width:620px){ .fw-fit-grid{ grid-template-columns:1fr; } }
    .fw-fit-card{ position:relative; border:1px solid var(--fw-line); border-top:3px solid var(--fw-orange); border-radius:var(--fw-radius-m); padding:26px 24px 22px; background:#fff; display:flex; flex-direction:column; gap:16px; transition:transform .25s ease, border-color .25s ease; }
    .fw-fit-card:hover{ transform:translateY(-5px); }
    .fw-fit-grid.filtered{ display:flex; flex-wrap:wrap; justify-content:center; align-items:stretch; }
    .fw-fit-grid.filtered .fw-fit-card{ display:none; flex:0 1 340px; }
    .fw-fit-grid.filtered .fw-fit-card.hi{ display:flex; }
    .fw-fit-card.hi{ border-top-color:var(--fw-orange); box-shadow:0 0 0 1px var(--fw-orange), 0 20px 44px -20px rgba(237,131,55,0.5); }
    .fw-fit-card.hi::before{ content:'RECOMMENDED'; position:absolute; top:-11px; right:20px; background:var(--fw-navy); color:#fff; font-size:10px; font-weight:700; letter-spacing:0.08em; padding:4px 10px; border-radius:999px; }
    .fw-fit-card h3{ font-size:18.5px; margin:0; color:var(--fw-navy-deep); }
    .fw-fit-desc{ font-size:14.5px; color:var(--fw-text-mid); line-height:1.55; margin:0; }
    .fw-fit-list{ list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:9px; }
    .fw-fit-list li{ position:relative; padding-left:20px; font-size:14.5px; color:var(--fw-text-mid); }
    .fw-fit-list li::before{ content:'✓'; position:absolute; left:0; color:var(--fw-green); font-weight:700; }
    .fw-fit-foot{ display:flex; align-items:center; justify-content:space-between; padding-top:14px; border-top:1px dashed var(--fw-line); margin-top:auto; }
    .fw-fit-price{ font-size:12.5px; color:var(--fw-navy-deep); }
    .fw-fit-price b{ color:var(--fw-orange); font-size:14px; }
    .fw-fit-cta{ font-size:12.5px; font-weight:700; color:var(--fw-orange); font-family: 'Poppins', sans-serif; cursor:pointer; background:none; border:none; padding:0; }

    /* ---- JOURNEY ---- */
    .fw-journey-scroll{ display:grid; grid-template-columns:repeat(4,1fr); gap:18px; }
    @media(max-width:900px){ .fw-journey-scroll{ grid-template-columns:1fr 1fr; } }
    @media(max-width:560px){ .fw-journey-scroll{ grid-template-columns:1fr; } }
    .fw-jp-card{ border:1px solid var(--fw-line); border-radius:var(--fw-radius-m); padding:22px 20px; background:#fff; }
    .fw-jp-num{ font-size:11px; color:var(--fw-orange); font-weight:700; display:block; margin-bottom:8px; }
    .fw-jp-card h3{ font-size:16px; margin-bottom:8px; color:var(--fw-navy-deep); }
    .fw-jp-card p{ font-size:14px; color:#0000009c; line-height:1.6; }
    .fw-jp-banner{ margin-top:32px; display:flex; align-items:center; gap:16px; background:var(--fw-navy); color:#fff; border-radius:var(--fw-radius-m); padding:20px 26px; font-size:14.5px; }
    .fw-jp-banner b{ color:var(--fw-orange-soft); }

    /* ---- FAQ ---- */
    .fw-faq-list{ max-width:1000px; margin:0 auto; }
    .fw-faq-item{ border-bottom:1px solid var(--fw-line); padding:18px 0; transition:all .2s ease; }
    .fw-faq-item.hi{ background:rgba(237,131,55,0.05); border-radius:12px; padding:18px 16px; }
    .fw-faq-q{ display:flex; justify-content:space-between; align-items:center; cursor:pointer; font-weight:600; font-size:15px; color:var(--fw-navy-deep); }
    .fw-faq-q .plus{ color:var(--fw-orange); font-size:20px; font-weight:400; }
    .fw-faq-a{ font-size: 15px;
    color: #000000;
    line-height: 1.7;
    font-family: 'Poppins';
    margin-top: 12px;}

    /* ---- TESTIMONIALS SLIDER ---- */
    .fw-testi-slider{ position:relative; }
    .fw-testi-track{
      display:flex; gap:18px; overflow-x:auto; scroll-snap-type:x mandatory;
      scroll-behavior:smooth; scrollbar-width:none; padding:8px 2px 14px;
    }
    .fw-testi-track::-webkit-scrollbar{ display:none; }
    .fw-testi-card{
      flex:0 0 calc((100% - 36px) / 3); scroll-snap-align:start;
      border:1px solid var(--fw-line); border-radius:var(--fw-radius-m);
      padding:22px 20px; background:#fff; transition:all .25s ease; margin: 0 0 4px 7px;
    }
    @media(max-width:980px){ .fw-testi-card{ flex:0 0 calc((100% - 18px) / 2); } }
    @media(max-width:560px){ .fw-testi-card{ flex:0 0 100%; } }
    .fw-testi-card.hi{ border-color:var(--fw-orange); box-shadow:0 18px 40px -20px rgba(237,131,55,0.5); }
    .fw-testi-stars{ color:var(--fw-orange); letter-spacing:2px; margin-bottom:12px; font-size:13px; }
    .fw-testi-quote{ font-size:14.5px; color:var(--fw-navy-deep); line-height:1.7; margin-bottom:18px; min-height:100px; }
    .fw-testi-foot{ display:flex; align-items:center; gap:10px; padding-top:14px; border-top:1px solid var(--fw-line); }
    .fw-testi-avatar{ width:34px; height:34px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:800; color:#fff; flex-shrink:0; }
    .fw-testi-name{ font-size:14px; font-weight:600; color:var(--fw-navy-deep);font-family: 'Poppins', sans-serif; }
    .fw-testi-role{ font-size:12px; color:#000000;font-family: 'Poppins', sans-serif; }
    .fw-testi-controls{ display:flex; justify-content:center; align-items:center; gap:14px; margin-top:22px; }
    .fw-testi-arrow{
      width:42px; height:42px; border-radius:50%; border:1px solid var(--fw-line);
      background:#fff; color:var(--fw-navy); font-size:18px; cursor:pointer; transition:all .2s ease;
    }
    .fw-testi-arrow:hover{ background:var(--fw-orange); border-color:var(--fw-orange); color:#fff; }

    /* ---- FINAL CTA ---- */
    .fw-final-cta{ background:var(--fw-navy-deep); color:#fff; text-align:center; border-radius:28px; margin:0 5%; padding:64px 24px; }
    .fw-final-cta h2{ font-size:clamp(26px,3.4vw,40px); margin:14px 0 12px; color:#fff; }
    .fw-final-cta .sub{ color:rgba(255,255,255,0.7); font-size:15px; margin-bottom:30px; }
    .fw-final-actions{ display:flex; justify-content:center; gap:16px; flex-wrap:wrap; }

    /* ---- FOOTER ---- */
    .fw-footer{ padding:26px 0; text-align:center; font-size:12.5px; color:var(--fw-text-lo); }

    /* ---- BLUEPRINT TRACKER ---- */
    .fw-blueprint{ position:fixed; right:20px; bottom:20px; z-index:600; width:270px; background:#fff; border:1px solid var(--fw-line); border-radius:var(--fw-radius-m); padding:16px 18px; box-shadow:0 24px 50px -18px rgba(0,65,104,0.35); transform:translateY(140%); opacity:0; transition:all .35s ease; pointer-events:none; }
    .fw-blueprint.show{ transform:translateY(0); opacity:1; pointer-events:auto; }
    .fw-bp-head{ display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; }
    .fw-bp-title{ font-size:12px; font-weight:700; color:var(--fw-navy-deep); text-transform:uppercase; letter-spacing:0.06em; }
    .fw-bp-close{ background:none; border:none; font-size:18px; color:var(--fw-text-lo); cursor:pointer; line-height:1; }
    .fw-bp-row{ display:flex; justify-content:space-between; font-size:12.5px; margin-bottom:6px; }
    .fw-bp-row .k{ color:var(--fw-text-lo); }
    .fw-bp-row .v{ color:var(--fw-navy-deep); font-weight:600; }
    .fw-bp-cta{ display:block; text-align:center; margin-top:12px; padding:9px; border-radius:999px; background:var(--fw-orange); color:#fff; font-size:12.5px; font-weight:700; cursor:pointer; border:none; width:100%; }
    @media(max-width:640px){ .fw-blueprint{ left:16px; right:16px; width:auto; } }


    /* ---- PARTNER BADGES ---- */
.fw-partner-section{ padding:0 0 80px; }
@media(max-width:768px){ .fw-partner-section{ padding:0 0 56px; } }
.fw-partner-card{
  background:#eef3fc; border:1px solid #dde5f3; border-radius:28px;
  padding:44px 44px;
}
.fw-partner-grid{ display:grid; grid-template-columns:repeat(4,1fr); }
.fw-partner-cell{
  display:flex; align-items:center; justify-content:center;
  min-height:163px; padding:24px 20px;
  border-right:1px solid rgba(0,65,104,0.1);
  border-bottom:1px solid rgba(0,65,104,0.1);
}
.fw-partner-cell:nth-child(4n){ border-right:none; }
.fw-partner-cell:nth-child(n+5){ border-bottom:none; }
.fw-partner-cell img{
  max-width:100%; max-height:84px; width:auto; height:auto;
  object-fit:contain; display:block;
}
@media(max-width:900px){
  .fw-partner-card{ padding:20px 16px; border-radius:20px; }
  .fw-partner-grid{ grid-template-columns:repeat(2,1fr); }
  .fw-partner-cell{ min-height:120px; padding:18px 12px; border-right:1px solid rgba(0,65,104,0.1); border-bottom:1px solid rgba(0,65,104,0.1); }
  .fw-partner-cell:nth-child(2n){ border-right:none; }
  .fw-partner-cell:nth-child(4n){ border-right:none; }
  .fw-partner-cell:nth-child(n+5){ border-bottom:1px solid rgba(0,65,104,0.1); }
  .fw-partner-cell:nth-child(n+7){ border-bottom:none; }
  .fw-partner-cell img{ max-height:60px; }
}


.fw-badge-row{
  display:flex; grid-template-columns:repeat(4,1fr); justify-content:center; 
  gap:12px; align-items:center; margin-bottom:24px; 
}
.fw-badge{ display:flex; justify-content:center; }
.fw-badge img{
  width:100%; max-width:auto;    max-height: 140px; object-fit:contain; display:block;
}
@media(max-width:980px){
  .fw-badge-row{ margin-top:8px; }
}
@media(max-width:480px){
  .fw-badge-row{ gap:6px; }
  .fw-badge img{ max-width:110px; }
}

    /* ---- LEAD MODAL ---- */
    .fw-lead-overlay{ position:fixed; inset:0; background:rgba(13,31,60,0.55); z-index:900; display:flex; align-items:center; justify-content:center; padding:20px; opacity:0; pointer-events:none; transition:opacity .25s ease; }
    .fw-lead-overlay.show{ opacity:1; pointer-events:auto; }
    .fw-lead-modal{ background:#fff; border-radius:var(--fw-radius-l); padding:30px 28px; max-width:440px; width:100%; max-height:90vh; overflow-y:auto; }
    .fw-lm-head{ display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:20px; }
    .fw-lm-title{ font-size:18px; font-weight:700; color:var(--fw-navy-deep); font-family:'Poppins',sans-serif; }
    .fw-lm-sub{ font-size:12.5px; color:var(--fw-text-mid); margin-top:4px; }
    .fw-lm-close{ background:none; border:none; font-size:22px; color:var(--fw-text-lo); cursor:pointer; line-height:1; }
    .fw-lm-field{ margin-bottom:14px; }
    .fw-lm-field label{ display:block; font-size:12px; font-weight:600; color:var(--fw-navy-deep); margin-bottom:6px; }
    .fw-lm-field input, .fw-lm-field select{ width:100%; padding:11px 14px; border-radius:10px; border:1px solid var(--fw-line); font-size:13.5px; font-family:inherit; background:#fff; }
    .fw-lm-field input:focus, .fw-lm-field select:focus{ outline:none; border-color:var(--fw-orange); }
    .fw-lm-field select.locked,
    .fw-lm-field input[readonly]{ background:#f4f6f9; color:var(--fw-text-mid); cursor:not-allowed; }
    .fw-lm-row2{ display:grid; grid-template-columns:1fr 1fr; gap:12px; }
    .fw-lm-submit{ width:100%; padding:13px; border-radius:999px; border:none; background:var(--fw-orange); color:#fff; font-weight:700; font-size:14px; cursor:pointer; margin-top:6px; }
    .fw-lm-note{ font-size:11px; color:var(--fw-text-lo); margin-top:12px; line-height:1.6; }
    .fw-lm-success{ text-align:center; padding:20px 0; }
    .fw-lm-success .tick{ width:48px; height:48px; border-radius:50%; background:var(--fw-green); color:#fff; display:flex; align-items:center; justify-content:center; font-size:22px; margin:0 auto 16px; }
  `}</style>
);

/* ============================================================
   DATA
   ============================================================ */

const HERO_CHOICES = [
    { value: "Static Website", tag: "01", desc: "Fast, affordable single-page site. For a business that just needs to be found online, fast." },
    { value: "Dynamic Website", tag: "02", desc: "Multi-page site with database-driven content that's built to scale and update easily." },
    { value: "Ecommerce Website", tag: "03", desc: "Full online store — catalog, cart, and payments — set up to actually sell." },
    { value: "Custom Website", tag: "04", desc: "Bespoke builds with custom integrations and workflows, tailored to how your business runs." },
];

const BUILD_ON = [
    { name: "360 kovai", short: "G", color: "#4285F4", img: "/img/landing-page/hero-img-1.webp" },
    { name: "verified agency", short: "G", color: "#4285F4", img: "/img/landing-page/hero-img-2.webp" },
    { name: "google review", short: "G", color: "#4285F4", img: "/img/landing-page/hero-img-3.webp" },


];

const PARTNER_BADGES = [
    { name: "Meta Business Partner", img: "/img/landing-page/meta-ad.webp" },
    { name: "Shopify Partner", img: "/img/landing-page/client-logo-2.webp" },
    { name: "Microsoft Partner", img: "/img/landing-page/microsoft.webp" },
    { name: "Odoo Official Partner", img: "/img/landing-page/odoo.webp" },
    { name: "Google Partner", img: "/img/landing-page/google-partner.webp" },
    { name: "Google Reviews 4.9/5", img: "/img/landing-page/google-review.webp" },
    { name: "Verified Agency DesignRush", img: "/img/landing-page/verified-agency.webp" },
    { name: "360 Kovai Verified Agency", img: "/img/landing-page/360-kovai.webp" },
];

const CLIENT_MARQUEE_LOGOS = [
    { name: "Tactive", img: "/img/landing-page/clients/client-slide-1.webp" },
    { name: "URCTS", img: "/img/landing-page/clients/client-slide-2.webp" },
    { name: "ZKY", img: "/img/landing-page/clients/client-slide-3.webp" },
    { name: "Analytix Hub", img: "/img/landing-page/clients/client-slide-4.webp" },
    { name: "Baltimore Health Analytics", img: "/img/landing-page/clients/client-slide-5.webp" },
    { name: "Sterlo", img: "/img/landing-page/clients/client-slide-6.webp" },
    { name: "SterloBuild", img: "/img/landing-page/clients/client-slide-7.webp" },
    { name: "SterloCare", img: "/img/landing-page/clients/client-slide-8.webp" },
    { name: "Client", img: "/img/landing-page/clients/client-slide-9.webp" },
    { name: "Client", img: "/img/landing-page/clients/client-slide-10.webp" },
    { name: "Client", img: "/img/landing-page/clients/client-slide-11.webp" },
    { name: "Client", img: "/img/landing-page/clients/client-slide-12.webp" },
    { name: "Client", img: "/img/landing-page/clients/client-slide-13.webp" },
    { name: "Client", img: "/img/landing-page/clients/client-slide-14.webp" },
    { name: "Client", img: "/img/landing-page/clients/client-slide-15.webp" },
    { name: "Client", img: "/img/landing-page/clients/client-slide-16.webp" },
    { name: "Client", img: "/img/landing-page/clients/client-slide-17.webp" },
    { name: "Client", img: "/img/landing-page/clients/client-slide-18.webp" },
    { name: "Client", img: "/img/landing-page/clients/client-slide-19.webp" },
    { name: "Client", img: "/img/landing-page/clients/client-slide-20.webp" },
    { name: "Client", img: "/img/landing-page/clients/client-slide-21.webp" },
    { name: "Client", img: "/img/landing-page/clients/client-slide-22.webp" },

];

const svgIcon = (inner, color = "#004168") =>
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`
    );

const ICONS = {
    order: svgIcon(`<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="m7.5 4.27 9 5.15"/>`),
    inventory: svgIcon(`<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>`),
    shipment: svgIcon(`<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>`),
    responsive: svgIcon(`<path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"/><path d="M10 19v-3.96 3.15"/><path d="M7 19h5"/><rect width="6" height="10" x="16" y="12" rx="2"/>`),
    rocket: svgIcon(`<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>`),
    payu:
        "data:image/svg+xml;utf8," +
        encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><text x="12" y="15" text-anchor="middle" font-family="Arial, sans-serif" font-weight="800" font-size="9" fill="#00457C">Pay<tspan fill="#A6C307">U</tspan></text></svg>`
        ),
    layout: svgIcon(`<rect width="7" height="9" x="3" y="3" rx="1.5"/><rect width="7" height="5" x="14" y="3" rx="1.5"/><rect width="7" height="9" x="14" y="12" rx="1.5"/><rect width="7" height="5" x="3" y="16" rx="1.5"/>`),

};


const STACK_NODES = [
    {
        key: "template", num: "01", title: "Template",
        desc: " Proven, pre-built layouts customised with your brand — the quickest way to a clean, working static website.",
        tags: [
            { label: "Elementor", ic: "E", bg: "#5750E8", img: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/15.16.0/elementor.svg" },
            { label: "WordPress", ic: "W", bg: "#21759B", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
            { label: "Responsive Layouts", ic: "R", img: ICONS.layout },
            { label: "Quick Launch", ic: "Q", img: ICONS.rocket },],
    },
    {
        key: "design", num: "02", title: "Design",
        desc: "Interfaces drafted in Figma as part of our website design and development process, refined for how people actually read and scroll.",
        tags: [
            { label: "Figma", ic: "F", bg: "#0D1117", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
            { label: "UI/UX", ic: "UX", bg: "#5750E8" },
            { label: "Responsive Design", ic: "R", img: ICONS.responsive }, ,
        ],
    },
    {
        key: "development", num: "03", title: "Development",
        desc: "Built on modern, fast-loading foundations for reliable website development — custom code where a template can't keep up, powering our dynamic and custom website builds.",
        tags: [
            { label: "HTML5", ic: "5", bg: "#E44D26", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { label: "CSS3", ic: "3", bg: "#264DE4", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { label: "JavaScript", ic: "JS", bg: "#F0DB4F", dark: true, img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { label: "React", ic: "⚛", bg: "#20232A", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { label: "Node.js", ic: "N", bg: "#3C873A", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { label: "PHP", ic: "php", bg: "#777BB4", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
            { label: "MySQL", ic: "DB", bg: "#00758F", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { label: "Git", ic: "git", bg: "#F05032", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { label: "Bootstrap", ic: "B", bg: "#7952B3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
            { label: "jQuery", ic: "jQ", bg: "#0769AD", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
            { label: "Next.js", ic: "N▲", bg: "#111111", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { label: "Python", ic: "Py", bg: "#3776AB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { label: "Laravel", ic: "L", bg: "#FF2D20", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" }, { label: "GitHub", ic: "gh", bg: "#24292F", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { label: "WordPress", ic: "W", bg: "#21759B", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
            { label: "Docusaurus", ic: "D", bg: "#1B1B1D", img: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/15.16.0/docusaurus.svg" },
        ],
    },
    {
        key: "ecommerce", num: "04", title: "E-Commerce",
        desc: "Store platforms set up to actually sell — catalog, checkout, and payments in place from day one, built by our ecommerce development company team.",
        tags: [
            { label: "Shopify", ic: "S", bg: "#95BF47", dark: true, img: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/15.16.0/shopify.svg" },
            { label: "WordPress", ic: "W", bg: "#21759B", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
            { label: "WooCommerce", ic: "Wc", bg: "#96588A", img: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/15.16.0/woocommerce.svg" },
            { label: "Custom Store", ic: "C", bg: "#5750E8" },
            { label: "Razorpay", ic: "R", bg: "#072654", img: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/15.16.0/razorpay.svg" },
            { label: "Stripe", ic: "S", bg: "#635BFF", img: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/15.16.0/stripe.svg" },
            { label: "PayU", ic: "P", img: ICONS.payu },
            { label: "Order Tracking", ic: "O", img: ICONS.order },
            { label: "Inventory Tracking", ic: "I", img: ICONS.inventory },
            { label: "Shipment Tracking", ic: "A", img: ICONS.shipment },
        ],
    },
];

const SHOWCASE_DATA = {
    static: { label: "Static", url: "https://www.sterlobuild.com/", industry: "STATIC WEBSITE", title: "Product landing page website", type: "Static Website Development", func: ["Clean, fast-loading landing page layout", "Clear \"Schedule a Demo\" call-to-action", "Mobile-first, SEO-ready by default"], img: "/img/landing-page/static-website-sterlo.webp", fit: ["Static Website", "Website Design"] },
    business: { label: "Business", url: "https://www.greenstarexports.com/", industry: "BUSINESS", title: "Lead-generating business website", type: "Dynamic Website Development", func: ["Product pages built to convert enquiries", "Export & shipping details, clearly presented", "Structured for search and global reach"], img: "/img/landing-page/website-design-greenstar.webp", fit: ["Website Design", "Custom Website"] },
    woocommerce: { label: "WooCommerce", url: "https://feralroots.in/", industry: "WOOCOMMERCE", title: "Online store built to sell", type: "Ecommerce Website Development", func: ["Product catalog with offers & sale pricing", "Cart, secure checkout & payment gateway", "Customer accounts & order tracking"], img: "/img/landing-page/woocommerce-feral-roots.webp", fit: ["WooCommerce Store", "Custom E-Commerce", "Shopify Store"] },
    manufacture: { label: "Manufacture", url: "https://www.vatcommtechnologies.com/", industry: "MANUFACTURING", title: "Product-led manufacturer website", type: "Custom Website Development", func: ["Organised product catalog by category", "Industry-wise sections & brand partner showcase", "\"Request a Quote\" enquiry built in"], img: "/img/landing-page/custom-website-vatcomm.webp", fit: ["Custom Website", "Static Website"] },
    construction: { label: "Construction", url: "https://www.urcts.in/", industry: "CONSTRUCTION", title: "Project-showcase construction website", type: "Custom Website Development", func: ["Project galleries with clear service pages", "Enquiry forms & click-to-call on every page", "Credibility built with milestones & testimonials"], img: "/img/landing-page/ecommerce-development-vriksha.webp", fit: ["Custom Website", "Website Design"] },
    custom: { label: "Custom", url: "https://www.tgcc.com.my/", industry: "CUSTOM BUILD", title: "Feature-rich corporate training website", type: "Custom Website Development", func: ["Program listings with public & in-house categories", "Team, client & testimonial sections", "Custom enquiry flow and program calendar"], img: "/img/landing-page/custom-website-tgcc.webp", fit: ["Custom Website", "Custom E-Commerce"] },
};

const FIT_CARDS = [
    { key: "Website Design", title: "Website Design", desc: "Creative website designs that strengthen your brand and improve Customer engagement.", features: ["Responsive Layouts", "Modern UI/UX", "Mobile Friendly"], price: "₹7,500" },
    { key: "Static Website", title: "Static Website Development", desc: "Fast, secure, and cost-effective websites ideal for startups and growing businesses.", features: [" Fast Loading", "Secure Structure", "Easy Maintenance"], price: "₹7,500" },
    { key: "Custom Website", title: "Custom Website Development", desc: "Tailor-made web solutions built around your business requirements and growth goals.", features: ["Custom Features", "Scalable Architecture", "High Performance"], price: "₹15,000" },
    { key: "WooCommerce Store", title: "WooCommerce Development", desc: "Powerful WooCommerce stores designed for conversions and seamless shopping experiences.", features: ["Secure Checkout", "Product Management", "Store Optimization"], price: "₹20,000" },
    { key: "Custom E-Commerce", title: "E-Commerce Development", desc: "Robust online stores with advanced functionality and payment integrations.", features: ["Shopping Cart", "Payment Gateway", "Order Management"], price: "₹25,000" },
    { key: "Shopify Store", title: "Shopify Development", desc: "Professional Shopify stores built for speed, usability, and business growth.", features: ["Theme Customization", "Shopify Setup", "Performance Optimization"], price: "₹22,000" },
];

/* Maps each pricing plan to the website type it belongs to,
   so the enquiry modal never shows a mismatched type + plan. */
const PLAN_TO_TYPE = {
    "Website Design": "Dynamic Website",
    "Static Website": "Static Website",
    "Custom Website": "Custom Website",
    "WooCommerce Store": "Ecommerce Website",
    "Custom E-Commerce": "Ecommerce Website",
    "Shopify Store": "Ecommerce Website",
};

const JOURNEY_STEPS = [
    { num: "01", title: "Submit enquiry", desc: "One short form, or a WhatsApp message — whichever suits you best. Share your project details and goals easily." },
    { num: "02", title: "15-minute requirement call", desc: "We ask what matters and learn about your business, goals, content, and requirements before creating the design direction." },
    { num: "03", title: "Receive your proposal", desc: "We prepare a proposal covering your scope, timeline, deliverables, and cost, so everything is easy to understand upfront." },
    { num: "04", title: "Design begins", desc: "Work begins once you approve the proposal and are ready, with scope and direction guiding the process forward." },
];

const FAQ_ITEMS = [
    { key: "cost", q: "How much will it cost?", a: "Pricing depends on the type of site (static, dynamic, ecommerce, or custom) and the features you need." },
    { key: "timeline", q: "How long will development take?", a: "A static website typically takes about a week. Dynamic, custom, and ecommerce websites usually take 2–4 weeks depending on complexity." },
    { key: "redesign", q: "Can you redesign my existing website?", a: "Yes, as a website design company in Coimbatore, we can rebuild or refresh an existing site while keeping your content, SEO rankings, and branding intact." },
    { key: "selfedit", q: "Do you provide SEO-friendly development? ", a: "Yes. Every website we build — static, dynamic, or ecommerce — is structured for fast load times and search visibility from day one, which is why we're considered the best website development company choice for local businesses." },
];

const TESTIMONIAL_TYPES = ["Static Website", "Dynamic Website", "Custom Website", "Ecommerce Website"];

const TESTIMONIALS = [
    // ---------- STATIC ----------
    { key: "Static Website", quote: "PCS completely rebuilt our online presence. Our previous website lacked modern design, SEO structure, visitor tracking, and Google visibility. The team created a clean, responsive, user-friendly website with complete SEO support, keyword optimization, visitor tracking, heatmaps, performance monitoring, and email integrations. We now have better visibility, stronger user engagement insights, and a more effective digital presence. PCS was supportive, knowledgeable, and easy to work with throughout.", name: "ABB ", role: "Startup, Coimbatore", initials: "A", color: "#39C88E" },
    { key: "Static Website", quote: "We needed more than a website — we wanted a digital presence that reflected our consultancy and approach. PCS understood our requirements and guided us through every stage with patience and clarity. They delivered a responsive, brand-aligned website with clean structure and smooth navigation. Every suggestion was heard and implemented thoughtfully. The entire process felt collaborative, and the final result represents our brand perfectly while providing a professional experience for visitors.", name: "Riya", role: "Local Business, Coimbatore", initials: "R", color: "#16a34a" },
    { key: "Static Website", quote: "For an HR-focused business, having a credible and professional online presence is essential. PCS built us a fully responsive website with well-structured content, clear service presentation, and a layout that immediately builds visitor trust. Their communication throughout the project was excellent — always responsive, open to feedback, and consistent with timelines. We're genuinely happy with how our digital identity has come together and appreciate the effort behind every detail.", name: "ZKY", role: "Education, Coimbatore", initials: "SD", color: "#5750E8" },

    // ---------- DYNAMIC ----------
    { key: "Dynamic Website", quote: "Taking our brand online felt overwhelming, and we weren’t sure where to begin or manage the technical side. PCS patiently guided us through everything, from branding and website setup to SEO integration and payment gateway configuration. What stood out was their genuine effort to understand our vision and bring it to life. We now have a store that truly reflects our brand, along with the confidence to grow it further. Their support made the entire process simple, seamless, and stress-free.", name: "Feral Roots", role: "Service Business, Coimbatore", initials: "F", color: "#ed8337" },
    { key: "Dynamic Website", quote: "Earlier our  digital presence lacked the structure and SEO foundation needed to consistently reach the right audience. PCS approached the project strategically — working on product positioning, keyword-focused optimisation, user experience improvements, and overall online visibility in a way that felt deliberate and results-driven. Every change was practical and built for long-term impact rather than surface-level fixes. Their clarity, professionalism, and focused execution made the entire engagement genuinely worthwhile.", name: "Sterlo", role: "Healthcare, Coimbatore", initials: "S", color: "#0467DF" },
    { key: "Dynamic Website", quote: "We trusted PCS with 24 years of brand reputation, and they delivered beyond expectations. From our programme structure to the flow of every page, the website truly represents who we are and what we stand for. The team was professional, communicative, and genuinely committed to getting every detail right. If you’re looking for a web development partner who understands your business and delivers on promises, PCS is the team to call. Their attention to detail made the entire experience smooth, reliable, and rewarding.", name: "Tech - Global", role: "Construction, Coimbatore", initials: "T", color: "#F2A93B" },

];

const DEFAULTS = {
    heroCta: "Find Best Solution",
    heroSub: "Pick the closest match. We'll shape the rest of this page — and your solution — around it.",
    finalCta: "Start My Website Project",
    overviewEyebrow: "Website Development Service",
    overviewHeadingParts: ["Best", " website development company in Coimbatore"],
    overviewPara: "We build and maintain websites for businesses across Coimbatore and beyond — static, custom, and ecommerce alike. Every build is planned around load speed, mobile behaviour, and search visibility from the first sketch, so the site you launch with is the same one that keeps performing months later.",
    journeyBanner: <><b>You bring the business.</b> We'll handle the website.</>,

    // Find Your Fit section defaults
    fitEyebrow: "Find Your Fit",
    fitHeadingParts: ["Which website is ", "right for you?"],
    fitDesc: "Six starting points. Pick what matches your business, or talk it through with us first.",
};

/*
  Type select pannumbodhu etha section ku scroll aaganum?
  Options: "overview" | "stack" | "showcase" | "fit"
*/
const REDIRECT_TARGET = "overview";

const PERSONALIZE_MAP = {
    "Static Website": {
        stackNodes: ["template"], showcase: "static", fit: ["Static Website", "Website Design"],
        heroCta: "Find My Static Website Plan", finalCta: "Start My Static Website",
        heroSub: "Good — a static website means less complexity, faster load times, and a lower price. Here's how we'd shape yours below.",
        overviewEyebrow: "Static Website Development",
        overviewHeadingParts: ["Fast, affordable ", "static websites in Coimbatore"],
        overviewPara: "We design and build static websites for startups and small businesses across Coimbatore and beyond. Every page is planned around quick load times, clean mobile display, and search visibility from the first sketch, so the site you launch with is the same one that keeps performing months later.",
        fitEyebrow: "Static Website Plans",
        fitHeadingParts: ["Simple pricing for your ", "static website."],
        fitDesc: "Fast, affordable plans for a clean online presence — live in as little as a week.",
        testi: "Static Website", faq: ["cost", "timeline"],
        journeyBanner: <><b>You bring the idea.</b> We'll handle the quick, affordable build.</>,
    },
    "Dynamic Website": {
        stackNodes: ["design", "development"], showcase: "business", fit: ["Website Design", "Custom Website"],
        heroCta: "Find My Dynamic Website Plan", finalCta: "Start My Dynamic Website",
        heroSub: "Good — a dynamic website builds credibility and brings in enquiries. Here's how we'd shape yours below.",
        overviewEyebrow: "Dynamic Website Development",
        overviewHeadingParts: ["Scalable Dynamic", " websites built for growing businesses"],
        overviewPara: "We build and maintain dynamic websites for businesses across Coimbatore and beyond that need content to update easily. Every build is planned around database structure, mobile behaviour, and search visibility from the first sketch, so the site you launch with is the same one that keeps performing months later.",
        fitEyebrow: "Dynamic Website Plans",
        fitHeadingParts: ["Plans that help your ", "business get enquiries."],
        fitDesc: "Multi-page, easy-to-update websites built to look credible and convert visitors.",
        testi: "Dynamic Website", faq: ["timeline", "seo"],
        journeyBanner: <><b>You bring the business.</b> We'll handle the website that represents it.</>,
    },
    "Ecommerce Website": {
        stackNodes: ["design", "ecommerce"], showcase: "woocommerce", fit: ["WooCommerce Store", "Custom E-Commerce", "Shopify Store"],
        heroCta: "Find My Ecommerce Store Plan", finalCta: "Start My Ecommerce Store",
        heroSub: "Good — an ecommerce website gives you full control over your store and how you sell. Here's how we'd shape yours below.",
        overviewEyebrow: "Ecommerce Website Development",
        overviewHeadingParts: ["E-Commerce ", "websites built to sell from day one"],
        overviewPara: "We build and maintain ecommerce websites for businesses across Coimbatore and beyond — catalog, cart, and payments alike. Every build is planned around checkout speed, mobile behaviour, and search visibility from the first sketch, so the store you launch with is the same one that keeps converting months later.",
        fitEyebrow: "Ecommerce Store Plans",
        fitHeadingParts: ["Pick the store that ", "sells for you."],
        fitDesc: "WooCommerce, Shopify or a fully custom store — with payments and tracking ready from day one.",
        testi: "Ecommerce Website", faq: ["payments", "timeline"],
        journeyBanner: <><b>You bring the products.</b> We'll handle the store that sells them.</>,
    },
    "Custom Website": {
        stackNodes: ["design", "development"], showcase: "custom", fit: ["Custom Website", "Custom E-Commerce"],
        heroCta: "Find My Custom Build", finalCta: "Start My Custom Project",
        heroSub: "Good — you need something beyond a template. Here's how we'd shape your custom build below.",
        overviewEyebrow: "Custom Website Development",
        overviewHeadingParts: ["Custom-built websites ", "tailored to your business"],
        overviewPara: "We design and build custom websites for businesses across Coimbatore and beyond with unique workflows and requirements. Every build is planned around functionality, mobile behaviour, and search visibility from the first sketch, so the site you launch with is the same one that keeps performing months later.",
        fitEyebrow: "Custom Build Plans",
        fitHeadingParts: ["A build made around ", "your requirements."],
        fitDesc: "For businesses that need integrations, dashboards and workflows a template can't handle.",
        testi: "Custom Website", faq: ["redesign", "selfedit"],
        journeyBanner: <><b>You bring the requirements.</b> We'll handle the custom build.</>,
    },
};


const HERO_BADGES = [
    { label: "4.9 Google Reviews", img: "/img/landing-page/hero-img-1.webp" },
    { label: "15+ Technologies & Platforms", img: "/img/landing-page/hero-img-2.webp" },
    { label: "10+ Industries Served", img: "/img/landing-page/hero-img-3.webp" },
];

/* ============================================================
   SITE HEADER
   ============================================================ */
function SiteHeader() {
    return (
        <header className="pcs-site-header-wrap">
            <div className="pcs-site-header">
                <div className="pcs-header-logo">
                    <img src="/img/priyam-consultancy-logo.png" alt="Priyam Consultancy Services" />
                </div>

                <div className="pcs-header-right">
                    <a href="tel:+919677444048" className="pcs-header-call">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ed8337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span>+91 96774 44048</span>
                    </a>

                    <a href="#hero-choices" className="pcs-header-enquire-btn">
                        Build Your Website
                        <span>→</span>
                    </a>
                </div>
            </div>
        </header>
    );
}

/* ============================================================
   CONTACT FORM + FOOTER
   ============================================================ */
const SERVICE_OPTIONS = [
    "Website Design",
    "Static Website Development",
    "Custom Website Development",
    "WooCommerce Development",
    "Custom E-Commerce Development",
    "Shopify Development",
    "Other",
];

function ServiceDropdown({ value, onChange }) {
    const [open, setOpen] = useState(false);
    const wrapRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectOption = (opt) => {
        onChange({ target: { name: "service", value: opt } });
        setOpen(false);
    };

    return (
        <div className="svc-dd-wrap" ref={wrapRef}>
            <div
                className={`svc-dd-control ${open ? "open" : ""}`}
                onClick={() => setOpen((o) => !o)}
            >
                <span className={value ? "svc-dd-value" : "svc-dd-placeholder"}>
                    {value || "Select a Service"}
                </span>
                <span className="svc-dd-arrow">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </div>

            {open && (
                <ul className="svc-dd-menu">
                    {SERVICE_OPTIONS.map((opt) => (
                        <li
                            key={opt}
                            className={`svc-dd-item ${value === opt ? "active" : ""}`}
                            onClick={() => selectOption(opt)}
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            )}

            <input type="hidden" name="service" value={value} required />
        </div>
    );
}

function PricingDropdown({ value, onChange }) {
    const [open, setOpen] = useState(false);
    const wrapRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selected = FIT_CARDS.find((f) => f.key === value);
    const label = selected ? `${selected.title} — ${selected.price}` : "";

    const selectOption = (key) => {
        onChange({ target: { name: "plan", value: key } });
        setOpen(false);
    };

    return (
        <div className="svc-dd-wrap" ref={wrapRef}>
            <div
                className={`svc-dd-control ${open ? "open" : ""}`}
                onClick={() => setOpen((o) => !o)}
            >
                <span className={value ? "svc-dd-value" : "svc-dd-placeholder"}>
                    {label || "Select a Pricing Plan"}
                </span>
                <span className="svc-dd-arrow">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </div>

            {open && (
                <ul className="svc-dd-menu">
                    {FIT_CARDS.map((f) => (
                        <li
                            key={f.key}
                            className={`svc-dd-item ${value === f.key ? "active" : ""}`}
                            onClick={() => selectOption(f.key)}
                        >
                            {f.title} — {f.price}
                        </li>
                    ))}
                </ul>
            )}

            <input type="hidden" name="plan" value={value} required />
        </div>
    );
}

function HeroContactForm() {
    const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", service: "", plan: "", msg: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            name: form.name,
            email: form.email,
            phone: form.phone,
            company: form.company,
            service: form.service,
            plan: form.plan || "Not selected",
            message: form.msg,
            url: window.location.href,
        };

        emailjs
            .send(
                "service_8xw6k3r",
                "template_epqs3jd",
                templateParams,
                "XWRnXi4hK2SvmRG3q"
            )
            .then(() => {
                alert("Message Sent Successfully ✅");
                setForm({ name: "", email: "", phone: "", company: "", service: "", plan: "", msg: "" });
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to send ❌");
            });
    };

    return (
        <form onSubmit={sendEmail}>
            <div className="hero-form-row hero-form-row-2col">
                <div className="hero-form-field">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="hero-form-field">
                    <div className="hero-phone-wrap">
                        <span className="hero-phone-prefix">IN +91</span>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Mobile Number"
                            value={form.phone}
                            onChange={handleChange}
                            maxLength="10"
                            pattern="[0-9]{10}"
                            required
                        />
                    </div>
                </div>
            </div>

            <div className="hero-form-row hero-form-row-2col">
                <div className="hero-form-field">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="hero-form-field">
                    <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={form.company}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="hero-form-row">
                <div className="hero-form-field">
                    <ServiceDropdown
                        value={form.service}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="hero-form-row">
                <div className="hero-form-field">
                    <PricingDropdown
                        value={form.plan}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="hero-form-row">
                <div className="hero-form-field">
                    <textarea
                        name="msg"
                        placeholder="Your Message"
                        value={form.msg}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="hero-form-footer">
                <button type="submit" className="hero-form-btn">
                    Send Message
                    <span className="hero-form-btn-arrow">→</span>
                </button>
            </div>
        </form>
    );
}

function FooterSection() {
    return (
        <footer className="pcs-footer" id="contact">
            <div className="pcs-footer-inner">
                <div>
                    <div className="pcs-footer-logo-row">
                        <img src="/img/footer-logo.png" alt="PCS Logo" width="30%" />
                    </div>
                    <p className="pcs-footer-desc">
                        We are one of the fastest-growing full-service business solutions companies, delivering cutting-edge, result-driven strategies across digital marketing, technology, branding, and consulting to create the perfect blend of innovation and impact.
                    </p>
                </div>

                <div>
                    <h4 className="pcs-footer-heading">Contact Info</h4>
                    <div className="pcs-footer-contact-item">
                        <div className="pcs-footer-contact-icon">
                            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </div>
                        <div className="pcs-footer-contact-text">
                            <a href="tel:+919677444048">+91 96774 44048</a>
                        </div>
                    </div>
                    <div className="pcs-footer-contact-item">
                        <div className="pcs-footer-contact-icon">
                            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        </div>
                        <div className="pcs-footer-contact-text">
                            <a href="https://maps.app.goo.gl/Qh3YkXsp1nktfp9k9">1st Floor, SF.11/4, Pooja Garden, Kalapatti Road, Civil Aerodrome Post, Coimbatore - 641014</a>
                        </div>
                    </div>
                    <div className="pcs-footer-contact-item">
                        <div className="pcs-footer-contact-icon">
                            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
                        </div>
                        <div className="pcs-footer-contact-text">
                            <a href="mailto:sales@priyamconsultancy.com">sales@priyamconsultancy.com</a>
                        </div>
                    </div>
                    <div className="pcs-footer-socials">
                        <a href="https://www.linkedin.com/company/priyam-consultancy-services/" target="_blank" rel="noopener noreferrer" className="pcs-footer-social-btn pcs-footer-social-linkedin" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="#fff"><path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" /></svg>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61577125709962" target="_blank" rel="noopener noreferrer" className="pcs-footer-social-btn pcs-footer-social-facebook" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" fill="#fff"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/priyam_consultancy_services/" target="_blank" rel="noopener noreferrer" className="pcs-footer-social-btn pcs-footer-social-instagram" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.6" /><circle cx="17.4" cy="6.6" r="0.9" fill="#fff" stroke="none" /></svg>
                        </a>
                        <a href="https://x.com/services91032" target="_blank" rel="noopener noreferrer" className="pcs-footer-social-btn pcs-footer-social-x" aria-label="X">
                            <svg viewBox="0 0 24 24" fill="#fff"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.5 22H1.4l8.1-9.3L1 2h7.2l5 6.6L18.9 2zm-1.2 18h1.7L7.4 4H5.6l12.1 16z" /></svg>
                        </a>
                    </div>
                </div>

                <div className="pcs-footer-form-col" id="get-in-touch-form">
                    <div className="hero-form-card">
                        <p className="hero-form-title">Your Growth, <span>Our Mission.</span></p>
                        <p className="hero-form-sub">Fill in your details — we'll get back within 24 hours.</p>
                        <HeroContactForm />
                    </div>
                </div>
            </div>
        </footer>
    );
}

/* ============================================================
   FINAL CTA — particle-canvas section, matching the reference JSX
   ============================================================ */
function useCtaCanvas(canvasRef) {
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const ORANGE = "#ed8337";
        let W, H, particles = [], raf;

        function resize() {
            W = canvas.width = canvas.parentElement.offsetWidth;
            H = canvas.height = canvas.parentElement.offsetHeight;
        }

        function Particle() { this.reset(); }
        Particle.prototype.reset = function () {
            this.x = Math.random() * W;
            this.y = Math.random() * H;
            this.r = Math.random() * 2.2 + 0.6;
            this.type = Math.random() < 0.55 ? "dot" : Math.random() < 0.5 ? "ring" : "plus";
            this.speed = Math.random() * 0.35 + 0.08;
            this.dir = Math.random() * Math.PI * 2;
            this.alpha = Math.random() * 0.45 + 0.1;
            this.pulse = Math.random() * Math.PI * 2;
            this.pulseSpeed = Math.random() * 0.018 + 0.008;
            this.size = Math.random() * 4 + 2;
        };
        Particle.prototype.update = function () {
            this.x += Math.cos(this.dir) * this.speed;
            this.y += Math.sin(this.dir) * this.speed;
            this.pulse += this.pulseSpeed;
            this.dir += (Math.random() - 0.5) * 0.015;
            if (this.x < -20) this.x = W + 20;
            if (this.x > W + 20) this.x = -20;
            if (this.y < -20) this.y = H + 20;
            if (this.y > H + 20) this.y = -20;
        };
        Particle.prototype.draw = function () {
            const a = this.alpha * (0.7 + 0.3 * Math.sin(this.pulse));
            ctx.save();
            ctx.globalAlpha = a;
            ctx.strokeStyle = ctx.fillStyle = ORANGE;
            ctx.lineWidth = 1;
            if (this.type === "dot") {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r + Math.sin(this.pulse) * 0.4, 0, Math.PI * 2);
                ctx.fill();
            } else if (this.type === "ring") {
                const rr = this.size * (0.9 + 0.15 * Math.sin(this.pulse));
                ctx.beginPath(); ctx.arc(this.x, this.y, rr, 0, Math.PI * 2); ctx.stroke();
            } else {
                const s = this.size * (0.9 + 0.1 * Math.sin(this.pulse));
                ctx.beginPath();
                ctx.moveTo(this.x - s, this.y); ctx.lineTo(this.x + s, this.y);
                ctx.moveTo(this.x, this.y - s); ctx.lineTo(this.x, this.y + s);
                ctx.stroke();
            }
            ctx.restore();
        };

        function drawLines() {
            const dots = particles.filter(p => p.type === "dot");
            for (let i = 0; i < dots.length; i++) {
                for (let j = i + 1; j < dots.length; j++) {
                    const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 110) {
                        ctx.save();
                        ctx.globalAlpha = (1 - dist / 110) * 0.12;
                        ctx.strokeStyle = ORANGE; ctx.lineWidth = 0.7;
                        ctx.beginPath(); ctx.moveTo(dots[i].x, dots[i].y); ctx.lineTo(dots[j].x, dots[j].y); ctx.stroke();
                        ctx.restore();
                    }
                }
            }
        }

        function init() {
            resize();
            particles = [];
            const count = Math.floor((W * H) / 9000);
            for (let i = 0; i < Math.max(count, 28); i++) particles.push(new Particle());
        }

        function loop() {
            ctx.clearRect(0, 0, W, H);
            drawLines();
            particles.forEach(p => { p.update(); p.draw(); });
            raf = requestAnimationFrame(loop);
        }

        window.addEventListener("resize", resize);
        init();
        loop();

        return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
    }, []);
}

function CallCTASection({ headline, sub, ctaLabel }) {
    const canvasRef = useRef(null);
    useCtaCanvas(canvasRef);

    return (
        <section className="call-cta-section" id="final">
            <canvas ref={canvasRef} className="call-cta-particles" />

            <div className="call-cta-inner">
                <div className="partners-header1" style={{ textAlign: "center" }}>
                    <div className="partners-eyebrow" style={{ marginBottom: "20px", textAlign: "center" }}>
                        Not Sure Which Website You Need?
                    </div>
                </div>

                <h2 className="call-cta-heading">{headline}</h2>

                <p className="call-cta-sub">{sub}</p>

                <a href="tel:+919677444048" className="call-cta-phone">
                    <span className="call-cta-phone-icon">
                        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                    </span>
                    <span className="call-cta-phone-number">
                        <span className="tone-1">+91 </span>
                        <span className="tone-2">96774</span>{" "}
                        <span className="tone-3">44048</span>
                    </span>
                </a>

                <div className="call-cta-btns">
                    <a href="#get-in-touch-form" className="call-cta-btn-fill">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
                            <path d="M15 2v5h5" />
                            <path d="M10 9H8" />
                            <path d="M16 13H8" />
                            <path d="M16 17H8" />
                        </svg>
                        {ctaLabel}
                    </a>
                    <a
                        href="https://wa.me/919677444048"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="call-cta-btn-outline"
                    >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.79 14.13c-.24.68-1.19 1.25-1.94 1.41-.52.11-1.2.2-3.48-.75-2.92-1.21-4.8-4.17-4.95-4.36-.14-.19-1.19-1.58-1.19-3.02s.75-2.15 1.02-2.44c.24-.27.52-.34.7-.34h.5c.16 0 .38-.03.59.45.24.56.79 1.94.86 2.08.07.14.11.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.14-.29.29-.12.57.16.28.73 1.2 1.57 1.95 1.08.96 1.99 1.26 2.27 1.4.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.54.33.06.12.06.68-.18 1.36z" />
                        </svg>
                        WhatsApp Us
                    </a>
                </div>
            </div>
        </section>
    );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function WebsiteQuizLandingPage() {
    const [selectedType, setSelectedType] = useState(null);
    const [activeShowcase, setActiveShowcase] = useState("static");
    const [openFaq, setOpenFaq] = useState(null);
    const [bpDismissed, setBpDismissed] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalPlan, setModalPlan] = useState("");
    const [modalType, setModalType] = useState("");
    const [planLocked, setPlanLocked] = useState(false);
    const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "" });
    const [submitted, setSubmitted] = useState(false);
    const [sendError, setSendError] = useState(false);

    // Testimonials slider state
    const testiTrackRef = useRef(null);
    const [testiPaused, setTestiPaused] = useState(false);

    const copy = selectedType ? PERSONALIZE_MAP[selectedType] : null;

    const planPrice = (name) => (FIT_CARDS.find((f) => f.key === name) || {}).price || "";

    // plans shown in the modal dropdown: only those of the selected type
    const modalPlanOptions = copy && copy.fit
        ? FIT_CARDS.filter((f) => copy.fit.includes(f.key))
        : FIT_CARDS;

    const recommendedPlan = useMemo(() => {
        if (copy && copy.fit && copy.fit.length) return copy.fit[0];
        return selectedType || "Let's find out together";
    }, [copy, selectedType]);

    // ---- Testimonials: always exactly 6 cards ----
    const visibleTestimonials = useMemo(() => {
        const groups = TESTIMONIAL_TYPES.map((k) => TESTIMONIALS.filter((t) => t.key === k));
        const mixed = [];
        for (let i = 0; i < 3; i++) groups.forEach((g) => g[i] && mixed.push(g[i]));
        return mixed.slice(0, 6);
    }, []);

    const slideTesti = (dir) => {
        const el = testiTrackRef.current;
        if (!el) return;
        const card = el.querySelector(".fw-testi-card");
        if (!card) return;
        const step = card.offsetWidth + 18;
        const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
        if (dir > 0 && atEnd) el.scrollTo({ left: 0 });
        else if (dir < 0 && el.scrollLeft <= 4) el.scrollTo({ left: el.scrollWidth });
        else el.scrollBy({ left: dir * step });
    };

    // autoplay (pauses on hover)
    useEffect(() => {
        if (testiPaused) return;
        const id = setInterval(() => slideTesti(1), 3000);
        return () => clearInterval(id);
    }, [testiPaused]);

    // reset slider to start when type changes
    useEffect(() => {
        testiTrackRef.current?.scrollTo({ left: 0 });
    }, [selectedType]);

    const handleChoice = (value) => {
        setSelectedType(value);
        const map = PERSONALIZE_MAP[value];
        if (map && map.showcase) setActiveShowcase(map.showcase);
    };

    // selectedType maarina appuram, DOM update aana piragu REDIRECT_TARGET section ku scroll
    useEffect(() => {
        if (!selectedType) return;
        const t = setTimeout(() => {
            document
                .getElementById(REDIRECT_TARGET)
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
        return () => clearTimeout(t);
    }, [selectedType]);

    /*
      openLeadModal(plan)
      - Website type: always the one picked in the hero banner (read-only).
      - A plan card was clicked  -> plan is fixed and shown as read-only text
        (no dropdown).
      - Opened from blueprint / "Not Sure?" (no plan chosen) -> a dropdown is
        shown with ONLY the plans that belong to the selected type.
      - If no type was picked in the banner, the dropdown lists all plans and
        the type follows the plan the user chooses.
    */
    const openLeadModal = (plan) => {
        const fromCard = !!plan && FIT_CARDS.some((f) => f.key === plan);

        setModalPlan(fromCard ? plan : "");
        setPlanLocked(fromCard);
        setModalType(selectedType || (fromCard ? PLAN_TO_TYPE[plan] : "") || "Not sure yet");
        setSubmitted(false);
        setModalOpen(true);
    };

    const submitLead = (e) => {
        e.preventDefault();
        setSendError(false);
        const websiteType = modalType || selectedType || "Not sure yet";
        const price = planPrice(modalPlan);

        const templateParams = {
            name: leadForm.name,
            email: leadForm.email,
            phone: leadForm.phone,
            company: "",
            service: websiteType,
            plan: `${modalPlan || "Not selected"}${price ? " (" + price + ")" : ""}`,
            message: "",
            url: window.location.href,
        };

        emailjs
            .send(
                "service_8xw6k3r",
                "template_epqs3jd",
                templateParams,
                "XWRnXi4hK2SvmRG3q"
            )
            .then(() => {
                setSubmitted(true);
            })
            .catch((error) => {
                console.log(error);
                setSendError(true);
            });
    };

    const showcase = SHOWCASE_DATA[activeShowcase];
    const fitFiltered = !!(copy && copy.fit);
    const faqHighlight = copy ? copy.faq : [];

    // Overview section text (type-wise)
    const overviewEyebrow = copy?.overviewEyebrow || DEFAULTS.overviewEyebrow;
    const overviewHeading = copy?.overviewHeadingParts || DEFAULTS.overviewHeadingParts;
    const overviewPara = copy?.overviewPara || DEFAULTS.overviewPara;

    // Find Your Fit section text (type-wise)
    const fitEyebrow = copy?.fitEyebrow || DEFAULTS.fitEyebrow;
    const fitHeading = copy?.fitHeadingParts || DEFAULTS.fitHeadingParts;
    const fitDesc = copy?.fitDesc || DEFAULTS.fitDesc;

    return (
        <Layout
            title="Website Development Services in Coimbatore | PCS"
            description="Static, custom, e-commerce, Shopify and WooCommerce website development in Coimbatore."
        >
            <SEOHead />
            <GlobalStyles />
            <div className="fw-page">
                <SiteHeader />

                {/* HERO */}
                <section className="fw-hero" id="hero-choices">
                    <div className="fw-wrap fw-hero-grid">
                        <div>
                            <span className="fw-loc-pill"><span className="pin" />Website Development Company in Coimbatore</span>
                            <h1>What kind of website<br />are you <em>planning?</em></h1>
                            <p className="fw-hero-sub">{copy ? copy.heroSub : DEFAULTS.heroSub}</p>

                            <div className="fw-choice-grid">
                                {HERO_CHOICES.map((c) => (
                                    <button
                                        key={c.value}
                                        className={`fw-choice-card${selectedType === c.value ? " active" : ""}`}
                                        onClick={() => handleChoice(c.value)}
                                    >
                                        <span className="check" />
                                        <span className="tag">{c.tag}</span>
                                        <span className="name" style={{ display: "block" }}>{c.value}</span>
                                        <span className="desc" style={{ display: "block" }}>{c.desc}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="fw-hero-actions">
                                <a href="#fit" className="fw-btn fw-btn-fill">
                                    {copy ? copy.heroCta : DEFAULTS.heroCta} <span>→</span>
                                </a>
                                <span className="fw-hero-hint">
                                    {selectedType ? `// selected: ${selectedType}` : "// select an option above"}
                                </span>
                            </div>
                            <div>
                            </div>
                        </div>

                      <div className="fw-hero-img-wrap">
    {/* NEW: Badges above the banner image */}
    <div className="fw-badge-row">
        {HERO_BADGES.map((b) => (
            <div className="fw-badge" key={b.label}>
                <img src={b.img} alt={b.label} loading="lazy" />
            </div>
        ))}
    </div>

    <img src="/img/landing-page/woocommerce-development-banner.webp" alt="Website preview" />
</div>
                    </div>
                </section>

                {/* CLIENTS STRIP */}
                <section style={{ padding: "50px 0", borderTop: "1px solid var(--fw-line)", borderBottom: "1px solid var(--fw-line)" }}>
                    <div className="fw-wrap">
                        <div className="fw-clients-label"><span style={{ color: "rgb(237 131 55)" }}>Trusted by </span>Businesses Building in Coimbatore and Beyond</div>
                    </div>
                    <div className="fw-marquee">
                        <div className="fw-marquee-track">
                            {[...CLIENT_MARQUEE_LOGOS, ...CLIENT_MARQUEE_LOGOS].map((client, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                                    <img src={client.img} alt={client.name} loading="lazy" style={{ height: 50, width: "110%", objectFit: "cover" }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* OVERVIEW */}
                <section className="fw-section" id="overview">
                    <div className="fw-wrap" style={{ textAlign: "center" }}>
                        <span className="fw-eyebrow">{overviewEyebrow}</span>
                        <h2 style={{ fontSize: "clamp(24px,3.2vw,38px)", marginBottom: 18 }}>
                            <span style={{ color: "var(--fw-orange)" }}>{overviewHeading[0]}</span>{overviewHeading[1]}
                        </h2>
                        <p className="fw-overview-para">{overviewPara}</p>
                        <div className="fw-overview-stats">
                            <div className="fw-ov-stat"><div className="n">50+</div><div className="l">Projects Completed</div></div>
                            <div className="fw-ov-stat"><div className="n">40+</div><div className="l">Happy Clients</div></div>
                            <div className="fw-ov-stat"><div className="n">98%</div><div className="l">Client Satisfaction</div></div>
                        </div>
                    </div>
                </section>

                {/* PARTNER BADGES */}
                <section className="fw-partner-section">
                    <div className="fw-wrap">
                        <div className="fw-partner-card">
                            <div className="fw-partner-grid">
                                {PARTNER_BADGES.map((p) => (
                                    <div className="fw-partner-cell" key={p.name}>
                                        <img src={p.img} alt={p.name} loading="lazy" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>



                {/* STACK */}
                <section className="fw-section fw-navy-section" id="stack">
                    <div className="fw-wrap">
                        <div className="fw-head">
                            <span className="fw-eyebrow">Tech Stack</span>
                            <h2>Your website <span>design and development. </span></h2>
                            <p className="fw-text-mid">Every layer chosen for what your business actually needs — not a fixed package.</p>
                        </div>
                        <div className={`fw-stack-flow${copy ? " personalized" : ""}`}>
                            {STACK_NODES.map((n) => {
                                const hi = copy && copy.stackNodes.includes(n.key);
                                return (
                                    <div key={n.key} className={`fw-stack-node${hi ? " hi" : ""}`}>
                                        <div className="marker">{n.num}</div>
                                        <div className="body">
                                            <h3>{n.title}</h3>
                                            <p>{n.desc}</p>
                                            <div className="fw-tech-grid">
                                                {n.tags.map((t) => (
                                                    <div className="fw-tech-tile" key={t.label}>
                                                        <span className={`ic${t.dark ? " dark" : ""}${t.img ? " has-img" : ""}`} style={{ background: t.img ? undefined : t.bg }}>
                                                            {t.img ? <img src={t.img} alt={t.label} /> : t.ic}
                                                        </span>
                                                        <span className="lbl">{t.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* SHOWCASE */}
                <section className="fw-section" id="showcase">
                    <div className="fw-wrap">
                        <div className="fw-head">
                            <span className="fw-eyebrow">Showcase</span>
                            <h2>See what we can <span>build.</span></h2>
                            <p className="fw-text-mid">Switch the category — the preview and the details change with it.</p>
                        </div>
                        <div className="fw-cat-row">
                            {Object.entries(SHOWCASE_DATA).map(([key, d]) => (
                                <button
                                    key={key}
                                    className={`fw-cat-btn${activeShowcase === key ? " on" : ""}`}
                                    onClick={() => setActiveShowcase(key)}
                                >
                                    {d.label}
                                </button>
                            ))}
                        </div>
                        <div className="fw-showcase-grid">
                            <div className="fw-browser">
                                <div className="fw-browser-bar">
                                    <div className="dots"><span /><span /><span /></div>
                                    <a
                                        className="url"
                                        href={showcase.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {showcase.url}
                                    </a>
                                </div>
                                <a
                                    className="fw-browser-body"
                                    href={showcase.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ display: "block" }}
                                >
                                    <img src={showcase.img} alt={showcase.title} />
                                </a>
                            </div>
                            <div className="fw-showcase-meta-card">
                                <div className="fw-m-industry">{showcase.industry}</div>
                                <h3>{showcase.title}</h3>
                                <div className="fw-m-type">{showcase.type}</div>
                                <div className="fw-func-list">
                                    {showcase.func.map((f, i) => <div key={i}>{f}</div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FIND YOUR FIT */}
                <section className="fw-section fw-navy-section" id="fit">
                    <div className="fw-wrap">
                        <div className="fw-head">
                            <span className="fw-eyebrow">{fitEyebrow}</span>
                            <h2>{fitHeading[0]}<span>{fitHeading[1]}</span></h2>
                            <p className="fw-text-mid">{fitDesc}</p>
                        </div>
                        <div className={`fw-fit-grid${fitFiltered ? " filtered" : ""}`}>
                            {FIT_CARDS.map((f) => (
                                <div key={f.key} className={`fw-fit-card${copy && copy.fit.includes(f.key) ? " hi" : ""}`}>
                                    <h3>{f.title}</h3>
                                    <p className="fw-fit-desc">{f.desc}</p>
                                    <ul className="fw-fit-list">
                                        {f.features.map((feat) => <li key={feat}>{feat}</li>)}
                                    </ul>
                                    <div className="fw-fit-foot">
                                        <span className="fw-fit-price">From <b>{f.price}</b></span>
                                        <button className="fw-fit-cta" onClick={() => openLeadModal(f.key)}>Talk to an Expert →</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ textAlign: "center", marginTop: 36 }}>
                            <button className="fw-btn fw-btn-ghost" style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }} onClick={() => openLeadModal()}>
                                Not Sure? Talk to an Expert <span>→</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* JOURNEY */}
                <section className="fw-section">
                    <div className="fw-wrap">
                        <div className="fw-head">
                            <span className="fw-eyebrow">After You Reach Out</span>
                            <h2>Wondering what <span>happens next?</span></h2>
                            <p className="fw-text-mid">Straightforward steps, clear communication, and zero unnecessary fluff.</p>
                        </div>
                        <div className="fw-journey-scroll">
                            {JOURNEY_STEPS.map((s) => (
                                <div className="fw-jp-card" key={s.num}>
                                    <span className="fw-jp-num">{s.num}</span>
                                    <h3>{s.title}</h3>
                                    <p>{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="fw-section" style={{ background: "var(--fw-paper)" }}>
                    <div className="fw-wrap">
                        <div className="fw-head">
                            <span className="fw-eyebrow">Frequently Asked Questions</span>
                            <h2>Before you build a website, <span>you probably want to know…</span></h2>
                        </div>
                        <div className="fw-faq-list">
                            {FAQ_ITEMS.map((item) => (
                                <div key={item.key} className={`fw-faq-item${faqHighlight.includes(item.key) ? " hi" : ""}`}>
                                    <div className="fw-faq-q" onClick={() => setOpenFaq(openFaq === item.key ? null : item.key)}>
                                        <span>{item.q}</span>
                                        <span className="plus">{openFaq === item.key ? "−" : "+"}</span>
                                    </div>
                                    {openFaq === item.key && <div className="fw-faq-a">{item.a}</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="fw-section" id="testimonials">
                    <div className="fw-wrap">
                        <div className="fw-head">
                            <span className="fw-eyebrow">In Their Words</span>
                            <h2>What clients say <span>after launch.</span></h2>
                        </div>

                        <div
                            className="fw-testi-slider"
                            onMouseEnter={() => setTestiPaused(true)}
                            onMouseLeave={() => setTestiPaused(false)}
                        >
                            <div className="fw-testi-track" ref={testiTrackRef}>
                                {visibleTestimonials.map((t) => (
                                    <div key={t.name} className="fw-testi-card">
                                        <div className="fw-testi-stars">★★★★★</div>
                                        <p className="fw-testi-quote">"{t.quote}"</p>
                                        <div className="fw-testi-foot">
                                            <div className="fw-testi-avatar" style={{ background: t.color }}>{t.initials}</div>
                                            <div>
                                                <div className="fw-testi-name">{t.name}</div>
                                                <div className="fw-testi-role">{t.role}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="fw-testi-controls">
                                <button className="fw-testi-arrow" onClick={() => slideTesti(-1)} aria-label="Previous">←</button>
                                <button className="fw-testi-arrow" onClick={() => slideTesti(1)} aria-label="Next">→</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <CallCTASection
                    headline={copy ? <>Let's Build Your <span>{selectedType}</span></> : <>Tell Us About <span>Your Business</span></>}
                    sub={copy ? copy.heroSub : "We'll recommend the right website type, features and approximate investment based on your actual requirements."}
                    ctaLabel={copy ? copy.finalCta : DEFAULTS.finalCta}
                />

                {/* FOOTER */}
                <FooterSection />

                {/* BLUEPRINT TRACKER */}
                {selectedType && !bpDismissed && (
                    <div className="fw-blueprint show">
                        <div className="fw-bp-head">
                            <span className="fw-bp-title">Your Blueprint</span>
                            <button className="fw-bp-close" onClick={() => setBpDismissed(true)}>×</button>
                        </div>
                        <div className="fw-bp-row"><span className="k">Website type</span><span className="v">{selectedType}</span></div>
                        <div className="fw-bp-row"><span className="k">Recommended</span><span className="v">{recommendedPlan}</span></div>
                        <button className="fw-bp-cta" onClick={() => openLeadModal()}>Discuss This Blueprint →</button>
                    </div>
                )}

                {/* LEAD MODAL */}
                {modalOpen && (
                    <div className="fw-lead-overlay show" onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}>
                        <div className="fw-lead-modal">
                            <div className="fw-lm-head">
                                <div>
                                    <div className="fw-lm-title">Enquire Now</div>
                                    <p className="fw-lm-sub">Share your details — we'll get back within a day.</p>
                                </div>
                                <button className="fw-lm-close" onClick={() => setModalOpen(false)}>×</button>
                            </div>

                            {!submitted ? (
                                <form onSubmit={submitLead}>
                                    <div className="fw-lm-field">
                                        <label>Name</label>
                                        <input type="text" required value={leadForm.name} onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })} />
                                    </div>
                                    <div className="fw-lm-row2">
                                        <div className="fw-lm-field">
                                            <label>Email</label>
                                            <input type="email" required value={leadForm.email} onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })} />
                                        </div>
                                        <div className="fw-lm-field">
                                            <label>Phone</label>
                                            <input type="tel" required value={leadForm.phone} onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="fw-lm-field">
                                        <label>Website type</label>
                                        <input type="text" readOnly value={modalType || selectedType || "Not sure yet"} />
                                    </div>
                                    <div className="fw-lm-field">
                                        <label>Pricing plan</label>
                                        {planLocked ? (
                                            <input
                                                type="text"
                                                readOnly
                                                value={`${modalPlan} — ${planPrice(modalPlan)}`}
                                            />
                                        ) : (
                                            <select
                                                required
                                                value={modalPlan}
                                                onChange={(e) => {
                                                    const v = e.target.value;
                                                    setModalPlan(v);
                                                    if (!selectedType && PLAN_TO_TYPE[v]) setModalType(PLAN_TO_TYPE[v]);
                                                }}
                                            >
                                                <option value="">Select a plan</option>
                                                {modalPlanOptions.map((f) => (
                                                    <option key={f.key} value={f.key}>{f.title} — {f.price}</option>
                                                ))}
                                            </select>
                                        )}
                                    </div>
                                    <button type="submit" className="fw-lm-submit">Send Enquiry →</button>
                                    {sendError && <p className="fw-lm-note" style={{ color: "#d64545" }}>Something went wrong sending that — please try again, or call us directly at +91 96774 44048.</p>}
                                    <p className="fw-lm-note">{planLocked
                                        ? "Website type and plan are set from your selection. Submit and we'll get back to you within a day."
                                        : "Website type is set from what you picked above. Choose a pricing plan, then submit — we'll get back to you within a day."}</p>
                                </form>
                            ) : (
                                <div className="fw-lm-success">
                                    <div className="tick">✓</div>
                                    <h3 style={{ fontSize: 16, marginBottom: 8 }}>Message sent</h3>
                                    <p style={{ fontSize: 13.5, color: "var(--fw-text-mid)" }}>Thanks — we've received your enquiry and will get back to you within a day.</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}