import React from "react";
import { Input } from "./Styles"; // Adjust the path if needed
import { ButtonContainer } from "./Styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function FormInputs() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <label className="fnameLabel" htmlFor="fname">
              First Name
            </label>
            <Input aria-label="Demo input" placeholder="Type something…" />
          </Grid>
          <Grid item xs={8}>
            <label className="lnameLabel" htmlFor="lname">
              Last Name
            </label>
            <Input aria-label="Demo input" placeholder="Type something…" />
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
