import "./globals.css";
import type { Metadata } from "next";
import { Dosis, Laila, Mulish } from "next/font/google";
import { ThemeProvider } from "../../providers/ThemeProvider";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dosis",
});

const laila = Laila({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-laila",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: "A. Malecki",
  description: "Portfolio page",
};
type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params: { locale } }: Props) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${mulish.variable} ${laila.variable} ${dosis.variable}`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
