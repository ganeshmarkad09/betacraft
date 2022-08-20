import React from "react";
import google from "../logo/google-logo.png"
import infosys from "../logo/infosys-logo-grey.png"
import latter from "../logo/letter-b.png"
import mfg from "../logo/MFG.png"

function Globlereach () {
    return(
        <div className="paddTB60">
             <p className="size text-center">OUR GLOBAL REACH</p>
        <h1 className="local text-center">Our clients <span className="navlogo">love</span>  us, you will love too.</h1>
         <div className="container">
         <div className="row ourClientImage">
    <div className="Image" ><img className="blackWhite" src={google} alt="" /></div>
    <div className="Image" ><img  src={infosys} alt="" /></div>
    <div className="Image" ><img  className="blackWhite" src={google} alt="" /></div>
    <div className="Image" ><img src={infosys} alt="" /></div>
    <div className="Image" ><img  className="blackWhite" src={google} alt="" /></div>
    <div className="Image" ><img src={infosys} alt="" /></div>
    <div className="Image" ><img  className="blackWhite" src={google} alt="" /></div>
    <div className="Image" ><img src={infosys} alt="" /></div>
    <div className="Image" ><img  className="blackWhite" src={google} alt="" /></div>
    <div className="Image" ><img src={infosys} alt="" /></div>
  
  </div>
         </div>
        </div>
    )
}
export default Globlereach;