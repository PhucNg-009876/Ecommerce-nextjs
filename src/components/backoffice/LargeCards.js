import React from "react";
import LargeCard from "./LargeCard";

export default function LargeCards() {
  const orderStatus = [
    {
      period: "Today Orders",
      sales: 111000,
      color: "bg-green-600",
    },
    {
      period: "Yesterday Orders",
      sales: 131000,
      color: "bg-blue-600",
    },
    {
      period: "This Month",
      sales: 3121000,
      color: "bg-orange-600",
    },
    {
      period: "Last Month",
      sales: 2111000,
      color: "bg-purple-600",
    },
  ];

  {
    /** className in div for responsive */
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
      {orderStatus.map((item, key) => (
        <LargeCard
          key={key}
          className={item.color}
          period={item.period}
          sales={item.sales}
        />
      ))}
    </div>
  );
}
