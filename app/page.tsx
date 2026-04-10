"use client";

// import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import WhoWeAre from "@/components/about/About";
import HealthyFood from "@/components/hook/Hook";
import Services from "@/components/services/Services";
import Menu from "@/components/menu/Menu";
import MenuSection from "@/components/MenuSection/MenuSection";
import Banner from "@/components/banner/Banner";
import Review from "@/components/review/Review";
import OurChefs from "@/components/chefs/Chefs";
import Contact from "@/components/contact/Contact";
// import Reservation from "@/components/form/Form";
import Footer from "@/components/footer/Footer";
import "./mainpage.css";
// import { useState, useEffect, useRef } from "react";

export default function Home() {
  
  return (
    <>
      <div className="container-contents w-full h-screen  bg-lime-200">
        <Navbar />
        <Hero />
        <div className="main">
          <WhoWeAre />
          <HealthyFood />
          <Services />
          <Menu />
          <MenuSection />
          <Banner />
          <Review />
          <OurChefs />
          <Contact />
          {/* <Reservation /> */}
          <Footer />
          
        </div>
      </div>
    </>
  );
} 