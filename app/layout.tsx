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
  title: "JHAY. Portfolio",
  description: "Frontend-focused full-stack developer building responsive, production-ready web experiences with React, Next.js, TypeScript, and Node.js.",
  metadataBase: new URL("https://jhay.alcorcon.dev"),
  openGraph: {
    title: "JHAY. | Frontend & Full-Stack Developer",
    description: "Explore selected web projects, frontend engineering, and full-stack development work.",
    url: "https://jhay.alcorcon.dev",
    siteName: "JHAY. Portfolio",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "JHAY. Developer portfolio preview" }],
  },
  twitter: { card: "summary_large_image", title: "JHAY. | Developer Portfolio", images: ["/opengraph-image"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
