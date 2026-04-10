"use client";

import React, { useState } from "react";


const timeSlots = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
  "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM",
  "08:00 PM", "08:30 PM", "09:00 PM",
];


export default function Reservation() {


  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    date: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event : any) => {
    const {name, value} = event.target
    setForm(prev => ({
      ...prev,
      [name] : value
    }))
  };

  // const handleSubmit = () => {
  //   e.preventDefault();
  //   setSubmitted(true);
  // };

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  }

  const today = new Date().toISOString().split("T")[0];

  if (submitted) {
    return (
      <>
        <style>{styles}</style>
        <div className="rf-success">
          <div className="rf-success-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="23" stroke="#b8956a" strokeWidth="1.5" />
              <path d="M14 24l8 8 12-14" stroke="#b8956a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="rf-success-kanji">予約完了</p>
          <h3 className="rf-success-title">Reservation Received</h3>
          <p className="rf-success-sub">
            Thank you, <strong>{form.name}</strong>. We look forward to welcoming you on <strong>{form.date}</strong> at <strong>{form.time}</strong>.
          </p>
          <p className="rf-success-note">A confirmation will be sent to {form.email}</p>
          <button className="rf-reset" onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", guests: "", date: "", time: "" }); }}>
            Make Another Reservation
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{styles}</style>

      <div className="reservationcontainer w-full h-screen bg-[#f5f0e6] pt-10 pb-10">
<section className="rf-wrapper">
        {/* Header */}
        <div className="rf-header">
          <span className="rf-label">ご予約</span>
          <h2 className="rf-title">Reserve Your <em>Table</em></h2>
          <p className="rf-subtitle">
            Join us for an unforgettable dining experience. Fill in the details below and we will hold your table.
          </p>
        </div>

        <form className="rf-form" onSubmit={handleSubmit} noValidate>
          {/* Row 1: Name + Phone */}
          <div className="rf-row">
            <div className={`rf-field ${focused === "name" || form.name ? "rf-active" : ""}`}>
              <label htmlFor="name">Full Name</label>
              <div className="rf-input-wrap">
                <svg className="rf-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
                <input
                  type="text" id="name" name="name" value={form.name}
                  onChange={handleChange}
                  placeholder="Hiroshi Tanaka" required
                />
              </div>
            </div>

            <div className={`rf-field ${focused === "phone" || form.phone ? "rf-active" : ""}`}>
              <label htmlFor="phone">Phone Number</label>
              <div className="rf-input-wrap">
                <svg className="rf-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6.6 10.8a15.2 15.2 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11.5 11.5 0 003.6.57 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 012 5a1 1 0 011-1h3.5a1 1 0 011 1 11.5 11.5 0 00.57 3.6 1 1 0 01-.25 1L6.6 10.8z" />
                </svg>
                <input
                  type="tel" id="phone" name="phone" value={form.phone}
                  onChange={handleChange}
                  placeholder="+62 812 3456 7890" required
                />
              </div>
            </div>
          </div>

          {/* Row 2: Email */}
          <div className={`rf-field rf-full ${focused === "email" || form.email ? "rf-active" : ""}`}>
            <label htmlFor="email">Email Address</label>
            <div className="rf-input-wrap">
              <svg className="rf-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 8l10 7 10-7" />
              </svg>
              <input
                type="email" id="email" name="email" value={form.email}
                onChange={handleChange}
                placeholder="your@email.com" required
              />
            </div>
          </div>

          {/* Row 3: Guests + Date + Time */}
          <div className="rf-row rf-row-3">
            <div className={`rf-field ${focused === "guests" || form.guests ? "rf-active" : ""}`}>
              <label htmlFor="guests">Guests</label>
              <div className="rf-input-wrap rf-select-wrap">
                <svg className="rf-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="9" cy="7" r="3" /><path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
                  <circle cx="17" cy="8" r="2.5" /><path d="M19 20c0-2.5 2-4.5 4-4.5" />
                </svg>
                <select id="guests" name="guests" value={form.guests}
                  onChange={handleChange}>
                  <option value="" disabled>— Persons</option>
                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? "Person" : "Persons"}</option>
                  ))}
                  <option value="10+">10+ Persons</option>
                </select>
                <svg className="rf-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>

            <div className={`rf-field ${focused === "date" || form.date ? "rf-active" : ""}`}>
              <label htmlFor="date">Date</label>
              <div className="rf-input-wrap">
                <svg className="rf-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                <input
                  type="date" id="date" name="date" value={form.date} min={today}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={`rf-field ${focused === "time" || form.time ? "rf-active" : ""}`}>
              <label htmlFor="time">Time</label>
              <div className="rf-input-wrap rf-select-wrap">
                <svg className="rf-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
                </svg>
                <select id="time" name="time" value={form.time}
                  onChange={handleChange}>
                  <option value="" disabled>— Select</option>
                  {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                <svg className="rf-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Divider ornament */}
          <div className="rf-divider">
            <span />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#b8956a" opacity="0.5">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14l-4-4h3V8h2v4h3l-4 4z" />
            </svg>
            <span />
          </div>

          <button type="submit" className="rf-submit">
            <span>Confirm Reservation</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>

          <p className="rf-note">
            Need help? Call us at <a href="tel:+622120022012">+6221 2002 2012</a>
          </p>
        </form>
      </section>
      </div>

      
    </>
  );
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

  .rf-wrapper {
    font-family: 'DM Sans', sans-serif;
    color: #1a1a18;
    padding: 72px 48px;
    max-width: 860px;
    margin: 0 auto;
    position: relative;
  }

  .rf-wrapper::before {
    content: '';
    position: absolute;
    top: 0; left: 48px; right: 48px;
    height: 1px;
    background: linear-gradient(to right, transparent, #d4b896, transparent);
  }

  /* Header */
  .rf-header {
    text-align: center;
    margin-bottom: 52px;
  }

  .rf-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #b8956a;
    display: block;
    margin-bottom: 14px;
  }

  .rf-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(36px, 5vw, 52px);
    font-weight: 500;
    line-height: 1.1;
    color: #1a1a18;
    margin: 0 0 16px;
    letter-spacing: -0.01em;
  }

  .rf-title em {
    font-style: italic;
    color: #b8956a;
  }

  .rf-subtitle {
    font-size: 15px;
    font-weight: 300;
    color: #6b6b67;
    max-width: 480px;
    margin: 0 auto;
    line-height: 1.7;
  }

  /* Form layout */
  .rf-form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .rf-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .rf-row-3 {
    grid-template-columns: 1fr 1.4fr 1.2fr;
  }

  .rf-full {
    width: 100%;
  }

  /* Field */
  .rf-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .rf-field label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #999990;
    transition: color 0.2s;
  }

  .rf-field.rf-active label {
    color: #b8956a;
  }

  /* Input wrap */
  .rf-input-wrap {
    position: relative;
    display: flex;
    align-items: center;
  }

  .rf-icon {
    position: absolute;
    left: 14px;
    color: #c5c5bc;
    pointer-events: none;
    transition: color 0.2s;
    flex-shrink: 0;
  }

  .rf-field.rf-active .rf-icon {
    color: #b8956a;
  }

  .rf-input-wrap input,
  .rf-input-wrap select {
    width: 100%;
    padding: 13px 14px 13px 40px;
    background: #faf9f7;
    border: 1px solid #e8e4de;
    border-radius: 6px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #1a1a18;
    outline: none;
    transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
    appearance: none;
    -webkit-appearance: none;
  }

  .rf-input-wrap input::placeholder {
    color: #c5c5bc;
  }

  .rf-input-wrap input:focus,
  .rf-input-wrap select:focus {
    border-color: #b8956a;
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(184, 149, 106, 0.08);
  }

  /* Date input fix */
  .rf-input-wrap input[type="date"] {
    cursor: pointer;
  }

  /* Select */
  .rf-select-wrap .rf-chevron {
    position: absolute;
    right: 12px;
    color: #b8956a;
    pointer-events: none;
  }

  .rf-input-wrap select {
    cursor: pointer;
    padding-right: 36px;
  }

  /* Divider */
  .rf-divider {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 4px 0;
  }

  .rf-divider span {
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, transparent, #e8e4de);
  }

  .rf-divider span:last-child {
    background: linear-gradient(to left, transparent, #e8e4de);
  }

  /* Submit */
  .rf-submit {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    padding: 16px 32px;
    background: #1a1a18;
    color: #f5f0e8;
    border: none;
    border-radius: 6px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.25s, transform 0.15s;
  }

  .rf-submit:hover {
    background: #b8956a;
    transform: translateY(-1px);
  }

  .rf-submit:active {
    transform: translateY(0);
  }

  .rf-note {
    text-align: center;
    font-size: 13px;
    color: #aaa;
    margin: 0;
  }

  .rf-note a {
    color: #b8956a;
    text-decoration: none;
    font-weight: 500;
  }

  .rf-note a:hover {
    text-decoration: underline;
  }

  /* Success state */
  .rf-success {
    font-family: 'DM Sans', sans-serif;
    background: #ffffff;
    text-align: center;
    padding: 80px 48px;
    max-width: 560px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    animation: rfFadeIn 0.5s ease;
  }

  .rf-success-icon {
    margin-bottom: 8px;
    animation: rfPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .rf-success-kanji {
    font-family: 'Cormorant Garamond', serif;
    font-size: 13px;
    letter-spacing: 0.2em;
    color: #b8956a;
    margin: 0;
  }

  .rf-success-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 40px;
    font-weight: 500;
    color: #1a1a18;
    margin: 4px 0 8px;
  }

  .rf-success-sub {
    font-size: 15px;
    font-weight: 300;
    color: #444;
    line-height: 1.7;
    margin: 0;
  }

  .rf-success-note {
    font-size: 13px;
    color: #aaa;
    margin: 0;
  }

  .rf-reset {
    margin-top: 16px;
    padding: 11px 28px;
    background: transparent;
    border: 1px solid #d4b896;
    border-radius: 6px;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #b8956a;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
  }

  .rf-reset:hover {
    background: #b8956a;
    color: #fff;
  }

  @keyframes rfFadeIn {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes rfPop {
    from { transform: scale(0.5); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }

  /* Responsive */
  @media (max-width: 640px) {
    .rf-wrapper { padding: 48px 24px; }
    .rf-row { grid-template-columns: 1fr; }
    .rf-row-3 { grid-template-columns: 1fr; }
  }
`;

