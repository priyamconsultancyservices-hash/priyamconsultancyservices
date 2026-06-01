"use strict";(self.webpackChunknew_docs_pcs_website_design=self.webpackChunknew_docs_pcs_website_design||[]).push([["8841"],{4589(e,i,o){o.r(i),o.d(i,{default:()=>r});var s=o(4848),n=o(1085);let t=`
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

  .tos-intro {
    font-size: .9rem;
    line-height: 1.85;
    color: #5a6a7a;
    margin-bottom: 2.5rem;
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

  .tos-subsection-title {
    font-size: .95rem;
    font-weight: 600;
    color: #0d1f2d;
    margin-top: 1rem;
    margin-bottom: .35rem;
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
`;function r(){return(0,s.jsx)(n.A,{children:(0,s.jsxs)("div",{className:"tos-wrap",children:[(0,s.jsx)("style",{children:t}),(0,s.jsx)("section",{className:"banner",children:(0,s.jsxs)("div",{className:"banner-inner",children:[(0,s.jsxs)("div",{className:"banner-eyebrow",children:[(0,s.jsx)("div",{className:"eyebrow-dot"}),"Legal"]}),(0,s.jsxs)("h1",{className:"banner-title",children:["Privacy ",(0,s.jsx)("span",{children:"Policy"})]})]})}),(0,s.jsxs)("div",{className:"tos-body",children:[(0,s.jsx)("p",{className:"tos-intro",children:'This Privacy Policy describes the policies of Priyam Consultancy Services, 1st Floor, Pooja Garden, Kalapatti Road, Civil Aerodrome post, Coimbatore, Tamil Nadu, India, sales@priyamconsultancy.com, on the collection, use, and disclosure of your information that we collect when you use our website (https://www.priyamconsultancy.com) (the "Service"). By accessing or using the Service, you are consenting to the collection, use, and disclosure of your information in accordance with this Privacy Policy.'}),(0,s.jsxs)("div",{className:"tos-section",children:[(0,s.jsx)("div",{className:"tos-section-title",children:"INFORMATION WE COLLECT"}),(0,s.jsxs)("div",{className:"tos-section-body",children:[(0,s.jsx)("div",{className:"tos-subsection-title",children:"Personally Identifiable Information (PII)"}),(0,s.jsx)("p",{children:"Depending on how you interact with our website or services, we may collect certain Personally Identifiable Information (PII). This can include your name, email address, phone number, business name, company website, and location. We may also collect additional information if you choose to inquire about our services, submit forms, participate in recruitment activities, or request consultations. In case of paid services, your billing details or payment preferences may also be collected through our gateways."}),(0,s.jsx)("div",{className:"tos-subsection-title",children:"Non-Personally Identifiable Information (Non-PII)"}),(0,s.jsx)("p",{children:"When you visit our website, we may automatically collect Non-PII such as your IP address, browser type, device type, operating system, referring URLs, pages visited, time spent on site, and general browsing behavior. This data helps us improve website performance, understand user behavior, and optimize overall user experience. Such information is typically collected through cookies and third-party analytics tools."})]})]}),(0,s.jsxs)("div",{className:"tos-section",children:[(0,s.jsx)("div",{className:"tos-section-title",children:"HOW WE USE YOUR INFORMATION"}),(0,s.jsxs)("div",{className:"tos-section-body",children:[(0,s.jsx)("p",{children:"We will use the information that we collect about you for the following purposes:"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Marketing / Promotional"}),(0,s.jsx)("li",{children:"Responding to service inquiries and support"}),(0,s.jsx)("li",{children:"Recruitment and HR consulting services"}),(0,s.jsx)("li",{children:"Website improvement and analytics"})]}),(0,s.jsx)("p",{children:"If we intend to use your information for any other purpose, we will ask for your consent. Your information will only be used for the purpose(s) for which you provided consent, unless required by law to do otherwise."})]})]}),(0,s.jsxs)("div",{className:"tos-section",children:[(0,s.jsx)("div",{className:"tos-section-title",children:"HOW WE SHARE YOUR INFORMATION"}),(0,s.jsxs)("div",{className:"tos-section-body",children:[(0,s.jsx)("p",{children:"We do not share or transfer your personal information to any third party without your prior consent, except under limited circumstances as outlined below:"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Advertising service providers"}),(0,s.jsx)("li",{children:"HR and IT partners"}),(0,s.jsx)("li",{children:"Third-party marketing or branding agencies"}),(0,s.jsx)("li",{children:"Analytics tools (e.g., Google Analytics)"}),(0,s.jsx)("li",{children:"Web hosting and data processing service providers"})]}),(0,s.jsx)("p",{children:"These third parties are required to use the information solely for the purpose for which it was shared and must not retain it longer than necessary to fulfill that purpose."}),(0,s.jsx)("p",{children:"We may also disclose your personal information if:"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Required to comply with applicable laws, court orders, or legal obligations"}),(0,s.jsx)("li",{children:"Necessary to enforce agreements or policies, including this Privacy Policy"}),(0,s.jsx)("li",{children:"Required to respond to legal claims regarding your use of our services"}),(0,s.jsx)("li",{children:"PCS is acquired or merged\u2014your information may be transferred to the new entity as part of business assets"})]})]})]}),(0,s.jsxs)("div",{className:"tos-section",children:[(0,s.jsx)("div",{className:"tos-section-title",children:"RETENTION OF YOUR INFORMATION"}),(0,s.jsxs)("div",{className:"tos-section-body",children:[(0,s.jsx)("p",{children:"We will retain your personal information depending on the type of data and purpose after you stop using our services, or as long as needed to fulfil the purposes outlined in this policy."}),(0,s.jsx)("p",{children:"In some cases, we may need to retain data for longer due to:"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Legal obligations and regulatory compliance"}),(0,s.jsx)("li",{children:"Fraud prevention and dispute resolution"}),(0,s.jsx)("li",{children:"Internal record-keeping or audits"})]}),(0,s.jsx)("p",{children:"Non-identifiable and aggregated data that cannot be linked back to you may be stored indefinitely."})]})]}),(0,s.jsxs)("div",{className:"tos-section",children:[(0,s.jsx)("div",{className:"tos-section-title",children:"TEXT MESSAGE COMMUNICATIONS"}),(0,s.jsxs)("div",{className:"tos-section-body",children:[(0,s.jsx)("p",{children:"PCS may use SMS (text messaging) to communicate service updates, appointment confirmations, or marketing alerts. Message frequency may vary. Standard messaging rates from your mobile carrier may apply."}),(0,s.jsx)("p",{children:"We do not share any mobile information with third parties for promotional or marketing purposes. Consent and opt-in data from messaging services will not be sold or shared."}),(0,s.jsx)("div",{className:"tos-subsection-title",children:"OPT-OUT OF TEXT MESSAGE COMMUNICATIONS"}),(0,s.jsx)("p",{children:"You can opt out of receiving SMS communications at any time by replying with STOP or emailing us at sales@priyamconsultancy.com. You may still receive service-related or transactional messages from other PCS-managed numbers, and you can opt out of those separately in the same way."})]})]}),(0,s.jsxs)("div",{className:"tos-section",children:[(0,s.jsx)("div",{className:"tos-section-title",children:"COOKIES AND WEB BEACONS"}),(0,s.jsx)("div",{className:"tos-section-body",children:(0,s.jsx)("p",{children:"Like most websites, Priyam Consultancy Services (PCS) uses cookies to collect certain information when you visit our website. These cookies store data such as your browser type, device information, pages visited, and user preferences. This information helps us understand how visitors interact with our website and allows us to personalise content, improve functionality, and enhance your browsing experience. Cookies do not contain any personally identifiable information. You may choose to disable cookies through your browser settings at any time; however, doing so may affect the functionality or performance of certain parts of the website."})})]}),(0,s.jsxs)("div",{className:"tos-section",children:[(0,s.jsx)("div",{className:"tos-section-title",children:"CHILDREN'S INFORMATION"}),(0,s.jsxs)("div",{className:"tos-section-body",children:[(0,s.jsx)("p",{children:"At Priyam Consultancy Services (PCS), protecting children while using the Internet is one of our key responsibilities. We strongly encourage parents and guardians to monitor and guide the online activities of their children."}),(0,s.jsx)("p",{children:"We do not knowingly collect any Personally Identifiable Information (PII) from children under the age of 13. If you believe that your child may have submitted such information on our website, we kindly request you to contact us immediately. We will take prompt steps to remove that data from our records."})]})]}),(0,s.jsxs)("div",{className:"tos-section",children:[(0,s.jsx)("div",{className:"tos-section-title",children:"QUESTIONS AND CONTACT INFORMATION"}),(0,s.jsxs)("div",{className:"tos-section-body",children:[(0,s.jsx)("p",{children:"If you would like to access, correct, amend, or delete any personal information we may have about you, register a complaint, or simply want more information regarding our privacy practices, please feel free to contact us at Priyam Consultancy Services, 1st Floor, SF.31/A Pooja Garden, Kalapatti Road Civil Aerodrome post, Coimbatore Tamil Nadu, India"}),(0,s.jsx)("div",{className:"tos-contact-links",children:(0,s.jsx)("a",{className:"tos-contact-link",href:"mailto:sales@priyamconsultancy.com",children:"\u2709 sales@priyamconsultancy.com"})})]})]})]})]})})}}}]);