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
                                    <h3 className="margin-top-25">Aim for excellence with </h3>
                                    <h3 className="margin-top-25">best talent at Skillcoup.</h3>
                                </p> 

                                 <div className="green">
                                 <div className="d-flex content" >
                                    <Buttons />


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
