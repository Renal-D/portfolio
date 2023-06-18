import { Play, Fira_Code } from "next/font/google";

export const poppins = Play({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const roboto_mono = Fira_Code({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});
