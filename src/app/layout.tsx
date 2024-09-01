import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import '../lib/fontawesome';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT Tetra Mitra Logistic",
  description: "PT Tetra Mitra Logistic is a leading company in the forwarding industry, providing comprehensive logistics and transportation solutions tailored to meet the diverse needs of businesses across various sectors. With a strong commitment to efficiency, reliability, and customer satisfaction, PT Tetra Mitra Logistic offers a wide range of services, including freight forwarding, warehousing, distribution, and supply chain management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
