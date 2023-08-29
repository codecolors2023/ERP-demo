import React from "react";
import profile2 from '../assets/Rectangle14.png'
function Comp2() {
  return (
    <div class="container1">
      <div class="card  d-flex align-items-start">
        <div class="row no-gutters ">
          <div class="col-md-4">
            <label>
              <div class="lable1">
                <span>Reporting To</span>
              </div>
            </label>

            <img
              src={profile2}
              class="card-img2 p-4"
              alt=""
            />
          </div>
          <div class="col-md-8">
            <div class="card-bodys p-2">
              <h5>smirtha ashokan</h5>
              <p>Technical lead</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp2;
