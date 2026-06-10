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
  metadataBase: new URL("https://tommybotabara1.github.io"),
  title: {
    default: "Tommy Botabara | Technology Consultant & Data Automation Engineer",
    template: "%s | Tommy Botabara",
  },
  description:
    "Portfolio of Tommy Botabara, a technology consultant and data automation engineer specializing in Python, SQL, Snowflake, ETL, business process automation, and practical technology solutions.",
  openGraph: {
    title: "Tommy Botabara | Technology Consultant & Data Automation Engineer",
    description:
      "Explore projects by Tommy Botabara across technology consulting, data automation, Snowflake ETL, reporting automation, data migration, and business-aligned technical delivery.",
    url: "https://tommybotabara1.github.io",
    siteName: "Tommy Botabara",
    images: [
      {
        url: "/portfolio/hero-visual.jpg",
        width: 1536,
        height: 1024,
        alt: "Abstract editorial portfolio visual.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tommy Botabara | Technology Consultant & Data Automation Engineer",
    description:
      "Technology consulting, data automation, Snowflake ETL, reporting automation, data migration, and business-aligned technical delivery.",
    images: ["/portfolio/hero-visual.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
