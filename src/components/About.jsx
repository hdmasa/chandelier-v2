"use client";

import React, { useRef, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import Head from 'next/head';

export default function VideoShowcase({
  videoSrc = "/videos/video.mp4",
  poster = null,
  title = "لوکس‌ترین لوسترهای ابری در ایران | تولید مستقیم کارخانه ستاره یخی",
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
    if (window.gtag) {
      window.gtag('event', 'view_products_click', {
        'event_category': 'engagement',
        'event_label': 'video_showcase_cta',
        'device_type': deviceType
      });
    }
    window.location.href = "/products";
  };

  // Structured Data (unchanged - SEO optimization remains)
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ستاره یخی",
    "description": "تولید کننده انحصاری لوسترهای ابری لوکس با کریستال های اصل و تکنولوژی کنترل از راه دور",
    "url": "https://www.setareyakhi.ir",
    "logo": "https://www.setareyakhi.ir/logo.png",
    "founder": "ستاره یخی",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IR",
      "addressRegion": "تهران"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+98-21-12345678",
      "contactType": "پشتیبانی مشتریان",
      "availableLanguage": ["Persian"]
    },
    "sameAs": [
      "https://www.instagram.com/setareyakhi",
      "https://www.linkedin.com/company/setareyakhi"
    ]
  };

  const videoStructuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "فرآیند تولید لوسترهای ابری لوکس - ستاره یخی",
    "description": "تماشای مراحل ساخت و تولید لوسترهای ابری با کریستال های اصل و تکنولوژی کنترل از راه دور در کارخانه ستاره یخی",
    "thumbnailUrl": "https://www.setareyakhi.ir/video-thumbnail.jpg",
    "uploadDate": "2025-01-19T08:00:00+03:30",
    "duration": "PT2M30S",
    "contentUrl": `https://www.setareyakhi.ir${videoSrc}`,
    "embedUrl": `https://www.setareyakhi.ir/about`,
    "publisher": {
      "@type": "Organization",
      "name": "ستاره یخی",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.setareyakhi.ir/logo.png",
        "width": 180,
        "height": 60
      }
    },
    "transcript": "این ویدیو مراحل ساخت لوستر ابری با کریستال اصل را نشان می دهد...",
    "interactionCount": "1254",
    "author": {
      "@type": "Organization",
      "name": "ستاره یخی"
    }
  };

  const aboutFAQStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "لوسترهای ابری ستاره یخی از چه مواد اولیه ای ساخته می شوند؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "لوسترهای ما از کریستال های با کیفیت و اصل اروپایی ساخته شده اند. هر قطعه کریستال با دقت وسواس گونه برش و تراش داده می شود تا درخششی مشابه الماس ایجاد کند و نور را به زیباترین شکل ممکن بازتاب دهد."
        }
      },
      {
        "@type": "Question",
        "name": "آیا لوسترهای شما قابلیت کنترل از راه دور دارند؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "بله، تمامی محصولات ما مجهز به سیستم کنترل از راه دور پیشرفته و اپلیکیشن موبایل هستند که امکان تنظیم نور، رنگ و شدت روشنایی را از راه دور فراهم می کند."
        }
      },
      {
        "@type": "Question",
        "name": "نحوه نصب و راه اندازی لوسترهای ابری چگونه است؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "تیم نصب حرفه ای ما به صورت رایگان در سراسر ایران لوستر را برای شما نصب و راه اندازی می کند. همچنین پشتیبانی 24 ساعته برای پاسخگویی به سوالات فنی داریم."
        }
      },
      {
        "@type": "Question",
        "name": "گارانتی و خدمات پس از فروش محصولات چگونه است؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "کلیه محصولات ما دارای 2 سال گارانتی طلایی و 10 سال خدمات پس از فروش می باشند. تیم پشتیبانی ما همیشه آماده پاسخگویی و خدمات رسانی است."
        }
      },
      {
        "@type": "Question",
        "name": "آیا امکان طراحی لوستر اختصاصی وجود دارد؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "قطعاً! تیم طراحی ما آماده ارائه خدمات طراحی اختصاصی متناسب با دکوراسیون و سلیقه شما می باشد. از طرح های کلاسیک تا مدرن را می توانیم اجرا کنیم."
        }
      }
    ]
  };

  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "لوستر ابری لوکس با کریستال اصل",
    "description": "لوستر ابری دست ساز با کریستال های اصل اروپایی، کنترل از راه دور و طراحی اختصاصی - مناسب برای فضاهای لوکس و مدرن",
    "brand": {
      "@type": "Brand",
      "name": "ستاره یخی"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "IRR",
      "price": "15000000",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "ستاره یخی"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  // Device detection (unchanged)
  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      const userAgent = navigator.userAgent.toLowerCase();
      
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

  // Video auto-play (unchanged)
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
            const playPromise = el.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {});
            }
          } else {
            el.pause();
          }
        });
      },
      { 
        threshold: [0, 0.25, 0.45, 0.75, 1],
        rootMargin: '0px 0px -10% 0px'
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Desktop Layout with smaller text
  const renderDesktop = () => (
    <section 
      id='about' 
      className="py-[80px] bg-[#1C1C1C]"
      itemScope 
      itemType="https://schema.org/AboutPage"
    >
      <Head>
        <title>لوستر ابری لوکس با کریستال اصل | تولید مستقیم ستاره یخی | قیمت کارخانه</title>
        <meta 
          name="description" 
          content="تولید کننده انحصاری لوسترهای ابری لوکس با کریستال های اصل اروپایی ✅ کنترل از راه دور ✅ طراحی اختصاصی ✅ قیمت مستقیم کارخانه ✅ گارانتی 2 ساله" 
        />
        <meta 
          name="keywords" 
          content="لوستر ابری, لوستر کریستال, لوستر لوکس, ستاره یخی, قیمت لوستر, لوستر مدرن, لوستر کلاسیک, کنترل از راه دور" 
        />
        <meta property="og:title" content="لوستر ابری لوکس با کریستال اصل | ستاره یخی" />
        <meta property="og:description" content="تولید کننده انحصاری لوسترهای ابری با کریستال های اصل و تکنولوژی کنترل از راه دور" />
        <meta property="og:image" content="https://www.setareyakhi.ir/og-image.jpg" />
        <meta property="og:url" content="https://www.setareyakhi.ir/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.setareyakhi.ir/about" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutFAQStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }}
        />
      </Head>

      <div className="relative flex flex-row items-center" itemScope itemType="https://schema.org/VideoObject">
        {/* Video - Right Side */}
        <div className="w-2/3 relative h-[500px] flex items-center justify-center">
          <video
            ref={videoRef}
            className="w-[40vw] h-[28vw] object-cover"
            src={videoSrc}
            poster={poster ?? undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="نمایش ویدیویی فرآیند تولید لوسترهای ابری لوکس با کریستال های اصل در کارخانه ستاره یخی"
            title="فرآیند ساخت لوستر ابری لوکس - ستاره یخی | قیمت مستقیم کارخانه"
            itemProp="contentUrl"
          />
        </div>

        {/* Text - Left Side with smaller text sizes */}
        <div className="w-1/2 pb-[1.5vw] flex flex-col justify-center pr-[6vw]">
          <div className="text-right">
            {/* Smaller title - from text-4xl to text-3xl */}
            <h1 className="font-extrabold text-[#fff] whitespace-pre-line leading-tight text-3xl mb-4" itemProp="headline">
              {title}
            </h1>

            {/* Smaller description - from text-base to text-sm */}
            <div itemProp="description">
              <p className="text-sm text-[#fff] leading-relaxed opacity-90">
                {description}
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-6" role="complementary" aria-label="فراخوان اقدام برای مشاهده محصولات">
              <Button
                onClick={handleViewProducts}
                variant="outlined"
                size="small"
                endIcon={<ArrowForward />}
                aria-label="مشاهده محصولات لوستر ابری با قیمت مستقیم کارخانه و گارانتی 2 ساله"
                title="خرید لوستر ابری لوکس از تولید کننده مستقیم - ستاره یخی"
                sx={{
                  border: "1px solid #FFFEF7",
                  color: "#FFFEF7",
                  backgroundColor: "transparent",
                  px: 1,
                  py: 0.8,
                  fontSize: "1rem", // Smaller button text
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: 0,
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
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
                مشاهده محصولات و قیمت کارخانه
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Tablet Layout with smaller text
  const renderTablet = () => (
    <section id='about' className="py-[40px] bg-[#1C1C1C]">
      <Head>
        <title>لوستر ابری لوکس | تولید مستقیم ستاره یخی | قیمت کارخانه</title>
        <meta name="description" content="لوستر ابری با کریستال اصل و کنترل از راه دور - قیمت مستقیم از کارخانه ستاره یخی با گارانتی طلایی" />
      </Head>
      
      <div className="flex flex-col items-center">
        {/* Video Section */}
        <div className="w-[500px] px-4">
          <div className="relative h-[350px] flex items-center justify-center">
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
              aria-label="ویدیوی تولید لوستر ابری ستاره یخی"
              title="لوستر ابری لوکس - ستاره یخی"
            />
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          </div>
        </div>

        {/* Text Section with smaller text */}
        <div className="w-full px-[40px] mt-6">
          <div className="text-right">
            {/* Smaller title - from text-3xl to text-2xl */}
            <h1 className="font-extrabold text-[#fff] whitespace-pre-line leading-tight text-2xl mb-3">
              {title}
            </h1>

            {/* Smaller description - from text-base to text-sm */}
            <p className="text-sm text-[#fff] leading-relaxed opacity-90">{description}</p>

            <Button
              onClick={handleViewProducts}
              variant="outlined"
              size="small"
              endIcon={<ArrowForward />}
              aria-label="مشاهده محصولات لوستر ابری"
              sx={{
                border: "1px solid #FFFEF7",
                color: "#FFFEF7",
                backgroundColor: "transparent",
                px: 1.5,
                py: 1,
                fontSize: "0.9rem", // Smaller button text
                fontWeight: 600,
                textTransform: "none",
                borderRadius: 0,
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                marginTop: "16px",
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
              مشاهده محصولات و قیمت
            </Button>
          </div>
        </div>
      </div>
    </section>
  );

  // Mobile Layout with smaller text
  const renderMobile = () => (
    <section id='about' className="py-[8px] bg-[#1C1C1C]">
      <Head>
        <title>لوستر ابری | ستاره یخی | قیمت کارخانه</title>
        <meta name="description" content="لوستر ابری با کریستال اصل - خرید از تولید کننده با قیمت مستقیم" />
      </Head>
      
      <div className="flex flex-col items-center">
        {/* Video Section */}
        <div className="w-full px-[8px]">
          <div className="relative h-[250px] flex items-center justify-center">
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
              aria-label="ویدیوی لوستر ابری"
              title="لوستر ابری ستاره یخی"
            />
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          </div>
        </div>

        {/* Text Section with smaller text */}
        <div className="w-full px-[16px] mt-4">
          <div className="text-right">
            {/* Smaller title - from text-2xl to text-xl */}
            <h1 className="font-extrabold text-[#fff] whitespace-pre-line leading-tight text-xl mb-2">
              {title}
            </h1>

            {/* Smaller description - from text-sm to text-xs */}
            <p className="text-xs text-[#fff] leading-relaxed opacity-90">{description}</p>

            <Button
              onClick={handleViewProducts}
              variant="outlined"
              size="small"
              endIcon={<ArrowForward />}
              sx={{
                border: "1px solid #FFFEF7",
                color: "#FFFEF7",
                backgroundColor: "transparent",
                px: 1.2,
                py: 0.8,
                fontSize: "0.8rem", // Smaller button text
                fontWeight: 600,
                textTransform: "none",
                borderRadius: 0,
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                marginTop: "12px",
                marginBottom: "60px",
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

  return (
    <>
      {deviceType === 'desktop' && renderDesktop()}
      {deviceType === 'tablet' && renderTablet()}
      {deviceType === 'mobile' && renderMobile()}
    </>
  );
}