"use client";

import React, { useRef, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

export default function VideoShowcase({
  videoSrc = "/videos/video.mp4",
  poster = null,
  title = "لوکس‌ترین لوسترها",
  description = `لوستر های ما حاصل ترکیبی از هنر،مهارت و تکنولوژی مدرن هستند
  ما با افتخار لوستر های را ارائه می دهیم که به صورت انحصاری از کریستال های 
  با کیفیت و اصل ساخته شده اند. هر قطعه کریستال با دقتی وسواس گونه برش و تراش داده میشود 
  تا درخششی همانند الماس ایجاد کند. این برش دقیق باعث می شود نور طبیعی در برخورد با کریستال ها
  شکسته و منعکس شود،تا طیف خیره کننده ای از رنگ ها در فضا پدید آید:جلوه ای که تنها
  از کریستال واقعی برمی آید. ما باور داریم که هر لوستر باید چیزی فراتر از یک منبع نور باشد 
  نمادی از ظرافت،اصالت و سلیقه ی خاص صاحب آن.به همین دلیل،طراحی هر محصول به صورت اختصاصی و با 
  در نظر گرفتن تناسب با فضا های کلاسیک و مدرن انجام می شود. استفاده از جدیدترین فناوری ها مانند اپلیکیشن
  کنترل از راه دور و ریموت اختصاصی،تجربه ای راحت و لذت بخش را برای شما فراهم می کند.
  تیم طراحی و پشتیبانی ما با عشق و دقت در کنار شماست تا در هر مرحله،از انتخاب تا نصب و 
  خدمات پس از فروش،تجربه ای بی نقص داشته باشید.ما نه تنها به کیفیت
  بی رقیب محصولات خود افتخار می کنیم،بلکه به تعهد همیشگی مان نسبت به رضایت مشتریان نیز پایبندیم.
  شما می توانید در هر زمان از شبانه روز با ما تماس بگیرید،مشاوران ما با صبر و دقت آماده ی
  پاسخگویی و راهنمایی شما هستند.هدف ما خلق فضایی است که در آن نور،زیبایی و هنر
  در هماهنگی کامل کنار هم بدرخشند.`
}) {
  const videoRef = useRef(null);
  const [deviceType, setDeviceType] = useState('desktop');

  const handleViewProducts = () => {
    window.location.href = "/products";
  };

  // Detect device type
  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      
      if (width >= 1024) {
        setDeviceType('desktop');
      } else if (width >= 768 && width < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('mobile');
      }
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);

    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);

  // Video auto-play with intersection observer
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

  // Desktop Layout - ویدیو سمت راست
  const renderDesktop = () => (
    <section id='about' className="py-[100px] bg-[#1C1C1C]">
      <div className="relative flex flex-row items-center">
        {/* Video - Right Side (2/3 width) */}
        <div className="w-2/3 relative h-[560px] flex items-center justify-center">
          <video
            ref={videoRef}
            className="w-[40vw] h-[30vw] object-cover"
            src={videoSrc}
            poster={poster ?? undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="نمایش ویدیویی لوستر"
          />
        </div>

        {/* Text - Left Side (1/2 width) */}
        <div className="w-1/2 pb-[2vw] flex flex-col justify-center pr-[8vw]">
          <div className="text-right">
            <h2 className="font-extrabold whitespace-pre-line leading-tight text-4xl">
              {title}
            </h2>

            <p className="text-base text-white mt-4">{description}</p>

            <Button
              onClick={handleViewProducts}
              variant="outlined"
              size="small"
              endIcon={<ArrowForward />}
              sx={{
                border: "1px solid #FFFEF7",
                color: "#FFFEF7",
                backgroundColor: "transparent",
                px: 1,
                py: 1,
                fontSize: "1.2rem",
                fontWeight: 600,
                textTransform: "none",
                borderRadius: 0,
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                marginTop: "20px",
                "&:hover": {
                  borderColor: "#dcc784ff",
                  color: "#dcc784ff",
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

  // Tablet Layout - ویدیو بالا، متن پایین
  const renderTablet = () => (
    <section id='about' className="py-[50px] bg-[#1C1C1C]">
      <div className="flex flex-col items-center">
        {/* Video - Top (Full width with 20px padding) */}
        <div className="w-[600px] px-5">
          <div className="relative h-[400px] flex items-center justify-center">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src={videoSrc}
              poster={poster ?? undefined}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="نمایش ویدیویی لوستر"
            />
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          </div>
        </div>

        {/* Text - Bottom (Full width with 20px padding) */}
        <div className="w-full px-[50px] mt-8">
          <div className="text-right">
            <h2 className="font-extrabold whitespace-pre-line leading-tight text-3xl">
              {title}
            </h2>

            <p className="text-base text-white mt-4">{description}</p>

            <Button
              onClick={handleViewProducts}
              variant="outlined"
              size="small"
              endIcon={<ArrowForward />}
              sx={{
                border: "1px solid #FFFEF7",
                color: "#FFFEF7",
                backgroundColor: "transparent",
                px: 2,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "none",
                borderRadius: 0,
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                marginTop: "20px",
                "&:hover": {
                  borderColor: "#dcc784ff",
                  color: "#dcc784ff",
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

  // Mobile Layout - ویدیو بالا، متن پایین
  const renderMobile = () => (
    <section id='about' className="py-[12px] bg-[#1C1C1C]">
      <div className="flex flex-col items-center">
        {/* Video - Top (Full width with 20px padding) */}
        <div className="w-full px-[10px]">
          <div className="relative h-[300px] flex items-center justify-center">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src={videoSrc}
              poster={poster ?? undefined}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="نمایش ویدیویی لوستر"
            />
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          </div>
        </div>

        {/* Text - Bottom (Full width with 20px padding) */}
        <div className="w-full px-[20px] mt-6">
          <div className="text-right">
            <h2 className="font-extrabold whitespace-pre-line leading-tight text-2xl">
              {title}
            </h2>

            <p className="text-sm text-white mt-4">{description}</p>

            <Button
              onClick={handleViewProducts}
              variant="outlined"
              size="small"
              endIcon={<ArrowForward />}
              sx={{
                border: "1px solid #FFFEF7",
                color: "#FFFEF7",
                backgroundColor: "transparent",
                px: 2,
                py: 1,
                fontSize: "0.9rem",
                fontWeight: 600,
                textTransform: "none",
                borderRadius: 0,
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                marginButton: "90px",
                justifyContent:'center',
                "&:hover": {
                  borderColor: "#dcc784ff",
                  color: "#dcc784ff",
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

  // Render based on device type
  return (
    <>
      {deviceType === 'desktop' && renderDesktop()}
      {deviceType === 'tablet' && renderTablet()}
      {deviceType === 'mobile' && renderMobile()}
    </>
  );
}