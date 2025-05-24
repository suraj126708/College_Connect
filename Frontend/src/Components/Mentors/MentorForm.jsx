import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import "../../App.css";
import { handleSuccess } from "../../utils";

const MentorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    role: "",
    yearOfStudy: "",
    availableSlots: "",
    linkedIn: "",
    college: "",
    profilePic: null,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      profilePic: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const formDataToSend = new FormData();

      // Append all form fields to FormData
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      console.log("Form Data:", formDataToSend);

      const response = await fetch(
        "http://localhost:8000/api/mentors/register",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.log("Error:", data);
        throw new Error(data.message || "Failed to register mentor");
      }
      handleSuccess("Mentor registered successfully!");
      setSuccess("Mentor registered successfully!");
      // Reset form
      setFormData({
        name: "",
        email: "",
        mobileNo: "",
        role: "",
        yearOfStudy: "",
        availableSlots: "",
        linkedIn: "",
        college: "",
        profilePic: null,
      });

      // Reset file input
      document.getElementById("profilePic").value = "";
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-white w-3/4 ml-80 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Register New Mentor</h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} content="multipart/form-data">
        <div className="mb-6">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-2 border-gray-300">
                {formData.profilePic ? (
                  <img
                    src={URL.createObjectURL(formData.profilePic)}
                    alt="Profile Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <UserCircleIcon className="w-20 h-20 text-gray-400" />
                )}
              </div>
              <label
                htmlFor="profilePic"
                className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 cursor-pointer hover:bg-blue-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </label>
              <input
                type="file"
                id="profilePic"
                name="profilePic"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-2">
            Upload profile picture
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="mobileNo"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mobile Number *
            </label>
            <input
              type="tel"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-medium  text-gray-700 mb-1"
            >
              Role *
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full bg-gray-100 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Role</option>
              <option value="Technical Mentor">Team</option>
              <option value="mentor">Mentor</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="yearOfStudy"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Year of Study
            </label>
            <select
              id="yearOfStudy"
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleChange}
              required
              className="w-full bg-gray-100 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="college"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              College/University *
            </label>
            {/* <input
              type="text"
              id="college"
              name="college"
              value={formData.college}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            /> */}
            <select
              id="college"
              name="college"
              value={formData.college}
              onChange={handleChange}
              required
              className="w-full bg-gray-100 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select College</option>
              <option value="Vit pune">Vit pune</option>
              <option value="Pict pune">Pict pune</option>
              <option value="VJTI mumbai">VJTI mumbai</option>
              <option value="Walchand sangli">Walchand sangli</option>
              <option value="Cumines pune">Cumines pune</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="linkedIn"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              LinkedIn Profile
            </label>
            <input
              type="url"
              id="linkedIn"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://linkedin.com/in/username"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="availableSlots"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Available Slots *
          </label>
          <textarea
            id="availableSlots"
            name="availableSlots"
            value={formData.availableSlots}
            onChange={handleChange}
            required
            rows="3"
            className="w-full bg-slate-100 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Monday: 4-6 PM, Wednesday: 6-8 PM"
          ></textarea>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 mr-2 hover:bg-gray-100"
            onClick={() => {
              setFormData({
                name: "",
                email: "",
                mobileNo: "",
                role: "",
                yearOfStudy: "",
                availableSlots: "",
                linkedIn: "",
                college: "",
                profilePic: null,
              });
              document.getElementById("profilePic").value = "";
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {"Register Mentor"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MentorForm;
