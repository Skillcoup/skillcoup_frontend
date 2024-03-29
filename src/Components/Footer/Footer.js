import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className={`pt-4 ${classes.footer}`}>
        <MDBContainer className="text-center text-md-start">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="fw-bold mb-3">We Serve For</h6>
              <p className="mb-2">
             
                  Design
               
              </p>
              <p className="mb-2">
                
                  Digital Marketing
               
              </p>
              <p className="mb-2">
              
                  Writing and Translation
              
              </p>
              <p className="mb-2">
             
                  Photography
                
              </p>
              <p className="mb-2">
        
                  Music and Audio
              
              </p>
              <p className="mb-2">
                {/* <a href="#" className="text-reset"> */}
                  Video and Animation
                {/* </a> */}
              </p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="fw-bold mb-3">Company</h6>
              <p className="mb-2">
                <a href="https://skillcoup.com/about-us" className="text-reset">
                  About Us
                </a>
              </p>
              {/* <p className="mb-2">
                <a href="#" className="text-reset">
                  FAQs
                </a>
              </p> */}
              <p className="mb-2">
                <a href="https://skillcoup.com/contact" className="text-reset">
                  Contact Us
                </a>
              </p>
              {/* <p className="mb-2">
                <a href="#" className="text-reset">
                  Private Policy
                </a>
              </p> */}
              {/* <p className="mb-2">
                <a href="#" className="text-reset">
                  Terms of Service
                </a>
              </p> */}
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-3">Follow Us</h6>
              {/* <p className="mb-2">
                <a href="#!" className="text-reset">
                  Login 
                </a>
              </p>
              <p className="mb-2">
                <a href="#" className="text-reset">
                  My Account
                </a>
              </p> */}
              {/* <p>Follow Us</p> */}
              <MDBRow>
                <MDBCol>
                  <a href="#" className="me-4 text-reset">
                  <img src="/images/facebook.svg" alt="Facebook Icon" />
                  </a>
                  <a href="#" className="me-4 text-reset">
             
                    <img src="/images/instagram.svg" alt="Facebook Icon" />
                  </a>
                  <a href="#" className="me-4 text-reset">
                
                    <img src="/images/linkedin.svg" alt="Facebook Icon" />
                  </a>
                  <a href="#" className="me-4 text-reset">
     
                    <img src="/images/twitter.svg" alt="Facebook Icon" />
                  </a>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            {/* <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Pune,Maharashtra,India
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                admin@skillcoup.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 91321 99090
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 96653 27466
              </p>
            </MDBCol> */}
          </MDBRow>
        </MDBContainer>
      </section>
      <div
        className="text-center p-2"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022&nbsp;
        {/* <a className="text-reset fw-bold" href="https://skillcoup.com/"> */}
          Skillcoup&nbsp;
        {/* </a> */}
        All Rights Reserved.
      </div>
    </MDBFooter>
  );
}

export default Footer