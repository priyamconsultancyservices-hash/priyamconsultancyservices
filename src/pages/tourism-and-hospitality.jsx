import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import CTASection from "../components/HomePage/CTA";
import Layout from '@theme/Layout';
const banner = "/img/tourism.webp";
import Head from '@docusaurus/Head';



function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/tourism-and-hospitality";
  const imageUrl = "https://www.pcsbusinesssolution.com/img/2.webp";

  const schemaData = [
    {
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
            "@id": "https://www.priyamconsultancy.com/tourism-and-hospitality/",
            "name": "Tourism & Hospitality"
          }
        }
      ]

    },
    {
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


    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.priyamconsultancy.com/tourism-and-hospitality/#service",
      "name": "Tourism & Hospitality Industry Services",
      "serviceType": "Business Solutions for Tourism & Hospitality Industry",
      "url": "https://www.priyamconsultancy.com/tourism-and-hospitality/",
      "description": "Priyam Consultancy provides digital marketing, SEO, website development, online booking engine integration, HR services, seasonal staffing solutions, payroll management, business registration, statutory compliance, Virtual CFO services, accounting and business consulting solutions tailored for hotels, resorts, travel agencies and tourism businesses across India.",
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
      }

    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "How can SEO help my hotel/tourism business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO improves your hotel or tourism business visibility on search engines by targeting travel-related keywords and optimizing website content. Better rankings help attract travelers, increase booking enquiries, improve local discoverability, and generate consistent organic traffic from potential customers searching online."
        }
      }, {
        "@type": "Question",
        "name": "Can you integrate online booking engine with hotel website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we integrate online booking engines with hotel and tourism websites to simplify reservations, room availability management, payment processing, and customer enquiries. These integrations improve user experience, streamline booking operations, and support higher direct booking conversions through your website."
        }
      }, {
        "@type": "Question",
        "name": "How do you handle seasonal staffing for tourism businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support tourism businesses with flexible recruitment solutions for seasonal staffing requirements. Our services include workforce planning, bulk hiring, onboarding support, payroll management, and temporary staffing coordination to help businesses manage peak travel seasons efficiently without operational disruptions."
        }
      }, {
        "@type": "Question",
        "name": "What business registration does a tourism/hotel business need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tourism and hotel businesses may require GST registration, trade license, FSSAI license, Shop and Establishment registration, fire safety approvals, pollution control clearances, and tourism department registrations. Required registrations depend on business type, services offered, and operational scale."
        }
      }, {
        "@type": "Question",
        "name": "What are the penalties for non-compliance in tourism?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Non-compliance in the tourism and hospitality industry can result in fines, license suspension, legal notices, operational restrictions, and reputational damage. Failure to maintain regulatory, tax, labor, or safety compliance may also affect business continuity and customer trust significantly."
        }
      }, {
        "@type": "Question",
        "name": "How can social media marketing help tourism businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Social media marketing helps tourism businesses improve destination visibility, attract travelers, showcase experiences, and increase booking enquiries. Engaging travel content, reels, campaigns, and targeted advertising help businesses build audience interest, strengthen brand awareness, and drive customer engagement across digital platforms."
        }
      }]

    },
  ];

  return (
    <Head>
      <title>Digital Marketing for Tourism | Website & HR Solutions</title>
      <meta name="description" content="Digital marketing helps tourism businesses by creating engaging content, targeted ads, and social media strategies to attract travelers and boost bookings." />
      <meta name="keywords" content="digital marketing for tourism, chef recruitment agency, Travel web design company, Tourism Website Development, hospitality recruitment agency" />
      <link rel="canonical" href="https://www.priyamconsultancy.com/tourism-and-hospitality" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Digital Marketing for Tourism | Website & HR Solutions" />
      <meta property="og:description" content="Digital marketing helps tourism businesses by creating engaging content, targeted ads, and social media strategies to attract travelers and boost bookings." />
      <meta property="og:url" content="https://www.priyamconsultancy.com/tourism-and-hospitality" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="PCS Business Solution" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Digital Marketing for Tourism | Website & HR Solutions" />
      <meta name="twitter:description" content="Digital marketing helps tourism businesses by creating engaging content, targeted ads, and social media strategies to attract travelers and boost bookings." />
      <meta name="twitter:image" content={imageUrl} />
      {schemaData.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Head>
  );
}

// EmailJS will be loaded via CDN in the component

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

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
  body { font-family: 'Poppins', sans-serif; background: var(--navy); color: #fff; overflow-x: hidden; }
li.dropdown.mega {
    color: black;
}

.left {
    width: 100%;
}
  /* HERO */
  .hero {
    min-height: 100vh;
    display: grid; grid-template-columns: 1fr 1fr;
    align-items: center; gap: 3rem;
    padding: 8rem 6% 4rem;
    position: relative; overflow: hidden;
    background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 60%, var(--navy-mid) 100%);
  }
  .hero::before {
    content:''; position:absolute; inset:0; pointer-events:none;
    background-image: linear-gradient(rgba(237,131,55,0.04) 1px,transparent 1px), linear-gradient(90deg,rgba(237,131,55,0.04) 1px,transparent 1px);
    background-size: 60px 60px;
    animation: grid-drift 20s linear infinite;
  }
  .hero::after {
    content:''; position:absolute; inset:0; pointer-events:none;
    background: radial-gradient(ellipse 60% 70% at 80% 50%, rgba(237,131,55,0.09) 0%, transparent 65%),
                radial-gradient(ellipse 50% 60% at 0% 0%, rgba(0,42,68,0.6) 0%, transparent 55%);
  }
  @keyframes grid-drift { from{background-position:0 0;} to{background-position:60px 60px;} }
  .hero-left { position:relative; z-index:2; }
  .badge {
    display:inline-flex; align-items:center; gap:.5rem;
    background:rgba(237,131,55,0.1); border:1px solid rgba(237,131,55,0.28);
    color:var(--orange); font-size:0.72rem; font-weight:700;
    padding:.38rem 1rem; border-radius:50px; letter-spacing:.09em; text-transform:uppercase;
    margin-bottom:1.4rem; animation:fadeUp .6s ease both;
  }
  .badge-dot { width:6px; height:6px; border-radius:50%; background:var(--orange); animation:pulse-dot 1.6s infinite; }
  @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:.4;transform:scale(1.5);} }
  .hero-heading {
    font-family:'Poppins',sans-serif;
    font-size:clamp(2rem,3.6vw,3.4rem);
    font-weight:800; line-height:1.1; letter-spacing:-.02em;
    margin-bottom:1.4rem; animation:fadeUp .7s .08s ease both;
  }
  .hero-heading .orange { color:var(--orange); }
  .hero-desc {
    font-size:.97rem; line-height:1.8; color:rgba(255,255,255,0.65);
    margin-bottom:2rem; max-width:500px; animation:fadeUp .7s .16s ease both;
  }
  .btn-fill {
    display:inline-flex; align-items:center; gap:.5rem;
    background:var(--orange); color:var(--navy);
    padding:.85rem 2rem; border-radius:50px;
    font-family:'Poppins',sans-serif; font-size:.92rem; font-weight:700;
    text-decoration:none; transition:all .22s;
    box-shadow:0 4px 22px rgba(237,131,55,.32);
    animation:fadeUp .7s .26s ease both; cursor:pointer; border:none;
  }
  .btn-fill:hover { background:var(--orange-light); transform:translateY(-2px); box-shadow:0 8px 30px rgba(237,131,55,.45); }
  @keyframes fadeUp { from{opacity:0;transform:translateY(26px);} to{opacity:1;transform:translateY(0);} }
  .hero-right {
    position:relative; z-index:2;
    display:flex; align-items:center; justify-content:center;
    animation:fadeUp .9s .15s ease both;
  }
  @media(max-width:900px){
    .hero{grid-template-columns:1fr;padding:7rem 5% 5rem;text-align:start;}
    .badge{margin:0 auto 1.4rem;}
  }

  /* ABOUT */
  .ap-section { position:relative; padding:7rem 6%; overflow:hidden; background:#ffffff; }
  .ap-bg { position:absolute; inset:0; pointer-events:none; z-index:0;
    background: radial-gradient(ellipse 60% 55% at 10% 20%, rgba(237,131,55,0.07) 0%, transparent 65%),
                radial-gradient(ellipse 50% 60% at 90% 80%, rgba(0,65,104,0.05) 0%, transparent 60%); }
  .ap-grid { position:absolute; inset:0; pointer-events:none; z-index:0;
    background-image: linear-gradient(rgba(0,65,104,0.03) 1px,transparent 1px), linear-gradient(90deg,rgba(0,65,104,0.03) 1px,transparent 1px);
    background-size: 64px 64px; }
  .ap-inner { position:relative; z-index:2; max-width:1200px; margin:0 auto;
    display:grid; grid-template-columns:1fr 1fr; gap:4rem; align-items:start; }
  .ap-eyebrow { display:inline-flex; align-items:center; gap:.5rem;
    font-family:'Poppins',sans-serif; font-size:.75rem; font-weight:700;
    color:var(--orange); letter-spacing:.12em; text-transform:uppercase; margin-bottom:1.2rem; }
  .ap-eyebrow-line { width:28px; height:2px; background:var(--orange); border-radius:2px; }
  .ap-heading { font-family:'Poppins',sans-serif; font-size:clamp(1.9rem,2.8vw,2.8rem);
    font-weight:800; line-height:1.12; letter-spacing:-.025em; color:#0d1f2d; margin-bottom:1.2rem; }
  .ap-heading span { color:var(--orange); }
  .ap-intro { font-size:.97rem; line-height:1.82; color:#5a6a7a; margin-bottom:.9rem; max-width:520px; }
  .ap-steps { display:flex; flex-direction:column; gap:1rem; margin-top:1.2rem; }
  .ap-step { display:flex; align-items:flex-start; gap:1.1rem;
    background:#fff; border:1px solid rgba(0,65,104,0.07);
    border-radius:16px; padding:1.2rem 1.4rem;
    box-shadow:0 2px 12px rgba(0,0,0,0.04);
    transition:transform .28s,box-shadow .28s,border-color .28s; }
  .ap-step:hover { transform:translateX(6px); box-shadow:0 6px 28px rgba(237,131,55,0.12); border-color:rgba(237,131,55,0.3); }
  .step-icon { width:44px; height:44px; flex-shrink:0; border-radius:12px;
    background:rgba(237,131,55,0.10); color:var(--orange);
    display:flex; align-items:center; justify-content:center; font-size:1.2rem;
    transition:background .28s,color .28s; }
  .ap-step:hover .step-icon { background:var(--orange); color:#fff; }
  .step-body { flex:1; }
  .step-title { font-family:'Poppins',sans-serif; font-size:.95rem; font-weight:700; color:#0d1f2d; margin-bottom:.2rem; }
  .step-desc { font-size:.86rem; line-height:1.65; color:#6b7a8d; }
  .ap-form-wrap { position:relative; }
  .ap-form-wrap::before { content:''; position:absolute; inset:12px -10px -10px 10px;
    background:linear-gradient(135deg,var(--orange),var(--orange-light));
    border-radius:24px; opacity:.18; z-index:0; }
  .ap-form-card { position:relative; z-index:1; background:#fff;
    border-radius:22px; padding:2.6rem 2.2rem;
    box-shadow:0 12px 48px rgba(0,0,0,0.09);
    border:1px solid rgba(237,131,55,0.12); }
  .form-card-header { text-align:center; margin-bottom:1.8rem; }
  .form-card-title { font-family:'Poppins',sans-serif; font-size:1.3rem; font-weight:800; color:#0d1f2d; margin-bottom:.3rem; }
  .form-card-sub { font-size:.88rem; color:#7a8a9a; }
  .fl-group { position:relative; margin-bottom:1.1rem; }
  .fl-input { width:100%; padding:.82rem 1.1rem; background:#f7f9fc;
    border:1.5px solid rgba(0,65,104,0.1); border-radius:10px;
    font-family:'Poppins',sans-serif; font-size:.92rem; color:#0d1f2d;
    outline:none; transition:border-color .25s,box-shadow .25s; }
  .fl-input:focus { border-color:var(--orange); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
  .fl-group label { position:absolute; top:50%; left:1.1rem; transform:translateY(-50%);
    font-size:.88rem; color:#9aabb8; pointer-events:none; transition:all .22s; }
  .fl-input:not(:placeholder-shown) ~ label,
  .fl-input:focus ~ label { top:-.52rem; font-size:.72rem; color:var(--orange); background:#fff; padding:0 .3rem; left:.85rem; }
  .phone-row { display:flex; gap:.6rem; align-items:center; }
  .phone-flag-btn { display:flex; align-items:center; gap:.3rem;
    padding:.82rem .9rem; background:#f7f9fc;
    border:1.5px solid rgba(0,65,104,0.1); border-radius:10px;
    font-size:.88rem; color:#0d1f2d; white-space:nowrap; }
  .phone-row .fl-input { flex:1; }
  .fl-textarea { width:100%; padding:1rem 1.1rem; background:#f7f9fc;
    border:1.5px solid rgba(0,65,104,0.1); border-radius:10px;
    font-family:'Poppins',sans-serif; font-size:.92rem; color:#0d1f2d;
    outline:none; resize:none; min-height:90px; transition:border-color .25s,box-shadow .25s; }
  .fl-textarea:focus { border-color:var(--orange); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
  .ap-submit { width:100%; padding:.9rem; background:var(--orange); color:var(--navy);
    border:none; border-radius:10px; font-family:'Poppins',sans-serif;
    font-size:.95rem; font-weight:700; cursor:pointer;
    transition:background .22s,transform .18s,box-shadow .22s;
    box-shadow:0 4px 18px rgba(237,131,55,0.28); }
  .ap-submit:hover { background:var(--orange-light); transform:translateY(-2px); box-shadow:0 8px 28px rgba(237,131,55,0.38); }
  @media(max-width:900px){ .ap-inner{grid-template-columns:1fr;} }

  /* WHY PCS (Section 3) */
  .why-section { position:relative; padding:7rem 6%; overflow:hidden; background:#08456b; }
  .why-section::before { content:none; }
  .why-particles { position:absolute; inset:0; overflow:hidden; pointer-events:none; z-index:1; }
  .why-p { position:absolute; border-radius:50%; opacity:0.12; animation:fp 7s ease-in-out infinite; }
  .why-p:nth-child(1){ width:90px;height:90px;background:var(--orange);top:10%;left:5%;animation-delay:0s; }
  .why-p:nth-child(2){ width:60px;height:60px;background:#60a5fa;top:60%;left:15%;animation-delay:1.5s; }
  .why-p:nth-child(3){ width:110px;height:110px;background:var(--navy-mid);top:20%;right:8%;animation-delay:0.8s; }
  .why-p:nth-child(4){ width:50px;height:50px;background:#34d399;bottom:15%;right:18%;animation-delay:2.2s; }
  .why-p:nth-child(5){ width:75px;height:75px;background:var(--orange-light);bottom:30%;left:40%;animation-delay:1s; }
  @keyframes fp { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(-22px) scale(1.1);} }
  .why-section::after {
    content:''; position:absolute; inset:0; pointer-events:none; z-index:0;
    background: radial-gradient(ellipse 50% 60% at 90% 20%, rgba(237,131,55,0.12) 0%, transparent 60%),
                radial-gradient(ellipse 40% 50% at 5% 80%, rgba(10,82,130,0.35) 0%, transparent 55%);
  }
  .why-inner { position:relative; z-index:2; margin:0 auto; }
  .why-top-header { text-align:center; margin-bottom:3.5rem; }
  .why-eyebrow { display:inline-block; font-size:.72rem; font-weight:700; color:var(--orange);
    letter-spacing:.18em; text-transform:uppercase; margin-bottom:.9rem;
    background:rgba(237,131,55,0.1); border:1px solid rgba(237,131,55,0.28);
    padding:.3rem .9rem; border-radius:50px; }
  .why-heading { font-family:'Poppins',sans-serif; font-size:clamp(1.8rem,2.8vw,2.7rem);
    font-weight:700; line-height:1.1; color:#fff; margin-bottom:1rem; }
  .why-heading span { color:var(--orange); }
.why-desc { font-size:.95rem; line-height:1.82; color:rgba(255, 255, 255, 0.94); margin:0 auto; padding-top:15px;}
  .why-stats-row { display:grid; grid-template-columns:repeat(4,1fr); gap:1.2rem; margin-bottom:3rem; }
  .why-stat-pill { background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1);
    border-radius:16px; padding:1.6rem 1.4rem; text-align:center;
    transition:background .28s, border-color .28s, transform .28s; position:relative; overflow:hidden; }
  .why-stat-pill::before { content:''; position:absolute; top:0; left:0; right:0; height:2px;
    background:linear-gradient(90deg,var(--orange),var(--orange-light)); opacity:0; transition:opacity .28s; }
  .why-stat-pill:hover { background:rgba(237,131,55,0.08); border-color:rgba(237,131,55,0.35); transform:translateY(-4px); }
  .why-stat-pill:hover::before { opacity:1; }
  .why-stat-num { font-family:'Poppins',sans-serif; font-size:2.2rem; font-weight:800; color:var(--orange); line-height:1; margin-bottom:.35rem; }
  .why-stat-lbl { font-size:.72rem; color:rgba(255,255,255,0.5); letter-spacing:.06em; font-weight:600; text-transform:uppercase; }
  .why-cards-row { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; }
  .why-feat-card { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.09);
    border-radius:20px; padding:2rem; display:flex; align-items:flex-start; gap:1.4rem;
    transition:background .3s, border-color .3s, transform .3s; position:relative; overflow:hidden; }
  .why-feat-card:hover { background:rgba(255,255,255,0.07); border-color:rgba(237,131,55,0.28); transform:translateY(-4px); }
  .why-feat-icon-wrap { width:52px; height:52px; border-radius:14px; flex-shrink:0;
    background:linear-gradient(135deg,rgba(237,131,55,0.2),rgba(237,131,55,0.08));
    border:1.5px solid rgba(237,131,55,0.3);
    display:flex; align-items:center; justify-content:center; font-size:1.4rem; }
  .why-feat-title { font-family:'Poppins',sans-serif; font-size:1.05rem; font-weight:800; color:#fff; margin-bottom:.4rem; }
  .why-feat-desc { font-size:.875rem; line-height:1.72; color:rgba(255,255,255,0.5); }
  @media(max-width:900px){ .why-stats-row{grid-template-columns:1fr 1fr;} .why-cards-row{grid-template-columns:1fr;} }

  /* PCS SECTION (Why Businesses Choose) */
  .pcs-section { position:relative; padding:7rem 6%; overflow:hidden;
    background:linear-gradient(135deg,var(--navy-deep) 0%,#003558 40%,var(--navy-mid) 100%); }
  .pcs-section::before {
    content:''; position:absolute; inset:0; pointer-events:none;
    background: linear-gradient(135deg,rgba(237,131,55,0.06) 25%,transparent 25%) -60px 0,
      linear-gradient(225deg,rgba(237,131,55,0.06) 25%,transparent 25%) -60px 0,
      linear-gradient(315deg,rgba(237,131,55,0.06) 25%,transparent 25%),
      linear-gradient(45deg,rgba(237,131,55,0.06) 25%,transparent 25%);
    background-size:120px 120px;
  }
  .pcs-section::after {
    content:''; position:absolute; inset:0; pointer-events:none;
    background: radial-gradient(ellipse 60% 55% at 5% 50%,rgba(237,131,55,0.1) 0%,transparent 55%),
                radial-gradient(ellipse 55% 60% at 95% 50%,rgba(10,82,130,0.4) 0%,transparent 55%);
  }
  .pcs-inner { position:relative; z-index:2; margin:0 auto; }
  .pcs-header { text-align:center; margin-bottom:3.5rem; display:flex; flex-direction:column; align-items:center; }
  .pcs-tag { font-family:'Poppins',sans-serif; font-size:.68rem; letter-spacing:.2em;
    text-transform:uppercase; color:var(--orange); background:rgba(237,131,55,0.12);
    padding:.3rem .8rem; border-radius:4px; display:inline-block; margin-bottom:1rem;
    border:1px solid rgba(237,131,55,0.28); align-self:center; }
  .pcs-h2 { font-family:'Poppins',sans-serif; font-size:clamp(1.8rem,2.8vw,2.5rem); font-weight:700; color:#fff; line-height:1.1; margin-bottom:1rem; text-align:center; }
  .pcs-h2 span { color:var(--orange); }
  .pcs-lead { font-size:.95rem; line-height:1.8; color:rgb(255, 255, 255);  margin:20px auto; text-align:center; }
  .pcs-radial-layout { display:grid; grid-template-columns:1fr 340px 1fr; gap:0; align-items:center;  margin:0 auto; }
  .pcs-radial-col { display:flex; flex-direction:column; gap:2.4rem; padding:1rem 0; }
  .pcs-radial-col.right { align-items:flex-start; padding-left:90px; }
  .pcs-radial-col.left { align-items:flex-end; padding-right:90px; }
  .pcs-point { display:flex; align-items:flex-start; gap:1.1rem; max-width:310px; position:relative; }
  .pcs-radial-col.left .pcs-point { flex-direction:row-reverse; text-align:right; }
  .pcs-radial-col.left .pcs-point-body { align-items:flex-end; display:flex; flex-direction:column; }
  .pcs-point-line { position:absolute; top:22px; width:80px; height:2px; background:linear-gradient(90deg,rgba(237,131,55,0.08),rgba(237,131,55,0.7)); }
  .pcs-radial-col.right .pcs-point-line { left:-85px; }
  .pcs-radial-col.left .pcs-point-line { right:-85px; left:auto; background:linear-gradient(270deg,rgba(237,131,55,0.08),rgba(237,131,55,0.7)); }
  .pcs-point-icon-wrap { width:46px; height:46px; border-radius:12px; flex-shrink:0;
    display:flex; align-items:center; justify-content:center; font-size:1.3rem; border:1.5px solid;
    transition:transform .3s, box-shadow .3s; }
  .pcs-point:hover .pcs-point-icon-wrap { transform:scale(1.12); box-shadow:0 6px 20px rgba(0,0,0,0.3); }
  .pcs-point-num { font-family:'Poppins',sans-serif; font-size:.65rem; font-weight:700; letter-spacing:.2em;
    text-transform:uppercase;  margin-bottom:.5rem; display:block; }
  .pcs-point-title { font-family:'Poppins',sans-serif; font-size:.95rem; font-weight:600; color:#ed8337; margin-bottom:.7rem; line-height:1.2; }
  .pcs-point-desc { font-size:.84rem; line-height:1.7; color:rgba(255, 255, 255, 0.91); font-family:'Poppins',sans-serif; }
  .pcs-radial-center { display:flex; align-items:center; justify-content:center; position:relative; }
  .pcs-center-ring-outer { width:300px; height:300px; border-radius:50%; position:relative;
    display:flex; align-items:center; justify-content:center;
    border:1.5px solid rgba(237,131,55,0.18);  }
  @keyframes slow-spin { to{transform:rotate(360deg);} }
  .pcs-center-ring-outer::before,.pcs-center-ring-outer::after { content:''; position:absolute; width:10px; height:10px; border-radius:50%; background:var(--orange); opacity:0.7; }
  .pcs-center-ring-outer::before { top:-5px; left:50%; transform:translateX(-50%); }
  .pcs-center-ring-outer::after { bottom:-5px; left:50%; transform:translateX(-50%); }
  .pcs-center-ring-inner { width:230px; height:230px; border-radius:50%;
    border:1.5px dashed rgba(255,255,255,0.08);
    display:flex; align-items:center; justify-content:center;
     }
  .pcs-center-hub { width:170px; height:170px; border-radius:50%;
    background:linear-gradient(135deg,rgba(237,131,55,0.18) 0%,rgba(0,65,104,0.5) 100%);
    border:2px solid rgba(237,131,55,0.35);
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    text-align:center; padding:1rem;
    box-shadow:0 0 60px rgba(237,131,55,0.15),inset 0 0 40px rgba(0,0,0,0.2); }
  .pcs-center-emoji { font-size:2rem; margin-bottom:.4rem; }
  .pcs-center-label { font-family:'Poppins',sans-serif; font-size:.75rem; font-weight:800; color:#fff; line-height:1.3; }
  .pcs-center-sub { font-size:.6rem; color:var(--orange); font-weight:700; letter-spacing:.1em; text-transform:uppercase; margin-top:.2rem; }
  @media(max-width:900px){
    .pcs-radial-layout {
      grid-template-columns: 1fr !important;
      gap: 0rem !important;
    }
    /* Center ring goes first (order:0), then left col (order:1), then right col (order:2) */
    .pcs-radial-center { order:0 !important; }
    .pcs-radial-col.left { order:1 !important; align-items:flex-start !important; padding-right:0 !important; }
    .pcs-radial-col.right { order:2 !important; align-items:flex-start !important; padding-left:0 !important; }
    /* Fix left col cards direction */
    .pcs-radial-col.left .pcs-point { flex-direction:row !important; text-align:left !important; }
    .pcs-radial-col.left .pcs-point-body { align-items:flex-start !important; display:flex !important; flex-direction:column !important; }
    .pcs-point-line { display:none !important; }
    .pcs-center-ring-outer { width:220px; height:220px; }
    .pcs-center-ring-inner { width:170px; height:170px; }
    .pcs-center-hub { width:130px; height:130px; }
    /* Make all points consistent left-align */
    .pcs-point { max-width:100% !important; }
  }

  /* CHALLENGES */
  #why-choose { background:#ffffff !important; }
  #why-choose .why-heading { color:#000; }
  #why-choose .why-eyebrow { color:var(--orange); border-color:rgba(237,131,55,0.28); }
  #why-choose .why-desc { color:#5a6a7a; }
  .chal-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.4rem; margin-bottom:1.4rem; }
  .chal-grid-2 { display:grid; grid-template-columns:repeat(2,1fr); gap:1.4rem; max-width:68%; margin:0 auto; }
  .chal-num-tag { font-family:'Poppins',sans-serif; font-size:.55rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; margin-bottom:.3rem; }
  .chal-card-title { font-family:'Poppins',sans-serif; font-size:.97rem; font-weight:600; color:#0d1f2d; line-height:1.25; margin-bottom:.4rem; }
  .chal-card-desc { font-size:.86rem; line-height:1.72; color:#000; font-family:'Poppins',sans-serif; }
  .chal-card {
    display:flex; align-items:center; gap:1.4rem;
    border-radius:18px; padding:1.6rem;
    border-left-width:4px; border-left-style:solid;
    border-top:1px solid; border-right:1px solid; border-bottom:1px solid;
    transition:transform .3s, background .3s, box-shadow .3s;
    position:relative; overflow:hidden;
  }
  .chal-card:hover { transform:translateX(6px); box-shadow:0 8px 32px rgba(0,0,0,0.1); }
  .chal-card-icon { flex-shrink:0; width:60px; height:60px; }
  .chal-card-body { flex:1; }

  /* Color variants */
  .chal-c1 { background:rgba(237,131,55,0.06); border-left-color:var(--orange); border-top-color:rgba(237,131,55,0.18); border-right-color:rgba(237,131,55,0.18); border-bottom-color:rgba(237,131,55,0.18); }
  .chal-c1:hover { background:rgba(237,131,55,0.1); box-shadow:0 8px 32px rgba(237,131,55,0.12); }
  .chal-c1 .chal-num-tag { color:rgba(237,131,55,0.7); }

  .chal-c2 { background:rgba(237,131,55,0.06); border-left-color:var(--orange); border-top-color:rgba(237,131,55,0.18); border-right-color:rgba(237,131,55,0.18); border-bottom-color:rgba(237,131,55,0.18); }
  .chal-c2:hover { background:rgba(237,131,55,0.1); box-shadow:0 8px 32px rgba(237,131,55,0.12); }
  .chal-c2 .chal-num-tag { color:rgba(237,131,55,0.7); }

  .chal-c3 { background:rgba(237,131,55,0.06); border-left-color:var(--orange); border-top-color:rgba(237,131,55,0.18); border-right-color:rgba(237,131,55,0.18); border-bottom-color:rgba(237,131,55,0.18); }
  .chal-c3:hover { background:rgba(237,131,55,0.1); box-shadow:0 8px 32px rgba(237,131,55,0.12); }
  .chal-c3 .chal-num-tag {  color:rgba(237,131,55,0.7); }

  .chal-c4 { background:rgba(237,131,55,0.06); border-left-color:var(--orange); border-top-color:rgba(237,131,55,0.18); border-right-color:rgba(237,131,55,0.18); border-bottom-color:rgba(237,131,55,0.18); }
  .chal-c4:hover { background:rgba(237,131,55,0.1); box-shadow:0 8px 32px rgba(237,131,55,0.12); }
  .chal-c4 .chal-num-tag {  color:rgba(237,131,55,0.7);}

  .chal-c5 { background:rgba(237,131,55,0.06); border-left-color:var(--orange); border-top-color:rgba(237,131,55,0.18); border-right-color:rgba(237,131,55,0.18); border-bottom-color:rgba(237,131,55,0.18); }
  .chal-c5:hover { background:rgba(237,131,55,0.1); box-shadow:0 8px 32px rgba(237,131,55,0.12); }
  .chal-c5 .chal-num-tag {  color:rgba(237,131,55,0.7); }

  .chal-icon { display:block; width:58px; height:58px; flex-shrink:0; }

  @media(max-width:1024px){ .chal-grid{grid-template-columns:1fr 1fr;} .chal-grid-2{grid-template-columns:1fr 1fr;max-width:100%;} }
  @media(max-width:640px){ .chal-grid,.chal-grid-2{grid-template-columns:1fr;max-width:100%;} .chal-card{flex-direction:row;} }

  /* CASE STUDY */
  .cs-section { position:relative; padding:7rem 6%; overflow:hidden;
    background:linear-gradient(135deg,var(--navy-deep) 0%,#003558 45%,var(--navy-mid) 100%); }
  .cs-section::before { content:''; position:absolute; inset:0; pointer-events:none;
    background-image:radial-gradient(circle,rgba(255,255,255,0.035) 1px,transparent 1px); background-size:34px 34px; }
  .cs-section::after { content:''; position:absolute; inset:0; pointer-events:none;
    background: radial-gradient(ellipse 55% 60% at 5% 50%,rgba(237,131,55,0.09) 0%,transparent 60%),
                radial-gradient(ellipse 50% 55% at 95% 30%,rgba(10,82,130,0.35) 0%,transparent 55%); }
  .cs-inner { position:relative; z-index:2; max-width:1100px; margin:0 auto; }
  .cs-eyebrow { display:inline-flex; align-items:center; gap:.5rem; font-size:.72rem; font-weight:700; color:var(--orange);
    letter-spacing:.18em; text-transform:uppercase; margin-bottom:1rem;
    background:rgba(237,131,55,0.1); border:1px solid rgba(237,131,55,0.28); padding:.3rem .9rem; border-radius:50px; }
  .cs-header { text-align:center; margin-bottom:3.5rem; }
  .cs-h2 { font-family:'Poppins',sans-serif; font-size:clamp(1.9rem,2.8vw,2.7rem); font-weight:700; color:#fff; line-height:1.1;  margin-bottom:.8rem; }
  .cs-h2 span { color:var(--orange); }
  .cs-lead { font-size:.95rem; line-height:1.82; color:rgba(255, 255, 255, 0.93);  margin:0 auto; padding-top:15px; }
  .cs-quote-wrap { position:relative; text-align:center; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.09);
    border-radius:28px; padding:3.5rem 4rem 3rem; margin-bottom:3rem; overflow:hidden; }
  .cs-quote-wrap::before { content:''; position:absolute; inset:0; pointer-events:none; background:linear-gradient(135deg,rgba(237,131,55,0.06) 0%,transparent 60%); }
  .cs-q-mark { font-family:'Poppins',sans-serif; font-size:10rem; font-weight:900; line-height:.6;
    color:rgba(237,131,55,0.14); position:absolute; top:1.2rem; left:2.5rem; pointer-events:none; user-select:none; }
  .cs-q-mark-r { font-family:'Poppins',sans-serif; font-size:10rem; font-weight:900; line-height:.6;
    color:rgba(237,131,55,0.1); position:absolute; bottom:1.2rem; right:2.5rem; pointer-events:none; user-select:none; }
  .cs-quote-text { font-family:'Poppins',sans-serif; font-size:clamp(1.1rem,2vw,1.5rem); font-weight:700;
    color:#fff; line-height:1.55; letter-spacing:-.01em; position:relative; z-index:2; max-width:720px; margin:0 auto 1.5rem; }
  .cs-quote-text em { color:var(--orange); font-style:normal; }
  .cs-quote-attr { display:inline-flex; align-items:center; gap:.6rem; font-size:.94rem; font-style: italic; font-weight:600; color:rgba(255, 255, 255, 0.94);
    letter-spacing:.08em; position:relative; z-index:2; }
  .cs-quote-line { width:32px; height:2px; background:var(--orange); border-radius:2px; }

  /* ===== GLOBAL RESPONSIVE ===== */
  @media(max-width:1024px){
    .hero { padding:7rem 5% 4rem; gap:2rem; }
    .ap-inner { gap:2.5rem; }
    .pcs-radial-layout { grid-template-columns:1fr; gap:2.5rem; }
    .pcs-radial-col.left, .pcs-radial-col.right { align-items:flex-start; padding-left:0; padding-right:0; }
    .pcs-radial-col.left .pcs-point { flex-direction:row; text-align:left; }
    .pcs-radial-col.left .pcs-point-body { align-items:flex-start; }
    .pcs-point-line { display:none; }
    .pcs-radial-center { order:-1; }
  }
  @media(max-width:900px){
    .hero { grid-template-columns:1fr; padding:7rem 5% 5rem; text-align:start; }
    .badge { margin:0 auto 1.4rem; }
    .ap-inner { grid-template-columns:1fr; }
    .why-stats-row { grid-template-columns:1fr 1fr; }
    .why-cards-row { grid-template-columns:1fr; }
    .pcs-center-ring-outer { width:220px; height:220px; }
    .pcs-center-ring-inner { width:170px; height:170px; }
    .pcs-center-hub { width:130px; height:130px; }
  }
  @media(max-width:768px){
    .pcs-nav { padding:1rem 5%; }
    .nav-links { display:none; }
    .nav-btn { display:none; }
    .hero { padding:6rem 5% 4rem; }
    .hero-heading { font-size:clamp(1.8rem,6vw,2.8rem); }
    .ap-section, .why-section, .pcs-section, .cs-section { padding:5rem 5%; }
    .ap-form-card { padding:2rem 1.5rem; }
    .why-stats-row { grid-template-columns:1fr 1fr; gap:1rem; }
    .cs-quote-wrap { padding:2.5rem 2rem 2rem; }
    .cs-q-mark, .cs-q-mark-r { font-size:6rem; }
  }
  @media(max-width:640px){
    .hero { grid-template-columns:1fr; }
    .hero-right { display:none; }
    .ap-intro { font-size:.9rem; }
    .why-stats-row { grid-template-columns:1fr 1fr; }
    .chal-grid { grid-template-columns:1fr; }
    .chal-grid-2 { grid-template-columns:1fr; max-width:100%; }
    .chal-card { gap:1rem; padding:1.3rem; }
    .chal-icon { width:48px; height:48px; }
  }
  @media(max-width:480px){
    .hero-heading { font-size:1.8rem; }
    .ap-heading, .why-heading, .pcs-h2, .cs-h2 { font-size:1.7rem; }
    .why-stats-row { grid-template-columns:1fr 1fr; gap:.8rem; }
    .why-stat-num { font-size:1.7rem; }
    .pcs-point {  gap:.7rem; }
    .pcs-point-body { width:100%; }
    .cs-quote-wrap { padding:2rem 1.2rem; }
    .ap-form-card { padding:1.5rem 1rem; }
  }
@media (max-width: 768px) {
    .faq-wrapper {
        display: block;
    }
}
//   faq  section
.faq-section {background: #fff!important;  }
.faq-head h2 {color: #000}

/* ===== HERO SECTION RESPONSIVE ===== */
.seo-hero-section {
  grid-template-columns: 1fr 1fr;
}
@media(max-width:900px){
  .seo-hero-section {
    grid-template-columns: 1fr !important;
    padding: 5rem 5% 3rem !important;
  }
  .hero-content-left { order:1 !important; text-align:start !important; padding: 3rem 0;}
  .hero-img-right { order:2 !important; }
  .seo-badge { margin:0 !important; }
  .seo-sub { max-width:100% !important; text-align:start !important; }
  .seo-actions { justify-content:flex-start !important; }
}
@media(max-width:640px){
  .seo-hero-section { padding:4.5rem 4% 2.5rem !important; gap:1.5rem !important; }
}
@media(max-width:480px){
  .seo-hero-section { padding:4rem 4% 2rem !important; }
  .seo-hero-heading { font-size:clamp(1.6rem,5vw,2.5rem) !important; font-weight:600 !important; }
}

/* ===== APPROACH (SECTION 2) FORM RESPONSIVE ===== */
@media(max-width:900px){
  .ap2-inner { grid-template-columns:1fr !important; gap:2.5rem !important; }
  .ap2-form-wrap { max-width:100% !important; }
}
@media(max-width:640px){
  .ap2-fl-row { grid-template-columns:1fr !important; }
  .ap2-form-card { padding:2rem 1.4rem !important; }
}
@media(max-width:480px){
  .ap2-heading { font-size:1.6rem !important; }
  .ap2-form-card { padding:1.6rem 1rem !important; }
}

/* ===== WHY PCS RADIAL RESPONSIVE ===== */
@media(max-width:640px){
  .why-cards-row { grid-template-columns:1fr !important; }
  .why-stats-row { grid-template-columns:1fr 1fr !important; gap:0.8rem !important; }
}
@media(max-width:480px){
  .pcs-center-ring-outer { width:180px !important; height:180px !important; }
  .pcs-center-ring-inner { width:140px !important; height:140px !important; }
  .pcs-center-hub { width:110px !important; height:110px !important; }
  .pcs-h2, .ap-heading, .why-heading, .cs-h2 { font-size:1.5rem !important; }
}

/* ===== CHALLENGES RESPONSIVE ===== */
@media(max-width:768px){
  .chal-grid { grid-template-columns:1fr 1fr !important; }
  .chal-grid-2 { grid-template-columns:1fr 1fr !important; max-width:100% !important; }
}
@media(max-width:560px){
  .chal-grid, .chal-grid-2 { grid-template-columns:1fr !important; max-width:100% !important; }
  .chal-card { flex-direction:row !important; gap:1rem !important; padding:1.2rem !important; }
}

/* ===== FAQ RESPONSIVE ===== */
@media(max-width:768px){
  .faq-wrapper { grid-template-columns:1fr !important; }
  .container { padding:0 5% !important; }
  .faq-head h2 { font-size:1.6rem !important; }
}
@media(max-width:480px){
  .faq-head h2 { font-size:1.4rem !important; }
}

/* ===== CASE STUDY RESPONSIVE ===== */
@media(max-width:640px){
  .cs-quote-wrap { padding:2rem 1.2rem !important; }
  .cs-q-mark, .cs-q-mark-r { font-size:5rem !important; }
  .cs-quote-text { font-size:1rem !important; }
}

/* ===== GENERAL SECTION PADDING ===== */
@media(max-width:768px){
  .ap-section, .why-section, .pcs-section, .cs-section { padding:4rem 5% !important; }
  #approach { padding:4rem 5% !important; }
}
@media(max-width:480px){
  .ap-section, .why-section, .pcs-section, .cs-section { padding:3rem 4% !important; }
  #approach { padding:3rem 4% !important; }
}

/* ===== APPROACH SECTION 1 FORM RESPONSIVE ===== */
@media(max-width:480px){
  .ap-form-card { padding:1.5rem 1rem !important; }
  .phone-row { flex-wrap:wrap !important; }
}
  h3.faq-h3{font-size:2.5rem; color:#000;}
`;
/* ═══════════════════════════════════════════
   SECTION 1 — HERO BANNER (Finance Orange Theme)
═══════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="seo-hero-section" style={{
      minHeight: "95vh",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      gap: "2rem",
      padding: "5rem 6% 4rem",
      position: "relative",
      overflow: "hidden",
      backgroundImage: `url(${banner})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <style>{`
        @media(max-width:1008px){
          .hero-overlay { background: #004168d4 !important; }
        }
        @media(max-width:480px){
          .hero-overlay { background: #004168d4!important; }
        }
        .seo-badge { display:inline-flex; align-items:center; gap:0.5rem; background:rgba(237,131,55,0.12); border:1px solid rgba(237,131,55,0.32); color:#ed8337; font-size:0.7rem; font-weight:700; padding:0.38rem 1rem; border-radius:50px; letter-spacing:0.09em; text-transform:uppercase; width:fit-content; animation:fadeUp .6s ease both; backdrop-filter:none; }
        .badge-dot-red { width:6px; height:6px; border-radius:50%; background:#ed8337; animation:pulse-dot 1.7s ease-in-out infinite; }
        .seo-hero-heading { width:100%; max-width:750px; font-family:'Poppins',sans-serif; font-size:clamp(2rem,3.6vw,3.3rem); font-weight:600; line-height:1.15; margin-top:1.3rem; color:#ffffff; text-shadow:0 2px 12px rgba(0,0,0,0.5); animation:fadeUp .7s .08s ease both; }
        .seo-red { color:#ed8337; }
        .seo-underline { position:relative; display:inline-block; }
        .seo-underline::after { content:''; position:absolute; left:0; bottom:-4px; width:100%; height:4px; background:linear-gradient(90deg,#ed8337,#f5a66b); border-radius:3px; transform:scaleX(0); transform-origin:left; animation:line-in .65s 0.8s ease forwards; }
        @keyframes line-in { from{transform:scaleX(0);} to{transform:scaleX(1);} }
        .seo-sub { margin-top:1.4rem; font-size:0.97rem; line-height:1.82; color:rgba(255,255,255,0.92); max-width:750px; width:100%; animation:fadeUp .7s .16s ease both; text-shadow:0 1px 6px rgba(0,0,0,0.4); }
        .seo-actions { margin-top:2rem; display:flex; gap:1rem; align-items:center; animation:fadeUp .7s .26s ease both; }
        .seo-btn-fill { background:linear-gradient(135deg,#ed8337,#f5a66b); color:#fff; padding:0.88rem 2.1rem; border-radius:50px; font-family:'DM Sans',sans-serif; font-size:0.93rem; font-weight:700; text-decoration:none; display:inline-flex; align-items:center; gap:0.55rem; box-shadow:0 6px 26px rgba(237,131,55,0.5); transition:all .22s; }
        .seo-btn-fill:hover { transform:translateY(-3px); box-shadow:0 10px 34px rgba(237,131,55,0.6); }
        .seo-btn-arr { width:24px; height:24px; border-radius:50%; background:rgba(2,43,68,0.35); display:flex; align-items:center; justify-content:center; font-size:0.9rem; }
        .hero-orb { position:absolute; border-radius:50%; pointer-events:none; filter:blur(80px); animation:orb-drift 8s ease-in-out infinite alternate; }
        .hero-orb-1 { width:400px; height:400px; background:rgba(237,131,55,0.06); top:-80px; right:8%; }
        .hero-orb-2 { width:280px; height:280px; background:rgba(10,54,82,0.8); bottom:-60px; left:5%; animation-delay:2s; }
        /* hero-img-right hidden — image is now background */
        .hero-img-right { display:none !important; }
        @media(max-width:900px){
          .seo-hero-section { grid-template-columns:1fr !important; padding:5rem 5% 3rem !important; }
          .hero-content-left { order:1 !important; text-align:start !important; }
          .seo-badge { margin:0 !important; }
          .seo-sub { max-width:100% !important; text-align:start !important; }
          .seo-actions { justify-content:flex-start !important; }
        }
        @media(max-width:640px){
          .seo-hero-section { grid-template-columns:1fr !important; padding:5rem 5% 3rem !important; text-align:left !important; }
          .hero-content-left { order:1 !important; align-items:flex-start !important; text-align:start !important; }
          .seo-badge { margin:0 !important; }
          .seo-sub { max-width:100% !important; text-align:left !important; font-size:0.88rem !important; }
          .seo-actions { justify-content:flex-start !important; flex-wrap:wrap; }
        }
        @media(max-width:480px){
          .seo-hero-section { padding:5rem 4% 2.5rem !important; min-height:100svh !important; background-position:top right !important; }
          .seo-hero-heading { font-size:clamp(1.5rem,7.5vw,1.7rem) !important; font-weight:600 !important; color:#fff !important; line-height:1.2 !important; text-shadow:0 2px 12px rgba(0,0,0,0.6) !important; }
          .seo-sub { font-size:0.84rem !important; color:rgba(255,255,255,0.95) !important; line-height:1.7 !important; text-shadow:0 1px 8px rgba(0,0,0,0.5) !important; margin-top:1rem !important; }
          .seo-badge { font-size:0.65rem !important; }
          .seo-btn-fill { padding:0.78rem 1.6rem !important; font-size:0.85rem !important; }
        }
        @media(max-width:380px){
          .seo-hero-heading { font-size:clamp(1.4rem,7vw,1.7rem) !important; font-weight:600 !important; }
          .seo-sub { font-size:0.8rem !important; }
        }
      `}</style>

      {/* Dark overlay for text readability */}
      <div className="hero-overlay" style={{ position: "absolute", inset: 0, zIndex: 1 }} />

      {/* Orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      {/* LEFT CONTENT — order:1 on mobile (comes first) */}
      <div className="hero-content-left" style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", paddingBottom: "3rem", order: 1 }}>
        <div className="seo-badge"><div className="badge-dot-red" />Tourism & Hospitality </div>
        <h1 className="seo-hero-heading">
          Driving  Excellence
          in <span className="seo-underline seo-red">Tourism &amp; Hospitality</span>
          with Excellence
        </h1>
        <p className="seo-sub">
          We support your business journey with registration, compliance, HR solutions, digital transformation, and digital marketing for tourism — all in one place, ensuring seamless operations, stronger visibility, and scalable growth at every stage.     </p>
        <div className="seo-actions">
          <a className="seo-btn-fill" href="#approach"><span>Get in Touch</span><div className="seo-btn-arr">›</div></a>
        </div>
      </div>

      {/* RIGHT — empty, banner image shows through */}
      <div style={{ order: 2 }} />

      {/* Mobile: collapse to 1 col, full cover */}
      <style>{`
        @media(max-width:900px){
          .seo-hero-section { grid-template-columns:1fr !important; min-height:100svh !important; background-size:cover !important; background-position:center !important; }
        }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SECTION 2 — OUR APPROACH + FORM
═══════════════════════════════════════════ */
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
      .then(() => { alert("Message Sent Successfully ✅"); setForm({ name: "", email: "", phone: "", company: "", msg: "" }); })
      .catch(() => alert("Failed to send ❌"));
  };

  return (
    <section id="approach" style={{ background: "#ffffff", padding: "5rem 6%", position: "relative", overflow: "hidden" }}>
      <style>{`
        /* eyebrow shared */
        .seo-eyebrow-wrap { display:flex; align-items:center; gap:12px; margin-bottom:12px; }
        .seo-eyebrow-line { flex:0 0 32px; height:2px; background:linear-gradient(90deg,#ed8337,transparent); border-radius:2px; }
        .seo-eyebrow-line-right { background:linear-gradient(270deg,#ed8337,transparent); }
        .seo-eyebrow-text { font-family:'Poppins',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#ed8337; }

        /* approach layout */
        .ap2-inner { position:relative; z-index:2;  margin:0 auto; display:grid; grid-template-columns:1fr 0.75fr; gap:4rem; align-items:center; }
        .ap2-heading { font-family:'Poppins',sans-serif;font-weight:700; font-size:clamp(1.9rem,2.8vw,2.4rem); line-height:1.12; color:#000; margin-bottom:1.2rem; }
        .ap2-heading span { color:#ed8337; }
        .ap2-intro { font-size:0.97rem; line-height:1.8; color:rgba(2,43,68,0.72); margin-bottom:1.2rem; }

        /* form card */
        .ap2-form-wrap { position:relative; max-width:460px; }
        .ap2-form-wrap::before { content:''; position:absolute; inset:-2px; background:linear-gradient(135deg,rgba(237,131,55,0.5),rgba(2,43,68,0.08),rgba(237,131,55,0.5)); border-radius:26px; z-index:0; }
        .ap2-form-card { position:relative; z-index:1; background:#004168; border-radius:24px; padding:2.8rem 2.6rem; box-shadow:0 24px 60px rgba(2,43,68,0.18),0 0 40px rgba(237,131,55,0.06); border:1px solid rgba(237,131,55,0.18); text-align:center; }
        .ap2-form-eyebrow { display:inline-flex; align-items:center; gap:8px; font-family:'Poppins',sans-serif; font-size:0.6rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#ed8337; margin-bottom:0.8rem; }
        .ap2-form-eyebrow-line { width:22px; height:1px; background:#ed8337; }
        .ap2-form-title { font-family:'Poppins',sans-serif; font-size:1.7rem; font-weight:800; color:#fff; line-height:1.15; margin-bottom:2.4rem; }
        .ap2-form-title span { color:#ed8337; }
        .ap2-fl-row { display:grid; grid-template-columns:1fr 1fr; gap:0.85rem; }
        .ap2-fl-group { position:relative; margin-bottom:1rem; }
        .ap2-fl-label { display:block; font-family:'Poppins',sans-serif; font-size:0.65rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:#ed8337; margin-bottom:0.4rem; text-align:start; }
        .ap2-fl-input, .ap2-fl-textarea { width:100%; padding:0.82rem 1rem 0.82rem 2.6rem; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; font-family:'DM Sans',sans-serif; font-size:0.88rem; color:#fff; background:rgba(255,255,255,0.04); outline:none; transition:all 0.22s; }
        .ap2-fl-input::placeholder, .ap2-fl-textarea::placeholder { color:rgba(255,255,255,0.3); }
        .ap2-fl-input:focus, .ap2-fl-textarea:focus { border-color:#ed8337; background:rgba(237,131,55,0.06); box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .ap2-fl-icon { position:absolute; left:0.85rem; top:50%; transform:translateY(-50%); font-size:0.95rem; opacity:0.5; pointer-events:none; }
        .ap2-fl-textarea { min-height:88px; resize:none; padding-top:0.82rem; padding-left:2.6rem; }
        .ap2-phone-row { display:flex; border:1.5px solid rgba(237,131,55,0.2); border-radius:10px; overflow:hidden; background:rgba(255,255,255,0.04); transition:all 0.22s; }
        .ap2-phone-row:focus-within { border-color:#ed8337; box-shadow:0 0 0 3px rgba(237,131,55,0.1); }
        .ap2-phone-flag { display:flex; align-items:center; gap:0.3rem; padding:0 0.85rem; font-size:0.82rem; font-weight:700; color:#fff; border-right:1.5px solid rgba(237,131,55,0.2); white-space:nowrap; background:rgba(237,131,55,0.08); flex-shrink:0; }
        .ap2-phone-row .ap2-fl-input { border:none; border-radius:0; background:transparent; box-shadow:none; padding:0.82rem 1rem; }
        .ap2-submit { width:100%; background:linear-gradient(135deg,#ed8337,#f5a66b); color:#fff; border:none; padding:1rem 1.5rem; border-radius:12px; font-family:'Poppins',sans-serif; font-size:0.97rem; font-weight:600; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:0.6rem; transition:all 0.2s; }
        .ap2-submit:hover { transform:translateY(-2px); box-shadow:0 12px 36px rgba(237,131,55,0.5); }
        .ap2-submit-arrow { display:inline-flex; align-items:center; justify-content:center; width:24px; height:24px; border-radius:50%; background:rgba(2,43,68,0.25); font-size:0.9rem; }
        @media(max-width:900px){ .ap2-inner{grid-template-columns:1fr !important;} }
      `}</style>

      <div className="ap2-inner">
        {/* LEFT */}
        <div>
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>About Industry</div>
          </div>
          <h2 className="ap2-heading"><span>Tourism & Hospitality Industry   </span> — Experience Meets Opportunity</h2>
          <p className="ap2-intro">
            The tourism and hospitality industry is built on experiences, spanning travel agencies, hotels, resorts, and service providers — offering vast opportunities for growth.    </p>
          <p className="ap2-intro">
            However, in today’s competitive landscape, success depends on more than service quality. Digital presence, customer engagement, workforce management, and operational efficiency are critical. Businesses investing in digital marketing for tourism are better positioned to attract, engage, and retain customers. That’s where PCS steps in with end-to-end support.</p>

        </div>

        {/* RIGHT FORM */}
        <div className="ap2-form-wrap">
          <div className="ap2-form-card">
            <div className="ap2-form-eyebrow">
              <span className="ap2-form-eyebrow-line" />Your Growth, Our Mission<span className="ap2-form-eyebrow-line" />
            </div>
            <div className="ap2-form-title">Get Your <span>Free</span> SEO Audit</div>
            <form onSubmit={sendEmail}>
              <div className="ap2-fl-row">
                <div className="ap2-fl-group">
                  <label className="ap2-fl-label">Your Name</label>
                  <div style={{ position: "relative" }}>
                    <span className="ap2-fl-icon">👤</span>
                    <input className="ap2-fl-input" type="text" name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
                  </div>
                </div>
                <div className="ap2-fl-group">
                  <label className="ap2-fl-label">Company</label>
                  <div style={{ position: "relative" }}>
                    <span className="ap2-fl-icon">🏢</span>
                    <input className="ap2-fl-input" type="text" name="company" placeholder="Company name" value={form.company} onChange={handleChange} />
                  </div>
                </div>
              </div>
              <div className="ap2-fl-group">
                <label className="ap2-fl-label">Email Address</label>
                <div style={{ position: "relative" }}>
                  <span className="ap2-fl-icon">✉️</span>
                  <input className="ap2-fl-input" type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="ap2-fl-group">
                <label className="ap2-fl-label">Mobile Number</label>
                <div className="ap2-phone-row">
                  <div className="ap2-phone-flag"><span>📞</span></div>
                  <input className="ap2-fl-input" type="tel" name="phone" placeholder="Mobile number" value={form.phone} onChange={handleChange} maxLength="10" pattern="[0-9]{10}" required />
                </div>
              </div>
              <div className="ap2-fl-group">
                <label className="ap2-fl-label">Message</label>
                <div style={{ position: "relative" }}>
                  <span className="ap2-fl-icon" style={{ top: "0.9rem", transform: "none" }}>💬</span>
                  <textarea className="ap2-fl-textarea" name="msg" placeholder="Tell us about your SEO goals..." value={form.msg} onChange={handleChange} />
                </div>
              </div>
              <button type="submit" className="ap2-submit">
                Get Free SEO Audit <span className="ap2-submit-arrow">›</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 3: WHY PCS
───────────────────────────────────────── */
function WhyPCSSection() {
  return (
    <section className="pcs-section" id="why-pcs">
      <div className="pcs-inner">
        <div className="pcs-header">
          <div className="partners-header1">
            <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Challenges</h2>
          </div>          <h3 className="pcs-h2">The Biggest Challenges in the  <span><i>Tourism & Hospitality Industry  </i></span> Today</h3>
          <p className="pcs-lead">
            Running a tourism or hospitality business comes with its own set of challenges. Here are the most common ones:     </p>
        </div>
        <div className="pcs-radial-layout">
          {/* LEFT */}
          <div className="pcs-radial-col left">
            {[
              { num: "01 · Expertise", title: "Compliance Complexity", desc: " Managing registrations, licenses, and regulatory requirements can be time-consuming.", icon: "/img/icon/tourism-hp-compliance.webp", iconStyle: { background: "rgba(0,65,104,0.3)", borderColor: "rgba(0,130,210,0.5)" } },
              { num: "02 · Approach", title: "Digital Absence ", desc: " Lack of a strong online presence highlights the need for Tourism Website Development and a reliable Travel web design company.", icon: "/img/icon/tourism-hp-digital-absence.webp", iconStyle: { background: "rgba(237,131,55,0.2)", borderColor: "rgba(237,131,55,0.5)" } },
              { num: "03 · Reliability", title: "Customer Reach", desc: " Without effective digital marketing for tourism, businesses struggle to attract the right audience and bookings", icon: "/img/icon/tourism-hp-buyer-reach.webp", iconStyle: { background: "rgba(10,82,130,0.3)", borderColor: "rgba(20,120,190,0.5)" } },
            ].map((p, i) => (
              <div className="pcs-point" key={i}>
                <div className="pcs-point-line"></div>
                <div className="pcs-point-icon-wrap" style={p.iconStyle}><img src={p.icon} alt={p.title} style={{ width: "30px", height: "30px", objectFit: "contain" }} /></div>
                <div className="pcs-point-body">
                  <span className="pcs-point-num">{p.num}</span>
                  <h4 className="pcs-point-title">{p.title}</h4>
                  <div className="pcs-point-desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
          {/* CENTER */}
          <div className="pcs-radial-center">
            <div className="pcs-center-ring-outer">
              <div className="pcs-center-ring-inner">
                <div className="pcs-center-hub">
                  <div className="pcs-center-emoji"><img src="/img/icon/tourism-hp.webp" alt="PCS" style={{ width: "36px", height: "36px", objectFit: "contain" }} /></div>
                  <div className="pcs-center-label">PCS Tourism & Hospitality Industry </div>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="pcs-radial-col right">
            {[
              { num: "04 · Growth", title: "Workforce Challenges", desc: " Hiring skilled staff increases the need for a trusted hospitality recruitment agency and chef recruitment agency.", icon: "/img/icon/tourism-hp-workforce.webp", iconStyle: { background: "rgba(201,109,26,0.2)", borderColor: "rgba(237,131,55,0.5)" } },
              { num: "05 · Delivery", title: "Seasonal Demand Fluctuation", desc: "Managing demand across peak and off-peak seasons impacts revenue stability.", icon: "/img/icon/tourism-hp-demand.webp", iconStyle: { background: "rgba(0,42,68,0.4)", borderColor: "rgba(0,100,170,0.5)" } },
              { num: "06 · Value", title: "Brand Visibility", desc: " Low online visibility reduces bookings and customer trust.", icon: "/img/icon/tourism-hp-brand-visibility.webp", iconStyle: { background: "rgba(20,102,160,0.3)", borderColor: "rgba(30,140,210,0.5)" } },
            ].map((p, i) => (
              <div className="pcs-point" key={i}>
                <div className="pcs-point-icon-wrap" style={p.iconStyle}><img src={p.icon} alt={p.title} style={{ width: "30px", height: "30px", objectFit: "contain" }} /></div>
                <div className="pcs-point-body">
                  <span className="pcs-point-num">{p.num}</span>
                  <h4 className="pcs-point-title">{p.title}</h4>
                  <div className="pcs-point-desc">{p.desc}</div>
                </div>
                <div className="pcs-point-line"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 4: OUR SOLUTIONS (TABS)
───────────────────────────────────────── */
const solutionTabs = [
  {
    num: "01",
    label: "Registration",
    tag: "01 — Compliance",
    title: "Business Registration & Compliance",
    desc: "Comprehensive support covering company registration, statutory compliance, accounting, GST, payroll, and audits — all in one place. From setup to financial guidance like banking, loans, CMA reports, company valuations, and Virtual CFO services, we ensure your business runs smoothly and stays compliant.",
    progress: "20%",
  },
  {
    num: "02",
    label: "Digital Marketing",
    tag: "02 — Web",
    title: "Digital Marketing for Tourism",
    desc: "Our digital marketing for tourism strategies are designed to increase visibility, drive bookings, and enhance customer engagement. Through SEO, paid campaigns, content, and social media, we help your brand stand out in a competitive market.",
    progress: "40%",
  },
  {
    num: "03",
    label: "Website Development ",
    tag: "03 — Trust",
    title: "Tourism Website Development",
    desc: "Professional Tourism Website Development by a trusted Travel web design company, creating responsive, user-friendly, and high-performing websites that drive engagement and conversions.",
    progress: "60%",
  },
  {
    num: "04",
    label: "HR Solutions",
    tag: "04 — HR Management",
    title: "Hospitality Workforce & HR Solutions",
    desc: "End-to-end HR support, including recruitment through a hospitality recruitment agency and chef recruitment agency, ensuring skilled staffing, efficient workforce management, and smooth operations.",
    progress: "80%",
  },
  {
    num: "05",
    label: "Digital Transformation  ",
    tag: "05 — Visibility",
    title: "Digital Transformation Solutions ",
    desc: "Smart solutions to streamline operations. From automation and custom applications to data-driven insights, we help improve efficiency and customer experience.",
    progress: "100%",
  },
];

function ChallengesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setIsMobile(w <= 600);
      setIsTablet(w > 600 && w <= 900);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const isSmall = isTablet;
  const current = solutionTabs[activeTab];

  return (
    <section id="why-choose" style={{
      background: "#ffffff",
      padding: isMobile ? "4rem 5%" : isTablet ? "5rem 5%" : "7rem 6%",
      fontFamily: "'Poppins', sans-serif",
    }}>

      {/* ── Section Header ── */}
      <div style={{ textAlign: "center", marginBottom: isMobile ? "2rem" : "3rem" }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "12px", marginBottom: "14px",
        }}>
          <h2 className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Solutions</h2>

        </div>
        <h3 style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: isMobile ? "22px" : isTablet ? "28px" : "clamp(28px, 3.5vw, 40px)",
          fontWeight: "700", color: "#0d1f2d",
          lineHeight: "1.25", marginBottom: "12px",
        }}>
          How We Help {" "}
          <span style={{ color: "#ed8337", fontStyle: "italic" }}>
            Tourism & Hospitality
          </span>{" "} Businesses  Grow
          Grow
        </h3>
        <p style={{
          fontSize: isMobile ? "13px" : "15px", color: "#000000", fontWeight: "300",
          margin: "30px auto", lineHeight: "1.75",
        }}>
          From business registration to digital growth and website development, we provide the right solutions at every stage of your manufacturing business journey.
        </p>      </div>

      {/* ══════════════════════════════════
          MOBILE — Accordion (tab → content below each)
         ══════════════════════════════════ */}
      {isMobile ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "500px", margin: "0 auto" }}>
          {solutionTabs.map((tab, i) => {
            const isOpen = activeTab === i;
            return (
              <div key={i} style={{
                border: isOpen ? "1.5px solid #ed8337" : "1.5px solid #EDE6DF",
                borderRadius: "12px",
                overflow: "hidden",
                transition: "border-color 0.25s",
              }}>
                {/* Accordion Header */}
                <button
                  onClick={() => setActiveTab(isOpen ? -1 : i)}
                  style={{
                    width: "100%",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "14px 18px",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "13px",
                    fontWeight: isOpen ? "600" : "400",
                    color: isOpen ? "#ed8337" : "#3a3a3a",
                    background: isOpen ? "#FFF4EC" : "#ffffff",
                    border: "none", cursor: "pointer",
                    transition: "all 0.22s",
                    textAlign: "left",
                  }}
                >
                  <span>{tab.label}</span>
                  <span style={{
                    fontSize: "18px", fontWeight: "300",
                    color: isOpen ? "#ed8337" : "#aaa",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.25s",
                    lineHeight: "1",
                  }}>+</span>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div style={{
                    background: "#ffffff",
                    borderTop: "1px solid #EDE6DF",
                    padding: "18px 18px 20px",
                    animation: "accordionFadeIn 0.25s ease",
                  }}>
                    <p style={{
                      fontSize: "13px", color: "#5a6a7a",
                      lineHeight: "1.85", fontWeight: "300",
                      marginBottom: "14px",
                    }}>{tab.desc}</p>
                    {/* Progress bar */}
                    <div style={{ height: "2px", background: "#EDE6DF", borderRadius: "2px", overflow: "hidden" }}>
                      <div style={{
                        height: "100%", background: "#ed8337",
                        borderRadius: "2px", width: tab.progress,
                        transition: "width 0.4s ease",
                      }} />
                    </div>
                    <p style={{ fontSize: "10px", color: "#bbb", marginTop: "6px", letterSpacing: "1px" }}>
                      {i + 1} / {solutionTabs.length}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
          <style>{`@keyframes accordionFadeIn { from{opacity:0;transform:translateY(-6px);} to{opacity:1;transform:translateY(0);} }`}</style>
        </div>

      ) : (
        /* ══════════════════════════════════
           TABLET + DESKTOP — Horizontal tab bar
           ══════════════════════════════════ */
        <>
          <div style={{
            display: "flex", justifyContent: "center",
            borderBottom: "1.5px solid #EDE6DF",
            overflowX: "auto", gap: "0",
            scrollbarWidth: "none",
            maxWidth: "1100px", margin: "0 auto",
            WebkitOverflowScrolling: "touch",
          }}>
            {solutionTabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                style={{
                  display: "flex", alignItems: "center",
                  padding: isTablet ? "14px 16px" : "16px 24px",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: isTablet ? "12px" : "13px",
                  fontWeight: activeTab === i ? "600" : "400",
                  color: activeTab === i ? "#ed8337" : "#7A6E66",
                  background: "none", border: "none",
                  borderBottom: activeTab === i ? "2.5px solid #ed8337" : "2.5px solid transparent",
                  marginBottom: "-1.5px",
                  cursor: "pointer", whiteSpace: "nowrap",
                  transition: "color 0.25s",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Panel */}
          <div style={{
            maxWidth: "1100px", margin: "0 auto",
            background: "#ffffff",
            border: "1.5px solid #EDE6DF",
            borderTop: "none",
            borderRadius: "0 0 16px 16px",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: isSmall ? "1fr" : "1fr 1.4fr",
            minHeight: "320px",
          }}>
            {/* Left Pane */}
            <div style={{
              background: "#FFF9F5",
              padding: isTablet ? "32px 28px" : "44px 40px",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              textAlign: "center",
              borderRight: isSmall ? "none" : "1.5px solid #EDE6DF",
              borderBottom: isSmall ? "1.5px solid #EDE6DF" : "none",
              position: "relative", overflow: "hidden",
            }}>
              <span style={{
                position: "absolute", bottom: "-30px", left: "-30px",
                width: "120px", height: "120px", borderRadius: "50%",
                background: "#F5C49A", opacity: "0.18", pointerEvents: "none",
              }} />
              <h4 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: isTablet ? "19px" : "clamp(18px, 2.2vw, 24px)",
                fontWeight: "700", color: "#0d1f2d",
                lineHeight: "1.35", margin: "0",
              }}>{current.title}</h4>
            </div>

            {/* Right Pane */}
            <div style={{
              padding: isTablet ? "28px 24px" : "44px 44px 44px 40px",
              display: "flex", flexDirection: "column", justifyContent: "center",
            }}>
              <p style={{
                fontSize: "15px", color: "#7A6E66",
                lineHeight: "1.85", fontWeight: "300", marginBottom: "24px",
              }}>{current.desc}</p>
              <div style={{ height: "2px", background: "#EDE6DF", borderRadius: "2px", overflow: "hidden" }}>
                <div style={{
                  height: "100%", background: "#ed8337",
                  borderRadius: "2px", width: current.progress,
                  transition: "width 0.4s ease",
                }} />
              </div>
              <p style={{ fontSize: "11px", color: "#bbb", marginTop: "8px", letterSpacing: "1px" }}>
                {activeTab + 1} / {solutionTabs.length}
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 5: CASE STUDY
───────────────────────────────────────── */
function CaseStudySection() {
  return (
    <section className="cs-section" id="case-study">
      <div className="cs-inner">
        <div className="cs-header">
          <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Approach in</div>
          </div>          <h2 className="cs-h2">Real Results for <span>Real  Businesses</span></h2>
        </div>
        <div className="cs-quote-wrap">
          <div className="cs-q-mark">"</div>
          <div className="cs-q-mark-r">"</div>
          <p className="cs-quote-text">
            We have helped businesses across <em>industries streamline compliance</em>, build their <em>digital presence</em>, and achieve  <em>consistent growth.</em>
          </p>
          <div className="cs-quote-attr">
            <span className="cs-quote-line"></span>
            Explore Our Work
            <span className="cs-quote-line"></span>
          </div>
        </div>
      </div>
    </section>
  );
}


const faqData = [
  { q: "How can SEO help my hotel/tourism business?", a: "SEO improves your hotel or tourism business visibility on search engines by targeting travel-related keywords and optimizing website content. Better rankings help attract travelers, increase booking enquiries, improve local discoverability, and generate consistent organic traffic from potential customers searching online" },
  { q: "Can you integrate online booking engine with hotel website?", a: "Yes, we integrate online booking engines with hotel and tourism websites to simplify reservations, room availability management, payment processing, and customer enquiries. These integrations improve user experience, streamline booking operations, and support higher direct booking conversions through your website." },
  { q: "How do you handle seasonal staffing for tourism businesses?", a: "We support tourism businesses with flexible recruitment solutions for seasonal staffing requirements. Our services include workforce planning, bulk hiring, onboarding support, payroll management, and temporary staffing coordination to help businesses manage peak travel seasons efficiently without operational disruptions." },
  { q: "What business registration does a tourism/hotel business need?", a: "Tourism and hotel businesses may require GST registration, trade license, FSSAI license, Shop and Establishment registration, fire safety approvals, pollution control clearances, and tourism department registrations. Required registrations depend on business type, services offered, and operational scale." },
  { q: "What are the penalties for non-compliance in tourism?", a: " Non-compliance in the tourism and hospitality industry can result in fines, license suspension, legal notices, operational restrictions, and reputational damage. Failure to maintain regulatory, tax, labor, or safety compliance may also affect business continuity and customer trust significantly." },
  { q: "How can social media marketing help tourism businesses?", a: "Social media marketing helps tourism businesses improve destination visibility, attract travelers, showcase experiences, and increase booking enquiries. Engaging travel content, reels, campaigns, and targeted advertising help businesses build audience interest, strengthen brand awareness, and drive customer engagement across digital platforms." },
];
function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <section className="faq-section" style={{ background: "#ffffff" }}>
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
/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
export default function HealthcarePCS() {

  return (
    <Layout
      title="Digital Marketing for Tourism | Website & HR Solutions"
      description="Digital marketing helps tourism businesses by creating engaging content, targeted ads, and social media strategies to attract travelers and boost bookings."
    >
      <SEOHead />
      <style>{css}</style>
      <HeroSection />
      <ApproachSection />
      <WhyPCSSection />
      <ChallengesSection />
      <CaseStudySection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
}