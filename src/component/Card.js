import React from "react";
import story from "../image/story-img-4.jpg"
import bc from "../logo/BC.svg"
import traval from "../logo/Travel.svg"
import mfg from "../logo/MFG.png"
import ev from "../logo/EV.png"
function Card() {
    return (
        <>

            <div className="pageSection paddTB60 overFH">
                <div className="container">
                    <div>
                        <p className="size">INDUSTRIES</p>
                        <h1 className="local">Our <span className="navlogo">expertise </span> and solutions</h1>
                    </div>
                    <br />
                    <div className="card-deck">
                        <div className="card bg-secondary">
                            <div className="card-body text-center ">
                                <img className="cardImage" src={bc} alt="" />
                                <h1 className="card-text  ">Blockchain</h1>
                                <p className="fontsize ">It is a long established fact that a reader will be distracted by the readable content</p>
                            </div>
                        </div>
                        <div className="card bg-secondary">
                            <div className="card-body text-center ">
                                <img  className="cardImage" src={ traval} alt="" />
                                <h1 className="card-text ">Travel & Hospitality</h1>
                                <p className="fontsize ">It is a long established fact that a reader will be distracted by the readable content</p>
                            </div>
                        </div>
                        <div className="card  bg-secondary">
                            <div className="card-body text-center ">
                                <img  className="cardImage" src={mfg} alt="" />
                                <h1 className="card-text ">Manufacturing</h1>
                                <p className="fontsize">It is a long established fact that a reader will be distracted by the readable content</p>
                            </div>
                        </div>
                        <div className="card  bg-secondary">
                            <div className="card-body text-center">
                                <img  className="cardImage" src={ev} alt="" />
                                <h1 className="card-text  ">Electric Vehicle</h1>
                                <p className="fontsize">It is a long established fact that a reader will be distracted by the readable content</p>
                            </div>
                        </div>
                        <div className="card bg-secondary">
                            <div className="card-body text-center ">
                                <img className="cardImage" src={bc} alt="" />
                                <h1 className="card-text ">Blockchain</h1>
                                <p className="fontsize">It is a long established fact that a reader will be distracted by the readable content</p>
                            </div>
                        </div>
                        <div className="leftArrow">
                            <i className="	fa fa-long-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pageSection">
                <div className="baner">
                    <img src={story} alt="" className="bannerImg" />
                </div>
                <div className="testimoniaul ">
                    <div className="leftArrow">
                        <i className="	fa fa-quote-left"></i>
                    </div>
                    <h4 className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                    <div className="leftArrow">
                        <img src={story} alt="" className="billuGateImg" />
                    </div>
                    <p>- Bill Gust, CEO and President</p>
                    <div className="disFCSB">
                        <p><span>02</span> -------- <span>08</span></p>
                        <p className="cardTextColor"> <i className="fa fa-play-circle-o"></i> View Success Story</p>
                        <div className="arrowIcon">
                             <i className="fa fa-long-arrow-left"></i>
                            <i className="fa fa-long-arrow-right"></i>
                        
                        </div>
                    </div>
                   
                </div>
            </div>
            
        </>
 
    )
}
export default Card;