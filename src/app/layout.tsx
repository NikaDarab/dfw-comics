import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/Header";
import Footer from "@/app/Footer";
import { AuthContextProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DFW Comics ",
  description: "A directory for DFW Comics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Header />
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
