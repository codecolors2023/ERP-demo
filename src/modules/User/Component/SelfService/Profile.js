import React from "react";
import Comp1 from "./comp1";
import Comp2 from "./comp2";
import Comp3 from "./comp3";
import Comp4 from "./comp4";
import Comp5 from "./comp5";
import Comp6 from "./comp6";
import NavbarTaps from "./NavbarTaps";

function Profile() {
  return (
    <div class="container-fluid overflow-hidden">
      <div class="center_div">
        <div class="row gy-1 gx-4">
          <div class="col-lg-12">
            <NavbarTaps />
          </div>
          <div class="col-lg-6 col-12">
            <div class="row ">
              <div class="col-12 p-2 ">
                <Comp1 />
              </div>
              <div class="col-12   p-2  bottom_first_div">
                <Comp3 />
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-12">
            <div class="row">
              <div class="col-12 p-2 ">
                <Comp2 />
              </div>
              <div class="col-12  p-2   bottom_first_div">
                <Comp4 />
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-12">
            <div class="row">
              <div class="col-12  p-2">
                <Comp5 />
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12 ">
            <div class="row">
              <div class="col-12   bottom_first_div">
                <Comp6 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
