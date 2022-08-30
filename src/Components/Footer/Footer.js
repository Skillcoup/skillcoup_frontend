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
              <h6 className="fw-bold mb-3">Explore</h6>
              <p className="mb-2">
                <a href="#" className="text-reset">
                  Design
                </a>
              </p>
              <p className="mb-2">
                <a href="#" className="text-reset">
                  Digital Marketing
                </a>
              </p>
              <p className="mb-2">
                <a href="#" className="text-reset">
                  Writing and Translation
                </a>
              </p>
              <p className="mb-2">
                <a href="#" className="text-reset">
                  Photography
                </a>
              </p>
              <p className="mb-2">
                <a href="#" className="text-reset">
                  Music and Audio
                </a>
              </p>
              <p className="mb-2">
                <a href="#" className="text-reset">
                  Video and Animation
                </a>
              </p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="fw-bold mb-3">About us</h6>
              <p className="mb-2">
                <a href="#" className="text-reset">
                  Team
                </a>
              </p>
              <p className="mb-2">
                <a href="#" className="text-reset">
                  FAQs
                </a>
              </p>
              <p className="mb-2">
                <a href="#" className="text-reset">
                  Contact Us
                </a>
              </p>
              <p className="mb-2">
                <a href="#" className="text-reset">
                  Private Policy
                </a>
              </p>
              <p className="mb-2">
                <a href="#" className="text-reset">
                  Terms of Service
                </a>
              </p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-3">My Account</h6>
              <p className="mb-2">
                <a href="#!" className="text-reset">
                  Login
                </a>
              </p>
              <p className="mb-2">
                <a href="#" className="text-reset">
                  My Account
                </a>
              </p>
              <p>Follow Us</p>
              <MDBRow>
                <MDBCol>
                  <a href="#" className="me-4 text-reset">
                    <MDBIcon fab icon="instagram" />
                  </a>
                  <a href="#" className="me-4 text-reset">
                    <MDBIcon fab icon="facebook-f" />
                  </a>
                  <a href="#" className="me-4 text-reset">
                    <MDBIcon fab icon="linkedin" />
                  </a>
                  <a href="#" className="me-4 text-reset">
                    <MDBIcon fab icon="twitter" />
                  </a>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div
        className="text-center p-2"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022&nbsp;
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Skillcoup&nbsp;
        </a>
        All Rights Reserved.
      </div>
    </MDBFooter>
  );
}

export default Footer