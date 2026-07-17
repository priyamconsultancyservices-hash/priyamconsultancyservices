import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Layout from '@theme/Layout';
const banner = "/img/contact-us.webp";
import Head from '@docusaurus/Head';
import "../css/common.css";


function SEOHead() {
  const pageUrl = "https://www.priyamconsultancy.com/contact-us/";

  return (
    <Head>
      <title>Get in Touch with Priyam Consultancy | Contact Us </title>
      <meta name="description" content="Get professional support for business registration, compliance management, website development, HR solutions, and digital marketing. Contact PCS today." />
      <meta name="keywords" content="Priyam Consultancy Services, Contact Us" />
      <link rel="canonical" href="https://www.priyamconsultancy.com/contact-us/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Get in Touch with Priyam Consultancy | Contact Us " />
      <meta property="og:description" content="Get professional support for business registration, compliance management, website development, HR solutions, and digital marketing. Contact PCS today." />
      <meta property="og:url" content="https://www.priyamconsultancy.com/contact-us/" />
      <meta property="og:site_name" content=" Microsoft App" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Get in Touch with Priyam Consultancy | Contact Us " />
      <meta name="twitter:description" content="Get professional support for business registration, compliance management, website development, HR solutions, and digital marketing. Contact PCS today." />
  
    </Head>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", msg: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      name: form.name, email: form.email, phone: form.phone,
      company: form.company, message: form.msg, url: window.location.href,
    };
    emailjs.send("service_8xw6k3r", "template_jarui36", templateParams, "XWRnXi4hK2SvmRG3q")
      .then(() => { alert("Message Sent Successfully ✅"); setForm({ name:"", email:"", phone:"", company:"", msg:"" }); })
      .catch((error) => { console.log(error); alert("Failed to send ❌"); });
  };
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  // Bouncing balls animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d");

    const BALLS = [
      { x: 0, y: 0, r: 55, vx: 1.1, vy: 0.8,  color: "rgba(0,65,104,0.10)" },
      { x: 0, y: 0, r: 38, vx: -0.9, vy: 1.2,  color: "rgba(237,131,55,0.12)" },
      { x: 0, y: 0, r: 70, vx: 0.7, vy: -1.0,  color: "rgba(0,65,104,0.07)" },
      { x: 0, y: 0, r: 28, vx: -1.4, vy: -0.75, color: "rgba(237,131,55,0.09)" },
      { x: 0, y: 0, r: 48, vx: 1.3, vy: 1.1,   color: "rgba(10,82,130,0.09)" },
      { x: 0, y: 0, r: 22, vx: -0.8, vy: 1.5,  color: "rgba(237,131,55,0.15)" },
      { x: 0, y: 0, r: 62, vx: 0.6, vy: -0.9,  color: "rgba(0,42,68,0.07)" },
      { x: 0, y: 0, r: 34, vx: 1.6, vy: -1.2,  color: "rgba(237,131,55,0.08)" },
    ];

    function resize() {
      const rect = section.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      BALLS.forEach((b, i) => {
        if (b.x === 0 && b.y === 0) {
          b.x = (canvas.width / BALLS.length) * i + b.r + Math.random() * 60;
          b.y = Math.random() * (canvas.height - b.r * 2) + b.r;
        }
      });
    }

    let animId;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      BALLS.forEach((b) => {
        b.x += b.vx; b.y += b.vy;
        if (b.x - b.r < 0) { b.x = b.r; b.vx *= -1; }
        if (b.x + b.r > canvas.width) { b.x = canvas.width - b.r; b.vx *= -1; }
        if (b.y - b.r < 0) { b.y = b.r; b.vy *= -1; }
        if (b.y + b.r > canvas.height) { b.y = canvas.height - b.r; b.vy *= -1; }
        const grad = ctx.createRadialGradient(b.x - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.1, b.x, b.y, b.r);
        grad.addColorStop(0, b.color.replace(/[\d.]+\)$/, (v) => parseFloat(v) + 0.08 + ")"));
        grad.addColorStop(1, b.color);
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
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
    <Layout>
      <SEOHead />

      {/* HERO SECTION */}
      <section className="sc-banner">
        <div className="sc-banner-inner">
          <div className="sc-banner-left">
            <div className="sc-banner-eyebrow">
              <span className="sc-banner-dot" />
              Get In Touch
            </div>
            <h1 className="sc-banner-title">
              Contact <span className="sc-highlight">Us</span>
            </h1>
            <p className="sc-banner-subtitle">Have questions or need support? We’re just a message away. Let's talk and discover how we can help your business grow.</p>
            <p className="pcs-hero-quote">
              “Every great connection starts with a conversation - we’re here to listen and help you move forward”
            </p>
          </div>

          {/* Hero Right – Banner Image */}
          <div className="sc-banner-right">
            <img
              src={banner}
              alt="Contact Us Illustration"
            />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="pcs-contact-section" id="contact" ref={sectionRef}>
        <canvas id="pcs-ball-canvas" ref={canvasRef}></canvas>

        <div className="pcs-contact-inner">

          <div className="pcs-contact-grid">
            {/* Left: Info Card */}
            <div className="pcs-cs-info-card">
              <div className="pcs-cs-tag">
                <span className="pcs-cs-tag-dot"></span>Contact Info
              </div>
              <h3 className="pcs-cs-heading">We’d Love to Hear from You!  <em>Talk to Our Experts</em></h3>
              <p className="pcs-cs-subtext">
Whether you have a question, need support, or want to explore how we can collaborate              </p>

              <div className="pcs-cs-channel-list">
                <div className="pcs-cs-channel">
                  <div className="pcs-cs-channel-ico">
                    <img src="/img/icon/phone.webp" alt="Phone" style={{ width: "20px", height: "20px", objectFit: "contain" }} />
                  </div>
                  <div className="pcs-cs-channel-body">
                    <div className="pcs-cs-channel-title">Call us any time</div>
                    <div className="pcs-cs-channel-val">
                      <a href="tel:+919677444048">+91 96774 44048</a>
                      &nbsp;/&nbsp;
                      <a href="tel:+917904386418">+91 79043 86418</a>
                    </div>
                  </div>
                </div>
                <div className="pcs-cs-channel">
                  <div className="pcs-cs-channel-ico">
                    <img src="/img/icon/mail.webp" alt="Mail" style={{ width: "20px", height: "20px", objectFit: "contain" }} />
                  </div>
                  <div className="pcs-cs-channel-body">
                    <div className="pcs-cs-channel-title">Send Us Mail</div>
                    <div className="pcs-cs-channel-val">
                      <a href="mailto:sales@priyamconsultancy.com">sales@priyamconsultancy.com</a>
                    </div>
                  </div>
                </div>
                <div className="pcs-cs-channel">
                  <div className="pcs-cs-channel-ico">
                    <img src="/img/icon/location.webp" alt="Location" style={{ width: "20px", height: "20px", objectFit: "contain" }} />
                  </div>
                  <div className="pcs-cs-channel-body">
                    <div className="pcs-cs-channel-title">Visit Our Office</div>
                    <div className="pcs-cs-channel-val" style={{ whiteSpace: "normal", lineHeight: 1.5, fontSize: ".8rem" }}>
                      SF.11/4, Pooja Garden, Kalapatti Road,<br />
                      Civil Aerodrome Post, Coimbatore – 641014
                    </div>
                  </div>
                </div>
              </div>

              <div className="pcs-cs-divider"></div>

              <div className="pcs-cs-social">
                <span className="pcs-cs-social-label">Follow</span>
                <a className="pcs-cs-social-btn" href="#">in</a>
                <a className="pcs-cs-social-btn" href="#">f</a>
                <a className="pcs-cs-social-btn" href="#">ig</a>
                <a className="pcs-cs-social-btn" href="#">𝕏</a>
              </div>

              <div className="pcs-cs-quote-deco">
"We're just a message away. Let's talk and discover how we can help your business grow. "              </div>
            </div>

            {/* Right: Form Card */}
            <div className="pcs-cs-form-card">

              <div className="cf-badge">+ Free Quote</div>
              <div className="cf-title">Your Growth, <span> Our Mission.</span></div>
              <p className="cf-sub">Fill in your details — we'll get back within 24 hours.</p>

              <form onSubmit={sendEmail}>
                {/* Row 1: Name + Email */}
                <div className="cf-row">
                  <div className="cf-field">
                    <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="cf-field">
                    <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
                  </div>
                </div>

                {/* Row 2: Phone + Company */}
                <div className="cf-row">
                  <div className="cf-field">
                    <div className="cf-phone-wrap">
                      <span className="cf-phone-prefix">IN +91</span>
                      <input type="tel" name="phone" placeholder="Mobile Number" value={form.phone} onChange={handleChange} maxLength="10" pattern="[0-9]{10}" required />
                    </div>
                  </div>
                  <div className="cf-field">
                    <input type="text" name="company" placeholder="Company Name" value={form.company} onChange={handleChange} />
                  </div>
                </div>

                {/* Message */}
                <div className="cf-field">
                  <textarea name="msg" placeholder="Your Message" value={form.msg} onChange={handleChange} />
                </div>

                <div className="cf-submit-row">
                  <button type="submit" className="cf-submit">
                    Send Message <span className="cf-submit-arrow">→</span>
                  </button>
                  <span className="cf-note">We reply within<br />24 hours ✓</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="pcs-map-section">

        {/* Full-width map */}
        <div className="pcs-map-frame-wrap">

          <iframe
            title="Priyam Consultancy Services Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.3!2d77.0384169!3d11.0437549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8570043539609%3A0x153fa62eb3f9b6e4!2sPriyam%20Consultancy%20Services!5e0!3m2!1sen!2sin!4v1714200000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* Clickable overlay — opens Google Maps */}
          <a
            className="pcs-map-open-link"
            href="https://www.google.com/maps/place/Priyam+Consultancy+Services/@11.0437549,77.0384169,864m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba8570043539609:0x153fa62eb3f9b6e4!8m2!3d11.0437549!4d77.0384169!16s%2Fg%2F11ydmf6wk6?hl=en-US&entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            title="Open in Google Maps"
          >
            <span className="pcs-map-open-icon">↗</span>
            <span>Open in Google Maps</span>
          </a>
        </div>

      </section>
    </Layout>
  );
}