import React from 'react'
import './Comp.css'
import profile from '../assets/man(1)2.png'
function Comp1() {
  return (
    <div class="container1">
    <div class="card">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src={profile}
            class="card-img p-5"
            alt=""
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5>Prakash Chandran</h5>
            <p className="admin">Administrator</p>
            <div class="qa-container">
            <div class="question-column">
              <ul>
                <li className='list1'>Email</li>
                <li className='list1'>phone</li>
                <li className='list1'>Reporting To</li>
              </ul>
            </div>
            <div class="answer-column">
              <ul>
                <li className='list1'>prakash.chandran@gamail.com</li>
                <li className='list1'>9876543210</li>
                <li className='list1'>Smirta Ashoan</li>
              </ul>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Comp1