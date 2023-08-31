import React from "react";
import Sidebar from "../Sidebar";
import "./dashboard.css";
import Navbar from "./SelfService/Navbar";
import NavbarTaps from "./SelfService/NavbarTaps";
import Profile from "./SelfService/Profile";
import { Outlet } from "react-router-dom";
export default function Dashboard() {
  return (
    <>
      <div className="body">
        <header className="header">
          <Navbar />
        </header>
        <section class="sidemenu">
          <Sidebar />
        </section>

        <main class="main">
          <Outlet />
          <NavbarTaps />
          <div className="outlet"><Profile /></div>
        </main>
      </div>
    </>
  );
}
