import React from "react";
import "./Navbar.css";
import navLogo from '../logo/Logo-Beta.svg'

function Navbar (){
    return(
        <div>
           <nav  id="nav" className="navbar navbar-expand-sm bg-light navbar-light">
     
     <span className="navbar-toggler-icon"></span>
    
    
        {/* <a className="nav"><span className="navlogo">beta</span>craft</a> */}
        <img src={navLogo} alt="" className="navlogo" />
        {/* <img src={accordation} alt="" /> */}


  <button type="button" className="btn btn-danger">Conatct us</button>
</nav>
        </div>
    )
}
export default Navbar;