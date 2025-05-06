import localFont from "next/font/local";

export const ltWave = localFont({
  src: [
    {
      path: "../public/fonts/LTWave-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/LTWave-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/LTWave-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lt-wave",
  display: "swap",
});
