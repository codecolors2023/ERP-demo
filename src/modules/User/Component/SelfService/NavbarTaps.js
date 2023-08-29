import React from "react";
import "../SelfService/Navbar.css";

function NavbarTaps() {
  return (
    <div className="tap">
      <ul class="nav-links">
        <li>
          <a href="" class="active">
            Profile
          </a>
        </li>
        <li>
          <a href="">Team</a>
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
