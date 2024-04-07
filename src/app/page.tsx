"use client";
import Image from "next/image";
import Chears from "../assets/imagesSVG/chears_green.svg";
import ChearsRosat from "../assets/imagesSVG/chears_rosat.svg";
import SectionTwo from "@/components/Home/SectionTwo";
import { useTheme } from "@/hooks/useTheme";
import {
  Button,
  Container,
  Flex,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const { colorMode } = useColorMode();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
      h={{ md: "90vh" }}
    >
      <Flex
        flexDirection="column"
        w={{ base: "100%", md: "50%" }}
        pl={{ md: "7%" }}
        gap={{ md: "100" }}
      >
        <Flex justify={{ base: "center", md: "start" }}>
          <Text
            color={theme.text}
            fontSize={65}
            fontWeight={200}
            lineHeight="1.2"
          >
            We are ready <br />
            to make your <br /> celebration <br />
            special and <br /> unique
          </Text>
        </Flex>

        <Flex justify={{ base: "center", md: "start" }} my={{ base: "15%" }}>
          <Link href="https://wa.me/34698458286">
            <Button variant="outline" p={6}>
              <Text color={theme.accent} fontWeight={600}>
                Contact us
              </Text>
            </Button>
          </Link>
        </Flex>
      </Flex>

      <Flex w={{ base: "100%", md: "50%" }}>
        <Image
          src={colorMode === "light" ? Chears : ChearsRosat}
          alt="chears"
        />
      </Flex>
    </Flex>
  );
}
