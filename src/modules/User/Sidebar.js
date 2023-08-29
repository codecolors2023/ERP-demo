import React from "react";
import "./Sidebar.css";
import lock from "./Images/logo1 1.png";
import service from "./Images/Group 1.png";
import home from "./Images/house (1) 1 (1).png";
import selfservice from "./Images/man 1.png";
import calender from "./Images/calendar (1) 1.png";
import organization from "./Images/skyscraper 1.png";
import megaphone from "./Images/megaphone 1.png";
import files from "./Images/folder 1.png";
import asset from "./Images/laptop 1.png";
import menu from "./Images/menu (1) 1.png";
// import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      {/* <ul>
                <li className='lock'> <img src={lock} alt='lock' id='lock'/> </li>
                <li className='sidebar-img'> <img src={service} alt='service' /> </li>
                <p>Service</p>
                <li className='sidebar-img'> <img src={home} alt='Home'/> </li>
                <p>Home</p>
                <li className='sidebar-img'> <img src={selfservice} alt='selfservice'/></li>
                <p>Self Service</p>
                <li className='sidebar-img'> <img src={calender} alt='calender'/> </li>
                <p>Calender</p>
                <li className='sidebar-img'> <img src={organization} alt='organization'/> </li>
                <p>Organization</p>
                <li className='sidebar-img'> <img src={megaphone} alt='megaphone'/> </li>
                <p>Megaphone</p>
                <li className='sidebar-img'> <img src={files} alt='files'/> </li>
                <p>Files</p>
                <li className='sidebar-img'> <img src={asset} alt='asset'/> </li>
                <p>Asset</p>
                <li className='sidebar-img'> <img src={menu} alt='menu'/> </li>
                <p>Menu</p>

                </ul> */}

      <div class="d-flex" id="wrapper">
        <div class="bg-dark" id="sidebar-wrapper">
          <div class="list-group list-group-flush ">
            <ul class="text-align">
              <li class="list">
                <img src={lock} alt="lock" id="lock" />
              </li>
              <div class="hoverback">
                <li class="list">
                  <img src={service} alt="service" />
                </li>
                <span class="label">Services</span>
              </div>
              <div class="hoverback">
                <li class="list">
                  <img src={home} alt="Home" />
                </li>
                <span class="label">Home</span>
              </div>
              <div class="hoverback">
                <li onClick={()=>navigate("/profile")} class="list">
                  <img src={selfservice} alt="selfservice" />
                </li>
                <span class="label">Self Service</span>
              </div>
              <div class="hoverback">
                <li class="list">
                  <img src={calender} alt="calender" />
                </li>
                <span class="label">Calender</span>
              </div>
              <div class="hoverback">
                <li class="list">
                  <img src={organization} alt="organization" />
                </li>
                <span class="label">Organization</span>
              </div>
              <div class="hoverback">
                <li class="list">
                  <img src={megaphone} alt="megaphone" />
                </li>
                <span class="label">Megaphone</span>
              </div>
              <div class="hoverback">
                <li class="list">
                  <img src={files} alt="files" />
                </li>
                <span class="label">Files</span>
              </div>
              <div class="hoverback">
                <li class="list">
                  <img src={asset} alt="asset" />
                </li>
                <span class="label">Assets</span>
              </div>
              <div class="hoverback">
                <li>
                  <img src={menu} alt="menu" />
                </li>
                <span class="label">Menu</span>
              </div>
            </ul>
            {/* <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-user icon"></i>
              Profile
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-cog icon"></i>
              Settings
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
