import React from "react";
import navLogo from '../logo/Logo-Beta.svg'
function Footer (){
    return(
      <div className="container paddTB60 footerSection">
        <div>
        <img src={navLogo} alt="" className="navlogo" />
        
        </div>
        <div className="row">
    <div className="col-sm-3" >
        <p className="footerTextBolt">Services</p>
        <p>Design & Innovation  </p>
        <p>Digital Product</p>
        <p> Engineering Cloud</p>
        <p> Adoptation Services Data</p>
        <p>Analytics Digital</p>
        <p> Marketing Studio</p>
    </div>
    <div className="col-sm-3" >
        <p className="footerTextBolt">Industries</p>
        <p>Blockchain  </p>
        <p>Travel & Hospitality </p>
        <p>Manufacturing (OEM's)</p>
        <p> Electric Vehicle (EV)</p>
        <p>Loyalty</p>
        <p>Martech</p>
        <p> GIS </p>
        <p> eLearning</p>
    </div>
    <div className="col-sm-3" >
        <p className="footerTextBolt">Company</p>
        <p className="company">About  </p>
        <p> Work</p>
        <p> Insights</p>
        <p>Partners</p>
        <p> Careers</p>
        <p>Contact us</p>
    </div>
    <div className="col-sm-3" >
        <p className="footerTextBolt">Other</p>
        <p className="other">Code of Conduct</p>
        <p> Privay Notice</p>
        <p> Cookie Policy</p>
        <p> Terms of Use</p>
         <p className="footerTextBolt">Follow us</p>

         <i className="fa fa-linkedin"></i>
         <i className="fa fa-instagram"></i>
         <i className="fa fa-twitter"></i>
         <i className="fa  fa-facebook-square"></i>
         
    </div>
  </div>
      </div>
    )
}
export default Footer;