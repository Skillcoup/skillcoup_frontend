import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import classes from "./Container.module.css";

const Container = (props) => {
  return (
    <MDBContainer fluid className={classes.fluid}>
      <MDBContainer className={classes.container}>
        {props.children}
      </MDBContainer>
    </MDBContainer>
  );
};

export default Container;
