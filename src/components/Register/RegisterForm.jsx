import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = ({ title, type }) => {
  const [organisationName, setOrganisationName] = useState("");
  const [volunteerName, setVolunteerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkbox, setCheckbox] = useState("");
  const registerUrl = type === "organisation" ? "http://localhost:1337/api/organisation-accounts" : "http://localhost:1337/api/volunteer-accounts";
  const [successMessage, setSuccessMessage] = useState("");
  const navigateHomepage = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    fetch(registerUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        "data": {
          organisation_name: organisationName,
          full_name: volunteerName,
          contact_number: contactNumber,
          email_address: email,
          password: password,
        },
      }),
    }).then(response => {
      if (response.ok) {
        setSuccessMessage("You successfully created an Account");
        navigateHomepage("/");
      }
    });
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="organizationContainerWrapper">
        <div className="rightContainer">
          <div className="signUpContainer">
            <h3>{title}</h3>
            {type === "organisation" ? (
              <div className="inputBox">
                <input
                  type="text"
                  name="organisationName"
                  placeholder="Organisation Name"
                  onChange={(event) => setOrganisationName(event.target.value)}
                  required
                />
              </div>
            ) : (
              <div className="inputBox">
                <input
                  type="text"
                  name="volunteerName"
                  placeholder="Full Name"
                  onChange={(event) => setVolunteerName(event.target.value)}
                  required
                />
              </div>
            )}
            <div className="inputBox">
              <input
                type="text"
                name="contactNumber"
                placeholder="Contact Number"
                onChange={(event) => setContactNumber(event.target.value)}
                required
              />
            </div>
            <div className="inputBox">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="inputBox">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="inputBox">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re Enter Password"
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
            </div>
            <div className="agreeCheckbox">
              <input
                type="checkbox"
                name="checkbox"
                onChange={(event) => setCheckbox(event.target.value)}
                required
              />
              <p>
                I agree with <a>Terms</a> and <a>Privacy</a>
              </p>
            </div>
            <div className="buttonContainer">
              <button
                type="submit"
                className="signUpButton orgbutton"
              >
                SIGN UP
              </button>
            </div>
            <p className="success">{successMessage}</p>
            <p className="accountExists">
              Already have an account? <a href="/login">Log In</a>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
