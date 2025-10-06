"use client";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Hero from "../components/Hero";
import Category from "../components/Category";
import About from "../components/About";
import { useEffect } from "react";
import ThreeDShowcase from "../components/ThreeDshowcase";
import Products from '../components/Products';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  useEffect(() => {
    // Example animation for Persian layout
    gsap.from("main", { opacity: 0, duration: 1.2, ease: "power2.out" });
  }, []);

  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <Category />
      <About/>
      <ThreeDShowcase/>
      <Products/>
    </main>
  );
}
