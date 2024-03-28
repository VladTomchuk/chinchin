import Navbar from "@/components/navbar/Navbar";
import { customTheme } from "@/styles/theme";
import "@/styles/theme.css";
import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import { Providers } from "./providers";

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
        <Providers>
          <header>
            <Navbar />
          </header>

          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
