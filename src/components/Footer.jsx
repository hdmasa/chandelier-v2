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

  // Desktop Layout (3 columns)
  const DesktopFooter = () => (
    <Grid container spacing={{ xs: 4, md: 6 }} sx={{ width: "100%", margin: 0 }}>
      {/* Contact Info - First Column */}
      <Grid item xs={12} md={4}>
        <Typography
          variant="h6"
          dir="rtl"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#d4af37",
            fontSize: { xs: "1.1rem", sm: "1.2rem" },
            fontFamily: "'IRANSans', sans-serif",
          }}
        >
          تماس
        </Typography>
        <Box dir="rtl" sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Phone fontSize="small" sx={{ color: "#d4af37" }} />
            <Typography
              variant="body2"
              sx={{
                color: "white",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                fontFamily: "'IRANSans', sans-serif",
                lineHeight: 1.6,
                transition: "color 0.3s ease",
                "&:hover": { color: "#d4af37" },
              }}
            >
              تلفن: 0098-9124634832
            </Typography>
          </Box>
          <Box dir="rtl" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Phone fontSize="small" dir="rtl" sx={{ color: "#d4af37" }} />
            <Typography
              variant="body2"
              sx={{
                color: "white",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                fontFamily: "'IRANSans', sans-serif",
                lineHeight: 1.6,
                transition: "color 0.3s ease",
                "&:hover": { color: "#d4af37" },
              }}
            >
              تلفن: 0098-9124613731
            </Typography>
          </Box>
          <Box dir="rtl" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocationOn fontSize="small" sx={{ color: "#d4af37" }} />
            <Typography
              variant="body2"
              sx={{
                color: "white",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                fontFamily: "'IRANSans', sans-serif",
                lineHeight: 1.6,
                transition: "color 0.3s ease",
                "&:hover": { color: "#d4af37" },
              }}
            >
              آدرس: تهران، لاله‌زار نو، پاساژ درافشان و خوانساری، طبقه اول، پلاک 2/3
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* Navigation Links - Second Column */}
      <Grid item xs={12} md={4}>
        <Typography
          variant="h6"
          dir="rtl"
          sx={{
            fontWeight: "bold",
            fontFamily: "'IRANSans', sans-serif",
            mb: 2,
            color: "#d4af37",
            fontSize: { xs: "1.1rem", sm: "1.2rem" },
          }}
        >
          لینک‌ها
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
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
          >
            <Home fontSize="small" />
            خانه
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
          >
            <ShoppingBag fontSize="small" />
            محصولات
          </Link>
        </Box>
      </Grid>

      {/* Brand Section - Third Column */}
      <Grid item xs={12} md={4}>
        <Typography
          variant="h5"
          dir="rtl"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#d4af37",
            fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2rem" },
          }}
        >
          ستاره یخی
        </Typography>
        <Typography
          variant="body2"
          dir="rtl"
          sx={{
            color: "white",
            fontSize: { xs: "0.9rem", sm: "1rem" },
            fontFamily: "'IRANSans', sans-serif",
            lineHeight: 1.8,
            mb: 2,
          }}
        >
          اولین و تنها تولیدکننده لوسترهای ابری در ایران، با طراحی منحصربه‌فرد و کیفیتی بی‌نظیر.
        </Typography>

        {/* Social Media */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton sx={{ color: "white", "&:hover": { color: "#d4af37" } }}>
            <Instagram />
          </IconButton>
          <IconButton sx={{ color: "white", "&:hover": { color: "#d4af37" } }}>
            <Facebook />
          </IconButton>
          <IconButton sx={{ color: "white", "&:hover": { color: "#d4af37" } }}>
            <WhatsApp />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );

  // Tablet Layout (2 columns - Contact & Links on top, Brand below)
  const TabletFooter = () => (
    <Grid container spacing={4} sx={{ width: "100%", margin: 0 }}>
      {/* First Row - Contact & Links */}
      <Grid item xs={6}>
        <Typography
          variant="h6"
          dir="rtl"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#d4af37",
            fontSize: "1.2rem",
            fontFamily: "'IRANSans', sans-serif",
          }}
        >
          تماس
        </Typography>
        <Box dir="rtl" sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Phone fontSize="small" sx={{ color: "#d4af37" }} />
            <Typography variant="body2" sx={{ color: "white", fontSize: "1rem" }}>
              0098-9124634832
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Phone fontSize="small" sx={{ color: "#d4af37" }} />
            <Typography variant="body2" sx={{ color: "white", fontSize: "1rem" }}>
              0098-9124613731
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={6}>
        <Typography
          variant="h6"
          dir="rtl"
          sx={{
            fontWeight: "bold",
            fontFamily: "'IRANSans', sans-serif",
            mb: 2,
            color: "#d4af37",
            fontSize: "1.2rem",
          }}
        >
          لینک‌ها
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Link href="/" underline="none" dir="rtl" sx={{ color: "white", "&:hover": { color: "#d4af37" } }}>
            خانه
          </Link>
          <Link href="/products" underline="none" dir="rtl" sx={{ color: "white", "&:hover": { color: "#d4af37" } }}>
            محصولات
          </Link>
        </Box>
      </Grid>

      {/* Second Row - Brand & Social */}
      <Grid item xs={12}>
        <Box sx={{ textAlign: "center", borderTop: "1px solid #333", pt: 3 }}>
          <Typography
            variant="h5"
            dir="rtl"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#d4af37",
              fontSize: "1.8rem",
            }}
          >
            ستاره یخی
          </Typography>
          <Typography
            variant="body2"
            dir="rtl"
            sx={{
              color: "white",
              fontSize: "1rem",
              fontFamily: "'IRANSans', sans-serif",
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            اولین و تنها تولیدکننده لوسترهای ابری در ایران
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <IconButton sx={{ color: "white", "&:hover": { color: "#d4af37" } }}>
              <Instagram />
            </IconButton>
            <IconButton sx={{ color: "white", "&:hover": { color: "#d4af37" } }}>
              <Facebook />
            </IconButton>
            <IconButton sx={{ color: "white", "&:hover": { color: "#d4af37" } }}>
              <WhatsApp />
            </IconButton>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );

  // Mobile Layout (Single column - Reordered)
  const MobileFooter = () => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {/* Navigation Links - First */}
      <Box>
        <Typography
          variant="h6"
          dir="rtl"
          sx={{
            fontWeight: "bold",
            fontFamily: "'IRANSans', sans-serif",
            mb: 2,
            color: "#d4af37",
            fontSize: "1.1rem",
          }}
        >
          لینک‌ها
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
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
          >
            <Home fontSize="small" />
            خانه
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
          >
            <ShoppingBag fontSize="small" />
            محصولات
          </Link>
        </Box>
      </Box>

      {/* Contact Info - Second */}
      <Box>
        <Typography
          variant="h6"
          dir="rtl"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#d4af37",
            fontSize: "1.1rem",
            fontFamily: "'IRANSans', sans-serif",
          }}
        >
          تماس
        </Typography>
        <Box dir="rtl" sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Phone fontSize="small" sx={{ color: "#d4af37" }} />
            <Typography variant="body2" sx={{ color: "white", fontSize: "0.9rem" }}>
              0098-9124634832
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Phone fontSize="small" sx={{ color: "#d4af37" }} />
            <Typography variant="body2" sx={{ color: "white", fontSize: "0.9rem" }}>
              0098-9124613731
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Brand Section - Third */}
      <Box sx={{ textAlign: "center", borderTop: "1px solid #333", pt: 3 }}>
        <Typography
          variant="h5"
          dir="rtl"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#d4af37",
            fontSize: "1.6rem",
          }}
        >
          ستاره یخی
        </Typography>
        <Typography
          variant="body2"
          dir="rtl"
          sx={{
            color: "white",
            fontSize: "0.9rem",
            fontFamily: "'IRANSans', sans-serif",
            lineHeight: 1.8,
            mb: 2,
          }}
        >
          اولین و تنها تولیدکننده لوسترهای ابری در ایران
        </Typography>
        
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          <IconButton sx={{ color: "white", "&:hover": { color: "#d4af37" } }}>
            <Instagram />
          </IconButton>
          <IconButton sx={{ color: "white", "&:hover": { color: "#d4af37" } }}>
            <Facebook />
          </IconButton>
          <IconButton sx={{ color: "white", "&:hover": { color: "#d4af37" } }}>
            <WhatsApp />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      id="contact"
      component="footer"
      sx={{
        backgroundColor: "#000000ff",
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
  );
}