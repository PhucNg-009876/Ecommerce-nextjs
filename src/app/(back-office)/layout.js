import Navbar from "@/components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar";
import React from "react";

export default function layout({ children }) {
  return (
    <div className="flex ">
      {/** sidebar */}
      {<Sidebar />}
      <div className="w-full ">
        {/** Header */}
        <Navbar />
        <main className="p-8 bg-slate-900 text-slate-50 min-h-screen mt-8 ml-60">
          {children}
        </main>
      </div>
      {/** main body */}
    </div>
  );
}
