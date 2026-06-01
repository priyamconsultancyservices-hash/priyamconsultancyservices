import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import CTASection from "../components/HomePage/CTA";
const banner = "/img/static-website.png";
import BlogSection from "../components/BlogSection";
import Layout from '@theme/Layout';

const styles = `
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

  :root {
    --navy: #004168;
    --navy-deep: #002a44;
    --navy-mid: #0a5282;
    --orange: #ed8337;
    --orange-light: #f5a66b;
    --text-dim: rgba(255,255,255,0.45);
    --glass: rgba(255,255,255,0.04);
    --glass-border: rgba(255,255,255,0.09);
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'Nunito Sans', sans-serif;  overflow-x: hidden; }

  

  /* ── HERO BADGE ── */
  .badge {
    display:inline-flex; align-items:center; gap:.5rem;
    background:rgba(237,131,55,0.1); border:1px solid rgba(237,131,55,0.28);
    color:var(--orange); font-size:0.72rem; font-weight:700;
    padding:.38rem 1rem; border-radius:50px; letter-spacing:.09em; text-transform:uppercase;
    margin-bottom:1.4rem; animation:fadeUp .6s ease both;
  }
  .badge-dot { width:6px; height:6px; border-radius:50%; background:var(--orange); animation:pulse-dot 1.6s infinite; }

  /* ══ HERO BANNER (Website Dev) ══ */
  .wd-hero {
    min-height:100vh; display:grid; grid-template-columns:1fr 1fr;
    align-items:center; gap:2rem; padding:2rem 6% 4rem;
    position:relative; overflow:hidden; background:#004168;
  }
  .wd-hero-bg-radial { position:absolute;inset:0;pointer-events:none;
    background:radial-gradient(ellipse 65% 70% at 100% 50%,rgba(237,131,55,0.10) 0%,transparent 60%),
               radial-gradient(ellipse 50% 60% at 0% 100%,rgba(10,66,102,0.5) 0%,transparent 55%); }
  .wd-hero-bg-grid { position:absolute;inset:0;pointer-events:none;
    background-image:linear-gradient(rgba(237,131,55,0.028) 1px,transparent 1px),linear-gradient(90deg,rgba(237,131,55,0.028) 1px,transparent 1px);
    background-size:52px 52px; }
  .wd-hero-heading { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.6vw,3.3rem); font-weight:600; line-height:1.15; margin-top:1.4rem; animation:fadeUp .7s .08s ease both; color:#fff; text-align:start; }
  .wd-hero-heading .orange { color:var(--orange); }
  .wd-hero-heading .lined { position:relative; display:inline-block; }
  .wd-hero-heading .lined::after { content:''; position:absolute; left:0; bottom:-3px; width:100%; height:3px; background:var(--orange); border-radius:2px; transform:scaleX(0); transform-origin:left; animation:wd-line-in .5s .9s ease forwards; }
  @keyframes wd-line-in { to{transform:scaleX(1);} }
  .wd-hero-sub { margin-top:1.4rem; font-size:1rem; line-height:1.78; color:rgba(255,255,255,0.85); max-width:fit-content; animation:fadeUp .7s .16s ease both; }
  .wd-hero-actions { margin-top:2rem; display:flex; gap:.9rem; flex-wrap:wrap; animation:fadeUp .7s .26s ease both; }
  .wd-btn-fill { background:var(--orange); color:#fff; padding:.85rem 2rem; border-radius:50px; font-family:'Poppins',sans-serif; font-size:.9rem; font-weight:600; text-decoration:none; border:none; cursor:pointer; transition:background .22s,transform .18s,box-shadow .22s; display:inline-flex; align-items:center; gap:.5rem; box-shadow:0 4px 22px rgba(237,131,55,.32); }
  .wd-btn-fill:hover { background:var(--orange-light); transform:translateY(-2px); box-shadow:0 8px 30px rgba(237,131,55,0.42); }
  .wd-btn-arrow { display:inline-flex; align-items:center; justify-content:center; width:22px; height:22px; border-radius:50%; background:rgba(2,43,68,0.3); font-size:.85rem; }

  /* Hero image */
  .wd-hero-img { height:470px; object-fit:contain; border-radius:16px; display:block; }
  @media(max-width:900px){.wd-hero{grid-template-columns:1fr;padding:7rem 5% 5rem;text-align:start;}}

  /* OUR APPROACH */
  /* ══ OUR APPROACH SECTION ══ */
  section#approach {
    padding-top: 5rem;
}
  .wd-approach { position:relative; padding:5rem 6%; overflow:hidden;  }
  .wd-ap-inner { position:relative; z-index:2;  margin:0 auto; display:grid; grid-template-columns:1fr 0.75fr; gap:4rem; align-items:center; }
  .wd-ap-eyebrow { display:inline-flex; align-items:center; gap:.55rem; font-family:'Space Mono',monospace; font-size:.7rem; font-weight:700; color:var(--orange); letter-spacing:.13em; text-transform:uppercase; margin-bottom:1.1rem; }
  .wd-ap-eyebrow-line { width:24px; height:2px; background:var(--orange); border-radius:2px; }
  .wd-ap-heading { font-family:'Poppins',sans-serif; font-size:clamp(1.8rem,2.8vw,2.5rem); line-height:1.12; margin-bottom:1.2rem; font-weight:700; }
  .wd-ap-heading span { color:var(--orange); }
  .wd-ap-intro { font-size:1rem; line-height:1.8;  margin-bottom:1.4rem; }
  .wd-ap-form-wrap { position:relative; max-width:450px; }
  .wd-ap-form-wrap::before { content:''; position:absolute; inset:-2px; background:linear-gradient(135deg,rgba(237,131,55,0.55),rgba(237,131,55,0.1),rgba(237,131,55,0.55)); border-radius:26px; z-index:0; }
  .wd-ap-form-card { position:relative; z-index:1; background:#004168; border-radius:24px; padding:2.8rem 2.6rem; box-shadow:0 24px 60px rgba(0,0,0,0.5),0 0 40px rgba(237,131,55,0.06); border:1px solid rgba(237,131,55,0.18); text-align:center; }
  .wd-form-eyebrow { display:inline-flex; align-items:center; gap:8px; font-family:'Poppins',sans-serif; font-size:.6rem; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:var(--orange); margin-bottom:.8rem; }
  .wd-form-eyebrow-line { width:22px; height:1px; background:var(--orange); }
  .wd-form-title { font-family:'Poppins',sans-serif; font-size:1.7rem; font-weight:800; color:#fff; line-height:1.15; margin-bottom:2rem; }
  .wd-form-title span { color:var(--orange); }
  .wd-fl-row { display:grid; grid-template-columns:1fr 1fr; gap:.85rem; }
  .wd-fl-group { position:relative; margin-bottom:1rem; }
  .wd-fl-label { display:block; font-family:'Poppins',sans-serif; font-size:.65rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:var(--orange); margin-bottom:.4rem; text-align:start; }
  .wd-fl-input, .wd-fl-textarea { width:100%; padding:.82rem 1rem .82rem 2.6rem; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; font-family:'Poppins',sans-serif; font-size:.88rem; color:#fff; background:rgba(255,255,255,0.04); outline:none; appearance:none; transition:border-color .22s,background .22s,box-shadow .22s; }
  .wd-fl-input::placeholder,.wd-fl-textarea::placeholder { color:rgba(255,255,255,0.3); }
  .wd-fl-input:focus,.wd-fl-textarea:focus { border-color:var(--orange); background:rgba(237,131,55,0.06); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
  .wd-fl-icon { position:absolute; left:.85rem; top:50%; transform:translateY(-50%); font-size:.95rem; opacity:.5; pointer-events:none; }
  .wd-fl-group.wd-textarea-group .wd-fl-icon { top:.9rem; transform:none; }
  .wd-fl-textarea { min-height:88px; resize:none; padding-top:.82rem; padding-left:2.6rem; }
  .wd-phone-row { display:flex; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; overflow:hidden; background:rgba(255,255,255,0.04); transition:border-color .22s,box-shadow .22s; }
  .wd-phone-row:focus-within { border-color:var(--orange); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
  .wd-phone-flag { display:flex; align-items:center; gap:.3rem; padding:0 .85rem; font-size:.82rem; font-weight:700; color:#fff; border-right:1.5px solid rgba(237,131,55,0.2); white-space:nowrap; background:rgba(237,131,55,0.08); cursor:default; flex-shrink:0; }
  .wd-phone-row .wd-fl-input { border:none; border-radius:0; background:transparent; box-shadow:none; padding:.82rem 1rem; }
  .wd-phone-row .wd-fl-input:focus { box-shadow:none; }
  .wd-ap-submit { width:100%; background:linear-gradient(135deg,#ed8337,#f5a66b); color:#fff; border:none; padding:1rem 1.5rem; border-radius:12px; font-family:'Poppins',sans-serif; font-size:.97rem; font-weight:600; cursor:pointer; letter-spacing:.02em; display:flex; align-items:center; justify-content:center; gap:.6rem; transition:transform .2s,box-shadow .2s; }
  .wd-ap-submit:hover { transform:translateY(-2px); box-shadow:0 12px 36px rgba(237,131,55,0.5); }
  .wd-ap-submit-arrow { display:inline-flex; align-items:center; justify-content:center; width:24px; height:24px; border-radius:50%; background:rgba(2,43,68,0.25); font-size:.9rem; }
  @media(max-width:900px){ .wd-ap-inner{grid-template-columns:1fr;} .wd-ap-form-wrap{max-width:100%;} }

  /* WHAT WE OFFER — ORBIT */
  .pcs-offer-section { padding:6rem 6% 7rem; background:#004168; overflow:hidden; }
  .pcs-offer-inner { max-width:1200px; margin:0 auto; }
  .pcs-offer-heading {
    font-family: 'Poppins',sans-serif; font-size:clamp(1.7rem,2.6vw,2.3rem);
    font-weight:600; line-height:1.15; 
    color:#fff; text-align:center; margin-bottom:6.5rem;
  }
  .pcs-offer-heading span { color:var(--orange); }
  .pcs-offer-body { display:grid; grid-template-columns:1fr 1fr; gap:5rem; align-items:center; }
  .pcs-offer-left { display:flex; align-items:center; justify-content:center; }
  .pcs-orbit-wrap { position:relative; width:400px; height:400px; flex-shrink:0; }
  .pcs-orbit-ring {
    position:absolute; inset:24px; border-radius:50%;
    border:1.5px dashed rgba(30,143,196,0.25);
    animation:wi5-spin-offer 32s linear infinite;
  }
  @keyframes wi5-spin-offer { to{transform:rotate(360deg);} }
  .pcs-orbit-center {
    position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
    width:110px; height:110px; border-radius:50%;
    background:linear-gradient(135deg,#004168,#1e8fc4);
    border:3px solid #ed8337;
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    box-shadow:0 0 0 6px rgba(237,131,55,0.15),0 8px 28px rgba(0,65,104,0.3); z-index:10;
  }
  .pcs-orbit-center-name { font-family:'Syne',sans-serif; font-size:1.4rem; font-weight:800; color:#fff; line-height:1; }
  .pcs-orbit-center-sub { font-size:.48rem; font-weight:600; color:rgba(255,255,255,0.6); letter-spacing:.08em; text-transform:uppercase; margin-top:4px; }
  .pcs-orbit-connector {
    position:absolute; top:50%; left:50%; height:2px;
    transform-origin:0 50%; pointer-events:none; z-index:1;
    background:linear-gradient(to right,rgba(30,143,196,0.5),rgba(30,143,196,0.08));
  }
  .pcs-orbit-connector.active { background:linear-gradient(to right,#ed8337,rgba(237,131,55,0.15)); }
  .pcs-orbit-node { position:absolute; transform:translate(-50%,-50%); z-index:5; cursor:pointer; }
  .pcs-orbit-node-box {
    width:100px; height:100px; border-radius:15px;
    background:linear-gradient(145deg,#eaf6fd,#d4ecf7);
    border:2px solid #1e8fc4;
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    gap:10px; padding:7px; transition:all .3s;
    box-shadow:0 3px 12px rgba(30,143,196,0.12); text-align:center;
  }
  .pcs-orbit-node-box.active { background:linear-gradient(145deg,#ed8337,#c96a1e); border-color:#ed8337; box-shadow:0 6px 24px rgba(237,131,55,0.25); transform:scale(1.12); }
  .pcs-orbit-node-emoji { font-size:1.5rem; line-height:1; }
  .pcs-orbit-node-lbl { font-family: 'Poppins',sans-serif; font-size:.68rem; font-weight:700; color:#004168; line-height:1.3; }
  .pcs-orbit-node-box.active .pcs-orbit-node-lbl { color:#fff; }
  .pcs-offer-right { min-height:320px; }
  .pcs-offer-panel { display:none; }
  .pcs-offer-panel.active { display:block; }
  .pcs-offer-panel-bar { height:4px; background:linear-gradient(to right,#ed8337,#1e8fc4); border-radius:4px; margin-bottom:1.4rem; }
  .pcs-offer-panel-title-row { display:flex; align-items:center; gap:1rem; margin-bottom:1rem; }
  .pcs-offer-panel-icon {
    width:56px; height:56px; border-radius:14px; flex-shrink:0;
    display:flex; align-items:center; justify-content:center; font-size:1.6rem;
    border-top:2.5px solid #ed8337; border-right:2.5px solid #ed8337;
    border-bottom:2.5px solid #1e8fc4; border-left:2.5px solid #1e8fc4;
    background:linear-gradient(135deg,rgba(237,131,55,0.08),rgba(30,143,196,0.08));
    box-shadow:0 4px 14px rgba(0,0,0,0.07);
  }
  .pcs-offer-panel-title {
    font-family:'poppins',sans-serif; font-size:1.3rem; font-weight:700; line-height:1.2;
    background:linear-gradient(90deg,#ed8337 0%,#1e8fc4 100%);
    -webkit-background-clip:text; -webkit-text-fill-color:#ed8337; background-clip:text;
  }
  .pcs-offer-panel-divider { height:1.5px; background:linear-gradient(to right,#ed8337,#1e8fc4); border-radius:2px; margin-bottom:1.2rem; opacity:.35; }
  .pcs-offer-panel-desc { font-size:.97rem; line-height:1.82; color:#fff; margin-bottom:1.2rem; font-family: 'poppins',sans-serif; }
  .pcs-offer-panel-tags { display:flex; flex-wrap:wrap; gap:.45rem; }
  .pcs-offer-panel-tag { font-size:.72rem; font-weight:700; padding:.28rem .72rem; border-radius:50px; }
  .pcs-offer-panel-tag:nth-child(odd) { background:rgba(237,131,55,0.09); border:1px solid rgba(237,131,55,0.35); color:#c96a1e; }
  .pcs-offer-panel-tag:nth-child(even) { background:rgba(30,143,196,0.09); border:1px solid rgba(30,143,196,0.3); color:#1e8fc4; }
  .pcs-offer-placeholder { display:flex; flex-direction:column; align-items:center; justify-content:center; height:260px; gap:.8rem; text-align:center; }
  .pcs-offer-placeholder-icon { font-size:2.8rem; opacity:.35; }
  .pcs-offer-placeholder-text { font-family:'Syne',sans-serif; font-size:.85rem; font-weight:600; color:rgba(0,65,104,0.3); }

  /* WHAT'S INCLUDED — ACCORDION */
  .pcs-wi5-section {
    padding:6rem 6% 7rem; background:#ffffff; overflow:hidden; position:relative;
  }
  .pcs-wi5-section::before {
    content:''; position:absolute; inset:0; pointer-events:none;
    background-image:linear-gradient(rgba(0,65,104,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,65,104,0.03) 1px,transparent 1px);
    background-size:56px 56px;
  }
  .pcs-wi5-inner { max-width:1100px; margin:0 auto; position:relative; z-index:2; }
  .pcs-wi5-heading {
    font-family:'Poppins',sans-serif; font-size:clamp(1.7rem,2.6vw,2.3rem);
    font-weight:700; line-height:1.15; 
    color:#000; text-align:center; margin-bottom:3.5rem;
  }
  .pcs-wi5-heading span { color:var(--orange); }
  .pcs-wi5-tab { border-bottom:1.5px solid rgba(0,65,104,0.08); overflow:hidden; transition:background .3s; }
  .pcs-wi5-tab:first-child { border-top:1.5px solid rgba(0,65,104,0.08); border-radius:18px 18px 0 0; }
  .pcs-wi5-tab:last-child { border-radius:0 0 18px 18px; }
  .pcs-wi5-tab.open { background:linear-gradient(135deg,rgba(237,131,55,0.03),rgba(0,65,104,0.03)); }
  .pcs-wi5-tab-head {
    display:flex; align-items:center; gap:1.6rem;
    padding:1.4rem 2rem; cursor:pointer; user-select:none;
    position:relative; transition:background .25s;
  }
  .pcs-wi5-tab-head:hover { background:rgba(237,131,55,0.04); }
  .pcs-wi5-tab.open .pcs-wi5-tab-head { background:rgba(237,131,55,0.05); }
  .pcs-wi5-tab-num { position:relative; width:54px; height:54px; flex-shrink:0; display:flex; align-items:center; justify-content:center; }
  .pcs-wi5-tab-num-diamond { position:absolute; inset:0; background:linear-gradient(135deg,#004168,#1e8fc4); clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%); transition:background .3s,transform .3s; }
  .pcs-wi5-tab.open .pcs-wi5-tab-num-diamond { background:linear-gradient(135deg,#ed8337,#f5a66b); transform:rotate(45deg) scale(0.9); }
  .pcs-wi5-tab-num-text { position:relative; z-index:2; font-family:'Syne',sans-serif; font-size:.82rem; font-weight:800; color:#fff; letter-spacing:.04em; }
  .pcs-wi5-tab-icon { width:42px; height:42px; flex-shrink:0; border-radius:50%; background:rgba(0,65,104,0.06); border:1.5px solid rgba(0,65,104,0.1); display:flex; align-items:center; justify-content:center; font-size:1.2rem; transition:background .3s,border-color .3s; }
  .pcs-wi5-tab.open .pcs-wi5-tab-icon { background:rgba(237,131,55,0.1); border-color:rgba(237,131,55,0.3); }
  .pcs-wi5-tab-title { flex:1; font-family:'Poppins',sans-serif; font-size:1rem; font-weight:700; color:#0d1f2d; transition:color .25s; }
  .pcs-wi5-tab.open .pcs-wi5-tab-title { color:var(--orange); }
  .pcs-wi5-tab-chev { width:28px; height:28px; border-radius:50%; background:rgba(0,65,104,0.06); display:flex; align-items:center; justify-content:center; transition:background .3s,transform .35s; flex-shrink:0; }
  .pcs-wi5-tab.open .pcs-wi5-tab-chev { background:rgba(237,131,55,0.12); transform:rotate(180deg); }
  .pcs-wi5-tab-body { max-height:0; overflow:hidden; transition:max-height .45s cubic-bezier(.4,0,.2,1); }
  .pcs-wi5-tab.open .pcs-wi5-tab-body { max-height:320px; }
  .pcs-wi5-tab-content { padding:2rem 2rem 1.8rem 7.2rem; display:grid; grid-template-columns:1fr 0fr; gap:1.8rem; }
  .pcs-wi5-tab-desc { font-size:.94rem; line-height:1.82; color:#000; border-left:3px solid rgba(237,131,55,0.3); padding-left:1rem; font-family:'Poppins',sans-serif; }
  .pcs-wi5-tab-tag { font-size:.72rem; font-weight:700; padding:.3rem .85rem; border-radius:50px; letter-spacing:.04em; }
  .pcs-wi5-tab-tag.t-orange { background:rgba(237,131,55,0.1); border:1px solid rgba(237,131,55,0.3); color:#c96a1e; }
  .pcs-wi5-tab-tag.t-blue { background:rgba(30,143,196,0.1); border:1px solid rgba(30,143,196,0.25); color:#1e8fc4; }
  .pcs-wi5-tab-progress { height:3px; background:linear-gradient(to right,var(--orange),#1e8fc4); border-radius:0 3px 3px 0; transform-origin:left; transform:scaleX(0); transition:transform .5s .1s ease; }
  .pcs-wi5-tab.open .pcs-wi5-tab-progress { transform:scaleX(1); }

  /* OUR PROCESS — NUMBERED CARDS GRID */
  .pcs-proc-section {
    padding:7rem 6%;
    background:linear-gradient(160deg,var(--navy-deep) 0%,var(--navy) 50%,var(--navy-mid) 100%);
    position:relative; overflow:hidden;
  }
  .pcs-proc-section::before {
    content:''; position:absolute; inset:0; pointer-events:none;
    background-image:linear-gradient(rgba(237,131,55,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(237,131,55,0.04) 1px,transparent 1px);
    background-size:56px 56px;
  }
  .pcs-proc-inner { max-width:1200px; margin:0 auto; position:relative; z-index:2; }
  .pcs-proc-header { text-align:center; margin-bottom:4rem; }
  .pcs-proc-eyebrow-dot { width:6px; height:6px; border-radius:50%; background:var(--orange); animation:pulse-dot 1.6s infinite; display:inline-block; }
  .pcs-proc-title { font-family:'Poppins',sans-serif; font-size:clamp(1.9rem,2.8vw,2.6rem); font-weight:600; line-height:1.12; color:#fff; margin-bottom:.9rem; }
  .pcs-proc-title span { color:var(--orange); }
  .pcs-proc-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.8rem; }
  @media(max-width:900px){ .pcs-proc-grid { grid-template-columns:repeat(2,1fr); } }
  @media(max-width:560px){ .pcs-proc-grid { grid-template-columns:1fr; } }

  /* ══════════════════════════════════════════════
     TABLET FIX — 900px to 1020px
     Specifically targets the gap between mobile
     breakpoint (<=900px) and desktop (>1020px)
  ══════════════════════════════════════════════ */

  @media (min-width: 901px) and (max-width: 1020px) {

    /* ── HERO BANNER ── */
    .wd-hero {
      grid-template-columns: 1fr 1fr;
      padding: 5rem 4% 3.5rem;
      gap: 1.5rem;
    }
    .wd-hero-heading { font-size: clamp(1.6rem, 2.8vw, 2.2rem); }
    .wd-hero-sub { font-size: 0.92rem; }
    .wd-hero-img { height: 340px; }

    /* ── APPROACH SECTION ── */
    .wd-approach { padding: 3.5rem 4%; }
    .wd-ap-inner {
      grid-template-columns: 1fr 0.85fr;
      gap: 2rem;
    }
    .wd-ap-form-wrap { max-width: 100%; }
    .wd-ap-form-card { padding: 2rem 1.8rem; }
    .wd-ap-heading { font-size: clamp(1.5rem, 2.5vw, 2rem); }

    /* ── APPROACH (ApproachSection component) ── */
    .ap-inner {
      grid-template-columns: 1fr 0.85fr !important;
      gap: 2rem !important;
    }

    /* ── SERVICES ACCORDION ── */
    .svc-section { padding: 4.5rem 4% 5rem; }
    .svc-layout {
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }
    .svc-heading { font-size: clamp(1.5rem, 2.8vw, 2rem); }
    .svc-right-col { position: static; top: auto; }
    .acc-desc, .acc-bar-wrap { padding-left: 0; }

    /* ── WHAT WE OFFER — ORBIT ── */
    .pcs-offer-section { padding: 4rem 4% 5rem; }
    .pcs-offer-body {
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }
    .pcs-orbit-wrap { width: 300px; height: 300px; }
    .pcs-orbit-center { width: 85px; height: 85px; }
    .pcs-orbit-center-name { font-size: 1rem; }
    .pcs-orbit-node-box { width: 80px; height: 80px; gap: 5px; }
    .pcs-orbit-node-emoji { font-size: 1.1rem; }
    .pcs-orbit-node-lbl { font-size: .58rem; }

    /* ── WHAT'S INCLUDED — ACCORDION ── */
    .pcs-wi5-section { padding: 4rem 4% 5rem; }
    .pcs-wi5-tab-content {
      grid-template-columns: 1fr;
      padding-left: 3rem;
      gap: 1rem;
    }
    .pcs-wi5-tab-head { gap: 1rem; padding: 1.2rem 1.4rem; }

    /* ── PROCESS GRID ── */
    .pcs-proc-section { padding: 4rem 4%; }
    .pcs-proc-grid { grid-template-columns: repeat(2, 1fr); gap: 1.2rem; }

    /* ── WHY / FEATURES — 4 BOX ── */
    .pcs-fb-section { padding: 4.5rem 4%; }
    .pcs-fb-grid {
      grid-template-columns: 1fr 120px 1fr;
    }
    .pcs-fb-center-circle { width: 100px; height: 100px; }
    .pcs-fb-center-inner { width: 74px; height: 74px; }
    .pcs-fb-center-icon { font-size: 1.5rem; }
    .pcs-fb-box { padding: 1.6rem 1.4rem; min-height: 180px; }
    .pcs-fb-title { font-size: clamp(1.5rem, 2.5vw, 2rem); }

    /* ── WHY CHOOSE US ── */
    .wcu-section { padding: 3.5rem 4%; }
    .wcu-inner {
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }
    .wcu-heading { font-size: clamp(1.5rem, 2.5vw, 2rem); }

    /* ── PORTFOLIO SECTION ── */
    .pf-section { padding: 3.5rem 4%; }
    .pf-inner {
      grid-template-columns: minmax(220px, 340px) 1fr;
      gap: 2.5rem;
      padding: 3rem 2rem;
    }
    .pf-cols { grid-template-columns: repeat(2, 1fr); gap: 0.8rem; }
    .pf-heading { font-size: clamp(1.5rem, 2.5vw, 2rem); }

    /* ── PROCESS SECTION (WebsiteDevelopment) ── */
    .proc-section { padding: 4rem 4%; margin: 0 !important; }
    .proc-cols {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    .proc-mockup-wrap { order: -1; margin: 1rem auto; }
    .proc-points.left .proc-point { flex-direction: row; text-align: left; }
    .proc-points.left .proc-point-text { align-items: flex-start; }
    .proc-screen { width: 220px; }
    .pb-tl, .pb-tr, .pb-bl, .pb-br { display: none; }
    .proc-heading { font-size: clamp(1.5rem, 2.5vw, 2rem); }

    /* ── KEY FEATURES CAROUSEL ── */
    .kf-section { padding: 3rem 0 4rem; }
    .kf-inner { padding: 2rem 2.5rem; }
    .kf-carousel-wrap { height: 360px; }
    .kf-card { width: 300px; }
    .kf-title { font-size: clamp(1.6rem, 2.8vw, 2.2rem); }

    /* ── FAQ SECTION ── */
    .faq-wrapper { grid-template-columns: 1fr 1fr !important; gap: 1rem !important; }
    .faq-section { padding: 3rem 4% 4rem !important; }

    /* ── GENERAL ── */
    .pcs-wi5-heading, .pcs-offer-heading { font-size: clamp(1.5rem, 2.5vw, 2rem) !important; }
  }

  .pcs-proc-gc {
    position:relative; background:rgba(255,255,255,0.04);
    border:1px solid rgba(255,255,255,0.09); border-radius:20px;
    padding:2rem 1.6rem 1.8rem; display:flex; flex-direction:column; gap:.9rem;
    transition:transform .28s,box-shadow .28s,border-color .28s,background .28s; overflow:hidden;
  }
  .pcs-proc-gc::after {
    content:''; position:absolute; bottom:0; left:0; right:0; height:3px;
    background:linear-gradient(to right,var(--orange),#1e8fc4);
    border-radius:0 0 20px 20px; transform:scaleX(0); transform-origin:left; transition:transform .35s ease;
  }
  .pcs-proc-gc:hover { transform:translateY(-6px); box-shadow:0 18px 48px rgba(0,0,0,0.3); border-color:rgba(237,131,55,0.3); background:rgba(237,131,55,0.05); }
  .pcs-proc-gc:hover::after { transform:scaleX(1); }
  .pcs-proc-gc:hover .pcs-proc-gc-icon { background:rgba(237,131,55,0.22); transform:scale(1.1) rotate(-4deg); }
  .pcs-proc-gc-num {
    font-family:'Poppins',sans-serif; font-size:3.2rem; font-weight:900;
    line-height:1; letter-spacing:-.03em;
    background:linear-gradient(135deg,rgba(237,131,55,0.5) 0%,rgba(237,131,55,0.1) 100%);
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; user-select:none;
  }
  .pcs-proc-gc-icon {
    width:50px; height:50px; border-radius:14px;
    background:rgba(237,131,55,0.1); border:1px solid rgba(237,131,55,0.25);
    display:flex; align-items:center; justify-content:center;
    font-size:1.5rem; transition:background .3s,transform .3s; flex-shrink:0;
  }
  .pcs-proc-gc-top { display:flex; align-items:center; justify-content:space-between; }
  .pcs-proc-gc-title { font-family:'Poppins',sans-serif; font-size:1rem; font-weight:700; color:#fff; line-height:1.3; }
  .pcs-proc-gc-desc { font-family:'Poppins',sans-serif; font-size:.87rem; line-height:1.78; color:rgba(255,255,255,0.72); flex:1; }

  /* WHY — 4 BOX */
  .pcs-fb-section { padding:7rem 6%; background:#f7f9fc; overflow:hidden; position:relative; }
  .pcs-fb-inner { max-width:1100px; margin:0 auto; position:relative; z-index:2; }
  .pcs-fb-header { text-align:center; margin-bottom:3.5rem; }
  .pcs-fb-eyebrow { display:inline-flex; align-items:center; gap:.5rem; font-size:.72rem; font-weight:700; color:#ed8337; letter-spacing:.12em; text-transform:uppercase; margin-bottom:.9rem; background:rgba(237,131,55,0.09); border:1px solid rgba(237,131,55,0.25); padding:.35rem 1rem; border-radius:50px; }
  .pcs-fb-eyebrow-dot { width:6px; height:6px; border-radius:50%; background:#ed8337; animation:pulse-dot 1.6s infinite; display:inline-block; }
  .pcs-fb-title { font-family:'Poppins',sans-serif; font-size:clamp(1.7rem,2.6vw,2.4rem); font-weight:700; line-height:1.15; color:#000; }
  .pcs-fb-title span { color:#ed8337; }
  .pcs-fb-grid { display:grid; grid-template-columns:1fr 160px 1fr; grid-template-rows:auto; position:relative; align-items:stretch; }
  .pcs-fb-vline { position:absolute; left:50%; top:0; bottom:0; width:1.5px; background:linear-gradient(to bottom,rgba(0,65,104,0.1),rgba(237,131,55,0.25),rgba(0,65,104,0.1)); transform:translateX(-50%); pointer-events:none; z-index:1; }
  .pcs-fb-hline { position:absolute; top:50%; left:0; right:0; height:1.5px; background:linear-gradient(to right,rgba(0,65,104,0.1),rgba(237,131,55,0.25),rgba(0,65,104,0.1)); transform:translateY(-50%); pointer-events:none; z-index:1; }
  .pcs-fb-center-col { grid-column:2; grid-row:1 / 3; display:flex; align-items:center; justify-content:center; position:relative; z-index:10; }
  .pcs-fb-center-circle { width:128px; height:128px; border-radius:50%; background:conic-gradient(#ed8337 0deg 180deg,#004168 180deg 360deg); box-shadow:0 0 0 5px rgba(237,131,55,0.15),0 0 0 10px rgba(0,65,104,0.07),0 8px 30px rgba(0,0,0,0.13); display:flex; align-items:center; justify-content:center; }
  .pcs-fb-center-inner { width:96px; height:96px; border-radius:50%; background:#fff; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:4px; }
  .pcs-fb-center-icon { font-size:1.9rem; line-height:1; }
  .pcs-fb-center-lbl { font-family:'Syne',sans-serif; font-size:.62rem; font-weight:800; color:#004168; letter-spacing:.08em; text-transform:uppercase; }
  .pcs-fb-box { position:relative; padding:2.2rem 2rem; background:#fff; overflow:hidden; transition:box-shadow .3s; display:flex; flex-direction:column; min-height:220px; }
  .pcs-fb-box:hover { box-shadow:0 10px 36px rgba(0,0,0,0.08); }
  .pcs-fb-box-tl { border:1.5px solid rgba(0,65,104,0.13); border-right:none; border-bottom:none; border-radius:20px 0 0 0; }
  .pcs-fb-box-tr { border:1.5px solid rgba(0,65,104,0.13); border-left:none; border-bottom:none; border-radius:0 20px 0 0; }
  .pcs-fb-box-bl { border:1.5px solid rgba(0,65,104,0.13); border-right:none; border-top:none; border-radius:0 0 0 20px; background:rgba(237,131,55,0.04); }
  .pcs-fb-box-br { border:1.5px solid rgba(0,65,104,0.13); border-left:none; border-top:none; border-radius:0 0 20px 0; background:rgba(0,65,104,0.03); }
  .pcs-fb-icon { width:52px; height:52px; border-radius:13px; display:flex; align-items:center; justify-content:center; font-size:1.45rem; margin-bottom:.95rem; }
  .pcs-fb-box-tl .pcs-fb-icon, .pcs-fb-box-br .pcs-fb-icon { background:rgba(237,131,55,0.11); border:1.5px solid rgba(237,131,55,0.28); }
  .pcs-fb-box-tr .pcs-fb-icon, .pcs-fb-box-bl .pcs-fb-icon { background:rgba(0,65,104,0.08); border:1.5px solid rgba(0,65,104,0.2); }
  .pcs-fb-box-title { font-family:'Poppins',sans-serif; font-size:1rem; font-weight:600; line-height:1.25; margin-bottom:.6rem; }
  .pcs-fb-box-tl .pcs-fb-box-title, .pcs-fb-box-br .pcs-fb-box-title { color:#004168; }
  .pcs-fb-box-tr .pcs-fb-box-title, .pcs-fb-box-bl .pcs-fb-box-title { color:#c96a1e; }
  .pcs-fb-box-title::after { content:''; display:block; width:36px; height:3px; border-radius:2px; margin-top:6px; }
  .pcs-fb-box-tl .pcs-fb-box-title::after, .pcs-fb-box-br .pcs-fb-box-title::after { background:#ed8337; }
  .pcs-fb-box-tr .pcs-fb-box-title::after, .pcs-fb-box-bl .pcs-fb-box-title::after { background:#004168; }
  .pcs-fb-box-desc { font-size:.86rem; line-height:1.78; color:#000; font-family:'Poppins',sans-serif; }

  @media(max-width:900px){
    .pcs-hero { grid-template-columns:1fr; padding:7rem 5% 5rem; text-align:center; }
    .pcs-badge { margin:0 auto 1.4rem; }
    .pcs-hero-sub { max-width:90%; }
    .pcs-design-scene { width:340px; height:340px; transform:scale(.8); }
    .pcs-ap-inner { grid-template-columns:1fr; }
    .pcs-offer-body { grid-template-columns:1fr; gap:2.5rem; }
    .pcs-orbit-wrap { width:320px; height:320px; }
    .pcs-orbit-center { width:90px; height:90px; }
    .pcs-orbit-center-name { font-size:1.1rem; }
    .pcs-orbit-node-box { width:70px; height:70px; }
    /* pcs-fb-grid handled in 540px */
    .pcs-fb-grid { grid-template-columns:1fr 120px 1fr; }
    .pcs-offer-body { grid-template-columns:1fr; }
    .pcs-orbit-wrap { width:300px; height:300px; }
  }
  @media(max-width:540px){
    .pcs-nav-links, .pcs-nav-btn { display:none; }
    .pcs-hero-heading { font-size:clamp(1.7rem,6vw,2.2rem); } .wd-hero-heading { font-size:clamp(1.7rem,6vw,2.2rem) !important; text-align:start !important; }
    .pcs-wi5-tab-content { grid-template-columns:1fr; padding-left:1rem; }
    .pcs-proc-gc { padding:1.4rem 1.2rem; }
    .pcs-proc-gc-num { font-size:2.4rem; }
    .pcs-fb-grid { grid-template-columns:1fr !important; }
    .pcs-fb-center-col { display:none; }
    .pcs-fb-box-tl, .pcs-fb-box-tr, .pcs-fb-box-bl, .pcs-fb-box-br { border-radius:16px; border:1.5px solid rgba(0,65,104,0.13) !important; grid-column:1 !important;         margin-top: 25px;}
    .pcs-fb-vline, .pcs-fb-hline { display:none; }
    .wd-hero { grid-template-columns:1fr; padding:7rem 5% 5rem; text-align:center; }
    .wd-hero-actions { justify-content:center; }
    .wd-ap-inner { grid-template-columns:1fr; }
    .wd-ap-form-wrap { max-width:100%; }
    .pcs-orbit-wrap { width:260px; height:260px; }
    .pcs-orbit-node-box { width:60px; height:60px; }
    .pcs-orbit-center { width:75px; height:75px; }
    .pcs-orbit-center-name { font-size:.9rem; }
    .pcs-wi5-tab-num { width:36px; height:36px; }
    .pcs-wi5-tab-num-text { font-size:.7rem; }
    .pcs-wi5-tab-icon { width:32px; height:32px; font-size:.95rem; }
    .pcs-wi5-tab-title { font-size:.92rem; }
    .pcs-wi5-tab-head { gap:1rem; padding:1.1rem 1.2rem; }
    .pcs-wi5-tab-content { padding:1.2rem 1rem 1.2rem 1rem; }
  }
  /* ══════════════════════════════════════════
     COMPREHENSIVE MOBILE RESPONSIVE FIXES
     Covers: form, FAQ, orbit, features, all sections
  ══════════════════════════════════════════ */

  /* ── FORM: 2-col row → 1-col on mobile ── */
  @media (max-width: 768px) {
    .wd-fl-row { grid-template-columns: 1fr !important; }
    .wd-ap-form-card { padding: 1.8rem 1.2rem !important; }
    .wd-form-title { font-size: 1.35rem !important; margin-bottom: 1.4rem !important; }
    .wd-ap-form-wrap { max-width: 100% !important; }
    .wd-ap-inner { grid-template-columns: 1fr !important; gap: 2rem !important; }
    .wd-approach { padding: 3rem 5% !important; }

    /* ── OFFER SECTION ── */
    .pcs-offer-section { padding: 3.5rem 5% 4rem !important; }
    .pcs-offer-body { grid-template-columns: 1fr !important; gap: 2rem !important; }
    .pcs-offer-heading { margin-bottom: 2.5rem !important; font-size: clamp(1.5rem, 5vw, 2rem) !important; }
    .pcs-orbit-wrap { width: 260px !important; height: 260px !important; margin: 0 auto !important; }
    .pcs-orbit-center { width: 80px !important; height: 80px !important; }
    .pcs-orbit-center-name { font-size: 0.95rem !important; }
    .pcs-orbit-node-box { width: 65px !important; height: 65px !important; }
    .pcs-orbit-node-emoji { font-size: 1rem !important; }
    .pcs-orbit-node-lbl { font-size: 0.55rem !important; }

    /* ── WHAT'S INCLUDED ACCORDION ── */
    .pcs-wi5-section { padding: 3.5rem 5% 4rem !important; }
    .pcs-wi5-tab-content { grid-template-columns: 1fr 0f!important; padding-left: 1rem !important; gap: 1rem !important; }
    .pcs-wi5-tab-head { gap: 0.8rem !important; padding: 1rem 1rem !important; }
    .pcs-wi5-tab-num { width: 38px !important; height: 38px !important; }
    .pcs-wi5-tab-icon { width: 34px !important; height: 34px !important; font-size: 1rem !important; }
    .pcs-wi5-tab-title { font-size: 0.9rem !important; }
    .pcs-wi5-heading { font-size: clamp(1.4rem, 5vw, 1.9rem) !important; margin-bottom: 2rem !important; }

    /* ── PROCESS GRID ── */
    .pcs-proc-section { padding: 3.5rem 5% !important; }
    .pcs-proc-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
    .pcs-proc-gc { padding: 1.4rem 1.2rem !important; }
    .pcs-proc-gc-num { font-size: 2.2rem !important; }
    .pcs-proc-title { font-size: clamp(1.4rem, 5vw, 2rem) !important; }

    /* ── FEATURES (4-BOX) ── */
    .pcs-fb-section { padding: 3.5rem 5% !important; }
    .pcs-fb-grid { grid-template-columns: 1fr !important; }
    .pcs-fb-center-col { display: none !important; }
    .pcs-fb-vline, .pcs-fb-hline { display: none !important; }
    .pcs-fb-box-tl, .pcs-fb-box-tr, .pcs-fb-box-bl, .pcs-fb-box-br {
      border-radius: 16px !important;
      border: 1.5px solid rgba(0,65,104,0.13) !important;
      grid-column: 1 !important;
      margin-top: 16px !important;
    }
    .pcs-fb-title { font-size: clamp(1.4rem, 5vw, 2rem) !important; }

    /* ── FAQ SECTION ── */
    .faq-section { padding: 0 5% 60px !important; }
    .faq-wrapper { grid-template-columns: 1fr !important; gap: 0 !important; }
    .faq-head h2 { font-size: clamp(1.4rem, 5vw, 2rem) !important; }
    .faq-question { font-size: 0.92rem !important; padding: 1rem 1.2rem !important; }
    .faq-answer { font-size: 0.88rem !important; padding: 0.8rem 1.2rem 1rem !important; }
    .faq-item { margin-bottom: 0.5rem !important; }

    /* ── WCU (Why Choose Us) ── */
    .wcu-section { padding: 3rem 5% !important; }
    .wcu-inner { grid-template-columns: 1fr !important; gap: 2rem !important; }
    .wcu-heading { font-size: clamp(1.4rem, 5vw, 2rem) !important; }

    /* ── PORTFOLIO ── */
    .pf-section { padding: 3rem 5% !important; }
    .pf-inner { grid-template-columns: 1fr !important; gap: 1.5rem !important; padding: 1.8rem 1.2rem !important; }
    .pf-cols { grid-template-columns: repeat(2, 1fr) !important; gap: 0.6rem !important; }
    .pf-heading { font-size: clamp(1.4rem, 5vw, 2rem) !important; }

    /* ── KEY FEATURES CAROUSEL ── */
    .kf-section { padding: 2.5rem 0 3rem !important; }
    .kf-inner { padding: 1.5rem 1rem !important; }
    .kf-card { width: 260px !important; }
    .kf-title { font-size: clamp(1.4rem, 5vw, 1.9rem) !important; }

    /* ── HERO (Static page fallback) ── */
    .wd-hero {
      grid-template-columns: 1fr !important;
      padding: 5.5rem 5% 3rem !important;
      gap: 2rem !important;
      text-align: left !important;
      min-height: auto !important;
    }
    .wd-hero-heading { font-size: clamp(1.6rem, 6vw, 2.3rem) !important; text-align: left !important; }
    .wd-hero-sub { font-size: 0.92rem !important; }
    .wd-hero-img { height: auto !important; max-height: 260px !important; width: 100% !important; object-fit: contain !important; }
    .wd-hero-actions { justify-content: flex-start !important; }
    .wd-btn-fill { width: auto !important; min-width: 200px !important; justify-content: center !important; }
    .badge { margin: 0 0 1.2rem !important; }

    /* ── APPROACH SECTION (generic) ── */
    .wd-ap-eyebrow { font-size: 0.62rem !important; }
    .wd-ap-heading { font-size: clamp(1.4rem, 5vw, 2rem) !important; }
    .wd-ap-intro { font-size: 0.92rem !important; }

    /* ── GENERAL PADDING ── */
    section { overflow-x: hidden; }
    .container { padding-left: 1rem !important; padding-right: 1rem !important; }
  }

  /* ── EXTRA SMALL (< 400px) ── */
  @media (max-width: 400px) {
    .wd-hero { padding: 7.5rem 4% 2rem !important; }
    .wd-hero-heading { font-size: clamp(1.4rem, 7.5vw, 1.9rem) !important; }
    .wd-hero-img { max-height: 200px !important; }
    .wd-ap-form-card { padding: 1.4rem 1rem !important; }
    .wd-form-title { font-size: 1.2rem !important; }
    .pcs-orbit-wrap { width: 220px !important; height: 220px !important; }
    .pcs-orbit-node-box { width: 54px !important; height: 54px !important; }
    .pcs-orbit-center { width: 68px !important; height: 68px !important; }
    .wd-btn-fill { width: 75% !important; }
    .faq-wrapper { grid-template-columns: 1fr !important; }
  }

`;

const offerData = [
  { emoji: "/img/icon/static-website-cost.webp", label: "Cost-Effective", title: "Cost-Effective Development", desc: "Static websites are one of the most budget-friendly web development solutions available for businesses of all sizes. At PCS, we deliver high-quality static websites that require minimal infrastructure, reduce ongoing maintenance costs, and provide exceptional value.", tags: ["Affordable","Efficient","Scalable","Valuable"] },
  { emoji: "/img/icon/static-website-experience.webp", label: "Experience", title: "Seamless User Experience", desc: "User experience plays a critical role in engagement and conversions. Our team focuses on clean layouts, structured content, and intuitive navigation to ensure visitors can easily find what they're looking for. A smooth browsing experience encourages users to stay longer and take action.", tags: ["Intuitive","Smooth","Structured","Engaging"] },
  { emoji: "/img/icon/static-website-security.webp", label: " Security", title: "Enhanced Security & Stability", desc: "Static websites have no database or server-side scripts, significantly reducing security vulnerabilities. PCS builds static websites using secure frameworks and coding standards that protect your business online, ensuring stability, reliability, and peace of mind for the long term.", tags: ["Secure","Stable","Reliable","Protected"] },
  { emoji: "/img/icon/static-website-customization.webp", label: "Customized", title: "Customized Static Website Solutions", desc: "Every business has its own identity, goals, and audience. That's why PCS delivers tailor-made static website development solutions designed specifically around your brand requirements. We understand your business objectives and create a website that not only reflects your brand personality but also differentiates you from competitors.", tags: ["Tailored","Strategic","Branded","Unique"] },
  { emoji: "/img/icon/static-website-delivery.webp", label: " Delivery", title: "On-Time Delivery", desc: "We value your time and business commitments. PCS follows a structured development process with clearly defined timelines to ensure timely project completion. Our efficient workflow ensures your static website is delivered on schedule without compromising on quality or performance.", tags: ["Timely","Consistent","Reliable","Professional"] },
];

const nodePositions = [
  { top: "5%", left: "50%" },
  { top: "22%", left: "87%" },
  { top: "73%", left: "82%" },
  { top: "73%", left: "18%" },
  { top: "22%", left: "13%" },
];

const connectorAngles = [-90, -18, 54, 126, 198];

const includedData = [
  { num:"01", icon:"/img/icon/static-website-custom-design.webp", title:"Custom UI/UX Design", desc:"We craft visually engaging and brand-aligned static websites tailored to your business goals. From layout structure to typography and color systems, every element is thoughtfully developed to enhance visual appeal and user experience.", tags:[{t:"UI Design",c:"t-orange"},{t:"UX Strategy",c:"t-blue"},{t:"Brand Alignment",c:"t-orange"},{t:"Typography",c:"t-blue"}] },
  { num:"02", icon:"/img/icon/static-website-planning.webp", title:"Structured Content Layout", desc:"Great development supports great content. We organize and structure your website content for clarity, readability, and flow — ensuring visitors can easily navigate and understand your message", tags:[{t:"Content Hierarchy",c:"t-orange"},{t:"Info Architecture",c:"t-blue"},{t:"CTA Placement",c:"t-orange"},{t:"Navigation Flow",c:"t-blue"}] },
  { num:"03", icon:"/img/icon/static-website-mobile-responsive.webp", title:"Responsive Design Experience", desc:"Our static websites are fully responsive, adapting seamlessly across mobiles, tablets, and desktops. This ensures consistent branding, smooth browsing, and a visually polished experience on every device.", tags:[{t:"Mobile-First",c:"t-orange"},{t:"Cross-Device",c:"t-blue"},{t:"Fluid Layouts",c:"t-orange"},{t:"Touch UX",c:"t-blue"}] },
  { num:"04", icon:"/img/icon/static-website-branding.webp", title:"Visual Branding Consistency", desc:"Consistency is the foundation of a strong brand. We apply your colors, fonts, imagery, and iconography uniformly across every page of your static website — enhancing brand recognition, communicating reliability, and delivering a cohesive digital presence that sets your business apart.", tags:[{t:"Brand Guidelines",c:"t-orange"},{t:"Colour System",c:"t-blue"},{t:"Visual Identity",c:"t-orange"},{t:"Brand Voice",c:"t-blue"}] },
  { num:"05", icon:"/img/icon/static-website-performance.webp", title:"Performance & Engagement Optimization", desc:"Our development approach focuses on engagement. With clear calls-to-action, intuitive layouts, and strategic section placement, we create static websites that not only look impressive but encourage meaningful interaction.", tags:[{t:"Page Speed",c:"t-orange"},{t:"Core Web Vitals",c:"t-blue"},{t:"SEO Architecture",c:"t-orange"},{t:
"Conversion Rate",c:
"t-blue"}] },
];

const processSteps = [
  { num:"01", icon:"/img/icon/static-website-target.webp", title:"Business Discovery & Goal Setting", desc:"We start by having a detailed conversation about your business, target audience, industry, and objectives. Understanding your vision from the very beginning allows us to set a focused development direction that aligns perfectly with your brand and business goals.", tags:["Business Goals","Audience Research","Competitor Analysis"], last:false },
  { num:"02", icon:"/img/icon/static-website-market-research.webp", title:"Market Research & Strategic Planning", desc:"Our team conducts in-depth research on your competitors, industry landscape, and user expectations. This insight helps us craft a well-informed development strategy that ensures your static website stands out, communicates clearly, and delivers real value.", tags:["Wireframes","Site Architecture","Content Planning"], last:false },
  { num:"03", icon:"/img/icon/static-website-wireframing.webp", title:"Wireframing & Layout Planning", desc:"Before development begins, we create detailed wireframes that define the structure, content placement, and user flow of your website. This step ensures a logical, intuitive layout and strong visual hierarchy that guides visitors seamlessly through your content.", tags:["Visual Design","Brand System","UX Prototyping"], last:false },
  { num:"04", icon:"/img/icon/static-website-design-layout.webp", title:"Design & Static Development", desc:"Our developers and designers work together to build a visually compelling, brand-consistent static website. From typography and color systems to imagery and interface elements, every detail is crafted to reflect your brand's professionalism and identity.", tags:["Responsive Code","SEO Structure","Performance"], last:false },
  { num:"05", icon:"/img/icon/static-website-responsive.webp", title:"Responsive Refinement & Optimization", desc:"We thoroughly test and optimize your static website across desktops, tablets, and mobile devices. This ensures consistent performance, smooth interaction, and a flawless visual experience regardless of the screen size or device used.", tags:["Cross-Browser","Speed Testing","QA Review"], last:false },
  { num:"06", icon:"/img/icon/static-website-launch.webp", title:"Review, Approval & Launch", desc:"Once development is complete, we present your static website for review and welcome your feedback openly. All necessary refinements are implemented with care. Once everything meets your expectations, we finalize and deploy your website for a smooth, confident, and disruption-free launch.", tags:["Go Live","Monitoring","Ongoing Support"], last:true },
];

const whyData = [
  { cls:"pcs-fb-box-tl", icon:"/img/icon/static-website-strategy.webp", title:"Intuitive & User-Focused Experience", desc:"Every static website is designed with the end user in mind. Clear structure, smooth navigation, and organized layouts create an engaging browsing experience that encourages visitors to explore and interact confidently." },
  { cls:"pcs-fb-box-tr", icon:"/img/icon/static-website-seo.webp", title:"SEO-Optimized Structure", desc:"Search-friendly development practices are implemented from the foundation stage. Clean coding standards, optimized content placement, and responsive frameworks improve online visibility and strengthen overall search engine performance." },
  { cls:"pcs-fb-box-bl", icon:"/img/icon/static-website-email.webp", title:"Professional Email Integration", desc:"Seamless email integration connects contact forms, inquiry submissions, and automated responses directly to your business email system. This ensures every lead is captured, managed efficiently, and responded to without delays." },
  { cls:"pcs-fb-box-br", icon:"/img/icon/static-website-whatsapp.webp", title:"WhatsApp Business Integration", desc:"Direct WhatsApp integration enables instant communication between visitors and your business. With a single click, users can initiate conversations, improving engagement, accelerating responses, and enhancing customer trust." },
];

const faqData = [
  { q: "What is a static website?", a: "A static website is built using fixed HTML, CSS, and JavaScript files that deliver the same content to every visitor without relying on databases or server-side processing. Static websites are known for their fast loading speed, strong security, low maintenance, and cost-effectiveness — making them an ideal choice for businesses looking for a reliable and high-performing online presence." },
  { q: "Do you handle hosting and deployment?", a: "Yes, we provide complete hosting and deployment support as part of our static website development service. Our team handles everything from selecting the right hosting environment to configuring, uploading, and launching your static website — ensuring a smooth, error-free deployment with optimal performance from day one." },
  { q: "How long does it take to build a static site?", a: "The timeline for building a static website depends on the number of pages, design complexity, and content requirements. On average, a standard static website takes 1–3 weeks to complete, covering planning, design, development, testing, and final launch. Larger or more customized projects may take slightly longer based on scope." },
  { q: "How to develop a static website?", a: "Static website development involves a structured process — starting with requirement gathering and wireframing, followed by UI design, HTML/CSS/JavaScript development, responsive optimization, cross-browser testing, and final deployment. At PCS, we manage the entire process professionally, ensuring your static website is clean, fast, and fully aligned with your brand and business goals." },
  { q: "What is the role of static website development?", a: "Static website development plays a key role in establishing a strong, fast, and secure digital presence for businesses. It serves as the foundation of your online identity — communicating your brand, showcasing your services, attracting potential customers, and supporting your overall digital marketing and SEO strategy with a reliable, high-performance web presence." },
  { q: "Are static websites good for SEO?", a: "Yes. Static websites are highly SEO-friendly due to their fast load speed, clean code structure, and easy crawlability by search engines. When developed with proper on-page optimization, static websites can rank effectively and drive consistent organic traffic." },
];

export default function PCSWebsite() {
  const [activeOffer, setActiveOffer] = useState(0);
  const [openTab, setOpenTab] = useState(0);

   const handleOfferSelect = (i) => setActiveOffer(i);
  const handleTabToggle = (i) => setOpenTab(openTab === i ? -1 : i);

  const [form, setForm] = useState({ name:"", email:"", phone:"", company:"", msg:"" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      company: form.company,
      message: form.msg,
      url: window.location.href,
    };

    emailjs
      .send(
        "service_8xw6k3r",
        "template_jarui36",
        templateParams,
        "XWRnXi4hK2SvmRG3q"
      )
      .then(() => {
        alert("Message Sent Successfully ✅");
        setForm({ name:"", email:"", phone:"", company:"", msg:"" });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send ❌");
      });
  };

    const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <Layout>
      <>
      <style>{styles}</style>

      {/* SECTION 1: HERO */}
     <section className="wd-hero">
      <div className="wd-hero-bg-radial" />
      <div className="wd-hero-bg-grid" />

      {/* LEFT */}
      <div style={{position:"relative",zIndex:2,display:"flex",flexDirection:"column"}}>
        <div className="badge"><div className="badge-dot" />static Websites</div>
        <h1 className="wd-hero-heading">
          Fast and secure Static
          <span className="orange lined"> Websites built </span>  to Scale up Performance

        </h1>
        <p className="wd-hero-sub">

As a leading static website development company in Coimbatore, we deliver lightning-fast, secure, and scalable static websites built to strengthen your brand presence, attract the right audience, and support sustainable business growth through superior performance, SEO visibility, and seamless user experience.

        </p>
        <div className="wd-hero-actions">
          <a className="wd-btn-fill" href="#">Connect Now<span className="wd-btn-arrow">›</span></a>
        </div>
      </div>

      {/* RIGHT — banner image */}
      <div style={{position:"relative",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center",animation:"fadeUp .9s .15s ease both"}}>
        <img
          src={banner}
          alt="Static Website Development Banner"
          className="wd-hero-img"
        />
      </div>
    </section>

      {/* SECTION 2: OUR APPROACH */}
     <section className="wd-approach" id="approach">
      <div className="wd-ap-inner">

        {/* LEFT CONTENT */}
        <div>
             <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Strategy for Static Website Development </div>
          </div>
          <h2 className="wd-ap-heading">Fast, Clean &  <span>Conversion-Focused </span> Static Website Development</h2>
          <p className="wd-ap-intro">
Your website creates the first impression of your business online. As an experienced static website development company, we build fast, secure, and strategically structured websites aligned with your business goals.
          </p>
          <p className="wd-ap-intro">
Every element, from layout design to code structure, is developed with a focus on SEO performance, user engagement, and seamless browsing experience across all devices and screen sizes.
          </p>
          <p className="wd-ap-intro">
            As a trusted static website development company , we create modern and responsive static websites that combine visual appeal, performance, and functionality to strengthen your digital presence and business credibility.

          </p>
        </div>
      {/* RIGHT FORM */}
        <div className="wd-ap-form-wrap">
          <div className="wd-ap-form-card">
            <div className="wd-form-eyebrow">
              <span className="wd-form-eyebrow-line"/>Your Growth, Our Mission<span className="wd-form-eyebrow-line"/>
            </div>
            <div className="wd-form-title">Get Your <span>Free</span> Quote</div>

            <form onSubmit={handleSubmit}>
              <div className="wd-fl-row">
                <div className="wd-fl-group">
                  <label className="wd-fl-label">Your Name</label>
                  <div style={{position:"relative"}}>
                    <span className="wd-fl-icon">👤</span>
                    <input className="wd-fl-input" type="text" name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
                  </div>
                </div>
                <div className="wd-fl-group">
                  <label className="wd-fl-label">Company</label>
                  <div style={{position:"relative"}}>
                    <span className="wd-fl-icon">🏢</span>
                    <input className="wd-fl-input" type="text" name="company" placeholder="Company name" value={form.company} onChange={handleChange} />
                  </div>
                </div>
              </div>

              <div className="wd-fl-group">
                <label className="wd-fl-label">Email Address</label>
                <div style={{position:"relative"}}>
                  <span className="wd-fl-icon">✉️</span>
                  <input className="wd-fl-input" type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="wd-fl-group">
                <label className="wd-fl-label">Mobile Number</label>
                <div className="wd-phone-row">
                  <div className="wd-phone-flag"><span>📞</span></div>
                  <input className="wd-fl-input" type="tel" name="phone" placeholder="Mobile number" value={form.phone} onChange={handleChange} maxLength="10" pattern="[0-9]{10}" required />
                </div>
              </div>

              <div className="wd-fl-group wd-textarea-group">
                <label className="wd-fl-label">Message</label>
                <div style={{position:"relative"}}>
                  <span className="wd-fl-icon" style={{top:"0.9rem",transform:"none"}}>💬</span>
                  <textarea className="wd-fl-textarea" name="msg" placeholder="Tell us about your project..." value={form.msg} onChange={handleChange} />
                </div>
              </div>

              <button type="submit" className="wd-ap-submit">
                Get Free Consultation
                <span className="wd-ap-submit-arrow">›</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

      {/* SECTION 3: WHAT WE OFFER — ORBIT */}
      <section className="pcs-offer-section">
        <div className="pcs-offer-inner">
                <div className="partners-header1" style={{ marginBottom: '20px', textAlign: 'center' }}>
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'center' }}>Key Uniqueness</div>
          </div>
          <h2 className="pcs-offer-heading">Why Should You Choose for<span><i> Static Website Development?</i></span></h2>
          <div className="pcs-offer-body">
            <div className="pcs-offer-left">
              <div className="pcs-orbit-wrap">
                <div className="pcs-orbit-ring"></div>
                {connectorAngles.map((angle, i) => (
                  <div key={i} className={`pcs-orbit-connector${activeOffer === i ? " active" : ""}`}
                    style={{ width:"calc(50% - 62px)", transform:`rotate(${angle}deg) translateY(-50%)` }}
                  ></div>
                ))}
                <div className="pcs-orbit-center">
                  <div className="pcs-orbit-center-name">PCS</div>
                  <div className="pcs-orbit-center-sub">Web Design</div>
                </div>
                {offerData.map((item, i) => (
                  <div key={i} className="pcs-orbit-node" style={{ top: nodePositions[i].top, left: nodePositions[i].left }} onClick={() => handleOfferSelect(i)}>
                    <div className={`pcs-orbit-node-box${activeOffer === i ? " active" : ""}`}>
                      <img src={item.emoji} alt={item.label} style={{width:"28px",height:"28px",objectFit:"contain", filter: activeOffer === i ? "brightness(0) invert(1)" : "none", transition:"filter 0.3s"}} />
                      <div className="pcs-orbit-node-lbl">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pcs-offer-right">
              {activeOffer === -1 && (
                <div className="pcs-offer-placeholder">
                  <div className="pcs-offer-placeholder-icon"><img src="/img/icons/click.png" alt="Select an option" style={{width:"40px",height:"40px",objectFit:"contain",opacity:"0.4"}} /></div>
                  <div className="pcs-offer-placeholder-text">Click any box to view details</div>
                </div>
              )}
              {offerData.map((item, i) => (
                <div key={i} className={`pcs-offer-panel${activeOffer === i ? " active" : ""}`}>
                  <div className="pcs-offer-panel-bar"></div>
                  <div className="pcs-offer-panel-title-row">
                    <div className="pcs-offer-panel-icon"><img src={item.emoji} alt={item.title} style={{width:"32px",height:"32px",objectFit:"contain", filter:"brightness(0) invert(1)"}} /></div>
                    <div className="pcs-offer-panel-title">{item.title}</div>
                  </div>
                  <div className="pcs-offer-panel-divider"></div>
                  <div className="pcs-offer-panel-desc">{item.desc}</div>
                  <div className="pcs-offer-panel-tags">
                    {item.tags.map((tag, j) => <span key={j} className="pcs-offer-panel-tag">{tag}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT'S INCLUDED */}
      <section className="pcs-wi5-section">
        <div className="pcs-wi5-inner">
            <div className="pcs-offer-inner">
                <div className="partners-header1" style={{ marginBottom: '10px', textAlign: 'center' }}>
            <div className="partners-eyebrow" style={{ textAlign: 'center' }}>Our Expertise 
 </div>
          </div>
          </div>
          <h2 className="pcs-wi5-heading">What’s Included in Our  <span><i>Static Website</i></span> Development Services?</h2>
          <div className="pcs-wi5-tabs">
            {includedData.map((tab, i) => (
              <div key={i} className={`pcs-wi5-tab${openTab === i ? " open" : ""}`}>
                <div className="pcs-wi5-tab-head" onClick={() => handleTabToggle(i)}>
                  <div className="pcs-wi5-tab-num">
                    <div className="pcs-wi5-tab-num-diamond"></div>
                    <span className="pcs-wi5-tab-num-text">{tab.num}</span>
                  </div>
                  <div className="pcs-wi5-tab-icon"><img src={tab.icon} alt={tab.title} style={{width:"22px",height:"22px",objectFit:"contain"}} /></div>
                  <div className="pcs-wi5-tab-title">{tab.title}</div>
                  <div className="pcs-wi5-tab-chev">
                    <span style={{fontSize:"1rem",lineHeight:"1",display:"block"}}>▾</span>
                  </div>
                </div>
                <div className="pcs-wi5-tab-body">
                  <div className="pcs-wi5-tab-content">
                    <div className="pcs-wi5-tab-desc">{tab.desc}</div>
                    {/* <div className="pcs-wi5-tab-tags">
                      {tab.tags.map((t, j) => <span key={j} className={`pcs-wi5-tab-tag ${t.c}`}>{t.t}</span>)}
                    </div> */}
                  </div>
                  <div className="pcs-wi5-tab-progress"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR PROCESS */}
      <section className="pcs-proc-section">
        <div className="pcs-proc-inner">
          <div className="pcs-proc-header">
                 <div className="pcs-offer-inner">
                <div className="partners-header1" style={{ marginBottom: '10px', textAlign: 'center' }}>
            <div className="partners-eyebrow" style={{ textAlign: 'center' }}>Workflow Process 
</div>
          </div>
          </div>
            <h2 className="pcs-proc-title">Our  <span><i> Static Website</i></span> Development Process </h2>
          </div>
          <div className="pcs-proc-grid">
            {processSteps.map((step, i) => (
              <div className="pcs-proc-gc" key={i}>
                <div className="pcs-proc-gc-top">
                  <div className="pcs-proc-gc-num">{step.num}</div>
                  <div className="pcs-proc-gc-icon"><img src={step.icon} alt={step.title} style={{width:"28px",height:"28px",objectFit:"contain"}} /></div>
                </div>
                <div className="pcs-proc-gc-title">{step.title}</div>
                <div className="pcs-proc-gc-desc">{step.desc}</div>
                {/* <div className="pcs-proc-gc-tags">
                  {step.tags.map((t, j) => <span key={j}>{t}</span>)}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY */}
      <section className="pcs-fb-section">
        <div className="pcs-fb-inner">
          <div className="pcs-fb-header">
           <div className="pcs-offer-inner">
                <div className="partners-header1" style={{ marginBottom: '10px', textAlign: 'center' }}>
            <div className="partners-eyebrow" style={{ textAlign: 'center' }}>Key Service Features  </div>
          </div>
          </div>            <h2 className="pcs-fb-title">Features of our Static  <span><i>Website Development </i></span> Services</h2>
          </div>
          <div className="pcs-fb-grid">
            <div className="pcs-fb-vline"></div>
            <div className="pcs-fb-hline"></div>
            <div className={`pcs-fb-box pcs-fb-box-tl`}>
              <div className="pcs-fb-icon"><img src={whyData[0].icon} alt={whyData[0].title} style={{width:"32px",height:"32px",objectFit:"contain"}} /></div>
              <div className="pcs-fb-box-title">{whyData[0].title}</div>
              <div className="pcs-fb-box-desc">{whyData[0].desc}</div>
            </div>
            <div className="pcs-fb-center-col">
              <div className="pcs-fb-center-circle">
                <div className="pcs-fb-center-inner">
                  <div className="pcs-fb-center-icon"><img src="/img/icons/web.png" alt="PCS" style={{width:"36px",height:"36px",objectFit:"contain"}} /></div>
                  <div className="pcs-fb-center-lbl">PCS</div>
                </div>
              </div>
            </div>
            <div className={`pcs-fb-box pcs-fb-box-tr`}>
              <div className="pcs-fb-icon"><img src={whyData[1].icon} alt={whyData[1].title} style={{width:"32px",height:"32px",objectFit:"contain"}} /></div>
              <div className="pcs-fb-box-title">{whyData[1].title}</div>
              <div className="pcs-fb-box-desc">{whyData[1].desc}</div>
            </div>
            <div className={`pcs-fb-box pcs-fb-box-bl`}>
              <div className="pcs-fb-icon"><img src={whyData[2].icon} alt={whyData[2].title} style={{width:"32px",height:"32px",objectFit:"contain"}} /></div>
              <div className="pcs-fb-box-title">{whyData[2].title}</div>
              <div className="pcs-fb-box-desc">{whyData[2].desc}</div>
            </div>
            <div className={`pcs-fb-box pcs-fb-box-br`}>
              <div className="pcs-fb-icon"><img src={whyData[3].icon} alt={whyData[3].title} style={{width:"32px",height:"32px",objectFit:"contain"}} /></div>
              <div className="pcs-fb-box-title">{whyData[3].title}</div>
              <div className="pcs-fb-box-desc">{whyData[3].desc}</div>
            </div>
          </div>
        </div>
      </section>

     {/* blog section */}
      <BlogSection />


      {/* faq section */}
          <section className="faq-section" style={{padding: '0 0 80px 0'}}>
      <div className="partners-header2" style={{ textAlign: 'center', marginTop: '20px' }}>
        <div className="partners-eyebrow" >Frequently Asked Questions</div>
      </div>
      <div className="container">
        {/* TITLE */}
        <div className="faq-head">
          <h2>Queries That Could <span>Hold You Back</span></h2>
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


    {/* cta section */}
       <CTASection />

    </>
    </Layout>
  );
}