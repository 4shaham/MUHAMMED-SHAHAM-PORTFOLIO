import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YourName — Full Stack Developer",
  description:
    "Portfolio of a full-stack developer crafting digital experiences with precision and flair.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={nunito.className}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
