import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Appbar from "./components/Appbar";
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from "next-auth/react"
import { Providers } from "@/util/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slothhub",
  description: "Your repository friend. Manage everything with this version control system easily, including Open Source !!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <div className=" h-[100vh] w-[100vw] p-3">
        <Toaster />
          <Appbar/>
        {children}
        </div>
        </Providers>
      </body>
    </html>
  );
}
// bg-black
