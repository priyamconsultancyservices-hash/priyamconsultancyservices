import { useEffect, useRef, useState } from "react";
import Layout from '@theme/Layout';
import "../css/common.css";
const banner = "/img/approach.webp";
const bannerImg = "/img/about-us.webp";
const vision = "/img/vision.webp";
const mission = "/img/mission.webp";

const microsoft = "/img/microsoft-app-partner.jpeg";
const sterlo = "/img/sterlo-partner.webp";
const sterloBuild = "/img/sterlobuild-partner.webp";
const sterloCare = "/img/sterlocare-partner.webp";
const odoo = "/img/odoo-partner.webp";

const Analytix = "/img/Analytix-Hub.webp";
const Baltimore = "/img/baltimore.webp";
const Sterlo = "/img/sterlo.webp";
const OreOps = "/img/oreopps.webp";
const RiyaConsultancy = "/img/riyaconsultancy.webp";
const Tactive = "/img/tactive.webp";  
const URCTC = "/img/urctc.webp";
const ZKY = "/img/zky.webp";

import Head from '@docusaurus/Head';

function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/about-us/";

  return (
    <Head>
      <title>About | Digital Transformation HR Services & Marketing Agency </title>
      <meta name="description" content="PCS is the best digital marketing agency in India with results-driven strategies. We offer the best digital marketing services in India for your brand's growth!" />
      <meta name="keywords" content="Digital Marketing Services, Digital Marketing Agency, Top Digital Marketing Agency, Human Resource, HR Services, HR service provider, HR Recruitment, HR consulting services,Website development " />
      <link rel="canonical" href="https://www.priyamconsultancy.com/about-us/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="About | Digital Transformation HR Services & Marketing Agency " />
      <meta property="og:description" content="PCS is the best digital marketing agency in India with results-driven strategies. We offer the best digital marketing services in India for your brand's growth!" />
      <meta property="og:url" content="https://www.priyamconsultancy.com/about-us/" />
      <meta property="og:site_name" content=" Microsoft App" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About | Digital Transformation HR Services & Marketing Agency " />
      <meta name="twitter:description" content="PCS is the best digital marketing agency in India with results-driven strategies. We offer the best digital marketing services in India for your brand's growth!" />
  
    </Head>
  );
}

const ALL_CLIENTS = [
   { name: "Analytix-Hub",     logo: Analytix },
  { name: "Baltimore",        logo: Baltimore},
  { name: "Sterlo",           logo: Sterlo },
  { name: "Sterlo Build",     logo: sterloBuild },
  { name: "Sterlo Care",      logo: sterloCare },
  { name: "Microsoft",        logo: microsoft },
  { name: "Odoo",             logo: odoo },
  { name: "OreOps",           logo: OreOps },
  { name: "Riya Consultancy", logo: RiyaConsultancy },
  { name: "Tactive",          logo: Tactive },
  { name: "URCTC",            logo: URCTC },
  { name: "ZKY",              logo: ZKY },
];

// Build slides: 6 clients per slide → row of 3 + row of 3
function buildSlides(clients) {
  const slides = [];
  for (let i = 0; i < clients.length; i += 6) {
    const chunk = clients.slice(i, i + 6);
    if (chunk.length < 1) break;
    slides.push({ row1: chunk.slice(0, 4), row2: chunk.slice(3, 6) });
  }
  return slides;
}

function LogoImg({ src, name }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <span className="pcs-mq-fallback">{name}</span>;
  }
  return (
    <img
      src={src}
      alt={name}
      onError={() => setFailed(true)}
      style={{ maxWidth: "100%", maxHeight: "38px", objectFit: "contain", display: "block" }}
    />
  );
}

function ClientCarousel() {
  const slides = buildSlides(ALL_CLIENTS);
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const timerRef = useRef(null);

  const goTo = (idx, dir = "next") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 380);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      goTo((current + 1) % slides.length, "next");
    }, 3500);
    return () => clearInterval(timerRef.current);
  }, [current, animating]);

  const slide = slides[current];

  return (
    <div className="pcs-carousel-wrap">
      <div className={`pcs-carousel-slide ${animating ? (direction === "next" ? "pcs-slide-exit-left" : "pcs-slide-exit-right") : "pcs-slide-enter"}`}>
        {/* Row 1 — 3 logos */}
        <div className="pcs-clients-row">
          {slide.row1.map((c, i) => (
            <div key={c.name + i} className="pcs-client-card">
              <LogoImg src={c.logo} name={c.name} />
            </div>
          ))}
        </div>
        {/* Row 2 — 3 logos centered */}
        <div className="pcs-clients-row pcs-clients-row-center">
          {slide.row2.map((c, i) => (
            <div key={c.name + i} className="pcs-client-card">
              <LogoImg src={c.logo} name={c.name} />
            </div>
          ))}
        </div>
      </div>
      {/* Dot indicators */}
      <div className="pcs-carousel-dots">
        {slides.map((_, i) => (
          <button key={i} className={`pcs-carousel-dot${i === current ? " active" : ""}`} onClick={() => goTo(i, i > current ? "next" : "prev")} />
        ))}
      </div>
    </div>
  );
}

export default function PCSAboutUs() {
  const storyCanvasRef = useRef(null);

  useEffect(() => {
    // Styles now come from the shared stylesheet (sterlo-shared.css) import above.
    // Add loaded class so reveal opacity:0 animations apply safely.
    const wrapper = document.getElementById("pcs-about-wrapper");
    if (wrapper) wrapper.classList.add("pcs-loaded");
    return () => {
      if (wrapper) wrapper.classList.remove("pcs-loaded");
    };
  }, []);

  useEffect(() => {
    // Scroll reveal — rootMargin ensures above-fold elements fire immediately
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    const revealEls = document.querySelectorAll(".pcs-reveal,.pcs-reveal-left,.pcs-reveal-right");
    revealEls.forEach((el) => {
      // If element is already in viewport on load, mark visible immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("visible");
      } else {
        io.observe(el);
      }
    });

    // Trust items reveal
    const trustIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const delay = parseInt(e.target.dataset.delay || 0);
            setTimeout(() => e.target.classList.add("visible"), delay);
            trustIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document
      .querySelectorAll(".pcs-trust-item")
      .forEach((c) => {
        const rect = c.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          c.classList.add("visible");
        } else {
          trustIO.observe(c);
        }
      });

    return () => {
      io.disconnect();
      trustIO.disconnect();
    };
  }, []);

  useEffect(() => {
    // Bouncing balls canvas
    const canvas = storyCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const section = canvas.parentElement;
    let W, H, balls, animId;

    const COLORS = [
      "rgba(237,131,55,VAL)",
      "rgba(59,158,201,VAL)",
      "rgba(91,184,232,VAL)",
      "rgba(245,166,107,VAL)",
      "rgba(255,255,255,VAL)",
    ];

    function makeBall() {
      const r = 3 + Math.random() * 9;
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        r,
        vx: (Math.random() - 0.5) * 1.1,
        vy: (Math.random() - 0.5) * 1.1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)].replace(
          "VAL",
          (0.12 + Math.random() * 0.22).toFixed(2)
        ),
      };
    }

    function resize() {
      W = canvas.width = section.offsetWidth;
      H = canvas.height = section.offsetHeight;
      balls = Array.from({ length: 28 }, makeBall);
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      balls.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x - b.r < 0) { b.x = b.r; b.vx *= -1; }
        if (b.x + b.r > W) { b.x = W - b.r; b.vx *= -1; }
        if (b.y - b.r < 0) { b.y = b.r; b.vy *= -1; }
        if (b.y + b.r > H) { b.y = H - b.r; b.vy *= -1; }
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div id="pcs-about-wrapper" style={{ fontFamily: "'Poppins', sans-serif" }}>
    <SEOHead />

      {/* HERO */}
      <section className="sc-banner">
        <div className="sc-banner-inner">
          <div className="sc-banner-left">
            <div className="sc-banner-eyebrow">
              <span className="sc-banner-dot" />About Priyam Consultancy Services
            </div>
            <h1 className="sc-banner-title">
              Transforming with Businesses for<br />
              <span className="sc-highlight">Beyond the Usual.</span>
            </h1>
            <p className="sc-banner-subtitle">
              Empowering progress with end-to-end transformation services combining innovation, compliance, and people strategies to redefine business success.
            </p>
            <a href="#" className="sc-banner-cta">View Portfolio →</a>
          </div>
          <div className="sc-banner-right">
            <img
              src={bannerImg}
              alt="Priyam Consultancy Services"
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="pcs-about-section">
        <div className="pcs-about-inner">
          <div className="pcs-about-illo pcs-reveal-left">
            {/* REPLACE: Add your image below — remove this SVG block */}
            <img
              src={banner}
              alt="Growth Engine"
              className="pcs-about-section-img"
            />
          </div>
          <div className="pcs-reveal-right">
            <div className="partners-header1">
              <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>About Us</div>
            </div>
            <h2 className="pcs-about-heading">We Don’t Just Offer Services. We Solve Your Business Challenges.</h2>
            <p className="pcs-about-para"> A leading digital transformation and Growth Partner that turns your ideas into action.</p>
            <p className="pcs-about-para">We turn ideas into plans, blending innovation to deliver results across Business Registration & Compliance, Digital Transformation, Digital Marketing, and HR Services.</p>
            <p className="pcs-about-para">Our expertise helps businesses grow brands, streamline operations, optimize talent, and remain compliant with tailored solutions.</p>
            <p className="pcs-about-para">From startups to enterprises, we provide scalable, flexible services that adapt to evolving objectives and market demands.</p>
            <p className="pcs-about-para">We prioritize trust, transparency, and measurable outcomes, ensuring long-term success and sustainable impact for every client.</p>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="pcs-story-section">
        <canvas id="pcs-story-canvas" ref={storyCanvasRef}></canvas>
        <div className="pcs-story-inner">
          <div className="pcs-reveal-left">
      <div className="partners-header1">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Our Story</div>
          </div>            <h2 className="pcs-story-heading">The Minds <span className="orange">Behind</span> the Magic </h2>
            <div className="pcs-story-divider"></div>
            <p className="pcs-story-text">We’re more than a team – we’re a dynamic, collaborative mix of strategists, marketers, HR thinkers, tech innovators, and creative minds. Each member brings unique expertise, diverse experiences, and a shared passion for solving complex business challenges. Together, we’re united by one unwavering belief.</p>
            <blockquote className="pcs-story-quote">
              “Great businesses are built from the inside out”
            </blockquote>
          </div>
          <div className="pcs-story-cards pcs-reveal-right">
            {/* Vision Card */}
            <div className="pcs-vm-card">
              <div className="pcs-vm-illo">
                <img
                  src={vision}
                  alt="Our Vision"
                  style={{ width: "100%", height: "170px", objectFit: "cover", display: "block" }}
                />
              </div>
              <div className="pcs-vm-body">
                <div className="pcs-vm-label pcs-vm-label-vision">⬡ Our Vision</div>
                <div className="pcs-vm-text">To be the most trusted partner in business growth by delivering innovative solutions across business registration, technology, marketing, and HR, helping clients exceed goals and achieve lasting success.</div>
              </div>
            </div>
            {/* Mission Card */}
            <div className="pcs-vm-card">
              <div className="pcs-vm-illo">
                <img
                  src={mission}
                  alt="Our Mission"
                  style={{ width: "100%", height: "170px", objectFit: "cover", display: "block" }}
                />
              </div>
              <div className="pcs-vm-body">
                <div className="pcs-vm-label pcs-vm-label-mission">⬡ Our Mission</div>
                <div className="pcs-vm-text">We drive visibility, efficiency, and performance with data-led marketing, people-first HR strategies, seamless business registration, and digital transformation solutions all built for real business impact.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="pcs-trust-section">
        <div className="pcs-trust-inner">
          <div className="pcs-trust-head pcs-reveal">
      <div className="partners-header1" style={{ textAlign: 'center' }}>
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Why Businesses Trust Us</div>
          </div>            <h2 className="pcs-trust-title">We Don't Just Deliver Services.<span><i> We Deliver Results.</i></span></h2>
            <p className="pcs-trust-sub">At PCS, every partnership is built on trust and performance. Our holistic approach ensures measurable results across compliance, HR, finance, and digital transformation.</p>
          </div>
          <div className="pcs-trust-list">
            {[
              { num: "01", icon: "/img/icon/one-point-access.webp", bg: "rgba(237,131,55,0.12)",  title: "One Point Access",       text: "Complete expertise — compliance, HR, digital, and marketing — integrated under one roof. No juggling vendors.", delay: 0 },
              { num: "02", icon: "/img/icon/customized-strategies.webp",    bg: "rgba(59,158,201,0.12)",  title: "Scalable Solutions",     text: "Flexible, modular offerings that grow with your business — from early-stage startups to established enterprises.", delay: 100 },
              { num: "03", icon:"/img/icon/expert-team.webp", bg: "rgba(34,197,94,0.12)",   title: "Result-Oriented",        text: "Every strategy we deploy is tied to measurable ROI, performance benchmarks, and tangible business growth.", delay: 200 },
              { num: "04", icon:"/img/icon/result-oriented.webp", bg: "rgba(168,85,247,0.12)",  title: "Customized Strategies",  text: "No templates. No copy-paste. Every solution is designed specifically around your business reality and goals.", delay: 300 },
              { num: "05", icon:"/img/icon/customer-success.webp", bg: "rgba(245,166,107,0.12)", title: "Customer Success First", text: "We don't close deals — we open possibilities. Our growth is directly tied to the success of every client we serve.", delay: 400 },
              { num: "06", icon:"/img/icon/scalable-solutions.webp", bg: "rgba(91,184,232,0.12)",  title: "Expert Team",            text: "Skilled professionals with deep multi-domain expertise — strategists, technologists, HR specialists, and marketers working as one.", delay: 500 },
            ].map((item) => (
              <div key={item.num} className="pcs-trust-item" data-delay={item.delay}>
                <div className="pcs-ti-num">{item.num}</div>
                <div className="pcs-ti-icon" style={{ background: item.bg }}>
                  <img src={item.icon} alt={item.title} width={22} height={22} style={{ objectFit: "contain" }} />
                </div>
                <div>
                  <div className="pcs-ti-title">{item.title}</div>
                  <div className="pcs-ti-text">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS & CLIENTS — COMBINED */}
      <section className="pcs-pc-section pcs-reveal">
        <div className="pcs-pc-inner">
          {/* Partners — 5 static cards */}
          <div className="pcs-pc-block">
            <div className="pcs-pc-head">
              <h2 className="pcs-pc-title">Our <span><i>Partners</i></span></h2>
            </div>
            <div className="pcs-pc-partners-static">
              {[
                { name: "Microsoft", src: microsoft },
                { name: "Sterlo",    src: sterlo },
                { name: "SterloBuild",      src: sterloBuild },
                { name: "SterloCare",     src: sterloCare },
                { name: "Odoo",       src: odoo },
              ].map((p) => (
                <div key={p.name} className="pcs-mq-item">
                  <LogoImg src={p.src} name={p.name} />
                </div>
              ))}
            </div>
          </div>

          <div className="pcs-pc-divider"></div>

          {/* Clients — auto-sliding 4x3 carousel */}
          <div className="pcs-pc-block">
            <div className="pcs-pc-head">
              <h2 className="pcs-pc-title">Our <span><i>Clients</i></span></h2>
            </div>
            <ClientCarousel />
          </div>

        </div>
      </section>

    </div>
  );
}