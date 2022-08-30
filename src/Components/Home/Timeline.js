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
                            <svg className="timeline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 22a8 8 0 1 1 16 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" fill="rgba(0,122,255,1)"/></svg>
                            </div>
                            <p className="h6 mt-3 mb-1">Build your profile</p>
                            <p className="h6 text-muted mb-0 mb-lg-0">Tell us about yourself. Build a stronger profile to help yourself find great work.</p>
                        </div>
                    </div>

                    {/* <!-- ----Timeline items---- --> */}
                    <div className="timeline-step col-xs-4">
                        <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                            <div className="inner-circle">
                            <svg className="timeline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 15.243v5.765a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V9h6a1 1 0 0 0 1-1V2h10.002c.551 0 .998.455.998.992v3.765l-8.999 9-.006 4.238 4.246.006L21 15.243zm.778-6.435l1.414 1.414L15.414 18l-1.416-.002.002-1.412 7.778-7.778zM3 7l5-4.997V7H3z" fill="rgba(0,122,255,1)"/></svg>
                            </div>
                            <p className="h6 mt-3 mb-1">Get ready for work</p>
                            <p className="h6 text-muted mb-0 mb-lg-0">Get connected with our clients who need to accomplish their work with the help of your talent.</p>
                        </div>
                    </div>
                    {/* <!-- ----Timeline items---- --> */}

                    <div className="timeline-step col-xs-4">
                        <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                            <div className="inner-circle">
                            <svg className="timeline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3.161 4.469a6.5 6.5 0 0 1 8.84-.328 6.5 6.5 0 0 1 9.178 9.154l-7.765 7.79a2 2 0 0 1-2.719.102l-.11-.101-7.764-7.791a6.5 6.5 0 0 1 .34-8.826zm1.414 1.414a4.5 4.5 0 0 0-.146 6.21l.146.154L12 19.672l5.303-5.304-3.535-3.535-1.06 1.06a3 3 0 1 1-4.244-4.242l2.102-2.103a4.501 4.501 0 0 0-5.837.189l-.154.146zm8.486 2.828a1 1 0 0 1 1.414 0l4.242 4.242.708-.706a4.5 4.5 0 0 0-6.211-6.51l-.153.146-3.182 3.182a1 1 0 0 0-.078 1.327l.078.087a1 1 0 0 0 1.327.078l.087-.078 1.768-1.768z" fill="rgba(0,122,255,1)"/></svg>
                            </div>
                            <p className="h6 mt-3 mb-1">Collaborate easily</p>
                            <p className="h6 text-muted mb-0 mb-lg-0">Get connected to share your work and keep a track of the details on the go.</p>
                        </div>
                    </div>
                    {/* <!-- ----Timeline items---- --> */}
                    <div className="timeline-step col-xs-4 mb-0">
                        <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2020">
                            <div className="inner-circle">
                            <svg className="timeline-svg"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zM4 15v4h16v-4H4zm7-4v2h2v-2h-2zM9 3v2h6V3H9z" fill="rgba(0,122,255,1)"/></svg>
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