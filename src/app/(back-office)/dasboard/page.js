import Heading from "@/components/backoffice/Heading";
import LargeCards from "@/components/backoffice/LargeCards";
import SmallCards from "@/components/backoffice/SmallCards";
import React from "react";

export default function Dasboard() {
  return (
    <div>
      <Heading title="Dasborad Overview" />
      {/** large Card */}
      <LargeCards />
      {/** Small cards */}
      <SmallCards />
      {/** Charts */}
      {/** Recent Orders */}
    </div>
  );
}
