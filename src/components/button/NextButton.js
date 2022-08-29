import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import classes from "./NextButton.module.css";

const NextButton = (props) => {
  return (
    <MDBBtn className={classes.button} onClick={props.onClick} type="submit">
      Next
    </MDBBtn>
  );
};

export default NextButton;
