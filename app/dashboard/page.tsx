"use client";
import Navbar from "@/components/navbar/Navbar";
import "./page.css";
import { useState } from "react";

export default function WaitingListPage() {
  const [active, setActive] = useState<string>();
  const dropdown = [
    { label: "Dashboard", icon: "grid" },
    { label: "Pesanan", icon: "list" },
    { label: "Pendapatan", icon: "trending-up" },
    { label: "Pengiriman", icon: "truck" },
  ];

  return (
    <>
      <div className="waitinglistcontainer flex flex-col w-full min-h-screen">
        <div className="navbar-content flex justify-center items-center bg-black w-full h-15">
          <h1 className="text-white text-2xl font-semibold">
            Copyright by Onigi@2026
          </h1>
        </div>
        <div className="waitinglistwrapper w-full h-screen flex gap-5 mt-10">
          <div className="sidebar w-1/5 h-full bg-white border-r border-gray-100 px-3 py-6 flex flex-col gap-1">
            
          </div>

          <div className="maincontent dashboard-content w-4/5 h-full"></div>
        </div>
      </div>
    </>
  );
}
