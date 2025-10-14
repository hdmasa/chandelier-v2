"use client";
import { useState, useEffect } from "react";
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Button,
  Container,
  Chip,
  IconButton
} from "@mui/material";
import { ShoppingCart, Favorite, Share } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProductsNavbar from "@/src/components/ProductsNavbar";
import { getProductsByCategory } from "@/src/data/products";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [deviceType, setDeviceType] = useState('desktop');
  const router = useRouter();

  // Detect device type
  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      if (width >= 1024) setDeviceType('desktop');
      else if (width >= 768) setDeviceType('tablet');
      else setDeviceType('mobile');
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  const categories = [
    { id: "all", name: "همه محصولات" },
    { id: "category1", name: "لوستر" },
    { id: "category2", name: "آباژور" },
  ];

  const products = getProductsByCategory(activeCategory);

  const handleCardClick = (productId) => {
    router.push(`/products/${productId}`);
  };

  // Desktop Layout
  const renderDesktop = () => (
    <Box sx={{ minHeight: '100vh', bgcolor: '#ffffffff', pt: '80px' }}>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Page Header */}
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: '#000000ff', 
              fontWeight: 'bold',
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 2,
              textAlign: 'center'
            }}
          >
            محصولات 
          </Typography>
        </Box>
        
        {/* Categories Filter */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 6 }}>
          {categories.map((category) => (
            <Chip
              key={category.id}
              label={category.name}
              onClick={() => setActiveCategory(category.id)}
              sx={{
                bgcolor: activeCategory === category.id ? '#d8c892ff' : 'rgba(250, 238, 201, 0.59)',
                color: '#000',
                border: '2px solid #f6d158ff',
                fontSize: '1rem',
                px: 5,
                py: 2,
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: '#f5e9bcff',
                  transform: 'scale(1.05)'
                }
              }}
            />
          ))}
        </Box>
        
        {/* Products Grid - Centered */}
        <Grid container spacing={4} justifyContent="center">
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card 
                sx={{ 
                  width: 300,
                  height: 380,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.15)',
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden'
                }}
                onClick={() => handleCardClick(product.id)}
              >
                {/* Product Image */}
                <Box sx={{ 
                  position: 'relative', 
                  height: 250,
                  width: '100%',
                  flexShrink: 0
                }}>
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  {product.tags && (
                    <Box sx={{ position: 'absolute', top: 10, left: 10, display: 'flex', gap: 1 }}>
                      {product.tags.map((tag, index) => (
                        <Chip
                          key={index}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: '#D4AF37',
                            color: '#000',
                            fontSize: '0.7rem'
                          }}
                        />
                      ))}
                    </Box>
                  )}
                </Box>
                
                {/* Product Info */}
                <CardContent sx={{ 
                  p: 3, 
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      mb: 1, 
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      textAlign: 'center'
                    }}
                  >
                    {product.category}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );

  // Mobile Layout
  const renderMobile = () => (
    <Box sx={{ minHeight: '100vh', bgcolor: '#ffffffff', pt: '70px' }}>
      <Container sx={{ py: 3 }}>
        {/* Page Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#000000ff', 
              fontWeight: 'bold',
              mb: 1
            }}
          >
            محصولات
          </Typography>
        </Box>
        
        {/* Categories Filter - Horizontal Scroll */}
        <Box sx={{ mb: 4, overflowX: 'auto', whiteSpace: 'nowrap', pb: 1 }}>
          <Box sx={{ display: 'inline-flex', gap: 1, px: 1 }}>
            {categories.map((category) => (
              <Chip
                key={category.id}
                label={category.name}
                onClick={() => setActiveCategory(category.id)}
                sx={{
                  bgcolor: activeCategory === category.id ? '#d8c892ff' : 'transparent',
                  color: activeCategory === category.id ? '#000' : '#3b3a3aff',
                  border: '1px solid #ddd4b8ff',
                  justifyContent:'center',
                  '&:hover': {
                    bgcolor: '#f5e9bcff',
                    color: '#000'
                  }
                }}
              />
            ))}
          </Box>
        </Box>
        
        {/* Products Grid - Centered */}
        <Grid container spacing={2} justifyContent="center">
          {products.map((product) => (
            <Grid item xs={10} sm={6} key={product.id} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card 
                sx={{ 
                  width: 280,
                  height: 320,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.12)',
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden'
                }}
                onClick={() => handleCardClick(product.id)}
              >
                <Box sx={{ 
                  position: 'relative', 
                  height: 200,
                  width: '100%',
                  flexShrink: 0
                }}>
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
                <CardContent sx={{ 
                  p: 2, 
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <Typography variant="h6" sx={{ mb: 1, fontSize: '1rem', textAlign: 'center' }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                    {product.category}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );

  return (
    <>
      <ProductsNavbar />
      {deviceType === 'desktop' || deviceType === 'tablet' ? renderDesktop() : renderMobile()}
    </>
  );
}