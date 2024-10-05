import { User, Menu, Sun, Bell } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-600 text-slate-50 h-12 px-4 fixed top-0  ml-60 custom-width">
      {/** icon */}
      <button>
        <Menu />
      </button>
      {/**3 icon */}
      <div className="flex space-x-3">
        <button>
          <Sun />
        </button>
        <button>
          <Bell />
        </button>
        <button>
          <User />
        </button>
      </div>
    </div>
  );
}
