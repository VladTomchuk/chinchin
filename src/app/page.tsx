"use client";
import { useTheme } from "next-themes";
import Chears from "../assets/imagesSVG/chears_green.svg";
import ChearsRosat from "../assets/imagesSVG/chears_rosat.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import SectionTwo from "@/components/Home/SectionTwo";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="container">
      <div className="flex flex-col justify-around gap-5 md:flex-row md:items-center md:justify-center md:pt-24">
        <div className="flex flex-col items-center  justify-between gap-8 pt-24 md:h-2/3 md:w-1/2 md:items-start  md:justify-around">
          <h1 className="whitespace-nowrap font-sans text-6xl font-extralight md:text-7xl">
            We are ready <br />
            to make your <br /> celebration <br />
            special and <br /> unique
          </h1>
          <div className="">
            <Button variant="outline" className="p-6">
              <h3 className="text-xl font-light md:text-2xl">Contact us</h3>
            </Button>
          </div>
        </div>
        <div className=" h-1/3 md:h-2/3 md:w-1/2">
          <div className="w-full">
            <Image src={theme === "light" ? Chears : ChearsRosat} alt="chears" />
          </div>
        </div>
      </div>
      <SectionTwo />
    </div>
  );
}
