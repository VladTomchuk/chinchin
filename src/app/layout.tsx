"use client";
import Navbar from "@/components/Navbar";
import { customTheme } from "@/styles/theme";
import "@/styles/theme.css";
import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import { Providers } from "./providers";
import StoreProvider from "./StoreProvider";
import SessionProvider from "@/components/session-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ColorModeScript
          initialColorMode={customTheme.config.initialColorMode}
        />
        <StoreProvider>
          <Providers>
            <header>
              <Navbar />
            </header>
            <main>{children}</main>
          </Providers>
          <SessionProvider />
        </StoreProvider>
      </body>
    </html>
  );
}
