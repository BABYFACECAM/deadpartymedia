import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
      <body className={`${inter.className}flex min-h-screen m-0 p-0 flex-col`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
