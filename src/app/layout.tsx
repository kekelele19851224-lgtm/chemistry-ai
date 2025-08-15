import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Chemistry AI - Intelligent Chemistry Assistant",
  description: "Learn chemistry with our AI-powered assistant. Interactive periodic table, molecular calculators, 3D molecule viewer, and comprehensive chemistry Q&A database.",
  keywords: [
    "chemistry",
    "chemistry AI",
    "periodic table",
    "molecular calculator",
    "chemistry education",
    "chemistry tools",
    "chemical equations",
    "molecular weight",
    "pH calculator",
    "gas laws",
    "chemistry assistant"
  ],
  authors: [{ name: "Chemistry AI Team" }],
  creator: "Chemistry AI",
  publisher: "Chemistry AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://chemistry-ai.vercel.app"),
  openGraph: {
    title: "Chemistry AI - Intelligent Chemistry Assistant",
    description: "Learn chemistry with our AI-powered assistant. Interactive tools, calculators, and comprehensive knowledge base.",
    url: "https://chemistry-ai.vercel.app",
    siteName: "Chemistry AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chemistry AI - Interactive Chemistry Learning Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chemistry AI - Intelligent Chemistry Assistant",
    description: "Learn chemistry with our AI-powered assistant. Interactive tools and comprehensive knowledge base.",
    images: ["/twitter-image.png"],
    creator: "@chemistryai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "education",
  classification: "Chemistry Education Platform",
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#2563eb",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "Chemistry AI",
    statusBarStyle: "default",
  },
  applicationName: "Chemistry AI",
  alternates: {
    canonical: "https://chemistry-ai.vercel.app",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563eb" },
    { media: "(prefers-color-scheme: dark)", color: "#1d4ed8" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Chemistry AI",
              description: "Interactive chemistry learning platform with AI-powered assistance",
              url: "https://chemistry-ai.vercel.app",
              logo: "https://chemistry-ai.vercel.app/logo.png",
              foundingDate: "2024",
              educationalCredentialAwarded: "Chemistry Knowledge",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Chemistry Tools and Resources",
                itemListElement: [
                  {
                    "@type": "Course",
                    name: "Interactive Periodic Table",
                    description: "Explore chemical elements with detailed properties and trends"
                  },
                  {
                    "@type": "Course", 
                    name: "Chemistry Calculators",
                    description: "Calculate molecular weight, molarity, pH, and gas laws"
                  },
                  {
                    "@type": "Course",
                    name: "3D Molecular Viewer",
                    description: "Visualize molecular structures in 3D"
                  }
                ]
              }
            })
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}