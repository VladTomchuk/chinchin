"use client";
import { useTheme } from "@/hooks/useTheme";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import ModeButton from "../modeButton/ModeButton";

export const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  const { theme } = useTheme();

  return (
    <>
      <Button ref={btnRef} variant="outline" onClick={onOpen} ml={2}>
        <CiMenuFries
          style={{
            color: `${theme.text}`,
          }}
        />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={theme.bg}>
          <DrawerHeader>
            <Flex alignItems="center" justifyContent="space-between">
              <ModeButton />
              <DrawerCloseButton color={theme.text} position="unset" />
            </Flex>
          </DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter justifyContent="center" alignItems="center">
            <Link
              href="https://www.instagram.com/chinchincatering_bcn/"
              isExternal={true}
              border="1px"
              borderColor="transparent"
              borderRadius={10}
              _hover={{
                textDecoration: "none",
                borderColor: `${theme.accent}`,
              }}
              py="10px"
              px="20px"
            >
              <Flex alignItems="center" fontSize={20} gap={1}>
                <PiInstagramLogoLight
                  style={{
                    color: `${theme.accent}`,
                  }}
                />
                <Text color={theme.accent} fontSize={16} fontWeight={200}>
                  chinchincatering_bcn
                </Text>
              </Flex>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
