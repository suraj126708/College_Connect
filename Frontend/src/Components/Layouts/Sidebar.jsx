import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CalendarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <HomeIcon className="w-5 h-5" /> },
    {
      name: "Mentor Registration",
      path: "admin/mentors/register",
      icon: <UserPlusIcon className="w-5 h-5" />,
    },
    {
      name: "Mentor Management",
      path: "/mentors",
      icon: <UsersIcon className="w-5 h-5" />,
    },
    {
      name: "Statistics",
      path: "/statistics",
      icon: <ChartBarIcon className="w-5 h-5" />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <DocumentTextIcon className="w-5 h-5" />,
    },
    {
      name: "Schedule",
      path: "/schedule",
      icon: <CalendarIcon className="w-5 h-5" />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Cog6ToothIcon className="w-5 h-5" />,
    },
  ];

  return (
    <div className="h-screen bg-gray-800 text-white w-64 fixed left-0 top-0 overflow-y-auto">
      <div className="p-4 bg-gray-900">
        <h1 className="text-xl font-bold tracking-wider">MENTOR ADMIN</h1>
      </div>

      <div className="px-4 py-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="font-bold text-lg">A</span>
          </div>
          <div className="ml-3">
            <p className="font-medium">Admin User</p>
            <p className="text-xs text-gray-400">Administrator</p>
          </div>
        </div>
      </div>

      <div className="space-y-1 px-2">
        <p className="text-xs font-semibold text-gray-400 px-2 uppercase tracking-wider mb-2">
          Main
        </p>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-2 py-3 rounded-lg transition-colors ${
              location.pathname === item.path
                ? "bg-blue-600"
                : "hover:bg-gray-700"
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
