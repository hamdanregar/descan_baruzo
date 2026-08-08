import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desa Baruzo - Portal Resmi Desa",
  description: "Sistem Informasi Terpadu untuk Kemajuan Desa Baruzo dan Pelayanan Masyarakat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
