"use client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ServiceCard } from "./Card/ServiceCard";
import { useEffect, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { setServices } from "@/lib/features/serviceSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function AllServicesPage() {
  const services = useAppSelector((state) => state.services.services);
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string | null>();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
  useEffect(() => {
    const fetcher = async () => {
      const { data, error } = await supabase.from("services").select();

      if (error) {
        setError("Couldn't fetch services!");
        dispatch(setServices(null));
        console.log(error);
      }

      if (data) {
        dispatch(setServices(data));
        setError(null);
        console.log(data);
      }
    };
    fetcher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SimpleGrid
      spacing={4}
      columns={[1, 2, 2, 4]}
      justifyContent="center"
      p={5}
    >
      {error && <Text>{error}</Text>}
      {services &&
        services.map((item, index) => (
          <Link href={`/services/${item.slug}`} key={index}>
            <ServiceCard item={item} />
          </Link>
        ))}
    </SimpleGrid>
  );
}
