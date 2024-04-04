import "@/styles/globals.css";

import type { Metadata } from "next";
import {
  Raleway,
  Poppins,
  Space_Mono,
  Architects_Daughter,
} from "next/font/google";

import Image from "next/image";
import ThemeProvider from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";

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
          <main className="flex min-h-screen flex-col">
            <div className="mx-4 mt-20 grow md:mx-6 lg:mx-0">
              {props.children}
            </div>
          </main>
          <div className="fixed inset-0 -z-50">
            <svg>
              <filter id="noiseFilter">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.6"
                  stitchTiles="stitch"
                />
              </filter>
            </svg>

            <svg>
              <filter id="noiseFilter2">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.6"
                  stitchTiles="stitch"
                />
              </filter>
              <clipPath id="rounded-clip">
                <rect x="0" y="0" width="300" height="300" rx="20" ry="20" />
              </clipPath>
            </svg>

            <svg>
              <filter id="noiseFilter3">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.6"
                  stitchTiles="stitch"
                />
              </filter>
              <clipPath id="rounded-clip2">
                <rect x="0" y="0" width="230" height="70" rx="20" ry="20" />
              </clipPath>
            </svg>
          </div>
          <Image
            alt="bg-image"
            src="/bg.svg"
            className="fixed inset-0 -z-50"
            height={1000}
            width={1000}
          />
          <Toaster />
          {props.modal}
        </ThemeProvider>
      </body>
    </html>
  );
}
