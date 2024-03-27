"use client";
import React from "react";
import ServiceCard from "./service/ServiceCard";

export default function SectionTwo() {
  return (
    <div className="mt-10 h-screen font-sans text-lg  font-extralight">
      <div className="">
        <h3 className="mb-5 text-center text-6xl md:text-7xl">Featured plans</h3>
        {/* <h3 className="mb-5 text-center text-6xl md:text-7xl">Who we are?</h3> */}
        <div className="flex flex-col gap-5 md:flex-row">
          <div className=" grid w-full grid-cols-1 gap-5 text-center md:grid-cols-4">
            <ServiceCard
              title={"Private bartender"}
              groupSize={{ min: 5, max: 25 }}
              price={{ price: 20, condition: "€/h" }}
              header={"Let a professional bartender prepare cocktails for your party."}
            />
            <ServiceCard title={"Cocktail bar catering"} header={""} />
            <ServiceCard title={"Team building & workshops"} header={""} />
            <ServiceCard title={"Rent of glassware"} header={""} />
          </div>
          {/* <div className="md:w-1/3">
            <p className="font-sans font-extralight text-left">
              The Chin Chin team offers on-site, bar cocktail catering services.
              We specialize in the implementation of unique bar concepts that
              will match the theme of your special event.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
