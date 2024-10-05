import React from "react";
import SmallCard from "./SmallCard";
import { RefreshCcw, Truck, ShoppingCart, SearchCheck } from "lucide-react";
export default function SmallCards() {
  const orderStatus = [
    {
      period: "Total Orders",
      quantity: 1110,
      icon: <ShoppingCart className="w-8 h-8 bg-orange-600 rounded-full  " />,
    },
    {
      period: "Orders Pending",
      quantity: 131,
      icon: <RefreshCcw className="w-8 h-8 bg-blue-600 rounded-full  " />,
    },
    {
      period: "Orders Procesing",
      quantity: 312,
      icon: <Truck className="w-8 h-8 bg-green-300 rounded-full  " />,
    },
    {
      period: "Orders",
      quantity: 211,
      icon: <SearchCheck className="w-8 h-8 bg-green-600 rounded-full  " />,
    },
  ];

  {
    /** className in div for responsive */
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
      {orderStatus.map((item, key) => (
        <SmallCard
          key={key}
          period={item.period}
          quantity={item.quantity}
          icon={item.icon}
        />
      ))}
    </div>
  );
}
