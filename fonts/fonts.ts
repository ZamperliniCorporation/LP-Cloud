import localFont from "next/font/local"

export const ltWave = localFont({
  src: [
    {
      path: "./LTWave-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./LTWave-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./LTWave-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lt-wave",
})
