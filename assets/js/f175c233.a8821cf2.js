"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["5638"],{3010(e,s,i){i.r(s),i.d(s,{default:()=>a});var t=i(4848),n=i(1085);let o=`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

  :root {
    --navy: #004168;
    --navy-deep: #002a44;
    --navy-mid: #0a5282;
    --orange: #ed8337;
    --blue: #1a73e8;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .tos-wrap {
    font-family: 'Poppins', sans-serif;
    background: #f0f4f8;
    color: #0d1f2d;
    overflow-x: hidden;
  }

  /* \u{2550}\u{2550}\u{2550} BANNER \u{2550}\u{2550}\u{2550} */
  .banner {
    position: relative;
    min-height: 340px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 55%, var(--navy-mid) 100%);
    padding: 5rem 6% 4rem;
  }
  .banner::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: linear-gradient(rgba(237,131,55,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(237,131,55,0.06) 1px, transparent 1px);
    background-size: 60px 60px;
    animation: grid-drift 22s linear infinite;
  }
  .banner::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(ellipse 55% 80% at 80% 60%, rgba(237,131,55,0.12) 0%, transparent 65%),
      radial-gradient(ellipse 45% 70% at 5% 20%, rgba(0,42,68,0.6) 0%, transparent 55%);
  }
  @keyframes grid-drift { from{background-position:0 0} to{background-position:60px 60px} }

  .banner-inner {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.1rem;
    max-width: 700px;
  }
  .banner-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    background: rgba(237,131,55,0.12);
    border: 1px solid rgba(237,131,55,0.32);
    color: var(--orange);
    font-size: .7rem;
    font-weight: 700;
    padding: .38rem 1.1rem;
    border-radius: 50px;
    letter-spacing: .12em;
    text-transform: uppercase;
    animation: fadeUp .5s ease both;
  }
  .eyebrow-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--orange);
    animation: pulse-dot 1.6s infinite;
  }
  @keyframes pulse-dot {
    0%,100%{opacity:1;transform:scale(1)}
    50%{opacity:.4;transform:scale(1.5)}
  }
  .banner-title {
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 700;
    line-height: 1.1;
    color: #fff;
    animation: fadeUp .6s .08s ease both;
  }
  .banner-title span {
    color: var(--orange);
    text-decoration: underline;
    text-decoration-color: var(--orange);
    text-underline-offset: 6px;
    text-decoration-thickness: 3px;
  }
  .banner-subtitle {
    font-size: .97rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.55);
    max-width: 560px;
    animation: fadeUp .65s .16s ease both;
  }
  @keyframes fadeUp {
    from{opacity:0;transform:translateY(24px)}
    to{opacity:1;transform:translateY(0)}
  }

  /* \u{2550}\u{2550}\u{2550} CONTENT \u{2550}\u{2550}\u{2550} */
  .tos-body {
  
    margin: 0 auto;
    padding: 5rem 6% 5rem;
    background: #fff;
  }

  .tos-section {
    margin-bottom: 2rem;
  }

  .tos-section-title {
    font-size: 1.08rem;
    font-weight: 600;
    color: #0d1f2d;
    font-family: 'Poppins', sans-serif;
    margin-bottom: .55rem;
  }

  .tos-section-body {
    font-size: .9rem;
    line-height: 1.85;
    color: #5a6a7a;
  }

  .tos-section-body p + p { margin-top: .5rem; }

  .tos-section-body ul {
    margin-top: .5rem;
    list-style: none;
    padding-left: 0;
  }
  .tos-section-body ul li {
    padding-left: 1.2rem;
    margin-bottom: .3rem;
    position: relative;
  }
  .tos-section-body ul li::before {
    content: '*';
    position: absolute;
    left: 0;
  }

  .tos-link {
    color: var(--blue);
    text-decoration: none;
  }
  .tos-link:hover { text-decoration: underline; }

  .tos-contact-links {
    margin-top: .4rem;
    display: flex;
    flex-wrap: wrap;
    gap: .3rem 1.2rem;
  }
  .tos-contact-link {
    color: var(--blue);
    font-size: .9rem;
    text-decoration: none;
  }
  .tos-contact-link:hover { text-decoration: underline; }

  @media (max-width: 640px) {
    .tos-body { padding: 2.5rem 5% 3.5rem; }
  }
`;function a(){return(0,t.jsx)(n.A,{children:(0,t.jsxs)("div",{className:"tos-wrap",children:[(0,t.jsx)("style",{children:o}),(0,t.jsx)("section",{className:"banner",children:(0,t.jsxs)("div",{className:"banner-inner",children:[(0,t.jsxs)("div",{className:"banner-eyebrow",children:[(0,t.jsx)("div",{className:"eyebrow-dot"}),"Legal"]}),(0,t.jsxs)("h1",{className:"banner-title",children:["Terms of ",(0,t.jsx)("span",{children:"Service"})]})]})}),(0,t.jsxs)("div",{className:"tos-body",children:[(0,t.jsxs)("div",{className:"tos-section",children:[(0,t.jsx)("div",{className:"tos-section-title",children:"1. Overview"}),(0,t.jsx)("div",{className:"tos-section-body",children:(0,t.jsx)("p",{children:'This website is operated by Priyam Consultancy Services (PCS). Throughout the site, the terms "we," "us," and "our" refer to PCS. By accessing or using our website (https://www.priyamconsultancy.com), you agree to be bound by these Terms and Conditions of Use and all applicable laws and regulations. These terms apply to all visitors of the site, including without limitation, cybersurfers, merchandisers, guests, and content contributors.'})})]}),(0,t.jsxs)("div",{className:"tos-section",children:[(0,t.jsx)("div",{className:"tos-section-title",children:"2. Use License"}),(0,t.jsxs)("div",{className:"tos-section-body",children:[(0,t.jsx)("p",{children:"Authorization is granted to temporarily download one copy of the materials on PCS's website for personal, non-commercial, temporary viewing only. This is an entitlement of a license, not a transfer of title, and under this License you may not:"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Modify or copy the materials"}),(0,t.jsx)("li",{children:"Use them for marketable purposes or public display"}),(0,t.jsx)("li",{children:"Reverse-engineer or decompile any software"}),(0,t.jsx)("li",{children:"Remove any brand or personal memos"}),(0,t.jsx)("li",{children:"Mirror the materials on another platform"})]}),(0,t.jsx)("p",{children:"This License shall automatically terminate if you violate any of these restrictions."})]})]}),(0,t.jsxs)("div",{className:"tos-section",children:[(0,t.jsx)("div",{className:"tos-section-title",children:"3. Disclaimer"}),(0,t.jsx)("div",{className:"tos-section-body",children:(0,t.jsx)("p",{children:'All services are provided "as is" and "as available." PCS doesn\'t guarantee continued or error-free service. We aren\'t liable for any direct or indirect damages, including data loss, missed gains, or system failure.'})})]}),(0,t.jsxs)("div",{className:"tos-section",children:[(0,t.jsx)("div",{className:"tos-section-title",children:"4. Accuracy of Information"}),(0,t.jsx)("div",{className:"tos-section-body",children:(0,t.jsx)("p",{children:"We do our best to give accurate and streamlined content, but PCS isn't responsible if any information made available on this site is deficient or outdated. All material is provided for general information and shouldn't be relied upon as the sole basis for decision-making."})})]}),(0,t.jsxs)("div",{className:"tos-section",children:[(0,t.jsx)("div",{className:"tos-section-title",children:"5. Pricing and Variations"}),(0,t.jsx)("div",{className:"tos-section-body",children:(0,t.jsx)("p",{children:"Prices for our services are subject to change without notice. PCS reserves the right to modify or discontinue any part of the service without notice. We aren't liable for any change, suspension, or termination."})})]}),(0,t.jsxs)("div",{className:"tos-section",children:[(0,t.jsx)("div",{className:"tos-section-title",children:"6. Optional Tools & Third-Party Links"}),(0,t.jsx)("div",{className:"tos-section-body",children:(0,t.jsx)("p",{children:"PCS may offer access to third-party tools or services. These are provided \"as is\" without guarantees. Use of similar tools is at your own risk. Our site may also contain links to third-party websites. We aren't responsible for the content or accuracy of any external site and don't assume responsibility for any third-party content or services."})})]}),(0,t.jsxs)("div",{className:"tos-section",children:[(0,t.jsx)("div",{className:"tos-section-title",children:"7. Personal Information"}),(0,t.jsx)("div",{className:"tos-section-body",children:(0,t.jsxs)("p",{children:["Your submission of personal information is governed by our ",(0,t.jsx)("a",{className:"tos-link",href:"/privacy-policy",children:"Privacy Policy"}),"."]})})]}),(0,t.jsxs)("div",{className:"tos-section",children:[(0,t.jsx)("div",{className:"tos-section-title",children:"8. Intellectual Property"}),(0,t.jsx)("div",{className:"tos-section-body",children:(0,t.jsx)("p",{children:"All content, designs, images, logos, trademarks, and other materials available on this website or through our services are the exclusive property of Priyam Consultancy Services (PCS), unless otherwise stated. You may not reproduce, distribute, modify, transmit, display, perform, publish, license, or produce secondary works from any PCS-owned content without prior written authorization. Unauthorized use of any PCS intellectual property is strictly prohibited and may result in legal action."})})]}),(0,t.jsxs)("div",{className:"tos-section",children:[(0,t.jsx)("div",{className:"tos-section-title",children:"9. Governing Law"}),(0,t.jsx)("div",{className:"tos-section-body",children:(0,t.jsx)("p",{children:"The laws of India shall govern these terms and any disputes arising under them."})})]}),(0,t.jsxs)("div",{className:"tos-section",children:[(0,t.jsx)("div",{className:"tos-section-title",children:"10. Contact Information"}),(0,t.jsxs)("div",{className:"tos-section-body",children:[(0,t.jsx)("p",{children:"For any questions regarding these Terms of Service, you may contact us at:"}),(0,t.jsxs)("div",{className:"tos-contact-links",children:[(0,t.jsx)("a",{className:"tos-contact-link",href:"mailto:sales@priyamconsultancy.com",children:"\u2709 sales@priyamconsultancy.com"}),(0,t.jsx)("a",{className:"tos-contact-link",href:"https://www.priyamconsultancy.com",target:"_blank",rel:"noopener noreferrer",children:"\u{1F310} www.priyamconsultancy.com"})]})]})]})]})]})})}}}]);