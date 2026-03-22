"use client";

const chefs = [
  {
    image: "/chefs/hiroshi.jpg",
    name: "Hiroshi Tanaka",
    role: "Head Sushi Chef",
    kanji: "田中",
  },
  {
    image: "/chefs/aiko.jpg",
    name: "Aiko Yamamoto",
    role: "Sashimi Specialist",
    kanji: "山本",
  },
  {
    image: "/chefs/kenji.jpg",
    name: "Kenji Nakamura",
    role: "Restaurant Manager",
    kanji: "中村",
  },
  {
    image: "/chefs/sakura.jpg",
    name: "Sakura Fujimoto",
    role: "Guest Experience Coordinator",
    kanji: "藤本",
  },
];

export default function OurChefs() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Zen+Kaku+Gothic+New:wght@300;400&display=swap');

        .oc-section {
          background: #f5f0e6;
          padding: 7rem clamp(1.5rem, 6vw, 5rem);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ── HEADER ── */
        .oc-header {
          text-align: center;
          margin-bottom: 4rem;
          max-width: 640px;
        }

        .oc-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .oc-label-line {
          width: 32px;
          height: 1px;
          background: #b07d3a;
        }

        .oc-label-text {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.62rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #b07d3a;
        }

        .oc-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          line-height: 1.12;
          letter-spacing: 0.01em;
          color: #1a1007;
          margin: 0 0 1.25rem;
        }

        .oc-heading em {
          font-style: italic;
          color: #b07d3a;
        }

        .oc-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
        }

        .oc-divider-line {
          width: 40px;
          height: 1px;
          background: rgba(160, 120, 60, 0.3);
        }

        .oc-divider-dot {
          width: 4px;
          height: 4px;
          border: 1px solid rgba(160, 120, 60, 0.5);
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        .oc-subtext {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: clamp(0.82rem, 1.3vw, 0.9rem);
          line-height: 1.85;
          color: rgba(40, 25, 8, 0.55);
          margin: 0;
        }

        /* ── GRID ── */
        .oc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          width: 100%;
          max-width: 1200px;
        }

        /* ── CARD ── */
        .oc-card {
          display: flex;
          flex-direction: column;
          position: relative;
          cursor: default;
        }

        /* ── IMAGE FRAME ── */
        .oc-img-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          background: #e8dfd0;
        }

        /* corner accents */
        .oc-img-frame::before,
        .oc-img-frame::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          z-index: 3;
          pointer-events: none;
          transition: width 0.4s, height 0.4s, border-color 0.4s;
        }

        .oc-img-frame::before {
          top: -1px; left: -1px;
          border-top: 1px solid rgba(176, 125, 58, 0);
          border-left: 1px solid rgba(176, 125, 58, 0);
        }

        .oc-img-frame::after {
          bottom: -1px; right: -1px;
          border-bottom: 1px solid rgba(176, 125, 58, 0);
          border-right: 1px solid rgba(176, 125, 58, 0);
        }

        .oc-card:hover .oc-img-frame::before,
        .oc-card:hover .oc-img-frame::after {
          width: 28px;
          height: 28px;
          border-color: rgba(176, 125, 58, 0.65);
        }

        .oc-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
          transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1),
                      filter 0.55s ease;
          filter: saturate(0.9) brightness(0.95);
        }

        .oc-card:hover .oc-card-img {
          transform: scale(1.05);
          filter: saturate(1) brightness(1);
        }

        /* kanji overlay */
        .oc-kanji {
          position: absolute;
          top: 1rem;
          right: 1rem;
          z-index: 2;
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 1.5rem;
          letter-spacing: 0.05em;
          writing-mode: vertical-rl;
          color: rgba(245, 240, 230, 0.55);
          pointer-events: none;
          user-select: none;
          transition: color 0.4s;
        }

        .oc-card:hover .oc-kanji {
          color: rgba(245, 240, 230, 0.8);
        }

        /* bottom gradient in image */
        .oc-img-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(to top, rgba(15, 8, 0, 0.35), transparent);
          z-index: 1;
          pointer-events: none;
        }

        /* ── INFO ── */
        .oc-info {
          padding: 1.25rem 0.25rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .oc-info-rule {
          width: 24px;
          height: 1px;
          background: rgba(176, 125, 58, 0.4);
          margin-bottom: 0.5rem;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .oc-card:hover .oc-info-rule {
          width: 40px;
        }

        .oc-name {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: 1.15rem;
          letter-spacing: 0.02em;
          color: #1a1007;
          margin: 0;
        }

        .oc-role {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(176, 125, 58, 0.7);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .oc-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 520px) {
          .oc-section { padding: 5rem 1.25rem; }
          .oc-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
        }
      `}</style>

      <section className="oc-section">

        {/* Header */}
        <div className="oc-header">
          <div className="oc-label">
            <span className="oc-label-line" />
            <span className="oc-label-text">私たちの寿司職人</span>
            <span className="oc-label-line" />
          </div>

          <h2 className="oc-heading">
            The <em>Masters</em> Behind<br />Every Roll &amp; Flavor
          </h2>

          <div className="oc-divider">
            <span className="oc-divider-line" />
            <span className="oc-divider-dot" />
            <span className="oc-divider-line" />
          </div>

          <p className="oc-subtext">
            Our skilled chefs blend tradition, passion, and creativity,
            carefully crafting sushi that delights every taste and
            beautifully captures the essence of Japanese dining.
          </p>
        </div>

        {/* Cards */}
        <div className="oc-grid">
          {chefs.map((chef) => (
            <div className="oc-card" key={chef.name}>
              <div className="oc-img-frame">
                <img
                  className="oc-card-img"
                  src={chef.image}
                  alt={chef.name}
                />
                <span className="oc-kanji" aria-hidden="true">
                  {chef.kanji}
                </span>
                <div className="oc-img-overlay" />
              </div>

              <div className="oc-info">
                <div className="oc-info-rule" />
                <h3 className="oc-name">{chef.name}</h3>
                <span className="oc-role">{chef.role}</span>
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}