import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
  :root { --navy:#004168; --navy-deep:#002a44; --navy-mid:#0a5282; --orange:#ed8337; --orange-light:#f5a66b; }
  * { box-sizing:border-box; margin:0; padding:0; }
  .detail-wrap { font-family:'Poppins',sans-serif; background:#f0f4f8; color:#0d1f2d; min-height:100vh; }

  /* BANNER */
  .detail-banner { position:relative; min-height:420px; display:flex; align-items:center; justify-content:center; overflow:hidden; background:var(--navy); padding:56px 60px; text-align:center; }
  .detail-banner::before { content:''; position:absolute; inset:0; pointer-events:none; z-index:0; background: radial-gradient(ellipse 70% 80% at 80% 40%,rgba(237,131,55,0.13) 0%,transparent 60%), radial-gradient(ellipse 50% 60% at 10% 80%,rgba(10,54,82,0.6) 0%,transparent 55%); }
  .detail-banner::after { content:''; position:absolute; inset:0; pointer-events:none; z-index:0; background-image:linear-gradient(rgba(237,131,55,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(237,131,55,0.05) 1px,transparent 1px); background-size:52px 52px; }
  .detail-banner-inner { position:relative; z-index:2; max-width:860px; display:flex; flex-direction:column; align-items:center; gap:1.1rem; }
  .back-btn { display:inline-flex; align-items:center; gap:.4rem; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.18); color:rgba(255,255,255,0.72); font-size:.72rem; font-weight:600; padding:.38rem 1rem; border-radius:50px; cursor:pointer; transition:all .2s; font-family:'Poppins',sans-serif; text-decoration:none; margin-bottom:.3rem; }
  .back-btn:hover { background:rgba(255,255,255,0.16); color:#fff; }
  .detail-banner-badges { display:flex; flex-wrap:wrap; gap:.5rem; justify-content:center; }
  .cat-badge { display:inline-flex; align-items:center; gap:.4rem; padding:.25rem .75rem; border-radius:6px; font-size:.62rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; width:fit-content; }
  .cat-badge .dot { width:5px; height:5px; border-radius:50%; background:currentColor; opacity:.8; }
  .bdg-dm  { background:rgba(237,131,55,0.15); color:#f5a66b; border:1px solid rgba(237,131,55,0.3); }
  .bdg-seo { background:rgba(52,211,153,0.12); color:#6ee7b7; border:1px solid rgba(52,211,153,0.25); }
  .bdg-smm { background:rgba(129,140,248,0.15); color:#a5b4fc; border:1px solid rgba(129,140,248,0.28); }
  .bdg-ppc { background:rgba(252,165,165,0.15); color:#fca5a5; border:1px solid rgba(252,165,165,0.28); }
  .detail-banner-title { font-size:clamp(1.6rem,3.5vw,2.6rem); font-weight:800; color:#fff; line-height:1.18; letter-spacing:-.022em; max-width:780px; }
  .detail-banner-meta { font-size:.8rem; color:rgba(255,255,255,0.45); font-weight:500; letter-spacing:.04em; }

  /* BODY */
  .detail-page-body { max-width:1360px; margin:0 auto; padding:3rem 4% 5rem; display:grid; grid-template-columns:1fr 380px; gap:2.5rem; align-items:start; }
  .detail-left { display:flex; flex-direction:column; gap:2rem; }
  .detail-hero-img { width:100%; border-radius:18px; overflow:hidden; aspect-ratio:16/7; box-shadow:0 8px 36px rgba(0,0,0,0.11); }
  .detail-hero-img img { width:100%; height:100%; object-fit:cover; display:block; }
  .detail-stats-row { display:grid; grid-template-columns:repeat(3,1fr); gap:1rem; }
  .detail-stat-card { background:#fff; border:1.5px solid rgba(237,131,55,0.13); border-radius:14px; padding:1.3rem 1.1rem; display:flex; flex-direction:column; gap:.35rem; box-shadow:0 3px 14px rgba(237,131,55,0.07); }
  .detail-stat-val  { font-size:1.85rem; font-weight:800; color:var(--orange); line-height:1; }
  .detail-stat-label{ font-size:.73rem; color:#5a7080; font-weight:500; }
  .detail-section h2 { font-size:1.05rem; font-weight:700; color:var(--navy); margin-bottom:.9rem; display:flex; align-items:center; gap:.55rem; }
  .detail-section h2::before { content:''; display:inline-block; width:4px; height:18px; background:var(--orange); border-radius:3px; flex-shrink:0; }
  .detail-section p  { font-size:.875rem; line-height:1.9; color:#3d5060; }
  .detail-section ul { list-style:none; display:flex; flex-direction:column; gap:.5rem; }
  .detail-section ul li { font-size:.875rem; color:#3d5060; display:flex; align-items:flex-start; gap:.65rem; line-height:1.65; }
  .detail-section ul li::before { content:''; min-width:7px; height:7px; border-radius:50%; background:var(--orange); margin-top:.45rem; flex-shrink:0; }

  /* CTA BLOCK */
  .detail-cta-block { background:linear-gradient(135deg,var(--navy) 0%,var(--navy-mid) 100%); border-radius:18px; padding:2rem 1.8rem; display:flex; flex-direction:column; gap:1rem; align-items:flex-start; box-shadow:0 8px 32px rgba(0,65,104,0.18); }
  .detail-cta-block h3 { font-size:1.1rem; font-weight:700; color:#fff; line-height:1.3; }
  .detail-cta-block p  { font-size:.82rem; color:rgba(255,255,255,0.65); line-height:1.7; }
  .cs-cta { display:inline-flex; align-items:center; gap:.45rem; padding:.65rem 1.4rem; border:none; border-radius:50px; font-size:.8rem; font-weight:600; color:#fff; background:var(--orange); cursor:pointer; transition:all .22s; width:fit-content; box-shadow:0 2px 10px rgba(237,131,55,0.3); font-family:'Poppins',sans-serif; text-decoration:none; }
  .cs-cta:hover { background:var(--orange-light); box-shadow:0 4px 16px rgba(237,131,55,0.45); }

  /* SIDEBAR */
  .detail-sidebar { display:flex; flex-direction:column; gap:1.4rem; position:sticky; top:2rem; align-self:start; }
  .sidebar-card { background:#fff; border-radius:18px; border:1.5px solid rgba(0,65,104,0.07); box-shadow:0 3px 14px rgba(0,0,0,0.04); overflow:hidden; }
  .sidebar-card-header { padding:1.1rem 1.3rem .8rem; border-bottom:1px solid rgba(0,65,104,0.06); display:flex; align-items:center; gap:.5rem; }
  .sidebar-card-header h3 { font-size:.82rem; font-weight:700; color:var(--navy); text-transform:uppercase; letter-spacing:.08em; }
  .sidebar-card-header span { width:6px; height:6px; border-radius:50%; background:var(--orange); display:inline-block; }
  .recent-item { display:flex; align-items:center; gap:.85rem; padding:.85rem 1.3rem; cursor:pointer; transition:background .18s; border-bottom:1px solid rgba(0,65,104,0.05); text-decoration:none; }
  .recent-item:last-child { border-bottom:none; }
  .recent-item:hover { background:#f7fafc; }
  .recent-thumb { width:72px; height:52px; border-radius:9px; overflow:hidden; flex-shrink:0; }
  .recent-thumb img { width:100%; height:100%; object-fit:cover; display:block; }
  .recent-info { flex:1; min-width:0; }
  .recent-badge { display:inline-flex; align-items:center; gap:.3rem; font-size:.55rem; font-weight:700; letter-spacing:.07em; text-transform:uppercase; margin-bottom:.28rem; padding:.15rem .5rem; border-radius:4px; }
  .recent-title { font-size:.76rem; font-weight:600; color:#0d1f2d; line-height:1.4; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; transition:color .18s; }
  .recent-item:hover .recent-title { color:var(--orange); }
  .recent-arrow { font-size:.7rem; color:var(--orange); opacity:0; transition:opacity .18s,transform .18s; flex-shrink:0; }
  .recent-item:hover .recent-arrow { opacity:1; transform:translateX(3px); }

  /* ABOUT BOX */
  .sidebar-about { background:#fff; border-radius:18px; border:1.5px solid rgba(0,65,104,0.07); box-shadow:0 3px 14px rgba(0,0,0,0.04); padding:1.4rem 1.3rem; display:flex; flex-direction:column; gap:.75rem; }
  .sidebar-about h3 { font-size:.82rem; font-weight:700; color:var(--navy); text-transform:uppercase; letter-spacing:.08em; display:flex; align-items:center; gap:.5rem; }
  .sidebar-about h3 span { width:6px; height:6px; border-radius:50%; background:var(--orange); display:inline-block; }
  .sidebar-about p { font-size:.8rem; color:#5a7080; line-height:1.75; }
  .sidebar-tag-row { display:flex; flex-wrap:wrap; gap:.4rem; }
  .sidebar-tag { font-size:.65rem; font-weight:600; padding:.25rem .7rem; border-radius:50px; background:rgba(0,65,104,0.06); color:var(--navy-mid); border:1px solid rgba(0,65,104,0.12); }

  /* RESPONSIVE */
  @media(max-width:1100px){ .detail-page-body{ grid-template-columns:1fr 290px; } }
  @media(max-width:860px) { .detail-page-body{ grid-template-columns:1fr; } .detail-sidebar{ order:-1; position:static; } .detail-stats-row{ grid-template-columns:repeat(3,1fr); } .detail-banner{ padding:44px 32px; } }
  @media(max-width:580px) { .detail-stats-row{ grid-template-columns:1fr 1fr; } .detail-banner{ padding:36px 20px; } }
`;

export default function CaseStudy() {
  return (
    <Layout title="Tactive Case Study | 35 Cr+ Pipeline for a Construction Tech ERP Brand | PCS" description="See how PCS helped Tactive build a 35 Cr+ qualified lead pipeline from scratch using B2B digital marketing, LinkedIn Ads, and SEO for their construction ERP platform.">
      <Head>
        <title>Tactive Case Study | 35 Cr+ Pipeline for a Construction Tech ERP Brand | PCS</title>
        <meta name="description" content="See how PCS helped Tactive build a 35 Cr+ qualified lead pipeline from scratch using B2B digital marketing, LinkedIn Ads, and SEO for their construction ERP platform." />
        <link rel="canonical" href="https://www.pcshealthcare.com/case-studies/tactive" />
        <meta property="og:title" content="Tactive Case Study | 35 Cr+ Pipeline for a Construction Tech ERP Brand | PCS" />
        <meta property="og:description" content="See how PCS helped Tactive build a 35 Cr+ qualified lead pipeline from scratch using B2B digital marketing, LinkedIn Ads, and SEO for their construction ERP platform." />
        <meta property="og:image" content="https://picsum.photos/seed/13/1200/630" />
        <meta property="og:url" content="https://www.pcshealthcare.com/case-studies/tactive" />
      </Head>
      <style>{styles}</style>

      <div className="detail-wrap">

        {/* ── BANNER ── */}
        <section className="detail-banner">
          <div className="detail-banner-inner">
            <h1 className="detail-banner-title">Building a Credible Digital Presence for a Business Consulting Firm
</h1>
          </div>
        </section>

        {/* ── BODY ── */}
        <div className="detail-page-body">

          {/* LEFT */}
          <div className="detail-left">

            <div className="detail-hero-img">
              <img src="https://picsum.photos/seed/18/900/400" alt="From Zero Lead Pipeline to 35 Cr+ Qualified Pipeline for a Construction Tech ERP Brand" />
            </div>

     
 <div className="detail-section">
              <h2>About RIYA
</h2>
              <p>Focused on delivering business consulting and operational support solutions, the company helps organizations improve efficiency, compliance, and long-term growth through structured and professional advisory services across multiple business functions.</p>
            </div>
            <div className="detail-section">
              <h2>Overview</h2>
              <p>To strengthen its market positioning, the firm aimed to establish a credible and professional digital presence that reflected its consulting expertise, service capabilities, and business values. The objective was to improve discoverability, audience trust, and long-term digital engagement through strategic branding, SEO, and social media marketing initiatives.
</p>
            </div>

            <div className="detail-section">
              <h2>The Challenge</h2>
              <p>Although the company offered valuable consulting services, its digital communication lacked consistency and strategic positioning. The business required a clearer online structure, stronger visibility, and a professional digital ecosystem capable of improving audience trust, search presence, and client interaction opportunities.
</p>
            </div>

            <div className="detail-section">
              <h2>Our Strategy</h2>
              <ul>
              <li>Developed a structured and professional digital brand identity
</li>
              <li>Refined service communication and positioning for better audience clarity</li>
              <li>Implemented SEO strategies to improve search visibility and organic reach
</li>
              <li>Executed social media marketing campaigns to strengthen brand engagement
</li>
              <li>Improved consistency across website, content, and social platforms
</li>
<li>Aligned digital messaging with long-term business and growth objectives
</li>
              </ul>
            </div>

            <div className="detail-section">
              <h2>The Result</h2>
              <p>Helped the brand establish a polished and trustworthy digital presence supported by SEO and social media marketing strategies. The improved online structure strengthened brand credibility, enhanced search visibility, increased audience engagement, and created a stronger foundation for long-term business growth and client acquisition.
</p>
            </div>

            {/* CTA */}
            <div className="detail-cta-block">
              <h3>Ready to achieve results like Riya?</h3>
              <p>Let's build a strategy tailored to your business goals and market. Our team is ready to help you grow.</p>
              <a className="cs-cta" href="/contact">Get in Touch →</a>
            </div>

          </div>

          {/* SIDEBAR */}
          <div className="detail-sidebar">

            {/* About */}
            <div className="sidebar-about">
              <h3><span />About This Case Study</h3>
              <p>Client: <strong>Riya</strong></p>
                  <p>Service: </p>
              <div className="sidebar-tag-row">
                <span className="sidebar-tag">Website</span>
                <span className="sidebar-tag">SEO</span>
                <span className="sidebar-tag">SMM</span>

              </div>
            </div>

            {/* Recent */}
            <div className="sidebar-card">
              <div className="sidebar-card-header">
                <span /><h3>Recent Case Studies</h3>
              </div>
              
        <a className="recent-item" href="/case-studies/sterlocare">
          <div className="recent-thumb">
            <img src="https://picsum.photos/seed/26/200/140" alt="Enterprise Lead Generation Across India and GCC for a Healthcare SaaS Brand" />
          </div>
          <div className="recent-info">
            <div className="recent-badge cat-badge bdg-seo">
              <span className="dot" />SEO
            </div>
            <div className="recent-title">Enterprise Lead Generation Across India and GCC for a Healthcare SaaS Brand</div>
          </div>
          <div className="recent-arrow">→</div>
        </a>
        <a className="recent-item" href="/case-studies/urcts">
          <div className="recent-thumb">
            <img src="https://picsum.photos/seed/39/200/140" alt="Building a Strong Brand Identity and Digital Presence for an Engineering Firm" />
          </div>
          <div className="recent-info">
            <div className="recent-badge cat-badge bdg-dm">
              <span className="dot" />Digital Marketing
            </div>
            <div className="recent-title">Building a Strong Brand Identity and Digital Presence for an Engineering Firm</div>
          </div>
          <div className="recent-arrow">→</div>
        </a>
        <a className="recent-item" href="/case-studies/feral-roots">
          <div className="recent-thumb">
            <img src="https://picsum.photos/seed/52/200/140" alt="From Brand Study to Performance-Driven E-Commerce Growth for a Sustainable Products Brand" />
          </div>
          <div className="recent-info">
            <div className="recent-badge cat-badge bdg-seo">
              <span className="dot" />SEO
            </div>
            <div className="recent-title">From Brand Study to Performance-Driven E-Commerce Growth for a Sustainable Products Brand</div>
          </div>
          <div className="recent-arrow">→</div>
        </a>
        <a className="recent-item" href="/case-studies/am-builder">
          <div className="recent-thumb">
            <img src="https://picsum.photos/seed/65/200/140" alt="Strengthening Local Visibility and Brand Presence for a Construction Brand" />
          </div>
          <div className="recent-info">
            <div className="recent-badge cat-badge bdg-smm">
              <span className="dot" />Social Media
            </div>
            <div className="recent-title">Strengthening Local Visibility and Brand Presence for a Construction Brand</div>
          </div>
          <div className="recent-arrow">→</div>
        </a>
            </div>

          </div>

        </div>
      </div>
    </Layout>
  );
}
