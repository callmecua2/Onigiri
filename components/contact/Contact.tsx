"use client";

import { JSX } from "react";

const contactItems = [
  {
    icon: "phone",
    label: "Phone & WhatsApp",
    value: "+6221 2002 2012",
    href: "https://wa.me/622120022012",
  },
  {
    icon: "mail",
    label: "Email",
    value: "happytummy@restaurant.com",
    href: "mailto:happytummy@restaurant.com",
  },
  {
    icon: "instagram",
    label: "Instagram",
    value: "@onigi.restaurant",
    href: "https://instagram.com/onigi.restaurant",
  },
];

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.14 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const icons: Record<string, () => JSX.Element> = {
  phone: PhoneIcon,
  mail: MailIcon,
  instagram: InstagramIcon,
};

export default function Contact() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Zen+Kaku+Gothic+New:wght@300;400&display=swap');

        .ct-section {
          background: #f5f0e6;
          padding: 7rem clamp(1.5rem, 6vw, 5rem);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ct-inner {
          max-width: 1200px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(3rem, 6vw, 6rem);
          align-items: stretch;
        }

        /* ── LEFT: CONTACT INFO ── */
        .ct-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .ct-label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .ct-label-line {
          width: 32px;
          height: 1px;
          background: #b07d3a;
          flex-shrink: 0;
        }

        .ct-label-text {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.62rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #b07d3a;
        }

        .ct-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          line-height: 1.12;
          color: #1a1007;
          margin: 0 0 0.75rem;
        }

        .ct-heading em {
          font-style: italic;
          color: #b07d3a;
        }

        .ct-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: italic;
          font-size: clamp(0.95rem, 1.5vw, 1.1rem);
          line-height: 1.75;
          color: rgba(40, 25, 8, 0.55);
          margin: 0 0 2.5rem;
          max-width: 380px;
        }

        .ct-divider {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 2.5rem;
        }

        .ct-divider-line {
          width: 40px;
          height: 1px;
          background: rgba(160, 120, 60, 0.3);
        }

        .ct-divider-dot {
          width: 4px;
          height: 4px;
          border: 1px solid rgba(160, 120, 60, 0.5);
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        /* ── CONTACT ITEMS ── */
        .ct-items {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 2.5rem;
        }

        .ct-item {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          padding: 1.1rem 0;
          border-bottom: 1px solid rgba(176, 125, 58, 0.12);
          text-decoration: none;
          color: inherit;
          transition: padding-left 0.3s cubic-bezier(0.4,0,0.2,1);
        }

        .ct-item:first-child {
          border-top: 1px solid rgba(176, 125, 58, 0.12);
        }

        .ct-item:hover {
          padding-left: 0.5rem;
        }

        .ct-item-icon {
          width: 40px;
          height: 40px;
          border: 1px solid rgba(176, 125, 58, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b07d3a;
          flex-shrink: 0;
          transition: background 0.3s, border-color 0.3s, color 0.3s;
        }

        .ct-item:hover .ct-item-icon {
          background: #b07d3a;
          border-color: #b07d3a;
          color: #f5f0e6;
        }

        .ct-item-text {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .ct-item-label {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(176, 125, 58, 0.65);
        }

        .ct-item-value {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: 1rem;
          letter-spacing: 0.02em;
          color: #1a1007;
          transition: color 0.3s;
        }

        .ct-item:hover .ct-item-value {
          color: #b07d3a;
        }

        /* ── ADDRESS ── */
        .ct-address {
          display: flex;
          align-items: flex-start;
          gap: 1.1rem;
        }

        .ct-address-icon {
          width: 40px;
          height: 40px;
          border: 1px solid rgba(176, 125, 58, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b07d3a;
          flex-shrink: 0;
        }

        .ct-address-text {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          padding-top: 0.1rem;
        }

        .ct-address-label {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(176, 125, 58, 0.65);
        }

        .ct-address-value {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.6;
          color: #1a1007;
        }

        /* ── RIGHT: MAP ── */
        .ct-map-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 480px;
        }

        /* corner accents */
        .ct-map-wrap::before,
        .ct-map-wrap::after {
          content: '';
          position: absolute;
          width: 28px;
          height: 28px;
          z-index: 2;
          pointer-events: none;
        }

        .ct-map-wrap::before {
          top: -1px; left: -1px;
          border-top: 1px solid rgba(176, 125, 58, 0.5);
          border-left: 1px solid rgba(176, 125, 58, 0.5);
        }

        .ct-map-wrap::after {
          bottom: -1px; right: -1px;
          border-bottom: 1px solid rgba(176, 125, 58, 0.5);
          border-right: 1px solid rgba(176, 125, 58, 0.5);
        }

        .ct-map-corner-tr,
        .ct-map-corner-bl {
          position: absolute;
          width: 28px;
          height: 28px;
          z-index: 2;
          pointer-events: none;
        }

        .ct-map-corner-tr {
          top: -1px; right: -1px;
          border-top: 1px solid rgba(176, 125, 58, 0.5);
          border-right: 1px solid rgba(176, 125, 58, 0.5);
        }

        .ct-map-corner-bl {
          bottom: -1px; left: -1px;
          border-bottom: 1px solid rgba(176, 125, 58, 0.5);
          border-left: 1px solid rgba(176, 125, 58, 0.5);
        }

        .ct-map-frame {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
          filter: sepia(0.2) saturate(0.85) brightness(0.97);
        }

        /* map label badge */
        .ct-map-badge {
          position: absolute;
          top: 1.25rem;
          left: 1.25rem;
          z-index: 3;
          background: #f5f0e6;
          border: 1px solid rgba(176, 125, 58, 0.25);
          padding: 0.5rem 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
          pointer-events: none;
        }

        .ct-map-badge-name {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-style: italic;
          font-size: 0.95rem;
          color: #1a1007;
          line-height: 1;
        }

        .ct-map-badge-sub {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(176, 125, 58, 0.7);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .ct-inner {
            grid-template-columns: 1fr;
          }

          .ct-map-wrap {
            min-height: 360px;
          }
        }

        @media (max-width: 480px) {
          .ct-section { padding: 5rem 1.25rem; }
          .ct-map-wrap { min-height: 300px; }
        }
      `}</style>

      <section className="ct-section">
        <div className="ct-inner">

          {/* ── LEFT: INFO ── */}
          <div className="ct-info">
            <div className="ct-label">
              <span className="ct-label-line" />
              <span className="ct-label-text">Get In Touch</span>
            </div>

            <h2 className="ct-heading">
              Come &amp; <em>Visit</em><br />Us Today
            </h2>

            <p className="ct-tagline">
              Reserve your seat, send us a message, or simply drop by —
              we love to welcome you to our table.
            </p>

            <div className="ct-divider">
              <span className="ct-divider-line" />
              <span className="ct-divider-dot" />
              <span className="ct-divider-line" />
            </div>

            {/* Contact items */}
            <div className="ct-items">
              {contactItems.map((item) => {
                const Icon = icons[item.icon];
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="ct-item"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="ct-item-icon">
                      <Icon />
                    </div>
                    <div className="ct-item-text">
                      <span className="ct-item-label">{item.label}</span>
                      <span className="ct-item-value">{item.value}</span>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Address */}
            <div className="ct-address">
              <div className="ct-address-icon">
                <MapPinIcon />
              </div>
              <div className="ct-address-text">
                <span className="ct-address-label">Address</span>
                <span className="ct-address-value">
                  Jln Cempaka Wangi No 22<br />
                  Bandung, Indonesia
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: MAP ── */}
          <div className="ct-map-wrap">
            <div className="ct-map-corner-tr" />
            <div className="ct-map-corner-bl" />

            {/* location badge */}
            <div className="ct-map-badge">
              <span className="ct-map-badge-name">Onigi Restaurant</span>
              <span className="ct-map-badge-sub">Bandung, Indonesia</span>
            </div>

            <iframe
              className="ct-map-frame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9!2d107.6098!3d-6.9175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTUnMDMuMCJTIDEwN8KwMzYnMzUuMyJF!5e0!3m2!1sen!2sid!4v1"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Onigi Restaurant Location"
            />
          </div>

        </div>
      </section>
    </>
  );
}