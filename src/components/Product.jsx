"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography, Button, IconButton } from "@mui/material";

const products = [
  { id: 1, title: "لوستر تخم مرغی", image: "/egg.png" },
  { id: 2, title: "آباژور", image: "/aboj1.png" },
  { id: 3, title: "لوستر دوناتی دو طبقه", image: "/donat1.png" },
  { id: 4, title: "لوستر ابری", image: "/cloud1.png" },
  { id: 5, title: "لوستر عدسی", image: "/adas1.png"}
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
        bgcolor: "#ffffffff",
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
          color: "#545454ff",
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
                  style={{ objectFit: "object-fit" }}
                />
              </Box>

              {/* Info */}
                  {product.title}

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
            borderColor: "#000000ff",
            color: "#000000ff",
            px: 2,
            py: 1,

            fontWeight: 600,
            "&:hover": {
              bgcolor: "#f7f7f7ff",
              color: "#000",
              borderColor: "#000000ff",
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
