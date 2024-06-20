import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dead Party Media",
  description: "The Best Place to Find Arkansas Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}flex flex-col`}>
        <Navbar />
        <main className="flex-grow min-h-screen m-2 p-2">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
