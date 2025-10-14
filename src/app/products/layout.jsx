// app/products/layout.jsx
"use client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import theme from "@/src/styles/theme";
import stylisRTLPlugin from "stylis-plugin-rtl";
import ProductsNavbar from "@/src/components/ProductsNavbar";
import Footer from '@/src/components/Footer'

const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [stylisRTLPlugin],
});

export default function ProductsLayout({ children }) {
  return (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProductsNavbar />
        {children}
        <Footer/>
      </ThemeProvider>
    </CacheProvider>
  );
}