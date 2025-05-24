/* eslint-disable react/prop-types */
import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";

const Navbar = ({ toggleSidebare }) => {
  return (
    <div className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-4">
      <div className="flex items-center">
        <button
          onClick={toggleSidebare}
          className="lg:hidden mr-4 text-gray-600 hover:text-gray-900"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-600 hover:text-gray-900">
          <BellIcon className="w-6 h-6" />
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>

        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
            A
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium">Admin User</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
