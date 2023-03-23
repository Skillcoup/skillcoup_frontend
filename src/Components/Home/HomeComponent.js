/** @format */

import React from "react";
import "./Hero.css";
import Buttons from "./Buttons";
import Categories from "./Categories";
import Photosec from "./Photosect";
import Timeline from "./Timeline";
import Blogs from "./Blogs";
import VTime from "./VerticalTimeline";
import Brands from "./Brands";
import Client from "./Client";
import EndSection from "./EndSection";
import Testimonials from "./Testimonials";
import Footer from "../Footer/Footer";

const HomeComponent = () => {
  return (
    <>
      <div className='intro-banner'>
        <div className='container-fluid'>
          <div className='left'>
            <div className='content-container'>
              <h3>
                <strong>Get Best Talent </strong>
                <strong>At The Best Price</strong>
                {/* <br /> */}
                <span>India ka apna earning platform</span>
              </h3>
              <div className='d-flex content'>
                <Buttons buttonText={"Get in touch"} />
              </div>

              <div className="projectcounter" >
                  
                            <ul class="intro-stats margin-top-45 hide-under-992px">
                                <li>
                                    <div className="counter1"></div><div className="plus"  >+</div>
                                    <span>Projects Completed</span>
                                </li>   
                            </ul>
                  
              </div>
            </div>
          </div>
          <div className='right'></div>
        </div>
      </div>
      <Client />
      <Categories />
      <Photosec />
      {/* <Timeline /> */}
      <div>
        <Blogs />
      </div>
      {/* <div>
        <VTime />
      </div> */}
      <Brands />
      <Testimonials />
      <EndSection />
      <Footer />
    </>
  );
};
export default HomeComponent;
