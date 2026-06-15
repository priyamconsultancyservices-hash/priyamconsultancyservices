import { useState, useRef, useCallback, useEffect } from "react";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

const banner = "/img/digital-marketing.png";

function SEOHead() {
  const pageUrl = "https://priyamconsultancy.com/digital-marketing-company-in-coimbatore/";
  const imageUrl = "https://www.pcsbusinesssolution.com/img/digital-marketing.png";
  const schemaData = [
    { "@context": "https://schema.org", "@type": "WebSite", name: "PCS Business Solution", url: "https://www.pcsbusinesssolution.com", potentialAction: { "@type": "SearchAction", target: "https://www.pcsbusinesssolution.com/search?q={search_term_string}", "query-input": "required name=search_term_string" } },
    { "@context": "https://schema.org", "@type": "LocalBusiness", name: "PCS Business Solution", description: "PCS Business Solution offers digital marketing, business registration, HR, and Microsoft App services across India.", url: "https://www.pcsbusinesssolution.com", logo: "https://www.pcsbusinesssolution.com/img/logo.png", image: imageUrl, telephone: "+91-XXXXXXXXXX", address: { "@type": "PostalAddress", streetAddress: "Your Street Address", addressLocality: "Chennai", addressRegion: "Tamil Nadu", postalCode: "600001", addressCountry: "IN" }, openingHours: "Mo-Fr 09:00-18:00", sameAs: ["https://www.linkedin.com/company/pcs-business-solution", "https://www.facebook.com/pcsbusinesssolution"] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What does a Digital Marketing Company in Coimbatore do?", acceptedAnswer: { "@type": "Answer", text: "A Digital Marketing Company in Coimbatore helps businesses grow online through services like SEO, Google Ads, social media marketing, content marketing, and website optimization." } }, { "@type": "Question", name: "Why should I choose a Digital Marketing Agency in Coimbatore?", acceptedAnswer: { "@type": "Answer", text: "Choosing a Digital Marketing Agency in Coimbatore ensures local market understanding, targeted strategies, and cost-effective campaigns focused on measurable results such as leads, conversions, and ROI." } }] },
  ];
  return (
    <Head>
      <title>No.1 Digital Marketing Company in Coimbatore | ROI-Driven</title>
      <meta name="description" content="Top Digital Marketing Company in Coimbatore providing SEO services, paid ads, social media marketing, and web development solutions for business growth." />
      <link rel="canonical" href={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="No.1 Digital Marketing Company in Coimbatore | ROI-Driven" />
      <meta property="og:description" content="Top Digital Marketing Company in Coimbatore providing SEO services, paid ads, social media marketing, and web development solutions for business growth." />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="No.1 Digital Marketing Company in Coimbatore | ROI-Driven" />
      <meta name="twitter:description" content="Top Digital Marketing Company in Coimbatore providing SEO services, paid ads, social media marketing, and web development solutions for business growth." />
      <meta name="twitter:image" content={imageUrl} />
      {schemaData.map((schema, i) => (<script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>))}
    </Head>
  );
}

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap');

    :root {
      --navy:      #004168;
      --navy-deep: #011a2a;
      --navy-mid:  #0a3652;
      --orange:    #ed8337;
      --orange-l:  #f5a66b;
    }

    /* ── HERO ── */
    .pg-hero {
      min-height: 100svh;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 2rem;
      padding: 2rem 6% 4rem;
      position: relative;
      overflow: hidden;
      background: var(--navy);
    }
    .pg-hero::before {
      content: '';
      position: absolute; inset: 0; pointer-events: none;
      background:
        radial-gradient(ellipse 65% 70% at 100% 50%, rgba(237,131,55,0.10) 0%, transparent 60%),
        radial-gradient(ellipse 50% 60% at 0% 100%, rgba(10,66,102,0.5) 0%, transparent 55%);
    }
    .pg-hero::after {
      content: '';
      position: absolute; inset: 0; pointer-events: none;
      background-image:
        linear-gradient(rgba(237,131,55,0.028) 1px, transparent 1px),
        linear-gradient(90deg, rgba(237,131,55,0.028) 1px, transparent 1px);
      background-size: 52px 52px;
    }
    .pg-hero-left { position: relative; z-index: 2; display: flex; flex-direction: column; }
    .pg-h-badge {
      display: inline-flex; align-items: center; gap: .5rem;
      background: rgba(237,131,55,0.1); border: 1px solid rgba(237,131,55,0.28);
      color: var(--orange); font-size: .72rem; font-weight: 600;
      padding: .38rem 1rem; border-radius: 50px;
      letter-spacing: .09em; text-transform: uppercase;
      width: fit-content;
    }
    .pg-badge-dot {
      width: 6px; height: 6px; border-radius: 50%; background: var(--orange);
      animation: pg-pulse-dot 1.6s infinite;
    }
    @keyframes pg-pulse-dot {
      0%,100%{ opacity:1; transform:scale(1); }
      50%{ opacity:.4; transform:scale(1.5); }
    }
    .pg-hero-heading {
      font-family: 'Poppins', sans-serif;
      font-size: clamp(2.2rem, 3.8vw, 3rem);
      font-weight: 700; line-height: 1.15;
      margin-top: 1.4rem; color: #fff;
    }
    .pg-hero-heading .hl {
      color: var(--orange);
      position: relative; display: inline-block;
    }
    .pg-hero-heading .hl::after {
      content: ''; position: absolute; left: 0; bottom: -3px;
      width: 100%; height: 3px;
      background: var(--orange); border-radius: 2px;
      transform: scaleX(0); transform-origin: left;
      animation: pg-line-in 0.5s 0.9s ease forwards;
    }
    @keyframes pg-line-in { to { transform: scaleX(1); } }
    .pg-hero-sub {
      margin-top: 1.2rem; font-size: 1rem; line-height: 1.78;
      color: rgba(255,255,255,0.88); max-width: 520px;
    }
    .pg-hero-right {
      position: relative; z-index: 2;
      display: flex; align-items: center; justify-content: center;
    }

    /* ── FORM CARD ── */
    .pg-form-card {
      background: #fff; border-radius: 20px;
      padding: 2.2rem 2.4rem 2.4rem;
      width: 100%; max-width: 480px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.18);
    }
    .pg-form-title {
      font-family: 'Poppins', sans-serif;
      font-size: clamp(1.5rem, 2.5vw, 1.9rem);
      font-weight: 700; color: #022b44; line-height: 1.2; margin-bottom: .4rem;
    }
    .pg-form-title span { color: #ed8337; }
    .pg-form-sub { font-size: .85rem; color: #666; margin-bottom: 1.5rem; }
    .pg-form-row {     display: flex;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
    grid-auto-flow: row;
    flex-direction: column; }
    .pg-form-field { display: flex; flex-direction: column; gap: .3rem; }
    .pg-form-field input,
    .pg-form-field textarea {
      border: none; border-bottom: 1.5px solid #ccc; outline: none;
      padding: .55rem 0; font-size: .88rem;
      font-family: 'Poppins', sans-serif;
      color: #022b44; background: transparent; transition: border-color .2s; width: 100%;
    }
    .pg-form-field input:focus,
    .pg-form-field textarea:focus { border-bottom-color: #ed8337; }
    .pg-form-field input::placeholder,
    .pg-form-field textarea::placeholder { color: #aaa; font-size: .85rem; }
    .pg-form-field textarea { resize: none; min-height: 64px; }
    .pg-phone-wrap {
      display: flex; align-items: flex-end; gap: .5rem;
      border-bottom: 1.5px solid #ccc; transition: border-color .2s;
    }
    .pg-phone-wrap:focus-within { border-bottom-color: #ed8337; }
    .pg-phone-prefix {
      font-size: .88rem; font-weight: 700; color: #022b44;
      padding-bottom: .55rem; white-space: nowrap; flex-shrink: 0;
    }
    .pg-phone-wrap input { border: none !important; border-bottom: none !important; flex: 1; padding: .55rem 0 !important; }
    .pg-form-footer { display: flex; align-items: center; margin-top: 1.4rem; }
    .pg-form-btn {
      display: inline-flex; align-items: center; gap: .6rem;
      background: #ed8337; color: #fff; border: none;
      border-radius: 50px; padding: .85rem 1.8rem;
      font-family: 'Poppins', sans-serif; font-size: .9rem; font-weight: 600;
      cursor: pointer; transition: background .2s, transform .18s;
      text-decoration: none;
    }
    .pg-form-btn:hover { background: #004168; transform: translateY(-2px); }
    .pg-form-btn-arr {
      width: 26px; height: 26px; border-radius: 50%;
      background: rgba(255,255,255,0.15);
      display: flex; align-items: center; justify-content: center; font-size: .9rem;
    }

    /* ── SERVICES SECTION ── */
    .pg-svc-wrap { background: #f4f6f9; padding: 6rem 0 5rem; }
    .pg-svc-inner { max-width: 1200px; margin: 0 auto; padding: 0 5%; }
    .pg-svc-top {
      display: flex; align-items: flex-end;
      justify-content: space-between; gap: 2rem; margin-bottom: 4rem;
    }
    .pg-svc-eyebrow {
      font-size: .72rem; font-weight: 700;
      letter-spacing: .18em; text-transform: uppercase;
      color: var(--orange); margin-bottom: .8rem;
      display: flex; align-items: center; gap: 8px;
    }
    .pg-svc-eyebrow::before { content: ''; width: 24px; height: 2px; background: var(--orange); border-radius: 2px; }
    .pg-svc-main-title {
      font-family: 'Poppins', sans-serif;
      font-size: clamp(2.2rem, 3.5vw, 3rem);
      font-weight: 700; line-height: 1.1; color: #0d1f2d;
    }
    .pg-svc-main-title em { color: var(--orange); font-style: normal; }
    .pg-svc-right-text { max-width: 380px; text-align: right; }
    .pg-svc-desc { font-size: .96rem; line-height: 1.75; color: #555; margin-bottom: 1.4rem; }
    .pg-svc-cta-link {
      display: inline-flex; align-items: center; gap: .5rem;
      font-size: .82rem; font-weight: 700;
      letter-spacing: .1em; text-transform: uppercase;
      color: var(--navy); text-decoration: none;
      border-bottom: 2px solid var(--orange); padding-bottom: 3px;
      transition: color .2s;
    }
    .pg-svc-cta-link:hover { color: var(--orange); }
    .pg-mag-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 1.2rem; }
    .pg-mag-card {
      position: relative; border-radius: 18px; overflow: hidden;
      background: #fff; display: flex; flex-direction: column;
      transition: transform .3s ease, box-shadow .3s ease;
    }
    .pg-mag-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.12); }
    .pg-mag-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
      background: linear-gradient(90deg, var(--orange), var(--orange-l));
      opacity: 0; transition: opacity .3s;
    }
    .pg-mag-card:hover::before { opacity: 1; }
    .pg-card-1 { grid-column: 1 / 5; }
    .pg-card-2 { grid-column: 5 / 9; }
    .pg-card-3 { grid-column: 9 / 13; grid-row: 1 / 3; }
    .pg-card-4 { grid-column: 1 / 5; }
    .pg-card-5 { grid-column: 5 / 7; }
    .pg-card-6 { grid-column: 7 / 9; }
    .pg-card-pad { padding: 1.8rem; display: flex; flex-direction: column; height: 100%; }
    .pg-card-icon {
      width: 52px; height: 52px; border-radius: 14px;
      background: rgba(237,131,55,0.1);
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 1.1rem; transition: background .3s; flex-shrink: 0;
    }
    .pg-mag-card:hover .pg-card-icon { background: rgba(237,131,55,0.2); }
    .pg-card-num { font-family: 'DM Sans', sans-serif; font-size: .6rem; font-weight: 700; letter-spacing: .16em; color: rgba(237,131,55,0.55); text-transform: uppercase; margin-bottom: .5rem; }
    .pg-card-title { font-family: 'Poppins', sans-serif; font-size: 1.05rem; font-weight: 700; color: #0d1f2d; margin-bottom: .7rem; line-height: 1.3; }
    .pg-card-desc { font-size: .84rem; line-height: 1.78; color: #666; flex: 1; }
    .pg-card-learn {
      display: inline-flex; align-items: center; gap: .4rem;
      font-size: .72rem; font-weight: 700; letter-spacing: .1em;
      text-transform: uppercase; color: var(--navy); text-decoration: none;
      margin-top: 1.2rem; transition: color .25s;
    }
    .pg-card-learn:hover { color: var(--orange); }
    .pg-card-learn-ico {
      width: 22px; height: 22px; border-radius: 50%;
      border: 1.5px solid currentColor;
      display: flex; align-items: center; justify-content: center;
      font-size: .7rem; transition: transform .25s;
    }
    .pg-mag-card:hover .pg-card-learn-ico { transform: rotate(45deg); }
    .pg-card-accent { background: var(--navy) !important; }
    .pg-card-accent .pg-card-num { color: rgba(237,131,55,0.55); }
    .pg-card-accent .pg-card-title { color: #fff; }
    .pg-card-accent .pg-card-desc { color: rgba(255,255,255,0.65); }
    .pg-card-accent .pg-card-learn { color: var(--orange); }
    .pg-card-accent .pg-card-icon { background: rgba(237,131,55,0.15); }
    .pg-card-3 .pg-card-pad { padding: 2rem; }
    .pg-card-3 .pg-card-icon { width: 60px; height: 60px; border-radius: 16px; }
    .pg-card-5 .pg-card-title, .pg-card-6 .pg-card-title { font-size: .92rem; }
    .pg-stat-callout { margin-top: 1.4rem; padding: 1.2rem; background: #f9f5f2; border-radius: 12px; border-left: 3px solid var(--orange); }
    .pg-stat-callout-label { font-size: .72rem; font-weight: 700; color: var(--orange); margin-bottom: .4rem; letter-spacing: .06em; }
    .pg-stat-callout-text { font-size: .83rem; line-height: 1.65; color: #555; }

    /* ── APP BANNER ── */
    .pg-app-section {  padding: 150px 5% 5rem; }
    .pg-app-outer { max-width: 1200px; margin: 0 auto; position: relative; }
    .pg-app-card {
      background: var(--navy); border-radius: 24px;
      padding: 3.5rem 3.5rem 3.5rem 4rem;
      display: grid; grid-template-columns: 1fr 550px;
      align-items: center; position: relative; overflow: visible; min-height: 260px;
    }
    .pg-app-card::before {
      content: ''; position: absolute; inset: 0; border-radius: 24px; pointer-events: none;
      background:
        radial-gradient(ellipse 55% 80% at 105% 55%, rgba(237,131,55,0.10) 0%, transparent 60%),
        radial-gradient(ellipse 40% 50% at 0% 0%, rgba(1,26,42,0.55) 0%, transparent 55%);
    }
    .pg-app-card::after {
      content: ''; position: absolute; inset: 0; border-radius: 24px; pointer-events: none;
      background-image:
        linear-gradient(rgba(237,131,55,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(237,131,55,0.025) 1px, transparent 1px);
      background-size: 48px 48px;
    }
    .pg-app-left { position: relative; z-index: 2; }
    .pg-app-badge {
      display: inline-flex; align-items: center; gap: 6px;
      background: rgba(237,131,55,0.12); border: 1px solid rgba(237,131,55,0.28);
      color: var(--orange); font-size: .62rem; font-weight: 600;
      padding: .3rem .9rem; border-radius: 50px;
      letter-spacing: .1em; text-transform: uppercase; margin-bottom: 1.2rem;
    }
    .pg-app-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--orange); animation: pg-pulse-dot 1.6s infinite; }
    .pg-app-heading { font-family: 'Poppins', sans-serif; font-size: clamp(1.8rem, 3vw, 2.4rem); font-weight: 700; line-height: 1.2; color: #fff; margin: 0 0 .6rem; }
    .pg-app-heading em { color: var(--orange); font-style: italic; }
    .pg-app-sub { font-size: .9rem; line-height: 1.72; color: rgba(255,255,255,0.75); max-width: 400px; margin: 0 0 2rem; }
    .pg-app-btns { display: flex; gap: .9rem; flex-wrap: wrap; }
    .pg-app-store-btn {
      display: inline-flex; align-items: center; gap: .55rem;
      background: #000; border: 1.5px solid rgba(255,255,255,0.2);
      border-radius: 10px; padding: .6rem 1.3rem;
      cursor: pointer; transition: border-color .2s, transform .18s; text-decoration: none;
    }
    .pg-app-store-btn:hover { border-color: rgba(237,131,55,0.6); transform: translateY(-2px); }
    .pg-app-store-btn svg { width: 22px; height: 22px; fill: #fff; flex-shrink: 0; }
    .pg-app-btn-text { display: flex; flex-direction: column; }
    .pg-app-btn-label { font-size: .52rem; color: rgba(255,255,255,0.65); letter-spacing: .05em; line-height: 1; font-family: 'Poppins', sans-serif; }
    .pg-app-btn-name { font-size: .85rem; font-weight: 600; color: #fff; line-height: 1.3; font-family: 'Poppins', sans-serif; }
    .pg-app-right { position: relative; z-index: 10; display: flex; justify-content: center; align-items: flex-end; }
    .pg-phone-wrapper { position: absolute; top: -225px; transform: translateY(-40px); }
    .pg-phone-frame { width: 100%; height: 100%; background: #fff; border-radius: 38px; border: 8px solid #111; overflow: hidden; position: relative; box-shadow: 0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08); }
    .pg-ph-notch { width: 65px; height: 16px; background: #111; border-radius: 0 0 12px 12px; margin: 0 auto; position: relative; z-index: 5; }
    .pg-ph-screen { background: #f5f5f0; height: calc(100% - 16px); display: flex; flex-direction: column; overflow: hidden; }
    .pg-ph-top { background: #fff; padding: .6rem .85rem .5rem; border-bottom: 1px solid #ebebeb; }
    .pg-ph-hello { font-size: .52rem; color: #999; margin: 0; font-family: 'Poppins', sans-serif; }
    .pg-ph-name { font-size: .82rem; font-weight: 700; color: #111; margin: 0; font-family: 'Poppins', sans-serif; }
    .pg-ph-tabs { display: flex; gap: .28rem; margin-top: .45rem; }
    .pg-ph-tab { font-size: .46rem; padding: .2rem .5rem; border-radius: 20px; background: #ebebeb; color: #666; font-weight: 600; font-family: 'Poppins', sans-serif; }
    .pg-ph-tab.active { background: var(--navy); color: #fff; }
    .pg-ph-body { padding: .65rem .85rem; flex: 1; overflow: hidden; }
    .pg-ph-section-label { font-size: .55rem; font-weight: 700; color: #111; margin: 0 0 .4rem; font-family: 'Poppins', sans-serif; }
    .pg-ph-card { border-radius: 12px; overflow: hidden; margin-bottom: .5rem; background: #1a2f20; }
    .pg-ph-card-img { height: 75px; background: linear-gradient(135deg, #004168 0%, #0a5c8a 60%, #1a7aaa 100%); display: flex; align-items: flex-end; padding: .45rem .55rem; position: relative; }
    .pg-ph-card-title { font-size: .65rem; font-weight: 700; color: #fff; line-height: 1.25; font-family: 'Poppins', sans-serif; }
    .pg-ph-play { position: absolute; right: .5rem; bottom: .5rem; width: 24px; height: 24px; border-radius: 50%; background: rgba(255,255,255,0.92); display: flex; align-items: center; justify-content: center; }
    .pg-ph-play::after { content: ''; border-left: 7px solid #004168; border-top: 4px solid transparent; border-bottom: 4px solid transparent; margin-left: 2px; }
    .pg-ph-pills { display: flex; gap: .28rem; padding: .3rem .45rem; }
    .pg-ph-pill { font-size: .42rem; padding: .14rem .38rem; border-radius: 20px; font-weight: 600; font-family: 'Poppins', sans-serif; }
    .pg-ph-pill-g { background: #e1f5ee; color: #0f6e56; }
    .pg-ph-pill-o { background: #faeeda; color: #854f0b; }
    .pg-ph-today { background: #fff; border-radius: 9px; padding: .45rem .55rem; }
    .pg-ph-today-label { font-size: .46rem; font-weight: 700; color: #999; text-transform: uppercase; letter-spacing: .07em; margin-bottom: .3rem; font-family: 'Poppins', sans-serif; }
    .pg-ph-bar { height: 5px; border-radius: 3px; background: #ebebeb; margin: .12rem 0; }
    .pg-ph-bar.f { background: var(--orange); }
    .pg-ph-bar.w8 { width: 80%; }
    .pg-ph-bar.w5 { width: 50%; background: var(--orange-l); }
    .pg-ph-bar.w7 { width: 70%; }
    .pg-ph-nav { background: #fff; border-top: 1px solid #ebebeb; padding: .32rem; display: flex; justify-content: space-around; align-items: center; }
    .pg-ph-nav-item { width: 26px; height: 26px; border-radius: 7px; display: flex; align-items: center; justify-content: center; font-size: 13px; }
    .pg-ph-nav-item.active { background: rgba(0,65,104,0.12); }

    /* ── CTA SPLIT SECTION ── */
    .pg-cta-section { background: #fff; }
    .pg-cta-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 5rem; }
    .pg-cta-img-wrap { position: relative; border-radius: 20px; overflow: visible; }
    .pg-cta-img { width: 100%; aspect-ratio: 4/3; object-fit: cover; border-radius: 20px; display: block; }
    .pg-cta-float-badge { position: absolute; bottom: 1.4rem; left: 1.4rem; background: #fff; border-radius: 12px; padding: .6rem 1rem; display: flex; align-items: center; gap: .5rem; box-shadow: 0 4px 18px rgba(0,65,104,.13); }
    .pg-cta-badge-dot { width: 10px; height: 10px; border-radius: 50%; background: #22c55e; flex-shrink: 0; }
    .pg-cta-badge-title { font-size: .78rem; font-weight: 700; color: #022b44; font-family: 'Poppins', sans-serif; margin: 0; }
    .pg-cta-badge-sub { font-size: .68rem; color: #888; font-family: 'Poppins', sans-serif; margin: 0; }
    .pg-cta-float-stat { position: absolute; top: 1.4rem; right: 1.4rem; background: #004168; border-radius: 12px; padding: .6rem 1rem; text-align: center; }
    .pg-cta-stat-num { font-size: 1.3rem; font-weight: 800; color: #ed8337; font-family: 'Poppins', sans-serif; line-height: 1; margin: 0; }
    .pg-cta-stat-label { font-size: .62rem; color: rgba(255,255,255,.75); font-family: 'Poppins', sans-serif; margin: .2rem 0 0; line-height: 1.3; }
    .pg-cta-heading { font-family: 'Poppins', sans-serif; font-size: clamp(2rem, 3.2vw, 2.8rem); font-weight: 700; line-height: 1.15; color: #0d1f2d; margin-bottom: 1.2rem; }
    .pg-cta-heading em { color: #ed8337; font-style: normal; }
    .pg-cta-desc { font-size: .96rem; line-height: 1.78; color: #555; margin-bottom: 1rem; }
    .pg-cta-desc2 { font-size: .93rem; line-height: 1.75; color: #666; margin-bottom: 2rem; }
    .pg-cta-features { display: flex; flex-direction: column; gap: .7rem; margin-bottom: 2.2rem; }
    .pg-cta-feat { display: flex; align-items: center; gap: .75rem; font-size: .9rem; color: #333; font-family: 'Poppins', sans-serif; }
    .pg-cta-feat-icon { width: 28px; height: 28px; border-radius: 50%; background: rgba(237,131,55,.12); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #ed8337; font-weight: 700; font-size: 14px; }
    .pg-cta-btns { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
    .pg-cta-btn-sec { color: #004168; font-family: 'Poppins', sans-serif; font-size: .9rem; font-weight: 600; text-decoration: none; border-bottom: 2px solid #ed8337; padding-bottom: 2px; transition: color .2s; }
    .pg-cta-btn-sec:hover { color: #ed8337; }

    /* ── MODERN FEATURES SECTION ── */
    .mf-outer { background: #fff; padding: 80px 20px; font-family: 'Poppins', Arial, sans-serif; }
    .mf-head { text-align: center; margin-bottom: 40px; }
    .mf-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 2px; color: #ed8337; text-transform: uppercase; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; gap: 8px; }
    .mf-eyebrow::before, .mf-eyebrow::after { content: ''; width: 24px; height: 2px; background: #ed8337; border-radius: 2px; }
    .mf-h2 { font-size: 2.5rem; font-weight: 700; color: #0d1f2d; margin: 0 0 8px; }
    .mf-h2 span { color: #ed8337; }
    .mf-sub { font-size: 12px; color: #888; margin: 0; }
    .mf-body { display: flex; align-items: center; justify-content: center; gap: 40px; max-width: 1300px; margin: 0 auto; }
    .mf-col { display: flex; flex-direction: column; gap: 35px; width: 33%; }
    .mf-item { display: flex; align-items: flex-start; gap: 10px; }
    // .mf-item.rev { flex-direction: row-reverse; text-align: right; }
    .mf-icon-box { width: 40px; height: 40px; min-width: 40px; border-radius: 10px; background: #eef3f8; display: flex; align-items: center; justify-content: center; }
    .mf-icon-box i { font-size: 19px; color: #004168; }
    .mf-t { font-size: 16.5px; font-weight: 700; color: #0d1f2d; margin: 0 0 3px; line-height: 1.3; }
    .mf-d { font-size: 13.5px; color: #777; line-height: 1.55; margin: 0; }
    .mf-phone { width: 22%; flex-shrink: 0; }
    .mf-phone-outer { background: #111; border-radius: 32px; padding: 9px; }
    .mf-screen { background: #0d0d1c; border-radius: 24px; overflow: hidden; }
    .mf-notch { width: 50px; height: 12px; background: #111; border-radius: 0 0 9px 9px; margin: 0 auto; }
    .mf-topbar { display: flex; align-items: center; justify-content: space-between; padding: 9px 12px 4px; }
    .mf-tbtitle { font-size: 10px; font-weight: 600; color: #fff; }
    .mf-tbback { font-size: 14px; color: rgba(255,255,255,0.53); }
    .mf-tbmore { display: flex; gap: 2px; }
    .mf-tbdot { width: 3px; height: 3px; border-radius: 50%; background: rgba(255,255,255,0.27); }
    .mf-card { margin: 0 10px 8px; background: #1a1a2e; border-radius: 14px; padding: 12px; }
    .mf-cl { font-size: 8px; color: #aaa; margin: 0 0 2px; }
    .mf-cn { font-size: 8px; color: #aaa; margin: 0 0 8px; }
    .mf-ctype { font-size: 9px; font-weight: 600; color: #fff; margin: 0 0 10px; }
    .mf-circles { display: flex; justify-content: flex-end; margin-bottom: 6px; }
    .mf-circ { width: 16px; height: 16px; border-radius: 50%; }
    .mf-al { font-size: 8px; color: #aaa; margin: 0 0 1px; }
    .mf-av { font-size: 18px; font-weight: 700; color: #fff; margin: 0; }
    .mf-sec { padding: 0 10px 6px; }
    .mf-sl { font-size: 8px; color: #aaa; margin: 0 0 6px; }
    .mf-txn { display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; }
    .mf-txl { display: flex; align-items: center; gap: 6px; }
    .mf-av2 { width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 8px; font-weight: 700; color: #fff; flex-shrink: 0; }
    .mf-tn { font-size: 8.5px; font-weight: 600; color: #fff; margin: 0; }
    .mf-td { font-size: 7px; color: #555; margin: 0; }
    .mf-ta { font-size: 9px; font-weight: 700; }
    .mf-g { color: #4ade80; }
    .mf-r { color: #f87171; }
    .mf-nav { display: flex; justify-content: space-around; padding: 7px 10px; border-top: 1px solid rgba(255,255,255,0.05); margin-top: 2px; }
    .mf-nd { width: 5px; height: 5px; border-radius: 50%; background: rgba(255,255,255,0.13); }
    .mf-nd.a { background: #ed8337; width: 16px; border-radius: 3px; }

    /* ══ KEY FEATURES CAROUSEL ══ */
    .kf-section { position:relative; padding:4rem 0; overflow:hidden; background:#004168; }
    .kf-section::before { content:''; position:absolute; inset:0; pointer-events:none; background-image:linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px); background-size:55px 55px; }
    .kf-orbs { position:absolute; inset:0; pointer-events:none; z-index:0; }
    .kf-orb { position:absolute; border-radius:50%; filter:blur(80px); animation:kf-orb-drift 8s ease-in-out infinite alternate; }
    .kf-orb-1 { width:420px; height:420px; top:-80px; left:-60px; background:radial-gradient(circle,rgba(237,131,55,0.18) 0%,transparent 70%); }
    .kf-orb-2 { width:360px; height:360px; bottom:-60px; right:-40px; background:radial-gradient(circle,rgba(96,165,250,0.14) 0%,transparent 70%); animation-delay:-3s; }
    .kf-orb-3 { width:280px; height:280px; top:40%; left:40%; background:radial-gradient(circle,rgba(167,139,250,0.1) 0%,transparent 70%); animation-delay:-5s; }
    @keyframes kf-orb-drift{from{transform:translate(0,0) scale(1);}to{transform:translate(30px,20px) scale(1.1);}}
    .kf-inner { position:relative; z-index:2; width:100%; overflow:hidden; background:#004168; }
    .kf-header { text-align:center; margin-bottom:1.8rem; padding:0 6%; }
    .kf-eyebrow { display:inline-flex; align-items:center; gap:.5rem; font-family:'Space Mono',monospace; font-size:.72rem; font-weight:700; color:var(--orange); letter-spacing:.13em; text-transform:uppercase; margin-bottom:1rem; }
    .kf-eyebrow-line { width:24px; height:2px; background:var(--orange); border-radius:2px; }
    .kf-title { font-family:'Poppins',sans-serif; font-size:clamp(2.2rem,3.4vw,3.4rem); font-weight:600; line-height:1.1; color:#fff; margin-bottom:1rem; }
    .kf-title span { color:var(--orange); }
    .kf-sub { font-size:.89rem; line-height:1.76; color:#fff; font-family:'Poppins'; }
    .kf-carousel-wrap { position:relative; width:100%; height:400px; overflow:visible; }
    .kf-card {
      position:absolute; left:50%; top:50%;
      transform:translateX(-50%) translateY(-50%);
      width:340px; border-radius:26px; padding:2.2rem 1.8rem 1.8rem;
      display:flex; flex-direction:column; gap:1.1rem;
      background:linear-gradient(145deg,rgba(10,54,82,0.55),rgb(76 186 235 / 23%));
      backdrop-filter:blur(22px) saturate(180%);
      border:1px solid rgba(255,255,255,0.14);
      box-shadow:0 8px 40px rgba(0,0,0,0.45),inset 0 1px 0 rgba(255,255,255,0.16);
      cursor:grab; user-select:none;
      transition:transform 0.55s cubic-bezier(.34,1.3,.64,1),opacity 0.45s ease,box-shadow 0.4s ease,border-color 0.3s ease,filter 0.45s ease;
      overflow:hidden; transform-origin:center center;
      filter:blur(2px) brightness(0.7);
    }
    .kf-card.is-active { filter:blur(0px) brightness(1); }
    .kf-card:active { cursor:grabbing; }
    .kf-card::before { content:''; position:absolute; top:0; left:10%; right:10%; height:1px; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.38),transparent); }
    .kf-card::after { content:''; position:absolute; width:200px; height:200px; border-radius:50%; background:radial-gradient(circle,rgba(237,131,55,0.15) 0%,transparent 70%); top:-80px; right:-60px; pointer-events:none; }
    .kf-icon-wrap { flex-shrink:0; width:56px; height:56px; border-radius:16px; background:linear-gradient(135deg,rgba(237,131,55,0.22) 0%,rgba(237,131,55,0.06) 100%); border:1px solid rgba(237,131,55,0.3); display:flex; align-items:center; justify-content:center; font-size:1.6rem; box-shadow:0 4px 18px rgba(237,131,55,0.18),inset 0 1px 0 rgba(255,255,255,0.15); transition:transform .4s cubic-bezier(.34,1.3,.64,1); }
    .kf-card.is-active .kf-icon-wrap { transform:scale(1.08) rotate(-5deg); }
    .kf-card-body { position:relative; z-index:1; flex:1; }
    .kf-card-title { font-family:'Poppins',sans-serif; font-size:1.05rem; font-weight:700; color:#ed8337; margin-bottom:.45rem; line-height:1.3; }
    .kf-card-desc { font-size:.89rem; line-height:1.76; color:#fff; font-family:'Poppins'; }
    .kf-card-accent { height:2px; border-radius:2px; margin-top:1rem; background:linear-gradient(90deg,var(--orange),rgba(237,131,55,0)); transition:width .6s ease .1s; }
    .kf-nav { display:flex; justify-content:center; align-items:center; gap:1.2rem; margin-top:2.4rem; padding:0 6%; }
    .kf-nav-btn { width:44px; height:44px; border-radius:50%; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.14); backdrop-filter:blur(10px); color:#fff; font-size:1.1rem; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .25s; }
    .kf-nav-btn:hover { background:var(--orange); border-color:var(--orange); transform:scale(1.1); }
    .kf-dots { display:flex; gap:.5rem; align-items:center; }
    .kf-dot { width:8px; height:8px; border-radius:50%; background:rgba(255,255,255,0.2); border:none; padding:0; cursor:pointer; transition:all .3s; }
    .kf-dot.active { background:var(--orange); width:22px; border-radius:4px; }
    .kf-drag-hint { text-align:center; margin-top:.8rem; font-size:.72rem; color:rgba(255,255,255,0.25); font-family:'Space Mono',monospace; letter-spacing:.06em; padding:0 6%; }

    /* ══ FAQ SECTION ══ */
    .dm-faq-section { background:#fff; padding:5rem 6%; }
    .dm-faq-head { text-align:center; margin-bottom:2.5rem; }
    .dm-faq-head h2 { font-family:'Poppins',sans-serif; font-size:clamp(1.8rem,3vw,2.5rem); font-weight:700; color:#011a2a; line-height:1.15; }
    .dm-faq-head h2 span { color:var(--orange); font-style:italic; }
    .dm-faq-head h3 { font-family:'Poppins',sans-serif; font-size:clamp(1.8rem,3vw,2.5rem); font-weight:700; color:#011a2a; line-height:1.15; }
    .dm-faq-head h3 span { color:var(--orange); font-style:italic; }
    .dm-faq-wrapper { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; }
    .dm-faq-col { display:flex; flex-direction:column; gap:1rem; }
    .dm-faq-item { border-radius:14px; overflow:hidden; transition:border-color .22s; }
    .dm-faq-item:hover { border-color:rgba(237,131,55,0.4); }
    .dm-faq-question {     background: #f8faff;
    border-radius: 10px;display:flex; justify-content:space-between; align-items:center; padding:1.1rem 1.4rem; cursor:pointer; font-family:'Poppins',sans-serif; font-size:.92rem; font-weight:600; color:#011a2a; gap:1rem; user-select:none; }
    .dm-faq-question .icon { font-size:1.3rem; color:var(--orange); flex-shrink:0; }
    .dm-faq-answer { padding:.2rem 1.4rem 1.1rem; font-size:.88rem; color:#5a6070; line-height:1.78;  }

    @media (max-width: 680px) {
      .mf-body { flex-direction: column; align-items: center; }
      .mf-col { width: 100%; max-width: 320px; }
      .mf-item.rev { flex-direction: row; text-align: left; }
      .mf-phone { order: -1; }
    }

    /* ── TECHNOLOGIES MARQUEE ── */
    .tech-section {
      background: #fff;
      padding: 70px 0 80px;
      overflow: hidden;
    }
    .tech-header {
      text-align: center;
      padding: 0 5%;
      margin-bottom: 48px;
    }
    .tech-eyebrow {
      display: inline-flex; align-items: center; gap: 8px;
      font-size: .72rem; font-weight: 700;
      letter-spacing: .18em; text-transform: uppercase;
      color: var(--orange); margin-bottom: 14px;
    }
    .tech-eyebrow::before,
    .tech-eyebrow::after { content: ''; width: 24px; height: 2px; background: var(--orange); border-radius: 2px; }
    .tech-title {
      font-family: 'Poppins', sans-serif;
      font-size: clamp(1.9rem, 3.2vw, 2.7rem);
      font-weight: 700; color: #0d1f2d;
      line-height: 1.15; margin-bottom: 14px;
    }
    .tech-title span { color: var(--orange); }
    .tech-desc {
      font-size: .96rem; line-height: 1.78;
      color: #666; max-width: 680px; margin: 0 auto;
    }
    .tech-track-wrap {
      position: relative;
      overflow: hidden;
    }
    .tech-track-wrap::before,
    .tech-track-wrap::after {
      content: '';
      position: absolute; top: 0; bottom: 0; width: 120px; z-index: 2; pointer-events: none;
    }
    .tech-track-wrap::before { left: 0; background: linear-gradient(90deg, #fff 0%, transparent 100%); }
    .tech-track-wrap::after  { right: 0; background: linear-gradient(-90deg, #fff 0%, transparent 100%); }
    .tech-row {
      display: flex;
      gap: 20px;
      padding: 12px 0;
    }
    .tech-row-inner {
      display: flex;
      gap: 20px;
      flex-shrink: 0;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    .tech-row-inner.row-right  { animation-name: tech-scroll-right; }
    .tech-row-inner.row-left   { animation-name: tech-scroll-left;  }
    .tech-row-inner.speed-1    { animation-duration: 32s; }
    .tech-row-inner.speed-2    { animation-duration: 38s; }
    @keyframes tech-scroll-right {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes tech-scroll-left {
      0%   { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    .tech-track-wrap:hover .tech-row-inner { animation-play-state: paused; }
    .tech-card {
      flex-shrink: 0;
      display: flex; align-items: center; justify-content: center; gap: 10px;
      background: #f5f0e8;
      border: 1.5px solid #e8e2d8;
      border-radius: 14px;
      padding: 18px 28px;
      min-width: 180px;
      transition: box-shadow .25s, transform .25s, border-color .25s;
      cursor: default;
    }
    .tech-card:hover {
      box-shadow: 0 8px 28px rgba(0,65,104,0.13);
      transform: translateY(-4px);
      border-color: rgba(237,131,55,0.45);
    }
    .tech-card-logo {
      width: 36px; height: 36px; object-fit: contain; flex-shrink: 0;
    }
    .tech-card-name {
      font-family: 'Poppins', sans-serif;
      font-size: .88rem; font-weight: 600;
      color: #0d1f2d; white-space: nowrap;
    }

    /* ── RESPONSIVE ── */
    @media (max-width: 960px) {
      .tech-card { min-width: 150px; padding: 14px 20px; }
      .tech-title { font-size: clamp(1.5rem, 5vw, 2rem); }
      .pg-hero { grid-template-columns: 1fr; padding: 6rem 5% 4rem; min-height: auto; gap: 2.5rem; }
      .pg-hero-left { order: 1; } .pg-hero-right { order: 2; }
      .pg-form-card { max-width: 100%; }
      .pg-svc-top { flex-direction: column; align-items: flex-start; }
      .pg-svc-right-text { text-align: left; max-width: 100%; }
      .pg-mag-grid { grid-template-columns: 1fr 1fr; }
      .pg-card-1,.pg-card-2,.pg-card-3,.pg-card-4,.pg-card-5,.pg-card-6 { grid-column: auto !important; grid-row: auto !important; }
      .pg-app-card { grid-template-columns: 1fr; padding: 2.5rem 2rem 220px; }
      .pg-phone-wrapper { width: 170px; height: 340px; right: 50%; transform: translateX(50%) translateY(-20px); }
      .pg-cta-inner { grid-template-columns: 1fr; gap: 3rem; }
      .kf-section { padding: 3rem 0 4rem; }
      .kf-inner { padding: 2rem; }
      .kf-carousel-wrap { height: 360px; }
      .kf-card { width: 290px; }
      .kf-title { font-size: clamp(1.6rem, 5vw, 2.4rem); }
      .dm-faq-wrapper { grid-template-columns: 1fr; gap: 0.8rem; }
      .dm-faq-section { padding: 4rem 5% 3rem; }
    }
    @media (max-width: 600px) {
      .pg-hero { padding: 5rem 4% 3rem; gap: 2rem; }
      .pg-hero-heading { font-size: clamp(1.7rem, 6vw, 2.2rem) !important; }
      .pg-form-row { grid-template-columns: 1fr; }
      .pg-mag-grid { grid-template-columns: 1fr; }
      .pg-svc-wrap { padding: 4rem 0 3rem; }
      .pg-app-section { padding: 60px 4% 3rem; }
      .pg-cta-section { padding: 4rem 4%; }
      .kf-inner { padding: 1.5rem 1rem; }
      .kf-carousel-wrap { height: 320px; }
      .kf-card { width: 260px; padding: 1.6rem 1.4rem 1.4rem; }
      .kf-title { font-size: clamp(1.4rem, 5vw, 1.9rem); }
      .kf-card-title { font-size: 0.95rem; }
      .kf-card-desc { font-size: 0.82rem; }
      .dm-faq-section { padding: 3rem 4% 2.5rem; }
      .dm-faq-head h3 { font-size: clamp(1.4rem, 5vw, 1.9rem); }
      .dm-faq-question { font-size: 0.86rem; padding: 1rem 1.1rem; }
      .dm-faq-answer { font-size: 0.84rem; padding: 0.5rem 1.1rem 1rem; }
    }
      .reasons-section{
    padding:80px 20px;
    background:#f7f7f7;
}

.container{
    max-width:1200px;
    margin:auto;
}

.section-title{
    text-align:center;
    font-size:40px;
    margin-bottom:60px;
    color:#222;
}

.cards-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:30px;
}

.reason-card{
    position:relative;
    background:#fff;
    border-radius:20px;
    padding:35px 25px;
    min-height:260px;
    box-shadow:0 8px 25px rgba(0,0,0,0.08);
    transition:0.4s ease;
    overflow:hidden;
}

// .border-animation{
//     position:absolute;
//     inset:0;
//     pointer-events:none;
// }

.border-animation::before{
    content:"";
    position:absolute;
    top:0;
    left:0;
    width:70px;
    height:70px;
    border-top:3px solid #004168;
    border-left:3px solid #004168;
    border-radius:20px 0 0 0;
    transition:all .6s ease;
}

.border-animation::after{
    content:"";
    position:absolute;
    right:0;
    bottom:0;
    width:70px;
    height:70px;
    border-bottom:3px solid #004168;
    border-right:3px solid #004168;
    border-radius:0 0 20px 0;
    transition:all .6s ease;
}

// .reason-card:hover .border-animation::before{
//     width:100%;
//     height:100%;
// }

// .reason-card:hover .border-animation::after{
//     width:100%;
//     height:100%;
// }

.reason-card:hover{
    transform:translateY(-8px);
}

.icon-box{
    width:60px;
    height:60px;
    background: #00406838;
    border-radius:12px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#fff;
    font-size:24px;
    margin-bottom:20px;
}

.reason-card h3{
    font-size:22px;
    margin-bottom:15px;
    color:#222;
}

.reason-card p{
    font-size:15px;
    line-height:1.7;
    color:#666;
    margin-bottom:20px;
}

.read-more{
    text-decoration:none;
    color:#222;
    font-weight:600;
}

.read-more i{
    margin-left:5px;
}

@media(max-width:992px){
    .cards-grid{
        grid-template-columns:repeat(2,1fr);
    }
}

@media(max-width:768px){
    .section-title{
        font-size:30px;
    }

    .cards-grid{
        grid-template-columns:1fr;
    }
}
    
  /* ══ PORTFOLIO SECTION ══ */
  .pf-section {
    // padding: 6rem 6%;
    background: #004168;
    position: relative; overflow: hidden;
  }
  .pf-section::before {
    content:''; position:absolute; inset:0; pointer-events:none;
    background-image:linear-gradient(rgba(237,131,55,0.03) 1px,transparent 1px),
                     linear-gradient(90deg,rgba(237,131,55,0.03) 1px,transparent 1px);
    background-size:55px 55px;
  }
  .pf-section::after {
    content:''; position:absolute; top:-200px; right:-200px; width:600px; height:600px;
    border-radius:50%; pointer-events:none;
    background:radial-gradient(circle, rgba(237,131,55,0.07) 0%, transparent 65%);
  }
  .pf-inner {
   margin:0 auto; position:relative; z-index:2;
    display:grid; grid-template-columns:minmax(280px, 450px) 1fr; gap:4rem; align-items:start;
        background: #004168;
    padding: 5rem 4rem;
  }

  /* LEFT TEXT */
  .pf-left { position:sticky; top:6rem; }
  .pf-eyebrow {
    display:inline-flex; align-items:center; gap:.55rem;
    font-family:'Space Mono',monospace; font-size:.68rem; font-weight:700;
    color:var(--orange); letter-spacing:.14em; text-transform:uppercase; margin-bottom:1.2rem;
  }
  .pf-eyebrow-line { width:22px; height:2px; background:var(--orange); border-radius:2px; }
  .pf-heading {
    font-family:'Poppins',sans-serif; font-size:clamp(2rem,3vw,2.8rem);
    font-weight:600; line-height:1.1; color:#fff; margin-bottom:1.2rem;
  }
  .pf-heading span { color:var(--orange); }
  .pf-desc { font-size:.97rem; line-height:1.82; color:rgba(255, 255, 255, 0.92); margin-bottom:2.2rem; }
  .pf-btn {
    display:inline-flex; align-items:center; gap:.55rem;
    background:var(--orange); color:#fff; padding:.88rem 2rem; border-radius:50px;
    font-family:'Poppins',sans-serif; font-size:.9rem; font-weight:700;
    text-decoration:none; border:none; cursor:pointer;
    box-shadow:0 4px 24px rgba(237,131,55,.35); transition:all .22s;
  }
  .pf-btn:hover { background:var(--orange-light); transform:translateY(-2px); box-shadow:0 8px 32px rgba(237,131,55,.45); }
  .pf-btns { display:flex; flex-direction:column; align-items:flex-start; gap:.5rem; }
  /* RIGHT COLUMNS */
  .pf-cols {
    display:grid; grid-template-columns:repeat(3, 1fr); gap:1.1rem; align-items:start;
  }
  .pf-col { display:flex; flex-direction:column; gap:1.1rem; overflow:hidden; }
  /* scroll animation */
  .pf-col-inner {
    display:flex; flex-direction:column; gap:1.1rem;
    transition: transform 0.1s linear;
  }
  /* individual card */
  .pf-card {
    border-radius:16px; overflow:hidden; position:relative; cursor:pointer;
    border:1.5px solid rgba(255,255,255,0.07);
    box-shadow:0 4px 20px rgba(0,0,0,0.35);
    transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
    flex-shrink:0;
  }
  .pf-card:hover { transform:scale(1.03); box-shadow:0 12px 40px rgba(0,0,0,.55); border-color:rgba(237,131,55,0.5); }
  .pf-card img {
    width:100%; height:200px; object-fit:cover; display:block;
    transition:transform .4s ease;
  }
  .pf-card:hover img { transform:scale(1.06); }
  .pf-card-overlay {
    position:absolute; inset:0;
    background:linear-gradient(180deg, transparent 40%, rgba(2,27,43,0.92) 100%);
    opacity:0; transition:opacity .3s ease;
    display:flex; flex-direction:column; justify-content:flex-end; padding:1rem 1.1rem;
  }
  .pf-card:hover .pf-card-overlay { opacity:1; }
  .pf-card-label {
    font-family:'Poppins',sans-serif; font-size:.78rem; font-weight:700; color:#fff;
    margin-bottom:.2rem;
  }
  .pf-card-tag {
    font-family:'Space Mono',monospace; font-size:.6rem; color:var(--orange);
    letter-spacing:.08em; text-transform:uppercase;
  }
    .pf-left { position:static; }
  } }
  `}</style>
);

// ── Key Features Data ─────────────────────────────────
const FEATURES = [
  { icon: <img src="/img/icon/feat-structure.webp" alt="Strategic Website Structure" width="28" height="28" />, title: "Strategic Website Structure", desc: "Well-planned layouts and intuitive navigation systems crafted to enhance usability, improve engagement, and guide visitors smoothly toward meaningful actions." },
  { icon: <img src="/img/icon/feat-responsive.webp" alt="Responsive and Adaptive Design" width="28" height="28" />, title: "Responsive & Adaptive Design", desc: "Device-optimized, mobile-first designs ensuring seamless performance and consistent user experience across desktops, tablets, and smartphones." },
  { icon: <img src="/img/icon/feat-seo.webp" alt="Search Ready Development" width="28" height="28" />, title: "Search-Ready Development", desc: "SEO-focused coding practices, structured metadata, schema setup, and optimized architecture to strengthen search engine visibility." },
  { icon: <img src="/img/icon/feat-performance.webp" alt="Speed and Performance Enhancement" width="28" height="28" />, title: "Speed & Performance Enhancement", desc: "Optimized frameworks, efficient database structuring, and performance tuning techniques to deliver fast-loading and stable websites." },
  { icon: <img src="/img/icon/feat-integrations.webp" alt="Seamless System Integrations" width="28" height="28" />, title: "Seamless System Integrations", desc: "Integration with payment gateways, WhatsApp, shipping systems, analytics tools, and marketing solutions for streamlined operations." },
  { icon: <img src="/img/icon/feat-scalability.webp" alt="Future Ready Scalability" width="28" height="28" />, title: "Future-Ready Scalability", desc: "Flexible development frameworks designed to accommodate business expansion, advanced features, increasing traffic, and evolving digital needs." },
];

// ── FAQ Data ──────────────────────────────────────────
const faqData = [
  { q: "What does a Digital Marketing Company in Coimbatore do?", a: "A Digital Marketing Company in Coimbatore helps businesses grow online through services like SEO, Google Ads, social media marketing, content marketing, and website optimization." },
  { q: "Why should I choose a Digital Marketing Agency in Coimbatore?", a: "Choosing a Digital Marketing Agency in Coimbatore ensures local market understanding, targeted strategies, and cost-effective campaigns focused on measurable results such as leads, conversions, and ROI." },
  { q: "What digital marketing services does PCS offer?", a: "PCS offers SEO, Paid Marketing (PPC), Social Media Marketing, Content Marketing, Website Development, and Graphic Design — all under one roof to help your business grow online." },
  { q: "How long does it take to see results from digital marketing?", a: "SEO typically shows results in 3–6 months, while paid ads can generate leads within days. We set clear timelines and KPIs from day one so you always know what to expect." },
  { q: "Do you provide reports and analytics for campaigns?", a: "Yes. We provide transparent monthly reports covering traffic, leads, conversions, ROI, and campaign performance so you have full visibility into your investment." },
  { q: "Can you handle both digital marketing and website development together?", a: "Absolutely. PCS is a full-service agency offering both digital marketing and website development, ensuring your site and campaigns work together for maximum results." },
];

// ── Hero ────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="pg-hero" id="hero">
      <div className="pg-hero-left">
        <div className="pg-h-badge"><div className="pg-badge-dot" />Digital Marketing</div>
        <h1 className="pg-hero-heading">
          Grow Your Business with Coimbatore's Most{" "}
          <span className="hl" style={{ marginRight: "12px" }}>Trusted Digital Marketing</span>{" "}
          Company
        </h1>
        <p className="pg-hero-sub">
          Grow your business with a results-driven Digital Marketing Company in Coimbatore that focuses on visibility, lead generation, and long-term business growth. At PCS, we don't just run campaigns — we build strategic digital ecosystems that help businesses attract the right audience, generate quality leads, and improve conversions.
        </p>
        <p className="pg-hero-sub">
          As a performance-focused Digital Marketing Agency, we deliver tailored strategies that improve ROI, engagement, and sustainable growth in today's competitive digital landscape.
        </p>
      </div>
      <div className="pg-hero-right">
        <div className="pg-form-card">
          <h2 className="pg-form-title">Your Growth, <span>Our Mission.</span></h2>
          <p className="pg-form-sub">Fill in your details — we'll get back within 24 hours.</p>
          <HeroContactForm />
        </div>
      </div>
    </section>
  );
}

function HeroContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = () => { if (!form.name || !form.email || !form.phone) return; setSubmitted(true); };
  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "2rem 0" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: ".8rem" }}>✅</div>
        <p style={{ color: "#022b44", fontWeight: 700, fontSize: "1.1rem", marginBottom: ".4rem" }}>Thank you!</p>
        <p style={{ color: "#666", fontSize: ".88rem" }}>We'll get back to you within 24 hours.</p>
      </div>
    );
  }
  return (
    <>
      <div className="pg-form-row">
        <div className="pg-form-field"><input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} /></div>
        <div className="pg-form-field"><input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} /></div>
      </div>
      <div className="pg-form-row">
        <div className="pg-form-field">
          <div className="pg-phone-wrap">
            <span className="pg-phone-prefix">IN +91</span>
            <input type="tel" name="phone" placeholder="Mobile Number" value={form.phone} onChange={handleChange} />
          </div>
        </div>
        <div className="pg-form-field"><input type="text" name="company" placeholder="Company Name" value={form.company} onChange={handleChange} /></div>
      </div>
      <div className="pg-form-row" style={{ gridTemplateColumns: "1fr" }}>
        <div className="pg-form-field"><textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} /></div>
      </div>
      <div className="pg-form-footer">
        <button className="pg-form-btn" onClick={handleSubmit}>Send Message<span className="pg-form-btn-arr">→</span></button>
      </div>
    </>
  );
}


// ── App Banner ────────────────────────────────────────
function AppBannerSection() {
  return (
    <section className="pg-app-section">
      <div className="pg-app-outer">
        <div className="pg-app-card">
          <div className="pg-app-left">
            <div className="pg-app-badge">
              <div className="pg-app-badge-dot" />
              Mobile App
            </div>
            <h2 className="pg-app-heading">
              PCS, <em>your partner</em><br />in digital growth.
            </h2>
            <p className="pg-app-sub">
              Find and manage your favourite digital marketing services from anywhere with the PCS Business app.
            </p>
            <div className="pg-app-btns">
              <a href="#" className="pg-app-store-btn">
                <svg viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <div className="pg-app-btn-text">
                  <span className="pg-app-btn-label">Download on the</span>
                  <span className="pg-app-btn-name">App Store</span>
                </div>
              </a>
              <a href="#" className="pg-app-store-btn">
                <svg viewBox="0 0 24 24"><path d="M3.18 23.76c.3.17.64.22.99.14l12.12-6.99-2.54-2.54-10.57 9.39zm-1.61-19.4C1.22 4.8 1 5.28 1 5.9v12.2c0 .62.22 1.1.57 1.54l.08.08 6.83-6.83v-.18L1.65 6.28l-.08.08zm18.44 8.4l-2.43-1.41-2.85 2.85 2.85 2.85 2.45-1.41c.7-.4.7-1.06 0-1.46l-.02-.43zm-17.04 9.83l12.12-7-2.54-2.54-9.58 9.54z"/></svg>
                <div className="pg-app-btn-text">
                  <span className="pg-app-btn-label">Get it on</span>
                  <span className="pg-app-btn-name">Google Play</span>
                </div>
              </a>
            </div>
          </div>
          <div className="pg-app-right">
            <div className="pg-phone-wrapper">
              <div className="pg-phone-frame">
                <div className="pg-ph-notch" />
                <div className="pg-ph-screen">
                  <div className="pg-ph-top">
                    <p className="pg-ph-hello">Hello,</p>
                    <p className="pg-ph-name">Alicia Regis</p>
                    <div className="pg-ph-tabs">
                      <span className="pg-ph-tab">Beginner</span>
                      <span className="pg-ph-tab active">Intermediate</span>
                      <span className="pg-ph-tab">Advanced</span>
                    </div>
                  </div>
                  <div className="pg-ph-body">
                    <p className="pg-ph-section-label">Popular Workouts</p>
                    <div className="pg-ph-card">
                      <div className="pg-ph-card-img">
                        <div className="pg-ph-card-title">Wellness<br />Workshops</div>
                        <div className="pg-ph-play" />
                      </div>
                      <div className="pg-ph-pills">
                        <span className="pg-ph-pill pg-ph-pill-g">1h 15 Min</span>
                        <span className="pg-ph-pill pg-ph-pill-o">300 kcal</span>
                      </div>
                    </div>
                    <p className="pg-ph-section-label">Today Plan</p>
                    <div className="pg-ph-today">
                      <div className="pg-ph-today-label">Progress</div>
                      <div className="pg-ph-bar f w8" />
                      <div className="pg-ph-bar f w5" />
                      <div className="pg-ph-bar f w7" />
                    </div>
                  </div>
                  <div className="pg-ph-nav">
                    <div className="pg-ph-nav-item active">🏠</div>
                    <div className="pg-ph-nav-item">📍</div>
                    <div className="pg-ph-nav-item">📋</div>
                    <div className="pg-ph-nav-item">👤</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CTA Split Section ─────────────────────────────────
function CTASplitSection() {
  return (
    <section className="pg-cta-section">
      <div className="pg-cta-inner">
        <div className="pg-cta-img-wrap">
          <img src="https://placehold.co/600x450/e8f0f7/004168?text=Your+Image+Here" alt="PCS Digital Marketing Team in Coimbatore" className="pg-cta-img" />
          <div className="pg-cta-float-badge">
            <div className="pg-cta-badge-dot" />
            <div>
              <p className="pg-cta-badge-title">200+ Clients</p>
              <p className="pg-cta-badge-sub">Across India</p>
            </div>
          </div>
          <div className="pg-cta-float-stat">
            <p className="pg-cta-stat-num">98%</p>
            <p className="pg-cta-stat-label">Client<br />Satisfaction</p>
          </div>
        </div>
        <div>
                       <div className="partners-header1" >
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Trusted</h2>
          </div>
          <h2 className="pg-cta-heading">Ready to <em>Scale Your</em><br />Business Digitally?</h2>
          <p className="pg-cta-desc">We are Coimbatore's most trusted digital marketing partner, helping businesses achieve measurable results through data-driven strategies and creative execution.</p>
          <p className="pg-cta-desc2">From startups to enterprises, our team crafts tailored campaigns that drive real growth — more leads, more conversions, and lasting brand authority.</p>
          <p className="pg-cta-desc2">From startups to enterprises, our team crafts tailored campaigns that drive real growth — more leads, more conversions, and lasting brand authority.</p>
        </div>
      </div>
    </section>
  );
}

// ── Modern Features Section ───────────────────────────
function ModernFeaturesSection() {
  return (
    <section className="mf-outer">
      <div className="mf-head">
                     <div className="partners-header1" style={{ textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Web Development Services</h2>
          </div>
        <h2 className="mf-h2">Our <span>Modern Features</span></h2>
        <p className="mf-sub">Everything your website needs — built to perform, rank, and scale.</p>
      </div>
      <div className="mf-body">
        <div className="mf-col">
          <div className="mf-item">
            <div className="mf-icon-box"><i className="ti ti-code" aria-hidden="true"></i></div>
            <div><p className="mf-t">Custom Web Development</p><p className="mf-d">Fully customized websites tailored to your goals — no templates, only scalable solutions.</p></div>
          </div>
          <div className="mf-item">
            <div className="mf-icon-box"><i className="ti ti-plug" aria-hidden="true"></i></div>
            <div><p className="mf-t">API Integration</p><p className="mf-d">Connect payment gateways, CRM, WhatsApp &amp; shipping tools to automate your workflows.</p></div>
          </div>
          <div className="mf-item">
            <div className="mf-icon-box"><i className="ti ti-device-mobile" aria-hidden="true"></i></div>
            <div><p className="mf-t">Mobile Responsiveness</p><p className="mf-d">Flawless performance across all devices — desktop, tablet, and smartphone.</p></div>
          </div>
        </div>
        <div className="mf-phone">
          <div className="mf-phone-outer">
            <div className="mf-screen">
              <div className="mf-notch"></div>
              <div className="mf-topbar">
                <span className="mf-tbback">‹</span>
                <span className="mf-tbtitle">PCS Dashboard</span>
                <div className="mf-tbmore"><div className="mf-tbdot"></div><div className="mf-tbdot"></div><div className="mf-tbdot"></div></div>
              </div>
              <div className="mf-card">
                <p className="mf-cl">Active Project</p>
                <p className="mf-cn">May 2025 — Ongoing</p>
                <p className="mf-ctype">Web Dev — SEO Build</p>
                <div className="mf-circles">
                  <div className="mf-circ" style={{ background: "#ed8337" }}></div>
                  <div className="mf-circ" style={{ background: "#004168", marginLeft: "-5px" }}></div>
                </div>
                <p className="mf-al">Project Value</p>
                <p className="mf-av">₹84,500</p>
              </div>
              <div className="mf-sec">
                <p className="mf-sl">Recent Activity</p>
                <div className="mf-txn">
                  <div className="mf-txl"><div className="mf-av2" style={{ background: "#ed8337" }}>A</div><div><p className="mf-tn">API Integrated</p><p className="mf-td">May 14</p></div></div>
                  <span className="mf-ta mf-g">Done ✓</span>
                </div>
                <div className="mf-txn">
                  <div className="mf-txl"><div className="mf-av2" style={{ background: "#004168" }}>S</div><div><p className="mf-tn">SEO Structure</p><p className="mf-td">May 12</p></div></div>
                  <span className="mf-ta mf-g">Done ✓</span>
                </div>
                <div className="mf-txn">
                  <div className="mf-txl"><div className="mf-av2" style={{ background: "#7c3aed" }}>H</div><div><p className="mf-tn">Hosting Setup</p><p className="mf-td">May 10</p></div></div>
                  <span className="mf-ta mf-r">Live 🔴</span>
                </div>
              </div>
              <div className="mf-nav"><div className="mf-nd a"></div><div className="mf-nd"></div><div className="mf-nd"></div><div className="mf-nd"></div></div>
            </div>
          </div>
        </div>
        <div className="mf-col">
          <div className="mf-item rev">
            <div className="mf-icon-box"><i className="ti ti-search" aria-hidden="true"></i></div>
            <div><p className="mf-t">SEO Optimized Structure</p><p className="mf-d">Clean code, schema markup, optimized URLs &amp; meta structure for top search rankings.</p></div>
          </div>
          <div className="mf-item rev">
            <div className="mf-icon-box"><i className="ti ti-rocket" aria-hidden="true"></i></div>
            <div><p className="mf-t">Page Speed Optimization</p><p className="mf-d">Image compression, caching &amp; lightweight frameworks for blazing-fast load times.</p></div>
          </div>
          <div className="mf-item rev">
            <div className="mf-icon-box"><i className="ti ti-server" aria-hidden="true"></i></div>
            <div><p className="mf-t">Hosting &amp; Maintenance</p><p className="mf-d">Hostinger setup with ongoing security monitoring, backups &amp; updates 24/7.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Why Choose Us Section ────────────────────────────
function WhyChooseUsSection() {
  return (
    <>
      <style>{`
        /* ══ WHY CHOOSE US — TARGET SECTION ══ */
        .wcu-section {
          position: relative;
          padding: 7rem 6% 8rem;
          background: linear-gradient(135deg, #002a44 0%, #004168 60%, #0a5282 100%);
          overflow: hidden;
        }
        .wcu-section::before {
          content:''; position:absolute; inset:0; pointer-events:none;
          background-image: linear-gradient(rgba(237,131,55,0.04) 1px,transparent 1px),
                            linear-gradient(90deg,rgba(237,131,55,0.04) 1px,transparent 1px);
          background-size: 60px 60px;
        }
        .wcu-inner {
          position: relative; z-index: 2;
          max-width: 1160px; margin: 0 auto;
        }
        .wcu-header { margin-bottom: 3.5rem; }
        .wcu-eyebrow {
          display: inline-flex; align-items: center; gap: .5rem;
          font-family: 'Poppins', sans-serif;
          font-size: .72rem; font-weight: 700; color: #ed8337;
          letter-spacing: .14em; text-transform: uppercase; margin-bottom: .9rem;
        }
        .wcu-eyebrow-line { width: 22px; height: 2px; background: #ed8337; border-radius: 2px; }
        .wcu-heading {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.9rem, 2.9vw, 2.8rem);
          font-weight: 800; line-height: 1.12; letter-spacing: -.025em;
          color: #ffffff;
        }
        .wcu-heading span { color: #ed8337; }
        .wcu-body {
          display: grid;
          grid-template-columns: 480px 1fr;
          gap: 3rem;
          align-items: center;
        }
        .wcu-target-wrap {
          position: relative;
          width: 480px; height: 460px;
          flex-shrink: 0;
        }
        .wcu-arc-svg {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          pointer-events: none; overflow: visible;
        }
        .wcu-target-svg {
          position: absolute;
    left: -125px;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 60%;
    filter: drop-shadow(0 20px 50px rgba(0, 0, 0, 0.18));
    animation: wcu-target-float 4s ease-in-out infinite;

        }
        @keyframes wcu-target-float {
          0%,100% { transform: translateY(-50%) translateY(0); }
          50%      { transform: translateY(-50%) translateY(-10px); }
        }
        .wcu-arc-num {
          position: absolute;
          font-family: 'Space Mono', monospace;
          font-size: .7rem; font-weight: 700;
          color: rgba(237,131,55,0.6);
          letter-spacing: .05em;
        }
        .wcu-arc-num.n1 { top: 14%;  left: 52%; }
        .wcu-arc-num.n2 { top: 38%;  left: 61%; }
        .wcu-arc-num.n3 { top: 60%;  left: 61%; }
        .wcu-arc-num.n4 { top: 82%;  left: 52%; }
        .wcu-items {
          display: flex; flex-direction: column; gap: 0;
        }
        .wcu-item {
          display: flex; align-items: flex-start; gap: 1.1rem;
          padding: 1.4rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          opacity: 0; transform: translateX(28px);
          transition: opacity .6s ease, transform .6s ease;
          position: relative;
        }
        .wcu-item:first-child { border-top: 1px solid rgba(255,255,255,0.08); }
        .wcu-item.wcu-in { opacity: 1; transform: translateX(0); }
        .wcu-item-connector {
          position: absolute; left: -3rem; top: 50%;
          width: 2.5rem; height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(237,131,55,0.35));
          transform: translateY(-50%);
        }
        .wcu-item-icon {
          width: 52px; height: 52px; flex-shrink: 0; border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 2px solid rgba(237,131,55,0.35);
          box-shadow: 0 3px 14px rgba(237,131,55,0.15);
          display: flex; align-items: center; justify-content: center;
          transition: background .28s, border-color .28s, transform .28s, box-shadow .28s;
        }
        .wcu-item:hover .wcu-item-icon {
          background: #ed8337; border-color: #ed8337;
          transform: scale(1.1); box-shadow: 0 6px 22px rgba(237,131,55,0.32);
        }
        .wcu-item-icon svg {
          width: 22px; height: 22px; fill: none;
          stroke: #ed8337; stroke-width: 1.8;
          stroke-linecap: round; stroke-linejoin: round;
          transition: stroke .28s;
        }
        .wcu-item:hover .wcu-item-icon svg { stroke: #fff; }
        .wcu-item-body { flex: 1; }
        .wcu-item-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1rem; font-weight: 800;
          color: #ffffff; margin-bottom: .3rem; line-height: 1.25;
          transition: color .22s;
        }
        .wcu-item:hover .wcu-item-title { color: #ed8337; }
        .wcu-item-desc {
          font-size: .86rem; line-height: 1.72; color: rgba(255,255,255,0.55);
        }
        .wcu-item-arrow {
          align-self: center;
          width: 30px; height: 30px; flex-shrink: 0; border-radius: 50%;
          background: rgba(237,131,55,0.08);
          border: 1.5px solid rgba(237,131,55,0.2);
          display: flex; align-items: center; justify-content: center;
          transition: background .28s, border-color .28s, transform .28s;
        }
        .wcu-item:hover .wcu-item-arrow {
          background: #ed8337; border-color: #ed8337; transform: translateX(4px);
        }
        .wcu-item-arrow svg {
          width: 13px; height: 13px; fill: none;
          stroke: #ed8337; stroke-width: 2.2;
          stroke-linecap: round; stroke-linejoin: round;
          transition: stroke .28s;
        }
        .wcu-item:hover .wcu-item-arrow svg { stroke: #fff; }
        @media(max-width:1000px) {
          .wcu-body { grid-template-columns: 1fr; gap: 2rem; }
          .wcu-target-wrap { width: 100%; height: 320px; margin: 0 auto; }
          .wcu-target-svg { left: 50%; transform: translate(-50%, -50%); }
          .wcu-arc-svg { display: none; }
          .wcu-arc-num { display: none; }
          .wcu-item-connector { display: none; }
        }
        @media(max-width:560px) {
          .wcu-section { padding: 5rem 5%; }
          .wcu-target-wrap { height: 260px; }
        }
      `}</style>

      <section className="wcu-section">
        <div className="wcu-inner">

          <div className="wcu-header" style={{textAlign: 'center'}}>
                         <div className="partners-header1" style={{ textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Why Choose Us</h2>
          </div>

            <h2 className="wcu-heading">Results That Speak <span>Louder Than Promises</span></h2>
          </div>

          <div className="wcu-body">

            {/* LEFT: Illustration */}
            <div className="wcu-target-wrap">

              {/* Dashed arc curve + connector lines */}
              <svg className="wcu-arc-svg" viewBox="0 0 480 460" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 300 230 C 340 230 360 80 440 70"  stroke="rgba(237,131,55,0.3)" strokeWidth="1.5" strokeDasharray="6 5" fill="none"/>
                <path d="M 300 230 C 340 230 370 160 440 175" stroke="rgba(237,131,55,0.3)" strokeWidth="1.5" strokeDasharray="6 5" fill="none"/>
                <path d="M 300 230 C 340 230 370 295 440 285" stroke="rgba(237,131,55,0.3)" strokeWidth="1.5" strokeDasharray="6 5" fill="none"/>
                <path d="M 300 230 C 340 230 360 370 440 390" stroke="rgba(237,131,55,0.3)" strokeWidth="1.5" strokeDasharray="6 5" fill="none"/>
                <circle cx="440" cy="70"  r="4" fill="rgba(237,131,55,0.5)"/>
                <circle cx="440" cy="175" r="4" fill="rgba(237,131,55,0.5)"/>
                <circle cx="440" cy="285" r="4" fill="rgba(237,131,55,0.5)"/>
                <circle cx="440" cy="390" r="4" fill="rgba(237,131,55,0.5)"/>
                <circle cx="300" cy="230" r="5" fill="rgba(237,131,55,0.5)"/>
              </svg>

            

              {/* Growth / Analytics Dashboard Image */}
              <img
                src="/img/website-whu-choose-use.webp"
                alt="Results Analytics Dashboard"
                className="wcu-target-svg"
                style={{ objectFit: "contain", borderRadius: "18px" }}
              />

            </div>
            {/* END LEFT */}

            {/* RIGHT: 4 items */}
            <div className="wcu-items" id="wcuItemsRef">

              <div className="wcu-item">
                <div className="wcu-item-connector"></div>
                <div className="wcu-item-icon">
                  <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                </div>
                <div className="wcu-item-body">
                  <div className="wcu-item-title">SEO-Optimized Website Architecture</div>
                  <div className="wcu-item-desc">PCS builds search-engine-friendly websites designed to rank higher, load faster, and attract qualified traffic that converts into real business opportunities.</div>
                </div>
              </div>

              <div className="wcu-item">
                <div className="wcu-item-connector"></div>
                <div className="wcu-item-icon">
                  <svg viewBox="0 0 24 24"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg>
                </div>
                <div className="wcu-item-body">
                  <div className="wcu-item-title">Improved Lead Conversion Efficiency</div>
                  <div className="wcu-item-desc">Our conversion-focused website development and landing page optimization reduced cost per lead by <strong style={{color:"#ed8337"}}>45%</strong>, generating higher-quality inquiries at a lower acquisition cost.</div>
                </div>
              </div>

              <div className="wcu-item">
                <div className="wcu-item-connector"></div>
                <div className="wcu-item-icon">
                  <svg viewBox="0 0 24 24"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
                </div>
                <div className="wcu-item-body">
                  <div className="wcu-item-title">Top 5 Google Rankings Achieved</div>
                  <div className="wcu-item-desc">Through technically sound website development and strategic keyword integration, we secured <strong style={{color:"#ed8337"}}>Top 5</strong> search rankings, outperforming competitors with larger advertising budgets.</div>
                </div>
              </div>

              <div className="wcu-item">
                <div className="wcu-item-connector"></div>
                <div className="wcu-item-icon">
                  <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div className="wcu-item-body">
                  <div className="wcu-item-title">Higher Engagement &amp; Lower Bounce Rate</div>
                  <div className="wcu-item-desc">By enhancing UI/UX design, improving website speed, and optimizing content flow, we reduced bounce rates from <strong style={{color:"#ed8337"}}>80% to 35%</strong>, significantly improving visitor engagement and retention.</div>
                </div>
              </div>

            </div>
            {/* END RIGHT */}

          </div>
        </div>
      </section>

      <WCUScrollReveal />
    </>
  );
}

function WCUScrollReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.wcu-item');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = Array.from(items).indexOf(entry.target);
          setTimeout(() => entry.target.classList.add('wcu-in'), idx * 120);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, []);
  return null;
}



// ── FAQ Section (from doc 1) ──────────────────────────
function FAQSection() {
  const [active, setActive] = useState(null);
  const toggle = (index) => setActive(active === index ? null : index);

  return (
    <section className="dm-faq-section">
      <div className="partners-header1" style={{ textAlign: "center" }}>
        <h2 className="partners-eyebrow" style={{ marginBottom: "20px", textAlign: "center" }}>Frequently Asked Questions</h2>
      </div>
      <div className="container">
        <div className="dm-faq-head">
          <h3>Queries That Could <span>Hold You Back</span></h3>
        </div>
        <div className="dm-faq-wrapper">
          <div className="dm-faq-col">
            {faqData.slice(0, 3).map((item, i) => (
              <div className="dm-faq-item" key={i}>
                <div className="dm-faq-question" onClick={() => toggle(i)}>
                  <span>{item.q}</span>
                  <span className="icon">{active === i ? "−" : "+"}</span>
                </div>
                {active === i && <div className="dm-faq-answer">{item.a}</div>}
              </div>
            ))}
          </div>
          <div className="dm-faq-col">
            {faqData.slice(3, 6).map((item, i) => (
              <div className="dm-faq-item" key={i + 3}>
                <div className="dm-faq-question" onClick={() => toggle(i + 3)}>
                  <span>{item.q}</span>
                  <span className="icon">{active === i + 3 ? "−" : "+"}</span>
                </div>
                {active === i + 3 && <div className="dm-faq-answer">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CTA Split Section 1 ───────────────────────────────
const CTA_FEATURES1 = [
  "ROI-focused campaigns with transparent reporting",
  "Dedicated account manager for every client",
  "Proven strategies across SEO, PPC & Social Media",
];


// ── Services Slider Section ───────────────────────────
const SERVICE_SLIDES = [
  {
    icon: "fas fa-search",
    tag: "01",
    title: "Search Engine Optimization",
    desc: "Rank higher on Google with technical SEO, keyword strategy, on-page & off-page optimisation — driving consistent organic traffic to your business.",
    highlight: "300% avg. traffic growth",
  },
  {
    icon: "fas fa-bullhorn",
    tag: "02",
    title: "Google & Meta Paid Ads",
    desc: "Performance-driven PPC campaigns on Google, Facebook & Instagram — maximising ROI with precise audience targeting and conversion-focused creatives.",
    highlight: "45% lower cost per lead",
  },
  {
    icon: "fas fa-share-alt",
    tag: "03",
    title: "Social Media Marketing",
    desc: "Build a powerful brand presence across platforms with engaging content, community management and data-backed growth strategies.",
    highlight: "2x engagement rate",
  },
  {
    icon: "fas fa-code",
    tag: "04",
    title: "Website Development",
    desc: "Fast, responsive, SEO-ready websites built on modern frameworks — tailored to your brand and engineered to convert visitors into customers.",
    highlight: "50ms avg. load time",
  },
  {
    icon: "fas fa-pen-nib",
    tag: "05",
    title: "Content Marketing",
    desc: "Strategic content that educates, engages and converts — blog posts, landing pages, video scripts and more crafted for your target audience.",
    highlight: "60% higher retention",
  },
  {
    icon: "fas fa-chart-line",
    tag: "06",
    title: "Analytics & Reporting",
    desc: "Transparent monthly reports covering traffic, leads, conversions and ROI — giving you full visibility and clarity on every rupee invested.",
    highlight: "Real-time dashboards",
  },
];

function ServicesSlider() {
  const total = SERVICE_SLIDES.length;
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dir, setDir] = useState("next");
  const autoRef = useRef(null);
  const touchX = useRef(null);

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setDir("next");
      setAnimating(true);
      setTimeout(() => { setCurrent((c) => (c + 1) % total); setAnimating(false); }, 480);
    }, 4000);
  }, [total]);

  useEffect(() => { startAuto(); return () => clearInterval(autoRef.current); }, [startAuto]);

  const goTo = (idx) => {
    if (animating || idx === current) return;
    setDir(idx > current ? "next" : "prev");
    setAnimating(true);
    setTimeout(() => { setCurrent(idx); setAnimating(false); }, 480);
    startAuto();
  };

  const prev = () => goTo((current - 1 + total) % total);
  const next = () => goTo((current + 1) % total);

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) < 40) return;
    dx < 0 ? next() : prev();
  };

  /* visible: active + 2 side cards */
  const getCard = (offset) => SERVICE_SLIDES[(current + offset + total) % total];
  const cards = [getCard(-1), getCard(0), getCard(1)];

  const outLeft  = "svs-out-left";
  const outRight = "svs-out-right";
  const inLeft   = "svs-in-left";
  const inRight  = "svs-in-right";

  return (
    <>
      <style>{`
        /* ══ SERVICES SLIDER ══ */
        .svs-section {
          background: linear-gradient(135deg, #002a44 0%, #004168 60%, #0a5282 100%);
          padding: 80px 5% 70px;
          position: relative;
          overflow: hidden;
        }
        .svs-section::before {
          content:'';
          position:absolute; inset:0; pointer-events:none;
          background-image:
            linear-gradient(rgba(237,131,55,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(237,131,55,0.04) 1px, transparent 1px);
          background-size: 56px 56px;
        }
        .svs-section::after {
          content:'';
          position:absolute; top:-200px; right:-200px;
          width:600px; height:600px; border-radius:50%;
          pointer-events:none;
          background:radial-gradient(circle, rgba(237,131,55,0.07) 0%, transparent 65%);
        }
        .svs-inner { max-width: 1200px; margin: 0 auto; position: relative; z-index:2; }

        /* header */
        .svs-header { text-align:center; margin-bottom: 56px; }
        .svs-eyebrow {
          display:inline-flex; align-items:center; gap:8px;
          font-size:.72rem; font-weight:700; letter-spacing:.16em;
          text-transform:uppercase; color:#ed8337; margin-bottom:12px;
        }
        .svs-eyebrow-line { width:22px; height:2px; background:#ed8337; border-radius:2px; }
        .svs-h2 {
          font-family:'Poppins',sans-serif;
          font-size: clamp(1.9rem,3vw,2.7rem);
          font-weight:700; color:#ffffff; line-height:1.15;
        }
        .svs-h2 span { color:#ed8337; }
        .svs-sub {
          font-size:.96rem; color:rgba(255,255,255,0.7); line-height:1.7;
          max-width:520px; margin:12px auto 0;
        }

        /* stage */
        .svs-stage {
          display:flex; align-items:stretch; justify-content:center;
          gap:20px;
        }

        /* ALL cards — same dark navy base */
        .svs-card {
          background: rgba(255,255,255,0.05);
          border:1.5px solid rgba(237,131,55,0.2);
          border-radius:20px;
          padding:36px 28px 32px;
          display:flex; flex-direction:column;
          transition: all 0.45s cubic-bezier(0.4,0,0.2,1);
          position:relative; overflow:hidden;
          cursor:pointer;
          flex:1;
        }
        .svs-card::before {
          content:'';
          position:absolute; top:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,#ed8337,#f5a66b);
          opacity:0; transition:opacity 0.3s;
        }
        .svs-card:hover::before { opacity:1; }

        /* active card — brighter stand-out */
        .svs-card.svs-active {
          flex:1.6;
          background: rgba(255,255,255,0.10);
          border-color: rgba(237,131,55,0.55);
          box-shadow: 0 20px 56px rgba(0,0,0,0.35);
          transform: translateY(-10px);
        }
        .svs-card.svs-active::before { opacity:1; }

        /* side cards — slightly dimmed */
        .svs-card.svs-side {
          opacity:0.72;
          transform: translateY(4px) scale(0.98);
        }
        .svs-card.svs-side:hover {
          opacity:0.92;
          transform:translateY(0) scale(1);
          border-color:rgba(237,131,55,0.4);
        }

        /* tag */
        .svs-tag {
          font-family:'Space Mono',monospace;
          font-size:.6rem; font-weight:700; letter-spacing:.16em;
          color:rgba(237,131,55,0.6); margin-bottom:18px;
        }

        /* icon circle */
        .svs-icon-wrap {
          width:60px; height:60px; border-radius:50%;
          border:2px solid #ed8337;
          background:rgba(237,131,55,0.1);
          display:flex; align-items:center; justify-content:center;
          margin-bottom:22px; flex-shrink:0;
          transition:background 0.3s, transform 0.3s;
        }
        .svs-card:hover .svs-icon-wrap {
          background:rgba(237,131,55,0.2);
          transform:scale(1.08);
        }
        .svs-icon-wrap i { font-size:22px; color:#ed8337; }

        /* title */
        .svs-card-title {
          font-family:'Poppins',sans-serif;
          font-size:1.05rem; font-weight:700;
          color:#ffffff; margin-bottom:12px; line-height:1.3;
        }
        .svs-active .svs-card-title { color:#ffffff; font-size:1.1rem; }

        /* desc — VISIBLE on ALL cards */
        .svs-card-desc {
          font-size:.86rem; line-height:1.78;
          color:rgba(255,255,255,0.65);
          flex:1; margin-bottom:20px;
        }
        .svs-active .svs-card-desc { color:rgba(255,255,255,0.85); }

        /* highlight pill */
        .svs-highlight {
          display:inline-flex; align-items:center; gap:6px;
          background:rgba(237,131,55,0.12);
          border:1px solid rgba(237,131,55,0.3);
          border-radius:50px;
          padding:5px 14px;
          font-size:.75rem; font-weight:700;
          color:#ed8337; width:fit-content;
          letter-spacing:.03em;
        }
        .svs-active .svs-highlight {
          background:rgba(237,131,55,0.2);
          border-color:rgba(237,131,55,0.5);
        }
        .svs-hl-dot {
          width:6px; height:6px; border-radius:50%;
          background:#ed8337;
          animation:svs-pulse 1.6s infinite;
        }
        @keyframes svs-pulse {
          0%,100%{ opacity:1; transform:scale(1); }
          50%    { opacity:.4; transform:scale(1.5); }
        }

        /* controls */
        .svs-controls {
          display:flex; align-items:center; justify-content:center;
          gap:16px; margin-top:44px;
        }
        .svs-nav {
          width:46px; height:46px; border-radius:50%;
          border:1.5px solid rgba(237,131,55,0.4);
          background:transparent; color:#ed8337;
          font-size:22px; line-height:1;
          cursor:pointer;
          display:flex; align-items:center; justify-content:center;
          transition:all 0.22s;
        }
        .svs-nav:hover { background:#ed8337; color:#fff; border-color:#ed8337; transform:scale(1.1); }
        .svs-dots { display:flex; gap:8px; align-items:center; }
        .svs-dot {
          width:9px; height:9px; border-radius:50%;
          border:1.8px solid rgba(255,255,255,0.25);
          background:transparent;
          padding:0; cursor:pointer;
          transition:all 0.3s;
        }
        .svs-dot.on { width:26px; border-radius:9px; background:#ed8337; border-color:#ed8337; }

        /* responsive */
        @media(max-width:860px) {
          .svs-stage { gap:14px; }
          .svs-card.svs-side { flex:0.85; }
        }
        @media(max-width:600px) {
          .svs-stage { flex-direction:column; }
          .svs-card.svs-side { display:none; }
          .svs-card.svs-active { transform:translateY(0); flex:unset; }
          .svs-section { padding:56px 4% 48px; }
        }
      `}</style>

      <section className="svs-section">
        <div className="svs-inner">

          {/* Header */}
          <div className="svs-header">
            <div className="svs-eyebrow">
                           <div className="partners-header1" style={{ textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>What We Offer</h2>
          </div>

            </div>
            <h2 className="svs-h2">Our <span>Core Services</span></h2>
            <p className="svs-sub">End-to-end digital solutions designed to grow your brand, generate leads, and deliver measurable ROI.</p>
          </div>

          {/* Stage */}
          <div
            className="svs-stage"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {cards.map((card, i) => {
              const isActive = i === 1;
              return (
                <div
                  key={card.tag}
                  className={`svs-card ${isActive ? "svs-active" : "svs-side"}`}
                  onClick={() => { if (!isActive) { i === 0 ? prev() : next(); } }}
                >
                  <div className="svs-tag">— {card.tag}</div>
                  <div className="svs-icon-wrap"><i className={card.icon}></i></div>
                  <div className="svs-card-title">{card.title}</div>
                  <p className="svs-card-desc">{card.desc}</p>
                  <div className="svs-highlight">
                    <span className="svs-hl-dot" />{card.highlight}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="svs-controls">
            <button className="svs-nav" onClick={prev} aria-label="Previous">‹</button>
            <div className="svs-dots">
              {SERVICE_SLIDES.map((_, i) => (
                <button
                  key={i}
                  className={`svs-dot${i === current ? " on" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Service ${i + 1}`}
                />
              ))}
            </div>
            <button className="svs-nav" onClick={next} aria-label="Next">›</button>
          </div>

        </div>
      </section>
    </>
  );
}

function MilestonesCTA() {
  return (
    <section className="ms-cta-section">
      <style>{`
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
      `}</style>

      <div className="ms-cta-glow-l" />
      <div className="ms-cta-glow-r" />
      <div className="ms-cta-line-top" />

      <div className="ms-cta-inner">
        <div className="ms-cta-left">
             <div className="partners-header1">
          <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>
Case Studies</div>
        </div>
          <h2 className="ms-cta-title">
            Explore <span>Proven Results Through</span><br/> Our Case Studies
          </h2>
          <p className="ms-cta-desc">
Discover our projects that demonstrate how strategy and clear execution drive measurable business success.          </p>
        </div>

        <div className="ms-cta-right">
     

          <a href="/contact" className="ms-cta-btn-primary">
            Start Your Growth Journey
            <span className="ms-cta-btn-arr">→</span>
          </a>

          <a href="/portfolio" className="ms-cta-btn-secondary">
            <span className="ms-cta-btn-ico">📊</span>
            View Results
          </a>
        </div>
      </div>

      <div className="ms-cta-line-bottom" />
    </section>
  );
}

const PORTFOLIO_COL1 = [
  { img:"/img/portfolio/urcts.webp", label:"URCTS", tag:"" },
  { img:"/img/portfolio/am.webp", label:"AM Builders", tag:"" },
  { img:"/img/portfolio/zky.webp", label:"ZKY", tag:"" },
  { img:"/img/portfolio/abb.webp", label:"ABB", tag:"" },
  { img:"/img/portfolio/riya.webp", label:"Riya consultancy", tag:"" },
];
const PORTFOLIO_COL2 = [
  { img:"/img/portfolio/feralroots.webp", label:"Feral Roots", tag:"" },
  { img:"/img/portfolio/sterlocare.webp", label:"SterloCare", tag:"" },
  { img:"/img/portfolio/sterlo.webp", label:"Sterlo", tag:"" },
  { img:"/img/portfolio/talenttribe.webp", label:"Talent Tribe", tag:"" },
  { img:"/img/portfolio/sterlobuild.webp", label:"SterloBuild", tag:"" },
];
const PORTFOLIO_COL3 = [
  { img:"/img/portfolio/product1.webp", label:"", tag:"" },
  { img:"/img/portfolio/product2.webp", label:"", tag:"" },
  { img:"/img/portfolio/product3.webp", label:"", tag:"" },
  { img:"/img/portfolio/product4.webp", label:"", tag:"" },
  { img:"/img/portfolio/product5.webp", label:"", tag:"" },
];

function PortfolioColumn({ items, speed, direction }) {
  const innerRef = useRef(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const rafRef = useRef(null);
  // duplicate for infinite loop
  const doubled = [...items, ...items];

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const singleH = el.scrollHeight / 2;

    const animate = () => {
      if (!pausedRef.current) {
        offsetRef.current += speed;
        if (direction === "up") {
          if (offsetRef.current >= singleH) offsetRef.current -= singleH;
          el.style.transform = `translateY(-${offsetRef.current}px)`;
        } else {
          if (offsetRef.current >= singleH) offsetRef.current -= singleH;
          el.style.transform = `translateY(${offsetRef.current - singleH}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, direction]);

  return (
    <div
      className="pf-col"
      style={{ height: "min(600px, 60vw)", overflow: "hidden", position: "relative" }}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div ref={innerRef} className="pf-col-inner">
        {doubled.map((item, i) => (
          <div className="pf-card" key={i}>
            <img src={item.img} alt={item.label} loading="lazy" />
            <div className="pf-card-overlay">
              <div className="pf-card-label">{item.label}</div>
              <div className="pf-card-tag">{item.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PortfolioSection() {
  return (
    <section className="pf-section">
      <div className="pf-inner">
        {/* LEFT */}
        <div className="pf-left">
       <div className="partners-header1">
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our  Portfolio</h2>
          </div>
          <h3 className="pf-heading">
            Proven Website <span><i>Solutions Across</i></span> Industries
          </h3>
          <p className="pf-desc">
Review performance-driven websites developed with strategic architecture, intuitive design, and measurable results.

          </p>

          <div className="pf-btns">
            <a href="/portfolio" className="pf-btn">View All Projects →</a>
          </div>
        </div>

        {/* RIGHT — 3 auto-scroll columns */}
        <div className="pf-cols">
          <PortfolioColumn items={PORTFOLIO_COL1} speed={0.6} direction="up" />
          <PortfolioColumn items={PORTFOLIO_COL2} speed={0.5} direction="down" />
          <PortfolioColumn items={PORTFOLIO_COL3} speed={0.7} direction="up" />
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════
//  SECTION 8: TESTIMONIAL SLIDER
// ════════════════════════════════════════════

function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

const testimonials = [
  { index: 0, text: "PCS delivered a modern responsive website with SEO optimization, analytics integration, heatmap tracking, and performance monitoring. We appreciate their team's dedication, technical expertise, and timely support, which significantly improved our online visibility, website performance, and customer engagement.", name: "Mr.Ashwin", role: "Founder", badge: ["Website Development", "SEO"] },
  { index: 1, text: "Our basic single-page website was upgraded into a professionally structured multi-page platform with enhanced SEO, GMB optimization, analytics setup, and customer activity tracking. We thank the PCS team for their commitment, quick support, and valuable contribution in strengthening our online presence.", name: "Mr.Sabarinath", role: "Founder", badge: ["Website Development", "SEO", "Local SEO"] },
  { index: 2, text: "A fresh UI design with strong website development, improved online reach, lead capture setup, and user activity insights was successfully developed by the PCS team. Every change request was handled patiently while turning our ideas into exactly what we expected. The late-night support before launch was truly appreciated.", name: "Mr.Clement Selvam", role: "Founder", badge: ["Website Development", "SEO"] },
  { index: 3, text: "As a growing forest-based natural products brand, we partnered with PCS to expand our store presence and online sales. PCS team developed a complete e-commerce platform with Razorpay setup, order management, inventory tracking, centralized dashboard, WhatsApp integration for smooth business operations.", name: "Mr.Karupasamy", role: "Director", badge: ["E-Commerce", "SEO", "Local SEO"] },
  { index: 4, text: "Competing in the global market we required a website that matched international standards. With strategic content, SEO optimization, analytics integration, and performance enhancements, our digital presence was significantly strengthened. We appreciate the PCS team for their expertise, flexibility, consistent support throughout the process.", name: "Mr.Gunasekaran", role: "Founder", badge: ["SEO", "Content Marketing", "Paid Ads"] },
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

function getTestimonialPosStyles(isMobile, isTablet) {
  const leftX = isTablet ? -220 : -300;
  const rightX = isTablet ? 220 : 300;
  const farLeftX = isTablet ? -380 : -490;
  const farRightX = isTablet ? 380 : 490;
  return {
    center: { transform: "translateX(0) scale(1) rotateY(0deg)", opacity: 1, filter: "none", zIndex: 10, boxShadow: "0 24px 64px rgba(13,31,60,0.14)", pointerEvents: "auto" },
    left: { transform: `translateX(${leftX}px) scale(0.85) rotateY(18deg)`, opacity: 0.55, filter: "blur(2px)", zIndex: 5, boxShadow: "none", pointerEvents: "auto" },
    right: { transform: `translateX(${rightX}px) scale(0.85) rotateY(-18deg)`, opacity: 0.55, filter: "blur(2px)", zIndex: 5, boxShadow: "none", pointerEvents: "auto" },
    farLeft: { transform: `translateX(${farLeftX}px) scale(0.7) rotateY(28deg)`, opacity: 0, filter: "blur(4px)", zIndex: 1, boxShadow: "none", pointerEvents: "none" },
    farRight: { transform: `translateX(${farRightX}px) scale(0.7) rotateY(-28deg)`, opacity: 0, filter: "blur(4px)", zIndex: 1, boxShadow: "none", pointerEvents: "none" },
  };
}

function StarIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="#f47920" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function TestimonialCard({ data, pos, onClick, isMobile, isTablet, isActive }) {
  const posStyles = getTestimonialPosStyles(isMobile, isTablet);
  const cardWidth = isMobile
    ? Math.min((typeof window !== "undefined" ? window.innerWidth : 360) - 40, 320)
    : isTablet ? 300 : 340;
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
        top: 0,                  /* ← margin-top bug fix: top:0 + alignItems:flex-start on parent */
        ...posStyles[pos],
      }}
    >
      <div style={{ fontSize: isMobile ? 28 : 36, color: "#f47920", lineHeight: 1, fontFamily: "Georgia, serif", marginBottom: 8 }}>"</div>
      <div style={{ fontSize: isMobile ? 11.5 : 13, color: "#3d4f6a", lineHeight: isMobile ? 1.65 : 1.75, marginBottom: isMobile ? 14 : 22, flex: 1, fontWeight: 400 }}>{data.text}</div>
      <div style={{ height: 1, background: "#f0f2f7", marginBottom: isMobile ? 10 : 16 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <div style={{ fontSize: isMobile ? 13 : 15, fontWeight: 700, color: "#0d1f3c" }}>{data.name}</div>
        <div style={{ fontSize: 11, color: "#6b7a94", lineHeight: 1.4, fontWeight: 400 }}>{data.role}</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 4 }}>
          {data.badge.map((b) => (
            <span key={b} style={{ display: "inline-block", fontSize: 9.5, fontWeight: 600, letterSpacing: "0.05em", padding: "2px 7px", borderRadius: 20, background: "rgba(244,121,32,0.1)", color: "#f47920", textTransform: "uppercase" }}>{b}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 3, marginTop: 6 }}>
          {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
        </div>
      </div>
    </div>
  );
}

function TestimonialSlider() {
  const [current, setCurrent] = useState(2);
  const timerRef = useRef(null);
  const touchX = useRef(null);
  const stageRef = useRef(null);
  const [stageHeight, setStageHeight] = useState(380);
  const total = testimonials.length;
  const width = useWindowWidth();
  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;

  /* ── Dynamic stage height: measure the active card after render ── */
  useEffect(() => {
    if (!stageRef.current) return;
    const activeCard = stageRef.current.querySelector("[data-active='true']");
    if (activeCard) {
      const h = activeCard.getBoundingClientRect().height;
      if (h > 0) setStageHeight(h + 8);  /* +8 tiny breathing room */
    }
  }, [current, width]);

  const startAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % total), 3000);
  };
  useEffect(() => { startAuto(); return () => clearInterval(timerRef.current); }, []);

  const goTo = (idx) => { setCurrent(idx); startAuto(); };

  /* ── Touch swipe handlers ── */
  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) < 40) return;          /* ignore tiny taps */
    if (dx < 0) goTo((current + 1) % total);
    else goTo((current - 1 + total) % total);
  };

  return (
    <section style={{ width: "100%", maxWidth: 1100, margin: "0 auto", padding: isMobile ? "40px 16px" : "60px 20px", fontFamily: "'Poppins', sans-serif", overflow: "hidden" }}>
      <div className="partners-header1" style={{ marginBottom: isMobile ? 12 : 16, textAlign: "center" }}>
        <div className="partners-eyebrow" style={{ marginBottom: "12px", textAlign: "start" }}>Client Testimonials</div>
      </div>
      <h2 style={{ fontSize: isMobile ? 22 : isTablet ? 28 : "clamp(28px,3vw,40px)", fontWeight: 700, color: "#0d1f3c", lineHeight: 1.25, marginBottom: isMobile ? 28 : 48, textAlign: "center" }}>
        What Our Clients{" "}
        <span style={{ color: "#f47920", fontStyle: "italic", fontWeight: 700 }}>Say About PCS</span>
      </h2>

      {/* Stage — alignItems:flex-start so cards grow downward, no margin-top */}
      <div
        ref={stageRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{
          position: "relative",
          height: stageHeight,
          display: "flex",
          alignItems: "flex-start",   /* ← key fix: cards anchor at top, no phantom margin */
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
            />
          );
        })}
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, alignItems: "center" }}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
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

      {/* Mobile swipe hint */}
      {isMobile && (
        <p style={{ textAlign: "center", fontSize: 11, color: "#b0b8c9", marginTop: 14, letterSpacing: "0.03em" }}>
          ← swipe to explore →
        </p>
      )}
    </section>
  );
}


// ── Technologies Marquee Section ─────────────────────
function TechnologiesSection() {
  const row1 = [
    { name: "HTML5",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3",         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "PHP",          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "React",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "MySQL",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Shopify",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg" },
  ];
  const row2 = [
    { name: "WordPress",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
    { name: "Elementor",    logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/Elementor-Logo.png" },
    { name: "WPBakery",     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png" },
    { name: "Node.js",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Laravel",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "Bootstrap",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Git",          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ];

  // Duplicate each row so seamless infinite scroll works
  const doubled1 = [...row1, ...row1];
  const doubled2 = [...row2, ...row2];

  return (
    <section className="tech-section">
      <div className="tech-header">
                            <div className="partners-header1" style={{ textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Technologies</h2>
          </div>
        <h2 className="tech-title">
          Technologies We <span>Work With</span>
        </h2>
        <p className="tech-desc">
          We leverage the world's most trusted tools and frameworks to build fast, scalable, and future-proof digital solutions for your business.
        </p>
      </div>

      {/* Row 1 — scrolls RIGHT (left-to-right direction) */}
      <div className="tech-track-wrap" style={{ marginBottom: 20 }}>
        <div className="tech-row">
          <div className="tech-row-inner row-right speed-1">
            {doubled1.map((t, i) => (
              <div className="tech-card" key={i}>
                <img src={t.logo} alt={t.name} className="tech-card-logo" />
                <span className="tech-card-name">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 — scrolls LEFT (right-to-left direction) */}
      <div className="tech-track-wrap">
        <div className="tech-row">
          <div className="tech-row-inner row-left speed-2">
            {doubled2.map((t, i) => (
              <div className="tech-card" key={i}>
                <img src={t.logo} alt={t.name} className="tech-card-logo" />
                <span className="tech-card-name">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Our Services Section ──────────────────────────────
function OurServicesSection() {
  const services = [
    {
      img: "img/website-whu-choose-use.webp",
      title: "Digital Marketing",
      desc: "Data-driven marketing strategies to increase brand awareness and customer acquisition.",
      features: ["Search Engine Optimization", "Social Media Marketing", "Lead Generation Campaigns"],
      href: "#",
    },
    {
      img: "img/website-whu-choose-use.webp",
      title: "Web Design",
      desc: "Creative and responsive website designs that enhance user experience.",
      features: ["Responsive Layouts", "Modern UI Design", "Mobile Friendly Pages"],
      href: "#",
    },
    {
      img: "img/website-whu-choose-use.webp",
      title: "Web Development",
      desc: "Custom-built websites with high performance and scalable architecture.",
      features: ["Custom Development", "CMS Integration", "SEO Ready Structure"],
      href: "#",
    },
    {
      img: "img/website-whu-choose-use.webp",
      title: "App Development",
      desc: "Android and iOS applications built for performance and engagement.",
      features: ["Android Apps", "iOS Applications", "Cross Platform Development"],
      href: "#",
    },
    {
      img: "img/website-whu-choose-use.webp",
      title: "Graphic Design",
      desc: "Professional branding and creative designs that make businesses stand out.",
      features: ["Logo Design", "Brand Identity", "Marketing Materials"],
      href: "#",
    },
    {
      img: "img/website-whu-choose-use.webp",
      title: "Business Consulting",
      desc: "Strategic consulting services focused on business growth and efficiency.",
      features: ["Growth Planning", "Market Analysis", "Business Strategy"],
      href: "#",
    },
  ];

  return (
    <section style={{  padding: "70px 5% 0px" }}>
             <div className="partners-header1" style={{ textAlign: 'center' }}>
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our  Service</h2>
          </div>
      <h2 style={{ textAlign: "center", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#004168", marginBottom: 15, fontFamily: "'Poppins', sans-serif" }}>
        Our Services
      </h2>
      <p style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 60px", color: "#666", lineHeight: 1.8, fontSize: "0.96rem" }}>
        Professional digital solutions designed to help businesses grow, improve visibility, and generate more leads online.
      </p>
      <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 30 }}>
        {services.map((svc, i) => (
          <div
            key={i}
            style={{
            background: "#fff",
              marginBottom: '8%',
              borderRadius: 24,
              padding: "30px 30px 0px 30px",
              boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
              borderTop: "5px solid #ed8337",
              display: "flex",
              flexDirection: "column",
              height: "90%",
              transition: "transform 0.35s ease, box-shadow 0.35s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.12)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 35px rgba(0,0,0,0.08)"; }}
          >
            <img src={svc.img} alt={svc.title} style={{ width: "95%", height: "30%", objectFit: "contain", margin: "0 auto 20px" }} />
            <h3 style={{ color: "#004168", fontSize: 20, marginBottom: 15, fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              {svc.title}
            </h3>
            <p style={{ color: "#666", lineHeight: 1.8, marginBottom: 20,  fontSize: "0.9rem" }}>
              {svc.desc}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 25px"}}>
              {svc.features.map((f, j) => (
                <li key={j} style={{ position: "relative", paddingLeft: 30, marginBottom: 12, color: "#444", lineHeight: 1.6, fontSize: "0.9rem" }}>
                  <span style={{ position: "absolute", left: 0, top: 0, color: "#ed8337", fontWeight: "bold", fontSize: 18 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={svc.href}
              style={{ display: "inline-block", width: '40%',fontSize:'14px',textAlign: "center", padding: "10px 20px", background: "#004168", color: "#fff", textDecoration: "none", borderRadius: 50, fontWeight: 600, fontFamily: "'Poppins', sans-serif", transition: "background 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#ed8337"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#004168"; }}
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Page Export ───────────────────────────────────────
export default function DigitalMarketingNewPage() {
  return (
    <Layout
      title="No.1 Digital Marketing Company in Coimbatore | ROI-Driven"
      description="Top Digital Marketing Company in Coimbatore providing SEO services, paid ads, social media marketing, and web development solutions for business growth."
    >
      <SEOHead />
      <GlobalStyles />
      <HeroSection />
      <OurServicesSection />
      <TechnologiesSection />
    
      <CTASplitSection />
        <AppBannerSection />
      <PortfolioSection />
      <ModernFeaturesSection />
      <WhyChooseUsSection />
         <TestimonialSlider />
      <MilestonesCTA />
      <ServicesSlider />
      <FAQSection />
    </Layout>
  );
}