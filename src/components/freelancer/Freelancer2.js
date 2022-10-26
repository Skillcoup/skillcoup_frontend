import React, { useState } from "react";
import { MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import Container from "../container/Container";
import NextButton from "../button/NextButton";
import AddButton from "../button/AddButton";
import RemoveButton from "../button/RemoveButton";
import axios from "axios";

const Freelancer2 = () => {
  const [website, setWebsite] = useState("");
  const [skills, setSkills] = useState([{ language: "", level: "" }]);
  const [certifications, setCertifications] = useState([{ name: "" }]);
  const [education, setEducation] = useState([
    { qualification: "", start: "", end: "" },
  ]);

  const addEducation = () => {
    setEducation([...education, { qualification: "", start: "", end: "" }]);
  };

  const educationSkillHandler = (i, e) => {
    let array = [...education];
    array[i][e.target.id] = e.target.value;
    setEducation(array);
  };

  const removeEducation = (i) => {
    let array = [...education];
    array.splice(i, 1);
    setEducation(array);
  };

  const addSkills = () => {
    setSkills([...skills, { language: "", level: "" }]);
  };

  const skillsChangeHandler = (i, e) => {
    let skillArray = [...skills];
    skillArray[i][e.target.id] = e.target.value;
    setSkills(skillArray);
  };

  const removeSkills = (i) => {
    let skillArray = [...skills];
    skillArray.splice(i, 1);
    setSkills(skillArray);
  };

  const certificationChangeHandler = (i, e) => {
    let array = [...certifications];
    array[i]["name"] = e.target.value;
    setCertifications(array);
  };

  const addCertifications = () => {
    setCertifications([...certifications, { name: "" }]);
  };

  const removeCertifications = (i) => {
    let array = [...certifications];
    array.splice(i, 1);
    setCertifications(array);
  };

  const websiteChangeHandler = (e) => {
    setWebsite(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/freelancer/2", {
        skills: skills,
        certification: certifications,
        education: education,
        website: website,
      })
      .then((response) => {
        console.log(response);
        alert("successfull");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <h1 className="text-start">Professional Details</h1>
      <h2 className="text-start">
        Now it’s time to sparkle. Let potential clients know what you are good
        at and about your certifications, education and experiences.
      </h2>
      <hr />
      <form onSubmit={submitHandler}>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="skills">Skills</label>
          </MDBCol>
          <MDBCol lg="8">
            {skills.map((element, index) => {
              return (
                <MDBRow className={index ? "mt-2" : "mt-0"}>
                  <MDBCol lg="6" className="mb-3 md-lg-0">
                    <MDBInput
                      type="text"
                      name="skills"
                      id="language"
                      size="lg"
                      label="Language"
                      onChange={(e) => skillsChangeHandler(index, e)}
                      value={element.language || ""}
                    />
                  </MDBCol>
                  <MDBCol lg="5" sm={10} size="12" className="mb-3 md-lg-0">
                    <select
                      name="skills"
                      id="level"
                      class="form-control form-control-lg"
                      value={element.level || ""}
                      onChange={(e) => skillsChangeHandler(index, e)}
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Expert">Expert</option>
                    </select>
                  </MDBCol>
                  <MDBCol sm={1}>
                    {index ? (
                      <RemoveButton onClick={removeSkills} />
                    ) : (
                      <AddButton onClick={addSkills} />
                    )}
                  </MDBCol>
                </MDBRow>
              );
            })}
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="education">Education</label>
          </MDBCol>
          <MDBCol lg="8">
            {education.map((element, index) => {
              return (
                <MDBRow className={index ? "mt-2" : "mt-0"}>
                  <MDBCol lg="11" sm="10" size={9} className="mb-3 md-lg-0">
                    <MDBInput
                      type="text"
                      name="education"
                      id="qualification"
                      size="lg"
                      value={element.qualification || ""}
                      onChange={(e) => educationSkillHandler(index, e)}
                      label="Mention your highest qualification"
                    />
                  </MDBCol>
                  <MDBCol size={1}>
                    {index ? (
                      <RemoveButton onClick={removeEducation} />
                    ) : (
                      <AddButton onClick={addEducation} />
                    )}
                  </MDBCol>
                  <MDBCol lg={6} className="mb-3 md-lg-0 mt-2">
                    <MDBInput
                      type="date"
                      name="education"
                      id="start"
                      size="lg"
                      value={element.start || ""}
                      label="Start"
                      onChange={(e) => educationSkillHandler(index, e)}
                    />
                  </MDBCol>
                  <MDBCol lg={6} className="mb-3 md-lg-0 mt-2">
                    <MDBInput
                      type="date"
                      name="education"
                      id="end"
                      value={element.end || ""}
                      size="lg"
                      onChange={(e) => educationSkillHandler(index, e)}
                      label="End"
                    />
                  </MDBCol>
                </MDBRow>
              );
            })}
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="certificate">Certification</label>
          </MDBCol>
          <MDBCol lg="8">
            {certifications.map((element, index) => {
              return (
                <MDBRow className={index ? "mt-1" : "mt-0"}>
                  <MDBCol lg="11" sm="10" size={9} className="mb-3 md-lg-0">
                    <MDBInput
                      label="Mention your certification courses if any"
                      id="certificate"
                      name="certificate"
                      value={element.name || ""}
                      onChange={(e) => certificationChangeHandler(e)}
                      size="lg"
                    />
                  </MDBCol>
                  <MDBCol size={1}>
                    {index ? (
                      <RemoveButton onClick={removeCertifications} />
                    ) : (
                      <AddButton onClick={addCertifications} />
                    )}
                  </MDBCol>
                </MDBRow>
              );
            })}
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol lg="4" className="d-flex align-items-center mb-2 mb-lg-0">
            <label for="website">Personal Website</label>
          </MDBCol>
          <MDBCol lg="8" className="mb-3 md-lg-0">
            <MDBInput
              label="We won't share with anyone"
              id="website"
              name="website"
              type="url"
              value={website}
              onChange={websiteChangeHandler}
              size="lg"
            />
          </MDBCol>
        </MDBRow>
        <NextButton onClick={submitHandler} />
      </form>
    </Container>
  );
};

export default Freelancer2;
