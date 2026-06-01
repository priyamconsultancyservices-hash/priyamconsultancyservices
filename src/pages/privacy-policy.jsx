import Layout from '@theme/Layout';
const styles = `
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

  /* ═══ BANNER ═══ */
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

  /* ═══ CONTENT ═══ */
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
`;

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="tos-wrap">
      <style>{styles}</style>

      {/* ── BANNER ── */}
      <section className="banner">
        <div className="banner-inner">
          <div className="banner-eyebrow">
            <div className="eyebrow-dot" />
            Legal
          </div>
          <h1 className="banner-title">
            Privacy <span>Policy</span>
          </h1>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <div className="tos-body">

        <p className="tos-intro">
          This Privacy Policy describes the policies of Priyam Consultancy Services, 1st Floor, Pooja Garden, Kalapatti Road, Civil Aerodrome post, Coimbatore, Tamil Nadu, India, sales@priyamconsultancy.com, on the collection, use, and disclosure of your information that we collect when you use our website (https://www.priyamconsultancy.com) (the "Service"). By accessing or using the Service, you are consenting to the collection, use, and disclosure of your information in accordance with this Privacy Policy.
        </p>

        {/* INFORMATION WE COLLECT */}
        <div className="tos-section">
          <div className="tos-section-title">INFORMATION WE COLLECT</div>
          <div className="tos-section-body">

            <div className="tos-subsection-title">Personally Identifiable Information (PII)</div>
            <p>Depending on how you interact with our website or services, we may collect certain Personally Identifiable Information (PII). This can include your name, email address, phone number, business name, company website, and location. We may also collect additional information if you choose to inquire about our services, submit forms, participate in recruitment activities, or request consultations. In case of paid services, your billing details or payment preferences may also be collected through our gateways.</p>

            <div className="tos-subsection-title">Non-Personally Identifiable Information (Non-PII)</div>
            <p>When you visit our website, we may automatically collect Non-PII such as your IP address, browser type, device type, operating system, referring URLs, pages visited, time spent on site, and general browsing behavior. This data helps us improve website performance, understand user behavior, and optimize overall user experience. Such information is typically collected through cookies and third-party analytics tools.</p>
          </div>
        </div>

        {/* HOW WE USE YOUR INFORMATION */}
        <div className="tos-section">
          <div className="tos-section-title">HOW WE USE YOUR INFORMATION</div>
          <div className="tos-section-body">
            <p>We will use the information that we collect about you for the following purposes:</p>
            <ul>
              <li>Marketing / Promotional</li>
              <li>Responding to service inquiries and support</li>
              <li>Recruitment and HR consulting services</li>
              <li>Website improvement and analytics</li>
            </ul>
            <p>If we intend to use your information for any other purpose, we will ask for your consent. Your information will only be used for the purpose(s) for which you provided consent, unless required by law to do otherwise.</p>
          </div>
        </div>

        {/* HOW WE SHARE YOUR INFORMATION */}
        <div className="tos-section">
          <div className="tos-section-title">HOW WE SHARE YOUR INFORMATION</div>
          <div className="tos-section-body">
            <p>We do not share or transfer your personal information to any third party without your prior consent, except under limited circumstances as outlined below:</p>
            <ul>
              <li>Advertising service providers</li>
              <li>HR and IT partners</li>
              <li>Third-party marketing or branding agencies</li>
              <li>Analytics tools (e.g., Google Analytics)</li>
              <li>Web hosting and data processing service providers</li>
            </ul>
            <p>These third parties are required to use the information solely for the purpose for which it was shared and must not retain it longer than necessary to fulfill that purpose.</p>
            <p>We may also disclose your personal information if:</p>
            <ul>
              <li>Required to comply with applicable laws, court orders, or legal obligations</li>
              <li>Necessary to enforce agreements or policies, including this Privacy Policy</li>
              <li>Required to respond to legal claims regarding your use of our services</li>
              <li>PCS is acquired or merged—your information may be transferred to the new entity as part of business assets</li>
            </ul>
          </div>
        </div>

        {/* RETENTION OF YOUR INFORMATION */}
        <div className="tos-section">
          <div className="tos-section-title">RETENTION OF YOUR INFORMATION</div>
          <div className="tos-section-body">
            <p>We will retain your personal information depending on the type of data and purpose after you stop using our services, or as long as needed to fulfil the purposes outlined in this policy.</p>
            <p>In some cases, we may need to retain data for longer due to:</p>
            <ul>
              <li>Legal obligations and regulatory compliance</li>
              <li>Fraud prevention and dispute resolution</li>
              <li>Internal record-keeping or audits</li>
            </ul>
            <p>Non-identifiable and aggregated data that cannot be linked back to you may be stored indefinitely.</p>
          </div>
        </div>

        {/* TEXT MESSAGE COMMUNICATIONS */}
        <div className="tos-section">
          <div className="tos-section-title">TEXT MESSAGE COMMUNICATIONS</div>
          <div className="tos-section-body">
            <p>PCS may use SMS (text messaging) to communicate service updates, appointment confirmations, or marketing alerts. Message frequency may vary. Standard messaging rates from your mobile carrier may apply.</p>
            <p>We do not share any mobile information with third parties for promotional or marketing purposes. Consent and opt-in data from messaging services will not be sold or shared.</p>

            <div className="tos-subsection-title">OPT-OUT OF TEXT MESSAGE COMMUNICATIONS</div>
            <p>You can opt out of receiving SMS communications at any time by replying with STOP or emailing us at sales@priyamconsultancy.com. You may still receive service-related or transactional messages from other PCS-managed numbers, and you can opt out of those separately in the same way.</p>
          </div>
        </div>

        {/* COOKIES AND WEB BEACONS */}
        <div className="tos-section">
          <div className="tos-section-title">COOKIES AND WEB BEACONS</div>
          <div className="tos-section-body">
            <p>Like most websites, Priyam Consultancy Services (PCS) uses cookies to collect certain information when you visit our website. These cookies store data such as your browser type, device information, pages visited, and user preferences. This information helps us understand how visitors interact with our website and allows us to personalise content, improve functionality, and enhance your browsing experience. Cookies do not contain any personally identifiable information. You may choose to disable cookies through your browser settings at any time; however, doing so may affect the functionality or performance of certain parts of the website.</p>
          </div>
        </div>

        {/* CHILDREN'S INFORMATION */}
        <div className="tos-section">
          <div className="tos-section-title">CHILDREN'S INFORMATION</div>
          <div className="tos-section-body">
            <p>At Priyam Consultancy Services (PCS), protecting children while using the Internet is one of our key responsibilities. We strongly encourage parents and guardians to monitor and guide the online activities of their children.</p>
            <p>We do not knowingly collect any Personally Identifiable Information (PII) from children under the age of 13. If you believe that your child may have submitted such information on our website, we kindly request you to contact us immediately. We will take prompt steps to remove that data from our records.</p>
          </div>
        </div>

        {/* QUESTIONS AND CONTACT INFORMATION */}
        <div className="tos-section">
          <div className="tos-section-title">QUESTIONS AND CONTACT INFORMATION</div>
          <div className="tos-section-body">
            <p>If you would like to access, correct, amend, or delete any personal information we may have about you, register a complaint, or simply want more information regarding our privacy practices, please feel free to contact us at Priyam Consultancy Services, 1st Floor, SF.31/A Pooja Garden, Kalapatti Road Civil Aerodrome post, Coimbatore Tamil Nadu, India</p>
            <div className="tos-contact-links">
              <a className="tos-contact-link" href="mailto:sales@priyamconsultancy.com">✉ sales@priyamconsultancy.com</a>
            </div>
          </div>
        </div>

      </div>
    </div>
    </Layout>
  );
}