"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography, Button, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const products = [
  { id: 1, title: "لوستر دوناتی", image: "/images/6.jpg", price: "3,200,000 تومان" },
  { id: 2, title: "لوستر ابری", image: "/images/8.jpg", price: "2,850,000 تومان" },
  { id: 3, title: "آباژور کلاسیک", image: "/images/1.jpg", price: "950,000 تومان" },
  { id: 4, title: "لوستر طرح عدس", image: "/images/21.jpg", price: "4,100,000 تومان" },
];

export default function Products() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        bgcolor: "#000",
        color: "#fff",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 8 },
        textAlign: "center",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 5,
          color: "#f5f5f5",
        }}
      >
        محصولات ما
      </Typography>

      {/* Product Row */}
      <Box sx={{ position: "relative" }}>

        {/* Scrollable container */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            scrollBehavior: "smooth",
            px: 6,
            py: 2,
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {products.map((product) => (
            <Box
              key={product.id}
              sx={{
                flex: "0 0 auto",
                width: { xs: "70%", sm: "45%", md: "23%" },
                bgcolor: "#111",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.7)",
                },
              }}
            >
              {/* Image */}
              <Box sx={{ position: "relative", width: "100%", height: 250 }}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  style={{ objectFit: "object-cover" }}
                />
              </Box>

              {/* Info */}
              <Box sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#f5d76e", mb: 1 }}
                >
                  {product.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* View All Button */}
      <Box sx={{ mt: 8 }}>
        <Button
          component={Link}
          href="/products"
          variant="outlined"
          sx={{
            borderColor: "#f5d76e",
            color: "#f5d76e",
            px: 4,
            py: 1,
            borderRadius: "50px",
            fontWeight: 600,
            "&:hover": {
              bgcolor: "#f5d76e",
              color: "#000",
              borderColor: "#f5d76e",
              textAlign:"cente",
            },
          }}
        >
          مشاهده همه محصولات
        </Button>
      </Box>
    </Box>
  );
}
