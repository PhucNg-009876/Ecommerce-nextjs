"use client";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function WeeklySalesChart() {
  const [activeTab, setActiveTab] = useState("sale");

  const salesData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales",
        data: [150, 200, 300, 250, 400, 350, 500],
        borderColor: "rgb(75, 192, 192)",
        fill: false,
      },
    ],
  };

  const ordersData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Orders",
        data: [20, 40, 60, 50, 80, 70, 100],
        borderColor: "rgb(255, 99, 132)",
        fill: false,
      },
    ],
  };

  return (
    <div className="bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4">WeeklySalesChart</h2>
      <div className="p-4">
        {/** tabs */}
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="me-2">
            <button
              onClick={() => setActiveTab("sale")}
              className={`inline-block p-4 rounded-t-lg ${
                activeTab === "sale"
                  ? "text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500"
                  : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              }`}
            >
              Sale
            </button>
          </li>
          <li className="me-2">
            <button
              onClick={() => setActiveTab("order")}
              className={`inline-block p-4 rounded-t-lg ${
                activeTab === "order"
                  ? "text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500"
                  : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              }`}
            >
              Order
            </button>
          </li>
        </ul>
        {/** content */}
        <div className="mt-4">
          {activeTab === "sale" ? (
            <Line data={salesData} />
          ) : (
            <Line data={ordersData} />
          )}
        </div>
      </div>
    </div>
  );
}
