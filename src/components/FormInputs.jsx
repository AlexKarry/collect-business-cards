import React from "react";
import { Input } from "./Styles";
import Grid from "@mui/material/Grid";

function FormInputs() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Input aria-label="First Name" placeholder="First Name..." />
      </Grid>
      <Grid item xs={6}>
        <Input aria-label="Last Name" placeholder="Last Name..." />
      </Grid>
      <Grid item xs={12}>
        <Input aria-label="Company" placeholder="Company..." />
      </Grid>
      <Grid item xs={12}>
        <Input aria-label="Company" placeholder="Occupation..." />
      </Grid>
      <Grid item xs={12}>
        <Input aria-label="Address Line 1" placeholder="Address Line 1..." />
      </Grid>
      <Grid item xs={12}>
        <Input aria-label="Address Line 2" placeholder="Address Line 2..." />
      </Grid>
      <Grid item xs={6}>
        <Input aria-label="City" placeholder="City..." />
      </Grid>
      <Grid item xs={6}>
        <Input aria-label="State" placeholder="State..." />
      </Grid>
      <Grid item xs={6}>
        <Input aria-label="Zip Code" placeholder="Zip Code..." />
      </Grid>
    </Grid>
  );
}

export default FormInputs;
