// src/app/page.jsx
"use client";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useEffect } from "react";
import Hero from "@/src/components/Hero";
import Category from "@/src/components/Category";
import About from "@/src/components/About";
import Process from "@/src/components/Process";
import ThreeDShowcase from "@/src/components/ThreeDshowcase";
import Product from "@/src/components/Product";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  useEffect(() => {
    gsap.from("main", { opacity: 0, duration: 1.2, ease: "power2.out" });
  }, []);

  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <Category />
      <About />
      <Process />
      <ThreeDShowcase />
      <Product />
    </main>
  );
}