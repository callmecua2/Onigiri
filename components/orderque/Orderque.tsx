"use client";

import { useState, useEffect } from "react";
import "./orderque.css"

// ─── Types ────────────────────────────────────────────────────────────────────
type OrderStatus = "processing" | "ready" | "served";

interface OrderItem {
  name: string;
  qty: number;
}

interface Order {
  id: string;
  orderNumber: string;
  items: OrderItem[];
  status: OrderStatus;
}

// ─── Dummy Data ───────────────────────────────────────────────────────────────
// 🔁 Replace this with your actual API fetch later
const DUMMY_ORDERS: Order[] = [
  {
    id: "1",
    orderNumber: "ORD-001",
    items: [{ name: "Salmon Nigiri", qty: 2 }, { name: "Miso Soup", qty: 1 }],
    status: "ready",
  },
  {
    id: "2",
    orderNumber: "ORD-002",
    items: [{ name: "Dragon Roll", qty: 1 }, { name: "Edamame", qty: 1 }, { name: "Matcha Latte", qty: 2 }],
    status: "processing",
  },
  {
    id: "3",
    orderNumber: "ORD-003",
    items: [{ name: "Tonkotsu Ramen", qty: 1 }, { name: "Gyoza", qty: 3 }],
    status: "processing",
  },
  {
    id: "4",
    orderNumber: "ORD-004",
    items: [{ name: "Spicy Tuna Roll", qty: 2 }, { name: "Chawanmushi", qty: 1 }],
    status: "ready",
  },
  {
    id: "5",
    orderNumber: "ORD-005",
    items: [{ name: "Wagyu Don", qty: 1 }],
    status: "served",
  },
];

// ─── Status Config ────────────────────────────────────────────────────────────
const STATUS_CONFIG: Record<OrderStatus, { label: string; kanji: string; color: string }> = {
  processing: { label: "Processing",  kanji: "調理中", color: "var(--ow-gold)" },
  ready:      { label: "Ready",       kanji: "完成",   color: "var(--ow-green)" },
  served:     { label: "Served",      kanji: "提供済", color: "var(--ow-muted)" },
};

// ─── Order Card ───────────────────────────────────────────────────────────────
function OrderCard({ order, index }: { order: Order; index: number }) {
  const cfg = STATUS_CONFIG[order.status];

  return (
    <div
      className="ow-card"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Left accent bar */}
      <div className="ow-card-bar" style={{ background: cfg.color }} />

      {/* Order number */}
      <div className="ow-card-number">
        <span className="ow-number-label">Order</span>
        <span className="ow-number-value">{order.orderNumber}</span>
      </div>

      {/* Divider */}
      <div className="ow-card-divider" />

      {/* Items */}
      <ul className="ow-items">
        {order.items.map((item, i) => (
          <li key={i} className="ow-item">
            <span className="ow-item-dot">·</span>
            <span className="ow-item-name">{item.name}</span>
            <span className="ow-item-qty">×{item.qty}</span>
          </li>
        ))}
      </ul>

      {/* Status */}
      <div className="ow-status" style={{ color: cfg.color }}>
        <span className="ow-status-kanji">{cfg.kanji}</span>
        <span className="ow-status-dot" style={{ background: cfg.color }} />
        <span className="ow-status-label">{cfg.label}</span>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function OrderWaitingList() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [tick, setTick] = useState(0); // for clock

  // Clock ticker
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

//   const now = new Date();
//   const timeStr = now.toLocaleTimeString("id-ID", {
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//   });

  // 🔁 Replace this function with your actual API fetch
  const fetchOrders = () => {
    setLoaded(false);
    setTimeout(() => {
      setOrders(DUMMY_ORDERS);
      setLoaded(true);
    }, 600);
  };

  // Separate by status priority
  const readyOrders      = orders.filter((o) => o.status === "ready");
  const processingOrders = orders.filter((o) => o.status === "processing");
  const servedOrders     = orders.filter((o) => o.status === "served");
  const sortedOrders     = [...readyOrders, ...processingOrders, ...servedOrders];

  return (
    <>

      <div className="ow-root">
        {/* ── Top bar ── */}
        <div className="ow-topbar">
          <div className="ow-topbar-left">
            <span className="ow-topbar-kanji">注文</span>
            <span className="ow-topbar-title">Order Queue</span>
          </div>
          {/* <div className="ow-topbar-right">
            <span className="ow-clock">{timeStr}</span>
            {loaded && (
              <span className="ow-count">
                {orders.length} order{orders.length !== 1 ? "s" : ""}
              </span>
            )}
          </div> */}
        </div>

        {/* ── Divider ── */}
        <div className="ow-hr">
          <span className="ow-hr-line" />
          <span className="ow-hr-dot" />
          <span className="ow-hr-line" />
        </div>

        {/* ── Content ── */}
        <div className="ow-content">
          {!loaded ? (
            <div className="ow-empty">
              <span className="ow-empty-kanji">待</span>
              <p className="ow-empty-text">Press <em>Get Order</em> to load the queue</p>
            </div>
          ) : orders.length === 0 ? (
            <div className="ow-empty">
              <span className="ow-empty-kanji">空</span>
              <p className="ow-empty-text">No active orders at the moment</p>
            </div>
          ) : (
            <div className="ow-grid">
              {sortedOrders.map((order, i) => (
                <OrderCard key={order.id} order={order} index={i} />
              ))}
            </div>
          )}
        </div>

        {/* ── Legend ── */}
        {loaded && (
          <div className="ow-legend">
            {(Object.entries(STATUS_CONFIG) as [OrderStatus, typeof STATUS_CONFIG[OrderStatus]][]).map(([key, cfg]) => (
              <div key={key} className="ow-legend-item">
                <span className="ow-legend-dot" style={{ background: cfg.color }} />
                <span className="ow-legend-label">{cfg.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  .ow-root {
    --ow-gold:   #c9a84c;
    --ow-green:  #6db97a;
    --ow-muted:  #9a9080;
    --ow-border: rgba(0,0,0,0.08);
    --ow-text:   #1a1714;
    --ow-sub:    #6b6055;
    --font-serif: 'Cormorant Garamond', Georgia, serif;
    --font-sans:  'DM Sans', sans-serif;

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.75rem 2rem;
    box-sizing: border-box;
    font-family: var(--font-sans);
    color: var(--ow-text);
    overflow: hidden;
  }

  /* ── Top bar ── */
  .ow-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }

  .ow-topbar-left {
    display: flex;
    align-items: baseline;
    gap: 0.6rem;
  }

  .ow-topbar-kanji {
    font-family: var(--font-serif);
    font-size: 1.4rem;
    font-weight: 300;
    color: var(--ow-gold);
    opacity: 0.6;
    line-height: 1;
  }

  .ow-topbar-title {
    font-family: var(--font-serif);
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.02em;
    color: var(--ow-text);
  }

  .ow-topbar-right {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  .ow-clock {
    font-family: 'Courier New', monospace;
    font-size: 0.85rem;
    color: var(--ow-sub);
    letter-spacing: 0.05em;
  }

  .ow-count {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ow-muted);
    background: rgba(0,0,0,0.05);
    padding: 0.25rem 0.65rem;
    border-radius: 2px;
  }

  /* ── Divider ── */
  .ow-hr {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.25rem;
  }
  .ow-hr-line {
    flex: 1;
    height: 1px;
    background: var(--ow-border);
  }
  .ow-hr-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--ow-gold);
    opacity: 0.5;
  }

  /* ── Content ── */
  .ow-content {
    flex: 1;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(201,168,76,0.2) transparent;
  }

  .ow-content::-webkit-scrollbar { width: 4px; }
  .ow-content::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.25); border-radius: 2px; }

  /* ── Empty state ── */
  .ow-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 0.75rem;
    opacity: 0.45;
  }

  .ow-empty-kanji {
    font-family: var(--font-serif);
    font-size: 4rem;
    font-weight: 300;
    color: var(--ow-gold);
    line-height: 1;
  }

  .ow-empty-text {
    font-size: 0.85rem;
    color: var(--ow-sub);
    letter-spacing: 0.03em;
  }

  .ow-empty-text em {
    font-style: italic;
    color: var(--ow-gold);
  }

  /* ── Grid ── */
  .ow-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 0.85rem;
    padding-bottom: 0.5rem;
  }

  /* ── Card ── */
  .ow-card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 1rem 1rem 1.3rem;
    border: 1px solid var(--ow-border);
    background: #fff;
    overflow: hidden;
    animation: owFadeUp 0.35s ease both;
    transition: box-shadow 0.2s ease, transform 0.2s ease;
  }

  .ow-card:hover {
    box-shadow: 0 4px 20px rgba(0,0,0,0.07);
    transform: translateY(-1px);
  }

  @keyframes owFadeUp {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Left bar */
  .ow-card-bar {
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 3px;
  }

  /* Number */
  .ow-card-number {
    display: flex;
    align-items: baseline;
    gap: 0.4rem;
  }

  .ow-number-label {
    font-size: 0.62rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ow-muted);
  }

  .ow-number-value {
    font-family: var(--font-serif);
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--ow-text);
    letter-spacing: 0.02em;
  }

  /* Divider */
  .ow-card-divider {
    width: 100%;
    height: 1px;
    background: var(--ow-border);
  }

  /* Items */
  .ow-items {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    flex: 1;
  }

  .ow-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
    color: var(--ow-sub);
  }

  .ow-item-dot {
    color: var(--ow-gold);
    font-size: 1rem;
    line-height: 1;
  }

  .ow-item-name {
    flex: 1;
    line-height: 1.4;
  }

  .ow-item-qty {
    font-size: 0.72rem;
    font-weight: 500;
    color: var(--ow-muted);
    letter-spacing: 0.03em;
  }

  /* Status */
  .ow-status {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: 0.25rem;
  }

  .ow-status-kanji {
    font-family: var(--font-serif);
    font-size: 0.75rem;
    font-weight: 400;
    opacity: 0.55;
  }

  .ow-status-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin-left: auto;
  }

  .ow-status-label {
    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  /* ── Legend ── */
  .ow-legend {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    padding-top: 0.85rem;
    border-top: 1px solid var(--ow-border);
    margin-top: 0.5rem;
  }

  .ow-legend-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .ow-legend-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }

  .ow-legend-label {
    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ow-muted);
  }
`;