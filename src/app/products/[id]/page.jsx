"use client";
import { useState, useEffect } from "react";
import { 
  Box, 
  Typography, 
  Grid, 
  Button, 
  Container,
  Chip,
  Breadcrumbs,
  Link as MuiLink,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import { ShoppingCart, Home, ShoppingBag, ExpandMore } from "@mui/icons-material";
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

    if (params.id) {
      const productData = getProductById(params.id);
      setProduct(productData);
      setLoading(false);
    }

    return () => window.removeEventListener('resize', checkDeviceType);
  }, [params.id]);

  const handleAddToCart = () => {
    if (!product) return;
    
    const message = `سلام! می‌خواهم محصول "${product.name}" را به تعداد ${quantity} عدد خریداری کنم.  `;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/989124634832?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const generateProductStructuredData = () => {
    if (!product) return null;
    const cleanPrice = product.price ? product.price.replace(/[^0-9]/g, '') : '0';
    return {
      __html: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "description": product.fullDescription || product.description,
        "image": product.images?.map(img => `https://www.setareyakhi.ir${img}`) || [],
        "sku": `PROD-${product.id}`,
        "mpn": `PROD-${product.id}`,
        "brand": {
          "@type": "Brand",
          "name": "ستاره یخی"
        },
        "offers": {
          "@type": "Offer",
          "url": `https://www.setareyakhi.ir/products/${product.id}`,
          "priceCurrency": "IRR",
          "price": cleanPrice,
          "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
          "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
          "itemCondition": "https://schema.org/NewCondition",
          "seller": {
            "@type": "Organization",
            "name": "ستاره یخی"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "127",
          "bestRating": "5",
          "worstRating": "1"
        },
        "category": product.category,
        "additionalProperty": product.specifications ? Object.entries(product.specifications).map(([key, value]) => ({
          "@type": "PropertyValue",
          "name": key,
          "value": value
        })) : []
      })
    };
  };

  const generateFAQStructuredData = () => {
    if (!product?.faq) return null;
    return {
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": product.faq.map((item, index) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      })
    };
  };

  const generateBreadcrumbStructuredData = () => {
    if (!product) return null;
    return {
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "خانه",
            "item": "https://www.setareyakhi.ir/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "محصولات",
            "item": "https://www.setareyakhi.ir/products"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": product.name,
            "item": `https://www.setareyakhi.ir/products/${product.id}`
          }
        ]
      })
    };
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

  const renderDesktop = () => (
    <Box sx={{ minHeight: '100vh', bgcolor: '#FFF', pt: '80px', direction: 'ltr' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={generateProductStructuredData()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={generateFAQStructuredData()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={generateBreadcrumbStructuredData()} />

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Breadcrumbs sx={{ mb: 4, color: '#333', "& .MuiBreadcrumbs-separator": { marginLeft: '8px', marginRight: '8px' } }} separator="›" aria-label="breadcrumb">
          <MuiLink component={Link} href="/" sx={{ color: '#D4AF37', textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '14px', fontFamily: 'inherit' }}>
            <Home sx={{ fontSize: 20, verticalAlign: 'middle', ml: 0.5 }} /> خانه
          </MuiLink>
          <MuiLink component={Link} href="/products" sx={{ color: '#D4AF37', textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '14px', fontFamily: 'inherit' }}>
            <ShoppingBag sx={{ fontSize: 20, verticalAlign: 'middle', ml: 0.5 }} /> محصولات
          </MuiLink>
          <Typography sx={{ color: '#333' }}>{product.name}</Typography>
        </Breadcrumbs>

        {/* Fixed Desktop Layout */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "flex-start", justifyContent: "center", gap: 6 }}>
          {/* LEFT: Product Image */}
          <Box sx={{ flex: "1 1 50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}>
            <Box sx={{ width: "100%", maxWidth: "500px", mb: 3, borderRadius: 2, overflow: "hidden", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
              <Image src={product.images[selectedImage]} alt={product.name} width={600} height={500} style={{ width: "100%", height: "auto", objectFit: "cover" }} priority />
            </Box>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
              {product.images.map((image, index) => (
                <Box key={index} sx={{
                  width: 80, height: 80, borderRadius: 1, overflow: "hidden", cursor: "pointer",
                  border: selectedImage === index ? "2px solid #D4AF37" : "1px solid #ddd",
                  opacity: selectedImage === index ? 1 : 0.7, transition: "all 0.3s ease"
                }} onClick={() => setSelectedImage(index)}>
                  <Image src={image} alt={`${product.name} - تصویر ${index + 1}`} width={80} height={80} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </Box>
              ))}
            </Box>
          </Box>

          {/* RIGHT: Product Details */}
          <Box sx={{ flex: "1 1 50%", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", color: "#333", textAlign: "right" }}>
            {/* Tags */}
            <Box sx={{ mb: 2 }}>
              {product.tags && product.tags.map((tag, index) => (
                <Chip key={index} label={tag} size="small" sx={{ bgcolor: "#D4AF37", color: "#000", ml: 1, mb: 1, fontWeight: "bold" }} />
              ))}
            </Box>

            {/* Title */}
            <Typography component="h1" sx={{ mb: 2, fontWeight: "bold", fontSize: "2rem", lineHeight: 1.2 }}>{product.name}</Typography>

            {/* Price */}
            <Typography sx={{ color: "#D4AF37", fontWeight: "bold", mb: 2, fontSize: "1.6rem" }}>{product.price}</Typography>

            {/* Description */}
            <Typography sx={{ mb: 3, lineHeight: 1.8, fontSize: "1rem", textAlign:'left' }}>{product.fullDescription}</Typography>

            {/* Features */}
            {product.features && (
              <Box sx={{ mb: 4 }}>
                <Typography sx={{ fontWeight: "bold", mb: 1.5, color: "#D4AF37", textAlign:'left' }}>ویژگی‌های اصلی:</Typography>
                <ul style={{ margin: 0, paddingRight: "20px", textAlign:'left' }}>
                  {product.features.map((feature, i) => (
                    <li key={i} style={{ marginBottom: "8px", color: "#333", fontSize: "1rem", textAlign:'right' }}>{feature}</li>
                  ))}
                </ul>
              </Box>
            )}

            {/* Quantity + Add to Cart */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
              <Typography>تعداد:</Typography>
              <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #aaa", borderRadius: 1 }}>
                <Button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</Button>
                <Typography sx={{ px: 2 }}>{quantity}</Typography>
                <Button onClick={() => setQuantity(q => q + 1)}>+</Button>
              </Box>
              <Button variant="contained" startIcon={<ShoppingCart />} disabled={!product.inStock} onClick={handleAddToCart}
                sx={{ bgcolor: "#D4AF37", color: "#000", fontWeight: "bold", "&:hover": { bgcolor: "#b8941f" }, px: 5, py: 1.5 }}>
                {product.inStock ? "افزودن به سبد خرید" : "ناموجود"}
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Specifications Section */}
        <Box sx={{ mt: 6, direction: 'ltr' }}>
          <Typography component="h2" sx={{ mb: 2, color: '#D4AF37', fontWeight: 'bold', textAlign: 'left' }}>مشخصات فنی:</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 1, textAlign: 'left' }}>
            {Object.entries(product.specifications).map(([key, value]) => (
              <Box key={key} sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', py: 1.5, px: 3, borderBottom: '1px solid #eee', bgcolor: '#fffcfcff', borderRadius: 1 }}>
                <Typography variant="body2" sx={{ color: '#666', fontWeight: 'bold' }}>{key}:</Typography>
                <Typography variant="body2" sx={{ fontWeight: 'medium', color: '#000' }}>{value}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* FAQ Section */}
        <Box sx={{ mt: 6, direction: 'ltr' }}>
          <Typography component="h2" sx={{ mb: 3, color: '#D4AF37', fontWeight: 'bold', textAlign: 'left' }}>
            سوالات متداول درباره {product.name}:
          </Typography>
          <Box sx={{ width: '100%' }}>
            {product.faq && product.faq.map((item, index) => (
              <Accordion key={index} sx={{ mb: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', '&:before': { display: 'none' } }}>
                <AccordionSummary expandIcon={<ExpandMore sx={{ color: '#D4AF37' }} />} sx={{ bgcolor: '#f9f9f9', borderBottom: '1px solid #eee', '& .MuiAccordionSummary-content': { margin: '12px 0' } }}>
                  <Typography sx={{ fontWeight: 'bold', color: '#333', fontSize: '1rem' }}>{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: '#fff', py: 3 }}>
                  <Typography sx={{ color: '#555', lineHeight: 1.8, fontSize: '0.95rem' }}>{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
  const renderMobile = () => (
    <Box sx={{ minHeight: '100vh', bgcolor: '#FFF', pt: '70px', direction: 'ltr' }}>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateProductStructuredData()}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateFAQStructuredData()}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateBreadcrumbStructuredData()}
      />

      <Container sx={{ py: 3 }}>
        <Breadcrumbs sx={{ mb: 3, color: '#333', fontSize: '0.8rem' }} aria-label="breadcrumb">
          <MuiLink component={Link} href="/" sx={{ color: '#D4AF37', textDecoration: 'none' }}>
            خانه
          </MuiLink>
          <MuiLink component={Link} href="/products" sx={{ color: '#D4AF37', textDecoration: 'none' }}>
            محصولات
          </MuiLink>
          <Typography sx={{ color: '#333' }}>{product.name}</Typography>
        </Breadcrumbs>

        <Box sx={{ mb: 3 }}>
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            width={400}
            height={300}
            style={{ width: '100%', height: 'auto', borderRadius: 8 }}
            priority
          />
          <Box sx={{ display: 'flex', gap: 1, mt: 2, overflowX: 'auto' }}>
            {product.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${product.name} - تصویر ${index + 1}`}
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

        <Box sx={{ color: '#333' }}>
          <Typography component="h1" sx={{ mb: 1, fontWeight: 'bold', fontSize: '1.5rem' }}>
            {product.name}
          </Typography>
          
          <Typography component="p" sx={{ color: '#D4AF37', fontWeight: 'bold', mb: 2, fontSize: '1.3rem' }}>
            {product.price}
          </Typography>

          <Typography component="p" sx={{ mb: 3, lineHeight: 1.8 }}>
            {product.fullDescription}
          </Typography>

          {/* Features */}
          {product.features && (
            <Box sx={{ mb: 3 }}>
              <Typography component="h2" sx={{ mb: 2, color: '#D4AF37', fontWeight: 'bold', fontSize: '1.2rem' }}>
                ویژگی‌های اصلی:
              </Typography>
              <Box component="ul" sx={{ pl: 3, m: 0 }}>
                {product.features.map((feature, index) => (
                  <Typography key={index} component="li" sx={{ mb: 1, color: '#333', fontSize: '0.95rem' }}>
                    {feature}
                  </Typography>
                ))}
              </Box>
            </Box>
          )}

          {/* Quantity */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Typography>تعداد:</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: 1 }}>
              <Button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                sx={{ color: '#333', minWidth: '40px' }}
                aria-label="کاهش تعداد"
              >
                -
              </Button>
              <Typography sx={{ px: 2, minWidth: '40px', textAlign: 'center' }}>
                {quantity}
              </Typography>
              <Button
                onClick={() => setQuantity(q => q + 1)}
                sx={{ color: '#333', minWidth: '40px' }}
                aria-label="افزایش تعداد"
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
              width: '60vw',
              display: 'flex',
              justifyContent: 'center',
              '&:hover': {
                bgcolor: '#bda553ff'
              }
            }}
            aria-label={`افزودن ${product.name} به سبد خرید`}
          >
            {product.inStock ? 'افزودن به سبد خرید' : 'ناموجود'}
          </Button>

          {/* Specifications */}
          <Box sx={{ mb: 3, direction: 'ltr' }}>
            <Typography component="h2" sx={{ mb: 2, color: '#D4AF37', fontWeight: 'bold', textAlign: 'left', fontSize: '1.2rem' }}>
              مشخصات فنی:
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, textAlign: 'left' }}>
              {Object.entries(product.specifications).map(([key, value]) => (
                <Box
                  key={key}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    py: 1.5,
                    px: 2,
                    borderBottom: '1px solid #eee',
                    bgcolor: '#fffcfcff',
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

          {/* FAQ Section */}
          <Box sx={{ mt: 4, direction: 'ltr' }}>
            <Typography component="h2" sx={{ mb: 2, color: '#D4AF37', fontWeight: 'bold', textAlign: 'left', fontSize: '1.2rem' }}>
              سوالات متداول:
            </Typography>
            <Box sx={{ width: '100%' }}>
              {product.faq && product.faq.map((item, index) => (
                <Accordion 
                  key={index}
                  sx={{ 
                    mb: 1,
                    boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                    '&:before': { display: 'none' }
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore sx={{ color: '#D4AF37' }} />}
                    sx={{
                      bgcolor: '#f9f9f9',
                      minHeight: '48px',
                      '& .MuiAccordionSummary-content': {
                        margin: '8px 0'
                      }
                    }}
                    aria-controls={`faq-${index}-content`}
                    id={`faq-${index}-header`}
                  >
                    <Typography sx={{ fontWeight: 'bold', color: '#333', fontSize: '0.9rem' }}>
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ bgcolor: '#fff', py: 2 }}>
                    <Typography sx={{ color: '#555', lineHeight: 1.7, fontSize: '0.85rem' }}>
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
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
