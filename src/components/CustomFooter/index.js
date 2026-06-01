import React from 'react';
import styles from './styles.module.css';

export default function CustomFooter() {
  const services1 = [
    { label: 'Business Registration and Compliance', href: '/business-registration-compliance' },
    { label: 'Business Registration', href: '/business-registrations' },
    { label: 'Company Valuations', href: '/company-valuations-and-investment-support' },
    { label: 'Statutory Compliance', href: '/statutory-compliance' },
    { label: 'Virtual CFO Services', href: '/virtual-cfo-services' },
    { label: 'Accounting', href: '/accounting' },
    { label: 'Finances', href: '/finances' },
    { label: 'Digital Transformation', href: '/digital-transformation' },
    { label: 'Business Process Automation', href: '/business-process-automation' },
    { label: 'Custom Web & Mobile Applications', href: '/web-and-mobile-application' },
    { label: 'Data Analytics', href: '/data-analytics' },
  ];

  const services2 = [
    { label: 'Digital Marketing', href: '/digital-marketing' },
    { label: 'SEO', href: '/seo' },
    { label: 'PPC', href: '/performance-marketing' },
    { label: 'SMM', href: '/social-media' },
    { label: 'Content Marketing', href: '/content-marketing' },
    { label: 'Email Marketing', href: '/email-marketing' },
    { label: 'Website Development', href: '/website-development' },
    { label: 'Graphic Design', href: '/graphic-design' },
    { label: 'HR Services', href: '/hr-services' },
    { label: 'Payroll Management', href: '/payroll-management' },
    { label: 'Recruitment Services', href: '/recruitment-services' },
    { label: 'HR Strategy & Policy Development', href: '/hr-strategy-and-policy-development' },
  ];

  const company = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Career', href: '/careers' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: 'https://www.priyamconsultancy.com/blog/' },
    // { label: 'FAQs', href: '/faqs' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerInner}>

          {/* Brand Column */}
          <div className={styles.brandCol}>
            <a href="/" className={styles.logo}>
              <img
                src="/img/priyam-consultancy-logo.png"
                alt="Priyam Consultancy Services"
                className={styles.logoImg}
              />
            </a>
            <p className={styles.brandDesc}>
              We are one of the fastest-growing full-service business solutions companies,
              delivering cutting-edge, result-driven strategies across digital marketing,
              technology, branding, and consulting to create the perfect blend of innovation and impact.
            </p>
          </div>

          {/* Our Services */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Our Services</h4>
            <div className={styles.serviceGrid}>
              <div className={styles.serviceSubCol}>
                {services1.map((s) => (
                  <a key={s.label} href={s.href} className={styles.footerLink}>{s.label}</a>
                ))}
              </div>
              <div className={styles.serviceSubCol}>
                {services2.map((s) => (
                  <a key={s.label} href={s.href} className={styles.footerLink}>{s.label}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Company */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Company</h4>
            {company.map((c) => (
              <a key={c.label} href={c.href} className={styles.footerLink}>{c.label}</a>
            ))}
          </div>

          {/* Contact Info */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Contact Info</h4>
            <div className={styles.contactItem}>
              <span className={styles.contactIconWrap} style={{ background: '#f97316' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </span>
              <a href="tel:+919677444048" className={styles.contactLink}>+91 96774 44048</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIconWrap} style={{ background: '#f97316' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              <span>1st Floor, SF.11/4, Pooja Garden, Kalapatti Road, Civil Aerodrome Post, Coimbatore - 641014</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIconWrap} style={{ background: '#f97316' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <a href="mailto:sales@priyamconsultancy.com" className={styles.contactLink}>sales@priyamconsultancy.com</a>
            </div>

            {/* Social Icons */}
            <div className={styles.socialRow}>
              <a href="https://linkedin.com" className={`${styles.socialIcon} ${styles.socialLi}`} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://facebook.com" className={`${styles.socialIcon} ${styles.socialFb}`} target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://instagram.com" className={`${styles.socialIcon} ${styles.socialIg}`} target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
              </a>
              <a href="https://x.com" className={`${styles.socialIcon} ${styles.socialX}`} target="_blank" rel="noreferrer" aria-label="X (Twitter)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.25 2.25h6.893l4.259 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomInner}>
          <span>© 2026 Priyam Consultancy Services | All Rights Reserved</span>
          <div className={styles.bottomLinks}>
            <a href="/privacy-policy" className={styles.bottomLink}>Privacy Policy</a>
            <span className={styles.divider}>|</span>
            <a href="/terms-and-conditions" className={styles.bottomLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}