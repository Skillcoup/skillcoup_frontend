import React from "react";
import './Photosec.css';
import Buttons from './Buttons';
const Photosec = () => {
    return (
        <>
            <div className="photo-section" >

                {/* <!-- Infobox --> */}
                <div className="text-content white-font ">
                    <div className="container">
                        <div className="row">
                            <div className="photo-content col-lg-6 col-md-5 col-sm-12">

                                <h2  >Hire experts or be hired.</h2>
                                <h2 >For any job, any time.</h2>
                                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of
                                    the day, going forward, a new normal that has evolved from generation is on the runway
                                    towards.
                                </p>
                                <div className="d-flex content" >
                                    <Buttons />


                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <!-- Infobox / End --> */}

            </div>
        </>
    );
}
export default Photosec