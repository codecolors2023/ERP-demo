import React from 'react'
import './Sidebar.css'
import lock from './Images/logo1 1.png'
import service from './Images/Group 1.png'
import home from './Images/house (1) 1 (1).png'
import selfservice from './Images/man 1.png';
import calender from './Images/calendar (1) 1.png'
import organization from './Images/skyscraper 1.png'
import megaphone from './Images/megaphone 1.png'
import files from './Images/folder 1.png'
import asset from './Images/laptop 1.png'
import menu from './Images/menu (1) 1.png'
// import { Link } from 'react-router-dom'
function Sidebar() {
    return (
            <div className='menu-list'>
                <div className='sidebar'>
                    <ul >
                        <li><img src={lock} alt='lock' id='lock'/></li>
                    </ul>
                </div>

                <div className='sidebar'>
                    <ul>
                        <li><img src={service} alt='service' /></li>
                        {/* <li><Link to='/services'>Service</Link></li> */}
                        <p>Services</p>
                    </ul>
                </div>

                <div className='sidebar'>
                    <ul>
                        <li><img src={home} alt='Home'/></li>
                        <li><p>Home</p></li>
                    </ul>
                </div>

                <div className='sidebar'>
                    <ul>
                        <li><img src={selfservice} alt='selfservice'/></li>
                        <li><p>Self Service</p></li>
                    </ul>
                </div>

                <div className='sidebar'>
                    <ul>
                        <li><img src={calender} alt='calender'/></li>
                        <li><p>Calender</p></li>
                    </ul>
                </div>

                <div className='sidebar'>
                    <ul>
                        <li><img src={organization} alt='organization'/></li>
                        <li><p>Organization</p></li>
                    </ul>
                </div>

                <div className='sidebar'>
                    <ul>
                        <li><img src={megaphone} alt='megaphone'/></li>
                        <li><p>Megaphone</p></li>
                    </ul>
                </div>

                <div className='sidebar'>
                    <ul>
                        <li><img src={files} alt='files'/></li>
                        <li><p>Files</p></li>
                    </ul>
                </div>

                <div className='sidebar'>
                    <ul>
                        <li><img src={asset} alt='asset'/></li>
                        {/* <li><Link to=''>Asset</Link></li> */}
                        <p>Assert</p>
                    </ul>
                </div>

                <div className='sidebar'>
                    <ul>
                        <li><img src={menu} alt='menu'/></li>
                        <li><p>Menu</p></li>
                    </ul>
                </div>

                







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


            
            </div>
            
    )
}

export default Sidebar