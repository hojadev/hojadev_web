import type { Metadata } from "next";
import Navbar from "../components/layout/navbar/Navbar"
import {workSans} from './fonts';
import "./globals.css";
import Footer from "@/components/layout/footer/Footer";



export const metadata: Metadata = {
  title: "Hoja Dev",
  description: "Desarrollo Web Para tu Empresa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <link rel="shortcut icon" href="/logo-favicon.svg" type="image/x-icon" />
      <body className={`${workSans.className} bg-secondary-color`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
