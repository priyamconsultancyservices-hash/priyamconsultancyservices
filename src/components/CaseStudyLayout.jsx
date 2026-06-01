/**
 * CaseStudyLayout.jsx
 * ───────────────────
 * Shared layout used by ALL 16 individual case study pages.
 * Place this file at:  src/components/CaseStudyLayout.jsx
 *
 * Each individual page imports it like:
 *   import CaseStudyLayout from '@site/src/components/CaseStudyLayout';
 */

import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

/* ─────────────────────────────────────────
   SLUG HELPER
───────────────────────────────────────── */
function toSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/* ─────────────────────────────────────────
   ALL CARDS — sidebar "Recent Case Studies"
───────────────────────────────────────── */
const allCards = [
  { id:1,  seed:13,  badge:"bdg-dm",  label:"Digital Marketing", client:"Tactive",                    title:"From Zero Lead Pipeline to 35 Cr+ Qualified Pipeline for a Construction Tech ERP Brand" },
  { id:2,  seed:26,  badge:"bdg-seo", label:"SEO",               client:"SterloCare",                  title:"Enterprise Lead Generation Across India and GCC for a Healthcare SaaS Brand" },
  { id:3,  seed:39,  badge:"bdg-dm",  label:"Digital Marketing", client:"URCTS",                      title:"Building a Strong Brand Identity and Digital Presence for an Engineering Firm" },
  { id:4,  seed:52,  badge:"bdg-seo", label:"SEO",               client:"Feral Roots",                title:"From Brand Study to Performance-Driven E-Commerce Growth for a Sustainable Products Brand" },
  { id:5,  seed:65,  badge:"bdg-smm", label:"Social Media",      client:"AM Builder",                 title:"Strengthening Local Visibility and Brand Presence for a Construction Brand" },
  { id:6,  seed:78,  badge:"bdg-ppc", label:"PPC / Ads",         client:"Ey Chiquita",                title:"Driving 100 Qualified Leads Through Social Media Marketing for a Fashion Brand" },
  { id:7,  seed:91,  badge:"bdg-seo", label:"SEO",               client:"ZKY",                        title:"Establishing a Professional Digital Presence for an HR Verification Company" },
  { id:8,  seed:104, badge:"bdg-dm",  label:"Digital Marketing", client:"RIYA",                       title:"Building a Credible Digital Presence for a Business Consulting Firm" },
  { id:9,  seed:117, badge:"bdg-smm", label:"Social Media",      client:"ABB",                        title:"Strengthening Digital Presence for a Digital Transformation Company" },
  { id:10, seed:130, badge:"bdg-ppc", label:"PPC / Ads",         client:"Sterlo",                     title:"Enterprise Lead Generation Across India and GCC for a Low Code No Code Platform" },
  { id:11, seed:143, badge:"bdg-dm",  label:"Digital Marketing", client:"SterloBuild",                title:"Enterprise Lead Generation Across India for a Construction Tech SaaS Brand" },
  { id:12, seed:156, badge:"bdg-seo", label:"SEO",               client:"Analytix Hub",               title:"Fast Recruitment and On-Time Payroll Enablement for an IT Company" },
  { id:13, seed:169, badge:"bdg-smm", label:"Social Media",      client:"AINQA",                      title:"On-Time Recruitment Closure for Critical IT Roles" },
  { id:14, seed:182, badge:"bdg-ppc", label:"PPC / Ads",         client:"StarHealth",                 title:"Bulk Recruitment Support for a Leading Insurance Brand" },
  { id:15, seed:195, badge:"bdg-dm",  label:"Digital Marketing", client:"Baltimore Health Analytics", title:"Recruitment Support for a US-Based Healthcare Analytics Company" },
  { id:16, seed:208, badge:"bdg-seo", label:"SEO",               client:"Talent Tribe",               title:"Brand Identity and Website Development for a Recruitment Company" },
];

/* ─────────────────────────────────────────
   JSON-LD SCHEMA BUILDER
───────────────────────────────────────── */
function buildSchema(d) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": d.title,
    "description": d.metaDesc,
    "url": d.canonical,
    "image": d.ogImage,
    "author": {
      "@type": "Organization",
      "name": "PCS Healthcare",
      "url": "https://www.pcshealthcare.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PCS Healthcare",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.pcshealthcare.com/img/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": d.canonical
    }
  });
}

/* ─────────────────────────────────────────
   STYLES
───────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

  :root {
    --navy: #004168;
    --navy-deep: #002a44;
    --navy-mid: #0a5282;
    --orange: #ed8337;
    --orange-light: #f5a66b;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }

  .detail-wrap {
    font-family: 'Poppins', sans-serif;
    background: #f0f4f8;
    color: #0d1f2d;
    min-height: 100vh;
  }

  /* ── BANNER ── */
  .detail-banner {
    position: relative;
    min-height: 420px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: var(--navy);
    padding: 56px 60px;
    text-align: center;
  }
  .detail-banner::before {
    content: '';
    position: absolute; inset: 0; pointer-events: none; z-index: 0;
    background:
      radial-gradient(ellipse 70% 80% at 80% 40%, rgba(237,131,55,0.13) 0%, transparent 60%),
      radial-gradient(ellipse 50% 60% at 10% 80%, rgba(10,54,82,0.6) 0%, transparent 55%);
  }
  .detail-banner::after {
    content: '';
    position: absolute; inset: 0; pointer-events: none; z-index: 0;
    background-image:
      linear-gradient(rgba(237,131,55,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(237,131,55,0.05) 1px, transparent 1px);
    background-size: 52px 52px;
  }
  .detail-banner-bg { position: absolute; inset: 0; z-index: 0; }
  .detail-banner-bg img { width: 100%; height: 100%; object-fit: cover; opacity: 0.10; }
  .detail-banner-inner {
    position: relative; z-index: 2;
    max-width: 860px;
    display: flex; flex-direction: column; align-items: center; gap: 1.1rem;
  }
  .back-btn {
    display: inline-flex; align-items: center; gap: .4rem;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.18);
    color: rgba(255,255,255,0.72);
    font-size: .72rem; font-weight: 600;
    padding: .38rem 1rem; border-radius: 50px;
    cursor: pointer; transition: all .2s;
    font-family: 'Poppins', sans-serif;
    text-decoration: none; margin-bottom: .3rem;
  }
  .back-btn:hover { background: rgba(255,255,255,0.16); color: #fff; }

  .detail-banner-badges { display: flex; flex-wrap: wrap; gap: .5rem; justify-content: center; }
  .cat-badge {
    display: inline-flex; align-items: center; gap: .4rem;
    padding: .25rem .75rem; border-radius: 6px;
    font-size: .62rem; font-weight: 700;
    letter-spacing: .08em; text-transform: uppercase; width: fit-content;
  }
  .cat-badge .dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; opacity: .8; }
  .bdg-dm  { background: rgba(237,131,55,0.15); color: #f5a66b; border: 1px solid rgba(237,131,55,0.3); }
  .bdg-seo { background: rgba(52,211,153,0.12); color: #6ee7b7; border: 1px solid rgba(52,211,153,0.25); }
  .bdg-smm { background: rgba(129,140,248,0.15); color: #a5b4fc; border: 1px solid rgba(129,140,248,0.28); }
  .bdg-ppc { background: rgba(252,165,165,0.15); color: #fca5a5; border: 1px solid rgba(252,165,165,0.28); }
  .bdg-tag { background: rgba(0,65,104,0.08); color: var(--navy-mid); border: 1px solid rgba(0,65,104,0.18); }
  .badges-row { display: flex; flex-wrap: wrap; gap: .4rem; }

  .detail-banner-title {
    font-size: clamp(1.6rem, 3.5vw, 2.6rem);
    font-weight: 800; color: #fff;
    line-height: 1.18; letter-spacing: -.022em; max-width: 780px;
  }
  .detail-banner-meta {
    font-size: .8rem; color: rgba(255,255,255,0.45);
    font-weight: 500; letter-spacing: .04em;
  }

  /* ── BODY ── */
  .detail-page-body {
    max-width: 1360px; margin: 0 auto;
    padding: 3rem 4% 5rem;
    display: grid;
    grid-template-columns: 1fr 420px;
    gap: 2.5rem; align-items: start;
  }
  .detail-left { display: flex; flex-direction: column; gap: 2rem; }

  .detail-hero-img {
    width: 100%; border-radius: 18px; overflow: hidden;
    aspect-ratio: 16/7; box-shadow: 0 8px 36px rgba(0,0,0,0.11);
  }
  .detail-hero-img img { width: 100%; height: 100%; object-fit: cover; display: block; }

  .detail-stats-row { display: grid; grid-template-columns: repeat(3,1fr); gap: 1rem; }
  .detail-stat-card {
    background: #fff; border: 1.5px solid rgba(237,131,55,0.13);
    border-radius: 14px; padding: 1.3rem 1.1rem;
    display: flex; flex-direction: column; gap: .35rem;
    box-shadow: 0 3px 14px rgba(237,131,55,0.07);
  }
  .detail-stat-val  { font-size: 1.85rem; font-weight: 800; color: var(--orange); line-height: 1; }
  .detail-stat-label{ font-size: .73rem; color: #5a7080; font-weight: 500; }

  .detail-section h2 {
    font-size: 1.05rem; font-weight: 700; color: var(--navy);
    margin-bottom: .9rem;
    display: flex; align-items: center; gap: .55rem;
  }
  .detail-section h2::before {
    content: ''; display: inline-block;
    width: 4px; height: 18px; background: var(--orange);
    border-radius: 3px; flex-shrink: 0;
  }
  .detail-section p  { font-size: .875rem; line-height: 1.9; color: #3d5060; }
  .detail-section ul { list-style: none; display: flex; flex-direction: column; gap: .5rem; }
  .detail-section ul li {
    font-size: .875rem; color: #3d5060;
    display: flex; align-items: flex-start; gap: .65rem; line-height: 1.65;
  }
  .detail-section ul li::before {
    content: ''; min-width: 7px; height: 7px; border-radius: 50%;
    background: var(--orange); margin-top: .45rem; flex-shrink: 0;
  }

  .cs-cta {
    display: inline-flex; align-items: center; gap: .45rem;
    padding: .5rem 1.1rem; border: none; border-radius: 50px;
    font-size: .76rem; font-weight: 600; color: #fff;
    background: var(--orange); cursor: pointer; transition: all .22s;
    width: fit-content; box-shadow: 0 2px 10px rgba(237,131,55,0.3);
    font-family: 'Poppins', sans-serif; text-decoration: none;
  }
  .cs-cta:hover { background: var(--orange-light); box-shadow: 0 4px 16px rgba(237,131,55,0.45); }

  /* ── SIDEBAR ── */
  .detail-sidebar { display: flex; flex-direction: column; gap: 1.4rem; position: sticky; top: 2rem; align-self: start; }
  .sidebar-card {
    background: #fff; border-radius: 18px;
    border: 1.5px solid rgba(0,65,104,0.07);
    box-shadow: 0 3px 14px rgba(0,0,0,0.04); overflow: hidden;
  }
  .sidebar-card-header {
    padding: 1.1rem 1.3rem .8rem;
    border-bottom: 1px solid rgba(0,65,104,0.06);
    display: flex; align-items: center; gap: .5rem;
  }
  .sidebar-card-header h3 {
    font-size: .82rem; font-weight: 700; color: var(--navy);
    text-transform: uppercase; letter-spacing: .08em;
  }
  .sidebar-card-header span {
    width: 6px; height: 6px; border-radius: 50%; background: var(--orange); display: inline-block;
  }
  .recent-item {
    display: flex; align-items: center; gap: .85rem;
    padding: .85rem 1.3rem; cursor: pointer; transition: background .18s;
    border-bottom: 1px solid rgba(0,65,104,0.05); text-decoration: none;
  }
  .recent-item:last-child { border-bottom: none; }
  .recent-item:hover { background: #f7fafc; }
  .recent-thumb { width: 72px; height: 52px; border-radius: 9px; overflow: hidden; flex-shrink: 0; }
  .recent-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .recent-info { flex: 1; min-width: 0; }
  .recent-badge {
    display: inline-flex; align-items: center; gap: .3rem;
    font-size: .55rem; font-weight: 700; letter-spacing: .07em;
    text-transform: uppercase; margin-bottom: .28rem;
    padding: .15rem .5rem; border-radius: 4px;
  }
  .recent-title {
    font-size: .76rem; font-weight: 600; color: #0d1f2d; line-height: 1.4;
    display: -webkit-box; -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; overflow: hidden; transition: color .18s;
  }
  .recent-item:hover .recent-title { color: var(--orange); }
  .recent-arrow { font-size: .7rem; color: var(--orange); opacity: 0; transition: opacity .18s, transform .18s; flex-shrink: 0; }
  .recent-item:hover .recent-arrow { opacity: 1; transform: translateX(3px); }

  /* ── RESPONSIVE ── */
  @media(max-width:1100px) { .detail-page-body { grid-template-columns: 1fr 290px; } }
  @media(max-width:860px)  {
    .detail-page-body { grid-template-columns: 1fr; }
    .detail-sidebar { order: -1; position: static; }
    .detail-stats-row { grid-template-columns: repeat(3,1fr); }
    .detail-banner { padding: 44px 32px; }
  }
  @media(max-width:580px) {
    .detail-stats-row { grid-template-columns: 1fr 1fr; }
    .detail-banner { padding: 36px 20px; }
  }
`;

/* ─────────────────────────────────────────
   MAIN LAYOUT COMPONENT
───────────────────────────────────────── */
export default function CaseStudyLayout({ data }) {
  const recent = allCards
    .filter(c => toSlug(c.title) !== data.slug)
    .slice(0, 4);

  return (
    <Layout title={data.metaTitle} description={data.metaDesc}>
      <Head>
        <title>{data.metaTitle}</title>
        <meta name="description"        content={data.metaDesc} />
        <meta name="keywords"           content={data.keywords} />
        <link rel="canonical"           href={data.canonical} />

        {/* Open Graph */}
        <meta property="og:type"        content="article" />
        <meta property="og:title"       content={data.metaTitle} />
        <meta property="og:description" content={data.metaDesc} />
        <meta property="og:image"       content={data.ogImage} />
        <meta property="og:url"         content={data.canonical} />
        <meta property="og:site_name"   content="PCS Healthcare" />

        {/* Twitter Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={data.metaTitle} />
        <meta name="twitter:description" content={data.metaDesc} />
        <meta name="twitter:image"       content={data.ogImage} />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">{buildSchema(data)}</script>
      </Head>

      <style>{styles}</style>

      <div className="detail-wrap">
        {/* BANNER */}
        <section className="detail-banner">
          <div className="detail-banner-bg">
            <img src={`https://picsum.photos/seed/${data.seed}/1400/500`} alt="" aria-hidden="true" />
          </div>
          <div className="detail-banner-inner">
            <div className="detail-banner-badges">
              <div className={`cat-badge ${data.badge}`}>
                <span className="dot" />{data.badgeLabel}
              </div>
              {data.tags.map(tag => (
                <div key={tag} className="cat-badge"
                  style={{ color:"rgba(255,255,255,0.75)", background:"rgba(255,255,255,0.09)", border:"1px solid rgba(255,255,255,0.2)" }}>
                  <span className="dot" />{tag}
                </div>
              ))}
            </div>
            <h1 className="detail-banner-title">{data.title}</h1>
            <p className="detail-banner-meta">{data.client} · Case Study</p>
            <a className="back-btn" href="/case-studies">← Back to Case Studies</a>
          </div>
        </section>

        {/* BODY */}
        <div className="detail-page-body">

          {/* LEFT */}
          <div className="detail-left">
            <div className="detail-hero-img">
              <img src={`https://picsum.photos/seed/${data.seed + 5}/900/400`} alt={data.title} />
            </div>

            {data.stats.length > 0 && (
              <div className="detail-stats-row">
                {data.stats.map((s, i) => (
                  <div className="detail-stat-card" key={i}>
                    <div className="detail-stat-val">{s.val}</div>
                    <div className="detail-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="detail-section">
              <h2>Overview</h2>
              <p>{data.overview}</p>
            </div>
            <div className="detail-section">
              <h2>The Challenge</h2>
              <p>{data.challenge}</p>
            </div>
            <div className="detail-section">
              <h2>Our Strategy</h2>
              <ul>{data.strategy.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </div>
            <div className="detail-section">
              <h2>The Result</h2>
              <p>{data.result}</p>
            </div>

            <a className="cs-cta" href="/case-studies">← Back to Case Studies</a>
          </div>

          {/* SIDEBAR */}
          <div className="detail-sidebar">
            <div className="sidebar-card">
              <div className="sidebar-card-header">
                <span /><h3>Recent Case Studies</h3>
              </div>
              {recent.map(rc => (
                <a key={rc.id} className="recent-item" href={`/case-studies/${toSlug(rc.title)}`}>
                  <div className="recent-thumb">
                    <img src={`https://picsum.photos/seed/${rc.seed}/200/140`} alt={rc.title} />
                  </div>
                  <div className="recent-info">
                    <div className={`recent-badge cat-badge ${rc.badge}`}>
                      <span className="dot" />{rc.label}
                    </div>
                    <div className="recent-title">{rc.title}</div>
                  </div>
                  <div className="recent-arrow">→</div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}