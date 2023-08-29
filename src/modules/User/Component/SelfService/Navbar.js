import React from "react";
import "../Services/navsearch.css";
import paint from "../Services/Navimage/paint-palette 1.png";
import man from "../Services/Navimage/man (3) 2.png";
import Search from "../Services/Navimage/magnifying-glass 1.png";
import "../SelfService/Navbar.css";
import search from '../assets/magnifying-glass 1.png'
function Navbar() {
  return (
    //     <div className='nav-search md-12'>
    //     <nav className="navbar bg-body-tertiary md-4">
    // <div className="container-fluid">
    // <div className="search-container">

    // <div className="search-wrapper">
    // <input className="form-control" type="search" placeholder="Search Employee" aria-label="Search" id='search-form'/>
    // <img src={Search} alt = {Search} className="btn-search"/>
    // </div>
    // <div className='left-profile'>
    // <img src={paint} alt='paint' id="paint"/>
    // <img src={man} alt='man' id='man'/>
    // <h5 id='search-head5'>Kasi</h5>
    // </div>

    // </div>
    // </div>
    // </nav>
    // </div>
    //  <div>
    //   <nav>
    //     <div className="search_box">
    //       <input type="search" placeholder="search employee" />
    //       <label className="icon">
    //         <img src="./assets/icons/magnifying-glass1.png" alt="" />
    //       </label>
    //     </div>
    //     {/* <div className="painter">
    //       <label>
    //         <img src="./assets/images/png/paint-palette1.png" alt="" />
    //       </label>
    //     </div> */}
    //   </nav>
    //   <div className="tap">
    //     <ul class="nav-links">
    //       <li>
    //         <a href="">Profile</a>
    //       </li>
    //       <li>
    //         <a href="">Team</a>
    //       </li>
    //       <li>
    //         <a href="">Task</a>
    //       </li>
    //       <li>
    //         <a href="">Travel Expense</a>
    //       </li>
    //       <li>
    //         <a href="">Travel Request</a>
    //       </li>
    //       <li>
    //         <a href="">Exit Module</a>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className=""></div>
    // </div>
    <>
      <nav class="navbar ">
        <div class="container-fluid align-items-center justify-content-center">
          <div className="search_box">
            <input type="search" placeholder="search employee" />
            <label className="icon">
              <img src={search} alt="" />
            </label>
          </div>
        </div>
      </nav>
      
    </>
  );
}

export default Navbar;
