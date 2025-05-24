import { useState, useEffect } from "react";
import MentorCard from "./MentorCard";
import { MagnifyingGlassIcon, FunnelIcon } from "@heroicons/react/24/outline";

const MentorList = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/mentors/getmentors"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch mentors");
        }

        const data = await response.json();
        setMentors(data);
      } catch (err) {
        setError("Error fetching mentors: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  const uniqueRoles = [...new Set(mentors.map((mentor) => mentor.role))];

  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearchTerm = mentor.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRole = filterRole ? mentor.role === filterRole : true;
    return matchesSearchTerm && matchesRole;
  });

  return (
    <div className="bg-white rounded-lg">
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-xl font-bold">All Mentors</h2>

          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search mentors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10  pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FunnelIcon className="h-5 w-5 text-gray-400" />
              </div>
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="pl-10 pr-8 py-2 border bg-gray-50 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
                <option value="">All Roles</option>
                {uniqueRoles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="p-8 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-blue-600"></div>
          <p className="mt-2 text-gray-600">Loading mentors...</p>
        </div>
      ) : error ? (
        <div className="p-8 text-center text-red-600">{error}</div>
      ) : filteredMentors.length === 0 ? (
        <div className="p-8 text-center text-gray-600">
          No mentors found matching your criteria.
        </div>
      ) : (
        <div className="p-4 w-3/4 ml-80">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredMentors.map((mentor) => (
              <MentorCard key={mentor._id} mentor={mentor} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorList;
