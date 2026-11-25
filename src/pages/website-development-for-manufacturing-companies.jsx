import { useEffect } from "react";
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

// ── SEO ──
const SEO_TITLE = "Website Development for Manufacturing Companies | Brand Kit";
const SEO_DESC = "Website development for manufacturing companies plus logo, SEO, Google profile & brochure in one brand kit. One Coimbatore team. Book a free consultation. ";
// Dummy placeholder image (inline SVG). Replace with real image paths, e.g. "/img/portfolio-1.webp"
const PH = (label) => "data:image/svg+xml;utf8," + encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'><rect width='800' height='600' fill='#3b5273'/><g fill='none' stroke='#9fb0c6' stroke-width='6' stroke-linejoin='round'><rect x='290' y='190' width='220' height='160' rx='14'/><circle cx='350' cy='245' r='18'/><path d='M300 340l70-70 45 45 35-35 60 60'/></g><text x='400' y='410' font-family='sans-serif' font-size='28' fill='#cbd5e1' text-anchor='middle'>${label}</text></svg>`
);

const PAGE_URL = "https://www.priyamconsultancy.com/website-development-for-manufacturing-companies";

// ── EmailJS (enquiry form) ──
// Dashboard: https://dashboard.emailjs.com  →  Email Services (Service ID), Email Templates (Template ID), Account > General (Public Key)
const EMAILJS = {
    serviceId: "service_tgb7n97",
    templateId: "template_uts615f",   // e.g. template_xxxxxxx
    publicKey: "55EA8RJ-Jkog63gtR",     // Account > General > Public Key
};

function SEOHead() {
    return (
        <Head>
            <title>{SEO_TITLE}</title>
            <meta name="robots" content="noindex, nofollow" />
            <meta name="keywords" content="Digital marketing for manufacturers, website design for manufacturing companies, websites for manufacturing companies, Industrial Website Development, manufacturing company, broacher design, Website development, Brochure design for manufacturers, B2B Website development service, Manufacturing Website Development services, website design for manufacturing companies,website development for manufacturers, Website company in coimbatore, Brochure design for manufacturers, manufacturing company website development." />
            <meta name="description" content={SEO_DESC} />
            <link rel="canonical" href={PAGE_URL} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={SEO_TITLE} />
            <meta property="og:description" content={SEO_DESC} />
            <meta property="og:url" content={PAGE_URL} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    );
}

// Page-scoped styles: every rule is prefixed with .pcs-mfg so nothing leaks into the rest of the site.
// Theme colours live in the :root block (now .pcs-mfg) at the top, change them there.
const PageStyles = () => (
    <style>{String.raw`
header.headerWrapper_ROKX, .footerTop_uYEV, .footerBottom_YdiN { display: none; }
.pcs-mfg{
  --navy:#0F1B2D;--navy2:#18273E;--navy3:#0A1422;--line:#2A3B55;
  --ink:#0F1B2D;--muted:#4A5A70;--muted2:#5A6A80;--soft:#C9D3E0;--soft2:#9FB0C6;
  --bg:#F5F6F8;--card:#FFFFFF;--border:#E1E6ED;
  --accent:#C2410C;--accent-dark:#9A3412;--accent-text:#B8440F;--accent-light:#FF8A4C;--accent-bg:#FFF4ED;
  --green:#1F8F4E;
  
  --d1:#1B3355;--d2:#13233B;--d3:#0A1422;--a:#FF8A4C;--a2:#FFB48A;--a3:#C2410C;--a3r:194,65,12;--a2r:255,180,138;--mr:19,35,59;--kr:10,20,34;
}
.pcs-mfg *{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth;scroll-padding-top:80px}
.pcs-mfg{font-family:var(--f-body),system-ui,"Segoe UI",Arial,sans-serif;background:var(--bg);color:var(--ink);line-height:1.55;overflow-x:clip}
.pcs-mfg h1,.pcs-mfg h2,.pcs-mfg h3,.pcs-mfg h4{font-family:var(--f-head),var(--f-body),system-ui,sans-serif;letter-spacing:-.01em;line-height:1.15}
.pcs-mfg a{color:inherit}
.pcs-mfg .mfg-wrap{max-width:1200px;margin:0 auto;padding:0 24px}
.pcs-mfg section{padding:96px 0}
.pcs-mfg .mfg-eyebrow{display:block;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--accent-text);margin-bottom:16px}
.pcs-mfg .mfg-dark .mfg-eyebrow{color:var(--accent-light)}
.pcs-mfg h2{font-size:clamp(30px,4vw,40px);margin-bottom:16px}
.pcs-mfg .mfg-lead{font-size:16px;color:var(--muted);max-width:760px}
.pcs-mfg .mfg-dark{background:var(--navy);color:#fff}
.pcs-mfg .mfg-dark .mfg-lead{color:var(--soft)}
.pcs-mfg .mfg-center{text-align:center}
.pcs-mfg .mfg-center .mfg-lead{margin:0 auto}
.pcs-mfg .mfg-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:52px;padding:14px 28px;border-radius:10px;font-weight:600;font-size:16px;text-decoration:none;border:0;cursor:pointer;font-family:inherit;transition:transform .2s,box-shadow .2s,background .2s;position:relative;overflow:hidden}
.pcs-mfg .mfg-btn:after{content:"";position:absolute;top:0;left:-120%;width:60%;height:100%;background:linear-gradient(110deg,transparent,rgba(255,255,255,.28),transparent);transition:left .6s}
.pcs-mfg .mfg-btn:hover:after{left:130%}
.pcs-mfg .mfg-btn-primary{background:var(--accent);color:#fff}
.pcs-mfg .mfg-btn-primary:hover{background:var(--accent-dark);transform:translateY(-2px);box-shadow:0 10px 24px rgba(194,65,12,.3)}
.pcs-mfg .mfg-btn-outline{background:transparent;color:#fff;border:1px solid #4A5F80}
.pcs-mfg .mfg-btn-outline:hover{border-color:#fff;transform:translateY(-2px)}
.pcs-mfg .mfg-btn-dark{background:var(--navy);color:#fff}
.pcs-mfg .mfg-btn-dark:hover{background:#1E3050;transform:translateY(-2px)}
.pcs-mfg .mfg-grid{display:grid;gap:20px}
.pcs-mfg .mfg-g3{grid-template-columns:repeat(3,minmax(0,1fr))}
.pcs-mfg .mfg-g6{grid-template-columns:repeat(6,minmax(0,1fr))}
.pcs-mfg.js .mfg-rv{opacity:0;transform:translateY(32px);transition:opacity .8s ease,transform .8s cubic-bezier(.2,.7,.2,1)}
.pcs-mfg.js .mfg-rv.mfg-l{transform:translateX(-40px)}
.pcs-mfg.js .mfg-rv.mfg-r{transform:translateX(40px)}
.pcs-mfg.js .mfg-rv.mfg-z{transform:scale(.94)}
.pcs-mfg.js .mfg-rv.mfg-in{opacity:1;transform:none}
h2.solution {font-size: clamp(27px, 3vw, 35px);
}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
@keyframes floatR{0%,100%{transform:translateY(0) rotate(var(--rot,0deg))}50%{transform:translateY(-12px) rotate(calc(var(--rot,0deg) + 2deg))}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(255,138,76,.55)}70%{box-shadow:0 0 0 16px rgba(255,138,76,0)}100%{box-shadow:0 0 0 0 rgba(255,138,76,0)}}
@keyframes shimmer{0%{background-position:-200px 0}100%{background-position:200px 0}}
@keyframes marquee{to{transform:translateX(-50%)}}
.pcs-mfg header{position:sticky;top:0;z-index:50;background:rgba(15,27,45,.92);backdrop-filter:blur(10px);border-bottom:1px solid #22324A;transition:box-shadow .3s}
.pcs-mfg header.mfg-sc{box-shadow:0 8px 24px rgba(0,0,0,.25)}
.pcs-mfg nav{display:flex;align-items:center;justify-content:space-between;gap:16px;height:72px}
.pcs-mfg .mfg-logo{display:flex;align-items:center;gap:10px;text-decoration:none;color:#fff;font-family:var(--f-head),sans-serif;font-weight:700;font-size:20px}
.pcs-mfg .mfg-logo span{width:36px;height:36px;border-radius:8px;background:var(--accent);display:grid;place-items:center;font-size:18px}
.pcs-mfg .mfg-logo img{display:block;height:44px;width:auto;max-width:100%;object-fit:contain}
.pcs-mfg footer .mfg-logo img{height:50px}
.pcs-mfg .mfg-menu{display:flex;align-items:center;gap:28px;list-style:none;padding:0}
.pcs-mfg .mfg-menu a:not(.mfg-btn){color:var(--soft);text-decoration:none;font-size:15px;font-weight:500;position:relative}
.pcs-mfg .mfg-menu a:not(.mfg-btn):after{content:"";position:absolute;left:0;bottom:-6px;height:2px;width:0;background:var(--accent-light);transition:width .3s}
.pcs-mfg .mfg-menu a:not(.mfg-btn):hover{color:#fff}
.pcs-mfg .mfg-menu a:not(.mfg-btn):hover:after{width:100%}
.pcs-mfg .mfg-menu .mfg-btn{min-height:44px;padding:10px 20px;font-size:15px}
.pcs-mfg .mfg-burger{display:none;background:none;border:0;color:#fff;font-size:26px;cursor:pointer;width:44px;height:44px}
.pcs-mfg .mfg-hero{padding:80px 0 96px;position:relative;overflow:hidden;background:radial-gradient(circle at 85% 20%,rgba(194,65,12,.22),transparent 45%),radial-gradient(circle at 5% 95%,rgba(27,51,85,.9),transparent 50%),var(--navy)}
.pcs-mfg .mfg-hero .mfg-wrap{display:grid;grid-template-columns:minmax(0,1fr);gap:56px;align-items:center;position:relative;z-index:3}
.pcs-mfg .mfg-hero .mfg-wrap>div{max-width:680px}
.pcs-mfg .mfg-pill{display:inline-block;border:1px solid #34486A;border-radius:999px;padding:6px 14px;font-size:13px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:#FFB48A;margin-bottom:24px}
.pcs-mfg h1{font-size:clamp(38px,5.2vw,56px);line-height:1.05;letter-spacing:-.02em;margin-bottom:24px}
.pcs-mfg h1 em{font-style:normal;background:linear-gradient(90deg,#FF8A4C,#FFB48A,#FF8A4C);background-size:200% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:shine 4s linear infinite}
@keyframes shine{to{background-position:200% center}}
.pcs-mfg .mfg-hero p{font-size:16px;color:var(--soft);max-width:640px;margin-bottom:28px}
.pcs-mfg .mfg-ctas{display:flex;flex-wrap:wrap;gap:12px}
.pcs-mfg .mfg-stats{display:flex;flex-wrap:wrap;gap:40px;margin-top:32px;padding-top:20px;border-top:1px solid #22324A}
.pcs-mfg .mfg-stats b{display:block;font-family:var(--f-head),sans-serif;font-size:28px}
.pcs-mfg .mfg-stats span{font-size:13px;color:var(--soft2)}
.pcs-mfg .mfg-mock{position:relative;height:480px}
.pcs-mfg .mfg-mock .mfg-glow{position:absolute;inset:10% 5%;border-radius:50%;background:radial-gradient(circle,rgba(255,138,76,.25),transparent 65%);filter:blur(20px);animation:float 8s ease-in-out infinite}
.pcs-mfg .mfg-mock .mfg-ring{position:absolute;left:50%;top:50%;width:440px;height:440px;margin:-220px 0 0 -220px;border:1px dashed rgba(255,255,255,.12);border-radius:50%;animation:spin 40s linear infinite}
.pcs-mfg .mfg-mock .mfg-ring:before{content:"";position:absolute;top:-5px;left:50%;width:10px;height:10px;border-radius:50%;background:var(--accent-light);box-shadow:0 0 14px var(--accent-light)}
.pcs-mfg .mfg-m-browser{position:absolute;left:4%;top:10px;width:78%;height:300px;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.4);animation:float 7s ease-in-out infinite}
.pcs-mfg .mfg-m-bar{height:32px;background:#E7EAEF;display:flex;align-items:center;gap:6px;padding:0 12px}
.pcs-mfg .mfg-m-bar i{width:10px;height:10px;border-radius:50%;background:#C3CAD5}
.pcs-mfg .mfg-m-bar i:first-child{background:#F87171}
.pcs-mfg .mfg-m-bar i:nth-child(2){background:#FBBF24}
.pcs-mfg .mfg-m-bar i:nth-child(3){background:#34D399}
.pcs-mfg .mfg-m-bar u{flex:1;height:16px;margin-left:12px;border-radius:4px;background:#fff}
.pcs-mfg .mfg-m-body{padding:20px;display:grid;gap:10px}
.pcs-mfg .mfg-m-body .mfg-bar{height:12px;border-radius:3px;background:#D5DBE4}
.pcs-mfg .mfg-m-nav{display:flex;justify-content:space-between;align-items:center}
.pcs-mfg .mfg-m-nav b{width:90px;height:14px;border-radius:3px;background:var(--navy)}
.pcs-mfg .mfg-m-nav i{width:70px;height:24px;border-radius:5px;background:var(--accent);animation:pulse 2.4s infinite}
.pcs-mfg .mfg-type1,.pcs-mfg .mfg-type2{height:22px;border-radius:4px;background:var(--navy);width:0;animation:type 6s ease-in-out infinite}
.pcs-mfg .mfg-type1{margin-top:12px;--w:75%}
.pcs-mfg .mfg-type2{--w:55%;animation-delay:.6s}
@keyframes type{0%,8%{width:0}35%,85%{width:var(--w)}100%{width:0}}
.pcs-mfg .mfg-m-tiles{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:6px}
.pcs-mfg .mfg-m-tiles span{height:70px;border-radius:6px;background:linear-gradient(90deg,#EEF1F5 0,#F8FAFC 40px,#EEF1F5 80px) #EEF1F5;background-size:400px 100%;animation:shimmer 2s linear infinite}
.pcs-mfg .mfg-m-phone{position:absolute;right:0;top:160px;width:34%;height:300px;background:#1A2A42;border:6px solid var(--line);border-radius:26px;padding:16px 12px;display:grid;gap:10px;align-content:start;box-shadow:0 24px 60px rgba(0,0,0,.45);animation:float 6s ease-in-out infinite;animation-delay:-2s}
.pcs-mfg .mfg-m-phone .mfg-gbp{background:#fff;border-radius:10px;padding:12px;display:grid;gap:6px}
.pcs-mfg .mfg-m-phone .mfg-gbp b{display:block;height:10px;width:80%;border-radius:3px;background:var(--navy)}
.pcs-mfg .mfg-stars{display:flex;gap:3px}
.pcs-mfg .mfg-stars i{width:10px;height:10px;border-radius:2px;background:#E5E7EB;animation:star 5s infinite}
.pcs-mfg .mfg-stars i:nth-child(2){animation-delay:.2s}
.pcs-mfg .mfg-stars i:nth-child(3){animation-delay:.4s}
.pcs-mfg .mfg-stars i:nth-child(4){animation-delay:.6s}
.pcs-mfg .mfg-stars i:nth-child(5){animation-delay:.8s}
@keyframes star{0%,15%{background:#E5E7EB;transform:scale(1)}25%{background:#F5A623;transform:scale(1.35)}35%,90%{background:#F5A623;transform:scale(1)}100%{background:#E5E7EB}}
.pcs-mfg .mfg-map{position:relative;height:56px;border-radius:6px;background:repeating-linear-gradient(45deg,#E3ECF7 0 8px,#EDF3FA 8px 16px)}
.pcs-mfg .mfg-map i{position:absolute;left:50%;top:8px;width:16px;height:16px;margin-left:-8px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:var(--accent);animation:pin 2s ease-in-out infinite}
@keyframes pin{0%,100%{top:8px}50%{top:2px}}
.pcs-mfg .mfg-m-card{position:absolute;left:0;bottom:6px;width:46%;height:150px;background:linear-gradient(135deg,var(--accent),#E25A1C);border-radius:10px;padding:22px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 24px 50px rgba(0,0,0,.4);--rot:-4deg;transform:rotate(-4deg);animation:floatR 6.5s ease-in-out infinite;animation-delay:-1s}
.pcs-mfg .mfg-m-letter{position:absolute;left:38%;bottom:24px;width:30%;height:180px;background:#fff;border-radius:6px;padding:14px;display:grid;gap:8px;align-content:start;box-shadow:0 20px 40px rgba(0,0,0,.35);--rot:3deg;transform:rotate(3deg);animation:floatR 7.5s ease-in-out infinite;animation-delay:-3s}
.pcs-mfg .mfg-hb{position:absolute;display:flex;align-items:center;gap:8px;background:#fff;color:var(--ink);font-size:13px;font-weight:600;padding:8px 14px 8px 8px;border-radius:999px;box-shadow:0 12px 28px rgba(0,0,0,.3);opacity:0;animation:badge 9s infinite;z-index:3;white-space:nowrap}
.pcs-mfg .mfg-hb i{width:24px;height:24px;border-radius:50%;display:grid;place-items:center;background:#E9F6EE;color:var(--green);font-style:normal;font-size:13px}
.pcs-mfg .mfg-hb1{left:-4%;top:40px}
.pcs-mfg .mfg-hb2{right:-2%;top:110px;animation-delay:3s}
.pcs-mfg .mfg-hb3{right:12%;bottom:-6px;animation-delay:6s}
@keyframes badge{0%{opacity:0;transform:translateY(12px) scale(.9)}5%,28%{opacity:1;transform:none}33%,100%{opacity:0;transform:translateY(-8px)}}
.pcs-mfg .mfg-mq{background:#fff;border-bottom:1px solid var(--border);overflow:hidden;padding:18px 0;mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)}
.pcs-mfg .mfg-mq div{display:inline-flex;gap:40px;white-space:nowrap;animation:marquee 30s linear infinite;padding-left:40px}
.pcs-mfg .mfg-mq:hover div{animation-play-state:paused}
.pcs-mfg .mfg-mq span{font-size:15px;font-weight:600;color:#3A4A60;display:inline-flex;align-items:center;gap:10px}
.pcs-mfg .mfg-mq span:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--accent)}
.pcs-mfg .mfg-prob .mfg-wrap{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
.pcs-mfg .mfg-pvis{position:relative;height:540px;border-radius:24px;overflow:hidden;background:radial-gradient(circle at 50% 55%,#1B3355,var(--navy) 70%)}
.pcs-mfg .mfg-pvis .mfg-grid-bg{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);background-size:32px 32px}
.pcs-mfg .mfg-pvis .mfg-orbit{position:absolute;left:50%;top:55%;width:340px;height:340px;margin:-170px 0 0 -170px;border:1px dashed rgba(255,138,76,.35);border-radius:50%;animation:spin 30s linear infinite}
.pcs-mfg .mfg-pvis .mfg-orbit:before{content:"";position:absolute;top:50%;left:-6px;width:12px;height:12px;border-radius:50%;background:var(--accent-light);box-shadow:0 0 16px var(--accent-light)}
.pcs-mfg .mfg-factory{position:absolute;left:50%;top:55%;transform:translate(-50%,-50%);width:220px}
.pcs-mfg .mfg-smoke{position:absolute;width:18px;height:18px;border-radius:50%;background:rgba(255,255,255,.35);animation:smoke 4s ease-out infinite;opacity:0}
.pcs-mfg .mfg-smoke.mfg-s1{left:52px;top:-6px}
.pcs-mfg .mfg-smoke.mfg-s2{left:52px;top:-6px;animation-delay:1.3s}
.pcs-mfg .mfg-smoke.mfg-s3{left:112px;top:14px;animation-delay:.7s}
.pcs-mfg .mfg-smoke.mfg-s4{left:112px;top:14px;animation-delay:2.2s}
@keyframes smoke{0%{opacity:.7;transform:translate(0,0) scale(.6)}100%{opacity:0;transform:translate(18px,-70px) scale(2.2)}}
.pcs-mfg .mfg-pchip{position:absolute;display:flex;align-items:center;gap:8px;background:#fff;color:var(--ink);font-size:13px;font-weight:600;padding:9px 14px 9px 10px;border-radius:999px;box-shadow:0 12px 26px rgba(0,0,0,.3);animation:float 6s ease-in-out infinite;white-space:nowrap}
.pcs-mfg .mfg-pchip svg{flex:none}
.pcs-mfg .mfg-pc1{left:6%;top:9%}
.pcs-mfg .mfg-pc2{right:6%;top:15%;animation-delay:-1s}
.pcs-mfg .mfg-pc3{left:3%;top:43%;animation-delay:-2s}
.pcs-mfg .mfg-pc4{right:3%;top:50%;animation-delay:-3s}
.pcs-mfg .mfg-pc5{left:9%;bottom:9%;animation-delay:-4s}
.pcs-mfg .mfg-pc6{right:8%;bottom:14%;animation-delay:-5s}
.pcs-mfg .mfg-pvis .mfg-tag{position:absolute;left:50%;bottom:22px;transform:translateX(-50%);font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--soft2);font-weight:600}
.pcs-mfg .mfg-plist{list-style:none;padding:0;margin-top:28px}
.pcs-mfg .mfg-plist li{display:flex;gap:16px;padding:16px 0;border-bottom:1px solid var(--border)}
.pcs-mfg .mfg-plist li:first-child{border-top:1px solid var(--border)}
.pcs-mfg .mfg-plist span{font-family:var(--f-head),sans-serif;font-weight:700;color:var(--accent-text);font-size:15px;min-width:24px;padding-top:1px}
.pcs-mfg .mfg-plist b{display:block;font-size:16px}
.pcs-mfg .mfg-plist p{font-size:15px;color:var(--muted)}
.pcs-mfg .mfg-bridge{margin-top:24px;font-size:17px;font-weight:600}
.pcs-mfg .mfg-bridge span{color:var(--accent-text)}
.pcs-mfg .mfg-sol{position:relative;overflow:hidden;background:radial-gradient(circle at 80% 40%,rgba(194,65,12,.18),transparent 45%),var(--navy)}
.pcs-mfg .mfg-sol .mfg-wrap{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
.pcs-mfg .mfg-slist{list-style:none;padding:0;margin-top:28px;border-top:1px solid var(--line)}
.pcs-mfg .mfg-slist li{border-bottom:1px solid var(--line)}
.pcs-mfg .mfg-sbtn{width:100%;display:flex;align-items:center;gap:16px;background:none;border:0;color:var(--soft);font:inherit;text-align:left;cursor:pointer;padding:16px 0;min-height:56px;position:relative}
.pcs-mfg .mfg-sbtn .mfg-n{font-family:var(--f-head),sans-serif;font-weight:700;font-size:14px;color:var(--soft2);min-width:24px;transition:color .3s}
.pcs-mfg .mfg-sbtn .mfg-t{font-family:var(--f-head),sans-serif;font-size:19px;font-weight:700;flex:1;transition:color .3s,transform .3s}
.pcs-mfg .mfg-sbtn .mfg-ar{opacity:0;transform:translateX(-8px);transition:.3s;color:var(--accent-light)}
.pcs-mfg .mfg-sbtn:hover .mfg-t{color:#fff}
.pcs-mfg li.mfg-on .mfg-sbtn .mfg-n{color:var(--accent-light)}
.pcs-mfg li.mfg-on .mfg-sbtn .mfg-t{color:#fff;transform:translateX(6px)}
.pcs-mfg li.mfg-on .mfg-sbtn .mfg-ar{opacity:1;transform:none}
.pcs-mfg .mfg-sdet{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s ease}
.pcs-mfg li.mfg-on .mfg-sdet{grid-template-rows:1fr}
.pcs-mfg .mfg-sdet>div{overflow:hidden;padding-left:40px}
.pcs-mfg .mfg-sdet p{color:var(--soft);font-size:15px;padding:16px 0px}
.pcs-mfg .mfg-sdet small{display:block;color:var(--soft2);font-size:13px;margin:8px 0 16px}
.pcs-mfg .mfg-sprog{position:absolute;left:0;bottom:-1px;height:2px;width:0;background:var(--accent-light)}
.pcs-mfg .mfg-orb{position:relative;width:min(480px,100%);aspect-ratio:1;margin:auto}
.pcs-mfg .mfg-orb .mfg-r1,.pcs-mfg .mfg-orb .mfg-r2,.pcs-mfg .mfg-orb .mfg-r3{position:absolute;border-radius:50%}
.pcs-mfg .mfg-orb .mfg-r1{inset:8%;border:1px solid rgba(255,255,255,.1)}
.pcs-mfg .mfg-orb .mfg-r2{inset:0;border:1px dashed rgba(255,138,76,.35);animation:spin 50s linear infinite}
.pcs-mfg .mfg-orb .mfg-r3{inset:8%;animation:spin 14s linear infinite}
.pcs-mfg .mfg-orb .mfg-r3:before{content:"";position:absolute;top:-5px;left:50%;width:10px;height:10px;border-radius:50%;background:var(--accent-light);box-shadow:0 0 16px var(--accent-light)}
.pcs-mfg .mfg-onode{position:absolute;width:64px;height:64px;margin:-32px 0 0 -32px;border-radius:50%;background:var(--navy2);border:1px solid var(--line);display:grid;place-items:center;color:var(--soft2);cursor:pointer;transition:transform .4s,background .4s,color .4s,border-color .4s,box-shadow .4s;padding:0}
.pcs-mfg .mfg-onode:hover{color:#fff;border-color:var(--accent-light)}
.pcs-mfg .mfg-onode.mfg-on{background:var(--accent);border-color:var(--accent);color:#fff;transform:scale(1.18);box-shadow:0 0 0 8px rgba(194,65,12,.18),0 0 40px rgba(255,138,76,.5)}
.pcs-mfg .mfg-hub{position:absolute;inset:27%;border-radius:50%;background:radial-gradient(circle at 30% 25%,#22385A,var(--navy2) 70%);border:1px solid var(--line);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:12%;box-shadow:inset 0 0 40px rgba(0,0,0,.35),0 0 60px rgba(194,65,12,.15)}
.pcs-mfg .mfg-hub .mfg-hi{color:var(--accent-light);margin-bottom:10px;transition:opacity .3s,transform .4s}
.pcs-mfg .mfg-hub small{font-family:var(--f-head),sans-serif;font-weight:700;color:var(--soft2);font-size:13px;letter-spacing:.06em}
.pcs-mfg .mfg-hub b{font-family:var(--f-head),sans-serif;font-size:clamp(16px,2vw,21px);line-height:1.2;margin-top:4px;transition:opacity .3s,transform .4s}
.pcs-mfg .mfg-hub.mfg-sw .mfg-hi,.pcs-mfg .mfg-hub.mfg-sw b{opacity:0;transform:translateY(8px) scale(.95)}
.pcs-mfg .mfg-pw{position:relative;background:linear-gradient(180deg,#F8FAFD 0%,#EEF3FA 100%);color:var(--ink);overflow:hidden;padding:88px 0 80px;border-top:1px solid var(--border)}
.pcs-mfg .mfg-pw .mfg-dots{position:absolute;inset:0;background-image:radial-gradient(rgba(15,27,45,.09) 1.2px,transparent 1.6px);background-size:26px 26px;animation:drift 40s linear infinite;mask-image:radial-gradient(ellipse at 50% 50%,#000 30%,transparent 80%);pointer-events:none}
@keyframes drift{to{background-position:260px 130px}}
.pcs-mfg .mfg-pw .mfg-pb{position:absolute;border-radius:50%;filter:blur(50px);pointer-events:none;animation:float 12s ease-in-out infinite}
.pcs-mfg .mfg-pw .mfg-pb1{width:340px;height:340px;background:rgba(255,138,76,.22);left:-80px;top:60px}
.pcs-mfg .mfg-pw .mfg-pb2{width:300px;height:300px;background:rgba(56,120,220,.16);right:-60px;top:180px;animation-delay:-4s}
.pcs-mfg .mfg-pw .mfg-pb3{width:220px;height:220px;background:rgba(255,180,138,.25);left:45%;bottom:-80px;animation-delay:-8s}
.pcs-mfg .mfg-pw .mfg-ln{position:absolute;left:-10%;right:-10%;top:58%;height:1px;background:linear-gradient(90deg,transparent,rgba(194,65,12,.35),transparent);pointer-events:none}
.pcs-mfg .mfg-pw .mfg-ln:after{content:"";position:absolute;top:-3px;left:0;width:7px;height:7px;border-radius:50%;background:var(--accent);box-shadow:0 0 12px var(--accent);animation:run 7s linear infinite}
@keyframes run{to{left:100%}}
.pcs-mfg .mfg-pw .mfg-lb{display:flex;justify-content:center;align-items:center;gap:16px;font:600 13px/1 var(--f-body),sans-serif;letter-spacing:6px;color:var(--accent-text);text-transform:uppercase;position:relative;z-index:2}
.pcs-mfg .mfg-pw .mfg-lb:before,.pcs-mfg .mfg-pw .mfg-lb:after{content:"";width:28px;height:1px;background:var(--accent-text)}
.pcs-mfg .mfg-pw h2{position:relative;z-index:2;text-align:center;margin:18px auto 0;max-width:760px;padding:0 20px}
.pcs-mfg .mfg-pw .mfg-bgt{position:absolute;left:0;right:0;top:100px;text-align:center;font-size:clamp(60px,15vw,230px);font-weight:900;letter-spacing:6px;color:rgba(15,27,45,.045);line-height:1;pointer-events:none;user-select:none;font-family:var(--f-body),sans-serif}
.pcs-mfg .mfg-cvw{position:relative;margin-top:56px;z-index:2}
.pcs-mfg .mfg-cv{position:relative;height:470px;perspective:1200px}
.pcs-mfg .mfg-cd{position:absolute;left:50%;top:10px;height:450px;border-radius:22px;overflow:hidden;cursor:pointer;color:#fff;border:1px solid rgba(255,255,255,.25);box-shadow:0 22px 44px rgba(15,27,45,.18);transition:transform .3s cubic-bezier(.25,.8,.35,1),opacity .25s,box-shadow .3s,border-color .3s}
.pcs-mfg .mfg-cd.mfg-a{border-color:var(--a3);box-shadow:0 30px 60px rgba(15,27,45,.25),0 0 0 4px rgba(194,65,12,.18)}
.pcs-mfg .mfg-cd .mfg-art{position:absolute;inset:0;display:grid;place-items:center}
.pcs-mfg .mfg-cd .mfg-gl{font-weight:900;font-size:34px;text-align:center;line-height:1.1;letter-spacing:1px;color:#fff;font-family:var(--f-body),sans-serif}
.pcs-mfg .mfg-cd .mfg-ov{position:absolute;inset:0;background:linear-gradient(180deg,transparent 45%,rgba(var(--kr),.92))}
.pcs-mfg .mfg-cd:not(.mfg-a) .mfg-ov{background:linear-gradient(180deg,rgba(var(--kr),.35),rgba(var(--kr),.9))}
.pcs-mfg .mfg-cd .mfg-tx{position:absolute;left:22px;right:22px;bottom:22px}
.pcs-mfg .mfg-cd:not(.mfg-a) .mfg-tx{opacity:.7}
.pcs-mfg .mfg-cd small{display:block;font:600 11px var(--f-body),sans-serif;letter-spacing:3px;color:var(--a2);text-transform:uppercase}
.pcs-mfg .mfg-cd h3{font-size:22px;margin:6px 0 10px;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,.25)}
.pcs-mfg .mfg-cd em{font:600 11px var(--f-body),sans-serif;letter-spacing:3px;font-style:normal;color:#cbd5e1}
.pcs-mfg .mfg-cd i{position:absolute;right:0;bottom:0;width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);display:grid;place-items:center;font-style:normal;transition:.4s}
.pcs-mfg .mfg-cd.mfg-a i{background:var(--a3);border-color:var(--a3);box-shadow:0 0 20px var(--a3)}
.pcs-mfg .mfg-mk{width:64%;height:56%;margin-top:-60px;background:#fff;border-radius:8px;box-shadow:0 20px 40px rgba(0,0,0,.45);padding:8px;display:grid;gap:6px;grid-template-rows:12px 1.4fr 1fr}
.pcs-mfg .mfg-mk b{background:#111;border-radius:4px}
.pcs-mfg .mfg-mk u{background:linear-gradient(90deg,#f59e0b,#ec4899);border-radius:6px;text-decoration:none}
.pcs-mfg .mfg-mk s{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;text-decoration:none}
.pcs-mfg .mfg-mk span{background:#e2e8f0;border-radius:6px}
.pcs-mfg .mfg-nv{position:absolute;top:50%;margin-top:-22px;width:48px;height:48px;border-radius:50%;border:1px solid var(--border);background:#fff;color:var(--ink);box-shadow:0 8px 20px rgba(15,27,45,.12);font-size:22px;cursor:pointer;z-index:20;transition:.3s}
.pcs-mfg .mfg-nv:hover{background:var(--accent);border-color:var(--accent);color:#fff}
.pcs-mfg .mfg-dts{display:flex;justify-content:center;gap:10px;margin-top:20px;position:relative;z-index:2}
.pcs-mfg .mfg-dts button{width:8px;height:8px;padding:0;border:0;border-radius:8px;background:#C3CAD5;cursor:pointer;transition:.4s;position:relative}
.pcs-mfg .mfg-dts button:after{content:"";position:absolute;inset:-10px}
.pcs-mfg .mfg-dts button.mfg-a{width:26px;background:var(--accent)}
.pcs-mfg .mfg-pw .mfg-more{text-align:center;margin-top:36px;position:relative;z-index:2}
.pcs-mfg .mfg-hw{background:radial-gradient(circle at 80% 40%,rgba(194,65,12,.18),transparent 45%),var(--navy);color:#fff;overflow:hidden;padding:96px 0 88px}
.pcs-mfg .mfg-rd-head{text-align:center;max-width:640px;margin:0 auto 56px}
.pcs-mfg .mfg-rd-head h2{font-size:clamp(36px,5.2vw,50px);line-height:1.02;letter-spacing:-.035em;margin:0;color:#fff}
.pcs-mfg .mfg-rd-head h2 span{display:block;color:var(--soft2);font-size: 38px;
    margin-top: 20px;}
.pcs-mfg .mfg-rd-head .mfg-lead{margin:18px auto 0;font-size:17px;color:var(--soft2)}
@keyframes rdpop{0%{transform:scale(.7)}55%{transform:scale(1.2)}100%{transform:scale(1)}}
@keyframes rdring{0%{box-shadow:0 0 0 0 rgba(255,138,76,.55)}100%{box-shadow:0 0 0 18px rgba(255,138,76,0)}}
.pcs-mfg .mfg-rd{display:grid;grid-template-columns:minmax(0,1fr) 340px minmax(0,1fr);gap:20px 36px;align-items:stretch}
.pcs-mfg .mfg-rd-col{display:grid;grid-template-rows:repeat(3,1fr);gap:20px}
.pcs-mfg .mfg-rd-row{position:relative;display:flex;align-items:center;gap:16px}
.pcs-mfg .mfg-rd-col.mfg-l .mfg-rd-row{flex-direction:row-reverse}
.pcs-mfg .mfg-rd-row:before,.pcs-mfg .mfg-rd-row:after{content:"";position:absolute;top:50%;height:calc(100% + 20px);width:3px;border-radius:3px}
.pcs-mfg .mfg-rd-col.mfg-l .mfg-rd-row:before,.pcs-mfg .mfg-rd-col.mfg-l .mfg-rd-row:after{right:24.5px}
.pcs-mfg .mfg-rd-col.mfg-r .mfg-rd-row:before,.pcs-mfg .mfg-rd-col.mfg-r .mfg-rd-row:after{left:24.5px}
.pcs-mfg .mfg-rd-row:before{background-image:linear-gradient(180deg,var(--line) 50%,transparent 0);background-size:3px 12px}
.pcs-mfg .mfg-rd-row:after{background:linear-gradient(180deg,var(--accent),var(--accent-light));box-shadow:0 0 8px rgba(255,138,76,.5);transform:scaleY(0);transform-origin:top;transition:transform .55s ease}
.pcs-mfg .mfg-rd-row.mfg-done:after{transform:scaleY(1)}
.pcs-mfg .mfg-rd-col .mfg-rd-row:last-child:before,.pcs-mfg .mfg-rd-col .mfg-rd-row:last-child:after{display:none}
.pcs-mfg .mfg-rd-node{position:relative;z-index:2;flex:none;width:52px;height:52px;border-radius:50%;display:grid;place-items:center;background:var(--navy2);border:2px solid var(--line);color:var(--soft2);font:700 17px var(--f-head),var(--f-body),sans-serif;cursor:pointer;transition:background .4s,border-color .4s,color .4s}
.pcs-mfg .mfg-rd-row.mfg-on .mfg-rd-node{background:radial-gradient(circle at 35% 30%,var(--accent-light),var(--accent) 72%);border-color:var(--accent-light);color:#fff;animation:rdpop .7s cubic-bezier(.3,1.4,.5,1) both}
.pcs-mfg .mfg-rd-row.mfg-cur .mfg-rd-node{box-shadow:0 0 24px rgba(255,138,76,.55)}
.pcs-mfg .mfg-rd-row.mfg-cur .mfg-rd-node:after{content:"";position:absolute;inset:-2px;border-radius:50%;animation:rdring 1.8s ease-out infinite}
.pcs-mfg .mfg-rd-node:focus-visible{outline:2px solid var(--accent-light);outline-offset:4px}
.pcs-mfg .mfg-rd-card{flex:1;min-width:0;padding:18px 20px;background:var(--navy2);border:1px solid var(--line);border-radius:14px;opacity:0;transition:opacity .7s ease,transform .8s cubic-bezier(.22,.7,.2,1),border-color .4s,box-shadow .4s}
.pcs-mfg .mfg-rd-col.mfg-l .mfg-rd-card{transform:translateX(-34px) scale(.96)}
.pcs-mfg .mfg-rd-col.mfg-r .mfg-rd-card{transform:translateX(34px) scale(.96)}
.pcs-mfg .mfg-rd-row.mfg-on .mfg-rd-card{opacity:1;transform:none;border-color:rgba(194,65,12,.55)}
.pcs-mfg .mfg-rd-row.mfg-cur .mfg-rd-card{box-shadow:0 18px 40px rgba(0,0,0,.4),0 0 0 1px var(--accent) inset}
.pcs-mfg .mfg-rd-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:8px}
.pcs-mfg .mfg-rd-top small{font-size:12px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--accent-light)}
.pcs-mfg .mfg-rd-ico{width:32px;height:32px;flex:none;border-radius:9px;background:var(--navy3);color:var(--soft);display:grid;place-items:center;transition:background .4s,color .4s}
.pcs-mfg .mfg-rd-ico svg{width:16px;height:16px}
.pcs-mfg .mfg-rd-row.mfg-on .mfg-rd-ico{background:var(--accent);color:#fff}
.pcs-mfg .mfg-rd-card h3{font-size:19px;color:#fff;letter-spacing:-.02em;margin-bottom:6px}
.pcs-mfg .mfg-rd-card p{font-size:14px;line-height:1.55;color:var(--soft)}
.pcs-mfg .mfg-rd-center{position:relative;align-self:center;width:100%;aspect-ratio:1}
.pcs-mfg .mfg-rc-glow{position:absolute;inset:6%;border-radius:50%;background:radial-gradient(circle,rgba(255,138,76,.28),transparent 68%);filter:blur(14px);animation:float 8s ease-in-out infinite}
.pcs-mfg .mfg-rc-prog{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg)}
.pcs-mfg .mfg-rc-prog circle{fill:none;stroke-width:1.6}
.pcs-mfg .mfg-rc-prog .mfg-t{stroke:var(--line)}
.pcs-mfg .mfg-rc-prog .mfg-p{stroke:var(--accent-light);stroke-linecap:round;stroke-dasharray:100;stroke-dashoffset:100;transition:stroke-dashoffset .7s ease;filter:drop-shadow(0 0 3px rgba(255,138,76,.8))}
.pcs-mfg .mfg-rc-orbit{position:absolute;inset:10%;border:1px dashed rgba(255,138,76,.35);border-radius:50%;animation:spin 26s linear infinite}
.pcs-mfg .mfg-rc-orbit i{position:absolute;width:12px;height:12px;border-radius:50%;background:var(--accent-light);box-shadow:0 0 14px var(--accent-light)}
.pcs-mfg .mfg-rc-orbit i:nth-child(1){top:-6px;left:50%;margin-left:-6px}
.pcs-mfg .mfg-rc-orbit i:nth-child(2){bottom:14%;left:6%;width:8px;height:8px;opacity:.7}
.pcs-mfg .mfg-rc-orbit i:nth-child(3){bottom:14%;right:6%;width:8px;height:8px;opacity:.7}
.pcs-mfg .mfg-rc-hub{position:absolute;inset:21%;border-radius:50%;background:radial-gradient(circle at 30% 25%,#22385A,var(--navy2) 70%);border:1px solid var(--line);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:10%;box-shadow:inset 0 0 40px rgba(0,0,0,.35),0 0 60px rgba(194,65,12,.18)}
.pcs-mfg .mfg-rc-hub .mfg-hi{color:var(--accent-light);margin-bottom:8px;transition:opacity .3s,transform .4s}
.pcs-mfg .mfg-rc-hub .mfg-hi svg{width:38px;height:38px}
.pcs-mfg .mfg-rc-hub small{font-family:var(--f-head),sans-serif;font-weight:700;color:var(--soft2);font-size:12px;letter-spacing:.08em}
.pcs-mfg .mfg-rc-hub b{font-family:var(--f-head),sans-serif;font-size:clamp(15px,1.6vw,19px);line-height:1.2;margin-top:4px;transition:opacity .3s,transform .4s}
.pcs-mfg .mfg-rc-hub.mfg-sw .mfg-hi,.pcs-mfg .mfg-rc-hub.mfg-sw b{opacity:0;transform:translateY(8px) scale(.95)}
@media(max-width:999px){.pcs-mfg .mfg-hw{padding:64px 0}
.pcs-mfg .mfg-rd-head{margin-bottom:32px}
.pcs-mfg .mfg-rd{grid-template-columns:1fr;gap:20px;max-width:560px;margin:0 auto}
.pcs-mfg .mfg-rd-center{order:-1;width:min(260px,72vw);margin:0 auto 12px}
.pcs-mfg .mfg-rd-col{display:contents}
.pcs-mfg .mfg-rd-row,.pcs-mfg .mfg-rd-col.mfg-l .mfg-rd-row{flex-direction:row;align-items:flex-start}
.pcs-mfg .mfg-rd-row:before,.pcs-mfg .mfg-rd-row:after,.pcs-mfg .mfg-rd-col.mfg-l .mfg-rd-row:before,.pcs-mfg .mfg-rd-col.mfg-l .mfg-rd-row:after,.pcs-mfg .mfg-rd-col.mfg-r .mfg-rd-row:before,.pcs-mfg .mfg-rd-col.mfg-r .mfg-rd-row:after{left:24.5px;right:auto;top:52px;height:calc(100% - 52px + 20px)}
.pcs-mfg .mfg-rd-col .mfg-rd-row:last-child:before,.pcs-mfg .mfg-rd-col .mfg-rd-row:last-child:after{display:block}
.pcs-mfg .mfg-rd-col.mfg-r .mfg-rd-row:last-child:before,.pcs-mfg .mfg-rd-col.mfg-r .mfg-rd-row:last-child:after{display:none}
.pcs-mfg .mfg-rd-col.mfg-l .mfg-rd-card,.pcs-mfg .mfg-rd-col.mfg-r .mfg-rd-card{transform:translateX(-24px) scale(.96)}
.pcs-mfg .mfg-rd-row.mfg-on .mfg-rd-card{transform:none}}
@media(prefers-reduced-motion:reduce){.pcs-mfg .mfg-rd-card,.pcs-mfg .mfg-rd-node,.pcs-mfg .mfg-rd-row:after,.pcs-mfg .mfg-rc-prog .mfg-p{transition:none}
.pcs-mfg .mfg-rd-row.mfg-on .mfg-rd-node,.pcs-mfg .mfg-rd-row.mfg-cur .mfg-rd-node:after{animation:none}}
.pcs-mfg .mfg-packs{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;margin-top:56px;align-items:stretch}
.pcs-mfg .mfg-pack{position:relative;background:#fff;border:1px solid var(--border);border-radius:22px;padding:30px 26px;display:flex;flex-direction:column;gap:16px;box-shadow:0 10px 30px rgba(13,27,42,.06);transition:transform .35s,box-shadow .35s,border-color .35s}
.pcs-mfg .mfg-pack:hover{transform:translateY(-8px);box-shadow:0 24px 50px rgba(13,27,42,.12);border-color:var(--accent-light)}
.pcs-mfg .mfg-pack.mfg-pop{border:2px solid var(--accent);box-shadow:0 24px 50px rgba(194,65,12,.18)}
.pcs-mfg .mfg-pbadge{position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:var(--accent);color:#fff;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:6px 16px;border-radius:999px;white-space:nowrap;animation:pulse 2.4s infinite}
.pcs-mfg .mfg-pack h3{font-size:24px}
.pcs-mfg .mfg-pdesc{font-size:15px;color:var(--muted);min-height:48px}
.pcs-mfg .mfg-pbox{position:relative;overflow:hidden;background:linear-gradient(135deg,#FFF7F1,#FFE9DA);border:1px solid #F6D3BE;border-radius:16px;padding:16px 20px}
.pcs-mfg .mfg-pbox:after{content:"";position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(110deg,transparent,rgba(255,255,255,.7),transparent);animation:sweep 4s ease-in-out infinite}
.pcs-mfg .mfg-pack:nth-child(2) .mfg-pbox:after{animation-delay:1.3s}
.pcs-mfg .mfg-pack:nth-child(3) .mfg-pbox:after{animation-delay:2.6s}
@keyframes sweep{0%,60%{left:-60%}100%{left:130%}}
.pcs-mfg .mfg-prow{display:flex;align-items:center;gap:12px}
.pcs-mfg .mfg-off{background:#FFE2D1;color:var(--accent-text);font-size:13px;font-weight:700;padding:4px 10px;border-radius:999px}
.pcs-mfg .mfg-pbox s{color:var(--muted2);font-weight:600;font-size:17px}
.pcs-mfg .mfg-pnow{font-family:var(--f-head),sans-serif;font-size:42px;font-weight:700;line-height:1.1;margin-top:6px;color:var(--ink)}
.pcs-mfg .mfg-ribbon{align-self:flex-start;background:#FFE2D1;color:var(--ink);font-weight:700;font-size:16px;padding:8px 34px 8px 16px;clip-path:polygon(0 0,calc(100% - 16px) 0,100% 50%,calc(100% - 16px) 100%,0 100%);margin-top:4px}
.pcs-mfg .mfg-grp{display:flex;gap:14px;align-items:flex-start}
.pcs-mfg .mfg-gic{width:38px;height:38px;border-radius:10px;background:#FFF4ED;color:var(--accent);display:grid;place-items:center;flex:none;transition:background .3s,color .3s}
.pcs-mfg .mfg-pack:hover .mfg-gic{background:var(--accent);color:#fff}
.pcs-mfg .mfg-grp h4{font-family:var(--f-body),sans-serif;font-size:16px;font-weight:700;margin:7px 0 8px}
.pcs-mfg .mfg-grp ul{padding-left:18px;display:grid;gap:5px;font-size:15px;color:#2A3C50}
.pcs-mfg .mfg-grp li::marker{color:var(--accent)}
.pcs-mfg .mfg-pack hr{border:0;border-top:1px solid var(--border);margin:2px 0}
.pcs-mfg .mfg-pack .mfg-btn{margin-top:auto;width:100%}
.pcs-mfg .mfg-pfoot{text-align:center;margin-top:32px;font-size:14px;color:var(--muted2)}
.pcs-mfg .mfg-pfoot a{color:var(--accent-text);font-weight:600}
.pcs-mfg .mfg-ind{overflow:hidden;position:relative;background:linear-gradient(180deg,#FFF4ED 0%,#FFFAF6 100%);border-top:1px solid #F6D3BE;border-bottom:1px solid #F6D3BE}
.pcs-mfg .mfg-ind:before{content:"";position:absolute;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle,rgba(255,138,76,.18),transparent 65%);right:-120px;top:-160px;animation:float 12s ease-in-out infinite;pointer-events:none}
.pcs-mfg .mfg-ind .mfg-wrap,.pcs-mfg .mfg-ind .mfg-irow{position:relative}
.pcs-mfg .mfg-irow{overflow:hidden;margin-top:14px;mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.pcs-mfg .mfg-irow div{display:inline-flex;gap:12px;white-space:nowrap;animation:marquee 32s linear infinite}
.pcs-mfg .mfg-irow.mfg-rev div{animation-direction:reverse;animation-duration:38s}
.pcs-mfg .mfg-irow:hover div{animation-play-state:paused}
.pcs-mfg .mfg-irow span{background:#fff;border:1px solid #F1C9B2;box-shadow:0 4px 12px rgba(194,65,12,.06);border-radius:999px;padding:12px 24px;font-size:15px;font-weight:600;transition:.3s}
.pcs-mfg .mfg-irow span:hover{border-color:var(--accent);color:var(--accent-text)}
.pcs-mfg .mfg-stories{background:#fff;border-top:1px solid var(--border);position:relative;overflow:hidden}
.pcs-mfg .mfg-stories .mfg-wrap{display:grid;grid-template-columns:.8fr 1.2fr;gap:56px;align-items:center}
.pcs-mfg .mfg-rating{display:flex;align-items:center;gap:16px;margin-top:28px;padding:20px;border:1px solid var(--border);border-radius:14px;background:var(--bg);max-width:360px}
.pcs-mfg .mfg-rating b{font-family:var(--f-head),sans-serif;font-size:40px;line-height:1}
.pcs-mfg .mfg-rating .mfg-st{color:#F5A623;letter-spacing:3px;font-size:18px}
.pcs-mfg .mfg-rating small{display:block;color:var(--muted2);font-size:13px}
.pcs-mfg .mfg-tnav{display:flex;gap:12px;margin-top:28px}
.pcs-mfg .mfg-tnav button{width:48px;height:48px;border-radius:50%;border:1px solid var(--border);background:#fff;font-size:20px;cursor:pointer;transition:.3s;color:var(--ink)}
.pcs-mfg .mfg-tnav button:hover{background:var(--navy);color:#fff;border-color:var(--navy)}
.pcs-mfg .mfg-tstage{position:relative}
.pcs-mfg .mfg-tstage:before{content:"";position:absolute;inset:24px -16px -16px 24px;border-radius:24px;background:var(--accent-bg);border:1px solid #F6D3BE}
.pcs-mfg .mfg-tslides{position:relative;display:grid;background:var(--navy);color:#fff;border-radius:24px;padding:48px;min-height:360px;overflow:hidden}
.pcs-mfg .mfg-tslides:after{content:"\201C";position:absolute;right:28px;top:-20px;font-family:Georgia,serif;font-size:220px;line-height:1;color:rgba(255,138,76,.14);pointer-events:none}
.pcs-mfg .mfg-tslide{grid-area:1/1;opacity:0;transform:translateX(30px);transition:opacity .6s,transform .6s;visibility:hidden;display:flex;flex-direction:column;gap:22px;position:relative;z-index:1}
.pcs-mfg .mfg-tslide.mfg-on{opacity:1;transform:none;visibility:visible}
.pcs-mfg .mfg-tslide .mfg-st{color:#F5A623;letter-spacing:4px}
.pcs-mfg .mfg-tslide blockquote{margin:0;font-size:clamp(18px,2vw,22px);line-height:1.55;font-family:var(--f-head),sans-serif;font-weight:500}
.pcs-mfg .mfg-who{display:flex;align-items:center;gap:14px;margin-top:auto}
.pcs-mfg .mfg-who .mfg-av{width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,var(--accent),#FFB48A);display:grid;place-items:center;font-weight:700;font-family:var(--f-head),sans-serif}
.pcs-mfg .mfg-who b{display:block}
.pcs-mfg .mfg-who small{color:var(--soft2);font-size:14px}
.pcs-mfg .mfg-tdots{position:absolute;left:48px;bottom:24px;display:flex;gap:8px;z-index:2}
.pcs-mfg .mfg-tdots button{width:8px;height:8px;padding:0;border:0;border-radius:8px;background:#4A5F80;cursor:pointer;transition:.4s;position:relative}
.pcs-mfg .mfg-tdots button:after{content:"";position:absolute;inset:-10px}
.pcs-mfg .mfg-tdots button.mfg-on{width:28px;background:var(--accent-light)}
.pcs-mfg .mfg-faq{background:#fff;border-top:1px solid var(--border)}
.pcs-mfg .mfg-faq .mfg-wrap{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
.pcs-mfg details{border-bottom:1px solid var(--border)}
.pcs-mfg details:first-of-type{border-top:1px solid var(--border)}
.pcs-mfg summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:16px;padding:22px 0;min-height:56px;font-weight:600;font-size:17px}
.pcs-mfg summary::-webkit-details-marker{display:none}
.pcs-mfg summary .mfg-qn{font-family:var(--f-head),sans-serif;font-weight:700;color:var(--accent-text);min-width:28px}
.pcs-mfg summary .mfg-qt{flex:1}
.pcs-mfg summary .mfg-pm{width:32px;height:32px;border-radius:50%;border:1px solid var(--border);display:grid;place-items:center;flex:none;transition:transform .35s,background .35s,color .35s;color:var(--accent-text);font-size:18px}
.pcs-mfg details[open] summary .mfg-pm{transform:rotate(45deg);background:var(--accent);color:#fff;border-color:var(--accent)}
.pcs-mfg details .mfg-ans{padding:0 48px 22px 44px;font-size:15px;color:var(--muted);animation:fadeDown .4s ease}
@keyframes fadeDown{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}
.pcs-mfg .mfg-fimg{position:relative;height:520px;border-radius:24px;overflow:hidden;background:linear-gradient(160deg,#1B3355,var(--navy))}
.pcs-mfg .mfg-fimg .mfg-blob{position:absolute;width:280px;height:280px;border-radius:50%;background:radial-gradient(circle,rgba(255,138,76,.35),transparent 65%);right:-60px;top:-60px;animation:float 9s ease-in-out infinite}
.pcs-mfg .mfg-chatui{position:absolute;left:10%;right:10%;top:12%;bottom:12%;background:#fff;border-radius:18px;box-shadow:0 30px 60px rgba(0,0,0,.4);display:flex;flex-direction:column;overflow:hidden;animation:float 8s ease-in-out infinite}
.pcs-mfg .mfg-chead{display:flex;align-items:center;gap:12px;padding:16px 18px;background:var(--bg);border-bottom:1px solid var(--border)}
.pcs-mfg .mfg-chead .mfg-av{width:38px;height:38px;border-radius:50%;background:var(--accent);color:#fff;display:grid;place-items:center;font-weight:700;font-family:var(--f-head),sans-serif}
.pcs-mfg .mfg-chead b{display:block;font-size:14px}
.pcs-mfg .mfg-chead small{font-size:12px;color:var(--green);display:flex;align-items:center;gap:6px}
.pcs-mfg .mfg-chead small:before{content:"";width:7px;height:7px;border-radius:50%;background:var(--green);animation:pulse 2s infinite}
.pcs-mfg .mfg-cbody{flex:1;padding:18px;display:flex;flex-direction:column;gap:12px;justify-content:flex-end}
.pcs-mfg .mfg-msg{max-width:80%;padding:10px 14px;border-radius:14px;font-size:13.5px;line-height:1.45;opacity:0;animation:msg 14s infinite}
.pcs-mfg .mfg-msg.mfg-q{align-self:flex-end;background:var(--navy);color:#fff;border-bottom-right-radius:4px}
.pcs-mfg .mfg-msg.mfg-a{align-self:flex-start;background:var(--accent-bg);color:var(--ink);border-bottom-left-radius:4px}
.pcs-mfg .mfg-msg:nth-child(1){animation-delay:0s}
.pcs-mfg .mfg-msg:nth-child(2){animation-delay:1.6s}
.pcs-mfg .mfg-msg:nth-child(3){animation-delay:3.2s}
.pcs-mfg .mfg-msg:nth-child(4){animation-delay:4.8s}
@keyframes msg{0%{opacity:0;transform:translateY(10px)}4%,80%{opacity:1;transform:none}86%,100%{opacity:0}}
.pcs-mfg .mfg-typing{align-self:flex-start;display:flex;gap:4px;padding:12px 14px;background:var(--bg);border-radius:14px}
.pcs-mfg .mfg-typing i{width:6px;height:6px;border-radius:50%;background:#9FB0C6;animation:dot 1.2s infinite}
.pcs-mfg .mfg-typing i:nth-child(2){animation-delay:.2s}
.pcs-mfg .mfg-typing i:nth-child(3){animation-delay:.4s}
@keyframes dot{0%,60%,100%{transform:none;opacity:.5}30%{transform:translateY(-4px);opacity:1}}
.pcs-mfg .mfg-qbadge{position:absolute;left:4%;bottom:6%;width:64px;height:64px;border-radius:18px;background:var(--accent);color:#fff;display:grid;place-items:center;font-family:var(--f-head),sans-serif;font-size:32px;font-weight:700;box-shadow:0 16px 32px rgba(194,65,12,.4);animation:floatR 6s ease-in-out infinite;--rot:-8deg;transform:rotate(-8deg)}
.pcs-mfg .mfg-faq .mfg-more{margin-top:28px;font-size:15px;color:var(--muted)}
.pcs-mfg .mfg-faq .mfg-more a{color:var(--accent-text);font-weight:600}
.pcs-mfg .mfg-quote{position:relative;overflow:hidden;color:#fff;background:linear-gradient(135deg,var(--accent) 0%,var(--accent-dark) 100%)}
.pcs-mfg .mfg-quote .mfg-shape{position:absolute;border-radius:50%;background:rgba(255,255,255,.08);animation:float 10s ease-in-out infinite}
.pcs-mfg .mfg-quote .mfg-s1{width:420px;height:420px;left:-140px;top:-160px}
.pcs-mfg .mfg-quote .mfg-s2{width:260px;height:260px;right:30%;bottom:-120px;animation-delay:-4s}
.pcs-mfg .mfg-quote .mfg-s3{width:140px;height:140px;right:4%;top:8%;animation-delay:-7s;background:rgba(255,255,255,.06)}
.pcs-mfg .mfg-quote .mfg-wrap{position:relative;display:grid;grid-template-columns:1fr 544px;gap:56px;align-items:center}
.pcs-mfg .mfg-quote .mfg-eyebrow{color:#FFE2D1}
.pcs-mfg .mfg-quote h2{font-size:clamp(32px,4.4vw,46px)}
.pcs-mfg .mfg-quote .mfg-lead{color:#FFE9DD}
.pcs-mfg .mfg-quote ul{list-style:none;padding:0;display:grid;gap:12px;margin:24px 0;color:#fff;font-weight:500}
.pcs-mfg .mfg-wa-btn{display:inline-flex;align-items:center;gap:10px;background:#fff;color:var(--green);text-decoration:none;font-weight:700;padding:14px 24px;border-radius:10px;min-height:48px;transition:transform .2s,box-shadow .2s}
.pcs-mfg .mfg-wa-btn:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(0,0,0,.2)}
.pcs-mfg form{background:#fff;color:var(--ink);border-radius:18px;padding:36px;display:grid;gap:18px;box-shadow:0 30px 60px rgba(80,20,0,.35)}
.pcs-mfg form h3{font-size:22px}
.pcs-mfg .mfg-fgrid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.pcs-mfg label{display:grid;gap:6px;font-size:14px;font-weight:600}
.pcs-mfg input,.pcs-mfg select{min-height:48px;padding:0 14px;border:1px solid #C3CAD5;border-radius:8px;font:inherit;font-weight:400;font-size:15px;background:#fff;color:var(--ink);transition:border-color .2s,box-shadow .2s}
.pcs-mfg input:hover,.pcs-mfg select:hover,
.pcs-mfg input:focus,.pcs-mfg select:focus,
.pcs-mfg input:focus-visible,.pcs-mfg select:focus-visible{outline:none;border-color:#C3CAD5;box-shadow:0 1px 4px rgba(15,27,45,.08)}
.pcs-mfg fieldset{border:0;padding:0;margin:0}
.pcs-mfg legend{font-size:14px;font-weight:600;margin-bottom:10px}
.pcs-mfg .mfg-checks{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.pcs-mfg .mfg-checks label{display:flex;align-items:center;gap:10px;min-height:44px;padding:0 12px;border:1px solid #D5DBE4;border-radius:8px;font-weight:400;font-size:14px;cursor:pointer;transition:.2s}
.pcs-mfg .mfg-checks label:hover{border-color:var(--accent)}
.pcs-mfg .mfg-checks input{min-height:0;width:18px;height:18px;accent-color:var(--accent);flex:none}
.pcs-mfg .mfg-note{font-size:13px;color:var(--muted2);text-align:center}
.pcs-mfg .mfg-ok{display:none;background:#E9F6EE;border:1px solid #A9D9BC;color:#145C33;border-radius:10px;padding:16px;font-weight:600}
.pcs-mfg .mfg-ok.mfg-show{display:block;animation:fadeDown .4s}
.pcs-mfg .mfg-err{display:none;background:#FDECEA;border:1px solid #F3B5AE;color:#8A1F11;border-radius:10px;padding:14px 16px;font-weight:600;font-size:14px}
.pcs-mfg .mfg-err.mfg-show{display:block;animation:fadeDown .4s}
.pcs-mfg .mfg-btn:disabled{opacity:.7;cursor:not-allowed;transform:none}
.pcs-mfg footer{background:var(--navy3);color:var(--soft2);padding:56px 0 32px}
.pcs-mfg .mfg-fcols{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:32px}
.pcs-mfg footer h4{color:#fff;font-family:var(--f-body),sans-serif;font-size:14px;margin-bottom:12px}
.pcs-mfg footer ul{list-style:none;padding:0;display:grid;gap:10px;font-size:14px}
.pcs-mfg footer a{text-decoration:none;transition:color .2s}
.pcs-mfg footer a:hover{color:#fff}
.pcs-mfg .mfg-fbot{display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px;border-top:1px solid #1E2C42;margin-top:40px;padding-top:24px;font-size:13px}
.pcs-mfg .mfg-fab{position:fixed;right:20px;bottom:calc(20px + env(safe-area-inset-bottom,0px));width:56px;height:56px;border-radius:50%;background:var(--green);display:grid;place-items:center;box-shadow:0 10px 24px rgba(0,0,0,.25);z-index:60;animation:waPulse 2.4s infinite}
@keyframes waPulse{0%{box-shadow:0 0 0 0 rgba(31,143,78,.55)}70%{box-shadow:0 0 0 16px rgba(31,143,78,0)}100%{box-shadow:0 0 0 0 rgba(31,143,78,0)}}
@media(max-width:1024px){.pcs-mfg .mfg-g6{grid-template-columns:repeat(3,minmax(0,1fr))}
.pcs-mfg .mfg-quote .mfg-wrap{grid-template-columns:1fr}
.pcs-mfg .mfg-packs{grid-template-columns:1fr;max-width:520px;margin-left:auto;margin-right:auto}
.pcs-mfg .mfg-pdesc{min-height:0}}
@media(max-width:900px){.pcs-mfg section{padding:64px 0}
.pcs-mfg .mfg-menu{position:fixed;inset:72px 0 auto 0;background:var(--navy);flex-direction:column;align-items:flex-start;padding:12px 24px 24px;gap:0;transform:translateY(-130%);transition:.35s;border-bottom:1px solid #22324A}
.pcs-mfg .mfg-menu.mfg-o{transform:none}
.pcs-mfg .mfg-menu li{width:100%;padding:12px 0}
.pcs-mfg .mfg-burger{display:block}
.pcs-mfg .mfg-hero .mfg-wrap,.pcs-mfg .mfg-prob .mfg-wrap,.pcs-mfg .mfg-sol .mfg-wrap,.pcs-mfg .mfg-stories .mfg-wrap,.pcs-mfg .mfg-faq .mfg-wrap{grid-template-columns:1fr;gap:40px}
.pcs-mfg .mfg-mock{height:420px;max-width:520px;width:100%;margin:auto}
.pcs-mfg .mfg-pvis{height:460px}
.pcs-mfg .mfg-fimg{height:440px}
.pcs-mfg .mfg-g3{grid-template-columns:1fr;max-width:480px;margin-left:auto;margin-right:auto}
.pcs-mfg .mfg-fcols{grid-template-columns:1fr 1fr}
.pcs-mfg .mfg-orb{width:min(420px,88vw)}}
@media(max-width:640px){.pcs-mfg .mfg-g6{grid-template-columns:1fr}
.pcs-mfg .mfg-fgrid,.pcs-mfg .mfg-checks{grid-template-columns:1fr}
.pcs-mfg .mfg-mock .mfg-ring,.pcs-mfg .mfg-hb{display:none}
.pcs-mfg .mfg-mock{height:360px}
.pcs-mfg .mfg-pchip{font-size:12px;padding:7px 12px 7px 8px}
.pcs-mfg .mfg-pc3,.pcs-mfg .mfg-pc4{display:none}
.pcs-mfg .mfg-onode{width:48px;height:48px;margin:-24px 0 0 -24px}
.pcs-mfg .mfg-onode svg{width:20px;height:20px}
.pcs-mfg .mfg-hub .mfg-hi svg{width:30px;height:30px}
.pcs-mfg form{padding:24px}
.pcs-mfg .mfg-tslides{padding:32px 28px 56px}
.pcs-mfg .mfg-tdots{left:28px}
.pcs-mfg .mfg-cv{height:420px}
.pcs-mfg .mfg-nv{display:none}}
@media(max-width:480px){.pcs-mfg .mfg-fcols{grid-template-columns:1fr}}
@media(prefers-reduced-motion:reduce){.pcs-mfg .mfg-pw .mfg-ln:after{display:none}
.pcs-mfg .mfg-pk-list li{opacity:1;transform:none}
.pcs-mfg *,.pcs-mfg *:before,.pcs-mfg *:after{animation:none!important;transition:none!important}
html{scroll-behavior:auto}
.pcs-mfg.js .mfg-rv{opacity:1;transform:none}
.pcs-mfg .mfg-hw-card{opacity:1;transform:none}
.pcs-mfg .mfg-msg,.pcs-mfg .mfg-hb{opacity:1}
.pcs-mfg .mfg-type1{width:75%}
.pcs-mfg .mfg-type2{width:55%}}
.pcs-mfg .mfg-fimg img,.pcs-mfg .mfg-cd .mfg-art img{width:100%;height:100%;object-fit:cover;display:block}
.pcs-mfg{--f-head:Poppins,sans-serif;--f-body:Poppins,sans-serif}
.pcs-mfg h1,.pcs-mfg h2,.pcs-mfg h3,.pcs-mfg h4,.pcs-mfg h5,.pcs-mfg h6{color:inherit}
.pcs-mfg a{text-decoration:underline}
.pcs-mfg a:hover{color:inherit}
/* keep button / link text colour on hover (the generic a:hover rule above was overriding it) */
.pcs-mfg a.mfg-btn-primary,.pcs-mfg a.mfg-btn-primary:hover,
.pcs-mfg a.mfg-btn-dark,.pcs-mfg a.mfg-btn-dark:hover,
.pcs-mfg a.mfg-btn-outline,.pcs-mfg a.mfg-btn-outline:hover{color:#fff}
.pcs-mfg a.mfg-wa-btn,.pcs-mfg a.mfg-wa-btn:hover{color:var(--green)}
.pcs-mfg .mfg-pfoot a,.pcs-mfg .mfg-pfoot a:hover,
.pcs-mfg .mfg-faq .mfg-more a,.pcs-mfg .mfg-faq .mfg-more a:hover{color:var(--accent-text)}
.pcs-mfg .mfg-menu a:not(.mfg-btn):hover{color:#fff}
.pcs-mfg blockquote{border:0;padding:0;color:inherit}
.pcs-mfg .mfg-hero{display:block;align-items:initial}

/* ── Hero background screenshots slider (same as the website-development page) ── */
.pcs-mfg .hero-slider-box{position:absolute;inset:0;z-index:1;overflow:hidden;pointer-events:none}
.pcs-mfg .hero-bg-tilt{position:absolute;top:-30%;left:42%;width:80%;height:160%;display:flex;gap:20px;transform:rotate(12deg)}
.pcs-mfg .hero-bg-col{flex:1;overflow:hidden;min-width:0}
.pcs-mfg .hero-bg-col:nth-child(n+4){display:none}
.pcs-mfg .hero-bg-track{display:flex;flex-direction:column;animation:heroBgUp 65s linear infinite;will-change:transform}
.pcs-mfg .hero-bg-col:nth-child(even) .hero-bg-track{animation-name:heroBgDown}
.pcs-mfg .hero-bg-track img{display:block;width:100%;height:auto;aspect-ratio:16/10;object-fit:cover;object-position:top;margin-bottom:20px;border-radius:8px;background:#18273E;box-shadow:0 12px 30px rgba(0,0,0,.4)}
/* overlay: solid on the left (for the text), fades out so the right side is clearly visible (uses the hero navy #0F1B2D) */
.pcs-mfg .hero-bg-overlay{position:absolute;inset:0;background:linear-gradient(90deg,#0F1B2D 0%,#0F1B2D 46%,rgba(15,27,45,.78) 60%,rgba(15,27,45,.2) 76%,rgba(15,27,45,0) 100%)}
@keyframes heroBgUp{from{transform:translateY(0)}to{transform:translateY(-33.3333%)}}
@keyframes heroBgDown{from{transform:translateY(-33.3333%)}to{transform:translateY(0)}}
@media(max-width:900px){
  .pcs-mfg .hero-bg-tilt{top:-25%;left:-35%;width:170%;height:150%;gap:14px}
  .pcs-mfg .hero-bg-track{animation-duration:55s}
  .pcs-mfg .hero-bg-track img{margin-bottom:14px;opacity:.55;filter:blur(1.5px) brightness(.85)}
  .pcs-mfg .hero-bg-overlay{background:linear-gradient(90deg,rgba(15,27,45,.88),rgba(24,39,62,.85))}
}
/* ── Who We Are ── */
// .pcs-mfg{--brand-or:#F08A33}
// .pcs-mfg .mfg-eyb{display:inline-flex;align-items:center;gap:14px;font-size:13px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--brand-or);margin-bottom:20px}
// .pcs-mfg .mfg-eyb:before,.pcs-mfg .mfg-eyb:after{content:"";width:28px;height:2px;background:var(--brand-or);opacity:.8}
// .pcs-mfg .mfg-about h2{font-size:clamp(28px,3.6vw,44px);font-weight:700;color:#000}
// .pcs-mfg .mfg-about h2 em{font-style:italic;color:var(--brand-or)}
// .pcs-mfg .mfg-about{background:#fff;position:relative;overflow:hidden}
// .pcs-mfg .mfg-about:before{width:14px;height:14px;left:5%;bottom:28px}
// .pcs-mfg .mfg-about:after{width:10px;height:10px;left:45%;bottom:36px;animation-delay:-3s}
// .pcs-mfg .mfg-about .mfg-wrap{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;    max-width: 1350px;}
// .pcs-mfg .mfg-about-p{font-size:16px;line-height:2;color:#1F2937;margin-top:24px}
// .pcs-mfg .mfg-about-img img{width:100%;height:auto;display:block;border-radius:20px;object-fit:contain}
// @media(max-width:900px){
//   .pcs-mfg .mfg-about .mfg-wrap{grid-template-columns:1fr;gap:32px}
//   .pcs-mfg .mfg-about-p{text-align:left}
// }
`}</style>
);

// ── Hero background slider (same as the website-development page) ──
const HERO_BG_SLIDES = Array.from({ length: 11 }, (_, i) => `/img/landing-page/manufacturing/manufacturing-landing-site-${i + 1}.webp`);

// 4 columns, each uses all images in a different order (so columns never look identical)
const HERO_BG_COLUMNS = [0, 2, 4, 1].map((shift) =>
    HERO_BG_SLIDES.map((_, i) => HERO_BG_SLIDES[(i + shift) % HERO_BG_SLIDES.length])
);

function HeroImageSlider() {
    return (
        <div className="hero-slider-box" aria-hidden="true">
            <div className="hero-bg-tilt">
                {HERO_BG_COLUMNS.map((col, ci) => (
                    <div className="hero-bg-col" key={ci}>
                        <div className="hero-bg-track">
                            {/* list is tripled so the loop is seamless and always covers the hero */}
                            {[...col, ...col, ...col].map((src, i) => (
                                <img key={i} src={src} alt="" loading="eager" decoding="async" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="hero-bg-overlay" />
        </div>
    );
}

const TESTIMONIALS = [
    { name: "ABB", text: "Our website now combines modern design, SEO optimisation, visitor tracking and improved online visibility." },
    { name: "RIYA", text: "A collaborative experience that transformed our vision into a responsive, brand-aligned and professional website." },
    { name: "ZKY", text: "A professional, responsive website that strengthened our digital identity and created greater visitor confidence." },
    { name: "Feral Roots", text: "Our brand now has a digital home with thoughtful branding, SEO and seamless payment integration." },
    { name: "Sterlo", text: "Strategic SEO, product positioning and user experience improvements strengthened our digital presence and online visibility." },
];

const FAQS = [
    { q: "Which industries do you work with?", a: "We work with businesses in every industry, including manufacturers, traders, service firms, healthcare, education, real estate and startups. We have a strong focus on website design for manufacturing companies and B2B businesses, and we tailor every kit to your industry and buyers." },
    { q: "Why do businesses need digital marketing?", a: "Digital marketing for manufacturers and other businesses helps customers find you when they search, instead of relying only on referrals, middlemen and portals. Our kit includes SEO, a Google Business Profile and AI search setup, so you show up where buyers look." },
    { q: "What should a business website include?", a: "It should build trust quickly. For manufacturers, that means product and capability pages, certifications, infrastructure and a downloadable company profile. For service businesses, it means clear services, credentials and easy enquiry options. Either way, it should be more than a good-looking design." },
    { q: "What is ChatGPT search visibility?", a: "People increasingly ask AI tools like ChatGPT to suggest suppliers and providers. We structure your company information, offerings and web presence so these tools can understand your business and find it more easily. No one can guarantee a ranking, but a clear, well-structured presence improves your chances." },
    { q: "When will we see results on Google?", a: "A Google Business Profile can start showing in local results within days of verification. SEO for a new website usually takes a few months to build momentum, depending on competition and keywords. We share a clear plan and never promise overnight rankings." },
    { q: "Do you work with businesses outside Coimbatore?", a: "Yes. We are a website company in Coimbatore, and we work with businesses across India through calls, video meetings and site visits where possible." },
];

const IND_ROW1 = ["Manufacturing", "Trading", "Service Firms", "Retail", "Healthcare", "Education", "Real Estate", "Startups"];
const IND_ROW2 = ["Packaging", "Engineering & Fabrication", "Textiles", "Chemicals", "Food Processing", "Plastics", "Auto Components", "Electrical"];

// Marquee row. The list is repeated so one half is always wider than the screen (seamless loop, no empty gap on wide monitors).
function IndRow({ items, rev, style }) {
    const half = [...items, ...items];
    return (
        <div className={"mfg-irow" + (rev ? " mfg-rev" : "")} style={style}>
            <div>
                {half.map((t, i) => <span key={"a" + i}>{t}</span>)}
                {half.map((t, i) => <span key={"b" + i} aria-hidden="true">{t}</span>)}
            </div>
        </div>
    );
}

export default function ManufacturingLandingPage() {
    // All the original page scripts (menu, reveal, orbit, coverflow, slider, process) run once after mount
    useEffect(() => {
        const root = document.querySelector('.pcs-mfg');
        root.classList.add('js');
        const T = [], L = [], OBS = [];
        const setTimeout = (f, d) => { const id = window.setTimeout(f, d); T.push(id); return id; };
        const setInterval = (f, d) => { const id = window.setInterval(f, d); T.push(id); return id; };
        const addEventListener = (t, f, o) => { window.addEventListener(t, f, o); L.push([t, f, o]); };
        const IO = class extends window.IntersectionObserver { constructor(...a) { super(...a); OBS.push(this); } };
        document.querySelectorAll('#orb .mfg-onode').forEach((n) => n.remove());

        const $ = s => document.querySelector(s);
        const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;

        // header + menu
        addEventListener('scroll', () => $('#hd').classList.toggle('mfg-sc', scrollY > 20), { passive: true });
        $('#burger').onclick = () => { const o = $('#menu').classList.toggle('mfg-o'); $('#burger').setAttribute('aria-expanded', o) };
        document.querySelectorAll('.mfg-menu a').forEach(a => a.addEventListener('click', () => $('#menu').classList.remove('mfg-o')));

        // scroll reveal
        const io = new IO(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('mfg-in'); io.unobserve(e.target) } }), { threshold: .15 });
        document.querySelectorAll('.mfg-rv').forEach(el => io.observe(el));
        document.querySelectorAll('.mfg-plist li').forEach((s, i) => { s.classList.add('mfg-rv'); s.style.transitionDelay = (i * .08) + 's'; io.observe(s) });

        // form
        // on* assignment so React StrictMode's double-mount can't attach the handler twice (= two emails)
        $('#enq').onsubmit = async e => {
            e.preventDefault();
            const f = e.currentTarget, ok = $('#ok'), err = $('#err'), btn = $('#sendBtn');
            const v = n => (f.elements[n].value || '').trim();
            const fail = m => { err.textContent = m; err.classList.add('mfg-show'); };
            ok.classList.remove('mfg-show'); err.classList.remove('mfg-show');
            if (f.elements.website.value) return;                       // honeypot: bots fill this, humans never see it
            if (!v('name')) return fail('Please enter your name.');
            if (!/^\+?[\d\s\-()]{8,}$/.test(v('phone'))) return fail('Please enter a valid phone / WhatsApp number.');
            if (EMAILJS.templateId.startsWith('YOUR_') || EMAILJS.publicKey.startsWith('YOUR_')) return fail('Form is not connected yet (EmailJS template ID / public key missing).');
            const label = btn.textContent; btn.disabled = true; btn.textContent = 'Sending...';
            try {
                const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        service_id: EMAILJS.serviceId,
                        template_id: EMAILJS.templateId,
                        user_id: EMAILJS.publicKey,
                        template_params: {
                            from_name: v('name'),
                            company: v('company') || '-',
                            phone: v('phone'),
                            city: v('city') || '-',
                            industry: v('industry') || '-',
                            note: v('note') || '-',
                            page_url: window.location.href,
                            submitted_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
                        }
                    })
                });
                if (!res.ok) throw new Error(await res.text());
                ok.classList.add('mfg-show'); f.reset();
            } catch (x) {
                fail('Sorry, something went wrong. Please try again or message us on WhatsApp.');
                console.error('EmailJS error:', x);
            } finally { btn.disabled = false; btn.textContent = label; }
        };

        // ===== Solution: 8 services, orbit + list =====
        const ICON = {
            logo: '<path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z"/>',
            web: '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18M8 21h8"/>',
            seo: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M8 11l2 2 4-4"/>',
            gbp: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
            ai: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M9 11h6M9 14h4"/>',
            bro: '<path d="M4 4h10l6 6v10H4z"/><path d="M14 4v6h6M8 14h8M8 17h5"/>',
            card: '<rect x="2" y="6" width="20" height="13" rx="2"/><path d="M6 11h5M6 14h8"/>',
            soc: '<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.5"/><path d="M16.5 7.5h.01"/>'
        };
        const SV = [
            ['logo', 'Logo & Brand Identity', 'A strong identity makes customers trust you, not just your price.'],
            ['web', 'Website Development', 'Website design for manufacturing companies, built to turn visitors into enquiries.'],
            ['seo', 'SEO & Online Visibility', 'Digital marketing for manufacturers and others, so buyers find you first.'],
            ['gbp', 'Google Business Profile', 'A verified Google profile puts your business on Search and Maps.'],
            ['ai', 'ChatGPT Search Visibility', 'Structured business information helps AI tools like ChatGPT recommend your company.'],
            ['bro', 'Company Profile & Brochure', 'Brochure design for manufacturers that clients and tender teams can review.'],
            ['card', 'Business Cards & Letterhead', 'Matching stationery on every quotation shows you are organised and established.'],
            ['soc', 'Social Media Kit', 'Consistent social profiles make your business look active and credible online.']
        ];
        const esc = s => s.replace(/&/g, '&amp;');
        const svg = (k, s) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[k]}</svg>`;
        const slist = $('#slist'), orb = $('#orb'), hub = $('#hub'), sol = $('.mfg-sol');
        slist.innerHTML = SV.map((s, i) => `<li><button class="mfg-sbtn" type="button" aria-expanded="false"><span class="mfg-n">${String(i + 1).padStart(2, '0')}</span><span class="mfg-t">${esc(s[1])}</span><span class="mfg-ar" aria-hidden="true">→</span><span class="mfg-sprog"></span></button><div class="mfg-sdet"><div><p>${esc(s[2])}</p></div></div></li>`).join('');
        SV.forEach((s, i) => { const a = (-90 + i * 45) * Math.PI / 180, b = document.createElement('button'); b.type = 'button'; b.className = 'mfg-onode'; b.setAttribute('aria-label', s[1]); b.style.left = (50 + 44 * Math.cos(a)) + '%'; b.style.top = (50 + 44 * Math.sin(a)) + '%'; b.innerHTML = svg(s[0], 26); b.onclick = () => sel(i, true); orb.appendChild(b) });
        const lis = [...slist.children], nodes = [...orb.querySelectorAll('.mfg-onode')];
        let si = -1, stm, prog = 0, last = 0, raf = 0, hold = false; const DUR = 2800, HOLD = 250;
        function sel(i, user) {
            i = (i + SV.length) % SV.length; if (i === si && !user) return; si = i;
            lis.forEach((l, k) => { l.classList.toggle('mfg-on', k === i); l.querySelector('.mfg-sbtn').setAttribute('aria-expanded', k === i); l.querySelector('.mfg-sprog').style.width = '0%' });
            prog = 0;
            nodes.forEach((n, k) => n.classList.toggle('mfg-on', k === i));
            hub.classList.add('mfg-sw'); setTimeout(() => { $('#hubIc').innerHTML = svg(SV[i][0], 44); $('#hubN').textContent = String(i + 1).padStart(2, '0') + ' / 08'; $('#hubT').textContent = SV[i][1]; hub.classList.remove('mfg-sw') }, 250);
            // next item is triggered by the progress line reaching 100% (see tick() below), not by a separate timer
        }
        lis.forEach((l, i) => l.querySelector('.mfg-sbtn').onclick = () => sel(i, true));
        // Hover (mouse only, touch taps never freeze autoplay) pauses the progress line; on leave it continues from where it stopped.
        // Using on* assignment (not addEventListener) so React StrictMode's double-mount can't stack duplicate handlers.
        // Pause ONLY while the mouse is over the service list itself (not the whole section), so the line never looks stuck
        // just because the cursor is resting somewhere on the section. Set PAUSE_ON_HOVER = false to never pause.
        const PAUSE_ON_HOVER = false;
        slist.onpointerenter = e => { if (PAUSE_ON_HOVER && e.pointerType === 'mouse') hold = true; };
        slist.onpointerleave = () => { hold = false; };
        sol.onpointerleave = () => { hold = false; };
        // Progress line is driven by JS (one clock): the bar width and the "go to next" decision come from the SAME number,
        // so the next item only starts after the line has reached 100%.
        function tick(t) {
            const dt = last ? Math.min(t - last, 100) : 0; last = t;   // cap dt so a background tab doesn't jump ahead
            if (!hold) prog += dt;
            const bar = lis[si] && lis[si].querySelector('.mfg-sprog');
            if (bar) bar.style.width = Math.min(prog / DUR, 1) * 100 + '%';
            // line is shown FULL for a short beat (HOLD ms) and only then the next item starts
            if (prog >= DUR + HOLD) { prog = 0; sel(si + 1); }
            raf = requestAnimationFrame(tick);
        }
        sel(0);
        if (!reduce) raf = requestAnimationFrame(tick);

        // ===== Testimonials slider =====
        const ts = [...document.querySelectorAll('.mfg-tslide')], td = $('#tdots'); let ti = 0, ttm;
        td.innerHTML = ts.map((_, i) => `<button type="button" aria-label="Testimonial ${i + 1}"></button>`).join('');
        const tds = [...td.children];
        function tgo(i) { ti = (i + ts.length) % ts.length; ts.forEach((s, k) => s.classList.toggle('mfg-on', k === ti)); tds.forEach((d, k) => d.classList.toggle('mfg-on', k === ti)); clearInterval(ttm); if (!reduce) ttm = setInterval(() => tgo(ti + 1), 6000) }
        tds.forEach((d, i) => d.onclick = () => tgo(i)); $('#tp').onclick = () => tgo(ti - 1); $('#tn').onclick = () => tgo(ti + 1); tgo(0);

        // ===== How it works: static centre + 3 left / 3 right =====
        (() => {
            const rd = $('#rdWrap'), rows = [...rd.querySelectorAll('.mfg-rd-row')], P = $('#rcP');
            let timer;
            function set(n) {
                rows.forEach((r, i) => { r.classList.toggle('mfg-on', i <= n); r.classList.toggle('mfg-cur', i === n); r.classList.toggle('mfg-done', i < n) });
                P.style.strokeDashoffset = 100 - (n + 1) / rows.length * 100;
            }
            function play() { let k = 0; (function nx() { set(k); if (++k < rows.length) timer = setTimeout(nx, 750) })() }
            rows.forEach((r, i) => r.querySelector('.mfg-rd-node').onclick = () => { clearTimeout(timer); set(i) });
            if (reduce) { set(rows.length - 1) }
            else { const o = new IO(es => { if (es[0].isIntersecting) { o.disconnect(); play() } }, { threshold: .3 }); o.observe(rd) }
        })();

        // ===== Coverflow portfolio (from reference design) =====
        const MK = '<div class=mfg-mk><b></b><u></u><s><span></span><span></span><span></span><span></span></s></div>';
        const PF = [
            ["Package Design", "Package Portfolio", "linear-gradient(150deg,#14532d,#ca8a04)", "<div class=mfg-gl style='transform:rotate(-8deg);color:#fef08a;font-size:40px'>MORINGA<br>IDLY PODI</div>"],
            ["Logo Design", "Logo Portfolio", "linear-gradient(150deg,#064e3b,#0f172a)", "<div class=mfg-gl style='font-family:Georgia,serif;color:#e5c07b;font-size:70px'>Dha<br><small style='font-size:14px;letter-spacing:6px'>JEWELLERS</small></div>"],
            ["E-Commerce", "E-Commerce Portfolio", "linear-gradient(150deg,var(--d1),#7c3aed)", MK],
            ["Website Design", "Website Portfolio", "linear-gradient(150deg,#0c4a6e,var(--a3))", MK],
            ["Brochure Design", "Brochure Portfolio", "linear-gradient(150deg,#1e293b,#475569)", "<div class=mfg-gl style='transform:rotate(-10deg);font-size:80px;opacity:.7'>▤▥</div>"]
        ];
        const cv = $('#cv'), dt = $('#dts'), N = PF.length; let cur = 2, tm;
        cv.innerHTML = PF.map(p => `<div class="mfg-cd" role="group" aria-roledescription="slide" aria-label="${p[1]}" style="background:${p[2]}"><div class="mfg-art" aria-hidden="true"><img src=\"${PH(p[1])}\" alt=\"${p[1]}\" loading=\"lazy\"></div><div class="mfg-ov"></div><div class="mfg-tx"><small>${p[0]}</small><h3>${p[1]}</h3><em>VIEW PROJECT →</em><i aria-hidden="true">→</i></div></div>`).join('');
        dt.innerHTML = PF.map(p => `<button type="button" aria-label="Show ${p[1]}"></button>`).join('');
        const cds = [...cv.children], dts = [...dt.children];
        function lay() {
            const cw = Math.min(400, cv.clientWidth * .62), u = cw * .75;
            cds.forEach((c, i) => {
                const d = ((i - cur + 2) % N + N) % N - 2, ad = Math.abs(d), s = [1, .78, .64][ad], x = d === 0 ? 0 : Math.sign(d) * (u + (ad - 1) * cw * .55);
                // FIX: when a card wraps from one side to the other, jump instantly (no fly-across)
                const wrap = c._d !== undefined && Math.abs(d - c._d) > 2;
                if (wrap) c.style.transition = 'none';
                c.style.width = cw + 'px'; c.style.height = Math.min(450, cw * 1.12) + 'px';
                c.style.transform = `translateX(calc(-50% + ${x}px)) scale(${s}) rotateY(${-d * 8}deg)`;
                c.style.zIndex = 10 - ad * 3; c.style.opacity = [1, .92, .55][ad]; c.classList.toggle('mfg-a', d === 0);
                if (wrap) { c.offsetWidth; c.style.transition = ''; }
                c._d = d;
            });
            dts.forEach((b, i) => { b.classList.toggle('mfg-a', i === cur); b.setAttribute('aria-current', i === cur) })
        }
        function go(i) { cur = (i + N) % N; lay(); clearInterval(tm); if (!reduce) tm = setInterval(() => go(cur + 1), 2200) }
        cds.forEach((c, i) => c.onclick = () => go(i)); dts.forEach((b, i) => b.onclick = () => go(i));
        $('#pv').onclick = () => go(cur - 1); $('#nx').onclick = () => go(cur + 1);
        // on* assignment (not addEventListener) so React StrictMode's double-mount can't stack duplicate handlers / double autoplay
        let tx0 = 0; cv.ontouchstart = e => { tx0 = e.touches[0].clientX; };
        cv.ontouchend = e => { const d = e.changedTouches[0].clientX - tx0; if (Math.abs(d) > 40) go(cur + (d < 0 ? 1 : -1)) };
        // mouse only, so a touch tap doesn't permanently stop autoplay
        cv.onpointerenter = e => { if (e.pointerType === 'mouse') clearInterval(tm); };
        cv.onpointerleave = e => { if (e.pointerType === 'mouse') go(cur); };
        addEventListener('resize', lay); go(2);

        return () => {
            cancelAnimationFrame(raf);
            T.forEach((id) => { window.clearTimeout(id); window.clearInterval(id); });
            L.forEach(([t, f, o]) => window.removeEventListener(t, f, o));
            OBS.forEach((o) => o.disconnect());
        };
    }, []);

    return (
        <Layout title={SEO_TITLE} description={SEO_DESC}>
            <SEOHead />
            <PageStyles />
            <div className="pcs-mfg">
                <header id="hd">
                    <div className="mfg-wrap"><nav aria-label="Main">
                        <a className="mfg-logo" href="#top" aria-label="Priyam Consultancy Services"><img src="/img/footer-logo.png" alt="Priyam Consultancy Services" width="160" height="44" decoding="async" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/img/priyam-consultancy-logo.png"; e.currentTarget.style.filter = "brightness(0) invert(1)"; }} /></a>
                        <ul className="mfg-menu" id="menu">
                            <li><a href="#problems">Problems</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#process">Process</a></li>
                            <li><a href="#pricing">Packages</a></li>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a className="mfg-btn mfg-btn-primary" href="#quote">Get Brand Kit Details</a></li>
                        </ul>
                        <button className="mfg-burger" id="burger" aria-label="Open menu" aria-expanded="false">☰</button>
                    </nav></div>
                </header>

                <div id="top">


                    <section className="mfg-hero mfg-dark">
                        <HeroImageSlider />
                        <div className="mfg-wrap">
                            <div className="mfg-rv mfg-l">
                                <span className="mfg-pill">FOR MANUFACTURERS & FACTORIES</span>
                                <h1>Complete Brand Kit + Digital Setup <em>All Under One Package.</em></h1>
                                <p>Get a complete brand kit for your manufacturing company: logo, B2B website development, SEO, Google profile, brochure design for manufacturers and more. One Coimbatore team handles it all, with one point of contact.</p>
                                <div className="mfg-ctas"><a className="mfg-btn mfg-btn-primary" href="#quote">Get Brand Kit Details</a><a className="mfg-btn mfg-btn-outline" href="#quote">Book Free Consultation</a></div>
                                <div className="mfg-stats">
                                    <div><b>8-in-1</b><span>Brand &amp; Digital Services</span></div>
                                    <div><b>6 Key Stages</b><span>From Idea to Launch</span></div>
                                    <div><b>One Team</b><span>One Point of Contact</span></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="mfg-mq" aria-label="Services"><div>
                        <span>Logo &amp; Brand Identity</span><span>Website Development</span><span>SEO &amp; Online Visibility</span><span>Google Business Profile</span><span>ChatGPT Search Visibility</span><span>Company Profile &amp; Brochure</span><span>Business Cards &amp; Letterhead</span><span>Social Media Kit</span>
                        <span aria-hidden="true">Logo &amp; Brand Identity</span><span aria-hidden="true">Website Development</span><span aria-hidden="true">SEO &amp; Online Visibility</span><span aria-hidden="true">Google Business Profile</span><span aria-hidden="true">ChatGPT Search Visibility</span><span aria-hidden="true">Company Profile &amp; Brochure</span><span aria-hidden="true">Business Cards &amp; Letterhead</span><span aria-hidden="true">Social Media Kit</span>
                    </div></div>
{/* 
                    <section id="about" className="mfg-about">
    <div className="mfg-wrap">
        <div className="mfg-rv mfg-l">
            <span className="mfg-eyb">Who We Are</span>
            <h2>One Team Powering Your Industrial <em>Brand and Digital Growth. </em></h2>
            <p className="mfg-about-p">
We are one of the fastest-growing full-service business solutions companies, delivering cutting-edge, result-driven strategies across digital marketing, technology, branding and consulting. As a website company in Coimbatore, we help manufacturers with website development for manufacturers, industrial website development, B2B website development service, brochure design for manufacturers and digital marketing for manufacturers. Your manufacturing company gets every piece built together as one consistent brand, with one point of contact.
            </p>
        </div>
        <div className="mfg-about-img mfg-rv mfg-r">
            <img src="/img/who-we-are.webp" alt="Priyam Consultancy Services - all-in-one business partner" loading="lazy"
                 onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = PH("Who we are image"); }} />
        </div>
    </div>
</section> */}


                    <section id="problems" className="mfg-prob">
                        <div className="mfg-wrap">
                            <div className="mfg-pvis mfg-rv mfg-l" aria-hidden="true">
                                <div className="mfg-grid-bg"></div>
                                <div className="mfg-orbit"></div>
                                <div className="mfg-factory">
                                    <span className="mfg-smoke mfg-s1"></span><span className="mfg-smoke mfg-s2"></span><span className="mfg-smoke mfg-s3"></span><span className="mfg-smoke mfg-s4"></span>
                                    <svg viewBox="0 0 220 170" width="220" height="170">
                                        <rect x="48" y="10" width="20" height="70" rx="2" fill="#4A5F80" /><rect x="108" y="30" width="20" height="50" rx="2" fill="#4A5F80" />
                                        <path d="M10 80 L70 50 L70 80 L130 50 L130 80 L190 50 L190 160 L10 160 Z" fill="#2A3B55" />
                                        <path d="M10 80 L70 50 L70 80 L130 50 L130 80 L190 50" fill="none" stroke="#FF8A4C" strokeWidth="3" strokeLinejoin="round" />
                                        <g fill="#FFB48A" opacity=".85"><rect x="28" y="100" width="22" height="16" rx="2" /><rect x="62" y="100" width="22" height="16" rx="2" /><rect x="96" y="100" width="22" height="16" rx="2" /><rect x="130" y="100" width="22" height="16" rx="2" /></g>
                                        <rect x="160" y="112" width="24" height="48" rx="2" fill="#0F1B2D" /><rect x="0" y="158" width="220" height="4" rx="2" fill="#4A5F80" />
                                    </svg>
                                </div>
                                <div className="mfg-pchip mfg-pc1"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></svg>No clear brand identity</div>
                                <div className="mfg-pchip mfg-pc2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></svg>Outdated or no website</div>
                                <div className="mfg-pchip mfg-pc3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></svg>Not visible on Google</div>
                                <div className="mfg-pchip mfg-pc4"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></svg>Missing from AI search</div>
                                <div className="mfg-pchip mfg-pc5"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></svg>No professional brochure</div>
                                <div className="mfg-pchip mfg-pc6"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></svg>Inconsistent branding</div>
                                <span className="mfg-tag">Your business today</span>
                            </div>
                            <div className="mfg-rv mfg-r">
                                <span className="mfg-eyebrow">The problem</span>
                                <h2>Why Good Manufacturers Still Lose Orders</h2>
                                <p className="mfg-lead">Buyers judge your website, profile and brand before calling. Many manufacturers lose enquiries silently.</p>
                                <ul className="mfg-plist">
                                    <li><span>01</span><div><b>No clear brand identity</b><p>Without a strong brand, customers compare you only on price.</p></div></li>
                                    <li><span>02</span><div><b>No website, or an outdated one</b><p>Customers can't verify your credentials, so they choose established-looking competitors.</p></div></li>
                                    <li><span>03</span><div><b>Not visible on Google</b><p>People searching for you find competitors and directories instead.</p></div></li>
                                    <li><span>04</span><div><b>Missing from AI search</b><p>Without structured business data, AI tools like ChatGPT skip you.</p></div></li>
                                    <li><span>05</span><div><b>No professional brochure or company profile</b><p>A WhatsApp PDF makes strong businesses look small to clients.</p></div></li>
                                    <li><span>06</span><div><b>Inconsistent branding everywhere</b><p>Mismatched logos on cards and pages make customers doubt you.</p></div></li>
                                </ul>
                                <p className="mfg-bridge"><span>Sound familiar?</span> None of these are product or service problems. They are brand and visibility gaps, and they can all be fixed together.</p>
                            </div>
                        </div>
                    </section>


                    <section id="services" className="mfg-sol mfg-dark">
                        <div className="mfg-wrap">
                            <div className="mfg-rv mfg-l">
                                <span className="mfg-eyebrow">The solution</span>
                                <h2 className="solution">One Complete Kit to Make Your Factory Look Credible, Get Found and Win Orders.</h2>
                                <p className="mfg-lead">One team builds all eight pieces as one factory brand. Here's exactly why you need each one.</p>
                                <ul className="mfg-slist" id="slist"></ul>
                            </div>
                            <div className="mfg-rv mfg-z">
                                <div className="mfg-orb" id="orb">
                                    <div className="mfg-r2"></div><div className="mfg-r1"></div><div className="mfg-r3"></div>
                                    <div className="mfg-hub" id="hub" aria-live="polite"><span className="mfg-hi" id="hubIc"></span><small id="hubN">01</small><b id="hubT"></b></div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section id="portfolio" className="mfg-pw" aria-label="Portfolio">
                        <div className="mfg-dots" aria-hidden="true"></div><span className="mfg-pb mfg-pb1" aria-hidden="true"></span><span className="mfg-pb mfg-pb2" aria-hidden="true"></span><span className="mfg-pb mfg-pb3" aria-hidden="true"></span><span className="mfg-ln" aria-hidden="true"></span>
                        <div className="mfg-bgt" aria-hidden="true">PORTFOLIO</div>
                        <div className="mfg-lb">Our Creative Work</div>
                        <h2>Brand Kits We've Built</h2>
                        <div className="mfg-cvw">
                            <button className="mfg-nv" id="pv" style={{ left: '4%' }} aria-label="Previous project">‹</button>
                            <div className="mfg-cv" id="cv"></div>
                            <button className="mfg-nv" id="nx" style={{ right: '4%' }} aria-label="Next project">›</button>
                        </div>
                        <div className="mfg-dts" id="dts"></div>
                        {/* <div className="mfg-more"><a className="mfg-btn mfg-btn-dark" href="#quote">Request Full Portfolio</a></div> */}
                    </section>


                    <section id="process" className="mfg-hw">
                        <div className="mfg-wrap">
                            <div className="mfg-rd-head"><h2>How It Works<span>(Step by Step)</span></h2><p className="mfg-lead">Six simple steps from first call to launch.</p></div>
                            <div className="mfg-rd" id="rdWrap">
                                <div className="mfg-rd-col mfg-l"><div className="mfg-rd-row"><button type="button" className="mfg-rd-node" aria-label="Step 1: Discovery Call">01</button><article className="mfg-rd-card"><div className="mfg-rd-top"><small>Discovery Call
                                </small><span className="mfg-rd-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg></span></div><p>We understand your products or services, customers and goals.</p></article></div><div className="mfg-rd-row"><button type="button" className="mfg-rd-node" aria-label="Step 2: Brand Questionnaire">02</button><article className="mfg-rd-card"><div className="mfg-rd-top"><small>Brand Questionnaire
                                </small><span className="mfg-rd-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h3" /></svg></span></div><p>A site visit or call to capture what makes your business different.</p></article></div><div className="mfg-rd-row"><button type="button" className="mfg-rd-node" aria-label="Step 3: Logo &amp; Identity">03</button><article className="mfg-rd-card"><div className="mfg-rd-top"><small>Logo & Identity
                                </small><span className="mfg-rd-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.5 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" /></svg></span></div><p>Concepts, revisions and final brand guidelines.</p></article></div></div>
                                <div className="mfg-rd-center" aria-hidden="true"><div className="mfg-rc-glow"></div><svg className="mfg-rc-prog" viewBox="0 0 100 100"><circle className="mfg-t" cx="50" cy="50" r="46" /><circle className="mfg-p" id="rcP" cx="50" cy="50" r="46" pathLength="100" /></svg><div className="mfg-rc-orbit"><i></i><i></i><i></i></div><div className="mfg-rc-hub" id="rcHub"><span className="mfg-hi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19c0-4 2-6 4-7M14 4c4-1 6 0 6 0s1 2 0 6l-6 6-6-6zM8 16l-3 3M15 9h.01" /></svg></span><small>OUR PROCESS</small><b>Idea to Launch</b></div></div>
                                <div className="mfg-rd-col mfg-r"><div className="mfg-rd-row"><button type="button" className="mfg-rd-node" aria-label="Step 4: Print Collaterals">04</button><article className="mfg-rd-card"><div className="mfg-rd-top"><small>Print Collaterals
                                </small><span className="mfg-rd-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 9V3h10v6M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" /><rect x="7" y="14" width="10" height="7" /></svg></span></div><p>Brochure, company profile, cards and letterhead.</p></article></div><div className="mfg-rd-row"><button type="button" className="mfg-rd-node" aria-label="Step 5: Website &amp; Digital">05</button><article className="mfg-rd-card"><div className="mfg-rd-top"><small>Website & Digital
                                </small><span className="mfg-rd-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></svg></span></div><p>Website, Google profile, SEO and ChatGPT visibility setup.</p></article></div><div className="mfg-rd-row"><button type="button" className="mfg-rd-node" aria-label="Step 6: Launch &amp; Handover">06</button><article className="mfg-rd-card"><div className="mfg-rd-top"><small>Launch & Handover
                                </small><span className="mfg-rd-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 19c0-4 2-6 4-7M14 4c4-1 6 0 6 0s1 2 0 6l-6 6-6-6zM8 16l-3 3M15 9h.01" /></svg></span></div><p>Go live, hand over every file and login, plus team training.</p></article></div></div>
                            </div>
                        </div>
                    </section>


                    <section id="pricing" className="mfg-pricing">
                        <div className="mfg-wrap">
                            <div className="mfg-center mfg-rv"><span className="mfg-eyebrow">Our Packages</span><h2>Choose the Pack That Fits Your Business</h2><p className="mfg-lead">Every pack is built around the complete brand kit, from website development to brochure and social media. Choose the depth that fits your business.</p></div>
                            <div className="mfg-packs">
                                <article className="mfg-pack mfg-rv" style={{ transitionDelay: '0.00s' }}>
                                    <h3>Starter Pack</h3>
                                    <p className="mfg-pdesc">A professional website for startups and small businesses.</p>
                                    <div className="mfg-pbox"><div className="mfg-prow"><span className="mfg-off">25% OFF</span><s>₹13,332</s></div><div className="mfg-pnow">₹9,999</div></div>
                                    <span className="mfg-ribbon">What's Included</span>
                                    <div className="mfg-grp"><span className="mfg-gic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></svg></span><div><h4>Website</h4><ul><li>Up to 5 Pages</li><li>Custom Design</li><li>Mobile Responsive</li><li>WhatsApp Integration</li><li>Google Map Integration</li></ul></div></div>
                                    <hr />
                                    <div className="mfg-grp"><span className="mfg-gic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5z" /><path d="m3 13 9 5 9-5" /></svg></span><div><h4>Branding &amp; Features</h4><ul><li>Logo &amp; Brand Identity</li><li>Basic SEO Setup</li><li>Google Business Profile</li><li>Social Media Kit</li></ul></div></div>
                                    <a className="mfg-btn mfg-btn-dark" href="#quote">Choose Starter Pack</a>
                                </article>
                                <article className="mfg-pack mfg-pop mfg-rv" style={{ transitionDelay: '0.12s' }}>
                                    <span className="mfg-pbadge">Most Popular</span><h3>Growth Pack</h3>
                                    <p className="mfg-pdesc">Build a stronger online presence and win more enquiries for growing businesses.</p>
                                    <div className="mfg-pbox"><div className="mfg-prow"><span className="mfg-off">25% OFF</span><s>₹22,665</s></div><div className="mfg-pnow">₹16,999</div></div>
                                    <span className="mfg-ribbon">What's Included</span>
                                    <div className="mfg-grp"><span className="mfg-gic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></svg></span><div><h4>Website</h4><ul><li>Up to 15 Pages</li><li>Custom UI Design</li><li>Mobile Responsive</li><li>WhatsApp Integration</li><li>Google Map Integration</li></ul></div></div>
                                    <hr />
                                    <div className="mfg-grp"><span className="mfg-gic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5z" /><path d="m3 13 9 5 9-5" /></svg></span><div><h4>Branding &amp; Features</h4><ul><li>Premium Logo &amp; Brand Identity</li><li>Standard SEO Setup</li><li>Google Business Profile</li><li>Company Profile &amp; Brochure</li><li>Business Cards &amp; Letterhead</li><li>Social Media Kit</li></ul></div></div>
                                    <a className="mfg-btn mfg-btn-primary" href="#quote">Choose Growth Pack</a>
                                </article>
                                <article className="mfg-pack mfg-rv" style={{ transitionDelay: '0.24s' }}>
                                    <h3>Premium Pack</h3>
                                    <p className="mfg-pdesc">Present your company with a polished website built for corporate brands.</p>
                                    <div className="mfg-pbox"><div className="mfg-prow"><span className="mfg-off">25% OFF</span><s>₹35,999</s></div><div className="mfg-pnow">₹26,999</div></div>
                                    <span className="mfg-ribbon">What's Included</span>
                                    <div className="mfg-grp"><span className="mfg-gic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></svg></span><div><h4>Website</h4><ul><li>Up to 25 Premium Pages</li><li>Premium UI/UX Design</li><li>Mobile Responsive</li><li>WhatsApp Integration</li><li>Google Map Integration</li></ul></div></div>
                                    <hr />
                                    <div className="mfg-grp"><span className="mfg-gic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5z" /><path d="m3 13 9 5 9-5" /></svg></span><div><h4>Branding &amp; Features</h4><ul><li>Complete Brand Identity</li><li>Advanced SEO Setup</li><li>Google Business Profile</li><li>ChatGPT Business Profile</li><li>Company Profile &amp; Brochure</li><li>Business Cards &amp; Letterhead</li><li>Premium Social Media Kit</li><li>Google Analytics &amp; Search Console</li></ul></div></div>
                                    <a className="mfg-btn mfg-btn-dark" href="#quote">Choose Premium Pack</a>
                                </article>
                            </div>
                            <p className="mfg-pfoot mfg-rv">[One-time project price. GST extra — edit as needed.] Not sure which pack fits? <a href="#quote">Talk to us →</a></p>
                        </div>
                    </section>


                    <section className="mfg-ind mfg-center">
                        <div className="mfg-wrap mfg-rv"><span className="mfg-eyebrow">Industries We Serve</span><h2>Built for Every Industry</h2></div>
                        <IndRow items={IND_ROW1} style={{ marginTop: '32px' }} />
                        <IndRow items={IND_ROW2} rev />
                    </section>


                    <section className="mfg-stories">
                        <div className="mfg-wrap">
                            <div className="mfg-rv mfg-l">
                                <span className="mfg-eyebrow">Client Stories</span>
                                <h2>What Our Clients Say About Us</h2>
                                <p className="mfg-lead">Real feedback from businesses that rebuilt their brand and online presence with us.</p>
                                <div className="mfg-tnav"><button type="button" id="tp" aria-label="Previous testimonial">←</button><button type="button" id="tn" aria-label="Next testimonial">→</button></div>
                            </div>
                            <div className="mfg-tstage mfg-rv mfg-r">
                                <div className="mfg-tslides" id="tslides">
                                    {TESTIMONIALS.map((t, i) => (
                                        <div className={"mfg-tslide" + (i === 0 ? " mfg-on" : "")} key={t.name}>
                                            <blockquote>“{t.text}”</blockquote>
                                            <div className="mfg-who"><span className="mfg-av">{t.name.charAt(0)}</span><div><b>{t.name}</b></div></div>
                                        </div>
                                    ))}
                                    <div className="mfg-tdots" id="tdots"></div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section id="faq" className="mfg-faq">
                        <div className="mfg-wrap">
                            <div className="mfg-rv mfg-l">
                                <span className="mfg-eyebrow">FAQ</span>
                                <h2>Frequently Asked Questions</h2>
                                <div style={{ marginTop: '28px' }}>
                                    {FAQS.map((f, i) => (
                                        <details key={i} open={i === 0}><summary><span className="mfg-qn">{String(i + 1).padStart(2, '0')}</span><span className="mfg-qt">{f.q}</span><span className="mfg-pm" aria-hidden="true">+</span></summary><p className="mfg-ans">{f.a}</p></details>
                                    ))}
                                </div>
                                <p className="mfg-more">Still have a question? <a href="#quote">Talk to us directly →</a></p>
                            </div>
                            <div className="mfg-fimg mfg-rv mfg-r"><img src={PH("FAQ image")} alt="Frequently asked questions" loading="lazy" /></div>
                        </div>
                    </section>


                    <section id="quote" className="mfg-quote">
                        <span className="mfg-shape mfg-s1"></span><span className="mfg-shape mfg-s2"></span><span className="mfg-shape mfg-s3"></span>
                        <div className="mfg-wrap">
                            <div className="mfg-rv mfg-l">
                                <span className="mfg-eyebrow">Get Started</span>
                                <h2>Build Your Brand the Right Way</h2>
                                <p className="mfg-lead">Tell us about your business. We'll send the Complete Brand Kit details and a <b style={{ color: '#fff' }}>free brand audit</b> of your current logo, website and Google presence.</p>
                                <ul><li>✓ Free consultation, no pressure to buy</li><li>✓ Free brand audit, no commitment</li><li>✓ No obligation, no hidden charges</li><li>✓ Free first call to plan your brand kit</li></ul>
                                <a className="mfg-wa-btn" href="https://wa.me/[PHONE]"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" /></svg>Chat on WhatsApp</a>
                            </div>
                            <form id="enq" className="mfg-rv mfg-r" aria-label="Package enquiry" noValidate>
                                <h3>Get the Complete Brand Kit Details</h3>
                                <div className="mfg-ok" id="ok" role="status">Thank you! We'll get back to you with the brand kit details shortly.</div>
                                <div className="mfg-err" id="err" role="alert"></div>
                                <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }} />
                                <div className="mfg-fgrid">
                                    <label>Your name<input name="name" placeholder="Full name" required /></label>
                                    <label>Company<input name="company" placeholder="Company name" /></label>
                                    <label>Phone / WhatsApp<input name="phone" type="tel" placeholder="+91" required /></label>
                                    <label>City<input name="city" placeholder="City" /></label>
                                </div>
                                <label>Industry<select name="industry"><option value="">Select your industry</option><option>Manufacturing</option><option>Trading</option><option>Service Business</option><option>Retail</option><option>Healthcare</option><option>Education</option><option>Real Estate</option><option>Startup</option><option>Other</option></select></label>
                                <label>Anything specific you need? <span style={{ fontWeight: '400', color: 'var(--muted2)' }}>(optional)</span><input name="note" placeholder="e.g. we already have a logo, need a new website" /></label>
                                <button id="sendBtn" className="mfg-btn mfg-btn-dark" type="submit" style={{ width: '100%' }}>Get Brand Kit Details + Free Audit</button>
                                <p className="mfg-note">We respect your privacy. No spam, ever.</p>
                            </form>
                        </div>
                    </section>
                </div>

                <footer>
                    <div className="mfg-wrap">
                        <div className="mfg-fcols">
                            <div><a className="mfg-logo" href="#top" aria-label="Priyam Consultancy Services"><img src="/img/footer-logo.png" alt="PCS Logo" width="180" height="50" loading="lazy" decoding="async" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/img/priyam-consultancy-logo.png"; e.currentTarget.style.filter = "brightness(0) invert(1)"; }} /></a><p style={{ marginTop: '12px', fontSize: '14px' }}>Brand identity and digital growth for businesses in every industry. A website company in Coimbatore serving clients across India.</p></div>
                            <div><h4>Brand Kit</h4><ul><li><a href="#services">Logo &amp; Brand Identity</a></li><li><a href="#services">Company Profile &amp; Brochure</a></li><li><a href="#services">Business Cards &amp; Letterhead</a></li><li><a href="#services">Social Media Kit</a></li></ul></div>
                            <div><h4>Digital Setup</h4><ul><li><a href="#services">Website Development</a></li><li><a href="#services">SEO &amp; Online Visibility</a></li><li><a href="#services">Google Business Profile</a></li><li><a href="#services">ChatGPT Search Visibility</a></li></ul></div>
                            <div><h4>Contact</h4><ul><li>[Phone number]</li><li>[Email address]</li><li>[Office address, City]</li></ul></div>
                        </div>
                        <div className="mfg-fbot"><span>© 2026 Priyam Consultancy Services. All rights reserved.</span><span>LinkedIn · Instagram · Facebook</span></div>
                    </div>
                </footer>
            </div>
        </Layout>
    );
}