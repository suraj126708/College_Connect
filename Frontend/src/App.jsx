/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminRoute />} />

          {/* User Routes */}
          <Route path="/*" element={<UserRoute />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
