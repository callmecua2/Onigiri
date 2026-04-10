"use client";

import { useState } from "react";

type Category = "Ramen" | "Sushi & Sashimi" | "Grilled & Hot Plate" | "Beverage" | "Dessert";

interface MenuItem {
  name: string;
  description: string;
  category: Category;
  price: number;
}


const menuItems: MenuItem[] = [
  { name: "Signature Tonkotsu Special", description: "48-hour simmered pork bone broth, chashu pork belly, ajitama egg, wood ear mushrooms, and black garlic oil.", category: "Ramen", price: 145000 },
  { name: "Spicy Hokkaido Miso", description: "Rich fermented soybean base with spicy minced pork, sweet corn, butter, and chili thread.", category: "Ramen", price: 135000 },
  { name: "Truffle Shoyu Consommé", description: "Clear chicken and dashi broth, soy reduction, truffle oil, sous-vide chicken breast, and menma.", category: "Ramen", price: 160000 },
  { name: "Tan Tan Men", description: "Creamy sesame and chili broth, spicy ground pork, bok choy, and toasted peanuts.", category: "Ramen", price: 130000 },
  { name: "Yuzu Shio Seabreeze", description: "Light salt-based broth infused with Japanese citrus, grilled scallops, and nori.", category: "Ramen", price: 155000 },
  { name: "Omakase Nigiri Selection", description: "8 pieces of premium chef-selected nigiri featuring seasonal catches from Toyosu Market.", category: "Sushi & Sashimi", price: 320000 },
  { name: "Tsukiji Sashimi Platter", description: "15 pieces of assorted sliced raw fish, including Atlantic salmon, bluefin tuna, and yellowtail.", category: "Sushi & Sashimi", price: 380000 },
  { name: "The Emperor's Bridge", description: "A grand assembly of 6 nigiri, 9 sashimi slices, and one signature dragon roll.", category: "Sushi & Sashimi", price: 550000 },
  { name: "Salmon Zen Moriawase", description: "Combination of salmon sashimi, salmon nigiri, and spicy salmon maki.", category: "Sushi & Sashimi", price: 240000 },
  { name: "Bluefin Trilogy", description: "A tasting of Akami, Chutoro, and Otoro in both sushi and sashimi styles.", category: "Sushi & Sashimi", price: 450000 },
  { name: "A5 Wagyu Ishiyaki", description: "Premium A5 Wagyu beef slices served on a sizzling volcanic stone with garlic soy reduction.", category: "Grilled & Hot Plate", price: 850000 },
  { name: "Miso-Glazed Gindara", description: "Black cod marinated for 72 hours in sweet saikyo miso, flame-grilled to perfection.", category: "Grilled & Hot Plate", price: 280000 },
  { name: "Sizzling Seafood Teppan", description: "Jumbo prawns, scallops, and squid served on a hot iron plate with ginger-onion sauce.", category: "Grilled & Hot Plate", price: 260000 },
  { name: "Kyoto Matcha Latte", description: "Ceremonial grade green tea whisked with creamy steamed milk and a hint of cane sugar.", category: "Beverage", price: 65000 },
  { name: "Yuzu Sparkling Refresher", description: "Fresh Japanese citrus juice, soda water, mint leaves, and honey.", category: "Beverage", price: 55000 },
  { name: "Roasted Hojicha Cold Brew", description: "Slow-steeped roasted green tea with a nutty, smoky finish.", category: "Beverage", price: 50000 },
  { name: "Sakura Lychee Fizz", description: "Light floral cherry blossom syrup paired with sweet lychee and carbonated spring water.", category: "Beverage", price: 60000 },
  { name: "Mochi Ice Cream Trio", description: "Soft rice cake dumplings filled with artisanal vanilla, matcha, and black sesame ice cream.", category: "Dessert", price: 75000 },
  { name: "Raindrop Cake with Kinako", description: "Translucent agar jelly served with roasted soybean powder and black sugar syrup.", category: "Dessert", price: 80000 },
  { name: "Matcha Lava Fondant", description: "Warm green tea cake with a molten center, served with a scoop of Hokkaido milk gelato.", category: "Dessert", price: 95000 },
];

const categories: Array<"All" | Category> = [
  "All",
  "Ramen",
  "Sushi & Sashimi",
  "Grilled & Hot Plate",
  "Beverage",
  "Dessert",
];

function formatPrice(price: number): string {
  return "Rp " + price.toLocaleString("id-ID");
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All");

  const filtered =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Zen+Kaku+Gothic+New:wght@300;400&display=swap');

        .menu-section {
          background: #f5f0e6;
          padding: 7rem clamp(1.5rem, 6vw, 5rem);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ── HEADER ── */
        .menu-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 1rem;
        }

        .menu-label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .menu-label-line {
          width: 32px;
          height: 1px;
          background: #b07d3a;
        }

        .menu-label-text {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.62rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #b07d3a;
        }

        .menu-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          line-height: 1.1;
          letter-spacing: 0.01em;
          color: #1a1007;
          margin: 0 0 1rem;
        }

        .menu-heading em {
          font-style: italic;
          color: #b07d3a;
        }

        .menu-divider {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 3rem;
        }

        .menu-divider-line {
          width: 40px;
          height: 1px;
          background: rgba(160, 120, 60, 0.3);
        }

        .menu-divider-dot {
          width: 4px;
          height: 4px;
          border: 1px solid rgba(160, 120, 60, 0.5);
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        /* ── TABS ── */
        .menu-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 3rem;
        }

        .menu-tab {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 0.5rem 1.5rem;
          border: 1px solid rgba(176, 125, 58, 0.25);
          background: transparent;
          color: rgba(40, 25, 8, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .menu-tab:hover {
          border-color: rgba(176, 125, 58, 0.5);
          color: #b07d3a;
        }

        .menu-tab.active {
          background: #1a1007;
          border-color: #1a1007;
          color: #f5f0e6;
        }

        /* ── GRID ── */
        .menu-grid {
          width: 100%;
          max-width: 1200px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(176, 125, 58, 0.15);
          border-left: 1px solid rgba(176, 125, 58, 0.15);
        }

        /* ── ITEM ── */
        .menu-item {
          padding: 1.75rem 2rem;
          background: #fff9f0;
          border-right: 1px solid rgba(176, 125, 58, 0.15);
          border-bottom: 1px solid rgba(176, 125, 58, 0.15);
          transition: background 0.3s ease;
        }

        .menu-item:hover {
          background: #fffdf8;
        }

        .menu-item-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 0.6rem;
        }

        .menu-item-name {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: 1.1rem;
          letter-spacing: 0.01em;
          color: #1a1007;
          line-height: 1.3;
          margin: 0;
        }

        .menu-item-price {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.78rem;
          letter-spacing: 0.05em;
          color: #b07d3a;
          white-space: nowrap;
          padding-top: 0.2rem;
          flex-shrink: 0;
        }

        .menu-item-divider {
          width: 20px;
          height: 1px;
          background: rgba(176, 125, 58, 0.3);
          margin-bottom: 0.65rem;
          transition: width 0.3s ease;
        }

        .menu-item:hover .menu-item-divider {
          width: 32px;
        }

        .menu-item-desc {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.78rem;
          line-height: 1.75;
          color: rgba(40, 25, 8, 0.5);
          margin: 0;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .menu-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 560px) {
          .menu-grid {
            grid-template-columns: 1fr;
          }

          .menu-section {
            padding: 5rem 1.25rem;
          }

          .menu-tab {
            font-size: 0.65rem;
            padding: 0.4rem 1rem;
          }
        }
      `}</style>

      <section className="menu-section">

        {/* Header */}
        <div className="menu-header">
          <div className="menu-label">
            <span className="menu-label-line" />
            <span className="menu-label-text">Our Specialties</span>
            <span className="menu-label-line" />
          </div>
          <h2 className="menu-heading">
            Explore Our <em>Menu</em>
          </h2>
        </div>

        <div className="menu-divider">
          <span className="menu-divider-line" />
          <span className="menu-divider-dot" />
          <span className="menu-divider-line" />
        </div>

        {/* Tabs */}
        <div className="menu-tabs ">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`menu-tab${activeCategory === cat ? " active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="menu-grid">
          {filtered.map((item) => (
            <div className="menu-item cursor-default" key={item.name}>
              <div className="menu-item-top">
                <h3 className="menu-item-name">{item.name}</h3>
                <span className="menu-item-price">{formatPrice(item.price)}</span>
              </div>
              <div className="menu-item-divider" />
              <p className="menu-item-desc">{item.description}</p>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}