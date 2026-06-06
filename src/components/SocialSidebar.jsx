import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

/* ── Icons ── */
const CallIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="#004168">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z"/>
  </svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="#25D366">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const PHONE_NUMBER = "+919677444048";
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}`;

const EMAILJS_CONFIG = {
  serviceId:  "service_8xw6k3r",
  templateId: "template_jarui36",
  publicKey:  "XWRnXi4hK2SvmRG3q",
};

export default function SocialSidebar() {
  const [showForm, setShowForm]   = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]     = useState(false);
  const [form, setForm] = useState({ name:"", email:"", phone:"", company:"", message:"" });
  const hoverTimeout = useRef(null);

  const handleQuoteEnter = () => { clearTimeout(hoverTimeout.current); setShowForm(true); };
  const handleQuoteLeave = () => { hoverTimeout.current = setTimeout(() => setShowForm(false), 300); };
  const handleFormEnter  = () => clearTimeout(hoverTimeout.current);
  const handleFormLeave  = () => { hoverTimeout.current = setTimeout(() => setShowForm(false), 300); };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, { ...form, url: window.location.href }, EMAILJS_CONFIG.publicKey)
      .then(() => {
        setSending(false);
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setShowForm(false);
          setForm({ name:"", email:"", phone:"", company:"", message:"" });
        }, 2200);
      })
      .catch(() => { setSending(false); alert("Failed to send ❌ Please try again."); });
  };

  return (
    <>
      <style>{`
        @keyframes sbSlideIn {
          from { opacity: 0; transform: translateX(16px) scale(0.97); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes sbSlideUp {
          from { transform: translateY(22px); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }

        /* ════════════════════════════════════
           DESKTOP — right-side vertical sidebar
        ════════════════════════════════════ */
        .sb-wrap {
          position: fixed;
          right: 16px;
          top: 80%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          z-index: 1000;
        }

        /* ── Circle icon buttons (Call & WhatsApp) ── */
        .sb-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          position: relative;
          transition: transform 0.22s, box-shadow 0.22s;
          cursor: pointer;
          border: none;
          outline: none;
        }
        .sb-icon-call {
          background: #fff;
          box-shadow: 0 4px 16px rgba(0,0,0,0.13), 0 1px 4px rgba(0,0,0,0.07);
        }
        .sb-icon-call:hover {
          transform: translateY(-3px) scale(1.08);
          box-shadow: 0 10px 28px rgba(237,131,55,0.35);
        }
        .sb-icon-wa {
          background: #fff;
          box-shadow: 0 4px 16px rgba(237,131,55,0.35);
        }
        .sb-icon-wa:hover {
          transform: translateY(-3px) scale(1.08);
          box-shadow: 0 10px 28px rgba(237,131,55,0.5);
        }

        /* Tooltip */
        .sb-tip {
          position: absolute;
          right: 52px;
          background: #1a2e3d;
          color: #fff;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 6px;
          white-space: nowrap;
          pointer-events: none;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0;
          transition: opacity 0.18s;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
        }
        .sb-icon:hover .sb-tip { opacity: 1; }

        /* ── Request Quote pill ── */
        .sb-quote-wrapper { position: relative; }
        .sb-quote {
          background: #ed8337;
          border-radius: 50px;
          padding: 10px 0;
          width: 44px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
          outline: none;
          box-shadow: 0 4px 16px rgba(237,131,55,0.35);
          transition: transform 0.22s, box-shadow 0.22s;
          position: relative;
        }
        .sb-quote:hover {
          transform: translateY(-3px) scale(1.06);
          box-shadow: 0 10px 28px rgba(237,131,55,0.45);
        }
        .sb-quote-label {
          color: white;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.1em;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          margin-top: 7px;
          white-space: nowrap;
          font-family: 'Poppins', sans-serif;
          text-transform: uppercase;
        }

        /* ── Hover form — appears LEFT of quote button ── */
        .sb-hover-form {
          position: absolute;
          right: 58px;
          bottom: 0px;
          width: 360px;
          background: #fff;
          border-radius: 20px;
          padding: 26px 24px 22px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08);
          animation: sbSlideIn 0.22s ease;
          font-family: 'Poppins', sans-serif;
          z-index: 1100;
        }
        .sb-close {
          position: absolute;
          top: 12px; right: 14px;
          background: none; border: none;
          cursor: pointer; font-size: 20px;
          color: #aab4c2; line-height: 1;
        }
        .sb-close:hover { color: #555; }

        /* Form fields */
        .sb-field {
          width: 100%;
          margin-bottom: 14px;
          position: relative;
        }
        .sb-field input,
        .sb-field textarea {
          width: 100%;
          box-sizing: border-box;
          background: transparent;
          border: none;
          border-bottom: 1.5px solid #d0dbe5;
          padding: 9px 0 6px;
          font-size: 0.85rem;
          color: #0d1f2d;
          outline: none;
          font-family: 'Poppins', sans-serif;
          transition: border-color 0.22s;
        }
        .sb-field input::placeholder,
        .sb-field textarea::placeholder { color: #aab4c2; }
        .sb-field input:focus,
        .sb-field textarea:focus { border-color: #ed8337; }
        .sb-field textarea { resize: none; height: 60px; display: block; }

        .sb-phone-row {
          display: flex;
          align-items: flex-end;
          border-bottom: 1.5px solid #d0dbe5;
          margin-bottom: 14px;
          transition: border-color 0.22s;
        }
        .sb-phone-row:focus-within { border-color: #ed8337; }
        .sb-phone-prefix {
          font-size: 0.85rem; color: #004168; font-weight: 700;
          white-space: nowrap; padding: 9px 8px 6px 0;
          font-family: 'Poppins', sans-serif; flex-shrink: 0;
        }
        .sb-phone-row input {
          flex: 1; border: none; background: transparent;
          padding: 9px 0 6px 2px; font-size: 0.85rem;
          color: #0d1f2d; outline: none;
          font-family: 'Poppins', sans-serif;
        }
        .sb-phone-row input::placeholder { color: #aab4c2; }

        .sb-submit {
          display: inline-flex; align-items: center; gap: 8px;
          background: #ed8337; color: #fff; border: none;
          border-radius: 50px; padding: 0.75rem 1.6rem;
          font-size: 0.88rem; font-weight: 700; cursor: pointer;
          font-family: 'Poppins', sans-serif;
          box-shadow: 0 6px 20px rgba(0,65,104,0.22);
          transition: background 0.22s, transform 0.18s, box-shadow 0.22s;
          margin-top: 4px;
        }
        .sb-submit:hover {
          background: #004168;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(237,131,55,0.32);
        }
        .sb-submit:disabled { opacity: 0.7; cursor: not-allowed; }

        /* ════════════════════════════════════
           MOBILE — same right-side sidebar as desktop
        ════════════════════════════════════ */
        @media (max-width: 768px) {
          .sb-tip { display: none; }
          .sb-icon:active { transform: scale(0.92); }
          .sb-quote:active { transform: scale(0.95); }

          /* Form opens left of quote button, clamped to viewport */
          .sb-hover-form {
            right: 58px;
            left: unset;
            bottom: -100px;
            transform: none;
            width: 88vw;
            max-width: 320px;
          }
        }
      `}</style>

      {/* ════ Sidebar / Bottom bar ════ */}
      <div className="sb-wrap">

        {/* 1. Call button */}
        <a
          className="sb-icon sb-icon-call"
          href={`tel:${PHONE_NUMBER}`}
          aria-label="Call us"
        >
          <CallIcon />
          <span className="sb-tip">Call Us</span>
        </a>

        {/* 2. WhatsApp button */}
        <a
          className="sb-icon sb-icon-wa"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon />
          <span className="sb-tip">WhatsApp</span>
        </a>

        {/* 3. Request Quote — hover shows form (desktop) / tap (mobile) */}
        <div
          className="sb-quote-wrapper"
          onMouseEnter={handleQuoteEnter}
          onMouseLeave={handleQuoteLeave}
        >
          <button
            className="sb-quote"
            onClick={() => setShowForm(v => !v)}
            aria-label="Request Quote"
          >
            <QuoteIcon />
            <span className="sb-quote-label">Request Quote</span>
          </button>

          {showForm && (
            <div
              className="sb-hover-form"
              onMouseEnter={handleFormEnter}
              onMouseLeave={handleFormLeave}
            >
              <button className="sb-close" onClick={() => setShowForm(false)} aria-label="Close">×</button>

              <div style={{ display:"inline-flex", alignItems:"center", gap:"6px", fontSize:"0.58rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#004168", background:"rgba(0,65,104,0.06)", border:"1px solid rgba(0,65,104,0.12)", padding:"0.25rem 0.7rem", borderRadius:"4px", marginBottom:"8px" }}>Free Quote</div>
              <h2 style={{ fontSize:"1.2rem", fontWeight:800, color:"#0d1f2d", lineHeight:1.15, margin:"0 0 4px", letterSpacing:"-0.02em" }}>
                Your Growth, <span style={{ color:"#ed8337" }}>Our Mission.</span>
              </h2>
              <p style={{ fontSize:"0.78rem", color:"#8a9ab0", marginBottom:"16px" }}>
                Fill in your details — we'll get back within 24 hours.
              </p>

              {submitted ? (
                <div style={{ textAlign:"center", padding:"1.5rem 0" }}>
                  <div style={{ fontSize:"2.5rem", marginBottom:"10px" }}>✅</div>
                  <div style={{ fontWeight:800, fontSize:"1rem", color:"#0d1f2d", marginBottom:"4px" }}>Message Sent!</div>
                  <div style={{ fontSize:"0.82rem", color:"#8a9ab0" }}>We'll get back within 24 hours.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="sb-field">
                    <input type="text" name="name" placeholder="Your Name *"
                      value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="sb-field">
                    <input type="email" name="email" placeholder="Email Address *"
                      value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="sb-phone-row">
                    <span className="sb-phone-prefix">IN +91</span>
                    <input type="tel" name="phone" placeholder="Mobile Number *"
                      value={form.phone} onChange={handleChange}
                      maxLength="10" pattern="[0-9]{10}" required />
                  </div>
                  <div className="sb-field">
                    <input type="text" name="company" placeholder="Company Name"
                      value={form.company} onChange={handleChange} />
                  </div>
                  <div className="sb-field">
                    <textarea name="message" placeholder="Your Message"
                      value={form.message} onChange={handleChange} />
                  </div>
                  <div style={{ display:"flex", alignItems:"center" }}>
                    <button className="sb-submit" type="submit" disabled={sending}>
                      {sending ? "Sending…" : "Send Message"} <span>→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}