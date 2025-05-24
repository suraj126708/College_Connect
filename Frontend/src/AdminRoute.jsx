/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

import AdminLogin from "./pages/Admin/AdminLogin";
import MentorRegistration from "./pages/Admin/MentorRegistration";
import MentorManagement from "./pages/Admin/MentorManagement";
import Dashboard from "./pages/Admin/Dashboard";
import CollegeTable from "./pages/TopColleges";

function AdminRoute() {
  return (
    <div className="App">
      <Routes>
        <Route path="adminlogin" element={<AdminLogin />} />
        <Route path="topColleges" element={<CollegeTable />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="mentors/register" element={<MentorRegistration />} />
        <Route path="mentors" element={<MentorManagement />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default AdminRoute;
