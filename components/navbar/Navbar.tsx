"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Zen+Kaku+Gothic+New:wght@300;400&display=swap');

        .onigi-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: background 0.5s cubic-bezier(0.4,0,0.2,1),
                      box-shadow 0.5s cubic-bezier(0.4,0,0.2,1),
                      backdrop-filter 0.5s ease,
                      padding 0.4s cubic-bezier(0.4,0,0.2,1);
          padding: 0 2.5rem;
          height: 80px;
          display: flex;
          align-items: center;
        }

        .onigi-nav.transparent {
          background: transparent;
          box-shadow: none;
          backdrop-filter: none;
        }

        .onigi-nav.solid {
          background: rgba(245, 240, 230, 0.96);
          box-shadow: 0 1px 0 rgba(160, 130, 90, 0.15), 0 4px 24px rgba(100, 70, 30, 0.07);
          backdrop-filter: blur(12px);
          height: 68px;
        }

        .nav-inner {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* ── LOGO ── */
        .nav-logo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-decoration: none;
          line-height: 1;
          gap: 1px;
        }

        .nav-logo-kanji {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          color: rgba(160, 120, 60, 0.75);
          text-transform: uppercase;
          transition: color 0.4s;
        }

        .onigi-nav.transparent .nav-logo-kanji {
          color: rgba(245, 235, 210, 0.7);
        }

        .nav-logo-main {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: italic;
          font-size: 2rem;
          letter-spacing: 0.06em;
          color: #2c1f0e;
          transition: color 0.4s;
        }

        .onigi-nav.transparent .nav-logo-main {
          color: #f5f0e6;
        }

        .nav-logo-dot {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #b07d3a;
          margin-left: 2px;
          vertical-align: super;
          transition: background 0.4s;
        }

        /* ── LINKS ── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.8rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          color: #2c1f0e;
          position: relative;
          padding-bottom: 3px;
          transition: color 0.3s;
        }

        .onigi-nav.transparent .nav-links a {
          color: rgba(245, 240, 230, 0.9);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: #b07d3a;
          transition: width 0.35s cubic-bezier(0.4,0,0.2,1);
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-links a:hover {
          color: #8a5e20;
        }

        .onigi-nav.transparent .nav-links a:hover {
          color: #f0d9a8;
        }

        /* ── RESERVATION BUTTON ── */
        .nav-reservation {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 400;
          font-size: 0.75rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 10px 22px;
          border: 1px solid #b07d3a;
          color: #b07d3a;
          background: transparent;
          position: relative;
          overflow: hidden;
          transition: color 0.35s, border-color 0.35s;
          display: inline-block;
        }

        .nav-reservation::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #b07d3a;
          transform: translateY(101%);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          z-index: 0;
        }

        .nav-reservation:hover::before {
          transform: translateY(0);
        }

        .nav-reservation span {
          position: relative;
          z-index: 1;
        }

        .nav-reservation:hover {
          color: #f5f0e6;
        }

        .onigi-nav.transparent .nav-reservation {
          border-color: rgba(245, 235, 210, 0.7);
          color: rgba(245, 235, 210, 0.9);
        }

        .onigi-nav.transparent .nav-reservation::before {
          background: rgba(176, 125, 58, 0.85);
        }

        .onigi-nav.transparent .nav-reservation:hover {
          color: #f5f0e6;
          border-color: #b07d3a;
        }

        /* ── DECORATIVE DIVIDER ── */
        .nav-divider {
          width: 1px;
          height: 20px;
          background: rgba(160, 120, 60, 0.3);
          margin: 0 0.25rem;
          transition: background 0.4s;
        }

        .onigi-nav.transparent .nav-divider {
          background: rgba(245, 235, 210, 0.3);
        }

        /* ── HAMBURGER ── */
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 6px;
          background: none;
          border: none;
          outline: none;
        }

        .nav-hamburger span {
          display: block;
          height: 1px;
          background: #2c1f0e;
          transition: background 0.4s, transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s, width 0.35s;
          transform-origin: center;
        }

        .nav-hamburger span:nth-child(1) { width: 28px; }
        .nav-hamburger span:nth-child(2) { width: 20px; }
        .nav-hamburger span:nth-child(3) { width: 28px; }

        .onigi-nav.transparent .nav-hamburger span {
          background: rgba(245, 240, 230, 0.9);
        }

        .nav-hamburger.open span:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
          width: 28px;
        }
        .nav-hamburger.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .nav-hamburger.open span:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
          width: 28px;
        }

        /* ── MOBILE DRAWER ── */
        .nav-drawer {
          position: fixed;
          inset: 0;
          z-index: 999;
          display: flex;
          flex-direction: column;
          pointer-events: none;
        }

        .nav-drawer-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(20, 12, 4, 0);
          transition: background 0.45s ease;
        }

        .nav-drawer.open .nav-drawer-backdrop {
          background: rgba(20, 12, 4, 0.55);
          pointer-events: all;
        }

        .nav-drawer-panel {
          position: absolute;
          top: 0;
          right: 0;
          width: min(340px, 85vw);
          height: 100%;
          background: #f5f0e6;
          transform: translateX(100%);
          transition: transform 0.5s cubic-bezier(0.4,0,0.2,1);
          display: flex;
          flex-direction: column;
          padding: 100px 2.5rem 3rem;
          pointer-events: all;
        }

        .nav-drawer.open .nav-drawer-panel {
          transform: translateX(0);
        }

        .nav-drawer-label {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.62rem;
          letter-spacing: 0.25em;
          color: rgba(160, 120, 60, 0.6);
          text-transform: uppercase;
          margin-bottom: 2rem;
        }

        .nav-drawer-links {
          list-style: none;
          padding: 0;
          margin: 0 0 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .nav-drawer-links li {
          border-bottom: 1px solid rgba(160, 120, 60, 0.15);
        }

        .nav-drawer-links li:first-child {
          border-top: 1px solid rgba(160, 120, 60, 0.15);
        }

        .nav-drawer-links a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: italic;
          font-size: 1.6rem;
          letter-spacing: 0.04em;
          color: #2c1f0e;
          text-decoration: none;
          padding: 1rem 0;
          transition: color 0.3s, padding-left 0.3s;
        }

        .nav-drawer-links a:hover {
          color: #b07d3a;
          padding-left: 0.5rem;
        }

        .nav-drawer-links a .arrow {
          font-size: 0.9rem;
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.3s, transform 0.3s;
          font-style: normal;
          font-family: 'Zen Kaku Gothic New', sans-serif;
        }

        .nav-drawer-links a:hover .arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .nav-drawer-reservation {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 400;
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 14px 28px;
          border: 1px solid #b07d3a;
          color: #b07d3a;
          background: transparent;
          text-align: center;
          display: block;
          transition: background 0.3s, color 0.3s;
          margin-top: auto;
        }

        .nav-drawer-reservation:hover {
          background: #b07d3a;
          color: #f5f0e6;
        }

        .nav-drawer-footer {
          margin-top: 2rem;
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 300;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: rgba(100, 70, 30, 0.4);
          text-transform: uppercase;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .nav-links,
          .nav-divider,
          .nav-reservation {
            display: none;
          }

          .nav-hamburger {
            display: flex;
          }

          .onigi-nav {
            padding: 0 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .onigi-nav {
            padding: 0 1.25rem;
          }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav className={`onigi-nav ${scrolled ? "solid" : "transparent"}`}>
        <div className="nav-inner">

          {/* Logo */}
          <Link href="/" className="nav-logo">
            <span className="nav-logo-kanji">おにぎり</span>
            <span className="nav-logo-main">
              Onigi<span className="nav-logo-dot" />
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <div className="nav-divider" />
            <Link href="/reservation" className="nav-reservation">
              <span>Reservation</span>
            </Link>

            {/* Hamburger */}
            <button
              className={`nav-hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <div className={`nav-drawer ${menuOpen ? "open" : ""}`}>
        <div
          className="nav-drawer-backdrop"
          onClick={() => setMenuOpen(false)}
        />
        <div className="nav-drawer-panel">
          <p className="nav-drawer-label">Navigation</p>

          <ul className="nav-drawer-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                  <span className="arrow">→</span>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/reservation"
            className="nav-drawer-reservation"
            onClick={() => setMenuOpen(false)}
          >
            Book a Table
          </Link>

          <p className="nav-drawer-footer">Japanese Cuisines & Sushi Bar</p>
        </div>
      </div>
    </>
  );
}