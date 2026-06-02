import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import BlogSection from "../components/BlogSection";
import CTASection from "../components/HomePage/CTA";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
const banner = "/img/smm.png";

// ─── CSS-in-JS via a single <style> block injected once ───────────────────────
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap');

  :root {
    --navy:        #022b44;
    --navy-deep:   #011a2a;
    --navy-mid:    #0a3652;
    --orange:      #ed8337;
    --orange-light:#f5a66b;
    --text-dim:    rgba(255,255,255,0.45);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { overflow-x: hidden; }

  /* ── HERO ── */
  .smm-hero {
    min-height: 100vh;
    display: grid; grid-template-columns: 1fr 1fr;
    align-items: center; gap: 2rem;
    padding: 2rem 6% 4rem;
    position: relative; overflow: hidden;
    background: #004168;
  }
  .smm-hero::before {
    content:''; position:absolute; inset:0; pointer-events:none;
    background:
      radial-gradient(ellipse 65% 70% at 100% 50%, rgba(237,131,55,0.10) 0%, transparent 60%),
      radial-gradient(ellipse 50% 60% at 0% 100%, rgba(10,66,102,0.5) 0%, transparent 55%);
  }
  .smm-hero::after {
    content:''; position:absolute; inset:0; pointer-events:none;
    background-image: linear-gradient(rgba(237,131,55,0.028) 1px,transparent 1px), linear-gradient(90deg,rgba(237,131,55,0.028) 1px,transparent 1px);
    background-size: 52px 52px;
  }
  .smm-hero-left { position:relative; z-index:2; display:flex; flex-direction:column; }
  .smm-badge { display:inline-flex; align-items:center; gap:0.5rem; background:rgba(237,131,55,0.1); border:1px solid rgba(237,131,55,0.28); color:var(--orange); font-size:0.72rem; font-weight:600; padding:0.38rem 1rem; border-radius:50px; letter-spacing:0.09em; text-transform:uppercase; width:fit-content; animation:smm-fadeUp .6s ease both; }
  .smm-badge-dot { width:6px; height:6px; border-radius:50%; background:var(--orange); animation:smm-pulse-dot 1.6s infinite; }
  @keyframes smm-pulse-dot { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:.4;transform:scale(1.5);} }
  .smm-hero-heading { font-family:'Poppins',sans-serif; font-size:clamp(2.2rem,3.8vw,3.6rem); font-weight:600; color:#fff; line-height:1.1; letter-spacing:-0.025em; margin-top:1.4rem; animation:smm-fadeUp .7s .08s ease both; }
  .smm-hero-heading .orange { color:var(--orange); }
  .smm-hero-heading .lined { position:relative; display:inline-block; }
  .smm-hero-heading .lined::after { content:''; position:absolute; left:0; bottom:-3px; width:100%; height:3px; background:var(--orange); border-radius:2px; transform:scaleX(0); transform-origin:left; animation:smm-line-in .5s .9s ease forwards; }
  @keyframes smm-line-in { to{transform:scaleX(1);} }
  .smm-hero-sub { margin-top:1.4rem; font-size:1rem; line-height:1.78; color:rgb(255,255,255); max-width:fit-content; animation:smm-fadeUp .7s .16s ease both; }
  .smm-hero-actions { margin-top:2rem; display:flex; gap:0.9rem; flex-wrap:wrap; animation:smm-fadeUp .7s .26s ease both; }
  .smm-btn-fill { background:var(--orange); color:#fff; padding:0.85rem 2rem; border-radius:50px; font-family:'DM Sans',sans-serif; font-size:0.92rem; font-weight:500; text-decoration:none; border:none; cursor:pointer; transition:background .22s,transform .18s,box-shadow .22s; box-shadow:0 4px 22px rgba(237,131,55,0.32); display:inline-flex; align-items:center; gap:0.5rem; }
  .smm-btn-fill:hover { background:var(--orange-light); transform:translateY(-2px); box-shadow:0 8px 30px rgba(237,131,55,0.42); }
  .smm-btn-arrow { display:inline-flex; align-items:center; justify-content:center; width:22px; height:22px; border-radius:50%; background:rgba(2,43,68,0.3); font-size:0.85rem; }
  @keyframes smm-fadeUp { from{opacity:0;transform:translateY(26px);} to{opacity:1;transform:translateY(0);} }
  @media(max-width:900px){
    .smm-hero { grid-template-columns:1fr; padding:4rem 5% 5rem; text-align:start; }
    .smm-hero-left { align-items:flex-start; }
    .smm-hero-sub { width:100%; max-width:90%; text-align:start; }
  }
h3.faq-h3 {
    color: black;
    font-size: 2.5rem;
    font-weight: 600;
}

  /* ── SMM HERO RIGHT ── */
  .smm-hero-right { position:relative; z-index:2; display:flex; align-items:center; justify-content:center; animation:smm-fadeUp .9s .15s ease both; }
  .smm-scene { position:relative;  display:flex; align-items:center; justify-content:center; }
  .smm-hero-img { width:100%; height:100%; object-fit:contain; }
  @keyframes smm-float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-14px);} }

  /* ── SERVICES ── */
  .smm-svc { position:relative; background:#004168; padding:4rem 0 0; overflow:hidden; }
  .smm-svc-dots { position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(rgba(237,131,55,0.18) 1px,transparent 1px); background-size:38px 38px; animation:smm-dots-drift 30s linear infinite; opacity:0.35; }
  @keyframes smm-dots-drift { to { background-position: 38px 38px; } }
  .smm-svc-glow { position:absolute; border-radius:50%; filter:blur(100px); pointer-events:none; z-index:0; }
  .smm-ssvg1 { width:700px; height:700px; top:-200px; left:-180px; background:rgba(237,131,55,0.07); animation:smm-ssvg-pulse 14s ease-in-out infinite alternate; }
  .smm-ssvg2 { width:550px; height:550px; bottom:-180px; right:-140px; background:rgba(56,189,248,0.06); animation:smm-ssvg-pulse 18s ease-in-out infinite alternate reverse; }
  @keyframes smm-ssvg-pulse { from{opacity:.6;transform:scale(1);} to{opacity:1;transform:scale(1.15);} }
  .smm-svc-hdr { position:relative; z-index:2; text-align:center; padding:0 6% 5.5rem; margin:0 auto; }
  .smm-svc-tag { display:inline-flex; align-items:center; gap:.55rem; font-size:.72rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:var(--orange); margin-bottom:1rem; font-family:'DM Sans',sans-serif; }
  .smm-svc-tagline { width:20px; height:2px; background:var(--orange); border-radius:2px; display:inline-block; }
  .smm-svc-h2 { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.8vw,2.7rem); font-weight:600; line-height:1.1; color:#fff; margin-bottom:2rem; }
  .smm-svc-h2 span { color:var(--orange); }
  .smm-svc-sub { font-size:.97rem; line-height:1.8; color:rgb(255,255,255); }
  .smm-svc-panels { position:relative; z-index:2; display:grid; grid-template-columns:repeat(3,1fr);margin: 0 3%; }
  .smm-svc-panel { position:relative; padding:3.2rem 2.6rem 3rem; overflow:hidden; cursor:default; min-height:280px; display:flex; flex-direction:column; justify-content:flex-end; border-right:1px solid rgba(255,255,255,0.04); border-bottom:1px solid rgba(255,255,255,0.04); transition:background .5s ease,opacity .6s ease,transform .6s ease; opacity:0; transform:translateY(40px) scale(0.97); }
  .smm-svc-panel.vis { opacity:1; transform:translateY(0) scale(1); }
  .smm-svc-panel:nth-child(3n) { border-right:none; }
  .smm-svc-panel:nth-child(4),.smm-svc-panel:nth-child(5),.smm-svc-panel:nth-child(6) { border-bottom:none; }
  .smm-sp-ghost { position:absolute; top:-0.3em; right:-0.1em; font-family:'Poppins',sans-serif; font-size:9rem; font-weight:900; line-height:1; color:rgba(255,255,255,0.025); letter-spacing:-.04em; pointer-events:none; z-index:0; transition:color .5s ease,transform .5s ease; user-select:none; }
  .smm-svc-panel:hover .smm-sp-ghost { color:rgba(255,255,255,0.06); transform:scale(1.05) translateY(-5px); }
  .smm-sp-slash { position:absolute; top:0; left:0; width:0; height:0; border-style:solid; border-width:55px 55px 0 0; transition:border-width .4s ease; z-index:1; }
  .smm-svc-panel:hover .smm-sp-slash { border-width:70px 70px 0 0; }
  .smm-svc-panel:nth-child(1) .smm-sp-slash { border-color:rgba(237,131,55,0.15) transparent transparent transparent; }
  .smm-svc-panel:nth-child(2) .smm-sp-slash { border-color:rgba(56,189,248,0.12) transparent transparent transparent; }
  .smm-svc-panel:nth-child(3) .smm-sp-slash { border-color:rgba(52,211,153,0.12) transparent transparent transparent; }
  .smm-svc-panel:nth-child(4) .smm-sp-slash { border-color:rgba(167,139,250,0.12) transparent transparent transparent; }
  .smm-svc-panel:nth-child(5) .smm-sp-slash { border-color:rgba(251,191,36,0.12) transparent transparent transparent; }
  .smm-svc-panel:nth-child(6) .smm-sp-slash { border-color:rgba(248,113,113,0.12) transparent transparent transparent; }
  .smm-svc-panel:nth-child(1):hover { background:linear-gradient(135deg,rgba(237,131,55,0.06) 0%,transparent 70%); }
  .smm-svc-panel:nth-child(2):hover { background:linear-gradient(135deg,rgba(56,189,248,0.05) 0%,transparent 70%); }
  .smm-svc-panel:nth-child(3):hover { background:linear-gradient(135deg,rgba(52,211,153,0.05) 0%,transparent 70%); }
  .smm-svc-panel:nth-child(4):hover { background:linear-gradient(135deg,rgba(167,139,250,0.05) 0%,transparent 70%); }
  .smm-svc-panel:nth-child(5):hover { background:linear-gradient(135deg,rgba(251,191,36,0.05) 0%,transparent 70%); }
  .smm-svc-panel:nth-child(6):hover { background:linear-gradient(135deg,rgba(248,113,113,0.05) 0%,transparent 70%); }
  .smm-sp-icon-row { display:flex; align-items:center; gap:.8rem; margin-bottom:1.3rem; position:relative; z-index:2; }
  .smm-sp-icon-dash { height:2px; width:0; border-radius:2px; transition:width .5s ease; }
  .smm-svc-panel:hover .smm-sp-icon-dash { width:28px; }
  .smm-svc-panel:nth-child(1) .smm-sp-icon-dash { background:var(--orange); }
  .smm-svc-panel:nth-child(2) .smm-sp-icon-dash { background:#38bdf8; }
  .smm-svc-panel:nth-child(3) .smm-sp-icon-dash { background:#34d399; }
  .smm-svc-panel:nth-child(4) .smm-sp-icon-dash { background:#a78bfa; }
  .smm-svc-panel:nth-child(5) .smm-sp-icon-dash { background:#fbbf24; }
  .smm-svc-panel:nth-child(6) .smm-sp-icon-dash { background:#f87171; }
  .smm-sp-icon { font-size:1.6rem; transition:transform .4s cubic-bezier(.34,1.56,.64,1); display:inline-block; filter:drop-shadow(0 0 0px transparent); }
  .smm-svc-panel:nth-child(1):hover .smm-sp-icon { transform:rotate(-12deg) scale(1.2); filter:drop-shadow(0 0 8px rgba(237,131,55,0.5)); }
  .smm-svc-panel:nth-child(2):hover .smm-sp-icon { transform:rotate(12deg) scale(1.2); filter:drop-shadow(0 0 8px rgba(56,189,248,0.5)); }
  .smm-svc-panel:nth-child(3):hover .smm-sp-icon { transform:translateY(-6px) scale(1.2); filter:drop-shadow(0 0 8px rgba(52,211,153,0.5)); }
  .smm-svc-panel:nth-child(4):hover .smm-sp-icon { transform:rotate(-12deg) scale(1.2); filter:drop-shadow(0 0 8px rgba(167,139,250,0.5)); }
  .smm-svc-panel:nth-child(5):hover .smm-sp-icon { transform:rotate(12deg) scale(1.2); filter:drop-shadow(0 0 8px rgba(251,191,36,0.5)); }
  .smm-svc-panel:nth-child(6):hover .smm-sp-icon { transform:translateY(-6px) scale(1.2); filter:drop-shadow(0 0 8px rgba(248,113,113,0.5)); }
  .smm-sp-content { position:relative; z-index:2; }
  .smm-sp-subtitle {display: none; font-family:'Space Mono',monospace; font-size:.6rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; margin-bottom:.55rem; transition:color .35s; }
 p.smm-hww-sub {
    color: white;
    margin-top: 30px;
}
  .smm-sp-title { font-family:'Poppins',sans-serif; font-size:clamp(1.15rem,1.7vw,1.24rem); font-weight:800; color:#fff; line-height:1.15; margin-bottom:.75rem; transition:letter-spacing .35s ease; }
  .smm-svc-panel:hover .smm-sp-title { letter-spacing:.01em; }
  .smm-sp-desc { font-size:.86rem; line-height:1.76; color:rgba(255,255,255,0.93); max-height:0; overflow:hidden; transition:max-height .5s ease,color .5s ease,margin .5s ease; margin-bottom:0; }
  .smm-svc-panel:hover .smm-sp-desc { max-height:250px; color:rgb(255,255,255); margin-bottom:.9rem; font-family:'Poppins'; }
  .smm-sp-link { display:inline-flex; align-items:center; gap:.4rem; font-family:'DM Sans',sans-serif; font-size:.68rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; text-decoration:none; opacity:0; transform:translateY(8px); transition:opacity .4s ease,transform .4s ease,gap .3s ease; position:relative; z-index:2; }
  .smm-svc-panel:hover .smm-sp-link { opacity:1; transform:translateY(0); }
  .smm-svc-panel:hover .smm-sp-link:hover { gap:.7rem; }
  .smm-svc-panel:nth-child(1) .smm-sp-link { color:var(--orange); }
  .smm-svc-panel:nth-child(2) .smm-sp-link { color:#38bdf8; }
  .smm-svc-panel:nth-child(3) .smm-sp-link { color:#34d399; }
  .smm-svc-panel:nth-child(4) .smm-sp-link { color:#a78bfa; }
  .smm-svc-panel:nth-child(5) .smm-sp-link { color:#fbbf24; }
  .smm-svc-panel:nth-child(6) .smm-sp-link { color:#f87171; }
  .smm-sp-link-arr { width:20px; height:20px; border-radius:50%; border:1px solid currentColor; display:flex; align-items:center; justify-content:center; font-size:.72rem; transition:transform .3s ease; }
  .smm-sp-link:hover .smm-sp-link-arr { transform:rotate(45deg); }
  .smm-sp-bottom-line { position:absolute; bottom:0; left:0; height:2px; width:0; transition:width .5s ease; }
  .smm-svc-panel:hover .smm-sp-bottom-line { width:100%; }
  .smm-svc-panel:nth-child(1) .smm-sp-bottom-line { background:linear-gradient(90deg,var(--orange),transparent); }
  .smm-svc-panel:nth-child(2) .smm-sp-bottom-line { background:linear-gradient(90deg,#38bdf8,transparent); }
  .smm-svc-panel:nth-child(3) .smm-sp-bottom-line { background:linear-gradient(90deg,#34d399,transparent); }
  .smm-svc-panel:nth-child(4) .smm-sp-bottom-line { background:linear-gradient(90deg,#a78bfa,transparent); }
  .smm-svc-panel:nth-child(5) .smm-sp-bottom-line { background:linear-gradient(90deg,#fbbf24,transparent); }
  .smm-svc-panel:nth-child(6) .smm-sp-bottom-line { background:linear-gradient(90deg,#f87171,transparent); }
  @media(max-width:900px){ .smm-svc-panels { grid-template-columns:1fr 1fr; } }
  @media(max-width:580px){ .smm-svc-panels { grid-template-columns:1fr; } .smm-svc-panel { border-right:none !important; min-height:220px; } }

  /* ── PROCESS ── */
  .smm-tp-section { position:relative; background:#ffffff; padding:4rem 0 4rem; overflow:hidden; }
  .smm-tp-cross { position:absolute; inset:0; pointer-events:none; z-index:0; background-image:linear-gradient(45deg,rgba(2,43,68,0.015) 25%,transparent 25%),linear-gradient(-45deg,rgba(2,43,68,0.015) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(2,43,68,0.015) 75%),linear-gradient(-45deg,transparent 75%,rgba(2,43,68,0.015) 75%); background-size:20px 20px; background-position:0 0,0 10px,10px -10px,-10px 0px; }
  .smm-tp-header { position:relative; z-index:2; text-align:center; padding:0 6% 5rem; }
  .smm-tp-h2 { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.5vw,2.6rem); font-weight:700; line-height:1.1; color:#0d1f2d; margin-bottom:1.1rem; }
  .smm-tp-h2 em { color:var(--orange); font-style:normal; font-weight:600; }
  .smm-tp-sub { font-size:.97rem; line-height:1.8; color:#000; margin:0 auto; }
  .smm-tp-body { position:relative; z-index:2; max-width:1180px; margin:0 auto; padding:0 5%; }
  .smm-tp-step { display:grid; grid-template-columns:1fr 2fr; gap:0; margin-bottom:1px; position:relative; opacity:0; transition:opacity .6s ease,transform .6s ease; }
  .smm-tp-step.tp-vis { opacity:1; transform:none !important; }
  .smm-tp-step:nth-child(odd)  { transform:translateX(-28px); }
  .smm-tp-step:nth-child(even) { transform:translateX(28px); grid-template-columns:2fr 1fr; }
  .smm-tp-step:nth-child(1){transition-delay:.04s;} .smm-tp-step:nth-child(2){transition-delay:.15s;} .smm-tp-step:nth-child(3){transition-delay:.26s;} .smm-tp-step:nth-child(4){transition-delay:.37s;} .smm-tp-step:nth-child(5){transition-delay:.48s;}
  .smm-tp-num-side { background:#fafafa; border:1px solid rgba(2,43,68,0.06); padding:3rem 2.5rem; display:flex; flex-direction:column; justify-content:center; position:relative; overflow:hidden; transition:background .35s ease; }
  .smm-tp-step:hover .smm-tp-num-side { background:rgba(237,131,55,0.04); }
  .smm-tp-step:nth-child(even) .smm-tp-num-side { order:2; }
  .smm-tp-step:nth-child(even) .smm-tp-text-side { order:1; }
  .smm-tp-bg-num { position:absolute; bottom:-20px; right:-10px; font-family:'Poppins',sans-serif; font-size:9rem; font-weight:900; color:rgba(237,131,55,0.07); line-height:1; letter-spacing:-.06em; pointer-events:none; transition:color .35s ease; user-select:none; }
  .smm-tp-step:hover .smm-tp-bg-num { color:rgba(237,131,55,0.13); }
  .smm-tp-step-index { font-family:'Space Mono',monospace; font-size:.6rem; font-weight:700; letter-spacing:.15em; text-transform:uppercase; color:rgba(237,131,55,0.5); margin-bottom:.5rem; }
  .smm-tp-step-title { font-family:'Poppins',sans-serif; font-size:1.5rem; font-weight:600; color:#0d1f2d; line-height:1; letter-spacing:-.02em; transition:color .3s ease; position:relative; z-index:2; }
  .smm-tp-step:hover .smm-tp-step-title { color:var(--orange); }
  .smm-tp-step-title::after { content:''; display:block; margin-top:6px; height:3px; background:var(--orange); border-radius:2px; width:0; transition:width .35s ease; }
  .smm-tp-step:hover .smm-tp-step-title::after { width:48px; }
  .smm-tp-phase { margin-top:.8rem; font-family:'DM Sans',sans-serif; font-size:.78rem; font-weight:600; color:rgba(237,131,55,0.65); letter-spacing:.04em; position:relative; z-index:2; }
  .smm-tp-text-side { border:1px solid rgba(2,43,68,0.06); border-left:none; padding:3rem 2.8rem; display:flex; flex-direction:column; justify-content:center; background:#fff; position:relative; overflow:hidden; transition:background .35s ease; }
  .smm-tp-step:nth-child(even) .smm-tp-text-side { border-left:1px solid rgba(2,43,68,0.06); border-right:none; }
  .smm-tp-text-side::before { content:''; position:absolute; bottom:0; right:0; width:0; height:0; border-style:solid; border-width:0 0 32px 32px; border-color:transparent transparent rgba(237,131,55,0.1) transparent; transition:border-width .3s ease; }
  .smm-tp-step:hover .smm-tp-text-side::before { border-width:0 0 44px 44px; }
  .smm-tp-desc { font-size:.89rem; line-height:1.82; color:#010202a3; margin-bottom:1.2rem; }
  .smm-tp-bullets { display:flex; flex-direction:column; gap:.3rem; }
  .smm-tp-bullet { font-size:.85rem; font-weight:500; color:#010202a3; display:flex; align-items:center; gap:.55rem; }
  .smm-tp-bullet::before { content:''; display:inline-block; width:12px; height:1.5px; background:var(--orange); flex-shrink:0; border-radius:2px; }
  @media(max-width:760px){
    .smm-tp-step,.smm-tp-step:nth-child(even) { grid-template-columns:1fr; }
    .smm-tp-step:nth-child(even) .smm-tp-num-side { order:0; }
    .smm-tp-step:nth-child(even) .smm-tp-text-side { order:1; border-left:none; border-right:none; }
    .smm-tp-text-side { border-left:none; border-top:none; }
    .smm-tp-num-side,.smm-tp-text-side { padding:2rem 5%; }
  }

  /* ── HOW WE WORK ── */
  .smm-hww { position:relative; background:#004168; padding:4rem 0 4rem; overflow:hidden; }
  .smm-hww-dot-grid { position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(rgba(237,131,55,0.13) 1px,transparent 1px); background-size:36px 36px; opacity:0.3; animation:smm-dots-drift 28s linear infinite; }
  .smm-hww-glow { position:absolute; border-radius:50%; pointer-events:none; z-index:0; filter:blur(100px); }
  .smm-hww-glow-1 { width:600px; height:600px; top:-180px; left:-160px; background:rgba(237,131,55,0.07); animation:smm-orb-float 10s ease-in-out infinite; }
  .smm-hww-glow-2 { width:500px; height:500px; bottom:-160px; right:-120px; background:rgba(56,189,248,0.05); animation:smm-orb-float 14s ease-in-out infinite reverse; }
  @keyframes smm-orb-float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-24px);} }
  .smm-hww-header { position:relative; z-index:2; text-align:center; padding:0 6% 5rem; }
  .smm-hww-h2 { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.5vw,2.9rem); font-weight:600; line-height:1.12; letter-spacing:-.02em; color:#fff; }
  .smm-hww-h2 span { color:var(--orange); }
  .smm-hww-arrows-wrap { position:relative; z-index:2; margin:0 auto; padding:0 4%; }
  .smm-hww-arrow-track { display:grid; grid-template-columns:1fr 1fr 1fr; gap:30px; }
  .smm-hww-arrow-item { position:relative; display:flex; flex-direction:column; align-items:stretch; opacity:0; transform:translateX(-50px); transition:opacity .55s ease,transform .55s cubic-bezier(.22,1,.36,1); }
  .smm-hww-arrow-item.hww-vis { opacity:1; transform:translateX(0); }
  .smm-hww-arrow-item:nth-child(1){transition-delay:.05s;} .smm-hww-arrow-item:nth-child(2){transition-delay:.2s;} .smm-hww-arrow-item:nth-child(3){transition-delay:.35s;}
  .smm-hww-card { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.07); border-radius:16px; padding:1.8rem 1.6rem; margin-bottom:2rem; flex:1; transition:background .3s ease,border-color .3s ease,transform .3s ease; cursor:default; }
  .smm-hww-card:hover { background:rgba(255,255,255,0.07); border-color:rgba(237,131,55,0.25); transform:translateY(-4px); }
  .smm-hww-icon-wrap { width:60px; height:60px; border-radius:50%; background:#004168; border:2px solid rgba(237,131,55,0.28); display:flex; align-items:center; justify-content:center; margin-bottom:1.1rem; font-size:1.5rem; box-shadow:0 6px 22px rgba(2,43,68,0.55); transition:transform .3s ease,border-color .3s ease,box-shadow .3s ease; }
  .smm-hww-card:hover .smm-hww-icon-wrap { transform:scale(1.1) rotate(-5deg); border-color:var(--orange); box-shadow:0 10px 32px rgba(237,131,55,0.22); }
  .smm-hww-card-title { font-family:'Poppins',sans-serif; font-size:1.05rem; font-weight:700; color:#ee873d; margin-bottom:.55rem; line-height:1.3; }
  .smm-hww-card-desc { font-family:'Poppins'; font-size:.88rem; line-height:1.74; color:rgb(255,255,255); letter-spacing:0.1px; }
  @media(max-width:760px){ .smm-hww-arrow-track { grid-template-columns:1fr; gap:20px; } }

 
  /* ── HERO MOBILE ORDER: content first, image second ── */
  @media(max-width:900px){
    .pcs-hero-left { order:1 !important; }
    .pcs-hero-right { order:2 !important; }
    .ppc-hero-left { order:1 !important; }
    .ppc-hero-right { order:2 !important; }
    .smm-hero-left { order:1 !important; }
    .smm-hero-right { order:2 !important; }
  }

  /* ── APPROACH SECTION MOBILE ── */
  @media(max-width:900px){
    .ap-inner { grid-template-columns:1fr !important; gap:2.5rem !important; }
    .ap-form-wrap { max-width:100% !important; width:100% !important; }
  }
  @media(max-width:580px){
    .approach { padding:3rem 4% !important; }
    .fl-row { grid-template-columns:1fr !important; gap:0 !important; }
    .ap-form-card { padding:2rem 1.4rem !important; }
    .form-card-title { font-size:1.35rem !important; }
    .ap-heading { font-size:clamp(1.5rem,5vw,2rem) !important; }
  }
  @media(max-width:480px){
    .ap-intro { font-size:.92rem !important; }
  }

  /* ── FAQ MOBILE ── */
  .container {width:100%;}
  .faq-section { padding:4rem 6%; overflow:hidden; }
  .faq-wrapper { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; }
  .faq-item { border-radius:12px; overflow:hidden; margin-bottom:1rem; background:#fff; }
  .faq-question { display:flex; justify-content:space-between; align-items:center; padding:1rem 1.4rem; cursor:pointer; font-family:'Poppins',sans-serif; font-size:.92rem; font-weight:600; color:#0d1f2d; gap:.8rem; }
  .faq-question .icon { flex-shrink:0; color:var(--orange); font-size:1.2rem; }
  .faq-answer { padding:0 1.4rem 1rem; font-size:.88rem; line-height:1.76; color:#5a6a7a; font-family:'Poppins',sans-serif; }
  .faq-head { text-align:center; margin-bottom:2.5rem; }
  .faq-head h2 { font-family:'Poppins',sans-serif; font-size:clamp(1.6rem,3vw,2.4rem); font-weight:700; color:#0d1f2d; }
  .faq-head h2 span { color:var(--orange); }
  @media(max-width:768px){
    .faq-wrapper { grid-template-columns:1fr !important; }
    .faq-section { padding:3rem 4% !important; }
    .faq-head h2 { font-size:clamp(1.5rem,5vw,2rem) !important; }
  }
  @media(max-width:480px){
    .faq-section { padding:2.5rem 4% !important; }
    .faq-question { font-size:.85rem !important; padding:.85rem 1rem !important; }
    .faq-answer { font-size:.82rem !important; padding:0 1rem .85rem !important; }
  }

  /* ── HOW WE WORK MOBILE ── */
  @media(max-width:768px){
    .pcs-hww-arrow-track,
    .ppc-hww-arrow-track,
    .smm-hww-arrow-track { grid-template-columns:1fr !important; gap:1.5rem !important; }
    .pcs-hww-header, .ppc-hww-header, .smm-hww-header { padding:0 5% 3rem !important; }
    .pcs-hww-arrows-wrap, .ppc-hww-arrows-wrap, .smm-hww-arrows-wrap { padding:0 5% !important; }
  }
  @media(max-width:480px){
    .pcs-hww-card, .ppc-hww-card, .smm-hww-card { padding:1.4rem 1.2rem !important; }
    .pcs-hww-card-title, .ppc-hww-card-title, .smm-hww-card-title { font-size:.95rem !important; }
    .pcs-hww-card-desc, .ppc-hww-card-desc, .smm-hww-card-desc { font-size:.82rem !important; }
  }

  /* ── PROCESS SECTION MOBILE ── */
  @media(max-width:580px){
    .pcs-tp-step, .pcs-tp-step:nth-child(even),
    .ppc-tp-step, .ppc-tp-step:nth-child(even),
    .smm-tp-step, .smm-tp-step:nth-child(even) { grid-template-columns:1fr !important; }
    .pcs-tp-step:nth-child(even) .pcs-tp-num-side,
    .ppc-tp-step:nth-child(even) .ppc-tp-num-side,
    .smm-tp-step:nth-child(even) .smm-tp-num-side { order:0 !important; }
    .pcs-tp-step:nth-child(even) .pcs-tp-text-side,
    .ppc-tp-step:nth-child(even) .ppc-tp-text-side,
    .smm-tp-step:nth-child(even) .smm-tp-text-side { order:1 !important; border-left:none !important; border-right:none !important; }
    .pcs-tp-text-side, .ppc-tp-text-side, .smm-tp-text-side { border-left:none !important; border-top:none !important; }
    .pcs-tp-num-side,.pcs-tp-text-side,
    .ppc-tp-num-side,.ppc-tp-text-side,
    .smm-tp-num-side,.smm-tp-text-side { padding:1.5rem 4% !important; }
    .pcs-tp-header, .ppc-tp-header, .smm-tp-header { padding:0 4% 2.5rem !important; }
    .pcs-tp-body, .ppc-tp-body, .smm-tp-body { padding:0 4% !important; }
    .pcs-tp-step-title, .ppc-tp-step-title, .smm-tp-step-title { font-size:1.4rem !important; }
  }
  @media(max-width:480px){
    .pcs-tp-num-side,.pcs-tp-text-side,
    .ppc-tp-num-side,.ppc-tp-text-side,
    .smm-tp-num-side,.smm-tp-text-side { padding:1.2rem 4% !important; }
  }

  /* ── GLOBAL OVERFLOW FIX ── */
  img { max-width:100%; height:auto; }
  * { box-sizing:border-box; }

  /* ── SMM HERO ORDER FIX (mobile: content top, image bottom) ── */
  @media(max-width:900px){
    .smm-hero { display:flex !important; flex-direction:column !important; align-items:stretch !important; }
    .smm-hero-left { order:1 !important; text-align:start; align-items:flex-start; display:flex; flex-direction:column; padding: 3rem 0;}
    .smm-hero-right { order:2 !important; display:flex; justify-content:center; align-items:center; }
    .smm-badge { align-self:flex-start; }
    .smm-hero-actions { justify-content:flex-start; }
    .smm-hero-sub { text-align:start; }
    .smm-hero-heading { text-align:start; }
  }

  /* ── SMM HERO IMAGE MOBILE FIX ── */
  @media(max-width:900px){
    .smm-hero-right .smm-hero-img { max-width:300px !important; height:auto !important; }
    .smm-hero-right img { max-width:300px !important; height:auto !important; display:block; margin:0 auto; }
  }
  @media(max-width:480px){
    .smm-hero-right .smm-hero-img { max-width:240px !important; }
    .smm-hero-right img { max-width:240px !important; }
    .smm-hero { padding:4rem 4% 3rem !important; gap:1.5rem !important; min-height:auto !important; }
    .smm-hero-heading { font-size:clamp(1.6rem,6vw,2.2rem) !important; }
    .smm-hero-sub { font-size:.9rem !important; }
  }

`;

// ─── useInView hook ───────────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  { num: "01", icon: <img src="/img/icon/svc-social-strategy.webp" alt="Social Media Strategy and Planning" width="28" height="28" />, subtitle: "Brand Presence", title: "Social Media Strategy & Planning", desc: "We begin by building a strong strategic foundation tailored to your brand and industry. Our team crafts detailed content calendars, platform-specific blueprints, posting schedules, and campaign themes. We identify the type of content that resonates with your audience and ensure consistency across channels. From tone of voice to visual aesthetics, every detail is fine-tuned for maximum engagement and clarity.", },
  { num: "02", icon: <img src="/img/icon/svc-instagram-facebook.webp" alt="Instagram and Facebook Marketing" width="28" height="28" />, subtitle: "Visual Identity", title: "Instagram & Facebook Marketing", desc: "We help you stand out in the scroll. From carousel posts and reels to stories and UGC, we create compelling, scroll-stopping content that sparks engagement and builds lasting loyalty. Whether your goal is to boost awareness or drive conversions through Meta Ads, our creative and performance teams work in tandem to deliver visuals, copy, and CTAs that truly click, driving measurable results for your brand.", },
  { num: "03", icon: <img src="/img/icon/svc-linkedin-b2b.webp" alt="LinkedIn B2B Campaigns" width="28" height="28" />, subtitle: "Paid Campaigns", title: "LinkedIn B2B Campaigns", desc: "LinkedIn isn't just for hiring; it's where enduring trust is truly built in the B2B world. We help you effectively generate leads, position your team as influential thought leaders, and build an authoritative voice in your niche. From executive ghostwriting to sponsored content strategies, we ensure your business is consistently seen and respected by the right audience. Elevate your brand's presence and unlock new opportunities on this essential platform, driving real business growth.", },
  { num: "04", icon: <img src="/img/icon/svc-social-content.webp" alt="Social Content Creation" width="28" height="28" />, subtitle: "Community Building", title: "Social Content Creation", desc: "We handle the entire content production process: ideation, scripting, designing, and editing. Whether you need product showcases, brand stories, memes, or testimonials, we ensure your social feed reflects your brand personality and speaks directly to your audience’s interests, challenges, and aspirations.", },
  { num: "05", icon: <img src="/img/icon/svc-community-management.webp" alt="Community Management" width="28" height="28" />, subtitle: "Partnerships", title: "Community Management", desc: "Engagement doesn’t end with publishing. We help you stay connected with your audience by responding to DMs, comments, and tags in a timely, friendly, and brand-consistent manner. We also monitor sentiment and escalate critical feedback or opportunities, keeping your community positive and active.", },
  { num: "06", icon: <img src="/img/icon/svc-paid-social-ads.webp" alt="Paid Social Ads" width="28" height="28" />, subtitle: "Insights & ROI", title: "Paid Social & Media Advertising", desc: "We scale your growth with performance-driven social media marketing and media advertising campaigns, optimized for ROI.", },
];

const PROCESS_STEPS = [
  { step: "01", title: "Discover", phase: "Brand Audit", desc: "Every engagement begins with discovery and understanding your unique business journey. We listen carefully to your goals, review past performance, analyze competitors, and define the audience personas that matter most. This phase sets the tone for everything we build together — from brand voice and communication style to campaign KPIs, engagement objectives, and long-term growth direction.", bullets: [] },
  { step: "02", title: "Research & Audit", phase: "Custom Roadmap", desc: "Before we post a single piece of content, we analyze what’s working and what needs improvement across your digital presence. We evaluate platform analytics, competitor strategies, hashtag effectiveness, audience behavior, content gaps, and engagement trends to ensure we build your social presence from a position of strength, opportunity, and market relevance.", bullets: [] },
  { step: "03", title: "Plan & Strategize", phase: "Content Production", desc: "With insights in hand, we build a smart and scalable social media roadmap tailored to your business goals. We define your core content pillars, plan campaigns around seasonal opportunities, create visually distinct templates, and align everything with your broader marketing strategy. Every content plan includes posting schedules, caption hooks, engagement tactics, and CTA goals.", bullets: [] },
  { step: "04", title: "Create & Publish", phase: "Full Execution", desc: "Once approved, we move into seamless execution with a collaborative creative workflow. Our team of designers, writers, strategists, and video editors work together to deliver consistency. We schedule posts at optimal times, use relevant hashtags strategically, and optimize captions to improve engagement, reach, clicks, and audience interaction.", bullets: [] },
  { step: "05", title: "Monitor & Optimize", phase: "Continuous Growth", desc: "After publishing, the real optimization process begins through continuous monitoring and performance analysis. We track metrics across reach, engagement, saves, shares, profile visits, link clicks, and conversions to understand audience behavior. Based on these insights, we refine content strategies,continuously enhance overall social media performance over time.", bullets: [] },
];

const HOW_WE_WORK = [
  { icon: <img src="/img/icon/hww-channel-planning.webp" alt="Channel-Specific Planning" width="30" height="30" />, title: "Channel-Specific Planning", desc: " Each social media platform demands a unique approach. What works on LinkedIn might flop on Instagram. That’s why we plan platform-wise, ensuring content formats, tone, and goals are perfectly matched to each ecosystem." },
  { icon: <img src="/img/icon/hww-team-experts.webp" alt="Team of Experts" width="30" height="30" />, title: "Team of Experts", desc: " Your social presence is managed by a team that includes strategists, writers, motion designers, ad specialists, and analytics pros. This collaborative ecosystem ensures that your campaigns are not only creative but also efficient and data-driven." },
  { icon: <img src="/img/icon/hww-performance-driven.webp" alt="Performance-Driven Approach" width="30" height="30" />, title: "Performance-Driven Approach", desc: " We love metrics. Engagement rate, reach, follower growth, CTR, cost-per-lead you name it, we track it. We help you move beyond vanity metrics and focus on what matters: actual business outcomes." },
];

const faqData = [
  { q: "What social media platforms do you manage?", a: " We manage social media platforms including Instagram, Facebook, LinkedIn, YouTube, X (Twitter), and other relevant channels based on your business goals, audience behavior, and industry requirements. Our strategies are customized to improve visibility, engagement, and overall brand communication across digital platforms." },
  { q: "Do you create content for social media accounts?", a: "Yes, we create strategic social media content including creatives, captions, reels, carousels, promotional campaigns, and branded communication. Our content approach focuses on audience engagement, brand consistency, visibility, and creating meaningful interactions that support your overall marketing objectives and business growth." },
  { q: "Do you run paid social media ads?", a: "Yes, we manage paid social media advertising campaigns across platforms like Facebook, Instagram, LinkedIn, and YouTube. Our campaigns focus on audience targeting, lead generation, brand awareness, engagement growth, and conversion optimization to maximize advertising performance and return on investment." },
  { q: "Which social media platform is best for my business?", a: " The ideal platform depends on your industry, target audience, business goals, and content strategy. We analyze customer behavior and market trends to recommend the most effective social media platforms for improving engagement, visibility, lead generation, and long-term digital growth." },
  { q: "Can social media marketing help generate leads?", a: "Yes, social media marketing can effectively generate qualified leads through targeted campaigns, engaging content, optimized landing pages, and audience-focused advertising strategies. It helps businesses improve visibility, attract potential customers, build trust, and increase conversions across digital platforms consistently." },
  { q: "How do you increase followers and engagement?", a: "We increase followers and engagement through strategic content creation, audience targeting, consistent posting, performance-driven campaigns, trend analysis, community interaction, and platform optimization. Our approach focuses on attracting relevant audiences while improving meaningful engagement, reach, and long-term brand visibility organically and through paid strategies." },
];

// ─── SMM Hero Image ───────────────────────────────────────────────────────────
function SmmScene() {
  return (
      <div className="smm-scene">
      <img
        src={banner}
        alt="Social Media Marketing Illustration"
        className="smm-hero-img"
      />
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="smm-hero">
      <div className="smm-hero-left">
        <div className="smm-badge"><div className="smm-badge-dot" />Brand Engagement </div>
        <h1 className="smm-hero-heading">
          Turn Followers into <br />
          <span className="orange lined">Customers </span> with Social Media Marketing
        </h1>
        <p className="smm-hero-sub">
At PCS, we don’t just manage platforms — we deliver results through social media marketing that connects, engages, and converts. As a performance-focused social media marketing agency, we help brands grow organically while scaling through smart campaigns and media advertising.
<br /> Our social media marketing services combine creative storytelling, targeted campaigns, and data-driven insights to turn attention into measurable business outcomes.



        </p>
        <div className="smm-hero-actions">
          <a className="smm-btn-fill" href="#">Explore More <span className="smm-btn-arrow">›</span></a>
        </div>
      </div>
      <div className="smm-hero-right"><SmmScene /></div>
    </section>
  );
}

// ─── Approach + Form ──────────────────────────────────────────────────────────
function ApproachSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", msg: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      name: form.name, email: form.email, phone: form.phone,
      company: form.company, message: form.msg, url: window.location.href,
    };
    emailjs.send("service_8xw6k3r", "template_jarui36", templateParams, "XWRnXi4hK2SvmRG3q")
      .then(() => { alert("Message Sent Successfully ✅"); setForm({ name:"", email:"", phone:"", company:"", msg:"" }); })
      .catch((error) => { console.log(error); alert("Failed to send ❌"); });
  };

  return (
    <section className="approach" id="approach">
      <style>{`
        .approach { position:relative; padding:4rem 6%; overflow:hidden; }
        .ap-inner { position:relative; z-index:2; margin:0 auto; display:grid; grid-template-columns:1fr 0.7fr; gap:4rem; align-items:center; }
        .ap-heading { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3vw,2.6rem); line-height:1.12; color:#000; margin-bottom:1.2rem; font-weight:600; }
        .ap-heading span { color:var(--orange); }
        .ap-intro { font-size:1rem; line-height:1.8; color:#5a6a7a; margin-bottom:2rem; }
        .ap-form-wrap { position:relative; max-width:450px; }
        .ap-form-wrap::before { content:''; position:absolute; inset:-2px; background:linear-gradient(135deg,rgba(237,131,55,0.55),rgba(237,131,55,0.1),rgba(237,131,55,0.55)); border-radius:26px; z-index:0; }
        .ap-form-card { position:relative; z-index:1; background:#004168; border-radius:24px; padding:2.8rem 2.6rem; box-shadow:0 24px 60px rgba(0,0,0,0.5),0 0 40px rgba(237,131,55,0.06); border:1px solid rgba(237,131,55,0.18); text-align:center; }
        .form-card-eyebrow { display:inline-flex; align-items:center; gap:8px; font-family:'Poppins',sans-serif; font-size:0.6rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:var(--orange); margin-bottom:0.8rem; }
        .form-card-eyebrow-line { width:22px; height:1px; background:var(--orange); }
        .form-card-title { font-family:'Poppins',sans-serif; font-size:1.7rem; font-weight:800; color:#fff; line-height:1.15; margin-bottom:2.4rem; }
        .form-card-title span { color:var(--orange); }
        .fl-row { display:grid; grid-template-columns:1fr 1fr; gap:0.85rem; }
        .fl-group { position:relative; margin-bottom:1rem; }
        .fl-label { display:block; font-family:'Poppins',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--orange); margin-bottom:0.4rem; text-align:start; }
        .fl-input,.fl-textarea { width:100%; padding:0.82rem 1rem 0.82rem 2.6rem; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; font-family:'Poppins',sans-serif; font-size:0.88rem; color:#fff; background:rgba(255,255,255,0.04); outline:none; transition:border-color 0.22s,background 0.22s,box-shadow 0.22s; }
        .fl-input::placeholder,.fl-textarea::placeholder { color:rgba(255,255,255,0.3); }
        .fl-input:focus,.fl-textarea:focus { border-color:var(--orange); background:rgba(237,131,55,0.06); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .fl-icon { position:absolute; left:0.85rem; top:50%; transform:translateY(-50%); font-size:0.95rem; opacity:0.5; pointer-events:none; }
        .fl-group.textarea-group .fl-icon { top:0.9rem; transform:none; }
        .fl-textarea { min-height:88px; resize:none; padding-top:0.82rem; padding-left:2.6rem; }
        .phone-row { display:flex; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; overflow:hidden; background:rgba(255,255,255,0.04); transition:border-color 0.22s,box-shadow 0.22s; }
        .phone-row:focus-within { border-color:var(--orange); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .phone-flag { display:flex; align-items:center; gap:0.3rem; padding:0 0.85rem; font-size:0.82rem; font-weight:700; color:#fff; border-right:1.5px solid rgba(237,131,55,0.2); white-space:nowrap; background:rgba(237,131,55,0.08); cursor:default; flex-shrink:0; }
        .phone-row .fl-input { border:none; border-radius:0; background:transparent; box-shadow:none; padding:0.82rem 1rem; }
        .phone-row .fl-input:focus { box-shadow:none; }
        .ap-submit { width:100%; background:linear-gradient(135deg,#ed8337,#f5a66b); color:#fff; border:none; padding:1rem 1.5rem; border-radius:12px; font-family:'Poppins',sans-serif; font-size:0.97rem; font-weight:500; cursor:pointer; letter-spacing:0.02em; display:flex; align-items:center; justify-content:center; gap:0.6rem; transition:transform 0.2s,box-shadow 0.2s; }
        .ap-submit:hover { transform:translateY(-2px); box-shadow:0 12px 36px rgba(237,131,55,0.5); }
        .ap-submit-arrow { display:inline-flex; align-items:center; justify-content:center; width:24px; height:24px; border-radius:50%; background:rgba(2,43,68,0.25); font-size:0.9rem; }
        @media(max-width:900px){ .ap-inner { grid-template-columns:1fr; } }
      `}</style>
      <div className="ap-inner">
        <div className="ap-left">
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Approach in</div>
          </div>
          <h2 className="ap-heading">Purpose-Driven <span>Social Media </span> That Engages, Grows & Converts</h2>
          <p className="ap-intro">
In today’s digital-first world, social media marketing agencies plays a critical role in building trust and influencing decisions. At PCS, every social media marketing campaign is built with a clear objective — whether it's awareness, engagement, or conversions.
          </p>
          <p className="ap-intro">
As a results-driven social media marketing agency, we connect your brand with the right audience at the right time. Our approach blends creativity with analytics to maximize reach, engagement, and ROI through effective social media marketing services.
          </p>
          <p className="ap-intro">
            We go beyond routine posting. Our social media marketing strategies are built after analyzing audience behavior, competitor activity, and industry trends — ensuring every campaign drives consistent growth.

            </p>
        </div>
        <div className="ap-form-wrap">
          <div className="ap-form-card">
            <div className="form-card-eyebrow">
              <span className="form-card-eyebrow-line" />Your Growth, Our Mission<span className="form-card-eyebrow-line" />
            </div>
            <div className="form-card-title">Get Your <span>Free</span> Quote</div>
            <form onSubmit={sendEmail}>
              <div className="fl-row">
                <div className="fl-group">
                  <label className="fl-label">Your Name</label>
                  <div style={{ position: "relative" }}>
                    <span className="fl-icon">👤</span>
                    <input className="fl-input" type="text" name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
                  </div>
                </div>
                <div className="fl-group">
                  <label className="fl-label">Company</label>
                  <div style={{ position: "relative" }}>
                    <span className="fl-icon">🏢</span>
                    <input className="fl-input" type="text" name="company" placeholder="Company name" value={form.company} onChange={handleChange} />
                  </div>
                </div>
              </div>
              <div className="fl-group">
                <label className="fl-label">Email Address</label>
                <div style={{ position: "relative" }}>
                  <span className="fl-icon">✉️</span>
                  <input className="fl-input" type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="fl-group">
                <label className="fl-label">Mobile Number</label>
                <div className="phone-row">
                  <div className="phone-flag"><span>📞</span></div>
                  <input className="fl-input" type="tel" name="phone" placeholder="Mobile number" value={form.phone} onChange={handleChange} maxLength="10" pattern="[0-9]{10}" required />
                </div>
              </div>
              <div className="fl-group textarea-group">
                <label className="fl-label">Message</label>
                <div style={{ position: "relative" }}>
                  <span className="fl-icon" style={{ top: "0.9rem", transform: "none" }}>💬</span>
                  <textarea className="fl-textarea" name="msg" placeholder="Tell us about your social media goals..." value={form.msg} onChange={handleChange} />
                </div>
              </div>
              <button type="submit" className="ap-submit">
                Get Free Consultation <span className="ap-submit-arrow">›</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function ServicePanel({ svc, index }) {
  const [ref, visible] = useInView(0.1);
  return (
    <div ref={ref} className={`smm-svc-panel${visible ? " vis" : ""}`} style={{transitionDelay:`${0.05 + index * 0.07}s`}}>
      <div className="smm-sp-slash" />
      <div className="smm-sp-ghost">{svc.num}</div>
      <div className="smm-sp-bottom-line" />
      <div className="smm-sp-icon-row">
        <span className="smm-sp-icon-dash" />
        <span className="smm-sp-icon">{svc.icon}</span>
      </div>
      <div className="smm-sp-content">
        <div className="smm-sp-subtitle">{svc.subtitle}</div>
        <h4 className="smm-sp-title">{svc.title}</h4>
        <div className="smm-sp-desc">{svc.desc}</div>
        {/* <a className="smm-sp-link" href="#">LEARN MORE <span className="smm-sp-link-arr">↗</span></a> */}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="smm-svc">
      <div className="smm-svc-dots" />
      <div className="smm-svc-glow smm-ssvg1" />
      <div className="smm-svc-glow smm-ssvg2" />
      <div className="smm-svc-hdr">
        <div className="partners-header1">
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Specialized Social Media Marketing Services</h2>
        </div>
        <h3 className="smm-svc-h2">Not Just Posts. <span> <i>Conversations </i></span>That Convert.</h3>
        <p className="smm-svc-sub">
        We don’t treat social as a side channel, it’s a core growth lever. Our services are designed to help you dominate each platform with purpose and precision.
          </p>
      </div>
      <div className="smm-svc-panels">
        {SERVICES.map((svc, i) => <ServicePanel key={svc.num} svc={svc} index={i} />)}
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────
function ProcessStep({ step, index }) {
  const [ref, visible] = useInView(0.1);
  const isEven = index % 2 === 1;
  return (
    <div ref={ref} className={`smm-tp-step${visible ? " tp-vis" : ""}`}>
      {isEven ? (
        <>
          <div className="smm-tp-text-side">
            <p className="smm-tp-desc">{step.desc}</p>
            <div className="smm-tp-bullets">{step.bullets.map(b => <span key={b} className="smm-tp-bullet">{b}</span>)}</div>
          </div>
          <div className="smm-tp-num-side">
            <div className="smm-tp-bg-num">{step.step}</div>
            <div className="smm-tp-step-index">Step — {step.step}</div>
            <h4 className="smm-tp-step-title">{step.title}</h4>
            <div className="smm-tp-phase">{step.phase}</div>
          </div>
        </>
      ) : (
        <>
          <div className="smm-tp-num-side">
            <div className="smm-tp-bg-num">{step.step}</div>
            <div className="smm-tp-step-index">Step — {step.step}</div>
            <h4 className="smm-tp-step-title">{step.title}</h4>
            <div className="smm-tp-phase">{step.phase}</div>
          </div>
          <div className="smm-tp-text-side">
            <p className="smm-tp-desc">{step.desc}</p>
            <div className="smm-tp-bullets">{step.bullets.map(b => <span key={b} className="smm-tp-bullet">{b}</span>)}</div>
          </div>
        </>
      )}
    </div>
  );
}

function Process() {
  return (
    <section className="smm-tp-section">
      <div className="smm-tp-cross" />
      <div className="smm-tp-header">
        <div className="partners-header1">
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Proven Social Media Marketing Process</h2>
        </div>
        <h3 className="smm-tp-h2">Strategy Driven. <em><i> Audience First.</i></em> ROI Focused.</h3>
        <p className="smm-tp-sub">
        We combine deep research with creative execution and agile iteration to ensure your social media consistently delivers measurable impact.
        </p>
      </div>
      <div className="smm-tp-body">
        {PROCESS_STEPS.map((step, i) => <ProcessStep key={step.step} step={step} index={i} />)}
      </div>
    </section>
  );
}

// ─── How We Work ──────────────────────────────────────────────────────────────
function HowWeWorkItem({ item }) {
  const [ref, visible] = useInView(0.12);
  return (
    <div ref={ref} className={`smm-hww-arrow-item${visible ? " hww-vis" : ""}`}>
      <div className="smm-hww-card">
        <div className="smm-hww-icon-wrap">{item.icon}</div>
        <h4 className="smm-hww-card-title">{item.title}</h4>
        <div className="smm-hww-card-desc">{item.desc}</div>
      </div>
    </div>
  );
}

function HowWeWork() {
  return (
    <section className="smm-hww">
      <div className="smm-hww-dot-grid" />
      <div className="smm-hww-glow smm-hww-glow-1" />
      <div className="smm-hww-glow smm-hww-glow-2" />
      <div className="smm-hww-header">
        <div className="partners-header1">
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Focus on Your Results in Social Media Marketing</h2>
        </div>
        <h3 className="smm-hww-h2">Create Content. <span><i>Build Community. </i></span> Drive Results.</h3>
        <p className="smm-hww-sub">
We don’t believe in posting for the sake of it. Every action is backed by strategy and aimed at results.        </p>
      </div>
      <div className="smm-hww-arrows-wrap">
        <div className="smm-hww-arrow-track">
          {HOW_WE_WORK.map(item => <HowWeWorkItem key={item.title} item={item} />)}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <section className="faq-section">
      <div className="partners-header2" style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2 className="partners-eyebrow" >Frequently Asked Questions</h2>
      </div>
      <div className="container">
        {/* TITLE */}
        <div className="faq-head">
          <h3 className="faq-h3">Queries That Could <span>Hold You Back</span></h3>
        </div>
        {/* FAQ GRID */}
        <div className="faq-wrapper">

          {/* LEFT COLUMN */}
          <div className="faq-col">
            {faqData.slice(0, 3).map((item, i) => (
              <div className="faq-item" key={i}>
                <div className="faq-question" onClick={() => toggle(i)}>
                  <span>{item.q}</span>
                  <span className="icon">{active === i ? "−" : "+"}</span>
                </div>
                {active === i && (
                  <div className="faq-answer">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="faq-col">
            {faqData.slice(3, 6).map((item, i) => (
              <div className="faq-item" key={i + 3}>
                <div className="faq-question" onClick={() => toggle(i + 3)}>
                  <span>{item.q}</span>
                  <span className="icon">{active === i + 3 ? "−" : "+"}</span>
                </div>
                {active === i + 3 && (
                  <div className="faq-answer">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Root Component ───────────────────────────────────────────────────────────
export default function PcsSmmPage() {
  useEffect(() => {
    const id = "pcs-smm-styles";
    if (!document.getElementById(id)) {
      const el = document.createElement("style");
      el.id = id;
      el.textContent = STYLES;
      document.head.appendChild(el);
    }
    return () => {};
  }, []);

  const breadcrumbSchema = {
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
          "@id": "https://www.priyamconsultancy.com/social-media-marketing/",
          "name": "social-media-marketing"
        }
      }
    ]
  };
 
  // =============================================
  // 2. ORGANIZATION SCHEMA
  // =============================================
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Priyam Consultancy Services",
    "url": "https://www.priyamconsultancy.com/",
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
  };
 
  // =============================================
  // 3. SERVICE PAGE SCHEMA (உங்கள் existing schema + hasOfferCatalog சேர்க்கப்பட்டது)
  // =============================================
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.priyamconsultancy.com/social-media-marketing/#service",
    "name": "Social Media Marketing Services",
    "serviceType": "Social Media Marketing Services",
    "url": "https://www.priyamconsultancy.com/social-media-marketing/",
    "description": "Priyam Consultancy provides professional social media marketing services including content creation, social media management, paid advertising, audience engagement, lead generation, brand awareness campaigns and platform growth strategies across India.",
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
    },
    // hasOfferCatalog — new code-இல் இருந்து சேர்க்கப்பட்டது
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Social Media Marketing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Strategy" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paid Social Advertising" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Creation & Scheduling" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Community Management" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Influencer Marketing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Analytics & Reporting" } }
      ]
    }
  };
 
  // =============================================
  // 4. PRODUCT SCHEMA
  // =============================================
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "social-media-marketing",
    "image": ["https://www.priyamconsultancy.com/img/smm.png"],
    "description": "Best social media marketing services in Coimbatore offering content creation, social media management, Facebook marketing, Instagram marketing, LinkedIn marketing, paid social media advertising and lead generation solutions.",
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
      "reviewCount": "4674"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.priyamconsultancy.com/social-media-marketing/",
      "priceCurrency": "USD",
      "price": "00.00",
      "priceValidUntil": "2026-12-31",
      "itemCondition": "https://schema.org/UsedCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "priyamconsultancy.com"
      }
    }
  };
 
  // =============================================
  // 5. FAQ SCHEMA
  // =============================================
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What social media platforms do you manage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We manage social media platforms including Instagram, Facebook, LinkedIn, YouTube, X (Twitter), and other relevant channels based on your business goals, audience behavior, and industry requirements. Our strategies are customized to improve visibility, engagement, and overall brand communication across digital platforms."
        }
      },
      {
        "@type": "Question",
        "name": "Do you create content for social media accounts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we create strategic social media content including creatives, captions, reels, carousels, promotional campaigns, and branded communication. Our content approach focuses on audience engagement, brand consistency, visibility, and creating meaningful interactions that support your overall marketing objectives and business growth."
        }
      },
      {
        "@type": "Question",
        "name": "Do you run paid social media ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we manage paid social media advertising campaigns across platforms like Facebook, Instagram, LinkedIn, and YouTube. Our campaigns focus on audience targeting, lead generation, brand awareness, engagement growth, and conversion optimization to maximize advertising performance and return on investment."
        }
      },
      {
        "@type": "Question",
        "name": "Which social media platform is best for my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The ideal platform depends on your industry, target audience, business goals, and content strategy. We analyze customer behavior and market trends to recommend the most effective social media platforms for improving engagement, visibility, lead generation, and long-term digital growth."
        }
      },
      {
        "@type": "Question",
        "name": "Can social media marketing help generate leads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, social media marketing can effectively generate qualified leads through targeted campaigns, engaging content, optimized landing pages, and audience-focused advertising strategies. It helps businesses improve visibility, attract potential customers, build trust, and increase conversions across digital platforms consistently."
        }
      },
      {
        "@type": "Question",
        "name": "How do you increase followers and engagement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We increase followers and engagement through strategic content creation, audience targeting, consistent posting, performance-driven campaigns, trend analysis, community interaction, and platform optimization. Our approach focuses on attracting relevant audiences while improving meaningful engagement, reach, and long-term brand visibility organically and through paid strategies."
        }
      }
    ]
  };
 
  return (
    <Layout>
      <Head>
        <title>Social Media Marketing Company in India | SMM Services</title>
        <meta
          name="description"
          content="Boost your brand with India's leading social media marketing company. We produce content across all social platforms that drives growth and visibility for your brand."
        />
        <meta
          name="keywords"
          content="Social Media Marketing, SMM Services, Social Media Marketing Agency, Social Media Advertising, Social Media Marketing Services, Social Media Marketing Company, Social Media Management Agency, Social Media Management Services, Social Media Marketing Companies"
        />
        <link
          rel="canonical"
          href="https://www.priyamconsultancy.com/social-media-marketing"
        />
 
        {/* Open Graph */}
        <meta property="og:title" content="Social Media Marketing Company in India | SMM Services" />
        <meta
          property="og:description"
          content="Boost your brand with India's leading social media marketing company. We produce content across all social platforms that drives growth and visibility for your brand."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.priyamconsultancy.com/social-media-marketing" />
        <meta property="og:image" content="https://www.priyamconsultancy.com/img/social-media-marketing.png" />
 
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Social Media Marketing Company in India | SMM Services" />
        <meta
          name="twitter:description"
          content="Boost your brand with India's leading social media marketing company. We produce content across all social platforms that drives growth and visibility for your brand."
        />
        <meta name="twitter:image" content="https://www.priyamconsultancy.com/img/social-media-marketing.png" />
 
        {/* ✅ Schema Scripts — அனைத்தும் சேர்க்கப்பட்டன */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Head>
 
      <Hero />
      <ApproachSection />
      <Services />
      <Process />
      <HowWeWork />
      <FAQSection />
      <BlogSection/>
      <CTASection />
    </Layout>
  );
}