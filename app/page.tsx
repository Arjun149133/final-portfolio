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

export default function Home() {
  const [isAnimationPaused, setIsAnimationPaused] = useState(true);

  const toggleAnimation = () => {
    setIsAnimationPaused(!isAnimationPaused);
  };
  return (
    <main className="flex min-h-screen flex-col bg-[#000000]">
      <StarsCanvas isPaused={isAnimationPaused} />
      <Signature />
      <Navbar
        toggleAnimation={toggleAnimation}
        isAnimationPaused={isAnimationPaused}
      />
      <div className="z-20 container mx-auto px-12 ">
        <HeroSection />
        <About />
        <Skills />
        <Projects />
      </div>
      <SmallNav
        toggleAnimation={toggleAnimation}
        isAnimationPaused={isAnimationPaused}
      />
    </main>
  );
}
