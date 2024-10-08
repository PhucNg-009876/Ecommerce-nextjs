import React from "react";
import WeeklySalesChart from "./WeeklySalesChart";
import BestSellingProductChart from "./BestSellingProductChart";

export default function DashboardChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
      <WeeklySalesChart />
      <BestSellingProductChart />
    </div>
  );
}
