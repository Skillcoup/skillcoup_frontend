import React from 'react';
import "./EndSection";
import Buttons from "./Buttons";
import "./Commoncss.css";
import "./EndSection.css";
const EndSection = () => {
    return (
        <>
            <div className=" container container-main section margin-top-0 margin-bottom-65">
                <div className="container typewriter-container">
                    <div className="row typewriter">
                        <div className="col-xl-7 col-md-7 yellow" >
                            <br />

                              <div className="typerwriter-overlay">
                                <p>
                                    <h3 className="margin-top-25">Get Hired, or Hire Talent </h3>
                                    <h3 className="margin-top-25">At no extra commission.</h3>
                                </p> 

                                 <div className="green">
                                 <div className="d-flex content" >
                                    <Buttons buttonText={"Contact Now"}/>


                                </div>


                                </div>  
                               
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};
export default EndSection;
