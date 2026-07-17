import Layout from "@theme/Layout";
import "../css/common.css";

const banner = "/img/portfolio.webp";
const feralroots = "/img/feral-roots-site.webp";
const urcts = "/img/urctc-site.webp";
const zky = "/img/zky-site.webp";
const ambuilders = "/img/am-site.webp";
const abb = "/img/abb-site.webp";
const riya = "/img/riya-site.webp";
const sterlocareportfiolo = "/img/sterlocare-portfiolo.webp";
const TalentTribe = "/img/talent-tribe-portfiolo.webp";
const Sterlo = "/img/sterlo-portfiolo.webp";
const sterlobuildportfiolo = "/img/sterlobuild-portfiolo.webp";

/* ─────────────────────────────────────────
   Portfolio data
───────────────────────────────────────── */
const PROJECTS = [
  { id: 1, url: "https://fetalroots.com",          domain: "fetalroots.com",       image: feralroots },
  { id: 2, url: "https://urcts.com",               domain: "urcts.com",            image: urcts },
  { id: 3, url: "https://zky.ai",                  domain: "zky.ai",               image: zky },
  { id: 4, url: "https://abbmc.in/",               domain: "abbmc.in",             image: abb },
  { id: 5, url: "https://riyaconsultancy.com",     domain: "riyaconsultancy.com",  image: riya },
  { id: 6, url: "https://talenttribe.in/",         domain: "talenttribe.in",       image: TalentTribe },
  { id: 7, url: "https://www.sterlo.io/",     domain: "sterlo.io",   image: Sterlo },
  { id: 8, url: "https://www.sterlocare.com/",     domain: "sterlocare.com",   image: sterlocareportfiolo },
  { id: 9, url: "https://www.sterlobuild.com/",     domain: "sterlobuild.com",   image: sterlobuildportfiolo },

];

/* ─────────────────────────────────────────
   CSS
───────────────────────────────────────── */

/* ─────────────────────────────────────────
   Icons
───────────────────────────────────────── */
function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* ─────────────────────────────────────────
   Single Card
───────────────────────────────────────── */
function PortfolioCard({ project }) {
  return (
    <div className="pg-card">
      {/* Screenshot + hover overlay */}
      <div className="pg-img-wrap">
        <img
          className="pg-img"
          src={project.image}
          alt={project.domain}
          loading="lazy"
        />
        <div className="pg-overlay">
          <a
            className="pg-view-btn"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalIcon />
            <span>View Site</span>
          </a>
        </div>
      </div>

      {/* Domain label */}
      <div className="pg-footer">
        <div className="pg-dot" />
        <span className="pg-domain">{project.domain}</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Main Export
───────────────────────────────────────── */
export default function PortfolioGrid() {
  return (
    <Layout>

      {/* Banner */}
      <section className="sc-banner">
        <div className="sc-banner-inner">
          <div className="sc-banner-left">
            <div className="sc-banner-eyebrow">
              <span className="sc-banner-dot" />
              Our Work
            </div>
            <h1 className="sc-banner-title">
              Our <span className="sc-highlight">Portfolio</span>
            </h1>
            <p className="sc-banner-subtitle">
              We craft stunning digital experiences — from e-commerce stores to
              SaaS platforms. Hover to explore, click to visit each live project.
            </p>
            <a href="#projects" className="sc-banner-cta">
              Explore More <ArrowRightIcon />
            </a>
          </div>
          <div className="sc-banner-right">
            <img src={banner} alt="Portfolio showcase" />
          </div>
        </div>
      </section>

      {/* Grid */}
      <div className="pg-content" id="projects">
        <div className="pg-grid">
          {PROJECTS.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}