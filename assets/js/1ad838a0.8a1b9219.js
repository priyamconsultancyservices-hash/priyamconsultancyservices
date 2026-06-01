"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["240"],{9095(e,r,s){s.r(r),s.d(r,{default:()=>c});var a=s(4848),n=s(6540),i=s(8128),o=s(1085);let t=`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400;1,600&display=swap');

  :root {
    --navy:        #004168;
    --navy-deep:   #002a44;
    --navy-mid:    #0a5282;
    --orange:      #ed8337;
    --orange-light:#f5a66b;
    --text-dim:    rgba(255,255,255,0.45);
    --glass:       rgba(255,255,255,0.04);
    --glass-border:rgba(255,255,255,0.09);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'Poppins', sans-serif; background: var(--navy); color: #fff; overflow-x: hidden; }
li.dropdown.mega {
color:#000;
}
  /* HERO */
  .pcs-hero {
    min-height: 70vh;
    display: grid; grid-template-columns: 1fr 1fr;
    align-items: center; gap: 3rem;
    padding: 8rem 6% 5rem;
    position: relative; overflow: hidden;
    background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 60%, var(--navy-mid) 100%);
  }
  .pcs-hero::before {
    content:''; position:absolute; inset:0; pointer-events:none;
    background-image: linear-gradient(rgba(237,131,55,0.04) 1px,transparent 1px), linear-gradient(90deg,rgba(237,131,55,0.04) 1px,transparent 1px);
    background-size: 60px 60px;
    animation: grid-drift 20s linear infinite;
  }
  @keyframes grid-drift { from{background-position:0 0;} to{background-position:60px 60px;} }
  .pcs-hero::after {
    content:''; position:absolute; inset:0; pointer-events:none;
    background: radial-gradient(ellipse 60% 70% at 80% 50%, rgba(237,131,55,0.09) 0%, transparent 65%),
                radial-gradient(ellipse 50% 60% at 0% 0%, rgba(0,42,68,0.6) 0%, transparent 55%);
  }
  .pcs-hero-left { position:relative; z-index:2; }
  .pcs-badge {
    display:inline-flex; align-items:center; gap:.5rem;
    background:rgba(237,131,55,0.1); border:1px solid rgba(237,131,55,0.28);
    color:var(--orange); font-size:0.72rem; font-weight:700;
    padding:.38rem 1rem; border-radius:50px; letter-spacing:.09em; text-transform:uppercase;
    margin-bottom:1.4rem; animation:fadeUp .6s ease both;
    font-family:'Poppins',sans-serif;
  }
  .pcs-badge-dot { width:6px; height:6px; border-radius:50%; background:var(--orange); animation:pulse-dot 1.6s infinite; }
  @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:.4;transform:scale(1.5);} }
  .pcs-hero-heading {
    font-family:'Poppins',sans-serif;
    font-size:clamp(2rem,3.6vw,3.4rem);
    font-weight:800; line-height:1.1; letter-spacing:-.02em;
    margin-bottom:1.4rem; animation:fadeUp .7s .08s ease both;
  }
  .pcs-hero-heading .orange { color:var(--orange); }
  .pcs-hero-desc {
    font-size:.97rem; line-height:1.8; color:rgba(255,255,255,0.65);
    margin-bottom:.6rem; max-width:500px; animation:fadeUp .7s .16s ease both;
  }
  .pcs-hero-quote {
    font-size:.92rem; font-weight:600; font-style:italic;
    color:rgba(255,255,255,0.85); line-height:1.7;
    margin-bottom:2rem; max-width:500px;
    animation:fadeUp .7s .2s ease both;
    border-left: 3px solid var(--orange); padding-left: 1rem;
  }
  @keyframes fadeUp { from{opacity:0;transform:translateY(26px);} to{opacity:1;transform:translateY(0);} }

  .pcs-hero-right {
    position:relative; z-index:2;
    display:flex; align-items:center; ;
    animation:fadeUp .9s .15s ease both;
  }
  .pcs-hero-img-wrap {
    position:relative; height:420px;
    display:flex; align-items:center; justify-content:center;
  }
  .pcs-hero-img { width:100%; height:100%; object-fit:contain; }
  @keyframes float-ud { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-14px);} }

  @media(max-width:900px){
    .pcs-hero{grid-template-columns:1fr;padding:7rem 5% 5rem;text-align:center;}
    .pcs-badge{margin:0 auto 1.4rem;}
    .pcs-hero-img-wrap{width:320px;height:300px;}
    .pcs-hero-quote{border-left:none; padding-left:0; text-align:center;}
  }
  @media(max-width:540px){
    .pcs-nav-links,.pcs-nav-btn{display:none;}
    .pcs-hero-heading{font-size:1.9rem;}
  }

  /* CONTACT SECTION */
  .pcs-contact-section {
    position: relative;
    overflow: hidden;
    background: #f0f4f8;
    padding: 7rem 6%;
  }
  #pcs-ball-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  }
  .pcs-contact-section::after {
    content:''; position:absolute; inset:0; pointer-events:none; z-index:1;
    background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,255,255,0.45) 0%, transparent 75%);
  }
  .pcs-contact-inner {
    position: relative; z-index: 2;
    max-width: 1200px; margin: 0 auto;
  }
  .pcs-contact-header { text-align:center; margin-bottom:4rem; }
  .pcs-contact-eyebrow {
    display:inline-flex; align-items:center; gap:.5rem;
    font-family:'Poppins',sans-serif; font-size:.65rem; font-weight:700;
    letter-spacing:.18em; text-transform:uppercase;
    color:var(--orange); background:rgba(237,131,55,0.1);
    border:1px solid rgba(237,131,55,0.25);
    padding:.3rem .9rem; border-radius:4px; margin-bottom:1.1rem;
  }
  .pcs-contact-h2 {
    font-family:'Poppins',sans-serif;
    font-size:clamp(1.9rem,2.8vw,2.8rem);
    font-weight:800; line-height:1.1; letter-spacing:-.025em;
    color:#0d1f2d; margin-bottom:.7rem;
  }
  .pcs-contact-h2 span { color:var(--orange); }
  .pcs-contact-subtext {
    font-size:.93rem; line-height:1.75; color:#7a8a9e;
    max-width:520px; margin:0 auto;
  }
  .pcs-contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    align-items: start;
  }

  /* Info card */
  .pcs-cs-info-card {
    padding: 1rem 0.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .pcs-cs-tag {
    display:inline-flex; align-items:center; gap:.45rem;
    font-family:'Poppins',sans-serif; font-size:.65rem; font-weight:700;
    letter-spacing:.2em; text-transform:uppercase;
    color:var(--orange);
    margin-bottom:1.2rem;
  }
  .pcs-cs-tag-dot { width:5px; height:5px; border-radius:50%; background:var(--orange); animation:pulse-dot 1.6s infinite; }
  .pcs-cs-heading {
    font-family:'Poppins',sans-serif;
    font-size:clamp(1.7rem,2.5vw,2.4rem);
    font-weight:800; line-height:1.1; letter-spacing:-.03em;
    color:#0d1f2d; margin-bottom:1rem;
  }
  .pcs-cs-heading em { color:var(--orange); font-style:normal; }
  .pcs-cs-subtext {
    font-size:.9rem; line-height:1.85; color:#7a8a9e;
    margin-bottom:2.5rem; max-width:360px;
  }
  .pcs-cs-channel-list { display:flex; flex-direction:column; gap:1.2rem; margin-bottom:2.4rem; }
  .pcs-cs-channel {
    display:flex; align-items:center; gap:1.1rem;
    border-bottom: 1px solid rgba(0,65,104,0.08);
    padding:.2rem 0;
    transition:border-color .28s, transform .28s;
    cursor:default;
  }
  .pcs-cs-channel:hover {
    border-color:rgba(237,131,55,0.35);
    transform:translateX(6px);
  }
  .pcs-cs-channel-ico {
    width:42px; height:42px; border-radius:50%; flex-shrink:0;
    display:flex; align-items:center; justify-content:center; font-size:1.05rem;
    background:rgba(237,131,55,0.08); border:1.5px solid rgba(237,131,55,0.18);
    transition:background .28s, border-color .28s;
  }
  .pcs-cs-channel:hover .pcs-cs-channel-ico { background:var(--orange); border-color:var(--orange); }
  .pcs-cs-channel-body { flex:1; min-width:0; }
  .pcs-cs-channel-title {
    font-family:'Poppins',sans-serif; font-size:.68rem; font-weight:700;
    color:#9aabb8; letter-spacing:.08em; text-transform:uppercase; margin-bottom:.18rem;
  }
  .pcs-cs-channel-val { font-size:.84rem; color:#1a2e3d; }
  .pcs-cs-channel-val a { color:inherit; text-decoration:none; }
  .pcs-cs-channel-val a:hover { color:var(--orange); }
  .pcs-cs-divider {
    height:1px;
    background:linear-gradient(90deg, rgba(237,131,55,0.4), rgba(0,65,104,0.06), transparent);
    margin-bottom:2rem;
  }
  .pcs-cs-social { display:flex; gap:.55rem; align-items:center; }
  .pcs-cs-social-label { font-size:.65rem; color:#aab4c2; letter-spacing:.12em; text-transform:uppercase; margin-right:.5rem; }
  .pcs-cs-social-btn {
    width:36px; height:36px; border-radius:50%;
    background: transparent; border:1.5px solid rgba(0,65,104,0.15);
    display:flex; align-items:center; justify-content:center;
    font-size:.78rem; font-weight:800; color:#7a92a5;
    text-decoration:none; font-family:'Poppins',sans-serif;
    transition:background .22s, border-color .22s, color .22s, transform .2s;
  }
  .pcs-cs-social-btn:hover { background:var(--orange); border-color:var(--orange); color:#fff; transform:translateY(-3px); }
  .pcs-cs-quote-deco {
    margin-top: 2.2rem;
    font-family:'Poppins',sans-serif; font-size:.82rem; font-weight:600;
    font-style:italic; color:rgba(0,65,104,0.4); line-height:1.8;
    padding-left:1.1rem;
    border-left:3px solid var(--orange);
    opacity: 0.75;
  }

  /* Form card */
  .pcs-cs-form-card {
    background: rgba(255,255,255,0.75);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.9);
    border-radius: 24px;
    padding: 2.8rem 2.4rem;
    box-shadow: 0 8px 40px rgba(0,65,104,0.08), 0 1px 2px rgba(0,0,0,0.04);
  }
  .pcs-cs-form-badge {
    display:inline-flex; align-items:center; gap:.5rem;
    font-family:'Poppins',sans-serif; font-size:.58rem; font-weight:700;
    letter-spacing:.14em; text-transform:uppercase;
    color:var(--navy); background:rgba(0,65,104,0.06);
    border:1px solid rgba(0,65,104,0.1);
    padding:.26rem .8rem; border-radius:4px; margin-bottom:1.3rem;
  }
  .pcs-cs-form-heading {
    font-family:'Poppins',sans-serif; font-size:clamp(1.4rem,2vw,1.9rem);
    font-weight:800; line-height:1.1; color:#0d1f2d;
    margin-bottom:.45rem; letter-spacing:-.025em;
  }
  .pcs-cs-form-heading span { color:var(--orange); }
  .pcs-cs-form-sub { font-size:.85rem; color:#8a9ab0; margin-bottom:2rem; font-family:'Poppins',sans-serif; }
  .pcs-cs-row-2 { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
  .pcs-cs-field { position:relative; margin-bottom:1.55rem; }
  .pcs-cs-field input,
  .pcs-cs-field textarea {
    width:100%; background:transparent;
    border:none; border-bottom:2px solid rgba(0,65,104,0.13);
    padding:.82rem 0 .52rem;
    font-family:'Poppins',sans-serif; font-size:.92rem; color:#0d1f2d;
    outline:none;
  }
  .pcs-cs-field textarea { resize:none; min-height:74px; display:block; }
  .pcs-cs-field input:focus,
  .pcs-cs-field textarea:focus { border-color:transparent; }
  .pcs-cs-field-bar {
    position:absolute; bottom:0; left:0; height:2px; width:0;
    background:linear-gradient(90deg,var(--orange),var(--orange-light));
    transition:width .38s cubic-bezier(.4,0,.2,1);
    border-radius:2px;
  }
  .pcs-cs-field input:focus ~ .pcs-cs-field-bar,
  .pcs-cs-field textarea:focus ~ .pcs-cs-field-bar { width:100%; }
  .pcs-cs-field label {
    position:absolute; top:.82rem; left:0;
    font-size:.87rem; color:#b0bcc9; pointer-events:none;
    transition:all .25s cubic-bezier(.4,0,.2,1);
    font-family:'Poppins',sans-serif;
  }
  .pcs-cs-field input:not(:placeholder-shown) ~ label,
  .pcs-cs-field input:focus ~ label,
  .pcs-cs-field textarea:not(:placeholder-shown) ~ label,
  .pcs-cs-field textarea:focus ~ label {
    top:-.5rem; font-size:.67rem; color:var(--orange);
    font-weight:700; letter-spacing:.07em; text-transform:uppercase;
  }
  .pcs-cs-phone-row { display:flex; gap:.8rem; align-items:flex-end; }
  .pcs-cs-phone-prefix {
    flex-shrink:0; padding:.82rem 0 .52rem;
    font-size:.92rem; color:#0d1f2d;
    border-bottom:2px solid rgba(0,65,104,0.13);
    font-family:'Poppins',sans-serif; white-space:nowrap;
  }
  .pcs-cs-error { color:#e74c3c; font-size:.8rem; margin-bottom:.8rem; font-family:'Poppins',sans-serif; }
  .pcs-cs-submit-row { display:flex; align-items:center; gap:1.3rem; margin-top:2rem; flex-wrap:wrap; }
  .pcs-cs-submit {
    display:inline-flex; align-items:center; gap:.65rem;
    background:var(--navy); color:#fff;
    padding:.95rem 2rem; border:none; border-radius:50px;
    font-family:'Poppins',sans-serif; font-size:.92rem; font-weight:700;
    cursor:pointer; letter-spacing:.02em;
    box-shadow:0 6px 24px rgba(0,65,104,0.22);
    transition:background .22s, transform .2s, box-shadow .22s;
  }
  .pcs-cs-submit:hover { background:var(--orange); transform:translateY(-2px); box-shadow:0 10px 34px rgba(237,131,55,0.32); }
  .pcs-cs-submit-arrow {
    width:28px; height:28px; border-radius:50%;
    background:rgba(255,255,255,0.14);
    display:flex; align-items:center; justify-content:center; font-size:.88rem;
    transition:transform .22s;
  }
  .pcs-cs-submit:hover .pcs-cs-submit-arrow { transform:translateX(4px); }
  .pcs-cs-submit-note { font-size:.75rem; color:#aab4c0; line-height:1.55; font-family:'Poppins',sans-serif; }
  .pcs-cs-success-msg { display:none; text-align:center; padding:2.5rem 0; }
  .pcs-cs-success-msg.visible { display:block; }
  .pcs-cs-success-icon { font-size:3rem; margin-bottom:.8rem; }
  .pcs-cs-success-title { font-family:'Poppins',sans-serif; font-size:1.3rem; font-weight:800; color:#0d1f2d; margin-bottom:.4rem; }
  .pcs-cs-success-sub { font-size:.9rem; color:#8a9ab0; font-family:'Poppins',sans-serif; }

  @media(max-width:960px){
    .pcs-contact-section { padding:5rem 5%; }
    .pcs-contact-grid { grid-template-columns:1fr; gap:2rem; }
  }
  @media(max-width:560px){
    .pcs-cs-row-2 { grid-template-columns:1fr; }
    .pcs-cs-submit-row { flex-direction:column; align-items:flex-start; }
  }

  /* MAP SECTION */
  .pcs-map-section {
    background: var(--navy-deep);
    position: relative;
    overflow: hidden;
  }
  .pcs-map-section::before {
    content:''; position:absolute; inset:0; pointer-events:none; z-index:1;
    background-image: linear-gradient(rgba(237,131,55,0.03) 1px,transparent 1px),
                      linear-gradient(90deg,rgba(237,131,55,0.03) 1px,transparent 1px);
    background-size: 50px 50px;
  }

  /* Full-width map iframe */
  .pcs-map-frame-wrap {
    position: relative;
    width: 100%;
    height: 500px;
  }
  .pcs-map-frame-wrap iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }


  /* Open in Google Maps button */
  .pcs-map-open-link {
    position: absolute;
    bottom: 16px; right: 16px;
    background: rgba(0,26,44,0.92);
    border: 1px solid rgba(237,131,55,0.4);
    border-radius: 50px;
    padding: .5rem 1.1rem;
    display: flex; align-items: center; gap: .5rem;
    font-family:'Poppins',sans-serif; font-size:.7rem; font-weight:700;
    color: #fff; text-decoration: none;
    backdrop-filter: blur(12px);
    z-index: 10;
    box-shadow: 0 4px 20px rgba(0,0,0,0.4);
    transition: background .22s, border-color .22s, transform .2s;
  }
  .pcs-map-open-link:hover {
    background: var(--orange);
    border-color: var(--orange);
    transform: translateY(-2px);
  }
  .pcs-map-open-icon {
    font-size: .85rem;
    transition: transform .2s;
  }
  .pcs-map-open-link:hover .pcs-map-open-icon {
    transform: translate(2px, -2px);
  }

  @media(max-width:960px){
    .pcs-map-frame-wrap { height: 380px; }
    .pcs-map-info-card { border-bottom: 1px solid rgba(255,255,255,0.06); }
    .pcs-map-btn-cell { grid-column: 1 / -1; border-left: none; border-top: 1px solid rgba(237,131,55,0.15); }
  }
  @media(max-width:560px){
    .pcs-map-frame-wrap { height: 280px; }
    .pcs-map-info-card { border-right: none; }
  }
`;function c(){let[e,r]=(0,n.useState)({name:"",email:"",phone:"",company:"",msg:""}),s=s=>r({...e,[s.target.name]:s.target.value}),c=(0,n.useRef)(null),l=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e,r=c.current,s=l.current;if(!r||!s)return;let a=r.getContext("2d"),n=[{x:0,y:0,r:55,vx:1.1,vy:.8,color:"rgba(0,65,104,0.10)"},{x:0,y:0,r:38,vx:-.9,vy:1.2,color:"rgba(237,131,55,0.12)"},{x:0,y:0,r:70,vx:.7,vy:-1,color:"rgba(0,65,104,0.07)"},{x:0,y:0,r:28,vx:-1.4,vy:-.75,color:"rgba(237,131,55,0.09)"},{x:0,y:0,r:48,vx:1.3,vy:1.1,color:"rgba(10,82,130,0.09)"},{x:0,y:0,r:22,vx:-.8,vy:1.5,color:"rgba(237,131,55,0.15)"},{x:0,y:0,r:62,vx:.6,vy:-.9,color:"rgba(0,42,68,0.07)"},{x:0,y:0,r:34,vx:1.6,vy:-1.2,color:"rgba(237,131,55,0.08)"}];function i(){let e=s.getBoundingClientRect();r.width=e.width,r.height=e.height,n.forEach((e,s)=>{0===e.x&&0===e.y&&(e.x=r.width/n.length*s+e.r+60*Math.random(),e.y=Math.random()*(r.height-2*e.r)+e.r)})}return i(),window.addEventListener("resize",i),!function s(){a.clearRect(0,0,r.width,r.height),n.forEach(e=>{e.x+=e.vx,e.y+=e.vy,e.x-e.r<0&&(e.x=e.r,e.vx*=-1),e.x+e.r>r.width&&(e.x=r.width-e.r,e.vx*=-1),e.y-e.r<0&&(e.y=e.r,e.vy*=-1),e.y+e.r>r.height&&(e.y=r.height-e.r,e.vy*=-1);let s=a.createRadialGradient(e.x-.3*e.r,e.y-.3*e.r,.1*e.r,e.x,e.y,e.r);s.addColorStop(0,e.color.replace(/[\d.]+\)$/,e=>parseFloat(e)+.08+")")),s.addColorStop(1,e.color),a.beginPath(),a.arc(e.x,e.y,e.r,0,2*Math.PI),a.fillStyle=s,a.fill()}),e=requestAnimationFrame(s)}(),()=>{cancelAnimationFrame(e),window.removeEventListener("resize",i)}},[]),(0,a.jsxs)(o.A,{children:[(0,a.jsx)("style",{children:t}),(0,a.jsxs)("section",{className:"pcs-hero",children:[(0,a.jsxs)("div",{className:"pcs-hero-left",children:[(0,a.jsxs)("div",{className:"pcs-badge",children:[(0,a.jsx)("div",{className:"pcs-badge-dot"}),"Get In Touch"]}),(0,a.jsxs)("h1",{className:"pcs-hero-heading",children:["Contact ",(0,a.jsx)("span",{className:"orange",children:"Us"})]}),(0,a.jsx)("p",{className:"pcs-hero-desc",children:"Have questions or need support? We\u2019re just a message away."}),(0,a.jsx)("p",{className:"pcs-hero-desc",children:"Let's talk and discover how we can help your business grow."}),(0,a.jsx)("p",{className:"pcs-hero-quote",children:"\u201CEvery great connection starts with a conversation - we\u2019re here to listen and help you move forward\u201D"})]}),(0,a.jsx)("div",{className:"pcs-hero-right",children:(0,a.jsx)("div",{className:"pcs-hero-img-wrap",children:(0,a.jsx)("img",{src:"/img/contact-us.png",alt:"Contact Us Illustration",className:"pcs-hero-img"})})})]}),(0,a.jsxs)("section",{className:"pcs-contact-section",id:"contact",ref:l,children:[(0,a.jsx)("canvas",{id:"pcs-ball-canvas",ref:c}),(0,a.jsx)("div",{className:"pcs-contact-inner",children:(0,a.jsxs)("div",{className:"pcs-contact-grid",children:[(0,a.jsxs)("div",{className:"pcs-cs-info-card",children:[(0,a.jsxs)("div",{className:"pcs-cs-tag",children:[(0,a.jsx)("span",{className:"pcs-cs-tag-dot"}),"Contact Info"]}),(0,a.jsxs)("h3",{className:"pcs-cs-heading",children:["We\u2019d Love to Hear from You!  ",(0,a.jsx)("em",{children:"Talk to Our Experts"})]}),(0,a.jsx)("p",{className:"pcs-cs-subtext",children:"Whether you have a question, need support, or want to explore how we can collaborate              "}),(0,a.jsxs)("div",{className:"pcs-cs-channel-list",children:[(0,a.jsxs)("div",{className:"pcs-cs-channel",children:[(0,a.jsx)("div",{className:"pcs-cs-channel-ico",children:(0,a.jsx)("img",{src:"/img/icon/phone.webp",alt:"Phone",style:{width:"20px",height:"20px",objectFit:"contain"}})}),(0,a.jsxs)("div",{className:"pcs-cs-channel-body",children:[(0,a.jsx)("div",{className:"pcs-cs-channel-title",children:"Call us any time"}),(0,a.jsxs)("div",{className:"pcs-cs-channel-val",children:[(0,a.jsx)("a",{href:"tel:+919677444048",children:"+91 96774 44048"}),"\xa0/\xa0",(0,a.jsx)("a",{href:"tel:+917904386418",children:"+91 79043 86418"})]})]})]}),(0,a.jsxs)("div",{className:"pcs-cs-channel",children:[(0,a.jsx)("div",{className:"pcs-cs-channel-ico",children:(0,a.jsx)("img",{src:"/img/icon/mail.webp",alt:"Mail",style:{width:"20px",height:"20px",objectFit:"contain"}})}),(0,a.jsxs)("div",{className:"pcs-cs-channel-body",children:[(0,a.jsx)("div",{className:"pcs-cs-channel-title",children:"Send Us Mail"}),(0,a.jsx)("div",{className:"pcs-cs-channel-val",children:(0,a.jsx)("a",{href:"mailto:sales@priyamconsultancy.com",children:"sales@priyamconsultancy.com"})})]})]}),(0,a.jsxs)("div",{className:"pcs-cs-channel",children:[(0,a.jsx)("div",{className:"pcs-cs-channel-ico",children:(0,a.jsx)("img",{src:"/img/icon/location.webp",alt:"Location",style:{width:"20px",height:"20px",objectFit:"contain"}})}),(0,a.jsxs)("div",{className:"pcs-cs-channel-body",children:[(0,a.jsx)("div",{className:"pcs-cs-channel-title",children:"Visit Our Office"}),(0,a.jsxs)("div",{className:"pcs-cs-channel-val",style:{whiteSpace:"normal",lineHeight:1.5,fontSize:".8rem"},children:["SF.11/4, Pooja Garden, Kalapatti Road,",(0,a.jsx)("br",{}),"Civil Aerodrome Post, Coimbatore \u2013 641014"]})]})]})]}),(0,a.jsx)("div",{className:"pcs-cs-divider"}),(0,a.jsxs)("div",{className:"pcs-cs-social",children:[(0,a.jsx)("span",{className:"pcs-cs-social-label",children:"Follow"}),(0,a.jsx)("a",{className:"pcs-cs-social-btn",href:"#",children:"in"}),(0,a.jsx)("a",{className:"pcs-cs-social-btn",href:"#",children:"f"}),(0,a.jsx)("a",{className:"pcs-cs-social-btn",href:"#",children:"ig"}),(0,a.jsx)("a",{className:"pcs-cs-social-btn",href:"#",children:"\u{1D54F}"})]}),(0,a.jsx)("div",{className:"pcs-cs-quote-deco",children:"\"We're just a message away. Let's talk and discover how we can help your business grow. \"              "})]}),(0,a.jsxs)("div",{className:"pcs-cs-form-card",children:[(0,a.jsx)("style",{children:`
                .cf-badge{display:inline-flex;align-items:center;gap:6px;font-family:'Poppins',sans-serif;font-size:0.62rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#004168;background:transparent;border:1.5px solid #c8d8e4;border-radius:6px;padding:0.28rem 0.75rem;margin-bottom:1.2rem;}
                .cf-title{font-family:'Poppins',sans-serif;font-size:clamp(1.5rem,2.2vw,2rem);font-weight:800;line-height:1.1;color:#0d1f2d;margin-bottom:0.4rem;}
                .cf-title span{color:#ed8337;}
                .cf-sub{font-size:0.88rem;color:#7a8a9e;margin-bottom:1.8rem;font-family:'Poppins',sans-serif;}
                .cf-row{display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;}
                .cf-field{position:relative;margin-bottom:1.4rem;}
                .cf-field input,.cf-field textarea{width:100%;background:transparent;border:none;border-bottom:1.5px solid #d0dbe5;padding:0.6rem 0 0.5rem;font-family:'Poppins',sans-serif;font-size:0.9rem;color:#0d1f2d;outline:none;transition:border-color 0.22s;}
                .cf-field input::placeholder,.cf-field textarea::placeholder{color:#aab4c2;}
                .cf-field input:focus,.cf-field textarea:focus{border-color:#ed8337;}
                .cf-field textarea{resize:none;min-height:72px;display:block;}
                .cf-phone-wrap{display:flex;align-items:flex-end;border-bottom:1.5px solid #d0dbe5;transition:border-color 0.22s;}
                .cf-phone-wrap:focus-within{border-color:#ed8337;}
                .cf-phone-prefix{font-family:'Poppins',sans-serif;font-size:0.9rem;color:#0d1f2d;font-weight:600;white-space:nowrap;padding:0.6rem 0.5rem 0.5rem 0;flex-shrink:0;}
                .cf-phone-wrap input{border:none;flex:1;background:transparent;padding:0.6rem 0 0.5rem 0.3rem;font-family:'Poppins',sans-serif;font-size:0.9rem;color:#0d1f2d;outline:none;}
                .cf-phone-wrap input::placeholder{color:#aab4c2;}
                .cf-submit-row{display:flex;align-items:center;gap:1.2rem;margin-top:1.6rem;flex-wrap:wrap;}
                .cf-submit{display:inline-flex;align-items:center;gap:0.7rem;background:#004168;color:#fff;border:none;padding:0.9rem 1.8rem;border-radius:50px;font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;cursor:pointer;transition:background 0.22s,transform 0.18s,box-shadow 0.22s;}
                .cf-submit:hover{background:#022b44;transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,65,104,0.3);}
                .cf-submit-arrow{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:rgba(255,255,255,0.15);font-size:0.9rem;}
                .cf-note{font-family:'Poppins',sans-serif;font-size:0.78rem;color:#9aabb8;line-height:1.5;}
              `}),(0,a.jsx)("div",{className:"cf-badge",children:"+ Free Quote"}),(0,a.jsxs)("div",{className:"cf-title",children:["Your Growth, ",(0,a.jsx)("span",{children:" Our Mission."})]}),(0,a.jsx)("p",{className:"cf-sub",children:"Fill in your details \u2014 we'll get back within 24 hours."}),(0,a.jsxs)("form",{onSubmit:s=>{s.preventDefault();let a={name:e.name,email:e.email,phone:e.phone,company:e.company,message:e.msg,url:window.location.href};i.Ay.send("service_8xw6k3r","template_jarui36",a,"XWRnXi4hK2SvmRG3q").then(()=>{alert("Message Sent Successfully \u2705"),r({name:"",email:"",phone:"",company:"",msg:""})}).catch(e=>{console.log(e),alert("Failed to send \u274C")})},children:[(0,a.jsxs)("div",{className:"cf-row",children:[(0,a.jsx)("div",{className:"cf-field",children:(0,a.jsx)("input",{type:"text",name:"name",placeholder:"Your Name",value:e.name,onChange:s,required:!0})}),(0,a.jsx)("div",{className:"cf-field",children:(0,a.jsx)("input",{type:"email",name:"email",placeholder:"Email Address",value:e.email,onChange:s,required:!0})})]}),(0,a.jsxs)("div",{className:"cf-row",children:[(0,a.jsx)("div",{className:"cf-field",children:(0,a.jsxs)("div",{className:"cf-phone-wrap",children:[(0,a.jsx)("span",{className:"cf-phone-prefix",children:"IN +91"}),(0,a.jsx)("input",{type:"tel",name:"phone",placeholder:"Mobile Number",value:e.phone,onChange:s,maxLength:"10",pattern:"[0-9]{10}",required:!0})]})}),(0,a.jsx)("div",{className:"cf-field",children:(0,a.jsx)("input",{type:"text",name:"company",placeholder:"Company Name",value:e.company,onChange:s})})]}),(0,a.jsx)("div",{className:"cf-field",children:(0,a.jsx)("textarea",{name:"msg",placeholder:"Your Message",value:e.msg,onChange:s})}),(0,a.jsxs)("div",{className:"cf-submit-row",children:[(0,a.jsxs)("button",{type:"submit",className:"cf-submit",children:["Send Message ",(0,a.jsx)("span",{className:"cf-submit-arrow",children:"\u2192"})]}),(0,a.jsxs)("span",{className:"cf-note",children:["We reply within",(0,a.jsx)("br",{}),"24 hours \u2713"]})]})]})]})]})})]}),(0,a.jsx)("section",{className:"pcs-map-section",children:(0,a.jsxs)("div",{className:"pcs-map-frame-wrap",children:[(0,a.jsx)("iframe",{title:"Priyam Consultancy Services Location",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.3!2d77.0384169!3d11.0437549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8570043539609%3A0x153fa62eb3f9b6e4!2sPriyam%20Consultancy%20Services!5e0!3m2!1sen!2sin!4v1714200000000!5m2!1sen!2sin",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}),(0,a.jsxs)("a",{className:"pcs-map-open-link",href:"https://www.google.com/maps/place/Priyam+Consultancy+Services/@11.0437549,77.0384169,864m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba8570043539609:0x153fa62eb3f9b6e4!8m2!3d11.0437549!4d77.0384169!16s%2Fg%2F11ydmf6wk6?hl=en-US&entry=ttu",target:"_blank",rel:"noopener noreferrer",title:"Open in Google Maps",children:[(0,a.jsx)("span",{className:"pcs-map-open-icon",children:"\u2197"}),(0,a.jsx)("span",{children:"Open in Google Maps"})]})]})})]})}}}]);