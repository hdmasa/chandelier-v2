"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

export default function VideoShowcase({
  videoSrc = "/videos/video.mp4",
  poster = null,
  title = "لوکس‌ترین لوسترها",
  description = `.ستاره یخی اولین و تنها تولیدکننده لوسترهای ابری در ایران هستیم. ما هنر و فناوری را ترکیب کرده‌ایم تا فضایی خاص و مدرن خلق کنیم
 . کیفیت بی‌نظیر، طراحی اختصاصی، اپلیکیشن و ریموت کنترل و همچنین پشتیبانی همیشگی دلیل انتخاب ما توسط مشتریان است
 شما می‌توانید در هر زمان از شبانه‌روز با ما تماس بگیرید. تیم ما آماده پاسخگویی و ارائه خدمات به شماست`
 
})
 {
  const videoRef = useRef(null);

  // Button click handler
  const handleViewProducts = () => {
    window.location.href = "/products";
  };

  // Play video only when visible
  useEffect(() => {
    const el = videoRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      el?.play().catch(() => {});
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!el) return;
          if (entry.isIntersecting && entry.intersectionRatio > 0.45) {
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        });
      },
      { threshold: [0, 0.25, 0.45, 0.75, 1] }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="pt-[20vw] pb-[10px] bg-white text-black overflow-hidden mt-32 md:mt-40 lg:mt-56">
      <div className="max-w-7xl  relative mx-auto flex flex-row lg:flex-row items-stretch">
        {/* LEFT: Video (50%) */}
        <div className="w-full lg:w-2/3 relative h-[300px] md:h-[420px] lg:h-[560px] flex justify-center items-center">
          <video
            ref={videoRef}
            className="w-[30vw] h-[20vw] object-cover"
            src={videoSrc}
            poster={poster ?? undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="نمایش ویدیویی لوستر"
          />
          {/* Small screen overlay for readability */}
          <div className="absolute inset-0 bg-black/20 lg:hidden pointer-events-none" />
        </div>

        {/* RIGHT: Text (50%) */}
        <div className="w-full lg:w-1/2 bg-[#000] pb-[6vw] sm:p-10 md:p-14 flex flex-col justify-center pr-[8vw]">
          <div className="max-w-lg mx-auto lg:mx-0 text-right">
            <h2 className="text-[#d4af37] font-extrabold whitespace-pre-line leading-tight text-2xl md:text-4xl">
              {title}
            </h2>

            <p className="mt-6 text-sm md:text-base text-white/90 leading-relaxed ">
              {description}
            </p>

            <Button
              onClick={handleViewProducts}
              variant="outlined"
              size="small"
              endIcon={<ArrowForward />}
              sx={{
                border: "2px solid #FFFEF7",
                color: "#FFFEF7",
                backgroundColor: "transparent",
                px: 3,
                py: 2,

                fontSize: { xs: "0.8rem", md: "1.2rem" },
                fontWeight: 600,
                textTransform: "none",
                borderRadius: 0,
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "#D4AF37",
                  color: "#D4AF37",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                },
                "&:active": {
                  transform: "translateY(0px)",
                },
              }}
            >
              مشاهده محصولات
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
