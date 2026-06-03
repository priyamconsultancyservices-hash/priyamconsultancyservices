import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import CTASection from "../components/HomePage/CTA";
import BlogSection from "../components/BlogSection";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
const banner = "/img/business-process-automation.png";

// ─── CSS-in-JSX styles injected once ───────────────────────────────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap');

  :root {
    --navy: #004168;
    --navy-deep: #011a2a;
    --navy-mid: #0a3652;
    --orange: #ed8337;
    --orange-light: #f5a66b;
    --text-dim: rgba(255,255,255,0.45);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'DM Sans', sans-serif; color: #fff; overflow-x: hidden; }

li.dropdown.mega {
    color: black;
}
.faq-head h2 {
    font-size: 34px;
    font-weight: 600;
    color: black;
}
  /* ── HERO ── */
  .dm-hero {
    min-height: 100vh;
    display: grid; grid-template-columns: 1fr 1fr;
    align-items: center; gap: 2rem;
    padding: 8rem 6% 4rem;
    position: relative; overflow: hidden;
  }
  .dm-hero::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 65% 70% at 100% 50%, rgba(237,131,55,0.10) 0%, transparent 60%),
      radial-gradient(ellipse 50% 60% at 0% 100%, rgba(10,66,102,0.5) 0%, transparent 55%);
  }
  .dm-hero::after {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background-image:
      linear-gradient(rgba(237,131,55,0.028) 1px, transparent 1px),
      linear-gradient(90deg, rgba(237,131,55,0.028) 1px, transparent 1px);
    background-size: 52px 52px;
  }
  .dm-hero-left { position: relative; z-index: 2; display: flex; flex-direction: column; }
  .dm-badge {
    display: inline-flex; align-items: center; gap: 0.5rem;
    background: rgba(237,131,55,0.1); border: 1px solid rgba(237,131,55,0.28);
    color: var(--orange); font-size: 0.72rem; font-weight: 600;
    padding: 0.38rem 1rem; border-radius: 50px;
    letter-spacing: 0.09em; text-transform: uppercase; width: fit-content;
    animation: fadeUp .6s ease both;
  }
  .dm-badge-dot {
    width: 6px; height: 6px; border-radius: 50%; background: var(--orange);
    animation: pulse-dot 1.6s infinite;
  }
  .dm-hero-heading {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2.2rem, 3.8vw, 3.6rem);
    font-weight: 600; line-height: 1.1; 
    margin-top: 1.4rem; animation: fadeUp .7s .08s ease both;
  }
  .dm-hero-heading .orange { color: var(--orange); }
  .dm-hero-heading .lined { position: relative; display: inline-block; }
  .dm-hero-heading .lined::after {
    content: ''; position: absolute; left: 0; bottom: -3px;
    width: 100%; height: 3px; background: var(--orange); border-radius: 2px;
    transform: scaleX(0); transform-origin: left;
    animation: line-in .5s .9s ease forwards;
  }
  .dm-hero-sub {
    margin-top: 1.4rem; font-size: 1rem; line-height: 1.78;
    color: rgb(255, 255, 255); 
    animation: fadeUp .7s .16s ease both;
  }
  .dm-hero-actions {
    margin-top: 2rem; display: flex; gap: 0.9rem; flex-wrap: wrap;
    animation: fadeUp .7s .26s ease both;
  }
  .dm-btn-fill {
    background: var(--orange); color: #fff;
    padding: 0.85rem 2rem; border-radius: 50px;
    font-family: 'DM Sans', sans-serif; font-size: 0.92rem; font-weight: 600;
    text-decoration: none; border: none; cursor: pointer;
    transition: background .22s, transform .18s, box-shadow .22s;
    box-shadow: 0 4px 22px rgba(237,131,55,0.32);
    display: inline-flex; align-items: center; gap: 0.5rem;
  }
  .dm-btn-fill:hover {
    background: var(--orange-light); transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(237,131,55,0.42);
  }
  .dm-btn-arrow {
    display: inline-flex; align-items: center; justify-content: center;
    width: 22px; height: 22px; border-radius: 50%;
    background: rgba(2,43,68,0.3); font-size: 0.85rem;
  }

  /* ── HERO RIGHT ILLUSTRATION ── */
  .dm-hero-right {
    position: relative; z-index: 2;
    display: flex; align-items: center; justify-content: center;
    animation: fadeUp .9s .15s ease both;
  }
  .dm-illus-wrap {
    position: relative; width: 100%; max-width: 520px; height: 480px;
    display: flex; align-items: center; justify-content: center;
  }


  /* ── SERVICES SECTION ── */
  .dm-svc-section {
    position: relative; padding: 9rem 0 10rem;
    background: var(--navy-deep); overflow: hidden;
  }
  .dm-svc-section::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(237,131,55,0.5), transparent);
  }
  .dm-svc-bg-conic {
    position: absolute; inset: 0; pointer-events: none;
    background: conic-gradient(from 210deg at 75% 50%,
      transparent 0deg, rgba(237,131,55,0.05) 50deg,
      transparent 110deg, rgba(56,189,248,0.03) 220deg, transparent 280deg);
    animation: conic-slow 40s linear infinite;
  }
  .dm-svc-blob {
    position: absolute; border-radius: 50%;
    filter: blur(100px); pointer-events: none;
  }
  .dm-svc-blob-1 { width: 500px; height: 500px; top: -100px; right: -100px; background: rgba(237,131,55,0.07); }
  .dm-svc-blob-2 { width: 400px; height: 400px; bottom: -80px; left: -80px; background: rgba(56,189,248,0.05); }
  .dm-svc-hdr {
    text-align: center;margin-bottom: 6rem; position: relative; z-index: 2;
  }
  .dm-svc-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    font-family: 'Space Mono', monospace;
    font-size: 0.63rem; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--orange); margin-bottom: 1.2rem;
  }
  .dm-svc-eyebrow-bar { width: 22px; height: 1px; background: var(--orange); }
  .dm-svc-hdr h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 3.8vw, 3.2rem);
    font-weight: 700; line-height: 1.1; 
  }
  .dm-svc-hdr h2 em { font-style: normal; color: var(--orange); }
  .dm-svc-hdr p {
    margin-top: 1rem; font-size: 0.95rem; color: #fff;
     margin-left: auto; margin-right: auto; line-height: 1.75;
  }
  .dm-svc-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 1px; position: relative; z-index: 2;
    background: rgba(237,131,55,0.06);
    border-top: 1px solid rgba(237,131,55,0.1);
    border-bottom: 1px solid rgba(237,131,55,0.1);
  }
  .dm-svc-card {
    position: relative; background: #004168;
    padding: 2.8rem 2.2rem 2.8rem 2.4rem;
    overflow: hidden; cursor: default;
    min-height: 260px; display: flex; flex-direction: column; justify-content: flex-start;
  }
  .dm-svc-card::before {
    content: ''; position: absolute; top: 0; left: 0; bottom: 0; width: 35%;
    clip-path: polygon(0 0, 78% 0, 52% 100%, 0 100%);
    background: linear-gradient(160deg, #4cbaeb3b 0%, rgba(237, 131, 55, 0.03) 100%);
    transition: clip-path 0.4s ease;
  }
  .dm-svc-card:hover::before {
    clip-path: polygon(0 0, 85% 0, 58% 100%, 0 100%);
  }
  .dm-svc-card::after {
    content: ''; position: absolute; top: 0; right: 0;
    width: 3px; height: 0; background: var(--orange);
    transition: height 0.45s ease; border-radius: 2px 0 0 2px;
  }
  .dm-svc-card:hover::after { height: 100%; }
  .dm-svc-n {
    font-family: 'Poppins', sans-serif;
    font-size: 2.8rem; font-weight: 900; line-height: 1;
    color: #4cbaeb3b; letter-spacing: -0.06em;
    pointer-events: none;
  }
  .dm-svc-icon-wrap {
    width: 54px; height: 54px; border-radius: 15px;
    background: rgba(237,131,55,0.08); border: 1.5px solid rgba(237,131,55,0.22);
    display: flex; align-items: center; justify-content: center; overflow: hidden;
    transition: background 0.3s, border-color 0.3s, transform 0.35s; z-index: 2;
  }
  .dm-svc-card:hover .dm-svc-icon-wrap {
    background: rgba(237,131,55,0.18); border-color: var(--orange);
    transform: scale(1.1) rotate(-4deg);
  }
  .dm-svc-body { position: relative; z-index: 2; }
  .dm-svc-title {
    font-family: 'Poppins', sans-serif; font-size: 1.02rem; font-weight: 700;
    margin-bottom: 0.65rem; transition: color 0.3s; color: var(--orange); 
  }
  .dm-svc-card:hover .dm-svc-title { color: var(--orange); }
  .dm-svc-desc {
    font-size: 0.82rem; line-height: 1.75; color: #fff; transition: color 0.3s;
  }
  .dm-svc-card:hover .dm-svc-desc { color: rgb(255, 255, 255); }
  .dm-svc-pills { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 1.1rem; }
  .dm-svc-pill {
    font-size: 0.62rem; font-family: 'Space Mono', monospace;
    letter-spacing: 0.08em; text-transform: uppercase;
    color: rgba(237,131,55,0.7); background: rgba(237,131,55,0.07);
    border: 1px solid rgba(237,131,55,0.15);
    padding: 0.22rem 0.55rem; border-radius: 5px;
    transition: background 0.25s, color 0.25s;
  }
  .dm-svc-card:hover .dm-svc-pill { background: rgba(237,131,55,0.14); color: var(--orange); }
  .dm-svc-stats {
    display: grid; grid-template-columns: repeat(4, 1fr);
    margin: 0 6%; margin-top: 5rem;
    border: 1px solid rgba(237,131,55,0.12); border-radius: 18px; overflow: hidden;
    position: relative; z-index: 2; background: rgba(255,255,255,0.015);
  }
  .dm-svc-stat {
    padding: 2rem 1.8rem; border-right: 1px solid rgba(237,131,55,0.08);
    text-align: left; transition: background 0.3s;
  }
  .dm-svc-stat:last-child { border-right: none; }
  .dm-svc-stat:hover { background: rgba(237,131,55,0.04); }
  .dm-stat-tag {
    display: inline-block; font-family: 'Space Mono', monospace;
    font-size: 0.58rem; letter-spacing: 0.14em; text-transform: uppercase;
    color: var(--orange); opacity: 0.6; margin-bottom: 0.6rem;
  }
  .dm-stat-val {
    font-family: 'Poppins', sans-serif; font-size: 2.4rem; font-weight: 900;
    letter-spacing: -0.03em; line-height: 1; color: #fff;
  }
  .dm-stat-val em { font-style: normal; color: var(--orange); }
  .dm-stat-lbl { margin-top: 0.3rem; font-size: 0.8rem; color: var(--text-dim); }

  /* ── PROCESS SECTION ── */
  .dm-proc-section {
    padding: 4rem 6% 4rem;
    background: white;
    position: relative; overflow: hidden;
  }
    section#process {
    padding: 4rem 0 4rem;
}
  .dm-proc-section::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 60% 55% at 50% 0%, rgba(237,131,55,0.05) 0%, transparent 55%),
      linear-gradient(rgba(237,131,55,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(237,131,55,0.025) 1px, transparent 1px);
    background-size: auto, 60px 60px, 60px 60px;
  }
  .dm-proc-hdr {
    text-align: center; margin: 0 auto 4rem; position: relative; z-index: 2; max-width: 1200px;
  }
  .dm-proc-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    font-family: 'Space Mono', monospace;
    font-size: 0.63rem; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--orange); margin-bottom: 1.2rem;
  }
  .dm-proc-eyebrow-bar { width: 22px; height: 1px; background: var(--orange); }
  .dm-proc-hdr h2 {
  color:#000;
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 3.8vw, 2.6rem);
    font-weight: 600; line-height: 1.1;
  }
  .dm-proc-hdr h2 em { font-style: normal; color: var(--orange); }
  .dm-proc-hdr p { margin-top: 1rem; font-size: 0.95rem; color: #000; line-height: 1.75; }
  .dm-proc-track {
    display: flex; gap: 0; max-width: 1200px; margin: 0 auto;
    position: relative; z-index: 2; border-radius: 24px; overflow: hidden;
    border: 1px solid rgba(237,131,55,0.12); min-height: 420px;
  }
  .dm-proc-step {
    flex: 0 0 72px; position: relative; overflow: hidden; cursor: pointer;
    transition: flex 0.55s cubic-bezier(.4,0,.2,1);
    border-right: 1px solid rgba(255,255,255,0.05);
    display: flex; flex-direction: column;
  }
  .dm-proc-step:last-child { border-right: none; }
  .dm-proc-step.expanded { flex: 1 1 0; }
  .dm-proc-step:nth-child(1) { background: #ffffff }
  .dm-proc-step:nth-child(2) { background: #ffffff }
  .dm-proc-step:nth-child(3) { background: #ffffff }
  .dm-proc-step:nth-child(4) { background: #ffffff }
  .dm-proc-step:nth-child(5) { background: #ffffff }
  .dm-proc-step::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    transition: opacity .3s; opacity: 1;
  }
  .dm-proc-step:nth-child(1)::before { background: #ed8337; }
  .dm-proc-step:nth-child(2)::before { background: #ed8337; }
  .dm-proc-step:nth-child(3)::before { background: #ed8337; }
  .dm-proc-step:nth-child(4)::before { background: #ed8337; }
  .dm-proc-step:nth-child(5)::before { background: #ed8337; }
  .dm-proc-step.expanded::before { opacity: 1; }
  .dm-proc-collapsed {
    display: flex; flex-direction: column; align-items: center;
    padding: 2rem 0; flex: 1; gap: 1rem; transition: opacity .3s;
  }
  .dm-proc-step.expanded .dm-proc-collapsed { opacity: 0; pointer-events: none; }
  .dm-proc-step-n {
    font-family: 'Space Mono', monospace; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em;
  }
  .dm-proc-step:nth-child(1) .dm-proc-step-n { color: var(--orange); }
  .dm-proc-step:nth-child(2) .dm-proc-step-n { color: #38bdf8; }
  .dm-proc-step:nth-child(3) .dm-proc-step-n { color: #34d399; }
  .dm-proc-step:nth-child(4) .dm-proc-step-n { color: #a855f7; }
  .dm-proc-step:nth-child(5) .dm-proc-step-n { color: #f6ad55; }
  .dm-proc-step-vtext {
    writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg);
    font-family: 'Poppins', sans-serif; font-size: 0.82rem; font-weight: 700;
    color: #004168; letter-spacing: 0.03em; white-space: nowrap;
    flex: 1; display: flex; align-items: center;
  }
  .dm-proc-step-icon-sm { width: 28px; height: 28px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; overflow: hidden; }
  .dm-proc-expanded {
    position: absolute; inset: 0; padding: 2.5rem 2rem;
    display: flex; flex-direction: column; justify-content: space-between;
    opacity: 0; pointer-events: none; transition: opacity .35s .15s; min-width: 220px;
  }
  .dm-proc-step.expanded .dm-proc-expanded { opacity: 1; pointer-events: auto; }
  .dm-proc-exp-top { display: flex; flex-direction: column; gap: 1.2rem; }
  .dm-proc-exp-num {
    font-family: 'Poppins', sans-serif; font-size: 4rem; font-weight: 900;
    line-height: 1; letter-spacing: -0.06em; opacity: 0.1;
    position: absolute; top: 1.2rem; right: 1.5rem;
  }
  .dm-proc-step:nth-child(1) .dm-proc-exp-num { color: var(--orange); }
  .dm-proc-step:nth-child(2) .dm-proc-exp-num { color: #38bdf8; }
  .dm-proc-step:nth-child(3) .dm-proc-exp-num { color: #34d399; }
  .dm-proc-step:nth-child(4) .dm-proc-exp-num { color: #a855f7; }
  .dm-proc-step:nth-child(5) .dm-proc-exp-num { color: #f6ad55; }
  .dm-proc-exp-icon {
    width: 52px; height: 52px; border-radius: 16px;
    display: flex; align-items: center; justify-content: center; overflow: hidden; flex-shrink: 0;
  }
  .dm-proc-step:nth-child(1) .dm-proc-exp-icon { background: rgba(237,131,55,0.15); border: 1px solid rgba(237,131,55,0.3); }
  .dm-proc-step:nth-child(2) .dm-proc-exp-icon { background: rgba(56,189,248,0.12);  border: 1px solid rgba(56,189,248,0.3); }
  .dm-proc-step:nth-child(3) .dm-proc-exp-icon { background: rgba(52,211,153,0.12);  border: 1px solid rgba(52,211,153,0.3); }
  .dm-proc-step:nth-child(4) .dm-proc-exp-icon { background: rgba(168,85,247,0.12);  border: 1px solid rgba(168,85,247,0.3); }
  .dm-proc-step:nth-child(5) .dm-proc-exp-icon { background: rgba(246,173,85,0.12);  border: 1px solid rgba(246,173,85,0.3); }
  .dm-proc-exp-title { font-family: 'Poppins', sans-serif; font-size: 1rem; font-weight: 600; line-height: 1.2; color: #ed8337; }
  .dm-proc-exp-desc  { font-size: 0.9rem; line-height: 1.68; color: #1a2a3a;font-family:'poppins' }
  .dm-proc-exp-list  { list-style: none; display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.5rem; }
  .dm-proc-exp-list li {
    display: flex; align-items: center; gap: 0.5rem;
    font-size: 0.85rem; color: #1a2a3a;
  }
  .dm-proc-exp-list li::before { content: ''; width: 4px; height: 4px; border-radius: 50%; flex-shrink: 0; }
  .dm-proc-step:nth-child(1) .dm-proc-exp-list li::before { background: var(--orange); }
  .dm-proc-step:nth-child(2) .dm-proc-exp-list li::before { background: #38bdf8; }
  .dm-proc-step:nth-child(3) .dm-proc-exp-list li::before { background: #34d399; }
  .dm-proc-step:nth-child(4) .dm-proc-exp-list li::before { background: #a855f7; }
  .dm-proc-step:nth-child(5) .dm-proc-exp-list li::before { background: #f6ad55; }
  .dm-proc-exp-tag {
    display: inline-flex; align-items: center; gap: 0.4rem;
    font-size: 0.65rem; font-weight: 700;
    font-family: 'Space Mono', monospace; letter-spacing: 0.08em;
    border-radius: 50px; padding: 0.28rem 0.8rem;
    margin-top: auto; width: fit-content;
  }
  .dm-proc-step:nth-child(1) .dm-proc-exp-tag { background: rgba(237,131,55,0.12); color: var(--orange); border: 1px solid rgba(237,131,55,0.3); }
  .dm-proc-step:nth-child(2) .dm-proc-exp-tag { background: rgba(56,189,248,0.1);  color: #38bdf8; border: 1px solid rgba(56,189,248,0.25); }
  .dm-proc-step:nth-child(3) .dm-proc-exp-tag { background: rgba(52,211,153,0.1);  color: #34d399; border: 1px solid rgba(52,211,153,0.25); }
  .dm-proc-step:nth-child(4) .dm-proc-exp-tag { background: rgba(168,85,247,0.1);  color: #a855f7; border: 1px solid rgba(168,85,247,0.25); }
  .dm-proc-step:nth-child(5) .dm-proc-exp-tag { background: rgba(246,173,85,0.1);  color: #f6ad55; border: 1px solid rgba(246,173,85,0.25); }
  .dm-proc-timeline {
    max-width: 1200px; margin: 2.5rem auto 0;
    display: flex; align-items: stretch;
    background: rgba(255,255,255,0.02); border: 1px solid rgba(237,131,55,0.1);
    border-radius: 16px; overflow: hidden; position: relative; z-index: 2;
  }
  .dm-proc-tl-item {
    flex: 1; padding: 1.2rem 1.5rem; border-right: 1px solid rgba(237,131,55,0.07);
    text-align: center; transition: background .25s;
  }
  .dm-proc-tl-item:last-child { border-right: none; }
  .dm-proc-tl-item:hover { background: rgba(237,131,55,0.04); }
  .dm-proc-tl-day {
    font-family: 'Poppins', sans-serif; font-size: 1.3rem; font-weight: 900;
    color: var(--orange); line-height: 1; letter-spacing: -0.03em;
  }
  .dm-proc-tl-label { font-size: 0.7rem; color: var(--text-dim); margin-top: 3px; }

  /* ── KEYFRAMES ── */
  @keyframes fadeUp { from { opacity: 0; transform: translateY(26px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes line-in { to { transform: scaleX(1); } }
  @keyframes pulse-dot { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:.4; transform:scale(1.5); } }
  @keyframes glow-breathe { 0%,100% { transform:translate(-50%,-50%) scale(1); opacity:0.8; } 50% { transform:translate(-50%,-50%) scale(1.18); opacity:1; } }
  @keyframes ring-spin { to { transform: translate(-50%,-50%) rotate(360deg); } }
  @keyframes phone-bob { 0%,100% { transform:translateY(0); } 40% { transform:translateY(-18px); } 70% { transform:translateY(-26px); } 90% { transform:translateY(-8px); } }
  @keyframes notif-pop { 0%,100% { transform:scale(1) translateY(0); } 40% { transform:scale(1.12) translateY(-14px); } 70% { transform:scale(0.96) translateY(-6px); } }
  @keyframes roi-float { 0%,100% { transform:translateY(0) rotate(10deg); } 50% { transform:translateY(-20px) rotate(6deg); } }
  @keyframes chart-rise { 0%,100% { transform:scale(1) rotate(-5deg); } 40% { transform:scale(1.08) rotate(-3deg) translateY(-10px); } 70% { transform:scale(0.96) rotate(-6deg); } }
  @keyframes arrow-float { 0%,100% { transform:translateX(0); } 50% { transform:translateX(8px); } }
  @keyframes star-sparkle { 0%,100% { transform:scale(0.7) rotate(0deg); opacity:0.6; } 50% { transform:scale(1.3) rotate(30deg); opacity:1; } }
  @keyframes pt-float { 0% { transform:translateY(0) scale(1); opacity:0.7; } 50% { transform:translateY(-30px) scale(1.2); opacity:0.3; } 100% { transform:translateY(-60px) scale(0.8); opacity:0; } }
  @keyframes sig-out { 0% { transform:scale(0.4); opacity:0.9; } 100% { transform:scale(1.7); opacity:0; } }
  @keyframes conic-slow { to { transform: rotate(360deg); } }

  /* ── RESPONSIVE ── */
  @media(max-width:960px) {
    .dm-svc-grid { grid-template-columns: repeat(2, 1fr); }
    .dm-svc-stats { grid-template-columns: repeat(2, 1fr); }
    .proc-grid { grid-template-columns: 1fr !important; }
  }
  @media(max-width:900px) {
    .dm-hero { grid-template-columns: 1fr; padding: 7rem 5% 4rem; text-align: start; }
    .dm-hero-left { align-items: flex-start; }
    .dm-hero-sub { max-width: 100%; }
    .dm-hero-right { margin-top: 2rem; }
    .dm-illus-wrap { max-width: 100%; height: auto !important; }
    .dm-illus-wrap img { width: 100%; height: auto; }
    .ap-inner { grid-template-columns: 1fr !important; }
    .ap-form-wrap { max-width: 100% !important; }
    }
  @media(max-width:768px) {
    .dm-proc-track { flex-direction: column; min-height: auto; }
    .dm-proc-step { flex: none !important; min-height: 64px; overflow: visible; }
    .dm-proc-step.expanded { min-height: auto !important; height: auto !important; }
    .dm-proc-expanded { position: relative !important; inset: unset !important; opacity: 1 !important; pointer-events: auto !important; min-width: unset !important; padding: 1.5rem !important; }
    .dm-proc-step.expanded .dm-proc-collapsed { display: none !important; }
    .dm-proc-collapsed { flex-direction: row; padding: 1.2rem 1.5rem; }
    .dm-proc-step-vtext { writing-mode: initial; transform: none; font-size: 0.85rem; color: rgba(255,255,255,0.7); }
    .dm-proc-timeline { flex-wrap: wrap; }
    .dm-proc-tl-item { flex: 0 0 50%; border-bottom: 1px solid rgba(237,131,55,0.07); }
    .faq-wrapper { flex-direction: column !important; }
    .faq-col { width: 100% !important; }
  }
  @media(max-width:580px) {
    .dm-svc-grid { grid-template-columns: 1fr; }
    .dm-svc-stats { grid-template-columns: 1fr; margin: 3rem 4% 0; }
    .dm-hero { padding: 6rem 4% 3rem; }
  }
  @media(max-width:540px) {
    .dm-nav-links, .dm-nav-btn { display: none; }
    .dm-hero-heading { font-size: clamp(1.7rem, 6vw, 2.2rem); text-align: start; }
    }


// who we work section
.proc-section {
    padding: 9rem 6% 10rem;
    background: var(--navy);
    position: relative;
    overflow: hidden;
  }
  /* ambient glow */
  .proc-section::before {
    content:''; position:absolute; inset:0; pointer-events:none;
    background:
      radial-gradient(ellipse 55% 60% at 20% 80%, rgba(237,131,55,0.05) 0%,transparent 60%),
      radial-gradient(ellipse 45% 50% at 80% 20%, rgba(56,189,248,0.04) 0%,transparent 55%);
  }

  /* ── header ── */
  .proc-hdr {
    text-align:center; max-width:560px;
    margin:0 auto 5rem; position:relative; z-index:2;
  }
  .proc-eyebrow {
    display:inline-flex; align-items:center; gap:8px;
    font-family:'Space Mono',monospace;
    font-size:0.63rem; letter-spacing:0.2em; text-transform:uppercase;
    color:var(--orange); margin-bottom:1.2rem;
  }
  .proc-eyebrow-bar{width:22px;height:1px;background:var(--orange);}
  .proc-hdr h2 {
    font-family:'Poppins',sans-serif;
    font-size:clamp(2rem,3.8vw,3.2rem);
    font-weight:900; line-height:1.1; letter-spacing:-0.025em;
  }
  .proc-hdr h2 em{font-style:normal;color:var(--orange);}
  .proc-hdr p{margin-top:1rem;font-size:0.95rem;color:var(--text-dim);line-height:1.75;}

  /* ── 2×2 card grid ── */
  .proc-grid {
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:1.5rem;
    max-width:900px;
    margin:0 auto;
    position:relative; z-index:2;
  }

  /* center connector cross — decorative */
  .proc-grid::before {
    content:'';
    position:absolute;
    top:50%; left:50%;
    transform:translate(-50%,-50%);
    width:56px; height:56px;
    border-radius:50%;
    background:var(--navy);
    border:2px solid rgba(237,131,55,0.4);
    box-shadow:0 0 0 6px rgba(237,131,55,0.06),0 0 24px rgba(237,131,55,0.15);
    z-index:10;
    display:flex; align-items:center; justify-content:center;
  }
  .proc-grid::after {
    content:'04';
    position:absolute;
    top:50%; left:50%;
    transform:translate(-50%,-50%);
    font-family:'Space Mono',monospace;
    font-size:0.6rem; font-weight:700;
    color:var(--orange); z-index:11;
    letter-spacing:0.05em;
  }

  /* individual card — flip on hover */
  .proc-card {
    position:relative;
    min-height:280px;
    perspective:1000px;
    cursor:default;
  }

  .proc-inner {
    position:relative; width:100%; height:100%;
    min-height:280px;
    transform-style:preserve-3d;
    transition:transform 0.65s cubic-bezier(.4,0,.2,1);
    border-radius:20px;
  }
  .proc-card:hover .proc-inner {
    transform:rotateY(180deg);
  }

  .proc-front, .proc-back {
    position:absolute; inset:0;
    border-radius:20px;
    backface-visibility:hidden;
    -webkit-backface-visibility:hidden;
    padding:2.2rem;
    display:flex; flex-direction:column;
  }

  /* FRONT */
  .proc-front {
    background: #ffffff;
    border:1px solid rgba(237,131,55,0.15);
    border-top: 3px solid #ed8337;
    justify-content:space-between;
  }
  .proc-card:nth-child(1) .proc-front{border-color:rgba(237,131,55,0.25);border-top-color:#ed8337;}
  .proc-card:nth-child(2) .proc-front{border-color:rgba(56,189,248,0.2);border-top-color:#ed8337;}
  .proc-card:nth-child(3) .proc-front{border-color:rgba(52,211,153,0.2);border-top-color:#ed8337;}
  .proc-card:nth-child(4) .proc-front{border-color:rgba(168,85,247,0.2);border-top-color:#ed8337;}

  /* step number — big watermark */
  .proc-step-num {
    font-family:'Poppins',sans-serif;
    font-size:5rem; font-weight:900; line-height:1;
    letter-spacing:-0.06em;
    margin-bottom:auto;
    transition:color .3s;
  }
  .proc-card:nth-child(1) .proc-step-num{color:#4cbaeb2e}
  .proc-card:nth-child(2) .proc-step-num{color:#4cbaeb2e}
  .proc-card:nth-child(3) .proc-step-num{color:#4cbaeb2e}
  .proc-card:nth-child(4) .proc-step-num{color:#4cbaeb2e}

  .proc-front-bottom{display:flex;flex-direction:column;gap:0.6rem}
  .proc-icon-row{display:flex;align-items:center;gap:0.8rem}
  .proc-icon {
    width:48px;height:48px;border-radius:14px;
    display:flex;align-items:center;justify-content:center;
    font-size:1.4rem;flex-shrink:0;
  }
  .proc-card:nth-child(1) .proc-icon{background:rgba(237,131,55,0.12);border:1px solid rgba(237,131,55,0.25)}
  .proc-card:nth-child(2) .proc-icon{background:rgba(56,189,248,0.12);border:1px solid rgba(56,189,248,0.25)}
  .proc-card:nth-child(3) .proc-icon{background:rgba(52,211,153,0.12);border:1px solid rgba(52,211,153,0.25)}
  .proc-card:nth-child(4) .proc-icon{background:rgba(168,85,247,0.12);border:1px solid rgba(168,85,247,0.25)}

  .proc-title{font-family:'Poppins',sans-serif;font-size:1rem;font-weight:800;line-height:1.2;color:#004168;}
  .proc-brief{font-size:0.78rem;color:#5a6a7a;line-height:1.5}

  /* hover hint */
  .proc-hint{
    display:inline-flex;align-items:center;gap:0.35rem;
    font-size:0.65rem;font-weight:700;
    letter-spacing:0.1em;text-transform:uppercase;
    color:rgba(237,131,55,0.45);margin-top:0.8rem;
    font-family:'Space Mono',monospace;
  }

  /* BACK */
  .proc-back {
    transform:rotateY(180deg);
    justify-content:center; gap:1.2rem;
  }
  .proc-card:nth-child(1) .proc-back{background:linear-gradient(145deg,rgba(237,131,55,0.18),rgba(237,131,55,0.06));border:1.5px solid rgba(237,131,55,0.4)}
  .proc-card:nth-child(2) .proc-back{background:linear-gradient(145deg,rgba(56,189,248,0.15),rgba(56,189,248,0.04));border:1.5px solid rgba(56,189,248,0.35)}
  .proc-card:nth-child(3) .proc-back{background:linear-gradient(145deg,rgba(52,211,153,0.15),rgba(52,211,153,0.04));border:1.5px solid rgba(52,211,153,0.35)}
  .proc-card:nth-child(4) .proc-back{background:linear-gradient(145deg,rgba(168,85,247,0.15),rgba(168,85,247,0.04));border:1.5px solid rgba(168,85,247,0.35)}

  .proc-back-label{
    font-family:'Space Mono',monospace;
    font-size:0.6rem;font-weight:700;
    letter-spacing:0.14em;text-transform:uppercase;
    color:var(--orange);
  }
  .proc-back-title{font-family:'Poppins',sans-serif;font-size:1.1rem;font-weight:800;line-height:1.2}
  .proc-back-desc{font-size:0.82rem;line-height:1.7;color:rgba(255,255,255,0.58)}
  .proc-back-items{list-style:none;display:flex;flex-direction:column;gap:0.4rem}
  .proc-back-items li{
    display:flex;align-items:center;gap:0.5rem;
    font-size:0.78rem;color:rgba(255,255,255,0.65);
  }
  .proc-back-items li::before{
    content:'';width:5px;height:5px;border-radius:50%;
    background:var(--orange);flex-shrink:0;
  }
  .proc-duration{
    display:inline-flex;align-items:center;gap:0.4rem;
    font-size:0.68rem;font-weight:700;
    color:var(--orange);
    background:rgba(237,131,55,0.1);
    border:1px solid rgba(237,131,55,0.25);
    border-radius:50px;padding:0.25rem 0.8rem;
    width:fit-content;
    font-family:'Space Mono',monospace;
    letter-spacing:0.05em;
  }

  /* ── bottom timeline strip ── */
  .proc-timeline {
    max-width:900px; margin:3.5rem auto 0;
    display:flex; align-items:center;
    background:rgba(255,255,255,0.02);
    border:1px solid rgba(237,131,55,0.1);
    border-radius:16px; overflow:hidden;
    position:relative; z-index:2;
  }
  .proc-tl-item {
    flex:1; padding:1.4rem 1.8rem;
    border-right:1px solid rgba(237,131,55,0.08);
    text-align:center;
    transition:background .25s;
  }
  .proc-tl-item:last-child{border-right:none}
  .proc-tl-item:hover{background:rgba(237,131,55,0.04)}
  .proc-tl-day{
    font-family:'Poppins',sans-serif;
    font-size:1.4rem;font-weight:900;
    color:var(--orange);line-height:1;
    letter-spacing:-0.03em;
  }
  .proc-tl-label{font-size:0.72rem;color:var(--text-dim);margin-top:3px}

  @keyframes proc-pulse {
    0%,100%{box-shadow:0 0 0 0 rgba(237,131,55,0.4)}
    50%{box-shadow:0 0 0 8px rgba(237,131,55,0)}
  }

  @media(max-width:640px){
    .proc-grid{grid-template-columns:1fr}
    .proc-grid::before,.proc-grid::after{display:none}
    .proc-card { perspective:none !important; min-height:unset !important; height:auto !important; }
    .proc-inner { transform-style:flat !important; transform:none !important; transition:none !important; position:static !important; height:auto !important; min-height:unset !important; display:flex !important; flex-direction:column !important; gap:0.8rem !important; }
    .proc-card:hover .proc-inner { transform:none !important; }
    .proc-front { position:static !important; inset:unset !important; backface-visibility:visible !important; -webkit-backface-visibility:visible !important; height:auto !important; min-height:unset !important; padding:1.4rem !important; transform:none !important; }
    .proc-back { position:static !important; inset:unset !important; transform:none !important; backface-visibility:visible !important; -webkit-backface-visibility:visible !important; height:auto !important; min-height:unset !important; border-radius:14px !important; padding:1.4rem !important; margin-top:0 !important; }
    .proc-step-num { font-size:2.5rem !important; margin-bottom:0.3rem !important; }
    .proc-timeline{flex-direction:column}
    .proc-tl-item{border-right:none;border-bottom:1px solid rgba(237,131,55,0.08)}
    .proc-tl-item:last-child{border-bottom:none}
  }

//   faq
.faq-head h2 {
 color: #000!important;
    font-size: 34px;
    font-weight: 600;
   }

    h2.partners-eyebrow {
        font-size: 0.9rem;
        font-weight: 900;
    }
    .partners-h3-title {
    color: #fff!important;
    font-size: 2.5rem;
        }

        .partners-h3-process{
        color: #000!important;
    font-size: 2.5rem;
    }
`;

// ─── Data ───────────────────────────────────────────────────────────────────
const SERVICES = [
  { n: "01", img: "/img/icon/bpa-data-migration.webp", title: "Data Migration", pills: ["On-Page SEO", "Link Building", "Blog Strategy"], desc: "We migrate your business data with precision and care, ensuring a smooth transition, complete security, and uninterrupted operations throughout every stage of the process" },
  { n: "02", img: "/img/icon/bpa-workflow-automation.webp", title: "Workflow Automation", pills: ["Reels & Shorts", "Community Mgmt", "Influencer Tie-ups"], desc: "We transform manual, repetitive workflows into automated systems that simplify operations, improve collaboration, visibility across all your business functions." },
  { n: "03", img: "/img/icon/bpa-system-integration.webp", title: "System Integration", pills: ["Search Ads", "Retargeting", "A/B Testing"], desc: "We integrate our solutions with your existing systems to ensure uninterrupted operations and improved efficiency avoiding costly replacements or downtime" },
  { n: "04", img: "/img/icon/bpa-process-assessment.webp", title: "Process Assessment & Automation", pills: ["Drip Campaigns", "WhatsApp Broadcasts", "Automation"], desc: "We evaluate and streamline your business processes, address inefficiencies, and automate repetitive tasks to improve accuracy, efficiency, and overall performance." },
  { n: "05", img: "/img/icon/bpa-document-management.webp", title: "Document Management Automation", pills: ["YouTube Ads", "Influencer Match", "UGC Content"], desc: "We help you digitize and automate document workflows for faster storage, effortless retrieval, and streamlined approvals — ensuring compliance and accessibility." },
  { n: "06", img: "/img/icon/bpa-dashboards-reporting.webp", title: "Dashboards and Reporting Solutions", pills: ["GA4 Tracking", "Weekly Reports", "ROI Dashboards"], desc: "We design and deliver interactive dashboards and reports tailored to your business needs, providing real-time insights for smarter decisions and better performance" },
];


const PROCESS_STEPS = [
  { n: "01", img: "/img/icon/bpa-process-discovery.webp", label: "Research", title: "Discovery & Assessment", desc: "We analyze workflows, repetitive tasks, and operational bottlenecks to design customized Business Automation Services. By understanding your business processes and objectives, we identify opportunities for automation that maximize efficiency, reduce errors, and deliver measurable improvements across all functions.", items: ["Analyze Workflows", "Identify Bottlenecks", "Reduce Errors", "Improve Efficiency"] },
  { n: "02", img: "/img/icon/bpa-process-planning.webp", label: "Strategy", title: "Planning & Strategy", desc: "We create a detailed Business Process Automation Plan & Strategy, aligning workflows with your business goals. Our strategic planning ensures optimal resource allocation, streamlined processes, and scalable solutions that improve efficiency, reduce costs, and support long-term growth.", items: ["Align BusinessGoals", "Streamline Processes", "Optimize Resources", "Support Scalability"] },
  { n: "03", img: "/img/icon/bpa-process-implement.webp", label: "Create", title: "Implementation & Testing", desc: "Our team deploys and rigorously tests the applications to ensure accuracy, reliability, and seamless operation. Each workflow and integration is validated for error-free execution, followed by comprehensive user training to ensure smooth adoption and effective utilization across departments.", items: ["Deploy Applications", "Validate Integrations", "Ensure Reliability", "Conduct UserTraining"] },
  { n: "04", img: "/img/icon/bpa-process-monitoring.webp", label: "Launch", title: "Monitoring & Optimization", desc: "We continuously monitor system performance to identify opportunities for improvement and optimization. Our real-time process enhancements ensure greater efficiency, adaptability, and sustained productivity — maintaining seamless operations across your entire business operations.", items: ["Track Performance", "Enhance Processes", "Improve Productivity", "Maintain Operations"] },
  { n: "05", img: "/img/icon/bpa-process-support.webp", label: "Optimise", title: "Continuous Support & Updates", desc: "We provide continuous maintenance, updates, and expert SLA-driven support to help your business scale faster and operate seamlessly. Our dedicated team ensures quick turnaround for issue fixes, enhancements, and new requirements — keeping your operations consistently smooth and highly efficient.", items: ["Provide Maintenance", "Deliver Updates", "Resolve Issues", "Ensure Scalability"] },
];

const CARDS = [
  {
    num: "01",
    img: "/img/bpa/process-discovery.png",
    title: "Discover & Audit",
    brief: "We dig deep into your brand, audience, competitors, and existing digital footprint.",
    backLabel: "Phase 01 · Foundation",
    backDesc: "Before a single ad goes live, we map your entire digital ecosystem. No guesswork — only data.",
    items: [
      "Brand & competitor audit",
      "Audience persona research",
      "SEO & website health check",
      "Channel opportunity mapping",
    ],
    duration: "⏱ Week 1",
  },
  {
    num: "02",
    img: "/img/bpa/process-planning.png",
    title: "Strategise & Plan",
    brief: "Your custom 90-day growth roadmap is built — channel by channel, goal by goal.",
    backLabel: "Phase 02 · Blueprint",
    backDesc: "We translate research into a clear, measurable action plan tailored to your business goals.",
    items: [
      "90-day campaign roadmap",
      "KPI & budget allocation",
      "Content calendar creation",
      "Platform & channel selection",
    ],
    duration: "⏱ Week 2",
  },
  {
    num: "03",
    img: "/img/bpa/process-implement.png",
    title: "Execute & Launch",
    brief: "Campaigns go live with precision — creative assets, targeting, and technical setup all handled.",
    backLabel: "Phase 03 · Launch",
    backDesc: "From ad creatives to landing pages — every element is built, tested, and launched for maximum impact.",
    items: [
      "Ad creative & copywriting",
      "Pixel & tracking setup",
      "Campaign launch & A/B tests",
      "SEO & content publishing",
    ],
    duration: "⏱ Week 3",
  },
  {
    num: "04",
    img: "/img/bpa/process-monitoring.png",
    title: "Optimise & Scale",
    brief: "Continuous data analysis, weekly reporting, and relentless performance improvement.",
    backLabel: "Phase 04 · Growth",
    backDesc: "Campaigns are never \"set and forget\" — we iterate every week to squeeze more ROI from every rupee.",
    items: [
      "Weekly performance reviews",
      "Bid & budget optimisation",
      "Audience expansion & scaling",
      "Monthly ROI report delivery",
    ],
    duration: "⏱ Ongoing",
  },
];

const faqData = [
  { q: "What is Business Process Automation?", a: "Business Process Automation uses technology to automate repetitive workflows, reduce manual effort, and improve efficiency. It helps businesses focus more on strategic and high-value activities." },
  { q: "What are the 4 types of business processes?", a: "The four types are operational, management, supporting, and development processes. Together, they cover core business activities, strategy, support functions, and innovation." },
  { q: " What are the benefits of customized Business Process Automation?", a: "Customized BPA improves efficiency, reduces errors, lowers costs, enhances compliance, and provides scalable solutions tailored to your business needs." },
  { q: "What makes up Business Process Automation?", a: "BPA includes workflow automation, RPA, data management, system integration, and analytics. These elements work together to streamline operations and provide useful insights" },
  { q: "What are the 5 levels of automation?", a: "The five levels are manual, assisted, partial, high, and full automation. They range from fully human-driven tasks to completely autonomous workflows." },
  { q: "How can Sterlo be a valuable Business Process Automation tool?", a: "Sterlo is a no-code platform that helps businesses automate workflows, optimize processes, and make data-driven decisions without needing coding expertise." },
];
// ─── Sub-components ──────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="dm-hero">
      <div className="dm-hero-left">
        <div className="dm-badge">
          <div className="dm-badge-dot"></div>
          Improve Efficiency
        </div>
        <h1 className="dm-hero-heading">
          Streamline Business
          <span className="orange lined" style={{ marginLeft: '10PX' }}>Operations </span>   with Automation
        </h1>
        <p className="dm-hero-sub">
          We provide comprehensive Business Process Automation Solutions that streamline workflows, eliminate manual tasks, and boost efficiency across your organization. From document management and approvals to reporting, we integrate every process for seamless operations, improved accuracy, and real-time visibility.


        </p>
        <div className="dm-hero-actions">
          <a className="dm-btn-fill" href="#services">
            Explore More <span className="dm-btn-arrow">›</span>
          </a>
        </div>
      </div>

      <div className="dm-hero-right">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            src={banner}
            alt="Business Process Automation"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
}
function ApproachSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    msg: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ EMAIL SEND FUNCTION
  const sendEmail = (e) => {
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
        "service_8xw6k3r",   // 🔴 replace
        "template_jarui36",  // 🔴 replace
        templateParams,
        "XWRnXi4hK2SvmRG3q"    // 🔴 replace
      )
      .then(() => {
        alert("Message Sent Successfully ✅");

        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          msg: ""
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send ❌");
      });
  };

  return (
    <section className="approach" id="approach">
      <style>{`
        .approach { position:relative; padding:4rem 6%; overflow:hidden;background: white }
        .ap-inner { position:relative; z-index:2; margin:0 auto; display:grid; grid-template-columns:1fr 0.7fr; gap:4rem; align-items:center; }
        .ap-heading { font-family:'Poppins',sans-serif; font-size:clamp(2rem,3vw,2.6rem); line-height:1.12; color:#000; margin-bottom:1.2rem; }
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
        .fl-input,.fl-textarea { width:100%; padding:0.82rem 1rem 0.82rem 2.6rem; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; font-family:'Poppins',sans-serif; font-size:0.88rem; color:#fff; background:rgba(255,255,255,0.04); outline:none; appearance:none; transition:border-color 0.22s,background 0.22s,box-shadow 0.22s; }
        .fl-input::placeholder,.fl-textarea::placeholder { color:rgba(255,255,255,0.3); }
        .fl-input:focus,.fl-textarea:focus { border-color:var(--orange); background:rgba(237,131,55,0.06); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .fl-icon { position:absolute; left:0.85rem; top:50%; transform:translateY(-50%); font-size:0.95rem; opacity:0.5; pointer-events:none; }
        .fl-group.textarea-group .fl-icon { top:0.9rem; transform:none; }
        .fl-textarea { min-height:88px; resize:none; padding-top:0.82rem; padding-left:2.6rem; }
        .phone-row { display:flex; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; overflow:hidden; background:rgba(255,255,255,0.04); transition:border-color 0.22s,box-shadow 0.22s; }
        .phone-row:focus-within { border-color:var(--orange); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .phone-flag { display:flex; align-items:center; gap:0.3rem; padding:0 0.85rem; font-size:0.82rem; font-weight:700; color:#fff; border-right:1.5px solid rgba(237,131,55,0.2); white-space:nowrap; background:rgba(237,131,55,0.08); cursor:default; flex-shrink:0; }
        .phone-flag-icon { font-size:0.9rem; opacity:0.7; }
        .phone-row .fl-input { border:none; border-radius:0; background:transparent; box-shadow:none; padding:0.82rem 1rem; }
        .phone-row .fl-input:focus { box-shadow:none; }
        .ap-submit { width:100%; background:linear-gradient(135deg,#ed8337,#f5a66b); color:#fff; border:none; padding:1rem 1.5rem; border-radius:12px; font-family:'Poppins',sans-serif; font-size:0.97rem; font-weight:500; cursor:pointer; letter-spacing:0.02em; display:flex; align-items:center; justify-content:center; gap:0.6rem; transition:transform 0.2s,box-shadow 0.2s; }
        .ap-submit:hover { transform:translateY(-2px); box-shadow:0 12px 36px rgba(237,131,55,0.5); }
        .ap-submit-arrow { display:inline-flex; align-items:center; justify-content:center; width:24px; height:24px; border-radius:50%; background:rgba(2,43,68,0.25); font-size:0.9rem; }
      `}</style>

      <div className="ap-inner">

        {/* LEFT CONTENT */}
        <div className="ap-left">
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Approach in</div>
          </div>
          <h2 className="ap-heading">Business  <span>Process Automation</span></h2>
          <p className="ap-intro">
            PCS follows a consultative and technology-driven approach to Business Process Automation focused on improving operational efficiency, scalability, and long-term business performance.

          </p>
          <p className="ap-intro">
            We work closely with teams to assess workflows, identify bottlenecks, and design structured automation strategies aligned with business objectives and operational requirements.

          </p>
          <p className="ap-intro">
            From implementation to continuous optimization, PCS builds integrated and data-driven workflows that reduce manual effort, improve accuracy, and strengthen process consistency across departments.

          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="ap-form-wrap">
          <div className="ap-form-card">
            <div className="form-card-eyebrow">
              <span className="form-card-eyebrow-line" />Your Growth, Our Mission<span className="form-card-eyebrow-line" />
            </div>
            <div className="form-card-title">
              Get Your <span>Free</span> Quote
            </div>

            {/* ✅ FORM START */}
            <form onSubmit={sendEmail}>

              <div className="fl-row">

                <div className="fl-group">
                  <label className="fl-label">Your Name</label>
                  <div style={{ position: "relative" }}>
                    <span className="fl-icon">👤</span>
                    <input
                      className="fl-input"
                      type="text"
                      name="name"
                      placeholder="Full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="fl-group">
                  <label className="fl-label">Company</label>
                  <div style={{ position: "relative" }}>
                    <span className="fl-icon">🏢</span>
                    <input
                      className="fl-input"
                      type="text"
                      name="company"
                      placeholder="Company name"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

              </div>

              <div className="fl-group">
                <label className="fl-label">Email Address</label>
                <div style={{ position: "relative" }}>
                  <span className="fl-icon">✉️</span>
                  <input
                    className="fl-input"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="fl-group">
                <label className="fl-label">Mobile Number</label>
                <div className="phone-row">
                  <div className="phone-flag">
                    <span className="phone-flag-icon">📞</span>

                  </div>
                  <input
                    className="fl-input"
                    type="tel"
                    name="phone"
                    placeholder="Mobile number"
                    value={form.phone}
                    onChange={handleChange}
                    maxLength="10"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
              </div>

              <div className="fl-group textarea-group">
                <label className="fl-label">Message</label>
                <div style={{ position: "relative" }}>
                  <span className="fl-icon" style={{ top: "0.9rem", transform: "none" }}>💬</span>
                  <textarea
                    className="fl-textarea"
                    name="msg"
                    placeholder="Tell us about your business needs..."
                    value={form.msg}
                    onChange={handleChange}

                  />
                </div>
              </div>

              {/* ✅ SUBMIT BUTTON */}
              <button type="submit" className="ap-submit">
                Get Free Consultation
                <span className="ap-submit-arrow">›</span>
              </button>

            </form>
            {/* ✅ FORM END */}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="dm-svc-section" id="services">
      <div className="dm-svc-bg-conic"></div>
      <div className="dm-svc-blob dm-svc-blob-1"></div>
      <div className="dm-svc-blob dm-svc-blob-2"></div>
      <div className="dm-svc-hdr">
        <div className="partners-header1">
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Specialized Business Process Automation Services</h2>
        </div>
        <h3 className="partners-h3-title">Every Task Automated.  <em style={{ color: '#ed8337' }}><i>Every Process Optimized.</i></em></h3>
        <p>
          Priyam Consultancy Services delivers Business Process Automation solutions that simplify operations, eliminate inefficiencies, and enhance productivity — helping businesses achieve accuracy, agility, and sustainable growth.</p>
      </div>
      <div className="dm-svc-grid">
        {SERVICES.map(s => (
          <div className="dm-svc-card" key={s.n}>
            <div className="dm-svc-body">
              <h4 className="dm-svc-title">{s.title}</h4>
              <p className="dm-svc-desc">{s.desc}</p>
            </div>
            <div style={{ marginTop: "auto", display: "flex", alignItems: "flex-end", justifyContent: "space-between", paddingTop: "1.5rem" }}>
              <div className="dm-svc-n" style={{ position: "static", fontSize: "2.8rem", lineHeight: 1 }}>{s.n}</div>
              <div className="dm-svc-icon-wrap" style={{ position: "static", flexShrink: 0 }}><img src={s.img} alt={s.title} style={{ width: "32px", height: "32px", objectFit: "contain" }} /></div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="dm-proc-section" id="process">
      <div className="dm-proc-hdr">
        <div className="partners-header1">
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start', color: '#ed8337' }}>Our Automation Execution Process</h2>
        </div>
        <h3 className="partners-h3-process">Structured,  <em style={{ color: '#ed8337' }}><i>Intelligent, </i></em> and Reliable Automation</h3>
        <p>
          Our Process Automation Services are tailored to your unique business needs, focusing on efficiency, accuracy, and scalability to deliver measurable results. We streamline complex workflows, integrate intelligent tools, and enhance productivity, ensuring your operations run seamlessly and adapt effortlessly to growth and innovation.
        </p>
      </div>

      <div className="dm-proc-track">
        {PROCESS_STEPS.map((step, i) => (
          <div
            className={`dm-proc-step${activeStep === i ? " expanded" : ""}`}
            key={step.n}
            onClick={() => setActiveStep(i)}
          >
            {/* Collapsed */}
            <div className="dm-proc-collapsed">
              <span className="dm-proc-step-n">{step.n}</span>
              <span className="dm-proc-step-icon-sm"><img src={step.img} alt={step.title} style={{ width: "22px", height: "22px", objectFit: "contain" }} /></span>
              <span className="dm-proc-step-vtext">{step.label}</span>
            </div>
            {/* Expanded */}
            <div className="dm-proc-expanded">
              <div className="dm-proc-exp-num">{step.n}</div>
              <div className="dm-proc-exp-top">
                <div className="dm-proc-exp-icon"><img src={step.img} alt={step.title} style={{ width: "30px", height: "30px", objectFit: "contain" }} /></div>
                <h4 className="dm-proc-exp-title">{step.title}</h4>
                <div className="dm-proc-exp-desc">{step.desc}</div>
                <ul className="dm-proc-exp-list">
                  {step.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
              {/* <div className="dm-proc-exp-tag">{step.time}</div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const HWW_STEPS = [
  { title: "Tailored Solutions", desc: "We develop customized automation solutions aligned with your business workflows, operational requirements, and long-term efficiency and scalability goals.", center: false, img: "/img/icon/bpa-why-tailored.webp" },
  { title: "Seamless Integration", desc: "Our systems integrate smoothly with existing tools and platforms to improve workflow efficiency, connectivity, and operational performance across departments.", center: false, img: "/img/icon/bpa-why-integration.webp" },
  { title: "Insight-Driven Decisions", desc: "We leverage real-time analytics and data insights to support accurate decision-making, operational visibility, and sustainable business growth strategies.", center: true, img: "/img/icon/bpa-why-insights.webp" },
  { title: "Ongoing Optimization", desc: "Provides continuous monitoring, support, and process improvements to ensure automation systems remain efficient, scalable, and performance-focused over time.", center: false, img: "/img/icon/bpa-why-optimize.webp" },
];

function HowWeWorkSection() {
  return (
    <section style={{ position: "relative", background: "#004168", overflow: "hidden", padding: "60px 5% 81px" }}>
      <style>{`
        .hww-bg{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(237,131,55,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(237,131,55,0.03) 1px,transparent 1px);background-size:52px 52px;animation:hww-gd 22s linear infinite;}
        @keyframes hww-gd{0%{background-position:0 0}100%{background-position:52px 52px}}
        .hww-orb{position:absolute;border-radius:50%;pointer-events:none;filter:blur(90px);animation:hww-od 10s ease-in-out infinite alternate;}
        .hww-orb-1{width:500px;height:500px;background:rgba(237,131,55,0.06);top:-140px;right:-100px;}
        .hww-orb-2{width:380px;height:380px;background:rgba(1,113,164,0.07);bottom:-100px;left:-60px;animation-delay:5s;}
        @keyframes hww-od{0%{transform:scale(1)}100%{transform:scale(1.2) translate(20px,-20px)}}
        .hww-tag{display:inline-flex;align-items:center;gap:0.65rem;font-family:'DM Sans',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#ed8337;margin-bottom:14px;}
        .hww-tag-line{display:inline-block;width:28px;height:2px;border-radius:2px;background:linear-gradient(90deg,transparent,#ed8337);}
        .hww-tag-line:last-child{background:linear-gradient(90deg,#ed8337,transparent);}
        .hww-title{font-family:'Poppins',sans-serif;font-size:clamp(26px,3.6vw,42px);font-weight:600;color:#fff;margin:0;line-height:1.13;}
        .hww-accent{color:#ed8337;font-style:italic;}
        .hww-sub{font-family:'DM Sans',sans-serif;font-size:16px;color:rgb(255, 255, 255);margin-top:20px;margin-left:auto;margin-right:auto;line-height:1.75;}
        .hww-flow{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
        .hww-flow::before{position:absolute;top:54px;left:calc(10% + 28px);right:calc(10% + 28px);height:2px;background:linear-gradient(90deg,#ed8337,rgba(237,131,55,0.4),rgba(1,113,164,0.5),#0171a4);z-index:0;animation:hww-lg 3s ease-in-out infinite alternate;}
        @keyframes hww-lg{from{opacity:0.5}to{opacity:1}}
        .hww-step{display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 12px;position:relative;z-index:2;cursor:default;}
        .hww-icon-wrap{width:108px;height:108px;position:relative;margin-bottom:22px;flex-shrink:0;}
        .hww-ring{position:absolute;inset:0;border-radius:50%;border:1.5px dashed rgba(237,131,55,0.25);animation:hww-rs 14s linear infinite;}
        .hww-ring::before{content:'';position:absolute;top:-4px;left:50%;transform:translateX(-50%);width:7px;height:7px;border-radius:50%;background:#ed8337;box-shadow:0 0 10px rgba(237,131,55,0.7);}
        .hww-step:hover .hww-ring{border-color:rgba(237,131,55,0.55);}
        .hww-disc{position:absolute;inset:12px;border-radius:50%;background:rgba(237,131,55,0.06);border:1px solid rgba(237,131,55,0.15);animation:hww-db 3.5s ease-in-out infinite;}
        .hww-step:hover .hww-disc{background:rgba(237,131,55,0.12);box-shadow:0 0 28px rgba(237,131,55,0.2);}
        .hww-svg{position:absolute;inset:24px;border-radius:50%;background:#004168;border:1.5px solid rgba(237,131,55,0.3);display:flex;align-items:center;justify-content:center;transition:transform 0.4s,border-color 0.3s;}
        .hww-step:hover .hww-svg{transform:scale(1.12);border-color:rgba(237,131,55,0.6);}
        .hww-svg svg{width:28px;height:28px;stroke:#ed8337;stroke-width:1.6;fill:none;}
        .hww-step-center .hww-ring{border-color:rgba(245,166,107,0.35);}
        .hww-step-center .hww-ring::before{background:#f5a66b;}
        .hww-step-center .hww-svg{border-color:rgba(245,166,107,0.45);}
        .hww-step-center .hww-svg svg{stroke:#f5a66b;}
        .hww-step-center .hww-step-title{color:#f5a66b;}
        @keyframes hww-rs{to{transform:rotate(360deg)}}
        @keyframes hww-db{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}
        .hww-arrow{display:none; position:absolute;top:46px;right:-14px;width:28px;height:14px;z-index:3;opacity:0.5;animation:hww-ab 2s ease-in-out infinite;}
        @keyframes hww-ab{0%,100%{opacity:0.3;transform:translateX(0)}50%{opacity:0.7;transform:translateX(3px)}}
        .hww-step-title{font-family:'Poppins',sans-serif;font-size:16px;font-weight:600;color:#f5a66b;line-height:1.35;margin-bottom:14px;}
        .hww-step:hover .hww-step-title{color:#f5a66b;}
        .hww-step-desc{font-family:'DM Sans',sans-serif;font-size:15px;color:rgb(255, 255, 255);line-height:1.8;}
        .hww-step:hover .hww-step-desc{color:rgba(255,255,255,0.6);}
        .hww-cta-row{display:flex;align-items:center;justify-content:center;margin-top:64px;gap:1.6rem;}
        .hww-cta-line{flex:1;max-width:200px;height:1px;background:linear-gradient(90deg,transparent,rgba(237,131,55,0.3),transparent);}
        .hww-cta-btn{display:inline-flex;align-items:center;gap:0.55rem;background:linear-gradient(135deg,#ed8337,#f5a66b);color:#011a2a;padding:0.85rem 2.2rem;border-radius:50px;font-family:'DM Sans',sans-serif;font-size:0.9rem;font-weight:700;text-decoration:none;box-shadow:0 6px 24px rgba(237,131,55,0.38);transition:transform 0.2s,box-shadow 0.2s;}
        .hww-cta-btn:hover{transform:translateY(-3px);box-shadow:0 10px 34px rgba(237,131,55,0.52);}
        .hww-cta-btn svg{width:18px;height:18px;stroke:#011a2a;stroke-width:2;fill:none;}
        @media(max-width:900px){.hww-flow{grid-template-columns:1fr 1fr !important;gap:36px 20px !important;}.hww-flow::before{display:none !important;}}
        @media(max-width:540px){.hww-flow{grid-template-columns:1fr !important;}.hww-arrow{display:none !important;}}
        .faq-head h2 {
          color: #000;
        }
          h3.faq-h3 {
    font-size: 2.5rem;
    color: black;
}

      `}</style>
      <div className="hww-bg" /><div className="hww-orb hww-orb-1" /><div className="hww-orb hww-orb-2" />
      <div style={{ position: "relative", zIndex: 2, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Why PCS?
            </div>

          </div>
          <h2 className="hww-title">Plan Smart. <span className="hww-accent">Automate Confidently.</span></h2>
          <p className="hww-sub">
            Transform your workflows, reduce errors, and boost efficiency with tailored Business Process Automation Solutions designed to drive growth and operational excellence.
          </p>
        </div>
        <div className="hww-flow">
          {HWW_STEPS.map((s, i) => (
            <div key={i} className={`hww-step${s.center ? " hww-step-center" : ""}`}>
              <div className="hww-icon-wrap">
                <div className="hww-ring" style={i % 2 === 1 ? { animationDirection: "reverse", animationDuration: "18s" } : {}} />
                <div className="hww-disc" />
                <div className="hww-svg"><img src={s.img} alt={s.title} style={{ width: "28px", height: "28px", objectFit: "contain" }} /></div>
                {i < 3 && (
                  <div className="hww-arrow" style={{ animationDelay: `${i * 0.4}s` }}>
                    <svg viewBox="0 0 28 14" fill="none"><path d="M0 7h24M18 2l6 5-6 5" stroke="#ed8337" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                )}
              </div>
              <h3 className="hww-step-title">{s.title}</h3>
              <div className="hww-step-desc">{s.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <section className="faq-section" style={{ background: '#fff' }}>
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

// ─── Root Component ──────────────────────────────────────────────────────────
export default function DigitalMarketing() {
  // Inject global CSS once
  useEffect(() => {
    const id = "dm-global-styles";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.textContent = GLOBAL_CSS;
      document.head.appendChild(style);
    }
    return () => {
      // optional cleanup
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>Business Process Automation | Improve Efficiency Fast </title>
        <meta name="description" content="Streamline operations with Business Process Automation to boost efficiency, reduce costs, and improve accuracy with smart workflow solutions. " />
        <link rel="canonical" href="https://www.priyamconsultancy.com/business-process-automation/" />
        <meta name="keywords" content="Business Process Automation, Business Process Automation Services, Business Process Automation Software, Business Automation Software, Business Process Optimisation, Business Automation Solutions, Business Process Automation Solutions, Process Automation Service, BPA Solutions, Business Automation Services Provider" />
        <meta property="og:title" content="Business Process Automation | Improve Efficiency Fast " />
        <meta property="og:description" content="Streamline operations with Business Process Automation to boost efficiency, reduce costs, and improve accuracy with smart workflow solutions. " />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Process Automation | Improve Efficiency Fast " />
        <meta name="twitter:description" content="Streamline operations with Business Process Automation to boost efficiency, reduce costs, and improve accuracy with smart workflow solutions. " />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                  "@id": "https://www.priyamconsultancy.com/business-process-automation/",
                  "name": "business-process-automation"
                }
              }
            ]
          })
        }} />

        {/* Organization Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          })
        }} />

        {/* Service Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Business Process Automation",
            "description": "Streamline operations with Business Process Automation to boost efficiency, reduce costs, and improve accuracy with smart workflow solutions.",
            "provider": {
              "@type": "Organization",
              "name": "Priyam Consultancy Services",
              "url": "https://www.priyamconsultancy.com/"
            },
            "serviceType": "Business Process Automation",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Business Process Automation Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Workflow Automation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Robotic Process Automation (RPA)" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Process Consulting & Strategy" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Integration & Implementation" } }
              ]
            },
            "mainEntityOfPage": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Business Process Automation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Business Process Automation uses technology to automate repetitive workflows, reduce manual effort, and improve efficiency. It helps businesses focus more on strategic and high-value activities."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the 4 types of business processes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The four types are operational, management, supporting, and development processes. Together, they cover core business activities, strategy, support functions, and innovation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the 5 levels of automation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The five levels are manual, assisted, partial, high, and full automation. They range from fully human-driven tasks to completely autonomous workflows."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the benefits of customized Business Process Automation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Customized BPA improves efficiency, reduces errors, lowers costs, enhances compliance, and provides scalable solutions tailored to your business needs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes up Business Process Automation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BPA includes workflow automation, RPA, data management, system integration, and analytics. These elements work together to streamline operations and provide useful insights."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can Sterlo be a valuable Business Process Automation tool?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sterlo is a no-code platform that helps businesses automate workflows, optimize processes, and make data-driven decisions without needing coding expertise."
                  }
                }
              ]
            }
          })
        }} />

        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "business-process-automation",
            "image": ["https://www.priyamconsultancy.com/img/digital-transformation.png"],
            "description": "Best business process automation services in Coimbatore offering workflow automation, task automation, operational efficiency improvement, business system integration and digital process management solutions for businesses.",
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
              "reviewCount": "5283"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://www.priyamconsultancy.com/business-process-automation/",
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
          })
        }} />

      </Head>
      <div style={{ background: "var(--navy)", minHeight: "100vh" }}>
        <HeroSection />
        <ApproachSection />
        <ServicesSection />
        <ProcessSection />
        <HowWeWorkSection />
        <BlogSection />
        <FAQSection />
        <CTASection />
      </div>
    </Layout>
  );
}