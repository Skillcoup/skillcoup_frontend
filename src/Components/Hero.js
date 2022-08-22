import React from "react";
import './Hero.css'
import illustration from "../Components/images/illustration.png"
const Hero = () => {
    return (
        <>
            <div className="intro-banner">
                <div className="container-fluid">
                    <div className="left">
                        <div className="content-container">
                            <h3><strong>Get Best Freelancers </strong><br />
                                <strong>At The Best Price</strong>
                                <br />
                                <span>India Ka Apna Freelancing Platform</span>
                            </h3>
                            <div className="d-flex content" >
                                <a href="#" className="button button-sliding-icon" >Get Started</a>
                                <a href="#" className="button button-sliding-icon" >Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                    <img src={illustration} alt="illustration"/>
                    </div>
                </div>
            </div>
            <h1>Hellow</h1>


        </>
    );
}
export default Hero;