"use client";

import Link from "next/link";

export default function HealthyFood() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Zen+Kaku+Gothic+New:wght@300;400&display=swap');

        .hf-section {
          background: #f5f0e6;
          padding: 7rem clamp(1.5rem, 6vw, 5rem);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        /* subtle grain */
        .hf-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.4;
          pointer-events: none;
        }

        .hf-inner {
          max-width: 1200px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(3rem, 6vw, 7rem);
          align-items: center;
          position: relative;
          z-index: 1;
        }

        /* ── LEFT: IMAGE ── */
        .hf-image-wrap {
          position: relative;
        }

        .hf-image-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
        }

        /* corner accents */
        .hf-image-frame::before,
        .hf-image-frame::after {
          content: '';
          position: absolute;
          width: 28px;
          height: 28px;
          z-index: 2;
          pointer-events: none;
        }

        .hf-image-frame::before {
          top: -1px; left: -1px;
          border-top: 1px solid rgba(176, 125, 58, 0.5);
          border-left: 1px solid rgba(176, 125, 58, 0.5);
        }

        .hf-image-frame::after {
          bottom: -1px; right: -1px;
          border-bottom: 1px solid rgba(176, 125, 58, 0.5);
          border-right: 1px solid rgba(176, 125, 58, 0.5);
        }

        .hf-image-wrap::before,
        .hf-image-wrap::after {
          content: '';
          position: absolute;
          width: 28px;
          height: 28px;
          z-index: 2;
          pointer-events: none;
        }

        .hf-image-wrap::before {
          top: -1px; right: -1px;
          border-top: 1px solid rgba(176, 125, 58, 0.5);
          border-right: 1px solid rgba(176, 125, 58, 0.5);
        }

        .hf-image-wrap::after {
          bottom: -1px; left: -1px;
          border-bottom: 1px solid rgba(176, 125, 58, 0.5);
          border-left: 1px solid rgba(176, 125, 58, 0.5);
        }

        .hf-image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.88) saturate(0.9);
        }

        .hf-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(15, 8, 0, 0.45) 0%,
            transparent 55%
          );
          z-index: 1;
        }

        /* contact badge */
        .hf-badge {
          position: absolute;
          bottom: 1.75rem;
          left: 1.5rem;
          z-index: 3;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .hf-badge-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          color: rgba(40, 25, 8, 0.55);
        }

        .hf-badge-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #b07d3a;
          flex-shrink: 0;
        }

        /* ── RIGHT: TEXT ── */
        .hf-text {
          display: flex;
          flex-direction: column;
        }

        .hf-label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
        }

        .hf-label-line {
          width: 32px;
          height: 1px;
          background: #b07d3a;
          flex-shrink: 0;
        }

        .hf-label-text {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.62rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #b07d3a;
        }

        .hf-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          line-height: 1.15;
          letter-spacing: 0.01em;
          color: #1a1007;
          margin: 0 0 2rem;
        }

        .hf-heading em {
          font-style: italic;
          color: #c9943a;
        }

        .hf-divider {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 2rem;
        }

        .hf-divider-line {
          width: 40px;
          height: 1px;
          background: rgba(176, 125, 58, 0.25);
        }

        .hf-divider-dot {
          width: 4px;
          height: 4px;
          border: 1px solid rgba(176, 125, 58, 0.45);
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        .hf-body {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: clamp(0.85rem, 1.4vw, 0.95rem);
          line-height: 1.95;
color: rgba(40, 25, 8, 0.65);
          margin: 0 0 1.5rem;
        }

        .hf-body + .hf-body {
          margin-top: -0.75rem;
        }

        .hf-cta {
          display: inline-flex;
          align-items: center;
          gap: 0;
          margin-top: 0.75rem;
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

        .hf-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #c9943a;
          transform: translateX(-101%);
          transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 0;
        }

        .hf-cta:hover::before { transform: translateX(0); }

        .hf-cta span {
          position: relative;
          z-index: 1;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .hf-inner {
            grid-template-columns: 1fr;
          }

          .hf-image-frame {
            aspect-ratio: 4 / 3;
            max-height: 400px;
          }
        }

        @media (max-width: 480px) {
          .hf-section { padding: 5rem 1.25rem; }
        }
      `}</style>

      <section className="hf-section">
        <div className="hf-inner">

          {/* ── LEFT: IMAGE ── */}
          <div className="hf-image-wrap">
            <div className="hf-image-frame">
              <img src="/food/food1.webp" alt="Healthy Japanese food" />
              <div className="hf-image-overlay" />

              {/* contact info badge */}
              <div className="hf-badge">
                <div className="hf-badge-item">
                  <span className="hf-badge-dot" />
                  <span>(414) 857 – 0107</span>
                </div>
                <div className="hf-badge-item">
                  <span className="hf-badge-dot" />
                  <span>happytummy@restaurant.com</span>
                </div>
                <div className="hf-badge-item">
                  <span className="hf-badge-dot" />
                  <span>Jln Cempaka Wangi No 22, Bandung</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: TEXT ── */}
          <div className="hf-text">
            <div className="hf-label">
              <span className="hf-label-line" />
              <span className="hf-label-text">Come and Visit Us</span>
            </div>

            <h2 className="hf-heading">
              We provide <em>healthy food</em><br />
              for your family.
            </h2>

            <div className="hf-divider">
              <span className="hf-divider-line" />
              <span className="hf-divider-dot" />
              <span className="hf-divider-line" />
            </div>

            <p className="hf-body">
              Our story began with a vision to create a unique dining experience
              that merges fine dining, exceptional service, and a vibrant
              ambiance. Rooted in the city rich culinary culture, we aim to
              honor our local roots while infusing a global palate.
            </p>

            <p className="hf-body">
              At Onigi, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable event.
            </p>

            <Link href="/reservation" className="hf-cta">
              <span>Book A Table</span>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}