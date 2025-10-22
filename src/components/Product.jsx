"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const products = [
  { 
    id: 1, 
    title: "لوستر تخم مرغی", 
    image: "/egg.png",
    description: "لوستر تخم مرغی طراحی مدرن و منحصر به فرد برای دکوراسیون منزل و محیط کار",
    slug: "egg-chandelier",
    category: "لوسترهای مدرن"
  },
  { 
    id: 2, 
    title: "آباژور", 
    image: "/aboj1.png",
    description: "آباژور با طراحی شیک و نورپردازی عالی برای روشنایی غیر مستقیم",
    slug: "lampshade",
    category: "آباژور و روشنایی"
  },
  { 
    id: 3, 
    title: "لوستر دوناتی دو طبقه", 
    image: "/donat2.png",
    description: "لوستر دوناتی دو طبقه با ساختار مدرن و طراحی European",
    slug: "double-layer-donut-chandelier",
    category: "لوسترهای کلاسیک"
  },
  { 
    id: 4, 
    title: "لوستر ابری", 
    image: "/cloud1.png",
    description: "لوستر ابری اولین تولید ایران توسط ستاره یخی - طراحی منحصر به فرد ابری شکل",
    slug: "cloud-chandelier",
    category: "لوسترهای ابری"
  },
  { 
    id: 5, 
    title: "لوستر عدسی", 
    image: "/adas1.png",
    description: "لوستر عدسی با قابلیت تنظیم زاویه نور و طراحی صنعتی مدرن",
    slug: "lens-chandelier",
    category: "لوسترهای صنعتی"
  }
];

// Enhanced Structured data for product carousel
const productStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "محصولات ستاره یخی - تولید کننده لوسترهای ابری در ایران",
  "description": "نمونه محصولات تولیدی ستاره یخی، اولین و تنها تولیدکننده لوسترهای ابری در ایران با طراحی منحصربه‌فرد",
  "url": "https://setareyaxi.com",
  "numberOfItems": products.length,
  "mainEntityOfPage": "https://setareyaxi.com/products",
  "itemListElement": products.map((product, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "url": `https://setareyaxi.com/products/${product.slug}`,
    "item": {
      "@type": "Product",
      "name": product.title,
      "description": product.description,
      "image": product.image,
      "url": `https://setareyaxi.com/products/${product.slug}`,
      "category": product.category,
      "brand": {
        "@type": "Brand",
        "name": "ستاره یخی"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "IRR",
        "seller": {
          "@type": "Organization",
          "name": "ستاره یخی"
        }
      }
    }
  }))
};

// Additional Organization structured data
const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "ستاره یخی",
  "description": "اولین و تنها تولیدکننده لوسترهای ابری در ایران با طراحی منحصربه‌فرد و کیفیتی بی‌نظیر",
  "url": "https://setareyaxi.com",
  "logo": "https://setareyaxi.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tehran",
    "addressCountry": "IR"
  },
  "knowsAbout": [
    "لوستر ابری",
    "تولید لوستر",
    "طراحی نورپردازی",
    "دکوراسیون روشنایی",
    "لوسترهای مدرن"
  ]
};

export default function Products() {
  const scrollRef = useRef(null);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef(null);

  // Initialize with duplicated products for infinite loop
  useEffect(() => {
    // Create 3 copies of products for seamless looping
    setDisplayProducts([...products, ...products, ...products]);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!scrollRef.current || isPaused) return;

    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (!scrollRef.current || isPaused) return;
        
        const container = scrollRef.current;
        const scrollAmount = 300;
        const newScrollLeft = container.scrollLeft + scrollAmount;
        
        // Check if we're at the boundaries and reset for infinite loop
        if (newScrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollTo({ left: container.scrollWidth / 3, behavior: 'instant' });
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }, 3000);
    };

    startAutoScroll();

    // Cleanup interval
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isPaused]);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    
    const container = scrollRef.current;
    const scrollAmount = direction === "left" ? -300 : 300;
    const newScrollLeft = container.scrollLeft + scrollAmount;
    
    // Check boundaries for infinite loop
    if (direction === "right" && newScrollLeft >= container.scrollWidth - container.clientWidth) {
      container.scrollTo({ left: container.scrollWidth / 3, behavior: 'instant' });
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else if (direction === "left" && newScrollLeft <= 0) {
      container.scrollTo({ left: container.scrollWidth / 3 * 2, behavior: 'instant' });
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

    handleUserInteraction();
  };

  const handleUserInteraction = () => {
    setIsPaused(true);
    setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsPaused(false);
    }, 1000);
  };

  return (
    <>
      {/* Enhanced Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      
      <Box
        component="section"
        aria-labelledby="products-section-title"
        sx={{
          width: "100%",
          bgcolor: "#ffffffff",
          color: "#fff",
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 8 },
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Enhanced Title with better semantic meaning */}
        <Typography
          variant="h2"
          component="h2"
          id="products-section-title"
          sx={{
            fontWeight: 700,
            mb: 5,
            color: "#545454ff",
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
          aria-label="محصولات ستاره یخی - تولید کننده تخصصی لوسترهای ابری و مدرن در ایران"
        >
          محصولات ستاره یخی
        </Typography>

        {/* Hidden descriptive text for SEO & AI */}
        <Box component="div" sx={{ display: "none" }} aria-hidden="true">
          <Typography component="p">
            ستاره یخی اولین و تنها تولیدکننده لوسترهای ابری در ایران با طراحی منحصربه‌فرد. 
            محصولات ما شامل انواع لوسترهای مدرن، آباژور، و سیستم‌های نورپردازی می‌باشد.
          </Typography>
        </Box>

        {/* Product Carousel */}
        <Box 
          sx={{ position: "relative" }}
          role="region"
          aria-label="گالری محصولات لوستر ابری و سیستم‌های نورپردازی ستاره یخی"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Scrollable container */}
          <Box
            ref={scrollRef}
            component="ul"
            sx={{
              display: "flex",
              gap: 3,
              overflowX: "auto",
              scrollBehavior: "smooth",
              px: 6,
              py: 2,
              "&::-webkit-scrollbar": { display: "none" },
              listStyle: "none",
              margin: 0,
              padding: 0,
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              cursor: "grab",
            }}
            aria-label="لیست محصولات لوستر ابری، لوستر تخم مرغی، آباژور و سایر محصولات روشنایی"
            onTouchStart={handleUserInteraction}
            onScroll={handleUserInteraction}
          >
            {displayProducts.map((product, index) => (
              <Box
                key={`${product.id}-${index}`}
                component="li"
                sx={{
                  flex: "0 0 auto",
                  width: { xs: "70%", sm: "45%", md: "23%" },
                  bgcolor: "#111",
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.7)",
                  },
                }}
                itemScope
                itemType="https://schema.org/Product"
                onClick={handleUserInteraction}
              >
                {/* Optimized Image */}
                <Box 
                  sx={{ 
                    position: "relative", 
                    width: "100%", 
                    height: 250 
                  }}
                  aria-hidden="true"
                >
                  <Image
                    src={product.image}
                    alt={`${product.title} - ${product.description} - تولید ستاره یخی`}
                    title={`${product.title} | ستاره یخی`}
                    fill
                    style={{ 
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                    sizes="(max-width: 600px) 70vw, (max-width: 960px) 45vw, 23vw"
                    loading="lazy"
                    quality={85}
                  />
                </Box>

                {/* Enhanced Product Info */}
                <Box
                  sx={{
                    py: 2,
                    px: 1,
                    bgcolor: "#111",
                    color: "white",
                    textAlign: "center"
                  }}
                >
                  <Typography
                    variant="h3"
                    component="h3"
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "white",
                      lineHeight: 1.4
                    }}
                    itemProp="name"
                    aria-label={`محصول ${product.title} - ${product.category}`}
                  >
                    {product.title}
                  </Typography>
                  <meta itemProp="description" content={product.description} />
                  <meta itemProp="category" content={product.category} />
                  <link itemProp="url" href={`https://setareyaxi.com/products/${product.slug}`} />
                </Box>
              </Box>
            ))}
          </Box>

          {/* Scroll Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mt: 3,
              position: "relative",
              width: "100%",
            }}
          >
            <IconButton
              onClick={() => scroll("left")}
              sx={{
                bgcolor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.9)",
                },
                width: { xs: 40, md: 50 },
                height: { xs: 40, md: 50 },
                order: 2,
              }}
              aria-label="مشاهده محصولات قبلی در گالری لوسترهای ستاره یخی"
              onMouseEnter={handleMouseEnter}
            >
              <ChevronRight sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }} />
            </IconButton>

            <IconButton
              onClick={() => scroll("right")}
              sx={{
                bgcolor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.9)",
                },
                width: { xs: 40, md: 50 },
                height: { xs: 40, md: 50 },
                order: 1,
              }}
              aria-label="مشاهده محصولات بعدی در گالری لوسترهای ستاره یخی"
              onMouseEnter={handleMouseEnter}
            >
              <ChevronLeft sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }} />
            </IconButton>
          </Box>
        </Box>

        {/* Enhanced View All Button */}
        <Box 
          sx={{ mt: 8 }}
          role="navigation"
          aria-label="لینک مشاهده تمام محصولات لوستر ابری"
        >
          <Button
            component={Link}
            href="/products"
            variant="outlined"
            sx={{
              borderColor: "#000000ff",
              color: "#000000ff",
              px: 2,
              py: 1,
              fontWeight: 600,
              "&:hover": {
                bgcolor: "#f7f7f7ff",
                color: "#8d8f13ff",
                borderColor: "#000000ff",
              },
              textAlign: "center",
            }}
            aria-label="مشاهده تمام محصولات لوستر ابری، لوستر تخم مرغی و سیستم‌های نورپردازی ستاره یخی"
          >
            مشاهده همه محصولات 
          </Button>
        </Box>
      </Box>
    </>
  );
}