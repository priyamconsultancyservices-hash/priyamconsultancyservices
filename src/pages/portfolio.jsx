import Layout from "@theme/Layout";

const banner = "/img/portfolio.png";
const feralroots = "/img/feral-roots-site.webp";
const urcts = "/img/urctc-site.webp";
const zky = "/img/zky-site.webp";
const ambuilders = "/img/am-site.webp";
const abb = "/img/abb-site.webp";
const riya = "/img/riya-site.webp";
const sterlocareportfiolo = "/img/sterlocare-portfiolo.webp";
const TalentTribe = "/img/talent-tribe-portfiolo.webp";

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
  { id: 7, url: "https://www.sterlo.io/",     domain: "sterlo.io",   image: sterlocareportfiolo },
  { id: 8, url: "https://www.sterlocare.com/",     domain: "sterlocare.com",   image: sterlocareportfiolo },
  { id: 9, url: "https://www.sterlobuild.com/",     domain: "sterlobuild.com",   image: sterlocareportfiolo },


];

/* ─────────────────────────────────────────
   CSS
───────────────────────────────────────── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

:root {
  --navy:      #004168;
  --navy-deep: #011a2a;
  --navy-mid:  #0a3652;
  --orange:    #ed8337;
  --orange-l:  #f5a66b;
}

/* ── Banner ── */
.pg-banner {
  background: var(--navy);
  position: relative;
  overflow: hidden;
  padding: 56px 60px;
}
.pg-banner::before {
  content: '';
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background:
    radial-gradient(ellipse 70% 80% at 80% 40%, rgba(237,131,55,0.13) 0%, transparent 60%),
    radial-gradient(ellipse 50% 60% at 10% 80%, rgba(10,54,82,0.6) 0%, transparent 55%);
}
.pg-banner::after {
  content: '';
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background-image:
    linear-gradient(rgba(237,131,55,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(237,131,55,0.05) 1px, transparent 1px);
  background-size: 52px 52px;
}

.pg-banner-inner {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.pg-banner-left  { flex: 1 1 0; min-width: 0; }

.pg-banner-right {
  flex: 0 0 auto;
  width: 48%;
  max-width: 560px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.pg-banner-right img {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 16px;
  display: block;
  animation: pg-fadeUp 0.8s 0.25s ease both;
  filter: drop-shadow(0 8px 40px rgba(0,0,0,0.3));
}

.pg-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(237,131,55,0.12);
  border: 1px solid rgba(237,131,55,0.32);
  color: var(--orange);
  font-family: 'Poppins', sans-serif;
  font-size: 0.68rem; font-weight: 600;
  padding: 6px 18px; border-radius: 50px;
  letter-spacing: 0.14em; text-transform: uppercase;
  margin-bottom: 18px;
  animation: pg-fadeUp 0.6s ease both;
}
.pg-badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--orange);
  animation: pg-pulse 1.6s infinite;
}
@keyframes pg-pulse {
  0%,100%{ opacity:1; transform:scale(1); }
  50%{ opacity:.35; transform:scale(1.6); }
}

.pg-banner h2 {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.6rem, 3.5vw, 2.8rem);
  font-weight: 700; color: #fff;
  line-height: 1.15; letter-spacing: -0.02em;
  margin: 0 0 14px;
  animation: pg-fadeUp 0.7s 0.1s ease both;
}
.pg-banner h2 .orange { color: var(--orange); }
.pg-banner h2 .underline-word {
  position: relative;
  display: inline-block;
  margin-left: 8px;
}
.pg-banner h2 .underline-word::after {
  content: '';
  position: absolute;
  left: 0; bottom: -4px;
  width: 100%; height: 3px;
  background: linear-gradient(90deg, #ed8337, #f5a66b);
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left;
  animation: pg-line-in 0.55s 1s ease forwards;
}
@keyframes pg-line-in { to { transform: scaleX(1); } }

.pg-banner-sub {
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem; font-weight: 400;
  color: rgba(255,255,255,0.55);
  line-height: 1.65;
  margin: 0 0 28px;
  max-width: 500px;
  animation: pg-fadeUp 0.7s 0.18s ease both;
}

.pg-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--orange);
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 14px 28px;
  border-radius: 50px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
  animation: pg-fadeUp 0.7s 0.26s ease both;
  box-shadow: 0 4px 20px rgba(237,131,55,0.35);
}
.pg-cta-btn:hover {
  background: var(--orange-l);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(237,131,55,0.45);
}
.pg-cta-btn svg {
  width: 18px; height: 18px;
  stroke: #fff; fill: none;
  stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round;
  flex-shrink: 0;
}

@keyframes pg-fadeUp {
  from{ opacity:0; transform:translateY(22px); }
  to{ opacity:1; transform:translateY(0); }
}

/* ── Content ── */
.pg-content {
  padding: 52px 40px 80px;
  max-width: 1350px;
  margin: 0 auto;
}

/* ── Grid ── */
.pg-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

/* ── Card ── */
.pg-card {
  border-radius: 14px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  background: #fff;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  transition: transform 0.32s ease, box-shadow 0.32s ease;
}
.pg-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(0,0,0,0.16);
}

/* Screenshot fills the top */
.pg-img-wrap {
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  position: relative;
}
.pg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.45s ease;
}
.pg-card:hover .pg-img {
  transform: scale(1.04);
}

/* Overlay on hover */
.pg-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 25, 50, 0.52);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 4;
}
.pg-card:hover .pg-overlay {
  opacity: 1;
  pointer-events: all;
}

/* View Site circular button */
.pg-view-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
  width: 108px;
  height: 108px;
  border-radius: 50%;
  background: rgba(180, 100, 40, 0.82);
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
  border: none;
  letter-spacing: 0.03em;
  backdrop-filter: blur(2px);
  transform: scale(0.88);
  transition: transform 0.28s ease, background 0.22s ease;
}
.pg-card:hover .pg-view-btn {
  transform: scale(1);
}
.pg-view-btn:hover {
  background: rgba(237, 131, 55, 0.92);
}
.pg-view-btn svg {
  width: 22px; height: 22px;
  stroke: #fff; fill: none;
  stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .pg-view-btn { width: 80px; height: 80px; font-size: 0.72rem; }
  .pg-view-btn svg { width: 16px; height: 16px; }
}

/* Domain label at bottom */
.pg-footer {
  padding: 12px 16px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-top: 1px solid rgba(0,0,0,0.06);
  background: #fff;
}
.pg-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--orange);
  flex-shrink: 0;
}
.pg-domain {
  font-family: 'Poppins', sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  color: #555;
  letter-spacing: 0.01em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .pg-banner  { padding: 48px 40px; }
  .pg-content { padding: 44px 32px 72px; }
  .pg-grid    { grid-template-columns: repeat(3, 1fr); gap: 20px; }
}

@media (max-width: 900px) {
  .pg-grid        { grid-template-columns: repeat(2, 1fr); gap: 18px; }
  .pg-banner      { padding: 44px 32px; }
  .pg-banner-inner{ gap: 28px; }
  .pg-banner-right{ width: 44%; }
}

@media (max-width: 720px) {
  .pg-grid    { grid-template-columns: repeat(2, 1fr); gap: 14px; }
  .pg-content { padding: 36px 20px 60px; }
}

@media (max-width: 640px) {
  .pg-banner { padding: 36px 20px 40px; }
  .pg-banner-inner { flex-direction: column; align-items: flex-start; gap: 24px; }
  .pg-banner-left  { width: 100%; }
  .pg-banner-right { width: 100%; max-width: 100%; justify-content: center; }
  .pg-banner-right img { max-height: 200px; object-fit: contain; }
  .pg-banner h2    { font-size: clamp(1.4rem, 7vw, 2rem); }
  .pg-banner-sub   { font-size: 0.82rem; }
  .pg-grid    { grid-template-columns: 1fr 1fr; gap: 12px; }
  .pg-content { padding: 28px 14px 52px; }
  .pg-view-btn { padding: 10px 18px; font-size: 0.78rem; }
}

@media (max-width: 380px) {
  .pg-grid    { grid-template-columns: 1fr; }
  .pg-content { padding: 24px 12px 48px; }
}
`;

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
      <style>{css}</style>

      {/* Banner */}
      <div className="pg-banner">
        <div className="pg-banner-inner">
          <div className="pg-banner-left">
            <div className="pg-badge">
              <div className="pg-badge-dot" />
              Our Work
            </div>
            <h2>
              Our<span className="underline-word orange">Portfolio</span>
            </h2>
            <p className="pg-banner-sub">
              We craft stunning digital experiences — from e-commerce stores to
              SaaS platforms. Hover to explore, click to visit each live project.
            </p>
            <a href="#projects" className="pg-cta-btn">
              Explore More <ArrowRightIcon />
            </a>
          </div>
          <div className="pg-banner-right">
            <img src={banner} alt="Portfolio showcase" />
          </div>
        </div>
      </div>

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