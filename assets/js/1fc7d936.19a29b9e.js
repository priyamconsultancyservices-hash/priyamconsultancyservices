"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["111"],{5348(e,i,n){n.d(i,{A:()=>p});var t=n(4848),a=n(6540),o=n(1085),r=n(3572),s=n(6763);let l=`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

  :root {
    --navy: #004168;
    --navy-deep: #002a44;
    --navy-mid: #0a5282;
    --orange: #ed8337;
    --orange-light: #f5a66b;
    --green: #34d399;
    --blue: #1a73e8;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .jd-wrap {
    font-family: 'Poppins', sans-serif;
    background: #f0f4f8;
    color: #0d1f2d;
  }

  /* \u{2500}\u{2500} BANNER \u{2500}\u{2500} */
  .banner {
    position: relative;
    min-height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 55%, var(--navy-mid) 100%);
    padding: 3rem 5% 4rem;
  }
  .banner::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: linear-gradient(rgba(237,131,55,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(237,131,55,0.06) 1px, transparent 1px);
    background-size: 60px 60px;
    animation: grid-drift 22s linear infinite;
  }
  .banner::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(ellipse 55% 80% at 80% 60%, rgba(237,131,55,0.12) 0%, transparent 65%),
      radial-gradient(ellipse 45% 70% at 5% 20%, rgba(0,42,68,0.6) 0%, transparent 55%);
  }
  @keyframes grid-drift { from{background-position:0 0} to{background-position:60px 60px} }

  .banner-inner {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    max-width: 800px;
    width: 100%;
  }
  .banner-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    background: rgba(237,131,55,0.12);
    border: 1px solid rgba(237,131,55,0.32);
    color: var(--orange);
    font-size: .7rem;
    font-weight: 700;
    padding: .38rem 1.1rem;
    border-radius: 50px;
    letter-spacing: .12em;
    text-transform: uppercase;
    animation: fadeUp .5s ease both;
  }
  .eyebrow-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--orange);
    animation: pulse-dot 1.6s infinite;
  }
  @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.5)} }
  .banner-title {
    font-size: clamp(1.8rem, 4vw, 3rem);
    font-weight: 700;
    color: #fff;
    line-height: 1.15;
    animation: fadeUp .6s .08s ease both;
  }
  .banner-title span { color: var(--orange); }
  .banner-subtitle {
    font-size: .95rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.88);
    max-width: 620px;
    animation: fadeUp .65s .16s ease both;
  }
  @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }

  /* \u{2500}\u{2500} BODY LAYOUT \u{2500}\u{2500} */
  .jd-body {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 2.5rem;
    // max-width: 1280px;
    margin: 0 60px;
    padding: 3rem 2rem;
    align-items: start;
  }

  /* \u{2500}\u{2500} BACK BUTTON \u{2500}\u{2500} */
  .jd-back {
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    background: none;
    border: none;
    color: var(--blue);
    font-size: .82rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    padding: 0;
    margin-bottom: 2rem;
    text-decoration: none;
    transition: gap .2s;
  }
  .jd-back:hover { gap: .7rem; color: var(--blue); }

  /* \u{2500}\u{2500} META ROW \u{2500}\u{2500} */
  .jd-meta-row {
    display: block;
    flex-wrap: wrap;
    background: #fff;
    border: 1.5px solid rgba(0,65,104,0.1);
    border-radius: 14px;
    overflow: hidden;
    margin-bottom: 2.2rem;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  }
  .jd-meta-item {
    flex: 1;
    min-width: 160px;
    padding: 1.2rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: .3rem;
  }
  .jd-meta-label {
    font-size: .67rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .1em;
    color: #8a9aaa;
  }
  .jd-meta-value {
    font-size: .88rem;
    font-weight: 600;
    color: #0d1f2d;
    line-height: 1.4;
  }
  .jd-meta-divider {
    width: 1px;
    background: rgba(0,65,104,0.08);
    align-self: stretch;
  }

  /* \u{2500}\u{2500} SECTIONS \u{2500}\u{2500} */
  .jd-section { margin-bottom: 2rem; }
  .jd-section-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: #0d1f2d;
    margin-bottom: 1rem;
    padding-bottom: .6rem;
    border-bottom: 2px solid rgba(26,115,232,0.15);
  }
  .jd-bullets {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: .7rem;
  }
  .jd-bullets li {
    font-size: .875rem;
    color: #3a4a5a;
    line-height: 1.75;
    padding-left: 1.4rem;
    position: relative;
  }
  .jd-bullets li::before {
    content: '';
    position: absolute;
    left: 0; top: 10px;
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--blue);
  }

  /* \u{2500}\u{2500} SIDEBAR \u{2500}\u{2500} */
  .jd-sidebar {
    position: sticky;
    top: 24px;
    align-self: start;
  }
  .jd-sticky-card {
    background: #fff;
    border: 1.5px solid rgba(26,115,232,0.15);
    border-radius: 18px;
    padding: 1.8rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 0 8px 32px rgba(26,115,232,0.1);
  }
  .jd-sticky-role {
    font-size: 1.05rem;
    font-weight: 800;
    color: #0d1f2d;
    line-height: 1.3;
  }
  .jd-sticky-loc {
    display: flex;
    align-items: center;
    gap: .4rem;
    font-size: .8rem;
    color: #6a7a8a;
    font-weight: 500;
  }
  .jd-sticky-divider { height: 1px; background: rgba(0,65,104,0.08); }
  .jd-sticky-info { display: flex; flex-direction: column; gap: .55rem; }
  .jd-info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .82rem;
    color: #6a7a8a;
  }
  .jd-info-row strong { color: #0d1f2d; font-weight: 700; }
  .jd-apply-btn {
    width: 100%;
    padding: .9rem;
    background: var(--blue);
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: .92rem;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: background .22s, transform .18s, box-shadow .22s;
    box-shadow: 0 4px 18px rgba(26,115,232,0.35);
    letter-spacing: .02em;
  }
  .jd-apply-btn:hover {
    background: #1558c0;
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(26,115,232,0.45);
  }
  .jd-apply-note {
    font-size: .72rem;
    color: #9aabba;
    text-align: center;
    line-height: 1.5;
  }

  @media (max-width: 860px) {
    .jd-body {
      display: flex;
      flex-direction: column;
      padding: 2rem 1.2rem;
      gap: 1.8rem;
    }
    .jd-sidebar { position: static; width: 100%; }
  }

  /* \u{2500}\u{2500} APPLY MODAL \u{2500}\u{2500} */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,20,40,0.55);
    backdrop-filter: blur(4px);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    animation: fadeIn .2s ease;
  }
  @keyframes fadeIn { from{opacity:0} to{opacity:1} }
  .modal-box {
    background: #fff;
    border-radius: 22px;
    width: 100%;
    max-width: 580px;
    max-height: 92vh;
    overflow-y: auto;
    box-shadow: 0 24px 80px rgba(0,0,0,0.22);
    animation: slideUp .28s ease;
    position: relative;
  }
  @keyframes slideUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
  .modal-header {
    background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 60%, var(--navy-mid) 100%);
    padding: 1.8rem 2rem 1.5rem;
    border-radius: 22px 22px 0 0;
    position: relative;
  }
  .modal-header::before {
    content:''; position:absolute; inset:0; border-radius:22px 22px 0 0;
    background-image:linear-gradient(rgba(237,131,55,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(237,131,55,0.07) 1px,transparent 1px);
    background-size:40px 40px; pointer-events:none;
  }
  .modal-eyebrow { font-size:.65rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--orange);margin-bottom:.45rem;position:relative;z-index:1; }
  .modal-title { font-size:1.2rem;font-weight:800;color:#fff;line-height:1.3;position:relative;z-index:1; }
  .modal-subtitle { font-size:.78rem;color:rgba(255,255,255,0.55);margin-top:.35rem;position:relative;z-index:1; }
  .modal-close {
    position:absolute;top:1.1rem;right:1.1rem;width:32px;height:32px;border-radius:50%;
    background:rgba(255,255,255,0.12);border:none;color:#fff;font-size:1.1rem;cursor:pointer;
    display:flex;align-items:center;justify-content:center;transition:background .2s;z-index:2;font-family:'Poppins',sans-serif;
  }
  .modal-close:hover{background:rgba(255,255,255,0.22);}
  .modal-body { padding:1.8rem 2rem 2rem;display:flex;flex-direction:column;gap:1.1rem; }
  .form-row { display:grid;grid-template-columns:1fr 1fr;gap:1rem; }
  .form-group { display:flex;flex-direction:column;gap:.4rem; }
  .form-label { font-size:.72rem;font-weight:700;color:#3a4a5a;letter-spacing:.04em;text-transform:uppercase; }
  .form-label span { color:#e53e3e;margin-left:2px; }
  .form-input,.form-select,.form-textarea {
    width:100%;padding:.72rem 1rem;border:1.5px solid #dde3ea;border-radius:10px;
    font-size:.875rem;color:#0d1f2d;font-family:'Poppins',sans-serif;background:#f8fafc;
    transition:border-color .2s,box-shadow .2s;outline:none;
  }
  .form-input:focus,.form-select:focus,.form-textarea:focus {
    border-color:var(--blue);box-shadow:0 0 0 3px rgba(26,115,232,0.1);background:#fff;
  }
  .form-textarea { resize:vertical;min-height:90px; }
  .form-select { appearance:none;cursor:pointer; }
  .file-upload-area {
    border:2px dashed #c8d5e4;border-radius:12px;padding:1.4rem;text-align:center;
    cursor:pointer;transition:border-color .2s,background .2s;background:#f8fafc;position:relative;
  }
  .file-upload-area:hover { border-color:var(--blue);background:rgba(26,115,232,0.04); }
  .file-upload-area input[type="file"] { position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%; }
  .file-upload-icon { font-size:1.8rem;margin-bottom:.4rem; }
  .file-upload-text { font-size:.8rem;color:#6a7a8a;line-height:1.6; }
  .file-upload-text strong { color:var(--blue); }
  .file-name { margin-top:.5rem;font-size:.75rem;color:var(--blue);font-weight:600;background:rgba(26,115,232,0.08);border-radius:6px;padding:.3rem .7rem;display:inline-block; }
  .modal-submit {
    width:100%;padding:.95rem;background:var(--blue);color:#fff;border:none;border-radius:12px;
    font-size:.95rem;font-weight:700;font-family:'Poppins',sans-serif;cursor:pointer;
    transition:background .22s,transform .18s,box-shadow .22s;box-shadow:0 4px 18px rgba(26,115,232,0.35);margin-top:.4rem;
  }
  .modal-submit:hover { background:#1558c0;transform:translateY(-2px);box-shadow:0 8px 28px rgba(26,115,232,0.45); }
  .modal-submit:disabled { background:#a0b4cc;cursor:not-allowed;transform:none;box-shadow:none; }
  .modal-success { padding:3rem 2rem;text-align:center;display:flex;flex-direction:column;align-items:center;gap:1rem; }
  .success-icon {
    width:70px;height:70px;border-radius:50%;background:linear-gradient(135deg,#34d399,#059669);
    display:flex;align-items:center;justify-content:center;font-size:2rem;
    box-shadow:0 8px 24px rgba(52,211,153,0.35);animation:pop .4s cubic-bezier(.34,1.56,.64,1);
  }
  @keyframes pop { from{transform:scale(0)} to{transform:scale(1)} }
  .success-title { font-size:1.3rem;font-weight:800;color:#0d1f2d; }
  .success-sub { font-size:.85rem;color:#6a7a8a;line-height:1.7;max-width:360px; }
  .success-close {
    margin-top:.5rem;padding:.7rem 2rem;background:var(--blue);color:#fff;border:none;
    border-radius:10px;font-size:.875rem;font-weight:700;font-family:'Poppins',sans-serif;cursor:pointer;transition:background .2s;
  }
  .success-close:hover { background:#1558c0; }
  @media (max-width: 520px) {
    .form-row { grid-template-columns: 1fr; }
    .modal-body { padding: 1.4rem 1.2rem 1.6rem; }
    .modal-header { padding: 1.4rem 1.2rem 1.2rem; }
  }
`;function d({role:e,onClose:i}){let[n,o]=(0,a.useState)({name:"",email:"",phone:"",experience:"",linkedin:"",cover:""}),[r,s]=(0,a.useState)(null),[l,c]=(0,a.useState)(!1),[p,m]=(0,a.useState)(!1),g=e=>i=>o(n=>({...n,[e]:i.target.value})),u=async()=>{if(!n.name||!n.email||!n.phone)return void alert("Please fill all required fields.");m(!0);try{let i="";if(r){let e=new FormData;e.append("file",r),e.append("upload_preset","PCS Career");let n=await fetch("https://api.cloudinary.com/v1_1/dsmzvp3ew/raw/upload",{method:"POST",body:e}),t=await n.json();if(!n.ok)throw Error(t?.error?.message||"Resume upload failed.");i=t.secure_url}let t=new FormData;t.append("_subject",`New Job Application \u{2014} ${e.title}`),t.append("name",n.name),t.append("email",n.email),t.append("phone",n.phone),t.append("role_title",e.title),t.append("location",e.location),t.append("years_of_experience",n.experience||"Not specified"),t.append("linkedin_profile",n.linkedin||"Not provided"),t.append("cover_note",n.cover||"Not provided"),t.append("resume_url",i||"Resume not uploaded");let a=await fetch("https://formspree.io/f/xbdqnqre",{method:"POST",body:t,headers:{Accept:"application/json"}}),l=await a.json();if(a.ok)c(!0),o({name:"",email:"",phone:"",experience:"",linkedin:"",cover:""}),s(null);else{let e=l?.errors?.map(e=>e.message).join(", ")||"Something went wrong.";alert(`Error: ${e}`)}}catch(e){alert(e.message||"Submission failed.")}finally{m(!1)}};return(0,t.jsx)("div",{className:"modal-overlay",onClick:e=>e.target===e.currentTarget&&i(),children:(0,t.jsx)("div",{className:"modal-box",children:l?(0,t.jsxs)("div",{className:"modal-success",children:[(0,t.jsx)("div",{className:"success-icon",children:"\u2713"}),(0,t.jsx)("div",{className:"success-title",children:"Application Submitted!"}),(0,t.jsxs)("p",{className:"success-sub",children:["Thank you for applying for ",(0,t.jsx)("strong",{children:e.title}),". Our team will review your profile and get back to you within 3\u20135 business days."]}),(0,t.jsx)("button",{className:"success-close",onClick:i,children:"Close"})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"modal-header",children:[(0,t.jsx)("button",{className:"modal-close",onClick:i,children:"\u2715"}),(0,t.jsx)("div",{className:"modal-eyebrow",children:"Apply Now"}),(0,t.jsx)("div",{className:"modal-title",children:e.title}),(0,t.jsxs)("div",{className:"modal-subtitle",children:["\u{1F4CD} ",e.location," \xa0\xb7\xa0 ",e.title.toLowerCase().includes("intern")?"Internship":"Full-time"," \xa0\xb7\xa0 ",e.openings," Opening",e.openings>1?"s":""]})]}),(0,t.jsxs)("div",{className:"modal-body",children:[(0,t.jsxs)("div",{className:"form-row",children:[(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsxs)("label",{className:"form-label",children:["Full Name ",(0,t.jsx)("span",{children:"*"})]}),(0,t.jsx)("input",{className:"form-input",placeholder:"John Doe",value:n.name,onChange:g("name")})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsxs)("label",{className:"form-label",children:["Phone Number ",(0,t.jsx)("span",{children:"*"})]}),(0,t.jsx)("input",{className:"form-input",placeholder:"+91 98765 43210",value:n.phone,onChange:g("phone")})]})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsxs)("label",{className:"form-label",children:["Email Address ",(0,t.jsx)("span",{children:"*"})]}),(0,t.jsx)("input",{className:"form-input",type:"email",placeholder:"you@email.com",value:n.email,onChange:g("email")})]}),(0,t.jsxs)("div",{className:"form-row",children:[(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{className:"form-label",children:"Years of Experience"}),(0,t.jsxs)("select",{className:"form-select",value:n.experience,onChange:g("experience"),children:[(0,t.jsx)("option",{value:"",children:"Select..."}),(0,t.jsx)("option",{children:"Fresher (0\u20131 yr)"}),(0,t.jsx)("option",{children:"1\u20133 Years"}),(0,t.jsx)("option",{children:"3\u20135 Years"}),(0,t.jsx)("option",{children:"5\u20138 Years"}),(0,t.jsx)("option",{children:"8+ Years"})]})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{className:"form-label",children:"LinkedIn Profile"}),(0,t.jsx)("input",{className:"form-input",placeholder:"linkedin.com/in/yourname",value:n.linkedin,onChange:g("linkedin")})]})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsxs)("label",{className:"form-label",children:["Upload Resume ",(0,t.jsx)("span",{children:"*"})]}),(0,t.jsxs)("div",{className:"file-upload-area",children:[(0,t.jsx)("input",{type:"file",accept:".pdf,.doc,.docx",onChange:e=>{let i=e.target.files[0];i&&s(i)}}),(0,t.jsx)("div",{className:"file-upload-icon",children:"\u{1F4C4}"}),(0,t.jsxs)("div",{className:"file-upload-text",children:[(0,t.jsx)("strong",{children:"Click to upload"})," or drag & drop",(0,t.jsx)("br",{}),"PDF, DOC, DOCX (max 5MB)"]}),r&&(0,t.jsxs)("div",{className:"file-name",children:["\u2713 ",r.name]})]})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{className:"form-label",children:"Cover Note"}),(0,t.jsx)("textarea",{className:"form-textarea",placeholder:"Tell us why you're a great fit for this role...",value:n.cover,onChange:g("cover")})]}),(0,t.jsx)("button",{className:"modal-submit",onClick:u,disabled:p||!n.name||!n.email||!n.phone,children:p?r?"\u{1F4E4} Uploading Resume...":"Submitting...":"Submit Application \u2192"})]})]})})})}function c({role:e}){let i=e.title.toLowerCase().replace(/\s+/g,"-"),n=`${s.W6}/career/${i}/`,a=e.title.toLowerCase().includes("intern"),o={"@context":"https://schema.org","@type":"JobPosting",title:e.title,description:e.desc,datePosted:"2025-01-01",validThrough:"2025-12-31",employmentType:a?"INTERN":"FULL_TIME",hiringOrganization:{"@type":"Organization",name:"Sterlo",sameAs:s.W6,logo:`${s.W6}/img/logo.png`},jobLocation:{"@type":"Place",address:{"@type":"PostalAddress",addressLocality:"Coimbatore",addressRegion:"Tamil Nadu",addressCountry:"IN"}},experienceRequirements:e.experience,numberOfPositions:e.openings,url:n,directApply:!0},l={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:s.W6},{"@type":"ListItem",position:2,name:"Careers",item:`${s.W6}/careers/`},{"@type":"ListItem",position:3,name:e.title,item:n}]};return(0,t.jsxs)(r.A,{children:[(0,t.jsxs)("title",{children:[e.seo?.title||`${e.title} `," "]}),(0,t.jsx)("meta",{name:"description",content:e.seo?.description||e.desc}),(0,t.jsx)("meta",{name:"keywords",content:e.seo?.keywords||e.title}),(0,t.jsx)("link",{rel:"canonical",href:e.seo?.canonical||n}),(0,t.jsx)("meta",{name:"robots",content:"index, follow"}),(0,t.jsx)("meta",{property:"og:type",content:"article"}),(0,t.jsx)("meta",{property:"og:title",content:`${e.title}`}),(0,t.jsx)("meta",{property:"og:description",content:e.desc}),(0,t.jsx)("meta",{property:"og:url",content:n}),(0,t.jsx)("meta",{property:"og:image",content:`${s.W6}/img/career.png`}),(0,t.jsx)("meta",{property:"og:site_name",content:"Sterlo"}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,t.jsx)("meta",{name:"twitter:title",content:`${e.title} `}),(0,t.jsx)("meta",{name:"twitter:description",content:e.desc}),(0,t.jsx)("script",{type:"application/ld+json",children:JSON.stringify(o)}),(0,t.jsx)("script",{type:"application/ld+json",children:JSON.stringify(l)})]})}function p({role:e}){let[i,n]=(0,a.useState)(!1),r=e.title.toLowerCase().includes("intern");return(0,t.jsxs)(o.A,{children:[(0,t.jsx)("style",{children:l}),(0,t.jsx)(c,{role:e}),i&&(0,t.jsx)(d,{role:e,onClose:()=>n(!1)}),(0,t.jsx)("section",{className:"banner",children:(0,t.jsxs)("div",{className:"banner-inner",children:[(0,t.jsxs)("div",{className:"banner-eyebrow",children:[(0,t.jsx)("div",{className:"eyebrow-dot"}),r?"Internship Opening":"Open Position"]}),(0,t.jsx)("h1",{className:"banner-title",children:e.title}),(0,t.jsx)("p",{className:"banner-subtitle",children:e.desc})]})}),(0,t.jsxs)("div",{className:"jd-body",children:[(0,t.jsxs)("div",{className:"jd-content",children:[(0,t.jsx)("a",{className:"jd-back",href:"/careers/",children:"\u2190 Back to Open Roles"}),(0,t.jsxs)("div",{className:"jd-meta-row",children:[(0,t.jsxs)("div",{className:"jd-meta-item",children:[(0,t.jsx)("span",{className:"jd-meta-label",children:"Location"}),(0,t.jsxs)("span",{className:"jd-meta-value",children:["\u{1F4CD} ",e.location]})]}),(0,t.jsx)("div",{className:"jd-meta-divider"}),(0,t.jsxs)("div",{className:"jd-meta-item",children:[(0,t.jsx)("span",{className:"jd-meta-label",children:"Openings"}),(0,t.jsxs)("span",{className:"jd-meta-value",children:[e.openings," Positions"]})]}),(0,t.jsx)("div",{className:"jd-meta-divider"}),(0,t.jsxs)("div",{className:"jd-meta-item",children:[(0,t.jsx)("span",{className:"jd-meta-label",children:"Type"}),(0,t.jsx)("span",{className:"jd-meta-value",children:r?"Internship":"Full-time"})]}),(0,t.jsx)("div",{className:"jd-meta-divider"}),(0,t.jsxs)("div",{className:"jd-meta-item",children:[(0,t.jsx)("span",{className:"jd-meta-label",children:"Experience & Qualification"}),(0,t.jsx)("span",{className:"jd-meta-value",children:e.experience})]})]}),(0,t.jsxs)("div",{className:"jd-section",children:[(0,t.jsx)("h2",{className:"jd-section-title",children:"Job Description"}),(0,t.jsx)("ul",{className:"jd-bullets",children:e.jobDescription.map((e,i)=>(0,t.jsx)("li",{children:e},i))})]}),(0,t.jsxs)("div",{className:"jd-section",children:[(0,t.jsx)("h2",{className:"jd-section-title",children:"Skills Required"}),(0,t.jsx)("ul",{className:"jd-bullets",children:e.skills.map((e,i)=>(0,t.jsx)("li",{children:e},i))})]})]}),(0,t.jsx)("div",{className:"jd-sidebar",children:(0,t.jsxs)("div",{className:"jd-sticky-card",children:[(0,t.jsx)("div",{className:"jd-sticky-role",children:e.title}),(0,t.jsxs)("div",{className:"jd-sticky-loc",children:[(0,t.jsxs)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",stroke:"currentColor",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:"M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"}),(0,t.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),e.location]}),(0,t.jsx)("div",{className:"jd-sticky-divider"}),(0,t.jsxs)("div",{className:"jd-sticky-info",children:[(0,t.jsxs)("div",{className:"jd-info-row",children:[(0,t.jsx)("span",{children:"Openings"}),(0,t.jsx)("strong",{children:e.openings})]}),(0,t.jsxs)("div",{className:"jd-info-row",children:[(0,t.jsx)("span",{children:"Type"}),(0,t.jsx)("strong",{children:r?"Internship":"Full-time"})]}),(0,t.jsxs)("div",{className:"jd-info-row",children:[(0,t.jsx)("span",{children:"Location"}),(0,t.jsx)("strong",{children:e.location})]})]}),(0,t.jsx)("button",{className:"jd-apply-btn",onClick:()=>n(!0),children:"Apply Now \u2192"}),(0,t.jsx)("p",{className:"jd-apply-note",children:"We'll get back to you within 3\u20135 business days."})]})})]})]})}},6763(e,i,n){n.d(i,{Rf:()=>a,W6:()=>t,aj:()=>o,iy:()=>r,l0:()=>s});let t="https://www.priyamconsultancy.com",a=[{title:"Profile Screening",desc:"After receiving your application, our recruitment team reviews your qualifications, experience, and relevant skills to shortlist candidates who best fit the role requirements.",icon:"/img/icon/hiring-step1.webp"},{title:"Initial Interaction",desc:"A preliminary discussion is arranged to learn about your professional background, key strengths, career aspirations, and overall suitability for the opportunity.",icon:"/img/icon/hiring-step2.webp"},{title:"Technical / Functional Assessment",desc:"Candidates will attend a virtual discussion with the respective hiring panel, along with an assessment process designed to evaluate technical knowledge and functional expertise.",icon:"/img/icon/hiring-step3.webp"},{title:"Final Face-to-Face Discussion & Offer",desc:"Shortlisted candidates will participate in a final in-person meeting covering role expectations, work culture, compensation details, and joining timeline, followed by the official offer process.",icon:"/img/icon/hiring-step4.webp"}],o=[{title:"Website Developer",location:"Coimbatore",openings:2,seo:{title:"Web Developer | Careers at Priyam Consultancy ",description:"Looking for a Website Developer job? Join PCS and build innovative websites, enhance your technical skills, and grow your career in a dynamic environment.",keywords:"Website Developer Jobs ,Website Developer Career, Web Developer Jobs,  Website Developer Vacancy",canonical:"https://www.priyamconsultancy.com/career/website-developer/"},experience:"Bachelor's degree or equivalent practical experience with 2+ years of website development experience.",desc:"Design, develop, and maintain high-performance websites and web applications that deliver exceptional user experiences across desktop and mobile platforms.",jobDescription:["Design, develop, and maintain high-performance websites","Optimize websites for speed, usability, and conversions","Collaborate with marketing and design teams for execution","Implement updates, enhancements, and new features","Troubleshoot technical issues and ensure smooth performance","Maintain documentation and version control","Stay updated with latest web technologies and best practices"],skills:["Strong knowledge of HTML, CSS, JavaScript, Shopify, WordPress Platform","Experience in responsive and performance-focused web development","Understanding of SEO, page speed, and UX best practices","Ability to debug and optimize websites efficiently","Experience working with APIs and third-party integrations","Effective utilization of AI tools for development, testing, and optimization","Strong problem-solving and analytical thinking","Ability to work independently and in collaborative teams"]},{title:"Digital Marketing Analyst",location:"Coimbatore",openings:2,seo:{title:"Digital Marketing Analyst Jobs | Careers at Priyam Consultancy  ",description:"Join Priyam Consultancy as a Digital Marketing Analyst. Work on SEO, PPC, social media, and analytics projects while growing your digital marketing career. ",keywords:"Digital Marketing Analyst Jobs,Digital Marketing Analyst Career ,Digital Marketing Jobs",canonical:"https://www.priyamconsultancy.com/career/digital-marketing-analyst"},experience:"Bachelor's degree or equivalent qualification with 2+ years of experience in digital marketing analytics.",desc:"Plan, execute, and optimise digital marketing campaigns across SEO, SEM, social media, and email channels to drive brand awareness, lead generation, and business growth.",jobDescription:["Track and analyze digital marketing performance across organic and paid channels","Manage technical SEO, on-page SEO, off-page SEO, and local SEO initiatives","Implement and optimize AEO, GEO, Google PMAX, and Meta Andromeda strategies","Prepare detailed performance reports, dashboards, and insights","Identify trends, gaps, and optimization opportunities across campaigns","Support campaign optimization using data-backed decisions","Monitor lead quality, conversion performance, and overall ROI","Maintain structured documentation and tracking frameworks","Stay updated with evolving analytics tools, AI-driven platforms, and marketing trends"],skills:["Strong understanding of SEO, AEO, GEO, paid ads, and social media performance metrics","Hands-on experience with Google Analytics, Search Console, and advertising platforms","Expertise in branding, organic lead generation, and paid campaign execution","Ability to analyze data and convert insights into actionable growth decisions","Knowledge of performance funnels, lead quality metrics, and conversion tracking","Strong experience in reporting, dashboards, and performance monitoring","Effective utilization of AI tools for analytics, forecasting, and optimization","High attention to data accuracy, detail, and insight communication"]},{title:"Content Writer",location:"Coimbatore",openings:2,seo:{title:"Content Writer Career Opportunities | PCS  ",description:" Looking for Content Writer jobs? Join PCS to create engaging content, improve SEO performance, and grow your career in digital marketing.",keywords:"Content Writer Career, Content Writing Jobs, SEO Content Writer Jobs ",canonical:"https://www.priyamconsultancy.com/career/content-writer/"},experience:"Bachelor's degree or equivalent qualification with 2+ years of content writing experience.",desc:"Create compelling, SEO-optimised content across blogs, website pages, social media, and marketing collaterals that communicates our brand voice and drives audience engagement.",jobDescription:["Create high-quality content for blogs, websites, ads, and social media platforms","Plan, research, and execute content aligned with brand positioning and business goals","Align content strategy with SEO, AEO, and lead generation objectives","Collaborate closely with marketing teams on campaign-based content execution","Edit, refine, and optimize content for clarity, engagement, and performance","Conduct in-depth research to support authority-driven and insight-led content","Maintain structured content calendars, documentation, and publishing schedules","Stay updated with evolving content trends, search behavior, and AI-led discovery"],skills:["Strong writing, editing, and storytelling abilities","Understanding of SEO, AEO, and content structure","Ability to research and simplify complex topics","Knowledge of brand tone and messaging consistency","Experience writing blogs, website content, and social media copies","Effective utilization of AI tools for research and optimization","Attention to detail and content quality","Ability to meet deadlines consistently"]},{title:"Graphic Designer",location:"Coimbatore",openings:2,seo:{title:"Graphic Designer Jobs | Careers at Priyam Consultancy",description:"Looking for Graphic Designer jobs? Join Priyam Consultancy to work on branding, social media creatives, websites, and marketing campaigns. ",keywords:"Graphic Designer Career , Graphic Designer Jobs, SEO Content Writer Jobs",canonical:"https://www.priyamconsultancy.com/career/graphic-designer/"},experience:"Bachelor's degree or equivalent qualification with 2+ years of graphic design experience.",desc:"Create visually compelling graphics, marketing creatives, and brand assets that communicate effectively across digital and print channels.",jobDescription:["Design creatives for digital marketing and branding","Maintain visual consistency across platforms","Collaborate with marketing and content teams","Create ad creatives, banners, and social visuals","Revise designs based on feedback","Maintain organized design assets","Stay updated with design trends and tools"],skills:["Strong understanding of design principles and branding","Experience with Adobe, CorelDraw, Canva","Ability to design creatives for social media, ads, and websites","Visual storytelling and layout skills","Attention to brand consistency and detail","Effective utilization of AI design tools for ideation and speed","Time management and creative problem-solving","Ability to work collaboratively with teams"]},{title:"HR Executive",location:"Coimbatore",openings:2,seo:{title:"HR Executive Jobs | Careers at Priyam Consultancy ",description:"Join Priyam Consultancy as an HR Executive and gain practical experience in recruitment, onboarding, employee engagement, and HR operations. ",keywords:"HR Executive Jobs, HR Executive Jobs ,HR career",canonical:"https://www.priyamconsultancy.com/career/hr-executive/"},experience:"Bachelor's degree in Human Resources, Business Administration, or related field with 1+ years of HR or recruitment experience.",desc:"Support end-to-end recruitment, employee engagement, and HR operations to build a strong, motivated workforce aligned with organisational goals.",jobDescription:["Manage end-to-end recruitment and candidate coordination","Handle onboarding and employee documentation processes","Support employee engagement and internal communication activities","Coordinate interviews and maintain hiring records","Assist in implementing HR policies and procedures","Maintain employee databases and attendance records","Support management in day-to-day HR operations","Stay updated with HR practices and recruitment trends"],skills:["Strong understanding of recruitment, onboarding, and employee coordination","Good communication and interpersonal skills","Knowledge of HR processes, policies, and documentation","Ability to manage employee records and recruitment databases","Familiarity with MS Office and HR management tools","Strong organizational and multitasking abilities","Problem-solving mindset with attention to detail","Ability to work independently and within teams"]},{title:"Video Editor",location:"Coimbatore",openings:2,seo:{title:"Video Editor Jobs | Careers at Priyam Consultancy  ",description:"Apply for Video Editor jobs at Priyam Consultancy. Create engaging video content, reels, marketing campaigns, and brand stories for diverse clients",keywords:"Video Editor Career, Video Editing Jobs, Video Editor Jobs, Video Production Jobs",canonical:"https://www.priyamconsultancy.com/career/video-editor/"},experience:"Bachelor's degree or equivalent practical experience with 1+ years of professional video editing experience.",desc:"Edit raw footage into engaging, high-quality videos aligned with brand goals by incorporating music, sound design, colour grading, and motion graphics.",jobDescription:["Edit engaging videos for marketing, branding, and social media platforms","Create high-quality visual content aligned with brand guidelines","Collaborate with creative and marketing teams for campaign execution","Add motion graphics, effects, subtitles, and audio enhancements","Optimize videos for different digital platforms and formats","Manage revisions and deliver projects within deadlines","Organize project files and maintain editing workflows","Stay updated with current editing trends and creative techniques"],skills:["Strong proficiency in Adobe Premiere Pro, After Effects, and video editing tools","Understanding of motion graphics, transitions, and storytelling techniques","Ability to edit content for social media, branding, and marketing campaigns","Knowledge of video formats, color correction, and audio balancing","Creativity with strong visual communication skills","Ability to manage multiple editing projects efficiently","Effective utilization of AI tools for editing and content enhancement","Attention to detail and time management skills"]},{title:"Web Developer Intern",location:"Coimbatore",openings:2,seo:{title:"Web Developer Internship | Careers at Priyam Consultancy",description:"Apply for a Web Developer Internship at Priyam Consultancy. Gain hands-on experience in website development, coding, and real-world client projects.  ",keywords:"Web Developer Internship,Web Development Internship,Web Developer Intern Jobs",canonical:"https://www.priyamconsultancy.com/career/web-developer-intern/"},experience:"Student / Fresher pursuing or completed a relevant degree.",desc:"Assist the development team in building and maintaining web applications while gaining hands-on experience in modern web technologies and real-world projects.",jobDescription:["Assist in website development tasks","Support senior developers on live projects","Learn performance and SEO best practices","Debug and test website features","Maintain basic documentation","Apply learnings through hands-on execution","Continuously improve technical skills"],skills:["Basic knowledge of web development fundamentals","Willingness to learn modern development practices","Interest in website performance and optimization","Basic understanding of HTML, CSS, or JavaScript","Problem-solving mindset","Effective utilization of AI tools for learning and development","Good communication skills","Ability to follow guidance and instructions"]},{title:"Digital Marketing Intern",location:"Coimbatore",openings:2,seo:{title:"Digital Marketing Internship | Careers at Priyam Consultancy ",description:" Looking for a Digital Marketing Internship? Work on real client projects and build practical skills in SEO, PPC, social media, and analytics. ",keywords:"Digital Marketing Internship,Digital Marketing Intern ,Digital Marketing Internship in Coimbatore",canonical:"https://www.priyamconsultancy.com/career/digital-marketing-intern/"},experience:"Student / Fresher with interest in digital marketing.",desc:"Support the digital marketing team in executing campaigns, creating content, and analysing performance to build practical skills in a fast-paced marketing environment.",jobDescription:["Assist in SEO, AEO, GEO, ads, and social media tasks","Support campaign execution and reporting","Conduct market and keyword research","Learn analytics and performance tracking","Support content and lead generation activities","Maintain task documentation","Gain hands-on exposure to real campaigns"],skills:["Basic understanding of digital marketing concepts","Interest in SEO, AEO, GEO, ads, and social media","Willingness to learn analytics and tools","Research and data interpretation skills","Good communication skills","Effective utilization of AI tools for research and reporting","Curiosity and learning mindset","Ability to work in a team"]},{title:"Content Writer Intern",location:"Coimbatore",openings:2,seo:{title:"Content Writer Internship | Careers at Priyam Consultancy ",description:"Start your content writing career with a Content Writer Internship at Priyam Consultancy and gain practical experience in digital marketing. ",keywords:"Content Writer Internship,Content Writer Intern, Content Writing Internship , SEO Content Writer Internship",canonical:"http://localhost:3000/career/content-writer-intern/"},experience:"Student / Fresher with interest in writing and content creation.",desc:"Assist the content team in creating well-researched, engaging written content for digital platforms while developing core writing, editing, and SEO skills.",jobDescription:["Assist in writing blogs and social media content","Conduct research for content topics","Edit and refine content drafts","Learn SEO and content frameworks","Support senior writers","Maintain content schedules","Improve writing through practice and feedback"],skills:["Basic writing and grammar skills","Interest in digital content and marketing","Research and learning ability","Creativity and storytelling mindset","Attention to detail","Effective utilization of AI tools for content drafting","Time management skills","Openness to feedback"]},{title:"Graphic Designer Intern",location:"Coimbatore",openings:2,seo:{title:"Apply for a Graphic Design Internship | PCS  ",description:"Looking for a Graphic Design Internship? Work on real client projects, create engaging digital designs, and build a strong creative portfolio. ",keywords:"Graphic Design Internship ,Graphic Designer Intern,Graphic Design Internship",canonical:"https://www.priyamconsultancy.com/career/graphic-designer-intern"},experience:"Student / Fresher with basic design knowledge.",desc:"Support the design team in creating visually compelling graphics for digital and print channels while building proficiency in industry-standard design tools.",jobDescription:["Assist in creating marketing creatives","Support senior designers on projects","Learn brand guidelines and workflows","Design social media and basic visuals","Revise designs based on feedback","Maintain organized design assets","Improve skills through hands-on practice"],skills:["Basic understanding of design principles","Familiarity with design tools","Creativity and visual sense","Willingness to learn branding systems","Attention to detail","Effective utilization of AI design tools for ideation","Time management skills","Ability to accept feedback"]},{title:"HR Executive Intern",location:"Coimbatore",openings:2,seo:{title:"HR Executive Internship | Careers at Priyam Consultancy ",description:"Apply for an HR Internship at Priyam Consultancy. Gain hands-on experience in recruitment, onboarding, employee engagement, and HR operations. ",keywords:"HR Internship,HR Executive Intern,Human Resources Internship",canonical:"https://www.priyamconsultancy.com/career/hr-executive-intern/"},experience:"Pursuing or recently completed a degree in Human Resources, Business Administration, or related field.",desc:"Assist the HR team with recruitment coordination, employee engagement activities, and HR operations to gain practical exposure in core human resources functions.",jobDescription:["Assist the HR team in recruitment and onboarding activities","Schedule interviews and coordinate with candidates","Maintain employee and recruitment records","Support internal HR operations and documentation","Help with employee engagement initiatives","Assist in preparing reports and HR-related data","Coordinate communication between teams and candidates","Learn and support daily HR administrative tasks"],skills:["Good verbal and written communication skills","Basic understanding of recruitment and HR operations","Familiarity with MS Office and online recruitment platforms","Strong coordination and organizational abilities","Willingness to learn and adapt in a fast-paced environment","Attention to detail and professional attitude","Ability to manage tasks efficiently","Team collaboration and interpersonal skills"]},{title:"Video Editor Intern",location:"Coimbatore",openings:2,seo:{title:"Video Editing Internship | Careers at Priyam Consultancy ",description:"Looking for a Video Editing Internship? Work on real client projects, create engaging video content, and build a professional creative portfolio.   ",keywords:"Video Editor Intern, Video Editing Internship, Video Editing Internship",canonical:" https://www.priyamconsultancy.com/career/video-editor-intern/"},experience:"Pursuing or recently completed a degree in Visual Communication, Media, Multimedia, or related field.",desc:"Assist the creative team in editing video content for digital platforms while developing hands-on skills in post-production, colour grading, and motion graphics.",jobDescription:["Assist in editing videos for social media and marketing campaigns","Support the creative team with video production requirements","Add basic transitions, subtitles, and audio adjustments","Organize raw footage and project files efficiently","Participate in brainstorming and creative discussions","Assist with content formatting for different platforms","Learn editing workflows and content optimization techniques","Support the team in day-to-day video editing activities"],skills:["Basic knowledge of Adobe Premiere Pro, After Effects, or similar editing software","Understanding of video editing principles and storytelling","Interest in social media and digital content creation","Creativity and willingness to learn new editing techniques","Basic knowledge of audio editing and transitions","Ability to manage tasks and meet deadlines","Attention to detail and visual consistency","Team collaboration and communication skills"]}];function r(e){return e.toLowerCase().replace(/\s+/g,"-")}function s(e){return o.find(i=>r(i.title)===e)||null}},4854(e,i,n){n.r(i),n.d(i,{default:()=>r});var t=n(4848),a=n(5348);let o=(0,n(6763).l0)("hr-executive");function r(){return o?(0,t.jsx)(a.A,{role:o}):(0,t.jsx)("div",{children:"Role not found"})}}}]);