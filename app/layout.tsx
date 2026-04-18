import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Comnata — анонимный мессенджер",
  description: "Общайтесь анонимно. Без номера телефона, без сбора данных, с E2E шифрованием. Comnata — мессенджер для тех, кто ценит приватность.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className={`${inter.className} min-h-full`}>{children}</body>
    </html>
  );
}
