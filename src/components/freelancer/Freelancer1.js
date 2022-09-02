import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";
import Container from "../container/Container";
import NextButton from "../button/NextButton";
import AddButton from "../button/AddButton";


const Freelancer1 = () => {
  return (
    <Container>
      <h1 className="text-start">Personal Details</h1>
      <h2 className="text-start">
        Give a Short Personal Description About Yourself. This information will
        appear on your public profile so that potential clients can get to know
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
            />
          </MDBCol>
          <MDBCol lg="4" className="mb-3 md-lg-0">
            <MDBInput
              type="text"
              name="name"
              id="name"
              size="lg"
              label="Last Name"
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="profile">
              Profile&nbsp;<span>*</span>
            </label>
          </MDBCol>
          <MDBCol lg="8" className="mb-3 md-lg-0">
            <MDBInput type="file" name="profile" id="profile" size="lg" />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="description">
              Description&nbsp;<span>*</span>
            </label>
          </MDBCol>
          <MDBCol lg="8" className="mb-3 md-lg-0">
            <MDBTextArea
              label="Description"
              id="description"
              name="description"
              rows={4}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="language">
              Language&nbsp;<span>*</span>
            </label>
          </MDBCol>
          <MDBCol lg="4" className="mb-3 md-lg-0">
            <MDBInput
              type="text"
              name="language"
              id="language"
              size="lg"
              label="Language"
            />
          </MDBCol>
          <MDBCol lg="3" sm={11} size="12" className="mb-3 md-lg-0">
            <select
              name="language"
              id="language"
              class="form-control form-control-lg"
              required
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </MDBCol>
          <MDBCol sm={1}>
            <AddButton />
          </MDBCol>
        </MDBRow>
        <NextButton onClick={null} />
      </form>
    </Container>
  );
};

export default Freelancer1;
