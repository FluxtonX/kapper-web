import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/constants";
import "./globals.css";

const bodyFont = Roboto({ subsets: ["latin"], variable: "--font-body", display: "swap", weight: ["400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: `${site.name} | Salon discovery and bookings`,
  description: site.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={bodyFont.variable}><Navbar/><main>{children}</main><Footer/></body></html>;
}
