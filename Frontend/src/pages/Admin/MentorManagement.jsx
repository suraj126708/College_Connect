import Layout from "../../Components/Layouts/Layout";
import MentorList from "../../Components/Mentors/MentorList";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const MentorManagement = () => {
  return (
    <>
      <Layout></Layout>
      <div className="mb-6 w-3/4 ml-80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Mentor Management
          </h1>
          <p className="text-gray-600">
            View and manage all mentors in the system
          </p>
        </div>

        <Link
          to="/mentors/register"
          className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          <UserPlusIcon className="w-5 h-5 mr-2" />
          <span>Add New Mentor</span>
        </Link>
      </div>

      <MentorList />
    </>
  );
};

export default MentorManagement;
