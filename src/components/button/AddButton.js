import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import classes from "./AddButton.module.css";

const AddButton = () => {
  return (
    <MDBBtn outline type="button" size="lg" className={classes.button}>
      <MDBIcon fas icon="plus" />
    </MDBBtn>
  );
};

export default AddButton;
