import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import classes from "./NextButton.module.css";

const NextButton = () => {
  return (
    <MDBBtn className={classes.button} type="submit">
      Next
    </MDBBtn>
  );
};

export default NextButton;
