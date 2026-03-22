"use client";

const testimonials = [
  {
    name: "Donald Jackman",
    role: "Content Creator",
    review:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    stars: 5,
  },
  {
    name: "Richard Nelson",
    role: "Instagram Influencer",
    review:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    stars: 5,
  },
  {
    name: "James Washington",
    role: "Marketing Manager",
    review:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    stars: 5,
  },
];

export default function Review() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Zen+Kaku+Gothic+New:wght@300;400&display=swap');

        .tm-section {
          background: #f5f0e6;
          padding: 7rem clamp(1.5rem, 6vw, 5rem);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ── HEADER ── */
        .tm-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .tm-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .tm-label-line {
          width: 32px;
          height: 1px;
          background: #b07d3a;
        }

        .tm-label-text {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.62rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #b07d3a;
        }

        .tm-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          line-height: 1.15;
          color: #1a1007;
          margin: 0 0 1.25rem;
        }

        .tm-heading em {
          font-style: italic;
          color: #b07d3a;
        }

        .tm-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
        }

        .tm-divider-line {
          width: 40px;
          height: 1px;
          background: rgba(160, 120, 60, 0.3);
        }

        .tm-divider-dot {
          width: 4px;
          height: 4px;
          border: 1px solid rgba(160, 120, 60, 0.5);
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        /* ── GRID ── */
        .tm-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          width: 100%;
          max-width: 1200px;
        }

        /* ── CARD ── */
        .tm-card {
          background: #fff9f0;
          border: 1px solid rgba(176, 125, 58, 0.12);
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: border-color 0.4s, box-shadow 0.4s, transform 0.4s cubic-bezier(0.4,0,0.2,1);
        }

        /* corner accents */
        .tm-card::before,
        .tm-card::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          pointer-events: none;
          transition: width 0.4s, height 0.4s, border-color 0.4s;
        }

        .tm-card::before {
          top: -1px; left: -1px;
          border-top: 1px solid rgba(176, 125, 58, 0);
          border-left: 1px solid rgba(176, 125, 58, 0);
        }

        .tm-card::after {
          bottom: -1px; right: -1px;
          border-bottom: 1px solid rgba(176, 125, 58, 0);
          border-right: 1px solid rgba(176, 125, 58, 0);
        }

        .tm-card:hover {
          border-color: rgba(176, 125, 58, 0.25);
          box-shadow: 0 16px 40px rgba(100, 65, 15, 0.09);
          transform: translateY(-4px);
        }

        .tm-card:hover::before,
        .tm-card:hover::after {
          width: 28px;
          height: 28px;
          border-color: rgba(176, 125, 58, 0.6);
        }

        /* ── QUOTE MARK ── */
        .tm-quote-mark {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: italic;
          font-size: 4rem;
          line-height: 1;
          color: rgba(176, 125, 58, 0.2);
          margin-bottom: 0.5rem;
          display: block;
          user-select: none;
        }

        /* ── REVIEW TEXT ── */
        .tm-review {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: italic;
          font-size: clamp(1rem, 1.6vw, 1.15rem);
          line-height: 1.75;
          color: rgba(40, 25, 8, 0.7);
          margin: 0 0 2rem;
          flex: 1;
        }

        /* ── DIVIDER ── */
        .tm-card-rule {
          width: 100%;
          height: 1px;
          background: rgba(176, 125, 58, 0.15);
          margin-bottom: 1.5rem;
        }

        /* ── STARS ── */
        .tm-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 1.25rem;
        }

        .tm-star {
          color: #b07d3a;
          font-size: 0.75rem;
        }

        /* ── AUTHOR ── */
        .tm-author {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .tm-author-name {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: 1.05rem;
          letter-spacing: 0.03em;
          color: #1a1007;
        }

        .tm-author-role {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(176, 125, 58, 0.65);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .tm-grid {
            grid-template-columns: 1fr;
            max-width: 480px;
          }
        }

        @media (max-width: 480px) {
          .tm-section { padding: 5rem 1.25rem; }
        }
      `}</style>

      <section className="tm-section">

        {/* Header */}
        <div className="tm-header">
          <div className="tm-label">
            <span className="tm-label-line" />
            <span className="tm-label-text">Testimonials</span>
            <span className="tm-label-line" />
          </div>

          <h2 className="tm-heading">
            What Our <em>Customers</em> Said
          </h2>

          <div className="tm-divider">
            <span className="tm-divider-line" />
            <span className="tm-divider-dot" />
            <span className="tm-divider-line" />
          </div>
        </div>

        {/* Cards */}
        <div className="tm-grid">
          {testimonials.map((t) => (
            <div className="tm-card" key={t.name}>
              <span className="tm-quote-mark"></span>

              <p className="tm-review">{t.review}</p>

              <div className="tm-card-rule" />

              <div className="tm-stars">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="tm-star">★</span>
                ))}
              </div>

              <div className="tm-author">
                <span className="tm-author-name">{t.name}</span>
                <span className="tm-author-role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}