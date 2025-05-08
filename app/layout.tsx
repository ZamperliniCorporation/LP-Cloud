import type React from "react";
import type { Metadata } from "next";
import { ltWave } from "@/lib/fonts";
import { LanguageProvider } from "@/i18n/language-context";
import { ThemeProvider } from "@/components/theme/theme-context";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "HyWork Cloud - O primeiro portal corporativo no-code do Brasil",
  description: "Crie experiências únicas para seus profissionais sem precisar de conhecimentos técnicos.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${ltWave.variable} dark-transition`} suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>
            <GoogleAnalytics />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
