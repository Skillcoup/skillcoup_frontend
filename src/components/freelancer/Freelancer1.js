import React, { useState, Fragment } from "react";
import { MDBRow, MDBCol, MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import Container from "../container/Container";
import NextButton from "../button/NextButton";
import AddButton from "../button/AddButton";
import RemoveButton from "../button/RemoveButton";
import axios from "axios";

const Freelancer1 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [languageValue, setLanguageValue] = useState([{ lang: "", level: "" }]);

  const firstNameChangeHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameChangeHandler = (e) => {
    setLastName(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const languageChangeHandler = (i, e) => {
    let languages = [...languageValue];
    languages[i][e.target.id] = e.target.value;
    setLanguageValue(languages);
  };

  const addFormFields = () => {
    setLanguageValue([...languageValue, { lang: "", level: "" }]);
  };

  const removeFormFields = (i) => {
    let languages = [...languageValue];
    languages.splice(i, 1);
    setLanguageValue(languages);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/freelancer/1", {
        firstName: firstName,
        lastName: lastName,
        description: description,
        language: languageValue,
      })
      .then((response) => {
        console.log(response);
        alert("form submitted");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <h1 className="text-start">Personal Details</h1>
      <h2 className="text-start">
        Give a Short Personal Description About Yourself. This information will
        appear on your public profile so that potential clients can get to know
        your better.
      </h2>
      <hr />
      <form onSubmit={submitHandler}>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="name">
              Name&nbsp;<span>*</span>
            </label>
          </MDBCol>
          <MDBCol lg="4" className="mb-3 md-lg-0">
            <MDBInput
              type="text"
              name="name"
              id="firstName"
              size="lg"
              label="First Name"
              value={firstName}
              onChange={firstNameChangeHandler}
            />
          </MDBCol>
          <MDBCol lg="4" className="mb-3 md-lg-0">
            <MDBInput
              type="text"
              name="name"
              id="lastName"
              size="lg"
              label="Last Name"
              onChange={lastNameChangeHandler}
              value={lastName}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="profile">
              Profile&nbsp;<span>*</span>
            </label>
          </MDBCol>
          <MDBCol lg="8" className="mb-3 md-lg-0">
            <MDBInput type="file" name="profile" id="profile" size="lg" />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="description">
              Description&nbsp;<span>*</span>
            </label>
          </MDBCol>
          <MDBCol lg="8" className="mb-3 md-lg-0">
            <MDBTextArea
              label="Description"
              id="description"
              name="description"
              value={description}
              onChange={descriptionChangeHandler}
              rows={4}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="language">
              Language&nbsp;<span>*</span>
            </label>
          </MDBCol>
          <MDBCol lg="8">
            {languageValue.map((element, index) => {
              return (
                <MDBRow className={index ? "mt-2" : "mt-0"}>
                  <MDBCol lg="6" className="mb-3 md-lg-0">
                    <MDBInput
                      type="text"
                      name="language"
                      id="lang"
                      size="lg"
                      label="Language"
                      value={element.lang || ""}
                      onChange={(e) => languageChangeHandler(index, e)}
                    />
                  </MDBCol>
                  <MDBCol lg="5" sm={11} size="12" className="mb-3 md-lg-0">
                    <select
                      name="language"
                      id="level"
                      class="form-control form-control-lg"
                      value={element.level || ""}
                      required
                      onChange={(e) => languageChangeHandler(index, e)}
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Expert">Expert</option>
                    </select>
                  </MDBCol>
                  <MDBCol sm={1}>
                    {index ? (
                      <RemoveButton onClick={removeFormFields} />
                    ) : (
                      <AddButton onClick={addFormFields} />
                    )}
                  </MDBCol>
                </MDBRow>
              );
            })}
          </MDBCol>
        </MDBRow>
        <NextButton onClick={submitHandler} />
      </form>
    </Container>
  );
};

export default Freelancer1;
