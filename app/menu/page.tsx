"use client";

import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";

// ── Types ──────────────────────────────────────────────────────────
type Category = "Onigiri" | "Ramen" | "Sides" | "Drinks" | "Desserts";

interface MenuItem {
  name: string;
  price: number;
  category: Category;
  description: string;
}

interface CartItem extends MenuItem {
  qty: number;
}

// ── Sample Data (replace with your own) ───────────────────────────
const categories: ("All" | Category)[] = ["All", "Onigiri", "Ramen", "Sides", "Drinks", "Desserts"];

const menuItems: MenuItem[] = [
  { name: "Sake Onigiri", price: 28000, category: "Onigiri", description: "Grilled salmon flakes folded into seasoned rice, wrapped in crisp nori." },
  { name: "Umeboshi Onigiri", price: 24000, category: "Onigiri", description: "Pickled plum with a gentle tartness, enclosed in hand-pressed rice." },
  { name: "Tuna Mayo Onigiri", price: 26000, category: "Onigiri", description: "Japanese-style tuna with Kewpie mayo, a timeless convenience classic." },
  { name: "Shoyu Ramen", price: 65000, category: "Ramen", description: "Clear soy-based broth, chashu pork, bamboo shoots, soft-boiled egg." },
  { name: "Miso Ramen", price: 68000, category: "Ramen", description: "Robust Hokkaido-style miso broth with corn, butter, and thick noodles." },
  { name: "Spicy Tantanmen", price: 72000, category: "Ramen", description: "Sesame-rich broth with ground pork, chilli oil, and a slow-building heat." },
  { name: "Edamame", price: 18000, category: "Sides", description: "Lightly salted young soybeans, steamed and served warm." },
  { name: "Takoyaki (6 pcs)", price: 32000, category: "Sides", description: "Octopus-filled wheat dough balls, bonito flakes, okonomiyaki sauce." },
  { name: "Gyoza (5 pcs)", price: 35000, category: "Sides", description: "Pan-fried pork and cabbage dumplings with yuzu ponzu dipping sauce." },
  { name: "Matcha Latte", price: 38000, category: "Drinks", description: "Ceremonial-grade matcha whisked with steamed oat milk." },
  { name: "Yuzu Lemonade", price: 32000, category: "Drinks", description: "Fresh yuzu citrus with sparkling water and a pinch of sea salt." },
  { name: "Hojicha Cold Brew", price: 35000, category: "Drinks", description: "Slow-steeped roasted green tea, served over hand-chipped ice." },
  { name: "Mochi Ice Cream", price: 42000, category: "Desserts", description: "Trio of matcha, black sesame, and strawberry mochi, made in-house." },
  { name: "Dorayaki", price: 28000, category: "Desserts", description: "Fluffy pancake sandwiching sweet red bean paste and a thin layer of butter." },
  { name: "Warabi Mochi", price: 36000, category: "Desserts", description: "Silken bracken-starch mochi dusted in roasted soybean flour, with kuromitsu." },
];

const formatPrice = (p: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(p);

// ── Component ──────────────────────────────────────────────────────
export default function MenuPages() {
  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.name === item.name);
      if (existing) return prev.map((c) => c.name === item.name ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...item, qty: 1 }];
    });
    setAddedItem(item.name);
    setTimeout(() => setAddedItem(null), 1200);
  };

  const updateQty = (name: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) => c.name === name ? { ...c, qty: c.qty + delta } : c)
        .filter((c) => c.qty > 0)
    );
  };

  const clearCart = () => setCart([]);  

  return (
    <>
      <style>{css}</style>
        <Navbar />
      <section className="menu-section">

        {/* ── Header ── */}
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

        {/* ── Tabs ── */}
        <div className="menu-tabs">
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

        {/* ── Grid ── */}
        <div className="menu-grid">
          {filtered.map((item) => {
            const inCart = cart.find((c) => c.name === item.name);
            const justAdded = addedItem === item.name;
            return (
              <div className="menu-item" key={item.name}>
                <div className="menu-item-top">
                  <h3 className="menu-item-name">{item.name}</h3>
                  <span className="menu-item-price">{formatPrice(item.price)}</span>
                </div>
                <div className="menu-item-divider" />
                <p className="menu-item-desc">{item.description}</p>

                {/* Add to cart row */}
                <div className="menu-item-action">
                  {inCart ? (
                    <div className="menu-qty-control">
                      <button className="menu-qty-btn" onClick={() => updateQty(item.name, -1)}>−</button>
                      <span className="menu-qty-num">{inCart.qty}</span>
                      <button className="menu-qty-btn" onClick={() => updateQty(item.name, 1)}>+</button>
                    </div>
                  ) : (
                    <button
                      className={`menu-add-btn${justAdded ? " menu-add-btn--added" : ""}`}
                      onClick={() => addToCart(item)}
                    >
                      {justAdded ? (
                        <>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" /></svg>
                          Added
                        </>
                      ) : (
                        <>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                          Add to Order
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Floating Cart Button ── */}
      {totalQty > 0 && (
        <button className="cart-fab" onClick={() => setCartOpen(true)}>
          <span className="cart-fab-inner">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <span className="cart-fab-label">View Order</span>
          </span>
          <span className="cart-fab-price">{formatPrice(totalPrice)}</span>
          <span className="cart-fab-badge">{totalQty}</span>
        </button>
      )}

      {/* ── Cart Modal ── */}
      {cartOpen && (
        <div className="cart-overlay" onClick={() => setCartOpen(false)}>
          <div className="cart-modal" onClick={(e) => e.stopPropagation()}>

            {/* Modal header */}
            <div className="cart-modal-head">
              <div>
                <p className="cart-modal-label">ご注文</p>
                <h3 className="cart-modal-title">Your Order</h3>
              </div>
              <button className="cart-close" onClick={() => setCartOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="cart-divider" />

            {/* Items */}
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-row" key={item.name}>
                  <div className="cart-row-info">
                    <p className="cart-row-name">{item.name}</p>
                    <p className="cart-row-price">{formatPrice(item.price)}</p>
                  </div>
                  <div className="cart-row-right">
                    <div className="menu-qty-control">
                      <button className="menu-qty-btn" onClick={() => updateQty(item.name, -1)}>−</button>
                      <span className="menu-qty-num">{item.qty}</span>
                      <button className="menu-qty-btn" onClick={() => updateQty(item.name, 1)}>+</button>
                    </div>
                    <p className="cart-row-subtotal">{formatPrice(item.price * item.qty)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-divider" />

            {/* Total */}
            <div className="cart-total-row">
              <span className="cart-total-label">Total</span>
              <span className="cart-total-price">{formatPrice(totalPrice)}</span>
            </div>

            {/* Actions */}
            <div className="cart-actions">
              <button className="cart-btn-clear" onClick={clearCart}>Clear Order</button>
              <button className="cart-btn-confirm">
                Place Order
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

// ── Styles ─────────────────────────────────────────────────────────
const css = `
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
  .menu-label-line { width: 32px; height: 1px; background: #b07d3a; }
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
  .menu-heading em { font-style: italic; color: #b07d3a; }

  .menu-divider {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 3rem;
  }
  .menu-divider-line { width: 40px; height: 1px; background: rgba(160,120,60,0.3); }
  .menu-divider-dot {
    width: 4px; height: 4px;
    border: 1px solid rgba(160,120,60,0.5);
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
    border: 1px solid rgba(176,125,58,0.25);
    background: transparent;
    color: rgba(40,25,8,0.5);
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .menu-tab:hover { border-color: rgba(176,125,58,0.5); color: #b07d3a; }
  .menu-tab.active { background: #1a1007; border-color: #1a1007; color: #f5f0e6; }

  /* ── GRID ── */
  .menu-grid {
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-top: 1px solid rgba(176,125,58,0.15);
    border-left: 1px solid rgba(176,125,58,0.15);
  }

  /* ── ITEM ── */
  .menu-item {
    padding: 1.75rem 2rem;
    background: #fff9f0;
    border-right: 1px solid rgba(176,125,58,0.15);
    border-bottom: 1px solid rgba(176,125,58,0.15);
    transition: background 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  .menu-item:hover { background: #fffdf8; }

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
    width: 20px; height: 1px;
    background: rgba(176,125,58,0.3);
    margin-bottom: 0.65rem;
    transition: width 0.3s ease;
  }
  .menu-item:hover .menu-item-divider { width: 32px; }
  .menu-item-desc {
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-weight: 300;
    font-size: 0.78rem;
    line-height: 1.75;
    color: rgba(40,25,8,0.5);
    margin: 0 0 1.25rem;
    flex: 1;
  }

  /* ── ADD TO CART ── */
  .menu-item-action {
    margin-top: auto;
  }

  .menu-add-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-weight: 300;
    font-size: 0.68rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #b07d3a;
    background: transparent;
    border: 1px solid rgba(176,125,58,0.35);
    padding: 0.4rem 1rem;
    cursor: pointer;
    transition: all 0.25s ease;
  }
  .menu-add-btn:hover {
    background: #1a1007;
    border-color: #1a1007;
    color: #f5f0e6;
  }
  .menu-add-btn--added {
    background: #b07d3a;
    border-color: #b07d3a;
    color: #fff9f0;
  }

  /* ── QTY CONTROL ── */
  .menu-qty-control {
    display: inline-flex;
    align-items: center;
    border: 1px solid rgba(176,125,58,0.35);
    overflow: hidden;
  }
  .menu-qty-btn {
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    color: #b07d3a;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  }
  .menu-qty-btn:hover { background: #b07d3a; color: #fff9f0; }
  .menu-qty-num {
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-size: 0.78rem;
    color: #1a1007;
    min-width: 28px;
    text-align: center;
  }

  /* ── FLOATING CART ── */
  .cart-fab {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 100;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: #1a1007;
    color: #f5f0e6;
    border: none;
    padding: 0.85rem 1.25rem 0.85rem 1rem;
    cursor: pointer;
    box-shadow: 0 8px 32px rgba(26,16,7,0.25);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    animation: fabSlideUp 0.35s cubic-bezier(0.34,1.56,0.64,1);
  }
  .cart-fab:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(26,16,7,0.32);
  }
  .cart-fab-inner {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .cart-fab-label {
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-size: 0.72rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }
  .cart-fab-price {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.05rem;
    font-weight: 400;
    color: #d4a86a;
    padding-left: 0.5rem;
    border-left: 1px solid rgba(245,240,230,0.2);
  }
  .cart-fab-badge {
    position: absolute;
    top: -8px;
    right: -8px;
    width: 22px;
    height: 22px;
    background: #b07d3a;
    border-radius: 50%;
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-size: 0.68rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }

  @keyframes fabSlideUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── CART MODAL ── */
  .cart-overlay {
    position: fixed;
    inset: 0;
    background: rgba(26,16,7,0.55);
    backdrop-filter: blur(3px);
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  .cart-modal {
    background: #fff9f0;
    width: 100%;
    max-width: 520px;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    animation: modalUp 0.3s cubic-bezier(0.34,1.56,0.64,1);
    overflow: hidden;
  }

  @keyframes modalUp {
    from { opacity: 0; transform: translateY(24px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .cart-modal-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1.75rem 2rem 1.25rem;
  }
  .cart-modal-label {
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-size: 0.6rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #b07d3a;
    margin: 0 0 0.25rem;
  }
  .cart-modal-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: 1.8rem;
    color: #1a1007;
    margin: 0;
  }
  .cart-close {
    background: transparent;
    border: 1px solid rgba(176,125,58,0.2);
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: rgba(40,25,8,0.4);
    transition: all 0.2s;
    flex-shrink: 0;
  }
  .cart-close:hover { border-color: #b07d3a; color: #b07d3a; }

  .cart-divider { height: 1px; background: rgba(176,125,58,0.15); margin: 0; }

  /* Cart items list */
  .cart-items {
    overflow-y: auto;
    flex: 1;
    padding: 0.5rem 0;
  }
  .cart-items::-webkit-scrollbar { width: 4px; }
  .cart-items::-webkit-scrollbar-thumb { background: rgba(176,125,58,0.25); }

  .cart-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem 2rem;
    border-bottom: 1px solid rgba(176,125,58,0.08);
    transition: background 0.2s;
  }
  .cart-row:hover { background: rgba(176,125,58,0.04); }

  .cart-row-info { flex: 1; min-width: 0; }
  .cart-row-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem;
    color: #1a1007;
    margin: 0 0 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .cart-row-price {
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-size: 0.7rem;
    color: rgba(40,25,8,0.4);
    margin: 0;
  }
  .cart-row-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
  }
  .cart-row-subtotal {
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-size: 0.75rem;
    color: #b07d3a;
    margin: 0;
    white-space: nowrap;
  }

  /* Total */
  .cart-total-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 1.25rem 2rem;
  }
  .cart-total-label {
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-size: 0.68rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(40,25,8,0.45);
  }
  .cart-total-price {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: #1a1007;
  }

  /* Actions */
  .cart-actions {
    display: flex;
    gap: 0.75rem;
    padding: 0 2rem 2rem;
  }
  .cart-btn-clear {
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-size: 0.68rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(40,25,8,0.4);
    background: transparent;
    border: 1px solid rgba(176,125,58,0.2);
    padding: 0.75rem 1.25rem;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
  }
  .cart-btn-clear:hover { border-color: rgba(176,125,58,0.5); color: #b07d3a; }

  .cart-btn-confirm {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-size: 0.72rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    background: #1a1007;
    color: #f5f0e6;
    border: none;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    transition: background 0.25s;
  }
  .cart-btn-confirm:hover { background: #b07d3a; }

  /* ── RESPONSIVE ── */
  @media (max-width: 960px) {
    .menu-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 560px) {
    .menu-grid { grid-template-columns: 1fr; }
    .menu-section { padding: 5rem 1.25rem; }
    .menu-tab { font-size: 0.65rem; padding: 0.4rem 1rem; }
    .cart-fab { bottom: 1.25rem; right: 1.25rem; }
    .cart-modal { max-height: 90vh; }
    .cart-row { padding: 1rem 1.25rem; }
    .cart-modal-head, .cart-total-row, .cart-actions { padding-left: 1.25rem; padding-right: 1.25rem; }
  }
`;