import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import ProvidersTheme from "./ProvidersTheme";
import { Providers } from "./redux/providers";

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
      <body>
        <ProvidersTheme>
          <div id="root">
            <Providers>
              <Header />
              <Tabs />
              {children}
            </Providers>
          </div>
        </ProvidersTheme>
      </body>
    </html>
  );
}
