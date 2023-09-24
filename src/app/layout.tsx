import "@/styles/globals.css";

import type { Metadata } from "next";
import {
  Raleway,
  Poppins,
  Space_Mono,
  Architects_Daughter,
} from "next/font/google";

import ThemeProvider from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";
import NoiseOverlay from "@/components/overlay";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-code",
  weight: "400",
});

const architectsDaughtere = Architects_Daughter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quote",
  weight: "400",
});

const montserrat = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.SITE_URL}`),
  title: {
    default: "Patrick Xin",
    template: "%s | Patrick Xin",
  },
  description: siteConfig.description,
  openGraph: {
    title: "Patrick Xin",
    description: siteConfig.description,
    url: `${siteConfig.url}`,
    siteName: "Patrick Xin",
    locale: "en-US",
    type: "website",
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
  twitter: {
    title: "Patrick Xin",
    card: "summary_large_image",
  },
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          spaceMono.variable,
          montserrat.variable,
          poppins.variable,
          architectsDaughtere.variable,
          "relative min-h-full max-w-[100vw]",
        )}
      >
        <ThemeProvider>
          <NoiseOverlay />
          <main className="flex min-h-screen flex-col">
            <div className="mx-4 mt-20 grow md:mx-6 lg:mx-0">
              {props.children}
            </div>
          </main>

          <Toaster />
          {props.modal}
        </ThemeProvider>
      </body>
    </html>
  );
}
