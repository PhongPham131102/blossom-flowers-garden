import type { Metadata } from "next";

import "./globals.css";
import "./styles/globals.scss"; // Import SCSS toàn cục
import "./styles/style.module.scss"; // Import SCSS module
import { Roboto_Mono } from "next/font/google";

const dmMono = Roboto_Mono({
  style: ["normal", "italic"],
  subsets: ["latin", "vietnamese", "greek"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Chúc chị Tịnh 20/10 dui dẻ nhennnnn",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmMono.className} antialiased`}>{children}</body>
    </html>
  );
}
