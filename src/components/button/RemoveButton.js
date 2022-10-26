import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import classes from "./AddButton.module.css";

const AddButton = (props) => {
  return (
    <MDBBtn
      outline
      type="button"
      size="lg"
      className={classes.button}
      onClick={props.onClick}
    >
      <MDBIcon fas icon="minus" />
    </MDBBtn>
  );
};

export default AddButton;
