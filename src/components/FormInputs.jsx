import React from "react";
import { ButtonContainer } from "./Styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import { Item } from "./ButtonStyles";

function FormInputs() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <label className="fnameLabel" htmlFor="fname">
              First Name
            </label>
            <input
              type="text"
              className="fname"
              name="fname"
              placeholder="Your name.."
            />
          </Grid>
          <Grid item xs={8}>
            <label className="lnameLabel" htmlFor="lname">
              Last Name
            </label>
            <input
              type="text"
              className="lname"
              name="lname"
              placeholder="Your last name.."
            />
          </Grid>
        </Grid>
      </Box>
      <ButtonContainer></ButtonContainer>
      <label className="companylLabel" htmlFor="email">
        Company
      </label>
      <input
        type="text"
        className="companyName"
        name="email"
        placeholder="Please Enter Company Name.."
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

      <label className="phoneLabel" htmlFor="email">
        Phone Number
      </label>
      <input
        type="text"
        className="phoneNumber"
        name="email"
        placeholder="Phone Number.."
      />

      <label className="phoneLabel" htmlFor="email">
        Phone Number
      </label>
      <input
        type="text"
        className="phoneNumber"
        name="email"
        placeholder="Phone Number.."
      />
    </>
  );
}

export default FormInputs;
