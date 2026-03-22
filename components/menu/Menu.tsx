"use client";

const menuHighlights = [
  {
    image: "/company/interior1.png",
    title: "Omakase - Chef's Choice",
    desc: "Leave it to the chef — a curated journey of seasonal flavors, prepared with mastery and heart.",
  },
  {
    image: "/company/interior1.png",
    title: "Sushi & Sashimi",
    desc: "An artful harmony of rice and ocean's finest, sliced with precision and served with elegance.",
  },
  {
    image: "/company/interior1.png",
    title: "Grilled & Hot Plates",
    desc: "From the searing flame to the simmering broth — warmth crafted to comfort and delight.",
  },
  {
    image: "/company/interior1.png",
    title: "Sweet Finale & Pairings",
    desc: "A graceful ending — delicate desserts and curated drinks to complete your dining journey.",
  },
];

export default function Menu() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Zen+Kaku+Gothic+New:wght@300;400&display=swap');

        .aj-section {
          background: #f5f0e6;
          padding: 7rem clamp(1.5rem, 6vw, 5rem);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ── HEADER ── */
        .aj-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .aj-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .aj-label-line {
          width: 32px;
          height: 1px;
          background: #b07d3a;
        }

        .aj-label-text {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.62rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #b07d3a;
        }

        .aj-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          line-height: 1.15;
          letter-spacing: 0.01em;
          color: #1a1007;
          margin: 0 0 1.25rem;
        }

        .aj-heading em {
          font-style: italic;
          color: #b07d3a;
        }

        .aj-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
        }

        .aj-divider-line {
          width: 40px;
          height: 1px;
          background: rgba(160, 120, 60, 0.3);
        }

        .aj-divider-dot {
          width: 4px;
          height: 4px;
          border: 1px solid rgba(160, 120, 60, 0.5);
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        /* ── GRID ── */
        .aj-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          width: 100%;
          max-width: 1200px;
        }

        /* ── CARD ── */
        .aj-card {
          position: relative;
          overflow: hidden;
          aspect-ratio: 3 / 4;
          cursor: pointer;
          background: #1a1007;
        }

        /* corner accents */
        .aj-card::before,
        .aj-card::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          z-index: 4;
          pointer-events: none;
          transition: width 0.4s, height 0.4s, border-color 0.4s;
        }

        .aj-card::before {
          top: -1px; left: -1px;
          border-top: 1px solid rgba(176, 125, 58, 0);
          border-left: 1px solid rgba(176, 125, 58, 0);
        }

        .aj-card::after {
          bottom: -1px; right: -1px;
          border-bottom: 1px solid rgba(176, 125, 58, 0);
          border-right: 1px solid rgba(176, 125, 58, 0);
        }

        .aj-card:hover::before,
        .aj-card:hover::after {
          width: 28px;
          height: 28px;
          border-color: rgba(176, 125, 58, 0.7);
        }

        /* ── IMAGE ── */
        .aj-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1),
                      filter 0.65s ease;
          filter: brightness(0.75) saturate(0.85);
        }

        .aj-card:hover .aj-card-img {
          transform: scale(1.06);
          filter: brightness(0.55) saturate(0.75);
        }

        /* ── TEXTBOX ── */
        .aj-textbox {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 3;
          padding: 1.5rem 1.25rem 1.25rem;
          background: linear-gradient(
            to top,
            rgba(10, 5, 0, 0.88) 0%,
            rgba(10, 5, 0, 0.55) 60%,
            transparent 100%
          );
          transform: translateY(0);
          transition: padding 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .aj-card-number {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: italic;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: rgba(176, 125, 58, 0.65);
          margin-bottom: 0.4rem;
          display: block;
        }

        .aj-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: 1.15rem;
          line-height: 1.25;
          letter-spacing: 0.02em;
          color: #f5f0e6;
          margin: 0 0 0.5rem;
        }

        .aj-card-rule {
          width: 24px;
          height: 1px;
          background: rgba(176, 125, 58, 0.55);
          margin-bottom: 0.65rem;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .aj-card:hover .aj-card-rule {
          width: 40px;
        }

        .aj-card-desc {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.75rem;
          line-height: 1.75;
          color: rgba(210, 190, 155, 0.75);
          margin: 0;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.4s ease;
        }

        .aj-card:hover .aj-card-desc {
          max-height: 120px;
          opacity: 1;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .aj-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .aj-card {
            aspect-ratio: 4 / 3;
          }

          /* always show desc on touch */
          .aj-card-desc {
            max-height: 120px;
            opacity: 1;
          }
        }

        @media (max-width: 520px) {
          .aj-section {
            padding: 5rem 1.25rem;
          }

          .aj-grid {
            grid-template-columns: 1fr;
          }

          .aj-card {
            aspect-ratio: 3 / 2;
          }

          .aj-card-desc {
            max-height: 120px;
            opacity: 1;
          }
        }
      `}</style>

      <section className="aj-section">

        {/* Header */}
        <div className="aj-header">
          <div className="aj-label">
            <span className="aj-label-line" />
            <span className="aj-label-text">Our Specialties</span>
            <span className="aj-label-line" />
          </div>

          <h2 className="aj-heading">
            An <em>Artful</em> Journey Through<br />Japanese Flavors
          </h2>

          <div className="aj-divider">
            <span className="aj-divider-line" />
            <span className="aj-divider-dot" />
            <span className="aj-divider-line" />
          </div>
        </div>

        {/* Cards */}
        <div className="aj-grid">
          {menuHighlights.map((item, i) => (
            <div className="aj-card" key={item.title}>
              <img
                className="aj-card-img"
                src={item.image}
                alt={item.title}
              />
              <div className="aj-textbox">
                <span className="aj-card-number">0{i + 1}</span>
                <h3 className="aj-card-title">{item.title}</h3>
                <div className="aj-card-rule" />
                <p className="aj-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}