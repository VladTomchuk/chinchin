import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";

export default function ModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button variant="outline" onClick={toggleColorMode}>
      {colorMode === "light" ? (
        <MoonIcon boxSize={4} />
      ) : (
        <SunIcon boxSize={4} />
      )}
    </Button>
  );
}
