import React from "react";
import Container from "../container/Container";
import { MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import NextButton from "../button/NextButton";

const Employer1Component = () => {
  return (
    <Container>
      <h1 className="text-start">Organisation Details</h1>
      <h2 className="text-start">
        Give a short details about your organisation. This information will
        appear on your public profile so that potential talent can get to know
        your better.
      </h2>
      <hr />
      <form>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="name">
              Name&nbsp;<span>*</span>
            </label>
          </MDBCol>
          <MDBCol lg="4" className="mb-3 md-lg-0">
            <MDBInput
              type="text"
              name="name"
              id="name"
              size="lg"
              label="First Name"
              required
            />
          </MDBCol>
          <MDBCol lg="4" className="mb-3 md-lg-0">
            <MDBInput
              type="text"
              name="name"
              id="name"
              size="lg"
              label="Last Name"
              required
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="organisation">
              Organisation Name&nbsp;<span>*</span>
            </label>
          </MDBCol>
          <MDBCol lg="8" className="mb-3 md-lg-0">
            <MDBInput
              type="text"
              name="organisation"
              id="organisation"
              label="Organisation Name"
              size="lg"
              required
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="description">
              Business Email ID&nbsp;<span>*</span>
            </label>
          </MDBCol>
          <MDBCol lg="8" className="mb-3 md-lg-0">
            <MDBInput
              type="email"
              name="email"
              id="business"
              label="test@example.com"
              size="lg"
              required
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="phone">
              Phone Number&nbsp;<span>*</span>
            </label>
          </MDBCol>
          <MDBCol lg="8" className="mb-3 md-lg-0">
            <MDBInput
              type="tel"
              name="phone"
              id="phone"
              size="lg"
              label="Phone Number"
              required
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="logo">
              Organisation Logo&nbsp;<span>*</span>
            </label>
          </MDBCol>
          <MDBCol lg="8" className="mb-3 md-lg-0">
            <MDBInput type="file" name="logo" id="logo" size="lg" required />
          </MDBCol>
        </MDBRow>
        <NextButton onClick={null} />
      </form>
    </Container>
  );
};

export default Employer1Component;