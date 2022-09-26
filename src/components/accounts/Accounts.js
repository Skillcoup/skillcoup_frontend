import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import Container from "../container/Container";
import NextButton from "../button/NextButton";
import classes from "./Accounts.module.css";
import ValidationButton from "../button/ValidationButton";

const Accounts = () => {
  return (
    <Container>
      <h1 className="text-start">Linked Accounts</h1>
      <h2 className="text-start mb-1">Let’s improve your credibility!</h2>
      <h2 className="text-start">
        Link your accounts and help us provide you with more clients. Don’t
        worry, your information will always remain private.
      </h2>
      <hr />
      <form>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex mb-2 mb-lg-0">
            <label for="name">Your Social Presence</label>
          </MDBCol>
          <MDBCol lg="8" className="mb-3 md-lg-0">
            <MDBRow>
              <MDBCol lg="12" className="text-start">
                <h3>Feel free to share, we promise it will remain private.</h3>
              </MDBCol>
              <MDBCol lg="12" className="d-flex gap-4">
                <MDBBtn
                  floating
                  size="lg"
                  tag="a"
                  className={classes.accountButton}
                >
                  <MDBIcon fab icon="instagram" size="lg" />
                </MDBBtn>
                <MDBBtn
                  floating
                  size="lg"
                  tag="a"
                  className={classes.accountButton}
                >
                  <MDBIcon fab icon="facebook-f" size="lg" />
                </MDBBtn>
                <MDBBtn
                  floating
                  size="lg"
                  tag="a"
                  className={classes.accountButton}
                >
                  <MDBIcon fab icon="linkedin-in" size="lg" />
                </MDBBtn>
                <MDBBtn
                  floating
                  size="lg"
                  tag="a"
                  className={classes.accountButton}
                >
                  <MDBIcon fab icon="twitter" size="lg" />
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex mb-2 mb-lg-0">
            <label for="profile">Account Security</label>
          </MDBCol>
          <MDBCol lg="8" className="mb-3 md-lg-0">
            <h4 className="text-start">
              We give the topmost priority to trust and safety. Please verify
              your phone number and email so that we can keep your account
              secure.
            </h4>
            <form className="d-flex flex-column">
              <label for="email" className="text-start mb-2">
                Email ID Verification
              </label>
              <MDBRow>
                <MDBCol lg="11">
                  <MDBInput
                    type="email"
                    name="email"
                    id="email"
                    label="test@example.com"
                    size="lg"
                    required
                  />
                </MDBCol>
                <MDBCol lg="1">
                  <ValidationButton icon="plus" />
                </MDBCol>
              </MDBRow>
              <h5 className="text-start mt-1">It will remain private</h5>
              <label for="pone" className="text-start mt-4 mb-2">
                Phone Number Verification
              </label>
              <MDBRow>
                <MDBCol lg="11">
                  <MDBInput
                    type="tel"
                    name="phone"
                    id="phone"
                    label="Enter your phone number"
                    size="lg"
                    required
                  />
                </MDBCol>
                <MDBCol lg="1">
                  <ValidationButton icon="plus" />
                </MDBCol>
              </MDBRow>
              <h5 className="text-start mt-1">It will remain private</h5>
            </form>
          </MDBCol>
        </MDBRow>
        <NextButton onClick={null} />
      </form>
    </Container>
  );
};

export default Accounts;
