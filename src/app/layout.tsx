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
import Footer from "@/components/footer";

const firaCode = Space_Mono({
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

const spaceMono = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "700"],
});

// const dmSerifDisplay = DM_Serif_Display({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-heading",
//   weight: ["400"],
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          firaCode.variable,
          montserrat.variable,
          spaceMono.variable,
          architectsDaughtere.variable,
          "relative min-h-full max-w-[100vw]",
        )}
      >
        <ThemeProvider>
          <main className="flex min-h-screen flex-col">
            <div className="mx-4 mb-12 mt-20 grow md:mx-6 lg:mx-0">
              {props.children}
            </div>
            <Footer hasMarginBottom={false} />
          </main>

          <Toaster />
          {props.modal}
        </ThemeProvider>
      </body>
    </html>
  );
}
