import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "../lib/context/ReactQueryProvider";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from '@/components/ui/sonner';

const roboto_mono = Roboto({
  weight: ["100", "300", "400", "500", "900", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={`${roboto_mono.className} antialiased`}>
          <NextTopLoader color="#0096FF" showSpinner={false} />
          {children}
          <Toaster richColors />
        </body>
      </html>
    </ReactQueryProvider>
  );
}
