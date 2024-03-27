"use client";
import Image from "next/image";
import Logo2 from "../../assets/logo/chinchin_logo.svg";
import Logo3 from "../../assets/logo/chinchin_logo_white.svg";
import Logo4 from "../../assets/logo/chinchin_logo_green.svg";
import Logo5 from "../../assets/logo/chinchin_logo_orange.svg";
import Logo6 from "../../assets/logo/chinchin_logo_rosat.svg";
import { ModeToggle } from "../darkMode/modeToggle";

import ContextMenu from "./toggle/ContextMenu";
import { NavigationBar } from "./navigation/NavigationBar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="flex justify-center">
      <div className="container flex fixed justify-between items-center  px-5 py-3 bg-background">
        <div className="size-12 gap-10">
          <Image src={theme === "light" ? Logo4 : Logo6} alt="logo" />
        </div>

        <NavigationBar />

        <div className="flex items-center justify-between gap-3">
          <ContextMenu />
          <div className="md:block hidden">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
