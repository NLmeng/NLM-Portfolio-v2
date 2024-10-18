import CustomCursor from "@/components/CustomCursor";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Lymeng Naret",
  description: "Lymeng Naret is a software engineer.", //TODO: add description
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
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
