import React from "react";
import "../Asset/asset.css";
function Assets() {
  return (

    <div class="card mt-5 p-5" style={{ width: "100%" }}>
      <div class="card-body">
        <div className="row">
          <div className="col-2 ">LapTopName</div>
          <div className="col-1 ">IPS</div>
          <div className="col-2 ">Date of issue</div>
          <div className="col-1 ">Variant</div>
          <div className="col-2 ">assignedTo</div>
          <div className="col-2 ">assignedBy</div>
          <div className="col-2 ">Status</div>
        </div>
        <div className="row">
          <div className="col-2 ">Lenovo-12</div>
          <div className="col-1 ">124 204 2021</div>
          <div className="col-2 ">01-08-2023</div>
          <div className="col-1 ">Windows</div>
          <div className="col-2 "></div>
          <div className="col-2 ">assignedBy</div>
          <div className="col-2 ">Status</div>
        </div>
      </div>
    </div>

  );
}

export default Assets;
