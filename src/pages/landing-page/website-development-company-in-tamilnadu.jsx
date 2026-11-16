import { useState, useRef, useEffect, Fragment } from "react";
import { createPortal } from "react-dom";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import '../../css/landing-website-development.css';

// ── SEO (module scope: built once, not on every render) ──
const imageUrl = "https://www.pcsbusinesssolution.com/img/digital-marketing.png";
const PAGE_URL = "https://priyamconsultancy.com/landing-page/website-development-company-in-tamilnadu";
const LOGO_URL = "https://priyamconsultancy.com/img/priyam-consultancy-logo.png";
const SOCIAL_LINKS = [
    "https://www.facebook.com/profile.php?id=61577125709962",
    "https://www.linkedin.com/company/priyam-consultancy-services/",
    "https://www.instagram.com/priyam_consultancy_services/",
    "https://x.com/services91032",
    "https://g.co/kgs/rdTYdi6"
];

// Leadfeeder tracking script (injected into <head>)
const LEADFEEDER_SCRIPT = `
(function(ss,ex){
  window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));};
  (function(d,s){
    var fs=d.getElementsByTagName(s)[0];
    function ce(src){
      var cs=d.createElement(s);
      cs.src=src;
      cs.async=1;
      fs.parentNode.insertBefore(cs,fs);
    }
    ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js');
  })(document,'script');
})('JMvZ8gvBAAEa2pOd');
`;

const SEO_TITLE = "Website Development Company in Tamil Nadu | Priyam Consultancy";
const SEO_DESC = "Looking for a website development company in Tamil Nadu? Priyam Consultancy offers responsive, SEO-friendly websites for businesses. Get a free quote today! ";

function SEOHead() {
    return (
        <Head>
            <title>{SEO_TITLE}</title>
            <meta name="robots" content="index, follow" />
            <meta name="description" content={SEO_DESC} />
            <meta name="keywords" content="website development company, Website Development Company in Tamil Nadu,Website development Services, website development, Website development india, website design company in coimbatore,Website development, Website design" />
            <link rel="canonical" href="https://www.priyamconsultancy.com/landing-page/website-development-company-in-tamilnadu/" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Barlow+Condensed:wght@500;600;700&display=swap" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={SEO_TITLE} />
            <meta property="og:description" content={SEO_DESC} />
            <meta property="og:url" content="https://www.priyamconsultancy.com/landing-page/website-development-company-in-tamilnadu/" />
            <meta property="og:image" content={imageUrl} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={SEO_TITLE} />
            <meta name="twitter:description" content={SEO_DESC} />
            <meta name="twitter:image" content={imageUrl} />
            <script>{LEADFEEDER_SCRIPT}</script>
        </Head>
    );
}

// Page-scoped styles (only mounted on this page, so they never leak to other pages)
const GlobalStyles = () => (
    <style>{`
header.headerWrapper_ROKX, .footerTop_uYEV, .footerBottom_YdiN { display: none; }
body { background: #fff; }

/* ── Banner: title + typing line + subtitle + partner logos ── */
.vh-hero {
  position: relative; isolation: isolate; overflow: hidden;
  box-sizing: border-box; min-height: 90vh;
  display: flex; align-items: center; justify-content: flex-start; text-align: left;
  padding: 1rem 5% 1rem;
  background: #004168;
}
.vh-hero-content { position: relative; z-index: 3; width: 100%; max-width: 680px; font-family: 'Barlow Condensed', 'Poppins', sans-serif; }

/* Badge pill above the title */
.vh-badge {
  display: inline-flex; align-items: center; gap: 12px;
  margin-bottom: 1.6rem; padding: 10px 20px;
  font-family: 'Poppins', sans-serif; font-weight: 700;
  font-size: 0.65rem; letter-spacing: 0.08em; text-transform: uppercase;
  color: #ed8337;
  background: #ed83371a;
  border: 1px solid #ed833747;
  border-radius: 50px;
  -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px);
}
.vh-badge-dot { flex-shrink: 0; width: 10px; height: 10px; border-radius: 50%; background: #ed8337; }

.vh-hero-title {
  margin: 0;
  font-family: 'Barlow Condensed', 'Poppins', sans-serif;
  font-weight: 600; font-size: clamp(2.3rem, 4.3vw, 4rem);
  line-height: 1.1; letter-spacing: 0.01em;
  filter: drop-shadow(0 6px 18px rgba(0,0,0,0.4));
}
.vh-hero-line1 { display: block; color: #fff; }

/* caret (used by the typewriter title) */
.vh-caret {
  display: inline-block; width: 2px; height: 1em; margin-left: 3px;
  vertical-align: -0.12em; background: #7cc0ff;
  animation: vhBlink 1s steps(1) infinite;
}
@keyframes vhBlink { 50% { opacity: 0; } }

.vh-hero-sub {
  margin: 1.2rem 0 0;
  font-family: 'Barlow Condensed', 'Poppins', sans-serif;
  font-weight: 400; font-size: clamp(0.7rem, 1.6vw, 1rem);
  letter-spacing: 0.02em; color: rgba(255,255,255,0.88);
}

/* Partner logos row */
.vh-partner-grid {
  display: grid; grid-template-columns: repeat(7, 1fr); gap: 12px;
  margin-top: 2.4rem; max-width: 680px;
}
.vh-partner-cell {
  background: #fff; border-radius: 14px; height: 60px;
  display: flex; align-items: center; justify-content: center;
  padding: 8px; box-shadow: 0 8px 22px rgba(0,0,0,0.25);
  transition: transform 0.25s ease;
}
.vh-partner-cell:hover { transform: translateY(-3px); }
.vh-partner-cell img { max-width: 100%; max-height: 100%; object-fit: contain; display: block; }

/* screenshots layer (sits on the right side on desktop) */
.hero-slider-box { position: absolute; inset: 0; z-index: 1; overflow: hidden; pointer-events: none; }
.hero-bg-tilt { position: absolute; top: -30%; left: 42%; width: 80%; height: 160%; display: flex; gap: 20px; transform: rotate(12deg); }
.hero-bg-col { flex: 1; overflow: hidden; min-width: 0; }
.hero-bg-col:nth-child(n+4) { display: none; }
.hero-bg-track { display: flex; flex-direction: column; animation: heroBgUp 65s linear infinite; will-change: transform; }
.hero-bg-col:nth-child(even) .hero-bg-track { animation-name: heroBgDown; }
.hero-bg-track img {
  display: block; width: 100%; height: auto; aspect-ratio: 16 / 10;
  object-fit: cover; object-position: top; margin-bottom: 20px;
  border-radius: 8px; background: #0a5a8c;
  box-shadow: 0 12px 30px rgba(0,0,0,0.4);
}
/* overlay: solid on the left (for the text), fades out so the right side is clearly visible */
.hero-bg-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(90deg, #004168 0%, #004168 38%, rgba(0,65,104,0.78) 54%, rgba(0,65,104,0.2) 72%, rgba(0,65,104,0) 100%);
}
@keyframes heroBgUp { from { transform: translateY(0); } to { transform: translateY(-33.3333%); } }
@keyframes heroBgDown { from { transform: translateY(-33.3333%); } to { transform: translateY(0); } }
@media (prefers-reduced-motion: reduce) { .hero-bg-track { animation: none; } .vh-caret { animation: none; } }

/* ── Hero page-load animation (backwards fill so hover transforms still work afterwards) ── */
@keyframes vhFadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: none; } }
@keyframes vhFadeRight { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: none; } }
.vh-badge { animation: vhFadeRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) backwards; }
.vh-hero-title { animation: vhFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s backwards; }
.vh-hero-sub { animation: vhFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s backwards; }
.vh-partner-cell { animation: vhFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) backwards; }
.vh-partner-cell:nth-child(1) { animation-delay: 0.45s; }
.vh-partner-cell:nth-child(2) { animation-delay: 0.53s; }
.vh-partner-cell:nth-child(3) { animation-delay: 0.61s; }
.vh-partner-cell:nth-child(4) { animation-delay: 0.69s; }
.vh-partner-cell:nth-child(5) { animation-delay: 0.77s; }
.vh-partner-cell:nth-child(6) { animation-delay: 0.85s; }
@media (prefers-reduced-motion: reduce) {
  .vh-badge, .vh-hero-title, .vh-hero-sub, .vh-partner-cell { animation: none; }
}

/* ── Mobile / tablet: centered layout, gradient bg, tilted blurred screenshots behind ── */
@media (max-width: 900px) {
  .vh-hero {
    min-height: 0; padding: 4rem 20px 4rem;
    justify-content: center; text-align: center;
    background: linear-gradient(90deg, #004168, #0a5a8c);
  }
  .vh-hero-content { max-width: 100%; }
  .vh-badge { font-size: 0.68rem; padding: 9px 16px; gap: 9px; margin-bottom: 1.2rem; letter-spacing: 0.05em; }
  .vh-badge-dot { width: 8px; height: 8px; }
  .vh-hero-title { font-size: clamp(2.2rem, 9vw, 3.4rem); }
  .vh-hero-sub { font-size: 1rem; margin-top: 1rem; }
  .vh-partner-grid { grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 2rem auto 0; max-width: 360px; }
  .vh-partner-cell { height: 64px; padding: 8px 10px; border-radius: 12px; }

  .hero-bg-tilt { top: -25%; left: -35%; width: 170%; height: 150%; gap: 14px; }
  .hero-bg-track { animation-duration: 55s; }
  .hero-bg-track img { margin-bottom: 14px; opacity: 0.55; filter: blur(1.5px) brightness(0.85); }
  .hero-bg-overlay {
    background: linear-gradient(90deg, rgba(0,65,104,0.85), rgba(10,90,140,0.85));
    box-shadow: none;
  }
}

/* ── Trusted & Verified section ── */
.ts-section { background: #fff; padding: 3.5rem 5%; position: relative; overflow: hidden; }
.ts-inner { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
.ts-head { text-align: center; margin-bottom: 2rem; }
.ts-title { font-family: 'Poppins', sans-serif; color: #000; font-weight: 700; font-size: clamp(1.3rem, 2.4vw, 2rem); margin: 0; }
.ts-title span { color: #ed8337; font-style: italic; }

/* Eyebrow with side lines (only inside this section) */
.ts-head .partners-header1 { text-align: center; }
.ts-head .partners-eyebrow {
  display: inline-flex; align-items: center; justify-content: center; gap: 14px;
  font-family: 'Poppins', sans-serif; font-size: 1rem; font-weight: 900;
  letter-spacing: 0.14em; text-transform: uppercase; color: #ed8337;
  background: none; border: 0; padding: 0;
}
.ts-head .partners-eyebrow::before,
.ts-head .partners-eyebrow::after { content: ""; display: block; width: 46px; height: 1px; background: linear-gradient(90deg, rgba(237,131,55,0), #ed8337); }
.ts-head .partners-eyebrow::after { background: linear-gradient(90deg, #ed8337, rgba(237,131,55,0)); }

/* ── Stats bar ── */
.sb-section { background: #fff; padding: 0 0 2.2rem; font-family: 'Poppins', sans-serif; }
.sb-card { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); background: #fff; border: 1px solid #e6ebf3; border-bottom: 4px solid #ed8337; border-radius: 22px; padding: 1.4rem 1rem; box-shadow: 0 14px 40px rgba(0,65,104,0.09); }
.sb-item { display: flex; align-items: center; gap: 14px; padding: 0.4rem 1.2rem; border-left: 1px solid #e6ebf3; min-width: 0; }
.sb-item:first-child { border-left: 0; }
.sb-icon { flex-shrink: 0; width: 56px; height: 56px; border-radius: 50%; background: rgba(237,131,55,0.12); display: flex; align-items: center; justify-content: center; }
.sb-icon img { width: 26px; height: 26px; object-fit: contain; display: block; }
.sb-value { color: #004168; font-size: 1.9rem; font-weight: 800; line-height: 1.1; font-variant-numeric: tabular-nums; }
.sb-label { color: #6b7a94; font-size: 0.68rem; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; line-height: 1.4; margin-top: 2px; }
@media (max-width: 900px) {
  .sb-card { grid-template-columns: repeat(2, 1fr); row-gap: 1rem; }
  .sb-item:nth-child(3) { border-left: 0; }
}
@media (max-width: 480px) {
  .ts-section { padding: 2.5rem 16px; }
  .ts-head .partners-eyebrow { font-size: 0.72rem; gap: 8px; }
  .ts-head .partners-eyebrow::before, .ts-head .partners-eyebrow::after { width: 24px; }
  .sb-section { padding: 0 0 1.5rem; }
  .sb-card { padding: 1rem 0.4rem; }
  .sb-item { flex-direction: column; text-align: center; gap: 8px; padding: 0.8rem 0.4rem; }
  .sb-item:nth-child(n+3) { border-top: 1px solid #e6ebf3; }
  .sb-item:nth-child(3) { border-left: 0; }
  .sb-icon { width: 46px; height: 46px; }
  .sb-value { font-size: 1.5rem; }
  .sb-label { font-size: 0.6rem; }
}

/* ── Pricing plans ── */
.pp-section { background: linear-gradient(180deg, #f6f9fd 0%, #ffffff 100%); padding: 4.5rem 5% 5rem; font-family: 'Poppins', sans-serif; }
.pp-inner { max-width: 1200px; margin: 0 auto; }
.pp-head { text-align: center; margin-bottom: 3.2rem; }
.pp-title { color: #004168; font-weight: 700; font-size: clamp(1.4rem, 2.6vw, 2.2rem); margin: 0; }
.pp-title span { color: #ed8337; font-style: italic; }
.pp-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 44px 28px; align-items: stretch; max-width: 1080px; margin: 0 auto; }
/* scroll-reveal wrapper around each card (keeps the card's own hover/popular transforms untouched) */
.pp-cell { display: flex; min-width: 0; }
.pp-cell > .pp-card { flex: 1; min-width: 0; }
.pp-card { position: relative; display: flex; flex-direction: column; background: #fff; border: 2px solid transparent; border-radius: 22px; padding: 1.7rem 1.5rem 1.6rem; box-shadow: 0 10px 35px rgba(0,0,0,0.07); transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.3s ease; }
.pp-card:hover { transform: translateY(-6px); border-color: #ed8337; box-shadow: 0 18px 44px rgba(237,131,55,0.16); }
.pp-card-popular { border: 2px solid #ed8337; box-shadow: 0 18px 50px rgba(237,131,55,0.18); transform: translateY(-14px); }
.pp-card-popular:hover { transform: translateY(-20px); }
.pp-popular-badge { position: absolute; top: -13px; left: 50%; transform: translateX(-50%); background: linear-gradient(90deg, #004168, #ed8337); color: #fff; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 5px 16px; border-radius: 50px; white-space: nowrap; }
.pp-plan-tag { align-self: flex-start; background: #eef3fa; color: #004168; font-size: 0.72rem; font-weight: 600; padding: 4px 12px; border-radius: 50px; margin-bottom: 0.8rem; }
.pp-plan-desc { color: #666; font-size: 0.82rem; line-height: 1.6; margin: 0 0 1rem; min-height: 2.6em; }
.pp-price-box { border: 1.5px dashed rgba(237,131,55,0.55); background: #fffaf5; border-radius: 14px; padding: 0.9rem 1rem 0.8rem; margin-bottom: 1.2rem; }
.pp-price-top { display: flex; align-items: center; gap: 10px; margin-bottom: 4px; }
.pp-off { background: #e3f6ec; color: #16794a; font-size: 0.66rem; font-weight: 700; padding: 3px 9px; border-radius: 6px; }
.pp-was { color: #9aa3b2; text-decoration: line-through; font-size: 0.8rem; font-weight: 500; }
.pp-price-main { color: #004168; font-size: 2.1rem; font-weight: 800; line-height: 1.2; }
.pp-group { margin-bottom: 1rem; }
.pp-group-title { display: flex; align-items: center; gap: 10px; margin-bottom: 0.65rem; }
.pp-group-title span { color: #ed8337; font-weight: 700; font-size: 0.9rem; }
.pp-group-title::after { content: ""; flex: 1; height: 1px; background: rgba(237,131,55,0.4); }
.pp-list { list-style: none; margin: 0; padding: 0; }
.pp-list li { display: flex; align-items: center; gap: 9px; color: #444; font-size: 0.8rem; line-height: 1.4; padding: 5px 0; }
.pp-list li svg { flex-shrink: 0; }
.pp-btn { margin-top: auto; display: block; width: 100%; border: 0; cursor: pointer; font-family: inherit; box-sizing: border-box; text-align: center; text-decoration: none; background: linear-gradient(90deg, #ed8337, #f59a52); color: #fff !important; font-weight: 600; font-size: 0.9rem; padding: 0.6rem 1rem; border-radius: 12px; box-shadow: 0 8px 20px rgba(237,131,55,0.3); transition: transform 0.25s ease, box-shadow 0.25s ease; }
.pp-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(237,131,55,0.4); }
.pp-card-popular .pp-btn { background: linear-gradient(90deg, #004168, #0a5a8c); box-shadow: 0 8px 20px rgba(0,65,104,0.3); }
.pp-group:last-of-type { margin-bottom: 1.4rem; }
@media (max-width: 1000px) {
  .pp-grid { grid-template-columns: 1fr; max-width: 440px; gap: 34px; }
  .pp-card-popular, .pp-card-popular:hover { transform: none; }
  .pp-plan-desc { min-height: 0; }
}
@media (max-width: 480px) { .pp-section { padding: 3rem 16px 3.5rem; } .pp-price-main { font-size: 1.8rem; } }

/* ── Plan enquiry popup ── */
.pm-overlay { overscroll-behavior: contain; position: fixed; inset: 0; z-index: 99999; background: rgba(6,24,38,0.65); display: flex; align-items: center; justify-content: center; padding: 16px; overflow-y: auto; animation: pmFade 0.25s ease; }
.pm-box { overscroll-behavior: contain; position: relative; width: 100%; max-width: 520px; max-height: 94vh; overflow-y: auto; background: #fff; border-radius: 20px; padding: 2rem 1.6rem 1.6rem; box-shadow: 0 30px 80px rgba(0,0,0,0.35); animation: pmPop 0.3s ease; font-family: 'Poppins', sans-serif; }
.pm-close { position: absolute; top: 12px; right: 12px; width: 34px; height: 34px; border-radius: 50%; border: 0; background: #eef3fa; color: #004168; font-size: 1.2rem; line-height: 1; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s ease, color 0.2s ease; }
.pm-close:hover { background: #ed8337; color: #fff; }
.pm-title { color: #004168; font-size: 1.25rem; font-weight: 700; margin: 0 0 0.3rem; padding-right: 30px; }
.pm-title span { color: #ed8337; }
.pm-sub { color: #6b7a94; font-size: 0.82rem; margin: 0 0 1.2rem; }
.svc-locked { display: flex; align-items: center; justify-content: space-between; gap: 10px; width: 100%; box-sizing: border-box; padding: 0.8rem 1rem; border: 1.5px solid rgba(237,131,55,0.55); background: #fffaf5; color: #004168; font-weight: 600; font-size: 0.9rem; border-radius: 10px; cursor: not-allowed; user-select: none; }
.svc-locked svg { flex-shrink: 0; }
@keyframes pmFade { from { opacity: 0; } to { opacity: 1; } }
@keyframes pmPop { from { opacity: 0; transform: translateY(14px) scale(0.97); } to { opacity: 1; transform: none; } }
@media (max-width: 480px) { .pm-box { padding: 1.6rem 1.1rem 1.2rem; border-radius: 16px; } }

/* ── Recent work ── */
.wk-section { background: #0c4a6e; padding: 4.5rem 5% 5rem; font-family: 'Poppins', sans-serif; }
.wk-inner { max-width: 1200px; margin: 0 auto; }
.wk-head { text-align: center; margin-bottom: 3rem; }
.wk-section .partners-eyebrow { color: #ed8337; }
.wk-title { color: #fff; font-weight: 700; font-size: clamp(1.4rem, 2.6vw, 2.2rem); line-height: 1.3; margin: 0 0 0.6rem; }
.wk-title span { color: #ed8337; font-style: italic; }
.wk-sub { color: rgba(255,255,255,0.75); font-size: 0.95rem; margin: 0; }
.wk-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
.wk-card { display: block; text-decoration: none; background: #fff; border: 0; border-radius: 20px; padding: 0; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.25); transition: box-shadow 0.3s ease, transform 0.3s ease; }
.wk-card:hover { transform: translateY(-6px); }
.wk-frame { overflow: hidden; background: #f4f7fc; }
.wk-bar { display: flex; align-items: center; gap: 6px; height: 28px; padding: 0 12px; background: #eef2f8; border-bottom: 1px solid #e6ebf3; }
.wk-bar i { width: 8px; height: 8px; border-radius: 50%; background: #cfd6e2; display: block; }
.wk-bar i:nth-child(1) { background: #ff6b5e; }
.wk-bar i:nth-child(2) { background: #ffc233; }
.wk-bar i:nth-child(3) { background: #3ccf6e; }
.wk-bar span { margin-left: 8px; font-size: 0.66rem; color: #7b879b; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.wk-view { height: 250px; overflow: hidden; position: relative; background: #fff; }
.wk-view img { display: block; width: 100%; height: auto; transform: translateY(0); transition: transform 0.7s ease; will-change: transform; }
.wk-meta { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 16px 18px 18px; }
.wk-cat { display: block; color: #ed8337; font-size: 0.7rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 3px; }
.wk-name { color: #004168; font-size: 1.05rem; font-weight: 700; margin: 0; line-height: 1.3; }
@media (max-width: 1000px) { .wk-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .wk-grid { grid-template-columns: 1fr; gap: 22px; } .wk-section { padding: 3rem 16px 3.5rem; } .wk-view { height: 220px; } }

/* ── Client logos grid ── */
.cl-section { background: #f6f9fd; padding: 4rem 5% 4.5rem; font-family: 'Poppins', sans-serif; }
.cl-head { text-align: center; max-width: 760px; margin: 0 auto 2.6rem; }
.cl-title { color: #004168; font-weight: 700; font-size: clamp(1.4rem, 2.6vw, 2.2rem); line-height: 1.3; margin: 0 0 0.6rem; }
.cl-title span { color: #ed8337; font-style: italic; }
.cl-sub { color: #666; font-size: 0.95rem; line-height: 1.7; margin: 0; }
.cl-grid { max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }
/* .cl-item = scroll-reveal wrapper (holds the width), .cl-cell = the visible card */
.cl-item { box-sizing: border-box; width: calc((100% - 80px) / 6); display: flex; }
.cl-cell { box-sizing: border-box; width: 100%; background: #fff; border: 2px solid #e9edf4; border-radius: 14px; height: 92px; display: flex; align-items: center; justify-content: center; padding: 14px 18px; transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease; }
.cl-cell:hover { border-color: #ed833733; box-shadow: 0 10px 26px rgba(237,131,55,0.15); transform: translateY(-3px); }
.cl-cell img { max-width: 100%; max-height: 100%; object-fit: contain; }
@media (max-width: 1000px) { .cl-item { width: calc((100% - 48px) / 4); } }
@media (max-width: 640px) { .cl-section { padding: 2.5rem 16px 3rem; } .cl-grid { gap: 10px; } .cl-item { width: calc((100% - 20px) / 3); } .cl-cell { height: 70px; padding: 8px 10px; border-radius: 10px; } }

/* ── Get Started banner ── */
.gs-section { background: #fff; padding: 3.5rem 5%; font-family: 'Poppins', sans-serif; }
.gs-card { max-width: 1250px; margin: 0 auto; display: grid; grid-template-columns: 1.1fr 1fr; align-items: center; gap: 2.5rem; background: #ed833733; border-radius: 26px; padding: 3.5rem 2.6rem; box-shadow: 0 14px 40px rgba(0,65,104,0.08); overflow: hidden; }
.gs-left { min-width: 0; }
.gs-eyebrow { display: inline-flex; align-items: center; gap: 14px; color: #ed8337; font-size: 0.85rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 1rem; }
.gs-eyebrow::before, .gs-eyebrow::after { content: ""; display: block; width: 46px; height: 1px; background: linear-gradient(90deg, rgba(237,131,55,0), #ed8337); }
.gs-eyebrow::after { background: linear-gradient(90deg, #ed8337, rgba(237,131,55,0)); }
.gs-title { color: #004168; font-size: clamp(1.5rem, 2.6vw, 2.2rem); font-weight: 700; line-height: 1.25; margin: 0 0 0.8rem; }
.gs-title span { color: #ed8337; }
.gs-desc { color: #5a6577; font-size: 0.9rem; line-height: 1.7; margin: 0; max-width: 480px; }
.gs-right { display: flex; flex-direction: column; align-items: center; gap: 2.2rem; min-width: 0; }
.gs-phone { display: inline-flex; align-items: center; gap: 28px; text-decoration: none; }
.gs-phone-icon { position: relative; flex-shrink: 0; width: 52px; height: 52px; border-radius: 50%; background: linear-gradient(135deg, #004168, #0a5a8c); color: #fff; display: flex; align-items: center; justify-content: center; }
.gs-phone-icon::before, .gs-phone-icon::after { content: ""; position: absolute; inset: 0; border-radius: 50%; border: 2px solid #ed8337; opacity: 0; animation: gsPulse 2s ease-out infinite; pointer-events: none; }
.gs-phone-icon::after { animation-delay: 1s; }
.gs-phone-icon svg { animation: gsRing 2s ease-in-out infinite; transform-origin: 50% 50%; }
@keyframes gsPulse { 0% { transform: scale(1); opacity: 0.7; } 100% { transform: scale(1.9); opacity: 0; } }
@keyframes gsRing { 0%, 60%, 100% { transform: rotate(0deg); } 10% { transform: rotate(-18deg); } 20% { transform: rotate(16deg); } 30% { transform: rotate(-14deg); } 40% { transform: rotate(12deg); } 50% { transform: rotate(-6deg); } }
@media (prefers-reduced-motion: reduce) { .gs-phone-icon::before, .gs-phone-icon::after, .gs-phone-icon svg { animation: none; } }
.gs-phone-number { color: #004168; font-size: clamp(1.6rem, 2.8vw, 2.4rem); font-weight: 800; line-height: 1.1; white-space: nowrap; }
.gs-btns { display: flex; flex-wrap: wrap; gap: 12px; }
.gs-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; text-decoration: none; background: linear-gradient(90deg, #ed8337, #f59a52); color: #fff !important; font-weight: 600; font-size: 0.88rem; padding: 0.6rem 1.4rem; border-radius: 50px; box-shadow: 0 8px 20px rgba(237,131,55,0.3); transition: transform 0.25s ease, box-shadow 0.25s ease; }
.gs-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(237,131,55,0.4); }
.gs-btn-outline { display: inline-flex; align-items: center; justify-content: center; gap: 8px; text-decoration: none; background: transparent; color: #004168 !important; border: 1px solid rgba(0,65,104,0.3); font-weight: 600; font-size: 0.88rem; padding: 0.6rem 1.4rem; border-radius: 50px; transition: transform 0.25s ease, background 0.25s ease; }
.gs-btn-outline:hover { transform: translateY(-2px); background: rgba(255,255,255,0.6); }
@media (max-width: 900px) {
  .gs-card { grid-template-columns: 1fr; gap: 1.8rem; padding: 1.8rem 1.4rem; text-align: center; }
  .gs-desc { max-width: none; }
  .gs-btns { justify-content: center; }
}
@media (max-width: 480px) {
  .gs-section { padding: 2.5rem 16px; }
  .gs-eyebrow { font-size: 0.72rem; gap: 8px; }
  .gs-eyebrow::before, .gs-eyebrow::after { width: 24px; }
  .gs-btns { flex-direction: column; width: 100%; }
  .gs-btn, .gs-btn-outline { width: 100%; box-sizing: border-box; }
  .gs-phone-number { font-size: 1.5rem; }
}

/* ── Compact buttons (classes defined in landing-website-development.css) ── */
.hero-form-btn { padding-top: 0.65rem !important; padding-bottom: 0.65rem !important; }
.pcs-header-enquire-btn { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }

/* Render below-the-fold FAQ lazily (footer removed: its real height is far more than 800px on mobile, which made the page jump) */
.dm-faq-section { content-visibility: auto; contain-intrinsic-size: auto 800px; }

/* ══════════════════════════════════════════════════════
   Scroll reveal animations (play ONCE, then stay visible)
   Elements are hidden ONLY after JS adds .sr-ready to <html>,
   so SSR / no-JS / crawlers still see all content.
   ══════════════════════════════════════════════════════ */
.sr { transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1); transition-delay: var(--sr-delay, 0ms); }
.sr-ready .sr { opacity: 0; will-change: opacity, transform; }
.sr-ready .sr-up      { transform: translateY(50px); }
.sr-ready .sr-down    { transform: translateY(-50px); }
.sr-ready .sr-left    { transform: translateX(-60px); }
.sr-ready .sr-right   { transform: translateX(60px); }
.sr-ready .sr-zoom    { transform: scale(0.88); }
.sr-ready .sr-zoomout { transform: scale(1.12); }
.sr-ready .sr.sr-in { opacity: 1; transform: none; }

@media (prefers-reduced-motion: reduce) {
  .sr, .sr-ready .sr, .sr-ready .sr.sr-in { opacity: 1; transform: none; transition: none; }
}

/* ══════════════════════════════════════════════════════
   Wave heading (letters wave in one-by-one, wave again on hover)
   ══════════════════════════════════════════════════════ */
.wv, .wv .wv-word, .wv .wv-ch { color: inherit !important; font-style: inherit !important; }
.wv-word { display: inline-block; white-space: nowrap; }
.wv-ch { display: inline-block; }
.sr-ready .wv .wv-ch {
  opacity: 0; transform: translateY(0.9em) rotate(6deg);
  transition: opacity 0.5s ease var(--wv-d), transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) var(--wv-d);
}
.sr-ready .wv.wv-in .wv-ch { opacity: 1; transform: none; }
/* hover = wave runs again */
.wv.wv-in:hover .wv-ch { animation: wvWave 0.8s ease-in-out calc(var(--wv-d) / 3) 1; }
@keyframes wvWave { 0%, 100% { transform: translateY(0); } 40% { transform: translateY(-0.28em); } 70% { transform: translateY(0.08em); } }
@media (prefers-reduced-motion: reduce) {
  .sr-ready .wv .wv-ch, .sr-ready .wv.wv-in .wv-ch { opacity: 1; transform: none; transition: none; animation: none; }
}

/* ══════════════════════════════════════════════════════
   Section wrapper (NO slide / zoom animation now, sections are always visible.
   Only the inner headings / cards animate once.)
   ══════════════════════════════════════════════════════ */
.sec-wrap { overflow-x: clip; }

/* ══════════════════════════════════════════════════════
   Hover animations
   ══════════════════════════════════════════════════════ */
/* stats */
.sb-icon { transition: transform 0.4s ease, background 0.3s ease; }
.sb-item:hover .sb-icon { transform: scale(1.15) rotate(-8deg); background: rgba(237,131,55,0.25); }
.sb-value { transition: color 0.3s ease; }
.sb-item:hover .sb-value { color: #ed8337; }

/* partner logos (hero) */
.vh-partner-cell:hover { transform: translateY(-5px) scale(1.06); }
.vh-partner-cell img { transition: transform 0.3s ease; }
.vh-partner-cell:hover img { transform: scale(1.08); }

/* work cards */
.wk-card:hover { box-shadow: 0 22px 50px rgba(0,0,0,0.4); transform: translateY(-8px) scale(1.02); }
.wk-name { transition: color 0.3s ease; }
.wk-card:hover .wk-name { color: #ed8337; }

/* client logos */
.cl-cell img { transition: transform 0.35s ease, filter 0.35s ease; filter: grayscale(0.6); }
.cl-cell:hover img { transform: scale(1.12); filter: grayscale(0); }

/* pricing list items */
.pp-list li { transition: transform 0.25s ease, color 0.25s ease; }
.pp-list li:hover { transform: translateX(6px); color: #004168; }
.pp-plan-tag { transition: background 0.3s ease, color 0.3s ease; }
.pp-card:hover .pp-plan-tag { background: #ed8337; color: #fff; }

/* button shine sweep */
.pp-btn, .gs-btn, .hero-form-btn, .pcs-header-enquire-btn { position: relative; overflow: hidden; }
.pp-btn::after, .gs-btn::after, .hero-form-btn::after, .pcs-header-enquire-btn::after {
  content: ""; position: absolute; top: 0; left: -75%; width: 50%; height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.45), transparent);
  transform: skewX(-20deg); transition: left 0.6s ease; pointer-events: none;
}
.pp-btn:hover::after, .gs-btn:hover::after, .hero-form-btn:hover::after, .pcs-header-enquire-btn:hover::after { left: 130%; }
.hero-form-btn, .pcs-header-enquire-btn { transition: transform 0.25s ease, box-shadow 0.25s ease; }
.hero-form-btn:hover, .pcs-header-enquire-btn:hover { transform: translateY(-2px); }

/* FAQ */
.dm-faq-item { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.dm-faq-item:hover { transform: translateX(6px); box-shadow: 0 10px 26px rgba(0,65,104,0.12); }
.dm-faq-question .icon { transition: transform 0.3s ease, color 0.3s ease; }
.dm-faq-question:hover .icon { transform: rotate(90deg); color: #ed8337; }

/* header + footer */
.pcs-header-call { transition: transform 0.25s ease; }
.pcs-header-call:hover { transform: scale(1.06); }
.pcs-header-logo img { transition: transform 0.3s ease; }
.pcs-header-logo img:hover { transform: scale(1.05); }
.pcs-footer-social-btn { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.pcs-footer-social-btn:hover { transform: translateY(-5px) rotate(10deg) scale(1.1); box-shadow: 0 10px 20px rgba(0,0,0,0.3); }
.pcs-footer-contact-item { transition: transform 0.3s ease; }
.pcs-footer-contact-item:hover { transform: translateX(6px); }
.pcs-footer-contact-icon { transition: transform 0.3s ease, background 0.3s ease; }
.pcs-footer-contact-item:hover .pcs-footer-contact-icon { transform: scale(1.15) rotate(-10deg); }
.pcs-footer-desc {text-align: start; margin-top: 1rem;}
/* get-started phone */
.gs-phone { transition: transform 0.3s ease; }
.gs-phone:hover { transform: scale(1.05); }
.gs-btn-outline:hover { transform: translateY(-2px) scale(1.03); }

@media (prefers-reduced-motion: reduce) {
  .sb-icon, .sb-value, .wk-card, .cl-cell img, .pp-list li, .dm-faq-item, .pcs-footer-social-btn, .gs-phone { transition: none; }
}

/* ══════════════════════════════════════════════════════
   Banner animations (play ONCE when the banner is first seen)
   (.hero-ready = JS running, .hero-live = banner has been seen)
   ══════════════════════════════════════════════════════ */
/* turn off the one-time load animations, they are triggered by .hero-live below */
.vh-hero .vh-badge, .vh-hero .vh-kicker, .vh-hero .vh-hero-title, .vh-hero .vh-hero-sub, .vh-hero .vh-partner-cell { animation: none; }

/* before first view = hidden, so they can animate in */
.hero-ready:not(.hero-live) .vh-badge,
.hero-ready:not(.hero-live) .vh-kicker,
.hero-ready:not(.hero-live) .vh-hero-title,
.hero-ready:not(.hero-live) .vh-hero-sub,
.hero-ready:not(.hero-live) .vh-partner-cell { opacity: 0; }

/* seen = animate (once) */
.hero-live .vh-badge { animation: vhFadeRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) backwards; }
.hero-live .vh-kicker { animation: vhFadeRight 0.9s cubic-bezier(0.22, 1, 0.36, 1) backwards; }
.hero-live .vh-hero-title { animation: vhFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.25s backwards; }
.hero-live .vh-hero-sub { animation: vhFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.5s backwards; }
.hero-live .vh-partner-cell { animation: vhFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) backwards; }
.hero-live .vh-partner-cell:nth-child(1) { animation-delay: 1.0s; }
.hero-live .vh-partner-cell:nth-child(2) { animation-delay: 1.08s; }
.hero-live .vh-partner-cell:nth-child(3) { animation-delay: 1.16s; }
.hero-live .vh-partner-cell:nth-child(4) { animation-delay: 1.24s; }
.hero-live .vh-partner-cell:nth-child(5) { animation-delay: 1.32s; }
.hero-live .vh-partner-cell:nth-child(6) { animation-delay: 1.4s; }

@media (prefers-reduced-motion: reduce) {
  .hero-ready:not(.hero-live) .vh-badge,
  .hero-ready:not(.hero-live) .vh-kicker,
  .hero-ready:not(.hero-live) .vh-hero-title,
  .hero-ready:not(.hero-live) .vh-hero-sub,
  .hero-ready:not(.hero-live) .vh-partner-cell { opacity: 1; }
  .hero-live .vh-badge, .hero-live .vh-kicker, .hero-live .vh-hero-title, .hero-live .vh-hero-sub, .hero-live .vh-partner-cell { animation: none; }
}

/* ══════════════════════════════════════════════════════
   Title width fix + responsive
   ══════════════════════════════════════════════════════ */
.vh-hero-sub { font-family: 'Poppins', sans-serif; }
.vh-hero-title { overflow-wrap: normal; }

/* desktop: text stays on the left side only, so it never overlaps the screenshots */
@media (min-width: 901px) {
  .vh-hero-content { max-width: min(700px, 56%); }
  .vh-hero-title {
    font-family: 'Barlow Condensed', 'Poppins', sans-serif;
    font-weight: 700; letter-spacing: 0.015em;
    font-size: clamp(2rem, 3.3vw, 3.7rem);
    line-height: 1.12;
  }

  /* solid area is a bit longer, so screenshots don't show behind the text */
  .hero-bg-overlay {
    background: linear-gradient(90deg, #004168 0%, #004168 46%, rgba(0,65,104,0.78) 60%, rgba(0,65,104,0.2) 76%, rgba(0,65,104,0) 100%);
  }
}

/* tablet + mobile */
@media (max-width: 900px) {
  .vh-hero-title {
    font-family: 'Barlow Condensed', 'Poppins', sans-serif;
    font-weight: 700;
    font-size: clamp(1.9rem, 8vw, 3.2rem);
    line-height: 1.12;
  }
}

/* small phones */
@media (max-width: 480px) {
  .vh-hero { padding: 3rem 16px 3.5rem; }
  .vh-badge { font-size: 0.6rem; padding: 8px 14px; letter-spacing: 0.04em; }
  .vh-hero-sub { font-size: 0.95rem; }
  .vh-partner-grid { max-width: 320px; gap: 8px; }
  .vh-partner-cell { height: 56px; padding: 6px 8px; }
}

/* ══════════════════════════════════════════════════════
   Typewriter title: "WE BUILD" fixed + rotating words
   Only the last word (WEBSITES) drops to the next line, never the whole phrase.
   ══════════════════════════════════════════════════════ */
.vh-hero-title {
  position: relative; text-transform: uppercase;
  max-width: 12em;          /* "WE BUILD ECOMMERCE" fits, "... WEBSITES" wraps to line 2 */
}
.vh-sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
.vh-hero-title .vh-hero-line1 { display: inline; }
.vh-hero-title .vh-typed-wrap { display: inline; white-space: normal; }
.vh-hero-title .vh-typed { color: #4aa3ff; -webkit-text-fill-color: #4aa3ff; }
.vh-hero-title .vh-caret { margin-left: 4px; background: #7cc0ff; }

@media (min-width: 901px) {
  .vh-hero-content { max-width: min(820px, 58%); }
}
@media (max-width: 900px) {
  .vh-hero-title { margin-left: auto; margin-right: auto; }
}

/* ══════════════════════════════════════════════════════
   Big two-line heading: "Your Trusted / Digital Growth Partner"
   line 1 white, line 2 gradient (theme: light grey-blue → sky blue)
   ══════════════════════════════════════════════════════ */
.vh-kicker {
  margin: 0 0 1.1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700; letter-spacing: 0.005em; line-height: 1.08;
  font-size: clamp(2.2rem, 4vw, 3.8rem);
  filter: drop-shadow(0 6px 18px rgba(0,0,0,0.4));
}
.vh-kicker-l1 { display: block; color: #fff; }
.vh-kicker-l2 {
  display: inline-block; padding-bottom: 0.1em;
  color: transparent;
  background: linear-gradient(90deg, #e3e9f7 0%, #9dbdf2 45%, #4aa3ff 100%);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* typed line sits under the heading, a bit smaller than it */
@media (min-width: 901px) {
  .vh-kicker-l1, .vh-kicker-l2 { white-space: nowrap; }
  .vh-hero-title { font-size: clamp(1.8rem, 3vw, 3.3rem); }
}

/* ── Tablet + mobile (centered layout) ──
   Poppins is wide, so sizes are tuned so that:
   - "Digital Growth Partner" stays on ONE line  (heading = exactly 2 lines)
   - "WE BUILD BUSINESS / ECOMMERCE / INDUSTRY" fits on line 1, only "WEBSITES" drops to line 2 */
@media (max-width: 900px) {
  .vh-hero { padding: 3rem 20px 3.5rem; }
  .vh-hero-content { min-width: 0; }
  .vh-kicker { font-size: clamp(1.3rem, 6.4vw, 3.2rem); line-height: 1.12; margin-bottom: 0.9rem; }
  .vh-hero-title {
    font-size: clamp(1.3rem, 6vw, 2.7rem);
    line-height: 1.18;
    max-width: none;
  }
  .vh-hero-sub { font-size: clamp(0.85rem, 3.4vw, 1.05rem); }
}
@media (max-width: 480px) {
  .vh-hero { padding: 2.5rem 16px 3rem; }
  .vh-kicker { margin-bottom: 0.7rem; }
  .vh-hero-sub { margin-top: 0.9rem; }
  .vh-partner-grid { margin-top: 1.6rem; }
}

/* ══════════════════════════════════════════════════════
   MOBILE FIXES (keep this block LAST so it wins over the rules above)
   ══════════════════════════════════════════════════════ */
@media (max-width: 900px) {
  /* no sideways slides on small screens (avoids side gaps / overflow) */
  .sr-ready .sr-left,
  .sr-ready .sr-right { transform: translateY(30px); }
  .sr-ready .sr-zoom,
  .sr-ready .sr-zoomout { transform: translateY(20px); }

  /* FAQ columns stack tightly */
  .dm-faq-wrapper { display: flex; flex-direction: column; gap: 0; }
  .dm-faq-col { width: 100%; }
}
.pcs-footer-heading {     text-align: start; }

/* ── Footer responsive ── */
@media (max-width: 900px) {
  .pcs-footer .pcs-footer-inner {
    display: flex; flex-direction: column; gap: 2rem;
    width: 100%; max-width: 100%; box-sizing: border-box;
    padding: 2.5rem 20px 2rem;
  }
  /* every column (Reveal wrapper) takes the full width, so text is not squeezed to one side */
  .pcs-footer .pcs-footer-inner > * { width: 100%; max-width: 100%; min-width: 0; box-sizing: border-box; }

  .pcs-footer-logo-row { display: flex; justify-content: start; }
  .pcs-footer-logo-row img { width: 180px; max-width: 60%; height: auto;text-align: start;  }
  .pcs-footer-desc { max-width: none; margin: 1rem 0 0; text-align: start; font-size: 0.9rem; line-height: 1.7; }
  .pcs-footer-heading {     text-align: start; margin-bottom: 1.2rem; }

  .pcs-footer-contact-item { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 1rem; }
  .pcs-footer-contact-icon { flex-shrink: 0; }
  .pcs-footer-contact-text { flex: 1; min-width: 0; overflow-wrap: anywhere; line-height: 1.5; }
  .pcs-footer-socials { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 1.2rem; }
  .pcs-footer-form-col { width: 100%; }
}
/* keep text clear of the floating call / WhatsApp / quote buttons on the right */
@media (max-width: 600px) {
  .pcs-footer .pcs-footer-inner { padding: 2rem 16px 1.5rem; }
  .pcs-footer-contact-item { padding-right: 56px; }
  .pcs-footer-desc { font-size: 0.85rem; }
}
/* touch screens: no "stuck" hover shift on footer links */
@media (hover: none) {
  .pcs-footer-contact-item:hover,
  .pcs-footer-contact-item:hover .pcs-footer-contact-icon { transform: none; }
}
`}</style>
);

// ── Shared hooks ──────────────────────────────────────
function useWindowWidth() {
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
    useEffect(() => {
        let raf;
        const handler = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => setWidth(window.innerWidth));
        };
        window.addEventListener("resize", handler, { passive: true });
        return () => { window.removeEventListener("resize", handler); cancelAnimationFrame(raf); };
    }, []);
    return width;
}

// ── Scroll reveal: animates ONCE when first visible, never resets (page refresh = animates again) ──
function useInView(threshold = 0.15, margin = "0px 0px -6% 0px") {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (!("IntersectionObserver" in window)) { setInView(true); return; }
        const io = new IntersectionObserver(
            ([entry]) => {
                // Animate only when it enters from the BOTTOM (normal scroll down).
                // If it is already ABOVE the viewport (page restored mid-way / user scrolled up),
                // mark it as shown silently, so scrolling bottom → top never plays animations.
                const isAbove = !entry.isIntersecting && entry.boundingClientRect.top < 0;
                if (entry.isIntersecting || isAbove) {
                    setInView(true);
                    io.disconnect(); // once shown, stop watching → no replay on scroll up/down
                }
            },
            { threshold, rootMargin: margin }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [threshold, margin]);
    return [ref, inView];
}

// dir: "up" | "down" | "left" | "right" | "zoom" | "zoomout"
function Reveal({ children, dir = "up", delay = 0, className = "", as: Tag = "div", style, threshold, margin, ...rest }) {
    const [ref, inView] = useInView(threshold, margin);
    return (
        <Tag
            ref={ref}
            className={`sr sr-${dir}${inView ? " sr-in" : ""}${className ? " " + className : ""}`}
            style={{ "--sr-delay": `${delay}ms`, ...style }}
            {...rest}
        >
            {children}
        </Tag>
    );
}

// ── Wave heading: letters one-by-one wave-a vandhu settle aagum, hover-la wave aagum ──
function WaveText({ text, delay = 0, step = 35 }) {
    const [ref, inView] = useInView(0.2);
    let n = 0;
    const words = text.trim().split(" ");
    return (
        <span ref={ref} className={`wv${inView ? " wv-in" : ""}`} aria-label={text}>
            {words.map((w, wi) => (
                <Fragment key={wi}>
                    <span className="wv-word" aria-hidden="true">
                        {[...w].map((ch, ci) => (
                            <span className="wv-ch" key={ci} style={{ "--wv-d": `${delay + (n++) * step}ms` }}>{ch}</span>
                        ))}
                    </span>
                    {wi < words.length - 1 && " "}
                </Fragment>
            ))}
        </span>
    );
}

// lead = normal text, accent = orange part
function WaveHeading({ lead, accent, accentStyle, step = 35 }) {
    return (
        <>
            <WaveText text={lead} step={step} />{" "}
            <span style={accentStyle}>
                <WaveText text={accent} step={step} delay={lead.length * step} />
            </span>
        </>
    );
}

// ── FAQ Data ──────────────────────────────────────────
const faqData = [
    { q: "What does a website development company in Tamil Nadu do?", a: "A website development company plans, designs, builds and launches your business website. At PCS, we handle everything from custom design and mobile-friendly layouts to SEO setup, WhatsApp and Google Maps integration, and support after launch. We work with businesses across Tamil Nadu, including Chennai, Coimbatore, Madurai, Trichy, Salem, Tiruppur and Erode." },
    { q: "How do I choose the right website development company for my business?", a: "Look at their past work, client reviews, clear pricing and what support they give after launch. Check that they build mobile-friendly, SEO-ready sites and explain costs upfront. PCS has a 4.9 Google rating, 10+ years of experience and a portfolio across 10+ industries, so you can judge our work before you decide." },
    { q: "What website development services does PCS offer?", a: "We offer business websites, premium corporate websites, WooCommerce stores, Shopify stores and custom e-commerce development." },
    { q: "Do you provide website development in India outside Tamil Nadu? ", a: "Yes. We are based in Coimbatore and focus on Tamil Nadu, but we also build websites for businesses across India. We work with you by call, WhatsApp and video meeting, so you don’t need to be in the same city." },
    { q: "Will my website help customers find my business on Google? ", a: "Yes, it can. Our website development includes an SEO-ready structure, fast loading, mobile-friendly design and Google Maps integration, so search engines can read your site and customers can find you easily. Higher plans also include Google Analytics and Search Console setup. Rankings depend on competition and Google’s algorithm, so we don’t promise a specific position." },
    { q: "What is the difference between website design and website development?", a: "Website design is how your site looks: layout, colours, fonts and images. Website development is how it works: coding, speed, forms, security, SEO setup and integrations such as WhatsApp and Google Maps. A good website needs both, and our plans include design and development together, so you don’t need to hire two teams." },

];

// ── Site Header ────────────────────────────────────────
function SiteHeader() {
    return (
        <header className="pcs-site-header-wrap">
            <div className="pcs-site-header">
                <div className="pcs-header-logo">
                    <img src="/img/priyam-consultancy-logo.png" alt="Priyam Consultancy Services" decoding="async" />
                </div>

                <div className="pcs-header-right">
                    <a href="tel:+919677444048" className="pcs-header-call">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ed8337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span>+91 96774 44048</span>
                    </a>

                    <a href="#contact" className="pcs-header-enquire-btn">
                        Build Your Website
                        <span>→</span>
                    </a>
                </div>
            </div>
        </header>
    );
}

// ── Partner / certification logos ─────────────────────
const PARTNER_LOGOS = {
    meta: { name: "Meta Business Partner", img: "/img/landing-page/client-logo-1.webp" },
    shopify: { name: "Shopify Partner", img: "/img/landing-page/client-logo-2.webp" },
    microsoft: { name: "Microsoft Partner", img: "/img/landing-page/client-logo-3.webp" },
    odoo: { name: "Odoo Official Partner", img: "/img/landing-page/client-logo-10.webp" },
    gPartner: { name: "Google Partner", img: "/img/landing-page/client-logo-5.webp" },
    gRating: { name: "Google Rating 4.9/5", img: "/img/landing-page/client-logo-6.webp" },
};

// 6 logos under the hero subtitle
const HERO_PARTNER_LOGOS = Object.values(PARTNER_LOGOS);

// ── Stats bar ─────────────────────────────────────────
// `img` = your icon image path. If the file is missing, the built-in SVG (`icon`) shows instead.
const STATS = [
    { value: "10+", label: "Years of Consulting Experience", icon: "laurel", img: "/img/icon/stat-experience.webp" },
    { value: "15+", label: "Technologies & Platforms", icon: "layers", img: "/img/icon/stat-technologies.webp" },
    { value: "10+", label: "Industries Served", icon: "building", img: "/img/icon/stat-industries.webp" },
    { value: "98%", label: "Client Retention", icon: "heart", img: "/img/icon/stat-retention.webp" },
];

function StatIcon({ type, src, label }) {
    const [failed, setFailed] = useState(false);
    if (src && !failed) {
        return <img src={src} alt={label} width={26} height={26} loading="lazy" decoding="async" onError={() => setFailed(true)} />;
    }
    const p = { viewBox: "0 0 24 24", width: 26, height: 26, fill: "none", stroke: "#ed8337", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
    if (type === "heart") return (<svg {...p}><path d="M12 21s-7-4.6-9.3-9A5.3 5.3 0 0 1 12 6.5 5.3 5.3 0 0 1 21.3 12C19 16.4 12 21 12 21z" /></svg>);
    if (type === "layers") return (<svg {...p}><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /><path d="M3 17.5l9 5 9-5" /></svg>);
    if (type === "building") return (<svg {...p}><rect x="5" y="3" width="14" height="18" rx="1" /><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10 21v-3h4v3" /></svg>);
    return (<svg {...p}><path d="M7 20C3.5 17 3 11 6 6" /><path d="M17 20c3.5-3 4-9 1-14" /><path d="M6 9l-2.5-.5M5.5 13l-2.5.3M8 16.5l-2 1.2M18 9l2.5-.5M18.5 13l2.5.3M16 16.5l2 1.2" /><path d="M10 14l2 2 2-2" /></svg>);
}

// Counter: runs 0 → target once when the section is first seen, then stays at the final value
function useCountUp(target, start, duration = 1800) {
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!start) { setVal(0); return; }
        if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setVal(target);
            return;
        }
        let raf, t0;
        const step = (t) => {
            if (!t0) t0 = t;
            const p = Math.min((t - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3); // ease-out
            setVal(Math.round(eased * target));
            if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [target, start, duration]);
    return val;
}

function StatValue({ value, start }) {
    const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/); // "98%" → 98 + "%"
    const num = match ? parseFloat(match[1]) : 0;
    const suffix = match ? match[2] : "";
    const count = useCountUp(num, start);
    return <div className="sb-value">{count}{suffix}</div>;
}

function StatsBar() {
    const ref = useRef(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (!("IntersectionObserver" in window)) { setStarted(true); return; }
        const io = new IntersectionObserver(([entry]) => {
            const isAbove = !entry.isIntersecting && entry.boundingClientRect.top < 0;
            if (entry.isIntersecting || isAbove) {
                setStarted(true); // count up once only
                io.disconnect();
            }
        }, { threshold: 0.35 });
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section className="sb-section" aria-label="Key numbers" ref={ref}>
            <div className="sb-card">
                {STATS.map((s, i) => (
                    <Reveal dir="zoom" delay={i * 120} className="sb-item" key={s.label}>
                        <div className="sb-icon"><StatIcon type={s.icon} src={s.img} label={s.label} /></div>
                        <div>
                            <StatValue value={s.value} start={started} />
                            <div className="sb-label">{s.label}</div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

function TrustStripSection() {
    return (
        <section className="ts-section" aria-label="Verified partners and ratings">
            <div className="ts-inner">
                <div className="ts-head">
                    <Reveal dir="up" className="partners-header1">
                        <div className="partners-eyebrow" style={{ marginBottom: '20px' }}>Trusted &amp; Verified</div>
                    </Reveal>
                    <Reveal dir="up" delay={120}>
                        <h2 className="ts-title"><WaveHeading lead="Recognised by the Platforms" accent="You Trust" /></h2>
                    </Reveal>
                </div>
                <StatsBar />
            </div>
        </section>
    );
}

// ── Pricing plans ─────────────────────────────────────
const PRICING_PLANS = [
    {
        tag: "Starter Website",
        desc: "Get a clean, professional website for startups and small businesses going online.",
        off: "25% OFF", was: "₹13,400", price: "₹7,499", popular: false,
        groups: [
            { title: "Website", items: ["Up to 5 Pages", "Custom Design", "Mobile Responsive", "WhatsApp Integration", "Google Map Integration"] },
            { title: "Features", items: ["Social Media Integration", "Basic SEO Setup", "Basic Speed Optimization", "Basic Security"] },
        ],
    },
    {
        tag: "Business Website",
        desc: "Build a stronger online presence and win more enquiries for growing businesses.",
        off: "25% OFF", was: "₹25,665", price: "₹14,999", popular: true,
        groups: [
            { title: "Website", items: ["Up to 15 Pages", "Custom Design", "Mobile Responsive", "WhatsApp Integration", "Google Map Integration"] },
            { title: "Features", items: ["Social Media Integration", "SEO Setup", "Standard Speed Optimization", "SSL + Security", "Google Analytics"] },
        ],
    },
    {
        tag: "Premium Corporate Website",
        desc: "Present your company with a polished website built for corporate brands.",
        off: "25% OFF", was: "₹35,999", price: "₹24,999", popular: false,
        groups: [
            { title: "Website", items: ["Up to 25 Premium Pages", "Premium UI/UX Design", "Mobile Responsive", "WhatsApp Integration", "Google Map Integration"] },
            { title: "Features", items: ["Social Media Integration", "Advanced SEO Setup", "Advanced Speed Optimization", "Advanced Security", "Google Analytics", "Search Console Setup"] },
        ],
    },
    {
        tag: "Starter E-Commerce Development",
        desc: "Launch your first online store with a focused range and simple checkout.",
        off: "17% OFF", was: "₹30,000", price: "₹15,499", popular: false,
        groups: [
            { title: "Store", items: ["Up to 50 Products", "Product Catalog Setup", "Payment Gateway Integration", "Mobile Responsive", "WhatsApp Integration"] },
            { title: "Features", items: ["Inventory & Order Tracking", "Basic SEO Setup", "Speed Optimization", "SSL + Security", "Admin Panel"] },
        ],
    },
    {
        tag: "Growth E-Commerce Development",
        desc: "Scale your store with more products, checkout and stronger sales features.",
        off: "30% OFF", was: "₹35,000", price: "₹24,999", popular: false,
        groups: [
            { title: "Store", items: ["Up to 100 Products", "Product Variants Management", "Payment & Shipping Integration", "Mobile Responsive", "WhatsApp Integration"] },
            { title: "Features", items: ["Inventory & Order Tracking", "SEO Setup", "Speed Optimization", "SSL + Security", "Admin Panel"] },
        ],
    },
    {
        tag: "Premium E-Commerce Development",
        desc: "Run a complete online store with advanced features for large, growing catalogs.",
        off: "33% OFF", was: "₹50,000", price: "₹34,999", popular: false,
        groups: [
            { title: "Store", items: ["Up to 200 Products", "Custom Product & Category Setup", "Payment & Shipping Integration", "Mobile Responsive", "WhatsApp Integration"] },
            { title: "Features", items: ["Inventory & Order Tracking", "Advanced SEO Setup", "Advanced Speed Optimization", "Advanced Security", "Google Analytics", "Admin Panel"] },
        ],
    },
];

function PlanModal({ plan, onClose }) {
    // Close on Esc. The page is never scrolled or locked, so the user stays exactly where they clicked.
    useEffect(() => {
        const y = window.scrollY;
        const onKey = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("keydown", onKey);
            if (Math.abs(window.scrollY - y) > 2) window.scrollTo({ top: y, behavior: "instant" });
        };
    }, [onClose]);

    return createPortal(
        <div className="pm-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <div className="pm-box" role="dialog" aria-modal="true" aria-label={`Enquire about ${plan.tag}`}>
                <button type="button" className="pm-close" onClick={onClose} aria-label="Close">×</button>
                <h3 className="pm-title">Get Started with <span>{plan.tag}</span></h3>
                <p className="pm-sub">Fill in your details — we'll get back within 24 hours.</p>
                <HeroContactForm lockedService={plan.tag} onSuccess={onClose} />
            </div>
        </div>,
        document.body
    );
}

function PricingSection() {
    const [selectedPlan, setSelectedPlan] = useState(null);
    return (
        <section className="pp-section" id="pricing">
            <div className="pp-inner">
                <div className="pp-head">
                    <Reveal dir="up" className="partners-header1" style={{ textAlign: 'center' }}>
                        <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Customized Website Development Services for Every Need</div>
                    </Reveal>
                    <Reveal dir="up" delay={120}>
                        <h2 className="pp-title"><WaveHeading lead="Website Plans That Fit" accent="Your Budget" /></h2>
                    </Reveal>
                </div>

                <div className="pp-grid">
                    {PRICING_PLANS.map((plan, i) => (
                        <Reveal dir="up" delay={(i % 3) * 140} className="pp-cell" key={plan.tag}>
                            <div className={`pp-card${plan.popular ? " pp-card-popular" : ""}`}>
                                {plan.popular && <span className="pp-popular-badge">Most Popular</span>}
                                <span className="pp-plan-tag">{plan.tag}</span>
                                <p className="pp-plan-desc">{plan.desc}</p>

                                <div className="pp-price-box">
                                    {plan.off && (
                                        <div className="pp-price-top">
                                            <span className="pp-off">{plan.off}</span>
                                            <span className="pp-was">{plan.was}</span>
                                        </div>
                                    )}
                                    <div className="pp-price-main">{plan.price}</div>
                                </div>

                                {plan.groups.map((g) => (
                                    <div className="pp-group" key={g.title}>
                                        <div className="pp-group-title"><span>{g.title}</span></div>
                                        <ul className="pp-list">
                                            {g.items.map((it) => (
                                                <li key={it}>
                                                    <svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true">
                                                        <circle cx="10" cy="10" r="10" fill="#004168" />
                                                        <path d="M5.8 10.4l2.8 2.8 5.6-5.8" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    {it}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}

                                <button type="button" className="pp-btn" onClick={() => setSelectedPlan(plan)}>Get Started Now</button>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
            {selectedPlan && <PlanModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />}
        </section>
    );
}

// ── Recent work (screenshot scrolls inside card on hover) ──
const WORK_ITEMS = [
    { img: "/img/work-1.webp", category: "Corporate Training", title: "Tech Global", domain: "tgcc.com.my" },
    { img: "/img/work-4.webp", category: "Manufacturing", title: "Vatcomm Technologies", domain: "vatcommtechnologies.com" },
    { img: "/img/work-3.webp", category: "Exports", title: "Greenstar Exports", domain: "greenstarexports.com" },
    { img: "/img/work-2.webp", category: "Construction", title: "Vriksha Builders", domain: "vrikshabuilders.com" },
    { img: "/img/work-6.webp", category: "E-Commerce", title: "Feral Roots", domain: "feralroots.in" },
    { img: "/img/work-14.webp", category: "Design & Construction", title: "URC Technology Services", domain: "urcts.in" },
];

// Measures the real image height and scrolls it inside the card window
function WorkCard({ w }) {
    const viewRef = useRef(null);
    const imgRef = useRef(null);

    const play = () => {
        const view = viewRef.current, img = imgRef.current;
        if (!view || !img) return;
        const dist = img.offsetHeight - view.offsetHeight;
        if (dist <= 0) return;
        const secs = Math.min(9, Math.max(3, dist / 200));
        img.style.transition = `transform ${secs}s linear`;
        img.style.transform = `translateY(-${dist}px)`;
    };
    const reset = () => {
        const img = imgRef.current;
        if (!img) return;
        img.style.transition = "transform 0.5s ease";
        img.style.transform = "translateY(0)";
    };

    return (
        <div
            className="wk-card"
            onMouseEnter={play}
            onMouseLeave={reset}
            onFocus={play}
            onBlur={reset}
            onTouchStart={play}
        >
            <div className="wk-frame">
                <div className="wk-bar"><i /><i /><i /><span>{w.domain}</span></div>
                <div className="wk-view" ref={viewRef}>
                    <img ref={imgRef} src={w.img} alt={`${w.title} website`} loading="lazy" decoding="async" />
                </div>
            </div>
            <div className="wk-meta">
                <div>
                    <span className="wk-cat">{w.category}</span>
                    <h3 className="wk-name">{w.title}</h3>
                </div>
            </div>
        </div>
    );
}

function RecentWorkSection() {
    return (
        <section className="wk-section" id="our-work">
            <div className="wk-inner">
                <div className="wk-head">
                    <Reveal dir="up" className="partners-header1" style={{ textAlign: 'center' }}>
                        <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Recent Work</div>
                    </Reveal>
                    <Reveal dir="up" delay={120}>
                        <h2 className="wk-title"><WaveHeading lead="Websites We’ve Built That" accent="Are Already Driving Results" step={25} /></h2>
                    </Reveal>
                    <Reveal dir="up" delay={220}>
                        <p className="wk-sub">See how we’ve helped businesses build a stronger online presence.</p>
                    </Reveal>
                </div>

                <div className="wk-grid">
                    {WORK_ITEMS.map((w, i) => (
                        <Reveal key={w.title} dir="up" delay={(i % 3) * 140}>
                            <WorkCard w={w} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ── Hero background slider ────────────────────────────
const HERO_BG_SLIDES = Array.from({ length: 11 }, (_, i) => `/img/landing-page/landing-site-${i + 1}.webp`);

// 4 columns, each uses all images in a different order (so columns never look identical)
const HERO_BG_COLUMNS = [0, 2, 4, 1].map((shift) =>
    HERO_BG_SLIDES.map((_, i) => HERO_BG_SLIDES[(i + shift) % HERO_BG_SLIDES.length])
);

function HeroImageSlider() {
    return (
        <div className="hero-slider-box" aria-hidden="true">
            <div className="hero-bg-tilt">
                {HERO_BG_COLUMNS.map((col, ci) => (
                    <div className="hero-bg-col" key={ci}>
                        <div className="hero-bg-track">
                            {/* list is tripled so the loop is seamless and always covers the hero */}
                            {[...col, ...col, ...col].map((src, i) => (
                                <img key={i} src={src} alt="" loading="eager" decoding="async" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="hero-bg-overlay" />
        </div>
    );
}

// ── Hero ────────────────────────────────────────────
// Rotating words typed after the fixed "WE BUILD"
const TYPE_WORDS = ["BUSINESS WEBSITES", "ECOMMERCE WEBSITES", "INDUSTRY WEBSITES"];

// Typewriter: types a word, holds, erases, moves to the next word, loops forever.
// `active` flips to true ONCE (first time the banner is seen) and never goes back to false,
// so scrolling up/down never stops or restarts it.
function useTypewriter(words, { type = 90, erase = 45, hold = 1500, active = true } = {}) {
    const [text, setText] = useState("");
    const st = useRef({ w: 0, i: 0, del: false });

    useEffect(() => {
        if (!active) return;
        if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setText(words[0]);
            return;
        }
        let t;
        const tick = () => {
            const s = st.current;
            const word = words[s.w];
            let delay = s.del ? erase : type;
            if (!s.del) {
                s.i++;
                setText(word.slice(0, s.i));
                if (s.i === word.length) { s.del = true; delay = hold; }
            } else {
                s.i--;
                setText(word.slice(0, s.i));
                if (s.i === 0) { s.del = false; s.w = (s.w + 1) % words.length; delay = 350; }
            }
            t = setTimeout(tick, delay);
        };
        t = setTimeout(tick, 600);
        return () => clearTimeout(t);
    }, [active, words, type, erase, hold]);

    return text;
}

// "WE BUILD" stays fixed (static, no wave), then BUSINESS / ECOMMERCE / INDUSTRY WEBSITES type in a loop
function HeroTitle({ active }) {
    const typed = useTypewriter(TYPE_WORDS, { active });
    // trailing space becomes a non-breaking space so the caret never jumps alone to the next line
    const shown = typed.replace(/ $/, "\u00A0");

    return (
        <h1 className="vh-hero-title">
            {/* SEO / screen readers: full text always in the DOM */}
            <span className="vh-sr">We Build Business Websites, Ecommerce Websites, Industry Websites</span>

            <span className="vh-hero-line1" aria-hidden="true">We Build</span>{" "}
            <span className="vh-typed-wrap" aria-hidden="true">
                <span className="vh-typed">{shown}</span>
                <span className="vh-caret" />
            </span>
        </h1>
    );
}

function HeroSection() {
    // Banner entrance animation plays ONCE (first time the banner is seen)
    const [ref, seen] = useInView(0.2, "0px");
    const [ready, setReady] = useState(false);
    useEffect(() => { setReady(true); }, []);

    // Typewriter starts once when the banner is first seen, then keeps running.
    // No live observer anymore → scrolling up/down never stops or restarts it.
    const typing = seen;

    return (
        <section ref={ref} className={`vh-hero${ready ? " hero-ready" : ""}${seen ? " hero-live" : ""}`} id="about">
            <HeroImageSlider />
            <div className="vh-hero-content">
                <div className="vh-kicker">
                    <span className="vh-kicker-l1">Your Trusted</span>
                    <span className="vh-kicker-l2">Digital Growth Partner</span>
                </div>

                <HeroTitle active={typing} />

                <p className="vh-hero-sub">Tamil Nadu’s Expert Website Development Partner</p>

                <div className="vh-partner-grid">
                    {HERO_PARTNER_LOGOS.map((p) => (
                        <div className="vh-partner-cell" key={p.name}>
                            <img src={p.img} alt={p.name} loading="eager" decoding="async" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ── Custom Service Dropdown ────────────────────────────
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

    // Listener attached only while the menu is open
    useEffect(() => {
        if (!open) return;
        const handleClickOutside = (e) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    const selectOption = (opt) => {
        onChange({ target: { name: "service", value: opt } });
        setOpen(false);
    };

    return (
        <div className="svc-dd-wrap" ref={wrapRef}>
            <div className={`svc-dd-control ${open ? "open" : ""}`} onClick={() => setOpen((o) => !o)}>
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

            <input type="hidden" name="service" value={value} />
        </div>
    );
}

function HeroContactForm({ lockedService = "", onSuccess }) {
    const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", service: lockedService, msg: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        const templateParams = {
            name: form.name,
            email: form.email,
            phone: form.phone,
            company: form.company,
            service: lockedService || form.service,
            message: form.msg,
            url: window.location.href,
        };

        try {
            // Loaded only when the form is submitted, keeps it out of the initial bundle
            const emailjs = (await import("@emailjs/browser")).default;
            await emailjs.send(
                "service_8xw6k3r",
                "template_jarui36",
                templateParams,
                "XWRnXi4hK2SvmRG3q"
            );
            alert("Message Sent Successfully ✅");
            setForm({ name: "", email: "", phone: "", company: "", service: lockedService, msg: "" });
            if (onSuccess) onSuccess();
        } catch (error) {
            console.log(error);
            alert("Failed to send ❌");
        }
    };

    return (
        <form onSubmit={sendEmail}>
            <div className="hero-form-row hero-form-row-2col">
                <div className="hero-form-field">
                    <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="hero-form-field">
                    <div className="hero-phone-wrap">
                        <span className="hero-phone-prefix">IN +91</span>
                        <input type="tel" name="phone" placeholder="Mobile Number" value={form.phone} onChange={handleChange} maxLength="10" pattern="[0-9]{10}" required />
                    </div>
                </div>
            </div>

            <div className="hero-form-row hero-form-row-2col">
                <div className="hero-form-field">
                    <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
                </div>
                <div className="hero-form-field">
                    <input type="text" name="company" placeholder="Company Name" value={form.company} onChange={handleChange} />
                </div>
            </div>

            <div className="hero-form-row">
                <div className="hero-form-field">
                    {lockedService ? (
                        <div className="svc-locked" aria-readonly="true" title="Selected plan">
                            <span>{lockedService}</span>
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ed8337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <rect x="4" y="11" width="16" height="10" rx="2" />
                                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                            </svg>
                            <input type="hidden" name="service" value={lockedService} />
                        </div>
                    ) : (
                        <ServiceDropdown value={form.service} onChange={handleChange} />
                    )}
                </div>
            </div>

            <div className="hero-form-row">
                <div className="hero-form-field">
                    <textarea name="msg" placeholder="Your Message" value={form.msg} onChange={handleChange} />
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

// ── Client logos (static grid, every client visible) ──
const CLIENT_LOGOS = [
    { name: "Talent Tribe", img: "/img/landing-page/client-slide-1.webp" },
    { name: "Star Health", img: "/img/landing-page/client-slide-2.webp" },
    { name: "Sterlo Build", img: "/img/landing-page/client-slide-3.webp" },
    { name: "Riya Consultancy", img: "/img/landing-page/client-slide-4.webp" },
    { name: "ZKY", img: "/img/landing-page/client-slide-5.webp" },
    { name: "Sterlo", img: "/img/landing-page/client-slide-6.webp" },
    { name: "Sterlo Care", img: "/img/landing-page/client-slide-7.webp" },
    { name: "Feral Roots", img: "/img/landing-page/client-slide-8.webp" },
    { name: "Vriksha", img: "/img/landing-page/client-slide-9.webp" },
    { name: "Tech Global", img: "/img/landing-page/client-slide-10.webp" },
    { name: "AM Builders", img: "/img/landing-page/client-slide-11.webp" },
    { name: "Analytix Hub", img: "/img/landing-page/client-slide-12.webp" },
    { name: "AB", img: "/img/landing-page/client-slide-13.webp" },
    { name: "Tactive", img: "/img/landing-page/client-slide-14.webp" },
    { name: "Ey Chiquita", img: "/img/landing-page/client-slide-15.webp" },
    { name: "CureTek", img: "/img/landing-page/client-slide-16.webp" },
    { name: "AINQA", img: "/img/landing-page/client-slide-17.webp" },
    { name: "Vatcomm", img: "/img/landing-page/client-slide-18.webp" },
    { name: "Naturals", img: "/img/landing-page/client-slide-19.webp" },
    { name: "URCTS", img: "/img/landing-page/client-slide-20.webp" },
    { name: "Greenstar", img: "/img/landing-page/greenstar-logo.webp" },
    { name: "Orvix", img: "/img/landing-page/client-slide-25.webp" },
    { name: "Attox", img: "/img/landing-page/client-slide-23.webp" },
    { name: "Adhoc", img: "/img/landing-page/client-slide-24.webp" },
];

function ClientLogosGrid() {
    return (
        <section className="cl-section" aria-label="Our clients">
            <div className="cl-head">
                <Reveal dir="up" className="partners-header1" style={{ textAlign: 'center' }}>
                    <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Clients</div>
                </Reveal>
                <Reveal dir="up" delay={120}>
                    <h2 className="cl-title"><WaveHeading lead="Businesses That" accent="Trust Us" /></h2>
                </Reveal>
                <Reveal dir="up" delay={220}>
                    <p className="cl-sub">From growing startups to established brands, these are the companies we’ve helped build a strong, result-driven online presence. </p>
                </Reveal>
            </div>
            <div className="cl-grid">
                {CLIENT_LOGOS.map((client, i) => (
                    <Reveal dir="zoom" delay={(i % 6) * 70} className="cl-item" key={client.name}>
                        <div className="cl-cell">
                            <img src={client.img} alt={client.name} loading="lazy" decoding="async" />
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

// ── Get Started banner (left: text, right: phone + buttons) ──
function GetStartedBanner() {
    return (
        <section className="gs-section">
            <div className="gs-card">
                <Reveal dir="left" className="gs-left">
                    <div className="gs-eyebrow">Not Sure Which Website You Need?</div>
                    <h2 className="gs-title">
                        <WaveHeading lead="Tell Us About" accent="Your Business" />
                    </h2>
                    <p className="gs-desc">
                        We will recommend the right website type, features and approximate investment based on your actual requirements.

                    </p>
                </Reveal>

                <Reveal dir="right" delay={150} className="gs-right">
                    <a href="tel:+919677444048" className="gs-phone">
                        <span className="gs-phone-icon">
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </span>
                        <span className="gs-phone-number">+91 96774 44048</span>
                    </a>

                    <div className="gs-btns">
                        <a href="#get-in-touch-form" className="gs-btn">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
                                <path d="M15 2v5h5" />
                                <path d="M16 13H8" />
                                <path d="M16 17H8" />
                            </svg>
                            Get Your Website Started Today
                        </a>
                        <a href="https://wa.me/919677444048" target="_blank" rel="noopener noreferrer" className="gs-btn-outline">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="#25D366" aria-hidden="true">
                                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.79 14.13c-.24.68-1.19 1.25-1.94 1.41-.52.11-1.2.2-3.48-.75-2.92-1.21-4.8-4.17-4.95-4.36-.14-.19-1.19-1.58-1.19-3.02s.75-2.15 1.02-2.44c.24-.27.52-.34.7-.34h.5c.16 0 .38-.03.59.45.24.56.79 1.94.86 2.08.07.14.11.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.14-.29.29-.12.57.16.28.73 1.2 1.57 1.95 1.08.96 1.99 1.26 2.27 1.4.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.54.33.06.12.06.68-.18 1.36z" />
                            </svg>
                            WhatsApp Us
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

// ── FAQ Section ───────────────────────────────────────
function FAQSection() {
    const [active, setActive] = useState(null);
    const toggle = (index) => setActive(active === index ? null : index);

    const renderItem = (item, index) => (
        <Reveal dir="up" delay={(index % 3) * 120} key={index}>
            <div className="dm-faq-item">
                <div className="dm-faq-question" onClick={() => toggle(index)}>
                    <span>{item.q}</span>
                    <span className="icon">{active === index ? "−" : "+"}</span>
                </div>
                {active === index && <div className="dm-faq-answer">{item.a}</div>}
            </div>
        </Reveal>
    );

    return (
        <section className="dm-faq-section" style={{ paddingTop: "2rem" }}>
            <div className="container" style={{ width: '100%' }}>
                <Reveal dir="up" className="dm-faq-head">
                    <h2><WaveHeading lead="Frequently Asked" accent="Questions" /></h2>
                </Reveal>
                <div className="dm-faq-wrapper">
                    <div className="dm-faq-col">
                        {faqData.slice(0, 3).map((item, i) => renderItem(item, i))}
                    </div>
                    <div className="dm-faq-col">
                        {faqData.slice(3, 6).map((item, i) => renderItem(item, i + 3))}
                    </div>
                    {/* third column only renders when there are more than 6 FAQs (no empty gap) */}
                    {faqData.length > 6 && (
                        <div className="dm-faq-col">
                            {faqData.slice(6, 9).map((item, i) => renderItem(item, i + 6))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

// ── Testimonials ──────────────────────────────────────
const testimonials = [
    { index: 0, text: "PCS delivered a modern responsive website with SEO optimization, analytics integration, heatmap tracking, and performance monitoring. We appreciate their team's dedication, technical expertise, and timely support, which significantly improved our online visibility, website performance, and customer engagement.", name: "Mr.Ashwin", role: "Founder", logo: "/img/landing-page/testi-logo-5.webp" },
    { index: 1, text: "Our basic single-page website was upgraded into a professionally structured multi-page platform with enhanced SEO, GMB optimization, analytics setup, and customer activity tracking. We thank the PCS team for their commitment, quick support, and valuable contribution in strengthening our online presence.", name: "Mr.Sabarinath", role: "Founder", logo: "/img/landing-page/testi-logo-4.webp" },
    { index: 2, text: "A fresh UI design with strong website development, improved online reach, lead capture setup, and user activity insights was successfully developed by the PCS team. Every change request was handled patiently while turning our ideas into exactly what we expected. The late-night support before launch was truly appreciated.", name: "Mr.Clement Selvam", role: "Founder", logo: "/img/landing-page/testi-logo-3.webp" },
    { index: 3, text: "As a growing forest-based natural products brand, we partnered with PCS to expand our store presence and online sales. PCS team developed a complete e-commerce platform with Razorpay setup, order management, inventory tracking, centralized dashboard, WhatsApp integration for smooth business operations.", name: "Mr.Karupasamy", role: "Director", logo: "/img/landing-page/testi-logo-1.webp" },
    { index: 4, text: "Competing in the global market we required a website that matched international standards. With strategic content, SEO optimization, analytics integration, and performance enhancements, our digital presence was significantly strengthened. We appreciate the PCS team for their expertise, flexibility, consistent support throughout the process.", name: "Mr.Gunasekaran", role: "Founder", logo: "/img/landing-page/testi-logo-2.webp" },
];

function getTestimonialPos(cardIndex, activeIndex, total, isMobile) {
    const diff = cardIndex - activeIndex;
    if (diff === 0) return "center";
    if (isMobile) return diff < 0 ? "farLeft" : "farRight";
    if (diff === -1 || diff === total - 1) return "left";
    if (diff === 1 || diff === -(total - 1)) return "right";
    if (diff < 0) return "farLeft";
    return "farRight";
}

function getTestimonialPosStyles(isTablet) {
    const leftX = isTablet ? -220 : -300;
    const rightX = isTablet ? 220 : 300;
    const farLeftX = isTablet ? -380 : -490;
    const farRightX = isTablet ? 380 : 490;
    // visibility:"hidden" on the far cards stops their text from ghosting at the screen edges
    return {
        center: { transform: "translateX(0) scale(1) rotateY(0deg)", opacity: 1, visibility: "visible", filter: "none", zIndex: 10, boxShadow: "0 24px 64px rgba(13,31,60,0.14)", pointerEvents: "auto" },
        left: { transform: `translateX(${leftX}px) scale(0.85) rotateY(18deg)`, opacity: 0.55, visibility: "visible", filter: "blur(2px)", zIndex: 5, boxShadow: "none", pointerEvents: "auto" },
        right: { transform: `translateX(${rightX}px) scale(0.85) rotateY(-18deg)`, opacity: 0.55, visibility: "visible", filter: "blur(2px)", zIndex: 5, boxShadow: "none", pointerEvents: "auto" },
        farLeft: { transform: `translateX(${farLeftX}px) scale(0.7) rotateY(28deg)`, opacity: 0, visibility: "hidden", filter: "blur(4px)", zIndex: 1, boxShadow: "none", pointerEvents: "none" },
        farRight: { transform: `translateX(${farRightX}px) scale(0.7) rotateY(-28deg)`, opacity: 0, visibility: "hidden", filter: "blur(4px)", zIndex: 1, boxShadow: "none", pointerEvents: "none" },
    };
}

function TestimonialCard({ data, pos, onClick, isMobile, isTablet, isActive, viewportWidth }) {
    const posStyles = getTestimonialPosStyles(isTablet);
    const cardWidth = isMobile ? Math.min(viewportWidth - 40, 320) : isTablet ? 300 : 340;
    return (
        <div
            onClick={onClick}
            data-active={isActive ? "true" : "false"}
            style={{
                position: "absolute",
                width: cardWidth,
                background: "#ffffff",
                borderRadius: 20,
                padding: isMobile ? "20px 18px" : 32,
                cursor: "pointer",
                transition: "all 0.55s cubic-bezier(0.4,0,0.2,1)",
                userSelect: "none",
                display: "flex",
                flexDirection: "column",
                boxSizing: "border-box",
                top: 0,
                willChange: "transform, opacity",
                ...posStyles[pos],
            }}
        >
            <div style={{ fontSize: isMobile ? 28 : 36, color: "#f47920", lineHeight: 1, fontFamily: "Georgia, serif", marginBottom: 8 }}>"</div>
            <div style={{ fontSize: 13, color: "#3d4f6a", lineHeight: isMobile ? 1.65 : 1.75, marginBottom: isMobile ? 14 : 22, flex: 1, fontWeight: 400 }}>{data.text}</div>
            <div style={{ height: 1, background: "#f0f2f7", marginBottom: isMobile ? 10 : 16 }} />

            <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <div style={{ fontSize: isMobile ? 13 : 15, fontWeight: 700, color: "#0d1f3c" }}>{data.name}</div>
                    <div style={{ fontSize: 11, color: "#6b7a94", lineHeight: 1.4, fontWeight: 400 }}>{data.role}</div>
                </div>

                {data.logo && (
                    <img
                        src={data.logo}
                        alt={`${data.name} company logo`}
                        loading="lazy"
                        decoding="async"
                        style={{ height: isMobile ? 24 : 30, maxWidth: isMobile ? 60 : 80, objectFit: "contain", flexShrink: 0 }}
                    />
                )}
            </div>
        </div>
    );
}

function TestimonialSlider() {
    const [current, setCurrent] = useState(2);
    const timerRef = useRef(null);
    const touchX = useRef(null);
    const stageRef = useRef(null);
    const visibleRef = useRef(true);
    const [stageHeight, setStageHeight] = useState(380);
    const total = testimonials.length;
    const width = useWindowWidth();
    const isMobile = width < 640;
    const isTablet = width >= 640 && width < 1024;

    useEffect(() => {
        if (!stageRef.current) return;
        const activeCard = stageRef.current.querySelector("[data-active='true']");
        if (activeCard) {
            const h = activeCard.getBoundingClientRect().height;
            if (h > 0) setStageHeight(h + 8);
        }
    }, [current, width]);

    // Autoplay only while the slider is on screen and the tab is visible
    const startAuto = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            if (visibleRef.current && !document.hidden) setCurrent((c) => (c + 1) % total);
        }, 3000);
    };
    useEffect(() => {
        startAuto();
        let io;
        if (stageRef.current && "IntersectionObserver" in window) {
            io = new IntersectionObserver(([e]) => { visibleRef.current = e.isIntersecting; });
            io.observe(stageRef.current);
        }
        return () => { clearInterval(timerRef.current); if (io) io.disconnect(); };
    }, []);

    const goTo = (idx) => { setCurrent(idx); startAuto(); };

    const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) < 40) return;
        if (dx < 0) goTo((current + 1) % total);
        else goTo((current - 1 + total) % total);
    };

    return (
        <section style={{ width: "100%", margin: "0 auto", padding: isMobile ? "40px 16px" : "60px 20px", fontFamily: "'Poppins', sans-serif", overflow: "hidden", background: '#fff' }} id="testimonials">
            <Reveal dir="up" className="partners-header1" style={{ marginBottom: isMobile ? 12 : 16, textAlign: "center" }}>
                <div className="partners-eyebrow" style={{ marginBottom: "12px", textAlign: "center" }}>Client Testimonials</div>
            </Reveal>
            <Reveal dir="up" delay={120}>
                <h2 style={{ fontSize: isMobile ? 22 : isTablet ? 28 : "clamp(28px,3vw,40px)", fontWeight: 700, color: "#0d1f3c", lineHeight: 1.25, marginBottom: isMobile ? 28 : 48, textAlign: "center" }}>
                    <WaveHeading lead="What Our Clients" accent="Say About PCS" accentStyle={{ color: "#f47920", fontStyle: "italic", fontWeight: 700 }} />
                </h2>
            </Reveal>

            <Reveal dir="zoom" delay={200}>
                <div
                    ref={stageRef}
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                    style={{
                        position: "relative",
                        height: stageHeight,
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        perspective: 1200,
                        marginBottom: 28,
                        transition: "height 0.4s ease",
                    }}
                >
                    {testimonials.map((t, i) => {
                        const pos = getTestimonialPos(i, current, total, isMobile);
                        return (
                            <TestimonialCard
                                key={t.index}
                                data={t}
                                pos={pos}
                                isActive={pos === "center"}
                                onClick={() => { if (i !== current) goTo(i); }}
                                isMobile={isMobile}
                                isTablet={isTablet}
                                viewportWidth={width}
                            />
                        );
                    })}
                </div>
            </Reveal>

            <div style={{ display: "flex", justifyContent: "center", gap: 8, alignItems: "center", paddingTop: "40px" }}>
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Show testimonial ${i + 1}`}
                        style={{
                            width: i === current ? 22 : 9,
                            height: 9,
                            borderRadius: 9,
                            padding: 0,
                            outline: "none",
                            cursor: "pointer",
                            flexShrink: 0,
                            transition: "all 0.3s ease",
                            background: i === current ? "#f47920" : "transparent",
                            border: i === current ? "none" : "1.8px solid #b0b8c9",
                        }}
                    />
                ))}
            </div>

            {isMobile && (
                <p style={{ textAlign: "center", fontSize: 11, color: "#b0b8c9", marginTop: 14, letterSpacing: "0.03em" }}>
                    ← swipe to explore →
                </p>
            )}
        </section>
    );
}

// ── Footer Section ────────────────────────────────────
// Footer columns sit at the very bottom of the page, so they use a looser observer (no bottom margin)
function FooterSection() {
    return (
        <footer className="pcs-footer" id="contact">
            <div className="pcs-footer-inner">
                <Reveal dir="up" threshold={0.05} margin="0px">
                    <div className="pcs-footer-logo-row">
                        <img
                            src="/img/footer-logo.png"
                            alt="PCS Logo"
                            width="30%"
                            loading="lazy"
                            decoding="async"
                            onError={(e) => {
                                // footer-logo.png missing → fall back to the header logo (made white for the dark footer)
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = "/img/priyam-consultancy-logo.png";
                              
                            }}
                        />
                    </div>
                    <p className="pcs-footer-desc">
                        We are one of the fastest-growing full-service business solutions companies, delivering cutting-edge, result-driven strategies across digital marketing, technology, branding, and consulting to create the perfect blend of innovation and impact.
                    </p>
                </Reveal>

                <Reveal dir="up" delay={150} threshold={0.05} margin="0px">
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
                </Reveal>

                <Reveal dir="up" delay={300} threshold={0.05} margin="0px" className="pcs-footer-form-col" id="get-in-touch-form">
                    <div className="hero-form-card">
                        <p className="hero-form-title">Your Growth, <span>Our Mission.</span></p>
                        <p className="hero-form-sub">Fill in your details — we'll get back within 24 hours.</p>
                        <HeroContactForm />
                    </div>
                </Reveal>
            </div>
        </footer>
    );
}

// ── Page Export ───────────────────────────────────────
export default function WebsiteDevelopmentLandingPage() {
    // Wrapper div-la class podrom (Docusaurus <html> class-a reset pannum, so adhu safe illa)
    const [ready, setReady] = useState(false);
    useEffect(() => { setReady(true); }, []);

    // Sections are plain wrappers now (no slide / zoom per section).
    // Inner headings & cards still animate ONCE via <Reveal> inside each section.
    return (
        <Layout title={SEO_TITLE} description={SEO_DESC}>
            <SEOHead />
            <GlobalStyles />
            <SiteHeader />
            <HeroSection />

            <div className={ready ? "sr-ready" : ""}>
                <div className="sec-wrap"><TrustStripSection /></div>
                <div className="sec-wrap"><PricingSection /></div>
                <div className="sec-wrap"><RecentWorkSection /></div>
                <div className="sec-wrap"><ClientLogosGrid /></div>
                <div className="sec-wrap"><TestimonialSlider /></div>
                <div className="sec-wrap"><GetStartedBanner /></div>
                <div className="sec-wrap"><FAQSection /></div>
                <div className="sec-wrap"><FooterSection /></div>
            </div>
        </Layout>
    );
}