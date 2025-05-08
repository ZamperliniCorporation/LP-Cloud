import type React from "react";
import type { Metadata } from "next";
import { ltWave } from "@/lib/fonts";
import { LanguageProvider } from "@/i18n/language-context";
import { ThemeProvider } from "@/components/theme/theme-context";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleTagManager from "@/components/GoogleTagManager";
import "./globals.css";

export const metadata: Metadata = {
  title: "HyWork Cloud - O primeiro portal corporativo no-code do Brasil",
  description: "Crie experiências únicas para seus profissionais sem precisar de conhecimentos técnicos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <GoogleAnalytics />
        <GoogleTagManager />
      </head>
      <body className={`${ltWave.variable} dark-transition`} suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
