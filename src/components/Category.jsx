"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from 'next/head';

const categories = [
  {
    id: "category1",
    title: "لوستر دوناتی | طراحی مدرن و کلاسیک",
    description: "لوستر دوناتی با کریستال های اصل - مناسب برای دکوراسیون مدرن و کلاسیک",
    image: "/donat1.png",
    slug: "donati-chandeliers"
  },
  {
    id: "category2",
    title: "لوستر ابری | شیک و لوکس",
    description: "لوستر ابری با تکنولوژی کنترل از راه دور - طراحی شیک و لوکس برای فضای نشیمن",
    image: "/cloud1.png",
    slug: "cloud-chandeliers"
  },
  {
    id: "category3",
    title: "آباژور | روشنایی مدرن",
    description: "آباژورهای طراحی شده با کریستال اصل - مناسب برای میزهای کنار تخت و پذیرایی",
    image: "/aboj1.png",
    slug: "lamp-shades"
  },
  {
    id: "category4",
    title: "لوستر طرح عدس | کلاسیک اروپایی",
    description: "لوستر طرح عدس با کریستال های برش خورده - طراحی کلاسیک و اروپایی",
    image: "/adas1.png",
    slug: "lentil-chandeliers"
  },
  {
    id: "category5",
    title: "لوستر مربعی | طراحی مدرن",
    description: "لوستر مربعی با طراحی هندسی مدرن - مناسب برای فضاهای کار و مطالعه",
    image: "/squre1.png",
    slug: "square-chandeliers"
  },
];

export default function Categories() {
  const [deviceType, setDeviceType] = useState('desktop');

  // Enhanced Structured Data for SEO
  const categoryStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "دسته بندی محصولات لوستر ستاره یخی",
    "description": "انواع لوسترهای لوکس و مدرن شامل لوستر دوناتی، لوستر ابری، آباژور، لوستر طرح عدس و لوستر مربعی",
    "url": "https://www.setareyakhi.ir/categories",
    "numberOfItems": "5",
    "itemListElement": categories.map((category, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": category.title,
        "description": category.description,
        "image": `https://www.setareyakhi.ir${category.image}`,
        "url": `https://www.setareyakhi.ir/products/${category.slug}`,
        "category": "لوستر و روشنایی"
      }
    }))
  };

  // AEO FAQ for Categories
  const categoryFAQStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "کدام نوع لوستر برای فضای پذیرایی مناسب است؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "لوسترهای دوناتی و ابری برای فضای پذیرایی بسیار مناسب هستند. لوستر دوناتی برای سبک کلاسیک و لوستر ابری برای دکوراسیون مدرن پیشنهاد می شود."
        }
      },
      {
        "@type": "Question",
        "name": "آیا لوسترهای شما برای سقف های کوتاه هم مناسب هستند؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "بله، محصولاتی مانند آباژور و لوسترهای مربعی برای فضاهای با سقف کوتاه طراحی شده اند و ارتفاع کمی دارند."
        }
      },
      {
        "@type": "Question",
        "name": "تفاوت لوستر طرح عدس با دیگر مدل ها چیست؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "لوستر طرح عدس دارای کریستال های برش خورده به شکل عدس است که نور را به زیبایی شکسته و فضایی رمانتیک ایجاد می کند."
        }
      }
    ]
  };

  // Organization Schema
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ستاره یخی",
    "description": "تولید کننده لوسترهای لوکس با کریستال های اصل و طراحی اختصاصی",
    "url": "https://www.setareyakhi.ir",
    "logo": "https://www.setareyakhi.ir/logo.png"
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

  // Enhanced Desktop Layout with SEO optimizations
  const renderDesktop = () => (
    <section 
      id="categories" 
      className="bg-[#fff] py-[10px] pb-[50px]"
      itemScope 
      itemType="https://schema.org/ItemList"
    >
      {/* Enhanced Structured Data */}
      <Head>
        <title>انواع لوستر لوکس | دسته بندی محصولات ستاره یخی | قیمت کارخانه</title>
        <meta 
          name="description" 
          content="دسته بندی کامل محصولات لوستر ستاره یخی ✅ لوستر دوناتی ✅ لوستر ابری ✅ آباژور ✅ لوستر طرح عدس ✅ لوستر مربعی ✅ قیمت مستقیم کارخانه" 
        />
        <meta 
          name="keywords" 
          content="انواع لوستر, دسته بندی لوستر, لوستر دوناتی, لوستر ابری, آباژور, لوستر طرح عدس, لوستر مربعی, ستاره یخی" 
        />
        <meta property="og:title" content="دسته بندی محصولات لوستر لوکس - ستاره یخی" />
        <meta property="og:description" content="مشاهده تمامی دسته بندی های لوسترهای لوکس با کریستال اصل و طراحی اختصاصی" />
        <meta property="og:image" content="https://www.setareyakhi.ir/categories-og.jpg" />
        <meta property="og:url" content="https://www.setareyakhi.ir/categories" />
        <link rel="canonical" href="https://www.setareyakhi.ir/categories" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryFAQStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
      </Head>

      <h2 className="text-[#666] font-semibold text-center mt-[10px] pt-[30px] text-2xl" itemProp="name">
        راه حل شما برای فضای خالی خانه شما
      </h2>

      <div className="container mx-auto px-5">
        <div className="flex flex-row-reverse justify-between items-start gap-5 p-[40px]">
          {/* Right Side - Big Image */}
          <div className="w-1/2">
            <Link
              href={`/products/${categories[0].slug}`}
              className="relative block w-full h-[500px] group overflow-hidden rounded-lg shadow-2xl"
              itemScope
              itemType="https://schema.org/Product"
              aria-label={`مشاهده محصولات ${categories[0].title}`}
            >
              <Image
                src={categories[0].image}
                alt={`نمونه لوستر ${categories[0].title} - تولید ستاره یخی`}
                title={`خرید ${categories[0].title} با قیمت کارخانه`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 p-[5px]"
                itemProp="image"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all" />
              <h3 className="absolute bottom-6 w-full text-[#fff] text-xl font-semibold text-center" itemProp="name">
                {categories[0].title}
              </h3>
              <meta itemProp="description" content={categories[0].description} />
            </Link>
          </div>

          {/* Left Side - 4 Small Images Grid */}
          <div className="w-1/2 grid grid-cols-2 gap-5 p-4">
            {categories.slice(1).map((cat, index) => (
              <Link
                key={cat.id}
                href={`/products/${cat.slug}`}
                className="relative block w-full h-[250px] group overflow-hidden rounded-lg shadow-lg"
                itemScope
                itemType="https://schema.org/Product"
                aria-label={`مشاهده محصولات ${cat.title}`}
              >
                <Image
                  src={cat.image}
                  alt={`نمونه ${cat.title} - تولید ستاره یخی`}
                  title={`خرید ${cat.title} با گارانتی 2 ساله`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 p-[5px]"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all" />
                <div className="absolute bottom-4 w-full">
                  <h3 className="text-[#fff] text-lg font-semibold text-center" itemProp="name">
                    {cat.title}
                  </h3>
                </div>
                <meta itemProp="description" content={cat.description} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Hidden FAQ Content for AEO */}
      <div className="hidden" aria-hidden="true">
        <h3>سوالات متداول درباره دسته بندی محصولات</h3>
        <div itemScope itemType="https://schema.org/Question">
          <h4 itemProp="name">کدام نوع لوستر برای اتاق خواب مناسب است؟</h4>
          <div itemScope itemType="https://schema.org/Answer">
            <p itemProp="text">آباژورها و لوسترهای مربعی برای اتاق خواب بسیار مناسب هستند زیرا نور ملایم و غیرمستقیم ایجاد می کنند.</p>
          </div>
        </div>
      </div>
    </section>
  );

  // Enhanced Tablet Layout
  const renderTablet = () => (
    <section id="categories" className="bg-[#fff] py-[10px] pb-16">
      <Head>
        <title>دسته بندی لوسترهای لوکس | ستاره یخی</title>
        <meta name="description" content="مشاهده دسته بندی کامل لوسترهای لوکس با کریستال اصل - قیمت مستقیم کارخانه" />
      </Head>

      <h2 className="text-[#666] font-semibold text-center mb-8 text-xl px-5">
        راه حل شما برای فضای خالی خانه شما
      </h2>

      <div className="flex flex-col gap-[10px]">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/products/${cat.slug}`}
            className="relative block w-full aspect-square group overflow-hidden rounded-lg shadow-lg mx-auto"
            style={{ maxWidth: '500px' }}
            aria-label={`مشاهده ${cat.title}`}
          >
            <Image
              src={cat.image}
              alt={cat.title}
              title={cat.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all" />
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <h3 className="text-white text-xl font-semibold bg-black/70 px-6 py-2 rounded-lg text-center whitespace-nowrap">
                {cat.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );

  // Enhanced Mobile Layout
  const renderMobile = () => (
    <section id="categories" className="bg-[#fff] py-[10px] pb-[40px]">
      <Head>
        <title>دسته بندی لوستر | ستاره یخی</title>
        <meta name="description" content="انواع لوسترهای لوکس - مشاهده تمامی دسته بندی ها" />
      </Head>

      <h2 className="text-[#666] font-semibold text-center mb-6 text-lg px-5">
        راه حل شما برای فضای خالی خانه شما
      </h2>

      <div className="flex flex-col gap-5 px-[8px]">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/products/${cat.slug}`}
            className="relative block w-full aspect-square group overflow-hidden rounded-lg shadow-md mx-auto"
            style={{ maxWidth: '400px' }}
            aria-label={`مشاهده ${cat.title}`}
          >
            <Image
              src={cat.image}
              alt={cat.title}
              title={cat.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110 p-[1px]"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <h3 className="text-[#fff] text-base font-semibold bg-black/70 px-4 py-2 rounded text-center whitespace-nowrap">
                {cat.title}
              </h3>
            </div>
          </Link>
        ))}
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