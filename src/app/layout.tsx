import { CustomCursor } from "@/components";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";

const metadata: Metadata = {
  title: "Lymeng Naret",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{String(metadata.title) ?? ""}</title>
        <link rel="icon" href="/logo1.ico" type="image/x-icon" />
      </head>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
