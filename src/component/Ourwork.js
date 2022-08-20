import React from "react";
import work from "../image/work-bg.png"
function Ourwork (){
    return(
        <div className="backGroundImage OurWorkSec" style={{ backgroundImage: `url(${work})` }}>
            <div className="text-center">
            <p className="size" >NEXT STOP</p>
        <h1 className=" " >Our <span className="navlogo">Work</span></h1>
            </div>
        </div>
    )
}
export default Ourwork;