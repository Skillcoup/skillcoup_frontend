import React, { useState } from "react";
import { MDBRow, MDBCol, MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import Container from "../container/Container";
import NextButton from "../button/NextButton";
import axios from "axios";

const Employer2Component = () => {
  const [about, setAbout] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [pincode, setPincode] = useState("");
  const [URL, setURL] = useState("");
  const [organisationType, setOrganisationType] = useState("");
  const [EmployeeNo, setEmployeeNo] = useState("");

  const aboutChangeHandler = (e) => {
    setAbout(e.target.value);
  };

  const addressChangeHandler = (e) => {
    setAddress(e.target.value);
  };

  const locationChangeHandler = (e) => {
    setLocation(e.target.value);
  };

  const pincodeChangeHandler = (e) => {
    setPincode(e.target.value);
  };

  const URLChangeHandler = (e) => {
    setURL(e.target.value);
  };

  const organizationChangeHandler = (e) => {
    setOrganisationType(e.target.value);
  };

  const employeeChangeHandler = (e) => {
    setEmployeeNo(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/employer/2", {
        about: about,
        address: address,
        location: location,
        pincode: pincode,
        businessURL: URL,
        organisationType: organisationType,
        noOfEmployees: EmployeeNo,
      })
      .then((response) => {
        console.log(response);
        alert("form submitted");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <h1 className="text-start">About Organisation</h1>
      <h2 className="text-start">
        Now it’s time to sparkle. Let potential talent know what you are and
        about your organisation.
      </h2>
      <hr />
      <form onSubmit={submitHandler}>
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
              onChange={aboutChangeHandler}
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
              onChange={addressChangeHandler}
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
              onChange={locationChangeHandler}
            />
          </MDBCol>
          <MDBCol lg="4" className="mb-3 md-lg-0">
            <MDBInput
              label="Pincode"
              id="pincode"
              name="address"
              size="lg"
              required
              onChange={pincodeChangeHandler}
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
              onChange={URLChangeHandler}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="type">Type</label>
          </MDBCol>
          <MDBCol lg="4" className="mb-3 md-lg-0">
            <select
              name="type"
              id="type"
              class="form-control form-control-lg"
              onChange={organizationChangeHandler}
            >
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
              onChange={employeeChangeHandler}
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
