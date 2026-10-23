import { useRef, useEffect } from "react";
import Layout from "@theme/Layout";
import "../css/common.css";

const banner = "/img/portfolio.webp";
const feralroots = "/img/work-6.webp";
const urcts = "/img/work-14.webp";
const zky = "/img/work-8.webp";
const ambuilders = "/img/work-7.webp";
const abb = "/img/work-5.webp";
const riya = "/img/work-10.webp";
const sterlocareportfiolo = "/img/work-12.webp";
const TalentTribe = "/img/work-9.webp";
const vriskha = "/img/work-2.webp";
const vatcomm = "/img/work-4.webp";
const Sterlo = "/img/sterlo-portfiolo.webp";
const greenstar ="/img/work-3.webp";
const sterlo ="/img/work-11.webp";

const tgcc ="/img/work-1.webp";
const sterlobuildportfiolo = "/img/work-13.webp";

/* ─────────────────────────────────────────
   Portfolio data
───────────────────────────────────────── */
const PROJECTS = [
  { id: 1, url: "https://feralroots.in/",          domain: "feralroots.in",       image: feralroots },
  { id: 2, url: "https://www.urcts.in/",               domain: "urcts.in",            image: urcts },
  // { id: 3, url: "https://abbmc.in/",                  domain: "abbmc.in",               image: abb },


  { id: 7, url: "https://staging.vrikshabuilders.com/",         domain: "staging.vrikshabuilders.com",       image: vriskha},
  { id: 8, url: "https://www.vatcommtechnologies.com/",         domain: "vatcommtechnologies.com",       image: vatcomm },
  { id: 9, url: "https://www.greenstarexports.com/",         domain: "greenstarexports.com",       image: greenstar },
  { id: 10, url: "https://www.tgcc.com.my/",         domain: "tgcc.com.my",       image: tgcc },

    { id: 3, url: "https://zky.co.in/",                  domain: "zky.co.in",               image: zky },
  { id: 4, url: "https://abbmc.in/",               domain: "abbmc.in",             image: abb },
  { id: 5, url: "https://riyaconsultancy.com",     domain: "riyaconsultancy.com",  image: riya },
  { id: 6, url: "https://talenttribe.in/",         domain: "talenttribe.in",       image: TalentTribe },

  { id: 11, url: "https://www.sterlo.io/",     domain: "sterlo.io",   image: sterlo },
  { id: 12, url: "https://www.sterlocare.com/",     domain: "sterlocare.com",   image: sterlocareportfiolo },

];

/* ─────────────────────────────────────────
   CSS  (only the hover-scroll effect; rest stays in common.css)
───────────────────────────────────────── */
const ScrollStyles = () => (
  <style>{`
/* Image window: fixed ratio, image inside scrolls on hover */
.pg-card .pg-img-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  height: auto;
  container-type: size;
}
.pg-card .pg-img {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: auto;
  max-width: none;
  object-fit: initial;
  transform: translateY(0) !important;     /* stop any old zoom/scale hover effect */
  transition: transform 0.8s ease;         /* scroll back to top */
  will-change: transform;
}
.pg-card:hover .pg-img {
  /* scroll to the bottom of the screenshot (fallback first, then responsive) */
  transform: translateY(min(0px, calc(-100% + 260px))) !important;
  transform: translateY(min(0px, calc(-100% + 100cqh))) !important;
  transition: transform var(--dur, 6s) linear;
}

/* White background, full width (covers the dark side areas) */
.pg-content {
  --pg-max-width: 1400px;                 /* change this to set section max width */
  background: #fff !important;
  box-shadow: 0 0 0 100vmax #fff;
  clip-path: inset(0 -100vmax);
  width: 100%;
  max-width: none !important;
  margin: 0 auto;
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
}
.pg-content .pg-grid {
  width: 100%;
  max-width: var(--pg-max-width);
  margin-left: auto;
  margin-right: auto;
}

/* Card is now one clickable link */
a.pg-card {
  display: block;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

@media (prefers-reduced-motion: reduce) {
  .pg-card .pg-img { transition: none; }
}
`}</style>
);

/* ─────────────────────────────────────────
   Icons
───────────────────────────────────────── */
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
  const imgRef = useRef(null);

  // Scroll time depends on screenshot height. Higher SCROLL_SPEED = faster scroll.
  const SCROLL_SPEED = 0.1; // px per second
  const setDuration = () => {
    const img = imgRef.current;
    if (!img || !img.parentElement) return;
    const distance = Math.max(0, img.offsetHeight - img.parentElement.clientHeight);
    const seconds = Math.min(Math.max(distance / SCROLL_SPEED, 1.5), 6);
    img.style.setProperty("--dur", `${seconds.toFixed(1)}s`);
  };

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) setDuration();
    window.addEventListener("resize", setDuration, { passive: true });
    return () => window.removeEventListener("resize", setDuration);
  }, []);

  return (
    <a
      className="pg-card"
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.domain}`}
    >
      {/* Screenshot (scrolls on hover) */}
      <div className="pg-img-wrap">
        <img
          ref={imgRef}
          className="pg-img"
          src={project.image}
          alt={project.domain}
          loading="lazy"
          onLoad={setDuration}
        />
      </div>

      {/* Domain label */}
      <div className="pg-footer">
        <div className="pg-dot" />
        <span className="pg-domain">{project.domain}</span>
      </div>
    </a>
  );
}

/* ─────────────────────────────────────────
   Main Export
───────────────────────────────────────── */
export default function PortfolioGrid() {
  return (
    <Layout>
      <ScrollStyles />

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