import { useEffect, useRef } from "react";
import "./CTA.css";


/* ── CTA particle animation hook ── */
function useCtaCanvas(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const ORANGE = "#ed8337";
    let W, H, particles = [], raf;

    function resize() {
      W = canvas.width = canvas.parentElement.offsetWidth;
      H = canvas.height = canvas.parentElement.offsetHeight;
    }

    function Particle() { this.reset(); }
    Particle.prototype.reset = function () {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.r = Math.random() * 2.2 + 0.6;
      this.type = Math.random() < 0.55 ? "dot" : Math.random() < 0.5 ? "ring" : "plus";
      this.speed = Math.random() * 0.35 + 0.08;
      this.dir = Math.random() * Math.PI * 2;
      this.alpha = Math.random() * 0.45 + 0.1;
      this.pulse = Math.random() * Math.PI * 2;
      this.pulseSpeed = Math.random() * 0.018 + 0.008;
      this.size = Math.random() * 4 + 2;
    };
    Particle.prototype.update = function () {
      this.x += Math.cos(this.dir) * this.speed;
      this.y += Math.sin(this.dir) * this.speed;
      this.pulse += this.pulseSpeed;
      this.dir += (Math.random() - 0.5) * 0.015;
      if (this.x < -20) this.x = W + 20;
      if (this.x > W + 20) this.x = -20;
      if (this.y < -20) this.y = H + 20;
      if (this.y > H + 20) this.y = -20;
    };
    Particle.prototype.draw = function () {
      const a = this.alpha * (0.7 + 0.3 * Math.sin(this.pulse));
      ctx.save();
      ctx.globalAlpha = a;
      ctx.strokeStyle = ctx.fillStyle = ORANGE;
      ctx.lineWidth = 1;
      if (this.type === "dot") {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r + Math.sin(this.pulse) * 0.4, 0, Math.PI * 2);
        ctx.fill();
      } else if (this.type === "ring") {
        const rr = this.size * (0.9 + 0.15 * Math.sin(this.pulse));
        ctx.beginPath(); ctx.arc(this.x, this.y, rr, 0, Math.PI * 2); ctx.stroke();
      } else {
        const s = this.size * (0.9 + 0.1 * Math.sin(this.pulse));
        ctx.beginPath();
        ctx.moveTo(this.x - s, this.y); ctx.lineTo(this.x + s, this.y);
        ctx.moveTo(this.x, this.y - s); ctx.lineTo(this.x, this.y + s);
        ctx.stroke();
      }
      ctx.restore();
    };

    function drawLines() {
      const dots = particles.filter(p => p.type === "dot");
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.save();
            ctx.globalAlpha = (1 - dist / 110) * 0.12;
            ctx.strokeStyle = ORANGE; ctx.lineWidth = 0.7;
            ctx.beginPath(); ctx.moveTo(dots[i].x, dots[i].y); ctx.lineTo(dots[j].x, dots[j].y); ctx.stroke();
            ctx.restore();
          }
        }
      }
    }

    function init() {
      resize();
      particles = [];
      const count = Math.floor((W * H) / 9000);
      for (let i = 0; i < Math.max(count, 28); i++) particles.push(new Particle());
    }

    function loop() {
      ctx.clearRect(0, 0, W, H);
      drawLines();
      particles.forEach(p => { p.update(); p.draw(); });
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("resize", resize);
    init();
    loop();

    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
}


/* ── CTA Section ── */
function CTASection() {
  const canvasRef = useRef(null);
  useCtaCanvas(canvasRef);

  return (
    <section id="cta-final">
      <div className="cta-banner" style={{"--glow-x":"50%","--glow-y":"50%"}}>
        <canvas id="ctaCanvas" ref={canvasRef} />

        <div className="cta-banner-left">
          <div className="partners-header">
            <div className="partners-eyebrow" style={{ marginBottom: '20px', textAlign: 'start' }}>Ready to Start?</div>
          </div>
          <h2 className="cta-banner-heading">
            Let's Talk About Your<br />
            Next Big <span className="hl-italic">Growth Move</span>
          </h2>
          <p className="cta-banner-sub">
            No pressure. Just a quick conversation to understand where you are-and how we can help you move forward.
          </p>
        </div>

        <div className="cta-banner-right">
          <a href="#" className="cta-bprimary">
            Book a Free Consultation
            <svg viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#" className="cta-bghost">View All Services</a>
        </div>
      </div>
    </section>
  );
}


export default CTASection;