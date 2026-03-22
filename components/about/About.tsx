"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  { src: "/company/outside.png",  alt: "Restaurant exterior" },
  { src: "/company/interior1.png", alt: "Interior dining area" },
  { src: "/company/interior2.png", alt: "Interior ambiance" },
  { src: "/company/private.png",  alt: "Private dining room" },
  { src: "/company/kitchen.png",  alt: "Open kitchen" },
];

export default function WhoWeAre() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === current) return;
      setPrev(current);
      setCurrent(index);
      setAnimating(true);
    },
    [animating, current]
  );

  const goNext = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(goNext, 4800);
    return () => clearInterval(timer);
  }, [goNext]);

  const handleAnimationEnd = () => {
    setPrev(null);
    setAnimating(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Zen+Kaku+Gothic+New:wght@300;400&display=swap');

        /* ── SECTION ── */
        .wwa-section {
          background: #f5f0e6;
          padding: 7rem clamp(1.5rem, 6vw, 5rem);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .wwa-inner {
          max-width: 1200px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(3rem, 6vw, 7rem);
          align-items: center;
        }

        /* ── LEFT: TEXT ── */
        .wwa-text {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .wwa-label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .wwa-label-line {
          width: 32px;
          height: 1px;
          background: #b07d3a;
          flex-shrink: 0;
        }

        .wwa-label-text {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.62rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #b07d3a;
        }

        .wwa-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          line-height: 1.15;
          letter-spacing: 0.01em;
          color: #1a1007;
          margin: 0 0 0.4rem;
        }

        .wwa-heading em {
          font-style: italic;
          color: #b07d3a;
        }

        .wwa-heading-sub {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: italic;
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: rgba(100, 70, 30, 0.55);
          margin: 0 0 2.25rem;
          letter-spacing: 0.04em;
        }

        .wwa-divider {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 2rem;
        }

        .wwa-divider-line {
          width: 40px;
          height: 1px;
          background: rgba(160, 120, 60, 0.3);
        }

        .wwa-divider-dot {
          width: 4px;
          height: 4px;
          border: 1px solid rgba(160, 120, 60, 0.5);
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        .wwa-body {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: clamp(0.85rem, 1.4vw, 0.95rem);
          line-height: 1.9;
          color: rgba(40, 25, 8, 0.65);
          margin: 0 0 1.5rem;
        }

        .wwa-body + .wwa-body {
          margin-top: -0.75rem;
        }

        .wwa-link {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          margin-top: 0.75rem;
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 400;
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #b07d3a;
          text-decoration: none;
          position: relative;
          padding-bottom: 3px;
        }

        .wwa-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: #b07d3a;
          transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .wwa-link:hover::after { width: 100%; }

        .wwa-link-arrow {
          display: inline-block;
          transition: transform 0.3s;
        }

        .wwa-link:hover .wwa-link-arrow { transform: translateX(4px); }

        /* ── RIGHT: CAROUSEL ── */
        .wwa-carousel {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          background: #1a1007;
        }

        /* Corner accents */
        .wwa-carousel::before,
        .wwa-carousel::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 24px;
          z-index: 4;
          pointer-events: none;
        }

        .wwa-carousel::before {
          top: -1px;
          left: -1px;
          border-top: 1px solid rgba(176, 125, 58, 0.55);
          border-left: 1px solid rgba(176, 125, 58, 0.55);
        }

        .wwa-carousel::after {
          bottom: -1px;
          right: -1px;
          border-bottom: 1px solid rgba(176, 125, 58, 0.55);
          border-right: 1px solid rgba(176, 125, 58, 0.55);
        }

        /* additional corners via wrapper */
        .wwa-carousel-wrap {
          position: relative;
        }

        .wwa-carousel-wrap::before,
        .wwa-carousel-wrap::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 24px;
          z-index: 5;
          pointer-events: none;
        }

        .wwa-carousel-wrap::before {
          top: -1px;
          right: -1px;
          border-top: 1px solid rgba(176, 125, 58, 0.55);
          border-right: 1px solid rgba(176, 125, 58, 0.55);
        }

        .wwa-carousel-wrap::after {
          bottom: -1px;
          left: -1px;
          border-bottom: 1px solid rgba(176, 125, 58, 0.55);
          border-left: 1px solid rgba(176, 125, 58, 0.55);
        }

        /* Slides */
        .wwa-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
        }

        .wwa-slide.active {
          animation: slideIn 0.85s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .wwa-slide.leaving {
          animation: slideOut 0.85s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: scale(1.04); }
          to   { opacity: 1; transform: scale(1); }
        }

        @keyframes slideOut {
          from { opacity: 1; transform: scale(1); }
          to   { opacity: 0; transform: scale(0.97); }
        }

        .wwa-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Overlay gradient on image */
        .wwa-slide-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(15, 8, 0, 0.55) 0%,
            transparent 50%
          );
          z-index: 1;
        }

        /* Slide counter */
        .wwa-counter {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
          z-index: 3;
          display: flex;
          align-items: baseline;
          gap: 0.3rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          color: rgba(245, 240, 230, 0.6);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
        }

        .wwa-counter-current {
          font-size: 1.1rem;
          color: rgba(245, 240, 230, 0.9);
        }

        /* Dots */
        .wwa-dots {
          position: absolute;
          bottom: 1.35rem;
          right: 1.25rem;
          z-index: 3;
          display: flex;
          gap: 0.45rem;
          align-items: center;
        }

        .wwa-dot {
          width: 18px;
          height: 1px;
          background: rgba(245, 240, 230, 0.3);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: background 0.3s, width 0.3s;
          flex-shrink: 0;
        }

        .wwa-dot.active {
          width: 32px;
          background: rgba(245, 240, 230, 0.85);
        }

        /* Progress bar */
        .wwa-progress {
          position: absolute;
          top: 0;
          left: 0;
          height: 2px;
          background: rgba(176, 125, 58, 0.7);
          z-index: 3;
          animation: progressBar 4.8s linear infinite;
          transform-origin: left;
        }

        @keyframes progressBar {
          from { width: 0%; }
          to   { width: 100%; }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .wwa-inner {
            grid-template-columns: 1fr;
          }

          .wwa-carousel {
            aspect-ratio: 4 / 3;
            max-height: 420px;
          }

          /* show image first on mobile */
          .wwa-carousel-wrap {
            order: -1;
          }
        }

        @media (max-width: 480px) {
          .wwa-section {
            padding: 5rem 1.25rem;
          }

          .wwa-carousel {
            aspect-ratio: 3 / 2;
          }
        }
      `}</style>

      <section className="wwa-section">
        <div className="wwa-inner">

          {/* ── LEFT: TEXT ── */}
          <div className="wwa-text">
            <div className="wwa-label">
              <span className="wwa-label-line" />
              <span className="wwa-label-text">Who We Are</span>
            </div>

            <h2 className="wwa-heading">
              Japanese Cuisines<br />
              &amp; <em>Sushi Bar.</em>
            </h2>
            <p className="wwa-heading-sub">Crafted with tradition. Served with heart.</p>

            <div className="wwa-divider">
              <span className="wwa-divider-line" />
              <span className="wwa-divider-dot" />
              <span className="wwa-divider-line" />
            </div>

            <p className="wwa-body">
              We bring authentic Japanese flavors crafted from the freshest
              ingredients by our experienced chefs. Every sushi, ramen, and
              signature dish is made with dedication to deliver an unforgettable
              harmony of taste.
            </p>

            <p className="wwa-body">
              More than just a restaurant, we are a place where the art of
              Japanese cuisine meets warm ambiance and exceptional service —
              creating a truly remarkable dining experience for every visit.
            </p>

            <Link href="/about" className="wwa-link">
              Learn More
              <span className="wwa-link-arrow">→</span>
            </Link>
          </div>

          {/* ── RIGHT: CAROUSEL ── */}
          <div className="wwa-carousel-wrap">
            <div className="wwa-carousel">
              {/* Progress bar */}
              <div className="wwa-progress" key={current} />

              {/* Slides */}
              {slides.map((slide, i) => (
                <div
                  key={slide.src}
                  className={`wwa-slide ${
                    i === current
                      ? "active"
                      : i === prev
                      ? "leaving"
                      : ""
                  }`}
                  onAnimationEnd={i === current ? handleAnimationEnd : undefined}
                >
                  <img src={slide.src} alt={slide.alt} />
                  <div className="wwa-slide-overlay" />
                </div>
              ))}

              {/* Counter */}
              <div className="wwa-counter">
                <span className="wwa-counter-current">
                  {String(current + 1).padStart(2, "0")}
                </span>
                <span>/</span>
                <span>{String(slides.length).padStart(2, "0")}</span>
              </div>

              {/* Dots */}
              <div className="wwa-dots">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    className={`wwa-dot ${i === current ? "active" : ""}`}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}