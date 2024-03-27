"use client";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/darkMode/modeToggle";
import Link from "next/link";

export default function ContextMenu() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="p-3">
            <HamburgerMenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center justify-between">
          <div></div>
          <div className="flex flex-col text-4xl gap-10">
            <Link href="/">About us</Link>
            <Link href="/">Our services</Link>
            <Link href="/">Contacts</Link>
          </div>
          <ModeToggle />
        </SheetContent>
      </Sheet>
    </div>
  );
}
