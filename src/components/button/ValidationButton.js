import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import classes from "./AddButton.module.css";

const ValidationButton = (props) => {
  return (
    <MDBBtn outline type="button" size="lg" className={classes.button}>
      <MDBIcon fas icon={props.icon} />
    </MDBBtn>
  );
};

export default ValidationButton;
