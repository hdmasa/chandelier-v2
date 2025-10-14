'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { image: '/chandelier-process1.jpg' },
  { image: '/chandelier-process2.jpg' },
  { image: '/chandelier-process3.jpg' },
  { image: '/chandelier-process4.jpg' },
];

export default function LightCreateSpace() {
  const [deviceType, setDeviceType] = useState('desktop');
  
  const title = 'نور باعث تولید فضا می‌شود';
  const description = `هر نوری آغازگر حضوری تازه است. با تابیدن روشنایی،
  مرزها و حجم ها شکل می گیرند و فضا از سکوت به درخشش می رسد. در
  نبود نور،فضا تنها مفهومی انتزاعی است;اما با ظهور آن،جهان
  جان می گیرد و ادراک ما از زیبایی دگرگون می شود.
  ما به نور نه به عنوان یک ابزار، بلکه به عنوان زبانی برای آفرینش
  فضا می نگریم. نوری که می تواند احساس بیافریند،زمان را معنا بخشد و آرامش 
  را به محیط بیاورد.در فلسفه طراحی ما،نور ماده اولیه اندیشه است;همان
  چیزی که فضا از آن زاده می شود و انسان به گفتگو می نشیند.`
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
    <section id='process' className="bg-[#fff] py-[40px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative flex flex-row-reverse items-start gap-8">
          
          {/* Text section - Right Side */}
          <div className="w-1/2 text-right text-[#000] ">
            <h2 className="text-4xl font-bold mt-[120px] leading-tight mb-3">{title}</h2>
            <p className="text-lg leading-8 whitespace-pre-line mb-6">{description}</p>
          </div>

          {/* Images section - Left Side */}
          <div className="relative w-1/2 h-[550px]">
            {images.map((item, index) => (
              <div
                key={index}
                className={`absolute 
                ${index === 0 ? 'top-[50px] right-[100px]' : ''}
                ${index === 1 ? 'top-[80px] right-[330px]' : ''}
                ${index === 2 ? 'top-[280px] right-[100px]' : ''}
                ${index === 3 ? 'top-[310px] right-[330px]' : ''}`}
              >
                <Image
                  src={item.image}
                  alt={`image-${index}`}
                  width={200}
                  height={200}
                  className="object-cover rounded-md shadow-sm"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );

  // Tablet Layout - مشابه دسکتاپ (متن سمت راست، عکس‌ها سمت چپ)
  const renderTablet = () => (
    <section id='process' className="bg-[#fff] py-10">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="relative flex flex-row-reverse items-start gap-8">
          
          {/* Text section - Right Side */}
          <div className="w-1/2 text-right text-[#000] p-[50px]">
            <h2 className="text-3xl font-bold mt-6 leading-tight mb-3">{title}</h2>
            <p className="text-base leading-8 whitespace-pre-line mb-6">{description}</p>
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
                  alt={`image-${index}`}
                  width={150}
                  height={150}
                  className="object-cover rounded-md shadow-sm"
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
    <section id='process' className="bg-[#fff] py-6">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col gap-6">
          
          {/* Text section - Top */}
          <div className="w-full text-right text-[#000] p-[20px]">
            <h2 className="text-2xl font-bold mt-4 leading-tight mb-3">{title}</h2>
            <p className="text-sm leading-7 whitespace-pre-line mb-4">{description}</p>
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
                  alt={`process-${i}`}
                  width={150}
                  height={150}
                  className="object-cover w-full h-full rounded-md"
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
      {deviceType === 'desktop' && renderDesktop()}
      {deviceType === 'tablet' && renderTablet()}
      {deviceType === 'mobile' && renderMobile()}
    </>
  );
}