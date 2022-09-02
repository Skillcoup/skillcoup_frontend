import React from "react";
import { MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import Container from "../container/Container";
import NextButton from "../button/NextButton";
import AddButton from "../button/AddButton";

const Freelancer2 = () => {
  return (
    <Container>
      <h1 className="text-start">Professional Details</h1>
      <h2 className="text-start">
        Now it’s time to sparkle. Let potential clients know what you are good
        at and about your certifications, education and experiences.
      </h2>
      <hr />
      <form>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="skills">Skills</label>
          </MDBCol>
          <MDBCol lg="4" className="mb-3 md-lg-0">
            <MDBInput
              type="text"
              name="skills"
              id="language"
              size="lg"
              label="Language"
            />
          </MDBCol>
          <MDBCol lg="3" sm={11} size="12" className="mb-3 md-lg-0">
            <select
              name="skills"
              id="level"
              class="form-control form-control-lg"
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
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="education">Education</label>
          </MDBCol>
          <MDBCol lg="7" sm="10" size={9} className="mb-3 md-lg-0">
            <MDBInput
              type="text"
              name="education"
              id="education"
              size="lg"
              label="Mention your highest qualification"
            />
          </MDBCol>
          <MDBCol size={1}>
            <AddButton />
          </MDBCol>
          <MDBCol lg={4}></MDBCol>
          <MDBCol lg={4} className="mb-3 md-lg-0 mt-2">
            <MDBInput
              type="date"
              name="education"
              id="start"
              size="lg"
              label="Start"
            />
          </MDBCol>
          <MDBCol lg={4} className="mb-3 md-lg-0 mt-2">
            <MDBInput
              type="date"
              name="education"
              id="end"
              size="lg"
              label="End"
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="certificate">Certification</label>
          </MDBCol>
          <MDBCol lg="7" sm="10" size={9} className="mb-3 md-lg-0">
            <MDBInput
              label="Mention your certification courses if any"
              id="certificate"
              name="certificate"
              size="lg"
            />
          </MDBCol>
          <MDBCol size={1}>
            <AddButton />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="website">Personal Website</label>
          </MDBCol>
          <MDBCol lg="8" className="mb-3 md-lg-0">
            <MDBInput
              label="We won't share with anyone"
              id="website"
              name="website"
              type="url"
              size="lg"
            />
          </MDBCol>
        </MDBRow>
        <NextButton onClick={null} />
      </form>
    </Container>
  );
};

export default Freelancer2;
