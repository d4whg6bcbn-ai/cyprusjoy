import type { Metadata } from "next";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cyprus Joy | Building and Landscaping in Paphos, Cyprus",
  description:
    "Cyprus Joy provides garden landscaping, building renovations, artificial grass, aluminium fencing, painting, tiling and natural stone services in Paphos, Cyprus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
