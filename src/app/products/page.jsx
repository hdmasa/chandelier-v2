"use client";
import { useState, useEffect } from "react";
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

  // Detect device type
  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      if (width >= 1024) setDeviceType("desktop");
      else if (width >= 768) setDeviceType("tablet");
      else setDeviceType("mobile");
    };

    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);
    return () => window.removeEventListener("resize", checkDeviceType);
  }, []);

  // ✅ Corrected category IDs to match your data
  const categories = [
    { id: "all", name: " محصولات" },
    { id: "لوستر", name: "لوستر" },
    { id: "آباژور", name: "آباژور" },
  ];

  const products = getProductsByCategory(activeCategory);

  // ✅ Filter by search text
  const filteredProducts = products.filter((product) => {
    const query = searchQuery.toLowerCase();
    const searchFields = [
      product.name,
      product.description,
      product.fullDescription,
      ...(product.features || []),
      ...Object.values(product.specifications || {}),
    ].join(" ").toLowerCase();

    return searchFields.includes(query);
  });

  const handleCardClick = (productId) => {
    router.push(`/products/${productId}`);
  };

  // ✅ Desktop & Tablet Layout
  const renderDesktop = () => (
    <Box sx={{ minHeight: "100vh", bgcolor: "#ffffffff", pt: "150px" }}>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Page Header */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h2"
            sx={{
              color: "#000000ff",
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 1,
              textAlign: "center",
            }}
          >
            محصولات
          </Typography>
        </Box>

        {/* 🔽 Filter Section (Dropdown + Search Bar) */}
        <Box
          sx={{
            mb: 6,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            px: { xs: 2, md: 4 }, // same padding as grid
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
              width: "100%",
              maxWidth: "1200px", // align with grid width
            }}
          >
            {/* Dropdown for Categories */}
            <TextField
              select
              label="دسته‌بندی"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              sx={{
                flex: "1 1 250px",
                maxWidth: 250,
                bgcolor: "rgba(248, 246, 241, 0.59)",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 1,
                },
              }}
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </TextField>

            {/* Search Bar */}
            <TextField
              label="جستجو در محصولات..."
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                flex: "1 1 350px",
                maxWidth: 350,
                bgcolor: "rgba(248, 246, 241, 0.59)",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 1,
                },
              }}
            />
          </Box>
        </Box>

        {/* Products Grid - Centered */}
        <Grid container spacing={4} justifyContent="center">
          {filteredProducts.map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={product.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  width: 300,
                  height: 350,
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  color: "#ffffffff",
                  backgroundColor: "#0c0d16ff",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 20px rgba(0, 0, 0, 0.76)",
                  },
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
                onClick={() => handleCardClick(product.id)}
              >
                {/* Product Image */}
                <Box
                  sx={{
                    position: "relative",
                    height: 250,
                    width: "100%",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  {product.tags && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        display: "flex",
                        gap: 1,
                      }}
                    >
                      {product.tags.map((tag, index) => (
                        <Chip
                          key={index}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: "#D4AF37",
                            color: "#000",
                            fontSize: "0.7rem",
                          }}
                        />
                      ))}
                    </Box>
                  )}
                </Box>

                {/* Product Info */}
                <CardContent
                  sx={{
                    p: 3,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 1,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      textAlign: "center",
                    }}
                  >
                    {product.category}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredProducts.length === 0 && (
          <Typography
            sx={{
              textAlign: "center",
              mt: 4,
              fontSize: "1.2rem",
              color: "#555",
            }}
          >
            محصولی با این مشخصات یافت نشد.
          </Typography>
        )}
      </Container>
    </Box>
  );

  // ✅ Mobile Layout
  const renderMobile = () => (
    <Box sx={{ minHeight: "100vh", bgcolor: "#ffffffff", pt: "70px" }}>
      <Container
        sx={{
          py: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Page Header */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              color: "#000000ff",
              fontWeight: "bold",
              mb: 1,
            }}
          >
            محصولات
          </Typography>
        </Box>

        {/* Filters (Stacked, same width as cards) */}
        <Box
          sx={{
            mb: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            width: "100%",
          }}
        >
          <TextField
            select
            label="دسته‌بندی"
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            sx={{
              width: 280, // same as product card width
              bgcolor: "rgba(248, 246, 241, 0.59)",
              borderRadius: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
              },
            }}
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
              width: 280, // same as product card width
              bgcolor: "rgba(248, 246, 241, 0.59)",
              borderRadius: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
                
              },
            }}
          />
        </Box>

        {/* Products Grid - Centered */}
        <Grid container spacing={2} justifyContent="center">
          {filteredProducts.map((product) => (
            <Grid
              item
              xs={10}
              sm={6}
              key={product.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  width: 280,
                  height: 320,
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  color: "#fff",
                  backgroundColor: "#0c0d16ff",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.12)",
                  },
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
                onClick={() => handleCardClick(product.id)}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: 200,
                    width: "100%",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <CardContent
                  sx={{
                    p: 2,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ mb: 1, fontSize: "1rem", textAlign: "center" }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", textAlign: "center" }}
                  >
                    {product.category}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredProducts.length === 0 && (
          <Typography
            sx={{
              textAlign: "center",
              mt: 4,
              fontSize: "1rem",
              color: "#555",
            }}
          >
            محصولی با این مشخصات یافت نشد.
          </Typography>
        )}
      </Container>
    </Box>
  );

  return (
    <>
      <ProductsNavbar />
      {deviceType === "desktop" || deviceType === "tablet"
        ? renderDesktop()
        : renderMobile()}
    </>
  );
}
