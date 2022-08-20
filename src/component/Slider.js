import React from "react";
import "./Navbar.css"
import craft from "../image/craft1.png";
function Slider() {
  return (
    <div className="">

      <div id="demo" className="carousel slide black" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 DisFC">
                  <div className="sliderDiv">
                    <h1 className="heading">Timeless Products, great <span className="navlogo">brands.</span></h1>

                    <p className="fsize">We craft outstanding direct-to-consumer brands with the common ambition to offer true craftsmanship, timeless products that are carbon neutral – and this without ever making any concessions.</p>

                    <p className="size borderB">DISCOVER OUR WORK <span className="line"></span></p>

                  </div>

                </div>
                <div className="col-sm-6">
                  <img src={craft} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 DisFC">
                  <div className="sliderDiv">
                    <h1 className="heading">Timeless Products, great <span className="navlogo">brands.</span></h1>

                    <p className="fsize">We craft outstanding direct-to-consumer brands with the common ambition to offer true craftsmanship, timeless products that are carbon neutral – and this without ever making any concessions.</p>

                    <p className="size borderB">DISCOVER OUR WORK <span className="line"></span></p>

                  </div>

                </div>
                <div className="col-sm-6">
                  <img src={craft} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 DisFC">
                  <div className="sliderDiv">
                    <h1 className="heading">Timeless Products, great <span className="navlogo">brands.</span></h1>

                    <p className="fsize">We craft outstanding direct-to-consumer brands with the common ambition to offer true craftsmanship, timeless products that are carbon neutral – and this without ever making any concessions.</p>

                    <p className="size borderB">DISCOVER OUR WORK <span className="line"></span></p>

                  </div>

                </div>
                <div className="col-sm-6">
                  <img src={craft} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control"><i className="fa fa-long-arrow-left"></i></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control"><i className="fa fa-long-arrow-right"></i></span>
        </a>
      </div>




    </div>
  )
}
export default Slider;