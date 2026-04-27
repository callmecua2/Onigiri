"use client";

import { useState } from "react";

// ── Types ──────────────────────────────────────────────────────────
type NavKey =
  | "dashboard"
  | "orders"
  | "sales"
  | "stock"
  | "customers"
  | "reports"
  | "settings";

interface NavItem {
  key: NavKey;
  label: string;
  icon: React.ReactNode;
  badge?: number;
}

// ── Nav Items ──────────────────────────────────────────────────────
const navItems: NavItem[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: (                
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    key: "orders",
    label: "Pesanan",
    badge: 5,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    key: "sales",
    label: "Penjualan",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    key: "stock",
    label: "Stok Barang",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    key: "customers",
    label: "Pelanggan",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4" />
        <path d="M2 21v-2a4 4 0 014-4h6a4 4 0 014 4v2" />
        <path d="M19 8v6M22 11h-6" />
      </svg>
    ),
  },
  {
    key: "reports",
    label: "Laporan",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    key: "settings",
    label: "Pengaturan",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
];

// ── Props ──────────────────────────────────────────────────────────
interface SidebarProps {
  active?: NavKey;
  onNavigate?: (key: NavKey) => void;
  userName?: string;
  userLocation?: string;
}

// ── Component ──────────────────────────────────────────────────────
export default function Sidebar({
  active = "dashboard",
  onNavigate,
  userName = "Admin",
  userLocation = "Bandung",
}: SidebarProps) {
  const [activeKey, setActiveKey] = useState<NavKey>(active);

  const handleNav = (key: NavKey) => {
    setActiveKey(key);
    onNavigate?.(key);
  };

  return (
    <>
      <style>{css}</style>

      <div className="sb-root">

        {/* ── Profile ── */}
        <div className="sb-profile">
          <div className="sb-avatar">
            {userName.charAt(0).toUpperCase()}
          </div>
          <div className="sb-profile-info">
            <p className="sb-profile-name">{userName}</p>
            <p className="sb-profile-meta">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {userLocation}
            </p>
          </div>
          <button className="sb-settings-btn" title="Pengaturan Akun">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
            </svg>
          </button>
        </div>

        <div className="sb-divider" />

        {/* ── Nav ── */}
        <nav className="sb-nav">
          <p className="sb-nav-label">MAIN</p>
          {navItems.map((item) => {
            const isActive = activeKey === item.key;
            return (
              <button
                key={item.key}
                className={`sb-nav-item${isActive ? " sb-nav-item--active" : ""}`}
                onClick={() => handleNav(item.key)}
              >
                <span className="sb-nav-icon">{item.icon}</span>
                <span className="sb-nav-text w-xl">{item.label}</span>
                {item.badge !== undefined && (
                  <span className="sb-nav-badge">{item.badge}</span>
                )}
              </button>
            );
          })}
        </nav>

        <div style={{ flex: 1 }} />

        {/* ── Logout ── */}
        <div className="sb-footer">
          <div className="sb-divider" />
          <button className="sb-logout">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            <span>Keluar</span>
          </button>
        </div>

      </div>
    </>
  );
}

// ── CSS ────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

  .sb-root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Plus Jakarta Sans', sans-serif;
    overflow: hidden;
  }

  /* ── Profile ── */
  .sb-profile {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px 14px 16px;
  }

  .sb-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #546e7a;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.82rem;
    font-weight: 600;
    color: #ffffff;
    flex-shrink: 0;
  }

  .sb-profile-info {
    flex: 1;
    min-width: 0;
  }

  .sb-profile-name {
    font-size: 0.8rem;
    font-weight: 600;
    color: #eceff1;
    margin: 0 0 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sb-profile-meta {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.67rem;
    color: #78909c;
    margin: 0;
  }

  .sb-settings-btn {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 6px;
    background: transparent;
    color: #546e7a;
    cursor: pointer;
    transition: background 0.15s, color 0.15s;
    flex-shrink: 0;
  }
  .sb-settings-btn:hover {
    background: rgba(255,255,255,0.07);
    color: #b0bec5;
  }

  /* ── Divider ── */
  .sb-divider {
    height: 1px;
    background: rgba(255,255,255,0.07);
    margin: 0 14px;
  }

  /* ── Nav ── */
  .sb-nav {
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding: 14px 8px 0;
  }

  .sb-nav-label {
    font-size: 0.58rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    color: #546e7a;
    padding: 0 8px 8px;
    margin: 0;
  }

  .sb-nav-item {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 10px;
    border: none;
    border-radius: 6px;
    background: transparent;
    cursor: pointer;
    text-align: left;
    color: #78909c;
    transition: background 0.15s, color 0.15s;
    position: relative;
  }

  .sb-nav-item:hover {
    background: rgba(255,255,255,0.06);
    color: #cfd8dc;
  }

  .sb-nav-item--active {
    background: rgba(255,255,255,0.1);
    color: #ffffff;
  }

  .sb-nav-item--active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 20px;
    background: #80cbc4;
    border-radius: 0 3px 3px 0;
  }

  .sb-nav-icon {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .sb-nav-text {
    font-size: 0.8rem;
    font-weight: 500;
    flex: 1;
  }

  .sb-nav-badge {
    font-size: 0.6rem;
    font-weight: 700;
    background: #ef5350;
    color: #fff;
    min-width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    padding: 0 5px;
  }

  /* ── Footer ── */
  .sb-footer {
    padding: 0 8px 14px;
  }

  .sb-footer .sb-divider {
    margin: 0 6px 10px;
  }

  .sb-logout {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 10px;
    border: none;
    border-radius: 6px;
    background: transparent;
    cursor: pointer;
    color: #546e7a;
    transition: background 0.15s, color 0.15s;
  }
  .sb-logout span {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
  }
  .sb-logout:hover {
    background: rgba(239, 83, 80, 0.12);
    color: #ef9a9a;
  }
`;