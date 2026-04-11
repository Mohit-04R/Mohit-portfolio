import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohit Choudhary| Frontend Developer Developer Portfolio",
  description:
    "Mohit Choudhary- Frontend Developer from Kangra, Himachal Pradesh. Passionate about building scalable web applications. Student at MCM DAV College Kangra.",
  keywords: [
    "Mohit Choudhary",
    "Mohit Choudhary Kangra",
    "Mohit Choudhary MCM DAV ",
    "Frontend  Developer Portfolio",
    "Web Developer Kangra",
    "Kangra",
    "MCM DAV College Kangra",
    "MERN Stack Developer India",
    "Mohit ChoudharyWeb Developer",
  ],
  authors: [{ name: "Mohit Choudhary" }],
  verification: {
    google: "C8zwPLeRq5EYqrgrcqDDR6Zep_9vQRvaohWR_Fw62y4",
  },
  openGraph: {
    title: "Mohit Choudhary | Frontend Developer Portfolio",
    description:
      "Mohit Choudhary- Frontend Developer from Kangra, Himachal Pradesh. Passionate about building scalable web applications. Student at MCM DAV College Kangra.",
    url: "https://mohit-portfolio-inky.vercel.app/",
    siteName: "Mohit Choudhary Portfolio",
    images: [
      {
        url: "/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Mohit Choudhary Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Choudhary | Frontend  Developer",
    description:
      "FRontend  Developer from Kangra, Himachal Pradesh. Specialized in React, Node.js, and scalable web solutions.",
    images: ["/portfolio.png"],
  },
  alternates: {
    canonical: "https://mohit-portfolio-inky.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/m logo.png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohit Choudhary",
              url: "https://mohit-portfolio-inky.vercel.app/",
              jobTitle: "Full Stack Developer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "MCM DAV",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kangra",
                addressRegion: "Himachal Pradesh",
                addressCountry: "India",
              },
              sameAs: [
                "https://github.com/Mohit-04R",
                "https://www.linkedin.com/in/mohit-choudhary-3145aa2b2/",
                "https://www.instagram.com/mohit_choudhary_0.1/",
                "https://mohit-portfolio-inky.vercel.app/",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
