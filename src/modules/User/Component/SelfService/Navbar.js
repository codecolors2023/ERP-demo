import React from "react";
import "../Services/navsearch.css";
import paint from "../Services/Navimage/paint-palette 1.png";
import man from "../Services/Navimage/man (3) 2.png";
import Search from "../Services/Navimage/magnifying-glass 1.png";
import "../SelfService/Navbar.css";
import search from '../assets/magnifying-glass 1.png'
function Navbar() {
  return (
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
