import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MenuDrawer } from "@/components/layout/MenuDrawer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "AniNova",
  description: "Watch anime online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${dmSans.variable} nova-scrollbar font-sans`}
      >
        <AppProviders>
          <Header />
          <MenuDrawer />
          {children}
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}