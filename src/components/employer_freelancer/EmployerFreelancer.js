import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import classes from "./EmployerFreelancer.module.css";
import Container from "../container/Container";

const EmployerFreelancer = () => {
  return (
    <Container>
      <h1 className={classes.heading}>How do you describe yourself as?</h1>
      <MDBRow>
        <MDBCol lg="6" className="mb-4 mb-lg-0">
          <MDBCard className={`${classes.card} ${classes.card1}`}>
            <MDBCardBody className={classes["card-body"]}>
              <MDBCardTitle className={classes.title}>Freelancer</MDBCardTitle>
              <MDBCardSubTitle className={classes["sub-title"]}>
                We are very well aware of the reasons that professionals have to
                go for freelancing, but today we will discuss why we are hiring.
              </MDBCardSubTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="6">
          <MDBCard className={`${classes.card} ${classes.card2}`}>
            <MDBCardBody className={classes["card-body"]}>
              <MDBCardTitle className={classes.title}>Employer</MDBCardTitle>
              <MDBCardSubTitle className={classes["sub-title"]}>
                We are very well aware of the reasons that professionals have to
                go for freelancing, but today we will discuss why we are hiring.
              </MDBCardSubTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </Container>
  );
};

export default EmployerFreelancer;
