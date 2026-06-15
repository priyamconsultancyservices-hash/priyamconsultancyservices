import { useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { openRoles, hiringSteps, getSlug } from "@site/src/components/careersData";

const banner = "/img/career.png";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

  :root {
    --navy: #004168;
    --navy-deep: #002a44;
    --navy-mid: #0a5282;
    --orange: #ed8337;
    --orange-light: #f5a66b;
    --blue: #1a73e8;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .careers-wrap {
    font-family: 'Poppins', sans-serif;
    background: #f0f4f8;
    color: #0d1f2d;
  }

  /* ── BANNER ── */
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
  .banner-split {
    max-width: 1350px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 48px;
    position: relative;
    z-index: 2;
  }
  .banner-split .banner-inner {
    align-items: flex-start;
    text-align: left;
    flex: 1 1 0;
    min-width: 0;
    max-width: 100%;
  }
  .banner-img-wrap {
    flex: 0 0 auto;
    width: 46%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    animation: fadeUp 0.8s 0.3s ease both;
  }
  .banner-img-wrap img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
    border-radius: 16px;
    filter: drop-shadow(0 12px 48px rgba(0,0,0,0.35));
  }
  @media (max-width: 860px) {
    .banner-split { flex-direction: column; align-items: center; gap: 32px; }
    .banner-split .banner-inner { align-items: start; text-align: start; width: 100%; }
    .banner-img-wrap { width: 80%; max-width: 400px; justify-content: center; }
  }
  @media (max-width: 500px) {
    .banner { padding: 3rem 5% 3rem; }
    .banner-img-wrap { width: 100%; max-width: 100%; }
  }
  .banner::before {
    content: '';
    position: absolute; inset: 0; pointer-events: none;
    background-image: linear-gradient(rgba(237,131,55,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(237,131,55,0.06) 1px, transparent 1px);
    background-size: 60px 60px;
    animation: grid-drift 22s linear infinite;
  }
  .banner::after {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 55% 80% at 80% 60%, rgba(237,131,55,0.12) 0%, transparent 65%),
      radial-gradient(ellipse 45% 70% at 5% 20%, rgba(0,42,68,0.6) 0%, transparent 55%);
  }
  @keyframes grid-drift { from{background-position:0 0} to{background-position:60px 60px} }

  .banner-inner {
    position: relative; z-index: 2;
    display: flex; flex-direction: column;
    align-items: center; text-align: center;
    gap: 1.1rem; max-width: 700px;
  }
  .banner-eyebrow {
    display: inline-flex; align-items: center; gap: .5rem;
    background: rgba(237,131,55,0.12); border: 1px solid rgba(237,131,55,0.32);
    color: var(--orange); font-size: .7rem; font-weight: 700;
    padding: .38rem 1.1rem; border-radius: 50px;
    letter-spacing: .12em; text-transform: uppercase;
    animation: fadeUp .5s ease both;
  }
  .eyebrow-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--orange); animation: pulse-dot 1.6s infinite;
  }
  @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.5)} }
  .banner-title {
    font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 700;
    line-height: 1.1; color: #fff;
    animation: fadeUp .6s .08s ease both;
  }
  .banner-title span { color: var(--orange); }
  .banner-title .underline-word {
    position: relative; display: inline-block; margin-left: 8px;
  }
  .banner-title .underline-word::after {
    content: ''; position: absolute; left: 0; bottom: -4px;
    width: 100%; height: 3px;
    background: linear-gradient(90deg, #ed8337, #f5a66b);
    border-radius: 2px; transform: scaleX(0); transform-origin: left;
    animation: line-in 0.55s 1s ease forwards;
  }
  @keyframes line-in { to { transform: scaleX(1); } }
  .banner-subtitle {
    font-size: .97rem; line-height: 1.8;
    color: rgba(255,255,255,0.92); max-width: 560px;
    animation: fadeUp .65s .16s ease both;
  }
  @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }

  /* ── HIRING PROCESS ── */
  .hiring-section {
    background: #ffffff;
    padding: 5rem 6% 4rem;
  }
  .section-header { text-align: center; margin-bottom: 4rem; }
  .section-title {
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    font-weight: 800; color: #0d1f2d;
    letter-spacing: -.02em; margin-bottom: .9rem;
  }
  .section-subtitle {
    font-size: .95rem; color: #5a6a7a;
    line-height: 1.8; margin: 0 auto;
    border: none; display: block;
  }
  .section-subtitle::before, .section-subtitle::after { display: none !important; content: none !important; }

  .step-cards-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.2rem;
    max-width: 1350px;
    margin: 0 auto;
  }
  .step-card {
    background: #ffffff; border: 1px solid rgba(0,65,104,0.1);
    border-radius: 12px; padding: 1.4rem 1.3rem 1.3rem;
    display: flex; flex-direction: column; gap: 10px;
    position: relative; transition: transform .25s, box-shadow .25s;
  }
  .step-card:hover { transform: translateY(-4px); box-shadow: 0 10px 32px rgba(237,131,55,0.13); }
  .step-card-num {
    font-size: 3rem; font-weight: 700; line-height: 1;
    color: rgba(237,131,55,0.13); position: absolute;
    top: 0.7rem; right: 1rem; pointer-events: none;
  }
  .step-card-icon {
    width: 48px; height: 48px; border-radius: 10px;
    background: rgba(237,131,55,0.1);
    display: flex; align-items: center; justify-content: center;
  }
  .step-card-icon img { width: 28px; height: 28px; object-fit: contain; }
  .step-card-label { font-size: 0.68rem; font-weight: 700; color: var(--orange); letter-spacing: .09em; text-transform: uppercase; }
  .step-card-title { font-size: 0.95rem; font-weight: 600; color: #0d1f2d; line-height: 1.35; }
  .step-card-desc { font-size: 0.82rem; color: #5a6a7a; line-height: 1.75; flex: 1; }
  @media (max-width: 1024px) { .step-cards-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 560px) { .step-cards-grid { grid-template-columns: 1fr; } }

  /* ── OPEN ROLES ── */
  .roles-section { background: #f0f4f8; padding: 5rem 6%; }
  .roles-section .section-title { font-size: clamp(1.6rem, 2.8vw, 2.2rem); max-width: 820px; margin: 0 auto .9rem; text-align: center; }
  .roles-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.4rem;
    max-width: 1180px;
    margin: 0 auto;
  }
  .role-card {
    background: #ffffff; border: 1.5px solid rgba(0,65,104,0.1);
    border-radius: 16px; padding: 1.6rem 1.8rem 1.4rem;
    display: flex; flex-direction: column; gap: .75rem;
    transition: transform .28s, box-shadow .28s;
    box-shadow: 0 2px 14px rgba(0,0,0,0.05);
  }
  .role-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 36px rgba(0,0,0,0.1);
    border-color: rgba(26,115,232,0.25);
  }
  .role-badge {
    display: inline-flex; align-items: center;
    background: rgba(237,131,55,0.08); border: 1px solid rgba(237,131,55,0.2);
    color: var(--orange); font-size: .65rem; font-weight: 700;
    padding: .22rem .7rem; border-radius: 50px;
    letter-spacing: .08em; text-transform: uppercase;
    width: fit-content;
  }
  .role-title { font-size: 1rem; font-weight: 700; color: #0d1f2d; line-height: 1.35; }
  .role-desc {
    font-size: .845rem; color: #4b5a6a; line-height: 1.7; flex: 1;
    display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
  }
  .role-apply {
    display: inline-flex; align-items: center; gap: .4rem;
    color: #ed8337; font-size: .82rem; font-weight: 600;
    text-decoration: none; margin-top: .2rem;
    transition: gap .2s; border: none; background: none;
    padding: 0; cursor: pointer; font-family: 'Poppins', sans-serif;
  }
  .role-apply:hover { gap: .7rem; color: #ed8337; text-decoration: none; }
  .role-apply .apply-icon {
    width: 20px; height: 20px; border-radius: 50%;
    border: 1.5px solid #ed8337;
    display: inline-flex; align-items: center; justify-content: center;
    font-size: .75rem; transition: background .2s, color .2s;
  }
  .role-card:hover .apply-icon { background: #ed8337; color: #fff; }

  @media (max-width: 1024px) { .roles-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 640px) {
    .roles-grid { grid-template-columns: 1fr; }
    .banner { padding: 4rem 5% 3rem; }
    .hiring-section, .roles-section { padding: 3.5rem 5%; }
  }

  /* shared eyebrow helpers used from original CSS */
  .partners-eyebrow {
    display: inline-flex; align-items: center; gap: .45rem;
    color: var(--blue); font-size: .72rem; font-weight: 700;
    letter-spacing: .13em; text-transform: uppercase;
  }
  .hww-title {
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    font-weight: 800; color: #0d1f2d;
    letter-spacing: -.02em; margin-bottom: .9rem;
    text-align: center;
  }
  .hww-accent { font-style: italic; }
`;

function CareersPageSEO() {
  return (
    <Head>
      <title>Apply for Jobs at Priyam Consultancy | Career Opportunities</title>
      <meta name="description" content="Looking for your next career move? Explore job openings at Priyam Consultancy and become part of a team focused on growth, innovation, and success. " />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="Careers at Priyam Consultancy, Priyam Consultancy Jobs, Job Opportunities, Career Opportunities, Hiring Now, Apply for Jobs,"/>
      <link rel="canonical" href="https://www.priyamconsultancy.com/careers/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Apply for Jobs at Priyam Consultancy | Career Opportunities" />
      <meta property="og:description" content="Looking for your next career move? Explore job openings at Priyam Consultancy and become part of a team focused on growth, innovation, and success. " />
      <meta property="og:url" content="https://www.priyamconsultancy.com/careers/" />
      <meta property="og:site_name" content="Sterlo" />
      <meta property="og:locale" content="en_IN" />
    </Head>
  );
}

export default function CareersPage() {
  return (
    <Layout>
      <CareersPageSEO />
      <div className="careers-wrap">
        <style>{styles}</style>

        {/* BANNER */}
        <section className="banner">
          <div className="banner-split">
            <div className="banner-inner">
              <div className="banner-eyebrow">
                <div className="eyebrow-dot" />
                Careers at Sterlo
              </div>
              <h1 className="banner-title">
                Build Your <span className="underline-word">Future with PCS</span>
              </h1>
              <p className="banner-subtitle">
                At PCS, we don't just hire for roles — we build growth-focused professionals.
                Our team operates at the intersection of strategy, creativity, performance, and AI-driven marketing.
                We value individuals who are self-driven, take full ownership of their work, and hold themselves accountable for outcomes.
                If you're curious, data-minded, and ready to grow fast in a responsibility-first environment, you'll fit right in.
              </p>
            </div>
            <div className="banner-img-wrap">
              <img src={banner} alt="Careers at Sterlo" />
            </div>
          </div>
        </section>

        {/* HIRING PROCESS */}
        <section className="hiring-section">
          <div className="section-header">
            <div className="partners-eyebrow" style={{ marginBottom: "20px", justifyContent: "center", display: "flex" }}>
              Hiring Process
            </div>
            <h2 className="hww-title">
              Our <span className="hww-accent" style={{ color: "#ed8337" }}> Recruitment Process </span>
            </h2>
            <p className="section-subtitle">
              At Sterlo, our recruitment process is structured, transparent, and focused on identifying the right talent
              through practical evaluation and role alignment. Every stage is carefully designed to create a smooth
              experience from application to final selection.
            </p>
          </div>

          <div className="step-cards-grid">
            {hiringSteps.map((step, i) => (
              <div className="step-card" key={i}>
                <div className="step-card-num">0{i + 1}</div>
                <div className="step-card-icon">
                  <img src={step.icon} alt={step.title} />
                </div>
                <div className="step-card-label">Step 0{i + 1}</div>
                <div className="step-card-title">{step.title}</div>
                <div className="step-card-desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* OPEN ROLES */}
        <section className="roles-section">
          <div className="section-header">
            <div className="partners-eyebrow" style={{ marginBottom: "20px", justifyContent: "center", display: "flex" }}>
              Join Our Team
            </div>
            <h2 className="hww-title">
              Explore <span className="hww-accent" style={{ color: "#ed8337" }}> Opportunities & Build </span> Your Career
            </h2>
            <p className="section-subtitle">
              Grow with PCS! Discover career opportunities that encourage responsibility, support continuous learning,
              and provide hands-on experience to help you strengthen your professional expertise.
            </p>
          </div>

          <div className="roles-grid">
            {openRoles.map((role, i) => {
              const slug = getSlug(role.title);
              const isIntern = role.title.toLowerCase().includes("intern");
              return (
                <div className="role-card" key={i}>
                  <div className="role-badge">{isIntern ? "Internship" : "Full-time"}</div>
                  <div className="role-title">{role.title}</div>
                  <div className="role-desc">{role.desc}</div>
                  <a className="role-apply" href={`/career/${slug}/`}>
                    <span className="apply-icon">→</span>
                    View & Apply
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
}
