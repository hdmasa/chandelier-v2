"use client";
import { usePathname } from "next/navigation";
import Navigation from "@/src/components/Navigation";
import Footer from "@/src/components/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isProductsPage = pathname.startsWith("/products");

  return (
    <>
      {!isProductsPage && <Navigation />}
      {children}
      {!isProductsPage && <Footer />}
    </>
  );
}