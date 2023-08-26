import React from 'react'
import Sidebar from '../Sidebar'
import Navsearch from './Services/navsearch'
import './dashboard.css'
import Leave from './Leave/Leave'
import Attendance from './Attendance'


export default function Dashboard() {
    return (
        <>
        <div id='main-dashboard'>
            <div className='left-menu'>
             <Sidebar/>
            </div>
            <div className='right-services'>
                {/* <Navsearch/>     */}
           
           
            <div className='right-leave'>
            {/* <Leave/> */}
            </div>
            </div>
            <div className='box'>
            {/* <Attendance/> */}
            </div>
        </div>

        </>    
    )
}
