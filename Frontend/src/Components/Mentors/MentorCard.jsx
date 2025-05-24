/* eslint-disable react/prop-types */
import {
  AcademicCapIcon,
  CalendarIcon,
  EnvelopeIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

const MentorCard = ({ mentor }) => {
  const handleDelete = () => {
    fetch(`http://localhost:8000/api/mentors/deleteMentor/${mentor._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete mentor");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Mentor deleted successfully:", data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting mentor:", error);
      });
  };

  return (
    <div className="bg-white  rounded-lg shadow-md overflow-hidden">
      <div className="border-b border-gray-200 p-4 flex items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <img
            src={
              mentor.profilePicture
                ? mentor.profilePicture
                : "https://tse4.mm.bing.net/th?id=OIP.hGSCbXlcOjL_9mmzerqAbQHaHa&pid=Api&P=0&h=180"
            }
            alt={`${mentor.name}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{mentor.name}</h3>
          <div className="flex items-center text-gray-600 text-sm">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
              {mentor.role}
            </span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <EnvelopeIcon className="w-4 h-4 mr-2" />
            <a href={`mailto:${mentor.email}`} className="hover:text-blue-600">
              {mentor.email}
            </a>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <AcademicCapIcon className="w-4 h-4 mr-2" />
            <span>{mentor.college}</span>
          </div>

          {mentor.yearOfStudy && (
            <div className="text-sm text-gray-600 ml-6">
              Year: {mentor.yearOfStudy}
            </div>
          )}

          {mentor.linkedIn && (
            <div className="flex items-center text-sm text-gray-600">
              <LinkIcon className="w-4 h-4 mr-2" />
              <a
                href={mentor.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
          )}

          <div className="flex items-start text-sm text-gray-600">
            <CalendarIcon className="w-4 h-4 mr-2 mt-0.5" />
            <div>
              <p className="font-medium mb-1">Available Slots:</p>
              <p className="whitespace-pre-line">{mentor.availableSlots}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 p-3 bg-gray-50 flex justify-end space-x-2">
        <button
          onClick={handleDelete}
          className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MentorCard;
