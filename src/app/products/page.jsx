"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  Chip,
  TextField,
  MenuItem,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ProductsNavbar from "@/src/components/ProductsNavbar";
import { getProductsByCategory } from "@/src/data/products";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [deviceType, setDeviceType] = useState("desktop");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Detect device type (desktop, tablet, mobile)
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setDeviceType(width >= 1024 ? "desktop" : width >= 768 ? "tablet" : "mobile");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Categories
  const categories = useMemo(
    () => [
      { id: "all", name: "همه محصولات" },
      { id: "لوستر", name: "لوستر" },
      { id: "آباژور", name: "آباژور" },
    ],
    []
  );

  // Products
  const products = useMemo(() => getProductsByCategory(activeCategory), [activeCategory]);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return products.filter((product) => {
      const combinedText = [
        product.name,
        product.description,
        product.fullDescription,
        ...(product.features || []),
        ...Object.values(product.specifications || {}),
      ]
        .join(" ")
        .toLowerCase();
      return combinedText.includes(query);
    });
  }, [products, searchQuery]);

  // Handle Product Click
  const handleCardClick = (productId) => router.push(`/products/${productId}`);

  // Generate JSON-LD structured data
  const structuredData = useMemo(() => {
    return {
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": `محصولات ${activeCategory === "all" ? "ستاره یخی" : activeCategory}`,
        "description": `مشاهده و خرید ${activeCategory === "all" ? "انواع لوستر و آباژور" : activeCategory} با طراحی خاص و کیفیت بالا.`,
        "url": `https://www.setareyakhi.ir/products${activeCategory !== "all" ? `?category=${activeCategory}` : ""}`,
        "numberOfItems": filteredProducts.length,
        "itemListElement": filteredProducts.map((product, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Product",
            "name": product.name,
            "description": product.description,
            "image": `https://www.setareyakhi.ir${product.images[0]}`,
            "url": `https://www.setareyakhi.ir/products/${product.id}`,
            "brand": { "@type": "Brand", "name": "ستاره یخی" },
            "category": product.category,
            "sku": product.id,
            "inStock": product.inStock ? "true" : "false",
          },
        })),
      }),
    };
  }, [activeCategory, filteredProducts]);

  // Product Card (shared component)
  const ProductCard = ({ product }) => (
    <Card
      onClick={() => handleCardClick(product.id)}
      aria-label={`مشاهده جزئیات ${product.name}`}
      sx={{
        width: 300,
        height: 340,
        cursor: "pointer",
        transition: "all 0.3s ease",
        color: "#fff",
        backgroundColor: "#0c0d16ff",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 10px 18px rgba(0,0,0,0.5)",
        },
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Product Image */}
      <Box sx={{ position: "relative", height: 240, width: "100%" }}>
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          loading="lazy"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        {product.tags?.length > 0 && (
          <Box sx={{ position: "absolute", top: 10, left: 10, display: "flex", gap: 1 }}>
            {product.tags.map((tag, i) => (
              <Chip
                key={i}
                label={tag}
                size="small"
                sx={{
                  bgcolor: "#D4AF37",
                  color: "#000",
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                }}
              />
            ))}
          </Box>
        )}
      </Box>

      {/* Product Info (No Price) */}
      <CardContent
        sx={{
          p: 2.5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexGrow: 1,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 1,
            fontWeight: "bold",
            fontSize: "1.1rem",
            lineHeight: 1.3,
          }}
        >
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#bbb", fontSize: "0.9rem", lineHeight: 1.4 }}
        >
          {product.category}
        </Typography>
      </CardContent>
    </Card>
  );

  // Shared search + filter controls
  const FilterSection = ({ compact = false }) => (
    <Box
      sx={{
        mb: compact ? 4 : 6,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
        px: compact ? 1 : 4,
      }}
    >
      <TextField
        select
        label="دسته‌بندی محصولات"
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        sx={{
          flex: "1 1 250px",
          maxWidth: 250,
          bgcolor: "rgba(248,246,241,0.59)",
          borderRadius: 1,
        }}
        aria-label="انتخاب دسته‌بندی محصولات"
      >
        {categories.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="جستجو در محصولات..."
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{
          flex: "1 1 350px",
          maxWidth: 350,
          bgcolor: "rgba(248,246,241,0.59)",
          borderRadius: 1,
        }}
        aria-label="جستجو در بین محصولات"
      />
    </Box>
  );

  const ProductsGrid = () => (
    <>
      {/* Product Count */}
      <Box sx={{ mb: 3, textAlign: "center" }}>
        <Typography variant="h3" sx={{ color: "#333", fontSize: "1rem" }}>
          نمایش {filteredProducts.length} محصول از {products.length} محصول
        </Typography>
      </Box>

      {/* Grid */}
      <Grid container spacing={4} justifyContent="center">
        {filteredProducts.map((p) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={p.id}>
            <ProductCard product={p} />
          </Grid>
        ))}
      </Grid>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography variant="h3" sx={{ fontSize: "1.4rem", color: "#555", mb: 1 }}>
            محصولی با این مشخصات یافت نشد
          </Typography>
          <Typography sx={{ color: "#777", fontSize: "0.95rem", maxWidth: 500, mx: "auto" }}>
            لطفاً عبارت جستجو را تغییر دهید یا از دسته‌بندی دیگری استفاده کنید.
          </Typography>
        </Box>
      )}
    </>
  );

  // Desktop + Mobile Layouts
  const Layout = ({ compact }) => (
    <Box sx={{ minHeight: "100vh", bgcolor: "#fff", pt: compact ? "80px" : "150px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={structuredData} />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h1"
            sx={{
              color: "#000",
              fontWeight: "bold",
              fontSize: compact ? "1.8rem" : "2.8rem",
              mb: 1,
            }}
          >
            محصولات ستاره یخی
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "#666",
              fontSize: compact ? "0.9rem" : "1.2rem",
              lineHeight: 1.6,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            خرید آنلاین بهترین لوستر و آباژور با طراحی مدرن و کیفیت عالی
          </Typography>
        </Box>

        <FilterSection compact={compact} />
        <ProductsGrid />
      </Container>
    </Box>
  );

  return (
    <>
      <ProductsNavbar />
      {deviceType === "mobile" ? <Layout compact /> : <Layout />}
    </>
  );
}
