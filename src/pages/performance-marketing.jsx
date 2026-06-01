import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import CTASection from "../components/HomePage/CTA";
const banner = "/img/performance-marketing.png";
import Layout from '@theme/Layout';


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
.container {
width:100%; 
}
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { overflow-x: hidden; }

  /* ── HERO ── */
  .ppc-hero {
    min-height: 100vh;
    display: grid; grid-template-columns: 1fr 1fr;
    align-items: flex-start; gap: 2rem;
    padding: 4rem 6% 4rem;
    position: relative; overflow: hidden;
    background: #004168;
  }
  .ppc-hero::before {
    content:''; position:absolute; inset:0; pointer-events:none;
    background:
      radial-gradient(ellipse 65% 70% at 100% 50%, rgba(237,131,55,0.10) 0%, transparent 60%),
      radial-gradient(ellipse 50% 60% at 0% 100%, rgba(10,66,102,0.5) 0%, transparent 55%);
  }
  .ppc-hero::after {
    content:''; position:absolute; inset:0; pointer-events:none;
    background-image: linear-gradient(rgba(237,131,55,0.028) 1px,transparent 1px), linear-gradient(90deg,rgba(237,131,55,0.028) 1px,transparent 1px);
    background-size: 52px 52px;
  }
  .ppc-hero-left { position:relative; z-index:2; display:flex; flex-direction:column; order:1; }
  .ppc-hero-right { position:relative; z-index:2; display:flex; align-items:flex-start; justify-content:center; order:2; animation:ppc-fadeUp .9s .15s ease both; }
  .ppc-badge { display:inline-flex; align-items:flex-start; gap:0.5rem; background:rgba(237,131,55,0.1); border:1px solid rgba(237,131,55,0.28); color:var(--orange); font-size:0.72rem; font-weight:600; padding:0.38rem 1rem; border-radius:50px; letter-spacing:0.09em; text-transform:uppercase; width:fit-content; animation:ppc-fadeUp .6s ease both; }
  .ppc-badge-dot { width:6px; height:6px; border-radius:50%; background:var(--orange); animation:ppc-pulse-dot 1.6s infinite; }
  @keyframes ppc-pulse-dot { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:.4;transform:scale(1.5);} }
  .ppc-hero-heading { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.6vw,3.3rem); font-weight:600; color:#fff; line-height:1.15; letter-spacing:-0.02em; margin-top:1.4rem; animation:ppc-fadeUp .7s .08s ease both; }
  .ppc-hero-heading .orange { color:var(--orange); }
  .ppc-hero-heading .lined { position:relative; display:inline-block; }
  .ppc-hero-heading .lined::after { content:''; position:absolute; left:0; bottom:-3px; width:100%; height:3px; background:var(--orange); border-radius:2px; transform:scaleX(0); transform-origin:left; animation:ppc-line-in .5s .9s ease forwards; }
  @keyframes ppc-line-in { to{transform:scaleX(1);} }
  .ppc-hero-sub { margin-top:1.4rem; font-size:1rem; line-height:1.78; color:rgb(255,255,255); max-width:fit-content; animation:ppc-fadeUp .7s .16s ease both; }
  .ppc-hero-actions { margin-top:2rem; display:flex; gap:0.9rem; flex-wrap:wrap; animation:ppc-fadeUp .7s .26s ease both; }
  .ppc-btn-fill { background:var(--orange); color:#fff; padding:0.85rem 2rem; border-radius:50px; font-family:'DM Sans',sans-serif; font-size:0.92rem; font-weight:500; text-decoration:none; border:none; cursor:pointer; transition:background .22s, transform .18s, box-shadow .22s; box-shadow:0 4px 22px rgba(237,131,55,0.32); display:inline-flex; align-items:flex-start; gap:0.5rem; }
  .ppc-btn-fill:hover { background:var(--orange-light); transform:translateY(-2px); box-shadow:0 8px 30px rgba(237,131,55,0.42); }
  .ppc-btn-arrow { display:inline-flex; align-items:flex-start; justify-content:center; width:22px; height:22px; border-radius:50%; background:rgba(2,43,68,0.3); font-size:0.85rem; }
  @keyframes ppc-fadeUp { from{opacity:0;transform:translateY(26px);} to{opacity:1;transform:translateY(0);} }
  @media(max-width:900px){
    .ppc-hero { grid-template-columns:1fr; padding:5rem 5% 4rem; text-align:start; min-height:auto; }
    .ppc-hero-left { align-items:flex-start; order:1; }
    .ppc-hero-right { order:2; width:100%; justify-content:center; }
    .ppc-hero-sub { width:100%; max-width:90%; }
  }
  @media(max-width:480px){
    .ppc-hero { padding:4rem 4% 3rem; gap:1.5rem; }
    .ppc-hero-heading { font-size:clamp(1.7rem,6vw,2.2rem) !important; }
    .ppc-hero-sub { font-size:0.92rem; }
  }

  /* ── PPC HERO RIGHT ── */
  .ppc-scene { position:relative; height:470px; display:flex; align-items:flex-start; justify-content:center; margin:0 auto; }
  .ppc-hero-img { width:100%; height:100%; object-fit:contain; display:block; }
  @keyframes ppc-float1 { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-14px);} }

  /* ── SERVICES ── */
  .ppc-svc { position:relative; background:#004168; padding:4rem 0 0; overflow:hidden; }
  .ppc-svc-dots { position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(rgba(237,131,55,0.18) 1px,transparent 1px); background-size:38px 38px; animation:ppc-dots-drift 30s linear infinite; opacity:0.35; }
  @keyframes ppc-dots-drift { to { background-position: 38px 38px; } }
  .ppc-svc-glow { position:absolute; border-radius:50%; filter:blur(100px); pointer-events:none; z-index:0; }
  .ppc-ssvg1 { width:700px; height:700px; top:-200px; left:-180px; background:rgba(237,131,55,0.07); animation:ppc-ssvg-pulse 14s ease-in-out infinite alternate; }
  .ppc-ssvg2 { width:550px; height:550px; bottom:-180px; right:-140px; background:rgba(56,189,248,0.06); animation:ppc-ssvg-pulse 18s ease-in-out infinite alternate reverse; }
  @keyframes ppc-ssvg-pulse { from{opacity:.6;transform:scale(1);} to{opacity:1;transform:scale(1.15);} }
  .ppc-svc-hdr { position:relative; z-index:2; text-align:center; padding:0 6% 5.5rem; margin:0 auto; }
  .ppc-svc-tag { display:inline-flex; align-items:flex-start; gap:.55rem; font-size:.72rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:var(--orange); margin-bottom:1rem; font-family:'DM Sans',sans-serif; }
  .ppc-svc-tagline { width:20px; height:2px; background:var(--orange); border-radius:2px; display:inline-block; }
  .ppc-svc-h2 { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.8vw,2.7rem); font-weight:600; line-height:1.1; color:#fff; margin-bottom:2rem; }
  .ppc-svc-h2 span { color:var(--orange); }
  .ppc-svc-sub { font-size:.97rem; line-height:1.8; color:rgb(255,255,255); }
  .ppc-svc-panels { position:relative; z-index:2; display:grid; grid-template-columns:repeat(3,1fr); margin: 0 3%; }
  .ppc-svc-panel { position:relative; padding:3.2rem 2.6rem 3rem; overflow:hidden; cursor:default; min-height:280px; display:flex; flex-direction:column; justify-content:flex-end; border-right:1px solid rgba(255,255,255,0.04); border-bottom:1px solid rgba(255,255,255,0.04); transition:background .5s ease, opacity .6s ease, transform .6s ease; opacity:0; transform:translateY(40px) scale(0.97); }
  .ppc-svc-panel.vis { opacity:1; transform:translateY(0) scale(1); }
  .ppc-svc-panel:nth-child(3n) { border-right:none; }
  .ppc-svc-panel:nth-child(4),.ppc-svc-panel:nth-child(5),.ppc-svc-panel:nth-child(6) { border-bottom:none; }
  .ppc-sp-ghost { position:absolute; top:-0.3em; right:-0.1em; font-family:'Poppins',sans-serif; font-size:9rem; font-weight:900; line-height:1; color:rgba(255,255,255,0.025); letter-spacing:-.04em; pointer-events:none; z-index:0; transition:color .5s ease,transform .5s ease; user-select:none; }
  .ppc-svc-panel:hover .ppc-sp-ghost { color:rgba(255,255,255,0.06); transform:scale(1.05) translateY(-5px); }
  .ppc-sp-slash { position:absolute; top:0; left:0; width:0; height:0; border-style:solid; border-width:55px 55px 0 0; transition:border-width .4s ease; z-index:1; }
  .ppc-svc-panel:hover .ppc-sp-slash { border-width:70px 70px 0 0; }
  .ppc-svc-panel:nth-child(1) .ppc-sp-slash { border-color:rgba(237,131,55,0.15) transparent transparent transparent; }
  .ppc-svc-panel:nth-child(2) .ppc-sp-slash { border-color:rgba(56,189,248,0.12) transparent transparent transparent; }
  .ppc-svc-panel:nth-child(3) .ppc-sp-slash { border-color:rgba(52,211,153,0.12) transparent transparent transparent; }
  .ppc-svc-panel:nth-child(4) .ppc-sp-slash { border-color:rgba(167,139,250,0.12) transparent transparent transparent; }
  .ppc-svc-panel:nth-child(5) .ppc-sp-slash { border-color:rgba(251,191,36,0.12) transparent transparent transparent; }
  .ppc-svc-panel:nth-child(6) .ppc-sp-slash { border-color:rgba(248,113,113,0.12) transparent transparent transparent; }
  .ppc-svc-panel:nth-child(1):hover { background:linear-gradient(135deg,rgba(237,131,55,0.06) 0%,transparent 70%); }
  .ppc-svc-panel:nth-child(2):hover { background:linear-gradient(135deg,rgba(56,189,248,0.05) 0%,transparent 70%); }
  .ppc-svc-panel:nth-child(3):hover { background:linear-gradient(135deg,rgba(52,211,153,0.05) 0%,transparent 70%); }
  .ppc-svc-panel:nth-child(4):hover { background:linear-gradient(135deg,rgba(167,139,250,0.05) 0%,transparent 70%); }
  .ppc-svc-panel:nth-child(5):hover { background:linear-gradient(135deg,rgba(251,191,36,0.05) 0%,transparent 70%); }
  .ppc-svc-panel:nth-child(6):hover { background:linear-gradient(135deg,rgba(248,113,113,0.05) 0%,transparent 70%); }
  .ppc-sp-icon-row { display:flex; align-items:flex-start; gap:.8rem; margin-bottom:1.3rem; position:relative; z-index:2; }
  .ppc-sp-icon-dash { height:2px; width:0; border-radius:2px; transition:width .5s ease; }
  .ppc-svc-panel:hover .ppc-sp-icon-dash { width:28px; }
  .ppc-svc-panel:nth-child(1) .ppc-sp-icon-dash { background:var(--orange); }
  .ppc-svc-panel:nth-child(2) .ppc-sp-icon-dash { background:#38bdf8; }
  .ppc-svc-panel:nth-child(3) .ppc-sp-icon-dash { background:#34d399; }
  .ppc-svc-panel:nth-child(4) .ppc-sp-icon-dash { background:#a78bfa; }
  .ppc-svc-panel:nth-child(5) .ppc-sp-icon-dash { background:#fbbf24; }
  .ppc-svc-panel:nth-child(6) .ppc-sp-icon-dash { background:#f87171; }
  .ppc-sp-icon { font-size:1.6rem; transition:transform .4s cubic-bezier(.34,1.56,.64,1); display:inline-block; filter:drop-shadow(0 0 0px transparent); }
  .ppc-svc-panel:nth-child(1):hover .ppc-sp-icon { transform:rotate(-12deg) scale(1.2); filter:drop-shadow(0 0 8px rgba(237,131,55,0.5)); }
  .ppc-svc-panel:nth-child(2):hover .ppc-sp-icon { transform:rotate(12deg) scale(1.2); filter:drop-shadow(0 0 8px rgba(56,189,248,0.5)); }
  .ppc-svc-panel:nth-child(3):hover .ppc-sp-icon { transform:translateY(-6px) scale(1.2); filter:drop-shadow(0 0 8px rgba(52,211,153,0.5)); }
  .ppc-svc-panel:nth-child(4):hover .ppc-sp-icon { transform:rotate(-12deg) scale(1.2); filter:drop-shadow(0 0 8px rgba(167,139,250,0.5)); }
  .ppc-svc-panel:nth-child(5):hover .ppc-sp-icon { transform:rotate(12deg) scale(1.2); filter:drop-shadow(0 0 8px rgba(251,191,36,0.5)); }
  .ppc-svc-panel:nth-child(6):hover .ppc-sp-icon { transform:translateY(-6px) scale(1.2); filter:drop-shadow(0 0 8px rgba(248,113,113,0.5)); }
  .ppc-sp-content { position:relative; z-index:2; }
  .ppc-sp-subtitle {display: none; font-family:'Space Mono',monospace; font-size:.6rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; margin-bottom:.55rem; transition:color .35s; }
  
  .ppc-sp-title { font-family:'Poppins',sans-serif; font-size:clamp(1.15rem,1.7vw,1.5rem); font-weight:800; color:#fff; line-height:1.15; margin-bottom:.75rem; transition:letter-spacing .35s ease; }
  .ppc-svc-panel:hover .ppc-sp-title { letter-spacing:.01em; }
  .ppc-sp-desc { font-size:.86rem; line-height:1.76; color:rgba(255,255,255,0.93); max-height:0; overflow:hidden; transition:max-height .5s ease,color .5s ease,margin .5s ease; margin-bottom:0; }
  .ppc-svc-panel:hover .ppc-sp-desc { max-height:140px; color:rgb(255,255,255); margin-bottom:.9rem; font-family:'Poppins'; }
  .ppc-sp-link { display:inline-flex; align-items:flex-start; gap:.4rem; font-family:'DM Sans',sans-serif; font-size:.68rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; text-decoration:none; opacity:0; transform:translateY(8px); transition:opacity .4s ease,transform .4s ease,gap .3s ease; position:relative; z-index:2; }
  .ppc-svc-panel:hover .ppc-sp-link { opacity:1; transform:translateY(0); }
  .ppc-svc-panel:hover .ppc-sp-link:hover { gap:.7rem; }
  .ppc-svc-panel:nth-child(1) .ppc-sp-link { color:var(--orange); }
  .ppc-svc-panel:nth-child(2) .ppc-sp-link { color:#38bdf8; }
  .ppc-svc-panel:nth-child(3) .ppc-sp-link { color:#34d399; }
  .ppc-svc-panel:nth-child(4) .ppc-sp-link { color:#a78bfa; }
  .ppc-svc-panel:nth-child(5) .ppc-sp-link { color:#fbbf24; }
  .ppc-svc-panel:nth-child(6) .ppc-sp-link { color:#f87171; }
  .ppc-sp-link-arr { width:20px; height:20px; border-radius:50%; border:1px solid currentColor; display:flex; align-items:flex-start; justify-content:center; font-size:.72rem; transition:transform .3s ease; }
  .ppc-sp-link:hover .ppc-sp-link-arr { transform:rotate(45deg); }
  .ppc-sp-bottom-line { position:absolute; bottom:0; left:0; height:2px; width:0; transition:width .5s ease; }
  .ppc-svc-panel:hover .ppc-sp-bottom-line { width:100%; }
  .ppc-svc-panel:nth-child(1) .ppc-sp-bottom-line { background:linear-gradient(90deg,var(--orange),transparent); }
  .ppc-svc-panel:nth-child(2) .ppc-sp-bottom-line { background:linear-gradient(90deg,#38bdf8,transparent); }
  .ppc-svc-panel:nth-child(3) .ppc-sp-bottom-line { background:linear-gradient(90deg,#34d399,transparent); }
  .ppc-svc-panel:nth-child(4) .ppc-sp-bottom-line { background:linear-gradient(90deg,#a78bfa,transparent); }
  .ppc-svc-panel:nth-child(5) .ppc-sp-bottom-line { background:linear-gradient(90deg,#fbbf24,transparent); }
  .ppc-svc-panel:nth-child(6) .ppc-sp-bottom-line { background:linear-gradient(90deg,#f87171,transparent); }
  @media(max-width:900px){ .ppc-svc-panels { grid-template-columns:1fr 1fr; } }
  @media(max-width:580px){ .ppc-svc-panels { grid-template-columns:1fr; } .ppc-svc-panel { border-right:none !important; min-height:220px; } }

  /* ── PROCESS ── */
  .ppc-tp-section { position:relative; background:#ffffff; padding:4rem 0 4rem; overflow:hidden; }
  .ppc-tp-cross { position:absolute; inset:0; pointer-events:none; z-index:0; background-image:linear-gradient(45deg,rgba(2,43,68,0.015) 25%,transparent 25%),linear-gradient(-45deg,rgba(2,43,68,0.015) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(2,43,68,0.015) 75%),linear-gradient(-45deg,transparent 75%,rgba(2,43,68,0.015) 75%); background-size:20px 20px; background-position:0 0,0 10px,10px -10px,-10px 0px; }
  .ppc-tp-header { position:relative; z-index:2; text-align:center; padding:0 6% 5rem; }
  .ppc-tp-h2 { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.5vw,2.6rem); font-weight:700; line-height:1.1; color:#0d1f2d; margin-bottom:1.1rem; }
  .ppc-tp-h2 em { color:var(--orange); font-style:normal; font-weight:600; }
  .ppc-tp-sub { font-size:.97rem; line-height:1.8; color:#000; margin:0 auto; }
  .ppc-tp-body { position:relative; z-index:2; max-width:1180px; margin:0 auto; padding:0 5%; }
  .ppc-tp-step { display:grid; grid-template-columns:1fr 2fr; gap:0; margin-bottom:1px; position:relative; opacity:0; transition:opacity .6s ease, transform .6s ease; }
  .ppc-tp-step.tp-vis { opacity:1; transform:none !important; }
  .ppc-tp-step:nth-child(odd)  { transform:translateX(-28px); }
  .ppc-tp-step:nth-child(even) { transform:translateX(28px); grid-template-columns:2fr 1fr; }
  .ppc-tp-step:nth-child(1){transition-delay:.04s;} .ppc-tp-step:nth-child(2){transition-delay:.15s;} .ppc-tp-step:nth-child(3){transition-delay:.26s;} .ppc-tp-step:nth-child(4){transition-delay:.37s;} .ppc-tp-step:nth-child(5){transition-delay:.48s;}
  .ppc-tp-num-side { background:#fafafa; border:1px solid rgba(2,43,68,0.06); padding:3rem 2.5rem; display:flex; flex-direction:column; justify-content:center; position:relative; overflow:hidden; transition:background .35s ease; }
  .ppc-tp-step:hover .ppc-tp-num-side { background:rgba(237,131,55,0.04); }
  .ppc-tp-step:nth-child(even) .ppc-tp-num-side { order:2; }
  .ppc-tp-step:nth-child(even) .ppc-tp-text-side { order:1; }
  .ppc-tp-bg-num { position:absolute; bottom:-20px; right:-10px; font-family:'Poppins',sans-serif; font-size:9rem; font-weight:900; color:rgba(237,131,55,0.07); line-height:1; letter-spacing:-.06em; pointer-events:none; transition:color .35s ease; user-select:none; }
  .ppc-tp-step:hover .ppc-tp-bg-num { color:rgba(237,131,55,0.13); }
  .ppc-tp-step-index { font-family:'Space Mono',monospace; font-size:.6rem; font-weight:700; letter-spacing:.15em; text-transform:uppercase; color:rgba(237,131,55,0.5); margin-bottom:.5rem; }
  .ppc-tp-step-title { font-family:'Poppins',sans-serif; font-size:1.5rem; font-weight:600; color:#0d1f2d; line-height:1; letter-spacing:-.02em; transition:color .3s ease; position:relative; z-index:2; }
  .ppc-tp-step:hover .ppc-tp-step-title { color:var(--orange); }
  .ppc-tp-step-title::after { content:''; display:block; margin-top:6px; height:3px; background:var(--orange); border-radius:2px; width:0; transition:width .35s ease; }
  .ppc-tp-step:hover .ppc-tp-step-title::after { width:48px; }
  .ppc-tp-phase { margin-top:.8rem; font-family:'DM Sans',sans-serif; font-size:.78rem; font-weight:600; color:rgba(237,131,55,0.65); letter-spacing:.04em; position:relative; z-index:2; }
  .ppc-tp-text-side { border:1px solid rgba(2,43,68,0.06); border-left:none; padding:3rem 2.8rem; display:flex; flex-direction:column; justify-content:center; background:#fff; position:relative; overflow:hidden; transition:background .35s ease; }
  .ppc-tp-step:nth-child(even) .ppc-tp-text-side { border-left:1px solid rgba(2,43,68,0.06); border-right:none; }
  .ppc-tp-text-side::before { content:''; position:absolute; bottom:0; right:0; width:0; height:0; border-style:solid; border-width:0 0 32px 32px; border-color:transparent transparent rgba(237,131,55,0.1) transparent; transition:border-width .3s ease; }
  .ppc-tp-step:hover .ppc-tp-text-side::before { border-width:0 0 44px 44px; }
  .ppc-tp-desc { font-size:.89rem; line-height:1.82; color:#010202a3; margin-bottom:1.2rem; }
  .ppc-tp-bullets { display:flex; flex-direction:column; gap:.3rem; }
  .ppc-tp-bullet { font-size:.85rem; font-weight:500; color:#010202a3; display:flex; align-items:flex-start; gap:.55rem; }
  .ppc-tp-bullet::before { content:''; display:inline-block; width:12px; height:1.5px; background:var(--orange); flex-shrink:0; border-radius:2px; }
  @media(max-width:760px){
    .ppc-tp-step, .ppc-tp-step:nth-child(even) { grid-template-columns:1fr; }
    .ppc-tp-step:nth-child(even) .ppc-tp-num-side { order:0; }
    .ppc-tp-step:nth-child(even) .ppc-tp-text-side { order:1; border-left:none; border-right:none; }
    .ppc-tp-text-side { border-left:none; border-top:none; }
    .ppc-tp-num-side,.ppc-tp-text-side { padding:2rem 5%; }
  }

  /* ── HOW WE WORK ── */
  .ppc-hww { position:relative; background:#004168; padding:4rem 0 4rem; overflow:hidden; }
  .ppc-hww-dot-grid { position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(rgba(237,131,55,0.13) 1px,transparent 1px); background-size:36px 36px; opacity:0.3; animation:ppc-dots-drift 28s linear infinite; }
  .ppc-hww-glow { position:absolute; border-radius:50%; pointer-events:none; z-index:0; filter:blur(100px); }
  .ppc-hww-glow-1 { width:600px; height:600px; top:-180px; left:-160px; background:rgba(237,131,55,0.07); animation:ppc-orb-float 10s ease-in-out infinite; }
  .ppc-hww-glow-2 { width:500px; height:500px; bottom:-160px; right:-120px; background:rgba(56,189,248,0.05); animation:ppc-orb-float 14s ease-in-out infinite reverse; }
  @keyframes ppc-orb-float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-24px);} }
  .ppc-hww-header { position:relative; z-index:2; text-align:center; padding:0 6% 5rem; }
  .ppc-hww-h2 { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.5vw,2.9rem); font-weight:600; line-height:1.12; letter-spacing:-.02em; color:#fff; }
  .ppc-hww-h2 span { color:var(--orange); }
  .ppc-hww-arrows-wrap { position:relative; z-index:2; margin:0 auto; padding:0 4%; }
  .ppc-hww-arrow-track { display:grid; grid-template-columns:1fr 1fr 1fr; gap:30px; }
  .ppc-hww-arrow-item { position:relative; display:flex; flex-direction:column; align-items:stretch; opacity:0; transform:translateX(-50px); transition:opacity .55s ease,transform .55s cubic-bezier(.22,1,.36,1); }
  .ppc-hww-arrow-item.hww-vis { opacity:1; transform:translateX(0); }
  .ppc-hww-arrow-item:nth-child(1){transition-delay:.05s;} .ppc-hww-arrow-item:nth-child(2){transition-delay:.2s;} .ppc-hww-arrow-item:nth-child(3){transition-delay:.35s;}
  .ppc-hww-card { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.07); border-radius:16px; padding:1.8rem 1.6rem; margin-bottom:2rem; flex:1; transition:background .3s ease,border-color .3s ease,transform .3s ease; cursor:default; }
  .ppc-hww-card:hover { background:rgba(255,255,255,0.07); border-color:rgba(237,131,55,0.25); transform:translateY(-4px); }
  .ppc-hww-icon-wrap { width:60px; height:60px; border-radius:50%; background:#004168; border:2px solid rgba(237,131,55,0.28); display:flex; align-items:center; justify-content:center; margin-bottom:1.1rem; font-size:1.5rem; box-shadow:0 6px 22px rgba(2,43,68,0.55); transition:transform .3s ease,border-color .3s ease,box-shadow .3s ease; }
  .ppc-hww-card:hover .ppc-hww-icon-wrap { transform:scale(1.1) rotate(-5deg); border-color:var(--orange); box-shadow:0 10px 32px rgba(237,131,55,0.22); }
  .ppc-hww-card-title { font-family:'Poppins',sans-serif; font-size:1.05rem; font-weight:700; color:#ee873d; margin-bottom:.55rem; line-height:1.3; }
  .ppc-hww-card-desc { font-family:'Poppins'; font-size:.88rem; line-height:1.74; color:rgb(255,255,255); letter-spacing:0.1px; }
  @media(max-width:860px){ .ppc-hww-arrow-track { grid-template-columns:1fr; gap:2rem; } }

  /* ── FAQ ── */
  .ppc-faq-answer { font-size:.92rem; }

  /* ── GLOBAL RESPONSIVE ── */
  @media(max-width:900px){
    .ppc-svc-hdr { padding:0 5% 3.5rem; }
    .ppc-tp-header { padding:0 5% 3rem; }
    .ppc-hww-header { padding:0 5% 3rem; }
    .ppc-hww-arrows-wrap { padding:0 5%; }
    .ppc-tp-body { padding:0 5%; }
  }
  @media(max-width:768px){
    .ppc-svc { padding:3rem 0 0; }
    .ppc-tp-section { padding:3rem 0; }
    .ppc-hww { padding:3rem 0; }
    .ppc-svc-h2 { font-size:clamp(1.7rem,5vw,2.2rem); }
    .ppc-tp-h2 { font-size:clamp(1.7rem,5vw,2.2rem); }
    .ppc-hww-h2 { font-size:clamp(1.7rem,5vw,2.2rem); }
    .faq-section { padding:3rem 4% !important; }
    .faq-head h2 { font-size:clamp(1.6rem,5vw,2rem) !important; }
  }
  @media(max-width:580px){
    .ppc-svc-panels { grid-template-columns:1fr; }
    .ppc-svc-panel { border-right:none !important; min-height:200px; }
    .ppc-svc-hdr { padding:0 4% 2.5rem; }
    .ppc-svc-sub { font-size:.9rem; }
    .faq-wrapper { flex-direction:column; }
  }
  @media(max-width:480px){
    .ppc-svc { padding:2rem 0 0; }
    .ppc-tp-section { padding:2rem 0; }
    .ppc-hww { padding:2rem 0; }
    .ppc-hww-card-title { font-size:.95rem; }
    .ppc-hww-card-desc { font-size:.82rem; }
    .ppc-sp-title { font-size:1.1rem; }
  }
  /* ── HERO MOBILE ORDER: content first, image second ── */
  @media(max-width:900px){
    .pcs-hero-left { order:1 !important; }
    .pcs-hero-right { order:2 !important; }
    .ppc-hero-left { order:1 !important; }
    .ppc-hero-right { order:2 !important; }
    .smm-hero-left { order:1 !important;  padding: 3rem 0;}
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
  .faq-section { padding:4rem 6%; overflow:hidden; }
  .faq-wrapper { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; }
  .faq-item {  border-radius:12px; overflow:hidden; margin-bottom:1rem; background:#fff; }
  .faq-question { display:flex; justify-content:space-between; align-items:flex-start; padding:1rem 1.4rem; cursor:pointer; font-family:'Poppins',sans-serif; font-size:.92rem; font-weight:600; color:#0d1f2d; gap:.8rem; }
  .faq-question .icon { flex-shrink:0; color:var(--orange); font-size:1.2rem; }
  .faq-answer { padding:0 1.4rem 1rem; font-size:.88rem; line-height:1.76; color:#5a6a7a; font-family:'Poppins',sans-serif; }
  .faq-head { text-align:start; margin-bottom:2.5rem; }
  .faq-head h2 { font-family:'Poppins',sans-serif; font-size:clamp(1.6rem,3vw,2.4rem); font-weight:700; color:#0d1f2d; text-align:center; }
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

`;

// ─── Intersection observer hook ──────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const PPC_SERVICES = [
  { num: "01", icon: <img src="/img/icon/svc-google-search-ads.webp" alt="Google Search Ads" width="28" height="28" />, subtitle: "Google Search Ads ", title: "Google Search Ads", desc: "Be present when your customers are searching. Our Search Engine Marketing specialists run high-converting Google Search Ads that target the right keywords, ensuring your business shows up exactly where and when it matters. Whether it's PPC for local leads or national reach, we make every search count." },
  { num: "02", icon: <img src="/img/icon/svc-display-advertising.webp" alt="Display Advertising" width="28" height="28" />, subtitle: "Display Advertising ", title: "Display Advertising ", desc: "Get noticed beyond search. Our visually engaging display ads reach users across millions of websites, boosting brand awareness and driving traffic — a core part of any strong performance marketing strategy." },
  { num: "03", icon: <img src="/img/icon/svc-youtube-video-ads.webp" alt="YouTube Video Ads" width="28" height="28" />, subtitle: "YouTube Video Ads ", title: "YouTube Video Ads ", desc: "Tell your brand story through video. We create and manage YouTube ads that capture attention, build trust, and drive action — perfect for both branding and conversions within your broader pay per click in digital marketing strategy." },
  { num: "04", icon: <img src="/img/icon/svc-meta-ads.webp" alt="Meta Ads Facebook and Instagram" width="28" height="28" />, subtitle: "Social Advertising", title: "Meta Ads (Facebook & Instagram) ", desc: "Connect with your audience on the platforms they love. Our Meta ads management, Facebook ads management, and Instagram ads management services drive traffic, leads, and sales through targeted creatives and optimized campaign strategies. As a specialist social media advertising service, we make every rupee of your social budget work harder." },
  { num: "05", icon: <img src="/img/icon/svc-linkedin-ads.webp" alt="LinkedIn Ads Management" width="28" height="28" />, subtitle: "LinkedIn Ads ", title: "LinkedIn Ads Management ", desc: "Reach decision-makers in any industry. Our LinkedIn Ads management campaigns are tailored for B2B growth, generating high-quality leads through precise targeting and impactful messaging — ideal for companies selling to professionals and enterprises." },
  { num: "06", icon: <img src="/img/icon/svc-whatsapp-marketing.webp" alt="WhatsApp Marketing" width="28" height="28" />, subtitle: "WhatsApp Marketing ", title: "WhatsApp Marketing ", desc: "As a dedicated WhatsApp Marketing agency, we run structured, scalable WhatsApp marketing campaigns — from strategy and API setup to bulk outreach and re-engagement. Verified, compliant, and built to deliver real business results. " },
];

const PROCESS_STEPS = [
  { step: "01", title: "Discover", phase: "Phase 1 — Discover", desc: "Before we launch any ads, we take time to deeply understand your business model, target audience, market positioning, and revenue goals. Our performance marketing team connects with key stakeholders to identify your customer journey, core services, unique selling points, and campaign objectives — ensuring every campaign is aligned with real business needs, customer expectations, and measurable growth outcomes.", bullets: [] },
  { step: "02", title: "Research & Analyze", phase: "Phase 2 — Research & Analyze ", desc: "We conduct thorough competitor research, analyze your industry landscape, review historical ad performance where available, and identify high-intent keywords and audience segments. From ideal customer profiles and buying behavior to seasonality trends and platform opportunities, we gather every critical insight needed to maximize ROI from day one — a fundamental part of any serious and scalable PPC strategy.", bullets: [] },
  { step: "03", title: "Strategize", phase: "Phase 3 — Strategize ", desc: "With insights in hand, we craft a custom performance marketing strategy tailored to your business goals and audience behavior. We carefully choose the right platforms across Search Engine Marketing, Meta ads management, LinkedIn Ads management, and more. From campaign structuring and compelling ad creatives to conversion-optimized landing pages, every element is designed to ensure your pay per click ads generate meaningful engagement, qualified leads, and real business results.", bullets: [] },
  { step: "04", title: "Launch & Optimize", phase: "Phase 4 — Launch & Optimize ", desc: "Once campaigns are live, we continuously monitor performance metrics and optimize campaigns in real time for maximum efficiency. We A/B test ad variations, adjust bidding strategies, refine audience targeting, and pause underperforming segments to improve results consistently. Our goal across every pay per click campaign is simple: reduce unnecessary ad spend, increase conversion efficiency, improve lead quality, and scale strategies that deliver measurable performance.", bullets: [] },
  { step: "05", title: "Report & Evolve", phase: "Phase 5 — Report & Evolve ", desc: "We provide clear, transparent, and easy-to-understand reports highlighting what’s performing well, what requires improvement, and how campaigns are progressing over time. Alongside detailed monthly reviews, our team proactively updates strategies based on new market trends, platform algorithm changes, audience behavior, and evolving business priorities — ensuring your performance marketing services remain competit", bullets: [] },
];

const HOW_WE_WORK = [
  { icon: <img src="/img/icon/hww-strategic-plannings.webp" alt="Strategic Planning" width="30" height="30" />, title: "Strategic Planning ", desc: "Every successful pay per click in digital marketing campaign starts with a clear strategy. We take time to understand your goals, audience, and market — crafting a data-driven roadmap tailored to your business needs." },
  { icon: <img src="/img/icon/hww-defined-roles.webp" alt="Defined Roles and Collaboration" width="30" height="30" />, title: "Defined Roles & Collaboration ", desc: "We believe great outcomes come from clear responsibilities and strong collaboration. Each team member is aligned with specific roles, ensuring smooth execution and full accountability across every performance marketing engagement." },
  { icon: <img src="/img/icon/hww-testing-delivery.webp" alt="Thorough Testing and On-Time Delivery" width="30" height="30" />, title: "Thorough Testing & On-Time Delivery ", desc: "Before any campaign goes live, it goes through rigorous quality checks — reviewing every detail for functionality, accuracy, and performance. As a results-driven performance marketing company, we deliver only when everything is right." },
];

const faqData = [
  { q: "What is PPC and how does it help my business? ", a: "PPC (Pay-Per-Click) is an online advertising model where you only pay when someone clicks on your ad. As part of a broader performance marketing strategy, it helps drive immediate traffic, generate leads, and increase sales — all with full control over budget and targeting." },
  { q: "How much budget do I need to start a PPC campaign?", a: "We recommend a starting ad budget of at least ₹25,000 per month for small to mid-sized businesses. The ideal budget depends on your industry, competition, and goals. Our performance marketing team will guide you based on what delivers the best ROI." },
  { q: "Which platforms do you run PPC ads on? ", a: "We specialize in pay per click campaigns across Google Search, Display, and YouTube, along with Facebook ads management, Instagram ads management, LinkedIn Ads management, and WhatsApp marketing. We choose the right mix based on where your audience spends their time." },
  { q: "How long does it take to see results from PPC? ", a: "Pay per click in digital marketing delivers fast visibility, but meaningful results like quality leads and conversions typically begin showing within 2–4 weeks. Our team continuously optimizes your campaign to improve performance over time." },
  { q: "Will I get reports on how my campaign is doing? ", a: "Yes. You'll receive regular performance reports showing key metrics like impressions, clicks, conversions, cost-per-click (CPC), and ROI — alongside review calls to explain the data and discuss next steps." },
  { q: "Do you create the ad content and landing pages too? ", a: "Absolutely. Our performance marketing company team handles everything — from ad copy and creative design to building high-converting landing pages — so your pay per click ads don't just get clicks, but real results." },

];

// ─── PPC Hero Image ──────────────────────────────────────────────────────────
function PpcScene() {
  return (
      <div className="ppc-scene">
      <img
        src={banner}
        alt="PPC Marketing Illustration"
        className="ppc-hero-img"
      />
    </div>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" id="hero">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

        :root {
          --navy:      #004168;
          --navy-deep: #011a2a;
          --navy-mid:  #0a3652;
          --orange:    #ed8337;
          --orange-l:  #f5a66b;
          --dim:       rgba(255,255,255,0.45);
          --dim2:      rgba(255,255,255,0.5);
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Poppins', sans-serif; color: #fff; overflow-x: hidden; }

        .hero {
          min-height: 100svh;
          display: grid; grid-template-columns: 1fr 1fr;
          align-items: center; gap: 2rem;
          padding: 2rem 6% 4rem;
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
          font-size: clamp(2.2rem, 3.8vw, 3.3rem);
          font-weight: 600; line-height: 1.15;
          margin-top: 1.4rem; animation: fadeUp 0.7s 0.08s ease both; color: #fff;
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
          text-decoration: none; border: none; cursor: pointer; color: #fff;
          box-shadow: 0 4px 22px rgba(237,131,55,0.32);
          display: inline-flex; align-items: center; gap: 0.5rem;
          transition: background 0.22s, transform 0.18s, box-shadow 0.22s;
        }
        .btn-fill:hover { background: var(--orange-l); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(237,131,55,0.42); }
        .btn-arrow {
          display: inline-flex; align-items: center; justify-content: center;
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(2,43,68,0.3); font-size: 0.85rem;
        }
        @keyframes fadeUp { from{ opacity:0; transform:translateY(26px); } to{ opacity:1; transform:translateY(0); } }
        .hero-right {
          overflow: hidden; width: 100%; height: auto;
          position: relative; z-index: 2;
          display: flex; align-items: center; justify-content: center;
        }
        img.hero-img { animation: none !important; }
        .hero-img { width: 100%; object-fit: contain; display: block; }

        /* TABLET */
        @media(max-width: 960px) {
          .hero {
            grid-template-columns: 1fr;
            padding: 6rem 5% 4rem;
            min-height: auto;
            text-align: start;
            gap: 2.5rem;
          }
          .hero-left { order: 1; align-items: flex-start;  padding: 3rem 0;}
          .hero-right { width: 100% !important; height: auto !important; order: 2; display: flex; justify-content: center; }
          .hero-img { width: 100%; max-width: 480px; height: auto; }
          .hero-sub { max-width: 90%; }
          .hero-actions { justify-content: flex-start; }
        }
        /* MOBILE */
        @media(max-width: 600px) {
          .hero { padding: 5rem 4% 3rem; gap: 2rem; }
          .hero-heading { font-size: clamp(1.7rem, 6vw, 2.2rem) !important; }
          .hero-sub { font-size: 0.9rem; max-width: 100%; }
          .hero-img { max-width: 100%; width: 100%; }
          .h-badge { font-size: 0.65rem; }
        }
        .menu li { position: relative; cursor: pointer; font-size: 16px; color: black; }
      `}</style>

      {/* LEFT CONTENT */}
      <div className="hero-left">
        <div className="h-badge"><div className="badge-dot" />PPC Marketing </div>
        <h1 className="hero-heading">
          Turn Your Clicks into with 
          <span className="hl lined" style={{marginLeft:'12px'}}> Our Performance  </span> Marketing
          
        </h1>
        <p className="hero-sub">
At PCS, our performance marketing services are built around one thing: results. Whether it's Google Ads, Meta, LinkedIn, or display networks, we drive high-intent traffic that converts into leads, sales, and real business outcomes. As a trusted performance marketing agency, we combine data, strategy, and creativity to deliver campaigns that don't just spend your budget — they grow your business.
        </p>
        <div className="hero-actions">
          <a className="btn-fill" href="#">Get Free Audit <span className="btn-arrow">›</span></a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-right">
        <img
          src={banner}
          alt="PPC Marketing Illustration"
          className="hero-img"
        />
      </div>
    </section>
  );
}

// ─── Approach + Form ─────────────────────────────────────────────────────────
function ApproachSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", msg: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const formRef = useRef(null);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm(
        "service_priyam",      // ← உங்கள் EmailJS Service ID
        "template_priyam",     // ← உங்கள் EmailJS Template ID
        formRef.current,
        "YOUR_PUBLIC_KEY"      // ← உங்கள் EmailJS Public Key
      )
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", company: "", msg: "" });
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
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
        .ap-form-card { position:relative; z-index:1; background:#004168; border-radius:24px; padding:2.8rem 2.6rem; box-shadow:0 24px 60px rgba(0,0,0,0.5),0 0 40px rgba(237,131,55,0.06); border:1px solid rgba(237,131,55,0.18); text-align:start; }
        .form-card-eyebrow { display:inline-flex; align-items:flex-start; gap:8px; font-family:'Poppins',sans-serif; font-size:0.6rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:var(--orange); margin-bottom:0.8rem; }
        .form-card-eyebrow-line { width:22px; height:1px; background:var(--orange); }
        .form-card-title { font-family:'Poppins',sans-serif; font-size:1.7rem; font-weight:800; color:#fff; line-height:1.15; margin-bottom:2.4rem; }
        .form-card-title span { color:var(--orange); }
        .fl-row { display:grid; grid-template-columns:1fr 1fr; gap:0.85rem; }
        .fl-group { position:relative; margin-bottom:1rem; }
        .fl-label { display:block; font-family:'Poppins',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--orange); margin-bottom:0.4rem; text-align:start; }
        .fl-input,.fl-textarea { width:100%; padding:0.82rem 1rem 0.82rem 2.6rem; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; font-family:'Poppins',sans-serif; font-size:0.88rem; color:#fff; background:rgba(255,255,255,0.04); outline:none; appearance:none; transition:border-color 0.22s,background 0.22s,box-shadow 0.22s; }
        .fl-input::placeholder,.fl-textarea::placeholder { color:rgba(255,255,255,0.3); }
        .fl-input:focus,.fl-textarea:focus { border-color:var(--orange); background:rgba(237,131,55,0.06); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .fl-icon { position:absolute; left:0.85rem; top:50%; transform:translateY(-50%); font-size:0.95rem; opacity:0.5; pointer-events:none; }
        .fl-group.textarea-group .fl-icon { top:0.9rem; transform:none; }
        .fl-textarea { min-height:88px; resize:none; padding-top:0.82rem; padding-left:2.6rem; }
        .phone-row { display:flex; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; overflow:hidden; background:rgba(255,255,255,0.04); transition:border-color 0.22s,box-shadow 0.22s; }
        .phone-row:focus-within { border-color:var(--orange); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .phone-flag { display:flex; align-items:flex-start; gap:0.3rem; padding:0 0.85rem; font-size:0.82rem; font-weight:700; color:#fff; border-right:1.5px solid rgba(237,131,55,0.2); white-space:nowrap; background:rgba(237,131,55,0.08); cursor:default; flex-shrink:0; }
        .phone-row .fl-input { border:none; border-radius:0; background:transparent; box-shadow:none; padding:0.82rem 1rem; }
        .phone-row .fl-input:focus { box-shadow:none; }
        .ap-submit { width:100%; background:linear-gradient(135deg,#ed8337,#f5a66b); color:#fff; border:none; padding:1rem 1.5rem; border-radius:12px; font-family:'Poppins',sans-serif; font-size:0.97rem; font-weight:500; cursor:pointer; letter-spacing:0.02em; display:flex; align-items:flex-start; justify-content:center; gap:0.6rem; transition:transform 0.2s,box-shadow 0.2s; }
        .ap-submit:hover { transform:translateY(-2px); box-shadow:0 12px 36px rgba(237,131,55,0.5); }
        .ap-submit:disabled { opacity:0.7; cursor:not-allowed; transform:none; }
        .ap-submit-arrow { display:inline-flex; align-items:flex-start; justify-content:center; width:24px; height:24px; border-radius:50%; background:rgba(2,43,68,0.25); font-size:0.9rem; }
        @media(max-width:860px){
          .ap-inner { grid-template-columns:1fr; gap:2.5rem; }
          .ap-form-wrap { max-width:100%; width:100%; }
        }
        @media(max-width:580px){
          .approach { padding:3rem 4%; }
          .fl-row { grid-template-columns:1fr; gap:0; }
          .ap-form-card { padding:2rem 1.4rem; }
          .form-card-title { font-size:1.4rem; }
          .ap-heading { font-size:clamp(1.6rem,5vw,2rem); }
        }
      `}</style>
      <div className="ap-inner">
        <div className="ap-left">
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Approach in</div>
          </div>
          <h2 className="ap-heading">Strategic <span>Performance Marketing Campaigns </span> Built to Perform</h2>
          <p className="ap-intro">
Whether your goal is lead generation, eCommerce sales, or improving local visibility, our performance marketing experts create data-driven campaigns tailored to your specific business objectives and target audience behavior.
          </p>
          <p className="ap-intro">
Using strategic audience targeting, keyword planning, and compelling ad creatives, we build campaigns designed to maximize brand visibility, customer engagement, and measurable marketing outcomes across multiple digital platforms.
          </p>
          <p className="ap-intro">
From smart bidding strategies to continuous monitoring and optimization, every campaign is managed with precision. We focus on improving conversions, reducing costs, and driving scalable long-term business growth consistently.
          </p>
        </div>
        <div className="ap-form-wrap">
          <div className="ap-form-card">
            <div className="form-card-eyebrow">
              <span className="form-card-eyebrow-line" />Your Growth, Our Mission<span className="form-card-eyebrow-line" />
            </div>
            <div className="form-card-title">Get Your <span>Free</span> PPC Audit</div>
            <form ref={formRef} onSubmit={handleSubmit}>
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
                  <textarea className="fl-textarea" name="msg" placeholder="Tell us about your ad goals and budget..." value={form.msg} onChange={handleChange} />
                </div>
              </div>
              {status === "success" && (
                <div style={{ background:"rgba(52,211,153,0.12)", border:"1px solid rgba(52,211,153,0.4)", color:"#34d399", borderRadius:"10px", padding:"0.75rem 1rem", marginBottom:"1rem", fontSize:"0.88rem", textAlign:"center" }}>
                  ✅ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div style={{ background:"rgba(248,113,113,0.12)", border:"1px solid rgba(248,113,113,0.4)", color:"#f87171", borderRadius:"10px", padding:"0.75rem 1rem", marginBottom:"1rem", fontSize:"0.88rem", textAlign:"center" }}>
                  ❌ Something went wrong. Please try again.
                </div>
              )}
              <button type="submit" className="ap-submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : <>Get Free PPC Audit <span className="ap-submit-arrow">›</span></>}
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
    <div ref={ref} className={`ppc-svc-panel${visible ? " vis" : ""}`} style={{transitionDelay:`${0.05 + index * 0.07}s`}}>
      <div className="ppc-sp-slash" />
      <div className="ppc-sp-ghost">{svc.num}</div>
      <div className="ppc-sp-bottom-line" />
      <div className="ppc-sp-icon-row">
        <span className="ppc-sp-icon-dash" />
        <span className="ppc-sp-icon">{svc.icon}</span>
      </div>
      <div className="ppc-sp-content">
        <div className="ppc-sp-subtitle">{svc.subtitle}</div>
        <div className="ppc-sp-title">{svc.title}</div>
        <div className="ppc-sp-desc">{svc.desc}</div>
        {/* <a className="ppc-sp-link" href="#">LEARN MORE <span className="ppc-sp-link-arr">↗</span></a> */}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="ppc-svc">
      <div className="ppc-svc-dots" />
      <div className="ppc-svc-glow ppc-ssvg1" />
      <div className="ppc-svc-glow ppc-ssvg2" />
      <div className="ppc-svc-hdr">
        <div className="partners-header1">
          <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Specialized PPC Marketing Services</div>
        </div>
        <h2 className="ppc-svc-h2">Smart Ads. <span><i>Real Reach.</i> </span>Measurable Results.</h2>
        <p className="ppc-svc-sub">
          At PCS we believe in delivering results that grow your business. With years of experience managing high-performing PPC campaigns across Google, Meta, and LinkedIn.
        </p>
      </div>
      <div className="ppc-svc-panels">
        {PPC_SERVICES.map((svc, i) => <ServicePanel key={svc.num} svc={svc} index={i} />)}
      </div>
    </section>
  );
}

// ─── Process ─────────────────────────────────────────────────────────────────
function ProcessStep({ step, index }) {
  const [ref, visible] = useInView(0.1);
  const isEven = index % 2 === 1;
  return (
    <div ref={ref} className={`ppc-tp-step${visible ? " tp-vis" : ""}`}>
      {isEven ? (
        <>
          <div className="ppc-tp-text-side">
            <p className="ppc-tp-desc">{step.desc}</p>
            <div className="ppc-tp-bullets">{step.bullets.map(b => <span key={b} className="ppc-tp-bullet">{b}</span>)}</div>
          </div>
          <div className="ppc-tp-num-side">
            <div className="ppc-tp-bg-num">{step.step}</div>
            <div className="ppc-tp-step-index">Step — {step.step}</div>
            <div className="ppc-tp-step-title">{step.title}</div>
            <div className="ppc-tp-phase">{step.phase}</div>
          </div>
        </>
      ) : (
        <>
          <div className="ppc-tp-num-side">
            <div className="ppc-tp-bg-num">{step.step}</div>
            <div className="ppc-tp-step-index">Step — {step.step}</div>
            <div className="ppc-tp-step-title">{step.title}</div>
            <div className="ppc-tp-phase">{step.phase}</div>
          </div>
          <div className="ppc-tp-text-side">
            <p className="ppc-tp-desc">{step.desc}</p>
            <div className="ppc-tp-bullets">{step.bullets.map(b => <span key={b} className="ppc-tp-bullet">{b}</span>)}</div>
          </div>
        </>
      )}
    </div>
  );
}

function Process() {
  return (
    <section className="ppc-tp-section">
      <div className="ppc-tp-cross" />
      <div className="ppc-tp-header">
        <div className="partners-header1">
          <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Proven PPC Execution Process</div>
        </div>
        <h2 className="ppc-tp-h2">Built for Clarity,<em> Tuned for Results</em></h2>
        <p className="ppc-tp-sub">
          Every pay per click ads campaign starts with strategy and ends with measurable impact. Our process ensures your ad spend works harder, smarter, and faster.
        </p>
      </div>
      <div className="ppc-tp-body">
        {PROCESS_STEPS.map((step, i) => <ProcessStep key={step.step} step={step} index={i} />)}
      </div>
    </section>
  );
}

// ─── How We Work ─────────────────────────────────────────────────────────────
function HowWeWorkItem({ item }) {
  const [ref, visible] = useInView(0.12);
  return (
    <div ref={ref} className={`ppc-hww-arrow-item${visible ? " hww-vis" : ""}`}>
      <div className="ppc-hww-card">
        <div className="ppc-hww-icon-wrap">{item.icon}</div>
        <div className="ppc-hww-card-title">{item.title}</div>
        <div className="ppc-hww-card-desc">{item.desc}</div>
      </div>
    </div>
  );
}

function HowWeWork() {
  return (
    <section className="ppc-hww">
      <div className="ppc-hww-dot-grid" />
      <div className="ppc-hww-glow ppc-hww-glow-1" />
      <div className="ppc-hww-glow ppc-hww-glow-2" />
      <div className="ppc-hww-header">
        <div className="partners-header1">
          <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Our Focus on Your Results in PPC Management</div>
        </div>
        <h2 className="ppc-hww-h2">Plan Smart. <span><i>Execute Sharper. </i></span> Deliver Right.</h2>
      </div>
      <div className="ppc-hww-arrows-wrap">
        <div className="ppc-hww-arrow-track">
          {HOW_WE_WORK.map(item => <HowWeWorkItem key={item.title} item={item} />)}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
function FAQSection() {
  const [active, setActive] = useState(null);
  const toggle = (index) => setActive(active === index ? null : index);
  return (
    <section className="faq-section">
      <div className="partners-header2" style={{ textAlign: 'center', marginTop: '20px' }}>
        <div className="partners-eyebrow">Frequently Asked Questions</div>
      </div>
      <div className="container">
        <div className="faq-head">
          <h2>Questions That Could <span>Hold You Back</span></h2>
        </div>
        <div className="faq-wrapper">
          <div className="faq-col">
            {faqData.slice(0, 3).map((item, i) => (
              <div className="faq-item" key={i}>
                <div className="faq-question" onClick={() => toggle(i)}>
                  <span>{item.q}</span>
                  <span className="icon">{active === i ? "−" : "+"}</span>
                </div>
                {active === i && <div className="faq-answer ppc-faq-answer">{item.a}</div>}
              </div>
            ))}
          </div>
          <div className="faq-col">
            {faqData.slice(3, 6).map((item, i) => (
              <div className="faq-item" key={i + 3}>
                <div className="faq-question" onClick={() => toggle(i + 3)}>
                  <span>{item.q}</span>
                  <span className="icon">{active === i + 3 ? "−" : "+"}</span>
                </div>
                {active === i + 3 && <div className="faq-answer ppc-faq-answer">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Root Component ───────────────────────────────────────────────────────────
export default function PcsPpcPage() {
  useEffect(() => {
    const id = "pcs-ppc-styles";
    if (!document.getElementById(id)) {
      const el = document.createElement("style");
      el.id = id;
      el.textContent = STYLES;
      document.head.appendChild(el);
    }
    return () => {};
  }, []);

  return (
    <Layout>
      <Hero />
      <ApproachSection />
      <Services />
      <Process />
      <HowWeWork />
      <FAQSection />
      <CTASection />
    </Layout>
  );
}