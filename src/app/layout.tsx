import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://selmo.ai"),
  title: {
    default: "selmo. | 話すたび、強くなる",
    template: "%s | selmo.",
  },
  description:
    "selmo.は商談分析・テレアポ分析・AIロープレ・ナレッジ管理をひとつにし、営業教育を仕組み化するAIプラットフォームです。",
  keywords: [
    "selmo",
    "営業AI",
    "商談分析",
    "テレアポ分析",
    "営業教育",
    "営業組織改善",
    "AIロープレ",
  ],
  openGraph: {
    title: "selmo. | 話すたび、強くなる。",
    description:
      "商談分析・テレアポ分析・AIロープレ・ナレッジ管理をひとつに。営業教育を仕組み化するAIプラットフォーム。",
    url: "https://selmo.ai",
    siteName: "selmo.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "selmo. 営業教育を仕組み化するAIプラットフォーム",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "selmo. | 話すたび、強くなる。",
    description: "営業教育を仕組み化するAIプラットフォーム",
    images: ["/og.png"],
  },
  icons: {
    icon: "/sechat.png",
    apple: "/sechat.png",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
