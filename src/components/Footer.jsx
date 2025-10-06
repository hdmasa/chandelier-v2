"use client";
import {
  Box,
  Typography,
  Link,
  Grid,
  IconButton,
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
  return (
    <Box
      id="contacts"
      component="footer"
      sx={{
        backgroundColor: "#000000ff",
        color: "white",
        fontFamily: "'IRANSans', sans-serif",
        width: "100%",   // ✅ use 100%, not 100vw (avoids scrollbar overflow)
        m: 0,
        p: 0,
        overflowX: "hidden", // ✅ make sure nothing spills
      }}
    >
      <Box
        sx={{
          pt: { xs: 6, sm: 8, md: 10 },
          pb: { xs: 6, sm: 8, md: 10 },
          px: { xs: 2, sm: 4, md: 6 }, // ✅ apply padding here, not on Grid
          width: "100%",
          boxSizing: "border-box", // ✅ padding won’t push layout wider
        }}
      >
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          sx={{
            width: "100%",
            margin: 0,  // ✅ no auto-centering
          }}
        >
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: 2,
                color: "#d4af37",
                fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2rem" },
                 fontFamily: "'IRANSans', sans-serif",
              }}
            >
              ستاره یخی
            </Typography>
            <Typography
              variant="body2"
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

          {/* Navigation Links */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
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

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
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
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
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
                  تلفن: 0098-9124613731
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
        </Grid>
      </Box>
    </Box>
  );
}
