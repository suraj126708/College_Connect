/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import CollegeTable from "./pages/TopColleges";
import HomePage from "./pages/HomePage";

function UserRoute() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="topColleges" element={<CollegeTable />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}

export default UserRoute;
