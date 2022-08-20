import React from "react";
import craft from "../image/craft1.png";

function Services() {
  return (



    <div className="backcolor paddTB60">
      <div className="container">
        <div className="card-header">
          <p className="size">SERVICES</p>
          <h1 className="local">Getting <span className="navlogo">started</span> with us</h1>
        </div>


        <div id="accordion">

          <div className="card-header">
            <span className="collaps"> Design & Innovation<a className="card-link" data-toggle="collapse" href="#collapseOne">+</a></span>
            <div id="collapseOne" className="collapse show" data-parent="#accordion">
              <div className="card-body">
                <div className="">
                  <div className="row">
                    <div className="col-sm-6">

                      <p className="fontsize">Betacraft is a trusted global Digital Product Engineering and Enterprise Modernization company. We integrate experience design, complex engineering and domain expertise to help our clients envision what’s possible and accelerate their transition into tomorrow’s digital businesses."</p>
                      <div className="designList">
                        <h4>Design Research</h4>
                        <h4>Product Design Sprints</h4>
                        <h4>UI/UX Design</h4>
                        <h4>Investment Pitch Packges</h4>
                        <h4>Sales Pitch Packages</h4>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div>
                        <img className="serviseImage" src={craft} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="card-header">
          <span className="collaps">Digital Product Engineering<a>+</a></span>
        </div>



        <div className="card-header">
          <span className="collaps">Cloud Adoptation Services <a > +</a></span>
        </div>


        <div className="card-header">
          <span className="collaps"> Data Analytics  <a >+</a></span>
        </div>

        <div className="card-header">
          <span className="collaps"> Digital Marketing Studio <a > +</a></span>
        </div>


      </div>

    </div>

  )
}
export default Services;