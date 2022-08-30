import React from "react";
import './Hero.css'
import Buttons from './Buttons';
import Categories from "./Categories";
// import illustration from "./Components/images/illustrations.png";
import Photosec from './Photosect';
import Timeline from "./Timeline";
import Blogs from "./Blogs";
import VTime from "./VerticalTimeline";
import Brands from "./Brands";
import Client from "./Client";
import EndSection from "./EndSection";
import Testimonials from "./Testimonials";
const HomeComponent = () => {
    return (
        <>
            <div className="intro-banner">
                <div className="container-fluid">
                    <div className="left">
                        <div className="content-container">
                            <h3><strong>Get Best Freelancers </strong>
                                <strong>At The Best Price</strong>
                                {/* <br /> */}
                                <span>India Ka Apna Freelancing Platform</span>
                            </h3>
                            <div className="d-flex content" >
                                <Buttons />
                                <Buttons />

                            </div>
                        </div>
                    </div>
                    <div className="right">

                    </div>
                </div>
            </div>
            <Client />
            <Categories />
            <Photosec />
            <Timeline />
            <div>
                <Blogs />
            </div>
             <div>
                <VTime />
            </div>
            <Brands />
            <Testimonials />
            <EndSection />  


        </>
    );
}
export default HomeComponent;