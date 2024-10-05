import { ShoppingCart } from "lucide-react";
import React from "react";

export default function SmallCard({ period, quantity, icon }) {
  return (
    <div className="rounded-lg bg-slate-700 mt-5">
      {/**  */}
      <div className="flex gap-4 items-center ">
        {icon}
        <div>
          <p>{period}</p>
          <h3>{quantity}</h3>
        </div>
      </div>
    </div>
  );
}
