import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono,
  Lora,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const displayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const bodyFont = Lora({
  subsets: ["latin"],
  variable: "--font-body",
});

const uiFont = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Eliseu C. Brito - Portfolio",
  description:
    "Engenharia de Software, Arquitetura de Sistemas e Impacto Social.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${uiFont.variable} ${monoFont.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}