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
import "../css/common.css";

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