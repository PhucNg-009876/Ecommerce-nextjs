import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="bg-slate-800 space-y-6 w-60 min-h-screen text-slate-50 fixed left-0 top-0">
      <Link href="#" className="m-3 p-5">
        logo
      </Link>
      <div className="space-y-3 flex flex-col p-5">
        <Link href="#">Dasboard</Link>
        <Link href="#">Categories</Link>
        <Link href="#">Customers</Link>
        <Link href="#">Markets</Link>
        <Link href="#">Farmers</Link>
        <Link href="#">Orders</Link>
        <Link href="#">Staff</Link>
        <Link href="#">Setting</Link>
        <Link href="#">Online Store</Link>
      </div>
    </div>
  );
}
