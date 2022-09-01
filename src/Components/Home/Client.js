import React from 'react';
import './Client.css';
import "./Commoncss.css";
// import Buttons from './Buttons';


import clientillustration from "../../assets/clientillustration.png";
const Client = () => {

    return (
        <section>
        <div class="section margin-top-65 display-flex">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="section-headline centered margin-bottom-15">

                        </div>
                    </div>
                </div>

                <div class="row " id="for-clients">
                    <div class="col-md-6 left-container">
                        <img src={clientillustration} alt="" />
                    </div>
                    <div class="col-md-6 right-container">
                        <div class="margin-top-25 margin-bottom-15">
                            <h1>Experienced Professionals.</h1>
                            <h1>Affordable Price.</h1>
                            <p>Hire experienced professionals for all your requirements.
                                <ul>
                                    <li class=""  >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" fill="rgba(7,39,86,1)"/></svg> Verified profiles</li>
                                    <li ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" fill="rgba(7,39,86,1)"/></svg>
                                        Plenty of Opportunities</li>
                                    <li > <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" fill="rgba(7,39,86,1)"/></svg>Protected Data</li>
                                    <li > <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" fill="rgba(7,39,86,1)"/></svg> Safe Payment</li>
                                </ul>
                            </p>
                             <div class="row">
                                <div class="col-md-6 client-btn" >
                                    <div class="post-job-container">
                                        <h3>Get Your First Job  <br />Done</h3>
                                        <p>Get Started &nbsp;<i class="icon-material-outline-arrow-forward"></i></p>
                                    </div>
                                </div>

                                <div class="col-md-6" >
                                    <div class="post-job-container">
                                        <h3>Get Me The Best <br />Talent</h3>
                                        <p>Get Started &nbsp;<i class="icon-material-outline-arrow-forward"></i></p>

                                    </div>
                                </div>
                            </div> 

                        </div>
                    </div>

                </div>
            </div>
        </div>
    {/* </div > */}
    
          
            {/* // </div > */}
        {/* // </div > */}
    
    
    
    </section >
    
    
    
    
    
    
    
    );

}
export default Client;
