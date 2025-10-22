'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from 'next/head';

const images = [
  { 
    image: '/chandelier-process1.jpg', 
    alt: 'مرحله اول طراحی لوستر ابری در کارخانه ستاره یخی - طراحی و نقشه کشی',
    title: 'فرآیند طراحی لوستر ابری ستاره یخی - مرحله طراحی اولیه'
  },
  { 
    image: '/chandelier-process2.jpg', 
    alt: 'مرحله دوم تولید کریستال های لوستر ابری توسط ستاره یخی - برش و پرداخت',
    title: 'تولید کریستال های لوستر ابری - کنترل کیفیت ستاره یخی'
  },
  { 
    image: '/chandelier-process3.jpg', 
    alt: 'مرحله سوم کنترل کیفیت لوسترهای ابری ستاره یخی - بازرسی نهایی',
    title: 'کنترل کیفیت لوستر ابری - استانداردهای تولید ستاره یخی'
  },
  { 
    image: '/chandelier-process4.jpg', 
    alt: 'مرحله چهارم نصب و راه اندازی لوستر ابری ستاره یخی - اجرای نهایی',
    title: 'نصب لوستر ابری - خدمات پس از فروش ستاره یخی'
  },
];

export default function LightCreateSpace() {
  const [deviceType, setDeviceType] = useState('desktop');
  
  const title = 'نور باعث تولید فضا می‌شود - فلسفه طراحی لوسترهای ابری ستاره یخی';
  const description = `هر نوری آغازگر حضوری تازه است. با تابیدن روشنایی،
  مرزها و حجم ها شکل می گیرند و فضا از سکوت به درخشش می رسد. در
  نبود نور،فضا تنها مفهومی انتزاعی است;اما با ظهور آن،جهان
  جان می گیرد و ادراک ما از زیبایی دگرگون می شود.
  ما به نور نه به عنوان یک ابزار، بلکه به عنوان زبانی برای آفرینش
  فضا می نگریم. نوری که می تواند احساس بیافریند،زمان را معنا بخشد و آرامش 
  را به محیط بیاورد.در فلسفه طراحی ما،نور ماده اولیه اندیشه است;همان
  چیزی که فضا از آن زاده می شود و انسان به گفتگو می نشیند.`

  // Enhanced Structured Data for Creative Work
  const creativeWorkStructuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWorkSeries",
    "name": "فلسفه نورپردازی در طراحی لوسترهای ابری ستاره یخی",
    "description": "تفسیر فلسفی نقش نور در خلق فضا و طراحی لوسترهای ابری مدرن توسط ستاره یخی - اولین تولیدکننده لوستر ابری در ایران",
    "author": {
      "@type": "Organization",
      "name": "ستاره یخی",
      "url": "https://setareyakhi.ir",
      "logo": "https://setareyakhi.ir/logo.png",
      "description": "اولین و تنها تولیدکننده لوسترهای ابری در ایران با طراحی منحصربه‌فرد"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ستاره یخی",
      "url": "https://setareyakhi.ir"
    },
    "image": images.map(img => `https://setareyakhi.ir${img.image}`),
    "keywords": "نورپردازی, طراحی لوستر ابری, فلسفه نور, دکوراسیون مدرن, ستاره یخی, تولید لوستر ابری, نور و فضا",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "name": "فلسفه طراحی لوسترهای ابری",
      "url": "https://setareyakhi.ir/philosophy"
    },
    "datePublished": "2024-01-01",
    "inLanguage": "fa-IR",
    "creativeWorkStatus": "Published"
  };

  // Enhanced AEO FAQ for Design Philosophy
  const designFAQStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "فلسفه طراحی لوسترهای ستاره یخی چیست؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "در فلسفه طراحی ستاره یخی، نور نه یک ابزار بلکه زبانی برای آفرینش فضا است. هر لوستر ابری باید احساس بیافریند، زمان را معنا بخشد و آرامش را به محیط بیاورد. ما به نور به عنوان ماده اولیه اندیشه می‌نگریم."
        }
      },
      {
        "@type": "Question",
        "name": "نور چگونه در طراحی لوسترهای ابری نقش دارد؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نور در لوسترهای ابری ستاره یخی مرزها و حجم ها را شکل می‌دهد و فضا را از سکوت به درخشش می‌رساند. این تبدیل از تاریکی به روشنایی، هسته اصلی فلسفه طراحی لوسترهای ابری ماست."
        }
      },
      {
        "@type": "Question",
        "name": "ستاره یخی چه نوع لوسترهایی تولید می‌کند؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ستاره یخی اولین و تنها تولیدکننده لوسترهای ابری در ایران است که با طراحی منحصربه‌فرد و فلسفه نورپردازی خاص، محصولاتی متمایز برای دکوراسیون مدرن ارائه می‌دهد."
        }
      },
      {
        "@type": "Question",
        "name": "مراحل تولید لوستر ابری در ستاره یخی چگونه است؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "فرآیند تولید لوسترهای ابری ستاره یخی شامل چهار مرحله اصلی است: طراحی و نقشه‌کشی، تولید کریستال‌ها، کنترل کیفیت دقیق، و نصب و راه‌اندازی حرفه‌ای."
        }
      }
    ]
  };

  // HowTo Structured Data for Production Process
  const productionHowToStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "فرآیند تولید لوستر ابری ستاره یخی",
    "description": "مراحل چهارگانه تولید لوسترهای ابری با کیفیت توسط ستاره یخی",
    "image": images.map(img => `https://setareyakhi.ir${img.image}`),
    "totalTime": "PT2H",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "کریستال های مرغوب"
      },
      {
        "@type": "HowToSupply", 
        "name": "سیم کشی استاندارد"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "ابزار طراحی و نقشه کشی"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "طراحی و نقشه کشی",
        "text": "مرحله اول طراحی لوستر ابری با در نظر گرفتن اصول نورپردازی و زیبایی شناسی",
        "image": `https://setareyakhi.ir${images[0].image}`
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "تولید کریستال ها",
        "text": "مرحله دوم برش و پرداخت کریستال های لوستر ابری با دقت بالا",
        "image": `https://setareyakhi.ir${images[1].image}`
      },
      {
        "@type": "HowToStep", 
        "position": 3,
        "name": "کنترل کیفیت",
        "text": "مرحله سوم بازرسی دقیق و کنترل کیفیت لوستر ابری قبل از عرضه",
        "image": `https://setareyakhi.ir${images[2].image}`
      },
      {
        "@type": "HowToStep",
        "position": 4, 
        "name": "نصب و راه اندازی",
        "text": "مرحله چهارم نصب حرفه‌ای و راه‌اندازی لوستر ابری در محل مشتری",
        "image": `https://setareyakhi.ir${images[3].image}`
      }
    ]
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

  // Desktop Layout - متن سمت راست، عکس‌ها سمت چپ
  const renderDesktop = () => (
    <section id='process' className="bg-[#fff] py-[40px]" itemScope itemType="https://schema.org/CreativeWork">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative flex flex-row-reverse items-start gap-8">
          
          {/* Text section - Right Side */}
          <div className="w-1/2 text-right text-[#000] ">
            <h1 className="text-4xl font-bold mt-[120px] leading-tight mb-3" itemProp="headline">
              {title}
            </h1>
            <p className="text-lg leading-8 whitespace-pre-line mb-6" itemProp="description">
              {description}
            </p>
            {/* Hidden semantic content for SEO */}
            <div className="hidden" aria-hidden="true">
              <span itemProp="author" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">ستاره یخی</span>
              </span>
              <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">ستاره یخی - تولید کننده لوستر ابری</span>
              </span>
              <meta itemProp="datePublished" content="2024-01-01" />
              <meta itemProp="inLanguage" content="fa-IR" />
            </div>
          </div>

          {/* Images section - Left Side */}
          <div className="relative w-1/2 h-[550px]" itemScope itemType="https://schema.org/HowTo">
            <meta itemProp="name" content="فرآیند تولید لوستر ابری ستاره یخی" />
            {images.map((item, index) => (
              <div
                key={index}
                className={`absolute 
                ${index === 0 ? 'top-[50px] right-[70px]' : ''}
                ${index === 1 ? 'top-[80px] right-[330px]' : ''}
                ${index === 2 ? 'top-[280px] right-[70px]' : ''}
                ${index === 3 ? 'top-[310px] right-[330px]' : ''}`}
                itemProp="step" itemScope itemType="https://schema.org/HowToStep"
              >
                <meta itemProp="position" content={index + 1} />
                <meta itemProp="name" content={`مرحله ${index + 1} تولید لوستر ابری`} />
                <Image
                  src={item.image}
                  alt={item.alt}
                  title={item.title}
                  width={230}
                  height={230}
                  className="object-cover rounded-md shadow-sm"
                  loading="lazy"
                  itemProp="image"
                />
                <meta itemProp="text" content={item.alt} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );

  // Tablet Layout - مشابه دسکتاپ (متن سمت راست، عکس‌ها سمت چپ)
  const renderTablet = () => (
    <section id='process' className="bg-[#fff] py-10" itemScope itemType="https://schema.org/CreativeWork">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="relative flex flex-row-reverse items-start gap-8">
          
          {/* Text section - Right Side */}
          <div className="w-1/2 text-right text-[#000] p-[50px]">
            <h1 className="text-3xl font-bold mt-6 leading-tight mb-3" itemProp="headline">
              {title}
            </h1>
            <p className="text-base leading-8 whitespace-pre-line mb-6" itemProp="description">{description}</p>
          </div>

          {/* Images section - Left Side */}
          <div className="relative w-1/2 h-[450px]">
            {images.map((item, index) => (
              <div
                key={index}
                className={`absolute 
                ${index === 0 ? 'top-[180px] right-[50px]' : ''}
                ${index === 1 ? 'top-[200px] right-[220px]' : ''}
                ${index === 2 ? 'top-[310px] right-[50px]' : ''}
                ${index === 3 ? 'top-[330px] right-[220px]' : ''}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  title={item.title}
                  width={150}
                  height={150}
                  className="object-cover rounded-md shadow-sm"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );

  // Mobile Layout - متن بالا، عکس‌ها پایین در گرید
  const renderMobile = () => (
    <section id='process' className="bg-[#fff] py-6" itemScope itemType="https://schema.org/CreativeWork">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col gap-6">
          
          {/* Text section - Top */}
          <div className="w-full text-right text-[#000] p-[20px]">
            <h1 className="text-2xl font-bold mt-4 leading-tight mb-3" itemProp="headline">
              {title}
            </h1>
            <p className="text-sm leading-7 whitespace-pre-line mb-4" itemProp="description">{description}</p>
          </div>

          {/* Images section - Bottom */}
          <div className="w-full grid grid-cols-2 gap-3 p-[10px]">
            {images.map((item, i) => (
              <div
                key={i}
                className="w-full h-[150px] rounded-md overflow-hidden shadow-sm p-[5px]"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  title={item.title}
                  width={150}
                  height={150}
                  className="object-cover w-full h-full rounded-md"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );

  // Render based on device type
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta 
          name="description" 
          content="فلسفه نورپردازی در طراحی لوسترهای ابری ستاره یخی: چگونه نور فضا می‌آفریند و تجربه‌ای منحصر به فرد از دکوراسیون مدرن خلق می‌کند." 
        />
        <meta 
          name="keywords" 
          content="فلسفه نورپردازی, طراحی لوستر ابری, دکوراسیون مدرن, نور و فضا, ستاره یخی, تولید لوستر ابری, کریستال لوستر, نورپردازی ایرانی" 
        />
        <meta name="author" content="ستاره یخی" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="فلسفه نورپردازی در طراحی لوسترهای ابری ستاره یخی - اولین تولیدکننده لوستر ابری در ایران" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`https://setareyakhi.ir${images[0].image}`} />
        <meta property="og:url" content="https://setareyakhi.ir/philosophy" />
        <meta property="og:site_name" content="ستاره یخی" />
        <meta property="og:locale" content="fa_IR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="فلسفه طراحی لوسترهای ابری ستاره یخی - نور باعث تولید فضا می‌شود" />
        <meta name="twitter:image" content={`https://setareyakhi.ir${images[0].image}`} />
        <link rel="canonical" href="https://setareyakhi.ir/philosophy" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(designFAQStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productionHowToStructuredData) }}
        />
      </Head>

      {deviceType === 'desktop' && renderDesktop()}
      {deviceType === 'tablet' && renderTablet()}
      {deviceType === 'mobile' && renderMobile()}
    </>
  );
}