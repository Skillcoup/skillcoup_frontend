import React from "react";
import './Timeline.css';
const Timeline= () => {
    return(
    <>
    <div class="container-fluid how-it-works-container">
        <div class="row text-center justify-content-center mb-5">
            <div class="section-headline centered margin-bottom-35">
                <h3 class="" >How It Works</h3>

            </div>
        </div>
    
    <div className=" row">
            <div className="col">
                <div className="timeline-steps aos-init aos-animate" data-aos="fade-up">
                    {/* <!-- ----Timeline items---- --> */}
                    <div className="timeline-step col-xs-4">
                        <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                            <div className="inner-circle">
                                <i className="fa-solid fa-user"></i>
                            </div>
                            <p className="h6 mt-3 mb-1">Build your profile</p>
                            <p className="h6 text-muted mb-0 mb-lg-0">Tell us about yourself. Build a stronger profile to help yourself find great work.</p>
                        </div>
                    </div>

                    {/* <!-- ----Timeline items---- --> */}
                    <div className="timeline-step col-xs-4">
                        <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                            <div className="inner-circle">
                                <i className="fa-solid fa-user-group"></i>
                            </div>
                            <p className="h6 mt-3 mb-1">Get ready for work</p>
                            <p className="h6 text-muted mb-0 mb-lg-0">Get connected with our clients who need to accomplish their work with the help of your talent.</p>
                        </div>
                    </div>
                    {/* <!-- ----Timeline items---- --> */}

                    <div className="timeline-step col-xs-4">
                        <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                            <div className="inner-circle">
                                <i className="fa-solid fa-handshake"></i>
                            </div>
                            <p className="h6 mt-3 mb-1">Collaborate easily</p>
                            <p className="h6 text-muted mb-0 mb-lg-0">Get connected to share your work and keep a track of the details on the go.</p>
                        </div>
                    </div>
                    {/* <!-- ----Timeline items---- --> */}
                    <div className="timeline-step col-xs-4 mb-0">
                        <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2020">
                            <div className="inner-circle">
                                <i className="fa-solid fa-briefcase"></i>
                            </div>
                            <p className="h6 mt-3 mb-1">Get paid for your work</p>
                            <p className="h6 text-muted mb-0 mb-lg-0">Get paid for your authentic work and have a safe transaction method through our payment system.</p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    </div>





    </>
    );
}
export default Timeline;