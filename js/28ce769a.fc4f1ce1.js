"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["5309"],{1358(e,a,i){i.d(a,{A:()=>c});var r=i(4848),n=i(6540),t=i(1085),o=i(3572);let s="https://www.sterlo.com",l=`
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

  .careers-wrap {
    font-family: 'Poppins', sans-serif;
    background: #f0f4f8;
    color: #0d1f2d;
  }

  /* \u{2500}\u{2500} BANNER \u{2500}\u{2500} */
  .banner {
    position: relative;
    min-height: 340px;
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
    gap: 1.1rem;
    max-width: 700px;
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
  @keyframes pulse-dot {
    0%,100%{opacity:1;transform:scale(1)}
    50%{opacity:.4;transform:scale(1.5)}
  }
  .banner-title {
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 700;
    line-height: 1.1;
    color: #fff;
    animation: fadeUp .6s .08s ease both;
  }
  .banner-subtitle {
    font-size: .97rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.92);
    max-width: 560px;
    animation: fadeUp .65s .16s ease both;
  }
  @keyframes fadeUp {
    from{opacity:0;transform:translateY(24px)}
    to{opacity:1;transform:translateY(0)}
  }

  /* \u{2500}\u{2500} JOB DETAIL BODY \u{2500}\u{2500} */
  .jd-body {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 2.5rem;
    max-width: 1300px;
    margin: 0 auto;
    padding: 3rem 2rem;
    align-items: start;
  }

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
    transition: gap .2s;
    text-decoration: none;
  }
  .jd-back:hover { gap: .7rem; color: var(--blue); }

  .jd-meta-row {
    flex-wrap: wrap;
    padding: 24px;
    gap: 0;
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

  .jd-content { min-width: 0; }

  /* \u{2500}\u{2500} STICKY SIDEBAR \u{2500}\u{2500} */
  .jd-sidebar {
    position: sticky;
    top: 24px;
    align-self: start;
    height: fit-content;
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
    margin-top: 60px;
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
  .jd-sticky-divider {
    height: 1px;
    background: rgba(0,65,104,0.08);
  }
  .jd-sticky-info {
    display: flex;
    flex-direction: column;
    gap: .55rem;
  }
  .jd-info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .82rem;
    color: #6a7a8a;
  }
  .jd-info-row strong {
    color: #0d1f2d;
    font-weight: 700;
  }
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
    color: #9aaabb;
    text-align: center;
    line-height: 1.5;
  }

  /* \u{2500}\u{2500} MODAL \u{2500}\u{2500} */
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
  @keyframes slideUp {
    from{opacity:0;transform:translateY(30px)}
    to{opacity:1;transform:translateY(0)}
  }
  .modal-header {
    background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 60%, var(--navy-mid) 100%);
    padding: 1.8rem 2rem 1.5rem;
    border-radius: 22px 22px 0 0;
    position: relative;
  }
  .modal-header::before {
    content:'';position:absolute;inset:0;border-radius:22px 22px 0 0;
    background-image:linear-gradient(rgba(237,131,55,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(237,131,55,0.07) 1px,transparent 1px);
    background-size:40px 40px;pointer-events:none;
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
  .form-group.full { grid-column:1/-1; }
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

  @media (max-width: 860px) {
    .jd-body {
      display: flex;
      flex-direction: column;
      padding: 2.5rem 1.2rem;
      gap: 1.8rem;
    }
    .jd-content { order: 1; }
    .jd-sidebar { position: static; order: 2; width: 100%; }
  }
  @media (max-width: 520px) {
    .form-row { grid-template-columns: 1fr; }
    .modal-body { padding: 1.4rem 1.2rem 1.6rem; }
    .modal-header { padding: 1.4rem 1.2rem 1.2rem; }
  }
`;function d({role:e,onClose:a}){let[i,t]=(0,n.useState)({name:"",email:"",phone:"",experience:"",linkedin:"",cover:""}),[o,s]=(0,n.useState)(null),[l,c]=(0,n.useState)(!1),[m,p]=(0,n.useState)(!1),g=e=>a=>t(i=>({...i,[e]:a.target.value})),f=async()=>{if(i.name&&i.email&&i.phone){p(!0);try{let a="Not provided";if(o){let e=new FormData;e.append("file",o),e.append("upload_preset","PCS Career"),e.append("folder","sterlo_resumes");let i=await fetch("https://api.cloudinary.com/v1_1/dsmzvp3ew/raw/upload",{method:"POST",body:e}),r=await i.json();if(r.secure_url)a=r.secure_url;else throw Error("Resume upload failed. Please try again.")}let r=new FormData;r.append("_subject",`New Job Application \u{2014} ${e.title}`),r.append("name",i.name),r.append("email",i.email),r.append("phone",i.phone),r.append("role_title",e.title),r.append("location",e.location),r.append("years_of_experience",i.experience||"Not specified"),r.append("linkedin_profile",i.linkedin||"Not provided"),r.append("cover_note",i.cover||"Not provided"),r.append("resume_link",a);let n=await fetch("https://formspree.io/f/xbdqnqre",{method:"POST",body:r,headers:{Accept:"application/json"}}),t=await n.json();if(n.ok)c(!0);else{let e=t?.errors?.map(e=>e.message).join(", ")||"Something went wrong.";alert(`Error: ${e}`)}}catch(e){alert(e.message||"Network error. Please check your connection.")}finally{p(!1)}}};return(0,r.jsx)("div",{className:"modal-overlay",onClick:e=>e.target===e.currentTarget&&a(),children:(0,r.jsx)("div",{className:"modal-box",children:l?(0,r.jsxs)("div",{className:"modal-success",children:[(0,r.jsx)("div",{className:"success-icon",children:"\u2713"}),(0,r.jsx)("div",{className:"success-title",children:"Application Submitted!"}),(0,r.jsxs)("p",{className:"success-sub",children:["Thank you for applying for ",(0,r.jsx)("strong",{children:e.title}),". Our team will review your profile and get back to you within 3\u20135 business days."]}),(0,r.jsx)("button",{className:"success-close",onClick:a,children:"Close"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"modal-header",children:[(0,r.jsx)("button",{className:"modal-close",onClick:a,children:"\u2715"}),(0,r.jsx)("div",{className:"modal-eyebrow",children:"Apply Now"}),(0,r.jsx)("div",{className:"modal-title",children:e.title}),(0,r.jsxs)("div",{className:"modal-subtitle",children:["\u{1F4CD} ",e.location," \xa0\xb7\xa0 ",e.title.toLowerCase().includes("intern")?"Internship":"Full-time"," \xa0\xb7\xa0 ",e.openings," Opening",e.openings>1?"s":""]})]}),(0,r.jsxs)("div",{className:"modal-body",children:[(0,r.jsxs)("div",{className:"form-row",children:[(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsxs)("label",{className:"form-label",children:["Full Name ",(0,r.jsx)("span",{children:"*"})]}),(0,r.jsx)("input",{className:"form-input",placeholder:"John Doe",value:i.name,onChange:g("name")})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsxs)("label",{className:"form-label",children:["Phone Number ",(0,r.jsx)("span",{children:"*"})]}),(0,r.jsx)("input",{className:"form-input",placeholder:"+91 98765 43210",value:i.phone,onChange:g("phone")})]})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsxs)("label",{className:"form-label",children:["Email Address ",(0,r.jsx)("span",{children:"*"})]}),(0,r.jsx)("input",{className:"form-input",type:"email",placeholder:"you@email.com",value:i.email,onChange:g("email")})]}),(0,r.jsxs)("div",{className:"form-row",children:[(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{className:"form-label",children:"Years of Experience"}),(0,r.jsxs)("select",{className:"form-select",value:i.experience,onChange:g("experience"),children:[(0,r.jsx)("option",{value:"",children:"Select..."}),(0,r.jsx)("option",{children:"Fresher (0\u20131 yr)"}),(0,r.jsx)("option",{children:"1\u20133 Years"}),(0,r.jsx)("option",{children:"3\u20135 Years"}),(0,r.jsx)("option",{children:"5\u20138 Years"}),(0,r.jsx)("option",{children:"8+ Years"})]})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{className:"form-label",children:"LinkedIn Profile"}),(0,r.jsx)("input",{className:"form-input",placeholder:"linkedin.com/in/yourname",value:i.linkedin,onChange:g("linkedin")})]})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsxs)("label",{className:"form-label",children:["Upload Resume ",(0,r.jsx)("span",{children:"*"})]}),(0,r.jsxs)("div",{className:"file-upload-area",children:[(0,r.jsx)("input",{type:"file",accept:".pdf,.doc,.docx",onChange:e=>{let a=e.target.files[0];a&&s(a)}}),(0,r.jsx)("div",{className:"file-upload-icon",children:"\u{1F4C4}"}),(0,r.jsxs)("div",{className:"file-upload-text",children:[(0,r.jsx)("strong",{children:"Click to upload"})," or drag & drop",(0,r.jsx)("br",{}),"PDF, DOC, DOCX (max 5MB)"]}),o&&(0,r.jsxs)("div",{className:"file-name",children:["\u2713 ",o.name]})]})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{className:"form-label",children:"Cover Note"}),(0,r.jsx)("textarea",{className:"form-textarea",placeholder:"Tell us why you're a great fit for this role...",value:i.cover,onChange:g("cover")})]}),(0,r.jsx)("button",{className:"modal-submit",onClick:f,disabled:m||!i.name||!i.email||!i.phone,children:m?o?"\u{1F4E4} Uploading Resume...":"Submitting...":"Submit Application \u2192"})]})]})})})}function c({role:e}){let[a,i]=(0,n.useState)(!1),m=e.title.toLowerCase().replace(/\s+/g,"-"),p=`${s}/career/${m}`,g=e.title.toLowerCase().includes("intern"),f=e.bullets.indexOf("--- Skills Required ---"),x=-1===f?e.bullets:e.bullets.slice(0,f),u=-1===f?[]:e.bullets.slice(f+1),b={"@context":"https://schema.org","@type":"JobPosting",title:e.title,description:e.desc,identifier:{"@type":"PropertyValue",name:"Sterlo",value:m},datePosted:"2025-01-01",validThrough:"2025-12-31",employmentType:g?"INTERN":"FULL_TIME",hiringOrganization:{"@type":"Organization",name:"Sterlo",sameAs:s,logo:`${s}/img/logo.png`},jobLocation:{"@type":"Place",address:{"@type":"PostalAddress",addressLocality:"Coimbatore",addressRegion:"Tamil Nadu",addressCountry:"IN"}},experienceRequirements:e.experience,numberOfPositions:e.openings,url:p,directApply:!0},h={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:s},{"@type":"ListItem",position:2,name:"Careers",item:`${s}/careers`},{"@type":"ListItem",position:3,name:e.title,item:p}]};return(0,r.jsxs)(t.A,{children:[(0,r.jsxs)(o.A,{children:[(0,r.jsxs)("title",{children:[e.title," Jobs in Coimbatore | Sterlo Careers"]}),(0,r.jsx)("meta",{name:"description",content:`Apply for ${e.title} at Sterlo, Coimbatore. ${e.desc.slice(0,120)}. ${e.openings} openings available.`}),(0,r.jsx)("meta",{name:"keywords",content:`${e.title} jobs Coimbatore, ${e.title} careers, Sterlo ${e.title}, ${e.title} hiring Coimbatore`}),(0,r.jsx)("meta",{name:"robots",content:"index, follow"}),(0,r.jsx)("link",{rel:"canonical",href:p}),(0,r.jsx)("meta",{property:"og:type",content:"article"}),(0,r.jsx)("meta",{property:"og:title",content:`${e.title} | Sterlo Careers`}),(0,r.jsx)("meta",{property:"og:description",content:e.desc}),(0,r.jsx)("meta",{property:"og:url",content:p}),(0,r.jsx)("meta",{property:"og:image",content:`${s}/img/career.png`}),(0,r.jsx)("meta",{property:"og:site_name",content:"Sterlo"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:`${e.title} | Sterlo Careers`}),(0,r.jsx)("meta",{name:"twitter:description",content:e.desc}),(0,r.jsx)("meta",{name:"twitter:image",content:`${s}/img/career.png`}),(0,r.jsx)("script",{type:"application/ld+json",children:JSON.stringify(b)}),(0,r.jsx)("script",{type:"application/ld+json",children:JSON.stringify(h)})]}),(0,r.jsxs)("div",{className:"careers-wrap",children:[(0,r.jsx)("style",{children:l}),a&&(0,r.jsx)(d,{role:e,onClose:()=>i(!1)}),(0,r.jsx)("section",{className:"banner",children:(0,r.jsxs)("div",{className:"banner-inner",children:[(0,r.jsxs)("div",{className:"banner-eyebrow",children:[(0,r.jsx)("div",{className:"eyebrow-dot"}),"Open Position"]}),(0,r.jsx)("h1",{className:"banner-title",children:e.title}),(0,r.jsx)("p",{className:"banner-subtitle",children:e.desc})]})}),(0,r.jsxs)("div",{className:"jd-body",children:[(0,r.jsxs)("div",{className:"jd-content",children:[(0,r.jsx)("a",{className:"jd-back",href:"/careers",children:"\u2190 Back to Open Roles"}),(0,r.jsxs)("div",{className:"jd-meta-row",children:[(0,r.jsxs)("div",{className:"jd-meta-item",children:[(0,r.jsx)("span",{className:"jd-meta-label",children:"Location"}),(0,r.jsx)("span",{className:"jd-meta-value",children:e.location})]}),(0,r.jsx)("div",{className:"jd-meta-divider"}),(0,r.jsxs)("div",{className:"jd-meta-item",children:[(0,r.jsx)("span",{className:"jd-meta-label",children:"Number of Openings"}),(0,r.jsx)("span",{className:"jd-meta-value",children:e.openings})]}),(0,r.jsx)("div",{className:"jd-meta-divider"}),(0,r.jsxs)("div",{className:"jd-meta-item",children:[(0,r.jsx)("span",{className:"jd-meta-label",children:"Experience & Qualification"}),(0,r.jsx)("span",{className:"jd-meta-value",children:e.experience})]})]}),(0,r.jsxs)("div",{className:"jd-section",children:[(0,r.jsx)("h2",{className:"jd-section-title",children:"Job Description"}),(0,r.jsx)("ul",{className:"jd-bullets",children:x.map((e,a)=>(0,r.jsx)("li",{children:e},a))})]}),u.length>0&&(0,r.jsxs)("div",{className:"jd-section",children:[(0,r.jsx)("h2",{className:"jd-section-title",children:"Skills Required"}),(0,r.jsx)("ul",{className:"jd-bullets",children:u.map((e,a)=>(0,r.jsx)("li",{children:e},a))})]})]}),(0,r.jsx)("div",{className:"jd-sidebar",children:(0,r.jsxs)("div",{className:"jd-sticky-card",children:[(0,r.jsx)("div",{className:"jd-sticky-role",children:e.title}),(0,r.jsxs)("div",{className:"jd-sticky-loc",children:[(0,r.jsxs)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",stroke:"currentColor",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("path",{d:"M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"}),(0,r.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),e.location]}),(0,r.jsx)("div",{className:"jd-sticky-divider"}),(0,r.jsxs)("div",{className:"jd-sticky-info",children:[(0,r.jsxs)("div",{className:"jd-info-row",children:[(0,r.jsx)("span",{children:"Openings"}),(0,r.jsx)("strong",{children:e.openings})]}),(0,r.jsxs)("div",{className:"jd-info-row",children:[(0,r.jsx)("span",{children:"Type"}),(0,r.jsx)("strong",{children:g?"Internship":"Full-time"})]})]}),(0,r.jsx)("button",{className:"jd-apply-btn",onClick:()=>i(!0),children:"Apply Now"}),(0,r.jsx)("p",{className:"jd-apply-note",children:"We'll get back to you within 3\u20135 business days."})]})})]})]})]})}},496(e,a,i){i.r(a),i.d(a,{default:()=>o});var r=i(4848),n=i(1358);let t={title:"Content Writer",location:"Coimbatore",openings:2,experience:"Bachelor's degree or equivalent qualification with 2+ years of content writing experience. 1\u20133 Years in Content Writing or Copywriting. Any Graduate in English, Journalism, or related field.",desc:"Create compelling, SEO-optimised content across blogs, website pages, social media, and marketing collaterals that communicates our brand voice and drives audience engagement.",bullets:["Create high-quality content for blogs, websites, ads, and social media platforms","Plan, research, and execute content aligned with brand positioning and business goals","Align content strategy with SEO, AEO, and lead generation objectives","Collaborate closely with marketing teams on campaign-based content execution","Edit, refine, and optimize content for clarity, engagement, and performance","Conduct in-depth research to support authority-driven and insight-led content","Maintain structured content calendars, documentation, and publishing schedules","Stay updated with evolving content trends, search behavior, and AI-led discovery","--- Skills Required ---","Strong writing, editing, and storytelling abilities","Understanding of SEO, AEO, and content structure","Ability to research and simplify complex topics","Knowledge of brand tone and messaging consistency","Experience writing blogs, website content, and social media copies","Effective utilization of AI tools for research and optimization","Attention to detail and content quality","Ability to meet deadlines consistently"]};function o(){return(0,r.jsx)(n.A,{role:t})}}}]);