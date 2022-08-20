import React from "react";
import accordation from "../image/accordion-img-1.png"

function Careesrs() {
    return (
        
            <div className="paddTB60 backcolor">
                <div className="  container  ">
                  <div className="row">
                  <div className="col-md-6 DisFC">
                    <div className="width100">
                    <div>
                            <p className="size">CAREESRS</p>
                            <h1 className="local">Join Ouer <span className="navlogo">Team </span></h1>
                        </div>
                        <div className="card-header">
                            <span className="collaps">Benefits<a>+</a></span>
                        </div>
                        <div className="card-header">
                            <span className="collaps">Interview Process <a > +</a></span>
                        </div>
                        <div className="card-header">
                            <span className="collaps">Opportunities  <a >+</a></span>
                        </div>
                    </div>
                       

                    </div>
                    <div className="col-md-6">
                      <div>
                      <img src={accordation} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          
    )
}
export default Careesrs;