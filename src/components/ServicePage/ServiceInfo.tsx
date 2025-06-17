"use client";
import { Service } from "@/const/types";
import React from "react";
import { Flex, Text } from "@chakra-ui/react";

interface Props {
  data: Service;
}

function ServiceInfo({ data }: Props) {
  return (
    <Flex w="50%" justifyContent="center">
      <Text fontSize="40px">{data.title}</Text>
    </Flex>
  );
}

export default ServiceInfo;
