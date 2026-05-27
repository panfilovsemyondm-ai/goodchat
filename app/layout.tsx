import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoodChat — Корпоративный мессенджер с шифрованием SS3",
  description: "Защищённый корпоративный мессенджер с шифрованием SS3 и децентрализованными серверами. Голосовые и видеозвонки, файлы, чаты — без утечек данных.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
