import React from "react";
import { useState } from "react";

import "./index.css";

import EarlyAccessNavbar from "../EarlyAccessNavbar";
import EarlyAccessFooter from "../EarlyAccessFooter";
import StayUpdatedComponent from "../StayUpdatedComponent";
import { sendEarlyAccessDataToBackend } from "../../Service/earlyAcess.service";



const list = [
  "Design",
  "Writing & Translation",
  "Video & Animation",
  "Web & App Development",
  "Digital Marketing",
  "Music & Audio"
]

const EarlyAccessSignupComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("");
  const [work, setWork] = useState(false);
  const [hire, setHire] = useState(false);

  const clearAllFields = () => {
    setName("");
    setEmail("");
    setMobile("");
    setRole("");
    setWork(false);
    setHire(false);
  }

  const onSignupForEarlyAccess = () => {
    let data = {
      fullName: name,
      emailId: email,
      phoneNumber: mobile,
      userType: hire ? "Client" : "Freelancer",
      userRole: role
    }

    let resp = sendEarlyAccessDataToBackend(data);

    resp.then((res) => {
      if (res.data.success) {
        alert("Signed Up for Early Access");
        clearAllFields();
      }else{
        alert("Something went wrong")
      }
    })

  }

  return (
    <>
      <EarlyAccessNavbar index={2} />
      <div>
        <div className="content-container m-5">
          <h3 style={{ textAlign: "center" }}>
            <strong style={{ color: "#072756" }}>Sign Up For </strong>
            <strong className="colored-Text-Header"> Early</strong>
            <strong style={{ color: "#072756" }}> Access</strong>
          </h3>
        </div>
      </div>

      {/* Two Buttons in a Row */}
      <div className="row" style={{ justifyContent: "center" }}>
        <button className="btn" id="Hire_btn"
          onClick={(e) => {
            if (hire) {
              setHire(false);
              e.target.classList.remove("btn-active");
              e.target.classList.add("btn");
            }
            else {
              setHire(true);
              setWork(false);
              e.target.classList.add("btn-active");
              e.target.classList.remove("btn");
              document.getElementById("Work_btn").classList.remove("btn-active");
              document.getElementById("Work_btn").classList.add("btn");
            }
          }}

        >Want to Hire</button>
        <button className="btn" id="Work_btn"
          onClick={(e) => {
            if (work) {
              setWork(false);
              e.target.classList.remove("btn-active");
              e.target.classList.add("btn");
            }
            else {
              setWork(true);
              setHire(false);
              e.target.classList.add("btn-active");
              e.target.classList.remove("btn");
              document.getElementById("Hire_btn").classList.remove("btn-active");
              document.getElementById("Hire_btn").classList.add("btn");
            }
          }}
        >Want to Work</button>
      </div>

      {/* Form Starts */}
      <div
        className="content-container row"
        style={{ justifyContent: "center", display: "flex", margin: "2rem" }}
      >
        <input
          className="input-outlined"
          type="text"
          placeholder="Enter Your Full Name"
          onChange={(e) => {
            if (e.target.value !== "") {
              setName(e.target.value);
              e.target.classList.add("input-outlined");
            }
            else {
              e.target.classList.add("input-outlined-error");
              e.target.classList.remove("input-outlined");
            }
          }}
        />
        <input
          className="input-outlined"
          type="text"
          placeholder="Enter your email address"
          onChange={(e) => {
            if (e.target.value !== "") {
              setEmail(e.target.value);
              e.target.classList.add("input-outlined");
            }
            else {
              e.target.classList.add("input-outlined-error");
              e.target.classList.remove("input-outlined");
            }
          }}
        />
        <input
          className="input-outlined"
          type="text"
          placeholder="Enter mobile number"
          onChange={(e) => {
            if (e.target.value !== "") {
              setMobile(e.target.value);
              e.target.classList.add("input-outlined");
            }
            else {
              e.target.classList.add("input-outlined-error");
              e.target.classList.remove("input-outlined");
            }
          }}
        />
        <select
          className="select-outlined"
          // Hide if work is false
          style={{ visibility: work ? "visible" : "collapse" }}
          defaultValue={"1"}
          onChange={(e) => {
            if (e.target.value !== "1") {
              setRole(e.target.value);
            }
          }}
        >
          <option value="1" disabled>
            Select your role
          </option>
          {
            // Iterate list
            list.map((item, index) => {
              return <option value={item}>{item}</option>
            })
          }
        </select>
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <button className="btn-early-access ps-5 pe-5 pt-3 pb-2 mt-2 mb-1"
          onClick={onSignupForEarlyAccess}
        >
          <h4>Submit</h4>
        </button>
      </div>
      {/* Form Ends */}

      {/* Earning Made Easy */}
      <div className="content-container m-5">
        <h3 style={{ textAlign: "center" }}>
          <strong style={{ color: "#072756" }}>Earning </strong>
          <strong className="colored-Text-Header">Made Easy</strong>
        </h3>
        <br />

        <p className="subtext" style={{ textAlign: "center" }}>
          Let your skills earn for you
        </p>
        <p className="subtext" style={{ textAlign: "center" }}>
          Achieve a milestone by creating your best personalized profile
        </p>
      </div>

      <div className="row" style={{ justifyContent: "center" }}>
        <div className="card  card-old-way m-2 p-4 ps-5 pe-5">
          <div className="card-head text-align-center">
            <h5 className="card-title card-header-old">The old way</h5>
          </div>
          <div className="card-body">
            <p
              className="card-text card-text-old"
              style={{ textAlign: "left" }}
            >
              Heavy commission
              <br />
              Payment delay
              <br />
              Unverified profiles
              <br />
              Lack of support
            </p>
          </div>
        </div>
        <div className="card card-new-way m-2 p-4 ps-5 pe-5">
          <div className="card-head text-align-center">
            <h5 className="card-title card-header-new">The New Way</h5>
          </div>
          <div>
            <div className="card-body">
              <p className="card-text card-text-new">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.85rem"
                  height="0.85rem"
                  viewBox="0 0 25 23"
                  fill="none"
                  style={{ maxWidth: "fit-content" }}
                >
                  <path
                    d="M24.4768 0.67046C25.1744 1.56298 25.1744 3.00529 24.4768 3.89781L10.1903 22.1766C9.49272 23.0691 8.36542 23.0691 7.66784 22.1766L0.52302 13.0372C-0.17434 12.1447 -0.17434 10.7024 0.52302 9.80986C1.22049 8.91734 2.35114 8.91734 3.04872 9.80986L8.87884 17.3284L21.9543 0.67046C22.6519 -0.223487 23.7792 -0.223487 24.4768 0.67046Z"
                    fill="white"
                  />
                </svg>
                {"  "}No commission
                <br />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.85rem"
                  height="0.85rem"
                  viewBox="0 0 25 23"
                  fill="none"
                  style={{ maxWidth: "fit-content" }}
                >
                  <path
                    d="M24.4768 0.67046C25.1744 1.56298 25.1744 3.00529 24.4768 3.89781L10.1903 22.1766C9.49272 23.0691 8.36542 23.0691 7.66784 22.1766L0.52302 13.0372C-0.17434 12.1447 -0.17434 10.7024 0.52302 9.80986C1.22049 8.91734 2.35114 8.91734 3.04872 9.80986L8.87884 17.3284L21.9543 0.67046C22.6519 -0.223487 23.7792 -0.223487 24.4768 0.67046Z"
                    fill="white"
                  />
                </svg>
                {"  "}On time payment
                <br />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.85rem"
                  height="0.85rem"
                  viewBox="0 0 25 23"
                  fill="none"
                  style={{ maxWidth: "fit-content" }}
                >
                  <path
                    d="M24.4768 0.67046C25.1744 1.56298 25.1744 3.00529 24.4768 3.89781L10.1903 22.1766C9.49272 23.0691 8.36542 23.0691 7.66784 22.1766L0.52302 13.0372C-0.17434 12.1447 -0.17434 10.7024 0.52302 9.80986C1.22049 8.91734 2.35114 8.91734 3.04872 9.80986L8.87884 17.3284L21.9543 0.67046C22.6519 -0.223487 23.7792 -0.223487 24.4768 0.67046Z"
                    fill="white"
                  />
                </svg>
                {"  "}Verified profiles
                <br />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.85rem"
                  height="0.85rem"
                  viewBox="0 0 25 23"
                  fill="none"
                  style={{ maxWidth: "fit-content" }}
                >
                  <path
                    d="M24.4768 0.67046C25.1744 1.56298 25.1744 3.00529 24.4768 3.89781L10.1903 22.1766C9.49272 23.0691 8.36542 23.0691 7.66784 22.1766L0.52302 13.0372C-0.17434 12.1447 -0.17434 10.7024 0.52302 9.80986C1.22049 8.91734 2.35114 8.91734 3.04872 9.80986L8.87884 17.3284L21.9543 0.67046C22.6519 -0.223487 23.7792 -0.223487 24.4768 0.67046Z"
                    fill="white"
                  />
                </svg>
                {"  "}Priority support
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container m-5">
        <h3 style={{ textAlign: "center" }}>
          <strong style={{ color: "#072756" }}>Hire the </strong>
          <strong className="colored-Text-Header"> BEST </strong>
          <strong style={{ color: "#072756" }}>talent</strong>
        </h3>
      </div>
      <div className="justify-content-center flex-on row">
        <div className="tick-cards p-3 m-3">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p class="text-features">Post a Job-</p>
            <p class="text-features-color">It's Free</p>
          </div>
        </div>
        <div className="tick-cards p-3 m-3">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p class="text-features m-1">Accept{" "}</p>
            <p class="text-features-color m-1">Proposal</p>
            <p class="text-features m-1">{"\tand Start Working"}</p>
          </div>
        </div>
        <div className="tick-cards p-3 m-3">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p class="text-features-color m-1">{"Verified"}</p>
            <p class="text-features m-1">{"Profiles"}</p>
          </div>
        </div>
        <div className="tick-cards p-3 m-3">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p class="text-features m-1">Pay for the work you are</p>
            <p class="text-features-color m-1"> happy</p>
            <p class="text-features m-1">with</p>
          </div>
        </div>
        <div className="tick-cards p-3 m-3">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p class="text-features-color m-1">Lifetime</p>
            <p class="text-features m-1">priority support</p>
          </div>
        </div>
      </div>
      <div className="content-container m-5">
        <h3 style={{ textAlign: "center" }}>
          <strong style={{ color: "#072756" }}>Freelance Smarter, Not Harder</strong>
        </h3>
      </div>
      <div className="justify-content-center flex-on">
        <button className="btn-early-access"><h4>Get Early Access</h4></button>
      </div>
      <StayUpdatedComponent />
      <EarlyAccessFooter />
    </>
  );
};

export default EarlyAccessSignupComponent;
