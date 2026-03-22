"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Zen+Kaku+Gothic+New:wght@300;400&display=swap');

        .hero-section {
          position: relative;
          width: 100%;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #0f0a04;
        }

        /* ── BACKGROUND IMAGE ── */
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('/bg/bgimg.webp');
          background-size: cover;
          background-position: center;
          opacity: 0.38;
          transition: opacity 1.2s ease;
        }

        /* ── GRAIN TEXTURE OVERLAY ── */
        .hero-grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.55;
          pointer-events: none;
        }

        /* ── VIGNETTE ── */
        .hero-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 40%, rgba(8, 4, 0, 0.72) 100%);
          pointer-events: none;
        }

        /* ── BOTTOM FADE ── */
        .hero-fade-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 220px;
          background: linear-gradient(to bottom, transparent, #0f0a04);
          pointer-events: none;
        }

        /* ── DECORATIVE VERTICAL LINES ── */
        .hero-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(176, 125, 58, 0.18) 30%, rgba(176, 125, 58, 0.18) 70%, transparent);
          pointer-events: none;
        }
        .hero-line-left  { left: clamp(1.5rem, 5vw, 4rem); }
        .hero-line-right { right: clamp(1.5rem, 5vw, 4rem); }

        /* ── CONTENT ── */
        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 1.5rem;
          max-width: 860px;
          animation: heroFadeUp 1.1s cubic-bezier(0.4, 0, 0.2, 1) both;
        }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── EYEBROW ── */
        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          animation: heroFadeUp 1.1s 0.1s cubic-bezier(0.4, 0, 0.2, 1) both;
        }

        .hero-eyebrow-line {
          width: 36px;
          height: 1px;
          background: rgba(176, 125, 58, 0.6);
        }

        .hero-eyebrow-text {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(210, 175, 110, 0.8);
        }

        /* ── HEADLINE ── */
        .hero-headline {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: italic;
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          line-height: 1.12;
          letter-spacing: 0.01em;
          color: #f5f0e6;
          margin: 0 0 1.25rem;
          animation: heroFadeUp 1.1s 0.18s cubic-bezier(0.4, 0, 0.2, 1) both;
        }

        .hero-headline em {
          color: #c9943a;
          font-style: italic;
        }

        /* ── DIVIDER ── */
        .hero-divider {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin: 0.5rem 0 1.5rem;
          animation: heroFadeUp 1.1s 0.26s cubic-bezier(0.4, 0, 0.2, 1) both;
        }

        .hero-divider-line {
          width: 48px;
          height: 1px;
          background: rgba(176, 125, 58, 0.45);
        }

        .hero-divider-diamond {
          width: 5px;
          height: 5px;
          border: 1px solid rgba(176, 125, 58, 0.6);
          transform: rotate(45deg);
        }

        /* ── SUBTEXT ── */
        .hero-sub {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: clamp(0.75rem, 1.8vw, 0.9rem);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(210, 190, 150, 0.65);
          margin: 0 0 3rem;
          animation: heroFadeUp 1.1s 0.32s cubic-bezier(0.4, 0, 0.2, 1) both;
        }

        /* ── BUTTONS ── */
        .hero-buttons {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          justify-content: center;
          animation: heroFadeUp 1.1s 0.42s cubic-bezier(0.4, 0, 0.2, 1) both;
        }

        .btn-primary {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 400;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 15px 36px;
          background: #b07d3a;
          color: #f5f0e6;
          position: relative;
          overflow: hidden;
          display: inline-block;
          transition: color 0.35s;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #c9943a;
          transform: translateX(-101%);
          transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 0;
        }

        .btn-primary:hover::before {
          transform: translateX(0);
        }

        .btn-primary span {
          position: relative;
          z-index: 1;
        }

        .btn-secondary {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 14px 36px;
          border: 1px solid rgba(210, 190, 150, 0.35);
          color: rgba(210, 190, 150, 0.75);
          display: inline-block;
          position: relative;
          overflow: hidden;
          transition: color 0.35s, border-color 0.35s;
        }

        .btn-secondary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(176, 125, 58, 0.12);
          transform: translateX(-101%);
          transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 0;
        }

        .btn-secondary:hover::before {
          transform: translateX(0);
        }

        .btn-secondary:hover {
          border-color: rgba(210, 190, 150, 0.6);
          color: rgba(235, 215, 175, 0.95);
        }

        .btn-secondary span {
          position: relative;
          z-index: 1;
        }

        /* ── SCROLL INDICATOR ── */
        .hero-scroll {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          animation: heroFadeUp 1.2s 0.7s cubic-bezier(0.4, 0, 0.2, 1) both;
        }

        .hero-scroll-label {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.55rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(176, 140, 80, 0.45);
        }

        .hero-scroll-track {
          width: 1px;
          height: 48px;
          background: rgba(176, 125, 58, 0.2);
          position: relative;
          overflow: hidden;
        }

        .hero-scroll-thumb {
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(176, 125, 58, 0.7));
          animation: scrollThumb 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes scrollThumb {
          0%   { top: -100%; }
          60%  { top: 100%; }
          100% { top: 100%; }
        }

        /* ── KANJI DECO ── */
        .hero-kanji {
          position: absolute;
          right: clamp(2rem, 6vw, 5rem);
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: clamp(4rem, 8vw, 7rem);
          writing-mode: vertical-rl;
          letter-spacing: 0.15em;
          color: rgba(176, 125, 58, 0.06);
          pointer-events: none;
          user-select: none;
          z-index: 1;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 640px) {
          .hero-kanji { display: none; }
          .hero-line  { display: none; }
          .btn-primary,
          .btn-secondary {
            padding: 13px 28px;
            font-size: 0.7rem;
          }
        }
      `}</style>

      <section className="hero-section">
        {/* Background layers */}
        <div className="hero-bg" />
        <div className="hero-grain" />
        <div className="hero-vignette" />
        <div className="hero-fade-bottom" />

        {/* Vertical decorative lines */}
        <div className="hero-line hero-line-left" />
        <div className="hero-line hero-line-right" />

        {/* Decorative kanji */}
        <span className="hero-kanji" aria-hidden="true">日本料理</span>

        {/* Main content */}
        <div className="hero-content">
          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">Est. 2024 · Bandung, Indonesia</span>
            <span className="hero-eyebrow-line" />
          </div>

          {/* Headline */}
          <h1 className="hero-headline">
            Authentic Tastes.<br />
            <em>Authentic</em> Atmosphere.
          </h1>

          {/* Divider */}
          <div className="hero-divider">
            <span className="hero-divider-line" />
            <span className="hero-divider-diamond" />
            <span className="hero-divider-line" />
          </div>

          {/* Subtext */}
          <p className="hero-sub">Japanese Cuisines &amp; Sushi Bar</p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <Link href="/reservation" className="btn-primary">
              <span>Reservation</span>
            </Link>
            <Link href="/menu" className="btn-secondary">
              <span>View Menu</span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll" aria-hidden="true">
          <span className="hero-scroll-label">Scroll</span>
          <div className="hero-scroll-track">
            <div className="hero-scroll-thumb" />
          </div>
        </div>
      </section>
    </>
  );
}