import React, { useState } from "react";
import Container from "../container/Container";
import { MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import NextButton from "../button/NextButton";
import axios from "axios";

const Employer1Component = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const organizationChangeHandler = (e) => {
    setOrganisationName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/employer/1", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        organisation: organisationName,
      })
      .then((response) => {
        console.log(response);
        alert("Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <h1 className="text-start">Organisation Details</h1>
      <h2 className="text-start">
        Give a short details about your organisation. This information will
        appear on your public profile so that potential talent can get to know
        your better.
      </h2>
      <hr />
      <form onSubmit={submitHandler}>
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
              id="first_name"
              size="lg"
              label="First Name"
              required
              onChange={firstNameHandler}
            />
          </MDBCol>
          <MDBCol lg="4" className="mb-3 md-lg-0">
            <MDBInput
              type="text"
              name="name"
              id="last_name"
              size="lg"
              label="Last Name"
              required
              onChange={lastNameHandler}
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
              onChange={organizationChangeHandler}
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
              onChange={emailChangeHandler}
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
              onChange={phoneChangeHandler}
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
        <NextButton />
      </form>
    </Container>
  );
};

export default Employer1Component;
