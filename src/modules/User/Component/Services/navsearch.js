import React from 'react'
import './navsearch.css'
import paint from './Navimage/paint-palette 1.png'
import man from './Navimage/man (3) 2.png'
import Search from '../Services/Navimage/magnifying-glass 1.png'


function Navsearch() {
    return (
        <div className='nav-search md-12'>
            <nav className="navbar bg-body-tertiary md-4">
  <div className="container-fluid">
    <div className="search-container">
     
      <div className="search-wrapper">
        <input className="form-control" type="search" placeholder="Search Employee" aria-label="Search" id='search-form'/>
        <img src={Search} alt = {Search} className="btn-search"/>
      </div>
      <div className='left-profile'>
      <img src={paint} alt='paint' id="paint"/>
      <img src={man} alt='man' id='man'/>
      <h5 id='search-head5'>Kasi</h5>
      </div>
      
    </div>
  </div>
</nav>

</div>
    )
}
export default Navsearch;