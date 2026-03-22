"use client";

import Link from "next/link";

export default function Banner() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Zen+Kaku+Gothic+New:wght@300;400&display=swap');

        .iy-section {
          background: #f5f0e6;
          width: 100%;
          min-height: 100svh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        /* ── IMAGE SIDE ── */
        .iy-imgside {
          width: 50%;
          height: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: clamp(2rem, 5vw, 5rem);
        }

        .iy-img-wrap {
          position: relative;
          width: clamp(280px, 38vw, 520px);
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* subtle decorative ring behind image */
        .iy-img-ring {
          position: absolute;
          inset: -16px;
          border-radius: 50%;
          border: 1px solid rgba(176, 125, 58, 0.18);
          pointer-events: none;
        }

        .iy-img-ring-outer {
          position: absolute;
          inset: -32px;
          border-radius: 50%;
          border: 1px solid rgba(176, 125, 58, 0.08);
          pointer-events: none;
        }

        .iy-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          animation: iySpin 60s linear infinite;
          filter:
            drop-shadow(0px 24px 36px rgba(80, 45, 10, 0.22))
            drop-shadow(0px 10px 18px rgba(80, 45, 10, 0.14))
            drop-shadow(0px 4px 10px rgba(80, 45, 10, 0.10));
          display: block;
        }

        @keyframes iySpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* ── TEXT SIDE ── */
        .iy-textside {
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          padding: clamp(2rem, 5vw, 5rem);
        }

        .iy-text-content {
          max-width: 480px;
          display: flex;
          flex-direction: column;
        }

        .iy-label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .iy-label-line {
          width: 32px;
          height: 1px;
          background: #b07d3a;
          flex-shrink: 0;
        }

        .iy-label-text {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.62rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #b07d3a;
        }

        .iy-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          line-height: 1.12;
          letter-spacing: 0.01em;
          color: #1a1007;
          margin: 0 0 0.5rem;
        }

        .iy-heading em {
          font-style: italic;
          color: #b07d3a;
        }

        .iy-divider {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin: 1.5rem 0 2rem;
        }

        .iy-divider-line {
          width: 40px;
          height: 1px;
          background: rgba(160, 120, 60, 0.3);
        }

        .iy-divider-dot {
          width: 4px;
          height: 4px;
          border: 1px solid rgba(160, 120, 60, 0.5);
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        .iy-body {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: clamp(0.85rem, 1.4vw, 0.95rem);
          line-height: 1.9;
          color: rgba(40, 25, 8, 0.65);
          margin: 0 0 1.25rem;
        }

        .iy-cta {
          display: inline-flex;
          align-items: center;
          gap: 0;
          margin-top: 1.25rem;
          text-decoration: none;
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 400;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #f5f0e6;
          background: #b07d3a;
          padding: 14px 32px;
          position: relative;
          overflow: hidden;
          align-self: flex-start;
          transition: color 0.35s;
        }

        .iy-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #1a1007;
          transform: translateX(-101%);
          transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 0;
        }

        .iy-cta:hover::before { transform: translateX(0); }

        .iy-cta span {
          position: relative;
          z-index: 1;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .iy-section {
            flex-direction: column;
            min-height: auto;
            padding: 5rem 0;
          }

          .iy-imgside,
          .iy-textside {
            width: 100%;
            justify-content: center;
            padding: 2rem 1.5rem;
          }

          .iy-img-wrap {
            width: clamp(220px, 60vw, 360px);
          }

          .iy-text-content {
            max-width: 100%;
          }
        }
      `}</style>

      <section className="iy-section">

        {/* ── IMAGE SIDE ── */}
        <div className="iy-imgside">
          <div className="iy-img-wrap">
            <div className="iy-img-ring-outer" />
            <div className="iy-img-ring" />
            <img
              className="iy-image"
              src="/food/food1.webp"
              alt="Sushi selection"
            />
          </div>
        </div>

        {/* ── TEXT SIDE ── */}
        <div className="iy-textside">
          <div className="iy-text-content">

            <div className="iy-label">
              <span className="iy-label-line" />
              <span className="iy-label-text">The Experience</span>
            </div>

            <h2 className="iy-heading">
              Immerse yourself in<br />
              <em>Asian</em> experience.
            </h2>

            <div className="iy-divider">
              <span className="iy-divider-line" />
              <span className="iy-divider-dot" />
              <span className="iy-divider-line" />
            </div>

            <p className="iy-body">
              Savor sushi perfection — crafted with tradition, fresh
              ingredients, and a passion for detail.
            </p>

            <p className="iy-body">
              The artistry of sushi and rolls, meticulously crafted with
              traditional Japanese recipes and an eye for detail. Savor
              the perfect harmony...
            </p>

            <Link href="/menu" className="iy-cta">
              <span>Food Menu</span>
            </Link>

          </div>
        </div>

      </section>
    </>
  );
}