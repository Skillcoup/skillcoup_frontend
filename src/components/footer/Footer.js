import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className={`pt-4 ${classes.footer}`}>
        <MDBContainer className="text-center text-md-start">
          <MDBRow className="mt-3">
            <MDBCol md="6" lg="3" className="mx-auto mb-4">
              <h6 className="fw-bold mb-3">Explore</h6>
              <p className="mb-2">
                <a href="#!" className="text-reset">
                  Design
                </a>
              </p>
              <p className="mb-2">
                <a href="#!" className="text-reset">
                  Digital Marketing
                </a>
              </p>
              <p className="mb-2">
                <a href="#!" className="text-reset">
                  Writing and Translation
                </a>
              </p>
              <p className="mb-2">
                <a href="#!" className="text-reset">
                  Photography
                </a>
              </p>
              <p className="mb-2">
                <a href="#!" className="text-reset">
                  Music and Audio
                </a>
              </p>
              <p className="mb-2">
                <a href="#!" className="text-reset">
                  Video and Animation
                </a>
              </p>
            </MDBCol>
            <MDBCol md="6" lg="3" className="mx-auto mb-4">
              <h6 className="fw-bold mb-3">About us</h6>
              <p className="mb-2">
                <a href="#!" className="text-reset">
                  Team
                </a>
              </p>
              <p className="mb-2">
                <a href="#!" className="text-reset">
                  FAQs
                </a>
              </p>
              <p className="mb-2">
                <a href="#!" className="text-reset">
                  Contact Us
                </a>
              </p>
              <p className="mb-2">
                <a href="#!" className="text-reset">
                  Private Policy
                </a>
              </p>
              <p className="mb-2">
                <a href="#!" className="text-reset">
                  Terms of Service
                </a>
              </p>
            </MDBCol>
            <MDBCol md="6" lg="3" className="mx-auto mb-4">
              <h6 className="fw-bold mb-3">My Account</h6>
              <p className="mb-2">
                <a href="#!" className="text-reset">
                  Login
                </a>
              </p>
              <p className="mb-2">
                <a href="#!" className="text-reset">
                  My Account
                </a>
              </p>
              <p className={`mb-1 ${classes.follow}`}>Follow Us</p>
              <MDBRow>
                <MDBCol>
                  <a href="#" className="me-3 text-reset fa-lg">
                    <MDBIcon fab icon="instagram" />
                  </a>
                  <a href="#" className="me-3 text-reset fa-lg">
                    <MDBIcon fab icon="facebook-f" />
                  </a>
                  <a href="#" className="me-3 text-reset fa-lg">
                    <MDBIcon fab icon="linkedin" />
                  </a>
                  <a href="#" className="me-3 text-reset fa-lg">
                    <MDBIcon fab icon="twitter" />
                  </a>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="6" lg="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="fw-bold mb-3">Sign up for our newsletter</h6>
              <p>
                Weekly breaking news, analysis and cutting edge advices on job
                searching.
              </p>
              <form className="mt-4">
                <MDBInputGroup className="mb-3" noBorder size="lg">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email address"
                  />
                  <MDBBtn type="submit" className={classes.btn}>
                    <MDBIcon fas icon="arrow-right" />
                  </MDBBtn>
                </MDBInputGroup>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div
        className="text-center p-2 text-white"
        style={{ backgroundColor: "#344B6C" }}
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
