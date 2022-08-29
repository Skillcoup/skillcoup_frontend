import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import Container from "../container/Container";
import NextButton from "../button/NextButton";

const Employer2Component = () => {
  return (
    <Container>
      <h1 className="text-start">About Organisation</h1>
      <h2 className="text-start">
        Now it’s time to sparkle. Let potential talent know what you are and
        about your organisation.
      </h2>
      <hr />
      <form>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="about">
              About&nbsp;<span>*</span>
            </label>
          </MDBCol>
          <MDBCol lg="8" className="mb-3 md-lg-0">
            <MDBTextArea
              label="Describe your organisation in the best possible way you can. (atleast 150 characters)."
              id="about"
              name="about"
              rows={4}
              required
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="about">
              Address&nbsp;<span>*</span>
            </label>
          </MDBCol>
          <MDBCol lg="8" className="mb-3 md-lg-0">
            <MDBTextArea
              label="Permanent Address"
              id="address"
              name="address"
              rows={3}
              required
            />
          </MDBCol>
          <MDBCol lg="4"></MDBCol>
          <MDBCol lg="4" className="mb-3 md-lg-0">
            <MDBInput
              label="Location"
              id="location"
              name="address"
              size="lg"
              required
            />
          </MDBCol>
          <MDBCol lg="4" className="mb-3 md-lg-0">
            <MDBInput
              label="Pincode"
              id="pincode"
              name="address"
              size="lg"
              required
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="website">
              Business Website&nbsp;<span>*</span>
            </label>
          </MDBCol>
          <MDBCol lg="8" className="mb-3 md-lg-0">
            <MDBInput
              type="url"
              name="website"
              id="website"
              size="lg"
              label="Enter your business website URL here"
              required
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="type">Type</label>
          </MDBCol>
          <MDBCol lg="4" className="mb-3 md-lg-0">
            <select name="type" id="type" class="form-control form-control-lg">
              <option value="Organisation Type" selected>
                Organisation Type
              </option>
              <option value="Small">Small</option>
              <option value="Large">Large</option>
              <option value="Startup">Startup</option>
              <option value="Agency">Agency</option>
              <option value="NGO">NGO</option>
              <option value="Other">Other</option>
            </select>
          </MDBCol>
          <MDBCol lg="4" size="12" className="mb-3 md-lg-0">
            <select
              name="type"
              id="number"
              class="form-control form-control-lg"
            >
              <option value="No. of Employees" selected>
                No. of Employees
              </option>
              <option value="1-5">1-5</option>
              <option value="6-12">6-12</option>
              <option value="13-34">13-34</option>
              <option value="25-30">25-30</option>
              <option value="50+">50+</option>
            </select>
          </MDBCol>
        </MDBRow>
        <NextButton onClick={null} />
      </form>
    </Container>
  );
};

export default Employer2Component;
