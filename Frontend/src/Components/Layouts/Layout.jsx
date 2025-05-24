/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="">
      {/* Mobile sidebar */}
      <div
        className={`lg:hidden fixed inset-0 z-20 transition-opacity ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-gray-600 opacity-75"
          onClick={toggleSidebar}
        ></div>
        <div
          className={`transform transition-transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } fixed inset-y-0 left-0 z-30`}
        >
          <Sidebar />
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col lg:ml-64">
        <Navbar toggleSidebare={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-6"></main>
      </div>
    </div>
  );
};

export default Layout;
