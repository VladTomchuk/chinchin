"use client";
import { SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { services } from "../const/data";
import { ServiceCard } from "./Card/ServiceCard";

export default function AllServicesPage() {
  return (
    <SimpleGrid
      spacing={4}
      columns={[1, 2, 2, 4]}
      justifyContent="center"
      p={5}
    >
      {services.map((item, index) => (
        <Link href={`/services/${item.id}`} key={index}>
          <ServiceCard item={item} />
        </Link>
      ))}
    </SimpleGrid>
  );
}
