import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "MoveEase - Packers & Movers",
  description: "Professional Packers and Movers Service",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className=" relative bg-white text-slate-900 antialiased">
        
        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT (auto spacing handled) */}
        <main className="relative pt-24 min-h-screen">
          {children}
        </main>

      <CTA />
      

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  );
}