import React from "react";
import "../SelfService/Navbar.css";
import { Link } from "react-router-dom";

function NavbarTaps() {
  return (
    <div className="tap">
      <ul class="nav-links" >
        <li>
          <a href="" class="active">
          <Link>Profile</Link>
          </a>
          
        </li>
        <li>
          <a href="">
          <Link to="team">Team</Link>
          </a>
        </li>
        <li>
          <a href="">Task</a>
        </li>
        <li>
          <a href="">Travel Expense</a>
        </li>
        <li>
          <a href="">Travel Request</a>
        </li>
        <li>
          <a href="">Exit Module</a>
        </li>
      </ul>
    </div>
  );
}

export default NavbarTaps;
