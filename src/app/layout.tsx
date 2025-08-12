import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sharath Yelle - AI & ML Expert Portfolio",
  description: "Personal portfolio of Sharath Yelle, an AI & Machine Learning expert passionate about building intelligent systems with data, code, and creativity. Explore projects, skills, certifications, and professional experience in data science, machine learning, and web development.",
  keywords: ["Sharath Yelle", "AI Expert", "Machine Learning", "Data Science", "Python", "TensorFlow", "Portfolio", "Data Scientist", "Web Development", "Artificial Intelligence", "Deep Learning"],
  authors: [{ name: "Sharath Yelle" }],
  openGraph: {
    title: "Sharath Yelle - AI & ML Expert Portfolio",
    description: "Personal portfolio showcasing AI/ML projects, skills, and professional experience of Sharath Yelle",
    url: "https://sharathyelle.dev",
    siteName: "Sharath Yelle Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sharath Yelle - AI & ML Expert Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharath Yelle - AI & ML Expert Portfolio",
    description: "Personal portfolio showcasing AI/ML projects, skills, and professional experience",
    images: ["/og-image.jpg"]
  },
  other: {
    "twitter:creator": "@sharath_yelle",
    "theme-color": "#3B82F6"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
