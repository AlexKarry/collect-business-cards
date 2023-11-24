import React from "react";

function FormInputs() {
  return (
    <>
      <label className="fnameLabel" htmlFor="fname">
        First Name
      </label>
      <input
        type="text"
        className="fname"
        name="fname"
        placeholder="Your name.."
      />

      <label className="lnameLabel" htmlFor="lname">
        Last Name
      </label>
      <input
        type="text"
        className="lname"
        name="lname"
        placeholder="Your last name.."
      />

      <label className="emailLabel" htmlFor="email">
        Email
      </label>
      <input
        type="text"
        className="email"
        name="email"
        placeholder="Your email.."
      />
    </>
  );
}

export default FormInputs;
