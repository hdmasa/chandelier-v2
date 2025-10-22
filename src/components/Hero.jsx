'use client';

import { Box, Typography, Button, Container } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const Hero = () => {
  const handleViewProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Structured Data for Local Business & Products
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    "name": "ستاره یخی | تولید کننده لوستر ابری لوکس در ایران",
    "description": "اولین و تنها تولیدکننده لوسترهای ابری لوکس در ایران. طراحی، تولید و فروش لوسترهای ابری مدرن با کیفیت بالا و ارسال به سراسر کشور",
    "url": "https://www.setareyakhi.ir/",
    "telephone": "+98-912-345-6789",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IR",
      "addressRegion": "Tehran",
      "addressLocality": "Tehran"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.6892",
      "longitude": "51.3890"
    },
    "openingHours": "Mo-Su 09:00-21:00",
    "priceRange": "$$",
    "image": [
      "https://www.setareyakhi.ir/banner.jpg",
      "https://www.setareyakhi.ir/logo.png"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.setareyakhi.ir/"
    }
  };

  // FAQ Schema for AEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ستاره یخی چه نوع لوسترهایی تولید می کند؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ستاره یخی اولین و تنها تولیدکننده لوسترهای ابری لوکس در ایران است که با ترکیب هنر سنتی و تکنولوژی مدرن، لوسترهای منحصر به فردی خلق می کند."
        }
      },
      {
        "@type": "Question",
        "name": "آیا امکان ارسال به سراسر ایران وجود دارد؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "بله، ما به تمامی شهرهای ایران لوسترهای خود را با بسته بندی ایمن و تضمین شده ارسال می کنیم."
        }
      }
    ]
  };

  return (
    <>
      {/* ✅ Enhanced SEO, GEO & AEO Head Tags */}
      <Head>
        <title>ستاره یخی | اولین تولید کننده لوستر ابری لوکس در ایران | خرید مستقیم</title>
        <meta
          name="description"
          content="✨ ستاره یخی - تولید کننده انحصاری لوسترهای ابری لوکس در ایران. طراحی مدرن، کریستال اصل، کنترل از راه دور، ارسال به سراسر کشور. تضمین کیفیت و قیمت مستقیم کارخانه."
        />
        <meta
          name="keywords"
          content="لوستر ابری, ستاره یخی, تولید کننده لوستر در ایران, لوستر لوکس, لوستر مدرن, خرید لوستر, chandelier iran, لوستر کریستال, لوستر کنترل از راه دور, قیمت لوستر, لوستر شیک"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="ستاره یخی" />
        
        {/* GEO Optimization - Persian Language Focus */}
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ستاره یخی | تولید کننده انحصاری لوسترهای ابری لوکس در ایران" />
        <meta
          property="og:description"
          content="خرید مستقیم از تولیدکننده لوسترهای ابری مدرن در ایران - کیفیت عالی، قیمت کارخانه، ارسال به سراسر کشور"
        />
        <meta property="og:url" content="https://www.setareyakhi.ir/" />
        <meta property="og:site_name" content="ستاره یخی" />
        <meta property="og:image" content="https://www.setareyakhi.ir/banner.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="لوستر ابری لوکس تولید ستاره یخی - طراحی مدرن و شیک" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ستاره یخی | تولید کننده لوستر ابری لوکس در ایران" />
        <meta name="twitter:description" content="اولین و تنها تولیدکننده لوسترهای ابری در ایران - خرید مستقیم از کارخانه" />
        <meta name="twitter:image" content="https://www.setareyakhi.ir/banner.jpg" />
        
        {/* Local Business SEO */}
        <meta name="geo.region" content="IR-TEH" />
        <meta name="geo.placename" content="Tehran" />
        <meta name="geo.position" content="35.6892;51.3890" />
        <meta name="ICBM" content="35.6892, 51.3890" />
        
        {/* AEO - Answer Engine Optimization */}
        <meta name="topic" content="لوستر لوکس, دکوراسیون خانه, نورپردازی مدرن" />
        <meta name="classification" content="لوستر، نورپردازی، دکوراسیون منزل، کالای خانگی لوکس" />
        
        <link rel="canonical" href="https://www.setareyakhi.ir/" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </Head>

      <Box 
        id="hero"
        component="section"
        aria-label="صفحه اصلی ستاره یخی - تولید کننده لوسترهای ابری لوکس"
        sx={{ 
          height: '100vh',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1
          }}
        >
          <Image
            src="/banner.jpg"
            alt="لوستر ابری لوکس تولید ستاره یخی - طراحی مدرن و شیک برای دکوراسیون خانه و ویلا"
            title="لوستر ابری ستاره یخی - تولید ایران"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center'
            }}
            priority
            loading="eager"
            quality={85}
          />
          
          {/* Dark overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              zIndex: 2
            }}
          />
        </Box>

        {/* Content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
          <Box sx={{ textAlign: 'center', color: '#FFFEF7' }}>
            {/* Main Heading with GEO keywords */}
            <Typography 
              variant="h1" 
              component="h1"
              sx={{ 
                fontWeight: 'bold',
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
                lineHeight: 1.1,
                mb: 4,
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.29)',
                direction: 'rtl'
              }}
            >
              ستاره یخی
            </Typography>
            
            {/* GEO Optimized Subheadings */}
            <Typography 
              variant="h2" 
              component="h2"
              sx={{ 
                fontWeight: 'bold',
                fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                lineHeight: 1.2,
                mb: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                direction: 'rtl',
                color: '#ffffffff'
              }}
            >
              تولید کننده انحصاری لوسترهای ابری
            </Typography>
            
            <Typography 
              variant="h3" 
              component="h3"
              sx={{ 
                fontWeight: 'bold',
                fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                lineHeight: 1.2,
                mb: 6,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                direction: 'rtl',
                color: '#ffffffff'
              }}
            >
              لوکس و مدرن در ایران
            </Typography>

            {/* AEO Optimized CTA */}
            <Button
              component={Link}
              href="/products"
              variant="outlined"
              size="large"
              endIcon={<ArrowForward />}
              aria-label="مشاهده محصولات لوستر ابری - خرید مستقیم از تولید کننده"
              title="خرید لوستر ابری از ستاره یخی"
              sx={{
                border: '2px solid #FFFEF7',
                color: '#FFFEF7',
                backgroundColor: 'transparent',
                px: 6,
                py: 2,
                fontSize: { xs: '1rem', md: '1.2rem' },
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: 0,
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  borderColor: '#D4AF37',
                  color: '#D4AF37',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
                },
                '&:active': {
                  transform: 'translateY(0px)'
                }
              }}
            >
              مشاهده محصولات و قیمت
            </Button>
          </Box>
        </Container>

        {/* Decorative Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            zIndex: 2,
            animation: 'float 3s ease-in-out infinite'
          }}
        >
          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: '#D4AF37',
              opacity: 0.6,
              boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)'
            }}
          />
        </Box>
        
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            left: '15%',
            zIndex: 2,
            animation: 'float 4s ease-in-out infinite reverse'
          }}
        >
          <Box
            sx={{
              width: 15,
              height: 15,
              borderRadius: '50%',
              backgroundColor: '#FFFEF7',
              opacity: 0.7,
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)'
            }}
          />
        </Box>
        
        <Box
          sx={{
            position: 'absolute',
            top: '30%',
            left: '8%',
            zIndex: 2,
            animation: 'float 5s ease-in-out infinite'
          }}
        >
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: '#D4AF37',
              opacity: 0.5,
              boxShadow: '0 0 10px rgba(212, 175, 55, 0.6)'
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Hero;