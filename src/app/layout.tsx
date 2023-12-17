import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ProvidersTheme from "./ProvidersTheme";
import { Providers } from "./redux/providers";
import { Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick And Morty",
  description: "Rick And Morty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-[100vh]  dark:bg-gray-900 ">
        <ProvidersTheme>
          <div id="root">
            <Providers>
              <div className="sticky top-0 bg-white z-50 mb-5">
                <Header />
              </div>

              <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
            </Providers>
          </div>
        </ProvidersTheme>
      </body>
    </html>
  );
}
