import React, { useState, useEffect } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";
import logo from "../../assets/skillcoup_white.png";
import classes from "./index.css";

export default function Header() {
  const [showBasic, setShowBasic] = useState(true);
  useEffect(() => {
    window
      .matchMedia("(max-width: 991px)")
      .addEventListener("change", () => setShowBasic(false));
  }, []);

  useEffect(() => {
    window
      .matchMedia("(min-width: 992px)")
      .addEventListener("change", () => setShowBasic(true));
  }, []);

  return (
    <header>
      <MDBNavbar expand="lg" light bgColor="white" className={classes.navbar}>
        <MDBContainer>
          <img src={logo} className={classes.logo} alt="Skillcoup logo" />
          <MDBNavbarToggler
            onClick={() => setShowBasic(!showBasic)}
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars" className="text-white" />
          </MDBNavbarToggler>
          <MDBCollapse show={showBasic} className={classes.navbarCollapse}>
            <MDBNavbarNav right className="mb-2 mb-lg-0">
              <MDBNavbarItem active>
                <MDBNavbarLink
                  aria-current="page"
                  href="#"
                  className="text-white me-lg-3"
                >
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#" className="text-white me-lg-3">
                  Find Work
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#" className="text-white me-lg-3">
                  Explore
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#" className="text-white me-lg-3">
                  About
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#" className="text-white me-lg-4">
                  Login
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBBtn className={classes.btn}>Sign Up</MDBBtn>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}
