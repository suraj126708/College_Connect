import Layout from "../../Components/Layouts/Layout";
import { Link } from "react-router-dom";
import {
  UserGroupIcon,
  UserPlusIcon,
  CalendarIcon,
  ChartBarSquareIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const Dashboard = () => {
  return (
    <>
      <Layout></Layout>
      <div className="ml-80">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">
            Welcome to the mentor management system
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-blue-100 mr-4">
                <UserGroupIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">
                  Total Mentors
                </p>
                <h3 className="text-2xl font-bold">24</h3>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-green-100 mr-4">
                <ClockIcon className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">
                  Active Sessions
                </p>
                <h3 className="text-2xl font-bold">8</h3>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-purple-100 mr-4">
                <CalendarIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">
                  Upcoming Sessions
                </p>
                <h3 className="text-2xl font-bold">12</h3>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-yellow-100 mr-4">
                <ChartBarSquareIcon className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Total Hours</p>
                <h3 className="text-2xl font-bold">156</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/mentors/register"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-center"
            >
              <div className="p-3 rounded-lg bg-blue-100 mr-4">
                <UserPlusIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Register Mentor</h3>
                <p className="text-sm text-gray-500">
                  Add a new mentor to the system
                </p>
              </div>
            </Link>

            <Link
              to="/mentors"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-center"
            >
              <div className="p-3 rounded-lg bg-green-100 mr-4">
                <UserGroupIcon className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium">Manage Mentors</h3>
                <p className="text-sm text-gray-500">
                  View and edit mentor profiles
                </p>
              </div>
            </Link>

            <Link
              to="/schedule"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-center"
            >
              <div className="p-3 rounded-lg bg-purple-100 mr-4">
                <CalendarIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium">View Schedule</h3>
                <p className="text-sm text-gray-500">
                  Check upcoming mentorship sessions
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Mentors Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recently Added Mentors</h2>
            <Link
              to="/mentors"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              View All
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      College
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                          <span>JS</span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            John Smith
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Technical Mentor
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      MIT
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      john.smith@example.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        Edit
                      </a>
                      <a href="#" className="text-red-600 hover:text-red-900">
                        Delete
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                          <span>AP</span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Alice Parker
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Career Mentor
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Stanford University
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      alice.parker@example.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        Edit
                      </a>
                      <a href="#" className="text-red-600 hover:text-red-900">
                        Delete
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                          <span>RJ</span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Robert Johnson
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                        Industry Expert
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Google
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      robert.johnson@example.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        Edit
                      </a>
                      <a href="#" className="text-red-600 hover:text-red-900">
                        Delete
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                          <span>MA</span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Michelle Adams
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Academic Mentor
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Harvard University
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      michelle.adams@example.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        Edit
                      </a>
                      <a href="#" className="text-red-600 hover:text-red-900">
                        Delete
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                          <span>DL</span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            David Lee
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        Technical Mentor
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Amazon
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      david.lee@example.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        Edit
                      </a>
                      <a href="#" className="text-red-600 hover:text-red-900">
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Activity Graph - Optional */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Mentorship Activity</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h3 className="text-gray-700 font-medium">Sessions Overview</h3>
                <p className="text-sm text-gray-500">
                  Past 30 days mentorship activity
                </p>
              </div>
              <div className="mt-2 md:mt-0">
                <select className="border border-gray-300 rounded-md text-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Last 30 Days</option>
                  <option>Last 60 Days</option>
                  <option>Last Quarter</option>
                  <option>Last Year</option>
                </select>
              </div>
            </div>

            <div className="relative h-64">
              {/* This is a placeholder for a chart. In a real application, you would use a charting library like Chart.js or Recharts */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <p className="mt-2 text-gray-500">
                    Activity chart would be displayed here
                  </p>
                  <p className="text-sm text-gray-400">
                    Connect a charting library for real data visualization
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">124</p>
                <p className="text-sm text-gray-500">Total Sessions</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">87%</p>
                <p className="text-sm text-gray-500">Completion Rate</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">4.8</p>
                <p className="text-sm text-gray-500">Avg. Rating</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-600">45 min</p>
                <p className="text-sm text-gray-500">Avg. Duration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
