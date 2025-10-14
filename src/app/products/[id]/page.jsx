"use client";
import { useState, useEffect } from "react";
import { 
  Box, 
  Typography, 
  Grid, 
  Button, 
  Container,
  Chip,
  IconButton,
  Breadcrumbs,
  Link as MuiLink
} from "@mui/material";
import { ShoppingCart, Favorite, Share, Home, ShoppingBag } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import ProductsNavbar from "@/src/components/ProductsNavbar";
import { getProductById } from "@/src/data/products";

export default function ProductDetailPage() {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [deviceType, setDeviceType] = useState('desktop');
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      if (width >= 1024) setDeviceType('desktop');
      else if (width >= 768) setDeviceType('tablet');
      else setDeviceType('mobile');
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);

    // Get product data based on ID
    if (params.id) {
      const productData = getProductById(params.id);
      setProduct(productData);
      setLoading(false);
    }

    return () => window.removeEventListener('resize', checkDeviceType);
  }, [params.id]);

  const handleAddToCart = () => {
    if (!product) return;
    
    const message = `سلام! می‌خواهم محصول "${product.name}" را به تعداد ${quantity} عدد خریداری کنم. قیمت: ${product.price}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/989124634832?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (loading) {
    return (
      <>
        <ProductsNavbar />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Typography>در حال بارگذاری...</Typography>
        </Box>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <ProductsNavbar />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Typography>محصول یافت نشد</Typography>
        </Box>
      </>
    );
  }

  // Desktop Layout
  const renderDesktop = () => (
    <Box sx={{ minHeight: '100vh', bgcolor: '#FFF', pt: '80px', direction: 'ltr' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Breadcrumb */}
        <Breadcrumbs sx={{ mb: 4, color: '#333' }} separator="›">
          <MuiLink component={Link} href="/" sx={{ color: '#D4AF37', textDecoration: 'none' }}>
            <Home sx={{ fontSize: 20, verticalAlign: 'middle', ml: 0.5 }} />
            خانه
          </MuiLink>
          <MuiLink component={Link} href="/products" sx={{ color: '#D4AF37', textDecoration: 'none' }}>
            <ShoppingBag sx={{ fontSize: 20, verticalAlign: 'middle', ml: 0.5 }} />
            محصولات
          </MuiLink>
          <Typography sx={{ color: '#333' }}>{product.name}</Typography>
        </Breadcrumbs>

        {/* Grid: Images + Info */}
        <Grid container spacing={4} sx={{ alignItems: 'flex-start' }}>
          {/* Images Column */}
          <Grid item xs={12} md={6} lg={6}>
            <Box sx={{ position: 'sticky', top: '100px' }}>
              <Box sx={{ mb: 3, borderRadius: 2, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  width={600}
                  height={500}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
                />
              </Box>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                {product.images.map((image, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: 1,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: selectedImage === index ? '2px solid #D4AF37' : '1px solid #ddd',
                      opacity: selectedImage === index ? 1 : 0.7,
                      transition: 'all 0.3s ease',
                      flexShrink: 0
                    }}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      width={80}
                      height={80}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Info Column */}
          <Grid item xs={12} md={6} lg={6}>
            <Box sx={{ color: '#333', pr: { md: 2 } }}>
              {/* Tags */}
              <Box sx={{ mb: 2 }}>
                {product.tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    size="small"
                    sx={{ bgcolor: '#D4AF37', color: '#000', ml: 1, mb: 1, fontWeight: 'bold' }}
                  />
                ))}
              </Box>

              {/* Title */}
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold', fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
                {product.name}
              </Typography>

              {/* Category */}
              <Typography variant="h6" sx={{ color: '#666', mb: 3, fontSize: '1.1rem' }}>
                دسته: {product.category}
              </Typography>

              {/* Price */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ color: '#D4AF37', fontWeight: 'bold', mb: 1 }}>
                  {product.price}
                </Typography>
                {product.originalPrice && (
                  <Typography variant="h6" sx={{ color: '#999', textDecoration: 'line-through' }}>
                    {product.originalPrice}
                  </Typography>
                )}
              </Box>

              {/* Description */}
              <Typography variant="body1" sx={{ mb: 4, lineHeight: 2, fontSize: '1.1rem' }}>
                {product.fullDescription}
              </Typography>

              {/* Features */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#D4AF37', fontWeight: 'bold' }}>
                  ویژگی‌های محصول:
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {product.features.map((feature, index) => (
                    <Typography key={index} variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                      • {feature}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Quantity + Add to Cart + Specifications */}
        <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* Quantity + Add to Cart */}
          <Box
            sx={{
              display:'flex',
              width: '80%',
              bgcolor: '#ffffffff',
              borderRadius: 2,
              mb:3,
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
              p: 3,
            }}
          >
            {/* Quantity */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="h6" sx={{ minWidth: '60px',color:'#000' }}>تعداد:</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #000000ff', borderRadius: 1 }}>
                <Button onClick={() => setQuantity(q => Math.max(1, q - 1))} sx={{ color: '#333', minWidth: '40px', fontSize: '1.2rem' }}>-</Button>
                <Typography sx={{ px: 3, minWidth: '60px', textAlign: 'center', fontSize: '1.2rem',color:'#000' }}>{quantity}</Typography>
                <Button onClick={() => setQuantity(q => q + 1)} sx={{ color: '#333', minWidth: '40px', fontSize: '1.2rem' }}>+</Button>
              </Box>
            </Box>

            {/* Add to Cart */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexGrow: 1 }}>
              <Button
                variant="contained"
                startIcon={<ShoppingCart />}
                disabled={!product.inStock}
                onClick={handleAddToCart}
                sx={{
                  bgcolor: '#D4AF37',
                  color: '#000',
                  px: 6,
                  py: 1.8,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  '&:hover': { bgcolor: '#b8941f' },
                }}
              >
                {product.inStock ? 'افزودن به سبد خرید' : 'ناموجود'}
              </Button>
              <IconButton sx={{ color: '#333', border: '1px solid #ddd', bgcolor: 'white' }}>
                <Favorite />
              </IconButton>
              <IconButton sx={{ color: '#333', border: '1px solid #ddd', bgcolor: 'white' }}>
                <Share />
              </IconButton>
            </Box>
          </Box>

          {/* Specifications */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, color: '#D4AF37', fontWeight: 'bold' }}>
              مشخصات فنی:
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(auto-fit, minmax(50px, 1fr))', gap: 1 }}>
              {Object.entries(product.specifications).map(([key, value]) => (
                <Box
                  key={key}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    py: 1,
                    px: 1,
                    borderBottom: '1px solid #eee',
                    bgcolor: '#f9f9f9',
                    borderRadius: 1,
                    width:250,
                  }}
                >
                  <Typography variant="body2" sx={{ color: '#666', fontWeight: 'bold' }}>
                    {key}:
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'medium',color:'#000' }}>
                    {value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );

  // Mobile Layout
  const renderMobile = () => (
    <Box sx={{ minHeight: '100vh', bgcolor: '#FFF', pt: '70px', direction:'ltr' }}>
      <Container sx={{ py: 3 }}>
        {/* Breadcrumb */}
        <Breadcrumbs sx={{ mb: 3, color: '#333', fontSize: '0.8rem' }}>
          <MuiLink component={Link} href="/" sx={{ color: '#D4AF37', textDecoration: 'none' }}>
            خانه
          </MuiLink>
          <MuiLink component={Link} href="/products" sx={{ color: '#D4AF37', textDecoration: 'none' }}>
            محصولات
          </MuiLink>
          <Typography sx={{ color: '#333' }}>{product.name}</Typography>
        </Breadcrumbs>

        {/* Product Images */}
        <Box sx={{ mb: 3 }}>
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            width={400}
            height={300}
            style={{ width: '100%', height: 'auto', borderRadius: 8 }}
          />
          <Box sx={{ display: 'flex', gap: 1, mt: 2, overflowX: 'auto' }}>
            {product.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                width={60}
                height={60}
                style={{ 
                  borderRadius: 4,
                  border: selectedImage === index ? '2px solid #D4AF37' : '1px solid #ddd',
                  opacity: selectedImage === index ? 1 : 0.7
                }}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </Box>
        </Box>

        {/* Product Info */}
        <Box sx={{ color: '#333' }}>
          <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
            {product.name}
          </Typography>
          
          <Typography variant="h6" sx={{ color: '#D4AF37', fontWeight: 'bold', mb: 2 }}>
            {product.price}
          </Typography>

          <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.8 }}>
            {product.fullDescription}
          </Typography>

          {/* Quantity Selector */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Typography>تعداد:</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: 1 }}>
              <Button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                sx={{ color: '#333', minWidth: '40px' }}
              >
                -
              </Button>
              <Typography sx={{ px: 2, minWidth: '40px', textAlign: 'center' }}>
                {quantity}
              </Typography>
              <Button
                onClick={() => setQuantity(q => q + 1)}
                sx={{ color: '#333', minWidth: '40px' }}
              >
                +
              </Button>
            </Box>
          </Box>

          <Button
            variant="contained"
            fullWidth
            startIcon={<ShoppingCart />}
            disabled={!product.inStock}
            onClick={handleAddToCart}
            sx={{
              bgcolor: '#e6d191ff',
              color: '#000',
              py: 1,
              mb: 3,
              width:'60vw',
              display:'flex',
              justifyContent:'center',
              '&:hover': {
                bgcolor: '#bda553ff'
              }
            }}
          >
            {product.inStock ? 'افزودن به سبد خرید' : 'ناموجود'}
          </Button>

          {/* Specifications */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, color: '#D4AF37', fontWeight: 'bold' }}>
              مشخصات فنی:
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {Object.entries(product.specifications).map(([key, value]) => (
                <Box
                  key={key}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    py: 1.5,
                    px: 2,
                    borderBottom: '1px solid #eee',
                    bgcolor: '#f9f9f9',
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="body2" sx={{ color: '#666', fontWeight: 'bold' }}>
                    {key}:
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'medium', color: '#000' }}>
                    {value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
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