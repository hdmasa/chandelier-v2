"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    id: "category1",
    title: "لوستر دوناتی",
    image: "/donat1.png",
  },
  {
    id: "category2",
    title: "لوستر ابری",
    image: "/cloud1.png",
  },
  {
    id: "category3",
    title: "آباژور",
    image: "/aboj1.png",
  },
  {
    id: "category4",
    title: "لوستر طرح عدس",
    image: "/adas1.png",
  },
  {
    id: "category5",
    title: "لوستر مربعی",
    image: "/squre1.png",
  },
];

export default function Categories() {
  const [deviceType, setDeviceType] = useState('desktop');

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

  // Desktop Layout - ارتفاع عکس بزرگ برابر با دو عکس کوچک + پدینگ
  const renderDesktop = () => (
    <section id="categories" className="bg-[#fff] py-[10px] pb-[50px]">
      <h2 className="text-[#666] font-semibold text-center mt-[10px]  pt-[30px]">
        راه حل شما برای فضای خالی خانه شما
      </h2>

      <div className="container mx-auto px-5">
        <div className="flex flex-row-reverse justify-between items-start gap-5 p-[40px]">
          {/* Right Side - Big Image - ارتفاع برابر با دو عکس کوچک */}
          <div className="w-1/2">
            <Link
              href="/products"
              className="relative block w-full h-[500px] group overflow-hidden rounded-lg shadow-2xl "
            >
              <Image
                src={categories[0].image}
                alt={categories[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 p-[5px]"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all" />
              <h3 className="absolute bottom-6 w-full text-[#fff] text-xl font-semibold text-center">
                {categories[0].title}
              </h3>
            </Link>
          </div>

          {/* Left Side - 4 Small Images Grid با فاصله برابر */}
          <div className="w-1/2 grid grid-cols-2 gap-5 p-4">
            {categories.slice(1).map((cat) => (
              <Link
                key={cat.id}
                href="/products"
                className="relative block w-full h-[250px] group overflow-hidden rounded-lg shadow-lg "
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 p-[5px]"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all" />
                <div className="absolute bottom-4 w-full">
                  <h3 className="text-[#fff] text-lg font-semibold text-center">
                    {cat.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // Tablet Layout - عکس‌های مربعی با پدینگ برابر
  const renderTablet = () => (
    <section id="categories" className="bg-[#fff] py-[10px] pb-16">
      <h2 className="text-[#666] font-semibold text-center mb-8 text-xl px-5">
        راه حل شما برای فضای خالی خانه شما
      </h2>

      <div className="flex flex-col gap-[10px]">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href="/products"
            className="relative block w-full aspect-square group overflow-hidden rounded-lg shadow-lg mx-auto"
            style={{ maxWidth: '500px' }}
          >
            <Image
              src={cat.image}
              alt={cat.title}
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

  // Mobile Layout - عکس‌های مربعی با پدینگ برابر
  const renderMobile = () => (
    <section id="categories" className="bg-[#fff] py-[10px] pb-[40px]">
      <h2 className="text-[#666] font-semibold text-center mb-6 text-lg px-5">
        راه حل شما برای فضای خالی خانه شما
      </h2>

      <div className="flex flex-col gap-5 px-[8px]">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href="/products"
            className="relative block w-full aspect-square group overflow-hidden rounded-lg shadow-md mx-auto"
            style={{ maxWidth: '400px' }}
          >
            <Image
              src={cat.image}
              alt={cat.title}
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