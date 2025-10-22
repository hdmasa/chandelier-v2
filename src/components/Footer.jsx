"use client";
import {
  Box,
  Typography,
  Link,
  Grid,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  WhatsApp,
  Home,
  ShoppingBag,
  Phone,
  LocationOn,
} from "@mui/icons-material";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // Structured data for local business (SEO)
  const businessStructuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "ستاره یخی",
    "description": "اولین و تنها تولیدکننده لوسترهای ابری در ایران، با طراحی منحصربه‌فرد و کیفیتی بی‌نظیر",
    "url": "https://yourwebsite.com",
    "telephone": "+989124634832",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "تهران، لاله‌زار نو، پاساژ درافشان و خوانساری، طبقه اول، پلاک 2/3",
      "addressLocality": "Tehran",
      "addressCountry": "IR"
    },
    "areaServed": "Iran",
    "knowsAbout": ["لوستر ابری", "تولید لوستر", "طراحی نورپردازی"]
  };

  // Desktop Layout (3 columns)
  const DesktopFooter = () => (
    <Grid container spacing={{ xs: 4, md: 6 }} sx={{ width: "100%", margin: 0 }} component="section">
      {/* Contact Info - First Column */}
      <Grid item xs={12} md={4}>
        <Typography
          variant="h2"
          component="h3"
          dir="rtl"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#d4af37",
            fontSize: { xs: "1.1rem", sm: "1.2rem" },
            fontFamily: "'IRANSans', sans-serif",
          }}
        >
          تماس با ما
        </Typography>
        <Box dir="rtl" sx={{ display: "flex", flexDirection: "column", gap: 1.2 }} component="address">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Phone fontSize="small" sx={{ color: "#d4af37" }} aria-hidden="true" />
            <Link
              href="tel:+989124634832"
              underline="none"
              sx={{
                color: "white",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                fontFamily: "'IRANSans', sans-serif",
                lineHeight: 1.6,
                transition: "color 0.3s ease",
                "&:hover": { color: "#d4af37" },
              }}
              aria-label="تماس با شماره ۰۰۹۸-۹۱۲۴۶۳۴۸۳۲"
            >
              تلفن: 0098-9124634832
            </Link>
          </Box>
          <Box dir="rtl" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Phone fontSize="small" dir="rtl" sx={{ color: "#d4af37" }} aria-hidden="true" />
            <Link
              href="tel:+989124613731"
              underline="none"
              sx={{
                color: "white",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                fontFamily: "'IRANSans', sans-serif",
                lineHeight: 1.6,
                transition: "color 0.3s ease",
                "&:hover": { color: "#d4af37" },
              }}
              aria-label="تماس با شماره ۰۰۹۸-۹۱۲۴۶۱۳۷۳۱"
            >
              تلفن: 0098-9124613731
            </Link>
          </Box>
          <Box dir="rtl" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocationOn fontSize="small" sx={{ color: "#d4af37" }} aria-hidden="true" />
            <Typography
              variant="body2"
              component="p"
              sx={{
                color: "white",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                fontFamily: "'IRANSans', sans-serif",
                lineHeight: 1.6,
                transition: "color 0.3s ease",
                "&:hover": { color: "#d4af37" },
              }}
              aria-label="آدرس فروشگاه: تهران، لاله‌زار نو، پاساژ درافشان و خوانساری، طبقه اول، پلاک 2/3"
            >
              آدرس: تهران، لاله‌زار نو، پاساژ درافشان و خوانساری، طبقه اول، پلاک 2/3
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* Navigation Links - Second Column */}
      <Grid item xs={12} md={4}>
        <Typography
          variant="h2"
          component="h3"
          dir="rtl"
          sx={{
            fontWeight: "bold",
            fontFamily: "'IRANSans', sans-serif",
            mb: 2,
            color: "#d4af37",
            fontSize: { xs: "1.1rem", sm: "1.2rem" },
          }}
        >
          دسترسی سریع
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }} component="nav" aria-label="منوی اصلی">
          <Link
            href="/"
            underline="none"
            dir="rtl"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "white",
              fontSize: { xs: "0.9rem", sm: "1rem" },
              "&:hover": { color: "#d4af37" },
              transition: "color 0.3s ease",
            }}
            aria-label="رفتن به صفحه اصلی"
          >
            <Home fontSize="small" aria-hidden="true" />
            صفحه اصلی
          </Link>
          <Link
            href="/products"
            underline="none"
            dir="rtl"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "white",
              fontSize: { xs: "0.9rem", sm: "1rem" },
              "&:hover": { color: "#d4af37" },
              transition: "color 0.3s ease",
            }}
            aria-label="مشاهده محصولات لوستر ابری"
          >
            <ShoppingBag fontSize="small" aria-hidden="true" />
            محصولات لوستر ابری
          </Link>
        </Box>
      </Grid>

      {/* Brand Section - Third Column */}
      <Grid item xs={12} md={4}>
        <Typography
          variant="h1"
          component="h2"
          dir="rtl"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#d4af37",
            fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2rem" },
          }}
          aria-label="ستاره یخی - تولید کننده لوستر ابری"
        >
          ستاره یخی
        </Typography>
        <Typography
          variant="body2"
          component="p"
          dir="rtl"
          sx={{
            color: "white",
            fontSize: { xs: "0.9rem", sm: "1rem" },
            fontFamily: "'IRANSans', sans-serif",
            lineHeight: 1.8,
            mb: 2,
          }}
          aria-label="شرکت ستاره یخی، اولین و تنها تولیدکننده لوسترهای ابری در ایران"
        >
          اولین و تنها تولیدکننده لوسترهای ابری در ایران، با طراحی منحصربه‌فرد و کیفیتی بی‌نظیر.
        </Typography>

        {/* Social Media */}
        <Box sx={{ display: "flex", gap: 1 }} component="div" aria-label="شبکه های اجتماعی">
          <IconButton 
            component="a"
            href="https://instagram.com/yourprofile" 
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white", "&:hover": { color: "#d4af37" } }}
            aria-label="ما را در اینستاگرام دنبال کنید"
          >
            <Instagram aria-hidden="true" />
          </IconButton>
          <IconButton 
            component="a"
            href="https://facebook.com/yourprofile" 
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white", "&:hover": { color: "#d4af37" } }}
            aria-label="ما را در فیسبوک دنبال کنید"
          >
            <Facebook aria-hidden="true" />
          </IconButton>
          <IconButton 
            component="a"
            href="https://wa.me/989124634832" 
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white", "&:hover": { color: "#d4af37" } }}
            aria-label="با ما در واتساپ گفتگو کنید"
          >
            <WhatsApp aria-hidden="true" />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );

  // Tablet Layout (2 columns - Contact & Links on top, Brand below)
  const TabletFooter = () => (
    <Grid container spacing={4} sx={{ width: "100%", margin: 0 }} component="section">
      {/* First Row - Contact & Links */}
      <Grid item xs={6}>
        <Typography
          variant="h2"
          component="h3"
          dir="rtl"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#d4af37",
            fontSize: "1.2rem",
            fontFamily: "'IRANSans', sans-serif",
          }}
        >
          تماس با ما
        </Typography>
        <Box dir="rtl" sx={{ display: "flex", flexDirection: "column", gap: 1.2 }} component="address">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Phone fontSize="small" sx={{ color: "#d4af37" }} aria-hidden="true" />
            <Link 
              href="tel:+989124634832"
              underline="none"
              sx={{ color: "white", fontSize: "1rem", "&:hover": { color: "#d4af37" } }}
              aria-label="تماس با شماره ۰۰۹۸-۹۱۲۴۶۳۴۸۳۲"
            >
              0098-9124634832
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Phone fontSize="small" sx={{ color: "#d4af37" }} aria-hidden="true" />
            <Link 
              href="tel:+989124613731"
              underline="none"
              sx={{ color: "white", fontSize: "1rem", "&:hover": { color: "#d4af37" } }}
              aria-label="تماس با شماره ۰۰۹۸-۹۱۲۴۶۱۳۷۳۱"
            >
              0098-9124613731
            </Link>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={6}>
        <Typography
          variant="h2"
          component="h3"
          dir="rtl"
          sx={{
            fontWeight: "bold",
            fontFamily: "'IRANSans', sans-serif",
            mb: 2,
            color: "#d4af37",
            fontSize: "1.2rem",
          }}
        >
          دسترسی سریع
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }} component="nav" aria-label="منوی اصلی">
          <Link 
            href="/" 
            underline="none" 
            dir="rtl" 
            sx={{ color: "white", "&:hover": { color: "#d4af37" } }}
            aria-label="رفتن به صفحه اصلی"
          >
            صفحه اصلی
          </Link>
          <Link 
            href="/products" 
            underline="none" 
            dir="rtl" 
            sx={{ color: "white", "&:hover": { color: "#d4af37" } }}
            aria-label="مشاهده محصولات لوستر ابری"
          >
            محصولات لوستر ابری
          </Link>
        </Box>
      </Grid>

      {/* Second Row - Brand & Social */}
      <Grid item xs={12}>
        <Box sx={{ textAlign: "center", borderTop: "1px solid #333", pt: 3 }}>
          <Typography
            variant="h1"
            component="h2"
            dir="rtl"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#d4af37",
              fontSize: "1.8rem",
            }}
            aria-label="ستاره یخی - تولید کننده لوستر ابری"
          >
            ستاره یخی
          </Typography>
          <Typography
            variant="body2"
            component="p"
            dir="rtl"
            sx={{
              color: "white",
              fontSize: "1rem",
              fontFamily: "'IRANSans', sans-serif",
              lineHeight: 1.8,
              mb: 2,
            }}
            aria-label="شرکت ستاره یخی، اولین و تنها تولیدکننده لوسترهای ابری در ایران"
          >
            اولین و تنها تولیدکننده لوسترهای ابری در ایران
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }} component="div" aria-label="شبکه های اجتماعی">
            <IconButton 
              component="a"
              href="https://instagram.com/yourprofile" 
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white", "&:hover": { color: "#d4af37" } }}
              aria-label="ما را در اینستاگرام دنبال کنید"
            >
              <Instagram aria-hidden="true" />
            </IconButton>
            <IconButton 
              component="a"
              href="https://facebook.com/yourprofile" 
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white", "&:hover": { color: "#d4af37" } }}
              aria-label="ما را در فیسبوک دنبال کنید"
            >
              <Facebook aria-hidden="true" />
            </IconButton>
            <IconButton 
              component="a"
              href="https://wa.me/989124634832" 
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white", "&:hover": { color: "#d4af37" } }}
              aria-label="با ما در واتساپ گفتگو کنید"
            >
              <WhatsApp aria-hidden="true" />
            </IconButton>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );

  // Mobile Layout (Single column - Reordered)
  const MobileFooter = () => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }} component="section">
      {/* Navigation Links - First */}
      <Box>
        <Typography
          variant="h2"
          component="h3"
          dir="rtl"
          sx={{
            fontWeight: "bold",
            fontFamily: "'IRANSans', sans-serif",
            mb: 2,
            color: "#d4af37",
            fontSize: "1.1rem",
          }}
        >
          دسترسی سریع
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }} component="nav" aria-label="منوی اصلی">
          <Link
            href="/"
            underline="none"
            dir="rtl"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "white",
              fontSize: "0.9rem",
              "&:hover": { color: "#d4af37" },
            }}
            aria-label="رفتن به صفحه اصلی"
          >
            <Home fontSize="small" aria-hidden="true" />
            صفحه اصلی
          </Link>
          <Link
            href="/products"
            underline="none"
            dir="rtl"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "white",
              fontSize: "0.9rem",
              "&:hover": { color: "#d4af37" },
            }}
            aria-label="مشاهده محصولات لوستر ابری"
          >
            <ShoppingBag fontSize="small" aria-hidden="true" />
            محصولات لوستر ابری
          </Link>
        </Box>
      </Box>

      {/* Contact Info - Second */}
      <Box>
        <Typography
          variant="h2"
          component="h3"
          dir="rtl"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#d4af37",
            fontSize: "1.1rem",
            fontFamily: "'IRANSans', sans-serif",
          }}
        >
          تماس با ما
        </Typography>
        <Box dir="rtl" sx={{ display: "flex", flexDirection: "column", gap: 1.2 }} component="address">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Phone fontSize="small" sx={{ color: "#d4af37" }} aria-hidden="true" />
            <Link 
              href="tel:+989124634832"
              underline="none"
              sx={{ color: "white", fontSize: "0.9rem", "&:hover": { color: "#d4af37" },fontFamily: "'IRANSans', sans-serif", }}
              aria-label="تماس با شماره ۰۰۹۸-۹۱۲۴۶۳۴۸۳۲"
            >
              0098-9124634832
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Phone fontSize="small" sx={{ color: "#d4af37" }} aria-hidden="true" />
            <Link 
              href="tel:+989124613731"
              underline="none"
              sx={{ color: "white", fontSize: "0.9rem", "&:hover": { color: "#d4af37" } }}
              aria-label="تماس با شماره ۰۰۹۸-۹۱۲۴۶۱۳۷۳۱"
            >
              0098-9124613731
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Brand Section - Third */}
      <Box sx={{ textAlign: "center", borderTop: "1px solid #333", pt: 3 }}>
        <Typography
          variant="h1"
          component="h2"
          dir="rtl"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#d4af37",
            fontSize: "1.6rem",
          }}
          aria-label="ستاره یخی - تولید کننده لوستر ابری"
        >
          ستاره یخی
        </Typography>
        <Typography
          variant="body2"
          component="p"
          dir="rtl"
          sx={{
            color: "white",
            fontSize: "0.9rem",
            fontFamily: "'IRANSans', sans-serif",
            lineHeight: 1.8,
            mb: 2,
          }}
          aria-label="شرکت ستاره یخی، اولین و تنها تولیدکننده لوسترهای ابری در ایران"
        />
          اولین و تنها تولیدکننده لوسترهای ابری در ایران
        </Box>
        
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }} component="div" aria-label="شبکه های اجتماعی">
          <IconButton 
            component="a"
            href="https://instagram.com/yourprofile" 
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white", "&:hover": { color: "#d4af37" } }}
            aria-label="ما را در اینستاگرام دنبال کنید"
          >
            <Instagram aria-hidden="true" />
          </IconButton>
          <IconButton 
            component="a"
            href="https://facebook.com/yourprofile" 
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white", "&:hover": { color: "#d4af37" } }}
            aria-label="ما را در فیسبوک دنبال کنید"
          >
            <Facebook aria-hidden="true" />
          </IconButton>
          <IconButton 
            component="a"
            href="https://wa.me/989124634832" 
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white", "&:hover": { color: "#d4af37" } }}
            aria-label="با ما در واتساپ گفتگو کنید"
          >
            <WhatsApp aria-hidden="true" />
          </IconButton>
        </Box>
      </Box>
  );

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessStructuredData) }}
      />
      
      <Box
        id="contact"
        component="footer"
        role="contentinfo"
        aria-label="پاورقی سایت ستاره یخی"
        sx={{
          backgroundColor: "#272c30",
          color: "white",
          width: "100%",
          m: 0,
          p: 0,
          overflowX: "hidden",
        }}
      >
        <Box
          sx={{
            pt: { xs: 4, sm: 6, md: 8 },
            pb: { xs: 4, sm: 6, md: 8 },
            px: { xs: 2, sm: 3, md: 6 },
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {isDesktop && <DesktopFooter />}
          {isTablet && <TabletFooter />}
          {isMobile && <MobileFooter />}
        </Box>
      </Box>
    </>
  );
}