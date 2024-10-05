import { Layers } from "lucide-react";
import React from "react";

export default function LargeCard({ className, period, sales }) {
  return (
    <div className={`rounded-lg text-white ${className} p-4`}>
      {/** Card */}
      <Layers />
      <h4>{period}</h4>
      <h2 className="text-3xl">{sales}</h2>
    </div>
  );
}
