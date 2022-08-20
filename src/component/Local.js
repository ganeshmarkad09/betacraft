import React from "react";
import earth from "../image/earth.png";

function Local() {
  return (
    <div className="bground paddTB60">
      <div className="container localSection">
        <div className="row">
          <div className="col-sm-6">

            <img src={earth} alt="" />

          </div>
          <div className="col-sm-6 DisFC">
            <div>
              <p className="size">WHO WE ARE</p>
              <h1 className="local">We are local,<br/> yet <span className="navlogo"> global.</span></h1>
              <p className="fontsize">Betacraft is a trusted global Digital Product Engineering and Enterprise Modernization company. We integrate experience design, complex engineering and domain expertise to help our clients envision what’s possible and accelerate their transition into tomorrow’s digital businesses."</p>
              <div>
              <p className="size borderB">DISCOVER OUR WORK <span className="line"></span></p>
              
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Local;