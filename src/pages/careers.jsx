import { useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { openRoles, hiringSteps, getSlug } from "@site/src/components/careersData";
import "../css/common.css";

const banner = "/img/career.webp";

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

        {/* BANNER */}
        <section className="sc-banner">
          <div className="sc-banner-inner">
            <div className="sc-banner-left">
              <div className="sc-banner-eyebrow">
                <span className="sc-banner-dot" />
                Careers at Sterlo
              </div>
              <h1 className="sc-banner-title">
                Build Your <span className="sc-highlight">Future with PCS</span>
              </h1>
              <p className="sc-banner-subtitle">
                At PCS, we don't just hire for roles — we build growth-focused professionals.
                Our team operates at the intersection of strategy, creativity, performance, and AI-driven marketing.
                We value individuals who are self-driven, take full ownership of their work, and hold themselves accountable for outcomes.
                If you're curious, data-minded, and ready to grow fast in a responsibility-first environment, you'll fit right in.
              </p>
            </div>
            <div className="sc-banner-right">
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
            <h2 className="hww-title" style={{color: '#000'}}>
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
                  <a className="role-apply" href={`/careers/${slug}`}>
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