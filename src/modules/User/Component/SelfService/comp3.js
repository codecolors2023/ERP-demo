import React from 'react'
import label from '../assets/integrity1.png'
function Comp3() {
  return (
   
    <div class="container1">
      <div class="card d-flex align-items-start">
        <div class="row no-gutters ">
          <div class="col-md-6">
          <label>
           
           <div class="lable1">
           <span>Skill set</span>
           </div>
         </label>
            
          </div>
          <div class="col-md-6">
            <div class="card-bodyss">
              <img
                src={label}
                class="card-img3 p-4"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comp3