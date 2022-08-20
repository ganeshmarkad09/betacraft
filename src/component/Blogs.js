import React from "react";
import blog from "../image/work-bg.png";
import blog1 from '../image/blog-img-1.png'
import join from "../image/Join-team.png"
function Blogs() {
    return (
        <div className="paddTB60">
            <div className="container">

                <div className="latestInsideSection">
                    <div>
                        <p className="size">Blogs / News / Events</p>
                        <h1 className="local">Latest <span className="navlogo">Insights </span></h1>
                    </div>
                    <div className="secParent">
                        <div className="leftDiv">
                            <div className="backGroundImage" style={{ backgroundImage: `url(${blog})` }}>
                                <div className="cardText">
                                    <p>BLOG | 4 min read</p>
                                    <h4 className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                                    <p className="">December 14,2021</p>
                                </div>
                            </div>
                        </div>
                        <div className="rightDiv">
                            <div className="card">
                                <div className="row height100">
                                    <div className="col-md-6 DisFC">
                                        <div className="cardText">
                                            <p>BLOG | 4 min read</p>
                                            <h4 className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                                            <p className="">December 14,2021</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <img className="colImage" src={blog1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="row height100">
                                    <div className="  col-md-6 ">
                                        <img className="colImage" src={join} alt="" />
                                    </div>
                                    <div className=" col-md-6 DisFC">
                                        <div className="cardText">
                                            <p>BLOG | 4 min read</p>
                                            <h4 className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                                            <p className="">December 14,2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   

                </div>

            </div>
        </div>
    )
}
export default Blogs;