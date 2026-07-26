import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "WORLDLOOM — Living Web World",
  description:
    "사람과 AI 주민이 같은 행동 규칙으로 살아가는 브라우저 네이티브 게임 세계.",
  openGraph: {
    title: "WORLDLOOM",
    description: "Every mind plays by the same rules.",
    images: [{ url: "/og-character.png", width: 1672, height: 941 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WORLDLOOM",
    description: "Every mind plays by the same rules.",
    images: ["/og-character.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
