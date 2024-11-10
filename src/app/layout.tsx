import { CustomCursor } from "@/components";
import { metadata } from "@/constants";
import "@/styles/globals.css";
import { Inter, Roboto_Mono } from "next/font/google";

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
// TODO: check if conflict with style.css
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
      </head>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
