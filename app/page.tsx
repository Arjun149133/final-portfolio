"use client";
import React, { useState } from "react";
import StarsCanvas from "@components/StarsCanvas";
import HeroSection from "@components/HeroSection";
import Navbar from "@components/Navbar";
import SmallNav from "@components/SmallNav";
import About from "@components/About";
import Signature from "@components/Signature";
import Skills from "@components/Skills";
import Projects from "@components/Projects";
import Footer from "@components/Footer";
import Contact from "@components/Contact";

//just a commit 7
export default function Home() {
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);

  const toggleAnimation = () => {
    setIsAnimationPaused(!isAnimationPaused);
  };
  return (
    <main className="flex min-h-screen flex-col bg-[#000000]">
      <StarsCanvas isPaused={isAnimationPaused} />
      <Signature img="/arj.svg" />
      <Navbar
        toggleAnimation={toggleAnimation}
        isAnimationPaused={isAnimationPaused}
      />
      <SmallNav
        toggleAnimation={toggleAnimation}
        isAnimationPaused={isAnimationPaused}
      />
      <div className="z-20 container mx-auto px-4 sm:px-12 overflow-hidden">
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
