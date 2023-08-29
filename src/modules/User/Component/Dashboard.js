import React from "react";
import Sidebar from "../Sidebar";
// import Navsearch from './Services/navsearch'
import "./dashboard.css";
import Navbar from "./SelfService/Navbar";
import NavbarTaps from "./SelfService/NavbarTaps";
import Profile from "./SelfService/Profile";
// import Leave from './Leave/Leave'
// import Attendance from './Attendance'
import { Outlet } from "react-router-dom";
export default function Dashboard() {
  return (
    <>
      {/* <div id='main-dashboard'>
            <div className='left-menu'>
             <Sidebar/>
            </div>
            <div className='right-services'> */}
      {/* <Navsearch/>     */}
      {/* <Navbar/>
           
            <div className='right-leave'> */}
      {/* <Leave/> */}
      {/* </div>
            </div>
            <div className='box'> */}
      {/* <Attendance/> */}
      {/* </div>
        </div> */}
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
          <div className="outlet">{/* <Profile /> */}</div>
        </main>
      </div>
    </>
  );
}
