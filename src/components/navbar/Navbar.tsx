"use client";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, theme, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import Logo4 from "../../assets/logo/chinchin_logo_green.svg";
import Logo6 from "../../assets/logo/chinchin_logo_rosat.svg";
import { useTheme } from "@/hooks/useTheme";
import { Menu } from "./menu/Menu";
import ModeButton from "./modeButton/ModeButton";
import Link from "next/link";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { theme } = useTheme();

  return (
    <Flex
      position="fixed"
      bg={theme.bg}
      w="100%"
      top={0}
      alignItems="center"
      justify="space-between"
      px={5}
      py={3}
      zIndex={999}
    >
      <Flex boxSize={50}>
        <Link href="/">
          <Image src={colorMode === "light" ? Logo4 : Logo6} alt="logo" />
        </Link>
      </Flex>

      <Flex>
        <Box display={{ base: "none", md: "block" }}>
          <ModeButton />
        </Box>
        <Box>
          <Menu />
        </Box>
      </Flex>
    </Flex>
  );
}
