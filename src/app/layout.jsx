'use client';
import { ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import theme from "@/src/styles/theme";
import stylisRTLPlugin from "stylis-plugin-rtl";
import "../styles/globals.css";
import ClientLayout from "./ClientLayout";

const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [stylisRTLPlugin],
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-black text-white overflow-x-hidden">
        <CacheProvider value={rtlCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ClientLayout>
              {children}
            </ClientLayout>
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}