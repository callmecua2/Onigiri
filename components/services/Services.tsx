"use client";

const services = [
  {
    icon: "/services/leaf.png",
    title: "Fresh Ingredients",
    desc: "We use only the freshest ingredients for all our dishes",
  },
  {
    icon: "/services/chef.png",
    title: "Expert Chefs",
    desc: "Our experienced chefs create culinary masterpieces",
  },
  {
    icon: "/services/fork.png",
    title: "Cozy Atmosphere",
    desc: "Enjoy your meal in a warm and inviting setting",
  },
  {
    icon: "/services/food.png",
    title: "Quality Services",
    desc: "We are dedicated to providing the best services",
  },
];

export default function Services() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Zen+Kaku+Gothic+New:wght@300;400&display=swap');

        .wcu-section {
          background: #f5f0e6;
          padding: 7rem clamp(1.5rem, 6vw, 5rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* ── HEADER ── */
        .wcu-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 4rem;
        }

        .wcu-label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .wcu-label-line {
          width: 32px;
          height: 1px;
          background: #b07d3a;
        }

        .wcu-label-text {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.62rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #b07d3a;
        }

        .wcu-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          line-height: 1.1;
          letter-spacing: 0.01em;
          color: #1a1007;
          margin: 0 0 1rem;
        }

        .wcu-heading em {
          font-style: italic;
          color: #b07d3a;
        }

        .wcu-divider {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .wcu-divider-line {
          width: 40px;
          height: 1px;
          background: rgba(160, 120, 60, 0.3);
        }

        .wcu-divider-dot {
          width: 4px;
          height: 4px;
          border: 1px solid rgba(160, 120, 60, 0.5);
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        /* ── CARDS GRID ── */
        .wcu-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          width: 100%;
          max-width: 1200px;
        }

        /* ── CARD ── */
        .wcu-card {
          background: #fff9f0;
          border: 1px solid rgba(176, 125, 58, 0.12);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2.75rem 1.75rem 2.5rem;
          position: relative;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      border-color 0.4s;
        }

        /* corner accent top-left */
        .wcu-card::before {
          content: '';
          position: absolute;
          top: -1px;
          left: -1px;
          width: 20px;
          height: 20px;
          border-top: 1px solid rgba(176, 125, 58, 0);
          border-left: 1px solid rgba(176, 125, 58, 0);
          transition: border-color 0.4s, width 0.4s, height 0.4s;
        }

        /* corner accent bottom-right */
        .wcu-card::after {
          content: '';
          position: absolute;
          bottom: -1px;
          right: -1px;
          width: 20px;
          height: 20px;
          border-bottom: 1px solid rgba(176, 125, 58, 0);
          border-right: 1px solid rgba(176, 125, 58, 0);
          transition: border-color 0.4s, width 0.4s, height 0.4s;
        }

        .wcu-card:hover {
          transform: translateY(-0.6rem);
          box-shadow: 0 20px 48px rgba(100, 65, 15, 0.1);
          border-color: rgba(176, 125, 58, 0.25);
        }

        .wcu-card:hover::before {
          border-color: #b07d3a;
          width: 28px;
          height: 28px;
        }

        .wcu-card:hover::after {
          border-color: #b07d3a;
          width: 28px;
          height: 28px;
        }

        /* ── ICON ── */
        .wcu-icon-wrap {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.75rem;
          position: relative;
        }

        .wcu-icon-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(176, 125, 58, 0.07);
          transition: background 0.4s;
        }

        .wcu-card:hover .wcu-icon-wrap::after {
          background: rgba(176, 125, 58, 0.13);
        }

        .wcu-icon-wrap img {
          width: 36px;
          height: 36px;
          object-fit: contain;
          position: relative;
          z-index: 1;
          filter: sepia(0.4) saturate(0.8) brightness(0.85);
          transition: filter 0.4s, transform 0.4s;
        }

        .wcu-card:hover .wcu-icon-wrap img {
          filter: sepia(0.6) saturate(1.1) brightness(0.9);
          transform: scale(1.08);
        }

        /* ── CARD TEXT ── */
        .wcu-card-number {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: italic;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          color: rgba(176, 125, 58, 0.45);
          margin-bottom: 0.6rem;
        }

        .wcu-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: 1.25rem;
          letter-spacing: 0.02em;
          color: #1a1007;
          margin: 0 0 0.85rem;
        }

        .wcu-card-divider {
          width: 24px;
          height: 1px;
          background: rgba(176, 125, 58, 0.35);
          margin: 0 auto 0.85rem;
          transition: width 0.4s;
        }

        .wcu-card:hover .wcu-card-divider {
          width: 40px;
        }

        .wcu-card-desc {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.82rem;
          line-height: 1.75;
          color: rgba(40, 25, 8, 0.55);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .wcu-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 520px) {
          .wcu-grid {
            grid-template-columns: 1fr;
          }

          .wcu-section {
            padding: 5rem 1.25rem;
          }
        }
      `}</style>

      <section className="wcu-section">

        {/* Header */}
        <div className="wcu-header">
          <div className="wcu-label">
            <span className="wcu-label-line" />
            <span className="wcu-label-text">Our Promise</span>
            <span className="wcu-label-line" />
          </div>

          <h2 className="wcu-heading">
            Why <em>Choose</em> Us
          </h2>

          <div className="wcu-divider">
            <span className="wcu-divider-line" />
            <span className="wcu-divider-dot" />
            <span className="wcu-divider-line" />
          </div>
        </div>

        {/* Cards */}
        <div className="wcu-grid">
          {services.map((svc, i) => (
            <div className="wcu-card" key={svc.title}>
              <div className="wcu-icon-wrap">
                <img src={svc.icon} alt={svc.title} />
              </div>
              <p className="wcu-card-number">0{i + 1}</p>
              <h3 className="wcu-card-title">{svc.title}</h3>
              <div className="wcu-card-divider" />
              <p className="wcu-card-desc">{svc.desc}</p>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}