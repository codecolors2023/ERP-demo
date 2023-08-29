import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./modules/Home/Home";
import User from "./modules/User/User";
import Dashboard from "./modules/User/Component/Dashboard";
import Services from "./modules/User/Component/Services/Services";
import Sidebar from "./modules/User/Sidebar";
import Profile from "./modules/User/Component/SelfService/Profile";
import Demo from "./modules/User/Demo";

export default function Layout() {
  return (
    <>
      {/* <Sidebar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/demo" element={<Demo/>} />
        </Routes>
      </Router>
    </>
  );
}
