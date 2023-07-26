import "./globals.css";
import { Atkinson_Hyperlegible } from "next/font/google";

import Navbar from "../components/Navbar";
import { ReactNode } from "react";
import Footer from "@/components/Footer";

// const font = Inter({ subsets: ["latin"] });
const font = Atkinson_Hyperlegible({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Oaks Packaging",
  description: "",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <Navbar>{children}</Navbar>
        <Footer />
      </body>
    </html>
  );
}
