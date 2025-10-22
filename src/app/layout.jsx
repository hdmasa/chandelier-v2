'use client';
import { ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import theme from "@/src/styles/theme";
import stylisRTLPlugin from "stylis-plugin-rtl";
import "../styles/globals.css";
import ClientLayout from "./ClientLayout";
import Head from "next/head";

const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [stylisRTLPlugin],
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <Head>
        {/*JSON-LD SCHEMA FOR LOCAL BUSINESS*/}
        <script
         type="application/ld+json"
         dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"LocalBusiness",
            "name":"ستاره یخی",
            "url":"https://www.setareyakhi.ir/",
            "telephone":"0098-9124634832",
            "address":{
              "@type":"PostalAddress",
              "streetAddress":"Tehran,Iran",
              "addressLocality":"Tehran",
              "addressRegion":"Tehran",
              "postalCode":"22222222",
              "addressCountry":"IR"
            },
            "description":"تولید کننده لوستر های ابری لوکس در ایران-طراحی و ساهتن لوستر های مدرن و دست ساز.",
            "priceRange":"$$",
            "sameAs":[
              "https://instagram.com/setareyakhi",
              "https://www.whatsapp.com/setareyakhi"
            ]
          })
         }}
        />
      </Head>

      
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