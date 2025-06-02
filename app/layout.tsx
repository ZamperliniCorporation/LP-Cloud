import type React from "react";
import type { Metadata } from "next";
import { ltWave } from "@/lib/fonts";
import { LanguageProvider } from "@/i18n/language-context";
import { ThemeProvider } from "@/components/theme/theme-context";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleTagManager from "@/components/GoogleTagManager";
import "./globals.css";

export const metadata: Metadata = {
  title: "HyWork Cloud - A maneira mais inteligente de criar sua intranet",
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WKPDKW76');`,
          }}
        />
        {/* End Google Tag Manager */}
        <GoogleAnalytics />
        <GoogleTagManager />
      </head>
      <body className={`${ltWave.variable} dark-transition`} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WKPDKW76"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
