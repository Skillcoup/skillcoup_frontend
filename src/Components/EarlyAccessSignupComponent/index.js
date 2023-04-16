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
      } else {
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

      <div className="flex flex-row justify-center">
        <div className="border-2 drop-shadow-lg w-1/3 text-2xl flex justify-center flex-col pl-5 ml-10 pt-3 pb-3 rounded-3xl">
          <h3 className="bg-skillcoup-gradient-text font-semibold pb-2">The Old Way</h3>
          <h4 className="text-lg">Heavy commission</h4>
          <h4 className="text-lg"> Payment delay</h4>
          <h4 className="text-lg">Unverified profiles </h4>
          <h4 className="text-lg">Lack of support</h4>
        </div>
        <div className="border-2 drop-shadow-lg w-1/3 flex justify-center bg-skillcoup-gradient flex-col pl-5 ml-10 pt-3 pb-3 rounded-3xl">
 
        <h3 className="skillcoup-header-dark-color text-2xl font-semibold pb-2 text-white">The Skillcoup Way</h3>
          <h4 className="text-white text-lg">No commission</h4>
          <h4 className="text-white text-lg">On time Payment</h4>
          <h4 className="text-white text-lg">Verified profiles </h4>
          <h4 className="text-white text-lg">Priority support</h4>
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
        <div className="tick-cards p-3 w-2/3 mb-2 ">
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
        <div className="tick-cards p-3 w-2/3 mb-2 ">
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
        <div className="tick-cards p-3 w-2/3 mb-2">
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
        <div className="tick-cards p-3 w-2/3 mb-2 ">
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
        <div className="tick-cards p-3 w-2/3 mb-2">
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
        <button className="global-btn-large"><h4>Get Early Access</h4></button>
      </div>
      <StayUpdatedComponent />
      <EarlyAccessFooter />
    </>
  );
};

export default EarlyAccessSignupComponent;
