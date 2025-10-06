"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    id: "category1",
    title: "لوستر دوناتی",
    image: "/images/6.jpg",
  },
  {
    id: "category2",
    title: "لوستر ابری",
    image: "/images/8.jpg",
  },
  {
    id: "category3",
    title: "آباژور",
    image: "/images/1.jpg",
  },
  {
    id: "category4",
    title: "لوستر طرح عدس",
    image: "/images/21.jpg",
  },
  {
    id: "category5",
    title: "لوستر مربعی",
    image: "/images/18.jpg",
  },
];

export default function Categories() {
  return (
    <section id="categories">
      <h2 className="text-[#fff]  font-semibold text-center mt-[5vw] ">دسته‌ بندی ها</h2>

        {/* Grid layout */}
        <div className="grid grid-cols-2 md:grid-row-1">
          {/* Left tall image */}
          <Link
            href="/products#category1" className="relative mx-[150px] w-[600px] h-[400px]">
            <Image
              src={categories[0].image}
              alt={categories[0].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all" />
              <h3 className="absolute bottom-4 w-full text-center text-[#000] text-lg font-semibold group-hover:text-white transition-colors">
                {categories[0].title}
              </h3>
          </Link>
          {/* Right side: 4 smaller images in 2x2 grid */}
          <div className="grid grid-cols-2  w-[600px] h-[403px] mx-[3px] group">
            {categories.slice(1).map((cat) => (
              <Link
                key={cat.id}
                href={`/products#${cat.id}`}
                className="relative shadow-lg"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover p-[3px]"
                />
                <div/>
                <div className="absolute bottom-2 w-full text-center  w-[300px] h-[196px] mx-[5px] group">
                  <h3 className="text-[#000] text-sm md:text-base font-semibold  w-[300px] h-[196px] mx-[5px] group">
                    {cat.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
    </section>
  );
}
