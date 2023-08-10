import "./globals.css";
import { Source_Sans_Pro } from "next/font/google";

import Navbar from "../components/Navbar";
import { ReactNode } from "react";
import Footer from "@/components/Footer";

// const font = Inter({ subsets: ["latin"] });
// const font = Atkinson_Hyperlegible({ weight: "400", subsets: ["latin"] });
const font = Source_Sans_Pro({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Oaks Packaging",
  description: "",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className={`${font.className}`}>
        <Navbar>{children}</Navbar>
        <Footer />
      </body>
    </html>
  );
}
