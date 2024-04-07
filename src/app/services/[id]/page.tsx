"use client";
import { services } from "@/app/const/data";
import { useEffect, useState } from "react";

export default function ServicePage({ params }: { params: { id: string } }) {
  // const [service, setService] = useState({
  //   id: 0,
  //   title: "",
  //   groupSize: { min: 0, max: 0 },
  //   price: { price: 0, condition: "" },
  //   header: "",
  // });

  // useEffect(() => {
  //   const foundService = services.find((service) => service.id === params.id);
  //   if (foundService) {
  //     // Проверяем, найден ли сервис
  //     setService(foundService); // Устанавливаем найденный сервис в состояние
  //   }
  // }, []); // Зависимости: params.id и services
  const service = services.find((service) => service.id === +params.id);
  return <div>service number: {service && service.title}</div>;
}
