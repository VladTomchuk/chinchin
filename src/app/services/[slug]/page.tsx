"use client";
import { Flex } from "@chakra-ui/react";
import { createBrowserClient } from "@supabase/ssr";
import { useEffect, useState } from "react";
import "../../../components/Carousel/embla.css";
import EmblaCarousel from "@/components/Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import ServiceInfo from "@/components/ServicePage/ServiceInfo";

export default function ServicePage({ params }: { params: { slug: string } }) {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      );
      const { data, error } = await supabase
        .from("services")
        .select()
        .eq("slug", `${params.slug}`);
      if (data) {
        setData(data);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <Flex alignItems="center">
      {data &&
        data.map((i: any, index: any) => (
          <Flex key={index} w="100%">
            <EmblaCarousel slides={i.images} options={OPTIONS} />
            <ServiceInfo data={i} />
          </Flex>
        ))}
    </Flex>
  );
}
