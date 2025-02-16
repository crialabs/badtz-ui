import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";
import PlausibleProvider from "next-plausible";

export const metadata: Metadata = {
  title: "BadtzUI • UI Components for React JS",
  description:
    "An expanding collection of 70+ free UI components. Production-grade animations with Framer Motion. Weekly updates. Open source. React, Tailwind, TypeScript & JavaScript.",
  openGraph: {
    title: "BadtzUI - Modern React Components",
    images: "/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "BadtzUI - UI Components for React JS",
    description:
      "An expanding collection of 70+ free UI components. Production-grade animations with Framer Motion. Weekly updates. Open source. React, Tailwind, TypeScript & JavaScript.",
    images: "/twitter-image.png",
    site: "@badtz_ui",
  },
};

const Gilroy = localFont({
  variable: "--font-gilroy",
  display: "swap",
  src: [
    {
      path: "../fonts/font.woff2",
      weight: "600",
      style: "semibold",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PlausibleProvider domain="badtz-ui.com" taggedEvents />
        <script
          defer
          data-domain="badtz-ui.com"
          data-api="/plausible/api/event"
          src="/plausible/js/script.js"
        ></script>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="icon"
          href="/favicon-search.ico"
          type="image/x-icon"
          sizes="48x48"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${GeistSans.className} ${Gilroy.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
