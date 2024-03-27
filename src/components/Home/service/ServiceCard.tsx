import React from "react";
import { Card } from "./style";
import { useTheme } from "next-themes";

interface ServiceCardProps {
  title: string;
  header: string;
  groupSize?: {
    min: number;
    max: number;
  };
  price?: {
    price: number;
    condition: string;
  };
}

export default function ServiceCard({ title, groupSize, price, header }: ServiceCardProps) {
  return (
    <div className="border border-border text-left transition delay-150 ease-in-out hover:-translate-y-4">
      <div className="border-b p-2">
        <h5 className="">{title}</h5>
      </div>
      <div className="p-2">
        <header>{header}</header>
        {price && <div>Price: 20 €/h</div>}

        {groupSize && (
          <div>
            Group size: {groupSize.min} - {groupSize.max}
          </div>
        )}
      </div>
    </div>
  );
}
