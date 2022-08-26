import React from "react";
import './Hero.css'
import Buttons from './Buttons';
import illustration from "../Components/images/illustration.png"
import Photosec from './Photosect';
import Timeline  from "./Timeline";
import Blogs from "./Blogs";
import VTime from "./VerticalTimeline";
import Brands from "./Brands";
const Hero = () => {
    return (
        <>
            <div className="intro-banner">
                <div className="container-fluid">
                    <div className="left">
                        <div className="content-container">
                            <h3><strong>Get Best Freelancers </strong><br/>
                                <strong>At The Best Price</strong>
                                <br/>
                                <span>India Ka Apna Freelancing Platform</span>
                            </h3>
                            <div className="d-flex content" >
                                <Buttons/>
                                
                            </div>
                        </div>
                    </div>
                    <div className="right">
                    <img  src={illustration} alt="illustration"/>
                    </div>
                </div>
            </div>
            <Photosec/>
            <Timeline/>
            <div>
                <Blogs/>
            </div>
            <div>
                <VTime/>
            </div>
            <Brands/>


        </>
    );
}
export default Hero;