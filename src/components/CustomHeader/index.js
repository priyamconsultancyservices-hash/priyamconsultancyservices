import React, { useState, useRef } from 'react';
import styles from './styles.module.css';

/* ── Icon Helper ──
   All icons live at /static/img/icons/<name>.svg
   Usage: <MenuIcon name="business-registration" />
*/
const MenuIcon = ({ name, alt = '' }) => (
  <img
    src={`/img/icon/${name}.webp`}
    alt={alt}
    className={styles.menuIconImg}
    width={18}
    height={18}
    loading="lazy"
  />
);

export default function CustomHeader() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const closeTimer = useRef(null);

  const handleMouseEnter = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  const toggleMobileItem = (label) => {
    setMobileExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  /* ─────────────────────────────────────────
     SERVICES MEGA MENU DATA
     Icon file names → /static/img/icons/*.svg
  ───────────────────────────────────────── */
  const servicesMega = [
    {
      heading: 'Business Registration & Compliance',
      headingHref: '/business-registration-compliance',
      items: [
        { label: 'Business Registration',              href: '/business-registrations',                     icon: <MenuIcon name="business-registration-icon"    /> },
        { label: 'Investment & Company Valuations',     href: '/company-valuations-and-investment-support',  icon: <MenuIcon name="company-valuation-icon"         /> },
        { label: 'Statutory Compliance',               href: '/statutory-compliance',                       icon: <MenuIcon name="statutory-compliance-icon"      /> },
        { label: 'Virtual CFO',                        href: '/virtual-cfo-services',                       icon: <MenuIcon name="virtual-cfo-icon"               /> },
        { label: 'Accounting',                         href: '/accounting',                                 icon: <MenuIcon name="accounting-icon"                /> },
        { label: 'Finances',                           href: '/finances',                                   icon: <MenuIcon name="finances-icon"                  /> },
      ],
    },
    {
      heading: 'Digital Marketing',
      headingHref: '/digital-marketing',
      items: [
        { label: 'SEO',                          href: '/search-engine-optimization',       icon: <MenuIcon name="seo-icon"                   /> },
        { label: 'Performance Marketing',         href: '/performance-marketing',            icon: <MenuIcon name="performance-marketing-icon" /> },
        { label: 'Social Media Marketing',        href: '/social-media-marketing',           icon: <MenuIcon name="social-media-icon"          /> },
        { label: 'Content Marketing',             href: '/content-marketing',                icon: <MenuIcon name="content-marketing-icon"     /> },
        { label: 'Marketplace & E-Commerce',      href: '/marketplace-ecommerce-marketing',  icon: <MenuIcon name="marketplace-icon"           /> },
        { label: 'Graphic Design',                href: '/graphic-design',                   icon: <MenuIcon name="graphic-design-icon"        /> },
      ],
    },
    {
      heading: 'Website Development',
      headingHref: '/website-development',
      items: [
        { label: 'Website Design',                      href: '/website-design',                     icon: <MenuIcon name="website-design-icon"    /> },
        { label: 'Static Website Development',          href: '/static-website-development',         icon: <MenuIcon name="static-website-icon"    /> },
        { label: 'Custom Website Development',          href: '/custom-website-development',         icon: <MenuIcon name="custom-website-icon"    /> },
        { label: 'WooCommerce Website Development',     href: '/woocommerce-website-development',    icon: <MenuIcon name="woocommerce-icon"        /> },
        { label: 'Shopify Website Development',         href: '/shopify-website-development',        icon: <MenuIcon name="shopify-icon"           /> },
        { label: 'E-Commerce Website Development',      href: '/e-commerce-website-development',     icon: <MenuIcon name="ecommerce-icon"         /> },
      ],
    },
    {
      heading: 'Human Resources',
      headingHref: '/hr-services',
      items: [
        { label: 'Recruitment',       href: '/recruitment-services',              icon: <MenuIcon name="recruitment-icon"  /> },
        { label: 'Payroll Management', href: '/payroll-management',               icon: <MenuIcon name="payroll-icon"       /> },
        { label: 'HR Strategy',        href: '/hr-strategy-and-policy-development', icon: <MenuIcon name="hr-strategy-icon" /> },
      ],
      subHeading: 'Digital Transformation',
      subHeadingHref: '/digital-transformation',
      subItems: [
        { label: 'Business Process Automation', href: '/business-process-automation',   icon: <MenuIcon name="bpa-icon"            /> },
        { label: 'Custom Web & Mobile App',      href: '/web-and-mobile-application',   icon: <MenuIcon name="mobile-app-icon"     /> },
        { label: 'Data Analytics',               href: '/data-analytics',               icon: <MenuIcon name="data-analytics-icon" /> },
      ],
    },
  ];

  /* ─────────────────────────────────────────
     NAV LINKS
  ───────────────────────────────────────── */
  const navLinks = [
    { label: 'Home',     href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Services', mega: true },
    {
      label: 'Partners',
      dropdown: [
        { label: 'Microsoft Apps Partners',  href: '/microsoft-apps-partners',  icon: <MenuIcon name="microsoft-icon"   /> },
        { label: 'Odoo Partners',             href: '/odoo-partners',             icon: <MenuIcon name="odoo-icon"        /> },
        { label: 'Sterlo Partners',           href: '/sterlo-partners',           icon: <MenuIcon name="sterlo-icon"     /> },
        { label: 'Sterlo Care Partners',      href: '/sterlo-care-partners',      icon: <MenuIcon name="sterlocare-icon"  /> },
        { label: 'Sterlo Build Partners',     href: '/sterlo-build-partners',     icon: <MenuIcon name="sterlobuild-icon"/> },
      ],
    },
    {
      label: 'Industries',
      dropdown: [
        { label: 'Textile',                        href: '/textile',                         icon: <MenuIcon name="textile-icon"       /> },
        { label: 'Healthcare',                     href: '/healthcare',                      icon: <MenuIcon name="healthcare-icon"    /> },
        { label: 'Construction',                   href: '/construction',                    icon: <MenuIcon name="construction-icon"  /> },
        { label: 'Retail & E-Commerce',            href: '/retail',                          icon: <MenuIcon name="retail-icon"        /> },
        { label: 'Manufacturing',                  href: '/manufacturing',                   icon: <MenuIcon name="manufacturing-icon" /> },
        { label: 'Tourism and Hospitality',        href: '/tourism-and-hospitality',         icon: <MenuIcon name="tourism-icon"       /> },
        { label: 'IT / IT Services',               href: '/it-or-it-services',               icon: <MenuIcon name="it-service-icon"            /> },
        { label: 'Banking, Financial & Insurance', href: '/banking-financial-and-insurance-services', icon: <MenuIcon name="banking-icon" /> },
      ],
    },
    {
      label: 'Resources',
      dropdown: [
        { label: 'Blog',         href: 'https://www.priyamconsultancy.com/blog/',         icon: <MenuIcon name="blog-icon"         /> },
        { label: 'Case Studies', href: '/case-studies', icon: <MenuIcon name="case-studies-icon" /> },
        { label: 'Careers',      href: '/careers',      icon: <MenuIcon name="careers-icon"      /> },
        { label: 'Portfolio',    href: '/portfolio',    icon: <MenuIcon name="portfolio-icon"    /> },
      ],
    },
    { label: 'Contact', href: '/contact-us' },
  ];

  /* ─────────────────────────────────────────
     RENDER
  ───────────────────────────────────────── */
  return (
    <header className={styles.headerWrapper}>

      {/* ── Top Bar ── */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <div className={styles.topBarLeft}>
        <a href="mailto:sales@priyamconsultancy.com" className={styles.topBarItem}>
  <span className={styles.topIcon}>✉</span>
  sales@priyamconsultancy.com
</a><a href="tel:+919677444048" className={styles.topBarItem}>
  <span className={styles.topIcon}>📞</span>
  +91 96774 44048
</a>
          </div>
          <div className={styles.topBarRight}>
            <a href="https://www.facebook.com/profile.php?id=61577125709962" className={styles.socialIcon} target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/priyam_consultancy_services/" className={styles.socialIcon} target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/priyam-consultancy-services/" className={styles.socialIcon} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Nav ── */}
      <div className={styles.mainNav}>
        <div className={styles.navInner}>

          {/* Logo */}
          <a href="/" className={styles.logo}>
            <img src="/img/priyam-consultancy-logo.png" alt="Priyam Consultancy Services" className={styles.logoImg} />
          </a>

          {/* Desktop Nav Links */}
          <nav className={styles.navLinks}>
            {navLinks.map((link) => {

              /* ── Mega (Services) ── */
              if (link.mega) {
                return (
                  <div
                    key={link.label}
                    className={styles.navItem}
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span className={styles.navLink}>
                      {link.label} <span className={styles.chevron}>▾</span>
                    </span>

                    {openMenu === link.label && (
                      <div
                        className={styles.megaDropdown}
                        onMouseEnter={() => handleMouseEnter(link.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {servicesMega.map((col) => (
                          <div key={col.heading} className={styles.megaCol}>
                            <a href={col.headingHref} className={styles.megaHeading}>{col.heading}</a>

                            {col.items.map((item) => (
                              <a key={item.label} href={item.href} className={styles.megaItem}>
                                <span className={styles.menuIcon}>{item.icon}</span>
                                {item.label}
                              </a>
                            ))}

                            {col.subHeading && (
                              <>
                                <a href={col.subHeadingHref} className={styles.megaHeading} style={{ marginTop: '16px' }}>
                                  {col.subHeading}
                                </a>
                                {col.subItems.map((item) => (
                                  <a key={item.label} href={item.href} className={styles.megaItem}>
                                    <span className={styles.menuIcon}>{item.icon}</span>
                                    {item.label}
                                  </a>
                                ))}
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              /* ── Regular Dropdown ── */
              if (link.dropdown) {
                return (
                  <div
                    key={link.label}
                    className={styles.navItem}
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span className={styles.navLink}>
                      {link.label} <span className={styles.chevron}>▾</span>
                    </span>

                    {openMenu === link.label && (
                      <div
                        className={styles.dropdown}
                        onMouseEnter={() => handleMouseEnter(link.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {link.dropdown.map((item) => (
                          <a key={item.label} href={item.href} className={styles.dropdownItem}>
                            <span className={styles.menuIcon}>{item.icon}</span>
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              /* ── Simple Link ── */
              return (
                <a key={link.label} href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <a href="/contact" className={styles.ctaButton}>Get Started</a>

          {/* Mobile Center CTA */}
          <a href="/contact" className={styles.mobileCta}>Get Started →</a>

          <button className={styles.hamburger} onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* ── Overlay ── */}
      <div
        className={`${styles.drawerOverlay} ${mobileOpen ? styles.drawerOverlayVisible : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── Mobile Slide Drawer ── */}
      <div className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ''}`}>

        {/* Drawer Header */}
        <div className={styles.drawerHeader}>
          <button
            className={styles.drawerLogoBtn}
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <img src="/img/priyam-consultancy-logo.png" alt="Priyam Consultancy Services" className={styles.logoImg} />
          </button>
        </div>

        {/* Drawer Nav */}
        <nav className={styles.drawerNav}>
          {navLinks.map((link) => {
            const hasChildren = link.mega || link.dropdown;
            const isExpanded  = mobileExpanded[link.label];

            /* Flatten mega + dropdown children for mobile */
            const children = link.mega
              ? servicesMega.flatMap((col) => [
                  { label: col.heading,    href: col.headingHref,    isHeading: true },
                  ...col.items,
                  ...(col.subHeading
                    ? [
                        { label: col.subHeading, href: col.subHeadingHref, isHeading: true },
                        ...col.subItems,
                      ]
                    : []),
                ])
              : link.dropdown || [];

            return (
              <div key={link.label} className={styles.drawerItem}>

                {hasChildren ? (
                  <button
                    className={styles.drawerLinkBtn}
                    onClick={() => toggleMobileItem(link.label)}
                  >
                    <span>{link.label}</span>
                    <svg
                      className={`${styles.drawerChevron} ${isExpanded ? styles.drawerChevronOpen : ''}`}
                      width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                    >
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </button>
                ) : (
                  <a href={link.href} className={styles.drawerLink} onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </a>
                )}

                {/* Sub-items (expanded) */}
                {hasChildren && isExpanded && (
                  <div className={styles.drawerSubList}>
                    {children.map((item) =>
                      item.isHeading ? (
                        <a
                          key={item.label}
                          href={item.href}
                          className={styles.drawerSubHeading}
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <a
                          key={item.label}
                          href={item.href}
                          className={styles.drawerSubItem}
                          onClick={() => setMobileOpen(false)}
                        >
                          <span className={styles.menuIcon}>{item.icon}</span>
                          {item.label}
                        </a>
                      )
                    )}
                  </div>
                )}

              </div>
            );
          })}
        </nav>

        {/* Drawer Footer CTA */}
        {/* <div className={styles.drawerFooter}>
          <a href="/contact" className={styles.drawerCta} onClick={() => setMobileOpen(false)}>
            Get Started →
          </a>
        </div> */}
      </div>

    </header>
  );
}