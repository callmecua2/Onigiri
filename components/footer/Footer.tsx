"use client";

import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/onigi.restaurant",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/622120022012",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Zen+Kaku+Gothic+New:wght@300;400&display=swap');

        .ft-footer {
          background: #0f0a04;
          position: relative;
          overflow: hidden;
        }

        /* grain */
        .ft-footer::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.45;
          pointer-events: none;
        }

        /* top border */
        .ft-footer::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(176, 125, 58, 0.4) 30%, rgba(176, 125, 58, 0.4) 70%, transparent);
        }

        /* ── MAIN ── */
        .ft-main {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem clamp(1.5rem, 6vw, 5rem) 3.5rem;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr;
          gap: clamp(2.5rem, 5vw, 5rem);
        }

        /* ── BRAND COLUMN ── */
        .ft-brand {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .ft-logo {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1;
          gap: 2px;
          margin-bottom: 1.5rem;
        }

        .ft-logo-kanji {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          color: rgba(176, 125, 58, 0.6);
          text-transform: uppercase;
        }

        .ft-logo-main {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: italic;
          font-size: 2.2rem;
          letter-spacing: 0.06em;
          color: #f5f0e6;
        }

        .ft-logo-dot {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #b07d3a;
          margin-left: 2px;
          vertical-align: super;
        }

        .ft-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: italic;
          font-size: 0.95rem;
          line-height: 1.75;
          color: rgba(210, 190, 155, 0.5);
          margin: 0 0 2rem;
          max-width: 280px;
        }

        /* socials */
        .ft-socials {
          display: flex;
          gap: 0.75rem;
        }

        .ft-social-btn {
          width: 38px;
          height: 38px;
          border: 1px solid rgba(176, 125, 58, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(210, 190, 155, 0.55);
          text-decoration: none;
          transition: background 0.3s, border-color 0.3s, color 0.3s;
        }

        .ft-social-btn:hover {
          background: #b07d3a;
          border-color: #b07d3a;
          color: #f5f0e6;
        }

        /* ── COLUMNS ── */
        .ft-col {
          display: flex;
          flex-direction: column;
        }

        .ft-col-heading {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.6rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #b07d3a;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .ft-col-heading::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(176, 125, 58, 0.2);
        }

        .ft-nav-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .ft-nav-links li {
          border-bottom: 1px solid rgba(176, 125, 58, 0.08);
        }

        .ft-nav-links li:first-child {
          border-top: 1px solid rgba(176, 125, 58, 0.08);
        }

        .ft-nav-links a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          color: rgba(210, 190, 155, 0.55);
          text-decoration: none;
          padding: 0.75rem 0;
          transition: color 0.3s, padding-left 0.3s;
        }

        .ft-nav-links a:hover {
          color: #f5f0e6;
          padding-left: 0.4rem;
        }

        .ft-nav-arrow {
          font-size: 0.7rem;
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.3s, transform 0.3s;
        }

        .ft-nav-links a:hover .ft-nav-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* contact info list */
        .ft-contact-list {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .ft-contact-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .ft-contact-label {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.55rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(176, 125, 58, 0.5);
        }

        .ft-contact-value {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: 0.95rem;
          letter-spacing: 0.03em;
          color: rgba(210, 190, 155, 0.65);
          text-decoration: none;
          transition: color 0.3s;
        }

        a.ft-contact-value:hover {
          color: #f5f0e6;
        }

        /* ── BOTTOM BAR ── */
        .ft-bottom {
          position: relative;
          z-index: 1;
          border-top: 1px solid rgba(176, 125, 58, 0.1);
          padding: 1.5rem clamp(1.5rem, 6vw, 5rem);
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .ft-copy {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.6rem;
          letter-spacing: 0.18em;
          color: rgba(176, 125, 58, 0.35);
          text-transform: uppercase;
        }

        .ft-kanji-deco {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          color: rgba(176, 125, 58, 0.2);
          user-select: none;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .ft-main {
            grid-template-columns: 1fr 1fr;
          }

          .ft-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 520px) {
          .ft-main {
            grid-template-columns: 1fr;
            padding: 4rem 1.25rem 2.5rem;
          }

          .ft-brand {
            grid-column: auto;
          }

          .ft-bottom {
            padding: 1.25rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>

      <footer className="ft-footer">

        {/* ── MAIN GRID ── */}
        <div className="ft-main">

          {/* Brand */}
          <div className="ft-brand">
            <Link href="/" className="ft-logo">
              <span className="ft-logo-kanji">おにぎり</span>
              <span className="ft-logo-main">
                Onigi<span className="ft-logo-dot" />
              </span>
            </Link>

            <p className="ft-tagline">
              Everything we serve is made in house from the best ingredients —
              where every dish is a devotion to Japanese craft.
            </p>

            <div className="ft-socials">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="ft-social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="ft-col">
            <span className="ft-col-heading">Navigation</span>
            <ul className="ft-nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    {link.label}
                    <span className="ft-nav-arrow">→</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/reservation">
                  Reservation
                  <span className="ft-nav-arrow">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="ft-col">
            <span className="ft-col-heading">Contact</span>
            <div className="ft-contact-list">
              <div className="ft-contact-item">
                <span className="ft-contact-label">Phone & WhatsApp</span>
                <a href="https://wa.me/622120022012" className="ft-contact-value">
                  +6221 2002 2012
                </a>
              </div>
              <div className="ft-contact-item">
                <span className="ft-contact-label">Email</span>
                <a href="mailto:happytummy@restaurant.com" className="ft-contact-value">
                  happytummy@restaurant.com
                </a>
              </div>
              <div className="ft-contact-item">
                <span className="ft-contact-label">Instagram</span>
                <a href="https://instagram.com/onigi.restaurant" className="ft-contact-value" target="_blank" rel="noopener noreferrer">
                  @onigi.restaurant
                </a>
              </div>
              <div className="ft-contact-item">
                <span className="ft-contact-label">Address</span>
                <span className="ft-contact-value">
                  Jln Cempaka Wangi No 22,<br />Bandung, Indonesia
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="ft-bottom">
          <span className="ft-copy">
            © {year} Onigi Restaurant. All rights reserved.
          </span>
          <span className="ft-kanji-deco">日本料理 · 寿司バー</span>
        </div>

      </footer>
    </>
  );
}