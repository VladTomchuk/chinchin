"use client";
import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useTheme } from "@/hooks/useTheme";
import Link from "next/link";
import { services } from "../const/data";

export default function AllServicesPage() {
  const { theme } = useTheme();

  return (
    <Flex gap={5}>
      {services.map((item, index) => (
        <Box key={index}>
          <Link href={`/services/${item.id}`}>
            <Text>{item.title}</Text>
          </Link>
        </Box>
      ))}
    </Flex>
  );
}
